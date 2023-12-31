/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.2.0
 *
 */
(function(a) {
    jQuery.fn.extend({
        slimScroll: function(c) {
            var b = a.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: 0.4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: 0.2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200
            }, c);
            this.each(function() {
                function D(g) {
                    if (G) {
                        g = g || window.event;
                        var j = 0;
                        g.wheelDelta && (j =- g.wheelDelta / 120);
                        g.detail && (j = g.detail / 3);
                        a(g.target || g.srcTarget || g.srcElement).closest("." + b.wrapperClass).is(Q.parent()) && M(j, !0);
                        g.preventDefault&&!K && g.preventDefault();
                        K || (g.returnValue=!1)
                    }
                }
                function M(n, m, j) {
                    var l = n, k = Q.outerHeight() - P.outerHeight();
                    m && (l = parseInt(P.css("top")) + n * parseInt(b.wheelStep) / 100 * P.outerHeight(), l = Math.min(Math.max(l, 0), k), l = 0 < n ? Math.ceil(l) : Math.floor(l), P.css({
                        top: l + "px"
                    }));
                    N = parseInt(P.css("top")) / (Q.outerHeight() - P.outerHeight());
                    l = N * (Q[0].scrollHeight - Q.outerHeight());
                    j && (l = n, n = l / Q[0].scrollHeight * Q.outerHeight(), n = Math.min(Math.max(n, 0), k), P.css({
                        top: n + "px"
                    }));
                    Q.scrollTop(l);
                    Q.trigger("slimscrolling", ~~l);
                    C();
                    J()
                }
                function I() {
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", D, !1), this.addEventListener("mousewheel", D, !1)) : document.attachEvent("onmousewheel", D)
                }
                function o() {
                    E = Math.max(Q.outerHeight() / Q[0].scrollHeight * Q.outerHeight(), F);
                    P.css({
                        height: E + "px"
                    });
                    var g = E == Q.outerHeight() ? "none": "block";
                    P.css({
                        display: g
                    })
                }
                function C() {
                    o();
                    clearTimeout(f);
                    N==~~N ? (K = b.allowPageScroll, e != N && Q.trigger("slimscroll", 0==~~N ? "top" : "bottom")) : K=!1;
                    e = N;
                    E >= Q.outerHeight() ? K=!0 : (P.stop(!0, !0).fadeIn("fast"), b.railVisible && O.stop(!0, !0).fadeIn("fast"))
                }
                function J() {
                    b.alwaysVisible || (f = setTimeout(function() {
                        if ((!b.disableFadeOut ||!G)&&!i&&!h) {
                            P.fadeOut("slow"), O.fadeOut("slow")
                        }
                    }, 1000))
                }
                var G, i, h, f, d, E, N, e, F = 30, K=!1, Q = a(this);
                if (Q.parent().hasClass(b.wrapperClass)) {
                    var L = Q.scrollTop(), P = Q.parent().find("." + b.barClass), O = Q.parent().find("." + b.railClass);
                    o();
                    if (a.isPlainObject(c)) {
                        if ("height" in c && "auto" == c.height) {
                            Q.parent().css("height", "auto");
                            Q.css("height", "auto");
                            var H = Q.parent().parent().height();
                            Q.parent().css("height", H);
                            Q.css("height", H)
                        }
                        if ("scrollTo" in c) {
                            L = parseInt(b.scrollTo)
                        } else {
                            if ("scrollBy" in c) {
                                L += parseInt(b.scrollBy)
                            } else {
                                if ("destroy" in c) {
                                    P.remove();
                                    O.remove();
                                    Q.unwrap();
                                    return 
                                }
                            }
                        }
                        M(L, !1, !0)
                    }
                } else {
                    b.height = "auto" == b.height ? Q.parent().height() : b.height;
                    L = a("<div></div>").addClass(b.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: b.width,
                        height: b.height
                    });
                    Q.css({
                        overflow: "hidden",
                        width: b.width,
                        height: b.height
                    });
                    var O = a("<div></div>").addClass(b.railClass).css({
                        width: b.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: b.alwaysVisible && b.railVisible ? "block": "none",
                        "border-radius": b.size,
                        background: b.railColor,
                        opacity: b.railOpacity,
                        zIndex: 90
                    }), P = a("<div></div>").addClass(b.barClass).css({
                        background: b.color,
                        width: b.size,
                        position: "absolute",
                        top: 0,
                        opacity: b.opacity,
                        display: b.alwaysVisible ? "block": "none",
                        "border-radius": b.size,
                        BorderRadius: b.size,
                        MozBorderRadius: b.size,
                        WebkitBorderRadius: b.size,
                        zIndex: 99
                    }), H = "right" == b.position ? {
                        right: b.distance
                    }
                    : {
                        left: b.distance
                    };
                    O.css(H);
                    P.css(H);
                    Q.wrap(L);
                    Q.parent().append(P);
                    Q.parent().append(O);
                    b.railDraggable && (a.ui && "function" == typeof a.ui.draggable) && P.draggable({
                        axis: "y",
                        containment: "parent",
                        start: function() {
                            h=!0
                        },
                        stop: function() {
                            h=!1;
                            J()
                        },
                        drag: function() {
                            M(0, a(this).position().top, !1)
                        }
                    });
                    O.hover(function() {
                        C()
                    }, function() {
                        J()
                    });
                    P.hover(function() {
                        i=!0
                    }, function() {
                        i=!1
                    });
                    Q.hover(function() {
                        G=!0;
                        C();
                        J()
                    }, function() {
                        G=!1;
                        J()
                    });
                    Q.bind("touchstart", function(g) {
                        g.originalEvent.touches.length && (d = g.originalEvent.touches[0].pageY)
                    });
                    Q.bind("touchmove", function(g) {
                        g.originalEvent.preventDefault();
                        g.originalEvent.touches.length && M((d - g.originalEvent.touches[0].pageY) / b.touchScrollStep, !0)
                    });
                    "bottom" === b.start ? (P.css({
                        top: Q.outerHeight() - P.outerHeight()
                    }), M(0, !0)) : "top" !== b.start && (M(a(b.start).position().top, null, !0), b.alwaysVisible || P.hide());
                    I();
                    o()
                }
            });
            return this
        }
    });
    jQuery.fn.extend({
        slimscroll: jQuery.fn.slimScroll
    })
})(jQuery);
