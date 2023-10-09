if (typeof console != "object") {
    console = {};
    console.log = function() {};
    console.warn = function() {};
    console.error = function() {};
    console.info = function() {}
}
var disablePlaylistPlusButon = "false";
function highlight(a, b) {
    $j("#" + a).css("backgroundColor", "#FFFF00");
    $j("#" + a).animate({
        backgroundColor: "#FFFFFF"
    }, 2000, b)
}
function scrollToElement(a, e) {
    var d = $j(document).scrollTop();
    var c = $j(a).offset().top;
    for (var b = d; b < c; b += e) {
        $j(document).scrollTop(b)
    }
}
function scrollToElementSmooth(a, b) {
    $j("html, body").animate({
        scrollTop: $j(a).offset().top
    }, b)
}
function addFavorite(b) {
    var a = function() {
        $j(".favorite-main-icon").addClass("favorite-main-icon-selected")
    };
    if ($j("#selected-option").hasClass("btn-favorited")) {
        a();
        $j("#favoriteWrapperButton").addClass("active")
    }
}
addFavorite();
function removeProfileItem(d, a, c, e, b, f) {
    $j.post(d, {
        vkey: a,
        key: c,
        hash: e
    }, function(j) {
        var i = $j("#" + b).parent();
        var g = $j("#" + b).closest("div.videos_wrapper").data("rel");
        var h = parseInt($j("#" + g).html());
        $j("#" + b).remove();
        if (j) {
            i.html(i.html().replace(/<div\s+class\s*=\s*"clear"\s*>\s*<\/div>/g, "")).append(j + '<br class="clear"/>')
        }
        $j("#" + g).html(--h)
    })
}
function removeItem(b, d, a, c) {
    $j.post(b, {
        id: d
    }, function(f) {
        var e = $j("#" + a).parent();
        $j("#" + a).remove();
        decNums(c, true)
    })
}
function calculateAdHeight() {
    var a = $j(".wrap").height(), f = $j(".home-ad-container"), b = $j("#videoPlaylist"), e = Math.round(b.offset().top), d = Math.round(f.offset().top), c = e + a - d + 7;
    $j(".home-ad-container").css("height", c)
}
var $flagClick = 0, $showBtnWrap = $j("div.show-btn-wrap"), $showLess = $j("div.show-less");
$showBtnWrap.mouseenter(function() {
    if ($flagClick == 0) {
        $showLess.addClass("active")
    }
}).mouseleave(function() {
    if ($flagClick == 0) {
        $showLess.removeClass("active")
    }
});
function checkFlagShowMoreButton(a) {
    if ($flagClick == 1) {
        a.addClass("active")
    } else {
        a.removeClass("active")
    }
}
function showBtnWrap(a) {
    var b = $j(a).children(".show-less");
    if (b.text() == showmoreText) {
        $j(".showless").show();
        b.children().text(b.text() == showmoreText ? showlessText : showmoreText);
        $flagClick = 1
    } else {
        $j(".showless").hide();
        b.children().text(b.text() == showmoreText ? showlessText : showmoreText);
        $flagClick = 0
    }
    checkFlagShowMoreButton(b, $flagClick)
}
function decNums(d, a) {
    if ($j(d).length == 0) {
        return 
    }
    if (a == null) {
        a = false
    }
    var c = /(Showing\s)([0-9]+)(\sof\s)([0-9]+)(.*)/.exec($j("#" + d).html());
    $j("#" + d).html("" + c[1] + (a ? c[2] - 1 : c[2]) + c[3] + (c[4] - 1) + c[5])
}
function incNums(d, a) {
    if ($j(d).length == 0) {
        return 
    }
    if (a == null) {
        a = false
    }
    var c = /(Showing\s)([0-9]+)(\sof\s)([0-9]+)(.*)/.exec($j("#" + d).html());
    $j("#" + d).html("" + c[1] + (a ? c[2] + 1 : c[2]) + c[3] + (c[4] + 1) + c[5])
}
function showMoreLess(c, a, b) {
    if ($j("#" + c + "_link").html() == a) {
        $j("#" + c).css({
            visibility: "visible",
            display: "inline"
        });
        $j("#" + c + "_link").html(b)
    } else {
        $j("#" + c).css({
            visibility: "hidden",
            display: "none"
        });
        $j("#" + c + "_link").html(a)
    }
}
function positionBadges() {
    $j(".user-flag:not(.large-avatar) span.flag").each(function() {
        $j(this).position({
            my: "left-7 top-17",
            at: "left bottom",
            collision: "none none",
            of: $j(this).parents(".user-flag").find(".avatar")
        })
    });
    $j(".usr-box-cont a span.flag").css({
        top: "106px",
        left: "-5px"
    })
}(function(c) {
    var a = {};
    var b = {
        set: function(e, f, d) {
            c.extend(a, typeof d == "object" ? d : {});
            if (typeof f == null || typeof f == "undefined") {
                a.expires =- 1
            } else {
                if (typeof a.expires == "number") {
                    a.expires = new Date();
                    a.expires.setDate(a.expires.getDate() + d.expires)
                }
            }
            return (document.cookie = [encodeURIComponent(e), "=", a.raw ? f: encodeURIComponent(f), a.expires ? "; expires=" + a.expires.toUTCString(): "", a.path ? "; path=" + a.path: "", a.domain ? "; domain=" + a.domain: "", a.secure ? "; secure": ""].join(""))
        },
        get: function(e, d) {
            c.extend(a, typeof d == "object" ? d : {});
            var f = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie);
            return f ? (a.raw ? f[1] : decodeURIComponent(f[1])) : null
        }
    }
})(jQuery);
(function(a) {
    a.fn.limit = function(b) {
        var c = {
            limit: 200
        };
        var b = a.extend(c, b);
        return this.each(function() {
            var d = b.limit;
            a(this).keyup(function() {
                if (a(this).val().length > d) {
                    a(this).val(a(this).val().substr(0, d))
                }
            })
        })
    }
})(jQuery);
function Flagger(a) {
    this.initialize = function(b) {
        this.object_id = b.object_id;
        this.submit_url = b.submit_url;
        this.num_types = b.num_types;
        this.button = b.button;
        this.feedback_box = b.feedback_box;
        this.object_name = b.object_name;
        this.on_complete = b.on_complete;
        this.is_producer = b.is_producer
    };
    this.send = function() {
        var d = this;
        var c = 0;
        for (var b = 1; b <= this.num_types; b++) {
            if ($j("#flag_" + b).prop("checked")) {
                c = b;
                break
            }
        }
        if (this.is_producer == undefined && ($j("#flag_" + c).val() == "copyright" || $j("#flag_" + c).val() == "copy")) {
            alert("Please send any copyright reports to copyright@pornhub.com. Thank you.");
            return 
        }
        if (c == 0) {
            this.feedback_box.html("Please Select a Reason")
        } else {
            this.button.disabled = "disabled";
            this.feedback_box.html("Posting...");
            $j.ajax({
                url: this.submit_url,
                type: "post",
                data: {
                    id: this.object_id,
                    reason: $j("#flag_reason").val(),
                    checked: c
                },
                complete: function() {
                    d.feedback_box.html("Flagged successfully!");
                    setTimeout(d.object_name + ".feedback_box.innerHTML = ''; " + d.object_name + ".button.disabled = '';", 3000);
                    d.on_complete();
                    $j("#object_flag").text("Flagged photo").removeAttr("onclick").addClass("flagged")
                }
            })
        }
    };
    this.initialize(a)
}
var lightboxCSS = null, lightboxContent = null, lightboxBackground = null;
var lightbox = {
    show: function(b, a, c, d) {
        lightboxCSS = {
            display: "block",
            width: a + "px",
            left: "50%",
            "margin-left": "-" + a / 2 + "px",
            height: (c > 0 ? c + "px" : "auto")
        }, $j.ajax({
            type: "POST",
            dataType: "html",
            url: b,
            success: function(f, e) {
                lightboxContent.html(f).css(lightboxCSS);
                recalcLightbox();
                lightboxBackground.css({
                    display: "block"
                });
                lightboxBackground.show()
            }
        })
    },
    hide: function() {
        lightboxContent.hide();
        lightboxBackground.hide()
    }
};
var currentWidth = $j(document).width();
var currentLeft = $j(document).scrollLeft();
function recalcLightbox(a, b) {
    if (currentWidth != $j(document).width() || currentLeft != $j(document).scrollLeft()) {
        currentWidth = $j(document).width();
        currentLeft = $j(document).scrollLeft();
        if ($j("div.lightbox_content")[0] && $j("div.lightbox_content").is(":visible")) {
            lightboxContent.css({
                left: "50%",
                "margin-left": "-" + a / 2 + "px"
            })
        }
    }
}
function fixPs3() {
    if (navigator.userAgent && navigator.userAgent.match(/PLAYSTATION/)) {
        document.getElementById("search_value").style.height = "20px";
        document.getElementById("search_value").style.backgroundImage = "none";
        document.getElementById("search_value").style.backgroundColor = "white";
        document.getElementById("search_value").style.width = "151px"
    }
}
function getCookie(b) {
    var c, a, e, d = document.cookie.split(";");
    for (c = 0; c < d.length; c++) {
        a = d[c].substr(0, d[c].indexOf("="));
        e = d[c].substr(d[c].indexOf("=") + 1);
        a = a.replace(/^\s+|\s+$/g, "");
        if (a == b) {
            return unescape(e)
        }
    }
}
function setCookie(a, d, b) {
    var e = new Date();
    e.setDate(e.getDate() + b);
    var c = escape(d) + ((b == null) ? "" : "; expires=" + e.toUTCString());
    document.cookie = a + "=" + c
}
function block(a, e, c, b, d) {
    $j.post(a + "?block=" + c + "&id=" + e + "&layout=off&token=" + b + "&update=" + d, function(f) {
        if (d) {
            if (document.getElementById(d)) {
                document.getElementById(d).innerHTML = f;
                document.getElementById(d).childNodes[0].className = "greyButton big"
            } else {
                jQuery("span." + d).html(f)
            }
        } else {
            window.location.reload()
        }
    })
}
function getUrlAndRefresh(b, a) {
    $j.get(b, {
        time: $j.now()
    }, function(c) {
        location.reload()
    })
}
function builtModal(f, c, e, b, a) {
    modal.show("friendRequestModal");
    var d = $j("#messageRequest");
    $j("#preventClick").attr("data-user-id", f);
    $j("#friendRequestForm").attr("action", a);
    $j("#fromPic").attr("src", c);
    d.val(d.attr("data-val"));
    $j("#friendRequestUserId").text(f);
    $j("#friendRequestModal .last").html('You are about to add <a href="' + b + '"> ' + e + ' </a> as a friend. We will then notify <a href="' + b + '"> ' + e + " </a> who will then confirm that you are friends.")
}
if (isLogged) {
    function formSubmit() {
        var c = $j(".request-modal .darkGrey").html();
        var a = $j("#preventClick"), b = a.attr("data-user-id");
        $j.ajax({
            url: $j("#friendRequestForm").attr("action"),
            data: $j("#friendRequestForm").serialize(),
            type: "POST",
            dataType: "JSON",
            beforeSend: function() {
                $j(".friend_" + b).find("button").children().addClass("visuallyHidden");
                $j(".friend_" + b).find("button").append('<span class="spinner" />')
            },
            success: function(d) {
                modal.hide();
                $j(".friend_" + b).find("button").children().removeClass("visuallyHidden");
                $j(".friend_" + b).find("button").find(".spinner").remove();
                if (d.success == "SENT") {
                    $j(".friend_" + b).find("button").attr("data-friends", 1);
                    $j(".friend_" + b).removeClass("removeFriend add").addClass("sent");
                    if (d.subscribed) {
                        $j(".subscribe_" + b).find("button").attr("data-subscribed", 1);
                        $j(".subscribe_" + b).removeClass("subscribe").addClass("unsubscribe");
                        $j(".subscribe_" + b).find(".buttonLabel").text("Subscribed")
                    }
                    $j(".friend_" + b).find(".buttonLabel").text(d.text_initial)
                }
            }
        })
    }
}
function recal() {
    var a = 1000 - $j("#messageRequest").val().length;
    $j("#chars_left").html(Math.max(a, 0) + " characters left.");
    if (a < 0) {
        $j("#chars_left").append(' <span style = "color: #F00">You have over 1000 characters.<br />Anything past 1000 will get chopped off.</span>')
    }
}
$j(document).ready(function(c) {
    $j("#moreData").on("click", ".js-streamMenu", function() {
        $j(this).next().toggle()
    });
    $j("#moreData").on("click", ".actionButtons li", function() {
        $j(this).closest("ul").hide()
    });
    $j("body").on("click", "#preventClick", function(d) {
        $j(this).attr("disabled", "disabled");
        if ($j("#messageRequest").val() == "Add a personal message (optional)...") {
            $j("#messageRequest").val(" ")
        }
        formSubmit()
    });
    $j("ul#curentItemCategory li").on("click", function() {
        $j.cookie("currentCategory", $j(this).data("category"))
    });
    var a = $j("#menuItem3 > a, .categoryDefault").attr("href");
    switch ($j.cookie("currentCategory")) {
    case"al":
        a = a + "?o=al";
        $j("#menuItem3 > a, .categoryDefault").attr("href", a);
        break;
    case"mv":
        a = a + "?o=mv";
        $j("#menuItem3 > a, .categoryDefault").attr("href", a);
        break;
    case"mp":
        a = a;
        $j("#menuItem3 > a, .categoryDefault").attr("href", a);
        break
    }
    makeDropdown(".mainFilter");
    $j("body").on("click", "a:contains('Show More'), button:contains('Show More')", function() {
        var d = $j($j(this).find("span"));
        if (d.length == 1 && d.text() == "Show More") {
            d.text("Show Less")
        } else {
            $j(this).text("Show Less")
        }
    });
    $j("body").on("click", "a:contains('Show Less'), button:contains('Show Less')", function() {
        var d = $j($j(this).find("span"));
        if (d.length == 1 && d.text() == "Show Less") {
            d.text("Show More")
        } else {
            $j(this).text("Show More")
        }
    });
    if (!(BrowserDetect.browser == "Explorer" && BrowserDetect.version < 8)) {
        avatarLoad()
    }
    switch (BrowserDetect.browser) {
    case"Opera":
        $j("html").addClass("opera");
        break;
    case"Safari":
        $j("html").addClass("safari");
        break;
    case"Firefox":
        $j("html").addClass("firefox");
        break;
    case"Chrome":
        $j("html").addClass("chrome");
        break;
    case"Explorer":
        $j("html").addClass("ie");
        break
    }
    var b=!!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
    if (b) {
        $j("html").addClass("ie11")
    }
    if (navigator.platform == "Win32") {
        $j("html").addClass("windows")
    } else {
        if (navigator.platform == "MacIntel") {
            $j("html").addClass("osx")
        }
    }
    lightboxContent = $j("div.lightbox_content");
    lightboxBackground = $j("div.lightbox_background");
    if (lightboxContent[0]) {
        lightboxBackground.css("opacity", 0.5).click(lightbox.hide);
        $j(window).resize(recalcLightbox).scroll(recalcLightbox)
    }
    $j(".dropDownContainer").mouseenter(function() {
        $j(this).children("div.ddBox").show()
    }).mouseleave(function() {
        $j(this).children("div.ddBox").hide()
    });
    if (BrowserDetect.browser == "Explorer" && BrowserDetect.version == 10) {
        $j("html").addClass("ie10")
    }
    $j(".showSubMenu").click(function() {
        var d = $j(this).attr("data-show");
        $j("." + d).toggle();
        $j("." + d).parent(".slimScrollDiv").toggle();
        if (!($j("#scrollbar_sidebar").is(":visible") && d == "showCategory")) {
            $j("." + d).next("div").toggle()
        }
        $j("span.plusMinus").toggleClass("minusState");
        if ($j("span.plusMinus").hasClass("minusState")) {
            $j("span.plusMinus").text("-")
        } else {
            $j("span.plusMinus").text("+")
        }
    });
    if ($j(".section_bar_sidebar").length > 0) {
        $j(".section_bar_sidebar").first().css("border-radius", "7px 7px 0 0");
        $j(".sidebar_wrapper").last().css("border-radius", "0 0 7px 7px")
    }
    $j(document).on("focus", "textarea[data-val], input[data-val]", function() {
        if ($j(this).attr("data-val") == $j(this).val()) {
            $j(this).val("")
        }
    });
    $j(document).on("blur", "textarea[data-val], input[data-val]", function() {
        if ($j(this).val() == "") {
            $j(this).val($j(this).attr("data-val"))
        }
    });
    $j("textarea[data-val], input[data-val]").each(function(d, e) {
        e = $j(e);
        if (e.val() == "") {
            e.val(e.attr("data-val"))
        }
    });
    $j("textarea[data-val]:focus, input[data-val]:focus").val("");
    $j(".shareTrig").on("click", addShareExternal);
    $j(".shareIcons").find("a").click(function(g) {
        g.preventDefault();
        var f, d;
        f = Math.floor(((screen.availWidth || 1024) - 640) / 2), d = Math.floor(((screen.availHeight || 700) - 320) / 2);
        window.open($j(this).attr("href"), "social", "width=640,height=320,left=" + f + ",top=" + d + ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1")
    })
});
var plusButton;
(function(d) {
    var a = {
        namespace: "flipbook",
        delay: 600
    };
    var c = {
        inProgress: false,
        timer: false
    };
    var b = {
        init: function(e) {
            if (e) {
                d.extend(a, e)
            }
            return this.each(function() {
                var f = d(this);
                f.data("indexes." + a.namespace, a.indexes);
                f.data("path." + a.namespace, a.path);
                f.bind("mouseover." + a.namespace, b.mouseover);
                f.bind("mouseout." + a.namespace, b.mouseout)
            })
        },
        destroy: function() {
            this.each(function() {
                d(this).unbind("." + a.namespace)
            })
        },
        mouseover: function() {
            var e = d(this);
            c.inProgress = e;
            e.data("original." + a.namespace, e.attr("src"));
            b.flip();
            return true
        },
        mouseout: function() {
            var e = c.inProgress;
            if (!e) {
                return false
            }
            clearInterval(c.timer);
            c.timer = false;
            e.data("position." + a.namespace, 0);
            e.attr("src", e.data("original." + a.namespace));
            e = false;
            return true
        },
        flip: function() {
            var i = c.inProgress;
            if (!i) {
                return false
            }
            var h = i.data("path." + a.namespace);
            var g = i.data("indexes." + a.namespace);
            var f = g.length - 1;
            var e = i.data("position." + a.namespace);
            e = e > 0 && e <= f ? e : 0;
            if (!h ||!g ||!f) {
                return i
            }
            i.attr("src", h.replace("{index}", g[e]));
            i.data("position." + a.namespace, ++e);
            if (!c.timer) {
                c.timer = setInterval(b.flip, a.delay)
            }
            return i
        },
        click: function(g) {
            var f = d.fn.flipBook.inProgress;
            if (!f) {
                return false
            }
            clearInterval(d.fn.flipBook.timer);
            d.fn.flipBook.timer = false;
            f.data("position." + a.namespace, 0);
            f = false;
            return true
        }
    };
    d.fn.flipBook = function(e) {
        if (b[e]) {
            return b[e].apply(this)
        } else {
            if (typeof e === "object" ||!e) {
                return b.init.apply(this, arguments)
            } else {
                return this
            }
        }
    }
})(jQuery);
var modal = {
    templates: new Object,
    hideTimeout: - 1,
    show: function(d, f, e) {
        var c = $j("#" + d), b = $j("<div/>").attr("class", "modalContainer").hide(), a = $j("body");
        if (typeof modal.templates[d] == "undefined") {
            modal.templates[d] = c.html()
        } else {
            c.html(modal.templates[d])
        }
        c.prependTo(b).addClass("modalElement").show();
        $j("<div/>").attr("class", "modalBackground").prependTo(b);
        if ($j(".modalContainer").length > 0) {
            b.css("z-index", Math.max.apply(null, $j(".modalContainer").map(function() {
                return parseInt($j(this).css("z-index"))
            }).get()) + 1)
        }
        a.prepend(b);
        b.fadeIn({
            duration: 400,
            queue: false,
            complete: e
        });
        if (f > 0) {
            modal.hideTimeout = setTimeout(function() {
                modal.hide()
            }, f)
        }
        if (d == "create-playlist-modal") {
            $j("#new-playlist-description").limit({
                limit: 1000
            })
        }
    },
    hide: function(c) {
        if (modal.hideTimeout > 0) {
            clearTimeout(modal.hideTimeout);
            modal.hideTimeout =- 1
        }
        var b;
        if ($j(".modalContainer").length == 1) {
            b = $j(".modalContainer")
        } else {
            if ($j(".modalContainer").length > 1) {
                var a = $j(c);
                if (a.length == 1) {
                    b = a.parents(".modalContainer")
                } else {
                    b = $j(".modalContainer").first()
                }
            }
        }
        if (b && b.length > 0) {
            b.fadeOut({
                duration: 400,
                queue: false,
                complete: function() {
                    $j(this).find(".modalElement").removeClass("modalElement").hide().prependTo("body");
                    $j(this).remove()
                }
            })
        }
        $j(".error").css("display", "none")
    }
};
$j(document).on("keyup", function(a) {
    if (a.keyCode == 27 && $j(".modalContainer").length > 0) {
        modal.hide()
    }
});
$j(document).on("click", ".modalBackground", function() {
    modal.hide(this)
});
$j(document).on("click", ".modal-close", function(a) {
    modal.hide(a.target)
});
function mg_playerEvent(a) {
    if (a === "onSeek") {
        htTrack.ptrack()
    }
}
function bubble_show(b, a) {
    if ($j("body .feedRight").hasClass("streamVideos")) {
        $j("#" + a + " .embedLink").toggle()
    } else {
        $j(".embedLink").toggle()
    }
    $j("#selectable, .sectectable").mouseup(function(c) {
        c.preventDefault()
    });
    $j("#selectable, .selectable").select();
    if ($j(".embedLink").is(":visible") == true || $j("").is("div.embedLink")) {
        $j("body").bind("click.close", function(c) {
            if (!$j(c.target).is("object")&&!$j(c.target).is("div.embedLink,#selectable,.selectable")) {
                bubble_hide()
            }
        })
    }
}
function bubble_hide() {
    $j(".embedLink").hide();
    $j(document).unbind("click.close")
}
$j(".modalCloseBubble, .copyToClipBoard").click(function() {
    bubble_hide()
});
var externalShareScriptLoadedInterval = null;
function modal_show(a) {
    bubble_hide();
    $j("#emailFriend").children().removeClass("modalInputError");
    $j(".shareTrig").trigger("click");
    openEmailShare = setInterval($j(".video-actions-sub-menu").find('div[data-tab="email"]').click(), 100);
    clearInterval(openEmailShare)
}
function getUrlVars() {
    var b = {};
    var a = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(c, d, e) {
        b[d] = e
    });
    return b
}
var modelNotificationList = $j("#modelNotificationList").html(), cacheAjaxNotif = [], scrollFuncDefined = 0, offset = [5, 5, 5], limit = 5, scrollLimit = [0, 0, 0];
function createMailAlert(c) {
    if (!c.lastMessageIdReceived&&!c.lastMessageSent) {
        return 
    }
    if (c.lastAction == "0000-00-00 00:00:00") {
        return 
    }
    if (c.profileSpammer) {
        return 
    }
    var a = "";
    if (c.lastMessageIdReceived && c.lastMessageIdSent > c.lastMessageIdReceived) {
        a = c.lastMessageSent
    } else {
        if (c.lastMessageIdReceived) {
            a = c.lastMessageReceived
        } else {
            if (c.lastMessageIdSent) {
                a = c.lastMessageSent
            }
        }
    }
    var b = $j("ul#modelNotificationList > li.messageTemplate").clone().removeClass("messageTemplate");
    b.insertAfter("ul#modelNotificationList > li:last");
    b.addClass(c.status);
    b.find("a.wrapperLink").attr("href", c.link);
    b.find("img").attr("src", c.profileImage);
    b.find(".from").text(c.profileUsername);
    b.find(".message").text(a);
    b.find(".date").text(c.lastActionNice);
    b.show()
}
function createfriendRequestAlert(g, f, c, k, e, j, i) {
    var a = "manageRequest(" + j + ", 1, '" + f + "', '" + c + "')", d = "manageRequest(" + j + ", 0, '" + f + "', '" + c + "')", b = $j("autoSubscribe_" + j).prop("checked") || i ? "checked": "unchecked";
    var h = $j("ul#modelNotificationList > li.friendRequestTemplate").clone().removeClass("friendRequestTemplate");
    h.insertAfter("ul#modelNotificationList > li:last");
    h.attr("id", "request_" + j);
    h.find("img").attr("src", g);
    h.find(".from a").attr("href", c).text(f);
    h.find(".message").text(k);
    h.find(".date").text(e);
    h.find("button.confirm").attr("onclick", a);
    h.find("button.reject").attr("onclick", d);
    h.find('.subscribeConfirm input[type="checkbox"]').attr("id", "autoSubscribe_" + j).attr(b, b);
    h.find(".subscribeConfirm label").attr("for", h.find('input[type="checkbox"]').attr("id"));
    if (i) {
        h.find(".subscribeConfirm .fakeCheckBox ").addClass("checked")
    }
    h.find("button.btnFlag").attr("data-userid", j);
    h.show()
}
function noAlert(a) {
    $j("#notificationBox").attr("data-count", 0);
    $j("ul#modelNotificationList > li").hide();
    $j("ul#modelNotificationList > li.noNewItem").show();
    $j("ul#modelNotificationList > li.noNewItem > span").text(a)
}
function insertNotificationContent() {
    $j("#notificationBox #loadingDiv").show();
    var a = $j("#notificationBox").data("type");
    $j("ul#modelNotificationList > li,.handle3, .track3").hide();
    if (a == "messageContent") {
        $j("#notificationBox .headerBox a.headerLink").attr("href", messageViewAll);
        $j("#notificationBox .footerBox a").attr("href", messageViewAll);
        if (cacheAjaxNotif[0]) {
            $j("#modelNotificationList").html(cacheAjaxNotif[0]);
            $j("#notificationBox").attr("data-count", cacheAjaxNotif[3])
        } else {
            $j.ajax({
                type: "GET",
                data: {
                    identifier: ajaxIdentifier,
                    hash: ajaxHash,
                    key: ajaxKey
                },
                url: "/chat/threads?limit=5",
                dataType: "json",
                async: false,
                success: function(b) {
                    if (b == '"EXPIRED"') {
                        document.location.reload()
                    } else {
                        if (b.jsonThreadsCount == 0) {
                            noAlert("messages")
                        } else {
                            $j.map(b.jsonThreads, function(c, d) {
                                createMailAlert(c)
                            });
                            $j("#notificationBox").attr("data-count", b.count);
                            $j("ul#modelNotificationList > li.noNewItem").hide()
                        }
                        cacheAjaxNotif[0] = $j("#modelNotificationList").html();
                        cacheAjaxNotif[3] = $j("#notificationBox").attr("data-count")
                    }
                }
            })
        }
    } else {
        if (a == "requestContent") {
            $j("#notificationBox .footerBox a").attr("href", requestViewAll);
            $j("#notificationBox .headerBox a.headerLink").attr("href", requestViewAll);
            if (cacheAjaxNotif[1]) {
                $j("#modelNotificationList").html(cacheAjaxNotif[1]);
                $j("#notificationBox").attr("data-count", cacheAjaxNotif[4])
            } else {
                $j.ajax({
                    type: "GET",
                    data: {
                        identifier: ajaxIdentifier,
                        hash: ajaxHash,
                        key: ajaxKey
                    },
                    url: "/user/ajaxGetFriendRequests?limit=5",
                    dataType: "json",
                    async: false,
                    success: function(c) {
                        if (c == '"EXPIRED"') {
                            document.location.reload()
                        } else {
                            if (c.count == 0) {
                                noAlert("friend requests")
                            } else {
                                for (var b = 0; b < c.datas.length; b++) {
                                    createfriendRequestAlert(c.datas[b].avatar_url, c.datas[b].username, c.datas[b].user_link, c.datas[b].message, c.datas[b].request_date, c.datas[b].user_id, c.autoSubscribeFriendRequestsReceived)
                                }
                                $j("#notificationBox").attr("data-count", c.count);
                                $j("ul#modelNotificationList > li.noNewItem").hide()
                            }
                            cacheAjaxNotif[1] = $j("#modelNotificationList").html();
                            cacheAjaxNotif[4] = $j("#notificationBox").attr("data-count")
                        }
                    }
                })
            }
        } else {
            if (a == "notifContent") {
                $j("#notificationBox .footerBox a").attr("href", notifViewAll);
                $j("#notificationBox .headerBox a.headerLink").attr("href", notifViewAll);
                if (cacheAjaxNotif[2]) {
                    $j("#modelNotificationList").html(cacheAjaxNotif[2]);
                    $j("#notificationBox").attr("data-count", cacheAjaxNotif[5])
                } else {
                    $j.ajax({
                        type: "GET",
                        data: {
                            identifier: ajaxIdentifier,
                            hash: ajaxHash,
                            key: ajaxKey
                        },
                        url: "/stream/notifications_mini?limit=15",
                        dataType: "json",
                        async: false,
                        success: function(b) {
                            if (b == "REFRESH") {
                                document.location.reload()
                            } else {
                                if (b) {
                                    $j("#modelNotificationList").append(b.html);
                                    $j("#notificationBox").attr("data-count", b.count)
                                } else {
                                    noAlert("notifications")
                                }
                            }
                            cacheAjaxNotif[2] = $j("#modelNotificationList").html();
                            cacheAjaxNotif[5] = $j("#notificationBox").attr("data-count")
                        }
                    })
                }
            }
        }
    }
    $j("#scrollNotif").slimscroll({
        height: "auto",
        color: "#F39000",
        size: "7px",
        alwaysVisible: true,
        railVisible: true,
        railOpacity: 1,
        railColor: "#222",
        distance: - 2,
        opacity: 1,
        railClass: "track3",
        barClass: "handle3"
    });
    $j("#notificationBox #loadingDiv").hide()
}
function manageRequest(f, b, e, d) {
    var a = $j("#request_" + f), c = $j("#notificationBox").attr("data-count");
    url = b ? "/user/ajaxAcceptFriendRequest" : "/user/ajaxRejectFriendRequest";
    url = url + "?key=" + ajaxKey + "&hash=" + ajaxHash + "&identifier=" + ajaxIdentifier;
    if (b == 1 && $j("#autoSubscribeHeader").is(":checked")) {
        url = url + "&subscribe=1"
    } else {
        if (b == 1 && $j("#autoSubscribe_" + f).is(":checked")) {
            url = url + "&subscribe=1"
        }
    }
    $j.ajax({
        type: "POST",
        url: url,
        data: {
            id: f
        },
        success: function(g) {
            if (g == '"OK"') {
                $j("#notificationBox").attr("data-count", c - 1);
                if (b) {
                    a.addClass("accepted");
                    a.find(".action button").attr("disabled", "disabled");
                    a.find(".action").remove();
                    a.find(".contentContainer").html('You and <a href="' + d + '" style="font-weight:bold;">' + e + "</a> are now friends.")
                } else {
                    a.fadeOut("fast", function() {
                        $j(this).remove();
                        if ($j("#modelNotificationList li").filter(":visible").size() == 0 && $j("#notificationBox").attr("data-count") == 0) {
                            noAlert("friend requests")
                        } else {
                            if ($j("#modelNotificationList li").filter(":visible").size() == 0) {
                                fetchData()
                            }
                        }
                    })
                }
                setTimeout(function() {
                    cacheAjaxNotif[1] = $j("#modelNotificationList").html();
                    cacheAjaxNotif[4] = $j("#notificationBox").attr("data-count")
                }, 600)
            }
        }
    })
}
function reportSpam(c) {
    var a = $j("#request_" + c), b = $j("#notificationBox").attr("data-count");
    $j.ajax({
        type: "POST",
        url: "/user/ajaxFriendRequestReport?key=" + ajaxKey + "&hash=" + ajaxHash + "&identifier=" + ajaxIdentifier,
        data: {
            id: c
        },
        success: function(d) {
            if (d == '"OK"') {
                $j("#tooltip").hide();
                $j("#notificationBox").attr("data-count", b - 1);
                a.fadeOut("fast", function() {
                    $j(this).remove();
                    if ($j("#modelNotificationList li").filter(":visible").size() == 0 && $j("#notificationBox").attr("data-count") == 0) {
                        noAlert("friend requests")
                    } else {
                        if ($j("#modelNotificationList li").filter(":visible").size() == 0) {
                            fetchData()
                        }
                    }
                });
                setTimeout(function() {
                    cacheAjaxNotif[1] = $j("#modelNotificationList").html();
                    cacheAjaxNotif[4] = $j("#notificationBox").attr("data-count")
                }, 600)
            }
        }
    })
}
function fetchData() {
    var a = $j("#notificationBox").data("type");
    if (a == "messageContent") {
        urlToFetch = "/user/ajaxGetMessages?offset=";
        cachetoUse = 0
    } else {
        if (a == "requestContent") {
            urlToFetch = "/user/ajaxGetFriendRequests?offset=";
            cachetoUse = 1
        }
    }
    if (!scrollLimit[cachetoUse]&&!(offset[cachetoUse] >= ($j("#notificationBox").attr("data-count")))) {
        $j.ajax({
            type: "GET",
            data: {
                identifier: ajaxIdentifier,
                hash: ajaxHash,
                key: ajaxKey
            },
            url: urlToFetch + offset[cachetoUse] + "&limit=5",
            dataType: "json",
            success: function(c) {
                for (var b = 0; b < c.datas.length; b++) {
                    if (a == "requestContent") {
                        createfriendRequestAlert(c.datas[b].avatar_url, c.datas[b].username, c.datas[b].user_link, c.datas[b].message, c.datas[b].request_date, c.datas[b].user_id, c.autoSubscribeFriendRequestsReceived)
                    }
                }
                offset[cachetoUse] = offset[cachetoUse] + 5;
                if (offset[cachetoUse] >= ($j("#notificationBox").attr("data-count")) || offset[cachetoUse] >= 100) {
                    scrollLimit[cachetoUse] = 1
                }
                setTimeout(function() {
                    cacheAjaxNotif[cachetoUse] = $j("#modelNotificationList").html()
                }, 600)
            }
        })
    }
}
function fetchDataNotification() {
    if (!scrollLimit[2]&&!(offset[2] >= ($j("#notificationBox").attr("data-count")))) {
        $j.ajax({
            type: "GET",
            data: {
                identifier: ajaxIdentifier,
                hash: ajaxHash,
                key: ajaxKey
            },
            url: "/stream/notifications_mini?offset=" + offset[2] + "&limit=15",
            dataType: "json",
            success: function(a) {
                $j("#modelNotificationList").append(a.html);
                offset[2] = offset[2] + 5;
                if (offset[2] >= ($j("#notificationBox").attr("data-count")) || offset[2] >= 100) {
                    scrollLimit[2] = 1
                }
                setTimeout(function() {
                    cacheAjaxNotif[2] = $j("#modelNotificationList").html()
                }, 600)
            }
        })
    }
}
if (!(BrowserDetect.browser == "Explorer" && BrowserDetect.version == 7)) {
    $j(window).resize(function() {
        $j(".add-to-playlist-icon button").removeClass("active");
        $j(".add-to-playlist-menu, .add-to-playlist-icon").hide()
    })
}
$j(document).ready(function(a) {
    BrowserDetect.init();
    $j("#scrollNotif").on("scroll", function() {
        if ($j(this).scrollTop() + $j(this).innerHeight() >= $j(this)[0].scrollHeight) {
            var c = $j("#notificationBox").data("type");
            if (c == "notifContent") {
                fetchDataNotification()
            } else {
                if (c == "messageContent") {} else {
                    fetchData()
                }
            }
        }
    });
    $j(".blockPageScroll").bind("mousewheel DOMMouseScroll", function(c) {
        c.preventDefault()
    });
    positionBadges();
    $j("ul").each(function() {
        $j(this).find("li:first").addClass("alpha");
        if ($j(this).find("li:last").hasClass("sectionMoreBtn")) {
            $j(this).find("li:last").prev().addClass("omega")
        } else {
            $j(this).find("li:last").addClass("omega")
        }
    });
    $j(".container a.img, .container img").each(function() {
        if (!$j(this).hasClass("catIcon")) {
            $j(this).attr("data-title", $j(this).attr("title"));
            $j(this).attr("title", "")
        }
    });
    $j(".expandable-title").on("click", function() {
        if ($j(this).next(".expandable-content").is(":visible")) {
            $j(this).next(".expandable-content").slideUp();
            $j(this).parent(".expandable-section").removeClass("active")
        } else {
            $j(this).parent(".expandable-section").siblings(".expandable-section").removeClass("active").children(".expandable-content").slideUp();
            $j(this).next(".expandable-content").slideDown();
            $j(this).parent(".expandable-section").addClass("active")
        }
    });
    $j(".expandable-title .expand-button").on("click", function(c) {
        c.preventDefault()
    });
    $j("body").on("mouseenter", ".subscribeButton", function() {
        var c = $j(this).find(".buttonLabel");
        if (c.text() == "Subscribed") {
            c.text("Unsubscribe")
        }
    }).on("mouseleave", ".subscribeButton", function() {
        var c = $j(this).find(".buttonLabel");
        if (c.text() == "Unsubscribe") {
            c.text("Subscribed")
        }
    });
    $j("body").on("click", ".subscribeButton button", b);
    function b(e, d, c) {
        $currentElement = $j(d !== undefined ? d : this), $parentElement = $currentElement.closest(".subscribeButton"), $allElement = $parentElement.attr("data-button-id"), $toggleUrl = ($currentElement.attr("data-subscribed") == 0) ? $currentElement.attr("data-subscribe-url") : $currentElement.attr("data-unsubscribe-url"), $loggedIn = $currentElement.attr("data-login"), $refresh = $currentElement.attr("data-refresh"), $partnerConfirmationText = ($currentElement.attr("data-subscribed") == 0) ? "By subscribing to this content partner you are also subscribing to all of their channels, would you like to continue?" : "By unsubscribing from this content partner you are also unsubscribing from all of their channels, would you like to continue?", $contentPartner = $currentElement.attr("data-content-partner");
        if ($loggedIn == 1) {
            signinbox.show()
        } else {
            if ($contentPartner == 1 && c !== true) {
                yesNoModal.show($partnerConfirmationText, function() {
                    b(e, $currentElement, true)
                })
            } else {
                $j.ajax({
                    type: "POST",
                    url: $toggleUrl,
                    dataType: "JSON",
                    beforeSend: function() {
                        $currentElement.children().addClass("visuallyHidden");
                        $currentElement.append('<span class="spinner" />')
                    },
                    success: function(g) {
                        var f = g;
                        $currentElement.children().removeClass("visuallyHidden");
                        $currentElement.find(".spinner").remove();
                        if (f.success == "PASS") {
                            if ($currentElement.attr("data-subscribed") == 0) {
                                $currentElement.attr("data-subscribed", 1);
                                $j("." + $allElement).removeClass("subscribe").addClass("unsubscribe")
                            } else {
                                $currentElement.attr("data-subscribed", 0);
                                $j("." + $allElement).removeClass("unsubscribe").addClass("subscribe")
                            }
                            if ($refresh == 1) {
                                location.reload()
                            }
                        } else {
                            $currentElement.attr("disabled", 1)
                        }
                        $j("." + $allElement).find(".buttonLabel").text(f.text_initial)
                    },
                    error: function() {
                        location.reload()
                    }
                })
            }
        }
    }
    $j("body").on("mouseenter", ".addFriendButton", function() {
        var c = $j(this).find(".buttonLabel");
        if (c.text() == "Friends") {
            c.text("Unfriend")
        } else {
            if (c.text() == "Request Sent") {
                c.text("Cancel Request")
            }
        }
    }).on("mouseleave", ".addFriendButton", function() {
        var c = $j(this).find(".buttonLabel");
        if (c.text() == "Unfriend") {
            c.text("Friends")
        } else {
            if (c.text() == "Cancel Request") {
                c.text("Request Sent")
            }
        }
    });
    $j("body").on("click", ".addFriendButton button", function() {
        $currentElement = $j(this), $parentElement = $currentElement.closest(".addFriendButton"), $allElement = $parentElement.attr("data-button-id"), $friendStatus = $currentElement.attr("data-friends"), $refresh = $currentElement.attr("data-refresh"), $toggleUrl = ($friendStatus == 2) ? $currentElement.attr("data-unfriend-url") : $currentElement.attr("data-friend-url"), $loggedIn = $currentElement.attr("data-login");
        if ($loggedIn == 1) {
            signinbox.show()
        } else {
            if ($friendStatus == 1) {
                $j.ajax({
                    type: "POST",
                    url: $currentElement.attr("data-unfriend-url"),
                    dataType: "JSON",
                    success: function(c) {
                        if (c.success == "PASS") {
                            $currentElement.attr("data-friends", 0).find(".buttonLabel").text("Add Friend");
                            $j("." + $allElement).removeClass("sent").addClass("add")
                        }
                    }
                })
            } else {
                $j.ajax({
                    type: "POST",
                    url: $toggleUrl,
                    dataType: "JSON",
                    beforeSend: function() {
                        $currentElement.children().addClass("visuallyHidden");
                        $currentElement.append('<span class="spinner" />')
                    },
                    success: function(c) {
                        $currentElement.children().removeClass("visuallyHidden");
                        $currentElement.find(".spinner").remove();
                        if (c.success == "PASS") {
                            if ($friendStatus == 0) {
                                if ($refresh == 1 && c.auto_accepted) {
                                    $currentElement.attr("data-friends", 2);
                                    location.reload()
                                }
                                $currentElement.attr("data-friends", 1);
                                $j("." + $allElement).removeClass("add").addClass("removeFriend")
                            } else {
                                if ($friendStatus == 2) {
                                    $currentElement.attr("data-friends", 0);
                                    $j("." + $allElement).removeClass("removeFriend").addClass("add");
                                    if ($refresh == 1) {
                                        location.reload()
                                    }
                                }
                            }
                        } else {
                            if (c.success == "ATTEMPT") {
                                builtModal(c.user.id, c.user.avatar, c.user.username, c.user.profile, $toggleUrl)
                            } else {
                                $currentElement.attr("disabled", 1)
                            }
                        }
                        $currentElement.find(".buttonLabel").text(c.text_initial)
                    },
                    error: function() {
                        location.reload()
                    }
                })
            }
        }
    })
});
function nl2br(a) {
    return a.replace(/\n/g, "<br />")
}
function strpos(b, c, d) {
    var a = (b + "").indexOf(c, (d || 0));
    return a===-1 ? false : a
}
String.prototype.strip = function(a) {
    return this.replace(a, "")
};
String.prototype.trim = function() {
    return this.strip(/^\s+|\s+$/g)
};
String.prototype.stripForTags = function() {
    return this.strip(/[^a-z0-9 ,]*/gi)
};
String.prototype.stripForTagsMultilingual = function() {
    return this.strip(/[^a-zA-Z0-9\u0401\u0410-\u044f\u0451 ,]*/g)
};
String.prototype.stripHtmlTags = function() {
    var a = "(?:[^\"'>]|\"[^\"]*\"|'[^']*')*", b = new RegExp("<(?:!--(?:(?:-*[^->])*--+|-?)|script\\b" + a + ">[\\s\\S]*?<\/script\\s*|style\\b" + a + ">[\\s\\S]*?</style\\s*|/?[a-z]" + a + ")>", "gi");
    return this.strip(b)
};
String.prototype.stripExtended = function() {
    return this.strip(/[^\u0000-\u0080]+/g)
};
String.prototype.stripExtendedMultilingual = function() {
    return this.strip(/[^\u0000-\u0080\u0401\u0410-\u044f\u0451]+/g)
};
String.prototype.sanitize = function() {
    return this.stripExtended().stripHtmlTags().trim()
};
String.prototype.sanitizeMultilingual = function() {
    return this.stripExtendedMultilingual().stripHtmlTags().trim()
};
var cache = {}, timeout = {
    timer: null,
    el: null
};
function avatarLoad() {
    var a = $j("body").hasClass("logged-out");
    $j(document).on({
        mouseenter: function(d) {
            if ($j(this).data("disable-popover") == 0) {
                var c = d.currentTarget;
                if (($j(d.target).is(".avatarTrigger") && $j(".avatarPosition").html("")) || ($j(d.currentTarget).is(".usernameWrap") && $j(".avatarPosition").html(""))) {
                    if (timeout.timer) {
                        clearTimeout(timeout.timer)
                    }
                    var b = $j(this).data("type");
                    timeout.el = this;
                    timeout.timer = setTimeout(function(f) {
                        if (cache[$j(c).data(b + "id")]) {
                            if (a) {
                                $j(".avatarPosition", timeout.el).html(cache[$j(c).data(b + "id")])
                            }
                        } else {
                            $j.ajax({
                                type: "POST",
                                url: "/" + b + "/hover?id=" + $j(c).data(b + "id"),
                                dataType: "html",
                                context: this,
                                cache: false,
                                success: function(e) {
                                    $j(c).find(".avatarPosition").html(e);
                                    $j(c).find(".avatarPopOver").show();
                                    if (a) {
                                        cache[$j(timeout.el).data(b + "id")] = $j(".avatarPosition", timeout.el).html()
                                    }
                                }
                            })
                        }
                    }, 500)
                }
            }
        },
        mouseleave: function(c) {
            if ($j(this).data("disable-popover") == 0) {
                var b = $j(this).data("type");
                if (a) {
                    cache[$j(this).data(b + "id")] = $j(".avatarPosition", this).html()
                }
                $j(".avatarPopOver").hide().appendTo("body");
                clearTimeout(timeout.timer)
            }
        }
    }, ".avatarWrap, .usernameWrap")
}
var blurTimeout = "";
function focusReply() {
    $j("form.streamCommentFrom").on("blur", ".streamTextArea", function(b) {
        var a = $j(b.target);
        blurTimeout = setTimeout(function() {
            a.closest("form").find(".streamSubmitInput, .streamSections").css("visibility", "hidden");
            a.css("height", "32px")
        }, 200)
    });
    $j(".streamTextArea").on("focus", function(c) {
        var b = $j(this).val(), a = $j(c.target);
        if (b == "Click to leave a comment") {
            $j(this).val("")
        }
        $j(this).closest("form").find(".streamSubmitInput, .streamSections").css("visibility", "visible");
        $j(this).trigger("resize")
    })
}
function openReply() {
    $j(".reply a").click(function() {
        var b = $j(this).closest(".feedItemSection").find(".formAvatar"), c = $j(this).closest(".feedItemSection").find(".formText"), a = $j(this).closest(".feedItemSection").find(".formText textarea");
        $j(this).hide();
        b.show();
        c.show();
        a.focus().text("").trigger("click");
        positionBadges()
    })
}
function loadCSS(b) {
    var a = $j("<link>");
    a.attr({
        rel: "stylesheet",
        type: "text/css",
        href: b
    });
    $j("head").append(a)
}
function loadJS(b, a) {
    $j.getScript(b).done(function(c, d) {
        if (typeof(a) == "function") {
            a()
        }
    })
}
function addInternalLinks(c) {
    var a = /((?:,|\s|\n|\r|>|^)(?!\[url))(?:http:\/\/)?((?:[a-z]+[0-9]*\.)?pornhub\.com(?:\/.*?)?)((?:\s|\n|\r|<|$|,|(?:\.[\s\n\r<$]))(?!\[\/url\]))/igm;
    var b = '$1<a href="http://$2">$2</a>$3';
    return c.replace(a, b)
}
function addAnyLinks(d) {
    var c = "ABOGADO|AC|ACADEMY|ACCOUNTANTS|ACTIVE|ACTOR|AD|AE|AERO|AF|AG|AGENCY|AI|AIRFORCE|AL|ALLFINANZ|ALSACE|AM|AN|AO|AQ|AR|ARCHI|ARMY|ARPA|AS|ASIA|ASSOCIATES|AT|ATTORNEY|AU|AUCTION|AUDIO|AUTOS|AW|AX|AXA|AZ|BA|BAND|BAR|BARGAINS|BAYERN|BB|BD|BE|BEER|BERLIN|BEST|BF|BG|BH|BI|BID|BIKE|BIO|BIZ|BJ|BLACK|BLACKFRIDAY|BLOOMBERG|BLUE|BM|BMW|BN|BNPPARIBAS|BO|BOO|BOUTIQUE|BR|BRUSSELS|BS|BT|BUDAPEST|BUILD|BUILDERS|BUSINESS|BUZZ|BV|BW|BY|BZ|BZH|CA|CAB|CAL|CAMERA|CAMP|CANCERRESEARCH|CAPETOWN|CAPITAL|CARAVAN|CARDS|CARE|CAREER|CAREERS|CASA|CASH|CAT|CATERING|CC|CD|CENTER|CEO|CERN|CF|CG|CH|CHANNEL|CHEAP|CHRISTMAS|CHROME|CHURCH|CI|CITIC|CITY|CK|CL|CLAIMS|CLEANING|CLICK|CLINIC|CLOTHING|CLUB|CM|CN|CO|CODES|COFFEE|COLLEGE|COLOGNE|COM|COMMUNITY|COMPANY|COMPUTER|CONDOS|CONSTRUCTION|CONSULTING|CONTRACTORS|COOKING|COOL|COOP|COUNTRY|CR|CREDIT|CREDITCARD|CRS|CRUISES|CU|CUISINELLA|CV|CW|CX|CY|CYMRU|CZ|DAD|DANCE|DATING|DAY|DE|DEALS|DEGREE|DELIVERY|DEMOCRAT|DENTAL|DENTIST|DESI|DIAMONDS|DIET|DIGITAL|DIRECT|DIRECTORY|DISCOUNT|DJ|DK|DM|DNP|DO|DOMAINS|DURBAN|DVAG|DZ|EAT|EC|EDU|EDUCATION|EE|EG|EMAIL|EMERCK|ENERGY|ENGINEER|ENGINEERING|ENTERPRISES|EQUIPMENT|ER|ES|ESQ|ESTATE|ET|EU|EUS|EVENTS|EXCHANGE|EXPERT|EXPOSED|FAIL|FARM|FEEDBACK|FI|FINANCE|FINANCIAL|FISH|FISHING|FITNESS|FJ|FK|FLIGHTS|FLORIST|FLSMIDTH|FLY|FM|FO|FOO|FORSALE|FOUNDATION|FR|FRL|FROGANS|FUND|FURNITURE|FUTBOL|GA|GAL|GALLERY|GB|GBIZ|GD|GE|GENT|GF|GG|GH|GI|GIFT|GIFTS|GIVES|GL|GLASS|GLE|GLOBAL|GLOBO|GM|GMAIL|GMO|GMX|GN|GOOGLE|GOP|GOV|GP|GQ|GR|GRAPHICS|GRATIS|GREEN|GRIPE|GS|GT|GU|GUIDE|GUITARS|GURU|GW|GY|HAMBURG|HAUS|HEALTHCARE|HELP|HERE|HIPHOP|HIV|HK|HM|HN|HOLDINGS|HOLIDAY|HOMES|HORSE|HOST|HOSTING|HOUSE|HOW|HR|HT|HU|IBM|ID|IE|IL|IM|IMMO|IMMOBILIEN|IN|INDUSTRIES|INFO|ING|INK|INSTITUTE|INSURE|INT|INTERNATIONAL|INVESTMENTS|IO|IQ|IR|IS|IT|JE|JETZT|JM|JO|JOBS|JOBURG|JP|JUEGOS|KAUFEN|KE|KG|KH|KI|KIM|KITCHEN|KIWI|KM|KN|KOELN|KP|KR|KRD|KRED|KW|KY|KZ|LA|LACAIXA|LAND|LAWYER|LB|LC|LEASE|LGBT|LI|LIFE|LIGHTING|LIMITED|LIMO|LINK|LK|LOANS|LONDON|LOTTO|LR|LS|LT|LTDA|LU|LUXE|LUXURY|LV|LY|MA|MAISON|MANAGEMENT|MANGO|MARKET|MARKETING|MC|MD|ME|MEDIA|MEET|MELBOURNE|MEME|MENU|MG|MH|MIAMI|MIL|MINI|MK|ML|MM|MN|MO|MOBI|MODA|MOE|MONASH|MORTGAGE|MOSCOW|MOTORCYCLES|MOV|MP|MQ|MR|MS|MT|MU|MUSEUM|MV|MW|MX|MY|MZ|NA|NAGOYA|NAME|NAVY|NC|NE|NET|NETWORK|NEUSTAR|NEW|NEXUS|NF|NG|NGO|NHK|NI|NINJA|NL|NO|NP|NR|NRA|NRW|NU|NYC|NZ|OKINAWA|OM|ONG|ONL|OOO|ORG|ORGANIC|OTSUKA|OVH|PA|PARIS|PARTNERS|PARTS|PE|PF|PG|PH|PHARMACY|PHOTO|PHOTOGRAPHY|PHOTOS|PHYSIO|PICS|PICTURES|PINK|PIZZA|PK|PL|PLACE|PLUMBING|PM|PN|POHL|POKER|POST|PR|PRAXI|PRESS|PRO|PROD|PRODUCTIONS|PROF|PROPERTIES|PROPERTY|PS|PT|PUB|PW|PY|QA|QPON|QUEBEC|RE|REALTOR|RECIPES|RED|REHAB|REISE|REISEN|REN|RENTALS|REPAIR|REPORT|REPUBLICAN|REST|RESTAURANT|REVIEWS|RICH|RIO|RIP|RO|ROCKS|RODEO|RS|RSVP|RU|RUHR|RW|RYUKYU|SA|SAARLAND|SARL|SB|SC|SCA|SCB|SCHMIDT|SCHULE|SCOT|SD|SE|SERVICES|SEXY|SG|SH|SHIKSHA|SHOES|SI|SINGLES|SJ|SK|SL|SM|SN|SO|SOCIAL|SOFTWARE|SOHU|SOLAR|SOLUTIONS|SOY|SPACE|SPIEGEL|SR|ST|SU|SUPPLIES|SUPPLY|SUPPORT|SURF|SURGERY|SUZUKI|SV|SX|SY|SYDNEY|SYSTEMS|SZ|TAIPEI|TATAR|TATTOO|TAX|TC|TD|TECHNOLOGY|TEL|TF|TG|TH|TIENDA|TIPS|TIROL|TJ|TK|TL|TM|TN|TO|TODAY|TOKYO|TOOLS|TOP|TOWN|TOYS|TP|TR|TRADE|TRAINING|TRAVEL|TT|TUI|TV|TW|TZ|UA|UG|UK|UNIVERSITY|UNO|UOL|US|UY|UZ|VA|VACATIONS|VC|VE|VEGAS|VENTURES|VERSICHERUNG|VET|VG|VI|VIAJES|VILLAS|VISION|VLAANDEREN|VN|VODKA|VOTE|VOTING|VOTO|VOYAGE|VU|WALES|WANG|WATCH|WEBCAM|WEBSITE|WED|WEDDING|WF|WHOSWHO|WIEN|WIKI|WILLIAMHILL|WME|WORK|WORKS|WORLD|WS|WTC|WTF|XN--1QQW23A|XN--3BST00M|XN--3DS443G|XN--3E0B707E|XN--45BRJ9C|XN--4GBRIM|XN--55QW42G|XN--55QX5D|XN--6FRZ82G|XN--6QQ986B3XL|XN--80ADXHKS|XN--80AO21A|XN--80ASEHDB|XN--80ASWG|XN--90A3AC|XN--C1AVG|XN--CG4BKI|XN--CLCHC0EA0B2G2A9GCD|XN--CZR694B|XN--CZRU2D|XN--D1ACJ3B|XN--D1ALF|XN--FIQ228C5HS|XN--FIQ64B|XN--FIQS8S|XN--FIQZ9S|XN--FPCRJ9C3D|XN--FZC2C9E2C|XN--GECRJ9C|XN--H2BRJ9C|XN--I1B6B1A6A2E|XN--IO0A7I|XN--J1AMH|XN--J6W193G|XN--KPRW13D|XN--KPRY57D|XN--KPUT3I|XN--L1ACC|XN--LGBBAT1AD8J|XN--MGB9AWBF|XN--MGBA3A4F16A|XN--MGBAAM7A8H|XN--MGBAB2BD|XN--MGBAYH7GPA|XN--MGBBH1A71E|XN--MGBC0A9AZCG|XN--MGBERP4A5D4AR|XN--MGBX4CD0AB|XN--NGBC5AZD|XN--NODE|XN--NQV7F|XN--NQV7FS00EMA|XN--O3CW4H|XN--OGBPF8FL|XN--P1ACF|XN--P1AI|XN--PGBS0DH|XN--Q9JYB4C|XN--RHQV96G|XN--S9BRJ9C|XN--SES554G|XN--UNUP4Y|XN--VERMGENSBERATER-CTB|XN--VERMGENSBERATUNG-PWB|XN--VHQUV|XN--WGBH1C|XN--WGBL6A|XN--XHQ521B|XN--XKC2AL3HYE2A|XN--XKC2DL3A5EE0H|XN--YFRO4I67O|XN--YGBI2AMMX|XN--ZFR164B|XXX|XYZ|YACHTS|YANDEX|YE|YOGA|YOKOHAMA|YOUTUBE|YT|ZA|ZIP|ZM|ZONE|ZW";
    var a = new RegExp("(.*?(?:,|\\s|\\t|\\n|\\r|^))(?:https?://)?((?:[\\da-z\\.-]+)\\.(?:" + c + ")(?:/[-/\\w%]*)*)((?:\\.|,|\\s|\\t|\\n|\\r|$).*?)", "igm");
    var b = '$1<a href="http://$2">$2</a>$3';
    return d.replace(a, b)
}
function validateBannedWords(a) {
    if (bannedWords.length == 0) {
        return true
    }
    var c = new RegExp("\\b" + bannedWords.join("\\b|\\b") + "\\b", "i"), b=!c.test(a);
    return b
}
function activateHideDelayed(element, timeout, additionalMonitoredElements, additionalElementsToHidePattern) {
    element = $j(element);
    element.add(additionalMonitoredElements).on({
        mouseenter: function() {
            element.data("hideDelayedOver", "1");
            clearHideTimer(element)
        },
        mouseleave: function() {
            element.data("hideDelayedOver", "0");
            clearHideTimer(element);
            additionalElementsToHide = $j(eval(additionalElementsToHidePattern));
            element.data("hideDelayedTimeoutId", setTimeout(function() {
                hideDelayed(element, additionalElementsToHide)
            }, timeout))
        }
    })
}
function hideDelayed(a, b) {
    if (a.data("hideDelayedOver") == "0") {
        a.add(b).hide();
        $j("#withScroll").next("div").hide();
        clearTimeout(parseInt(a.data("hideDelayedTimeoutId")));
        a.data("hideDelayedTimeoutId", "")
    }
}
function clearHideTimer(a) {
    if (a.data("hideDelayedTimeoutId")) {
        clearTimeout(parseInt(a.data("hideDelayedTimeoutId")));
        a.data("hideDelayedTimeoutId", "")
    }
}
function makeDropdown(a, b) {
    $j(a).each(function(c, h) {
        var h = $j(h);
        if (!h.hasClass("js_dropdownBound")) {
            h.addClass("js_dropdownBound");
            var e = h.find(".dropdownTrigger"), g = h.find(".dropdownWrapper").first();
            e.on("click", function(m, k) {
                if (k) {
                    return 
                }
                var j = $j(this), l = false, i = (g.is("#withScroll")) ? 1: 0;
                if (e.length == 1) {
                    l = g.is(":visible")
                } else {
                    if (e.length > 1) {
                        l = g.is(":visible") && g.data("type") == j.data("type")
                    }
                }
                if (l) {
                    g.hide();
                    if (i) {
                        $j("#withScroll").next("div").hide()
                    }
                } else {
                    $j(".dropdownWrapper").hide();
                    if (j.data("type")) {
                        g.data("type") == j.data("type")
                    }
                    g.show()
                }
            });
            if (((typeof a == "string" && a != ".channelsAZ") || (typeof a == "object"&&!$j(a).hasClass("channelsAZ"))) && ((typeof a == "string" && a != ".alphabetFilter") || (typeof a == "object"&&!$j(a).hasClass("alphabetFilter")))) {
                activateHideDelayed(g, 400, e, b)
            }
            var f = h.find('input[type="hidden"]');
            g.on("click", "li", function(i) {
                var j = $j(i.target).closest("li");
                j.addClass("active");
                j.siblings("li").removeClass("active");
                h.find(".dropdownTrigger .textFilter").text(j.text());
                if (f.length) {
                    f.val(j.data("value"))
                }
            });
            if (f.length && f.val() != "") {
                function d(j, i) {
                    var k = j.find('li[data-value="' + i.val() + '"]');
                    if (k.length) {
                        k.trigger("click", [true])
                    } else {
                        return "not_found"
                    }
                }
                if (d(g, f) == "not_found") {
                    setTimeout(function() {
                        d(g, f)
                    }, 1000)
                }
            }
        }
    })
}
$j(document).on("click", function(b) {
    var a = $j(b.target).closest(".dropdownWrapper").add($j(b.target).closest(".dropdownTrigger").parent().find(".dropdownWrapper"));
    $j(".dropdownWrapper").not(a).hide()
});
$j(document).ready(function(a) {
    makeDropdown($j(".dropdownTrigger").parent())
});
function loadExternalHtml(a, b) {
    $j.ajax({
        type: "POST",
        url: a,
        success: function(c) {
            $j(b).html(c).show()
        }
    });
    return false
}
function prettyTime(b) {
    var f = parseInt(b, 10);
    var a = Math.floor(f / 3600);
    var c = Math.floor((f - (a * 3600)) / 60);
    var e = f - (a * 3600) - (c * 60);
    if (a < 10) {
        a = "0" + a
    }
    if (c < 10) {
        c = "0" + c
    }
    if (e < 10) {
        e = "0" + e
    }
    var d = (parseInt(a) > 0 ? a + ":" : "") + c + ":" + e;
    return d
}
function escapeRegexp(a) {
    return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
}
function storageEnabled() {
    try {
        localStorage.enableStorage = 1;
        localStorage.removeItem("enableStorage")
    } catch (a) {
        return false
    }
    return true
}
function updateQueryStringParameter(c, a, d) {
    var b = new RegExp("([?&])" + a + "=.*?(&|$)", "i");
    var e = c.indexOf("?")!==-1 ? "&": "?";
    if (c.match(b)) {
        return c.replace(b, "$1" + a + "=" + d + "$2")
    } else {
        return c + e + a + "=" + d
    }
}
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(g, b) {
        var d, c;
        if (this == null) {
            throw new TypeError(" this is null or not defined")
        }
        var f = Object(this);
        var a = f.length>>>0;
        if (typeof g !== "function") {
            throw new TypeError(g + " is not a function")
        }
        if (arguments.length > 1) {
            d = b
        }
        c = 0;
        while (c < a) {
            var e;
            if (c in f) {
                e = f[c];
                g.call(d, e, c, f)
            }
            c++
        }
    }
}
if (!String.prototype.capitalize) {
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }
}
function adBlockAlert() {
    var b = "You have AdBlock enabled. Adblock is known to cause issues with site functionality. If you are experiencing any issues, please try disabling the extension.", a = $j("<div id='adBlockAlert'><div class='adBlockAlertInner'><span class='icon'></span>" + b + "<a id='adBlockAlertClose'>&times;</a></div>");
    a.hide();
    $j("#header").append(a);
    if (!getCookieAdvanced("adBlockAlertHidden")) {
        a.slideDown();
        $j("#adBlockAlertClose").click(function() {
            $j("#adBlockAlert").slideUp(function() {
                setCookieAdvanced("adBlockAlertHidden", 1, 1)
            })
        })
    }
}
if (typeof fuckAdBlock === "undefined") {
    adBlockAlert()
} else {
    fuckAdBlock.onDetected(adBlockAlert)
}
function addShareExternal(b, a, c) {
    if (shareButtonsLoaded) {
        if (typeof(b) == "function") {
            b()
        }
        return 
    }
    shareButtonsLoaded = true;
    if (typeof a == "undefined") {
        a = urlShare
    }
    if (typeof c == "undefined") {
        c = shareTitle
    }
    $j(".g-plusone").attr("data-href", a).data("href", a);
    loadJS("https://apis.google.com/js/plusone.js", function() {
        gapi.plusone.go()
    });
    $j("a.sharesTwitter").attr("href", updateQueryStringParameter($j("a.sharesTwitter").attr("href"), "url", a));
    $j("a.sharesTwitter").attr("href", updateQueryStringParameter($j("a.sharesTwitter").attr("href"), "text", encodeURIComponent(c)));
    $j("a.sharesReddit").attr("href", updateQueryStringParameter($j("a.sharesReddit").attr("href"), "url", a));
    $j("a.sharesReddit").attr("href", updateQueryStringParameter($j("a.sharesReddit").attr("href"), "title", encodeURIComponent(c)));
    $j("a.sharesTumblr").attr("href", updateQueryStringParameter($j("a.sharesTumblr").attr("href"), "u", encodeURIComponent(a)));
    $j("a.sharesTumblr").attr("href", updateQueryStringParameter($j("a.sharesTumblr").attr("href"), "t", encodeURIComponent(c)));
    $j("a.sharesGooglePlusOne").attr("href", updateQueryStringParameter($j("a.sharesGooglePlusOne").attr("href"), "url", a));
    $j("a.sharesStubleUpon").attr("href", updateQueryStringParameter($j("a.sharesStubleUpon").attr("href"), "url", a));
    $j("a.sharesStubleUpon").attr("href", updateQueryStringParameter($j("a.sharesStubleUpon").attr("href"), "title", encodeURIComponent(c)));
    $j("a.sharesBlogger").attr("href", updateQueryStringParameter($j("a.sharesBlogger").attr("href"), "u", a));
    $j("a.sharesBlogger").attr("href", updateQueryStringParameter($j("a.sharesBlogger").attr("href"), "n", encodeURIComponent(c)))
};
