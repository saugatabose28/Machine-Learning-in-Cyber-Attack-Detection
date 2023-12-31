LI.QuickHelpManager = {
    startTour: function(c, b, a) {
        if (typeof c === "string") {
            this.qh.initiateTour(c, b, a)
        } else {
            this.qh.registerTour(c);
            this.qh.initiateTour(c.id, b)
        }
    },
    tourRunning: function() {
        return !!this.qh.getState(this.qh.cookieName)
    },
    loadHopscotch: function(b, a) {
        this.qh.loadHopscotch(b, a)
    },
    isReady: function() {
        return (typeof this.qh !== "undefined")
    },
    fetchAndStartTour: function(b, a) {
        this.qh.fetchAndStartTour(b, a)
    },
    _register: function(a) {
        var b = this;
        if (a !== false) {
            this.qh = a
        }
        if (LI.Events) {
            LI.Events.fire("QuickHelpRegistered")
        } else {
            if (typeof this.eventRetries == "undefined") {
                this.eventRetries = 0
            }
            this.eventRetries++;
            if (this.eventRetries < 20) {
                window.setTimeout(function() {
                    b._register(false)
                }, 500)
            }
        }
    }
};
LI.define("QuickHelp2");
LI.QuickHelp2 = function(ag, U) {
    var ac = {}, l = [], O = "undefined", e = "help-center", j = "quick-help", N = "act-set-name", d = "qh-page-tours", an = "hopscotch-bubble-arrow-container", aa = "hopscotch-bubble", z = "hopscotch-bubble-content", D = "hopscotch-bubble-container", I = YDom.getAncestorByClassName(ag, e) || YDom.getAncestorByClassName(ag, j), B = Y$("." + N, I, true), J = Y$("." + d, ag, true), u = (typeof window.sessionStorage !== O), P = LI.getPageKey(), F = false, t = false, T = false, ai = false, Q = (typeof JSON !== O ? JSON.parse : YAHOO.lang.JSON.parse), H = "li_hs", m = "hide", s = 240, y = 320, f, n, ab, o = false, i, am, E, ak, A, ap = "done-state", M, r, aj, V, k, W, h, al = function() {
        var ar = [], aw = hopscotch.getCurrTour().relatedTours, ax, ay, aA, av, aB, aq, aD, au, aC, at, az;
        if (ak.skipQHDoneState === true) {
            return
        }
        if (!aw && am) {
            aw = [];
            for (ax in am) {
                if (ax !== ak.id && E["quickhelp_" + ax] === "show") {
                    aw.push(ax)
                }
            }
        }
        if (aw && aw.length) {
            for (ay = 0, aA = aw.length;
            ay < aA;
            ++ay) {
                ax = aw[ay];
                av = am[ax];
                if (av && E["quickhelp_" + ax]) {
                    ar.push(av)
                }
            }
        }
        aB = ah(H + "-origin-page");
        if (aB) {
            aq = aB.lastIndexOf("::");
            aD = aB.substring(aq + 2);
            aB = aB.substring(0, aq)
        }
        if (ar.length && (k < y)) {
            az = y
        } else {
            if (k < s) {
                az = s
            } else {
                az = k
            }
        }
        dust.render("tl/apps/chrome/quickhelp/embed/done_state", {
            topics: ar,
            originPage: aB,
            i18n_tour_complete: LI.i18n.get("QuickHelp-tour-complete"),
            i18n_related_tours: LI.i18n.get("QuickHelp-related-tours"),
            i18n_go_back: LI.i18n.get("QuickHelp-go-back")
        }, function(aF, aE) {
            A = hopscotch.getCalloutManager();
            A.createCallout({
                id: ap,
                target: "main-search-box",
                orientation: "bottom",
                showNavButtons: false,
                showNumber: false,
                fixedElement: true,
                width: az,
                height: 160,
                bubblePadding: 0,
                zindex: 10001
            });
            M = A.getCallout(ap);
            au = M.element;
            aC = Y$("." + z, au, true);
            aC.innerHTML = aE;
            YDom.addClass(au, "quickhelp-tour-done");
            YDom.setStyle(au, "top", r);
            YDom.setStyle(au, "left", aj);
            YDom.setStyle(au, "position", V);
            at = Y$("." + an, au, true);
            at.className = W;
            YDom.setStyle(at, "left", h);
            YEvent.on(au, "click", S)
        })
    }, x = function() {
        var at = Y$("." + aa, null, true), ar = Y$("." + D, at, true), aq = Y$("." + an, at, true);
        r = YDom.getStyle(at, "top");
        aj = YDom.getStyle(at, "left");
        V = YDom.getStyle(at, "position");
        k = YDom.getStyle(ar, "width");
        W = aq.className;
        h = YDom.getStyle(aq, "left")
    }, Z = function() {
        var at, aq, ar, av, au;
        for (at = 0, aq = l.length;
        at < aq;
        at++) {
            ar = l[at];
            av = ar.callback;
            au = ar.scope;
            if (au) {
                av.call(au)
            } else {
                av.call(window)
            }
        }
        l = []
    }, C = function() {
        hopscotch.configure({
            onEnd: al,
            onShow: x,
            bubblePadding: 0,
            i18n: {
                nextBtn: LI.i18n.get("QuickHelp-next"),
                prevBtn: LI.i18n.get("QuickHelp-prev"),
                closeTooltip: LI.i18n.get("QuickHelp-close"),
                skipBtn: LI.i18n.get("QuickHelp-skip"),
                doneBtn: LI.i18n.get("QuickHelp-done")
            }
        }).setCookieName(H);
        if (n) {
            R(n);
            n = null
        }
        Z()
    }, p = function(at, aq) {
        var ar;
        if (at && typeof at === "function") {
            l.push({
                callback: at,
                scope: aq
            })
        }
        if (!window.hopscotch&&!T) {
            T = true;
            ar = U.dependencies;
            YUtil.Get.script(ar.jsFiles, {
                onSuccess: C
            });
            YUtil.Get.css(ar.cssFiles)
        } else {
            if (window.hopscotch) {
                ar = U.dependencies;
                YUtil.Get.script(ar.helpers);
                C()
            }
        }
    }, q = function(at, ar) {
        var aq = {
            success: function(av) {
                var au;
                if (av.statusText === "OK" && av.responseText) {
                    au = Q(av.responseText);
                    if (au.status === "ok" && au.content && au.content["lite-lix-result"]) {
                        ar(au.content["lite-lix-result"])
                    }
                }
            }
        };
        YUtil.Connect.asyncRequest("POST", U.lixResultUrl, aq, "keys=" + at.join(","))
    }, b = function(ax, ay, at) {
        var av = false, aw = false, az = false, aq = LI.JSContentBasePath + "&f=" + ay, au, ar;
        ar = function() {
            if (av && aw) {
                dust.render(ay, au.content, at)
            }
        };
        YUtil.Connect.asyncRequest("GET", ax, {
            success: function(aA) {
                if (aA && aA.responseText) {
                    av = true;
                    au = Q(aA.responseText);
                    ar()
                } else {
                    if (!az && (typeof at === "function")) {
                        az = true;
                        at({
                            message: "No data returned."
                        })
                    }
                }
            },
            failure: function() {
                if (!az && (typeof at === "function")) {
                    az = true;
                    at({
                        message: "No data returned."
                    })
                }
            }
        });
        YUtil.Get.script(aq, {
            onSuccess: function() {
                aw = true;
                ar()
            },
            onFailure: function() {
                if (!az && (typeof at === "function")) {
                    az = true;
                    at({
                        message: "Failed to load tour catalog."
                    })
                }
            },
            onTimeout: function() {
                if (!az && (typeof at === "function")) {
                    az = true;
                    at({
                        message: "Tour catalog timed out."
                    })
                }
            }
        })
    }, g = function(ar) {
        var aq = [], at, av, au;
        at = Q(ar);
        if (!am) {
            am = {}
        }
        for (au in at) {
            am[au] = at[au];
            aq.push("quickhelp_" + au)
        }
        q(aq, function(aw) {
            E = aw;
            a(aw);
            av = Y$(".loading", ag, true);
            YDom.addClass(av, m)
        })
    }, af = function(au, aq) {
        var at = (au || U.product), ar = "tl/apps/chrome/quickhelp/catalogs/" + at, av = U.catalogUrls[at];
        if (!F&&!t) {
            if (!at ||!av) {
                L();
                return
            }
            t = true;
            b(av, ar, function(ax, aw) {
                t = false;
                F = true;
                if (ax) {
                    L();
                    return
                }
                g(aw);
                if (typeof aq === "function") {
                    aq()
                }
            });
            p()
        } else {
            if (F&&!t && au) {
                t = true;
                b(av, ar, function(ax, aw) {
                    t = false;
                    if (ax) {
                        return
                    }
                    g(aw);
                    if (typeof aq === "function") {
                        aq()
                    }
                })
            }
        }
    }, w = function(aq) {
        if (ac && ac[aq]) {
            R(ac[aq])
        } else {
            if (am && am[aq]) {
                v(aq, am[aq].dataUrl)
            } else {
                af(null, function() {
                    v(aq, am[aq].dataUrl)
                })
            }
        }
    }, v = function(au, ar) {
        var at = au.substring(0, au.indexOf("_")), aq = ["tl/apps/chrome/quickhelp/tours", at, au].join("/");
        b(ar, aq, function(ax, av) {
            var aw;
            if (ax) {
                c();
                return
            }
            av = av.replace(/(\\')/g, "'").replace(/(\\\/)/g, "/").replace(/(\\&)/g, "&");
            aw = Q(av);
            if (aw) {
                ac[au] = aw;
                if (!window.hopscotch) {
                    n = aw
                } else {
                    R(aw)
                }
            }
            c()
        })
    }, c = function() {
        t = false;
        YDom.removeClass(Y$("." + d + " .loading", ag, true), "loading")
    }, Y = function(aw, av) {
        var at, aq, au, ar = "*";
        au = am[aw].pagekeys;
        if (!au ||!au.length) {
            return false
        }
        if ((typeof au[0] !== "string") && (au.length >= av)) {
            au = au[av]
        }
        for (at = 0, aq = au.length;
        at < aq;
        ++at) {
            if (au[at] === P || au[at] === ar) {
                return true
            }
        }
        return false
    }, G = function(av, at) {
        var ar = am[av], au, aq;
        ad(H, av + ":" + at, 1);
        if (typeof ar.pageUrl !== "string") {
            if (ar.pageUrl.length >= at) {
                au = ar.pageUrl[at]
            } else {
                au = ar.pageUrl[0];
                ad(H, av + ":0", 1)
            }
        } else {
            au = ar.pageUrl
        }
        if (i && (au.indexOf("?")!==-1)) {
            if (au.indexOf("trk=")!==-1 && i) {
                aq = au.replace(/(&|\?)trk=[^&]*/i, "$1trk=" + i + "&");
                window.location.href = aq
            } else {
                window.location.href = au + "&trk=" + i
            }
        } else {
            if (i) {
                window.location.href = au + "?trk=" + i
            } else {
                window.location.href = au
            }
        }
    }, S = function(aA) {
        var ax = YEvent.getTarget(aA), au = ax.className, aw = ax.parentNode, at, av, ay, az, ar, aB, aq;
        if (ax.nodeName === "A" || (aw && aw.nodeName === "A")) {
            at = aw ? aw.className : "";
            if (au.indexOf("qh-tour-link") >= 0&&!t) {
                hopscotch.endTour(true, false);
                if (M) {
                    A.removeCallout(ap)
                }
                t = true;
                av = ax.getAttribute("data-hs-id");
                YDom.addClass(YDom.getAncestorByTagName(ax, "li"), "loading");
                X(av, "qhmenu");
                YEvent.preventDefault(aA)
            }
        } else {
            if (au.indexOf("qh-back-to-start") >= 0 || aw.className.indexOf("qh-back-to-start") >= 0) {
                if (M) {
                    A.removeCallout(ap)
                }
                ay = ah(H + "-origin-page");
                if (ay) {
                    ar = ay.lastIndexOf("::");
                    az = ay.substring(ar + 2);
                    ay = ay.substring(0, ar);
                    hopscotch.endTour(true, false);
                    if (ay && window.location.href !== ay) {
                        window.location.href = ay
                    } else {
                        aB = YAHOO.env.ua.webkit ? document.body : document.documentElement;
                        aq = new YAHOO.util.Scroll(aB, {
                            scroll: {
                                to: [0, az]
                            }
                        }, 1, YAHOO.util.Easing.easeOut);
                        aq.animate();
                        hopscotch.endTour(true, false)
                    }
                } else {
                    hopscotch.endTour(true, false)
                }
            }
        }
    }, K = function() {
        YDom.removeClass(I, e);
        YDom.addClass(I, j);
        f = B.innerHTML;
        B.innerHTML = U.helpCenterTourText
    }, L = function() {
        var aq;
        YDom.removeClass(I, j);
        YDom.addClass(I, e);
        B.innerHTML = f;
        aq = Y$(".loading", ag, true);
        YDom.addClass(aq, m)
    }, a = function(aq) {
        var ar = [], at;
        if (!am) {
            L();
            return
        }
        for (at in am) {
            if (aq["quickhelp_" + at] === "show") {
                ar.push(am[at])
            }
        }
        if (!ar.length) {
            L()
        }
        dust.render("tl/apps/chrome/quickhelp/embed/tour_list", {
            topics: ar
        }, function(av, au) {
            J.innerHTML = au
        })
    }, ah = function(ar) {
        var au = ar + "=", aq, at, av;
        if (u) {
            return sessionStorage.getItem(ar)
        } else {
            aq = document.cookie.split(";");
            for (at = 0;
            at < aq.length;
            at++) {
                av = aq[at];
                while (av.charAt(0) === " ") {
                    av = av.substring(1, av.length)
                }
                if (av.indexOf(au) === 0) {
                    return av.substring(au.length, av.length)
                }
            }
        }
    }, ad = function(at, au, av) {
        var aq = "", ar;
        if (u) {
            sessionStorage.setItem(at, au)
        } else {
            if (av) {
                ar = new Date();
                ar.setTime(ar.getTime() + (av * 24 * 60 * 60 * 1000));
                aq = "; expires=" + ar.toGMTString()
            }
            document.cookie = at + "=" + au + aq + "; path=/"
        }
    }, ao = function() {
        var aq = ah(H), at, ar;
        if (aq) {
            at = aq.split(":");
            ar = ah(H + "-data-url");
            o = true;
            if (ar) {
                p();
                v(at[0], ar);
                af();
                return
            }
            af(null, function() {
                w(at[0])
            })
        }
    }, R = function(aq) {
        ak = aq;
        if (!hopscotch) {
            return
        }
        if (!o && WebTracking && i) {
            WebTracking.trackUserAction(i)
        }
        function ar() {
            ai = false;
            o = false;
            c();
            hopscotch.setCookieName(H);
            if (ab) {
                hopscotch.startTour(aq, ab)
            } else {
                hopscotch.startTour(aq)
            }
        }
        if (ak.hasHelpers) {
            YUtil.Get.script(LI.JSContentBasePath + "&f=scripts/apps/chrome/quickhelp/" + ak.id + "_helpers", {
                onSuccess: ar
            })
        } else {
            ar()
        }
    }, ae = function() {
        K();
        YEvent.on(Y$("." + j), "click", S, null, this);
        ao();
        LI.QuickHelpManager._register(this);
        U.catalogUrl = decodeURIComponent(U.catalogUrl);
        af()
    }, X = function(av, au, ar) {
        var at, aq;
        ar = ar || 0;
        if (!am ||!am[av]) {
            af(av.substring(0, av.indexOf("_")), function() {
                X(av, au, ar)
            })
        } else {
            if (am[av]) {
                ad(H + "-data-url", am[av].dataUrl, 1);
                at = (typeof window.pageYOffset !== O ? window.pageYOffset : document.documentElement.scrollTop);
                aq = am[av].goBackUrl ? am[av].goBackUrl : window.location.href;
                ad(H + "-origin-page", aq + "::" + at, 1);
                if (am[av].trkCode) {
                    if (au) {
                        i = am[av].trkCode + "-" + au
                    } else {
                        i = am[av].trkCode
                    }
                }
                if (hopscotch.getCurrTour() !== null) {
                    hopscotch.endTour(true, false)
                }
                if (Y(av, ar)) {
                    ab = ar;
                    w(av)
                } else {
                    G(av, ar)
                }
            }
        }
    };
    this.initiateTour = X;
    this.loadHopscotch = p;
    this.getState = ah;
    this.cookieName = H;
    this.fetchAndStartTour = v;
    this.registerTour = function(aq) {
        ac[aq.id] = aq;
        if (!am) {
            am = {}
        }
        am[aq.id] = {
            id: aq.id,
            title: aq.title
        };
        dust.render("tl/shared/quickhelp/embed/tour_list", {
            topics: [aq]
        }, function(at, ar) {
            J.innerHTML += ar
        })
    };
    ae.call(this)
};
(function() {
    dust.register("tl/apps/chrome/quickhelp/embed/tour_list", b);
    function b(d, c) {
        return d.section(c.get("topics"), c, {
            "block": a
        }, null)
    }
    function a(d, c) {
        return d.write('<li><a class="qh-tour-link" href="#" data-hs-id="').reference(c.get("id"), c, "h").write('" data-hs-url="').reference(c.get("dataUrl"), c, "h").write('">').reference(c.get("title"), c, "h").write("</a></li>")
    }
    return b
})();
(function() {
    dust.register("tour_list", dust.cache["tl/apps/chrome/quickhelp/embed/tour_list"])
})();
(function() {
    dust.register("tl/apps/chrome/quickhelp/embed/done_state", b);
    function b(d, c) {
        return d.write('<span class="done-icon"></span><div class="tour-complete-content"><h2 class="tour-complete-head">').reference(c.get("i18n_tour_complete"), c, "h").write("</h2>").exists(c.get("topics"), c, {
            "block": a
        }, null).write('<div  class="go-back"><span class="qh-arrow left"></span><a href="').reference(c.get("originPage"), c, "h").write('">').reference(c.get("i18n_go_back"), c, "h").write("</a></div></div>")
    }
    function a(d, c) {
        return d.write('<div class="related-tours"><h3>').reference(c.get("i18n_related_tours"), c, "h").write('</h3><ul class="related-tours-list">').partial("tl/apps/chrome/quickhelp/embed/tour_list", c, null).write("</ul></div>")
    }
    return b
})();
(function() {
    dust.register("done_state", dust.cache["tl/apps/chrome/quickhelp/embed/done_state"])
})(); /*
 *  THE "NAV START" | "non-js" file
 *  ----------------------------------------------------------------------------
 *  My purpose in life:
 *  -------------------
 *  I know what you're thinking, "What in the flying F#@! is this," - yeah. I'm
 *  a bit for an odd-ball; my entire purpose in life is to "open" an annonymous
 *  function for the global-nav sandbox.
 *
 *  While I am javascript, technically I'm *not* javascript - because I'm not
 *  a valid js file.  This is why I have the funky .nocheck.js extension.  There's
 *  no way I can EVER pass JSHint.  I also am equally destructive without my
 *  navend counter-part.
 *
 *  I'm included by:              - SCDS remote-nav concat group within remote-nav fizzy embed
 *
 *  File PRE-CONDITIONS:          - SCDS changes to allow .nocheck.js files must be in place.
 *                                - must be the VERY FIRST file called in the sandbox concat group
 *
 *  File POST-CONDITIONS:
 *
 *  CAVEATS/GOTCHAS:
 */
(function () {
    var remote_nav = window.remote_nav, LI = remote_nav.sandbox.LI;
    LI.sandboxFromWindow(window.LI.getPageKey, "getPageKey");
    LI.sandboxFromWindow(window.LI.getPageKey, "getPageKey");
    (function() {
        var a = document.getElementById("footer");
        remote_nav.setUp(a);
        remote_nav.initializeControls()
    }());
    /*  THE "NAV END" | "no js" file
     *  ----------------------------------------------------------------------------
     *  My purpose in life:
     *  --------------------------
     *  I finish the job of navstart.nocheck.js - closing the anonymous function
     *  scope for the sandbox.  Like navstart.nocheck.js, I'm also not technically
     *  valid javascript, and therefore won't pass JSHint.  We both exist, however,
     *  so that logic modifications to SCDS do not have to be made.
     *
     *  I'm included by:                - remote_nav SCDS concat group
     *
     *  I'm styled by:                  - N/A; JS plumbing/infrastructure
     *
     *  File PRE-CONDITIONS:
     *  File POST-CONDITIONS:
     *  CAVEATS/GOTCHAS:
     */
}());
