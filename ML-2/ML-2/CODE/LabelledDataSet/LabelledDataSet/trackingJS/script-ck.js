!function(t, i, n, o) {
    function s(e, i) {
        this.element = e, this.options = t.extend(!0, {}, l, i), this.options.share = i.share, this._defaults = l, this._name = u, this.init()
    }
    function r(e, t, s, r) {
        var a = i.screenLeft != o ? i.screenLeft: screen.left, u = i.screenTop != o ? i.screenTop: screen.top;
        width = i.innerWidth ? i.innerWidth : n.documentElement.clientWidth ? n.documentElement.clientWidth : screen.width, height = i.innerHeight ? i.innerHeight : n.documentElement.clientHeight ? n.documentElement.clientHeight : screen.height;
        var l = width / 2 - s / 2 + a, c = height / 2 - r / 2 + u, d = i.open(e, t, "scrollbars=yes, width=" + s + ", height=" + r + ", top=" + c + ", left=" + l);
        i.focus && d.focus()
    }
    function a(e, i) {
        "true" === us_script.bitly ? t.ajax({
            url: us_script.ajaxurl,
            dataType: "json",
            type: "POST",
            data: {
                url: e,
                action: "us_bitly"
            },
            async: !1,
            success: function(t) {
                i("OK" === t.status_txt ? t.data.url : e)
            },
            error: function(t, n, o) {
                i(e)
            }
        }) : i(e)
    }
    var u = "ultimate_social_deux", l = {
        className: "sharrre",
        share: {
            facebook: !1,
            twitter: !1,
            googlePlus: !1,
            pinterest: !1,
            linkedin: !1,
            stumbleupon: !1,
            delicious: !1,
            buffer: !1,
            reddit: !1,
            vkontakte: !1,
            comments: !1
        },
        shareTotal: 0,
        template: "",
        title: "",
        url: n.location.href,
        defaults: 0,
        text: n.title,
        urlCurl: us_script.sharrre_url,
        count: {},
        total: 0,
        shorterTotal: !0,
        enableHover: !0,
        enableCounter: !0,
        hover: function() {},
        hide: function() {},
        click: function() {},
        render: function() {},
        buttons: {
            googlePlus: {
                url: "",
                urlCount: !1,
                size: "medium",
                lang: "en-US",
                annotation: ""
            },
            facebook: {
                url: "",
                urlCount: !1,
                action: "like",
                layout: "button_count",
                width: "",
                send: "false",
                faces: "false",
                colorscheme: "",
                font: "",
                lang: "en_US"
            },
            twitter: {
                url: "",
                urlCount: !1,
                count: "horizontal",
                hashtags: "",
                via: "",
                related: "",
                lang: "en"
            },
            delicious: {
                url: "",
                urlCount: !1,
                size: "medium"
            },
            stumbleupon: {
                url: "",
                urlCount: !1,
                layout: "1"
            },
            reddit: {
                url: "",
                urlCount: !1
            },
            vkontakte: {
                url: "",
                urlCount: !1,
                media: "",
                description: ""
            },
            linkedin: {
                url: "",
                urlCount: !1,
                counter: ""
            },
            pinterest: {
                url: "",
                media: "",
                description: "",
                urlCount: !1,
                layout: "horizontal"
            },
            buffer: {
                url: "",
                media: "",
                description: "",
                layout: "horizontal",
                urlCount: !1
            },
            comments: {
                urlCount: !1
            },
            love: {
                urlCount: !1
            },
            pocket: {
                url: "",
                description: ""
            },
            tumblr: {
                url: "",
                description: ""
            },
            printfriendly: {
                url: "",
                description: ""
            },
            flipboard: {
                url: "",
                description: ""
            }
        }
    }, c = {
        googlePlus: "",
        reddit: "",
        stumbleupon: "",
        pinterest: "",
        facebook: "//graph.facebook.com/fql?q=SELECT%20url,%20normalized_url,%20share_count,%20like_count,%20comment_count,%20total_count,commentsbox_count,%20comments_fbid,%20click_count%20FROM%20link_stat%20WHERE%20url=%27{url}%27&callback=?",
        twitter: "//cdn.api.twitter.com/1/urls/count.json?url={url}&callback=?",
        delicious: "http://feeds.delicious.com/v2/json/urlinfo/data?url={url}&callback=?",
        linkedin: "//www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
        vkontakte: "",
        buffer: "https://api.bufferapp.com/1/links/shares.json?url={url}&callback=?",
        comments: "",
        love: ""
    }, d = {
        googlePlus: function(e) {
            r("https://plus.google.com/share?hl=" + e.buttons.googlePlus.lang + "&url=" + encodeURIComponent("" !== e.buttons.googlePlus.url ? e.buttons.googlePlus.url : e.url), "googlePlus", us_script.googleplus_width, us_script.googleplus_height)
        },
        facebook: function(e) {
            r("http://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent("" !== e.buttons.facebook.url ? e.buttons.facebook.url : e.url) + "&t=" + e.text, "facebook", us_script.facebook_width, us_script.facebook_height)
        },
        twitter: function(e) {
            a(e.url, function(t) {
                r("https://twitter.com/intent/tweet?text=" + encodeURIComponent(e.text) + "&url=" + encodeURIComponent(t) + ("" !== e.buttons.twitter.via ? "&via=" + e.buttons.twitter.via : ""), "twitter", us_script.twitter_width, us_script.twitter_height)
            })
        },
        delicious: function(e) {
            r("http://www.delicious.com/save?v=5&noui&jump=close&url=" + encodeURIComponent("" !== e.buttons.delicious.url ? e.buttons.delicious.url : e.url) + "&title=" + e.text, "delicious", us_script.delicious_width, us_script.delicious_height)
        },
        stumbleupon: function(e) {
            r("http://www.stumbleupon.com/badge/?url=" + encodeURIComponent("" !== e.buttons.stumbleupon.url ? e.buttons.stumbleupon.url : e.url), "stumble", us_script.stumble_width, us_script.stumble_height)
        },
        linkedin: function(e) {
            r("https://www.linkedin.com/cws/share?url=" + encodeURIComponent("" !== e.buttons.linkedin.url ? e.buttons.linkedin.url : e.url) + "&token=&isFramed=true", "linkedin", us_script.linkedin_width, us_script.linkedin_height)
        },
        pinterest: function(e) {
            r(us_script.home_url + "?pinterestshare=1&url=" + encodeURIComponent("" !== e.buttons.pinterest.url ? e.buttons.pinterest.url : e.url) + "&desc=" + encodeURIComponent(e.text), "pinterest", us_script.pinterest_width, us_script.pinterest_height)
        },
        buffer: function(e) {
            a(e.url, function(t) {
                r("http://bufferapp.com/add?url=" + encodeURIComponent(t) + "&text=" + encodeURIComponent(e.text) + "&via=" + us_script.tweet_via + "&picture=" + encodeURIComponent(e.buttons.buffer.media) + "&count=" + e.buttons.buffer.layout + "&source=button", "buffer", us_script.buffer_width, us_script.buffer_height)
            })
        },
        reddit: function(e) {
            r("http://reddit.com/submit?url=" + encodeURIComponent("" !== e.buttons.reddit.url ? e.buttons.reddit.url : e.url) + "&title=" + encodeURIComponent(e.text), "reddit", us_script.reddit_width, us_script.reddit_height)
        },
        vkontakte: function(e) {
            r("http://vkontakte.ru/share.php?url=" + encodeURIComponent("" !== e.buttons.vkontakte.url ? e.buttons.vkontakte.url : e.url) + "&title=" + encodeURIComponent(e.buttons.vkontakte.description) + "&image=" + encodeURIComponent(e.buttons.vkontakte.media), "vkontakte", us_script.vkontakte_width, us_script.vkontakte_height)
        },
        printfriendly: function(e) {
            r("http://www.printfriendly.com/print/?url=" + encodeURIComponent("" !== e.buttons.printfriendly.url ? e.buttons.printfriendly.url : e.url), "printfriendly", us_script.printfriendly_width, us_script.printfriendly_height)
        },
        pocket: function(e) {
            r("https://getpocket.com/edit.php?url=" + encodeURIComponent("" !== e.buttons.pocket.url ? e.buttons.pocket.url : e.url), "pocket", us_script.pocket_width, us_script.pocket_height)
        },
        tumblr: function(e) {
            r("http://tumblr.com/share?s=&v=3&u=" + encodeURIComponent("" !== e.buttons.tumblr.url ? e.buttons.tumblr.url : e.url) + "&t=" + encodeURIComponent(e.text), "tumblr", us_script.tumblr_width, us_script.tumblr_height)
        },
        flipboard: function(e) {
            r("https://share.flipboard.com/bookmarklet/popout?url=" + encodeURIComponent("" !== e.buttons.flipboard.url ? e.buttons.flipboard.url : e.url) + "&title=" + encodeURIComponent(e.text), "flipboard", us_script.flipboard_width, us_script.flipboard_height)
        }
    };
    s.prototype.init = function() {
        var e = this;
        "" !== this.options.urlCurl && (c.googlePlus = this.options.urlCurl + "?url={url}&type=googlePlus&action=us_counts", c.stumbleupon = this.options.urlCurl + "?url={url}&type=stumbleupon&action=us_counts", c.reddit = this.options.urlCurl + "?url={url}&type=reddit&action=us_counts", c.pinterest = this.options.urlCurl + "?url={url}&type=pinterest&action=us_counts", c.vkontakte = this.options.urlCurl + "?url={url}&type=vkontakte&action=us_counts", c.comments = this.options.urlCurl + "?url={url}&type=comments&action=us_counts", c.love = this.options.urlCurl + "?url={url}&type=love&action=us_counts"), t(this.element).addClass(this.options.className), "undefined" != typeof t(this.element).data("title") && (this.options.title = t(this.element).attr("data-title")), "undefined" != typeof t(this.element).data("url") && (this.options.url = t(this.element).data("url")), "undefined" != typeof t(this.element).data("text") && (this.options.text = t(this.element).data("text")), "undefined" != typeof t(this.element).data("media") && (this.options.media = t(this.element).attr("data-media")), "undefined" != typeof t(this.element).data("description") && (this.options.description = t(this.element).attr("data-description")), t.each(this.options.share, function(t, i) {
            i===!0 && e.options.shareTotal++
        }), e.options.enableCounter===!0 ? t.each(this.options.share, function(t, i) {
            if (i===!0)
                try {
                    e.getSocialJson(t)
            } catch (n) {}
        }) : "" !== e.options.template && this.options.render(this, this.options), t(this.element).click(function() {
            return e.options.click(e, e.options), !1
        })
    }, s.prototype.getSocialJson = function(e) {
        var i = this, n = 0, o = c[e].replace("{url}", encodeURIComponent(this.options.url));
        this.options.buttons[e].urlCount===!0 && "" !== this.options.buttons[e].url && (o = c[e].replace("{url}", this.options.buttons[e].url)), "" != o && "" !== i.options.urlCurl ? t.getJSON(o, function(t) {
            if ("undefined" != typeof t.count || "undefined" != typeof t.shares) {
                if (t.count)
                    var o = t.count + "";
                else if (t.shares)
                    var o = t.shares + "";
                else 
                    var o = "0";
                o = o.replace("Â ", ""), n += parseInt(o, 10)
            } else 
                "undefined" != typeof t[0] ? n += parseInt(t[0].total_posts, 10) : t.data && t.data.length > 0 && "undefined" != typeof t.data[0].total_count ? n += parseInt(t.data[0].total_count, 10) : "undefined" != typeof t[0];
            i.options.count[e] = n, i.options.total += n, i.renderer(), i.rendererPerso()
        }).error(function() {
            i.options.count[e] = 0, i.rendererPerso()
        }) : (i.renderer(), i.options.count[e] = 0, i.rendererPerso())
    }, s.prototype.openPopup = function(e) {
        if (d[e](this.options), "ga"in i && i.ga !== o && "function" == typeof i.ga) {
            var t = {
                googlePlus: {
                    site: "GooglePlus",
                    action: "share"
                },
                facebook: {
                    site: "Facebook",
                    action: "share"
                },
                twitter: {
                    site: "Twitter",
                    action: "tweet"
                },
                delicious: {
                    site: "Delicious",
                    action: "add"
                },
                stumbleupon: {
                    site: "Stumbleupon",
                    action: "add"
                },
                linkedin: {
                    site: "Linkedin",
                    action: "share"
                },
                pinterest: {
                    site: "Pinterest",
                    action: "pin"
                },
                buffer: {
                    site: "Buffer",
                    action: "share"
                },
                reddit: {
                    site: "Reddit",
                    action: "share"
                },
                vkontakte: {
                    site: "Vkontakte",
                    action: "share"
                },
                printfriendly: {
                    site: "Printfriendly",
                    action: "print"
                },
                pocket: {
                    site: "Pocket",
                    action: "share"
                },
                tumblr: {
                    site: "Tumblr",
                    action: "share"
                },
                flipboard: {
                    site: "Flipboard",
                    action: "share"
                }
            };
            ga("send", "social", t[e].site, t[e].action)
        }
    }, s.prototype.rendererPerso = function() {
        var t = 0;
        for (e in this.options.count)
            t++;
        t === this.options.shareTotal && this.options.render(this, this.options)
    }, s.prototype.renderer = function() {
        var e = this.options.total, i = this.options.template;
        this.options.shorterTotal===!0 && (e = this.shorterTotal(e)), "" !== i && (i = i.replace("{total}", e), t(this.element).html(i))
    }, s.prototype.shorterTotal = function(e) {
        return e >= 1e6 ? e = (e / 1e6).toFixed(2) + "M" : e >= 1e3 && (e = (e / 1e3).toFixed(1) + "k"), e
    }, s.prototype.simulateClick = function() {
        var e = t(this.element).html();
        t(this.element).html(e.replace(this.options.total, this.options.total + 1))
    }, t.fn[u] = function(e) {
        var i = arguments;
        return e === o || "object" == typeof e ? this.each(function() {
            t.data(this, "plugin_" + u) || t.data(this, "plugin_" + u, new s(this, e))
        }) : "string" == typeof e && "_" !== e[0] && "init" !== e ? this.each(function() {
            var n = t.data(this, "plugin_" + u);
            n instanceof s && "function" == typeof n[e] && n[e].apply(n, Array.prototype.slice.call(i, 1))
        }) : void 0
    }
}(jQuery, window, document), function() {
    function e() {
        var e = jQuery(".us_mail_your_name").val(), t = jQuery(".us_mail_url").val(), i = jQuery(".us_mail_your_email").val(), n = jQuery(".us_mail_recipient_email").val(), o = jQuery(".us_mail_message").val(), s = jQuery(".us_mail_captcha").val();
        jQuery.ajax({
            type: "POST",
            url: us_script.ajaxurl,
            data: {
                action: "us_send_mail",
                url: t,
                your_name: e,
                your_email: i,
                recipient_email: n,
                message: o,
                captcha: s
            },
            success: function(e) {
                var t = jQuery(".us_mail_response"), i = jQuery(".us_mail_form_holder");
                t.hide().removeClass("alert alert-danger alert-info alert-success"), "ok" === e ? (t.fadeIn().addClass("alert alert-success").html(us_script.success), i.html(""), setTimeout(function() {
                    jQuery(".us_modal"), jQuery.magnificPopup.instance.close()
                }, 2e3)) : t.fadeIn().html(e).addClass("alert alert-danger")
            },
            error: function(e, t, i) {
                console.log(i)
            }
        })
    }
    jQuery(document).ready(function() {
        jQuery(".us_mail_send").on("click", function() {
            jQuery(".us_mail_response").addClass("alert alert-info").html(us_script.trying), e()
        }), jQuery(".us_mail a").magnificPopup({
            type: "inline",
            midClick: !0,
            removalDelay: 300,
            mainClass: "us_mail_fade us_wrapper"
        }), jQuery(".us_share_text").each(function() {
            var e = jQuery(this).data("text");
            jQuery(this).find(".us_share_text_span").text(e)
        }), jQuery(".us_total").each(function() {
            var e = '<div class="us_box"><div class="us_count">{total}</div><div class="us_share">' + us_script.total_shares_text + "</div></div>";
            jQuery(this).ultimate_social_deux({
                total: jQuery(this).data("defaults"),
                share: {
                    facebook: jQuery(this).data("facebook"),
                    twitter: jQuery(this).data("twitter"),
                    googlePlus: jQuery(this).data("googleplus"),
                    pinterest: jQuery(this).data("pinterest"),
                    linkedin: jQuery(this).data("linkedin"),
                    stumbleupon: jQuery(this).data("stumble"),
                    delicious: jQuery(this).data("delicious"),
                    buffer: jQuery(this).data("buffer"),
                    reddit: jQuery(this).data("reddit"),
                    vkontakte: jQuery(this).data("vkontakte")
                },
                template: e,
                urlCurl: us_script.sharrre_url
            })
        }), jQuery(".us_twitter").each(function() {
            var e = jQuery(this), t=!0, i = '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-twitter"></i></div><div class="us_count">{total}</div></a>';
            if (jQuery(this).hasClass("us_transient") || jQuery(this).hasClass("us_no_count"))
                var t=!1, i = "";
            e.ultimate_social_deux({
                share: {
                    twitter: t
                },
                buttons: {
                    twitter: {
                        via: us_script.tweet_via
                    }
                },
                enableHover: !1,
                template: i,
                urlCurl: us_script.sharrre_url,
                click: function(e, t) {
                    return e.openPopup("twitter"), e.simulateClick(), !1
                }
            })
        }), jQuery(".us_facebook").each(function() {
            var e = jQuery(this), t=!0, i = '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-facebook"></i></div><div class="us_count">{total}</div></a>';
            if (jQuery(this).hasClass("us_no_count"))
                var t=!1, i = "";
            if (jQuery(this).hasClass("us_native")) {
                var e = jQuery(".us_box", this), i = '<div class="us_share"><i class="us-icon-facebook"></i></div><div class="us_count">{total}</div>';
                jQuery(this).mouseover(function() {
                    us_native.load(this)
                })
            }
            e.ultimate_social_deux({
                share: {
                    facebook: t
                },
                template: i,
                click: function(e, t) {
                    return e.openPopup("facebook"), e.simulateClick(), !1
                }
            })
        }), jQuery(".us_googleplus").each(function() {
            var e = jQuery(this), t=!0, i = '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-gplus"></i></div><div class="us_count">{total}</div></a>';
            if (jQuery(this).hasClass("us_transient") || jQuery(this).hasClass("us_no_count")) {
                var t=!1, i = "", n = jQuery(this).data("count");
                jQuery(this).find(".us_count").text(n)
            }
            if (jQuery(this).hasClass("us_native")) {
                var e = jQuery(".us_box", this), i = '<div class="us_share"><i class="us-icon-google"></i></div><div class="us_count">{total}</div>';
                jQuery(this).mouseover(function() {
                    us_native.load(this)
                })
            }
            e.ultimate_social_deux({
                share: {
                    googlePlus: t
                },
                enableHover: !1,
                template: i,
                urlCurl: us_script.sharrre_url,
                click: function(e, t) {
                    return e.openPopup("googlePlus"), e.simulateClick(), !1
                }
            })
        }), jQuery(".us_pinterest").each(function() {
            var e = jQuery(this), t=!0, i = '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-pinterest"></i></div><div class="us_count">{total}</div></a>';
            if (jQuery(this).hasClass("us_transient") || jQuery(this).hasClass("us_no_count")) {
                var t=!1, i = "", n = jQuery(this).data("count");
                jQuery(this).find(".us_count").text(n)
            }
            e.ultimate_social_deux({
                share: {
                    pinterest: t
                },
                enableHover: !1,
                template: i,
                urlCurl: us_script.sharrre_url,
                click: function(e, t) {
                    return e.openPopup("pinterest"), e.simulateClick(), !1
                }
            })
        }), jQuery(".us_linkedin").each(function() {
            var e = jQuery(this), t=!0, i = '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-linkedin"></i></div><div class="us_count">{total}</div></a>';
            if (jQuery(this).hasClass("us_transient") || jQuery(this).hasClass("us_no_count"))
                var t=!1, i = "";
            e.ultimate_social_deux({
                share: {
                    linkedin: t
                },
                enableHover: !1,
                template: i,
                urlCurl: us_script.sharrre_url,
                click: function(e, t) {
                    return e.openPopup("linkedin"), e.simulateClick(), !1
                }
            })
        }), jQuery(".us_stumble").each(function() {
            var e = jQuery(this), t=!0, i = '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-stumbleupon"></i></div><div class="us_count">{total}</div></a>';
            if (jQuery(this).hasClass("us_transient") || jQuery(this).hasClass("us_no_count")) {
                var t=!1, i = "", n = jQuery(this).data("count");
                jQuery(this).find(".us_count").text(n)
            }
            e.ultimate_social_deux({
                share: {
                    stumbleupon: t
                },
                enableHover: !1,
                template: i,
                urlCurl: us_script.sharrre_url,
                click: function(e, t) {
                    return e.openPopup("stumbleupon"), e.simulateClick(), !1
                }
            })
        }), jQuery(".us_delicious").each(function() {
            var e = jQuery(this), t=!0, i = '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-delicious"></i></div><div class="us_count">{total}</div></a>';
            if (jQuery(this).hasClass("us_transient") || jQuery(this).hasClass("us_no_count"))
                var t=!1, i = "";
            e.ultimate_social_deux({
                share: {
                    delicious: t
                },
                enableHover: !1,
                template: i,
                urlCurl: us_script.sharrre_url,
                click: function(e, t) {
                    return e.openPopup("delicious"), e.simulateClick(), !1
                }
            })
        }), jQuery(".us_buffer").each(function() {
            var e = jQuery(this), t=!0, i = '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-buffer"></i></div><div class="us_count">{total}</div></a>';
            if (jQuery(this).hasClass("us_transient") || jQuery(this).hasClass("us_no_count"))
                var t=!1, i = "";
            e.ultimate_social_deux({
                share: {
                    buffer: t
                },
                buttons: {
                    buffer: {
                        url: jQuery(this).attr("data-url"),
                        media: jQuery(this).attr("data-media"),
                        description: jQuery(this).attr("data-text")
                    }
                },
                enableHover: !1,
                template: i,
                urlCurl: us_script.sharrre_url,
                click: function(e, t) {
                    return e.openPopup("buffer"), e.simulateClick(), !1
                }
            })
        }), jQuery(".us_reddit").each(function() {
            var e = jQuery(this), t=!0, i = '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-reddit"></i></div><div class="us_count">{total}</div></a>';
            if (jQuery(this).hasClass("us_transient") || jQuery(this).hasClass("us_no_count")) {
                var t=!1, i = "", n = jQuery(this).data("count");
                jQuery(this).find(".us_count").text(n)
            }
            e.ultimate_social_deux({
                share: {
                    reddit: t
                },
                enableHover: !1,
                template: i,
                urlCurl: us_script.sharrre_url,
                click: function(e, t) {
                    return e.openPopup("reddit"), e.simulateClick(), !1
                }
            })
        }), jQuery(".us_vkontakte").each(function() {
            var e = jQuery(this), t=!0, i = '<a class="us_box" href="#"><div class="us_share"><i class="us-icon-vkontakte"></i></div><div class="us_count">{total}</div></a>';
            if (jQuery(this).hasClass("us_transient") || jQuery(this).hasClass("us_no_count")) {
                var t=!1, i = "", n = jQuery(this).data("count");
                jQuery(this).find(".us_count").text(n)
            }
            if (jQuery(this).hasClass("us_native")) {
                var e = jQuery(".us_box", this), i = '<div class="us_share"><i class="us-icon-vkontakte"></i></div><div class="us_count">{total}</div>';
                jQuery(this).mouseover(function() {
                    us_native.load(this)
                })
            }
            e.ultimate_social_deux({
                share: {
                    vkontakte: t
                },
                enableHover: !1,
                template: i,
                urlCurl: us_script.sharrre_url,
                click: function(e, t) {
                    return e.openPopup("vkontakte"), e.simulateClick(), !1
                }
            })
        }), jQuery(".us_pocket").each(function() {
            jQuery(this).ultimate_social_deux({
                share: {
                    pocket: !0
                },
                click: function(e, t) {
                    return e.openPopup("pocket"), !1
                }
            })
        }), jQuery(".us_tumblr").each(function() {
            jQuery(this).ultimate_social_deux({
                share: {
                    tumblr: !0
                },
                click: function(e, t) {
                    return e.openPopup("tumblr"), !1
                }
            })
        }), jQuery(".us_print").each(function() {
            jQuery(this).ultimate_social_deux({
                share: {
                    printfriendly: !0
                },
                click: function(e, t) {
                    return e.openPopup("printfriendly"), !1
                }
            })
        }), jQuery(".us_flipboard").each(function() {
            jQuery(this).ultimate_social_deux({
                share: {
                    flipboard: !0
                },
                click: function(e, t) {
                    return e.openPopup("flipboard"), !1
                }
            })
        }), jQuery(".us_comments").each(function() {
            var e = jQuery(this).data("count");
            jQuery(this).find(".us_count").text(e)
        }), jQuery(".us_love").each(function() {
            var e = jQuery(this).data("count");
            jQuery(this).find(".us_count").text(e), jQuery(this).find("a").on("click", function() {
                var t = jQuery(this).data("url"), i = jQuery(this).data("user_id"), n = {
                    action: "us_love",
                    url: t,
                    user_id: i,
                    nonce: us_script.nonce
                };
                if (jQuery(this).hasClass("loved"))
                    return alert(us_script.already_loved_message), !1;
                if (jQuery.cookie("us_love_count_" + t))
                    return alert(us_script.already_loved_message), !1;
                var o = "false";
                return "false" === o && (o = "true", jQuery.ajax({
                    type: "POST",
                    data: n,
                    url: us_script.ajaxurl,
                    context: this,
                    success: function(i) {
                        i ? (jQuery(this).addClass("loved"), jQuery(this).find(".us_count").text(e + 1), "false" == us_script.logged_in && jQuery.cookie("us_love_count_" + t, "yes", {
                            expires: 365
                        })) : alert(us_script.already_loved_message), o = "false"
                    }
                }).fail(function(e) {
                    alert(us_script.error_message)
                })), !1
            })
        })
    })
}(jQuery), window.us_native = function(e, t, i) {
    "use strict";
    var n = 0, o = [], s = {}, r = {}, a = /^($|loaded|complete)/, u = e.encodeURIComponent, l = {
        settings: {},
        trim: function(e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
        },
        hasClass: function(e, t) {
            return - 1 !== (" " + e.className + " ").indexOf(" " + t + " ")
        },
        addClass: function(e, t) {
            l.hasClass(e, t) || (e.className = "" === e.className ? t : e.className + " " + t)
        },
        removeClass: function(e, t) {
            e.className = l.trim(" " + e.className + " ".replace(" " + t + " ", " "))
        },
        extendObject: function(e, t, n) {
            for (var o in t) {
                var s = e[o] !== i;
                s && "object" == typeof t[o] ? l.extendObject(e[o], t[o], n) : (n ||!s) && (e[o] = t[o])
            }
        },
        getElements: function(e, t) {
            for (var i = 0, n = [], o=!!e.getElementsByClassName, s = o ? e.getElementsByClassName(t) : e.getElementsByTagName("*"); i < s.length; i++)(o || l.hasClass(s[i], t)
                ) && n.push(s[i]);
            return n
        },
        getDataAttributes: function(e, t, i) {
            for (var n = 0, o = "", s = {}, r = e.attributes; n < r.length; n++) {
                var a = r[n].name, l = r[n].value;
                l.length && 0 === a.indexOf("data-") && (t && (a = a.substring(5)), i ? s[a] = l : o += u(a) + "=" + u(l) + "&")
            }
            return i ? s : o
        },
        copyDataAttributes: function(e, t, i, n) {
            var o = l.getDataAttributes(e, i, !0);
            for (var s in o)
                t.setAttribute(n ? s.replace(/-/g, "_") : s, o[s])
        },
        createIframe: function(e, i) {
            var n = t.createElement("iframe");
            return n.style.cssText = "overflow: hidden; border: none;", l.extendObject(n, {
                src: e,
                allowtransparency: "true",
                frameborder: "0",
                scrolling: "no"
            }, !0), i && (n.onload = n.onreadystatechange = function() {
                a.test(n.readyState || "") && (n.onload = n.onreadystatechange = null, l.activateInstance(i))
            }), n
        },
        networkReady: function(e) {
            return s[e] ? s[e].loaded : i
        },
        appendNetwork: function(e) {
            if (e&&!e.appended) {
                if ("function" == typeof e.append && e.append(e)===!1)
                    return e.appended = e.loaded=!0, void l.activateAll(e);
                e.script && (e.el = t.createElement("script"), l.extendObject(e.el, e.script, !0), e.el.async=!0, e.el.onload = e.el.onreadystatechange = function() {
                    if (a.test(e.el.readyState || "")) {
                        if (e.el.onload = e.el.onreadystatechange = null, e.loaded=!0, "function" == typeof e.onload && e.onload(e)===!1)
                            return;
                        l.activateAll(e)
                    }
                }, t.body.appendChild(e.el)), e.appended=!0
            }
        },
        removeNetwork: function(e) {
            return l.networkReady(e.name) ? (e.el.parentNode && e.el.parentNode.removeChild(e.el), !(e.appended = e.loaded=!1)) : !1
        },
        reloadNetwork: function(e) {
            var t = s[e];
            t && l.removeNetwork(t) && l.appendNetwork(t)
        },
        createInstance: function(e, t) {
            var s=!0, r = {
                el: e,
                uid: n++,
                widget: t
            };
            return o.push(r), t.process !== i && (s = "function" == typeof t.process ? t.process(r) : !1), s && l.processInstance(r), r.el.setAttribute("data-usnative", r.uid), r.el.className = "usnative " + t.name + " usnative-instance", r
        },
        processInstance: function(e) {
            var i = e.el;
            e.el = t.createElement("div"), e.el.className = i.className, l.copyDataAttributes(i, e.el), "a" !== i.nodeName.toLowerCase() || i.getAttribute("data-default-href") || e.el.setAttribute("data-default-href", i.getAttribute("href"));
            var n = i.parentNode;
            n.insertBefore(e.el, i), n.removeChild(i)
        },
        activateInstance: function(e) {
            return e&&!e.loaded ? (e.loaded=!0, "function" == typeof e.widget.activate && e.widget.activate(e), l.addClass(e.el, "usnative-loaded"), e.onload ? e.onload(e.el) : null) : void 0
        },
        activateAll: function(e) {
            "string" == typeof e && (e = s[e]);
            for (var t = 0; t < o.length; t++) {
                var i = o[t];
                i.init && i.widget.network === e && l.activateInstance(i)
            }
        },
        load: function(e, i, n, s, a) {
            if (e = e && "object" == typeof e && 1 === e.nodeType ? e : t, !i || "object" != typeof i)
                return void l.load(e, l.getElements(e, "usnative"), n, s, a);
            var u;
            if (/Array/.test(Object.prototype.toString.call(i)))
                for (u = 0; u < i.length; u++)
                    l.load(e, i[u], n, s, a);
            else if (1 === i.nodeType) {
                if (!n ||!r[n]) {
                    n = null;
                    var c = i.className.split(" ");
                    for (u = 0; u < c.length; u++)
                        if (r[c[u]]) {
                            n = c[u];
                            break
                        }
                    if (!n)
                        return 
                }
                var d, p = r[n], f = parseInt(i.getAttribute("data-usnative"), 10);
                if (isNaN(f))
                    d = l.createInstance(i, p);
                else 
                    for (u = 0; u < o.length; u++)
                        if (o[u].uid === f) {
                            d = o[u];
                            break
                        }
                !a && d && (d.init || (d.init=!0, d.onload = "function" == typeof s ? s : null, p.init(d)), p.network.appended ? l.networkReady(p.network.name) && l.activateInstance(d) : l.appendNetwork(p.network))
            }
        },
        activate: function(t, i, n) {
            e.us_native.load(null, t, i, n)
        },
        process: function(t, i, n) {
            e.us_native.load(t, i, n, null, !0)
        },
        network: function(e, t) {
            s[e] = {
                name: e,
                el: null,
                appended: !1,
                loaded: !1,
                widgets: {}
            }, t && l.extendObject(s[e], t)
        },
        widget: function(e, t, i) {
            i.name = e + "-" + t, s[e]&&!r[i.name] && (i.network = s[e], s[e].widgets[t] = r[i.name] = i)
        },
        setup: function(e) {
            l.extendObject(l.settings, e, !0)
        }
    };
    return l
}(window, window.document), function() {
    var e = window._usnative;
    if (/Array/.test(Object.prototype.toString.call(e)))
        for (var t = 0, i = e.length; i > t; t++)
            "function" == typeof e[t] && e[t]()
}(), function(e, t, i, n) {
    i.setup({
        googleplus: {
            lang: "en-GB",
            onstartinteraction: function(t, i) {
                "ga"in e && e.ga !== n && "function" == typeof e.ga && ga("send", "social", "GooglePlus", "+1", url)
            }
        }
    }), i.network("googleplus", {
        script: {
            src: "//apis.google.com/js/plusone.js"
        },
        append: function(t) {
            return e.gapi?!1 : void(e.___gcfg = {
                lang: i.settings.googleplus.lang,
                parsetags: "explicit"
            })
        }
    });
    var o = function(e) {
        var n = t.createElement("div");
        n.className = "g-" + e.widget.gtype, i.copyDataAttributes(e.el, n), e.el.appendChild(n), e.gplusEl = n
    }, s = function(e, t) {
        return "function" != typeof t ? null : function(i) {
            t(e.el, i)
        }
    }, r = function(t) {
        var n = t.widget.gtype;
        if (e.gapi && e.gapi[n]) {
            for (var o = i.settings.googleplus, r = i.getDataAttributes(t.el, !0, !0), a = ["onstartinteraction", "onendinteraction", "callback"], u = 0; u < a.length; u++)
                r[a[u]] = s(t, o[a[u]]);
            e.gapi[n].render(t.gplusEl, r)
        }
    };
    i.widget("googleplus", "one", {
        init: o,
        activate: r,
        gtype: "plusone"
    }), i.widget("googleplus", "share", {
        init: o,
        activate: r,
        gtype: "plus"
    }), i.widget("googleplus", "badge", {
        init: o,
        activate: r,
        gtype: "plus"
    })
}(window, window.document, window.us_native), function(e, t, i, n) {
    i.setup({
        facebook: {
            lang: "en_US",
            appId: us_script.facebook_appid,
            onlike: function(t) {
                "ga"in e && e.ga !== n && "function" == typeof e.ga && ga("send", "social", "facebook", "like", t)
            },
            onunlike: function(t) {
                "ga"in e && e.ga !== n && "function" == typeof e.ga && ga("send", "social", "facebook", "unlike", t)
            }
        }
    }), i.network("facebook", {
        script: {
            src: "//connect.facebook.net/{{language}}/all.js",
            id: "facebook-jssdk"
        },
        append: function(n) {
            var o = t.createElement("div"), s = i.settings.facebook, r = {
                onlike: "edge.create",
                onunlike: "edge.remove",
                onsend: "message.send",
                oncomment: "comment.create",
                onuncomment: "comment.remove"
            };
            o.id = "fb-root", t.body.appendChild(o), n.script.src = n.script.src.replace("{{language}}", s.lang), e.fbAsyncInit = function() {
                e.FB.init({
                    appId: s.appId,
                    xfbml: !0
                });
                for (var t in r)
                    "function" == typeof s[t] && e.FB.Event.subscribe(r[t], s[t])
            }
        }
    }), i.widget("facebook", "like", {
        init: function(n) {
            var o = t.createElement("div");
            o.className = "fb-like", i.copyDataAttributes(n.el, o), n.el.appendChild(o), e.FB && e.FB.XFBML && e.FB.XFBML.parse(n.el)
        }
    })
}(window, window.document, window.us_native), function(e, t, i, n) {
    var o = [];
    i.setup({
        vkontakte: {
            apiId: us_script.vkontakte_appid,
            group: {
                id: 0,
                mode: 0,
                width: 48,
                height: 20
            },
            like: {
                type: "mini",
                pageUrl: null
            }
        }
    }), i.network("vkontakte", {
        script: {
            src: "//vk.com/js/api/openapi.js?105",
            id: "vk-jsapi"
        },
        onload: function(e) {
            var t = i.settings.vkontakte;
            VK.init({
                apiId: t.apiId,
                onlyWidgets: !0
            });
            for (var n = 0, s = o.length; s > n; o[n].call(this), n++);
        }
    });
    var s = function(e, t, i) {
        for (var n = {}, o, s = 0, r = t.length; r > s; o = t[s], n[o] = e.getAttribute("data-" + o) || i[o], s++);
        return n
    };
    i.widget("vkontakte", "like", {
        init: function(n) {
            "object" != typeof e.VK && o.push(function() {
                var e = t.createElement("div"), o = i.settings.vkontakte;
                e.className = "vk-like", e.id = "vkontakte-like-" + (new Date).getTime() + Math.random().toString().replace(".", "-"), i.copyDataAttributes(n.el, e), like = s(n.el, ["pageUrl", "type"], o.like), n.el.appendChild(e), VK.Widgets.Like(e.id, like)
            })
        }
    })
}(window, window.document, window.us_native), !function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    function t(e) {
        return a.raw ? e : encodeURIComponent(e)
    }
    function i(e) {
        return a.raw ? e : decodeURIComponent(e)
    }
    function n(e) {
        return t(a.json ? JSON.stringify(e) : String(e))
    }
    function o(e) {
        0 === e.indexOf('"') && (e = e.slice(1, - 1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(r, " ")), a.json ? JSON.parse(e) : e
        } catch (t) {}
    }
    function s(t, i) {
        var n = a.raw ? t: o(t);
        return e.isFunction(i) ? i(n) : n
    }
    var r = /\+/g, a = e.cookie = function(o, r, u) {
        if (void 0 !== r&&!e.isFunction(r)
            ) {
            if (u = e.extend({}, a.defaults, u), "number" == typeof u.expires) {
                var l = u.expires, c = u.expires = new Date;
                c.setTime( + c + 864e5 * l)
            }
            return document.cookie = [t(o), "=", n(r), u.expires ? "; expires=" + u.expires.toUTCString(): "", u.path ? "; path=" + u.path: "", u.domain ? "; domain=" + u.domain: "", u.secure ? "; secure": ""].join("")
        }
        for (var d = o ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], f = 0, m = p.length; m > f; f++) {
            var h = p[f].split("="), g = i(h.shift()), v = h.join("=");
            if (o && o === g) {
                d = s(v, r);
                break
            }
            o || void 0 === (v = s(v)) || (d[g] = v)
        }
        return d
    };
    a.defaults = {}, e.removeCookie = function(t, i) {
        return void 0 === e.cookie(t)?!1 : (e.cookie(t, "", e.extend({}, i, {
            expires: - 1
        })), !e.cookie(t))
    }
}), function(e) {
    var t = "Close", i = "BeforeClose", n = "AfterClose", o = "BeforeAppend", s = "MarkupParse", r = "Open", a = "Change", u = "mfp", l = "." + u, c = "mfp-ready", d = "mfp-removing", p = "mfp-prevent-close", f, m = function() {}, h=!!window.jQuery, g, v = e(window), _, y, b, k, C, w = function(e, t) {
        f.ev.on(u + e + l, t)
    }, x = function(t, i, n, o) {
        var s = document.createElement("div");
        return s.className = "mfp-" + t, n && (s.innerHTML = n), o ? i && i.appendChild(s) : (s = e(s), i && s.appendTo(i)), s
    }, j = function(t, i) {
        f.ev.triggerHandler(u + t, i), f.st.callbacks && (t = t.charAt(0).toLowerCase() + t.slice(1), f.st.callbacks[t] && f.st.callbacks[t].apply(f, e.isArray(i) ? i : [i]))
    }, I = function(t) {
        return t === C && f.currTemplate.closeBtn || (f.currTemplate.closeBtn = e(f.st.closeMarkup.replace("%title%", f.st.tClose)), C = t), f.currTemplate.closeBtn
    }, Q = function() {
        e.magnificPopup.instance || (f = new m, f.init(), e.magnificPopup.instance = f)
    }, P = function() {
        var e = document.createElement("p").style, t = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== e.transition)
            return !0;
        for (; t.length;)
            if (t.pop() + "Transition"in e)
                return !0;
        return !1
    };
    m.prototype = {
        constructor: m,
        init: function() {
            var t = navigator.appVersion;
            f.isIE7 =- 1 !== t.indexOf("MSIE 7."), f.isIE8 =- 1 !== t.indexOf("MSIE 8."), f.isLowIE = f.isIE7 || f.isIE8, f.isAndroid = /android/gi.test(t), f.isIOS = /iphone|ipad|ipod/gi.test(t), f.supportsTransition = P(), f.probablyMobile = f.isAndroid || f.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), y = e(document), f.popupsCache = {}
        },
        open: function(t) {
            _ || (_ = e(document.body));
            var i;
            if (t.isObj===!1) {
                f.items = t.items.toArray(), f.index = 0;
                var n = t.items, o;
                for (i = 0; i < n.length; i++)
                    if (o = n[i], o.parsed && (o = o.el[0]), o === t.el[0]) {
                        f.index = i;
                        break
                    }
            } else 
                f.items = e.isArray(t.items) ? t.items : [t.items], f.index = t.index || 0;
            if (f.isOpen)
                return void f.updateItemHTML();
            f.types = [], k = "", f.ev = t.mainEl && t.mainEl.length ? t.mainEl.eq(0) : y, t.key ? (f.popupsCache[t.key] || (f.popupsCache[t.key] = {}), f.currTemplate = f.popupsCache[t.key]) : f.currTemplate = {}, f.st = e.extend(!0, {}, e.magnificPopup.defaults, t), f.fixedContentPos = "auto" === f.st.fixedContentPos?!f.probablyMobile : f.st.fixedContentPos, f.st.modal && (f.st.closeOnContentClick=!1, f.st.closeOnBgClick=!1, f.st.showCloseBtn=!1, f.st.enableEscapeKey=!1), f.bgOverlay || (f.bgOverlay = x("bg").on("click" + l, function() {
                f.close()
            }), f.wrap = x("wrap").attr("tabindex", - 1).on("click" + l, function(e) {
                f._checkIfClose(e.target) && f.close()
            }), f.container = x("container", f.wrap)), f.contentContainer = x("content"), f.st.preloader && (f.preloader = x("preloader", f.container, f.st.tLoading));
            var a = e.magnificPopup.modules;
            for (i = 0; i < a.length; i++) {
                var u = a[i];
                u = u.charAt(0).toUpperCase() + u.slice(1), f["init" + u].call(f)
            }
            j("BeforeOpen"), f.st.showCloseBtn && (f.st.closeBtnInside ? (w(s, function(e, t, i, n) {
                i.close_replaceWith = I(n.type)
            }), k += " mfp-close-btn-in") : f.wrap.append(I())), f.st.alignTop && (k += " mfp-align-top"), f.wrap.css(f.fixedContentPos ? {
                overflow: f.st.overflowY,
                overflowX: "hidden",
                overflowY: f.st.overflowY
            } : {
                top: v.scrollTop(),
                position: "absolute"
            }), (f.st.fixedBgPos===!1 || "auto" === f.st.fixedBgPos&&!f.fixedContentPos) && f.bgOverlay.css({
                height: y.height(),
                position: "absolute"
            }), f.st.enableEscapeKey && y.on("keyup" + l, function(e) {
                27 === e.keyCode && f.close()
            }), v.on("resize" + l, function() {
                f.updateSize()
            }), f.st.closeOnContentClick || (k += " mfp-auto-cursor"), k && f.wrap.addClass(k);
            var d = f.wH = v.height(), p = {};
            if (f.fixedContentPos && f._hasScrollBar(d)) {
                var m = f._getScrollbarSize();
                m && (p.marginRight = m)
            }
            f.fixedContentPos && (f.isIE7 ? e("body, html").css("overflow", "hidden") : p.overflow = "hidden");
            var h = f.st.mainClass;
            return f.isIE7 && (h += " mfp-ie7"), h && f._addClassToMFP(h), f.updateItemHTML(), j("BuildControls"), e("html").css(p), f.bgOverlay.add(f.wrap).prependTo(f.st.prependTo || _), f._lastFocusedEl = document.activeElement, setTimeout(function() {
                f.content ? (f._addClassToMFP(c), f._setFocus()) : f.bgOverlay.addClass(c), y.on("focusin" + l, f._onFocusIn)
            }, 16), f.isOpen=!0, f.updateSize(d), j(r), t
        },
        close: function() {
            f.isOpen && (j(i), f.isOpen=!1, f.st.removalDelay&&!f.isLowIE && f.supportsTransition ? (f._addClassToMFP(d), setTimeout(function() {
                f._close()
            }, f.st.removalDelay)) : f._close())
        },
        _close: function() {
            j(t);
            var i = d + " " + c + " ";
            if (f.bgOverlay.detach(), f.wrap.detach(), f.container.empty(), f.st.mainClass && (i += f.st.mainClass + " "), f._removeClassFromMFP(i), f.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                f.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o)
            }
            y.off("keyup" + l + " focusin" + l), f.ev.off(l), f.wrap.attr("class", "mfp-wrap").removeAttr("style"), f.bgOverlay.attr("class", "mfp-bg"), f.container.attr("class", "mfp-container"), !f.st.showCloseBtn || f.st.closeBtnInside && f.currTemplate[f.currItem.type]!==!0 || f.currTemplate.closeBtn && f.currTemplate.closeBtn.detach(), f._lastFocusedEl && e(f._lastFocusedEl).focus(), f.currItem = null, f.content = null, f.currTemplate = null, f.prevHeight = 0, j(n)
        },
        updateSize: function(e) {
            if (f.isIOS) {
                var t = document.documentElement.clientWidth / window.innerWidth, i = window.innerHeight * t;
                f.wrap.css("height", i), f.wH = i
            } else 
                f.wH = e || v.height();
            f.fixedContentPos || f.wrap.css("height", f.wH), j("Resize")
        },
        updateItemHTML: function() {
            var t = f.items[f.index];
            f.contentContainer.detach(), f.content && f.content.detach(), t.parsed || (t = f.parseEl(f.index));
            var i = t.type;
            if (j("BeforeChange", [f.currItem ? f.currItem.type: "", i]), f.currItem = t, !f.currTemplate[i]) {
                var n = f.st[i] ? f.st[i].markup: !1;
                j("FirstMarkupParse", n), f.currTemplate[i] = n ? e(n) : !0
            }
            b && b !== t.type && f.container.removeClass("mfp-" + b + "-holder");
            var o = f["get" + i.charAt(0).toUpperCase() + i.slice(1)](t, f.currTemplate[i]);
            f.appendContent(o, i), t.preloaded=!0, j(a, t), b = t.type, f.container.prepend(f.contentContainer), j("AfterChange")
        },
        appendContent: function(e, t) {
            f.content = e, e ? f.st.showCloseBtn && f.st.closeBtnInside && f.currTemplate[t]===!0 ? f.content.find(".mfp-close").length || f.content.append(I()) : f.content = e : f.content = "", j(o), f.container.addClass("mfp-" + t + "-holder"), f.contentContainer.append(f.content)
        },
        parseEl: function(t) {
            var i = f.items[t], n;
            if (i.tagName ? i = {
                el: e(i)
            } : (n = i.type, i = {
                data: i,
                src: i.src
            }), i.el) {
                for (var o = f.types, s = 0; s < o.length; s++)
                    if (i.el.hasClass("mfp-" + o[s])) {
                        n = o[s];
                        break
                    }
                i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
            }
            return i.type = n || f.st.type || "inline", i.index = t, i.parsed=!0, f.items[t] = i, j("ElementParse", i), f.items[t]
        },
        addGroup: function(e, t) {
            var i = function(i) {
                i.mfpEl = this, f._openClick(i, e, t)
            };
            t || (t = {});
            var n = "click.magnificPopup";
            t.mainEl = e, t.items ? (t.isObj=!0, e.off(n).on(n, i)) : (t.isObj=!1, t.delegate ? e.off(n).on(n, t.delegate, i) : (t.items = e, e.off(n).on(n, i)))
        },
        _openClick: function(t, i, n) {
            var o = void 0 !== n.midClick ? n.midClick : e.magnificPopup.defaults.midClick;
            if (o || 2 !== t.which&&!t.ctrlKey&&!t.metaKey) {
                var s = void 0 !== n.disableOn ? n.disableOn : e.magnificPopup.defaults.disableOn;
                if (s)
                    if (e.isFunction(s)) {
                        if (!s.call(f))
                            return !0
                    } else if (v.width() < s)
                        return !0;
                t.type && (t.preventDefault(), f.isOpen && t.stopPropagation()), n.el = e(t.mfpEl), n.delegate && (n.items = i.find(n.delegate)), f.open(n)
            }
        },
        updateStatus: function(e, t) {
            if (f.preloader) {
                g !== e && f.container.removeClass("mfp-s-" + g), t || "loading" !== e || (t = f.st.tLoading);
                var i = {
                    status: e,
                    text: t
                };
                j("UpdateStatus", i), e = i.status, t = i.text, f.preloader.html(t), f.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), f.container.addClass("mfp-s-" + e), g = e
            }
        },
        _checkIfClose: function(t) {
            if (!e(t).hasClass(p)) {
                var i = f.st.closeOnContentClick, n = f.st.closeOnBgClick;
                if (i && n)
                    return !0;
                if (!f.content || e(t).hasClass("mfp-close") || f.preloader && t === f.preloader[0])
                    return !0;
                if (t === f.content[0] || e.contains(f.content[0], t)) {
                    if (i)
                        return !0
                } else if (n && e.contains(document, t))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            f.bgOverlay.addClass(e), f.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), f.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (f.isIE7 ? y.height() : document.body.scrollHeight) > (e || v.height())
        },
        _setFocus: function() {
            (f.st.focus ? f.content.find(f.st.focus).eq(0) : f.wrap).focus()
        },
        _onFocusIn: function(t) {
            return t.target === f.wrap[0] || e.contains(f.wrap[0], t.target) ? void 0 : (f._setFocus(), !1)
        },
        _parseMarkup: function(t, i, n) {
            var o;
            n.data && (i = e.extend(n.data, i)), j(s, [t, i, n]), e.each(i, function(e, i) {
                if (void 0 === i || i===!1)
                    return !0;
                if (o = e.split("_"), o.length > 1) {
                    var n = t.find(l + "-" + o[0]);
                    if (n.length > 0) {
                        var s = o[1];
                        "replaceWith" === s ? n[0] !== i[0] && n.replaceWith(i) : "img" === s ? n.is("img") ? n.attr("src", i) : n.replaceWith('<img src="' + i + '" class="' + n.attr("class") + '" />') : n.attr(o[1], i)
                    }
                } else 
                    t.find(l + "-" + e).html(i)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === f.scrollbarSize) {
                var e = document.createElement("div");
                e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), f.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return f.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: m.prototype,
        modules: [],
        open: function(t, i) {
            return Q(), t = t ? e.extend(!0, {}, t) : {}, t.isObj=!0, t.index = i || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, i) {
            i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, e.fn.magnificPopup = function(t) {
        Q();
        var i = e(this);
        if ("string" == typeof t)
            if ("open" === t) {
                var n, o = h ? i.data("magnificPopup"): i[0].magnificPopup, s = parseInt(arguments[1], 10) || 0;
                o.items ? n = o.items[s] : (n = i, o.delegate && (n = n.find(o.delegate)), n = n.eq(s)), f._openClick({
                    mfpEl: n
                }, i, o)
            } else 
                f.isOpen && f[t].apply(f, Array.prototype.slice.call(arguments, 1));
        else 
            t = e.extend(!0, {}, t), h ? i.data("magnificPopup", t) : i[0].magnificPopup = t, f.addGroup(i, t);
        return i
    };
    var T = "inline", E, S, O, z = function() {
        O && (S.after(O.addClass(E)).detach(), O = null)
    };
    e.magnificPopup.registerModule(T, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                f.types.push(T), w(t + "." + T, function() {
                    z()
                })
            },
            getInline: function(t, i) {
                if (z(), t.src) {
                    var n = f.st.inline, o = e(t.src);
                    if (o.length) {
                        var s = o[0].parentNode;
                        s && s.tagName && (S || (E = n.hiddenClass, S = x(E), E = "mfp-" + E), O = o.after(S).detach().removeClass(E)), f.updateStatus("ready")
                    } else 
                        f.updateStatus("error", n.tNotFound), o = e("<div>");
                    return t.inlineElement = o, o
                }
                return f.updateStatus("ready"), f._parseMarkup(i, {}, t), i
            }
        }
    });
    var M = "ajax", B, A = function() {
        B && _.removeClass(B)
    }, N = function() {
        A(), f.req && f.req.abort()
    };
    e.magnificPopup.registerModule(M, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                f.types.push(M), B = f.st.ajax.cursor, w(t + "." + M, N), w("BeforeChange." + M, N)
            },
            getAjax: function(t) {
                B && _.addClass(B), f.updateStatus("loading");
                var i = e.extend({
                    url: t.src,
                    success: function(i, n, o) {
                        var s = {
                            data: i,
                            xhr: o
                        };
                        j("ParseAjax", s), f.appendContent(e(s.data), M), t.finished=!0, A(), f._setFocus(), setTimeout(function() {
                            f.wrap.addClass(c)
                        }, 16), f.updateStatus("ready"), j("AjaxContentAdded")
                    },
                    error: function() {
                        A(), t.finished = t.loadError=!0, f.updateStatus("error", f.st.ajax.tError.replace("%url%", t.src))
                    }
                }, f.st.ajax.settings);
                return f.req = e.ajax(i), ""
            }
        }
    });
    var F, R = function(t) {
        if (t.data && void 0 !== t.data.title)
            return t.data.title;
        var i = f.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i))
                return i.call(f, t);
            if (t.el)
                return t.el.attr(i) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = f.st.image, i = ".image";
                f.types.push("image"), w(r + i, function() {
                    "image" === f.currItem.type && e.cursor && _.addClass(e.cursor)
                }), w(t + i, function() {
                    e.cursor && _.removeClass(e.cursor), v.off("resize" + l)
                }), w("Resize" + i, f.resizeImage), f.isLowIE && w("AfterChange", f.resizeImage)
            },
            resizeImage: function() {
                var e = f.currItem;
                if (e && e.img && f.st.image.verticalFit) {
                    var t = 0;
                    f.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", f.wH - t)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize=!0, F && clearInterval(F), e.isCheckingImgSize=!1, j("ImageHasSize", e), e.imgHidden && (f.content && f.content.removeClass("mfp-loading"), e.imgHidden=!1))
            },
            findImageSize: function(e) {
                var t = 0, i = e.img[0], n = function(o) {
                    F && clearInterval(F), F = setInterval(function() {
                        return i.naturalWidth > 0 ? void f._onImageHasSize(e) : (t > 200 && clearInterval(F), t++, void(3 === t ? n(10) : 40 === t ? n(50) : 100 === t && n(500)))
                    }, o)
                };
                n(1)
            },
            getImage: function(t, i) {
                var n = 0, o = function() {
                    t && (t.img[0].complete ? (t.img.off(".mfploader"), t === f.currItem && (f._onImageHasSize(t), f.updateStatus("ready")), t.hasSize=!0, t.loaded=!0, j("ImageLoadComplete")) : (n++, 200 > n ? setTimeout(o, 100) : s()))
                }, s = function() {
                    t && (t.img.off(".mfploader"), t === f.currItem && (f._onImageHasSize(t), f.updateStatus("error", r.tError.replace("%url%", t.src))), t.hasSize=!0, t.loaded=!0, t.loadError=!0)
                }, r = f.st.image, a = i.find(".mfp-img");
                if (a.length) {
                    var u = document.createElement("img");
                    u.className = "mfp-img", t.img = e(u).on("load.mfploader", o).on("error.mfploader", s), u.src = t.src, a.is("img") && (t.img = t.img.clone()), u = t.img[0], u.naturalWidth > 0 ? t.hasSize=!0 : u.width || (t.hasSize=!1)
                }
                return f._parseMarkup(i, {
                    title: R(t),
                    img_replaceWith: t.img
                }, t), f.resizeImage(), t.hasSize ? (F && clearInterval(F), t.loadError ? (i.addClass("mfp-loading"), f.updateStatus("error", r.tError.replace("%url%", t.src))) : (i.removeClass("mfp-loading"), f.updateStatus("ready")), i) : (f.updateStatus("loading"), t.loading=!0, t.hasSize || (t.imgHidden=!0, i.addClass("mfp-loading"), f.findImageSize(t)), i)
            }
        }
    });
    var H, U = function() {
        return void 0 === H && (H = void 0 !== document.createElement("p").style.MozTransform), H
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e = f.st.zoom, n = ".zoom", o;
                if (e.enabled && f.supportsTransition) {
                    var s = e.duration, r = function(t) {
                        var i = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), n = "all " + e.duration / 1e3 + "s " + e.easing, o = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }, s = "transition";
                        return o["-webkit-" + s] = o["-moz-" + s] = o["-o-" + s] = o[s] = n, i.css(o), i
                    }, a = function() {
                        f.content.css("visibility", "visible")
                    }, u, l;
                    w("BuildControls" + n, function() {
                        if (f._allowZoom()) {
                            if (clearTimeout(u), f.content.css("visibility", "hidden"), o = f._getItemToZoom(), !o)
                                return void a();
                            l = r(o), l.css(f._getOffset()), f.wrap.append(l), u = setTimeout(function() {
                                l.css(f._getOffset(!0)), u = setTimeout(function() {
                                    a(), setTimeout(function() {
                                        l.remove(), o = l = null, j("ZoomAnimationEnded")
                                    }, 16)
                                }, s)
                            }, 16)
                        }
                    }), w(i + n, function() {
                        if (f._allowZoom()) {
                            if (clearTimeout(u), f.st.removalDelay = s, !o) {
                                if (o = f._getItemToZoom(), !o)
                                    return;
                                l = r(o)
                            }
                            l.css(f._getOffset(!0)), f.wrap.append(l), f.content.css("visibility", "hidden"), setTimeout(function() {
                                l.css(f._getOffset())
                            }, 16)
                        }
                    }), w(t + n, function() {
                        f._allowZoom() && (a(), l && l.remove(), o = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === f.currItem.type
            },
            _getItemToZoom: function() {
                return f.currItem.hasSize ? f.currItem.img : !1
            },
            _getOffset: function(t) {
                var i;
                i = t ? f.currItem.img : f.st.zoom.opener(f.currItem.el || f.currItem);
                var n = i.offset(), o = parseInt(i.css("padding-top"), 10), s = parseInt(i.css("padding-bottom"), 10);
                n.top -= e(window).scrollTop() - o;
                var r = {
                    width: i.width(),
                    height: (h ? i.innerHeight() : i[0].offsetHeight) - s - o
                };
                return U() ? r["-moz-transform"] = r.transform = "translate(" + n.left + "px," + n.top + "px)" : (r.left = n.left, r.top = n.top), r
            }
        }
    });
    var L = "iframe", W = "//about:blank", D = function(e) {
        if (f.currTemplate[L]) {
            var t = f.currTemplate[L].find("iframe");
            t.length && (e || (t[0].src = W), f.isIE8 && t.css("display", e ? "block" : "none"))
        }
    };
    e.magnificPopup.registerModule(L, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                f.types.push(L), w("BeforeChange", function(e, t, i) {
                    t !== i && (t === L ? D() : i === L && D(!0))
                }), w(t + "." + L, function() {
                    D()
                })
            },
            getIframe: function(t, i) {
                var n = t.src, o = f.st.iframe;
                e.each(o.patterns, function() {
                    return n.indexOf(this.index)>-1 ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1) : void 0
                });
                var s = {};
                return o.srcAction && (s[o.srcAction] = n), f._parseMarkup(i, s, t), f.updateStatus("ready"), i
            }
        }
    });
    var q = function(e) {
        var t = f.items.length;
        return e > t - 1 ? e - t : 0 > e ? t + e : e
    }, K = function(e, t, i) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
    };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var i = f.st.gallery, n = ".mfp-gallery", o = Boolean(e.fn.mfpFastClick);
                return f.direction=!0, i && i.enabled ? (k += " mfp-gallery", w(r + n, function() {
                    i.navigateByImgClick && f.wrap.on("click" + n, ".mfp-img", function() {
                        return f.items.length > 1 ? (f.next(), !1) : void 0
                    }), y.on("keydown" + n, function(e) {
                        37 === e.keyCode ? f.prev() : 39 === e.keyCode && f.next()
                    })
                }), w("UpdateStatus" + n, function(e, t) {
                    t.text && (t.text = K(t.text, f.currItem.index, f.items.length))
                }), w(s + n, function(e, t, n, o) {
                    var s = f.items.length;
                    n.counter = s > 1 ? K(i.tCounter, o.index, s) : ""
                }), w("BuildControls" + n, function() {
                    if (f.items.length > 1 && i.arrows&&!f.arrowLeft) {
                        var t = i.arrowMarkup, n = f.arrowLeft = e(t.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(p), s = f.arrowRight = e(t.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(p), r = o ? "mfpFastClick": "click";
                        n[r](function() {
                            f.prev()
                        }), s[r](function() {
                            f.next()
                        }), f.isIE7 && (x("b", n[0], !1, !0), x("a", n[0], !1, !0), x("b", s[0], !1, !0), x("a", s[0], !1, !0)), f.container.append(n.add(s))
                    }
                }), w(a + n, function() {
                    f._preloadTimeout && clearTimeout(f._preloadTimeout), f._preloadTimeout = setTimeout(function() {
                        f.preloadNearbyImages(), f._preloadTimeout = null
                    }, 16)
                }), void w(t + n, function() {
                    y.off(n), f.wrap.off("click" + n), f.arrowLeft && o && f.arrowLeft.add(f.arrowRight).destroyMfpFastClick(), f.arrowRight = f.arrowLeft = null
                })) : !1
            },
            next: function() {
                f.direction=!0, f.index = q(f.index + 1), f.updateItemHTML()
            },
            prev: function() {
                f.direction=!1, f.index = q(f.index - 1), f.updateItemHTML()
            },
            goTo: function(e) {
                f.direction = e >= f.index, f.index = e, f.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e = f.st.gallery.preload, t = Math.min(e[0], f.items.length), i = Math.min(e[1], f.items.length), n;
                for (n = 1; n <= (f.direction ? i : t); n++)
                    f._preloadItem(f.index + n);
                for (n = 1; n <= (f.direction ? t : i); n++)
                    f._preloadItem(f.index - n)
            },
            _preloadItem: function(t) {
                if (t = q(t), !f.items[t].preloaded) {
                    var i = f.items[t];
                    i.parsed || (i = f.parseEl(t)), j("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        i.hasSize=!0
                    }).on("error.mfploader", function() {
                        i.hasSize=!0, i.loadError=!0, j("LazyLoadError", i)
                    }).attr("src", i.src)), i.preloaded=!0
                }
            }
        }
    });
    var Z = "retina";
    e.magnificPopup.registerModule(Z, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = f.st.retina, t = e.ratio;
                    t = isNaN(t) ? t() : t, t > 1 && (w("ImageHasSize." + Z, function(e, i) {
                        i.img.css({
                            "max-width": i.img[0].naturalWidth / t,
                            width: "100%"
                        })
                    }), w("ElementParse." + Z, function(i, n) {
                        n.src = e.replaceSrc(n, t)
                    }))
                }
            }
        }
    }), function() {
        var t = 1e3, i = "ontouchstart"in window, n = function() {
            v.off("touchmove" + s + " touchend" + s)
        }, o = "mfpFastClick", s = "." + o;
        e.fn.mfpFastClick = function(o) {
            return e(this).each(function() {
                var r = e(this), a;
                if (i) {
                    var u, l, c, d, p, f;
                    r.on("touchstart" + s, function(e) {
                        d=!1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], l = p.clientX, c = p.clientY, v.on("touchmove" + s, function(e) {
                            p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - l) > 10 || Math.abs(p.clientY - c) > 10) && (d=!0, n())
                        }).on("touchend" + s, function(e) {
                            n(), d || f > 1 || (a=!0, e.preventDefault(), clearTimeout(u), u = setTimeout(function() {
                                a=!1
                            }, t), o())
                        })
                    })
                }
                r.on("click" + s, function() {
                    a || o()
                })
            })
        }, e.fn.destroyMfpFastClick = function() {
            e(this).off("touchstart" + s + " click" + s), i && v.off("touchmove" + s + " touchend" + s)
        }
    }(), Q()
}(window.jQuery || window.Zepto);
