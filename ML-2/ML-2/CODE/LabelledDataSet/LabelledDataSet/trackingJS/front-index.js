$j(function() {
    if (window.canRunAds === undefined && window.shouldRun) {
        var b = document.createElement("a");
        b.href = $j(".ad_box iframe").attr("src");
        var a = getUri(adServer + "?" + b.hash.substring(1));
        $j('<div style="width:40%;float:right"><div style="width: 380px; margin: 0 auto; background-color: #111010; text-align: center;"><span style="display:block;padding-top:15px;padding-bottom:15px;font-size:11px;text-align:center;">Advertisement</span><iframe style="display:block;margin:0 auto;" width="315" height="300" frameborder="0" scrolling="no" src="http://' + a + '"></iframe><a style="display: block;margin: 10px 0;font-size: 11px;color: #fff;" href="http://www.pornhub.com/information#advertising">Ads By Traffic Junky</a></div></div>').insertAfter(".replacementDiv")
    }
    if (Math.floor(Math.random() * 100 + 1) <= 50) {
        $j("#js-popularPornstars").removeClass("hidden");
        $j("#js-popularCategories").remove()
    } else {
        $j("#js-popularCategories").removeClass("hidden");
        $j("#js-popularPornstars").remove()
    }
});
