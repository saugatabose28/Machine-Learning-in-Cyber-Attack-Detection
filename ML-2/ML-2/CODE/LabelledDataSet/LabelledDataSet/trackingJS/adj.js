if (!window.mraid) {
    document.write('\x3cdiv class="GoogleActiveViewClass" ' + 'id="DfaVisibilityIdentifier_2800762225"\x3e');
}
document.write('\x3c!-- Copyright 2014 DoubleClick, a division of Google Inc. All rights reserved. --\x3e\n\x3c!-- Code auto-generated on Mon Aug 25 10:51:59 PDT 2014 --\x3e\n\x3cscript src\x3d\x22http://s0.2mdn.net/879366/flashwrite_1_2.js\x22\x3e\x3c/script\x3e\n');
function DCFlash(id, pVM) {
    var swf = "http://s0.2mdn.net/4285489/Seatbelt_300x250_Cadreon.swf";
    var gif = "http://s0.2mdn.net/4285489/Seatbelt_300x250_Cadreon.jpg";
    var minV = 9;
    var FWH = ' width="300" height="250" ';
    var url = escape("http://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuduQV7oZ3JM94xIDnxLEe1LNHhx8D-R1VxW3NzU5ZUKm2LpXFvMJtYHa8UYLvqw2cE08xuI3J0xFXCZ08HR5N3ijxkr72QAcImkKFSCx5pGol0DKmWBVjVUrtZDGMg25VTuQ&sig=Cg0ArKJSzOwfwhJa3v8oEAE&adurl=http://roadsafety.transport.nsw.gov.au/stayingsafe/vehiclesafety/seatbeltsrestraints/index.html%3Futm_source%3D1522981%26utm_medium%3Ddisplay%26utm_term%3D111037020%26utm_content%3D59204726%26utm_campaign%3Dseatbeltsaugjune2014");
    var fscUrl = url;
    var fscUrlClickTagFound = false;
    var wmode = "opaque";
    var bg = "";
    var dcallowscriptaccess = "never";

    var openWindow = "false";
    var winW = 0;
    var winH = 0;
    var winL = 0;
    var winT = 0;

    var moviePath = swf.substring(0, swf.lastIndexOf("/"));
    var sm = new Array();


    var defaultCtVal = escape("http://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuduQV7oZ3JM94xIDnxLEe1LNHhx8D-R1VxW3NzU5ZUKm2LpXFvMJtYHa8UYLvqw2cE08xuI3J0xFXCZ08HR5N3ijxkr72QAcImkKFSCx5pGol0DKmWBVjVUrtZDGMg25VTuQ&sig=Cg0ArKJSzOwfwhJa3v8oEAE&adurl=http://roadsafety.transport.nsw.gov.au/stayingsafe/vehiclesafety/seatbeltsrestraints/index.html%3Futm_source%3D1522981%26utm_medium%3Ddisplay%26utm_term%3D111037020%26utm_content%3D59204726%26utm_campaign%3Dseatbeltsaugjune2014");
    var ctp = new Array();
    var ctv = new Array();
    ctp[0] = "clickTag";
    ctv[0] = "";


    var fv = '"moviePath=' + moviePath + '/' + '&moviepath=' + moviePath + '/';
    for (i = 1; i < sm.length; i++) {
        if (sm[i] != "") {
            fv += "&submovie" + i + "=" + escape(sm[i]);
        }
    }
    for (var ctIndex = 0; ctIndex < ctp.length; ctIndex++) {
        var ctParam = ctp[ctIndex];
        var ctVal = ctv[ctIndex];
        if (ctVal != null && typeof(ctVal) == 'string') {
            if (ctVal == "") {
                ctVal = defaultCtVal;
            } else {
                ctVal = escape("http://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuduQV7oZ3JM94xIDnxLEe1LNHhx8D-R1VxW3NzU5ZUKm2LpXFvMJtYHa8UYLvqw2cE08xuI3J0xFXCZ08HR5N3ijxkr72QAcImkKFSCx5pGol0DKmWBVjVUrtZDGMg25VTuQ&sig=Cg0ArKJSzOwfwhJa3v8oEAE&adurl=" + ctVal);
            }
            if (ctParam.toLowerCase() == "clicktag") {
                fscUrl = ctVal;
                fscUrlClickTagFound = true;
            } else if (!fscUrlClickTagFound) {
                fscUrl = ctVal;
            }
            fv += "&" + ctParam + "=" + ctVal;
        }
    }
    fv += '"';
    var bgo = (bg == "") ? "": '<param name="bgcolor" value="#' + bg + '">';
    var bge = (bg == "") ? "": ' bgcolor="#' + bg + '"';
    function FSWin() {
        if ((openWindow == "false") && (id == "DCF0"))
            alert('openWindow is wrong.');
        var dcw = 800;
        var dch = 600;
        // IE
        if (!window.innerWidth)
        {
            // strict mode
            if (!(document.documentElement.clientWidth == 0))
            {
                dcw = document.documentElement.clientWidth;
                dch = document.documentElement.clientHeight;
            }
            // quirks mode
            else if (document.body)
            {
                dcw = document.body.clientWidth;
                dch = document.body.clientHeight;
            }
        }
        // w3c
        else
        {
            dcw = window.innerWidth;
            dch = window.innerHeight;
        }
        if (openWindow == "center") {
            winL = Math.floor((dcw - winW) / 2);
            winT = Math.floor((dch - winH) / 2);
        }
        window.open(unescape(fscUrl), id, "width=" + winW + ",height=" + winH + ",top=" + winT + ",left=" + winL + ",status=no,toolbar=no,menubar=no,location=no");
    }
    this.FSWin = FSWin;
    ua = navigator.userAgent;
    if (minV <= pVM && (openWindow == "false" || (ua.indexOf("Mac") < 0 && ua.indexOf("Opera") < 0))) {
        var adcode = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + id + '"' + FWH + '>' +
        '<param name="movie" value="' + swf + '"><param name="flashvars" value=' + fv + '><param name="quality" value="high"><param name="wmode" value="' + wmode + '"><param name="base" value="' + swf.substring(0, swf.lastIndexOf("/")) + '"><PARAM NAME="AllowScriptAccess" VALUE="' + dcallowscriptaccess + '">' + bgo +
        '<embed src="' + swf + '" flashvars=' + fv + bge + FWH + ' type="application/x-shockwave-flash" quality="high" swliveconnect="true" wmode="' + wmode + '" name="' + id + '" base="' + swf.substring(0, swf.lastIndexOf("/")) + '" AllowScriptAccess="' + dcallowscriptaccess + '"></embed></object>';
        if (('j' != "j") && (typeof dclkFlashWrite != "undefined")) {
            dclkFlashWrite(adcode);
        } else {
            document.write(adcode);
        }
    } else {
        document.write('<a target="_blank" href="' + unescape(url) + '"><img src="' + gif + '"' + FWH + 'border="0" alt="Advertisement" galleryimg="no"></a>');
    }
}
function getFlashVersion() {
    var vfv = "0,0,0";
    try {
        try {
            var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
            try {
                axo.AllowScriptAccess = "always";
            } catch (e) {
                return "6";
            }
        } catch (e) {}
        vfv = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");
    } catch (e) {
        try {
            if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
                vfv = navigator.plugins["Shockwave Flash"].description;
            }
        } catch (e) {}
    }
    return vfv.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1].split(',').shift();
}
var DCid = (isNaN("284052505")) ? "DCF2": "DCF284052505";
var pVM = getFlashVersion();
eval("function " + DCid + "_DoFSCommand(c,a){if(c=='openWindow')o" + DCid + ".FSWin();}o" + DCid + "=new DCFlash('" + DCid + "',pVM);");
//-->
document.write('\n\x3cnoscript\x3e\x3ca target\x3d\x22_blank\x22 href\x3d\x22http://adclick.g.doubleclick.net/pcs/click?xai\x3dAKAOjsuduQV7oZ3JM94xIDnxLEe1LNHhx8D-R1VxW3NzU5ZUKm2LpXFvMJtYHa8UYLvqw2cE08xuI3J0xFXCZ08HR5N3ijxkr72QAcImkKFSCx5pGol0DKmWBVjVUrtZDGMg25VTuQ\x26sig\x3dCg0ArKJSzOwfwhJa3v8oEAE\x26adurl\x3dhttp://roadsafety.transport.nsw.gov.au/stayingsafe/vehiclesafety/seatbeltsrestraints/index.html%3Futm_source%3D1522981%26utm_medium%3Ddisplay%26utm_term%3D111037020%26utm_content%3D59204726%26utm_campaign%3Dseatbeltsaugjune2014\x22\x3e\x3cimg src\x3d\x22http://s0.2mdn.net/4285489/Seatbelt_300x250_Cadreon.jpg\x22 width\x3d\x22300\x22 height\x3d\x22250\x22 border\x3d\x220\x22 alt\x3d\x22Advertisement\x22 galleryimg\x3d\x22no\x22\x3e\x3c/a\x3e\x3c/noscript\x3e\n\n');
if (!window.mraid) {
    (function() {
        document.write('\x3c/div\x3e');
        var avDiv = document.getElementById("DfaVisibilityIdentifier_2800762225");
        if (avDiv) {
            avDiv['_avi_'] = 'BNKRGnrR-VMPXB8nj8QXS7IGwCwAAAAAQATgByAEJ4AQCoAY_';
            avDiv['_avihost_'] = 'pagead2.googlesyndication.com';
        }
        var glidar = document.createElement('script');
        glidar.type = 'text/javascript';
        glidar.async = true;
        glidar.src = '//pagead2.googlesyndication.com/pagead/js/lidar.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(glidar, s);
    })();
}
