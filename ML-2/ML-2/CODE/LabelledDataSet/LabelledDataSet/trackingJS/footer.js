var bodyHeight = parseInt($j("body").css("height"));
var boxThWidth = parseInt($j("#boxThSel").css("width"));
var windowWidth, boxFade, marginValue;
function fadeObject(a, b) {
    $j(a).animate({
        opacity: b
    }, 1000)
}
function ignoreCloseThAlert(a) {
    setCookie(a, 1);
    fadeOut("#boxThSel", 0);
    fadeOut("#bkgContainer", 0);
    $j("#boxThSel").css("display", "none");
    $j("#bkgContainer").css("display", "none")
}
function fadeOut(a, b) {
    fadeObject(a, b);
    return false
}
function positionBox(a) {
    if ($j(window).width() > 965) {
        windowWidth = $j(window).width();
        $j("#boxThSel").css("margin-left", (windowWidth / 2) - (boxThWidth - a) + "px")
    }
}
$j(document).mouseup(function(a) {
    if ($j("#boxThSel").is(":visible")) {
        if ($j("#boxThSel").has(a.target).length == 0) {
            ignoreCloseThAlert()
        }
    }
});
var hasRun = false;
function ll() {
    if (hasRun) {
        return 
    }
    hasRun = true;
    loadThumbs()
}
function PerformanceListener() {
    this.loadEventEnd = function(a) {
        setTimeout(function() {
            ll()
        }, 5)
    }
}
var t = new Performance(new PerformanceListener()), llTimeout = 15000;
if (typeof performance == "undefined") {
    llTimeout = 1000
}
setTimeout(function() {
    ll()
}, llTimeout);
function loadThumbsLazyLoad() {
    var a = parseInt(screensize) < largeVersionMinimumScreenSize ? "smallthumb": "mediumthumb";
    $j("img[data-smallthumb]:lt(11)").each(function(b) {
        $this = $j(this);
        if ($this.attr("src") != $this.data(a)) {
            $this.attr("src", $this.data(a))
        }
    })
}
loadThumbsLazyLoad();
function loadThumbs() {
    var a = parseInt(screensize) < largeVersionMinimumScreenSize ? "smallthumb": "mediumthumb";
    $j("img[data-smallthumb]").each(function(b) {
        $this = $j(this);
        if ($this.attr("src") != $this.data(a)) {
            $this.attr("src", $this.data(a))
        }
    })
}
$j(window).resize(function() {
    try {
        sendMessageToChildren()
    } catch (a) {}
});
handleChildResponse = function(b) {
    var a = b.data;
    if (a == "ad_loaded") {
        sendMessageToChildren()
    } else {
        ""
    }
};
var addListener = window.addEventListener || window.attachEvent;
addListener("message", handleChildResponse, false);
function sendMessageToChildren() {
    var a = document.getElementById("main_top_right");
    a.contentWindow.postMessage({
        current_width: $j(window).width(),
        cutoff_width: "1600"
    }, "*")
}
if (top !== self&&!top.location.href.match(/^(http|https):\/\/(www.)*pornmd.com/ig)) {
    top.location.href = self.location.href
};
