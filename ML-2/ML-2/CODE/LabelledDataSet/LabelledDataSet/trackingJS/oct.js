twttr = window.twttr || {}, twttr.conversion = function() {
    var t = "https://analytics.twitter.com/i/adsct?p_id=Twitter&p_user_id=0", e = "//t.co/i/adsct?p_id=Twitter&p_user_id=0";
    return {
        trackBase: function(t, e, n, i) {
            if (e && n) {
                var o = t + "&merch_id=" + encodeURIComponent(e);
                o += "&event=" + encodeURIComponent(n), i && (o += "&value=" + encodeURIComponent(i)), this.buildPixel(o)
            }
        },
        trackPidBase: function(t, e, n) {
            if (e) {
                var i = "undefined" != typeof n && n.tw_sale_amount ? encodeURIComponent(n.tw_sale_amount): 0, o = "undefined" != typeof n && n.tw_order_quantity ? encodeURIComponent(n.tw_order_quantity): 0, a = t + "&txn_id=" + encodeURIComponent(e) + "&tw_sale_amount=" + i + "&tw_order_quantity=" + o;
                this.buildPixel(a)
            }
        },
        track: function(n, i, o) {
            this.trackBase(t, n, i, o), this.trackBase(e, n, i, o)
        },
        trackPid: function(n, i) {
            this.trackPidBase(t, n, i), this.trackPidBase(e, n, i)
        },
        buildPixel: function(t) {
            var e = new Image;
            e.src = t
        }
    }
}();
