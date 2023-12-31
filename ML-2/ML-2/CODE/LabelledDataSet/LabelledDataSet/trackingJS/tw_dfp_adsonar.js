function qas_dfp_errHandler() {
    return true;
}
window.onerror = qas_dfp_errHandler;
function qas_dfp_appendParam(n, v) {
    var w = window;
    if ((n.indexOf("previous")>-1 && v == "") || (v&&!(v === "undefined"))) {
        if (w.srcUrl === "undefined") {
            w.srcUrl = "";
        }
        if (w.srcUrl.indexOf("=")>-1) {
            w.srcUrl += ("&" + n + "=" + v);
        } else {
            w.srcUrl += (n + "=" + v);
        }
    }
}
function qas_dfp_appendAttr(n, v) {
    var w = window;
    if (v&&!(v === "undefined")) {
        w.wFrmStr += (" " + n + '="' + v + '"');
    }
}
function qas_dfp_writeAdIFrame() {
    var w = window;
    var jspServ = "ads.tw.adsonar.com";
    var jspServProtocol = "http://";
    if (w.adsonar_ssl && (w.adsonar_ssl == true)) {
        jspServProtocol = "https://";
    }
    w.srcUrl = jspServProtocol + jspServ + "/adserving/getAds.jsp?";
    w.wFrmStr = "";
    var wrand = Math.round(Math.random() * 1000000);
    qas_dfp_appendAttr("name", ("adsonar_serve" + wrand));
    qas_dfp_appendAttr("id", ("adsonar_serve" + wrand));
    qas_dfp_appendAttr("scrolling", "no");
    qas_dfp_appendAttr("frameborder", "0");
    qas_dfp_appendAttr("marginwidth", "0");
    qas_dfp_appendAttr("marginheight", "0");
    qas_dfp_appendAttr("vspace", "0");
    qas_dfp_appendAttr("hspace", "0");
    qas_dfp_appendAttr("width", w.adsonar_zw);
    qas_dfp_appendAttr("height", w.adsonar_zh);
    qas_dfp_passParams();
    qas_dfp_appendAttr("src", w.srcUrl);
    w.adsonar_placementId = null;
    w.adsonar_pid = null;
    w.adsonar_ps = null;
    w.adsonar_zw = null;
    w.adsonar_zh = null;
    w.adsonar_jv = null;
    w.adsonar_topicid = null;
    w.wFrmStr = "<ifr" + "ame" + w.wFrmStr + ">" + "</ifr" + "ame>";
    document.write(w.wFrmStr);
}
function qas_dfp_writeAdPopup(popType) {
    var w = window;
    var jspServ = "ads.tw.adsonar.com";
    var jspServProtocol = "http://";
    if (w.adsonar_ssl && (w.adsonar_ssl == true)) {
        jspServProtocol = "https://";
    }
    w.srcUrl = jspServProtocol + jspServ + "/adserving/getAds.jsp?";
    w.wFrmStr = "";
    qas_dfp_passParams();
    qas_dfp_appendParam("url", escape(w.location.href));
    var sWidth = screen.availWidth;
    var sHeight = screen.availHeight;
    var wLeftPos = (sWidth - w.adsonar_zw) / 2;
    var wTopPos = (sHeight - w.adsonar_zh) / 2;
    var wURL = w.srcUrl;
    var wName = "adSonarPopup_" + w.adsonar_pid + "_" + w.adsonar_ps;
    var wParams = "";
    if ((popType == 2) || (popType == 4)) {
        wParams = "LEFT=" + (wLeftPos - 25) + ",TOP=" + (wTopPos - 100) + ",WIDTH=" + (w.adsonar_zw + 50) + ",HEIGHT=" + (w.adsonar_zh + 200);
        wParams += ",directories,location,menubar,resizable,scrollbars,status,titlebar,toolbar";
    } else {
        wParams = "LEFT=" + wLeftPos + ",TOP=" + wTopPos + ",WIDTH=" + w.adsonar_zw + ",HEIGHT=" + w.adsonar_zh;
    }
    var newPopupWin = window.open(wURL, wName, wParams);
    if ((popType == 3) || (popType == 4)) {
        if (newPopupWin) {
            newPopupWin.blur();
            newPopupWin.opener.focus();
        }
    } else {
        if (newPopupWin) {
            newPopupWin.focus();
        }
    }
}
function qas_dfp_validValue(elem) {
    if (elem && elem != null && elem != ""&&!isNaN(parseInt(elem))) {
        return true;
    }
    return false;
}
function qas_dfp_passParams() {
    var w = window;
    var t = top;
    var k = 0;
    try {
        if (qas_dfp_validValue(w.adsonar_placementId)) {
            if (t.previousPlacementIds == null) {
                t.previousPlacementIds = new Array();
            }
            if (t.previousPlacementIds.length <= 20) {
                t.previousPlacementIds[t.previousPlacementIds.length] = w.adsonar_placementId;
            }
            k = t.previousPlacementIds.length;
            if (k > 1) {
                qas_dfp_appendParam("previousPlacementIds", t.previousPlacementIds.slice(0, (k - 1)).join());
            } else {
                qas_dfp_appendParam("previousPlacementIds", "");
            }
        } else {
            if (qas_dfp_validValue(w.adsonar_ps)) {
                if (t.previousPresetIds == null) {
                    t.previousPresetIds = new Array();
                }
                if (t.previousPresetIds.length <= 20) {
                    t.previousPresetIds[t.previousPresetIds.length] = t.adsonar_ps;
                }
                k = t.previousPresetIds.length;
                if (k > 1) {
                    qas_dfp_appendParam("previousPresetIds", t.previousPresetIds.slice(0, (k - 1)).join());
                } else {
                    qas_dfp_appendParam("previousPresetIds", "");
                }
            }
        }
    } catch (e) {}
    qas_dfp_appendParam("placementId", w.adsonar_placementId);
    qas_dfp_appendParam("pid", w.adsonar_pid);
    qas_dfp_appendParam("ps", w.adsonar_ps);
    qas_dfp_appendParam("kc", escape(w.adsonar_kc));
    qas_dfp_appendParam("gw", w.adsonar_gw);
    qas_dfp_appendParam("gh", w.adsonar_gh);
    qas_dfp_appendParam("zw", w.adsonar_zw);
    qas_dfp_appendParam("zh", w.adsonar_zh);
    qas_dfp_appendParam("tc", escape(w.adsonar_tc));
    qas_dfp_appendParam("bc", escape(w.adsonar_bc));
    qas_dfp_appendParam("uc", escape(w.adsonar_uc));
    qas_dfp_appendParam("tl", w.adsonar_tl);
    qas_dfp_appendParam("ul", w.adsonar_ul);
    qas_dfp_appendParam("ts", w.adsonar_ts);
    qas_dfp_appendParam("bs", w.adsonar_bs);
    qas_dfp_appendParam("us", w.adsonar_us);
    qas_dfp_appendParam("tm", w.adsonar_tm);
    qas_dfp_appendParam("xb", w.adsonar_xb);
    qas_dfp_appendParam("xbc", escape(w.adsonar_xbc));
    qas_dfp_appendParam("xp", w.adsonar_xp);
    qas_dfp_appendParam("xpc", escape(w.adsonar_xpc));
    qas_dfp_appendParam("pb", w.adsonar_pb);
    qas_dfp_appendParam("pbc", escape(w.adsonar_pbc));
    qas_dfp_appendParam("ib", w.adsonar_ib);
    qas_dfp_appendParam("ibc", escape(w.adsonar_ibc));
    qas_dfp_appendParam("dbg", w.adsonar_dbg);
    qas_dfp_appendParam("fr", w.adsonar_fr);
    qas_dfp_appendParam("tp", w.adsonar_tp);
    qas_dfp_appendParam("zip", escape(w.adsonar_zip));
    qas_dfp_appendParam("topic", escape(w.adsonar_topic));
    qas_dfp_appendParam("tcu", escape(w.adsonar_tcu));
    qas_dfp_appendParam("topicid", w.adsonar_topicid);
    if (w.adsonar_ssl) {
        qas_dfp_appendParam("ssl", encodeURIComponent(w.adsonar_ssl));
    } else {
        var adsonar_ssl = (document.location.protocol == "https:" ? true : false);
        qas_dfp_appendParam("ssl", encodeURIComponent(adsonar_ssl));
    }
    var u = w.adsonar_rfu;
    if ((!(u&&!(u === "undefined"))) || (u == "")) {
        u = document.referrer;
        try {
            if (window.top.location == document.location) {
                u = document.location;
            }
        } catch (e) {}
    }
    qas_dfp_appendParam("url", escape(u));
    qas_dfp_appendParam("v", "5");
    qas_dfp_appendParam("flash", String(w.flash));
    if (w.fv == 'NaN' || w.fv == 'nan') {
        w.fv = 0;
    }
    qas_dfp_appendParam("fv", String(w.fv));
    try {
        var dt = t.document.title;
        if (dt&&!(dt === "undefined")) {
            if (dt.length > 100) {
                dt = dt.substring(0, 50) + "-" + dt.substring(dt.length - 50, dt.length);
            }
            qas_dfp_appendParam("dct", escape(dt));
        }
        var rf = t.document.referrer;
        if (rf&&!(rf === "undefined") && w.srcUrl.length < 2000) {
            if ((rf.length + w.srcUrl.length) > 2000) {
                rf = rf.substring(0, 2000 - w.srcUrl.length);
            }
            qas_dfp_appendParam("ref", escape(rf));
        }
    } catch (e) {}
    try {
        qas_dfp_setKeywords();
    } catch (e) {}
    function qas_dfp_setKeywords() {
        var mtags = document.getElementsByTagName("meta"), mtagsLen = mtags.length, mkw, mkwArr, mkwArrLen, mkwStr = "";
        for (var i = 0; i < mtagsLen; i++) {
            if ((mtags[i].getAttribute("name") && mtags[i].getAttribute("content")) && mtags[i].getAttribute("name").toLowerCase() == "keywords") {
                mkw = mtags[i].getAttribute("content");
            }
        }
        if (typeof mkw != "undefined") {
            mkwArr = (mkw.indexOf(",")>-1) ? mkw.split(",") : mkw.split(" ");
            mkwArrLen = mkwArr.length;
            for (var i = 0; i < mkwArrLen; i++) {
                var mkwItem = encodeURIComponent(trim(mkwArr[i]));
                if ((mkwStr + "," + mkwItem).length < 100) {
                    mkwStr += (mkwStr.length == 0) ? mkwItem : ("," + mkwItem);
                } else {
                    break;
                }
            }
            qas_dfp_appendParam("metakw", mkwStr);
        }
        function trim(s) {
            return s.replace(/^\s+|\s+$/g, "");
        }
    }
}
function ua() {
    var w = window, w3cdom = typeof document.getElementById != "undefined" && typeof document.getElementsByTagName != "undefined" && typeof document.createElement != "undefined", u = navigator.userAgent.toLowerCase(), p = navigator.platform.toLowerCase(), windows = p ? /win/.test(p): /win/.test(u), mac = p ? /mac/.test(p): /mac/.test(u), webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")): false, ie=!+"\v1", playerVersion = [0, 0, 0], d = null;
    if (typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] == "object") {
        d = navigator.plugins["Shockwave Flash"].description;
        if (d&&!(typeof navigator.mimeTypes != "undefined" && navigator.mimeTypes["application/x-shockwave-flash"]&&!navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)) {
            ie = false;
            d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
            playerVersion[0] = parseInt(d.replace(/^(.*)\..*$/, "$1"), 10);
            playerVersion[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
            playerVersion[2] = /[a-zA-Z]/.test(d) ? parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0;
        }
    } else {
        if (typeof window.ActiveXObject != "undefined") {
            try {
                var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                if (a) {
                    d = a.GetVariable("$version");
                    if (d) {
                        ie = true;
                        d = d.split(" ")[1].split(",");
                        playerVersion = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
                    }
                }
            } catch (e) {}
        }
    }
    w.flash = (playerVersion[0] > 0 ? true : false);
    w.fv = playerVersion[0];
}
function qas_dfp_writeAd() {
    var w = window;
    ua();
    var adType = "";
    if (w.adsonar_tp&&!(w.adsonar_tp === "undefined")) {
        adType = w.adsonar_tp;
    }
    switch (adType) {
    case"up":
        qas_dfp_writeAdPopup(1);
        break;
    case"upx":
        qas_dfp_writeAdPopup(2);
        break;
    case"un":
        qas_dfp_writeAdPopup(3);
        break;
    case"unx":
        qas_dfp_writeAdPopup(4);
        break;
    default:
        qas_dfp_writeAdIFrame();
    }
}
function qas_dfp_rDir(fa, ft) {
    var fx = document.qas_dfp_frm;
    fx.action = fa;
    fx.target = ft;
    fx.submit();
}
function qas_dfp_cfrm() {
    if (!document.qas_dfp_frm) {
        document.write('<form id="qas_dfp_frm" name="qas_dfp_frm" method="get" action="" target="" style="display:none;"><input type="hidden" name="ie52_mac_only" value=""></form>');
    }
}
qas_dfp_cfrm();
qas_dfp_writeAd();

