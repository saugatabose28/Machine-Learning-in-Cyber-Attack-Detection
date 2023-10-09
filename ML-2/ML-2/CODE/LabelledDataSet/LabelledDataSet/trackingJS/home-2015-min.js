$(function() {
    var d = $(".mozilla-share-cta");
    var b = $(".mozilla-share-cta ul");
    var e;
    d.each(function(f) {
        var g = $(f);
        g.css("height", g.find("h3"))
    });
    function a(f) {
        var g = f.find("h3");
        f.addClass("reveal");
        g.addClass("out");
        clearTimeout(e);
        e = setTimeout(function() {
            g.css("visibility", "hidden");
            f.find("ul").css("visibility", "visible").addClass("in")
        }, 200)
    }
    function c(f) {
        var g = f.find("ul");
        f.removeClass("reveal");
        g.removeClass("in");
        clearTimeout(e);
        e = setTimeout(function() {
            g.css("visibility", "hidden");
            f.find("h3").css("visibility", "visible").removeClass("out")
        }, 200)
    }
    d.on("mouseenter focusin", function() {
        var f = $(this);
        if (!f.hasClass("reveal")) {
            a(f)
        }
    });
    d.on("mouseleave", function() {
        var f = $(this);
        if (f.hasClass("reveal")) {
            c(f)
        }
    });
    d.on("focusout", function(g) {
        var f = $(this);
        if (f.hasClass("reveal") && $(g.target).parent().is("li:last-child")) {
            c(f)
        }
    });
    b.find("a").on("click", function(h) {
        var g = $(this);
        var j = (this.target === "_blank" || h.metaKey || h.ctrlKey);
        var f = this.href;
        var i = function() {
            window.location = f
        };
        if (j) {
            gaTrack(["_trackEvent", "Share CTA Interactions", "Social link click", g.attr("title")])
        } else {
            h.preventDefault();
            gaTrack(["_trackEvent", "Share CTA Interactions", "Social link click", g.attr("title")], i)
        }
    })
});
if (typeof Mozilla === "undefined") {
    var Mozilla = {}
}
function onYouTubePlayerAPIReady() {
    Mozilla.FirefoxAnniversaryVideo.initYouTubePlayer()
}
Mozilla.FirefoxAnniversaryVideo = (function(g) {
    var r = g("html");
    var i = (/MSIE\s[1-8]\./.test(navigator.userAgent));
    var B = (/MSIE\s[1-9]\./.test(navigator.userAgent));
    var A = r.hasClass("ios");
    var h = r.hasClass("android");
    var d = {};
    var l = {
        overlay: "play replay play-share share-replay",
        footer: "share download none"
    };
    var x = g("#fx-anniversary-video-overlay");
    var u = g("#fx-anniversary-video-embed-wrapper");
    var w = g("#fx-anniversary-video-embed");
    var n = (w.length > 0);
    var c = g("#fx-anniversary-video-buttons");
    var m = g("#fx-anniversary-video-footer-button");
    var C = false;
    var q = false;
    var f = false;
    var v;
    var j = function() {
        var D = document.createElement("script");
        D.src = "//www.youtube.com/player_api";
        var E = document.getElementsByTagName("script")[0];
        E.parentNode.insertBefore(D, E);
        q = true
    };
    var k = function(D) {
        if (!i) {
            d = D;
            c.find("a.button-play").attr("role", "button");
            if (typeof d.onPlay === "function") {
                c.find(".button-play, .button-replay").on("click.fxanniversaryvideo", function(E) {
                    E.preventDefault();
                    d.onPlay(this)
                })
            }
            if (n&&!d.deferEmbed) {
                p()
            }
        } else {
            g(".mozilla-share-cta").hide();
            a(c, "overlay", "play")
        }
    };
    var a = function(E, D, F) {
        if (!E.hasClass(F) && l[D].indexOf(F)>-1) {
            E.addClass("changing");
            setTimeout(function() {
                E.removeClass(l[D]).addClass(F).removeClass("changing")
            }, 300)
        }
    };
    var t = function(D) {
        a(c, "overlay", D)
    };
    var s = function(D) {
        a(m, "footer", D)
    };
    var p = function() {
        if (!C) {
            var D = w.attr("data-src");
            if (!B&&!!document.createElement("video").canPlayType) {
                D += "&html5=1"
            }
            w.attr("src", D);
            C = true
        }
        if (!q) {
            j()
        }
    };
    var o = function() {
        w.attr("src", "");
        C = false
    };
    var b = function() {
        if (n) {
            if (!C ||!q ||!v) {
                f = true;
                p()
            } else {
                u.show();
                x.fadeOut("normal", function() {
                    if (!A&&!h) {
                        v.playVideo()
                    }
                })
            }
        }
    };
    var z = function() {
        x.fadeIn("normal", function() {
            u.hide()
        })
    };
    var y = function() {
        if (v) {
            v.stopVideo()
        }
    };
    var e = function(D) {
        if (typeof d.onComplete === "function" && D.data === 0) {
            d.onComplete()
        }
    };
    return {
        init: function(D) {
            k(D)
        },
        setOverlayButtons: function(D) {
            t(D)
        },
        setFooterButton: function(D) {
            s(D)
        },
        enableEmbed: function() {
            p()
        },
        disableEmbed: function() {
            o()
        },
        playEmbed: function() {
            b()
        },
        hideEmbed: function() {
            z()
        },
        stopEmbed: function() {
            y()
        },
        initYouTubePlayer: function() {
            v = new YT.Player("fx-anniversary-video-embed", {
                events: {
                    onStateChange: e,
                    onReady: function() {
                        if (f) {
                            f = false;
                            b()
                        }
                    }
                }
            })
        }
    }
})(window.jQuery);
(function() {
    var a = [].indexOf || function(c) {
        for (var d = 0, f = this.length; d < f; d++) {
            if (d in this && this[d] === c) {
                return d
            }
        }
        return - 1
    }, b = [].slice;
    (function(c, d) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function(e) {
                return d(e, c)
            })
        } else {
            return d(c.jQuery, c)
        }
    })(this, function(B, x) {
        var E, A, D, t, H, q, K, J, F, I, z, e, k, j, G, C;
        E = B(x);
        J = a.call(x, "ontouchstart") >= 0;
        t = {
            horizontal: {},
            vertical: {}
        };
        H = 1;
        K = {};
        q = "waypoints-context-id";
        z = "resize.waypoints";
        e = "scroll.waypoints";
        k = 1;
        j = "waypoints-waypoint-ids";
        G = "waypoint";
        C = "waypoints";
        A = function() {
            function c(d) {
                var f = this;
                this.$element = d;
                this.element = d[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + H++;
                this.oldScroll = {
                    x: d.scrollLeft(),
                    y: d.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                d.data(q, this.id);
                K[this.id] = this;
                d.bind(e, function() {
                    var g;
                    if (!(f.didScroll || J)) {
                        f.didScroll = true;
                        g = function() {
                            f.doScroll();
                            return f.didScroll = false
                        };
                        return x.setTimeout(g, B[C].settings.scrollThrottle)
                    }
                });
                d.bind(z, function() {
                    var g;
                    if (!f.didResize) {
                        f.didResize = true;
                        g = function() {
                            B[C]("refresh");
                            return f.didResize = false
                        };
                        return x.setTimeout(g, B[C].settings.resizeThrottle)
                    }
                })
            }
            c.prototype.doScroll = function() {
                var d, f = this;
                d = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (J && (!d.vertical.oldScroll ||!d.vertical.newScroll)) {
                    B[C]("refresh")
                }
                B.each(d, function(m, n) {
                    var h, p, g;
                    g = [];
                    p = n.newScroll > n.oldScroll;
                    h = p ? n.forward : n.backward;
                    B.each(f.waypoints[m], function(o, r) {
                        var s, l;
                        if (n.oldScroll < (s = r.offset) && s <= n.newScroll) {
                            return g.push(r)
                        } else {
                            if (n.newScroll < (l = r.offset) && l <= n.oldScroll) {
                                return g.push(r)
                            }
                        }
                    });
                    g.sort(function(i, l) {
                        return i.offset - l.offset
                    });
                    if (!p) {
                        g.reverse()
                    }
                    return B.each(g, function(i, l) {
                        if (l.options.continuous || i === g.length - 1) {
                            return l.trigger([h])
                        }
                    })
                });
                return this.oldScroll = {
                    x: d.horizontal.newScroll,
                    y: d.vertical.newScroll
                }
            };
            c.prototype.refresh = function() {
                var f, h, g, d = this;
                g = B.isWindow(this.element);
                h = this.$element.offset();
                this.doScroll();
                f = {
                    horizontal: {
                        contextOffset: g ? 0: h.left,
                        contextScroll: g ? 0: this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: g ? 0: h.top,
                        contextScroll: g ? 0: this.oldScroll.y,
                        contextDimension: g ? B[C]("viewportHeight"): this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return B.each(f, function(i, l) {
                    return B.each(d.waypoints[i], function(p, v) {
                        var n, y, m, u, w;
                        n = v.options.offset;
                        m = v.offset;
                        y = B.isWindow(v.element) ? 0 : v.$element.offset()[l.offsetProp];
                        if (B.isFunction(n)) {
                            n = n.apply(v.element)
                        } else {
                            if (typeof n === "string") {
                                n = parseFloat(n);
                                if (v.options.offset.indexOf("%")>-1) {
                                    n = Math.ceil(l.contextDimension * n / 100)
                                }
                            }
                        }
                        v.offset = y - l.contextOffset + l.contextScroll - n;
                        if (v.options.onlyOnScroll && m != null ||!v.enabled) {
                            return 
                        }
                        if (m !== null && m < (u = l.oldScroll) && u <= v.offset) {
                            return v.trigger([l.backward])
                        } else {
                            if (m !== null && m > (w = l.oldScroll) && w >= v.offset) {
                                return v.trigger([l.forward])
                            } else {
                                if (m === null && l.oldScroll >= v.offset) {
                                    return v.trigger([l.forward])
                                }
                            }
                        }
                    })
                })
            };
            c.prototype.checkEmpty = function() {
                if (B.isEmptyObject(this.waypoints.horizontal) && B.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([z, e].join(" "));
                    return delete K[this.id]
                }
            };
            return c
        }();
        D = function() {
            function c(f, h, g) {
                var d, l;
                g = B.extend({}, B.fn[G].defaults, g);
                if (g.offset === "bottom-in-view") {
                    g.offset = function() {
                        var i;
                        i = B[C]("viewportHeight");
                        if (!B.isWindow(h.element)) {
                            i = h.$element.height()
                        }
                        return i - B(this).outerHeight()
                    }
                }
                this.$element = f;
                this.element = f[0];
                this.axis = g.horizontal ? "horizontal" : "vertical";
                this.callback = g.handler;
                this.context = h;
                this.enabled = g.enabled;
                this.id = "waypoints" + k++;
                this.offset = null;
                this.options = g;
                h.waypoints[this.axis][this.id] = this;
                t[this.axis][this.id] = this;
                d = (l = f.data(j)) != null ? l : [];
                d.push(this.id);
                f.data(j, d)
            }
            c.prototype.trigger = function(d) {
                if (!this.enabled) {
                    return 
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, d)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            };
            c.prototype.disable = function() {
                return this.enabled = false
            };
            c.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = true
            };
            c.prototype.destroy = function() {
                delete t[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            c.getWaypointsByElement = function(d) {
                var g, f;
                f = B(d).data(j);
                if (!f) {
                    return []
                }
                g = B.extend({}, t.horizontal, t.vertical);
                return B.map(f, function(h) {
                    return g[h]
                })
            };
            return c
        }();
        I = {
            init: function(c, f) {
                var d;
                if (f == null) {
                    f = {}
                }
                if ((d = f.handler) == null) {
                    f.handler = c
                }
                this.each(function() {
                    var h, m, g, l;
                    h = B(this);
                    g = (l = f.context) != null ? l : B.fn[G].defaults.context;
                    if (!B.isWindow(g)) {
                        g = h.closest(g)
                    }
                    g = B(g);
                    m = K[g.data(q)];
                    if (!m) {
                        m = new A(g)
                    }
                    return new D(h, m, f)
                });
                B[C]("refresh");
                return this
            },
            disable: function() {
                return I._invoke(this, "disable")
            },
            enable: function() {
                return I._invoke(this, "enable")
            },
            destroy: function() {
                return I._invoke(this, "destroy")
            },
            prev: function(c, d) {
                return I._traverse.call(this, c, d, function(f, g, h) {
                    if (g > 0) {
                        return f.push(h[g - 1])
                    }
                })
            },
            next: function(c, d) {
                return I._traverse.call(this, c, d, function(f, g, h) {
                    if (g < h.length - 1) {
                        return f.push(h[g + 1])
                    }
                })
            },
            _traverse: function(f, g, d) {
                var h, c;
                if (f == null) {
                    f = "vertical"
                }
                if (g == null) {
                    g = x
                }
                c = F.aggregate(g);
                h = [];
                this.each(function() {
                    var i;
                    i = B.inArray(this, c[f]);
                    return d(h, i, c[f])
                });
                return this.pushStack(h)
            },
            _invoke: function(c, d) {
                c.each(function() {
                    var f;
                    f = D.getWaypointsByElement(this);
                    return B.each(f, function(g, h) {
                        h[d]();
                        return true
                    })
                });
                return this
            }
        };
        B.fn[G] = function() {
            var c, d;
            d = arguments[0], c = 2 <= arguments.length ? b.call(arguments, 1) : [];
            if (I[d]) {
                return I[d].apply(this, c)
            } else {
                if (B.isFunction(d)) {
                    return I.init.apply(this, arguments)
                } else {
                    if (B.isPlainObject(d)) {
                        return I.init.apply(this, [null, d])
                    } else {
                        if (!d) {
                            return B.error("jQuery Waypoints needs a callback function or handler option.")
                        } else {
                            return B.error("The " + d + " method does not exist in jQuery Waypoints.")
                        }
                    }
                }
            }
        };
        B.fn[G].defaults = {
            context: x,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        F = {
            refresh: function() {
                return B.each(K, function(c, d) {
                    return d.refresh()
                })
            },
            viewportHeight: function() {
                var c;
                return (c = x.innerHeight) != null ? c : E.height()
            },
            aggregate: function(d) {
                var g, f, c;
                g = t;
                if (d) {
                    g = (c = K[B(d).data(q)]) != null ? c.waypoints : void 0
                }
                if (!g) {
                    return []
                }
                f = {
                    horizontal: [],
                    vertical: []
                };
                B.each(f, function(l, h) {
                    B.each(g[l], function(i, m) {
                        return h.push(m)
                    });
                    h.sort(function(i, m) {
                        return i.offset - m.offset
                    });
                    f[l] = B.map(h, function(i) {
                        return i.element
                    });
                    return f[l] = B.unique(f[l])
                });
                return f
            },
            above: function(c) {
                if (c == null) {
                    c = x
                }
                return F._filter(c, "vertical", function(d, f) {
                    return f.offset <= d.oldScroll.y
                })
            },
            below: function(c) {
                if (c == null) {
                    c = x
                }
                return F._filter(c, "vertical", function(d, f) {
                    return f.offset > d.oldScroll.y
                })
            },
            left: function(c) {
                if (c == null) {
                    c = x
                }
                return F._filter(c, "horizontal", function(d, f) {
                    return f.offset <= d.oldScroll.x
                })
            },
            right: function(c) {
                if (c == null) {
                    c = x
                }
                return F._filter(c, "horizontal", function(d, f) {
                    return f.offset > d.oldScroll.x
                })
            },
            enable: function() {
                return F._invoke("enable")
            },
            disable: function() {
                return F._invoke("disable")
            },
            destroy: function() {
                return F._invoke("destroy")
            },
            extendFn: function(c, d) {
                return I[c] = d
            },
            _invoke: function(c) {
                var d;
                d = B.extend({}, t.vertical, t.horizontal);
                return B.each(d, function(f, g) {
                    g[c]();
                    return true
                })
            },
            _filter: function(d, g, f) {
                var c, h;
                c = K[B(d).data(q)];
                if (!c) {
                    return []
                }
                h = [];
                B.each(c.waypoints[g], function(i, l) {
                    if (f(c, l)) {
                        return h.push(l)
                    }
                });
                h.sort(function(i, l) {
                    return i.offset - l.offset
                });
                return B.map(h, function(i) {
                    return i.element
                })
            }
        };
        B[C] = function() {
            var c, d;
            d = arguments[0], c = 2 <= arguments.length ? b.call(arguments, 1) : [];
            if (F[d]) {
                return F[d].apply(null, c)
            } else {
                return F.aggregate.call(null, d)
            }
        };
        B[C].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return E.load(function() {
            return B[C]("refresh")
        })
    })
}).call(this);
$(function() {
    var b = $(".promo-grid");
    var g = $(".promo-large-landscape, .promo-large-portrait");
    var c = $(".promo-small-landscape.firefox-download");
    var e = "ontouchstart" in window || navigator.msMaxTouchPoints || navigator.maxTouchPoints;
    function h() {
        c.find(".download-other-desktop").show()
    }
    function f() {
        var m;
        function k() {
            var n = $(this);
            if (!b.hasClass("scroll")&&!n.hasClass("show")) {
                n.addClass("show")
            }
        }
        function j() {
            var n = $(this);
            if (!n.hasClass("show")) {
                n.addClass("show")
            }
        }
        function l() {
            var n = $(this);
            if (n.hasClass("show")) {
                n.removeClass("show")
            }
        }
        g.on("mousemove", k);
        g.on("mouseleave", l);
        g.on("focus", j);
        $(".promo-large-landscape > a, .promo-large-portrait > a").on("blur", function() {
            var n = $(this).parent();
            if (n.hasClass("show")) {
                n.removeClass("show")
            }
        });
        c.on("mouseenter focusin", j);
        c.on("mouseleave focusout", l);
        $(window).on("scroll", function() {
            clearTimeout(m);
            if (!b.hasClass("scroll")) {
                b.addClass("scroll")
            }
            m = setTimeout(function() {
                b.removeClass("scroll")
            }, 200)
        })
    }
    function d() {
        var l;
        function k() {
            var o = b.find(".promo-large-landscape.show-touch, .promo-large-portrait.show-touch");
            var m;
            var n;
            if (o.length > 0) {
                m = o.find(".primary");
                n = o.find(".secondary");
                setTimeout(function() {
                    o.find("a.panel-link").css("visibility", "hidden");
                    n.removeClass("fadein");
                    n.css("visibility", "hidden");
                    m.css("visibility", "visible");
                    m.removeClass("fadeout");
                    o.removeClass("show-touch")
                }, 300)
            }
        }
        function j() {
            if (c.hasClass("show-touch")) {
                c.find(".secondary").removeClass("fadein");
                setTimeout(function() {
                    c.find(".secondary").css("visibility", "hidden");
                    c.find(".primary").removeClass("out");
                    c.removeClass("show-touch")
                }, 300)
            }
        }
        g.on("click focus", function(p) {
            var o = $(this);
            var m;
            var n;
            if (!o.hasClass("show-touch")) {
                p.preventDefault();
                m = o.find(".primary");
                n = o.find(".secondary");
                k();
                j();
                clearTimeout(l);
                o.addClass("show-touch");
                m.addClass("fadeout");
                o.find("a.panel-link").css("visibility", "visible");
                l = setTimeout(function() {
                    m.css("visibility", "hidden");
                    n.css("visibility", "visible");
                    n.addClass("fadein")
                }, 300)
            }
        });
        $(".promo-large-landscape > a, .promo-large-portrait > a").on("blur", function() {
            var m = $(this).parent();
            if (m.hasClass("show-touch")) {
                k()
            }
        });
        c.on("click focus", function(o) {
            var m;
            var n;
            if (!c.hasClass("show-touch")) {
                o.preventDefault();
                m = c.find(".primary");
                n = c.find(".secondary");
                k();
                clearTimeout(l);
                c.addClass("show-touch");
                m.addClass("out");
                l = setTimeout(function() {
                    n.css("visibility", "visible").addClass("fadein")
                }, 300)
            }
        })
    }
    function i() {
        var j = navigator.userAgent.indexOf("Safari")!==-1 && navigator.userAgent.indexOf("Chrome")===-1;
        if (j) {
            b.addClass("reveal")
        } else {
            b.addClass("stagger reveal")
        }
    }
    function a() {
        var j = $("#twt-body");
        if (j.length > 0 && (j[0].scrollHeight > j.innerHeight())) {
            j.find(".ellipsis").show()
        }
    }
    h();
    a();
    i();
    if (e) {
        b.addClass("has-touch");
        d()
    } else {
        f()
    }
});
$(function() {
    function b(e, d, f) {
        if (typeof f === "function") {
            gaTrack(["_trackEvent", "Homepage Interactions", e, d], f)
        } else {
            gaTrack(["_trackEvent", "Homepage Interactions", e, d])
        }
    }
    function c(d, f, e, g) {
        gaTrack(["_setCustomVar", 10, "Homepage Tile Position", d, 3]);
        gaTrack(["_setCustomVar", 11, "Homepage Tile Size", f, 3]);
        if (typeof g === "function") {
            gaTrack(["_trackEvent", "Homepage Interactions", "tile click", e], g)
        } else {
            gaTrack(["_trackEvent", "Homepage Interactions", "tile click", e])
        }
    }
    function a(e, d, f) {
        if (typeof f === "function") {
            gaTrack(["_trackEvent", "Firefox Downloads", e, d], f)
        } else {
            gaTrack(["_trackEvent", "Firefox Downloads", e, d])
        }
    }
    $(".module").waypoint(function(d) {
        if (d === "down") {
            var e = $(this).prop("id");
            gaTrack(["_trackEvent", "Homepage Interactions", "scroll", e])
        }
    }, {
        offset: "100%"
    });
    $("#nav-main-menu li a").on("click", function(g) {
        var f = $(this).data("name");
        var d = this.href;
        var i = (this.target === "_blank" || g.metaKey || g.ctrlKey);
        var h;
        if (i) {
            b("nav click", f)
        } else {
            g.preventDefault();
            h = function() {
                window.location = d
            };
            b("nav click", f, h)
        }
    });
    $(".promo-large-portrait > a.panel-link, .promo-large-landscape > a.panel-link").on("click", function(i) {
        var d = $(this).parent();
        var l = d.prop("id");
        var g = d.data("name");
        var h = d.hasClass("promo-large-portrait") ? "portrait": "landscape";
        var k = (this.target === "_blank" || i.metaKey || i.ctrlKey);
        var f = this.href;
        var j = function() {
            window.location = f
        };
        if (k) {
            c(l, "promo-large-" + h, g)
        } else {
            i.preventDefault();
            c(l, "promo-large-" + h, g, j)
        }
    });
    $(".promo-small-landscape > a.panel-link").on("click", function(h) {
        var d = $(this).parent();
        var k = d.prop("id");
        var g = d.data("name");
        var j = (this.target === "_blank" || h.metaKey || h.ctrlKey);
        var f = this.href;
        var i = function() {
            window.location = f
        };
        if (j) {
            c(k, "promo-small-landscape", g)
        } else {
            h.preventDefault();
            c(k, "promo-small-landscape", g, i)
        }
    });
    $(".promo-face > a").on("click", function(g) {
        var d = $(this).parent();
        var j = d.prop("id");
        var i = (this.target === "_blank" || g.metaKey || g.ctrlKey);
        var f = this.href;
        var h = function() {
            window.location = f
        };
        if (i) {
            c(j, "promo-face", "Mozillians")
        } else {
            g.preventDefault();
            c(j, "promo-face", "Mozillians", h)
        }
    });
    $(".twt-actions > a").on("click", function(i) {
        var h = $(this);
        var d = h.closest("li");
        var l = d.prop("id");
        var g = h.attr("title");
        var k = (this.target === "_blank" || i.metaKey || i.ctrlKey);
        var f = this.href;
        var j = function() {
            window.location = f
        };
        if (k) {
            c(l, "promo-small-landscape", "Mozilla Tweets " + g)
        } else {
            i.preventDefault();
            c(l, "promo-small-landscape", "Mozilla Tweets " + g, j)
        }
    });
    $(".promo-small-landscape.firefox-download a.download-link").on("click", function(h) {
        var j = $(this);
        var l = j.closest(".promo-small-landscape");
        var f = l.prop("id");
        var i = l.find("li.os_android:visible").length > 0;
        var k = i ? "Firefox Android": "Firefox Desktop";
        var g = (this.target === "_blank" || h.metaKey || h.ctrlKey);
        var d = this.href;
        var m = function() {
            window.location = d
        };
        gaTrack(["_setCustomVar", 10, "Homepage Tile Position", f, 3]);
        gaTrack(["_setCustomVar", 11, "Homepage Tile Size", "promo-small-landscape", 3]);
        if (g) {
            a("download click - top", k)
        } else {
            h.preventDefault();
            a("download click - top", k, m)
        }
    });
    $("#firefox-download-section a.download-link").on("click", function(i) {
        var h = $(this);
        var g = h.parent().hasClass("os_android");
        var f = g ? "Firefox Android": "Firefox Desktop";
        var k = (this.target === "_blank" || i.metaKey || i.ctrlKey);
        var d = this.href;
        var j = function() {
            window.location = d
        };
        if (k) {
            a("download click - primary", f)
        } else {
            i.preventDefault();
            a("download click - primary", f, j)
        }
    });
    $("#upcoming-events a").on("click", function(f) {
        var h = (this.target === "_blank" || f.metaKey || f.ctrlKey);
        var d = this.href;
        var g = function() {
            window.location = d
        };
        if (h) {
            b("Upcoming Event Link Clicks", d)
        } else {
            f.preventDefault();
            b("Upcoming Event Link Clicks", d, g)
        }
    });
    $(".contribute-btn").on("click", function(f) {
        var h = (this.target === "_blank" || f.metaKey || f.ctrlKey);
        var d = this.href;
        var g = function() {
            window.location = d
        };
        if (h) {
            b("button click", "Get Involved with Mozilla today")
        } else {
            f.preventDefault();
            b("button click", "Get Involved with Mozilla today", g)
        }
    });
    $("#secondary-links a").on("click", function(f) {
        var h = (this.target === "_blank" || f.metaKey || f.ctrlKey);
        var d = this.href;
        var g = function() {
            window.location = d
        };
        if (h) {
            b("Secondary Link Clicks", d)
        } else {
            f.preventDefault();
            b("Secondary Link Clicks", d, g)
        }
    })
});
if (typeof Mozilla == "undefined") {
    var Mozilla = {}
}
$(function() {
    if (typeof Mozilla.Homepage == "undefined") {
        Mozilla.Homepage = {}
    }
    var f = $(window);
    var d = $("#scroll-prompt");
    var c = $("#firefox-download-section");
    var a;
    function b() {
        clearTimeout(a);
        f.off("scroll.prompt", scroll);
        d.off("click", e);
        d.stop().fadeOut()
    }
    function e() {
        b();
        $("html, body").animate({
            scrollTop: c.offset().top - 180
        }, 1500)
    }
    function g() {
        var i = f.innerWidth();
        var h = (i > 660) && (i <= 1300);
        if (h && f.scrollTop() === 0) {
            a = setTimeout(function() {
                if (f.scrollTop() === 0) {
                    d.fadeIn();
                    d.on("click", e);
                    f.one("scroll.prompt", b);
                    gaTrack(["_trackEvent", "Homepage Interactions", "scroll prompt"])
                }
            }, 4000)
        }
    }
    Mozilla.Homepage.initScrollPrompt = g
});
