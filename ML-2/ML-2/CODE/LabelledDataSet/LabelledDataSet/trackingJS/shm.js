/*!
* sina.com.cn/license
* 20141119160607
* svn:../ui/project/homepage/trunk/
* [30,96,52] published at 2014-11-19 16:32:37
*/
var $globalInfo = $globalInfo || {};
if (typeof $globalInfo.SHMLoaded == "undefined") {
    $globalInfo.SHMLoaded = false;
    var SHM = (function() {
        var a = {};
        a.E = function(c) {
            if (typeof c === "string") {
                return document.getElementById(c)
            }
            return c
        };
        a.C = function(c) {
            c = c.toUpperCase();
            if (c == "TEXT") {
                return document.createTextNode("")
            }
            if (c == "BUFFER") {
                return document.createDocumentFragment()
            }
            return document.createElement(c)
        };
        a.register = function(h, m) {
            var f = 0, d = a, g = h.split("."), c = g.length, j = c - 1, e;
            while (f < c) {
                e = g[f];
                if (f == j) {
                    if (d[e] !== undefined) {
                        throw g + ":: has registered"
                    }
                    d[e] = m(a)
                }
                if (d[e] === undefined) {
                    d[e] = {}
                }
                d = d[e];
                f++
            }
        };
        a.regShort = function(c, d) {
            if (a[c] !== undefined) {
                throw c + ":: has registered"
            }
            a[c] = d
        };
        var b = function() {
            var c = navigator.userAgent.toLowerCase();
            this.isIE = /msie/.test(c);
            this.isOPERA = /opera/.test(c);
            this.isMOZ = /gecko/.test(c);
            this.isIE5 = /msie 5 /.test(c);
            this.isIE55 = /msie 5.5/.test(c);
            this.isIE6 = /msie 6/.test(c);
            this.isIE7 = /msie 7/.test(c);
            this.isCHROME = /chrome/i.test(c) && /webkit/i.test(c) && /mozilla/i.test(c);
            this.isSAFARI = /safari/.test(c)&&!this.isCHROME;
            this.iswinXP = /windows nt 5.1/.test(c);
            this.iswinVista = /windows nt 6.0/.test(c);
            this.isFF = /firefox/.test(c);
            this.isIOS = /\((iPhone|iPad|iPod)/i.test(c)
        };
        $globalInfo.ua = new b();
        return a
    })()
} else {
    SHM._register = SHM.register;
    SHM.register = function(a, b) {}
}
SHM.register("dom.ready", function() {
    var c = [], e = 0, a = 0, e = 0;
    var b = function() {
        if (document.readyState === "complete") {
            return 1
        }
        return e
    };
    var f = function(g) {
        if (e) {
            return 
        }
        e = 1;
        if (c) {
            while (c.length) {
                c.shift()()
            }
        }
        c = null
    };
    var d = function() {
        if (a) {
            return 
        }
        a = 1;
        if (document.readyState === "complete") {
            f()
        } else {
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", function() {
                    document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                    f()
                }, false);
                window.addEventListener("load", function() {
                    window.removeEventListener("load", arguments.callee, false);
                    f()
                }, false)
            } else {
                document.attachEvent("onreadystatechange", function() {
                    if (document.readyState == "complete") {
                        document.detachEvent("onreadystatechange", arguments.callee);
                        f()
                    }
                });
                (function() {
                    if (e) {
                        return 
                    }
                    var g = new Image;
                    try {
                        g.doScroll();
                        g = null
                    } catch (h) {
                        setTimeout(arguments.callee, 64);
                        return 
                    }
                    f()
                })()
            }
        }
    };
    return function(g) {
        d();
        if (!b()) {
            c.push(g);
            return 
        }
        g.call()
    }
});
SHM.register("util.getUniqueKey", function(a) {
    return function() {
        return Math.floor(Math.random() * 1000) + new Date().getTime().toString()
    }
});
SHM.register("dom.uniqueID", function(a) {
    return function(b) {
        return b && (b.uniqueID || (b.uniqueID = a.util.getUniqueKey()))
    }
});
SHM.register("dom.hasClass", function(a) {
    return function(d, c) {
        return (new RegExp("(^|\\s)" + c + "($|\\s)")).test(d.className)
    }
});
SHM.register("dom.addClass", function(a) {
    return function(d, e) {
        d.nodeType === 1 && (a.dom.hasClass(d, e) || (d.className = a.str.trim(d.className) + " " + e))
    }
});
SHM.register("dom.removeClass", function(a) {
    return function(d, e) {
        d.nodeType === 1 && a.dom.hasClass(d, e) && (d.className = d.className.replace(new RegExp("(^|\\s)" + e + "($|\\s)"), " "))
    }
});
SHM.register("dom.getScrollPos", function(a) {
    return function(d) {
        d = d || document;
        var b = d.documentElement;
        var c = d.body;
        return [Math.max(b.scrollTop, c.scrollTop), Math.max(b.scrollLeft, c.scrollLeft), Math.max(b.scrollWidth, c.scrollWidth), Math.max(b.scrollHeight, c.scrollHeight)]
    }
});
SHM.register("dom.getStyle", function(b) {
    var a = function(c, f) {
        switch (f) {
        case"opacity":
            var h = 100;
            try {
                h = c.filters["DXImageTransform.Microsoft.Alpha"].opacity
            } catch (g) {
                try {
                    h = c.filters("alpha").opacity
                } catch (g) {}
            }
            return h / 100;
        case"float":
            f = "styleFloat";
        default:
            var d = c.currentStyle ? c.currentStyle[f]: null;
            return (c.style[f] || d)
        }
    };
    if (!$globalInfo.ua.isIE) {
        a = function(c, f) {
            if (f == "float") {
                f = "cssFloat"
            }
            try {
                var d = document.defaultView.getComputedStyle(c, "")
            } catch (g) {
                traceError(g)
            }
            return c.style[f] || d ? d[f] : null
        }
    }
    return a
});
SHM.register("dom.getWinSize", function() {
    return function(d) {
        var a, b;
        var c;
        if (d) {
            c = d.document
        } else {
            c = document
        }
        if (self.innerHeight) {
            if (d) {
                c = d.self
            } else {
                c = self
            }
            a = c.innerWidth;
            b = c.innerHeight
        } else {
            if (c.documentElement && c.documentElement.clientHeight) {
                a = c.documentElement.clientWidth;
                b = c.documentElement.clientHeight
            } else {
                if (c.body) {
                    a = c.body.clientWidth;
                    b = c.body.clientHeight
                }
            }
        }
        return {
            width: a,
            height: b
        }
    }
});
SHM.register("dom.getXY", function(d) {
    var a = d.dom.getStyle;
    var c = d.dom.getScrollPos;
    var b = function(f) {
        if ((f.parentNode == null || f.offsetParent == null || a(f, "display") == "none") && f != document.body) {
            return false
        }
        var e = null;
        var j = [];
        var g;
        var h = f.ownerDocument;
        g = f.getBoundingClientRect();
        var i = c(f.ownerDocument);
        return [g.left + i[1], g.top + i[0]];
        e = f.parentNode;
        while (e.tagName&&!/^body|html$/i.test(e.tagName)) {
            if (a(e, "display").search(/^inline|table-row.*$/i)) {
                j[0] -= e.scrollLeft;
                j[1] -= e.scrollTop
            }
            e = e.parentNode
        }
        return j
    };
    if (!$globalInfo.ua.isIE) {
        b = function(g) {
            if ((g.parentNode == null || g.offsetParent == null || a(g, "display") == "none") && g != document.body) {
                return false
            }
            var e = null;
            var m = [];
            var h;
            var i = g.ownerDocument;
            var f = $globalInfo.ua.isSAFARI;
            m = [g.offsetLeft, g.offsetTop];
            e = g.offsetParent;
            var j = a(g, "position") == "absolute";
            if (e != g) {
                while (e) {
                    m[0] += e.offsetLeft;
                    m[1] += e.offsetTop;
                    if (f&&!j && a(e, "position") == "absolute") {
                        j = true
                    }
                    e = e.offsetParent
                }
            }
            if (f && j) {
                m[0] -= g.ownerDocument.body.offsetLeft;
                m[1] -= g.ownerDocument.body.offsetTop
            }
            e = g.parentNode;
            while (e.tagName&&!/^body|html$/i.test(e.tagName)) {
                if (a(e, "display").search(/^inline|table-row.*$/i)) {
                    m[0] -= e.scrollLeft;
                    m[1] -= e.scrollTop
                }
                e = e.parentNode
            }
            return m
        }
    }
    return b
});
SHM.register("dom.insertAfter", function(b) {
    return function(d, a) {
        var c = a.parentNode;
        c.lastChild == a ? c.appendChild(d) : c.insertBefore(d, a.nextSibling)
    }
});
SHM.register("dom.insertBefore", function(b) {
    return function(d, a) {
        var c = a.parentNode;
        c.insertBefore(d, a)
    }
});
SHM.register("dom.isNode", function(a) {
    return function(b) {
        return !!((b != undefined) && b.nodeName && b.nodeType)
    }
});
SHM.register("dom.parseDOM", function(b) {
    return function(d) {
        for (var c in d) {
            d[c] && d[c].length == 1 && (d[c] = d[c][0])
        }
        return d
    }
});
SHM.register("dom.builder", function(a) {
    return function(q, p) {
        var o = typeof q == "string", d = q;
        if (o) {
            d = a.C("div");
            d.innerHTML = q
        }
        var n, b;
        b = a.dom.byAttr(d, "node-type");
        n = {};
        for (var m = 0, f = b.length; m < f; m += 1) {
            var e = b[m].getAttribute("node-type");
            n[e] || (n[e] = []);
            n[e].push(b[m])
        }
        var g = q;
        if (o) {
            g = a.C("buffer");
            while (d.childNodes[0]) {
                g.appendChild(d.childNodes[0])
            }
        }
        return {
            box: g,
            list: n
        }
    }
});
SHM.register("str.trim", function(a) {
    return function(b) {
        return b.replace(/(^[\s\u3000]*)|([\s\u3000]*$)/g, "")
    }
});
SHM.register("str.encodeDoubleByte", function(a) {
    return function(b) {
        if (typeof b != "string") {
            return b
        }
        return encodeURIComponent(b)
    }
});
SHM.register("str.encodeHTML", function(a) {
    return function(b) {
        if (typeof b != "string") {
            throw "encodeHTML need a string as parameter"
        }
        return b.replace(/\&/g, "&amp;").replace(/"/g, "&quot;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\'/g, "&#39;").replace(/\u00A0/g, "&nbsp;").replace(/(\u0020|\u000B|\u2028|\u2029|\f)/g, "&#32;")
    }
});
SHM.register("str.decodeHTML", function(a) {
    return function(b) {
        if (typeof b != "string") {
            throw "decodeHTML need a string as parameter"
        }
        return b.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#39/g, "'").replace(/&nbsp;/g, "?").replace(/&#32/g, " ").replace(/&amp;/g, "&")
    }
});
SHM.register("str.byteLength", function(a) {
    return function(c) {
        if (typeof c == "undefined") {
            return 0
        }
        var b = c.match(/[^\x00-\x80]/g);
        return (c.length + (!b ? 0 : b.length))
    }
});
SHM.register("arr.indexOf", function(a) {
    return function(d, e) {
        if (e.indexOf) {
            return e.indexOf(d)
        }
        var c = 0, b = e.length;
        while (c < b) {
            if (e[c] === d) {
                return c
            }
            c++
        }
        return - 1
    }
});
SHM.register("arr.inArray", function(a) {
    return function(b, c) {
        return a.arr.indexOf(b, c)>-1
    }
});
SHM.register("arr.foreach", function(a) {
    return function(g, d) {
        if (!a.arr.isArray(g)) {
            throw "the foreach function needs an array as first parameter"
        }
        var f = 0, c = g.length, e = [];
        while (f < c) {
            var b = d(g[f], f);
            if (b === false) {
                break
            }
            if (b !== null) {
                e[f] = b
            }
            f++
        }
        return e
    }
});
SHM.register("arr.isArray", function(a) {
    return function(b) {
        return Object.prototype.toString.call(b) === "[object Array]"
    }
});
SHM.register("json.jsonToQuery", function(a) {
    var b = function(d, c) {
        d = d == null ? "" : d;
        d = a.trim(d.toString());
        if (c) {
            return encodeURIComponent(d)
        } else {
            return d
        }
    };
    return function(g, e) {
        var h = [];
        if (typeof g == "object") {
            for (var d in g) {
                if (g[d] instanceof Array) {
                    for (var f = 0, c = g[d].length; f < c; f++) {
                        h.push(d + "=" + b(g[d][f], e))
                    }
                } else {
                    if (typeof g[d] != "function") {
                        h.push(d + "=" + b(g[d], e))
                    }
                }
            }
        }
        if (h.length) {
            return h.join("&")
        } else {
            return ""
        }
    }
});
SHM.register("json.queryToJson", function(a) {
    return function(c, g) {
        var f = a.str.trim(c).split("&");
        var d = {};
        var h = function(i) {
            if (g) {
                return decodeURIComponent(i)
            } else {
                return i
            }
        };
        for (var e = 0, b = f.length; e < b; e++) {
            if (f[e]) {
                _hsh = f[e].split("=");
                _key = _hsh[0];
                _value = _hsh[1];
                if (_hsh.length < 2) {
                    _value = _key;
                    _key = "$nullName"
                }
                if (!d[_key]) {
                    d[_key] = h(_value)
                } else {
                    if (a.arr.isArray(d[_key]) != true) {
                        d[_key] = [d[_key]]
                    }
                    d[_key].push(h(_value))
                }
            }
        }
        return d
    }
});
SHM.register("evt.addEvent", function(a) {
    return function(g, e, d, b) {
        var f = a.dom.byId(g);
        if (f == null) {
            throw new Error("addEvent 找不到对象：" + g);
            return 
        }
        if (typeof b == "undefined") {
            b = false
        }
        if (typeof e == "undefined") {
            e = "click"
        }
        if (f.addEventListener) {
            f.addEventListener(e, d, b);
            return true
        } else {
            if (f.attachEvent) {
                var c = f.attachEvent("on" + e, d);
                return true
            } else {
                f["on" + e] = d
            }
        }
    }
});
SHM.register("evt.removeEvent", function(a) {
    return function(b, d, c) {
        var e = a.dom.byId(b);
        if (e == null) {
            throw ("removeEvent 找不到对象：" + b);
            return 
        }
        if (typeof c != "function") {
            return 
        }
        if (typeof d == "undefined") {
            d = "click"
        }
        if (e.addEventListener) {
            e.removeEventListener(d, c, false)
        } else {
            if (e.attachEvent) {
                e.detachEvent("on" + d, c)
            }
        }
        c[d] = null
    }
});
SHM.register("evt.fixEvent", function(a) {
    return fixEvent = function(b) {
        if (typeof b == "undefined") {
            b = window.event
        }
        if (!b.target) {
            b.target = b.srcElement;
            b.pageX = b.x;
            b.pageY = b.y
        }
        if (typeof b.layerX == "undefined") {
            b.layerX = b.offsetX
        }
        if (typeof b.layerY == "undefined") {
            b.layerY = b.offsetY
        }
        return b
    }
});
SHM.register("evt.preventDefault", function(a) {
    return function(b) {
        var b = b || window.event;
        if ($globalInfo.ua.isIE) {
            b.returnValue = false
        } else {
            b.preventDefault()
        }
    }
});
SHM.register("dom.byId", function(a) {
    return function(b) {
        if (typeof b === "string") {
            return document.getElementById(b)
        } else {
            return b
        }
    }
});
SHM.register("util.browser", function(w) {
    var v = navigator.userAgent.toLowerCase(), u = window.external || "", t, s, r, q, p, o = function(d) {
        var c = 0;
        return parseFloat(d.replace(/\./g, function() {
            return c++==1 ? "" : "."
        }))
    };
    try {
        /windows|win32/i.test(v) ? p = "windows" : /macintosh/i.test(v) ? p = "macintosh" : /rhino/i.test(v) && (p = "rhino");
        if ((s = v.match(/applewebkit\/([^\s]*)/)) && s[1]) {
            t = "webkit";
            q = o(s[1])
        } else {
            if ((s = v.match(/presto\/([\d.]*)/)) && s[1]) {
                t = "presto";
                q = o(s[1])
            } else {
                if (s = v.match(/msie\s([^;]*)/)) {
                    t = "trident";
                    q = 1;
                    (s = v.match(/trident\/([\d.]*)/)) && s[1] && (q = o(s[1]))
                } else {
                    if (/gecko/.test(v)) {
                        t = "gecko";
                        q = 1;
                        (s = v.match(/rv:([\d.]*)/)) && s[1] && (q = o(s[1]))
                    }
                }
            }
        }
        /world/.test(v) ? r = "world" : /360se/.test(v) ? r = "360" : /maxthon/.test(v) || typeof u.max_version == "number" ? r = "maxthon" : /tencenttraveler\s([\d.]*)/.test(v) ? r = "tt" : /se\s([\d.]*)/.test(v) && (r = "sogou")
    } catch (n) {}
    var m = {
        OS: p,
        CORE: t,
        Version: q,
        EXTRA: r ? r: !1,
        IE: /msie/.test(v),
        OPERA: /opera/.test(v),
        MOZ: /gecko/.test(v)&&!/(compatible|webkit)/.test(v),
        IE5: /msie 5 /.test(v),
        IE55: /msie 5.5/.test(v),
        IE6: /msie 6/.test(v),
        IE7: /msie 7/.test(v),
        IE8: /msie 8/.test(v),
        IE9: /msie 9/.test(v),
        SAFARI: !/chrome\/([\d.]*)/.test(v) && /\/([\d.]*) safari/.test(v),
        CHROME: /chrome\/([\d.]*)/.test(v),
        IPAD: /\(ipad/i.test(v),
        IPHONE: /\(iphone/i.test(v),
        ITOUCH: /\(itouch/i.test(v),
        MOBILE: /mobile/i.test(v)
    };
    return m
});
SHM.register("dom.position", function(d) {
    var a = function(i) {
        var q, p, o, n, m, j;
        q = i.getBoundingClientRect();
        p = d.dom.scrollPos();
        o = i.ownerDocument.body;
        n = i.ownerDocument.documentElement;
        m = n.clientTop || o.clientTop || 0;
        j = n.clientLeft || o.clientLeft || 0;
        return {
            l: parseInt(q.left + p.left - j, 10) || 0,
            t: parseInt(q.top + p.top - m, 10) || 0
        }
    }, e = function(f, h) {
        var g;
        g = [f.offsetLeft, f.offsetTop];
        parent = f.offsetParent;
        if (parent !== f && parent !== h) {
            while (parent) {
                g[0] += parent.offsetLeft;
                g[1] += parent.offsetTop;
                parent = parent.offsetParent
            }
        }
        if (d.util.browser.OPERA!=-1 || d.util.browser.SAFARI!=-1 && f.style.position == "absolute") {
            g[0] -= document.body.offsetLeft;
            g[1] -= document.body.offsetTop
        }
        f.parentNode ? parent = f.parentNode : parent = null;
        while (parent&&!/^body|html$/i.test(parent.tagName) && parent !== h) {
            if (parent.style.display.search(/^inline|table-row.*$/i)) {
                g[0] -= parent.scrollLeft;
                g[1] -= parent.scrollTop
            }
            parent = parent.parentNode
        }
        return {
            l: parseInt(g[0], 10),
            t: parseInt(g[1], 10)
        }
    };
    return function(m, j) {
        if (m == document.body) {
            return !1
        }
        if (m.parentNode == null) {
            return !1
        }
        if (m.style.display == "none") {
            return !1
        }
        var i = d.obj.parseParam({
            parent: null
        }, j);
        if (m.getBoundingClientRect) {
            if (i.parent) {
                var c = a(m), b = a(i.parent);
                return {
                    l: c.l - b.l,
                    t: c.t - b.t
                }
            }
            return a(m)
        }
        return e(m, i.parent || document.body)
    }
});
SHM.register("dom.byClass", function(a) {
    return function(h, d, c) {
        d = d || document;
        d = typeof d == "string" ? a.dom.byId(d) : d;
        c = c || "*";
        var e = [];
        h = " " + h + " ";
        var m = d.getElementsByTagName(c), g = m.length;
        for (var f = 0; f < g; ++f) {
            var b = m[f];
            if (b.nodeType == 1) {
                var j = " " + b.className + " ";
                if (j.indexOf(h)!=-1) {
                    e[e.length] = b
                }
            }
        }
        return e
    }
});
SHM.register("dom.byAttr", function(a) {
    return function(g, c, h) {
        var d = [];
        h = h || "";
        for (var f = 0, b = g.childNodes.length; f < b; f++) {
            if (g.childNodes[f].nodeType == 1) {
                var e = false;
                if (h) {
                    e = (g.childNodes[f].getAttribute(c) == h)
                } else {
                    e = (g.childNodes[f].getAttribute(c) != "")
                }
                if (e) {
                    d.push(g.childNodes[f])
                }
                if (g.childNodes[f].childNodes.length > 0) {
                    d = d.concat(arguments.callee.call(null, g.childNodes[f], c, h))
                }
            }
        }
        return d
    }
});
SHM.register("dom.contains", function(a) {
    return function(b, c) {
        if (b.compareDocumentPosition) {
            return b === c||!!(b.compareDocumentPosition(c) & 16)
        }
        if (b.contains && c.nodeType === 1) {
            return b.contains(c) && b !== c
        }
        while ((c = c.parentNode)) {
            if (c === b) {
                return true
            }
        }
        return false
    }
});
SHM.register("evt.custEvent", function(c) {
    var a = "__custEventKey__", d = 1, e = {}, b = function(h, g) {
        var f = (typeof h == "number") ? h: h[a];
        return (f && e[f]) && {
            obj: (typeof g == "string" ? e[f][g] : e[f]),
            key: f
        }
    };
    return {
        define: function(m, h) {
            if (m && h) {
                var g = (typeof m == "number") ? m: m[a] || (m[a] = d++), j = e[g] || (e[g] = {});
                h = [].concat(h);
                for (var f = 0; f < h.length; f++) {
                    j[h[f]] || (j[h[f]] = [])
                }
                return g
            }
        },
        undefine: function(h, g) {
            if (h) {
                var f = (typeof h == "number") ? h: h[a];
                if (f && e[f]) {
                    if (typeof g == "string") {
                        if (g in e[f]) {
                            delete e[f][g]
                        }
                    } else {
                        delete e[f]
                    }
                }
            }
        },
        add: function(j, g, f, h) {
            if (j && typeof g == "string" && f) {
                var i = b(j, g);
                if (!i ||!i.obj) {
                    throw "custEvent (" + g + ") is undefined !"
                }
                i.obj.push({
                    fn: f,
                    data: h
                });
                return i.key
            }
        },
        remove: function(m, h, g) {
            if (m) {
                var j = b(m, h), n;
                if (j && (n = j.obj)) {
                    if (c.arr.isArray(n)) {
                        if (g) {
                            for (var f = 0; f < n.length && n[f].fn !== g; f++) {}
                            n.splice(f, 1)
                        } else {
                            n.splice(0)
                        }
                    } else {
                        for (var f in n) {
                            n[f] = []
                        }
                    }
                    return j.key
                }
            }
        },
        fire: function(n, j, f) {
            if (n && typeof j == "string") {
                var m = b(n, j), o;
                if (m && (o = m.obj)) {
                    if (!c.arr.isArray(f)) {
                        f = f != undefined ? [f] : []
                    }
                    for (var g = 0; g < o.length; g++) {
                        var h = o[g].fn;
                        if (h && h.apply) {
                            h.apply(c, [{
                                type: j,
                                data: o[g].data
                            }
                            ].concat(f))
                        }
                    }
                    return m.key
                }
            }
        },
        destroy: function() {
            e = {};
            d = 1
        }
    }
});
SHM.register("evt.getEvent", function(a) {
    return function() {
        return document.addEventListener ? function() {
            var c = arguments.callee, b;
            do {
                b = c.arguments[0];
                if (b && (b.constructor == Event || b.constructor == MouseEvent || b.constructor == KeyboardEvent)) {
                    return b
                }
            }
            while (c = c.caller);
            return b
        } : function(d, b, e) {
            return window.event
        }
    }()
});
SHM.register("evt.delegatedEvent", function(b) {
    var a = function(f, e) {
        for (var d = 0, c = f.length; d < c; d += 1) {
            if (b.dom.contains(f[d], e)) {
                return true
            }
        }
        return false
    };
    return function(e, h, d) {
        if (!b.dom.isNode(e)) {
            throw "SHM.evt.delegatedEvent need an Element as first Parameter"
        }
        if (!h) {
            h = []
        }
        if (b.arr.isArray(h)) {
            h = [h]
        }
        var c = {};
        var d = d || "action-type";
        var g = function(p) {
            var j = b.evt.fixEvent(p);
            var o = j.target;
            var n = p.type;
            if (a(h, o)) {
                return false
            } else {
                if (!b.dom.contains(e, o)) {
                    return false
                } else {
                    var m = null;
                    var i = function() {
                        if (c[n] && c[n][m]) {
                            return c[n][m]({
                                evt: j,
                                el: o,
                                e: p,
                                data: b.json.queryToJson(o.getAttribute("action-data") || "")
                            })
                        } else {
                            return true
                        }
                    };
                    while (o && o !== e) {
                        if (!o.getAttribute) {
                            break
                        }
                        m = o.getAttribute(d);
                        if (i() === false) {
                            break
                        }
                        o = o.parentNode
                    }
                }
            }
        };
        var f = {};
        f.add = function(m, n, j) {
            if (!c[n]) {
                c[n] = {};
                b.evt.addEvent(e, n, g)
            }
            var i = c[n];
            i[m] = j
        };
        f.remove = function(i, j) {
            if (c[j]) {
                delete c[j][i];
                if (b.objIsEmpty(c[j])) {
                    delete c[j];
                    b.evt.removeEvent(e, g, j)
                }
            }
        };
        f.pushExcept = function(i) {
            h.push(i)
        };
        f.removeExcept = function(n) {
            if (!n) {
                h = []
            } else {
                for (var m = 0, j = h.length; m < j; m += 1) {
                    if (h[m] === n) {
                        h.splice(m, 1)
                    }
                }
            }
        };
        f.clearExcept = function(i) {
            h = []
        };
        f.destroy = function() {
            for (k in c) {
                for (l in c[k]) {
                    delete c[k][l]
                }
                delete c[k];
                b.evt.removeEvent(e, g, k)
            }
        };
        return f
    }
});
SHM.register("fun.bind2", function(a) {
    Function.prototype.bind2 = function(c) {
        var b = this;
        return function() {
            return b.apply(c, arguments)
        }
    };
    return function(d, c) {
        var b = d;
        return function() {
            return b.apply(c, arguments)
        }
    }
});
SHM.register("io.jsonp", function($) {
    return function(url, params, cb, fix) {
        var head = document.getElementsByTagName("head")[0];
        var idStr = url + "&" + params;
        var ojs = $.dom.byId(idStr);
        ojs && head.removeChild(ojs);
        var fun = "";
        var js = $.C("script");
        fix = fix || false;
        if (fix) {
            if (typeof cb == "string") {
                fun = cb
            }
        } else {
            url = url + ((url.indexOf("?")==-1) ? "?" : "&") + "_t=" + Math.random();
            if (typeof cb == "function") {
                fun = "fun_" + new Date().getUTCMilliseconds() + ("" + Math.random()).substring(3);
                eval(fun + "=function(res){cb(res)}")
            }
        }
        url = url + "&callback=" + fun;
        url = url + "&" + params;
        js.src = url;
        js.id = idStr;
        js.type = "text/javascript";
        js.language = "javascript";
        head.appendChild(js)
    }
});
SHM.register("io.getScript", function(b) {
    return function a(i) {
        if (!i ||!i.url) {
            return 
        }
        var d = i.url, g = i.charset || "", m = (i.timeout || 60000) - 0, e = null, c = i.ontimeout, f = i.oncomplete, n = i.onsuccess, h = i.onfailure, j = i.onerror;
        var o = document.createElement("script");
        if (isFinite(m)) {
            e = setTimeout(function() {
                o.onerror = o.onload = o.onreadystatechange = null;
                o.parentNode.removeChild(o);
                o = null;
                e = null;
                if (typeof c === "function") {
                    c()
                }
                if (typeof h === "function") {
                    h("timeout")
                }
            }, m)
        }
        o.onerror = function() {
            o.onload = o.onreadystatechange = null;
            o.parentNode.removeChild(o);
            o = null;
            e && clearTimeout(e);
            e = null;
            if (typeof j === "function") {
                j()
            }
            if (typeof h === "function") {
                h("error")
            }
        };
        o.onload = o.onreadystatechange = function() {
            var p = this.readyState;
            if (!p || p === "complete" || p === "loaded") {
                o.onerror = o.onload = o.onreadystatechange = null;
                o.parentNode.removeChild(o);
                o = null;
                e && clearTimeout(e);
                e = null;
                if (typeof f === "function") {
                    f()
                }
                if (typeof n === "function") {
                    n()
                }
            }
        };
        o.setAttribute("src", d);
        o.setAttribute("charset", g);
        document.getElementsByTagName("head")[0].appendChild(o)
    }
});
SHM.register("io.ajax", function($) {
    return {
        createRequest: function() {
            var request = null;
            try {
                request = new XMLHttpRequest()
            } catch (trymicrosoft) {
                try {
                    request = new ActiveXObject("Msxml2.XMLHTTP")
                } catch (othermicrosoft) {
                    try {
                        request = ActiveXObject("Microsoft.XMLHTTP")
                    } catch (failed) {}
                }
            }
            if (request == null) {
                throw ("<b>create request failed</b>", {
                    html: true
                })
            } else {
                return request
            }
        },
        request: function(url, option) {
            option = option || {};
            option.onComplete = option.onComplete || function() {};
            option.onException = option.onException || function() {};
            option.onTimeout = option.onTimeout || function() {};
            option.timeout = option.timeout ? option.timeout : - 1;
            option.returnType = option.returnType || "txt";
            option.method = option.method || "get";
            option.data = option.data || {};
            if (typeof option.GET != "undefined" && typeof option.GET.url_random != "undefined" && option.GET.url_random == 0) {
                this.rand = false;
                option.GET.url_random = null
            }
            this.loadData(url, option)
        },
        loadData: function(url, option) {
            var request = this.createRequest(), tmpArr = [];
            var _url = new $.util.url(url);
            var timer;
            if (option.POST) {
                for (var postkey in option.POST) {
                    var postvalue = option.POST[postkey];
                    if (postvalue != null) {
                        tmpArr.push(postkey + "=" + $.str.encodeDoubleByte(postvalue))
                    }
                }
            }
            var sParameter = tmpArr.join("&") || "";
            if (option.GET) {
                for (var key in option.GET) {
                    if (key != "url_random") {
                        _url.setParam(key, $.str.encodeDoubleByte(option.GET[key]))
                    }
                }
            }
            if (this.rand != false) {
                _url.setParam("rnd", Math.random())
            }
            if (option.timeout>-1) {
                timer = setTimeout(option.onTimeout, option.timeout)
            }
            request.onreadystatechange = function() {
                if (request.readyState == 4) {
                    var response, type = option.returnType;
                    try {
                        switch (type) {
                        case"txt":
                            response = request.responseText;
                            break;
                        case"xml":
                            if (Core.Base.detect.$IE) {
                                response = request.responseXML
                            } else {
                                var Dparser = new DOMParser();
                                response = Dparser.parseFromString(request.responseText, "text/xml")
                            }
                            break;
                        case"json":
                            response = eval("(" + request.responseText + ")");
                            break
                        }
                        option.onComplete(response);
                        clearTimeout(timer)
                    } catch (e) {
                        option.onException(e.message, _url);
                        return false
                    }
                }
            };
            try {
                if (option.POST) {
                    request.open("POST", _url, true);
                    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    request.send(sParameter)
                } else {
                    request.open("GET", _url, true);
                    request.send(null)
                }
            } catch (e) {
                option.onException(e.message, _url);
                return false
            }
        }
    }
});
SHM.register("io.ijax", function(a) {
    return {
        arrTaskLists: [],
        createLoadingIframe: function() {
            if (this.loadFrames != null) {
                return false
            }
            var e = "loadingIframe_thread" + Math.ceil(Math.random() * 10000);
            var d = "loadingIframe_thread" + Math.ceil((Math.random() + 1) * 10000);
            this.loadFrames = [e, d];
            var g = "";
            if ($globalInfo.ua.isIE6) {
                g = "javascript:void((function(){document.open();document.domain='sina.com.cn';document.close()})())"
            }
            var c = '<iframe id="' + e + '" name="' + e + '" class="invisible"			              scrolling="no" src=""			              allowTransparency="true" style="display:none;" frameborder="0"			              ></iframe>						  <iframe id="' + d + '" name="' + d + '" class="invisible"			              scrolling="no" src="' + g + '"			              allowTransparency="true" style="display:none;" frameborder="0"			              ></iframe>';
            var b = a.C("div");
            b.id = "ijax_iframes";
            b.innerHTML = c;
            document.body.appendChild(b);
            var f = setInterval(a.fun.bind2(function() {
                if (a.E(this.loadFrames[0]) != null && a.E(this.loadFrames[1]) != null) {
                    clearInterval(f);
                    f = null;
                    this.loadingIframe = {
                        thread1: {
                            container: a.E(this.loadFrames[0]),
                            isBusy: false
                        },
                        thread2: {
                            container: a.E(this.loadFrames[1]),
                            isBusy: false
                        }
                    };
                    this.loadByList()
                }
            }, this), 10)
        },
        isIjaxReady: function() {
            if (typeof this.loadingIframe == "undefined") {
                return false
            }
            for (var b in this.loadingIframe) {
                if (this.loadingIframe[b].isBusy == false) {
                    this.loadingIframe[b].isBusy = true;
                    return this.loadingIframe[b]
                }
            }
            return false
        },
        request: function(b, d) {
            var c = {};
            c.url = b;
            c.option = d || {};
            this.arrTaskLists.push(c);
            if (this.loadFrames == null) {
                this.createLoadingIframe()
            } else {
                this.loadByList()
            }
        },
        loadByList: function() {
            if (this.arrTaskLists.length == 0) {
                return false
            }
            var b = this.isIjaxReady();
            if (b == false) {
                return false
            }
            var c = this.arrTaskLists[0];
            this.loadData(c.url, c.option, b);
            this.arrTaskLists.shift()
        },
        loadData: function(c, f, m) {
            var d = new a.util.url(c);
            if (f.GET) {
                for (var n in f.GET) {
                    d.setParam(n, Core.String.encodeDoubleByte(f.GET[n]))
                }
            }
            d = d.toString();
            var i = m.container;
            i.listener = a.fun.bind2(function() {
                if (f.onComplete || f.onException) {
                    try {
                        var o = i.contentWindow.document, p;
                        var q = o.getElementsByTagName("textarea")[0];
                        if (typeof q != "undefined") {
                            p = q.value
                        } else {
                            p = o.body.innerHTML
                        }
                        if (f.onComplete) {
                            f.onComplete(p)
                        } else {
                            f.onException()
                        }
                    } catch (r) {
                        if (f.onException) {
                            f.onException(r.message, d.toString())
                        }
                    }
                }
                m.isBusy = false;
                a.evt.removeEvent(i, "load", i.listener);
                this.loadByList()
            }, this);
            a.evt.addEvent(i, "load", i.listener);
            if (f.POST) {
                var b = a.C("form");
                b.id = "IjaxForm";
                b.action = d;
                b.method = "post";
                b.target = i.id;
                for (var j in f.POST) {
                    var h = a.C("input");
                    h.type = "hidden";
                    h.name = j;
                    h.value = f.POST[j];
                    b.appendChild(h)
                }
                document.body.appendChild(b);
                try {
                    b.submit()
                } catch (g) {}
            } else {
                try {
                    window.frames(i.id).location.href = d
                } catch (g) {
                    i.src = d
                }
            }
        }
    }
});
SHM.register("io.jsload", function(a) {
    JsLoad = {};
    (function() {
        function b(m, g) {
            c(m, g);
            var j = m.urls;
            var f, e = j.length;
            for (f = 0; f < e; f++) {
                var h = a.C("script");
                h.src = j[f].url;
                h[document.all ? "onreadystatechange": "onload"] = function() {
                    if (/gecko/.test(navigator.userAgent.toLowerCase()) || this.readyState.toLowerCase() == "complete" || this.readyState.toLowerCase() == "loaded") {
                        g.script_loaded_num++
                    }
                };
                document.getElementsByTagName("head")[0].appendChild(h)
            }
        }
        function c(p, h) {
            var n = p.urls;
            var r = p.GET;
            var j, m = n.length;
            var q, f, e, o, g;
            for (j = 0; j < m; j++) {
                g = parseInt(Math.random() * 100000000);
                f = new a.util.url(n[j].url);
                e = f.getParam("varname") || "requestId_" + g;
                if (p.noreturn != true) {
                    f.setParam("varname", e)
                }
                h.script_var_arr.push(e);
                for (q in r) {
                    if (p.noencode == true) {
                        f.setParam(q, r[q])
                    } else {
                        f.setParam(q, a.str.encodeDoubleByte(r[q]))
                    }
                }
                n[j].url = f.toString();
                n[j].charset = n[j].charset || p.charset
            }
        }
        function d(g, h) {
            var f = {
                urls: [],
                charset: "utf-8",
                noreturn: false,
                noencode: true,
                timeout: - 1,
                POST: {},
                GET: {},
                onComplete: null,
                onException: null
            };
            var e = {
                script_loaded_num: 0,
                is_timeout: false,
                is_loadcomplete: false,
                script_var_arr: []
            };
            f.urls = typeof g == "string" ? [{
                url: g
            }
            ] : g;
            a.util.parseParam(f, h);
            b(f, e);
            (function() {
                if (f.noreturn == true && f.onComplete == null) {
                    return 
                }
                var j, m = [];
                if (e.script_loaded_num == f.urls.length) {
                    e.is_loadcomplete = true;
                    if (f.onComplete != null) {
                        for (j = 0; j < e.script_var_arr.length; j++) {
                            m.push(window[e.script_var_arr[j]])
                        }
                        if (e.script_var_arr.length < 2) {
                            f.onComplete(m[0])
                        } else {
                            f.onComplete(m)
                        }
                    }
                    return 
                }
                if (e.is_timeout == true) {
                    return 
                }
                setTimeout(arguments.callee, 50)
            })();
            if (f.timeout > 0) {
                setTimeout(function() {
                    if (e.is_loadcomplete != true) {
                        if (f.onException != null) {
                            f.onException()
                        }
                        e.is_timeout = true
                    }
                }, f.timeout)
            }
        }
        JsLoad.request = function(e, f) {
            new d(e, f)
        }
    })();
    return JsLoad
});
SHM.register("util.hideContainer", function(d) {
    var a, c = function() {
        if (!a) {
            a = d.C("div");
            a.style.cssText = "position:absolute;top:-9999px;left:-9999px;";
            document.getElementsByTagName("head")[0].appendChild(a)
        }
    }, b = {
        appendChild: function(e) {
            if (d.dom.isNode(e)) {
                c();
                a.appendChild(e)
            }
        },
        removeChild: function(e) {
            d.dom.isNode(e) && a && a.removeChild(e)
        }
    };
    return b
});
SHM.register("io.cssLoader", function(b) {
    var a = {};
    return function(d, e, g) {
        g = g || function() {};
        var c = function(o, n) {
            var p = a[o] || (a[o] = {
                loaded: false,
                list: []
            });
            if (p.loaded) {
                n(o);
                return false
            }
            p.list.push(n);
            return p.list.length > 1 ? false : true
        }, i = function(n) {
            var p = a[n].list;
            for (var o = 0; o < p.length; o++) {
                p[o](n)
            }
            a[n].loaded = true;
            delete a[n].list
        };
        if (c(d, g)) {
            var m = b.C("link");
            m.setAttribute("rel", "Stylesheet");
            m.setAttribute("type", "text/css");
            m.setAttribute("charset", "utf-8");
            m.setAttribute("href", d);
            document.getElementsByTagName("head")[0].appendChild(m);
            var f = b.C("div");
            f.id = e;
            b.util.hideContainer.appendChild(f);
            var j = 3000, h = function() {
                if (parseInt(b.dom.getStyle(f, "height")) == 42) {
                    b.util.hideContainer.removeChild(f);
                    i(d)
                } else {
                    if (--j > 0) {
                        setTimeout(h, 10)
                    } else {
                        b.util.hideContainer.removeChild(f);
                        delete a[d]
                    }
                }
            };
            setTimeout(h, 50)
        }
    }
});
SHM.register("io.html5Ijax", function(f) {
    var g = f.evt.addEvent, d = f.evt.removeEvent, b = function() {}, e = /^http\s?\:\/\/[a-z\d\-\.]+/i, c = "ijax-html5-iframe-", a = function(h) {
        h = h || {};
        this.init(h)
    };
    a.prototype = {
        ready: false,
        init: function(o) {
            if (this.ready) {
                return 
            }
            var s = this, p, q, j, m, h, r = o.proxyUrl, n = {};
            s.onsuccess = o.onsuccess || b;
            s.onfailure = o.onfailure || b;
            if (!r) {
                return 
            }
            h = function(u) {
                if (!s.ready || u.origin !== s.target) {
                    s.destroy();
                    return 
                }
                var t = u.data;
                if (!t || t === "failure") {
                    s.destroy();
                    s.onfailure && s.onfailure()
                } else {
                    s.onsuccess && s.onsuccess(u.data);
                    s.destroy()
                }
            };
            g(window, "message", h);
            p = c + Date.parse(new Date());
            q = '<iframe id="' + p + '" name="' + p + '" src="' + r + '" frameborder="0" style="width:0;height:0;display:none;"></iframe>';
            var i = f.C("div");
            i.id = c + "iframes";
            i.innerHTML = q;
            j = i.childNodes[0];
            m = function() {
                s.ready = true;
                var u = j.src, t = u.match(e);
                s.target = (t && t[0]) || "*"
            };
            g(j, "load", m);
            document.body.insertBefore(j, document.body.firstChild);
            s._iframe = j;
            s._iframeLoaded = m;
            s._receiver = h
        },
        send: function(i) {
            i = i || {};
            var j = this, m = i.url, o = i.data, h = i.onsuccess, n = i.onfailure;
            if (!m || typeof m !== "string") {
                return 
            }
            if (h) {
                j.onsuccess = h
            }
            if (n) {
                j.onfailure = n
            }
            if (!j.ready) {
                setTimeout(function() {
                    j.send(i)
                }, 50);
                return 
            }
            if (o) {
                o += "&_url=" + window.encodeURIComponent(m)
            } else {
                o = "_url=" + window.encodeURIComponent(m)
            }
            j._iframe.contentWindow.postMessage(o, j.target)
        },
        destroy: function() {
            var h = this._iframe;
            d(h, "load", this._iframeLoaded);
            h.parentNode.removeChild(h);
            d(window, "message", this._receiver);
            this._iframe = null;
            this._iframeLoaded = null;
            this._receiver = null
        }
    };
    return a
});
SHM.register("clz.extend", function(a) {
    return function(e, d, b) {
        for (var c in d) {
            e[c] = d[c]
        }
        return e
    }
});
SHM.register("util.cookie", function(a) {
    var b = {};
    b.getCookie = function(c) {
        c = c.replace(/([\.\[\]\$])/g, "\\$1");
        var e = new RegExp(c + "=([^;]*)?;", "i");
        var f = document.cookie + ";";
        var d = f.match(e);
        if (d) {
            return unescape(d[1]) || ""
        } else {
            return ""
        }
    };
    b.setCookie = function(d, h, e, m, g, c) {
        var i = [];
        i.push(d + "=" + escape(h));
        if (e) {
            var j = new Date();
            var f = j.getTime() + e * 3600000;
            j.setTime(f);
            i.push("expires=" + j.toGMTString())
        }
        if (m) {
            i.push("path=" + m)
        }
        if (g) {
            i.push("domain=" + g)
        }
        if (c) {
            i.push(c)
        }
        document.cookie = i.join(";")
    };
    b.deleteCookie = function(c) {
        document.cookie = c + "=;expires=Fri, 31 Dec 1999 23:59:59 GMT;"
    };
    return b
});
SHM.register("util.parseParam", function(a) {
    return function(c, b) {
        var d;
        try {
            if (typeof b != "undefined") {
                for (d in c) {
                    if (b[d] != null) {
                        c[d] = b[d]
                    }
                }
            }
        } finally {
            d = null;
            return c
        }
    }
});
SHM.register("util.byteLength", function(a) {
    return function(c) {
        if (typeof c == "undefined") {
            return 0
        }
        var b = c.match(/[^\x00-\x80]/g);
        return (c.length + (!b ? 0 : b.length))
    }
});
SHM.register("util.url", function(a) {
    Url = function(b) {
        b = b || "";
        this.url = b;
        this.query = {};
        this.parse()
    };
    Url.prototype = {
        parse: function(b) {
            if (b) {
                this.url = b
            }
            this.parseAnchor();
            this.parseParam()
        },
        parseAnchor: function() {
            var b = this.url.match(/\#(.*)/);
            b = b ? b[1] : null;
            this._anchor = b;
            if (b != null) {
                this.anchor = this.getNameValuePair(b);
                this.url = this.url.replace(/\#.*/, "")
            }
        },
        parseParam: function() {
            var b = this.url.match(/\?([^\?]*)/);
            b = b ? b[1] : null;
            if (b != null) {
                this.url = this.url.replace(/\?([^\?]*)/, "");
                this.query = this.getNameValuePair(b)
            }
        },
        getNameValuePair: function(c) {
            var b = {};
            c.replace(/([^&=]*)(?:\=([^&]*))?/gim, function(d, f, e) {
                if (f == "") {
                    return 
                }
                b[f] = e || ""
            });
            return b
        },
        getParam: function(b) {
            return this.query[b] || ""
        },
        clearParam: function() {
            this.query = {}
        },
        setParam: function(b, c) {
            if (b == null || b == "" || typeof(b) != "string") {
                throw new Error("no param name set")
            }
            this.query = this.query || {};
            this.query[b] = c
        },
        setParams: function(b) {
            this.query = b
        },
        serialize: function(d) {
            var b = [];
            for (var c in d) {
                if (d[c] == null || d[c] == "") {
                    b.push(c + "=")
                } else {
                    b.push(c + "=" + d[c])
                }
            }
            return b.join("&")
        },
        toString: function() {
            var b = this.serialize(this.query);
            return this.url + (b.length > 0 ? "?" + b : "") + (this.anchor ? "#" + this.serialize(this.anchor) : "")
        },
        getHashStr: function(b) {
            return this.anchor ? "#" + this.serialize(this.anchor) : (b ? "#" : "")
        }
    };
    return Url
});
SHM.register("util.template", function(a) {
    return function(c, d, b) {
        return c.replace(/#\{(.+?)\}/ig, function() {
            var h = arguments[1].replace(/\s/ig, "");
            var f = arguments[0];
            var j = h.split("||");
            for (var g = 0, e = j.length; g < e; g += 1) {
                if (/^default:.*$/.test(j[g])) {
                    f = b ? decodeURIComponent(j[g].replace(/^default:/, "")) : j[g].replace(/^default:/, "");
                    break
                } else {
                    if (d[j[g]] !== undefined) {
                        f = b ? decodeURIComponent(d[j[g]]) : d[j[g]];
                        break
                    }
                }
            }
            return f
        })
    }
});
SHM.register("app.log", function(b) {
    var a = false;
    return function() {
        if (!a) {
            return 
        }
        if (typeof console == "undefined") {
            return 
        }
        var f = Array.prototype.slice;
        var c = f.call(arguments, 0);
        c.unshift("* SHM.app.log >>>>>>");
        try {
            console.log.apply(console, c)
        } catch (d) {
            console.log(c)
        }
    }
});
SHM.register("app.strLeft", function(a) {
    return function(o, b) {
        var m = "...";
        var h = o.slice(0, b), e = h.replace(/[^\x00-\xff]/g, "**").length, d = o.length, c = h.length;
        if (e < b) {
            return h
        } else {
            if (e == b) {
                if (b == d || c == d) {
                    return h
                } else {
                    return o.slice(0, b - 2) + m
                }
            }
        }
        e -= h.length;
        switch (e) {
        case 0:
            return h;
        case b:
            var f;
            if (b == d) {
                f = o.slice(0, (b>>1) - 1);
                return f + m
            } else {
                f = o.slice(0, b>>1);
                return f
            }
        default:
            var c = b - e, g = o.slice(c, b), d = g.replace(/[\x00-\xff]/g, "").length;
            return d ? o.slice(0, c) + arguments.callee(g, d) : o.slice(0, c)
        }
    }
});
SHM.register("app.strLeft2", function(a) {
    var b = a.util.byteLength;
    return function(e, c) {
        var d = e.replace(/\*/g, " ").replace(/[^\x00-\xff]/g, "**");
        e = e.slice(0, d.slice(0, c).replace(/\*\*/g, " ").replace(/\*/g, "").length);
        if (b(e) > c) {
            e = e.slice(0, e.length - 1)
        }
        return e
    }
});
SHM.register("app.splitNum", function(a) {
    return function(b) {
        b = b + "";
        var c = /(-?\d+)(\d{3})/;
        while (c.test(b)) {
            b = b.replace(c, "$1,$2")
        }
        return b
    }
});
SHM.register("app.placeholder", function(a) {
    $globalInfo.supportPlaceholder = "placeholder" in document.createElement("input");
    return function(b) {
        function e(g) {
            if (!g || $globalInfo.supportPlaceholder) {
                return 
            }
            var f = g.getAttribute("hasPlaceholder") || 0;
            if (f == "1") {
                return 
            }
            var n = function() {
                defaultValue = g.defaultValue;
                a.dom.addClass(g, "gray");
                g.value = j;
                g.onfocus = function() {
                    if (g.value === defaultValue || g.value === j) {
                        this.value = "";
                        a.dom.removeClass(g, "gray")
                    }
                };
                g.onblur = function() {
                    if (g.value === "") {
                        this.value = j;
                        a.dom.addClass(g, "gray")
                    }
                }
            };
            var m = function() {
                var o = a.C("input");
                o.type = "text";
                o.className = "pwd_placeholder gray " + g.className;
                o.value = j;
                o.autocomplete = "off";
                g.style.display = "none";
                g.parentNode.appendChild(o);
                o.onfocus = function() {
                    o.style.display = "none";
                    g.style.display = "";
                    g.focus()
                };
                g.onblur = function() {
                    if (g.value === "") {
                        o.style.display = "";
                        g.style.display = "none"
                    }
                }
            };
            var j = g.getAttribute("placeholder");
            if (!j) {
                if (g.attributes && g.attributes.placeholder) {
                    j = g.attributes.placeholder.value
                }
            }
            var h = g.tagName;
            if (h == "INPUT") {
                var i = g.type;
                if (i == "password" && j) {
                    m()
                } else {
                    if (i == "text" && j) {
                        n()
                    }
                }
            } else {
                if (h == "TEXTAREA") {
                    n()
                }
            }
            g.setAttribute("hasPlaceholder", "1")
        }
        for (var d = b.length - 1; d >= 0; d--) {
            var c = b[d];
            e(c)
        }
    }
});
SHM.register("app.uaTrack", function(b) {
    var a = "index_new_";
    window.SHMUATrack = function(d, g, c) {
        if (typeof _S_uaTrack == "function") {
            c = c || true;
            var d = c ? a + d: d;
            try {
                _S_uaTrack(d, g)
            } catch (f) {}
        }
    };
    return SHMUATrack
});
SHM.register("app.simSelect", function(d) {
    var a = d.dom.byId, c = d.evt.addEvent, f = d.evt.removeEvent, b = d.app.uaTrack;
    var e = function(r, n) {
        r = a(r);
        r.style.display = "none";
        var q = r.options, p = r.parentNode, j = this;
        j.more = n;
        j.isShow = false;
        j.div = d.C("div");
        j.lineDiv = d.C("div");
        j.tmpDiv = d.C("div");
        j.ul = d.C("ul");
        j.h3 = d.C("h3");
        j.div.className = "sim-select clearfix";
        p.replaceChild(j.div, r);
        j.div.appendChild(r);
        j.h3.innerHTML = q[r.selectedIndex].innerHTML;
        for (var m = 0, h = r.length; m < h; m++) {
            var g = d.C("li");
            g.innerHTML = q[m].innerHTML;
            j.ul.appendChild(g);
            g.onmouseover = function() {
                this.className += " over"
            };
            g.onmouseout = function() {
                this.className = this.className.replace(/over/gi, "")
            };
            g.onclick = (function(o) {
                return function() {
                    j.hide();
                    j.h3.innerHTML = this.innerHTML;
                    r.selectedIndex = o;
                    if (r.onchange) {
                        r.onchange()
                    }
                    if (!j.more) {
                        b("search", "search_list_click")
                    }
                }
            })(m)
        }
        if (!j.more) {
            var g = d.C("li");
            g.innerHTML = '<a href="http://search.sina.com.cn/?c=more" target="_blank">\u66f4\u591a&gt;&gt;</a>';
            g.onmouseover = function() {
                this.className += " over"
            };
            g.onmouseout = function() {
                this.className = this.className.replace(/over/gi, "")
            };
            j.ul.appendChild(g)
        }
        j.tmpDiv.className = "sim-ul-flt";
        j.tmpDiv.style.display = "none";
        j.tmpDiv.innerHTML = '<div class="sim-ul-bg"></div>';
        j.tmpDiv.appendChild(j.ul);
        j.lineDiv.className = "v-line";
        j.div.appendChild(j.h3);
        j.div.appendChild(j.lineDiv);
        j.div.appendChild(j.tmpDiv);
        j.tmpDiv.style.top = j.h3.offsetHeight + "px";
        j.tmpDiv.style.width = (j.h3.offsetWidth > 2 ? (j.h3.offsetWidth - 2) : j.h3.offsetWidth) + "px";
        j.init()
    };
    e.prototype = {
        init: function() {
            var g = this;
            c(document.documentElement, "click", function(h) {
                g.close(h)
            });
            this.h3.onclick = function() {
                g.toggles()
            }
        },
        show: function() {
            this.tmpDiv.style.display = "block";
            this.tmpDiv.style.visibility = "visible";
            this.isShow = true;
            if (!this.more) {
                b("search", "search_list_show")
            }
        },
        hide: function() {
            this.tmpDiv.style.display = "none";
            this.tmpDiv.style.visibility = "hidden";
            this.isShow = false
        },
        close: function(h) {
            var g = window.event ? window.event.srcElement: h.target;
            do {
                if (g == this.div) {
                    return 
                } else {
                    if (g == document.documentElement) {
                        this.hide();
                        return 
                    } else {
                        g = g.parentNode;
                        if (!g) {
                            break
                        }
                    }
                }
            }
            while (g.parentNode)
            }, toggles: function() {
            this.isShow ? this.hide() : this.show()
        }
    };
    return e
});
SHM.register("app.getTextareaData", function(c) {
    var a = c.dom.byAttr;
    var d = "__hasTARendered__";
    var b = "data-textarea";
    return function(q, f) {
        f = f || false;
        if (!q) {
            return ""
        }
        if (typeof q[d] == "undefined") {
            var o = a(q, "node-type", b)[0]
        }
        if (!o) {
            return ""
        }
        var g = o.value;
        if (f) {
            var p = c.C("div");
            var n = o.parentNode;
            p.className = b + "-wrap";
            p.innerHTML = g;
            var m = p.getElementsByTagName("img");
            if (m && m.length > 0) {
                for (var j = m.length - 1; j >= 0; j--) {
                    var h = m[j];
                    var e = h.getAttribute("data-src");
                    if (e) {
                        h.src = e;
                        h.removeAttribute("data-src")
                    }
                }
            }
            n.insertBefore(p, o);
            n.removeChild(o)
        }
        q[d] = true;
        return g
    }
});
SHM.register("app.tab", function(b) {
    var r = b.arr.inArray;
    var q = b.dom;
    var c = null;
    var h = q.byAttr;
    var u = b.json.queryToJson;
    var a = q.hasClass;
    var f = q.addClass;
    var i = q.removeClass;
    var n = "tab-type";
    var e = "mouseover";
    var p = null;
    var j = {};
    var s = (typeof(window.ontouchstart) !== "undefined");
    if (s) {
        e = "touchstart"
    }
    var t = function(x, w) {
        var o = h(x, n, "tab-wrap");
        var D = h(x, n, w);
        var z = [];
        var y = [];
        if (o.length != 0) {
            for (var A = o.length - 1; A >= 0; A--) {
                var x = o[A];
                var B = h(x, n, w);
                y = y.concat(B)
            }
            for (var A = D.length - 1; A >= 0; A--) {
                var C = D[A];
                if (r(C, y)) {
                    D.splice(A, 1)
                }
            }
        }
        return D
    };
    var d = function(x, o, y) {
        var w = x.parentNode;
        if (!w) {
            return c
        }
        if (w == c || w.getAttribute(o) == y) {
            return w
        } else {
            return arguments.callee(w, o, y)
        }
    };
    var m = function(w) {
        if (w) {
            var o = w.getElementsByTagName()
        }
    };
    var v = {};
    var g = function() {
        if (!s) {
            return 
        }
        if (typeof(window.ontouchstart) === "undefined") {
            return 
        }
        var y = function(D, C) {
            if (typeof(D.style.opacity) != "undefined") {
                D.style.opacity = C
            } else {
                D.style.filter = "Alpha(Opacity=" + (C * 100) + ")"
            }
        };
        var x = function(E, F) {
            y(E, 0);
            if (!F) {
                F = 40
            }
            var C = 0, D = F / 20;
            clearTimeout(E._showTimeOutId_);
            E._showTimeOutId_ = setTimeout(function() {
                if (C >= 1) {
                    return 
                }
                C += 1 / D;
                y(E, C);
                E._showTimeOutId_ = setTimeout(arguments.callee, 20)
            }, 20)
        };
        var B = function(D, C, E) {
            if (E == "prev") {
                D = D - 1;
                if (D < 0) {
                    D = C - 1
                }
            } else {
                D = D + 1;
                if (D == C) {
                    D = 0
                }
            }
            return D
        };
        var w = function(R, O) {
            var L = "selected";
            var D = "tab";
            var I = 1;
            var E = d(R, n, "tab-wrap");
            if (!E) {
                E = c
            }
            var J = u(E.getAttribute("tab-data") || "");
            if (J) {
                L = J.clz || L;
                D = J.name || D;
                I = J.touch == "0" ? 0 : I
            }
            if (!I) {
                return 
            }
            var G = t(E, D + "-nav");
            var Q = t(E, D + "-cont");
            if (G.length != Q.length) {
                return 
            }
            for (var H = 0, K = Q.length; H < K; H++) {
                var C = G[H];
                var P = Q[H];
                if (P == R) {
                    var N = B(H, K, O);
                    var F = G[N];
                    if (F && F.style.display == "none") {
                        break
                    }
                    i(C, L);
                    if (P) {
                        P.style.display = "none"
                    }
                    f(F, L);
                    var M = Q[N];
                    if (M) {
                        b.app.getTextareaData(M, true);
                        M.style.display = "";
                        x(M, 200)
                    }
                }
            }
        };
        p.add("tab-cont", "touchstart", function(C) {
            A(C)
        });
        p.add("tab-cont", "touchmove", function(C) {
            o(C)
        });
        p.add("tab-cont", "touchend", function(C) {
            z(C)
        });
        v.iPadStatus = "ok";
        var A = function(C) {
            v.iPadX = C.evt.touches[0].pageX;
            v.iPadScrollX = window.pageXOffset;
            v.iPadScrollY = window.pageYOffset
        };
        var z = function(C) {
            if (v.iPadStatus != "touch") {
                return 
            }
            v.iPadStatus = "ok";
            var D = v.iPadX - v.iPadLastX;
            if (D < 0) {
                w(C.el, "prev")
            } else {
                w(C.el, "next")
            }
        };
        var o = function(C) {
            if (C.evt.touches.length > 1) {
                z(C)
            }
            v.iPadLastX = C.evt.touches[0].pageX;
            var D = v.iPadX - v.iPadLastX;
            if (v.iPadStatus == "ok") {
                if (v.iPadScrollY == window.pageYOffset && v.iPadScrollX == window.pageXOffset && Math.abs(D) > 20) {
                    v.iPadStatus = "touch"
                } else {
                    return 
                }
            }
        }
    };
    j.switchByEle = function(F) {
        if (!F) {
            return 
        }
        var C = 0;
        var D = "selected";
        var w = "tab";
        var x = d(F, n, "tab-wrap");
        if (!x) {
            x = c
        }
        var A = u(x.getAttribute("tab-data") || "");
        if (A) {
            D = A.clz || D;
            w = A.name || w
        }
        var y = t(x, w + "-nav");
        var G = t(x, w + "-cont");
        if (y.length != G.length) {
            return 
        }
        for (var z = 0, B = y.length; z < B; z++) {
            var o = y[z];
            var E = G[z];
            if (a(o, D)) {
                i(o, D);
                if (E) {
                    E.style.display = "none"
                }
            }
            if (o == F || E == F) {
                C = z;
                f(o, D);
                if (E) {
                    b.app.getTextareaData(E, true);
                    E.style.display = ""
                }
            }
        }
    };
    j.init = function() {
        c = document.body;
        p = b.evt.delegatedEvent(c, null, n);
        g();
        p.add("tab-nav", e, function(w) {
            b.evt.preventDefault(w.evt);
            var o = w.el;
            j.switchByEle(o)
        })
    };
    return j
});
SHM.register("home.app.getSuid", function(a) {
    return function() {
        var b = "";
        var c = "";
        if (window.sinaSSOController) {
            c = sinaSSOController.get51UCCookie()
        } else {
            if (window.sinaSSOManager) {
                c = sinaSSOManager.getSinaCookie()
            }
        }
        if (c) {
            b = c.uid
        }
        return b
    }
});
SHM.register("home.app.getSguid", function(d) {
    var c = d.util.cookie;
    var b = function(e) {
        e = parseInt(e || "0");
        if (e <= 0) {
            return false
        }
        return true
    };
    var a = function() {
        return Math.abs((new Date()).getTime()) + "_" + Math.round(Math.random() * 100000000)
    };
    return function() {
        var e = c.getCookie("SGUID");
        if (!b(e)) {
            e = a();
            c.setCookie("SGUID", e, 43800, "/", "sina.com.cn")
        }
        return e
    }
});
SHM.register("home.custEvent", function(d) {
    var a = d.evt.custEvent.define;
    var c = ["firstPageEnd", "secondPageEnd", "loginSuccess", "logoutSuccess"];
    for (var b = c.length - 1; b >= 0; b--) {
        a(d, c[b])
    }
});
SHM.register("home.search", function(b) {
    var a = b.app.simSelect;
    return function() {
        var c = {};
        c.init = function() {
            var d = b.E("SI_Search_Type_Hack");
            if (d) {
                d.style.display = "none"
            }
            new a("slt_01")
        };
        return c
    }()
});
SHM.register("home.top.config", function(a) {
    return {
        weibo: 1 * 60 * 1000,
        mail: 2 * 60 * 1000,
        blog: 5 * 60 * 1000
    }
});
SHM.register("home.top.hover", function(c) {
    var a = c.evt.addEvent;
    var d = c.evt.removeEvent;
    var b = (typeof(window.ontouchstart) !== "undefined");
    return function(q) {
        var j = q.delay || 300, r = q.moutDelay || j, u = q.isover || false, t = q.act, f = q.extra || [], s = q.preventDefault && true, w = null, v = function(i) {
            u && q.onmouseover.apply(t, [i])
        }, m = function(i) {
            u || q.onmouseout.apply(t, [i])
        }, p = function(i) {
            u = true;
            w && clearTimeout(w);
            w = setTimeout(function() {
                v(i)
            }, j)
        }, g = function(i) {
            u = false;
            w && clearTimeout(w);
            w = setTimeout(function() {
                m(i)
            }, r)
        };
        if (!b) {
            a(t, "mouseover", p);
            a(t, "mouseout", g);
            a(document.body, "click", function(o) {
                var i = c.evt.fixEvent(o);
                if (!c.dom.contains(t, i.target)) {
                    if (q.bodyClick && typeof q.bodyClick == "function") {
                        q.bodyClick()
                    }
                }
            })
        } else {
            a(t, "click", function(i) {
                p()
            });
            a(document.body, "touchstart", function(o) {
                var i = c.evt.fixEvent(o);
                if (!c.dom.contains(t, i.target)) {
                    g()
                }
            })
        }
        for (var h = 0, n = f.length; h < n; h += 1) {
            a(f[h], "mouseover", p);
            a(f[h], "mouseout", g)
        }
        var e = {};
        e.destroy = function() {
            d(t, "mouseover", p);
            d(t, "mouseout", g);
            for (var x = 0, o = f.length; x < o; x += 1) {
                d(f[x], "mouseover", p);
                d(f[x], "mouseout", g)
            }
        };
        return e
    }
});
SHM.register("home.top.menu", function(a) {
    return function(d) {
        var b = function(m) {
            var j = m.suda;
            if (j) {
                SHMUATrack("menu", j)
            }
        };
        var f = "tn-onmouse tn-arrow-turn";
        var i = ' suda-uatrack="key=index_new_menu&value=my_menu_list_click"';
        var h = {}, g = {
            client: {
                suda: "sina_apps_show",
                timeout: 300000,
                handler: true,
                getData: function(j) {}
            },
            login: {
                suda: "",
                timeout: 300000,
                handler: true,
                getData: function(j) {}
            },
            nav: {
                suda: "",
                timeout: 300000,
                handler: true,
                getData: function(j) {}
            },
            menu: {
                suda: "my_menu_show",
                timeout: 300000,
                handler: false,
                rendered: false,
                uid: "",
                getData: function(r, t) {
                    var s = g[t];
                    var u = sinaSSOController.get51UCCookie();
                    var q = "";
                    if (u) {
                        q = u.uid
                    }
                    var w = (q == s.uid);
                    if (s.rendered && q == s.uid) {
                        return 
                    }
                    s.uid = q;
                    var v = "http://";
                    var p = ".sina.com.cn";
                    var o = 5;
                    var m = [1, 22, 78, 59, 99];
                    var n = {
                        1: {
                            name: "新闻",
                            url: v + "news" + p
                        },
                        22: {
                            name: "体育",
                            url: v + "sports" + p
                        },
                        78: {
                            name: "财经",
                            url: v + "finance" + p
                        },
                        59: {
                            name: "娱乐",
                            url: v + "ent" + p
                        },
                        99: {
                            name: "科技",
                            url: v + "tech" + p
                        }
                    };
                    var j = function(F) {
                        var x = F.order || m;
                        var y = F.data || n;
                        var D = [];
                        var A = 0;
                        var C = function(H) {
                            var G = H.url;
                            var I = H.name;
                            D.push("<li " + i + '><a target="_blank" href="' + G + '">' + I + "</a></li>")
                        };
                        for (var z = 0, B = x.length; z < B; z++) {
                            var E = x[z];
                            C(y[E]);
                            A++
                        }
                        if (A < o) {
                            for (var z = 0, B = m.length; z < B; z++) {
                                if (A == o) {
                                    break
                                }
                                var E = m[z];
                                C(n[E]);
                                A++
                            }
                        }
                        r.innerHTML = '<ul class="tn-text-list">' + D.join("") + "</ul>";
                        s.rendered = true
                    };
                    if (!w && q) {
                        r.innerHTML = '<div class="tn-loading"><span>加载中...</span></div>';
                        a.io.jsonp(e[t], "", function(y) {
                            var x = y.result.status.code;
                            if (x == 0) {
                                j(y.result)
                            }
                        })
                    } else {
                        j({
                            order: [],
                            data: {}
                        })
                    }
                }
            },
            weibo: {
                suda: "weibo_show",
                timeout: 300000,
                handler: false,
                getData: function(j) {}
            },
            mail: {
                suda: "mail_show",
                timeout: 300000,
                handler: false,
                getData: function(j) {}
            },
            blog: {
                suda: "blog_show",
                timeout: 300000,
                handler: true,
                getData: function(j) {}
            },
            other: {
                suda: "",
                timeout: 300000,
                handler: true,
                getData: function(j) {}
            }
        }, e = {
            menu: "http://interest.mix.sina.com.cn/api/customize/get?homeId=10000",
            weibo: "",
            mail: ""
        }, c = a.evt.custEvent;
        addClass = a.dom.addClass;
        removeClass = a.dom.removeClass;
        h.add = function(o, s, t, r, p, j, q) {
            var m = {};
            if (!o ||!s) {
                return false
            }
            var n = function() {
                s.style.display = "none";
                removeClass(o, f);
                c.fire(m, "hide")
            };
            a.home.top.hover({
                act: o,
                extra: [s],
                onmouseover: function() {
                    if (typeof r == "function") {
                        r()
                    }
                    s.style.display = "";
                    if (!g[t].handler && e[t]) {
                        g[t].getData(s, t)
                    }
                    addClass(o, f);
                    c.fire(m, "show")
                },
                onmouseout: function() {
                    if (j && typeof j == "function") {
                        var u = j();
                        if (u) {
                            return 
                        }
                    }
                    if (typeof p == "function") {
                        p()
                    }
                    n();
                    b(g[t])
                },
                bodyClick: function() {
                    if (q && typeof q == "function") {
                        q()
                    }
                    n()
                }
            });
            c.define(m, ["show", "hide"]);
            return m
        };
        return h
    }
});
SHM.register("app.formatNum", function(a) {
    return function(c, b) {
        c = parseInt(c, 10);
        return c > b ? b + "+" : c
    }
});
SHM.register("home.top.sethome.init", function(d) {
    var b = function() {
        var z = window, x = document, v = navigator, w = v.userAgent.toLowerCase(), s = function(e) {
            return (e = w.match(RegExp(e + "\\b[ \\/]?([\\w\\.]*)", "i"))) ? e.slice(1) : ["", ""]
        }, t = function() {
            var f =- 1 < w.indexOf("360chrome")?!0 : !1, h;
            try {
                z.external && z.external.twGetRunPath && (h = z.external.twGetRunPath)&&-1 < h.indexOf("360se") && (f=!0)
            } catch (g) {
                f=!1
            }
            return f
        }(), r;
        z: {
            try {
                if (/(\d+\.\d)/.test(z.external.max_version)) {
                    r = parseFloat(RegExp.$1);
                    break z
                }
            } catch (q) {}
            r = void 0
        }
        var u = s("(msie|safari|firefox|chrome|opera)"), o = s("(maxthon|360se|360chrome|theworld|se|qihu theworld|greenbrowser|qqbrowser|lbbrowser)"), p = s("(windows nt|macintosh|solaris|linux)"), n = s("(webkit|gecko|like gecko)");
        "msie" === u[0] ? t ? o = ["360se", ""] : r ? o = ["maxthon", r] : "," == o && (o = s("(tencenttraveler)")) : "safari" === u[0] && (u[1] = s("version") + "." + u[1]);
        var y;
        if (o[0]) {
            if (o[0] == "se") {
                o[0] = "sogou"
            } else {
                if (o[0] == "qqbrowser") {
                    o[0] = "qq"
                } else {
                    if (o[0] == "qihu theworld") {
                        o[0] = "theworld"
                    } else {
                        if (o[0] == "lbbrowser") {
                            o[0] = "liebao"
                        }
                    }
                }
            }
            y = o[0] + "-" + o[1]
        } else {
            if (u[0] == "msie") {
                u[0] = "ie"
            }
            y = u[0] + "-" + u[1]
        }
        return y
    };
    var a = function(e) {
        var f = window.open(e);
        return f
    };
    var c = function() {
        var e = b();
        var f = document.documentElement.clientHeight || document.body.clientHeight;
        var g = "http://www.sina.com.cn/setindex/select.html?tj=1";
        a(g + "#" + e + "-" + f)
    };
    return function(e) {
        if (e) {
            d.evt.addEvent(e, "click", c)
        }
    }
});
SHM.register("home.top.close", function(g) {
    var b = {};
    var e = g.dom;
    var m = g.util.cookie;
    var j = m.getCookie;
    var p = m.setCookie;
    var c = "SHM";
    var h = "top-nav-wrap-fix";
    var i = e.addClass;
    var n = e.removeClass;
    var d = g.evt.addEvent;
    var f = true;
    var a = null;
    b.init = function(r, t) {
        a = t;
        if (!r ||!t) {
            return 
        }
        var o = function() {
            o = true;
            i(t, h);
            p(c, "", 365);
            r.style.display = ""
        };
        var s = function() {
            o = false;
            n(t, h);
            p(c, 1, 24 * 7, "/");
            r.style.display = "none";
            if ($globalInfo.ua.isIE6) {
                t.style.top = "0"
            }
        };
        var q = j(c);
        if (q == "1") {
            o = false
        } else {
            o = true;
            i(t, h);
            r.style.display = ""
        }
        d(r, "click", function() {
            SHMUATrack("menu", "close");
            s()
        })
    };
    b.fix = function() {
        i(a, h)
    };
    b.unFix = function() {
        n(a, h)
    };
    b.isFix = function() {
        return f
    };
    return b
});
SHM.register("home.top.init", function(c) {
    var a = false;
    var b = null;
    return function() {
        var h = c.E("SI_Top_Wrap");
        if (!h || a) {
            return b
        }
        b = c.dom.parseDOM(c.dom.builder(h).list);
        c.home.top.sethome.init(b.sethome);
        var d = c.home.top.menu(), f = d.add(b.client, b.clientList, "client"), e = d.add(b.menu, b.menuList, "menu"), g = d.add(b.other, b.otherList, "other");
        c.home.top.close.init(b.close, h);
        a = true;
        return b
    }
});
SHM.register("home.common.login", function(a) {
    var c = function() {
        var d = window.SINA_OUTLOGIN_LAYER;
        if (!d) {
            return 
        }
        d.set("sso", {
            entry: "homepage"
        }).set("suggestor", {
            box_styles: {
                margin: "0 0 0 -1px"
            }
        }).register("login_success", function() {
            d.getWeiboInfo({
                timeout: 30 * 1000,
                onSuccess: function(e) {
                    a.evt.custEvent.fire(a, "loginSuccess")
                },
                onFailure: function() {
                    a.evt.custEvent.fire(a, "loginSuccess")
                }
            })
        }).register("logout_success", function() {
            a.evt.custEvent.fire(a, "logoutSuccess")
        })
    };
    var b = {};
    b.init = c;
    return b
});
SHM.register("home.weather.init", function(n) {
    function j(b, c, d) {
        if (!b) {
            return 
        }
        if (b.indexOf("?")===-1) {
            b += "?callback="
        } else {
            b += "&callback="
        }
        b += c;
        var a = document.createElement("script");
        window[c] = function(e) {
            d && d(e)
        };
        a.src = b;
        document.getElementsByTagName("head")[0].appendChild(a)
    }
    var p = n.io.request;
    var m = 0;
    var f = 3000;
    var q = "http://open.weather.sina.com.cn/api/weather/sinaForecast?";
    var o = {
        city: remote_ip_info.city,
        cityEn: encodeURIComponent(remote_ip_info.city)
    };
    window.homeWeatherWarnFun = function(a) {
        if (a && a.result.data && a.result.data.length > 0) {
            var b = '<img width="36" height="23" src="' + a.result.data[0] + '" />';
            document.getElementById("weather_warn").innerHTML = b
        }
    };
    var i = function(g, a) {
        var b = false;
        if (a && a.result.data) {
            var v = a.result.data;
            if (v.days && v.info) {
                var c = o.city;
                if (o.city.length >= 4) {
                    c = o.city.substring(0, 3) + "..."
                }
                var w = "";
                var x = "";
                var u = "";
                if (v.days.day[0].day_temperature && v.days.day[0].day_temperature !== "" && v.days.day[0].day_temperature !== "\0") {
                    w = v.days.day[0].day_temperature;
                    x = "http://i1.sinaimg.cn/dy/weather/main/index14/007/icons_32_yl/" + v.days.day[0].day_weather_code + ".png";
                    u = v.days.day[0].day_weather_type
                } else {
                    w = v.days.day[0].night_temperature;
                    x = "http://i1.sinaimg.cn/dy/weather/main/index14/007/icons_32_yl/" + v.days.day[0].night_weather_code + ".png";
                    u = v.days.day[0].night_weather_type
                }
                var e = '<img width="32" height="32" src="' + x + '" title="' + u + '" />';
                var t=!!window.ActiveXObject&&!window.XMLHttpRequest;
                if (t) {
                    var s = "title='" + u + "'";
                    var d = "<span " + s + " style=\"width:32px; height:32px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + x + "', sizingMethod='scale');\"></span>";
                    e = d
                }
                var h = '<a id="weatherBox" href="http://weather.sina.com.cn/' + v.info.url_code + '" target="_blank"><span class="now-wea-city" title="' + o.city + '">' + c + '</span><span class="now-wea-i">' + e + '</span><span class="now-wea-val">' + w + '℃</span><span id="weather_warn" style="padding:4px 0 0 5px;"></a>';
                g.innerHTML = h
            } else {
                b = true
            }
            j(["http://open.weather.sina.com.cn/api/weather/warn_pic/?", ["city=" + o.cityEn].join("&")].join(""), "homeWeatherWarnFun__", function(r) {
                homeWeatherWarnFun(r)
            })
        } else {
            b = true
        }
    };
    return function(b) {
        var a = n.E(b);
        if (!a) {
            return 
        }
        window.homeWeatherRenderFun = function(c) {
            i(a, c)
        };
        j([q, ["length=1", "air=1", "city=" + o.cityEn].join("&")].join(""), "homeWeatherRenderFunNew__", function(c) {
            homeWeatherRenderFun(c)
        })
    }
});
SHM.register("home.live", function(e) {
    var i = null;
    var d = 0;
    var b = 3000;
    var u = null;
    var o = e.app.strLeft;
    var p = "http://sports.sina.com.cn/iframe/js/2012/home.js";
    var g = "http://match.sports.sina.com.cn/tvguide/";
    var f = "http://i3.sinaimg.cn/dy/deco/2013/0305/d.gif";
    var x = {
        today: [],
        tomorrow: [],
        other: []
    };
    var j = {
        today: [],
        tomorrow: []
    };
    var s = false;
    var r = {
        "0": "over",
        "1": "live",
        "2": "future"
    };
    var n = {
        ImgUrl: "组图",
        VideoUrl: "视频",
        NewsUrl: "战报",
        VideoLiveUrl: "视频直播"
    };
    var w = {
        live_url: "直播中",
        live_url2: "结束",
        live_url3: "图文",
        live_url4: "直播",
        ImgUrl: "组图",
        VideoUrl: "视频",
        VideoLiveUrl: "视频",
        NewsUrl: "战报",
        preview_url: "前瞻",
        odds_url: "赔率",
        match_url: "专题"
    };
    var h = function(D) {
        var E = D.MatchDate;
        function C(G) {
            var H = y.getFullYear();
            var F = y.getMonth() + 1;
            var G = y.getDate();
            return H + "-" + F + "-" + G
        }
        var y = new Date();
        today = C(y);
        y.setDate(y.getDate() + 1);
        var z = C(y);
        var B = E.split("-");
        E = parseFloat(B[0]) + "-" + parseFloat(B[1]) + "-" + parseFloat(B[2]);
        var A = "other";
        if (E == today) {
            A = "today"
        } else {
            if (E == z) {
                A = "tomorrow"
            }
        }
        x[A].push(D)
    };
    var q = function(z, C, y, D, A) {
        var B = C;
        z = z || "";
        if (typeof D !== "undefined") {
            C = o(C, D)
        }
        if (z) {
            return '<a class="' + y + '" href="' + z + '" title="' + B + '" target="_blank">' + C + "</a>"
        } else {
            if (typeof A == "undefined") {
                return '<span class="' + y + '" title="' + B + '">' + C + "</span>"
            } else {
                return ""
            }
        }
    };
    var c = function() {
        var y = {};
        e.io.jsload.request(p, {
            GET: y,
            onComplete: function() {}
        })
    };
    var m = function(y) {
        y.sort(function(A, z) {
            if (A.Flag1 && z.Flag1) {
                return A.Flag1.length - z.Flag1.length
            } else {
                if (A.Flag1) {
                    return - 1
                } else {
                    return 1
                }
            }
        });
        return y
    };
    var v = function(Q, M) {
        var I = "";
        var G = Q.Team1;
        var F = Q.Team2;
        var L = Q.Flag1 || f;
        var K = Q.Flag2 || f;
        var B = Q.Score1 || 0;
        var A = Q.Score2 || 0;
        var R = Q.live_url;
        var T = Q.NewsUrl;
        var O = R;
        var N = "score";
        var J = Q.LiveStatus;
        var U = Q.VideoLiveUrl;
        if (J == 2) {
            O = T || R
        }
        var D = Q.Url1 || O, C = Q.Url2 || O;
        var H = "";
        if (M == 2) {
            H = "last"
        }
        var E = "";
        var S = "", P = "";
        if (J == "1") {
            if (Q.VideoLiveUrl) {
                E += q(Q.VideoLiveUrl, w.live_url, "red ico-play-right-d")
            } else {
                E += q(Q.live_url, w.live_url, "red")
            }
            S = q(U, B, N);
            P = q(U, A, N)
        } else {
            if (J == "2") {
                E += q(Q.NewsUrl, w.NewsUrl, "", 6, true);
                E += q(Q.VideoUrl, w.VideoUrl, "", 6, true);
                if (!(Q.NewsUrl & Q.VideoUrl & Q.ImgUrl)) {
                    E += q(Q.ImgUrl, w.ImgUrl, "", 6, true)
                }
                if (E == "") {
                    E += q(Q.live_url, w.live_url2, "", 6)
                }
                S = q(O, B, N);
                P = q(O, A, N);
                if (Q.NewsUrl) {
                    U = Q.NewsUrl
                }
            } else {
                if (Q.VideoLiveUrl) {
                    S = q(Q.VideoLiveUrl, w.VideoLiveUrl, "info red")
                } else {
                    if (Q.preview_url) {
                        S = q(Q.preview_url, w.preview_url, "info")
                    } else {
                        S = q(Q.match_url, w.match_url, "info")
                    }
                }
                if (Q.odds_url) {
                    P = q(Q.odds_url, w.odds_url, "info")
                } else {
                    if (Q.VideoLiveUrl == "") {
                        P = q(Q.live_url, w.live_url4, "info")
                    } else {
                        P = q(Q.live_url, w.live_url3, "info")
                    }
                }
                E += S;
                E += P;
                E += '<span class="time">' + q(g, Q.MatchTime, "tv", 16, 1) + "</span>";
                D = D || Q.live_url;
                C = C || Q.live_url
            }
        }
        var z = function() {
            var V = $globalInfo.ua.isIE6 ? ("<span style=\"display:block;width:57px;height:50px;_background:none;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true,sizingMethod=scale,src='" + L + "');\"></span>"): '<img width="57" height="50" src="' + L + '">';
            I += '<div class="mod07-cont-t clearfix item-' + r[J] + '-big"><a title="' + G + '" class="t-icon" href="' + D + '" target="_blank">' + V + "<span>" + o(G, 8) + '</span></a><div class="s-score"><div class="s-score-t"><a href="' + U + '" target="_blank">' + B + "-" + A + '</a></div><div class="s-score-b"><div class="s-score-b">' + E + '</div></div></div><a title="' + F + '" class="t-icon" href="' + C + '" target="_blank"><img width="57" height="50" src="' + K + '"><span>' + o(F, 8) + "</span></a></div>"
        };
        var y = function() {
            I += '<div class="mod07-cb-item ' + H + " item-" + r[J] + '-small">' + q(Q.match_url, Q.ShortTitle, "label s-tname fe661") + '<span class="time">' + Q.MatchTime + '</span><ul class="s-list clearfix"><li>' + q(D, G, "team", 14) + S + "</li><li>" + q(C, F, "team", 14) + P + "</li></ul></div>"
        };
        if (M == 0) {
            z()
        } else {
            y()
        }
        return I
    };
    var t = function(z, y) {};
    var a = function(C) {
        var B = {
            today: 1,
            tomorrow: 2
        };
        var A = {
            today: "今日",
            tomorrow: "明日"
        };
        var z = B[C];
        var y = A[C];
        if (typeof z !== "undefined") {
            return 'data-sudaclick="blk_sportslive_' + z + '" blkclick="auto_nav" blktitle="直播' + y + '" '
        } else {
            return ""
        }
    };
    window.sports_livecast_hot_video_list = function(G) {
        if (G.result.status.code != 0) {
            return 
        }
        var D = G.result.data;
        for (var B = 0, F = D.length; B < F; B++) {
            var L = D[B];
            h(L)
        }
        for (var A in x) {
            var J = x[A];
            if (A == "other") {
                break
            }
            var E = 0;
            for (var B = 0, F = J.length; B < F; B++) {
                var L = J[B];
                if (L.type == 0) {
                    j[A].push(v(L, E));
                    E++
                }
                if (E == 3) {
                    break
                }
            }
        }
        var K = [];
        for (var A in j) {
            var J = j[A];
            var F = J.length;
            var y = $globalInfo.live[A];
            var C = 2;
            var z = "";
            if (A == "today") {
                C = 1
            }
            var I = e.E("SI_Live_Data_" + C);
            if (I) {
                z = I.value
            }
            if (F == 1) {
                z = J[0] + '<div class="mod07-cont-b clearfix">' + z + "</div>"
            } else {
                if (F == 2) {
                    z = J[0] + '<div class="mod07-cont-b clearfix">' + J[1] + "</div>"
                } else {
                    if (F == 3) {
                        z = J[0] + '<div class="mod07-cont-b clearfix">' + J[1] + J[2] + "</div>"
                    }
                }
            }
            K.push('<div tab-type="tab-cont" ' + a(A) + ' id="SI_Live_' + A + '" class="mod07-cont" style="display:' + y + '">' + z + "</div>")
        }
        i.innerHTML = K.join("");
        var H = function() {
            var P = "";
            var O = "none";
            var M = [e.dom.byId("SI_Live_today"), e.dom.byId("SI_Live_tomorrow")];
            if (M) {
                var N = M[0];
                if (N.style.display == "none") {
                    P = "none";
                    O = ""
                }
            }
            return {
                today: P,
                tomorrow: O
            }
        };
        x = {
            today: [],
            tomorrow: [],
            other: []
        };
        j = {
            today: [],
            tomorrow: []
        };
        s = true;
        if (u) {
            clearTimeout(u)
        }
        u = setTimeout(function() {
            $globalInfo.live = H();
            c()
        }, 60000)
    };
    return function() {
        var y = {};
        y.init = function() {
            i = e.E("SI_Live_Wrap");
            if (!i) {
                return 
            }
            if (!$globalInfo.live) {
                $globalInfo.live = {
                    today: "",
                    tomorrow: "none"
                }
            }
            c()
        };
        y.isLoaded = function() {
            return s
        };
        return y
    }()
});
SHM.register("home.picGuess", function(z) {
    var E = z.util.cookie;
    var i = z.dom.byId;
    var A = z.evt.addEvent;
    var v = z.evt.removeEvent;
    var s = z.app.strLeft2;
    var t = z.home.app.getSguid;
    var C = z.home.app.getSuid;
    var w = z.clz.extend;
    var y = typeof window.ontouchstart !== "undefined";
    var u = function(a) {
        var c = function() {
            this.init.apply(this, arguments)
        };
        if (a) {
            var b = function() {};
            b.prototype = a.prototype;
            c.prototype = new b()
        }
        c.prototype.init = function() {};
        c.fn = c.prototype;
        c.fn.parent = c;
        c._super = c.__proto__;
        c.extend = function(d) {
            var f = d.extended;
            for (var e in d) {
                c[e] = d[e]
            }
            if (f) {
                f(c)
            }
        };
        c.include = function(d) {
            var e = d.included;
            for (var f in d) {
                c.fn[f] = d[f]
            }
            if (e) {
                e(c)
            }
        };
        return c
    };
    var F = function(c, a) {
        if (typeof _S_uaTrack == "function") {
            try {
                _S_uaTrack(c, a)
            } catch (b) {}
        }
    };
    var D = new u();
    D.include({
        init: function(a) {
            var b = this;
            b.setStat();
            b.setOpt(a);
            b.getData()
        },
        setOpt: function(b) {
            var c = this;
            c.opt = c.opt || {
                api: "http://cre.mix.sina.com.cn/api/v3/get?cre=sinapc&mod=picg&statics=1&merge=3&type=1&length=20&cateid=t_s&fields=url,stitle,title,thumb",
                type: "cate_interest"
            };
            c.evs = {
                handdleFailure: function() {
                    z.io.getScript({
                        url: "http://cre.mix.sina.com.cn/top/news?cateid=t_s&length=20&callback=homePicGuessLoaded__&rnd=" + new Date().getTime(),
                        charset: "utf-8"
                    })
                },
                loadComplete: function(d) {
                    if (d && d.length) {
                        c.evs.paint(d)
                    } else {
                        if (d.data) {
                            c.evs.paint(d.data)
                        } else {
                            c.evs.handdleFailure()
                        }
                    }
                },
                paint: function(d) {
                    x(d)
                }
            };
            var a = c.opt;
            if (b || "") {
                a = w(a, b, true)
            }
        },
        setStat: function() {
            var a = this
        },
        getData: function() {
            var e = this;
            var a = "homePicGuessLoaded__";
            window[a] = function(f) {
                e.evs.loadComplete(f)
            };
            var c = t();
            var b = C();
            var d = e.opt.api + "&callback=" + a + "&rnd=" + new Date().getTime();
            z.io.getScript({
                url: d,
                charset: "utf-8",
                timeout: 5000,
                onfailure: function(f) {
                    e.evs.handdleFailure()
                },
                oncomplete: function() {}
            })
        }
    });
    var x = function(f) {
        var p = i("SI_Scroll_Guess_Wrap");
        if (!p) {
            return 
        }
        var r = function() {
            var H = encodeURIComponent(location.href);
            var G = decodeURIComponent(H.split("?")[0].split("#")[0]);
            return function(I) {
                return I.indexOf(G)!=-1 ? true : false
            }
        }();
        var b = [], g = p.getAttribute("list-length") || 0, o = p.getAttribute("item-length") || 0;
        var K = [], j = [];
        if (f && f.length) {
            K = f
        }
        var n = [];
        var m = 1;
        var d = "key=index_picguess&value=click";
        var q = function(G) {
            var N = G.stitle || G.title;
            var H = N;
            if (o) {
                H = s(N, o * 2)
            }
            var I = '<div class="scroll-item"><a href="' + G.url + '" target="_blank"  suda-uatrack="' + d + '"><span class="scroll-img"><img src="http://s.img.mix.sina.com.cn/auto/resize?img=' + G.thumb + '&size=198_132" /><i></i></span><span class="scroll-txt">' + H + "</span></a></div>";
            n.push(I);
            m++
        };
        for (var c = 0, a = K.length; c < a; c++) {
            var h = K[c];
            if (n.length >= g && g) {
                break
            }
            if (!r(h.url)) {
                q(h)
            }
        }
        p.innerHTML = n.join("");
        var J = new ScrollPic();
        J.scrollContId = "SI_Scroll_Guess_Wrap";
        J.dotListId = "SI_Scroll_Guess_Dot_Lists";
        J.dotClassName = "";
        J.dotOnClassName = "cur";
        J.arrLeftId = "SI_Scroll_Guess_Arr_L";
        J.arrRightId = "SI_Scroll_Guess_Arr_R";
        J.listType = "";
        J.listEvent = "onmouseover";
        J.frameWidth = 1000;
        J.pageWidth = 1000;
        J.upright = false;
        J.speed = 10;
        J.space = 40;
        J.autoPlay = true;
        J.autoPlayTime = 15;
        J.circularly = true;
        J.initialize();
        var e = i("SI_Scroll_Guess_Dot_Lists");
        if (e) {
            A(e, "mouseover", function(G) {
                var H = G.target || G.srcElement;
                if (H.tagName.toLowerCase() == "span") {
                    F("index_picguess", "point")
                }
            })
        }
    };
    var B = {};
    B.init = function() {
        sinaSSOController && (sinaSSOController.entry = "homepage") && sinaSSOController.autoLogin(function() {
            new D({
                loadComplete: x
            })
        });
        var a = i("SI_Scroll_Guess_Trigger");
        if (a) {
            var b = "mouseover";
            if (y) {
                b = "touchstart"
            }
            A(a, b, function() {
                F("index_picguess", "tab")
            })
        }
    };
    return B
});
SHM.register("home.iplookup", function(d) {
    var a = [["110000", "北京"], ["310000", "上海"], ["440000", "广东"], ["340000", "安徽"], ["820000", "澳门"], ["500000", "重庆"], ["350000", "福建"], ["620000", "甘肃"], ["450000", "广西"], ["520000", "贵州"], ["460000", "海南"], ["130000", "河北"], ["410000", "河南"], ["230000", "黑龙江"], ["420000", "湖北"], ["430000", "湖南"], ["220000", "吉林"], ["320000", "江苏"], ["360000", "江西"], ["210000", "辽宁"], ["150000", "内蒙古"], ["640000", "宁夏"], ["630000", "青海"], ["510000", "四川"], ["370000", "山东"], ["610000", "陕西"], ["140000", "山西"], ["120000", "天津"], ["710000", "台湾"], ["540000", "西藏"], ["810000", "香港"], ["650000", "新疆"], ["530000", "云南"], ["330000", "浙江"]];
    var c = [["110100", "北京"], ["120100", "天津"], ["130101", "石家庄"], ["130201", "唐山"], ["130301", "秦皇岛"], ["130701", "张家口"], ["130801", "承德"], ["131001", "廊坊"], ["130401", "邯郸"], ["130501", "邢台"], ["130601", "保定"], ["130901", "沧州"], ["133001", "衡水"], ["140101", "太原"], ["140201", "大同"], ["140301", "阳泉"], ["140501", "晋城"], ["140601", "朔州"], ["142201", "忻州"], ["142331", "离石"], ["142401", "榆次"], ["142601", "临汾"], ["142701", "运城"], ["140401", "长治"], ["150101", "呼和浩特"], ["150201", "包头"], ["150301", "乌海"], ["152601", "集宁"], ["152701", "巴彦浩特"], ["152801", "临河"], ["152921", "鄂尔多斯"], ["150401", "赤峰"], ["152301", "通辽"], ["152502", "锡林浩特"], ["152101", "海拉尔"], ["152201", "乌兰浩特"], ["210101", "沈阳"], ["210201", "大连"], ["210301", "鞍山"], ["210401", "抚顺"], ["210501", "本溪"], ["210701", "锦州"], ["210801", "营口"], ["210901", "阜新"], ["211101", "盘锦"], ["211201", "铁岭"], ["211301", "朝阳"], ["211401", "葫芦岛"], ["210601", "丹东"], ["220101", "长春"], ["220201", "吉林"], ["220301", "四平"], ["220401", "辽源"], ["220601", "松原"], ["222301", "白城"], ["220501", "通化"], ["230101", "哈尔滨"], ["230301", "鸡西"], ["230401", "鹤岗"], ["230501", "双鸭山"], ["230701", "伊春"], ["230801", "佳木斯"], ["230901", "七台河"], ["231001", "牡丹江"], ["232301", "绥化"], ["230201", "齐齐哈尔"], ["230601", "大庆"], ["232601", "黑河"], ["232700", "大兴安岭"], ["310100", "上海"], ["320101", "南京"], ["320201", "无锡"], ["320301", "徐州"], ["320401", "常州"], ["320501", "苏州"], ["320600", "南通"], ["320701", "连云港"], ["320801", "淮阴"], ["320901", "盐城"], ["321001", "扬州"], ["321101", "镇江"], ["321102", "泰州"], ["321103", "宿迁"], ["330101", "杭州"], ["330201", "宁波"], ["330301", "温州"], ["330401", "嘉兴"], ["330501", "湖州"], ["330601", "绍兴"], ["330701", "金华"], ["330801", "衢州"], ["330901", "舟山"], ["332501", "丽水"], ["332602", "台州"], ["340101", "合肥"], ["340201", "芜湖"], ["340301", "蚌埠"], ["340401", "淮南"], ["340501", "马鞍山"], ["340601", "淮北"], ["340701", "铜陵"], ["340801", "安庆"], ["341001", "黄山"], ["342101", "阜阳"], ["342201", "宿州"], ["342301", "滁州"], ["342401", "六安"], ["342501", "宣城"], ["342601", "巢湖"], ["342901", "池州"], ["350101", "福州"], ["350201", "厦门"], ["350301", "莆田"], ["350401", "三明"], ["350501", "泉州"], ["350601", "漳州"], ["352101", "南平"], ["352201", "宁德"], ["352601", "龙岩"], ["622602", "陇南"], ["622603", "庆阳"], ["360101", "南昌"], ["360201", "景德镇"], ["362101", "赣州"], ["360301", "萍乡"], ["360401", "九江"], ["360501", "新余"], ["360601", "鹰潭"], ["362201", "宜春"], ["362301", "上饶"], ["362401", "吉安"], ["370101", "济南"], ["370201", "青岛"], ["370301", "淄博"], ["370401", "枣庄"], ["370501", "东营"], ["370601", "烟台"], ["370701", "潍坊"], ["370801", "济宁"], ["370901", "泰安"], ["371001", "威海"], ["371100", "日照"], ["372301", "滨州"], ["372401", "德州"], ["372501", "聊城"], ["372801", "临沂"], ["372901", "菏泽"], ["372902", "莱芜"], ["410101", "郑州"], ["410201", "开封"], ["410301", "洛阳"], ["410401", "平顶山"], ["410501", "安阳"], ["410601", "鹤壁"], ["410701", "新乡"], ["410801", "焦作"], ["410901", "濮阳"], ["411001", "许昌"], ["411101", "漯河"], ["411201", "三门峡"], ["412301", "商丘"], ["412701", "周口"], ["412801", "驻马店"], ["412901", "南阳"], ["413001", "信阳"], ["420101", "武汉"], ["420201", "黄石"], ["420400", "随州"], ["420501", "宜昌"], ["420601", "襄樊"], ["420701", "鄂州"], ["420801", "荆门"], ["422103", "黄冈"], ["422201", "孝感"], ["422301", "咸宁"], ["422421", "荆州"], ["422801", "恩施"], ["430101", "长沙"], ["430401", "衡阳"], ["430501", "邵阳"], ["432801", "郴州"], ["432901", "永州"], ["430801", "韶山"], ["430802", "张家界"], ["433001", "怀化"], ["433101", "吉首"], ["430201", "株洲"], ["430301", "湘潭"], ["430601", "岳阳"], ["430701", "常德"], ["432301", "益阳"], ["432501", "娄底"], ["440101", "广州"], ["440301", "深圳"], ["440601", "佛山"], ["441501", "汕尾"], ["441301", "惠州"], ["441601", "河源"], ["441801", "清远"], ["441901", "东莞"], ["440401", "珠海"], ["440701", "江门"], ["441201", "肇庆"], ["442001", "中山"], ["440801", "湛江"], ["440901", "茂名"], ["440201", "韶关"], ["440501", "汕头"], ["441701", "阳江"], ["441702", "潮州"], ["441703", "顺德"], ["441704", "揭阳"], ["441705", "云浮"], ["450101", "南宁"], ["450401", "梧州"], ["452501", "玉林"], ["450301", "桂林"], ["452601", "百色"], ["452701", "河池"], ["452802", "钦州"], ["450201", "柳州"], ["450501", "北海"], ["450502", "防城港"], ["450503", "贵港"], ["450504", "贺州"], ["460100", "海口"], ["460200", "三亚"], ["460300", "西沙群岛"], ["510101", "成都"], ["513321", "眉山"], ["513101", "雅安"], ["513229", "峨嵋山"], ["510301", "自贡"], ["500100", "重庆"], ["500103", "涪陵"], ["512901", "南充"], ["510501", "泸州"], ["510601", "德阳"], ["510701", "绵阳"], ["510901", "遂宁"], ["511001", "内江"], ["511101", "乐山"], ["512501", "宜宾"], ["510801", "广元"], ["513021", "达州"], ["513401", "资阳"], ["510401", "攀枝花"], ["510402", "阿坝"], ["510403", "甘孜"], ["510404", "凉山"], ["510405", "广安"], ["510406", "巴中"], ["500239", "黔江"], ["520101", "贵阳"], ["520200", "六盘水"], ["522201", "铜仁"], ["522501", "安顺"], ["522601", "凯里"], ["522701", "都匀"], ["522301", "兴义"], ["522421", "毕节"], ["522101", "遵义"], ["530101", "昆明"], ["530201", "德宏"], ["532201", "曲靖"], ["532301", "楚雄"], ["532401", "玉溪"], ["532501", "红河"], ["532621", "文山"], ["532721", "思茅"], ["532101", "昭通"], ["532821", "西双版纳"], ["532901", "大理"], ["533001", "保山"], ["533121", "怒江"], ["533221", "丽江"], ["533321", "迪庆"], ["533521", "临沧"], ["540101", "拉萨"], ["542121", "昌都"], ["542221", "山南"], ["542301", "日喀则"], ["542421", "那曲"], ["542523", "阿里"], ["542621", "林芝"], ["610101", "西安"], ["610201", "铜川"], ["610301", "宝鸡"], ["610401", "咸阳"], ["612101", "渭南"], ["612301", "汉中"], ["612401", "安康"], ["612601", "延安"], ["612701", "榆林"], ["620101", "兰州"], ["620401", "白银"], ["620301", "金昌"], ["620501", "天水"], ["622201", "张掖"], ["622301", "武威"], ["622421", "定西"], ["622701", "平凉"], ["622901", "临夏"], ["622102", "酒泉"], ["630100", "西宁"], ["632121", "果洛"], ["632321", "格尔木"], ["632521", "海东"], ["632721", "玉树"], ["632802", "黄南"], ["640101", "银川"], ["640201", "石嘴山"], ["642101", "吴忠"], ["642221", "固原"], ["650101", "乌鲁木齐"], ["650201", "克拉玛依"], ["652101", "吐鲁番"], ["652201", "哈密"], ["652301", "昌吉"], ["652701", "博乐"], ["652801", "库尔勒"], ["652901", "阿克苏"], ["653001", "克州"], ["653101", "喀什"], ["654101", "伊犁"], ["655001", "石河子"], ["655002", "塔城"], ["655003", "阿勒泰"], ["710001", "台北"], ["211001", "辽阳"], ["653201", "和田"], ["820000", "澳门"], ["810000", "香港"]];
    var e = null;
    var b = d.util.cookie.getCookie;
    return function() {
        var f = {};
        f.load = function(g, h) {
            var i = b("SINA_NEWS_CUSTOMIZE_city") || "";
            h = h || false;
            if (e&&!h) {
                if (typeof g === "function") {
                    g(e, i || e.city)
                }
                return 
            }
            jsLoader({
                name: "iplookup",
                callback: function() {
                    e = remote_ip_info;
                    if (typeof g === "function") {
                        g(e, i || e.city)
                    }
                }
            })
        };
        f.getPNameByCName = function(n) {
            var m = (function() {
                var q = "11";
                for (var o = 0; o < c.length; o++) {
                    var p = c[o];
                    if (n == p[1]) {
                        q = p[0];
                        break
                    }
                }
                q = q.substring(0, 2) + "0000";
                return q
            })();
            var g = "北京";
            for (var h = 0; h < a.length; h++) {
                var j = a[h];
                if (m == j[0]) {
                    g = j[1];
                    break
                }
            }
            return g
        };
        return f
    }()
});
SHM.register("home.iplookup.nav", function(b) {
    var c = {
        "四川": "sc",
        "河南": "henan",
        "云南": "qcyn",
        "福建": "fj",
        "陕西": "sx",
        "上海": "sh",
        "河北": "hebei"
    };
    var a = function(g, i) {
        try {
            if (g.ret == 1) {
                var h = b.E("SI_Nav_City");
                if (!h) {
                    return 
                }
                var d = c[g.province];
                if (typeof d == "undefined") {
                    return 
                }
                h.innerHTML = '<a href="http://' + d + '.sina.com.cn/">' + g.province + "</a>"
            }
        } catch (f) {}
    };
    return function() {
        var d = {};
        d.init = function() {
            b.home.iplookup.load(function(e, f) {
                a(e, f)
            })
        };
        return d
    }()
});
SHM.register("home.guide", function(a) {
    var b = {};
    b.init = function() {
        try {
            a.util.cookie.deleteCookie("SHMG")
        } catch (c) {}
    };
    return b
});
SHM.register("home.app.localData", function(b) {
    var a = {
        hname: location.hostname ? location.hostname: "localStatus",
        isSessionStorage: window.sessionStorage ? true: false,
        dataDom: null,
        initDom: function() {
            if (!this.dataDom) {
                try {
                    this.dataDom = document.createElement("input");
                    this.dataDom.type = "hidden";
                    this.dataDom.style.display = "none";
                    this.dataDom.addBehavior("#default#userData");
                    document.body.appendChild(this.dataDom);
                    var d = new Date();
                    d.setTime(d.getTime() + 129600);
                    this.dataDom.expires = d.toUTCString()
                } catch (c) {
                    return false
                }
            }
            return true
        },
        set: function(c, d) {
            if (this.isSessionStorage) {
                window.sessionStorage.setItem(c, d)
            } else {
                if (this.initDom()) {
                    this.dataDom.load(this.hname);
                    this.dataDom.setAttribute(c, d);
                    this.dataDom.save(this.hname)
                }
            }
        },
        get: function(c) {
            if (this.isSessionStorage) {
                return window.sessionStorage.getItem(c)
            } else {
                if (this.initDom()) {
                    this.dataDom.load(this.hname);
                    return this.dataDom.getAttribute(c)
                }
            }
        },
        remove: function(c) {
            if (this.isSessionStorage) {
                sessionStorage.removeItem(c)
            } else {
                if (this.initDom()) {
                    this.dataDom.load(this.hname);
                    this.dataDom.removeAttribute(c);
                    this.dataDom.save(this.hname)
                }
            }
        }
    };
    return a
});
SHM.register("home.blkLike.setLogGif", function(a) {
    var b = (function() {
        var d = (new Date()).getTime() + "-", c = 0;
        return function() {
            return d + (c++)
        }
    })();
    return function(c, e, j, i) {
        var h = window.imgLogData || (window.imgLogData = {});
        var d = new Image();
        var g = b();
        e = e || "";
        c = c || "";
        d.onload = d.onerror = function() {
            d.onload = d.onerror = null;
            d = null;
            delete h[e]
        };
        var f = "http://slog.sina.com.cn/a.gif?type=home_blkLike&homeId=" + j + "&coord=" + i + "&vid=" + c + "&uid=" + e + "&_t=" + g;
        d.src = f
    }
});
SHM.register("home.blkLike.setStyle", function(d) {
    var b = [];
    function c(f) {
        var g = document.createElement("style");
        g.type = "text/css";
        try {
            g.appendChild(document.createTextNode(f))
        } catch (e) {
            if (g.styleSheet) {
                try {
                    oldCss = g.styleSheet.cssText
                } catch (e) {
                    oldCss = ""
                }
                g.styleSheet.cssText = oldCss + f
            } else {}
        }
        document.getElementsByTagName("head")[0].appendChild(g)
    }
    function a(f, h) {
        var g = document;
        var e = g.createElement("style");
        e.id = h;
        e.type = "text/css";
        e.styleSheet ? (e.styleSheet.cssText = f) : e.appendChild(g.createTextNode(f));
        g.getElementsByTagName("head")[0].appendChild(e);
        return e
    }
    b.push(".blkLike_btn{ width:50px; height:50px; padding-top:5px;}");
    b.push('.blkLike_btn a{ width:40px; padding:0 5px; height:50px; font-size:14px; background:#000; text-align:center;font-family:"微软雅黑"; display:block;filter:Alpha(Opacity=35) !important; opacity:0.35;}');
    b.push(".blkLike_btn a td{ text-align:center;vertical-align:middle;height:50px;width:40px; color:#f6f6f6; cursor:pointer;}");
    b.push(".blkLike_btn a:hover{  text-decoration:none;filter:Alpha(Opacity=50) !important; opacity:0.5;}");
    b.push(".blkLike_btn a:active, .blkLike_btn a:focus{text-decoration:none;}");
    b.push(".blkLike_btn a:hover td{color:#fff;}");
    b.push(".top_btn,.weibo_btn,.cmnt_btn{width:50px;height:50px;position: static;margin:0;margin-top:5px;}");
    b.push(".top_btn .toplink { height: 50px; width: 50px;background:url(http://i0.sinaimg.cn/home/main/index2013/bg2.png) 0 -600px no-repeat;_background:url(http://i0.sinaimg.cn/dy/deco/2012/1227/news_zxh_content_btn_bg.png) no-repeat 0 -110px;  filter:Alpha(Opacity=35) !important; opacity:0.35; overflow:hidden; display:block; text-indent:-999em; cursor:pointer;}");
    b.push(".top_btn .toplink:hover {filter:Alpha(Opacity=50) !important; opacity:0.5;}");
    b = b.join("\n ");
    c(b)
});
SHM.register("home.app.viewData", function() {
    return function() {
        var a = 0, i = 0, f = 0, c = 0, b = 0, j = 0;
        var g = window, e = document, h = e.documentElement;
        a = h.clientWidth || e.body.clientWidth;
        i = g.innerHeight || h.clientHeight || e.body.clientHeight;
        c = e.body.scrollTop || h.scrollTop || g.pageYOffset;
        f = e.body.scrollLeft || h.scrollLeft || g.pageXOffset;
        b = Math.max(e.body.scrollWidth, h.scrollWidth || 0);
        j = Math.max(e.body.scrollHeight, h.scrollHeight || 0, i);
        return {
            scrollTop: c,
            scrollLeft: f,
            documentWidth: b,
            documentHeight: j,
            viewWidth: a,
            viewHeight: i
        }
    }
});
SHM.register("home.sideBtn.close", function(c) {
    var n = c.dom.byId;
    var e = c.evt.delegatedEvent;
    var h = c.util.cookie;
    var f = h.getCookie;
    var m = h.setCookie;
    var b = $globalInfo.ua.isIE6;
    var d = document.getElementsByTagName("BODY")[0];
    var i = e(d);
    var g = "home_sidebtn_cookies";
    var j = n("SI_Totop_Btn");
    var a = {
        targetE: null,
        showSideBtns: function() {
            var o = this;
            o.targetE = o.targetE || n("SI_Sidebtns_Wrap");
            o.targetE && (o.targetE.style.cssText = "left:50%");
            j && (j.style.display = "block")
        },
        hideSideBtns: function() {
            var o = this;
            o.targetE = o.targetE || n("SI_Sidebtns_Wrap");
            o.targetE && (o.targetE.style.cssText = "left:-99999px");
            j && (j.style.display = "none")
        },
        storeStatus: function() {
            m(g, "1", 24 * 30, "/")
        },
        resetStatus: function() {
            m(g, "0", 24 * 30, "/")
        },
        getStatus: function() {
            var o = f(g);
            if (o && o === "1") {
                return true
            } else {
                return false
            }
        },
        init: function() {
            var o = this;
            if (o.getStatus()) {
                o.hideSideBtns()
            } else {
                i.add("close-side-btns", "mousedown", function() {
                    o.hideSideBtns();
                    o.storeStatus();
                    if (typeof _S_uaTrack == "function") {
                        try {
                            _S_uaTrack("channel_index_up_to_top", "www_close")
                        } catch (p) {}
                    }
                })
            }
        }
    };
    return a
});
SHM.register("home.blkLike.interestCollection", function(f) {
    var g = f.dom.byId, v = f.dom.byClass, h = f.dom.addClass, j = f.dom.removeClass, a = f.dom.hasClass, s = f.evt.addEvent, o = f.evt.delegatedEvent, x = f.clz.extend, s = f.evt.addEvent, y = f.app.uaTrack, w = f.dom.getXY, i = f.dom.byAttr, e = f.home.sideBtn.close, d = window, m = document, u = m.getElementsByTagName("BODY")[0], b = f.home.app.getSguid, q = f.home.app.viewData, p = m.createElement("DIV"), A = '<div class="side-btns-closer clearfix" id="SI_Sidebtns_Closer" action-type="close-side-btns"><a href="javascript:;" title="关闭侧边按钮"><em></em><span>关闭</span></a></div><div class="top_btn" id="SI_Totop_Btn"><a class="toplink" href="javascript:;" title="返回顶部" style="">TOP</a></div>';
    var n = f.evt.custEvent.add;
    var B = f.evt.custEvent.remove;
    var z = "10001";
    var t = function(G) {
        p.className = "side-btns-wrap";
        p.setAttribute("id", "SI_Sidebtns_Wrap");
        p.innerHTML = A;
        p.style.display = "none";
        u.insertBefore(p, u.firstChild);
        e.init();
        var E = g("SI_Sidebtns_Wrap");
        var D = g("SI_Totop_Btn");
        var J = g("SI_Sidebtns_Closer");
        var I = $globalInfo.ua.isIE6;
        var F = function() {
            var K = parseInt(q().viewWidth);
            K < 1100 ? (E.style.display = "none") : (E.style.display = "block")
        };
        F();
        s(d, "resize", function() {
            F()
        });
        s(d, "scroll", function() {
            H()
        });
        s(D, "click", function() {
            m.documentElement.scrollTop = 0;
            m.body.scrollTop = 0;
            y("to_top", "to_top")
        });
        function H() {
            var M = d.pageYOffset || m.documentElement.scrollTop || m.body.scrollTop;
            if (M > 900) {
                D.style.visibility = "visible";
                J.style.display = "block"
            } else {
                D.style.visibility = "hidden";
                if (!J.getAttribute("closed")) {
                    J.style.display = "none"
                }
            }
            if (I) {
                var L = E.offsetHeight || 250;
                var K = d.innerHeight || m.documentElement.clientHeight || m.body.clientHeight;
                E.style.top = (M + K - L - 30) + "px"
            }
        }
        C();
        H();
        function C() {
            var M = [];
            if (G && G.length) {
                J.style.display = "block";
                J.setAttribute("closed", "1");
                for (var L = 0; L < G.length; L++) {
                    if (i(m, "data-sudaclick", G[L])[0]) {
                        M[L] = i(m, "data-sudaclick", G[L])[0].getAttribute("blktitle") || "";
                        var K = document.createElement("div");
                        K.className = "blkLike_btn";
                        K.innerHTML = '<a href="javascript:;" suda-uatrack="key=index_div_way&value=click" action-type="getBlk" action-data="blk=' + G[L] + '"><table><tr><td style="">' + M[L] + "</td></tr></a>";
                        p.insertBefore(K, D)
                    }
                }
            }
        }
    };
    var r = function() {
        var E = f.home.app.localData;
        var C = sinaSSOController.get51UCCookie();
        if (C) {
            D("blkLike_login", C.uid == E.get("login_UID"))
        } else {
            D("blkLike_logout", true)
        }
        function D(F, H) {
            if ((E.get(F) || E.get(F) !== null) && H) {
                if (E.get(F)) {
                    t(E.get(F).split(","))
                } else {
                    t()
                }
            } else {
                var G = true;
                var I = null;
                f.io.jsonp("http://interest.mix.sina.com.cn/api/customize/get_click?homeId=" + z, "", function(K) {
                    var J = K.result.order;
                    if (K.result.status.code == 0) {
                        clearTimeout(I);
                        G = false;
                        E.set(F, J.join(","));
                        if (C) {
                            E.set("login_UID", C.uid)
                        }
                        t(K.result.order)
                    } else {
                        t()
                    }
                });
                I = setTimeout(function() {
                    if (G) {
                        try {
                            _S_uaTrack("index_div_way", "timeout")
                        } catch (J) {}
                    }
                }, 5000)
            }
        }
    };
    var c = function() {
        var E = o(v("main")[0], [], "blkclick"), H = f.home.blkLike.setLogGif, D = f.util.cookie, G = "", C = "", F = b();
        E.add("auto_nav", "click", function(K) {
            var J = function(L) {
                if (sinaSSOController.get51UCCookie()) {
                    C = L + "," + sinaSSOController.get51UCCookie().uid
                } else {
                    C = L + ","
                }
            };
            if (D.getCookie("SGUID")) {
                J(D.getCookie("SGUID"))
            } else {
                D.setCookie("SGUID", F, 43800, "/", "sina.com.cn");
                J(F)
            }
            _thisCoord = w(K.el)[0] + "," + w(K.el)[1];
            var I = K.el.getAttribute("data-sudaclick");
            G = I;
            H(G, C, z, _thisCoord)
        })
    };
    f.dom.ready(function() {
        sinaSSOController && (sinaSSOController.entry = "homepage") && sinaSSOController.autoLogin(function() {
            r();
            B(f, "loginSuccess", r);
            n(f, "loginSuccess", r)
        });
        n(f, "logoutSuccess", function() {
            B(f, "loginSuccess", r);
            n(f, "loginSuccess", r);
            r()
        });
        c()
    })
});
SHM.register("home.blkLike.moveToBlk", function(e) {
    var b = e.dom.byAttr, a = window, f = document, c = e.dom.getXY, d = e.app.tab.switchByEle;
    return function(h) {
        var g = b(f, "data-sudaclick", h)[0];
        d(g);
        if (c(g)) {
            var i = c(g)[1] - 110;
            f.documentElement.scrollTop = i;
            f.body.scrollTop = i
        }
    }
});
SHM.register("home.blkLike.getBlkLink", function(d) {
    var b = d.dom.byId;
    var c = d.evt.delegatedEvent;
    var a = d.home.blkLike.moveToBlk;
    d.dom.ready(function() {
        var e = c(document.getElementsByTagName("body")[0]);
        e.add("getBlk", "click", function(g) {
            var f = g.data.blk;
            a(f)
        })
    })
});
SHM.register("home.custEvent.firstpage.add", function(b) {
    var a = b.evt.custEvent.add;
    a(b, "firstPageEnd", function() {
        b.home.top.init();
        b.app.tab.init();
        b.home.search.init();
        b.home.weather.init("SI_Weather_Wrap");
        b.home.iplookup.nav.init();
        b.home.common.login.init()
    })
});
SHM.register("home.custEvent.secondpage.add", function(c) {
    var b = c.evt.custEvent.add;
    var a = c.evt.custEvent;
    b(c, "secondPageEnd", function() {
        c.home.live.init();
        c.home.picGuess.init();
        c.home.guide.init()
    })
});
if ($globalInfo.SHMLoaded) {
    SHM.register = SHM._register
}
$globalInfo.SHMLoaded = true;
/*!
scrollpic.js
*/
function ScrollPic(a, e, d, c, b) {
    this.scrollContId = a;
    this.arrLeftId = e;
    this.arrRightId = d;
    this.dotListId = c;
    this.listType = b;
    this.dotClassName = "dotItem";
    this.dotOnClassName = "dotItemOn";
    this.dotObjArr = [];
    this.listEvent = "onclick";
    this.circularly = true;
    this.pageWidth = 0;
    this.frameWidth = 0;
    this.speed = 10;
    this.space = 10;
    this.upright = false;
    this.pageIndex = 0;
    this.autoPlay = true;
    this.autoPlayTime = 5;
    this._autoTimeObj;
    this._scrollTimeObj;
    this._state = "ready";
    this.stripDiv = document.createElement("DIV");
    this.lDiv01 = document.createElement("DIV");
    this.lDiv02 = document.createElement("DIV")
}
ScrollPic.prototype = {
    version: "1.45",
    author: "mengjia",
    pageLength: 0,
    touch: true,
    scrollLeft: 0,
    eof: false,
    bof: true,
    initialize: function() {
        var b = this;
        if (!this.scrollContId) {
            throw new Error("必须指定scrollContId.");
            return 
        }
        this.scDiv = this.$(this.scrollContId);
        if (!this.scDiv) {
            throw new Error('scrollContId不是正确的对象.(scrollContId = "' + this.scrollContId + '")');
            return 
        }
        this.scDiv.style[this.upright ? "height": "width"] = this.frameWidth + "px";
        this.scDiv.style.overflow = "hidden";
        this.lDiv01.innerHTML = this.scDiv.innerHTML;
        this.scDiv.innerHTML = "";
        this.scDiv.appendChild(this.stripDiv);
        this.stripDiv.appendChild(this.lDiv01);
        if (this.circularly) {
            this.stripDiv.appendChild(this.lDiv02);
            this.lDiv02.innerHTML = this.lDiv01.innerHTML;
            this.bof = false;
            this.eof = false
        }
        this.stripDiv.style.overflow = "hidden";
        this.stripDiv.style.zoom = "1";
        this.stripDiv.style[this.upright ? "height": "width"] = "32766px";
        this.lDiv01.style.overflow = "hidden";
        this.lDiv01.style.zoom = "1";
        this.lDiv02.style.overflow = "hidden";
        this.lDiv02.style.zoom = "1";
        if (!this.upright) {
            this.lDiv01.style.cssFloat = "left";
            this.lDiv01.style.styleFloat = "left"
        }
        this.lDiv01.style.zoom = "1";
        if (this.circularly&&!this.upright) {
            this.lDiv02.style.cssFloat = "left";
            this.lDiv02.style.styleFloat = "left"
        }
        this.lDiv02.style.zoom = "1";
        this.addEvent(this.scDiv, "mouseover", function() {
            b.stop()
        });
        this.addEvent(this.scDiv, "mouseout", function() {
            b.play()
        });
        if (this.arrLeftId) {
            this.alObj = this.$(this.arrLeftId);
            if (this.alObj) {
                this.addEvent(this.alObj, "mousedown", function(f) {
                    b.rightMouseDown();
                    f = f || event;
                    b.preventDefault(f)
                });
                this.addEvent(this.alObj, "mouseup", function() {
                    b.rightEnd()
                });
                this.addEvent(this.alObj, "mouseout", function() {
                    b.rightEnd()
                })
            }
        }
        if (this.arrRightId) {
            this.arObj = this.$(this.arrRightId);
            if (this.arObj) {
                this.addEvent(this.arObj, "mousedown", function(f) {
                    b.leftMouseDown();
                    f = f || event;
                    b.preventDefault(f)
                });
                this.addEvent(this.arObj, "mouseup", function() {
                    b.leftEnd()
                });
                this.addEvent(this.arObj, "mouseout", function() {
                    b.leftEnd()
                })
            }
        }
        var a = Math.ceil(this.lDiv01[this.upright ? "offsetHeight": "offsetWidth"] / this.frameWidth), d, c;
        this.pageLength = a;
        if (this.dotListId) {
            this.dotListObj = this.$(this.dotListId);
            this.dotListObj.innerHTML = "";
            if (this.dotListObj) {
                for (d = 0; d < a; d++) {
                    c = document.createElement("span");
                    this.dotListObj.appendChild(c);
                    this.dotObjArr.push(c);
                    if (d == this.pageIndex) {
                        c.className = this.dotOnClassName
                    } else {
                        c.className = this.dotClassName
                    }
                    if (this.listType == "number") {
                        c.innerHTML = d + 1
                    } else {
                        if (typeof(this.listType) == "string") {
                            c.innerHTML = this.listType
                        } else {
                            c.innerHTML = ""
                        }
                    }
                    c.title = "第" + (d + 1) + "页";
                    c.num = d;
                    c[this.listEvent] = function() {
                        b.pageTo(this.num)
                    }
                }
            }
        }
        this.scDiv[this.upright ? "scrollTop": "scrollLeft"] = 0;
        if (this.autoPlay) {
            this.play()
        }
        this._scroll = this.upright ? "scrollTop" : "scrollLeft";
        this._sWidth = this.upright ? "scrollHeight" : "scrollWidth";
        if (typeof(this.onpagechange) === "function") {
            this.onpagechange()
        }
        this.iPad()
    },
    leftMouseDown: function() {
        if (this._state != "ready") {
            return 
        }
        var a = this;
        this._state = "floating";
        clearInterval(this._scrollTimeObj);
        this._scrollTimeObj = setInterval(function() {
            a.moveLeft()
        }, this.speed);
        this.moveLeft()
    },
    rightMouseDown: function() {
        if (this._state != "ready") {
            return 
        }
        var a = this;
        this._state = "floating";
        clearInterval(this._scrollTimeObj);
        this._scrollTimeObj = setInterval(function() {
            a.moveRight()
        }, this.speed);
        this.moveRight()
    },
    moveLeft: function() {
        if (this._state != "floating") {
            return 
        }
        if (this.circularly) {
            if (this.scDiv[this._scroll] + this.space >= this.lDiv01[this._sWidth]) {
                this.scDiv[this._scroll] = this.scDiv[this._scroll] + this.space - this.lDiv01[this._sWidth]
            } else {
                this.scDiv[this._scroll] += this.space
            }
        } else {
            if (this.scDiv[this._scroll] + this.space >= this.lDiv01[this._sWidth] - this.frameWidth) {
                this.scDiv[this._scroll] = this.lDiv01[this._sWidth] - this.frameWidth;
                this.leftEnd()
            } else {
                this.scDiv[this._scroll] += this.space
            }
        }
        this.accountPageIndex()
    },
    moveRight: function() {
        if (this._state != "floating") {
            return 
        }
        if (this.circularly) {
            if (this.scDiv[this._scroll] - this.space <= 0) {
                this.scDiv[this._scroll] = this.lDiv01[this._sWidth] + this.scDiv[this._scroll] - this.space
            } else {
                this.scDiv[this._scroll] -= this.space
            }
        } else {
            if (this.scDiv[this._scroll] - this.space <= 0) {
                this.scDiv[this._scroll] = 0;
                this.rightEnd()
            } else {
                this.scDiv[this._scroll] -= this.space
            }
        }
        this.accountPageIndex()
    },
    leftEnd: function() {
        if (this._state != "floating" && this._state != "touch") {
            return 
        }
        this._state = "stoping";
        clearInterval(this._scrollTimeObj);
        var a = this.pageWidth - this.scDiv[this._scroll]%this.pageWidth;
        this.move(a)
    },
    rightEnd: function() {
        if (this._state != "floating" && this._state != "touch") {
            return 
        }
        this._state = "stoping";
        clearInterval(this._scrollTimeObj);
        var a =- this.scDiv[this._scroll]%this.pageWidth;
        this.move(a)
    },
    move: function(c, e) {
        var a = this;
        var f = c / 5;
        var d = false;
        if (!e) {
            if (f > this.space) {
                f = this.space
            }
            if (f<-this.space) {
                f =- this.space
            }
        }
        if (Math.abs(f) < 1 && f != 0) {
            f = f >= 0 ? 1 : - 1
        } else {
            f = Math.round(f)
        }
        var b = this.scDiv[this._scroll] + f;
        if (f > 0) {
            if (this.circularly) {
                if (this.scDiv[this._scroll] + f >= this.lDiv01[this._sWidth]) {
                    this.scDiv[this._scroll] = this.scDiv[this._scroll] + f - this.lDiv01[this._sWidth]
                } else {
                    this.scDiv[this._scroll] += f
                }
            } else {
                if (this.scDiv[this._scroll] + f >= this.lDiv01[this._sWidth] - this.frameWidth) {
                    this.scDiv[this._scroll] = this.lDiv01[this._sWidth] - this.frameWidth;
                    this._state = "ready";
                    d = true
                } else {
                    this.scDiv[this._scroll] += f
                }
            }
        } else {
            if (this.circularly) {
                if (this.scDiv[this._scroll] + f < 0) {
                    this.scDiv[this._scroll] = this.lDiv01[this._sWidth] + this.scDiv[this._scroll] + f
                } else {
                    this.scDiv[this._scroll] += f
                }
            } else {
                if (this.scDiv[this._scroll] + f <= 0) {
                    this.scDiv[this._scroll] = 0;
                    this._state = "ready";
                    d = true
                } else {
                    this.scDiv[this._scroll] += f
                }
            }
        }
        this.accountPageIndex();
        if (d) {
            this.accountPageIndex("end");
            return 
        }
        c -= f;
        if (Math.abs(c) == 0) {
            (function() {
                var h = a.scDiv[a._scroll];
                var g = a.frameWidth;
                var i = h%g;
                if (i > 0) {
                    a.scDiv[a._scroll] = a.pageIndex * g
                }
            })();
            this._state = "ready";
            if (this.autoPlay) {
                this.play()
            }
            this.accountPageIndex();
            return 
        } else {
            clearTimeout(this._scrollTimeObj);
            this._scrollTimeObj = setTimeout(function() {
                a.move(c, e)
            }, this.speed)
        }
    },
    pre: function() {
        if (this._state != "ready") {
            return 
        }
        this._state = "stoping";
        this.move( - this.pageWidth)
    },
    next: function(a) {
        if (this._state != "ready") {
            return 
        }
        this._state = "stoping";
        if (this.circularly) {
            this.move(this.pageWidth)
        } else {
            if (this.scDiv[this._scroll] >= this.lDiv01[this._sWidth] - this.frameWidth) {
                this._state = "ready";
                if (a) {
                    this.pageTo(0)
                }
            } else {
                this.move(this.pageWidth)
            }
        }
    },
    play: function() {
        var a = this;
        if (!this.autoPlay) {
            return 
        }
        clearInterval(this._autoTimeObj);
        this._autoTimeObj = setInterval(function() {
            a.next(true)
        }, this.autoPlayTime * 1000)
    },
    stop: function() {
        clearInterval(this._autoTimeObj)
    },
    pageTo: function(a) {
        if (this.pageIndex == a) {
            return 
        }
        if (a < 0) {
            a = this.pageLength - 1
        }
        clearTimeout(this._scrollTimeObj);
        clearInterval(this._scrollTimeObj);
        this._state = "stoping";
        var b = a * this.frameWidth - this.scDiv[this._scroll];
        this.move(b, true)
    },
    accountPageIndex: function(d) {
        var b = Math.round(this.scDiv[this._scroll] / this.frameWidth);
        if (b >= this.pageLength) {
            b = 0
        }
        this.scrollLeft = this.scDiv[this._scroll];
        var a = this.lDiv01[this._sWidth] - this.frameWidth;
        if (!this.circularly) {
            this.eof = this.scrollLeft >= a;
            this.bof = this.scrollLeft <= 0
        }
        if (d == "end" && typeof(this.onmove) === "function") {
            this.onmove()
        }
        if (b == this.pageIndex) {
            return 
        }
        this.pageIndex = b;
        if (this.pageIndex > Math.floor(this.lDiv01[this.upright ? "offsetHeight": "offsetWidth"] / this.frameWidth)) {
            this.pageIndex = 0
        }
        var c;
        for (c = 0; c < this.dotObjArr.length; c++) {
            if (c == this.pageIndex) {
                this.dotObjArr[c].className = this.dotOnClassName
            } else {
                this.dotObjArr[c].className = this.dotClassName
            }
        }
        if (typeof(this.onpagechange) === "function") {
            this.onpagechange()
        }
    },
    iPadX: 0,
    iPadLastX: 0,
    iPadStatus: "ok",
    iPad: function() {
        if (typeof(window.ontouchstart) === "undefined") {
            return 
        }
        if (!this.touch) {
            return 
        }
        var a = this;
        this.addEvent(this.scDiv, "touchstart", function(b) {
            a._touchstart(b)
        });
        this.addEvent(this.scDiv, "touchmove", function(b) {
            a._touchmove(b)
        });
        this.addEvent(this.scDiv, "touchend", function(b) {
            a._touchend(b)
        })
    },
    _touchstart: function(a) {
        this.stop();
        this.iPadX = a.touches[0].pageX;
        this.iPadScrollX = window.pageXOffset;
        this.iPadScrollY = window.pageYOffset;
        this.scDivScrollLeft = this.scDiv[this._scroll]
    },
    _touchmove: function(b) {
        if (b.touches.length > 1) {
            this._touchend()
        }
        this.iPadLastX = b.touches[0].pageX;
        var c = this.iPadX - this.iPadLastX;
        if (this.iPadStatus == "ok") {
            if (this.iPadScrollY == window.pageYOffset && this.iPadScrollX == window.pageXOffset && Math.abs(c) > 20) {
                this.iPadStatus = "touch"
            } else {
                return 
            }
        }
        this._state = "touch";
        var a = this.scDivScrollLeft + c;
        if (a >= this.lDiv01[this._sWidth]) {
            if (this.circularly) {
                a = a - this.lDiv01[this._sWidth]
            } else {
                return 
            }
        }
        if (a < 0) {
            if (this.circularly) {
                a = a + this.lDiv01[this._sWidth]
            } else {
                return 
            }
        }
        this.scDiv[this._scroll] = a;
        b.preventDefault()
    },
    _touchend: function(a) {
        if (this.iPadStatus != "touch") {
            return 
        }
        this.iPadStatus = "ok";
        var b = this.iPadX - this.iPadLastX;
        if (b < 0) {
            this.rightEnd()
        } else {
            this.leftEnd()
        }
        this.play()
    },
    _overTouch: function() {
        this.iPadStatus = "ok"
    },
    $: function(objName) {
        if (document.getElementById) {
            return eval('document.getElementById("' + objName + '")')
        } else {
            return eval("document.all." + objName)
        }
    },
    isIE: navigator.appVersion.indexOf("MSIE")!=-1 ? true: false,
    addEvent: function(c, a, b) {
        if (c.attachEvent) {
            c.attachEvent("on" + a, b)
        } else {
            c.addEventListener(a, b, false)
        }
    },
    delEvent: function(c, a, b) {
        if (c.detachEvent) {
            c.detachEvent("on" + a, b)
        } else {
            c.removeEventListener(a, b, false)
        }
    },
    preventDefault: function(a) {
        if (a.preventDefault) {
            a.preventDefault()
        } else {
            a.returnValue = false
        }
    }
};
