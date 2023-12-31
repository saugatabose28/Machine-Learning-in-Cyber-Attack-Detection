/*! scripts/tumblr/utils/exceptions.js */
(function(p, F) {
    var e = p.document;
    var w = p.encodeURIComponent;
    var u = p.navigator;
    var g = p.parseInt;
    var m = p.performance;
    var y = p.window;
    var x = p.Date;
    var h = p.Error;
    var l = p.Math;
    var C = p.XMLHttpRequest;
    var E = [];
    var n = [];
    var a = {};
    var c = false;
    function J(M, L, N, K) {
        M.addEventListener ? M.addEventListener(L, N, !!K) : M.attachEvent && M.attachEvent("on" + L, N, !!K)
    }
    function f(L, K) {
        return (typeof L === "string") && (L.length > K) ? [L.slice(0, K / 2), "...", L.length - K, "...", L.slice( - K / 2)].join("") : L
    }
    function z(O, M) {
        var P = [];
        for (var N in O) {
            if (!O.hasOwnProperty(N)) {
                continue
            }
            var L = M ? (M + "[" + N + "]"): N, K = O[N];
            P.push(typeof K === "object" ? z(K, L) : w(L) + "=" + w(K))
        }
        return P.join("&")
    }
    var s = (function(K) {
        return (K && K.keys) || function(O) {
            var L = [];
            var N = K.prototype.hasOwnProperty;
            for (var M in O) {
                N.call(O, M) && L.push(M)
            }
            return L
        }
    })(p.Object);
    var d = function(L, O, M) {
        if (typeof O !== "function") {
            return 
        }
        var K = (L && L.length)>>>0;
        for (var N = 0; N < K; N++) {
            O.call(M, L[N], N, L)
        }
    };
    var I = (function(K) {
        return (K && K.stringify && function(M) {
            try {
                return K.stringify(M)
            } catch (L) {
                i(L);
                return '"FAILED_JSON_STRINGIFY"'
            }
        }) || function() {
            return '"NO_JSON_STRINGIFY"'
        }
    })(p.JSON);
    var q = (function(K) {
        return (K && K.Flags) || (function() {
            i(new h("Missing Tumblr.Flags in exceptions.js"));
            var L = {
                enable_js_errors_log: true,
                enable_js_ephemeral_log: true
            };
            function M(N, O) {
                return (typeof N === "function") ? N.call(this, O) : N
            }
            return function(O) {
                var N=!!(L[O]);
                return function P(R, S) {
                    var Q = M.call(this, (N ? R : S), N);
                    return (Q !== void 0) ? Q : P
                }
            }
        })()
    })(p.Tumblr);
    function i(L, K) {
        if (typeof K === "number" && l.random() > K) {
            return 
        }
        if (L instanceof h) {
            L.url || (L.url = "//www.tumblr.com/");
            k(L.message, L.url, L.ln, L.col, L)
        } else {
            E.push(I(L))
        }
    }
    var B = /https?:\/\//;
    var D = /https?:\/\/[^/]*tumblr[^/]*/;
    function k(O, L, N, K, M) {
        try {
            L = f(L, 300) || "";
            if (B.test(L)&&!D.test(L)) {
                return 
            }
            M = I(f(M && M.stack, 1000) || "");
            if (B.test(M)&&!D.test(M)) {
                return 
            }
            n.push({
                path: (e.location || {}).pathname || "NO_LOCATION_OR_PATHNAME",
                msg: f(O, 200) || "",
                url: L,
                ln: g(N, 10)||-1,
                col: g(K, 10)||-1,
                err: M,
                group: q("js_errors_a")("A", q("js_errors_b")("B", "*"))
            })
        } catch (M) {}
    }
    function b() {
        return ((e.head || {}).innerHTML || "").indexOf("#missinge_button")!==-1
    }
    var t = i.debugDump = function() {
        var K = [];
        d(e.getElementsByTagName("script"), function(L) {
            K.push(L.src)
        });
        return {
            timestamp: + new x(),
            path: (e.location || {}).href || "NO_HREF",
            lang: (u || {}).userLanguage || (u || {}).language || "NO_LANG",
            referrer: e.referrer || "NO_REFERRER",
            ua: (u || {}).userAgent || "NO_UA",
            timing: (m || {}).timing || "NO_TIMING",
            scripts: K,
            globals: s(p),
            cookie: e.cookie,
            ephemeral: E,
            errors: n,
            document: (e.documentElement || {}).innerHTML || "NO_DOCUMENT"
        }
    };
    function o(K) {
        var L = t();
        L.name = K;
        return I(L)
    }
    function H() {
        try {
            if (!c) {
                n.length = 0;
                i(new h("PAGE_DID_NOT_LOAD"))
            }
            var K;
            !b() && q("enable_js_errors_log")(function() {
                n.length && ((K || (K = {})).errors = n)
            });
            q("js_performance_logging")(function() {
                try {
                    if (!m ||!m.getEntriesByType) {
                        return 
                    }
                    var N = m.getEntriesByType("resource");
                    d(N, function(Q) {
                        if (Q.initiatorType !== "img") {
                            return 
                        }
                        var P = (Q.name.match(/\/\/([^/]+)/) || "")[1];
                        if (P.indexOf(".tumblr.")===-1) {
                            return 
                        }
                        var R = P.split(".")[0];
                        a.entries || (a.entries = []);
                        a.entries.push({
                            name: Q.name.split("tumblr.com/")[1],
                            duration: Q.duration,
                            bucket: R
                        })
                    });
                    if (s(a)) {
                        ((K || (K = {})).perf = a);
                        a.timing = m.timing;
                        a.memory = m.memory;
                        a.navigation = m.navigation
                    }
                } catch (O) {}
            });
            q("enable_js_ephemeral_log")(function() {
                E.length && ((K || (K = {})).ephemeral = E)
            });
            q("js_debugger_1")(function() {
                (K || (K = {})).ephemeral = [o("js_debugger_1")]
            });
            q("js_debugger_2")(function() {
                (K || (K = {})).ephemeral = [o("js_debugger_2")]
            });
            if (!K) {
                return 
            }
            var M = new C();
            M.open("POST", "/svc/log/capture/exceptions", false);
            M.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            M.onreadystatechange = function() {
                if (M.readyState !== 4) {
                    return 
                }
                n.length = E.length = 0
            };
            M.send(z({
                form_key: (e.getElementById("tumblr_form_key") || e.body).getAttribute("content"),
                log: K
            }))
        } catch (L) {
            if (!p.jQuery) {
                return 
            }
            i(L);
            (K || (K = {})).errors || (K.errors = n);
            p.jQuery.ajax({
                async: false,
                type: "POST",
                data: {
                    form_key: p.jQuery("#tumblr_form_key").attr("content"),
                    log: K
                },
                url: "/svc/log/capture/exceptions",
                with_form_key: true
            })
        }
    }(function G() {
        J(y, "beforeunload", H);
        y.onerror = k
    })();
    (F.Utils || (F.Utils = {})).exceptions = i;
    function j() {
        a.page_info = {};
        a.page_info.path = e.location.pathname || "n/a"
    }
    function v() {
        var K = new x().getTime();
        var L = K - m.timing.navigationStart;
        a.page_load_time = L
    }
    function r() {
        if (!m ||!m.timing) {
            return 
        }
        try {
            j();
            v()
        } catch (K) {}
    }
    function A() {
        c = true;
        r()
    }
    J(y, "load", A)
})(this, this.Tumblr || (this.Tumblr = {}));
