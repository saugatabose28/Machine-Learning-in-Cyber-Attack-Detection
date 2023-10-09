var currentTitle, currentDuration, currentRating, currentThumb, thumbScroll = 0;
$j(".linkWrapper").mouseenter(function() {
    $j(this).children(".borderLink ").addClass("hoverPL");
    $j(this).children(".user-playlist .playAllLink, .user-playlist .viewPlaylistLink").show()
}).mouseleave(function() {
    $j(this).children(".borderLink ").removeClass("hoverPL");
    $j(this).children(".user-playlist .playAllLink, .user-playlist .viewPlaylistLink").hide()
});
$j(".container").on("mouseenter", ".videoblock .wrap", function() {
    if (disablePlaylistPlusButon == "false") {
        $j(this).children(".add-to-playlist-icon").show()
    }
}).on("mouseleave", ".videoblock .wrap", function() {
    if ($j(this).find("button.open-playlist-link.active").length > 0) {
        $j(this).find("button.open-playlist-link.active").show()
    } else {
        $j(this).children(".add-to-playlist-icon").hide()
    }
});
var menu = $j(".add-to-playlist-menu"), playlist_menu_fading = false;
function playlist_menu_fadeout(a) {
    if (playlist_menu_fading) {
        playlist_menu_fading = clearTimeout(playlist_menu_fading) && false
    }
    playlist_menu_fading = setTimeout(function() {
        a.closest(".add-to-playlist-menu").fadeOut(300)
    }, 2000)
}
$j(".container").on("click", ".open-playlist-link", function() {
    var a = $j(this), c = a.offset(), b = $j(".add-to-playlist-menu");
    vKeyAddVideo = a.attr("data-rel");
    currentTitle = a.parent().next().find(".title").text();
    currentDuration = a.parent().next().find(".duration").text();
    currentRating = parseInt((a.parent().next().find(".value").text())) / 20;
    currentThumb = a.parent().prev().find("img").attr("data-smallthumb");
    playlist_menu_fading = clearTimeout(playlist_menu_fading) && false;
    b.css({
        top: Math.round(c.top) + 18,
        left: Math.round(c.left)
    });
    var d = b.find(".overview").height();
    b.find(".viewport").css("height", d);
    if ($j(".add-to-playlist-menu .custom-playlist > li").size() > 0) {
        b.find("#scrollParent").css({
            "border-bottom": "1px solid #313131"
        })
    } else {
        b.find(".handle").hide()
    }
    if (!thumbScroll) {
        $j("#scrollThumbs").slimscroll({
            height: "auto",
            color: "#F39000",
            size: "7px",
            alwaysVisible: true,
            railVisible: true,
            railOpacity: 1,
            railColor: "#222",
            distance: 0,
            opacity: 1,
            railClass: "track3",
            barClass: "handle3"
        });
        thumbScroll = 1
    }
});
$j(document).mouseup(function(c) {
    var b = $j(".add-to-playlist-menu"), a = $j(c.target);
    if (a.is("button.open-playlist-link")) {
        if (a.hasClass("active")) {
            a.removeClass("active");
            b.hide()
        } else {
            if ($j("button.open-playlist-link.active").length < 0) {
                a.addClass("active");
                $j(".quicklick, .custom-playlist li").removeClass("added");
                b.show()
            } else {
                $j("button.open-playlist-link.active").removeClass("active");
                $j(".add-to-playlist-icon").hide();
                a.addClass("active");
                a.parent().show();
                $j(".quicklick, .custom-playlist li").removeClass("added");
                b.stop(true, true).show()
            }
        }
    } else {
        if (a.is("#options")) {
            (a.hasClass("active")) ? a.removeClass("active") : a.addClass("active")
        } else {
            $j("button.open-playlist-link.active").removeClass("active");
            $j(".add-to-playlist-icon").hide()
        }
    }
    if (b.has(a).length === 0&&!a.is(".playlist-trigger")) {
        b.hide()
    }
    if ($j(".playlist-option-menu").has(a).length === 0&&!a.is("#options span")&&!a.is("#options")) {
        $j(".playlist-option-menu").hide();
        $j("#options").removeClass("active")
    }
});
$j("#commentPlaylist").click(function() {
    var a = $j("#videoPlaylist li").length <= 8 ? 1000: 500;
    $j("html, body").animate({
        scrollTop: $j(".videopagecontainer.view-mode").offset().top
    }, a)
});
