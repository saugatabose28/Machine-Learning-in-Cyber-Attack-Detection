/* From: production-mt-wfe-55-92-use1 : 6324 */
huff.unit("conf", function(c) {
    var d = {}, a = {}, b = this;
    b.set = function(g, h) {
        if ("object" === typeof g) {
            for (var j in g) {
                b.set(j, g[j])
            }
        } else {
            d[g] = h;
            huff.emit("conf/set", g, h);
            if (a[g]) {
                for (var f = 0, e = a[g].length; f < e; f++) {
                    a[g][f](h)
                }
            }
        }
        return b
    };
    b.get = function() {
        arguments = Array.prototype.slice.call(arguments, 0);
        if ("function" === typeof arguments[arguments.length - 1]) {
            var k = arguments.pop(), j = arguments.length, e = [], g = function(l) {
                return function(i) {
                    e[l] = i;
                    --j === 0 && k.apply(null, e)
                }
            };
            for (var h = 0, f = arguments.length; h < f; h++) {
                d[arguments[h]] === undefined ? (a[arguments[h]] || (a[arguments[h]] = [])).push(g(h)) : g(h)(d[arguments[h]])
            }
            return b
        } else {
            if (arguments.length === 1) {
                return d[arguments[0]]
            }
            var e = {};
            for (var h = 0, f = arguments.length; h < f; h++) {
                e[arguments[h]] = d[arguments[h]]
            }
            return e
        }
    };
    c(b)
});

/* From: production-mt-wfe-55-92-use1 : 6324 */
/* a67cccb80cc3039a0690e1b0fd4d00024bd9b3fa */
