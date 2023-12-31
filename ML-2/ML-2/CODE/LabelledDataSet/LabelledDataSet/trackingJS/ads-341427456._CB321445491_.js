(function() {
    window.generic = (window.generic || {});
    window.generic.install = function(c, b) {
        var a;
        for (a in b) {
            if (b.hasOwnProperty(a)) {
                c[a] = b[a];
            }
        }
    };
})();
(function(a) {
    a.install(a, {
        document_readys: [],
        document_is_ready: function() {
            var d = a.document_readys, b;
            a.document_readys = null;
            for (b = 0; b < d.length; b++) {
                try {
                    d[b](jQuery);
                } catch (c) {}
            }
            if (a.should_jQuery_noConflict) {
                jQuery.noConflict(false);
            }
        },
        on_document_ready: function(b) {
            if (a.has_document_readied()) {
                b(jQuery);
            } else {
                a.document_readys.push(b);
            }
        },
        has_document_readied: function() {
            return a.document_readys === null;
        }
    });
})(window.generic);
function consoleLog(i, b, a) {
    var h = window.consoleLog, d = document.location, g = d.hash.match("debug=1"), e = (a === "error" || g), f;
    if (!b) {
        b = "global";
    } else {
        (h[b] = h[b] || []).push(i);
    }
    f = b + " : " + i;
    (h.global = h.global || []).push(f);
    try {
        if (!e) {
            return;
        }
        if (window.console) {
            if (window.console[a]) {
                window.console[a](f);
            } else {
                if (window.console.log) {
                    window.console.log(f);
                }
            }
        }
    } catch (c) {}
}
function consoleWarn(b, a) {
    consoleLog(b, a, "warn");
}
function consoleError(b, a) {
    consoleLog(b, a, "error");
}
document.getElementsByTagName("html")[0].className += " scriptsOn";
(function(b, a) {
    b.imdbads = b.imdbads || {};
    b.imdbads.frequencyCapping = (function() {
        var j = function() {
            try {
                if (k&&!i) {
                    if (typeof mraidbridge !== "undefined" && typeof mraidbridge.localstorage !== "undefined") {
                        return mraidbridge.localstorage;
                    } else {
                        return undefined;
                    }
                }
                return b.localStorage;
            } catch (m) {
                return undefined;
            }
        }, k = (/iphone|ipad|ipod/i).test(b.navigator.userAgent.toLowerCase()), i = a.domain.match(/imdb/g) !== null, l = "IMDbAdvertisingFrequencyCapping", f = function() {
            var n;
            if (j() && b.JSON) {
                n = j().getItem(l);
                if (n) {
                    try {
                        return JSON.parse(n);
                    } catch (m) {
                        j().removeItem(l);
                        console.log("Could not deserialize persistence variable");
                    }
                }
                return {};
            }
            return null;
        }, e = function(m) {
            if (j() && b.JSON) {
                j().setItem(l, JSON.stringify(m));
            }
        }, h = function() {
            var n = f(), m;
            if (n) {
                for (m in n) {
                    if (c(n[m])) {
                        delete n[m];
                    }
                }
                e(n);
            }
        }, c = function(m) {
            if (m && m.l && m.l > g) {
                return false;
            }
            return true;
        }, d = new Date().getTime(), g = d - 86400000;
        if (b.generic && b.generic.on_document_ready) {
            b.generic.on_document_ready(h);
        } else {
            if (a.readyState == "complete") {
                h();
            } else {
                b.addEventListener("load", h, false);
            }
        }
        return {
            should_autoplay: function(n) {
                var m = f();
                if (!m) {
                    return false;
                }
                return c(m[n]);
            },
            log_autoplay: function(n) {
                var m = f();
                if (m) {
                    m[n] = {
                        l: d
                    };
                    e(m);
                } else {
                    console.log("Autoplay logged, but localStorage is not available!");
                    if (b.generic && b.generic.monitoring && b.generic.monitoring.record_event) {
                        b.generic.monitoring.record_event("flash_persistence_failure", true);
                    }
                }
            },
            clear_autoplay: function() {
                e({});
            }
        };
    })();
})(window, document);
(function(l, q, j) {
    var i = l.ads_js_start ? new Date().getTime() - l.ads_js_start: null, s = navigator.userAgent, c = /MSIE/.test(s), a = /Firefox/.test(s), k = l.generic, r = {
        top_ad: "t",
        top_rhs: "tr"
    }, d = {
        injected_billboard: "top_ad",
        injected_navstrip: "top_ad"
    }, v = q.all ? function(y) {
        return q.all[y];
    }
    : function(y) {
        return q.getElementById(y);
    }, h = function(y) {
        return q.getElementsByTagName(y);
    }, m = function(z) {
        var y = (typeof z === "string" ? v(z) : z);
        if (y.src.length > 0 && y.src.indexOf("www.imdb.com")===-1 && y.src.indexOf("javascript:")===-1) {
            k.monitoring.record_event("iframe_not_sourceless_fdoc", false);
            return;
        }
        return y.contentWindow ? y.contentWindow.document : y.contentDocument;
    }, n = function(y) {
        return v(y);
    }, u = function(y) {
        return v(y + "_wrapper");
    }, p = function(z, A, y) {
        if (z.attachEvent) {
            z.attachEvent("on" + A, function() {
                y.apply(z, arguments);
            });
        } else {
            z.addEventListener(A, y, false);
        }
    }, e = Math.random() * 10000000000000000, x = "/images/a/ifb/doubleclick/indirect.html", o = {}, w = {};
    var g = (function() {
        var H, E, C = "as", F = function() {
            var J = "{";
            if (E) {
                if ("h" in E) {
                    J += A("h");
                }
                if (("h" in E) && ("n" in E)) {
                    J += ",";
                }
                if ("n" in E) {
                    J += A("n");
                }
            }
            J += "}";
            k.cookie.set(C, J, k.days_to_midnight || 1);
        }, A = function(K) {
            var J = "";
            jQuery.each(E[K], function(L, M) {
                J += '"' + L + '":[' + B(M[0]) + "," + B(M[1]) + "],";
            });
            return '"' + K + '":{' + J.substr(0, J.length - 1) + "}";
        }, y = function() {
            var J = k.cookie.get(C);
            if (J) {
                try {
                    E = jQuery.parseJSON(J);
                    H = H || E || {};
                } catch (K) {
                    H = H || (E = {});
                }
            }
        }, B = function(K) {
            var J = parseInt(K, 10);
            return isFinite(J) ? J : 0;
        }, D = function() {
            return (q.location.pathname === "/") ? "h" : "n";
        }, z = function(K, L) {
            var J = ad_utils.get_ad_object(K[0]);
            return ((K.css("display") === "none") ? 0 : parseInt(J.w, 10));
        }, I = function(L, N) {
            var M = 0, K = ad_utils.get_ad_object(L[0]), J = parseInt(K.h, 10);
            if (N === "top_ad") {
                if (jQuery("#nb20").hasClass("banner")) {
                    M =- 5;
                } else {
                    if (jQuery("#nb20").hasClass("supertab")) {
                        M =- 15;
                    }
                }
            } else {
                if (N === "injected_billboard") {
                    M = 20;
                }
            }
            if ("swfAutoMaxHeight" in L[0].contentWindow) {
                J = L[0].contentWindow.swfMinHeight;
            }
            return ((L.css("display") === "none" || J === 0) ? 0 : J + M);
        }, G = {
            top_ad: "t",
            top_rhs: "tr",
            injected_navstrip: "in",
            injected_billboard: "ib"
        };
        return {
            store: function() {
                k.on_document_ready(function(L) {
                    var K;
                    try {
                        y();
                        E = E || {};
                        K = E[D()] || {};
                        L.each(G, function(O, N) {
                            var M = L("#" + O);
                            if (M.length !== 0) {
                                K[N] = [z(M, O), I(M, O)];
                            }
                        });
                        E[D()] = K;
                        F();
                    } catch (J) {
                        consoleLog("Failed to store ad size cookie " + J.toString(), "ads");
                    }
                });
            }
        };
    })();
    var b = (function() {
        var z = function(A, B) {
            var C = m(A);
            if (!a) {
                C.open("text/html", "replace");
            }
            C.write("<body>" + B + "<script>document.close()<\/script></body>");
        }, y = function(C, D) {
            var B = "__srcless_" + Math.floor(Math.random() * 68719476735).toString(36), A = "<body><script>document.write(parent.ad_utils." + B + ");delete parent.ad_utils." + B + ";<\/script></body>";
            ad_utils[B] = D;
            C.src = "javascript:unescape('" + escape(A) + "')";
        };
        return {
            inject_slot: function(B, C) {
                var E = B.id, A = B.getAttribute("data-dart-params") || "", D = '<style>body{background:transparent;}</style><script type="data-doubleclick" src="http://ia.media-imdb.com/images/G/01/mobile/blank_pixel._V137875076_.gif' + A + '"><\/script>' + C + '<script>document.write("<script defer>parent.ad_utils.ad_table.' + E + '.fired=true;<\\/script>");<\/script>';
                if (c) {
                    y(B, D);
                } else {
                    z(B, D);
                }
            }
        };
    })();
    this.ad_utils = {
        ord: e,
        regenerateOrd: function() {
            consoleLog("Regenerating Client Side Ord", "ads");
            e = Math.random() * 10000000000000000;
            ad_utils.ord = e;
        },
        ad_table: {},
        ad_queue: [],
        low_latency_punt_ads: {},
        blank_ad_code: "<script>document.ad={h:0,w:0,scope:'blank'}<\/script>",
        slots_on_page: null,
        get_slot_iframe: n,
        setup_slot_metrics: function(y) {
            ad_utils.slot_events.listen(y, "iframe request reflow tagdeliver load", function(B) {
                var A = B.data.duration, z = B.data.timestamp;
                if (A === j && z) {
                    A = csm.duration(z);
                }
                k.monitoring.update_slot_metrics(B.slot, B.event, A);
            });
            ad_utils.slot_events.listen(y, "request", function(z) {
                var A = z.slot;
                k.monitoring.start_timing(A);
            });
            ad_utils.slot_events.listen(y, "request tagdeliver", function(B) {
                var C = B.slot, A = ad_utils.inject_ad.get_injectable_slots(C), z;
                for (z = 0; z < A.length; z++) {
                    ad_utils.slot_events.trigger(A[z], B.event, B.data);
                }
            });
            ad_utils.slot_events.listen(y, "load", function(A) {
                var z = A.data.type;
                if (!z) {
                    consoleError(A.slot + " loaded, but type was not reported");
                } else {
                    k.monitoring.stop_timing(y, z, true);
                }
                k.monitoring.update_slot_metrics(A.slot, "trueload");
            });
            ad_utils.slot_events.listen(y, "punt", function(A) {
                var z = A.event + "_" + A.data.type;
                k.monitoring.update_slot_metrics(A.slot, z);
            });
        },
        register_ad: function(y) {
            ad_utils.setup_slot_metrics(y);
            ad_utils.slot_events.trigger(y, "iframe");
            this.ad_table[y] = {
                slot: y
            };
        },
        gpt: (function() {
            var z = null, y = [];
            return {
                handle_response: function(A) {
                    var B;
                    z = A;
                    for (B = 0; B < y.length; B++) {
                        this.render_ad(y[B]);
                    }
                },
                render_ad: function(E) {
                    var B, D, C, A;
                    if (!z) {
                        y.push(E);
                        return;
                    }
                    B = z[E] || {};
                    D = n(E);
                    C = B._html_ || "";
                    A = D.getAttribute("data-roadblocked") !== null;
                    if (A) {
                        C = "<!-- roadblocked -->" + ad_utils.blank_ad_code;
                        ad_utils.slot_events.trigger(E, "request", {
                            duration: 0
                        });
                    }
                    b.inject_slot(D, C);
                }
            };
        })(),
        expand_ad: function(E) {
            var L = this, J = E.id, H = E.height, K = E.width;
            if ("expand_called" in this.ad_table[J]) {
                return;
            }
            var F = u(J), B = F.id, G = this.get_ad_object(E), I = v(J + "_before"), z = v(J + "_after"), A, D = csm.duration(), C, y = v(J + "_reflow_helper"), M = y ? y.offsetTop: null;
            if ((J + "_wrapper") !== B) {
                if (!k.has_document_readied()) {
                    k.on_document_ready(function() {
                        L.expand_ad(E);
                    });
                    return;
                }
            }
            if (!this.ad_table ||!this.ad_table[J]) {
                return;
            } else {
                this.ad_table[J].expanded = 1;
            }
            if (G) {
                if (!q.ads) {
                    q.ads = {};
                }
                q.ads[G.cid] = G;
                if ("w" in G) {
                    E.width = parseInt(G.w, 10);
                }
                if ("h" in G) {
                    E.height = parseInt(G.h, 10);
                }
                if ("z" in G && G.z) {
                    F.style.zIndex = G.z;
                    F.style.position = "relative";
                }
                if (G.st) {
                    this.expand_supertab(G);
                } else {
                    if (G.bb) {
                        this.expand_billboard(G);
                    } else {
                        if (J === "top_ad" && this.is_open(G)&&!G.clickroll&&!G.overlay) {
                            this.expand_top_banner();
                        }
                    }
                }
                if (G.wrap) {
                    this.expand_wrap(G);
                }
                if (G.bamf) {
                    this.expand_bamf(G, E);
                }
                if (G.inner_bamf) {
                    this.expand_inner_bamf(G);
                }
                if (G.relative_bamf) {
                    this.expand_relative_bamf(G);
                }
                if (this.is_open(G)) {
                    if (I) {
                        this.display_label(I);
                    }
                    if (z) {
                        this.display_label(z);
                    }
                } else {
                    this.collapse_ad(E);
                }
                if (G.styles) {
                    for (A in G.styles) {
                        k.override_style(A, G.styles[A].style);
                    }
                }
            }
            this.ad_table[J].expand_called = 1;
            k.on_document_ready(function(N) {
                N(E).trigger("expand_ad");
            });
            if (H === E.height && K === E.width) {
                ad_utils.slot_events.trigger(J, "reflow", {
                    duration: 0
                });
            } else {
                setTimeout(function() {
                    var O = (J === "top_ad" && ad_utils.is_open(G)&&!G.st) ? 10: 0, N = (y && y.offsetTop === M + O);
                    ad_utils.slot_events.trigger(J, "reflow", {
                        duration: N ? 0: D
                    });
                }, 10);
            }
            if (!(J in d)) {
                if (!ad_utils.slot_events.has_fired(J, "tagdeliver")) {
                    ad_utils.slot_events.trigger(J, "tagdeliver", {
                        duration: D
                    });
                }
            }
            g.store();
            q.body.className = q.body.className;
        },
        get_ad_object: function(E) {
            var J = E.id, B = m(E), G = null;
            try {
                G = B.ad;
            } catch (I) {
                consoleLog("Cannot access ad parameters: " + I.toString(), "ads");
            }
            if (!G) {
                var y = 0;
                var L = 0;
                var K = ["img", "object", "embed", "iframe"];
                var F, D, A;
                for (D in K) {
                    A = B.getElementsByTagName(K[D]);
                    for (F = 0; F < A.length; F++) {
                        var z = A[F], C, H;
                        C = z.scrollWidth || z.width;
                        H = z.scrollHeight || z.height;
                        if (C && C > 1) {
                            y = Math.max(y, parseInt(C, 10));
                        }
                        if (H && H > 1) {
                            L = Math.max(L, parseInt(H, 10));
                        }
                        consoleLog(J + " : estimated size : " + C + "," + H, "ads");
                    }
                }
                G = {
                    w: y.toString(),
                    h: L.toString(),
                    pid: "",
                    url: "",
                    aid: "0",
                    cid: "0"
                };
                if (y === 0 || L === 0) {
                    G.scope = "null";
                }
            } else {
                if (!("pid" in G)) {
                    G.pid = "DFP";
                }
            }
            B.ad = G;
            return G;
        },
        get_cornerstone_ad_object: function(y) {
            var z = r[y] + "adData";
            if ("aanResponse" in top.document && z in top.document.aanResponse) {
                return top.document.aanResponse[z];
            }
            return null;
        },
        get_mapped_amazon_slot_name: function(y) {
            return r[y] ? r[y] : y;
        },
        clean_up_slot_metrics: function(y) {
            var C = y.id, A = m(y), z = this.get_ad_object(y);
            try {
                k.monitoring.stop_timing(C, this.get_type_of_ad(z), true);
            } catch (B) {
                consoleLog("stop_timing failed: " + B.toString(), "ads");
            }
        },
        on_ad_load: function(A) {
            if (A.src.length > 0 && A.src.indexOf("www.imdb.com")===-1 && A.src.indexOf("javascript:")===-1) {
                k.monitoring.record_event("iframe_not_sourceless", false);
                return;
            }
            var E = A.id, C, z, B = this.ad_table[E], y;
            if (!B ||!B.fired) {
                consoleLog("deflected spurious onload event for " + E, "on_ad_load");
                return;
            }
            C = this.get_ad_object(A);
            z = this.get_type_of_ad(C);
            B.loaded = true;
            if (C.scope === "blank" || C.scope === "null") {
                if (A.getAttribute("data-original-width") === "0" && A.getAttribute("data-original-height") === "0") {
                    y = 0;
                } else {
                    y = k.monitoring.get_metric_value(E, "reflow");
                }
            } else {}
            try {
                if (!B.expanded) {
                    this.expand_ad(A);
                }
            } catch (D) {
                consoleLog("Exception during expand_ad:" + D.message);
            }
            ad_utils.slot_events.trigger(E, "load", {
                duration: y,
                type: z
            });
        },
        is_open: function(y) {
            return y && "w" in y && "h" in y && y.w > 0 && y.h > 0 && y.scope !== "blank";
        },
        expand_supertab: function(A) {
            var z = v("nb15"), y = v("nb20");
            if (z) {
                z.className = "supertab";
            } else {
                if (y) {
                    y.className = "supertab";
                }
            }
        },
        expand_billboard: function(H) {
            var aa = q, O = parent, B = "injected_billboard", S = n(B), E = u(B), C = m(B), R = C.getElementsByTagName("body"), J = R.length === 1 ? R[0]: C.createElement("body"), K = v("top_rhs_wrapper"), Y = K ? (K.parentElement || K.parentNode): null, M = H.bb_close, I = H.bb_close_tracker, X = H.bb_show, F = H.bb_show_tracker, Q = "ax", ab, Z, D, G, A, W = false;
            if (!E) {
                return false;
            }
            E.className = (E.className ? E.className + " " : "") + "billboard";
            function T() {
                var af = k.cookie.get(Q), ac = af && af.split(/o|c/), ad = af && af.split(/\d*/), ag = {}, ae;
                if (ac && ad) {
                    if (ad[0] === "") {
                        ad.shift();
                    }
                    for (ae = 0; ae < ad.length; ++ae) {
                        ag[ac[ae]] = ad[ae];
                    }
                }
                Z = ag;
            }
            function z() {
                var ad = "", ac = new Date(), ae, af;
                for (af in Z) {
                    if (Z.hasOwnProperty(af)) {
                        ad += af + Z[af];
                    }
                }
                k.cookie.set(Q, ad, k.days_to_midnight || 1);
            }
            function L(ah, ai) {
                var ae = C.createElement("div"), af = ah.getElementsByTagName(ai), ad, ag, ac = "";
                for (ad = 0; ad < af.length; ++ad) {
                    ag = af[ad];
                    ag.parentNode.removeChild(ag);
                    ae.appendChild(ag);
                    ac += ae.innerHTML;
                    ae.removeChild(ag);
                }
                return ac;
            }
            function P() {
                if (parseInt(S.style.height, 10) !== parseInt(C.ad.h, 10)) {
                    S.contentWindow.minimize();
                }
                S.style.display = "none";
                if (!K&&!W) {
                    k.on_document_ready(V);
                } else {
                    y();
                }
            }
            function V() {
                U();
                y();
            }
            function U() {
                if (!W) {
                    K = v("top_rhs_wrapper");
                    Y = K ? (K.parentElement || K.parentNode) : null;
                    if (K) {
                        try {
                            E.parentNode.removeChild(D);
                            Y.insertBefore(D, K);
                            D.style.marginRight = "";
                            D.style.marginTop = "";
                        } catch (ac) {
                            consoleLog("caught a duplicate call to attempt_reattach_show_ad_button", "ads");
                        }
                    }
                }
            }
            function y() {
                if (X !== j && X !== "") {
                    D.style.display = "block";
                }
                T();
                Z[H.aid] = "c";
                z();
                ab = "";
                ab += L(C, "object");
                ab += L(C, "embed");
                g.store();
                E.style.margin = "0px";
                W = true;
            }
            function N() {
                D.style.display = "none";
                S.style.display = "block";
                T();
                Z[H.aid] = "o";
                z();
                if (ab) {
                    J.innerHTML = ab + J.innerHTML;
                }
                C.getElementById("billboard_close_button").onclick = P;
                g.store();
                E.style.margin = "20px 19px";
            }
            D = aa.createElement("div");
            D.id = "billboard_show_button";
            D.style.display = "none";
            if (Y) {
                Y.insertBefore(D, K);
            } else {
                ad_utils.slot_events.listen("top_rhs", "iframe", function() {
                    U();
                });
                D.style.marginRight = "19px";
                D.style.marginTop = "7px";
                E.parentNode.insertBefore(D, E);
            }
            if (H.bb === 1) {
                G = C.createElement("div");
                G.id = "billboard_close_button";
                G.style.cssFloat = "right";
                G.style.cursor = "pointer";
                G.style.position = "absolute";
                G.style.top = 0;
                G.style.right = 0;
                G.style.zIndex = 5000000;
                G.innerHTML = M || "";
                G.onclick = function() {
                    O.ad_utils.ns.get("billboard").close();
                };
                J.appendChild(G);
                O.ad_utils.ns.register("billboard", "close", function() {
                    P();
                    typeof I !== "undefined" && I();
                });
                D.innerHTML = X;
                D.onclick = function() {
                    N();
                    typeof F !== "undefined" && F();
                };
                T();
                if (H.aid in Z && Z[H.aid] === "c") {
                    P();
                }
            }
            return true;
        },
        expand_top_banner: function() {
            var y = v("nb15");
            if (y) {
                y.className = "banner";
            } else {
                v("nb20").className = "banner";
            }
        },
        expand_bamf: function(A, y) {
            var z = A.bamf;
            k.extend(y.style, z.style);
        },
        expand_inner_bamf: function(z) {
            var y = z.inner_bamf;
            var A = v(y.targetId);
            if (A && y.node) {
                k.insert_after(y.node, A);
            }
        },
        expand_relative_bamf: function(A) {
            var y = A.relative_bamf;
            var B = v(y.targetId);
            var z;
            if (y.relation === "insert_after") {
                z = k.insert_after;
            } else {
                if (y.relation === "insert_before") {
                    z = k.insert_before;
                } else {
                    if (y.relation === "insert_inside") {
                        z = k.insert_inside;
                    }
                }
            }
            if (B && y.node) {
                z(y.node, B);
            }
        },
        expand_wrap: function(z) {
            if (!z.styles) {
                z.styles = {};
            }
            var y;
            if (z.sleeves) {
                y = {
                    wrapper: {
                        style: {
                            background: z.wrap
                        }
                    },
                    root: {
                        style: {
                            background: "none",
                            "box-shadow": "none"
                        }
                    },
                    pagecontent: {
                        style: {
                            height: "100%"
                        }
                    }
                };
            } else {
                y = {
                    "styleguide-v2": {
                        style: {
                            background: z.wrap
                        }
                    },
                    root: {
                        style: {
                            "background-color": "transparent",
                            "box-shadow": "none"
                        }
                    },
                    pagecontent: {
                        style: {
                            height: "100%"
                        }
                    },
                    nb20: {
                        style: {
                            background: "none"
                        }
                    }
                };
            }
            k.extend(z.styles, y);
        },
        expand_label: function(y) {
            y.className = y.className.replace(/hidden/, "");
        },
        display_label: function(y) {
            y.style.display = "block";
            y.style.visibility = "visible";
        },
        collapse_ad: function(y) {
            var A = y.id, z = function(C) {
                var B = v(C);
                if (B) {
                    B.style.display = "none";
                }
            };
            y.style.display = "none";
            z(A + "_before");
            z(A + "_after");
        },
        get_type_of_ad: function(y) {
            if (!y) {
                return "null";
            }
            if (y.scope) {
                return y.scope;
            }
            return "got_ad";
        },
        show_ad_feedback: function(G) {
            function H() {
                B("#ad_feedback_" + G).remove();
                return false;
            }
            function C(Q) {
                var M = B(l), P = B(q), O = (M.width() - 300) / 2 + P.scrollLeft(), N = (M.height() - 320) / 2 + P.scrollTop();
                Q.css({
                    top: N < 0 ? 0: N,
                    left: O
                });
            }
            try {
                var B = jQuery, z = n(G), L = z.contentWindow, I = ad_utils.get_ad_object(z), K, E = L.location.hash.match(/#([^;]*);/), A = {
                    adId: (I ? I.aid : ""),
                    cid: (I ? I.cid : ""),
                    page_id: l.location.href.substr(0, 255),
                    pagesubtype: (E ? E[1] : ""),
                    slot: G
                }, y = A.adId + ";" + A.cid + ";" + A.slot, J = B("#ad_feedback_container"), D = 0;
                B("div.dfp_slot iframe").each(function() {
                    var O = this.id, N = this.contentDocument, M = ad_utils.get_ad_object(this);
                    if (!(O in w) && M) {
                        K = ad_utils.get_cornerstone_ad_object(O);
                        if (K) {
                            w[O] = {
                                aid: K.adId,
                                cid: K.creativeId,
                                pid: K.adNetwork
                            };
                        } else {
                            w[O] = {
                                aid: M.aid,
                                cid: M.cid,
                                pid: M.pid
                            };
                        }
                        w[O].url = M.url;
                        w[O].dim = M.w + "x" + M.h;
                    }
                });
                B.each(w, function(M, N) {
                    A["slot_" + D] = M;
                    A["cid_" + D] = N.cid;
                    A["aid_" + D] = N.aid;
                    A["pid_" + D] = N.pid;
                    A["dim_" + D] = N.dim;
                    A["url_" + D] = N.url;
                    D++;
                });
                if (J.length === 0) {
                    J = B('<iframe id="ad_feedback_container">');
                    J.addClass("hidden").attr({
                        name: "ad_feedback_container",
                        scrolling: "no",
                        frameborder: "no",
                        marginheight: "0",
                        marginwidth: "0",
                        allowtransparency: "yes"
                    });
                    J[0].hide = function() {
                        B(this).addClass("hidden");
                    };
                    J[0].show = function() {
                        B(this).removeClass("hidden");
                    };
                    J[0].isHidden = function() {
                        return J.hasClass("hidden");
                    };
                    B("body").append(J);
                }
                if (J.attr("src") === "" || J.attr("ref") !== y) {
                    J.unbind().load(function() {
                        J[0].show();
                        C(J);
                        B(this).unbind();
                    }).attr("src", "/ads/feedback#" + B.param(A)).attr("ref", y);
                } else {
                    if (J[0].isHidden()) {
                        J[0].show();
                        C(J);
                    } else {
                        J[0].hide();
                        return false;
                    }
                }
            } catch (F) {
                consoleLog("ad feedback failure : " + F, "ads");
                H();
            }
            return false;
        },
        report_ad_data: function(C, A) {
            var z = C, D, y = {};
            if (z === top) {
                return;
            }
            try {
                while (z.parent !== top) {
                    z = z.parent;
                }
                D = z.frameElement.id;
            } catch (B) {
                consoleLog("could not determine ad slot: " + B);
                return;
            }
            $.each("aid cid pid url dom dim".split(" "), function(E, F) {
                if (F in A) {
                    y[F] = A[F];
                }
            });
            w[D] = y;
        },
        ns: (function() {
            var A = {}, z = function(E, B, D) {
                var C;
                if (typeof E === "string") {
                    C = E;
                } else {
                    C = E.frameElement.id;
                }
                y(C)[B] = D;
            }, y = function(B) {
                return (A[B] = A[B] || {});
            };
            return {
                register: z,
                get: y
            };
        })(),
        inject_ad: (function() {
            var A = {}, y = {}, B = {}, z = function(C) {
                consoleLog(C, "inject_ad");
            };
            return {
                render: function(E) {
                    var C = n(E), D = A[E];
                    if (!B[E]) {
                        z(E + " rendered");
                        B[E] = 1;
                        ad_utils.ad_table[E] = {
                            slot: E,
                            injected: true
                        };
                        if (D) {
                            b.inject_slot(C, D);
                        } else {
                            b.inject_slot(C, '<script>document.ad = {h:"0",w:"0",scope:"blank"}<\/script>');
                        }
                    }
                },
                register: function(E) {
                    var D = d[E], C = this;
                    z(E + " registered");
                    y[E] = 1;
                    if (A[E]) {
                        C.render(E);
                    } else {
                        ad_utils.slot_events.listen(D, "load", function() {
                            C.render(E);
                        });
                    }
                    ad_utils.setup_slot_metrics(E);
                    ad_utils.slot_events.trigger(E, "iframe");
                },
                inject: function(D, C) {
                    z(D + " injected");
                    A[D] = C;
                    if (y[D]) {
                        this.render(D);
                    }
                },
                get_injectable_slots: function(E) {
                    var C = [], D;
                    for (D in d) {
                        if (d[D] === E) {
                            C.push(D);
                        }
                    }
                    return C;
                }
            };
        })(),
        weblab: (function() {
            var y = {};
            return {
                set_treatment: function(z, A) {
                    y[z] = A;
                },
                get_treatment: function(z) {
                    return y[z];
                }
            };
        })(),
        attach_aax_callback: function(z, y) {
            y.aax_render_ad = function(A) {
                if (A && A.html) {
                    y.document.write(A.html);
                    y.document.got_aax_ad = "got_ad";
                } else {
                    y.document.got_aax_ad = "blank";
                }
                ad_utils.slot_events.trigger(z, "tagdeliver");
            };
        },
        inject_serverside_ad: function(C, B) {
            var A = n(C), y = A.getAttribute("data-roadblocked") !== null, z = A.getAttribute("data-blank-serverside") !== null;
            ad_utils.slot_events.trigger(C, "request", {
                duration: 0
            });
            if (y) {
                B = "<!-- roadblocked -->" + ad_utils.blank_ad_code;
            } else {
                if (z) {
                    B = "<!-- blank -->" + ad_utils.blank_ad_code;
                }
            }
            b.inject_slot(A, B);
        },
        aax_render_ad: function(B) {
            var z = n(B), y = z.getAttribute("data-aax-url"), A = "<script>parent.ad_utils.attach_aax_callback('" + B + "', window);<\/script><script src=\"" + y + '"><\/script>';
            z.onload = function() {
                var D = ad_utils.ad_table[B], C;
                if (!D ||!D.fired) {
                    consoleLog("deflected spurious cornerstone onload event for " + B, "aax_render_ad");
                    return;
                }
                if (m(z).got_aax_ad !== "got_ad") {
                    z.style.display = "none";
                    C = "blank";
                } else {
                    C = frame_doc(z).got_aax_ad;
                }
                ad_utils.slot_events.trigger(B, "load", {
                    type: C
                });
            };
            ad_utils.slot_events.trigger(B, "request");
            b.inject_slot(z, A);
        },
        register_punt_ad: function(B, A, y, z) {
            this.low_latency_punt_ads[B] = {
                w: A,
                h: y,
                markup: z
            };
        },
        inject_punt_ad: function(E, F) {
            var B = E.frameElement, G = B.id, A = m(B), z = null, D = null, y = (A && A.ad && A.ad.aid) ? A.ad.aid: "0", C = (A && A.ad && A.ad.cid) ? A.ad.cid: "0";
            if (G in this.low_latency_punt_ads) {
                z = this.low_latency_punt_ads[G];
                A.ad = {
                    w: z.w,
                    h: z.h,
                    pid: "",
                    url: "",
                    aid: y,
                    cid: C
                };
                this.expand_ad(B);
                D = z.markup.replace(/\[PUNT_ORIGIN\]/, encodeURIComponent('{"punt_origin":"' + F + '"}'));
                A.write(D);
                ad_utils.slot_events.trigger(G, "punt", {
                    type: "got_ad"
                });
            } else {
                ad_utils.slot_events.trigger(G, "punt", {
                    type: "blank"
                });
            }
        },
        fp: (function() {
            return l.imdbads.frequencyCapping;
        })(),
        tandem: (function() {
            var y = {};
            return {
                register_swf: function(z, A) {
                    consoleLog("Register swf: " + z + " " + A, "Tandem");
                    if (y[A]) {
                        consoleError("swf already registered: " + z + " " + A, "Tandem");
                        return false;
                    }
                    y[A] = {
                        id: z
                    };
                },
                send_message: function(A, B, D) {
                    var C = y[A], z, F;
                    consoleLog("Sending message: " + A + " " + B + " " + D, "Tandem");
                    if (C) {
                        for (F in ad_utils.ad_table) {
                            if (m(F) && m(F).getElementById(C.id)) {
                                z = m(F).getElementById(C.id);
                            }
                        }
                        if (v(C.id)) {
                            z = v(C.id);
                        }
                        try {
                            if (c) {
                                z.receiveTimelineMessage(D, B);
                            } else {
                                z.getElementsByTagName("embed")[0].receiveTimelineMessage(D, B);
                            }
                            return true;
                        } catch (E) {
                            consoleError("Unable to call receiveTimelineMessage on: " + A, "Tandem");
                            consoleError(E);
                            return false;
                        }
                    } else {
                        consoleError("Attempted message to : " + A + " before registered.", "Tandem");
                        return false;
                    }
                }
            };
        })(),
        set_slots_on_page: function(y) {
            ad_utils.slots_on_page = y;
        },
        ads_header: (function() {
            var z = false, y = [];
            return {
                on_done: function(B) {
                    if (z) {
                        try {
                            B();
                        } catch (A) {
                            consoleWarn(A);
                        }
                    } else {
                        y.push(B);
                    }
                },
                done: function() {
                    var B;
                    z = true;
                    for (B = 0; B < y.length; B++) {
                        try {
                            y[B]();
                        } catch (A) {
                            consoleWarn(A);
                        }
                    }
                    y = null;
                }
            };
        })()
    };
    k.install(k, {
        should_jQuery_noConflict: (l.$&&!l.jQuery),
        one_way_send_record: [],
        insert_after: function(y, A) {
            try {
                A.parentNode.insertBefore(y, A.nextSibling);
            } catch (z) {
                A.parentNode.appendChild(y);
            }
        },
        insert_before: function(y, z) {
            z.parentNode.insertBefore(y, z);
        },
        insert_inside: function(y, z) {
            z.appendChild(y);
        },
        extend: function(y, A) {
            var z;
            for (z in A) {
                if (typeof A[z] === "object") {
                    if (y[z] !== A[z]) {
                        if (typeof y[z] === "undefined") {
                            y[z] = {};
                        }
                        this.extend(y[z], A[z]);
                    }
                } else {
                    y[z] = A[z];
                }
            }
        },
        override_style: function(C, A, B) {
            var y = "#" + C, z;
            for (z in A) {
                A[z] += " !important";
            }
            k.add_json_style(y, A, B);
        },
        add_json_style: function(y, B, D, C) {
            var A = y + "{", z;
            for (z in B) {
                A += z + ":" + B[z] + ";";
            }
            A += "}";
            k.add_css_style(A, D, C);
        },
        add_css_style: function(F, z, E) {
            var A = "css-style-generic", y = [A], C, G, D;
            if (!z ||!z.length) {
                z = A;
            } else {
                y.push(z);
            }
            if (!E) {
                E = "a";
            }
            for (D in y) {
                if (!v(y[D])) {
                    C = q.createElement("style");
                    C.setAttribute("type", "text/css");
                    C.id = y[D];
                    h("head")[0].appendChild(C);
                }
            }
            C = v(z);
            if (C.styleSheet && "cssText" in C.styleSheet) {
                G = (E === "a" ? C.styleSheet.cssText : "") + F;
                C.styleSheet.cssText = G;
            } else {
                G = (E === "a" ? C.innerHTML : "") + F;
                try {
                    C.innerHTML = G;
                } catch (B) {
                    C.innerText = G;
                }
            }
        },
        add_css_file: function(y, A) {
            if (!A) {
                A = "css-file-generic";
            }
            var z = v(A);
            if (!z) {
                z = q.createElement("link");
                z.setAttribute("type", "text/css");
                z.rel = "stylesheet";
                z.id = A;
                h("head")[0].appendChild(z);
            }
            z.href = y;
        },
        set: function(z, y) {
            var A = z.split(":");
            if (A[0] === "cookie") {
                k.cookie.set(A[1], y);
            } else {
                k.cache.set(A[1], y);
            }
        },
        get: function(y) {
            var z = y.split(":");
            if (z[0] === "cookie") {
                return k.cookie.get(z[1]);
            } else {
                return k.cache.get(z[1]);
            }
        },
        erase: function(y) {
            var z = y.split(":");
            if (z[0] === "cookie") {
                return k.cookie.erase(z[1]);
            } else {
                return k.cache.erase(z[1]);
            }
        },
        cache: {
            set: function(y, z) {
                o[y] = z;
            },
            get: function(y) {
                return o[y];
            },
            erase: function(y) {
                delete o[y];
            }
        },
        load_script: function(z) {
            var y = q.createElement("script");
            y.type = "text/javascript";
            y.src = z;
            h("head")[0].appendChild(y);
        },
        load_script_notify: function(B, y) {
            var z = q.createElement("script"), A = false;
            z.type = "text/javascript";
            z.src = B;
            z.onload = z.onreadystatechange = function() {
                var C = this.readyState;
                if ((A) || (C && C !== "complete" && C !== "loaded")) {
                    return;
                }
                A = true;
                q.body.removeChild(z);
                if ("function" === typeof(y)) {
                    y(B);
                }
            };
            q.body.appendChild(z);
        },
        one_way_send: function(y) {
            imageObj = new Image(0, 0);
            imageObj.src = y;
            this.one_way_send_record.push(imageObj);
        },
        load_when_visible: function(y, E) {
            var B = 0;
            var D = jQuery(l);
            var C = D.height() + D.scrollTop();
            if (jQuery("#" + y).length) {
                var A = jQuery(jQuery("#" + y).get(0));
                var z = A.offset().top;
                if (C > z) {
                    E(y);
                } else {
                    D.scroll(function() {
                        C = D.height() + D.scrollTop();
                        z = A.offset().top;
                        if ((C > z)&&!B) {
                            B = 1;
                            E(y);
                        }
                    });
                }
            } else {
                E(y);
            }
        },
        unload_plugins: function() {
            var D = [q], G, y, C, z, F, A, E = new RegExp("^(" + location.protocol + "//" + location.hostname + ")?(/.*)?$"), B = function(H) {
                var I, J;
                for (I = H.length - 1; I >= 0; I--) {
                    J = H[I];
                    J.parentNode.removeChild(J);
                }
            };
            while (D.length) {
                G = D.pop();
                B(G.getElementsByTagName("object"));
                B(G.getElementsByTagName("embed"));
                C = G.getElementsByTagName("iframe");
                for (A = C.length - 1; A >= 0; A--) {
                    z = C[A];
                    if (E.test(z.src)) {
                        F = m(z);
                        if (F) {
                            D.push(F);
                        }
                    } else {
                        B([z]);
                    }
                }
            }
        },
        addEventListener: function(z, A, y) {
            p(z, A, y);
        }
    });
    this.custom = {
        amazon: {
            load_callback: function(y) {
                return;
            }
        },
        indirect: {
            close: function(y) {
                if (y.location.href.match("floater")) {
                    custom.floater.close(y.frameElement.id);
                }
            }
        },
        full_page: {
            style_id: "custom__full_page__generated_styles",
            data_url: "/images/a/js/graffiti_data.js",
            apply_fast: function(D, E) {
                var A = this.styles[D.treatment], G, y, I, C = [], F, H, B, z;
                for (G in A) {
                    if (A.hasOwnProperty(G)) {
                        y = A[G];
                        for (B = 0; B < y.length; B++) {
                            I = y[B];
                            F = E ? null : I["default"];
                            if (I.fixed) {
                                F = I.fixed;
                            } else {
                                if (I.name in D) {
                                    F = D[I.name];
                                }
                            }
                            if (F) {
                                if (typeof F === "string") {
                                    F = [F];
                                }
                                H = "";
                                for (z = 0; z < F.length; z++) {
                                    H += "  " + G + " : " + F[z] + (I.important ? " !important" : "") + ";\n";
                                }
                                C.push(I.selector + "{\n" + H + "}\n");
                            }
                        }
                    }
                }
                k.add_css_style(C.join("\n"), this.style_id, "o");
            },
            apply: function(z) {
                var y = this;
                q.getElementById("root").style.boxShadow = "none";
                l.generic.on_document_ready(function() {
                    y.settings = z;
                    if ("styles" in y) {
                        y._apply();
                    } else {
                        l.generic.load_script_notify(y.data_url, function() {
                            y._apply();
                        });
                    }
                });
            },
            _apply: function() {
                var A, B = this.settings.ARGS.split(/&/), z = {}, y = this, D = "/* ARGS:" + this.settings.ARGS + " */\n";
                jQuery.each(B, function(F, G) {
                    var E = /^(.*)=(.*)$/.exec(G);
                    if (E.length === 3) {
                        z[E[1]] = unescape(E[2].replace(/\+/g, " "));
                    }
                });
                A = this.invert_styles(z.treatment);
                jQuery.each(A, function(E, F) {
                    if (F.fixed) {
                        D += y.format_css(F, F.fixed);
                    } else {
                        if (z[E] || F["default"]) {
                            D += y.format_css(F, z[E]);
                        }
                    }
                });
                try {
                    jQuery("style#" + this.style_id).remove();
                    jQuery("head").append(jQuery('<style type="text/css">').attr("id", this.style_id).html(D));
                } catch (C) {
                    k.add_css_style(D, this.style_id, "o");
                }
            },
            invert_styles: function(z) {
                var A = ["default", "important", "fixed"], y = {};
                jQuery.each(this.styles[z], function(C, B) {
                    jQuery.each(B, function(D, E) {
                        var F = y[E.name] = {
                            style: C,
                            selector: E.selector
                        };
                        jQuery.each(A, function(H, G) {
                            if (E[G]) {
                                F[G] = E[G];
                            }
                        });
                    });
                });
                return y;
            },
            format_css: function(y, z) {
                return y.selector + " { " + y.style + " : " + (z ? z : y["default"]) + (y.important ? " !important;" : ";") + "}\n";
            }
        },
        floater: {
            close: function(y) {
                k.extend(v(y), {
                    style: {
                        width: "0px",
                        height: "0px"
                    }
                });
            },
            launch: function(y, G, D, E, C, A, z) {
                var B = q.createElement("iframe"), F = typeof E === "string" ? v(E): E;
                if (D !== "none") {
                    setTimeout(function() {
                        custom.floater.close(z);
                    }, D * 1000);
                }
                k.extend(B, {
                    id: z,
                    name: z,
                    src: y,
                    width: G[0] + "px",
                    height: G[1] + "px",
                    frameBorder: "0",
                    scrolling: "no",
                    allowTransparency: "true",
                    style: {
                        marginLeft: A[0] + "px",
                        marginTop: A[1] + "px",
                        zIndex: A[2],
                        position: "absolute"
                    }
                });
                C(B, F);
            },
            set: function(C, A, B, y, z, E) {
                var D = Math.ceil(Math.random() * 9999999), F = "floater_" + D;
                k.cache.set(F, C);
                custom.floater.launch(x + "?source=cache:" + F, A, B, y, z, E, F);
                return F;
            }
        }
    };
    var f = function(y, z) {
        return ((z)) ? '<param name="' + y + '" value="' + z + '">' : "";
    };
    var t = function(y, z) {
        return ((z)) ? " " + y + '="' + z + '" ' : "";
    };
    this.flashAdUtils = {
        makeFlashAd: function(F) {
            var Q = F.id, G = F.src, R = F.width, I = F.height, K = F.bgcolor, ab = F.wmode || "opaque", H = F.salign, ad = F.scale, Z = F.extraParams, aa = F.extraTAGs, T = F.minVersion, y = escape(F.clickThru), Y = F.clickTAGs, B = function(af) {
                return af !== null && af !== j && (af + "").length;
            }, X = function(af) {
                return isFinite(parseInt(af, 10));
            }, D = "", W, ae, L;
            if (!B(Q) ||!B(G) ||!X(R) ||!X(I)) {
                consoleLog("makeFlashAd: Missing required params", "flashAdUtils");
                return;
            }
            if (!flashAdUtils.canPlayFlash(T)) {
                consoleLog("makeFlashAd: Current flash version too low", "flashAdUtils");
            }
            if ((Y)) {
                for (W = 0; W < Y.length; W++) {
                    if (Y[W]) {
                        D = D + "&clickTAG" + (W + 1) + "=" + escape(Y[W]);
                    }
                }
            }
            if ((aa)) {
                for (ae in aa) {
                    D = D + "&" + escape(ae) + "=" + escape(aa[ae]);
                }
            }
            D += "&ord=" + ad_utils.ord;
            if (q.getElementById("navbar")) {
                if (q.getElementById("megaMenu")) {
                    D += "&navbar=mega";
                } else {
                    D += "&navbar=legacy";
                }
            } else {
                D += "&navbar=null";
            }
            var z = "";
            var O = "";
            try {
                var N = {
                    width: 1,
                    height: 1,
                    src: 1,
                    bgcolor: 1,
                    wmode: 1,
                    salign: 1,
                    scale: 1,
                    flashvars: 1
                };
                for (L in Z) {
                    if (N[L]) {
                        continue;
                    }
                    z = z + f(L, Z[L]);
                    O = O + t(L, Z[L]);
                }
            } catch (J) {}
            var V = f("bgcolor", K);
            var E = t("bgcolor", K);
            var U = f("wmode", ab);
            var C = t("wmode", ab);
            var S = f("scale", ad);
            var A = t("scale", ad);
            var ac = f("salign", H);
            var M = t("salign", H);
            var P = '<object  classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"  width="' + R + '"  height="' + I + '"  id="swf_' + Q + '"><param name="movie" value="' + G + '"><param name="flashvars" value="env=WEB&clickTAG=' + y + "&" + D + '"><param name="play" value="true"><param name="quality" value="high"><param name="allowScriptAccess" value="always">' + S + ac + V + U + z + '<div style="margin-left:0.1px"><embed src="' + G + '"  flashvars="env=WEB&clickTAG=' + y + "&" + D + '"  quality="high"  play="true"  width="' + R + '"  height="' + I + '"  name="swf_' + Q + '"  allowScriptAccess="always"  type="application/x-shockwave-flash"  pluginspage="http://www.macromedia.com/go/getflashplayer" ' + A + M + E + C + O + "></embed></div></object>";
            return P;
        },
        canPlayFlash: function(z) {
            var D = false;
            var G = parseInt(z, 10);
            if (!z || G < 9) {
                z = 9;
            } else {
                z = G;
            }
            var y = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin: 0;
            if (y && navigator.plugins["Shockwave Flash"]) {
                var I = navigator.plugins["Shockwave Flash"].description.split(" "), H, B;
                for (B = 0; B < I.length; ++B) {
                    if (isNaN(parseInt(I[B], 10))) {
                        continue;
                    }
                    H = parseInt(I[B], 10);
                }
                D = H >= z;
            } else {
                if (navigator.userAgent && navigator.userAgent.indexOf("MSIE") >= 0 && (navigator.appVersion.indexOf("Win")!==-1)) {
                    try {
                        var C = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + z);
                        C.AllowScriptAccess = "always";
                        var F = C.GetVariable("$version");
                        var E = F.match(/([0-9]+)/);
                        D = E[1] >= z;
                    } catch (A) {}
                }
            }
            return D;
        }
    };
    g.store();
    k.on_document_ready(function(z) {
        var y;
        z(l).load(function() {
            g.store();
        });
    });
    k.on_document_ready(function() {
        p(l, "unload", function() {
            k.unload_plugins();
        });
    });
    if (i) {
        k.on_document_ready(function() {
            k.monitoring.record_metric("ads_js_response", i);
        });
    }
})(window, document);
(function(b, a, d) {
    var c = (b.custom = b.custom || {});
    c.strings = (function() {
        return {
            chained_replace: function(f) {
                var h = this, e;
                for (e = 0; e < f.length; e++) {
                    var g = f[e];
                    h = h.replace(g[0], g[1]);
                }
                return h;
            }
        };
    })();
})(window, document);
(function(b, a, d) {
    var c = (b.custom = b.custom || {});
    c.doubleclick = (function() {
        var j = [], e = [[/%3B/g, ";"], [/%3D/g, "="], [/%2C/g, ","], [/%3F/g, "?"]], h = /(\[|%5B)CLIENT_SIDE_ORD(\]|%5D)/g, l = /(\[|%5B)CLIENT_SIDE_KEYVALUES(\]|%5D)/, n = "4215", k = function(q) {
            q = q.replace(h, ad_utils.ord);
            q = q.replace(l, j.join(";"));
            return c.strings.chained_replace.call(q, e);
        }, i = /\[PLAYLISTINDEX\]/, p = /\[PLAYLISTID\]/, g = /\[PLAYERTYPE\]/, o = /\[CLIENT_SIDE_ATTRIBUTE\]/g, m = "http://www.amazon.com/aan/2009-05-01/imdb/default?slot=sitewide-iframe&u=[CLIENT_SIDE_ATTRIBUTE]&ord=[CLIENT_SIDE_ATTRIBUTE]", f = false;
        return {
            ord_regex: h,
            construct_url: function(r) {
                var q = (r.match(";ifb=pf;")) ? "pfadj": "adj";
                var s = escape(r.substring(1, r.length));
                s = k(s);
                return a.location.protocol + "//ad.doubleclick.net/N" + n + "/" + q + "/" + s;
            },
            construct_video_url: function(s, q) {
                if (f) {
                    ad_utils.regenerateOrd();
                }
                var r = m.replace(o, ad_utils.ord);
                (new Image()).src = r;
                f = true;
                s = s.replace(h, ad_utils.ord);
                s = s.replace(l, j.join(";"));
                s = s.replace(i, "vi%3D" + (q.listindex || "0"));
                s = s.replace(p, q.list ? "vl%3D" + q.list : "");
                s = s.replace(g, "vt%3D" + q.playertype);
                s = s.replace(o, ad_utils.ord);
                return a.location.protocol + "//pubads.g.doubleclick.net/gampad/ads?iu=/" + n + "/" + s;
            },
            add_client_side_keyvalue: function(q, r) {
                j.push(q + "=" + r);
            }
        };
    })();
})(window, document);
(function(b) {
    var f = {}, e = {}, d = function(i, m, j, k) {
        var l = new c(m, j, k ? k : {});
        try {
            i(l);
        } catch (h) {
            consoleError(h);
        }
    }, a = function(i, h) {
        return i + ":" + h;
    }, c = function(j, h, i) {
        this.slot = j;
        this.event = h;
        this.data = i;
    }, g = function(h, i) {
        return (function() {
            if (--i === 0) {
                h.apply(this, arguments);
            }
        });
    };
    b.slot_events = {
        listen: function(o, k, l) {
            var h = k.replace(/(^\s+|\s+$)/g, "").split(/\s+/), n, m, j;
            for (j = 0; j < h.length; j++) {
                m = h[j];
                n = a(o, m);
                if (n in e) {
                    d(l, o, m, e[n]);
                } else {
                    (f[n] = f[n] || []).push(l);
                }
            }
            return this;
        },
        listen_all: function(k, l, j) {
            var m = g(j, k.length), h;
            for (h = 0; h < k.length; h++) {
                this.listen(k[h], l, m);
            }
        },
        trigger: function(n, k, l) {
            var m = a(n, k), j = f[m] || [], h;
            if (m in e) {
                generic.monitoring.record_event(m + "_already_fired", false);
                consoleError("attempted to fire " + m + ", but it has already fired!");
                return;
            }
            e[m] = l;
            for (h = 0; h < j.length; h++) {
                d(j[h], n, k, l);
            }
            return this;
        },
        has_fired: function(i, h) {
            return a(i, h) in e;
        }
    };
})(window.ad_utils);
(function(a) {
    a.install(a, {
        extended_split: function(g, f, b) {
            var d = [], c = 0, e;
            while (!b || d.length < b - 1) {
                e = g.indexOf(f, c);
                if (e===-1) {
                    break;
                }
                d.push(g.substring(c, e));
                c = e + f.length;
            }
            d.push(g.substring(c));
            return d;
        },
        object_from_querystring: function(f) {
            var d = f.split("&"), e = {}, b, c;
            if (f === "") {
                return {};
            }
            for (b = 0; b < d.length; b++) {
                c = a.extended_split(d[b], "=", 2);
                e[c[0]] = (c.length === 1) ? null : decodeURIComponent(c[1]);
            }
            return e;
        },
        cookie: {
            set: function(f, h, i) {
                var c, b, e, g;
                if (i) {
                    var d = new Date();
                    d.setTime(d.getTime() + (i * 24 * 60 * 60 * 1000));
                    c = "; expires=" + d.toGMTString();
                } else {
                    c = "";
                }
                b = document.location.host.split(".");
                e = b.pop();
                g = b.pop();
                document.cookie = f + "=" + escape(h) + c + "; path=/; domain=" + g + "." + e;
            },
            get: function(c) {
                var b = document.cookie.split(";"), d, e;
                for (d = 0; d < b.length; d++) {
                    if (typeof b[d] !== "string") {
                        continue;
                    }
                    e = b[d].split("=");
                    if (e[0] && e[1] && e[0].replace(/\s/, "") === c) {
                        return unescape(e[1]);
                    }
                }
                return null;
            },
            erase: function(b) {
                this.set(b, "", - 1);
            }
        }
    });
})(window.generic);
(function(i, m, e) {
    var n = (i.generic = i.generic || {}), c = {}, j = i.IMDbTimer, b = ("IMDbTimer" in i) ? i.IMDbTimer.starttime: NaN, o = m.location.hash.match("debug=1"), h = o || (!isNaN(b) && Math.random() < 0.25), g = o || (Math.random() < 0.25), l = "none", f = "1P";
    ad_slots = (function() {
        var p = {}, t = {}, q = {
            top_ad: 1,
            top_rhs: 1,
            injected_navstrip: 1,
            injected_billboard: 1,
            navboard: 1,
            bottom_ad: 2,
            middle_rhs: 2,
            btf_rhs2: 2,
            rhs_cornerstone: 2
        }, u = {
            top_ad: 1,
            top_rhs: 1,
            bottom_ad: 1
        }, r = {
            reflow: 1,
            "ad-delivery": 1,
            load: 1
        }, s = {};
        n.on_document_ready(function(v) {
            v(i).bind("beforeunload", function() {
                var x, w;
                for (x in p) {
                    w = p[x];
                    if (w.request && w.load === e) {
                        n.monitoring.record_event("ad_load_failure." + x);
                    }
                }
                n.monitoring.send_metrics();
            });
        });
        return {
            is_slot_monitored: function(v) {
                return (v in q) || (v in u);
            },
            is_twilight_slot: function(v) {
                return (v in q);
            },
            is_twilight_core_slot: function(v) {
                return (v in q && q[v] === 1);
            },
            is_forester_slot: function(v) {
                return (v in u);
            },
            is_forester_event: function(w, v) {
                return this.is_forester_slot(w) && v in r;
            },
            set_metric_value: function(x, v, w) {
                (p[x] = p[x] || {})[v] = w;
            },
            get_metric_value: function(w, v) {
                if (w in p) {
                    return p[w][v];
                }
            },
            core_slots: function() {
                var w = {}, v;
                for (v in q) {
                    if (q[v] === 1) {
                        w[v] = 1;
                    }
                }
                return w;
            },
            record_slot_status: function(w) {
                var v = w.match(/^(.*)\.(got_ad|null|blank|fail)$/);
                if (v) {
                    s[v[1]] = v[2];
                }
            },
            core_slots_have_an_ad: function() {
                var w, v = false;
                for (w in ad_slots.core_slots()) {
                    if (!(w in s)) {
                        return null;
                    }
                    if (s[w] === "got_ad") {
                        v = true;
                    }
                }
                return v;
            },
            set_partner: function(w, v) {
                t[w] = v;
                return this;
            },
            get_partner: function(v) {
                return t[v];
            },
            set_remnant_partner: function(w, v) {
                return ad_slots.set_partner(w, v);
            },
            get_remnant_partner: function(v) {
                return ad_slots.get_partner(v);
            }
        };
    })();
    var k = "http://www.imdb.com/twilight/?";
    var d = (function() {
        var q = (function() {
            var s = "DART";
            return {
                prepare_and_send_metric: function(t, w, v, u) {
                    r({
                        slot: w,
                        ad_network_name: s,
                        aid: t.aid,
                        cid: t.cid,
                        slot_event: v,
                        time: u
                    });
                }
            };
        })(), p = (function() {
            var s = "PDA", u = 20, t = 100;
            return {
                prepare_and_send_metric: function(A, z, y) {
                    var x, w = u, v;
                    v = function() {
                        x = ad_utils.get_cornerstone_ad_object(A);
                        if (x) {
                            r({
                                slot: A,
                                ad_network_name: s,
                                aid: x.adId,
                                cid: x.creativeId,
                                slot_event: z,
                                time: y
                            });
                        } else {
                            if (--w) {
                                setTimeout(v, t);
                            } else {}
                        }
                    };
                    v();
                }
            };
        })(), r = function(x) {
            var B, y, F, z, t, u, D, C, w, E, A;
            if (!g ||!ad_slots.is_forester_slot(x.slot)) {
                return;
            }
            B = "http://fls-na.amazon.com/1/display-ads-cx/1/OP/?";
            y = "LMET";
            F = "imdb";
            z = ad_utils.get_mapped_amazon_slot_name(x.slot);
            t = page_type;
            u = x.ad_network_name;
            D = x.aid;
            C = x.cid;
            E = x.time;
            w = x.slot_event;
            A = '{"s":"' + F + '","l":"' + z + '","p":"' + t + '","n":"' + u + '","a":"' + D + '","c":"' + C + '","m":"' + w + '","v":"' + E + '"}';
            if (o) {
                consoleLog(A + " metrics sent", "forester");
            }
            n.one_way_send(B + y + escape(A));
        };
        return {
            send_forester_metric: function(s, v, u, t) {
                q.prepare_and_send_metric(s, v, u, t);
                p.prepare_and_send_metric(v, u, t);
            },
            set_page_type: function(s) {
                page_type = s;
            }
        };
    })();
    this.csm = (function() {
        var p = {};
        return {
            measure: function(r, q) {
                this.record(r, this.duration(), q);
            },
            record: function(s, w, q, r) {
                var u = p[s], t;
                if (h&&!csm.metrics[s]) {
                    n.monitoring.record_metric(s + (r ? r : ""), w, q);
                }
                csm.metrics[s] = w;
                if (u) {
                    for (t = 0; t < u.length; t++) {
                        try {
                            u[t](w, s);
                        } catch (v) {
                            consoleLog("error invoking callback for " + s, "csm");
                        }
                    }
                    delete p[s];
                }
            },
            duration: function(q) {
                return (q ? q : + new Date()) - b;
            },
            listen: function(q, r) {
                if (q in csm.metrics) {
                    setTimeout(r, 0);
                } else {
                    (p[q] = p[q] || []).push(r);
                }
            },
            metrics: {}
        };
    })();
    n.monitoring = {
        event_starts: {},
        event_stops: {},
        events_to_stop: 0,
        event_duration: {},
        event_counters: [],
        all_events_started_flag: false,
        twilight_info: "",
        twilight_client: (function() {
            var q = navigator.userAgent, p;
            p = q.match(/MSIE (\d+)/);
            if (p && p[1] >= 6) {
                return "ie" + p[1];
            }
            p = q.match(/Mac OS.*Firefox\/(\d+)/);
            if (p) {
                return p[1] === "3" ? "firefox3-mac" : "firefox-mac";
            }
            p = q.match(/Firefox\/(\d+)/);
            if (p) {
                return p[1] === "3" ? "firefox3" : "firefox";
            }
            if (q.indexOf("Chrome")!==-1) {
                return "chrome";
            }
            if (q.indexOf("Safari")!==-1) {
                return "safari";
            }
            if (q.indexOf("Opera")!==-1) {
                return "opera";
            }
            return "Other";
        })(),
        isTwilightActiveSample: h,
        page_type: "",
        start_timing: function(p) {
            this.start_timing_at(p, new Date().getTime());
        },
        start_timing_at: function(p, q) {
            this.event_starts[p] = q;
            this.events_to_stop++;
        },
        stop_timing: function(r, q, p) {
            var t = new Date().getTime(), s = r;
            if (!this.event_starts[r]) {
                return;
            }
            this.event_stops[r] = t;
            if (q) {
                s += "." + q;
            }
            this.record_metric(s, t - this.event_starts[r]);
            delete this.event_starts[r];
            this.events_to_stop--;
            if (p || (this.all_events_started_flag && this.events_to_stop === 0)) {
                this.send_metrics();
            }
        },
        record_event: function(r, p) {
            var q;
            this.event_counters.push(r);
            if (r in c) {
                for (weblab in c[r]) {
                    q = r + "__weblab_" + weblab;
                    this.event_counters.push(q);
                    consoleLog(q, "twilight");
                }
            }
            consoleLog(r, "twilight");
            if (p) {
                this.send_metrics();
            }
        },
        record_metric: function(s, t, p) {
            var r, q;
            ad_slots.record_slot_status(s);
            this.event_duration[s] = t;
            consoleLog(s + "," + t, "twilight");
            if (s in c) {
                for (r in c[s]) {
                    q = s + "__weblab_" + r;
                    this.event_duration[q] = t;
                    consoleLog(q + "," + t, "twilight");
                }
            }
            if (p) {
                this.send_metrics();
            }
        },
        send_metrics: function() {
            var q = k + this.twilight_info, s, u = [], p = 0, y = "", w = function(z, A) {
                u.push(function() {
                    p++;
                    return "&Operation." + p + "=" + z + "&OperationTiming." + p + "=" + A;
                });
            }, v = function(z) {
                u.push(function() {
                    p++;
                    return "&Counter." + p + "=" + z;
                });
            }, r = function() {
                if (y.length) {
                    n.one_way_send(q + y + "&ord=" + ad_utils.ord);
                    consoleLog("metrics sent (" + p + ")", "twilight");
                    y = "";
                    p = 0;
                }
            }, x = 1700, t;
            for (s in this.event_duration) {
                w(s, this.event_duration[s]);
            }
            this.event_duration = {};
            for (t = 0; t < this.event_counters.length; t++) {
                v(this.event_counters[t]);
            }
            this.event_counters = [];
            for (t = 0; t < u.length; t++) {
                y += u[t]();
                if (y.length + q.length > x) {
                    r();
                }
            }
            r();
        },
        set_twilight_info: function(q, p, u, r, t, s) {
            if (j && j.pt === "java") {
                q += ".java";
            }
            this.twilight_info = "PageType=" + q + "&Geo=" + p + "&tw_ord=" + u + "&timestamp=" + r + "&Client=" + this.twilight_client + "&Site=" + s;
            k = t;
        },
        set_forester_info: function(p) {
            d.set_page_type(p);
        },
        all_events_started: function() {
            this.all_events_started_flag = true;
        },
        set_partner: function(q, p) {
            var r = q.frameElement.id;
            ad_slots.set_partner(r, p);
        },
        get_partner: function(p) {
            return ad_slots.get_partner(p) || l;
        },
        set_remnant_partner: function(q, p) {
            n.monitoring.set_partner(q, p);
        },
        get_remnant_partner: function(p) {
            return n.monitoring.get_partner(p);
        },
        set_remnant_partner_fallback: function(r, q) {
            var p = ad_slots.get_partner(r);
            if (typeof(p) === "undefined") {
                ad_slots.set_partner(r, q);
            } else {
                ad_slots.set_partner(r, p + "_" + q);
            }
        },
        update_slot_metrics: function(w, s, t) {
            var v, u, r = ad_utils.get_slot_iframe(w), p = r ? r.contentWindow.document.ad: null, q = "." + n.monitoring.get_partner(w);
            if (!(w) ||!ad_slots.is_slot_monitored(w) || ad_slots.get_metric_value(w, s) !== e) {
                return;
            }
            ad_slots.set_metric_value(w, s, (e !== t) ? t : csm.duration());
            u = ad_slots.get_metric_value(w, s);
            if (p && ad_slots.is_forester_event(w, s)) {
                d.send_forester_metric(p, w, s, u);
                if (s === "load") {
                    d.send_forester_metric(p, w, "ad-delivery", ad_slots.get_metric_value(w, "load") - ad_slots.get_metric_value(w, "request"));
                }
            }
            if (ad_slots.is_twilight_slot(w)) {
                csm.record("csm_" + w + "_" + s, u, 0, q);
                if ("load" === s && "." + l !== q && "." + f !== q) {
                    csm.record("csm_" + w + "_deliver", u - ad_slots.get_metric_value(w, "tagdeliver"), 0, q);
                }
                if (ad_slots.is_twilight_core_slot(w)) {
                    a.send(s);
                }
            }
        },
        get_metric_value: function(q, p) {
            return ad_slots.get_metric_value(q, p);
        },
        enable_weblab_metrics: function(q, p, t) {
            var s, r;
            for (s = 0; s < t.length; s++) {
                r = t[s];
                c[r] = c[r] || {};
                c[r][q + "_" + p] = 1;
            }
        }
    };
    n.on_document_ready(function(q) {
        var p;
        q(i).bind("beforeunload", function(r) {
            var s = (m.location + "").split("#", 2)[0];
            i.name = "clicktoresponse:" + (new Date()).getTime() + ":" + s;
        });
        if (!n.monitoring.isTwilightActiveSample) {
            return;
        }
        csm.measure("csm_ready");
        q(i).load(function() {
            csm.measure("csm_load", true);
        });
        q("div.dfp_slot").each(function() {
            n.monitoring.record_event("dfp_slot");
        });
        p = parseInt(q("#servertime").attr("time"), 10);
        if (!isNaN(p)) {
            n.monitoring.record_metric("csm_server", p);
        }
    });
    (function() {
        if (m.location.protocol === "http:") {
            var p = i.name.match(/^clicktoresponse:(\d+):(.*)$/), q;
            if (p) {
                if (m.referrer === p[2] && j) {
                    q = j.starttime - p[1];
                    j.clicktoresponse = q;
                    n.monitoring.record_metric("click_to_response", q);
                }
                i.name = "";
            }
        }
    })();
    var a = (function() {
        var t, p = [], q = ad_slots.core_slots(), s = function() {
            var u;
            if (!r) {
                r = true;
                consoleLog("Finalized core ads on current page: " + p.join(","));
                for (u in events_to_send_once_finalized) {
                    a.send(u);
                }
            }
        }, r = false;
        events_to_send_once_finalized = {};
        for (t in q) {
            ad_utils.slot_events.listen(t, "iframe", function(u) {
                p.push(u.slot);
                if (p.length === q.length) {
                    s();
                }
            });
        }
        n.on_document_ready(s);
        return {
            send: function(v) {
                var x = 0, w, u;
                if (r) {
                    for (u = 0; u < p.length; u++) {
                        w = ad_slots.get_metric_value(p[u], v);
                        if (e === w) {
                            return;
                        }
                        x = Math.max(x, w);
                    }
                    csm.record("csm_core_ads_" + v, x);
                } else {
                    events_to_send_once_finalized[v] = 1;
                }
            }
        };
    })();
})(window, document);
if (window.IMDbTimer && window.IMDbTimer.events) {
    (function(c, b, a) {
        generic.send_csm_head_metrics = function() {
            c.record("csm_head_pre_title", a.csm_head_pre_title - b);
            c.record("csm_head_post_title", a.csm_head_post_title - b);
            c.record("csm_head_pre_css", a.csm_head_pre_css - b);
            c.record("csm_head_post_css", a.csm_head_post_css - b);
            c.record("csm_head_pre_icon", a.csm_head_pre_icon - b);
            c.record("csm_head_post_icon", a.csm_head_post_icon - b);
            c.record("csm_head_pre_ads", a.csm_head_pre_ads - b);
        };
    })(csm, IMDbTimer.starttime, IMDbTimer.events);
}(function(e, b) {
    var f = "top_ad injected_billboard injected_navstrip top_rhs middle_rhs btf_rhs2 rhs_cornerstone bottom_ad".split(" "), l = "top_ad top_rhs injected_navstrip injected_billboard navboard".split(" "), m, n = ad_utils.slot_events, h = function(i) {
        consoleLog(i, "ads-amazon-csm");
    }, c = {}, k = {}, g = {}, a = {}, d = window.ue_t0, j;
    if (typeof e !== "function" || typeof b !== "function") {
        h("uet() / uex() not available, will not record CSM metrics");
        return;
    }
    for (j = 0; j < f.length; j++) {
        (function(i) {
            n.listen(i, "iframe", function() {
                c[i] = new Date().getTime();
                e("bb", i, {
                    wb: 1
                });
            });
            n.listen(i, "request", function() {
                k[i] = new Date().getTime();
                e("be", i, {
                    wb: 1
                });
            });
            n.listen(i, "tagdeliver", function() {
                g[i] = new Date().getTime();
                e("af", i, {
                    wb: 1
                });
            });
            n.listen(i, "reflow", function(p) {
                var o = new Date().getTime();
                if (p.data.duration === 0 && d) {
                    o = d + 10;
                }
                a[i] = o;
                e("cf", i, {
                    wb: 1
                }, o);
            });
            n.listen(i, "load", function() {
                var p = generic.monitoring.get_remnant_partner(i), o = i + "." + p;
                if (p !== "none") {
                    e("bb", o, {
                        wb: 1
                    }, c[i]);
                    e("be", o, {
                        wb: 1
                    }, k[i]);
                    e("af", o, {
                        wb: 1
                    }, g[i]);
                    e("cf", o, {
                        wb: 1
                    }, a[i]);
                    b("ld", o, {
                        wb: 1
                    });
                }
                b("ld", i, {
                    wb: 1
                });
            });
        })(f[j]);
    }
    ad_utils.ads_header.on_done(function() {
        var o = [], i = function(r) {
            var q, p = 0;
            for (q in r) {
                p = Math.max(p, r[q]);
            }
            return p;
        };
        for (j = 0; j < l.length; j++) {
            m = l[j];
            if (m in ad_utils.slots_on_page) {
                o.push(m);
            }
        }
        h("determined core_slots: " + o.join(","));
        n.listen_all(o, "iframe", function() {
            e("bb", "core_ads", {
                wb: 1
            }, i(c));
        });
        n.listen_all(o, "request", function() {
            e("be", "core_ads", {
                wb: 1
            }, i(k));
        });
        n.listen_all(o, "tagdeliver", function() {
            e("af", "core_ads", {
                wb: 1
            }, i(g));
        });
        n.listen_all(o, "reflow", function() {
            e("cf", "core_ads", {
                wb: 1
            }, i(a));
        });
        n.listen_all(o, "load", function() {
            b("ld", "core_ads", {
                wb: 1
            });
        });
    });
})(window.uet, window.uex);
(function() {
    var a = function(c) {
        try {
            c();
        } catch (b) {
            consoleError(b.message, "imdbads.cmd");
        }
    };
    window.imdbads = window.imdbads || {};
    imdbads.cmd = imdbads.cmd || [];
    ad_utils.ads_header.on_done(function() {
        var c = 0, b = imdbads.cmd || [];
        for (c = 0; c < b.length; c++) {
            a(b[c]);
        }
        imdbads.cmd = {
            push: function(d) {
                a(d);
            }
        };
    });
})();
