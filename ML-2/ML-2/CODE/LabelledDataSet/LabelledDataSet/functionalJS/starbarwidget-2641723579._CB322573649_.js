jQuery(document).ready(function() {
    var a = ".rating";
    jQuery(a).each(function(b) {
        if (jQuery(this).attr("data-starbar-class") != null) {
            jQuery(this).rating({
                uconst: jQuery(this).attr("data-user"),
                widgetClass: jQuery(this).attr("data-starbar-class"),
                ajaxURL: "/ratings/_ajax/title",
                errorMessage: "Oops! Please try again later."
            });
        }
    });
});
(function(b) {
    jQuery.widget("ui.rating", {
        options: {
            widgetClass: "rating",
            errorMessage: "Oops! Please try again later.",
            ajaxURL: "/ratings/_ajax/title",
            uconst: undefined,
            redirectURL: "/register/?why=vote"
        },
        _create: function() {
            var l = this;
            var d = l.options;
            var c = l.element[0].id;
            var e = c.split("|");
            l.tconst = e[0];
            l.state = l.originalState = e[1];
            l.originalRating = parseFloat(e[2]);
            l.imdbRating = parseFloat(e[3]);
            l.trackingTag = e[4] || "";
            l.pageId = e[5] || "";
            l.pageType = e[6] || "";
            l.subpageType = e[7] || "";
            l.disabled = false;
            l.$stars = b(".rating-stars a", l.element);
            l.$imdb = b(".rating-imdb", l.element);
            l.$cancel = b(".rating-cancel", l.element);
            l.$caption = b(".rating-rating", l.element);
            l.$lowerUserCaption = b(".star-bar-user-rate", l.siblings);
            l.$stars.removeAttr("href");
            b("a", l.$cancel).removeAttr("href");
            l.authKey = b(l.element).attr("data-auth");
            b(l.element).trigger("ready.rating", {
                state: l.state,
                rating: l.originalRating,
                imdbRating: l.imdbRating,
                tconst: l.tconst
            });
            l.$stars.bind("mouseover.rating", function() {
                if (l.disabled) {
                    return false;
                }
                var m = l.$stars.index(this) + 1;
                if (l.state == "your") {
                    l.$stars.removeClass("rating-your");
                } else {
                    l.$imdb.hide();
                }
                l.$stars.slice(0, m).addClass("rating-hover");
                l.$stars.slice(m + 1).removeClass("rating-hover");
                l.$caption.addClass("rating-hover");
                l.$cancel.addClass("rating-hover");
                i(m);
            }).bind("mouseout.rating", function() {
                if (l.disabled) {
                    return false;
                }
                k();
            }).bind("click.rating", function() {
                if (l.disabled) {
                    return false;
                }
                h(l.$stars.index(this) + 1);
            });
            function h(m) {
                if (!l.options.uconst) {
                    var n = b("#nblogin");
                    if (n.size() == 0) {
                        document.location = l.options.redirectURL;
                    } else {
                        b(window).trigger("initiate_login");
                    }
                    return;
                }
                f();
                l.$cancel.removeClass("rating-hover").addClass("rating-pending");
                l.pendingRating = m;
                b.ajax({
                    url: l.options.ajaxURL,
                    type: "POST",
                    dataType: "json",
                    beforeSend: window.addClickstreamHeadersToAjax,
                    data: {
                        tconst: l.tconst,
                        rating: l.pendingRating,
                        auth: l.authKey,
                        tracking_tag: l.trackingTag,
                        pageId: l.pageId,
                        pageType: l.pageType,
                        subpageType: l.subpageType
                    },
                    error: function() {
                        return j();
                    },
                    success: function(p) {
                        if (p.status != 200) {
                            return j();
                        }
                        if (l.pendingRating == 0) {
                            l.originalRating = l.imdbRating;
                            l.state = "imdb";
                        } else {
                            l.originalRating = l.pendingRating;
                            l.state = "your";
                        }
                        var o = l.pendingRating;
                        l.pendingRating = undefined;
                        l.$stars.removeClass("rating-hover");
                        l.$caption.removeClass("rating-hover");
                        l.$cancel.removeClass("rating-pending");
                        k();
                        g();
                        b(l.element).trigger("change.rating", {
                            state: l.state,
                            rating: o,
                            imdbRating: l.imdbRating,
                            tconst: l.tconst
                        });
                    }
                });
            }
            l.$cancel.bind("click.rating", function() {
                if (l.disabled) {
                    return false;
                }
                h(0);
            });
            function k() {
                l.$stars.removeClass("rating-hover");
                l.$caption.removeClass("rating-hover");
                l.$cancel.removeClass("rating-hover");
                if (l.state == "your") {
                    l.$stars.slice(0, l.originalRating).addClass("rating-your");
                    l.$caption.addClass("rating-your");
                    l.$cancel.addClass("rating-your");
                    l.$lowerUserCaption.show();
                } else {
                    l.$stars.removeClass("rating-your");
                    l.$caption.removeClass("rating-your");
                    l.$cancel.removeClass("rating-your");
                    l.$imdb.show();
                    l.$lowerUserCaption.hide();
                }
                i(l.originalRating);
            }
            function i(m) {
                l.$caption.children(":first").text(m || "-");
            }
            function j() {
                l.element.addClass("rating-error");
                l.element.html('<span class="rating-error-icon">&nbsp;</span><span class="rating-error-text">' + l.options.errorMessage + "</span>");
                return false;
            }
            function f() {
                l.disabled = true;
            }
            function g() {
                l.disabled = false;
            }
        }
    });
    var a = {};
    b.fn.rating_animation = function() {
        var c = b(this).find("span.userRatingValue");
        c.click(function(g) {
            if (CS.hasAccount()) {
                var d = g.delegateTarget;
                var f = b(d).attr("data-tconst");
                b(d).fadeTo(100, 0);
                b("div.starBarWidget#sb_" + f).fadeIn(100);
            } else {
                CS.activate_login_lightbox();
            }
        });
        b(this).find("div.starBarWidget").hover(function(f) {
            var d = f.delegateTarget;
            if (a[d.id]) {
                clearTimeout(a[d.id]);
                delete a[d.id];
            }
        }, function(f) {
            var d = f.delegateTarget;
            var g = function() {
                b(d).parent().find("span.userRatingValue").fadeTo(100, 1);
                b(d).fadeOut();
                delete a[d.id];
            };
            a[d.id] = setTimeout(g, 5);
        });
        b(this).find("div.rating").on("change.rating", function(i, h) {
            var j = b("#urv_" + h.tconst + " > span[name=ur]"), f = j.data("no-rating") || "Rate", d = (h.rating !== 0) ? h.rating: f;
            j.data("value", h.rating).text(d).addClass("has-changed");
            if (d === f) {
                j.addClass("rate");
                j.siblings(".global-sprite.rating-star.user-rating").removeClass("user-rating").addClass("no-rating");
            } else {
                j.removeClass("rate");
                j.siblings(".global-sprite.rating-star.no-rating").removeClass("no-rating").addClass("user-rating");
            }
            var g = b(i.delegateTarget).parent();
            b(g).fadeOut();
            delete a[g.id];
        });
    };
    b.extend(b.ui.rating, {
        version: "2.0"
    });
})(jQuery);
(function(a) {
    if (!("_gaq" in window)) {
        window._gaq = [];
    }
    a(document).delegate(".rating", "change.rating", function(d, c) {
        var b = a(this).attr("data-ga-identifier");
        if (c.state === "your") {
            _gaq.push(["_trackEvent", "rating", "add_from_" + b, c.tconst]);
            _gaq.push(function() {
                consoleLog("rating add from " + b + " " + c.tconst, "gaq");
            });
        }
    });
})(jQuery);
