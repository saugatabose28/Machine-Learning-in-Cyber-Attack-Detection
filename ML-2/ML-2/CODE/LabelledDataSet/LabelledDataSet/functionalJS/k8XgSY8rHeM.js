/*!CK:4025299430!*/
/*1415599373,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["EvZOb"]);
}

__d("MercuryTypeaheadDataSource", ["CurrentUser", "DataSource", "MercuryParticipantTypes", "OrderedFriendsList", "ShortProfiles"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = [], m = {}, n = {}, o = {};
    for (var p in h)
        if (h.hasOwnProperty(p))
            r[p] = h[p];
    var q = h === null ? null: h.prototype;
    r.prototype = Object.create(q);
    r.prototype.constructor = r;
    r.__superConstructor__ = h;
    function r(s) {
        "use strict";
        s = s || {};
        s.kanaNormalization = true;
        h.call(this, s);
    }
    r.prototype.dirty = function() {
        "use strict";
        this.$MercuryTypeaheadDataSource0 = l;
        this.localCache = n;
        this.queryCache = m;
        this.queryIDs = o;
        return this;
    };
    r.prototype.bootstrap = function() {
        "use strict";
        if (Object.getOwnPropertyNames(this.localCache).length !== 0)
            return;
        k.fetchAll().then(function() {
            this.$MercuryTypeaheadDataSource1();
        }.bind(this));
    };
    r.prototype.$MercuryTypeaheadDataSource1 = function() {
        "use strict";
        var s = this.value, t = k.getCachedProfileIDs(), u = t.filter(function(w) {
            var x = k.getNow(w);
            return (w == g.getID() || x.type === i.FRIEND);
        }), v = u.map(function(w) {
            var x = k.getNow(w), y = w == g.getID() ? i.FRIEND: x.type, z = [x.additionalName, x.alternateName].concat(x.searchTokens || []).join(' ');
            return {
                uid: w,
                index: j.getActiveRank(w),
                text: x.name,
                tokens: z,
                localized_text: x.name,
                additional_text: x.additionalName,
                photo: x.thumbSrc,
                type: y
            };
        });
        if (v.length)
            this.addEntries(v);
        this.value = s;
        if (s)
            this.query(s);
    };
    r.prototype.setEntry = function(s, t) {
        "use strict";
        this.$MercuryTypeaheadDataSource0[s] = t;
    };
    r.prototype.getEntry = function(s) {
        "use strict";
        return this.$MercuryTypeaheadDataSource0[s] || null;
    };
    e.exports = r;
}, null);
