/*!CK:2265274087!*/
/*1415599373,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["v61ok"]);
}

__d("ChatTabTypeaheadDataSource", ["MercuryConstants", "MercuryTypeaheadDataSource"], function(a, b, c, d, e, f, g, h) {
    for (var i in h)
        if (h.hasOwnProperty(i))
            k[i] = h[i];
    var j = h === null ? null: h.prototype;
    k.prototype = Object.create(j);
    k.prototype.constructor = k;
    k.__superConstructor__ = h;
    function k(l) {
        "use strict";
        l = l || {};
        l.maxResults = g.MercuryTypeaheadConstants.COMPOSER_CHATTAB_MAX;
        h.call(this, l);
        this.$ChatTabTypeaheadDataSource0 = true;
    }
    k.prototype.buildData = function(l) {
        "use strict";
        var m = l;
        if (!this.$ChatTabTypeaheadDataSource0)
            m = l.filter(function(n) {
                var o = j.getEntry.call(this, n);
                return o.render_type != g.MercuryTypeaheadConstants.THREAD_TYPE;
            }, this);
        return j.buildData.call(this, m);
    };
    k.prototype.setShowThreads = function(l) {
        "use strict";
        this.$ChatTabTypeaheadDataSource0 = l;
    };
    e.exports = k;
}, null);
