(function(a) {
    if (!("_gaq" in window)) {
        window._gaq = [];
    }
})(jQuery);
(function(e) {
    var c = e("#title_recs"), d = c.attr("data-caller-name") || "unknown";
    function b(g, j, i) {
        var h = "/rg/" + g + "/" + j + "/";
        if ("consoleLog" in window) {
            consoleLog(h, "recs");
        }
        e("<img>").attr("src", h + "/images/b.gif" + (i ? "?link=" + i : ""));
    }
    function a(g, h) {
        b("recs-" + d, g, h);
    }
    function f(h, j, i) {
        var g = j + "";
        while (g.length < i) {
            g = h + g;
        }
        return g;
    }
    c.delegate(".rec_nav_left", "click", function() {
        a("nav_left");
    });
    c.delegate(".rec_nav_right", "click", function() {
        a("nav_right");
    });
    c.delegate(".rec_not_interested", "click", function() {
        a("not_interested");
    });
    c.delegate(".rec_next", "click", function() {
        a("next");
    });
    c.delegate(".add_to_watchlist a", "click", function() {
        a("watchlist");
    });
    c.delegate(".rating-list", "change.rating", function(k, i) {
        var l = e(this), h = f("0", i.rating, 2), g = Math.round(i.imdbRating * 2) / 2, j = h - g;
        a("rating_s:" + h + "_d:" + j);
    });
    c.delegate(".rec-reasons a", "click", function(h) {
        var i = e(this), g = i.attr("href");
        a("reason", g);
    });
    c.delegate(".rec-title a", "click", function(h) {
        var i = e(this), g = i.attr("href");
        a("title", g);
    });
    c.delegate(".rec_poster a", "click", function(h) {
        var i = e(this), g = i.attr("href");
        a("poster", g);
    });
    c.live("itemrequest", function(h, g) {
        a("selected_" + g.cause);
    });
    c.live("rec_has_widget", function(g) {
        a("has_widget");
    });
})(jQuery);
(function(a) {
    a.widget("ui.rec_widget", {
        _create: function() {
            var k = this, n = k.element, g = a(".rec_overviews", n), i = a(".rec_spinner", n), m = a(".rec_nav_left, .rec_nav_right", n), d = 300;
            n.trigger("rec_has_widget");
            n.delegate(".rec_item", "click", function() {
                l(a(this), "click");
                return false;
            });
            n.delegate(".rec_item", "mouseenter", function() {
                var o = this;
                if (this.timerId) {
                    return;
                }
                this.timerId = setTimeout(function() {
                    l(a(o), "hover");
                }, d);
            });
            n.delegate(".rec_item", "mouseleave", function() {
                if (this.timerId) {
                    clearTimeout(this.timerId);
                }
                this.timerId = null;
            });
            n.bind("rec_slider_slide", function(p) {
                var o = a(".rec_page.rec_selected .rec_item", n).first();
                l(o, "slide");
            });
            n.bind("rec_slider_init", function(p) {
                var o = a(".rec_page.rec_selected .rec_item", n).first();
                l(o, "init");
            });
            n.bind("wlb_user_interaction", function() {
                var p = a(this), o = a(".rec_item.rec_selected", n);
                e(o, "rec_is_pending");
                b("watchlist");
            });
            n.delegate(".rating-stars a, .rating-cancel", "click", function() {
                var p = a(this), o = a(".rec_item.rec_selected", n);
                e(o, "rec_is_pending");
                b("rating");
            });
            n.bind("wlb_async_update", function(r, q) {
                var s = a(this), p = q.tconst, o = a('.rec_item[data-tconst="' + p + '"]', n);
                if (q.list_item_id) {
                    e(o, "rec_in_watchlist");
                } else {
                    c(o, "rec_in_watchlist");
                }
                n.rec_slider("requestItems");
            });
            n.bind("wlb_ready", function(q, p) {
                if (p.inwatchlist) {
                    var o = p.tconst;
                    var r = a(".rec_actions", n).find("input").attr("value");
                    a.ajax({
                        url: "/widget/recommendations/_ajax/updatePersonalization",
                        type: "POST",
                        data: {
                            tconst: o,
                            xsrf: r,
                            rating: "w"
                        },
                        beforeSend: window.addClickstreamHeadersToAjax,
                        error: function(s) {
                            f("Ajax error occured.");
                        },
                        success: function(s) {
                            if (s && s.status != 200) {
                                this.error(s);
                                return;
                            }
                        }
                    });
                }
            });
            n.delegate(".rating-list", "change.rating", function(t, s) {
                var r = s.tconst, p = a('.rec_item[data-tconst="' + r + '"]', n), o = p.find(".rec_rating_glyph"), q = s.rating < 10 ? "&nbsp;" + s.rating: s.rating;
                if (s.rating > 0 && s.state === "your") {
                    e(p, "rec_has_rating");
                    o.html(q);
                } else {
                    c(p, "rec_has_rating");
                }
                n.rec_slider("requestItems");
            });
            n.delegate(".rating-list", "ready.rating", function(p, o) {
                if (o.state == "imdb") {
                    return;
                }
                var q = a(this).closest(".rec_overview").find("input").attr("value");
                a.ajax({
                    url: "/widget/recommendations/_ajax/updatePersonalization",
                    type: "POST",
                    data: {
                        tconst: o.tconst,
                        xsrf: q,
                        rating: o.rating
                    },
                    beforeSend: window.addClickstreamHeadersToAjax,
                    error: function(r) {
                        f("Ajax error occured.");
                    },
                    success: function(r) {
                        if (r && r.status != 200) {
                            this.error(r);
                            return;
                        }
                    }
                });
            });
            n.delegate(".rec_actions .rec_not_interested", "click", function() {
                var o = a(".rec_item.rec_selected", n), p = o.attr("data-tconst"), q = a(this).closest(".rec_actions").find("input").attr("value");
                a.ajax({
                    url: "/widget/recommendations/_ajax/not_interested",
                    type: "POST",
                    data: {
                        tconst: p,
                        xsrf: q
                    },
                    beforeSend: window.addClickstreamHeadersToAjax,
                    error: function(r) {
                        f("Ajax error occured.");
                        c(o, "rec_is_pending");
                    },
                    success: function(r) {
                        if (r && r.status != 200) {
                            this.error(r);
                            return;
                        }
                        e(o, "rec_is_blocked");
                        n.rec_slider("requestItems");
                    }
                });
                e(o, "rec_is_pending");
                b("notInterested");
            });
            n.delegate(".rec_actions .rec_next", "click", function() {
                b("next");
            });
            n.rec_slider();
            a(window).trigger("bindloadlate");
            function e(p, o) {
                p.find(".rec_overlay").removeClass("rec_is_pending").addClass(o);
            }
            function c(p, o) {
                p.find(".rec_overlay").removeClass("rec_is_pending").removeClass(o);
            }
            function b(q) {
                var o = a(".rec_item.rec_selected", n), p = a(".rec_page.rec_selected", n), r = o.next(), s = p.next();
                if (r.length > 0) {
                    l(r, q);
                } else {
                    if (s.length > 0) {
                        n.rec_slider("slideTo", s.index());
                    } else {
                        n.rec_slider("slideTo", 0);
                    }
                }
            }
            function l(o, r) {
                var s = a(".rec_item", n), q = a(".rec_page", n), p = o.parent();
                if (o.length === 0) {
                    return;
                }
                s.removeClass("rec_selected");
                o.addClass("rec_selected");
                j(o.attr("data-tconst"), o.attr("data-info"), n.attr("data-caller-name"));
                h(o.attr("data-spec").split(",")[0]);
                n.trigger("itemrequest", {
                    cause: r,
                    position: o.index() + 1,
                    curr_page: p.index() + 1,
                    max_pages: q.length
                });
            }
            function h(o) {
                var q = a("h2.rec_heading_wrapper [data-spec]"), r = q.filter('[data-spec="' + o + '"]'), p = a("#title_recs").attr("class", "rec_wrapper " + o.split(/:/)[0]);
                q.hide();
                r.show();
            }
            function j(t, u, s) {
                var o = a(".rec_overview", g), q = o.filter('[data-tconst="' + t + '"]');
                var p = a("#title_recs.rec_wrapper").attr("data-ref");
                var r;
                if (p) {
                    r = p + "_rec_";
                }
                if (!t) {
                    return;
                }
                if (q.length > 0) {
                    o.hide();
                    q.show();
                } else {
                    i.addClass("rec_loading");
                    a.ajax({
                        url: "/widget/recommendations/_ajax/get_title_info",
                        type: "POST",
                        data: {
                            tconst: t,
                            info: u,
                            caller_name: s,
                            ref_marker_prefix: r
                        },
                        beforeSend: window.addClickstreamHeadersToAjax,
                        error: function(v) {
                            f("Ajax error occured.");
                        },
                        success: function(x) {
                            var y, v;
                            if (x && x.status != 200) {
                                this.error(x);
                                return;
                            }
                            o = a(".rec_overview", g);
                            q = o.filter('[data-tconst="' + t + '"]');
                            if (q.length > 0) {
                                j(t, u, s);
                                return;
                            }
                            q = a(x.html_title_info);
                            o.hide();
                            g.append(q);
                            y = a(".wlb_wrapper", q);
                            v = a(".rating-list", q);
                            i.removeClass("rec_loading");
                            var w = q.find(".rec_poster_img");
                            if (w.hasClass("loadlate")) {
                                w.attr("src", w.attr("loadlate"));
                                w.removeClass("loadlate");
                                w.removeClass("hidden");
                            }
                            y.wlb_lite();
                            if (x.rating_info.uconst) {
                                v.rating({
                                    uconst: x.rating_info.uconst,
                                    widgetClass: x.rating_info.widget_class,
                                    ajaxURL: "/ratings/_ajax/title",
                                    starWidth: x.rating_info.star_width,
                                    errorMessage: x.rating_info.error_message,
                                    images: {
                                        imdb: x.rating_info.images_imdb,
                                        off: x.rating_info.images_off,
                                        your: x.rating_info.images_your,
                                        del: x.rating_info.images_del,
                                        info: x.rating_info.images_info
                                    }
                                });
                            }
                            n.trigger("recs_title_update");
                        }
                    });
                }
            }
            function f(o) {
                if ("console" in window && "log" in window.console) {
                    window.console.log(o);
                }
            }
        }
    });
    a(function() {
        a("img.rec_placeholder").each(function() {
            var b = a(this);
            b.parent().load(b.attr("data-widget"));
        });
    });
})(jQuery);
(function(c) {
    var a = 6;
    c.widget("ui.rec_slider", {
        _create: function() {
            var d = this, e = d.element;
            c.extend(d, {
                $slide: c(".rec_slide", e),
                $left: c(".rec_nav_left", e),
                $right: c(".rec_nav_right", e),
                $page_num: c(".rec_nav_page_num", e),
                specs: e.attr("data-specs").split(","),
                per_req: e.attr("data-items-per-request"),
                per_page: e.attr("data-items-per-page"),
                caller_name: e.attr("data-caller-name")
            });
            d.$right.click(function() {
                var f = c(".rec_page.rec_selected", e).index();
                if (c(this).hasClass("disabled")) {
                    return;
                }
                d.slideTo(f + 1);
            });
            d.$left.click(function() {
                var f = c(".rec_page.rec_selected", e).index();
                if (c(this).hasClass("disabled")) {
                    return;
                }
                d.slideTo(f - 1);
            });
            d.updateNav();
            if (c(".rec_page", e).length <= 1) {
                d.requestItems();
            }
        },
        updateNav: function() {
            var e = this, f = e.element, h = c(".rec_page", f), d = h.length - 1, g = 0;
            if (h.filter(".rec_selected").length === 0) {
                h.eq(0).addClass("rec_selected");
                f.trigger("rec_slider_init");
            }
            g = h.filter(".rec_selected").index();
            if (g <= 0) {
                e.$left.addClass("rec_nav_disabled");
            } else {
                e.$left.removeClass("rec_nav_disabled");
            }
            if (g >= d) {
                e.$right.addClass("rec_nav_disabled");
            } else {
                e.$right.removeClass("rec_nav_disabled");
            }
            e.$slide.width(h.width() * h.length);
        },
        slideTo: function(e) {
            var f = this, g = f.element, i = c(".rec_page", g), d = i.length - 1, h = i.filter(".rec_selected").index(), j = e - h;
            if (i.length === 0) {
                return;
            }
            if (e >= 0 && e <= d) {
                if (this.timerId) {
                    clearTimeout(f.timerId);
                }
                i.removeClass("rec_selected");
                i.eq(e).addClass("rec_selected");
                f.$slide.stop().animate({
                    left: - (i.width() * e)
                }, function() {
                    f.timerId = setTimeout(function() {
                        g.trigger("rec_slider_slide");
                    }, 10);
                });
                f.$page_num.html((e + 1) + " of " + (d + 1));
                if (j > 0) {
                    f.requestItems();
                }
            }
            f.updateNav();
        },
        requestItems: function() {
            var k = this, m = k.element, e = c(".rec_item", m), j = c(".rec_page", m), d = j.filter(".rec_selected").index(), f = j.length - 1, i = k.specs[0], l = 0;
            var g = c("#title_recs.rec_wrapper").attr("data-ref");
            var h;
            if (g) {
                h = g + "_rec_tt";
            }
            if (d < f - 1) {
                return;
            }
            if (i) {
                l = e.filter('[data-spec*="' + i + '"]').length;
            } else {
                if (e.length < a) {
                    m.parents(".article").hide();
                }
                b("No more data is available.");
                return;
            }
            c.ajax({
                url: "/widget/recommendations/_ajax/get_more_recs",
                type: "POST",
                data: {
                    count: k.per_req,
                    start: l,
                    specs: k.specs.join(","),
                    caller_name: k.caller_name,
                    ref_marker: h
                },
                beforeSend: window.addClickstreamHeadersToAjax,
                error: function(n) {
                    b("Ajax error occured.");
                    if (c(".rec_item", m).length < a) {
                        m.parents(".article").hide();
                    }
                },
                success: function(p) {
                    var n = c('.rec_item[data-spec*="' + i + '"]', m), o = n.length, q = l;
                    if (!p || p.status != 200) {
                        this.error(p);
                        return;
                    }
                    if (q < o) {
                        b("Duplicate or overlapping request");
                        return;
                    }
                    if (p.spec && p.heading) {
                        k._insertHeading(p.spec, p.heading);
                    }
                    if ("specs" in p) {
                        k.specs = p.specs.split(",");
                    }
                    if (p.spec && "recommendations" in p) {
                        if (k._insertItems(p.spec, p.recommendations) >= a) {
                            m.parents(".article").show();
                        }
                    }
                    m.trigger("recs_slider_update");
                }
            });
        },
        _insertItems: function(j, d) {
            var l = this, n = l.element, e = c(".rec_item", n), f = c(".rec_page:last", n), i = c(".rec_grave", n), k = "none", g = e.length, m = 0, h = 0;
            c.each(d, function(p, r) {
                var q = e.filter('[data-tconst="' + r.tconst + '"]'), o = q.filter('[data-spec="' + j + '"]');
                if (o.length > 0) {
                    return;
                }
                if (q.length > 0) {
                    m++;
                    i.append(c(r.content));
                    return;
                }
                if (f.length === 0 || f.children().length >= l.per_page) {
                    f = c("<div></div>").addClass("rec_page").appendTo(".rec_slide", n);
                }
                h++;
                f.append(c(r.content));
            });
            if (m + h === 0) {
                if (l.specs[0] === j) {
                    l.specs.shift();
                }
            } else {
                if (h > 0) {
                    if (g === 0) {
                        k = c(".rec_page:eq(0) .rec_item:eq(0)").attr("data-spec");
                        n.trigger("rec_items_loaded", k);
                    }
                    c(window).trigger("bindloadlate");
                    l.updateNav();
                }
            }
            if (h <= l.per_page) {
                l.requestItems();
            }
            return h;
        },
        _insertHeading: function(e, g) {
            var d = c("h2.rec_heading_wrapper"), f = d.find('[data-spec="' + e + '"]');
            if (f.length === 0) {
                c("<span></span>").attr("data-spec", e).html(g).hide().appendTo(d);
            }
        }
    });
    function b(d) {
        if ("consoleLog" in window) {
            consoleLog(d, "recs");
        } else {
            if ("console" in window && "log" in window.console) {
                window.console.log(d);
            }
        }
    }
})(jQuery);
