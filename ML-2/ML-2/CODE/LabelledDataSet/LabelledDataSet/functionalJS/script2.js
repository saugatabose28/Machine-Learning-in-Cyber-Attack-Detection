function MscomInit() {
    MscomsetEvents(), autoFirePV = window.varAutoFirePV != undefined ? window.varAutoFirePV : 1, autoFirePV == 1 ? MscomSendPageView(window.varCustomerTracking != undefined && window.varCustomerTracking == 1 ? 1 : 0) : (MscomSetSharedData(), muidCreated != 1 && MscomGetMUID(0))
}
function MscomSendPageView(n) {
    MscomResetArrays(), MscomSetSharedData(0), wcs["wcs.et"] = 0, n != undefined && n != 0 && muidCreated != 1 ? MscomGetMUID(1) : MscomBeacon()
}
function MscomCustomEvent() {
    var f, i, r, t, n, u;
    try {
        for (MscomResetArrays(), MscomSetSharedData(5)
            , wcs["wcs.et"] = 1, f = arguments.length, i = 0;
        i < f;
        )r = arguments[i].toString().toLowerCase(), u = r.indexOf("="), u >= 0 ? (n = unescape(r.substring(0, u)), t = unescape(r.substring(u + 1, r.length)), t = t == undefined ? "" : t, coreAttributes.indexOf("," + n.toLowerCase() + ",") >= 0 ? (wcs["wcs." + n.toLowerCase()] = t == undefined ? "" : t, i = i + 1) : (n.indexOf("ms.") == 0 ? ms[n] = t : na[n] = t, i = i + 1)) : (n = arguments[i].toString(), t = arguments[i + 1] == undefined ? "" : arguments[i + 1].toString(), n.indexOf("wcs.") == 0 ? wcs[n.toLowerCase()] = t : n.indexOf("ms.") == 0 ? ms[n] = t : coreAttributes.indexOf("," + n.toLowerCase() + ",") >= 0 ? wcs["wcs." + n.toLowerCase()] = t : na[n] = t, i = i + 2);
        MscomBeacon()
    } catch (e) {}
}
function MscomProcessClick(n) {
    var u, t, s, i, e, h, f, o, r, c;
    MscomResetArrays(), wcs["wcs.et"] = 2;
    try {
        if (u = n || window.event, u)
            for (t = u.srcElement || u.target; t.tagName && MscomIsInList(t.tagName) == 0;)
                t = t.parentElement || t.parentNode;
        if (t && t.tagName)
            switch (t.tagName) {
            case"A":
                MscomSetSharedData(1), MscomReadAllTags(t), s = document.all ? t.innerText || t.innerHTML : t.text || t.innerHTML, wcs["wcs.cn"] = s, wcs["wcs.cid"] = MscomGetId(t), wcs["wcs.ct"] = t.href ? t.href : "", MscomBeacon();
                break;
            case"IMG":
                MscomSetSharedData(2), MscomReadAllTags(t), wcs["wcs.cn"] = t.alt ? t.alt : "", wcs["wcs.cid"] = MscomGetId(t), wcs["wcs.ct"] = MscomGetImageHREF(t), MscomBeacon();
                break;
            case"AREA":
                MscomSetSharedData(3), MscomReadAllTags(t), wcs["wcs.cn"] = t.alt ? t.alt : "", wcs["wcs.cid"] = MscomGetId(t), wcs["wcs.ct"] = t.href ? t.href : "", MscomBeacon();
                break;
            case"INPUT":
                if (MscomSetSharedData(4), MscomReadAllTags(t), i = t.type || "", e = "", i && (i == "button" || i == "reset" || i == "submit" || i == "image") || i == "text" && (u.which || u.keyCode) == 13) {
                    if (h = t.value || t.name || t.alt || t.id, wcs["wcs.cn"] = h ? h : "", wcs["wcs.cid"] = MscomGetId(t), t.form)
                        for (wcs["wcs.ct"] = t.form.action || window.location.pathname, f = t.form.elements, o = 1, r = 0; r < f.length; r++)
                            c = f[r].type, c == "text" && (e += "&wcs.t" + o + "=" + MscomEncode(f[r].name || f[r].id) + "&wcs.v" + o + "=" + MscomEncode(f[r].value), o++);
                    else 
                        wcs["wcs.ct"] = window.location.pathname;
                        wcs["wcs.ctx"] = e != "" ? e : ""
                }
                MscomBeacon()
            }
        } catch (t) {}
}
function MscomBeacon() {
    var t, i, n;
    try {
        t = [], t.push(window.location.protocol + trans_pixel_url), MscomInitMeta(), i = MscomGetStrFromArray(wcs), i.charAt(0) == "&" && (i = i.substring(1)), t.push(i), t.push(MscomGetStrFromArray(ms)), t.push(MscomGetStrFromArray(na)), n = t.join(""), n.length > 2048 ? n = n.substring(0, 2038) + "&wcs.tr=1" : n += "&wcs.tr=0", document.images ? (imgArray[imgArrayIndex] = new Image, imgArray[imgArrayIndex].src = n, imgArrayIndex++) : document.write('<IMG ALT="" BORDER="0" NAME="bImg" WIDTH="1" HEIGHT="1" SRC="' + n + '"/>')
    } catch (r) {}
}
function MscomGetDebugValues() {
    wcs["wcs.v"] = vs, wcs["wcs.vct"] = window.varCustomerTracking != undefined ? window.varCustomerTracking : "", wcs["wcs.vs"] = window.varSegmentation != undefined ? window.varSegmentation : "", wcs["wcs.vclt"] = window.varClickTracking != undefined ? window.varClickTracking : "", wcs["wcs.vfpv"] = window.varAutoFirePV != undefined ? window.varAutoFirePV : ""
}
function MscomSetTitle() {
    wcs["wcs.ti"] = document.title
}
function MscomSetTimeZoneOffSet() {
    var n = new Date;
    tz = n.getTimezoneOffset(), wcs["wcs.tz"] = tz/-60
}
function MscomSetReferrer() {
    var n = document.referrer;
    n != null && n != "" && (wcs["wcs.r"] = n)
}
function MscomSetTimeStamp() {
    var n = new Date, t = n.getTime();
    wcs["wcs.ts"] = t.toString()
}
function MscomSetScreenResolution() {
    typeof screen == "object" && (wcs["wcs.sr"] = screen.width + "x" + screen.height)
}
function MscomSetClickStreamFlag() {
    window.varSegmentation != undefined && varSegmentation == 1 && (wcs["wcs.cs"] = "1")
}
function MscomReadAllTags(n) {
    while (n && n != "undefined")
        MscomReadElementTags(n), n = n.parentElement || n.parentNode
}
function MscomSetCot(n) {
    wcs["wcs.cot"] = n != undefined ? n : ""
}
function MscomSetSharedData(n) {
    MscomSetTimeZoneOffSet(), MscomSetCot(n), MscomSetRouteCtrl(), MscomSetTimeStamp(), MscomSetCookieDisabledFlag(), MscomSetEventId(), MscomSetScreenResolution(), MscomGetBrowserSize(), MscomGetSilverLightInfo(), MscomGetFlashInfo(), MscomGetCTypeHpInfo(), MscomSetClickStreamFlag(), MscomIsHP(), MscomSetReferrer(), MscomSetTitle(), MscomGetCurrentSD(), MscomGetDebugValues()
}
function MscomGetCurrentSD() {
    wcs["wcs.rsd"] = window.location.host, wcs["wcs.rsus"] = window.location.pathname != "" ? window.location.pathname : "", wcs["wcs.rsqs"] = window.location.search != "" ? window.location.search : "", wcs["wcs.rihs"] = window.location.protocol == "https" || window.location.protocol == "https:" ? "1" : "0"
}
function MscomGetFlashInfo() {
    var i = (new Date).getFullYear() - 1992, n, r, t;
    if (navigator.userAgent.indexOf("MSIE")!=-1)
        for (n = i; n > 0; n--)
            try {
                r = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n), wcs["wcs.fi"] = "1", wcs["wcs.fv"] = n + ".0";
                break
    } catch (u) {} else 
        navigator.plugins["Shockwave Flash"] && (wcs["wcs.fi"] = "1", t = navigator.plugins["Shockwave Flash"], wcs["wcs.fv"] = t.description.split(" ")[2])
}
function MscomGetSilverLightInfo() {
    var t, r, n, i;
    window.Silverlight != undefined && (wcs["wcs.se"] = "1");
    try {
        navigator.userAgent.indexOf("MSIE")!=-1 ? (t = new ActiveXObject("AgControl.AgControl"), t && (wcs["wcs.si"] = "1", wcs["wcs.sv"] = MscomGetSlvVersion(t))) : navigator.plugins["Silverlight Plug-In"] && (r = navigator.plugins["Silverlight Plug-In"], wcs["wcs.si"] = "1", n = r.description, n && n != undefined && (i = n.split("."), n = i[0] + "." + i[1], wcs["wcs.sv"] = n))
    } catch (u) {}
}
function MscomInitMeta() {
    var n, i, t, r;
    if (document.all ? n = document.all.tags("meta") : document.documentElement && (n = document.getElementsByTagName("meta")), metaTags = "", typeof n != "undefined")
        for (i = 0; i < n.length; i++)
            t = n.item(i), t.name && (r = t.name.toLowerCase(), r.indexOf("ms.") == 0 && (ms[t.name] = t.content))
}
function MscomReadElementTags(n) {
    var u = "", t, i, r;
    if (n)
        for (t in n.attributes)
            t != undefined && n.attributes[t] != null && n.attributes[t] != undefined && (i = n.attributes[t].name, i != null && i != undefined && (r = i.toLowerCase(), r.indexOf("ms.") == 0 && (ms[i] = n.attributes[t].value)));
    return u
}
function MscomSetEventId() {
    wcs["wcs.eid"] = GenerateGuid()
}
function MscomGetBrowserSize() {
    document.body && document.body.clientWidth != undefined ? wcs["wcs.bs"] = document.body.clientWidth + "x" + document.body.clientHeight : document.documentElement && document.documentElement.clientWidth != undefined ? wcs["wcs.bs"] = document.documentElement.clientWidth + "x" + document.documentElement.clientHeight : window.innerWidth != undefined && (wcs["wcs.bs"] = window.innerWidth + "x" + window.innerHeight)
}
function MscomSetRouteCtrl() {
    wcs["wcs.route"] = window.Route != undefined ? window.Route : "", wcs["wcs.ctrl"] = window.Ctrl != undefined ? window.Ctrl : ""
}
function MscomGetCTypeHpInfo() {
    document.body && document.body.addBehavior && (document.body.addBehavior("#default#clientCaps"), document.body.connectionType && (wcs["wcs.cnt"] = document.body.connectionType))
}
function MscomIsHP() {
    document.body && document.body.addBehavior && (document.body.addBehavior("#default#homePage"), wcs["wcs.hp"] = document.body.isHomePage(location.href) ? "1" : "0")
}
function MscomSetCookieDisabledFlag() {
    var t = "", n = document.cookie.indexOf(sessionCookieName + "="), i, r;
    if (n==-1) {
        if (MscomSetTimeStamp(), sessionId = wcs["wcs.ts"], wcs["wcs.cd"] == 1)
            return;
        t = sessionCookieName + "=" + sessionId
    } else 
        i = n + sessionCookieName.length + 1, r = document.cookie.length, t = sessionCookieName + "=" + document.cookie.substring(i, r);
    document.cookie = t, n = document.cookie.indexOf(sessionCookieName + "="), wcs["wcs.cd"] = n==-1 ? 1 : 0
}
function GuidPart() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
}
function GenerateGuid() {
    return GuidPart() + GuidPart() + "-" + GuidPart() + "-" + GuidPart() + "-" + GuidPart() + "-" + GuidPart() + GuidPart() + GuidPart()
}
function MscomGetSlvVersion(n) {
    for (var t = "", u = (new Date).getFullYear() - 2004, r, i = u; i > 0; i--)
        for (r = 9; r >= 0; r--)
            if (t = i + "." + r, n.IsVersionSupported(t))
                return t;
    return t
}
function Mscomdebug() {
    window.alert(arguments[0])
}
function MscomGetId(n) {
    return n ? n.id == undefined ? "" : n.id : ""
}
function MscomGetImageHREF(n) {
    var t = n;
    if (n) {
        if (n = n.parentElement || n.parentNode, n && n.tagName == "A")
            return n.href ? n.href : "";
        if (t && t.src)
            return t.src
    }
    return ""
}
function MscomIsInList(n) {
    for (var t in clickedElements)
        if (clickedElements[t] == n.toUpperCase())
            return 1;
    return 0
}
function MscomsetEvents() {
    if (window.varClickTracking != undefined && varClickTracking == 1) {
        var n = navigator.appVersion.indexOf("MSIE")!=-1 ? "onclick": "mousedown";
        document.body && (document.body.addEventListener ? document.body.addEventListener(n, window.MscomProcessClick, 0) : document.body.attachEvent && document.body.attachEvent(n, window.MscomProcessClick))
    }
}
function MscomGetMUID(n) {
    if (muidCreated == 1 && n == 1) {
        MscomBeacon();
        return 
    }
    if (window.varCustomerTracking != undefined && varCustomerTracking == 1)
        try {
            var t = window.location.protocol + "//c1.microsoft.com/c.gif?DI=4050&did=1&t=";
            n == 1 ? document.write('<iframe id="_msnFrame" src="' + t + '" style="z-index:-1;height:1px;width:1px;display:none;visibility:hidden;" onload="javascript:MscomBeacon();"><\/iframe>') : document.write('<iframe id="_msnFrame" src="' + t + '" style="z-index:-1;height:1px;width:1px;display:none;visibility:hidden;"><\/iframe>'), muidCreated = 1
    } catch (i) {
        muidCreated = 0
    } else 
        n == 1 && MscomBeacon()
}
function MscomEncode(n) {
    return typeof encodeURIComponent == "function" ? encodeURIComponent(n) : escape(n)
}
function MscomGetStrFromArray(n) {
    var i = "", t;
    for (t in n)
        n.hasOwnProperty(t) && (i += n[t] != undefined ? "&" + MscomEncode(t) + "=" + MscomEncode(n[t]) : "&" + MscomEncode(t) + "=");
    return i
}
function MscomResetArrays() {
    wcs = [], na = [], ms = []
}
var BiMapping;
(function(n) {
    n.bi = {
        dataConsumers: [],
        dataRetrievers: [],
        dataManipulators: [],
        isInitialized: function() {
            return this._isInitialized
        },
        loadEnabled: function() {
            return arguments.length >= 1 && typeof arguments[0] == "boolean" && (this._loadEnabled = arguments[0]), this._loadEnabled
        },
        ignoreAttr: function(t) {
            if (typeof t == "string" && n.trim(t) != "")
                n.inArray(t, this._ignoreAttr)==-1 && this._ignoreAttr.push(t);
            else if (typeof t == "object")
                for (var i = 0; i < t.length; i++)
                    t[i] = n.trim(t[i]), n.inArray(t[i], this._ignoreAttr)==-1 && this._ignoreAttr.push(t[i])
        },
        ignoreTextClass: function(t) {
            var r, i;
            if (typeof t == "string" && n.trim(t) != "")
                for (r = t.split(/\s+/), i = 0; i < r.length; i++)
                    n.inArray(r[i], this._ignoreTextClass)==-1 && this._ignoreTextClass.push(r[i])
        },
        baseData: function() {
            return arguments.length >= 1 && typeof arguments[0] == "object" && n.extend(this._baseData, this._objectNametoLower(arguments[0])), this._baseData
        },
        baseLoadData: function() {
            return arguments.length >= 1 && typeof arguments[0] == "object" && n.extend(this._baseLoadData, this._objectNametoLower(arguments[0])), this._baseLoadData
        },
        baseLinkData: function() {
            return arguments.length >= 1 && typeof arguments[0] == "object" && n.extend(this._baseLinkData, this._objectNametoLower(arguments[0])), this._baseLinkData
        },
        _objectNametoLower: function(n) {
            var i = {}, t;
            for (t in n)
                i[t.toLowerCase()] = n[t];
            return i
        },
        init: function(i) {
            var u, f, r;
            if (!this.isInitialized()) {
                this._isInitialized=!0, u = this.getNamespacePrefix("urn:schemas-microsoft-com:mscom:bi"), u !== undefined && (this._ns = u), this.ignoreAttr(this._ns + ":track"), this.ignoreAttr(this._ns + ":mimiclink"), f = window.attachEvent ? "click" : "mousedown", n("a, area, input").live(f, n.proxy(function(i) {
                    var c=!0, y = n(i.currentTarget), f = i.target, e, o, l, r, a, u, s, p, h, v, w;
                    if (f.tagName.toLowerCase() == "area" ? t = n("img[usemap='#" + n(f).parent("map").attr("name") + "']").get(0) : f.tagName.toLowerCase() === "input" && f.type.toLowerCase() !== "button" && f.type.toLowerCase() !== "reset" && f.type.toLowerCase() !== "submit" && (c=!1), e = n(f), o=!1, i.currentTarget != i.target && (r = e.attr(n.bi._ns + ":mimiclink"), r = r ? r.toLowerCase() : r, r && (r === "true" || r === "false") ? (o = r == "true", o && (l = e)) : (s = e.parentsUntil(y, ":not(table)").filter(function() {
                        var t = n(this).attr(n.bi._ns + ":mimiclink");
                        return t = t ? t.toLowerCase() : t, t && (t === "true" || t === "false")?!0 : !1
                    }), s.length && (o = n(s[0]).attr(n.bi._ns + ":mimiclink").toLowerCase() == "true", o && (l = n(s[0]))))), a = o ? l : y, u = a.attr(n.bi._ns + ":track"), u = u ? u.toLowerCase() : u, u && (u === "true" || u === "false") ? c = u == "true" : (s = a.parents(":not(table)").filter(function() {
                        var t = n(this).attr(n.bi._ns + ":track");
                        return t = t ? t.toLowerCase() : t, t && (t === "true" || t === "false")?!0 : !1
                    }), s.length && (c = n(s[0]).attr(n.bi._ns + ":track").toLowerCase() == "true")), c)
                        if (o) {
                            p = this.getLinkData(i.currentTarget, e), h = this.getLinkData(l, e);
                            for (v in h)
                                h[v] == "" && (h[v] = undefined);
                                w = n.extend({}, p, h), this.record(w)
                        } else 
                            this.linkClick(i.currentTarget, e)
                }, this));
                for (r in this.dataRetrievers)
                    try {
                        this.dataRetrievers[r].init()
                    } catch (e) {}
                for (r in this.dataConsumers)
                    try {
                        this.dataConsumers[r].init(i[r])
                    } catch (e) {}
                this.loadEnabled() && n(n.proxy(this.recordLoad, this))
            }
        },
        record: function(t) {
            var i;
            t = n.extend({}, this._baseData, t);
            for (i in this.dataManipulators)
                try {
                    this.dataManipulators[i].preRecord(t)
            } catch (r) {}
            for (i in this.dataConsumers)
                try {
                    this.dataConsumers[i].record(t)
            } catch (r) {}
        },
        recordLoad: function(t) {
            var i;
            t == n && (t = {}), t = n.extend({}, this._baseData, this._baseLoadData, t);
            for (i in this.dataRetrievers)
                try {
                    n.extend(t, this.dataRetrievers[i].getLoadData())
            } catch (r) {}
            for (i in this.dataManipulators)
                try {
                    this.dataManipulators[i].preRecordLoad(t)
            } catch (r) {}
            for (i in this.dataConsumers)
                try {
                    this.dataConsumers[i].recordLoad(t)
            } catch (r) {}
        },
        linkClick: function(n, t) {
            this.record(this.getLinkData(n, t))
        },
        getLinkData: function(t, i) {
            var r = n.extend({}, this._baseData, this._baseLinkData), u;
            for (u in this.dataRetrievers)
                try {
                    n.extend(r, this.dataRetrievers[u].getLinkData(t, i))
            } catch (f) {}
            return r
        },
        getAttrData: function(t, i) {
            var f = {}, r, o, h, s, c, l, e, u, a;
            if (jQuery && t instanceof jQuery) {
                for (h = t, s = 0, c = h.length; s < c; s++)
                    for (e = h.get(s).attributes, u = 0, l = e.length; u < l; u++)
                        r = e.item(u), o = r.name.toLowerCase(), o.indexOf(n.bi._ns + ":") === 0 && (i || n.inArray(o, this._ignoreAttr) < 0) && (index = o.substring(3, r.name.length), f[index] == undefined && (f[index] = []), n.inArray(r.value, f[index]) < 0 && f[index].push(r.value));
                for (u in f)
                    f[u] = f[u].join(";")
            } else 
                for (e = t.attributes, u = 0, a = e.length; u < a; u++)
                    r = e.item(u), r.name.indexOf(n.bi._ns + ":") === 0 && (i || n.inArray(r.name, this._ignoreAttr) < 0) && (f[r.name.toLowerCase().substring(3, r.name.length)] = r.value);
            return f
        },
        getText: function(t) {
            var u = n(t).html(), i = n("<div>" + u + "<\/div>"), r;
            return this._ignoreTextClass.length > 0 && (r = "." + this._ignoreTextClass.join(",."), i.find(r).remove()), n.trim(i.text())
        },
        mapData: function(n, t) {
            var u, i, r, f;
            if (!t)
                return !1;
            u = {};
            for (i in t) {
                for (u[i] = "", r = 0, f = t[i].length; r < f; r++)
                    if (t[i][r].str !== undefined)
                        u[i] += t[i][r].str;
                    else if (t[i][r].bi && n && n[t[i][r].bi] !== undefined) {
                        switch (t[i][r].bi) {
                        case"uripath":
                            n[t[i][r].bi] == "" || n[t[i][r].bi] == null || n[t[i][r].bi] == undefined ? n[t[i][r].bi] = "/" : n[t[i][r].bi].substring(0, 1) != "/" && (n[t[i][r].bi] = "/" + n[t[i][r].bi]);
                            break;
                        case"uriquery":
                            (n[t[i][r].bi] == "" || n[t[i][r].bi] == null || n[t[i][r].bi] == undefined) && (n[t[i][r].bi] = "?")
                        }
                        u[i] += n[t[i][r].bi]
                    }
                u[i] == "" && delete u[i]
            }
            return u
        },
        isInteractionTypeValid: function(n, t) {
            return n && t ? t.interactionTypeMap?!n.interactiontype || t.interactionTypeMap[n.interactiontype] != undefined : !1 : !1
        },
        getNamespacePrefix: function(t) {
            var u, r, i;
            if (document.namespaces)
                for (u = document.namespaces, i = 0; i < u.length; i++)
                    if (u[i].urn == t)
                        return u[i].name;
            for (r = n("html").get(0).attributes, i = 0; i < r.length; i++)
                if (r[i].value == t && r[i].name.indexOf("xmlns:") == 0)
                    return r[i].name.substring(r[i].name.indexOf(":") + 1)
            },
        _isInitialized: !1,
        _ns: "bi",
        _loadEnabled: !0,
        _ignoreAttr: [],
        _ignoreTextClass: [],
        _baseData: {},
        _baseLoadData: {
            interactiontype: 0
        },
        _baseLinkData: {
            interactiontype: 2
        }
    }
})(jQuery), function(n) {
    n.bi.dataRetrievers.attr = {
        getLoadData: function() {
            var t;
            return t = n("area").filter(function() {
                return n(this).parent("map").siblings("img").is(":visible")
            }), t = t.add(n("a:visible")), n.bi.getAttrData(t)
        },
        getLinkData: function(t) {
            return n.bi.getAttrData(t)
        }
    }
}(jQuery), function(n) {
    n.bi.dataRetrievers.structure = {
        init: function() {
            n.bi.ignoreAttr(n.bi._ns + ":titleflag"), n.bi.ignoreAttr(n.bi._ns + ":parenttitle"), n.bi.ignoreAttr(n.bi._ns + ":title"), n.bi.ignoreAttr(n.bi._ns + ":index"), n.bi.ignoreAttr(n.bi._ns + ":gridindex"), n.bi.ignoreAttr(n.bi._ns + ":gridtype"), n.bi.ignoreAttr(n.bi._ns + ":type")
        },
        getLinkData: function(t, i) {
            var r = {}, e = t && n(t).length && n(t).get(0).tagName, u = e && n(t).is("[href]") ? n(t).attr("href"): "", s, f, h, c, l, o;
            return u != "" && (r.urifull = u), s = e && n(t)[0].hostname ? n(t)[0].hostname : "", s != "" && (r.uridomain = s), f = e && n(t)[0].pathname ? n(t)[0].pathname : "", f = f.length && f.indexOf("/") != 0 ? "/" + f : f, f != "" && (r.uripath = f), h = u && u.indexOf("#") >= 0 ? u.substring(u.indexOf("#")) : "", h != "" && (r.urihash = h), u.indexOf("#") == 0 ? r.uriquery = window.location.search : u != "" && (u = r.urihash ? u.substring(0, u.indexOf("#")) : u, r.uriquery = u && u.indexOf("?") >= 0 ? u.substring(u.indexOf("?")) : ""), r.type = e && n(t).attr(n.bi._ns + ":type") ? n.trim(n(t).attr(n.bi._ns + ":type")) : "", r.index = e && n(t).attr(n.bi._ns + ":index") ? n.trim(n(t).attr(n.bi._ns + ":index")) : "", r.linktitle = n.bi.getText(t), r["wcs.cn"] = r.title = r.linktitle, r["wcs.cid"] = MscomGetId(t), r["wcs.ct"] = t.href ? t.href : "", c = t && n(t).length && n(t)[0].nodeName ? n(t).get(0).nodeName.toLowerCase() : "", c == "area" ? (r.linktitle = r.title = n(t).attr("alt"), r["wcs.cn"] = n(t).attr("alt") ? n(t).attr("alt") : "") : c == "input" ? (l = t.value || t.name || t.alt || t.id, r["wcs.cn"] = r.title = r.linktitle = l ? l : "", r["wcs.ct"] = t.form ? t.form.action || window.location.pathname : window.location.pathname) : r.title == "" && i && n(i).get(0).nodeName == "IMG" && (o = n(i).get(0), r["wcs.cid"] = MscomGetId(o), r["wcs.cn"] = r.title = o.alt ? o.alt : "", r["wcs.ct"] = MscomGetImageHREF(o)), n.extend(r, this.getData(t)), this._mergeData(r)
        },
        _mergeData: function(n) {
            return n.typestructure = n.parenttypestructure, typeof n.typestructure != "undefined" && n.typestructure != "" && typeof n.type != "undefined" && n.type != "" && (n.typestructure += ";"), typeof n.type != "undefined" && n.type != "" && (n.typestructure += n.type), n.indexstructure = n.parentindexstructure, typeof n.indexstructure != "undefined" && n.indexstructure != "" && typeof n.index != "undefined" && n.index != "" && (n.indexstructure += ";"), typeof n.index != "undefined" && n.index != "" && (n.indexstructure += n.index), n
        },
        getData: function(t) {
            var i = {};
            return i.parenttitlestructure = this.getTitleStructure(t, null, !0), n.extend(i, this.getIndexGridTypeStructure(t)), this._mergeData(i)
        },
        getIndexGridTypeStructure: function(t) {
            var i = {}, r = [], u = [], f = [];
            return n(t).parents(":not(table)").each(function() {
                if (n(this).attr(n.bi._ns + ":gridindex")) {
                    var t = n(this).attr(n.bi._ns + ":gridtype") ? n(this).attr(n.bi._ns + ":gridtype"): "";
                    r.push(t + " " + n(this).attr(n.bi._ns + ":gridindex"))
                }
                n(this).attr(n.bi._ns + ":index") && u.push(n(this).attr(n.bi._ns + ":index")), n(this).attr(n.bi._ns + ":type") && f.push(n.trim(n(this).attr(n.bi._ns + ":type")))
            }), i.parenttypestructure = f.reverse().join(";"), i.gridstructure = r.reverse().join(";"), i.parentindexstructure = u.reverse().join(";"), i
        },
        getIndexStructure: function(t) {
            var i = [], r=!1;
            return n(t).parents(":not(table)").filter(function() {
                return n(this).attr(n.bi._ns + ":index") ? (i.push(n(this).attr(n.bi._ns + ":index")), !0) : !1
            }), i.reverse().join(";")
        },
        getGridStructure: function(t) {
            var i = [];
            return n(t).parents(":not(table)").filter(function() {
                if (n(this).attr(n.bi._ns + ":gridindex")) {
                    var t = n(this).attr(n.bi._ns + ":gridtype") ? n(this).attr(n.bi._ns + ":gridtype"): "";
                    return i.push(t + " " + n(this).attr(n.bi._ns + ":gridindex")), !0
                }
                return !1
            }), i.reverse().join(";")
        },
        getTypeStructure: function(t) {
            var i = [];
            return n(t).parents(":not(table)").filter(function() {
                return n(this).attr(n.bi._ns + ":type") ? (i.push(n.trim(n(this).attr(n.bi._ns + ":type"))), !0) : !1
            }), i.reverse().join(";")
        },
        getTitleStructure: function(t, i, r) {
            var f = [], s = [], u, e, o = "", h, c, l;
            if (!t ||!n(t).length ||!n(t).get(0).tagName)
                return "";
            for (n(t)
                .attr(n.bi._ns + ":headertitle") && f.push(n(t).attr(n.bi._ns + ":headertitle")), r || f.push(n.trim(n(t).text()) || n.trim(n(t).attr("alt"))), n(t).attr(n.bi._ns + ":parenttitle") && s.push(n(t)), n(t).parents(":not(table)").each(function() {
                n(this).attr(n.bi._ns + ":parenttitle") && s.push(n(this)), n(this).attr(n.bi._ns + ":headertitle") && f.push(n(this).attr(n.bi._ns + ":headertitle"))
            }), h = 0;
            h < s.length;
            h++)if (c = s[h], o = c.attr(n.bi._ns + ":parenttitle"), u = c.siblings(":not(table)").filter(function() {
                return n(this).attr(n.bi._ns + ":titleflag") == o
            }).first(), u.length == 0 && (u = c.parents(":not(table)").filter(function() {
                return n(this).attr(n.bi._ns + ":titleflag") == o
            }).first()), u.length != 0 && (u.attr(n.bi._ns + ":title") == o ? e = u : (e = u.find("[" + n.bi._ns + '\\:title="' + o + '"]').first(), e.length == 0 && (e = u.find("*").filter(function() {
                return n(this).attr(n.bi._ns + ":title") == o
            }).first())), e)) {
                l = this.getTitleStructure(e, !0), f = f.concat(l);
                break
            }
            return i ? f : f.reverse().join(";")
        }
    }
}(jQuery), function(n) {
    n.bi.dataRetrievers.resp = {
        getLoadData: function() {
            return this.getData()
        },
        getLinkData: function() {
            return this.getData()
        },
        getData: function() {
            var n = {}, t, i;
            return n.innerbrowsersize = window.innerWidth + "x" + window.innerHeight, n.viewport = document.documentElement.clientWidth + "x" + document.documentElement.clientHeight, t = document.documentElement.scrollWidth > document.documentElement.clientWidth ? 1 : 0, i = document.documentElement.scrollHeight > document.documentElement.clientHeight ? 1 : 0, n.scrollable = t + "," + i, n
        }
    }
}(jQuery);
var fl = 0, sessionId = "", sessionDuration = 18e5, sessionCookieName = "MC0", qs = "", imgArray = [], imgArrayIndex = 0, tz = 420, clickedElements = ["A", "IMG", "AREA", "INPUT"], setCot = 0, trans_pixel_url = "//c.microsoft.com/trans_pixel.aspx?", autoFirePV = 0, muidCreated = 0, coreAttributes = ",sr,bs,ts,tz,ctrl,route,ti,si,se,sv,fi,fv,cid,tr,cn,ct,cot,cs,cnt,hp,cd,rsd,rsus,rsqs,rihs,r,pkey,", customTags = "", clickInfo = "", customInfo = "", wcs = [], na = [], ms = [], vs = 3.5;
MscomInit(), function(n) {
    n.bi.dataConsumers.wedcs = {
        _settings: null,
        init: function(t) {
            this._settings = t, n.bi.baseLinkData({
                cot: 1
            })
        },
        record: function(t) {
            window.MscomCustomEvent && n.bi.isInteractionTypeValid(t, this._settings) && (t = this._mapInteractionType(t), MscomCustomEvent.apply(this, this._map(t)))
        },
        recordLoad: function(t) {
            window.MscomCustomEvent && n.bi.isInteractionTypeValid(t, this._settings) && (t = n.extend(t, {
                title: document.title
            }), t = n.extend(t, {
                cot: 0
            }), t = this._mapInteractionType(t), MscomCustomEvent.apply(this, this._map(t)))
        },
        _mapInteractionType: function(t) {
            var i = n.extend({}, t);
            return this._settings.interactionTypeMap && i.interactiontype && this._settings.interactionTypeMap[i.interactiontype] != undefined && (i.interactiontype = this._settings.interactionTypeMap[i.interactiontype]), this._settings.interactionTypeMap && i.triggertype && this._settings.interactionTypeMap[i.triggertype] != undefined && (i.triggertype = this._settings.interactionTypeMap[i.triggertype]), i
        },
        _map: function(t) {
            var i = n.extend({}, t);
            return i.uridomain == undefined && (i.uridomain = window.location.hostname, i.uripath = window.location.pathname, i.uriquery = window.location.search), this._toArray(n.bi.mapData(i, this._settings.parameterMap))
        },
        _toArray: function(n) {
            var t, i;
            n=!n || typeof n != "object" || n.sort ? {} : n, t = [];
            for (i in n)
                n.hasOwnProperty(i) && (t.push(i), t.push(n[i]));
            return t
        }
    }
}(jQuery), BiMapping = {
    wedcs: {
        interactionTypeMap: {
            "0": "0",
            "1": "4",
            "2": "1",
            "3": "2",
            "4": "9",
            "5": "10",
            "6": "11",
            "7": "12",
            "8": "13",
            "9": "14",
            "10": "15",
            "11": "16",
            "12": "17",
            "13": "18",
            "14": "19",
            "15": "20",
            "16": "21",
            "17": "22",
            "18": "23",
            "19": "24",
            "20": "25"
        },
        parameterMap: {
            "ms.sitever": [{
                bi: "sitever"
            }
            ],
            "ms.UriDomain": [{
                bi: "uridomain"
            }
            ],
            "ms.UriPath": [{
                bi: "uripath"
            }
            ],
            "ms.UriQuery": [{
                bi: "uriquery"
            }
            ],
            "ms.InteractionType": [{
                bi: "interactiontype"
            }
            ],
            "ms.TriggerType": [{
                bi: "triggertype"
            }
            ],
            "ms.Initial": [{
                bi: "initial"
            }
            ],
            "ms.Title": [{
                bi: "title"
            }
            ],
            "ms.ParentTitleStructure": [{
                bi: "parenttitlestructure"
            }
            ],
            "ms.Type": [{
                bi: "type"
            }
            ],
            "ms.ParentTypeStructure": [{
                bi: "parenttypestructure"
            }
            ],
            "ms.ParentTypeStructure": [{
                bi: "typestructure"
            }
            ],
            "ms.Index": [{
                bi: "index"
            }
            ],
            "ms.ParentIndexStructure": [{
                bi: "parentindexstructure"
            }
            ],
            "ms.GridStructure": [{
                bi: "gridstructure"
            }
            ],
            "ms.SearchType": [{
                bi: "searchtype"
            }
            ],
            "ms.SearchQuery": [{
                bi: "searchquery"
            }
            ],
            cot: [{
                bi: "cot"
            }
            ],
            "ms.linkid": [{
                bi: "linkid"
            }
            ],
            "ms.link_type": [{
                bi: "linktype"
            }
            ],
            "ms.cpgnguid": [{
                bi: "campaignguid"
            }
            ],
            "ms.rioctc": [{
                bi: "rioctc"
            }
            ],
            "ms.z_locale": [{
                bi: "locale"
            }
            ],
            "ms.lang": [{
                bi: "lang"
            }
            ],
            "ms.loc": [{
                bi: "loc"
            }
            ],
            "ms.sitename": [{
                bi: "sitename"
            }
            ],
            "ms.pa": [{
                bi: "primaryaudience"
            }
            ],
            "ms.serp.link_type": [{
                bi: "serplinktype"
            }
            ],
            "ms.serp.link_position": [{
                bi: "serplinkposition"
            }
            ],
            "ms.vp_site": [{
                bi: "vpsite"
            }
            ],
            "ms.vp_evt": [{
                bi: "vpevent"
            }
            ],
            "ms.vp_duration": [{
                bi: "vpduration"
            }
            ],
            "ms.vp_channel": [{
                bi: "vpchannel"
            }
            ],
            "ms.vp_uuid": [{
                bi: "vpuuid"
            }
            ],
            "ms.vp_origin": [{
                bi: "vporigin"
            }
            ],
            "ms.vp_pos": [{
                bi: "vpposition"
            }
            ],
            "ms.Order_ID": [{
                bi: "orderid"
            }
            ],
            "ms.Order_Revenue": [{
                bi: "orderrevenue"
            }
            ],
            "ms.Currency": [{
                bi: "currency"
            }
            ],
            "ms.MS_Sales_Part_Number": [{
                bi: "msssalespartnumber"
            }
            ],
            "ms.MS_Sales_Part_Quantity": [{
                bi: "mssalespartquantity"
            }
            ],
            "ms.ActiveDwellTime": [{
                bi: "activedwelltime"
            }
            ],
            route: [{
                bi: "route"
            }
            ],
            ctrl: [{
                bi: "ctrl"
            }
            ],
            "ms.sitesec": [{
                bi: "sitesec"
            }
            ],
            "ms.pagetype": [{
                bi: "pagetype"
            }
            ],
            "ms.pgtemp": [{
                bi: "pagetemplate"
            }
            ],
            "ms.SurveyId": [{
                bi: "surveyid"
            }
            ],
            "ms.SurveyVersion": [{
                bi: "surveyversion"
            }
            ],
            "ms.SurveyQuestions": [{
                bi: "surveyquestions"
            }
            ],
            "ms.SurveyComments": [{
                bi: "surveycomments"
            }
            ],
            "ms.srv_id": [{
                bi: "surveyid"
            }
            ],
            "ms.srv_v": [{
                bi: "surveyversion"
            }
            ],
            "ms.srv_resp": [{
                bi: "surveyresponse"
            }
            ],
            vp: [{
                bi: "viewport"
            }
            ],
            scrl: [{
                bi: "scrollable"
            }
            ],
            "ms.env": [{
                bi: "env"
            }
            ],
            "ms.redirect": [{
                bi: "redirect"
            }
            ],
            "ms.FilterId": [{
                bi: "filterid"
            }
            ],
            "ms.LanguageId": [{
                bi: "languageid"
            }
            ],
            "ms.dwntype": [{
                bi: "dwntype"
            }
            ],
            "ms.ea_offer": [{
                bi: "ea_offer"
            }
            ],
            "ms.ea_action": [{
                bi: "ea_action"
            }
            ],
            "ms.ea_name": [{
                bi: "ea_name"
            }
            ],
            "ms.DLCFamilyID": [{
                bi: "familyid"
            }
            ],
            "ms.cul": [{
                bi: "culturecode"
            }
            ],
            "ms.dwnsrc": [{
                bi: "downloadsource"
            }
            ],
            "ms.DLCProductID": [{
                bi: "productid"
            }
            ],
            "ms.DLCFamilyHierarchyID": [{
                bi: "familyhierarchyid"
            }
            ],
            "ms.transactionid": [{
                bi: "transactionid"
            }
            ],
            "ms.dlcfamilyid_parent": [{
                bi: "dlcfamilyid_parent"
            }
            ],
            "ms.dlcfamilyid_child": [{
                bi: "dlcfamilyid_child"
            }
            ],
            "ms.rel": [{
                bi: "releaseid"
            }
            ],
            "ms.BundleItemDLCFamilyID": [{
                bi: "bundleitmfamid"
            }
            ],
            "ms.scnum": [{
                bi: "scrnum"
            }
            ],
            "ms.scvalue": [{
                bi: "scrval"
            }
            ],
            "wcs.cn": [{
                bi: "wcs.cn"
            }
            ],
            "wcs.cid": [{
                bi: "wcs.cid"
            }
            ],
            "wcs.ct": [{
                bi: "wcs.ct"
            }
            ],
            "ms.factors": [{
                bi: "factors"
            }
            ],
            "ms.treatments": [{
                bi: "treatments"
            }
            ],
            "ms.pgtmplt": [{
                bi: "pgtmplt"
            }
            ],
            "ms.pgstate": [{
                bi: "pgstate"
            }
            ],
            "ms.priorterm": [{
                bi: "priorterm"
            }
            ],
            "ms.pltfrm": [{
                bi: "pltfrm"
            }
            ],
            "ms.guid": [{
                bi: "guid"
            }
            ],
            "ms.pgarea": [{
                bi: "pgarea"
            }
            ],
            "ms.cmpgrp": [{
                bi: "cmpgrp"
            }
            ],
            "ms.cmpnm": [{
                bi: "cmpnm"
            }
            ]
        }
    }
}, function(n) {
    n.bi.dataConsumers.jll = {
        _settings: null,
        init: function(t) {
            this._settings = n.extend(t, {
                interactionTypeMap: {
                    "0": "0",
                    "1": "4",
                    "2": "1",
                    "3": "2",
                    "4": "9",
                    "5": "10",
                    "6": "11",
                    "7": "12",
                    "8": "13",
                    "9": "14",
                    "10": "15",
                    "11": "16",
                    "12": "17",
                    "13": "18",
                    "14": "19",
                    "15": "20",
                    "16": "21",
                    "17": "22",
                    "18": "23",
                    "19": "24",
                    "20": "25"
                },
                parameterMap: {
                    "ms.sitever": [{
                        bi: "sitever"
                    }
                    ],
                    "ms.UriDomain": [{
                        bi: "uridomain"
                    }
                    ],
                    "ms.UriPath": [{
                        bi: "uripath"
                    }
                    ],
                    "ms.UriQuery": [{
                        bi: "uriquery"
                    }
                    ],
                    "ms.InteractionType": [{
                        bi: "interactiontype"
                    }
                    ],
                    "ms.TriggerType": [{
                        bi: "triggertype"
                    }
                    ],
                    "ms.Initial": [{
                        bi: "initial"
                    }
                    ],
                    "ms.Title": [{
                        bi: "title"
                    }
                    ],
                    "ms.ParentTitleStructure": [{
                        bi: "parenttitlestructure"
                    }
                    ],
                    "ms.Type": [{
                        bi: "type"
                    }
                    ],
                    "ms.ParentTypeStructure": [{
                        bi: "parenttypestructure"
                    }
                    ],
                    "ms.ParentTypeStructure": [{
                        bi: "typestructure"
                    }
                    ],
                    "ms.Index": [{
                        bi: "index"
                    }
                    ],
                    "ms.ParentIndexStructure": [{
                        bi: "parentindexstructure"
                    }
                    ],
                    "ms.GridStructure": [{
                        bi: "gridstructure"
                    }
                    ],
                    "ms.SearchType": [{
                        bi: "searchtype"
                    }
                    ],
                    "ms.SearchQuery": [{
                        bi: "searchquery"
                    }
                    ],
                    cot: [{
                        bi: "cot"
                    }
                    ],
                    "ms.linkid": [{
                        bi: "linkid"
                    }
                    ],
                    "ms.link_type": [{
                        bi: "linktype"
                    }
                    ],
                    "ms.cpgnguid": [{
                        bi: "campaignguid"
                    }
                    ],
                    "ms.rioctc": [{
                        bi: "rioctc"
                    }
                    ],
                    "ms.z_locale": [{
                        bi: "locale"
                    }
                    ],
                    "ms.lang": [{
                        bi: "lang"
                    }
                    ],
                    "ms.loc": [{
                        bi: "loc"
                    }
                    ],
                    "ms.sitename": [{
                        bi: "sitename"
                    }
                    ],
                    "ms.pa": [{
                        bi: "primaryaudience"
                    }
                    ],
                    "ms.serp.link_type": [{
                        bi: "serplinktype"
                    }
                    ],
                    "ms.serp.link_position": [{
                        bi: "serplinkposition"
                    }
                    ],
                    "ms.vp_site": [{
                        bi: "vpsite"
                    }
                    ],
                    "ms.vp_evt": [{
                        bi: "vpevent"
                    }
                    ],
                    "ms.vp_duration": [{
                        bi: "vpduration"
                    }
                    ],
                    "ms.vp_channel": [{
                        bi: "vpchannel"
                    }
                    ],
                    "ms.vp_uuid": [{
                        bi: "vpuuid"
                    }
                    ],
                    "ms.vp_origin": [{
                        bi: "vporigin"
                    }
                    ],
                    "ms.vp_pos": [{
                        bi: "vpposition"
                    }
                    ],
                    "ms.Order_ID": [{
                        bi: "orderid"
                    }
                    ],
                    "ms.Order_Revenue": [{
                        bi: "orderrevenue"
                    }
                    ],
                    "ms.Currency": [{
                        bi: "currency"
                    }
                    ],
                    "ms.MS_Sales_Part_Number": [{
                        bi: "msssalespartnumber"
                    }
                    ],
                    "ms.MS_Sales_Part_Quantity": [{
                        bi: "mssalespartquantity"
                    }
                    ],
                    "ms.ActiveDwellTime": [{
                        bi: "activedwelltime"
                    }
                    ],
                    route: [{
                        bi: "route"
                    }
                    ],
                    ctrl: [{
                        bi: "ctrl"
                    }
                    ],
                    "ms.sitesec": [{
                        bi: "sitesec"
                    }
                    ],
                    "ms.pagetype": [{
                        bi: "pagetype"
                    }
                    ],
                    "ms.pgtemp": [{
                        bi: "pagetemplate"
                    }
                    ],
                    "ms.SurveyId": [{
                        bi: "surveyid"
                    }
                    ],
                    "ms.SurveyVersion": [{
                        bi: "surveyversion"
                    }
                    ],
                    "ms.SurveyQuestions": [{
                        bi: "surveyquestions"
                    }
                    ],
                    "ms.SurveyComments": [{
                        bi: "surveycomments"
                    }
                    ],
                    "ms.srv_id": [{
                        bi: "surveyid"
                    }
                    ],
                    "ms.srv_v": [{
                        bi: "surveyversion"
                    }
                    ],
                    "ms.srv_resp": [{
                        bi: "surveyresponse"
                    }
                    ],
                    vp: [{
                        bi: "viewport"
                    }
                    ],
                    scrl: [{
                        bi: "scrollable"
                    }
                    ],
                    "ms.env": [{
                        bi: "env"
                    }
                    ],
                    "ms.redirect": [{
                        bi: "redirect"
                    }
                    ],
                    "ms.FilterId": [{
                        bi: "filterid"
                    }
                    ],
                    "ms.LanguageId": [{
                        bi: "languageid"
                    }
                    ],
                    "ms.dwntype": [{
                        bi: "dwntype"
                    }
                    ],
                    "ms.ea_offer": [{
                        bi: "ea_offer"
                    }
                    ],
                    "ms.ea_action": [{
                        bi: "ea_action"
                    }
                    ],
                    "ms.ea_name": [{
                        bi: "ea_name"
                    }
                    ],
                    "ms.DLCFamilyID": [{
                        bi: "familyid"
                    }
                    ],
                    "ms.cul": [{
                        bi: "culturecode"
                    }
                    ],
                    "ms.dwnsrc": [{
                        bi: "downloadsource"
                    }
                    ],
                    "ms.DLCProductID": [{
                        bi: "productid"
                    }
                    ],
                    "ms.DLCFamilyHierarchyID": [{
                        bi: "familyhierarchyid"
                    }
                    ],
                    "ms.transactionid": [{
                        bi: "transactionid"
                    }
                    ],
                    "ms.dlcfamilyid_parent": [{
                        bi: "dlcfamilyid_parent"
                    }
                    ],
                    "ms.dlcfamilyid_child": [{
                        bi: "dlcfamilyid_child"
                    }
                    ],
                    "ms.rel": [{
                        bi: "releaseid"
                    }
                    ],
                    "ms.BundleItemDLCFamilyID": [{
                        bi: "bundleitmfamid"
                    }
                    ],
                    "ms.scnum": [{
                        bi: "scrnum"
                    }
                    ],
                    "ms.scvalue": [{
                        bi: "scrval"
                    }
                    ],
                    "wcs.cn": [{
                        bi: "wcs.cn"
                    }
                    ],
                    "wcs.cid": [{
                        bi: "wcs.cid"
                    }
                    ],
                    "wcs.ct": [{
                        bi: "wcs.ct"
                    }
                    ],
                    "ms.factors": [{
                        bi: "factors"
                    }
                    ],
                    "ms.treatments": [{
                        bi: "treatments"
                    }
                    ],
                    "ms.pgtmplt": [{
                        bi: "pgtmplt"
                    }
                    ],
                    "ms.pgstate": [{
                        bi: "pgstate"
                    }
                    ],
                    "ms.priorterm": [{
                        bi: "priorterm"
                    }
                    ],
                    "ms.pltfrm": [{
                        bi: "pltfrm"
                    }
                    ],
                    "ms.guid": [{
                        bi: "guid"
                    }
                    ],
                    "ms.pgarea": [{
                        bi: "pgarea"
                    }
                    ],
                    "ms.cmpgrp": [{
                        bi: "cmpgrp"
                    }
                    ],
                    "ms.cmpnm": [{
                        bi: "cmpnm"
                    }
                    ]
                }
            }), n.bi.baseLinkData({
                cot: 1
            })
        },
        record: function(t) {
            MSCOMRendering.Jll.SentPageAction && n.bi.isInteractionTypeValid(t, this._settings) && (t = this._mapInteractionType(t), MSCOMRendering.Jll.SentPageAction(t))
        },
        recordLoad: function(t) {
            MSCOMRendering.Jll.SentPageView && n.bi.isInteractionTypeValid(t, this._settings) && (t = n.extend(t, {
                title: document.title
            }), t = n.extend(t, {
                cot: 0
            }), t = this._mapInteractionType(t), MSCOMRendering.Jll.SentPageView(t))
        },
        _mapInteractionType: function(t) {
            var i = n.extend({}, t);
            return this._settings.interactionTypeMap && i.interactiontype && this._settings.interactionTypeMap[i.interactiontype] != undefined && (i.interactiontype = this._settings.interactionTypeMap[i.interactiontype]), this._settings.interactionTypeMap && i.triggertype && this._settings.interactionTypeMap[i.triggertype] != undefined && (i.triggertype = this._settings.interactionTypeMap[i.triggertype]), i
        },
        _map: function(t) {
            var i = n.extend({}, t);
            return i.uridomain == undefined && (i.uridomain = window.location.hostname, i.uripath = window.location.pathname, i.uriquery = window.location.search), this._toArray(n.bi.mapData(i, this._settings.parameterMap))
        },
        _toArray: function(n) {
            var t, i;
            n=!n || typeof n != "object" || n.sort ? {} : n, t = [];
            for (i in n)
                n.hasOwnProperty(i) && (t.push(i), t.push(n[i]));
            return t
        }
    }
}(jQuery)
