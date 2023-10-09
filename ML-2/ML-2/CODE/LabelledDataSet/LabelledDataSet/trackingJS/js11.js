/* From: production-mt-wfe-53-100-use1 : 25336 */
huff.unit("modal", function(c) {
    huff.css("_quickread");
    var e = this, b = [], a = {}, d = {};
    huff.use("jquery", function(g) {
        var f = function(i, j, h, k) {
            if (d[h] === undefined) {
                h = "default"
            }
            d[h][j](i, k)
        };
        e.effect = function(i, h, j) {
            i = i || "default";
            if (undefined === h === j) {
                return d[i]
            }
            d[i] = {
                show: h,
                hide: j
            };
            huff.emit("modal/effect", i)
        };
        e.theme = function(i, h) {
            i = i || "default";
            if (undefined === h) {
                return a[i]
            }
            var j = a[i] = h;
            huff.emit("modal/theme", i, h)
        };
        e.visible = function() {
            return !!b.length
        };
        e.size = function() {
            return b.length
        };
        e.create = function(i) {
            i = i || {};
            i.theme = i.theme || "default";
            "embeds" in i || (i.embeds = true);
            var h = {}, j = a[i.theme];
            h.frame = g("<div>").hide().css("position", "relative").html(j.frame || "").prependTo("body");
            h.window = j.window ? h.frame.find(j.window) : h.frame;
            h.content = j.content ? h.frame.find(j.content) : h.frame;
            h.hide = function(k) {
                f(h.frame, "hide", i.effect, function() {
                    i["class"] && h.window.removeClass(i["class"]);
                    "function" === typeof i.onclose && i.onclose();
                    "function" === typeof k && k();
                    huff.emit("modal/hide", h, i);
                    h.frame.undelegate(j.closer).remove();
                    b.splice(h.index, 1);
                    h.toggleEmbedObjects("visible");
                    g("body").removeClass("masked");
                    delete h
                })
            };
            h.refresh = function(n, m) {
                var l = g.extend({}, i, n);
                h.frame.css("z-index", b[b.length - 1] ? parseInt(b[b.length - 1].frame[0].style.zIndex) + 1 : 7000002);
                l["class"] && h.window.addClass(l["class"]);
                j.init && j.init(h.window, l);
                h.content.html(l.content || j.loader);
                var k = i.onclose;
                i.onclose = function() {
                    "function" === typeof l.onclose && l.onclose.apply(this, arguments);
                    "function" === typeof k && k.apply(this, arguments)
                };
                "function" === typeof m && m(h, l)
            };
            h.show = function(l, k) {
                h.refresh(l, function(m, p) {
                    var n = function() {
                        "function" === typeof p.onshow && p.onshow(m.frame, p);
                        huff.emit("modal/show", m, p)
                    };
                    !i.content && i.url && g.ajax({
                        url: i.url,
                        type: i.type || "GET",
                        cache: i.cache === undefined ? true: i.cache,
                        success: function(r, q, o) {
                            m.update({
                                content: r,
                                onshow: n
                            })
                        },
                        error: m.hide
                    });
                    f(m.frame, "show", p.effect, (p.content ||!p.url) && n);
                    m.index = b.push(m) - 1;
                    m.toggleEmbedObjects("hidden");
                    g("body").addClass("masked")
                });
                return h
            };
            h.update = function(l, k) {
                i["class"] && h.window.removeClass(i["class"]);
                h.refresh(l, function(m, n) {
                    "function" === typeof n.onshow && n.onshow(m.frame, n);
                    huff.emit("modal/update", m, n);
                    "function" === typeof k && k(m, n)
                });
                return h
            };
            h.toggleEmbedObjects = function(k) {
                g("embed, object").each(function(l, m) {
                    m = g(m);
                    if (i.embeds && h.frame.find(m).length) {
                        return 
                    }
                    m.css("visibility", k);
                    m.attr("belongs_modal") && m.css("display", "visible" == k ? "block" : "none")
                })
            };
            h.frame.delegate(j.closer, "click", h.hide);
            return h
        };
        e.show = function(h) {
            return e.create(h).show()
        };
        e.hide = function() {
            if ("function" === typeof effect) {
                callback = effect, effect = undefined
            }
            if (!b.length) {
                return "function" === typeof callback && callback()
            }
            return b[b.length - 1].hide()
        };
        e.effect("default", function(h, i) {
            h.show();
            "function" === typeof i && i()
        }, function(h, i) {
            h.hide();
            "function" === typeof i && i()
        });
        e.effect("fade", function(h, i) {
            h.fadeIn("fast", i)
        }, function(h, i) {
            h.fadeOut("fast", i)
        });
        e.theme("default", {
            frame: '<div class="frame_qr" id="frame_qr"> <div class="qr_close close cursor_pointer"></div><div class="content"></div></div><div class="close qr_close_frame"></div>',
            loader: '<div class="wait_load"></div>',
            init: function(m, k) {
                m.width(k.width || "").height(k.height || "");
                var i = m.width(), n = g("body").width(), h = (document.body && document.body.scrollTop) ? document.body.scrollTop: document.documentElement.scrollTop, l = Math.ceil(n / 2 - i / 2);
                switch (k.position) {
                case"absolute":
                    var j = {
                        position: "absolute",
                        left: l,
                        top: h + 47 + "px"
                    };
                    break;
                default:
                    var j = {
                        position: "fixed",
                        left: "50%",
                        top: "7%",
                        "margin-left": "-" + (i / 2) + "px"
                    };
                    break
                }
                m.css(j);
                return 
            },
            window: "div:first",
            content: "div.content",
            closer: ".close"
        });
        e.theme("quickreads", {
            frame: '<div class="frame_qr" id="frame_qr"><div class="qr_close_a close cursor_pointer"></div><div class="content"></div></div><div class="close qr_close_frame"></div>',
            loader: '<div class="wait_load"></div>',
            init: function(m, k) {
                m.width(k.width || "").height(k.height || "");
                var i = m.width(), n = g("body").width(), h = (document.body && document.body.scrollTop) ? document.body.scrollTop: document.documentElement.scrollTop, l = Math.ceil(n / 2 - i / 2);
                switch (k.position) {
                case"absolute":
                    var j = {
                        position: "absolute",
                        left: l,
                        top: h + 47 + "px"
                    };
                    break;
                default:
                    var j = {
                        position: "fixed",
                        left: "50%",
                        top: "7%",
                        "margin-left": "-" + (i / 2 + 30) + "px"
                    };
                    break
                }
                m.css(j);
                return 
            },
            window: "div:first",
            content: "div.content",
            closer: ".close"
        });
        e.theme("yahoo", {
            frame: '<div class="frame_yahoo" id="frame_yahoo"><div class="yahoo_close_a close cursor_pointer"></div><div class="content"></div></div><div class="close yahoo_close_frame"></div>',
            loader: '<div class="wait_load"></div>',
            init: function(m, k) {
                m.width(k.width || "").height(k.height || "");
                var i = m.width(), n = g("body").width(), h = (document.body && document.body.scrollTop) ? document.body.scrollTop: document.documentElement.scrollTop, l = Math.ceil(n / 2 - i / 2);
                var j = {
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    "text-align": "center"
                };
                m.css(j);
                return 
            },
            window: "div:first",
            content: "div.content",
            closer: ".close"
        });
        c(e)
    })
});
huff.unit("image", function(a) {
    var b = this;
    b.url = function(c, d, e) {
        var f;
        if (!(f = /<HH--(DEV--)?PHOTO--([A-Z\-_0-9]*)--(\d+)--HH>/.exec(c))) {
            return false
        }
        if (undefined === e) {
            e = d.match(/(\w+)-(.*)/);
            e && (d = e[1], e = e[2])
        }
        return url = ["http://", f[1] ? "dev.assets.huffingtonpost.com": "i.huffpost.com", "/gen/", f[3], d === "original" ? "/original": "/thumbs/" + d + "-" + f[2] + "-" + e, ".jpg"].join("")
    };
    a(b)
});
huff.unit("layout", function(a) {
    var b = this;
    huff.use("jquery", function(c) {
        (function() {
            b.onscroll = function(f, h) {
                undefined === h && (h = f, f = undefined);
                var d = function(i, j) {
                    "function" === typeof h && h.call(i) && c(i).unbind("scroll", j).unbind("resize", j)
                }, g, e = function() {
                    var i = this, j = arguments.callee;
                    g && clearTimeout(g);
                    g = setTimeout(function() {
                        d(i, j)
                    }, 50)
                };
                c(f || window).scroll(e).resize(e)
            }
        })();
        (function() {
            var d = c(window), e = function(h, i) {
                "number" === typeof h && (h = [h, h]);
                return function(k, j, g) {
                    if (i&&!this.is(":visible")) {
                        return false
                    }
                    k = this.offset();
                    j = d.scrollTop() - h[1];
                    g = d.scrollLeft() - h[0];
                    return g <= k.left && g + d.width() + h[0] * 2 >= k.left + this.outerWidth() && j <= k.top && j + d.height() + h[1] * 2 >= k.top + this.outerHeight()
                }
            }, f = function(h, i) {
                "number" === typeof h && (h = [h, h]);
                return function(g) {
                    if (i&&!this.is(":visible")) {
                        return false
                    }
                    g = this.offset();
                    return d.scrollTop() + d.height() + h[1] > g.top && d.scrollLeft() + d.width() + h[0] > g.left
                }
            };
            b.seeable = function(h, j, k) {
                "function" === typeof j && (k = j, j = undefined);
                if (!j || j.length || "object" !== typeof j) {
                    j = {
                        spacing: j
                    }
                }
                var i = [], g = "function" === typeof j.spacing ? j.spacing: e(j.spacing || 0, j.only_visible);
                c(h).each(function(l, m) {
                    g.call(m = c(m)) ? "function" === typeof k && k.call(m) : i.push([m, k, g])
                });
                i.length && b.onscroll(j.frame, function() {
                    for (var n = 0, m = i.length; n < m; n++) {
                        i[n][2].call(i[n][0]) && (function(l) {
                            "function" === typeof l[1] && l[1].call(l[0])
                        })(i.splice(n--, 1)[0], m--)
                    }
                    return !i.length
                })
            };
            b.inview = function(g, h, i) {
                "function" === typeof h && (i = h, h = undefined);
                if (!h || h.length || "object" !== typeof h) {
                    h = {
                        spacing: h
                    }
                }
                h.spacing = f(h.spacing || 0, h.only_visible);
                return b.seeable(g, h, i)
            }
        })();
        b.load_image = function(f, d) {
            if ("" !== (d = d || f.attr("longDesc")) && f.is(":visible")) {
                if (!d) {
                    return 
                }
                if (f.is(":visible")) {
                    f.attr("src", d).removeAttr("longDesc");
                    f.removeClass("unloaded-image");
                    huff.emit("image/load", f, d)
                }
            }
        };
        b.lazy_images = function(d, e) {
            e || (e = {});
            e.spacing || (e.spacing = 400);
            d = c(d || document).find("img.unloaded-image");
            b.seeable(d, e, function() {
                b.load_image(this)
            })
        };
        a(b)
    })
});
huff.unit("cookies", {
    get: function(b, d) {
        var a, c = new RegExp("(?:^|; )" + encodeURIComponent(b) + "=([^;]*)");
        a = (a = c.exec(document.cookie)) ? decodeURIComponent(a[1]) : undefined;
        return "function" === typeof d ? d(a) : a
    },
    set: function(c, d, a) {
        a = a || {};
        if (d === null || d === undefined) {
            a.expires =- 1
        }
        if (typeof a.expires === "number") {
            var e = a.expires, b = a.expires = new Date();
            b.setDate(b.getDate() + e)
        }
        d = String(d);
        return (document.cookie = [encodeURIComponent(c), "=", a.raw ? d: encodeURIComponent(d), a.expires ? "; expires=" + a.expires.toUTCString(): "", a.path ? "; path=" + a.path: "", a.domain ? "; domain=" + a.domain: "", a.secure ? "; secure": ""].join(""))
    },
    del: function(a) {
        this.set(a, undefined)
    },
    enabled: function() {
        var a = (navigator.cookieEnabled) ? true: false;
        if (typeof navigator.cookieEnabled == "undefined"&&!a) {
            this.set("testcookie", "1");
            a = (document.cookie.indexOf("testcookie")!=-1) ? true : false;
            this.del("testcookie")
        }
        return (a)
    }
});
huff.unit("user", function(c) {
    var b = this, e = "." + location.hostname.replace(/www\./, ""), d = huff.beta ? "beta" + (location.port || 80) + "_": "", a = ["facebook", "twitter", "read_tracking", "gfc", "yahoo", "google", "linkedin", "aol", "winlive"];
    huff.use("jquery", "conf", "cookies", function(k, l, o) {
        var p = [], f = 1, m = arguments, g =+ (new Date()), h = function(i, q) {
            p.push(i);
            return o.get(d + i, q)
        }, n = function(q, r, i) {
            return o.set(d + q, r, {
                path: "/",
                expires: i,
                domain: "." + e
            })
        };
        b.id = h("huffpost_user_id");
        b.name = h("huffpost_user");
        b.logged = b.id && b.name ? true : false;
        b.guid = h("huffpost_user_guid");
        if (b.logged) {
            b.name = HPUtil.utf8_decode(b.name)
        }
        b.levels = h("huffpost_levels", function(i) {
            return "string" === typeof i ? i.split(",") : []
        });
        b.influence = {
            commented: {
                value: 0,
                check_date: g
            },
            blogged: {
                value: 0,
                check_date: g
            },
            shared: {
                value: 0,
                check_date: g
            },
            emailed: {
                value: 0,
                check_date: g
            }
        };
        b.id && h("huffpost_influence_" + b.id, function(q) {
            if (!q) {
                return 
            }
            q = JSON.parse(q);
            if ("object" === typeof q) {
                var r = new Date();
                r.setDate(r.getDate() - 30);
                r = Date.parse(r.toString());
                for (var i in q) {
                    if (q.hasOwnProperty(i) && b.influence[i]) {
                        b.influence[i] = q[i].check_date < r ? {
                            value: 0,
                            check_date: + (new Date())
                        } : q[i]
                    }
                }
            } else {
                n("huffpost_influence_" + b.id, JSON.stringify(b.influence))
            }
        });
        b.id && h("huffpost_prefs", function(r) {
            if (!r) {
                return 
            }
            r = r.split("");
            var q = arguments;
            if (r.length) {
                if (f--) {
                    var s = {};
                    var i = HPUtil.GetEntryID();
                    if (i) {
                        s.entry_id = i
                    }
                    k.post("/users/login/reauthenticate.php", s, function(t) {
                        t && (t = JSON.parse(t));
                        q.callee(h("huffpost_prefs"));
                        if ("object" === typeof t) {
                            jQuery(document).ready(function() {
                                SocialNotifications.setCounter(t.notifications)
                            });
                            if (t.hasOwnProperty("snp_entry_module")) {
                                SNPModule.addEntriesInside(t.snp_entry_module)
                            }
                        }
                    })
                } else {
                    huff.error("couldn't read user preferences or already read")
                }
            }
            return 
        });
        b.pref = function() {
            for (var r = 0, q = arguments.length; r < q; r++) {
                "string" === typeof arguments[r] && (arguments[r] = "user/pref/" + arguments[r])
            }
            return l.get.apply(l, arguments)
        };
        b.destroy = function() {
            for (var r = 0, q = p.length; r < q; r++) {
                n(p[r], undefined)
            }
            huff.emit("user/destroy");
            m.callee(k, l, o)
        };
        for (var j in b) {
            if (b.hasOwnProperty(j) && "function" !== typeof b[j]) {
                l.set("user/" + j, b[j])
            }
        }
        c(b)
    })
});
huff.unit("track", function(c) {
    if ("object" !== typeof HPTrack) {
        return c()
    }
    function a(f, h) {
        h.preventDefault();
        h.stopPropagation();
        var g = "Click from " + (HPConfig.current_vertical_name.charAt(0).toUpperCase() + HPConfig.current_vertical_name.substring(1).toLowerCase());
        HPTrack.trackEvent("Top Nav", g, f);
        try {
            if (undefined != bN) {
                bN.click(h)
            }
        } catch (d) {}
        if (typeof(h.target.href) !== undefined) {
            HPTrack.navigateAfterTrack(h, h.target.href)
        }
    }
    function b(i, j, f, h) {
        h.preventDefault();
        h.stopPropagation();
        var g = "Click from " + (HPConfig.current_vertical_name.charAt(0).toUpperCase() + HPConfig.current_vertical_name.substring(1).toLowerCase());
        HPTrack.trackEvent("Top Nav Item", "TNI -" + g, "TNI - " + f);
        if (i) {
            HPTrack.trackEvent("Top Nav Section", "TNS - " + g, "TNS - " + i)
        }
        if (j) {
            HPTrack.trackEvent("Top Nav Dropdown", "TND - " + g, "TND - " + j)
        }
        if (j && i) {
            HPTrack.trackEvent("Top Nav DS - " + j, "TNDS - " + g, "TNDS - " + i)
        }
        if (j) {
            HPTrack.trackEvent("Top Nav DI - " + j, "TNDI - " + g, "TNDI - " + f)
        }
        try {
            if (undefined != bN) {
                bN.click(h)
            }
        } catch (d) {}
        if (typeof(h.target.href) !== undefined) {
            HPTrack.navigateAfterTrack(h, h.target.href)
        }
    }
    huff.use("jquery", function(d) {
        huff.on("topnav/click", function(i) {
            var h = i.target;
            var f = h.title;
            if (!f) {
                var g = d(h).text();
                f = g.charAt(0).toUpperCase() + g.substring(1).toLowerCase();
                f = d.trim(f)
            }
            a(f, i)
        });
        huff.on("topnavnew/click", function(i) {
            var h = i.target;
            var f = h.title;
            if (!f) {
                var g = d(h).text();
                f = g.charAt(0).toUpperCase() + g.substring(1).toLowerCase();
                f = d.trim(f)
            }
            b("TopTab", f, f, i)
        });
        huff.on("topnavnew_vertical_list/click", function(i) {
            var h = i.target;
            var f = h.title;
            if (!f) {
                var g = d(h).text();
                f = g.charAt(0).toUpperCase() + g.substring(1).toLowerCase();
                f = d.trim(f)
            }
            var j = d(event.target).closest("div.relative").children(".topnav_tab_link").text();
            j = j.charAt(0).toUpperCase() + j.substring(1).toLowerCase();
            j = d.trim(j);
            b("Vertical List", j, f, i)
        });
        huff.on("topnavnew_like_list/click", function(i) {
            var h = i.target;
            var f = h.title;
            if (!f) {
                var g = d(h).text();
                f = g.charAt(0).toUpperCase() + g.substring(1).toLowerCase();
                f = d.trim(f)
            }
            var j = d(event.target).closest("div.relative").children(".topnav_tab_link").text();
            j = j.charAt(0).toUpperCase() + j.substring(1).toLowerCase();
            j = d.trim(j);
            b("You Might Also Like", j, f, i)
        });
        huff.on("topnavnew_trending/click", function(h) {
            var g = h.target;
            var f = g.title || d.trim(d(g).text());
            var i = d(event.target).closest("div.relative").children(".topnav_tab_link").text();
            i = i.charAt(0).toUpperCase() + i.substring(1).toLowerCase();
            i = d.trim(i);
            b("Trending Stories", i, f, h)
        });
        huff.on("topnavnew_all_sections/click", function(i) {
            var h = i.target;
            var f = h.title;
            if (!f) {
                var g = d(h).text();
                f = g.charAt(0).toUpperCase() + g.substring(1).toLowerCase();
                f = d.trim(f)
            }
            b("", "All Sections", f, i)
        });
        huff.on("topnavnew_blogs/click", function(i) {
            var h = i.target;
            var f = h.title;
            if (!f) {
                var g = d(h).text();
                f = g.charAt(0).toUpperCase() + g.substring(1).toLowerCase();
                f = d.trim(f)
            }
            b("", "Blogs", f, i)
        });
        huff.on("topnavnew_subnav/click", function(i) {
            var h = i.target;
            var f = h.title;
            if (!f) {
                var g = d(h).text();
                f = g.charAt(0).toUpperCase() + g.substring(1).toLowerCase();
                f = d.trim(f)
            }
            b("Subnav", "", f, i)
        })
    });
    huff.on("topnav/signup", function(d) {
        HPTrack.trackEvent("Login/Signup", "Click in Top Nav", d)
    });
    huff.use("jquery", function(e) {
        var d = e(document).scrollTop();
        if (!HPTrack._furthest_scrolled || HPTrack._furthest_scrolled < d) {
            HPTrack._furthest_scrolled = d
        }
    });
    c()
});
huff.unit("common", function(a) {
    huff.use("front/quickread");
    huff.use("jquery", "conf", "cookies", function(d, b, c) {
        b.get("topnav/version", function(e) {
            if (e === "1") {
                huff.use("front/topnav")
            }
        });
        huff.use("layout", function(e) {
            huff.on("content/update", function(f) {
                f && (f = jQuery(f));
                e.lazy_images(f)
            });
            huff.emit("content/update")
        });
        b.get("ads/zone", function(e) {
            huff.use("front/quickread", function(f) {
                f.ad_zone = e + "/quickread";
                f.hint("#featured_content .quickread_link, #news_column .quickread_link, #grid_left_bl .quickread_link, #right_column_entries .quickread_link, #mynews-columns .quickread_link, #column-2 .quickread_link, #sidebar_right .quickread_link, .mod-tedsplash .quickread_link", function(h) {
                    var g = h.parent().attr("href").match(/_[n|b]_(\d+)\./) || h.attr("id").match(/image_(\d+)/) || h.parent().attr("id").match(/entry_id_(\d+)/);
                    g && g[1] && f.show(g[1])
                });
                d(document).delegate(".quick_read_link", "click", function(h) {
                    var g = d(h.currentTarget).attr("href").match(/_[n|b]_(\d+)\./);
                    f.mp = d(h.currentTarget).attr("href").match(/ref=mostpopular/);
                    if (g && g[1]) {
                        f.show(g[1]);
                        h.preventDefault()
                    }
                })
            })
        });
        if (HPUtil) {
            HPUtil.cleanup_cookies();
            HPUtil.migrate_cookies();
            HPUtil.onPageReady(function() {
                if (HPConfig.site === "italy" || HPConfig.site === "spain" || HPConfig.site === "germany" || HPConfig.site === "france" || HPConfig.site === "greece") {
                    huff.use("util/cookieconsent", function(e) {
                        e.init()
                    })
                }
            });
            if ("signup" === HPUtil.getUrlVar("auth")) {
                HPConnect.Signup()
            } else {
                if ("login" === HPUtil.getUrlVar("auth")) {
                    HPConnect.Login()
                } else {
                    if ("verify" === HPUtil.getUrlVar("auth")) {
                        HPConnect.Verify()
                    }
                }
            }
            HPUtil.onPageReady(function() {
                if ("germany" === HPConfig.site) {
                    try {
                        var n = jQuery(window);
                        var g = jQuery("#wrapper");
                        var j = jQuery("#tfm_skyscraper #ad_right_skyscraper");
                        var h = 180;
                        if (g.length && j.length && "" !== j.html()) {
                            var l = n.width();
                            var o = g.width();
                            var p = g.offset().left;
                            var f = l - (o + p);
                            if (f < h) {
                                var i = h - f;
                                if (p > i) {
                                    var k = p - i;
                                    g.animate({
                                        "margin-left": k
                                    }, 400, function() {
                                        document._rail_left_position_reset = true
                                    })
                                }
                            }
                        }
                    } catch (m) {}
                }
                return 
            })
        }
        c.get("br_fp") || huff.use("br_fp");
        if (d(".top_entry_share_count").length) {
            d(".top_entry_share_count").click(function() {
                var g = d(this).attr("href");
                if (g) {
                    var h = g.match(/_(\d+).html/);
                    var e = h[1];
                    var f = b.get("vertical") || "";
                    HPTrack.trackEvent("Shares count", "Click from" + f, "Entry:" + e);
                    return 
                }
            })
        }
        a()
    })
});
huff.unit("promo", function(a) {
    /iphone|ipad|ipod|android|blackberry/.test(navigator.userAgent.toLowerCase()) && huff.use("promo/mobile");
    a()
});

/* From: production-mt-wfe-53-100-use1 : 25336 */
/* a67cccb80cc3039a0690e1b0fd4d00024bd9b3fa */
