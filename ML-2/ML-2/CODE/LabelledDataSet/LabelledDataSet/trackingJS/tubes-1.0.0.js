if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(d) {
        var e = this.length>>>0;
        var f = Number(arguments[1]) || 0;
        f = (f < 0) ? Math.ceil(f) : Math.floor(f);
        if (f < 0) {
            f += e
        }
        for (; f < e; f++) {
            if (f in this && this[f] === d) {
                return f
            }
        }
        return - 1
    }
}
function mgCreateCookie(b, e, a, f, d) {
    var c = b + "=" + escape(e) + ";";
    if (a) {
        if (a instanceof Date) {
            if (isNaN(a.getTime())) {
                a = new Date()
            }
        } else {
            a = new Date(new Date().getTime() + parseInt(a) * 1000 * 60 * 60 * 24)
        }
        c += "expires=" + a.toGMTString() + ";"
    }
    if (f) {
        c += "path=" + f + ";"
    }
    if (d) {
        c += "domain=" + d + ";"
    }
    document.cookie = c
}
function mgGetCookie(b) {
    var c = new RegExp("(?:^" + b + "|;s*" + b + ")=(.*?)(?:;|$)", "g");
    var a = c.exec(document.cookie);
    return (a === null) ? null : a[1]
}
var mgPerformanceTimingSettings = null;
function init() {
    var c = "performance_timing";
    var e = mgGetCookie(c);
    var a = [];
    if (typeof e != "undefined" && e) {
        a = e.split(/\|/)
    }
    if (a.indexOf(timing_pageType)==-1) {
        var d = {
            2: 981,
            9: 991,
            15: 1001,
            16: 971,
            32: 1011,
            35: 1021,
            145: 1031,
            149: 1041
        };
        timing_appId = d[timing_appId] ? d[timing_appId] : timing_appId;
        mgPerformanceTimingSettings = {
            appid: timing_appId,
            productid: timing_productId,
            action: timing_pageType,
            sampling: 35
        };
        if (typeof timing_interval != "undefined" && timing_interval !== null) {
            mgPerformanceTimingSettings.interval = parseInt(timing_interval)
        }
        a.push(timing_pageType);
        mgCreateCookie(c, a.join("|"), false, "/")
    }
}
init();
