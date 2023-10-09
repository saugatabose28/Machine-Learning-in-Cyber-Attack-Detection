/* From: production-mt-wfe-50-87-use1 : 14876 */
huff.unit("front/bignews", function(b) {
    var a = this;
    huff.use("jquery", function(d) {
        a.update = function(f) {
            var e = d("#big_news_update");
            if (e) {
                d.get("/topnav/" + f + ".html", function(g) {
                    if (e.html().length !== g.length) {
                        e.fadeOut(function() {
                            e.html(g).fadeIn();
                            huff.emit("bignews/updated", f)
                        })
                    }
                })
            }
        };
        var c;
        a.interval = function(e, f) {
            if (c) {
                clearInterval(c)
            }
            c = setInterval(function() {
                a.update(e)
            }, f * 1000)
        };
        a.load = function(f) {
            var e = d("#bignews-ajax-loader-" + f);
            if (e) {
                d("#morelink_" + f).hide();
                e.show();
                d.post("get_more_bignews.php", {
                    vertical: f
                }, function(g) {
                    e.html(g);
                    a.close(f)
                })
            }
        };
        a.close = function(e) {
            d(".close_more_bignews").click(function() {
                d(this).parent().hide();
                d("#morelink_" + e).show()
            })
        };
        b(a)
    })
});

/* From: production-mt-wfe-50-87-use1 : 14876 */
/* 7926f30f9fc7acf803f8ecc84650ac50ef058260 */
