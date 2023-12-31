(function() {
    if (window.CTO)
        return;
    var ctoImage1 = new Image, url = escape(location.href), userAgent = escape(navigator.userAgent), pageViewId, firstPageViewId;
    window.cto ? window.cto.firstPageViewId ? firstPageViewId = window.cto.firstPageViewId : firstPageViewId = "CTO-" + (new Date).getTime() + "-" + Math.floor(Math.random() * 1e13) : firstPageViewId = "CTO-" + (new Date).getTime() + "-" + Math.floor(Math.random() * 1e13), ctoImage1.src = [location.protocol, "//ctologger01.analytics.go.com/cto/", "?dolWAVer=", "4.1.20", "&trckTp=", "trackcto", "&pgVwId=", firstPageViewId, "&url=", url, "&userAgent=", userAgent].join(""), typeof Prototype != "undefined" && Prototype.Version && Prototype.Version.indexOf("1.6")!==-1 && (Array.prototype.reduce = function(e, t) {
        if (null === this || "undefined" == typeof this)
            throw new TypeError("Array.prototype.reduce called on null or undefined");
        if ("function" != typeof e)
            throw new TypeError(e + " is not a function");
        var n, r, i = this.length>>>0, s=!1;
        1 < arguments.length && (r = t, s=!0);
        for (n = 0; i > n; ++n)
            this.hasOwnProperty(n) && (s ? r = e(r, this[n], n, this) : (r = this[n], s=!0));
        if (!s)
            throw new TypeError("Reduce of empty array with no initial value");
        return r
    }), window.CTO = function() {
        var e = {
            firstPageViewId: firstPageViewId,
            h: {},
            queue: [],
            track: function(e) {
                this.queue.unshift(function() {
                    this.trackPage(e)
                })
            },
            trackPage: function(e) {
                this.queue.unshift(function() {
                    this.trackPage(e)
                })
            },
            trackLink: function(e) {
                this.queue.unshift(function() {
                    this.trackLink(e)
                })
            },
            trackEvent: function(e) {
                this.queue.unshift(function() {
                    this.trackEvent(e)
                })
            },
            trackVideo: function(e) {
                this.queue.unshift(function() {
                    this.trackVideo(e)
                })
            },
            trackGame: function(e) {
                this.queue.unshift(function() {
                    this.trackGame(e)
                })
            },
            trackApp: function(e) {
                this.queue.unshift(function() {
                    this.trackApp(e)
                })
            },
            trackPrint: function(e) {
                this.queue.unshift(function() {
                    this.trackPrint(e)
                })
            },
            trackPagination: function(e) {
                this.queue.unshift(function() {
                    this.trackPage({
                        pageNumber: e
                    })
                })
            },
            updateVariableLogic: function(e, t) {
                this.queue.unshift(function() {
                    this.updateVariableLogic(e, t)
                })
            },
            addCTOListener: function(e, t) {
                this.queue.unshift(function() {
                    this.addCTOListener(e, t)
                })
            },
            setCTOConfigs: function(e) {
                this.queue.unshift(function() {
                    this.setCTOConfigs(e)
                })
            },
            resetObj: function() {
                this.queue.unshift(function() {
                    this.resetObj()
                })
            }
        };
        for (var t in window.cto) {
            if (!window.cto.hasOwnProperty(t))
                continue;
            typeof window.cto[t] != "function" && (e[t] = window.cto[t])
        }
        return window.cto = e, e
    }, window.CTO.firstPageViewId = firstPageViewId; /** vim: et:ts=4:sw=4:sts=4
     * @license RequireJS 2.1.8 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
     * Available via the MIT or new BSD license.
     * see: http://github.com/jrburke/requirejs for details
     */

    /*!
      * Bean - copyright (c) Jacob Thornton 2011-2012
      * https://github.com/fat/bean
      * MIT license
      */

    //     Underscore.js 1.5.2
    //     http://underscorejs.org
    //     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    //     Underscore may be freely distributed under the MIT license.

    // Copyright (c) 2012 Florian H., https://github.com/js-coder https://github.com/js-coder/cookie.js

    /*!
     * Reqwest! A general purpose XHR connection manager
     * (c) Dustin Diaz 2013
     * https://github.com/ded/reqwest
     * license MIT
     */

    var requirejs, require, define;
    (function(global, window) {
        function isFunction(e) {
            return ostring.call(e) === "[object Function]"
        }
        function isArray(e) {
            return ostring.call(e) === "[object Array]"
        }
        function each(e, t) {
            if (e) {
                var n;
                for (n = 0; n < e.length; n += 1)
                    if (e[n] && t(e[n], n, e))
                        break
            }
        }
        function eachReverse(e, t) {
            if (e) {
                var n;
                for (n = e.length - 1; n>-1; n -= 1)
                    if (e[n] && t(e[n], n, e))
                        break
            }
        }
        function hasProp(e, t) {
            return hasOwn.call(e, t)
        }
        function getOwn(e, t) {
            return hasProp(e, t) && e[t]
        }
        function eachProp(e, t) {
            var n;
            for (n in e)
                if (hasProp(e, n) && t(e[n], n))
                    break
        }
        function mixin(e, t, n, r) {
            return t && eachProp(t, function(t, i) {
                if (n ||!hasProp(e, i))
                    r && typeof t != "string" ? (e[i] || (e[i] = {}), mixin(e[i], t, n, r)) : e[i] = t
            }), e
        }
        function bind(e, t) {
            return function() {
                return t.apply(e, arguments)
            }
        }
        function scripts() {
            return document.getElementsByTagName("script")
        }
        function defaultOnError(e) {
            throw e
        }
        function getGlobal(e) {
            if (!e)
                return e;
            var t = global;
            return each(e.split("."), function(e) {
                t = t[e]
            }), t
        }
        function makeError(e, t, n, r) {
            var i = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
            return i.requireType = e, i.requireModules = r, n && (i.originalError = n), i
        }
        function newContext(e) {
            function v(e) {
                var t, n;
                for (t = 0; e[t]; t += 1) {
                    n = e[t];
                    if (n === ".")
                        e.splice(t, 1), t -= 1;
                    else if (n === "..") {
                        if (t === 1 && (e[2] === ".." || e[0] === ".."))
                            break;
                        t > 0 && (e.splice(t - 1, 2), t -= 2)
                    }
                }
            }
            function m(e, t, n) {
                var r, i, s, u, a, f, l, c, h, p, d, m = t && t.split("/"), g = m, y = o.map, b = y && y["*"];
                e && e.charAt(0) === "." && (t ? (getOwn(o.pkgs, t) ? g = m = [t] : g = m.slice(0, m.length - 1), e = g.concat(e.split("/")), v(e), i = getOwn(o.pkgs, r = e[0]), e = e.join("/"), i && e === r + "/" + i.main && (e = r)) : e.indexOf("./") === 0 && (e = e.substring(2)));
                if (n && y && (m || b)) {
                    u = e.split("/");
                    for (a = u.length; a > 0; a -= 1) {
                        l = u.slice(0, a).join("/");
                        if (m)
                            for (f = m.length; f > 0; f -= 1) {
                                s = getOwn(y, m.slice(0, f).join("/"));
                                if (s) {
                                    s = getOwn(s, l);
                                    if (s) {
                                        c = s, h = a;
                                        break
                                    }
                                }
                            }
                        if (c)
                            break;
                        !p && b && getOwn(b, l) && (p = getOwn(b, l), d = a)
                    }
                    !c && p && (c = p, h = d), c && (u.splice(0, h, c), e = u.join("/"))
                }
                return e
            }
            function g(e) {
                isBrowser && each(scripts(), function(t) {
                    if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === r.contextName)
                        return t.parentNode.removeChild(t), !0
                })
            }
            function y(e) {
                var t = getOwn(o.paths, e);
                if (t && isArray(t) && t.length > 1)
                    return g(e), t.shift(), r.require.undef(e), r.require([e]), !0
            }
            function b(e) {
                var t, n = e ? e.indexOf("!"): - 1;
                return n>-1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
            }
            function w(e, t, n, i) {
                var s, o, u, a, f = null, l = t ? t.name: null, h = e, v=!0, g = "";
                return e || (v=!1, e = "_@r" + (p += 1)), a = b(e), f = a[0], e = a[1], f && (f = m(f, l, i), o = getOwn(c, f)), e && (f ? o && o.normalize ? g = o.normalize(e, function(e) {
                    return m(e, l, i)
                }) : g = m(e, l, i) : (g = m(e, l, i), a = b(g), f = a[0], g = a[1], n=!0, s = r.nameToUrl(g))), u = f&&!o&&!n ? "_unnormalized" + (d += 1) : "", {
                    prefix: f,
                    name: g,
                    parentMap: t,
                    unnormalized: !!u,
                    url: s,
                    originalName: h,
                    isDefine: v,
                    id: (f ? f + "!" + g : g) + u
                }
            }
            function E(e) {
                var t = e.id, n = getOwn(u, t);
                return n || (n = u[t] = new r.Module(e)), n
            }
            function S(e, t, n) {
                var r = e.id, i = getOwn(u, r);
                hasProp(c, r) && (!i || i.defineEmitComplete) ? t === "defined" && n(c[r]) : (i = E(e), i.error && t === "error" ? n(i.error) : i.on(t, n))
            }
            function x(e, t) {
                var n = e.requireModules, r=!1;
                t ? t(e) : (each(n, function(t) {
                    var n = getOwn(u, t);
                    n && (n.error = e, n.events.error && (r=!0, n.emit("error", e)))
                }), r || req.onError(e))
            }
            function T() {
                globalDefQueue.length && (apsp.apply(l, [l.length - 1, 0].concat(globalDefQueue)), globalDefQueue = [])
            }
            function N(e) {
                delete u[e], delete a[e]
            }
            function C(e, t, n) {
                var r = e.map.id;
                e.error ? e.emit("error", e.error) : (t[r]=!0, each(e.depMaps, function(r, i) {
                    var s = r.id, o = getOwn(u, s);
                    o&&!e.depMatched[i]&&!n[s] && (getOwn(t, s) ? (e.defineDep(i, c[s]), e.check()) : C(o, t, n))
                }), n[r]=!0)
            }
            function k() {
                var e, n, i, u, f = o.waitSeconds * 1e3, l = f && r.startTime + f < (new Date).getTime(), c = [], h = [], p=!1, d=!0;
                if (t)
                    return;
                t=!0, eachProp(a, function(t) {
                    e = t.map, n = e.id;
                    if (!t.enabled)
                        return;
                    e.isDefine || h.push(t);
                    if (!t.error)
                        if (!t.inited && l)
                            y(n) ? (u=!0, p=!0) : (c.push(n), g(n));
                        else if (!t.inited && t.fetched && e.isDefine) {
                            p=!0;
                            if (!e.prefix)
                                return d=!1
                        }
                });
                if (l && c.length)
                    return i = makeError("timeout", "Load timeout for modules: " + c, null, c), i.contextName = r.contextName, x(i);
                d && each(h, function(e) {
                    C(e, {}, {})
                }), (!l || u) && p && (isBrowser || isWebWorker)&&!s && (s = setTimeout(function() {
                    s = 0, k()
                }, 50)), t=!1
            }
            function L(e) {
                hasProp(c, e[0]) || E(w(e[0], null, !0)).init(e[1], e[2])
            }
            function A(e, t, n, r) {
                e.detachEvent&&!isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(n, t, !1)
            }
            function O(e) {
                var t = e.currentTarget || e.srcElement;
                return A(t, r.onScriptLoad, "load", "onreadystatechange"), A(t, r.onScriptError, "error"), {
                    node: t,
                    id: t && t.getAttribute("data-requiremodule")
                }
            }
            function M() {
                var e;
                T();
                while (l.length) {
                    e = l.shift();
                    if (e[0] === null)
                        return x(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                    L(e)
                }
            }
            var t, n, r, i, s, o = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                pkgs: {},
                shim: {},
                config: {}
            }, u = {}, a = {}, f = {}, l = [], c = {}, h = {}, p = 1, d = 1;
            return i = {
                require: function(e) {
                    return e.require ? e.require : e.require = r.makeRequire(e.map)
                },
                exports: function(e) {
                    e.usingExports=!0;
                    if (e.map.isDefine)
                        return e.exports ? e.exports : e.exports = c[e.map.id] = {}
                },
                module: function(e) {
                    return e.module ? e.module: e.module = {
                        id: e.map.id,
                        uri: e.map.url,
                        config: function() {
                            var t,
                            n = getOwn(o.pkgs,
                            e.map.id);
                            return t = n ? getOwn(o.config,
                            e.map.id + "/" + n.main): getOwn(o.config,
                            e.map.id),
                            t || {}
                        }, exports: c[e.map.id]
                    }
                }
            }, n = function(e) {
                this.events = getOwn(f, e.id) || {}, this.map = e, this.shim = getOwn(o.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
            }, n.prototype = {
                init: function(e, t, n, r) {
                    r = r || {};
                    if (this.inited)
                        return;
                    this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function(e) {
                        this.emit("error", e)
                    })), this.depMaps = e && e.slice(0), this.errback = n, this.inited=!0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check()
                },
                defineDep: function(e, t) {
                    this.depMatched[e] || (this.depMatched[e]=!0, this.depCount -= 1, this.depExports[e] = t)
                },
                fetch: function() {
                    if (this.fetched)
                        return;
                    this.fetched=!0, r.startTime = (new Date).getTime();
                    var e = this.map;
                    if (!this.shim)
                        return e.prefix ? this.callPlugin() : this.load();
                    r.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this, function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    }))
                },
                load: function() {
                    var e = this.map.url;
                    h[e] || (h[e]=!0, r.load(this.map.id, e))
                },
                check: function() {
                    if (!this.enabled || this.enabling)
                        return;
                    var e, t, n = this.map.id, i = this.depExports, s = this.exports, o = this.factory;
                    if (!this.inited)
                        this.fetch();
                    else if (this.error)
                        this.emit("error", this.error);
                    else if (!this.defining) {
                        this.defining=!0;
                        if (this.depCount < 1&&!this.defined) {
                            if (isFunction(o)) {
                                if (this.events.error && this.map.isDefine || req.onError !== defaultOnError)
                                    try {
                                        s = r.execCb(n, o, i, s)
                                    } catch (u) {
                                    e = u
                                } else 
                                    s = r.execCb(n, o, i, s);
                                this.map.isDefine && (t = this.module, t && t.exports !== undefined && t.exports !== this.exports ? s = t.exports : s === undefined && this.usingExports && (s = this.exports));
                                if (e)
                                    return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", x(this.error = e)
                                } else 
                                    s = o;
                            this.exports = s, this.map.isDefine&&!this.ignore && (c[n] = s, req.onResourceLoad && req.onResourceLoad(r, this.map, this.depMaps)), N(n), this.defined=!0
                        }
                        this.defining=!1, this.defined&&!this.defineEmitted && (this.defineEmitted=!0, this.emit("defined", this.exports), this.defineEmitComplete=!0)
                    }
                },
                callPlugin: function() {
                    var e = this.map, t = e.id, n = w(e.prefix);
                    this.depMaps.push(n), S(n, "defined", bind(this, function(n) {
                        var i, s, a, f = this.map.name, l = this.map.parentMap ? this.map.parentMap.name: null, c = r.makeRequire(e.parentMap, {
                            enableBuildCallback: !0
                        });
                        if (this.map.unnormalized) {
                            n.normalize && (f = n.normalize(f, function(e) {
                                return m(e, l, !0)
                            }) || ""), s = w(e.prefix + "!" + f, this.map.parentMap), S(s, "defined", bind(this, function(e) {
                                this.init([], function() {
                                    return e
                                }, null, {
                                    enabled: !0,
                                    ignore: !0
                                })
                            })), a = getOwn(u, s.id), a && (this.depMaps.push(s), this.events.error && a.on("error", bind(this, function(e) {
                                this.emit("error", e)
                            })), a.enable());
                            return 
                        }
                        i = bind(this, function(e) {
                            this.init([], function() {
                                return e
                            }, null, {
                                enabled: !0
                            })
                        }), i.error = bind(this, function(e) {
                            this.inited=!0, this.error = e, e.requireModules = [t], eachProp(u, function(e) {
                                e.map.id.indexOf(t + "_unnormalized") === 0 && N(e.map.id)
                            }), x(e)
                        }), i.fromText = bind(this, function(n, s) {
                            var u = e.name, a = w(u), f = useInteractive;
                            s && (n = s), f && (useInteractive=!1), E(a), hasProp(o.config, t) && (o.config[u] = o.config[t]);
                            try {
                                req.exec(n)
                            } catch (l) {
                                return x(makeError("fromtexteval", "fromText eval for " + t + " failed: " + l, l, [t]))
                            }
                            f && (useInteractive=!0), this.depMaps.push(a), r.completeLoad(u), c([u], i)
                        }), n.load(e.name, c, i, o)
                    })), r.enable(n, this), this.pluginMaps[n.id] = n
                },
                enable: function() {
                    a[this.map.id] = this, this.enabled=!0, this.enabling=!0, each(this.depMaps, bind(this, function(e, t) {
                        var n, s, o;
                        if (typeof e == "string") {
                            e = w(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, o = getOwn(i, e.id);
                            if (o) {
                                this.depExports[t] = o(this);
                                return 
                            }
                            this.depCount += 1, S(e, "defined", bind(this, function(e) {
                                this.defineDep(t, e), this.check()
                            })), this.errback && S(e, "error", bind(this, this.errback))
                        }
                        n = e.id, s = u[n], !hasProp(i, n) && s&&!s.enabled && r.enable(e, this)
                    })), eachProp(this.pluginMaps, bind(this, function(e) {
                        var t = getOwn(u, e.id);
                        t&&!t.enabled && r.enable(e, this)
                    })), this.enabling=!1, this.check()
                },
                on: function(e, t) {
                    var n = this.events[e];
                    n || (n = this.events[e] = []), n.push(t)
                },
                emit: function(e, t) {
                    each(this.events[e], function(e) {
                        e(t)
                    }), e === "error" && delete this.events[e]
                }
            }, r = {
                config: o,
                contextName: e,
                registry: u,
                defined: c,
                urlFetched: h,
                defQueue: l,
                Module: n,
                makeModuleMap: w,
                nextTick: req.nextTick,
                onError: x,
                configure: function(e) {
                    e.baseUrl && e.baseUrl.charAt(e.baseUrl.length - 1) !== "/" && (e.baseUrl += "/");
                    var t = o.pkgs, n = o.shim, i = {
                        paths: !0,
                        config: !0,
                        map: !0
                    };
                    eachProp(e, function(e, t) {
                        i[t] ? t === "map" ? (o.map || (o.map = {}), mixin(o[t], e, !0, !0)) : mixin(o[t], e, !0) : o[t] = e
                    }), e.shim && (eachProp(e.shim, function(e, t) {
                        isArray(e) && (e = {
                            deps: e
                        }), (e.exports || e.init)&&!e.exportsFn && (e.exportsFn = r.makeShimExports(e)), n[t] = e
                    }), o.shim = n), e.packages && (each(e.packages, function(e) {
                        var n;
                        e = typeof e == "string" ? {
                            name: e
                        } : e, n = e.location, t[e.name] = {
                            name: e.name,
                            location: n || e.name,
                            main: (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                        }
                    }), o.pkgs = t), eachProp(u, function(e, t) {
                        !e.inited&&!e.map.unnormalized && (e.map = w(t))
                    }), (e.deps || e.callback) && r.require(e.deps || [], e.callback)
                },
                makeShimExports: function(e) {
                    function t() {
                        var t;
                        return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                    }
                    return t
                },
                makeRequire: function(t, n) {
                    function s(o, a, f) {
                        var l, h, p;
                        return n.enableBuildCallback && a && isFunction(a) && (a.__requireJsBuild=!0), typeof o == "string" ? isFunction(a) ? x(makeError("requireargs", "Invalid require call"), f) : t && hasProp(i, o) ? i[o](u[t.id]) : req.get ? req.get(r, o, t, s) : (h = w(o, t, !1, !0), l = h.id, hasProp(c, l) ? c[l] : x(makeError("notloaded", 'Module name "' + l + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (M(), r.nextTick(function() {
                            M(), p = E(w(null, t)), p.skipMap = n.skipMap, p.init(o, a, f, {
                                enabled: !0
                            }), k()
                        }), s)
                    }
                    return n = n || {}, mixin(s, {
                        isBrowser: isBrowser,
                        toUrl: function(e) {
                            var n, i = e.lastIndexOf("."), s = e.split("/")[0], o = s === "." || s === "..";
                            return i!==-1 && (!o || i > 1) && (n = e.substring(i, e.length), e = e.substring(0, i)), r.nameToUrl(m(e, t && t.id, !0), n, !0)
                        },
                        defined: function(e) {
                            return hasProp(c, w(e, t, !1, !0).id)
                        },
                        specified: function(e) {
                            return e = w(e, t, !1, !0).id, hasProp(c, e) || hasProp(u, e)
                        }
                    }), t || (s.undef = function(e) {
                        T();
                        var n = w(e, t, !0), r = getOwn(u, e);
                        delete c[e], delete h[n.url], delete f[e], r && (r.events.defined && (f[e] = r.events), N(e))
                    }), s
                },
                enable: function(e) {
                    var t = getOwn(u, e.id);
                    t && E(e).enable()
                },
                completeLoad: function(e) {
                    var t, n, r, i = getOwn(o.shim, e) || {}, s = i.exports;
                    T();
                    while (l.length) {
                        n = l.shift();
                        if (n[0] === null) {
                            n[0] = e;
                            if (t)
                                break;
                            t=!0
                        } else 
                            n[0] === e && (t=!0);
                        L(n)
                    }
                    r = getOwn(u, e);
                    if (!t&&!hasProp(c, e) && r&&!r.inited) {
                        if (o.enforceDefine && (!s ||!getGlobal(s))) {
                            if (y(e))
                                return;
                            return x(makeError("nodefine", "No define call for " + e, null, [e]))
                        }
                        L([e, i.deps || [], i.exportsFn])
                    }
                    k()
                },
                nameToUrl: function(e, t, n) {
                    var r, i, s, u, a, f, l, c, h;
                    if (req.jsExtRegExp.test(e))
                        c = e + (t || "");
                    else {
                        r = o.paths, i = o.pkgs, a = e.split("/");
                        for (f = a.length; f > 0; f -= 1) {
                            l = a.slice(0, f).join("/"), s = getOwn(i, l), h = getOwn(r, l);
                            if (h) {
                                isArray(h) && (h = h[0]), a.splice(0, f, h);
                                break
                            }
                            if (s) {
                                e === s.name ? u = s.location + "/" + s.main : u = s.location, a.splice(0, f, u);
                                break
                            }
                        }
                        c = a.join("/"), c += t || (/\?/.test(c) || n ? "" : ".js"), c = (c.charAt(0) === "/" || c.match(/^[\w\+\.\-]+:/) ? "" : o.baseUrl) + c
                    }
                    return o.urlArgs ? c + ((c.indexOf("?")===-1 ? "?" : "&") + o.urlArgs) : c
                },
                load: function(e, t) {
                    req.load(r, e, t)
                },
                execCb: function(e, t, n, r) {
                    return t.apply(r, n)
                },
                onScriptLoad: function(e) {
                    if (e.type === "load" || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                        interactiveScript = null;
                        var t = O(e);
                        r.completeLoad(t.id)
                    }
                },
                onScriptError: function(e) {
                    var t = O(e);
                    if (!y(t.id))
                        return x(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
                }
            }, r.require = r.makeRequire(), r
        }
        function getInteractiveScript() {
            return interactiveScript && interactiveScript.readyState === "interactive" ? interactiveScript : (eachReverse(scripts(), function(e) {
                if (e.readyState === "interactive")
                    return interactiveScript = e
            }), interactiveScript)
        }
        var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.8", commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg, cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/, currDirRegExp = /^\.\//, op = Object.prototype, ostring = op.toString, hasOwn = op.hasOwnProperty, ap = Array.prototype, apsp = ap.splice, isBrowser = typeof window != "undefined"&&!!navigator&&!!window.document, isWebWorker=!isBrowser && typeof importScripts != "undefined", readyRegExp = isBrowser && navigator.platform === "PLAYSTATION 3" ? /^complete$/ : /^(complete|loaded)$/, defContextName = "_", isOpera = typeof opera != "undefined" && opera.toString() === "[object Opera]", contexts = {}, cfg = {}, globalDefQueue = [], useInteractive=!1;
        if (typeof define != "undefined")
            return;
        if (typeof requirejs != "undefined") {
            if (isFunction(requirejs))
                return;
            cfg = requirejs, requirejs = undefined
        }
        typeof require != "undefined"&&!isFunction(require) && (cfg = require, require = undefined), req = requirejs = function(e, t, n, r) {
            var i, s, o = defContextName;
            return !isArray(e) && typeof e != "string" && (s = e, isArray(t) ? (e = t, t = n, n = r) : e = []), s && s.context && (o = s.context), i = getOwn(contexts, o), i || (i = contexts[o] = req.s.newContext(o)), s && i.configure(s), i.require(e, t, n)
        }, req.config = function(e) {
            return req(e)
        }, req.nextTick = typeof setTimeout != "undefined" ? function(e) {
            setTimeout(e, 4)
        } : function(e) {
            e()
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
            req[e] = function() {
                var t = contexts[defContextName];
                return t.require[e].apply(t, arguments)
            }
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(e, t, n) {
            var r = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script"): document.createElement("script");
            return r.type = e.scriptType || "text/javascript", r.charset = "utf-8", r.async=!0, r
        }, req.load = function(e, t, n) {
            var r = e && e.config || {}, i;
            if (isBrowser)
                return i = req.createNode(r, t, n), i.setAttribute("data-requirecontext", e.contextName), i.setAttribute("data-requiremodule", t), i.attachEvent&&!(i.attachEvent.toString && i.attachEvent.toString().indexOf("[native code") < 0)&&!isOpera ? (useInteractive=!0, i.attachEvent("onreadystatechange", e.onScriptLoad)) : (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)), i.src = n, currentlyAddingScript = i, baseElement ? head.insertBefore(i, baseElement) : head.appendChild(i), currentlyAddingScript = null, i;
            if (isWebWorker)
                try {
                    importScripts(n), e.completeLoad(t)
            } catch (s) {
                e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, s, [t]))
            }
        }, isBrowser && eachReverse(scripts(), function(e) {
            head || (head = e.parentNode), dataMain = e.getAttribute("data-main");
            if (dataMain)
                return mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
        }), define = function(e, t, n) {
            var r, i;
            typeof e != "string" && (n = t, t = e, e = null), isArray(t) || (n = t, t = null), !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(e, n) {
                t.push(n)
            }), t = (n.length === 1 ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (r = currentlyAddingScript || getInteractiveScript(), r && (e || (e = r.getAttribute("data-requiremodule")), i = contexts[r.getAttribute("data-requirecontext")])), (i ? i.defQueue : globalDefQueue).push([e, t, n])
        }, define.amd = {
            jQuery: !0
        }, req.exec = function(text) {
            return eval(text)
        }, req(cfg)
    })({}, {}), define("requireLib", function() {}), function(e, t, n) {
        typeof module != "undefined" && module.exports ? module.exports = n() : typeof define == "function" && define.amd ? define("bean", n) : t[e] = n()
    }("bean", this, function(e, t) {
        e = e || "bean", t = t || this;
        var n = window, r = t[e], i = /[^\.]*(?=\..*)\.|.*/, s = /\..*/, o = "addEventListener", u = "removeEventListener", a = document || {}, f = a.documentElement || {}, l = f[o], c = l ? o: "attachEvent", h = {}, p = Array.prototype.slice, d = function(e, t) {
            return e.split(t || " ")
        }, v = function(e) {
            return typeof e == "string"
        }, m = function(e) {
            return typeof e == "function"
        }, g = "click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll ", y = "show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinputreadystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ", b = function(e, t, n) {
            for (n = 0; n < t.length; n++)
                t[n] && (e[t[n]] = 1);
            return e
        }({}, d(g + (l ? y : ""))), w = function() {
            var e = "compareDocumentPosition"in f ? function(e, t) {
                return t.compareDocumentPosition && (t.compareDocumentPosition(e) & 16) === 16
            }
            : "contains"in f ? function(e, t) {
                return t = t.nodeType === 9 || t === window ? f : t, t !== e && t.contains(e)
            }
            : function(e, t) {
                while (e = e.parentNode)
                    if (e === t)
                        return 1;
                return 0
            }, t = function(t) {
                var n = t.relatedTarget;
                return n ? n !== this && n.prefix !== "xul"&&!/document/.test(this.toString())&&!e(n, this) : n == null
            };
            return {
                mouseenter: {
                    base: "mouseover",
                    condition: t
                },
                mouseleave: {
                    base: "mouseout",
                    condition: t
                },
                mousewheel: {
                    base: /Firefox/.test(navigator.userAgent) ? "DOMMouseScroll": "mousewheel"
                }
            }
        }(), E = function() {
            var e = d("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName"), t = e.concat(d("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement")), r = t.concat(d("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")), i = e.concat(d("char charCode key keyCode keyIdentifier keyLocation location")), s = e.concat(d("data")), o = e.concat(d("touches targetTouches changedTouches scale rotation")), u = e.concat(d("data origin source")), l = e.concat(d("state")), c = /over|out/, h = [{
                reg: /key/i,
                fix: function(e, t) {
                    return t.keyCode = e.keyCode || e.which, i
                }
            }, {
                reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,
                fix: function(e, n, r) {
                    n.rightClick = e.which === 3 || e.button === 2, n.pos = {
                        x: 0,
                        y: 0
                    };
                    if (e.pageX || e.pageY)
                        n.clientX = e.pageX, n.clientY = e.pageY;
                    else if (e.clientX || e.clientY)
                        n.clientX = e.clientX + a.body.scrollLeft + f.scrollLeft, n.clientY = e.clientY + a.body.scrollTop + f.scrollTop;
                    return c.test(r) && (n.relatedTarget = e.relatedTarget || e[(r == "mouseover" ? "from" : "to") + "Element"]), t
                }
            }, {
                reg: /mouse.*(wheel|scroll)/i,
                fix: function() {
                    return r
                }
            }, {
                reg: /^text/i,
                fix: function() {
                    return s
                }
            }, {
                reg: /^touch|^gesture/i,
                fix: function() {
                    return o
                }
            }, {
                reg: /^message$/i,
                fix: function() {
                    return u
                }
            }, {
                reg: /^popstate$/i,
                fix: function() {
                    return l
                }
            }, {
                reg: /.*/,
                fix: function() {
                    return e
                }
            }
            ], p = {}, v = function(e, t, r) {
                if (!arguments.length)
                    return;
                e = e || ((t.ownerDocument || t.document || t).parentWindow || n).event, this.originalEvent = e, this.isNative = r, this.isBean=!0;
                if (!e)
                    return;
                var i = e.type, s = e.target || e.srcElement, o, u, a, f, l;
                this.target = s && s.nodeType === 3 ? s.parentNode : s;
                if (r) {
                    l = p[i];
                    if (!l)
                        for (o = 0, u = h.length; o < u; o++)
                            if (h[o].reg.test(i)) {
                                p[i] = l = h[o].fix;
                                break
                            }
                    f = l(e, this, i);
                    for (o = f.length; o--;)
                        !((a = f[o])in this) && a in e && (this[a] = e[a])
                }
            };
            return v.prototype.preventDefault = function() {
                this.originalEvent.preventDefault ? this.originalEvent.preventDefault() : this.originalEvent.returnValue=!1
            }, v.prototype.stopPropagation = function() {
                this.originalEvent.stopPropagation ? this.originalEvent.stopPropagation() : this.originalEvent.cancelBubble=!0
            }, v.prototype.stop = function() {
                this.preventDefault(), this.stopPropagation(), this.stopped=!0
            }, v.prototype.stopImmediatePropagation = function() {
                this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation(), this.isImmediatePropagationStopped = function() {
                    return !0
                }
            }, v.prototype.isImmediatePropagationStopped = function() {
                return this.originalEvent.isImmediatePropagationStopped && this.originalEvent.isImmediatePropagationStopped()
            }, v.prototype.clone = function(e) {
                var t = new v(this, this.element, this.isNative);
                return t.currentTarget = e, t
            }, v
        }(), S = function(e, t) {
            return !l&&!t && (e === a || e === n) ? f : e
        }, x = function() {
            var e = function(e, t, n, r) {
                var i = function(n, i) {
                    return t.apply(e, r ? p.call(i, n ? 0 : 1).concat(r) : i)
                }, s = function(n, r) {
                    return t.__beanDel ? t.__beanDel.ft(n.target, e) : r
                }, o = n ? function(e) {
                    var t = s(e, this);
                    if (n.apply(t, arguments))
                        return e && (e.currentTarget = t), i(e, arguments)
                }
                : function(e) {
                    return t.__beanDel && (e = e.clone(s(e))), i(e, arguments)
                };
                return o.__beanDel = t.__beanDel, o
            }, t = function(t, n, r, i, s, o, u) {
                var a = w[n], f;
                n == "unload" && (r = A(O, t, n, r, i)), a && (a.condition && (r = e(t, r, a.condition, o)), n = a.base || n), this.isNative = f = b[n]&&!!t[c], this.customType=!l&&!f && n, this.element = t, this.type = n, this.original = i, this.namespaces = s, this.eventType = l || f ? n : "propertychange", this.target = S(t, f), this[c]=!!this.target[c], this.root = u, this.handler = e(t, r, null, o)
            };
            return t.prototype.inNamespaces = function(e) {
                var t, n, r = 0;
                if (!e)
                    return !0;
                if (!this.namespaces)
                    return !1;
                for (t = e.length; t--;)
                    for (n = this.namespaces.length; n--;)
                        e[t] == this.namespaces[n] && r++;
                return e.length === r
            }, t.prototype.matches = function(e, t, n) {
                return this.element === e && (!t || this.original === t) && (!n || this.handler === n)
            }, t
        }(), T = function() {
            var e = {}, t = function(n, r, i, s, o, u) {
                var a = o ? "r": "$";
                if (!r || r == "*")
                    for (var f in e)
                        f.charAt(0) == a && t(n, f.substr(1), i, s, o, u);
                else {
                    var l = 0, c, h = e[a + r], p = n == "*";
                    if (!h)
                        return;
                    for (c = h.length; l < c; l++)
                        if ((p || h[l].matches(n, i, s))&&!u(h[l], h, l, r))
                            return 
                }
            }, n = function(t, n, r, i) {
                var s, o = e[(i ? "r" : "$") + n];
                if (o)
                    for (s = o.length; s--;)
                        if (!o[s].root && o[s].matches(t, r, null))
                            return !0;
                return !1
            }, r = function(e, n, r, i) {
                var s = [];
                return t(e, n, r, null, i, function(e) {
                    return s.push(e)
                }), s
            }, i = function(t) {
                var n=!t.root&&!this.has(t.element, t.type, null, !1), r = (t.root ? "r" : "$") + t.type;
                return (e[r] || (e[r] = [])).push(t), n
            }, s = function(n) {
                t(n.element, n.type, null, n.handler, n.root, function(t, n, r) {
                    return n.splice(r, 1), t.removed=!0, n.length === 0 && delete e[(t.root ? "r" : "$") + t.type], !1
                })
            }, o = function() {
                var t, n = [];
                for (t in e)
                    t.charAt(0) == "$" && (n = n.concat(e[t]));
                return n
            };
            return {
                has: n,
                get: r,
                put: i,
                del: s,
                entries: o
            }
        }(), N, C = function(e) {
            arguments.length ? N = e : N = a.querySelectorAll ? function(e, t) {
                return t.querySelectorAll(e)
            } : function() {
                throw new Error("Bean: No selector engine installed")
            }
        }, k = function(e, t) {
            if (!l && t && e && e.propertyName != "_on" + t)
                return;
            var n = T.get(this, t || e.type, null, !1), r = n.length, i = 0;
            e = new E(e, this, !0), t && (e.type = t);
            for (; i < r&&!e.isImmediatePropagationStopped(); i++)
                n[i].removed || n[i].handler.call(this, e)
        }, L = l ? function(e, t, n) {
            e[n ? o: u](t, k, !1)
        }
        : function(e, t, n, r) {
            var i;
            n ? (T.put(i = new x(e, r || t, function(t) {
                k.call(e, t, r)
            }, k, null, null, !0)), r && e["_on" + r] == null && (e["_on" + r] = 0), i.target.attachEvent("on" + i.eventType, i.handler)) : (i = T.get(e, r || t, k, !0)[0], i && (i.target.detachEvent("on" + i.eventType, i.handler), T.del(i)))
        }, A = function(e, t, n, r, i) {
            return function() {
                r.apply(this, arguments), e(t, n, i)
            }
        }, O = function(e, t, n, r) {
            var i = t && t.replace(s, ""), o = T.get(e, i, null, !1), u = {}, a, f;
            for (a = 0, f = o.length; a < f; a++)(!n || o[a].original === n) 
                && o[a].inNamespaces(r) && (T.del(o[a]), !u[o[a].eventType] && o[a][c] && (u[o[a].eventType] = {
                    t: o[a].eventType,
                    c: o[a].type
                }));
            for (a in u)
                T.has(e, u[a].t, null, !1) || L(e, u[a].t, !1, u[a].c)
        }, M = function(e, t) {
            var n = function(t, n) {
                var r, i = v(e) ? N(e, n): e;
                for (; t && t !== n; t = t.parentNode)
                    for (r = i.length; r--;)
                        if (i[r] === t)
                            return t
            }, r = function(e) {
                var r = n(e.target, this);
                r && t.apply(r, arguments)
            };
            return r.__beanDel = {
                ft: n,
                selector: e
            }, r
        }, _ = l ? function(e, t, r) {
            var i = a.createEvent(e ? "HTMLEvents" : "UIEvents");
            i[e ? "initEvent": "initUIEvent"](t, !0, !0, n, 1), r.dispatchEvent(i)
        }
        : function(e, t, n) {
            n = S(n, e), e ? n.fireEvent("on" + t, a.createEventObject()) : n["_on" + t]++
        }, D = function(e, t, n) {
            var r = v(t), o, u, a, f;
            if (r && t.indexOf(" ") > 0) {
                t = d(t);
                for (f = t.length; f--;)
                    D(e, t[f], n);
                return e
            }
            u = r && t.replace(s, ""), u && w[u] && (u = w[u].base);
            if (!t || r) {
                if (a = r && t.replace(i, ""))
                    a = d(a, ".");
                O(e, u, n, a)
            } else if (m(t))
                O(e, null, t);
            else 
                for (o in t)
                    t.hasOwnProperty(o) && D(e, o, t[o]);
            return e
        }, P = function(e, t, n, r) {
            var o, u, a, f, l, v, g;
            if (n === undefined && typeof t == "object") {
                for (u in t)
                    t.hasOwnProperty(u) && P.call(this, e, u, t[u]);
                return 
            }
            m(n) ? (l = p.call(arguments, 3), r = o = n) : (o = r, l = p.call(arguments, 4), r = M(n, o, N)), a = d(t), this === h && (r = A(D, e, t, r, o));
            for (f = a.length; f--;)
                g = T.put(v = new x(e, a[f].replace(s, ""), r, o, d(a[f].replace(i, ""), "."), l, !1)), v[c] && g && L(e, v.eventType, !0, v.customType);
            return e
        }, H = function(e, t, n, r) {
            return P.apply(null, v(n) ? [e, n, t, r].concat(arguments.length > 3 ? p.call(arguments, 5) : []) : p.call(arguments))
        }, B = function() {
            return P.apply(h, arguments)
        }, j = function(e, t, n) {
            var r = d(t), o, u, a, f, l;
            for (o = r.length; o--;) {
                t = r[o].replace(s, "");
                if (f = r[o].replace(i, ""))
                    f = d(f, ".");
                if (!f&&!n && e[c])
                    _(b[t], t, e);
                else {
                    l = T.get(e, t, null, !1), n = [!1].concat(n);
                    for (u = 0, a = l.length; u < a; u++)
                        l[u].inNamespaces(f) && l[u].handler.apply(e, n)
                    }
            }
            return e
        }, F = function(e, t, n) {
            var r = T.get(t, n, null, !1), i = r.length, s = 0, o, u;
            for (; s < i; s++)
                r[s].original && (o = [e, r[s].type], (u = r[s].handler.__beanDel) && o.push(u.selector), o.push(r[s].original), P.apply(null, o));
            return e
        }, I = {
            on: P,
            add: H,
            one: B,
            off: D,
            remove: D,
            clone: F,
            fire: j,
            Event: E,
            setSelectorEngine: C,
            noConflict: function() {
                return t[e] = r, this
            }
        };
        if (n.attachEvent) {
            var q = function() {
                var e, t = T.entries();
                for (e in t)
                    t[e].type && t[e].type !== "unload" && D(t[e].element, t[e].type);
                n.detachEvent("onunload", q), n.CollectGarbage && n.CollectGarbage()
            };
            n.attachEvent("onunload", q)
        }
        return C(), I
    }), function() {
        var e = {}, t = e._, n = {}, r = Array.prototype, i = Object.prototype, s = Function.prototype, o = r.push, u = r.slice, a = r.concat, f = i.toString, l = i.hasOwnProperty, c = r.forEach, h = r.map, p = r.reduce, d = r.reduceRight, v = r.filter, m = r.every, g = r.some, y = r.indexOf, b = r.lastIndexOf, w = Array.isArray, E = Object.keys, S = s.bind, x = function(e) {
            if (e instanceof x)
                return e;
            if (!(this instanceof x))
                return new x(e);
            this._wrapped = e
        };
        typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.5.2";
        var T = x.each = x.forEach = function(e, t, r) {
            if (e == null)
                return;
            if (c && e.forEach === c)
                e.forEach(t, r);
            else if (e.length ===+ e.length) {
                for (var i = 0, s = e.length; i < s; i++)
                    if (t.call(r, e[i], i, e) === n)
                        return 
            } else {
                var o = x.keys(e);
                for (var i = 0, s = o.length; i < s; i++)
                    if (t.call(r, e[o[i]], o[i], e) === n)
                        return 
            }
        };
        x.map = x.collect = function(e, t, n) {
            var r = [];
            return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function(e, i, s) {
                r.push(t.call(n, e, i, s))
            }), r)
        };
        var N = "Reduce of empty array with no initial value";
        x.reduce = x.foldl = x.inject = function(e, t, n, r) {
            var i = arguments.length > 2;
            e == null && (e = []);
            if (p && e.reduce === p)
                return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
            T(e, function(e, s, o) {
                i ? n = t.call(r, n, e, s, o) : (n = e, i=!0)
            });
            if (!i)
                throw new TypeError(N);
            return n
        }, x.reduceRight = x.foldr = function(e, t, n, r) {
            var i = arguments.length > 2;
            e == null && (e = []);
            if (d && e.reduceRight === d)
                return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
            var s = e.length;
            if (s!==+s) {
                var o = x.keys(e);
                s = o.length
            }
            T(e, function(u, a, f) {
                a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i=!0)
            });
            if (!i)
                throw new TypeError(N);
            return n
        }, x.find = x.detect = function(e, t, n) {
            var r;
            return C(e, function(e, i, s) {
                if (t.call(n, e, i, s))
                    return r = e, !0
            }), r
        }, x.filter = x.select = function(e, t, n) {
            var r = [];
            return e == null ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function(e, i, s) {
                t.call(n, e, i, s) && r.push(e)
            }), r)
        }, x.reject = function(e, t, n) {
            return x.filter(e, function(e, r, i) {
                return !t.call(n, e, r, i)
            }, n)
        }, x.every = x.all = function(e, t, r) {
            t || (t = x.identity);
            var i=!0;
            return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function(e, s, o) {
                if (!(i = i && t.call(r, e, s, o)))
                    return n
            }), !!i)
        };
        var C = x.some = x.any = function(e, t, r) {
            t || (t = x.identity);
            var i=!1;
            return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function(e, s, o) {
                if (i || (i = t.call(r, e, s, o)))
                    return n
            }), !!i)
        };
        x.contains = x.include = function(e, t) {
            return e == null?!1 : y && e.indexOf === y ? e.indexOf(t)!=-1 : C(e, function(e) {
                return e === t
            })
        }, x.invoke = function(e, t) {
            var n = u.call(arguments, 2), r = x.isFunction(t);
            return x.map(e, function(e) {
                return (r ? t : e[t]).apply(e, n)
            })
        }, x.pluck = function(e, t) {
            return x.map(e, function(e) {
                return e[t]
            })
        }, x.where = function(e, t, n) {
            return x.isEmpty(t) ? n ? void 0 : [] : x[n ? "find": "filter"](e, function(e) {
                for (var n in t)
                    if (t[n] !== e[n])
                        return !1;
                return !0
            })
        }, x.findWhere = function(e, t) {
            return x.where(e, t, !0)
        }, x.max = function(e, t, n) {
            if (!t && x.isArray(e) && e[0] ===+ e[0] && e.length < 65535)
                return Math.max.apply(Math, e);
            if (!t && x.isEmpty(e))
                return - Infinity;
            var r = {
                computed: - Infinity,
                value: - Infinity
            };
            return T(e, function(e, i, s) {
                var o = t ? t.call(n, e, i, s): e;
                o > r.computed && (r = {
                    value: e,
                    computed: o
                })
            }), r.value
        }, x.min = function(e, t, n) {
            if (!t && x.isArray(e) && e[0] ===+ e[0] && e.length < 65535)
                return Math.min.apply(Math, e);
            if (!t && x.isEmpty(e))
                return Infinity;
            var r = {
                computed: Infinity,
                value: Infinity
            };
            return T(e, function(e, i, s) {
                var o = t ? t.call(n, e, i, s): e;
                o < r.computed && (r = {
                    value: e,
                    computed: o
                })
            }), r.value
        }, x.shuffle = function(e) {
            var t, n = 0, r = [];
            return T(e, function(e) {
                t = x.random(n++), r[n - 1] = r[t], r[t] = e
            }), r
        }, x.sample = function(e, t, n) {
            return arguments.length < 2 || n ? e[x.random(e.length - 1)] : x.shuffle(e).slice(0, Math.max(0, t))
        };
        var k = function(e) {
            return x.isFunction(e) ? e : function(t) {
                return t[e]
            }
        };
        x.sortBy = function(e, t, n) {
            var r = k(t);
            return x.pluck(x.map(e, function(e, t, i) {
                return {
                    value: e,
                    index: t,
                    criteria: r.call(n, e, t, i)
                }
            }).sort(function(e, t) {
                var n = e.criteria, r = t.criteria;
                if (n !== r) {
                    if (n > r || n === void 0)
                        return 1;
                    if (n < r || r === void 0)
                        return - 1
                }
                return e.index - t.index
            }), "value")
        };
        var L = function(e) {
            return function(t, n, r) {
                var i = {}, s = n == null ? x.identity: k(n);
                return T(t, function(n, o) {
                    var u = s.call(r, n, o, t);
                    e(i, u, n)
                }), i
            }
        };
        x.groupBy = L(function(e, t, n) {
            (x.has(e, t) ? e[t] : e[t] = []).push(n)
        }), x.indexBy = L(function(e, t, n) {
            e[t] = n
        }), x.countBy = L(function(e, t) {
            x.has(e, t) ? e[t]++ : e[t] = 1
        }), x.sortedIndex = function(e, t, n, r) {
            n = n == null ? x.identity : k(n);
            var i = n.call(r, t), s = 0, o = e.length;
            while (s < o) {
                var u = s + o>>>1;
                n.call(r, e[u]) < i ? s = u + 1 : o = u
            }
            return s
        }, x.toArray = function(e) {
            return e ? x.isArray(e) ? u.call(e) : e.length ===+ e.length ? x.map(e, x.identity) : x.values(e) : []
        }, x.size = function(e) {
            return e == null ? 0 : e.length ===+ e.length ? e.length : x.keys(e).length
        }, x.first = x.head = x.take = function(e, t, n) {
            return e == null ? void 0 : t == null || n ? e[0] : u.call(e, 0, t)
        }, x.initial = function(e, t, n) {
            return u.call(e, 0, e.length - (t == null || n ? 1 : t))
        }, x.last = function(e, t, n) {
            return e == null ? void 0 : t == null || n ? e[e.length - 1] : u.call(e, Math.max(e.length - t, 0))
        }, x.rest = x.tail = x.drop = function(e, t, n) {
            return u.call(e, t == null || n ? 1 : t)
        }, x.compact = function(e) {
            return x.filter(e, x.identity)
        };
        var A = function(e, t, n) {
            return t && x.every(e, x.isArray) ? a.apply(n, e) : (T(e, function(e) {
                x.isArray(e) || x.isArguments(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
            }), n)
        };
        x.flatten = function(e, t) {
            return A(e, t, [])
        }, x.without = function(e) {
            return x.difference(e, u.call(arguments, 1))
        }, x.uniq = x.unique = function(e, t, n, r) {
            x.isFunction(t) && (r = n, n = t, t=!1);
            var i = n ? x.map(e, n, r): e, s = [], o = [];
            return T(i, function(n, r) {
                if (t?!r || o[o.length - 1] !== n : !x.contains(o, n)
                    )o.push(n), s.push(e[r])
            }), s
        }, x.union = function() {
            return x.uniq(x.flatten(arguments, !0))
        }, x.intersection = function(e) {
            var t = u.call(arguments, 1);
            return x.filter(x.uniq(e), function(e) {
                return x.every(t, function(t) {
                    return x.indexOf(t, e) >= 0
                })
            })
        }, x.difference = function(e) {
            var t = a.apply(r, u.call(arguments, 1));
            return x.filter(e, function(e) {
                return !x.contains(t, e)
            })
        }, x.zip = function() {
            var e = x.max(x.pluck(arguments, "length").concat(0)), t = new Array(e);
            for (var n = 0; n < e; n++)
                t[n] = x.pluck(arguments, "" + n);
            return t
        }, x.object = function(e, t) {
            if (e == null)
                return {};
            var n = {};
            for (var r = 0, i = e.length; r < i; r++)
                t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
            return n
        }, x.indexOf = function(e, t, n) {
            if (e == null)
                return - 1;
            var r = 0, i = e.length;
            if (n) {
                if (typeof n != "number")
                    return r = x.sortedIndex(e, t), e[r] === t ? r : - 1;
                r = n < 0 ? Math.max(0, i + n) : n
            }
            if (y && e.indexOf === y)
                return e.indexOf(t, n);
            for (; r < i; r++)
                if (e[r] === t)
                    return r;
            return - 1
        }, x.lastIndexOf = function(e, t, n) {
            if (e == null)
                return - 1;
            var r = n != null;
            if (b && e.lastIndexOf === b)
                return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
            var i = r ? n: e.length;
            while (i--)
                if (e[i] === t)
                    return i;
            return - 1
        }, x.range = function(e, t, n) {
            arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
            var r = Math.max(Math.ceil((t - e) / n), 0), i = 0, s = new Array(r);
            while (i < r)
                s[i++] = e, e += n;
            return s
        };
        var O = function() {};
        x.bind = function(e, t) {
            var n, r;
            if (S && e.bind === S)
                return S.apply(e, u.call(arguments, 1));
            if (!x.isFunction(e))
                throw new TypeError;
            return n = u.call(arguments, 2), r = function() {
                if (this instanceof r) {
                    O.prototype = e.prototype;
                    var i = new O;
                    O.prototype = null;
                    var s = e.apply(i, n.concat(u.call(arguments)));
                    return Object(s) === s ? s : i
                }
                return e.apply(t, n.concat(u.call(arguments)))
            }
        }, x.partial = function(e) {
            var t = u.call(arguments, 1);
            return function() {
                return e.apply(this, t.concat(u.call(arguments)))
            }
        }, x.bindAll = function(e) {
            var t = u.call(arguments, 1);
            if (t.length === 0)
                throw new Error("bindAll must be passed function names");
            return T(t, function(t) {
                e[t] = x.bind(e[t], e)
            }), e
        }, x.memoize = function(e, t) {
            var n = {};
            return t || (t = x.identity), function() {
                var r = t.apply(this, arguments);
                return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
            }
        }, x.delay = function(e, t) {
            var n = u.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }, x.defer = function(e) {
            return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
        }, x.throttle = function(e, t, n) {
            var r, i, s, o = null, u = 0;
            n || (n = {});
            var a = function() {
                u = n.leading===!1 ? 0 : new Date, o = null, s = e.apply(r, i)
            };
            return function() {
                var f = new Date;
                !u && n.leading===!1 && (u = f);
                var l = t - (f - u);
                return r = this, i = arguments, l <= 0 ? (clearTimeout(o), o = null, u = f, s = e.apply(r, i)) : !o && n.trailing!==!1 && (o = setTimeout(a, l)), s
            }
        }, x.debounce = function(e, t, n) {
            var r, i, s, o, u;
            return function() {
                s = this, i = arguments, o = new Date;
                var a = function() {
                    var f = new Date - o;
                    f < t ? r = setTimeout(a, t - f) : (r = null, n || (u = e.apply(s, i)))
                }, f = n&&!r;
                return r || (r = setTimeout(a, t)), f && (u = e.apply(s, i)), u
            }
        }, x.once = function(e) {
            var t=!1, n;
            return function() {
                return t ? n : (t=!0, n = e.apply(this, arguments), e = null, n)
            }
        }, x.wrap = function(e, t) {
            return function() {
                var n = [e];
                return o.apply(n, arguments), t.apply(this, n)
            }
        }, x.compose = function() {
            var e = arguments;
            return function() {
                var t = arguments;
                for (var n = e.length - 1; n >= 0; n--)
                    t = [e[n].apply(this, t)];
                return t[0]
            }
        }, x.after = function(e, t) {
            return function() {
                if (--e < 1)
                    return t.apply(this, arguments)
            }
        }, x.keys = E || function(e) {
            if (e !== Object(e))
                throw new TypeError("Invalid object");
            var t = [];
            for (var n in e)
                x.has(e, n) && t.push(n);
            return t
        }, x.values = function(e) {
            var t = x.keys(e), n = t.length, r = new Array(n);
            for (var i = 0; i < n; i++)
                r[i] = e[t[i]];
            return r
        }, x.pairs = function(e) {
            var t = x.keys(e), n = t.length, r = new Array(n);
            for (var i = 0; i < n; i++)
                r[i] = [t[i], e[t[i]]];
            return r
        }, x.invert = function(e) {
            var t = {}, n = x.keys(e);
            for (var r = 0, i = n.length; r < i; r++)
                t[e[n[r]]] = n[r];
            return t
        }, x.functions = x.methods = function(e) {
            var t = [];
            for (var n in e)
                x.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, x.extend = function(e) {
            return T(u.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t)
                        e[n] = t[n]
            }), e
        }, x.pick = function(e) {
            var t = {}, n = a.apply(r, u.call(arguments, 1));
            return T(n, function(n) {
                n in e && (t[n] = e[n])
            }), t
        }, x.omit = function(e) {
            var t = {}, n = a.apply(r, u.call(arguments, 1));
            for (var i in e)
                x.contains(n, i) || (t[i] = e[i]);
            return t
        }, x.defaults = function(e) {
            return T(u.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t)
                        e[n] === void 0 && (e[n] = t[n])
            }), e
        }, x.clone = function(e) {
            return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
        }, x.tap = function(e, t) {
            return t(e), e
        };
        var M = function(e, t, n, r) {
            if (e === t)
                return e !== 0 || 1 / e == 1 / t;
            if (e == null || t == null)
                return e === t;
            e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
            var i = f.call(e);
            if (i != f.call(t))
                return !1;
            switch (i) {
            case"[object String]":
                return e == String(t);
            case"[object Number]":
                return e!=+e ? t!=+t : e == 0 ? 1 / e == 1 / t : e ==+ t;
            case"[object Date]":
            case"[object Boolean]":
                return + e ==+ t;
            case"[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
            }
            if (typeof e != "object" || typeof t != "object")
                return !1;
            var s = n.length;
            while (s--)
                if (n[s] == e)
                    return r[s] == t;
            var o = e.constructor, u = t.constructor;
            if (o !== u&&!(x.isFunction(o) && o instanceof o && x.isFunction(u) && u instanceof u))
                return !1;
            n.push(e), r.push(t);
            var a = 0, l=!0;
            if (i == "[object Array]") {
                a = e.length, l = a == t.length;
                if (l)
                    while (a--)
                        if (!(l = M(e[a], t[a], n, r)))
                            break
            } else {
                for (var c in e)
                    if (x.has(e, c)) {
                        a++;
                        if (!(l = x.has(t, c) && M(e[c], t[c], n, r)))
                            break
                    }
                if (l) {
                    for (c in t)
                        if (x.has(t, c)&&!(a--))
                            break;
                    l=!a
                }
            }
            return n.pop(), r.pop(), l
        };
        x.isEqual = function(e, t) {
            return M(e, t, [], [])
        }, x.isEmpty = function(e) {
            if (e == null)
                return !0;
            if (x.isArray(e) || x.isString(e))
                return e.length === 0;
            for (var t in e)
                if (x.has(e, t))
                    return !1;
            return !0
        }, x.isElement = function(e) {
            return !!e && e.nodeType === 1
        }, x.isArray = w || function(e) {
            return f.call(e) == "[object Array]"
        }, x.isObject = function(e) {
            return e === Object(e)
        }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
            x["is" + e] = function(t) {
                return f.call(t) == "[object " + e + "]"
            }
        }), x.isArguments(arguments) || (x.isArguments = function(e) {
            return !!e&&!!x.has(e, "callee")
        }), typeof /./ != "function" && (x.isFunction = function(e) {
            return typeof e == "function"
        }), x.isFinite = function(e) {
            return isFinite(e)&&!isNaN(parseFloat(e))
        }, x.isNaN = function(e) {
            return x.isNumber(e) && e!=+e
        }, x.isBoolean = function(e) {
            return e===!0 || e===!1 || f.call(e) == "[object Boolean]"
        }, x.isNull = function(e) {
            return e === null
        }, x.isUndefined = function(e) {
            return e === void 0
        }, x.has = function(e, t) {
            return l.call(e, t)
        }, x.noConflict = function() {
            return e._ = t, this
        }, x.identity = function(e) {
            return e
        }, x.times = function(e, t, n) {
            var r = Array(Math.max(0, e));
            for (var i = 0; i < e; i++)
                r[i] = t.call(n, i);
            return r
        }, x.random = function(e, t) {
            return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        };
        var _ = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            }
        };
        _.unescape = x.invert(_.escape);
        var D = {
            escape: new RegExp("[" + x.keys(_.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + x.keys(_.unescape).join("|") + ")", "g")
        };
        x.each(["escape", "unescape"], function(e) {
            x[e] = function(t) {
                return t == null ? "" : ("" + t).replace(D[e], function(t) {
                    return _[e][t]
                })
            }
        }), x.result = function(e, t) {
            if (e == null)
                return void 0;
            var n = e[t];
            return x.isFunction(n) ? n.call(e) : n
        }, x.mixin = function(e) {
            T(x.functions(e), function(t) {
                var n = x[t] = e[t];
                x.prototype[t] = function() {
                    var e = [this._wrapped];
                    return o.apply(e, arguments), F.call(this, n.apply(x, e))
                }
            })
        };
        var P = 0;
        x.uniqueId = function(e) {
            var t=++P + "";
            return e ? e + t : t
        }, x.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var H = /(.)^/, B = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, j = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        x.template = function(e, t, n) {
            var r;
            n = x.defaults({}, n, x.templateSettings);
            var i = new RegExp([(n.escape || H).source, (n.interpolate || H).source, (n.evaluate || H).source].join("|") + "|$", "g"), s = 0, o = "__p+='";
            e.replace(i, function(t, n, r, i, u) {
                return o += e.slice(s, u).replace(j, function(e) {
                    return "\\" + B[e]
                }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
            }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                r = new Function(n.variable || "obj", "_", o)
            } catch (u) {
                throw u.source = o, u
            }
            if (t)
                return r(t, x);
            var a = function(e) {
                return r.call(this, e, x)
            };
            return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
        }, x.chain = function(e) {
            return x(e).chain()
        };
        var F = function(e) {
            return this._chain ? x(e).chain() : e
        };
        x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = r[e];
            x.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], F.call(this, n)
            }
        }), T(["concat", "join", "slice"], function(e) {
            var t = r[e];
            x.prototype[e] = function() {
                return F.call(this, t.apply(this._wrapped, arguments))
            }
        }), x.extend(x.prototype, {
            chain: function() {
                return this._chain=!0, this
            },
            value: function() {
                return this._wrapped
            }
        }), typeof define == "function" && define.amd && define("underscore", [], function() {
            return x
        })
    }.call(this), define("models/variable/utility", ["underscore"], function(e) {
        return {
            getValue: function(t, n, r) {
                var i = ["eventEvent", "appEvent", "videoEvent", "gameEvent", "printEvent", "linkEvent", "pageEvent", "unloadEvent"], s;
                e.each(i, function(e) {
                    if (s)
                        return;
                    t[e] && (t[e][n] || t[e][n] === 0) && (s = t[e][n])
                });
                if (s || s === 0)
                    return s;
                var o = new r, u = o[n];
                return typeof u != "undefined" ? u : ""
            }
        }
    }), !function(e) {
        if ("object" == typeof exports)
            module.exports = e();
        else if ("function" == typeof define && define.amd)
            define("tld", e);
        else {
            var t;
            "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.tldjs = e()
        }
    }(function() {
        var e, t, n;
        return function r(e, t, n) {
            function i(o, u) {
                if (!t[o]) {
                    if (!e[o]) {
                        var a = typeof require == "function" && require;
                        if (!u && a)
                            return a(o, !0);
                        if (s)
                            return s(o, !0);
                        throw new Error("Cannot find module '" + o + "'")
                    }
                    var f = t[o] = {
                        exports: {}
                    };
                    e[o][0].call(f.exports, function(t) {
                        var n = e[o][1][t];
                        return i(n ? n : t)
                    }, f, f.exports, r, e, t, n)
                }
                return t[o].exports
            }
            var s = typeof require == "function" && require;
            for (var o = 0; o < n.length; o++)
                i(n[o]);
            return i
        }({
            1: [function(e, t, n) {
                var r = e("./lib/tld.js").init();
                r.rules = e("./rules.json"), t.exports = r
            }, {
                "./lib/tld.js": 3,
                "./rules.json": 4
            }
            ],
            2: [function(e, t, n) {
                function r(e) {
                    e = e || {}, this.exception = e.exception ||!1, this.firstLevel = e.firstLevel || "", this.secondLevel = e.secondLevel || null, this.source = e.source || "", this.wildcard = e.wildcard ||!1
                }
                r.prototype.getNormalXld = function() {
                    return (this.secondLevel ? "." + this.secondLevel : "") + "." + this.firstLevel
                }, r.prototype.getNormalPattern = function() {
                    return (this.secondLevel ? "\\." + this.secondLevel : "") + "\\." + this.firstLevel
                }, r.prototype.getWildcardPattern = function() {
                    return "\\.[^\\.]+" + this.getNormalXld().replace(/\./g, "\\.")
                }, r.prototype.getExceptionPattern = function() {
                    return (this.secondLevel || "") + "\\." + this.firstLevel
                }, r.prototype.getPattern = function(t, n) {
                    var r = "";
                    return t = t === undefined ? "(" : t + "", n = n === undefined ? ")$" : t + "", this.exception===!0 ? r = this.getExceptionPattern() : r = "[^\\.]+" + (this.wildcard ? this.getWildcardPattern() : this.getNormalPattern()), t + r + n
                }, t.exports = r
            }, {}
            ],
            3: [function(e, t, n) {
                function s() {
                    this.rules = []
                }
                function o(e) {
                    return String(e).replace(/(^\s+|\s+$)/g, "")
                }
                function u(e, t) {
                    if (e === void 0 || e === null)
                        throw new TypeError;
                    var n = Object(e), r = n.length>>>0;
                    if (typeof t != "function")
                        throw new TypeError;
                    var i = arguments.length >= 3 ? arguments[2]: void 0;
                    for (var s = 0; s < r; s++)
                        if (s in n && t.call(i, n[s], s, n))
                            return !0;
                    return !1
                }
                function a(e, t) {
                    if (e === void 0 || e === null)
                        throw new TypeError;
                    var n = Object(e), r = n.length>>>0;
                    if (typeof t != "function")
                        throw new TypeError;
                    var i = new Array(r), s = arguments.length >= 3 ? arguments[2]: void 0;
                    for (var o = 0; o < r; o++)
                        o in n && (i[o] = t.call(s, n[o], o, n));
                    return i
                }
                var r = e("./rule.js"), i = /^(https?:\/\/)?(.+@)?(.+?)(:\d{2,5})?(\/.*)?$/;
                s.init = function() {
                    return new s
                }, s.getCandidateRule = function(t, n) {
                    var r = {
                        normal: null,
                        exception: null
                    };
                    return u(n, function(e) {
                        var n;
                        return "." + t === e.getNormalXld() ? (e.exception===!0 && (r.normal = e), !0) : (n = ".+" + e.getNormalPattern() + "$", (new RegExp(n)).test(t) ? (r[e.exception ? "exception": "normal"] = e, !e.exception) : !1)
                    }), r.normal && r.exception ? r.exception : r.normal
                }, s.prototype.getRulesForTld = function(t, n) {
                    var i = "!", s = "*", o=!0, u = this.rules[t];
                    return Object.prototype.toString.call(u) === "[object Array]" ? u : u ? (u = a(u.split("|"), function(n) {
                        var u = n[0];
                        if (u === i || u === s)
                            n = n.slice(1), n || (o=!1);
                        return new r({
                            firstLevel: t,
                            secondLevel: n,
                            exception: u === i,
                            wildcard: u === s
                        })
                    }), o && u.unshift(new r({
                        firstLevel: t
                    })), this.rules[t] = u.reverse(), u) : n ? [n] : []
                }, s.prototype.tldExists = function(t) {
                    var n;
                    return t = s.cleanHostValue(t), this.rules[t]?!0 : (n = s.extractTldFromHost(t), this.rules[n] !== undefined)
                }, s.prototype.getDomain = function(t) {
                    var n = null, i, o, u;
                    return this.isValid(t)===!1 ? null : (t = s.cleanHostValue(t), i = s.extractTldFromHost(t), o = this.getRulesForTld(i, new r({
                        firstLevel: i
                    })), u = s.getCandidateRule(t, o), u === null ? null : (t.replace(new RegExp(u.getPattern()), function(e, t) {
                        n = t
                    }), n))
                }, s.prototype.getSubdomain = function(t) {
                    var n, r, i = null;
                    return t = s.cleanHostValue(t), n = this.getDomain(t), n === null ? i : (r = "\\.?" + s.escapeRegExp(n) + "$", i = t.replace(new RegExp(r, "i"), ""), i)
                }, s.prototype.isValid = function(t) {
                    return typeof t == "string" && t.indexOf(".")!==-1 && t[0] !== "."
                }, s.cleanHostValue = function(t) {
                    t = o(t).toLowerCase();
                    var n = i.exec(t);
                    return n[3] || t || ""
                }, s.extractTldFromHost = function(t) {
                    return t.split(".").pop()
                }, s.escapeRegExp = function(t) {
                    return String(t).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
                }, t.exports = s
            }, {
                "./rule.js": 2
            }
            ],
            4: [function(e, t, n) {
                t.exports = {
                    br: "com",
                    uk: "co",
                    za: "co"
                }
            }, {}
            ]
        }, {}, [1])(1)
    }), define("models/variable/common/category", ["models/variable/utility", "tld"], function(e, t) {
        return {
            id: "category",
            libs: {
                utility: e,
                tld: t
            },
            getValue: function(t, n) {
                return e.getValue(t, this.id, n) || e.getValue(t, "categoryCode", n) || ""
            }
        }
    }), define("models/variable/common/categoryCode", ["models/variable/utility", "tld"], function(e, t) {
        return {
            id: "categoryCode",
            libs: {
                utility: e,
                tld: t
            },
            getValue: function(t, n) {
                var r = e.getValue(t, this.id, n) || e.getValue(t, "category", n) || "";
                return r
            }
        }
    }), define("models/variable/common/pageName", ["models/variable/utility"], function(e) {
        return {
            id: "pageName",
            getParams: function() {
                return {
                    utility: e
                }
            },
            getValue: function(t, n) {
                return e.getValue(t, this.id, n) || ""
            }
        }
    }), define("url", [], function() {
        function e(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }
        return function(t, n) {
            var r = n || window.location.toString();
            if (!t)
                return r;
            t = t.toString(), r.substring(0, 2) === "//" ? r = "http:" + r : r.split("://").length === 1 && (r = "http://" + r), n = r.split("/");
            var i = {
                auth: ""
            }, s = n[2].split("@");
            s.length === 1 ? s = s[0].split(":") : (i.auth = s[0], s = s[1].split(":")), i.protocol = n[0], i.hostname = s[0], i.port = s[1] || "80", i.pathname = (n.length > 3 ? "/" : "") + n.slice(3, n.length).join("/").split("?")[0].split("#")[0];
            var o = i.pathname;
            o.charAt(o.length - 1) === "/" && (o = o.substring(0, o.length - 1));
            var u = i.hostname, a = u.split("."), f = o.split("/");
            if (t === "hostname")
                return u;
            if (t === "domain")
                return a.slice( - 2).join(".");
            if (t === "sub")
                return a.slice(0, a.length - 2).join(".");
            if (t === "port")
                return i.port || "80";
            if (t === "protocol")
                return i.protocol.split(":")[0];
            if (t === "auth")
                return i.auth;
            if (t === "user")
                return i.auth.split(":")[0];
            if (t === "pass")
                return i.auth.split(":")[1] || "";
            if (t === "path")
                return i.pathname;
            if (t.charAt(0) === ".") {
                t = t.substring(1);
                if (e(t))
                    return t = parseInt(t, 10), a[t < 0 ? a.length + t: t - 1] || ""
            } else {
                if (e(t))
                    return t = parseInt(t, 10), f[t < 0 ? f.length + t: t] || "";
                if (t === "file")
                    return f.slice( - 1)[0];
                if (t === "filename")
                    return f.slice( - 1)[0].split(".")[0];
                if (t === "fileext")
                    return f.slice( - 1)[0].split(".")[1] || "";
                if (t.charAt(0) === "?" || t.charAt(0) === "#") {
                    var l = r, c = null;
                    t.charAt(0) === "?" ? l = (l.split("?")[1] || "").split("#")[0] : t.charAt(0) === "#" && (l = l.split("#")[1] || "");
                    if (!t.charAt(1))
                        return l;
                    t = t.substring(1), l = l.split("&");
                    for (var h = 0, p = l.length; h < p; h++) {
                        c = l[h].split("=");
                        if (c[0] === t)
                            return c[1]
                    }
                    return null
                }
            }
            return ""
        }
    }), define("models/variable/common/site", ["underscore", "models/variable/utility", "url", "tld"], function(e, t, n, r) {
        return {
            id: "site",
            libs: {
                _: e,
                utility: t,
                url: n,
                tld: r
            },
            getValue: function(e, n) {
                return t.getValue(e, this.id, n) || t.getValue(e, "siteCode", n) || ""
            }
        }
    }), define("models/variable/common/siteCode", ["underscore", "models/variable/utility", "url", "tld"], function(e, t, n, r) {
        return {
            id: "siteCode",
            libs: {
                _: e,
                utility: t,
                url: n,
                tld: r
            },
            getValue: function(e, n) {
                var r = t.getValue(e, this.id, n) || t.getValue(e, "site", n) || "";
                return r
            }
        }
    }), define("models/variable/common/siteSection", ["underscore", "models/variable/utility", "url", "tld"], function(e, t, n, r) {
        return {
            id: "siteSection",
            libs: {
                _: e,
                utility: t,
                tld: r,
                url: n
            },
            getValue: function(e, n) {
                return t.getValue(e, this.id, n) || t.getValue(e, "breadcrumbs", n)
            }
        }
    }), define("models/variable/common/breadcrumbs", ["underscore", "models/variable/utility", "url", "tld"], function(e, t, n, r) {
        return {
            id: "breadcrumbs",
            libs: {
                _: e,
                utility: t,
                tld: r,
                url: n
            },
            getValue: function(e, n) {
                return t.getValue(e, this.id, n) || t.getValue(e, "siteSection", n) || ""
            }
        }
    }), define("models/variable/app/appLoad", ["models/variable/utility"], function(e) {
        return {
            id: "appLoad",
            getValue: function(t) {
                var n = e.getValue(t, "appEvent", CTO);
                return n === "load" ? "true" : ""
            }
        }
    }), define("models/variable/app/appSaveC", ["models/variable/utility"], function(e) {
        return {
            id: "appSaveC",
            getValue: function(t) {
                var n = e.getValue(t, "appEvent", CTO);
                return n === "save_completed" ? "true" : ""
            }
        }
    }), define("models/variable/app/appShare", ["models/variable/utility"], function(e) {
        return {
            id: "appShare",
            getValue: function(t) {
                var n = e.getValue(t, "appEvent", CTO);
                return n === "share" ? "true" : ""
            }
        }
    }), define("models/variable/common/fullPageName", ["models/variable/utility", "models/variable/common/siteSection", "models/variable/common/breadcrumbs", "models/variable/common/site", "models/variable/common/siteCode", "models/variable/common/pageName", "models/variable/common/category", "models/variable/common/categoryCode"], function(e, t, n, r, i, s, o, u) {
        var a = {
            id: "fullPageName",
            getValue: function(a, f) {
                var l=!1, c = s.getValue(a, f), h = u.getValue(a, f) || o.getValue(a, f), p = e.getValue(a, "account", f);
                if (h == "dcom" || h == "ddit" || h == "ddif" || h == "latam" || h == "luc" || p.indexOf("spoonful")!=-1 || p.indexOf("babble")!=-1 || p.indexOf("disneyfamilydeals")!=-1)
                    l=!0;
                var d = [];
                if (c == "errorpage" || e.getValue(a, "pageTypeCode", f) == "errorpage")
                    d.push(document.URL);
                else {
                    h && d.push(h);
                    var v = i.getValue(a, f) || r.getValue(a, f);
                    v && d.push(v);
                    var m = n.getValue(a, f) || t.getValue(a, f);
                    m && d.push(m), c && d.push(c)
                }
                var g;
                l ? g = d.join("|") : g = d.join(":");
                var y = e.getValue(a, "pageNumber", f);
                return y && (g = g + "_" + y), g
            }
        };
        return a
    }), !function(e, t) {
        var n = function() {
            return n.get.apply(n, arguments)
        }, r = n.utils = {
            isArray: Array.isArray || function(e) {
                return Object.prototype.toString.call(e) === "[object Array]"
            },
            isPlainObject: function(e) {
                return !!e && Object.prototype.toString.call(e) === "[object Object]"
            },
            toArray: function(e) {
                return Array.prototype.slice.call(e)
            },
            getKeys: Object.keys || function(e) {
                var t = [], n = "";
                for (n in e)
                    e.hasOwnProperty(n) && t.push(n);
                return t
            },
            escape: function(e) {
                return String(e).replace(/[,;"\\=\s%]/g, function(e) {
                    return encodeURIComponent(e)
                })
            },
            retrieve: function(e, t) {
                return e == null ? t : e
            }
        };
        n.defaults = {}, n.expiresMultiplier = 86400, n.set = function(n, i, s) {
            if (r.isPlainObject(n))
                for (var o in n)
                    n.hasOwnProperty(o) && this.set(o, n[o], i);
            else {
                s = r.isPlainObject(s) ? s : {
                    expires: s
                };
                var u = s.expires !== t ? s.expires: this.defaults.expires || "", a = typeof u;
                a === "string" && u !== "" ? u = new Date(u) : a === "number" && (u = new Date( + (new Date) + 1e3 * this.expiresMultiplier * u)), u !== "" && "toGMTString"in u && (u = ";expires=" + u.toGMTString());
                var f = s.path || this.defaults.path;
                f = f ? ";path=" + f : "";
                var l = s.domain || this.defaults.domain;
                l = l ? ";domain=" + l : "";
                var c = s.secure || this.defaults.secure ? ";secure": "";
                e.cookie = r.escape(n) + "=" + r.escape(i) + u + f + l + c
            }
            return this
        }, n.remove = function(e) {
            e = r.isArray(e) ? e : r.toArray(arguments);
            for (var t = 0, n = e.length; t < n; t++)
                this.set(e[t], "", - 1);
            return this
        }, n.empty = function() {
            return this.remove(r.getKeys(this.all()))
        }, n.get = function(e, n) {
            n = n || t;
            var i = this.all();
            if (r.isArray(e)) {
                var s = {};
                for (var o = 0, u = e.length; o < u; o++) {
                    var a = e[o];
                    s[a] = r.retrieve(i[a], n)
                }
                return s
            }
            return r.retrieve(i[e], n)
        }, n.all = function() {
            if (e.cookie === "")
                return {};
            var t = e.cookie.split("; "), n = {};
            for (var r = 0, i = t.length; r < i; r++) {
                var s = t[r].split("=");
                n[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
            }
            return n
        }, n.enabled = function() {
            if (navigator.cookieEnabled)
                return !0;
            var e = n.set("_", "_").get("_") === "_";
            return n.remove("_"), e
        }, typeof define == "function" && define.amd ? define("cookie", [], function() {
            return n
        }) : typeof exports != "undefined" ? exports.cookie = n : window.cookie = n
    }(document), !function(e, t, n) {
        typeof module != "undefined" && module.exports ? module.exports = n() : typeof define == "function" && define.amd ? define("reqwest", n) : t[e] = n()
    }("reqwest", this, function() {
        function handleReadyState(e, t, n) {
            return function() {
                if (e._aborted)
                    return n(e.request);
                e.request && e.request[readyState] == 4 && (e.request.onreadystatechange = noop, twoHundo.test(e.request.status) ? t(e.request) : n(e.request))
            }
        }
        function setHeaders(e, t) {
            var n = t.headers || {}, r;
            n.Accept = n.Accept || defaultHeaders.accept[t.type] || defaultHeaders.accept["*"], !t.crossOrigin&&!n[requestedWith] && (n[requestedWith] = defaultHeaders.requestedWith), n[contentType] || (n[contentType] = t.contentType || defaultHeaders.contentType);
            for (r in n)
                n.hasOwnProperty(r) && "setRequestHeader"in e && e.setRequestHeader(r, n[r])
        }
        function setCredentials(e, t) {
            typeof t.withCredentials != "undefined" && typeof e.withCredentials != "undefined" && (e.withCredentials=!!t.withCredentials)
        }
        function generalCallback(e) {
            lastValue = e
        }
        function urlappend(e, t) {
            return e + (/\?/.test(e) ? "&" : "?") + t
        }
        function handleJsonp(e, t, n, r) {
            var i = uniqid++, s = e.jsonpCallback || "callback", o = e.jsonpCallbackName || reqwest.getcallbackPrefix(i), u = new RegExp("((^|\\?|&)" + s + ")=([^&]+)"), a = r.match(u), f = doc.createElement("script"), l = 0, c = navigator.userAgent.indexOf("MSIE 10.0")!==-1;
            return a ? a[3] === "?" ? r = r.replace(u, "$1=" + o) : o = a[3] : r = urlappend(r, s + "=" + o), win[o] = generalCallback, f.type = "text/javascript", f.src = r, f.async=!0, typeof f.onreadystatechange != "undefined"&&!c && (f.event = "onclick", f.htmlFor = f.id = "_reqwest_" + i), f.onload = f.onreadystatechange = function() {
                if (f[readyState] && f[readyState] !== "complete" && f[readyState] !== "loaded" || l)
                    return !1;
                f.onload = f.onreadystatechange = null, f.onclick && f.onclick(), t(lastValue), lastValue = undefined, head.removeChild(f), l = 1
            }, head.appendChild(f), {
                abort: function() {
                    f.onload = f.onreadystatechange = null, n({}, "Request is aborted: timeout", {}), lastValue = undefined, head.removeChild(f), l = 1
                }
            }
        }
        function getRequest(e, t) {
            var n = this.o, r = (n.method || "GET").toUpperCase(), i = typeof n == "string" ? n: n.url, s = n.processData!==!1 && n.data && typeof n.data != "string" ? reqwest.toQueryString(n.data): n.data || null, o, u=!1;
            return (n.type == "jsonp" || r == "GET") && s && (i = urlappend(i, s), s = null), n.type == "jsonp" ? handleJsonp(n, e, t, i) : (o = xhr(n), o.open(r, i, n.async===!1?!1 : !0), setHeaders(o, n), setCredentials(o, n), win[xDomainRequest] && o instanceof win[xDomainRequest] ? (o.onload = e, o.onerror = t, o.onprogress = function() {}, u=!0) : o.onreadystatechange = handleReadyState(this, e, t), n.before && n.before(o), u ? setTimeout(function() {
                o.send(s)
            }, 200) : o.send(s), o)
        }
        function Reqwest(e, t) {
            this.o = e, this.fn = t, init.apply(this, arguments)
        }
        function setType(e) {
            var t = e.match(/\.(json|jsonp|html|xml)(\?|$)/);
            return t ? t[1] : "js"
        }
        function init(o, fn) {
            function complete(e) {
                o.timeout && clearTimeout(self.timeout), self.timeout = null;
                while (self._completeHandlers.length > 0)
                    self._completeHandlers.shift()(e)
            }
            function success(resp) {
                resp = type !== "jsonp" ? self.request : resp;
                var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type), r = filteredResponse;
                try {
                    resp.responseText = r
                } catch (e) {}
                if (r)
                    switch (type) {
                    case"json":
                        try {
                            resp = win.JSON ? win.JSON.parse(r) : eval("(" + r + ")")
                        } catch (err) {
                            return error(resp, "Could not parse JSON in response", err)
                        }
                        break;
                    case"js":
                        resp = eval(r);
                        break;
                    case"html":
                        resp = r;
                        break;
                    case"xml":
                        resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML
                    }
                self._responseArgs.resp = resp, self._fulfilled=!0, fn(resp), self._successHandler(resp);
                while (self._fulfillmentHandlers.length > 0)
                    resp = self._fulfillmentHandlers.shift()(resp);
                complete(resp)
            }
            function error(e, t, n) {
                e = self.request, self._responseArgs.resp = e, self._responseArgs.msg = t, self._responseArgs.t = n, self._erred=!0;
                while (self._errorHandlers.length > 0)
                    self._errorHandlers.shift()(e, t, n);
                complete(e)
            }
            this.url = typeof o == "string" ? o : o.url, this.timeout = null, this._fulfilled=!1, this._successHandler = function() {}, this._fulfillmentHandlers = [], this._errorHandlers = [], this._completeHandlers = [], this._erred=!1, this._responseArgs = {};
            var self = this, type = o.type || setType(this.url);
            fn = fn || function() {}, o.timeout && (this.timeout = setTimeout(function() {
                self.abort()
            }, o.timeout)), o.success && (this._successHandler = function() {
                o.success.apply(o, arguments)
            }), o.error && this._errorHandlers.push(function() {
                o.error.apply(o, arguments)
            }), o.complete && this._completeHandlers.push(function() {
                o.complete.apply(o, arguments)
            }), this.request = getRequest.call(this, success, error)
        }
        function reqwest(e, t) {
            return new Reqwest(e, t)
        }
        function normalize(e) {
            return e ? e.replace(/\r?\n/g, "\r\n") : ""
        }
        function serial(e, t) {
            var n = e.name, r = e.tagName.toLowerCase(), i = function(e) {
                e&&!e.disabled && t(n, normalize(e.attributes.value && e.attributes.value.specified ? e.value : e.text))
            }, s, o, u, a;
            if (e.disabled ||!n)
                return;
            switch (r) {
            case"input":
                /reset|button|image|file/i.test(e.type) || (s = /checkbox/i.test(e.type), o = /radio/i.test(e.type), u = e.value, (!s&&!o || e.checked) && t(n, normalize(s && u === "" ? "on" : u)));
                break;
            case"textarea":
                t(n, normalize(e.value));
                break;
            case"select":
                if (e.type.toLowerCase() === "select-one")
                    i(e.selectedIndex >= 0 ? e.options[e.selectedIndex] : null);
                else 
                    for (a = 0; e.length && a < e.length; a++)
                        e.options[a].selected && i(e.options[a])
            }
        }
        function eachFormElement() {
            var e = this, t, n, r = function(t, n) {
                var r, i, s;
                for (r = 0; r < n.length; r++) {
                    s = t[byTag](n[r]);
                    for (i = 0; i < s.length; i++)
                        serial(s[i], e)
                }
            };
            for (n = 0; n < arguments.length; n++)
                t = arguments[n], /input|select|textarea/i.test(t.tagName) && serial(t, e), r(t, ["input", "select", "textarea"])
        }
        function serializeQueryString() {
            return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
        }
        function serializeHash() {
            var e = {};
            return eachFormElement.apply(function(t, n) {
                t in e ? (e[t]&&!isArray(e[t]) && (e[t] = [e[t]]), e[t].push(n)) : e[t] = n
            }, arguments), e
        }
        function buildParams(e, t, n, r) {
            var i, s, o, u = /\[\]$/;
            if (isArray(t))
                for (s = 0; t && s < t.length; s++)
                    o = t[s], n || u.test(e) ? r(e, o) : buildParams(e + "[" + (typeof o == "object" ? s : "") + "]", o, n, r);
            else if (t && t.toString() === "[object Object]")
                for (i in t)
                    buildParams(e + "[" + i + "]", t[i], n, r);
            else 
                r(e, t)
            }
        var win = window, doc = document, twoHundo = /^20\d$/, byTag = "getElementsByTagName", readyState = "readyState", contentType = "Content-Type", requestedWith = "X-Requested-With", head = doc[byTag]("head")[0], uniqid = 0, callbackPrefix = "reqwest_" + + (new Date), lastValue, xmlHttpRequest = "XMLHttpRequest", xDomainRequest = "XDomainRequest", noop = function() {}, isArray = typeof Array.isArray == "function" ? Array.isArray: function(e) {
            return e instanceof Array
        }, defaultHeaders = {
            contentType: "application/x-www-form-urlencoded",
            requestedWith: xmlHttpRequest,
            accept: {
                "*": "text/javascript, text/html, application/xml, text/xml, */*",
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                js: "application/javascript, text/javascript"
            }
        }, xhr = function(e) {
            if (e.crossOrigin===!0) {
                var t = win[xmlHttpRequest] ? new XMLHttpRequest: null;
                if (t && "withCredentials"in t)
                    return t;
                if (win[xDomainRequest])
                    return new XDomainRequest;
                throw new Error("Browser does not support cross-origin requests")
            }
            return win[xmlHttpRequest] ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
        }, globalSetupOptions = {
            dataFilter: function(e) {
                return e
            }
        };
        return Reqwest.prototype = {
            abort: function() {
                this._aborted=!0, this.request.abort()
            },
            retry: function() {
                init.call(this, this.o, this.fn)
            },
            then: function(e, t) {
                return e = e || function() {}, t = t || function() {}, this._fulfilled ? this._responseArgs.resp = e(this._responseArgs.resp) : this._erred ? t(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(e), this._errorHandlers.push(t)), this
            },
            always: function(e) {
                return this._fulfilled || this._erred ? e(this._responseArgs.resp) : this._completeHandlers.push(e), this
            },
            fail: function(e) {
                return this._erred ? e(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(e), this
            }
        }, reqwest.serializeArray = function() {
            var e = [];
            return eachFormElement.apply(function(t, n) {
                e.push({
                    name: t,
                    value: n
                })
            }, arguments), e
        }, reqwest.serialize = function() {
            if (arguments.length === 0)
                return "";
            var e, t, n = Array.prototype.slice.call(arguments, 0);
            return e = n.pop(), e && e.nodeType && n.push(e) && (e = null), e && (e = e.type), e == "map" ? t = serializeHash : e == "array" ? t = reqwest.serializeArray : t = serializeQueryString, t.apply(null, n)
        }, reqwest.toQueryString = function(e, t) {
            var n, r, i = t ||!1, s = [], o = encodeURIComponent, u = function(e, t) {
                t = "function" == typeof t ? t() : t == null ? "" : t, s[s.length] = o(e) + "=" + o(t)
            };
            if (isArray(e))
                for (r = 0; e && r < e.length; r++)
                    u(e[r].name, e[r].value);
            else 
                for (n in e)
                    buildParams(n, e[n], i, u);
            return s.join("&").replace(/%20/g, "+")
        }, reqwest.getcallbackPrefix = function() {
            return callbackPrefix
        }, reqwest.compat = function(e, t) {
            return e && (e.type && (e.method = e.type) && delete e.type, e.dataType && (e.type = e.dataType), e.jsonpCallback && (e.jsonpCallbackName = e.jsonpCallback) && delete e.jsonpCallback, e.jsonp && (e.jsonpCallback = e.jsonp)), new Reqwest(e, t)
        }, reqwest.ajaxSetup = function(e) {
            e = e || {};
            for (var t in e)
                globalSetupOptions[t] = e[t]
        }, reqwest
    }), define("models/variable/common/cf", ["cookie"], function(e) {
        var t;
        return {
            id: "cf",
            getValue: function(n) {
                if (typeof t != "undefined")
                    return t;
                var r = "test";
                e.set({
                    ctoTest: r
                });
                var i = e.get("ctoTest");
                return i === r ? (t = "true", e.remove("ctoTest")) : t = "false", t
            }
        }
    }), define("pollster", ["reqwest", "underscore", "models/variable/common/cf", "cookie", "bean", "tld"], function(e, t, n, r, i, s) {
        var o = {};
        return o.ziplineDomains = ["http://r.disney.com/poll", "http://r.disney.go.com/poll", "http://r.starwars.com/poll", "http://r.disneyjunior.com/poll", "http://r.spoonful.com/poll", "http://r.babble.com/poll", "http://r.babyzone.com/poll", "http://r.disneybaby.com/poll"], o.cookiesEnabled = function() {
            return n.getValue({}) == "true"?!0 : !1
        }, o.corsSupported = function() {
            if (this.isCorsSupported===!0)
                return !0;
            if (this.isCorsSupported===!1)
                return !1;
            if (typeof ActiveXObject != "undefined")
                return this.isCorsSupported=!1, this.isCorsSupported;
            var e = new XMLHttpRequest;
            return this.isCorsSupported=!!e && "withCredentials"in e, !!this.isCorsSupported
        }, o.generateIdentifier = function() {
            return (new Date).getTime() + "-" + Math.floor(Math.random() * 1e13)
        }, o.pollDomains = function() {
            var n = o.ziplineDomains.length, u = 0, a = [], f = s.getDomain(location.hostname), l = function(e) {
                e.substr(0, 9) === "while(1);" && (e = e.substr(9));
                var t = /\s*([^=;]+)=?([^;]*);?/g, n, r, i = {};
                while (n = t.exec(e))
                    r = n[2], i[n[1]] = r;
                (i.ctoVisitor || i.ctoSession || i.ctoVisitorData || i.ctoSessionData) && a.push(i)
            }, c = function() {
                u++, u >= n && h()
            }, h = function() {
                var e = /^[0-9]+-[0-9]+$/, n = {
                    priority: 100,
                    createTime: 0
                }, s = function(t) {
                    var r;
                    try {
                        r = JSON.parse(unescape(t.ctoVisitor)) || {}
                    } catch (i) {
                        return 
                    }
                    var s;
                    try {
                        s = JSON.parse(unescape(t.ctoSession)) || {}
                    } catch (i) {
                        return 
                    }
                    if (!r.visitorId ||!r.visitorId.match(e))
                        return;
                    if (!s.sessionId ||!s.sessionId.match(e))
                        return;
                    n.priority > 1 ? n = {
                        priority: 1,
                        createTime: t.ctoBrowserSession,
                        cookie: {
                            visitor: {
                                visitorId: r.visitorId,
                                firstRefUrl: r.firstRefUrl,
                                firstUrl: r.firstUrl,
                                firstPageName: r.firstPageName,
                                sessionCount: r.sessionCount
                            },
                            session: {
                                sessionId: s.sessionId,
                                firstSessionRefUrl: s.firstSessionRefUrl,
                                firstSessionUrl: s.firstSessionUrl,
                                firstSessionPageName: s.firstSessionPageName,
                                hitCount: s.hitCount
                            }
                        }
                    } : n.priority == 1 && n.createTime < t.ctoBrowserSession && (n = {
                        priority: 1,
                        createTime: t.ctoBrowserSession,
                        cookie: {
                            visitor: {
                                visitorId: r.visitorId,
                                firstRefUrl: r.firstRefUrl,
                                firstUrl: r.firstUrl,
                                firstPageName: r.firstPageName,
                                sessionCount: r.sessionCount
                            },
                            session: {
                                sessionId: s.sessionId,
                                firstSessionRefUrl: s.firstSessionRefUrl,
                                firstSessionUrl: s.firstSessionUrl,
                                firstSessionPageName: s.firstSessionPageName,
                                hitCount: s.hitCount
                            }
                        }
                    })
                }, u = function(t) {
                    var r = JSON.parse(unescape(t.ctoVisitor)) || {};
                    if (!r.visitorId ||!r.visitorId.match(e))
                        return;
                    n.priority > 2 && (n = {
                        priority: 2,
                        createTime: t.ctoBrowserSession,
                        cookie: {
                            visitor: {
                                visitorId: r.visitorId,
                                firstRefUrl: r.firstRefUrl,
                                firstUrl: r.firstUrl,
                                firstPageName: r.firstPageName,
                                sessionCount: r.sessionCount
                            }
                        }
                    })
                }, l = function(t) {
                    var r = t.ctoVisitorData.split("<|>"), i = t.ctoSessionData.split("<|>");
                    if (r.length === 5 && i.length === 5) {
                        var s = r[0].replace(/\s+/gi, "") || "", o = i[0].replace(/\s+/gi, "") || "";
                        if (!s.match(e))
                            return;
                        if (!o.match(e))
                            return;
                        var u = r[1].replace(/\s+/gi, ""), a = r[2].replace(/\s+/gi, ""), f = r[3].replace(/\s+/gi, ""), l = r[4].replace(/\s+/gi, ""), c = i[1].replace(/\s+/gi, ""), h = i[2].replace(/\s+/gi, ""), p = i[3].replace(/\s+/gi, ""), d = i[4].replace(/\s+/gi, "");
                        n.priority > 3 && (n = {
                            priority: 3,
                            createTime: t.ctoBrowserSession,
                            cookie: {
                                visitor: {
                                    visitorId: s,
                                    firstRefUrl: u,
                                    firstUrl: a,
                                    firstPageName: f,
                                    sessionCount: l
                                },
                                session: {
                                    sessionId: o,
                                    firstSessionRefUrl: c,
                                    firstSessionUrl: h,
                                    firstSessionPageName: p,
                                    hitCount: d
                                }
                            }
                        })
                    }
                }, c = function(t) {
                    var r = t.ctoVisitorData.split("<|>");
                    if (r.length === 5) {
                        var i = r[0].replace(/\s+/gi, "") || "";
                        if (!i.match(e))
                            return;
                        var s = r[1].replace(/\s+/gi, ""), o = r[2].replace(/\s+/gi, ""), u = r[3].replace(/\s+/gi, ""), a = r[4].replace(/\s+/gi, "");
                        n.priority > 4 && (n = {
                            priority: 4,
                            createTime: t.ctoBrowserSession,
                            cookie: {
                                visitor: {
                                    visitorId: i,
                                    firstRefUrl: s,
                                    firstUrl: o,
                                    firstPageName: u,
                                    sessionCount: a
                                }
                            }
                        })
                    }
                }, h = (new Date).getTime();
                t.each(a, function(e) {
                    e.ctoVisitor && e.ctoSession && e.ctoBrowserSession && h - e.ctoBrowserSession < 18e5 ? s(e) : e.ctoVisitor ? u(e) : e.ctoVisitorData && e.ctoSessionData ? l(e) : e.ctoVisitorData && c(e)
                });
                var p = new Date((new Date).getTime() + 33927469800), d = new Date((new Date).getTime() + 18e5);
                n.cookie && (n.cookie.visitor && r.set("ctoVisitor", JSON.stringify(n.cookie.visitor), {
                    expires: p,
                    path: "/",
                    domain: f
                }), n.cookie.session && (n.cookie.session.timestamp || (n.cookie.session.timestamp = (new Date).getTime()), r.set("ctoSession", JSON.stringify(n.cookie.session), {
                    expires: d,
                    path: "/",
                    domain: f
                }), r.set("ctoBrowserSession", h, {
                    path: "/",
                    domain: f
                })));
                var v=!1, m = o.generateIdentifier();
                if (r.get("ctoVisitor")) {
                    var g = JSON.parse(unescape(r.get("ctoVisitor")));
                    g.visitorId && (v=!0)
                }
                v || r.set("ctoVisitor", JSON.stringify({
                    visitorId: m
                }), {
                    expires: p,
                    path: "/",
                    domain: f
                });
                var y=!1;
                if (r.get("ctoSession") && r.get("ctoBrowserSession")) {
                    var b = JSON.parse(unescape(r.get("ctoSession")));
                    b.sessionId && (y=!0)
                }
                y || (r.set("ctoSession", JSON.stringify({
                    sessionId: m,
                    timestamp: (new Date).getTime()
                }), {
                    expires: d,
                    path: "/",
                    domain: f
                }), r.set("ctoBrowserSession", h, {
                    path: "/",
                    domain: f
                })), i.fire(window, "cookiesReadyCTO")
            }, p = [];
            t.each(o.ziplineDomains, function(e) {
                e.indexOf(f)===-1 ? p.push(e) : u++
            }), t.each(p, function(t) {
                try {
                    e({
                        url: t,
                        withCredentials: !0,
                        type: "html",
                        crossOrigin: !0,
                        success: l,
                        complete: c
                    })
                } catch (n) {
                    u++
                }
            })
        }, o
    }), define("models/data/utility", ["cookie", "underscore", "models/API/CTO", "pollster", "tld"], function(e, t, n, r, i) {
        return {
            sessionQueue: {},
            visitorQueue: {},
            localSessionQueue: {},
            localVisitorQueue: {},
            getPollsterValue: function(e, t) {
                return this.getValueFromCookieQueue(e, t) || this.getValueFromCookie(e, t)
            },
            getLocalValue: function(e, t) {
                return this.getValueFromLocalCookieQueue(e, t) || this.getValueFromLocalCookie(e, t)
            },
            getValueFromCookie: function(t, n) {
                if (n) {
                    var r = e.get("ctoVisitor"), i;
                    try {
                        i = JSON.parse(unescape(r))
                    } catch (s) {
                        i = {}
                    }
                    return i[t]
                }
                if (this.isSessionExpired())
                    return "";
                var o = e.get("ctoSession"), u;
                try {
                    u = JSON.parse(unescape(o))
                } catch (s) {
                    u = {}
                }
                return u[t]
            },
            addKeyValueToCookieQueue: function(e, t, n) {
                n ? this.visitorQueue[e] = t : this.sessionQueue[e] = t
            },
            getValueFromCookieQueue: function(e, t) {
                return t ? this.visitorQueue[e] : this.sessionQueue[e]
            },
            getValueFromLocalCookie: function(t, n) {
                if (n) {
                    var r = e.get("ctoLocalVisitor"), i;
                    try {
                        i = JSON.parse(unescape(r))
                    } catch (s) {
                        i = {}
                    }
                    return i[t]
                }
                if (this.isLocalSessionExpired())
                    return "";
                var o = e.get("ctoLocalSession"), u;
                try {
                    u = JSON.parse(unescape(o))
                } catch (s) {
                    u = {}
                }
                return u[t]
            },
            addKeyValueToLocalCookieQueue: function(e, t, n) {
                n ? this.localVisitorQueue[e] = t : this.localSessionQueue[e] = t
            },
            getValueFromLocalCookieQueue: function(e, t) {
                return t ? this.localVisitorQueue[e] : this.localSessionQueue[e]
            },
            _updateCookieObject: function(e, n) {
                var r = this._getJSONCookieValue(e);
                return t.each(n, function(e, t) {
                    r[t] = e
                }), r
            },
            saveCookieQueue: function() {
                var n = i.getDomain(location.hostname);
                e.set("ctoBrowserSession", (new Date).getTime(), {
                    path: "/",
                    domain: n
                });
                var s=!1;
                this.isSessionExpired() && (s=!0);
                var o = 18e5;
                o = new Date((new Date).getTime() + o);
                var u = new Date((new Date).getTime() + 33927469800), a = this._updateCookieObject("ctoLocalSession", this.localSessionQueue), f = this._updateCookieObject("ctoLocalVisitor", this.localVisitorQueue);
                e.set("ctoLocalSession", JSON.stringify(a), {
                    expires: o,
                    path: "/",
                    domain: n
                }), e.set("ctoLocalVisitor", JSON.stringify(f), {
                    expires: u,
                    path: "/",
                    domain: n
                }), this.localSessionQueue = {}, this.localVisitorQueue = {};
                if (!r.corsSupported())
                    return !1;
                var l = this._updateCookieObject("ctoSession", this.sessionQueue), c = this._updateCookieObject("ctoVisitor", this.visitorQueue);
                s && (t.isNumber(c.sessionCount) ? c.sessionCount++ : c.sessionCount = 1), this.visitorQueue = {}, this.sessionQueue = {}, l.timestamp = (new Date).getTime(), e.set("ctoSession", JSON.stringify(l), {
                    expires: o,
                    path: "/",
                    domain: n
                }), e.set("ctoVisitor", JSON.stringify(c), {
                    expires: u,
                    path: "/",
                    domain: n
                })
            },
            isLocalSessionExpired: function() {
                var t = e.get("ctoLocalSession"), n;
                try {
                    n = JSON.parse(unescape(t))
                } catch (r) {
                    n = {}
                }
                var i = e.get("ctoBrowserSession");
                return !n.localSessionId ||!i ? (e.remove(["ctoLocalSession"]), !0) : !1
            },
            isSessionExpired: function() {
                if (location.protocol !== "http:" ||!r.corsSupported() ||!r.cookiesEnabled())
                    return;
                var t = e.get("ctoSession"), n = {};
                if (t)
                    try {
                        n = JSON.parse(unescape(t))
                } catch (i) {
                    n = {}
                }
                var s = e.get("ctoBrowserSession");
                return !n.sessionId ||!s ? (e.remove(["ctoSession"]), !0) : !1
            },
            _getJSONCookieValue: function(t) {
                var n = e.get(t), r;
                try {
                    r = JSON.parse(n)
                } catch (i) {}
                return r || {}
            }
        }
    }), define("models/variable/common/arPageName", ["models/variable/common/fullPageName", "models/data/utility", "models/variable/utility"], function(e, t, n) {
        return {
            id: "arPageName",
            getValue: function(r, i) {
                var s = n.getValue(r, "templateType", i), o;
                return s !== "watch" && s !== "play" && s !== "embed" && s !== "create"||!!t.isSessionExpired() ? (o = e.getValue(r, i), t.addKeyValueToCookieQueue(this.id, o), o || "na") : t.getPollsterValue(this.id)
            }
        }
    }), define("models/variable/common/assetComplete", ["models/variable/utility"], function(e) {
        return {
            id: "assetComplete",
            getValue: function(t, n) {
                var r = e.getValue(t, "KDPEVNT", n);
                return r === "playerPlayEnd" ? "true" : ""
            }
        }
    }), define("models/variable/common/assetInteractionType", ["models/variable/utility"], function(e) {
        return {
            id: "assetInteractionType",
            getValue: function(t) {
                var n = "", r = e.getValue(t, "gameEvent", CTO), i = e.getValue(t, "gmEvntVal", CTO);
                if (r.indexOf("omni:") == 0)
                    return n = r, i && (n += "|" + i), n;
                var s = e.getValue(t, "appEvntVal", CTO), o = e.getValue(t, "appEvent", CTO);
                return o !== "load" && (n = o, s && (n += "|" + s)), n
            }
        }
    }), define("models/variable/common/assetMSTP", ["models/variable/utility"], function(e) {
        return {
            id: "assetMSTP",
            getValue: function(t, n) {
                var r = "";
                if (t.trackType === "tV") {
                    var i = e.getValue(t, "ASSETNAME", n) || e.getValue(t, "assetName", n);
                    if (typeof i == "string") {
                        var s = i.split("|");
                        typeof s[2] == "string" && s[2] && (r = s[2])
                    }
                } else if (t.trackType === "tG") {
                    var o = e.getValue(t, "gameSeriesCode", n);
                    typeof o == "string" && (r = o)
                }
                return r
            }
        }
    }), define("models/variable/common/assetBU", ["models/variable/utility"], function(e) {
        return {
            id: "assetBU",
            getValue: function(t, n) {
                var r = "";
                if (t.trackType === "tV") {
                    var i = e.getValue(t, "ASSETNAME", n) || e.getValue(t, "assetName", n);
                    if (typeof i == "string") {
                        var s = i.split("|");
                        typeof s[1] == "string" && s[1] && (r = s[1])
                    }
                } else if (t.trackType === "tG") {
                    var o = e.getValue(t, "gameBuCode", n);
                    typeof o == "string" && (r = o)
                }
                return r
            }
        }
    }), define("models/variable/common/assetPlayerType", ["models/variable/utility"], function(e) {
        return {
            id: "assetPlayerType",
            getValue: function(t) {
                var n = "";
                if (t.trackType === "tV") {
                    var r = e.getValue(t, "WIGID", CTO);
                    if (typeof r == "string" && r) {
                        var i = {
                            1959: "Matterhorn",
                            _628012: "Kaltura"
                        };
                        i[r] ? n = i[r] : n = r
                    }
                }
                return n
            }
        }
    }), define("models/variable/common/assetPlayerForm", ["models/variable/utility"], function(e) {
        return {
            id: "assetPlayerForm",
            getValue: function(t, n) {
                var r = "";
                if (t.trackType === "tV") {
                    var i = e.getValue(t, "ASSETNAME", n) || e.getValue(t, "assetName", n);
                    if (typeof i == "string") {
                        var s = i.split("|");
                        typeof s[3] == "string" && s[3] && (r = s[3])
                    }
                }
                return r
            }
        }
    }), define("models/variable/video/videoStart", ["models/variable/utility"], function(e) {
        return {
            id: "videoStart",
            getValue: function(t) {
                var n = e.getValue(t, "KDPEVNT", CTO), r = e.getValue(t, "KDPDAT_VALUE", CTO);
                return n === "percentReached" && r == 0 ? "true" : ""
            }
        }
    }), define("models/variable/int/video25", [], function() {
        return {
            id: "video25",
            getValue: function(e) {
                return e.videoEvent && e.videoEvent.KDPEVNT === "percentReached" && e.videoEvent.KDPDAT_VALUE == 25 ? "true" : ""
            }
        }
    }), define("models/variable/video/video50", ["models/variable/utility"], function(e) {
        return {
            id: "video50",
            getValue: function(t, n) {
                var r = e.getValue(t, "KDPEVNT", n), i = e.getValue(t, "KDPDAT_VALUE", n);
                return r === "percentReached" && i == 50 ? "true" : ""
            }
        }
    }), define("models/variable/int/video75", [], function() {
        return {
            id: "video75",
            getValue: function(e) {
                return e.videoEvent && e.videoEvent.KDPEVNT === "percentReached" && e.videoEvent.KDPDAT_VALUE == 75 ? "true" : ""
            }
        }
    }), define("models/variable/video/videoComplete", ["models/variable/utility"], function(e) {
        return {
            id: "videoComplete",
            getValue: function(t, n) {
                var r = e.getValue(t, "KDPEVNT", n);
                return r === "playerPlayEnd" ? "true" : ""
            }
        }
    }), define("models/variable/common/assetSecondsConsumed", ["models/variable/utility", "models/variable/video/videoStart", "models/variable/int/video25", "models/variable/video/video50", "models/variable/int/video75", "models/variable/video/videoComplete"], function(e, t, n, r, i, s) {
        var o;
        return {
            id: "assetSecondsConsumed",
            getValue: function(u, a) {
                return "";
                var f, l, c, h, p, d
            },
            getEventValue: function(e, t) {
                return "";
                var u, a, f, l, c
            }
        }
    }), define("models/variable/common/assetStart", ["models/variable/video/videoStart", "models/variable/utility"], function(e, t) {
        return {
            id: "assetStart",
            getValue: function(n, r) {
                return t.getValue(n, "gameEvent", r) === "load" ? "true" : t.getValue(n, "appEvent", r) === "load" ? "true" : e.getValue(n, r) ? "true" : ""
            }
        }
    }), define("models/variable/common/bh", [], function() {
        return {
            id: "bh",
            getValue: function(e) {
                return window.innerHeight || document.body.clientHeight
            }
        }
    }), define("models/variable/common/bro", ["underscore"], function(e) {
        return {
            id: "bro",
            getValue: function(t) {
                function u(e) {
                    var t = e.indexOf(s);
                    if (t===-1)
                        return;
                    return parseFloat(e.substring(t + s.length + 1))
                }
                var n, r, i, s, o = [{
                    string: navigator.userAgent,
                    subString: "Chrome",
                    identity: "Chrome"
                }, {
                    string: navigator.userAgent,
                    subString: "OmniWeb",
                    versionSearch: "OmniWeb/",
                    identity: "OmniWeb"
                }, {
                    string: navigator.vendor,
                    subString: "Apple",
                    identity: "Safari",
                    versionSearch: "Version"
                }, {
                    prop: window.opera,
                    identity: "Opera",
                    versionSearch: "Version"
                }, {
                    string: navigator.vendor,
                    subString: "iCab",
                    identity: "iCab"
                }, {
                    string: navigator.vendor,
                    subString: "KDE",
                    identity: "Konqueror"
                }, {
                    string: navigator.userAgent,
                    subString: "Firefox",
                    identity: "Firefox"
                }, {
                    string: navigator.vendor,
                    subString: "Camino",
                    identity: "Camino"
                }, {
                    string: navigator.userAgent,
                    subString: "Netscape",
                    identity: "Netscape"
                }, {
                    string: navigator.userAgent,
                    subString: "MSIE",
                    identity: "Explorer",
                    versionSearch: "MSIE"
                }, {
                    string: navigator.userAgent,
                    subString: "Gecko",
                    identity: "Mozilla",
                    versionSearch: "rv"
                }, {
                    string: navigator.userAgent,
                    subString: "Mozilla",
                    identity: "Netscape",
                    versionSearch: "Mozilla"
                }
                ];
                return e.each(o, function(e, t) {
                    if (r)
                        return;
                    var n = e.string, i = e.prop;
                    n ? n.indexOf(e.subString)!==-1 && (s = e.versionSearch || e.identity, r = e.identity) : i && (r = e.identity)
                }), r = r || "An unknown browser", i = u(navigator.userAgent) || u(navigator.appVersion) || "an unknown version", n = r + " " + i, n
            }
        }
    }), define("models/variable/common/bw", [], function() {
        return {
            id: "bw",
            getValue: function(e) {
                return window.innerWidth || document.body.clientWidth
            }
        }
    }), define("models/variable/common/cmp", ["url"], function(e) {
        return {
            id: "cmp",
            getValue: function(t) {
                var n = e("?cmp", document.URL.toLowerCase()) || e("?ex_cmp", document.URL.toLowerCase()) || e("?att", document.URL.toLowerCase()) || e("?rmid", document.URL.toLowerCase()) || e("?source", document.URL.toLowerCase());
                return n && (n = unescape(n)), n || ""
            }
        }
    }), define("models/variable/common/cod", [], function() {
        return {
            id: "cod",
            getValue: function(e) {
                return screen.colorDepth
            }
        }
    }), define("models/variable/common/dolWAVersion", [], function() {
        return {
            id: "dolWAVersion",
            getValue: function(e) {
                return "4.1.20"
            }
        }
    }), define("models/variable/common/dom", [], function() {
        return {
            id: "dom",
            getValue: function(e) {
                return location.host
            }
        }
    }), define("models/variable/common/engagementType", ["models/variable/utility"], function(e) {
        return {
            id: "engagementType",
            getValue: function(t, n) {
                var r = e.getValue(t, "engagementType", n);
                return r ? escape(r) : ""
            }
        }
    }), define("models/variable/common/error", ["models/variable/utility", "models/variable/common/pageName"], function(e, t) {
        return {
            id: "error",
            getValue: function(n, r) {
                var i = t.getValue(n, r), s = e.getValue(n, "pageTypeCode", r);
                return i.toLowerCase() == "errorpage" || s.toLowerCase() == "errorpage" ? "true" : ""
            }
        }
    }), define("models/variable/common/flashVersion", [], function() {
        return {
            id: "flashVersion",
            getValue: function(e) {
                function i() {
                    var e, t;
                    try {
                        t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), e = t.GetVariable("$version")
                    } catch (n) {}
                    if (!e)
                        try {
                            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = "WIN 6,0,21,0", t.AllowScriptAccess = "always", e = t.GetVariable("$version")
                    } catch (r) {}
                    if (!e)
                        try {
                            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"), e = t.GetVariable("$version")
                    } catch (r) {}
                    if (!e)
                        try {
                            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"), e = "WIN 3,0,18,0"
                    } catch (r) {}
                    if (!e)
                        try {
                            t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), e = "WIN 2,0,0,11"
                    } catch (r) {
                        e =- 1
                    }
                    return e
                }
                var t = navigator.appVersion.indexOf("MSIE")!=-1, n = navigator.appVersion.toLowerCase().indexOf("win")!=-1, r = navigator.userAgent.indexOf("Opera")!=-1, s =- 1;
                if (navigator.plugins != null && navigator.plugins.length > 0) {
                    if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
                        var o = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0": "", u = navigator.plugins["Shockwave Flash" + o].description, a = u.split(" "), f = a[2].split("."), l = f[0], c = f[1], h = a[3];
                        h == "" && (h = a[4]), h[0] == "d" ? h = h.substring(1) : h[0] == "r" && (h = h.substring(1), h.indexOf("d") > 0 && (h = h.substring(0, h.indexOf("d")))), s = l + "." + c + "." + h
                    }
                } else 
                    navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1 ? s = 4 : navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1 ? s = 3 : navigator.userAgent.toLowerCase().indexOf("webtv")!=-1 ? s = 2 : t && n&&!r && (s = i());
                return "flash_version:" + s
            }
        }
    }), define("models/variable/common/gSwid", ["cookie"], function(e) {
        return {
            id: "gSwid",
            getValue: function() {
                return e.get("SWID") || ""
            }
        }
    }), define("models/variable/common/hootPostId", ["url"], function(e) {
        return {
            id: "hootPostId",
            getValue: function(t) {
                var n = e("?" + this.id);
                return typeof n == "undefined" ? "true" : n || ""
            }
        }
    }), define("models/variable/common/instantSearch", ["underscore", "models/variable/utility"], function(e, t) {
        return {
            id: "instantSearch",
            getValue: function(n, r) {
                var i = t.getValue(n, this.id, r);
                if (i)
                    return i;
                var s = t.getValue(n, "searchEvent", r), o;
                if (!s ||!s.split)
                    return "";
                o = s.split(",");
                var u=!1;
                return e.each(o, function(e) {
                    e === "instantSearch" && (u=!0)
                }), u ? "true" : ""
            }
        }
    }), define("models/variable/common/instantSearchResultClick", ["underscore", "models/variable/utility"], function(e, t) {
        return {
            id: "instantSearchResultClick",
            getValue: function(n, r) {
                var i = t.getValue(n, this.id, r);
                if (i)
                    return i;
                var s = t.getValue(n, "searchEvent", r), o;
                if (!s ||!s.split)
                    return "";
                o = s.split(",");
                var u=!1;
                return e.each(o, function(e) {
                    e === "instantResultsClick" && (u=!0)
                }), u ? "true" : ""
            }
        }
    }), define("models/variable/common/internalPromotion", ["url", "models/data/utility"], function(e, t) {
        return {
            id: "internalPromotion",
            getValue: function(n) {
                var r = t.getValueFromLocalCookie(this.id), i = e("?int_cmp", document.URL.toLowerCase());
                return i && (i = unescape(i)), typeof i == "undefined" && (i = "cmp_value_not_set"), r === i ? "" : i ? (t.addKeyValueToLocalCookieQueue(this.id, i), i) : ""
            }
        }
    }), define("models/variable/common/internalPromotionEvent", ["url"], function(e) {
        return {
            id: "internalPromotionEvent",
            getValue: function(t) {
                var n = e("?int_cmp", document.URL.toLowerCase());
                return typeof n == "undefined" && (n = "cmp_value_not_set"), n || ""
            }
        }
    }), define("models/variable/common/internalSearchPhrase", ["models/variable/utility"], function(e) {
        return {
            id: "internalSearchPhrase",
            getValue: function(t, n) {
                return e.getValue(t, this.id, n)
            }
        }
    }), define("models/variable/common/jf", [], function() {
        return {
            id: "jf",
            getValue: function(e) {
                return navigator.javaEnabled && navigator.javaEnabled()
            }
        }
    }), define("models/variable/common/jsv", [], function() {
        return {
            id: "jsv",
            getValue: function(e) {
                var t = [];
                return Number.prototype.toFixed ? t.push("1.5") : !1, [].indexOf && [].forEach ? t.push("1.6") : !1, function() {
                    try {
                        return [1, 3]
                    } catch (e) {
                        return !1
                    }
                }() ? t.push("1.7") : !1, [].reduce && [].reduceRight && JSON ? t.push("1.8") : !1, "".trimLeft ? t.push("1.8.1") : !1, t[t.length - 1]
            }
        }
    }), define("models/variable/common/lan", [], function() {
        return {
            id: "lan",
            getValue: function(e) {
                return navigator.language || navigator.browserLanguage
            }
        }
    }), define("models/variable/common/localSessionId", ["models/data/utility", "models/variable/common/cf"], function(e, t) {
        return {
            id: "localSessionId",
            getValue: function(n, r) {
                if (t.getValue({}, r) == "false")
                    return "";
                var i = e.getLocalValue(this.id);
                return i || (i = (new Date).getTime() + "-" + Math.floor(Math.random() * 1e13), e.addKeyValueToLocalCookieQueue(this.id, i)), i || ""
            }
        }
    }), define("models/variable/common/localVisitorId", ["models/data/utility", "models/variable/common/cf"], function(e, t) {
        return {
            id: "localVisitorId",
            getValue: function(n, r) {
                if (t.getValue({}, r) == "false")
                    return "";
                var i = e.getLocalValue(this.id, !0);
                return i || (i = (new Date).getTime() + "-" + Math.floor(Math.random() * 1e13), e.addKeyValueToLocalCookieQueue(this.id, i, !0)), i
            }
        }
    }), define("models/variable/common/loginStatus", ["cookie"], function(e) {
        return {
            id: "loginStatus",
            getValue: function(t) {
                var n, r = e.get("dolWASessionReg"), i = e.get("SWID");
                return i && i.indexOf("{")!==-1 ? n = "li|r" : r ? n = "lo|" + r : n = "lo|nr", n
            }
        }
    }), define("models/variable/common/mkwid", ["url"], function(e) {
        return {
            id: "mkwid",
            getValue: function(t) {
                var n = e("?" + this.id);
                return typeof n == "undefined" ? "true" : n || ""
            }
        }
    }), define("models/variable/common/omniId", ["cookie"], function(e) {
        return {
            id: "omniId",
            getValue: function(t) {
                var n = "s_vi", r = e.get(n);
                return r || "no_" + n + "_cookie"
            }
        }
    }), define("models/variable/common/os", ["underscore"], function(e) {
        return {
            id: "os",
            getValue: function(t) {
                var n = [{
                    string: navigator.platform,
                    subString: "Win",
                    identity: "Windows"
                }, {
                    string: navigator.platform,
                    subString: "Mac",
                    identity: "Mac"
                }, {
                    string: navigator.userAgent,
                    subString: "iPhone",
                    identity: "iPhone/iPod"
                }, {
                    string: navigator.platform,
                    subString: "Linux",
                    identity: "Linux"
                }
                ], r;
                return e.each(n, function(e, t) {
                    if (r)
                        return;
                    var n = e.string, i = e.prop;
                    n ? n.indexOf(e.subString)!==-1 && (r = e.identity) : i && (r = e.identity)
                }), r || "Unknown OS"
            }
        }
    }), define("models/variable/common/prevPageName", ["models/data/utility"], function(e) {
        return {
            id: "prevPageName",
            getValue: function(t) {
                var n;
                return n = e.getLocalValue(this.id) || "na", n
            }
        }
    }), define("models/variable/common/referrer", [], function() {
        return {
            id: "referrer",
            getValue: function(e) {
                return document.referrer || "na"
            }
        }
    }), define("models/variable/common/pageName-internalPromotion", ["models/variable/common/prevPageName", "models/variable/common/referrer", "models/variable/common/internalPromotion"], function(e, t, n) {
        return {
            id: "pageName-internalPromotion",
            getValue: function(r, i) {
                var s = n.getValue(r, i);
                if (s) {
                    var o = e.getValue(r, i);
                    return o ? o + "|" + s : t.getValue(r, i) + "|" + s
                }
                return ""
            }
        }
    }), define("models/variable/common/trackingCode", ["url"], function(e) {
        return {
            id: "trackingCode",
            getValue: function(t) {
                var n = e("?cmp", document.URL.toLowerCase()) || e("?ex_cmp", document.URL.toLowerCase()) || e("?att", document.URL.toLowerCase()) || e("?rmid", document.URL.toLowerCase()) || e("?source", document.URL.toLowerCase());
                return n && (n = unescape(n)), n || ""
            }
        }
    }), define("models/variable/common/pageName-trackingCode", ["models/variable/common/prevPageName", "models/variable/common/trackingCode", "models/variable/common/referrer"], function(e, t, n) {
        return {
            id: "pageName-trackingCode",
            getValue: function(r, i) {
                var s = t.getValue(r, i);
                if (s) {
                    var o = e.getValue(r, i);
                    return o ? unescape(o + "|" + + s) : unescape(n.getValue(r, i) + "|" + s)
                }
                return ""
            }
        }
    }), define("models/variable/common/trackType", [], function() {
        return {
            id: "trackType",
            getValue: function(e) {
                var t;
                return e.trackType === "tP" ? t = "trackpage" : e.trackType === "tL" ? t = "tracklink" : e.trackType === "tE" ? t = "trackevent" : e.trackType === "tV" ? t = "trackvideo" : e.trackType === "tG" ? t = "trackgame" : e.trackType === "tA" ? t = "trackapp" : e.trackType === "tPr" ? t = "trackprint" : e.trackType === "tLo" ? t = "trackload" : e.trackType === "tU" ? t = "trackunload" : e.trackType === "tEr" ? t = "trackerror" : e.trackType === "tMO" && (t = "trackmouseover"), t
            }
        }
    }), define("models/variable/common/pageViewId", ["models/variable/common/trackType", "bean"], function(e, t) {
        var n = {
            id: "pageViewId",
            getValue: function(e, t) {
                var n = new t;
                return n.pageViewId || t.firstPageViewId || n.firstPageViewId
            }
        };
        return n
    }), define("models/variable/common/pgTtl", [], function() {
        return {
            id: "pgTtl",
            getValue: function(e) {
                return document.title || "no_title_set"
            }
        }
    }), define("models/variable/common/plg", ["underscore"], function(e) {
        return {
            id: "plg",
            getValue: function(t) {
                var n = [];
                return e.each(navigator.plugins, function(e, t) {
                    n.push(e.name)
                }), n.join(";")
            }
        }
    }), define("models/variable/common/plgId", ["models/variable/common/plg"], function(e) {
        return {
            id: "plgId",
            getValue: function(t, n) {
                var r = e.getValue(t, n), i = 0, s;
                if (r == 0)
                    return i;
                for (var o = 0, u = r.length; o < u; o++)
                    s = r.charCodeAt(o), i = (i<<5) - i + s, i|=0;
                return i
            }
        }
    }), define("models/variable/common/searchPhrase", ["models/variable/utility"], function(e) {
        return {
            id: "searchPhrase",
            getValue: function(t, n) {
                return e.getValue(t, this.id, n)
            }
        }
    }), define("models/variable/common/previousPageSearch", ["models/variable/common/prevPageName", "models/variable/common/internalSearchPhrase", "models/variable/common/searchPhrase"], function(e, t, n) {
        return {
            id: "previousPageSearch",
            getValue: function(r, i) {
                var s = e.getValue(r, i), o = n.getValue(r, i), u = t.getValue(r, i), a = o || u;
                return s && a ? s : ""
            }
        }
    }), define("models/variable/common/print", ["models/variable/common/trackType", "models/variable/utility"], function(e, t) {
        return {
            id: "print",
            getValue: function(n, r) {
                var i = t.getValue(n, "linkName", r) || t.getValue(n, "linkId", r), s = t.getValue(n, "linkPosition", r);
                return i.indexOf("print:")!==-1 || s.indexOf("print:")!==-1 ? "true" : i.indexOf("print_")!==-1 || s.indexOf("print_")!==-1 ? "true" : t.getValue(n, "gameEvent", r).indexOf("omni:print:")!==-1 ? "true" : t.getValue(n, "appEvent", r).indexOf("print")!==-1 ? "true" : t.getValue(n, "print", r) ? "true" : e.getValue(n, r) === "trackprint" ? "true" : ""
            }
        }
    }), define("models/variable/common/printable", ["models/variable/common/trackType", "models/variable/utility"], function(e, t) {
        return {
            id: "printable",
            getValue: function(n, r) {
                var i = t.getValue(n, "linkName", r) || t.getValue(n, "linkId", r), s = t.getValue(n, "linkPosition", r);
                return i.indexOf("print:")!==-1 || s.indexOf("print:")!==-1 ? "true" : i.indexOf("print_")!==-1 || s.indexOf("print_")!==-1 ? "true" : t.getValue(n, "gameEvent", r).indexOf("omni:print:")!==-1 ? "true" : t.getValue(n, "appEvent", r).indexOf("print")!==-1 ? "true" : t.getValue(n, "print", r) ? "true" : e.getValue(n, r) === "trackprint" ? "true" : ""
            }
        }
    }), define("models/variable/common/promoClicks", ["url", "models/data/utility"], function(e, t) {
        return {
            id: "promoClicks",
            getValue: function(n) {
                var r = t.getValueFromLocalCookie(this.id), i = e("?int_cmp", document.URL.toLowerCase());
                return i && (i = unescape(i)), typeof i == "undefined" && (i = "cmp_value_not_set"), r === i ? "" : i ? (t.addKeyValueToLocalCookieQueue(this.id, i), i) : ""
            }
        }
    }), define("models/variable/common/property", ["models/variable/utility"], function(e) {
        return {
            id: "property",
            getValue: function(t, n) {
                var r = e.getValue(t, this.id, n) || e.getValue(t, "seriesCode", n), i = e.getValue(t, "region", n);
                return i === "emea"&&!r && (r = "multi"), r
            }
        }
    }), define("models/variable/common/res", [], function() {
        return {
            id: "res",
            getValue: function(e) {
                return screen.width + "x" + screen.height
            }
        }
    }), define("models/variable/common/searchAttempt", ["underscore", "models/variable/utility"], function(e, t) {
        return {
            id: "searchAttempt",
            getValue: function(n, r) {
                var i = t.getValue(n, this.id, r);
                if (i)
                    return i;
                var s = t.getValue(n, "searchEvent", r), o;
                if (!s ||!s.split)
                    return "";
                o = s.split(",");
                var u=!1;
                return e.each(o, function(e) {
                    e === "attempt" && (u=!0)
                }), u ? "true" : ""
            }
        }
    }), define("models/variable/common/searchEventAttempt", ["underscore", "models/variable/utility"], function(e, t) {
        return {
            id: "searchEventAttempt",
            getValue: function(n, r) {
                var i = t.getValue(n, this.id, r);
                if (i)
                    return i;
                var s = t.getValue(n, "searchEvent", r), o;
                if (!s ||!s.split)
                    return "";
                o = s.split(",");
                var u=!1;
                return e.each(o, function(e) {
                    e === "attempt" && (u=!0)
                }), u ? "true" : ""
            }
        }
    }), define("models/variable/common/searchEventAutocomplete", ["underscore", "models/variable/utility"], function(e, t) {
        return {
            id: "searchEventAutocomplete",
            getValue: function(n, r) {
                var i = t.getValue(n, this.id, r);
                if (i)
                    return i;
                var s = t.getValue(n, "searchEvent", r), o;
                if (!s ||!s.split)
                    return "";
                o = s.split(",");
                var u=!1;
                return e.each(o, function(e) {
                    e === "autoComplete" && (u=!0)
                }), u ? "true" : ""
            }
        }
    }), define("models/variable/common/searchEventClose", ["underscore", "models/variable/utility"], function(e, t) {
        return {
            id: "searchEventClose",
            getValue: function(n, r) {
                var i = t.getValue(n, "searchEvent", r), s;
                if (!i ||!i.split)
                    return "";
                s = i.split(",");
                var o=!1;
                return e.each(s, function(e) {
                    e === "close" && (o=!0)
                }), o ? "true" : ""
            }
        }
    }), define("models/variable/common/searchEventResultClicks", ["underscore", "models/variable/utility"], function(e, t) {
        return {
            id: "searchEventResultClicks",
            getValue: function(n, r) {
                var i = t.getValue(n, "linkPosition", r);
                if (i.indexOf("sitesearch:results")!=-1 || i.indexOf("sitesearch:featured")!=-1 || i.indexOf("sitesearch:games_carousel")!=-1 || i.indexOf("sitesearch:videos_carousel")!=-1)
                    return "true";
                var s = t.getValue(n, "searchEvent", r), o;
                if (!s ||!s.split)
                    return "";
                o = s.split(",");
                var u=!1;
                return e.each(o, function(e) {
                    e === "resultsClick" && (u=!0)
                }), u ? "true" : ""
            }
        }
    }), define("models/variable/common/searchPhraseEvent", ["models/data/utility", "models/variable/utility", "models/variable/common/instantSearch", "models/variable/common/instantSearchResultClick", "models/variable/common/searchEventAutocomplete"], function(e, t, n, r, i) {
        return {
            id: "searchPhraseEvent",
            getValue: function(s, o) {
                var u = e.getValueFromLocalCookie(this.id), a = t.getValue(s, "searchPhrase", o) || t.getValue(s, "internalSearchPhrase", o), f = n.getValue(s, o), l = r.getValue(s, o), c = i.getValue(s, o);
                if (u && u === a ||!a)
                    return "";
                if (!f&&!l&&!c)
                    return e.addKeyValueToLocalCookieQueue(this.id, a), a
            }
        }
    }), define("models/variable/common/searchResultClicks", ["underscore", "models/variable/utility"], function(e, t) {
        return {
            id: "searchResultClicks",
            getValue: function(n, r) {
                var i = t.getValue(n, "linkPosition", r);
                if (i.indexOf("sitesearch:results")!=-1 || i.indexOf("sitesearch:featured")!=-1 || i.indexOf("sitesearch:games_carousel")!=-1 || i.indexOf("sitesearch:videos_carousel")!=-1)
                    return "true";
                var s = t.getValue(n, "searchEvent", r), o;
                if (!s ||!s.split)
                    return "";
                o = s.split(",");
                var u=!1;
                return e.each(o, function(e) {
                    e === "resultsClick" && (u=!0)
                }), u ? "true" : ""
            }
        }
    }), define("models/variable/common/sem_cmp", ["url"], function(e) {
        return {
            id: "sem_cmp",
            getValue: function(t) {
                var n = e("?" + this.id);
                return n && (n = unescape(n)), n || ""
            }
        }
    }), define("models/variable/common/seriesCode", ["models/variable/utility"], function(e) {
        return {
            id: "seriesCode",
            getValue: function(t, n) {
                var r = e.getValue(t, this.id, n) || e.getValue(t, "property", n), i = e.getValue(t, "region", n);
                return i === "emea"&&!r && (r = "multi"), r
            }
        }
    }), define("models/variable/common/sessionFirstPage", ["models/data/utility", "models/variable/common/fullPageName", "pollster"], function(e, t, n) {
        return {
            id: "sessionFirstPage",
            getValue: function(r, i) {
                if (!n.corsSupported())
                    return "";
                var s = e.getPollsterValue("firstSessionPageName");
                if (!s) {
                    var s = t.getValue(r, i);
                    e.addKeyValueToCookieQueue("firstSessionPageName", s)
                }
                return s || ""
            }
        }
    }), define("models/variable/common/sessionFirstRefUrl", ["models/data/utility", "pollster"], function(e, t) {
        return {
            id: "sessionFirstRefUrl",
            getValue: function(n) {
                if (!t.corsSupported())
                    return "";
                var r = e.getPollsterValue("sessionFirstRefUrl");
                return r || (r = document.referrer, e.addKeyValueToCookieQueue("sessionFirstRefUrl", r)), r || ""
            }
        }
    }), define("models/variable/common/sessionFirstUrl", ["models/data/utility", "pollster"], function(e, t) {
        return {
            id: "sessionFirstUrl",
            getValue: function(n) {
                if (!t.corsSupported())
                    return "";
                var r = e.getPollsterValue("firstSessionUrl");
                return r || (r = document.URL, e.addKeyValueToCookieQueue("firstSessionUrl", r)), r || ""
            }
        }
    }), define("models/variable/common/sessionHitSeq", ["models/data/utility", "pollster"], function(e, t) {
        return {
            id: "sessionHitSeq",
            getValue: function(n) {
                if (!t.corsSupported())
                    return "";
                var r = e.getPollsterValue("hitCount");
                return r || (r = 1, e.addKeyValueToCookieQueue("hitCount", r)), r || 1
            }
        }
    }), define("models/variable/common/visitorId", ["models/data/utility", "models/variable/common/localVisitorId"], function(e, t) {
        return {
            id: "visitorId",
            getValue: function(n, r) {
                n = n || {};
                var i = e.getPollsterValue("visitorId", !0) || "";
                if (n.vendor == "omni") {
                    var s = /^[0-9]+-[0-9]+$/;
                    return i.match(s) ? i : t.getValue(n, r)
                }
                return i || ""
            }
        }
    }), define("models/variable/common/sessionId", ["models/data/utility", "pollster", "models/variable/common/visitorId", "models/variable/common/localSessionId"], function(e, t, n, r) {
        return {
            id: "sessionId",
            getValue: function(i, s) {
                i = i || {};
                var o = e.getPollsterValue("sessionId") || "";
                if (i.vendor == "omni") {
                    var u = /^[0-9]+-[0-9]+$/;
                    return o.match(u) ? o : r.getValue(i, s) || ""
                }
                if (!o) {
                    var a = n.getValue(i, s);
                    if (!a)
                        return "";
                    o = t.generateIdentifier(), e.addKeyValueToCookieQueue("sessionId", o)
                }
                return o || ""
            }
        }
    }), define("models/variable/common/siteLevel4", ["models/variable/utility", "models/variable/common/siteSection", "models/variable/common/breadcrumbs", "models/variable/common/site", "models/variable/common/siteCode", "models/variable/common/category", "models/variable/common/categoryCode"], function(e, t, n, r, i, s, o) {
        return {
            id: "siteLevel4",
            getValue: function(e, n) {
                var i = i.getValue(e, n) || t.getValue(e, n), u = i.getValue(e, n).split(":");
                if (u.length < 4)
                    return "";
                var a = [];
                for (var f = 0; f < 4; f++)
                    a.push(u[f]);
                var l = o.getValue(e, n) || s.getValue(e, n), c = c.getValue(e, n) || r.getValue(e, n), h = l + ":" + c + ":" + a.join(":");
                return h
            }
        }
    }), define("models/variable/common/siteLevel5", ["models/variable/utility", "models/variable/common/siteSection", "models/variable/common/breadcrumbs", "models/variable/common/category", "models/variable/common/categoryCode"], function(e, t, n, r, i) {
        return {
            id: "siteLevel5",
            getValue: function(e, s) {
                var o = n.getValue(e, s) || t.getValue(e, s), u = o.split(":");
                if (u.length < 5)
                    return "";
                var a = [];
                for (var f = 0; f < 5; f++)
                    a.push(u[f]);
                var l = i.getValue(e, s) || r.getValue(e, s), c = siteCode.getValue(e, s) || site.getValue(e, s), h = l + ":" + c + ":" + a.join(":");
                return h
            }
        }
    }), define("models/variable/common/siteSectionLevel1", [], function() {
        return {
            id: "siteSectionLevel1",
            getValue: function(e, t) {
                function r(e, t) {
                    return e && t.push(e), t
                }
                var n = new t;
                if (n.region != "emea")
                    return "";
                var i = [];
                return i = r(n.country, i), i = r(n.intBreadcrumbs, i), i.join(":")
            }
        }
    }), define("models/variable/common/siteSectionLevel2", ["models/variable/common/siteSectionLevel1"], function(e) {
        return {
            id: "siteSectionLevel2",
            getValue: function(t, n) {
                function i(e, t) {
                    return e && t.push(e), t
                }
                var r = new n;
                if (r.region != "emea")
                    return "";
                var s = [], o = e.getValue(t, n);
                return s = i(o, s), s = i(r.property, s), s.join(":")
            }
        }
    }), define("models/variable/common/siteSectionLevel3", ["models/variable/common/siteSectionLevel2"], function(e) {
        return {
            id: "siteSectionLevel3",
            getValue: function(t, n) {
                function i(e, t) {
                    return e && t.push(e), t
                }
                var r = new n;
                if (r.region != "emea")
                    return "";
                var s = [], o = e.getValue(t, n);
                return s = i(o, s), s = i(r.contentType, s), s.join(":")
            }
        }
    }), define("models/variable/common/siteSectionLevel4", ["models/variable/common/siteSectionLevel3", "models/variable/utility"], function(e, t) {
        return {
            id: "siteSectionLevel4",
            getValue: function(n, r) {
                function s(e, t) {
                    return e && t.push(e), t
                }
                var i = new r;
                if (i.region != "emea")
                    return "";
                var o = [], u = e.getValue(n, r);
                o = s(u, o);
                var a = t.getValue(n, "contentDescription", r), f = document.title, l = a || f;
                return o = s(l, o), o.join(":")
            }
        }
    }), define("models/variable/common/siteSectionLevelN", ["models/variable/common/siteSectionLevel4"], function(e) {
        return {
            id: "siteSectionLevelN",
            getValue: function(t, n) {
                function i(e, t) {
                    return e && t.push(e), t
                }
                var r = new n;
                if (r.region != "emea")
                    return "";
                var s = [], o = e.getValue(t, n);
                return s = i(o, s), s = i(r.extras, s), s.join(":")
            }
        }
    }), define("models/variable/common/siteSectionPage", ["models/variable/common/siteSectionLevelN", "models/variable/common/pageName"], function(e, t) {
        return {
            id: "siteSectionPage",
            getValue: function(n, r) {
                function i(e, t) {
                    return e && t.push(e), t
                }
                var s = [], o = e.getValue(n, r);
                return s = i(o, s), s = i(t.getValue(n, r), s), s.join(":")
            }
        }
    }), define("models/variable/common/swid", ["cookie"], function(e) {
        return {
            id: "swid",
            getValue: function() {
                return e.get("SWID") || ""
            }
        }
    }), define("models/variable/common/t", [], function() {
        return {
            id: "t",
            getValue: function(e) {
                var t = new Date;
                return t.getUTCFullYear() + "/" + t.getUTCMonth() + "/" + t.getUTCDate() + " " + t.getUTCHours() + ":" + t.getUTCMinutes() + ":" + t.getUTCSeconds()
            }
        }
    }), define("models/variable/common/timeOnPage", ["models/variable/utility"], function(e) {
        return {
            id: "timeOnPage",
            getValue: function(t, n) {
                var r = e.getValue(t, "timeOnPage", n);
                if (typeof r == "number"&&!isNaN(r))
                    return r
            }
        }
    }), define("models/variable/common/trackingCodeEvent", ["url", "models/data/utility"], function(e, t) {
        return {
            id: "trackingCodeEvent",
            getValue: function(n) {
                var r = t.getValueFromLocalCookie(this.id), i = e("?cmp", document.URL.toLowerCase()) || e("?ex_cmp", document.URL.toLowerCase()) || e("?att", document.URL.toLowerCase()) || e("?rmid", document.URL.toLowerCase()) || e("?source", document.URL.toLowerCase());
                return i && (i = unescape(i)), typeof i == "undefined" && (i = "cmp_value_not_set"), r === i ? "" : i ? (t.addKeyValueToLocalCookieQueue(this.id, i), unescape(i)) : ""
            }
        }
    }), define("models/variable/common/ua", [], function() {
        return {
            id: "ua",
            getValue: function(e) {
                return navigator && navigator.userAgent
            }
        }
    }), define("models/variable/common/universalPathing", ["models/variable/utility", "models/variable/common/fullPageName", "models/variable/common/assetStart"], function(e, t, n) {
        return {
            id: "universalPathing",
            getValue: function(r, i) {
                if (n.getValue(r, i)) {
                    var s = e.getValue(r, "ASSETNAME", i) || e.getValue(r, "assetName", i);
                    if (s)
                        return s
                }
                var o = e.getValue(r, "linkName", i) || e.getValue(r, "linkId", i);
                if (o)
                    return o;
                var u = t.getValue(r, i);
                return u ? u : ""
            }
        }
    }), define("models/variable/common/url", ["models/variable/utility"], function(e) {
        return {
            id: "url",
            getValue: function(t, n) {
                var r = e.getValue(t, "templateType", n);
                return r === "embed" && document.referrer ? unescape(document.referrer) : unescape(document.URL.substring(0, 255))
            }
        }
    }), define("models/variable/common/urlDomain", ["tld", "url", "models/variable/utility"], function(e, t, n) {
        return {
            id: "urlDomain",
            getValue: function(r, i) {
                var s = n.getValue(r, "templateType", i);
                if (s === "embed") {
                    var o = t("hostname", document.referrer), u = e.getDomain(o);
                    return u
                }
                var u = e.getDomain(location.hostname);
                return u
            }
        }
    }), define("models/variable/common/urlFullDomain", ["url", "models/variable/utility"], function(e, t) {
        return {
            id: "urlFullDomain",
            getValue: function(n, r) {
                var i = t.getValue(n, "templateType", r);
                if (i === "embed") {
                    var s = e("hostname", document.referrer);
                    return s
                }
                return location.hostname
            }
        }
    }), define("models/variable/common/urlFullDomain1", ["url", "models/variable/utility"], function(e, t) {
        return {
            id: "urlFullDomain1",
            getValue: function(n, r) {
                var i = t.getValue(n, "templateType", r);
                if (i === "embed") {
                    var s = e("hostname", document.referrer), o = e("path", document.referrer);
                    return o.split("/")[1] ? s + "/" + o.split("/")[1] || "" : s || ""
                }
                return location.pathname.split("/")[1] ? location.hostname + "/" + location.pathname.split("/")[1] || "" : location.hostname || ""
            }
        }
    }), define("models/variable/common/vendorLst", ["underscore"], function(e) {
        return {
            id: "vendorLst",
            getValue: function(e) {
                return "o"
            }
        }
    }), define("models/variable/common/visitorFirstPage", ["models/data/utility", "models/variable/common/fullPageName", "pollster"], function(e, t, n) {
        return {
            id: "visitorFirstPage",
            getValue: function(r, i) {
                if (!n.corsSupported())
                    return "";
                var s = e.getPollsterValue("firstPageName", !0);
                if (!s) {
                    var s = t.getValue(r, i);
                    e.addKeyValueToCookieQueue("firstPageName", s, !0)
                }
                return s || ""
            }
        }
    }), define("models/variable/common/visitorFirstRefUrl", ["models/data/utility", "pollster"], function(e, t) {
        return {
            id: "visitorFirstRefUrl",
            getValue: function(n) {
                if (!t.corsSupported())
                    return "";
                var r = e.getPollsterValue("firstRefUrl", !0);
                return r || (r = document.referrer, e.addKeyValueToCookieQueue("firstRefUrl", r, !0)), r || ""
            }
        }
    }), define("models/variable/common/visitorFirstUrl", ["models/data/utility", "pollster"], function(e, t) {
        return {
            id: "visitorFirstUrl",
            getValue: function(n) {
                if (!t.corsSupported())
                    return "";
                var r = e.getPollsterValue("firstUrl", !0);
                return r || (r = document.URL, e.addKeyValueToCookieQueue("firstUrl", r, !0)), r || ""
            }
        }
    }), define("models/variable/common/visitorSesSeq", ["models/data/utility", "pollster"], function(e, t) {
        return {
            id: "visitorSesSeq",
            getValue: function(n) {
                if (!t.corsSupported())
                    return "";
                var r = e.getPollsterValue("sessionCount", !0);
                return r || (r = 1, e.addKeyValueToCookieQueue("sessionCount", r, !0)), r || ""
            }
        }
    }), define("models/variable/game/gameLoad", ["models/variable/utility"], function(e) {
        return {
            id: "gameLoad",
            getValue: function(t, n) {
                var r = e.getValue(t, "gameEvent", n);
                return r === "load" ? "true" : ""
            }
        }
    }), define("models/variable/int/intFullPageName", [], function() {
        return {
            id: "intFullPageName",
            getValue: function(e, t) {
                var n = new t;
                return n.region == "emea" ? [n.region, n.country, n.intBreadcrumbs, n.property, n.breadcrumbs].join(":") : ""
            }
        }
    }), define("models/variable/int/intFullSiteSection", [], function() {
        return {
            id: "intFullSiteSection",
            getValue: function(e, t) {
                var n = new t;
                return [n.country, n.breadcrumbs, n.seriesCode, n.contentType, n.contentAction, n.contentDescription, n.extras].join(":")
            }
        }
    }), define("models/variable/int/intPageNameLinkId", ["models/variable/int/intFullPageName", "models/variable/utility"], function(e, t) {
        return {
            id: "intPageNameLinkId",
            getValue: function(n, r) {
                var i = e.getValue(n, r), s = t.getValue(n, "linkName", r);
                return i && s ? i + "|" + s : ""
            }
        }
    }), define("models/variable/link/buy", ["models/variable/utility"], function(e) {
        return {
            id: "buy",
            getValue: function(t, n) {
                var r = e.getValue(t, "linkName", n) || e.getValue(t, "linkId", n);
                return r.indexOf("buy_")!==-1 ? "true" : ""
            }
        }
    }), define("models/variable/link/download", ["models/variable/utility"], function(e) {
        return {
            id: "download",
            getValue: function(t, n) {
                var r = e.getValue(t, "linkName", n) || e.getValue(t, "linkId", n);
                return r.indexOf("download_")!==-1 ? "true" : ""
            }
        }
    }), define("models/variable/link/linkClicks", ["models/variable/common/trackType"], function(e) {
        return {
            id: "linkClicks",
            getValue: function(t, n) {
                return e.getValue(t, n) === "tracklink" ? "true" : ""
            }
        }
    }), define("models/variable/link/linkModule", ["models/variable/utility"], function(e) {
        return {
            id: "linkModule",
            getValue: function(t, n) {
                var r = e.getValue(t, "linkName", n) || e.getValue(t, "linkId", n);
                if (r) {
                    var i = r.split("/");
                    if (i.length > 1)
                        return i[0]
                }
                var s = e.getValue(t, "linkModule", n);
                return s ? s : "na"
            }
        }
    }), define("models/variable/link/signup", ["models/variable/utility"], function(e) {
        return {
            id: "signup",
            getValue: function(t, n) {
                var r = e.getValue(t, "linkName", n) || e.getValue(t, "linkId", n);
                return r.indexOf("signup_")!==-1 ? "true" : ""
            }
        }
    }), define("models/variable/link/signup_", ["models/variable/utility"], function(e) {
        return {
            id: "signup_",
            getValue: function(t, n) {
                var r = e.getValue(t, "linkName", n) || e.getValue(t, "linkId", n);
                return r.indexOf("signup_")!==-1 ? "true" : ""
            }
        }
    }), define("models/variable/link/social", ["models/variable/utility"], function(e) {
        return {
            id: "social",
            getValue: function(t, n) {
                var r = e.getValue(t, "linkName", n) || e.getValue(t, "linkId", n);
                return r.indexOf("social_")!==-1 ? "true" : ""
            }
        }
    }), define("models/variable/link/social_", ["models/variable/utility"], function(e) {
        return {
            id: "social_",
            getValue: function(t, n) {
                var r = e.getValue(t, "linkName", n) || e.getValue(t, "linkId", n);
                return r.indexOf("social_")!==-1 ? "true" : ""
            }
        }
    }), define("models/variable/video/adStart", ["models/variable/utility"], function(e) {
        return {
            id: "adStart",
            getValue: function(t, n) {
                var r = e.getValue(t, "account", n), i = e.getValue(t, "KDPEVNT", n);
                return i === "adStart" && r.indexOf("wdgint")===-1 ? "true" : ""
            }
        }
    }), define("models/variable/video/video20", ["models/variable/utility"], function(e) {
        return {
            id: "video20",
            getValue: function(t, n) {
                var r = e.getValue(t, "KDPEVNT", n), i = e.getValue(t, "KDPDAT_VALUE", n);
                return r === "percentReached" && i == 20 ? "true" : ""
            }
        }
    }), define("models/variable/video/video70", ["models/variable/utility"], function(e) {
        return {
            id: "video70",
            getValue: function(t, n) {
                var r = e.getValue(t, "KDPEVNT", n), i = e.getValue(t, "KDPDAT_VALUE", n);
                return r === "percentReached" && i == 70 ? "true" : ""
            }
        }
    }), define("models/variable/video/videoAuto", ["models/variable/video/videoStart", "models/variable/utility"], function(e, t) {
        return {
            id: "videoAuto",
            getValue: function(n, r) {
                var i = t.getValue(n, "AUTO", r);
                return i && e.getValue(n, r) ? "true" : ""
            }
        }
    }), define("models/variable/video/videoSegment", ["models/variable/video/videoStart", "models/variable/int/video25", "models/variable/video/video50", "models/variable/int/video75", "models/variable/video/videoComplete", "models/variable/utility"], function(e, t, n, r, i, s) {
        return {
            id: "videoSegment",
            getValue: function(o, u) {
                return "";
                var a
            }
        }
    }), define("models/variable/video/videoSegmentViews", ["models/variable/int/video25", "models/variable/video/video50", "models/variable/int/video75", "models/variable/video/videoComplete"], function(e, t, n, r) {
        return {
            id: "videoSegmentViews",
            getValue: function(i, s) {
                if (!i ||!i.videoEvent)
                    return "";
                var o = new s;
                if (o.region === "emea") {
                    if (e.getValue(i, s))
                        return "true";
                    if (t.getValue(i, s))
                        return "true";
                    if (n.getValue(i, s))
                        return "true";
                    if (r.getValue(i, s))
                        return "true"
                }
            }
        }
    }), define("models/variable/allVariables", ["models/variable/common/category", "models/variable/common/categoryCode", "models/variable/common/pageName", "models/variable/common/site", "models/variable/common/siteCode", "models/variable/common/siteSection", "models/variable/common/breadcrumbs", "models/variable/app/appLoad", "models/variable/app/appSaveC", "models/variable/app/appShare", "models/variable/common/arPageName", "models/variable/common/assetComplete", "models/variable/common/assetInteractionType", "models/variable/common/assetMSTP", "models/variable/common/assetBU", "models/variable/common/assetPlayerType", "models/variable/common/assetPlayerForm", "models/variable/common/assetSecondsConsumed", "models/variable/common/assetStart", "models/variable/common/bh", "models/variable/common/bro", "models/variable/common/bw", "models/variable/common/cf", "models/variable/common/cmp", "models/variable/common/cod", "models/variable/common/dolWAVersion", "models/variable/common/dom", "models/variable/common/engagementType", "models/variable/common/error", "models/variable/common/flashVersion", "models/variable/common/fullPageName", "models/variable/common/gSwid", "models/variable/common/hootPostId", "models/variable/common/instantSearch", "models/variable/common/instantSearchResultClick", "models/variable/common/internalPromotion", "models/variable/common/internalPromotionEvent", "models/variable/common/internalSearchPhrase", "models/variable/common/jf", "models/variable/common/jsv", "models/variable/common/lan", "models/variable/common/localSessionId", "models/variable/common/localVisitorId", "models/variable/common/loginStatus", "models/variable/common/mkwid", "models/variable/common/omniId", "models/variable/common/os", "models/variable/common/pageName-internalPromotion", "models/variable/common/pageName-trackingCode", "models/variable/common/pageViewId", "models/variable/common/pgTtl", "models/variable/common/plg", "models/variable/common/plgId", "models/variable/common/prevPageName", "models/variable/common/previousPageSearch", "models/variable/common/print", "models/variable/common/printable", "models/variable/common/promoClicks", "models/variable/common/property", "models/variable/common/referrer", "models/variable/common/res", "models/variable/common/searchAttempt", "models/variable/common/searchEventAttempt", "models/variable/common/searchEventAutocomplete", "models/variable/common/searchEventClose", "models/variable/common/searchEventResultClicks", "models/variable/common/searchPhrase", "models/variable/common/searchPhraseEvent", "models/variable/common/searchResultClicks", "models/variable/common/sem_cmp", "models/variable/common/seriesCode", "models/variable/common/sessionFirstPage", "models/variable/common/sessionFirstRefUrl", "models/variable/common/sessionFirstUrl", "models/variable/common/sessionHitSeq", "models/variable/common/sessionId", "models/variable/common/siteLevel4", "models/variable/common/siteLevel5", "models/variable/common/siteSectionLevel1", "models/variable/common/siteSectionLevel2", "models/variable/common/siteSectionLevel3", "models/variable/common/siteSectionLevel4", "models/variable/common/siteSectionLevelN", "models/variable/common/siteSectionPage", "models/variable/common/swid", "models/variable/common/t", "models/variable/common/timeOnPage", "models/variable/common/trackType", "models/variable/common/trackingCode", "models/variable/common/trackingCodeEvent", "models/variable/common/ua", "models/variable/common/universalPathing", "models/variable/common/url", "models/variable/common/urlDomain", "models/variable/common/urlFullDomain", "models/variable/common/urlFullDomain1", "models/variable/common/vendorLst", "models/variable/common/visitorFirstPage", "models/variable/common/visitorFirstRefUrl", "models/variable/common/visitorFirstUrl", "models/variable/common/visitorId", "models/variable/common/visitorSesSeq", "models/variable/game/gameLoad", "models/variable/int/intFullPageName", "models/variable/int/intFullSiteSection", "models/variable/int/intPageNameLinkId", "models/variable/int/video25", "models/variable/int/video75", "models/variable/link/buy", "models/variable/link/download", "models/variable/link/linkClicks", "models/variable/link/linkModule", "models/variable/link/signup", "models/variable/link/signup_", "models/variable/link/social", "models/variable/link/social_", "models/variable/video/adStart", "models/variable/video/video20", "models/variable/video/video50", "models/variable/video/video70", "models/variable/video/videoAuto", "models/variable/video/videoComplete", "models/variable/video/videoSegment", "models/variable/video/videoSegmentViews", "models/variable/video/videoStart"], function() {
        var e = {}, t = arguments.length;
        for (var n = 0; n < t; n++)
            e[arguments[n].id] = arguments[n];
        return e
    }), define("controller/vendor/utility", ["underscore", "models/variable/allVariables"], function(e, t) {
        return {
            trackOrder: ["trackType", "sessionId", "visitorId", "vendorLst", "error", "swid", "pageViewId", "pageId", "fullPageName", "arPageName", "plgId", "ua", "res", "cod", "eventLst", "categoryCode", "siteCode", "breadcrumbs", "buId", "propertyId", "seriesId", "characterId", "buCode", "propertyCode", "seriesCode", "characterCd", "contentType", "templateType", "ASSETID", "KSESSIONID", "KSESSIONSEQ", "KDPEVNT", "KDPDAT_VALUE", "KDPDAT_PLAYHEAD", "ASSETNAME", "AUTO", "KDPPROTO", "PLAYLISTID", "assetId", "gameSessionId", "gameEvent", "gameEventValue", "appSessionId", "appEvent", "appEventValue", "embFields", "embValues", "assetName", "adPageName", "adSizeList", "internalPromotion", "trackingCode", "url", "urlDomain", "urlFullDomain", "urlFullDomain1", "referrer", "linkName", "linkPosition", "linkUrl", "linkModule", "leadType", "engagementType", "engagementMeta", "loginStatus", "regFlowType", "internalSearchPhrase", "numSearchResults", "searchAutocomplete", "searchRefinement", "searchTypeCode", "prevPageName", "assetTypeCode", "visitorFirstPage", "visitorFirstRefUrl", "visitorFirstUrl", "visitorSesSeq", "sessionFirstPage", "sessionFirstRefUrl", "sessionFirstUrl", "sessionHitSeq"],
            getVariableValues: function(n, r, i, s, o, u) {
                r = r || {};
                var a = [];
                return e.each(n, function(n, f) {
                    var l;
                    if (t[f]) {
                        var c = t[f].getValue({
                            vendor: s,
                            trackType: i,
                            videoEvent: r,
                            gameEvent: r,
                            linkEvent: r,
                            eventEvent: r,
                            appEvent: r,
                            printEvent: r,
                            pageEvent: r,
                            unloadEvent: r
                        }, u);
                        t[f].getEventValue && (l = t[f].getEventValue({
                            vendor: s,
                            trackType: i,
                            videoEvent: r,
                            gameEvent: r,
                            linkEvent: r,
                            eventEvent: r,
                            appEvent: r,
                            printEvent: r,
                            pageEvent: r,
                            unloadEvent: r
                        }, u)), c !== "" && c != null && typeof c != "undefined" && e.each(n, function(e) {
                            a.push({
                                id: f,
                                mapping: e,
                                value: c,
                                eventValue: l
                            })
                        })
                    } else 
                        o[f] !== "" && o[f] != null && typeof o[f] != "undefined" && e.each(n, function(e) {
                            a.push({
                                id: f,
                                mapping: e,
                                value: o[f],
                                eventValue: l
                            })
                        })
                }), a
            },
            getParams: function(t, n, r, i) {
                var s = new i;
                r = r || {};
                var o, u, a, f;
                s.region == "emea" ? i.__appData.variableMap[t][n] ? (a = i.__appData.variableMap[t][n].EMEAmappings, o = i.__appData.variableMap[t][n].mappings, u = i.__appData.variableMap[t][n].events, f = i.__appData.variableMap[t][n].EMEAevents) : (o = {}, a = {}, u = {}, f = {}) : i.__appData.variableMap[t][n] ? (o = i.__appData.variableMap[t][n].mappings, u = i.__appData.variableMap[t][n].events) : (o = {}, u = {});
                var l = s.getProducerInfo(r), c, h;
                return s.region == "emea" && n == "omni" ? (c = this.getVariableValues(a, r, t, n, l, i), h = this.getVariableValues(f, r, t, n, l, i)) : (c = this.getVariableValues(o, r, t, n, l, i), h = this.getVariableValues(u, r, t, n, l, i)), c = e.uniq(c, !1, function(e, t, n) {
                    return e.mapping
                }), h = e.uniq(h, !1, function(e, t, n) {
                    return e.mapping
                }), {
                    mappings: c,
                    eventMapping: h
                }
            }
        }
    }), define("controller/vendor/CTO", ["underscore", "bean", "controller/vendor/utility", "models/variable/common/print", "models/variable/utility"], function(e, t, n, r, i) {
        var s = {
            checkForPrintTrack: function(e) {
                var t = r.getValue({
                    linkEvent: e
                }, CTO);
                if (t) {
                    var i = n.getParams("tPr", "cto", e, CTO);
                    o.send(i, CTO)
                }
            },
            trackPage: function(e, t) {
                e = e || {};
                var r = n.getParams("tP", "cto", e, t);
                o.send(r, t)
            },
            trackLink: function(e, t) {
                e = e || {}, this.checkForPrintTrack(e);
                var r = n.getParams("tL", "cto", e, t);
                o.send(r, t)
            },
            trackVideo: function(e, t) {
                e = e || {};
                var r = n.getParams("tV", "cto", e, t);
                o.send(r, t)
            },
            trackGame: function(e, t) {
                e = e || {};
                var r = n.getParams("tG", "cto", e, t);
                o.send(r, t)
            },
            trackEvent: function(e, t) {
                e = e || {};
                var r = n.getParams("tE", "cto", e, t);
                o.send(r, t)
            },
            trackApp: function(e, t) {
                e = e || {};
                var r = n.getParams("tA", "cto", e, t);
                o.send(r, t)
            },
            trackPrint: function(e, t) {
                e = e || {};
                var r = n.getParams("tPr", "cto", e, t);
                o.send(r, t)
            },
            trackUnload: function(e, t) {
                e = e || {};
                var r = n.getParams("tU", "cto", e, t);
                o.send(r, t)
            }
        }, o = {
            trackOrder: ["trackType", "sessionId", "visitorId", "localSessionId", "localVisitorId", "vendorLst", "error", "swid", "pageViewId", "pageId", "fullPageName", "arPageName", "plgId", "ua", "res", "cod", "eventLst", "assetName", "categoryCode", "siteCode", "breadcrumbs", "buId", "propertyId", "seriesId", "characterId", "buCode", "propertyCode", "seriesCode", "characterCd", "contentType", "templateType", "ASSETID", "KSESSIONID", "KSESSIONSEQ", "KDPEVNT", "KDPDAT_VALUE", "KDPDAT_PLAYHEAD", "ASSETNAME", "AUTO", "KDPPROTO", "PLAYLISTID", "assetId", "gameSessionId", "gameEvent", "gameEventValue", "appSessionId", "appEvent", "appEventValue", "embFields", "embValues", "adPageName", "adSizeList", "internalPromotion", "trackingCode", "url", "urlDomain", "urlFullDomain", "urlFullDomain1", "referrer", "linkName", "linkPosition", "linkUrl", "linkModule", "leadType", "engagementType", "engagementMeta", "loginStatus", "regFlowType", "internalSearchPhrase", "numSearchResults", "searchAutocomplete", "searchRefinement", "searchTypeCode", "prevPageName", "assetTypeCode", "visitorFirstPage", "visitorFirstRefUrl", "visitorFirstUrl", "visitorSesSeq", "sessionFirstPage", "sessionFirstRefUrl", "sessionFirstUrl", "sessionHitSeq"],
            send: function(t, n) {
                function p(e) {
                    var t = new Image;
                    t.src = e
                }
                if ((!t.mappings ||!t.mappings.length) && (!t.eventMapping ||!t.eventMapping.length))
                    return;
                var r = function(t, n) {
                    var r = e.indexOf(o.trackOrder, t.id), i = e.indexOf(o.trackOrder, n.id);
                    return r===-1 && i===-1 ? 0 : r===-1 ? 1 : i===-1?-1 : r > i ? 1 : r < i?-1 : 0
                };
                t.mappings = t.mappings.sort(r);
                var s = [];
                e.each(t.eventMapping, function(e) {
                    !e.eventValue && e.eventValue != 0 ? s.push(e.mapping) : s.push(e.mapping + "=" + escape(e.eventValue))
                });
                var u = e.uniq(s);
                u = u.join(",");
                var a = "";
                e.each(t.mappings, function(e, t) {
                    a += "&" + e.mapping + "=" + escape(e.value), t === 1 && u && (a += "&eventLst=" + escape(u))
                });
                var f = i.getValue({}, "account", n), l;
                f.indexOf("dev") == 0 || location.hostname.indexOf("diznee.net")!==-1 ? l = "w88_dolwa_dev03" : cto.region == "emea" ? l = "cto_web_intl" : l = "w88_dolwa_prod03";
                var c = Math.floor(Math.random() * 1e3), h;
                location.protocol === "https:" ? h = "https://ctologger01.analytics.go.com/cto/?app=" + l + a + "&dc=" + c : h = "http://ctologger01.analytics.go.com/cto/?app=" + l + a + "&dc=" + c, p(h)
            }
        };
        return s
    }), define("scode", [], function() {
        function n(e, t, n) {
            var r = "s.version='H.25.2';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent(x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visibilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){while(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr()}',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;s.t();s.eo=0;if(s.nrs>0&&s.useForcedLinkTracking&&e.target){t=e.target.target;if(e.target.dispatchEvent&&(!t||t==\\'_self\\'||t==\\'_top\\'||(s.wd.name&&t==s.wd.name))){e.stopPropagation();e.stopImmediatePropagation();e.preventDefault();n=s.d.createEvent(\"MouseEvents\");n.initMouseEvent(\"click\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget);n.s_fe=1;s.bct=e.target;s.bce=n;}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}else s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}", i = window, s = i.s_c_il, o = navigator, u = o.userAgent, a = o.appVersion, f = a.indexOf("MSIE "), l = u.indexOf("Netscape6/"), c, h, p, d, v;
            if (e) {
                e = e.toLowerCase();
                if (s)
                    for (p = 0; p < 2; p++)
                        for (h = 0; h < s.length; h++) {
                            v = s[h], d = v._c;
                            if ((!d || d == "s_c" || p > 0 && d == "s_l") && (v.oun == e || v.fs && v.sa && v.fs(v.oun, e))) {
                                v.sa && v.sa(e);
                                if (d == "s_c")
                                    return v
                            } else 
                                v = 0
                        }
            }
            i.s_an = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", i.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a"), i.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x"), i.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)"), i.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x"), i.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")"), i.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':a"), i.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){if(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")'+c.substring(e+1);s=c.indexOf('=function(')}return c;"), r = s_d(r), f > 0 ? (c = parseInt(h = a.substring(f + 5)), c > 3 && (c = parseFloat(h))) : l > 0 ? c = parseFloat(u.substring(l + 10)) : c = parseFloat(a);
            if (c < 5 || a.indexOf("Opera") >= 0 || u.indexOf("Opera") >= 0)
                r = s_ft(r);
            return v || (v = new Object, i.s_c_in || (i.s_c_il = new Array, i.s_c_in = 0), v._il = i.s_c_il, v._in = i.s_c_in, v._il[v._in] = v, i.s_c_in++), v._c = "s_c", (new Function("s", "un", "pg", "ss", r))(v, e, t, n), v
        }
        function r() {
            var e = window, t = e.s_giq, r, i, s;
            if (t)
                for (r = 0; r < t.length; r++)
                    i = t[r], s = n(i.oun), s.sa(i.un), s.setTagContainer(i.tagContainerName);
            e.s_giq = 0
        }
        var e = "", t;
        return r(), n
    }), define("controller/vendor/Omni", ["underscore", "bean", "controller/vendor/utility", "scode", "models/variable/utility", "models/variable/common/site", "models/variable/common/siteCode", "models/variable/common/category", "models/variable/common/categoryCode", "tld"], function(e, t, n, r, i, s, o, u, a, f) {
        var l, c = {
            trackPage: function(e, t) {
                this.checkInit(t);
                var r = n.getParams("tP", "omni", e, t);
                this.send(r, "tP", e)
            },
            trackGame: function(e, t) {
                this.checkInit(t);
                var r = n.getParams("tG", "omni", e, t);
                this.send(r, "tG", e)
            },
            trackVideo: function(e, t) {
                this.checkInit(t);
                var r = n.getParams("tV", "omni", e, t);
                this.send(r, "tV", e)
            },
            trackLink: function(e, t) {
                this.checkInit(t);
                var r = n.getParams("tL", "omni", e, t);
                this.send(r, "tL", e, t)
            },
            trackEvent: function(e, t) {
                this.checkInit(t);
                var r = n.getParams("tE", "omni", e, t);
                this.send(r, "tE", e)
            },
            trackApp: function(e, t) {
                this.checkInit(t);
                var r = n.getParams("tA", "omni", e, t);
                this.send(r, "tA", e)
            },
            trackPrint: function(e, t) {
                this.checkInit(t);
                var r = n.getParams("tPr", "omni", e, t);
                this.send(r, "tPr", e)
            },
            checkInit: function(e) {
                var t = i.getValue({}, "account", e), n = i.getValue({}, "country", e), r = i.getValue({}, "region", e), f = i.getValue({}, "buCode", e) || i.getValue({}, "unit", e), c = a.getValue({}, e) || u.getValue({}, e) || "", h = o.getValue({}, e) || s.getValue({}, e), p = i.getValue({}, "searchTypeCode", e) || i.getValue({}, "searchType", e) || i.getValue({}, "searchFlow", e), d = i.getValue({}, "internalSearchPhrase", e) || i.getValue({}, "searchPhrase", e), v = i.getValue({}, "genreCode", e) || i.getValue({}, "genre", e), m = "trackpage";
                if (!this.hasInit)
                    this.init(t, n, r, f, c, h, p, d, v, m, e);
                else {
                    var g = this.getOmniAccountName(t, c, h, p, d, v, m, f);
                    l.un = g, l.oun = g
                }
            },
            init: function(e, t, n, i, s, o, u, a, f, c) {
                if (n == "emea")
                    l || (l = r(e), this.extraOmniInit(l, t)), l.visitorNamespace = "disneyinternational", l.charSet = "UTF-8";
                else {
                    var h = this.getOmniAccountName(e, s, o, u, a, f, c, i);
                    l || (l = r(h, !1, !0), this.extraOmniInit(l, t)), l.visitorNamespace = "dol", l.un = h, l.oun = h
                }
                return l.trackingServer = "w88.go.com", this.hasInit=!0, !0
            },
            send: function(t, n, r, s) {
                l.linkTrackEvents = [], l.linkTrackVars = [];
                var o = [];
                e.each(t.eventMapping, function(e) {
                    !e.eventValue && e.eventValue != 0 ? o.push(e.mapping) : o.push(e.mapping + "=" + e.eventValue), l.linkTrackEvents.push(e.mapping)
                });
                var u = e.uniq(o);
                u = u.join(","), l.events = "", u && (l.events = u, l.linkTrackVars.push("events")), e.each(t.mappings, function(e) {
                    l[e.mapping] = e.value.toLowerCase ? e.value.toLowerCase() : e.value, l.linkTrackVars.push(e.mapping)
                }), l.linkTrackVars = l.linkTrackVars.join(","), l.linkTrackEvents = l.linkTrackEvents.join(","), l.pageURL = location.href;
                if (n !== "tV" && n !== "tG"||!!l.events)
                    if (n === "tL" || n === "tV" || n === "tG" || n === "tA" || n === "tE" || n === "tPr") {
                        var a;
                        n === "tL" && (a = i.getValue({
                            videoEvent: r,
                            gameEvent: r,
                            linkEvent: r,
                            eventEvent: r,
                            appEvent: r,
                            printEvent: r,
                            pageEvent: r,
                            unloadEvent: r
                        }, "linkName", s));
                        var f = a || n;
                        l.tl(!0, "o", f)
                    } else 
                        n === "tP" && l.t();
                e.each(t.mappings, function(e) {
                    delete l[e.mapping]
                }), delete l.events
            },
            getOmniAccountName: function(t, n, r, i, s, o, u, a) {
                var l = [], c = ",", h = {
                    doltest: "wdgdolgenericsite",
                    doltestdev: "wdgdolgenericsitedev",
                    doltest1: "wdgdoltesting1",
                    doltest2: "wdgdoltesting2",
                    doltest3: "wdgdoltesting3",
                    disneyinteractivestudios: "wdgdolint",
                    disneymovieclub: "wdgdoldmc,wdgdolstusec",
                    disneymovierewards: "wdgdoldmr,wdgdolstusec",
                    disneydvd: "wdgdoldvd,wdgdolstusec",
                    disneygiftexpress: "wdgdoldge,wdgdolstusec",
                    corporate: "wdgdolcorp",
                    dcnabckids: "wdgdolabckids",
                    dcndisneychannel: "wdgdoldch",
                    disneyxd: "wdgdoldxd",
                    dcnjetix: "wdgdoljtx",
                    dcnplayhouse: "wdgdolpla",
                    dcntoondisney: "wdgdoltoo",
                    disneybaby: "wdgdoldbb,wdgdolfamsec",
                    disneybooks: "wdgdoldbk",
                    disneydigitalbooks: "wdgdolddbk",
                    disneydigitalbooksdev: "wdgdolddbkdev",
                    familymuseum: "wdgdoldfm",
                    disneygallery: "wdgdoldg",
                    disneygiftcard: "wdgdoldgc",
                    disneyhealthykids: "wdgdoldhk",
                    disneyhome: "wdgdoldho",
                    disneylive: "wdgdoldle,wdgdolstusec",
                    disneyonbroadway: "wdgdoldob,wdgdoldobru,wdgdolstusec",
                    disneyonice: "wdgdoldoi,wdgdolstusec",
                    disneypictures: "wdgdoldpic,wdgdolstusec",
                    disneypintrader: "wdgdoldpt",
                    disneyvault28: "wdgdolv28",
                    disneyrewardsvisa: "wdgdoldvr",
                    adsales: "wdgdolad",
                    disneyconnection: "wdgdoldcn",
                    disneygamedownloads: "wdgdolgdw",
                    disneycom: "wdgdsec",
                    disneypreschool: "wdgdoldpre",
                    piratesonline: "wdgdolpironl",
                    preschooltime: "wdgdolpre",
                    toontown: "wdgdoltnt",
                    pixiehollow: "wdgdolpih",
                    elcapitan: "wdgdolelc,wdgdolstusec",
                    gamekingdom: "wdgdoldgk",
                    mixcentral: "wdgdolmc",
                    radiodisney: "wdgdolrad",
                    disneyparks: "wdgwdprodp,wdgwdprosec,wdgdsec",
                    disneyshopping: "wdgdsishopping",
                    clubpenguin: "wdgdolclp",
                    waltdisneyrecords: "wdgdolwdr,wdgdolstusec",
                    videoondemand: "wdgdolvod",
                    babyeinstein: "wdgdolbbe",
                    disneyeducationproducts: "wdgdoldep",
                    studiorollup: "wdgdolstusec",
                    worldofcars: "wdgdolwoc",
                    toystory: "wdgdoltoy",
                    disneymediasalesmarketing: "wdgdoldmsm",
                    familycom: "wdgdolfcom,wdgdolfamsec",
                    familyfuncom: "wdgdolfam,wdgdolfamsec",
                    wondertimecom: "wdgdolwnd,wdgdolfamsec",
                    gocom: "wdgdolgoc,wdgdolfamsec",
                    iparenting: "wdgdolipa,wdgdolfamsec",
                    family: "wdgdolfamsec",
                    enfamilia: "wdgdoldef,wdgdolfamsec",
                    familytravel: "wdgdolfcom,wdgdolfamsec,wdgwdprofamilytravel",
                    pregnancytoday: "wdgdolpreg,wdgdolfamsec",
                    kaboose: "wdgdolkabo,wdgdolfamsec",
                    babyzone: "wdgdolbbz,wdgdolfamsec",
                    funschool: "wdgdolfus,wdgdolfamsec",
                    amazingmoms: "wdgdolamm,wdgdolfamsec",
                    kaboosedev: "wdgdolkabodev,wdgdolfamsecdev",
                    babyzonedev: "wdgdolbbzdev,wdgdolfamsecdev",
                    funschooldev: "wdgdolfusdev,wdgdolfamsecdev",
                    amazingmomsdev: "wdgdolammdev,wdgdolfamsecdev",
                    familygap: "wdgdolgap",
                    videocom: "wdgvid,wdgdolstusec",
                    miramaxcom: "wdgmrmx,wdgdolstusec",
                    touchstone: "wdgtch,wdgdolstusec",
                    hollywoodrecords: "wdgbvmuhr,wdgdolstusec",
                    lyricstreetrecords: "wdgbvmulsr,wdgdolstusec",
                    disneyvideos: "wdgdoldvid",
                    disneygames: "wdgdoldgam",
                    disneycharacters: "wdgdoldchr",
                    disneyfans: "wdgdoldfan",
                    disneyurock: "wdgdoldurts",
                    cars: "wdgdolcar",
                    fairies: "wdgdolfai",
                    hannahmontana: "wdgdolhan",
                    highschoolmusical: "wdgdolhsm",
                    mickey: "wdgdolmic",
                    jonasbrothers: "wdgdoljbr",
                    pirates: "wdgdolpir",
                    disneyonstage: "wdgdoldos",
                    tron: "wdgdoltrn",
                    disneycreate: "wdgdolcr8",
                    princess: "wdgdolpri",
                    pooh: "wdgdolpoo",
                    alice: "wdgdolali",
                    persia: "wdgdolpop",
                    camprock: "wdgdolcmp",
                    disneyband: "wdgdoliitb",
                    phineasferb: "wdgdolphf",
                    waverly: "wdgdolwiz",
                    zekeluther: "wdgdolzkl",
                    sorcerer: "wdgdolsor",
                    tangled: "wdgdoltan",
                    disneysearch: "wdgdolser",
                    guestservices: "wdgdolgsrv",
                    registration: "wdgdolreg",
                    d2c: "wdgdold2c",
                    d2cdfile: "wdgdold2cdf",
                    d2cdev: "wdgdold2cdev",
                    d2cdfiledev: "wdgdold2cdfdev",
                    d2cfnf: "wdgdold2cfnf",
                    disneymagichealthyliving: "wdgdoldmhl",
                    musiccategory: "wdgdoldmuscat",
                    bookscategory: "wdgdoldbkcat",
                    liveeventscategory: "wdgdoldlecat",
                    moviescategory: "wdgdoldmovcat",
                    tvcategory: "wdgdoldtvcat",
                    trongames: "wdgdoltrng",
                    disneyjunior: "wdgdoldjr",
                    tvapp: "wdgdoltvapp",
                    d2cdisneymovierewards: "wdgdold2cdmr",
                    portfolio: "wdgdoldpor",
                    avengers: "wdgdolaemh",
                    shakeitup: "wdgdolsiu",
                    fishhooks: "wdgdolfish",
                    charlie: "wdgdolglc",
                    marsneedsmoms: "wdgdolmnm",
                    marvel: "wdgdolmarv",
                    marveldcom: "wdgdolmarvdcom",
                    marveldxd: "wdgdolmarvdxd",
                    marvelfamily: "wdgdolmarvfam",
                    prom: "wdgdolprom",
                    muppets: "wdgdolmup",
                    artofdisneyparks: "wdgdolartdp",
                    secondscreen: "wdgdolss",
                    mydisney: "wdgdolmyd",
                    buddies: "wdgdolfranbds",
                    friendsforchange: "wdgdolffc",
                    lionking: "wdgdollio",
                    mydcast: "wdgdolmydcast",
                    johncarter: "wdgdoljcm",
                    brave: "wdgdolbrave",
                    d23: "wdgdold23",
                    fashionlounge: "wdgdoldfl",
                    disneymagichealthylivingrollup: "wdgdolmhlru",
                    planes: "wdgdolplanes",
                    dsaa: "wdgdsaa",
                    frankenweenie: "wdgdolfkw",
                    wheresmywater: "wdgdolwmw",
                    babble: "wdgdolbabble,wdgdolfamsec",
                    rulethemix: "wdgdolrtm",
                    spoonful: "wdgdolspoon,wdgdolfamsec",
                    disneyfamilydeals: "wdgdoldfd,wdgdolfamsec",
                    summertoremember: "wdgdols2rem",
                    disneyvideo2: "wdgdoldvid2",
                    disneycollections: "wdgdoldcol",
                    timothygreen: "wdgdoldtim",
                    wreckitralph: "wdgdolwir",
                    findingnemo: "wdgdolnem",
                    hallmarkeverydayideas: "wdgdoldhei",
                    wheresmyperry: "wdgdolwmp",
                    ozg: "wdgdoloz",
                    stylestudio: "wdgdolmymstud",
                    disneydebit: "wdgdoldde",
                    pixeld: "wdgdoldpixeld",
                    beverlyhillschihuahua: "wdgdolbhc",
                    distrofacebook: "wdgdoldditfb",
                    disneymovies: "wdgdoldmov",
                    disneymusic: "wdgdoldmus",
                    disneygames2: "wdgdoldgam2",
                    disneyhomepage: "wdgdoldhom",
                    disneystaro: "wdgdolstar",
                    disneysitesearch: "wdgdoldss",
                    disneycomhomepage: "wdgdoldcomhp",
                    disneyloneranger: "wdgdollone",
                    disneyblogs: "wdgdoldblog",
                    monstersuniversity: "wdgdolmonu",
                    monstersuniversity2: "wdgdolmonuni",
                    disneyvacationclub: "wdgdoldvc",
                    monsterinc: "wdgdolmon",
                    disneyshows: "wdgdoldsho",
                    disneycharacters2: "wdgdoldchr2",
                    disneyinfinity: "wdgdoldinf",
                    memorymaker: "wdgdolfsto",
                    matterhorn: "",
                    disneyprincessandme: "wdgdcpprinme",
                    disneyprincessandmedev: "wdgdcpprinmedev",
                    disneymagazines: "wdgdpwmagazines",
                    disneymagazinesdev: "wdgdpwmagazinesdev",
                    disneyearthday: "wdgcorpearthday",
                    disneytheatricallicensing: "wdgstutheaterlicensing",
                    disneytheatricallicensingdev: "wdgstutheaterlicensingdev",
                    disneymediamktg: "wdgabcchannelmktg",
                    disneymediamktgdev: "wdgabcchannelmktgdev",
                    disneydisasterrelief: "wdgcorpdisaster",
                    disneydisasterreliefdev: "wdgcorpdisasterdev",
                    disneydcljobs: "wdgwdprdcljobs",
                    disneydcljobsdev: "wdgwdprdcljobsdev",
                    disneyimaginations: "wdgwdprimaginations",
                    disneyimaginationsdev: "wdgwdprimaginationsdev",
                    disneystudioservices: "wdgstuservices",
                    disneystudioservicesdev: "wdgstuservicesdev",
                    disneystudiocorpcomm: "wdgstucorpsite",
                    disneystudiocorpcommdev: "wdgstucorpsitedev",
                    disneystudiodigitalservices: "wdgstuddss",
                    disneystudiolicensing: "wdgstulicensing",
                    disneystudiolicensingdev: "wdgstulicensingdev",
                    disneydebitcard: "wdgcorpdebit",
                    disneydebitcarddev: "wdgcorpdebitdev",
                    wdgwdolmobilethree: "wdgwdolmobilethree",
                    disneyonbroadwaymobile: "wdgdoldobmob,wdgdoldobru,wdgdolstusec",
                    wdgwdoldmr: "wdgwdoldmr"
                }, p = {
                    "starwars.com": "wdgdolstarcom,wdgdollucas",
                    "lucasfilm.com": "wdgdollucasfilm,wdgdollucas",
                    "lucasarts.com": "wdgdollucasarts,wdgdollucas",
                    "ilm.com": "wdgdollucas",
                    "skysound.com": "wdgdollucas",
                    "sienarfleetsystems.com": "wdgdollucas",
                    "openexr.com": "wdgdollucas",
                    "alembic.io": "wdgdollucas"
                }, d = {
                    latam: "i",
                    luc: "d",
                    dcore: "d",
                    dcom: "d",
                    dtv: "d",
                    dgame: "d",
                    wdpro: "d",
                    dfam: "d",
                    ddit: "d",
                    ddif: "d",
                    dshop: "d",
                    dmus: "d",
                    dlive: "d",
                    dmov: "d",
                    dmob: "d",
                    corp: "d",
                    dpw: "d",
                    dcp: "d",
                    abc: "d",
                    wdpr: "d",
                    stu: "d",
                    internal: "n",
                    tools: "n"
                };
                if (d[n] === "d" && t.indexOf("wdgint")===-1) {
                    n === "luc" && l.push("wdgdollucas"), r === "starwars" && l.push("wdgdolstarcom"), r === "lucasfilm" && l.push("wdgdollucasfilm");
                    if (t.indexOf("dev") == 0)
                        return "wdgdsecdev";
                    l.push("wdgdsec"), n == "ddit" && l.push("wdgdolddit"), n == "dcom" && t.indexOf("disneysitesearch")==-1 && i != "" && typeof i == "string" && s != "" && typeof s == "string" && l.push("wdgdoldss"), a.indexOf("dch")!==-1 && l.push("wdgdoldch"), a.indexOf("dxd")!==-1 && l.push("wdgdoldxd"), a.indexOf("djr")!==-1 && l.push("wdgdoldjr"), a.indexOf("aja")!==-1 && l.push("wdgdolaja");
                    if (o == "brandexcluded" || n == "dmob" || t == "dsaa" && u != "trackpage" || t == "dsaa" && u != "trackvideo")
                        l = []
                } else 
                    d[n] !== "i" && d[n] === "n";
                if (t) {
                    t = t.toLowerCase().replace(/\s+/g, "");
                    var v = t.split(c);
                    e.each(v, function(t) {
                        var n = "";
                        t.indexOf("wdg") == 0 ? n = t : n = h[t];
                        if (n) {
                            var r = n.split(c);
                            e.each(r, function(e) {
                                e && l.push(e)
                            })
                        }
                    })
                }
                var m = p[f.getDomain(location.hostname)];
                return m && (m = m.split(","), e.each(m, function(e) {
                    l.push(e)
                })), l = e.uniq(l), l.length ? l.join(c) : "wdgdolunrouted"
            },
            extraOmniInit: function(e, t) {
                e.currencyCode = "USD", e.cookieDomainPeriods = "2", e.trackDownloadLinks=!0, e.trackExternalLinks=!0, e.trackInlineStats=!0, e.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls", t == "uk" ? e.linkInternalFilters = this._omniInternalDomainsUK.join() : t == "es" ? e.linkInternalFilters = this._omniInternalDomainsUK.join() : t == "de" ? e.linkInternalFilters = this._omniInternalDomainsDE.join() : e.linkInternalFilters = this._omniInternalDomains.join(), e.linkLeaveQueryString=!0, e.linkTrackEvents = "None", e.trackFormList=!0, e.trackPageName=!0, e.useCommerce=!1, e.varUsed = "prop30", e.eventList = "", e.exec = 0, e.usePlugins=!0, e.doPlugins = this.s_omni_doPlugins, this.omniInitFunctions(e)
            },
            s_omni_doPlugins: function(e) {
                e.getQueryParam("s_kwcid") && (e.scCampaignFlag = "SC", e.pageURL = e.manageQueryParam("s_kwcid", 1, 1)), e.socialPlatforms("eVar53"), e.eVar3 && (e.exec < 1 ? e.products = e.apl(e.products, "ads;" + e.eVar3 + ";;;event7=1", ",", 2) : e.products = "ads;" + e.eVar3 + ";;;event7=1", e.linkTrackVars = "prop2,prop75,prop9,prop12,prop13,prop34,products,eVar3,events", e.events = e.apl(e.events, "event7", ",", 2)), e.eVar47 = e.campaign || "", e.channelManager({
                    channel: "cm_tmp_channel",
                    keyword: "cm_tmp_keyword",
                    engine: "cm_tmp_engine",
                    campaignId: null,
                    referrer: "cm_tmp_referrer",
                    cleanURL: !0,
                    debug: null
                }), e.eVar47 || (e.cm_tmp_channel && e.cm_tmp_channel != "n/a" && e.cm_tmp_channel != "Typed/Bookmarked" && (e.eVar47 = e.cm_tmp_channel), e.scCampaignFlag && e.scCampaignFlag != "" && (e.eVar47 = e.eVar47 + e.scCampaignFlag), e.cm_tmp_engine && e.cm_tmp_engine != "n/a" ? e.eVar47 = e.eVar47 + "-" + e.cm_tmp_engine : e.cm_tmp_referrer && e.cm_tmp_referrer != "n/a" && (e.eVar47 = e.eVar47 + "-" + e.cm_tmp_referrer)), e.cm_tmp_keyword && e.cm_tmp_keyword != "n/a" ? e.eVar46 = e.cm_tmp_keyword : e.eVar47 && (e.eVar46 = "OtherEffort"), !e.eVar27 && e.eVar47 && (e.eVar27 = "OtherEffort"), e.clickThruQuality(e.eVar47, "", "event52")
            },
            omniInitFunctions: function(e) {
                e.isEntry = new Function("var s=this;var l=s.linkInternalFilters,r=s.referrer||typeof s.referrer!='undefined'?s.referrer:document.referrer,p=l.indexOf(','),b=0,v='';if(!r){return 1;}while((p=l.indexOf(','))){v=p>-1?l.substring(b,p):l;if(v=='.'||r.indexOf(v)>-1){return 0;}if(p==-1){break;}b=p+1;while(l.indexOf(',')+1==b){b++;}l=l.substring(b,l.length);}return 1;"), e.fireOnce = new Function("if(!this.__fo){this.__fo=new Object;return 1;}else {return 0;}"), e.channelManager = new Function("q", "var s=this,r=s.referrer||typeof s.referrer!='undefined'?s.referrer:document.referrer,e,k,c,w,g,_g,_b=0,url=s.pageURL?s.pageURL:s.wd.location,url=url+'',rf='n/a';if(!this.fireOnce()){s[q.channel]=s[q.keyword]=s[q.campaignId]=s[q.engine]=s[q.referrer]='';s[q.debug]=r;return -1;}if(!this.isEntry()){s[q.channel]=s[q.keyword]=s[q.campaignId]=s[q.engine]=s[q.referrer]='';s[q.debug]=r;return 0;}s.__se=s.__se();if(!r||typeof r=='undefined'){c='Typed/Bookmarked';e=s.__se.DirectLoad.direct.tl[0];k=s.__se.DirectLoad.direct.kw[0];w=s.__se.DirectLoad.direct.qs[0];}for(var u in s.__se){for(var i in s.__se[u]){if(r.indexOf(i)>-1&&u=='Search'){for(var h in s.__se[u][i].tl){if(typeof s.__se[u][i].tl[h]=='string'&&r.indexOf(s.__se[u][i].tl[h].indexOf('+')==0?i+'.'+s.__se[u][i].tl[h].substring(1,s.__se[u][i].tl[h].length):s.__se[u][i].tl[h])>-1){e=s.__se[u][i].tl[h].indexOf('+')==0?i+'.'+s.__se[u][i].tl[h].substring(1,s.__se[u][i].tl[h].length):s.__se[u][i].tl[h];for(g in s.__se[u][i].kw){_g=s.__se[u][i].kw[g];if(r.indexOf('?'+_g+'=')>-1||r.indexOf('&'+_g+'=')>-1){var t=r.indexOf('?'+_g+'=')>-1?r.indexOf('?'+_g+'='):r.indexOf('&'+_g+'=');k=r.substring(t+_g.length+2,r.length);k=k.substring(0,k.indexOf('&')>-1?k.indexOf('&'):k.length);_b=1;}}for(g in s.__se[u][i].qs){_g=s.__se[u][i].qs[g];if((url.indexOf('?'+_g+'=')>-1||url.indexOf('&'+_g+'=')>-1)&&typeof k!='undefined'){var t=url.indexOf('?'+_g+'=')>-1?url.indexOf('?'+_g+'='):url.indexOf('&'+_g+'=');w=url.substring((url.indexOf(_g)>-1?url.indexOf(_g):0)+_g.length+1,url.length);w=w.substring(0,w.indexOf('&')>-1?w.indexOf('&'):w.length);c='';_b=1;break;}else if(typeof k!='undefined'){c='SearchEngine';w='n/a';_b=1;}else if(typeof k=='undefined'){c='SearchEngineNoKW';w='n/a';_b=1;}}}}}else if(u=='Email'){for(g in s.__se[u][i].qs){if(typeof s.__se[u][i].qs[g]=='string'){_g=s.__se[u][i].qs[g];if(url.indexOf('?'+_g)>-1||url.indexOf('&'+_g)>-1){var t=url.indexOf('?'+_g+'=')>-1?url.indexOf('?'+_g+'='):url.indexOf('&'+_g+'=');w=url.substring((url.indexOf(_g)>-1?url.indexOf(_g):0)+_g.length+1,url.length);w=w.substring(0,w.indexOf('&')>-1?w.indexOf('&'):w.length);c='Email';e=i;k=s.__se[u][i].kw[0];_b=1;}}}}else if(u=='OtherWebsites'){if(r){for(g in s.__se[u][i].qs){if(typeof s.__se[u][i].qs[g]=='string'){_g=s.__se[u][i].qs[g];if(_g&&_g!='n/a'&&_g.indexOf('!')!=0){if(url.indexOf('?'+_g+'=')>-1||url.indexOf('&'+_g+'=')>-1){var t=url.indexOf('?'+_g+'=')>-1?url.indexOf('?'+_g+'='):url.indexOf('&'+_g+'=');w=url.substring((url.indexOf(_g)>-1?url.indexOf(_g):0)+_g.length+1,url.length);w=w.substring(0,w.indexOf('&')>-1?w.indexOf('&'):w.length);e='n/a';}}}}c='NaturalLink';rf=r;w=!w||typeof w=='undefined'?'n/a':w;k=s.__se[u][i].kw[0];}}}if(_b){break;}}s[q.channel]=!c||typeof c=='undefined'?'n/a':c;s[q.keyword]=!k||typeof k=='undefined'?'n/a':k;s[q.campaignId]=!w||typeof w=='undefined'?'n/a':w;s[q.engine]=!e||typeof e=='undefined'?'n/a':e;s[q.referrer]=!rf||typeof rf=='undefined'||rf=='n/a'?'n/a':rf.substring(rf.indexOf('://')+3,rf.indexOf('?')>-1?rf.indexOf('?'):rf.length);s[q.debug]=r;return 1;"), e.__se = new Function("return {Search:{yahoo:{tl:['+com', 'uk.search.yahoo.com', 'sg.search.yahoo.com', 'ca.search.yahoo.com', 'au.search.yahoo.com', 'search.yahoo.co.jp'], kw:['p'], qs:['n/a']},comcast:{tl:['search.comcast.net'], kw:['q'], qs:['n/a']},ebay:{tl:['shop.ebay.com'], kw:['OVKEY'], qs:['n/a']},earthlink:{tl:['search.earthlink.net'], kw:['q'], qs:['n/a']},google:{tl:['+com', '+co.uk', '+com.au', '+at', '+be', '+com.br', '+ca', '+dk', '+fi', '+fr', '+de', '+gr', '+co.id', '+ie', '+it', '+co.jp', '+com.mx', '+nl', '+co.nz', '+com.ng', '+no', '+pl', '+ru', '+com.sg', '+co.za', '+es', '+se', '+ch', '+ae', '+co.ve', '+vg'], kw:['q'], qs:['n/a']},alltheweb:{tl:['+com'], kw:['q'], qs:['n/a']},altavista:{tl:['+com'], kw:['q'], qs:['n/a']},aol:{tl:['search.aol.com'], kw:['query'], qs:['n/a']},ask:{tl:['+com'], kw:['q'], qs:['n/a']},gigablast:{tl:['+com'], kw:['q'], qs:['n/a']},hotbot:{tl:['+com'], kw:['query'], qs:['n/a']},live:{tl:['+com'], kw:['q'], qs:['n/a']},looksmart:{tl:['+com'], kw:['qt'], qs:['n/a']},lycos:{tl:['+com'], kw:['query'], qs:['n/a']},mamma:{tl:['+com'], kw:['query'], qs:['n/a']},msn:{tl:['search.msn.com', 'search.msn.co.uk'], kw:['q'], qs:['n/a']},myway:{tl:['search.myway.com'], kw:['searchfor'], qs:['n/a']},netscape:{tl:['search.netscape.com'], kw:['query'], qs:['n/a']}},'OtherWebsites':{direct:{tl:['n/a'], kw:['n/a'], qs:['n/a']}},'DirectLoad':{direct:{tl:['n/a'], kw:['n/a'], qs:['n/a']}},Email:{direct:{tl:['n/a'], kw:['n/a'], qs:['n/a']}}};"), e.getQueryParam = new Function("p", "d", "u", "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v"), e.p_gpv = new Function("k", "u", "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvf',k)}return v"), e.p_gvf = new Function("t", "k", "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa(v)}return ''"), e.clickThruQuality = new Function("scp", "tcth_ev", "cp_ev", "cff_ev", "cf_th", "var s=this;if(s.p_fo('clickThruQuality')==1){var ev=s.events?s.events+',':'';if(scp){s.events=ev+tcth_ev;if(s.c_r('cf')){var tct=parseInt(s.c_r('cf'))+1;s.c_w('cf',tct,0);if(tct==cf_th&&cff_ev){s.events=s.events+','+cff_ev;}}else {s.c_w('cf',1,0);}}else {if(s.c_r('cf')>=1){s.c_w('cf',0,0);s.events=ev+cp_ev;}}}"), e.p_fo = new Function("n", "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=new Object;return 1;}else {return 0;}"), e.manageQueryParam = new Function("p", "w", "e", "u", "var s=this,x,y,i,qs,qp,qv,f,b;u=u?u:(s.pageURL?s.pageURL:''+s.wd.location);u=u=='f'?''+s.gtfs().location:u+'';x=u.indexOf('?');qs=x>-1?u.substring(x,u.length):'';u=x>-1?u.substring(0,x):u;x=qs.indexOf('?'+p+'=');if(x>-1){y=qs.indexOf('&');f='';if(y>-1){qp=qs.substring(x+1,y);b=qs.substring(y+1,qs.length);}else{qp=qs.substring(1,qs.length);b='';}}else{x=qs.indexOf('&'+p+'=');if(x>-1){f=qs.substring(1,x);b=qs.substring(x+1,qs.length);y=b.indexOf('&');if(y>-1){qp=b.substring(0,y);b=b.substring(y,b.length);}else{qp=b;b='';}}}if(e&&qp){y=qp.indexOf('=');qv=y>-1?qp.substring(y+1,qp.length):'';qv=s.epa(qv);qv=unescape(qv);qv=unescape(qv);i=qv.indexOf('|');if(i>-1){x=qv.substring(0,i);qv=escape(x)+qv.substring(i);}else{qv=escape(qv)}qp=qp.substring(0,y+1)+qv;}if(w&&qp){if(f)qs='?'+qp+'&'+f+b;else if(b)qs='?'+qp+'&'+b;else	qs='?'+qp}else if(f)qs='?'+f+'&'+qp+b;else if(b)qs='?'+qp+'&'+b;else qs='?'+qp;return u+qs"), e.getLinkParams = new Function("p", "qp", "m", "q", "ev", "var s=this,a='',t=0,l,ll,l2,r,e,la,ap,ev=ev?';;;'+ev+'=1':'';if(s.d.links){for(i=0;i<s.d.links.length;i++){l=s.d.links[i];r=l.href;e=l.name;e=!e?'':e.indexOf('&')!=0?'&'+e:e;la=r.indexOf('?')>-1?r.substring(r.indexOf('?'))+e:e?'?'+e:'';ll=la.toLowerCase();if(qp&&ll.indexOf(qp.toLowerCase())>0) l2=qp?s.getQueryParam(qp,'',ll):'';else l2='';if(l2&&l2.indexOf(p.toLowerCase())>0){ap=s.getQueryParam(p,'',l2+'');if(ap!=''&&ap.indexOf('#')<0){a=s.apl(a,q+ap+ev,',',2);t=t+1;}}else if(ll.indexOf(p.toLowerCase())>0){ap=s.getQueryParam(p,'',la+'');if(ap!=''&&ap.indexOf('#')<0){a=s.apl(a,q+ap+ev,',',2);t=t+1;}}if(t==m)return a;}return a;}"), e.setLinkId = new Function("p1", "p2", "qp", "d", "id", "t", "k", "L", "v1", "vd", "var s=this;if(s.c_r(k)=='customlink'){s.c_w(k,'');return'';}var h=s.getLinkId(p1,p2,qp,d,id,L,v1,vd);var v,kv,wh=s.c_gd().substring(1);if(!h[0]){kv=s.c_r(k);s.c_w(k,'');return kv;}wh=h[0].indexOf(wh)>-1?'0':h[0].indexOf('javascript:')>-1?'0':'1';v=h[1].indexOf('atxt:')>-1?'1':'-1';if(s.linkType||s.linkName){s.c_w(k,'customlink');return h[1];}else if(t=='0'||s.lt(h[0])=='d'||s.lt(h[0])=='e'){s.c_w(k,'');return h[1];}else if(wh=='1'){s.linkName=h[1];s.linkType='o';return h[1];}else if(t=='1'){if(v>-1){s.c_w(k,h[1]);return '';}else{s.linkName=h[1];s.linkType='o';return h[1];}}else if(t=='2'){s.linkName=h[1];s.linkType='o';return h[1];}else{s.c_w(k,h[1]);return '';}s.c_w(k,'');return '';"), e.getLinkId = new Function("p1", "p2", "qp", "d", "id", "L", "v1", "vd", "var s=this,h,n,r,h1,h2,h3,a,e,q;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk;var y=s.ot(o);var n=s.oid(o);var x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s.ot(o);n=s.oid(o);x=o.s_oidt;}}d=d?d:'|';id=id?id:':';if(!o.href)return '';r=o.href;q=r.indexOf('?');e=!o.name?'':o.name.indexOf('&')!=0?'&'+o.name:o.name;h=q>-1?r.substring(q)+e:e?'?'+e:'';if(s.linkLeaveQueryString==false) r=q>0?r.substring(0,q):r;if(h){h1=p1?s.getQueryParam(p1,id,h):'';h2=p2?s.getQueryParam(p2,id,h):'';h3=qp?s.getQueryParam(qp,id,h):'';}if(h3&&s.getQueryParam(p2,id,h3)) h2=p2?s.getQueryParam(p2,id,h3):'';if(!h1&&!h2){if(!s.getinnerHTML(o)) return'';else h=L<1?'atxt'+id:'atxt'+id+s.getinnerHTML(o);}else h=h1+=h2?d+h2:'';h=v1?h+vd+v1:h;a=new Array;a[0]=r?r:'';a[1]=h;return a?a:'';"), e.getinnerHTML = new Function("o", "var ih=''+o.innerHTML,ihl=ih.toLowerCase(),i=ihl.indexOf('<img');if(ih&&i>-1){eval(\"evl=/ srcs*=s*['\\\"]?([^'\\\" ]+)['\\\"]?/i\");evl.exec(ih);if(RegExp.$1) ih=RegExp.$1}return(ih);"), e.repl = new Function("x", "o", "n", "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x"), e.getValOnce = new Function("v", "c", "e", "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v"), e.getPreviousValue = new Function("v", "c", "el", "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"), e.apl = new Function("L", "v", "d", "u", "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)L=L?L+d+v:v;return L"), e.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a"), e.setupFormAnalysis = new Function("var s=this;if(!s.fa){s.fa=new Object;var f=s.fa;f.ol=s.wd.onload;s.wd.onload=s.faol;f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.eventList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('','','','')}"), e.sendFormEvent = new Function("t", "pn", "fn", "en", "var s=this,f=s.fa;t=t=='s'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='s'?'Success':en;s.fasl(t);f.va[1]='';f.va[3]='';"), e.faol = new Function("e", "var s=s_c_il[" + e._in + "],f=s.fa,r=true,fo,fn,i,en,t,tf;if(!e)e=s.wd." + "event;f.os=new Array;if(f.ol)r=f.ol(e);if(s.d.forms&&s.d.forms.leng" + "th>0){for(i=s.d.forms.length-1;i>=0;i--){fo=s.d.forms[i];fn=fo.name" + ";tf=f.tfl&&s.pt(f.fl,',','ee',fn)||!f.tfl&&!s.pt(f.fl,',','ee',fn);" + "if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s.faos;f.va[1]=fn;f.va[3]='" + "No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.element" + "s[en];t=el.type;if(t&&t.toUpperCase){t=t.toUpperCase();var md=el.on" + "mousedown,kd=el.onkeydown,omd=md?md.toString():'',okd=kd?kd.toStrin" + "g():'';if(omd.indexOf('.fam(')<0&&okd.indexOf('.fam(')<0){el.s_famd" + "=md;el.s_fakd=kd;el.onmousedown=s.fam;el.onkeydown=s.fam}}}}}f.ul=s" + ".wd.onunload;s.wd.onunload=s.fasl;}return r;"), e.faos = new Function("e", "var s=s_c_il[" + e._in + "],f=s.fa,su;if(!e)e=s.wd.event;if(f.vu){s[f.v" + "u]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):tru" + "e;"), e.fasl = new Function("e", "var s=s_c_il[" + e._in + "],f=s.fa,a=f.va,l=s.wd.location,ip=s.trackPag" + "eName,p=s.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.path" + "name:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]=" + "'Error';else if(e=='s')a[2]='Success';else a[2]='Abandon'}else a[2]" + "='';var tp=ip?a[0]+':':'',t3=e!='s'?':('+a[3]+')':'',ym=!f.uc&&a[3]" + "!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s.linkTrackV" + "ars,lte=s.linkTrackEvents,up=s.usePlugins;if(f.uc){s.linkTrackVars=" + "ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s.linkTrackEvents=lt" + "e=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s.events=s.pt(f.vl,'" + ",','fage',2);else if(e=='s')s.events=s.pt(f.vl,',','fage',1);else s" + ".events=s.pt(f.vl,',','fage',0)}else{s.linkTrackVars=ltv=='None'?f." + "vu:ltv+','+f.vu}s[f.vu]=ym;s.usePlugins=false;var faLink=new Object" + "();faLink.href='#';s.tl(faLink,'o','Form Analysis');s[f.vu]='';s.us" + "ePlugins=up}return f.ul&&e!='e'&&e!='s'?f.ul(e):true;"), e.fam = new Function("e", "var s=s_c_il[" + e._in + "],f=s.fa;if(!e) e=s.wd.event;var o=s.trackLas" + "tChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this." + "form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e." + "which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOW" + "N'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIM" + "AGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=e" + "n;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1" + "){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va[" + "1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s" + "_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fak" + "d(e);"), e.ee = new Function("e", "n", "return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;"), e.fage = new Function("e", "a", "var s=this,f=s.fa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';"), e.c_rr = e.c_r, e.c_r = new Function("k", "var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;if(v)return v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;i=c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';',i);m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length,m<0?c.length:m));if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.getTime()){d.setTime(d.getTime()-60000);s.c_w(s.epa(k),'',d);v='';}return v;"), e.c_wr = e.c_w, e.c_w = new Function("k", "v", "e", "var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv,c,i,t;d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s.ape(k);pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1){pv=pv.substring(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);i=sv.indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.indexOf(';',i)+1);sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime()){pv+=' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}else{sv+=' '+k+'='+s.ape(v)+';';sc=1;}if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t.indexOf(';')!=-1){var t1=parseInt(t.substring(t.indexOf('|')+1,t.indexOf(';')));t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.setTime(ht);s.c_wr(pn,pv,d);}return v==s.c_r(s.epa(k));"), e.socialPlatforms = new Function("a", "var s=this,g,K,D,E,F;g=s.referrer?s.referrer:document.referrer;g=g.toLowerCase();K=s.split(s.socPlatList,'|');for(i=0;i<K.length;i++){D=s.split(K[i],'>');if(g.indexOf(D[0])!=-1){if(a){s[a]=D[1];}}}"), e.socPlatList = "facebook.com>Facebook|twitter.com>Twitter|t.co/>Twitter|youtube.com>Youtube|clipmarks.com>Clipmarks|dailymotion.com>Dailymotion|delicious.com>Delicious|digg.com>Digg|diigo.com>Diigo|flickr.com>Flickr|flixster.com>Flixster|fotolog.com>Fotolog|friendfeed.com>FriendFeed|google.com/buzz>Google Buzz|buzz.googleapis.com>Google Buzz|plus.google.com>Google+|hulu.com>Hulu|identi.ca>identi.ca|ilike.com>iLike|intensedebate.com>IntenseDebate|myspace.com>MySpace|newsgator.com>Newsgator|photobucket.com>Photobucket|plurk.com>Plurk|slideshare.net>SlideShare|smugmug.com>SmugMug|stumbleupon.com>StumbleUpon|tumblr.com>Tumblr|vimeo.com>Vimeo|wordpress.com>WordPress|xanga.com>Xanga|metacafe.com>Metacafe|pinterest.com>Pinterest", e.socialAuthors = new Function("", "var s=this,g,tco;g=s.referrer?s.referrer:document.referrer;if(g.indexOf('t.co/')!=-1){s.tco=escape(s.split(g,'/')[3]);s.Integrate.add('SocialAuthor');s.Integrate.SocialAuthor.tEvar='eVar54';s.Integrate.SocialAuthor.get('search.twitter.com/search.json?var=[VAR]&callback=s.twitterSearch&q=http%3A%2F%2Ft.co%2F'+s.tco);s.Integrate.SocialAuthor.delay();s.Integrate.SocialAuthor.setVars=function(s,p){s[p.tEvar]=s.user;}}"), e.twitterSearch = new Function("obj", "var s=this,txt,txtRT,txtEnd,txtAuthor;txt=obj.results[0].text;txtRT=txt.indexOf('RT @');if(txtRT!=-1){txtEnd=txt.indexOf(' ',txtRT+4);txtAuthor=txt.substring(txtRT+4,txtEnd);s.user=txtAuthor.replace(':','');}else{s.user=obj.results[0].from_user;}s.Integrate.SocialAuthor.ready();"), e.maxDelay = "3000", e.loadModule("Integrate"), e.Integrate.onLoad = function(t, n) {
                    e.socialAuthors()
                }, e.trackingServer = "w88.go.com", e.trackingServerSecure = "sw88.go.com", e.dc = 112, e.m_Integrate_c = "var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!m.s.wd[o])m.s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disable=0;p.get=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._fu=function(p,u){var m=this,s=m.s,v,x,y,z,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;x=0;while(x>=0){x=u.indexOf('[',x);if(x>=0){y=u.indexOf(']',x);if(y>x){z=u.substring(x+1,y);if(z.length>2&&z.substring(0,2)=='s.'){v=s[z.substring(2)];if(!v)v=''}else{v=''+p[z];if(!(v==p[z]||parseFloat(v)==p[z]))z=0}if(z) {u=u.substring(0,x)+s.rep(escape(v),'+','%2B')+u.substring(y+1);x=y-(z.length-v.length+1)} else {x=y}}}}return u};m.get=function(u,v){var p=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule('Integrate:'+v,m._fu(p,u),0,1,p._n)}};m.delay=function(){var p=this;if(p._d<=0)p._d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;for(i=0;i<m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&&p._d>0)return 1}return 0};m._x=function(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d[x];p._d--}};m.beacon=function(u){var p=this,m=p._m,s=m.s,imn='s_i_'+m._in+'_Integrate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;im=s.wd[imn]=new Image;im.src=m._fu(p,u)}};m.script=function(u){var p=this,m=p._m;if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)", e.m_i("Integrate")
            },
            _omniInternalDomains: ["javascript:", f.getDomain(location.hostname), "dolimg.com", "clubpenguin.com", "go.com", "babyzone.com"],
            _omniInternalDomainsUK: ["javascript:", f.getDomain(location.hostname), "disneychannel.co.uk", "disneyinternational.com"],
            _omniInternalDomainsDE: ["javascript:", f.getDomain(location.hostname), "disneychannel.de", "disneyinternational.com"]
        };
        return c
    }), define("controller/vendor/ResearchNowAPI", ["underscore", "bean", "models/variable/common/fullPageName", "models/variable/utility"], function(e, t, n, r) {
        var i = {
            trackPage: function(e, t) {
                var n = new t;
                if (n.region == "emea")
                    return "";
                s.send(e, t)
            }
        }, s = {
            send: function(e, t) {
                e = e || {};
                var i = location.protocol + "//tag.researchnow.com/t/beacon?" + "pr=2701" + "&si=" + location.hostname + "&eid=" + n.getValue(e, t) + "&ca=" + r.getValue(e, "templateType", t) + "&adn=3" + "&tt=3", s = new Image;
                s.src = i
            }
        };
        return i
    }), define("StreamSense", [], function() {
        var e = e || {};
        return e.StreamSense = e.StreamSense || function() {
            function t(e) {
                s = e
            }
            function n(e) {
                o = e
            }
            function r(e, t) {
                var n = e || "", r = l, i = "undefined", o = a.comScore || a.sitestat || function(e) {
                    var t = "comScore=", n = f.cookie, r = "", o = "indexOf", u = "substring", l = "length", c = 2048, h, p = "&ns_", d = "&", v, m, g, y, b = a.encodeURIComponent || escape;
                    if (n[o](t) + 1)
                        for (g = 0, m = n.split(";"), y = m[l]; g < y; g++)
                            v = m[g][o](t), v + 1 && (r = d + unescape(m[g][u](v + t[l])));
                    e += p + "_t=" + + (new Date) + p + "c=" + (f.characterSet || f.defaultCharset || "") + r, e[l] > c && e[o](d) > 0 && (h = e[u](0, c - 8).lastIndexOf(d), e = (e[u](0, h) + p + "cut=" + b(e[u](h + 1)))[u](0, c)), s(e), typeof ns_p === i && (ns_p = {
                        src: e
                    }), ns_p.lastMeasurement = e
                };
                if (typeof t !== i) {
                    var u = [], c = a.encodeURIComponent || escape;
                    for (var h in t)
                        t.hasOwnProperty(h) && u.push(c(h) + "=" + c(t[h]));
                    /[\?\&]$/.test(n) || (n += "&"), n += u.join("&")
                }
                return o(n)
            }
            function i(e, t) {
                var n, r = 2048, i = a.encodeURIComponent || escape, s = [], o = d.LABELS_ORDER, u = e.split("?"), l = u[0], c = u[1], h = c.split("&");
                for (var p = 0, v = h.length; p < v; p++) {
                    var m = h[p].split("="), g = unescape(m[0]), y = unescape(m[1]);
                    g && (t[g] = y)
                }
                var b = {};
                for (var p = 0, v = o.length; p < v; p++) {
                    var w = o[p];
                    t.hasOwnProperty(w) && (b[w]=!0, s.push(i(w) + "=" + i(t[w])))
                }
                for (var w in t) {
                    if (b[w])
                        continue;
                    t.hasOwnProperty(w) && s.push(i(w) + "=" + i(t[w]))
                }
                return n = l + "?" + s.join("&"), n = n + (n.indexOf("&c8=") < 0 ? "&c8=" + i(f.title) : "") + (n.indexOf("&c7=") < 0 ? "&c7=" + i(f.URL) : "") + (n.indexOf("&c9=") < 0 ? "&c9=" + i(f.referrer) : ""), n.length > r && n.indexOf("&") > 0 && (last = n.substr(0, r - 8).lastIndexOf("&"), n = (n.substring(0, last) + "&ns_cut=" + i(n.substring(last + 1))).substr(0, r)), n
            }
            var s = function(e, t) {}, o = function(e, t, n) {};
            t(function(e, t) {
                var n = new Image;
                n.src = e, t && setTimeout(t, 0)
            }), n(function(e, t, n) {
                n && setTimeout(n, 0)
            });
            var u = typeof window != "undefined" && typeof document != "undefined", a, f;
            u ? (a = window, f = document) : (a = {}, f = {
                location: {
                    href: ""
                },
                title: "",
                URL: "",
                referrer: "",
                cookie: ""
            });
            var l = function() {
                var e = {
                    uid: function() {
                        var e = 1;
                        return function() {
                            return + (new Date) + "_" + e++
                        }
                    }(),
                    filter: function(e, t) {
                        var n = {};
                        for (var r in t)
                            t.hasOwnProperty(r) && e(t[r]) && (n[r] = t[r]);
                        return n
                    },
                    extend: function(e) {
                        var t = arguments.length, n;
                        e = e || {};
                        for (var r = 1; r < t; r++) {
                            n = arguments[r];
                            if (!n)
                                continue;
                            for (var i in n)
                                n.hasOwnProperty(i) && (e[i] = n[i])
                        }
                        return e
                    },
                    getString: function(e, t) {
                        var n = String(e);
                        return e == null ? t || "na" : n
                    },
                    getLong: function(e, t) {
                        var n = Number(e);
                        return e == null || isNaN(n) ? t || 0 : n
                    },
                    getInteger: function(e, t) {
                        var n = Number(e);
                        return e == null || isNaN(n) ? t || 0 : n
                    },
                    getBoolean: function(e, t) {
                        var n = String(e).toLowerCase() == "true";
                        return e == null ? t ||!1 : n
                    },
                    isNotEmpty: function(e) {
                        return e != null && e.length > 0
                    },
                    indexOf: function(t, n) {
                        var r =- 1;
                        return e.forEach(n, function(e, n) {
                            e == t && (r = n)
                        }), r
                    },
                    forEach: function(e, t, n) {
                        try {
                            if (typeof t == "function") {
                                n = typeof n != "undefined" ? n : null;
                                if (typeof e["length"] != "number" || typeof e[0] == "undefined") {
                                    var r = typeof e.__proto__ != "undefined";
                                    for (var i in e)(!r || r && typeof e.__proto__[i] == "undefined") 
                                        && typeof e[i] != "function" && t.call(n, e[i], i)
                                    } else 
                                        for (var i = 0, s = e.length; i < s; i++)
                                            t.call(n, e[i], i)
                                        }
                        } catch (o) {}
                    },
                    regionMatches: function(e, t, n, r, i) {
                        if (t < 0 || r < 0 || t + i > e.length || r + i > n.length)
                            return !1;
                        while (--i >= 0) {
                            var s = e.charAt(t++), o = n.charAt(r++);
                            if (s != o)
                                return !1
                        }
                        return !0
                    },
                    size: function(e) {
                        var t = 0, n;
                        for (var n in e)
                            e.hasOwnProperty(n) && t++;
                        return t
                    },
                    log: function(e, t) {
                        if (typeof t != "undefined" && t) {
                            var n = new Date, r = n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds();
                            console.log(r, e)
                        }
                    },
                    isTrue: function(e) {
                        return typeof e == "undefined"?!1 : typeof e == "string" ? (e = e.toLowerCase(), e === "true" || e === "1" || e === "on") : e?!0 : !1
                    },
                    toString: function(t) {
                        if (typeof t == "undefined")
                            return "undefined";
                        if (typeof t == "string")
                            return t;
                        if (Object.prototype.toString.call(t) === "[object Array]")
                            return t.join(",");
                        if (e.size(t) > 0) {
                            var n = "";
                            for (var r in t)
                                t.hasOwnProperty(r) && (n += r + ":" + t[r] + ";");
                            return n
                        }
                        return t.toString()
                    },
                    exists: function(e) {
                        return typeof e != "undefined" && e != null && e
                    },
                    firstGreaterThan0: function() {
                        for (var e = 0, t = arguments.length; e < t; e++) {
                            var n = arguments[e];
                            if (n > 0)
                                return n
                        }
                        return 0
                    }
                };
                return e.filterMap = function(t, n) {
                    for (var r in t)
                        e.indexOf(r, n)==-1 && delete t[r]
                }, e.getKeys = function(e, t) {
                    var n, r = [];
                    for (n in e)(!t || t.test(n)
                        ) && e.hasOwnProperty(n) && (r[r.length] = n);
                    return r
                }, e
            }(), c = function() {
                var e = ["play", "pause", "end", "buffer", "keep-alive", "hb", "custom", "ad_play", "ad_pause", "ad_end", "ad_click"];
                return {
                    PLAY: 0,
                    PAUSE: 1,
                    END: 2,
                    BUFFER: 3,
                    KEEP_ALIVE: 4,
                    HEART_BEAT: 5,
                    CUSTOM: 6,
                    AD_PLAY: 7,
                    AD_PAUSE: 8,
                    AD_END: 9,
                    AD_CLICK: 10,
                    toString: function(t) {
                        return e[t]
                    }
                }
            }(), h = function() {
                var e = [c.END, c.PLAY, c.PAUSE, c.BUFFER];
                return {
                    IDLE: 0,
                    PLAYING: 1,
                    PAUSED: 2,
                    BUFFERING: 3,
                    toEventType: function(t) {
                        return e[t]
                    }
                }
            }(), p = {
                ADPLAY: c.AD_PLAY,
                ADPAUSE: c.AD_PAUSE,
                ADEND: c.AD_END,
                ADCLICK: c.AD_CLICK
            }, d = {
                STREAMSENSE_VERSION: "4.1311.28",
                BRIGHTCOVE_VERSION: "3.1401.20",
                FLOWPLAYER_VERSION: "4.1311.28",
                HTML5_VERSION: "4.1311.28",
                JWPLAYER_VERSION: "2.1401.20",
                VIDEOJS_VERSION: "4.1311.28",
                DEFAULT_PLAYERNAME: "streamsense",
                DEFAULT_HEARTBEAT_INTERVAL: [{
                    playingtime: 6e4,
                    interval: 1e4
                }, {
                    playingtime: null,
                    interval: 6e4
                }
                ],
                KEEP_ALIVE_PERIOD: 12e5,
                PAUSED_ON_BUFFERING_PERIOD: 500,
                PAUSE_PLAY_SWITCH_DELAY: 500,
                C1_VALUE: "19",
                C10_VALUE: "js",
                NS_AP_C12M_VALUE: "1",
                NS_NC_VALUE: "1",
                PAGE_NAME_LABEL: "name",
                LABELS_ORDER: ["c1", "c2", "ns_site", "ns_vsite", "ns_ap_an", "ns_ap_pn", "ns_ap_pv", "c12", "name", "ns_ak", "ns_ap_ec", "ns_ap_ev", "ns_ap_device", "ns_ap_id", "ns_ap_csf", "ns_ap_bi", "ns_ap_pfm", "ns_ap_pfv", "ns_ap_ver", "ns_ap_sv", "ns_type", "ns_radio", "ns_nc", "ns_ap_ui", "ns_ap_gs", "ns_st_sv", "ns_st_pv", "ns_st_it", "ns_st_id", "ns_st_ec", "ns_st_sp", "ns_st_sq", "ns_st_cn", "ns_st_ev", "ns_st_po", "ns_st_cl", "ns_st_el", "ns_st_pb", "ns_st_hc", "ns_st_mp", "ns_st_mv", "ns_st_pn", "ns_st_tp", "ns_st_pt", "ns_st_pa", "ns_st_ad", "ns_st_li", "ns_st_ci", "ns_ap_jb", "ns_ap_res", "ns_ap_c12m", "ns_ap_install", "ns_ap_updated", "ns_ap_lastrun", "ns_ap_cs", "ns_ap_runs", "ns_ap_usage", "ns_ap_fg", "ns_ap_ft", "ns_ap_dft", "ns_ap_bt", "ns_ap_dbt", "ns_ap_dit", "ns_ap_as", "ns_ap_das", "ns_ap_it", "ns_ap_uc", "ns_ap_aus", "ns_ap_daus", "ns_ap_us", "ns_ap_dus", "ns_ap_ut", "ns_ap_oc", "ns_ap_uxc", "ns_ap_uxs", "ns_ap_lang", "ns_ap_miss", "ns_ts", "ns_st_ca", "ns_st_cp", "ns_st_er", "ns_st_pe", "ns_st_ui", "ns_st_bc", "ns_st_bt", "ns_st_bp", "ns_st_pc", "ns_st_pp", "ns_st_br", "ns_st_ub", "ns_st_vo", "ns_st_ws", "ns_st_pl", "ns_st_pr", "ns_st_ep", "ns_st_ty", "ns_st_cs", "ns_st_ge", "ns_st_st", "ns_st_dt", "ns_st_ct", "ns_st_de", "ns_st_pu", "ns_st_cu", "ns_st_fee", "c7", "c8", "c9"]
            }, v = function() {
                var e = function() {
                    function e(e, t) {
                        var n = t[e];
                        n != null && (f[e] = n)
                    }
                    var t = this, n = 0, r = 0, i = 0, s = 0, o = 0, u = 0, a, f;
                    l.extend(this, {
                        reset: function(e) {
                            e != null && e.length > 0 ? l.filterMap(f, e) : f = {}, f.hasOwnProperty("ns_st_cl") || (f.ns_st_cl = "0"), f.hasOwnProperty("ns_st_pn") || (f.ns_st_pn = "1"), f.hasOwnProperty("ns_st_tp") || (f.ns_st_tp = "1"), t.setPauses(0), t.setStarts(0), t.setBufferingTime(0), t.setBufferingTimestamp( - 1), t.setPlaybackTime(0), t.setPlaybackTimestamp( - 1)
                        },
                        setLabels: function(e, n) {
                            e != null && l.extend(f, e), t.setRegisters(f, n)
                        },
                        getLabels: function() {
                            return f
                        },
                        setLabel: function(e, n) {
                            var r = {};
                            r[e] = n, t.setLabels(r, null)
                        },
                        getLabel: function(e) {
                            return f[e]
                        },
                        getClipId: function() {
                            return (typeof a == "undefined" || a == null) && t.setClipId("1"), a
                        },
                        setClipId: function(e) {
                            a = e
                        },
                        setRegisters: function(s, u) {
                            var a = s.ns_st_cn;
                            a != null && (t.setClipId(a), delete s.ns_st_cn), a = s.ns_st_bt, a != null && (i = Number(a), delete s.ns_st_bt), e("ns_st_cl", s), e("ns_st_pn", s), e("ns_st_tp", s), e("ns_st_ub", s), e("ns_st_br", s);
                            if (u == h.PLAYING || u == null)
                                a = s.ns_st_sq, a != null && (r = Number(a), delete s.ns_st_sq);
                            u != h.BUFFERING && (a = s.ns_st_pt, a != null && (o = Number(a), delete s.ns_st_pt));
                            if (u == h.PAUSED || u == h.IDLE || u == null)
                                a = s.ns_st_pc, a != null && (n = Number(a), delete s.ns_st_pc)
                        },
                        createLabels: function(e, i) {
                            var s = i || {};
                            s.ns_st_cn = t.getClipId(), s.ns_st_bt = String(t.getBufferingTime());
                            if (e == c.PLAY || e == null)
                                s.ns_st_sq = String(r);
                            if (e == c.PAUSE || e == c.END || e == c.KEEP_ALIVE || e == c.HEART_BEAT || e == null)
                                s.ns_st_pt = String(t.getPlaybackTime()), s.ns_st_pc = String(n);
                            return l.extend(s, t.getLabels()), s
                        },
                        incrementPauses: function() {
                            n++
                        },
                        incrementStarts: function() {
                            r++
                        },
                        getBufferingTime: function() {
                            var e = i;
                            return s >= 0 && (e+=+(new Date) - s), e
                        },
                        setBufferingTime: function(e) {
                            i = e
                        },
                        getPlaybackTime: function() {
                            var e = o;
                            return u >= 0 && (e+=+(new Date) - u), e
                        },
                        setPlaybackTime: function(e) {
                            o = e
                        },
                        getPlaybackTimestamp: function() {
                            return u
                        },
                        setPlaybackTimestamp: function(e) {
                            u = e
                        },
                        getBufferingTimestamp: function() {
                            return s
                        },
                        setBufferingTimestamp: function(e) {
                            s = e
                        },
                        getPauses: function() {
                            return n
                        },
                        setPauses: function(e) {
                            n = e
                        },
                        getStarts: function() {
                            return r
                        },
                        setStarts: function(e) {
                            r = e
                        }
                    }), f = {}, t.reset()
                };
                return e
            }(), m = function() {
                var e = function() {
                    var e = this, t = null, n, r = 0, i = 0, s = 0, o = 0, u = 0, a, f = 0, p=!1;
                    l.extend(this, {
                        reset: function(t) {
                            t != null && t.length > 0 ? l.filterMap(a, t) : a = {}, e.setPlaylistId( + (new Date) + "_" + f), e.setBufferingTime(0), e.setPlaybackTime(0), e.setPauses(0), e.setStarts(0), e.setRebufferCount(0), p=!1
                        },
                        setLabels: function(t, n) {
                            t != null && l.extend(a, t), e.setRegisters(a, n)
                        },
                        getLabels: function() {
                            return a
                        },
                        setLabel: function(t, n) {
                            var r = {};
                            r[t] = n, e.setLabels(r, null)
                        },
                        getLabel: function(e) {
                            return a[e]
                        },
                        getClip: function() {
                            return t
                        },
                        getPlaylistId: function() {
                            return n
                        },
                        setPlaylistId: function(e) {
                            n = e
                        },
                        setRegisters: function(e, t) {
                            var a = e.ns_st_sp;
                            a != null && (r = Number(a), delete e.ns_st_sp), a = e.ns_st_bc, a != null && (s = Number(a), delete e.ns_st_bc), a = e.ns_st_bp, a != null && (o = Number(a), delete e.ns_st_bp), a = e.ns_st_id, a != null && (n = a, delete e.ns_st_id), t != h.BUFFERING && (a = e.ns_st_pa, a != null && (u = Number(a), delete e.ns_st_pa));
                            if (t == h.PAUSED || t == h.IDLE || t == null)
                                a = e.ns_st_pp, a != null && (i = Number(a), delete e.ns_st_pp)
                        },
                        createLabels: function(t, o) {
                            var u = o || {};
                            u.ns_st_bp = String(e.getBufferingTime()), u.ns_st_sp = String(r), u.ns_st_id = String(n), s > 0 && (u.ns_st_bc = String(s));
                            if (t == c.PAUSE || t == c.END || t == c.KEEP_ALIVE || t == c.HEART_BEAT || t == null)
                                u.ns_st_pa = String(e.getPlaybackTime()), u.ns_st_pp = String(i);
                            if (t == c.PLAY || t == null)
                                e.didFirstPlayOccurred() || (u.ns_st_pb = "1", e.setFirstPlayOccurred(!0));
                            return l.extend(u, e.getLabels()), u
                        },
                        incrementStarts: function() {
                            r++
                        },
                        incrementPauses: function() {
                            i++, t.incrementPauses()
                        },
                        setPlaylistCounter: function(e) {
                            f = e
                        },
                        incrementPlaylistCounter: function() {
                            f++
                        },
                        addPlaybackTime: function(n) {
                            if (t.getPlaybackTimestamp() >= 0) {
                                var r = n - t.getPlaybackTimestamp();
                                t.setPlaybackTimestamp( - 1), t.setPlaybackTime(t.getPlaybackTime() + r), e.setPlaybackTime(e.getPlaybackTime() + r)
                            }
                        },
                        addBufferingTime: function(n) {
                            if (t.getBufferingTimestamp() >= 0) {
                                var r = n - t.getBufferingTimestamp();
                                t.setBufferingTimestamp( - 1), t.setBufferingTime(t.getBufferingTime() + r), e.setBufferingTime(e.getBufferingTime() + r)
                            }
                        },
                        getBufferingTime: function() {
                            var e = o;
                            return t.getBufferingTimestamp() >= 0 && (e+=+(new Date) - t.getBufferingTimestamp()), e
                        },
                        setBufferingTime: function(e) {
                            o = e
                        },
                        getPlaybackTime: function() {
                            var e = u;
                            return t.getPlaybackTimestamp() >= 0 && (e+=+(new Date) - t.getPlaybackTimestamp()), e
                        },
                        setPlaybackTime: function(e) {
                            u = e
                        },
                        getStarts: function() {
                            return r
                        },
                        setStarts: function(e) {
                            r = e
                        },
                        getPauses: function() {
                            return i
                        },
                        setPauses: function(e) {
                            i = e
                        },
                        getRebufferCount: function() {
                            return s
                        },
                        incrementRebufferCount: function() {
                            s++
                        },
                        setRebufferCount: function(e) {
                            s = e
                        },
                        didFirstPlayOccurred: function() {
                            return p
                        },
                        setFirstPlayOccurred: function(e) {
                            p = e
                        }
                    }), t = new v, a = {}, e.reset()
                };
                return e
            }(), g = function() {
                var o = function(o, u) {
                    function a(e) {
                        at = e
                    }
                    function f(e) {
                        var t = 0;
                        if (at != null)
                            for (var n = 0; n < at.length; n++) {
                                var r = at[n], i = r.playingtime;
                                if (!i || e < i) {
                                    t = r.interval;
                                    break
                                }
                            }
                        return t
                    }
                    function p() {
                        b();
                        var e = f(et.getClip().getPlaybackTime());
                        if (e > 0) {
                            var t = ft > 0 ? ft: e;
                            ut = setTimeout(y, t)
                        }
                        ft = 0
                    }
                    function v() {
                        b();
                        var e = f(et.getClip().getPlaybackTime());
                        ft = e - et.getClip().getPlaybackTime()%e, ut != null && b()
                    }
                    function g() {
                        ft = 0, ct = 0, lt = 0
                    }
                    function y() {
                        lt++;
                        var e = U(c.HEART_BEAT, null);
                        M(e), ft = 0, p()
                    }
                    function b() {
                        ut != null && (clearTimeout(ut), ut = null)
                    }
                    function w() {
                        S(), st = setTimeout(E, d.KEEP_ALIVE_PERIOD)
                    }
                    function E() {
                        var e = U(c.KEEP_ALIVE, null);
                        M(e), Z++, w()
                    }
                    function S() {
                        st != null && (clearTimeout(st), st = null)
                    }
                    function x() {
                        N(), $.isPauseOnBufferingEnabled() && B(h.PAUSED) && (rt = setTimeout(T, d.PAUSED_ON_BUFFERING_PERIOD))
                    }
                    function T() {
                        if (pt == h.PLAYING) {
                            et.incrementRebufferCount(), et.incrementPauses();
                            var e = U(c.PAUSE, null);
                            M(e), Z++, pt = h.PAUSED
                        }
                    }
                    function N() {
                        rt != null && (clearTimeout(rt), rt = null)
                    }
                    function C() {
                        ot != null && (clearTimeout(ot), ot = null)
                    }
                    function k(e) {
                        return e == h.PLAYING || e == h.PAUSED
                    }
                    function L(e) {
                        return e == c.PLAY ? h.PLAYING : e == c.PAUSE ? h.PAUSED : e == c.BUFFER ? h.BUFFERING : e == c.END ? h.IDLE : null
                    }
                    function A(e, t, n) {
                        C();
                        if (I(e))
                            if (n)
                                setTimeout(function() {
                                    A(e, t)
                                }, n);
                            else {
                                var r = R(), i = Q, s = F(t), o = i >= 0 ? s - i: 0;
                                P(R(), t), H(e, t), q(e);
                                for (var u = 0, a = gt.length; u < a; u++)
                                    gt[u](r, e, t, o);
                                    O(t), et.setRegisters(t, e), et.getClip().setRegisters(t, e);
                                    var f = U(h.toEventType(e), t);
                                    l.extend(f, t), B(Y) && (M(f), pt = Y, Z++)
                            }
                    }
                    function O(e) {
                        var t = e.ns_st_mp;
                        t != null && (dt = t, delete e.ns_st_mp), t = e.ns_st_mv, t != null && (vt = t, delete e.ns_st_mv), t = e.ns_st_ec, t != null && (Z = Number(t), delete e.ns_st_ec)
                    }
                    function M(e, t) {
                        t === undefined && (t=!0), t && D(e);
                        var n = $.getPixelURL();
                        if (tt) {
                            if (!_()) {
                                var r = yt.am, o = yt.et, u = r.newApplicationMeasurement(tt, o.HIDDEN, e, n);
                                tt.getQueue().offer(u)
                            }
                        } else 
                            n && s(i(n, e))
                    }
                    function _() {
                        var e = tt.getAppContext(), t = tt.getSalt(), n = tt.getPixelURL();
                        return e == null || t == null || t.length == 0 || n == null || n.length == 0
                    }
                    function D(e) {
                        mt = U(null), l.extend(mt, e)
                    }
                    function P(e, t) {
                        var n = F(t);
                        if (e == h.PLAYING)
                            et.addPlaybackTime(n), v(), S();
                        else if (e == h.BUFFERING)
                            et.addBufferingTime(n), N();
                        else if (e == h.IDLE) {
                            var r = l.getKeys(et.getClip().getLabels());
                            et.getClip().reset(r)
                        }
                    }
                    function H(e, t) {
                        var n = F(t), r = j(t);
                        G = r, e == h.PLAYING ? (p(), w(), et.getClip().setPlaybackTimestamp(n), B(e) && (et.getClip().incrementStarts(), et.getStarts() < 1 && et.setStarts(1))) : e == h.PAUSED ? B(e) && et.incrementPauses() : e == h.BUFFERING ? (et.getClip().setBufferingTimestamp(n), it && x()) : e == h.IDLE && g()
                    }
                    function B(e) {
                        return e != h.PAUSED || pt != h.IDLE && pt != null ? e != h.BUFFERING && pt != e : !1
                    }
                    function j(e) {
                        var t =- 1;
                        return e.hasOwnProperty("ns_st_po") && (t = l.getInteger(e.ns_st_po)), t
                    }
                    function F(e) {
                        var t =- 1;
                        return e.hasOwnProperty("ns_ts") && (t = Number(e.ns_ts)), t
                    }
                    function I(e) {
                        return e != null && R() != e
                    }
                    function q(e) {
                        Y = e, Q =+ (new Date)
                    }
                    function R() {
                        return Y
                    }
                    function U() {
                        var e, t;
                        arguments.length == 1 ? (e = h.toEventType(Y), t = arguments[0]) : (e = arguments[0], t = arguments[1]);
                        var n = {};
                        if (typeof document != "undefined") {
                            var r = document;
                            n.c7 = r.URL, n.c8 = r.title, n.c9 = r.referrer
                        }
                        return t != null && l.extend(n, t), n.hasOwnProperty("ns_ts") || (n.ns_ts = String( + (new Date))), e != null&&!n.hasOwnProperty("ns_st_ev") && (n.ns_st_ev = c.toString(e)), $.isPersistentLabelsShared() && tt && l.extend(n, tt.getLabels()), l.extend(n, $.getLabels()), z(e, n), et.createLabels(e, n), et.getClip().createLabels(e, n), n.hasOwnProperty("ns_st_mp") || (n.ns_st_mp = dt), n.hasOwnProperty("ns_st_mv") || (n.ns_st_mv = vt), n.hasOwnProperty("ns_st_ub") || (n.ns_st_ub = "0"), n.hasOwnProperty("ns_st_br") || (n.ns_st_br = "0"), n.hasOwnProperty("ns_st_pn") || (n.ns_st_pn = "1"), n.hasOwnProperty("ns_st_tp") || (n.ns_st_tp = "1"), n.hasOwnProperty("ns_st_it") || (n.ns_st_it = "c"), n.ns_st_sv = d.STREAMSENSE_VERSION, n.ns_type = "hidden", n
                    }
                    function z(e, t) {
                        var n = t || {};
                        n.ns_st_ec = String(Z);
                        if (!n.hasOwnProperty("ns_st_po")) {
                            var r = G, i = F(n);
                            if (e == c.PLAY || e == c.KEEP_ALIVE || e == c.HEART_BEAT || e == null && Y == h.PLAYING)
                                r += i - et.getClip().getPlaybackTimestamp();
                            n.ns_st_po = l.getInteger(r)
                        }
                        return e == c.HEART_BEAT && (n.ns_st_hc = String(lt)), n
                    }
                    function W(e) {
                        var t = F(e);
                        t < 0 && (e.ns_ts = String( + (new Date)))
                    }
                    function X(e, t, n) {
                        t = t || {}, t.ns_st_ad = 1, e >= c.AD_PLAY && e <= c.AD_CLICK && $.notify(e, t, n)
                    }
                    function V(e, t) {
                        $.notify(c.CUSTOM, e, t)
                    }
                    var $ = this, J, K = null, Q = 0, G = 0, Y, Z = 0, et = null, tt, nt=!0, rt, it=!0, st, ot, ut, at = d.DEFAULT_HEARTBEAT_INTERVAL, ft = 0, lt = 0, ct = 0, ht=!1, pt, dt, vt, mt, gt, yt = {};
                    l.extend(this, {
                        reset: function(e) {
                            et.reset(e), et.setPlaylistCounter(0), et.setPlaylistId( + (new Date) + "_1"), et.getClip().reset(e), e != null&&!e.isEmpty() ? l.filterMap(J, e) : J = {}, Z = 1, lt = 0, v(), g(), S(), N(), C(), Y = h.IDLE, Q =- 1, pt = null, dt = d.DEFAULT_PLAYERNAME, vt = d.STREAMSENSE_VERSION, mt = null
                        },
                        notify: function() {
                            var e, t, n, r;
                            t = arguments[0], arguments.length == 3 ? (n = arguments[1], r = arguments[2]) : (n = {}, r = arguments[1]), e = L(t);
                            var i = l.extend({}, n);
                            W(i), i.hasOwnProperty("ns_st_po") || (i.ns_st_po = l.getInteger(r));
                            if (t == c.PLAY || t == c.PAUSE || t == c.BUFFER || t == c.END)
                                $.isPausePlaySwitchDelayEnabled() && I(e) && k(Y) && k(e) ? A(e, i, d.PAUSE_PLAY_SWITCH_DELAY) : A(e, i);
                            else {
                                var s = U(t, i);
                                l.extend(s, i), M(s, !1), Z++
                            }
                        },
                        getLabels: function() {
                            return J
                        },
                        setLabels: function(e) {
                            e != null && (J == null ? J = e : l.extend(J, e))
                        },
                        getLabel: function(e) {
                            return J[e]
                        },
                        setLabel: function(e, t) {
                            t == null ? delete J[e] : J[e] = t
                        },
                        setPixelURL: function(e) {
                            if (e == null || e.length == 0)
                                return null;
                            var t = e.indexOf("?");
                            if (t >= 0) {
                                if (t < e.length - 1) {
                                    var n = e.substring(t + 1).split("&");
                                    for (var r = 0, i = n.length; r < i; r++) {
                                        var s = n[r], o = s.split("=");
                                        o.length == 2 ? $.setLabel(o[0], o[1]) : o.length == 1 && $.setLabel(d.PAGE_NAME_LABEL, o[0])
                                    }
                                    e = e.substring(0, t + 1)
                                }
                            } else 
                                e += "?";
                            return K = e, K
                        },
                        getPixelURL: function() {
                            return K ? K : typeof ns_p != "undefined" && typeof ns_p.src == "string" ? K = ns_p.src.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : typeof ns_pixelUrl == "string" ? K.replace(/&amp;/, "&").replace(/&ns__t=\d+/, "") : null
                        },
                        isPersistentLabelsShared: function() {
                            return nt
                        },
                        setPersistentLabelsShared: function(e) {
                            nt = e
                        },
                        isPauseOnBufferingEnabled: function() {
                            return it
                        },
                        setPauseOnBufferingEnabled: function(e) {
                            it = e
                        },
                        isPausePlaySwitchDelayEnabled: function() {
                            return ht
                        },
                        setPausePlaySwitchDelayEnabled: function(e) {
                            ht = e
                        },
                        setClip: function(e, t) {
                            Y == h.IDLE && (et.getClip().reset(), et.getClip().setLabels(e, null), t && et.incrementStarts())
                        },
                        setPlaylist: function(e) {
                            Y == h.IDLE && (et.incrementPlaylistCounter(), et.reset(), et.getClip().reset(), et.setLabels(e, null))
                        },
                        importState: function(e) {
                            reset();
                            var t = l.extend({}, e);
                            et.setRegisters(t, null), et.getClip().setRegisters(t, null), O(t), Z++
                        },
                        exportState: function() {
                            return mt
                        },
                        getVersion: function() {
                            return d.STREAMSENSE_VERSION
                        },
                        addListener: function(e) {
                            gt.push(e)
                        },
                        removeListener: function(e) {
                            gt.splice(l.indexOf(e, gt), 1)
                        },
                        getClip: function() {
                            return et.getClip()
                        },
                        getPlaylist: function() {
                            return et
                        },
                        setHttpGet: t,
                        setHttpPost: n
                    }), l.extend(this, {
                        adNotify: X,
                        customNotify: V,
                        viewNotify: function(e, t) {
                            e = e || $.getPixelURL(), e && r(e, t)
                        }
                    }), e.comScore && (yt = e.comScore.exports, tt = yt.c()), J = {}, Z = 1, Y = h.IDLE, et = new m, rt = null, it=!0, ut = null, lt = 0, g(), st = null, ot = null, ht=!1, pt = null, G = 0, gt = [], $.reset(), o && $.setLabels(o), u && $.setPixelURL(u)
                };
                return function(t) {
                    function n(e, t) {
                        return x[N] || i(e, t)
                    }
                    function r() {
                        N =- 1;
                        for (var t = 0; t <= T; t++)
                            if (x.hasOwnProperty(t)) {
                                N = t;
                                break
                            }
                        return e.StreamSense.activeIndex = N, N
                    }
                    function i(t, n) {
                        return t = t || null, n = n || null, t && typeof t == "object" && (n = t, t = null), x[++T] = new e.StreamSense(n, t), r(), x[T]
                    }
                    function s() {
                        var t=!1, n = N;
                        if (typeof arguments[0] == "number" && isFinite(arguments[0]))
                            n = arguments[0];
                        else if (arguments[0]instanceof e.StreamSense)
                            for (var i in x)
                                if (x[i] === arguments[0]) {
                                    n = i;
                                    break
                                }
                        return x.hasOwnProperty(n) && (t = x[n], delete x[n], t.reset(), r()), t
                    }
                    function o(e) {
                        return e = e || {}, n().setPlaylist(e), n().getPlaylist()
                    }
                    function u(e, t, r) {
                        return e = e || {}, typeof t == "number" && (e.ns_st_cn = t), n().setClip(e, r), n().getClip()
                    }
                    function a(e, t, r) {
                        return typeof e == "undefined"?!1 : (r = r || null, t = t || {}, n().notify(e, t, r))
                    }
                    function f(e) {
                        typeof e != "undefined" && n().setLabels(e)
                    }
                    function c() {
                        return n().getLabels()
                    }
                    function h(e) {
                        typeof e != "undefined" && n().getPlaylist().setLabels(e)
                    }
                    function p() {
                        return n().getPlaylist().getLabels()
                    }
                    function d(e) {
                        typeof e != "undefined" && n().getClip().setLabels(e)
                    }
                    function v() {
                        return n().getClip().getLabels()
                    }
                    function m(e) {
                        return n().reset(e || {})
                    }
                    function g(e) {
                        return n().getPlaylist().reset(e || {})
                    }
                    function y(e) {
                        return n().getClip().reset(e || {})
                    }
                    function b(e) {
                        return e = e || {}, n().viewNotify(null, e)
                    }
                    function w(e, t) {
                        return arguments.length > 2 && (e = arguments[1], t = arguments[2]), e = e || {}, typeof t == "number" && (e.ns_st_po = t), n().customNotify(e, t)
                    }
                    function E() {
                        return n().exportState()
                    }
                    function S(e) {
                        n().importState(e)
                    }
                    var x = {}, T =- 1, N =- 1;
                    l.extend(t, {
                        activeIndex: N,
                        newInstance: i,
                        "new": i,
                        destroyInstance: s,
                        destroy: s,
                        newPlaylist: o,
                        newClip: u,
                        notify: a,
                        setLabels: f,
                        getLabels: c,
                        setPlaylistLabels: h,
                        getPlaylistLabels: p,
                        setClipLabels: d,
                        getClipLabels: v,
                        resetInstance: m,
                        resetPlaylist: g,
                        resetClip: y,
                        viewEvent: b,
                        customEvent: w,
                        exportState: E,
                        importState: S
                    })
                }(o), o
            }();
            return g.AdEvents = p, g.PlayerEvents = c, g
        }(), e.StreamSense
    }), define("controller/vendor/ComScore", ["underscore", "bean", "models/variable/video/videoStart", "models/variable/video/adStart", "models/variable/utility", "StreamSense", "models/variable/common/category", "models/variable/common/categoryCode"], function(e, t, n, r, i, s, o, u) {
        window._comscore = [], window.COMSCORE = [], t.on(window, "CTOReady", function() {
            c.init()
        });
        var a = new s({}, "http://b.scorecardresearch.com/p?c1=2&c2=15592703"), f = {
            trackVideoStream: function(e) {
                var t = i.getValue({
                    videoEvent: e
                }, "KDPEVNT", CTO), n = i.getValue({
                    videoEvent: e
                }, "KDPDAT_VALUE", CTO), r = i.getValue({
                    videoEvent: e
                }, "KDPDAT_PLAYHEAD", CTO), o = i.getValue({
                    videoEvent: e
                }, "VIDLEN", CTO), u = i.getValue({
                    videoEvent: e
                }, "GENURL", CTO), f = i.getValue({
                    videoEvent: e
                }, "ASSETID", CTO), l = i.getValue({
                    videoEvent: e
                }, "ASSETNAME", CTO), c = "";
                l && l[5] && (c = l[5]);
                var h = r * 1e3, p = o * 1e3, d = {}, v = [];
                t == "doPlay" && n == 0 && (d = {
                    ns_st_cn: "1",
                    ns_st_ci: f,
                    ns_st_pn: "1",
                    ns_st_tp: "1",
                    ns_st_cu: u,
                    ns_st_cl: p
                }, c && (d.ns_st_ep = c), v[0] = d, a.setPlaylist(v), a.setClip(v[0])), t == "doPause" ? a.notify(s.PlayerEvents.PAUSE, {}, h) : t == "doPlay" ? a.notify(s.PlayerEvents.PLAY, {}, h) : t == "playerPlayEnd" && a.notify(s.PlayerEvents.END, {}, h)
            },
            trackPage: function(e, t) {
                l._dolWAcomScorePageCheck(t) && this.comScorePage(t), l._dolWAcomScoreADPAGECheck(t) && this.comScoreADPage(t)
            },
            trackVideo: function(e, t) {
                var i=!1, s=!1;
                n.getValue({
                    videoEvent: e
                }, t) && (i=!0), r.getValue({
                    videoEvent: e
                }, t) && (s=!0);
                if (i)
                    try {
                        window.COMSCORE.beacon({
                            c1: 1,
                            c2: "6035140",
                            c3: l._dolWAcomScoreKeyword(t),
                            c5: "09",
                            c10: ""
                        })
                } catch (o) {}
                if (s) {
                    var u;
                    e.FORM === "shr" ? u = "02" : u = "03";
                    try {
                        window.COMSCORE.beacon({
                            c1: 1,
                            c2: "6035140",
                            c5: u,
                            c10: ""
                        })
                    } catch (o) {}
                }(s || i) && l.createBeacon()
            },
            comScorePage: function(e) {
                window._comscore.push({
                    c1: "2",
                    c2: "6035140",
                    c3: "",
                    c4: document.URL,
                    c5: "",
                    options: {
                        url_append: l._dolWAcomScoreKeyword(e)
                    }
                }), l.createBeacon()
            },
            comScoreADPage: function(e) {
                var t = document.createElement("script"), n = document.getElementsByTagName("script")[0];
                t.async=!0, t.id = "analyticsComscorePageTrack", t.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/c2/15592703/cs.js", n.parentNode.insertBefore(t, n);
                var r = document.getElementById("analyticsComscorePageTrack");
                r.parentNode.removeChild(r)
            }
        }, l = {
            _dolWAcomScoreKeyword: function(e) {
                var t = u.getValue({}, e) || o.getValue({}, e) || "", n = i.getValue({}, "account", e), r = i.getValue({}, "comscorekw", e);
                return r != "" && typeof r == "string" ? "comscorekw=" + r : n.indexOf("dcndisneychannel")!=-1 ? "comscorekw=disneychannel" : n.indexOf("disneyxd")!=-1 ? "comscorekw=disneyxd" : n.indexOf("disneyvideo2")!=-1 ? "comscorekw=disneyvideos" : n.indexOf("disneygames2")!=-1 ? "comscorekw=disneygames" : n.indexOf("disneyshows")!=-1 ? "comscorekw=disneyshows" : n.indexOf("disneycharacters2")!=-1 ? "comscorekw=disneycharacters" : n.indexOf("disneymovies")!=-1 ? "comscorekw=disneymovies" : n.indexOf("disneymusic")!=-1 ? "comscorekw=disneymusic" : n.indexOf("disneyhomepage")!=-1 ? "comscorekw=disneycomhomepage" : n.indexOf("disneysitesearch")!=-1 ? "comscorekw=disneysearch" : document.URL.indexOf("http://disney.go.com/create") == 0 ? "comscorekw=disneycreate" : document.URL.indexOf("http://disney.go.com/mydisney") == 0 ? "comscorekw=mydisney" : document.URL.indexOf("http://disney.go.com/characters") == 0 ? "comscorekw=disneycharacters" : document.URL.indexOf("http://disney.go.com/games/#/games/disneych") == 0 ? "comscorekw=disneychannel" : document.URL.indexOf("http://disney.go.com/videos/#/videos/tvshows") == 0 ? "comscorekw=disneychannel" : document.URL.indexOf("http://disney.go.com/games/#/games/disneyxd") == 0 ? "comscorekw=disneyxd" : document.URL.indexOf("http://disney.go.com/videos") == 0 ? "comscorekw=disneyvideos" : document.URL.indexOf("http://disney.go.com/games") == 0 ? "comscorekw=disneygames" : n.indexOf("babble")!=-1 ? "comscorekw=babble" : n.indexOf("spoonful")!=-1 ? "comscorekw=spoonful" : n.indexOf("babyzone")!=-1 ? "comscorekw=babyzone" : n.indexOf("kaboose")!=-1 ? "comscorekw=kaboose" : n.indexOf("funschool")!=-1 ? "comscorekw=funschool" : n.indexOf("familycom")!=-1 ? "comscorekw=familycom" : ""
            },
            _dolWAcomScorePageCheck: function(e) {
                var t = u.getValue({}, e) || o.getValue({}, e) || "", n = i.getValue({}, "account", e);
                return t != "dfam" && t != "ddif" && (n.indexOf("wdgint")!==-1 && t == "latam" || n.indexOf("wdgint")==-1) && n.indexOf("babble")==-1 && n.indexOf("disneyjunior")==-1 && n.indexOf("disneyconnection")==-1 && n.indexOf("disneygamedownloads")==-1 && n.indexOf("piratesonline")==-1 && n.indexOf("pixiehollow")==-1 && n.indexOf("toontown")==-1 && n.indexOf("worldofcars")==-1 && n.indexOf("preschooltime")==-1?!0 : !1
            },
            _dolWAcomScoreADPAGECheck: function(e) {
                var t = u.getValue({}, e) || o.getValue({}, e) || "", n = i.getValue({}, "account", e), r = i.getValue({}, "breadcrumbs", e);
                return n.indexOf("babble")!=-1 || n.indexOf("spoonful")!=-1 || t == "dcom" || r == "teen-beach-movie"?!0 : !1
            },
            createBeacon: function() {
                var e = document.createElement("script"), t = document.getElementsByTagName("script")[0];
                e.async=!0, e.id = "analyticsComscorePageTrack", e.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js", t.parentNode.insertBefore(e, t);
                var n = document.getElementById("analyticsComscorePageTrack");
                n.parentNode.removeChild(n)
            }
        }, c = {
            udm_: function(e) {
                var t = "comScore=", n = document, r = n.cookie, i = "", s = "indexOf", o = "substring", u = "length", a = 2048, f, l = "&ns_", c = "&", h, p, d, v, m = window, g = m.encodeURIComponent || escape;
                if (r[s](t) + 1)
                    for (d = 0, p = r.split(";"), v = p[u]; d < v; d++)
                        h = p[d][s](t), h + 1 && (i = c + unescape(p[d][o](h + t[u])));
                e += l + "_t=" + + (new Date) + l + "c=" + (n.characterSet || n.defaultCharset || "") + "&c8=" + g(n.title) + i + "&c7=" + g(n.URL) + "&c9=" + g(n.referrer), e[u] > a && e[s](c) > 0 && (f = e[o](0, a - 8).lastIndexOf(c), e = (e[o](0, f) + l + "cut=" + g(e[o](f + 1)))[o](0, a)), n.images ? (h = new Image, m.ns_p || (ns_p = h), h.src = e) : ""
            },
            loadCS: function() {
                var e = document.createElement("script"), t = document.getElementsByTagName("script")[0];
                e.async=!0, e.id = "analyticsComscorePageTrack", e.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/c2/15592703/cs.js", t.parentNode.insertBefore(e, t);
                var n = document.getElementById("analyticsComscorePageTrack");
                n.parentNode.removeChild(n)
            },
            init: function() {
                if (this.isInit)
                    return;
                this.isInit=!0, c.udm_("http" + (document.location.href.charAt(4) == "s" ? "s://sb" : "://b") + ".scorecardresearch.com/b?c1=2&c2=15592703&" + l._dolWAcomScoreKeyword(CTO)), c.loadCS()
            }
        };
        return f
    }), define("models/API/CTO", ["underscore", "bean", "controller/vendor/CTO", "controller/vendor/Omni", "controller/vendor/ResearchNowAPI", "controller/vendor/ComScore", "models/variable/allVariables"], function(e, t, n, r, i, s, o) {
        var u, a = window.CTO.firstPageViewId, f;
        t.on(window, "beforeTrackPage", function() {
            a ? (f = a, a = undefined) : f = "CTO-" + (new Date).getTime() + "-" + Math.floor(Math.random() * 1e13)
        });
        var l = function() {
            return u || (u = {
                h: {},
                addToQueue: function(e, t) {
                    return l.__appData?!1 : (this.queue.unshift(function() {
                        this[e].apply(t)
                    }), !0)
                },
                runQueue: function() {
                    if (u.queue && u.queue.length && u.queue.pop && l.__appData)
                        while (u.queue.length) {
                            var t = u.queue.pop();
                            if (!e.isFunction(t))
                                return;
                                t = e.bind(t, u), t()
                        }
                },
                track: function(e) {
                    this.trackPage(e)
                },
                trackPage: function(o) {
                    this.copyProperties(o);
                    if (l.__appData.configs.disableTrackPage)
                        return;
                    if (this.addToQueue("trackPage", [o]))
                        return;
                    t.fire(window, "beforeTrackPage"), e.each(l.__appData.configs.trackedVendors, function(e) {
                        e === "CTO" ? n.trackPage(o, l) : e === "Omniture" ? r.trackPage(o, l) : e === "ResearchNow" ? i.trackPage(o, l) : e === "ComScore" && s.trackPage(o, l)
                    }), e.each(l.__appData.configs.trackedVendors, function(e) {
                        t.fire(window, "trackPage" + e, o)
                    }), t.fire(window, "trackPageComplete"), t.fire(l, "trackPageComplete")
                },
                trackLink: function(i, s, o, u, a) {
                    if (l.__appData.configs.disableTrackLink)
                        return;
                    if (this.addToQueue("trackLink", [i, s, o, u, a]))
                        return;
                    var f = {};
                    e.isObject(i) ? f = i : i && (f.linkName = i, f.linkPosition = s, f.linkType = o, f.linkUrl = u, f.autoLinkTracking = a), t.fire(window, "beforeTrackLink"), e.each(l.__appData.configs.trackedVendors, function(e) {
                        e === "CTO" ? n.trackLink(f, l) : e === "Omniture" && r.trackLink(f, l)
                    }), e.each(l.__appData.configs.trackedVendors, function(e) {
                        t.fire(window, "trackLink" + e, f)
                    }), t.fire(window, "trackLinkComplete")
                },
                trackEvent: function(i) {
                    if (l.__appData.configs.disableTrackEvent)
                        return;
                    if (this.addToQueue("trackEvent", [i]))
                        return;
                    i = i || {}, e.each(l.__appData.configs.trackedVendors, function(e) {
                        e === "CTO" ? n.trackEvent(i, l) : e === "Omniture" && r.trackEvent(i, l)
                    }), l.__appData.configs.trackedVendors && e.each(l.__appData.configs.trackedVendors, function(e) {
                        t.fire(window, "trackEvent" + e, i)
                    }), t.fire(window, "trackEventComplete")
                },
                trackVideo: function(i) {
                    if (l.__appData.configs.disableTrackVideo)
                        return;
                    if (this.addToQueue("trackVideo", [i]))
                        return;
                    i = i || {}, e.each(l.__appData.configs.trackedVendors, function(e) {
                        e === "CTO" ? n.trackVideo(i, l) : e === "Omniture" ? r.trackVideo(i, l) : e === "ComScore" && s.trackVideo(i, l)
                    }), e.each(l.__appData.configs.trackedVendors, function(e) {
                        var n = "trackVideo" + e;
                        t.fire(window, n, i)
                    }), t.fire(window, "trackVideoComplete")
                },
                trackGame: function(i) {
                    if (l.__appData.configs.disableTrackGame)
                        return;
                    if (this.addToQueue("trackGame", [i]))
                        return;
                    i = i || {}, e.each(l.__appData.configs.trackedVendors, function(e) {
                        e === "CTO" ? n.trackGame(i, l) : e === "Omniture" && r.trackGame(i, l)
                    }), l.__appData.configs.trackedVendors && e.each(l.__appData.configs.trackedVendors, function(e) {
                        t.fire(window, "trackGame" + e, i)
                    }), t.fire(window, "trackGameComplete")
                },
                trackApp: function(i) {
                    if (l.__appData.configs.disableTrackApp)
                        return;
                    if (this.addToQueue("trackApp", [i]))
                        return;
                    i = i || {}, e.each(l.__appData.configs.trackedVendors, function(e) {
                        e === "CTO" ? n.trackApp(i, l) : e === "Omniture" && r.trackApp(i, l)
                    }), l.__appData.configs.trackedVendors && e.each(l.__appData.configs.trackedVendors, function(e) {
                        t.fire(window, "trackApp" + e, i)
                    }), t.fire(window, "trackAppComplete")
                },
                trackPrint: function(i) {
                    if (l.__appData.configs.disableTrackPrint)
                        return;
                    if (this.addToQueue("trackPrint", [i]))
                        return;
                    i = i || {}, e.each(l.__appData.configs.trackedVendors, function(e) {
                        e === "CTO" ? n.trackPrint(i, l) : e === "Omniture" && r.trackPrint(i, l)
                    }), l.__appData.configs.trackedVendors && e.each(l.__appData.configs.trackedVendors, function(e) {
                        t.fire(window, "trackPrint" + e, i)
                    }), t.fire(window, "trackPrintComplete")
                },
                trackError: function(e) {},
                trackPagination: function(e) {
                    this.trackPage({
                        pageNumber: e
                    })
                },
                update: function(e) {
                    t.fire(window, "updateCTO", e)
                },
                resetObj: function() {
                    var n = this;
                    e.each(this, function(t, r) {
                        !e.isFunction(t) && r !== "__appData" && r !== "queue" && delete n[r]
                    }), t.fire(window, "resetObj")
                },
                setProducerInfo: function(e) {
                    this.copyProperties(e), t.fire(window, "ctoProducerInfoAdded")
                },
                setCTOConfigs: function(n) {
                    e.extend(l.__appData.configs, n), t.fire(window, "ctoConfigsUpdated")
                },
                copyProperties: function(t) {
                    var n = this;
                    e.each(t, function(t, r) {
                        e.isFunction(t) || r !== "retailer" && (n[r] = t)
                    })
                },
                getProducerInfo: function(t) {
                    var n = {};
                    return e.each(this, function(t, r) {
                        (typeof t == "string" || typeof t == "number" || typeof t == "boolean")&&!e.isNaN(t) && t !== "" && (n[r] = t)
                    }), e.each(t, function(e, t) {
                        if (e || e === 0)
                            n[t] = e
                    }), n
                },
                updateVariableLogic: function(t, n) {
                    e.each(t, function(t) {
                        var r = e.bind(n, o[t]);
                        o[t].getValue = r
                    })
                },
                addCTOListener: function(n, r) {
                    e.bind(r, u), t.on(window, n, r)
                },
                getCTOValue: function(e, t) {
                    return o[e] && o[e].getValue ? o[e].getValue(t, l) : !1
                }
            }), e.each(window.cto, function(t, n) {
                e.isFunction(t) || (u[n] = t)
            }), u.pageViewId = f, u
        };
        return l
    }), define("controller/events/APIReadyCTO", ["underscore", "bean", "models/API/CTO", "models/variable/common/category", "models/variable/common/categoryCode"], function(e, t, n, r, i) {
        var s, o, u, a;
        t.on(window, "configLoadedCTO", function(e) {
            u = e, f.checkIfMainDependenciesLoaded()
        }), t.on(window, "variableMapLoadedCTO", function(e) {
            a = e, f.checkIfMainDependenciesLoaded()
        }), t.on(window, "cookiesReadyCTO", function() {
            o=!0, f.checkIfMainDependenciesLoaded()
        }), t.on(window, "modulesLoadedCTO", function() {
            s=!0, f.checkIfMainDependenciesLoaded()
        });
        var f = {
            checkIfMainDependenciesLoaded: function() {
                if (!u ||!a ||!o ||!s)
                    return !1;
                var e = new n;
                n.__appData = {
                    configs: u,
                    variableMap: a
                }, e.html5gpl === "load" && (n.__appData.configs.disableTrackPage=!0), e.disableTrack === "y" && (n.__appData.configs.disableTrackPage=!0);
                var f = i.getValue({}, n) || r.getValue({}, n) || "";
                e.templateType === "embed" && f !== "ddit" && f !== "ddif" && (n.__appData.configs.disableTrackPage=!0), e.html5gpl === "load" && e.trackGame(e.gameParams), window.CTO = n;
                var l = e.queue;
                return window.cto = new n, l && (window.cto.queue = l), window.s_gi = window.s_gi ||!0, window.cto.runQueue(), window.cto && window.cto.runQueue && typeof window.cto.runQueue == "function" && window.cto.runQueue(), typeof window.$ == "function" ? (t.fire(n, "CTOReady"), window.$(window).trigger("CTOReady")) : typeof window.jQuery == "function" ? (t.fire(n, "CTOReady"), window.jQuery(window).trigger("CTOReady")) : t.fire(window, "CTOReady"), !0
            }
        }
    }), define("controller/events/trackLinkCTO", ["bean", "underscore", "models/API/CTO", "models/variable/utility"], function(e, t, n, r) {
        e.one(n, "trackPageComplete", function() {
            if (n.__appData.configs.disableAutoLinkTracking)
                return;
            var e = i.getLevel();
            if (!e)
                return;
            i.addListener()
        });
        var i = {
            addListener: function() {
                e.on(window, "click", function(e) {
                    var t = "", n = e.target || e.srcElement, r = e.target || e.srcElement;
                    n.nodeType == 3 && (n = n.parentNode, r = r.parentNode);
                    var s = i.getLevel();
                    s >= 3 && (n.getAttribute("src") ? t = n.getAttribute("src") : n.firstChild && n.firstChild.data != "" && typeof n.firstChild.data == "string" && (t = n.firstChild.data));
                    if (e.button == 0) {
                        var o=!0;
                        while (r) {
                            if (!r.getAttribute) {
                                r = r.parentNode;
                                continue
                            }
                            if (r.getAttribute && r.getAttribute("id") === "goc-bar") {
                                o=!1;
                                break
                            }
                            r = r.parentNode
                        }
                        if (!o)
                            return;
                        while (n) {
                            if (!n.getAttribute) {
                                n = n.parentNode;
                                continue
                            }
                            if (s >= 1 && n.nodeName && (n.getAttribute("data-linkname") || n.getAttribute("data-linkposition")))
                                return i.getDataAttr(n), !0;
                            if (s >= 2 && n.nodeName == "A" && n.getAttribute("name") && (n.getAttribute("name").indexOf("&lid")!=-1 || n.getAttribute("name").indexOf("&lpos")!=-1))
                                return i.getLinkNameAttr(n), !0;
                            if (s >= 3 && n.nodeName == "A" && n.getAttribute("href"))
                                return i.getLinkNoAttr(n, t), !0;
                            n = n.parentNode
                        }
                    }
                })
            },
            getLinkNoAttr: function(e, t) {
                var r = e.getAttribute("href"), i = t.match(/\S/g) ? t: r, s = "", o = new n;
                o.trackLink({
                    linkName: i,
                    linkPosition: s,
                    linkUrl: r,
                    linkType: 3
                })
            },
            getLinkNameAttr: function(e) {
                var t = e.getAttribute("name"), r = t.indexOf("&lid"), i = t.indexOf("&lpos"), s = "", o = "";
                r!=-1 && i!=-1 && r < i ? (s = t.substring(r + 5, i), o = t.substring(i + 6)) : r!=-1 && i==-1 ? s = t.substring(r + 5) : r!=-1 && i!=-1 && i < r ? (o = t.substring(i + 6, r), s = t.substring(r + 5)) : i!=-1 && r==-1 && (s = t.substring(i + 6));
                var u = e.getAttribute("href") ? e.getAttribute("href"): "", a = new n;
                a.trackLink({
                    linkName: s,
                    linkPosition: o,
                    linkUrl: u,
                    linkType: 2
                })
            },
            getDataAttr: function(e) {
                var t = e.getAttribute("data-linkname") ? e.getAttribute("data-linkname"): "", r = e.getAttribute("data-linkposition") ? e.getAttribute("data-linkposition"): "", i = e.getAttribute("href") ? e.getAttribute("href"): "", s = new n;
                s.trackLink({
                    linkName: t,
                    linkPosition: r,
                    linkUrl: i,
                    linkType: 1
                })
            },
            getLevel: function() {
                var e = new n, t = {};
                t[0] = ["wdgintde", "wdgintes", "wdgintuk", "wdgintpt", "wdgintit", "wdgintpl", "wdgintfr", "wdgintse", "wdginttr", "wdgintdk", "wdgintno", "wdgintfi", "wdgintbg", "wdgintro", "wdgintcz", "wdginthu", "wdgintnl", "wdgintgr", "wdgintil", "clubpenguin", "princess", "disneyvideo2", "disneygames2", "disneyshows", "disneycharacters2", "disneymovies", "disneymusic", "disneysitesearch", "disneyhomepage", "monstersuniversity2", "matterhorn"], t[1] = [], t[2] = ["disneymovierewards"];
                var i = 3, s = r.getValue({}, "account", n);
                if (typeof s == "string" && s != "")
                    for (var o = 0; o < 3; o++)
                        for (var u = 0; u < t[o].length; u++)
                            if (s.indexOf(t[o][u])!=-1)
                                return o;
                return i
            }
        }
    }), define("controller/events/cookiesReadyCTO", ["pollster", "bean", "underscore", "models/data/utility", "cookie", "tld", "controller/events/APIReadyCTO"], function(e, t, n, r, i, s) {
        var o = s.getDomain(location.hostname), u=!1;
        n.each(e.ziplineDomains, function(e) {
            e.indexOf(o)!==-1 && (u=!0)
        });
        if (location.protocol !== "http:" ||!e.corsSupported() ||!e.cookiesEnabled())
            u=!1;
        else if (!r.isSessionExpired())
            u=!1;
        else if (i.get("ctoVisitor")) {
            var a;
            try {
                a = JSON.parse(unescape(i.get("ctoVisitor")))
            } catch (f) {
                a = {}
            }
            if (n.isNumber(a.sessionCount)) {
                a.sessionCount++;
                var l = new Date((new Date).getTime() + 315569259747);
                i.set("ctoVisitor", JSON.stringify(a), {
                    expires: l,
                    path: "/",
                    domain: o
                })
            }
        }
        if (!u)
            return t.fire(window, "cookiesReadyCTO"), "";
        e.pollDomains()
    }), define("controller/events/updateCookies", ["bean", "models/data/utility"], function(e, t) {
        e.on(window, "trackPageComplete trackLinkComplete trackEventComplete trackVideoComplete trackGameComplete trackAppComplete trackPrintComplete", function() {
            t.saveCookieQueue()
        })
    }), define("controller/events/updateHitSeq", ["bean", "models/data/utility", "underscore"], function(e, t, n) {
        e.on(window, "trackPageComplete trackLinkComplete trackEventComplete trackVideoComplete trackGameComplete trackAppComplete trackPrintComplete", function() {
            var e = t.getValueFromCookie("hitCount");
            n.isNumber(e) ? e++ : e = 1, t.addKeyValueToCookieQueue("hitCount", e)
        })
    }), define("controller/events/trackBounce", ["bean", "models/API/CTO", "cookie", "models/data/utility"], function(e, t, n, r) {
        var i = r.getPollsterValue("sessionId"), s = r.getLocalValue("localSessionId");
        if (!i&&!s) {
            var o = new t;
            setTimeout(function() {
                if (o.region == "emea")
                    return;
                o.trackEvent({
                    timeOnPage: 15
                })
            }, 15e3), setTimeout(function() {
                if (o.region == "emea")
                    return;
                o.trackEvent({
                    timeOnPage: 30
                })
            }, 3e4), setTimeout(function() {
                if (o.region == "emea")
                    return;
                o.trackEvent({
                    timeOnPage: 45
                })
            }, 45e3)
        }
    }), define("controller/events/trackTimeToClick", ["bean", "models/API/CTO"], function(e, t) {
        e.on(window, "beforeTrackPage", function() {
            var e = new t;
            e.pageTimestamp = (new Date).getTime()
        }), e.on(window, "beforeTrackLink", function() {
            var e = new t;
            e.pageTimestamp && (e.timeToClick = (new Date).getTime() - e.pageTimestamp)
        }), e.on(window, "trackLinkComplete", function() {
            delete cto.pageTimestamp, delete cto.timeToClick
        })
    }), define("controller/events/trackPrint", ["bean", "models/API/CTO"], function(e, t) {
        var n = 0, r = function(e) {
            var t = (new Date).getTime();
            return t - e < 1e4?!0 : !1
        }, i = function() {
            if (r(n))
                return;
            n = (new Date).getTime();
            var e = new t;
            e.trackPrint()
        };
        if (window.matchMedia) {
            var s = window.matchMedia("print");
            if (!s.addListener)
                return;
            s.addListener(function(e) {
                e.matches && i()
            })
        }
        window.onbeforeprint = i, e.on(window, "click", function(e) {
            var n = e.target || e.srcElement;
            n.nodeType == 3 && (n = n.parentNode);
            while (n) {
                if (n.nodeName == "A") {
                    var r = n.getAttribute("href");
                    if (r && r.match && r.match(/.pdf$/)) {
                        var i = new t;
                        i.trackPrint({
                            linkUrl: r
                        })
                    }
                }
                n = n.parentNode
            }
        })
    }), define("controller/events/runQueue", ["bean", "models/API/CTO"], function(e, t) {
        e.on(window, "load", function(e) {
            var n = new t;
            n.runQueue()
        }), e.on(window, "trackPageComplete trackLinkComplete trackEventComplete trackVideoComplete trackGameComplete trackAppComplete trackPrintComplete", function() {
            var e = new t;
            e.runQueue()
        })
    }), define("controller/cookie/prevPageName", ["bean", "models/variable/common/fullPageName", "models/variable/common/prevPageName", "models/data/utility", "models/API/CTO"], function(e, t, n, r, i) {
        var s = {
            updatePreviousPage: function() {
                r.addKeyValueToLocalCookieQueue(n.id, t.getValue({}, i)), r.saveCookieQueue()
            }
        };
        return e.on(window, "trackPageComplete", function() {
            s.updatePreviousPage()
        }), s
    }), define("controller/vendor/Nielsen", ["underscore", "bean", "models/variable/utility", "models/variable/video/videoStart", "models/variable/video/videoComplete", "models/API/CTO"], function(e, t, n, r, i, s) {
        t.on(window, "trackPageNielsen", function() {
            u.init(), o.trackPageCTO(), t.fire(window, "trackPageNielsenComplete")
        }), t.on(window, "trackVideoNielsen", function(e) {
            o.trackVideo(e), t.fire(window, "trackVideoNielsenComplete")
        });
        var o = {
            trackPageCTO: function() {
                u._dolWANielsenPageCheck() && this.nielsenPageTrack()
            },
            trackVideo: function(e) {
                var t=!1, n=!1;
                r.getValue({
                    videoEvent: e
                }, s) ? t=!0 : i.getValue({
                    videoEvent: e
                }, s) && (n=!0);
                if (!n&&!t)
                    return;
                var o = new s, a = {
                    clientid: "us-902424",
                    vcid: u._dolWANielsenVideoCheck(e),
                    sfcode: "us",
                    cisuffix: "",
                    prod: "sc"
                };
                if (typeof gg == "undefined") {
                    o.trackError({
                        errorCode: 1,
                        errorMessage: "Nielsen is not tracking.",
                        errorType: "trackVideo"
                    });
                    return 
                }
                var f = new gg;
                f.ggInitialize(a, 0, !1, !0), f.ggPM(3, e.ASSETID, "content", "<title>" + e.ASSETNAME + "</title>" + "<censuscategory>" + o.seriesCode + "</censuscategory>" + "<length>" + e.VIDLEN + "</length>", "1"), t ? f.ggPM(5, e.KDPDAT_PLAYHEAD) : n && f.ggPM(7, e.KDPDAT_PLAYHEAD)
            },
            nielsenPageTrack: function() {
                var e = new Image;
                e.src = ["//secure-us.imrworldwide.com/cgi-bin/m?ci=us-505916h&cg=0&cc=1&si=", escape(window.location.href), "&rp=", escape(document.referrer), "&ts=compact&rnd=", (new Date).getTime()].join("")
            }
        }, u = {
            init: function() {
                if (!!this.hasInit)
                    return;
                this.hasInit=!0;
                var e = document.createElement("script");
                e.type = "text/javascript", e.async=!0, e.src = (document.location.protocol == "https:" ? "https://" : "http://") + "secure-us.imrworldwide.com/novms/js/2/ggcmb390.js", document.getElementsByTagName("body")[0].appendChild(e)
            },
            _dolWANielsenVideoCheck: function(e) {
                var t = n.getValue({
                    videoEvent: e
                }, "account", s), r = n.getValue({
                    videoEvent: e
                }, "comscorekw", s);
                switch (r) {
                case"disneychannel":
                    return "c06";
                case"disneyxd":
                    return "c05";
                case"disneyjunior":
                    return "c03";
                case"disneyvideo":
                    return "c04";
                default:
                }
                return t.indexOf("dcndisneychannel")!=-1 ? "c06" : document.URL.indexOf("http://disneychannel.disney.com") == 0 ? "c06" : document.URL.indexOf("http://disney.go.com/games/#/games/disneych") == 0 ? "c06" : document.URL.indexOf("http://disney.go.com/videos/#/videos/tvshows") == 0 ? "c06" : t.indexOf("disneyxd")!=-1 ? "c05" : document.URL.indexOf("http://disneyxd.disney.com") == 0 ? "c05" : document.URL.indexOf("http://disney.go.com/games/#/games/disneyxd") == 0 ? "c05" : t.indexOf("disneyjunior")!=-1 ? "c03" : document.URL.indexOf("http://disneyjunior.disney.com") == 0 ? "c03" : document.URL.indexOf("http://disney.go.com/disneyjunior") == 0 ? "c03" : t.indexOf("disneyvideo2")!=-1 ? "c04" : document.URL.indexOf("http://video.disney.com") == 0 ? "c04" : document.URL.indexOf("http://disney.go.com/videos") == 0 ? "c04" : document.URL.indexOf("http://disneydvd.disney.go.com") == 0 ? "c02" : document.URL.indexOf("http://disney.com") == 0 ? "c01" : ""
            },
            _dolWANielsenPageCheck: function() {
                var e = n.getValue({}, "account", s);
                return e.indexOf("clubpenguin")==-1?!0 : !1
            }
        }
    }), define("controller/vendor/SZM", ["bean", "models/API/CTO", "url"], function(e, t, n) {
        e.on(window, "trackPageSZM", function() {
            var e = new t;
            if (e.intBreadcrumbs === "tv-dc-app" || document.referrer.indexOf("file://")!==-1 || e.country !== "de")
                return;
            s.init()
        });
        var r = {
            one: {
                "disneychannel.de/tv-programm": {
                    CP: "07_02_TV-DC"
                },
                "filme.disney.de/kino": {
                    CP: "06_02_Kino_CP"
                },
                "filme.disney.de/dvd&blu-ray": {
                    CP: "06_03_Kino_DVD"
                },
                "filme.disney.de/oliver-und-co": {
                    CP: "06_02_Kino_CP"
                },
                "filme.disney.de/lone-ranger": {
                    CP: "06_02_Kino_CP"
                }
            },
            multi: {
                "parks.disney.de/": {
                    CP: "10_01_Parks"
                },
                "live.disney.de/": {
                    CP: "11_01_live"
                },
                "tv.disney.de/": {
                    CP: "07_01_TV_LP"
                },
                "video.disney.de/": {
                    CP: "03_02_VideoCP"
                },
                "shows.disneychannel.de/": {
                    CP: "07_02_TV-DC"
                },
                "disneychannel.de/livestream": {
                    CP: "07_05_TV-DCSimulcast"
                },
                "disneychannel.de/mediathek": {
                    CP: "07_05_TV-DCCatchup"
                },
                "disneychannel.de/watch/": {
                    CP: "07_05_TV-DCCatchup"
                },
                "gewinnspiele.disney.de/": {
                    CP: "05_01_GWS_LP"
                },
                "spiele.disney.de/": {
                    CP: "02_02_GamesCP"
                },
                "filme.disney.de/": {
                    CP: "06_02_Kino_CP"
                },
                "cinemagic.disney.de/": {
                    CP: "07_04_TV-DCM"
                },
                "disneyxd.disney.de/": {
                    CP: "07_03_TV-DXD"
                },
                "prinzessinnen.disney.de/": {
                    CP: "08_01_Favo-Princess"
                },
                "winnie-puuh.disney.de/": {
                    CP: "08_02_Favo-Winniepuuh"
                },
                "micky.disney.de/": {
                    CP: "08_03_Favo-Mickey"
                },
                "cars.disney.de/": {
                    CP: "08_04_Favo-Cars"
                },
                "suche.disney.de": {
                    CP: "13_01_Suche"
                },
                "disney.de/": {
                    CP: "01_01_Home"
                },
                "disneychannel.de/": {
                    CP: "07_02_TV-DC_LP"
                }
            }
        }, i = {
            trackPage: function() {
                var e = n("hostname") + n("path"), t = r.one[e] && r.one[e].CP;
                if (!t)
                    for (var i in r.multi)
                        if (r.multi.hasOwnProperty(i) && e.indexOf(i)!==-1) {
                            t = r.multi[i].CP;
                            break
                        }
                t = t || "14_01_event";
                var s = {
                    st: "disney",
                    mg: "yes",
                    cp: t,
                    sv: "i2"
                };
                iom.c(s, 1)
            }
        }, s = {
            init: function() {
                this.scriptTag({
                    src: "https://script.ioam.de/iam.js"
                }, function() {
                    i.trackPage()
                })
            },
            scriptTag: function(e, t) {
                var n = document.createElement("script");
                n.type = "text/javascript", n.src = e.src, n.async=!0, n.onreadystatechange = n.onload = function() {
                    var e = n.readyState;
                    !t.done && (!e || /loaded|complete/.test(e)) && (t.done=!0, t())
                }, document.body.appendChild(n)
            }
        }
    }), define("controller/vendor/Tealium", ["underscore", "bean", "models/API/CTO"], function(e, t, n) {
        t.on(window, "trackPageTealium", function() {
            var e = new n;
            if (e.region === "emea") {
                var r = document.getElementsByTagName("head")[0], i = document.createElement("script");
                i.type = "text/javascript", i.src = "//analytics.disneyinternational.com/tealium/utag.js", r.appendChild(i), t.fire(window, "trackPageTealiumComplete")
            }
        })
    }), define("controller/vendor/allVendors", ["controller/vendor/CTO", "controller/vendor/Omni", "controller/vendor/ComScore", "controller/vendor/Nielsen", "controller/vendor/ResearchNowAPI", "controller/vendor/SZM", "controller/vendor/Tealium"], function() {
        return arguments
    }), define("models/data/Config", ["bean", "controller/events/APIReadyCTO"], function(e) {
        e.fire(window, "configLoadedCTO", {
            disableAutoLinkTracking: !1,
            trackedVendors: ["CTO", "Nielsen", "Omniture", "ComScore", "ResearchNow", "Tealium"]
        })
    }), define("models/data/VariableMap", ["bean", "controller/events/APIReadyCTO"], function(e) {
        var t = {
            tP: {
                cto: {
                    mappings: {
                        abTest: ["abTest"],
                        account: ["accnt"],
                        adCampaign: ["adCmp"],
                        adKeywords: ["adKwd"],
                        adPageName: ["adPgNm"],
                        adSizeList: ["adSzLst"],
                        app: ["app"],
                        arPageName: ["arPgNm"],
                        author: ["author"],
                        AUTOTRANSITION: ["AUTOTRANSITION"],
                        bh: ["bh"],
                        biReserved: ["biReserved"],
                        "unused-time": ["biReserved"],
                        breadcrumbs: ["brdcrums"],
                        siteSection: ["brdcrums"],
                        buCode: ["buCd"],
                        unit: ["buCd"],
                        buId: ["buId"],
                        bw: ["bw"],
                        categoryCode: ["categoryCd"],
                        category: ["categoryCd"],
                        cf: ["cf"],
                        characterCode: ["charCd"],
                        characterId: ["charId"],
                        cod: ["cod"],
                        contentId: ["contentId"],
                        contentTag: ["contentTag"],
                        contentType: ["contentTp"],
                        COREVIDEOID: ["COREVIDEOID"],
                        dealCategory: ["dealCtgry"],
                        dealType: ["dealTp"],
                        dolWAVersion: ["dolWAVer"],
                        engagementMeta: ["engmtMt"],
                        engagementType: ["engmtTp"],
                        link_engmtTp: ["engmtTp"],
                        error: ["error"],
                        eventData: ["evntData"],
                        familyPartner: ["fmlPrtnr"],
                        familyTentPole: ["fmlTentPole"],
                        flashVersion: ["fsv"],
                        fullPageName: ["fullPgNm"],
                        galleryPageName: ["glPgNm"],
                        genreCode: ["gnrCd"],
                        genre: ["gnrCd"],
                        intCategoryCode: ["intCategoryCode"],
                        internalPromotion: ["intTrckCd"],
                        promoClicks: ["intTrckCd"],
                        intFullPageName: ["intFullPageName"],
                        jf: ["jf"],
                        jsv: ["jsv"],
                        lan: ["lan"],
                        leadType: ["leadTp"],
                        localSessionId: ["lSessId"],
                        localVisitorId: ["lVisId"],
                        membershipTypeCode: ["mmbrTpCd"],
                        membershipType: ["mmbrTpCd"],
                        mkwid: ["mkwTrckCd"],
                        newPageName: ["newPageName"],
                        omniId: ["omniId"],
                        optinType: ["optinLst"],
                        os: ["os"],
                        pageId: ["pgId"],
                        pageName: ["pgNm"],
                        "unused-shortPageName": ["pgNm"],
                        pageTypeCode: ["pgTpCd"],
                        pageType: ["pgTpCd"],
                        pageViewId: ["pgVwId"],
                        personalization: ["personalization"],
                        pgTtl: ["pgTtl"],
                        PLAYLISTID: ["PLAYLISTID"],
                        plgId: ["plgId"],
                        postDate: ["pstDt"],
                        prevPageName: ["prevPgNm"],
                        products: ["prods"],
                        program: ["program"],
                        propertyCode: ["propCd"],
                        ipCode: ["propCd"],
                        propertyId: ["propId"],
                        purchaseId: ["purchId"],
                        referrer: ["refUrl"],
                        regAge: ["regAge"],
                        regFlowType: ["regFlowTp"],
                        registrationStatus: ["regStatus"],
                        regMilestone: ["regMlstn"],
                        res: ["res"],
                        region: ["region"],
                        retailer: ["retailer"],
                        searchFlow: ["srchTypeCd"],
                        searchType: ["srchTypeCd"],
                        searchTypeCode: ["srchTypeCd"],
                        searchPhrase: ["intSearchKwd"],
                        internalSearchPhrase: ["intSearchKwd"],
                        searchPhraseInput: ["truSearchKwd"],
                        trueSearchPhrase: ["truSearchKwd"],
                        searchRefinement: ["srchRfn"],
                        searchResultsCount: ["numSearchRslts"],
                        numSearchResults: ["numSearchRslts"],
                        sem_cmp: ["semTrckCd"],
                        seriesCode: ["seriesCd"],
                        property: ["seriesCd"],
                        seriesId: ["seriesId"],
                        sessionFirstPage: ["sFP"],
                        sessionFirstRefUrl: ["sFRU"],
                        sessionFirstUrl: ["sFU"],
                        sessionHitSeq: ["sHS"],
                        sessionId: ["sessionId"],
                        siteCode: ["siteCd"],
                        site: ["siteCd"],
                        siteSectionLevel1: ["siteSectionLevel1"],
                        siteSectionLevel2: ["siteSectionLevel2"],
                        siteSectionLevel3: ["siteSectionLevel3"],
                        siteSectionLevel4: ["siteSectionLevel4"],
                        siteSectionLevelN: ["siteSectionLevelN"],
                        sponsor: ["sponsor"],
                        swid: ["swid"],
                        t: ["t"],
                        templateType: ["templateTp"],
                        timeParting: ["tParting"],
                        trackingCode: ["extTrckCd"],
                        cmp: ["extTrckCd"],
                        trackType: ["trckTp"],
                        ugcType: ["ugcTp"],
                        url: ["url"],
                        urlDomain: ["urlDom"],
                        urlFullDomain: ["urlFDom"],
                        urlFullDomain1: ["urlFDom1"],
                        uuid: ["uuid"],
                        vendorLst: ["vendorLst"],
                        version: ["version"],
                        visitorFirstPage: ["vFP"],
                        visitorFirstRefUrl: ["vFRU"],
                        visitorFirstUrl: ["vFU"],
                        visitorId: ["visitorId"],
                        visitorSesSeq: ["vSS"]
                    },
                    events: {
                        cmpClickThrough: ["e52"],
                        "unused-pastEvent": ["e52"],
                        engagementType: ["e6"],
                        link_engmtTp: ["e6"],
                        error: ["e100"],
                        instantSearch: ["e96"],
                        instantSearchResultClick: ["e95"],
                        internalPromotionEvent: ["e7"],
                        leadType: ["e15"],
                        login: ["e39"],
                        mkwid: ["e43"],
                        personalization: ["e5"],
                        regAttempt: ["e25"],
                        registration: ["e4"],
                        regMilestone: ["e26"],
                        searchEventAttempt: ["e27"],
                        searchAttempt: ["e27"],
                        searchEventAutocomplete: ["e99"],
                        searchPhraseEvent: ["e2"],
                        trackingCodeEvent: ["e51"],
                        ugcType: ["e36"]
                    }
                },
                omni: {
                    mappings: {
                        abTest: ["prop19", "eVar24"],
                        account: ["prop70"],
                        adCampaign: ["prop43"],
                        adKeywords: ["prop53"],
                        adPageName: ["prop66", "eVar66"],
                        adSizeList: ["prop67"],
                        arPageName: ["prop47", "eVar40"],
                        author: ["prop41"],
                        biReserved: ["prop71"],
                        "unused-time": ["prop71"],
                        brandSegment: ["prop34"],
                        hcsCV: ["prop34"],
                        breadcrumbs: ["hier1"],
                        siteSection: ["hier1"],
                        buCode: ["prop15"],
                        unit: ["prop15"],
                        categoryCode: ["prop14"],
                        category: ["prop14"],
                        characterCode: ["prop58"],
                        contentId: ["prop45"],
                        contentTag: ["prop44"],
                        contentType: ["prop4"],
                        dealCategory: ["eVar27"],
                        dealType: ["eVar26"],
                        dolWAVersion: ["prop72"],
                        engagementMeta: ["eVar58"],
                        engagementType: ["eVar8"],
                        link_engmtTp: ["eVar8"],
                        familyPartner: ["prop24"],
                        familyTentPole: ["prop26"],
                        firstCampaign: ["eVar28"],
                        flashVersion: ["prop37"],
                        fullPageName: ["pageName"],
                        galleryPageName: ["prop55"],
                        genreCode: ["prop25", "eVar25"],
                        genre: ["prop25", "eVar25"],
                        internalPromotion: ["eVar3"],
                        promoClicks: ["eVar3"],
                        leadType: ["eVar23"],
                        mkwid: ["eVar42"],
                        optinType: ["prop35"],
                        pageName: ["prop64", "eVar64"],
                        "unused-shortPageName": ["prop64", "eVar64"],
                        "pageName-internalPromotion": ["eVar50"],
                        "pageName-trackingCode": ["eVar51"],
                        pageTypeCode: ["pageType"],
                        pageType: ["pageType"],
                        pageViewId: ["prop49"],
                        personalization: ["eVar6"],
                        postDate: ["prop42"],
                        previousPageSearch: ["eVar20"],
                        prevPageName: ["prop12"],
                        products: ["products"],
                        program: ["prop48", "eVar74"],
                        propertyCode: ["prop59"],
                        ipCode: ["prop59"],
                        purchaseId: ["purchaseID"],
                        referrer: ["prop68", "eVar68"],
                        regAge: ["eVar43"],
                        regFlowType: ["eVar45"],
                        registrationStatus: ["prop29"],
                        regMilestone: ["eVar44"],
                        retailer: ["prop57"],
                        searchEvent: ["prop50", "eVar30"],
                        searchAutocomplete: ["prop50", "eVar30"],
                        searchAutoComplete: ["prop50", "eVar30"],
                        searchFlow: ["prop18", "eVar5"],
                        searchType: ["prop18", "eVar5"],
                        searchTypeCode: ["prop18", "eVar5"],
                        searchPhrase: ["prop7", "eVar4"],
                        internalSearchPhrase: ["prop7", "eVar4"],
                        searchPhraseInput: ["eVar31"],
                        trueSearchPhrase: ["eVar31"],
                        searchRefinement: ["prop33"],
                        searchResultsCount: ["prop8"],
                        numSearchResults: ["prop8"],
                        sem_cmp: ["eVar36"],
                        seriesCode: ["prop11", "eVar9"],
                        property: ["prop11", "eVar9"],
                        server: ["server"],
                        sessionId: ["prop75"],
                        siteCode: ["prop1", "eVar10"],
                        site: ["prop1", "eVar10"],
                        siteLevel2: ["prop5"],
                        siteLevel3: ["prop6"],
                        socialAuthors: ["eVar54"],
                        socialPlatforms: ["eVar53"],
                        sponsor: ["prop56"],
                        swid: ["prop2", "eVar73"],
                        templateType: ["prop65", "eVar55"],
                        timeParting: ["eVar1"],
                        timePartingCodes: ["prop10"],
                        trackingCode: ["campaign"],
                        cmp: ["campaign"],
                        trackType: ["prop69"],
                        ugcType: ["prop54", "eVar12"],
                        universalPathing: ["prop39"],
                        url: ["prop28", "eVar65"],
                        urlDomain: ["prop61", "eVar61"],
                        urlFullDomain: ["prop62", "eVar62"],
                        urlFullDomain1: ["prop63", "eVar63"],
                        visitorId: ["prop74"]
                    },
                    EMEAmappings: {
                        abTest: ["prop19", "eVar24"],
                        cmsId: ["prop51"],
                        contentType: ["prop4", "eVar17"],
                        country: ["prop31"],
                        firstCampaign: ["eVar28"],
                        intCategoryCode: ["prop14", "eVar15"],
                        internalPromotion: ["eVar3"],
                        promoClicks: ["eVar3"],
                        intFullPageName: ["pageName", "eVar16"],
                        newPageName: ["eVar18"],
                        prevPageName: ["prop12"],
                        registrationStatus: ["prop29"],
                        region: ["prop30"],
                        searchFlow: ["prop18", "eVar5"],
                        searchType: ["prop18", "eVar5"],
                        searchTypeCode: ["prop18", "eVar5"],
                        searchPhrase: ["prop7", "eVar4"],
                        internalSearchPhrase: ["prop7", "eVar4"],
                        searchRefinement: ["prop33"],
                        searchResultsCount: ["prop8"],
                        numSearchResults: ["prop8"],
                        seriesCode: ["prop11", "eVar9"],
                        property: ["prop11", "eVar9"],
                        siteCode: ["prop1", "eVar10"],
                        site: ["prop1", "eVar10"],
                        siteLevel2: ["prop5"],
                        siteLevel3: ["prop6"],
                        siteSectionLevel1: ["prop41"],
                        siteSectionLevel2: ["prop42"],
                        siteSectionLevel3: ["prop43", "hier1"],
                        siteSectionLevel4: ["prop44"],
                        siteSectionLevelN: ["prop45"],
                        siteSectionPage: ["eVar18"],
                        swid: ["prop2"],
                        timeParting: ["eVar1"],
                        timePartingCodes: ["prop10"],
                        trackingCode: ["campaign"],
                        cmp: ["campaign"],
                        ugcType: ["eVar12"],
                        url: ["prop46"]
                    },
                    EMEAevents: {
                        checkoutCart: ["scCheckout"],
                        customProductView: ["event22"],
                        internalPromotionEvent: ["event7"],
                        login: ["event39"],
                        registration: ["event4"],
                        searchPhrase: ["event2"],
                        internalSearchPhrase: ["event2"],
                        trackingCodeEvent: ["event51"],
                        ugcType: ["event36"]
                    },
                    events: {
                        cmpClickThrough: ["event52"],
                        "unused-pastEvent": ["event52"],
                        engagementType: ["event6"],
                        link_engmtTp: ["event6"],
                        error: ["event100"],
                        instantSearch: ["event96"],
                        instantSearchResultClick: ["event95"],
                        internalPromotionEvent: ["event7"],
                        leadType: ["event15"],
                        login: ["event39"],
                        mkwid: ["event43"],
                        personalization: ["event5"],
                        regAttempt: ["event25"],
                        registration: ["event4"],
                        regMilestone: ["event26"],
                        searchEventAttempt: ["event27"],
                        searchAttempt: ["event27"],
                        searchEventAutocomplete: ["event99"],
                        searchPhraseEvent: ["event2"],
                        trackingCodeEvent: ["event51"],
                        ugcType: ["event36"]
                    }
                }
            },
            tL: {
                cto: {
                    mappings: {
                        abTest: ["abTest"],
                        account: ["accnt"],
                        adCampaign: ["adCmp"],
                        adKeywords: ["adKwd"],
                        adPageName: ["adPgNm"],
                        adSizeList: ["adSzLst"],
                        app: ["app"],
                        arPageName: ["arPgNm"],
                        author: ["author"],
                        autoLinkTracking: ["autoLinkTracking"],
                        AUTOTRANSITION: ["AUTOTRANSITION"],
                        biReserved: ["biReserved"],
                        "unused-time": ["biReserved"],
                        breadcrumbs: ["brdcrums"],
                        siteSection: ["brdcrums"],
                        buCode: ["buCd"],
                        unit: ["buCd"],
                        buId: ["buId"],
                        categoryCode: ["categoryCd"],
                        category: ["categoryCd"],
                        cf: ["cf"],
                        characterCode: ["charCd"],
                        characterId: ["charId"],
                        clickX: ["cX"],
                        clickY: ["cY"],
                        cod: ["cod"],
                        contentId: ["contentId"],
                        contentTag: ["contentTag"],
                        contentType: ["contentTp"],
                        COREVIDEOID: ["COREVIDEOID"],
                        dealCategory: ["dealCtgry"],
                        dealType: ["dealTp"],
                        dolWAVersion: ["dolWAVer"],
                        engagementType: ["engmtTp"],
                        link_engmtTp: ["engmtTp"],
                        error: ["error"],
                        eventData: ["evntData"],
                        familyPartner: ["fmlPrtnr"],
                        familyTentPole: ["fmlTentPole"],
                        fullPageName: ["fullPgNm"],
                        galleryPageName: ["glPgNm"],
                        genreCode: ["gnrCd"],
                        genre: ["gnrCd"],
                        intFullPageName: ["intFullPageName"],
                        intPageNameLinkId: ["intPageNameLinkId"],
                        jf: ["jf"],
                        linkModule: ["linkMod"],
                        linkName: ["linkNm"],
                        linkId: ["linkNm"],
                        linkPosition: ["linkPos"],
                        linkType: ["linkTp"],
                        linkUrl: ["linkUrl"],
                        localSessionId: ["lSessId"],
                        localVisitorId: ["lVisId"],
                        membershipTypeCode: ["mmbrTpCd"],
                        membershipType: ["mmbrTpCd"],
                        mkwid: ["mkwTrckCd"],
                        optinType: ["optinLst"],
                        pageId: ["pgId"],
                        pageTypeCode: ["pgTpCd"],
                        pageType: ["pgTpCd"],
                        pageViewId: ["pgVwId"],
                        personalization: ["personalization"],
                        PLAYLISTID: ["PLAYLISTID"],
                        plgId: ["plgId"],
                        postDate: ["pstDt"],
                        prevPageName: ["prevPgNm"],
                        products: ["prods"],
                        program: ["program"],
                        propertyCode: ["propCd"],
                        ipCode: ["propCd"],
                        propertyId: ["propId"],
                        purchaseId: ["purchId"],
                        referrer: ["refUrl"],
                        regAge: ["regAge"],
                        regFlowType: ["regFlowTp"],
                        registrationStatus: ["regStatus"],
                        regMilestone: ["regMlstn"],
                        res: ["res"],
                        region: ["region"],
                        searchEventResultClicks: ["srchResClicks"],
                        searchResultClicks: ["srchResClicks"],
                        searchFlow: ["srchTypeCd"],
                        searchType: ["srchTypeCd"],
                        searchTypeCode: ["srchTypeCd"],
                        searchPhrase: ["intSearchKwd"],
                        internalSearchPhrase: ["intSearchKwd"],
                        searchPhraseInput: ["truSearchKwd"],
                        trueSearchPhrase: ["truSearchKwd"],
                        searchRefinement: ["srchRfn"],
                        searchResultsCount: ["numSearchRslts"],
                        numSearchResults: ["numSearchRslts"],
                        sem_cmp: ["semTrckCd"],
                        seriesCode: ["seriesCd"],
                        property: ["seriesCd"],
                        seriesId: ["seriesId"],
                        sessionFirstPage: ["sFP"],
                        sessionFirstRefUrl: ["sFRU"],
                        sessionFirstUrl: ["sFU"],
                        sessionHitSeq: ["sHS"],
                        sessionId: ["sessionId"],
                        siteCode: ["siteCd"],
                        site: ["siteCd"],
                        sponsor: ["sponsor"],
                        swid: ["swid"],
                        templateType: ["templateTp"],
                        timeParting: ["tParting"],
                        timeToClick: ["timeToClick"],
                        trackType: ["trckTp"],
                        ugcType: ["ugcTp"],
                        url: ["url"],
                        urlDomain: ["urlDom"],
                        urlFullDomain: ["urlFDom"],
                        urlFullDomain1: ["urlFDom1"],
                        uuid: ["uuid"],
                        vendorLst: ["vendorLst"],
                        version: ["version"],
                        visitorFirstPage: ["vFP"],
                        visitorFirstRefUrl: ["vFRU"],
                        visitorFirstUrl: ["vFU"],
                        visitorId: ["visitorId"],
                        visitorSesSeq: ["vSS"]
                    },
                    events: {
                        buy: ["e16"],
                        buy_: ["e16"],
                        "purchase/": ["e16"],
                        cmpClickThrough: ["e52"],
                        "unused-pastEvent": ["e52"],
                        download: ["e19"],
                        download_: ["e19"],
                        engagementType: ["e6"],
                        link_engmtTp: ["e6"],
                        error: ["e100"],
                        instantSearch: ["e96"],
                        instantSearchResultClick: ["e95"],
                        internalPromotionEvent: ["e7"],
                        linkClicks: ["e12"],
                        login: ["e39"],
                        mkwid: ["e43"],
                        personalization: ["e5"],
                        print: ["e14"],
                        printable: ["e14"],
                        regAttempt: ["e25"],
                        registration: ["e4"],
                        regMilestone: ["e26"],
                        searchEventAttempt: ["e27"],
                        searchAttempt: ["e27"],
                        searchEventAutocomplete: ["e99"],
                        searchEventClose: ["e98"],
                        searchEventResultClicks: ["e41"],
                        searchResultClicks: ["e41"],
                        searchPhraseEvent: ["e2"],
                        signup: ["e18"],
                        signup_: ["e18"],
                        social: ["e17"],
                        social_: ["e17"],
                        trackingCodeEvent: ["e51"],
                        ugcType: ["e36"]
                    }
                },
                omni: {
                    mappings: {
                        abTest: ["prop19", "eVar24"],
                        account: ["prop70"],
                        arPageName: ["prop47", "eVar40"],
                        biReserved: ["prop71"],
                        "unused-time": ["prop71"],
                        brandSegment: ["prop34"],
                        hcsCV: ["prop34"],
                        dolWAVersion: ["prop72"],
                        engagementType: ["eVar8"],
                        link_engmtTp: ["eVar8"],
                        fullPageName: ["pageName"],
                        genreCode: ["prop25", "eVar25"],
                        genre: ["prop25", "eVar25"],
                        linkModule: ["eVar52"],
                        linkName: ["prop9"],
                        linkId: ["prop9"],
                        linkPosition: ["prop13"],
                        linkUrl: ["eVar70"],
                        optinType: ["prop35"],
                        "pageName-linkPosition": ["eVar49"],
                        pageViewId: ["prop49"],
                        personalization: ["eVar6"],
                        prevPageName: ["prop12"],
                        products: ["products"],
                        program: ["prop48", "eVar74"],
                        purchaseId: ["purchaseID"],
                        referrer: ["prop68", "eVar68"],
                        retailerClick: ["prop73"],
                        searchEvent: ["prop50", "eVar30"],
                        searchAutocomplete: ["prop50", "eVar30"],
                        searchAutoComplete: ["prop50", "eVar30"],
                        searchFlow: ["prop18", "eVar5"],
                        searchType: ["prop18", "eVar5"],
                        searchTypeCode: ["prop18", "eVar5"],
                        searchPhrase: ["prop7", "eVar4"],
                        internalSearchPhrase: ["prop7", "eVar4"],
                        searchPhraseInput: ["eVar31"],
                        trueSearchPhrase: ["eVar31"],
                        searchRefinement: ["prop33"],
                        searchResultsCount: ["prop8"],
                        numSearchResults: ["prop8"],
                        server: ["server"],
                        sessionId: ["prop75"],
                        swid: ["prop2", "eVar73"],
                        trackType: ["prop69"],
                        universalPathing: ["prop39"],
                        url: ["prop28", "eVar65"],
                        urlDomain: ["prop61", "eVar61"],
                        urlFullDomain: ["prop62", "eVar62"],
                        urlFullDomain1: ["prop63", "eVar63"],
                        visitorId: ["prop74"]
                    },
                    EMEAmappings: {
                        abTest: ["prop19", "eVar24"],
                        cmsId: ["prop51"],
                        country: ["prop31"],
                        intFullPageName: ["pageName", "eVar16"],
                        intPageNameLinkId: ["eVar21"],
                        linkName: ["prop9"],
                        linkId: ["prop9"],
                        prevPageName: ["prop12"],
                        searchFlow: ["prop18", "eVar5"],
                        searchType: ["prop18", "eVar5"],
                        searchTypeCode: ["prop18", "eVar5"],
                        searchPhrase: ["prop7", "eVar4"],
                        internalSearchPhrase: ["prop7", "eVar4"],
                        searchRefinement: ["prop33"],
                        searchResultsCount: ["prop8"],
                        numSearchResults: ["prop8"],
                        swid: ["prop2"],
                        url: ["prop46"]
                    },
                    events: {
                        buy: ["event16"],
                        buy_: ["event16"],
                        "purchase/": ["event16"],
                        download: ["event19"],
                        download_: ["event19"],
                        engagementType: ["event6"],
                        link_engmtTp: ["event6"],
                        error: ["event100"],
                        instantSearch: ["event96"],
                        instantSearchResultClick: ["event95"],
                        linkClicks: ["event12"],
                        personalization: ["event5"],
                        print: ["event14"],
                        printable: ["event14"],
                        searchEventAttempt: ["event27"],
                        searchAttempt: ["event27"],
                        searchEventAutocomplete: ["event99"],
                        searchEventClose: ["event98"],
                        searchEventResultClicks: ["event41"],
                        searchResultClicks: ["event41"],
                        searchPhraseEvent: ["event2"],
                        signup: ["event18"],
                        signup_: ["event18"],
                        social: ["event17"],
                        social_: ["event17"]
                    },
                    EMEAevents: {
                        searchEventResultClicks: ["event41"],
                        searchResultClicks: ["event41"],
                        searchPhrase: ["event2"],
                        internalSearchPhrase: ["event2"]
                    }
                }
            },
            tE: {
                cto: {
                    mappings: {
                        abTest: ["abTest"],
                        account: ["accnt"],
                        adCampaign: ["adCmp"],
                        adKeywords: ["adKwd"],
                        adPageName: ["adPgNm"],
                        adSizeList: ["adSzLst"],
                        app: ["app"],
                        arPageName: ["arPgNm"],
                        author: ["author"],
                        AUTOTRANSITION: ["AUTOTRANSITION"],
                        biReserved: ["biReserved"],
                        "unused-time": ["biReserved"],
                        breadcrumbs: ["brdcrums"],
                        siteSection: ["brdcrums"],
                        buCode: ["buCd"],
                        unit: ["buCd"],
                        buId: ["buId"],
                        categoryCode: ["categoryCd"],
                        category: ["categoryCd"],
                        cf: ["cf"],
                        characterCode: ["charCd"],
                        characterId: ["charId"],
                        cod: ["cod"],
                        contentId: ["contentId"],
                        contentTag: ["contentTag"],
                        contentType: ["contentTp"],
                        COREVIDEOID: ["COREVIDEOID"],
                        dealCategory: ["dealCtgry"],
                        dealType: ["dealTp"],
                        dolWAVersion: ["dolWAVer"],
                        engagementMeta: ["engmtMt"],
                        engagementType: ["engmtTp"],
                        link_engmtTp: ["engmtTp"],
                        error: ["error"],
                        eventData: ["evntData"],
                        familyPartner: ["fmlPrtnr"],
                        familyTentPole: ["fmlTentPole"],
                        fullPageName: ["fullPgNm"],
                        galleryPageName: ["glPgNm"],
                        genreCode: ["gnrCd"],
                        genre: ["gnrCd"],
                        intFullPageName: ["intFullPageName"],
                        jf: ["jf"],
                        localSessionId: ["lSessId"],
                        localVisitorId: ["lVisId"],
                        membershipTypeCode: ["mmbrTpCd"],
                        membershipType: ["mmbrTpCd"],
                        mkwid: ["mkwTrckCd"],
                        optinType: ["optinLst"],
                        pageId: ["pgId"],
                        pageTypeCode: ["pgTpCd"],
                        pageType: ["pgTpCd"],
                        pageViewId: ["pgVwId"],
                        personalization: ["personalization"],
                        PLAYLISTID: ["PLAYLISTID"],
                        plgId: ["plgId"],
                        postDate: ["pstDt"],
                        prevPageName: ["prevPgNm"],
                        products: ["prods"],
                        program: ["program"],
                        propertyCode: ["propCd"],
                        ipCode: ["propCd"],
                        propertyId: ["propId"],
                        purchase: ["purchase"],
                        familyTravelBudget: ["purchase"],
                        familyTravelLength: ["purchase"],
                        purchaseId: ["purchId"],
                        referrer: ["refUrl"],
                        regAge: ["regAge"],
                        regFlowType: ["regFlowTp"],
                        registrationStatus: ["regStatus"],
                        regMilestone: ["regMlstn"],
                        res: ["res"],
                        region: ["region"],
                        searchFlow: ["srchTypeCd"],
                        searchType: ["srchTypeCd"],
                        searchTypeCode: ["srchTypeCd"],
                        searchPhrase: ["intSearchKwd"],
                        internalSearchPhrase: ["intSearchKwd"],
                        searchPhraseInput: ["truSearchKwd"],
                        trueSearchPhrase: ["truSearchKwd"],
                        searchRefinement: ["srchRfn"],
                        searchResultsCount: ["numSearchRslts"],
                        numSearchResults: ["numSearchRslts"],
                        sem_cmp: ["semTrckCd"],
                        seriesCode: ["seriesCd"],
                        property: ["seriesCd"],
                        seriesId: ["seriesId"],
                        sessionFirstPage: ["sFP"],
                        sessionFirstRefUrl: ["sFRU"],
                        sessionFirstUrl: ["sFU"],
                        sessionHitSeq: ["sHS"],
                        sessionId: ["sessionId"],
                        siteCode: ["siteCd"],
                        site: ["siteCd"],
                        sponsor: ["sponsor"],
                        swid: ["swid"],
                        templateType: ["templateTp"],
                        timeOnPage: ["timeOnPage"],
                        timeParting: ["tParting"],
                        trackType: ["trckTp"],
                        ugcType: ["ugcTp"],
                        uniqueOptin: ["unqOptIn"],
                        url: ["url"],
                        urlDomain: ["urlDom"],
                        urlFullDomain: ["urlFDom"],
                        urlFullDomain1: ["urlFDom1"],
                        userReview: ["usrRvw"],
                        "unused-VID|PageName": ["usrRvw"],
                        uuid: ["uuid"],
                        vendorLst: ["vendorLst"],
                        version: ["version"],
                        visitorFirstPage: ["vFP"],
                        visitorFirstRefUrl: ["vFRU"],
                        visitorFirstUrl: ["vFU"],
                        visitorId: ["visitorId"],
                        visitorSesSeq: ["vSS"]
                    },
                    events: {
                        cmpClickThrough: ["e52"],
                        "unused-pastEvent": ["e52"],
                        engagementType: ["e6"],
                        link_engmtTp: ["e6"],
                        error: ["e100"],
                        instantSearch: ["e96"],
                        instantSearchResultClick: ["e95"],
                        internalPromotionEvent: ["e7"],
                        login: ["e39"],
                        mkwid: ["e43"],
                        personalization: ["e5"],
                        print: ["e14"],
                        printable: ["e14"],
                        purchase: ["purchase"],
                        familyTravelBudget: ["purchase"],
                        familyTravelLength: ["purchase"],
                        regAttempt: ["e25"],
                        registration: ["e4"],
                        regMilestone: ["e26"],
                        searchEventAttempt: ["e27"],
                        searchAttempt: ["e27"],
                        searchEventAutocomplete: ["e99"],
                        searchEventClose: ["e98"],
                        searchPhraseEvent: ["e2"],
                        trackingCodeEvent: ["e51"],
                        ugcType: ["e36"],
                        uniqueOptin: ["e8"],
                        userReviewEvent: ["e13"]
                    }
                },
                omni: {
                    mappings: {
                        abTest: ["prop19", "eVar24"],
                        account: ["prop70"],
                        arPageName: ["prop47", "eVar40"],
                        biReserved: ["prop71"],
                        "unused-time": ["prop71"],
                        dolWAVersion: ["prop72"],
                        engagementMeta: ["eVar58"],
                        engagementType: ["eVar8"],
                        link_engmtTp: ["eVar8"],
                        fullPageName: ["pageName"],
                        genreCode: ["prop25", "eVar25"],
                        genre: ["prop25", "eVar25"],
                        optinType: ["prop35"],
                        pageViewId: ["prop49"],
                        personalization: ["eVar6"],
                        prevPageName: ["prop12"],
                        products: ["products"],
                        program: ["prop48", "eVar74"],
                        purchaseId: ["purchaseID"],
                        referrer: ["prop68", "eVar68"],
                        regAge: ["eVar43"],
                        regFlowType: ["eVar45"],
                        registrationStatus: ["prop29"],
                        regMilestone: ["eVar44"],
                        searchEvent: ["prop50", "eVar30"],
                        searchAutocomplete: ["prop50", "eVar30"],
                        searchAutoComplete: ["prop50", "eVar30"],
                        searchFlow: ["prop18", "eVar5"],
                        searchType: ["prop18", "eVar5"],
                        searchTypeCode: ["prop18", "eVar5"],
                        searchPhrase: ["prop7", "eVar4"],
                        internalSearchPhrase: ["prop7", "eVar4"],
                        searchPhraseInput: ["eVar31"],
                        trueSearchPhrase: ["eVar31"],
                        searchRefinement: ["prop33"],
                        searchResultsCount: ["prop8"],
                        numSearchResults: ["prop8"],
                        server: ["server"],
                        sessionId: ["prop75"],
                        socialAuthors: ["eVar54"],
                        socialPlatforms: ["eVar53"],
                        swid: ["prop2", "eVar73"],
                        timeOnPage: ["eVar38"],
                        trackType: ["prop69"],
                        ugcType: ["prop54", "eVar12"],
                        uniqueOptin: ["eVar48"],
                        universalPathing: ["prop39"],
                        url: ["prop28", "eVar65"],
                        urlDomain: ["prop61", "eVar61"],
                        urlFullDomain: ["prop62", "eVar62"],
                        urlFullDomain1: ["prop63", "eVar63"],
                        userReview: ["eVar18"],
                        "unused-VID|PageName": ["eVar18"],
                        visitorId: ["prop74"]
                    },
                    EMEAmappings: {
                        abTest: ["prop19", "eVar24"],
                        country: ["prop31"],
                        intFullPageName: ["pageName", "eVar16"],
                        prevPageName: ["prop12"],
                        registrationStatus: ["prop29"],
                        searchFlow: ["prop18", "eVar5"],
                        searchType: ["prop18", "eVar5"],
                        searchTypeCode: ["prop18", "eVar5"],
                        searchPhrase: ["prop7", "eVar4"],
                        internalSearchPhrase: ["prop7", "eVar4"],
                        searchRefinement: ["prop33"],
                        searchResultsCount: ["prop8"],
                        numSearchResults: ["prop8"],
                        swid: ["prop2"],
                        ugcType: ["eVar12"],
                        url: ["prop46"]
                    },
                    events: {
                        engagementType: ["event6"],
                        link_engmtTp: ["event6"],
                        error: ["event100"],
                        instantSearch: ["event96"],
                        instantSearchResultClick: ["event95"],
                        login: ["event39"],
                        personalization: ["event5"],
                        print: ["event14"],
                        printable: ["event14"],
                        purchase: ["purchase"],
                        familyTravelBudget: ["purchase"],
                        familyTravelLength: ["purchase"],
                        regAttempt: ["event25"],
                        registration: ["event4"],
                        regMilestone: ["event26"],
                        searchEventAttempt: ["event27"],
                        searchAttempt: ["event27"],
                        searchEventAutocomplete: ["event99"],
                        searchEventClose: ["event98"],
                        searchPhraseEvent: ["event2"],
                        ugcType: ["event36"],
                        uniqueOptin: ["event8"],
                        userReviewEvent: ["event13"]
                    },
                    EMEAevents: {
                        login: ["event39"],
                        purchase: ["purchase"],
                        familyTravelBudget: ["purchase"],
                        familyTravelLength: ["purchase"],
                        registration: ["event4"],
                        searchPhrase: ["event2"],
                        internalSearchPhrase: ["event2"],
                        ugcType: ["event36"]
                    }
                }
            },
            tV: {
                cto: {
                    mappings: {
                        abTest: ["abTest"],
                        account: ["accnt"],
                        adCampaign: ["adCmp"],
                        adKeywords: ["adKwd"],
                        adPageName: ["adPgNm"],
                        adSizeList: ["adSzLst"],
                        adStart: ["adStart"],
                        app: ["app"],
                        arPageName: ["arPgNm"],
                        ASSETID: ["ASSETID"],
                        assetId: ["ASSETID"],
                        assetInteractionType: ["assetIntTp"],
                        assetName: ["assetNm"],
                        ASSETNAME: ["assetNm"],
                        assetTypeCode: ["assetTpCd"],
                        author: ["author"],
                        AUTO: ["AUTO"],
                        AUTOTRANSITION: ["AUTOTRANSITION"],
                        biReserved: ["biReserved"],
                        "unused-time": ["biReserved"],
                        BITRATE: ["BITRATE"],
                        breadcrumbs: ["brdcrums"],
                        siteSection: ["brdcrums"],
                        buCode: ["buCd"],
                        unit: ["buCd"],
                        buId: ["buId"],
                        categoryCode: ["categoryCd"],
                        category: ["categoryCd"],
                        cf: ["cf"],
                        characterCode: ["charCd"],
                        characterId: ["charId"],
                        cod: ["cod"],
                        contentId: ["contentId"],
                        contentTag: ["contentTag"],
                        contentType: ["contentTp"],
                        COREVIDEOID: ["COREVIDEOID"],
                        dealCategory: ["dealCtgry"],
                        dealType: ["dealTp"],
                        DEVID: ["DEVID"],
                        dolWAVersion: ["dolWAVer"],
                        engagementType: ["engmtTp"],
                        link_engmtTp: ["engmtTp"],
                        error: ["error"],
                        eventData: ["evntData"],
                        familyPartner: ["fmlPrtnr"],
                        familyTentPole: ["fmlTentPole"],
                        FORM: ["FORM"],
                        fullPageName: ["fullPgNm"],
                        galleryPageName: ["glPgNm"],
                        genreCode: ["gnrCd"],
                        genre: ["gnrCd"],
                        GENTITLE: ["GENTITLE"],
                        GENURL: ["GENURL"],
                        intFullPageName: ["intFullPageName"],
                        jf: ["jf"],
                        KDPDAT_PLAYHEAD: ["KDPDAT_PLAYHEAD"],
                        KDPDAT_VALUE: ["KDPDAT_VALUE"],
                        KDPEVNT: ["KDPEVNT"],
                        KDPID: ["KDPID"],
                        KDPPROTO: ["KDPPROTO"],
                        KPLAYBACKID: ["KPLAYBACKID"],
                        KSESSIONID: ["KSESSIONID"],
                        KSESSIONSEQ: ["KSESSIONSEQ"],
                        localSessionId: ["lSessId"],
                        localVisitorId: ["lVisId"],
                        membershipTypeCode: ["mmbrTpCd"],
                        membershipType: ["mmbrTpCd"],
                        mkwid: ["mkwTrckCd"],
                        optinType: ["optinLst"],
                        pageId: ["pgId"],
                        pageTypeCode: ["pgTpCd"],
                        pageType: ["pgTpCd"],
                        pageViewId: ["pgVwId"],
                        personalization: ["personalization"],
                        PLAYLISTID: ["PLAYLISTID"],
                        plgId: ["plgId"],
                        postDate: ["pstDt"],
                        prevPageName: ["prevPgNm"],
                        products: ["prods"],
                        program: ["program"],
                        propertyCode: ["propCd"],
                        ipCode: ["propCd"],
                        propertyId: ["propId"],
                        purchaseId: ["purchId"],
                        referrer: ["refUrl"],
                        regAge: ["regAge"],
                        regFlowType: ["regFlowTp"],
                        registrationStatus: ["regStatus"],
                        regMilestone: ["regMlstn"],
                        res: ["res"],
                        region: ["region"],
                        SCRUBPOS: ["SCRUBPOS"],
                        sem_cmp: ["semTrckCd"],
                        seriesCode: ["seriesCd"],
                        property: ["seriesCd"],
                        seriesId: ["seriesId"],
                        sessionFirstPage: ["sFP"],
                        sessionFirstRefUrl: ["sFRU"],
                        sessionFirstUrl: ["sFU"],
                        sessionHitSeq: ["sHS"],
                        sessionId: ["sessionId"],
                        siteCode: ["siteCd"],
                        site: ["siteCd"],
                        sponsor: ["sponsor"],
                        swid: ["swid"],
                        templateType: ["templateTp"],
                        timeParting: ["tParting"],
                        trackType: ["trckTp"],
                        ugcType: ["ugcTp"],
                        url: ["url"],
                        urlDomain: ["urlDom"],
                        urlFullDomain: ["urlFDom"],
                        urlFullDomain1: ["urlFDom1"],
                        uuid: ["uuid"],
                        vendorLst: ["vendorLst"],
                        version: ["version"],
                        VIDLEN: ["VIDLEN"],
                        visitorFirstPage: ["vFP"],
                        visitorFirstRefUrl: ["vFRU"],
                        visitorFirstUrl: ["vFU"],
                        visitorId: ["visitorId"],
                        visitorSesSeq: ["vSS"],
                        WIGID: ["WIGID"]
                    },
                    events: {
                        adStart: ["e97"],
                        assetComplete: ["e11"],
                        assetInteractionType: ["e40"],
                        assetStart: ["e1"],
                        cmpClickThrough: ["e52"],
                        "unused-pastEvent": ["e52"],
                        engagementType: ["e6"],
                        link_engmtTp: ["e6"],
                        error: ["e100"],
                        internalPromotionEvent: ["e7"],
                        login: ["e39"],
                        mkwid: ["e43"],
                        personalization: ["e5"],
                        regAttempt: ["e25"],
                        registration: ["e4"],
                        regMilestone: ["e26"],
                        trackingCodeEvent: ["e51"],
                        ugcType: ["e36"],
                        video20: ["e69"],
                        video50: ["e71"],
                        video70: ["e70"],
                        videoAuto: ["e68"],
                        videoComplete: ["e74"],
                        videoStart: ["e73"]
                    }
                },
                omni: {
                    mappings: {
                        abTest: ["prop19", "eVar24"],
                        account: ["prop70"],
                        arPageName: ["prop47", "eVar40"],
                        assetBU: ["eVar57"],
                        assetInteractionType: ["eVar13"],
                        assetMSTP: ["eVar56"],
                        assetName: ["prop3", "eVar2"],
                        ASSETNAME: ["prop3", "eVar2"],
                        assetPlayerForm: ["eVar69"],
                        assetPlayerType: ["eVar67"],
                        biReserved: ["prop71"],
                        "unused-time": ["prop71"],
                        dolWAVersion: ["prop72"],
                        engagementType: ["eVar8"],
                        link_engmtTp: ["eVar8"],
                        fullPageName: ["pageName"],
                        genreCode: ["prop25", "eVar25"],
                        genre: ["prop25", "eVar25"],
                        optinType: ["prop35"],
                        pageViewId: ["prop49"],
                        personalization: ["eVar6"],
                        prevPageName: ["prop12"],
                        products: ["products"],
                        program: ["prop48", "eVar74"],
                        purchaseId: ["purchaseID"],
                        referrer: ["prop68", "eVar68"],
                        server: ["server"],
                        sessionId: ["prop75"],
                        swid: ["prop2", "eVar73"],
                        trackType: ["prop69"],
                        universalPathing: ["prop39"],
                        url: ["prop28", "eVar65"],
                        urlDomain: ["prop61", "eVar61"],
                        urlFullDomain: ["prop62", "eVar62"],
                        urlFullDomain1: ["prop63", "eVar63"],
                        visitorId: ["prop74"]
                    },
                    EMEAmappings: {
                        abTest: ["prop19", "eVar24"],
                        assetInteractionType: ["eVar11"],
                        assetName: ["prop3", "eVar2"],
                        ASSETNAME: ["prop3", "eVar2"],
                        assetStartType: ["eVar13"],
                        country: ["prop31"],
                        intFullPageName: ["pageName", "eVar16"],
                        prevPageName: ["prop12"],
                        swid: ["prop2"],
                        url: ["prop46"],
                        videoSegment: ["eVar20"]
                    },
                    events: {
                        adStart: ["event97"],
                        assetComplete: ["event11"],
                        assetInteractionType: ["event40"],
                        assetStart: ["event1"],
                        engagementType: ["event6"],
                        link_engmtTp: ["event6"],
                        error: ["event100"],
                        personalization: ["event5"],
                        video20: ["event69"],
                        video50: ["event71"],
                        video70: ["event70"],
                        videoAuto: ["event68"],
                        videoComplete: ["event74"],
                        videoStart: ["event73"]
                    },
                    EMEAevents: {
                        assetComplete: ["event11"],
                        assetInteractionType: ["event40"],
                        assetSecondsConsumed: ["event10"],
                        assetStart: ["event1"],
                        video25: ["event16"],
                        video50: ["event17"],
                        videoSegmentViews: ["event12"]
                    }
                }
            },
            tG: {
                cto: {
                    mappings: {
                        abTest: ["abTest"],
                        account: ["accnt"],
                        adCampaign: ["adCmp"],
                        adKeywords: ["adKwd"],
                        adPageName: ["adPgNm"],
                        adSizeList: ["adSzLst"],
                        adStart: ["adStart"],
                        app: ["app"],
                        arPageName: ["arPgNm"],
                        ASSETID: ["ASSETID"],
                        assetId: ["ASSETID"],
                        assetInteractionType: ["assetIntTp"],
                        assetName: ["assetNm"],
                        ASSETNAME: ["assetNm"],
                        assetTypeCode: ["assetTpCd"],
                        author: ["author"],
                        AUTOTRANSITION: ["AUTOTRANSITION"],
                        biReserved: ["biReserved"],
                        "unused-time": ["biReserved"],
                        breadcrumbs: ["brdcrums"],
                        siteSection: ["brdcrums"],
                        buCode: ["buCd"],
                        unit: ["buCd"],
                        buId: ["buId"],
                        categoryCode: ["categoryCd"],
                        category: ["categoryCd"],
                        cf: ["cf"],
                        characterCode: ["charCd"],
                        characterId: ["charId"],
                        cod: ["cod"],
                        contentId: ["contentId"],
                        contentTag: ["contentTag"],
                        contentType: ["contentTp"],
                        COREVIDEOID: ["COREVIDEOID"],
                        dealCategory: ["dealCtgry"],
                        dealType: ["dealTp"],
                        dolWAVersion: ["dolWAVer"],
                        embFields: ["embFields"],
                        embValues: ["embValues"],
                        engagementType: ["engmtTp"],
                        link_engmtTp: ["engmtTp"],
                        error: ["error"],
                        eventData: ["evntData"],
                        familyPartner: ["fmlPrtnr"],
                        familyTentPole: ["fmlTentPole"],
                        fullPageName: ["fullPgNm"],
                        galleryPageName: ["glPgNm"],
                        gameBuCode: ["gmBuCd"],
                        gameEvent: ["gmEvnt"],
                        gameEventValue: ["gmEvntVal"],
                        gameGenreCode: ["gmGenreCd"],
                        gameName: ["gmNm"],
                        gameOwnerName: ["gmOwnNm"],
                        gameSeriesCode: ["gmSeriesCd"],
                        gameSessionId: ["gmSessionId"],
                        gameTime: ["gmTm"],
                        gameTypeCode: ["gmTpCd"],
                        genreCode: ["gnrCd"],
                        genre: ["gnrCd"],
                        intFullPageName: ["intFullPageName"],
                        jf: ["jf"],
                        localSessionId: ["lSessId"],
                        localVisitorId: ["lVisId"],
                        membershipTypeCode: ["mmbrTpCd"],
                        membershipType: ["mmbrTpCd"],
                        mkwid: ["mkwTrckCd"],
                        optinType: ["optinLst"],
                        pageId: ["pgId"],
                        pageTypeCode: ["pgTpCd"],
                        pageType: ["pgTpCd"],
                        pageViewId: ["pgVwId"],
                        personalization: ["personalization"],
                        PLAYLISTID: ["PLAYLISTID"],
                        plgId: ["plgId"],
                        postDate: ["pstDt"],
                        prevPageName: ["prevPgNm"],
                        products: ["prods"],
                        program: ["program"],
                        propertyCode: ["propCd"],
                        ipCode: ["propCd"],
                        propertyId: ["propId"],
                        purchaseId: ["purchId"],
                        referrer: ["refUrl"],
                        regAge: ["regAge"],
                        regFlowType: ["regFlowTp"],
                        registrationStatus: ["regStatus"],
                        regMilestone: ["regMlstn"],
                        res: ["res"],
                        region: ["region"],
                        sem_cmp: ["semTrckCd"],
                        seriesCode: ["seriesCd"],
                        property: ["seriesCd"],
                        seriesId: ["seriesId"],
                        sessionFirstPage: ["sFP"],
                        sessionFirstRefUrl: ["sFRU"],
                        sessionFirstUrl: ["sFU"],
                        sessionHitSeq: ["sHS"],
                        sessionId: ["sessionId"],
                        siteCode: ["siteCd"],
                        site: ["siteCd"],
                        sponsor: ["sponsor"],
                        swid: ["swid"],
                        templateType: ["templateTp"],
                        timeParting: ["tParting"],
                        trackType: ["trckTp"],
                        ugcType: ["ugcTp"],
                        url: ["url"],
                        urlDomain: ["urlDom"],
                        urlFullDomain: ["urlFDom"],
                        urlFullDomain1: ["urlFDom1"],
                        uuid: ["uuid"],
                        vendorLst: ["vendorLst"],
                        version: ["version"],
                        visitorFirstPage: ["vFP"],
                        visitorFirstRefUrl: ["vFRU"],
                        visitorFirstUrl: ["vFU"],
                        visitorId: ["visitorId"],
                        visitorSesSeq: ["vSS"]
                    },
                    events: {
                        adStart: ["e97"],
                        assetComplete: ["e11"],
                        assetInteractionType: ["e40"],
                        assetStart: ["e1"],
                        cmpClickThrough: ["e52"],
                        "unused-pastEvent": ["e52"],
                        engagementType: ["e6"],
                        link_engmtTp: ["e6"],
                        error: ["e100"],
                        gameLoad: ["e72"],
                        internalPromotionEvent: ["e7"],
                        login: ["e39"],
                        mkwid: ["e43"],
                        personalization: ["e5"],
                        regAttempt: ["e25"],
                        registration: ["e4"],
                        regMilestone: ["e26"],
                        trackingCodeEvent: ["e51"],
                        ugcType: ["e36"]
                    }
                },
                omni: {
                    mappings: {
                        abTest: ["prop19", "eVar24"],
                        account: ["prop70"],
                        arPageName: ["prop47", "eVar40"],
                        assetBU: ["eVar57"],
                        assetInteractionType: ["eVar13"],
                        assetMSTP: ["eVar56"],
                        assetName: ["prop3", "eVar2"],
                        ASSETNAME: ["prop3", "eVar2"],
                        biReserved: ["prop71"],
                        "unused-time": ["prop71"],
                        dolWAVersion: ["prop72"],
                        engagementType: ["eVar8"],
                        link_engmtTp: ["eVar8"],
                        fullPageName: ["pageName"],
                        genreCode: ["prop25", "eVar25"],
                        genre: ["prop25", "eVar25"],
                        optinType: ["prop35"],
                        pageViewId: ["prop49"],
                        personalization: ["eVar6"],
                        prevPageName: ["prop12"],
                        products: ["products"],
                        program: ["prop48", "eVar74"],
                        purchaseId: ["purchaseID"],
                        referrer: ["prop68", "eVar68"],
                        server: ["server"],
                        sessionId: ["prop75"],
                        swid: ["prop2", "eVar73"],
                        trackType: ["prop69"],
                        universalPathing: ["prop39"],
                        url: ["prop28", "eVar65"],
                        urlDomain: ["prop61", "eVar61"],
                        urlFullDomain: ["prop62", "eVar62"],
                        urlFullDomain1: ["prop63", "eVar63"],
                        visitorId: ["prop74"]
                    },
                    EMEAmappings: {
                        abTest: ["prop19", "eVar24"],
                        assetInteractionType: ["eVar11"],
                        assetName: ["prop3", "eVar2"],
                        ASSETNAME: ["prop3", "eVar2"],
                        assetStartType: ["eVar13"],
                        country: ["prop31"],
                        intFullPageName: ["pageName", "eVar16"],
                        prevPageName: ["prop12"],
                        swid: ["prop2"],
                        url: ["prop46"]
                    },
                    events: {
                        adStart: ["event97"],
                        assetComplete: ["event11"],
                        assetInteractionType: ["event40"],
                        assetStart: ["event1"],
                        engagementType: ["event6"],
                        link_engmtTp: ["event6"],
                        error: ["event100"],
                        gameLoad: ["event72"],
                        personalization: ["event5"]
                    },
                    EMEAevents: {
                        assetComplete: ["event11"],
                        assetInteractionType: ["event40"],
                        assetStart: ["event1"]
                    }
                }
            },
            tA: {
                cto: {
                    mappings: {
                        abTest: ["abTest"],
                        account: ["accnt"],
                        adCampaign: ["adCmp"],
                        adKeywords: ["adKwd"],
                        adPageName: ["adPgNm"],
                        adSizeList: ["adSzLst"],
                        adStart: ["adStart"],
                        app: ["app"],
                        appBuCode: ["appBuCd"],
                        appEvent: ["appEvnt"],
                        appEventValue: ["appEvntVal"],
                        appGenreCode: ["appGenreCd"],
                        appName: ["appNm"],
                        appOwnerName: ["appOwnNm"],
                        appPropertyCode: ["appPropCd"],
                        appSessionId: ["appSessionId"],
                        appTime: ["appTm"],
                        appTypeCode: ["appTpCd"],
                        arPageName: ["arPgNm"],
                        ASSETID: ["ASSETID"],
                        assetId: ["ASSETID"],
                        assetInteractionType: ["assetIntTp"],
                        assetName: ["assetNm"],
                        ASSETNAME: ["assetNm"],
                        assetTypeCode: ["assetTpCd"],
                        author: ["author"],
                        AUTOTRANSITION: ["AUTOTRANSITION"],
                        biReserved: ["biReserved"],
                        "unused-time": ["biReserved"],
                        breadcrumbs: ["brdcrums"],
                        siteSection: ["brdcrums"],
                        buCode: ["buCd"],
                        unit: ["buCd"],
                        buId: ["buId"],
                        categoryCode: ["categoryCd"],
                        category: ["categoryCd"],
                        cf: ["cf"],
                        characterCode: ["charCd"],
                        characterId: ["charId"],
                        cod: ["cod"],
                        contentId: ["contentId"],
                        contentTag: ["contentTag"],
                        contentType: ["contentTp"],
                        COREVIDEOID: ["COREVIDEOID"],
                        dealCategory: ["dealCtgry"],
                        dealType: ["dealTp"],
                        dolWAVersion: ["dolWAVer"],
                        engagementType: ["engmtTp"],
                        link_engmtTp: ["engmtTp"],
                        error: ["error"],
                        eventData: ["evntData"],
                        familyPartner: ["fmlPrtnr"],
                        familyTentPole: ["fmlTentPole"],
                        fullPageName: ["fullPgNm"],
                        galleryPageName: ["glPgNm"],
                        genreCode: ["gnrCd"],
                        genre: ["gnrCd"],
                        intFullPageName: ["intFullPageName"],
                        jf: ["jf"],
                        localSessionId: ["lSessId"],
                        localVisitorId: ["lVisId"],
                        membershipTypeCode: ["mmbrTpCd"],
                        membershipType: ["mmbrTpCd"],
                        mkwid: ["mkwTrckCd"],
                        optinType: ["optinLst"],
                        pageId: ["pgId"],
                        pageTypeCode: ["pgTpCd"],
                        pageType: ["pgTpCd"],
                        pageViewId: ["pgVwId"],
                        personalization: ["personalization"],
                        PLAYLISTID: ["PLAYLISTID"],
                        plgId: ["plgId"],
                        postDate: ["pstDt"],
                        prevPageName: ["prevPgNm"],
                        products: ["prods"],
                        program: ["program"],
                        propertyCode: ["propCd"],
                        ipCode: ["propCd"],
                        propertyId: ["propId"],
                        purchaseId: ["purchId"],
                        referrer: ["refUrl"],
                        regAge: ["regAge"],
                        regFlowType: ["regFlowTp"],
                        registrationStatus: ["regStatus"],
                        regMilestone: ["regMlstn"],
                        res: ["res"],
                        region: ["region"],
                        sem_cmp: ["semTrckCd"],
                        seriesCode: ["seriesCd"],
                        property: ["seriesCd"],
                        seriesId: ["seriesId"],
                        sessionFirstPage: ["sFP"],
                        sessionFirstRefUrl: ["sFRU"],
                        sessionFirstUrl: ["sFU"],
                        sessionHitSeq: ["sHS"],
                        sessionId: ["sessionId"],
                        siteCode: ["siteCd"],
                        site: ["siteCd"],
                        sponsor: ["sponsor"],
                        swid: ["swid"],
                        templateType: ["templateTp"],
                        timeParting: ["tParting"],
                        trackType: ["trckTp"],
                        ugcType: ["ugcTp"],
                        url: ["url"],
                        urlDomain: ["urlDom"],
                        urlFullDomain: ["urlFDom"],
                        urlFullDomain1: ["urlFDom1"],
                        uuid: ["uuid"],
                        vendorLst: ["vendorLst"],
                        version: ["version"],
                        visitorFirstPage: ["vFP"],
                        visitorFirstRefUrl: ["vFRU"],
                        visitorFirstUrl: ["vFU"],
                        visitorId: ["visitorId"],
                        visitorSesSeq: ["vSS"]
                    },
                    events: {
                        adStart: ["e97"],
                        appLoad: ["e67"],
                        appSaveC: ["e66"],
                        appShare: ["e65"],
                        assetComplete: ["e11"],
                        assetInteractionType: ["e40"],
                        assetStart: ["e1"],
                        cmpClickThrough: ["e52"],
                        "unused-pastEvent": ["e52"],
                        engagementType: ["e6"],
                        link_engmtTp: ["e6"],
                        error: ["e100"],
                        internalPromotionEvent: ["e7"],
                        login: ["e39"],
                        mkwid: ["e43"],
                        personalization: ["e5"],
                        regAttempt: ["e25"],
                        registration: ["e4"],
                        regMilestone: ["e26"],
                        trackingCodeEvent: ["e51"],
                        ugcType: ["e36"]
                    }
                },
                omni: {
                    mappings: {
                        abTest: ["prop19", "eVar24"],
                        account: ["prop70"],
                        arPageName: ["prop47", "eVar40"],
                        assetBU: ["eVar57"],
                        assetInteractionType: ["eVar13"],
                        assetMSTP: ["eVar56"],
                        assetName: ["prop3", "eVar2"],
                        ASSETNAME: ["prop3", "eVar2"],
                        biReserved: ["prop71"],
                        "unused-time": ["prop71"],
                        dolWAVersion: ["prop72"],
                        engagementType: ["eVar8"],
                        link_engmtTp: ["eVar8"],
                        fullPageName: ["pageName"],
                        genreCode: ["prop25", "eVar25"],
                        genre: ["prop25", "eVar25"],
                        optinType: ["prop35"],
                        pageViewId: ["prop49"],
                        personalization: ["eVar6"],
                        prevPageName: ["prop12"],
                        products: ["products"],
                        program: ["prop48", "eVar74"],
                        purchaseId: ["purchaseID"],
                        referrer: ["prop68", "eVar68"],
                        server: ["server"],
                        sessionId: ["prop75"],
                        swid: ["prop2", "eVar73"],
                        trackType: ["prop69"],
                        universalPathing: ["prop39"],
                        url: ["prop28", "eVar65"],
                        urlDomain: ["prop61", "eVar61"],
                        urlFullDomain: ["prop62", "eVar62"],
                        urlFullDomain1: ["prop63", "eVar63"],
                        visitorId: ["prop74"]
                    },
                    EMEAmappings: {
                        abTest: ["prop19", "eVar24"],
                        assetInteractionType: ["eVar11"],
                        assetName: ["prop3", "eVar2"],
                        ASSETNAME: ["prop3", "eVar2"],
                        assetStartType: ["eVar13"],
                        country: ["prop31"],
                        intFullPageName: ["pageName", "eVar16"],
                        prevPageName: ["prop12"],
                        swid: ["prop2"],
                        url: ["prop46"]
                    },
                    events: {
                        adStart: ["event97"],
                        appLoad: ["event67"],
                        appSaveC: ["event66"],
                        appShare: ["event65"],
                        assetComplete: ["event11"],
                        assetInteractionType: ["event40"],
                        assetStart: ["event1"],
                        engagementType: ["event6"],
                        link_engmtTp: ["event6"],
                        error: ["event100"],
                        personalization: ["event5"]
                    },
                    EMEAevents: {
                        assetComplete: ["event11"],
                        assetInteractionType: ["event40"],
                        assetStart: ["event1"]
                    }
                }
            },
            tPr: {
                cto: {
                    mappings: {
                        abTest: ["abTest"],
                        account: ["accnt"],
                        adCampaign: ["adCmp"],
                        adKeywords: ["adKwd"],
                        adPageName: ["adPgNm"],
                        adSizeList: ["adSzLst"],
                        app: ["app"],
                        arPageName: ["arPgNm"],
                        author: ["author"],
                        AUTOTRANSITION: ["AUTOTRANSITION"],
                        biReserved: ["biReserved"],
                        "unused-time": ["biReserved"],
                        breadcrumbs: ["brdcrums"],
                        siteSection: ["brdcrums"],
                        buCode: ["buCd"],
                        unit: ["buCd"],
                        buId: ["buId"],
                        categoryCode: ["categoryCd"],
                        category: ["categoryCd"],
                        cf: ["cf"],
                        characterCode: ["charCd"],
                        characterId: ["charId"],
                        cod: ["cod"],
                        contentId: ["contentId"],
                        contentTag: ["contentTag"],
                        contentType: ["contentTp"],
                        COREVIDEOID: ["COREVIDEOID"],
                        dealCategory: ["dealCtgry"],
                        dealType: ["dealTp"],
                        dolWAVersion: ["dolWAVer"],
                        engagementType: ["engmtTp"],
                        link_engmtTp: ["engmtTp"],
                        error: ["error"],
                        eventData: ["evntData"],
                        familyPartner: ["fmlPrtnr"],
                        familyTentPole: ["fmlTentPole"],
                        fullPageName: ["fullPgNm"],
                        galleryPageName: ["glPgNm"],
                        genreCode: ["gnrCd"],
                        genre: ["gnrCd"],
                        intFullPageName: ["intFullPageName"],
                        jf: ["jf"],
                        linkUrl: ["linkUrl"],
                        localSessionId: ["lSessId"],
                        localVisitorId: ["lVisId"],
                        membershipTypeCode: ["mmbrTpCd"],
                        membershipType: ["mmbrTpCd"],
                        mkwid: ["mkwTrckCd"],
                        optinType: ["optinLst"],
                        pageId: ["pgId"],
                        pageTypeCode: ["pgTpCd"],
                        pageType: ["pgTpCd"],
                        pageViewId: ["pgVwId"],
                        personalization: ["personalization"],
                        PLAYLISTID: ["PLAYLISTID"],
                        plgId: ["plgId"],
                        postDate: ["pstDt"],
                        prevPageName: ["prevPgNm"],
                        products: ["prods"],
                        program: ["program"],
                        propertyCode: ["propCd"],
                        ipCode: ["propCd"],
                        propertyId: ["propId"],
                        purchaseId: ["purchId"],
                        referrer: ["refUrl"],
                        regAge: ["regAge"],
                        regFlowType: ["regFlowTp"],
                        registrationStatus: ["regStatus"],
                        regMilestone: ["regMlstn"],
                        res: ["res"],
                        region: ["region"],
                        sem_cmp: ["semTrckCd"],
                        seriesCode: ["seriesCd"],
                        property: ["seriesCd"],
                        seriesId: ["seriesId"],
                        sessionFirstPage: ["sFP"],
                        sessionFirstRefUrl: ["sFRU"],
                        sessionFirstUrl: ["sFU"],
                        sessionHitSeq: ["sHS"],
                        sessionId: ["sessionId"],
                        siteCode: ["siteCd"],
                        site: ["siteCd"],
                        sponsor: ["sponsor"],
                        swid: ["swid"],
                        templateType: ["templateTp"],
                        timeParting: ["tParting"],
                        trackType: ["trckTp"],
                        ugcType: ["ugcTp"],
                        url: ["url"],
                        urlDomain: ["urlDom"],
                        urlFullDomain: ["urlFDom"],
                        urlFullDomain1: ["urlFDom1"],
                        uuid: ["uuid"],
                        vendorLst: ["vendorLst"],
                        version: ["version"],
                        visitorFirstPage: ["vFP"],
                        visitorFirstRefUrl: ["vFRU"],
                        visitorFirstUrl: ["vFU"],
                        visitorId: ["visitorId"],
                        visitorSesSeq: ["vSS"]
                    },
                    events: {
                        cmpClickThrough: ["e52"],
                        "unused-pastEvent": ["e52"],
                        engagementType: ["e6"],
                        link_engmtTp: ["e6"],
                        error: ["e100"],
                        internalPromotionEvent: ["e7"],
                        login: ["e39"],
                        mkwid: ["e43"],
                        personalization: ["e5"],
                        print: ["e14"],
                        printable: ["e14"],
                        regAttempt: ["e25"],
                        registration: ["e4"],
                        regMilestone: ["e26"],
                        trackingCodeEvent: ["e51"],
                        ugcType: ["e36"]
                    }
                },
                omni: {
                    mappings: {
                        abTest: ["prop19", "eVar24"],
                        account: ["prop70"],
                        arPageName: ["prop47", "eVar40"],
                        biReserved: ["prop71"],
                        "unused-time": ["prop71"],
                        dolWAVersion: ["prop72"],
                        engagementType: ["eVar8"],
                        link_engmtTp: ["eVar8"],
                        fullPageName: ["pageName"],
                        genreCode: ["prop25", "eVar25"],
                        genre: ["prop25", "eVar25"],
                        linkUrl: ["eVar70"],
                        optinType: ["prop35"],
                        pageViewId: ["prop49"],
                        personalization: ["eVar6"],
                        prevPageName: ["prop12"],
                        products: ["products"],
                        program: ["prop48", "eVar74"],
                        purchaseId: ["purchaseID"],
                        referrer: ["prop68", "eVar68"],
                        server: ["server"],
                        sessionId: ["prop75"],
                        swid: ["prop2", "eVar73"],
                        trackType: ["prop69"],
                        url: ["prop28", "eVar65"],
                        urlDomain: ["prop61", "eVar61"],
                        urlFullDomain: ["prop62", "eVar62"],
                        urlFullDomain1: ["prop63", "eVar63"],
                        visitorId: ["prop74"]
                    },
                    EMEAmappings: {
                        abTest: ["prop19", "eVar24"],
                        country: ["prop31"],
                        intFullPageName: ["pageName", "eVar16"],
                        prevPageName: ["prop12"],
                        swid: ["prop2"],
                        url: ["prop46"]
                    },
                    events: {
                        engagementType: ["event6"],
                        link_engmtTp: ["event6"],
                        error: ["event100"],
                        personalization: ["event5"],
                        print: ["event14"],
                        printable: ["event14"]
                    }
                }
            }
        };
        e.fire(window, "variableMapLoadedCTO", t)
    }), require.config({
        paths: {
            underscore: "vendor/underscore-amd/underscore",
            requireLib: "vendor/requirejs/require",
            reqwest: "vendor/reqwest/reqwest",
            cookie: "vendor/cookie/cookie",
            url: "vendor/url/url",
            tld: "vendor/tld/tld",
            q: "vendor/q/q",
            scode: "vendor/scode/scode",
            StreamSense: "vendor/streamsense/StreamSense",
            pollster: "vendor/pollster/pollster",
            bean: "vendor/bean/bean"
        }
    }), require(["bean", "underscore", "controller/events/APIReadyCTO", "controller/events/trackLinkCTO", "controller/events/cookiesReadyCTO", "controller/events/updateCookies", "controller/events/updateHitSeq", "controller/events/trackBounce", "controller/events/trackTimeToClick", "controller/events/trackPrint", "controller/events/runQueue", "controller/cookie/prevPageName", "controller/vendor/allVendors", "models/data/Config", "models/data/VariableMap"], function(e, t) {
        t.noConflict(), e.fire(window, "modulesLoadedCTO")
    }), define("main", function() {});
})();

