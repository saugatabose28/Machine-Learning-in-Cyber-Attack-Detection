function udm_(a) {
    var b = "comScore=", c = document, d = c.cookie, e = "", f = "indexOf", g = "substring", h = "length", i = 2048, j, k = "&ns_", l = "&", m, n, o, p, q = window, r = q.encodeURIComponent || escape;
    if (d[f](b) + 1)
        for (o = 0, n = d.split(";"), p = n[h]; o < p; o++)
            m = n[o][f](b), m + 1 && (e = l + unescape(n[o][g](m + b[h])));
    a += k + "_t=" + + (new Date) + k + "c=" + (c.characterSet || c.defaultCharset || "") + e, a[h] > i && a[f](l) > 0 && (j = a[g](0, i - 8).lastIndexOf(l), a = (a[g](0, j) + k + "cut=" + r(a[g](j + 1)))[g](0, i)), c.images ? (m = new Image, q.ns_p || (ns_p = m), m.src = a) : c.write("<", "p", "><", 'img src="', a, '" height="1" width="1" alt="*"', "><", "/p", ">")
}
typeof _comscore == "undefined" && (_comscore = []), function() {
    var a = "length", b = self, c = b.encodeURIComponent ? encodeURIComponent: escape, d = ".scorecardresearch.com", e = Math, f = "script", g = "width", h = /c2=(\d*)&/, i, j = function(b) {
        if (!!b) {
            var e, f = [], g, h = 0, i, j, k = "";
            for (var l in b) {
                g = typeof b[l];
                if (g == "string" || g == "number")
                    f[f[a]] = l + "=" + c(b[l]), l == "c2" ? k = b[l] : l == "c1" && (h = 1)
                }
            if (f[a] <= 0 || k == "")
                return;
            j = b.options || {}, j.d = j.d || document;
            if (typeof j.url_append == "string") {
                i = j.url_append.replace(/&amp;/, "&").split("&");
                for (var l = 0, m = i[a], n; l < m; l++)
                    n = i[l].split("="), n[a] == 2 && (f[f[a]] = n[0] + "=" + c(n[1]))
                }
            e = ["http", j.d.URL.charAt(4) == "s" ? "s://sb": "://b", d, "/p?", h ? "": "c1=2&", f.join("&").replace(/&$/, "")], udm_(e.join(""))
        }
    }, k = function(b) {
        b = b || _comscore;
        for (var c = 0, d = b[a]; c < d; c++)
            j(b[c]);
        b = _comscore = []
    };
    k(), (i = b.COMSCORE) ? (i.purge = k, i.beacon = j) : COMSCORE = {
        purge: k,
        beacon: j
    }
}()
