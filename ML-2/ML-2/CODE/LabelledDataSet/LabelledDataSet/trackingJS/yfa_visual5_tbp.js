var ADid_sub = Math.random();
var ADflv = 10;
var ADua = navigator.userAgent;
var ADdcap = (document.all);
var ADlcap = (document.layers);
var ADgcap = (document.getElementById);
var ADopr = (window.opera);
var ADie5 = ADdcap && ADgcap && (!ADopr);
var ADie4 = ADdcap && (!ADgcap);
var ADie = ADie5;
var ADwinie = ADua && ADua.indexOf("MSIE") >= 0 && ADua.indexOf("Win") >= 0;
var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin: 0;
var ADwin = (ADua.indexOf("Win")!=-1);
var ADNisChk = false;
var ADsaf = (ADua.indexOf("Safari")!=-1 && ADua.indexOf("AppleWebKit/5")==-1);
var ADsaf3 = (ADua.indexOf("AppleWebKit/5")!=-1);
var YFAclrFileSize = 18.79;
var ADssl = "https://s.yimg.jp";
var ADdef = "http://ai.yimg.jp";
var ADgif = "/bdv/yahoo/javascript/sample.gif?r=" + YFAimgParam;
var ADprtcl = window.location.protocol;
var ADyimg = (ADprtcl.indexOf("http:")!=-1) ? ADdef: ADssl;
var YFAclrgif = ADyimg + ADgif;
var YFAlink = (typeof YFAlink === "undefined") ? "": YFAlink;
var YFAlink2 = (typeof YFAlink2 === "undefined") ? "": YFAlink2;
var YFAlink3 = (typeof YFAlink3 === "undefined") ? "": YFAlink3;
var YFAlink4 = (typeof YFAlink4 === "undefined") ? "": YFAlink4;
var YFAlink5 = (typeof YFAlink5 === "undefined") ? "": YFAlink5;
var YFAtarget = (typeof YFAtarget === "undefined") ? "": YFAtarget;
var YFAtarget2 = (typeof YFAtarget2 === "undefined") ? "": YFAtarget2;
var YFAtarget3 = (typeof YFAtarget3 === "undefined") ? "": YFAtarget3;
var YFAtarget4 = (typeof YFAtarget4 === "undefined") ? "": YFAtarget4;
var YFAtarget5 = (typeof YFAtarget5 === "undefined") ? "": YFAtarget5;
var YFAhip = (typeof YFAhip === "undefined") ? "": YFAhip;
function AD_getCkInfo() {
    if (document.cookie) {
        var e = document.cookie.length;
        var a = document.cookie.split(";");
        var f = a.length;
        var c = {
            "ckstrnum": e,
            "ckarrnum": f
        };
        var b = new RegExp(" ", "g");
        for (var d = 0; d < f; d++) {
            a[d] = a[d].replace(b, "").split("=");
            if (a[d][0] == "YABW") {
                c.b = AD_definedCkInfo(a[d][3]);
                c.c = AD_definedCkInfo(a[d][4]);
                c.i4 = AD_definedCkInfo(a[d][5]);
                c.t4 = AD_definedCkInfo(a[d][6]);
                c.i6 = AD_definedCkInfo(a[d][7]);
                c.t6 = AD_definedCkInfo(a[d][8]);
                c.e = AD_definedCkInfo(a[d][9]);
                break;
            }
        }
        return c;
    } else {
        return false;
    }
}
function AD_definedCkInfo(a) {
    if (a) {
        if (a.split("&")[0]) {
            return a.split("&")[0];
        } else {
            return "";
        }
    } else {
        return "";
    }
}
function AD_getSampleImg(oCkInfo) {
    var imgWork = new Image();
    imgWork.style.display = "none";
    var dtStartTime = new Date();
    imgWork.src = YFAclrgif;
    imgWork.onload = function() {
        eval("'onload'; AD_getSpeed(dtStartTime,oCkInfo);");
    };
}
function AD_getSpeed(j, k) {
    var i = new Date();
    var a = getADdifTime(i, j);
    var h = Math.floor((YFAclrFileSize * 8) / a);
    var e = (k.c) ? k.c: 1;
    var b = parseInt((new Date()) / 1000);
    if (h != "Infinity") {
        if (YFAhip.length == 8) {
            var c = (k.i6) ? k.i6: "";
            var f = (k.t6) ? k.t6: "";
            AD_writeCk({
                "ckstrnum": k.ckstrnum,
                "ckarrnum": k.ckarrnum,
                "b": h,
                "c": e,
                "i4": YFAhip,
                "t4": b,
                "i6": c,
                "t6": f,
                "e": k.e
            });
        } else {
            if (YFAhip.length == 24) {
                var d = (k.i4) ? k.i4: "";
                var g = (k.t4) ? k.t4: "";
                AD_writeCk({
                    "ckstrnum": k.ckstrnum,
                    "ckarrnum": k.ckarrnum,
                    "b": h,
                    "c": e,
                    "i4": d,
                    "t4": g,
                    "i6": YFAhip,
                    "t6": b,
                    "e": k.e
                });
            }
        }
    }
    AD_dispBanner(h);
}
function AD_writeCk(b) {
    if (b.ckstrnum < 4000 && b.ckarrnum < 14) {
        var f = new Date();
        var a = parseInt((new Date()) / 1000);
        if (b.e) {
            f.setTime(b.e * 1000);
        } else {
            var e = 14 * 86400 * 1000;
            var d = 7 * 86400 * 1000;
            var c = Math.round(Math.random() * (e - d)) + d;
            f.setTime(f.getTime() + c);
            b.e = parseInt(f / 1000);
        }
        if (YFAhip.length == 8) {
            document.cookie = "YABW=v=1&b=" + b.b + "&c=" + b.c + "&i4=" + b.i4 + "&t4=" + a + "&i6=" + b.i6 + "&t6=" + b.t6 + "&e=" + b.e + "; domain=.yahoo.co.jp; path=/; expires=" + f.toGMTString();
        } else {
            if (YFAhip.length == 24) {
                document.cookie = "YABW=v=1&b=" + b.b + "&c=" + b.c + "&i4=" + b.i4 + "&t4=" + b.t4 + "&i6=" + b.i6 + "&t6=" + a + "&e=" + b.e + "; domain=.yahoo.co.jp; path=/; expires=" + f.toGMTString();
            }
        }
    }
}
function AD_dispBanner(b) {
    b = (b == "Infinity") ? 150320 : parseInt(b);
    var a = AD_getSwfInfo();
    if (b > a.b) {
        AD_swfCreate(YFAvflash);
    } else {
        AD_swfCreate(YFAmflash);
    }
}
function AD_getSwfInfo() {
    var a = {
        "filesize": YFAcheckImgSize.split("#")[0],
        "b": YFAcheckImgSize.split("#")[1],
        "timeline": YFAcheckImgSize.split("#")[2]
    };
    return a;
}
function AD_escape(a) {
    while (a.indexOf("+")!=-1) {
        a = a.replace("+", "%2B");
    }
    return a;
}
function AD_createParam(c, d, b) {
    var a = document.createElement("param");
    a.setAttribute("name", d);
    a.setAttribute("value", b);
    c.appendChild(a);
    return c;
}
function AD_swfCreate(b) {
    var a = document.getElementById("ADframe" + ADid_sub);
    var e = "clickTAG=" + AD_escape(YFAlink) + "&targetTAG=" + YFAtarget + "&clickTAG2=" + AD_escape(YFAlink2) + "&targetTAG2=" + YFAtarget2 + "&clickTAG3=" + AD_escape(YFAlink3) + "&targetTAG3=" + YFAtarget3 + "&clickTAG4=" + AD_escape(YFAlink4) + "&targetTAG4=" + YFAtarget4 + "&clickTAG5=" + AD_escape(YFAlink5) + "&targetTAG5=" + YFAtarget5;
    if (document.all && a.innerHTML) {
        a.innerHTML = "<obj" + 'ect classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="altfla"' + ' width="' + YFAwidth + '" height="' + YFAheight + '">' + '<param name="FlashVars" value="' + e + '">' + '<param name="movie" value="' + b + '">' + '<param name="loop" value=true>' + '<param name="quality" value="high">' + '<param name="allowScriptAccess" value=always>' + '<param name="wmode" value="opaque">' + "<em" + 'bed name="altfla" src="' + b + '" loop="true"' + ' quality="high" swLiveConnect="false"' + ' allowScriptAccess="always" width="' + YFAwidth + '" height="' + YFAheight + '" type="application/x-shockwave-flash"' + ' wmode="opaque"' + ' FlashVars="' + e + '">' + "</embed></object>";
    } else {
        if (document.getElementById) {
            a.removeChild(document.getElementsByName("altfla").item(0));
            var d = document.createElement("object");
            var c = document.createElement("embed");
            d.setAttribute("classid", "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000");
            d.setAttribute("style", "width:" + YFAwidth + "px;height:" + YFAheight + "px");
            d.id = "altfla";
            d = AD_createParam(d, "FlashVars", e);
            d = AD_createParam(d, "movie", b);
            d = AD_createParam(d, "loop", "true");
            d = AD_createParam(d, "quality", "high");
            d = AD_createParam(d, "allowScriptAccess", "always");
            d = AD_createParam(d, "wmode", "opaque");
            c.setAttribute("name", "altfla");
            c.setAttribute("src", b);
            c.setAttribute("loop", "true");
            c.setAttribute("quality", "high");
            c.setAttribute("swLiveConnect", "false");
            c.setAttribute("allowScriptAccess", "always");
            c.setAttribute("wmode", "opaque");
            c.setAttribute("style", "width:" + YFAwidth + "px;height:" + YFAheight + "px");
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("FlashVars", e);
            d.appendChild(c);
            a.appendChild(d);
        }
    }
    a.style.visibility = "visible";
}
function AD_htmlImage() {
    var a = '<a href="' + YFAaltlink + '"' + ' target="' + YFAtarget + '"' + ">" + "<img" + ' src="' + YFAaltimg + '"' + " width=" + YFAwidth + " height=" + YFAheight + ' border="0" alt=""' + "></a>";
    return a;
}
function AD_htmlDiv() {
    var a = '<div id="ADframe' + ADid_sub + '"' + ' style="visibility:hidden;' + " width:" + YFAwidth + "px;" + " height:" + YFAheight + "px;" + '">';
    if (ADie) {
        a += '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' + '<param name="src" value="" /></object>';
    } else {
        a += '<embed name="altfla" width=' + YFAwidth + " height=" + YFAheight + "></embed>";
    }
    a += "</div>";
    return a;
}
function getADdifTime(b, a) {
    return (b.getTime() - a.getTime()) / 1000;
}
if (ADwinie) {
    if (ADie4) {
        eval('if( self["YFAwidth"] ) ADNisChk=true;');
    } else {
        eval("try { if( YFAwidth ) ADNisChk=true; } catch(e){}");
    }
} else {
    if (self["YFAwidth"]) {
        ADNisChk = true;
    }
}
if (ADNisChk) {
    document.open();
    if (ADie4) {
        document.write(AD_htmlImage());
    } else {
        if (plugin) {
            plugin = (plugin.description.split(" ")[2].split(".")[0]) >= ADflv;
        } else {
            if (ADwinie) {
                document.write("<SCR");
                document.write("IPT LANGUAGE=VBScript> \n");
                document.write("on error resume next \n");
                document.write('plugin = ( IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.' + ADflv + '")))\n');
                document.write("</SCR");
                document.write("IPT> \n");
                if (plugin) {
                    plugin = true;
                } else {
                    plugin = false;
                }
            }
        }
        if (plugin) {
            if (YFAtr_id.indexOf("%adid%")==-1) {
                document.write(AD_htmlDiv());
                if (ADsaf) {
                    AD_swfCreate(YFAmflash);
                } else {
                    if (YFAhip.indexOf("dip%")!=-1 || (YFAhip.length != 8 && YFAhip.length != 24)) {
                        YFAhip = "";
                    }
                    var YFAckinfo = AD_getCkInfo();
                    if (YFAckinfo.c && YFAhip) {
                        var YFAslctdhip = (YFAckinfo.t4 > YFAckinfo.t6) ? YFAckinfo.i4: YFAckinfo.i6;
                        if (YFAslctdhip == YFAhip) {
                            YFAckinfo.c++;
                            if (YFAckinfo.c > 2) {
                                AD_writeCk(YFAckinfo);
                                AD_dispBanner(YFAckinfo.b);
                            } else {
                                AD_getSampleImg(YFAckinfo);
                            }
                        } else {
                            YFAckinfo.c = 1;
                            AD_getSampleImg(YFAckinfo);
                        }
                    } else {
                        YFAckinfo.c = 1;
                        AD_getSampleImg(YFAckinfo);
                    }
                }
            } else {
                document.write(AD_htmlDiv());
                AD_swfCreate(YFAvflash);
            }
        } else {
            document.write(AD_htmlImage());
        }
    }
    document.close();
}
