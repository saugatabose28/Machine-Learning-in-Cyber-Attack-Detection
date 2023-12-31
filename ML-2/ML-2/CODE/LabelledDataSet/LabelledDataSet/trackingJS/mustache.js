(function(k, u) {
    if ("object" === typeof exports && exports)
        u(exports);
    else {
        var m = {};
        u(m);
        "function" === typeof define && define.amd ? define(m) : k.Mustache = m
    }
})(this, function(k) {
    function u(a) {
        return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26")
    }
    function m(a) {
        this.tail = this.string = a;
        this.pos = 0
    }
    function l(a, b) {
        this.view = a || {};
        this.parent = b;
        this._cache = {}
    }
    function n() {
        this.clearCache()
    }
    function s(a, b, c, f) {
        for (var d = "", g, e, m = 0, l = a.length; m < l; ++m)
            switch (g = a[m], e = g[1], g[0]) {
            case "#":
                e = c.lookup(e);
                if ("object" ===
                typeof e)
                    if (w(e))
                        for (var p = 0, h = e.length; p < h; ++p)
                            d += s(g[4], b, c.push(e[p]), f);
                    else 
                        e && (d += s(g[4], b, c.push(e), f));
            else 
                "function" === typeof e ? (g = null == f ? null : f.slice(g[3], g[5]), e = e.call(c.view, g, function(a) {
                    return b.render(a, c)
                }), null != e && (d += e)) : e && (d += s(g[4], b, c, f));
                break;
            case "^":
                e = c.lookup(e);
                if (!e || w(e) && 0 === e.length)
                    d += s(g[4], b, c, f);
                    break;
                case "\x3e":
                    e = b.getPartial(e);
                    "function" === typeof e && (d += e(c));
                    break;
                case "\x26":
                    e = c.lookup(e);
                    null != e && (d += e);
                    break;
                case "name":
                    e = c.lookup(e);
                    null != e && (d += k.escape(e));
                    break;
                case "text":
                    d += e
            }
        return d
    }
    function x(a) {
        return [RegExp(u(a[0]) + "\\s*"), RegExp("\\s*" + u(a[1]))]
    }
    var A = /\s*/, y = /\s+/, B = /\S/, z = /\s*=/, C = /\s*\}/, D = /#|\^|\/|>|\{|&|=|!/, E = RegExp.prototype.test, F = Object.prototype.toString, w = Array.isArray || function(a) {
        return "[object Array]" === F.call(a)
    }, G = {
        "\x26": "\x26amp;",
        "\x3c": "\x26lt;",
        "\x3e": "\x26gt;",
        '"': "\x26quot;",
        "'": "\x26#39;",
        "/": "\x26#x2F;"
    };
    m.prototype.eos = function() {
        return "" === this.tail
    };
    m.prototype.scan = function(a) {
        return (a = this.tail.match(a)) && 0 ===
        a.index ? (this.tail = this.tail.substring(a[0].length), this.pos += a[0].length, a[0]) : ""
    };
    m.prototype.scanUntil = function(a) {
        var b = this.tail.search(a);
        switch (b) {
        case - 1:
            a = this.tail;
            this.pos += this.tail.length;
            this.tail = "";
            break;
        case 0:
            a = "";
            break;
        default:
            a = this.tail.substring(0, b), this.tail = this.tail.substring(b), this.pos += b
        }
        return a
    };
    l.make = function(a) {
        return a instanceof l ? a : new l(a)
    };
    l.prototype.push = function(a) {
        return new l(a, this)
    };
    l.prototype.lookup = function(a) {
        var b = this._cache[a];
        if (!b) {
            if ("." == a)
                b =
                this.view;
            else 
                for (var c = this; c;) {
                    if (0 < a.indexOf("."))
                        for (var b = c.view, f = a.split("."), d = 0; b && d < f.length;)
                            b = b[f[d++]];
                    else 
                        b = c.view[a];
                        if (null != b)
                            break;
                            c = c.parent
                }
            this._cache[a] = b
        }
        "function" === typeof b && (b = b.call(this.view));
        return b
    };
    n.prototype.clearCache = function() {
        this._cache = {};
        this._partialCache = {}
    };
    n.prototype.compile = function(a, b) {
        var c = this._cache[a];
        c || (c = k.parse(a, b), c = this._cache[a] = this.compileTokens(c, a));
        return c
    };
    n.prototype.compilePartial = function(a, b, c) {
        b = this.compile(b, c);
        return this._partialCache[a] =
        b
    };
    n.prototype.getPartial = function(a) {
        a in this._partialCache ||!this._loadPartial || this.compilePartial(a, this._loadPartial(a));
        return this._partialCache[a]
    };
    n.prototype.compileTokens = function(a, b) {
        var c = this;
        return function(f, d) {
            if (d)
                if ("function" === typeof d)
                    c._loadPartial = d;
                else 
                    for (var g in d)
                        c.compilePartial(g, d[g]);
            return s(a, c, l.make(f), b)
        }
    };
    n.prototype.render = function(a, b, c) {
        return this.compile(a)(b, c)
    };
    k.name = "mustache.js";
    k.version = "0.7.2";
    k.tags = ["{{", "}}"];
    k.Scanner = m;
    k.Context = l;
    k.Writer =
    n;
    k.parse = function(a, b) {
        a = a || "";
        b = b || k.tags;
        "string" === typeof b && (b = b.split(y));
        if (2 !== b.length)
            throw Error("Invalid tags: " + b.join(", "));
        for (var c = x(b), f = new m(a), d = [], g = [], e = [], l=!1, n=!1, p, h, q, t; !f.eos();) {
            p = f.pos;
            if (q = f.scanUntil(c[0])) {
                t = 0;
                for (var s = q.length; t < s; ++t)
                    if (h = q.charAt(t), E.call(B, h) ? n=!0 : e.push(g.length), g.push(["text", h, p, p + 1]), p += 1, "\n" == h) {
                        if (l&&!n)
                            for (; e.length;)
                                delete g[e.pop()];
                        else 
                            e = [];
                            n = l=!1
                    }
            }
            if (!f.scan(c[0]))
                break;
            l=!0;
            h = f.scan(D) || "name";
            f.scan(A);
            "\x3d" === h ? (q = f.scanUntil(z),
            f.scan(z), f.scanUntil(c[1])) : "{" === h ? (q = f.scanUntil(RegExp("\\s*" + u("}" + b[1]))), f.scan(C), f.scanUntil(c[1]), h = "\x26") : q = f.scanUntil(c[1]);
            if (!f.scan(c[1]))
                throw Error("Unclosed tag at " + f.pos);
            t = [h, q, p, f.pos];
            g.push(t);
            if ("#" === h || "^" === h)
                d.push(t);
            else if ("/" === h) {
                if (0 === d.length)
                    throw Error('Unopened section "' + q + '" at ' + p);
                h = d.pop();
                if (h[1] !== q)
                    throw Error('Unclosed section "' + h[1] + '" at ' + p);
            } else if ("name" === h || "{" === h || "\x26" === h)
                n=!0;
            else if ("\x3d" === h) {
                b = q.split(y);
                if (2 !== b.length)
                    throw Error("Invalid tags at " +
                    p + ": " + b.join(", "));
                c = x(b)
            }
        }
        if (h = d.pop())
            throw Error('Unclosed section "' + h[1] + '" at ' + f.pos);
        for (var c = g, f = [], r, g = 0, e = c.length; g < e; ++g)
            if (d = c[g])
                "text" === d[0] && r && "text" === r[0] ? (r[1] += d[1], r[3] = d[3]) : (r = d, f.push(d));
        r = f;
        f = c = [];
        d = [];
        e = 0;
        for (l = r.length; e < l; ++e)
            switch (g = r[e], g[0]) {
            case "#":
            case "^":
                d.push(g);
                f.push(g);
                f = g[4] = [];
                break;
            case "/":
                d.pop()[5] = g[2];
                f = 0 < d.length ? d[d.length - 1][4] : c;
                break;
            default:
                f.push(g)
            }
        return c
    };
    k.escape = function(a) {
        return String(a).replace(/[&<>"'\/]/g, function(a) {
            return G[a]
        })
    };
    var v = new n;
    k.clearCache = function() {
        return v.clearCache()
    };
    k.compile = function(a, b) {
        return v.compile(a, b)
    };
    k.compilePartial = function(a, b, c) {
        return v.compilePartial(a, b, c)
    };
    k.compileTokens = function(a, b) {
        return v.compileTokens(a, b)
    };
    k.render = function(a, b, c) {
        return v.render(a, b, c)
    };
    k.to_html = function(a, b, c, f) {
        a = k.render(a, b, c);
        if ("function" === typeof f)
            f(a);
        else 
            return a
    }
});
