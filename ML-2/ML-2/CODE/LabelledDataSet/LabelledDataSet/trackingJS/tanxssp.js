/*!2014-11-13 10:11 */
function tanxssp_show(a) {
    document.getElementById("tanx-a-" + a.i || "") || (document.write("<iframe style='display:none' id='tanx-a-" + a.i + "' frameborder=0 scrolling='no' marginwidth='0' marginheight='0'></iframe>"), a.sync=!0);
    var b = "http://cdn.tanx.com/t/tanxssp/main.js";
    a.sync ? (window.tanx_ssp_temp_adobj = a, document.write('<script charset="gbk" src="' + b + '"></sc'), document.write("ript>")) : KSLITE.provide(["tanxssp-main"], function(b) {
        b("tanxssp-main").run(a)
    })
}
!function(a, b, c) {
    function d() {
        if (navigator.userAgent.indexOf("MSIE") < 0)
            return null;
        for (var a, b = k.getElementsByTagName("script"), c = 0, d = b.length; d > c; c++)
            if (a = b[c], "interactive" === a.readyState)
                return a;
        return null
    }
    var e = {
        lt_pkgs: {
            tanxssp: "http://cdn.tanx.com/t/",
            charset: "gbk"
        },
        lt_v: "1.0.0"
    };
    if (a[b] !== c)
        return void(KSLITE.Config.lt_pkgs = KSLITE.mix(e.lt_pkgs, KSLITE.Config.lt_pkgs));
    a[b] = {};
    var f = a.KSLITEonLoad, g = a.KSLITEpkgPaths;
    b = a[b];
    var h = a.document, i = Object.prototype.toString, j = function(a, b, d, e) {
        if (!b ||!a)
            return a;
        d === c && (d=!0);
        var f, g, h;
        if (e && (h = e.length))
            for (f = 0; h > f; f++)
                g = e[f], g in b && (!d && g in a || (a[g] = b[g]));
        else 
            for (g in b)
                !d && g in a || (a[g] = b[g]);
        return a
    }, k = h.getElementsByTagName("head")[0] || h.documentElement, l = 0, m = 2, n = 4, o = /\.css(?:\?|$)/i, p = h.createElement("script").readyState ? function(a, b) {
        var c = a.onreadystatechange;
        a.onreadystatechange = function() {
            var d = a.readyState;
            ("loaded" === d || "complete" === d) && (a.onreadystatechange = null, c && c(), b.call(this))
        }
    }
    : function(a, b) {
        a.addEventListener("load", b, !1), a.addEventListener("error", b, !1)
    };
    j(b, {
        version: e.lt_v,
        _init: function() {
            function c(a) {
                var b = a.split("@");
                e.lt_pkgs[b[0]] = b[1]
            }
            var d, i, j = h.getElementsByTagName("script");
            if (!window.KSLITEcurrentScript)
                for (d = 0; d < j.length; d++)
                    if (j[d].kslite) {
                        window.KSLITEcurrentScript = j[d];
                        break
                    }
            i = window.KSLITEcurrentScript || j[j.length - 1], window.KSLITEcurrentScript = i;
            var k = i.src.split("/").slice(0, - 1).join("/") + "/";
            b.Env = {
                mods: {},
                fns: {},
                _loadQueue: {},
                _relies: {
                    rq: {},
                    sp: {}
                }
            }, b.Config = {
                debug: "",
                base: k,
                timeout: 10,
                kslite: e
            }, b.mix(b.Config, e), b.declare("kslite", [], function(a, c) {
                c = b.mix(c, b, !0, ["path", "log", "getScript", "substitute", "clone", "mix", "multiAsync", "extend", "iA", "iF", "iPO", "iS"])
            }), b.provide(["kslite"], function() {
                b.require("kslite").log("kslite inited")
            });
            var l;
            if (a.KSLITEpkgPaths = {
                push: function(a) {
                    c(a)
                }
            }, g && b.iA(g))
                for (l = 0; l < g.length; l++)
                    c(g[l]);
            if (a.KSLITEonLoad = {
                push: function(a) {
                    a && b.iF(a) && a(b)
                }
            }, f && b.iA(f))
                for (l = 0; l < f.length; l++)
                    b.iF(f[l]) && f[l](b)
        },
        mix: j,
        log: function(d, e) {
            return b.Config.debug && a.console !== c && console.log && console[e && console[e] ? e: "log"](d), b
        },
        clone: function(a) {
            var c, d, e = a;
            if (a && ((c = b.iA(a)) || b.iPO(a))) {
                e = c ? [] : {};
                for (d in a)
                    a.hasOwnProperty(d) && (e[d] = b.clone(a[d]))
            }
            return e
        },
        extend: function(a, b, c, d) {
            if (!b ||!a)
                return a;
            var e = Object.prototype, f = function(a) {
                function b() {}
                return b.prototype = a, new b
            }, g = b.prototype, h = f(g);
            return a.prototype = h, h.constructor = a, a.superclass = g, b !== Object && g.constructor === e.constructor && (g.constructor = b), c && j(h, c), d && j(a, d), a
        },
        substitute: function(a, d, e, f) {
            return b.iS(a) && b.iPO(d) ? a.replace(e || /\\?\{([^{}]+)\}/g, function(a, b) {
                return "\\" === a.charAt(0) ? a.slice(1) : d[b] !== c ? d[b] : f ? a : ""
            }) : a
        },
        getScript: function(a, d, e, f) {
            var g, i, j, l, m = o.test(a), n = h.createElement(m ? "link" : "script"), q = d;
            if (b.iPO(q) && (d = q.success, g = q.error, i = q.timeout, e = q.charset), e && (n.charset = e), m ? (n.href = a, n.rel = "stylesheet") : (n.src = a, n.async=!0), f)
                for (l in f)
                    n.setAttribute(l, f[l]);
            return b.iF(d) && (m ? d.call(n) : p(n, function() {
                j && (j.cancel(), j = c), d.call(n)
            })), b.iF(g) && (j = setTimeout(function() {
                j = c, g()
            }, 1e3 * (i || b.Config.timeout))), k.insertBefore(n, k.firstChild), n
        },
        iF: function(a) {
            return "[object Function]" === i.call(a)
        },
        iA: function(a) {
            return "[object Array]" === i.call(a)
        },
        iS: function(a) {
            return "[object String]" === i.call(a)
        },
        iPO: function(a) {
            return a && "[object Object]" === i.call(a)&&!a.nodeType&&!a.setInterval
        },
        add: function(a, c, d) {
            var e, f = b.Env.mods;
            if (!(f[a] && f[a].status > l))
                return e = {
                    name: a,
                    fn: c || null,
                    status: m
                }, b.iA(d) && (d = {
                    requires: d
                }), j(e, d), f[a] = e, b
        },
        use: function(a, c) {
            a = a.split(","), b._aMs(a, function() {
                c && c(b)
            })
        },
        _aMs: function(a, c) {
            var d, e = {};
            for (d = 0; d < a.length; d++)
                e[a[d]] = {
                    f: b._aM,
                    a: a[d]
                };
            b.multiAsync(e, c)
        },
        _aM: function(a, c) {
            function d(a) {
                a.status != n && (a.fn ? (b.log("attach " + a.name), a.fn(b, b.require(a.name), b._ns(a.name))) : b.log("attach " + a.name + " without expected attach fn!", "warn"), a.status = n), c()
            }
            function e(a) {
                function b(a) {
                    return i[a] = i[a] || {}, j[a] = j[a] || {}, a
                }
                var c, d, e, f;
                for (d = b(a.name), c = 0; c < a.requires.length; c++) {
                    e = b(a.requires[c]), i[d][e] = 1, j[e][d] = 1;
                    for (f in j[d])
                        i[f][e] = 1, j[e][f] = 1
                }
            }
            var f, g, h = b.Env.mods, i = b.Env._relies.rq, j = b.Env._relies.sp;
            if (f = h[a], f && f.status !== l)
                if (g = f.requires, b.iA(g) && g.length > 0) {
                    if (e(f), i[a][a])
                        throw new Error("Fatal Error,Loop Reqs:" + f.name);
                        b.log(f.name + " to req: " + g), b._aMs(g, function() {
                            d(f)
                        })
                } else 
                    d(f);
                else 
                    f = {
                        name: a
                    }, b._lM(f, function() {
                        b._aM(a, function() {
                            d(h[a])
                        })
                    })
        },
        _lM: function(a, d) {
            var e, f = b.Env._loadQueue, g = a.name, h = b.Env.mods;
            if (f[g])
                e = f[g], e.c ? (b.log(g + " is already loaded", "warn"), d()) : (b.log(g + " is loading,listen to callback"), e.fns.push(d));
            else {
                if ("undefined" != typeof f[g])
                    try {
                        f[g].fns.push(d)
                    } catch (i) {
                    f[g].fns = [d]
                } else 
                    f[g] = {
                        fns: [d],
                        c: !1
                    };
                b._gPath(a, function() {
                    h[g] || (h[g] = {
                        name: g,
                        status: l
                    }), b.getScript(a.fullpath, function() {
                        var a, d, e = f[g];
                        for (b.__m__ && (d = b.__m__, b.add(g, d.fn, d.deps), b.__m__ = null), h[g].status === l && (h[g].status = m), a = 0; a < e.fns.length; a++)
                            e.fns[a]();
                        e.c=!0, e.fns = c
                    }, "gbk", {
                        mod_name: g
                    })
                })
            }
        },
        path: function(a, c) {
            var d = a.split("-"), e = d[0], f = b.Config.lt_pkgs;
            b.iS(f[e]) ? c(f[e] + d.join("/")) : KSLITE.provide(["packages-router"], function(a) {
                var f = a("packages-router");
                c((f[e] || b.Config.base) + d.join("/"))
            })
        },
        _gPath: function(a, c) {
            b.path(a.name, function(d) {
                a.fullpath = d + ".js", b.log("path " + a.name + ": " + a.fullpath), c()
            })
        },
        multiAsync: function(a, c) {
            function d() {
                var b, d = {};
                for (b in a) {
                    if (!a[b].c)
                        return;
                    d[b] = a[b].r
                }
                c(d)
            }
            var e, f=!1;
            for (e in a)
                f=!0;
            f || c({});
            for (e in a)
                a.hasOwnProperty(e)&&!function() {
                    var c = a[e];
                    c.f.call(c.c || b, c.a, function(a) {
                        c.r = a, c.c=!0, d()
                    })
                }()
        },
        _ns: function(a) {
            var c, d = a.split("-"), e = b.Env.fns;
            for (c = 0; c < d.length; c++)
                e[d[c]] = e[d[c]] || {}, e = e[d[c]];
            return e
        },
        require: function(a) {
            var c = b._ns(a);
            return c.exports = c.exports || {}, c.exports
        },
        declare: function() {
            var a, c, e, f, g, h;
            for (c = 0; c < arguments.length; c++)
                e = arguments[c], b.iS(e) ? f = e : b.iA(e) ? g = e : b.iF(e) && (h = e);
            f || (a = d(), a && (f = a.getAttribute("mod_name") ||!1)), f ? b.add(f, function(a, b, c) {
                h(a.require, b, c)
            }, g) : b.__m__ = {
                deps: g,
                fn: function(a, b, c) {
                    h(a.require, b, c)
                }
            }
        },
        provide: function(a, c) {
            b.use(a.join(","), function(a) {
                c(a.require)
            })
        }
    }), b._init()
}(window, "KSLITE"), function(a, b) {
    var c = a.tanx_ssp_onload;
    if (c && b.iA(c))
        for (var d = 0; d < c.length; d++)
            b.iPO(c[d]) && tanxssp_show(c[d]);
    a.tanx_ssp_onload = {
        push: function(a) {
            a && b.iPO(a) && tanxssp_show(a)
        }
    }
}(window, KSLITE);
