(function() {
    var h, q = null, a = {}, u = {
        searchSuggestion: "Search"
    }, i = {
        searchTheBBCSearchHint: function() {
            var z = h("#blq-search-q"), x = h("#blq-search-form"), w = u.searchSuggestion;
            function y(B) {
                this.si = B;
                this.ph = (function() {
                    return !!("placeholder" in document.createElement("input"))
                })()
            }
            y.prototype = {
                set: function(B) {
                    (this.ph) ? this.si.attr("placeholder", B) : this.si.val(B)
                },
                get: function() {
                    return (this.ph) ? this.si.attr("placeholder") : this.si.val()
                },
                isEmpty: function() {
                    return (this.ph)?!this.si.attr("placeholder") : !this.si.val()
                }
            };
            var A = new y(z);
            z.bind("focusout", function(B) {
                if (A.isEmpty()) {
                    A.set(w)
                }
            });
            z.bind("focusin", function(B) {
                if (A.get() === w) {
                    A.set("")
                }
            });
            x.bind("submit", function(B) {
                if (A.get() === w) {
                    A.set("")
                }
            });
            if (A.isEmpty() && h(document.activeElement) !== z) {
                A.set(w)
            }
        },
        addAutosuggest: function() {
            var w = function() {
                var x = blq.mastheadPanels.getActive();
                if (x) {
                    x.activate()
                }
            };
            h("#blq-search-q").bind("focus", function(x) {
                w()
            });
            h("#blq-search-q").attr("autocomplete", "off").bind("focus", function(x) {
                h(this).unbind(x);
                require(["gelui-1"], function(K) {
                    var N, F, J = h("#blq-search-q"), E = h("#blq-search-btn"), M = 6, H = h("#blq-container-inner").hasClass("blq-rtl"), y = h("#blq-mast").hasClass("blq-has-promo"), G, D = "", A = h("#blq-nav-search"), C = h("#blq-container-outer").attr("class").match(/blq-(\w+)-(domestic|worldwide)/) || [], B = h("#blq-container").attr("class").match(/blq-lang-\w+(-\w+)?/) || [], I = h("#blq-nav-search input[name=scope]"), L = "";
                    L = (I[0]) ? I.serialize() : "scope=all";
                    blq.autoSuggest = N = new K.AutoSuggest(J, "http://search.bbc.co.uk/suggest?&" + L + "&format=blq-1&q={input}");
                    F = N.overlay.$wrapper;
                    F.attr("id", "blq-autosuggest").addClass("blq-rst");
                    F.find(".gelui-overlay-state").addClass(B[0]);
                    F.find(".gelui-overlay-container").addClass(C[0]);
                    if (H) {
                        N.overlay.$wrapper.addClass("blq-rtl")
                    }
                    if (y) {
                        F.find(".gelui-overlay-container").addClass("blq-has-promo");
                        G = h('<span id="blq-search-mask"></span>').appendTo(A);
                        N.overlay.signals.show.add(function() {
                            G.show()
                        });
                        N.overlay.signals.hide.add(function() {
                            G.hide()
                        })
                    }
                    function z() {
                        return N.overlay.nextTo(A, "bottom", "left")
                    }
                    N.signals.displayitems.removeAll();
                    N.signals.displayitems.add(function() {
                        E.removeClass("loading");
                        w();
                        h(window).resize(z);
                        z().show()
                    });
                    N.signals.inputchanged.add(function() {
                        E.addClass("loading");
                        D = J.val();
                        h("#blq-masthead").addClass("blq-masthead-focus")
                    });
                    N.signals.dataready.removeAll();
                    N.signals.dataready.add(function(R) {
                        var Q = this, O = R.data;
                        Q.$suggestionList.empty();
                        for (var P = 0; P < O[1].length; P++) {
                            Q.signals.appenditem.dispatch({
                                query: O[0],
                                item: O[1][P].title,
                                suggid: O[1][P].id
                            })
                        }
                        Q.$suggestionList.children().bind({
                            mouseenter: function() {
                                Q.signals.itemhighlighted.dispatch({
                                    item: h(this)[0]
                                })
                            },
                            click: function() {
                                Q.signals.itemselected.dispatch({
                                    item: h(this)[0],
                                    id: O[1][h(this).index()]["id"]
                                })
                            }
                        });
                        Q.signals.displayitems.dispatch()
                    }, N);
                    N.signals.itemselected.removeAll();
                    N.signals.itemselected.add(function(Q) {
                        var O = this;
                        if (h(Q.item).text() != "") {
                            this.$input.val(h(Q.item)[0].suggestion);
                            var P = h("#suggid");
                            if (!P.length) {
                                P = h('<input type="hidden" name="suggid" id="suggid" />');
                                this.$input.closest("form").prepend(P)
                            }
                            P.val(h(Q.item)[0].suggid)
                        }
                        this.$input.closest("form").trigger("submit")
                    }, N);
                    N.signals.appenditem.removeAll();
                    N.signals.appenditem.add(function(U) {
                        if (this.$suggestionList.children().length >= M) {
                            return false
                        }
                        var Q = U.item, T = Q, W = U.suggid, V = U.query, P = 28, O = 25, S = "", X = [], R = "";
                        X.push(T.toLowerCase().indexOf(V.toLowerCase()));
                        X.push(X[0] + V.length);
                        if (T.length > P) {
                            R = 'title="' + T.replace('"', "&quot;") + '"';
                            T = T.substring(0, O);
                            S = "&hellip;"
                        }
                        if ( - 1 !== X[0]) {
                            T = T.substring(0, X[0]) + "<em>" + T.substring(X[0], X[1]) + "</em>" + T.substring(X[1])
                        }
                        T = h('<li role="option" ' + R + ">" + T + S + "</li>");
                        T[0].suggestion = Q;
                        T[0].suggid = W;
                        this.$suggestionList.append(T)
                    }, N);
                    N.signals.itemhighlighted.add(function(R) {
                        var O = R.keyPressed, Q = this.keyCode, P = h(R.item), S = this.$input;
                        if (O && (O === Q.DOWNARROW || O === Q.UPARROW)) {
                            if (P.length > 0) {
                                S.val(P[0].suggestion)
                            } else {
                                S.val(D)
                            }
                        }
                    }, N)
                })
            })
        },
        setARIAValues: function() {
            h("#blq-search-form").attr("role", "search");
            h("#blq-nav").attr("role", "navigation");
            h("#blq-foot").attr("role", "contentinfo");
            h("#blq-footlinks .blq-footlinks-row, #blq-footlinks .blq-footlinks-row-list").attr("role", "presentation")
        },
        defaultIStatsTracking: function() {
            if (typeof require !== "undefined") {
                require(["istats-1"], function(w) {
                    function x() {
                        w.track("internal", {
                            region: document.getElementById("blq-blocks"),
                            linkLocation: "blq-mast-home-gvl3_5"
                        });
                        w.track("internal", {
                            region: document.getElementById("blq-nav-main"),
                            linkLocation: "blq-nav-main-gvl3_5"
                        });
                        w.track("internal", {
                            region: document.getElementById("blq-foot"),
                            linkLocation: "blq-foot-gvl3_5"
                        })
                    }
                    if (typeof require.ready === "function") {
                        require.ready(x)
                    } else {
                        require(["domReady"], function(y) {
                            y(x)
                        })
                    }
                })
            }
        },
        mastheadFocusBehaviour: function() {
            var y = h("#blq-masthead"), A = h("#blq-mast-background"), x = "blq-masthead-focus";
            var w = false, z = null, B = 200;
            blq.masthead = {
                notify: function(E, D) {
                    if (E.open) {
                        var C = z;
                        z = E.open;
                        if (!w) {
                            blq.masthead.fade("in", function() {
                                if (z.open) {
                                    z.open()
                                }
                                D && D()
                            })
                        } else {
                            if (C && C != z && typeof C.close === "function") {
                                C.close()
                            }
                            if (z.open) {
                                z.open()
                            }
                            D && D()
                        }
                    } else {
                        if (E.closed) {
                            setTimeout(function() {
                                if (w && z === E.closed) {
                                    blq.masthead.fade("out", D);
                                    z = null
                                } else {
                                    D && D()
                                }
                            }, 200)
                        }
                    }
                },
                fade: function(C, D) {
                    w = (C === "in");
                    if (!y.hasClass("blq-mast-bg-white")) {
                        if (C === "in") {
                            y.addClass(x)
                        } else {
                            y.removeClass(x)
                        }
                    }
                    setTimeout(function() {
                        D && D()
                    }, B)
                }
            }
        },
        initMasthead: function() {
            var w = h("#blq-panel-template-more").html().replace("<![CDATA[", "").replace("]]>", ""), x = h("#blq-panel-template-promo").html().replace("<![CDATA[", "").replace("]]>", ""), y = h("#blq-masthead"), z = h('<div id="blq-panel" class="blq-rst"></div>');
            y.append(z);
            z.css("display", "none");
            z.append(w);
            z.append(x);
            require(["istats-1"], function(A) {
                h(function() {
                    A.track("internal", {
                        region: document.getElementById("blq-panel-more"),
                        linkLocation: "blq-nav-links-gvl3_5"
                    });
                    A.track("internal", {
                        region: document.getElementById("blq-panel-promo"),
                        linkLocation: "blq-promo-links"
                    })
                })
            });
            b();
            r()
        },
        accessibilityLinks: function() {
            h('#blq-acc-links a[href^="#"]').click(function() {
                h("#" + h(this).attr("href").slice(1) + "").attr("tabIndex", - 1).focus()
            })
        }
    };
    function o() {
        var D, x, E, A = h("#id-status a").first(), C = h("#id-status"), w = h("#id-status-nav"), y, z = 200, B = 166;
        D = h("#blq-mast-bar").width();
        x = parseInt(h("#blq-blocks")[0].offsetWidth);
        E = parseInt(h("#blq-nav")[0].offsetWidth);
        y = D - (x + E);
        if (y > z) {
            y = B;
            C.width(y);
            C.addClass("id-small-nav")
        }
        A.width(y - parseInt(A.outerWidth(true) - A.width()));
        A[0].style.backgroundPosition = (A[0].offsetWidth - 16) + "px center";
        w.width(y)
    }
    function r() {
        var x, E = h("#id-status.blq-id-v4"), B, y, A, F, H = {
            parentNode: E,
            closeOnClick: true,
            closeOnEscape: true
        }, w, z;
        if (E.length == 0) {
            return 
        }
        x = h("#blq-sign-in"), B = h("#blq-idstatus-link"), y = h("#blq-idstatus-text"), A = h(".blq-dropdown-arrow");
        o();
        require(["idcta/idcta-1", "id-statusbar-config", "gelui-1"], function(L, M, I) {
            function K() {
                h("#blq-masthead").bind("focusin", function(O) {
                    if (F.isShown() && h(O.target).closest("#id-status.blq-id-v4").length === 0) {
                        F.close()
                    }
                });
                z = L.getNameFromCookie();
                if (z) {
                    z = C(L.getNameFromCookie(), 14)
                } else {
                    z = M.translation_signedin
                }
                y.text(z);
                B.removeClass("blq-idstatus-signin").addClass("blq-idstatus-signout");
                E.find(".id-out").removeClass("id-out").addClass("id-in");
                A.removeClass("blq-hide");
                F = new I.Overlay(h("#id-status-nav"), H);
                F.$wrapper.container.attr("tabindex", - 1);
                F.open = F.show;
                F.close = F.hide;
                F.signals.afterhide.add(function() {
                    blq.masthead.notify({
                        closed: F
                    })
                });
                B.bind("keydown", function(O) {
                    if (N(O)) {
                        J(O)
                    }
                });
                B.bind("click", J)
            }
            L.signals.signedIn.add(function() {
                L.unbindSigninClickTo(B);
                K()
            });
            L.signals.signinShown.add(D);
            if (L.hasCookie()) {
                K()
            } else {
                y.text(M.translation_signedout);
                L.bindSigninClickTo(B, {
                    cta: E,
                    locale: M.locale,
                    policyname: M.policyname,
                    ptrt: M.ptrt,
                    useOverlay: M.use_overlay,
                    callback: G
                });
                B.removeClass("blq-idstatus-signout").addClass("blq-idstatus-signin")
            }
            E.show();
            B.attr("href", M.signin_url);
            function J(O) {
                if (F.isShown()) {
                    F.close()
                } else {
                    setTimeout(function() {
                        blq.masthead.notify({
                            open: F
                        }, function() {
                            if (N(O)) {
                                F.$wrapper.find("a").first().focus()
                            }
                        })
                    }, 30)
                }
                O.preventDefault()
            }
            function N(O) {
                return (O.which === 13)
            }
        });
        function C(J, I) {
            if (J.length > I) {
                return J.substring(0, I - 1) + "…"
            }
            return J
        }
        function G(I) {
            x.find(".id-out").addClass("id-status-working")
        }
        function D() {
            x.find(".id-out").removeClass("id-status-working")
        }
    }
    window.blqOnDomReady = function() {
        var w = arguments;
        require(["jquery-1.9"], function(x) {
            x(document).ready.apply(null, w)
        })
    };
    function s() {
        var x = h("#blq-nav-search"), w = h("#blq-search-q")[0], y;
        x.bind("focusout", function(z) {
            y = setTimeout(function() {
                blq.masthead.notify({
                    closed: w
                })
            }, 30)
        });
        x.bind("focusin", function(z) {
            clearTimeout(y);
            blq.masthead.notify({
                open: w
            })
        })
    }
    function e() {
        if (window.lately) {
            require(["jquery-1.9"], function(w) {
                w(function() {
                    var y = document.getElementById("blq-panel-promo"), z = 500, x = 250;
                    w("#blq-nav-promo a").mouseenter(A).keydown(function(B) {
                        if (B.which === 13 || B.which === 40) {
                            A(B)
                        }
                    }).mouseleave(function() {
                        clearTimeout(blq.promoLoadingTimer)
                    });
                    function A(F) {
                        var C = w(F.target).closest("a")[0], B = blq.mastheadPanels.panels[C.panel], G = B.content, D;
                        function E(H) {
                            if (blq.mastheadPanels.mode === "keyboard") {
                                w("#blq-panel").show();
                                G.css({
                                    visibility: "visible"
                                }).show().find(".panel-header-link").first().focus()
                            } else {
                                if (H) {
                                    G.fadeIn(x)
                                }
                            }
                        }
                        if (B.feedInitiated) {
                            E();
                            return 
                        }
                        D = w("#lately-loading-template").html().replace("<![CDATA[", "").replace("]]>", "");
                        G.html(D);
                        if (blq.mastheadPanels.mode === "keyboard") {
                            G.find(".panel-loading").attr("tabindex", "-1").focus()
                        }
                        blq.promoLoadingTimer = setTimeout(function() {
                            B.feedInitiated = true;
                            require(["lately-1"], function(J) {
                                var I = J.getTemplate("lately-" + C.panel + "-template");
                                J.getFeed("http://open.live.bbc.co.uk/navpromo/promos/london2012").done(function(M) {
                                    var L;
                                    if (M.error) {
                                        K(M)
                                    } else {
                                        L = J.render(I, M);
                                        G.fadeOut(x, function() {
                                            G.html(L);
                                            if (blq.mastheadPanels.current === blq.mastheadPanels.panels[C.panel]) {
                                                E(true)
                                            }
                                            H(G)
                                        })
                                    }
                                }).fail(function(L) {
                                    K(L)
                                });
                                function K(M) {
                                    var L = J.getTemplate("lately-error-template");
                                    w(y).fadeOut(x, function() {
                                        y.innerHTML = L;
                                        w(this).fadeIn(x, function() {
                                            if (blq.mastheadPanels.mode === "keyboard") {
                                                G.find(".panel-error").attr("tabindex", "-1").focus()
                                            }
                                        })
                                    })
                                }
                            });
                            function H(I) {
                                I.find(".panel-clickable").hover(function(J) {
                                    w(this).addClass("active")
                                }, function(J) {
                                    w(this).removeClass("active")
                                }).click(function(J) {
                                    if (w(J.target).closest("a").length === 0) {
                                        document.location = w(this).find("a").first().attr("href");
                                        J.preventDefault()
                                    }
                                })
                            }
                        }, z)
                    }
                })
            })
        }
    }
    function j() {
        var w = document.getElementById("blq-masthead");
        w.className = w.className
    }
    function b() {
        require(["panelset", "panel"], function(A, B) {
            var z, w, y, C, x = [];
            blq.mastheadPanels = z = new A();
            blq.mastheadPanels.getActive = function() {
                return {
                    activate: function() {
                        blq.mastheadPanels.switching = true;
                        blq.mastheadPanels.activatePanel()
                    }
                }
            };
            z.close = function() {
                blq.mastheadPanels.switching = true;
                blq.mastheadPanels.activatePanel()
            };
            h(z.events).bind("panelset.firstopened", function() {
                blq.masthead.notify({
                    open: z
                });
                if (blq.autoSuggest) {
                    blq.autoSuggest.overlay.hide("fade")
                }
                z.queue.unshift(function(D) {
                    setTimeout(function() {
                        h("#blq-panel").css({
                            display: "block"
                        });
                        D()
                    }, 220)
                })
            });
            h(z.events).bind("panelset.lastclosed", function() {
                if (!blq.mastheadPanels.switching) {
                    blq.masthead.notify({
                        closed: z
                    })
                }
                h("#blq-panel").css("display", "none")
            });
            h(z.events).bind("panelset.panelopen", function() {
                blq.mastheadPanels.switching = false
            });
            if (window.lately && document.getElementById("blq-nav-promo")) {
                w = new B("promo", h("#blq-nav-promo a"), h("#blq-panel-promo"));
                z.addPanel(w);
                z.closePanel(w);
                x.push("#blq-nav-promo a")
            }
            if (document.getElementById("blq-panel-more")) {
                y = new B("more", h("#blq-nav-more a"), h("#blq-panel-more"));
                z.addPanel(y);
                z.closePanel(y);
                x.push("#blq-nav-more a")
            }
            if (x.length > 0) {
                C = x.join(",");
                h(C).click(function(E) {
                    var D = z.panels[this.panel];
                    z.activatePanel(D);
                    return false
                });
                h(C).mouseenter(function() {
                    z.mode = "mouse"
                });
                h(C).keydown(function(E) {
                    var D = z.panels[this.panel];
                    if (E.which === 13 || E.which === 40) {
                        z.mode = "keyboard";
                        z.when(function() {
                            return this.current !== D
                        }).activatePanel(D);
                        h("#blq-panel").show();
                        D.content.css({
                            visibility: "visible"
                        }).show().find(".panel-header-link").first().focus();
                        E.preventDefault()
                    }
                });
                h(C).mouseleave(function() {
                    z.mode = "mouse"
                });
                h("#blq-panel").keydown(function(D) {
                    if (D.keyCode == "27") {
                        z.when(function() {
                            return this.current !== null
                        }).activatePanel()
                    }
                });
                h("#blq-masthead").mouseenter(function() {
                    z.mode = "mouse";
                    clearTimeout(z.closeTimer)
                });
                z.animateOpen = function(D) {
                    var F = 400, E = this;
                    this.content.css({
                        visibility: "visible"
                    }).show();
                    if (z.mode === "keyboard") {
                        F = 0
                    }
                    h("#blq-panel").css({
                        height: 0
                    }).animate({
                        height: "9.4em"
                    }, F, D);
                    require(["istats-1"], function(G) {
                        h(function() {
                            G.log("open", "panel-" + E.name)
                        })
                    })
                };
                z.animateClose = function(D) {
                    var E = this, F = 400;
                    if (z.mode === "keyboard") {
                        F = 0
                    }
                    h("#blq-panel").slideUp(F, function() {
                        E.content.hide().css("visibility", "hidden");
                        j();
                        D()
                    });
                    if (z.mode === "keyboard") {
                        E.control.focus()
                    }
                };
                z.animateSwap = function(E, D) {
                    this.content.fadeOut(250, function() {
                        E.content.css({
                            visibility: "visible"
                        }).fadeIn(250, D)
                    });
                    require(["istats-1"], function(F) {
                        h(function() {
                            F.log("open", "panel-" + E.name)
                        })
                    })
                };
                e()
            }
        })
    }
    function d() {
        return (document.getElementById && document.getElementsByTagName)
    }
    function g(w, x) {}
    g.isStub = true;
    function c(w) {
        if (k[w]) {
            delete k[w]
        }
    }
    function v() {
        return q
    }
    function l(w) {
        q = w
    }
    function m(w) {
        return a[w]
    }
    function p(w, x) {
        a[w] = x
    }
    function t(w, x) {
        u[w] = x
    }
    function f(y, w) {
        if (y.createTextRange) {
            var x = y.createTextRange();
            x.moveStart("character", w);
            x.moveEnd("character", w - y.value.length);
            x.select()
        } else {
            if (y.selectionStart) {
                y.focus();
                y.setSelectionRange(w, w)
            } else {
                y.focus()
            }
        }
    }
    function n(y) {
        if (d()) {
            h = y;
            var x = h("#blq-container-inner").attr("lang") || "en-GB";
            if (x.substr(0, 2) !== "en") {
                c("addAutosuggest")
            }
            s();
            for (var w in k) {
                k[w]()
            }
        }
    }
    var k = i;
    window.blq = {
        addGoTrack: g,
        disableFeature: c,
        environment: v,
        setEnvironment: l,
        setLabel: t,
        flagpole: m,
        setFlagpole: p,
        availableFeatures: k
    };
    if (window.require) {
        document.documentElement.className += " blq-js";
        require(["jquery-1.9"], function(w) {
            w(function() {
                n(w)
            })
        })
    }
})();
var demi = (function() {
    var c = false, b = [], a = null;
    return {
        _reset: function() {
            c = false;
            b = [];
            a = null
        },
        _loaded: function() {
            while (b.length > 0) {
                demi.getDevice(b.shift(), blq.environment())
            }
        },
        _addScriptTag: function(f) {
            var d = document.getElementsByTagName("head")[0];
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.src = f;
            d.insertBefore(e, d.firstChild)
        },
        _setSource: function(d) {
            a = d
        },
        getDevice: function(d) {
            b.push(d);
            if (!c) {
                c = true;
                demi._addScriptTag(a)
            }
        }
    }
})();
define("runqueue", ["jquery-1.9"], function(d) {
    var b = function() {
        var f = new Array();
        f.running = false;
        f.events = {};
        f.run = function(g) {
            e.call(f, g)
        };
        f.done = function() {
            a.call(f)
        };
        return f
    };
    b.prototype = new Array();
    function e(g) {
        if (g) {
            this.push(g)
        }
        if (!this.running && this.length) {
            d(this.events).trigger("runqueue.started");
            c.call(this)
        }
    }
    function a() {
        this.shift();
        if (!this.length) {
            this.running = false;
            d(this.events).trigger("runqueue.finished")
        } else {
            c.call(this)
        }
    }
    function c() {
        if (this.length) {
            this.running = true;
            var f = this;
            this[0](function() {
                f.done()
            })
        }
    }
    return b
});
define("panelset", ["runqueue", "jquery-1.9"], function(a, c) {
    var b = function() {
        this.panels = {};
        this.queue = new a();
        this.current = null;
        this.events = {};
        this._activated = false;
        var d = this;
        c(this.queue.events).bind("runqueue.started", function(f) {
            if (d.current === null && d._activated) {
                c(d.events).trigger("panelset.firstopened")
            }
        });
        c(this.queue.events).bind("runqueue.finished", function(f) {
            if (d.current === null && d._activated) {
                d._activated = false;
                c(d.events).trigger("panelset.lastclosed")
            }
        })
    };
    b.prototype.when = function(d) {
        this._t = d;
        return this
    };
    b.prototype.activatePanel = function(d) {
        var g, e = this._t;
        delete this._t;
        if (d) {
            this._activated = true
        }
        var f = this;
        g = function(h) {
            if (e&&!e.call(f)) {
                h()
            } else {
                if (!d) {
                    if (f.current) {
                        f.closePanel(f.current, h)
                    } else {
                        h()
                    }
                } else {
                    if (f.current && f.current !== d) {
                        f.swapPanel(f.current, d, h)
                    } else {
                        f.togglePanel(d, h)
                    }
                }
            }
        };
        this.queue.run(g)
    };
    b.prototype.addPanel = function() {
        var e;
        for (var f = 0, d = arguments.length; f < d; f++) {
            e = arguments[f];
            this.panels[e.name] = e;
            e._panelSet = this
        }
    };
    b.prototype.openPanel = function(e, d) {
        c(this.events).trigger("panelset.panelopen", e);
        e.isOpen = true;
        this.current = e;
        if (typeof d === "undefined" && e.content.show) {
            e.content.show()
        } else {
            if (typeof d === "function") {
                this.animateOpen.call(e, d)
            }
        }
    };
    b.prototype.closePanel = function(e, d) {
        c(this.events).trigger("panelset.panelclose", e);
        e.isOpen = false;
        this.current = null;
        if (typeof d === "undefined" && e.content.hide) {
            e.content.hide()
        } else {
            if (typeof d === "function") {
                this.animateClose.call(e, d)
            }
        }
    };
    b.prototype.togglePanel = function(e, d) {
        if (!e.isOpen) {
            this.openPanel(e, d)
        } else {
            this.closePanel(e, d)
        }
    };
    b.prototype.swapPanel = function(e, f, d) {
        this.closePanel(e, false);
        this.openPanel(f, false);
        this.animateSwap.call(e, f, d)
    };
    b.prototype.animateOpen = function(d) {
        d()
    };
    b.prototype.animateClose = function(d) {
        d()
    };
    b.prototype.animateSwap = function(e, d) {
        d()
    };
    return b
});
define("panel", function() {
    var a = function(c, d, b) {
        if (d.length === 0 || b.length === 0) {
            throw "Panel requires non-empty collections for each control and content arguments."
        }
        this.name = c;
        this.control = d;
        this.content = b;
        this.isOpen = true;
        this.control.each(function(e) {
            this.panel = c
        })
    };
    return a
});
