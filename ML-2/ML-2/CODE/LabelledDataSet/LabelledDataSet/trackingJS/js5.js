/* From: production-mt-wfe-56-7-use1 : 31810 */
huff.unit("desktop_stream", function(a) {
    huff.use("jquery", "fiji_socket", "conf", function(j, n, p) {
        var g = "hp-notification:";
        var m = j(".hp_desktop_alerts");
        var e = 60 * 10 * 1000;
        var q = function() {
            var t = new RegExp("^" + g);
            for (var s = 0; s < localStorage.length; s++) {
                var r = localStorage.key(s);
                var c = Date.now() - e;
                if (t.test(r) && parseInt(localStorage(r), 10) < c) {
                    localStorage.removeItem(r)
                }
            }
        };
        var d = function(c) {
            var r = g + c;
            if (typeof(Storage) !== "undefined") {
                if (localStorage.getItem(r)) {
                    return true
                } else {
                    localStorage.setItem(r, Date.now());
                    return false
                }
                purgeOldMessage()
            }
        };
        var l = function() {
            return Math.random() * 500 + 10
        };
        var i = function(c) {
            window.setTimeout(function() {
                h(c)
            }, l())
        };
        var h = function(r) {
            if (!d(r.headline)) {
                var t = function() {
                    window.open(r.entry_url || "http://www.huffingtonpost.com", "_blank")
                };
                var c = {
                    icon: r.image_url || "http://s.huffpost.com/images/H_logo_96px.png",
                    tag: r.headline
                };
                var s = new Notification(r.headline, c);
                s.onclick = t
            }
        };
        var f = function() {
            p.get("site_blog_id", function(c) {
                var r = "news-" + c;
                var s = "0";
                n.subscribe(r, s, false, i)
            })
        };
        var b = function() {
            if (Notification.permission === "granted") {
                p.get("websocket/open", function(c) {
                    if (c) {
                        f()
                    } else {
                        n.onopen(f)
                    }
                });
                return true
            } else {
                return false
            }
        };
        var k = function() {
            m.hide();
            Notification.requestPermission(b)
        };
        var o = function() {
            if ("Notification" in window) {
                if (!b()) {
                    var c = j(".hp_desktop_alerts");
                    c.parent().removeClass("hidden");
                    c.click(k)
                }
            }
        };
        o()
    })
});

/* From: production-mt-wfe-56-7-use1 : 31810 */
/* 7926f30f9fc7acf803f8ecc84650ac50ef058260 */
