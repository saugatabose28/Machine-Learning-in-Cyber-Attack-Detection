(function(a) {
    var f = a.__ = a.__ || {}, d = /^[a-z0-9\-\.:_]+$/, b = /^http(s)?:\/\/|^\.|^\//, e = Array.prototype.slice;
    f.global = a;
    f.doc = a.document;
    f.topLayer = 1;
    (function() {
        var c = f.global.navigator && navigator.userAgent;
        f.ua = {};
        if (c) {
            f.ua.browser = true;
            if (/MSIE \d/.test(c)) {
                f.ua.ie = c.match(/MSIE (\d)/)[1]
            } else {
                if (/KHTML/.test(c)) {
                    f.ua.webkit = true
                } else {
                    if (/Gecko/.test(c)) {
                        f.ua.gecko = true
                    } else {
                        if (/Opera/.test(c)) {
                            f.ua.opera = c.match(/Opera\/([0-9.]+)/)[1]
                        }
                    }
                }
            }
        }
    })();
    f._isDebug = false;
    f.debug = function(c) {
        this._isDebug = c === false ? false : true
    };
    f.isDebug = function() {
        return this._isDebug
    };
    f.each = function(g, c, i) {
        var h;
        if (g) {
            if (i) {
                for (h in g) {
                    g.hasOwnProperty(h) && c(g[h], h)
                }
            } else {
                if (typeof g === "string" || typeof g.length !== "number" || g.tagName || g === this.global) {
                    g = [g]
                }
                h = 0;
                for (i = g.length; h < i; ++h) {
                    c(g[h], h)
                }
            }
        }
    };
    f.extend = function(g, c, i) {
        var h;
        i = i === false ? false : true;
        for (h in c) {
            if (c.hasOwnProperty(h) && (i || g[h] === void 0)) {
                g[h] = c[h]
            }
        }
    };
    f._uIdx = 0;
    f.getUid = function(g) {
        var c;
        if (!g) {
            return g
        }
        if (!c) {
            c = "_duid_" + ++f._uIdx;
            try {
                g._duid = c
            } catch (h) {
                c = null
            }
        }
        return c
    };
    f.set = function(g, c, j) {
        var i, h;
        g = g.split(".");
        j = j || f.global;
        i = 0;
        for (h = g.length - 1; i < h; ++i) {
            j[g[i]] = j[g[i]] || {};
            j = j[g[i]]
        }
        g = g[g.length - 1];
        j[g] = c === void 0 ? j[g] === void 0 ? {} : j[g] : c;
        return j[g]
    };
    f.get = function(h, c) {
        var l, k, j = h.split("."), i = c || f.global;
        l = 0;
        for (k = j.length; l < k; ++l) {
            if (!i) {
                return 
            }
            i = i[j[l]]
        }
        return i
    };
    f.exportPath = function(g, c, h) {
        f.set(g, c, h)
    };
    f.inherits = function(g, c) {
        function h() {}
        h.prototype = c.prototype;
        g._super = c.prototype;
        g.prototype = new h;
        g.prototype.constructor = g
    };
    f.preLoadJs = function(c) {
        f.ua.ie || f.ua.opera ? f.downloadScriptImage(c) : f.downloadScriptObject(c)
    };
    f.downloadScriptImage = function(c) {
        (new Image).src = c
    };
    f.downloadScriptObject = function(g) {
        var c;
        if (f.doc.body) {
            c = f.doc.createElement("object");
            c.data = g;
            c.width = 0;
            c.height = 0;
            f.doc.body.appendChild(c)
        } else {
            setTimeout(function() {
                f.downloadScriptObject(g)
            }, 50)
        }
    };
    f.loadJs = function(i, c) {
        var n = f.doc, m = n.getElementsByTagName("head")[0] || n.documentElement, l, k, j = false;
        k = c.onSuccess;
        if (c.cache === false || f.isDebug() && c.cache !== true) {
            i += (i.indexOf("?") > 0 ? "&" : "?") + "_du_r_t=" + Math.random()
        }
        l = n.createElement("script");
        l.type = "text/javascript";
        l.src = i;
        if (c.charset) {
            l.charset = c.charset
        }
        l.onload = l.onreadystatechange = function() {
            if (!j && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                j = true;
                k && k();
                k = l.onload = l.onreadystatechange = null;
                m && l.parentNode && m.removeChild(l)
            }
        };
        m.appendChild(l)
    };
    f.BasicModule = function(g, c) {
        c = c || {};
        this.mname = g;
        this.detailObj = c
    };
    f.BasicModule.modules = {};
    f.BasicModule.waitingReg = [];
    f.BasicModule.loadingMods = {};
    f.BasicModule.loadedMods = {};
    f.BasicModule.add = function(g, c) {
        var h = new f.BasicModule(g, c);
        return this.modules[":" + g] = h
    };
    f.BasicModule.load = function(i, c) {
        var n, m, l, k, j;
        (n = this.modules[":" + i]) || (n = this.add(i));
        n = n.getURI(c);
        if (c.preload) {
            f.preLoadJs(n, c)
        } else {
            j = c.onSuccess;
            k = this.loadingMods;
            m = this.waitingReg;
            l = this.loadedMods;
            j && m.push(["_", false, c.dependency, j]);
            if (!k[i]) {
                if (l[i] !== void 0) {
                    f.BasicModule.register("_", false)
                } else {
                    k[i] = c;
                    f.loadJs(n, {
                        cache: c.cache
                    })
                }
            }
        }
    };
    f.BasicModule.register = function(v, u, t, s) {
        var r, q, p, o, l, j, c = false;
        p = this.loadedMods;
        if (p[v] === void 0) {
            t = t || [];
            q = this.waitingReg;
            o = this.loadingMods;
            r = this.getMissingMods(v, t);
            if (o[v] !== void 0) {
                l = o[v]
            }
            if (r.length) {
                j = e.call(arguments);
                c = true;
                f.each(r, function(g) {
                    if (p[g] === void 0) {
                        c = false;
                        o[g] === void 0 && f.BasicModule.load(g, {
                            version: l && l.version
                        })
                    }
                });
                c || q.push(j)
            } else {
                delete o[v];
                s && s();
                if (v !== "_") {
                    p[v] = u
                }
                f.each(q, function(g, h) {
                    if (g && g != j) {
                        q[h] = false;
                        f.BasicModule.register.apply(f.BasicModule, g)
                    }
                })
            }
        }
    };
    f.BasicModule.getMissingMods = function(g, c) {
        var i, h = [];
        c = c || [];
        i = this.loadedMods;
        f.each(c, function(k, j) {
            if (k === g) {
                k = "_";
                c[j] = k
            }
            k !== "_" && i[k] === void 0 && h.push(k)
        });
        return h
    };
    (function() {
        var c = f.doc.getElementsByTagName("script");
        c = c[c.length - 1].src;
        f.BasicModule.prototype.baseURI = c.substr(0, c.lastIndexOf("/"))
    })();
    f.BasicModule.prototype.getURI = function(h) {
        var c, l, k = this.detailObj, j, i;
        h = h || {};
        c = k.base || this.baseURI;
        if (k.fullPath) {
            c = k.fullPath
        } else {
            if (k.afterBasePath) {
                c = [c, k.afterBasePath].join("/")
            } else {
                j = this.mname.split(":");
                i = j[1];
                j = j[0].split(".");
                l = k.dirName == void 0 ? j.join("/") : k.dirName;
                if (k.dynamic) {
                    h = h.version ? h.version : k.dynamic;
                    c = [c, l, this.mname].join("/");
                    c += "_" + h + ".js"
                } else {
                    h = f.isDebug() ? "0" : h.version ? h.version : "0";
                    if (h !== "0") {
                        c += "/" + h
                    }
                    c = [c, l, (i || j[j.length - 1]) + ".js"].join("/")
                }
            }
        }
        return c
    };
    f._loadOne = function(g, c) {
        if (c._isMod) {
            f.BasicModule.load(g, c)
        } else {
            g.match(b) || (g = "http://" + g);
            c.preload ? f.preLoadJs(g, c) : f.loadJs(g, c)
        }
    };
    f.load = function(i, c, n) {
        var m, l, k, j = false;
        c = c || {};
        if (typeof c === "function") {
            m = n || {};
            m.onSuccess = c;
            c = m
        }
        c.onSuccess = c.onSuccess || function() {};
        k = typeof i === "string" ? i.split(" ") : e.call(i);
        if (i = c._isMod === void 0) {
            c._isMod = d.test(k[0])
        }
        if (c._isMod) {
            c._isMod = true;
            if (c.onSuccess) {
                m = c.onSuccess;
                l = false;
                c.onSuccess = function() {
                    if (!l) {
                        l = true;
                        m()
                    }
                }
            }
        } else {
            if (c.onSuccess) {
                if (i) {
                    c.onAllLoad = c.onSuccess;
                    j = c.preload === true ? true : false
                }
                c.onSuccess = function() {
                    k.shift();
                    if (k.length === 0) {
                        c.onAllLoad()
                    } else {
                        f.load(k, c)
                    }
                }
            }
        }
        c.dependency = c.dependency || k;
        f.each(k, function(h, g) {
            if (g > 0) {
                j && f._loadOne(h, {
                    preload: true,
                    version: c.version
                })
            } else {
                setTimeout(function() {
                    f._loadOne(h, c)
                }, 0)
            }
        })
    };
    f.each("load widget app jslog".split(" "), function(c) {
        f.exportPath("__." + c)
    });
    f.jslog.error = f.jslog.iferror = function() {}
})(this);
__.BasicModule.register("lang", "0.4.0", [], function() {
    __.exportPath("__.lang");
    __.lang.OPER = {
        "+": function(d, c) {
            return d + c
        },
        "-": function(d, c) {
            return d - c
        },
        "*": function(d, c) {
            return d * c
        },
        "/": function(d, c) {
            return d / c
        },
        "%": function(d, c) {
            return d%c
        },
        "-2": function(d, c) {
            return c - d
        },
        "/2": function(d, c) {
            return c / d
        },
        "%2": function(d, c) {
            return c%d
        },
        ">": function(d, c) {
            return d > c
        },
        "<": function(d, c) {
            return d < c
        },
        ">=": function(d, c) {
            return d >= c
        },
        "<=": function(d, c) {
            return d <= c
        },
        "==": function(d, c) {
            return d == c
        },
        "===": function(d, c) {
            return d === c
        },
        "&&": function(d, c) {
            return d && c
        },
        "||": function(d, c) {
            return d || c
        },
        "&": function(d, c) {
            return d & c
        },
        "|": function(d, c) {
            return d | c
        },
        "^": function(d, c) {
            return d^c
        },
        "++": function(b) {
            return b + 1
        },
        "--": function(b) {
            return b - 1
        },
        "!": function(b) {
            return !b
        }
    };
    __.lang.NODE_TYPE = {
        ELEMENT_NODE: 1,
        ATTRIBUTE_NODE: 2,
        TEXT_NODE: 3,
        CDATA_SECTION_NODE: 4,
        ENTITY_REFERENCE_NODE: 5,
        ENTITY_NODE: 6,
        PROCESSING_INSTRUCTION_NODE: 7,
        COMMENT_NODE: 8,
        DOCUMENT_NODE: 9,
        DOCUMENT_TYPE_NODE: 10,
        DOCUMENT_FRAGMENT_NODE: 11,
        NOTATION_NODE: 12
    };
    __.lang.EF = function() {};
    __.lang.K = function(b) {
        return b
    };
    __.lang.isArray = function(b) {
        return Object.prototype.toString.apply(b) === "[object Array]"
    };
    __.lang.isUndefined = function(b) {
        return b === void 0
    };
    __.lang.isNull = function(b) {
        return b === null
    };
    __.lang.isBoolean = function(b) {
        return typeof b === "boolean"
    };
    __.lang.isFunction = function(b) {
        return typeof b === "function"
    };
    __.lang.isNumber = function(b) {
        return typeof b === "number" && isFinite(b)
    };
    __.lang.isInt = function(d) {
        var c = parseInt(d, 10);
        if (isNaN(c)) {
            return false
        }
        return d === c
    };
    __.lang.isFloat = function(d) {
        var c = parseFloat(d);
        if (isNaN(c)) {
            return false
        }
        return d === c
    };
    __.lang.isObject = function(b) {
        return b && (typeof b === "object" || __.lang.isFunction(b)) || false
    };
    __.lang.isString = function(b) {
        return typeof b === "string"
    };
    __.lang.isEmpty = function(b) {
        return b === null || typeof b === "undefined" || b === 0 || b === false || b === "" || typeof b.length === "number" && b.length === 0
    };
    __.lang.isNode = function(d, c) {
        return __.lang.isObject(d) && (!c && (d === __.global || d === __.doc) || d.nodeType === __.lang.NODE_TYPE.ELEMENT_NODE)
    };
    __.lang.range = function(f, e, h) {
        var g = [];
        h = h || 1;
        if (e === void 0) {
            e = f;
            f = 0
        }
        for (; e > f;) {
            g[g.length] = f;
            f += h
        }
        return g
    };
    __.lang.each = __.each;
    __.lang.all = function(f, e, h) {
        var g;
        if (!f) {
            return true
        }
        if (h) {
            for (g in f) {
                if (f.hasOwnProperty(g)&&!e(f[g], g)) {
                    return false
                }
            }
        } else {
            if (typeof f === "string" || typeof f.length !== "number" || f.tagName || f === __.global) {
                f = [f]
            }
            g = 0;
            for (h = f.length; g < h; ++g) {
                if (!e(f[g], g)) {
                    return false
                }
            }
        }
        return true
    };
    __.lang.find = function(f, e, h) {
        var g;
        if (!f) {
            return - 1
        }
        if (h) {
            for (g in f) {
                if (f.hasOwnProperty(g) && e(f[g], g)) {
                    return g
                }
            }
        } else {
            if (typeof f === "string" || typeof f.length !== "number" || f.tagName || f === __.global) {
                f = [f]
            }
            g = 0;
            for (h = f.length; g < h; ++g) {
                if (e(f[g], g)) {
                    return g
                }
            }
        }
        return - 1
    };
    __.lang.findByAttr = function(f, e, h, g) {
        return __.lang.find(f, function(a) {
            return a && a[e] === h
        }, g)
    };
    __.lang.any = function(f, e, h) {
        var g;
        if (!f) {
            return false
        }
        if (h) {
            for (g in f) {
                if (f.hasOwnProperty(g) && e(f[g], g)) {
                    return true
                }
            }
        } else {
            if (typeof f === "string" || typeof f.length !== "number" || f.tagName || f === __.global) {
                f = [f]
            }
            g = 0;
            for (h = f.length; g < h; ++g) {
                if (e(f[g], g)) {
                    return true
                }
            }
        }
        return false
    };
    __.lang.reduce = function(f, e, h, g) {
        __.each(f, function(b, a) {
            h = e(h, b, a)
        }, g);
        return h
    };
    __.lang.map = function(f, e, h) {
        var g = [];
        __.each(f, function(b, a) {
            g[a] = e(b)
        }, h);
        return g
    };
    __.lang.a = function(e) {
        var d, f;
        if (!e) {
            return []
        }
        d = e.length || 0;
        for (f = Array(d); d--;) {
            f[d] = e[d]
        }
        return f
    };
    __.lang.w = function(b) {
        if (!__.lang.isString(b)) {
            return []
        }
        return (b = __.lang.trim(b)) ? b.split(__.lang.getReg("\\s+")) : []
    };
    __.lang.unique = function(d, c) {
        return __.lang.reduce(d, function(f, b, a) {
            if (0 === a || (c ? f[f.length - 1] !== b : !__.lang.inArray(b, f, true))) {
                f.push(b)
            }
            return f
        }, [])
    };
    __.lang.inArray = function(e, d) {
        var f = false;
        __.each(d, function(b, a) {
            if (b === e) {
                f = f === false ? [] : f;
                f.push(a)
            }
        });
        return f
    };
    __.lang.arrayRemove = function(f, e, h) {
        var g = f.length;
        e = f < 0 ? parseInt(e, 10) + g : e;
        h = h < 0 ? parseInt(h, 10) + g : h;
        if (h < e || e >= g || h >= g) {
            return false
        }
        h = f.slice((h || e) + 1 || f.length);
        f.length = e < 0 ? f.length + e : e;
        return f.push.apply(f, h)
    };
    __.lang.absorb = function(e, d) {
        var f = [];
        __.each(e, function(a) {
            f.push(a[d])
        });
        return f
    };
    __.lang.curry = function(d) {
        var c;
        d = typeof d === "string" && __.lang.OPER[d] ? __.lang.OPER[d] : d;
        c = __.lang.a(arguments);
        c.shift();
        return function() {
            return d.apply(null, c.concat(__.lang.a(arguments)))
        }
    };
    __.lang.compose = function(d, c) {
        return function() {
            return d(c.apply(null, arguments))
        }
    };
    __.lang.negate = function(b) {
        return function() {
            return !b.apply(null, arguments)
        }
    };
    __.lang.keys = function(d) {
        var c = [];
        __.each(d, function(b, a) {
            c.push(a)
        }, true);
        return c
    };
    __.lang.values = function(d) {
        var c = [];
        __.each(d, function(a) {
            c.push(a)
        }, true);
        return c
    };
    __.lang.clone = function(e) {
        var d, f;
        if (e === null || typeof e !== "object") {
            return e
        }
        d = new e.constructor;
        for (f in e) {
            if (e.hasOwnProperty(f)) {
                d[f] = __.lang.clone(e[f])
            }
        }
        return d
    };
    __.lang.mergeObj = function() {
        var f, e, h, g = {};
        for (h = __.lang.a(arguments); (e = h.shift()) !== void 0;) {
            for (f in e) {
                if (e.hasOwnProperty(f)) {
                    g[f] = e[f]
                }
            }
        }
        return g
    };
    __.lang.trim = function(e) {
        var d, f;
        e = e.replace(__.lang.getReg("^\\s\\s*"), "");
        d = __.lang.getReg("\\s");
        for (f = e.length - 1; d.test(e.charAt(f));) {
            f--
        }
        return e.slice(0, f + 1)
    };
    __.lang.truncate = function(i, h, n, m) {
        var l, k = i.length, j = 0;
        h = h || 30;
        n = n === void 0 ? "..." : n;
        if (m !== void 0 && k > h / 2) {
            m = 0;
            for (l = n.length; m < l; m++) {
                j += n.charCodeAt(m) > 255 ? 2 : 1
            }
            for (m = 0; m < k; m++) {
                j += i.charCodeAt(m) > 255 ? 2 : 1;
                if (j > h) {
                    break
                }
            }
            i = i.substring(0, m) + n
        } else {
            i = i.length > h ? i.slice(0, h - n.length) + n : String(i)
        }
        return i
    };
    __.lang.strRepeat = function(e, d) {
        var f = [];
        __.each(__.lang.range(d), function() {
            f.push(e)
        });
        return f.join("")
    };
    __.lang.baseConvert = function(e, d, f) {
        if (!e ||!d) {
            return false
        }
        e = String(e).toLowerCase();
        if (f === void 0) {
            f = __.lang.startWith(e, "0x") ? 16 : __.lang.startWith(e, "0") ? 8 : 10
        }
        e = parseInt(e, f);
        return e.toString(d)
    };
    __.lang.stripTags = function(b) {
        return b.replace(__.lang.getReg("<\\/?[^>]+>", "gi"), "")
    };
    __.lang.camelize = function(f) {
        var e, h = f.split("_"), g = h.length;
        if (g === 1) {
            return h[0]
        }
        e = f.charAt(0) === "_" ? h[0].charAt(0).toUpperCase() + h[0].substring(1) : h[0];
        for (f = 1; f < g; ++f) {
            e += h[f].charAt(0).toUpperCase() + h[f].substring(1)
        }
        return e
    };
    __.lang.underscore = function(b) {
        return b.replace(__.lang.getReg("([A-Z]+)([A-Z][a-z])", "g"), "$1_$2").replace(__.lang.getReg("([a-z\\d])([A-Z])", "g"), "$1_$2").toLowerCase()
    };
    __.lang.capitalize = function(b) {
        return b.charAt(0).toUpperCase() + b.substring(1).toLowerCase()
    };
    __.lang.sprintf = function(d) {
        for (var c = 1; arguments[c] !== void 0;) {
            d = d.replace(__.lang.getReg("%s"), arguments[c++])
        }
        return d
    };
    __.lang.startWith = function(d, c) {
        return d.indexOf(c) === 0
    };
    __.lang.beginWith = __.lang.startWith;
    __.lang.endWith = function(e, d) {
        var f = e.length - d.length;
        return f >= 0 && e.lastIndexOf(d) === f
    };
    __.lang.greplace = function(i, h, n) {
        var m, l = __.lang.getReg(h, "g"), k = __.lang.getReg(h), j = "";
        __.each(i.match(l), function(b, a) {
            m = i.indexOf(b) + b.length;
            j += i.substring(0, m).replace(k, n(b, a));
            i = i.substring(m)
        });
        return j + i
    };
    __.lang.rand = function(d, c) {
        if (c === void 0) {
            c = d;
            d = 0
        }
        return Math.round(Math.random() * (c - d)) + d
    };
    __.lang.getReg = function() {
        var d = {}, c;
        c = function(f, b) {
            var a = f + (b || "");
            d[a] || (d[a] = RegExp(f, b));
            return d[a]
        };
        c.purge = function() {
            d = {}
        };
        return c
    }();
    __.lang.log = function() {
        var d = 0, c = 0;
        return __.global.console ? function() {
            var f, b, a;
            if (__.isDebug()) {
                f = (new Date).getTime();
                a = __.global.console;
                b = d || f;
                d = f;
                f=++c + ",(" + f + ",+" + (f - b) + "ms): ";
                b = __.lang.a(arguments);
                b.unshift(f);
                a.log.apply ? a.log.apply(a, b) : a.log(b.join(" "))
            }
        } : __.lang.EF
    }();
    __.lang.toCall = function(h, g, l) {
        var k, j, i = false;
        l = l || 1000;
        j = typeof g === "function" ? g : function() {
            var a = false;
            if (__.get(g) !== void 0) {
                a = true
            }
            return a
        };
        if (!i && j()) {
            i = true;
            h()
        } else {
            k = setInterval(function() {
                if (!i && j()) {
                    i = true;
                    clearInterval(k);
                    h()
                }
            }, l)
        }
    }
});
__.BasicModule.register("dom", "0.4.0", ["lang"], function() {
    __.exportPath("__.dom");
    __.dom.id = function(b) {
        return typeof b === "string" ? __.doc.getElementById(b) : b
    };
    __.dom.$ = function(b) {
        return (b = __.dom.id(b)) ? [b] : []
    };
    __.dom.f = __.dom.id;
    __.dom.hasClass = function(d, c) {
        return __.lang.getReg("(?:^|\\s+)" + c + "(?:\\s+|$)").test(d.className)
    };
    __.dom.addClass = function(d, c) {
        if (!__.dom.hasClass(d, c)) {
            d.className = __.lang.trim([d.className, c].join(" "))
        }
    };
    __.dom.remClass = function(d, c) {
        if (c && __.dom.hasClass(d, c)) {
            d.className = __.lang.trim(d.className.replace(__.lang.getReg("(?:^|\\s+)" + c + "(?:\\s+|$)"), " "));
            __.dom.hasClass(d, c) && __.dom.remClass(d, c)
        }
    };
    __.dom.getElementsByClassName = function() {
        return __.doc.getElementsByClassName ? function(d, c) {
            return d.getElementsByClassName(c)
        } : function(v, u) {
            var s, r, t, p;
            t = u.split(" ");
            var q = [], o = v.all ? v.all: v.getElementsByTagName("*"), m, n = [], l;
            s = 0;
            for (r = t.length; s < r; s += 1) {
                q.push(__.lang.getReg("(^|\\s)" + t[s] + "(\\s|$)"))
            }
            s = 0;
            for (r = o.length; s < r; s += 1) {
                m = o[s];
                l = false;
                t = 0;
                for (p = q.length; t < p; t += 1) {
                    l = q[t].test(m.className);
                    if (!l) {
                        break
                    }
                }
                l && n.push(m)
            }
            return n
        }
    }();
    __.dom.insertBefore = function(d, c) {
        c.parentNode && c.parentNode.insertBefore && c.parentNode.insertBefore(d, c)
    };
    __.dom.insertAfter = function(d, c) {
        c.nextSibling ? c.parentNode.insertBefore(d, c.nextSibling) : c.parentNode.appendChild(d)
    };
    __.dom.addEl = function(r, q, o) {
        var n, p, l, m, k, i;
        if (!r) {
            return false
        }
        k = function(a) {
            __.dom.addClass(n, a)
        };
        i = function(a) {
            __.dom.addEl(a, n)
        };
        if (__.lang.isArray(r)) {
            m = __.doc.createDocumentFragment();
            __.each(r, function(a) {
                __.dom.addEl(a, m)
            });
            if (q = __.dom.id(q)) {
                if (o) {
                    q.innerHTML = ""
                }
                m = q.appendChild(m)
            }
            return m
        }
        if (r._t) {
            r.tag = "_text";
            r.text = r._t
        }
        p = r.tag;
        if (!p && q && q.tagName) {
            switch (q.tagName.toLowerCase()) {
            case"table":
            case"tbody":
                p = "tr";
                break;
            case"tr":
                p = "td";
                break;
            case"ul":
                p = "li";
                break;
            case"select":
                p = "option"
            }
        }
        p = p || "div";
        if (__.ua.ie && (p === "input" || p === "select") && r.name) {
            n = __.doc.createElement("<input name=" + r.name + ">")
        } else {
            if (p === "_text") {
                n = __.doc.createTextNode(r.text);
                r = {}
            } else {
                n = __.doc.createElement(p)
            }
        }
        if (!n) {
            return false
        }
        for (l in r) {
            if (r.hasOwnProperty(l)) {
                p = r[l];
                switch (l) {
                case"cls":
                    __.each(p, k);
                    break;
                case"child":
                    __.each(p, i);
                    break;
                case"text":
                    n.appendChild(__.doc.createTextNode(p));
                    break;
                case"css":
                    n.style.cssText = p;
                    break;
                case"html":
                    n.innerHTML = p;
                    break;
                case"attrs":
                    __.each(p, function(b, a) {
                        n.setAttribute(a, b)
                    }, true);
                    break;
                default:
                    n[l] = p
                }
            }
        }
        if ((q = __.dom.f(q)) && q.appendChild) {
            if (o) {
                q.innerHTML = ""
            }
            n = q.appendChild(n)
        }
        return n
    };
    __.dom.remEl = function(e) {
        var c, f = function(a) {
            a = __.dom.$(a);
            __.each(a, function(b) {
                b && b.parentNode && b.parentNode.removeChild(b)
            })
        };
        if (__.lang.isArray(e)) {
            for (c = e.length - 1; c>-1; c--) {
                f(e[c])
            }
        } else {
            f(e)
        }
    };
    __.dom.addText = function(d, c) {
        d.appendChild(__.doc.createTextNode(c))
    };
    __.dom.fillText = function(d, c) {
        d.innerHTML = "";
        __.dom.addText(d, c)
    };
    __.dom.addStyle = function(d) {
        var c;
        if (__.doc.createStyleSheet) {
            c = __.doc.createStyleSheet("");
            c.cssText = d
        } else {
            __.dom.addEl({
                tag: "style",
                textContent: d
            }, __.doc.getElementsByTagName("head")[0])
        }
        d = __.doc.styleSheets;
        return d[d.length - 1]
    };
    __.dom.addRules = function(e, c) {
        var f;
        if (!c) {
            if (!__.dom._style) {
                __.dom._style = __.dom.addStyle("")
            }
            c = __.dom._style
        }
        f = c.insertRule ? function(b) {
            var d = c, a = [];
            __.each(b, function(k, i) {
                a[i] = [d.cssRules.length];
                try {
                    d.insertRule(k, d.cssRules.length)
                } catch (g) {}
            });
            return a
        } : c.addRule ? function(b) {
            var d = c, a = [];
            __.each(b, function(i, g) {
                i = i.split(__.lang.getReg("[{}]"));
                a[g] = [];
                __.each(i[0].split(/\s*,\s*/), function(h) {
                    a[g].push(d.rules.length);
                    d.addRule(h, i[1], d.rules.length)
                })
            });
            return a
        } : __.lang.EF;
        __.dom.addRules = f;
        return f(e)
    };
    __.dom.remRules = function(f, c) {
        var h = c || __.dom._style || __.doc.styleSheets[0], g;
        if (h.deleteRule) {
            g = true
        } else {
            if (h.removeRule) {
                g = false
            } else {
                return 
            }
        }
        __.each(f, function(a) {
            g ? h.deleteRule(a) : h.removeRule(a)
        })
    };
    __.dom.getScrollXY = function() {
        var b = function(a) {
            a = "scroll" + a;
            return Math.max(__.doc.documentElement[a], __.doc.body[a])
        };
        return [b("Left"), b("Top")]
    };
    __.dom.getPosition = function(e, c) {
        for (var f = 0; e&&!__.lang.isEmpty(e.offsetParent);) {
            f += e[c];
            e = e.offsetParent
        }
        f += parseInt(__.doc.body[c], 10);
        return f
    };
    __.dom.v = function(b) {
        if (b = __.dom.f(b)) {
            return b.value
        }
        return false
    };
    __.dom.getWindowXY = function() {
        var e = __.global.innerHeight, c = __.global.innerWidth, f = __.doc.compatMode;
        if (f || __.ua.ie) {
            if (f === "CSS1Compat") {
                e = __.ua.opera ? e : __.doc.documentElement.clientHeight;
                c = __.doc.documentElement.clientWidth
            } else {
                e = __.ua.opera ? e : __.doc.body.clientHeight;
                c = __.doc.body.clientWidth
            }
        }
        return [c, e]
    };
    __.dom.getDocumentXY = function() {
        var e, c, f;
        if (__.doc.compatMode !== "CSS1Compat" || __.ua.webkit) {
            e = __.doc.body.scrollWidth;
            c = __.doc.body.scrollHeight
        } else {
            e = __.doc.documentElement.scrollWidth;
            c = __.doc.documentElement.scrollHeight
        }
        f = __.dom.getWindowXY();
        return [Math.max(e, f[0]), Math.max(c, f[1])]
    };
    __.dom.setCenter = function(g) {
        var f = __.dom.getWindowXY(), i = __.dom.getScrollXY(), h = g.offsetWidth || g.clientWidth || parseInt(g.style.width, 10), j = g.offsetHeight || g.clientHeight || parseInt(g.style.height, 10);
        g.style.position = "absolute";
        g.style.left = (f[0] - h) / 2 + i[0] + "px";
        f = (f[1] - j) / 2 + i[1];
        g.style.top = (f < 50 ? 50 : f) + "px"
    };
    __.dom.getOpacity = function(f) {
        var c;
        if (__.lang.isUndefined(f.style.opacity)) {
            c = 100;
            try {
                c = f.filters["DXImageTransform.Microsoft.Alpha"].opacity
            } catch (h) {
                try {
                    c = f.filters("alpha").opacity
                } catch (g) {}
            }
            c/=100
        } else {
            c = f.style.opacity;
            c = c === "" ? "1" : c
        }
        return c
    };
    __.dom.setOpacity = function(d, c) {
        if (!__.lang.isUndefined(d.style.opacity)) {
            d.style.opacity = c
        }
        if (__.lang.isString(d.style.filter)) {
            d.style.filter = "alpha(opacity=" + (c * 100).toFixed(0) + ")";
            if (!d.currentStyle ||!d.currentStyle.hasLayout) {
                d.style.zoom = 1
            }
        }
    };
    __.dom.contains = function(d, c) {
        if (d.contains && c.nodeType == __.lang.NODE_TYPE.ELEMENT_NODE) {
            return d == c || d.contains(c)
        }
        if (typeof d.compareDocumentPosition != "undefined") {
            return d == c || Boolean(d.compareDocumentPosition(c) & 16)
        }
        for (; c && d != c;) {
            c = c.parentNode
        }
        return c == d
    }
});
__.BasicModule.register("event", "0.4.0", ["lang"], function() {
    __.exportPath("__.event");
    __.event.listeners = 0;
    __.event._allEvents = {};
    __.event._getEl = function(b) {
        return __.lang.isString(b) ? __.dom ? __.dom.$(b) : __.doc.getElementById(b) : b
    };
    __.event.on = function(j, p, n, o) {
        var e, m, l, k;
        if (j = __.event._getEl(j)) {
            if (__.lang.isArray(j)) {
                __.each(j, function(a) {
                    __.event.on(a, p, n, o)
                })
            } else {
                if (__.lang.isArray(p)) {
                    __.each(p, function(a) {
                        __.event.on(j, a, n, o)
                    })
                } else {
                    l = __.getUid(j);
                    e = __.event._allEvents;
                    e[p] = e[p] || {};
                    e = e[p];
                    e[l] = e[l] || [];
                    l = e[l];
                    for (e = 0; e < l.length; e++) {
                        if (l[e].listener == n) {
                            return 
                        }
                    }
                    if (p.indexOf(":")>-1) {
                        m = "dataavailable";
                        e = function(a) {
                            a = a || __.global.event;
                            if (!a.target) {
                                a.target = a.srcElement
                            }
                            if (a.eventName === p) {
                                return n(a)
                            }
                            return true
                        }
                    } else {
                        m = p;
                        e = function(a) {
                            a = a || __.global.event;
                            if (!a.target) {
                                a.target = a.srcElement
                            }
                            return n(a)
                        }
                    }
                    k = {
                        type: m,
                        listener: n,
                        proxy: e
                    };
                    if (j.addEventListener) {
                        j.addEventListener(m, e, !!o)
                    } else {
                        j.attachEvent && j.attachEvent("on" + m, e)
                    }
                    l.push(k);
                    __.event.listeners++
                }
            }
        }
    };
    __.event.off = function(i, n, l, m) {
        var e, k, j;
        if (i = __.event._getEl(i)) {
            if (__.lang.isArray(i)) {
                __.each(i, function(a) {
                    __.event.off(a, n, l, m)
                })
            } else {
                e = __.getUid(i);
                if (j = (__.event._allEvents[n] || {})[e]) {
                    for (e = 0; e < j.length; e++) {
                        if (j[e].listener == l) {
                            k = j[e];
                            j.splice(e, 1);
                            break
                        }
                    }
                }
                if (k) {
                    if (i.removeEventListener) {
                        i.removeEventListener(k.type, k.proxy, !!m)
                    } else {
                        i.detachEvent && i.detachEvent("on" + k.type, k.proxy)
                    }
                    __.event.listeners--
                }
            }
        }
    };
    __.event.fire = function(g, j, h) {
        var i, e = __.event._getEl(g);
        if (__.lang.isArray(e)) {
            __.each(e, function(a) {
                __.event.fire(a, j, h)
            })
        } else {
            e = e || __.doc;
            if (e === __.doc && __.doc.createEvent&&!e.dispatchEvent) {
                e = __.doc.documentElement
            }
            if (e.dispatchEvent || e.fireEvent) {
                if (__.doc.createEvent) {
                    i = __.doc.createEvent("HTMLEvents");
                    i.initEvent("dataavailable", true, true)
                } else {
                    i = __.doc.createEventObject();
                    i.eventType = "ondataavailable"
                }
                i.eventName = j;
                i.memo = h || {};
                __.doc.createEvent ? e.dispatchEvent(i) : e.fireEvent(i.eventType, i)
            } else {
                if (e = __.event._allEvents[j]) {
                    if (e = e[__.getUid(g)]) {
                        i = {
                            eventType: j,
                            eventName: j,
                            target: g,
                            memo: h
                        };
                        for (g = 0; g < e.length; g++) {
                            e[g].listener(i)
                        }
                    }
                }
            }
            return i
        }
    };
    __.event.stopPropagation = function(b) {
        if (b.stopPropagation) {
            b.stopPropagation()
        } else {
            b.cancelBubble = true
        }
    };
    __.event.preventDefault = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        } else {
            b.returnValue = false
        }
    };
    __.event.stopEvent = function(b) {
        __.event.preventDefault(b);
        __.event.stopPropagation(b)
    };
    __.event.bind = function(b, d) {
        return function() {
            b.apply(d, __.lang.a(arguments))
        }
    };
    __.event.onReady = function(b) {
        var d = __.event.onReady;
        d._bindReady();
        d._isReady ? b.call(__.global) : d._readyList.push(function() {
            return b.call(__.global)
        })
    };
    __.event.onReady._readyList = [];
    __.event.onReady._isReady = false;
    __.event.onReady._isBound = false;
    __.event.onReady._hlReady = function() {
        var b = __.event.onReady;
        if (!b._isReady) {
            b._isReady = true;
            __.each(b._readyList, function(a) {
                a()
            });
            b._readyList = null
        }
    };
    __.event.onReady._bindReady = function() {
        var b = this, d;
        if (!b._isBound) {
            b._isBound = true;
            if (__.doc.readyState) {
                if (__.doc.readyState === "complete") {
                    b._hlReady();
                    return 
                }
            }
            if (__.ua.ie) {
                b._domReadyId = setInterval(function() {
                    try {
                        __.doc.documentElement.doScroll("left");
                        clearInterval(b._domReadyId);
                        b._domReadyId = null;
                        b._hlReady()
                    } catch (a) {}
                }, 50)
            } else {
                __.doc.addEventListener("DOMContentLoaded", b._hlReady, false)
            }
            d = __.global.onload;
            __.global.onload = typeof d !== "function" ? b._hlReady : function() {
                b._hlReady();
                d()
            }
        }
    }
});
__.BasicModule.register("cookie", "0.4.0", [], function() {
    __.exportPath("__.cookie");
    __.cookie.get = function(g) {
        var h = __.doc.cookie, l = g + "=", k = h.indexOf("; " + l), j;
        if (k===-1) {
            k = h.indexOf(l);
            if (k !== 0) {
                return ""
            }
        } else {
            k += 2
        }
        g = h.indexOf(";", k);
        if (g===-1) {
            g = h.length
        }
        h = h.substring(k + l.length, g);
        try {
            j = decodeURIComponent(h)
        } catch (i) {
            j = h
        }
        return j
    };
    __.cookie.del = function(e, f, h) {
        var g = e + "=";
        if (__.cookie.get(e)) {
            if (f) {
                g += "; path=" + f
            }
            if (h) {
                g += "; domain=" + h
            }
            g += "; expires=Thu, 01-Jan-70 00:00:01 GMT";
            __.doc.cookie = g
        }
    };
    __.cookie.set = function(d, e, f) {
        f = f || {};
        d = d + "=" + encodeURIComponent(e);
        if (f.expires) {
            e = f.expires;
            e.toGMTString || (e = new Date(e));
            d += "; expires=" + e.toGMTString()
        }
        if (f.path) {
            d += "; path=" + f.path
        }
        if (f.domain) {
            d += "; domain=" + f.domain
        }
        if (f.secure) {
            d += "; secure"
        }
        __.doc.cookie = d
    }
});
__.BasicModule.register("selector", "0.4.0", ["lang", "dom"], function() {
    __.exportPath("__.selector");
    __.dom.$ = function(f, d, g) {
        var h;
        if (f) {
            if (f.nodeType) {
                h = [f]
            } else {
                if (f.item) {
                    h = [];
                    d = 0;
                    for (g = f.length; d < g; ++d) {
                        h.push(f[d])
                    }
                } else {
                    if (__.lang.isString(f)) {
                        h = (h = d ? null : __.dom.id(f)) ? [h] : __.selector.query(f, d, g)
                    } else {
                        h = [f]
                    }
                }
            }
        } else {
            h = []
        }
        return h
    };
    __.dom.f = function() {
        return __.dom.$.apply(__.dom, __.lang.a(arguments))[0]
    };
    __.selector.query = function() {
        return __.doc.querySelectorAll ? function(f, d, g) {
            var h = [];
            if (d&&!d.nodeName) {
                d = __.dom.f(d);
                if (!d) {
                    return h
                }
            }
            d = d || __.doc;
            if (g) {
                h[0] = d.querySelector(f)
            } else {
                g = d.querySelectorAll(f);
                f = 0;
                for (d = g.length; f < d; ++f) {
                    h.push(g[f])
                }
            }
            return h
        } : function(B, A, x) {
            var z, y, u, v, w, t, s, r, q, p, o;
            z = [];
            if (!B) {
                return z
            }
            B = __.lang.trim(B);
            y = __.lang.trim(B).split(",");
            if (y.length > 1) {
                B = 0;
                for (v = y.length; B < v; ++B) {
                    u = __.selector.query(y[B], A, x);
                    if (x && u.length > 1) {
                        z[0] = u[0];
                        break
                    } else {
                        z = z.concat(u)
                    }
                }
                return z
            }
            if (A&&!A.nodeName) {
                A = __.dom.f(A);
                if (!A) {
                    return z
                }
            }
            A = A || __.doc;
            A = [A];
            x = B.split(" ");
            r = false;
            y = 0;
            for (u = x.length; y < u; y++) {
                B = x[y];
                if (B === ">") {
                    r = true
                } else {
                    z = [];
                    w = B.match(__.lang.getReg("^([^.#]+)"));
                    t = B.match(__.lang.getReg("#([^.#]+)"));
                    s = (B = B.match(__.lang.getReg("\\.[^.#]+", "g"))) ? B.join(" ").replace(__.lang.getReg("\\.", "g"), "") : "";
                    if (t) {
                        z = (z = __.dom.id(t[1])) ? [z] : [];
                        w = w ? w[1] : null
                    } else {
                        if (w || B) {
                            B = 0;
                            for (v = A.length; B < v; ++B) {
                                q = w ? A[B].getElementsByTagName(w[1]) : __.dom.getElementsByClassName(A[B], s);
                                if (r) {
                                    p = 0;
                                    for (o = q.length; p < o; p++) {
                                        q[p].parentNode === A[B] && z.push(q[p])
                                    }
                                } else {
                                    z = z.concat(__.lang.a(q))
                                }
                            }
                            s = w ? s : null;
                            w = null
                        }
                    }
                    z = __.selector._nodeFilter(z, {
                        tagname: w,
                        classname: s
                    });
                    if (t && z[0]) {
                        t = false;
                        B = 0;
                        for (v = A.length; B < v; ++B) {
                            w = A[B];
                            if (r ? z[0].parentNode === w : w === __.doc || __.dom.contains(z[0], w)) {
                                t = true;
                                break
                            }
                        }
                        t || (z = [])
                    }
                    r = false;
                    A = z;
                    if (A.length === 0) {
                        break
                    }
                }
            }
            return A
        }
    }();
    __.selector._nodeFilter = function(t, s) {
        var p, r, q, m, n, o, l, k;
        t = __.lang.unique(t);
        if (s.tagname) {
            p = [];
            r = __.lang.getReg("\\b" + s.tagname + "\\b", "i");
            q = 0;
            for (m = t.length; q < m; ++q) {
                r.test(t[q].tagName) && p.push(t[q])
            }
            t = p
        }
        if (s.classname) {
            p = [];
            n = s.classname.split(" ");
            r = [];
            q = 0;
            for (m = n.length; q < m; ++q) {
                r.push(__.lang.getReg("(^|\\s)" + n[q] + "(\\s|$)"))
            }
            q = 0;
            for (m = t.length; q < m; ++q) {
                k = t[q];
                l = false;
                n = 0;
                for (o = r.length; n < o; n++) {
                    l = r[n].test(k.className);
                    if (!l) {
                        break
                    }
                }
                l && p.push(k)
            }
            t = p
        }
        return t
    }
});
if (!this.JSON) {
    this.JSON = {}
}(function() {
    function j(c) {
        return c < 10 ? "0" + c : c
    }
    function o(c) {
        p.lastIndex = 0;
        return p.test(c) ? '"' + c.replace(p, function(f) {
            var b = r[f];
            return typeof b === "string" ? b : "\\u" + ("0000" + f.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"' : '"' + c + '"'
    }
    function m(c, f) {
        var b, d, g, k, i = h, e, a = f[c];
        if (a && typeof a === "object" && typeof a.toJSON === "function") {
            a = a.toJSON(c)
        }
        if (typeof l === "function") {
            a = l.call(f, c, a)
        }
        switch (typeof a) {
        case"string":
            return o(a);
        case"number":
            return isFinite(a) ? String(a) : "null";
        case"boolean":
        case"null":
            return String(a);
        case"object":
            if (!a) {
                return "null"
            }
            h += n;
            e = [];
            if (Object.prototype.toString.apply(a) === "[object Array]") {
                k = a.length;
                for (b = 0; b < k; b += 1) {
                    e[b] = m(b, a) || "null"
                }
                g = e.length === 0 ? "[]" : h ? "[\n" + h + e.join(",\n" + h) + "\n" + i + "]" : "[" + e.join(",") + "]";
                h = i;
                return g
            }
            if (l && typeof l === "object") {
                k = l.length;
                for (b = 0; b < k; b += 1) {
                    d = l[b];
                    if (typeof d === "string") {
                        if (g = m(d, a)) {
                            e.push(o(d) + (h ? ": " : ":") + g)
                        }
                    }
                }
            } else {
                for (d in a) {
                    if (Object.hasOwnProperty.call(a, d)) {
                        if (g = m(d, a)) {
                            e.push(o(d) + (h ? ": " : ":") + g)
                        }
                    }
                }
            }
            g = e.length === 0 ? "{}" : h ? "{\n" + h + e.join(",\n" + h) + "\n" + i + "}" : "{" + e.join(",") + "}";
            h = i;
            return g
        }
    }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + j(this.getUTCMonth() + 1) + "-" + j(this.getUTCDate()) + "T" + j(this.getUTCHours()) + ":" + j(this.getUTCMinutes()) + ":" + j(this.getUTCSeconds()) + "Z" : null
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        }
    }
    var q = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, p = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, h, n, r = {
        "": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, l;
    if (typeof JSON.stringify !== "function") {
        JSON.stringify = function(c, f, b) {
            var d;
            n = h = "";
            if (typeof b === "number") {
                for (d = 0; d < b; d += 1) {
                    n += " "
                }
            } else {
                if (typeof b === "string") {
                    n = b
                }
            }
            if ((l = f) && typeof f !== "function" && (typeof f !== "object" || typeof f.length !== "number")) {
                throw Error("JSON.stringify")
            }
            return m("", {
                "": c
            })
        }
    }
    if (typeof JSON.parse !== "function") {
        JSON.parse = function(c, f) {
            function b(g, k) {
                var i, e, a = g[k];
                if (a && typeof a === "object") {
                    for (i in a) {
                        if (Object.hasOwnProperty.call(a, i)) {
                            e = b(a, i);
                            if (e !== undefined) {
                                a[i] = e
                            } else {
                                delete a[i]
                            }
                        }
                    }
                }
                return f.call(g, k, a)
            }
            var d;
            q.lastIndex = 0;
            if (q.test(c)) {
                c = c.replace(q, function(g) {
                    return "\\u" + ("0000" + g.charCodeAt(0).toString(16)).slice( - 4)
                })
            }
            if (/^[\],:{}\s]*$/.test(c.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                d = eval("(" + c + ")");
                return typeof f === "function" ? b({
                    "": d
                }, "") : d
            }
            throw new SyntaxError("JSON.parse")
        }
    }
})();
typeof __ != "undefined"&&!__.Json && function() {
    __.json = {
        toJson: function(a) {
            return JSON.stringify(a)
        },
        fromJson: function(a) {
            return JSON.parse(a)
        }
    }
}();
__.BasicModule.register("disposable", "0.4.0", [], function() {
    __.Disposable = function() {
        __.Disposable._instances[__.getUid(this)] = this
    };
    __.Disposable._instances = {};
    __.Disposable.getUndisposedObjects = function() {
        var b = [];
        __.each(__.Disposable._instances, function(d, a) {
            b.push(__.Disposable._instances[a])
        }, true);
        return b
    };
    __.Disposable.disposeAll = function() {
        __.each(__.Disposable._instances, function(b) {
            b.dispose()
        }, true)
    };
    __.Disposable.prototype._disposed = false;
    __.Disposable.prototype.isDisposed = function() {
        return this._disposed
    };
    __.Disposable.prototype.dispose = function() {
        if (!this._disposed) {
            this._disposed = true;
            this.disposeInternal();
            delete __.Disposable._instances[__.getUid(this)]
        }
    };
    __.Disposable.prototype.disposeInternal = function() {}
});
__.BasicModule.register("clientstore", "0.4.0", ["lang"], function() {
    __.exportPath("__.clientStore");
    __.clientStore._inited = false;
    __.clientStore._store = null;
    __.clientStore._searchOrder = ["localStorage", "userData", "globalStorage"];
    __.clientStore._engines = {
        localStorage: {
            test: function() {
                return __.global.localStorage ? true : false
            },
            init: function() {
                __.clientStore._store = __.global.localStorage
            },
            get: function(b) {
                return __.clientStore._store.getItem(b)
            },
            set: function(d, c) {
                return __.clientStore._store.setItem(d, c)
            },
            del: function(b) {
                return __.clientStore._store.removeItem(b)
            }
        },
        globalStorage: {
            test: function() {
                return __.global.globalStorage ? true : false
            },
            init: function() {
                __.clientStore._store = __.global.globalStorage[__.doc.domain]
            },
            get: function(b) {
                return __.clientStore._store.getItem(b).value
            },
            set: function(d, c) {
                return __.clientStore._store.setItem(d, c)
            },
            del: function(b) {
                return __.clientStore._store.removeItem(b)
            }
        },
        userData: {
            test: function() {
                return __.global.ActiveXObject ? true : false
            },
            init: function() {
                try {
                    __.clientStore._store = __.doc.documentElement;
                    __.clientStore._store.addBehavior("#default#userdata")
                } catch (b) {}
            },
            get: function(e) {
                var d;
                try {
                    __.clientStore._store.load(e);
                    d = __.clientStore._store.getAttribute(e)
                } catch (f) {
                    d = ""
                }
                return d
            },
            set: function(e, d) {
                try {
                    __.clientStore._store.load(e);
                    __.clientStore._store.setAttribute(e, d);
                    __.clientStore._store.save(e)
                } catch (f) {}
            },
            del: function(d) {
                try {
                    __.clientStore._store.load(d);
                    __.clientStore._store.expires = (new Date(315532799000)).toUTCString();
                    __.clientStore._store.save(d)
                } catch (c) {}
            }
        }
    };
    __.clientStore._init = function() {
        var d;
        __.clientStore._inited = true;
        if (__.lang.find(__.clientStore._searchOrder, function(a) {
            d = __.clientStore._engines[a];
            return d.test()
        })!==-1) {
            try {
                d.init();
                delete d.test;
                delete d.init;
                __.extend(__.clientStore, d, true)
            } catch (c) {}
        }
    };
    __.clientStore.set = function() {
        if (!__.clientStore._inited) {
            __.clientStore._init();
            return __.clientStore.set.apply(__.clientStore, __.lang.a(arguments))
        }
    };
    __.clientStore.get = function() {
        if (!__.clientStore._inited) {
            __.clientStore._init();
            return __.clientStore.get.apply(__.clientStore, __.lang.a(arguments))
        }
    };
    __.clientStore.del = function() {
        if (!__.clientStore._inited) {
            __.clientStore._init();
            return __.clientStore.del.apply(__.clientStore, __.lang.a(arguments))
        }
    }
});
__.BasicModule.register("widget", "2.0.0", ["disposable"], function() {
    __.exportPath("__.widget");
    __.widget.Base = function() {
        __.Disposable.call(this);
        this.cssRules && this._addCssRules(this.cssRules)
    };
    __.inherits(__.widget.Base, __.Disposable);
    __.widget.Base.prototype.cssRules = "";
    __.widget.Base.prototype.disposeInternal = function() {
        __.widget.Base._super.disposeInternal.call(this);
        if (this.cssRules) {
            __.dom.remRules(this.cssRules);
            delete this.cssRules
        }
    };
    __.widget.Base.prototype._addCssRules = function(b) {
        this._cssRuleIds = __.dom.addRules(b)
    };
    __.widget.Base.prototype._READYSTATE = 1;
    __.widget.Base.prototype._EVENT_READYSTATE_CHANGE = "readystatechange";
    __.widget.Base.prototype._readystate_ = 0;
    __.widget.Base.prototype._changeReadyState = function(b) {
        if (this._readystate_ != b) {
            __.event.fire(this, this._EVENT_READYSTATE_CHANGE, {
                oldState: this._readystate_,
                newState: b
            });
            this._readystate_ = b;
            if (this._readystate_ == this._READYSTATE) {
                this.onReady()
            }
        }
    };
    __.widget.Base.prototype._onReady_ = [];
    __.widget.Base.prototype.onReady = function(b) {
        __.lang.isFunction(b) && this._onReady_.push(b);
        this._readystate_ == this._READYSTATE && __.each(this._onReady_, function(a) {
            a()
        })
    }
});
__.BasicModule.register("fn-table", "2.0.0", ["lang", "dom"], function() {
    __.exportPath("__.fnTable");
    __.fnTable.mapNumMarket = {
        0: "jj",
        1: "sh",
        51: "sz",
        100: "hk",
        200: "us"
    };
    __.fnTable.findNextEl = function(b) {
        for (; ;) {
            b = b.nextSibling;
            if (!b || b.nodeType === 1) {
                break
            }
        }
        return b
    };
    __.fnTable.getPageUrl = function(d, c) {
        var e = "";
        d = String(d);
        switch (String(c)) {
        case"":
        case"0":
            if (d.length > 5) {
                e = "http://stockhtm.finance.qq.com/fund/djj_jjcx/" + d + ".htm"
            }
            break;
        case"1":
            e = d.substr(0, 3) === "000" ? "http://stockhtm.finance.qq.com/hqing/zhishu/" + d + ".htm" : "http://stockhtm.finance.qq.com/sstock/ggcx/" + d + ".shtml";
            break;
        case"51":
            e = d.substr(0, 2) === "39" ? "http://stockhtm.finance.qq.com/hqing/zhishu/" + d + ".htm" : "http://stockhtm.finance.qq.com/sstock/ggcx/" + d + ".shtml";
            break;
        case"100":
            if (d.length <= 5) {
                e = "http://stockhtm.finance.qq.com/hk/ggcx/" + d + ".htm"
            }
            break;
        case"200":
            if (d.substr(0, 1) === ".") {
                d = d.substr(1)
            }
            e = "http://stockhtm.finance.qq.com/astock/ggcx/" + d.toUpperCase() + ".htm";
            break;
        case"300":
            e = "http://stockhtm.finance.qq.com/if/ggcx/" + d.toUpperCase() + ".shtml";
            break;
        case"350":
            e = "http://stockhtm.finance.qq.com/money/future/quotpage/f/" + d.toUpperCase() + ".htm"
        }
        return e || "http://finance.qq.com/"
    };
    __.fnTable.fill = function(z, y, u, x) {
        var w, v, t, l, r, p, h, s, q;
        x = x || {};
        p = __.lang.isBoolean(x.cloneTr) ? x.cloneTr : true;
        h = __.lang.isInt(x.lineCount) ? x.lineCount : Infinity;
        y = __.dom.f(y);
        if (p) {
            s = y.cloneNode(true);
            s.id = ""
        }
        v = y;
        if (__.lang.isObject(z)) {
            z = __.lang.values(z)
        }
        q = [];
        if (__.lang.isString(z)) {
            __.each(z.split(","), function(b) {
                var a = __.global["v_" + b];
                q.push(a ? a.split("~") : b)
            })
        } else {
            if (__.lang.isArray(z)) {
                __.each(z, function(a) {
                    if (__.lang.isString(a)) {
                        a = (a = __.global["v_" + a] || a) && a.split("~")
                    }
                    q.push(a)
                })
            } else {
                return 
            }
        }
        z = q;
        y = 0;
        for (w = z.length; y < w && y < h; y++) {
            l = true;
            if (!__.lang.isObject(z[y]) && (!__.lang.isArray(z[y]) || z[y].length < 2)) {
                if (x.showError) {
                    z[y] = []
                } else {
                    l = false
                }
            }
            if (l) {
                if (!v) {
                    if (p) {
                        v = s.cloneNode(true);
                        t.parentNode.insertBefore(v, t.nextSibling)
                    } else {
                        break
                    }
                }
                t = v;
                l = z[y];
                if (y%2 === 0 && x.evenTr) {
                    v.style.cssText = x.evenTr
                } else {
                    if (y%2 === 1 && x.oddTr) {
                        v.style.cssText = x.oddTr
                    }
                }
                r = t.firstChild;
                r = r.nodeType === 1 ? r : __.fnTable.findNextEl(r);
                for (v = 0; r;) {
                    r.innerHTML = __.fnTable.process(u[v], l, v, r, y);
                    r = __.fnTable.findNextEl(r);
                    v++
                }
                v = __.fnTable.findNextEl(t)
            }
        }
    };
    __.fnTable.clear = function(e) {
        var d, g, h;
        if (e) {
            if (e.tagName === "TABLE") {
                e = e.getElementsByTagName("tr")[0]
            }
            for (g = e; g;) {
                d = g;
                g = __.fnTable.findNextEl(d);
                if (d !== e) {
                    __.dom.remEl(d)
                } else {
                    d = d.firstChild;
                    d = d.nodeType === 1 ? d : __.fnTable.findNextEl(d);
                    for (h = 0; d;) {
                        d.innerHTML = "";
                        d = __.fnTable.findNextEl(d);
                        h++
                    }
                }
            }
        }
    };
    __.fnTable.fastFill = function(B, A, w, z) {
        var y, x, v, p, s, q, l, t, r, u = [];
        v = false;
        z = z || {};
        __.lang.isUndefined(z.cloneTr);
        l = __.lang.isUndefined(z.lineCount) ? Infinity : z.lineCount;
        r = __.lang.isUndefined(z.trProcessor) ? false : z.trProcessor;
        y = A.parentNode.innerHTML.toLowerCase();
        y = y.substring(y.indexOf("<tr"), y.indexOf("</tr>") + 5);
        s = [];
        t = y.indexOf("<td");
        x = y.indexOf("<th");
        if (x < t && x>-1) {
            t = x;
            v = true
        }
        for (s.push(y.substr(0, t)); t >= 0;) {
            y = y.substr(t);
            t = y.indexOf(">");
            s.push(y.substr(0, t + 1));
            t = y.indexOf(v ? "</th>" : "</td>");
            if (t===-1) {
                break
            }
            y = y.substr(t + 5);
            t = y.indexOf("<td");
            x = y.indexOf("<th");
            if (x>-1 && (x < t || t===-1)) {
                t = x;
                v = true
            } else {
                v = false
            }
        }
        if (__.lang.isObject(B)) {
            B = __.lang.values(B)
        }
        t = [];
        if (__.lang.isString(B)) {
            __.each(B.split(","), function(a) {
                var b = __.global["v_" + a];
                t.push(b ? b.split("~") : a)
            })
        } else {
            if (__.lang.isArray(B)) {
                __.each(B, function(a) {
                    if (__.lang.isString(a)) {
                        a = (a = __.global["v_" + a] || a) && a.split("~")
                    }
                    t.push(a)
                })
            } else {
                return 
            }
        }
        B = t;
        y = 0;
        for (x = B.length; y < x && y < l; y++) {
            v = true;
            if (!__.lang.isArray(B[y]) || B[y].length < 2) {
                if (z.showError) {
                    B[y] = []
                } else {
                    v = false
                }
            }
            if (v) {
                q = B[y];
                v = 0;
                for (p = s.length; v < p; ++v) {
                    if (v === 0) {
                        u.push(r ? r(y) : s[v])
                    } else {
                        u.push(s[v]);
                        t = __.fnTable.process(w[v - 1], q, v - 1, void 0, y);
                        u.push((t === void 0 ? "" : t) + "</td>")
                    }
                }
            }
        }
        A.parentNode.parentNode.parentNode.innerHTML = "<table><tbody>" + u.join("") + "</tbody></table>";
        w = A = null
    };
    __.fnTable.process = function(i, h, k, n, m) {
        var l;
        if (h.length === 1) {
            l = "--";
            if (__.lang.isFunction(i)) {
                try {
                    l = i(h, k, n, m)
                } catch (j) {}
            } else {
                if (__.lang.isString(i)&&!__.lang.isFunction(__.fnTable.processors[i])) {
                    l = i
                }
            }
        } else {
            l = __.lang.isFunction(i) ? i(h, k, n, m) : __.lang.isFunction(__.fnTable.processors[i]) ? __.fnTable.processors[i](h, k, n) : !__.lang.isUndefined(h[i]) ? h[i] : __.lang.isString(i) ? i : h[k];
            if (l === "" || l === void 0 || l === null) {
                l = "--"
            }
        }
        return l
    };
    __.fnTable.processors = {
        R_PRICE: function(d, c) {
            return __.fnTable.processors.GET_COLOR(d[3], d[2], c)
        },
        S_PRICE: function(d, c) {
            return __.fnTable.processors.GET_COLOR(d[3], d[4], c)
        },
        L_PRICE: function(d, c) {
            return __.fnTable.processors.GET_COLOR(d[3], d[32], c)
        },
        L_CHANGE: function(b) {
            return __.fnTable.processors.GET_SIGNED_COLOR(b[31], b[31])
        },
        S_PERCENT: function(b) {
            return __.fnTable.processors.GET_PERCENT(b[5])
        },
        L_PERCENT: function(b) {
            return __.fnTable.processors.GET_PERCENT(b[32])
        },
        TITLE: function(b) {
            return __.fnTable.processors.GET_TITLE(b[2], b[0], b[1], false, "_blank")
        },
        GET_COLOR: function(d, c, e) {
            return c > 0 ? '<span style="color:#fe0002">' + d + "</span>" : c < 0 ? '<span style="color:#009900">' + d + "</span>" : e !== false ? '<span style="color:#000">' + d + "</span>" : d
        },
        GET_SIGNED_COLOR: function(d, c, e) {
            return __.fnTable.processors.GET_COLOR((c > 0 ? "+" : "") + d, c, e)
        },
        GET_PERCENT: function(d, c) {
            return __.lang.isNumber(Number(d)) && d !== "" && d !== "-" ? __.fnTable.processors.GET_COLOR((d > 0 ? "+" : "") + d + "%", d, c) : "--"
        },
        GET_TITLE: function(i, h, k, n, m) {
            var l, j;
            k = k.replace(__.lang.getReg("[\\s\u3000]*", "ig"), "");
            n = n ? Math.ceil(n / 2) * 2 : 8;
            m = m || "";
            l = n / 2;
            j = k;
            if (k.length > l) {
                for (j = 0; j < n; j++) {
                    k.charCodeAt(j) > 255 && n > l && n--
                }
                j = k.substring(0, n)
            }
            return '<a href="' + __.fnTable.getPageUrl(i, h) + '" title="' + k + "(" + i + ')"' + (m ? ' target="' + m + '"' : "") + ">" + j + "</a>"
        }
    };
    __.fnTable.sort = function(x, w, s, v) {
        var u = __.dom.f(x), t = __.dom.$("tr", u), r = [], k = __.lang.getReg("^\\s+$"), p = {}, l, h = null, q = function(a) {
            a = a.cloneNode(true);
            var b = [];
            if (a && a.nodeType === __.lang.NODE_TYPE.TEXT_NODE) {
                k.test(a.nodeValue) || b.push(a.nodeValue)
            } else {
                a && a.nodeType === __.lang.NODE_TYPE.ELEMENT_NODE && a.hasChildNodes() && __.each(a.childNodes, function(c) {
                    b.push(q(c))
                })
            }
            return b.join("")
        };
        s = s === false ? false : true;
        __.each(t, function(b, c) {
            var a;
            if (v) {
                r[c] = v[c]
            } else {
                a = q(b.childNodes[w]).replace("%", "");
                a = parseFloat(a);
                r[c] = isNaN(a) ? 0 : a
            }
            if (p[r[c]]) {
                p[r[c]].push(c)
            } else {
                p[r[c]] = [c]
            }
            __.dom.addClass(b, "du-table-sort-" + c)
        });
        __.each(r.sort(s ? __.lang.OPER["-"] : __.lang.OPER["-2"]), function(b) {
            try {
                var c = "du-table-sort-" + p[b].pop();
                l = __.dom.f("." + c, u);
                h ? __.dom.insertAfter(l, h) : __.dom.insertBefore(l, t[0].parentNode.firstChild);
                __.dom.remClass(l, c);
                h = l
            } catch (a) {}
        })
    };
    __.fnTable.load = function(d, c) {
        var e = "http://qt.gtimg.cn/r=" + Math.random() + "q=";
        d = __.lang.isArray(d) ? d.join(",") : d;
        __.load(e + d, c, {
            charset: "gbk",
            cache: true
        })
    };
    __.fnTable.pFill = function(g, e, h) {
        var j, i;
        __.lang.isString(g) && __.each(g.split(","), function(a) {
            if (__.global["v_" + a]) {
                if (__.lang.isString(g)) {
                    g = [__.global["v_" + a]]
                } else {
                    g.push(__.global["v_" + a])
                }
            }
        });
        __.each(g, function(b, a) {
            b = b.split("~");
            __.each(h, function(f, d) {
                if (j = __.dom.f([e, a, d].join("-"))) {
                    try {
                        i = __.fnTable.process(f, b, d, j)
                    } catch (c) {
                        i = "--"
                    }
                    j.innerHTML = i
                }
            })
        })
    };
    __.fnTable.getFloatByLength = function(g, e) {
        var h, j, i = parseFloat(g);
        g = String(g);
        h = g.length;
        j = g.indexOf(".");
        return h <= e ? g : j <= 0 || j >= e ? i.toFixed(0) : i.toFixed(e - j - 1)
    }
});
__.BasicModule.register("fn-cronloader", "2.0.0", ["lang", "dom", "fn-table", "clientstore"], function() {
    __.FnCronLoader = function(b) {
        b = b || {};
        if (b.pushBases) {
            __.FnCronLoader.pushBases = b.pushBases
        }
        if (b.pushDummy) {
            __.FnCronLoader.pushDummy = b.pushDummy
        }
        this._maxCount = b.max || 172800;
        this._autoCache = b.autoCache === true ? true : false;
        this._idIntv = null;
        this.stop()
    };
    __.FnCronLoader.version = "2.0.0";
    __.FnCronLoader.QT_LIMIT = 60;
    __.FnCronLoader.PUSH_LIMIT = 60;
    __.FnCronLoader.NO_MATCH = "pv_none_match";
    __.FnCronLoader.TIME_OUT = "pv_timeout";
    __.FnCronLoader.defaultInterval = 5;
    __.FnCronLoader.pushDummy = "./pushiframe.html";
    __.FnCronLoader.pushBases = ["http://push1.gtimg.cn/q=", "http://push2.gtimg.cn/q=", "http://push3.gtimg.cn/q="];
    __.FnCronLoader._pushInited = false;
    __.FnCronLoader._pushIfrCtn = null;
    __.FnCronLoader._aIframes = [];
    __.FnCronLoader.prototype._jobUidIdx = 0;
    __.FnCronLoader.prototype._fastCount = 0;
    __.FnCronLoader.prototype._defSendDelay = 100;
    __.FnCronLoader.prototype.pushSessions = [];
    __.FnCronLoader._initPush = function() {
        this._pushInited = true;
        this._pushIfrCtn = __.dom.addEl({
            css: "position:absolute;visibility:hidden;top:0;left:0;height:0;width:0;"
        }, __.doc.body)
    };
    __.FnCronLoader._createIfr = function() {
        var b = __.dom.addEl({
            tag: "iframe",
            id: "du-push-ifr" + this._aIframes.length,
            css: "height:0;width:0;border:0;"
        }, this._pushIfrCtn);
        this._aIframes.push(b);
        return b
    };
    __.FnCronLoader._getIframe = function(e) {
        var f, c = this._aIframes;
        f = __.lang.findByAttr(c, "className", "");
        f = f===-1 ? this._createIfr() : c[f];
        if (e ||!f.src) {
            f.src = this._getDummySrc()
        }
        f.className = "active";
        return f
    };
    __.FnCronLoader._getDummySrc = function() {
        return this.pushDummy + "?_u=" + new Date%100000 + Math.random()
    };
    __.FnCronLoader._purgeIframe = function(b, c) {
        if (b) {
            b.className = "";
            if (c) {
                if (b.contentWindow) {
                    b.contentWindow.__ = null
                }
                b.src = this._getDummySrc()
            }
        }
    };
    __.FnCronLoader.setCache = function(b) {
        var c =+ new Date;
        __.each(b, function(a, d) {
            __.clientStore.set("du-cl~" + d, c + "~" + a)
        }, true)
    };
    __.FnCronLoader.getCache = function(h, k) {
        var e, l, j, i = {};
        k = parseInt(k, 10);
        if (!__.lang.isInt(k) || k < 0) {
            k = 0
        }
        e =+ new Date;
        __.each(h, function(a) {
            j = null;
            if (l = __.clientStore.get("du-cl~" + a)) {
                l = l.split("~");
                if (k === 0 || e - l[0] <= k) {
                    l.shift();
                    j = l.join("~")
                }
            }
            i[a] = j
        });
        return i
    };
    __.FnCronLoader.prototype._getPushBase = function() {
        var b = __.FnCronLoader.pushBases.length, c = parseInt(__.clientStore.get("du_push_id"), 10);
        b = __.lang.isInt(c) ? (c + 1)%b : __.lang.rand(b);
        __.clientStore.set("du_push_id", String(b));
        return __.FnCronLoader.pushBases[b]
    };
    __.FnCronLoader.prototype.getJobById = function(f, g) {
        var e, h;
        if (g === true) {
            e = this.jobs[0];
            h = __.lang.isArray(e) ? __.lang.findByAttr(e, "id", f) : - 1;
            if (h===-1) {
                return null
            }
        } else {
            e = this.jobs[f.split("-")[1]];
            h = __.lang.isArray(e) ? __.lang.findByAttr(e, "id", f) : - 1;
            if (h===-1) {
                return this.getJobById(f, true)
            }
        }
        return e[h]
    };
    __.FnCronLoader.prototype._doPolling = function(v) {
        var s = this, u = [], t, q = true, p = this.pollingCount, r = [], o = [], k = [], h = {}, l = function() {
            if (u.length > 0) {
                t = u.splice(__.FnCronLoader.QT_LIMIT, u.length);
                __.fnTable.load(u.join(","), l);
                u = t
            } else {
                __.each(r, function(c) {
                    var b = "v_" + c, a;
                    a = __.global[b];
                    if (a !== void 0 && a !== null) {
                        h[c] = a;
                        __.global[b] = null
                    }
                });
                s._onDataLoaded(h, k)
            }
        };
        v ? __.each(this.jobs[v.split("-")[1]], function(b) {
            var a;
            if (b.id === v) {
                a = b.judge(0);
                if (b && (a & 1) === 1 && b.keys) {
                    q = false;
                    r = r.concat(b.keys)
                }(a & 2) === 2 && k.push(v)
            }
        }) : __.each(this.jobs, function(b, a) {
            a > 0 && p%a === 0 && __.each(b, function(c) {
                var d;
                d = c.judge(p);
                if ((d & 1) === 1 && c.keys) {
                    q = false;
                    r = r.concat(c.keys)
                }(d & 2) === 2 && k.push(c.id)
            })
        }, true);
        if (!q || o.length > 0) {
            if (r.length === 0) {
                l()
            } else {
                r = __.lang.unique(r);
                u = r.slice(0);
                t = u.splice(__.FnCronLoader.QT_LIMIT, u.length);
                __.fnTable.load(u.join(","), l);
                u = t
            }
        }
    };
    __.FnCronLoader.prototype._consumePushJob = function() {
        var h, k, e = [], l = __.FnCronLoader.PUSH_LIMIT, j, i;
        for (__.each(this.jobs[0], function(a) {
            __.lang.isUndefined(a.sessionId) && e.push(a.id)
        }); e.length;) {
            h = [];
            for (k = []; e.length;) {
                i = this.getJobById(e[0], true);
                if (i.keys.length >= l) {
                    if (h.length) {
                        break
                    }
                    j || (j = __.lang.a(i.keys));
                    k.push(i.id);
                    if (j.length > l) {
                        h = j.splice(0, l);
                        break
                    } else {
                        h = j;
                        j = null;
                        e.shift()
                    }
                } else {
                    if (i.keys.length + h.length <= l) {
                        e.shift();
                        h = h.concat(i.keys);
                        k.push(i.id)
                    } else {
                        break
                    }
                }
            }
            this._updateSession(this._assignSession(h, k))
        }
    };
    __.FnCronLoader.prototype._assignSession = function(h, k) {
        var e, l, j, i = this;
        e = __.lang.find(this.pushSessions, function(a) {
            l = [];
            l = __.lang.unique(l.concat(a.keys).concat(h));
            return l.length <= __.FnCronLoader.PUSH_LIMIT
        });
        if (e===-1) {
            e = this.pushSessions.length;
            this.pushSessions.push({
                keys: h,
                ids: k,
                id: e
            })
        } else {
            j = this.pushSessions[e];
            j.ids = j.ids.concat(k);
            j.keys = l
        }
        __.each(k, function(a) {
            a = i.getJobById(a);
            if (a.sessionId) {
                a.sessionId.push(e)
            } else {
                a.sessionId = [e]
            }
        });
        return e
    };
    __.FnCronLoader.prototype._updateSession = function(g, i) {
        var e, j, h;
        h = this.jobs[0];
        j = this.pushSessions[g];
        if (i) {
            e = [];
            __.each(j.ids, function(a) {
                e.push(h[a].keys)
            });
            e = __.lang.unique(e);
            j.keys = e
        } else {
            e = j.keys
        }
        j.running = true;
        j.iframe = null;
        j.url = this._getPushBase() + e.join(",") + "&m=push&r=" + + new Date%100000 + __.lang.rand(10000);
        this._sendPushReq(g)
    };
    __.FnCronLoader.prototype._sendPushReq = function(h) {
        var k, e, l = this, j = __.FnCronLoader.NO_MATCH, i = __.FnCronLoader.TIME_OUT;
        e = this.pushSessions[h];
        if (!(this._paused ||!e ||!e.running || this.pushCount > this._maxCount)) {
            if (__.ua.webkit) {
                k = e.iframe;
                delete e.iframe
            }
            if (!e.iframe) {
                e.iframe = __.FnCronLoader._getIframe()
            }
            e.pushCount=++this.pushCount;
            __.lang.toCall(function() {
                var c = e.iframe.contentWindow, b, a;
                if (!c ||!c.__) {
                    l._paused || l._delayPushReq(h);
                    l = e = c = null
                } else {
                    b =+ new Date;
                    c.reqCount = e.pushCount;
                    a = c.__;
                    a.load(e.url, function() {
                        var f = {}, d;
                        if (!(l._paused ||!e ||!e.running)) {
                            if (c[j] === 1) {
                                c[j] = 0;
                                throw Error("No data for:" + e.keys.join(","))
                            } else {
                                if (c[i] === 1) {
                                    c[i] = 0;
                                    l._delayPushReq(h)
                                } else {
                                    if (c.reqCount === e.pushCount) {
                                        if (new Date - b < 1000) {
                                            l._fastCount++
                                        } else {
                                            l._fastCount = 0
                                        }
                                        __.each(e.keys, function(g) {
                                            d = "pv_" + g;
                                            if (c[d] !== void 0 && c[d] !== null) {
                                                f[g] = c[d];
                                                c[d] = void 0
                                            }
                                        });
                                        l._onDataLoaded(f, e.ids, e.id);
                                        l._delayPushReq(h);
                                        l = e = f = a = c = null
                                    }
                                }
                            }
                        }
                    }, {
                        charset: "gbk",
                        cache: true
                    });
                    if (k) {
                        __.FnCronLoader._purgeIframe(k, true);
                        k = null
                    }
                }
            }, function() {
                var b;
                try {
                    b = e.iframe.contentWindow && e.iframe.contentWindow.__
                } catch (a) {}
                return !!b
            }, 100)
        }
    };
    __.FnCronLoader.prototype._delayPushReq = function(f) {
        var g = this, e = this._defSendDelay;
        e*=Math.pow(2, Math.floor(this._fastCount / 2));
        try {
            setTimeout(function() {
                g._sendPushReq(f)
            }, e)
        } catch (h) {}
    };
    __.FnCronLoader.prototype._onDataLoaded = function(i, m, h) {
        var n, k, j = this, l = __.lang.isInt(h);
        k = l ? j.pushCount : j.pollingCount;
        this._autoCache && __.FnCronLoader.setCache(i);
        __.each(m, function(a) {
            if (n = j.getJobById(a, l)) {
                if (n && n.onData) {
                    if (!n.__created || l&&!n.__created[h]) {
                        n.onData(i, k);
                        if (l) {
                            n.__created[h] = true
                        } else {
                            n.__created = true
                        }
                        n.runOnce && j.remJob(n.id)
                    } else {
                        if (n.onUpdate) {
                            n.onUpdate(i, k)
                        } else {
                            n.onData(i, k)
                        }
                    }
                }
            }
        })
    };
    __.FnCronLoader.prototype._addPolling = function(f) {
        var g = f && f.judge, e, h = this;
        if (__.lang.isUndefined(f.judge)) {
            g = f.interval;
            f.judge = g
        }
        if (g && __.lang.isInt(f.judge) && g > 0) {
            f.judge = function(a) {
                if (a%g === 0) {
                    return 3
                }
                return 0
            }
        }
        e = parseInt(f.interval, 10);
        this.jobs[e] || (this.jobs[e] = []);
        this.jobs[e].push(f);
        f.noWait && setTimeout(function() {
            h._doPolling(f.id)
        }, 0)
    };
    __.FnCronLoader.prototype._addPush = function(b) {
        this.jobs[0] || (this.jobs[0] = []);
        b.__created = [];
        this.jobs[0].push(b);
        this._paused || this._consumePushJob()
    };
    __.FnCronLoader.prototype._remPushJob = function(h) {
        var k, e, l, j;
        k = false;
        var i = this;
        if (this.jobs[0]) {
            e = __.lang.findByAttr(this.jobs[0], "id", h);
            if (e>-1) {
                k = this.jobs[0][e];
                __.lang.arrayRemove(this.jobs[0], e);
                __.lang.isArray(k.sessionId) && __.each(k.sessionId, function(a) {
                    l = i.pushSessions[a];
                    j = __.lang.find(l.ids, function(b) {
                        return b === h
                    });
                    if (j>-1) {
                        __.lang.arrayRemove(l.ids, j);
                        if (l.ids.length === 0) {
                            l.running = false;
                            l.keys = [];
                            __.FnCronLoader._purgeIframe(l.iframe)
                        } else {
                            i._updateSession(a, true)
                        }
                    }
                });
                delete k.onData;
                delete k.onUpdate;
                k = true
            }
        }
        return k
    };
    __.FnCronLoader.prototype.isPushUsable = function() {
        return true
    };
    __.FnCronLoader.prototype.addJob = function(b) {
        var c;
        if (b.keys) {
            if (__.lang.isString(b.keys)) {
                b.keys = b.keys.split(",")
            }
            b.keys = __.lang.unique(b.keys)
        }
        if (__.lang.isUndefined(b.interval)) {
            b.interval = __.FnCronLoader.defaultInterval
        }
        c=++this._jobUidIdx;
        b.id = c + "-" + b.interval;
        if (b.type === 2 ||!this.isPushUsable() ||!b.keys || b.keys.length === 0) {
            this._addPolling(b)
        } else {
            __.FnCronLoader._pushInited || __.FnCronLoader._initPush();
            this._addPush(b)
        }
        return b.id
    };
    __.FnCronLoader.prototype.remJob = function(e) {
        var f, c;
        c = false;
        f = e.split("-")[1];
        if (this.jobs[f]) {
            c = __.lang.findByAttr(this.jobs[f], "id", e);
            if (c>-1) {
                __.lang.arrayRemove(this.jobs[f], c);
                c = true
            } else {
                c = this._remPushJob(e)
            }
        }
        return c
    };
    __.FnCronLoader.prototype.start = function() {
        if (this.pollingCount===-1) {
            this._paused = false;
            this.pollingCount++;
            this._doPolling();
            this._consumePushJob()
        }
        this.resume()
    };
    __.FnCronLoader.prototype.pause = function() {
        if (this._idIntv !== null) {
            clearInterval(this._idIntv);
            this._idIntv = null
        }
        this._paused = true
    };
    __.FnCronLoader.prototype.resume = function() {
        var b = this;
        if (this._idIntv === null) {
            this._idIntv = setInterval(function() {
                b.pollingCount++;
                b._doPolling()
            }, 1000)
        }
        this._paused = false
    };
    __.FnCronLoader.prototype.stop = function() {
        this.pause();
        this.jobs = {};
        this.pushCount = this.pollingCount =- 1;
        this._jobUidIdx = 0;
        __.dom.remEl(this._aIframes)
    }
});
__.BasicModule.register("select", "2.0", ["lang", "dom", "selector", "event", "cookie", "widget"], function() {
    var a;
    __.widget.Select = function(d, c) {
        this._initCfg(c);
        this.id = d;
        this.listDisplaying = false;
        this.values = {};
        this.value = this._config.defaultValue;
        this.lastActiveItem = null;
        if (!c.name) {
            this._config.name = d + "_select"
        }
        this._createEls();
        this._initEls();
        this._addEvents()
    };
    __.inherits(__.widget.Select, __.widget.Base);
    a = __.widget.Select;
    a.prototype._cfg = {
        txt: {
            wrongValue: "the value to be set is wrong"
        },
        cls: {
            container: "du-select-ctn",
            icon: "du-select-icon",
            value: "du-select-value",
            list: "du-select-list",
            item: "du-select-item",
            active: "du-select-active",
            input: "du-select-input"
        },
        status: {},
        defInstCfg: {
            width: 45,
            height: 20,
            lineHeight: 13,
            borderColor: "#d0cece",
            bgColor: "#fff",
            items: {
                1: "item 1",
                2: "item 2"
            },
            zIndex: 100,
            defaultValue: 1,
            ctnZindex: 1,
            fontsize: 13,
            bgSrc: "http://mat1.gtimg.com/finance/stock/qq_panel/qq_bg2.gif",
            bgNormal: "-33px -64px",
            bgActive: "-63px 0",
            onChange: function() {}
        }
    };
    a.prototype._error = function(b) {
        throw Error("du-select: " + b)
    };
    a.prototype._initCfg = function(e) {
        var c, f = 0;
        e = e || {};
        c = this._config = __.lang.clone(this._cfg.defInstCfg);
        __.each(e, function(d, b) {
            c[b] = d
        }, true);
        if (__.lang.isUndefined(e.width)) {
            __.each(e.items, function(b) {
                b = String(b);
                if (b.length > f) {
                    f = b.length
                }
            }, true);
            c.width = f * (c.fontsize + 1) + 18
        }
    };
    a.prototype._initEls = function() {
        var d = __.dom.f(this.id), c = this._cfg.cls;
        this.els = {
            ctn: d,
            innerCtn: __.dom.f("." + c.container, d),
            value: __.dom.f("." + c.value, d),
            icon: __.dom.f("." + c.icon, d),
            list: __.dom.f("." + c.list, d),
            input: __.dom.f("." + c.input, d)
        }
    };
    a.prototype._addEvents = function() {
        var d = __.event.bind, c = this.els;
        d = [d(this._hlMouseOver, this), d(this._hlMouseOut, this), d(this._hlClick, this)];
        __.event.on(c.ctn, "mouseover", d[0]);
        __.event.on(c.ctn, "mouseout", d[1]);
        __.event.on(__.doc, "click", d[2]);
        this._fns = d
    };
    a.prototype._hlMouseOut = function() {
        this.els.icon.style.backgroundPosition = this._config.bgNormal
    };
    a.prototype._hlMouseOver = function(d) {
        d = d.target || d.srcElement;
        var c = this.els;
        if (d === c.value || d === c.icon || d === c.value.parentNode) {
            c.icon.style.backgroundPosition = this._config.bgActive
        } else {
            for (; d !== this.els.ctn;) {
                if (__.dom.hasClass(d, this._cfg.cls.item)) {
                    this.setActive(d);
                    break
                }
                d = d.parentNode
            }
        }
    };
    a.prototype._hlClick = function(d) {
        d = d.target || d.srcElement;
        var c = this.els;
        if (!this.listDisplaying && (d === c.value || d === c.icon || d === c.icon.parentNode)) {
            this.show()
        } else {
            if (__.dom.contains(c.ctn, d)) {
                for (; d && d !== this.els.ctn;) {
                    if (__.dom.hasClass(d, this._cfg.cls.item)) {
                        this.set(__.lang.stripTags(d.innerHTML), true);
                        break
                    }
                    d = d.parentNode
                }
            }
            this.hide()
        }
    };
    a.prototype.setActive = function(b) {
        this.clearActive();
        b.style.background = "#428fdc";
        b.style.color = "#fff";
        this.lastActiveItem = b
    };
    a.prototype.clearActive = function() {
        if (this.lastActiveItem) {
            this.lastActiveItem.style.background = "#fff";
            this.lastActiveItem.style.color = "#000";
            this.lastActiveItem = null
        }
    };
    a.prototype.toggle = function() {
        this.listDisplaying ? this.hide() : this.show()
    };
    a.prototype.show = function() {
        var b = this.els;
        if (!this.listDisplaying) {
            b.list.style.display = "block";
            b.value.style.background = "#428fdc";
            b.value.style.color = "#fff";
            b.innerCtn.style.zIndex = this._config.ctnZindex;
            this.listDisplaying = true
        }
    };
    a.prototype.hide = function() {
        var b = this.els;
        if (this.listDisplaying) {
            b.list.style.display = "none";
            b.value.style.background = "#fff";
            b.value.style.color = "#000";
            b.innerCtn.style.zIndex = "0";
            this.listDisplaying = false
        }
    };
    a.prototype.set = function(f, c) {
        var h, g;
        if (c === true&&!__.lang.isUndefined(this.values[f])) {
            g = f;
            f = this.values[f]
        } else {
            g = this._config.items[f]
        }
        if (__.lang.isUndefined(this._config.items[f])) {
            this._error(this._cfg.txt.wrongValue)
        } else {
            h = this.els.value;
            h.innerHTML = "";
            __.dom.addText(h, g);
            this.value = f;
            this.els.input.value = f;
            if (this._config.onChange) {
                this._config.onChange(f, g)
            }
        }
    };
    a.prototype._createEls = function() {
        var h, c, n, m, k, j = this._config, g = this;
        m = __.ua;
        k = j.width;
        h = [2];
        if (m.ie > 6) {
            h = [3]
        }
        if (m.webkit) {
            h = [1]
        }
        c = [];
        n = this.values;
        __.each(j.items, function(d, b) {
            c.push({
                css: "padding:2px 14px 0 3px;width:" + (k - 21) + "px;background:#fff;",
                cls: g._cfg.cls.item,
                child: {
                    tag: "nobr",
                    css: "",
                    text: d
                }
            });
            n[d] = b
        }, true);
        __.dom.addEl({
            css: "height:" + j.height + "px;width:" + k + "px;cursor:pointer;font-size:" + this._config.fontsize + "px;position:relative;z-index:0;",
            cls: this._cfg.cls.container,
            child: [{
                css: "height:1px;font-size:1px;line-height:0;margin:0 1px;background:" + this._config.borderColor + ";width:" + (k - 2) + "px;overflow:hidden;float:left;display:inline;"
            }, {
                css: "background:" + this._config.bgColor + ";border:1px solid " + this._config.borderColor + ";border-width:0 1px;float:left;",
                child: [{
                    css: "height:1px;font-size:1px;line-height:0;border:1px solid #e3e2e2;border-width:0 1px;border-top-color:#0f0;width:" + (k - 4) + "px;float:left;"
                }, {
                    css: "height:" + (this._config.lineHeight + 3) + "px;float:left;padding-left:1px;width:" + (k - 3) + "px;",
                    child: [{
                        css: "padding:" + h[0] + "px 1px 0 3px;float:left;height:" + this._config.lineHeight + "px;line-height:" + this._config.lineHeight + "px;",
                        cls: this._cfg.cls.value,
                        text: this._config.items[this.value]
                    }, {
                        css: "width:11px;height:" + (this._config.lineHeight + 3) + "px;float:right;background:transparent url(" + j.bgSrc + ") no-repeat " + j.bgNormal + ";margin-right:1px;",
                        cls: this._cfg.cls.icon
                    }, {
                        css: "visibility:hidden;",
                        html: '<input type="hidden" value="' + this._config.defaultValue + '" name="' + this._config.name + '" class="' + this._cfg.cls.input + '"/>'
                    }
                    ]
                }, {
                    css: "height:1px;font-size:1px;line-height:0;border:1px solid #e3e2e2;border-width:0 1px;width:" + (k - 4) + "px;float:left;"
                }
                ]
            }, {
                css: "height:1px;font-size:1px;line-height:0;margin:0 1px;background:" + this._config.borderColor + ";width:" + (k - 2) + "px;float:left;display:inline;overflow:hidden;"
            }, {
                cls: this._cfg.cls.list,
                css: "float:left;position:absolute;left:0px;top:" + (this._config.lineHeight + 5) + "px;display:none;width:" + k + "px;z-index:" + this._config.zIndex,
                child: [{
                    css: "border:1px solid #D0CECE;/*border-bottom:0;*/background:#fff;padding:1px;text-align:left;",
                    child: {
                        tag: "ul",
                        css: "list-style:none;padding:0;margin:0;",
                        child: c
                    }
                }, {}
                ]
            }
            ]
        }, this.id)
    };
    a.prototype.disposeInternal = function() {
        a._super.disposeInternal.call(this);
        __.event.off(this.els.ctn, "mouseover", this._fns[0]);
        __.event.off(this.els.ctn, "mouseout", this._fns[1]);
        __.event.off(__.doc, "click", this._fns[2]);
        this._fns = null;
        this.els.ctn = null;
        this.els.innerCtn = null;
        this.els.value = null;
        this.els.icon = null;
        this.els.list = null;
        this.els = this.els.input = null
    }
});
__.BasicModule.register("fn-smartbox", "2.0", ["lang", "dom", "selector", "event", "cookie", "fn-table"], function() {
    var a;
    __.widget.SmartBox = function(e, c) {
        var b, d = a._cfg;
        c = c || {};
        this.status = d.status.READY;
        this._config = __.lang.clone(d.defInstCfg);
        b = this._config;
        __.each(c, function(g, f) {
            b[f] = g
        }, true);
        b.inputHint = b.inputHint || d.txt.inputHint;
        this.moreCls = d.cls.more + e;
        this.zeroList = false;
        this._errQuery = false;
        this.listQT = "";
        this.loadingQT = "";
        this.showCount = 0;
        this._listJustCreated = false;
        this.form = null;
        this.queryIpt = null;
        this.subIpt = null;
        this.typeIpt = null;
        this.containerId = e;
        this.resultCtnId = e + d.resultCtnIdPostfix;
        this._createEls();
        this._initEls();
        this._initEvents();
        if (this._config.autoFocus) {
            this.queryIpt.select()
        }
    };
    __.inherits(__.widget.SmartBox, __.widget.Base);
    a = __.widget.SmartBox;
    a._cfg = {
        liIdPrefix: "du-sx-li~",
        selectIdPrefix: "du-sx-sel-",
        resultCtnIdPostfix: "-du-sx-result",
        pstockLink: "http://stockapp.finance.qq.com/pstock/",
        hintUrl: "http://smartbox.gtimg.cn/s3/?",
        formActionBase: "http://stock.finance.qq.com/cgi-bin/",
        txt: {
            stocksearch: "\u80a1\u7968\u67e5\u8be2",
            ALL: "\u5168\u90e8",
            GP: "\u6caa\u6df1",
            HK: "\u6e2f\u80a1",
            JJ: "\u57fa\u91d1",
            AS: "\u7f8e\u80a1",
            FT: "\u671f\u8d27",
            check: "\u67e5\u8be2",
            pstock: "\u6211\u7684\u81ea\u9009\u80a1",
            inputHint: "\u4ee3\u7801/\u540d\u79f0/\u62fc\u97f3",
            errHint: "\u60a8\u8f93\u5165\u7684\u67e5\u8be2\u8bcd\u6709\u8bef",
            emptyHint: "\u8bf7\u8f93\u5165\u67e5\u8be2\u6761\u4ef6\uff1a\u4ee3\u7801/\u540d\u79f0/\u62fc\u97f3",
            noResult: "\u672a\u627e\u5230\u7b26\u5408\u6761\u4ef6\u7684\u7ed3\u679c"
        },
        cls: {
            query: "du-sx-query",
            submit: "du-sx-submit",
            select: "du-sx-select",
            type: "du-sx-type",
            li: "du-sx-li",
            more: "du-sx-more-"
        },
        status: {
            READY: 0,
            INITED: 1,
            HIDDEN: 3,
            SHOWN: 4
        },
        typeEnum: ["ALL", "GP", "HK", "JJ", "AS", "FT"],
        typeMap: {
            ALL: "all",
            GP: "gp",
            HK: "hk",
            JJ: "jj",
            AS: "us",
            FT: "qh"
        },
        mktMap: {
            sh: "\u4e0a\u6d77",
            sz: "\u6df1\u5733",
            jj: "\u57fa\u91d1",
            hk: "\u6e2f\u80a1",
            us: "\u7f8e\u80a1",
            qh: "\u671f\u8d27"
        },
        mktNumMap: {
            jj: 0,
            sh: 1,
            sz: 51,
            hk: 100,
            us: 200,
            qh: 350
        },
        defInstCfg: {
            maxLine: 13,
            typeWait: 50,
            showType: true,
            defaultType: "ALL",
            showPLink: true,
            showTitle: true,
            directionUp: false,
            onclick: function(b) {
                if (b.length === 2) {
                    this.onMstats(b[1])
                } else {
                    __.global.open(__.fnTable.getPageUrl(b[1], b[2]) + "?pgv_ref=fi_smartbox&_ver=" + __.BasicModule.loadedMods["fn-smartbox"], this.useSelf ? "_self" : "_blank")
                }
            },
            onsubmit: false,
            onsubmit2: false,
            zindex: 1,
            maxQuery: 10,
            showMarket: true,
            listXOffset: 0,
            listYOffset: 0,
            name: "",
            inputHint: "",
            matchRecent: false,
            autoSelect: false,
            adjustLimit: 2,
            showAll: true,
            sendToBoss: true,
            dataScope: null,
            useSelf: false,
            autoFocus: false,
            preFill: false,
            blurColor: "#B4B3B3",
            onMstats: false,
            iframeMask: false
        }
    };
    a.legalQuery = __.lang.getReg("^[.,0-9a-zA-Z\\u4e00-\\u9fa5]+$");
    a.getRecentCode = function() {
        var d, b, c;
        if (__.lang.isUndefined(this._recentCookieCache)) {
            b = [];
            c = __.fnTable.mapNumMarket;
            d = (__.cookie.get("RECENT_CODE") + __.cookie.get("ASRECENT_CODE")).split("|");
            __.each(d, function(f, e) {
                if (f && b.length < 10) {
                    f = f.split("_");
                    if (f.length > 1&&!__.lang.isUndefined(c[f[1]])) {
                        b.push(c[f[1]] + f[0])
                    } else {
                        if (f.length === 1) {
                            b.push("jj" + f[0])
                        }
                    }
                }
            });
            this._recentCookieCache = b.join(",").toLowerCase()
        }
        return this._recentCookieCache
    };
    a.setHover = function(b) {
        if (this._lastHoverLi && this._lastHoverLi !== b) {
            this._lastHoverLi.style.backgroundColor = "#fff"
        }
        if (b && b.style) {
            b.style.backgroundColor = "#deefff"
        }
        this._lastHoverLi = b
    };
    a.prototype._getLine = function() {
        return {
            tag: "li",
            css: "padding:0;margin:4px 3px;float:left;_display:inline;background:#eaeaea;height:2px;line-height:2px;font-size:0;width:254px;"
        }
    };
    a.prototype._showList = function(s) {
        var g, h, d, o, f, p, b, n, r = [], c = "", q = "", k, l = {}, m = s.split("~"), e = this.cache[s], j = this;
        if (this.listQT === s) {
            __.lang.log("Draw cancelled for the same query.");
            return 
        }
        this.listQT = s;
        n = m[1];
        m = m[0];
        if (this._config.directionUp) {
            h = "push";
            d = "unshift"
        } else {
            h = "unshift";
            d = "push"
        }
        if (!this.resultList) {
            return 
        }
        this.resultList.innerHTML = "";
        b = function(u, t) {
            var i = m.toUpperCase(), v = '<span style="color:#f45243;height:20px;line-height:20px;">' + i + "</span>";
            u = u.toUpperCase();
            if (t && __.lang.endWith(u, i)) {
                u = u.substr(0, u.length - i.length) + v
            } else {
                u = u.replace(i, v)
            }
            return u
        };
        if (this._config.onMstats) {
            if (e[2]) {
                __.each(e[2].split("^"), function(t) {
                    var i = {};
                    t = t.split("~");
                    i.isMstats = true;
                    i.id = t[0];
                    i.col0 = b(t[2]);
                    i.col2 = b(t[0]);
                    i.col1 = b(t[1]);
                    r.push(j._getLiObj(i))
                })
            }
        }
        if (__.lang.isUndefined(e[0])) {
            e[0] = "N"
        }
        __.each(e[0].split("^"), function(i) {
            if (i) {
                q += i + "~Y^"
            }
        });
        q += e[1];
        q = q.split("^");
        __.each(q, function(v, t) {
            var u;
            v = v.split("~");
            u = {};
            if (!v || v.length < 4) {
                return 
            }
            if (r.length >= j._config.maxLine) {
                return 
            }
            u.code = v[1].toUpperCase();
            u.numType = a._cfg.mktNumMap[v[0]];
            u.market = a._cfg.mktMap[v[0]];
            if (v[4] === "QH-IF") {
                u.market = "\u80a1\u671f";
                u.numType = 300
            }
            u.category = v[4];
            u.name = v[2];
            switch (v[4]) {
            case"FJ":
            case"ETF":
                u.market = "\u57fa\u91d1";
                break
            }
            if (u.numType === 200) {
                o = v[1].indexOf(".");
                u.col0 = o > 0 ? v[1].substr(0, o) : v[1]
            } else {
                u.col0 = v[1]
            }
            u.col0 = b(u.col0, true);
            u.col1 = b(v[2]);
            u.col2 = b(v[3]);
            u = j._getLiObj(u);
            if (u) {
                if (c !== v[7] && r.length > 0) {
                    r[d](j._getLine())
                }
                c = v[7];
                if (v[0] + "~" + v[3] === "00700~100") {
                    r[h](u)
                } else {
                    r[d](u)
                }
            }
        });
        if (r.length > 0) {
            if (this._config.showMarket && this._config.showAll) {
                r[d]({
                    tag: "li",
                    css: "padding:0;float:left;_display:inline;text-align:right;width:250px;height:20px;line-height:20px;",
                    child: {
                        tag: "b",
                        text: "\u67e5\u770b\u5168\u90e8",
                        cls: this.moreCls,
                        css: "color:blue;text-decoration:underline;font-weight:normal;cursor:pointer;"
                    }
                })
            }
            if (__.ua.ie === 6) {
                __.dom.f(this.resultCtnId).style.paddingBottom = r.length === 1 ? "0" : "3px"
            }
            __.dom.addEl(r, this.resultList);
            this.zeroList = false;
            a.setHover(this._config.directionUp ? this.resultList.lastChild : this.resultList.firstChild);
            this._listJustCreated = true;
            this.show(true)
        } else {
            this.zeroList = true;
            this._showError(a._cfg.txt.noResult.replace("##query##", m))
        }
    };
    a.prototype._getLiObj = function(f) {
        var c = false, b, g, e, d;
        g = "height:20px;line-height:20px;overflow:hidden;";
        d = this._config.showMarket;
        if (f.numType === 200 && f.col2 === "*") {
            b = d ? [246, 54, 142, 5, 45, 0] : [138, 44, 89, 0, 0, 0];
            e = false
        } else {
            if (f.isMstats) {
                b = [246, 54, 75, 5, 60, 0]
            } else {
                b = d ? [246, 54, 75, 5, 60, 5] : [138, 44, 48, 5, 36, 0];
                e = {
                    tag: "span",
                    css: "float:left;width:" + b[4] + "px;margin-right:" + b[5] + "px;" + g,
                    html: f.col2
                }
            }
        }
        if (d) {
            if (f.isMstats) {
                e = {
                    tag: "span",
                    css: "float:left;width:" + b[4] + "px;margin-right:" + b[5] + "px;" + g,
                    html: f.col2
                };
                c = {
                    tag: "span"
                }
            } else {
                if (f.numType === 1) {
                    if (f.code.substr(0, 1) === "9") {
                        c = 2
                    } else {
                        if (f.code.substr(0, 2) === "58") {
                            c = 1
                        }
                    }
                } else {
                    if (f.numType === 51) {
                        if (f.code.substr(0, 1) === "2") {
                            c = 2
                        } else {
                            if (f.code.substr(0, 2) === "03") {
                                c = 1
                            }
                        }
                    }
                }
                c = {
                    tag: "span",
                    css: "float:right;width:40px;text-align:right;color:#a9a9a9;" + g,
                    text: f.market
                }
            }
        }
        return {
            tag: "li",
            css: "padding:0;margin:0 2px;cursor:pointer;float:left;_display:inline;_margin:0 1px;",
            id: a._cfg.liIdPrefix + (f.isMstats ? f.id : f.code + "~" + f.numType + "~" + (f.category || "") + "~" + f.name),
            cls: a._cfg.cls.li,
            child: {
                css: "margin:0 5px;float:left;_display:inline;width:" + b[0] + "px;" + g,
                child: {
                    tag: "nobr",
                    child: [{
                        tag: "span",
                        css: "float:left;width:" + b[1] + "px;margin-right:5px;" + g,
                        html: f.col0
                    }, {
                        tag: "span",
                        css: "float:left;font-family:Arial;margin-right:" + b[3] + "px;height:20px;line-height:22px;_line-height:23px;overflow:hidden;width:" + b[2] + "px;",
                        html: f.col1
                    }, e, c]
                }
            }
        }
    };
    a.prototype._getListCtn = function(e) {
        var d, f, c, b = __.dom.f(this.resultCtnId);
        c = this._config.showMarket ? 260 : 152;
        if (!b) {
            f = {
                id: this.resultCtnId,
                css: "width:" + c + "px;overflow:hidden;text-align:left;background:#FFF;position:absolute;font-size:12px;visibility:hidden;z-index:" + this._config.zindex,
                child: [{
                    tag: "ul",
                    css: "font-family:Arial;margin:0;padding:0;border:1px solid #9c9c9c;padding:3px 0;list-style:none;overflow:hidden;_zoom:1;"
                }
                ]
            };
            if (__.ua.ie === 6 || this._config.iframeMask) {
                f.child.push({
                    tag: "iframe",
                    css: "width:290px;height:3000px;filter:alpha(opacity=0);position:absolute;top:0;left:-1px;z-index:-1;",
                    frameBorder: "0"
                })
            }
            b = __.dom.addEl(f);
            __.dom.insertBefore(b, __.doc.body.firstChild);
            this.resultList = b.getElementsByTagName("ul")[0];
            d = this.queryIpt;
            b.style.left = __.dom.getPosition(d, "offsetLeft") + this._config.listXOffset + "px";
            b.style.top = __.dom.getPosition(d, "offsetTop") + d.offsetHeight + this._config.listYOffset + 1 + "px"
        } else {
            if (e) {
                d = this.queryIpt;
                b.style.left = __.dom.getPosition(d, "offsetLeft") + this._config.listXOffset + "px";
                b.style.top = __.dom.getPosition(d, "offsetTop") + d.offsetHeight + this._config.listYOffset + 1 + "px"
            }
        }
        return b
    };
    a.prototype._sendRequest = function() {
        var b, f, c, i, g = this.queryIpt, h = this.typeIpt, e = this.cache, d = this;
        f = __.lang.trim(g.value).toLowerCase();
        c = h.value;
        i = f + "~" + c;
        if (this.listQT === i) {
            __.lang.log("same query:" + i);
            return 
        }
        if (this.loadingQT === i) {
            return 
        }
        if (f === "") {
            this.listQT = "";
            this.hide();
            return 
        } else {
            if (!a.legalQuery.test(f)) {
                this.listQT = i;
                this._errQuery = true;
                this._showError();
                return 
            }
        }
        if (e[i]) {
            this._showList(i)
        } else {
            b = a._cfg.hintUrl + "q=" + encodeURIComponent(f) + "&t=" + encodeURIComponent(a._cfg.typeMap[c]);
            if (this._config.onMstats) {
                b += "&c=1"
            }
            if (this._config.matchRecent) {
                b += "&c=" + encodeURIComponent(a.getRecentCode())
            }
            setTimeout(function() {
                var j = d._config.dataScope || __.global;
                if (__.lang.trim(g.value).toLowerCase() === f && d.typeIpt.value === c) {
                    __.lang.log("begin load query:" + f);
                    d.loadingQT = i;
                    __.load(b, function() {
                        __.lang.log("data loaded for " + f + "~" + c);
                        d.loadingQT = "";
                        if (__.lang.trim(g.value).toLowerCase() === f && d.typeIpt.value === c) {
                            e[i] = [j.v_hint_R, j.v_hint];
                            if (d._config.onMstats) {
                                e[i].push(j.v_cate_hint || "")
                            }
                            d._showList(i);
                            __.lang.log("list drawed for " + d.listQT);
                            j.v_cate_hint = undefined;
                            j.v_hint_R = undefined;
                            j.v_hint = undefined
                        }
                    }, {
                        charset: "gbk",
                        cache: true,
                        doc: j.document
                    })
                }
            }, this._config.typeWait)
        }
    };
    a.prototype.cache = {};
    a.prototype._createEls = function() {
        var k, j, d, f = __.dom.f(this.containerId), c = false, i = false, h = false, g = this._config.preFill || this._config.inputHint, b = "ZHENGQUANDM";
        d = this._config.attach;
        if (d) {
            if (!d.form[b]) {
                if (__.ua.ie) {
                    try {
                        j = __.doc.createElement('<input name="' + b + '" type="hidden">')
                    } catch (l) {
                        j = false
                    }
                }
                if (!j) {
                    j = __.doc.createElement("input");
                    j.name = b;
                    j.type = "hidden"
                }
                d.form.appendChild(j)
            }
        } else {
            if (this._config.showType) {
                c = {
                    css: "margin-left:10px;margin-right:2px;_margin-top:1px;float:left;",
                    id: a._cfg.selectIdPrefix + this.containerId
                }
            }
            if (this._config.showPLink) {
                i = {
                    css: "float:left;height:20px;line-height:23px;",
                    child: {
                        tag: "a",
                        text: a._cfg.txt.pstock,
                        href: a._cfg.pstockLink,
                        target: "_blank"
                    }
                }
            }
            if (this._config.showTitle) {
                h = {
                    text: a._cfg.txt.stocksearch,
                    css: "float:left;height:20px;line-height:23px;"
                }
            }
            __.dom.addEl({
                tag: "form",
                target: "_blank",
                css: "float:left;z-index:" + this._config.zindex,
                method: "post",
                child: {
                    tag: "ul",
                    css: "list-style:none;margin:0;padding:0;font-size:12px;font-family:Arial;color:#333333;",
                    child: [h, c, {
                        css: "float:left",
                        html: '<input type="text" style="width:96px;height:16px;padding:2px 0 0 4px;line-height:16px;border:1px solid #D0CECE;vertical-align:top;margin-right:5px;font-size:12px;color:' + this._config.blurColor + ";font-family:Arial;" + (this._config.showType ? "" : "margin-left:5px;") + '" value="' + g + '" class="' + a._cfg.cls.query + '" name="cl" autocomplete="off" maxlength="' + this._config.maxQuery + '" />'
                    }, {
                        css: "float:left;margin-right:15px;display:inline;padding-top:1px;_padding-top:2px;",
                        child: [{
                            tag: "input",
                            type: "submit",
                            css: "width:47px;border:0;cursor:pointer;background:transparent url(http://mat1.gtimg.com/finance/stock/images/smartbox-btn2.png) no-repeat scroll 0px 0px;vertical-align:top;font-size:12px;" + (__.ua.ie ? "height:19px;padding:3px 5px 0;" : "height:19px;padding:0 5px;"),
                            value: a._cfg.txt.check,
                            cls: a._cfg.cls.submit
                        }, {
                            tag: "span",
                            html: '<input type="hidden" name="ZHENGQUANDM"/>' + (this._config.showType ? "" : '<input type="hidden" value="" name="qc_type" class="' + a._cfg.cls.type + '" />')
                        }
                        ]
                    }, i]
                }
            }, f);
            f.style.height = "21px"
        }
        j = f = null
    };
    a.prototype._hlResize = function(d) {
        var c = this.queryIpt, b = this._getListCtn();
        b.style.left = __.dom.getPosition(c, "offsetLeft") + this._config.listXOffset + "px";
        b.style.top = __.dom.getPosition(c, "offsetTop") + c.offsetHeight + 1 + "px";
        this.hide()
    };
    a.prototype._hlScroll = function(c) {
        var b = __.ua;
        if ((b.gecko || b.webkit) && c.target !== __.doc) {
            return 
        }
        this.hide()
    };
    a.prototype._hlFocus = function(c) {
        var d = c.srcElement || c.target, b;
        if (d.value === this._config.inputHint) {
            d.value = ""
        }
        d.style.color = "#333333";
        if (this._config.autoSelect) {
            d.select()
        }
        if (this.status === a._cfg.status.HIDDEN && (this.isQueryChanged() ||!this._config.autoSelect)) {
            this.show()
        }
    };
    a.prototype._hlBlur = function(b) {
        var c = b.srcElement || b.target;
        if (c.value === "") {
            c.style.color = this._config.blurColor;
            c.value = this._config.inputHint
        }
    };
    a.prototype._hlKeyup = function(b) {
        if (!__.lang.inArray(b.keyCode, [13, 27, 38, 40])) {
            __.lang.log("user key up : " + this.queryIpt.value);
            this._errQuery = false;
            this._sendRequest()
        }
    };
    a.prototype._hlKeydown = function(d) {
        var c, b = this.queryIpt;
        if (this.status === a._cfg.status.SHOWN&&!this._errQuery) {
            switch (d.keyCode) {
            case 38:
                if (this.zeroList) {
                    return 
                }
                if (!this.resultList) {
                    return 
                }
                c = a._lastHoverLi && a._lastHoverLi.previousSibling ? a._lastHoverLi.previousSibling : this.resultList.lastChild;
                if (!__.dom.hasClass(c, a._cfg.cls.li)) {
                    c = c.previousSibling ? c.previousSibling : this.resultList.lastChild
                }
                a.setHover(c);
                __.event.stopEvent(d);
                break;
            case 40:
                if (this.zeroList) {
                    return 
                }
                if (!this.resultList) {
                    return 
                }
                c = a._lastHoverLi && a._lastHoverLi.nextSibling ? a._lastHoverLi.nextSibling : this.resultList.firstChild;
                if (!__.dom.hasClass(c, a._cfg.cls.li)) {
                    c = c.nextSibling ? c.nextSibling : this.resultList.firstChild
                }
                a.setHover(c);
                __.event.stopEvent(d);
                break;
            case 27:
                this.hide();
                break;
            case 13:
                this._enterPressed = true;
                break
            }
        } else {
            if (this.status === a._cfg.status.HIDDEN) {
                if (d.keyCode === 38 || d.keyCode === 40 || b.value.length === 1 && b.value.charCodeAt(0) === d.keyCode || d.ctrlKey && d.keyCode === 86) {
                    this.show()
                }
            }
        }
    };
    a.prototype._hlMouseover = function(c) {
        var b = c.relatedTarget ? c.relatedTarget: c.fromElement, d = c.target || c.srcElement;
        while (d && d !== __.doc.documentElement && d.className !== a._cfg.cls.li) {
            d = d.parentNode
        }
        if (d.className === a._cfg.cls.li) {
            a.setHover(d)
        }
    };
    a.prototype._hlDocClick = function(c) {
        var d = c.target || c.srcElement, b;
        if (d === this.subIpt) {
            return 
        }
        if (d === this.queryIpt) {
            if (this.status === a._cfg.status.SHOWN&&!this._errQuery && this._config.autoSelect&&!this._listJustCreated) {
                this.hide()
            }
            if (this._config.autoSelect) {
                this.queryIpt.select()
            }
            this._listJustCreated = false;
            return 
        }
        if (d.className === this.moreCls) {
            this._setForm();
            return 
        }
        if (this.status !== a._cfg.status.SHOWN) {
            return 
        }
        while (d && d !== __.doc.documentElement && d.className !== a._cfg.cls.li) {
            d = d.parentNode
        }
        if (d && d.className === a._cfg.cls.li) {
            b = d.id.split("~");
            this._onSelect(b, 1)
        }
        this.hide()
    };
    a.prototype.getResult = function() {
        if (this.zeroList) {
            return false
        }
        if (this._resultQT == __.lang.trim(this.queryIpt.value).toLowerCase() + "~" + this.typeIpt.value) {
            return this._resultIds
        }
        if (!this.resultList) {
            return false
        }
        var b = this._hasMatchRow(), c = this._config.directionUp ? this.resultList.lastChild: this.resultList.firstChild;
        if (!b && c) {
            b = c.id.split("~")
        }
        return b
    };
    a.prototype._hlSubmit = function(f) {
        var d, b, h, c = this, g = this._enterPressed ? 0: 2;
        this._enterPressed = false;
        if (this._config.onsubmit2) {
            this._config.onsubmit2(f, a._lastHoverLi, this);
            return 
        }
        if (!this.zeroList&&!this.isQueryChanged()) {
            if (!this.resultList) {
                __.event.preventDefault(f);
                return false
            }
            h = this._config.directionUp ? this.resultList.lastChild : this.resultList.firstChild;
            if (g === 0) {
                if (this.status === a._cfg.status.SHOWN) {
                    if (a._lastHoverLi || h) {
                        b = (a._lastHoverLi || h).id.split("~");
                        this._onSelect(b, g);
                        this.hide()
                    }
                }
            } else {
                b = this._hasMatchRow();
                if (b) {
                    this._onSelect(b, g);
                    this.hide()
                } else {
                    b = h.id.split("~");
                    this._onSelect(b, g);
                    this.hide()
                }
            }
        } else {
            if (this._checkInput()) {
                if (!this.isQueryChanged()) {
                    if (this._config.onsubmit) {
                        this._config.onsubmit(this.queryIpt.value, this.typeIpt.value, f)
                    } else {
                        this._setForm(f)
                    }
                    return 
                } else {
                    __.lang.log("b4show redefined");
                    this.b4Show = function() {
                        var e = c._config.directionUp ? c.resultList.lastChild: c.resultList.firstChild;
                        b = c._hasMatchRow();
                        if (b) {
                            c._onSelect(b, g);
                            c.hide()
                        } else {
                            if (!c.zeroList) {
                                b = e.id.split("~");
                                c._onSelect(b, g);
                                c.hide()
                            } else {
                                if (c._config.onsubmit) {
                                    c._config.onsubmit(c.queryIpt.value, c.typeIpt.value, f)
                                } else {
                                    c._setForm(f)
                                }
                            }
                        }
                        c.b4Show = false;
                        return false
                    }
                }
            }
        }
        __.event.preventDefault(f)
    };
    a.prototype.hide = function() {
        if (this.status === a._cfg.status.SHOWN) {
            __.lang.log("to hide");
            this._getListCtn().style.visibility = "hidden";
            a.setHover(null);
            this.status = a._cfg.status.HIDDEN
        }
    };
    a.prototype.show = function(b, c) {
        if (b ||!this.isQueryChanged()) {
            c = typeof c === "boolean" ? c : this.showCount++<this._config.adjustLimit;
            if (!this.b4Show || this.b4Show()) {
                var d = this._getListCtn(c);
                d.style.visibility = "visible";
                this.status = a._cfg.status.SHOWN
            }
        } else {
            __.lang.log("send from show");
            this._sendRequest()
        }
    };
    a.prototype.isQueryChanged = function() {
        return this.listQT !== __.lang.trim(this.queryIpt.value).toLowerCase() + "~" + this.typeIpt.value
    };
    a.prototype._onSelect = function(d, b) {
        var c;
        this._resultQT = this.listQT;
        this._resultIds = d;
        if (this._config.sendToBoss) {
            c = ["http://btrace.qq.com/collect?sIp=", "&iQQ=", __.cookie.get("o_cookie") || "0", "&sBiz=finance.stock.smartbox", "&sOp=browse&iSta=0&iTy=179&iFlow=", new Date%100000000, "&sInput=", encodeURIComponent(this.queryIpt.value), "&sSubmit=", b === 0 ? "enter": b === 1 ? "click": "button", "&sMarket=", encodeURIComponent(this.typeIpt.value.toLowerCase()), "&sCode=", encodeURIComponent(__.fnTable.mapNumMarket[d[2]] + d[1]), "&sName=", encodeURIComponent(d[4]), "&sRefer=", encodeURIComponent((location.host + location.pathname).substr(0, 200))].join("");
            this._bossImg = new Image;
            this._bossImg.src = c
        }
        this._config.onclick(d)
    };
    a.prototype._initEls = function() {
        var e, d, c, b = a._cfg.cls, f = "#" + this.containerId + " .";
        if (!this._config.attach) {
            this.queryIpt = __.dom.f(f + b.query);
            this.subIpt = __.dom.f(f + b.submit);
            this.form = __.dom.f("#" + this.containerId + " form");
            if (this._config.showType) {
                e = {};
                c = a._cfg.txt;
                __.each(a._cfg.typeEnum, function(g) {
                    e[g] = c[g]
                });
                this.typeIpt = new __.widget.Select(a._cfg.selectIdPrefix + this.containerId, {
                    items: e,
                    defaultValue: this._config.defaultType,
                    fontsize: 12,
                    name: "qc_type"
                })
            } else {
                this.typeIpt = __.dom.f(f + b.type);
                this.typeIpt.value = this._config.defaultType
            }
        } else {
            d = this._config.attach;
            this.form = d.form;
            this.queryIpt = d.query;
            this.subIpt = d.submit;
            this.typeIpt = d.type;
            if (this._config.preFill) {
                this.queryIpt.value = this._config.preFill
            }
            this.typeIpt.value = this._config.defaultType
        }
        this.queryIpt.onfocus = null
    };
    a.prototype._initEvents = function() {
        var d = this.queryIpt, c = this, f = __.event, e = f.bind, b;
        b = [e(c._hlFocus, c), e(c._hlBlur, c), e(c._hlKeyup, c), e(c._hlKeydown, c), e(c._hlMouseover, c), e(c._hlDocClick, c), e(c._hlSubmit, c), e(c._hlResize, c), e(c._hlScroll, c)];
        f.on(d, "focus", b[0]);
        f.on(d, "blur", b[1]);
        f.on(d, "keyup", b[2]);
        f.on(d, "keydown", b[3]);
        f.on(this._getListCtn(), "mouseover", b[4]);
        f.on(__.doc, "click", b[5]);
        f.on(c.form, "submit", b[6]);
        f.on(__.global, "resize", b[7], true);
        f.on(__.global, "scroll", b[8], true);
        c._fns = b;
        d = null;
        c = null
    };
    a.prototype._hasMatchRow = function() {
        if (!this.resultList) {
            return false
        }
        var d, e = this.queryIpt.value, c = this.resultList.childNodes, b = false;
        if (!this.zeroList) {
            if (c.length === 1) {
                d = 0
            } else {
                d = __.lang.find(c, function(g) {
                    if (!g.id) {
                        return false
                    }
                    var f = g.id.split("~")[1];
                    f = f && f.split(".")[0];
                    return f === e
                })
            }
            if (d!==-1) {
                b = c[d].id.split("~")
            }
        }
        return b
    };
    a.prototype._checkInput = function() {
        var b = a._cfg.txt.errHint, c = this.queryIpt.value;
        c = c.replace(__.lang.getReg("\\s", "gi"), "");
        if (c === "" || c === this._config.inputHint) {
            b = a._cfg.txt.emptyHint
        } else {
            if (__.lang.getReg("^[\\*\\/0-9a-zA-Z\\u4e00-\\u9fa5]+$").test(c)&&!__.lang.getReg("[\\\\\\/<>#\\$&]").test(c)) {
                b = true
            }
        }
        if (b !== true) {
            this._showError(b)
        }
        return b === true
    };
    a.prototype._showError = function(b) {
        if (!this.resultList) {
            return 
        }
        b = b || a._cfg.txt.errHint;
        this.resultList.innerHTML = "";
        __.dom.addEl({
            tag: "li",
            css: "padding:5px 0 5px 7px;line-height:15px;",
            html: b
        }, this.resultList);
        this.show(true)
    };
    a.prototype._setForm = function(c) {
        if (c) {
            __.event.stopEvent(c)
        }
        var b = "http://stock.finance.qq.com/sstock/search.php?c=utf8&t=all&q=" + encodeURIComponent(this.queryIpt.value.split(".")[0]);
        __.global.open(b, "_blank")
    };
    a.prototype.disposeInternal = function() {
        var d = this.queryIpt, c = this._fns, b = null, e = this, f = __.event;
        a._super.disposeInternal.call(this);
        f.off(d, "focus", c[0]);
        f.off(d, "blur", c[1]);
        f.off(d, "keyup", c[2]);
        f.off(d, "keydown", c[3]);
        f.off(this._getListCtn(), "mouseover", c[4]);
        f.off(__.doc, "click", c[5]);
        f.off(e.form, "submit", c[6]);
        f.off(__.global, "resize", c[7], true);
        f.off(__.global, "scroll", c[8], true);
        e._fns = b;
        e.form = b;
        e.queryIpt = b;
        e.subIpt = b;
        e.typeIpt = b;
        d = e._config;
        d.dataScope = b;
        d.onclick = b;
        d.onsubmit = b;
        d.onsubmit2 = b
    }
});
(function() {
    if (window.NEWSTOCKPROXY) {
        return 
    }
    var a = {
        GP: "stk",
        "GP-A": "stka",
        "GP-B": "stkb",
        ZQ: "wrrts",
        KJ: "of",
        "KJ-CX": "of",
        "KJ-DQLC": "of",
        "KJ-HB": "of",
        FJ: "cf",
        "FJ-CX": "cf",
        QDII: "of",
        "QDII-ETF": "etf",
        "QDII-LOF": "lof",
        "QDII-FOF": "of",
        LOF: "lof",
        ETF: "etf",
        QZ: "wrrts",
        "QZ-NX": "cbbc",
        ZS: "idx"
    };
    var g = {
        "101": "\u5206\u7ec4\u6570\u91cf\u8fbe\u5230\u4e0a\u9650",
        "102": "\u975e\u6cd5\u7ec4id",
        "103": "\u8be5\u5206\u7ec4\u5df2\u5b58\u5728",
        "104": "\u5206\u7ec4\u540d\u975e\u6cd5",
        "105": "\u5220\u9664\u6700\u540e\u4e00\u4e2a\u5206\u7ec4",
        "106": "\u80a1\u7968\u4e0d\u5b58\u5728",
        "107": "go\u65f6\u65b0\u65e7\u7ec4\u5217\u8868\u4e0d\u4e00\u81f4",
        "0": "\u6b63\u786e",
        "-1": "\u5176\u4ed6\u9519\u8bef"
    };
    var f = document.getElementsByTagName("head")[0];
    var t = 0;
    var c = __ && (__.config && __.config.ua && __.config.ua.ie || __.ua && __.ua.ie);
    function s() {
        return "NEWSTOCKPROXY" + (new Date().getTime()) + t++
    }
    function o(w, y, z) {
        var A;
        if (c) {
            try {
                if (w == "iframe") {
                    A = document.createElement('<iframe name="' + y.name + '"></iframe>')
                } else {
                    if (w == "form") {
                        A = document.createElement("<form></form>")
                    }
                }
            } catch (B) {}
        }
        A = A || document.createElement(w);
        for (var x in y) {
            if (x == "style") {
                A.style.cssText = y[x]
            } else {
                if (x == "name" || x == "action" || x == "target" || x == "method" || x == "src") {
                    A[x] = y[x]
                } else {
                    A.setAttribute(x, y[x])
                }
            }
        }
        z && z.appendChild(A);
        return A
    }
    function v(x, z) {
        var w = s();
        window[w] = function(A) {
            y.onload = y.onerror = y.onreadystatechange = null;
            f.removeChild(y);
            window[w] = null;
            z(A)
        };
        var y = o("script", {
            sync: true,
            src: x.replace("<%callback%>", w)
        });
        y.onload = y.onerror = y.onreadystatechange = function() {
            if (/loaded|complete|undefined/.test(y.readyState)) {
                window[w] && window[w]()
            }
        };
        f.appendChild(y)
    }
    function j(A, B) {
        if (typeof A == "string") {
            A = [A]
        }
        var x = A.length;
        var y = [];
        var w = function(C, D) {
            v(C, function(E) {
                y[D] = E;
                x--;
                if (x === 0) {
                    B.apply(this, y)
                }
            })
        };
        for (var z = 0; z < x; z++) {
            w(A[z], z)
        }
    }
    function q(y, C, D) {
        var x = s();
        var w = document.body;
        var A = o("iframe", {
            name: "ifm" + x,
            id: "ifm" + x,
            style: "display:none"
        }, w);
        var B = o("form", {
            action: y,
            target: "ifm" + x,
            method: "post",
            "accept-charset": "utf-8",
            style: "display:none"
        }, w);
        C._callback = x;
        for (var z in C) {
            o("input", {
                type: "hidden",
                name: z,
                value: C[z]
            }, B)
        }
        window[x] = function(E) {
            w.removeChild(B);
            w.removeChild(A);
            window[x] = null;
            D(E)
        };
        __ && (__.config && __.config.ua && __.config.ua.ie || __.ua && __.ua.ie) && (document.chartset = "utf-8");
        B.submit()
    }
    var i = {};
    var h = {};
    var r = {};
    function u(w, x) {
        j(["http://webstock.finance.qq.com/stockapp/zixuanguweb/stocklist?callback=<%callback%>&app=web&range=group&uin=" + w], function(z, y) {
            i[w] = z && z.data;
            r[w] = {};
            var E = [];
            var D = {};
            if (y && y.data) {
                for (var A = 0; A < y.data.length; A++) {
                    D[y.data[A]] = 1
                }
            }
            if (z.data && z.data.grouplist) {
                var C = z.data.grouplist.stocklist;
                for (var A = 0; A < C.length; A++) {
                    var B = C[A].symbol.replace(/\.[^\.]+$/, "");
                    E.push((r[w][B] = r[w][C[A].symbol] = [C[A].symbol, !C[A].numbers || C[A].numbers == "0" ? C[A].cost: (C[A].cost / C[A].numbers), C[A].numbers || 0, a[C[A].type], C[A].note, C[A].cost, D[C[A].symbol] || 0]).join("~"))
                }
            }
            h[w] = D;
            x(window.stockInfo = {
                code: z.code || y && y.code || 0,
                msg: z.msg || y && y.code,
                data: {
                    stock: E.join("|")
                }
            })
        })
    }
    function m(w) {
        if (w.code != 0) {
            var x = w.data;
            if (x && x.record && x.record[0]) {
                for (var y in x.record[0]) {
                    y = x.record[0][y];
                    return {
                        code: y,
                        msg: g[y] || "\u672a\u77e5\u9519\u8bef"
                    }
                }
            }
        }
        return w
    }
    function l(w, y, z) {
        var x = i[w];
        if (x == undefined) {
            return u(w, function() {
                l(w, y, z)
            })
        }
        if (x && x.grouplist) {
            q("http://newstock.finance.qq.com/stockapp/Updstockweb/operseq?app=web&uin=" + w, {
                seq: JSON.stringify([{
                    grpid: x.grouplist.groupinfo.id,
                    act: "sa",
                    code: y,
                    timestamp: + new Date()
                }
                ])
            }, function(B) {
                var A = m(B);
                u(w, function(C) {
                    window.stockInfo.code = A.code;
                    window.stockInfo.msg = A.msg;
                    z(window.stockInfo)
                })
            })
        } else {
            z({
                code: - 1,
                msg: "\u83b7\u53d6\u6570\u636e\u5931\u8d25",
                data: {
                    stock: ""
                }
            })
        }
    }
    function k(x, z, A) {
        var y = i[x];
        if (y == undefined) {
            return u(x, function() {
                k(x, z, A)
            })
        }
        var w = h[x];
        if (y && w && y.grouplist) {
            q("http://newstock.finance.qq.com/stockapp/Updstockweb/operseq?app=web&uin=" + x, {
                seq: JSON.stringify([{
                    grpid: y.grouplist.groupinfo.id,
                    act: "sd",
                    code: z,
                    timestamp: + new Date()
                }
                ])
            }, function(C) {
                var B = m(C);
                if (B.code == 0 && w[z] == 1) {
                    j("http://ifzq.finance.qq.com/other/tips/modall/mod?_callback=<%callback%>&uin=" + x + "&code=" + z + "&high=0.00&low=0.00&updown=-1.00&type=" + (z.substr(0, 2) == "jj" ? "&isfund=1&action=close" : ""), function() {
                        u(x, function() {
                            window.stockInfo.code = B.code;
                            window.stockInfo.msg = B.msg;
                            A(window.stockInfo)
                        })
                    })
                } else {
                    u(x, function() {
                        window.stockInfo.code = B.code;
                        window.stockInfo.msg = B.msg;
                        A(window.stockInfo)
                    })
                }
            })
        } else {
            A({
                code: - 1,
                msg: "\u83b7\u53d6\u6570\u636e\u5931\u8d25",
                data: {
                    stock: ""
                }
            })
        }
    }
    function b(x, y, D) {
        var B = i[x];
        if (B == undefined) {
            return u(x, function() {
                b(x, y, D)
            })
        }
        if (B && B.grouplist) {
            var w = {};
            for (var A = 0; A < y.length; A++) {
                y[A] = y[A].split("~")[0];
                w[y[A]] = true
            }
            var C = [], z = 0;
            for (var A = 0; A < B.grouplist.stocklist.length; A++) {
                var E = B.grouplist.stocklist[A].symbol;
                if (w[E]) {
                    C.push(y[z]);
                    z++
                } else {
                    C.push(E)
                }
            }
            q("http://newstock.finance.qq.com/stockapp/Updstockweb/operseq?app=web&uin=" + x, {
                seq: JSON.stringify([{
                    grpid: B.grouplist.groupinfo.id,
                    act: "so",
                    codelist: C.join("~"),
                    timestamp: + new Date()
                }
                ])
            }, function(G) {
                var F = m(G);
                u(x, function() {
                    window.stockInfo.code = F.code;
                    window.stockInfo.msg = F.msg;
                    D(window.stockInfo)
                })
            })
        } else {
            D({
                code: - 1,
                msg: "\u83b7\u53d6\u6570\u636e\u5931\u8d25",
                data: {
                    stock: ""
                }
            })
        }
    }
    function d(x, z, w, A) {
        var y = i[x];
        if (y == undefined) {
            return u(x, function() {
                d(x, z, w, A)
            })
        }
        if (r[x] && r[x][z] && y && y.grouplist) {
            q("http://newstock.finance.qq.com/stockapp/Updstockweb/operseq?app=web&uin=" + x, {
                seq: JSON.stringify([{
                    grpid: y.grouplist.groupinfo.id,
                    act: "nu",
                    code: z,
                    notes: w,
                    timestamp: + new Date()
                }
                ])
            }, function(C) {
                var B = m(C);
                if (B.code == 0) {
                    r[x][z][4] = w
                }
                A({
                    code: B.code,
                    msg: B.msg,
                    data: {
                        stock: r[x][z].join("~")
                    }
                })
            })
        } else {
            A({
                code: - 1,
                msg: "\u83b7\u53d6\u6570\u636e\u5931\u8d25",
                data: {
                    stock: ""
                }
            })
        }
    }
    function e(y, A, B) {
        var z = i[y];
        if (z == undefined) {
            return u(y, function() {
                e(y, A, B)
            })
        }
        if (r[y] && r[y][A] && z && z.grouplist) {
            if (A.substr(0, 2) == "us") {
                A = r[y][A][0]
            }
            var w = A.substr(0, 2);
            var x = ["http://ifzq.finance.qq.com/other/tips/getall/query?_callback=<%callback%>&uin=" + y + "&code=" + A];
            j(x, function(G) {
                if (!G) {
                    G = {
                        code: - 1,
                        msg: "\u53d1\u751f\u9519\u8bef"
                    }
                } else {
                    if (G.code == 0) {
                        var F = w == "jj" ? [0, 0]: [0, 0, 0, 0, 0, 0, 0, 0, 0];
                        var E = G.data;
                        if (E.price && E.price[0] && E.price[0][0]) {
                            var D = E.price[0];
                            if (D[3] > 0) {
                                F[0] = 1;
                                F[1] = D[3]
                            }
                            if (D[1] > 0) {
                                F[2] = 1;
                                F[3] = D[1]
                            }
                            if (D[2] > 0) {
                                F[4] = 1;
                                F[5] = D[2]
                            }
                        }
                        if (E.info && E.info.length) {
                            for (var C = 0; C < E.info.length; C++) {
                                var D = E.info[C];
                                if (D[1] == "2010" || D[1] == "2020" || D[1] == "2030" || D[1] == "2040") {
                                    F[6] = 1
                                } else {
                                    if (D[1] == "2011" || D[1] == "2021" || D[1] == "2031" || D[1] == "2041") {
                                        F[7] = 1
                                    } else {
                                        if (D[1] == "4010") {
                                            F[8] = 1
                                        }
                                    }
                                }
                            }
                        }
                        if (E.fundjz && E.fundjz[0]) {
                            if (E.fundjz[0][1] == "3030") {
                                F[0] = 1
                            }
                        }
                        G.data = {
                            alert: F.join("~")
                        }
                    }
                }
                B(window.stockInfo = G)
            })
        } else {
            if (r[y] && r[y][A]) {
                B({
                    code: - 1,
                    msg: "\u83b7\u53d6\u6570\u636e\u5931\u8d25",
                    data: {
                        stock: ""
                    }
                })
            } else {
                B({
                    code: 8,
                    msg: "\u60a8\u672a\u5b9a\u5236\u8be5\u80a1\u7968\uff01",
                    data: {
                        stock: ""
                    }
                })
            }
        }
    }
    function n(x, y, B, E) {
        if (i[x] == undefined) {
            return u(x, function() {
                n(x, y, B, E)
            })
        }
        if (r[x] && r[x][y]) {
            if (y.substr(0, 2) == "us") {
                y = r[x][y][0]
            }
            B = B.split("~");
            var A = y.substr(0, 2);
            var w = {
                sh: ["2010", "2011", "4010"],
                sz: ["2010", "2011", "4010"],
                hk: ["2020", "2021"],
                us: ["2040", "2041"],
                jj: []
            };
            var C = [];
            for (var z = 6; z < 9; z++) {
                B[z] == "1" && w[A][z - 6] && C.push(w[A][z - 6])
            }
            var D = A == "jj" && B[0] == "0" || B[0] == "0" && B[2] == "0" && B[4] == "0" && B[6] == "0" && B[7] != "1" && B[8] != "1";
            j("http://ifzq.finance.qq.com/other/tips/modall/mod?_callback=<%callback%>&uin=" + x + "&code=" + y + "&high=" + (B[2] == "1" ? B[3] : "0.00") + "&low=" + (B[4] == "1" ? B[5] || "0.00" : "0.00") + "&updown=" + (B[0] == "1" ? B[1] || "-1.00" : "-1.00") + "&type=" + C.join(",") + (A == "jj" ? ("&isfund=1&action=" + (B[0] == 1 ? "open" : "close")) : ""), function(F) {
                F.data = {
                    alert: [y, 0, 0, "stk", "", 0, D ? 0: 1].join("~")
                };
                E(window.stockInfo = F)
            })
        } else {
            E({
                code: 8,
                msg: "\u60a8\u672a\u5b9a\u5236\u8be5\u80a1\u7968\uff01",
                data: {
                    alert: ""
                }
            })
        }
    }
    var p = window.NEWSTOCKPROXY = {
        get: function(w, x) {
            u(w, x)
        },
        add: function(w, x, y) {
            l(w, x, y)
        },
        del: function(w, x, y) {
            k(w, x, y)
        },
        ord: function(w, x, y) {
            b(w, x, y)
        },
        nte: function(x, y, w, z) {
            d(x, y, w, z)
        },
        alt: {
            load: function(w, x, y) {
                e(w, x, y)
            },
            save: function(w, y, x, z) {
                n(w, y, x, z)
            },
            api: function(x, w, y) {
                if (w.type == "load") {
                    this.load(x, w.code, y)
                } else {
                    if (w.type == "save") {
                        this.save(x, w.code, w.result.join("~"), y)
                    }
                }
            }
        }
    }
})();
(function() {
    __.set("__.app.qindex");
    var b = {
        red: "#CC0000",
        green: "#41A98D"
    };
    var c = [["myZhang", "+"], ["myDie", ""], ["myPing", ""]];
    var a = 300000;
    __.app.qindex = {
        indexList: {
            listMap: {
                "0": "s_sh000001",
                "1": "s_r_hkHSI",
                "2": "s_usDJI"
            },
            imgMap: {
                s_sh000001: ["hushen/indexs/000001.png", "http://stockhtm.finance.qq.com/hqing/zhishu/000001.htm", "shstockchart", "shstockdata"],
                s_r_hkHSI: ["hongkong/HSI.png", "http://stock.qq.com/hkHSI", "hkstockchart", "hkstockdata"],
                s_usDJI: ["as/DJI.png", "http://stockhtm.finance.qq.com/astock/ggcx/DJI.htm", "DJIstockchart", "DJIstockdata"]
            },
            indexCode: "s_sh000001",
            indexTimer: false,
            init: function() {
                var e = this;
                var d = __.dom.$(".index-list li");
                __.event.on(d[0], "mouseover", function() {
                    d[0].className = "selected";
                    d[1].className = "";
                    d[2].className = "";
                    e.indexCode = e.listMap["0"];
                    e.get(e.indexCode)
                });
                __.event.on(d[1], "mouseover", function() {
                    d[0].className = "";
                    d[1].className = "selected";
                    d[2].className = "";
                    e.indexCode = e.listMap["1"];
                    e.get(e.indexCode)
                });
                __.event.on(d[2], "mouseover", function() {
                    d[0].className = "";
                    d[1].className = "";
                    d[2].className = "selected";
                    e.indexCode = e.listMap["2"];
                    e.get(e.indexCode)
                });
                this.get();
                e.indexTimer = setInterval(function() {
                    e.get()
                }, a)
            },
            get: function(e) {
                var d = this;
                e = e || d.indexCode;
                __.load("http://qt.gtimg.cn/q=" + e, function() {
                    var u = "v_" + e;
                    var g = __.global[u];
                    if (g) {
                        var k = "";
                        var n = "";
                        var l = g.split("~");
                        var h = l[1], m = l[3], o = l[4], q = l[5];
                        if (o > 0) {
                            var v = b.red;
                            n = "+"
                        } else {
                            if (o < 0) {
                                var v = b.green
                            }
                        }
                        var i = __.dom.f(".stkname");
                        var j = d.imgMap[e][1];
                        var r = d.imgMap[e][3];
                        i.innerHTML = '<a href="' + j + '" target="_blank" bosszone="' + r + '">' + h + "</a>";
                        var f = __.dom.f(".price");
                        f.style.color = v;
                        f.innerHTML = m;
                        var s = __.dom.f(".s");
                        s.style.color = v;
                        s.innerHTML = n + o + " &nbsp&nbsp " + n + q + "%";
                        d.charting(e)
                    }
                })
            },
            charting: function(j) {
                var i = this;
                j = j || i.indexCode;
                var g = i.imgMap[j][0];
                var f = i.imgMap[j][1];
                var e = i.imgMap[j][2];
                var d = [];
                d.push('<a target="_blank" href="');
                d.push(f);
                d.push('" bosszone="');
                d.push(e);
                d.push('"><img width="130" height="75" boss="7" id="stocknum_img_GP" name="stocknum_img_GP" style="border:1px solid #d2e0ef" src="http://img.gtimg.cn/images/hq_parts_little8_2/');
                d.push(g);
                d.push('"></a>');
                var h = d.join("");
                __.dom.f("#stockImg").innerHTML = h
            }
        },
        pStock: {
            _pStockTimer: false,
            _hasPopEvent: false,
            init: function() {
                if (this.uin == (__.cookie.get("uin") || "").replace(/o0*/, "")) {
                    return 
                }
                this.loadPstockData();
                that = this;
                if (that._pStockTimer) {
                    clearTimeout(that._pStockTimer);
                    that._pStockTimer = false
                }
                that._pStockTimer = setInterval(function() {
                    that.loadPstockData()
                }, a)
            },
            loadPstockData: function() {
                var d = this;
                d.pop = __.dom.f("pstockList");
                d.uin = (__.cookie.get("uin") || "").replace(/o0*/, "");
                if (d.uin) {
                    NEWSTOCKPROXY.get(d.uin, function(h) {
                        var g = [], e = [];
                        if (h && h.code == 0) {
                            if (h.data && h.data["stock"]) {
                                __.each(h.data["stock"].split("|"), function(l) {
                                    l = l.split("~");
                                    if (l[0].substr(0, 2) == "hk") {
                                        g.push("s_r_" + l[0]);
                                        if (l[3] == "stk") {
                                            e.push(l[0])
                                        }
                                    } else {
                                        if (l[0].substr(0, 2) == "us") {
                                            var k = l[0].replace(/\.[^.]+$/, "").replace(/\./g, "__");
                                            var j = l[0].replace(/\.[\w\.]+$/, "");
                                            g.push("s_" + k);
                                            if (l[3] == "stk") {
                                                e.push(j)
                                            }
                                        } else {
                                            g.push("s_" + l[0]);
                                            if (l[3] == "stka" || l[3] == "stkb") {
                                                e.push(l[0])
                                            }
                                        }
                                    }
                                })
                            }
                        }
                        if (g.length > 0) {
                            d.loadMsg();
                            d.loadQt(g);
                            var i = d.uin%10;
                            var f = e.slice(0, 60);
                            d.loadPstockNews(f)
                        } else {
                            d.pstockBarInfo("none")
                        }
                    })
                }
            },
            loadMsg: function() {
                var d = __.dom.f("mymsg");
                __.load("http://message.finance.qq.com/tips/get_msg_num.php?uid=" + this.uin + "&_r=" + Math.random(), function() {
                    var e = __.global.v_msg_num;
                    if (e && e.total_num) {
                        e = e.total_num[1] || 0;
                        if (e > 99) {
                            e = 99
                        }
                        d.innerHTML = '<a href="http://stockapp.finance.qq.com/pstock/msgbox.php?_r=' + Math.random() + '" target="_blank" bossZone="pstockinfor">\u6211\u7684\u6d88\u606f<span class="myPing"><strong>' + e + "</strong></span></a>"
                    } else {
                        d.innerHTML = '<a href="http://stockapp.finance.qq.com/pstock/msgbox.php?_r=' + Math.random() + '" target="_blank" bossZone="pstockinfor">\u6211\u7684\u6d88\u606f<span class="myPing"><strong>--</strong></span></a>'
                    }
                })
            },
            _getURL: function(d, f) {
                var e = "http://stockhtm.finance.qq.com";
                var g = "";
                switch (d) {
                case"":
                case"0":
                    if (f.length > 5) {
                        g = e + "/fund/djj_jjcx/" + f + ".htm"
                    }
                    break;
                case"1":
                    if (f.substr(0, 3) === "000") {
                        g = e + "/hqing/zhishu/" + f + ".htm"
                    } else {
                        g = e + "/sstock/ggcx/" + f + ".shtml"
                    }
                    break;
                case"51":
                    if (f.substr(0, 2) === "39") {
                        g = e + "/hqing/zhishu/" + f + ".htm"
                    } else {
                        g = e + "/sstock/ggcx/" + f + ".shtml"
                    }
                    break;
                case"100":
                    if (f.length <= 5) {
                        g = "http://stock.qq.com/hk" + f
                    }
                    break;
                case"200":
                    if (f.substr(0, 1) === ".") {
                        f = f.substr(1)
                    }
                    g = e + "/astock/ggcx/" + f.toUpperCase() + ".htm";
                    break;
                case"300":
                    g = e + "/if/ggcx/" + f.toUpperCase() + ".shtml";
                    break;
                case"350":
                    g = e + "/money/future/quotpage/f/" + f.toUpperCase() + ".htm";
                    break
                }
                return g || "http://finance.qq.com/"
            },
            _timerPopHide: false,
            _timerShow: false,
            _tleft: "185",
            _bossZone: "pstockrose1",
            _showPop: function(n) {
                if (this._qtData[n].length > 0) {
                    var l = c[n][0];
                    var h = c[n][1];
                    var q = [];
                    if (n == 0) {
                        this._tleft = "185";
                        this._bossZone = "pstockrose1"
                    } else {
                        if (n == 1) {
                            this._tleft = "224";
                            this._bossZone = "pstockdrop1"
                        } else {
                            if (n == 2) {
                                this._tleft = "264";
                                this._bossZone = "pstocklevel1"
                            }
                        }
                    }
                    q.push('<div class="myFinanceBoxInner" bossZone="' + this._bossZone + '"><table>');
                    var f = this._qtData[n];
                    for (var k = 0; k < f.length; ++k) {
                        var s = f[k][0];
                        var g = f[k][2];
                        if (s.length > 5) {
                            s = "0";
                            g = f[k][0]
                        }
                        var m = "--", p = "--";
                        if (g) {
                            var e = this._getURL(s, g);
                            m = '<a href="' + e + '" target="_blank">' + g + "</a>"
                        } else {
                            m = f[k][0]
                        }
                        if (f[k][1]) {
                            var d = wname = f[k][1];
                            if (wname.length > 6) {
                                d = wname.substring(0, 4)
                            }
                            p = '<a href="' + e + '" target="_blank" title="' + wname + '">' + d + "</a>"
                        }
                        var o = f[k][3] ? (f[k][3] >= 0 ? f[k][3] : h + f[k][3]): "--";
                        var j = f[k][5] ? h + f[k][5] + "%": "--";
                        q.push("<tr>");
                        q.push("<td>" + m + "</td>");
                        q.push("<td>" + p + "</td>");
                        q.push('<td class="' + l + '">' + o + "</td>");
                        q.push('<td class="' + l + '">' + j + "</td>");
                        q.push("</tr>")
                    }
                    q.push('</table><div class="myFinanceIcon" style="left:' + this._tleft + 'px;"></div></div>');
                    var r = q.join("");
                    __.dom.f("pstockList").innerHTML = r;
                    __.dom.f("pstockList").style.display = "block"
                } else {
                    __.dom.f("pstockList").style.display = "none"
                }
            },
            showPop: function(d) {
                if (typeof d === "undefined") {
                    if (this._timerPopHide) {
                        clearTimeout(this._timerPopHide);
                        this._timerPopHide = false
                    }
                    return 
                }
                if (this._timerShow) {
                    return 
                }
                this._timerShow = setTimeout(function() {
                    that._timerShow = false;
                    that._showPop(d)
                }, 800);
                if (this._timerPopHide) {
                    clearTimeout(this._timerPopHide);
                    this._timerPopHide = false
                }
            },
            hidePop: function(d) {
                if (this._timerShow) {
                    clearTimeout(this._timerShow);
                    this._timerShow = false
                }
                if (!this.pop) {
                    return 
                }
                var e = this;
                if (d === true) {
                    clearTimeout(this._timerPopHide);
                    e.pop.style.display = "none";
                    return 
                }
                clearTimeout(this._timerPopHide);
                this._timerPopHide = setTimeout(function() {
                    e.pop.style.display = "none";
                    e._timerPopHide = false
                }, d || 1000)
            },
            _qtData: [[], [], []],
            loadQt: function(j) {
                var f = [0, 0, 0], i = 60, d = j.length, h = this;
                if (h._pStockTimer) {
                    h._qtData = [[], [], []]
                }
                while (j.length > 0) {
                    var g = j.slice(0, i);
                    j = j.slice(i);
                    var e = g.join(",");
                    var k = "http://qt.gtimg.cn/q=" + e;
                    __.load(k, function() {
                        var l = g;
                        return function() {
                            for (var t = 0; t < l.length; t++) {
                                d--;
                                var n = l[t];
                                var y = __.global["v_" + n], u = 2;
                                if (y) {
                                    y = y.split("~");
                                    var w = (y[0] && y[0].length == 6) ? 5: 4;
                                    if (y[w] > 0) {
                                        u = 0
                                    } else {
                                        if (y[w] < 0) {
                                            u = 1
                                        }
                                    }
                                } else {
                                    y = [n.replace(/^s_(r_)?(sh|sz|us|jj|hk)/, "")]
                                }
                                h._qtData[u].push(y);
                                f[u]++
                            }
                            if (d < 1) {
                                var s = '<a href="http://stockapp.finance.qq.com/pstock?_r=' + Math.random() + '" bossZone="pstockrose" target="_blank">\u6da8<span class="myZhang" id="pstock-0"><strong>' + f[0] + "</strong></span></a>";
                                var r = '<a href="http://stockapp.finance.qq.com/pstock?_r=' + Math.random() + '" bossZone="pstockdrop" target="_blank">\u8dcc<span class="myDie" id="pstock-0"><strong>' + f[1] + "</strong></span></a>";
                                var x = '<a href="http://stockapp.finance.qq.com/pstock?_r=' + Math.random() + '" bossZone="pstocklevel" target="_blank">\u5e73<span class="myPing" id="pstock-0"><strong>' + f[2] + "</strong></span></a>";
                                __.dom.f("myz").innerHTML = s;
                                __.dom.f("myd").innerHTML = r;
                                __.dom.f("myp").innerHTML = x;
                                h._qtData[0] = h._qtData[0].sort(function(v, o) {
                                    return o[5] - v[5]
                                }).slice(0, 5);
                                h._qtData[1] = h._qtData[1].sort(function(v, o) {
                                    return v[5] - o[5]
                                }).slice(0, 5);
                                h._qtData[2] = h._qtData[2].sort(function(v, o) {
                                    return v.length > 1?-1 : (o.length > 1 ? 1 : 0)
                                }).slice(0, 5);
                                if (!h._hasPopEvent) {
                                    var q = __.dom.f("myz");
                                    var p = __.dom.f("myd");
                                    var m = __.dom.f("myp");
                                    __.event.on(q, "mouseover", function() {
                                        h.showPop(0)
                                    });
                                    __.event.on(q, "mouseout", function() {
                                        h.hidePop()
                                    });
                                    __.event.on(p, "mouseover", function() {
                                        h.showPop(1)
                                    });
                                    __.event.on(p, "mouseout", function() {
                                        h.hidePop()
                                    });
                                    __.event.on(m, "mouseover", function() {
                                        h.showPop(2)
                                    });
                                    __.event.on(m, "mouseout", function() {
                                        h.hidePop()
                                    });
                                    var z = __.dom.f("pstockList");
                                    __.event.on(z, "mouseover", function() {
                                        h.showPop()
                                    });
                                    __.event.on(z, "mouseout", function() {
                                        h.hidePop(500)
                                    });
                                    h._hasPopEvent = true
                                }
                                __.dom.f("zxgbar-zdp").style.display = "block";
                                __.dom.f("zxgbar").style.display = "none"
                            }
                        }
                    }())
                }
            },
            pstockBarInfo: function(d) {
                var e = "";
                if (d == "none") {
                    e = '<a href="http://stockapp.finance.qq.com/pstock?_r=' + Math.random() + '" target="_blank" class="zixuangu" bossZone="pstockadd">\u6211\u7684\u81ea\u9009\u80a1\uff1a</a> \u8fd8\u6ca1\u6709\u6dfb\u52a0\u81ea\u9009\u80a1 <a href="http://stockapp.finance.qq.com/pstock?_r=' + Math.random() + '" target="_blank" bossZone="pstockadd">[\u6dfb\u52a0]</a>';
                    __.dom.f("zxgbar").innerHTML = e
                }
            },
            loadPstockNews: function(f) {
                var d = "http://news.gtimg.cn/?name=finance_news_cn&n=10&q=" + f;
                var e = "http://qt.gtimg.cn/q=stdunixtime";
                __.load(e, function() {
                    var g = __.global.v_stdunixtime;
                    if (g && g.length > 9) {
                        __.load(d, function() {
                            var j = __.global.finance_news_cn;
                            if (j && j.length > 0) {
                                for (var h = 0; h < j.length; h++) {
                                    var n = j[h];
                                    var m = n[2];
                                    var l = n[0];
                                    l = l.replace(/-/g, "/");
                                    var i = Math.round(new Date(l).getTime() / 1000);
                                    if (Math.round((g - i) / 3600) <= 36) {
                                        if (m.length > 15 && m.length < 21) {
                                            var k = n[3];
                                            __.dom.f("pstock-news").innerHTML = '<a href="' + encodeURI(k) + '" target="_blank" title="' + m + '">' + m + "</a>";
                                            break
                                        }
                                    }
                                }
                            }
                        })
                    }
                })
            },
            clearCookie: function() {
                __.cookie.del("uin", "/", "qq.com");
                __.cookie.del("luin", "/", "qq.com");
                __.dom.f("zxgbar-zdp").style.display = "none";
                __.dom.f("zxgbar").style.display = "block"
            }
        },
        init: function() {
            var d = this;
            d.indexList.init()
        }
    };
    __.app.qindex.init()
}());
var oForm = __.dom.f("top-smartbox");
var top_smartbox = new __.widget.SmartBox("top-smartbox", {
    attach: {
        form: oForm,
        query: oForm.c1,
        submit: oForm.submitbtn,
        type: {
            value: "ALL"
        }
    },
    listXOffset: - 102,
    listYOffset: 2,
    zindex: 10,
    defaultType: "ALL",
    onclick: function(a) {
        if (a.length === 2) {
            this.onMstats(a[1])
        } else {
            var b = __.fnTable.getPageUrl(a[1], a[2]);
            registerZone2({
                bossZone: "stocksearch",
                url: b
            }, 1);
            __.global.open(b + "?pgv_ref=fi_smartbox&_ver=" + __.BasicModule.loadedMods["fn-smartbox"], this.useSelf ? "_self" : "_blank")
        }
    }
});
/*  |xGv00|e73d363bec8e15585a3bad3964fa39b2 */
