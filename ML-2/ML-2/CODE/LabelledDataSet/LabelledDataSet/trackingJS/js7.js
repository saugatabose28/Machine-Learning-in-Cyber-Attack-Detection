/* From: production-mt-wfe-52-18-use1 : 16147 */
huff.unit("util/util", function(ready) {
    var u = this;
    u.checkAge = function(bday, age_limit) {
        if ("number" != typeof bday.year || "number" != typeof bday.mon || "number" != typeof bday.mday || "number" != typeof age_limit) {
            return null
        }
        var bdate = new Date();
        bdate.setFullYear(bday.year, bday.mon - 1, bday.mday);
        if (bday.year != bdate.getFullYear() || bday.mon - 1 != bdate.getMonth() || bday.mday != bdate.getDate()) {
            return null
        }
        var now = new Date();
        var today = [];
        today.year = now.getFullYear();
        today.mon = now.getMonth() + 1;
        today.mday = now.getDate();
        if ((today.year - bday.year < age_limit) || (today.year - bday.year == age_limit && (today.mon - bday.mon) < 0) || (today.year - bday.year == age_limit && (today.mon - bday.mon) == 0 && (today.mday - bday.mday) < 0)) {
            return false
        }
        return true
    };
    u.resetNavigationEvents = function() {
        huff.use("dom/ready", function($) {
            if (!$("ul.jd_menu").length || $("ul.jd_menu > li").data("events")) {
                return 
            }
            var DELAY = 150;
            var MENU_WIDTH = $("ul.jd_menu").outerWidth();
            var ctoggle = function(direction, display) {
                return function() {
                    var self = this, ul = $("ul", this);
                    if (ul.css("display") == display&&!self["block" + direction]) {
                        self["block" + direction] = true;
                        ul["slide" + direction](DELAY, function() {
                            self["block" + direction] = false
                        })
                    }
                }
            };
            var setDropDownPositions = function(_ul) {
                var _li = _ul.parent(), _id = _li.attr("id"), _menuWidth = parseInt(_ul.find("> li").css("width")), _menuLength = _ul.find("> li").length, _coordinates = {
                    left: 0,
                    top: 0
                }, x = _li.offset().left - _li.parent().offset().left - (((_menuWidth * _menuLength) - _li.outerWidth() + (_menuLength * 6)) / 2), y = _li.outerHeight();
                _ul.css(_coordinates);
                if (x < 0 || _id == "li_homepage") {
                    _coordinates = {
                        left: 0,
                        top: y + "px"
                    }
                } else {
                    if (x + _ul.outerWidth() > MENU_WIDTH) {
                        _coordinates = {
                            right: 0,
                            top: y + "px"
                        }
                    } else {
                        _coordinates = {
                            left: x + "px",
                            top: y + "px"
                        }
                    }
                }
                _ul.css({
                    left: ""
                });
                _ul.css(_coordinates)
            };
            $("ul.jd_menu > li").hover(ctoggle("Down", "none"), ctoggle("Up", "block"));
            $("ul.jd_menu > li > ul").show().css("visibility", "none");
            $("ul.jd_menu > li > ul").each(function(i, elem) {
                setDropDownPositions($(elem))
            });
            $("ul.jd_menu > li > ul").css("visibility", "visible").hide();
            $("ul.jd_menu a").unbind("click").bind("click", function(event) {
                huff.emit("topnav/click", event)
            });
            return 
        })
    };
    u.evalScript = function(text) {
        if (!text ||!(/\S/.test(text))||-1 === text.indexOf("<script")) {
            return 
        }
        var head = document.getElementsByTagName("head")[0] || document.documentElement, script = document.createElement("script"), root = document.documentElement, start_pos = 0, script_found_at, script_end_at, id = Dom.generateId().replace("-", "");
        script.type = "text/javascript";
        if (null === HpSupport.script_eval) {
            try {
                script.appendChild(document.createTextNode("window." + id + "=1;"))
            } catch (e) {}
            root.insertBefore(script, root.firstChild);
            if (window[id]) {
                HpSupport.script_eval = true;
                delete window[id]
            } else {
                HpSupport.script_eval = false
            }
        }
        text = text.replace(/document\.write/g, "");
        while ( - 1 !== (script_found_at = text.indexOf("<script", start_pos))) {
            script = document.createElement("script");
            script.type = "text/javascript";
            var script_found_at_backup = script_found_at;
            script_found_at = text.indexOf(">", script_found_at + 1);
            script_ends_at = start_pos = text.indexOf("<\/script>", script_found_at + 1);
            var script_text = text.substr(script_found_at + 1, script_ends_at - script_found_at - 1);
            var script_src = false;
            if (script_text.replace(/(^\s+|\s+$)/, "").length == 0) {
                var src_found_at = text.indexOf("src=", script_found_at_backup + 1);
                if ( - 1 === src_found_at) {
                    return 
                }
                var src_ends_at = text.indexOf(text.charAt(src_found_at + 4), src_found_at + 5);
                script_src = text.substr(src_found_at + 5, src_ends_at - src_found_at - 5);
                script.src = script_src
            } else {
                if (HpSupport.script_eval) {
                    script.appendChild(document.createTextNode(script_text))
                } else {
                    script.text = script_text
                }
            }
            head.insertBefore(script, head.firstChild);
            if (false === script_src) {
                head.removeChild(script)
            }
        }
    };
    u.sharePollOnFacebook = function(poll_id, poll_question) {
        var feedData = {
            name: "Take the poll - " + poll_question.replace(/&\w*;/g, " "),
            caption: "{*actor*} voted: " + HPUtil.vote_results_text[poll_id].replace(/&\w*;/g, " "),
            href: location.href
        };
        HPFB.waitForSession(function() {
            HPFB.streamPublish("", feedData)
        })
    };
    u.voteOnPoll = function(pollId) {
        form = document.getElementById("poll_form_" + pollId);
        var requestUrl = "/polls/add_stats.php?pid=" + pollId;
        var checked = false, show_facebook = false, me = HPUtil;
        for (var i = 0; i < form.elements.length; i++) {
            if (form.elements[i].checked) {
                requestUrl += "&responses[]=" + form.elements[i].value;
                if (false === checked && document.getElementById("poll_" + pollId + "_" + form.elements[i].value)) {
                    me.vote_results_text[pollId] = document.getElementById("poll_" + pollId + "_" + form.elements[i].value).innerHTML;
                    show_facebook = true
                }
                checked = true
            }
        }
        if (checked) {
            C.asyncRequest("GET", requestUrl, {
                success: function(transport) {
                    if ("DB Error" == transport.responseText) {
                        return 
                    }
                    var response_data = JSON.parse(transport.responseText);
                    document.getElementById("poll_" + pollId).innerHTML = response_data.html;
                    if (response_data.last_insert_id) {
                        me.vote_results[pollId] = response_data.last_insert_id;
                        if (HuffCookies.getUserName() && me.vote_results[pollId] && HPUtil.GetEntryID()) {
                            SNProject.track(me.vote_results[pollId], "poll_vote", HPUtil.GetEntryID())
                        }
                    }
                    if (show_facebook) {
                        document.getElementById("fb_share_poll_results_button").style.display = "block"
                    }
                },
                failure: function(transport) {
                    alert(transport.statusText)
                }
            })
        } else {
            alert(_("There are no selected poll results"))
        }
    };
    u.updateEntriesComments = function() {
        if (0 == HuffPoUtil.entry_comments_for_ajax.length) {
            return 
        }
        var comments_ids_string = JSON.stringify(HuffPoUtil.entry_comments_for_ajax);
        C.asyncRequest("GET", "/commentsv3/ajax/get_number_comments_by_entries.php?entry_ids=" + comments_ids_string, {
            success: function(transport) {
                var response = JSON.parse(transport.responseText);
                if ("object" !== typeof(response)) {
                    return 
                }
                var changed_els = [], all_entries = [];
                for (var entry_id in response) {
                    if (Dom.get("comment_count_" + entry_id)) {
                        changed_els[changed_els.length] = "comment_count_" + entry_id;
                        Dom.get("comment_count_" + entry_id).innerHTML = response[entry_id]
                    }
                    if (Dom.get("comment_count1_" + entry_id)) {
                        changed_els[changed_els.length] = "comment_count1_" + entry_id;
                        Dom.get("comment_count1_" + entry_id).innerHTML = response[entry_id]
                    }
                    all_entries = Dom.getElementsByClassName("comment_count_" + entry_id);
                    for (var j = 0; j < all_entries.length; ++j) {
                        changed_els[changed_els.length] = all_entries[j];
                        all_entries[j].innerHTML = response[entry_id]
                    }
                }
                HPUtil.AnimRequestFinished(changed_els)
            },
            failure: function(transport) {}
        })
    };
    u.fadeOutfadeInContent = function(target, msg, callback, duration) {
        var node = typeof(target) == "string" ? document.getElementById(target): target;
        duration = duration || 0.5;
        var fadeOut = new YAHOO.util.Anim(node, {
            opacity: {
                to: 0
            }
        }, duration);
        var fadeIn = function(type, args) {
            node.innerHTML = msg;
            var fadeIn = new YAHOO.util.Anim(node, {
                opacity: {
                    to: 1
                }
            }, duration);
            if (callback) {
                fadeIn.onComplete.subscribe(callback)
            }
            fadeIn.animate()
        };
        fadeOut.onComplete.subscribe(fadeIn);
        fadeOut.animate()
    };
    u.addCSSFile = function(cssFile) {
        if (document.createStyleSheet) {
            document.createStyleSheet(HPUtil.getHostName() + "/css/v/" + cssFile)
        } else {
            var head = document.getElementsByTagName("head")[0];
            var link = document.createElement("link");
            link.setAttribute("rel", "stylesheet");
            link.setAttribute("href", "/css/v/" + cssFile);
            head.appendChild(link)
        }
    };
    u.renderVideo = function(id) {
        var color_pallet = HPConfig.current_vertical_color.replace("#", "");
        var color_controls = HPConfig.current_vertical_color_light.replace("#", "");
        var url = "http://embed.5min.com/" + id + "/&sid=577&colorPallet=%23" + color_pallet + "&videoControlDisplayColor=%23" + color_controls;
        if ("undefined" != typeof(swfobject)) {
            document.write('<div class="video_player_wrapper"><div id="video_player_wrapper_' + id + '"></div></div>');
            swfobject.embedSWF(url, "video_player_wrapper_" + id, "550", "512", "9.0.0")
        } else {
            var code = '<div class="video_player_wrapper">                <object width="550" height="512" id="FiveminPlayer" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000">                <param name="allowfullscreen" value="true"/>                <param name="allowScriptAccess" value="always"/>                <param name="movie" value="' + url + '"/>                <embed name="FiveminPlayer" src="' + url + '" type="application/x-shockwave-flash" width="550" height="512" allowfullscreen="true" allowScriptAccess="always"></embed>                </object>            </div>';
            document.write(code)
        }
    };
    u.cleanupCookies = function() {
        var track_module = "CoreTech";
        var track_action = "CookieCleanup";
        var cookies_to_remove = Array("nineEleven", "nineEleven2", "nineEleven3", "huffpost_influence_null", "fb_uid", "fb_access_token");
        if (huff.beta || location.search.indexOf("debug") > 0) {
            console.log("running cookie clean-up ...")
        }
        var all_cookies = document.cookie.split(";");
        var patt = /\d+/;
        for (var i = 0; i < all_cookies.length; i++) {
            var check_cookie = all_cookies[i];
            if (/huffpost_influence/.test(all_cookies[i])) {
                var match = check_cookie.match(patt);
                if (match && match[0] && HuffCookies && match[0] != HuffCookies.getUserId()) {
                    remove_influence = "huffpost_influence_" + match[0];
                    cookies_to_remove.push(remove_influence)
                }
            }
        }
        huff.use("conf", function(c) {
            c.get("cookie/domain", function(cookie_domain) {
                var domain = cookie_domain || HuffCookies.domainCookie();
                for (var id in cookies_to_remove) {
                    var cookie_to_remove = cookies_to_remove[id];
                    if (HuffCookies.get(cookie_to_remove)) {
                        HuffCookies.del(cookie_to_remove, "/", domain);
                        HuffCookies.del(cookie_to_remove, "/", "www." + domain);
                        if (/main.aol.com/.test(window.location.host)) {
                            HuffCookies.del(cookie_to_remove, "/", ".main.aol.com")
                        }
                        if (HPTrack) {
                            if (/huffpost_influence/.test(cookie_to_remove)) {
                                HPTrack.trackEvent(track_module, track_action, "huffpost_influence_")
                            } else {
                                HPTrack.trackEvent(track_module, track_action, cookie_to_remove)
                            }
                        }
                    }
                }
            })
        })
    };
    u.migrateCookies = function() {
        var HC = HuffCookies || false;
        if (!HC) {
            return 
        }
        var move_cookies = ["huffpost_user_guid", "huffpost_user_id", "huffpost_user", "huffpost_pass", "huffpost_photo_mode", "huffpost_prefs", "huffpost_levels", "huffpost_s", "last_login_username", "br_fp", "huffpo_type_views", "tmp_date_registered", "snn_version", "fb_uid", "fb_access_token", "disable_xd"];
        if (HC.getUserId()) {
            move_cookies.push("huffpost_influence_" + HC.getUserId())
        }
        var indicator_cookie = "huffpost_cookies_moved";
        if (/aol.com/.test(window.location.host)&&!HC.getCookie(indicator_cookie)) {
            for (var i = 0; i < move_cookies.length; i++) {
                var cookie_name = move_cookies[i];
                var cookie_val = HC.getCookie(cookie_name);
                if (cookie_val) {
                    HC.destroyCookie(cookie_name);
                    HC.del(cookie_name, "/", ".aol.com");
                    HC.setCookie(cookie_name, cookie_val);
                    if (HPTrack) {
                        HPTrack.trackEvent("CoreTech", "CookieMigration", "TotalCookiesMoved", cookie_name)
                    }
                }
            }
            HC.setCookie(indicator_cookie, "1")
        }
        return 
    };
    u.bitlyUrl = function(url, cb) {
        if (!url) {
            return false
        }
        u.cache = u.cache || {};
        u.callbacks = u.callbacks || {};
        u.callbacks[url] = u.callbacks[url] || [];
        var scope = u, callback = function(data) {
            typeof cb === "function" && cb(data);
            typeof cb === "string" && typeof window[cb] === "function" && window[cb](data);
            typeof cb === "string" && typeof window[cb] === "undefined" && eval(cb)(data);
            return true
        }, run_cbs = function(long_url, short_url) {
            var cb;
            while (cb = scope.callbacks[long_url].shift()) {
                cb(short_url)
            }
        };
        u.callbacks[url].push(callback);
        if (u.cache.hasOwnProperty(url)) {
            return run_cbs(url, u.cache[url])
        }
        var options = {
            login: HPConfig.bit_ly_key.user_name,
            apiKey: HPConfig.bit_ly_key.user_key,
            longUrl: url
        };
        u.callbacks[url].length === 1 && jQuery.getJSON("http://api.bit.ly/v3/shorten?callback=?", options, function(resp) {
            scope.cache[url] = resp.data.url;
            run_cbs(url, resp.data.url)
        })
    };
    u.loadIframe = function() {
        var frame_params = arguments[0] || false;
        if (!frame_params || "object" !== typeof frame_params) {
            return 
        }
        var src = frame_params.src || "";
        var id = frame_params.id || "hp_frame_" + new Date().getTime();
        var name = frame_params.name || false;
        var callback = frame_params.callback || false;
        var style = "position: absolute; top: -9999em; width: 10px; height: 10px; visibility: hidden;";
        if (jQuery("#" + id).length) {
            if ("function" === typeof callback) {
                callback()
            }
            return 
        }
        jQuery("<iframe />", {
            name: name,
            id: id,
            src: src,
            style: style
        }).prependTo("body").load(function() {
            if ("function" === typeof callback) {
                callback()
            }
            jQuery(this).unbind("load")
        });
        return 
    };
    ready(u)
});

/* From: production-mt-wfe-52-18-use1 : 16147 */
/* a67cccb80cc3039a0690e1b0fd4d00024bd9b3fa */
