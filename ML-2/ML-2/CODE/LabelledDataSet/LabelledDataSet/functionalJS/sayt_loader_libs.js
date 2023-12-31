!function(e, t) {
    function n(e) {
        return L.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    function i(e) {
        if (!_n[e]) {
            var t = M.body, n = L("<" + e + ">").appendTo(t), i = n.css("display");
            n.remove(), ("none" === i || "" === i) && (gn || (gn = M.createElement("iframe"), gn.frameBorder = gn.width = gn.height = 0), t.appendChild(gn), vn && gn.createElement || (vn = (gn.contentWindow || gn.contentDocument).document, vn.write(("CSS1Compat" === M.compatMode ? "<!doctype html>" : "") + "<html><body>"), vn.close()), n = vn.createElement(e), vn.body.appendChild(n), i = L.css(n, "display"), t.removeChild(gn)), _n[e] = i
        }
        return _n[e]
    }
    function r(e, t) {
        var n = {};
        return L.each(En.concat.apply([], En.slice(0, t)), function() {
            n[this] = e
        }), n
    }
    function o() {
        bn = t
    }
    function s() {
        return setTimeout(o, 0), bn = L.now()
    }
    function a() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function l() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function c(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var i, r, o, s, a, l, c, u, h = e.dataTypes, d = {}, f = h.length, p = h[0];
        for (i = 1; f > i; i++) {
            if (1 === i)
                for (r in e.converters)
                    "string" == typeof r && (d[r.toLowerCase()] = e.converters[r]);
            if (s = p, p = h[i], "*" === p)
                p = s;
            else if ("*" !== s && s !== p) {
                if (a = s + " " + p, l = d[a] || d["* " + p], !l) {
                    u = t;
                    for (c in d)
                        if (o = c.split(" "), (o[0] === s || "*" === o[0]) && (u = d[o[1] + " " + p])) {
                            c = d[c], c===!0 ? l = u : u===!0 && (l = c);
                            break
                        }
                }
                !l&&!u && L.error("No conversion from " + a.replace(" ", " to ")), l!==!0 && (n = l ? l(n) : u(c(n)))
            }
        }
        return n
    }
    function u(e, n, i) {
        var r, o, s, a, l = e.contents, c = e.dataTypes, u = e.responseFields;
        for (o in u)
            o in i && (n[u[o]] = i[o]);
        for (; "*" === c[0];)
            c.shift(), r === t && (r = e.mimeType || n.getResponseHeader("content-type"));
        if (r)
            for (o in l)
                if (l[o] && l[o].test(r)) {
                    c.unshift(o);
                    break
                }
        if (c[0]in i)
            s = c[0];
        else {
            for (o in i) {
                if (!c[0] || e.converters[o + " " + c[0]]) {
                    s = o;
                    break
                }
                a || (a = o)
            }
            s = s || a
        }
        return s ? (s !== c[0] && c.unshift(s), i[s]) : void 0
    }
    function h(e, t, n, i) {
        if (L.isArray(t))
            L.each(t, function(t, r) {
                n || Qt.test(e) ? i(e, r) : h(e + "[" + ("object" == typeof r || L.isArray(r) ? t : "") + "]", r, n, i)
            });
        else if (n || null == t || "object" != typeof t)
            i(e, t);
        else 
            for (var r in t)
                h(e + "[" + r + "]", t[r], n, i)
    }
    function d(e, n) {
        var i, r, o = L.ajaxSettings.flatOptions || {};
        for (i in n)
            n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        r && L.extend(!0, e, r)
    }
    function f(e, n, i, r, o, s) {
        o = o || n.dataTypes[0], s = s || {}, s[o]=!0;
        for (var a, l = e[o], c = 0, u = l ? l.length : 0, h = e === an; u > c && (h ||!a); c++)
            a = l[c](n, i, r), "string" == typeof a && (!h || s[a] ? a = t : (n.dataTypes.unshift(a), a = f(e, n, i, r, a, s)));
        return (h ||!a)&&!s["*"] && (a = f(e, n, i, r, "*", s)), a
    }
    function p(e) {
        return function(t, n) {
            if ("string" != typeof t && (n = t, t = "*"), L.isFunction(n))
                for (var i, r, o, s = t.toLowerCase().split(nn), a = 0, l = s.length; l > a; a++)
                    i = s[a], o = /^\+/.test(i), o && (i = i.substr(1) || "*"), r = e[i] = e[i] || [], r[o ? "unshift": "push"](n)
        }
    }
    function m(e, t, n) {
        var i = "width" === t ? e.offsetWidth: e.offsetHeight, r = "width" === t ? Rt: zt, o = 0, s = r.length;
        if (i > 0) {
            if ("border" !== n)
                for (; s > o; o++)
                    n || (i -= parseFloat(L.css(e, "padding" + r[o])) || 0), "margin" === n ? i += parseFloat(L.css(e, n + r[o])) || 0 : i -= parseFloat(L.css(e, "border" + r[o] + "Width")) || 0;
            return i + "px"
        }
        if (i = Dt(e, t, t), (0 > i || null == i) && (i = e.style[t] || 0), i = parseFloat(i) || 0, n)
            for (; s > o; o++)
                i += parseFloat(L.css(e, "padding" + r[o])) || 0, "padding" !== n && (i += parseFloat(L.css(e, "border" + r[o] + "Width")) || 0), "margin" === n && (i += parseFloat(L.css(e, n + r[o])) || 0);
        return i + "px"
    }
    function g(e, t) {
        t.src ? L.ajax({
            url: t.src,
            async: !1,
            dataType: "script"
        }) : L.globalEval((t.text || t.textContent || t.innerHTML || "").replace(kt, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
    }
    function v(e) {
        var t = M.createElement("div");
        return Ot.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild
    }
    function y(e) {
        var t = (e.nodeName || "").toLowerCase();
        "input" === t ? b(e) : "script" !== t && "undefined" != typeof e.getElementsByTagName && L.grep(e.getElementsByTagName("input"), b)
    }
    function b(e) {
        ("checkbox" === e.type || "radio" === e.type) && (e.defaultChecked = e.checked)
    }
    function _(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }
    function x(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? t.outerHTML = e.outerHTML : "input" !== n || "checkbox" !== e.type && "radio" !== e.type ? "option" === n ? t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(L.expando))
    }
    function w(e, t) {
        if (1 === t.nodeType && L.hasData(e)) {
            var n, i, r, o = L._data(e), s = L._data(t, o), a = o.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (i = 0, r = a[n].length; r > i; i++)
                        L.event.add(t, n + (a[n][i].namespace ? "." : "") + a[n][i].namespace, a[n][i], a[n][i].data)
                    }
            s.data && (s.data = L.extend({}, s.data))
        }
    }
    function E(e) {
        return L.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function C(e) {
        var t = mt.split("|"), n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;)
                n.createElement(t.pop());
        return n
    }
    function S(e, t, n) {
        if (t = t || 0, L.isFunction(t))
            return L.grep(e, function(e, i) {
                var r=!!t.call(e, i, e);
                return r === n
            });
        if (t.nodeType)
            return L.grep(e, function(e) {
                return e === t === n
            });
        if ("string" == typeof t) {
            var i = L.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (ht.test(t))
                return L.filter(t, i, !n);
            t = L.filter(t, i)
        }
        return L.grep(e, function(e) {
            return L.inArray(e, t) >= 0 === n
        })
    }
    function T(e) {
        return !e ||!e.parentNode || 11 === e.parentNode.nodeType
    }
    function k() {
        return !0
    }
    function N() {
        return !1
    }
    function O(e, t, n) {
        var i = t + "defer", r = t + "queue", o = t + "mark", s = L._data(e, i);
        !(!s || "queue" !== n && L._data(e, r) || "mark" !== n && L._data(e, o) ||!setTimeout(function() {
            !L._data(e, r)&&!L._data(e, o) && (L.removeData(e, i, !0), s.fire())
        }, 0))
    }
    function D(e) {
        for (var t in e)
            if (("data" !== t ||!L.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function j(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var r = "data-" + n.replace(R, "-$1").toLowerCase();
            if (i = e.getAttribute(r), "string" == typeof i) {
                try {
                    i = "true" === i?!0 : "false" === i?!1 : "null" === i ? null : L.isNumeric(i) ? parseFloat(i) : $.test(i) ? L.parseJSON(i) : i
                } catch (o) {}
                L.data(e, n, i)
            } else 
                i = t
        }
        return i
    }
    function A(e) {
        var t, n, i = F[e] = {};
        for (e = e.split(/\s+/), t = 0, n = e.length; n > t; t++)
            i[e[t]]=!0;
        return i
    }
    var M = e.document, P = e.navigator, I = e.location, L = function() {
        function n() {
            if (!a.isReady) {
                try {
                    M.documentElement.doScroll("left")
                } catch (e) {
                    return setTimeout(n, 1), void 0
                }
                a.ready()
            }
        }
        var i, r, o, s, a = function(e, t) {
            return new a.fn.init(e, t, i)
        }, l = e.jQuery, c = e.$, u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, h = /\S/, d = /^\s+/, f = /\s+$/, p = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, m = /^[\],:{}\s]*$/, g = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, y = /(?:^|:|,)(?:\s*\[)+/g, b = /(webkit)[ \/]([\w.]+)/, _ = /(opera)(?:.*version)?[ \/]([\w.]+)/, x = /(msie) ([\w.]+)/, w = /(mozilla)(?:.*? rv:([\w.]+))?/, E = /-([a-z]|[0-9])/gi, C = /^-ms-/, S = function(e, t) {
            return (t + "").toUpperCase()
        }, T = P.userAgent, k = Object.prototype.toString, N = Object.prototype.hasOwnProperty, O = Array.prototype.push, D = Array.prototype.slice, j = String.prototype.trim, A = Array.prototype.indexOf, I = {};
        return a.fn = a.prototype = {
            constructor: a,
            init: function(e, n, i) {
                var r, o, s, l;
                if (!e)
                    return this;
                if (e.nodeType)
                    return this.context = this[0] = e, this.length = 1, this;
                if ("body" === e&&!n && M.body)
                    return this.context = M, this[0] = M.body, this.selector = e, this.length = 1, this;
                if ("string" == typeof e) {
                    if (r = "<" !== e.charAt(0) || ">" !== e.charAt(e.length - 1) || e.length < 3 ? u.exec(e) : [null, e, null], r && (r[1] ||!n)) {
                        if (r[1])
                            return n = n instanceof a ? n[0] : n, l = n ? n.ownerDocument || n : M, s = p.exec(e), s ? a.isPlainObject(n) ? (e = [M.createElement(s[1])], a.fn.attr.call(e, n, !0)) : e = [l.createElement(s[1])] : (s = a.buildFragment([r[1]], [l]), e = (s.cacheable ? a.clone(s.fragment) : s.fragment).childNodes), a.merge(this, e);
                        if (o = M.getElementById(r[2]), o && o.parentNode) {
                            if (o.id !== r[2])
                                return i.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = M, this.selector = e, this
                    }
                    return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e)
                }
                return a.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), a.makeArray(e, this))
            },
            selector: "",
            jquery: "1.7.1",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return D.call(this, 0)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e, t, n) {
                var i = this.constructor();
                return a.isArray(e) ? O.apply(i, e) : a.merge(i, e), i.prevObject = this, i.context = this.context, "find" === t ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
            },
            each: function(e, t) {
                return a.each(this, e, t)
            },
            ready: function(e) {
                return a.bindReady(), o.add(e), this
            },
            eq: function(e) {
                return e =+ e, - 1 === e ? this.slice(e) : this.slice(e, e + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            slice: function() {
                return this.pushStack(D.apply(this, arguments), "slice", D.call(arguments).join(","))
            },
            map: function(e) {
                return this.pushStack(a.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: O,
            sort: [].sort,
            splice: [].splice
        }, a.fn.init.prototype = a.fn, a.extend = a.fn.extend = function() {
            var e, n, i, r, o, s, l = arguments[0] || {}, c = 1, u = arguments.length, h=!1;
            for ("boolean" == typeof l && (h = l, l = arguments[1] || {}, c = 2), "object" != typeof l&&!a.isFunction(l) && (l = {}), u === c && (l = this, --c); u > c; c++)
                if (null != (e = arguments[c]))
                    for (n in e)
                        i = l[n], r = e[n], l !== r && (h && r && (a.isPlainObject(r) || (o = a.isArray(r))) ? (o ? (o=!1, s = i && a.isArray(i) ? i : []) : s = i && a.isPlainObject(i) ? i : {}, l[n] = a.extend(h, s, r)) : r !== t && (l[n] = r));
            return l
        }, a.extend({
            noConflict: function(t) {
                return e.$ === a && (e.$ = c), t && e.jQuery === a && (e.jQuery = l), a
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? a.readyWait++ : a.ready(!0)
            },
            ready: function(e) {
                if (e===!0&&!--a.readyWait || e!==!0&&!a.isReady) {
                    if (!M.body)
                        return setTimeout(a.ready, 1);
                    if (a.isReady=!0, e!==!0&&--a.readyWait > 0)
                        return;
                    o.fireWith(M, [a]), a.fn.trigger && a(M).trigger("ready").off("ready")
                }
            },
            bindReady: function() {
                if (!o) {
                    if (o = a.Callbacks("once memory"), "complete" === M.readyState)
                        return setTimeout(a.ready, 1);
                    if (M.addEventListener)
                        M.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", a.ready, !1);
                    else if (M.attachEvent) {
                        M.attachEvent("onreadystatechange", s), e.attachEvent("onload", a.ready);
                        var t=!1;
                        try {
                            t = null == e.frameElement
                        } catch (i) {}
                        M.documentElement.doScroll && t && n()
                    }
                }
            },
            isFunction: function(e) {
                return "function" === a.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === a.type(e)
            },
            isWindow: function(e) {
                return e && "object" == typeof e && "setInterval"in e
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? String(e) : I[k.call(e)] || "object"
            },
            isPlainObject: function(e) {
                if (!e || "object" !== a.type(e) || e.nodeType || a.isWindow(e))
                    return !1;
                try {
                    if (e.constructor&&!N.call(e, "constructor")&&!N.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (n) {
                    return !1
                }
                var i;
                for (i in e);
                return i === t || N.call(e, i)
            },
            isEmptyObject: function(e) {
                for (var t in e)
                    return !1;
                return !0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseJSON: function(t) {
                return "string" == typeof t && t ? (t = a.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : m.test(t.replace(g, "@").replace(v, "]").replace(y, "")) ? new Function("return " + t)() : (a.error("Invalid JSON: " + t), void 0)) : null
            },
            parseXML: function(n) {
                var i, r;
                try {
                    e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                } catch (o) {
                    i = t
                }
                return (!i ||!i.documentElement || i.getElementsByTagName("parsererror").length) && a.error("Invalid XML: " + n), i
            },
            noop: function() {},
            globalEval: function(t) {
                t && h.test(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(C, "ms-").replace(E, S)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
            },
            each: function(e, n, i) {
                var r, o = 0, s = e.length, l = s === t || a.isFunction(e);
                if (i)
                    if (l) {
                        for (r in e)
                            if (n.apply(e[r], i)===!1)
                                break
                    } else 
                        for (; s > o && n.apply(e[o++], i)!==!1;);
                        else if (l) {
                    for (r in e)
                        if (n.call(e[r], r, e[r])===!1)
                            break
                } else 
                    for (; s > o && n.call(e[o], o, e[o++])!==!1;);
                return e
            },
            trim: j ? function(e) {
                return null == e ? "" : j.call(e)
            }
            : function(e) {
                return null == e ? "" : (e + "").replace(d, "").replace(f, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                if (null != e) {
                    var i = a.type(e);
                    null == e.length || "string" === i || "function" === i || "regexp" === i || a.isWindow(e) ? O.call(n, e) : a.merge(n, e)
                }
                return n
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (A)
                        return A.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e)
                            return n
                }
                return - 1
            },
            merge: function(e, n) {
                var i = e.length, r = 0;
                if ("number" == typeof n.length)
                    for (var o = n.length; o > r; r++)
                        e[i++] = n[r];
                else 
                    for (; n[r] !== t;)
                        e[i++] = n[r++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                var i, r = [];
                n=!!n;
                for (var o = 0, s = e.length; s > o; o++)
                    i=!!t(e[o], o), n !== i && r.push(e[o]);
                return r
            },
            map: function(e, n, i) {
                var r, o, s = [], l = 0, c = e.length, u = e instanceof a || c !== t && "number" == typeof c && (c > 0 && e[0] && e[c - 1] || 0 === c || a.isArray(e));
                if (u)
                    for (; c > l; l++)
                        r = n(e[l], l, i), null != r && (s[s.length] = r);
                else 
                    for (o in e)
                        r = n(e[o], o, i), null != r && (s[s.length] = r);
                return s.concat.apply([], s)
            },
            guid: 1,
            proxy: function(e, n) {
                if ("string" == typeof n) {
                    var i = e[n];
                    n = e, e = i
                }
                if (!a.isFunction(e))
                    return t;
                var r = D.call(arguments, 2), o = function() {
                    return e.apply(n, r.concat(D.call(arguments)))
                };
                return o.guid = e.guid = e.guid || o.guid || a.guid++, o
            },
            access: function(e, n, i, r, o, s) {
                var l = e.length;
                if ("object" == typeof n) {
                    for (var c in n)
                        a.access(e, c, n[c], r, o, i);
                    return e
                }
                if (i !== t) {
                    r=!s && r && a.isFunction(i);
                    for (var u = 0; l > u; u++)
                        o(e[u], n, r ? i.call(e[u], u, o(e[u], n)) : i, s);
                    return e
                }
                return l ? o(e[0], n) : t
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(e) {
                e = e.toLowerCase();
                var t = b.exec(e) || _.exec(e) || x.exec(e) || e.indexOf("compatible") < 0 && w.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            },
            sub: function() {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }
                a.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this (), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, i) {
                    return i && i instanceof a&&!(i instanceof e) && (i = e(i)), a.fn.init.call(this, n, i, t)
                }, e.fn.init.prototype = e.fn;
                var t = e(M);
                return e
            },
            browser: {}
        }), a.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
            I["[object " + t + "]"] = t.toLowerCase()
        }), r = a.uaMatch(T), r.browser && (a.browser[r.browser]=!0, a.browser.version = r.version), a.browser.webkit && (a.browser.safari=!0), h.test("Â ") && (d = /^[\s\xA0]+/, f = /[\s\xA0]+$/), i = a(M), M.addEventListener ? s = function() {
            M.removeEventListener("DOMContentLoaded", s, !1), a.ready()
        } : M.attachEvent && (s = function() {
            "complete" === M.readyState && (M.detachEvent("onreadystatechange", s), a.ready())
        }), a
    }(), F = {};
    L.Callbacks = function(e) {
        e = e ? F[e] || A(e) : {};
        var n, i, r, o, s, a = [], l = [], c = function(t) {
            var n, i, r, o;
            for (n = 0, i = t.length; i > n; n++)
                r = t[n], o = L.type(r), "array" === o ? c(r) : "function" === o && (!e.unique ||!h.has(r)) && a.push(r)
        }, u = function(t, c) {
            for (c = c || [], n=!e.memory || [t, c], i=!0, s = r || 0, r = 0, o = a.length; a && o > s; s++)
                if (a[s].apply(t, c)===!1 && e.stopOnFalse) {
                    n=!0;
                    break
                }
            i=!1, a && (e.once ? n===!0 ? h.disable() : a = [] : l && l.length && (n = l.shift(), h.fireWith(n[0], n[1])))
        }, h = {
            add: function() {
                if (a) {
                    var e = a.length;
                    c(arguments), i ? o = a.length : n && n!==!0 && (r = e, u(n[0], n[1]))
                }
                return this
            },
            remove: function() {
                if (a)
                    for (var t = arguments, n = 0, r = t.length; r > n; n++)
                        for (var l = 0; l < a.length && (t[n] !== a[l] || (i && o >= l && (o--, s >= l && s--), a.splice(l--, 1), !e.unique)); l++);
                return this
            },
            has: function(e) {
                if (a)
                    for (var t = 0, n = a.length; n > t; t++)
                        if (e === a[t])
                            return !0;
                return !1
            },
            empty: function() {
                return a = [], this
            },
            disable: function() {
                return a = l = n = t, this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return l = t, (!n || n===!0) && h.disable(), this
            },
            locked: function() {
                return !l
            },
            fireWith: function(t, r) {
                return l && (i ? e.once || l.push([t, r]) : (!e.once ||!n) && u(t, r)), this
            },
            fire: function() {
                return h.fireWith(this, arguments), this
            },
            fired: function() {
                return !!n
            }
        };
        return h
    };
    var H = [].slice;
    L.extend({
        Deferred: function(e) {
            var t, n = L.Callbacks("once memory"), i = L.Callbacks("once memory"), r = L.Callbacks("memory"), o = "pending", s = {
                resolve: n,
                reject: i,
                notify: r
            }, a = {
                done: n.add,
                fail: i.add,
                progress: r.add,
                state: function() {
                    return o
                },
                isResolved: n.fired,
                isRejected: i.fired,
                then: function(e, t, n) {
                    return l.done(e).fail(t).progress(n), this
                },
                always: function() {
                    return l.done.apply(l, arguments).fail.apply(l, arguments), this
                },
                pipe: function(e, t, n) {
                    return L.Deferred(function(i) {
                        L.each({
                            done: [e, "resolve"],
                            fail: [t, "reject"],
                            progress: [n, "notify"]
                        }, function(e, t) {
                            var n, r = t[0], o = t[1];
                            L.isFunction(r) ? l[e](function() {
                                n = r.apply(this, arguments), n && L.isFunction(n.promise) ? n.promise().then(i.resolve, i.reject, i.notify) : i[o + "With"](this === l ? i : this, [n])
                            }) : l[e](i[o])
                        })
                    }).promise()
                },
                promise: function(e) {
                    if (null == e)
                        e = a;
                    else 
                        for (var t in a)
                            e[t] = a[t];
                    return e
                }
            }, l = a.promise({});
            for (t in s)
                l[t] = s[t].fire, l[t + "With"] = s[t].fireWith;
            return l.done(function() {
                o = "resolved"
            }, i.disable, r.lock).fail(function() {
                o = "rejected"
            }, n.disable, r.lock), e && e.call(l, l), l
        },
        when: function(e) {
            function t(e) {
                return function(t) {
                    s[e] = arguments.length > 1 ? H.call(arguments, 0) : t, l.notifyWith(c, s)
                }
            }
            function n(e) {
                return function(t) {
                    i[e] = arguments.length > 1 ? H.call(arguments, 0) : t, --a || l.resolveWith(l, i)
                }
            }
            var i = H.call(arguments, 0), r = 0, o = i.length, s = Array(o), a = o, l = 1 >= o && e && L.isFunction(e.promise) ? e: L.Deferred(), c = l.promise();
            if (o > 1) {
                for (; o > r; r++)
                    i[r] && i[r].promise && L.isFunction(i[r].promise) ? i[r].promise().then(n(r), l.reject, t(r)) : --a;
                a || l.resolveWith(l, i)
            } else 
                l !== e && l.resolveWith(l, o ? [e] : []);
            return c
        }
    }), L.support = function() {
        {
            var t, n, i, r, o, s, a, l, c, u, h, d, f = M.createElement("div");
            M.documentElement
        }
        if (f.setAttribute("className", "t"), f.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*"), i = f.getElementsByTagName("a")[0], !n ||!n.length ||!i)
            return {};
        r = M.createElement("select"), o = r.appendChild(M.createElement("option")), s = f.getElementsByTagName("input")[0], t = {
            leadingWhitespace: 3 === f.firstChild.nodeType,
            tbody: !f.getElementsByTagName("tbody").length,
            htmlSerialize: !!f.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.55/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: "on" === s.value,
            optSelected: o.selected,
            getSetAttribute: "t" !== f.className,
            enctype: !!M.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== M.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, s.checked=!0, t.noCloneChecked = s.cloneNode(!0).checked, r.disabled=!0, t.optDisabled=!o.disabled;
        try {
            delete f.test
        } catch (p) {
            t.deleteExpando=!1
        }
        if (!f.addEventListener && f.attachEvent && f.fireEvent && (f.attachEvent("onclick", function() {
            t.noCloneEvent=!1
        }), f.cloneNode(!0).fireEvent("onclick")), s = M.createElement("input"), s.value = "t", s.setAttribute("type", "radio"), t.radioValue = "t" === s.value, s.setAttribute("checked", "checked"), f.appendChild(s), l = M.createDocumentFragment(), l.appendChild(f.lastChild), t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = s.checked, l.removeChild(s), l.appendChild(f), f.innerHTML = "", e.getComputedStyle && (a = M.createElement("div"), a.style.width = "0", a.style.marginRight = "0", f.style.width = "2px", f.appendChild(a), t.reliableMarginRight = 0 === (parseInt((e.getComputedStyle(a, null) || {
            marginRight: 0
        }).marginRight, 10) || 0)), f.attachEvent)
            for (h in{
                submit: 1,
                change: 1,
                focusin: 1
            })
                u = "on" + h, d = u in f, d || (f.setAttribute(u, "return;"), d = "function" == typeof f[u]), t[h + "Bubbles"] = d;
        return l.removeChild(f), l = r = o = a = f = s = null, L(function() {
            var e, n, i, r, o, s, a, l, u, h, p = M.getElementsByTagName("body")[0];
            !p || (s = 1, a = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", l = "visibility:hidden;border:0;", u = "style='" + a + "border:5px solid #000;padding:0;'", h = "<div " + u + "><div></div></div><table " + u + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", e = M.createElement("div"), e.style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:" + s + "px", p.insertBefore(e, p.firstChild), f = M.createElement("div"), e.appendChild(f), f.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", c = f.getElementsByTagName("td"), d = 0 === c[0].offsetHeight, c[0].style.display = "", c[1].style.display = "none", t.reliableHiddenOffsets = d && 0 === c[0].offsetHeight, f.innerHTML = "", f.style.width = f.style.paddingLeft = "1px", L.boxModel = t.boxModel = 2 === f.offsetWidth, "undefined" != typeof f.style.zoom && (f.style.display = "inline", f.style.zoom = 1, t.inlineBlockNeedsLayout = 2 === f.offsetWidth, f.style.display = "", f.innerHTML = "<div style='width:4px;'></div>", t.shrinkWrapBlocks = 2 !== f.offsetWidth), f.style.cssText = a + l, f.innerHTML = h, n = f.firstChild, i = n.firstChild, r = n.nextSibling.firstChild.firstChild, o = {
                doesNotAddBorder: 5 !== i.offsetTop,
                doesAddBorderForTableAndCells: 5 === r.offsetTop
            }, i.style.position = "fixed", i.style.top = "20px", o.fixedPosition = 20 === i.offsetTop || 15 === i.offsetTop, i.style.position = i.style.top = "", n.style.overflow = "hidden", n.style.position = "relative", o.subtractsBorderForOverflowNotVisible =- 5 === i.offsetTop, o.doesNotIncludeMarginInBodyOffset = p.offsetTop !== s, p.removeChild(e), f = e = null, L.extend(t, o))
        }), t
    }();
    var $ = /^(?:\{.*\}|\[.*\])$/, R = /([A-Z])/g;
    L.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (L.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? L.cache[e[L.expando]] : e[L.expando], !!e&&!D(e)
        },
        data: function(e, n, i, r) {
            if (L.acceptData(e)) {
                var o, s, a, l = L.expando, c = "string" == typeof n, u = e.nodeType, h = u ? L.cache: e, d = u ? e[l]: e[l] && l, f = "events" === n;
                if (!(d && h[d] && (f || r || h[d].data) ||!c || i !== t))
                    return;
                return d || (u ? e[l] = d=++L.uuid : d = l), h[d] || (h[d] = {}, u || (h[d].toJSON = L.noop)), ("object" == typeof n || "function" == typeof n) && (r ? h[d] = L.extend(h[d], n) : h[d].data = L.extend(h[d].data, n)), o = s = h[d], r || (s.data || (s.data = {}), s = s.data), i !== t && (s[L.camelCase(n)] = i), f&&!s[n] ? o.events : (c ? (a = s[n], null == a && (a = s[L.camelCase(n)])) : a = s, a)
            }
        },
        removeData: function(e, t, n) {
            if (L.acceptData(e)) {
                var i, r, o, s = L.expando, a = e.nodeType, l = a ? L.cache: e, c = a ? e[s]: s;
                if (!l[c])
                    return;
                if (t && (i = n ? l[c] : l[c].data)) {
                    L.isArray(t) || (t in i ? t = [t] : (t = L.camelCase(t), t = t in i ? [t] : t.split(" ")));
                    for (r = 0, o = t.length; o > r; r++)
                        delete i[t[r]];
                    if (!(n ? D : L.isEmptyObject)(i))
                        return 
                }
                if (!n && (delete l[c].data, !D(l[c])))
                    return;
                L.support.deleteExpando ||!l.setInterval ? delete l[c] : l[c] = null, a && (L.support.deleteExpando ? delete e[s] : e.removeAttribute ? e.removeAttribute(s) : e[s] = null)
            }
        },
        _data: function(e, t, n) {
            return L.data(e, t, n, !0)
        },
        acceptData: function(e) {
            if (e.nodeName) {
                var t = L.noData[e.nodeName.toLowerCase()];
                if (t)
                    return t!==!0 && e.getAttribute("classid") === t
            }
            return !0
        }
    }), L.fn.extend({
        data: function(e, n) {
            var i, r, o, s = null;
            if ("undefined" == typeof e) {
                if (this.length && (s = L.data(this[0]), 1 === this[0].nodeType&&!L._data(this[0], "parsedAttrs"))) {
                    r = this[0].attributes;
                    for (var a = 0, l = r.length; l > a; a++)
                        o = r[a].name, 0 === o.indexOf("data-") && (o = L.camelCase(o.substring(5)), j(this[0], o, s[o]));
                    L._data(this[0], "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof e ? this.each(function() {
                L.data(this, e)
            }) : (i = e.split("."), i[1] = i[1] ? "." + i[1] : "", n === t ? (s = this.triggerHandler("getData" + i[1] + "!", [i[0]]), s === t && this.length && (s = L.data(this[0], e), s = j(this[0], e, s)), s === t && i[1] ? this.data(i[0]) : s) : this.each(function() {
                var t = L(this), r = [i[0], n];
                t.triggerHandler("setData" + i[1] + "!", r), L.data(this, e, n), t.triggerHandler("changeData" + i[1] + "!", r)
            }))
        },
        removeData: function(e) {
            return this.each(function() {
                L.removeData(this, e)
            })
        }
    }), L.extend({
        _mark: function(e, t) {
            e && (t = (t || "fx") + "mark", L._data(e, t, (L._data(e, t) || 0) + 1))
        },
        _unmark: function(e, t, n) {
            if (e!==!0 && (n = t, t = e, e=!1), t) {
                n = n || "fx";
                var i = n + "mark", r = e ? 0: (L._data(t, i) || 1) - 1;
                r ? L._data(t, i, r) : (L.removeData(t, i, !0), O(t, n, "mark"))
            }
        },
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = L._data(e, t), n && (!i || L.isArray(n) ? i = L._data(e, t, L.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = L.queue(e, t), i = n.shift(), r = {};
            "inprogress" === i && (i = n.shift()), i && ("fx" === t && n.unshift("inprogress"), L._data(e, t + ".run", r), i.call(e, function() {
                L.dequeue(e, t)
            }, r)), n.length || (L.removeData(e, t + "queue " + t + ".run", !0), O(e, t, "queue"))
        }
    }), L.fn.extend({
        queue: function(e, n) {
            return "string" != typeof e && (n = e, e = "fx"), n === t ? L.queue(this[0], e) : this.each(function() {
                var t = L.queue(this, e, n);
                "fx" === e && "inprogress" !== t[0] && L.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                L.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = L.fx ? L.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            function i() {
                --l || o.resolveWith(s, [s])
            }
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            for (var r, o = L.Deferred(), s = this, a = s.length, l = 1, c = e + "defer", u = e + "queue", h = e + "mark"; a--;)(r = L.data(s[a], c, t, !0) || (L.data(s[a], u, t, !0) || L.data(s[a], h, t, !0)) && L.data(s[a], c, L.Callbacks("once memory"), !0)
                ) && (l++, r.add(i));
            return i(), o.promise()
        }
    });
    var z, B, W, q = /[\n\t\r]/g, Q = /\s+/, U = /\r/g, Y = /^(?:button|input)$/i, V = /^(?:button|input|object|select|textarea)$/i, X = /^a(?:rea)?$/i, K = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, J = L.support.getSetAttribute;
    L.fn.extend({
        attr: function(e, t) {
            return L.access(this, e, t, !0, L.attr)
        },
        removeAttr: function(e) {
            return this.each(function() {
                L.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return L.access(this, e, t, !0, L.prop)
        },
        removeProp: function(e) {
            return e = L.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, i, r, o, s, a;
            if (L.isFunction(e))
                return this.each(function(t) {
                    L(this).addClass(e.call(this, t, this.className))
                });
            if (e && "string" == typeof e)
                for (t = e.split(Q), n = 0, i = this.length; i > n; n++)
                    if (r = this[n], 1 === r.nodeType)
                        if (r.className || 1 !== t.length) {
                            for (o = " " + r.className + " ", s = 0, a = t.length; a > s; s++)
                                ~o.indexOf(" " + t[s] + " ") || (o += t[s] + " ");
                                r.className = L.trim(o)
                        } else 
                            r.className = e;
            return this
        },
        removeClass: function(e) {
            var n, i, r, o, s, a, l;
            if (L.isFunction(e))
                return this.each(function(t) {
                    L(this).removeClass(e.call(this, t, this.className))
                });
            if (e && "string" == typeof e || e === t)
                for (n = (e || "").split(Q), i = 0, r = this.length; r > i; i++)
                    if (o = this[i], 1 === o.nodeType && o.className)
                        if (e) {
                            for (s = (" " + o.className + " ").replace(q, " "), a = 0, l = n.length; l > a; a++)
                                s = s.replace(" " + n[a] + " ", " ");
                                o.className = L.trim(s)
                        } else 
                            o.className = "";
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e, i = "boolean" == typeof t;
            return L.isFunction(e) ? this.each(function(n) {
                L(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var r, o = 0, s = L(this), a = t, l = e.split(Q); r = l[o++];)
                        a = i ? a : !s.hasClass(r), s[a ? "addClass": "removeClass"](r);
                else ("undefined" === n || "boolean" === n) 
                    && (this.className && L._data(this, "__className__", this.className), this.className = this.className || e===!1 ? "" : L._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(q, " ").indexOf(t)>-1)
                    return !0;
            return !1
        },
        val: function(e) {
            var n, i, r, o = this[0];
            return arguments.length ? (r = L.isFunction(e), this.each(function(i) {
                var o, s = L(this);
                1 === this.nodeType && (o = r ? e.call(this, i, s.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : L.isArray(o) && (o = L.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), n = L.valHooks[this.nodeName.toLowerCase()] || L.valHooks[this.type], n && "set"in n && n.set(this, o, "value") !== t || (this.value = o))
            })) : o ? (n = L.valHooks[o.nodeName.toLowerCase()] || L.valHooks[o.type], n && "get"in n && (i = n.get(o, "value")) !== t ? i : (i = o.value, "string" == typeof i ? i.replace(U, "") : null == i ? "" : i)) : void 0
        }
    }), L.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, r, o = e.selectedIndex, s = [], a = e.options, l = "select-one" === e.type;
                    if (0 > o)
                        return null;
                    for (n = l ? o : 0, i = l ? o + 1 : a.length; i > n; n++)
                        if (r = a[n], !(!r.selected || (L.support.optDisabled ? r.disabled : null !== r.getAttribute("disabled")) || r.parentNode.disabled && L.nodeName(r.parentNode, "optgroup"))) {
                            if (t = L(r).val(), l)
                                return t;
                                s.push(t)
                        }
                    return l&&!s.length && a.length ? L(a[o]).val() : s
                },
                set: function(e, t) {
                    var n = L.makeArray(t);
                    return L(e).find("option").each(function() {
                        this.selected = L.inArray(L(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex =- 1), n
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(e, n, i, r) {
            var o, s, a, l = e.nodeType;
            return e && 3 !== l && 8 !== l && 2 !== l ? r && n in L.attrFn ? L(e)[n](i) : "undefined" == typeof e.getAttribute ? L.prop(e, n, i) : (a = 1 !== l ||!L.isXMLDoc(e), a && (n = n.toLowerCase(), s = L.attrHooks[n] || (K.test(n) ? B : z)), i !== t ? null === i ? (L.removeAttr(e, n), void 0) : s && "set"in s && a && (o = s.set(e, i, n)) !== t ? o : (e.setAttribute(n, "" + i), i) : s && "get"in s && a && null !== (o = s.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o)) : void 0
        },
        removeAttr: function(e, t) {
            var n, i, r, o, s = 0;
            if (t && 1 === e.nodeType)
                for (i = t.toLowerCase().split(Q), o = i.length; o > s; s++)
                    r = i[s], r && (n = L.propFix[r] || r, L.attr(e, r, ""), e.removeAttribute(J ? r : n), K.test(r) && n in e && (e[n]=!1))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (Y.test(e.nodeName) && e.parentNode)
                        L.error("type property can't be changed");
                    else if (!L.support.radioValue && "radio" === t && L.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return z && L.nodeName(e, "button") ? z.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    return z && L.nodeName(e, "button") ? z.set(e, t, n) : (e.value = t, void 0)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, i) {
            var r, o, s, a = e.nodeType;
            return e && 3 !== a && 8 !== a && 2 !== a ? (s = 1 !== a ||!L.isXMLDoc(e), s && (n = L.propFix[n] || n, o = L.propHooks[n]), i !== t ? o && "set"in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get"in o && null !== (r = o.get(e, n)) ? r : e[n]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || X.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), L.attrHooks.tabindex = L.propHooks.tabIndex, B = {
        get: function(e, n) {
            var i, r = L.prop(e, n);
            return r===!0 || "boolean" != typeof r && (i = e.getAttributeNode(n)) && i.nodeValue!==!1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var i;
            return t===!1 ? L.removeAttr(e, n) : (i = L.propFix[n] || n, i in e && (e[i]=!0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, J || (W = {
        name: !0,
        id: !0
    }, z = L.valHooks.button = {
        get: function(e, n) {
            var i;
            return i = e.getAttributeNode(n), i && (W[n] ? "" !== i.nodeValue : i.specified) ? i.nodeValue : t
        },
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || (i = M.createAttribute(n), e.setAttributeNode(i)), i.nodeValue = t + ""
        }
    }, L.attrHooks.tabindex.set = z.set, L.each(["width", "height"], function(e, t) {
        L.attrHooks[t] = L.extend(L.attrHooks[t], {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        })
    }), L.attrHooks.contenteditable = {
        get: z.get,
        set: function(e, t, n) {
            "" === t && (t = "false"), z.set(e, t, n)
        }
    }), L.support.hrefNormalized || L.each(["href", "src", "width", "height"], function(e, n) {
        L.attrHooks[n] = L.extend(L.attrHooks[n], {
            get: function(e) {
                var i = e.getAttribute(n, 2);
                return null === i ? t : i
            }
        })
    }), L.support.style || (L.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = "" + t
        }
    }), L.support.optSelected || (L.propHooks.selected = L.extend(L.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), L.support.enctype || (L.propFix.enctype = "encoding"), L.support.checkOn || L.each(["radio", "checkbox"], function() {
        L.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), L.each(["radio", "checkbox"], function() {
        L.valHooks[this] = L.extend(L.valHooks[this], {
            set: function(e, t) {
                return L.isArray(t) ? e.checked = L.inArray(L(e).val(), t) >= 0 : void 0
            }
        })
    });
    var G = /^(?:textarea|input|select)$/i, Z = /^([^\.]*)?(?:\.(.+))?$/, et = /\bhover(\.\S+)?\b/, tt = /^key/, nt = /^(?:mouse|contextmenu)|click/, it = /^(?:focusinfocus|focusoutblur)$/, rt = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, ot = function(e) {
        var t = rt.exec(e);
        return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
    }, st = function(e, t) {
        var n = e.attributes || {};
        return !(t[1] && e.nodeName.toLowerCase() !== t[1] || t[2] && (n.id || {}).value !== t[2] || t[3]&&!t[3].test((n["class"] || {}).value))
    }, at = function(e) {
        return L.event.special.hover ? e : e.replace(et, "mouseenter$1 mouseleave$1")
    };
    L.event = {
        add: function(e, n, i, r, o) {
            var s, a, l, c, u, h, d, f, p, m, g;
            if (3 !== e.nodeType && 8 !== e.nodeType && n && i && (s = L._data(e))) {
                for (i.handler && (p = i, i = p.handler), i.guid || (i.guid = L.guid++), l = s.events, l || (s.events = l = {}), a = s.handle, a || (s.handle = a = function(e) {
                    return "undefined" == typeof L || e && L.event.triggered === e.type ? t : L.event.dispatch.apply(a.elem, arguments)
                }, a.elem = e), n = L.trim(at(n)).split(" "), c = 0; c < n.length; c++)
                    u = Z.exec(n[c]) || [], h = u[1], d = (u[2] || "").split(".").sort(), g = L.event.special[h] || {}, h = (o ? g.delegateType : g.bindType) || h, g = L.event.special[h] || {}, f = L.extend({
                        type: h,
                        origType: u[1],
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        quick: ot(o),
                        namespace: d.join(".")
                    }, p), m = l[h], m || (m = l[h] = [], m.delegateCount = 0, g.setup && g.setup.call(e, r, d, a)!==!1 || (e.addEventListener ? e.addEventListener(h, a, !1) : e.attachEvent && e.attachEvent("on" + h, a))), g.add && (g.add.call(e, f), f.handler.guid || (f.handler.guid = i.guid)), o ? m.splice(m.delegateCount++, 0, f) : m.push(f), L.event.global[h]=!0;
                e = null
            }
        },
        global: {},
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, h, d, f, p, m, g, v = L.hasData(e) && L._data(e);
            if (v && (d = v.events)) {
                for (t = L.trim(at(t || "")).split(" "), o = 0; o < t.length; o++)
                    if (s = Z.exec(t[o]) || [], a = l = s[1], c = s[2], a) {
                        for (f = L.event.special[a] || {}, a = (i ? f.delegateType : f.bindType) || a, m = d[a] || [], u = m.length, c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, h = 0; h < m.length; h++)
                            g = m[h], !(!r && l !== g.origType || n && n.guid !== g.guid || c&&!c.test(g.namespace) || i && i !== g.selector && ("**" !== i ||!g.selector) || (m.splice(h--, 1), g.selector && m.delegateCount--, !f.remove ||!f.remove.call(e, g)));
                            0 === m.length && u !== m.length && ((!f.teardown || f.teardown.call(e, c)===!1) && L.removeEvent(e, a, v.handle), delete d[a])
                    } else 
                        for (a in d)
                            L.event.remove(e, a + t[o], n, i, !0);
                L.isEmptyObject(d) && (p = v.handle, p && (p.elem = null), L.removeData(e, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(n, i, r, o) {
            if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
                var s, a, l, c, u, h, d, f, p, m, g = n.type || n, v = [];
                if (it.test(g + L.event.triggered))
                    return;
                if (g.indexOf("!") >= 0 && (g = g.slice(0, - 1), a=!0), g.indexOf(".") >= 0 && (v = g.split("."), g = v.shift(), v.sort()), (!r || L.event.customEvent[g])&&!L.event.global[g])
                    return;
                if (n = "object" == typeof n ? n[L.expando] ? n : new L.Event(g, n) : new L.Event(g), n.type = g, n.isTrigger=!0, n.exclusive = a, n.namespace = v.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, h = g.indexOf(":") < 0 ? "on" + g : "", !r) {
                    s = L.cache;
                    for (l in s)
                        s[l].events && s[l].events[g] && L.event.trigger(n, i, s[l].handle.elem, !0);
                    return 
                }
                if (n.result = t, n.target || (n.target = r), i = null != i ? L.makeArray(i) : [], i.unshift(n), d = L.event.special[g] || {}, d.trigger && d.trigger.apply(r, i)===!1)
                    return;
                if (p = [[r, d.bindType || g]], !o&&!d.noBubble&&!L.isWindow(r)) {
                    for (m = d.delegateType || g, c = it.test(m + g) ? r : r.parentNode, u = null; c; c = c.parentNode)
                        p.push([c, m]), u = c;
                    u && u === r.ownerDocument && p.push([u.defaultView || u.parentWindow || e, m])
                }
                for (l = 0; l < p.length&&!n.isPropagationStopped(); l++)
                    c = p[l][0], n.type = p[l][1], f = (L._data(c, "events") || {})[n.type] && L._data(c, "handle"), f && f.apply(c, i), f = h && c[h], f && L.acceptData(c) && f.apply(c, i)===!1 && n.preventDefault();
                return n.type = g, !(o || n.isDefaultPrevented() || d._default && d._default.apply(r.ownerDocument, i)!==!1 || "click" === g && L.nodeName(r, "a") ||!L.acceptData(r) ||!h ||!r[g] || ("focus" === g || "blur" === g) && 0 === n.target.offsetWidth || L.isWindow(r) || (u = r[h], u && (r[h] = null), L.event.triggered = g, r[g](), L.event.triggered = t, !u ||!(r[h] = u))), n.result
            }
        },
        dispatch: function(n) {
            n = L.event.fix(n || e.event);
            var i, r, o, s, a, l, c, u, h, d, f = (L._data(this, "events") || {})[n.type] || [], p = f.delegateCount, m = [].slice.call(arguments, 0), g=!n.exclusive&&!n.namespace, v = [];
            if (m[0] = n, n.delegateTarget = this, p&&!n.target.disabled && (!n.button || "click" !== n.type))
                for (s = L(this), s.context = this.ownerDocument || this, o = n.target; o != this; o = o.parentNode || this) {
                    for (l = {}, u = [], s[0] = o, i = 0; p > i; i++)
                        h = f[i], d = h.selector, l[d] === t && (l[d] = h.quick ? st(o, h.quick) : s.is(d)), l[d] && u.push(h);
                        u.length && v.push({
                            elem: o,
                            matches: u
                        })
                }
            for (f.length > p && v.push({
                elem: this,
                matches: f.slice(p)
            }), i = 0; i < v.length&&!n.isPropagationStopped(); i++)
                for (c = v[i], n.currentTarget = c.elem, r = 0; r < c.matches.length&&!n.isImmediatePropagationStopped(); r++)
                    h = c.matches[r], (g ||!n.namespace&&!h.namespace || n.namespace_re && n.namespace_re.test(h.namespace)) && (n.data = h.data, n.handleObj = h, a = ((L.event.special[h.origType] || {}).handle || h.handler).apply(c.elem, m), a !== t && (n.result = a, a===!1 && (n.preventDefault(), n.stopPropagation())));
            return n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var i, r, o, s = n.button, a = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || M, r = i.documentElement, o = i.body, e.pageX = n.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && s !== t && (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[L.expando])
                return e;
            var n, i, r = e, o = L.event.fixHooks[e.type] || {}, s = o.props ? this.props.concat(o.props): this.props;
            for (e = L.Event(r), n = s.length; n;)
                i = s[--n], e[i] = r[i];
            return e.target || (e.target = r.srcElement || M), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), o.filter ? o.filter(e, r) : e
        },
        special: {
            ready: {
                setup: L.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(e, t, n) {
                    L.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = L.extend(new L.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? L.event.trigger(r, null, t) : L.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
        }
    }, L.event.handle = L.event.dispatch, L.removeEvent = M.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n)
    }, L.Event = function(e, t) {
        return this instanceof L.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue===!1 || e.getPreventDefault && e.getPreventDefault() ? k : N) : this.type = e, t && L.extend(this, t), this.timeStamp = e && e.timeStamp || L.now(), this[L.expando]=!0, void 0) : new L.Event(e, t)
    }, L.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = k;
            var e = this.originalEvent;
            !e || (e.preventDefault ? e.preventDefault() : e.returnValue=!1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = k;
            var e = this.originalEvent;
            !e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble=!0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = k, this.stopPropagation()
        },
        isDefaultPrevented: N,
        isPropagationStopped: N,
        isImmediatePropagationStopped: N
    }, L.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        L.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                {
                    var n, i = this, r = e.relatedTarget, o = e.handleObj;
                    o.selector
                }
                return (!r || r !== i&&!L.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), L.support.submitBubbles || (L.event.special.submit = {
        setup: function() {
            return L.nodeName(this, "form")?!1 : (L.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target, i = L.nodeName(n, "input") || L.nodeName(n, "button") ? n.form: t;
                i&&!i._submit_attached && (L.event.add(i, "submit._submit", function(e) {
                    this.parentNode&&!e.isTrigger && L.event.simulate("submit", this.parentNode, e, !0)
                }), i._submit_attached=!0)
            }), void 0)
        },
        teardown: function() {
            return L.nodeName(this, "form")?!1 : (L.event.remove(this, "._submit"), void 0)
        }
    }), L.support.changeBubbles || (L.event.special.change = {
        setup: function() {
            return G.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (L.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed=!0)
            }), L.event.add(this, "click._change", function(e) {
                this._just_changed&&!e.isTrigger && (this._just_changed=!1, L.event.simulate("change", this, e, !0))
            })), !1) : (L.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                G.test(t.nodeName)&&!t._change_attached && (L.event.add(t, "change._change", function(e) {
                    this.parentNode&&!e.isSimulated&&!e.isTrigger && L.event.simulate("change", this.parentNode, e, !0)
                }), t._change_attached=!0)
            }), void 0)
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return L.event.remove(this, "._change"), G.test(this.nodeName)
        }
    }), L.support.focusinBubbles || L.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0, i = function(e) {
            L.event.simulate(t, e.target, L.event.fix(e), !0)
        };
        L.event.special[t] = {
            setup: function() {
                0 === n++&&M.addEventListener(e, i, !0)
            },
            teardown: function() {
                0===--n && M.removeEventListener(e, i, !0)
            }
        }
    }), L.fn.extend({
        on: function(e, n, i, r, o) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = n, n = t);
                for (a in e)
                    this.on(a, n, i, e[a], o);
                return this
            }
            if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r===!1)
                r = N;
            else if (!r)
                return this;
            return 1 === o && (s = r, r = function(e) {
                return L().off(e), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = L.guid++)), this.each(function() {
                L.event.add(this, e, r, i, n)
            })
        },
        one: function(e, t, n, i) {
            return this.on.call(this, e, t, n, i, 1)
        },
        off: function(e, n, i) {
            if (e && e.preventDefault && e.handleObj) {
                var r = e.handleObj;
                return L(e.delegateTarget).off(r.namespace ? r.type + "." + r.namespace : r.type, r.selector, r.handler), this
            }
            if ("object" == typeof e) {
                for (var o in e)
                    this.off(o, n, e[o]);
                return this
            }
            return (n===!1 || "function" == typeof n) && (i = n, n = t), i===!1 && (i = N), this.each(function() {
                L.event.remove(this, e, i, n)
            })
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        live: function(e, t, n) {
            return L(this.context).on(e, this.selector, t, n), this
        },
        die: function(e, t) {
            return L(this.context).off(e, this.selector || "**", t), this
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, n)
        },
        trigger: function(e, t) {
            return this.each(function() {
                L.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            return this[0] ? L.event.trigger(e, t, this[0], !0) : void 0
        },
        toggle: function(e) {
            var t = arguments, n = e.guid || L.guid++, i = 0, r = function(n) {
                var r = (L._data(this, "lastToggle" + e.guid) || 0)%i;
                return L._data(this, "lastToggle" + e.guid, r + 1), n.preventDefault(), t[r].apply(this, arguments) ||!1
            };
            for (r.guid = n; i < t.length;)
                t[i++].guid = n;
            return this.click(r)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), L.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        L.fn[t] = function(e, n) {
            return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, L.attrFn && (L.attrFn[t]=!0), tt.test(t) && (L.event.fixHooks[t] = L.event.keyHooks), nt.test(t) && (L.event.fixHooks[t] = L.event.mouseHooks)
    }), function() {
        function e(e, t, n, i, o, s) {
            for (var a = 0, l = i.length; l > a; a++) {
                var c = i[a];
                if (c) {
                    var u=!1;
                    for (c = c[e]; c;) {
                        if (c[r] === n) {
                            u = i[c.sizset];
                            break
                        }
                        if (1 === c.nodeType)
                            if (s || (c[r] = n, c.sizset = a), "string" != typeof t) {
                                if (c === t) {
                                    u=!0;
                                    break
                                }
                            } else if (d.filter(t, [c]).length > 0) {
                                u = c;
                                break
                            }
                        c = c[e]
                    }
                    i[a] = u
                }
            }
        }
        function n(e, t, n, i, o, s) {
            for (var a = 0, l = i.length; l > a; a++) {
                var c = i[a];
                if (c) {
                    var u=!1;
                    for (c = c[e]; c;) {
                        if (c[r] === n) {
                            u = i[c.sizset];
                            break
                        }
                        if (1 === c.nodeType&&!s && (c[r] = n, c.sizset = a), c.nodeName.toLowerCase() === t) {
                            u = c;
                            break
                        }
                        c = c[e]
                    }
                    i[a] = u
                }
            }
        }
        var i = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, r = "sizcache" + (Math.random() + "").replace(".", ""), o = 0, s = Object.prototype.toString, a=!1, l=!0, c = /\\/g, u = /\r\n/g, h = /\W/;
        [0, 0].sort(function() {
            return l=!1, 0
        });
        var d = function(e, t, n, r) {
            n = n || [], t = t || M;
            var o = t;
            if (1 !== t.nodeType && 9 !== t.nodeType)
                return [];
            if (!e || "string" != typeof e)
                return n;
            var a, l, c, u, h, f, g, v, b=!0, _ = d.isXML(t), x = [], E = e;
            do 
                if (i.exec(""), a = i.exec(E), a && (E = a[3], x.push(a[1]), a[2])) {
                    u = a[3];
                    break
                }
            while (a);
            if (x.length > 1 && m.exec(e))
                if (2 === x.length && p.relative[x[0]])
                    l = w(x[0] + x[1], t, r);
                else 
                    for (l = p.relative[x[0]] ? [t] : d(x.shift(), t); x.length;)
                        e = x.shift(), p.relative[e] && (e += x.shift()), l = w(e, l, r);
            else if (!r && x.length > 1 && 9 === t.nodeType&&!_ && p.match.ID.test(x[0])&&!p.match.ID.test(x[x.length - 1]) && (h = d.find(x.shift(), t, _), t = h.expr ? d.filter(h.expr, h.set)[0] : h.set[0]), t)
                for (h = r ? {
                    expr: x.pop(),
                    set: y(r)
                } : d.find(x.pop(), 1 !== x.length || "~" !== x[0] && "+" !== x[0] ||!t.parentNode ? t : t.parentNode, _), l = h.expr ? d.filter(h.expr, h.set) : h.set, x.length > 0 ? c = y(l) : b=!1; x.length;)
                    f = x.pop(), g = f, p.relative[f] ? g = x.pop() : f = "", null == g && (g = t), p.relative[f](c, g, _);
            else 
                c = x = [];
            if (c || (c = l), c || d.error(f || e), "[object Array]" === s.call(c))
                if (b)
                    if (t && 1 === t.nodeType)
                        for (v = 0; null != c[v]; v++)
                            c[v] && (c[v]===!0 || 1 === c[v].nodeType && d.contains(t, c[v])) && n.push(l[v]);
                    else 
                        for (v = 0; null != c[v]; v++)
                            c[v] && 1 === c[v].nodeType && n.push(l[v]);
            else 
                n.push.apply(n, c);
            else 
                y(c, n);
            return u && (d(u, o, n, r), d.uniqueSort(n)), n
        };
        d.uniqueSort = function(e) {
            if (_ && (a = l, e.sort(_), a))
                for (var t = 1; t < e.length; t++)
                    e[t] === e[t - 1] && e.splice(t--, 1);
            return e
        }, d.matches = function(e, t) {
            return d(e, null, null, t)
        }, d.matchesSelector = function(e, t) {
            return d(t, null, null, [e]).length > 0
        }, d.find = function(e, t, n) {
            var i, r, o, s, a, l;
            if (!e)
                return [];
            for (r = 0, o = p.order.length; o > r; r++)
                if (a = p.order[r], (s = p.leftMatch[a].exec(e)) && (l = s[1], s.splice(1, 1), "\\" !== l.substr(l.length - 1) && (s[1] = (s[1] || "").replace(c, ""), i = p.find[a](s, t, n), null != i))) {
                    e = e.replace(p.match[a], "");
                    break
                }
            return i || (i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : []), {
                set: i,
                expr: e
            }
        }, d.filter = function(e, n, i, r) {
            for (var o, s, a, l, c, u, h, f, m, g = e, v = [], y = n, b = n && n[0] && d.isXML(n[0]); e && n.length;) {
                for (a in p.filter)
                    if (null != (o = p.leftMatch[a].exec(e)) && o[2]) {
                        if (u = p.filter[a], h = o[1], s=!1, o.splice(1, 1), "\\" === h.substr(h.length - 1))
                            continue;
                            if (y === v && (v = []), p.preFilter[a])
                                if (o = p.preFilter[a](o, y, i, v, r, b)) {
                                    if (o===!0)
                                        continue
                                } else 
                                    s = l=!0;
                                    if (o)
                                        for (f = 0; null != (c = y[f]); f++)
                                            c && (l = u(c, o, f, y), m = r^l, i && null != l ? m ? s=!0 : y[f]=!1 : m && (v.push(c), s=!0));
                                            if (l !== t) {
                                                if (i || (y = v), e = e.replace(p.match[a], ""), !s)
                                                    return [];
                                                    break
                                            }
                    }
                if (e === g) {
                    if (null != s)
                        break;
                    d.error(e)
                }
                g = e
            }
            return y
        }, d.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        var f = d.getText = function(e) {
            var t, n, i = e.nodeType, r = "";
            if (i) {
                if (1 === i || 9 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    if ("string" == typeof e.innerText)
                        return e.innerText.replace(u, "");
                    for (e = e.firstChild; e; e = e.nextSibling)
                        r += f(e)
                    } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else 
                for (t = 0; n = e[t]; t++)
                    8 !== n.nodeType && (r += f(n));
            return r
        }, p = d.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(e) {
                    return e.getAttribute("href")
                },
                type: function(e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function(e, t) {
                    var n = "string" == typeof t, i = n&&!h.test(t), r = n&&!i;
                    i && (t = t.toLowerCase());
                    for (var o, s = 0, a = e.length; a > s; s++)
                        if (o = e[s]) {
                            for (; (o = o.previousSibling) && 1 !== o.nodeType;);
                            e[s] = r || o && o.nodeName.toLowerCase() === t ? o ||!1 : o === t
                        }
                    r && d.filter(t, e, !0)
                },
                ">": function(e, t) {
                    var n, i = "string" == typeof t, r = 0, o = e.length;
                    if (i&&!h.test(t)) {
                        for (t = t.toLowerCase(); o > r; r++)
                            if (n = e[r]) {
                                var s = n.parentNode;
                                e[r] = s.nodeName.toLowerCase() === t ? s : !1
                            }
                    } else {
                        for (; o > r; r++)
                            n = e[r], n && (e[r] = i ? n.parentNode : n.parentNode === t);
                        i && d.filter(t, e, !0)
                    }
                },
                "": function(t, i, r) {
                    var s, a = o++, l = e;
                    "string" == typeof i&&!h.test(i) && (i = i.toLowerCase(), s = i, l = n), l("parentNode", i, a, t, s, r)
                },
                "~": function(t, i, r) {
                    var s, a = o++, l = e;
                    "string" == typeof i&&!h.test(i) && (i = i.toLowerCase(), s = i, l = n), l("previousSibling", i, a, t, s, r)
                }
            },
            find: {
                ID: function(e, t, n) {
                    if ("undefined" != typeof t.getElementById&&!n) {
                        var i = t.getElementById(e[1]);
                        return i && i.parentNode ? [i] : []
                    }
                },
                NAME: function(e, t) {
                    if ("undefined" != typeof t.getElementsByName) {
                        for (var n = [], i = t.getElementsByName(e[1]), r = 0, o = i.length; o > r; r++)
                            i[r].getAttribute("name") === e[1] && n.push(i[r]);
                        return 0 === n.length ? null : n
                    }
                },
                TAG: function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e[1]) : void 0
                }
            },
            preFilter: {
                CLASS: function(e, t, n, i, r, o) {
                    if (e = " " + e[1].replace(c, "") + " ", o)
                        return e;
                    for (var s, a = 0; null != (s = t[a]); a++)
                        s && (r^(s.className && (" " + s.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || i.push(s) : n && (t[a]=!1));
                    return !1
                },
                ID: function(e) {
                    return e[1].replace(c, "")
                },
                TAG: function(e) {
                    return e[1].replace(c, "").toLowerCase()
                },
                CHILD: function(e) {
                    if ("nth" === e[1]) {
                        e[2] || d.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                        var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" ||!/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                    } else 
                        e[2] && d.error(e[0]);
                    return e[0] = o++, e
                },
                ATTR: function(e, t, n, i, r, o) {
                    var s = e[1] = e[1].replace(c, "");
                    return !o && p.attrMap[s] && (e[1] = p.attrMap[s]), e[4] = (e[4] || e[5] || "").replace(c, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
                },
                PSEUDO: function(e, t, n, r, o) {
                    if ("not" === e[1]) {
                        if (!((i.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                            var s = d.filter(e[3], t, n, !0^o);
                            return n || r.push.apply(r, s), !1
                        }
                        e[3] = d(e[3], null, null, t)
                    } else if (p.match.POS.test(e[0]) || p.match.CHILD.test(e[0]))
                        return !0;
                    return e
                },
                POS: function(e) {
                    return e.unshift(!0), e
                }
            },
            filters: {
                enabled: function(e) {
                    return e.disabled===!1 && "hidden" !== e.type
                },
                disabled: function(e) {
                    return e.disabled===!0
                },
                checked: function(e) {
                    return e.checked===!0
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected===!0
                },
                parent: function(e) {
                    return !!e.firstChild
                },
                empty: function(e) {
                    return !e.firstChild
                },
                has: function(e, t, n) {
                    return !!d(n[3], e).length
                },
                header: function(e) {
                    return /h\d/i.test(e.nodeName)
                },
                text: function(e) {
                    var t = e.getAttribute("type"), n = e.type;
                    return "input" === e.nodeName.toLowerCase() && "text" === n && (t === n || null === t)
                },
                radio: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "radio" === e.type
                },
                checkbox: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
                },
                file: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "file" === e.type
                },
                password: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "password" === e.type
                },
                submit: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && "submit" === e.type
                },
                image: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "image" === e.type
                },
                reset: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && "reset" === e.type
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                input: function(e) {
                    return /input|select|textarea|button/i.test(e.nodeName)
                },
                focus: function(e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(e, t) {
                    return 0 === t
                },
                last: function(e, t, n, i) {
                    return t === i.length - 1
                },
                even: function(e, t) {
                    return t%2 === 0
                },
                odd: function(e, t) {
                    return t%2 === 1
                },
                lt: function(e, t, n) {
                    return t < n[3] - 0
                },
                gt: function(e, t, n) {
                    return t > n[3] - 0
                },
                nth: function(e, t, n) {
                    return n[3] - 0 === t
                },
                eq: function(e, t, n) {
                    return n[3] - 0 === t
                }
            },
            filter: {
                PSEUDO: function(e, t, n, i) {
                    var r = t[1], o = p.filters[r];
                    if (o)
                        return o(e, n, t, i);
                    if ("contains" === r)
                        return (e.textContent || e.innerText || f([e]) || "").indexOf(t[3]) >= 0;
                    if ("not" === r) {
                        for (var s = t[3], a = 0, l = s.length; l > a; a++)
                            if (s[a] === e)
                                return !1;
                        return !0
                    }
                    d.error(r)
                },
                CHILD: function(e, t) {
                    var n, i, o, s, a, l, c = t[1], u = e;
                    switch (c) {
                    case"only":
                    case"first":
                        for (; u = u.previousSibling;)
                            if (1 === u.nodeType)
                                return !1;
                        if ("first" === c)
                            return !0;
                        u = e;
                    case"last":
                        for (; u = u.nextSibling;)
                            if (1 === u.nodeType)
                                return !1;
                        return !0;
                    case"nth":
                        if (n = t[2], i = t[3], 1 === n && 0 === i)
                            return !0;
                        if (o = t[0], s = e.parentNode, s && (s[r] !== o ||!e.nodeIndex)) {
                            for (a = 0, u = s.firstChild; u; u = u.nextSibling)
                                1 === u.nodeType && (u.nodeIndex=++a);
                            s[r] = o
                        }
                        return l = e.nodeIndex - i, 0 === n ? 0 === l : l%n === 0 && l / n >= 0
                    }
                },
                ID: function(e, t) {
                    return 1 === e.nodeType && e.getAttribute("id") === t
                },
                TAG: function(e, t) {
                    return "*" === t && 1 === e.nodeType||!!e.nodeName && e.nodeName.toLowerCase() === t
                },
                CLASS: function(e, t) {
                    return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t)>-1
                },
                ATTR: function(e, t) {
                    var n = t[1], i = d.attr ? d.attr(e, n): p.attrHandle[n] ? p.attrHandle[n](e): null != e[n] ? e[n]: e.getAttribute(n), r = i + "", o = t[2], s = t[4];
                    return null == i ? "!=" === o : !o && d.attr ? null != i : "=" === o ? r === s : "*=" === o ? r.indexOf(s) >= 0 : "~=" === o ? (" " + r + " ").indexOf(s) >= 0 : s ? "!=" === o ? r !== s : "^=" === o ? 0 === r.indexOf(s) : "$=" === o ? r.substr(r.length - s.length) === s : "|=" === o ? r === s || r.substr(0, s.length + 1) === s + "-" : !1 : r && i!==!1
                },
                POS: function(e, t, n, i) {
                    var r = t[2], o = p.setFilters[r];
                    return o ? o(e, n, t, i) : void 0
                }
            }
        }, m = p.match.POS, g = function(e, t) {
            return "\\" + (t - 0 + 1)
        };
        for (var v in p.match)
            p.match[v] = new RegExp(p.match[v].source + /(?![^\[]*\])(?![^\(]*\))/.source), p.leftMatch[v] = new RegExp(/(^(?:.|\r|\n)*?)/.source + p.match[v].source.replace(/\\(\d+)/g, g));
        var y = function(e, t) {
            return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
        };
        try {
            Array.prototype.slice.call(M.documentElement.childNodes, 0)[0].nodeType
        } catch (b) {
            y = function(e, t) {
                var n = 0, i = t || [];
                if ("[object Array]" === s.call(e))
                    Array.prototype.push.apply(i, e);
                else if ("number" == typeof e.length)
                    for (var r = e.length; r > n; n++)
                        i.push(e[n]);
                else 
                    for (; e[n]; n++)
                        i.push(e[n]);
                return i
            }
        }
        var _, x;
        M.documentElement.compareDocumentPosition ? _ = function(e, t) {
            return e === t ? (a=!0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t)?-1 : 1 : e.compareDocumentPosition?-1 : 1
        } : (_ = function(e, t) {
            if (e === t)
                return a=!0, 0;
            if (e.sourceIndex && t.sourceIndex)
                return e.sourceIndex - t.sourceIndex;
            var n, i, r = [], o = [], s = e.parentNode, l = t.parentNode, c = s;
            if (s === l)
                return x(e, t);
            if (!s)
                return - 1;
            if (!l)
                return 1;
            for (; c;)
                r.unshift(c), c = c.parentNode;
            for (c = l; c;)
                o.unshift(c), c = c.parentNode;
            n = r.length, i = o.length;
            for (var u = 0; n > u && i > u; u++)
                if (r[u] !== o[u])
                    return x(r[u], o[u]);
            return u === n ? x(e, o[u], - 1) : x(r[u], t, 1)
        }, x = function(e, t, n) {
            if (e === t)
                return n;
            for (var i = e.nextSibling; i;) {
                if (i === t)
                    return - 1;
                i = i.nextSibling
            }
            return 1
        }), function() {
            var e = M.createElement("div"), n = "script" + (new Date).getTime(), i = M.documentElement;
            e.innerHTML = "<a name='" + n + "'/>", i.insertBefore(e, i.firstChild), M.getElementById(n) && (p.find.ID = function(e, n, i) {
                if ("undefined" != typeof n.getElementById&&!i) {
                    var r = n.getElementById(e[1]);
                    return r ? r.id === e[1] || "undefined" != typeof r.getAttributeNode && r.getAttributeNode("id").nodeValue === e[1] ? [r] : t : []
                }
            }, p.filter.ID = function(e, t) {
                var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                return 1 === e.nodeType && n && n.nodeValue === t
            }), i.removeChild(e), i = e = null
        }(), function() {
            var e = M.createElement("div");
            e.appendChild(M.createComment("")), e.getElementsByTagName("*").length > 0 && (p.find.TAG = function(e, t) {
                var n = t.getElementsByTagName(e[1]);
                if ("*" === e[1]) {
                    for (var i = [], r = 0; n[r]; r++)
                        1 === n[r].nodeType && i.push(n[r]);
                    n = i
                }
                return n
            }), e.innerHTML = "<a href='#'></a>", e.firstChild && "undefined" != typeof e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (p.attrHandle.href = function(e) {
                return e.getAttribute("href", 2)
            }), e = null
        }(), M.querySelectorAll && function() {
            var e = d, t = M.createElement("div"), n = "__sizzle__";
            if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                d = function(t, i, r, o) {
                    if (i = i || M, !o&&!d.isXML(i)) {
                        var s = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                        if (s && (1 === i.nodeType || 9 === i.nodeType)) {
                            if (s[1])
                                return y(i.getElementsByTagName(t), r);
                            if (s[2] && p.find.CLASS && i.getElementsByClassName)
                                return y(i.getElementsByClassName(s[2]), r)
                            }
                        if (9 === i.nodeType) {
                            if ("body" === t && i.body)
                                return y([i.body], r);
                            if (s && s[3]) {
                                var a = i.getElementById(s[3]);
                                if (!a ||!a.parentNode)
                                    return y([], r);
                                if (a.id === s[3])
                                    return y([a], r)
                                }
                            try {
                                return y(i.querySelectorAll(t), r)
                            } catch (l) {}
                        } else if (1 === i.nodeType && "object" !== i.nodeName.toLowerCase()) {
                            var c = i, u = i.getAttribute("id"), h = u || n, f = i.parentNode, m = /^\s*[+~]/.test(t);
                            u ? h = h.replace(/'/g, "\\$&") : i.setAttribute("id", h), m && f && (i = i.parentNode);
                            try {
                                if (!m || f)
                                    return y(i.querySelectorAll("[id='" + h + "'] " + t), r)
                                } catch (g) {} finally {
                                u || c.removeAttribute("id")
                            }
                        }
                    }
                    return e(t, i, r, o)
                };
                for (var i in e)
                    d[i] = e[i];
                t = null
            }
        }(), function() {
            var e = M.documentElement, t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (t) {
                var n=!t.call(M.createElement("div"), "div"), i=!1;
                try {
                    t.call(M.documentElement, "[test!='']:sizzle")
                } catch (r) {
                    i=!0
                }
                d.matchesSelector = function(e, r) {
                    if (r = r.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !d.isXML(e))
                        try {
                            if (i ||!p.match.PSEUDO.test(r)&&!/!=/.test(r)) {
                                var o = t.call(e, r);
                                if (o ||!n || e.document && 11 !== e.document.nodeType)
                                    return o
                            }
                    } catch (s) {}
                    return d(r, null, null, [e]).length > 0
                }
            }
        }(), function() {
            var e = M.createElement("div");
            if (e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length) {
                if (e.lastChild.className = "e", 1 === e.getElementsByClassName("e").length)
                    return;
                p.order.splice(1, 0, "CLASS"), p.find.CLASS = function(e, t, n) {
                    return "undefined" == typeof t.getElementsByClassName || n ? void 0 : t.getElementsByClassName(e[1])
                }, e = null
            }
        }(), d.contains = M.documentElement.contains ? function(e, t) {
            return e !== t && (e.contains ? e.contains(t) : !0)
        } : M.documentElement.compareDocumentPosition ? function(e, t) {
            return !!(16 & e.compareDocumentPosition(t))
        } : function() {
            return !1
        }, d.isXML = function(e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        };
        var w = function(e, t, n) {
            for (var i, r = [], o = "", s = t.nodeType ? [t] : t; i = p.match.PSEUDO.exec(e);)
                o += i[0], e = e.replace(p.match.PSEUDO, "");
            e = p.relative[e] ? e + "*" : e;
            for (var a = 0, l = s.length; l > a; a++)
                d(e, s[a], r, n);
            return d.filter(o, r)
        };
        d.attr = L.attr, d.selectors.attrMap = {}, L.find = d, L.expr = d.selectors, L.expr[":"] = L.expr.filters, L.unique = d.uniqueSort, L.text = d.getText, L.isXMLDoc = d.isXML, L.contains = d.contains
    }();
    var lt = /Until$/, ct = /^(?:parents|prevUntil|prevAll)/, ut = /,/, ht = /^.[^:#\[\.,]*$/, dt = Array.prototype.slice, ft = L.expr.match.POS, pt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    L.fn.extend({
        find: function(e) {
            var t, n, i = this;
            if ("string" != typeof e)
                return L(e).filter(function() {
                    for (t = 0, n = i.length; n > t; t++)
                        if (L.contains(i[t], this))
                            return !0
                        });
            var r, o, s, a = this.pushStack("", "find", e);
            for (t = 0, n = this.length; n > t; t++)
                if (r = a.length, L.find(e, this[t], a), t > 0)
                    for (o = r; o < a.length; o++)
                        for (s = 0; r > s; s++)
                            if (a[s] === a[o]) {
                                a.splice(o--, 1);
                                break
                            }
            return a
        },
        has: function(e) {
            var t = L(e);
            return this.filter(function() {
                for (var e = 0, n = t.length; n > e; e++)
                    if (L.contains(this, t[e]))
                        return !0
            })
        },
        not: function(e) {
            return this.pushStack(S(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(S(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? ft.test(e) ? L(e, this.context).index(this[0]) >= 0 : L.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, i, r = [], o = this[0];
            if (L.isArray(e)) {
                for (var s = 1; o && o.ownerDocument && o !== t;) {
                    for (n = 0; n < e.length; n++)
                        L(o).is(e[n]) && r.push({
                            selector: e[n],
                            elem: o,
                            level: s
                        });
                    o = o.parentNode, s++
                }
                return r
            }
            var a = ft.test(e) || "string" != typeof e ? L(e, t || this.context): 0;
            for (n = 0, i = this.length; i > n; n++)
                for (o = this[n]; o;) {
                    if (a ? a.index(o)>-1 : L.find.matchesSelector(o, e)) {
                        r.push(o);
                        break
                    }
                    if (o = o.parentNode, !o ||!o.ownerDocument || o === t || 11 === o.nodeType)
                        break
                }
            return r = r.length > 1 ? L.unique(r) : r, this.pushStack(r, "closest", e)
        },
        index: function(e) {
            return e ? "string" == typeof e ? L.inArray(this[0], L(e)) : L.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : - 1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? L(e, t): L.makeArray(e && e.nodeType ? [e] : e), i = L.merge(this.get(), n);
            return this.pushStack(T(n[0]) || T(i[0]) ? i : L.unique(i))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), L.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return L.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return L.dir(e, "parentNode", n)
        },
        next: function(e) {
            return L.nth(e, 2, "nextSibling")
        },
        prev: function(e) {
            return L.nth(e, 2, "previousSibling")
        },
        nextAll: function(e) {
            return L.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return L.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return L.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return L.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return L.sibling(e.parentNode.firstChild, e)
        },
        children: function(e) {
            return L.sibling(e.firstChild)
        },
        contents: function(e) {
            return L.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : L.makeArray(e.childNodes)
        }
    }, function(e, t) {
        L.fn[e] = function(n, i) {
            var r = L.map(this, t, n);
            return lt.test(e) || (i = n), i && "string" == typeof i && (r = L.filter(i, r)), r = this.length > 1&&!pt[e] ? L.unique(r) : r, (this.length > 1 || ut.test(i)) && ct.test(e) && (r = r.reverse()), this.pushStack(r, e, dt.call(arguments).join(","))
        }
    }), L.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? L.find.matchesSelector(t[0], e) ? [t[0]] : [] : L.find.matches(e, t)
        },
        dir: function(e, n, i) {
            for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType ||!L(o).is(i));)
                1 === o.nodeType && r.push(o), o = o[n];
            return r
        },
        nth: function(e, t, n) {
            t = t || 1;
            for (var i = 0; e && (1 !== e.nodeType||++i !== t); e = e[n]);
            return e
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var mt = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:\d+|null)"/g, vt = /^\s+/, yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, _t = /<tbody/i, xt = /<|&#?\w+;/, wt = /<(?:script|style)/i, Et = /<(?:script|object|embed|option|style)/i, Ct = new RegExp("<(?:" + mt + ")", "i"), St = /checked\s*(?:[^=]|=\s*.checked.)/i, Tt = /\/(java|ecma)script/i, kt = /^\s*<!(?:\[CDATA\[|\-\-)/, Nt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }, Ot = C(M);
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, L.support.htmlSerialize || (Nt._default = [1, "div<div>", "</div>"]), L.fn.extend({
        text: function(e) {
            return L.isFunction(e) ? this.each(function(t) {
                var n = L(this);
                n.text(e.call(this, t, n.text()))
            }) : "object" != typeof e && e !== t ? this.empty().append((this[0] && this[0].ownerDocument || M).createTextNode(e)) : L.text(this)
        },
        wrapAll: function(e) {
            if (L.isFunction(e))
                return this.each(function(t) {
                    L(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = L(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return L.isFunction(e) ? this.each(function(t) {
                L(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = L(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = L.isFunction(e);
            return this.each(function(n) {
                L(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                L.nodeName(this, "body") || L(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(e) {
                1 === this.nodeType && this.insertBefore(e, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
            if (arguments.length) {
                var e = L.clean(arguments);
                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode)
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, L.clean(arguments)), e
            }
        },
        remove: function(e, t) {
            for (var n, i = 0; null != (n = this[i]); i++)(!e || L.filter(e, [n]).length) 
                && (!t && 1 === n.nodeType && (L.cleanData(n.getElementsByTagName("*")), L.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                for (1 === e.nodeType && L.cleanData(e.getElementsByTagName("*")); e.firstChild;)
                    e.removeChild(e.firstChild);
            return this
        },
        clone: function(e, t) {
            return e = null == e?!1 : e, t = null == t ? e : t, this.map(function() {
                return L.clone(this, e, t)
            })
        },
        html: function(e) {
            if (e === t)
                return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(gt, "") : null;
            if ("string" != typeof e || wt.test(e) ||!L.support.leadingWhitespace && vt.test(e) || Nt[(bt.exec(e) || ["", ""])[1].toLowerCase()])
                L.isFunction(e) ? this.each(function(t) {
                    var n = L(this);
                    n.html(e.call(this, t, n.html()))
                }) : this.empty().append(e);
            else {
                e = e.replace(yt, "<$1></$2>");
                try {
                    for (var n = 0, i = this.length; i > n; n++)
                        1 === this[n].nodeType && (L.cleanData(this[n].getElementsByTagName("*")), this[n].innerHTML = e)
                    } catch (r) {
                    this.empty().append(e)
                }
            }
            return this
        },
        replaceWith: function(e) {
            return this[0] && this[0].parentNode ? L.isFunction(e) ? this.each(function(t) {
                var n = L(this), i = n.html();
                n.replaceWith(e.call(this, t, i))
            }) : ("string" != typeof e && (e = L(e).detach()), this.each(function() {
                var t = this.nextSibling, n = this.parentNode;
                L(this).remove(), t ? L(t).before(e) : L(n).append(e)
            })) : this.length ? this.pushStack(L(L.isFunction(e) ? e() : e), "replaceWith", e) : this
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, n, i) {
            var r, o, s, a, l = e[0], c = [];
            if (!L.support.checkClone && 3 === arguments.length && "string" == typeof l && St.test(l))
                return this.each(function() {
                    L(this).domManip(e, n, i, !0)
                });
            if (L.isFunction(l))
                return this.each(function(r) {
                    var o = L(this);
                    e[0] = l.call(this, r, n ? o.html() : t), o.domManip(e, n, i)
                });
            if (this[0]) {
                if (a = l && l.parentNode, r = L.support.parentNode && a && 11 === a.nodeType && a.childNodes.length === this.length ? {
                    fragment: a
                } : L.buildFragment(e, this, c), s = r.fragment, o = 1 === s.childNodes.length ? s = s.firstChild : s.firstChild, o) {
                    n = n && L.nodeName(o, "tr");
                    for (var u = 0, h = this.length, d = h - 1; h > u; u++)
                        i.call(n ? E(this[u], o) : this[u], r.cacheable || h > 1 && d > u ? L.clone(s, !0, !0) : s)
                    }
                c.length && L.each(c, g)
            }
            return this
        }
    }), L.buildFragment = function(e, t, n) {
        var i, r, o, s, a = e[0];
        return t && t[0] && (s = t[0].ownerDocument || t[0]), s.createDocumentFragment || (s = M), 1 === e.length && "string" == typeof a && a.length < 512 && s === M && "<" === a.charAt(0)&&!Et.test(a) && (L.support.checkClone ||!St.test(a)) && (L.support.html5Clone ||!Ct.test(a)) && (r=!0, o = L.fragments[a], o && 1 !== o && (i = o)), i || (i = s.createDocumentFragment(), L.clean(e, s, i, n)), r && (L.fragments[a] = o ? i : 1), {
            fragment: i,
            cacheable: r
        }
    }, L.fragments = {}, L.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        L.fn[e] = function(n) {
            var i = [], r = L(n), o = 1 === this.length && this[0].parentNode;
            if (o && 11 === o.nodeType && 1 === o.childNodes.length && 1 === r.length)
                return r[t](this[0]), this;
            for (var s = 0, a = r.length; a > s; s++) {
                var l = (s > 0 ? this.clone(!0) : this).get();
                L(r[s])[t](l), i = i.concat(l)
            }
            return this.pushStack(i, e, r.selector)
        }
    }), L.extend({
        clone: function(e, t, n) {
            var i, r, o, s = L.support.html5Clone ||!Ct.test("<" + e.nodeName) ? e.cloneNode(!0): v(e);
            if (!(L.support.noCloneEvent && L.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || L.isXMLDoc(e)))
                for (x(e, s)
                    , i = _(e), r = _(s), o = 0;
            i[o];
            ++o)r[o] && x(i[o], r[o]);
            if (t && (w(e, s), n))
                for (i = _(e), r = _(s), o = 0; i[o]; ++o)
                    w(i[o], r[o]);
            return i = r = null, s
        },
        clean: function(e, t, n, i) {
            var r;
            t = t || M, "undefined" == typeof t.createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || M);
            for (var o, s, a = [], l = 0; null != (s = e[l]); l++)
                if ("number" == typeof s && (s += ""), s) {
                    if ("string" == typeof s)
                        if (xt.test(s)) {
                            s = s.replace(yt, "<$1></$2>");
                            var c = (bt.exec(s) || ["", ""])[1].toLowerCase(), u = Nt[c] || Nt._default, h = u[0], d = t.createElement("div");
                            for (t === M ? Ot.appendChild(d) : C(t).appendChild(d), d.innerHTML = u[1] + s + u[2]; h--;)
                                d = d.lastChild;
                                if (!L.support.tbody) {
                                    var f = _t.test(s), p = "table" !== c || f ? "<table>" !== u[1] || f ? []: d.childNodes: d.firstChild && d.firstChild.childNodes;
                                    for (o = p.length - 1; o >= 0; --o)
                                        L.nodeName(p[o], "tbody")&&!p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
                                    }
                                    !L.support.leadingWhitespace && vt.test(s) && d.insertBefore(t.createTextNode(vt.exec(s)[0]), d.firstChild), s = d.childNodes
                            } else 
                                s = t.createTextNode(s);
                                var m;
                                if (!L.support.appendChecked)
                                    if (s[0] && "number" == typeof(m = s.length))
                                        for (o = 0; m > o; o++)
                                            y(s[o]);
                                    else 
                                        y(s);
                                        s.nodeType ? a.push(s) : a = L.merge(a, s)
                    }
            if (n)
                for (r = function(e) {
                    return !e.type || Tt.test(e.type)
                }, l = 0; a[l]; l++)
                    if (!i ||!L.nodeName(a[l], "script") || a[l].type && "text/javascript" !== a[l].type.toLowerCase()) {
                        if (1 === a[l].nodeType) {
                            var g = L.grep(a[l].getElementsByTagName("script"), r);
                            a.splice.apply(a, [l + 1, 0].concat(g))
                        }
                        n.appendChild(a[l])
                    } else 
                        i.push(a[l].parentNode ? a[l].parentNode.removeChild(a[l]) : a[l]);
            return a
        },
        cleanData: function(e) {
            for (var t, n, i, r = L.cache, o = L.event.special, s = L.support.deleteExpando, a = 0; null != (i = e[a]); a++)
                if ((!i.nodeName ||!L.noData[i.nodeName.toLowerCase()]) && (n = i[L.expando])) {
                    if (t = r[n], t && t.events) {
                        for (var l in t.events)
                            o[l] ? L.event.remove(i, l) : L.removeEvent(i, l, t.handle);
                            t.handle && (t.handle.elem = null)
                        }
                        s ? delete i[L.expando] : i.removeAttribute && i.removeAttribute(L.expando), delete r[n]
                }
            }
            });
    var Dt, jt, At, Mt = /alpha\([^)]*\)/i, Pt = /opacity=([^)]*)/, It = /([A-Z]|^ms)/g, Lt = /^-?\d+(?:px)?$/i, Ft = /^-?\d/, Ht = /^([\-+])=([\-+.\de]+)/, $t = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Rt = ["Left", "Right"], zt = ["Top", "Bottom"];
    L.fn.css = function(e, n) {
        return 2 === arguments.length && n === t ? this : L.access(this, e, n, !0, function(e, n, i) {
            return i !== t ? L.style(e, n, i) : L.css(e, n)
        })
    }, L.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Dt(e, "opacity", "opacity");
                        return "" === n ? "1" : n
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": L.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, n, i, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, a = L.camelCase(n), l = e.style, c = L.cssHooks[a];
                if (n = L.cssProps[a] || a, i === t)
                    return c && "get"in c && (o = c.get(e, !1, r)) !== t ? o : l[n];
                if (s = typeof i, "string" === s && (o = Ht.exec(i)) && (i =+ (o[1] + 1)*+o[2] + parseFloat(L.css(e, n)), s = "number"), null == i || "number" === s && isNaN(i))
                    return;
                if ("number" === s&&!L.cssNumber[a] && (i += "px"), !(c && "set"in c && (i = c.set(e, i)) === t))
                    try {
                        l[n] = i
                } catch (u) {}
            }
        },
        css: function(e, n, i) {
            var r, o;
            return n = L.camelCase(n), o = L.cssHooks[n], n = L.cssProps[n] || n, "cssFloat" === n && (n = "float"), o && "get"in o && (r = o.get(e, !0, i)) !== t ? r : Dt ? Dt(e, n) : void 0
        },
        swap: function(e, t, n) {
            var i = {};
            for (var r in t)
                i[r] = e.style[r], e.style[r] = t[r];
            n.call(e);
            for (r in t)
                e.style[r] = i[r]
        }
    }), L.curCSS = L.css, L.each(["height", "width"], function(e, t) {
        L.cssHooks[t] = {
            get: function(e, n, i) {
                var r;
                return n ? 0 !== e.offsetWidth ? m(e, t, i) : (L.swap(e, $t, function() {
                    r = m(e, t, i)
                }), r) : void 0
            },
            set: function(e, t) {
                return Lt.test(t) ? (t = parseFloat(t), t >= 0 ? t + "px" : void 0) : t
            }
        }
    }), L.support.opacity || (L.cssHooks.opacity = {
        get: function(e, t) {
            return Pt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style, i = e.currentStyle, r = L.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "", o = i && i.filter || n.filter || "";
            n.zoom = 1, t >= 1 && "" === L.trim(o.replace(Mt, "")) && (n.removeAttribute("filter"), i&&!i.filter) || (n.filter = Mt.test(o) ? o.replace(Mt, r) : o + " " + r)
        }
    }), L(function() {
        L.support.reliableMarginRight || (L.cssHooks.marginRight = {
            get: function(e, t) {
                var n;
                return L.swap(e, {
                    display: "inline-block"
                }, function() {
                    n = t ? Dt(e, "margin-right", "marginRight") : e.style.marginRight
                }), n
            }
        })
    }), M.defaultView && M.defaultView.getComputedStyle && (jt = function(e, t) {
        var n, i, r;
        return t = t.replace(It, "-$1").toLowerCase(), (i = e.ownerDocument.defaultView) && (r = i.getComputedStyle(e, null)) && (n = r.getPropertyValue(t), "" === n&&!L.contains(e.ownerDocument.documentElement, e) && (n = L.style(e, t))), n
    }), M.documentElement.currentStyle && (At = function(e, t) {
        var n, i, r, o = e.currentStyle && e.currentStyle[t], s = e.style;
        return null === o && s && (r = s[t]) && (o = r), !Lt.test(o) && Ft.test(o) && (n = s.left, i = e.runtimeStyle && e.runtimeStyle.left, i && (e.runtimeStyle.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : o || 0, o = s.pixelLeft + "px", s.left = n, i && (e.runtimeStyle.left = i)), "" === o ? "auto" : o
    }), Dt = jt || At, L.expr && L.expr.filters && (L.expr.filters.hidden = function(e) {
        var t = e.offsetWidth, n = e.offsetHeight;
        return 0 === t && 0 === n ||!L.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || L.css(e, "display"))
    }, L.expr.filters.visible = function(e) {
        return !L.expr.filters.hidden(e)
    });
    var Bt, Wt, qt = /%20/g, Qt = /\[\]$/, Ut = /\r?\n/g, Yt = /#.*$/, Vt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Xt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Kt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Jt = /^(?:GET|HEAD)$/, Gt = /^\/\//, Zt = /\?/, en = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, tn = /^(?:select|textarea)/i, nn = /\s+/, rn = /([?&])_=[^&]*/, on = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, sn = L.fn.load, an = {}, ln = {}, cn = ["*/"] + ["*"];
    try {
        Bt = I.href
    } catch (un) {
        Bt = M.createElement("a"), Bt.href = "", Bt = Bt.href
    }
    Wt = on.exec(Bt.toLowerCase()) || [], L.fn.extend({
        load: function(e, n, i) {
            if ("string" != typeof e && sn)
                return sn.apply(this, arguments);
            if (!this.length)
                return this;
            var r = e.indexOf(" ");
            if (r >= 0) {
                var o = e.slice(r, e.length);
                e = e.slice(0, r)
            }
            var s = "GET";
            n && (L.isFunction(n) ? (i = n, n = t) : "object" == typeof n && (n = L.param(n, L.ajaxSettings.traditional), s = "POST"));
            var a = this;
            return L.ajax({
                url: e,
                type: s,
                dataType: "html",
                data: n,
                complete: function(e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done(function(e) {
                        n = e
                    }), a.html(o ? L("<div>").append(n.replace(en, "")).find(o) : n)), i && a.each(i, [n, t, e])
                }
            }), this
        },
        serialize: function() {
            return L.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? L.makeArray(this.elements) : this
            }).filter(function() {
                return this.name&&!this.disabled && (this.checked || tn.test(this.nodeName) || Xt.test(this.type))
            }).map(function(e, t) {
                var n = L(this).val();
                return null == n ? null : L.isArray(n) ? L.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ut, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ut, "\r\n")
                }
            }).get()
        }
    }), L.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        L.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), L.each(["get", "post"], function(e, n) {
        L[n] = function(e, i, r, o) {
            return L.isFunction(i) && (o = o || r, r = i, i = t), L.ajax({
                type: n,
                url: e,
                data: i,
                success: r,
                dataType: o
            })
        }
    }), L.extend({
        getScript: function(e, n) {
            return L.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return L.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? d(e, L.ajaxSettings) : (t = e, e = L.ajaxSettings), d(e, t), e
        },
        ajaxSettings: {
            url: Bt,
            isLocal: Kt.test(Wt[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": cn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": L.parseJSON,
                "text xml": L.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: p(an),
        ajaxTransport: p(ln),
        ajax: function(e, n) {
            function i(e, n, i, s) {
                if (2 !== E) {
                    E = 2, l && clearTimeout(l), a = t, o = s || "", C.readyState = e > 0 ? 4 : 0;
                    var h, f, p, x, w, S = n, T = i ? u(m, C, i): t;
                    if (e >= 200 && 300 > e || 304 === e)
                        if (m.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (L.lastModified[r] = x), (w = C.getResponseHeader("Etag")) && (L.etag[r] = w)), 304 === e)
                            S = "notmodified", h=!0;
                        else 
                            try {
                                f = c(m, T), S = "success", h=!0
                    } catch (k) {
                        S = "parsererror", p = k
                    } else 
                        p = S, (!S || e) && (S = "error", 0 > e && (e = 0));
                    C.status = e, C.statusText = "" + (n || S), h ? y.resolveWith(g, [f, S, C]) : y.rejectWith(g, [C, S, p]), C.statusCode(_), _ = t, d && v.trigger("ajax" + (h ? "Success" : "Error"), [C, m, h ? f: p]), b.fireWith(g, [C, S]), d && (v.trigger("ajaxComplete", [C, m]), --L.active || L.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, o, s, a, l, h, d, p, m = L.ajaxSetup({}, n), g = m.context || m, v = g !== m && (g.nodeType || g instanceof L) ? L(g): L.event, y = L.Deferred(), b = L.Callbacks("once memory"), _ = m.statusCode || {}, x = {}, w = {}, E = 0, C = {
                readyState: 0,
                setRequestHeader: function(e, t) {
                    if (!E) {
                        var n = e.toLowerCase();
                        e = w[n] = w[n] || e, x[e] = t
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return 2 === E ? o : null
                },
                getResponseHeader: function(e) {
                    var n;
                    if (2 === E) {
                        if (!s)
                            for (s = {}; n = Vt.exec(o);)
                                s[n[1].toLowerCase()] = n[2];
                        n = s[e.toLowerCase()]
                    }
                    return n === t ? null : n
                },
                overrideMimeType: function(e) {
                    return E || (m.mimeType = e), this
                },
                abort: function(e) {
                    return e = e || "abort", a && a.abort(e), i(0, e), this
                }
            };
            if (y.promise(C), C.success = C.done, C.error = C.fail, C.complete = b.add, C.statusCode = function(e) {
                if (e) {
                    var t;
                    if (2 > E)
                        for (t in e)
                            _[t] = [_[t], e[t]];
                    else 
                        t = e[C.status], C.then(t, t)
                }
                return this
            }, m.url = ((e || m.url) + "").replace(Yt, "").replace(Gt, Wt[1] + "//"), m.dataTypes = L.trim(m.dataType || "*").toLowerCase().split(nn), null == m.crossDomain && (h = on.exec(m.url.toLowerCase()), m.crossDomain=!(!h || h[1] == Wt[1] && h[2] == Wt[2] && (h[3] || ("http:" === h[1] ? 80 : 443)) == (Wt[3] || ("http:" === Wt[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = L.param(m.data, m.traditional)), f(an, m, n, C), 2 === E)
                return !1;
            if (d = m.global, m.type = m.type.toUpperCase(), m.hasContent=!Jt.test(m.type), d && 0 === L.active++&&L.event.trigger("ajaxStart"), !m.hasContent && (m.data && (m.url += (Zt.test(m.url) ? "&" : "?") + m.data, delete m.data), r = m.url, m.cache===!1)
                ) {
                var S = L.now(), T = m.url.replace(rn, "$1_=" + S);
                m.url = T + (T === m.url ? (Zt.test(m.url) ? "&" : "?") + "_=" + S : "")
            }(m.data && m.hasContent && m.contentType!==!1 || n.contentType) && C.setRequestHeader("Content-Type", m.contentType), m.ifModified && (r = r || m.url, L.lastModified[r] && C.setRequestHeader("If-Modified-Since", L.lastModified[r]), L.etag[r] && C.setRequestHeader("If-None-Match", L.etag[r])), C.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + cn + "; q=0.01" : "") : m.accepts["*"]);
            for (p in m.headers)
                C.setRequestHeader(p, m.headers[p]);
            if (m.beforeSend && (m.beforeSend.call(g, C, m)===!1 || 2 === E))
                return C.abort(), !1;
            for (p in{
                success: 1,
                error: 1,
                complete: 1
            })
                C[p](m[p]);
            if (a = f(ln, m, n, C)) {
                C.readyState = 1, d && v.trigger("ajaxSend", [C, m]), m.async && m.timeout > 0 && (l = setTimeout(function() {
                    C.abort("timeout")
                }, m.timeout));
                try {
                    E = 1, a.send(x, i)
                } catch (k) {
                    if (!(2 > E))
                        throw k;
                    i( - 1, k)
                }
            } else 
                i( - 1, "No Transport");
            return C
        },
        param: function(e, n) {
            var i = [], r = function(e, t) {
                t = L.isFunction(t) ? t() : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (n === t && (n = L.ajaxSettings.traditional), L.isArray(e) || e.jquery&&!L.isPlainObject(e))
                L.each(e, function() {
                    r(this.name, this.value)
                });
            else 
                for (var o in e)
                    h(o, e[o], n, r);
            return i.join("&").replace(qt, "+")
        }
    }), L.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var hn = L.now(), dn = /(\=)\?(&|$)|\?\?/i;
    L.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return L.expando + "_" + hn++
        }
    }), L.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r = "application/x-www-form-urlencoded" === t.contentType && "string" == typeof t.data;
        if ("jsonp" === t.dataTypes[0] || t.jsonp!==!1 && (dn.test(t.url) || r && dn.test(t.data))) {
            var o, s = t.jsonpCallback = L.isFunction(t.jsonpCallback) ? t.jsonpCallback(): t.jsonpCallback, a = e[s], l = t.url, c = t.data, u = "$1" + s + "$2";
            return t.jsonp!==!1 && (l = l.replace(dn, u), t.url === l && (r && (c = c.replace(dn, u)), t.data === c && (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + s))), t.url = l, t.data = c, e[s] = function(e) {
                o = [e]
            }, i.always(function() {
                e[s] = a, o && L.isFunction(a) && e[s](o[0])
            }), t.converters["script json"] = function() {
                return o || L.error(s + " was not called"), o[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), L.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return L.globalEval(e), e
            }
        }
    }), L.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache=!1), e.crossDomain && (e.type = "GET", e.global=!1)
    }), L.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, i = M.head || M.getElementsByTagName("head")[0] || M.documentElement;
            return {
                send: function(r, o) {
                    n = M.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, r) {
                        (r ||!n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = t, r || o(200, "success"))
                    }, i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var fn, pn = e.ActiveXObject ? function() {
        for (var e in fn)
            fn[e](0, 1)
    }
    : !1, mn = 0;
    L.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && l() || a()
    } : l, function(e) {
        L.extend(L.support, {
            ajax: !!e,
            cors: !!e && "withCredentials"in e
        })
    }(L.ajaxSettings.xhr()), L.support.ajax && L.ajaxTransport(function(n) {
        if (!n.crossDomain || L.support.cors) {
            var i;
            return {
                send: function(r, o) {
                    var s, a, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (a in n.xhrFields)
                            l[a] = n.xhrFields[a];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), !n.crossDomain&&!r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in r)
                            l.setRequestHeader(a, r[a])
                    } catch (c) {}
                    l.send(n.hasContent && n.data || null), i = function(e, r) {
                        var a, c, u, h, d;
                        try {
                            if (i && (r || 4 === l.readyState))
                                if (i = t, s && (l.onreadystatechange = L.noop, pn && delete fn[s]), r)
                                    4 !== l.readyState && l.abort();
                                else {
                                    a = l.status, u = l.getAllResponseHeaders(), h = {}, d = l.responseXML, d && d.documentElement && (h.xml = d), h.text = l.responseText;
                                    try {
                                        c = l.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    a ||!n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
                                }
                        } catch (p) {
                            r || o( - 1, p)
                        }
                        h && o(a, c, h, u)
                    }, n.async && 4 !== l.readyState ? (s=++mn, pn && (fn || (fn = {}, L(e).unload(pn)), fn[s] = i), l.onreadystatechange = i) : i()
                },
                abort: function() {
                    i && i(0, 1)
                }
            }
        }
    });
    var gn, vn, yn, bn, _n = {}, xn = /^(?:toggle|show|hide)$/, wn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, En = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    L.fn.extend({
        show: function(e, t, n) {
            var o, s;
            if (e || 0 === e)
                return this.animate(r("show", 3), e, t, n);
            for (var a = 0, l = this.length; l > a; a++)
                o = this[a], o.style && (s = o.style.display, !L._data(o, "olddisplay") && "none" === s && (s = o.style.display = ""), "" === s && "none" === L.css(o, "display") && L._data(o, "olddisplay", i(o.nodeName)));
            for (a = 0; l > a; a++)
                o = this[a], o.style && (s = o.style.display, ("" === s || "none" === s) && (o.style.display = L._data(o, "olddisplay") || ""));
            return this
        },
        hide: function(e, t, n) {
            if (e || 0 === e)
                return this.animate(r("hide", 3), e, t, n);
            for (var i, o, s = 0, a = this.length; a > s; s++)
                i = this[s], i.style && (o = L.css(i, "display"), "none" !== o&&!L._data(i, "olddisplay") && L._data(i, "olddisplay", o));
            for (s = 0; a > s; s++)
                this[s].style && (this[s].style.display = "none");
            return this
        },
        _toggle: L.fn.toggle,
        toggle: function(e, t, n) {
            var i = "boolean" == typeof e;
            return L.isFunction(e) && L.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || i ? this.each(function() {
                var t = i ? e: L(this).is(":hidden");
                L(this)[t ? "show": "hide"]()
            }) : this.animate(r("toggle", 3), e, t, n), this
        },
        fadeTo: function(e, t, n, i) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, r) {
            function o() {
                s.queue===!1 && L._mark(this);
                var t, n, r, o, a, l, c, u, h, d = L.extend({}, s), f = 1 === this.nodeType, p = f && L(this).is(":hidden");
                d.animatedProperties = {};
                for (r in e) {
                    if (t = L.camelCase(r), r !== t && (e[t] = e[r], delete e[r]), n = e[t], L.isArray(n) ? (d.animatedProperties[t] = n[1], n = e[t] = n[0]) : d.animatedProperties[t] = d.specialEasing && d.specialEasing[t] || d.easing || "swing", "hide" === n && p || "show" === n&&!p)
                        return d.complete.call(this);
                    f && ("height" === t || "width" === t) && (d.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === L.css(this, "display") && "none" === L.css(this, "float") && (L.support.inlineBlockNeedsLayout && "inline" !== i(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                null != d.overflow && (this.style.overflow = "hidden");
                for (r in e)
                    o = new L.fx(this, d, r), n = e[r], xn.test(n) ? (h = L._data(this, "toggle" + r) || ("toggle" === n ? p ? "show" : "hide" : 0), h ? (L._data(this, "toggle" + r, "show" === h ? "hide" : "show"), o[h]()) : o[n]()) : (a = wn.exec(n), l = o.cur(), a ? (c = parseFloat(a[2]), u = a[3] || (L.cssNumber[r] ? "" : "px"), "px" !== u && (L.style(this, r, (c || 1) + u), l = (c || 1) / o.cur() * l, L.style(this, r, l + u)), a[1] && (c = ("-=" === a[1]?-1 : 1) * c + l), o.custom(l, c, u)) : o.custom(l, n, ""));
                return !0
            }
            var s = L.speed(t, n, r);
            return L.isEmptyObject(e) ? this.each(s.complete, [!1]) : (e = L.extend({}, e), s.queue===!1 ? this.each(o) : this.queue(s.queue, o))
        },
        stop: function(e, n, i) {
            return "string" != typeof e && (i = n, n = e, e = t), n && e!==!1 && this.queue(e || "fx", []), this.each(function() {
                function t(e, t, n) {
                    var r = t[n];
                    L.removeData(e, n, !0), r.stop(i)
                }
                var n, r=!1, o = L.timers, s = L._data(this);
                if (i || L._unmark(!0, this), null == e)
                    for (n in s)
                        s[n] && s[n].stop && n.indexOf(".run") === n.length - 4 && t(this, s, n);
                else 
                    s[n = e + ".run"] && s[n].stop && t(this, s, n);
                for (n = o.length; n--;)
                    o[n].elem === this && (null == e || o[n].queue === e) && (i ? o[n](!0) : o[n].saveState(), r=!0, o.splice(n, 1));
                (!i ||!r) && L.dequeue(this, e)
            })
        }
    }), L.each({
        slideDown: r("show", 1),
        slideUp: r("hide", 1),
        slideToggle: r("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        L.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), L.extend({
        speed: function(e, t, n) {
            var i = e && "object" == typeof e ? L.extend({}, e): {
                complete: n ||!n && t || L.isFunction(e) && e,
                duration: e,
                easing: n && t || t&&!L.isFunction(t) && t
            };
            return i.duration = L.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in L.fx.speeds ? L.fx.speeds[i.duration] : L.fx.speeds._default, (null == i.queue || i.queue===!0) && (i.queue = "fx"), i.old = i.complete, i.complete = function(e) {
                L.isFunction(i.old) && i.old.call(this), i.queue ? L.dequeue(this, i.queue) : e!==!1 && L._unmark(this)
            }, i
        },
        easing: {
            linear: function(e, t, n, i) {
                return n + i * e
            },
            swing: function(e, t, n, i) {
                return ( - Math.cos(e * Math.PI) / 2 + .5) * i + n
            }
        },
        timers: [],
        fx: function(e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
        }
    }), L.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this), (L.fx.step[this.prop] || L.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop]))
                return this.elem[this.prop];
            var e, t = L.css(this.elem, this.prop);
            return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e
        },
        custom: function(e, n, i) {
            function r(e) {
                return o.step(e)
            }
            var o = this, a = L.fx;
            this.startTime = bn || s(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = i || this.unit || (L.cssNumber[this.prop] ? "" : "px"), r.queue = this.options.queue, r.elem = this.elem, r.saveState = function() {
                o.options.hide && L._data(o.elem, "fxshow" + o.prop) === t && L._data(o.elem, "fxshow" + o.prop, o.start)
            }, r() && L.timers.push(r)&&!yn && (yn = setInterval(a.tick, a.interval))
        },
        show: function() {
            var e = L._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || L.style(this.elem, this.prop), this.options.show=!0, e !== t ? this.custom(this.cur(), e) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), L(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = L._data(this.elem, "fxshow" + this.prop) || L.style(this.elem, this.prop), this.options.hide=!0, this.custom(this.cur(), 0)
        },
        step: function(e) {
            var t, n, i, r = bn || s(), o=!0, a = this.elem, l = this.options;
            if (e || r >= l.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), l.animatedProperties[this.prop]=!0;
                for (t in l.animatedProperties)
                    l.animatedProperties[t]!==!0 && (o=!1);
                if (o) {
                    if (null != l.overflow&&!L.support.shrinkWrapBlocks && L.each(["", "X", "Y"], function(e, t) {
                        a.style["overflow" + t] = l.overflow[e]
                    }), l.hide && L(a).hide(), l.hide || l.show)
                        for (t in l.animatedProperties)
                            L.style(a, t, l.orig[t]), L.removeData(a, "fxshow" + t, !0), L.removeData(a, "toggle" + t, !0);
                    i = l.complete, i && (l.complete=!1, i.call(a))
                }
                return !1
            }
            return 1 / 0 == l.duration ? this.now = r : (n = r - this.startTime, this.state = n / l.duration, this.pos = L.easing[l.animatedProperties[this.prop]](this.state, n, 0, 1, l.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, L.extend(L.fx, {
        tick: function() {
            for (var e, t = L.timers, n = 0; n < t.length; n++)
                e = t[n], !e() && t[n] === e && t.splice(n--, 1);
            t.length || L.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(yn), yn = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(e) {
                L.style(e.elem, "opacity", e.now)
            },
            _default: function(e) {
                e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), L.each(["width", "height"], function(e, t) {
        L.fx.step[t] = function(e) {
            L.style(e.elem, t, Math.max(0, e.now) + e.unit)
        }
    }), L.expr && L.expr.filters && (L.expr.filters.animated = function(e) {
        return L.grep(L.timers, function(t) {
            return e === t.elem
        }).length
    });
    var Cn = /^t(?:able|d|h)$/i, Sn = /^(?:body|html)$/i;
    L.fn.offset = "getBoundingClientRect"in M.documentElement ? function(e) {
        var t, i = this[0];
        if (e)
            return this.each(function(t) {
                L.offset.setOffset(this, e, t)
            });
        if (!i ||!i.ownerDocument)
            return null;
        if (i === i.ownerDocument.body)
            return L.offset.bodyOffset(i);
        try {
            t = i.getBoundingClientRect()
        } catch (r) {}
        var o = i.ownerDocument, s = o.documentElement;
        if (!t ||!L.contains(s, i))
            return t ? {
                top: t.top,
                left: t.left
            } : {
                top: 0,
                left: 0
            };
        var a = o.body, l = n(o), c = s.clientTop || a.clientTop || 0, u = s.clientLeft || a.clientLeft || 0, h = l.pageYOffset || L.support.boxModel && s.scrollTop || a.scrollTop, d = l.pageXOffset || L.support.boxModel && s.scrollLeft || a.scrollLeft, f = t.top + h - c, p = t.left + d - u;
        return {
            top: f,
            left: p
        }
    } : function(e) {
        var t = this[0];
        if (e)
            return this.each(function(t) {
                L.offset.setOffset(this, e, t)
            });
        if (!t ||!t.ownerDocument)
            return null;
        if (t === t.ownerDocument.body)
            return L.offset.bodyOffset(t);
        for (var n, i = t.offsetParent, r = t, o = t.ownerDocument, s = o.documentElement, a = o.body, l = o.defaultView, c = l ? l.getComputedStyle(t, null) : t.currentStyle, u = t.offsetTop, h = t.offsetLeft; (t = t.parentNode) && t !== a && t !== s && (!L.support.fixedPosition || "fixed" !== c.position);)
            n = l ? l.getComputedStyle(t, null) : t.currentStyle, u -= t.scrollTop, h -= t.scrollLeft, t === i && (u += t.offsetTop, h += t.offsetLeft, L.support.doesNotAddBorder && (!L.support.doesAddBorderForTableAndCells ||!Cn.test(t.nodeName)) && (u += parseFloat(n.borderTopWidth) || 0, h += parseFloat(n.borderLeftWidth) || 0), r = i, i = t.offsetParent), L.support.subtractsBorderForOverflowNotVisible && "visible" !== n.overflow && (u += parseFloat(n.borderTopWidth) || 0, h += parseFloat(n.borderLeftWidth) || 0), c = n;
        return ("relative" === c.position || "static" === c.position) && (u += a.offsetTop, h += a.offsetLeft), L.support.fixedPosition && "fixed" === c.position && (u += Math.max(s.scrollTop, a.scrollTop), h += Math.max(s.scrollLeft, a.scrollLeft)), {
            top: u,
            left: h
        }
    }, L.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop, n = e.offsetLeft;
            return L.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(L.css(e, "marginTop")) || 0, n += parseFloat(L.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var i = L.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var r, o, s = L(e), a = s.offset(), l = L.css(e, "top"), c = L.css(e, "left"), u = ("absolute" === i || "fixed" === i) && L.inArray("auto", [l, c])>-1, h = {}, d = {};
            u ? (d = s.position(), r = d.top, o = d.left) : (r = parseFloat(l) || 0, o = parseFloat(c) || 0), L.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (h.top = t.top - a.top + r), null != t.left && (h.left = t.left - a.left + o), "using"in t ? t.using.call(e, h) : s.css(h)
        }
    }, L.fn.extend({
        position: function() {
            if (!this[0])
                return null;
            var e = this[0], t = this.offsetParent(), n = this.offset(), i = Sn.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            }
            : t.offset();
            return n.top -= parseFloat(L.css(e, "marginTop")) || 0, n.left -= parseFloat(L.css(e, "marginLeft")) || 0, i.top += parseFloat(L.css(t[0], "borderTopWidth")) || 0, i.left += parseFloat(L.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - i.top,
                left: n.left - i.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || M.body; e&&!Sn.test(e.nodeName) && "static" === L.css(e, "position");)
                    e = e.offsetParent;
                return e
            })
        }
    }), L.each(["Left", "Top"], function(e, i) {
        var r = "scroll" + i;
        L.fn[r] = function(i) {
            var o, s;
            return i === t ? (o = this[0]) ? (s = n(o), s ? "pageXOffset"in s ? s[e ? "pageYOffset": "pageXOffset"] : L.support.boxModel && s.document.documentElement[r] || s.document.body[r] : o[r]) : null : this.each(function() {
                s = n(this), s ? s.scrollTo(e ? L(s).scrollLeft() : i, e ? i : L(s).scrollTop()) : this[r] = i
            })
        }
    }), L.each(["Height", "Width"], function(e, n) {
        var i = n.toLowerCase();
        L.fn["inner" + n] = function() {
            var e = this[0];
            return e ? e.style ? parseFloat(L.css(e, i, "padding")) : this[i]() : null
        }, L.fn["outer" + n] = function(e) {
            var t = this[0];
            return t ? t.style ? parseFloat(L.css(t, i, e ? "margin" : "border")) : this[i]() : null
        }, L.fn[i] = function(e) {
            var r = this[0];
            if (!r)
                return null == e ? null : this;
            if (L.isFunction(e))
                return this.each(function(t) {
                    var n = L(this);
                    n[i](e.call(this, t, n[i]()))
                });
            if (L.isWindow(r)) {
                var o = r.document.documentElement["client" + n], s = r.document.body;
                return "CSS1Compat" === r.document.compatMode && o || s && s["client" + n] || o
            }
            if (9 === r.nodeType)
                return Math.max(r.documentElement["client" + n], r.body["scroll" + n], r.documentElement["scroll" + n], r.body["offset" + n], r.documentElement["offset" + n]);
            if (e === t) {
                var a = L.css(r, i), l = parseFloat(a);
                return L.isNumeric(l) ? l : a
            }
            return this.css(i, "string" == typeof e ? e : e + "px")
        }
    }), e.jQuery = e.$ = L, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return L
    })
}(window), /*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
function(e, t) {
    function n(t, n) {
        var r = t.nodeName.toLowerCase();
        if ("area" === r) {
            var o, s = t.parentNode, a = s.name;
            return t.href && a && "map" === s.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !!o && i(o)) : !1
        }
        return (/input|select|textarea|button|object/.test(r)?!t.disabled : "a" == r ? t.href || n : n) && i(t)
    }
    function i(t) {
        return !e(t).parents().andSelf().filter(function() {
            return "hidden" === e.curCSS(this, "visibility") || e.expr.filters.hidden(this)
        }).length
    }
    e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {
        version: "1.8.22",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
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
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), e.fn.extend({
        propAttr: e.fn.prop || e.fn.attr,
        _focus: e.fn.focus,
        focus: function(t, n) {
            return "number" == typeof t ? this.each(function() {
                var i = this;
                setTimeout(function() {
                    e(i).focus(), n && n.call(i)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t;
            return t = e.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.curCSS(this, "position", 1)) && /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0), /fixed/.test(this.css("position")) ||!t.length ? e(document) : t
        },
        zIndex: function(n) {
            if (n !== t)
                return this.css("zIndex", n);
            if (this.length)
                for (var i, r, o = e(this[0]); o.length && o[0] !== document;) {
                    if (i = o.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (r = parseInt(o.css("zIndex"), 10), !isNaN(r) && 0 !== r))
                        return r;
                        o = o.parent()
                }
            return 0
        },
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, i) {
        function r(t, n, i, r) {
            return e.each(o, function() {
                n -= parseFloat(e.curCSS(t, "padding" + this, !0)) || 0, i && (n -= parseFloat(e.curCSS(t, "border" + this + "Width", !0)) || 0), r && (n -= parseFloat(e.curCSS(t, "margin" + this, !0)) || 0)
            }), n
        }
        var o = "Width" === i ? ["Left", "Right"]: ["Top", "Bottom"], s = i.toLowerCase(), a = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + i] = function(n) {
            return n === t ? a["inner" + i].call(this) : this.each(function() {
                e(this).css(s, r(this, n) + "px")
            })
        }, e.fn["outer" + i] = function(t, n) {
            return "number" != typeof t ? a["outer" + i].call(this, t) : this.each(function() {
                e(this).css(s, r(this, t, !0, n) + "px")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t)
            }
        }): function(t, n, i) {
            return !!e.data(t, i[3])
        },
        focusable: function(t) {
            return n(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var i = e.attr(t, "tabindex"), r = isNaN(i);
            return (r || i >= 0) && n(t, !r)
        }
    }), e(function() {
        var t = document.body, n = t.appendChild(n = document.createElement("div"));
        n.offsetHeight, e.extend(n.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), e.support.minHeight = 100 === n.offsetHeight, e.support.selectstart = "onselectstart"in n, t.removeChild(n).style.display = "none"
    }), e.curCSS || (e.curCSS = e.css), e.extend(e.ui, {
        plugin: {
            add: function(t, n, i) {
                var r = e.ui[t].prototype;
                for (var o in i)
                    r.plugins[o] = r.plugins[o] || [], r.plugins[o].push([n, i[o]])
            },
            call: function(e, t, n) {
                var i = e.plugins[t];
                if (i && e.element[0].parentNode)
                    for (var r = 0; r < i.length; r++)
                        e.options[i[r][0]] && i[r][1].apply(e.element, n)
            }
        },
        contains: function(e, t) {
            return document.compareDocumentPosition ? 16 & e.compareDocumentPosition(t) : e !== t && e.contains(t)
        },
        hasScroll: function(t, n) {
            if ("hidden" === e(t).css("overflow"))
                return !1;
            var i = n && "left" === n ? "scrollLeft": "scrollTop", r=!1;
            return t[i] > 0?!0 : (t[i] = 1, r = t[i] > 0, t[i] = 0, r)
        },
        isOverAxis: function(e, t, n) {
            return e > t && t + n > e
        },
        isOver: function(t, n, i, r, o, s) {
            return e.ui.isOverAxis(t, i, o) && e.ui.isOverAxis(n, r, s)
        }
    }))
}(jQuery), /*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
function(e, t) {
    if (e.cleanData) {
        var n = e.cleanData;
        e.cleanData = function(t) {
            for (var i, r = 0; null != (i = t[r]); r++)
                try {
                    e(i).triggerHandler("remove")
            } catch (o) {}
            n(t)
        }
    } else {
        var i = e.fn.remove;
        e.fn.remove = function(t, n) {
            return this.each(function() {
                return n || (!t || e.filter(t, [this]).length) && e("*", this).add([this]).each(function() {
                    try {
                        e(this).triggerHandler("remove")
                    } catch (t) {}
                }), i.call(e(this), t, n)
            })
        }
    }
    e.widget = function(t, n, i) {
        var r, o = t.split(".")[0];
        t = t.split(".")[1], r = o + "-" + t, i || (i = n, n = e.Widget), e.expr[":"][r] = function(n) {
            return !!e.data(n, t)
        }, e[o] = e[o] || {}, e[o][t] = function(e, t) {
            arguments.length && this._createWidget(e, t)
        };
        var s = new n;
        s.options = e.extend(!0, {}, s.options), e[o][t].prototype = e.extend(!0, s, {
            namespace: o,
            widgetName: t,
            widgetEventPrefix: e[o][t].prototype.widgetEventPrefix || t,
            widgetBaseClass: r
        }, i), e.widget.bridge(t, e[o][t])
    }, e.widget.bridge = function(n, i) {
        e.fn[n] = function(r) {
            var o = "string" == typeof r, s = Array.prototype.slice.call(arguments, 1), a = this;
            return r=!o && s.length ? e.extend.apply(null, [!0, r].concat(s)) : r, o && "_" === r.charAt(0) ? a : (o ? this.each(function() {
                var i = e.data(this, n), o = i && e.isFunction(i[r]) ? i[r].apply(i, s): i;
                return o !== i && o !== t ? (a = o, !1) : void 0
            }) : this.each(function() {
                var t = e.data(this, n);
                t ? t.option(r || {})._init() : e.data(this, n, new i(r, this))
            }), a)
        }
    }, e.Widget = function(e, t) {
        arguments.length && this._createWidget(e, t)
    }, e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function(t, n) {
            e.data(n, this.widgetName, this), this.element = e(n), this.options = e.extend(!0, {}, this.options, this._getCreateOptions(), t);
            var i = this;
            this.element.bind("remove." + this.widgetName, function() {
                i.destroy()
            }), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function() {
            return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(n, i) {
            var r = n;
            if (0 === arguments.length)
                return e.extend({}, this.options);
            if ("string" == typeof n) {
                if (i === t)
                    return this.options[n];
                r = {}, r[n] = i
            }
            return this._setOptions(r), this
        },
        _setOptions: function(t) {
            var n = this;
            return e.each(t, function(e, t) {
                n._setOption(e, t)
            }), this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && this.widget()[t ? "addClass": "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", t), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _trigger: function(t, n, i) {
            var r, o, s = this.options[t];
            if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], o = n.originalEvent, o)
                for (r in o)
                    r in n || (n[r] = o[r]);
            return this.element.trigger(n, i), !(e.isFunction(s) && s.call(this.element[0], n, i)===!1 || n.isDefaultPrevented())
        }
    }
}(jQuery), /*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.mouse.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
function(e) {
    var t=!1;
    e(document).mouseup(function() {
        t=!1
    }), e.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function(n) {
                return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
            }), this.started=!1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(n) {
            if (!t) {
                this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                var i = this, r = 1 == n.which, o = "string" == typeof this.options.cancel && n.target.nodeName ? e(n.target).closest(this.options.cancel).length: !1;
                return r&&!o && this._mouseCapture(n) ? (this.mouseDelayMet=!this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet=!0
                }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n)!==!1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return i._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), t=!0, !0)) : !0
            }
        },
        _mouseMove: function(t) {
            return !e.browser.msie || document.documentMode >= 9 || t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t)!==!1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function(t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted=!1, t.target == this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
}(jQuery), /*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.position.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
function(e) {
    e.ui = e.ui || {};
    var t = /left|center|right/, n = /top|center|bottom/, i = "center", r = {}, o = e.fn.position, s = e.fn.offset;
    e.fn.position = function(s) {
        if (!s ||!s.of)
            return o.apply(this, arguments);
        s = e.extend({}, s);
        var a, l, c, u = e(s.of), h = u[0], d = (s.collision || "flip").split(" "), f = s.offset ? s.offset.split(" "): [0, 0];
        return 9 === h.nodeType ? (a = u.width(), l = u.height(), c = {
            top: 0,
            left: 0
        }) : h.setTimeout ? (a = u.width(), l = u.height(), c = {
            top: u.scrollTop(),
            left: u.scrollLeft()
        }) : h.preventDefault ? (s.at = "left top", a = l = 0, c = {
            top: s.of.pageY,
            left: s.of.pageX
        }) : (a = u.outerWidth(), l = u.outerHeight(), c = u.offset()), e.each(["my", "at"], function() {
            var e = (s[this] || "").split(" ");
            1 === e.length && (e = t.test(e[0]) ? e.concat([i]) : n.test(e[0]) ? [i].concat(e) : [i, i]), e[0] = t.test(e[0]) ? e[0] : i, e[1] = n.test(e[1]) ? e[1] : i, s[this] = e
        }), 1 === d.length && (d[1] = d[0]), f[0] = parseInt(f[0], 10) || 0, 1 === f.length && (f[1] = f[0]), f[1] = parseInt(f[1], 10) || 0, "right" === s.at[0] ? c.left += a : s.at[0] === i && (c.left += a / 2), "bottom" === s.at[1] ? c.top += l : s.at[1] === i && (c.top += l / 2), c.left += f[0], c.top += f[1], this.each(function() {
            var t, n = e(this), o = n.outerWidth(), u = n.outerHeight(), h = parseInt(e.curCSS(this, "marginLeft", !0)) || 0, p = parseInt(e.curCSS(this, "marginTop", !0)) || 0, m = o + h + (parseInt(e.curCSS(this, "marginRight", !0)) || 0), g = u + p + (parseInt(e.curCSS(this, "marginBottom", !0)) || 0), v = e.extend({}, c);
            "right" === s.my[0] ? v.left -= o : s.my[0] === i && (v.left -= o / 2), "bottom" === s.my[1] ? v.top -= u : s.my[1] === i && (v.top -= u / 2), r.fractions || (v.left = Math.round(v.left), v.top = Math.round(v.top)), t = {
                left: v.left - h,
                top: v.top - p
            }, e.each(["left", "top"], function(n, i) {
                e.ui.position[d[n]] && e.ui.position[d[n]][i](v, {
                    targetWidth: a,
                    targetHeight: l,
                    elemWidth: o,
                    elemHeight: u,
                    collisionPosition: t,
                    collisionWidth: m,
                    collisionHeight: g,
                    offset: f,
                    my: s.my,
                    at: s.at
                })
            }), e.fn.bgiframe && n.bgiframe(), n.offset(e.extend(v, {
                using: s.using
            }))
        })
    }, e.ui.position = {
        fit: {
            left: function(t, n) {
                var i = e(window), r = n.collisionPosition.left + n.collisionWidth - i.width() - i.scrollLeft();
                t.left = r > 0 ? t.left - r : Math.max(t.left - n.collisionPosition.left, t.left)
            },
            top: function(t, n) {
                var i = e(window), r = n.collisionPosition.top + n.collisionHeight - i.height() - i.scrollTop();
                t.top = r > 0 ? t.top - r : Math.max(t.top - n.collisionPosition.top, t.top)
            }
        },
        flip: {
            left: function(t, n) {
                if (n.at[0] !== i) {
                    var r = e(window), o = n.collisionPosition.left + n.collisionWidth - r.width() - r.scrollLeft(), s = "left" === n.my[0]?-n.elemWidth : "right" === n.my[0] ? n.elemWidth : 0, a = "left" === n.at[0] ? n.targetWidth : - n.targetWidth, l =- 2 * n.offset[0];
                    t.left += n.collisionPosition.left < 0 ? s + a + l : o > 0 ? s + a + l : 0
                }
            },
            top: function(t, n) {
                if (n.at[1] !== i) {
                    var r = e(window), o = n.collisionPosition.top + n.collisionHeight - r.height() - r.scrollTop(), s = "top" === n.my[1]?-n.elemHeight : "bottom" === n.my[1] ? n.elemHeight : 0, a = "top" === n.at[1] ? n.targetHeight : - n.targetHeight, l =- 2 * n.offset[1];
                    t.top += n.collisionPosition.top < 0 ? s + a + l : o > 0 ? s + a + l : 0
                }
            }
        }
    }, e.offset.setOffset || (e.offset.setOffset = function(t, n) {
        /static/.test(e.curCSS(t, "position")) && (t.style.position = "relative");
        var i = e(t), r = i.offset(), o = parseInt(e.curCSS(t, "top", !0), 10) || 0, s = parseInt(e.curCSS(t, "left", !0), 10) || 0, a = {
            top: n.top - r.top + o,
            left: n.left - r.left + s
        };
        "using"in n ? n.using.call(t, a) : i.css(a)
    }, e.fn.offset = function(t) {
        var n = this[0];
        return n && n.ownerDocument ? t ? e.isFunction(t) ? this.each(function(n) {
            e(this).offset(t.call(this, n, e(this).offset()))
        }) : this.each(function() {
            e.offset.setOffset(this, t)
        }) : s.call(this) : null
    }), function() {
        var t, n, i, o, s, a = document.getElementsByTagName("body")[0], l = document.createElement("div");
        t = document.createElement(a ? "div" : "body"), i = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, a && e.extend(i, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (var c in i)
            t.style[c] = i[c];
        t.appendChild(l), n = a || document.documentElement, n.insertBefore(t, n.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", o = e(l).offset(function(e, t) {
            return t
        }).offset(), t.innerHTML = "", n.removeChild(t), s = o.top + o.left + (a ? 2e3 : 0), r.fractions = s > 21 && 22 > s
    }()
}(jQuery), /*! jQuery UI - v1.8.22 - 2012-07-24
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.autocomplete.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
function(e) {
    var t = 0;
    e.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function() {
            var t, n = this, i = this.element[0].ownerDocument;
            this.isMultiLine = this.element.is("textarea"), this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", function(i) {
                if (!n.options.disabled&&!n.element.propAttr("readOnly")) {
                    t=!1;
                    var r = e.ui.keyCode;
                    switch (i.keyCode) {
                    case r.PAGE_UP:
                        n._move("previousPage", i);
                        break;
                    case r.PAGE_DOWN:
                        n._move("nextPage", i);
                        break;
                    case r.UP:
                        n._keyEvent("previous", i);
                        break;
                    case r.DOWN:
                        n._keyEvent("next", i);
                        break;
                    case r.ENTER:
                    case r.NUMPAD_ENTER:
                        n.menu.active && (t=!0, i.preventDefault());
                    case r.TAB:
                        if (!n.menu.active)
                            return;
                        n.menu.select(i);
                        break;
                    case r.ESCAPE:
                        n.element.val(n.term), n.close(i);
                        break;
                    default:
                        clearTimeout(n.searching), n.searching = setTimeout(function() {
                            n.term != n.element.val() && (n.selectedItem = null, n.search(null, i))
                        }, n.options.delay)
                    }
                }
            }).bind("keypress.autocomplete", function(e) {
                t && (t=!1, e.preventDefault())
            }).bind("focus.autocomplete", function() {
                n.options.disabled || (n.selectedItem = null, n.previous = n.element.val())
            }).bind("blur.autocomplete", function(e) {
                n.options.disabled || (clearTimeout(n.searching), n.closing = setTimeout(function() {
                    n.close(e), n._change(e)
                }, 150))
            }), this._initSource(), this.menu = e("<ul></ul>").addClass("ui-autocomplete").appendTo(e(this.options.appendTo || "body", i)[0]).mousedown(function(t) {
                var i = n.menu.element[0];
                e(t.target).closest(".ui-menu-item").length || setTimeout(function() {
                    e(document).one("mousedown", function(t) {
                        t.target !== n.element[0] && t.target !== i&&!e.ui.contains(i, t.target) && n.close()
                    })
                }, 1), setTimeout(function() {
                    clearTimeout(n.closing)
                }, 13)
            }).menu({
                focus: function(e, t) {
                    var i = t.item.data("item.autocomplete");
                    !1 !== n._trigger("focus", e, {
                        item: i
                    }) && /^key/.test(e.originalEvent.type) && n.element.val(i.value)
                },
                selected: function(e, t) {
                    var r = t.item.data("item.autocomplete"), o = n.previous;
                    n.element[0] !== i.activeElement && (n.element.focus(), n.previous = o, setTimeout(function() {
                        n.previous = o, n.selectedItem = r
                    }, 1)), !1 !== n._trigger("select", e, {
                        item: r
                    }) && n.element.val(r.value), n.term = n.element.val(), n.close(e), n.selectedItem = r
                },
                blur: function() {
                    n.menu.element.is(":visible") && n.element.val() !== n.term && n.element.val(n.term)
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu"), e.fn.bgiframe && this.menu.element.bgiframe(), n.beforeunloadHandler = function() {
                n.element.removeAttr("autocomplete")
            }, e(window).bind("beforeunload", n.beforeunloadHandler)
        },
        destroy: function() {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), e(window).unbind("beforeunload", this.beforeunloadHandler), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function(t, n) {
            e.Widget.prototype._setOption.apply(this, arguments), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(e(n || "body", this.element[0].ownerDocument)[0]), "disabled" === t && n && this.xhr && this.xhr.abort()
        },
        _initSource: function() {
            var t, n, i = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function(n, i) {
                i(e.ui.autocomplete.filter(t, n.term))
            }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function(t, r) {
                i.xhr && i.xhr.abort(), i.xhr = e.ajax({
                    url: n,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        r(e)
                    },
                    error: function() {
                        r([])
                    }
                })
            }) : this.source = this.options.source
        },
        search: function(e, t) {
            return e = null != e ? e : this.element.val(), this.term = this.element.val(), e.length < this.options.minLength ? this.close(t) : (clearTimeout(this.closing), this._trigger("search", t)!==!1 ? this._search(e) : void 0)
        },
        _search: function(e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var e = this, n=++t;
            return function(i) {
                n === t && e.__response(i), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(e) {
            !this.options.disabled && e && e.length ? (e = this._normalize(e), this._suggest(e), this._trigger("open")) : this.close()
        },
        close: function(e) {
            clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this.element.val() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function(t) {
            var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(n, t), this.menu.deactivate(), this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(new e.Event("mouseover"))
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, n) {
            var i = this;
            e.each(n, function(e, n) {
                i._renderItem(t, n)
            })
        },
        _renderItem: function(t, n) {
            return e("<li></li>").data("item.autocomplete", n).append(e("<a></a>").text(n.label)).appendTo(t)
        },
        _move: function(e, t) {
            return this.menu.element.is(":visible") ? this.menu.first() && /^previous/.test(e) || this.menu.last() && /^next/.test(e) ? (this.element.val(this.term), this.menu.deactivate(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0)
        },
        widget: function() {
            return this.menu.element
        },
        _keyEvent: function(e, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, n) {
            var i = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
            return e.grep(t, function(e) {
                return i.test(e.label || e.value || e)
            })
        }
    })
}(jQuery), function(e) {
    e.widget("ui.menu", {
        _create: function() {
            var t = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function(n) {
                e(n.target).closest(".ui-menu-item a").length && (n.preventDefault(), t.select(n))
            }), this.refresh()
        },
        refresh: function() {
            var t = this, n = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
            n.children("a").addClass("ui-corner-all").attr("tabindex", - 1).mouseenter(function(n) {
                t.activate(n, e(this).parent())
            }).mouseleave(function() {
                t.deactivate()
            })
        },
        activate: function(e, t) {
            if (this.deactivate(), this.hasScroll()) {
                var n = t.offset().top - this.element.offset().top, i = this.element.scrollTop(), r = this.element.height();
                0 > n ? this.element.scrollTop(i + n) : n >= r && this.element.scrollTop(i + n - r + t.height())
            }
            this.active = t.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", e, {
                item: t
            })
        },
        deactivate: function() {
            this.active && (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null)
        },
        next: function(e) {
            this.move("next", ".ui-menu-item:first", e)
        },
        previous: function(e) {
            this.move("prev", ".ui-menu-item:last", e)
        },
        first: function() {
            return this.active&&!this.active.prevAll(".ui-menu-item").length
        },
        last: function() {
            return this.active&&!this.active.nextAll(".ui-menu-item").length
        },
        move: function(e, t, n) {
            if (!this.active)
                return this.activate(n, this.element.children(t)), void 0;
            var i = this.active[e + "All"](".ui-menu-item").eq(0);
            i.length ? this.activate(n, i) : this.activate(n, this.element.children(t))
        },
        nextPage: function(t) {
            if (this.hasScroll()) {
                if (!this.active || this.last())
                    return this.activate(t, this.element.children(".ui-menu-item:first")), void 0;
                var n = this.active.offset().top, i = this.element.height(), r = this.element.children(".ui-menu-item").filter(function() {
                    var t = e(this).offset().top - n - i + e(this).height();
                    return 10 > t && t>-10
                });
                r.length || (r = this.element.children(".ui-menu-item:last")), this.activate(t, r)
            } else 
                this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        },
        previousPage: function(t) {
            if (this.hasScroll()) {
                if (!this.active || this.first())
                    return this.activate(t, this.element.children(".ui-menu-item:last")), void 0;
                var n = this.active.offset().top, i = this.element.height(), r = this.element.children(".ui-menu-item").filter(function() {
                    var t = e(this).offset().top - n + i - e(this).height();
                    return 10 > t && t>-10
                });
                r.length || (r = this.element.children(".ui-menu-item:first")), this.activate(t, r)
            } else 
                this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        },
        hasScroll: function() {
            return this.element.height() < this.element[e.fn.prop ? "prop": "attr"]("scrollHeight")
        },
        select: function(e) {
            this._trigger("selected", e, {
                item: this.active
            })
        }
    })
}(jQuery);
var monkeyPatchAutocomplete = function(e) {
    e.ui.autocomplete.prototype._renderItem = function(t, n) {
        var i = new RegExp("^" + this.term, "i"), r = n.label.replace(i, "<span style='color:#444444;font-weight:normal;'>" + this.term + "</span>");
        return e("<li></li>").data("item.autocomplete", n).append("<a>" + r + "</a>").appendTo(t)
    }, e.ui.menu.prototype.refresh = function() {
        var t = this;
        t.isMouseActive=!1;
        var n = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
        n.children("a").addClass("ui-corner-all").attr("tabindex", - 1).mousemove(function(n) {
            t.isMouseActive || (t.activate(n, e(this).parent()), t.isMouseActive=!0)
        }).mouseleave(function() {
            t.isMouseActive && (t.deactivate(), t.isMouseActive=!1)
        })
    }
};
if (usasearch.config.host && usasearch.config.siteHandle)
    var saytUrl = usasearch.config.host + "/sayt?name=" + usasearch.config.siteHandle + "&";
else if ("undefined" != typeof usagov_sayt_url)
    var saytUrl = usagov_sayt_url;
void 0 === usasearch.config.autoSubmitOnSelect && (usasearch.config.autoSubmitOnSelect=!0), usasearch.jquery = jQuery.noConflict(!0), usasearch.jquery(document).ready(function() {
    var e = usasearch.jquery;
    monkeyPatchAutocomplete(e);
    var t = document.createElement("div");
    t.id = "usasearch_sayt", e("body").append(t), usasearchSaytStyle = {
        background: "none",
        border: 0,
        display: "block",
        "float": "none",
        height: 0,
        lineHeight: 0,
        margin: 0,
        padding: 0,
        position: "static",
        width: 0
    }, e("#usasearch_sayt").css(usasearchSaytStyle), e(".usagov-search-autocomplete").autocomplete({
        appendTo: "#usasearch_sayt",
        source: function(t, n) {
            e.ajax({
                url: saytUrl + "q=" + encodeURIComponent(t.term),
                dataType: "jsonp",
                success: n
            })
        },
        minLength: 2,
        delay: 250,
        select: function(t, n) {
            e(".usagov-search-autocomplete").val(n.item.value.toString()), usasearch.config.autoSubmitOnSelect && e(this).closest("form").submit()
        },
        open: function() {
            e("#usasearch_sayt .ui-autocomplete").removeClass("ui-corner-all").addClass("ui-corner-bottom"), e("#usasearch_sayt .ui-autocomplete").css("z-index", 999999);
            var t = e(".usagov-search-autocomplete").outerWidth(!1), n = e("#usasearch_sayt .ui-autocomplete").outerWidth(!1), i = t - n, r = e("#usasearch_sayt .ui-autocomplete").width();
            e("#usasearch_sayt .ui-autocomplete").css("width", r + i + "px")
        }
    })
});
