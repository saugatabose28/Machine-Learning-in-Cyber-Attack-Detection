if (!Date.now) {
    Date.now = function() {
        return new Date().getTime()
    }
}
String.prototype.trim = String.prototype.trim || function() {
    return this.replace(/^\s+|\s+$/g, "")
};
truste = window.truste || {};
if (!truste.eu) {
    truste.eu = {};
    truste.eu.bindMap = {};
    truste.img = new Image(1, 1);
    truste.eu.popdiv = "";
    truste.eu.popdiv2 = "";
    truste.eu.popdiv3 = "";
    truste.eu.popframe = "";
    truste.eu.iconid = "";
    truste.eu.assetServerURL = "http://consent.truste.com/".replace(/^.{3,5}:/, window.location.protocol) + "get?name=";
    truste.eu.COOKIE_DAX_NAME = "notice_dax_signature";
    truste.eu.COOKIE_PREF_NAME = "notice_preferences";
    truste.eu.COOKIE_CATEGORY_NAME = "optout_domains";
    truste.eu.translations = ["es", "fr", "de", "it"];
    truste.ts = new Date()
}
truste.eu.trace = truste.eu.trace || function() {
    if (window.console && console.log && window.location.hostname.indexOf(".") < 0) {
        for (var a = 0;
        a < arguments.length; a++) {
            console.log(arguments[a])
        }
    }
};
truste.eu.addEvent = truste.eu.addEvent || function(f, c, b, a) {
    try {
        if (f.addEventListener) {
            f.addEventListener(c, b, false);
            return true
        } else {
            if (f.attachEvent) {
                return f.attachEvent("on" + c, b)
            } else {
                if (a) {
                    b();
                    return true
                }
            }
        }
    } catch (d) {
        if (window.console) {
            console.log(d.message)
        } else {
            throw d
        }
    }
    return false
};
truste.eu.sendnotice = truste.eu.sendnotice || function(b, a) {
    truste.img = new Image(1, 1);
    truste.img.alt = "";
    truste.img.src = a.replace(/^.{3,5}:/, window.location.protocol) + b + "&rand=" + Math.random();
    truste.ts = new Date()
};
truste.eu.readCookie = truste.eu.readCookie || function(d) {
    var a = null;
    var h = d + "=";
    try {
        var b = document.cookie.split(";");
        for (var f = 0; f < b.length; f++) {
            var j = b[f].trim();
            if (j.indexOf(h) == 0) {
                a = j.substring(h.length);
                break
            }
        }
    } catch (g) {
        if (window.console) {
            console.log(g.message)
        } else {
            throw g
        }
    }
    if (a && window.localStorage) {
        try {
            truste.eu.createCookieStorage(d, a)
        } catch (g) {}
    } else {
        if (!a && window.localStorage) {
            a = truste.eu.readCookieStorage(d)
        }
    }
    return a
};
truste.eu.createCookie = truste.eu.createCookie || function(c, d, g) {
    if (window.localStorage) {
        try {
            truste.eu.createCookieStorage(c, d, g)
        } catch (f) {}
    }
    var a = "; expires=";
    if (!g) {
        var b = new Date();
        b.setDate(b.getDate() + 395);
        a += b.toGMTString()
    } else {
        if (g == "0") {
            a = ""
        } else {
            a += g
        }
    }
    document.cookie = c + "=" + d + a + "; path=/;domain=" + truste.eu.bindMap.domain
};
truste.eu.readCookieStorage = truste.eu.readCookieStorage || function(b) {
    var f = "";
    var d = "truste.eu.cookie.";
    try {
        var a = d + b;
        var j = truste.eu.getStorage(a, false);
        var c = truste.eu.getStorage(a, true);
        if (!j&&!c) {
            return null
        }
        if (c) {
            truste.eu.createCookie(b, c.value);
            return c.value
        } else {
            var i = new Date(j.expires);
            var g = new Date();
            if (i < g) {
                try {
                    window.localStorage.removeItem(a);
                    return null
                } catch (h) {
                    return null
                }
            }
            truste.eu.createCookie(b, j.value, j.expires);
            return j.value
        }
    } catch (h) {
        if (window.console) {
            console.log(h.message)
        }
    }
    return null
};
truste.eu.createCookieStorage = truste.eu.createCookieStorage || function(a, h, d) {
    var f = {};
    var c = "truste.eu.cookie.";
    f.name = c + a;
    f.value = h;
    f.path = "/";
    if (d == "0") {
        f.expires = d
    } else {
        if (d) {
            var j = new Date(d);
            if (isNaN((j = j.getTime() + (j.getTimezoneOffset() * 60000)))) {
                throw new Error("Invalid Date String")
            }
            f.expires = j
        } else {
            f.expires = Date.now() + (395 * 24 * 60 * 60 * 1000)
        }
    }
    var b = f;
    if (!window.JSON) {
        var k = false, i = "{";
        for (var e in f) {
            i += (k ? "," : "") + '"' + e + '":"' + f[e] + '"';
            k = true
        }
        b = i + "}"
    }
    truste.eu.setStorage(f.name, b, (f.expires < Date.now()))
};
truste.eu.setStorage = truste.eu.setStorage || function(c, f, a) {
    var b, d = a ? (window.sessionStorage || window.localStorage): window.localStorage;
    if (!d) {
        throw new Error("Current browser does not support HTML5 Local Storage")
    }
    if (window.JSON) {
        if (typeof f == "string") {
            throw new Error("This function does not accept Strings - Please pass Objects only, to be JSON-ified")
        }
        b = JSON.stringify(f)
    } else {
        if (typeof f != "string") {
            throw new Error("This browser does not have JSON - Please pass Strings only")
        }
        b = f
    }
    try {
        if (d.setItem) {
            d.setItem(c, b)
        } else {
            d[c] = b
        }
    } catch (g) {}
};
truste.eu.getStorage = truste.eu.getStorage || function(key, isSession) {
    var _item = null, _storage = isSession ? (window.sessionStorage || window.localStorage): window.localStorage;
    if (!_storage) {
        throw new Error("Current browser does not support HTML5 Local Storage")
    }
    try {
        if (_storage.getItem) {
            _item = _storage.getItem(key)
        } else {
            _item = _storage[key]
        }
    } catch (e) {}
    return _item ? ((typeof _item == "string") ? (window.JSON ? JSON.parse(_item) : (!(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(_item.replace(/"(\\.|[^"\\])*"/g, ""))) && eval("(" + _item + ")"))) : _item) : null
};
truste.eu.getPrefValue = function(b) {
    var a = parseInt(b.prefCookie);
    return isNaN(a) ? null : a
};
truste.eu.changeProtocol = truste.eu.changeProtocol || function(a) {
    var d = window.location.protocol;
    for (var c in a) {
        if (a[c] && a[c].replace) {
            a[c] = a[c].replace(/^.{3,5}:/, d)
        }
    }
};
truste.eu.initializeIcon = function() {
    var a = truste.eu.bindMap;
    var c = document.createElement("script");
    c.setAttribute("defer", "defer");
    c.setAttribute("async", "async");
    var e = "domain=" + a.domain + "&c=" + a.containerId + "&country=" + a.country + "&language=" + a.language + "&js=2";
    var f = "http://consent.truste.com/notice?";
    c.src = f.replace(/^.{3,5}:/, window.location.protocol) + e;
    var d = document.getElementsByTagName("script");
    d = d[d.length - 1].parentNode;
    d.insertBefore(c, d.lastChild)
};
truste.eu.getParam = function(c, a) {
    var b = truste.eu.parseQuery(c);
    return b[a]
};
truste.eu.parseQuery = function(g) {
    var d = g.src.replace(/^[^\?]+\??/, "").replace("#", "&");
    var e = new Object();
    if (!d) {
        return e
    }
    var a = d.split(/[;&]/);
    for (var c = 0; c < a.length; c++) {
        if (!a[c]) {
            continue
        }
        var h = a[c].split("=");
        var b = unescape(h.shift());
        var f = unescape(h.join("="));
        f = f.replace(/\+/g, " ");
        e[b] = f
    }
    return e
};
window.te_notice_clr1_4a3602a0_741d_42e2_8c70_19e7e65c97f0_ib = "{Interstitial}";
window.te_notice_clr1_4a3602a0_741d_42e2_8c70_19e7e65c97f0_bi = {
    domain: "cnn.com",
    assetsPath: "assets/",
    width: parseInt("840"),
    height: parseInt("270"),
    baseName: "te-notice-clr1-4a3602a0-741d-42e2-8c70-19e7e65c97f0",
    showOverlay: "javascript:truste.notice.showoverlay(te_notice_clr1_4a3602a0_741d_42e2_8c70_19e7e65c97f0_bi)",
    hideOverlay: "javascript:truste.notice.hideoverlay(te_notice_clr1_4a3602a0_741d_42e2_8c70_19e7e65c97f0_bi)",
    anchName: "te-notice-clr1-4a3602a0-741d-42e2-8c70-19e7e65c97f0-anch",
    intDivName: "te-notice-clr1-4a3602a0-741d-42e2-8c70-19e7e65c97f0-itl",
    iconSpanId: "te-notice-clr1-4a3602a0-741d-42e2-8c70-19e7e65c97f0-icon",
    containerId: "teconsent",
    messageBaseUrl: "http://consent.truste.com/noticemsg?",
    daxSignature: "",
    privacyUrl: "",
    prefmgrUrl: "http://consent-pref.truste.com/?type=cnn",
    irBaseUrl: "{IRBaseUrl}",
    text: "",
    icon: "Cookie",
    locale: "en",
    language: "en",
    country: "au",
    backgroundImage: "url(" + truste.eu.assetServerURL + "trans.png)",
    interstitial: window.te_notice_clr1_4a3602a0_741d_42e2_8c70_19e7e65c97f0_ib,
    behavior: "implied",
    behaviorManager: "eu",
    provisionedFeatures: "",
    daxCookie: truste.eu.readCookie(truste.eu.COOKIE_DAX_NAME),
    prefCookie: truste.eu.readCookie(truste.eu.COOKIE_PREF_NAME),
    cookiePreferenceIcon: "truste_cookiepreferences.png",
    closeButtonUrl: "http://consent.truste.com/get?name=noticeclosebtn.png",
    autoDisplayCloseButton: false
};
truste.eu.bindMap = window.te_notice_clr1_4a3602a0_741d_42e2_8c70_19e7e65c97f0_bi;
truste.eu.bindMap.apiDefaults = "";
truste.eu.jsNode1 = (function() {
    if (document.currentScript) {
        return document.currentScript
    }
    if (document.scripts) {
        return document.scripts[document.scripts.length - 1]
    }
    var b, d = document.getElementsByTagName("script"), c = d.length;
    while (c-->0) {
        b = d[c];
        if (!b.src || b.text || b.nextSibling) {
            continue
        }
        if (b.src.match(/\/\/[^\.]+\.truste(-labs|-svc)?\.(com|net)(:\n+)?\/[^\?#]*notice\?/)) {
            return b
        }
    }
    return null
})();
truste.eu.noticeLP = truste.eu.jsNode1 && truste.eu.parseQuery(truste.eu.jsNode1) || {};
truste.eu.noticeLP.domain = truste.eu.bindMap.domain || truste.eu.noticeLP.domain;
truste.eu.noticeLP.behavior = truste.eu.bindMap.behavior || truste.eu.noticeLP.behavior;
truste.eu.noticeLP.locale = truste.eu.bindMap.country && (truste.eu.bindMap.country + "-" + truste.eu.bindMap.language) || truste.eu.noticeLP.locale;
if (window.location.protocol != "http:") {
    truste.eu.changeProtocol(truste.eu.bindMap)
}
if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent) && (new Number(RegExp.$1)) < 3.6) {
    truste.eu.addEvent(window, "load", function() {
        setTimeout(truste.eu.initializeIcon, 500)
    })
} else {
    truste.eu.initializeIcon()
}
this.truste = this.truste || {};
truste.eu = truste.eu || {
    bindMap: {}
};
truste.cma = truste.cma || (function(defaults, binfo) {
    var me = {};
    var debug = {};
    var fake = debug.fake = {
        capabilities: ["getConsent", "getConsentDecision"],
        default_consent: "denied",
        default_source: "implied",
        consentDecision: null,
        reportlevel: 5,
        consent: {
            all: {
                value: null,
                type: {}
            }
        }
    };
    var valid_values = {
        consent: {
            denied: 1,
            approved: 2
        },
        source: {
            implied: 1,
            asserted: 2
        },
        type: {
            session: 1048561,
            necessary: 65523,
            limited: 65527,
            host: 65311,
            shared: 65343,
            present: 65407,
            systemic: 61951,
            functional: 62463,
            unique: 63487,
            uuid: 65535,
            user: 8191,
            site: 16383,
            party: 32767,
            "private": 16241,
            security: 16147,
            functionality: 29043,
            preferences: 30579,
            behavioral: 13119,
            tracking: 62335,
            analytic: 30583,
            advertising: 63487,
            requested: 8055,
            required: 16179,
            functionality: 29555,
            targeting: 65535
        },
        category: {
            required: 1,
            functional: 2,
            advertising: 3
        }
    };
    var requestors = {
        loading: []
    };
    var caddy = null;
    var authorities = [".truste.com"];
    var blacklist = [".example-xxx.com"];
    var tconsole = debug.tconsole = {
        isDebug: function() {
            return (window.PrivacyManagerAPI || me).debug || window.location.hostname.indexOf(".") < 0
        },
        log: function(msg) {
            tconsole.isDebug() && window.console && window.console.log(msg)
        }
    };
    var isCapable = debug.isCapable = function(action) {
        for (var i = fake.capabilities.length;
        i-->0;) {
            if (fake.capabilities[i] == action) {
                return i + 1
            }
        }
        return 0
    };
    var getJSON = debug.getJSON = function(text) {
        try {
            return window.JSON ? JSON.parse(text) : (!(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(text.replace(/"(\\.|[^"\\])*"/g, ""))) && eval("(" + text + ")"))
        } catch (e) {}
        return null
    };
    var endsWith = debug.endsWith = function(b, a) {
        return (a != null && a.replace) ? new RegExp(".*" + a.replace(/\./g, "\\.") + "$").test(b) : false
    };
    var cheapJSON = debug.cheapJSON = function(ob) {
        if (window.JSON && JSON.stringify) {
            return JSON.stringify(ob)
        }
        if (ob instanceof Array) {
            var s = "[";
            if (ob.length) {
                s += cheapJSON(ob[0]);
                for (var i = 0; i < ob.length; i++) {
                    s += "," + cheapJSON(ob[i])
                }
            }
            return s + "]"
        } else {
            if (typeof ob == "string") {
                return '"' + ob + '"'
            } else {
                if ((ob) instanceof Object) {
                    var comma = false, s = "{";
                    for (var g in ob) {
                        s += (comma ? "," : "") + '"' + g + '":' + cheapJSON(ob[g]);
                        comma = true
                    }
                    return s + "}"
                } else {
                    return ob
                }
            }
        }
    };
    var getStorage = debug.getStorage = function(name, value) {
        try {
            if (value != null) {
                if (!value.charAt) {
                    value = cheapJSON(value)
                }
            }
            if (window.localStorage) {
                try {
                    if (value == null) {
                        value = window.localStorage[name] || window.localStorage.getItem(name);
                        if (value) {
                            return (getJSON(value) || value)
                        }
                        value = null
                    } else {
                        if (value) {
                            window.localStorage.setItem(name, value)
                        } else {
                            delete window.localStorage[name]
                        }
                    }
                } catch (e) {
                    tconsole.log("said was localstorage but wasn't: " + e.stack)
                }
            }
            var rx;
            if (value == null) {
                rx = new RegExp("\\s*" + name.replace(".", "\\.") + "\\s*=\\s*([^,;\\s]*)").exec(document.cookie);
                if (rx && rx.length > 1) {
                    value = decodeURIComponent(rx[1]);
                    if (value && window.localStorage) {
                        try {
                            window.localStorage.setItem(name, value)
                        } catch (e) {
                            tconsole.log("said was localstorage but wasn't: " + e.stack)
                        }
                    }
                    return (getJSON(value) || value)
                }
            } else {
                var d = (this.binfo && binfo.domain) || null;
                if (d && d.slice(0, 1) != ".") {
                    d = "." + d
                }
                var exp = "; expires=" + (value ? ((rx = new Date()) && rx.setDate(720) && rx.toGMTString()) : "Thu, 01 Jan 1970 00:00:01 GMT");
                exp += "; path=/" + (d ? "; domain=" + d : "");
                document.cookie = name + "=" + encodeURIComponent(value) + exp
            }
        } catch (e) {
            tconsole.log("error with getStorage : " + e.stack)
        }
        return null
    };
    var init = debug.init = function() {
        try {
            var newfake;
            if (defaults && defaults.length > 20) {
                newfake = getJSON(defaults);
                if (newfake) {
                    for (var s in newfake) {
                        fake[s] = newfake[s]
                    }
                }
            }
            newfake = getStorage("PrivacyManagerAPI.preferences");
            if (newfake) {
                for (var s in newfake) {
                    fake.consent[s] = newfake[s]
                }
            }
            if (binfo && binfo.behavior == "implied") {
                fake.default_consent = "approved"
            }
        } catch (e) {
            window.console && console.log && console.log(e)
        }
    };
    var loadConsentDecision = debug.loadConsentDecision = function() {
        if (fake.consentDecision == null) {
            var x = getStorage("truste.eu.cookie.notice_preferences");
            if (x instanceof Object) {
                x = x.value
            }
            x = parseInt(x);
            if (!isNaN(x)) {
                fake.consentDecision = x + 1
            }
        }
        if (fake.consentDecision == 3 || fake.consentDecision == 0) {
            fake.consent.all.value = "approved"
        } else {
            if (fake.consentDecision == 2 || fake.consentDecision == 1) {
                fake.consent.all.value = "denied"
            }
        }
        delete fake.consent.all.type.functional;
        delete fake.consent.all.type.advertising;
        if (x == 1) {
            fake.consent.all.type.functional = "denied";
            fake.consent.all.type.advertising = "denied"
        } else {
            if (x == 2) {
                fake.consent.all.type.functional = "approved";
                fake.consent.all.type.advertising = "denied"
            }
        }
        typeof binfo != "undefined" && binfo.gtm && updateGTM(fake)
    };
    var updateGTM = debug.updateGTM = function(fakeOb) {
        var x, dl;
        if (!fakeOb || (x = fakeOb.consentDecision) < 1) {
            return 
        }
        var FUNCTIONAL_IDS_CLASSES = fakeOb.gtm_fun_ids || "ga-ms-ua", ADVERTISING_IDS_CLASSES = fakeOb.gtm_adv_ids || "ta-asp-bzi-sp-awct-cts-csm-img-flc-fls-mpm-mpr-m6d-tc-tdc", p = "permit", result = "";
        if (x == 1) {
            result = FUNCTIONAL_IDS_CLASSES + "-" + ADVERTISING_IDS_CLASSES;
            p += " required"
        } else {
            if (x == 2) {
                result = ADVERTISING_IDS_CLASSES;
                p += " functional"
            }
        }
        var dom = "; Path=/; Domain=." + ((binfo && (location.hostname.indexOf(binfo.domain) + 1) && binfo.domain) || location.hostname.replace(/([^\.]*\.)?([^\.]+\.[^\.]+)/, "$2")) + "; Max-Age=31536000";
        var ck = (ck = document.cookie.match(/\bcmapi_cookie_privacy=[\w ]+\b/)) && ck[1];
        if (ck != result) {
            document.cookie = "cmapi_gtm_bl=" + result + dom;
            document.cookie = "cmapi_cookie_privacy=" + p + dom;
            if (dl = window[(binfo && binfo.dl) || "dataLayer"]) {
                dl.push({
                    "gtm.blacklist": result
                });
                !ck && dl.push({
                    event: "cookie_prefs_set"
                })
            }
        }
    };
    var getConsentForDomain = debug.getConsentForDomain = function(domain) {
        if (!domain) {
            domain = this.location.hostname
        }
        loadConsentDecision();
        var temp = fake.consent[domain];
        if (temp && (!temp.currentDecision || (temp.currentDecision == fake.consentDecision))) {
            return temp
        }
        var lookup = window.localStorage;
        if (lookup && fake.consentDecision && (lookup = getJSON(lookup.getItem("optout_domains")))) {
            for (var s in lookup) {
                if (lookup[s].domains[domain] || lookup[s].domains[domain.substring(1)]) {
                    temp = {
                        value: "denied",
                        type: {}
                    };
                    if (lookup[s].value < fake.consentDecision) {
                        temp = temp || {
                            type: {}
                        };
                        temp.value = "approved";
                        break
                    }
                }
            }
        }
        return temp && (temp.currentDecision = fake.consentDecision) && (fake.consent[domain] = temp)
    };
    var _imgrep = [];
    var sendEvent = debug.sendEvent = function(action, authr, type, asker, info, domain) {
        if (caddy && caddy.hold) {
            return
        }
        if (isCapable(action)) {
            if (!isNaN(authr) || fake.reportlevel & 4) {
                if (!caddy) {
                    if (fake.reportlevel & 1) {
                        return
                    }
                    if (fake.reportlevel & 8 && asker && domain && endsWith(domain, asker)) {
                        return 
                    }
                } else {
                    if (fake.reportlevel & 2) {
                        return
                    }
                    var from = caddy.from;
                    if (fake.reportlevel & 16 && domain && from && endsWith(domain, from)) {
                        return 
                    }
                    if (fake.reportlevel & 32 && asker && from && endsWith(from, asker)) {
                        return
                    }
                }
            }
        } else {
            if (action == "uka" && fake.reportlevel & 64) {
                return 
            }
        }
        if (info == null) {
            info = {
                page: window.location.pathname
            }
        }
        var mydomain = window.location.hostname, q = "?a=" + encodeURIComponent(authr) + (type ? ("&t=" + encodeURIComponent(type)) : "") + "&u=" + encodeURIComponent(asker) + (info ? "&n=" + encodeURIComponent(cheapJSON(info)) : "");
        if (this.binfo) {
            mydomain = binfo.domain;
            binfo.locale = binfo.locale || "";
            var qn = binfo.locale.indexOf("-");
            q += "&c=" + encodeURIComponent(binfo.locale.slice(0, qn)) + "&b=" + encodeURIComponent(binfo.behavior) + "&l=" + encodeURIComponent(binfo.locale.substr(qn + 1))
        }
        _imgrep[_imgrep.push(new Image(1, 1)) - 1].src = "//trackerapi.truste.com/trackerapi/1.0/log/cma/" + mydomain + "/" + action + q + "&ts=" + new Date().getTime()
    };
    var sendError = debug.sendError = function(action, authr, type, asker, info, first, data) {
        if (fake.reportlevel & 128) {
            return
        }
        if (typeof data == "object") {
            data = cheapJSON(data)
        }
        var domain = window.location.hostname, q = "?a=" + encodeURIComponent(authr) + (type ? ("&t=" + encodeURIComponent(type)) : "") + "&u=" + encodeURIComponent(asker) + (info ? "&n=" + encodeURIComponent(info) : "") + "&i=" + encodeURIComponent(action);
        if (binfo) {
            domain = binfo.domain;
            q += "&c=" + binfo.locale.slice(0, 2) + "&b=" + binfo.behavior + "&l=" + binfo.locale.substr(3)
        }
        var req = new (window.XMLHttpRequest || window.ActiveXObject)("MSXML2.XMLHTTP.3.0");
        req.open("POST", "//trackerapi.truste.com/trackerapi/1.0/log/cma/" + domain + "/error" + q + "&ts=" + new Date().getTime(), true);
        req.setRequestHeader("Content-type", "application/json");
        req.send(data)
    };
    var sendPost = debug.sendPost = function(e, rob) {
        if (!window.postMessage) {
            return
        }
        if (typeof rob == "object") {
            rob = ((window.JSON && JSON.stringify) || cheapJSON)(rob)
        }
        var from = e.origin || e.domain;
        if (from == "null" ||!from) {
            from = "*"
        }
        tconsole.log("responding to (" + from + ") message : " + rob);
        e.source.postMessage(rob, from)
    };
    var isAuthorized = debug.isAuthorized = function(domain, from, asker, auth) {
        if (!auth) {
            auth = ""
        }
        auth.charAt && (auth = auth.split(/\s*,\s*/));
        var g, result = 0, home = "." + window.location.hostname;
        from = from || home;
        for (var j = blacklist.length; j-->0;) {
            var black = blacklist[j];
            if (endsWith(from, black)) {
                return 0
            }
        }
        if (endsWith(domain, asker)) {
            return - 4
        }
        if (endsWith(domain, from)) {
            return - 4
        }
        for (var j = auth.length; j-->0;) {
            var aj = auth[j];
            if (aj.charAt(0) != ".") {
                aj = auth[j] = "." + aj
            }
            for (var i = authorities.length;
            i-->0;) {
                g = authorities[i];
                if (endsWith(aj, g)) {
                    return i + 1
                }
                if (endsWith(aj, g.substring(0, g.lastIndexOf(".")) + "-labs.com")) {
                    return i + 1
                }
                if (endsWith(aj, g.substring(0, g.lastIndexOf(".")) + "-svc.net")) {
                    return i + 1
                }
            }
            if (endsWith(domain, aj)) {
                result = Math.min( - 2, result)
            } else {
                if (endsWith(home, aj)) {
                    result = Math.min( - 1, result)
                } else {
                    if (endsWith(from, aj)) {
                        result = Math.min( - 3, result)
                    }
                }
            }
        }
        if (result) {
            return result
        }
        if (!domain ||!asker) {
            return 0
        }
        sendEvent("uka", auth, 0, asker, null, domain, from);
        return 0
    };
    var sendUpdatesTo = debug.sendUpdatesTo = function(sendto, includeDecision, ts) {
        caddy = {
            hold: true
        };
        var e2, _ob2 = {
            PrivacyManagerAPI: {
                timestamp: ts,
                capabilities: fake.capabilities
            }
        };
        for (var domain in sendto) {
            if (list = sendto[domain]) {
                for (var i = list.length;
                i-->0;) {
                    if ((e2 = list[i]) && e2.w) {
                        if (e2.getConsent) {
                            var it = apiDo("getConsent", authorities[0], e2.d, authorities[0], e2.t);
                            if (e2.s != it.source || e2.c != it.consent) {
                                _ob2.PrivacyManagerAPI.consent = e2.c = it.consent;
                                _ob2.PrivacyManagerAPI.source = e2.s = it.source;
                                _ob2.PrivacyManagerAPI.self = e2.a;
                                _ob2.PrivacyManagerAPI.domain = e2.d;
                                _ob2.PrivacyManagerAPI.action = "getConsent";
                                sendPost(e2.w, _ob2)
                            }
                        } else {
                            if (e2.getConsentDecision && includeDecision) {
                                _ob2.PrivacyManagerAPI.consent = null;
                                _ob2.PrivacyManagerAPI.source = null;
                                _ob2.PrivacyManagerAPI.self = e2.a;
                                _ob2.PrivacyManagerAPI.action = "getConsentDecision";
                                sendPost(e2.w, _ob2)
                            }
                        }
                    }
                }
            }
        }
        caddy = null
    };
    var getBType = debug.getBType = function(type) {
        var resp = 65535;
        if (type) {
            if (type.charAt) {
                type = type.split(/\W+/)
            } else {
                if (!isNaN(type)) {
                    type = [type]
                }
            }
            for (var j = type.length; j-->0;) {
                if (isNaN(type[j])) {
                    if (valid_values.type[type[j]]) {
                        resp&=valid_values.type[type[j]]
                    }
                } else {
                    resp&=parseInt(type[j])
                }
            }
        }
        return resp
    };
    var getTypePermission = debug.getTypePermission = function(typeOb, type) {
        if (isNaN(type)) {
            type = getBType(type)
        }
        var resp = null;
        if (type != 0) {
            resp = [];
            for (var key in typeOb) {
                if (typeOb[key] && valid_values.consent[typeOb[key]]) {
                    resp.temp = getBType(key);
                    if ((resp.temp | type) == resp.temp) {
                        if (!resp[typeOb[key]]) {
                            resp.push(typeOb[key])
                        }
                        resp[typeOb[key]] = key
                    }
                }
            }
        }
        return resp.join(",")
    };
    var updatePreferences = debug.updatePreferences = function(domain, value, types) {
        if (!domain) {
            return false
        }
        domain.charAt(0) != "." && (domain = "." + domain);
        if (valid_values.consent[value]) {
            var g = getConsentForDomain(domain) || {
                type: {}
            };
            g.value = value;
            for (var s in types) {
                if (valid_values.consent[types[s]]) {
                    if (isNaN(s)) {
                        if (valid_values.type[s]) {
                            g.type[s] = types[s]
                        }
                    } else {
                        g.type[s] = types[s]
                    }
                } else {
                    if (types[s] === null || types[s] === "null") {
                        g.type[s] = null;
                        delete g.type[s]
                    }
                }
            }
            fake.consent[domain] = g
        } else {
            if (value === null || value === "null") {
                fake.consent[domain] = null;
                delete fake.consent[domain]
            } else {
                return false
            }
        }
        getStorage("PrivacyManagerAPI.preferences", fake.consent);
        return true
    };
    var apiDo = debug.apiDo = function(action, asker) {
        if (!action ||!asker ||!isCapable(action)) {
            return {
                error: "Call is missing required parameters or not allowed"
            }
        }
        switch (action) {
        case"getConsent":
            var auth = arguments[3] || window.location.hostname;
            var domain = arguments[2] || window.location.hostname;
            domain && domain.charAt(0) != "." && (domain = "." + domain);
            var authr = isNaN(auth) ? isAuthorized(domain, (caddy || {}).from, asker, auth): auth;
            if (domain == "all") {
                return {
                    error: "Call is not authorized"
                }
            }
            var type = getBType(arguments[4]);
            var it = getConsentForDomain(domain);
            var result = getTypePermission(fake.consent.all.type, type) || fake.consent.all.value;
            if (it) {
                result = getTypePermission(it.type, type) || it.value || result
            }
            sendEvent(action, authr ? authr : auth, type, asker, caddy, domain);
            return result ? {
                source: "asserted",
                consent: result
            } : {
                source: fake.default_source,
                consent: fake.default_consent
            };
        case"getConsentDecision":
            loadConsentDecision();
            var result = fake.consentDecision || 0;
            var source = fake.consentDecision != null ? "asserted": "implied";
            sendEvent(action, - 1, 0, asker);
            return {
                consentDecision: result,
                source: source
            };
        case"changeReportLevel":
            return (fake.reportlevel = parseInt(arguments[2] + ""))
        }
    };
    var processMessage = debug.processMessage = function(apiOb, e) {
        var v, from;
        if (!apiOb ||!e ||!apiOb.PrivacyManagerAPI ||!(from = e.origin || e.domain)) {
            return null
        }
        tconsole.log("processing message from " + from);
        e = {
            origin: e.origin,
            domain: e.domain,
            source: e.source
        };
        apiOb.PrivacyManagerAPI.capabilities = fake.capabilities;
        if (from == "null" || from == "") {
            from = window.location.hostname
        }
        if ((v = from.indexOf("://")) > 0) {
            from = from.substring(v + 3)
        }
        if ((v = from.indexOf(":")) > 0) {
            from = from.substring(0, v)
        }
        from = "." + from;
        switch (apiOb.PrivacyManagerAPI.action) {
        case"getConsent":
            var asker, auth, domain, nt = apiOb.PrivacyManagerAPI.type || undefined;
            asker = apiOb.PrivacyManagerAPI.self;
            asker && asker.charAt(0) != "." && (asker = "." + asker);
            auth = apiOb.PrivacyManagerAPI.authority;
            domain = apiOb.PrivacyManagerAPI.domain;
            domain && domain.charAt(0) != "." && (domain = "." + domain);
            if (domain&&!endsWith(domain, from)) {
                if (!auth ||!asker || (auth = isAuthorized(domain, from, asker, auth) <= 0)) {
                    return {
                        error: "Call is not authorized"
                    }
                }
            } else {
                if (!domain) {
                    domain = from
                }
                if (!auth) {
                    auth = domain
                }
            }
            caddy = {
                from: from
            };
            var resp = apiDo("getConsent", asker, domain, auth, nt);
            caddy = null;
            if (resp&&!resp.error) {
                requestors[from] = requestors[from] || [];
                requestors[from].push({
                    w: e,
                    getConsent: 1,
                    t: nt,
                    a: asker,
                    d: domain,
                    s: resp.source,
                    c: resp.consent
                })
            }
            return resp;
        case"getConsentDecision":
            var caller = apiOb.PrivacyManagerAPI.self;
            if (!caller) {
                return {
                    error: "Missing identity of API caller"
                }
            }
            requestors[from] = requestors[from] || [];
            requestors[from].push({
                w: e,
                getConsentDecision: 1,
                t: null,
                a: caller
            });
            return {
                consentDecision: null,
                source: null
            };
        case"updateDecision":
            if (isAuthorized(null, null, null, from) > 0) {
                var newValue = apiOb.PrivacyManagerAPI.value;
                if (isNaN(newValue)) {
                    return {
                        error: "Decision value is invalid"
                    }
                }
                if (newValue == fake.consentDecision) {
                    return
                }
                fake.consentDecision = newValue;
                loadConsentDecision();
                tconsole.log("update decision to :" + newValue);
                var sendto = requestors;
                sendUpdatesTo(sendto, true, apiOb.PrivacyManagerAPI.timestamp);
                return null
            } else {
                return {
                    error: "Call is not from an authorized Location"
                }
            }
        case"updatePreference":
            if (isAuthorized(null, null, null, from) > 0) {
                var forDomain = apiOb.PrivacyManagerAPI.domain;
                if (!forDomain) {
                    return {
                        error: "Required parameter 'domain' not sent"
                    }
                }
                forDomain.charAt(0) != "." && (forDomain = "." + forDomain);
                var newValue = apiOb.PrivacyManagerAPI.value;
                var forTypes = apiOb.PrivacyManagerAPI.types;
                if (!updatePreferences(forDomain, newValue, forTypes)) {
                    return {
                        error: "Invalid value for required parameter 'value' sent"
                    }
                }
                var sendto = requestors;
                if (forDomain != "all") {
                    sendto = {};
                    sendto[forDomain] = requestors[forDomain]
                }
                sendUpdatesTo(sendto, false, apiOb.PrivacyManagerAPI.timestamp);
                return null
            } else {
                return {
                    error: "Call is not from an authorized Location"
                }
            }
        }
    };
    me.callApi = function() {
        try {
            caddy = null;
            return apiDo.apply({}, arguments)
        } catch (e) {
            try {
                sendError(arguments[0], arguments[3], arguments[2], arguments[1], null, false, {
                    code: 1001,
                    result: (e.stack || e.message),
                    context: navigator.platform,
                    version: "1.2"
                })
            } catch (f) {}
            caddy = null;
            return {
                error: "Unknown Error occured"
            }
        }
    };
    init();
    if (window.postMessage) {
        (window.top.addEventListener || window.top.attachEvent)((window.addEventListener ? "message" : "onmessage"), (debug.messageListener = function(e) {
            if (e.data) {
                var ob = null;
                try {
                    ob = getJSON(e.data)
                } catch (e) {}
                if (!ob) {
                    return 
                }
                try {
                    var tob = ob.PrivacyManagerAPI;
                    if (tob) {
                        if (tob.capabilities || tob.error) {
                            tconsole.log("got my own message, returning");
                            tconsole.log(e);
                            return 
                        }
                        if (!tob.timestamp ||!tob.action) {
                            var rob = {
                                PrivacyManagerAPI: {
                                    error: "API Object missing required fields"
                                }
                            };
                            sendPost(e, rob);
                            return 
                        }
                        tconsole.log("got valid cookie pref api");
                        var resp = processMessage(ob, e);
                        if (resp) {
                            for (var s in resp) {
                                tob[s] = resp[s]
                            }
                            sendPost(e, ob)
                        }
                    } else {
                        if (ob.source == "preference_manager") {
                            if (ob.message == "submit_preferences") {
                                tconsole.log("got new values from consent manager");
                                var newval = parseInt((typeof ob.data == "object") ? ob.data.value : ob.data);
                                if (isNaN(newval)) {
                                    sendPost(e, {
                                        PrivacyManagerAPI: {
                                            error: "API Object missing required fields"
                                        }
                                    })
                                } else {
                                    ob.PrivacyManagerAPI = {};
                                    ob.PrivacyManagerAPI.value = newval + 1;
                                    ob.PrivacyManagerAPI.action = "updateDecision";
                                    var resp = processMessage(ob, e);
                                    if (resp) {
                                        for (var s in resp) {
                                            ob[s] = resp[s]
                                        }
                                        sendPost(e, ob)
                                    }
                                }
                            }
                        }
                    }
                } catch (f) {
                    try {
                        if (caddy) {
                            caddy.data = caddy.data || {
                                version: "1.2"
                            };
                            caddy.data.context = navigator.platform;
                            caddt.data.code = 1002;
                            caddy.data.result = f.toString();
                            sendError(caddy.action, caddy.auth, caddy.type, caddy.asker, null, false, caddy.data)
                        }
                    } catch (g) {}
                    caddy = null;
                    tconsole.log("TRUSTe Consent Manager API unknown error. Returning Error. " + f.toString());
                    tconsole.log(e);
                    var rob = {
                        PrivacyManagerAPI: {
                            error: "An unknown error occurred: " + f.toString()
                        }
                    };
                    sendPost(e, rob);
                    if (window.console) {
                        console.log(f)
                    } else {
                        throw f
                    }
                }
            }
        }), false)
    }
    window.PrivacyManagerAPI = me;
    window.TRUSTE_CMAPI_DEBUG = debug;
    return me
})(truste.eu.bindMap.apiDefaults, truste.eu.noticeLP);
