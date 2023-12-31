if (!window.WRClickTaleOnReadyInvoked) {
    var WRWarn = "Copyright 2006-2014 ClickTale Ltd., US Patent and US Patent Pending", WRA, WRCU, WRD = document, WRCW, WRAu, WRs, WRK, WRBy, WRE = ".clicktale.net/", WRAH, WRk, WRBW, WRCV, WRB = [], WRt, ClickTaleCookieDomain, ClickTaleUnloadPause = 200, ClickTaleEventsMask = 511 - 128, ClickTaleFetchFrom, ClickTaleCookieExpiryDays = 365, ClickTaleUIDCookieName = "WRUID", ClickTaleIgnoreCookieName = "WRIgnore", WRBT, WRAX, WRDn = false, WRAE, WRAL, WRAM, WRAN, WRAO, WRBX = WRCe(), WRCX = false, WRCc = false, WRCf = false, WRC, WRCh = "", WRCd = false, WRCi = false, WRDF = false, WRDG = false, WRDH = false, WRDI = "", WRDJ = {}, WRDK = {}, WRClickTaleOnReadyInvoked = false, ClickTaleLog = WRDL, WRDf = "&", WRDg = "=";
    (function(a) {
        if (!window.ClickTaleCookieDomain) {
            if (a.search(/www\.\w+([\-]{1}\w+)*\.\w+/i) == 0) {
                ClickTaleCookieDomain = a.substring(4, a.length)
            }
        }
    })(WRD.domain);
    WRDM();
    WRDN();
    WRAv();
    WRDL("recorder", "loaded");
    WRAw("note1: entering debug mode, ClickTale script is installed");
    if (typeof WRInitTime == "undefined") {
        var WRInitTime = (new Date()).getTime();
        WRAw("warning1: top ClickTale script is missing in the page")
    }
    if (!WRBW) {
        WRBW = WRBY()
    }
    if (!WRk) {
        WRk = WRBW.a
    }
    var WRCJ = WRCK();
    WRt = (WRD.compatMode == "BackCompat");
    WRs = (WRt ? WRD.body : WRD.documentElement);
    if (WRBW) {
        WRCV = (window.ClickTaleSettings && typeof ClickTaleSettings.CookieName != "undefined") ? ClickTaleSettings.CookieName : "__CT_Data";
        if (window.ClickTaleSettings && window.ClickTaleSettings.SubCookieSeperator) {
            WRDf = window.ClickTaleSettings.SubCookieSeperator
        }
        if (window.ClickTaleSettings && window.ClickTaleSettings.SubCookieEquator) {
            WRDg = window.ClickTaleSettings.SubCookieEquator
        }
        if (WRCV) {
            WRCP(WRCV, "gpv", ClickTaleCookieExpiryDays)
        }
    }
    if (window.ClickTaleIncludedOnWindowLoad) {
        window.ClickTaleIncludedOnDOMReady = true
    }
    if (!window.ClickTaleIncludedOnDOMReady) {
        if (WRD.addEventListener) {
            WRD.addEventListener("DOMContentLoaded", WRondomload, false)
        } else {
            if (WRBW && WRBW.t == WRBW.IE) {
                WRD.write('<script id="ClickTaleDefer" defer="defer" src=//:><\/script>');
                (function(a) {
                    if (a) {
                        a.onreadystatechange = function() {
                            if (this.readyState == "complete") {
                                WRondomload()
                            }
                        }
                    }
                })(WRD.getElementById("ClickTaleDefer"))
            }
        }
    } else {
        WRondomload()
    }
    if (!window.ClickTaleIncludedOnWindowLoad) {
        WRl(window, "load", WRc)
    } else {
        WRc()
    }
}
function WRCK() {
    var a = document.getElementsByTagName("script");
    if (a.length) {
        var b = a[a.length - 1];
        if (b.src) {
            return b.src
        }
    }
    return false
}
function ClickTale(d, e, a) {
    function c() {
        if (typeof ClickTaleScriptSource != "undefined" && ClickTaleScriptSource !== null) {
            if (typeof ClickTaleScriptSource == "string") {
                return ClickTaleScriptSource
            } else {
                return WRE
            }
        }
        var g = a.substr(0, 3) == "www" ? a: "www";
        if (WRCJ) {
            var f = ["http://s.clicktale.net/", "https://s2.clicktale.net/", "https://clicktale.pantherssl.com/", "https://clicktalecdn.sslcs.cdngc.net/" + g + "/"];
            for (var h = 0; h < f.length; h++) {
                if (WRCJ.substr(0, f[h].length) == f[h]) {
                    return f[h]
                }
            }
        }
        if (typeof ClickTaleSSL != "undefined" && ((ClickTaleSSL == 1 && location.protocol == "https:") || ClickTaleSSL == 2)) {
            return "https://cdnssl.clicktale.net/" + g + "/"
        } else {
            return "http://cdn.clicktale.net/" + g + "/"
        }
    }
    if (WRAX) {
        WRAw("CT: Monitoring has already started");
        return 
    }
    if (ClickTaleIsPlayback()) {
        return 
    }
    if (e == undefined) {
        e = 1
    }
    WRC = e;
    WRA = d;
    if (!a) {
        a = "www"
    }
    WRCU = a;
    WRAw("note2: preparing to record (ver " + 14 + "." + 17 + ") for project id " + d + " and partition " + a);
    if (e == 1) {
        WRAw("note3: recording all visitors to this page (" + e + ")")
    } else {
        WRAw("note3: recording approximately 1 of every " + Math.ceil(1 / e) + " visitors to this page (" + e + ")")
    }
    if (!WRk) {
        WRAw("warning2: the current browser is not supported");
        return 
    }
    if (location.protocol == "file:") {
        WRAw("warning3: the current protocol is not supported");
        return 
    }
    var b = "_" + WRA + "_" + WRCU;
    if (WRCV) {
        WRCP(WRCV, "apv" + b, ClickTaleCookieExpiryDays)
    }
    if (!ClickTaleIgnoreCookieName ||!ClickTaleUIDCookieName ||!WRCV) {
        WRAw("warning9: can't record when cookies are not specified");
        return 
    }
    if (WRi(ClickTaleIgnoreCookieName)) {
        WRAw("warning6: the current machine/user is temporarily disabled for recording");
        return 
    }
    WRK = WRi(ClickTaleUIDCookieName);
    WRBy = false;
    if (WRK == null) {
        WRBy = true;
        if (Math.random() < e) {
            WRK = WRAY()
        } else {
            WRK = 0
        }
    }
    WRh(ClickTaleUIDCookieName, WRK, ClickTaleCookieExpiryDays);
    if (WRK == 0 || (WRi(ClickTaleUIDCookieName) == null && e != 1)) {
        WRAw("warning4: the current machine/user is disabled for recording");
        return 
    }
    WRAw("note3b: visitor id " + WRK);
    WRE = "http://" + a + WRE;
    if (typeof ClickTaleSSL != "undefined") {
        if ((ClickTaleSSL == 1 && location.protocol == "https:") || ClickTaleSSL == 2) {
            WRE = WRE.replace(/^http/, "https")
        }
    }
    if (!WRCX) {
        WRAH = c()
    }
    WRAX = true;
    WRDL("recorder", "initialized", {
        projectId: WRA,
        recordingRatio: WRC,
        partition: WRCU,
        version: ClickTaleGetVersion(),
        fetchFromUrl: ClickTaleFetchFrom,
        isSslDefined: !!window.ClickTaleSSL,
        userId: WRK,
        isLogical: WRCX
    });
    WRZ({
        a: "start",
        t: WRH()
    });
    if (WRCV) {
        WRCP(WRCV, "cpv" + b, ClickTaleCookieExpiryDays)
    }
    WRCb()
}
function WRCb() {
    if (!WRCc) {
        WRCc = true;
        var a = new Image();
        a.src = WRE + "i/" + WRA + ".gif?r=" + WRC + "&UID=" + WRK + (WRBy ? "&new" : "") + (WRBT ? "&as=1" : "") + (WRBW.m ? "&m=1" : "") + "&" + WRG();
        a.onerror = function() {
            a.onload = null;
            a.onerror = null;
            WRCc = false;
            WRAx()
        };
        a.onload = function() {
            a.onload = null;
            a.onerror = null;
            WRCc = false;
            WRF(a)
        }
    }
}
function ClickTaleDetectAgent() {
    return WRBg(navigator.userAgent)
}
function ClickTaleIsPlayback() {
    if (typeof ClickTaleContext == "object") {
        return true
    }
    try {
        return parent && parent != window && parent.WebPlayer
    } catch (a) {}
    return false
}
var ClickTaleIsRecording = WRB1;
function WRF(b) {
    if (b.width == 2 && b.height == 1) {
        WRAx();
        return 
    }
    if (WRCX&&!WRCd) {
        WRCd = true;
        WRc()
    }
    if (WRCe()) {
        WRAw("note4: preparing for stage 2");
        WRU()
    } else {
        if (!WRCf) {
            WRCf = true;
            var c = WRD.createElement("script");
            c.src = WRAH + "WRe17b.js";
            var a = WRD.getElementById("ClickTaleDiv");
            if (!a) {
                a = WRD.getElementById("ClickTale")
            }
            if (a) {
                WRAw("note4: preparing for stage 2");
                a.appendChild(c)
            } else {
                WRAw("error1: no 'ClickTale' DIV element found in this page")
            }
        }
    }
}
function WRCe() {
    return WRBX || (!(!(window.WRU)))
}
function WRAx() {
    WRAw('error2: unable to record because either there are no credits for project, the domain is not checked in the account\'s "Manage Domains" section or communication is down');
    WRh(ClickTaleIgnoreCookieName, true, ClickTaleCookieExpiryDays ? 0.007 : false);
    WRAX = false;
    WRDL("recorder", "recording rejected")
}
function WRG() {
    return Math.floor(Math.random() * 2147483647)
}
function WRAY() {
    return WRG() + "." + (WRInitTime & 2147483647)
}
function WRH() {
    return (new Date()).getTime() - WRInitTime
}
function WRB1() {
    return typeof WRSID == "number"
}
function ClickTaleSendJsonMessage(a, b) {
    b.type = (a || "").toString();
    WRDc(b)
}
function WRDc(d) {
    if (!d.type) {
        WRAw("CT: Invalid JSON object. No type was specified.");
        return 
    }
    var b = JSON.stringify(d);
    var a = {
        a: "json",
        t: WRH()
    };
    if (b.length > 2000 && WRBW.XDR) {
        a.streamval = b
    } else {
        a.c = b
    }
    WRZ(a)
}
function WRZ(a) {
    if (WRB1()) {
        WRCg(a)
    } else {
        if (WRB.push) {
            WRB.push(a)
        }
    }
}
function WRc() {
    WRAE = {
        a: "load",
        w: WRp(),
        h: WRq(),
        sw: WRAR(),
        sh: WRAS(),
        cw: WRBm(),
        ch: WRBn(),
        lw: WRBp(),
        lh: WRBq(),
        o: WRBo(),
        t: WRH()
    };
    WRZ(WRAE)
}
function WRp() {
    return self.innerWidth || WRs.offsetWidth
}
function WRq() {
    return self.innerHeight || WRs.offsetHeight
}
function WRAR() {
    return WRs.scrollWidth
}
function WRAS() {
    if (WRD.documentElement) {
        return Math.max(WRD.body.scrollHeight, WRD.documentElement.scrollHeight)
    }
    return WRs.scrollHeight
}
function WRBo() {
    return window.orientation | 0
}
function WRBm() {
    return WRBW.m ? self.innerWidth : WRs.clientWidth
}
function WRBn() {
    return WRBW.m ? self.innerHeight : WRs.clientHeight
}
function WRBp() {
    return WRs.clientWidth
}
function WRBq() {
    return WRs.clientHeight
}
function WRh(c, d, e) {
    if (e) {
        var b = new Date();
        b.setTime(b.getTime() + (e * 86400000));
        var a = "; expires=" + b.toGMTString()
    } else {
        var a = ""
    }
    WRD.cookie = c + "=" + d + a + "; path=/;" + (ClickTaleCookieDomain ? " domain=" + ClickTaleCookieDomain + ";" : "")
}
function WRCQ(a) {
    WRh(a, null, - 1)
}
function WRi(b) {
    var e = b + "=";
    var a = WRD.cookie.split(";");
    for (var d = 0; d < a.length; d++) {
        var f = a[d];
        f = f.replace(/^\s\s*/, "");
        if (f.indexOf(e) == 0) {
            return f.substring(e.length, f.length)
        }
    }
    return null
}
function WRCR(c, f, e, a) {
    var b = WRCS(c);
    if (!b) {
        b = []
    }
    for (var d = 0; d < b.length; d++) {
        if (b[d][0] == f) {
            b[d][1] = e;
            break
        }
    }
    if (d == b.length) {
        b.push([f, e])
    }
    var g = [];
    for (var d = 0; d < b.length; d++) {
        if (b[d][1] !== null) {
            g.push(b[d].join(WRDg))
        }
    }
    WRh(c, g.join(WRDf), a)
}
function WRCT(b, c, a) {
    WRCR(b, c, null, a)
}
function WRCS(b, h) {
    var e = WRi(b);
    if (!e) {
        return null
    }
    var a = e.split(WRDf), f = [];
    for (var d = 0; d < a.length; d++) {
        var g = a[d];
        var c = g.split(WRDg);
        if (c.length == 2) {
            f.push(c)
        }
    }
    if (!h) {
        return f
    }
    for (var d = 0; d < f.length; d++) {
        if (f[d][0] == h) {
            return f[d][1]
        }
    }
    return null
}
function WRCP(c, d, a) {
    var b = parseInt(WRCS(c, d)) || 0;
    WRCR(c, d, b + 1, a)
}
function ClickTaleGetSID() {
    return typeof WRSID == "number" ? WRSID : null
}
function ClickTaleGetUID() {
    var a = WRi(ClickTaleUIDCookieName);
    return a > 0 ? a : null
}
function ClickTaleSetUID(a) {
    if (a > 0 || a === 0 || a === "0") {
        WRh(ClickTaleUIDCookieName, a, ClickTaleCookieExpiryDays)
    } else {
        WRCQ(ClickTaleUIDCookieName)
    }
}
function ClickTaleGetPID() {
    return typeof WRA == "number" ? WRA : null
}
function ClickTaleTag(a) {
    WRZ({
        a: "tag",
        c: a,
        t: WRH()
    })
}
var ClickTaleEvent = ClickTaleTag;
function ClickTaleNote(a) {
    WRZ({
        a: "note",
        c: a,
        t: WRH()
    })
}
function ClickTaleField(b, a) {
    WRZ({
        a: "field",
        f: b,
        v: a,
        t: WRH()
    })
}
function ClickTaleExec(a) {
    if (a.length > 2000 && WRBW.XDR) {
        WRZ({
            a: "exec",
            streamval: a,
            t: WRH()
        })
    } else {
        WRZ({
            a: "exec",
            c: a,
            t: WRH()
        })
    }
}
function ClickTaleRegisterFormSubmitSuccess(b) {
    if (WRB1()) {
        WRB4(b)
    } else {
        if (b == null) {
            WRZ({
                a: "submitsuccess",
                i: false,
                t: WRH()
            })
        }
    }
}
function ClickTaleRegisterFormSubmitFailure(b) {
    if (WRB1()) {
        WRB5(b)
    } else {
        if (b == null) {
            WRZ({
                a: "submitfail",
                i: false,
                t: WRH()
            })
        }
    }
}
function ClickTaleIgnore(a) {
    WRh(ClickTaleUIDCookieName, 0, a)
}
function ClickTaleUploadPage(a, b) {
    if (WRAX) {
        WRAw("CTUP: Monitoring has already started")
    }
    WRAL = true;
    WRAN = a;
    WRAO = b;
    if (window.WRAZ) {
        WRAZ()
    }
}
function ClickTaleSetAllSensitive() {
    WRBT = true
}
function ClickTaleGetVersion() {
    return [14, 17]
}
function ClickTaleSetCustomElementID(a, b) {
    a.ClickTale = a.ClickTale || {};
    a.ClickTale.CustomID = b
}
function WRondomload() {
    if (ClickTaleIsPlayback() || WRDG) {
        return 
    }
    WRDG = true;
    var a = WRD.getElementById("ClickTaleDefer");
    if (a) {
        a.parentNode.removeChild(a)
    }
    WRZ({
        a: "domload",
        t: WRH()
    });
    if (WRB1()) {
        WRAP()
    }
    if (window.WRAZ) {
        WRAZ()
    }
}
function WRAv() {
    if (ClickTaleIsPlayback()) {
        return 
    }
    WRAy(location.hash.substr(1));
    WRAy(location.search.substr(1))
}
function WRAy(d) {
    var c = d.split("&");
    for (var b = 0; b < c.length; b++) {
        var e = c[b].split("=");
        var a = decodeURIComponent(e[0]).toLowerCase();
        if (e.length == 2 && (a == "ct" || a == "clicktale")) {
            WRAz(e[1])
        }
    }
}
function WRAz(d) {
    var c = d.split(",");
    for (var b = 0; b < c.length; b++) {
        switch (c[b].toLowerCase()) {
        case"debug":
            if (!window.ClickTaleIncludedOnDOMReady) {
                WRD.write('<textarea id="ClickTaleDebugDump" rows="5" cols="80" style="position: absolute; left:10px; top:10px; border: solid #6C358D;"></textarea>')
            }
            WRAu = WRD.getElementById("ClickTaleDebugDump");
            if (WRAu) {
                WRAu.value = ""
            }
            WRDO("inPage");
            WRDO("console");
            break;
        case"enable":
            WRCQ(ClickTaleIgnoreCookieName);
            var a = WRi(ClickTaleUIDCookieName);
            if (a == null || a == 0) {
                WRh(ClickTaleUIDCookieName, WRAY(), ClickTaleCookieExpiryDays)
            }
            break;
        case"disable":
            WRh(ClickTaleUIDCookieName, 0, ClickTaleCookieExpiryDays);
            break;
        case"reset":
            WRCQ(ClickTaleUIDCookieName);
            break;
        case"uaskipcheck":
            WRBW = WRBY(true);
            WRAw("warning8: skipping userAgent support check, running as: " + WRBW.a);
            break;
        default:
            ts = c[b].match(/^(\w+)(\(|%28)(.+)(\)|%29)$/i);
            if (ts && ts.length == 5) {
                var a = decodeURIComponent(ts[3]), e = ts[1];
                switch (e.toLowerCase()) {
                case"t":
                    ClickTaleTag(a);
                    break;
                case"u":
                    ClickTaleSetUID(a);
                    break;
                case"ua":
                    WRk = decodeURIComponent(a);
                    WRAw("warning7: forcing userAgent type: " + WRk);
                    break;
                case"uao":
                    WRBW = JSON.parse(a);
                    WRAw("warning7: forcing userAgentObj type: " + a);
                    break;
                case"report":
                    if (/test|subs\d?\d?/.test(a)) {
                        WRDO("crossDomainMessaging");
                        WRCW = "http://" + (a == "test" ? "ct.test" : (a + ".app.clicktale.com"))
                    }
                    break;
                default:
                    WRAw("warning5: unknown parameter in URL: " + e);
                    break
                }
            }
            break
        }
    }
}
function WRAw(a) {
    var b = {
        message: a
    };
    WRDL("recorder", "debug", b)
}
function WRDM() {
    WRDJ.inPage = WRDP;
    WRDJ.crossDomainMessaging = WRDQ;
    WRDJ.console = WRDR
}
function WRDN() {
    if (window.ClickTaleSettings && window.ClickTaleSettings.LogHandlers && window.ClickTaleSettings.LogHandlers instanceof window.Array) {
        var c = window.ClickTaleSettings.LogHandlers;
        for (var a = 0; a < c.length; a++) {
            var b = c[a];
            if (b) {
                WRDO(b)
            }
        }
    }
}
function WRDO(a) {
    if (a in WRDJ&&!(a in WRDK)) {
        WRDK[a] = WRDJ[a]
    }
}
function WRDL(a, c, e) {
    e = e || {};
    e.module = (a || "").toString();
    e.type = (c || "").toString();
    for (var d in WRDK) {
        if (!!d) {
            var b = WRDK[d];
            if (!!b) {
                b(e)
            }
        }
    }
}
function WRDP(a) {
    if (WRAu && a.type == "debug" && a.module == "recorder") {
        WRDI += (a.message + "\n");
        WRAu.value = WRDI
    }
}
function WRDQ(c) {
    if (!!WRCW) {
        try {
            var a = JSON.stringify(c);
            if (parent && parent != window) {
                if (parent.postMessage) {
                    parent.postMessage(a, WRCW)
                } else {
                    console && console.log("CT: Browser doesn't support cross domain logging.")
                }
            } else {
                console && console.log("CT: " + a)
            }
        } catch (b) {
            console && console.log("CT: exception trying to communicate cross domain log information.")
        }
    }
}
function WRDR(a) {
    if (console && console.log) {
        console.log(a.module + " ", a.type + " ", a)
    }
}
function ClickTaleLogical(b, a) {
    if (ClickTaleIsRecording() && window.ClickTaleStop) {
        ClickTaleStop()
    }
    window.WRInitTime = (new Date()).getTime();
    WRCX = true;
    WRCh = b;
    WRAX = false;
    if (a) {
        WRCY = a
    }
    if (window.WRA4) {
        WRA4(true)
    }
    ClickTale(WRA, WRC, WRCU)
}
function WRBY(a) {
    var b = WRBg(navigator.userAgent);
    if (!a) {
        if (window.ClickTaleSettings && ClickTaleSettings.CheckAgentSupport) {
            b = ClickTaleSettings.CheckAgentSupport(WRBh, b)
        } else {
            b = WRBh(b)
        }
    }
    return b
}
function WRBh(a) {
    if (!a) {
        return false
    }
    if ((a.t == a.IE && a.v >= 8 && a.v <= 11&&!a.m) || (a.t == a.FF && a.v >= 25 && a.v <= 50&&!a.m) || (a.t == a.Ch && a.v >= 9 && a.v <= 50) || (a.t == a.Sa && a.v >= 5.1 && a.v <= 10) || (a.t == a.WK && a.v >= 534 && a.v <= 550)) {
        return a
    }
    return false
}
function WRBr(b) {
    var d = {};
    var e = " " + b + " ";
    var c = / (\w+)(?:\/([\w\.]+))? (?:(\([^\)]+\)) )?/img;
    var a;
    while ((a = c.exec(e)) != null) {
        d[a[1]] = {
            value: a[2],
            extra: a[3]
        };
        c.lastIndex--
    }
    return d
}
function WRBg(b) {
    var c = {
        IE: 0,
        FF: 1,
        Ch: 2,
        Sa: 3,
        Op: 4,
        WK: 5
    };
    var f = WRBr(b);
    if (f.Opera) {
        c.t = c.Op;
        c.v = 0;
        c.a = "Op";
        c.m = false;
        return c
    }
    if (f.Mozilla && f.Mozilla.extra) {
        var d = f.Mozilla.extra;
        var a = d.indexOf("MSIE ");
        if (a!=-1) {
            c.t = c.IE;
            c.v = parseFloat(d.substr(a + 5, 3));
            c.a = "IE" + c.v;
            c.m = (d.indexOf("; Touch")!=-1) || (d.indexOf("; IEMobile/")!=-1);
            if (c.v >= 8) {
                c.XDR = true
            }
            if (window.Uint8Array) {
                c.XHRBin = true
            }
            return c
        } else {
            if (d.indexOf("; Trident/")!=-1) {
                var a = d.indexOf("; rv:");
                if (a!=-1) {
                    c.t = c.IE;
                    c.v = parseFloat(d.substr(a + 5, 3));
                    c.a = "IE" + c.v;
                    c.m = (d.indexOf("; Touch")!=-1) || (d.indexOf("; IEMobile/")!=-1);
                    c.XDR = true;
                    if (window.Uint8Array) {
                        c.XHRBin = true
                    }
                    return c
                }
            }
        }
    }
    if (f.Firefox && f.Firefox.value) {
        c.t = c.FF;
        c.v = parseFloat(f.Firefox.value);
        if (c.v < 10) {
            c.a = "FF" + (c.v * 10)
        } else {
            c.a = "FF" + c.v
        }
        c.m = (f.Mozilla && f.Mozilla.extra && f.Mozilla.extra.indexOf("Android; ")!=-1);
        if (c.v >= 3.5) {
            c.XDR = true
        }
        if (window.Uint8Array) {
            c.XHRBin = true
        }
        return c
    }
    if (((f.Chrome && f.Chrome.value) || (f.CriOS && f.CriOS.value))&&!f.Version) {
        c.t = c.Ch;
        c.v = parseFloat(f.Chrome ? f.Chrome.value : f.CriOS.value);
        c.a = "Ch" + c.v;
        c.m = (!(!f.CriOS)) || (f.Mozilla && f.Mozilla.extra && f.Mozilla.extra.indexOf("; Android ")!=-1);
        if (c.v >= 9) {
            c.XDR = true
        }
        if (window.Uint8Array) {
            c.XHRBin = true
        }
        return c
    }
    if (f.Safari) {
        if (f.Mozilla && f.Mozilla.extra && f.Mozilla.extra.indexOf("; Android ")!=-1 && f.AppleWebKit && f.AppleWebKit.value) {
            c.t = c.WK;
            c.v = parseFloat(f.AppleWebKit.value);
            c.a = "WK" + parseInt(c.v);
            c.m = true;
            if (c.v >= 5) {
                c.XDR = true
            }
            if (window.Uint8Array && c.v >= 535) {
                c.XHRBin = true
            }
            return c
        }
        if (f.Version && f.Version.value) {
            c.t = c.Sa;
            c.v = parseFloat(f.Version.value);
            c.a = "Sa" + c.v;
            c.m=!(!f.Mobile);
            if (c.v >= 5) {
                c.XDR = true
            }
            return c
        }
    }
    return false
}
function WRl(c, a, b) {
    if (c.attachEvent) {
        c.attachEvent("on" + a, b)
    } else {
        if (c.addEventListener) {
            c.addEventListener(a, b, false)
        }
    }
}
var ClickTaleFetchFromWithCookies = (function() {
    var b = [], e, h, d, a, g, c;
    a = function(n, m) {
        m = m || b;
        for (var k = 0, j = b.length; k < j; k++) {
            if (n.call(m, b[k], k)) {
                return true
            }
        }
        return false
    };
    e = function(i) {
        return a(function(k, j) {
            return k.k == i
        })
    };
    h = function(i) {
        var j = null;
        a(function(l, k) {
            if (l.k == i) {
                j = l;
                return true
            }
            return false
        });
        return j
    };
    c = function(i, j) {
        var k = h(i);
        if (k) {
            k.v = j
        } else {
            b.push({
                k: i,
                v: j
            })
        }
    };
    g = function(k) {
        var j = arguments.callee;
        if (!j.sRE) {
            var i = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"];
            j.sRE = new RegExp("(\\" + i.join("|\\") + ")", "g")
        }
        return k.replace(j.sRE, "\\$1")
    };
    d = function(i) {
        if (i instanceof String || i instanceof Boolean || i instanceof Number) {
            i = i.valueOf()
        } else {
            if (i === null) {
                return "null"
            }
        }
        switch (typeof i) {
        case"number":
            i = isFinite(i) ? String(i) : "null";
            break;
        case"boolean":
            i = String(i);
            break;
        case"object":
            if (typeof i.toString == "function") {
                i = i.toString()
            } else {
                i = "[Object]"
            }
            break
        }
        return i
    };
    var f = {
        _URL_PARAM_NAME: "CTFetchCookies",
        cookieNameDecoder: decodeURIComponent,
        cookieValueDecoder: function(i) {
            return i
        },
        clear: function() {
            b = []
        },
        set: function(j, i) {
            if (i === null || typeof i == "undefined") {
                f.setFromCookie(j);
                return 
            }
            i = d(i);
            c(j, i)
        },
        setFromCookie: function(j) {
            var q, p, k, n, o = document.cookie.split(/;\s/g), m;
            if (typeof j == "string") {
                q = function(i) {
                    return i == j
                }
            } else {
                if (typeof j.test == "function") {
                    q = function(i) {
                        return j.test(i)
                    }
                } else {
                    q = function() {
                        return false
                    }
                }
            }
            for (m = 0; m < o.length; m++) {
                k = o[m].match(/([^=]+)=/i);
                if (k instanceof Array) {
                    try {
                        p = f.cookieNameDecoder(k[1]);
                        n = f.cookieValueDecoder(o[m].substring(k[1].length + 1))
                    } catch (l) {}
                } else {
                    p = f.cookieNameDecoder(o[m]);
                    n = p
                }
                if (q(p)) {
                    c(p, n)
                }
            }
        },
        constructCookiesParam: function() {
            var i = [];
            a(function(k, j) {
                i.push(k.k);
                i.push("=");
                i.push(k.v);
                i.push(";");
                return false
            });
            return f._URL_PARAM_NAME + "=" + encodeURIComponent(i.join(""))
        },
        constructCookiesHash: function() {
            return "#" + f.constructCookiesParam()
        },
        constructFetchFromUrl: function(i) {
            i = i || window.location.href;
            if (!(i.indexOf("#") >= 0)) {
                i += "#"
            } else {
                i += "&"
            }
            i += f.constructCookiesParam();
            return i
        }
    };
    return f
})();
/*!
 * Copyright 2010-2012 ClickTale Ltd.
 */
(function() {
    var aQ=!0, aP = null, aO=!1;
    function aN(i, j, g) {
        return i.call.apply(i.bind, arguments)
    }
    function at(i, k, g) {
        if (!i) {
            throw Error()
        }
        if (2 < arguments.length) {
            var j = Array.prototype.slice.call(arguments, 2);
            return function() {
                var n = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(n, j);
                return i.apply(k, n)
            }
        }
        return function() {
            return i.apply(k, arguments)
        }
    }
    function aM(i, j, g) {
        aM = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? aN : at;
        return aM.apply(aP, arguments)
    }
    var aL;
    var aK;
    function aJ() {
        if (!aK) {
            var g;
            aL ? g = aL : (g = window.ClickTaleGlobal, g || (g = {}, window.ClickTaleGlobal = g), g.exports = g.exports || {}, aL = g);
            g.exports.xhr = g.exports.xhr || {};
            aK = g.exports.xhr
        }
        return aK
    }
    function aR(i, j, g) {
        Object.prototype.__defineGetter__&&!aI ? ("get" in g && i.__defineGetter__(j, g.get), "set" in g && i.__defineSetter__(j, g.set)) : Object.defineProperty && Object.defineProperty(i, j, g)
    }
    var aI;
    try {
        aI = Object.defineProperty({}, "x", {
            get: function() {
                return aQ
            }
        }).x
    } catch (ax) {
        aI = aO
    }
    var aH;
    function aG() {}
    var aF = aP, aE = aP, aD = 50000, aC = aI || Object.prototype.__defineGetter__ ? 1: 2;
    var ay = 0, aB = aP;
    function aA(i, k, g) {
        try {
            return i[k]
        } catch (j) {
            return g
        }
    }
    var ar = aO, aq = "";
    function ap() {}
    var ao = {};
    function an(g, i) {
        aR(i, g, {
            get: function() {
                return this.x[g]
            },
            set: function(j) {
                this.x[g] = j
            },
            enumerable: aQ,
            configurable: aQ
        })
    }
    function am(i, k) {
        var g = new Function("a", "b", "c", "d", "e", "f", "g", "h", 'return this["x"].' + i + "(a,b,c,d,e,f,g,h);");
        if (2 == aC) {
            var j = g, g = function(p, o, u, s, n, t, q, r) {
                al(this, this.x, ak);
                return j.call(this, p, o, u, s, n, t, q, r)
            }
        }
        k[i] = g
    }
    function aj(i) {
        var k = ai.prototype, g;
        for (g in i) {
            if ("string" == typeof g && ao[g] !== ap) {
                try {
                    "function" == typeof i[g] ? (am(g, k), ao[g] = ap) : 1 === aC && (an(g, k), ao[g] = ap)
                } catch (j) {
                    ao[g] = ap, 1 === aC && an(g, k)
                }
            }
        }
    }
    function al(i, o, g) {
        for (var n = g.length, k, j; n--;) {
            j = g[n], k = j[0], j = aA(i, k, j[1]), o[k] = j
        }
    }
    var ah = [["status", ""], ["timeout", 0], ["responseXML", aP], ["responseBody", aP], ["readyState", 0], ["responseText", aP], ["statusText", aP]], ak = [["ontimeout", aP]];
    function ag() {
        var g = aH;
        return !!g&&!!g.g && 0 < g.g.length
    }
    function ai() {
        var g = new ai.OriginalXMLHttpRequest;
        this.x = g;
        this.q = ay++;
        g.onreadystatechange = aM(au, this);
        ar || (aj(g), ar = aQ);
        2 == aC && (al(g, this, ah), al(g, this, ak))
    }
    function au() {
        var s = this.x, q = this.B, r = this.skip;
        2 == aC && al(s, this, ah);
        var p = aA(s, "readyState", 0), o = aA(s, "status", 0), n = aA(s, "statusText", ""), i = aA(s, "responseText", ""), k = this.headersToRecord;
        if (!r && q != p) {
            if (0 < p && 4 > p) {
                aB.readyState(this.q, p)
            } else {
                if (4 == p) {
                    var g = [];
                    if (k && "number" == typeof k.length) {
                        for (r = k.length; 0 < r--;) {
                            q = k[r], g.push(q + ":" + s.getResponseHeader.call(s, q))
                        }
                    } else {
                        k = aP;
                        try {
                            k = this.getAllResponseHeaders()
                        } catch (j) {}
                        g = k != aP && 0 < k.length ? k.split("\n") : ["Error: headers are null"]
                    }
                    o = {
                        status: o,
                        statusText: n,
                        headers: g,
                        responseText: i
                    };
                    aF && aF(o);
                    o.responseText && o.responseText.length > aD && (o.responseText = "", o.statusText = "responseText is larger than MaxResponseSize");
                    n = aP;
                    i = aO;
                    k = this.urlRule;
                    ag() && k && (n = s.getResponseHeader.call(s, "X-ClickTale-IMToken"), i = k.w);
                    aB.i(this.q, o.status, o.statusText, o.headers, o.responseText, n, i)
                }
            }
        }
        this.B = p;
        return "function" != typeof this.onreadystatechange ? void 0 : this.onreadystatechange.apply(this, [])
    }
    ai.prototype.open = function(i, o, g, n, k) {
        var j = this.x;
        "undefined" == typeof g && (g = aQ);
        aE && aE(i, o) == aO ? this.skip = aQ : aB.open(this.q, o, i.toUpperCase());
        i = j.open(i, o, g, n, k);
        this.urlRule = aP;
        if (ag()) {
            g = aP;
            n = aH.g;
            for (k = 0; k < n.length; k++) {
                if (j = n[k], j.n instanceof RegExp && j.n.test(o) || o == j.n) {
                    g = j;
                    break
                }
            }
            if (o = g) {
                this.urlRule = o, g = this.x, g.setRequestHeader.call(g, "X-ClickTale-IMCache", "1"), o.s && g.setRequestHeader.call(g, "X-ClickTale-IMRuleSet", o.s)
            }
        }
        return i
    };
    ao.open = ap;
    ao.onreadystatechange = ap;
    ai.prototype.skip = aO;
    function af() {
        this.b = aP;
        this.d = []
    }
    af.prototype.b = aP;
    af.prototype.open = function(i, j, g) {
        this.b != aP ? this.b.open(i, j, g) : this.d.push([this.open, [i, j, g]])
    };
    af.prototype.readyState = function(g, i) {
        this.b != aP ? this.b.readyState(g, i) : this.d.push([this.readyState, [g, i]])
    };
    af.prototype.i = function(j, p, g, o, n, k, i) {
        this.b != aP ? this.b.i(j, p, g, o, n, k, i) : this.d.push([this.i, [j, p, g, o, n, k, i]])
    };
    af.prototype.d = [];
    function ae(i, k, g, j) {
        this.p = i;
        this.o = k;
        this.z = g;
        this.A = j
    }
    ae.GET = 1;
    ae.HEAD = 2;
    ae.POST = 3;
    ae.OPTIONS = 4;
    ae.PUT = 5;
    ae.DELETE = 6;
    ae.prototype.open = function(i, k, g) {
        var g = ae[g], j = {
            a: "xhropen"
        };
        j.xhrid = i;
        j.u = k;
        j.methodid = g;
        j.t = this.o();
        this.p(j)
    };
    ae.prototype.readyState = function(i, j) {
        var g = {
            a: "xhrstate"
        };
        g.xhrid = i;
        g.stateid = j;
        g.t = this.o();
        this.p(g)
    };
    ae.prototype.i = function(r, p, q, o, n, k, i) {
        var j = k && k.length, g = {
            v: 1
        };
        g.h = o;
        j || (g.c = n);
        n = this.z(this.A(g));
        o = {
            a: "xhrstatedone"
        };
        o.xhrid = r;
        o.status = p;
        o.statusText = q;
        o.streamid = n;
        o.t = this.o();
        if (j) {
            o.a = "xhrstatedoneim";
            if (!aq || 0 == aq.length) {
                if ((r = window.ClickTaleFetchFrom) && 0 < r.length) {
                    (p = /\?[th]=(\w+)/ig.exec(r)) && (p = p[1]), aq = r = r.replace(p, "")
                }
            }
            o.fetchUrl = aq + k;
            o.fetcherDoRewriteRules=!!i
        }
        this.p(o)
    };
    function a() {
        var g = ad;
        ai.OriginalXMLHttpRequest = ac;
        ai.RegisterRecorderFunction = g;
        ai.ClickTaleWrapperVersion = 1;
        ai.addMethodDelegation = function(i) {
            am(i, ai.prototype)
        }
    }
    function az(g) {
        am(g, ai.prototype)
    }
    var ab = aP;
    function Q() {
        ab === aP && (ab = new af);
        return ab
    }
    function av() {
        var g = m, i = l.f, g = g || window;
        if (g.XMLHttpRequest) {
            if (!i) {
                return g = g.XMLHttpRequest.toString(), - 1 === g.indexOf("[native code]")&&-1 === g.indexOf("[object XMLHttpRequestConstructor]")&&-1 === g.indexOf("[object XMLHttpRequest]") ? aO : aQ
            }
        } else {
            return aO
        }
        return !!i()
    }
    function ad(i, n, g) {
        n = new ae(i, n, g, aG);
        i = Q();
        i.b = n;
        for (var n = i.d.length, g = i.d, k, j = 0; j < n; j++) {
            k = g[j], k[0].apply(i, k[1])
        }
    }
    var m = window, l = void 0, l = function() {
        var i = m, o = i.ClickTaleSettings, g = {};
        "object" != typeof o && (o = {});
        "object" != typeof o.XHRWrapper && (o.XHRWrapper = {});
        o = o.XHRWrapper;
        g.e = o.Enable;
        g.k = o.MaxResponseSize;
        g.l = o.RequestFilter;
        g.m = o.ResponseFilter;
        g.j = o.JSONStringify;
        g.f = o.Override;
        var n = aP;
        if (n = o.IM) {
            if (g.r = {
                g: []
            }, o = aP, (o = n.Urls) && o.length) {
                for (n = 0; n < o.length; n++) {
                    var k = o[n];
                    g.r.g.push({
                        n: k.UrlRule,
                        w: k.FetcherDoRewriteRules,
                        s: k.IMRewriteRulesSet
                    })
                }
            }
        }
        var j = g.f;
        "boolean" === typeof j ? g.f = function() {
            return j
        } : "function" !== typeof j && (g.f = aP);
        "boolean" != typeof g.e && (g.e = aO);
        "number" != typeof g.k && (g.k = 50000);
        "function" != typeof g.l && (g.l = function() {
            return aQ
        });
        "function" != typeof g.m && (g.m = function() {});
        "function" != typeof g.j && (i.JSON && "function" == typeof i.JSON.stringify ? g.j = i.JSON.stringify : g.e = aO);
        return g
    }();
    if (l.e && av()) {
        var d = m;
        if (!("number" == typeof aJ().v || "number" == typeof(d || window).XMLHttpRequest.ClickTaleWrapperVersion) && l.e) {
            for (var h = m, f = l, ac = h.XMLHttpRequest, e = ai.prototype, c = ["setRequestHeader", "send", "abort", "getAllResponseHeaders", "getResponseHeader"], b = c.length; b--;) {
                am(c[b], e), ao[c[b]] = ap
            }
            if (1 === aC) {
                c = "responseXML,responseText,statusText,status,readyState,responseType".split(",");
                for (b = c.length; b--;) {
                    an(c[b], e), ao[c[b]] = ap
                }
            }
            aj(h.XMLHttpRequest.prototype);
            aB = Q();
            aF = f.m;
            aE = f.l;
            aD = f.k;
            aG = f.j;
            aH = f.r;
            var aw = aJ();
            aw.v = 1;
            aw.registerRecorderFunctionAPI = ad;
            aw.originalXHR = ac;
            aw.addMethodDelegation = az;
            a();
            m.XMLHttpRequest = ai
        }
    }
})();
if (!WRClickTaleOnReadyInvoked) {
    WRClickTaleOnReadyInvoked = true;
    if (typeof ClickTaleOnReady == "function") {
        ClickTaleOnReady()
    }
    WRPublishEventForHandlers(window.ClickTaleOnReadyList)
}
function WRPublishEventForHandlers(h) {
    if (typeof h === "object" && "length" in h) {
        var g = h.length;
        for (var c = 0; c < g; c++) {
            var e = h[c], b = {}, f, d, a;
            if (typeof e === "string") {
                f = window[e];
                if (!f) {
                    continue
                }
                b.func = f;
                b.scope = window;
                b.args = []
            } else {
                if (typeof e === "function") {
                    b.func = e;
                    b.scope = window;
                    b.args = []
                } else {
                    if (typeof e === "object") {
                        f = e.fn;
                        if (typeof f !== "function") {
                            continue
                        }
                        b.func = f;
                        b.scope = e.scope || window;
                        b.args = e.args || []
                    }
                }
            }
            b.func.apply(b.scope, b.args)
        }
    }
};
