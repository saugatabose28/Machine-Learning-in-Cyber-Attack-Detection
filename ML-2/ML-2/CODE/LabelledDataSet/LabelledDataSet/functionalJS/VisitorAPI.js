var visitor = new Visitor("adobemcspb");
visitor.server = "adobemcspb.b.sc.omtrdc.net";

/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

 Adobe Visitor API for JavaScript version: 1.0.2
 Copyright 1996-2013 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function Visitor(l) {
    var a = this;
    a.version = "1.0.2";
    var f = window;
    f.s_c_in || (f.s_c_il = [], f.s_c_in = 0);
    a._c = "Visitor";
    a._il = f.s_c_il;
    a._in = f.s_c_in;
    a._il[a._in] = a;
    f.s_c_in++;
    var i = f.document, g = f.B;
    g || (g = null);
    var j = f.C;
    j || (j=!0);
    var k = f.A;
    k || (k=!1);
    a.u = function() {
        var a;
        !a && f.location && (a = f.location.hostname);
        if (a)
            if (/^[0-9.]+$/.test(a))
                a = "";
            else {
                var b = a.split("."), d = b.length - 1, e = d - 1;
                1 < d && 2 >= b[d].length && 0 > ",am,aq,ax,cc,cf,cg,ch,cv,cz,de,dj,dk,eu,fm,fo,ga,gd,gf,gl,gm,gq,gs,gw,hm,li,lu,md,mh,mp,mq,ms,ne,nl,nu,pm,si,sk,sm,sr,su,tc,td,tf,tg,tk,tv,va,vg,vu,wf,yt,".indexOf("," +
                b[d] + ",") && e--;
                if (0 < e)
                    for (a = ""; d >= e;)
                        a = b[d] + (a ? "." : "") + a, d--
            }
        return a
    };
    a.cookieRead = function(a) {
        var b = (";" + i.cookie).split(" ").join(";"), d = b.indexOf(";" + a + "="), e = 0 > d ? d: b.indexOf(";", d + 1);
        return 0 > d ? "" : decodeURIComponent(b.substring(d + 2 + a.length, 0 > e ? b.length : e))
    };
    a.cookieWrite = function(c, b, d) {
        var e = a.cookieLifetime, h, b = "" + b, e = e ? ("" + e).toUpperCase(): "";
        d && "SESSION" != e && "NONE" != e ? (h = "" != b ? parseInt(e ? e : 0) : - 60) ? (d = new Date, d.setTime(d.getTime() + 1E3 * h)) : 1 == d && (d = new Date, h = d.getYear(), d.setYear(h + 2 + (1900 >
        h ? 1900 : 0))) : d = 0;
        return c && "NONE" != e ? (i.cookie = c + "=" + encodeURIComponent(b) + "; path=/;" + (d ? " expires=" + d.toGMTString() + ";" : "") + (a.l ? " domain=" + a.l + ";" : ""), a.cookieRead(c) == b) : 0
    };
    a.d = g;
    a.j = function(a, b) {
        try {
            "function" == typeof a ? a.apply(f, b) : a[1].apply(a[0], b)
        } catch (d) {}
    };
    a.w = function(c, b) {
        b && (a.d == g && (a.d = {}), void 0 == a.d[c] && (a.d[c] = []), a.d[c].push(b))
    };
    a.r = function(c, b) {
        if (a.d != g) {
            var d = a.d[c];
            if (d)
                for (; 0 < d.length;)
                    a.j(d.shift(), b)
        }
    };
    a.e = g;
    a.v = function(c, b, d) {
        var e = i.getElementsByTagName("HEAD")[0],
        h = i.createElement("SCRIPT");
        h.type = "text/javascript";
        h.setAttribute("async", "async");
        h.src = b;
        e.firstChild ? e.insertBefore(h, e.firstChild) : e.appendChild(h);
        a.e == g && (a.e = {});
        a.e[c] = setTimeout(d, a.loadTimeout)
    };
    a.s = function(c) {
        a.e != g && a.e[c] && (clearTimeout(a.e[c]), a.e[c] = 0)
    };
    a.o = k;
    a.p = k;
    a.isAllowed = function() {
        if (!a.o && (a.o = j, a.cookieRead(a.cookieName) || a.cookieWrite(a.cookieName, "T", 1)))
            a.p = j;
        return a.p
    };
    a.b = g;
    a.q = k;
    a.h = function() {
        if (!a.q) {
            a.q = j;
            var c = a.cookieRead(a.cookieName), b, d, e, h, f = new Date;
            if (c &&
            "T" != c) {
                c = c.split("|");
                1 == c.length%2 && c.pop();
                for (b = 0; b < c.length; b += 2)
                    if (d = c[b].split("-"), e = d[0], h = c[b + 1], d = 1 < d.length ? parseInt(d[1]) : 0, e && h && (!d || f.getTime() < 1E3 * d))
                        a.c(e, h, 1), 0 < d && (a.b["expire" + e] = d)
                    }
            if (!a.a("MCVID") && (c = a.cookieRead("s_vi")))
                c = c.split("|"), 1 < c.length && 0 <= c[0].indexOf("v1") && (h = c[1], b = h.indexOf("["), 0 <= b && (h = h.substring(0, b)), h && h.match(/^[0-9a-fA-F\-]+$/) && a.c("MCVID", h))
        }
    };
    a.z = function() {
        var c = "", b, d;
        for (b in a.b)
            !Object.prototype[b] && a.b[b] && "expire" != b.substring(0, 6) && (d = a.b[b],
            c += (c ? "|" : "") + b + (a.b["expire" + b] ? "-" + a.b["expire" + b] : "") + "|" + d);
        a.cookieWrite(a.cookieName, c, 1)
    };
    a.a = function(c) {
        return a.b != g ? a.b[c] : g
    };
    a.c = function(c, b, d) {
        a.b == g && (a.b = {});
        if (!d && b && (!a.b[c] || a.b[c] != b))
            if ("MCVID" == c || "MCGDV" == c || "MCGDC" == c)
                a.c("MCGID", g, j), a.c("MCGLH", g, j);
        a.b[c] = b;
        d || a.z()
    };
    a.i = function(c, b) {
        var d = new Date;
        d.setTime(d.getTime() + 1E3 * b);
        a.b == g && (a.b = {});
        a.b["expire" + c] = Math.floor(d.getTime() / 1E3)
    };
    a.t = function(a) {
        if (a && ("object" == typeof a && (a = a.visitorID ? a.visitorID : a.id ? a.id : a.uuid ?
        a.uuid : "" + a), !a || "NOTARGET" == a ||!a.match(/^[0-9a-fA-F\-]+$/)))
            a = "";
        return a
    };
    a.k = function(c, b) {
        var d, e = 86400, h = "N", f = "N";
        a.s(c);
        d = a.a(c);
        d || (d = a.t(b)) && a.c(c, d);
        "object" == typeof b && ("MCVID" == c ? (void 0 != b.ttl && b.ttl && (e = parseInt(b.ttl)), a.i("MCGDV", e), a.i("MCGDC", e), b.dpids && (b.dpids.MCVID && (h = b.dpids.MCVID), b.dpids.MCCUSTID && (f = b.dpids.MCCUSTID)), a.c("MCGDV", h), a.c("MCGDC", f)) : "MCGID" == c && (void 0 != b.id_sync_ttl && b.id_sync_ttl && (e = parseInt(b.id_sync_ttl)), a.i(c, e), a.i("MCGLH", e), b.dcs_region && a.c("MCGLH",
        b.dcs_region)));
        a.r(c, [d])
    };
    a.f = g;
    a.m = function(c, b, d) {
        if (a.isAllowed()) {
            a.h();
            var e = a.a(c);
            if (!e || "MCVID" == c && (!a.a("MCGDV") ||!a.a("MCGDC"))) {
                if (a.f == g || void 0 == a.f[c])
                    a.f == g && (a.f = {}), a.f[c] = j, a.v(c, b, function() {
                        if (!a.a(c)) {
                            var b = "";
                            if ("MCVID" == c) {
                                var d = b = "", e, f;
                                f = 8;
                                var g = 4;
                                for (e = 0; 16 > e; e++)
                                    f = Math.floor(Math.random() * f), b += "0123456789ABCDEF".substring(f, f + 1), f = Math.floor(Math.random() * g), d += "0123456789ABCDEF".substring(f, f + 1), f = g = 16;
                                    b = b + "-" + d
                            }
                            a.k(c, b)
                        }
                    });
                a.w(c, d)
            } else 
                return e
        }
        return ""
    };
    a.setAnonymousVisitorID =
    function(c) {
        a.h();
        a.k("MCVID", c)
    };
    a.getAnonymousVisitorID = function(c) {
        var b = a.server;
        a.loadSSL && a.serverSecure && (b = a.serverSecure);
        return a.m("MCVID", "http" + (a.loadSSL ? "s" : "") + "://" + b + "/id?callback=s_c_il%5B" + a._in + "%5D.setAnonymousVisitorID", c)
    };
    a._setGlobalVisitorID = function(c) {
        a.k("MCGID", c)
    };
    a.getGlobalVisitorID = function(c) {
        a.h();
        var b = "", d, e = a.a("MCGDV") ? parseInt(a.a("MCGDV")): 0, f = a.getAuthenticatedVisitorID(), g = a.a("MCGDC") ? parseInt(a.a("MCGDC")): 0, i = a.globalServer;
        if ((d = a.getAnonymousVisitorID(function() {
            if (a.isGlobalEnabled()) {
                var b =
                a.getGlobalVisitorID(c);
                c && b && a.j(c, [b])
            } else 
                c && a.j(c, [0])
        })) && (e || g))
            a.loadSSL && a.globalServerSecure && (i = a.globalServerSecure), b = "http" + (a.loadSSL ? "s" : "") + "://" + i + "/id?d_rtbd=json" + (e ? "&dpuuid=" + e + "%01" + d : "") + (g && f ? "&dpuuid=" + g + "%01" + encodeURIComponent(f) : "") + "&d_cb=s_c_il%5B" + a._in + "%5D._setGlobalVisitorID", b = a.m("MCGID", b, c);
        return b
    };
    a.getGlobalLocationHint = function() {
        return a.isAllowed() ? (a.h(), a.a("MCGLH")) : 0
    };
    a.isGlobalEnabled = function() {
        var c = a.a("MCGDV") ? parseInt(a.a("MCGDV")): 0, b = a.a("MCGDC") ?
        parseInt(a.a("MCGDC")): 0;
        return a.a("MCVID")&&!c&&!b ? k : j
    };
    a.setAuthenticatedVisitorID = function(c) {
        a.g = c
    };
    a.getAuthenticatedVisitorID = function() {
        return a.g
    };
    a.n = function() {
        return {
            id: a.g ? a.g: a.a("MCVID"),
            type: a.g ? Visitor.ID_TYPE_AUTHENTICATED: Visitor.ID_TYPE_ANONYMOUS
        }
    };
    a.getVisitorID = function(c) {
        var b = a.n();
        return b.id ? (a.getAnonymousVisitorID(), b.id) : a.getAnonymousVisitorID(c)
    };
    a.getVisitorIDType = function() {
        return a.n().type
    };
    a.setup = function() {
        a.getAnonymousVisitorID();
        a.getGlobalVisitorID()
    };
    a.namespace =
    l;
    a.cookieName = "AMCV_" + l;
    a.l = a.u();
    a.loadSSL = 0 <= f.location.protocol.toLowerCase().indexOf("https");
    a.loadTimeout = 500;
    a.globalServer = "dpm.demdex.net"
}
Visitor.ID_TYPE_ANONYMOUS = 0;
Visitor.ID_TYPE_AUTHENTICATED = 1;
Visitor.getInstance = function(l) {
    var a, f = window.s_c_il, i;
    if (f)
        for (i = 0; i < f.length; i++)
            if ((a = f[i]) && "Visitor" == a._c && a.namespace == l)
                return a;
    return new Visitor(l)
};
