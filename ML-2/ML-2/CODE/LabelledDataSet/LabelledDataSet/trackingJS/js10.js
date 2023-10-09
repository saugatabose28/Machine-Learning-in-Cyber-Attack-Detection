/* From: production-mt-wfe-58-70-use1 : 5919 */
huff.unit("util/user", function(b) {
    var a = this;
    a.setInfluenceCookie = function(d) {
        var e = HuffCookies;
        d = d || false;
        HPUtil.removeEmptyInfluence();
        if (!e.getUserId()) {
            return 
        }
        var c = "huffpost_influence_" + e.getUserId();
        if (d) {
            e.setCookie(c, d)
        }
        return 
    };
    a.updateInfluenceCookie = function(h, f) {
        var g = HuffCookies;
        h = h || false;
        f = f || false;
        var d = g.getUserInfluence();
        HPUtil.removeEmptyInfluence();
        if (!g.getUserId()) {
            return 
        }
        if (h && f && d && d[h]) {
            var e = new Date();
            e.setDate(e.getDate() + 30);
            d[h].value = f;
            d[h].check_date = Date.parse(e.toString());
            var c = JSON.stringify(d);
            HPUtil.setInfluenceCookie(c)
        }
        return 
    };
    a.updateUserInfluence = function() {
        var d = HuffCookies.getUserInfluence();
        var e = Date.parse(new Date().toString());
        var c = false;
        if (d.commented.check_date < e) {
            c = "commented"
        }
        if (d.blogged.check_date < e) {
            c = "blogged"
        }
        if (!c) {
            return 
        }
        jQuery.ajax({
            type: "GET",
            dataType: "json",
            url: "http://" + location.host + "/commentsv3/checkUserInfluence.php?prop=" + c,
            success: function(f) {
                if ("object" !== typeof(f)) {
                    return 
                }
                var g = new Date();
                if (f.value == "noinfluence") {
                    g.setDate(g.getDate() + 1)
                } else {
                    g.setSeconds(g.getSeconds() + 2592000 - parseInt(f.value))
                }
                if (f.prop == "commented") {
                    d.commented.value = (f.value == "noinfluence") ? 0 : 1;
                    d.commented.check_date = Date.parse(g.toString())
                } else {
                    if (f.prop == "blogged") {
                        d.blogged.value = (f.value == "noinfluence") ? 0 : 1;
                        d.blogged.check_date = Date.parse(g.toString())
                    }
                }
                HPUtil.setInfluenceCookie(JSON.stringify(d));
                return 
            },
            error: function(f) {
                return 
            }
        })
    };
    a.reauthenticated_user = false;
    a.reauthenticateUser = function(e) {
        e = e || false;
        var d = {};
        var c = HPUtil.GetEntryID();
        if (c) {
            d.entry_id = c
        }
        jQuery.ajax({
            type: "POST",
            url: "/users/login/reauthenticate.php",
            data: d,
            success: function(f) {
                a.reauthenticated_user = true;
                a.updateAuthStatus();
                f && (f = JSON.parse(f));
                if (!e&&!HPUtil.isDotComVersion()) {
                    window.XDAuth && XDAuth.syncRemoteWithLocal()
                }
                if ("object" === typeof f) {
                    SocialNotifications.setCounter(f.notifications);
                    if (f.hasOwnProperty("snp_entry_module")) {
                        SNPModule.addEntriesInside(f.snp_entry_module)
                    }
                }
            },
            error: function() {
                a.reauthenticated_user = true
            }
        })
    };
    a.updateAuthStatus = function(j) {
        if ((typeof HuffCookies === "undefined") ||!(HPUtil.isWWW() || HPConfig.site)) {
            return 
        }
        j = j || false;
        var d = HuffCookies;
        var h = d.getUserName() || false;
        if (!a.reauthenticated_user && h&&!(d.getUserId() || d.getCookie("huffpost_prefs"))) {
            a.reauthenticateUser();
            return 
        }
        if (j) {
            a.reauthenticateUser(j);
            return 
        }
        if (h) {
            var e = "/social/" + h;
            var g = HPUtil.getDisplayName(h);
            var l = jQuery("#avatar_logged_in");
            var k = jQuery(".wendybird_user_data .dropdown .profile");
            if (l.length) {
                var i = '<a href="' + e + '" id="avatar_logged_in_link" class="bold">				<img src="' + d.getCurrentUserPhotoUrl() + '" />' + g + "</a>";
                l.html(i).css("display", "block");
                k.attr("href", e)
            }
            jQuery("body").addClass("sn_signed_in");
            jQuery("#wendybird_user_name").html('<a href="' + e + '" class="color_333333">' + g + "</a>");
            jQuery("#wendybird_user").show();
            jQuery("#not_logged_user").hide();
            if (jQuery(".topnav .username").get(0)) {
                jQuery(".topnav .username").html('<a href="' + e + '" class="color_333333">' + g + "</a>");
                jQuery(".topnav .vcard img").attr("src", d.getCurrentUserPhotoUrl());
                jQuery(".topnav .controls li:first").attr("href", "/social/" + h);
                jQuery(".topnav .user .logged-in").show();
                jQuery(".topnav .user .not-logged-in").hide()
            }
            var c = "tmp_date_registered";
            var f = d.getCookie(c + "");
            if (f) {
                d.destroyCookie(c + "")
            }
            huff.use("conf", function(m) {
                m.get("topnav/version", function(n) {
                    if (n === "1") {
                        huff.use("util/util", function(o) {
                            o.resetNavigationEvents();
                            return 
                        })
                    }
                })
            });
            if (d.get("user_is_not_approved")) {
                d.del("user_is_not_approved");
                HPError.e("Your account has not yet been activated");
                if (window.IS_NEWSGLIDE) {
                    jQuery(document).trigger("account.error", ["Your account has not yet been activated"]);
                    ChromeApp.Login.Collection.Instance.fireEvent("account.error", ["Your account has not yet been activated"])
                } else {
                    window.location.href = window.location.href
                }
                return 
            }
            if (d.get("snn_track_user_logged_in") && typeof(SNProject) !== "undefined") {
                SNProject.track(d.getUserId(), "user_log_in");
                d.del("snn_track_user_logged_in")
            }
            HPUtil.checkUserInfluence();
            el = jQuery("#fbook_main_text_loggedin");
            el && el.hide();
            el = jQuery("#join_login_fbook_loggedin");
            el && el.show();
            el = jQuery("#fbook_main_text_name");
            el && el.html(HPUtil.getDisplayName());
            el = jQuery("#fConnect_img_container");
            el && el.hide()
        } else {
            el = jQuery("#fbook_main_text_notloggedin");
            el && el.hide();
            el = jQuery("#join_login_fbook_notloggedin");
            el && el.show();
            el = jQuery("#fConnect_img_container");
            el && el.show()
        }
        return 
    };
    a.updateNavByReferrer = function() {
        var e = "";
        var f = "";
        var d = "";
        var c = jQuery("#not_logged_user");
        if (0 == c.length) {
            return 
        }
        if (!(HPConfig.site === false || HPConfig.site === "uk")) {
            return 
        }
        if (/http:\/\/www.facebook.com|https:\/\/www.facebook.com/.test(document.referrer) || HPUtil.getUrlVar("fb_action_ids")) {
            d = "facebook";
            return 
        } else {
            if (/http:\/\/t.co|https:\/\/t.co/.test(document.referrer) || HPUtil.getUrlVar("test_twitter_mat")) {
                d = "twitter"
            } else {
                if (/welcomeUK/.test(document.referrer)) {
                    d = "ukcampaign"
                }
            }
        }
        window.setTimeout(function() {
            if ("" != d) {
                if (HuffPrefs.get(d)) {
                    return 
                }
                f += '<div id="nav_learn_more_link" class="nav_provider_learn_more float_left cursor_pointer">' + __("Learn more") + "</div>";
                var h = function() {
                    var i = HuffCookies.getCookie("disable_mats");
                    if (!i) {
                        return true
                    }
                    if (i == "y") {
                        i = 1;
                        HuffCookies.setCookie("disable_mats", i, 720)
                    } else {
                        i = parseInt(i, 10)
                    }
                    if (i < 3) {
                        i = i + 1;
                        HuffCookies.setCookie("disable_mats", i, 720);
                        return false
                    } else {
                        if (i == 3) {
                            return true
                        }
                    }
                    return false
                };
                var g = function() {
                    var i = HuffCookies.getCookie("disable_ukmat");
                    return (!i)
                };
                if ("ukcampaign" == d) {
                    if (g()) {
                        HPUtil.providerOverview(d)
                    }
                    return 
                }
                if (("facebook" == d || Math.ceil(Math.random(10) * 10) > 3) && h()) {
                    if ("appcenter" !== HPUtil.getUrlVar("fb_source")) {
                        HPUtil.providerOverview(d);
                        HPTrack.trackEvent("UserAuth", "Provider modal auto appeared", d)
                    }
                }
                e += '<div id="nav_provider_' + d + '_button" class="provider_buttons_bg nav_' + d + '_button float_left cursor_pointer"></div>';
                e += f;
                e += '<div id="nav_create_account_link" class="nav_provider_learn_more float_left cursor_pointer" onclick="HPConnect.Signup();return false;">' + _("Create Account") + "</div>";
                e += '<div class="clear"></div>';
                c.html(e);
                jQuery("#nav_provider_" + d + "_button").click(function() {
                    linkSocialAccount.checkLoginStatus(d);
                    HPTrack.trackEvent("UserAuth", "Clicked provider button top nav", d);
                    return 
                });
                jQuery("#nav_learn_more_link").click(function() {
                    HPUtil.providerOverview(d);
                    HPTrack.trackEvent("UserAuth", "Clicked learn more link top nav", d)
                })
            }
        }, 1500, true);
        return 
    };
    a.providerOverview = function(c) {
        huff.use("conf", "connect/modal", "modal", function(d, g, f) {
            var e = "";
            e += '<div class="modal_provider_intro">';
            e += '<div class="mp_intro_top">' + _("Welcome to HuffPost") + "!</div>";
            e += '<div class="mp_intro_' + c + '_img"></div>';
            e += '<div class="mp_intro_buttons mp_intro_' + c + '_buttons">';
            e += '<div id="provider_mat_button" style="float: left;"></div>';
            e += '<div id="mp_intro_' + c + '_button" class="provider_buttons_bg mp_' + c + '_button cursor_pointer"></div>';
            if (!HuffCookies.getUserName()) {
                e += '<a id="mp_intro_opts_button" href="javascript:void(0);" class="mp_more_connect_opts mp_more_connect_opts">' + _("Login with a different account") + "</a>"
            }
            e += "</div>";
            e += '<div class="clear"></div>';
            e += "</div>";
            if ("ukcampaign" == c) {
                e = "";
                e += '<div class="modal_provider_intro hpuk">';
                e += '<div class="mp_intro_top"><img src="/images/social/uk/logo_huffpostUK.gif" alt="The Huffington Post UK"></div>';
                e += '<div class="mp_intro_img"><img src="/images/social/uk/carla-buzasi.jpg" alt="Carla Buzasi"><p><strong>Carla Buzasi</strong><br />Editor In Chief<br />Huffington Post UK</p></div>';
                e += '<div class="mp_intro_text"><p>Welcome to The Huffington Post UK.</p><p>Now there&lsquo;s a different way to get your daily dose of news. Click this way for the latest headlines, served up in our inimitable style, alongside opinions and blogs from across the UK.</p><p>Conversations start here&hellip;</p></div>';
                e += '<div class="mp_intro_' + c + '_buttons"><input id="mp_fb_btn" type="button" value="Follow us on &#10;Facebook" class="grey first" ><input id="mp_newsletter_btn" type="button" value="Sign up for our &#10;Newsletter" class="grey">';
                if (!HuffCookies.getUserName()) {
                    e += '<input id="mp_create_btn" type="button" value="Create Account">'
                }
                e += '<input id="mp_continue_btn" type="button" value="Continue Reading &#10;HuffPost UK" class="grey last"></div>';
                e += "</div>";
                e += '<div class="clear"></div>';
                e += "</div>"
            }
            g.init(function() {
                if (document.loading_referer_mat) {
                    return 
                }
                document.loading_referer_mat = true;
                f.show({
                    theme: "connect_modal",
                    content: e,
                    width: 675,
                    onshow: function() {
                        jQuery("#mp_intro_" + c + "_button").click(function() {
                            linkSocialAccount.checkLoginStatus(c, false, false, function() {
                                HPFB.overridden_permissions = "user_about_me,user_birthday,user_interests,user_likes,user_location,read_stream,email,publish_actions"
                            });
                            HPTrack.trackEvent("UserAuth", "Clicked provider button intro modal", c)
                        });
                        jQuery("#mp_intro_opts_button").click(function() {
                            jQuery("#connect_modal_closer").click();
                            HPConnect.Login();
                            HPTrack.trackEvent("UserAuth", "Clicked another account button intro modal", c)
                        });
                        switch (c) {
                        case"facebook":
                            d.get("primary_vertical_facebook_name", function(h) {
                                social_action_btn = '<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2F' + h + '&amp;send=false&amp;layout=button_count&amp;width=250&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:165px; height:21px; visibility:visible !important; float:left; margin-top:5px;" allowTransparency="true"></iframe>';
                                jQuery("#provider_mat_button").html(social_action_btn)
                            });
                            break;
                        case"twitter":
                            d.get("primary_vertical_twitter_name", function(h) {
                                social_action_btn = '<iframe allowtransparency="true" frameborder="0" scrolling="no" src="//platform.twitter.com/widgets/follow_button.html?screen_name=' + h + '&show_count=false&show_screen_name=false&lang=en" style="width:75px; height:20px; float:left; visibility:visible !important; margin-top:5px;"></iframe>';
                                jQuery("#provider_mat_button").html(social_action_btn)
                            });
                            break;
                        case"ukcampaign":
                            jQuery("#mp_fb_btn").click(function() {
                                HuffConnect.hideModal();
                                window.open("http://www.facebook.com/HuffPostUK", "_blank");
                                window.focus();
                                HPTrack.trackEvent("UserAuth", "Click Follow Us on FB from welcome mat", "ukcampaign")
                            });
                            jQuery("#mp_newsletter_btn").click(function() {
                                HuffConnect.hideModal();
                                window.location = "/users/notifications/";
                                HPTrack.trackEvent("UserAuth", "Click Sign Up for Newsletters from welcome mat", "ukcampaign")
                            });
                            jQuery("#mp_create_btn").click(function() {
                                HuffConnect.hideModal();
                                HPConnect.Signup();
                                HPTrack.trackEvent("UserAuth", "Clicked UK Create Account from welcome mat", "ukcampaign")
                            });
                            jQuery("#mp_continue_btn").click(function() {
                                HuffConnect.hideModal();
                                HPTrack.trackEvent("UserAuth", "Click Continue Reading UK from welcome mat", "ukcampaign")
                            });
                            break;
                        default:
                            return 
                        }
                    },
                    onclose: function() {
                        try {
                            delete (document.loading_referer_mat)
                        } catch (h) {}
                        if (c == "ukcampaign") {
                            HuffCookies.setCookie("disable_ukmat", 1, 2160);
                            HPTrack.trackEvent("UserAuth", "UK Welcome mat closed", "ukcampaign");
                            return 
                        }
                        var i = HuffCookies.getCookie("disable_mats");
                        if (!i) {
                            HuffCookies.setCookie("disable_mats", 1, 720)
                        } else {
                            if (i == "y") {
                                i = 1;
                                HuffCookies.setCookie("disable_mats", i, 720)
                            } else {
                                i = parseInt(i)
                            }
                            if (i <= 3) {
                                i = i + 1
                            }
                            HuffCookies.setCookie("disable_mats", i, 720)
                        }
                        HPTrack.trackEvent("UserAuth", "Intro modal closed", c);
                        return 
                    }
                })
            })
        })
    };
    a.doFacebookAuth = function() {
        huff.use("conf", function(d) {
            d.get("auth_method", "site_blog_id", function(e, c) {
                e = e || "frame";
                c = c || 2;
                HPFB.ensureInit(function() {
                    if ("undefined" !== typeof FB ||!HPFB.authResponse) {
                        var j = window.location;
                        if (j.search.match("userhash=")) {
                            var i = (j.pathname != "/") ? j.pathname: ""
                        } else {
                            var i = (j.pathname != "/") ? (j.pathname): "";
                            i += (j.search != "") ? (j.search) : ""
                        }
                        var h = [];
                        var g = HPFB.getSessionForServer("obj");
                        h.push('<div style="position: absolute; top: -9999em; width: 10px; height: 10px; visibility: hidden;">');
                        h.push('<form id="facebook_auth_form" method="post" action="/users/connect/facebooklogin.php">');
                        for (var f in g) {
                            h.push('<input type="hidden" name="' + f + '" value="' + g[f] + '" />')
                        }
                        h.push('<input type="hidden" name="site_blog_id" value="' + c + '" />');
                        h.push('<input type="hidden" name="auth_response_type" value="' + e + '" />');
                        h.push('<input type="hidden" name="return_to" value="' + i + '" />');
                        h.push("</form>");
                        h.push("</div>");
                        jQuery("body").length && jQuery("body").prepend(h.join(""));
                        jQuery("#facebook_auth_form").submit();
                        return 
                    }
                })
            })
        })
    };
    b(a)
});

/* From: production-mt-wfe-58-70-use1 : 5919 */
/* 7926f30f9fc7acf803f8ecc84650ac50ef058260 */
