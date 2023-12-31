document.cookie.match(/nodocdom=1/) || (document.domain = "twitter.com");
(function() {
    function a() {
        document.write = "";
        window.top.location = window.self.location;
        setTimeout(function() {
            document.body.innerHTML = ""
        }, 0);
        window.self.onload = function(a) {
            document.body.innerHTML = ""
        }
    }
    if (window.top !== window.self)
        try {
            window.top.location.host || a(
            )
    } catch (b) {
        a()
    }
})(); /*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */
(function(a, b) {
    function H(a) {
        var b = G[a] = {};
        q.each(a.split(t), function(_, a) {
            b[a]=!0
        });
        return b
    }
    function K(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(J, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true"?!0 : d === "false"?!1
                    : d === "null" ? null : + d + "" === d?+d : I.test(d) ? q.parseJSON(d) : d
                } catch (f) {}
                q.data(a, c, d)
            } else 
                d = b
        }
        return d
    }
    function L(a) {
        var b;
        for (b in a) {
            if (b === "data" && q.isEmptyObject(a[b]))
                continue;
            if (b !== "toJSON")
                return !1
        }
        return !0
    }
    function db() {
        return !1
    }
    function eb() {
        return !0
    }
    function kb(a) {
        return !a ||!a.parentNode || a.parentNode.nodeType === 11
    }
    function lb(a, b) {
        do 
            a = a[b];
        while (a && a.nodeType !== 1);
        return a
    }
    function mb(a, b, c) {
        b = b || 0;
        if (q.isFunction(b))
            return q.grep(a, function(a, d) {
                var e=!!b.call(a, d, a);
                return e === c
            });
        if (b.nodeType)
            return q
            .grep(a, function(a, d) {
                return a === b === c
            });
        if (typeof b == "string") {
            var d = q.grep(a, function(a) {
                return a.nodeType === 1
            });
            if (hb.test(b))
                return q.filter(b, d, !c);
            b = q.filter(b, d)
        }
        return q.grep(a, function(a, d) {
            return q.inArray(a, b) >= 0 === c
        })
    }
    function nb(a) {
        var b = ob.split
        ("|"), c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    function Fb(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b))
    }
    function Gb(a, b) {
        if (b.nodeType !== 1 ||!q.hasData(a))
            return;
        var c, d, e, f = q._data(a), g = q._data(b, f), i = f.events;
        if (i) {
            delete g.handle;
            g.events = {};
            for (c in i)
                for (d = 0, e = i[c].length; d < e; d++)
                    q.event.add(b, c, i[c][d])
        }
        g.data && (g.data = q.extend({}, g.data))
    }
    function Hb(a, b) {
        var c;
        if (b.nodeType !== 1)
            return;
        b.clearAttributes && b.clearAttributes
        ();
        b.mergeAttributes && b.mergeAttributes(a);
        c = b.nodeName.toLowerCase();
        if (c === "object") {
            b.parentNode && (b.outerHTML = a.outerHTML);
            q.support.html5Clone && a.innerHTML&&!q.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)
        } else if (c === "input" && yb.test(a.type)) {
            b.defaultChecked =
            b.checked = a.checked;
            b.value !== a.value && (b.value = a.value)
        } else 
            c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text);
        b.removeAttribute(q.expando)
    }
    function Ib(a) {
        return typeof 
        a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : []
    }
    function Jb(a) {
        yb.test(a.type) && (a.defaultChecked = a.checked)
    }
    function _b(a, b) {
        if (b in a)
            return b;
        var c = b.charAt(0).toUpperCase
        () + b.slice(1), d = b, e = Zb.length;
        while (e--) {
            b = Zb[e] + c;
            if (b in a)
                return b
        }
        return d
    }
    function ac(a, b) {
        a = b || a;
        return q.css(a, "display") === "none" ||!q.contains(a.ownerDocument, a)
    }
    function bc(a, b) {
        var c, d, e = [], f = 0, g = a.length;
        for (; f < g; f++) {
            c = a[f];
            if (!c.style)
                continue;
            e[f] = q._data(c, "olddisplay");
            if (b) {
                !e[f] && c.style.display === "none" && (c.style.display = "");
                c.style.display === "" && ac(c) && (e[f] = q._data(c, "olddisplay", fc(c.nodeName)))
            } else {
                d = Kb(c, "display");
                !e[f] && d !== "none" && q._data(c, "olddisplay", d)
            }
        }
        for (f = 0; f < g; f++) {
            c = a[f]
            ;
            if (!c.style)
                continue;
            if (!b || c.style.display === "none" || c.style.display === "")
                c.style.display = b ? e[f] || "" : "none"
        }
        return a
    }
    function cc(a, b, c) {
        var d = Sb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function dc(a, b, c, d) {
        var e = c === (d ? "border" : "content") ? 4
        : b === "width" ? 1: 0, f = 0;
        for (; e < 4; e += 2) {
            c === "margin" && (f += q.css(a, c + Yb[e], !0));
            if (d) {
                c === "content" && (f -= parseFloat(Kb(a, "padding" + Yb[e])) || 0);
                c !== "margin" && (f -= parseFloat(Kb(a, "border" + Yb[e] + "Width")) || 0)
            } else {
                f += parseFloat(Kb(a, "padding" + Yb[e])) || 0;
                c !== "padding" &&
                (f += parseFloat(Kb(a, "border" + Yb[e] + "Width")) || 0)
            }
        }
        return f
    }
    function ec(a, b, c) {
        var d = b === "width" ? a.offsetWidth: a.offsetHeight, e=!0, f = q.support.boxSizing && q.css(a, "boxSizing") === "border-box";
        if (d <= 0 || d == null) {
            d = Kb(a, b);
            if (d < 0 || d == null)
                d = a.style[b];
            if (Tb.test
            (d))
                return d;
            e = f && (q.support.boxSizingReliable || d === a.style[b]);
            d = parseFloat(d) || 0
        }
        return d + dc(a, b, c || (f ? "border" : "content"), e) + "px"
    }
    function fc(a) {
        if (Vb[a])
            return Vb[a];
        var b = q("<" + a + ">").appendTo(e.body), c = b.css("display");
        b.remove();
        if (c === "none" || c === ""
        ) {
            Lb = e.body.appendChild(Lb || q.extend(e.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!Mb ||!Lb.createElement) {
                Mb = (Lb.contentWindow || Lb.contentDocument).document;
                Mb.write("<!doctype html><html><body>");
                Mb.close()
            }
            b = Mb.body.appendChild(Mb.createElement
            (a));
            c = Kb(b, "display");
            e.body.removeChild(Lb)
        }
        Vb[a] = c;
        return c
    }
    function lc(a, b, c, d) {
        var e;
        if (q.isArray(b))
            q.each(b, function(b, e) {
                c || hc.test(a) ? d(a, e) : lc(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
            });
        else if (!c && q.type(b) === "object")
            for (e in b)
                lc(a + "[" + e + "]"
                , b[e], c, d);
        else 
            d(a, b)
    }
    function Cc(a) {
        return function(b, c) {
            if (typeof b != "string") {
                c = b;
                b = "*"
            }
            var d, e, f, g = b.toLowerCase().split(t), i = 0, j = g.length;
            if (q.isFunction(c))
                for (; i < j; i++) {
                    d = g[i];
                    f = /^\+/.test(d);
                    f && (d = d.substr(1) || "*");
                    e = a[d] = a[d] || [];
                    e[f ? "unshift": "push"
                    ](c)
                }
        }
    }
    function Dc(a, c, d, e, f, g) {
        f = f || c.dataTypes[0];
        g = g || {};
        g[f]=!0;
        var i, j = a[f], k = 0, l = j ? j.length: 0, m = a === yc;
        for (; k < l && (m ||!i); k++) {
            i = j[k](c, d, e);
            if (typeof i == "string")
                if (!m || g[i])
                    i = b;
                else {
                    c.dataTypes.unshift(i);
                    i = Dc(a, c, d, e, i, g)
                }
            }(m ||!i)&&!g["*"] && (i = Dc(a
        , c, d, e, "*", g));
        return i
    }
    function Ec(a, c) {
        var d, e, f = q.ajaxSettings.flatOptions || {};
        for (d in c)
            c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        e && q.extend(!0, a, e)
    }
    function Fc(a, c, d) {
        var e, f, g, i, j = a.contents, k = a.dataTypes, l = a.responseFields;
        for (f in l)
            f in d && (c[l[f]] =
            d[f]);
        while (k[0] === "*") {
            k.shift();
            e === b && (e = a.mimeType || c.getResponseHeader("content-type"))
        }
        if (e)
            for (f in j)
                if (j[f] && j[f].test(e)) {
                    k.unshift(f);
                    break
                }
        if (k[0]in d)
            g = k[0];
        else {
            for (f in d) {
                if (!k[0] || a.converters[f + " " + k[0]]) {
                    g = f;
                    break
                }
                i || (i = f)
            }
            g = g || i
        }
        if (g) {
            g !==
            k[0] && k.unshift(g);
            return d[g]
        }
    }
    function Gc(a, b) {
        var c, d, e, f, g = a.dataTypes.slice(), i = g[0], j = {}, k = 0;
        a.dataFilter && (b = a.dataFilter(b, a.dataType));
        if (g[1])
            for (c in a.converters)
                j[c.toLowerCase()] = a.converters[c];
        for (; e = g[++k];)
            if (e !== "*") {
                if (i !== "*" && i !== e) {
                    c =
                    j[i + " " + e] || j["* " + e];
                    if (!c)
                        for (d in j) {
                            f = d.split(" ");
                            if (f[1] === e) {
                                c = j[i + " " + f[0]] || j["* " + f[0]];
                                if (c) {
                                    if (c===!0)
                                        c = j[d];
                                    else if (j[d]!==!0) {
                                        e = f[0];
                                        g.splice(k--, 0, e)
                                    }
                                    break
                                }
                            }
                        }
                        if (c!==!0)
                            if (c && a["throws"])
                                b = c(b);
                            else 
                                try {
                                    b = c(b)
                                } catch (l) {
                                    return {
                                        state: "parsererror"
                                        ,
                                        error: c ? l: "No conversion from " + i + " to " + e
                                    }
                                }
                            }
                            i = e
                }
        return {
            state: "success",
            data: b
        }
    }
    function Oc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function Pc() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    function Xc() {
        setTimeout(function() {
            Qc = b
        }, 0);
        return Qc = q.now()
    }
    function Yc(a, b) {
        q.each(b, function(b, c) {
            var d = (Wc[b] || []).concat(Wc["*"]), e = 0, f = d.length;
            for (; e < f; e++)
                if (d[e].call(a, b, c))
                    return 
        })
    }
    function Zc(a, b, c) {
        var d, e = 0, f = 0, g = Vc.length, i = q.Deferred().always(function() {
            delete j.elem
        }), j = function(
        ) {
            var b = Qc || Xc(), c = Math.max(0, k.startTime + k.duration - b), d = c / k.duration || 0, e = 1 - d, f = 0, g = k.tweens.length;
            for (; f < g; f++)
                k.tweens[f].run(e);
            i.notifyWith(a, [k, e, c]);
            if (e < 1 && g)
                return c;
            i.resolveWith(a, [k]);
            return !1
        }, k = i.promise({
            elem: a,
            props: q.extend({}, b),
            opts: q.
            extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Qc || Xc(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c, d) {
                var e = q.Tween(a, k.opts, b, c, k.opts.specialEasing[b] || k.opts.easing);
                k.tweens.push(e);
                return e
            },
            stop: function(
            b) {
                var c = 0, d = b ? k.tweens.length: 0;
                for (; c < d; c++)
                    k.tweens[c].run(1);
                b ? i.resolveWith(a, [k, b]) : i.rejectWith(a, [k, b]);
                return this
            }
        }), l = k.props;
        $c(l, k.opts.specialEasing);
        for (; e < g; e++) {
            d = Vc[e].call(k, a, l, k.opts);
            if (d)
                return d
        }
        Yc(k, l);
        q.isFunction(k.opts.start) && k
        .opts.start.call(a, k);
        q.fx.timer(q.extend(j, {
            anim: k,
            queue: k.opts.queue,
            elem: a
        }));
        return k.progress(k.opts.progress).done(k.opts.done, k.opts.complete).fail(k.opts.fail).always(k.opts.always)
    }
    function $c(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            d = q.camelCase(c);
            e = b[d]
            ;
            f = a[c];
            if (q.isArray(f)) {
                e = f[1];
                f = a[c] = f[0]
            }
            if (c !== d) {
                a[d] = f;
                delete a[c]
            }
            g = q.cssHooks[d];
            if (g && "expand"in g) {
                f = g.expand(f);
                delete a[d];
                for (c in f)
                    if (!(c in a)) {
                        a[c] = f[c];
                        b[c] = e
                    }
            } else 
                b[d] = e
        }
    }
    function _c(a, b, c) {
        var d, e, f, g, i, j, k, l, m, n = this, o = a.style, p = {}, r =
        [], s = a.nodeType && ac(a);
        if (!c.queue) {
            l = q._queueHooks(a, "fx");
            if (l.unqueued == null) {
                l.unqueued = 0;
                m = l.empty.fire;
                l.empty.fire = function() {
                    l.unqueued || m()
                }
            }
            l.unqueued++;
            n.always(function() {
                n.always(function() {
                    l.unqueued--;
                    q.queue(a, "fx").length || l.empty.fire()
                })
            })
        }
        if (a.nodeType === 1 && ("height"in b || "width"in b)) {
            c.overflow = [o.overflow, o.overflowX, o.overflowY];
            q.css(a, "display") === "inline" && q.css(a, "float") === "none" && (!q.support.inlineBlockNeedsLayout || fc(a.nodeName) === "inline" ? o.display = "inline-block" : o.zoom = 1)
        }
        if (
        c.overflow) {
            o.overflow = "hidden";
            q.support.shrinkWrapBlocks || n.done(function() {
                o.overflow = c.overflow[0];
                o.overflowX = c.overflow[1];
                o.overflowY = c.overflow[2]
            })
        }
        for (d in b) {
            f = b[d];
            if (Sc.exec(f)) {
                delete b[d];
                j = j || f === "toggle";
                if (f === (s ? "hide" : "show"))
                    continue;
                r
                .push(d)
            }
        }
        g = r.length;
        if (g) {
            i = q._data(a, "fxshow") || q._data(a, "fxshow", {});
            "hidden"in i && (s = i.hidden);
            j && (i.hidden=!s);
            s ? q(a).show() : n.done(function() {
                q(a).hide()
            });
            n.done(function() {
                var b;
                q.removeData(a, "fxshow", !0);
                for (b in p)
                    q.style(a, b, p[b])
            });
            for (d = 0; d <
            g; d++) {
                e = r[d];
                k = n.createTween(e, s ? i[e] : 0);
                p[e] = i[e] || q.style(a, e);
                if (!(e in i)) {
                    i[e] = k.start;
                    if (s) {
                        k.end = k.start;
                        k.start = e === "width" || e === "height" ? 1 : 0
                    }
                }
            }
        }
    }
    function ad(a, b, c, d, e) {
        return new ad.prototype.init(a, b, c, d, e)
    }
    function bd(a, b) {
        var c, d = {
            height: a
        }, e = 0
        ;
        b = b ? 1 : 0;
        for (; e < 4; e += 2 - b) {
            c = Yb[e];
            d["margin" + c] = d["padding" + c] = a
        }
        b && (d.opacity = d.width = a);
        return d
    }
    function dd(a) {
        return q.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    var c, d, e = a.document, f = a.location, g = a.navigator, i = a.jQuery, j = a.$, k = Array
    .prototype.push, l = Array.prototype.slice, m = Array.prototype.indexOf, n = Object.prototype.toString, o = Object.prototype.hasOwnProperty, p = String.prototype.trim, q = function(a, b) {
        return new q.fn.init(a, b, c)
    }, r = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, s = /\S/, t = /\s+/
    , u = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, v = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, x = /^[\],:{}\s]*$/, y = /(?:^|:|,)(?:\s*\[)+/g, z = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g
    , B = /^-ms-/, C = /-([\da-z])/gi, D = function(a, b) {
        return (b + "").toUpperCase()
    }, E = function() {
        if (e.addEventListener) {
            e.removeEventListener("DOMContentLoaded", E, !1);
            q.ready()
        } else if (e.readyState === "complete") {
            e.detachEvent("onreadystatechange", E);
            q.ready()
        }
    }, F = {};
    q
    .fn = q.prototype = {
        constructor: q,
        init: function(a, c, d) {
            var f, g, i, j;
            if (!a)
                return this;
            if (a.nodeType) {
                this.context = this[0] = a;
                this.length = 1;
                return this
            }
            if (typeof a == "string") {
                a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? f = [null, a, null] : f = v.exec(a);
                if (f && (f[1] ||!c)) {
                    if (f[1]) {
                        c = c instanceof q ? c[0] : c;
                        j = c && c.nodeType ? c.ownerDocument || c : e;
                        a = q.parseHTML(f[1], j, !0);
                        w.test(f[1]) && q.isPlainObject(c) && this.attr.call(a, c, !0);
                        return q.merge(this, a)
                    }
                    g = e.getElementById(f[2]);
                    if (g && g.parentNode) {
                        if (g.id !== f[2])
                            return d
                            .find(a);
                        this.length = 1;
                        this[0] = g
                    }
                    this.context = e;
                    this.selector = a;
                    return this
                }
                return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
            }
            if (q.isFunction(a))
                return d.ready(a);
            if (a.selector !== b) {
                this.selector = a.selector;
                this.context = a.context
            }
            return q.makeArray
            (a, this)
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return l.call(this)
        },
        get: function(a) {
            return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        },
        pushStack: function(a, b, c) {
            var d = q.merge(this.constructor
            (), a);
            d.prevObject = this;
            d.context = this.context;
            b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
            return d
        },
        each: function(a, b) {
            return q.each(this, a, b)
        },
        ready: function(a) {
            q.ready.promise().done(a);
            return this
        },
        eq: function(a) {
            a =+ a;
            return a===-1 ? this.slice(a) : this.slice(a, a + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
        },
        map: function(a
        ) {
            return this.pushStack(q.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: k,
        sort: [].sort,
        splice: [].splice
    };
    q.fn.init.prototype = q.fn;
    q.extend = q.fn.extend = function() {
        var a, c, d, e, f, g, i = arguments
        [0] || {}, j = 1, k = arguments.length, l=!1;
        if (typeof i == "boolean") {
            l = i;
            i = arguments[1] || {};
            j = 2
        }
        typeof i != "object"&&!q.isFunction(i) && (i = {});
        if (k === j) {
            i = this;
            --j
        }
        for (; j < k; j++)
            if ((a = arguments[j]) != null)
                for (c in a) {
                    d = i[c];
                    e = a[c];
                    if (i === e)
                        continue;
                        if (l && e && (q.isPlainObject
                        (e) || (f = q.isArray(e)))) {
                            if (f) {
                                f=!1;
                                g = d && q.isArray(d) ? d : []
                            } else 
                                g = d && q.isPlainObject(d) ? d : {};
                                i[c] = q.extend(l, g, e)
                            } else 
                                e !== b && (i[c] = e)
                    }
        return i
    };
    q.extend({
        noConflict: function(b) {
            a.$ === q && (a.$ = j);
            b && a.jQuery === q && (a.jQuery = i);
            return q
        },
        isReady: !1,
        readyWait: 1
        ,
        holdReady: function(a) {
            a ? q.readyWait++ : q.ready(!0)
        },
        ready: function(a) {
            if (a===!0?--q.readyWait : q.isReady)
                return;
            if (!e.body)
                return setTimeout(q.ready, 1);
            q.isReady=!0;
            if (a!==!0&&--q.readyWait > 0)
                return;
            d.resolveWith(e, [q]);
            q.fn.trigger && q(e).trigger("ready").off
            ("ready")
        },
        isFunction: function(a) {
            return q.type(a) === "function"
        },
        isArray: Array.isArray || function(a) {
            return q.type(a) === "array"
        },
        isWindow: function(a) {
            return a != null && a == a.window
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        type: function(
        a) {
            return a == null ? String(a) : F[n.call(a)] || "object"
        },
        isPlainObject: function(a) {
            if (!a || q.type(a) !== "object" || a.nodeType || q.isWindow(a))
                return !1;
            try {
                if (a.constructor&&!o.call(a, "constructor")&&!o.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
                    } catch (c)
            {
                return !1
            }
            var d;
            for (d in a);
            return d === b || o.call(a, d)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        error: function(a) {
            throw new Error(a)
        },
        parseHTML: function(a, b, c) {
            var d;
            if (!a || typeof a != "string")
                return null;
            if (typeof b == "boolean") {
                c = b;
                b = 0
            }
            b = b || e;
            if (d = w.exec(a))
                return [b.createElement(d[1])];
            d = q.buildFragment([a], b, c ? null : []);
            return q.merge([], (d.cacheable ? q.clone(d.fragment) : d.fragment).childNodes)
        },
        parseJSON: function(b) {
            if (!b || typeof b != "string")
                return null;
            b = q.trim(b);
            if (a.JSON && a.JSON.parse
            )
                return a.JSON.parse(b);
            if (x.test(b.replace(z, "@").replace(A, "]").replace(y, "")))
                return (new Function("return " + b))();
            q.error("Invalid JSON: " + b)
        },
        parseXML: function(c) {
            var d, e;
            if (!c || typeof c != "string")
                return null;
            try {
                if (a.DOMParser) {
                    e = new DOMParser;
                    d = e.parseFromString
                    (c, "text/xml")
                } else {
                    d = new ActiveXObject("Microsoft.XMLDOM");
                    d.async = "false";
                    d.loadXML(c)
                }
            } catch (f) {
                d = b
            }(!d ||!d.documentElement || d.getElementsByTagName("parsererror").length) && q.error("Invalid XML: " + c);
            return d
        },
        noop: function() {},
        globalEval: function(b) {
            b &&
            s.test(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(B, "ms-").replace(C, D)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, c, d) {
            var e, f = 0, g = a.length, i = g ===
            b || q.isFunction(a);
            if (d) {
                if (i) {
                    for (e in a)
                        if (c.apply(a[e], d)===!1)
                            break
                } else 
                    for (; f < g;)
                        if (c.apply(a[f++], d)===!1)
                            break
            } else if (i) {
                for (e in a)
                    if (c.call(a[e], e, a[e])===!1)
                        break
            } else 
                for (; f < g;)
                    if (c.call(a[f], f, a[f++])===!1)
                        break;
            return a
        },
        trim: p&&!p.call("﻿ "
        ) ? function(a) {
            return a == null ? "" : p.call(a)
        }
        : function(a) {
            return a == null ? "" : (a + "").replace(u, "")
        },
        makeArray: function(a, b) {
            var c, d = b || [];
            if (a != null) {
                c = q.type(a);
                a.length == null || c === "string" || c === "function" || c === "regexp" || q.isWindow(a) ? k.call(d, a) : q.merge(d, a)
            }
            return d
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (m)
                    return m.call(b, a, c);
                d = b.length;
                c = c ? c < 0 ? Math.max(0, d + c) : c : 0;
                for (; c < d; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return - 1
        },
        merge: function(a, c) {
            var d = c.length, e = a.length, f = 0;
            if (typeof d == "number")
                for (; f < d; f++)
                    a[e++] = c
                    [f];
            else 
                while (c[f] !== b)
                    a[e++] = c[f++];
            a.length = e;
            return a
        },
        grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length;
            c=!!c;
            for (; f < g; f++) {
                d=!!b(a[f], f);
                c !== d && e.push(a[f])
            }
            return e
        },
        map: function(a, c, d) {
            var e, f, g = [], i = 0, j = a.length, k = a instanceof q || j !== b && typeof j == "number" &&
            (j > 0 && a[0] && a[j - 1] || j === 0 || q.isArray(a));
            if (k)
                for (; i < j; i++) {
                    e = c(a[i], i, d);
                    e != null && (g[g.length] = e)
                } else 
                    for (f in a) {
                        e = c(a[f], f, d);
                        e != null && (g[g.length] = e)
                    }
            return g.concat.apply([], g)
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            if (typeof c == "string") {
                d = a[c];
                c = a;
                a =
                d
            }
            if (!q.isFunction(a))
                return b;
            e = l.call(arguments, 2);
            f = function() {
                return a.apply(c, e.concat(l.call(arguments)))
            };
            f.guid = a.guid = a.guid || q.guid++;
            return f
        },
        access: function(a, c, d, e, f, g, i) {
            var j, k = d == null, l = 0, m = a.length;
            if (d && typeof d == "object") {
                for (l in d)
                    q.access
                    (a, c, l, d[l], 1, g, e);
                f = 1
            } else if (e !== b) {
                j = i === b && q.isFunction(e);
                if (k)
                    if (j) {
                        j = c;
                        c = function(a, b, c) {
                            return j.call(q(a), c)
                        }
                    } else {
                        c.call(a, e);
                        c = null
                    }
                if (c)
                    for (; l < m; l++)
                        c(a[l], d, j ? e.call(a[l], l, c(a[l], d)) : e, i);
                f = 1
            }
            return f ? a : k ? c.call(a) : m ? c(a[0], d) : g
        },
        now: function(
        ) {
            return (new Date).getTime()
        }
    });
    q.ready.promise = function(b) {
        if (!d) {
            d = q.Deferred();
            if (e.readyState === "complete")
                setTimeout(q.ready, 1);
            else if (e.addEventListener) {
                e.addEventListener("DOMContentLoaded", E, !1);
                a.addEventListener("load", q.ready, !1)
            } else {
                e.attachEvent
                ("onreadystatechange", E);
                a.attachEvent("onload", q.ready);
                var c=!1;
                try {
                    c = a.frameElement == null && e.documentElement
                } catch (f) {}
                c && c.doScroll && function g() {
                    if (!q.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(g, 50)
                        }
                        q.ready()
                    }
                }()
            }
        }
        return d.promise(b)
    };
    q.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
        F["[object " + b + "]"] = b.toLowerCase()
    });
    c = q(e);
    var G = {};
    q.Callbacks = function(a) {
        a = typeof a == "string" ? G[a] || H(a) : q.extend({}, a);
        var c, d, e, f, g, i, j = [], k=!a.once && [], l = function(
        b) {
            c = a.memory && b;
            d=!0;
            i = f || 0;
            f = 0;
            g = j.length;
            e=!0;
            for (; j && i < g; i++)
                if (j[i].apply(b[0], b[1])===!1 && a.stopOnFalse) {
                    c=!1;
                    break
                }
            e=!1;
            j && (k ? k.length && l(k.shift()) : c ? j = [] : m.disable())
        }, m = {
            add: function() {
                if (j) {
                    var b = j.length;
                    (function d(b) {
                        q.each(b, function(_, b) {
                            var c =
                            q.type(b);
                            c === "function" ? (!a.unique ||!m.has(b)) && j.push(b) : b && b.length && c !== "string" && d(b)
                        })
                    })(arguments);
                    if (e)
                        g = j.length;
                    else if (c) {
                        f = b;
                        l(c)
                    }
                }
                return this
            },
            remove: function() {
                j && q.each(arguments, function(_, a) {
                    var b;
                    while ((b = q.inArray(a, j, b))>-1) {
                        j.splice(b, 1
                        );
                        if (e) {
                            b <= g && g--;
                            b <= i && i--
                        }
                    }
                });
                return this
            },
            has: function(a) {
                return q.inArray(a, j)>-1
            },
            empty: function() {
                j = [];
                return this
            },
            disable: function() {
                j = k = c = b;
                return this
            },
            disabled: function() {
                return !j
            },
            lock: function() {
                k = b;
                c || m.disable();
                return this
            },
            locked: function(
            ) {
                return !k
            },
            fireWith: function(a, b) {
                b = b || [];
                b = [a, b.slice ? b.slice(): b];
                j && (!d || k) && (e ? k.push(b) : l(b));
                return this
            },
            fire: function() {
                m.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !!d
            }
        };
        return m
    };
    q.extend({
        Deferred: function(a) {
            var b = [["resolve"
            , "done", q.Callbacks("once memory"), "resolved"], ["reject", "fail", q.Callbacks("once memory"), "rejected"], ["notify", "progress", q.Callbacks("memory")]], c = "pending", d = {
                state: function() {
                    return c
                },
                always: function() {
                    e.done(arguments).fail(arguments);
                    return this
                },
                then
                : function() {
                    var a = arguments;
                    return q.Deferred(function(c) {
                        q.each(b, function(b, d) {
                            var f = d[0], g = a[b];
                            e[d[1]](q.isFunction(g) ? function() {
                                var a = g.apply(this, arguments);
                                a && q.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"
                                ](this === e ? c : this, [a])
                            } : c[f])
                        });
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return a != null ? q.extend(a, d) : d
                }
            }, e = {};
            d.pipe = d.then;
            q.each(b, function(a, f) {
                var g = f[2], i = f[3];
                d[f[1]] = g.add;
                i && g.add(function() {
                    c = i
                }, b[a^1][2].disable, b[2][2].lock);
                e[f[0]] = g.fire;
                e[f[0
                ] + "With"] = g.fireWith
            });
            d.promise(e);
            a && a.call(e, e);
            return e
        },
        when: function(a) {
            var b = 0, c = l.call(arguments), d = c.length, e = d !== 1 || a && q.isFunction(a.promise) ? d: 0, f = e === 1 ? a: q.Deferred(), g = function(a, b, c) {
                return function(d) {
                    b[a] = this;
                    c[a] = arguments.length > 1 ? l.call
                    (arguments) : d;
                    c === i ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                }
            }, i, j, k;
            if (d > 1) {
                i = new Array(d);
                j = new Array(d);
                k = new Array(d);
                for (; b < d; b++)
                    c[b] && q.isFunction(c[b].promise) ? c[b].promise().done(g(b, k, c)).fail(f.reject).progress(g(b, j, i)) : --e
            }
            e || f.resolveWith(k,
            c);
            return f.promise()
        }
    });
    q.support = function() {
        var b, c, d, f, g, i, j, k, l, m, n, o = e.createElement("div");
        o.setAttribute("className", "t");
        o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        c = o.getElementsByTagName("*");
        d = o.getElementsByTagName
        ("a")[0];
        if (!c ||!d ||!c.length)
            return {};
        f = e.createElement("select");
        g = f.appendChild(e.createElement("option"));
        i = o.getElementsByTagName("input")[0];
        d.style.cssText = "top:1px;float:left;opacity:.5";
        b = {
            leadingWhitespace: o.firstChild.nodeType === 3,
            tbody: !o.getElementsByTagName
            ("tbody").length,
            htmlSerialize: !!o.getElementsByTagName("link").length,
            style: /top/.test(d.getAttribute("style")),
            hrefNormalized: d.getAttribute("href") === "/a",
            opacity: /^0.5/.test(d.style.opacity),
            cssFloat: !!d.style.cssFloat,
            checkOn: i.value === "on",
            optSelected
            : g.selected,
            getSetAttribute: o.className !== "t",
            enctype: !!e.createElement("form").enctype,
            html5Clone: e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: e.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando
            : !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        i.checked=!0;
        b.noCloneChecked = i.cloneNode(!0).checked;
        f.disabled=!0;
        b.optDisabled=!g.disabled;
        try {
            delete o.test
        } catch (p) {
            b.deleteExpando=!1
        }
        if (!o.addEventListener && o.attachEvent && o.fireEvent) {
            o.attachEvent("onclick", n = function() {
                b.noCloneEvent=!1
            });
            o.cloneNode(!0).fireEvent("onclick");
            o.detachEvent("onclick", n)
        }
        i = e.createElement("input");
        i.value = "t";
        i.setAttribute("type", "radio");
        b.radioValue =
        i.value === "t";
        i.setAttribute("checked", "checked");
        i.setAttribute("name", "t");
        o.appendChild(i);
        j = e.createDocumentFragment();
        j.appendChild(o.lastChild);
        b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked;
        b.appendChecked = i.checked;
        j.removeChild(i);
        j.
        appendChild(o);
        if (o.attachEvent)
            for (l in{
                submit: !0,
                change: !0,
                focusin: !0
            }) {
                k = "on" + l;
                m = k in o;
                if (!m) {
                    o.setAttribute(k, "return;");
                    m = typeof o[k] == "function"
                }
                b[l + "Bubbles"] = m
            }
        q(function() {
            var c, d, f, g, i = "padding:0;margin:0;border:0;display:block;overflow:hidden;"
            , j = e.getElementsByTagName("body")[0];
            if (!j)
                return;
            c = e.createElement("div");
            c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
            j.insertBefore(c, j.firstChild);
            d = e.createElement("div");
            c.appendChild(d);
            d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"
            ;
            f = d.getElementsByTagName("td");
            f[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            m = f[0].offsetHeight === 0;
            f[0].style.display = "";
            f[1].style.display = "none";
            b.reliableHiddenOffsets = m && f[0].offsetHeight === 0;
            d.innerHTML = "";
            d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"
            ;
            b.boxSizing = d.offsetWidth === 4;
            b.doesNotIncludeMarginInBodyOffset = j.offsetTop !== 1;
            if (a.getComputedStyle) {
                b.pixelPosition = (a.getComputedStyle(d, null) || {}).top !== "1%";
                b.boxSizingReliable = (a.getComputedStyle(d, null) || {
                    width: "4px"
                }).width === "4px";
                g = e.createElement
                ("div");
                g.style.cssText = d.style.cssText = i;
                g.style.marginRight = g.style.width = "0";
                d.style.width = "1px";
                d.appendChild(g);
                b.reliableMarginRight=!parseFloat((a.getComputedStyle(g, null) || {}).marginRight)
            }
            if (typeof d.style.zoom != "undefined") {
                d.innerHTML = "";
                d.style
                .cssText = i + "width:1px;padding:1px;display:inline;zoom:1";
                b.inlineBlockNeedsLayout = d.offsetWidth === 3;
                d.style.display = "block";
                d.style.overflow = "visible";
                d.innerHTML = "<div></div>";
                d.firstChild.style.width = "5px";
                b.shrinkWrapBlocks = d.offsetWidth !== 3;
                c.style.zoom = 1
            }
            j.removeChild(c);
            c = d = f = g = null
        });
        j.removeChild(o);
        c = d = f = g = i = j = o = null;
        return b
    }();
    var I = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, J = /([A-Z])/g;
    q.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (q.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object
            : "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? q.cache[a[q.expando]] : a[q.expando];
            return !!a&&!L(a)
        },
        data: function(a, c, d, e) {
            if (!q.acceptData(a))
                return;
            var f, g, i = q.expando, j = typeof c == "string", k = a.nodeType, l = k ? q.cache
            : a, m = k ? a[i]: a[i] && i;
            if ((!m ||!l[m] ||!e&&!l[m].data) && j && d === b)
                return;
            m || (k ? a[i] = m = q.deletedIds.pop() || q.guid++ : m = i);
            if (!l[m]) {
                l[m] = {};
                k || (l[m].toJSON = q.noop)
            }
            if (typeof c == "object" || typeof c == "function")
                e ? l[m] = q.extend(l[m], c) : l[m].data = q.extend(l[m].data, c)
                ;
            f = l[m];
            if (!e) {
                f.data || (f.data = {});
                f = f.data
            }
            d !== b && (f[q.camelCase(c)] = d);
            if (j) {
                g = f[c];
                g == null && (g = f[q.camelCase(c)])
            } else 
                g = f;
            return g
        },
        removeData: function(a, b, c) {
            if (!q.acceptData(a))
                return;
            var d, e, f, g = a.nodeType, i = g ? q.cache: a, j = g ? a[q.expando]: q.expando;
            if (!
            i[j])
                return;
            if (b) {
                d = c ? i[j] : i[j].data;
                if (d) {
                    if (!q.isArray(b))
                        if (b in d)
                            b = [b];
                        else {
                            b = q.camelCase(b);
                            b in d ? b = [b] : b = b.split(" ")
                        }
                    for (e = 0, f = b.length; e < f; e++)
                        delete d[b[e]];
                    if (!(c ? L : q.isEmptyObject)(d))
                        return 
                    }
            }
            if (!c) {
                delete i[j].data;
                if (!L(i[j]))
                    return 
            }
            g ? q.cleanData
            ([a], !0) : q.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null
        },
        _data: function(a, b, c) {
            return q.data(a, b, c, !0)
        },
        acceptData: function(a) {
            var b = a.nodeName && q.noData[a.nodeName.toLowerCase()];
            return !b || b!==!0 && a.getAttribute("classid") === b
        }
    });
    q.fn.extend({
        data: function(a, c) {
            var d, e, f, g, i, j = this[0], k = 0, l = null;
            if (a === b) {
                if (this.length) {
                    l = q.data(j);
                    if (j.nodeType === 1&&!q._data(j, "parsedAttrs")) {
                        f = j.attributes;
                        for (i = f.length; k < i; k++) {
                            g = f[k].name;
                            if (!g.indexOf("data-")) {
                                g = q.camelCase(g.substring(5));
                                K(j, g, l[g])
                            }
                        }
                        q._data(j, "parsedAttrs", !0)
                    }
                }
                return l
            }
            if (typeof a == "object")
                return this.each(function() {
                    q.data(this, a)
                });
            d = a.split(".", 2);
            d[1] = d[1] ? "." + d[1] : "";
            e = d[1] + "!";
            return q.access(this, function(c) {
                if (c === b) {
                    l = this.triggerHandler("getData" + e, [d[0]]);
                    if (l === b && j) {
                        l = q
                        .data(j, a);
                        l = K(j, a, l)
                    }
                    return l === b && d[1] ? this.data(d[0]) : l
                }
                d[1] = c;
                this.each(function() {
                    var b = q(this);
                    b.triggerHandler("setData" + e, d);
                    q.data(this, a, c);
                    b.triggerHandler("changeData" + e, d)
                })
            }, null, c, arguments.length > 1, null, !1)
        },
        removeData: function(a) {
            return this
            .each(function() {
                q.removeData(this, a)
            })
        }
    });
    q.extend({
        queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue";
                d = q._data(a, b);
                c && (!d || q.isArray(c) ? d = q._data(a, b, q.makeArray(c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = q.queue(a, b), d = c.length
            , e = c.shift(), f = q._queueHooks(a, b), g = function() {
                q.dequeue(a, b)
            };
            if (e === "inprogress") {
                e = c.shift();
                d--
            }
            if (e) {
                b === "fx" && c.unshift("inprogress");
                delete f.stop;
                e.call(a, g, f)
            }
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return q._data(a, c
            ) || q._data(a, c, {
                empty: q.Callbacks("once memory").add(function() {
                    q.removeData(a, b + "queue", !0);
                    q.removeData(a, c, !0)
                })
            })
        }
    });
    q.fn.extend({
        queue: function(a, c) {
            var d = 2;
            if (typeof a != "string") {
                c = a;
                a = "fx";
                d--
            }
            return arguments.length < d ? q.queue(this[0], a) : c === b ? this :
            this.each(function() {
                var b = q.queue(this, a, c);
                q._queueHooks(this, a);
                a === "fx" && b[0] !== "inprogress" && q.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                q.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = q.fx ? q.fx.speeds[a] || a : a;
            b = b || "fx";
            return this
            .queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1, f = q.Deferred(), g = this, i = this.length, j = function() {
                --e || f.resolveWith(g, [g])
            };
            if (typeof a != "string"
            ) {
                c = a;
                a = b
            }
            a = a || "fx";
            while (i--) {
                d = q._data(g[i], a + "queueHooks");
                if (d && d.empty) {
                    e++;
                    d.empty.add(j)
                }
            }
            j();
            return f.promise(c)
        }
    });
    var M, N, O, P = /[\t\r\n]/g, Q = /\r/g, R = /^(?:button|input)$/i, S = /^(?:button|input|object|select|textarea)$/i, T = /^a(?:rea|)$/i, U = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
    , V = q.support.getSetAttribute;
    q.fn.extend({
        attr: function(a, b) {
            return q.access(this, q.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                q.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return q.access(this, q.prop, a, b, arguments.length > 1
            )
        },
        removeProp: function(a) {
            a = q.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = b;
                    delete this[a]
                } catch (c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g, i;
            if (q.isFunction(a))
                return this.each(function(b) {
                    q(this).addClass(a.call(this, b, this.className))
                });
            if (a && typeof 
            a == "string") {
                b = a.split(t);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1)
                            e.className = a;
                        else {
                            f = " " + e.className + " ";
                            for (g = 0, i = b.length; g < i; g++)
                                f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
                                e.className = q.trim(f)
                            }
                    }
            }
            return this
        },
        removeClass: function(a) {
            var c, d, e, f, g, i, j;
            if (q.isFunction(a))
                return this.each(function(b) {
                    q(this).removeClass(a.call(this, b, this.className))
                });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(t);
                for (i = 0, j = this.length; i < j; i++) {
                    e = this[i];
                    if (e.nodeType === 1 &&
                    e.className) {
                        d = (" " + e.className + " ").replace(P, " ");
                        for (f = 0, g = c.length; f < g; f++)
                            while (d.indexOf(" " + c[f] + " ") >= 0)
                                d = d.replace(" " + c[f] + " ", " ");
                        e.className = a ? q.trim(d) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a, d = typeof b == "boolean";
            return q.
            isFunction(a) ? this.each(function(c) {
                q(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if (c === "string") {
                    var e, f = 0, g = q(this), i = b, j = a.split(t);
                    while (e = j[f++]) {
                        i = d ? i : !g.hasClass(e);
                        g[i ? "addClass": "removeClass"](e)
                    }
                } else if (c === "undefined" ||
                c === "boolean") {
                    this.className && q._data(this, "__className__", this.className);
                    this.className = this.className || a===!1 ? "" : q._data(this, "__className__") || ""
                }
            })
        },
        hasClass: function(a) {
            var b = " " + a + " ", c = 0, d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this
                [c].className + " ").replace(P, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            if (!arguments.length) {
                if (f) {
                    c = q.valHooks[f.type] || q.valHooks[f.nodeName.toLowerCase()];
                    if (c && "get"in c && (d = c.get(f, "value")) !== b)
                        return d;
                    d = f.value;
                    return typeof 
                    d == "string" ? d.replace(Q, "") : d == null ? "" : d
                }
                return 
            }
            e = q.isFunction(a);
            return this.each(function(d) {
                var f, g = q(this);
                if (this.nodeType !== 1)
                    return;
                e ? f = a.call(this, d, g.val()) : f = a;
                f == null ? f = "" : typeof f == "number" ? f += "" : q.isArray(f) && (f = q.map(f, function(a) {
                    return a == null ? ""
                    : a + ""
                }));
                c = q.valHooks[this.type] || q.valHooks[this.nodeName.toLowerCase()];
                if (!c ||!("set"in c) || c.set(this, f, "value") === b)
                    this.value = f
            })
        }
    });
    q.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get
                : function(a) {
                    var b, c, d = a.options, e = a.selectedIndex, f = a.type === "select-one" || e < 0, g = f ? null: [], i = f ? e + 1: d.length, j = e < 0 ? i: f ? e: 0;
                    for (; j < i; j++) {
                        c = d[j];
                        if ((c.selected || j === e) && (q.support.optDisabled?!c.disabled : c.getAttribute("disabled") === null) && (!c.parentNode.disabled ||!
                        q.nodeName(c.parentNode, "optgroup"))
                            ) {
                            b = q(c).val();
                            if (f)
                                return b;
                            g.push(b)
                        }
                    }
                    return g
                },
                set: function(a, b) {
                    var c = q.makeArray(b);
                    q(a).find("option").each(function() {
                        this.selected = q.inArray(q(this).val(), c) >= 0
                    });
                    c.length || (a.selectedIndex =- 1);
                    return c
                }
            }
        },
        attrFn
        : {},
        attr: function(a, c, d, e) {
            var f, g, i, j = a.nodeType;
            if (!a || j === 3 || j === 8 || j === 2)
                return;
            if (e && q.isFunction(q.fn[c]))
                return q(a)[c](d);
            if (typeof a.getAttribute == "undefined")
                return q.prop(a, c, d);
            i = j !== 1 ||!q.isXMLDoc(a);
            if (i) {
                c = c.toLowerCase();
                g = q.attrHooks[c] || (
                U.test(c) ? N : M)
            }
            if (d !== b) {
                if (d === null) {
                    q.removeAttr(a, c);
                    return 
                }
                if (g && "set"in g && i && (f = g.set(a, d, c)) !== b)
                    return f;
                a.setAttribute(c, d + "");
                return d
            }
            if (g && "get"in g && i && (f = g.get(a, c)) !== null)
                return f;
            f = a.getAttribute(c);
            return f === null ? b : f
        },
        removeAttr: function(
        a, b) {
            var c, d, e, f, g = 0;
            if (b && a.nodeType === 1) {
                d = b.split(t);
                for (; g < d.length; g++) {
                    e = d[g];
                    if (e) {
                        c = q.propFix[e] || e;
                        f = U.test(e);
                        f || q.attr(a, e, "");
                        a.removeAttribute(V ? e : c);
                        f && c in a && (a[c]=!1)
                    }
                }
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (R.test(a.nodeName) && a.parentNode
                    )
                        q.error("type property can't be changed");
                    else if (!q.support.radioValue && b === "radio" && q.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b);
                        c && (a.value = c);
                        return b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    return M && q.nodeName(a, "button") ? M.get(a, b) : b in a ? a.value
                    : null
                },
                set: function(a, b, c) {
                    if (M && q.nodeName(a, "button"))
                        return M.set(a, b, c);
                    a.value = b
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
            rowspan: "rowSpan"
            ,
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, f, g, i = a.nodeType;
            if (!a || i === 3 || i === 8 || i === 2)
                return;
            g = i !== 1 ||!q.isXMLDoc(a);
            if (g) {
                c = q.propFix[c] || c;
                f = q.propHooks[c]
            }
            return d !== b ? f && "set"in 
            f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get"in f && (e = f.get(a, c)) !== null ? e : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : S.test(a.nodeName) || T.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    });
    N = {
        get
        : function(a, c) {
            var d, e = q.prop(a, c);
            return e===!0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue!==!1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            if (b===!1)
                q.removeAttr(a, c);
            else {
                d = q.propFix[c] || c;
                d in a && (a[d]=!0);
                a.setAttribute(c, c.toLowerCase
                ())
            }
            return c
        }
    };
    if (!V) {
        O = {
            name: !0,
            id: !0,
            coords: !0
        };
        M = q.valHooks.button = {
            get: function(a, c) {
                var d;
                d = a.getAttributeNode(c);
                return d && (O[c] ? d.value !== "" : d.specified) ? d.value : b
            },
            set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                if (!d) {
                    d = e.createAttribute(c);
                    a.setAttributeNode
                    (d)
                }
                return d.value = b + ""
            }
        };
        q.each(["width", "height"], function(a, b) {
            q.attrHooks[b] = q.extend(q.attrHooks[b], {
                set: function(a, c) {
                    if (c === "") {
                        a.setAttribute(b, "auto");
                        return c
                    }
                }
            })
        });
        q.attrHooks.contenteditable = {
            get: M.get,
            set: function(a, b, c) {
                b === "" && (b = "false");
                M.
                set(a, b, c)
            }
        }
    }
    q.support.hrefNormalized || q.each(["href", "src", "width", "height"], function(a, c) {
        q.attrHooks[c] = q.extend(q.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    });
    q.support.style || (q.attrHooks.style = {
        get: function(a) {
            return a
            .style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    q.support.optSelected || (q.propHooks.selected = q.extend(q.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            if (b) {
                b.selectedIndex;
                b.parentNode && b.parentNode.selectedIndex
            }
            return null
        }
    }));
    q.support.enctype || (q.propFix.enctype = "encoding");
    q.support.checkOn || q.each(["radio", "checkbox"], function() {
        q.valHooks[this] = {
            get: function(a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    });
    q.each(["radio", "checkbox"], function() {
        q.valHooks
        [this] = q.extend(q.valHooks[this], {
            set: function(a, b) {
                if (q.isArray(b))
                    return a.checked = q.inArray(q(a).val(), b) >= 0
            }
        })
    });
    var W = /^(?:textarea|input|select)$/i, X = /^([^\.]*|)(?:\.(.+)|)$/, Y = /(?:^|\s)hover(\.\S+|)\b/, Z = /^key/, ab = /^(?:mouse|contextmenu)|click/, bb = /^(?:focusinfocus|focusoutblur)$/
    , cb = function(a) {
        return q.event.special.hover ? a : a.replace(Y, "mouseenter$1 mouseleave$1")
    };
    q.event = {
        add: function(a, c, d, e, f) {
            var g, i, j, k, l, m, n, o, p, r, s;
            if (a.nodeType === 3 || a.nodeType === 8 ||!c ||!d ||!(g = q._data(a)))
                return;
            if (d.handler) {
                p = d;
                d = p.handler;
                f = p.selector
            }
            d.guid || (d.guid = q.guid++);
            j = g.events;
            j || (g.events = j = {});
            i = g.handle;
            if (!i) {
                g.handle = i = function(a) {
                    return typeof q == "undefined"||!!a && q.event.triggered === a.type ? b : q.event.dispatch.apply(i.elem, arguments)
                };
                i.elem = a
            }
            c = q.trim(cb(c)).split(" ");
            for (k = 0; k < c.length
            ; k++) {
                l = X.exec(c[k]) || [];
                m = l[1];
                n = (l[2] || "").split(".").sort();
                s = q.event.special[m] || {};
                m = (f ? s.delegateType : s.bindType) || m;
                s = q.event.special[m] || {};
                o = q.extend({
                    type: m,
                    origType: l[1],
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && q.expr.match.needsContext
                    .test(f),
                    namespace: n.join(".")
                }, p);
                r = j[m];
                if (!r) {
                    r = j[m] = [];
                    r.delegateCount = 0;
                    if (!s.setup || s.setup.call(a, e, n, i)===!1)
                        a.addEventListener ? a.addEventListener(m, i, !1) : a.attachEvent && a.attachEvent("on" + m, i)
                    }
                if (s.add) {
                    s.add.call(a, o);
                    o.handler.guid || (o.handler.guid =
                    d.guid)
                }
                f ? r.splice(r.delegateCount++, 0, o) : r.push(o);
                q.event.global[m]=!0
            }
            a = null
        },
        global: {},
        remove: function(a, b, c, d, e) {
            var f, g, i, j, k, l, m, n, o, p, r, s = q.hasData(a) && q._data(a);
            if (!s ||!(n = s.events))
                return;
            b = q.trim(cb(b || "")).split(" ");
            for (f = 0; f < b.length; f++) {
                g =
                X.exec(b[f]) || [];
                i = j = g[1];
                k = g[2];
                if (!i) {
                    for (i in n)
                        q.event.remove(a, i + b[f], c, d, !0);
                    continue
                }
                o = q.event.special[i] || {};
                i = (d ? o.delegateType : o.bindType) || i;
                p = n[i] || [];
                l = p.length;
                k = k ? new RegExp("(^|\\.)" + k.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null
                ;
                for (m = 0; m < p.length; m++) {
                    r = p[m];
                    if ((e || j === r.origType) && (!c || c.guid === r.guid) && (!k || k.test(r.namespace)) && (!d || d === r.selector || d === "**" && r.selector)) {
                        p.splice(m--, 1);
                        r.selector && p.delegateCount--;
                        o.remove && o.remove.call(a, r)
                    }
                }
                if (p.length === 0 && l !== p.length)
                {
                    (!o.teardown || o.teardown.call(a, k, s.handle)===!1) && q.removeEvent(a, i, s.handle);
                    delete n[i]
                }
            }
            if (q.isEmptyObject(n)) {
                delete s.handle;
                q.removeData(a, "events", !0)
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, f, g) {
            if (!f || f.nodeType !== 3 &&
            f.nodeType !== 8) {
                var i, j, k, l, m, n, o, p, r, s, t = c.type || c, u = [];
                if (bb.test(t + q.event.triggered))
                    return;
                if (t.indexOf("!") >= 0) {
                    t = t.slice(0, - 1);
                    j=!0
                }
                if (t.indexOf(".") >= 0) {
                    u = t.split(".");
                    t = u.shift();
                    u.sort()
                }
                if ((!f || q.event.customEvent[t])&&!q.event.global[t])
                    return;
                c = typeof c == "object" ? c[q.expando] ? c : new q.Event(t, c) : new q.Event(t);
                c.type = t;
                c.isTrigger=!0;
                c.exclusive = j;
                c.namespace = u.join(".");
                c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                n = t.indexOf(":") < 0 ? "on" + t : "";
                if (!f) {
                    i =
                    q.cache;
                    for (k in i)
                        i[k].events && i[k].events[t] && q.event.trigger(c, d, i[k].handle.elem, !0);
                    return 
                }
                c.result = b;
                c.target || (c.target = f);
                d = d != null ? q.makeArray(d) : [];
                d.unshift(c);
                o = q.event.special[t] || {};
                if (o.trigger && o.trigger.apply(f, d)===!1)
                    return;
                r = [[f, o.bindType ||
                t]];
                if (!g&&!o.noBubble&&!q.isWindow(f)) {
                    s = o.delegateType || t;
                    l = bb.test(s + t) ? f : f.parentNode;
                    for (m = f; l; l = l.parentNode) {
                        r.push([l, s]);
                        m = l
                    }
                    m === (f.ownerDocument || e) && r.push([m.defaultView || m.parentWindow || a, s])
                }
                for (k = 0; k < r.length&&!c.isPropagationStopped(); k++) {
                    l = r[k][0];
                    c.type = r[k][1];
                    p = (q._data(l, "events") || {})[c.type] && q._data(l, "handle");
                    p && p.apply(l, d);
                    p = n && l[n];
                    p && q.acceptData(l) && p.apply && p.apply(l, d)===!1 && c.preventDefault()
                }
                c.type = t;
                if (!g&&!c.isDefaultPrevented() && (!o._default || o._default.apply(f.ownerDocument
                , d)===!1) && (t !== "click" ||!q.nodeName(f, "a")) && q.acceptData(f) && n && f[t] && (t !== "focus" && t !== "blur" || c.target.offsetWidth !== 0)&&!q.isWindow(f)) {
                    m = f[n];
                    m && (f[n] = null);
                    q.event.triggered = t;
                    f[t]();
                    q.event.triggered = b;
                    m && (f[n] = m)
                }
                return c.result
            }
            return 
        },
        dispatch: function(
        c) {
            c = q.event.fix(c || a.event);
            var d, e, f, g, i, j, k, m, n, o, p = (q._data(this, "events") || {})[c.type] || [], r = p.delegateCount, s = l.call(arguments), t=!c.exclusive&&!c.namespace, u = q.event.special[c.type] || {}, v = [];
            s[0] = c;
            c.delegateTarget = this;
            if (u.preDispatch && u.preDispatch
            .call(this, c)===!1)
                return;
            if (r && (!c.button || c.type !== "click"))
                for (f = c.target; f != this; f = f.parentNode || this)
                    if (f.disabled!==!0 || c.type !== "click") {
                        i = {};
                        k = [];
                        for (d = 0; d < r; d++) {
                            m = p[d];
                            n = m.selector;
                            i[n] === b && (i[n] = m.needsContext ? q(n, this).index(f) >= 0 : q.find(n, this
                            , null, [f]).length);
                            i[n] && k.push(m)
                        }
                        k.length && v.push({
                            elem: f,
                            matches: k
                        })
                    }
            p.length > r && v.push({
                elem: this,
                matches: p.slice(r)
            });
            for (d = 0; d < v.length&&!c.isPropagationStopped(); d++) {
                j = v[d];
                c.currentTarget = j.elem;
                for (e = 0; e < j.matches.length&&!c.isImmediatePropagationStopped
                (); e++) {
                    m = j.matches[e];
                    if (t ||!c.namespace&&!m.namespace || c.namespace_re && c.namespace_re.test(m.namespace)) {
                        c.data = m.data;
                        c.handleObj = m;
                        g = ((q.event.special[m.origType] || {}).handle || m.handler).apply(j.elem, s);
                        if (g !== b) {
                            c.result = g;
                            if (g===!1) {
                                c.preventDefault(
                                );
                                c.stopPropagation()
                            }
                        }
                    }
                }
            }
            u.postDispatch && u.postDispatch.call(this, c);
            return c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".
        split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
            .split(" "),
            filter: function(a, c) {
                var d, f, g, i = c.button, j = c.fromElement;
                if (a.pageX == null && c.clientX != null) {
                    d = a.target.ownerDocument || e;
                    f = d.documentElement;
                    g = d.body;
                    a.pageX = c.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0);
                    a.pageY = c.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)
                }
                !a.relatedTarget && j && (a.relatedTarget = j === a.target ? c.toElement : j);
                !a.which && i !== b && (a.which = i & 1 ? 1 : i & 2 ? 3 : i & 4 ? 2 : 0);
                return a
            }
        },
        fix: function(a) {
            if (a[q.expando])
                return a;
            var b
            , c, d = a, f = q.event.fixHooks[a.type] || {}, g = f.props ? this.props.concat(f.props): this.props;
            a = q.Event(d);
            for (b = g.length; b;) {
                c = g[--b];
                a[c] = d[c]
            }
            a.target || (a.target = d.srcElement || e);
            a.target.nodeType === 3 && (a.target = a.target.parentNode);
            a.metaKey=!!a.metaKey;
            return f
            .filter ? f.filter(a, d) : a
        },
        special: {
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
                setup: function(a, b, c) {
                    q.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload =
                    null)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = q.extend(new q.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? q.event.trigger(e, null, b) : q.event.dispatch.call(b, e);
            e.isDefaultPrevented() && c.preventDefault()
        }
    };
    q.event.handle = q.event.dispatch;
    q.removeEvent = e.removeEventListener ?
    function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function(a, b, c) {
        var d = "on" + b;
        if (a.detachEvent) {
            typeof a[d] == "undefined" && (a[d] = null);
            a.detachEvent(d, c)
        }
    };
    q.Event = function(a, b) {
        if (!(this instanceof q.Event))
            return new q.Event(a, b);
        if (a &&
        a.type) {
            this.originalEvent = a;
            this.type = a.type;
            this.isDefaultPrevented = a.defaultPrevented || a.returnValue===!1 || a.getPreventDefault && a.getPreventDefault() ? eb : db
        } else 
            this.type = a;
        b && q.extend(this, b);
        this.timeStamp = a && a.timeStamp || q.now();
        this[q.expando]=!0
    };
    q
    .Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = eb;
            var a = this.originalEvent;
            if (!a)
                return;
            a.preventDefault ? a.preventDefault() : a.returnValue=!1
        },
        stopPropagation: function() {
            this.isPropagationStopped = eb;
            var a = this.originalEvent;
            if (!a)
                return;
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble=!0
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = eb;
            this.stopPropagation()
        },
        isDefaultPrevented: db,
        isPropagationStopped: db,
        isImmediatePropagationStopped: db
    };
    q.each({
        mouseenter: "mouseover"
        ,
        mouseleave: "mouseout"
    }, function(a, b) {
        q.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj, g = f.selector;
                if (!e || e !== d&&!q.contains(d, e)) {
                    a.type = f.origType;
                    c = f.handler.apply(this, arguments);
                    a.type = b
                }
                return c
            }
        }
    });
    q.support.submitBubbles || (q.event.special.submit = {
        setup: function() {
            if (q.nodeName(this, "form"))
                return !1;
            q.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target, d = q.nodeName(c, "input") || q.nodeName(c, "button") ? c.form: b;
                if (d&&!q._data
                (d, "_submit_attached")) {
                    q.event.add(d, "submit._submit", function(a) {
                        a._submit_bubble=!0
                    });
                    q._data(d, "_submit_attached", !0)
                }
            })
        },
        postDispatch: function(a) {
            if (a._submit_bubble) {
                delete a._submit_bubble;
                this.parentNode&&!a.isTrigger && q.event.simulate("submit", this
                .parentNode, a, !0)
            }
        },
        teardown: function() {
            if (q.nodeName(this, "form"))
                return !1;
            q.event.remove(this, "._submit")
        }
    });
    q.support.changeBubbles || (q.event.special.change = {
        setup: function() {
            if (W.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") {
                    q.event
                    .add(this, "propertychange._change", function(a) {
                        a.originalEvent.propertyName === "checked" && (this._just_changed=!0)
                    });
                    q.event.add(this, "click._change", function(a) {
                        this._just_changed&&!a.isTrigger && (this._just_changed=!1);
                        q.event.simulate("change", this, a, !0)
                    })
                }
                return !1
            }
            q.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                if (W.test(b.nodeName)&&!q._data(b, "_change_attached")) {
                    q.event.add(b, "change._change", function(a) {
                        this.parentNode&&!a.isSimulated&&!a.isTrigger && q.event.simulate("change", this.parentNode
                        , a, !0)
                    });
                    q._data(b, "_change_attached", !0)
                }
            })
        },
        handle: function(a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox")
                return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            q.event.remove(this, "._change"
            );
            return !W.test(this.nodeName)
        }
    });
    q.support.focusinBubbles || q.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0, d = function(a) {
            q.event.simulate(b, a.target, q.event.fix(a), !0)
        };
        q.event.special[b] = {
            setup: function() {
                c++===0 && e.addEventListener(a, d, !0
                )
            },
            teardown: function() {
                --c === 0 && e.removeEventListener(a, d, !0)
            }
        }
    });
    q.fn.extend({
        on: function(a, c, d, e, f) {
            var g, i;
            if (typeof a == "object") {
                if (typeof c != "string") {
                    d = d || c;
                    c = b
                }
                for (i in a)
                    this.on(i, c, d, a[i], f);
                return this
            }
            if (d == null && e == null) {
                e = c;
                d = c = b
            } else if (e == null
            )
                if (typeof c == "string") {
                    e = d;
                    d = b
                } else {
                    e = d;
                    d = c;
                    c = b
                }
            if (e===!1)
                e = db;
            else if (!e)
                return this;
            if (f === 1) {
                g = e;
                e = function(a) {
                    q().off(a);
                    return g.apply(this, arguments)
                };
                e.guid = g.guid || (g.guid = q.guid++)
            }
            return this.each(function() {
                q.event.add(this, a, e, d, c)
            })
        },
        one: function(
        a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) {
                e = a.handleObj;
                q(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
                return this
            }
            if (typeof a == "object") {
                for (f in a
                )
                    this.off(f, c, a[f]);
                return this
            }
            if (c===!1 || typeof c == "function") {
                d = c;
                c = b
            }
            d===!1 && (d = db);
            return this.each(function() {
                q.event.remove(this, a, d, c)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        live: function(
        a, b, c) {
            q(this.context).on(a, this.selector, b, c);
            return this
        },
        die: function(a, b) {
            q(this.context).off(a, this.selector || "**", b);
            return this
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return arguments.length === 1 ? this.off(a, "**"
            ) : this.off(b, a || "**", c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                q.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            if (this[0])
                return q.event.trigger(a, b, this[0], !0)
        },
        toggle: function(a) {
            var b = arguments, c = a.guid || q.guid++, d = 0, e = function(c) {
                var e = (q._data(this, "lastToggle" + a.guid) || 0)%d;
                q._data(this, "lastToggle" + a.guid, e + 1);
                c.preventDefault();
                return b[e].apply(this, arguments) ||!1
            };
            e.guid = c;
            while (d < b.length)
                b[d++].guid = c;
            return this.click(e)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave
            (b || a)
        }
    });
    q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        q.fn[b] = function(
        a, c) {
            if (c == null) {
                c = a;
                a = null
            }
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        };
        Z.test(b) && (q.event.fixHooks[b] = q.event.keyHooks);
        ab.test(b) && (q.event.fixHooks[b] = q.event.mouseHooks)
    }); /*!
     * Sizzle CSS Selector Engine
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license
     * http://sizzlejs.com/
     */
    (function(a, b) {
        function fb(a, b, c, d) {
            c = c || [];
            b = b || s;
            var e, f, j, k, l = b.nodeType;
            if (!a || typeof a != "string")
                return c;
            if (l !== 1 && l !== 9)
                return [];
            j = g(b);
            if (!j&&!d)
                if (e = Q.exec(a))
                    if (k = e[1]) {
                        if (l === 9) {
                            f = b.getElementById(k);
                            if (!f ||!f.parentNode)
                                return c;
                                if (f.id === k) {
                                    c.
                                    push(f);
                                    return c
                                }
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(k)) && i(b, f) && f.id === k) {
                            c.push(f);
                            return c
                        }
                    } else {
                        if (e[2]) {
                            x.apply(c, y.call(b.getElementsByTagName(a), 0));
                            return c
                        }
                        if ((k = e[3]) && cb && b.getElementsByClassName) {
                            x.apply(c, y.call(b.getElementsByClassName
                            (k), 0));
                            return c
                        }
                    }
            return sb(a.replace(M, "$1"), b, c, d, j)
        }
        function gb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return c === "input" && b.type === a
            }
        }
        function hb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return (c === "input" || c === "button") && b.type ===
                a
            }
        }
        function ib(a) {
            return A(function(b) {
                b =+ b;
                return A(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e]=!(d[e] = c[e]))
                })
            })
        }
        function jb(a, b, c) {
            if (a === b)
                return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b)
                    return - 1;
                d = d.nextSibling
            }
            return 1
        }
        function kb(a, b) {
            var c, d, f, g, i, j, k, l = D[p][a + " "];
            if (l)
                return b ? 0 : l.slice(0);
            i = a;
            j = [];
            k = e.preFilter;
            while (i) {
                if (!c || (d = N.exec(i))) {
                    d && (i = i.slice(d[0].length) || i);
                    j.push(f = [])
                }
                c=!1;
                if (d = O.exec(i)) {
                    f.push(c = new r(d.shift()));
                    i = i.slice(c.length);
                    c.type = d[0].replace
                    (M, " ")
                }
                for (g in e.filter)
                    if ((d = X[g].exec(i)) && (!k[g] || (d = k[g](d)))) {
                        f.push(c = new r(d.shift()));
                        i = i.slice(c.length);
                        c.type = g;
                        c.matches = d
                    }
                if (!c)
                    break
            }
            return b ? i.length : i ? fb.error(a) : D(a, j).slice(0)
        }
        function lb(a, b, d) {
            var e = b.dir, f = d && b.dir === "parentNode", g =
            v++;
            return b.first ? function(b, c, d) {
                while (b = b[e])
                    if (f || b.nodeType === 1)
                        return a(b, c, d)
            } : function(b, d, i) {
                if (!i) {
                    var j, k = u + " " + g + " ", l = k + c;
                    while (b = b[e])
                        if (f || b.nodeType === 1) {
                            if ((j = b[p]) === l)
                                return b.sizset;
                                if (typeof j == "string" && j.indexOf(k) === 0) {
                                    if (b.sizset)
                                        return b
                                } else {
                                    b[p] = l;
                                    if (a(b, d, i)) {
                                        b.sizset=!0;
                                        return b
                                    }
                                    b.sizset=!1
                                }
                        }
                } else 
                    while (b = b[e])
                        if (f || b.nodeType === 1)
                            if (a(b, d, i))
                                return b
            }
        }
        function mb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            } : a[0]
        }
        function nb(a, b, c, d,
        e) {
            var f, g = [], i = 0, j = a.length, k = b != null;
            for (; i < j; i++)
                if (f = a[i])
                    if (!c || c(f, d, e)) {
                        g.push(f);
                        k && b.push(i)
                    }
            return g
        }
        function ob(a, b, c, d, e, f) {
            d&&!d[p] && (d = ob(d));
            e&&!e[p] && (e = ob(e, f));
            return A(function(f, g, i, j) {
                var k, l, m, n = [], o = [], p = g.length, q = f || rb(b || "*", i.nodeType ?
                [i] : i, []), r = a && (f ||!b) ? nb(q, n, a, i, j): q, s = c ? e || (f ? a : p || d) ? []: g: r;
                c && c(r, s, i, j);
                if (d) {
                    k = nb(s, o);
                    d(k, [], i, j);
                    l = k.length;
                    while (l--)
                        if (m = k[l])
                            s[o[l]]=!(r[o[l]] = m)
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            k = [];
                            l = s.length;
                            while (l--)(m = s[l]) && k.push(r[l] = m);
                            e(null, s = [], k, j)
                        }
                        l = s.length
                        ;
                        while (l--)(m = s[l]) && (k = e ? z.call(f, m) : n[l])>-1 && (f[k]=!(g[k] = m))
                        }
                } else {
                    s = nb(s === g ? s.splice(p, s.length) : s);
                    e ? e(null, g, s, j) : x.apply(g, s)
                }
            })
        }
        function pb(a) {
            var b, c, d, f = a.length, g = e.relative[a[0].type], i = g || e.relative[" "], j = g ? 1: 0, k = lb(function(a) {
                return a === b
            }, i, !0), l = lb(function(a) {
                return z.call(b, a)>-1
            }, i, !0), n = [function(a, c, d) {
                return !g && (d || c !== m) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }
            ];
            for (; j < f; j++)
                if (c = e.relative[a[j].type])
                    n = [lb(mb(n), c)];
                else {
                    c = e.filter[a[j].type].apply(null, a[j].matches);
                    if (c[p]) {
                        d=++j;
                        for (
                        ; d < f; d++)
                            if (e.relative[a[d].type])
                                break;
                                return ob(j > 1 && mb(n), j > 1 && a.slice(0, j - 1).join("").replace(M, "$1"), c, j < d && pb(a.slice(j, d)), d < f && pb(a = a.slice(d)), d < f && a.join(""))
                            }
                            n.push(c)
                }
            return mb(n)
        }
        function qb(a, b) {
            var d = b.length > 0, f = a.length > 0, g = function(i, j, k,
            l, n) {
                var o, p, q, r = [], t = 0, v = "0", y = i && [], z = n != null, A = m, B = i || f && e.find.TAG("*", n && j.parentNode || j), C = u += A == null ? 1: Math.E;
                if (z) {
                    m = j !== s && j;
                    c = g.el
                }
                for (; (o = B[v]) != null; v++) {
                    if (f && o) {
                        for (p = 0; q = a[p]; p++)
                            if (q(o, j, k)) {
                                l.push(o);
                                break
                            }
                        if (z) {
                            u = C;
                            c=++g.el
                        }
                    }
                    if (d) {
                        (o=!q &&
                        o) && t--;
                        i && y.push(o)
                    }
                }
                t += v;
                if (d && v !== t) {
                    for (p = 0; q = b[p]; p++)
                        q(y, r, j, k);
                    if (i) {
                        if (t > 0)
                            while (v--)!y[v]&&!r[v] && (r[v] = w.call(l));
                        r = nb(r)
                    }
                    x.apply(l, r);
                    z&&!i && r.length > 0 && t + b.length > 1 && fb.uniqueSort(l)
                }
                if (z) {
                    u = C;
                    m = A
                }
                return y
            };
            g.el = 0;
            return d ? A(g) : g
        }
        function rb(a,
        b, c) {
            var d = 0, e = b.length;
            for (; d < e; d++)
                fb(a, b[d], c);
            return c
        }
        function sb(a, b, c, d, f) {
            var g, i, k, l, m, n = kb(a), o = n.length;
            if (!d && n.length === 1) {
                i = n[0] = n[0].slice(0);
                if (i.length > 2 && (k = i[0]).type === "ID" && b.nodeType === 9&&!f && e.relative[i[1].type]) {
                    b = e.find.ID(k.matches
                    [0].replace(W, ""), b, f)[0];
                    if (!b)
                        return c;
                    a = a.slice(i.shift().length)
                }
                for (g = X.POS.test(a)?-1 : i.length - 1; g >= 0; g--) {
                    k = i[g];
                    if (e.relative[l = k.type])
                        break;
                    if (m = e.find[l])
                        if (d = m(k.matches[0].replace(W, ""), S.test(i[0].type) && b.parentNode || b, f)) {
                            i.splice(g, 1);
                            a = d.
                            length && i.join("");
                            if (!a) {
                                x.apply(c, y.call(d, 0));
                                return c
                            }
                            break
                        }
                }
            }
            j(a, n)(d, b, f, c, S.test(a));
            return c
        }
        function tb() {}
        var c, d, e, f, g, i, j, k, l, m, n=!0, o = "undefined", p = ("sizcache" + Math.random()).replace(".", ""), r = String, s = a.document, t = s.documentElement, u = 0, v = 0, w =
        [].pop, x = [].push, y = [].slice, z = [].indexOf || function(a) {
            var b = 0, c = this.length;
            for (; b < c; b++)
                if (this[b] === a)
                    return b;
            return - 1
        }, A = function(a, b) {
            a[p] = b == null || b;
            return a
        }, B = function() {
            var a = {}, b = [];
            return A(function(c, d) {
                b.push(c) > e.cacheLength && delete a[b.shift
                ()];
                return a[c + " "] = d
            }, a)
        }, C = B(), D = B(), E = B(), F = "[\\x20\\t\\r\\n\\f]", G = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", H = G.replace("w", "w#"), I = "([*^$|!~]?=)", J = "\\[" + F + "*(" + G + ")" + F + "*(?:" + I + F + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + H + ")|)|)" + F + "*\\]", K = ":(" + G + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" +
        J + ")|[^:]|\\\\.)*|.*))\\)|)", L = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", M = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"), N = new RegExp("^" + F + "*," + F + "*"), O = new RegExp("^" + F + "*([\\x20\\t\\r\\n\\f>+~])" +
        F + "*"), P = new RegExp(K), Q = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, R = /^:not/, S = /[\x20\t\r\n\f]*[+~]/, T = /:not\($/, U = /h\d/i, V = /input|select|textarea|button/i, W = /\\(?!\\)/g, X = {
            ID: new RegExp("^#(" + G + ")"),
            CLASS: new RegExp("^\\.(" + G + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" +
            G + ")['\"]?\\]"),
            TAG: new RegExp("^(" + G.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + J),
            PSEUDO: new RegExp("^" + K),
            POS: new RegExp(L, "i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)"
            , "i"),
            needsContext: new RegExp("^" + F + "*[>+~]|" + L, "i")
        }, Y = function(a) {
            var b = s.createElement("div");
            try {
                return a(b)
            } catch (c) {
                return !1
            } finally {
                b = null
            }
        }, Z = Y(function(a) {
            a.appendChild(s.createComment(""));
            return !a.getElementsByTagName("*").length
        }), ab = Y(function(
        a) {
            a.innerHTML = "<a href='#'></a>";
            return a.firstChild && typeof a.firstChild.getAttribute !== o && a.firstChild.getAttribute("href") === "#"
        }), bb = Y(function(a) {
            a.innerHTML = "<select></select>";
            var b = typeof a.lastChild.getAttribute("multiple");
            return b !== "boolean" &&
            b !== "string"
        }), cb = Y(function(a) {
            a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
            if (!a.getElementsByClassName ||!a.getElementsByClassName("e").length)
                return !1;
            a.lastChild.className = "e";
            return a.getElementsByClassName("e").length === 2
        }), db =
        Y(function(a) {
            a.id = p + 0;
            a.innerHTML = "<a name='" + p + "'></a><div name='" + p + "'></div>";
            t.insertBefore(a, t.firstChild);
            var b = s.getElementsByName && s.getElementsByName(p).length === 2 + s.getElementsByName(p + 0).length;
            d=!s.getElementById(p);
            t.removeChild(a);
            return b
        })
        ;
        try {
            y.call(t.childNodes, 0)[0].nodeType
        } catch (eb) {
            y = function(a) {
                var b, c = [];
                for (; b = this[a]; a++)
                    c.push(b);
                return c
            }
        }
        fb.matches = function(a, b) {
            return fb(a, null, null, b)
        };
        fb.matchesSelector = function(a, b) {
            return fb(b, null, null, [a]).length > 0
        };
        f = fb.getText = function(
        a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (e === 1 || e === 9 || e === 11) {
                    if (typeof a.textContent == "string")
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += f(a)
                    } else if (e === 3 || e === 4)
                    return a.nodeValue
            } else 
                for (; b = a[d]; d++)
                    c += f(b);
            return c
        };
        g = fb.isXML = function(
        a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        i = fb.contains = t.contains ? function(a, b) {
            var c = a.nodeType === 9 ? a.documentElement: a, d = b && b.parentNode;
            return a === d||!!(d && d.nodeType === 1 && c.contains && c.contains(d))
        } : t.compareDocumentPosition ?
        function(a, b) {
            return b&&!!(a.compareDocumentPosition(b) & 16)
        } : function(a, b) {
            while (b = b.parentNode)
                if (b === a)
                    return !0;
            return !1
        };
        fb.attr = function(a, b) {
            var c, d = g(a);
            d || (b = b.toLowerCase());
            if (c = e.attrHandle[b])
                return c(a);
            if (d || bb)
                return a.getAttribute(b);
            c = a.getAttributeNode
            (b);
            return c ? typeof a[b] == "boolean" ? a[b] ? b : null : c.specified ? c.value : null : null
        };
        e = fb.selectors = {
            cacheLength: 50,
            createPseudo: A,
            match: X,
            attrHandle: ab ? {}
            : {
                href: function(a) {
                    return a.getAttribute("href", 2)
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            },
            find: {
                ID: d ? function(a, b, c) {
                    if (typeof b.getElementById !== o&&!c) {
                        var d = b.getElementById(a);
                        return d && d.parentNode ? [d] : []
                    }
                }
                : function(a, c, d) {
                    if (typeof c.getElementById !== o&&!d) {
                        var e = c.getElementById(a);
                        return e ? e.id === a || typeof e.getAttributeNode !== o && e.getAttributeNode
                        ("id").value === a ? [e] : b : []
                    }
                },
                TAG: Z ? function(a, b) {
                    if (typeof b.getElementsByTagName !== o)
                        return b.getElementsByTagName(a)
                }
                : function(a, b) {
                    var c = b.getElementsByTagName(a);
                    if (a === "*") {
                        var d, e = [], f = 0;
                        for (; d = c[f]; f++)
                            d.nodeType === 1 && e.push(d);
                        return e
                    }
                    return c
                },
                NAME
                : db && function(a, b) {
                    if (typeof b.getElementsByName !== o)
                        return b.getElementsByName(name)
                },
                CLASS: cb && function(a, b, c) {
                    if (typeof b.getElementsByClassName !== o&&!c)
                        return b.getElementsByClassName(a)
                }
            },
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
                    a[1] = a[1].replace(W, "");
                    a[3] = (a[4] || a[5] || "").replace(W, "");
                    a[2] === "~=" && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    if (a
                    [1] === "nth") {
                        a[2] || fb.error(a[0]);
                        a[3] =+ (a[3] ? a[4] + (a[5] || 1) : 2 * (a[2] === "even" || a[2] === "odd"));
                        a[4] =+ (a[6] + a[7] || a[2] === "odd")
                    } else 
                        a[2] && fb.error(a[0]);
                    return a
                },
                PSEUDO: function(a) {
                    var b, c;
                    if (X.CHILD.test(a[0]))
                        return null;
                    if (a[3])
                        a[2] = a[3];
                    else if (b = a[4])
                    {
                        if (P.test(b) && (c = kb(b, !0)) && (c = b.indexOf(")", b.length - c) - b.length)) {
                            b = b.slice(0, c);
                            a[0] = a[0].slice(0, c)
                        }
                        a[2] = b
                    }
                    return a.slice(0, 3)
                }
            },
            filter: {
                ID: d ? function(a) {
                    a = a.replace(W, "");
                    return function(b) {
                        return b.getAttribute("id") === a
                    }
                }
                : function(a) {
                    a = a.replace(W, ""
                    );
                    return function(b) {
                        var c = typeof b.getAttributeNode !== o && b.getAttributeNode("id");
                        return c && c.value === a
                    }
                },
                TAG: function(a) {
                    if (a === "*")
                        return function() {
                            return !0
                        };
                    a = a.replace(W, "").toLowerCase();
                    return function(b) {
                        return b.nodeName && b.nodeName.toLowerCase() ===
                        a
                    }
                },
                CLASS: function(a) {
                    var b = C[p][a + " "];
                    return b || (b = new RegExp("(^|" + F + ")" + a + "(" + F + "|$)")) && C(a, function(a) {
                        return b.test(a.className || typeof a.getAttribute !== o && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d, e) {
                        var f = fb.attr(d, a);
                        if (f == null)
                            return b === "!=";
                        if (!b)
                            return !0;
                        f += "";
                        return b === "=" ? f === c : b === "!=" ? f !== c : b === "^=" ? c && f.indexOf(c) === 0 : b === "*=" ? c && f.indexOf(c)>-1 : b === "$=" ? c && f.substr(f.length - c.length) === c : b === "~=" ? (" " + f + " ").indexOf(c)>-1 : b === "|=" ? f === c || f.substr(0, c.length + 1
                        ) === c + "-" : !1
                    }
                },
                CHILD: function(a, b, c, d) {
                    return a === "nth" ? function(a) {
                        var b, e, f = a.parentNode;
                        if (c === 1 && d === 0)
                            return !0;
                        if (f) {
                            e = 0;
                            for (b = f.firstChild; b; b = b.nextSibling)
                                if (b.nodeType === 1) {
                                    e++;
                                    if (a === b)
                                        break
                                }
                        }
                        e -= d;
                        return e === c || e%c === 0 && e / c >= 0
                    } : function(b) {
                        var c =
                        b;
                        switch (a) {
                        case"only":
                        case"first":
                            while (c = c.previousSibling)
                                if (c.nodeType === 1)
                                    return !1;
                            if (a === "first")
                                return !0;
                            c = b;
                        case"last":
                            while (c = c.nextSibling)
                                if (c.nodeType === 1)
                                    return !1;
                            return !0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, d = e.pseudos[a] || e.setFilters[a.toLowerCase
                    ()] || fb.error("unsupported pseudo: " + a);
                    if (d[p])
                        return d(b);
                    if (d.length > 1) {
                        c = [a, a, "", b];
                        return e.setFilters.hasOwnProperty(a.toLowerCase()) ? A(function(a, c) {
                            var e, f = d(a, b), g = f.length;
                            while (g--) {
                                e = z.call(a, f[g]);
                                a[e]=!(c[e] = f[g])
                            }
                        }) : function(a) {
                            return d(a, 0,
                            c)
                        }
                    }
                    return d
                }
            },
            pseudos: {
                not: A(function(a) {
                    var b = [], c = [], d = j(a.replace(M, "$1"));
                    return d[p] ? A(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), i = a.length;
                        while (i--)
                            if (f = g[i])
                                a[i]=!(b[i] = f)
                    }) : function(a, e, f) {
                        b[0] = a;
                        d(b, null, f, c);
                        return !c.pop()
                    }
                }),
                has: A(function(a) {
                    return function(
                    b) {
                        return fb(a, b).length > 0
                    }
                }),
                contains: A(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || f(b)).indexOf(a)>-1
                    }
                }),
                enabled: function(a) {
                    return a.disabled===!1
                },
                disabled: function(a) {
                    return a.disabled===!0
                },
                checked: function(a) {
                    var b = a.nodeName.
                    toLowerCase();
                    return b === "input"&&!!a.checked || b === "option"&&!!a.selected
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected===!0
                },
                parent: function(a) {
                    return !e.pseudos.empty(a)
                },
                empty: function(a) {
                    var b;
                    a = a.firstChild;
                    while (a) {
                        if (
                        a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4)
                            return !1;
                        a = a.nextSibling
                    }
                    return !0
                },
                header: function(a) {
                    return U.test(a.nodeName)
                },
                text: function(a) {
                    var b, c;
                    return a.nodeName.toLowerCase() === "input" && (b = a.type) === "text" && ((c = a.getAttribute("type")) == null || c.toLowerCase
                    () === b)
                },
                radio: gb("radio"),
                checkbox: gb("checkbox"),
                file: gb("file"),
                password: gb("password"),
                image: gb("image"),
                submit: hb("submit"),
                reset: hb("reset"),
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && a.type === "button" || b === "button"
                },
                input:
                function(a) {
                    return V.test(a.nodeName)
                },
                focus: function(a) {
                    var b = a.ownerDocument;
                    return a === b.activeElement && (!b.hasFocus || b.hasFocus())&&!!(a.type || a.href||~a.tabIndex)
                },
                active: function(a) {
                    return a === a.ownerDocument.activeElement
                },
                first: ib(function() {
                    return [0
                    ]
                }),
                last: ib(function(a, b) {
                    return [b - 1]
                }),
                eq: ib(function(a, b, c) {
                    return [c < 0 ? c + b: c]
                }),
                even: ib(function(a, b) {
                    for (var c = 0; c < b; c += 2)
                        a.push(c);
                    return a
                }),
                odd: ib(function(a, b) {
                    for (var c = 1; c < b; c += 2)
                        a.push(c);
                    return a
                }),
                lt: ib(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0
                    ;)
                        a.push(d);
                    return a
                }),
                gt: ib(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;)
                        a.push(d);
                    return a
                })
            }
        };
        k = t.compareDocumentPosition ? function(a, b) {
            if (a === b) {
                l=!0;
                return 0
            }
            return (!a.compareDocumentPosition ||!b.compareDocumentPosition ? a.compareDocumentPosition : a.compareDocumentPosition
            (b) & 4)?-1 : 1
        } : function(a, b) {
            if (a === b) {
                l=!0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex)
                return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], g = a.parentNode, i = b.parentNode, j = g;
            if (g === i)
                return jb(a, b);
            if (!g)
                return - 1;
            if (!i)
                return 1;
            while (j) {
                e.unshift(j);
                j = j.parentNode
            }
            j = i;
            while (j) {
                f.unshift(j);
                j = j.parentNode
            }
            c = e.length;
            d = f.length;
            for (var k = 0; k < c && k < d; k++)
                if (e[k] !== f[k])
                    return jb(e[k], f[k]);
            return k === c ? jb(a, f[k], - 1) : jb(e[k], b, 1)
        };
        [0, 0].sort(k);
        n=!l;
        fb.uniqueSort = function(a) {
            var b, c = [], d = 1, e = 0;
            l = n;
            a.sort(k);
            if (l) {
                for (; b =
                a[d]; d++)
                    b === a[d - 1] && (e = c.push(d));
                while (e--)
                    a.splice(c[e], 1)
            }
            return a
        };
        fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        };
        j = fb.compile = function(a, b) {
            var c, d = [], e = [], f = E[p][a + " "];
            if (!f) {
                b || (b = kb(a));
                c = b.length;
                while (c--) {
                    f =
                    pb(b[c]);
                    f[p] ? d.push(f) : e.push(f)
                }
                f = E(a, qb(e, d))
            }
            return f
        };
        s.querySelectorAll && function() {
            var a, b = sb, c = /'|\\/g, d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, e = [":focus"], f = [":active"], i = t.matchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector ||
            t.oMatchesSelector || t.msMatchesSelector;
            Y(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>";
                a.querySelectorAll("[selected]").length || e.push("\\[" + F + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
                a.querySelectorAll(":checked"
                ).length || e.push(":checked")
            });
            Y(function(a) {
                a.innerHTML = "<p test=''></p>";
                a.querySelectorAll("[test^='']").length && e.push("[*^$]=" + F + "*(?:\"\"|'')");
                a.innerHTML = "<input type='hidden'/>";
                a.querySelectorAll(":enabled").length || e.push(":enabled", ":disabled")
            });
            e = new RegExp(e.join("|"));
            sb = function(a, d, f, g, i) {
                if (!g&&!i&&!e.test(a)) {
                    var j, k, l=!0, m = p, n = d, o = d.nodeType === 9 && a;
                    if (d.nodeType === 1 && d.nodeName.toLowerCase() !== "object") {
                        j = kb(a);
                        (l = d.getAttribute("id")) ? m = l.replace(c, "\\$&") : d.setAttribute("id", m);
                        m = "[id='" +
                        m + "'] ";
                        k = j.length;
                        while (k--)
                            j[k] = m + j[k].join("");
                        n = S.test(a) && d.parentNode || d;
                        o = j.join(",")
                    }
                    if (o)
                        try {
                            x.apply(f, y.call(n.querySelectorAll(o), 0));
                            return f
                    } catch (q) {} finally {
                        l || d.removeAttribute("id")
                    }
                }
                return b(a, d, f, g, i)
            };
            if (i) {
                Y(function(b) {
                    a = i.call(b, "div"
                    );
                    try {
                        i.call(b, "[test!='']:sizzle");
                        f.push("!=", K)
                    } catch (c) {}
                });
                f = new RegExp(f.join("|"));
                fb.matchesSelector = function(b, c) {
                    c = c.replace(d, "='$1']");
                    if (!g(b)&&!f.test(c)&&!e.test(c))
                        try {
                            var j = i.call(b, c);
                            if (j || a || b.document && b.document.nodeType !== 11)
                                return j
                    } catch (k) {}
                    return fb(c, null, null, [b]).length > 0
                }
            }
        }();
        e.pseudos.nth = e.pseudos.eq;
        e.filters = tb.prototype = e.pseudos;
        e.setFilters = new tb;
        fb.attr = q.attr;
        q.find = fb;
        q.expr = fb.selectors;
        q.expr[":"] = q.expr.pseudos;
        q.unique = fb.uniqueSort;
        q.text = fb.getText;
        q.isXMLDoc =
        fb.isXML;
        q.contains = fb.contains
    })(a);
    var fb = /Until$/, gb = /^(?:parents|prev(?:Until|All))/, hb = /^.[^:#\[\.,]*$/, ib = q.expr.match.needsContext, jb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    q.fn.extend({
        find: function(a) {
            var b, c, d, e, f, g, i = this;
            if (typeof a != "string"
            )
                return q(a).filter(function() {
                    for (b = 0, c = i.length; b < c; b++)
                        if (q.contains(i[b], this))
                            return !0
                        });
            g = this.pushStack("", "find", a);
            for (b = 0, c = this.length; b < c; b++) {
                d = g.length;
                q.find(a, this[b], g);
                if (b > 0)
                    for (e = d; e < g.length; e++)
                        for (f = 0; f < d; f++)
                            if (g[f] === g[e]) {
                                g.splice
                                (e--, 1);
                                break
                            }
            }
            return g
        },
        has: function(a) {
            var b, c = q(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; b < d; b++)
                    if (q.contains(this, c[b]))
                        return !0
            })
        },
        not: function(a) {
            return this.pushStack(mb(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(
            mb(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && (typeof a == "string" ? ib.test(a) ? q(a, this.context).index(this[0]) >= 0 : q.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c, d = 0, e = this.length, f = [], g = ib.test(a) || typeof a != "string" ?
            q(a, b || this.context): 0;
            for (; d < e; d++) {
                c = this[d];
                while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
                    if (g ? g.index(c)>-1 : q.find.matchesSelector(c, a)) {
                        f.push(c);
                        break
                    }
                    c = c.parentNode
                }
            }
            f = f.length > 1 ? q.unique(f) : f;
            return this.pushStack(f, "closest", a)
        },
        index: function(
        a) {
            return a ? typeof a == "string" ? q.inArray(this[0], q(a)) : q.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : - 1
        },
        add: function(a, b) {
            var c = typeof a == "string" ? q(a, b): q.makeArray(a && a.nodeType ? [a] : a), d = q.merge(this.get(), c);
            return this
            .pushStack(kb(c[0]) || kb(d[0]) ? d : q.unique(d))
        },
        addBack: function(a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
        }
    });
    q.fn.andSelf = q.fn.addBack;
    q.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function(
        a) {
            return q.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return q.dir(a, "parentNode", c)
        },
        next: function(a) {
            return lb(a, "nextSibling")
        },
        prev: function(a) {
            return lb(a, "previousSibling")
        },
        nextAll: function(a) {
            return q.dir(a, "nextSibling")
        },
        prevAll: function(
        a) {
            return q.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return q.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return q.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return q.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return q
            .sibling(a.firstChild)
        },
        contents: function(a) {
            return q.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : q.merge([], a.childNodes)
        }
    }, function(a, b) {
        q.fn[a] = function(c, d) {
            var e = q.map(this, b, c);
            fb.test(a) || (d = c);
            d && typeof d == "string" && (e = q.filter
            (d, e));
            e = this.length > 1&&!jb[a] ? q.unique(e) : e;
            this.length > 1 && gb.test(a) && (e = e.reverse());
            return this.pushStack(e, a, l.call(arguments).join(","))
        }
    });
    q.extend({
        filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? q.find.matchesSelector(b[0], a) ? [b[0]
            ] : [] : q.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = [], f = a[c];
            while (f && f.nodeType !== 9 && (d === b || f.nodeType !== 1 ||!q(f).is(d))) {
                f.nodeType === 1 && e.push(f);
                f = f[c]
            }
            return e
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling)
                a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var ob = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", pb = / jQuery\d+="(?:null|\d+)"/g, qb = /^\s+/, rb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
    , sb = /<([\w:]+)/, tb = /<tbody/i, ub = /<|&#?\w+;/, vb = /<(?:script|style|link)/i, wb = /<(?:script|object|embed|option|style)/i, xb = new RegExp("<(?:" + ob + ")[\\s/>]", "i"), yb = /^(?:checkbox|radio)$/, zb = /checked\s*(?:[^=]|=\s*.checked.)/i, Ab = /\/(java|ecma)script/i, Bb = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g
    , Cb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>"
        , "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }, Db = nb(e), Eb = Db.appendChild(e.createElement("div"));
    Cb.optgroup = Cb.option;
    Cb.tbody = Cb.tfoot = Cb.colgroup = Cb.caption = Cb.thead;
    Cb.th = Cb.td;
    q.support.htmlSerialize || (Cb._default = [1, "X<div>", "</div>"
    ]);
    q.fn.extend({
        text: function(a) {
            return q.access(this, function(a) {
                return a === b ? q.text(this) : this.empty().append((this[0] && this[0].ownerDocument || e).createTextNode(a))
            }, null, a, arguments.length)
        },
        wrapAll: function(a) {
            if (q.isFunction(a))
                return this.each(function(
                b) {
                    q(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = q(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function() {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1)
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return q.isFunction(a) ? this.each(function(b) {
                q(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = q(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = q.isFunction(a);
            return this.each(function(
            c) {
                q(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                q.nodeName(this, "body") || q(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(a) {
                (this.nodeType === 1 || this
                .nodeType === 11) && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (!kb(this[0]))
                return this.domManip(arguments, !1, function(
                a) {
                    this.parentNode.insertBefore(a, this)
                });
            if (arguments.length) {
                var a = q.clean(arguments);
                return this.pushStack(q.merge(a, this), "before", this.selector)
            }
        },
        after: function() {
            if (!kb(this[0]))
                return this.domManip(arguments, !1, function(a) {
                    this.parentNode.insertBefore
                    (a, this.nextSibling)
                });
            if (arguments.length) {
                var a = q.clean(arguments);
                return this.pushStack(q.merge(this, a), "after", this.selector)
            }
        },
        remove: function(a, b) {
            var c, d = 0;
            for (; (c = this[d]) != null; d++)
                if (!a || q.filter(a, [c]).length) {
                    if (!b && c.nodeType === 1) {
                        q.cleanData(
                        c.getElementsByTagName("*"));
                        q.cleanData([c])
                    }
                    c.parentNode && c.parentNode.removeChild(c)
                }
            return this
        },
        empty: function() {
            var a, b = 0;
            for (; (a = this[b]) != null; b++) {
                a.nodeType === 1 && q.cleanData(a.getElementsByTagName("*"));
                while (a.firstChild)
                    a.removeChild(a.firstChild
                    )
            }
            return this
        },
        clone: function(a, b) {
            a = a == null?!1 : a;
            b = b == null ? a : b;
            return this.map(function() {
                return q.clone(this, a, b)
            })
        },
        html: function(a) {
            return q.access(this, function(a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b)
                    return c.nodeType === 1 ? c.innerHTML.replace(
                    pb, "") : b;
                if (typeof a == "string"&&!vb.test(a) && (q.support.htmlSerialize ||!xb.test(a)) && (q.support.leadingWhitespace ||!qb.test(a))&&!Cb[(sb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(rb, "<$1></$2>");
                    try {
                        for (; d < e; d++) {
                            c = this[d] || {};
                            if (c.nodeType === 1) {
                                q.cleanData
                                (c.getElementsByTagName("*"));
                                c.innerHTML = a
                            }
                        }
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function(a) {
            if (!kb(this[0])) {
                if (q.isFunction(a))
                    return this.each(function(b) {
                        var c = q(this), d = c.html();
                        c.replaceWith(a.call(this, b, d
                        ))
                    });
                typeof a != "string" && (a = q(a).detach());
                return this.each(function() {
                    var b = this.nextSibling, c = this.parentNode;
                    q(this).remove();
                    b ? q(b).before(a) : q(c).append(a)
                })
            }
            return this.length ? this.pushStack(q(q.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(
        a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            a = [].concat.apply([], a);
            var e, f, g, i, j = 0, k = a[0], l = [], m = this.length;
            if (!q.support.checkClone && m > 1 && typeof k == "string" && zb.test(k))
                return this.each(function() {
                    q(this).domManip(a, c, d)
                });
            if (q.isFunction(k))
                return this
                .each(function(e) {
                    var f = q(this);
                    a[0] = k.call(this, e, c ? f.html() : b);
                    f.domManip(a, c, d)
                });
            if (this[0]) {
                e = q.buildFragment(a, this, l);
                g = e.fragment;
                f = g.firstChild;
                g.childNodes.length === 1 && (g = f);
                if (f) {
                    c = c && q.nodeName(f, "tr");
                    for (i = e.cacheable || m - 1; j < m; j++)
                        d.call(c && q
                        .nodeName(this[j], "table") ? Fb(this[j], "tbody") : this[j], j === i ? g : q.clone(g, !0, !0))
                    }
                g = f = null;
                l.length && q.each(l, function(a, b) {
                    b.src ? q.ajax ? q.ajax({
                        url: b.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : q.error("no ajax") : q.globalEval((b.text ||
                    b.textContent || b.innerHTML || "").replace(Bb, ""));
                    b.parentNode && b.parentNode.removeChild(b)
                })
            }
            return this
        }
    });
    q.buildFragment = function(a, c, d) {
        var f, g, i, j = a[0];
        c = c || e;
        c=!c.nodeType && c[0] || c;
        c = c.ownerDocument || c;
        if (a.length === 1 && typeof j == "string" && j.length < 512 &&
        c === e && j.charAt(0) === "<"&&!wb.test(j) && (q.support.checkClone ||!zb.test(j)) && (q.support.html5Clone ||!xb.test(j))) {
            g=!0;
            f = q.fragments[j];
            i = f !== b
        }
        if (!f) {
            f = c.createDocumentFragment();
            q.clean(a, c, f, d);
            g && (q.fragments[j] = i && f)
        }
        return {
            fragment: f,
            cacheable: g
        }
    };
    q.fragments =
    {};
    q.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        q.fn[a] = function(c) {
            var d, e = 0, f = [], g = q(c), i = g.length, j = this.length === 1 && this[0].parentNode;
            if ((j == null || j && j.nodeType === 11 && j
            .childNodes.length === 1) && i === 1) {
                g[b](this[0]);
                return this
            }
            for (; e < i; e++) {
                d = (e > 0 ? this.clone(!0) : this).get();
                q(g[e])[b](d);
                f = f.concat(d)
            }
            return this.pushStack(f, a, g.selector)
        }
    });
    q.extend({
        clone: function(a, b, c) {
            var d, e, f, g;
            if (q.support.html5Clone || q.isXMLDoc(a
            ) ||!xb.test("<" + a.nodeName + ">"))
                g = a.cloneNode(!0);
            else {
                Eb.innerHTML = a.outerHTML;
                Eb.removeChild(g = Eb.firstChild)
            }
            if ((!q.support.noCloneEvent ||!q.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11)&&!q.isXMLDoc(a)) {
                Hb(a, g);
                d = Ib(a);
                e = Ib(g);
                for (f = 0; d[f]
                ; ++f)
                    e[f] && Hb(d[f], e[f])
            }
            if (b) {
                Gb(a, g);
                if (c) {
                    d = Ib(a);
                    e = Ib(g);
                    for (f = 0; d[f]; ++f)
                        Gb(d[f], e[f])
                    }
            }
            d = e = null;
            return g
        },
        clean: function(a, b, c, d) {
            var f, g, i, j, k, l, m, n, o, p, r, s, t = b === e && Db, u = [];
            if (!b || typeof b.createDocumentFragment == "undefined")
                b = e;
            for (f = 0; (i = a[f]) != null
            ; f++) {
                typeof i == "number" && (i += "");
                if (!i)
                    continue;
                if (typeof i == "string")
                    if (!ub.test(i))
                        i = b.createTextNode(i);
                    else {
                        t = t || nb(b);
                        m = b.createElement("div");
                        t.appendChild(m);
                        i = i.replace(rb, "<$1></$2>");
                        j = (sb.exec(i) || ["", ""])[1].toLowerCase();
                        k = Cb[j] || Cb._default;
                        l = k[0];
                        m.innerHTML = k[1] + i + k[2];
                        while (l--)
                            m = m.lastChild;
                            if (!q.support.tbody) {
                                n = tb.test(i);
                                o = j === "table"&&!n ? m.firstChild && m.firstChild.childNodes : k[1] === "<table>"&&!n ? m.childNodes : [];
                                for (g = o.length - 1; g >= 0; --g)
                                    q.nodeName(o[g], "tbody")&&!o[g].childNodes.length &&
                                    o[g].parentNode.removeChild(o[g])
                                }
                                !q.support.leadingWhitespace && qb.test(i) && m.insertBefore(b.createTextNode(qb.exec(i)[0]), m.firstChild);
                                i = m.childNodes;
                                m.parentNode.removeChild(m)
                            }
                i.nodeType ? u.push(i) : q.merge(u, i)
            }
            m && (i = m = t = null);
            if (!q.support.appendChecked
            )
                for (f = 0; (i = u[f]) != null; f++)
                    q.nodeName(i, "input") ? Jb(i) : typeof i.getElementsByTagName != "undefined" && q.grep(i.getElementsByTagName("input"), Jb);
            if (c) {
                r = function(a) {
                    if (!a.type || Ab.test(a.type))
                        return d ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a) : c.appendChild
                        (a)
                };
                for (f = 0; (i = u[f]) != null; f++)
                    if (!q.nodeName(i, "script") ||!r(i)) {
                        c.appendChild(i);
                        if (typeof i.getElementsByTagName != "undefined") {
                            s = q.grep(q.merge([], i.getElementsByTagName("script")), r);
                            u.splice.apply(u, [f + 1, 0].concat(s));
                            f += s.length
                        }
                    }
                    }
            return u
        },
        cleanData
        : function(a, b) {
            var c, d, e, f, g = 0, i = q.expando, j = q.cache, k = q.support.deleteExpando, l = q.event.special;
            for (; (e = a[g]) != null; g++)
                if (b || q.acceptData(e)) {
                    d = e[i];
                    c = d && j[d];
                    if (c) {
                        if (c.events)
                            for (f in c.events)
                                l[f] ? q.event.remove(e, f) : q.removeEvent(e, f, c.handle);
                                if (j[d
                                ]) {
                                    delete j[d];
                                    k ? delete e[i] : e.removeAttribute ? e.removeAttribute(i) : e[i] = null;
                                    q.deletedIds.push(d)
                                }
                            }
                }
            }
        });
    (function() {
        var a, b;
        q.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/
            .exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        };
        a = q.uaMatch(g.userAgent);
        b = {};
        if (a.browser) {
            b[a.browser]=!0;
            b.version = a.version
        }
        b.chrome ? b.webkit=!0 : b.webkit &&
        (b.safari=!0);
        q.browser = b;
        q.sub = function() {
            function a(b, c) {
                return new a.fn.init(b, c)
            }
            q.extend(!0, a, this);
            a.superclass = this;
            a.fn = a.prototype = this ();
            a.fn.constructor = a;
            a.sub = this.sub;
            a.fn.init = function(d, e) {
                e && e instanceof q&&!(e instanceof a) && (e = a(e));
                return q
                .fn.init.call(this, d, e, b)
            };
            a.fn.init.prototype = a.fn;
            var b = a(e);
            return a
        }
    })();
    var Kb, Lb, Mb, Nb = /alpha\([^)]*\)/i, Ob = /opacity=([^)]*)/, Pb = /^(top|right|bottom|left)$/, Qb = /^(none|table(?!-c[ea]).+)/, Rb = /^margin/, Sb = new RegExp("^(" + r + ")(.*)$", "i"), Tb = new RegExp("^(" +
    r + ")(?!px)[a-z%]+$", "i"), Ub = new RegExp("^([-+])=(" + r + ")", "i"), Vb = {
        BODY: "block"
    }, Wb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Xb = {
        letterSpacing: 0,
        fontWeight: 400
    }, Yb = ["Top", "Right", "Bottom", "Left"], Zb = ["Webkit", "O", "Moz", "ms"], $b = q.fn.toggle;
    q.fn.extend({
        css: function(a, c) {
            return q.access(this, function(a, c, d) {
                return d !== b ? q.style(a, c, d) : q.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function() {
            return bc(this, !0)
        },
        hide: function() {
            return bc(this)
        },
        toggle: function(a, b) {
            var c = typeof a == "boolean";
            return q
            .isFunction(a) && q.isFunction(b) ? $b.apply(this, arguments) : this.each(function() {
                (c ? a : ac(this)) ? q(this).show() : q(this).hide()
            })
        }
    });
    q.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Kb(a, "opacity");
                        return c === "" ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight
            : !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": q.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, c, d, e) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 ||!a.style)
                return;
            var f, g, i, j = q.camelCase(c), k = a.style;
            c = q.cssProps
            [j] || (q.cssProps[j] = _b(k, j));
            i = q.cssHooks[c] || q.cssHooks[j];
            if (d === b)
                return i && "get"in i && (f = i.get(a, !1, e)) !== b ? f : k[c];
            g = typeof d;
            if (g === "string" && (f = Ub.exec(d))) {
                d = (f[1] + 1) * f[2] + parseFloat(q.css(a, c));
                g = "number"
            }
            if (d == null || g === "number" && isNaN(d))
                return;
            g === "number"&&!
            q.cssNumber[j] && (d += "px");
            if (!i ||!("set"in i) || (d = i.set(a, d, e)) !== b)
                try {
                    k[c] = d
            } catch (l) {}
        },
        css: function(a, c, d, e) {
            var f, g, i, j = q.camelCase(c);
            c = q.cssProps[j] || (q.cssProps[j] = _b(a.style, j));
            i = q.cssHooks[c] || q.cssHooks[j];
            i && "get"in i && (f = i.get(a, !0, e));
            f === b &&
            (f = Kb(a, c));
            f === "normal" && c in Xb && (f = Xb[c]);
            if (d || e !== b) {
                g = parseFloat(f);
                return d || q.isNumeric(g) ? g || 0 : f
            }
            return f
        },
        swap: function(a, b, c) {
            var d, e, f = {};
            for (e in b) {
                f[e] = a.style[e];
                a.style[e] = b[e]
            }
            d = c.call(a);
            for (e in b)
                a.style[e] = f[e];
            return d
        }
    });
    a.getComputedStyle ?
    Kb = function(b, c) {
        var d, e, f, g, i = a.getComputedStyle(b, null), j = b.style;
        if (i) {
            d = i.getPropertyValue(c) || i[c];
            d === ""&&!q.contains(b.ownerDocument, b) && (d = q.style(b, c));
            if (Tb.test(d) && Rb.test(c)) {
                e = j.width;
                f = j.minWidth;
                g = j.maxWidth;
                j.minWidth = j.maxWidth = j.width = d;
                d = i.width;
                j.width = e;
                j.minWidth = f;
                j.maxWidth = g
            }
        }
        return d
    } : e.documentElement.currentStyle && (Kb = function(a, b) {
        var c, d, e = a.currentStyle && a.currentStyle[b], f = a.style;
        e == null && f && f[b] && (e = f[b]);
        if (Tb.test(e)&&!Pb.test(b)) {
            c = f.left;
            d = a.runtimeStyle && a.runtimeStyle
            .left;
            d && (a.runtimeStyle.left = a.currentStyle.left);
            f.left = b === "fontSize" ? "1em" : e;
            e = f.pixelLeft + "px";
            f.left = c;
            d && (a.runtimeStyle.left = d)
        }
        return e === "" ? "auto" : e
    });
    q.each(["height", "width"], function(a, b) {
        q.cssHooks[b] = {
            get: function(a, c, d) {
                if (c)
                    return a.offsetWidth === 0 &&
                    Qb.test(Kb(a, "display")) ? q.swap(a, Wb, function() {
                        return ec(a, b, d)
                    }) : ec(a, b, d)
            },
            set: function(a, c, d) {
                return cc(a, c, d ? dc(a, b, d, q.support.boxSizing && q.css(a, "boxSizing") === "border-box") : 0)
            }
        }
    });
    q.support.opacity || (q.cssHooks.opacity = {
        get: function(a, b) {
            return Ob.
            test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style, d = a.currentStyle, e = q.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")": "", f = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && q.trim(f
            .replace(Nb, "")) === "" && c.removeAttribute) {
                c.removeAttribute("filter");
                if (d&&!d.filter)
                    return 
            }
            c.filter = Nb.test(f) ? f.replace(Nb, e) : f + " " + e
        }
    });
    q(function() {
        q.support.reliableMarginRight || (q.cssHooks.marginRight = {
            get: function(a, b) {
                return q.swap(a, {
                    display: "inline-block"
                }, function() {
                    if (b)
                        return Kb(a, "marginRight")
                })
            }
        });
        !q.support.pixelPosition && q.fn.position && q.each(["top", "left"], function(a, b) {
            q.cssHooks[b] = {
                get: function(a, c) {
                    if (c) {
                        var d = Kb(a, b);
                        return Tb.test(d) ? q(a).position()[b] + "px" : d
                    }
                }
            }
        })
    });
    if (q.expr && q.expr.filters
    ) {
        q.expr.filters.hidden = function(a) {
            return a.offsetWidth === 0 && a.offsetHeight === 0 ||!q.support.reliableHiddenOffsets && (a.style && a.style.display || Kb(a, "display")) === "none"
        };
        q.expr.filters.visible = function(a) {
            return !q.expr.filters.hidden(a)
        }
    }
    q.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        q.cssHooks[a + b] = {
            expand: function(c) {
                var d, e = typeof c == "string" ? c.split(" "): [c], f = {};
                for (d = 0; d < 4; d++)
                    f[a + Yb[d] + b] = e[d] || e[d - 2] || e[0];
                return f
            }
        };
        Rb.test(a) || (q.cssHooks[a + b].set = cc)
    });
    var gc = /%20/g, hc = /\[\]$/, ic = /\r?\n/g
    , jc = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, kc = /^(?:select|textarea)/i;
    q.fn.extend({
        serialize: function() {
            return q.param(this.serializeArray())
        },
        serializeArray: function() {
            return this
            .map(function() {
                return this.elements ? q.makeArray(this.elements) : this
            }).filter(function() {
                return this.name&&!this.disabled && (this.checked || kc.test(this.nodeName) || jc.test(this.type))
            }).map(function(a, b) {
                var c = q(this).val();
                return c == null ? null : q.isArray(c) ? q
                .map(c, function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(ic, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ic, "\r\n")
                }
            }).get()
        }
    });
    q.param = function(a, c) {
        var d, e = [], f = function(a, b) {
            b = q.isFunction(b) ? b() : b == null ? "" : b;
            e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent
            (b)
        };
        c === b && (c = q.ajaxSettings && q.ajaxSettings.traditional);
        if (q.isArray(a) || a.jquery&&!q.isPlainObject(a))
            q.each(a, function() {
                f(this.name, this.value)
            });
        else 
            for (d in a)
                lc(d, a[d], c, f);
        return e.join("&").replace(gc, "+")
    };
    var mc, nc, oc = /#.*$/, pc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg
    , qc = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, rc = /^(?:GET|HEAD)$/, sc = /^\/\//, tc = /\?/, uc = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, vc = /([?&])_=[^&]*/, wc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, xc = q.fn.load, yc = {}, zc = {}, Ac = ["*/"] + ["*"];
    try {
        nc = f.href
    } catch (Bc) {
        nc = e.createElement("a");
        nc.href = "";
        nc = nc.href
    }
    mc = wc.exec(nc.toLowerCase()) || [];
    q.fn.load = function(a, c, d) {
        if (typeof a != "string" && xc)
            return xc.apply(this, arguments);
        if (!this.length)
            return this;
        var e, f, g, i = this, j = a.indexOf
        (" ");
        if (j >= 0) {
            e = a.slice(j, a.length);
            a = a.slice(0, j)
        }
        if (q.isFunction(c)) {
            d = c;
            c = b
        } else 
            c && typeof c == "object" && (f = "POST");
        q.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function(a, b) {
                d && i.each(d, g || [a.responseText, b, a])
            }
        }).done(function(a) {
            g = arguments;
            i
            .html(e ? q("<div>").append(a.replace(uc, "")).find(e) : a)
        });
        return this
    };
    q.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        q.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    q.each(["get", "post"], function(a, c) {
        q[c] = function(
        a, d, e, f) {
            if (q.isFunction(d)) {
                f = f || e;
                e = d;
                d = b
            }
            return q.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    });
    q.extend({
        getScript: function(a, c) {
            return q.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return q.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            if (b)
                Ec(a, q
                .ajaxSettings);
            else {
                b = a;
                a = q.ajaxSettings
            }
            Ec(a, b);
            return a
        },
        ajaxSettings: {
            url: nc,
            isLocal: qc.test(mc[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html
                : "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Ac
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
                "* text": a.String,
                "text html": !0,
                "text json": q.parseJSON,
                "text xml"
                : q.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Cc(yc),
        ajaxTransport: Cc(zc),
        ajax: function(a, c) {
            function z(a, c, f, j) {
                var l, t, u, v, x, z = c;
                if (w === 2)
                    return;
                w = 2;
                i && clearTimeout(i);
                g = b;
                e = j || "";
                y.readyState = a > 0 ? 4 : 0;
                f && (v = Fc(m, y, f));
                if (a >= 200 && a < 300 || a === 304
                ) {
                    if (m.ifModified) {
                        x = y.getResponseHeader("Last-Modified");
                        x && (q.lastModified[d] = x);
                        x = y.getResponseHeader("Etag");
                        x && (q.etag[d] = x)
                    }
                    if (a === 304) {
                        z = "notmodified";
                        l=!0
                    } else {
                        l = Gc(m, v);
                        z = l.state;
                        t = l.data;
                        u = l.error;
                        l=!u
                    }
                } else {
                    u = z;
                    if (!z || a) {
                        z = "error";
                        a < 0 && (a = 0)
                    }
                }
                y.
                status = a;
                y.statusText = (c || z) + "";
                l ? p.resolveWith(n, [t, z, y]) : p.rejectWith(n, [y, z, u]);
                y.statusCode(s);
                s = b;
                k && o.trigger("ajax" + (l ? "Success" : "Error"), [y, m, l ? t: u]);
                r.fireWith(n, [y, z]);
                if (k) {
                    o.trigger("ajaxComplete", [y, m]);
                    --q.active || q.event.trigger("ajaxStop")
                }
            }
            if (typeof a == "object") {
                c = a;
                a = b
            }
            c = c || {};
            var d, e, f, g, i, j, k, l, m = q.ajaxSetup({}, c), n = m.context || m, o = n !== m && (n.nodeType || n instanceof q) ? q(n): q.event, p = q.Deferred(), r = q.Callbacks("once memory"), s = m.statusCode || {}, u = {}, v = {}, w = 0, x = "canceled", y = {
                readyState: 0,
                setRequestHeader
                : function(a, b) {
                    if (!w) {
                        var c = a.toLowerCase();
                        a = v[c] = v[c] || a;
                        u[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return w === 2 ? e : null
                },
                getResponseHeader: function(a) {
                    var c;
                    if (w === 2) {
                        if (!f) {
                            f = {};
                            while (c = pc.exec(e))
                                f[c[1].toLowerCase()] = c[2]
                        }
                        c = f[a.toLowerCase()
                        ]
                    }
                    return c === b ? null : c
                },
                overrideMimeType: function(a) {
                    w || (m.mimeType = a);
                    return this
                },
                abort: function(a) {
                    a = a || x;
                    g && g.abort(a);
                    z(0, a);
                    return this
                }
            };
            p.promise(y);
            y.success = y.done;
            y.error = y.fail;
            y.complete = r.add;
            y.statusCode = function(a) {
                if (a) {
                    var b;
                    if (w < 2)
                        for (b in 
                        a)
                            s[b] = [s[b], a[b]];
                    else {
                        b = a[y.status];
                        y.always(b)
                    }
                }
                return this
            };
            m.url = ((a || m.url) + "").replace(oc, "").replace(sc, mc[1] + "//");
            m.dataTypes = q.trim(m.dataType || "*").toLowerCase().split(t);
            if (m.crossDomain == null) {
                j = wc.exec(m.url.toLowerCase());
                m.crossDomain=!(!j ||
                j[1] === mc[1] && j[2] === mc[2] && (j[3] || (j[1] === "http:" ? 80 : 443)) == (mc[3] || (mc[1] === "http:" ? 80 : 443)))
            }
            m.data && m.processData && typeof m.data != "string" && (m.data = q.param(m.data, m.traditional));
            Dc(yc, m, c, y);
            if (w === 2)
                return y;
            k = m.global;
            m.type = m.type.toUpperCase();
            m.hasContent=!
            rc.test(m.type);
            k && q.active++===0 && q.event.trigger("ajaxStart");
            if (!m.hasContent) {
                if (m.data) {
                    m.url += (tc.test(m.url) ? "&" : "?") + m.data;
                    delete m.data
                }
                d = m.url;
                if (m.cache===!1) {
                    var A = q.now(), B = m.url.replace(vc, "$1_=" + A);
                    m.url = B + (B === m.url ? (tc.test(m.url) ? "&" : "?"
                    ) + "_=" + A : "")
                }
            }(m.data && m.hasContent && m.contentType!==!1 || c.contentType) && y.setRequestHeader("Content-Type", m.contentType);
            if (m.ifModified) {
                d = d || m.url;
                q.lastModified[d] && y.setRequestHeader("If-Modified-Since", q.lastModified[d]);
                q.etag[d] && y.setRequestHeader
                ("If-None-Match", q.etag[d])
            }
            y.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + (m.dataTypes[0] !== "*" ? ", " + Ac + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers)
                y.setRequestHeader(l, m.headers[l]);
            if (!m.beforeSend ||
            m.beforeSend.call(n, y, m)!==!1 && w !== 2) {
                x = "abort";
                for (l in{
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    y[l](m[l]);
                g = Dc(zc, m, c, y);
                if (!g)
                    z( - 1, "No Transport");
                else {
                    y.readyState = 1;
                    k && o.trigger("ajaxSend", [y, m]);
                    m.async && m.timeout > 0 && (i = setTimeout(function() {
                        y.abort("timeout")
                    }, m.timeout));
                    try {
                        w = 1;
                        g.send(u, z)
                    } catch (C) {
                        if (!(w < 2))
                            throw C;
                        z( - 1, C)
                    }
                }
                return y
            }
            return y.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Hc = [], Ic = /\?/, Jc = /(=)\?(?=&|$)|\?\?/, Kc = q.now();
    q.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Hc.pop() || q
            .expando + "_" + Kc++;
            this[a]=!0;
            return a
        }
    });
    q.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, i, j = c.data, k = c.url, l = c.jsonp!==!1, m = l && Jc.test(k), n = l&&!m && typeof j == "string"&&!(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Jc.test(j);
        if (c.
        dataTypes[0] === "jsonp" || m || n) {
            f = c.jsonpCallback = q.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback;
            g = a[f];
            m ? c.url = k.replace(Jc, "$1" + f) : n ? c.data = j.replace(Jc, "$1" + f) : l && (c.url += (Ic.test(k) ? "&" : "?") + c.jsonp + "=" + f);
            c.converters["script json"] = function(
            ) {
                i || q.error(f + " was not called");
                return i[0]
            };
            c.dataTypes[0] = "json";
            a[f] = function() {
                i = arguments
            };
            e.always(function() {
                a[f] = g;
                if (c[f]) {
                    c.jsonpCallback = d.jsonpCallback;
                    Hc.push(f)
                }
                i && q.isFunction(g) && g(i[0]);
                i = g = b
            });
            return "script"
        }
    });
    q.ajaxSetup({
        accepts: {
            script
            : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                q.globalEval(a);
                return a
            }
        }
    });
    q.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.
        cache=!1);
        if (a.crossDomain) {
            a.type = "GET";
            a.global=!1
        }
    });
    q.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
            return {
                send: function(_, f) {
                    c = e.createElement("script");
                    c.async = "async";
                    a.scriptCharset &&
                    (c.charset = a.scriptCharset);
                    c.src = a.url;
                    c.onload = c.onreadystatechange = function(_, a) {
                        if (a ||!c.readyState || /loaded|complete/.test(c.readyState)) {
                            c.onload = c.onreadystatechange = null;
                            d && c.parentNode && d.removeChild(c);
                            c = b;
                            a || f(200, "success")
                        }
                    };
                    d.insertBefore(c, d
                    .firstChild)
                },
                abort: function() {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var Lc, Mc = a.ActiveXObject ? function() {
        for (var a in Lc)
            Lc[a](0, 1)
    }
    : !1, Nc = 0;
    q.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && Oc() || Pc()
    } : Oc;
    (function(a) {
        q.extend(q.support, {
            ajax: !!a,
            cors: !!
            a && "withCredentials"in a
        })
    })(q.ajaxSettings.xhr());
    q.support.ajax && q.ajaxTransport(function(c) {
        if (!c.crossDomain || q.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, i, j = c.xhr();
                    c.username ? j.open(c.type, c.url, c.async, c.username, c.password) : j.open(c.type,
                    c.url, c.async);
                    if (c.xhrFields)
                        for (i in c.xhrFields)
                            j[i] = c.xhrFields[i];
                    c.mimeType && j.overrideMimeType && j.overrideMimeType(c.mimeType);
                    !c.crossDomain&&!e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (i in e)
                            j.setRequestHeader(i, e[i])
                    } catch (_) {}
                    j.send(c.hasContent && c.data || null);
                    d = function(_, a) {
                        var e, i, k, l, m;
                        try {
                            if (d && (a || j.readyState === 4)) {
                                d = b;
                                if (g) {
                                    j.onreadystatechange = q.noop;
                                    Mc && delete Lc[g]
                                }
                                if (a)
                                    j.readyState !== 4 && j.abort();
                                else {
                                    e = j.status;
                                    k = j.getAllResponseHeaders();
                                    l = {};
                                    m = j.responseXML
                                    ;
                                    m && m.documentElement && (l.xml = m);
                                    try {
                                        l.text = j.responseText
                                    } catch (n) {}
                                    try {
                                        i = j.statusText
                                    } catch (n) {
                                        i = ""
                                    }
                                    !e && c.isLocal&&!c.crossDomain ? e = l.text ? 200 : 404 : e === 1223 && (e = 204)
                                }
                            }
                        } catch (o) {
                            a || f( - 1, o)
                        }
                        l && f(e, i, l, k)
                    };
                    if (!c.async)
                        d();
                    else if (j.readyState === 4)
                        setTimeout(
                        d, 0);
                    else {
                        g=++Nc;
                        if (Mc) {
                            if (!Lc) {
                                Lc = {};
                                q(a).unload(Mc)
                            }
                            Lc[g] = d
                        }
                        j.onreadystatechange = d
                    }
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    });
    var Qc, Rc, Sc = /^(?:toggle|show|hide)$/, Tc = new RegExp("^(?:([-+])=|)(" + r + ")([a-z%]*)$", "i"), Uc = /queueHooks$/, Vc = [_c], Wc = {
        "*": [function(a, b)
        {
            var c, d, e = this.createTween(a, b), f = Tc.exec(b), g = e.cur(), i =+ g || 0, j = 1, k = 20;
            if (f) {
                c =+ f[2];
                d = f[3] || (q.cssNumber[a] ? "" : "px");
                if (d !== "px" && i) {
                    i = q.css(e.elem, a, !0) || c || 1;
                    do {
                        j = j || ".5";
                        i/=j;
                        q.style(e.elem, a, i + d)
                    }
                    while (j !== (j = e.cur() / g) && j !== 1&&--k)
                    }
                e.unit = d;
                e.start =
                i;
                e.end = f[1] ? i + (f[1] + 1) * c : c
            }
            return e
        }
        ]
    };
    q.Animation = q.extend(Zc, {
        tweener: function(a, b) {
            if (q.isFunction(a)) {
                b = a;
                a = ["*"]
            } else 
                a = a.split(" ");
            var c, d = 0, e = a.length;
            for (; d < e; d++) {
                c = a[d];
                Wc[c] = Wc[c] || [];
                Wc[c].unshift(b)
            }
        }, prefilter : function(a, b) {
            b ? Vc.unshift(a) :
            Vc.push(a)
        }
    });
    q.Tween = ad;
    ad.prototype = {
        constructor: ad,
        init: function(a, b, c, d, e, f) {
            this.elem = a;
            this.prop = c;
            this.easing = e || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = f || (q.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = ad.propHooks
            [this.prop];
            return a && a.get ? a.get(this) : ad.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = ad.propHooks[this.prop];
            this.options.duration ? this.pos = b = q.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a;
            this.now = (this
            .end - this.start) * b + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            c && c.set ? c.set(this) : ad.propHooks._default.set(this);
            return this
        }
    };
    ad.prototype.init.prototype = ad.prototype;
    ad.propHooks = {
        _default: {
            get: function(a) {
                var b;
                if (a.
                elem[a.prop] == null||!!a.elem.style && a.elem.style[a.prop] != null) {
                    b = q.css(a.elem, a.prop, !1, "");
                    return !b || b === "auto" ? 0 : b
                }
                return a.elem[a.prop]
            },
            set: function(a) {
                q.fx.step[a.prop] ? q.fx.step[a.prop](a) : a.elem.style && (a.elem.style[q.cssProps[a.prop]] != null || q.cssHooks
                [a.prop]) ? q.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    ad.propHooks.scrollTop = ad.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    q.each(["toggle", "show", "hide"], function(a, b) {
        var c = q.fn[b];
        q
        .fn[b] = function(d, e, f) {
            return d == null || typeof d == "boolean" ||!a && q.isFunction(d) && q.isFunction(e) ? c.apply(this, arguments) : this.animate(bd(b, !0), d, e, f)
        }
    });
    q.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(ac).css("opacity", 0).show().end().animate({
                opacity
                : b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = q.isEmptyObject(a), f = q.speed(b, c, d), g = function() {
                var b = Zc(this, q.extend({}, a), f);
                e && b.stop(!0)
            };
            return e || f.queue===!1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete 
                a.stop;
                b(d)
            };
            if (typeof a != "string") {
                d = c;
                c = a;
                a = b
            }
            c && a!==!1 && this.queue(a || "fx", []);
            return this.each(function() {
                var b=!0, c = a != null && a + "queueHooks", f = q.timers, g = q._data(this);
                if (c)
                    g[c] && g[c].stop && e(g[c]);
                else 
                    for (c in g)
                        g[c] && g[c].stop && Uc.test(c) && e(g[c]);
                for (
                c = f.length; c--;)
                    if (f[c].elem === this && (a == null || f[c].queue === a)) {
                        f[c].anim.stop(d);
                        b=!1;
                        f.splice(c, 1)
                    }(b ||!d) && q.dequeue(this, a)
            })
        }
    });
    q.each({
        slideDown: bd("show"),
        slideUp: bd("hide"),
        slideToggle: bd("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle
        : {
            opacity: "toggle"
        }
    }, function(a, b) {
        q.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    });
    q.speed = function(a, b, c) {
        var d = a && typeof a == "object" ? q.extend({}, a): {
            complete: c ||!c && b || q.isFunction(a) && a,
            duration: a,
            easing: c && b || b&&!q.isFunction(b) && b
        };
        d.duration =
        q.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in q.fx.speeds ? q.fx.speeds[d.duration] : q.fx.speeds._default;
        if (d.queue == null || d.queue===!0)
            d.queue = "fx";
        d.old = d.complete;
        d.complete = function() {
            q.isFunction(d.old) && d.old.call(this);
            d.queue && q.dequeue
            (this, d.queue)
        };
        return d
    };
    q.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    };
    q.timers = [];
    q.fx = ad.prototype.init;
    q.fx.tick = function() {
        var a, c = q.timers, d = 0;
        Qc = q.now();
        for (; d < c.length; d++) {
            a = c[d];
            !a() && c[d] === a && c.splice
            (d--, 1)
        }
        c.length || q.fx.stop();
        Qc = b
    };
    q.fx.timer = function(a) {
        a() && q.timers.push(a)&&!Rc && (Rc = setInterval(q.fx.tick, q.fx.interval))
    };
    q.fx.interval = 13;
    q.fx.stop = function() {
        clearInterval(Rc);
        Rc = null
    };
    q.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    q.fx.step = {};
    q.expr &&
    q.expr.filters && (q.expr.filters.animated = function(a) {
        return q.grep(q.timers, function(b) {
            return a === b.elem
        }).length
    });
    var cd = /^(?:body|html)$/i;
    q.fn.offset = function(a) {
        if (arguments.length)
            return a === b ? this : this.each(function(b) {
                q.offset.setOffset(this, a, b)
            });
        var c, d, e, f, g, i, j, k = {
            top: 0,
            left: 0
        }, l = this[0], m = l && l.ownerDocument;
        if (!m)
            return;
        if ((d = m.body) === l)
            return q.offset.bodyOffset(l);
        c = m.documentElement;
        if (!q.contains(c, l))
            return k;
        typeof l.getBoundingClientRect != "undefined" && (k = l.getBoundingClientRect());
        e = dd
        (m);
        f = c.clientTop || d.clientTop || 0;
        g = c.clientLeft || d.clientLeft || 0;
        i = e.pageYOffset || c.scrollTop;
        j = e.pageXOffset || c.scrollLeft;
        return {
            top: k.top + i - f,
            left: k.left + j - g
        }
    };
    q.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop, c = a.offsetLeft;
            if (q.support.doesNotIncludeMarginInBodyOffset
            ) {
                b += parseFloat(q.css(a, "marginTop")) || 0;
                c += parseFloat(q.css(a, "marginLeft")) || 0
            }
            return {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = q.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = q(a), f = e.offset(), g = q.css(a, "top"), i = q.css(a, "left"
            ), j = (d === "absolute" || d === "fixed") && q.inArray("auto", [g, i])>-1, k = {}, l = {}, m, n;
            if (j) {
                l = e.position();
                m = l.top;
                n = l.left
            } else {
                m = parseFloat(g) || 0;
                n = parseFloat(i) || 0
            }
            q.isFunction(b) && (b = b.call(a, c, f));
            b.top != null && (k.top = b.top - f.top + m);
            b.left != null && (k.left = b.left -
            f.left + n);
            "using"in b ? b.using.call(a, k) : e.css(k)
        }
    };
    q.fn.extend({
        position: function() {
            if (!this[0])
                return;
            var a = this[0], b = this.offsetParent(), c = this.offset(), d = cd.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            }
            : b.offset();
            c.top -= parseFloat(q.css(a, "marginTop")) || 0;
            c.left -=
            parseFloat(q.css(a, "marginLeft")) || 0;
            d.top += parseFloat(q.css(b[0], "borderTopWidth")) || 0;
            d.left += parseFloat(q.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent ||
                e.body;
                while (a&&!cd.test(a.nodeName) && q.css(a, "position") === "static")
                    a = a.offsetParent;
                return a || e.body
            })
        }
    });
    q.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        q.fn[a] = function(e) {
            return q.access(this, function(a, e, f) {
                var g =
                dd(a);
                if (f === b)
                    return g ? c in g ? g[c] : g.document.documentElement[e] : a[e];
                g ? g.scrollTo(d ? q(g).scrollLeft() : f, d ? f : q(g).scrollTop()) : a[e] = f
            }, a, e, arguments.length, null)
        }
    });
    q.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        q.each({
            padding: "inner" + a,
            content: c,
            ""
            : "outer" + a
        }, function(d, e) {
            q.fn[e] = function(e, f) {
                var g = arguments.length && (d || typeof e != "boolean"), i = d || (e===!0 || f===!0 ? "margin" : "border");
                return q.access(this, function(c, d, e) {
                    var f;
                    if (q.isWindow(c))
                        return c.document.documentElement["client" + a];
                    if (c.nodeType === 9
                    ) {
                        f = c.documentElement;
                        return Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])
                    }
                    return e === b ? q.css(c, d, e, i) : q.style(c, d, e, i)
                }, c, g ? e : b, g, null)
            }
        })
    });
    a.jQuery = a.$ = q;
    typeof define == "function" && define.amd && define.amd.jQuery &&
    define("jquery", [], function() {
        return q
    })
})(window);
(function(a) {
    typeof define == "function" ? define(a) : typeof YUI == "function" ? YUI.add("es5", a) : a()
})(function() {
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError("Function.prototype.bind called on incompatible " +
            c);
        var e = d.call(arguments, 1), f = function() {
            if (this instanceof f) {
                var a = function() {};
                a.prototype = c.prototype;
                var g = new a, i = c.apply(g, e.concat(d.call(arguments)));
                return Object(i) === i ? i : g
            }
            return c.apply(b, e.concat(d.call(arguments)))
        };
        return f
    });
    var a = Function
    .prototype.call, b = Array.prototype, c = Object.prototype, d = b.slice, e = a.bind(c.toString), f = a.bind(c.hasOwnProperty), g, i, j, k, l;
    if (l = f(c, "__defineGetter__")) {
        g = a.bind(c.__defineGetter__);
        i = a.bind(c.__defineSetter__);
        j = a.bind(c.__lookupGetter__);
        k = a.bind(c.__lookupSetter__
        )
    }
    Array.isArray || (Array.isArray = function(b) {
        return e(b) == "[object Array]"
    });
    Array.prototype.forEach || (Array.prototype.forEach = function(b) {
        var c = v(this), d = arguments[1], f =- 1, g = c.length>>>0;
        if (e(b) != "[object Function]")
            throw new TypeError;
        while (++f < g)
            f in c &&
            b.call(d, c[f], f, c)
    });
    Array.prototype.map || (Array.prototype.map = function(b) {
        var c = v(this), d = c.length>>>0, f = Array(d), g = arguments[1];
        if (e(b) != "[object Function]")
            throw new TypeError(b + " is not a function");
        for (var i = 0; i < d; i++)
            i in c && (f[i] = b.call(g, c[i], i, c))
            ;
        return f
    });
    Array.prototype.filter || (Array.prototype.filter = function(b) {
        var c = v(this), d = c.length>>>0, f = [], g, i = arguments[1];
        if (e(b) != "[object Function]")
            throw new TypeError(b + " is not a function");
        for (var j = 0; j < d; j++)
            if (j in c) {
                g = c[j];
                b.call(i, g, j, c) && f.push
                (g)
            }
        return f
    });
    Array.prototype.every || (Array.prototype.every = function(b) {
        var c = v(this), d = c.length>>>0, f = arguments[1];
        if (e(b) != "[object Function]")
            throw new TypeError(b + " is not a function");
        for (var g = 0; g < d; g++)
            if (g in c&&!b.call(f, c[g], g, c))
                return !1;
        return !0
    });
    Array.prototype.some || (Array.prototype.some = function(b) {
        var c = v(this), d = c.length>>>0, f = arguments[1];
        if (e(b) != "[object Function]")
            throw new TypeError(b + " is not a function");
        for (var g = 0; g < d; g++)
            if (g in c && b.call(f, c[g], g, c))
                return !0;
        return !1
    });
    Array.prototype
    .reduce || (Array.prototype.reduce = function(b) {
        var c = v(this), d = c.length>>>0;
        if (e(b) != "[object Function]")
            throw new TypeError(b + " is not a function");
        if (!d && arguments.length == 1)
            throw new TypeError("reduce of empty array with no initial value");
        var f = 0, g;
        if (arguments
        .length >= 2)
            g = arguments[1];
        else 
            do {
                if (f in c) {
                    g = c[f++];
                    break
                }
                if (++f >= d)
                    throw new TypeError("reduce of empty array with no initial value")
            }
        while (!0);
        for (; f < d; f++)
            f in c && (g = b.call(void 0, g, c[f], f, c));
        return g
    });
    Array.prototype.reduceRight || (Array.prototype.reduceRight =
    function(b) {
        var c = v(this), d = c.length>>>0;
        if (e(b) != "[object Function]")
            throw new TypeError(b + " is not a function");
        if (!d && arguments.length == 1)
            throw new TypeError("reduceRight of empty array with no initial value");
        var f, g = d - 1;
        if (arguments.length >= 2)
            f = arguments
            [1];
        else 
            do {
                if (g in c) {
                    f = c[g--];
                    break
                }
                if (--g < 0)
                    throw new TypeError("reduceRight of empty array with no initial value")
            }
        while (!0);
        do 
            g in this && (f = b.call(void 0, f, c[g], g, c));
        while (g--);
        return f
    });
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b)
    {
        var c = v(this), d = c.length>>>0;
        if (!d)
            return - 1;
        var e = 0;
        arguments.length > 1 && (e = t(arguments[1]));
        e = e >= 0 ? e : Math.max(0, d + e);
        for (; e < d; e++)
            if (e in c && c[e] === b)
                return e;
        return - 1
    });
    Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(b) {
        var c = v(this), d =
        c.length>>>0;
        if (!d)
            return - 1;
        var e = d - 1;
        arguments.length > 1 && (e = Math.min(e, t(arguments[1])));
        e = e >= 0 ? e : d - Math.abs(e);
        for (; e >= 0; e--)
            if (e in c && b === c[e])
                return e;
        return - 1
    });
    if (!Object.keys) {
        var m=!0, n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf"
        , "propertyIsEnumerable", "constructor"], o = n.length;
        for (var p in{
            toString: null
        })
            m=!1;
        Object.keys = function w(a) {
            if (typeof a != "object" && typeof a != "function" || a === null)
                throw new TypeError("Object.keys called on a non-object");
            var w = [];
            for (var b in a)
                f(a, b) && w.push
                (b);
            if (m)
                for (var c = 0, d = o; c < d; c++) {
                    var e = n[c];
                    f(a, e) && w.push(e)
                }
            return w
        }
    }
    if (!Date.prototype.toISOString || (new Date( - 621987552e5)).toISOString().indexOf("-000001")===-1)
        Date.prototype.toISOString = function() {
            var b, c, d, e;
            if (!isFinite(this))
                throw new RangeError
                ("Date.prototype.toISOString called on non-finite value.");
                b = [this.getUTCMonth() + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
                e = this.getUTCFullYear();
                e = (e < 0 ? "-" : e > 9999 ? "+" : "") + ("00000" + Math.abs(e)).slice(0 <= e && e <= 9999?-4
                : - 6);
                c = b.length;
                while (c--) {
                    d = b[c];
                    d < 10 && (b[c] = "0" + d)
                }
                return e + "-" + b.slice(0, 2).join("-") + "T" + b.slice(2).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice( - 3) + "Z"
            };
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    });
    Date.prototype.toJSON || (Date.
    prototype.toJSON = function(b) {
        if (typeof this.toISOString != "function")
            throw new TypeError("toISOString property is not callable");
        return this.toISOString()
    });
    if (!Date.parse || Date.parse("+275760-09-13T00:00:00.000Z") !== 864e13)
        Date = function(a) {
            var b = function e
            (b, c, d, h, f, g, i) {
                var j = arguments.length;
                if (this instanceof a) {
                    var k = j == 1 && String(b) === b ? new a(e.parse(b)): j >= 7 ? new a(b, c, d, h, f, g, i): j >= 6 ? new a(b, c, d, h, f, g): j >= 5 ? new a(b, c, d, h, f): j >= 4 ? new a(b, c, d, h): j >= 3 ? new a(b, c, d): j >= 2 ? new a(b, c): j >= 1 ? new a(b): new a;
                    k.constructor =
                    e;
                    return k
                }
                return a.apply(this, arguments)
            }, c = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(?:Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$");
            for (var d in a)
                b[d] = a[d];
                b.now = a.now;
                b.UTC = a.UTC;
                b.prototype =
                a.prototype;
                b.prototype.constructor = b;
                b.parse = function(d) {
                    var e = c.exec(d);
                    if (e) {
                        e.shift();
                        for (var f = 1; f < 7; f++) {
                            e[f] =+ (e[f] || (f < 3 ? 1 : 0));
                            f == 1 && e[f]--
                        }
                        var g =+ e.pop(), i =+ e.pop(), j = e.pop(), k = 0;
                        if (j) {
                            if (i > 23 || g > 59)
                                return NaN;
                                k = (i * 60 + g) * 6e4 * (j == "+"?-1 : 1)
                            }
                            var l =+ e
                            [0];
                            if (0 <= l && l <= 99) {
                                e[0] = l + 400;
                                return a.UTC.apply(this, e) + k - 126227808e5
                            }
                            return a.UTC.apply(this, e) + k
                    }
                    return a.parse.apply(this, arguments)
                };
                return b
            }(Date);
    var q = "	\n\f\r   ᠎             　\u2028\u2029﻿";
    if (!String.prototype.trim || q.trim()) {
        q = "[" + q + "]";
        var r = new 
        RegExp("^" + q + q + "*"), s = new RegExp(q + q + "*$");
        String.prototype.trim = function() {
            if (this === undefined || this === null)
                throw new TypeError("can't convert " + this + " to object");
            return String(this).replace(r, "").replace(s, "")
        }
    }
    var t = function(a) {
        a =+ a;
        a !== a ? a = 0 : a !== 0 && a !== 1 / 0 &&
        a!==-Infinity && (a = (a > 0||-1) * Math.floor(Math.abs(a)));
        return a
    }, u = "a"[0] != "a", v = function(a) {
        if (a == null)
            throw new TypeError("can't convert " + a + " to object");
        return u && typeof a == "string" && a ? a.split("") : Object(a)
    }
});
(function(a) {
    typeof define == "function" ? define(a) : typeof YUI == "function" ? YUI.add("es5-sham", a) : a()
})(function() {
    function b(a) {
        try {
            Object.defineProperty(a, "sentinel", {});
            return "sentinel"in a
        } catch (b) {}
    }
    Object.getPrototypeOf || (Object.getPrototypeOf = function(b
    ) {
        return b.__proto__ || (b.constructor ? b.constructor.prototype : prototypeOfObject)
    });
    if (!Object.getOwnPropertyDescriptor) {
        var a = "Object.getOwnPropertyDescriptor called on a non-object: ";
        Object.getOwnPropertyDescriptor = function(c, d) {
            if (typeof c != "object" && typeof 
            c != "function" || c === null)
                throw new TypeError(a + c);
            if (!owns(c, d))
                return;
            var e = {
                enumerable: !0,
                configurable: !0
            };
            if (supportsAccessors) {
                var f = c.__proto__;
                c.__proto__ = prototypeOfObject;
                var g = lookupGetter(c, d), i = lookupSetter(c, d);
                c.__proto__ = f;
                if (g || i) {
                    g && (e.get = g
                    );
                    i && (e.set = i);
                    return e
                }
            }
            e.value = c[d];
            return e
        }
    }
    Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(b) {
        return Object.keys(b)
    });
    Object.create || (Object.create = function(b, c) {
        var d;
        if (b === null)
            d = {
                __proto__: null
            };
        else {
            if (typeof b != "object")
                throw new 
                TypeError("typeof prototype[" + typeof b + "] != 'object'");
            var e = function() {};
            e.prototype = b;
            d = new e;
            d.__proto__ = b
        }
        c !== void 0 && Object.defineProperties(d, c);
        return d
    });
    if (Object.defineProperty) {
        var c = b({}), d = typeof document == "undefined" || b(document.createElement
        ("div"));
        if (!c ||!d)
            var e = Object.defineProperty
    }
    if (!Object.defineProperty || e) {
        var f = "Property description must be an object: ", g = "Object.defineProperty called on non-object: ", i = "getters & setters can not be defined on this javascript engine";
        Object.defineProperty =
        function(b, c, d) {
            if (typeof b != "object" && typeof b != "function" || b === null)
                throw new TypeError(g + b);
            if (typeof d != "object" && typeof d != "function" || d === null)
                throw new TypeError(f + d);
            if (e)
                try {
                    return e.call(Object, b, c, d)
            } catch (j) {}
            if (owns(d, "value"))
                if (supportsAccessors &&
                (lookupGetter(b, c) || lookupSetter(b, c))) {
                    var k = b.__proto__;
                    b.__proto__ = prototypeOfObject;
                    delete b[c];
                    b[c] = d.value;
                    b.__proto__ = k
                } else 
                    b[c] = d.value;
            else {
                if (!supportsAccessors)
                    throw new TypeError(i);
                owns(d, "get") && defineGetter(b, c, d.get);
                owns(d, "set") && defineSetter
                (b, c, d.set)
            }
            return b
        }
    }
    Object.defineProperties || (Object.defineProperties = function(b, c) {
        for (var d in c)
            owns(c, d) && d != "__proto__" && Object.defineProperty(b, d, c[d]);
        return b
    });
    Object.seal || (Object.seal = function(b) {
        return b
    });
    Object.freeze || (Object.freeze = function(
    b) {
        return b
    });
    try {
        Object.freeze(function() {})
    } catch (j) {
        Object.freeze = function(b) {
            return function(c) {
                return typeof c == "function" ? c : b(c)
            }
        }(Object.freeze)
    }
    Object.preventExtensions || (Object.preventExtensions = function(b) {
        return b
    });
    Object.isSealed || (Object.isSealed =
    function(b) {
        return !1
    });
    Object.isFrozen || (Object.isFrozen = function(b) {
        return !1
    });
    Object.isExtensible || (Object.isExtensible = function(b) {
        if (Object(b) !== b)
            throw new TypeError;
        var c = "";
        while (owns(b, c))
            c += "?";
        b[c]=!0;
        var d = owns(b, c);
        delete b[c];
        return d
    })
});
(function(a, b) {
    function t(a) {
        for (var b = 1, c; c = arguments[b]; b++)
            for (var d in c)
                a[d] = c[d];
        return a
    }
    function u(a) {
        return Array.prototype.slice.call(a)
    }
    function w(a, b) {
        for (var c = 0, d; d = a[c]; c++)
            if (b == d)
                return c;
        return - 1
    }
    function x() {
        var a = u(arguments), b = [];
        for (var c = 0
        , d = a.length; c < d; c++)
            a[c].length > 0 && b.push(a[c].replace(/\/$/, ""));
        return b.join("/")
    }
    function y(a, b, c) {
        var d = b.split("/"), e = a;
        while (d.length > 1) {
            var f = d.shift();
            e = e[f] = e[f] || {}
        }
        e[d[0]] = c
    }
    function z() {}
    function A(a, b) {
        a && (this.id = this.path = this.resolvePath(a
        ));
        this.force=!!b
    }
    function B(a, b) {
        this.id = a;
        this.path = this.resolvePath(a);
        this.force = b
    }
    function C(a, b) {
        this.id = a;
        this.contents = b;
        this.dep = N(a);
        this.deps = [];
        this.path = this.dep.path
    }
    function D(a, b) {
        var d;
        this.body = b;
        if (!a)
            if (c) {
                d = i || J();
                if (d) {
                    this.setId(d.id
                    );
                    delete j[d.scriptId];
                    this.then(function(a) {
                        d.complete.call(d, a)
                    })
                }
            } else 
                g = this;
        else {
            this.setId(a);
            (d = p["module_" + this.id]) && this.then(function(a) {
                d.complete.call(d, a)
            })
        }
    }
    function E(a) {
        var b = [];
        for (var c = 0, d; d = a[c]; c++)
            d instanceof H ? b = b.concat(E(d.deps))
            : d instanceof B && b.push(d);
        return b
    }
    function F() {
        for (var a = 0, b; b = this.deps[a]; a++)
            if (b.forceFetch)
                b.forceFetch();
            else {
                b.force=!0;
                b.start()
            }
        return this
    }
    function G(a) {
        this.deps = a;
        this.deps.length == 0 && this.complete()
    }
    function H(a) {
        this.deps = a
    }
    function I() {
        this
        .entries = {}
    }
    function J() {
        for (var a in d)
            if (d[a].readyState == "interactive")
                return j[d[a].id]
    }
    function K() {
        var a = u(arguments), b, c;
        typeof a[0] == "string" && (b = a.shift());
        c = a.shift();
        return new D(b, c)
    }
    function L() {
        var a = u(arguments), b;
        typeof a[a.length - 1] == "function" &&
        (b = a.pop());
        var c = new G(M(a));
        b && c.then(b);
        return c
    }
    function M(a) {
        var b = [];
        for (var c = 0, d; d = a[c]; c++) {
            typeof d == "string" && (d = N(d));
            v(d) && (d = new H(M(d)));
            b.push(d)
        }
        return b
    }
    function N(a) {
        var b, c;
        for (var d = 0, e; e = L.matchers[d]; d++) {
            var f = e[0], g = e[1];
            if (b = a.match
            (f))
                return g(a)
        }
        throw new Error(a + " was not recognised by loader")
    }
    function P() {
        a.using = k;
        a.provide = l;
        a.loadrunner = m;
        return O
    }
    function Q(a) {
        function d(b, d) {
            c[d] = c[d] || {};
            c[d][a] = {
                key: a,
                start: b.startTime,
                end: b.endTime,
                duration: b.endTime - (b.startTime || (new Date
                ).getTime()),
                status: d,
                origin: b
            }
        }
        var b, c = {};
        if (a && ((b = o[a]) || (b = p[a]) || (b = n[a])))
            return {
                start: b.startTime,
                end: b.endTime,
                duration: b.endTime - (b.startTime || (new Date).getTime()),
                origin: b
            };
        for (var a in o)
            d(o[a], "met");
        for (var a in p)
            d(p[a], "inProgress");
        for (var a in 
        n)
            d(n[a], "paused");
        return c
    }
    function R() {
        n = {};
        o = {};
        p = {};
        L.bundles = new I;
        B.exports = {};
        D.provided = {}
    }
    function S(a) {
        return L.bundles.get(a) || undefined
    }
    var c = a.attachEvent&&!a.opera, d = b.getElementsByTagName("script"), e, f = b.createElement("script"), g, i, j = {}, k = a.
    using, l = a.provide, m = a.loadrunner, n = {}, o = {}, p = {};
    for (var q = 0, r; r = d[q]; q++)
        if (r.src.match(/loadrunner\.js(\?|#|$)/)) {
            e = r;
            break
        }
    var s = function() {
        var a = 0;
        return function() {
            return a++
        }
    }(), v = Array.isArray || function(a) {
        return a.constructor == Array
    };
    z.prototype.then =
    function(b) {
        this.callbacks = this.callbacks || [];
        this.callbacks.push(b);
        this.completed ? b.apply(a, this.results) : this.callbacks.length == 1 && this.start();
        return this
    };
    z.prototype.key = function() {
        this.id || (this.id = s());
        return "dependency_" + this.id
    };
    z.prototype.start =
    function() {
        var a = this, b, c;
        this.startTime = (new Date).getTime();
        if (b = o[this.key()])
            this.complete.apply(this, b.results);
        else if (c = p[this.key()])
            c.then(function() {
                a.complete.apply(a, arguments)
            });
        else if (this.shouldFetch()) {
            p[this.key()] = this;
            this.fetch()
        } else {
            n[this.key()] = n[this.key()] || [];
            n[this.key()].push(this)
        }
    };
    z.prototype.shouldFetch = function() {
        return !0
    };
    z.prototype.complete = function() {
        var b;
        this.endTime = (new Date).getTime();
        delete p[this.key()];
        o[this.key()] || (o[this.key()] = this);
        if (!this.completed) {
            this
            .results = u(arguments);
            this.completed=!0;
            if (this.callbacks)
                for (var c = 0, d; d = this.callbacks[c]; c++)
                    d.apply(a, this.results);
            if (b = n[this.key()]) {
                for (var c = 0, e; e = b[c]; c++)
                    e.complete.apply(e, arguments);
                delete n[this.key()]
            }
        }
    };
    A.autoFetch=!0;
    A.prototype.start = function(
    ) {
        var a = this, b;
        (b = S(this.id)) ? b.then(function() {
            a.start()
        }) : z.prototype.start.call(this)
    };
    A.xhrTransport = function() {
        var a, b = this;
        if (window.XMLHttpRequest)
            a = new window.XMLHttpRequest;
        else 
            try {
                a = new window.ActiveXObject("Microsoft.XMLHTTP")
        } catch (c) {
            return new 
            Error("XHR not found.")
        }
        a.onreadystatechange = function() {
            var c;
            a.readyState == 4 && b.loaded(a.responseText)
        };
        a.open("GET", this.path, !0);
        a.send(null)
    };
    A.scriptTagTransport = function() {
        var b = f.cloneNode(!1), c = this;
        this.scriptId = "LR" + s();
        b.id = this.scriptId;
        b.type = "text/javascript"
        ;
        b.async=!0;
        b.onerror = function() {
            throw new Error(c.path + " not loaded")
        };
        b.onreadystatechange = b.onload = function(b) {
            b = a.event || b;
            if (b.type == "load" || w(["loaded", "complete"], this.readyState)>-1) {
                this.onreadystatechange = null;
                c.loaded()
            }
        };
        b.src = this.path;
        i = this;
        d[0].parentNode.insertBefore(b, d[0]);
        i = null;
        j[this.scriptId] = this
    };
    A.prototype = new z;
    A.prototype.resolvePath = function(a) {
        a = a.replace(/^\$/, L.path.replace(/\/$/, "") + "/");
        return a
    };
    A.prototype.key = function() {
        return "script_" + this.id
    };
    A.prototype.shouldFetch = function(
    ) {
        return A.autoFetch || this.force
    };
    A.prototype.fetch = A.scriptTagTransport;
    A.prototype.loaded = function() {
        this.complete()
    };
    B.exports = {};
    B.prototype = new A;
    B.prototype.start = function() {
        var a = this, b, c;
        (b = D.provided[this.id]) ? b.then(function(b) {
            a.complete.call(a,
            b)
        }) : (c = S(this.id)) ? c.then(function() {
            a.start()
        }) : A.prototype.start.call(this)
    };
    B.prototype.key = function() {
        return "module_" + this.id
    };
    B.prototype.resolvePath = function(a) {
        return x(L.path, a + ".js")
    };
    B.prototype.loaded = function() {
        var a, b, d = this;
        if (!c) {
            a = g;
            g = null
            ;
            if (a) {
                a.setId(this.id);
                a.then(function(a) {
                    d.complete.call(d, a)
                })
            } else if (!D.provided[this.id])
                throw new Error("Tried to load '" + this.id + "' as a module, but it didn't have a 'provide()' in it.")
        }
    };
    C.prototype = new A;
    C.prototype.start = function() {
        var a = this, b
        , c, d;
        for (var e = 0, f = this.contents.length; e < f; e++) {
            c = N(this.contents[e]);
            this.deps.push(c);
            d = c.key();
            !o[d]&&!p[d]&&!n[d] && (n[d] = this)
        }
        A.prototype.start.call(this)
    };
    C.prototype.loaded = function() {
        var a, b, c = this, d, e;
        for (var f = 0, g = this.deps.length; f < g; f++) {
            d = this
            .deps[f];
            e = d.key();
            delete n[e];
            o[e] = this
        }
        A.prototype.loaded.call(this)
    };
    D.provided = {};
    D.prototype = new z;
    D.prototype.key = function() {
        this.id || (this.id = "anon_" + s());
        return "definition_" + this.id
    };
    D.prototype.setId = function(a) {
        this.id = a;
        D.provided[a] = this
    };
    D.prototype
    .fetch = function() {
        var a = this;
        typeof this.body == "object" ? this.complete(this.body) : typeof this.body == "function" && this.body(function(b) {
            a.complete(b)
        })
    };
    D.prototype.complete = function(a) {
        a = a || {};
        this.id && (this.exports = B.exports[this.id] = a);
        z.prototype.complete
        .call(this, a)
    };
    G.prototype = new z;
    G.prototype.fetch = function() {
        function b() {
            var b = [];
            for (var c = 0, d; d = a.deps[c]; c++) {
                if (!d.completed)
                    return;
                d.results.length > 0 && (b = b.concat(d.results))
            }
            a.complete.apply(a, b)
        }
        var a = this;
        for (var c = 0, d; d = this.deps[c]; c++)
            d.then(b
            );
        return this
    };
    G.prototype.forceFetch = F;
    G.prototype.as = function(a) {
        var b = this;
        return this.then(function() {
            var c = E(b.deps), d = {};
            for (var e = 0, f; f = c[e]; e++)
                y(d, f.id, arguments[e]);
            a.apply(this, [d].concat(u(arguments)))
        })
    };
    H.prototype = new z;
    H.prototype.fetch = function(
    ) {
        var a = this, b = 0, c = [];
        (function d() {
            var e = a.deps[b++];
            e ? e.then(function(a) {
                e.results.length > 0 && (c = c.concat(e.results));
                d()
            }) : a.complete.apply(a, c)
        })();
        return this
    };
    H.prototype.forceFetch = F;
    I.prototype.push = function(a) {
        var b;
        for (var c in a) {
            b = new C(c, a[c]);
            for (var d = 0, e; e = a[c][d]; d++) {
                this.entries[e] = this.entries[e] || [];
                this.entries[e].push(b)
            }
        }
    };
    I.prototype.get = function(a) {
        if (typeof this.entries[a] == "undefined")
            return null;
        for (var b = 0, c; c = this.entries[a][b]; b++)
            if (typeof c.startTime != "undefined")
                return c;
        return this
        .entries[a][0]
    };
    var O = function(a) {
        return a(L, K, O)
    };
    O.Script = A;
    O.Module = B;
    O.Collection = G;
    O.Sequence = H;
    O.Definition = D;
    O.Dependency = z;
    O.noConflict = P;
    O.debug = Q;
    O.reset = R;
    a.loadrunner = O;
    a.using = L;
    a.provide = K;
    L.path = "";
    L.bundles = new I;
    L.matchers = [];
    L.matchers.add =
    function(a, b) {
        this.unshift([a, b])
    };
    L.matchers.add(/^(lr!)?[a-zA-Z0-9_\/.-]+$/, function(a) {
        var b = new B(a.replace(/^lr!/, ""));
        return b
    });
    L.matchers.add(/(^script!|\.js$)/, function(a) {
        var b = new A(a.replace(/^script!/, ""));
        return b
    });
    if (e) {
        L.path = e.getAttribute
        ("data-path") || e.src.split(/loadrunner\.js/)[0] || "";
        (main = e.getAttribute("data-main")) && L.apply(a, main.split(/\s*,\s*/)).then(function() {})
    }
})(this, document);
(function(a) {
    loadrunner(function(b, c) {
        function e(a, b) {
            return new loadrunner.Definition(a, function(a) {
                a(b())
            })
        }
        var d;
        a.deferred = e;
        b.matchers.add(/(^script!|\.js(!?)$)/, function(a) {
            var b=!!a.match(/!$/);
            a = a.replace(/!$/, "");
            if (d = loadrunner.Definition.provided
            [a])
                return d;
            var c = new loadrunner.Script(a, b);
            b && c.start();
            return c
        })
    })
})(this);
(function(a) {
    loadrunner(function(b, c) {
        function d(a) {
            return Array.prototype.slice.call(a)
        }
        function f(a, b) {
            for (var c = 0, d; d = a[c]; c++)
                if (b == d)
                    return c;
            return - 1
        }
        function g(a, b) {
            var c = b.id || "", d = c.split("/");
            d.pop();
            var e = a.split("/"), f=!1;
            while (e[0] == ".." && d.length
            ) {
                d.pop();
                e.shift();
                f=!0
            }
            if (e[0] == ".") {
                e.shift();
                f=!0
            }
            f && (e = d.concat(e));
            return e.join("/")
        }
        function i(a, b) {
            function d(a) {
                return loadrunner.Module.exports[g(a.replace(/^.+!/, ""), b)]
            }
            var c = [];
            for (var e = 0, f = a.length; e < f; e++) {
                if (a[e] == "require") {
                    c.push(d);
                    continue
                }
                if (a[e] == "exports") {
                    b.exports = b.exports || {};
                    c.push(b.exports);
                    continue
                }
                if (a[e] == "module") {
                    c.push(b);
                    continue
                }
                c.push(d(a[e]))
            }
            return c
        }
        function j() {
            var a = d(arguments), c = [], j, k;
            typeof a[0] == "string" && (j = a.shift());
            e(a[0]) && (c = a.shift());
            k = a.shift();
            var l = new 
            loadrunner.Definition(j, function(a) {
                function l() {
                    var b = i(d(c), j), e;
                    typeof k == "function" ? e = k.apply(j, b) : e = k;
                    typeof e == "undefined" && (e = j.exports);
                    a(e)
                }
                var e = [], j = this;
                for (var m = 0, n = c.length; m < n; m++) {
                    var o = c[m];
                    f(["require", "exports", "module"], o)==-1 && e.push(
                    g(o, j))
                }
                e.length > 0 ? b.apply(this, e.concat(l)) : l()
            });
            return l
        }
        var e = Array.isArray || function(a) {
            return a.constructor == Array
        };
        a.define = j
    })
})(this);
loadrunner(function(a, b, c, d) {
    function e(a) {
        this.id = this.path = a
    }
    e.loaded = {};
    e.prototype = new c.Dependency;
    e.prototype.start = function() {
        if (e.loaded[this.path])
            this.complete();
        else {
            e.loaded[this.path]=!0;
            this.load()
        }
    };
    e.prototype.load = function() {
        function j() {
            if (
            $(f).length > 0)
                return i();
            c += 1;
            c < 200 ? b = setTimeout(j, 50) : i()
        }
        function k() {
            var d;
            try {
                d=!!a.sheet.cssRules
            } catch (e) {
                c += 1;
                c < 200 ? b = setTimeout(k, 50) : i();
                return 
            }
            i()
        }
        var a, b, c, d = document, e = this.path, f = 'link[href="' + e + '"]', g = $.browser;
        if ($(f).length > 0)
            return this.complete
            ();
        var i = function() {
            clearTimeout(b);
            a.onload = a.onerror = null;
            this.complete()
        }.bind(this);
        if (g.webkit || g.mozilla) {
            c = 0;
            if (g.webkit)
                j();
            else {
                a = d.createElement("style");
                a.innerHTML = '@import "' + e + '";';
                k(a)
            }
        }
        if (!a) {
            a = d.createElement("link");
            a.setAttribute("rel", "stylesheet"
            );
            a.setAttribute("href", e);
            a.setAttribute("charset", "utf-8")
        }
        a.onload = a.onerror = i;
        (d.head || d.getElementsByTagName("head")[0]).insertBefore(a, d.getElementById("async-css-placeholder"))
    };
    a.matchers.add(/^css!/, function(a) {
        a = a.replace(/^css!/, "");
        return new e
        (a)
    })
});
var Hogan = {};
(function(a, b) {
    function c(a, b, c) {
        var d, e;
        b && typeof b == "object" && (b[a] != null ? d = b[a] : c && b.get && typeof b.get == "function" && (d = b.get(a)));
        return d
    }
    function d(a, b, c, d) {
        function e() {}
        function f() {}
        e.prototype = a;
        f.prototype = a.subs;
        var g, i = new e;
        i.subs = new 
        f;
        i.subsText = {};
        i.ib();
        for (g in b) {
            i.subs[g] = b[g];
            i.subsText[g] = d
        }
        for (g in c)
            i.partials[g] = c[g];
        return i
    }
    function l(a) {
        return String(a === null || a === undefined ? "" : a)
    }
    function m(a) {
        a = l(a);
        return k.test(a) ? a.replace(e, "&amp;").replace(f, "&lt;").replace(g, "&gt;"
        ).replace(i, "&#39;").replace(j, "&quot;") : a
    }
    a.Template = function(a, b, c, d) {
        a = a || {};
        this.r = a.code || this.r;
        this.c = c;
        this.options = d || {};
        this.text = b || "";
        this.partials = a.partials || {};
        this.subs = a.subs || {};
        this.ib()
    };
    a.Template.prototype = {
        r: function(a, b, c) {
            return ""
        },
        v: m,
        t: l,
        render: function(b, c, d) {
            return this.ri([b], c || {}, d)
        },
        ri: function(a, b, c) {
            return this.r(a, b, c)
        },
        ep: function(a, b) {
            var c = this.partials[a], e = b[c.name];
            if (c.instance && c.base == e)
                return c.instance;
            if (typeof e == "string") {
                if (!this.c)
                    throw new Error("No compiler available."
                    );
                e = this.c.compile(e, this.options)
            }
            if (!e)
                return null;
            this.partials[a].base = e;
            if (c.subs) {
                this.activeSub === undefined && (b.stackText = this.text);
                e = d(e, c.subs, c.partials, b.stackText || this.text)
            }
            this.partials[a].instance = e;
            return e
        },
        rp: function(a, b, c, d) {
            var e = this
            .ep(a, c);
            return e ? e.ri(b, c, d) : ""
        },
        rs: function(a, b, c) {
            var d = a[a.length - 1];
            if (!n(d)) {
                c(a, b, this);
                return 
            }
            for (var e = 0; e < d.length; e++) {
                a.push(d[e]);
                c(a, b, this);
                a.pop()
            }
        },
        s: function(a, b, c, d, e, f, g) {
            var i;
            if (n(a) && a.length === 0)
                return !1;
            typeof a == "function" && (a = this
            .ms(a, b, c, d, e, f, g));
            i=!!a;
            !d && i && b && b.push(typeof a == "object" ? a : b[b.length - 1]);
            return i
        },
        d: function(a, b, d, e) {
            var f, g = a.split("."), i = this.f(g[0], b, d, e), j = this.options.modelGet, k = null;
            if (a === "." && n(b[b.length - 2]))
                i = b[b.length - 1];
            else 
                for (var l = 1; l < g.length; l++
                ) {
                    f = c(g[l], i, j);
                    if (f != null) {
                        k = i;
                        i = f
                    } else 
                        i = ""
                }
            if (e&&!i)
                return !1;
            if (!e && typeof i == "function") {
                b.push(k);
                i = this.mv(i, b, d);
                b.pop()
            }
            return i
        },
        f: function(a, b, d, e) {
            var f=!1, g = null, i=!1, j = this.options.modelGet;
            for (var k = b.length - 1; k >= 0; k--) {
                g = b[k];
                f = c(a, g, j);
                if (f !=
                null) {
                    i=!0;
                    break
                }
            }
            if (!i)
                return e?!1 : "";
            !e && typeof f == "function" && (f = this.mv(f, b, d));
            return f
        },
        ls: function(a, b, c, d, e) {
            var f = this.options.delimiters;
            this.options.delimiters = e;
            this.b(this.ct(l(a.call(b, d)), b, c));
            this.options.delimiters = f;
            return !1
        },
        ct: function(
        a, b, c) {
            if (this.options.disableLambda)
                throw new Error("Lambda features disabled.");
            return this.c.compile(a, this.options).render(b, c)
        },
        b: b ? function(a) {
            this.buf.push(a)
        }
        : function(a) {
            this.buf += a
        },
        fl: b ? function() {
            var a = this.buf.join("");
            this.buf = [];
            return a
        }
        : function(
        ) {
            var a = this.buf;
            this.buf = "";
            return a
        },
        ib: function() {
            this.buf = b ? [] : ""
        },
        ms: function(a, b, c, d, e, f, g) {
            var i, j = b[b.length - 1], k = a.call(j);
            if (typeof k == "function") {
                if (d)
                    return !0;
                i = this.activeSub && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text
                ;
                return this.ls(k, j, c, i.substring(e, f), g)
            }
            return k
        },
        mv: function(a, b, c) {
            var d = b[b.length - 1], e = a.call(d);
            return typeof e == "function" ? this.ct(l(e.call(d)), d, c) : e
        },
        sub: function(a, b, c, d) {
            var e = this.subs[a];
            if (e) {
                this.activeSub = a;
                e(b, c, this, d);
                this.activeSub=!1
            }
        }
    };
    var e = /&/g, f = /</g, g = />/g, i = /\'/g, j = /\"/g, k = /[&<>\"\']/, n = Array.isArray || function(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }
})(typeof exports != "undefined" ? exports : Hogan);
(function() {
    var a = 0, b = ["ms", "moz", "webkit", "o"];
    for (var c = 0; c < b.length&&!window.requestAnimationFrame; ++c) {
        window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"
        ]
    }
    window.requestAnimationFrame || (window.requestAnimationFrame = function(b, c) {
        var d = (new Date).getTime(), e = Math.max(0, 16 - (d - a)), f = window.setTimeout(function() {
            b(d + e)
        }, e);
        a = d + e;
        return f
    });
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
        clearTimeout
        (a)
    })
})();
using.aliases = {
    "$bundle/boot.2598fcb4bc50710eb1765a324851bb578e7cb026.js": ["app/ui/dialogs/age_gate_dialog", "app/ui/dialogs/block_or_report", "app/ui/dialogs/with_modal_tweet", "app/ui/dialogs/block_user_dialog", "app/ui/with_position", "app/ui/commerce/with_email_confirmation", "app/utils/with_iframe_height_adjuster", "app/ui/dialogs/buy_now_dialog", "app/data/commerce/buy_now_dialog_scribe", "app/ui/dialogs/captcha_challenge_dialog", "app/utils/with_event_params", "template", "app/ui/dialogs/confirm_dialog", "app/ui/connect_badge", "app/utils/caret", "app/ui/with_text_editor", "lib/twitter-text", "app/ui/with_character_counter", "app/ui/with_text_polling", "app/ui/updating_text_counter", "app/ui/dialogs/with_create_or_edit_custom_timeline_dialog", "app/ui/dialogs/create_custom_timeline_dialog", "app/ui/with_custom_timeline_create_button", "app/ui/dialogs/curate_dialog", "app/ui/dashboard", "app/ui/dialogs/delete_tweet_dialog", "app/data/sms/device_verification", "app/ui/sms/with_sms_country_selector", "app/ui/with_loading_indicator", "app/ui/sms/device_verification_banner", "app/ui/direct_message_conversation_actions", "app/data/dm/delete_conversation", "app/ui/direct_message_actions", "app/ui/direct_message_compose_with_intent", "app/utils/string", "app/data/direct_messages", "app/ui/with_dynamic_stylesheet", "app/ui/with_item_actions", "app/ui/with_timestamp_updating", "app/ui/with_tweetbox_initialization", "app/ui/user_actions_dropdown", "app/utils/user_dom_data", "app/ui/with_user_actions", "app/ui/direct_message_dialog", "app/ui/direct_message_link_handler", "app/ui/direct_message_empty_state", "app/utils/image/image_resizer", "app/ui/direct_message_media_preview", "app/data/direct_messages_scribe", "app/data/dm/update_name", "app/ui/dm/direct_message_update_name", "app/ui/dm/suspicious_content", "app/data/dm/suspicious_content_scribe", "app/data/dm/toggle_notifications", "$lib/mediaelement.js", "app/ui/with_tweet_click_handler", "app/ui/dm/tweet_attachment", "app/data/dm/tweet_attachment", "app/ui/with_condensing", "app/ui/with_allow_teardown", "app/ui/with_draft_tweets", "app/utils/flash_version", "$lib/jquery.swfobject.js", "app/utils/image", "app/utils/drag_drop_helper", "app/ui/with_drop_events", "app/ui/with_droppable_image", "app/ui/with_image_upload_button", "app/ui/with_lifeline", "app/ui/with_rtl_tweet_box", "app/ui/typeahead/accounts_renderer", "app/ui/typeahead/contacts_renderer", "app/ui/typeahead/saved_searches_renderer", "app/ui/typeahead/recent_searches_renderer", "app/ui/typeahead/topics_renderer", "app/ui/typeahead/trend_locations_renderer", "app/ui/typeahead/concierge_renderer", "app/ui/typeahead/selected_users_renderer", "app/utils/rtl_text", "app/ui/typeahead/typeahead_dropdown", "app/utils/event_support", "app/utils/typeahead_helpers", "app/ui/typeahead/typeahead_input", "app/ui/select_users", "app/ui/select_users_with_popover", "app/data/media_tags_scribe", "app/ui/with_thumbnail_preview", "app/ui/toolbar", "app/ui/with_toolbar", "app/ui/tweet_box", "app/ui/with_tweet_attachment", "app/ui/dm_composer", "app/utils/image_thumbnail", "app/ui/tweet_box_thumbnails", "app/utils/image_resize", "app/data/with_iframe_async_image_upload", "app/ui/with_image_selection", "app/ui/image_selector", "app/utils/unique_id", "app/ui/with_click_outside", "app/ui/with_geo_search_dropdown", "app/ui/geo_picker", "app/utils/tweet_helper", "app/utils/html_text", "app/ui/with_rich_editor", "app/ui/tweet_box_manager", "app/data/dm/view_participants", "app/boot/direct_messages", "app/data/dm_poll", "app/ui/with_drag_events", "app/ui/drag_state", "app/ui/banners/email_banner", "app/data/email_banner", "app/data/email_banner_scribe", "app/data/embed_scribe", "app/data/with_widgets", "app/ui/dialogs/embed_tweet", "app/data/feedback/feedback", "app/ui/feedback/feedback_dialog", "app/utils/image/image_loader", "app/ui/media/with_flag_action", "app/ui/with_tweet_translation", "app/ui/gallery/gallery", "app/data/gallery_scribe", "app/ui/global_loading_indicator", "app/ui/dialogs/goto_user_dialog", "app/ui/dialogs/keyboard_shortcuts_dialog", "app/ui/dialogs/leadgen_confirm_dialog", "app/ui/dialogs/list_membership_dialog", "app/ui/dialogs/list_operations_dialog", "app/data/sms/sms_download_scribe", "app/utils/find_tweet", "app/ui/with_navigation_links_scribing", "app/ui/with_tweet_actions_helper", "app/ui/more_tweet_actions_dropdown", "app/utils/multiline_text_range", "app/ui/multiline_ellipses", "app/ui/navigation_links", "app/utils/setup_polling_with_backoff", "app/data/notification_listener", "app/data/oembed", "app/data/oembed_scribe", "app/ui/dialogs/offers_dialog", "app/ui/page_title", "app/ui/page_visibility", "app/ui/dialogs/payment_order_dialog", "app/data/with_perftown_scribe", "app/data/performance_stats_scribe", "app/data/lists", "app/data/profile_edit_btn_scribe", "app/ui/with_hover_card", "app/ui/profile_hovercard", "app/ui/with_profile_stats", "app/ui/with_handle_overflow", "app/ui/profile_popup", "app/data/profile_popup", "app/data/profile_popup_scribe", "app/data/user", "app/boot/profile_popup", "app/ui/responsive_dashboard_width", "app/ui/dialogs/retweet_dialog", "app/data/saved_searches", "app/data/saved_searches_scribe", "app/data/sms_confirmation_data", "app/ui/forms/select_box", "app/ui/with_phone_pin_verification", "app/ui/dialogs/sms_confirmation_dialog", "app/data/sms_confirmation_scribe", "app/ui/search_query_source", "app/data/share_via_email_dialog_data", "app/ui/dialogs/share_via_email_box", "app/ui/dialogs/share_via_email_dialog", "app/data/spam_challenge", "app/ui/spoonbill", "app/ui/spoonbill_producer", "app/data/geo", "app/data/with_media_upload", "app/data/tweet", "app/ui/tweet_dialog", "app/ui/new_tweet_button", "app/data/tweet_box_scribe", "app/boot/tweet_boxes", "app/ui/user_dropdown", "app/ui/signin_dropdown", "app/utils/animate_window_scrolltop", "app/ui/global_nav", "app/ui/dm_envelope", "app/ui/search_input", "app/data/search_input_scribe", "app/ui/login_form", "app/ui/track_ga_events", "app/ui/macaw_nymizer_signin_conversion", "app/boot/top_bar", "app/data/typeahead/with_cache", "app/data/with_datasource_helpers", "app/data/typeahead/accounts_datasource", "app/data/typeahead/accounts_datasource_async", "app/data/typeahead/contacts_datasource", "app/data/typeahead/saved_searches_datasource", "app/data/typeahead/recent_searches_datasource", "app/data/typeahead/with_external_event_listeners", "app/data/typeahead/topics_datasource", "app/data/typeahead/trend_locations_datasource", "app/data/typeahead/concierge_datasource", "app/data/typeahead/selected_users_datasource", "app/data/typeahead/prefill_users_datasource", "app/utils/storage/indexed_db", "app/data/typeahead/typeahead", "app/data/typeahead/typeahead_scribe", "app/ui/with_profile_tweet_stat_count_data", "app/ui/with_tweet_action_animation", "app/ui/with_hover_state_removal", "app/ui/tweet_actions", "app/ui/tweet_state_updater", "app/ui/dialogs/uz_survey", "app/data/with_scribe_data_from_dom", "app/ui/with_inline_retweet", "app/boot/app"],
    "$bundle/highline.13e549ec690b27dd5398abfb8377e555d1f0d0c2.js": ["app/ui/profile/add_header_callout", "app/ui/color_picker", "app/ui/profile/inline_edit_user_color", "app/ui/profile/inline_edit_user_location", "app/utils/blend_hex_color", "app/ui/profile/override_user_css", "app/ui/profile/profile_geo_picker", "app/data/profile/profile_geo_picker_scribe", "app/ui/profile/profile_header_image_cropper_sync", "app/boot/highline_inline_edit", "app/ui/dropdown_toggle", "app/ui/profile/follower_requests_reminder", "app/ui/profile/highline_canopy", "app/ui/profile/profile_content_warning", "app/data/profile_content_warning_scribe", "app/ui/dm_button", "app/ui/profile/highline_profile_stats", "app/ui/profile/responsive_nav", "app/ui/profile/sidebar_arrangement", "app/ui/profile/sidebar_tweetbox", "bower_components/flight-viewport/lib/viewport", "app/boot/highline_profile", "app/ui/media/media_preview", "app/boot/preexpanded_cards", "app/utils/event_proxy", "app/ui/grid_tweet_actions", "app/ui/grid_more_tweet_actions_dropdown", "app/ui/timelines/with_contextual_tweet", "app/ui/timelines/with_new_grid_items", "app/ui/timelines/with_grid_keyboard_navigation", "app/ui/with_animated_tweet_removal", "app/boot/tweet_grid_timeline", "app/ui/profile/empty_timeline_owner", "app/ui/profile/empty_timeline_tweetbox", "app/ui/prefilled_tweet", "app/data/prefilled_tweet_scribe", "app/ui/profile/profile_card", "app/data/profile_card_scribe", "app/ui/profile/scroll_bumps", "app/data/profile/scroll_bump_scribe", "app/ui/dialogs/profile_scroll_bump", "app/ui/list_actions", "app/data/list_actions", "app/data/list_actions_scribe", "app/ui/profile/profile_featured_list", "app/data/profile_featured_list_scribe", "app/pages/profile/highline_landing", "app/pages/profile/highline_tweets", "app/pages/profile/highline_favorites", "app/boot/user_grid_timeline", "app/ui/profile/pending_followers_title", "app/pages/profile/highline_follower_requests", "app/pages/profile/highline_followers", "app/pages/profile/highline_following", "app/pages/profile/highline_media", "app/pages/profile/highline_lists", "app/pages/profile/highline_custom_timelines", "app/boot/event", "app/ui/events/follow_all", "app/boot/topics_event", "app/pages/events/topics/tweets", "app/pages/events/topics/people"],
    "$bundle/frontpage.495a7ba0661e805209751ec918bfb330cbd91f42.js": ["app/ui/login_form", "app/data/frontpage_scribe", "app/ui/cookie_warning", "app/ui/track_ga_events", "app/ui/macaw_nymizer_signin_conversion", "app/ui/search_input", "app/data/search_input_scribe", "app/data/typeahead/with_cache", "app/utils/typeahead_helpers", "app/data/with_datasource_helpers", "app/data/typeahead/accounts_datasource", "app/data/typeahead/accounts_datasource_async", "app/data/typeahead/contacts_datasource", "app/data/typeahead/saved_searches_datasource", "app/data/typeahead/recent_searches_datasource", "app/data/typeahead/with_external_event_listeners", "app/data/typeahead/topics_datasource", "app/data/typeahead/trend_locations_datasource", "app/data/typeahead/concierge_datasource", "app/data/typeahead/selected_users_datasource", "app/data/typeahead/prefill_users_datasource", "app/utils/storage/indexed_db", "app/data/typeahead/typeahead", "lib/twitter-text", "app/data/typeahead/typeahead_scribe", "app/utils/caret", "app/utils/event_support", "app/utils/string", "app/utils/rtl_text", "app/ui/typeahead/typeahead_input", "app/ui/typeahead/accounts_renderer", "app/ui/typeahead/contacts_renderer", "app/ui/typeahead/saved_searches_renderer", "app/ui/typeahead/recent_searches_renderer", "app/ui/typeahead/topics_renderer", "app/ui/typeahead/trend_locations_renderer", "app/ui/typeahead/concierge_renderer", "app/ui/typeahead/selected_users_renderer", "app/ui/typeahead/typeahead_dropdown", "app/utils/setup_polling_with_backoff", "app/data/trends", "app/data/trends/location_dialog", "app/data/trends/recent_locations", "app/utils/scribe_event_initiators", "app/data/trends_scribe", "app/ui/with_item_actions", "app/ui/trends/trends", "app/ui/trends/dialog/with_location_info", "app/ui/trends/dialog/location_dropdown", "app/ui/trends/dialog/location_search", "app/ui/trends/dialog/current_location", "app/ui/trends/dialog/with_location_list_picker", "app/ui/trends/dialog/nearby_trends", "app/ui/trends/dialog/recent_trends", "app/ui/trends/dialog/dialog", "app/boot/trends", "app/pages/frontpage", "app/data/login_scribe", "app/pages/login"],
    "$bundle/signup.e649813f98cb7334bfed85929cc278c52c0c6aa2.js": ["app/utils/common_regexp", "app/ui/with_shake_effect", "app/ui/signup/with_signup_validation", "app/ui/signup/signup_form", "app/ui/signup/signup_ui_metrics", "app/ui/with_password_strength", "app/data/signup_data", "app/data/settings", "app/data/signup_scribe", "app/ui/signup/suggestions", "app/ui/signin_dropdown", "app/pages/signup/signup", "app/ui/signup/country_code_select", "app/ui/signup/country_code_display", "app/ui/signup/signup_digits_scribe", "app/pages/signup/signup_digits", "app/ui/signup/signup_captcha_scribe", "app/pages/signup/signup_captcha"],
    "$bundle/profile.db42fdcc8b83f7924111c00dc2aef7bbfa273465.js": ["app/ui/inline_edit", "app/data/async_profile", "app/ui/dialogs/profile_edit_error_dialog", "app/ui/dialogs/profile_confirm_image_delete_dialog", "app/ui/droppable_image", "app/data/inline_edit_scribe", "app/data/drag_and_drop_scribe", "app/ui/inline_profile_editing_initializor", "app/utils/hide_or_show_divider", "app/ui/with_inline_image_options", "app/ui/with_inline_image_editing", "app/ui/inline_profile_editing", "app/ui/profile_edit_param", "app/ui/edit_header_button", "app/boot/inline_edit", "app/ui/profile/canopy", "app/data/profile_canopy_scribe", "app/ui/profile/head", "app/data/profile_head_scribe", "app/ui/profile/social_proof", "app/data/profile_social_proof_scribe", "app/ui/media/card_thumbnails", "app/data/media_timeline", "app/ui/suggested_users", "app/data/suggested_users", "app/ui/profile/alcohol_brand_follower_notification", "app/ui/profile/auto_signup_dialog", "app/boot/profile", "app/pages/profile/tweets", "app/ui/timelines/with_cursor_pagination", "app/ui/with_stream_users", "app/ui/timelines/with_excluded_ids_pagination", "app/ui/timelines/user_timeline", "app/boot/user_timeline", "app/ui/timelines/follower_request_timeline", "app/data/follower_request", "app/data/follower_request_scribe", "app/pages/profile/follower_requests", "app/pages/profile/followers", "app/pages/profile/following", "app/pages/profile/favorites", "app/ui/timelines/list_timeline", "app/boot/list_timeline", "app/ui/profile/list_create_button", "app/pages/profile/lists", "app/ui/timelines/grid_timeline", "app/boot/grid_timeline", "app/pages/profile/media", "app/ui/timelines/custom_timelines_timeline", "app/boot/custom_timelines_timeline", "app/pages/profile/custom_timelines", "app/ui/dialogs/edit_custom_timeline_dialog", "app/ui/timelines/custom_timeline", "app/ui/custom_timeline_tweetbox", "app/ui/custom_timeline_follow_card", "app/ui/with_curated_tweet_removal", "app/ui/custom_timeline_tweet_actions", "app/boot/custom_timeline", "app/pages/custom_timeline"],
    "$bundle/start.d869bc05aa4457811c1ee7654b9609552aa01a34.js": ["app/ui/alert_banner", "app/ui/contact_import_buttons", "app/ui/timelines/with_load_more_pagination", "app/ui/timelines/with_dismissible_recommendation", "app/ui/timelines/dismissible_timeline", "app/ui/start/follow_context", "app/data/start/follow_context", "app/ui/start/navigation_monitor", "app/ui/pushstate_loading_bar", "app/ui/start/search_dialog", "app/ui/start/search_typeahead_form", "app/ui/start/start_alert_modal", "app/ui/start/transition_dialog", "app/data/start_flow_scribe", "app/data/start/tooltip_scribe", "app/data/users", "app/boot/start", "app/boot/customize_profile", "app/ui/start/home_popover", "app/ui/start/start_alert_modal_with_message", "app/ui/start/fixed_right_rail", "app/ui/start_header", "app/ui/start_link", "app/ui/start/start_setup_profile", "app/pages/start/setup_profile", "app/pages/start/import", "app/ui/start/with_dismissible_timeline_follow_all", "app/ui/start/with_select_all_timeline_ui", "app/data/follow_all", "app/data/follow_all_scribe", "app/ui/start/fixed_scroll_header", "app/ui/select_all", "app/data/select_all_scribe", "app/data/start/timeline_scribe", "app/ui/start/follow_all_button", "app/pages/start/find_friends", "app/pages/start/first_tweet", "app/ui/start/select_interests", "app/ui/account_create_event_ga", "app/pages/start/interest_list", "app/ui/macaw_nymizer_signup_conversion", "app/pages/start/congratulations_splash"],
    "$bundle/timeline.3a42270af2125cadbc946aaa17fbb0ec3de73362.js": ["app/data/tweet_actions", "app/utils/scale_animation_time", "app/ui/expando/with_expanding_containers", "app/ui/expando/expando_helpers", "app/ui/gallery/with_gallery", "app/ui/gallery/gallery_opener", "app/ui/with_viewer_follow_state", "app/ui/tweets", "app/ui/tweet_injector", "app/ui/expando/with_expanding_social_activity", "app/ui/expando/with_expanding_conversations", "bower_components/xdm.js/xdm", "app/ui/with_card", "app/ui/expando/with_animated_gifs", "app/ui/with_tweet_activity_actions", "app/ui/expando/expanding_tweets", "app/ui/embed_stats", "app/ui/media/with_native_media", "app/ui/media/media_tweets", "app/utils/boomerang", "app/data/contact_import", "app/data/contact_import_scribe", "app/ui/dashboard_tweetbox", "app/utils/chrome", "app/utils/viewport_helpers", "app/ui/dynamic_card_watcher", "app/ui/who_to_follow/import_loading_dialog", "app/utils/oauth_popup", "app/ui/with_import_services", "app/ui/who_to_follow/import_services", "app/ui/inline_tweet_compose", "app/data/notifications_register", "app/ui/profile_stats", "app/data/promptbird", "app/data/promptbird_scribe", "app/ui/promptbird/with_import_contacts", "app/ui/promptbird/with_language_switch", "app/ui/promptbird", "app/boot/promptbird", "app/ui/scrollable_range", "app/ui/scroll_monitor", "app/ui/visibility_monitor", "app/boot/smart_infinite_scroll", "app/data/trends", "app/data/trends/location_dialog", "app/data/trends/recent_locations", "app/utils/scribe_event_initiators", "app/data/trends_scribe", "app/ui/trends/trends", "app/ui/trends/dialog/with_location_info", "app/ui/trends/dialog/location_dropdown", "app/ui/trends/dialog/location_search", "app/ui/trends/dialog/current_location", "app/ui/trends/dialog/with_location_list_picker", "app/ui/trends/dialog/nearby_trends", "app/ui/trends/dialog/recent_trends", "app/ui/trends/dialog/dialog", "app/boot/trends", "app/ui/infinite_scroll_watcher", "app/data/timeline", "app/boot/timeline", "app/data/activity_popup", "app/ui/dialogs/activity_popup", "app/data/activity_popup_scribe", "app/boot/activity_popup", "app/data/conversations", "app/data/curation", "app/data/media_settings", "app/data/media_tags", "app/ui/timelines/new_items_bar", "app/ui/dialogs/sensitive_flag_confirmation", "app/ui/media/sensitive_media_tweets", "app/data/tweet_activity_counts_scribe", "app/data/tweet_translation", "app/ui/user_actions", "app/boot/tweets", "app/boot/help_pips_enable", "app/data/help_pips", "app/data/help_pips_scribe", "app/ui/help_pip", "app/ui/help_pips_injector", "app/boot/help_pips", "app/ui/expando/close_all_button", "app/ui/with_block_kb_shortcut_helpers", "app/ui/timelines/with_keyboard_navigation", "app/ui/with_focus_highlight", "app/ui/timelines/with_accessible_timeline_item_labels", "app/ui/timelines/base_timeline", "app/ui/timelines/with_old_items", "app/ui/timelines/with_traveling_ptw", "app/ui/timelines/with_autoplaying_timeline", "app/ui/timelines/with_streaming_timeline", "app/ui/timelines/with_polling", "app/ui/timelines/with_new_items", "app/ui/timelines/with_activity_supplements", "app/ui/timelines/with_pinned_stream_items", "app/ui/timelines/paginating_timeline", "app/ui/timelines/with_tweet_pagination", "app/ui/with_conversation_actions", "app/ui/timelines/with_tweets_displayed_reporting", "app/ui/timelines/tweet_timeline", "app/ui/with_timeline_tweet_actions_kb_shortcuts", "app/ui/timeline_tweet_actions", "app/ui/expando/with_sync_tweet_action_counts", "app/ui/profile/highline_tweet_stats", "app/ui/with_dismiss_tweet", "app/ui/timelines/with_dismissible_promoted_tweets", "app/ui/timelines/with_min_max_pagination", "app/ui/timelines/min_max_tweet_timeline", "app/boot/tweet_timeline", "app/ui/timelines/tweet_visibility", "app/data/tweet_visibility_scribe", "app/ui/user_completion_module", "app/data/user_completion_module_scribe", "app/boot/user_completion_module", "app/ui/who_to_follow/with_import_prompt", "app/ui/who_to_follow/with_user_recommendations", "app/ui/who_to_follow/who_to_follow_dashboard", "app/data/who_to_follow", "app/data/who_to_follow_scribe", "app/ui/who_to_follow/who_to_follow_timeline", "app/data/who_to_follow/wtf_import_prompt_scribe", "$lib/jquery_ui.profile.js", "$lib/jquery_webcam.js", "app/ui/settings/with_cropper", "app/ui/with_verify_upload_type", "app/utils/is_showing_avatar_options", "app/ui/dialogs/profile_image_upload_dialog_base", "app/ui/settings/with_webcam", "app/ui/settings/with_html5_webcam", "app/ui/dialogs/profile_image_upload_dialog", "app/data/settings/profile_image_upload_scribe", "app/ui/alert_banner_to_message_drawer", "app/ui/image_uploader", "app/ui/settings/change_photo", "app/data/settings", "bower_components/flight-with-child-components/lib/flight-with-child-components", "app/ui/start/htl_avatar_editor", "app/pages/home", "app/boot/wtf_module", "app/boot/connect", "app/pages/connect/interactions", "app/pages/connect/mentions", "app/pages/connect/network_activity", "app/data/media_thumbnails_scribe", "app/ui/dialogs/iph_search_result_dialog", "app/ui/search_actions", "app/boot/search", "app/ui/timelines/with_story_pagination", "app/ui/gallery/with_grid", "app/ui/timelines/base_search_timeline", "app/ui/with_gallery_scribe_data", "app/boot/universal_timeline", "app/ui/search/spelling_corrections", "app/ui/search/related_queries", "app/data/search_assistance_scribe", "app/ui/events/with_update_nfl_game", "app/ui/events/with_nfl_polling", "app/ui/events/nfl_game_header", "app/ui/events/nfl_games_module", "app/data/nfl_games_module_scribe", "app/data/nfl_timeline_header_scribe", "app/pages/search/search", "app/ui/timelines/media_timeline", "app/boot/media_timeline", "app/pages/search/media", "app/pages/simple_t1", "lib/hogan/template", "lib/mediaelement"],
    "$bundle/permalink.5fee6574c85283969b52d6e4a4025ac1d362c575.js": ["app/ui/permalink_keyboard_support", "app/ui/hidden_ancestors", "app/ui/hidden_descendants", "app/ui/dialogs/sms_codes", "app/ui/permalink_tweet", "app/ui/timelines/conversations/descendant_timeline", "app/ui/timelines/with_simple_new_items", "app/ui/timelines/conversations/ancestor_timeline", "app/ui/related_tweets", "app/data/related_tweets", "app/ui/with_permalinktweet_tweet_actions", "app/ui/with_inline_reply", "app/data/embed_stats_scribe", "app/data/permalink_scribe", "app/pages/permalink"],
    "$bundle/lists_permalink.289826435946014141779a323540da6238175107.js": ["app/ui/list_members_dashboard", "app/data/list_members_dashboard", "app/ui/list_actions", "app/data/list_actions", "app/data/list_actions_scribe", "app/boot/list_permalink", "app/pages/list/permalink_tweets", "app/pages/list/permalink_users"],
    "$bundle/buy_now.6926b9debb7776ef7593665196b717de438cf088.js": ["app/ui/commerce/error_view", "app/data/commerce/with_commerce_utils", "app/ui/commerce/buy_now_view", "app/utils/credit_card_validator", "app/ui/commerce/save_payment_button", "app/ui/commerce/payment_info_view", "app/ui/with_shake_effect", "app/ui/commerce/product_variant_selector", "app/ui/commerce/buy_now_button", "app/ui/commerce/rich_product_info", "app/ui/commerce/product_detail_view", "app/data/commerce/with_tpay_utils", "app/data/commerce/commerce", "app/data/commerce/buy_now_product_detail_scribe", "app/pages/buy_now", "app/pages/buy_now_exception"],
    "$bundle/offers.9aa519bb8cc85c7d7efe0a15136fb039c25a22bb.js": ["app/data/commerce/with_tpay_utils", "app/data/commerce/offers", "app/ui/commerce/offer_view", "app/utils/credit_card_validator", "app/ui/commerce/offers_payment_info_view", "app/pages/offers"],
    "$bundle/discover.d2351177621476d35e691512d2dc6255bc965778.js": ["app/ui/discover_nav", "app/boot/discover", "app/ui/timelines/with_most_recent_min_max_pagination", "app/ui/timelines/discover_timeline", "app/boot/discover_timeline", "app/data/topic_pivots_scribe", "app/ui/with_topic_pivots", "app/ui/discover", "app/pages/discover/discover", "app/ui/people_search_input", "app/boot/who_to_follow", "app/utils/common_regexp", "app/ui/who_to_follow/with_invite_messages", "app/ui/who_to_follow/with_invite_preview", "app/ui/who_to_follow/invite_form", "app/ui/who_to_follow/pymk_kicker", "app/ui/who_to_follow/wipe_addressbook_dialog", "app/pages/who_to_follow/import", "app/pages/who_to_follow/interests", "app/ui/who_to_follow/with_list_resizing", "app/ui/who_to_follow/with_unmatched_contacts", "app/ui/who_to_follow/unmatched_contacts_list", "app/pages/who_to_follow/invite", "app/ui/who_to_follow/matched_contacts_list", "app/pages/who_to_follow/matches", "app/pages/who_to_follow/suggestions"],
    "$bundle/settings.8ad7f77b829260bf39cbb5aaf8db0138f334977a.js": ["app/ui/forms/with_submit_disable", "app/ui/forms/form_value_modification", "app/ui/with_forgot_password", "app/pages/settings/user_data_dashboard_nav", "app/data/user_data_dashboard_password_data", "app/ui/user_data_dashboard_password_dialog", "app/boot/settings", "app/data/settings/account_scribe", "app/data/form_scribe", "app/ui/password_dialog", "app/ui/email_field_highlight", "app/ui/validating_fieldset", "app/ui/email_confirmation", "app/ui/settings/tweet_export", "app/ui/dialogs/tweet_export_dialog", "app/ui/timezone_detector", "app/ui/deactivated", "app/ui/settings_controls", "app/pages/settings/account", "app/pages/settings/blocked", "app/data/settings/login_verification_test_run", "app/ui/settings/login_verification_sms_check", "app/ui/login_verification_confirmation_dialog", "app/ui/protected_verified_dialog", "app/ui/geo_deletion", "app/pages/settings/security", "app/data/settings/applications_scribe", "app/ui/oauth_revoker", "app/ui/settings/facebook_iframe_height_adjuster", "app/pages/settings/applications", "app/data/settings/confirm_deactivation_scribe", "app/pages/settings/confirm_deactivation", "app/ui/timelines/with_contacts_displayed_reporting", "app/ui/timelines/contact_timeline", "app/boot/contact_timeline", "app/ui/who_to_follow/wipe_addressbook_dialog", "app/ui/who_to_follow/with_invite_preview", "app/utils/common_regexp", "app/ui/who_to_follow/with_invite_messages", "app/ui/settings/invite_contact", "app/ui/settings/contacts_dashboard_manager", "app/pages/settings/contacts_dashboard", "app/ui/color_picker", "app/ui/design", "app/data/settings/design_scribe", "app/utils/blend_hex_color", "app/ui/profile/override_user_css", "app/ui/theme_picker", "app/ui/theme_preview", "app/pages/settings/design", "app/pages/settings/muted", "app/ui/settings/tweet_export_download", "app/pages/settings/tweet_export_download", "app/ui/settings/notifications", "app/ui/settings/notifications_global", "app/pages/settings/notifications", "app/ui/commerce/payment_orders_view", "app/utils/credit_card_validator", "app/data/commerce/with_commerce_utils", "app/data/commerce/with_tpay_utils", "app/data/commerce/commerce", "app/pages/settings/orders", "app/ui/password", "app/ui/password_match_pair", "app/ui/with_password_strength", "app/ui/password_strength", "app/data/temporary_password", "app/ui/dialogs/temporary_password_dialog", "app/ui/temporary_password_button", "app/pages/settings/password", "app/ui/commerce/payment_profile_view", "app/pages/settings/payments", "app/ui/profile_image_monitor", "app/boot/avatar_uploading", "app/ui/field_edit_warning", "app/boot/header_upload", "app/ui/dialogs/in_product_help_dialog", "app/data/settings/profile_scribe", "app/ui/settings/user_color_picker", "app/pages/settings/profile", "app/data/settings/facebook_proxy", "app/ui/settings/with_facebook_container", "app/ui/settings/facebook_spinner", "app/ui/settings/with_facebook_banner", "app/ui/settings/facebook_login", "app/ui/settings/facebook_connect", "app/ui/settings/facebook_missing_permissions", "app/ui/settings/facebook_mismatched_connection", "app/ui/settings/facebook_connection_conflict", "app/ui/settings/facebook_connected", "app/data/settings/facebook_scribe", "app/pages/settings/facebook", "app/data/settings/sms_scribe", "app/ui/settings/sms_phone_create_form", "app/ui/forms/element_group_toggler", "app/ui/settings/device_verified_form", "app/ui/settings/sms_phone_verify_form", "app/pages/settings/sms", "app/ui/settings/device_registration_form", "app/data/settings/device_registration_form_scribe", "app/pages/settings/device_registration", "app/ui/settings/web_notifications_request", "app/data/settings/web_notifications_submit", "app/pages/settings/web_notifications", "app/pages/settings/safety", "app/ui/settings/widgets", "app/pages/settings/widgets", "app/ui/settings/widgets_configurator", "app/pages/settings/widgets_configurator", "app/pages/settings/user_data_dashboard"],
    "$bundle/settings_internal.604b9c40cee421bd6f652bb4c6dd67ca85e972e6.js": ["app/ui/settings/internal/decider_override_form", "app/pages/settings/internal/deciders"],
    "$bundle/events.557ad954eddfa7933dd57a045e999b19e952f190.js": ["app/ui/media/media_thumbnails", "app/ui/timelines/event_timeline", "app/data/page_visibility_scribe", "app/pages/events/hashtag"],
    "$bundle/accounts.f097b3d00ecd4adb8558656fc3d00710d25e5ba3.js": ["app/ui/account/password_reset_controls", "app/ui/password_match_pair", "app/ui/with_password_strength", "app/ui/password_strength", "app/pages/account/password_reset", "app/ui/captcha_dialog", "app/ui/account/resend_password_controls", "app/ui/validating_fieldset", "app/data/resend_password", "app/pages/account/resend_password", "app/ui/account/verify_personal_information_controls", "app/pages/account/verify_personal_information", "app/ui/account/verify_device_token_controls", "app/pages/account/verify_device_token", "app/ui/account/resend_password_help_controls", "app/data/resend_password_help", "app/data/resend_password_help_scribe", "app/pages/account/resend_password_help", "app/pages/account/errors"],
    "$bundle/search.5c9b246d3cb6754e0992dafa3779881134b7c495.js": ["app/ui/dialogs/search_operators_dialog", "app/pages/search/home", "$lib/bootstrap_datepicker.js", "app/ui/with_bootstrap_datepicker", "app/ui/advanced_search", "app/pages/search/advanced"],
    "$bundle/vitonboarding.bc3a6ee0b7d3407a82a383148a420a678f6925af.js": ["$lib/jquery.hashchange.js", "app/ui/vit/verification_step", "app/ui/vit/mobile_topbar", "app/pages/vit/onboarding"],
    "$bundle/profile_alerts.39feecc0984cc43060988f7c569b850287515f41.js": ["app/ui/with_redirect_after_follow", "app/ui/profile/lifeline_follow", "app/data/profile_alerts_scribe", "app/pages/profile/alerts"],
    "$bundle/signup_download.8c964a5fd99e25aca3f0844968e0379e4a42ed59.js": ["app/ui/signup_download/next_and_skip_buttons", "app/ui/signup_download/us_phone_number_checker", "app/pages/signup_download/download", "app/ui/signup_download/signup_phone_verify_form", "app/pages/signup_download/verify"],
    "$bundle/welcome.cd4bbfe85bc9cabf405623d460f4ad2dab519a38.js": ["app/data/welcome/invitations_scribe", "app/data/welcome/welcome_cards_scribe", "app/data/welcome/flow_nav_scribe", "app/data/welcome/preview_stream", "app/ui/who_to_follow/with_invite_messages", "app/ui/who_to_follow/with_invite_preview", "app/ui/who_to_follow/with_unmatched_contacts", "app/ui/welcome/invite_dialog", "app/ui/welcome/with_nav_buttons", "app/ui/welcome/header_progress", "app/ui/welcome/internal_link_disabler", "app/ui/who_to_follow/with_list_resizing", "app/ui/welcome/learn_dashboard", "app/ui/welcome/learn_preview_timeline", "app/boot/welcome", "app/pages/welcome/import", "app/data/welcome/intro_scribe", "app/ui/welcome/flow_nav", "app/ui/welcome/intro_video", "app/pages/welcome/intro", "app/data/welcome/interests_picker_scribe", "app/ui/welcome/interests_header_search", "app/ui/welcome/with_interests", "app/ui/welcome/interests_picker", "app/data/welcome/welcome_data", "app/pages/welcome/interests", "app/data/welcome/users_cards", "app/ui/welcome/import_services_cards", "app/ui/welcome/with_card_scribe_context", "app/ui/welcome/with_more_results", "app/ui/welcome/with_welcome_search", "app/ui/welcome/users_cards", "app/pages/welcome/interests_category", "app/ui/profile_image_monitor", "app/boot/avatar_uploading", "app/ui/welcome/profile_flow_nav", "app/ui/welcome/profile_form", "app/pages/welcome/profile", "app/pages/welcome/welcome_typeahead", "app/pages/welcome/recommendations"],
    "$bundle/welcome_alerts.44e3a12e1d87083cf0a06a77e50229bb639180ec.js": ["app/ui/welcome/alerts/download_form", "app/data/welcome/welcome_alerts_download_scribe", "app/pages/welcome/alerts/download", "app/ui/forms/with_submit_disable", "app/ui/forms/form_value_modification", "app/pages/welcome/alerts/phone"],
    "$bundle/directory.5bb8717366f875004b902864cc429411910c67f8.js": ["app/ui/history_back", "app/pages/directory/directory"],
    "$bundle/boomerang.ce977240704bc785401822f8d5486667b860593d.js": ["$lib/boomerang.js", "app/utils/boomerang_lib"],
    "$bundle/loginverification.df7c4b2dab8741a44457d58bdd1fa779cc427199.js": ["app/ui/login_verification_form", "app/data/login_verification", "app/pages/login_verification_page"],
    "$bundle/oauth_landing.90c99fe92a9253ba7c68f3991640342b66fc55c9.js": ["app/data/oauth_landing", "app/pages/oauth_landing"]
};
define("bower_components/flight/lib/registry", [], function() {
    function a(a, b) {
        var c, d, e, f = b.length;
        return typeof b[f - 1] == "function" && (f -= 1, e = b[f]), typeof b[f - 1] == "object" && (f -= 1), f == 2 ? (c = b[0], d = b[1]) : (c = a.node, d = b[0]), {
            element: c,
            type: d,
            callback: e
        }
    }
    function b(a, b) {
        return a.element == b.element && a.type == b.type && (b.callback == null || a.callback == b.callback)
    }
    function c() {
        function d(a) {
            this.component = a, this.attachedTo = [], this.instances = {}, this.addInstance = function(a) {
                var b = new e(a);
                return this.instances[a.identity] = b, this.attachedTo.push(a.node), b
            }, this.removeInstance = function(a) {
                delete this.instances[a.identity];
                var b = this.attachedTo.indexOf(a.node);
                b>-1 && this.attachedTo.splice(b, 1), Object.keys(this.instances).length || c.removeComponentInfo(this)
            }, this.isAttachedTo = function(a) {
                return this.attachedTo.indexOf(a)>-1
            }
        }
        function e(a) {
            this.instance = a, this.events = [], this.addBind = function(a) {
                this.events.push(a), c.events.push(a)
            }, this.removeBind = function(a) {
                for (var c = 0, d; d = this.events[c]; c++)
                    b(d, a) && this.events.splice(c, 1)
            }
        }
        var c = this;
        (this.reset = function() {
            this.components = [], this.allInstances = {}, this.events = []
        }).call(this), this.addInstance = function(a) {
            var b = this.findComponentInfo(a);
            b || (b = new d(a.constructor), this.components.push(b));
            var c = b.addInstance(a);
            return this.allInstances[a.identity] = c, b
        }, this.removeInstance = function(a) {
            var b = this.findComponentInfo(a);
            b && b.removeInstance(a), delete this.allInstances[a.identity]
        }, this.removeComponentInfo = function(a) {
            var b = this.components.indexOf(a);
            b>-1 && this.components.splice(b, 1)
        }, this.findComponentInfo = function(a) {
            var b = a.attachTo ? a: a.constructor;
            for (var c = 0, d; d = this.components[c]; c++)
                if (d.component === b)
                    return d;
            return null
        }, this.findInstanceInfo = function(a) {
            return this.allInstances[a.identity] || null
        }, this.getBoundEventNames = function(a) {
            return this.findInstanceInfo(a).events.map(function(a) {
                return a.type
            })
        }, this.findInstanceInfoByNode = function(a) {
            var b = [];
            return Object.keys(this.allInstances).forEach(function(c) {
                var d = this.allInstances[c];
                d.instance.node === a && b.push(d)
            }, this), b
        }, this.on = function(b) {
            var d = c.findInstanceInfo(this), e, f = arguments.length, g = 1, h = new Array(f - 1);
            for (; g < f; g++)
                h[g - 1] = arguments[g];
            if (d) {
                e = b.apply(null, h), e && (h[h.length - 1] = e);
                var i = a(this, h);
                d.addBind(i)
            }
        }, this.off = function() {
            var d = a(this, arguments), e = c.findInstanceInfo(this);
            e && e.removeBind(d);
            for (var f = 0, g; g = c.events[f]; f++)
                b(g, d) && c.events.splice(f, 1)
        }, c.trigger = function() {}, this.teardown = function() {
            c.removeInstance(this)
        }, this.withRegistration = function() {
            this.after("initialize", function() {
                c.addInstance(this)
            }), this.around("on", c.on), this.after("off", c.off), window.DEBUG && DEBUG.enabled && this.after("trigger", c.trigger), this.after("teardown", {
                obj: c,
                fnName: "teardown"
            })
        }
    }
    return "use strict", new c
})
define("bower_components/flight/lib/debug", ["./registry"], function(a) {
    function b(a, c, e) {
        e = e || {};
        var f = e.obj || window, g = e.path || (f == window ? "window" : ""), h = Object.keys(f);
        h.forEach(function(e) {
            (d[a] || a)(c, f, e) && console.log([g, ".", e].join(""), "->", ["(", typeof f[e], ")"].join(""), f[e]), Object.prototype.toString.call(f[e]) == "[object Object]" && f[e] != f && g.split(".").indexOf(e)==-1 && b(a, c, {
                obj: f[e],
                path: [g, e].join(".")
            })
        })
    }
    function c(a, c, d, e) {
        !c || typeof d == c ? b(a, d, e) : console.error([d, "must be", c].join(" "))
    }
    function e(a, b) {
        c("name", "string", a, b)
    }
    function f(a, b) {
        c("nameContains", "string", a, b)
    }
    function g(a, b) {
        c("type", "function", a, b)
    }
    function h(a, b) {
        c("value", null, a, b)
    }
    function i(a, b) {
        c("valueCoerced", null, a, b)
    }
    function j(a, c) {
        b(a, null, c)
    }
    function m() {
        var a = [].slice.call(arguments);
        l.eventNames.length || (l.eventNames = k), l.actions = a.length ? a : k, q()
    }
    function n() {
        var a = [].slice.call(arguments);
        l.actions.length || (l.actions = k), l.eventNames = a.length ? a : k, q()
    }
    function o() {
        l.actions = [], l.eventNames = [], q()
    }
    function p() {
        l.actions = k, l.eventNames = k, q()
    }
    function q() {
        try {
            window.localStorage && (localStorage.setItem("logFilter_eventNames", l.eventNames), localStorage.setItem("logFilter_actions", l.actions))
        } catch (a) {}
    }
    function r() {
        var a, b;
        try {
            a = window.localStorage && localStorage.getItem("logFilter_eventNames"), b = window.localStorage && localStorage.getItem("logFilter_actions")
        } catch (c) {
            return 
        }
        a && (l.eventNames = a), b && (l.actions = b), Object.keys(l).forEach(function(a) {
            var b = l[a];
            typeof b == "string" && b !== k && (l[a] = b ? b.split(",") : [])
        })
    }
    "use strict";
    var d = {
        name: function(a, b, c) {
            return a == c
        },
        nameContains: function(a, b, c) {
            return c.indexOf(a)>-1
        },
        type: function(a, b, c) {
            return b[c]instanceof a
        },
        value: function(a, b, c) {
            return b[c] === a
        },
        valueCoerced: function(a, b, c) {
            return b[c] == a
        }
    }, k = "all", l = {
        eventNames: [],
        actions: []
    };
    return {
        enable: function(a) {
            this.enabled=!!a, a && window.console && (console.info("Booting in DEBUG mode"), console.info("You can configure event logging with DEBUG.events.logAll()/logNone()/logByName()/logByAction()")), r(), window.DEBUG = this
        },
        registry: a,
        find: {
            byName: e,
            byNameContains: f,
            byType: g,
            byValue: h,
            byValueCoerced: i,
            custom: j
        },
        events: {
            logFilter: l,
            logByAction: m,
            logByName: n,
            logAll: p,
            logNone: o
        }
    }
})
define("bower_components/flight/lib/utils", ["./debug"], function(a) {
    function c() {
        var b = a.enabled&&!Object.propertyIsEnumerable("getOwnPropertyDescriptor");
        if (b)
            try {
                Object.getOwnPropertyDescriptor(Object, "keys")
        } catch (c) {
            return !1
        }
        return b
    }
    "use strict";
    var b = 100, d = {
        isDomObj: function(a) {
            return !!a.nodeType || a === window
        },
        toArray: function(a, b) {
            b = b || 0;
            var c = a.length, d = new Array(c - b);
            for (var e = b; e < c; e++)
                d[e - b] = a[e];
            return d
        },
        merge: function() {
            var a = arguments.length, b = new Array(a + 1);
            if (a === 0)
                return {};
            for (var c = 0; c < a; c++)
                b[c + 1] = arguments[c];
            return b[0] = {}, b[b.length - 1]===!0 && (b.pop(), b.unshift(!0)), $.extend.apply(undefined, b)
        },
        push: function(a, b, c) {
            return a && Object.keys(b || {}).forEach(function(d) {
                if (a[d] && c)
                    throw new Error('utils.push attempted to overwrite "' + d + '" while running in protected mode');
                typeof a[d] == "object" && typeof b[d] == "object" ? this.push(a[d], b[d]) : a[d] = b[d]
            }, this), a
        },
        getEnumerableProperty: function(a, b) {
            return a.propertyIsEnumerable(b) ? a[b] : undefined
        },
        compose: function() {
            var a = arguments;
            return function() {
                var b = arguments;
                for (var c = a.length - 1; c >= 0; c--)
                    b = [a[c].apply(this, b)];
                return b[0]
            }
        },
        uniqueArray: function(a) {
            var b = {}, c = [];
            for (var d = 0, e = a.length; d < e; ++d) {
                if (b.hasOwnProperty(a[d]))
                    continue;
                c.push(a[d]), b[a[d]] = 1
            }
            return c
        },
        debounce: function(a, c, d) {
            typeof c != "number" && (c = b);
            var e, f;
            return function() {
                var b = this, g = arguments, h = function() {
                    e = null, d || (f = a.apply(b, g))
                }, i = d&&!e;
                return e && clearTimeout(e), e = setTimeout(h, c), i && (f = a.apply(b, g)), f
            }
        },
        throttle: function(a, c) {
            typeof c != "number" && (c = b);
            var d, e, f, g, h, i, j = this.debounce(function() {
                h = g=!1
            }, c);
            return function() {
                d = this, e = arguments;
                var b = function() {
                    f = null, h && (i = a.apply(d, e)), j()
                };
                return f || (f = setTimeout(b, c)), g ? h=!0 : (g=!0, i = a.apply(d, e)), j(), i
            }
        },
        countThen: function(a, b) {
            return function() {
                if (!--a)
                    return b.apply(this, arguments)
            }
        },
        delegate: function(a) {
            return function(b, c) {
                var d = $(b.target), e;
                Object.keys(a).forEach(function(f) {
                    if (!b.isPropagationStopped() && (e = d.closest(f)).length)
                        return c = c || {}, c.el = e[0], a[f].apply(this, [b, c])
                }, this)
            }
        },
        once: function(a) {
            var b, c;
            return function() {
                return b ? c : (b=!0, c = a.apply(this, arguments), c)
            }
        },
        propertyWritability: function(a, b, d) {
            c() && a.hasOwnProperty(b) && Object.defineProperty(a, b, {
                writable: d
            })
        },
        mutateProperty: function(a, b, d) {
            var e;
            if (!c() ||!a.hasOwnProperty(b)) {
                d.call(a);
                return 
            }
            e = Object.getOwnPropertyDescriptor(a, b).writable, Object.defineProperty(a, b, {
                writable: !0
            }), d.call(a), Object.defineProperty(a, b, {
                writable: e
            })
        }
    };
    return d
})
define("bower_components/flight/lib/advice", ["./utils"], function(a) {
    "use strict";
    var b = {
        around: function(a, b) {
            return function() {
                var d = 0, e = arguments.length, f = new Array(e + 1);
                f[0] = a.bind(this);
                for (; d < e; d++)
                    f[d + 1] = arguments[d];
                return b.apply(this, f)
            }
        },
        before: function(a, b) {
            var c = typeof b == "function" ? b: b.obj[b.fnName];
            return function() {
                return c.apply(this, arguments), a.apply(this, arguments)
            }
        },
        after: function(a, b) {
            var c = typeof b == "function" ? b: b.obj[b.fnName];
            return function() {
                var d = (a.unbound || a).apply(this, arguments);
                return c.apply(this, arguments), d
            }
        },
        withAdvice: function() {
            ["before", "after", "around"].forEach(function(c) {
                this[c] = function(d, e) {
                    a.mutateProperty(this, d, function() {
                        return typeof this[d] == "function" ? this[d] = b[c](this[d], e) : this[d] = e, this[d]
                    })
                }
            }, this)
        }
    };
    return b
})
define("bower_components/flight/lib/compose", ["./utils"], function(a) {
    function c(c, d) {
        Object.keys(c).forEach(function(e) {
            b.indexOf(e) < 0 && a.propertyWritability(c, e, d)
        })
    }
    function d(a, b) {
        a.mixedIn = a.hasOwnProperty("mixedIn") ? a.mixedIn : [];
        for (var d = 0; d < b.length; d++)
            a.mixedIn.indexOf(b[d])==-1 && (c(a, !1), b[d].call(a), a.mixedIn.push(b[d]));
        c(a, !0)
    }
    "use strict";
    var b = ["mixedIn", "attrDef"];
    return {
        mixin: d
    }
})
define("bower_components/flight/lib/base", ["./utils", "./registry", "./debug"], function(a, b, c) {
    function e(a) {
        a.events.slice().forEach(function(a) {
            var b = [a.type];
            a.element && b.unshift(a.element), typeof a.callback == "function" && b.push(a.callback), this.off.apply(this, b)
        }, a.instance)
    }
    function f(a, b) {
        try {
            window.postMessage(b, "*")
        } catch (c) {
            throw console.log("unserializable data for event", a, ":", b), new Error(["The event", a, "on component", this.toString(), "was triggered with non-serializable data"].join(" "))
        }
    }
    function g(a) {
        var b = [], d;
        this.attr = new this.attrDef;
        if (c.enabled && window.console) {
            for (var e in this.attrDef.prototype)
                b.push(e);
            d = Object.keys(a);
            for (var f = d.length - 1; f >= 0; f--)
                if (b.indexOf(d[f])==-1) {
                    console.warn('Passed unused attributes including "' + d[f] + '" to component "' + this.toString() + '".');
                    break
                }
        }
        for (var e in this.attrDef.prototype) {
            if (typeof a[e] == "undefined") {
                if (this.attr[e] === null)
                    throw new Error('Required attribute "' + e + '" not specified in attachTo for component "' + this.toString() + '".')
                } else 
                    this.attr[e] = a[e];
            typeof this.attr[e] == "function" && (this.attr[e] = this.attr[e].call(this))
        }
    }
    function h(a) {
        var b = Object.create(a);
        for (var c in this.defaults)
            a.hasOwnProperty(c) || (b[c] = this.defaults[c]);
        this.attr = b
    }
    function i(a) {
        return function(b, c) {
            $(b.target).trigger(a, c)
        }
    }
    function j() {
        this.trigger = function() {
            var a, b, d, e, g, h = arguments.length - 1, i = arguments[h];
            return typeof i != "string" && (!i ||!i.defaultBehavior) && (h--, d = i), h == 1 ? (a = $(arguments[0]), e = arguments[1]) : (a = this.$node, e = arguments[0]), e.defaultBehavior && (g = e.defaultBehavior, e = $.Event(e.type)), b = e.type || e, c.enabled && window.postMessage && f.call(this, b, d), typeof this.attr.eventData == "object" && (d = $.extend(!0, {}, this.attr.eventData, d)), a.trigger(e || b, d), g&&!e.isDefaultPrevented() && (this[g] || g).call(this, e, d), a
        }, this.on = function() {
            var b, c, d, e, f = arguments.length - 1, g = arguments[f];
            typeof g == "object" ? e = a.delegate(this.resolveDelegateRules(g)) : typeof g == "string" ? e = i(g) : e = g, f == 2 ? (b = $(arguments[0]), c = arguments[1]) : (b = this.$node, c = arguments[0]);
            if (typeof e != "function" && typeof e != "object")
                throw new Error('Unable to bind to "' + c + '" because the given callback is not a function or an object');
            return d = e.bind(this), d.target = e, d.context = this, b.on(c, d), e.bound || (e.bound = []), e.bound.push(d), d
        }, this.off = function() {
            var a, c, d, e = arguments.length - 1;
            typeof arguments[e] == "function" && (d = arguments[e], e -= 1), e == 1 ? (a = $(arguments[0]), c = arguments[1]) : (a = this.$node, c = arguments[0]);
            if (d) {
                var f = d.target ? d.target.bound: d.bound || [];
                f && f.some(function(a, b, c) {
                    if (a.context && this.identity == a.context.identity)
                        return c.splice(b, 1), d = a, !0
                }, this), a.off(c, d)
            } else 
                b.findInstanceInfo(this).events.forEach(function(b) {
                    c == b.type && a.off(c, b.callback)
                });
            return a
        }, this.resolveDelegateRules = function(a) {
            var b = {};
            return Object.keys(a).forEach(function(c) {
                if (!(c in this.attr))
                    throw new Error('Component "' + this.toString() + '" wants to listen on "' + c + '" but no such attribute was defined.');
                b[this.attr[c]] = typeof a[c] == "string" ? i(a[c]) : a[c]
            }, this), b
        }, this.select = function(a) {
            return this.$node.find(this.attr[a])
        }, this.attributes = function(a) {
            var b = function() {};
            this.attrDef && (b.prototype = new this.attrDef);
            for (var c in a)
                b.prototype[c] = a[c];
            this.attrDef = b
        }, this.defaultAttrs = function(b) {
            a.push(this.defaults, b, !0) || (this.defaults = b)
        }, this.initialize = function(a, b) {
            b = b || {}, this.identity || (this.identity = d++);
            if (!a)
                throw new Error("Component needs a node");
            return a.jquery ? (this.node = a[0], this.$node = a) : (this.node = a, this.$node = $(a)), this.attrDef ? g.call(this, b) : h.call(this, b), this
        }, this.teardown = function() {
            e(b.findInstanceInfo(this))
        }
    }
    "use strict";
    var d = 0;
    return j
})
define("bower_components/flight/lib/logger", ["./utils"], function(a) {
    function c(a) {
        var b = a.tagName ? a.tagName.toLowerCase(): a.toString(), c = a.className ? "." + a.className: "", d = b + c;
        return a.tagName ? ["'", "'"].join(d) : d
    }
    function d(a, d, e) {
        if (!window.DEBUG ||!window.DEBUG.enabled)
            return;
        var f, g, h, i, j, k, l, m, n, o;
        typeof e[e.length - 1] == "function" && (i = e.pop(), i = i.unbound || i), e.length == 1 ? (h = d.$node[0], g = e[0]) : e.length == 2 && typeof e[1] == "object"&&!e[1].type ? (h = d.$node[0], g = e[0], a == "trigger" && (j = e[1])) : (h = e[0], g = e[1], a == "trigger" && (j = e[2])), f = typeof g == "object" ? g.type : g, k = DEBUG.events.logFilter, m = k.actions == "all" || k.actions.indexOf(a)>-1, l = function(a) {
            return a.test ? a : new RegExp("^" + a.replace(/\*/g, ".*") + "$")
        }, n = k.eventNames == "all" || k.eventNames.some(function(a) {
            return l(a).test(f)
        }), m && n && (o = [b[a], a, "[" + f + "]"], j && o.push(j), o.push(c(h)), o.push(d.constructor.describe.split(" ").slice(0, 3).join(" ")), console.groupCollapsed && a == "trigger" && console.groupCollapsed(a, f), console.info.apply(console, o))
    }
    function e() {
        this.before("trigger", function() {
            d("trigger", this, a.toArray(arguments))
        }), console.groupCollapsed && this.after("trigger", function() {
            console.groupEnd()
        }), this.before("on", function() {
            d("on", this, a.toArray(arguments))
        }), this.before("off", function() {
            d("off", this, a.toArray(arguments))
        })
    }
    "use strict";
    var b = {
        on: "<-",
        trigger: "->",
        off: "x "
    };
    return e
})
define("bower_components/flight/lib/component", ["./advice", "./utils", "./compose", "./base", "./registry", "./logger", "./debug"], function(a, b, c, d, e, f, g) {
    function i() {
        var a = e.findComponentInfo(this);
        a && Object.keys(a.instances).forEach(function(b) {
            var c = a.instances[b];
            c && c.instance && c.instance.teardown()
        })
    }
    function j(a) {
        var c = arguments.length, d = new Array(c - 1);
        for (var f = 1; f < c; f++)
            d[f - 1] = arguments[f];
        if (!a)
            throw new Error("Component needs to be attachTo'd a jQuery object, native node or selector string");
        var g = b.merge.apply(b, d), h = e.findComponentInfo(this);
        $(a).each(function(a, b) {
            if (h && h.isAttachedTo(b))
                return;
            (new this).initialize(b, g)
        }.bind(this))
    }
    function k() {
        var a = this.mixedIn || this.prototype.mixedIn || [];
        return a.map(function(a) {
            if (a.name == null) {
                var b = a.toString().match(h);
                return b && b[1] ? b[1] : ""
            }
            return a.name != "withBase" ? a.name : ""
        }).filter(Boolean).join(", ")
    }
    function l() {
        var h = arguments.length, m = new Array(h);
        for (var n = 0; n < h; n++)
            m[n] = arguments[n];
        var o = function() {};
        return o.toString = o.prototype.toString = k, g.enabled && (o.describe = o.prototype.describe = o.toString()), o.attachTo = j, o.mixin = function() {
            var a = l(), d = Object.create(o.prototype);
            return d.mixedIn = [].concat(o.prototype.mixedIn), d.defaults = b.merge(o.prototype.defaults), d.attrDef = o.prototype.attrDef, c.mixin(d, arguments), a.prototype = d, a.prototype.constructor = a, a
        }, o.teardownAll = i, g.enabled && m.unshift(f), m.unshift(d, a.withAdvice, e.withRegistration), c.mixin(o.prototype, m), o
    }
    "use strict";
    var h = /function (.*?)\s?\(/;
    return l.teardownAll = function() {
        e.components.slice().forEach(function(a) {
            a.component.teardownAll()
        }), e.reset()
    }, l
})
define("core/component", ["module", "require", "exports", "bower_components/flight/lib/component"], function(module, require, exports) {
    module.exports = require("bower_components/flight/lib/component")
});
define("core/registry", ["module", "require", "exports", "bower_components/flight/lib/registry"], function(module, require, exports) {
    module.exports = require("bower_components/flight/lib/registry")
});
define("core/clock", ["module", "require", "exports", "core/component", "core/registry"], function(module, require, exports) {
    function clockComponent() {}
    function Clock() {
        this.timers = [], this.clockComponent = function() {
            if (!this.currentClock ||!registry.findInstanceInfo(this.currentClock))
                this.reset(), this.currentClock = (new ClockComponent(document)).initialize(document);
            return this.currentClock
        }, this.trigger = function(a, b) {
            this.clockComponent().trigger(a, b)
        }, this.reset = function() {
            this.timers = []
        }, this.tick = function() {
            this.timers.forEach(function(a) {
                a.tick(INTERVAL)
            })
        }, this.setTicker = function() {
            this.pause(), this.ticker = window.setInterval(this.tick.bind(this), INTERVAL)
        }, this.init = function() {
            this.clockComponent(), this.ticker || this.setTicker()
        }, this.clear = function(a) {
            a && this.timers.splice(this.timers.indexOf(a), 1)
        }, this.setTimeoutEvent = function(a, b, c) {
            if (typeof a != "string")
                return console.error("clock.setTimeoutEvent was passed a function instead of a string.");
            this.init();
            var d = new TimeoutTimer(a, b, c);
            return this.timers.push(d), d
        }, this.clearTimeout = function(a) {
            a instanceof TimeoutTimer && this.clear(a)
        }, this.setIntervalEvent = function(a, b, c) {
            if (typeof a != "string")
                return console.error("clock.setIntervalEvent was passed a function instead of a string.");
            this.init();
            var d = new IntervalTimer(a, b, c);
            return this.timers.push(d), d
        }, this.clearInterval = function(a) {
            a instanceof IntervalTimer && this.clear(a)
        }, this.resume = this.restart = this.setTicker, this.pause = function(a, b) {
            clearInterval(this.ticker || 0)
        }
    }
    function Timer() {
        this.callback = function() {
            myClock.trigger(this.eventName, this.data)
        }, this.clear = function() {
            myClock.clear(this)
        }, this.pause = function() {
            this.paused=!0
        }, this.resume = function() {
            this.paused=!1
        }, this.tickUnlessPaused = this.tick, this.tick = function() {
            if (this.paused)
                return;
            this.tickUnlessPaused.apply(this, arguments)
        }
    }
    function TimeoutTimer(a, b, c) {
        this.countdown = b, this.eventName = a, this.data = c
    }
    function IntervalTimer(a, b, c) {
        this.countdown = this.interval = this.maxInterval = this.initialInterval = b, this.backoffFactor = BACKOFF_FACTOR, this.eventName = a, this.data = c
    }
    var defineComponent = require("core/component"), registry = require("core/registry"), ClockComponent = defineComponent(clockComponent), myClock = new Clock, INTERVAL = 500, BACKOFF_FACTOR = 2;
    module.exports = myClock;
    var Timeout = function() {
        this.tick = function(a) {
            this.countdown -= a, this.countdown <= 0 && (this.clear(), this.callback())
        }
    };
    Timeout.call(TimeoutTimer.prototype), Timer.call(TimeoutTimer.prototype);
    var Interval = function() {
        this.tick = function(a) {
            this.countdown -= a;
            if (this.countdown <= 0) {
                this.callback();
                if (this.interval < this.maxInterval) {
                    var b = Math.ceil(this.interval * this.backoffFactor / INTERVAL) * INTERVAL;
                    this.interval = Math.min(b, this.maxInterval)
                }
                this.countdown = this.interval
            }
        }, this.backoff = function(a, b) {
            this.maxInterval = a, this.backoffFactor = b || BACKOFF_FACTOR, this.interval > this.maxInterval && (this.interval = a)
        }, this.cancelBackoff = function() {
            this.interval = this.maxInterval = this.initialInterval, this.countdown = Math.min(this.countdown, this.interval), this.resume()
        }
    };
    Interval.call(IntervalTimer.prototype), Timer.call(IntervalTimer.prototype)
});
define("core/compose", ["module", "require", "exports", "bower_components/flight/lib/compose"], function(module, require, exports) {
    module.exports = require("bower_components/flight/lib/compose")
});
define("core/advice", ["module", "require", "exports", "bower_components/flight/lib/advice"], function(module, require, exports) {
    module.exports = require("bower_components/flight/lib/advice")
});
define("core/parameterize", ["module", "require", "exports"], function(module, require, exports) {
    var tokenizerRE = /\{\{(.+?)\}\}/g;
    module.exports = function(a, b, c) {
        return b ? a.replace(tokenizerRE, function(a, d) {
            if (d) {
                if (b[d])
                    return b[d];
                if (c)
                    throw new Error("Cannot parameterize string, no replacement found for " + d);
                return ""
            }
            return a
        }) : a
    }
});
define("core/i18n", ["module", "require", "exports", "core/parameterize"], function(module, require, exports) {
    module.exports = require("core/parameterize")
});
define("core/logger", ["module", "require", "exports", "bower_components/flight/lib/logger"], function(module, require, exports) {
    module.exports = require("bower_components/flight/lib/logger")
});
define("core/utils", ["module", "require", "exports", "bower_components/flight/lib/utils"], function(module, require, exports) {
    module.exports = require("bower_components/flight/lib/utils")
});
define("debug/debug", ["module", "require", "exports", "bower_components/flight/lib/debug"], function(module, require, exports) {
    var flightDebug = require("bower_components/flight/lib/debug");
    module.exports = flightDebug
});
define("app/utils/auth_token", ["module", "require", "exports"], function(module, require, exports) {
    var authToken;
    module.exports = {
        get: function() {
            if (!authToken)
                throw new Error("authToken should have been set!");
            return authToken
        },
        set: function(a) {
            authToken = a
        },
        addTo: function(a, b) {
            return a.authenticity_token = authToken, b && (a.post_authenticity_token = authToken), a
        }
    }
});
define("app/data/scribe_transport", ["module", "require", "exports"], function(module, require, exports) {
    function ScribeTransport(a) {
        this.SESSION_BUFFER_KEY = "ScribeTransport", this.SCRIBE_API_ENDPOINT = "/i/jot", this.options = {}, a && (this.updateOptions(a), this.registerEventHandlers(a))
    }
    ScribeTransport.prototype = {
        flush: function(a, b) {
            if (!a ||!a.length)
                return;
            b === undefined && (b=!!this.options.sync);
            if (this.options.useAjax) {
                var c = {
                    url: this.options.url,
                    data: $.extend(this.ajaxParams(a), this.options.requestParameters),
                    type: "POST",
                    dataType: "json",
                    async: !b,
                    headers: {
                        "X-Twitter-Polling": !0
                    }
                };
                this.options.debug && (this.options.debugHandler && (c.success = this.options.debugHandler), c.data.debug = "1"), $.ajax(c)
            } else {
                var d = this.options.debug ? "&debug=1": "";
                (new Image).src = this.options.url + "?q=" + ( + (new Date)).toString().slice( - 4) + d + "&" + this.imageParams(a)
            }
            this.reset()
        },
        ajaxParams: function(a) {
            if (typeof a == "string")
                return {
                    log: "[" + a + "]"
                };
            var b = this.options.encodeParameters;
            return b && typeof b == "function" ? b.apply(this, arguments) : {
                log: JSON.stringify(a)
            }
        },
        imageParams: function(a) {
            if (typeof a == "string")
                return "log=%5B" + a + "%5D";
            var b = this.options.encodeParameters;
            return b && typeof b == "function" ? b.apply(this, arguments) : "log=" + encodeURIComponent(JSON.stringify(a))
        },
        reset: function() {
            this.options.bufferEvents && (this.skipUnloadFlush=!1, sessionStorage.removeItem(this.options.bufferKey))
        },
        getBuffer: function() {
            return sessionStorage.getItem(this.options.bufferKey) || ""
        },
        logWithStorageException: function(a, b) {
            var c = {
                category: "client_scribe_storage_error",
                error: a.message,
                url: document.location.href,
                product_name: "swift",
                event_name: "storage_quota_exceeded",
                type: "js_error"
            };
            this.addCategoryField(c, c.category), this.flush(this.appendData(b, this.encodeEventData(c)))
        },
        storeData: function(a, b) {
            try {
                sessionStorage.setItem(a, b)
            } catch (c) {
                if (c.name !== "QuotaExceededError" && c.message !== "QuotaExceededError" && c.name !== "NS_ERROR_DOM_QUOTA_REACHED" && c.name !== "QUOTA_EXCEEDED_ERR" && c.number!==-2147024882)
                    throw c;
                this.logWithStorageException(c, b)
            }
        },
        encodeEventData: function(a) {
            var b = JSON.stringify(a);
            return this.options.useAjax || (b = encodeURIComponent(b)), b
        },
        appendData: function(a, b) {
            return a + (a ? this.SEPARATOR + b : b)
        },
        addToBuffer: function(a) {
            var b = this.getBuffer(), c = this.encodeEventData(a), d = this.appendData(b, c);
            this.options.bufferSize && this.fullBuffer(d) ? this.options.useAjax ? this.flush(d) : (this.flush(b), this.storeData(this.options.bufferKey, c)) : this.storeData(this.options.bufferKey, d)
        },
        addCategoryField: function(a, b) {
            a._category_ = b
        },
        send: function(a, b, c) {
            if (!b ||!a || this.options.bufferSize < 0)
                return;
            this.addCategoryField(a, b), c ||!this.options.bufferEvents ||!this.options.bufferSize ? this.flush([a], c) : this.addToBuffer(a), this.options.debug && $(document).trigger("scribedata." + this.options.bufferKey, a), this.options.metrics && a.event_info != "debug" && $(document).trigger("debugscribe", a)
        },
        fullBuffer: function(a) {
            return a.length >= (this.options.useAjax ? this.options.bufferSize * 2083 : 2050 - this.options.url.length)
        },
        updateOptions: function(a) {
            this.options = $.extend({}, this.options, a), this.options.requestParameters || (this.options.requestParameters = {}), this.options.flushOnUnload === undefined && (this.options.flushOnUnload=!0), this.options.bufferKey || (this.options.bufferKey = this.SESSION_BUFFER_KEY), this.options.bufferSize === 0 && (this.options.bufferEvents=!1), this.options.useAjax === undefined && (this.options.useAjax=!0);
            if (this.options.bufferEvents || this.options.bufferEvents == undefined)
                try {
                    sessionStorage.setItem(this.SESSION_BUFFER_KEY + ".init", "test");
                    var b = sessionStorage.getItem(this.SESSION_BUFFER_KEY + ".init") == "test";
                    sessionStorage.removeItem(this.SESSION_BUFFER_KEY + ".init"), this.options.bufferEvents = b
            } catch (c) {
                this.options.bufferEvents=!1
            }
            if (this.options.debug&&!this.options.debugHandler) {
                var d = this;
                this.options.debugHandler = a.debugHandler || function(a) {
                    $(document).trigger("handlescribe." + d.options.bufferKey, a)
                }
            }
            var e = window.location.protocol === "https:" ? "https:": "http:";
            this.options.url === undefined ? this.options.useAjax ? this.options.url = this.SCRIBE_API_ENDPOINT : this.options.url = "https://twitter.com" + this.SCRIBE_API_ENDPOINT : this.options.url = this.options.url.replace(/^[a-z]+:/g, e).replace(/\/$/, ""), this.options.bufferEvents && this.options.bufferSize === undefined && (this.options.bufferSize = 20)
        },
        appHost: function() {
            return window.location.host
        },
        registerEventHandlers: function() {
            var a = this, b = $(document);
            if (this.options.bufferEvents) {
                b.on("flushscribe." + a.options.bufferKey, function(b) {
                    a.flush(a.getBuffer(), !0)
                });
                if (this.options.flushOnUnload) {
                    var c = function(b) {
                        a.skipUnloadFlush=!b ||!b.match(/http/)||!!b.match(new RegExp("^https?://" + a.appHost(), "gi")), a.skipUnloadFlush && window.setTimeout(function() {
                            a.skipUnloadFlush=!1
                        }, 3e3)
                    };
                    b.on("mouseup." + this.options.bufferKey, "a", function(a) {
                        if (this.getAttribute("target") || a.button || a.metaKey || a.shiftKey || a.altKey || a.ctrlKey)
                            return;
                        c(this.getAttribute("href"))
                    }), b.on("submit." + this.options.bufferKey, "form", function(a) {
                        c(this.getAttribute("action"))
                    }), b.on("uiNavigate." + this.options.bufferKey, function(a, b) {
                        c(b.url)
                    }), $(window).on("unload." + this.options.bufferKey, function() {
                        a.skipUnloadFlush || a.flush(a.getBuffer(), !0), a.skipUnloadFlush=!1
                    })
                }
            }
            this.SEPARATOR = this.options.useAjax ? "," : encodeURIComponent(",")
        },
        destroy: function() {
            this.flush(this.getBuffer()), $(document).off("flushscribe." + this.options.bufferKey), $(window).off("unload." + this.options.bufferKey), $(document).off("mouseup." + this.options.bufferKey), $(document).off("submit." + this.options.bufferKey), $(document).off("uiNavigate." + this.options.bufferKey)
        }
    }, module.exports = new ScribeTransport
});
define("app/data/scribe_monitor", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function scribeMonitor() {
        function a(a) {
            if (window.scribeConsole && window.scribeConsole.postMessage) {
                var b = window.location.protocol + "//" + window.location.host;
                try {
                    window.scribeConsole.postMessage(a, b)
                } catch (c) {
                    var d = "ScribeMonitor.postToConsole - Scribe Console error or unserializable data [" + a._category_ + "]";
                    console.error(d, a)
                }
            }
        }
        this.verifyHost = function(a) {
            return a && a.match(/^(staging[0-9]+\.[^\.]+\.twitter.com|twitter\.com|localhost\.twitter\.com)(\:[0-9]+)?$/)
        }, this.after("initialize", function() {
            this.on("keypress", function(a) {
                if (a.charCode == 205 && a.shiftKey && a.altKey) {
                    var b = "menubar=no,toolbar=no,personalbar=no,location=no,resizable=yes,status=no,dependent=yes,height=600,width=600,screenX=100,screenY=100,scrollbars=yes", c = window.location.host;
                    this.verifyHost(c) || (c = "twitter.com"), window.scribeConsole = window.open(window.location.protocol + "//" + c + "/scribe/console", "scribe_console", b)
                }
            }), this.on("scribedata.ScribeTransport handlescribe.ScribeTransport", function(b, c) {
                a(c)
            }), this.attr.scribesForScribeConsole && this.on("uiSwiftLoaded uiPageChanged", function(b, c) {
                (b.type == "uiSwiftLoaded" ||!c.fromCache) && this.attr.scribesForScribeConsole.forEach(function(b) {
                    b._category_ = "client_event", a(b)
                })
            })
        })
    }
    var defineComponent = require("core/component");
    module.exports = defineComponent(scribeMonitor)
});
define("app/data/client_event", ["module", "require", "exports", "app/data/scribe_transport"], function(module, require, exports) {
    function ClientEvent(a) {
        this.scribeContext = {}, this.scribeData = {}, this.scribe = function(b, c) {
            var d = a || window.scribeTransport;
            if (!d)
                throw new Error("You must create a global scribeTransport variable or pass one into this constructor.");
            if (!b || typeof b != "object" || c && typeof c != "object")
                throw new Error("Invalid terms or data hash argument when calling ClientEvent.scribe().");
            if (this.scribeContext) {
                var e = typeof this.scribeContext == "function" ? this.scribeContext(): this.scribeContext;
                b = $.extend({}, e, b)
            }
            for (var f in b)
                b[f] = b[f] && ("" + b[f]).toLowerCase().replace(/_?[^a-z0-9_]+_?/g, "_");
            d.options.debug && $.each(["client", "action"], function(a, c) {
                if (!b[c])
                    throw new Error("You must specify a " + c + " term in your client_event.")
            });
            var c = $.extend({}, c);
            if (this.scribeData) {
                var g = typeof this.scribeData == "function" ? this.scribeData(): this.scribeData;
                c = $.extend({}, g, c)
            }
            c.event_namespace = b, c.triggered_on = c.triggered_on||+(new Date), c.format_version = c.format_version || 2, d.send(c, "client_event")
        }
    }
    var scribeTransport = require("app/data/scribe_transport");
    module.exports = new ClientEvent(scribeTransport)
});
define("app/utils/scribe_association_types", ["module", "require", "exports"], function(module, require, exports) {
    module.exports = {
        associatedTweet: 1,
        platformCardPublisher: 2,
        platformCardCreator: 3,
        conversationOrigin: 4,
        associatedUser: 5,
        associatedTimeline: 6
    }
});
define("app/data/with_scribe", ["module", "require", "exports", "app/data/client_event", "core/utils"], function(module, require, exports) {
    function withScribe() {
        function a(a) {
            if (!a)
                return;
            a = a.sourceEventData ? a.sourceEventData : a;
            if (a.scribeContext || a.scribeData)
                return a
        }
        this.scribe = function() {
            var b = Array.prototype.slice.call(arguments), c, d, e, f, g;
            c = typeof b[0] == "string" ? {
                action: b[0]
            } : b[0], b.shift();
            if (b[0]) {
                e = b[0], e.sourceEventData && (e = e.sourceEventData);
                if (e.scribeContext || e.scribeData)
                    f = e.scribeContext, g = e.scribeData;
                (b[0].scribeContext || b[0].scribeData || b[0].sourceEventData || b.length === 2) && b.shift()
            }
            c = utils.merge({}, f, c), d = typeof b[0] == "function" ? b[0].bind(this)(e) : b[0], d = utils.merge({}, g, d), this.transport(c, d)
        }, this.scribeOnEvent = function(b, c, d) {
            this.on(b, function(a, b) {
                b = b || {}, this.scribe(c, b.sourceEventData || b, d)
            })
        }, this.transport = function(b, c) {
            clientEvent.scribe(b, c)
        }
    }
    var clientEvent = require("app/data/client_event"), utils = require("core/utils");
    module.exports = withScribe
});
define("app/utils/with_session", ["module", "require", "exports"], function(module, require, exports) {
    function withSession() {
        this.setSessionItem = function(a, b) {
            window.sessionStorage && sessionStorage.setItem(a, b)
        }, this.removeSessionItem = function(a) {
            window.sessionStorage && sessionStorage.removeItem(a)
        }, this.getSessionItem = function(a) {
            return window.sessionStorage && sessionStorage.getItem(a)
        }, this.setSessionObject = function(a, b) {
            b === undefined ? this.removeSessionItem(a) : this.setSessionItem(a, JSON.stringify(b))
        }, this.getSessionObject = function(a) {
            var b = this.getSessionItem(a);
            return b === undefined ? b : JSON.parse(b)
        }
    }
    module.exports = withSession
});
define("app/utils/scribe_item_types", ["module", "require", "exports"], function(module, require, exports) {
    module.exports = {
        tweet: 0,
        promotedTweet: 1,
        popularTweet: 2,
        retweet: 10,
        user: 3,
        promotedUser: 4,
        message: 6,
        story: 7,
        trend: 8,
        promotedTrend: 9,
        popularTrend: 15,
        list: 11,
        search: 12,
        savedSearch: 13,
        peopleSearch: 14,
        geoDetails: 19
    }
});
define("app/data/with_interaction_data_scribe", ["module", "require", "exports", "core/compose", "app/data/with_scribe", "app/utils/with_session", "app/utils/scribe_item_types", "app/utils/scribe_association_types", "app/data/client_event", "core/utils"], function(module, require, exports) {
    function withInteractionDataScribe() {
        this.defaultAttrs({
            profileClickContextExpirationMs: 6e5,
            profileClickContextSessionKey: "profileClickContext"
        }), compose.mixin(this, [withScribe, withSession]), this.scribeInteraction = function(a, b, c) {
            if (!a ||!b)
                return;
            typeof a == "string" && (a = {
                action: a
            });
            var d = a.action;
            if (!d)
                return;
            b = utils.merge(b, b.sourceEventData), a = this.getInteractionScribeContext(a, b);
            var e = {};
            b.url && (e.url = b.url), b.query && (e.query = b.query), b.impressionId && (e.promoted=!0);
            var f = this.interactionItem(b);
            f && (e.items = [f]);
            var g = this.interactionTarget(b, a);
            g && (e.targets = [g]), c = utils.merge(e, c, b.scribeData), b.conversationOriginTweetId && (c.associations = c.associations || {}, c.associations[associationTypes.conversationOrigin] = {
                association_id: b.conversationOriginTweetId,
                association_type: itemTypes.tweet
            }), (d == "profile_click" || d == "mention_click") && this.saveProfileClickContext(b);
            var h = (d == "report_as_spam" || d == "block") && a.component != "report_tweet" && a.component != "report_user";
            if (h) {
                var i = this.getUserActionAssociations(b);
                i && (c.associations = utils.merge(c.associations, i))
            }
            this.scribe(a, b, c)
        }, this.interactionItem = function(a) {
            var b = {};
            if (a.position === 0 || a.position)
                b.position = a.position;
            a.impressionId && (b.promoted_id = a.impressionId);
            switch (a.itemType) {
            case"user":
                this.userDetails(b, a);
                break;
            case"tweet":
                this.tweetDetails(b, a), this.cardDetails(b, a), this.translationDetails(b, a), this.conversationDetails(b, a), this.lingerDetails(b, a);
                break;
            case"activity":
                this.activityDetails(b, a), a.activityType == "follow" ? (this.userDetails(b, a), a.isNetworkActivity || (b.id = this.attr.userId)) : a.listId ? this.listDetails(b, a) : (this.tweetDetails(b, a), this.cardDetails(b, a));
                break;
            case"story":
                this.storyDetails(b, a), a.tweetId ? this.tweetDetails(b, a) : a.userId ? this.userDetails(b, a) : b.item_type = itemTypes.story
            }
            return b
        }, this.interactionTarget = function(a, b) {
            if (this.isUserTarget(b.action, b.component)) {
                var c = (a.isMentionClick ? a.userId : a.targetUserId) || a.userId;
                return this.userDetails({}, {
                    userId: c
                })
            }
        }, this.tweetDetails = function(a, b) {
            return a.id = b.tweetId, a.item_type = itemTypes.tweet, b.relevanceType && (a.is_popular_tweet=!0), b.retweetId && (a.retweeting_tweet_id = b.retweetId), a
        }, this.cardDetails = function(a, b) {
            return b.cardItem && utils.push(a, b.cardItem), a
        }, this.translationDetails = function(a, b) {
            return a.dest = b.dest, a
        }, this.conversationDetails = function(a, b) {
            b.isConversation && (a.description = "focal"), b.isConversationComponent && (a.description = b.description, a.id = b.tweetId)
        }, this.lingerDetails = function(a, b) {
            b.visibility_start && (a.visibility_start = b.visibility_start), b.visibility_end && (a.visibility_end = b.visibility_end)
        }, this.userDetails = function(a, b) {
            return a.id = b.containerUserId || b.userId, a.item_type = itemTypes.user, b.feedbackToken && (a.token = b.feedbackToken), a
        }, this.listDetails = function(a, b) {
            return a.id = b.listId, a.item_type = itemTypes.list, a
        }, this.activityDetails = function(a, b) {
            return a.activity_type = b.activityType, b.actingUserIds && (a.acting_user_ids = b.actingUserIds), a
        }, this.storyDetails = function(a, b) {
            return a.story_type = b.storyType, a.story_source = b.storySource, a.social_proof_type = b.socialProofType, a
        }, this.isUserTarget = function(a, b) {
            return ["mention_click", "profile_click", "follow", "unfollow", "block", "unblock", "report_as_spam", "add_to_list", "dm"].indexOf(a)!=-1 || ["report_user", "report_tweet", "report_user_abusive", "report_tweet_abusive"].indexOf(b)!=-1
        }, this.getInteractionScribeContext = function(a, b) {
            return a.action == "profile_click" && a.element === undefined && (a.element = b.isPromotedBadgeClick ? "promoted_badge" : b.profileClickTarget), a
        }, this.scribeInteractiveResults = function(a, b, c, d) {
            var e = [], f=!1;
            typeof a == "string" && (a = {
                action: a
            });
            if (!a.action ||!b)
                return;
            b.length || (a.action = "no_results"), b.forEach(function(a) {
                f || (f=!!a.impressionId), e.push(this.interactionItem(a))
            }.bind(this)), a = this.getInteractionScribeContext(a, c);
            var g = {};
            e && e.length && (g.items = e), f && (g.promoted=!0), this.scribe(a, c, utils.merge(g, d))
        }, this.associationNamespace = function(a, b) {
            var c = {
                page: a.page,
                section: a.section
            };
            return ["conversation", "replies", "in_reply_to"].indexOf(b) >= 0 && (c.component = b), c
        }, this.getProfileUserAssociations = function() {
            var a = this.attr.profile_user && this.attr.profile_user.id_str, b = null;
            return a && (b = {}, b[associationTypes.associatedUser] = {
                association_id: a,
                association_type: itemTypes.user,
                association_namespace: this.associationNamespace(clientEvent.scribeContext)
            }), b
        }, this.getProfileClickContextAssociations = function(a) {
            var b = this.getSessionObject(this.attr.profileClickContextSessionKey) || null;
            return b && b.userId == a && b.expires > (new Date).getTime() && b.associations || null
        }, this.saveProfileClickContext = function(a) {
            var b = {};
            a.tweetId ? (b[associationTypes.associatedTweet] = {
                association_id: a.tweetId,
                association_type: itemTypes.tweet,
                association_namespace: this.associationNamespace(clientEvent.scribeContext, a.scribeContext.component)
            }, a.conversationOriginTweetId && (b[associationTypes.conversationOrigin] = {
                association_id: a.conversationOriginTweetId,
                association_type: itemTypes.tweet
            })) : b = this.getProfileUserAssociations(), this.setSessionObject(this.attr.profileClickContextSessionKey, {
                userId: a.userId,
                associations: b,
                expires: (new Date).getTime() + this.attr.profileClickContextExpirationMs
            })
        }, this.getUserActionAssociations = function(a) {
            var b = a.scribeContext.component, c;
            return b == "profile_dialog" || b == "profile_follow_card" ? c = this.getProfileClickContextAssociations(a.userId) : b == "user" ? c = this.getProfileUserAssociations() : c = null, c
        }
    }
    var compose = require("core/compose"), withScribe = require("app/data/with_scribe"), withSession = require("app/utils/with_session"), itemTypes = require("app/utils/scribe_item_types"), associationTypes = require("app/utils/scribe_association_types"), clientEvent = require("app/data/client_event"), utils = require("core/utils");
    module.exports = withInteractionDataScribe
});
define("app/utils/scribe_card_types", ["module", "require", "exports"], function(module, require, exports) {
    module.exports = {
        photoTweet: 1,
        photoCard: 2,
        playerCard: 3,
        summaryCard: 4,
        promotionCard: 5,
        plusCard: 6
    }
});
define("app/data/with_card_metadata", ["module", "require", "exports", "core/compose", "core/utils", "app/utils/scribe_association_types", "app/data/with_interaction_data_scribe", "app/utils/scribe_item_types", "app/utils/scribe_card_types"], function(module, require, exports) {
    function withCardMetadata() {
        compose.mixin(this, [withInteractionDataScribe]);
        var a = "Swift-6", b = "platform_card";
        this.cardAssociationsForData = function(a) {
            var b = {
                associations: {}
            };
            return b.associations[associationTypes.platformCardPublisher] = {
                association_id: a.publisherUserId,
                association_type: itemTypes.user
            }, b.associations[associationTypes.platformCardCreator] = {
                association_id: a.creatorUserId,
                association_type: itemTypes.user
            }, b.message = a.cardUrl, b
        }, this.getCardDataFromTweet = function(a) {
            var b = {}, c = a.closest("[data-tweet-id]"), d, e, f, g, h;
            return !c.find(".card2").length&&!c.find(".cards-base").length ? d = $(c.attr("data-expanded-footer")) : d = c, b.tweetHasCard = c.hasClass("has-cards"), g=!!d.find(".card2").length, b.interactionInsideCard=!1, g ? (b.tweetHasCard2 = g, b.tweetPreExpanded = c.hasClass("preexpanded"), b.itemId = c.attr("data-item-id") || null, b.promotedId = c.attr("data-impression-id") || null, f = d.find(".card2"), h = f.find(".js-macaw-cards-iframe-container"), h.length ? (b.cardName = h.attr("data-card-name"), b.cardUrl = h.attr("data-card-url"), b.publisherUserId = h.attr("data-publisher-id"), b.creatorUserId = h.attr("data-creator-id"), b.amplifyContentId = h.attr("data-amplify-content-id") || null, b.amplifyPlaylistUrl = h.attr("data-amplify-playlist-url") || null) : (b.cardName = f.attr("data-card2-name"), b.cardUrl = f.find(".card2-holder").attr("data-card2-url"), b.publisherUserId = this.getUserIdFromElement(f.find(".card2-attribution").find(".js-user-profile-link")), b.creatorUserId = this.getUserIdFromElement(f.find(".card2-byline").find(".js-user-profile-link"))), b.interactionInsideCard=!!a.closest(".card2").length) : b.tweetHasCard && (e = d.find(".cards-base"), b.cardType = this.getCardType(e, c), e.length > 0 && (b.cardUrl = e.data("card-url"), b.publisherUserId = this.getUserIdFromElement(e.find(".source .js-user-profile-link")), b.creatorUserId = this.getUserIdFromElement(e.find(".byline .js-user-profile-link")), b.interactionInsideCard = this.interactionInsideCard(a))), b
        }, this.getCardType = function(a, b) {
            return a.length > 0 ? a.data("card-type") : b.data("card-type")
        }, this.interactionInsideCard = function(a) {
            return !!a.closest(".cards-base").length
        }, this.scribeCardInteraction = function(a, b, c, d) {
            b.tweetHasCard2 ? this.scribeCard2Interaction(a, b, c, d) : b.tweetHasCard && this.scribeClassicCardInteraction(a, b)
        }, this.scribeClassicCardInteraction = function(a, b) {
            var c = this.cardAssociationsForData(b);
            this.scribeInteraction({
                element: "platform_" + b.cardType + "_card",
                action: a
            }, b, c)
        }, this.getCard2Item = function(b) {
            return {
                item_type: itemTypes.tweet,
                id: b.itemId,
                promoted_id: b.promotedId,
                pre_expanded: b.tweetPreExpanded ||!1,
                card_type: cardTypes.plusCard,
                card_name: b.cardName,
                card_url: b.cardUrl,
                card_platform_key: a,
                publisher_id: b.publisherUserId,
                content_id: b.amplifyContentId,
                playlist_url: b.amplifyPlaylistUrl
            }
        }, this.scribeCard2Interaction = function(a, c, d, e) {
            var f = this.getCard2Item(c), g;
            typeof e == "object" && e && (f = utils.merge(f, e)), g = {
                items: [f]
            }, this.scribeInteraction({
                element: d || b,
                action: a
            }, c, g)
        }, this.getUserIdFromElement = function(a) {
            return a.length ? a.attr("data-user-id") : null
        }
    }
    var compose = require("core/compose"), utils = require("core/utils"), associationTypes = require("app/utils/scribe_association_types"), withInteractionDataScribe = require("app/data/with_interaction_data_scribe"), itemTypes = require("app/utils/scribe_item_types"), cardTypes = require("app/utils/scribe_card_types");
    module.exports = withCardMetadata
});
define("app/data/with_conversation_metadata", ["module", "require", "exports"], function(module, require, exports) {
    module.exports = function() {
        this.defaultAttrs({
            hasConversationModuleClassAlt: "has-conversation-module",
            conversationModuleSelectorAlt: ".conversation-module",
            rootClass: "root",
            conversationRootTweetSelector: ".conversation-module .conversation-tweet-item.root .tweet",
            conversationAncestorTweetSelector: ".conversation-module .conversation-tweet-item:not(root) .tweet"
        }), this.getConversationAttrs = function(a) {
            var b = {}, c = a.closest(".tweet");
            if (c.hasClass(this.attr.hasConversationModuleClass)) {
                var d = c.closest(this.attr.conversationModuleSelector);
                b.isConversation=!0, b.conversationAncestors = d.attr("data-ancestors").split(",")
            } else 
                c.hasClass("conversation-tweet") && (b.isConversationComponent=!0, b.description = c.hasClass(this.attr.rootClass) ? "root" : "ancestor");
            return b
        }, this.conversationComponentInteractionData = function(a, b) {
            return {
                itemType: "tweet",
                tweetId: $(a).attr("data-item-id"),
                description: b,
                isConversationComponent: !0
            }
        }, this.extraInteractionData = function(a) {
            if (a.find(this.attr.conversationModuleSelector).length > 0) {
                var b = a.find(this.conversationRootTweetSelector).map(function(a, b) {
                    return this.conversationComponentInteractionData(b, "root")
                }.bind(this)).get(), c = a.find(this.attr.conversationAncestorTweetSelector).map(function(a, b) {
                    return this.conversationComponentInteractionData(b, "ancestor")
                }.bind(this)).get();
                return b.concat(c)
            }
            return []
        }, this.addConversationScribeContext = function(a, b, c) {
            return b && b.isConversation ? (a.component = "conversation", a.element = "tweet") : b && b.isConversationComponent && (a.component = "conversation", c || (a.element = b.description)), a
        }, this.after("initialize", function() {
            this.attr.conversationModuleSelector || (this.attr.conversationModuleSelector = this.attr.conversationModuleSelectorAlt), this.attr.hasConversationModuleClass || (this.attr.hasConversationModuleClass = this.attr.hasConversationModuleClassAlt)
        })
    }
});
define("app/ui/with_interaction_data", ["module", "require", "exports", "core/compose", "core/utils", "app/data/with_card_metadata", "app/data/with_conversation_metadata"], function(module, require, exports) {
    function withInteractionData() {
        compose.mixin(this, [withCardMetadata, withConversationMetadata]), this.defaultAttrs({
            genericInteractionItemSelector: ".js-stream-item",
            expandoContainerSelector: ".expanded-conversation",
            expandoAncestorSelector: ".ancestor",
            expandoDescendantSelector: ".descendant",
            streamItemContainerSelector: ".js-stream-item, .permalink",
            activityTargetSelector: ".activity-truncated-tweet .tweet, .js-activity-list_member_added [data-list-id]",
            activityItemSelector: ".js-activity",
            itemAvatarSelector: ".js-action-profile-avatar, .avatar.size48",
            itemSmallAvatarSelector: ".avatar.size24, .avatar.size32",
            itemMentionSelector: ".twitter-atreply",
            discoveryStoryItemSelector: ".js-story-item",
            discoveryStoryHeadlineSelector: ".js-news-headline a",
            originalTweetSelector: ".js-original-tweet[data-tweet-id]",
            promotedBadgeSelector: ".js-promoted-badge",
            elementContextSelector: "[data-element-context]",
            componentContextSelector: "[data-component-context]",
            scribeContextSelector: "[data-scribe-context]",
            userTargetSelector: ".js-user-profile-link, .twitter-atreply"
        });
        var a = {
            feedbackToken: "data-feedback-token",
            impressionId: "data-impression-id",
            lifeline: "data-lifeline",
            disclosureType: "data-disclosure-type",
            impressionCookie: "data-impression-cookie",
            relevanceType: "data-relevance-type",
            associatedTweetId: "data-associated-tweet-id"
        }, b = utils.merge({
            tweetId: "data-tweet-id",
            retweetId: "data-retweet-id",
            isReplyTo: "data-is-reply-to",
            hasParentTweet: "data-has-parent-tweet"
        }, a), c = utils.merge({
            activityType: "data-activity-type"
        }, b), d = utils.merge({
            storyType: "data-story-type",
            storySource: "data-source"
        }, b), e = {
            contactId: "data-item-id",
            importClientApplicationId: "data-client-application-id"
        };
        this.interactionDataWithCard = function(a, b) {
            return this.interactionData(a, b, !0)
        }, this.interactionData = function(a, b, c) {
            var d = {}, e = {}, f=!!c, g = a.target ? $(a.target) : $(a);
            this.setItemType && this.setItemType(g), b = b || {}, this.attr.eventData && (d = this.attr.eventData.scribeContext, e = this.attr.eventData.scribeData);
            var h = utils.merge(this.getEventData(g, f), b), i = g.closest(this.attr.scribeContextSelector).data("scribe-context");
            i && (e = utils.merge(i, e)), d = utils.merge({}, d, this.getScribeContext(g, h));
            if (this.attr.itemType == "tweet" && ["replies", "conversation", "in_reply_to"].indexOf(d.component) >= 0) {
                var j = g.closest(this.attr.streamItemContainerSelector).find(this.attr.originalTweetSelector);
                j.length && (h.conversationOriginTweetId = j.attr("data-tweet-id"))
            }
            return utils.merge({
                scribeContext: d,
                scribeData: e
            }, h)
        }, this.getScribeContext = function(a, b) {
            var c = {}, d = a.closest(this.attr.componentContextSelector).attr("data-component-context");
            d && (c.component = d);
            var e = a.closest(this.attr.elementContextSelector).attr("data-element-context");
            e && (c.element = e);
            if (c.element || c.component)
                return c
        }, this.getInteractionItemPosition = function(a, b) {
            if (b && b.position >= 0)
                return b.position;
            var c = this.getItemPosition && this.getItemPosition(a);
            return c >= 0 ? c : (c = this.getExpandoPosition(a), c!=-1 ? c : a.attr("data-is-tweet-proof") === "true" ? this.getTweetProofPosition(a) : this.getStreamPosition(a))
        }, this.getExpandoPosition = function(a) {
            var b, c =- 1, d = a.closest(this.attr.expandoAncestorSelector), e = a.closest(this.attr.expandoDescendantSelector);
            return d.length && (b = d.closest(this.attr.expandoContainerSelector), c = b.find(this.attr.expandoAncestorSelector).index(d)), e.length && (b = e.closest(this.attr.expandoContainerSelector), c = b.find(this.attr.expandoDescendantSelector).index(e)), a.closest(".in-reply-to,.replies-to").length && (b = a.closest(".in-reply-to,.replies-to"), c = b.find(".tweet").index(a.closest(".tweet"))), c
        }, this.getTweetProofPosition = function(a) {
            var b = a.closest(this.attr.trendItemSelector).index();
            return b!=-1 ? b : - 1
        }, this.getStreamPosition = function(a) {
            var b = a.closest(this.attr.genericInteractionItemSelector).index();
            if (b!=-1)
                return b
        }, this.getEventData = function(c, d) {
            var f, g;
            switch (this.attr.itemType) {
            case"activity":
                return this.getActivityEventData(c);
            case"story":
                return this.getStoryEventData(c);
            case"user":
                return this.getDataAttrs(c, a);
            case"tweet":
                return g = utils.merge(this.getDataAttrs(c, b), this.getConversationAttrs(c)), d ? utils.merge(this.getCardAttrs(c), g) : g;
            case"list":
                return this.getDataAttrs(c, a);
            case"trend":
                return this.getDataAttrs(c, b);
            case"contact":
                return this.getDataAttrs(c, e);
            default:
                return console.warn('You must configure your UI component with an "itemType" attribute of activity, story, user, tweet, list, or trend in order for it to scribe properly.'), {}
            }
        }, this.getActivityEventData = function(a) {
            var b = a.closest(this.attr.activityItemSelector), d = b.find(this.attr.activityTargetSelector);
            d.length || (d = a);
            var e = this.getDataAttrs(a, c, d);
            e.isNetworkActivity=!!a.closest(".discover-stream").length, e.activityType || (e.isReplyTo ? e.activityType = "reply" : e.activityType = e.retweetId ? "retweet" : "mention");
            var f = [], g = e.isNetworkActivity ? ".stream-item-activity-header": "ol.activity-supplement";
            return b.find(g + " a[data-user-id]").each(function() {
                f.push($(this).data("user-id"))
            }), f.length && (e.actingUserIds = f), e
        }, this.getStoryEventData = function(a) {
            var b = this.getDataAttrs(a, d);
            return b
        }, this.getTargetUserId = function(a) {
            var b = a.closest(this.attr.userTargetSelector);
            if (b.length)
                return b.closest("[data-user-id]").attr("data-user-id") || b.find("[data-user-id]").attr("data-user-id")
        }, this.getDataAttrs = function(a, b, c) {
            var d = {};
            c = c || a, $.each(b, function(a, b) {
                c.is("[" + b + "]") ? d[a] = c.attr(b) : d[a] = c.closest("[" + b + "]").attr(b)
            }), d.isReplyTo = d.isReplyTo === "true", d = utils.merge(d, {
                position: this.getInteractionItemPosition(a, d),
                isMentionClick: a.closest(this.attr.itemMentionSelector).length > 0,
                isPromotedBadgeClick: a.closest(this.attr.promotedBadgeSelector).length > 0,
                itemType: this.attr.itemType
            }), a.is(this.attr.itemAvatarSelector) ? d.profileClickTarget = "avatar" : a.is(this.attr.itemSmallAvatarSelector) ? d.profileClickTarget = "mini_avatar" : d.profileClickTarget = "screen_name";
            var e = this.getTargetUserId(a);
            return e && (d.targetUserId = e), d.userId = a.closest("[data-user-id]").attr("data-user-id"), d.containerUserId = c.closest("[data-user-id]").attr("data-user-id"), d
        }, this.getCardAttrs = function(a) {
            var b = this.getCardDataFromTweet(a);
            return b.tweetHasCard2 ? {
                cardItem: this.getCard2Item(b)
            } : {}
        }
    }
    var compose = require("core/compose"), utils = require("core/utils"), withCardMetadata = require("app/data/with_card_metadata"), withConversationMetadata = require("app/data/with_conversation_metadata");
    module.exports = withInteractionData
});
define("app/data/tweet_actions_scribe", ["module", "require", "exports", "core/component", "core/utils", "app/ui/with_interaction_data", "app/data/with_conversation_metadata", "app/data/with_interaction_data_scribe"], function(module, require, exports) {
    function tweetActionsScribe() {
        this.defaultAttrs({
            tweetActionsSelector: ".ProfileTweet-action--more"
        }), this.scribeTweet = function(a) {
            return function(b, c) {
                var d = this.addConversationScribeContext({
                    action: a
                }, c.sourceEventData || c);
                this.scribeInteraction(d, utils.merge(c, c.sourceEventData))
            }.bind(this)
        }, this.scribeDropdown = function(a, b) {
            $(a.target).closest(this.attr.tweetActionsSelector).length > 0 && this.scribe({
                component: "tweet",
                element: "tweet_actions_dropdown",
                action: "open"
            }, b)
        }, this.scribeLoggedOutAction = function(a, b) {
            b && b.action && this.scribe({
                component: "tweet",
                action: b.action
            })
        }, this.after("initialize", function() {
            this.on("uiReplyButtonTweetSuccess", this.scribeTweet("reply")), this.on("uiDidRetweetSuccess", this.scribeTweet("retweet")), this.on("uiDidDeleteTweet", this.scribeTweet("delete")), this.on("dataDidFavoriteTweet", this.scribeTweet("favorite")), this.on("dataDidUnfavoriteTweet", this.scribeTweet("unfavorite")), this.on("dataDidUnretweet", this.scribeTweet("unretweet")), this.on("uiPermalinkClick", this.scribeTweet("permalink")), this.on("uiDidShareViaEmailSuccess", this.scribeTweet("share_via_email")), this.on("dataTweetTranslationSuccess", this.scribeTweet("translate")), this.on("dataDidUserPinTweet", this.scribeTweet("pin")), this.on("dataDidUserUnpinTweet", this.scribeTweet("unpin")), this.on("uiDropdownOpened", this.scribeDropdown), this.on("uiLoggedOutActionAttempt", this.scribeLoggedOutAction)
        })
    }
    var defineComponent = require("core/component"), utils = require("core/utils"), withInteractionData = require("app/ui/with_interaction_data"), withConversationMetadata = require("app/data/with_conversation_metadata"), withInteractionDataScribe = require("app/data/with_interaction_data_scribe");
    module.exports = defineComponent(tweetActionsScribe, withInteractionData, withConversationMetadata, withInteractionDataScribe)
});
define("app/data/block_or_report_scribe", ["module", "require", "exports", "core/component", "core/utils", "app/utils/scribe_item_types", "app/utils/scribe_association_types", "app/data/with_interaction_data_scribe"], function(module, require, exports) {
    function blockOrReportScribe() {
        this.getComponent = function(a) {
            return a.target === "user" ? "report_user" : "report_tweet"
        }, this.blockOrReportImpression = function(a, b) {
            this.scribeBlockOrReportEvent({
                component: this.getComponent(b),
                action: "impression"
            }, b)
        }, this.cancelBlockOrReport = function(a, b) {
            this.scribeBlockOrReportEvent({
                component: this.getComponent(b),
                action: "cancel"
            }, b)
        }, this.blockOrReportSubmit = function(a, b) {
            var c = b.reportType || "", d = {
                component: this.getComponent(b.eventData),
                action: b.blockUser ? "block": "report_as_spam",
                element: c
            };
            this.scribeBlockOrReportEvent(d, b)
        }, this.blockOrReportAbuseToSupport = function(a, b) {
            var c = {
                component: this.getComponent(b.eventData) + "_abusive",
                element: b.abuseType,
                action: "click"
            };
            this.scribeBlockOrReportEvent(c, b)
        }, this.scribeBlockOrReportEvent = function(a, b) {
            var c = b.eventData || b;
            c.target == "user" ? this.scribeReportUserEvent(a, b) : this.scribeReportTweetEvent(a, c)
        }, this.scribeReportTweetEvent = function(a, b) {
            var c = {};
            c[associationTypes.associatedTweet] = {
                association_type: itemTypes.tweet,
                association_id: b.tweetId
            }, this.scribeInteraction(a, b, {
                associations: c
            })
        }, this.scribeReportUserEvent = function(a, b) {
            var c = {};
            c[associationTypes.associatedUser] = {
                association_type: itemTypes.user,
                association_id: b.userId || b.eventData.userId
            }, this.scribeInteraction(a, b, {
                associations: c
            })
        }, this.openTwitterRulesLink = function(a, b) {
            var a = {
                component: this.getComponent(b.eventData),
                element: "twitter_rules_link",
                action: "open_link"
            };
            this.scribeBlockOrReportEvent(a, b)
        }, this.after("initialize", function() {
            this.on(document, "uiNeedsBlockOrReportDialog", this.blockOrReportImpression), this.on(document, "uiDidBlockOrReport uiReportUserAction", this.blockOrReportSubmit), this.on(document, "uiDidBlockOrReportToSupport", this.blockOrReportAbuseToSupport), this.on(document, "uiDidCancelBlockOrReport", this.cancelBlockOrReport), this.on(document, "uiDidOpenTwitterRulesLink", this.openTwitterRulesLink)
        })
    }
    var defineComponent = require("core/component"), utils = require("core/utils"), itemTypes = require("app/utils/scribe_item_types"), associationTypes = require("app/utils/scribe_association_types"), withInteractionDataScribe = require("app/data/with_interaction_data_scribe");
    module.exports = defineComponent(blockOrReportScribe, withInteractionDataScribe)
});
define("app/data/user_actions_scribe", ["module", "require", "exports", "core/component", "app/utils/scribe_item_types", "app/utils/scribe_association_types", "app/data/with_interaction_data_scribe"], function(module, require, exports) {
    function userActionsScribe() {
        function a(a) {
            var b = a && a.associatedTweetId, c = {};
            if (!b)
                return;
            return c[associationTypes.associatedTweet] = {
                association_type: itemTypes.tweet,
                association_id: b
            }, {
                associations: c
            }
        }
        this.defaultAttrs({
            urlToActionMap: {
                "/i/user/follow": "follow",
                "/i/user/unfollow": "unfollow",
                "/i/user/block": "block",
                "/i/user/unblock": "unblock",
                "/i/user/hide": "dismiss"
            },
            userActionToActionMap: {
                uiMuteUserAction: "mute_user",
                uiUnmuteUserAction: "unmute_user",
                uiMentionAction: "reply",
                uiDmAction: "dm",
                uiListAction: "add_to_list",
                uiReportSpamAction: "report_as_spam",
                uiRetweetOnAction: {
                    element: "allow_retweets",
                    action: "on"
                },
                uiRetweetOffAction: {
                    element: "allow_retweets",
                    action: "off"
                },
                uiDeviceNotificationsOnAction: {
                    element: "mobile_notifications",
                    action: "on"
                },
                uiDeviceNotificationsOffAction: {
                    element: "mobile_notifications",
                    action: "off"
                },
                uiShowMobileNotificationsConfirm: {
                    element: "mobile_notifications",
                    action: "failure"
                },
                uiShowPushTweetsNotificationsConfirm: {
                    element: "mobile_notifications",
                    action: "failure"
                },
                uiUserTopicClickAction: {
                    element: "topic",
                    action: "click"
                },
                uiLoggedOutFollowAttempt: "follow_attempt"
            }
        }), this.handleUserEvent = function(b, c) {
            this.scribeInteraction(this.attr.urlToActionMap[c.requestUrl], c, a(c.sourceEventData)), c.isFollowBack && this.scribeInteraction("follow_back", c, a(c.sourceEventData))
        }, this.handleAction = function(b, c) {
            this.scribeInteraction(this.attr.userActionToActionMap[b.type], c, a(c))
        }, this.after("initialize", function() {
            this.on(document, "dataFollowStateChange dataUserActionSuccess", this.handleUserEvent), this.on(document, "uiMentionAction uiReportSpamAction uiListAction uiDmAction uiRetweetOnAction uiRetweetOffAction uiDeviceNotificationsOnAction uiDeviceNotificationsOffAction uiShowMobileNotificationsConfirm uiShowPushTweetsNotificationsConfirm uiUserTopicClickAction uiMuteUserAction uiUnmuteUserAction uiLoggedOutFollowAttempt", this.handleAction)
        })
    }
    var defineComponent = require("core/component"), itemTypes = require("app/utils/scribe_item_types"), associationTypes = require("app/utils/scribe_association_types"), withInteractionDataScribe = require("app/data/with_interaction_data_scribe");
    module.exports = defineComponent(userActionsScribe, withInteractionDataScribe)
});
define("app/data/item_actions_scribe", ["module", "require", "exports", "core/component", "app/data/with_interaction_data_scribe", "app/data/with_conversation_metadata", "app/data/with_card_metadata"], function(module, require, exports) {
    function itemActionsScribe() {
        this.defaultAttrs({
            profileHoversEnabled: !1
        }), this.handleNewerTimelineItems = function(a, b) {
            this.scribeInteractiveResults({
                element: "newer",
                action: "results"
            }, b.items, b)
        }, this.handleRangeTimelineItems = function(a, b) {
            this.scribeInteractiveResults({
                element: "range",
                action: "results"
            }, b.items, b)
        }, this.handlePeriodPress = function(a, b) {
            this.scribe({
                element: "period_press",
                action: "results"
            })
        }, this.handleTopBarBirdClick = function(a, b) {
            this.scribe({
                component: "top_bar",
                element: "bird",
                action: "results"
            })
        }, this.handleUserComposedTweet = function(a, b) {
            this.scribe({
                element: "composed_tweet",
                action: "results"
            })
        }, this.handleUserFollowTweetInjection = function(a, b) {
            this.scribe({
                element: "follow_tweet_injection",
                action: "results"
            })
        }, this.handleStreamingInjection = function() {
            this.scribe({
                element: "streaming_injection",
                action: "results"
            })
        }, this.handlePushStateInjection = function(a, b) {
            this.scribe({
                element: "pushstate_injection",
                action: "results"
            })
        }, this.handleProfilePopup = function(a, b) {
            var c = b.sourceEventData, d = c.isMentionClick ? "mention_click": "profile_click";
            c.userId = b.user_id;
            if (c.interactionInsideCard)
                this.scribeCardAction(d, a, c);
            else {
                var e = this.addConversationScribeContext({
                    action: d
                }, c, !0);
                this.scribeInteraction(e, c)
            }
        }, this.scribeItemAction = function(a, b, c) {
            var d = this.addConversationScribeContext({
                action: a
            }, c);
            this.scribeInteraction(d, c)
        }, this.scribeSearchTagClick = function(a, b) {
            var c = a.type == "uiCashtagClick" ? "cashtag": "hashtag";
            this.scribeInteraction({
                element: c,
                action: "search"
            }, b)
        }, this.scribeGeoPivotClick = function(a, b) {
            var c = {
                context: b.placeId,
                event_value: b.tweetId
            };
            this.scribeInteraction({
                element: "place_pivot",
                action: "click"
            }, b, c)
        }, this.scribeLinkClick = function(a, b) {
            var c = {};
            b.tcoUrl && (c.message = b.tcoUrl), b.text && b.text.indexOf("pic.twitter.com") == 0 && (b.url = "http://" + b.text), this.scribeInteraction("open_link", b, c)
        }, this.scribeCardAction = function(a, b, c) {
            c && c.tweetHasCard && this.scribeCardInteraction(a, c)
        }, this.after("initialize", function() {
            this.scribeOnEvent("uiNewItemsBarClick", {
                component: "tweet",
                element: "new_tweets_bar",
                action: "click"
            }), this.scribeOnEvent("uiNewItemsBarShown", {
                component: "tweet",
                element: "new_tweets_bar",
                action: "show"
            }), this.scribeOnEvent("uiNewItemsBarHidden", {
                component: "tweet",
                element: "new_tweets_bar",
                action: "hide"
            }), this.on(document, "uiHasInjectedNewTimeline", this.handleNewerTimelineItems), this.on(document, "uiHasInjectedRangeTimelineItems", this.handleRangeTimelineItems), this.on(document, "uiUserPressedPeriodAndSawNewTweets", this.handlePeriodPress), this.on(document, "uiUserPushStateInjectedTweets", this.handlePushStateInjection), this.on(document, "uiUserClickedTopBarBirdAndSawNewTweets", this.handleTopBarBirdClick), this.on(document, "uiUserComposedTweet", this.handleUserComposedTweet), this.on(document, "uiUserFollowTweetInjection", this.handleUserFollowTweetInjection), this.on(document, "uiUserSawItemsViaStreamingInjection", this.handleStreamingInjection), this.attr.profileHoversEnabled || this.on(document, "dataProfilePopupSuccess", this.handleProfilePopup), this.on(document, "uiItemSelected", this.scribeItemAction.bind(this, "select")), this.on(document, "uiItemDeselected", this.scribeItemAction.bind(this, "deselect")), this.on(document, "uiHashtagClick uiCashtagClick", this.scribeSearchTagClick), this.on(document, "uiGeoPivotClick", this.scribeGeoPivotClick), this.on(document, "uiItemLinkClick", this.scribeLinkClick), this.on(document, "uiCardInteractionLinkClick", this.scribeCardAction.bind(this, "click")), this.on(document, "uiCardExternalLinkClick", this.scribeCardAction.bind(this, "open_link")), this.on(document, "uiItemSelected", this.scribeCardAction.bind(this, "show")), this.on(document, "uiItemDeselected", this.scribeCardAction.bind(this, "hide")), this.on(document, "uiMapShow", this.scribeItemAction.bind(this, "show")), this.on(document, "uiMapClick", this.scribeItemAction.bind(this, "click")), this.on(document, "uiShareViaEmailDialogOpened", this.scribeItemAction.bind(this, "open"))
        })
    }
    var defineComponent = require("core/component"), withInteractionDataScribe = require("app/data/with_interaction_data_scribe"), withConversationMetadata = require("app/data/with_conversation_metadata"), withCardMetadata = require("app/data/with_card_metadata");
    module.exports = defineComponent(itemActionsScribe, withInteractionDataScribe, withConversationMetadata, withCardMetadata)
});
define("app/utils/full_path", ["module", "require", "exports"], function(module, require, exports) {
    function fullPath() {
        return [location.pathname, location.search].join("")
    }
    module.exports = fullPath
});
define("app/data/navigation_scribe", ["module", "require", "exports", "core/component", "app/data/client_event", "app/data/with_scribe", "app/utils/full_path"], function(module, require, exports) {
    function navigationScribe() {
        this.scribeNav = function(a, b) {
            this.scribe("navigate", b, {
                url: b.url
            })
        }, this.scribeCachedImpression = function(a, b) {
            b.fromCache && this.scribe("impression")
        }, this.after("initialize", function() {
            clientEvent.internalReferer = fullPath(), this.on("uiNavigationLinkClick", this.scribeNav), this.on("uiPageChanged", this.scribeCachedImpression)
        })
    }
    var defineComponent = require("core/component"), clientEvent = require("app/data/client_event"), withScribe = require("app/data/with_scribe"), fullPath = require("app/utils/full_path");
    module.exports = defineComponent(navigationScribe, withScribe)
});
define("app/data/update_scribe", ["module", "require", "exports", "core/component", "app/data/client_event"], function(module, require, exports) {
    function updateScribe() {
        this.updateSection = function(a, b) {
            b && b.sectionName && (this.clientEvent.scribeContext.section = b.sectionName)
        }, this.after("initialize", function() {
            this.clientEvent = clientEvent, this.on(document, "dataUpdateScribeSection", this.updateSection)
        })
    }
    var defineComponent = require("core/component"), clientEvent = require("app/data/client_event");
    module.exports = defineComponent(updateScribe)
});
define("app/utils/cookie", ["module", "require", "exports"], function(module, require, exports) {
    module.exports = function(b, c, d) {
        var e = $.extend({}, d);
        if (arguments.length > 1 && String(c) !== "[object Object]") {
            if (c === null || c === undefined)
                e.expires =- 1, c = "";
            if (typeof e.expires == "number") {
                var f = e.expires, g = new Date((new Date).getTime() + f * 24 * 60 * 60 * 1e3);
                e.expires = g
            }
            return c = String(c), document.cookie = [encodeURIComponent(b), "=", e.raw ? c: encodeURIComponent(c), e.expires ? "; expires=" + e.expires.toUTCString(): "", "; path=" + (e.path || "/"), e.domain ? "; domain=" + e.domain: "", e.secure ? "; secure": ""].join("")
        }
        e = c || {};
        var h, i = e.raw ? function(a) {
            return a
        }
        : decodeURIComponent;
        return (h = (new RegExp("(?:^|; )" + encodeURIComponent(b) + "=([^;]*)")).exec(document.cookie)) ? i(h[1]) : null
    }
});
define("app/boot/scribing", ["module", "require", "exports", "app/data/scribe_transport", "app/data/scribe_monitor", "app/data/client_event", "app/data/tweet_actions_scribe", "app/data/block_or_report_scribe", "app/data/user_actions_scribe", "app/data/item_actions_scribe", "app/data/navigation_scribe", "app/data/update_scribe", "app/utils/cookie"], function(module, require, exports) {
    function initialize(a) {
        cookie("scribe_url") && (scribeTransport.SCRIBE_API_ENDPOINT = cookie("scribe_url"));
        var b = {
            useAjax: !0,
            bufferEvents: a.environment != "development" && a.environment != "staging"&&!a.preflight,
            flushOnUnload: a.environment != "selenium",
            bufferSize: a.environment == "selenium" ? 1e3 * a.scribeBufferSize: a.scribeBufferSize,
            debug: !!a.debugAllowed,
            requestParameters: a.scribeParameters
        };
        scribeTransport.updateOptions(b), scribeTransport.registerEventHandlers(), clientEvent.scribeContext = {
            client: "web",
            page: a.pageName,
            section: a.sectionName
        }, clientEvent.scribeData = {
            internal_referer: clientEvent.internalReferer || a.internalReferer,
            client_version: a.macawSwift ? "macaw-swift": "swift"
        }, delete clientEvent.internalReferer, a.loggedIn || (clientEvent.scribeData.user_id = 0), (a.environment != "production" || a.preflight || a.scribesForScribeConsole) && ScribeMonitor.attachTo(document, {
            scribesForScribeConsole: a.scribesForScribeConsole
        }), TweetActionsScribe.attachTo(document, a), BlockOrReportScribe.attachTo(document, a), UserActionsScribe.attachTo(document, a), ItemActionsScribe.attachTo(document, a), NavigationScribe.attachTo(document, a), UpdateScribe.attachTo(document)
    }
    var scribeTransport = require("app/data/scribe_transport"), ScribeMonitor = require("app/data/scribe_monitor"), clientEvent = require("app/data/client_event"), TweetActionsScribe = require("app/data/tweet_actions_scribe"), BlockOrReportScribe = require("app/data/block_or_report_scribe"), UserActionsScribe = require("app/data/user_actions_scribe"), ItemActionsScribe = require("app/data/item_actions_scribe"), NavigationScribe = require("app/data/navigation_scribe"), UpdateScribe = require("app/data/update_scribe"), cookie = require("app/utils/cookie");
    module.exports = initialize
});
define("app/utils/push_state_enabled", ["module", "require", "exports"], function(module, require, exports) {
    function pushStateEnabled(a) {
        return a&&!!window.history&&!!history.pushState
    }
    module.exports = pushStateEnabled
});
define("app/ui/navigation", ["module", "require", "exports", "core/component", "app/utils/full_path", "app/utils/push_state_enabled"], function(module, require, exports) {
    function navigation() {
        this.defaultAttrs({
            spinnerContainer: "body",
            pushState: !0,
            pushStateSelector: "a.js-nav",
            pageContainer: "#page-container",
            docContainer: "#doc",
            globalHeadingSelector: ".global-nav h1",
            baseFoucClass: "swift-loading"
        }), this.navigate = function(a) {
            var b, c;
            if (a.shiftKey || a.ctrlKey || a.metaKey || a.which != undefined && a.which > 1)
                return;
            b = $(a.target), c = b.closest(this.attr.pushStateSelector), c.length&&!a.isDefaultPrevented() && c.attr("href") && (this.trigger(c, "uiNavigate", {
                href: c.attr("href")
            }), a.preventDefault(), a.stopImmediatePropagation())
        }, this.updatePage = function(a, b) {
            this.hideSpinner(), this.trigger("uiBeforePageChanged", b), this.trigger("uiTeardown", {}), this.trigger("uiUpdatePageCache", {
                href: b.href
            }), $("body").attr("class", b.init_data.bodyFoucClassNames + " " + b.body_class_names), this.select("docContainer").attr("class", b.doc_class_names), this.select("pageContainer").attr("class", b.page_container_class_names), b.canonical_url && $('link[rel="canonical"]').attr("href", b.canonical_url);
            var c = b.banners&&!b.fromCache ? b.banners + b.page: b.page;
            this.$node.find(b.init_data.viewContainer).html(c), b.isPopState || $(window).scrollTop(0), using(b.module, function(a) {
                b.init_data.fromCache = b.fromCache, a(b.init_data), $("body").removeClass(this.attr.baseFoucClass), this.trigger("uiPageChanged", b)
            }.bind(this))
        }, this.showSpinner = function(a, b) {
            this.trigger("uiShowGlobalLoadingIndicator")
        }, this.hideSpinner = function(a, b) {
            this.trigger("uiHideGlobalLoadingIndicator")
        }, this.onPopState = function(a, b) {
            var c = {
                state: a.originalEvent && a.originalEvent.state
            };
            this.trigger(document, {
                type: "uiPopStateNavigate",
                defaultBehavior: this.doPopState.bind(this, a, c)
            }, c)
        }, this.doPopState = function(a, b) {
            b.state && (isSafari && (document.body.style.display = "none", document.body.offsetHeight, document.body.style.display = "block"), this.trigger("uiNavigate", {
                isPopState: !0,
                href: fullPath()
            }))
        }, this.after("initialize", function() {
            pushStateEnabled(this.attr.pushState) && (this.on("click", this.navigate), this.on(window, "popstate", this.onPopState), this.on("dataPageRefresh", this.updatePage), this.on("dataPageFetch", this.showSpinner))
        })
    }
    var component = require("core/component"), fullPath = require("app/utils/full_path"), isSafari = $.browser.safari===!0, pushStateEnabled = require("app/utils/push_state_enabled"), Navigation = component(navigation);
    module.exports = Navigation
});
define("app/utils/time", ["module", "require", "exports"], function(module, require, exports) {
    function Duration(a) {
        this.ms = a
    }
    function time(a) {
        var b = {
            seconds: new Duration(a * 1e3),
            minutes: new Duration(a * 1e3 * 60),
            hours: new Duration(a * 1e3 * 60 * 60),
            days: new Duration(a * 1e3 * 60 * 60 * 24)
        };
        return b.second = b.seconds, b.minute = b.minutes, b.hour = b.hours, b.day = b.days, b
    }
    var perf = window.performance, perf_now = perf && perf.now;
    time.now = function() {
        return perf_now ? Math.round(perf.now() + perf.timing.navigationStart) : (new Date).getTime()
    }, Duration.prototype.fromNow = function() {
        return new Date(time.now() + this.ms)
    }, Duration.prototype.ago = function() {
        return new Date(time.now() - this.ms)
    }, Duration.prototype.getTime = Duration.prototype.valueOf = function() {
        return this.ms
    }, module.exports = time
});
define("app/utils/storage/core", ["module", "require", "exports", "core/compose", "core/advice"], function(module, require, exports) {
    function localStorage() {
        this.initialize = function(a) {
            this.namespace = a, this.prefix = ["__", this.namespace, "__:"].join(""), this.matcher = new RegExp("^" + this.prefix)
        }, this.getItem = function(a) {
            return this.decode(window.localStorage.getItem(this.prefix + a))
        }, this.setItem = function(a, b) {
            try {
                return window.localStorage.setItem(this.prefix + a, this.encode(b))
            } catch (c) {
                return window.DEBUG && window.DEBUG.enabled && console.error(c), undefined
            }
        }, this.removeItem = function(a) {
            return window.localStorage.removeItem(this.prefix + a)
        }, this.keys = function() {
            var a = [];
            for (var b = 0, c = window.localStorage.length, d; b < c; b++)
                d = window.localStorage.key(b), d.match(this.matcher) && a.push(d.replace(this.matcher, ""));
            return a
        }, this.clear = function() {
            this.keys().forEach(function(a) {
                this.removeItem(a)
            }, this)
        }, this.clearAll = function() {
            window.localStorage.clear()
        }
    }
    function userData() {
        function b(b, c) {
            var d = c.xmlDocument.documentElement;
            a[b] = {};
            while (d.firstChild)
                d.removeChild(d.firstChild);
            c.save(b)
        }
        function c(a) {
            return document.getElementById("__storage_" + a)
        }
        var a = {};
        this.initialize = function(b) {
            this.namespace = b, (this.dataStore = c(this.namespace)) || this.createStorageElement(), this.xmlDoc = this.dataStore.xmlDocument, this.xmlDocEl = this.xmlDoc.documentElement, a[this.namespace] = a[this.namespace] || {}
        }, this.createStorageElement = function() {
            this.dataStore = document.createElement("div"), this.dataStore.id = "__storage_" + this.namespace, this.dataStore.style.display = "none", document.appendChild(this.dataStore), this.dataStore.addBehavior("#default#userData"), this.dataStore.load(this.namespace)
        }, this.getNodeByKey = function(b) {
            var c = this.xmlDocEl.childNodes, d;
            if (d = a[this.namespace][b])
                return d;
            for (var e = 0, f = c.length; e < f; e++) {
                d = c.item(e);
                if (d.getAttribute("key") == b)
                    return a[this.namespace][b] = d, d
            }
            return null
        }, this.getItem = function(a) {
            var b = this.getNodeByKey(a), c = null;
            return b && (c = b.getAttribute("value")), this.decode(c)
        }, this.setItem = function(b, c) {
            var d = this.getNodeByKey(b);
            return d ? d.setAttribute("value", this.encode(c)) : (d = this.xmlDoc.createNode(1, "item", ""), d.setAttribute("key", b), d.setAttribute("value", this.encode(c)), this.xmlDocEl.appendChild(d), a[this.namespace][b] = d), this.dataStore.save(this.namespace), c
        }, this.removeItem = function(b) {
            var c = this.getNodeByKey(b);
            c && (this.xmlDocEl.removeChild(c), delete a[this.namespace][b]), this.dataStore.save(this.namespace)
        }, this.keys = function() {
            var a = this.xmlDocEl.childNodes.length, b = [];
            for (var c = 0; c < a; c++)
                b.push(this.xmlDocEl.childNodes[c].getAttribute("key"));
            return b
        }, this.clear = function() {
            b(this.namespace, this.dataStore)
        }, this.clearAll = function() {
            for (var d in a)
                b(d, c(d)), a[d] = {}
        }
    }
    function noStorage() {
        this.initialize = $.noop, this.getNodeByKey = function(a) {
            return null
        }, this.getItem = function(a) {
            return null
        }, this.setItem = function(a, b) {
            return b
        }, this.removeItem = function(a) {
            return null
        }, this.keys = function() {
            return []
        }, this.clear = $.noop, this.clearAll = $.noop
    }
    function memory() {
        this.initialize = function(a) {
            this.namespace = a, memoryStore[this.namespace] || (memoryStore[this.namespace] = {}), this.store = memoryStore[this.namespace]
        }, this.getItem = function(a) {
            return this.store[a] ? this.decode(this.store[a]) : undefined
        }, this.setItem = function(a, b) {
            return this.store[a] = this.encode(b)
        }, this.removeItem = function(a) {
            delete this.store[a]
        }, this.keys = function() {
            return Object.keys(this.store)
        }, this.clear = function() {
            this.store = memoryStore[this.namespace] = {}
        }, this.clearAll = function() {
            memoryStore = {}
        }
    }
    function browserStore() {
        supportsLocalStorage() ? localStorage.call(this) : document.documentElement.addBehavior ? noStorage.call(this) : memory.call(this)
    }
    function supportsLocalStorage() {
        if (doesLocalStorage === undefined)
            try {
                window.localStorage.setItem("~~~~", 1), window.localStorage.removeItem("~~~~"), doesLocalStorage=!0
        } catch (a) {
            doesLocalStorage=!1
        }
        return doesLocalStorage
    }
    function encoding() {
        this.encode = function(a) {
            return a === undefined && (a = null), JSON.stringify(a)
        }, this.decode = function(a) {
            return JSON.parse(a)
        }
    }
    function CoreStorage() {
        arguments.length && this.initialize.apply(this, arguments)
    }
    var compose = require("core/compose"), advice = require("core/advice"), memoryStore = {}, doesLocalStorage;
    compose.mixin(CoreStorage.prototype, [encoding, browserStore, advice.withAdvice]), CoreStorage.clearAll = CoreStorage.prototype.clearAll, module.exports = CoreStorage
});
define("app/data/notifications", ["module", "require", "exports", "app/utils/storage/core", "app/utils/time"], function(module, require, exports) {
    function Notification(a, b, c, d) {
        this.key = b, this.timestamp = 0, this.active = a, this.seenFirstResponse=!1, this.pollEvent = c, this.paramAdder = d
    }
    function Notifications() {
        this.entries = []
    }
    var Storage = require("app/utils/storage/core"), time = require("app/utils/time"), pollDelay = 2e4, storage = new Storage("DM"), filteredEndpoints = ["/i/users/recommendations", "/i/timeline", "/i/notifications/timeline", "/i/discover/timeline", "/i/search/timeline", "/i/profiles/show", "/messages"];
    Notification.prototype = {
        reset: function() {
            this.timestamp = time.now()
        },
        isResponseValid: function(a) {
            return this.active && a && a[this.key] && a.notCached && a[this.key].status == "ok" && a[this.key].response !== null
        },
        update: function(a) {
            this.isResponseValid(a) ? this.reset() : !this.seenFirstResponse && this.pollEvent && $(document).trigger(this.pollEvent), this.seenFirstResponse=!0
        },
        shouldPoll: function() {
            return time.now() - this.timestamp > pollDelay
        },
        addParam: function(a) {
            this.shouldPoll() && this.paramAdder(a)
        }
    }, Notifications.prototype = {
        init: function(a) {
            this.initialized=!0, this.dm = new Notification(a.toasts_dm, "d", "uiDMPoll", this.addDMData), this.connect = new Notification(a.toasts_timeline, "t", null, function() {}), this.spoonbill = new Notification(a.toasts_spoonbill, "n", null, this.addSpoonbillData), this.spoonbill.shouldPoll = function() {
                return !0
            }, this.entries = [this.dm, this.connect, this.spoonbill], a.toasts_dm_poll_scale && (pollDelay = a.toasts_dm_poll_scale * 1e3)
        },
        getPollDelay: function() {
            return pollDelay
        },
        addDMData: function(a) {
            a.oldest_unread_id = storage.getItem("oldestUnreadMessageId") || 0
        },
        addSpoonbillData: function(a) {
            a.last_note_ts = storage.getItem("latestNotificationTimestamp") || 0
        },
        updateNotificationState: function(a) {
            this.entries.forEach(function(b) {
                b.update(a)
            })
        },
        resetDMState: function(a, b) {
            this.dm.reset()
        },
        shouldPoll: function() {
            return this.initialized?!0 : !1
        },
        extraParameters: function(a) {
            if (!a ||!this.shouldPoll())
                return {};
            var b = {};
            return filteredEndpoints.some(function(b) {
                return a.indexOf(b) == 0
            }) && this.entries.forEach(function(a) {
                a.addParam(b)
            }), b
        }
    }, module.exports = new Notifications
});
define("app/utils/querystring", ["module", "require", "exports"], function(module, require, exports) {
    function encodeQueryPart(a) {
        return encodeURIComponent(a).replace(/\+/g, "%2B")
    }
    function decodeQueryPart(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }
    function queryEncode(a) {
        var b = [];
        for (var c in a)
            a[c] !== null && typeof a[c] != "undefined" && b.push(encodeQueryPart(c) + "=" + encodeQueryPart(a[c]));
        return b.sort().join("&")
    }
    function queryDecode(a) {
        var b = {}, c, d, e, f;
        if (a) {
            c = a.split("&");
            for (f = 0; e = c[f]; f++)
                d = e.split("="), d.length == 2 && (b[decodeQueryPart(d[0])] = decodeQueryPart(d[1]))
        }
        return b
    }
    module.exports = {
        decode: queryDecode,
        encode: queryEncode,
        encodePart: encodeQueryPart,
        decodePart: decodeQueryPart
    }
});
define("app/utils/params", ["module", "require", "exports", "app/utils/querystring"], function(module, require, exports) {
    var qs = require("app/utils/querystring"), fromQuery = function(a) {
        var b = a.search.substr(1);
        return qs.decode(b)
    }, fromFragment = function(a) {
        var b = a.href, c = b.indexOf("#"), d = c < 0 ? "": b.substring(c + 1);
        return qs.decode(d)
    }, combined = function(a) {
        var b = {}, c = fromQuery(a), d = fromFragment(a);
        for (var e in c)
            c.hasOwnProperty(e) && (b[e] = c[e]);
        for (var e in d)
            d.hasOwnProperty(e) && (b[e] = d[e]);
        return b
    };
    module.exports = {
        combined: combined,
        fromQuery: fromQuery,
        fromFragment: fromFragment
    }
});
define("app/data/with_auth_token", ["module", "require", "exports", "app/utils/auth_token", "core/utils"], function(module, require, exports) {
    function withAuthToken() {
        this.addAuthToken = function(b) {
            if (!authToken.get())
                throw "addAuthToken requires a formAuthenticityToken";
            return b = b || {}, utils.merge(b, {
                authenticity_token: authToken.get()
            })
        }, this.addPHXAuthToken = function(b) {
            if (!authToken.get())
                throw "addPHXAuthToken requires a formAuthenticityToken";
            return b = b || {}, utils.merge(b, {
                post_authenticity_token: authToken.get()
            })
        }, this.getAuthToken = function() {
            return this.attr.formAuthenticityToken
        }
    }
    var authToken = require("app/utils/auth_token"), utils = require("core/utils");
    module.exports = withAuthToken
});
deferred('$lib/gibberish-aes.js', function() {
    /*! Gibberish-AES (c) 2008 Mark Percival https://github.com/mdp/gibberish-aes License: MIT */
    (function(a) {
        var b = function() {
            var a = 14, c = 8, d=!1, e = function(a) {
                try {
                    return unescape(encodeURIComponent(a))
                } catch (b) {
                    throw "Error on UTF-8 encode"
                }
            }, f = function(a) {
                try {
                    return decodeURIComponent(escape(a))
                } catch (b) {
                    throw "Bad Key"
                }
            }, g = function(a) {
                var b = [], c, d;
                a.length < 16 && (c = 16 - a.length, b = [c, c, c, c, c, c, c, c, c, c, c, c, c, c, c, c]);
                for (d = 0; d < a.length; d++)
                    b[d] = a[d];
                return b
            }, h = function(a, b) {
                var c = "", d, e;
                if (b) {
                    d = a[15];
                    if (d > 16)
                        throw "Decryption error: Maybe bad key";
                    if (d == 16)
                        return "";
                    for (e = 0; e < 16 - d; e++)
                        c += String.fromCharCode(a[e])
                } else 
                    for (e = 0; e < 16; e++)
                        c += String.fromCharCode(a[e]);
                return c
            }, i = function(a) {
                var b = "", c;
                for (c = 0; c < a.length; c++)
                    b += (a[c] < 16 ? "0" : "") + a[c].toString(16);
                return b
            }, j = function(a) {
                var b = [];
                return a.replace(/(..)/g, function(a) {
                    b.push(parseInt(a, 16))
                }), b
            }, k = function(a) {
                a = e(a);
                var b = [], c;
                for (c = 0; c < a.length; c++)
                    b[c] = a.charCodeAt(c);
                return b
            }, l = function(b) {
                switch (b) {
                case 128:
                    a = 10, c = 4;
                    break;
                case 192:
                    a = 12, c = 6;
                    break;
                case 256:
                    a = 14, c = 8;
                    break;
                default:
                    throw "Invalid Key Size Specified:" + b
                }
            }, m = function(a) {
                var b = [], c;
                for (c = 0; c < a; c++)
                    b = b.concat(Math.floor(Math.random() * 256));
                return b
            }, n = function(d, e) {
                var f = a >= 12 ? 3: 2, g = [], h = [], i = [], j = [], k = d.concat(e), l;
                i[0] = b.Hash.MD5(k), j = i[0];
                for (l = 1; l < f; l++)
                    i[l] = b.Hash.MD5(i[l - 1].concat(k)), j = j.concat(i[l]);
                return g = j.slice(0, 4 * c), h = j.slice(4 * c, 4 * c + 16), {
                    key: g,
                    iv: h
                }
            }, o = function(a, b, c) {
                b = x(b);
                var d = Math.ceil(a.length / 16), e = [], f, h = [];
                for (f = 0; f < d; f++)
                    e[f] = g(a.slice(f * 16, f * 16 + 16));
                a.length%16 === 0 && (e.push([16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]), d++);
                for (f = 0; f < e.length; f++)
                    e[f] = f === 0 ? w(e[f], c) : w(e[f], h[f - 1]), h[f] = q(e[f], b);
                return h
            }, p = function(a, b, c, d) {
                b = x(b);
                var e = a.length / 16, g = [], i, j = [], k = "";
                for (i = 0; i < e; i++)
                    g.push(a.slice(i * 16, (i + 1) * 16));
                for (i = g.length - 1; i >= 0; i--)
                    j[i] = r(g[i], b), j[i] = i === 0 ? w(j[i], c) : w(j[i], g[i - 1]);
                for (i = 0; i < e - 1; i++)
                    k += h(j[i]);
                return k += h(j[i], !0), d ? k : f(k)
            }, q = function(b, c) {
                d=!1;
                var e = v(b, c, 0), f;
                for (f = 1; f < a + 1; f++)
                    e = s(e), e = t(e), f < a && (e = u(e)), e = v(e, c, f);
                return e
            }, r = function(b, c) {
                d=!0;
                var e = v(b, c, a), f;
                for (f = a - 1; f>-1; f--)
                    e = t(e), e = s(e), e = v(e, c, f), f > 0 && (e = u(e));
                return e
            }, s = function(a) {
                var b = d ? B: A, c = [], e;
                for (e = 0; e < 16; e++)
                    c[e] = b[a[e]];
                return c
            }, t = function(a) {
                var b = [], c = d ? [0, 13, 10, 7, 4, 1, 14, 11, 8, 5, 2, 15, 12, 9, 6, 3]: [0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11], e;
                for (e = 0; e < 16; e++)
                    b[e] = a[c[e]];
                return b
            }, u = function(a) {
                var b = [], c;
                if (!d)
                    for (c = 0; c < 4; c++)
                        b[c * 4] = D[a[c * 4]]^E[a[1 + c * 4]]^a[2 + c * 4]^a[3 + c * 4], b[1 + c * 4] = a[c * 4]^D[a[1 + c * 4]]^E[a[2 + c * 4]]^a[3 + c * 4], b[2 + c * 4] = a[c * 4]^a[1 + c * 4]^D[a[2 + c * 4]]^E[a[3 + c * 4]], b[3 + c * 4] = E[a[c * 4]]^a[1 + c * 4]^a[2 + c * 4]^D[a[3 + c * 4]];
                else 
                    for (c = 0; c < 4; c++)
                        b[c * 4] = I[a[c * 4]]^G[a[1 + c * 4]]^H[a[2 + c * 4]]^F[a[3 + c * 4]], b[1 + c * 4] = F[a[c * 4]]^I[a[1 + c * 4]]^G[a[2 + c * 4]]^H[a[3 + c * 4]], b[2 + c * 4] = H[a[c * 4]]^F[a[1 + c * 4]]^I[a[2 + c * 4]]^G[a[3 + c * 4]], b[3 + c * 4] = G[a[c * 4]]^H[a[1 + c * 4]]^F[a[2 + c * 4]]^I[a[3 + c * 4]];
                return b
            }, v = function(a, b, c) {
                var d = [], e;
                for (e = 0; e < 16; e++)
                    d[e] = a[e]^b[c][e];
                return d
            }, w = function(a, b) {
                var c = [], d;
                for (d = 0; d < 16; d++)
                    c[d] = a[d]^b[d];
                return c
            }, x = function(b) {
                var d = [], e = [], f, g, h, i = [], j;
                for (f = 0; f < c; f++)
                    g = [b[4 * f], b[4 * f + 1], b[4 * f + 2], b[4 * f + 3]], d[f] = g;
                for (f = c; f < 4 * (a + 1); f++) {
                    d[f] = [];
                    for (h = 0; h < 4; h++)
                        e[h] = d[f - 1][h];
                    f%c === 0 ? (e = y(z(e)), e[0]^=C[f / c - 1]) : c > 6 && f%c == 4 && (e = y(e));
                    for (h = 0; h < 4; h++)
                        d[f][h] = d[f - c][h]^e[h]
                }
                for (f = 0; f < a + 1; f++) {
                    i[f] = [];
                    for (j = 0; j < 4; j++)
                        i[f].push(d[f * 4 + j][0], d[f * 4 + j][1], d[f * 4 + j][2], d[f * 4 + j][3])
                }
                return i
            }, y = function(a) {
                for (var b = 0; b < 4; b++)
                    a[b] = A[a[b]];
                return a
            }, z = function(a) {
                var b = a[0], c;
                for (c = 0; c < 4; c++)
                    a[c] = a[c + 1];
                return a[3] = b, a
            }, A = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22], B = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125], C = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145], D = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254, 27, 25, 31, 29, 19, 17, 23, 21, 11, 9, 15, 13, 3, 1, 7, 5, 59, 57, 63, 61, 51, 49, 55, 53, 43, 41, 47, 45, 35, 33, 39, 37, 91, 89, 95, 93, 83, 81, 87, 85, 75, 73, 79, 77, 67, 65, 71, 69, 123, 121, 127, 125, 115, 113, 119, 117, 107, 105, 111, 109, 99, 97, 103, 101, 155, 153, 159, 157, 147, 145, 151, 149, 139, 137, 143, 141, 131, 129, 135, 133, 187, 185, 191, 189, 179, 177, 183, 181, 171, 169, 175, 173, 163, 161, 167, 165, 219, 217, 223, 221, 211, 209, 215, 213, 203, 201, 207, 205, 195, 193, 199, 197, 251, 249, 255, 253, 243, 241, 247, 245, 235, 233, 239, 237, 227, 225, 231, 229], E = [0, 3, 6, 5, 12, 15, 10, 9, 24, 27, 30, 29, 20, 23, 18, 17, 48, 51, 54, 53, 60, 63, 58, 57, 40, 43, 46, 45, 36, 39, 34, 33, 96, 99, 102, 101, 108, 111, 106, 105, 120, 123, 126, 125, 116, 119, 114, 113, 80, 83, 86, 85, 92, 95, 90, 89, 72, 75, 78, 77, 68, 71, 66, 65, 192, 195, 198, 197, 204, 207, 202, 201, 216, 219, 222, 221, 212, 215, 210, 209, 240, 243, 246, 245, 252, 255, 250, 249, 232, 235, 238, 237, 228, 231, 226, 225, 160, 163, 166, 165, 172, 175, 170, 169, 184, 187, 190, 189, 180, 183, 178, 177, 144, 147, 150, 149, 156, 159, 154, 153, 136, 139, 142, 141, 132, 135, 130, 129, 155, 152, 157, 158, 151, 148, 145, 146, 131, 128, 133, 134, 143, 140, 137, 138, 171, 168, 173, 174, 167, 164, 161, 162, 179, 176, 181, 182, 191, 188, 185, 186, 251, 248, 253, 254, 247, 244, 241, 242, 227, 224, 229, 230, 239, 236, 233, 234, 203, 200, 205, 206, 199, 196, 193, 194, 211, 208, 213, 214, 223, 220, 217, 218, 91, 88, 93, 94, 87, 84, 81, 82, 67, 64, 69, 70, 79, 76, 73, 74, 107, 104, 109, 110, 103, 100, 97, 98, 115, 112, 117, 118, 127, 124, 121, 122, 59, 56, 61, 62, 55, 52, 49, 50, 35, 32, 37, 38, 47, 44, 41, 42, 11, 8, 13, 14, 7, 4, 1, 2, 19, 16, 21, 22, 31, 28, 25, 26], F = [0, 9, 18, 27, 36, 45, 54, 63, 72, 65, 90, 83, 108, 101, 126, 119, 144, 153, 130, 139, 180, 189, 166, 175, 216, 209, 202, 195, 252, 245, 238, 231, 59, 50, 41, 32, 31, 22, 13, 4, 115, 122, 97, 104, 87, 94, 69, 76, 171, 162, 185, 176, 143, 134, 157, 148, 227, 234, 241, 248, 199, 206, 213, 220, 118, 127, 100, 109, 82, 91, 64, 73, 62, 55, 44, 37, 26, 19, 8, 1, 230, 239, 244, 253, 194, 203, 208, 217, 174, 167, 188, 181, 138, 131, 152, 145, 77, 68, 95, 86, 105, 96, 123, 114, 5, 12, 23, 30, 33, 40, 51, 58, 221, 212, 207, 198, 249, 240, 235, 226, 149, 156, 135, 142, 177, 184, 163, 170, 236, 229, 254, 247, 200, 193, 218, 211, 164, 173, 182, 191, 128, 137, 146, 155, 124, 117, 110, 103, 88, 81, 74, 67, 52, 61, 38, 47, 16, 25, 2, 11, 215, 222, 197, 204, 243, 250, 225, 232, 159, 150, 141, 132, 187, 178, 169, 160, 71, 78, 85, 92, 99, 106, 113, 120, 15, 6, 29, 20, 43, 34, 57, 48, 154, 147, 136, 129, 190, 183, 172, 165, 210, 219, 192, 201, 246, 255, 228, 237, 10, 3, 24, 17, 46, 39, 60, 53, 66, 75, 80, 89, 102, 111, 116, 125, 161, 168, 179, 186, 133, 140, 151, 158, 233, 224, 251, 242, 205, 196, 223, 214, 49, 56, 35, 42, 21, 28, 7, 14, 121, 112, 107, 98, 93, 84, 79, 70], G = [0, 11, 22, 29, 44, 39, 58, 49, 88, 83, 78, 69, 116, 127, 98, 105, 176, 187, 166, 173, 156, 151, 138, 129, 232, 227, 254, 245, 196, 207, 210, 217, 123, 112, 109, 102, 87, 92, 65, 74, 35, 40, 53, 62, 15, 4, 25, 18, 203, 192, 221, 214, 231, 236, 241, 250, 147, 152, 133, 142, 191, 180, 169, 162, 246, 253, 224, 235, 218, 209, 204, 199, 174, 165, 184, 179, 130, 137, 148, 159, 70, 77, 80, 91, 106, 97, 124, 119, 30, 21, 8, 3, 50, 57, 36, 47, 141, 134, 155, 144, 161, 170, 183, 188, 213, 222, 195, 200, 249, 242, 239, 228, 61, 54, 43, 32, 17, 26, 7, 12, 101, 110, 115, 120, 73, 66, 95, 84, 247, 252, 225, 234, 219, 208, 205, 198, 175, 164, 185, 178, 131, 136, 149, 158, 71, 76, 81, 90, 107, 96, 125, 118, 31, 20, 9, 2, 51, 56, 37, 46, 140, 135, 154, 145, 160, 171, 182, 189, 212, 223, 194, 201, 248, 243, 238, 229, 60, 55, 42, 33, 16, 27, 6, 13, 100, 111, 114, 121, 72, 67, 94, 85, 1, 10, 23, 28, 45, 38, 59, 48, 89, 82, 79, 68, 117, 126, 99, 104, 177, 186, 167, 172, 157, 150, 139, 128, 233, 226, 255, 244, 197, 206, 211, 216, 122, 113, 108, 103, 86, 93, 64, 75, 34, 41, 52, 63, 14, 5, 24, 19, 202, 193, 220, 215, 230, 237, 240, 251, 146, 153, 132, 143, 190, 181, 168, 163], H = [0, 13, 26, 23, 52, 57, 46, 35, 104, 101, 114, 127, 92, 81, 70, 75, 208, 221, 202, 199, 228, 233, 254, 243, 184, 181, 162, 175, 140, 129, 150, 155, 187, 182, 161, 172, 143, 130, 149, 152, 211, 222, 201, 196, 231, 234, 253, 240, 107, 102, 113, 124, 95, 82, 69, 72, 3, 14, 25, 20, 55, 58, 45, 32, 109, 96, 119, 122, 89, 84, 67, 78, 5, 8, 31, 18, 49, 60, 43, 38, 189, 176, 167, 170, 137, 132, 147, 158, 213, 216, 207, 194, 225, 236, 251, 246, 214, 219, 204, 193, 226, 239, 248, 245, 190, 179, 164, 169, 138, 135, 144, 157, 6, 11, 28, 17, 50, 63, 40, 37, 110, 99, 116, 121, 90, 87, 64, 77, 218, 215, 192, 205, 238, 227, 244, 249, 178, 191, 168, 165, 134, 139, 156, 145, 10, 7, 16, 29, 62, 51, 36, 41, 98, 111, 120, 117, 86, 91, 76, 65, 97, 108, 123, 118, 85, 88, 79, 66, 9, 4, 19, 30, 61, 48, 39, 42, 177, 188, 171, 166, 133, 136, 159, 146, 217, 212, 195, 206, 237, 224, 247, 250, 183, 186, 173, 160, 131, 142, 153, 148, 223, 210, 197, 200, 235, 230, 241, 252, 103, 106, 125, 112, 83, 94, 73, 68, 15, 2, 21, 24, 59, 54, 33, 44, 12, 1, 22, 27, 56, 53, 34, 47, 100, 105, 126, 115, 80, 93, 74, 71, 220, 209, 198, 203, 232, 229, 242, 255, 180, 185, 174, 163, 128, 141, 154, 151], I = [0, 14, 28, 18, 56, 54, 36, 42, 112, 126, 108, 98, 72, 70, 84, 90, 224, 238, 252, 242, 216, 214, 196, 202, 144, 158, 140, 130, 168, 166, 180, 186, 219, 213, 199, 201, 227, 237, 255, 241, 171, 165, 183, 185, 147, 157, 143, 129, 59, 53, 39, 41, 3, 13, 31, 17, 75, 69, 87, 89, 115, 125, 111, 97, 173, 163, 177, 191, 149, 155, 137, 135, 221, 211, 193, 207, 229, 235, 249, 247, 77, 67, 81, 95, 117, 123, 105, 103, 61, 51, 33, 47, 5, 11, 25, 23, 118, 120, 106, 100, 78, 64, 82, 92, 6, 8, 26, 20, 62, 48, 34, 44, 150, 152, 138, 132, 174, 160, 178, 188, 230, 232, 250, 244, 222, 208, 194, 204, 65, 79, 93, 83, 121, 119, 101, 107, 49, 63, 45, 35, 9, 7, 21, 27, 161, 175, 189, 179, 153, 151, 133, 139, 209, 223, 205, 195, 233, 231, 245, 251, 154, 148, 134, 136, 162, 172, 190, 176, 234, 228, 246, 248, 210, 220, 206, 192, 122, 116, 102, 104, 66, 76, 94, 80, 10, 4, 22, 24, 50, 60, 46, 32, 236, 226, 240, 254, 212, 218, 200, 198, 156, 146, 128, 142, 164, 170, 184, 182, 12, 2, 16, 30, 52, 58, 40, 38, 124, 114, 96, 110, 68, 74, 88, 86, 55, 57, 43, 37, 15, 1, 19, 29, 71, 73, 91, 85, 127, 113, 99, 109, 215, 217, 203, 197, 239, 225, 243, 253, 167, 169, 187, 181, 159, 145, 131, 141], J = function(a, b, c) {
                var d = m(8), e = n(k(b), d), f = e.key, g = e.iv, h, i = [[83, 97, 108, 116, 101, 100, 95, 95].concat(d)];
                return c || (a = k(a)), h = o(a, f, g), h = i.concat(h), M.encode(h)
            }, K = function(a, b, c) {
                var d = M.decode(a), e = d.slice(8, 16), f = n(k(b), e), g = f.key, h = f.iv;
                return d = d.slice(16, d.length), a = p(d, g, h, c), a
            }, L = function(a) {
                function b(a, b) {
                    return a<<b | a>>>32 - b
                }
                function c(a, b) {
                    var c, d, e, f, g;
                    return e = a & 2147483648, f = b & 2147483648, c = a & 1073741824, d = b & 1073741824, g = (a & 1073741823) + (b & 1073741823), c & d ? g^2147483648^e^f : c | d ? g & 1073741824 ? g^3221225472^e^f : g^1073741824^e^f : g^e^f
                }
                function d(a, b, c) {
                    return a & b|~a & c
                }
                function e(a, b, c) {
                    return a & c | b&~c
                }
                function f(a, b, c) {
                    return a^b^c
                }
                function g(a, b, c) {
                    return b^(a|~c)
                }
                function h(a, e, f, g, h, i, j) {
                    return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e)
                }
                function i(a, d, f, g, h, i, j) {
                    return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d)
                }
                function j(a, d, e, g, h, i, j) {
                    return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d)
                }
                function k(a, d, e, f, h, i, j) {
                    return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d)
                }
                function l(a) {
                    var b, c = a.length, d = c + 8, e = (d - d%64) / 64, f = (e + 1) * 16, g = [], h = 0, i = 0;
                    while (i < c)
                        b = (i - i%4) / 4, h = i%4 * 8, g[b] = g[b] | a[i]<<h, i++;
                    return b = (i - i%4) / 4, h = i%4 * 8, g[b] = g[b] | 128<<h, g[f - 2] = c<<3, g[f - 1] = c>>>29, g
                }
                function m(a) {
                    var b, c, d = [];
                    for (c = 0; c <= 3; c++)
                        b = a>>>c * 8 & 255, d = d.concat(b);
                    return d
                }
                var n = [], o, p, q, r, s, t, u, v, w, x = 7, y = 12, z = 17, A = 22, B = 5, C = 9, D = 14, E = 20, F = 4, G = 11, H = 16, I = 23, J = 6, K = 10, L = 15, M = 21;
                n = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878;
                for (o = 0; o < n.length; o += 16)
                    p = t, q = u, r = v, s = w, t = h(t, u, v, w, n[o + 0], x, 3614090360), w = h(w, t, u, v, n[o + 1], y, 3905402710), v = h(v, w, t, u, n[o + 2], z, 606105819), u = h(u, v, w, t, n[o + 3], A, 3250441966), t = h(t, u, v, w, n[o + 4], x, 4118548399), w = h(w, t, u, v, n[o + 5], y, 1200080426), v = h(v, w, t, u, n[o + 6], z, 2821735955), u = h(u, v, w, t, n[o + 7], A, 4249261313), t = h(t, u, v, w, n[o + 8], x, 1770035416), w = h(w, t, u, v, n[o + 9], y, 2336552879), v = h(v, w, t, u, n[o + 10], z, 4294925233), u = h(u, v, w, t, n[o + 11], A, 2304563134), t = h(t, u, v, w, n[o + 12], x, 1804603682), w = h(w, t, u, v, n[o + 13], y, 4254626195), v = h(v, w, t, u, n[o + 14], z, 2792965006), u = h(u, v, w, t, n[o + 15], A, 1236535329), t = i(t, u, v, w, n[o + 1], B, 4129170786), w = i(w, t, u, v, n[o + 6], C, 3225465664), v = i(v, w, t, u, n[o + 11], D, 643717713), u = i(u, v, w, t, n[o + 0], E, 3921069994), t = i(t, u, v, w, n[o + 5], B, 3593408605), w = i(w, t, u, v, n[o + 10], C, 38016083), v = i(v, w, t, u, n[o + 15], D, 3634488961), u = i(u, v, w, t, n[o + 4], E, 3889429448), t = i(t, u, v, w, n[o + 9], B, 568446438), w = i(w, t, u, v, n[o + 14], C, 3275163606), v = i(v, w, t, u, n[o + 3], D, 4107603335), u = i(u, v, w, t, n[o + 8], E, 1163531501), t = i(t, u, v, w, n[o + 13], B, 2850285829), w = i(w, t, u, v, n[o + 2], C, 4243563512), v = i(v, w, t, u, n[o + 7], D, 1735328473), u = i(u, v, w, t, n[o + 12], E, 2368359562), t = j(t, u, v, w, n[o + 5], F, 4294588738), w = j(w, t, u, v, n[o + 8], G, 2272392833), v = j(v, w, t, u, n[o + 11], H, 1839030562), u = j(u, v, w, t, n[o + 14], I, 4259657740), t = j(t, u, v, w, n[o + 1], F, 2763975236), w = j(w, t, u, v, n[o + 4], G, 1272893353), v = j(v, w, t, u, n[o + 7], H, 4139469664), u = j(u, v, w, t, n[o + 10], I, 3200236656), t = j(t, u, v, w, n[o + 13], F, 681279174), w = j(w, t, u, v, n[o + 0], G, 3936430074), v = j(v, w, t, u, n[o + 3], H, 3572445317), u = j(u, v, w, t, n[o + 6], I, 76029189), t = j(t, u, v, w, n[o + 9], F, 3654602809), w = j(w, t, u, v, n[o + 12], G, 3873151461), v = j(v, w, t, u, n[o + 15], H, 530742520), u = j(u, v, w, t, n[o + 2], I, 3299628645), t = k(t, u, v, w, n[o + 0], J, 4096336452), w = k(w, t, u, v, n[o + 7], K, 1126891415), v = k(v, w, t, u, n[o + 14], L, 2878612391), u = k(u, v, w, t, n[o + 5], M, 4237533241), t = k(t, u, v, w, n[o + 12], J, 1700485571), w = k(w, t, u, v, n[o + 3], K, 2399980690), v = k(v, w, t, u, n[o + 10], L, 4293915773), u = k(u, v, w, t, n[o + 1], M, 2240044497), t = k(t, u, v, w, n[o + 8], J, 1873313359), w = k(w, t, u, v, n[o + 15], K, 4264355552), v = k(v, w, t, u, n[o + 6], L, 2734768916), u = k(u, v, w, t, n[o + 13], M, 1309151649), t = k(t, u, v, w, n[o + 4], J, 4149444226), w = k(w, t, u, v, n[o + 11], K, 3174756917), v = k(v, w, t, u, n[o + 2], L, 718787259), u = k(u, v, w, t, n[o + 9], M, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s);
                return m(t).concat(m(u), m(v), m(w))
            }, M = function() {
                var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = a.split(""), c = function(a, c) {
                    var d = [], e = "", f, g;
                    totalChunks = Math.floor(a.length * 16 / 3);
                    for (f = 0; f < a.length * 16; f++)
                        d.push(a[Math.floor(f / 16)][f%16]);
                    for (f = 0; f < d.length; f += 3)
                        e += b[d[f]>>2], e += b[(d[f] & 3)<<4 | d[f + 1]>>4], d[f + 1] !== undefined ? e += b[(d[f + 1] & 15)<<2 | d[f + 2]>>6] : e += "=", d[f + 2] !== undefined ? e += b[d[f + 2] & 63] : e += "=";
                    g = e.slice(0, 64) + "\n";
                    for (f = 1; f < Math.ceil(e.length / 64); f++)
                        g += e.slice(f * 64, f * 64 + 64) + (Math.ceil(e.length / 64) == f + 1 ? "" : "\n");
                    return g
                }, d = function(b) {
                    b = b.replace(/\n/g, "");
                    var c = [], d = [], e = [], f;
                    for (f = 0; f < b.length; f += 4)
                        d[0] = a.indexOf(b.charAt(f)), d[1] = a.indexOf(b.charAt(f + 1)), d[2] = a.indexOf(b.charAt(f + 2)), d[3] = a.indexOf(b.charAt(f + 3)), e[0] = d[0]<<2 | d[1]>>4, e[1] = (d[1] & 15)<<4 | d[2]>>2, e[2] = (d[2] & 3)<<6 | d[3], c.push(e[0], e[1], e[2]);
                    return c = c.slice(0, c.length - c.length%16), c
                };
                return typeof Array.indexOf == "function" && (a = b), {
                    encode: c,
                    decode: d
                }
            }();
            return {
                size: l,
                h2a: j,
                expandKey: x,
                encryptBlock: q,
                decryptBlock: r,
                Decrypt: d,
                s2a: k,
                rawEncrypt: o,
                dec: K,
                openSSLKey: n,
                a2h: i,
                enc: J,
                Hash: {
                    MD5: L
                },
                Base64: M
            }
        }();
        a.GibberishAES = b
    })(window)
});
provide("app/utils/crypto/aes", function(a) {
    using("$lib/gibberish-aes.js", function() {
        var b = GibberishAES;
        window.GibberishAES = null, a(b)
    })
})
define("app/utils/storage/with_crypto", ["module", "require", "exports", "app/utils/crypto/aes"], function(module, require, exports) {
    function withCrypto() {
        this.after("initialize", function(a, b) {
            this.secret = b
        }), this.around("getItem", function(a, b) {
            try {
                return a(b)
            } catch (c) {
                return this.removeItem(b), null
            }
        }), this.around("decode", function(a, b) {
            return a(aes.dec(b, this.secret))
        }), this.around("encode", function(a, b) {
            return aes.enc(a(b), this.secret)
        })
    }
    var aes = require("app/utils/crypto/aes");
    module.exports = withCrypto
});
define("app/utils/storage/with_expiry", ["module", "require", "exports", "app/utils/storage/core"], function(module, require, exports) {
    function withExpiry() {
        this.now = function() {
            return (new Date).getTime()
        }, this.isExpired = function(a) {
            var b = this.ttl.getItem(a) || 0;
            return typeof b == "number" && this.now() > b?!0 : !1
        }, this.updateTTL = function(a, b) {
            typeof b == "number" && this.ttl.setItem(a, this.now() + b)
        }, this.getCacheAge = function(a, b) {
            var c = this.ttl.getItem(a);
            if (c == null)
                return - 1;
            var d = c - b, e = this.now() - d;
            return e < 0?-1 : Math.floor(e / 36e5)
        }, this.after("initialize", function() {
            this.ttl = new Storage(this.namespace + "_ttl")
        }), this.around("setItem", function(a, b, c, d) {
            return typeof d == "number" ? this.ttl.setItem(b, this.now() + d) : this.ttl.removeItem(b), a(b, c)
        }), this.around("getItem", function(a, b) {
            var c = this.ttl.getItem(b);
            return typeof c == "number" && this.now() > c && this.removeItem(b), a(b)
        }), this.after("removeItem", function(a) {
            this.ttl.removeItem(a)
        }), this.after("clear", function() {
            this.ttl.clear()
        })
    }
    var Storage = require("app/utils/storage/core");
    module.exports = withExpiry
});
define("app/utils/storage/array/with_array", ["module", "require", "exports"], function(module, require, exports) {
    function withArray() {
        this.getArray = function(a) {
            return this.getItem(a) || []
        }, this.push = function(a, b) {
            var c = this.getArray(a), d = c.push(b);
            return this.setItem(a, c), d
        }, this.pushAll = function(a, b) {
            var c = this.getArray(a);
            return c.push.apply(c, b), this.setItem(a, c), c
        }
    }
    module.exports = withArray
});
define("app/utils/storage/array/with_max_elements", ["module", "require", "exports", "core/compose", "app/utils/storage/array/with_array"], function(module, require, exports) {
    function withMaxElements() {
        compose.mixin(this, [withArray]), this.maxElements = {}, this.getMaxElements = function(a) {
            return this.maxElements[a] || 0
        }, this.setMaxElements = function(a, b) {
            this.maxElements[a] = b
        }, this.before("push", function(a, b) {
            this.makeRoomFor(a, 1)
        }), this.around("pushAll", function(a, b, c) {
            return c = c || [], this.makeRoomFor(b, c.length), a(b, c.slice(Math.max(0, c.length - this.getMaxElements(b))))
        }), this.makeRoomFor = function(a, b) {
            var c = this.getArray(a), d = c.length + b - this.getMaxElements(a);
            d > 0 && (c.splice(0, d), this.setItem(a, c))
        }
    }
    var compose = require("core/compose"), withArray = require("app/utils/storage/array/with_array");
    module.exports = withMaxElements
});
define("app/utils/storage/array/with_unique_elements", ["module", "require", "exports", "core/compose", "app/utils/storage/array/with_array"], function(module, require, exports) {
    function withUniqueElements() {
        compose.mixin(this, [withArray]), this.before("push", function(a, b) {
            var c = this.getArray(a);
            this.deleteElement(c, b) && this.setItem(a, c)
        }), this.around("pushAll", function(a, b, c) {
            c = c || [];
            var d = this.getArray(b), e=!1, f = [], g = {};
            return c.forEach(function(a) {
                g[a] || (e = this.deleteElement(d, a) || e, g[a]=!0, f.push(a))
            }, this), e && this.setItem(b, d), a(b, f)
        }), this.deleteElement = function(a, b) {
            var c =- 1;
            return (c = a.indexOf(b)) >= 0 ? (a.splice(c, 1), !0) : !1
        }
    }
    var compose = require("core/compose"), withArray = require("app/utils/storage/array/with_array");
    module.exports = withUniqueElements
});
define("app/utils/storage/custom", ["module", "require", "exports", "core/compose", "app/utils/storage/core", "app/utils/storage/with_crypto", "app/utils/storage/with_expiry", "app/utils/storage/array/with_array", "app/utils/storage/array/with_max_elements", "app/utils/storage/array/with_unique_elements"], function(module, require, exports) {
    function storageConstr(a) {
        var b = Object.keys(a).filter(function(b) {
            return a[b]
        }).sort().join(","), c;
        if (c = lookup[b])
            return c;
        c = function() {
            CoreStorage.apply(this, arguments)
        }, c.prototype = new CoreStorage;
        var d = [];
        return a.withCrypto && d.push(withCrypto), a.withExpiry && d.push(withExpiry), a.withArray && d.push(withArray), a.withUniqueElements && d.push(withUniqueElements), a.withMaxElements && d.push(withMaxElements), d.length > 0 && compose.mixin(c.prototype, d), lookup[b] = c, c
    }
    var compose = require("core/compose"), CoreStorage = require("app/utils/storage/core"), withCrypto = require("app/utils/storage/with_crypto"), withExpiry = require("app/utils/storage/with_expiry"), withArray = require("app/utils/storage/array/with_array"), withMaxElements = require("app/utils/storage/array/with_max_elements"), withUniqueElements = require("app/utils/storage/array/with_unique_elements"), lookup = {};
    module.exports = storageConstr
});
define("app/data/dm/dm_settings", ["module", "require", "exports"], function(module, require, exports) {
    var cache = {}, dmSettings = {
        set: function(a) {
            cache.maintain_behavior = a.maintain_behavior
        },
        reset: function() {
            this.set({
                maintain_behavior: null
            })
        },
        settings: cache
    };
    dmSettings.reset(), module.exports = dmSettings
});
define("app/data/profile_info", ["module", "require", "exports"], function(module, require, exports) {
    var cache = {}, profileInfo = {
        set: function(a) {
            cache.presentation = a.profile_presentation
        },
        reset: function() {
            this.set({
                profile_presentation: null
            })
        },
        info: cache
    };
    profileInfo.reset(), module.exports = profileInfo
});
define("app/data/with_data", ["module", "require", "exports", "core/compose", "core/i18n", "core/utils", "app/data/notifications", "app/utils/params", "app/utils/time", "app/data/with_auth_token", "app/utils/storage/custom", "app/utils/storage/core", "app/data/dm/dm_settings", "app/data/profile_info"], function(module, require, exports) {
    function initializeXhrStorage() {
        xhrStorage || (xhrStorage = new CoreStorage("XHRNotes"))
    }
    function withData() {
        compose.mixin(this, [withAuthToken]);
        var a = [], b = [];
        this.defaultAttrs({}), this.composeData = function(a, b) {
            return a = a || {}, b.eventData && (a.sourceEventData = b.eventData), a
        }, this.callSuccessHandler = function(a, b, c) {
            typeof a == "function" ? a(b) : this.trigger(a, b)
        }, this.callErrorHandler = function(a, b, c) {
            typeof a == "function" ? a(b) : this.trigger(a, b)
        }, this.createSuccessHandler = function(b, c, d) {
            return initializeXhrStorage(), function(e, f, g) {
                d && d(e, f, g), a.slice(a.indexOf(g), 1);
                var h;
                f == "success" && (h = g.getResponseHeader("Redirect-Page-To")) && h == "/login" && (window.location.href = "/login");
                var i = e, j = null, k = encodeURIComponent(c.url);
                if (e && e.hasOwnProperty("note") && e.hasOwnProperty("inner")) {
                    i = e.inner, j = e.note;
                    var l = g.getResponseHeader("x-transaction");
                    l && l != xhrStorage.getItem(k) && (j.notCached=!0, xhrStorage.setItem(k, l))
                }
                i = this.composeData(i, c), c.cache_ttl && storage.setItem(k, {
                    data: i,
                    time: time.now()
                }, c.cache_ttl), b && this.callSuccessHandler(b, i, c), j && (notifications.updateNotificationState(j), j.notCached && this.trigger("dataNotificationsReceived", j)), i.debug && this.trigger("dataSetDebugData", i.debug)
            }.bind(this)
        }, this.retryJSONRequestAfterDelay = function(a, c, d) {
            var e = setTimeout(function() {
                this.JSONRequest(a, c)
            }.bind(this), d * 1e3);
            b.push(e)
        }, this.createErrorHandler = function(b, c, d, e, f) {
            return function(g, h) {
                f && f({}, h, g), a.slice(a.indexOf(g), 1);
                var i = g && typeof g.getResponseHeader == "function" ? parseInt(g.getResponseHeader("retry-after"), 10): null;
                if (c.retryIfUnavailable && g.status == 503 && i > 0) {
                    d.retryIfUnavailable=!1, this.retryJSONRequestAfterDelay(d, e, i);
                    return 
                }
                var j;
                try {
                    j = JSON.parse(g.responseText), j && j.challengeName ? this.trigger(document, "dataInitialChallengeNeeded", j) : j && j.message&&!this.attr.noShowError && this.trigger("uiShowError", j)
                } catch (k) {
                    j = {
                        xhr: {}
                    }, g && g.statusText && (j.xhr.statusText = g.statusText)
                }
                j.message || (j.message = _('Internal server error.')), j = this.composeData(j, c), b && this.callErrorHandler(b, j, c)
            }.bind(this)
        }, this.createCompletionHandler = function(a, b, c) {
            return function(d, e, f) {
                var g = time.now() - c;
                this.trigger && this.attr.statsName && this.trigger("dataAjaxDuration", {
                    statsName: this.attr.statsName,
                    duration: g,
                    status: e,
                    url: a.url,
                    requestData: this.sortData(b),
                    responseText: f && f.responseText
                })
            }.bind(this)
        }, this.sortData = function(a) {
            if (!a || typeof a != "object")
                return a;
            var b = {}, c = Object.keys(a).sort();
            return c.forEach(function(c) {
                b[c] = a[c]
            }), b
        }, this.extractParams = function(a, b) {
            var c = {}, d = params.fromQuery(b);
            return Object.keys(d).forEach(function(b) {
                a[b] && (c[b] = d[b])
            }), c
        }, this.JSONRequest = function(b, c) {
            var d = time.now(), e, f, g;
            b.retryIfUnavailable && (f = utils.merge(b), g = c);
            if (b.cache_ttl) {
                storage || (storage = new StorageConstr("with_data")), e = storage.getItem(encodeURIComponent(b.url));
                if (e && new Date - e.time <= b.cache_ttl) {
                    b.success && this.callSuccessHandler(b.success, e.data);
                    return 
                }
            }
            var h = c == "POST" || c == "DELETE";
            h && b.isMutation===!1 && (h=!1), delete b.isMutation, this.trigger && h && this.trigger("dataPageMutated"), ["url"].forEach(function(a) {
                if (!b.hasOwnProperty(a))
                    throw new Error("getJSONRequest called without required option: " + a, arguments)
            });
            var i = b.data || {}, j = b.headers;
            ["GET", "POST"].indexOf(c) < 0 && (i = $.extend({
                _method: c
            }, i), c = "POST"), c == "POST" && (i = this.addAuthToken(i), j && j["X-PHX"] && (i = this.addPHXAuthToken(i)));
            var k = $.extend({
                lang: !0
            }, b.echoParams);
            i = $.extend(i, this.extractParams(k, window.location)), $.extend(i, notifications.extraParameters(b.url));
            var l = this.createCompletionHandler(b, i, d);
            b.success = this.createSuccessHandler(b.success, b, l), b.error = this.createErrorHandler(b.error, b, f, g, l), Profile.info && Profile.info.presentation && $.extend(b.headers, {
                "X-PROF": Profile.info.presentation
            }), DM.settings && $.extend(b.headers, {
                "X-DM-MAINTAIN": DM.settings.maintain_behavior
            }), this.attr.includePageContext && this.attr.pageContext && (i.page_context = this.attr.pageContext);
            var m = $.ajax($.extend(b, {
                url: b.url,
                data: this.sortData(i),
                dataType: b.dataType || "json",
                type: c
            }));
            b.noAbortOnNavigate || a.push(m)
        }, this.get = function(a) {
            return this.JSONRequest(a, "GET")
        }, this.post = function(a) {
            return this.JSONRequest(a, "POST")
        }, this.destroy = function(a) {
            return this.JSONRequest(a, "DELETE")
        }, this.abortAllXHR = function() {
            a.forEach(function(a) {
                a && a.abort && a.abort()
            }), a = [], b.forEach(function(a) {
                clearTimeout(a)
            }), b = []
        }, this.after("initialize", function() {
            this.on(document, "dataBeforeNavigate", this.abortAllXHR)
        })
    }
    var compose = require("core/compose"), _ = require("core/i18n"), utils = require("core/utils"), notifications = require("app/data/notifications"), params = require("app/utils/params"), time = require("app/utils/time"), withAuthToken = require("app/data/with_auth_token"), customStorage = require("app/utils/storage/custom"), CoreStorage = require("app/utils/storage/core"), DM = require("app/data/dm/dm_settings"), Profile = require("app/data/profile_info"), StorageConstr = customStorage({
        withExpiry: !0
    }), storage, xhrStorage;
    module.exports = withData
});
define("app/data/with_rollback_count", ["module", "require", "exports"], function(module, require, exports) {
    module.exports = function() {
        this.rollbackCount = function() {
            return history.state && history.state.rollbackCount || 0
        }
    }
});
define("app/data/navigation", ["module", "require", "exports", "core/component", "core/utils", "core/registry", "app/utils/time", "app/utils/full_path", "app/data/with_data", "app/data/with_rollback_count", "app/utils/push_state_enabled"], function(module, require, exports) {
    function navigationData() {
        this.defaultAttrs({
            viewContainer: "#page-container",
            pushState: !0,
            pushStateRequestHeaders: {
                "X-Push-State-Request": !0
            },
            pushStatePageLimit: 5e5,
            assetsBasePath: "/",
            noTeardown: !0,
            init_data: {}
        });
        var a = /\/a\/(\d+)/, b, c, d, e;
        this.pageCache = {}, this.pageCacheTTLs = {}, this.navigateUsingPushState = function(a, b) {
            var e = fullPath();
            d = b.href, c = b.isPopState;
            if (!c && b.href == e && this.pageCache[e])
                return;
            this.getPageData(b.href)
        }, this.sweepPageCache = function() {
            var a = time.now();
            for (var b in this.pageCacheTTLs)
                a > this.pageCacheTTLs[b] && (delete this.pageCache[b], delete this.pageCacheTTLs[b])
        }, this.hasDeployTimestampChanged = function(b) {
            var c = this.attr.assetsBasePath && this.attr.assetsBasePath.match(a), d = b.init_data.assetsBasePath && b.init_data.assetsBasePath.match(a);
            return c && d && d[1] != c[1]
        }, this.getPageData = function(a) {
            var b;
            this.trigger("dataBeforeNavigate"), this.attr.init_data.initialState && this.createInitialState(), this.sweepPageCache(), this.trigger("uiBeforeNewPageLoad");
            if (b = this.pageCache[a])
                b.fromCache=!0, b.href = a, this.pageDataReceived(a, b);
            else {
                this.trigger("dataPageFetch");
                var c = this.attr.pushStateRequestHeaders;
                this.attr.init_data.isMonorail && (c = utils.merge(c, {
                    "X-Referrer-Stack": "monorail"
                })), c = utils.merge(c, {
                    "X-Asset-Version": this.attr.init_data.assetVersionKey
                }), this.get({
                    headers: c,
                    url: a,
                    success: function(b) {
                        var c;
                        if (b.init_data && b.page && b.module) {
                            c = b.init_data.href, b.href = c;
                            if (!b.init_data.pushState) {
                                this.navigateTo(c);
                                return 
                            }
                            if (this.hasDeployTimestampChanged(b)) {
                                this.navigateTo(c);
                                return 
                            }
                            if (b.init_data.viewContainer != this.attr.viewContainer) {
                                this.attr.viewContainer = b.init_data.viewContainer, this.navigateTo(c);
                                return 
                            }
                            this.cacheState(c, b);
                            if (d != a)
                                return;
                            this.pageDataReceived(c, b)
                        } else 
                            this.navigateTo(b.href || a)
                    }.bind(this),
                    error: function(b) {
                        this.navigateTo(a)
                    }.bind(this)
                })
            }
        }, this.updatePageCache = function(a, c) {
            if (c.href == b)
                return;
            var d = this.pageCache[b];
            d && (d.page = this.select("viewContainer").html(), this.pageCacheTTLs[b] = time(d.cache_ttl).seconds.fromNow().getTime(), d.page.length > this.attr.pushStatePageLimit && (delete this.pageCache[b], delete this.pageCacheTTLs[b])), this.trigger("dataPageCacheUpdated")
        }, this.cacheState = function(a, b) {
            b.cache_ttl !== 0 && (this.pageCache[a] = b, this.pageCacheTTLs[a] = time(b.cache_ttl).seconds.fromNow().getTime())
        }, this.pageDataReceived = function(a, b) {
            this.rollbackCount() > 0 ? (e = utils.once(this.refreshPage.bind(this, a, b)), this.on("uiDidRollback", e), this.trigger("dataNeedsRollback", {
                rollbackCount: this.rollbackCount()
            })) : (e && (this.off("uiDidRollback", e), e = null), this.refreshPage(a, b))
        }, this.refreshPage = function(a, b) {
            a != fullPath() && history.pushState({
                title: b.title
            }, b.title, a), b.isPopState = c, setTimeout(function() {
                this.trigger("dataPageRefresh", b)
            }.bind(this))
        }, this.createInitialState = function() {
            var a = utils.merge(this.attr.init_data.initialState, !0);
            a.init_data = utils.merge(this.attr.init_data, !0), delete a.init_data.initialState, this.attr.init_data.initialState = null, this.cacheState(b, a), this.createInitialHistoryEntry()
        }, this.createInitialHistoryEntry = function(a, b) {
            if (this.attr.init_data.initialState) {
                var c = this.attr.init_data.initialState.title;
                history.replaceState({
                    title: c
                }, c, fullPath())
            }
        }, this.resetPageCache = function(a, b) {
            this.pageCache = {}, this.pageCacheTTLs = {}
        }, this.removePageFromCache = function(a, b) {
            var c = b.href;
            this.pageCache[c] && (delete this.pageCache[c], delete this.pageCacheTTLs[c])
        }, this.navigateTo = function(a) {
            location.href = a
        }, this.navigateUsingRedirect = function(a, c) {
            var d = c.href;
            d != b && this.navigateTo(d)
        }, this.destroyCurrentPageState = function() {
            history.replaceState(null, document.title, b)
        }, this.resetStateVariables = function() {
            b = fullPath(), c=!1, d = null
        }, this.after("initialize", function() {
            pushStateEnabled(this.attr.pushState) ? (this.on("uiSwiftLoaded uiPageChanged", this.resetStateVariables), this.on("uiSwiftLoaded", this.createInitialHistoryEntry), this.on("uiNavigate", this.navigateUsingPushState), this.on("uiUpdatePageCache", this.updatePageCache), this.on(document, "dataPageMutated", this.resetPageCache), this.on(document, "uiPromotedLinkClick", this.removePageFromCache), this.on(window, "beforeunload", this.destroyCurrentPageState)) : (this.on("uiSwiftLoaded", this.resetStateVariables), this.on("uiNavigate", this.navigateUsingRedirect))
        })
    }
    var component = require("core/component"), utils = require("core/utils"), registry = require("core/registry"), time = require("app/utils/time"), fullPath = require("app/utils/full_path"), withData = require("app/data/with_data"), withRollbackCount = require("app/data/with_rollback_count"), pushStateEnabled = require("app/utils/push_state_enabled"), NavigationData = component(navigationData, withData, withRollbackCount);
    module.exports = NavigationData
});
define("app/data/teardown_manager", ["module", "require", "exports", "core/component", "core/registry"], function(module, require, exports) {
    function TeardownManager() {
        this.defaultAttrs({
            noTeardown: !0
        }), this.doTeardown = function(a, b) {
            Object.keys(registry.allInstances).forEach(function(a) {
                var c = registry.allInstances[a];
                c && this.teardownInstance(c.instance, b.teardownContext)
            }, this)
        }, this.teardownInstance = function(a, b) {
            if (a.attr.noTeardown)
                return;
            b ? a.teardownContext == b && a.teardown() : a.teardown()
        }, this.after("initialize", function() {
            this.on("uiTeardown", this.doTeardown)
        })
    }
    var defineComponent = require("core/component"), registry = require("core/registry");
    module.exports = defineComponent(TeardownManager)
});
define("app/utils/is_visible", ["module", "require", "exports"], function(module, require, exports) {
    function isVisible(a) {
        return a.is(":visible") && a.css("visibility") != "hidden" && a.css("opacity") == "1"
    }
    module.exports = isVisible
});
define("app/utils/is_enabled", ["module", "require", "exports"], function(module, require, exports) {
    function isEnabled(a) {
        return !a.attr("disabled")&&!a.attr("aria-disabled")
    }
    module.exports = isEnabled
});
define("app/utils/with_keyboard_modality", ["module", "require", "exports", "app/utils/is_visible", "app/utils/is_enabled"], function(module, require, exports) {
    function withKeyboardModality() {
        this.defaultAttrs({
            focusableDescendants: "a,textarea,select,input,button,div[contenteditable=true],li[tabindex]",
            firstTabStopClass: "js-first-tabstop",
            lastTabStopClass: "js-last-tabstop",
            firstTabStopSelector: ".js-first-tabstop",
            lastTabStopSelector: ".js-last-tabstop"
        }), this.focusNextAvailableControl = function(a, b) {
            var c = b.find(this.attr.focusableDescendants).get();
            a && a == "last" && c.reverse();
            var d;
            c.some(function(a) {
                var b = $(a);
                if (isEnabled(b) && isVisible(b))
                    return d = a, !0
            });
            if (d)
                try {
                    d.focus()
            } catch (e) {}
            return d && document.activeElement == d
        }, this.createFirstLastTabStop = function(a, b, c) {
            b = typeof b != "undefined" ? b : 0, c = typeof c != "undefined" ? c : 0, a.prepend('<div class="' + this.attr.firstTabStopClass + '" tabindex="' + b + '"></div>'), a.append('<div class="' + this.attr.lastTabStopClass + '" tabindex="' + c + '"></div>')
        }, this.removeFirstLastTabStop = function(a) {
            a.find(this.attr.firstTabStopSelector).remove(), a.find(this.attr.lastTabStopSelector).remove()
        }
    }
    var isVisible = require("app/utils/is_visible"), isEnabled = require("app/utils/is_enabled");
    module.exports = withKeyboardModality
});
define("app/utils/prevent_next_tooltip", ["module", "require", "exports"], function(module, require, exports) {
    function preventNextTooltip(a) {
        var b = $(a);
        if (!b.hasClass("js-tooltip"))
            return;
        b.addClass("js-is-nextTooltipPreventedOnFocus")
    }
    module.exports = preventNextTooltip
});
deferred('$lib/bootstrap_tooltip.js', function() {
    /*! bootstrap-tooltip.js v2.0.2 (c) 2012 Twitter, Inc. http://www.apache.org/licenses/LICENSE-2.0 */
    !function($) {
        function b(b) {
            clearTimeout(b), delete a[b]
        }
        function c(b, c) {
            var d = setTimeout(b, c);
            return a[d]=!0, d
        }
        function d() {
            Object.keys(a).forEach(b)
        }
        "use strict";
        var a = {}, e = ".visuallyhidden, .u-hiddenVisually", f = function(a, b) {
            this.init("tooltip", a, b)
        };
        f.prototype = {
            constructor: f,
            init: function(a, b, c) {
                this.type = a, this.$element = $(b), this.options = this.getOptions(c), this.enabled=!0, this.options.trigger != "manual" && (this.$element.on("mouseenter focus", this.options.selector, $.proxy(this.enter, this)), this.$element.on("mouseleave blur", this.options.selector, $.proxy(this.leave, this)), this.$element.on("click", this.options.selector, $.proxy(this.leave, this))), this.options.selector ? this._options = $.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            },
            getOptions: function(a) {
                return a = $.extend({}, $.fn[this.type].defaults, a, this.$element.data()), a.delay && typeof a.delay == "number" && (a.delay = {
                    show: a.delay,
                    hide: 100
                }), a
            },
            enter: function(a) {
                var d = $(a.target);
                if (a.type == "focusin" && d.hasClass("js-is-nextTooltipPreventedOnFocus")) {
                    d.removeClass("js-is-nextTooltipPreventedOnFocus");
                    return 
                }
                var e = $(a.currentTarget)[this.type](this._options).data(this.type);
                !e.options.delay ||!e.options.delay.show ? e.show() : (b(e.timeout), e.timeout = c(function() {
                    e.show()
                }, e.determineShowDelay(e.options.delay.show)))
            },
            leave: function(a) {
                var d = $(a.currentTarget)[this.type](this._options).data(this.type);
                !d.options.delay ||!d.options.delay.hide ? d.hide() : (b(d.timeout), d.timeout = c(function() {
                    d.hide()
                }, d.options.delay.hide))
            },
            hasIconOnlyLabel: function() {
                var a = this.$element.text().trim(), b=!!this.$element.find("img").length, c = function(a) {
                    return $(a).text().trim()
                }, d = this.getHiddenLabel().toArray().map(c).join("");
                return b&&!!a.length || d == a
            },
            determineShowDelay: function(a) {
                return this.hasIconOnlyLabel() ? 250 : a
            },
            getLabelText: function() {
                var a = this.$element.text().trim();
                return a.length || (a = this.getLabelEl().text()), a.trim()
            },
            getLabelEl: function() {
                var a = this.$element[0].id, b = $();
                return this.$element.is("input") && (b = this.$element.closest("label"), !b.length && a && (b = $("label[for=" + a + "]"))), b
            },
            hasHiddenLabel: function() {
                return !!this.getHiddenLabel().length
            },
            getHiddenLabel: function() {
                var a = this.$element.find(e), b;
                return a.length || (b = this.getLabelEl(), b.is(e) ? a = b : a = b.find(e)), a
            },
            shouldShow: function() {
                var a = this.getLabelText() != this.getTitle();
                return a ||!a && this.hasHiddenLabel()
            },
            show: function() {
                var a, c, d, e, f, g, h, i;
                if (this.shouldShow() && this.hasContent() && this.enabled) {
                    b(this.timeout), $(".tooltip").remove(), this.$tip = null, a = this.tip(), this.setContent(), this.options.animation && a.addClass("fade"), g = typeof this.options.placement == "function" ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement, c = /in/.test(g), this.applyARIA(), a.remove().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).appendTo(c ? this.$element : document.body), d = this.getPosition(c), e = a[0].offsetWidth, f = a[0].offsetHeight;
                    switch (c ? g.split(" ")[1] : g) {
                    case"bottom":
                        h = {
                            top: d.top + d.height,
                            left: d.left + d.width / 2 - e / 2
                        };
                        break;
                    case"top":
                        h = {
                            top: d.top - f,
                            left: d.left + d.width / 2 - e / 2
                        };
                        break;
                    case"left":
                        h = {
                            top: d.top + d.height / 2 - f / 2,
                            left: d.left - e
                        };
                        break;
                    case"right":
                        h = {
                            top: d.top + d.height / 2 - f / 2,
                            left: d.left + d.width
                        }
                    }
                    this.$element.addClass("in"), a.css(h).addClass(g).addClass("in"), a.trigger("uiTooltipShow")
                }
            },
            applyARIA: function() {
                var a = this.getLabelText(), b = this.$element.find("img").attr("alt"), c = a + b, d=!this.hasHiddenLabel() && c.trim() != this.getTitle();
                d && (this.tip().find(".tooltip-inner").attr({
                    role: "tooltip",
                    id: "aria-tooltip"
                }), this.$element.attr("aria-describedby", "aria-tooltip"))
            },
            setContent: function() {
                var a = this.tip();
                a.find(".tooltip-inner").html(this.getTitle()), a.removeClass("fade in top bottom left right")
            },
            hide: function() {
                function d() {
                    var a = setTimeout(function() {
                        c.off($.support.transition.end).remove()
                    }, 500);
                    c.one($.support.transition.end, function() {
                        clearTimeout(a), c.remove()
                    })
                }
                var a = this, c = this.tip();
                b(a.timeout), this.$element.removeAttr("aria-describedby"), c.removeClass("in"), this.$element.removeClass("in"), c.trigger("uiTooltipHide"), $.support.transition && this.$tip.hasClass("fade") ? d() : c.remove()
            },
            fixTitle: function() {
                var a = this.$element;
                (a.attr("title") || typeof a.attr("data-original-title") != "string") && a.attr("data-original-title", a.attr("title") || "").removeAttr("title")
            },
            setTitle: function(a) {
                this.$element.attr("data-original-title", a || "")
            },
            getTitle: function() {
                var a, b = this.$element, c = this.options;
                return a = b.attr("data-original-title") || (typeof c.title == "function" ? c.title.call(b[0]) : c.title), a = (a || "").toString().replace(/(^\s*|\s*$)/, ""), a
            },
            hasContent: function() {
                return this.getTitle()
            },
            getPosition: function(a) {
                var b = this.$element, c = ".icon,.Icon,i,img";
                return b.is("a") && b.find(c).length && (b = b.find(c)), $.extend({}, a ? {
                    top: 0,
                    left: 0
                } : b.offset(), {
                    width: b[0].offsetWidth,
                    height: b[0].offsetHeight
                })
            },
            tip: function() {
                return this.$tip = this.$tip || $(this.options.template)
            },
            validate: function() {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },
            enable: function() {
                this.enabled=!0
            },
            disable: function() {
                this.enabled=!1
            },
            toggleEnabled: function() {
                this.enabled=!this.enabled
            },
            toggle: function() {
                this[this.tip().hasClass("in") ? "hide": "show"]()
            }
        }, $.fn.tooltip = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var c = $(this), d = c.data("tooltip"), e = typeof a == "object" && a;
                d || c.data("tooltip", d = new f(this, e)), typeof a == "string" && d[a].apply(d, b)
            })
        }, $.fn.tooltip.clearAllPendingTimeouts = d, $.fn.tooltip.Constructor = f, $.fn.tooltip.defaults = {
            animation: !0,
            delay: 1e3,
            selector: !1,
            placement: "top",
            trigger: "hover",
            title: "",
            template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        }
    }(window.jQuery)
});
define("app/ui/with_dropdown", ["module", "require", "exports", "core/compose", "app/utils/with_keyboard_modality", "app/utils/prevent_next_tooltip", "$lib/bootstrap_tooltip.js"], function(module, require, exports) {
    function withDropdown() {
        compose.mixin(this, [withKeyboardModality]), this.defaultAttrs({
            dropDownSelector: ".dropdown",
            dropDownMenuSelector: ".dropdown-menu",
            togglerSelector: ".js-dropdown-toggle",
            preventCloseSelector: ".js-dropdown-prevent-close",
            openClass: "open"
        }), this.isOpen = function() {
            return !!this.$dropdown && this.$dropdown.hasClass(this.attr.openClass)
        }, this.toggleDisplay = function(a) {
            if (!a)
                return;
            var b = $(a.target).closest(this.attr.dropDownSelector);
            this.isOpen()&&!this.$dropdown.is(b) && this.closeDropdown(), this.$dropdown = b, this.isOpen() ? this.notifyCloseRequested() : this.notifyOpenRequested(), a.preventDefault(), a.stopImmediatePropagation(), $(a.target).closest(".js-tooltip").trigger("blur")
        }, this.showDropdown = function(a) {
            var b = $(a.target);
            if (!b.length)
                return;
            b.hasClass(this.attr.openClass) || (this.$dropdown = b, this.notifyOpenRequested())
        }, this.openDropdown = function() {
            if (this.isOpen())
                return;
            this.trigger(document, "uiCloseDropdowns");
            var a = this.$dropdown.find(this.attr.dropDownMenuSelector);
            this.createFirstLastTabStop(a), this.on(a.find(this.attr.lastTabStopSelector), "focus", this.focusFirstAvailableControl), this.on(a.find(this.attr.firstTabStopSelector), "focus", this.focusLastAvailableControl), this.activeEl = document.activeElement, this.$dropdown.addClass(this.attr.openClass), this.trigger(this.$dropdown, "uiDropdownOpened")
        }, this.notifyOpenRequested = function() {
            if (this.isOpen())
                return;
            this.$dropdown.find(this.attr.togglerSelector).closest(".js-tooltip").tooltip("disable"), this.trigger(this.$dropdown, {
                type: "uiDropdownOpenRequested",
                defaultBehavior: "openDropdown"
            })
        }, this.closeDropdown = function() {
            if (!this.isOpen())
                return;
            var a = this.$dropdown.find(this.attr.dropDownMenuSelector);
            this.off(a.find(this.attr.lastTabStopSelector), "focus", this.focusFirstAvailableControl), this.off(a.find(this.attr.firstTabStopSelector), "focus", this.focusLastAvailableControl), this.removeFirstLastTabStop(a), this.$dropdown.removeClass(this.attr.openClass), this.trigger(this.$dropdown, "uiDropdownClosed"), this.$dropdown = null
        }, this.notifyCloseRequested = function() {
            if (!this.isOpen())
                return;
            this.$dropdown.find(this.attr.togglerSelector).closest(".js-tooltip").tooltip("enable"), this.trigger(this.$dropdown, {
                type: "uiDropdownCloseRequested",
                defaultBehavior: "closeDropdown"
            })
        }, this.closeAndRestoreFocus = function(a) {
            if (!this.isOpen())
                return;
            this.notifyCloseRequested();
            if (this.activeEl) {
                a.preventDefault();
                try {
                    preventNextTooltip(this.activeEl), this.activeEl.focus(), this.activeEl = null
                } catch (a) {}
            }
        }, this.close = function(a) {
            if (!this.isOpen())
                return;
            var b = a.target, c = $(b), d = this.$dropdown.find(this.attr.dropDownMenuSelector), e = this.$dropdown.find(this.attr.togglerSelector), f = d.is(b) || $.contains(d[0], b), g=!!e.length && (e.is(b) || $.contains(e[0], b)), h = c.is(this.attr.preventCloseSelector)||!!c.closest(this.attr.preventCloseSelector, this.$dropdown[0]).length;
            if (f || g || h)
                return;
            this.notifyCloseRequested()
        }, this.applyARIAAttrs = function() {
            var a = this.select("togglerSelector");
            a.prop("nodeName") == "A" && a.attr({
                role: "button"
            }), a.attr({
                "aria-haspopup": !0
            })
        }, this.focusFirstAvailableControl = function() {
            var a;
            this.isOpen() && (a = this.$dropdown.find(this.attr.dropDownMenuSelector), this.focusNextAvailableControl("first", a))
        }, this.focusLastAvailableControl = function() {
            var a;
            this.isOpen() && (a = this.$dropdown.find(this.attr.dropDownMenuSelector), this.focusNextAvailableControl("last", a))
        }, this.after("initialize", function() {
            this.on(document, "uiSwiftLoaded", this.applyARIAAttrs), this.on("uiShouldShowDropdown", this.showDropdown), this.on("click", {
                togglerSelector: this.toggleDisplay
            }), this.on(document, "uiCloseDropdowns", this.notifyCloseRequested), this.on(document, "click", this.close), this.on(document, "uiShortcutEsc", this.closeAndRestoreFocus), this.on(document, "uiBeforePageChanged uiPageChanged uiNavigate uiForceDropdownClosed", this.closeDropdown)
        })
    }
    var compose = require("core/compose"), withKeyboardModality = require("app/utils/with_keyboard_modality"), preventNextTooltip = require("app/utils/prevent_next_tooltip");
    require("$lib/bootstrap_tooltip.js"), module.exports = withDropdown
});
define("app/ui/with_dropdownmenu", ["module", "require", "exports", "core/compose", "app/ui/with_dropdown", "app/utils/is_visible", "app/utils/is_enabled"], function(module, require, exports) {
    function withDropdownMenu() {
        compose.mixin(this, [withDropdown]), this.defaultAttrs({
            menuListSelector: ".dropdown-menu ul",
            menuItemSelector: ".dropdown-menu li:not(.dropdown-divider)",
            menuitemFragmentSelector: ".dropdown-menu li a[href=#]",
            dividerSelector: ".dropdown-divider",
            dividerClass: "dropdown-divider",
            selectedMenuItemSelector: ".js-selected",
            firstMenuItemSelector: "li:first-child",
            lastMenuItemSelector: "li:last-child",
            selectedMenuItemClass: "js-selected"
        }), this.applyARIAToMenuItems = function() {
            this.$dropdown.find("li").attr("role", "presentation"), this.$dropdown.find(this.attr.menuItemSelector).each(function(a, b) {
                var c = $(b).find("a, button").eq(0), d=!!c.length && isVisible(c) && isEnabled(c);
                d && c.attr({
                    role: "menuitem"
                })
            })
        }, this.applyARIAToMenu = function() {
            var a = this.$dropdown.find(this.attr.menuListSelector), b = this.$dropdown.find(this.attr.togglerSelector), c;
            b.length&&!(c = b.attr("id")) && (c = "menu-" + instances++, b.attr("id", c)), a.attr({
                tabIndex: - 1,
                role: "menu"
            }), c && a.attr("aria-labelledby", c)
        }, this.moveSelection = function(a) {
            if (!this.isOpen())
                return;
            var b = {
                38: "prev",
                40: "next"
            }
            [a.keyCode];
            if (!b)
                return;
            var c = this.$dropdown.find(this.attr.menuListSelector).find("[role=menuitem]"), d = this.$dropdown.find(this.attr.selectedMenuItemSelector), e, f;
            d.length && (f = c.index(d), f = b == "next" ? f + 1 : f - 1, e = c.eq(f));
            if (!e || e&&!e.length)
                e = b == "next" ? c.first() : c.last();
            e.length && (d.removeClass(this.attr.selectedMenuItemClass), e.addClass(this.attr.selectedMenuItemClass), e[0].focus(), a.preventDefault())
        }, this.applyARIAAndFocus = function(a) {
            var b = this.$dropdown, c;
            b && b.is(a.target) && (this.applyARIAToMenu(), this.applyARIAToMenuItems(), c = this.$dropdown.find(this.attr.menuListSelector), c.attr("aria-hidden", !1), c[0].focus())
        }, this.toggleARIAHiddenState = function(a) {
            var b = this.$dropdown;
            b && b.is(a.target) && (b.find(this.attr.menuListSelector).attr("aria-hidden", !0), b.find(this.attr.selectedMenuItemSelector).removeClass(this.attr.selectedMenuItemClass))
        }, this.preventFragmentNavigation = function(a) {
            if (!this.isOpen())
                return;
            a.preventDefault()
        }, this.after("initialize", function() {
            this.on(document, "keydown", {
                menuListSelector: this.moveSelection
            }), this.on(document, "click", {
                menuitemFragmentSelector: this.preventFragmentNavigation
            }), this.on(document, "uiDropdownOpened", this.applyARIAAndFocus), this.on(document, "uiDropdownClosed", this.toggleARIAHiddenState)
        })
    }
    var compose = require("core/compose"), withDropdown = require("app/ui/with_dropdown"), isVisible = require("app/utils/is_visible"), isEnabled = require("app/utils/is_enabled"), instances = 0;
    module.exports = withDropdownMenu
});
define("app/ui/language_dropdown", ["module", "require", "exports", "core/component", "app/ui/with_dropdownmenu"], function(module, require, exports) {
    var defineComponent = require("core/component"), withDropdownMenu = require("app/ui/with_dropdownmenu"), LanguageDropdown = defineComponent(withDropdownMenu);
    module.exports = LanguageDropdown
});
define("app/ui/google", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function googleAnalytics() {
        this.defaultAttrs({
            pageName: "",
            sectionName: "",
            loggedIn: !1,
            screenName: "",
            allowAdsPersonalization: !0
        }), this.initGoogle = function() {
            (function(a, b, c, d, e, f, g) {
                a.GoogleAnalyticsObject = e, a[e] = a[e] || function() {
                    (a[e].q = a[e].q || []).push(arguments)
                }, a[e].l = 1 * new Date, f = b.createElement(c), g = b.getElementsByTagName(c)[0], f.async = 1, f.src = d, g.parentNode.insertBefore(f, g)
            })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-30775-6", "twitter.com"), !/^yes$|^1$/.test(navigator.msDoNotTrack || navigator.doNotTrack || window.doNotTrack) && this.attr.allowAdsPersonalization && ga("require", "displayfeatures"), ga("send", "pageview", this.getPageName()), window.ga = ga, this.off("uiSwiftLoaded", this.initGoogle)
        }, this.trackEvent = function(a, b) {
            window.ga("send", "event", "button", b.gaEvent, "nav-buttons")
        }, this.trackPageChange = function(a, b) {
            window.ga("send", "pageview", this.getPageName())
        }, this.getPageName = function() {
            var a = this.attr.loggedIn ? "user": "anon", b = this.attr.pageName;
            return this.attr.loggedIn && b == "profile" && this.screenNameRE.test(location.pathname) && (b = "self"), "/" + [a, b, this.attr.sectionName].join("/")
        }, this.after("initialize", function() {
            this.screenNameRE = new RegExp("^/" + this.attr.screenName + "(/.*)?$"), this.on("uiSwiftLoaded", this.initGoogle), this.on("uiPageChanged", this.trackPageChange), this.on("GATrackEvent", this.trackEvent)
        })
    }
    var defineComponent = require("core/component"), GoogleAnalytics = defineComponent(googleAnalytics);
    module.exports = GoogleAnalytics
});
define("app/data/user_info", ["module", "require", "exports"], function(module, require, exports) {
    var user = {}, userInfo = {
        set: function(a) {
            user.screenName = a.screenName, user.fullName = a.fullName, user.deciders = a.deciders || {}, user.experiments = a.experiments || {}
        },
        reset: function() {
            this.set({
                screenName: null,
                fullName: null,
                deciders: {},
                experiments: {}
            })
        },
        user: user,
        getDecider: function(a) {
            return !!user.deciders[a]
        },
        getExperimentGroup: function(a) {
            return user.experiments[a]
        }
    };
    userInfo.reset(), module.exports = userInfo
});
define("app/ui/macaw_nymizer", ["module", "require", "exports", "core/component", "app/data/user_info", "app/utils/params"], function(module, require, exports) {
    function macawNymizer() {
        this.defaultAttrs({
            kenshooLandingParam: "ken_prf",
            checkLandingParam: !0
        }), this.hitEndpoint = function(a) {
            var b = new Image;
            b.src = "/i/anonymize?data=" + encodeURIComponent(JSON.stringify(a))
        }, this.hasLandingParam = function() {
            return !!params.fromQuery(window.location)[this.attr.kenshooLandingParam]
        }, this.renderPixel = function() {
            this.hitEndpoint([{
                integration: "kenshooClick",
                ref: document.referrer,
                type: "click"
            }
            ])
        }, this.conversion = function(a, b) {
            this.hitEndpoint([{
                integration: "kenshooConversion",
                ref: document.referrer,
                type: b.mnType
            }
            ])
        }, this.after("initialize", function() {
            userInfo.getDecider("enableMacawNymizerConversionLanding") && ((!this.attr.checkLandingParam || this.hasLandingParam()) && this.on("uiSwiftLoaded", this.renderPixel), this.on("MNConversion", this.conversion))
        })
    }
    var defineComponent = require("core/component"), userInfo = require("app/data/user_info"), params = require("app/utils/params"), MacawNymizer = defineComponent(macawNymizer);
    module.exports = MacawNymizer
});
define("app/ui/impression_cookies", ["module", "require", "exports", "core/component", "app/utils/cookie"], function(module, require, exports) {
    function impressionCookies() {
        this.defaultAttrs({
            sendImpressionCookieSelector: "a[data-send-impression-cookie]",
            link: "a"
        }), this.setCookie = function(a, b) {
            cookie("ic", a, {
                expires: b
            })
        }, this.sendImpressionCookie = function(a, b) {
            var c = b.el;
            if (c) {
                var d = $(c), e = d.closest("[data-impression-cookie]").attr("data-impression-cookie");
                this.triggerPromotedClickAndSetCookie(a, {
                    href: d.attr("href"),
                    hostName: c.hostname,
                    impressionCookie: e
                })
            }
        }, this.linkIsLocalAndWihoutAHashBang = function(a, b) {
            return a == window.location.hostname && b && b.indexOf("/#!/") != 0
        }, this.triggerPromotedClickAndSetCookie = function(a, b) {
            if (this.linkIsLocalAndWihoutAHashBang(b.hostName, b.href) && b.impressionCookie) {
                this.trigger("uiPromotedLinkClick", {
                    href: b.href
                });
                var c = new Date, d = 6e4, e = new Date(c.getTime() + d);
                this.setCookie(b.impressionCookie, e)
            }
        }, this.after("initialize", function() {
            this.on("click", {
                sendImpressionCookieSelector: this.sendImpressionCookie
            }), this.on("uiShowProfileNewWindow", {
                link: this.sendImpressionCookie
            }), this.on("uiSendImpressionCookie", this.triggerPromotedClickAndSetCookie)
        })
    }
    var defineComponent = require("core/component"), cookie = require("app/utils/cookie");
    module.exports = defineComponent(impressionCookies)
});
define("app/data/promoted_logger", ["module", "require", "exports", "core/component", "app/data/with_data", "app/data/user_info"], function(module, require, exports) {
    function promotedLogger() {
        this.defaultAttrs({
            tweetHashtagLinkSelector: ".js-stream-tweet .twitter-hashtag, .permalink-tweet .twitter-hashtag",
            tweetLinkSelector: ".js-stream-tweet .twitter-timeline-link, .permalink-tweet .twitter-timeline-link",
            mediaTagUserSelector: ".popup-tagged-user-list .js-user-profile-link, .media-tagging-block .js-user-profile-link"
        }), this.logEvent = function(a, b) {
            this.get({
                url: "/i/promoted_content/log.json",
                data: a,
                eventData: {},
                headers: {
                    "X-PHX": !0
                },
                success: "dataLogEventSuccess",
                error: "dataLogEventError",
                async: !b,
                noAbortOnNavigate: !0
            })
        }, this.isEarnedMedia = function(a) {
            return a == "earned"
        }, this.logPromotedTrendImpression = function(a, b) {
            var c = b.items, d = b.source;
            if (d == "clock")
                return;
            var e = c.filter(function(a) {
                return !!a.promotedTrendId
            });
            if (!e.length)
                return;
            this.logEvent({
                event: "i",
                promoted_trend_id: e[0].promotedTrendId
            })
        }, this.logPromotedTrendClick = function(a, b) {
            if (!b.promotedTrendId)
                return;
            this.logEvent({
                event: "c",
                promoted_trend_id: b.promotedTrendId
            }, !0)
        }, this.logPromotedTweetImpression = function(a, b) {
            var c = b.tweets.filter(function(a) {
                return a.impressionId
            });
            c.forEach(function(a) {
                this.logEvent({
                    event: "impression",
                    impression_id: a.impressionId,
                    earned: this.isEarnedMedia(a.disclosureType)
                })
            }, this)
        }, this.logPromotedTweetLinkClick = function(a) {
            var b = $(a.target).closest("[data-impression-id]").attr("data-impression-id"), c = $(a.target).closest("[data-impression-id]").attr("data-disclosure-type"), d = $(a.target).closest(this.attr.tweetLinkSelector).attr("href");
            if (!b)
                return;
            this.logEvent({
                event: "url_click",
                impression_id: b,
                earned: this.isEarnedMedia(c),
                url: d
            }, !0)
        }, this.logPromotedTweetMediaTagClick = function(a) {
            var b = $(a.target).closest("[data-impression-id]").attr("data-impression-id"), c = $(a.target).closest("[data-impression-id]").attr("data-disclosure-type");
            if (!b)
                return;
            this.logEvent({
                event: "user_mention_click",
                impression_id: b,
                earned: this.isEarnedMedia(c)
            }, !0)
        }, this.logPromotedTweetHashtagClick = function(a) {
            var b = $(a.target).closest("[data-impression-id]").attr("data-impression-id"), c = $(a.target).closest("[data-impression-id]").attr("data-disclosure-type");
            if (!b)
                return;
            this.logEvent({
                event: "hashtag_click",
                impression_id: b,
                earned: this.isEarnedMedia(c)
            }, !0)
        }, this.logPromotedUserImpression = function(a, b) {
            var c = b.users.filter(function(a) {
                return a.impressionId
            });
            c.forEach(function(a) {
                this.logEvent({
                    event: "impression",
                    impression_id: a.impressionId
                })
            }, this)
        }, this.logPromotedTweetShareViaEmail = function(a, b) {
            var c = b.impressionId;
            if (!c)
                return;
            var d = this.isEarnedMedia(b.disclosureType);
            this.logEvent({
                event: "email_tweet",
                impression_id: c,
                earned: d
            })
        }, this.logPromotedUserClick = function(a, b) {
            var c = b.impressionId;
            if (!c)
                return;
            var d = this.isEarnedMedia(b.disclosureType);
            b.profileClickTarget === "avatar" ? this.logEvent({
                event: "profile_image_click",
                impression_id: c,
                earned: d
            }) : b.isMentionClick ? this.logEvent({
                event: "user_mention_click",
                impression_id: c,
                earned: d
            }) : b.isPromotedBadgeClick ? this.logEvent({
                event: "footer_profile",
                impression_id: c,
                earned: d
            }) : this.logEvent({
                event: "screen_name_click",
                impression_id: c,
                earned: d
            })
        }, this.logPromotedUserDismiss = function(a, b) {
            var c = b.impressionId;
            if (!c)
                return;
            this.logEvent({
                event: "dismiss",
                impression_id: c
            })
        }, this.logPromotedTweetDismiss = function(a, b) {
            var c = b.impressionId, d = b.disclosureType;
            if (!c)
                return;
            this.logEvent({
                event: "dismiss",
                impression_id: c,
                earned: this.isEarnedMedia(d)
            })
        }, this.logPromotedTweetDetails = function(a, b) {
            var c = b.impressionId, d = b.disclosureType, e = b.embeddedMediaLogged, f = b.videoAutoplay && userInfo.getDecider("promoted_video_logging_enabled");
            if (!c || e || f)
                return;
            this.logEvent({
                event: "view_details",
                impression_id: c,
                earned: this.isEarnedMedia(d)
            })
        }, this.logPromotedTweetCardUrlClick = function(a, b) {
            var c = b.impressionId, d = b.disclosureType;
            c && this.logEvent({
                event: "card_url_click",
                impression_id: c,
                earned: this.isEarnedMedia(d)
            })
        }, this.logPromotedTweetEmbeddedMedia = function(a, b) {
            var c = b.impressionId, d = b.disclosureType;
            c && this.logEvent({
                event: "embedded_media",
                impression_id: c,
                earned: this.isEarnedMedia(d)
            })
        }, this.logPromotedVideoEvent = function(a, b) {
            if (!userInfo.getDecider("promoted_video_logging_enabled"))
                return;
            var c = b.impressionId, d = b.disclosureType;
            if (c) {
                var e = {
                    event: b.name,
                    impression_id: c,
                    earned: this.isEarnedMedia(d),
                    playlist_url: b.playlist_url
                };
                typeof b.video_uuid != "undefined" && (e.video_uuid = b.video_uuid), typeof b.video_type != "undefined" && (e.video_type = b.video_type), this.logEvent(e)
            }
        }, this.logPromotedBuyNowCardClickEvent = function(a, b) {
            var c = b.impressionId, d = b.disclosureType;
            if (!c)
                return;
            this.logEvent({
                event: "buynow_card_click",
                impression_id: c,
                earned: this.isEarnedMedia(d)
            })
        }, this.logPromotedBuyNowPurchaseSuccessEvent = function(a, b) {
            var c = b.impressionId, d = b.disclosureType;
            if (!c)
                return;
            this.logEvent({
                event: "buynow_purchase_success",
                impression_id: c,
                earned: this.isEarnedMedia(d)
            })
        }, this.after("initialize", function() {
            this.on("uiTrendsDisplayed", this.logPromotedTrendImpression), this.on("uiTrendSelected", this.logPromotedTrendClick), this.on("uiTweetsDisplayed", this.logPromotedTweetImpression), this.on("click", {
                tweetLinkSelector: this.logPromotedTweetLinkClick,
                tweetHashtagLinkSelector: this.logPromotedTweetHashtagClick,
                mediaTagUserSelector: this.logPromotedTweetMediaTagClick
            }), this.on("uiHasExpandedTweet uiHasClickedTweet", this.logPromotedTweetDetails), this.on("uiTweetDismissed", this.logPromotedTweetDismiss), this.on("uiDidShareViaEmailSuccess", this.logPromotedTweetShareViaEmail), this.on("uiUsersDisplayed", this.logPromotedUserImpression), this.on("uiDismissUserRecommendation", this.logPromotedUserDismiss), this.on("uiShowProfilePopup uiShowProfileNewWindow", this.logPromotedUserClick), this.on(window, "uiCardUrlClick", this.logPromotedTweetCardUrlClick), this.on("uiEmbeddedMedia", this.logPromotedTweetEmbeddedMedia), this.on("uiVideoEvent", this.logPromotedVideoEvent), this.on("uiBuyNowCardClicked", this.logPromotedBuyNowCardClickEvent), this.on("uiCommerceBuyNowSuccess", this.logPromotedBuyNowPurchaseSuccessEvent)
        })
    }
    var defineComponent = require("core/component"), withData = require("app/data/with_data"), userInfo = require("app/data/user_info"), PromotedLogger = defineComponent(promotedLogger, withData);
    module.exports = PromotedLogger
});
define("app/ui/message_drawer", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function messageDrawer() {
        this.defaultAttrs({
            minTimeout: 2e3,
            messageSelector: ".message",
            closeSelector: ".dismiss",
            reloadSelector: ".js-reload",
            textSelector: ".message-text",
            bannersSelector: "#banners",
            topOffset: 46,
            hiddenClass: "hidden",
            dialogOpenSelector: ".modal-enabled, .overlay-enabled",
            $body: $("body")
        }), this.calculateFadeTimeout = function(a, b) {
            if (b != null)
                return b;
            var c = a.split(" ").length, d = c * 1e3 / 5 + 225;
            return d < this.attr.minTimeout ? this.attr.minTimeout : d
        }, this.dialogPresent = function() {
            return this.attr.$body.is(this.attr.dialogOpenSelector)
        }, this.showMessage = function(a, b, c) {
            this.showing=!0;
            var d = {
                top: this.attr.topOffset + $(this.attr.bannersSelector).height()
            };
            clearTimeout(this.messageTimeout), this.timeoutExpired=!1, this.dialogPresent() && (d.top = 0), this.$node.stop(), this.$node.removeClass(this.attr.hiddenClass), this.$node.animate(d, 300, function() {
                this.scheduleClose(b, this.calculateFadeTimeout(a, c))
            }.bind(this)), this.select("textSelector").html(a), this.select("closeSelector").toggle(!!b)
        }, this.scheduleClose = function(a, b) {
            a || (this.messageTimeout = setTimeout(function() {
                this.hovering || this.closeMessage(), this.timeoutExpired=!0
            }.bind(this), b))
        }, this.handleMouseEnter = function() {
            this.hovering=!0
        }, this.handleMouseLeave = function() {
            this.hovering=!1, this.timeoutExpired && (clearTimeout(this.messageTimeout), this.scheduleClose(!1, this.attr.minTimeout))
        }, this.showTemporaryMessage = function(a, b) {
            this.showMessage(b.message, !1, b.timeout)
        }, this.showStickyMessage = function(a, b) {
            this.showMessage(b.message, !0)
        }, this.setHidden = function() {
            this.$node.addClass(this.attr.hiddenClass)
        }, this.closeMessage = function(a) {
            this.showing=!1, a && a.preventDefault(), this.$node.animate({
                top: - 40
            }, 300, function() {
                this.setHidden()
            }.bind(this))
        }, this.reloadPageHandler = function() {
            this.reloadPage()
        }, this.reloadPage = function() {
            window.location.reload()
        }, this.repositionMessage = function(a) {
            if (!this.showing)
                return;
            a.type === "uiDialogOpened" ? this.$node.stop().css({
                top: 0
            }) : this.dialogPresent() || this.$node.queue(function(a) {
                this.$node.css({
                    top: this.attr.topOffset + $(this.attr.bannersSelector).height()
                }), a()
            }.bind(this))
        }, this.after("initialize", function() {
            this.on(document, "uiShowMessage", this.showTemporaryMessage), this.on(document, "uiShowError uiShowStickyMessage", this.showStickyMessage), this.on("click", {
                reloadSelector: this.reloadPageHandler,
                closeSelector: this.closeMessage
            }), this.on(document, "uiBeforePageChanged uiHideMessage", this.setHidden), this.on("mouseenter", {
                messageSelector: this.handleMouseEnter
            }), this.on("mouseleave", {
                messageSelector: this.handleMouseLeave
            }), this.on(document, "uiDialogOpened uiDialogClosed", this.repositionMessage), this.$node.hasClass(this.attr.hiddenClass) && this.closeMessage()
        })
    }
    var defineComponent = require("core/component"), MessageDrawer = defineComponent(messageDrawer);
    module.exports = MessageDrawer
});
define("app/ui/tooltips", ["module", "require", "exports", "core/component", "$lib/bootstrap_tooltip.js"], function(module, require, exports) {
    function tooltips() {
        this.defaultAttrs({
            tooltipSelector: ".js-tooltip",
            visibleTooltipSelector: ".js-tooltip.in"
        }), this.hideEvents = ["uiBeforePageChanged", "uiDialogOpened", "uiDialogClosed", "uiDropdownOpened", "uiDropdownClosed", "uiGalleryOpened"], this.hide = function() {
            this.select("visibleTooltipSelector").tooltip("hide")
        }, this.after("initialize", function() {
            this.$node.tooltip({
                selector: this.attr.tooltipSelector
            }), this.on(document, "uiShortcutEsc", {
                tooltipSelector: function() {
                    $.fn.tooltip.clearAllPendingTimeouts(), this.hide()
                }
            }), this.on(document, this.hideEvents.join(" "), this.hide)
        })
    }
    var defineComponent = require("core/component");
    require("$lib/bootstrap_tooltip.js"), module.exports = defineComponent(tooltips)
});
define("app/ui/forms/screen_reader_label", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function screenReaderLabel() {
        this.defaultAttrs({
            inputSelector: "input[placeholder],textarea[placeholder]"
        }), this.addLabels = function() {
            this.idCounter = 0, this.select("inputSelector").each(this.addLabel.bind(this))
        }, this.addLabel = function(a, b) {
            var c = $(b);
            if (this.hasLabel(c))
                return;
            var d = c.attr("id");
            d || (d = "sr_label_" + this.idCounter, c.attr("id", d), this.idCounter++);
            var e = c.attr("placeholder");
            $('<label for="' + d + '" class="visuallyhidden">' + e + "</label>").insertAfter(c)
        }, this.hasLabel = function(a) {
            return this.hasSiblingLabel(a) || this.hasParentLabel(a) || this.hasAriaLabel(a)
        }, this.hasSiblingLabel = function(a) {
            var b = a.attr("id");
            return b && this.$node.find("label[for=" + b + "]").length > 0
        }, this.hasParentLabel = function(a) {
            return a.closest("label").length > 0
        }, this.hasAriaLabel = function(a) {
            return !!a.attr("aria-label")||!!a.attr("aria-labelledby")
        }, this.after("initialize", function() {
            this.on(document, "uiSwiftLoaded uiPageChanged", this.addLabels)
        })
    }
    var defineComponent = require("core/component");
    module.exports = defineComponent(screenReaderLabel)
});
define("app/data/ttft_navigation", ["module", "require", "exports", "core/component", "app/data/scribe_transport"], function(module, require, exports) {
    function ttftNavigate() {
        this.beforeNewPageLoad = function(a, b) {
            this.log("beforeNewPageLoad", a, b), time = {
                beforeNewPageLoad: + (new Date),
                source: {
                    page: this.attr.pageName,
                    action: this.attr.sectionName,
                    path: window.location.pathname
                }
            }
        }, this.afterPageChanged = function(a, b) {
            this.log("afterPageChanged", a, b), time.afterPageChanged =+ (new Date), this.fromCache=!!b.fromCache, this.hookTimelineListener(!0), this.timelineListener = setTimeout(function() {
                this.hookTimelineListener(!1), this.report()
            }.bind(this), 1), time.ajaxCount = this.ajaxCountdown = $.active, $.active && this.hookAjaxListener(!0)
        }, this.timelineRefreshRequest = function(a, b) {
            clearTimeout(this.timelineListener), this.hookTimelineListener(!1), b.navigated && (this.listeningForTimeline=!0, this.hookTimelineResults(!0))
        }, this.timelineSuccess = function(a, b) {
            this.log("timelineSuccess", a, b), this.listeningForTimeline=!1, this.hookTimelineResults(!1), time.timelineSuccess =+ (new Date), this.report()
        }, this.timelineError = function(a, b) {
            this.log("timelineError", a, b), this.listeningForTimeline=!1, this.hookTimelineResults(!1), this.report()
        }, this.ajaxComplete = function(a, b) {
            --this.ajaxCountdown || (this.log("ajaxComplete", a, b), this.hookAjaxListener(!1), time.ajaxComplete =+ (new Date), this.report())
        }, this.report = function() {
            if (this.ajaxCountdown && time.ajaxCount)
                return;
            if (this.listeningForTimeline&&!time.timelineSuccess)
                return;
            var a = {
                event_name: "route_time",
                source_page: time.source.page,
                source_action: time.source.action,
                source_path: time.source.path,
                dest_page: this.attr.pageName,
                dest_action: this.attr.sectionName,
                dest_path: window.location.pathname,
                cached: this.fromCache,
                start_time: time.beforeNewPageLoad,
                stream_switch_time: time.afterPageChanged,
                stream_complete_time: time.timelineSuccess || time.afterPageChanged,
                ajax_count: time.ajaxCount
            };
            time.ajaxCount && (a.ajax_complete_time = time.ajaxComplete), this.scribeTransport.send(a, "route_timing"), this.log(a)
        }, this.log = function() {}, this.time = function() {
            return time
        }, this.scribeTransport = scribeTransport, this.hookAjaxListener = function(a) {
            this[a ? "on": "off"]("ajaxComplete", this.ajaxComplete)
        }, this.hookTimelineListener = function(a) {
            this[a ? "on": "off"]("uiTimelineShouldRefresh", this.timelineRefreshRequest)
        }, this.hookTimelineResults = function(a) {
            this[a ? "on": "off"]("dataGotMoreTimelineItems", this.timelineSuccess), this[a ? "on": "off"]("dataGotMoreTimelineItemsError", this.timelineError)
        }, this.after("initialize", function() {
            this.on("uiBeforeNewPageLoad", this.beforeNewPageLoad), this.on("uiPageChanged", this.afterPageChanged)
        })
    }
    var component = require("core/component"), scribeTransport = require("app/data/scribe_transport");
    module.exports = component(ttftNavigate);
    var time = {}
});
define("app/ui/banners/eu_cookie", ["module", "require", "exports", "core/component", "app/utils/cookie"], function(module, require, exports) {
    function euCookie() {
        this.defaultAttrs({
            closeButtonSelector: ".eu-cookie-notice button"
        }), this.setCookie = function() {
            cookie("eu_cn", 1, {
                expires: 365
            })
        }, this.close = function() {
            this.setCookie(), this.$node.remove(), this.teardown()
        }, this.after("initialize", function() {
            this.on("click", {
                closeButtonSelector: this.close
            }), setTimeout(function() {
                this.setCookie()
            }.bind(this), 5e3)
        })
    }
    var defineComponent = require("core/component"), cookie = require("app/utils/cookie");
    module.exports = defineComponent(euCookie)
});
define("app/ui/keyboard_shortcuts", ["module", "require", "exports", "core/component", "core/utils"], function(module, require, exports) {
    function keyBoardShortcuts() {
        this.keyCodeToEvent = {
            27: {
                type: "uiShortcutEsc",
                defaultFn: "blurTextField"
            },
            13: "uiShortcutEnter",
            37: "uiShortcutLeft",
            39: "uiShortcutRight"
        }, this.metaKeyCodeToEvent = {
            13: "uiShortcutCmdEnter"
        }, this.charsToEvent = {
            f: "uiShortcutFavorite",
            r: "uiShortcutReply",
            t: "uiShortcutRetweet",
            u: "uiShortcutMuteUser",
            b: "uiShortcutBlock",
            j: "uiShortcutSelectNext",
            k: "uiShortcutSelectPrev",
            l: "uiWantsToCloseAllTweets",
            ".": "uiShortcutGotoTopOfScreen",
            "/": {
                type: "uiShortcutGotoSearch",
                defaultFn: "focusSearch"
            },
            m: "uiOpenNewDM",
            n: "uiShortcutShowTweetbox",
            gu: "uiShortcutShowGotoUser",
            gm: "uiNeedsDMDialog",
            "?": "uiOpenKeyboardShortcutsDialog"
        }, this.routes = {
            home: "/",
            activity: "/activity",
            connect: "/i/notifications",
            notifications: "/i/notifications",
            mentions: "/mentions",
            discover: "/i/discover",
            profile: "/",
            favorites: "/favorites",
            settings: "/settings/account",
            lists: "/lists"
        }, this.routeShortcuts = {
            gh: "home",
            ga: "activity",
            gc: "connect",
            gn: "notifications",
            gr: "mentions",
            gd: "discover",
            gp: "profile",
            gf: "favorites",
            gs: "settings",
            gl: "lists"
        }, this.lastKey = "", this.defaultAttrs({
            globalSearchBoxSelector: "#search-query"
        }), this.shortcutFromKeyCode = function(a, b) {
            return b.meta && this.metaKeyCodeToEvent[a] || this.keyCodeToEvent[a]
        }, this.isTextField = function(a) {
            if (!a ||!a.tagName)
                return !1;
            var b = a.tagName.toLowerCase();
            if (b == "textarea" || a.getAttribute("contenteditable"))
                return !0;
            if (b != "input")
                return !1;
            var c = (a.getAttribute("type") || "text").toLowerCase();
            return textInputs[c]
        }, this.isRadioButton = function(a) {
            return a.type == "radio"
        }, this.isWhiteListedElement = function(a) {
            var b = a.tagName.toLowerCase();
            if (whiteListedElements[b])
                return !0;
            if (b != "input")
                return !1;
            var c = a.getAttribute("type").toLowerCase();
            return whiteListedInputs[c]
        }, this.triggerShortcutEvent = function(a, b) {
            var c, d, e, f = {
                fromShortcut: !0
            };
            typeof b == "string" ? c = b : (c = b.type, e = b.defaultFn, b.data && (f = utils.merge(f, b.data))), e && (d = {
                type: c,
                defaultBehavior: function() {
                    this[e](a, f)
                }
            }), this.trigger(a.target, d || c, f)
        }, this.triggerShortcutForKey = function(a) {
            if (this.ignore(a))
                return;
            var b = this.shortcutFromKeyCode(a.keyCode, {
                meta: a.metaKey || a.ctrlKey
            });
            b && (a.preventDefault(), this.triggerShortcutEvent(a, b))
        }, this.triggerShortcutForChar = function(a) {
            if (this.isMetaKey(a) || this.isTextField(a.target))
                return;
            var b = a.charCode, c = String.fromCharCode(b).toLowerCase(), d = this.charsToEvent[this.lastKey + c] || this.charsToEvent[c];
            d && c != this.lastKey ? (a.preventDefault(), this.triggerShortcutEvent(a, d), this.lastKey = "") : (setTimeout(function() {
                this.lastKey = ""
            }.bind(this), 5e3), this.lastKey = c)
        }, this.isMetaKey = function(a) {
            return a.metaKey || a.ctrlKey || a.altKey
        }, this.ignore = function(a) {
            var b = a.target, c = a.keyCode == 27, d, e;
            return a.keyCode == 13 && (this.isMetaKey(a) ? d=!0 : e=!0), this.isMetaKey(a) && a.keyCode != 13 || this.isTextField(b)&&!d&&!c || this.isRadioButton(b)&&!c || e && this.isWhiteListedElement(b)
        }, this.blurTextField = function(a) {
            var b = a.target;
            this.isTextField(b) && b.blur()
        }, this.focusSearch = function(a) {
            this.select("globalSearchBoxSelector")[0].focus()
        }, this.navigateTo = function(a, b) {
            this.trigger("uiNavigate", {
                href: b.href
            })
        }, this.createNavEventName = function(a) {
            return UI_SHORTCUT_NAVIGATE + a[0].toUpperCase() + a.slice(1)
        }, this.createNavigationShortcuts = function() {
            Object.keys(this.routeShortcuts).forEach(function(a) {
                var b = this.routeShortcuts[a];
                this.charsToEvent[a] = {
                    type: this.createNavEventName(b),
                    data: {
                        href: this.routes[b]
                    },
                    defaultFn: "navigateTo"
                }
            }, this)
        }, this.after("initialize", function() {
            this.on("keydown", this.triggerShortcutForKey), this.on("keypress", this.triggerShortcutForChar), this.attr.routes && utils.push(this.routes, this.attr.routes), this.createNavigationShortcuts()
        })
    }
    var defineComponent = require("core/component"), utils = require("core/utils"), whiteListedElements = {
        button: !0,
        a: !0
    }, whiteListedInputs = {
        button: !0,
        submit: !0,
        file: !0
    }, textInputs = {
        password: !0,
        text: !0,
        email: !0
    }, UI_SHORTCUT_NAVIGATE = "uiShortcutNavigate", KeyBoardShortcuts = defineComponent(keyBoardShortcuts);
    module.exports = KeyBoardShortcuts
});
define("app/ui/dynamic_image_loader", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function dynamicImageLoader() {
        this.defaultAttrs({
            imageSourceAttr: "data-img-src",
            imageAltAttr: "data-img-alt",
            imageOffsetAttr: "data-img-offset",
            placeholder: ".js-img-placeholder"
        }), this.swapPlaceholdersForImages = function() {
            this.select("placeholder").toArray().forEach(function(a) {
                var b = $("<img>").appendTo(a.parentNode), c = b[0], d = a.getAttribute("data-width"), e = a.getAttribute("data-height"), f = a.getAttribute(this.attr.imageAltAttr), g = parseInt(a.getAttribute(this.attr.imageOffsetAttr));
                c.src = a.getAttribute(this.attr.imageSourceAttr), d && c.setAttribute("width", d), e && c.setAttribute("height", e), f && (c.alt = f), g && (c.style.marginTop = g + "px"), $(a).remove()
            }, this)
        }, this.after("initialize", function() {
            this.on(document, "loadImages", this.swapPlaceholdersForImages)
        })
    }
    var defineComponent = require("core/component");
    module.exports = defineComponent(dynamicImageLoader)
});
define("app/ui/aria_event_logger", ["module", "require", "exports", "core/component", "core/i18n", "core/utils"], function(module, require, exports) {
    function ariaEventLogger() {
        this.defaultAttrs({
            typeaheadDebounceInterval: 500
        }), this.MESSAGES = {
            FAVORITED: _('Favorited'),
            UNFAVORITED: _('Unfavorited'),
            RETWEETED: _('Retweeted'),
            UNRETWEETED: _('Unretweeted'),
            EXPANDED: _('Expanded'),
            COLLAPSED: _('Collapsed'),
            RENDERING_CONVERSATION: _('Loading conversation.'),
            CONVERSATION_RENDERED: _('Conversation loaded. Press j or k to review Tweets.'),
            CONVERSATION_START: _('Conversation start.'),
            CONVERSATION_END: _('Conversation end.'),
            NEW_ITEMS_BAR_VISIBLE: _('New Tweets available. Press period to review them.')
        }, this.CLEAR_LOG_EVENTS = ["uiPageChanged", "uiShortcutSelectPrev", "uiShortcutSelectNext", "uiSelectNext", "uiSelectItem", "uiShortcutGotoTopOfScreen", "uiSelectTopTweet", "uiTypeaheadSelectionCleared"].join(" "), this.createLog = function() {
            var a = $('<div id="sr-event-log" class="visuallyhidden" aria-live="assertive"></div>');
            $("body").append(a), this.$log = a
        }, this.logMessage = function(a, b) {
            if (!this.$log)
                return;
            b || (b = "assertive"), b != this.$log.attr("aria-live") && this.$log.attr("aria-live", b), this.$log.append("<p>" + a + "</p>"), this.$log.children().length > 3 && this.$log.children().first().remove()
        }, this.logEvent = function(a, b) {
            return function() {
                this.logMessage(this.MESSAGES[a], b)
            }.bind(this)
        }, this.logConversationStart = function(a) {
            var b = $(a.target);
            b.closest(".expanded-conversation").length&&!b.prev().length && b.next().length && this.logMessage(this.MESSAGES.CONVERSATION_START, "polite")
        }, this.logConversationEnd = function(a) {
            var b = $(a.target);
            b.closest(".expanded-conversation").length&&!b.next().length && b.prev().length && this.logMessage(this.MESSAGES.CONVERSATION_END, "polite")
        }, this.logCharCountWarning = function(a, b) {
            this.clearLog(), this.logMessage(b.charCount, "polite")
        }, this.logTypeAheadResultsVisible = function(a, b) {
            this.typeAheadResultsVisible&&!!b.query && this.logSuggestionsVisible(a, b)
        }, this.logSuggestionsVisible = function(a, b) {
            b.numResults > 1 ? this.logMessage(_('{{numResults}} suggestions.', {
                numResults: b.numResults
            }), "polite") : this.logMessage(_('{{numResults}} suggestion.', {
                numResults: b.numResults
            }), "polite")
        }, this.clearLog = function() {
            this.$log && this.$log.html("")
        }, this.after("initialize", function() {
            this.on(document, "uiSwiftLoaded", this.createLog), this.on(document, "uiDidFavoriteTweet dataFailedToUnfavoriteTweet", this.logEvent("FAVORITED")), this.on(document, "uiDidUnfavoriteTweet dataFailedToFavoriteTweet", this.logEvent("UNFAVORITED")), this.on(document, "uiDidRetweet dataFailedToUnretweet", this.logEvent("RETWEETED")), this.on(document, "uiDidUnretweet dataFailedToRetweet", this.logEvent("UNRETWEETED")), this.on(document, "uiHasExpandedTweet", this.logEvent("EXPANDED")), this.on(document, "uiHasCollapsedTweet", this.logEvent("COLLAPSED")), this.on(document, "uiRenderingExpandedConversation", this.logEvent("RENDERING_CONVERSATION", "polite")), this.on(document, "uiExpandedConversationRendered", this.logEvent("CONVERSATION_RENDERED", "polite")), this.on(document, "uiNextItemSelected", this.logConversationEnd), this.on(document, "uiPreviousItemSelected", this.logConversationStart), this.on(document, "uiNewItemsBarVisible", this.logEvent("NEW_ITEMS_BAR_VISIBLE")), this.on(document, "uiCharCountWarningVisible", this.logCharCountWarning), this.on(document, "uiTypeaheadResultsShown", function() {
                this.typeAheadResultsVisible=!0
            }), this.on(document, "uiTypeaheadResultsHidden", function() {
                this.typeAheadResultsVisible=!1
            }), this.on(document, "uiTypeaheadResultsShown", utils.debounce(this.logTypeAheadResultsVisible, this.attr.typeaheadDebounceInterval)), this.on(document, "uiGeoResultsShown", utils.debounce(this.logSuggestionsVisible, this.attr.typeaheadDebounceInterval)), this.on(document, this.CLEAR_LOG_EVENTS, this.clearLog)
        })
    }
    var defineComponent = require("core/component"), _ = require("core/i18n"), utils = require("core/utils"), ARIAEventLogger = defineComponent(ariaEventLogger);
    module.exports = ARIAEventLogger
});
define("app/data/scriber", ["module", "require", "exports", "core/component", "app/data/with_scribe"], function(module, require, exports) {
    function scriber() {
        this.scribeData = function(a, b) {
            this.scribe(b.scribeEvent, b.scribeData)
        }, this.after("initialize", function() {
            this.on("scribe", this.scribeData)
        })
    }
    var defineComponent = require("core/component"), withScribe = require("app/data/with_scribe");
    module.exports = defineComponent(scriber, withScribe)
});
define("app/ui/mute_user", ["module", "require", "exports", "core/component", "app/data/with_interaction_data_scribe"], function(module, require, exports) {
    function muteUser() {
        this.defaultAttrs({
            muteUserSelector: ".mute-user-item",
            unmuteUserSelector: ".unmute-user-item",
            undoMuteUserSelector: ".js-undo-muting",
            undoUnmuteUserSelector: ".js-undo-not-muting",
            learnMoreSelector: ".learn-more",
            profilePageSelector: ".route-profile"
        }), this.scribeLearnMoreClick = function(a, b) {
            var c = {
                url: "https://support.twitter.com/articles/20171399",
                message: "https://support.twitter.com/articles/20171399"
            };
            this.scribeInteraction({
                component: "message_drawer",
                element: "learn_more_link",
                action: "open_link"
            }, b, c)
        }, this.doAction = function(a, b, c) {
            if (b.itemType == "tweet")
                return;
            b.modClass = "muting", b.modOp = a == "Mute" ? "addClass" : "removeClass", delete b.el;
            var d = this.$node.find("[data-user-id=" + b.userId + "]"), e = d.first().attr("data-you-follow") == "true", f = a == "Mute"&&!e, g = $(this.attr.profilePageSelector).size();
            f&&!g ? this.trigger("uiRemoveTweetsAndEngagementsFromUser", b) : d[b.modOp]("muting"), this.trigger("uiUpdateMuteButtonState", b), c || (this.trigger("uiCloseDropdowns"), this.trigger("uiHideMessage"), this.trigger("ui" + a + "UserAction", b))
        }, this.handleClick = function(a) {
            return function(b, c) {
                var d = $(b.target), e = d.closest(".user-actions")[0];
                c.scribeContext = c.scribeContext || {};
                if (e) {
                    c.scribeContext.element = "user_actions_dropdown";
                    if (d.closest("#profile_popup")[0])
                        c.scribeContext.component = "profile_dialog";
                    else if (d.closest(".profile-page-header")[0] || d.closest(".ProfileNav-item--userActions"))
                        c.scribeContext.component = "profile_follow_card"
                } else 
                    e = d.closest(".tweet")[0] || d.closest(".ProfileTweet")[0], c.scribeContext.component = "tweet", c.scribeContext.element = "tweet_actions_dropdown";
                c.userId = $(e).data("user-id"), this.doAction(a, c)
            }
        }, this.handleAction = function(a) {
            return function(b, c) {
                this.doAction(a, c)
            }
        }, this.handleRevertTo = function(a) {
            return function(b, c) {
                c.userId = c.sourceEventData.userId, this.doAction(a, c, !0)
            }
        }, this.handleUndoTo = function(a) {
            return function(b, c) {
                c.userId = $(c.el).data("user-id"), c.scribeContext = {
                    component: "message_drawer",
                    element: "undolink"
                }, this.doAction(a, c)
            }
        }, this.after("initialize", function() {
            this.on("click", {
                muteUserSelector: this.handleClick("Mute"),
                unmuteUserSelector: this.handleClick("Unmute"),
                undoMuteUserSelector: this.handleUndoTo("Unmute"),
                undoUnmuteUserSelector: this.handleUndoTo("Mute"),
                learnMoreSelector: this.scribeLearnMoreClick
            }), this.on(document, "uiDidMuteUser", this.handleAction("Mute")), this.on(document, "uiDidUnmuteUser", this.handleAction("Unmute")), this.on(document, "dataFailedToMuteUser", this.handleRevertTo("Unmute")), this.on(document, "dataFailedToUnmuteUser", this.handleRevertTo("Mute"))
        })
    }
    var defineComponent = require("core/component"), withInteractionDataScribe = require("app/data/with_interaction_data_scribe"), MuteUser = defineComponent(muteUser, withInteractionDataScribe);
    module.exports = MuteUser
});
define("app/data/mute_user", ["module", "require", "exports", "core/component", "app/data/with_data"], function(module, require, exports) {
    function muteUser() {
        this.defaultAttrs({
            successFromEndpoints: {
                mute: "dataDidMuteUser",
                unmute: "dataDidUnmuteUser"
            },
            errorsFromEndpoints: {
                mute: "dataFailedToMuteUser",
                unmute: "dataFailedToUnmuteUser"
            }
        }), this.takeAction = function(a, b, c) {
            var d = function(b) {
                b = $.extend(b, {
                    userId: c.userId
                }), b && b.message && this.trigger("uiShowMessage", b), this.trigger(this.attr.successFromEndpoints[a], b)
            }, e = function(b) {
                b && b.message && this.trigger("uiShowMessage", b), this.trigger(this.attr.errorsFromEndpoints[a], b)
            };
            this.post({
                url: "/i/user/" + a,
                data: {
                    user_id: c.userId
                },
                eventData: c,
                success: d.bind(this),
                error: e.bind(this)
            })
        }, this.hitEndpoint = function(a) {
            return this.takeAction.bind(this, a)
        }, this.after("initialize", function() {
            this.on(document, "uiMuteUserAction", this.hitEndpoint("mute")), this.on(document, "uiUnmuteUserAction", this.hitEndpoint("unmute"))
        })
    }
    var defineComponent = require("core/component"), withData = require("app/data/with_data"), MuteUser = defineComponent(muteUser, withData);
    module.exports = MuteUser
});
define("app/ui/undo_unblock", ["module", "require", "exports", "core/component", "app/data/with_interaction_data_scribe"], function(module, require, exports) {
    function undoUnblockUser() {
        this.defaultAttrs({
            undoUnblockSelector: ".js-undo-unblock"
        }), this.handleUndo = function(a, b) {
            b.userId = $(b.el).data("user-id"), b.screenName = $(b.el).data("screen-name");
            var c = {
                component: "message_drawer",
                element: "undolink"
            };
            this.trigger("uiBlockAction", {
                userId: b.userId,
                scribeContext: c
            })
        }, this.after("initialize", function() {
            this.on("click", {
                undoUnblockSelector: this.handleUndo
            })
        })
    }
    var defineComponent = require("core/component"), withInteractionDataScribe = require("app/data/with_interaction_data_scribe"), UndoUnblockUser = defineComponent(undoUnblockUser, withInteractionDataScribe);
    module.exports = UndoUnblockUser
});
deferred('$bower_components/jquery-placeholder/jquery.placeholder.js', function() {
    /*! http://mths.be/placeholder v2.0.7 by @mathias */
    (function(a, b, $) {
        function j(a) {
            var b = {}, c = /^jQuery\d+$/;
            return $.each(a.attributes, function(a, d) {
                d.specified&&!c.test(d.name) && (b[d.name] = d.value)
            }), b
        }
        function k(a) {
            a.attr("title", a.attr("placeholder"))
        }
        function l(c, d) {
            var e = this, f = $(e);
            if (e.value == f.attr("placeholder") && f.hasClass("placeholder")) {
                if (f.data("placeholder-password")) {
                    f = f.hide().next().show().attr("id", f.removeAttr("id").data("placeholder-id"));
                    if (c===!0)
                        return f[0].value = d;
                    f.focus(), c.type == "paste" && a.clipboardData && (f[0].value = a.clipboardData.getData("Text"))
                } else 
                    e.value = "", f.removeClass("placeholder"), e == b.activeElement && e.select();
                k(f)
            }
        }
        function m(a) {
            var c, d = this, e = $(d), f = e, g = this.id;
            if (!a && d.value == "" || e.hasClass("placeholder")) {
                if (d.type == "password") {
                    if (!e.data("placeholder-textinput")) {
                        try {
                            c = e.clone().attr({
                                type: "text"
                            })
                        } catch (a) {
                            c = $("<input>").attr($.extend(j(this), {
                                type: "text"
                            }))
                        }
                        c.removeAttr("name").data({
                            "placeholder-password": !0,
                            "placeholder-id": g
                        }).bind(i), e.data({
                            "placeholder-textinput": c,
                            "placeholder-id": g
                        }).before(c)
                    }
                    var h = d == b.activeElement;
                    e = e.removeAttr("id").hide().prev().attr("id", e.data("placeholder-id")).show(), h && d.type == "password" && e.focus()
                }
                e.addClass("placeholder"), e[0].value = e.attr("placeholder"), e.removeAttr("title")
            } else 
                e.removeClass("placeholder"), k(e)
        }
        function n(a) {
            if (!$(this).hasClass("placeholder"))
                return;
            var b = {
                35: !0,
                36: !0,
                37: !0,
                38: !0,
                39: !0,
                40: !0
            };
            b[a.keyCode] && a.preventDefault()
        }
        function o(a, b) {
            this.value == "" && (m.call(this), a.type == "keyup" && p.call(this))
        }
        function p() {
            var a = this, c = $(a);
            if (!c.hasClass("placeholder"))
                return;
            try {
                if (b.selection) {
                    var d = a.createTextRange();
                    d.collapse(!0), d.moveEnd("character", 0), d.moveStart("character", 0), d.select()
                } else 
                    typeof a.selectionStart == "number" && (a.selectionStart = 0, a.selectionEnd = 0)
            } catch (e) {}
        }
        var c = "placeholder"in b.createElement("input"), d = "placeholder"in b.createElement("textarea"), e = $.fn, f = $.valHooks, g, h, i = {
            "focus.placeholder click.placeholder": p,
            "keydown.placeholder": n,
            "keypress.placeholder paste.placeholder": l,
            "keyup.placeholder blur.placeholder": o
        };
        c && d ? (h = e.placeholder = function() {
            return this
        }, h.input = h.textarea=!0) : (h = e.placeholder = function() {
            var a = this;
            return a.filter((c ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind(i).data("placeholder-enabled", !0).each(function() {
                this.value == "" && m.call(this)
            }), a
        }, h.input = c, h.textarea = d, g = {
            get: function(a) {
                var b = $(a);
                return b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value
            },
            set: function(a, b) {
                var c = $(a);
                return c.data("placeholder-enabled") ? (b == "" ? (a.value = b, m.call(a)) : c.hasClass("placeholder") ? l.call(a, !0, b) || (a.value = b) : a.value = b, c) : c.data("placeholder-password") ? (c.next()[0].value = b, b != "" && l.call(a), c) : a.value = b
            }
        }, c || (f.input = g), d || (f.textarea = g), $(function() {
            $(b).delegate("form", "submit.placeholder", function() {
                var a = $(".placeholder", this).each(l);
                setTimeout(function() {
                    a.each(m)
                }, 10)
            })
        }), $(a).bind("beforeunload.placeholder", function() {
            $(".placeholder").each(function() {
                this.value = ""
            })
        }))
    })(this, document, jQuery)
});
define("app/boot/common", ["module", "require", "exports", "app/utils/auth_token", "app/boot/scribing", "app/ui/navigation", "app/data/navigation", "app/data/teardown_manager", "app/ui/language_dropdown", "app/ui/google", "app/ui/macaw_nymizer", "app/ui/impression_cookies", "app/data/promoted_logger", "app/ui/message_drawer", "app/ui/tooltips", "app/ui/forms/screen_reader_label", "app/data/ttft_navigation", "app/utils/cookie", "app/utils/querystring", "app/data/user_info", "app/ui/banners/eu_cookie", "app/ui/keyboard_shortcuts", "app/ui/dynamic_image_loader", "app/ui/aria_event_logger", "app/data/scriber", "app/ui/mute_user", "app/data/mute_user", "app/ui/undo_unblock", "$bower_components/jquery-placeholder/jquery.placeholder.js"], function(module, require, exports) {
    function shimConsole(a) {
        window.console || (window.console = {}), LOG_METHODS.forEach(function(b) {
            if (a ||!console[b])
                console[b] = NO_OP
        })
    }
    function getTWID() {
        return cookie("twid")
    }
    function verifySession() {
        getTWID() !== initialLoginTWID && window.location.reload(!0)
    }
    var authToken = require("app/utils/auth_token"), scribing = require("app/boot/scribing"), NavigationUI = require("app/ui/navigation"), NavigationData = require("app/data/navigation"), TeardownManager = require("app/data/teardown_manager"), LanguageDropdown = require("app/ui/language_dropdown"), GoogleAnalytics = require("app/ui/google"), MacawNymizer = require("app/ui/macaw_nymizer"), ImpressionCookies = require("app/ui/impression_cookies"), PromotedLogger = require("app/data/promoted_logger"), MessageDrawer = require("app/ui/message_drawer"), Tooltips = require("app/ui/tooltips"), ScreenReaderLabel = require("app/ui/forms/screen_reader_label"), TTFTNavigation = require("app/data/ttft_navigation"), cookie = require("app/utils/cookie"), querystring = require("app/utils/querystring"), userInfo = require("app/data/user_info"), EuCookie = require("app/ui/banners/eu_cookie"), KeyboardShortcuts = require("app/ui/keyboard_shortcuts"), DynamicImageLoader = require("app/ui/dynamic_image_loader"), ARIAEventLogger = require("app/ui/aria_event_logger"), Scriber = require("app/data/scriber"), MuteUser = require("app/ui/mute_user"), MuteUserData = require("app/data/mute_user"), UndoUnblockUser = require("app/ui/undo_unblock");
    require("$bower_components/jquery-placeholder/jquery.placeholder.js");
    var ttftNavigationEnabled=!1, LOG_METHODS = ["log", "warn", "debug", "info"], NO_OP = function() {}, initialLoginTWID = "";
    module.exports = function(b) {
        var c = b.environment, d = ["production", "preflight"].indexOf(c)>-1;
        shimConsole(d&&!window.DEBUG.enabled), authToken.set(b.formAuthenticityToken), userInfo.set(b), ImpressionCookies.attachTo(document, {
            noTeardown: !0
        }), scribing(b), PromotedLogger.attachTo(document, {
            noTeardown: !0
        }), Scriber.attachTo(document), KeyboardShortcuts.attachTo(document, {
            routes: b.routes,
            noTeardown: !0
        }), b.deciders && b.deciders.dynamicLoadMediaForward && DynamicImageLoader.attachTo(document, {
            placeholder: ".js-media-img-placeholder"
        }), NavigationUI.attachTo(document, {
            pushState: b.pushState,
            viewContainer: b.viewContainer,
            noTeardown: !0
        }), TeardownManager.attachTo(document), NavigationData.attachTo(document, {
            init_data: b,
            pushState: b.pushState,
            pushStatePageLimit: b.pushStatePageLimit,
            assetsBasePath: b.assetsBasePath,
            pushStateRequestHeaders: b.pushStateRequestHeaders,
            viewContainer: b.viewContainer,
            noTeardown: !0
        }), Tooltips.attachTo(document, {
            noTeardown: !0
        }), $("input,textarea").placeholder(), $.browser.msie && parseInt($.browser.version, 10) == 10 && ScreenReaderLabel.attachTo(document, {
            noTeardown: !0
        }), MessageDrawer.attachTo("#message-drawer", {
            noTeardown: !0
        }), MuteUser.attachTo(document, {
            noTeardown: !0
        }), MuteUserData.attachTo(document, {
            noTeardown: !0
        }), UndoUnblockUser.attachTo(document, {
            noTeardown: !0
        }), ARIAEventLogger.attachTo(document, {
            noTeardown: !0
        }), b.loggedIn || LanguageDropdown.attachTo(".js-language-dropdown"), b.initialState && b.initialState.ttft_navigation && (ttftNavigationEnabled=!0), ttftNavigationEnabled && TTFTNavigation.attachTo(document, {
            pageName: b.pageName,
            sectionName: b.sectionName
        }), EuCookie.attachTo(".eu-cookie-notice"), b.loggedIn && (initialLoginTWID = getTWID(), setInterval(verifySession, 1e4)), GoogleAnalytics.attachTo(document, {
            pageName: b.pageName,
            sectionName: b.sectionName,
            screenName: b.screenName,
            loggedIn: b.loggedIn,
            allowAdsPersonalization: b.allowAdsPersonalization
        }), MacawNymizer.attachTo(document)
    }
});
define("app/ui/with_scrollbar_width", ["module", "require", "exports"], function(module, require, exports) {
    function ScrollbarWidth() {
        this.calculateScrollbarWidth = function() {
            if ($("#scrollbar-width").length > 0)
                return;
            var a = $('<div class="modal-measure-scrollbar"/>').prependTo($("body")), b = $('<div class="inner"/>').appendTo(a), c = a.width() - b.width();
            a.remove(), $("head").append('<style id="scrollbar-width">        .compensate-for-scrollbar,        .modal-enabled,        .modal-enabled .global-nav-inner,        .profile-editing,        .profile-editing .global-nav-inner,        .overlay-enabled,        .overlay-enabled .global-nav-inner,        .grid-enabled,        .grid-enabled .global-nav-inner,        .gallery-enabled,        .gallery-enabled .global-nav-inner {          margin-right: ' + c + "px      }      </style>")
        }
    }
    module.exports = ScrollbarWidth
});
deferred('$lib/jquery.event.drag.js', function() {
    /*! jquery.event.drag (c) 2010 Three Dub Media - http://threedubmedia.com http://threedubmedia.com/code/license */
    (function($) {
        $.fn.drag = function(a, b, c) {
            var d = typeof a == "string" ? a: "", e = $.isFunction(a) ? a: $.isFunction(b) ? b: null;
            return d.indexOf("drag") !== 0 && (d = "drag" + d), c = (a == e ? b : c) || {}, e ? this.bind(d, c, e) : this.trigger(d)
        };
        var a = $.event, b = a.special, c = b.drag = {
            defaults: {
                which: 1,
                distance: 0,
                not: ":input",
                handle: null,
                relative: !1,
                drop: !0,
                click: !1
            },
            datakey: "dragdata",
            livekey: "livedrag",
            add: function(b) {
                var d = $.data(this, c.datakey), e = b.data || {};
                d.related += 1, !d.live && b.selector && (d.live=!0, a.add(this, "draginit." + c.livekey, c.delegate)), $.each(c.defaults, function(a, b) {
                    e[a] !== undefined && (d[a] = e[a])
                })
            },
            remove: function() {
                $.data(this, c.datakey).related -= 1
            },
            setup: function() {
                if ($.data(this, c.datakey))
                    return;
                var b = $.extend({
                    related: 0
                }, c.defaults);
                $.data(this, c.datakey, b), a.add(this, "mousedown", c.init, b), this.attachEvent && this.attachEvent("ondragstart", c.dontstart)
            },
            teardown: function() {
                if ($.data(this, c.datakey).related)
                    return;
                $.removeData(this, c.datakey), a.remove(this, "mousedown", c.init), a.remove(this, "draginit", c.delegate), c.textselect(!0), this.detachEvent && this.detachEvent("ondragstart", c.dontstart)
            },
            init: function(d) {
                var e = d.data, f;
                if (e.which > 0 && d.which != e.which)
                    return;
                if ($(d.target).is(e.not))
                    return;
                if (e.handle&&!$(d.target).closest(e.handle, d.currentTarget).length)
                    return;
                e.propagates = 1, e.interactions = [c.interaction(this, e)], e.target = d.target, e.pageX = d.pageX, e.pageY = d.pageY, e.dragging = null, f = c.hijack(d, "draginit", e);
                if (!e.propagates)
                    return;
                return f = c.flatten(f), f && f.length && (e.interactions = [], $.each(f, function() {
                    e.interactions.push(c.interaction(this, e))
                })), e.propagates = e.interactions.length, e.drop!==!1 && b.drop && b.drop.handler(d, e), c.textselect(!1), a.add(document, "mousemove mouseup", c.handler, e), !1
            },
            interaction: function(a, b) {
                return {
                    drag: a,
                    callback: new c.callback,
                    droppable: [],
                    offset: $(a)[b.relative ? "position": "offset"]() || {
                        top: 0,
                        left: 0
                    }
                }
            },
            handler: function(d) {
                var e = d.data;
                switch (d.type) {
                case!e.dragging && "mousemove":
                    if (Math.pow(d.pageX - e.pageX, 2) + Math.pow(d.pageY - e.pageY, 2) < Math.pow(e.distance, 2))
                        break;
                    d.target = e.target, c.hijack(d, "dragstart", e), e.propagates && (e.dragging=!0);
                case"mousemove":
                    if (e.dragging) {
                        c.hijack(d, "drag", e);
                        if (e.propagates) {
                            e.drop!==!1 && b.drop && b.drop.handler(d, e);
                            break
                        }
                        d.type = "mouseup"
                    };
                case"mouseup":
                    a.remove(document, "mousemove mouseup", c.handler), e.dragging && (e.drop!==!1 && b.drop && b.drop.handler(d, e), c.hijack(d, "dragend", e)), c.textselect(!0), e.click===!1 && e.dragging && ($.event.triggered=!0, setTimeout(function() {
                        $.event.triggered=!1
                    }, 20), e.dragging=!1)
                }
            },
            delegate: function(b) {
                var d = [], e, f = $.data(this, "events") || {};
                return $.each(f.live || [], function(f, g) {
                    if (g.preType.indexOf("drag") !== 0)
                        return;
                    e = $(b.target).closest(g.selector, b.currentTarget)[0];
                    if (!e)
                        return;
                    a.add(e, g.origType + "." + c.livekey, g.origHandler, g.data), $.inArray(e, d) < 0 && d.push(e)
                }), d.length ? $(d).bind("dragend." + c.livekey, function() {
                    a.remove(this, "." + c.livekey)
                }) : !1
            },
            hijack: function(b, d, e, f, g) {
                if (!e)
                    return;
                var h = {
                    event: b.originalEvent,
                    type: b.type
                }, i = d.indexOf("drop") ? "drag": "drop", j, k = f || 0, l, m, n, o = isNaN(f) ? e.interactions.length: f;
                b.type = d, b.originalEvent = null, e.results = [];
                do 
                    if (l = e.interactions[k]) {
                        if (d !== "dragend" && l.cancelled)
                            continue;
                            n = c.properties(b, e, l), l.results = [], $(g || l[i] || e.droppable).each(function(f, g) {
                                n.target = g, j = g ? a.handle.call(g, b, n) : null, j===!1 ? (i == "drag" && (l.cancelled=!0, e.propagates -= 1), d == "drop" && (l[i][f] = null)) : d == "dropinit" && l.droppable.push(c.element(j) || g), d == "dragstart" && (l.proxy = $(c.element(j) || l.drag)[0]), l.results.push(j), delete b.result;
                                if (d !== "dropinit")
                                    return j
                                }), e.results[k] = c.flatten(l.results), d == "dropinit" && (l.droppable = c.flatten(l.droppable)), d == "dragstart"&&!l.cancelled && n.update()
                    }
                while (++k < o);
                return b.type = h.type, b.originalEvent = h.event, c.flatten(e.results)
            },
            properties: function(a, b, d) {
                var e = d.callback;
                return e.drag = d.drag, e.proxy = d.proxy || d.drag, e.startX = b.pageX, e.startY = b.pageY, e.deltaX = a.pageX - b.pageX, e.deltaY = a.pageY - b.pageY, e.originalX = d.offset.left, e.originalY = d.offset.top, e.offsetX = a.pageX - (b.pageX - e.originalX), e.offsetY = a.pageY - (b.pageY - e.originalY), e.drop = c.flatten((d.drop || []).slice()), e.available = c.flatten((d.droppable || []).slice()), e
            },
            element: function(a) {
                if (a && (a.jquery || a.nodeType == 1))
                    return a
            },
            flatten: function(a) {
                return $.map(a, function(a) {
                    return a && a.jquery ? $.makeArray(a) : a && a.length ? c.flatten(a) : a
                })
            },
            textselect: function(a) {
                $(document)[a ? "unbind": "bind"]("selectstart", c.dontstart).attr("unselectable", a ? "off" : "on").css("MozUserSelect", a ? "" : "none")
            },
            dontstart: function() {
                return !1
            },
            callback: function() {}
        };
        c.callback.prototype = {
            update: function() {
                b.drop && this.available.length && $.each(this.available, function(a) {
                    b.drop.locate(this, a)
                })
            }
        }, b.draginit = b.dragstart = b.dragend = c
    })(jQuery)
});
define("app/ui/with_dialog", ["module", "require", "exports", "core/compose", "app/ui/with_scrollbar_width", "app/utils/with_keyboard_modality", "app/utils/is_visible", "app/utils/is_enabled", "app/utils/prevent_next_tooltip", "$lib/jquery.event.drag.js"], function(module, require, exports) {
    function withDialog() {
        compose.mixin(this, [withKeyboardModality, withScrollbarWidth]), this.defaultAttrs({
            formControlsSelector: "textarea,select,input,button,div[contenteditable=true]",
            closeTargetsSelector: ".js-close, .close-modal-background-target",
            initialFocusSelector: ".js-initial-focus",
            hideFocusClass: "hide-focus",
            hideFocusSelector: ".hide-focus",
            closeButtonClass: "modal-close",
            closeButtonSelector: ".modal-close",
            dragabilityClass: "draggable",
            modalEnabledClass: "modal-enabled",
            modalContainerSelector: ".modal-container",
            modalSelector: ".modal",
            modalContentSelector: ".modal-content",
            modalHeaderSelector: ".modal-header",
            modalTitleSelector: ".modal-title",
            modalBodySelector: ".modal-body",
            dropdownRootNodeSelector: ".dropdown",
            dropdownToggleSelector: ".dropdown-toggle"
        }), this.center = function(a) {
            var b = $(window), c = {
                top: parseInt((b.height() - a.outerHeight()) / 2),
                left: parseInt((b.width() - a.outerWidth()) / 2)
            };
            return c
        }, this.position = function() {
            var a = this.center(this.$dialog), b = $(window).height(), c = $(window).scrollTop();
            this.attr.top != null && (a.top = this.attr.top), this.attr.left != null && (a.left = this.attr.left), this.attr.maxTop != null && (a.top = Math.min(a.top, this.attr.maxTop)), this.attr.maxLeft != null && (a.left = Math.min(a.left, this.attr.maxLeft)), $("body").attr("dir") === "rtl" ? this.$dialog.css({
                top: a.top,
                right: a.left
            }) : this.$dialog.css({
                top: a.top,
                left: a.left
            }), b < this.$dialog.outerHeight() ? (this.$dialog.css("position", "absolute"), this.$dialog.css("top", c + "px")) : this.attr.fixed===!1 && this.$dialog.css("top", a.top + c)
        }, this.resize = function() {
            this.attr.width && this.$dialog.css("width", this.attr.width), this.attr.height && this.$dialog.css("height", this.attr.height)
        }, this.applyDraggability = function() {
            if (!this.$dialog.hasClass(this.attr.dragabilityClass))
                return;
            var a = this, b = {
                relative: !0,
                handle: this.attr.modalHeaderSelector
            }, c = function(a, b) {
                $("body").attr("dir") === "rtl" ? this.$dialog.css({
                    top: b.offsetY,
                    right: b.originalX - b.deltaX
                }) : this.$dialog.css({
                    top: b.offsetY,
                    left: b.offsetX
                })
            };
            this.$dialog.drag("start", function() {
                a.$dialog.addClass("unselectable"), $("#doc").addClass("unselectable")
            }), this.$dialog.drag("end", function() {
                a.$dialog.removeClass("unselectable"), $("#doc").removeClass("unselectable")
            }), this.$dialog.drag(c.bind(this), b)
        }, this.notifyFocusChange = function() {
            this.trigger(this.$dialog, {
                type: "uiDialogInitialFocus",
                defaultBehavior: "setInitialFocus"
            })
        }, this.setInitialFocus = function() {
            var a = this.$dialog.find(this.attr.initialFocusSelector);
            a.length || (a = this.$dialog.find(".primary-btn")), a.length && isEnabled(a) && isVisible(a) ? a.focus() : this.focusNextAvailableControl("start", this.$dialog);
            var b = this.$dialog.find(this.attr.closeButtonSelector);
            b.is(document.activeElement) && b.addClass(this.attr.hideFocusClass)
        }, this.hasFocus = function() {
            var a = this.$dialog[0], b = document.activeElement;
            return a && b && (a == b || $.contains(a, b))
        }, this.blur = function() {
            this.hasFocus() && document.activeElement.blur()
        }, this.positionCloseButton = function() {
            var a = this.$dialog.find(this.attr.focusableDescendants), b = this.$dialog.find(this.attr.closeButtonSelector);
            a.length > 1 ? b.insertBefore(this.$dialog.find(this.attr.lastTabStopSelector)) : b.insertBefore(this.$dialog.find(this.attr.modalBodySelector))
        }, this.focusFirstAvailableControl = function() {
            this.isOpen() && this.focusNextAvailableControl("first", this.$dialog)
        }, this.focusLastAvailableControl = function() {
            this.isOpen() && this.focusNextAvailableControl("last", this.$dialog)
        }, this.setFocusWhenContentChanges = function(a) {
            this.isOpen() && this.$dialog.is(a.target) && this.notifyFocusChange()
        }, this.removeHideFocusClass = function(a) {
            $(a.target).removeClass(this.attr.hideFocusClass)
        }, this.open = function() {
            this.isOpen() || (this.applyARIAAttrs(), this.createFirstLastTabStop(this.$dialog), this.positionCloseButton(), this.openState=!0, this.$dialogContainer.fadeIn("fast", this.notifyFadeInComplete.bind(this)), this.calculateScrollbarWidth(), $("body").addClass(this.attr.modalEnabledClass), this.resize(), this.initiallyVisible || this.position(), this.applyDraggability(), this.activeEl = document.activeElement, this.notifyFocusChange(), this.trigger("uiCloseDropdowns"), this.trigger("uiDialogOpened"), delete this.initiallyVisible)
        }, this.isOpen = function() {
            var a=!!(this.$dialog && this.$dialog.length && this.$dialogContainer.length), b = window.DEBUG && window.DEBUG.enabled;
            if (a && b&&!this.initiallyVisible && this.openState !== this.$dialogContainer.is(":visible"))
                throw new Error("Dialog markup and internal openState variable are out of sync.");
            return this.openState
        }, this.isModalOpen = function() {
            return $("body").hasClass(this.attr.modalEnabledClass)
        }, this.notifyFadeInComplete = function() {
            this.trigger("uiDialogFadeInComplete")
        }, this.openWhenTriggerClicked = function(a) {
            a.preventDefault(), this.open()
        }, this.close = function(a) {
            if (!this.isOpen())
                return;
            var b = {
                keydown: !0,
                uiShortcutEsc: !0
            }, c = a && b[a.type];
            this.trigger({
                type: "uiDialogCloseRequested",
                defaultBehavior: this.blurAndClose.bind(this, c)
            })
        }, this.closeImmediately = function() {
            this.isOpen() && this.blurAndCloseImmediately()
        }, this.restorePreviousFocus = function() {
            var a;
            if (this.activeEl) {
                a = $(this.activeEl).closest(this.attr.dropdownRootNodeSelector), a.length && (this.activeEl = a.find(this.attr.dropdownToggleSelector)[0]);
                try {
                    preventNextTooltip(this.activeEl), this.activeEl.focus(), this.activeEl = null
                } catch (b) {}
            }
        }, this.handleCloseKeys = function(a) {
            var b = {
                13: !0,
                32: !0
            };
            this.isOpen() && b[a.keyCode] && this.close(a)
        }, this.blurAndClose = function(a) {
            this.blur(), this.$dialogContainer.fadeOut("fast", this.afterClose.bind(this, a, !0))
        }, this.blurAndCloseImmediately = function() {
            this.blur(), this.$dialogContainer.hide(), this.afterClose()
        }, this.afterClose = function(a, b) {
            this.removeFirstLastTabStop(this.$dialog), $(this.attr.modalContainerSelector + ":visible").length || $("body").removeClass(this.attr.modalEnabledClass), this.openState=!1, a && this.trigger(this.$dialog, {
                type: "uiDialogRestorePreviousFocus",
                defaultBehavior: "restorePreviousFocus"
            }), this.trigger("uiDialogClosed"), b && this.trigger("uiDialogClosedByRequest")
        }, this.applyARIAAttrs = function() {
            var a = this.$dialog.closest(this.attr.modalContainerSelector), b = this.$dialog.find(this.attr.modalContentSelector), c = this.$dialog.find(this.attr.modalTitleSelector), d = this.$dialog.find(this.attr.modalBodySelector), e = a.attr("id"), f = e + "-dialog", g = this.$dialog.find(this.attr.closeButtonSelector);
            this.$dialog.attr("id", f), g.attr("aria-controls", f);
            var h = e + "-header";
            c.attr("id", h);
            var i=!!d.find(this.attr.formControlsSelector).length, j = i ? "dialog" : "alertdialog", k = {
                role: j,
                "aria-labelledby": h
            }, l;
            i || (l = e + "-body", d.attr("id", l), k["aria-describedby"] = l, g.attr("aria-describedby", l)), this.$dialog.attr(k), b.attr("role", "document")
        }, this.closeOtherDialogs = function(a, b) {
            this.node != a.target && this.close()
        }, this.after("initialize", function() {
            this.openState=!1, this.$dialogContainer = this.$dialog || this.$node;
            var a = this.$dialogContainer.is(document);
            a || (this.$dialog = this.$dialogContainer.find(this.attr.modalSelector)), this.on("click", {
                closeTargetsSelector: this.close
            }), this.on("keydown", {
                closeTargetsSelector: this.handleCloseKeys
            }), this.on(document, "uiShortcutEsc uiCloseDialog", this.close), this.on(document, "uiBeforePageChanged", this.closeImmediately), this.on(document, "uiDialogContentChanged", this.setFocusWhenContentChanges), this.on("focusin", {
                lastTabStopSelector: this.focusFirstAvailableControl,
                firstTabStopSelector: this.focusLastAvailableControl
            }), this.on("focusout", {
                hideFocusSelector: this.removeHideFocusClass
            }), this.attr.triggerSelector && this.on(this.attr.triggerSelector, "click", this.openWhenTriggerClicked), this.attr.closeOnOtherDialogOpened && this.on(document, "uiDialogOpened", this.closeOtherDialogs), !a && this.$dialogContainer.is(":visible") && (this.initiallyVisible=!0, this.open())
        })
    }
    var compose = require("core/compose"), withScrollbarWidth = require("app/ui/with_scrollbar_width"), withKeyboardModality = require("app/utils/with_keyboard_modality"), isVisible = require("app/utils/is_visible"), isEnabled = require("app/utils/is_enabled"), preventNextTooltip = require("app/utils/prevent_next_tooltip");
    require("$lib/jquery.event.drag.js"), module.exports = withDialog
});
define("app/ui/dialogs/signup_dialog", ["module", "require", "exports", "core/component", "app/ui/with_dialog"], function(module, require, exports) {
    function signupDialog() {
        this.defaultAttrs({
            dialogSelector: ".SignupDialog",
            signupFormSubmitSelector: ".SignupForm-submit",
            triggerSelector: ".js-openSignupDialog",
            signinLinkSelector: ".SignupDialog-signinLink"
        }), this.notifySignupButtonClicked = function() {
            this.trigger("uiSignupButtonClicked")
        }, this.signinClick = function() {
            var a = "/login?hide_message=true&redirect_after_login=" + encodeURIComponent(this.redirectAfterLoginUrl());
            this.select("signinLinkSelector").attr("href", a)
        }, this.redirectAfterLoginUrl = function() {
            return this.triggerElementUrl ? this.triggerElementUrl : window.location.pathname + window.location.search
        }, this.updateTriggerElementUrl = function(a) {
            var b = $(a.target).closest(this.attr.triggerSelector);
            b.length && b.attr("href") ? this.triggerElementUrl = b.attr("href") : this.resetTriggerElementUrl()
        }, this.resetTriggerElementUrl = function() {
            this.triggerElementUrl = undefined, this.select("signinLinkSelector").attr("href", "/login")
        }, this.after("initialize", function() {
            this.$dialog = this.$node, this.on("click", {
                signupFormSubmitSelector: this.notifySignupButtonClicked,
                signinLinkSelector: this.signinClick
            }), this.on(this.attr.triggerSelector, "click", this.updateTriggerElementUrl), this.on("uiDialogClosed", this.resetTriggerElementUrl), this.on(document, "uiPageChanged uiOverlayPageChanged", this.resetTriggerElementUrl), this.on(document, "uiOpenSigninOrSignupDialog", this.open), this.on(document, "uiCloseSigninOrSignupDialog", this.close), this.on("uiDialogOpened", "uiSigninOrSignupDialogOpened"), this.on("uiDialogClosed", "uiSigninOrSignupDialogClosed")
        })
    }
    var defineComponent = require("core/component"), withDialog = require("app/ui/with_dialog");
    module.exports = defineComponent(signupDialog, withDialog)
});
define("app/ui/signup_call_out", ["module", "require", "exports", "core/component"], function(module, require, exports) {
    function signupCallOut() {
        this.defaultAttrs({
            signupFormSubmitSelector: ".signup-btn, .SignupForm-submit"
        }), this.notifySignupButtonClicked = function() {
            this.trigger("uiSignupButtonClicked")
        }, this.after("initialize", function() {
            this.on("click", {
                signupFormSubmitSelector: this.notifySignupButtonClicked
            })
        })
    }
    var defineComponent = require("core/component");
    module.exports = defineComponent(signupCallOut)
});
define("app/data/signup_click_scribe", ["module", "require", "exports", "core/component", "app/data/with_scribe"], function(module, require, exports) {
    function loggedOutScribe() {
        this.scribeSignupClick = function(a, b) {
            this.scribe({
                action: "signup_click"
            }, b)
        }, this.scribeSigninOrSignupDialogOpened = function(a, b) {
            this.scribe({
                action: "open"
            }, b)
        }, this.scribeSigninOrSignupDialogClosed = function(a, b) {
            this.scribe({
                action: "close"
            }, b)
        }, this.after("initialize", function() {
            this.on("uiSignupButtonClicked", this.scribeSignupClick), this.on("uiSigninOrSignupDialogOpened", this.scribeSigninOrSignupDialogOpened), this.on("uiSigninOrSignupDialogClosed", this.scribeSigninOrSignupDialogClosed)
        })
    }
    var defineComponent = require("core/component"), withScribe = require("app/data/with_scribe");
    module.exports = defineComponent(loggedOutScribe, withScribe)
});
define("app/ui/front_page_photo_set", ["module", "require", "exports", "core/component", "core/clock"], function(module, require, exports) {
    function expPhotoSet() {
        this.defaultAttrs({
            rotationMs: 7e3,
            fadeMs: 500,
            activeClass: "active",
            companionTweetsSelector: ".background-companion-tweets .companion-tweet",
            activeCompanionTweetSelector: ".companion-tweet.active",
            frontImageSelector: ".front-bg .front-image"
        }), this.cycleBackground = function() {
            var a = this.select("activeCompanionTweetSelector"), b = this.$companionTweets.index(a), c=++b%this.companionTweetsLen, d = this.$companionTweets.eq(c);
            this.hideTweet(a), this.changeImage(d), this.showTweet(d)
        }, this.showTweet = function(a) {
            a.show().addClass(this.attr.activeClass)
        }, this.hideTweet = function(a) {
            a.hide().removeClass(this.attr.activeClass)
        }, this.changeImage = function(a) {
            this.$frontImage.fadeOut(this.attr.fadeMs, function() {
                this.$frontImage.attr("src", a.data("photo")), this.$frontImage.fadeIn(this.attr.fadeMs)
            }.bind(this))
        }, this.after("initialize", function() {
            this.$companionTweets = this.select("companionTweetsSelector"), this.$frontImage = this.select("frontImageSelector"), this.companionTweetsLen = this.$companionTweets.length, this.showTweet(this.$companionTweets.first());
            if (this.$companionTweets.length <= 1)
                return;
            clock.setIntervalEvent("uiFrontPagePhotoSetBackgroundTick", this.attr.rotationMs), this.on(document, "uiFrontPagePhotoSetBackgroundTick", this.cycleBackground)
        })
    }
    var defineComponent = require("core/component"), clock = require("core/clock");
    module.exports = defineComponent(expPhotoSet)
});
define("app/boot/logged_out", ["module", "require", "exports", "app/ui/dialogs/signup_dialog", "app/ui/signup_call_out", "app/data/signup_click_scribe", "app/ui/front_page_photo_set"], function(module, require, exports) {
    var SignupDialog = require("app/ui/dialogs/signup_dialog"), SignupCallOut = require("app/ui/signup_call_out"), LoggedOutScribe = require("app/data/signup_click_scribe"), ExpPhotoSet = require("app/ui/front_page_photo_set");
    module.exports = function(b) {
        SignupDialog.attachTo(".SignupDialog", {
            eventData: {
                scribeContext: {
                    component: "dialog",
                    element: "signup"
                }
            }
        }), SignupCallOut.attachTo(".js-signup-call-out", {
            eventData: {
                scribeContext: {
                    component: "signup_callout",
                    element: "form"
                }
            }
        }), LoggedOutScribe.attachTo(document), b.inExpPhotoSet && ExpPhotoSet.attachTo("#page-container")
    }
});
define("app/utils/browser", ["module", "require", "exports"], function(module, require, exports) {
    function browser(a) {
        var b;
        return a.chrome ? b = "chrome" : a.webkit ? b = "webkit" : a.mozilla ? b = "mozilla" : a.msie ? b = "msie" : b = "unknown", {
            name: b,
            version: a.version
        }
    }
    module.exports = browser
});
define("app/utils/ttft", ["module", "require", "exports", "app/data/scribe_transport", "app/utils/params", "app/utils/time", "app/data/user_info", "app/utils/browser"], function(module, require, exports) {
    function scribeTTFTData(a, b) {
        if (!recorded && window.performance && a) {
            recorded=!0;
            var c = a;
            c.did_load = b, c.web_timings = $.extend({}, window.performance.timing), c.web_timings.toJSON && delete c.web_timings.toJSON, c.navigation = {
                type: window.performance.navigation.type,
                redirectCount: window.performance.navigation.redirectCount
            }, c.referrer = document.referrer, scribeTransport.send(c, "swift_time_to_first_tweet", !1), scribePerftownEvents(c);
            if (params.fromQuery(window.location).show_ttft) {
                var d = c.web_timings;
                $(document).trigger("uiShowError", {
                    message: "<table width=80%><thead><th>milestone<th>time<th>cumulative</thead><tbody><tr><td>connect:       <td>" + (d.connectEnd - d.navigationStart) + "<td>" + (d.connectEnd - d.navigationStart) + "</tr>" + "<tr><td>process:       <td>" + (d.responseStart - d.connectEnd) + "<td>" + (d.responseStart - d.navigationStart) + "</tr>" + "<tr><td>response:      <td>" + (d.responseEnd - d.responseStart) + "<td>" + (d.responseEnd - d.navigationStart) + "</tr>" + "<tr><td>render:        <td>" + (c.client_record_time - d.responseEnd) + "<td>" + (c.client_record_time - d.navigationStart) + "</tr>" + "<tr><td>interactivity: <td>" + (c.aq_empty_time - c.client_record_time) + "<td>" + (c.aq_empty_time - d.navigationStart) + "</tr>" + "<tr><td>ajax_complete: <td>" + (c.ajax_complete_time - c.aq_empty_time) + "<td>" + (c.ajax_complete_time - d.navigationStart) + "</tr>" + "<tr><td>ajax_count:    <td>" + c.ajax_count + "</tr>" + "</tbody></table>"
                })
            }
            try {
                delete window.ttft
            } catch (e) {
                window.ttft = undefined
            }
        }
    }
    function scribePerftownEvents(a) {
        if (!userInfo.getDecider("web_perftown_ttft"))
            return;
        var b = a.web_timings, c = {
            ttft: a.client_record_time - b.navigationStart,
            connect: b.connectEnd - b.navigationStart,
            process: b.responseStart - b.connectEnd,
            response: b.responseEnd - b.responseStart,
            render: a.client_record_time - b.responseEnd,
            interactivity: a.aq_empty_time - a.client_record_time,
            ajax_complete: a.ajax_complete_time - a.aq_empty_time
        }, d = JSON.stringify({
            browser: browser($.browser)
        });
        Object.keys(c).forEach(function(a) {
            var e = {
                product: "webclient",
                description: "stats:perf:ttft:" + a,
                duration_ms: c[a],
                start_time_ms: b.navigationStart,
                metadata: d
            };
            scribeTransport.send(e, "perftown")
        })
    }
    function scribeMilestones(a) {
        if (!window.ttftData)
            return;
        var b=!0;
        for (var c = 0; c < requiredMilestones.length; ++c)
            if (!(requiredMilestones[c]in window.ttftData)) {
                b=!1;
                break
            }(a || b) && scribeTTFTData(window.ttftData, b)
    }
    function onAjaxComplete(a, b, c) {
        if (c && c.url in newAjaxRequests)
            for (var d = 0; d < newAjaxRequests[c.url].length; d++)
                if (c === newAjaxRequests[c.url][d]) {
                    newAjaxRequests[c.url].splice(d, 1);
                    return 
                }
        pendingAjaxCount--;
        if (pendingAjaxCount == 0 || $.active == 0)
            unbindAjaxHandlers(), recordPendingAjaxComplete()
    }
    function onAjaxSend(a, b, c) {
        c && c.url && (newAjaxRequests[c.url] || (newAjaxRequests[c.url] = []), newAjaxRequests[c.url].push(c))
    }
    function recordPendingAjaxComplete() {
        recordMilestone("ajax_complete_time", window.ttft.now())
    }
    function bindAjaxHandlers() {
        $(document).bind("ajaxComplete", onAjaxComplete), $(document).bind("ajaxSend", onAjaxSend)
    }
    function unbindAjaxHandlers() {
        $(document).unbind("ajaxComplete", onAjaxComplete), $(document).unbind("ajaxSend", onAjaxSend)
    }
    function startAjaxTracking() {
        startingAjaxCount = pendingAjaxCount = $.active, recordMilestone("ajax_count", startingAjaxCount), startingAjaxCount == 0 ? recordPendingAjaxComplete() : (unbindAjaxHandlers(), bindAjaxHandlers())
    }
    function recordMilestone(a, b) {
        window.ttftData&&!window.ttftData[a] && (window.ttftData[a] = b), scribeMilestones(!1)
    }
    var scribeTransport = require("app/data/scribe_transport"), params = require("app/utils/params"), time = require("app/utils/time"), userInfo = require("app/data/user_info"), browser = require("app/utils/browser"), recorded=!1, requiredMilestones = ["page", "client_record_time", "aq_empty_time", "ajax_complete_time", "ajax_count"], startingAjaxCount = 0, pendingAjaxCount = 0, newAjaxRequests = {};
    window.ttft = {
        now: time.now,
        recordMilestone: recordMilestone
    }, scribeMilestones(!1), setTimeout(function() {
        scribeMilestones(!0)
    }, 45e3), module.exports = {
        startAjaxTracking: startAjaxTracking,
        _scribeTransport: scribeTransport
    }
});
using.path = $("#swift-module-path").val();
using.aliases && using.bundles.push(using.aliases);
$(".loadrunner-alias").each(function(a, b) {
    using.bundles.push(JSON.parse($(b).val()))
});
using("debug/debug", function(a) {
    function b() {
        function e() {
            d.forEach(function(a)
            {
                a(c)
            });
            var b = $(document);
            b.on("uiSwiftLoaded uiPageChanged", function() {
                window.__swift_loaded=!0
            });
            b.on("uiBeforeNewPageLoad", function() {
                window.__swift_loaded=!1
            });
            $("body").removeClass(c.baseFoucClass);
            b.trigger("uiSwiftLoaded");
            if (window.swiftActionQueue
            ) {
                var e = window.swiftActionQueue, f;
                a.enabled && e.logActions();
                if (c.deciders)
                    if (c.deciders.scribeReducedActionQueue)
                        for (f in e.buckets)
                            $(document).trigger("scribe", {
                                scribeEvent: {
                                    component: "reduced_action_queue",
                                    action: f
                                },
                                scribeData: {
                                    event_value: e.buckets[f].length
                                }
                            });
                    else if (c.deciders.scribeActionQueue)
                        for (f in e.buckets)
                            $(document).trigger("scribe", {
                                scribeEvent: {
                                    component: "action_queue",
                                    action: f
                                },
                                scribeData: {
                                    event_value: e.buckets[f].length
                                }
                            });
                e.flush($);
                a.enabled || (window.swiftActionQueue = undefined)
            }
            if (window.ttftData
            ) {
                window.ttft && window.ttft.recordMilestone("aq_empty_time", window.ttft.now());
                using("app/utils/ttft", function(a) {
                    a.startAjaxTracking()
                })
            }
            if (c.deciders && c.deciders.dynamicLoadMediaForward) {
                b.trigger("loadImages");
                b.on("uiHasInjectedOldTimelineItems uiHasInjectedNewTimeline uiPageChanged"
                , function() {
                    b.trigger("loadImages")
                })
            }
            c.fontCSS && using("css!" + c.fontCSS).start()
        }
        var b = $("#init-data").val(), c = JSON.parse(b), d = $.makeArray(arguments);
        c.moreCSSBundles ? using.apply(this, c.moreCSSBundles.map(function(a) {
            return "css!" + a
        }).concat(e)) : e()
    }
    location
    .search.match(/debug=1/) && $("body").addClass("debug");
    if ($("body").hasClass("debug")) {
        window.DEBUG = a;
        a.enable(!0);
        $(document).on("scribedata.ScribeTransport", function(a, b) {
            var c;
            if (c = b.event_namespace) {
                var d = [c.client, c.page, c.section, c.component, c.element
                , c.action].join(":");
                console.info("scribe", d)
            }
        })
    } else 
        a.enable(!1);
    var c = $("input.swift-boot-module").map(function(a, b) {
        return $(b).val()
    }).toArray();
    using.apply(this, c.concat(b))
})
