/* (c) 2008-2014 AddThis, Inc */
function addthis_open() {
    return "string" == typeof iconf && (iconf = null), _ate.ao.apply(_ate, arguments)
}
function addthis_close() {
    _ate.ac()
}
function addthis_sendto() {
    return _ate.as.apply(_ate, arguments), !1
}
window._ate ? _ate.inst++ : (!function() {
    function reduce(e, t, a, i) {
        if (!e)
            return a;
        if (e instanceof Array || e.length && "function" != typeof e)
            for (var n = 0, r = e.length, s = e[0]; r > n; s = e[++n])
                a = t.call(i || e, a, s, n, e);
        else 
            for (var o in e)
                a = t.call(i || e, a, e[o], o, e);
        return a
    }
    function stripHypertextProtocol(e) {
        return e.replace(/^(http|https):\/\//, "").split("/").shift()
    }
    function mrg(e, t) {
        if (t && e !== t)
            for (var a in t)
                e[a] === u && (e[a] = t[a])
    }
    function validateUrl(e) {
        return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(e)
    }
    function validateEmail(e) {
        if (2 != e.split("@").length||-1 == e.indexOf(".") || e.length > 256)
            return !1;
        var t = new RegExp("^[a-z0-9,!#$%&'*+/=?^_`{|}~-]+(.[a-z0-9,!#$%&'*+/=?^_`{|}~-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*.([a-z]{2,})$");
        return - 1 != String(e.toLowerCase()).search(t)
    }
    function uniqueArray(e) {
        var t = new Array;
        e: for (var a = 0; a < e.length; a++) {
            for (var i = 0; i < t.length; i++)
                if (t[i] == e[a])
                    continue e;
            t[t.length] = e[a]
        }
        return t
    }
    function addKeydownHandler(e) {
        var t, a = window, i = document, n = a.onkeydown || function() {}, r = function(t) {
            e(t), n(t)
        };
        _ate.bro.msi ? (t = i.onkeydown, i.onkeydown = function() {
            r(), null != t && t()
        }) : (t = a.onkeydown, a.onkeydown = function(e) {
            r(e), null != t && t()
        })
    }
    function ie6cursorfix() {
        return _ate.bro.ie6 ? ' style="cursor:hand;"' : ""
    }
    function showLightbox(e) {
        if (get(e)) {
            var t = area(!0), a = sbwidth();
            show(e), setWidth(e, t[0] - a), setHeight(e, t[1] - a)
        }
    }
    function limitInput(e, t) {
        e && e.value && e.value.length > t && (e.value = e.value.substring(0, t))
    }
    function limitArray(e, t, a) {
        return e.length > t && (e = e.slice(0, t - 1), a && e[e.length - 1] != a && e.push(a)), e
    }
    function isEmpty(e) {
        if (e._e)
            return !0;
        for (var t in e)
            if ("_e" != t && e.hasOwnProperty(t))
                return delete e._e, !1;
        return e._e = 1, !0
    }
    function get(e) {
        return "string" == typeof e && (e = document.getElementById(e)), e
    }
    function anchor(e) {
        return '<a name="' + e + '"></a>'
    }
    function div(e, t, a, i) {
        return "<div " + (1 === a ? "class" : "id") + '="' + e + '"' + (0 === t ? ' style="display:none"' : "") + (i ? i : "") + ">"
    }
    function span(e, t, a) {
        return "<span " + (t===!0 ? "class" : "id") + '="' + e + '"' + (a ? a : "") + ">"
    }
    function label(e, t, a) {
        return t || (t = ""), '<label for="' + t + '">' + e + ":" + (a ? "  <span>(" + a + ")</span>" : "") + "</label>"
    }
    function setStyle(e, t, a) {
        e = get(e), e && e.style && (e.style[t] = a)
    }
    function hide(e, t, a) {
        a || setStyle(e, "display", "none"), t && setStyle(e, "visibility", "hidden")
    }
    function show(e, t, a) {
        a || setStyle(e, "display", "block"), t && setStyle(e, "visibility", "visible")
    }
    function addClass(e, t) {
        e = get(e), e && (e.className?-1 == e.className.indexOf(t) && (e.className += " " + t) : e.className = t)
    }
    function removeClass(e, t) {
        if (e = get(e)) {
            if (!e.className)
                return;
            - 1 != e.className.indexOf(t) && (e.className = e.className.split(t).join(" "))
        }
    }
    function hasClass(e, t) {
        return e = get(e), e ? e.className?-1 != e.className.indexOf(t) : !1 : void 0
    }
    function parentHasClass(e, t) {
        return e = get(e), e && e.parentNode && (e.parentNode.className || "").indexOf(t)>-1
    }
    function setWidth(e, t) {
        setStyle(e, "width", t + "px")
    }
    function setHeight(e, t) {
        setStyle(e, "height", t + "px")
    }
    function isVisible(e) {
        return e = get(e), e ? "block" == e.style.display : !1
    }
    function area(e) {
        var t = d.documentElement, a = d.body, i = 0, n = 0, r = 0, s = 0;
        return e && (w.innerHeight && w.scrollMaxY ? (i = a.scrollWidth, n = w.innerHeight + w.scrollMaxY) : a.scrollHeight > a.offsetHeight ? (i = a.scrollWidth, n = a.scrollHeight) : (i = a.offsetWidth, n = a.offsetHeight)), w.self && w.self.innerHeight ? (r = w.self.innerWidth, s = w.self.innerHeight) : t && t.clientHeight ? (r = t.clientWidth, s = t.clientHeight) : a && (a.clientWidth || a.clientHeight) ? (r = a.clientWidth, s = a.clientHeight) : a && (r = a.clientWidth, s = a.clientHeight), [e!==!0 || r > i ? r: i, e!==!0 || s > n ? s: n]
    }
    function spos() {
        var e = d.documentElement, t = d.body;
        return "number" == typeof w.pageYOffset ? [w.pageXOffset, w.pageYOffset] : t && (t.scrollLeft || t.scrollTop) ? [t.scrollLeft, t.scrollTop] : e && (e.scrollLeft || e.scrollTop) ? [e.scrollLeft, e.scrollTop] : [0, 0]
    }
    function abpos(e) {
        var t = document.documentElement, a = 0, i = 0, n = 0, r = 0;
        do 
            n = /fixed/.test(e.style.position), r|=n, a += e.offsetTop || 0, i += e.offsetLeft || 0, n && e && (a += e.scrollTop, i += e.scrollLeft), e = e.offsetParent;
        while (e);
        return !_ate.bro.ie6 && t.scrollTop && r && (a += t.scrollTop, i += t.scrollLeft), [i, a]
    }
    function sbwidth() {
        if (csbw)
            return csbw;
        try {
            var e = document, t = e.ce("div"), a = e.ce("div"), i = e.getElementsByTagName("body")[0], n = t.style;
            n.width = "50px", n.height = "50px", n.overflow = "hidden", n.position = "absolute", n.top = "-200px", n.left = "-200px", a.style.height = "100px", i.appendChild(t), t.appendChild(a);
            var r = a.innerWidth;
            t.style.overflow = "scroll";
            var s = a.innerWidth;
            t.removeChild(a), i.removeChild(t), csbw = r && s ? r - s : 20
        } catch (o) {
            csbw = 20
        }
        return csbw
    }
    function cancelBubble(e) {
        e && (e.cancelBubble=!0, e.preventDefault && e.preventDefault())
    }
    function main() {
        w.addthis && w.addthis.timer && (w.addthis.timer.main = (new Date).getTime());
        try {
            _atc.xol&&!_atc.xcs && ac.ui_use_css!==!1 && (css.load(), _ate.bro.ipa && (useHighResIcons ? css64.load() : css32.load()), (_ate.bro.ie6 || _ate.bro.ie7) && cssIE67.load());
            var e, t, a, i = _ate, n = (i.bro.msi, w.addthis_config || {}), r = d.title, s = "undefined" != typeof i.rdr ? i.rdr: d.referer || d.referrer || "", o = dl ? dl.href: null, c = (dl.hostname, o), l = 0, u = (_ate.lng().split("-").shift(), _ate.track.eop(dl, s)), h = [], f=!!i.cookie.rck("nabc"), p = u.cfc, _ = u.ab, g = u.pos ? parseInt(u.pos, 10) : null, m = u.tot ? parseInt(u.tot, 10) : null, v = u.rsiq, b = u.rsi, y = u.rxi, k = u.rsc.split("&").shift().split("%").shift().replace(/[^a-z0-9_]/g, ""), x = u.gen, N = u.fuid, O = u.csi, T = _atc.rsrcs.sh + "#", S = function() {
                _ate.track.pcs.length || _ate.track.apc(w.addthis_product || "men-" + _ate.ver()), a.pc = _ate.track.pcs.join(",")
            }, A = w.ljep ||!1, E = i.pub(), C = 5e3;
            dl && dl.hash && dl.hash.indexOf("sky_ab=1")>-1 && (i.sfmp = 1), - 1 === (o || "").indexOf(_atr) && (i.cookie.view.update(!0), i.cookie.visit.update(), _ate.lojson.add("uvs", _ate.cookie.rck("__atuvs"))), "tweet" === k && (k = "twitter"), u.rsc = k, w.addthis_product && (_ate.track.apc(addthis_product), - 1 === addthis_product.indexOf("fxe")&&-1 === addthis_product.indexOf("bkm") && (_ate.track.spc = addthis_product));
            var I = _ate.share.links.canonical;
            I && (0 !== I.indexOf("http") ? (c = (o || "").split("//").pop().split("/"), 0 === I.indexOf("/") ? c = c.shift() + I : (c.pop(), c = c.join("/") + "/" + I), c = dl.protocol + "//" + c) : c = I, _ate.usu(0, 1)), c = c.split("#{").shift(), i.igv(c, d.title || ""), c && (_ate.share.links.canonical = c);
            var j = addthis_share.view_url_transforms || addthis_share.track_url_transforms || addthis_share.url_transforms || {};
            j.defrag = 1, j && (c = _ate.track.mgu(c, j));
            try {
                var z = (addthis_share || {}).passthrough || {};
                if (!(z.pinterest_share || {}).media) {
                    var M = _ate.ad.og(), L = {}, B = "string" == typeof M ? _ate.util.fromKV(M): M;
                    z = {}, (B.image || _ate.share.links.image_src) && (w.addthis_share || (w.addthis_share = {}), addthis_share = w.addthis_share, addthis_share.passthrough = z = addthis_share.passthrough || {}, z.pinterest_share = L = z.pinterest_share || {}, L.media = B.image || _ate.share.links.image_src, L.url = L.url || B.url || w.location.href, L.description = L.description || B.title || addthis_share.description || addthis_share.title || "")
                }
            } catch (P) {}
            if (b && (b = b.substr(0, 8) + N), - 1 === i.bro.mod) {
                var D = document.compatMode;
                if (D) {
                    var R = 1;
                    "BackCompat" === D ? R = 2 : "CSS1Compat" === D && (R = 0), i.bro.mode = R, i.bro.msi && (i.bro.mod = R)
                }
            }
            if (i.dr = i.truncateURL(s, "fr"), i.du = i.truncateURL(c, "fp"), i.dt = r = w.addthis_share.title, i.smd = {
                rsi: b,
                rxi: y,
                gen: x,
                rsc: k
            }, w.addthis_share.smd = i.smd, i.upm && (w.addthis_share.smd.dr = i.dr), i.upm && (w.addthis_share.smd.sta = i.track.sta()), i.cb = i.ad.cla(), i.kw = 1 !== i.cb ? i.ad.kw() : "", i.dh = dl.hostname, i.ssl = o && 0 === o.indexOf("https") ? 1 : 0, i.ab = _ || w.addthis_ab || "-", w.addthis_config = w.addthis_config || {}, !w.addthis_config.ignore_server_config && E)
                if (_ate.upm && w.JSON && "function" == typeof JSON.parse&&!i.bro.ie6&&!i.bro.ie7) {
                    _ate.ipc=!0;
                    var V = "__at.conf." + E, H = "", U=!1, F=!1, q = _ate.uls, W = {
                        cfs: !0
                    }, K = function() {
                        addthis.layers.length ? addthis.layers({
                            cfs: !0
                        }) : _ate.ipc=!1
                    }, G = function nt(e) {
                        var t, a, i =- 1, n = [], r=!1;
                        if (e.pro && (_ate.pro=!0), e.config.sponsored ||!F) {
                            if (e.perConfig && e.perConfig.length)
                                try {
                                    for (; ++i < e.perConfig.length;)
                                        t = e.perConfig[i], (!e.pro || e.pro && t.isProCell) && n.push(t), a = "ab=" + t.name + "(&|$)", dl.hash.match(a) && (r = t);
                                        r===!1 && (r = n[~~(Math.random() * n.length)]), _ate.feeds.setTestCell(r)
                                    } catch (s) {}
                                    e.config && e.config._default ? (_ate.isProUser=!0, e.config.cfs=!0, addthis.layers(e.config, W)) : K(), nt.called=!0
                                }
                    }, J = function() {
                        F=!0, U || K()
                    };
                    if (q)
                        try {
                            H = JSON.parse(localStorage.getItem(V))
                        } catch (P) {
                            H=!1
                        }
                        H && H.config._default ? G(H) : setTimeout(J, C), _ate.ed.addEventListener("addthis.pro.init", function(e) {
                            U=!0, e.data && e.data.config && (G(e.data), q&&!e.data.config.sponsored && localStorage.setItem(V, JSON.stringify(e.data)))
                        })
            } else {
                var Y, Z = "__atpro_" + E, Q = _ate.cookie.rck(Z), $ = new Date, X = function(e) {
                    $.setDate($.getDate() + 7), e && e._default ? (_ate.cookie.sck(Z, "true", 0, 1, $), e.cfs=!0, addthis.layers(e, {
                        cfs: !0
                    })) : (_ate.cookie.sck(Z, "false", 0, 1, $), _ate.ipc=!1)
                };
                "false" !== Q && (_ate.ipc=!0, _ate.ajs([FEED_SERVER, "config.json?pubid=", E, "&callback=", _ate.util.scb("fds", E, function() {
                    clearTimeout(Y), X.apply(this, arguments)
                })].join(""), 1, !0, !0, null, !0), Y = setTimeout(function() {
                    X([])
                }, C))
            }
            if (a = {
                iit: (new Date).getTime(),
                tmr: toKV((w.addthis || {}).timer || {}),
                cb: i.cb,
                cdn: _atc.cdn,
                kw: i.kw,
                ab: i.ab,
                dh: i.dh,
                dr: i.dr,
                du: i.du,
                dt: r,
                dbg: _ate.log.level,
                cap: toKV({
                    tc: n.data_track_textcopy ? 1: 0,
                    ab: n.data_track_addressbar ? 1: 0
                }),
                inst: i.inst,
                jsl: i.track.jsl(),
                prod: i.track.prod(),
                lng: i.lng(),
                ogt: _ate.ad.gog().join(","),
                pc: w.addthis_product || "men",
                pub: i.pub(),
                ssl: i.ssl,
                sid: _ate.track.ssid(),
                srpl: _atc.plmp,
                srcs: _atc.cscs,
                srd: _atc.damp,
                srf: _atc.famp,
                srx: _atc.xamp,
                ver: _ate.ver(),
                xck: _atc.xck || 0,
                xtr: _atc.xtr || 0,
                og: _ate.ad.og(),
                aa: 0,
                csi: O,
                chr: _ate.ad.gch(),
                md: i.bro.mode,
                vcl: i.cookie.view.cla()
            }, _ate.lojson.add("chr", _ate.ad.gch()), delete a.chr, _ate.lojson.add("md", i.bro.mode), delete a.md, _ate.lojson.add("vcl", i.cookie.view.cla()), delete a.vcl, a.toLoJson = _ate.lojson.get(), _atc.noup && (a.noup = 1), i.dcp == Number.MAX_VALUE && (a.dnp = 1), i.pixu && (a.pixu = i.pixu), i.trl.length && (a.trl = i.trl.join(",")), i.rev && (a.rev = i.rev), a.ct = i.ct = n.data_track_clickback || n.data_track_linkback || _ate.track.ctp(a.pc, n) ? 1 : 0, i.prv && (a.prv = toKV(i.prv)), k && (a.sr = k), _ate.track.ssc(k), A && (a.ljep = A), i.vamp >= 0&&!i.sub && (p ? (h.push(i.track.fcv("plv", Math.round(1 / _atc.vamp))), h.push(i.track.fcv("typ", "lnk")), isNaN(g) || h.push(i.track.fcv("ttpos", g)), isNaN(m) || h.push(i.track.fcv("ttnl", m)), O && h.push(i.track.fcv("csi", O)), h.push(i.track.fcv("pco", "string" == typeof p ? p : "cfd-1.0")), h.push(i.track.fcv("pur", i.track.mgu(c, {
                defrag: 1
            }))), i.dr && (a.pre = i.track.mgu(i.dr, {
                defrag: 1
            })), a.ce = h.join(",")) : b && N != i.ad.gub() ? (h.push(i.track.fcv("plv", Math.round(1 / _atc.vamp))), h.push(i.track.fcv("rsi", b)), h.push(i.track.fcv("gen", x)), h.push(i.track.fcv("abc", 1)), h.push(i.track.fcv("fcu", i.ad.gub())), h.push(i.track.fcv("rcf", dl.hash)), a.ce = h.join(","), l = "addressbar", u.rsc = k = "addressbar") : (y || v || k) && (h.push(i.track.fcv("plv", Math.round(1 / _atc.vamp))), k && h.push(i.track.fcv("rsc", k)), y ? h.push(i.track.fcv("rxi", y)) : v && h.push(i.track.fcv("rsi", v)), (v || y) && h.push(i.track.fcv("gen", x)), a.ce = h.join(","), l = k || "unknown")), i.track.ts.reset(u), i.feeds._ad() && i.track.hist.log(window.location.href.split("#")[0]), l && (i.bamp >= 0 && (a.clk = 1, i.dcp != Number.MAX_VALUE && (i.dcp = a.gen = i.ad.type.CLICK)), _ate.ed.fire("addthis.user.clickback", w.addthis || {}, {
                service: l,
                hash: _ate.hash
            })), w.at_noxld || (a.xld = 1), i.upm && (a.xd = 1), !f && w.history && "function" == typeof history.replaceState && (!_ate.bro.chr || _ate.bro.chb) && (n.data_track_addressbar || n.data_track_addressbar_paths) && (o || "").split("#").shift() != s && ( - 1 == o.indexOf("#") || b || u.hash && y || p)) {
                var et, tt = dl.pathname || "", at = "/" != tt;
                if (n.data_track_addressbar_paths) {
                    at = 0;
                    for (var it = 0; it < n.data_track_addressbar_paths.length; it++)
                        if (et = new RegExp(n.data_track_addressbar_paths[it].replace(/\*/g, ".*") + "$"), et.test(tt)) {
                            at = 1;
                            break
                        }
                }
                !at || b&&!i.util.ioc(b, 5) || (e = _ate.track.cur(dl.href.split("#").shift(), null, _ate.track.ssid()), history.replaceState({
                    d: new Date,
                    g: x
                }, d.title, e), a.fcu = e.split("#.").pop())
            }
            w.addthis && w.addthis.timer && (w.addthis.timer.ifr = (new Date).getTime(), a.tmr && (a.tmr += "&ifr=" + w.addthis.timer.ifr)), 1 === i.aa && w.postMessage && (a.srd = 1, a.aa = 1, _ate.ed.addEventListener("addthis.layers.warning.show", function(e) {
                e.data && e.data.alertId && (_ate.swl = e.data.alertId)
            })), S(), - 1 != dl.href.indexOf(_atr) || i.sub || (i.upm ? _ate.bro.ffx ? (t = i.track.ctf(), t.src = T, _ate.track.qtp(a), _ate.ed.fire("addthis.lojson.complete")) : _ate.bro.ie9 ? setTimeout(function() {
                t = i.track.ctf(T + toKV(a), !0), i.track.stf(t), _ate.ed.fire("addthis.lojson.complete")
            }) : (t = i.track.ctf(), t.src = T + toKV(a), i.track.stf(t), _ate.ed.fire("addthis.lojson.complete")) : (t = i.track.ctf(), t.src = T + toKV(a), i.track.gtf().appendChild(t), i.track.stf(t), _ate.ed.fire("addthis.lojson.complete"))), addthis._pmh.flushed = 1, addthis._pmh.flush(_ate.pmh, _ate), (w.addthis_language || ac.ui_language) && i.alg(), i.plo.length > 0 && i.jlo()
        } catch (P) {
            _ate.log.debug("lod", P)
        }
    }
    function unaccent(e) {
        return e.indexOf("&")>-1 && (e = e.replace(/&([aeiou]).+;/g, "$1")), e
    }
    function mrg(e, t) {
        if (t && e !== t)
            for (var a in t)
                e[a] === u && (e[a] = t[a])
    }
    function addIEHoverFix() {
        if (_ate.bro.msi&&!d.getElementById("at300bhoveriefilter")) {
            var e = d.getElementsByTagName("head")[0], t = d.ce("style"), a = d.createTextNode(".at300b:hover,.at300bs:hover {filter:alpha(opacity=80);}");
            t.id = "at300bhoveriefilter", t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = a.nodeValue : t.appendChild(a), e.appendChild(t)
        }
    }
    function check32(e, t) {
        if (need32&&!t)
            return !0;
        var a = _ate.util.parent(e, ".addthis_toolbox");
        return need32 = (a.className || "").search(/32x32/i)>-1 || (e.className || "").search(/32x32/i)>-1
    }
    function check20(e, t) {
        if (need20&&!t)
            return !0;
        var a = _ate.util.parent(e, ".addthis_toolbox");
        return need20 = (a.className || "").search(/20x20/i)>-1 || (e.className || "").search(/20x20/i)>-1
    }
    function registerProductCode(e) {
        var t = (e.parentNode || {}).className || "", a = e.conf && e.conf.product&&-1 == t.indexOf("toolbox") ? e.conf.product: "tbx" + (e.className.indexOf("32x32")>-1 || t.indexOf("32x32")>-1 ? "32" : "") + "-" + _ate.ver();
        return a.indexOf(32)>-1 && (need32=!0), _ate.track.apc(a), a
    }
    function rpl(e, t) {
        var a = {};
        for (var i in e)
            a[i] = t[i] ? t[i] : e[i];
        return a
    }
    function _makeButton(e, t, a, i) {
        var n = document.ce("img");
        return n.width = e, n.height = t, n.border = 0, n.alt = a, n.src = i, n
    }
    function _parseThirdPartyAttributes(e, t) {
        var a, i = [], n = {}, r = Math.min((e.attributes || []).length || 0, 160), s = t.replace(/:/g, "-");
        if (isNaN(r))
            return n;
        for (var o = 0; r > o; o++)
            if (a = e.attributes[o]) {
                if (i = a.name.split(t + ":"), !i || 1 == i.length) {
                    if ( - 1 == a.name.indexOf("data-"))
                        continue;
                        if (i = a.name.split("data-" + s + "-"), !i || 1 == i.length)
                            continue
                }
                2 == i.length && (n[i.pop()] = a.value)
            }
        return n
    }
    function _parseAttributes(e, t, a, i) {
        var t = t || {}, n = {}, r = _parseThirdPartyAttributes(e, "addthis");
        if ("[object Object]" === Object.prototype.toString.call(t)&&!t.nodeType)
            for (var s in t)
                n[s] = t[s];
        if (i)
            for (var s in e[a])
                n[s] = e[a][s];
        for (var s in r)
            if (r.hasOwnProperty(s)) {
                if (t[s]&&!i)
                    n[s] = t[s];
                else {
                    var o = r[s];
                    o ? n[s] = o : t[s] && (n[s] = t[s]), "true" === n[s] ? n[s]=!0 : "false" === n[s] && (n[s]=!1)
                }
                if (n[s] !== u && json[s] && "string" == typeof n[s])
                    try {
                        n[s] = JSON.parse(n[s].replace(/'/g, '"'))
                    } catch (c) {
                        n[s] = _ate.evl("(" + n[s] + ");", !0)
                    }
                }
        return n
    }
    function _processCustomServices(e) {
        var t = (e || {}).services_custom;
        if (t) {
            t instanceof Array || (t = [t]);
            for (var a = 0; a < t.length; a++) {
                var i = t[a];
                i.name && i.icon && i.url && ("object" == typeof i.url && (i.url = _ate.util.toKV(i.url)), i.code = i.url = i.url.replace(/ /g, ""), i.code = i.code.split("//").pop().split("?").shift().split("/").shift().toLowerCase(), customServices[i.code] = i)
            }
        }
    }
    function _getCustomService(e) {
        return customServices[e] || {}
    }
    function _getATtributes(e, t, a, i) {
        var n = {
            conf: t || {},
            share: a || {}
        };
        return n.conf = _parseAttributes(e, t, "conf", i), n.share = _parseAttributes(e, a, "share", i), n
    }
    function _render(e, t, a, i) {
        if (_ate.igv(), e) {
            t = t || {}, a = a || {};
            var n = t.conf || globalConfig, r = t.share || globalShare, s = a.onmouseover, o = a.onmouseout, c = a.onclick, d = a.internal, l = undefined, u = a.singleservice;
            u ? c === l && (c = nosend[u] ? function(e, t, a) {
                var i = rpl(a, upShare);
                return addthis_open(e, u, i.url, i.title, rpl(t, upConfig), i)
            } : nowindow[u] ? function(e, t, a) {
                var i = rpl(a, upShare);
                return addthis_sendto(u, rpl(t, upConfig), i)
            } : sharetowindow[u] ? function(e, t, a) {
                var i = rpl(a, upShare);
                return _ate.share.stw(u, i, t, 735)
            } : null) : a.noevents || (a.nohover ? c === l && (c = function(e, t, a) {
                return addthis_open(e, "more", null, null, rpl(t, upConfig), rpl(a, upShare))
            }) : (s === l && (s = function(e, t, a) {
                return addthis_open(e, "", null, null, rpl(t, upConfig), rpl(a, upShare))
            }), o === l && (o = function() {
                return addthis_close()
            }), c === l && (c = function(e, t, a) {
                return addthis_sendto("more", rpl(t, upConfig), rpl(a, upShare))
            }))), e = _select(e);
            for (var h = 0; h < e.length; h++) {
                var f = e[h], p = f.parentNode, _ = _getATtributes(f, n, r, !i) || {};
                if (mrg(_.conf, globalConfig), mrg(_.share, globalShare), f.conf = _.conf, f.share = _.share, f.conf.ui_language && _ate.alg(f.conf.ui_language), _processCustomServices(f.conf), p && p.className.indexOf("toolbox")>-1 && 0 === (f.conf.product || "").indexOf("men") && (f.conf.product = "tbx" + (p.className.indexOf("32x32")>-1 ? "32" : p.className.indexOf("20x20")>-1 ? "20" : "") + "-" + _ate.ver(), _ate.track.apc(f.conf.product)), u && "more" !== u && (f.conf.product = registerProductCode(f)), f.conf && (f.conf.ui_click || f.conf.ui_window_panes) || _ate.bro.ipa ? c && (f.onclick = u ? function() {
                    return c(this, this.conf, this.share)
                } : f.conf.ui_window_panes ? function() {
                    return addthis_sendto("more", this.conf, this.share)
                } : function() {
                    return _ate.bro.iph || _ate.bro.wph || _ate.bro.dro ? addthis_sendto("more", this.conf, this.share) : addthis_open(this, "", null, null, this.conf, this.share)
                }) : (_ate.maf = _ate.maf || {}, _ate.maf.home = this, _ate.maf.key = null, _ate.maf.shift = null, s && (f.onfocus = f.onmouseover = function() {
                    for (_ate.maf.sib = this.nextSibling; _ate.maf.sib && 3 == _ate.maf.sib.nodeType && _ate.maf.sib.nextSibling;)
                        _ate.maf.sib = _ate.maf.sib.nextSibling;
                    if (!_ate.maf.sib || 3 == _ate.maf.sib.nodeType) {
                        var e = this.parentNode;
                        if (e)
                            for (; e.nextSibling && 3 == e.nodeType;)
                                e = e.nextSibling;
                        else 
                            for (e = document.body.firstChild || document.body; 3 == e.nodeType && e.nextSibling;)
                                e = e.nextSibling;
                        _ate.maf.sib = e
                    }
                    return _ate.maf.sib.onfocus = function() {
                        _ate.maf.sib.tabIndex = ""
                    }, s(this, this.conf, this.share)
                }), o && (f.onmouseout = function() {
                    return o(this)
                }), c && (f.onclick = function() {
                    return c(f, this.conf || f.conf, this.share || f.share)
                }), (o || c) && (f.onkeypress = f.onkeydown = function(e) {
                    if (!e)
                        var e = window.event;
                    e.shiftKey && (_ate.maf.shift=!0), e.keyCode ? _ate.maf.key = e.keyCode : e.which && (_ate.maf.key = e.which), _ate.maf.pre = 13 == _ate.maf.key ? this : null
                }, f.onblur = function() {
                    if (9 == _ate.maf.key && _ate.maf.firstCompact&&!_ate.maf.shift && this.className.indexOf("compact")>-1)
                        _ate.maf.key = null, _ate.maf.acm=!0, document.getElementById(_ate.maf.firstCompact).focus();
                    else if (_ate.maf.key = null, _ate.maf.shift = null, o)
                        return o(this)
                })), "a" == f.tagName.toLowerCase()) {
                    var g = f.share.url || addthis_share.url;
                    if (_ate.usu(g), u) {
                        var m = _getCustomService(u, f.conf), w = f.firstChild;
                        if (m && m.code && m.icon && w && w.className.indexOf("at300bs")>-1) {
                            var v = "16";
                            check32(f, 1) ? (w.className = w.className.split("at15nc").join(""), v = "32") : check20(f, 1) && (w.className = w.className.split("at15nc").join(""), v = "20"), w.style.background = "url(" + m.icon + ") no-repeat top left transparent", w.style.cssText || (w.style.cssText = ""), w.style.cssText = "line-height:" + v + "px!important;width:" + v + "px!important;height:" + v + "px!important;background:" + w.style.background + "!important"
                        }
                        if (nowindow[u])("mailto" == u || "email" == u && (f.conf.ui_use_mailto || _ate.bro.iph || _ate.bro.wph || _ate.bro.ipa || _ate.bro.dro)) && (f.onclick = function() {
                            f.share.xid = _ate.util.cuid(), (new Image).src = _ate.share.genurl("mailto", 0, f.share, f.config), _ate.gat(u, g, f.conf, f.share)
                        }, f.href = _ate.share.genieu(f.share, f.config || f.conf), addthis.ems.push(f));
                        else {
                            if (a.follow) {
                                if (f.href = "twitter" !== u ? f.share.followUrl : "//twitter.com/" + f.share.userid, f.conf = f.conf || {}, f.conf.follow=!0, f.onclick = function(e) {
                                    return _ate.share.track(u, 1, f.share, f.conf), "twitter" === u ? (e && e.preventDefault(), _ate.share.ocw(f.share.followUrl, 520, 520)) : void 0
                                }, f.children && 1 == f.children.length && f.parentNode && f.parentNode.className.indexOf("toolbox")>-1) {
                                    var b = document.ce("span");
                                    b.className = "addthis_follow_label", b.innerHTML = _ate.services.getName(u).replace("_follow", ""), f.appendChild(b)
                                }
                            } else 
                                _ate.share.externEvents(u, f, a) || f.noh || (f.conf.ui_open_windows || _ate.share.auw(u) ? f.onclick = function() {
                                    return _ate.share.stw(u, f.share, f.conf)
                                } : (f.onclick = function() {
                                    return _ate.share.siw(u, f.share, f.conf)
                                }, f.href = _ate.share.genurl(u, 0, f.share, f.conf)));
                            f.conf.follow || addthis.addEvents(f, u, g), f.noh || f.target || (f.target = "_blank"), addthis.links.push(f)
                        }
                        if (!f.title || f.at_titled) {
                            var y = _ate.services.getName(u, !m);
                            b_title[u] && retitle.push({
                                link: f,
                                title: u
                            }), f.title = unaccent(a.follow ? f_title[u] ? f_title[u] : "Follow on " + y : b_title[u] ? b_title[u] : y), f.at_titled = 1
                        }
                        f.href || (f.href = "#")
                    } else 
                        f.conf.product&&-1 == f.parentNode.className.indexOf("toolbox") && registerProductCode(f)
                    }
                var k;
                switch (d) {
                case"img":
                    if (!f.hasChildNodes()) {
                        var x = (f.conf.ui_language || _ate.lng()).split("-").shift(), N = _ate.ivl(x);
                        N ? 1 !== N && (x = N) : x = "en", k = _makeButton(_ate.iwb(x) ? 150 : 125, 16, "Share", _atr + "static/btn/v2/lg-share-" + x.substr(0, 2) + ".gif")
                    }
                }
                k && f.appendChild(k)
            }
        }
    }
    function _renderPreferredItem(e, t, a, i, n, r, s) {
        if (!e._iss) {
            var o, c, d, l, u, h, f = (e.className || "", {
                pinterest: "pinterest_share"
            });
            servicesInitted ? o = e.parentNode._atsharedconf || {} : (servicesInitted = 1, e.parentNode._atsharedconf = o = _ate.share.services.init(e.conf)), e.parentNode.services || (e.parentNode.services = {}), c = o.services_exclude || "", _ate.bro.ie9 && (c += (c.length ? "," : "") + "link"), l = _ate.share.services.loc, u = e.parentNode.services, h = _ate.util.unqconcat((window.addthis_options || "").replace(",more", "").split(","), l.split(","));
            do 
                d = h[t++], f[d] && (d = f[d]);
            while (t < h.length && (c.indexOf(d)>-1 || u[d]));
            u[d] && _ate.util.each(_ate.services.list, function(e) {
                return u[e]||-1 != c.indexOf(e) ? void 0 : (d = e, !1)
            }), e._ips = 1, - 1 == e.className.indexOf(d) && (e.className = "addthis_button_" + d + " " + e.className, e._iss = 1), e.parentNode.services[d] = 1, a && _renderToolbox([e], i, n, !0, s)
        }
    }
    function _renderToolbox(e, t, a, i, n) {
        for (var r = 0; r < e.length; r++) {
            var s = e[r], o = document;
            if (null != s && (i!==!1 ||!s.ost)) {
                var c = _getATtributes(s, t, a, !n), d = 0, l = s.className || "", u = l.match(/addthis_button_([\w\-\.]+)(?:\s|$)/), h = l.match(/addthis_counter_([\w\.]+)(?:\s|$)/), f = {}, p = u && u.length ? u[1]: 0, _ = h && h.length ? h[1]: 0, g = _getCustomService(p);
                if (mrg(c.conf, globalConfig), mrg(c.share, globalShare), p&&!_ate.share.extern(p, s, c)) {
                    if (p.indexOf("preferred")>-1) {
                        if (s._iss || s._iwps)
                            continue;
                        u = l.match(/addthis_button_preferred_([0-9]+)(?:\s|$)/);
                        var m = (u && u.length ? Math.min(16, Math.max(1, parseInt(u[1]))) : 1) - 1;
                        if ((!s.conf || n) && (s.conf = c.conf || s.conf || {}), (!s.share || n) && (s.share = c.share || s.share || {}), s.conf.product = "tbx-" + _ate.ver(), registerProductCode(s), !dataLoaded) {
                            var w = _ate.util.bind(_renderPreferredItem, s, s, m, !0, t, a, i, n);
                            _ate.ed.addEventListener("addthis-internal.data.ssh", w), setTimeout(w, 2e3), s._iwps = 1;
                            continue
                        }
                        _renderPreferredItem(s, m, !0)
                    } else if (p.indexOf("follow")>-1)
                        "google_follow" == p ? s.title = "Follow on Google" : p = p.split("_follow").shift(), f.follow=!0, _ate.track.apc("flw-" + _ate.ver()), c.share.followUrl = _ate.share.gfu(p, c.share.userid, c.share.usertype, c.share) || c.share.url;
                    else if (!(_ate.services.exists(p) || _ate.services.isTop(p) || g && g.code))
                        continue;
                    !_ate.services.isTop(p, 64) && _ate.resource.useHighResIcons ? css64.load() : (_ate.services.isTop(p, 32) ||!need32&&!check32(s) || css32.load(), _ate.services.isTop(p, 20) ||!need20&&!check20(s) || css20.load());
                    var v = _ate.services.isTop(p, 16)&&!check32(s, !0)&&!check20(s, !0);
                    if (s.childNodes.length)
                        if (1 == s.childNodes.length) {
                            var b = s.childNodes[0];
                            if (3 == b.nodeType) {
                                var y = o.ce("span");
                                s.insertBefore(y, b), y.className = (v ? "at16nc " : " ") + "at300bs at15nc at15t_" + p + (v ? " at16t_" + p : "")
                            }
                            y == undefined || "compact" !== p && "expanded" !== p ? y != undefined && (y.innerHTML = '<span class="at_a11y">Share on ' + p + "</span>") : y.innerHTML = '<span class="at_a11y">More Sharing Services</span>'
                        } else 
                            s.firstChild && 3 == s.firstChild.nodeType && "\n" == s.firstChild.textContent || (d = 1);
                    else {
                        var y = o.ce("span");
                        if (s.appendChild(y), y.className = (v ? "at16nc " : " ") + "at300bs at15nc at15t_" + p + (v ? " at16t_" + p : ""), ((((s.parentNode || {}).parentNode || {}).parentNode || {}).className || "").indexOf("label_style")>-1) {
                            var k = o.createTextNode(_ate.services.getName(p));
                            s.appendChild(k)
                        } else {
                            var x = "";
                            y == undefined || "compact" !== p && "expanded" !== p ? y != undefined && (x = "Share on " + p) : x = "More Sharing Services";
                            try {
                                y.innerHTML = '<span class="at_a11y">' + x + "</span>"
                            } catch (N) {
                                var O = o.ce("span");
                                O.className = "at_a11y", O.appendChild(document.createTextNode(x)), y.appendChild(O)
                            }
                        }
                    }
                    "compact" === p || "expanded" === p ? (d||-1 != l.indexOf("at300") || (s.className += " at300m"), c.conf.product&&-1 == c.conf.product.indexOf("men-") && (c.conf.product += ",men-" + _ate.ver()), s.href || (s.href = "#"), s.parentNode && s.parentNode.services && (c.conf.parentServices = s.parentNode.services), "expanded" === p && (f.nohover=!0, f.singleservice = "more")) : ((s.parentNode.className || "").indexOf("toolbox")>-1 && (s.parentNode.services || (s.parentNode.services = {}), s.parentNode.services[p] = 1), d||-1 != l.indexOf("at300") || (s.className += " at300b"), f.singleservice = p), s._ips && (f.issh=!0), _render([s], c, f, n), s.ost = 1, registerProductCode(s)
                } else if (_) {
                    if (s.ost)
                        continue;
                    s.ost = 1;
                    var T = o.ce("a"), S = o.ce("a");
                    T.className = "addthis_native_counter_sibling addthis_button_" + _, S.className = "addthis_native_counter addthis_counter addthis_bubble_style", s.className += " addthis_native_counter_parent", s.appendChild(T), s.appendChild(S), c.conf.service = _.indexOf("pinterest")>-1 ? "pinterest_share" : _, _render(T, c, {
                        singleservice: _
                    }), addthis.counter(S, c.conf, c.share)
                }
            }
        }
    }
    function gat(e, t, a, i) {
        if ("facebook_unlike" != e && "google_unplusone" != e) {
            a = a || {};
            var n = a.data_ga_tracker, r = a.data_ga_property;
            if (r && ("object" == typeof window._gat && _gat._createTracker ? n = _gat._createTracker(r, "addThisTracker") : "object" == typeof window._gaq && _gaq._getAsyncTracker ? n = _gaq._getAsyncTracker(r) : window._gaq instanceof Array && _gaq.push([function() {
                _ate.gat(e, t, a, i)
            }
            ])), n && "string" == typeof n && (n = window[n]), !n && window.GoogleAnalyticsObject) {
                var s = window[window.GoogleAnalyticsObject];
                s.getAll && (n = s.getAll())
            }
            if (n && "object" == typeof n) {
                if ("more" == e || "settings" == e)
                    return;
                var o = t || (i || {}).url || location.href, c = e, d = "share";
                c.indexOf("_")>-1 && (c = c.split("_"), d = c.pop(), d.length <= 2 && (d = "share"), c = c.shift()), 0 == o.toLowerCase().replace("https", "http").indexOf("http%3a%2f%2f") && (o = _duc(o));
                try {
                    a.data_ga_social && n._trackSocial && "google_plusone" != e ? n._trackSocial(c, d, i.url) : n._trackEvent ? n._trackEvent("addthis", e, o) : a.data_ga_social && "google_plusone" != e ? s("send", "social", c, d, o) : s("send", "event", "addthis", e, o)
                } catch (l) {
                    try {
                        n._initData && n._initData(), a.data_ga_social && n._trackSocial && "google_plusone" != e ? n._trackSocial(c, d, i.url) : n._trackEvent ? n._trackEvent("addthis", e, o) : a.data_ga_social && "google_plusone" != e ? s("send", "social", c, d, o) : s("send", "event", "addthis", e, o)
                    } catch (l) {}
                }
            }
        }
    }
    function doRenderPass() {
        var e = addthis, t = ".addthis_";
        e.osrp || (e.osrp = 1, globalShare = w.addthis_share, globalConfig = w.addthis_config, body = d.body, buttons = _ate.util.gebcn(body, "A", "addthis_button_", !0, !0), counters = _ate.util.gebcn(body, "A", "addthis_counter_", !0, !0), addIEHoverFix(), addthis.toolbox(t + "toolbox", null, null, !0, counters.length), addthis.button(t + "button"), addthis.counter(t + "counter"), addthis.count(t + "count"), "function" == typeof addthis.overlay && addthis.overlay(t + "shareable"), "function" == typeof addthis.dock && addthis.dock(t + "bar"), _renderToolbox(buttons, null, null, !1), _renderToolbox(counters, null, null, !1), ((globalConfig || {}).login || {}).services && addthis.login.initialize())
    }
    function callPostLoads() {
        if (!postloaded) {
            for (var e, t, a = window.addthis, i = 0, n = a.plo; i < n.length; i++)
                t = n[i], t.called || (e = t.ns ? "string" == typeof t.ns ? a[t.ns] : t.ns : a, t && t.call && e[t.call] && e[t.call].apply(t.ctx ? a[t.ctx] : this, t.args));
            postloaded = 1
        }
    }
    function addEventListeners() {
        if (!postloaded)
            for (var e, t = window.addthis, a = 0, i = t.plo; a < i.length; a++)
                e = i[a], "addEventListener" == e.call && ((e.ns ? "string" == typeof e.ns ? t[e.ns] : e.ns : t)[e.call].apply(e.ctx ? t[e.ctx] : this, e.args), e.called = 1)
    }
    var undefined, w = window, d = document, l;
    try {
        l = window.location, (0 === l.protocol.indexOf("file") || 0 === l.protocol.indexOf("safari-extension") || 0 === l.protocol.indexOf("chrome-extension")) && (_atr = "http:" + _atr), - 1 != l.hostname.indexOf("localhost") && (_atc.loc = 1)
    } catch (e) {}
    var ua = navigator.userAgent.toLowerCase(), d = document, w = window, addthis = window.addthis || {}, A = addthis, dl = d.location, b = {
        win: /windows/.test(ua),
        xp: /windows nt 5.1/.test(ua) || /windows nt 5.2/.test(ua),
        osx: /os x/.test(ua),
        chb: /chrome/.test(ua) && parseInt(/chrome\/(.+?)\./.exec(ua).pop(), 10) > 13,
        chr: /chrome/.test(ua)&&!/rockmelt/.test(ua),
        cho: /chrome\/(1[2345678]|2\d)/.test(ua),
        iph: /iphone/.test(ua) || /ipod/.test(ua),
        dro: /android/.test(ua),
        wph: /windows phone/.test(ua),
        ipa: /ipad/.test(ua),
        saf: /safari/.test(ua)&&!/chrome/.test(ua),
        opr: /opera/.test(ua),
        ffx: /firefox/.test(ua),
        ff2: /firefox\/2/.test(ua),
        ffn: /firefox\/((3.[6789][0-9a-z]*)|(4.[0-9a-z]*))/.test(ua),
        ie6: /msie 6.0/.test(ua),
        ie7: /msie 7.0/.test(ua),
        ie8: /msie 8.0/.test(ua),
        ie9: /msie 9.0/.test(ua),
        ie10: /msie 10.0/.test(ua),
        ie11: /trident\/7.0/.test(ua),
        msi: /msie/.test(ua)&&!/opera/.test(ua),
        mob: /(iphone|ipod|ipad|android|mobi|blackberry|opera mini|silk)/.test(ua),
        mod: - 1
    }, _ate = {
        rev: "10.2",
        bro: b,
        wlp: (l || {}).protocol,
        dl: dl,
        unj: w.JSON && "function" == typeof w.JSON.parse && "function" == typeof w.JSON.stringify,
        upm: !!w.postMessage&&-1 !== ("" + w.postMessage).toLowerCase().indexOf("[native code]"),
        uls: function() {
            try {
                var e = "addthis-test", t = window.localStorage;
                return t.setItem(e, "1"), t.removeItem(e), null != t
            } catch (a) {
                return !1
            }
        }(),
        bamp: _atc.bamp - Math.random(),
        abmp: _atc.abmp - Math.random(),
        camp: _atc.camp - Math.random(),
        damp: _atc.damp - Math.random(),
        cscs: _atc.cscs - Math.random(),
        sfmp: _atc.sfmp - Math.random(),
        xamp: _atc.xamp - Math.random(),
        vamp: _atc.vamp - Math.random(),
        tamp: _atc.tamp - Math.random(),
        pamp: _atc.pamp - Math.random(),
        ab: "-",
        inst: 1,
        wait: 500,
        tmo: null,
        sub: !!window.at_sub,
        dbm: 0,
        uid: null,
        api: {},
        imgz: [],
        hash: window.location.hash
    };
    d.ce = d.createElement, d.gn = d.getElementsByTagName, window._ate = _ate, _ate.evl = function(src, scope) {
        if (scope) {
            var evl;
            return eval("evl = " + src), evl
        }
        return eval(src)
    };
    var toString = Object.prototype.toString, each = function(e, t) {
        try {
            reduce(e, function(e, a, i) {
                var n = t(i, a);
                if (n===!1)
                    throw {
                        cancel: !0
                    }
            }, [])
        } catch (a) {
            if (a.cancel)
                return;
            throw a
        }
    }, each2 = function(e, t) {
        try {
            reduce(e, function(a, i, n) {
                var r = t(n, i, e);
                if (r===!1)
                    throw {
                        cancel: !0
                    }
            }, [])
        } catch (a) {
            if (a.cancel)
                return;
            throw a
        }
    }, nativeMap = Array.prototype.map, map = function(e, t, a) {
        var i = [];
        return null == e ? i : nativeMap && e.map === nativeMap ? e.map(t, a) : (each2(e, function(e, n, r) {
            i[i.length] = t.call(a, n, e, r)
        }), i)
    }, _uniqueConcat = function(e, t) {
        var a, i = {};
        for (a = 0; a < e.length; a++)
            i[e[a]] = 1;
        for (a = 0; a < t.length; a++)
            i[t[a]] || (e.push(t[a]), i[t[a]] = 1);
        return e
    }, _asl = Array.prototype.slice, slice = function(e) {
        return _asl.apply(e, _asl.call(arguments, 1))
    }, strip = function(e) {
        return ("" + e).replace(/(^\s+|\s+$)/g, "")
    }, toJSON = function(e) {
        try {
            return w.JSON && "function" == typeof w.JSON.stringify ? JSON.stringify(e) : ""
        } catch (t) {
            return ""
        }
    }, fromJSON = function(e) {
        try {
            return w.JSON && "function" == typeof w.JSON.parse ? JSON.parse(e) : null
        } catch (t) {
            return null
        }
    }, extend = function(e, t) {
        return t || (t = e.object || e.obj, e = e.subject || e.subj), reduce(slice(arguments, 1), function(e, t) {
            return reduce(t, function(e, t, a) {
                return e && (e[a] = t), e
            }, e)
        }, e)
    }, recursiveToKV = function(e, t, a) {
        return reduce(e, function(e, i, n) {
            return n = strip(n), n && e.push(_euc(n) + (a || "=") + _euc(strip("object" == typeof i ? recursiveToKV(i, t || "&", a || "=") : i))), e
        }, []).join(t || "&")
    }, toKV = function(e, t) {
        return reduce(e, function(e, t, a) {
            return a = strip(a), a && e.push(_euc(a) + "=" + _euc(strip(t))), e
        }, []).join(t || "&")
    }, recursiveFromKV = function(e, t, a) {
        return reduce((e || "").split(t || "&"), function(e, i) {
            try {
                var n = i.split(a || "="), r = strip(_duc(n[0])), s = strip(_duc(n.slice(1).join(a || "=")));
                (s.indexOf(t || "&")>-1 || s.indexOf(a || "=")>-1) && (s = recursiveFromKV(s, t || "&", a || "=")), r && (e[r] = s)
            } catch (o) {}
            return e
        }, {})
    }, fromKV = function(e, t) {
        return reduce((e || "").split(t || "&"), function(e, t) {
            try {
                var a = t.split("="), i = strip(_duc(a[0])), n = strip(_duc(a.slice(1).join("=")));
                i && (e[i] = n)
            } catch (r) {}
            return e
        }, {})
    }, objectToCSV = function(e) {
        if (null == e || "object" != typeof e)
            return e;
        if (e instanceof Object) {
            var t = "";
            for (var a in e)
                e.hasOwnProperty(a) && (t += (t.length > 0 ? "," : "") + e[a]);
            return t
        }
        return null
    }, bind = function() {
        var e = slice(arguments, 0), t = e.shift(), a = e.shift();
        return function() {
            return t.apply(a, e.concat(slice(arguments, 0)))
        }
    }, _listen = function(e, t, a, i) {
        t && (t.attachEvent ? t[(e ? "detach" : "attach") + "Event"]("on" + a, i) : t[(e ? "remove" : "add") + "EventListener"](a, i, !1))
    }, listen = function(e, t, a) {
        _listen(0, e, t, a)
    }, unlisten = function(e, t, a) {
        _listen(1, e, t, a)
    }, getUrlDomain = function(e) {
        return e.match(/(([^\/\/]*)\/\/|\/\/)?([^\/\?\&\#]+)/i)[0]
    }, getUrlQueryString = function(e) {
        return e.replace(getUrlDomain(e), "")
    }, clone = function(e) {
        if (null == e || "object" != typeof e)
            return e;
        if (e instanceof Object) {
            var t = {};
            if ("function" == typeof e.hasOwnProperty)
                for (var a in e)
                    t[a] !== e && e.hasOwnProperty(a) && e[a] !== undefined && (t[a] = clone(e[a]));
            return t
        }
        return null
    }, isString = function(e) {
        return "[object String]" === toString.call(e)
    }, isNumber = function(e) {
        return "[object Number]" === toString.call(e)
    }, rel2abs = function(e) {
        if (e) {
            var t, a;
            if ( - 1 !== e.search(/(?:\:|\/\/)/))
                return e;
            if ( - 1 !== e.search(/^\//))
                return window.location.origin + e;
            if ( - 1 !== e.search(/(?:^\.\/|^\.\.\/)/)) {
                t = /\.\.\//g;
                var i = 0 === e.search(t) && e.match(t).length || 1, n = window.location.href.replace(/\/$/, "").split("/");
                return e = e.replace(t, "").replace(a, ""), n.slice(0, n.length - i).join("/") + "/" + e
            }
            return window.location.href.match(/(.*\/)/)[0] + e
        }
    }, json2html = function() {
        var e = function(e) {
            var t, a, i, n;
            return i = e.match(/^(\w+)(?:#|.|$)/), i = i ? i[1] : "div", t = document.createElement(i), a = e.match(/#[\w][\w-]*/), a && (a = a[0].replace(/#/, ""), t.setAttribute("id", a)), n = e.match(/\.[\w][\w-]*/g), n && (n = n.join(" ").replace(/\./g, ""), t.className = n), t
        };
        return function(t) {
            if (t) {
                var a, i, n, r, s, o, c, l, u, h;
                for (a in t) {
                    i = a;
                    break
                }
                if (n = t[i], r = e(i), n && "object" == typeof n && "length"in n) {
                    for (a in n)
                        if ("undefined" == typeof n.hasOwnProperty || n.hasOwnProperty(a)) {
                            var f = json2html(n[a]);
                            r.appendChild(f)
                        }
                    return r
                }
                if (o = t[i], u = ["a", "b", "body", "br", "div", "em", "font", "head", "h", "p", "span", "button", "h1", "h2", "h3", "h4"], h = function(e) {
                    if ("function" == typeof u.indexOf)
                        return u.indexOf(e)>-1;
                    for (var t in u)
                        if (e === u[t])
                            return !0;
                    return !1
                }, "string" == typeof o)
                    r.appendChild(document.createTextNode(o));
                else 
                    for (var s in o)
                        if (o.hasOwnProperty(s))
                            if (c = o[s], "string" == typeof c && s.indexOf(".") < 0 && (s.indexOf("#") < 0 || 1 === s.length)&&!h(s.toLowerCase()))
                                if ("html" === s)
                                    r.appendChild(document.createTextNode(c));
                                else if ("style" === s && (_ate.bro.ie6 || _ate.bro.ie7 || _ate.bro.msi && "backcompat" === d.compatMode.toLowerCase())) {
                                    for (var p, _, g, m = c.split(";"), w =- 1; ++w < m.length;)
                                        if (p = m[w], _ = p.substring(0, p.indexOf(":")), g = p.substring(p.indexOf(":") + 1, p.length), _ && g)
                                            try {
                                                r.style[_] = g
                                            } catch (v) {}
                                } else 
                                    "className" === s || "class" === s ? r.className = c : r.setAttribute(s, c);
                                    else if ("children" == s)
                                        for (var f in c)
                                            r.appendChild(json2html(c[f]));
                                    else {
                                        if ((c || {}).test===!1)
                                            continue;
                                            l = {}, l[s] = c, c = json2html(l), r.appendChild(c)
                                    }
                return r
            }
        }
    }(), isEmptyObj = function(e) {
        var t;
        for (t in e)
            if (e.hasOwnProperty(t))
                return !1;
        return !0
    }, serialize = function(e) {
        var t = [];
        for (var a in e)
            t.push(_euc(a) + "=" + _euc(e[a]));
        return t.join("&")
    }, filter = function(e, t, a) {
        var i, n, r = [];
        if (Array.prototype.filter)
            return e.filter(t, a || this);
        for (n = 0, i = e.length; i > n; n++)
            t.call(a || this, e[n]) && (r[r.length] = e[n]);
        return r
    }, util = {
        unqconcat: _uniqueConcat,
        reduce: reduce,
        filter: filter,
        slice: slice,
        strip: strip,
        extend: extend,
        toKV: toKV,
        toJSON: toJSON,
        fromJSON: fromJSON,
        rtoKV: recursiveToKV,
        fromKV: fromKV,
        rfromKV: recursiveFromKV,
        otoCSV: objectToCSV,
        bind: bind,
        listen: listen,
        each: each,
        map: map,
        unlisten: unlisten,
        gUD: getUrlDomain,
        gUQS: getUrlQueryString,
        clone: clone,
        mrg: mrg,
        rel2abs: rel2abs,
        json2html: json2html,
        isEmptyObj: isEmptyObj,
        isString: isString,
        isNumber: isNumber,
        serialize: serialize,
        stripHypertextProtocol: stripHypertextProtocol,
        misc: {}
    };
    _ate.util = util, extend(_ate, util);
    var u = _ate.util;
    !function(e) {
        var t = {
            ALLOW_NONE: 0,
            ALLOW_ALL: - 1,
            GOV: 1,
            MIL: 2,
            OPTOUT_USER: 4,
            OPTOUT_PUB: 8,
            DO_NOT_TRACK: 16,
            CAN_SET_COOKIES: 32
        };
        e.constants = {
            getPermissions: function() {
                return e.util.clone(t)
            }
        }
    }(window._ate), function(e) {
        function t(e, t, a, i, n) {
            this.type = e, this.triggerType = t || e, this.target = a || i, this.triggerTarget = i || a, this.data = n || {}, this.serialize = function() {
                if (u) {
                    var e = h.extend({}, this.data);
                    return e.element = null, JSON.stringify({
                        remoteEvent: {
                            data: e,
                            type: this.type,
                            triggerType: this.triggerType,
                            target: {},
                            triggerTarget: {}
                        }
                    })
                }
                return ""
            }
        }
        function a(e, a) {
            this.target = e, this.queues = {}, this.remoteDispatcher = null, this.remoteFilter = null, this.defaultEventType = a || t
        }
        function i(e) {
            var t = this.queues;
            return t[e] || (t[e] = []), t[e]
        }
        function n(e, t) {
            this.getQueue(e).push(t)
        }
        function r(e, t) {
            e && e.postMessage && (this.remoteDispatcher = e, this.remoteFilter = t)
        }
        function s(e, t) {
            var a = this, i = function() {
                var n = Array.prototype.slice.call(arguments, 0);
                t.apply(this, n), a.removeEventListener(e, i)
            };
            a.addEventListener(e, i)
        }
        function o(e, t) {
            var a = this.getQueue(e), i = "string" == typeof a ? a.indexOf(t): - 1;
            - 1 !== i && a.splice(i, 1)
        }
        function c(e, t, a, i) {
            var n = this;
            i ? n.dispatchEvent(new n.defaultEventType(e, e, t, n.target, a)) : setTimeout(function() {
                n.dispatchEvent(new n.defaultEventType(e, e, t, n.target, a))
            })
        }
        function d(e) {
            var t, a = e.target, i = this.getQueue(e.type);
            for (t = 0; t < i.length; t++)
                i[t].call(a, e.clone());
            try {
                !u ||!this.remoteDispatcher || "function" != typeof this.remoteDispatcher.postMessage || this.remoteFilter && 0 !== e.type.indexOf(this.remoteFilter) || this.remoteDispatcher.postMessage(e.serialize(), "*")
            } catch (n) {}
        }
        function l(e) {
            if (e) {
                for (var t in f)
                    e[t] = h.bind(f[t], this);
                return e
            }
        }
        var u = w.JSON && "function" == typeof JSON.stringify, h = e.util;
        h.extend(t.prototype, {
            constructor: t,
            bubbles: !1,
            preventDefault: h.noop,
            stopPropagation: h.noop,
            clone: function() {
                return new this.constructor(this.type, this.triggerType, this.target, this.triggerTarget, h.extend({}, this.data))
            }
        });
        var f = {
            constructor: a,
            getQueue: i,
            addEventListener: n,
            once: s,
            removeEventListener: o,
            addRemoteDispatcher: r,
            dispatchEvent: d,
            fire: c,
            decorate: l
        };
        h.extend(a.prototype, f), e.event = {
            PolyEvent: t,
            EventDispatcher: a
        }
    }(_ate, _ate.api, _ate), _ate.ed = new _ate.event.EventDispatcher(_ate);
    var _adr = {
        isBound: 0,
        isReady: 0,
        readyList: [],
        onReady: function() {
            if (!_adr.isReady) {
                _adr.isReady = 1;
                for (var e = _adr.readyList.concat(window.addthis_onload || []), t = 0; t < e.length; t++)
                    e[t].call(window);
                _adr.readyList = []
            }
        },
        addLoad: function(e) {
            var t = w.onload;
            w.onload = "function" != typeof w.onload ? e : function() {
                t && t(), e()
            }
        },
        bindReady: function() {
            if (!r.isBound&&!_atc.xol) {
                if (r.isBound = 1, "complete" === document.readyState)
                    return void setTimeout(r.onReady, 1);
                d.addEventListener&&!b.opr && d.addEventListener("DOMContentLoaded", r.onReady, !1);
                var e = window.addthis_product;
                if (e && e.indexOf("f")>-1)
                    return void r.onReady();
                if (b.msi&&!b.ie9 && window == top && function() {
                    if (!r.isReady) {
                        try {
                            d.documentElement.doScroll("left")
                        } catch (e) {
                            return void setTimeout(arguments.callee, 0)
                        }
                        r.onReady()
                    }
                }(), b.opr && d.addEventListener("DOMContentLoaded", function() {
                    if (!r.isReady) {
                        for (var e = 0; e < d.styleSheets.length; e++)
                            if (d.styleSheets[e].disabled)
                                return void setTimeout(arguments.callee, 0);
                        r.onReady()
                    }
                }, !1), b.saf) {
                    var t;
                    !function() {
                        if (!r.isReady) {
                            if ("loaded" != d.readyState && "complete" != d.readyState)
                                return void setTimeout(arguments.callee, 0);
                            if (t === undefined) {
                                for (var e = d.gn("link"), a = 0; a < e.length; a++)
                                    "stylesheet" == e[a].getAttribute("rel") && t++;
                                var i = d.gn("style");
                                t += i.length
                            }
                            return d.styleSheets.length != t ? void setTimeout(arguments.callee, 0) : void r.onReady()
                        }
                    }()
                }
                r.addLoad(r.onReady)
            }
        },
        append: function(e) {
            r.bindReady(), r.isReady ? e.call(window, []) : r.readyList.push(function() {
                return e.call(window, [])
            })
        }
    }, r = _adr, a = _ate;
    extend(_ate, {
        plo: [],
        lad: function(e) {
            _ate.plo.push(e)
        }
    }), function(e) {
        if (e.pub = function() {
            return _euc((w.addthis_config_msg || {}).pubid || (w.addthis_config_msg || {}).username || (w.addthis_config_msg || {}).pub || (w.addthis_config || {}).pubid || (w.addthis_config || {}).username || w.addthis_pub || "")
        }, e.usu = function(e, t) {
            w.addthis_share || (w.addthis_share = {}), (t || e != addthis_share.url) && (addthis_share.imp_url = 0)
        }, e.ver = function() {
            return !_atc.noup && _atc.ver >= 152 ? 300 : _atc.ver
        }, e.rsu = function() {
            var t = document, a = t.title, i = t.location || {}, n = i.href, r = n.split("#"), s = r.pop();
            return _ate.track.ich(s) && (n = r.join("#")), e.ver() >= 250 && addthis_share.imp_url && n && n != w.addthis_share.url ? (w.addthis_share.url = w.addthis_url = n, w.addthis_share.title = w.addthis_title = a, 1) : 0
        }, e.igv = function(e, t) {
            w.addthis_config ? addthis_config.data_use_cookies===!1 && (_atc.xck = 1) : w.addthis_config = {
                username: w.addthis_pub
            }, w.addthis_share || (w.addthis_share = {}), addthis_share.url || (w.addthis_url || addthis_share.imp_url !== undefined || (addthis_share.imp_url = 1), addthis_share.url = (w.addthis_url || e || "").split("#{").shift()), addthis_share.title || (addthis_share.title = (w.addthis_title || t || "").split("#{").shift())
        }, !_atc.ost) {
            w.addthis_conf || (w.addthis_conf = {}), l && (l.href.indexOf("_at_test300")>-1 || l.href.indexOf("_addthis_upgrade_test")>-1) && (_atc.ver = 300);
            for (var t in addthis_conf)
                _atc[t] = addthis_conf[t];
            _atc.ost = 1
        }
    }(_ate, _ate.api, _ate), function(e) {
        var t = w.console, a = 0, i = 1, n=!t || "undefined" == typeof t.log, r = Array.prototype.slice, s = ["error", "warn", "info", "debug"], o = s.length;
        try {
            n || i&&!(l.hash.indexOf("atlog=1")>-1) || (a = 1)
        } catch (c) {}
        for (e.log = {
            level: a
        }; --o >= 0;)
            !function(a, i) {
                e.log[i] = n ? function() {} : function() {
                    if (!(e.log.level <= 0)) {
                        var a = r.call(arguments), n = (((arguments || {}).callee || {}).caller || {}).name, s = "function" == typeof t[i] ? t[i]: t.log;
                        if (n && a.unshift(n + ": "), a.unshift("[" + i + "]"), t && "function" == typeof s)
                            if (t.firebug)
                                s.apply(w, a);
                            else if ("function" == typeof s.apply)
                                try {
                                    s.apply(t, a)
                                } catch (o) {
                                    s("failed apply"), s(a)
                                } else 
                                    s(a);
                            else 
                                Function.prototype.bind || "object" != typeof t.log || Function.prototype.call.call(t.log, t, r.call(arguments))
                            }
                }
            }(o, s[o])
    }(_ate, _ate.api, _ate), function(e) {
        function t(e) {
            return i.fromKV(a.cookie, ";")[e]
        }
        var a = document, i = e.util;
        e.ckv = i.fromKV(a.cookie, ";"), e.cookie || (e.cookie = {}), e.cookie.rck = t
    }(_ate, _ate.api, _ate), function(e) {
        function t() {
            return c ? 1 : (r("xtc", 1), 1 == e.cookie.rck("xtc") && (c = 1), n("xtc", 1), c)
        }
        function a(t) {
            var a, i, n, r = t || _ate.dh || _ate.du || (_ate.dl ? _ate.dl.hostname : "");
            if (r.indexOf(".gov")>-1 || r.indexOf(".mil")>-1)
                return !0;
            i = "function" == typeof e.pub ? e.pub() : e.pub, n = ["usarmymedia", "govdelivery"];
            for (a in n)
                if (i == n[a])
                    return !0;
            return !1
        }
        function i(e) {
            _atc.xck || a(e) && (_atc.xck = 1)
        }
        function n(t, a) {
            s.cookie && (s.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/" + (a ? "; domain=" + (e.bro.msi ? "" : ".") + "addthis.com" : ""))
        }
        function r(t, a, n, r, s) {
            o.at_sub || i(), _atc.xck || r && (o.addthis_config || {}).data_use_cookies_ondomain===!1 || (o.addthis_config || {}).data_use_cookies===!1 || (s || (s = new Date, s.setYear(s.getFullYear() + 2)), document.cookie = t + "=" + a + (n ? "" : "; expires=" + s.toUTCString()) + "; path=/;" + (r ? "" : " domain=" + (e.bro.msi ? "" : ".") + "addthis.com"))
        }
        var s = document, o = window, c = 0;
        e.cookie || (e.cookie = {}), e.cookie.sck = r, e.cookie.kck = n, e.cookie.cww = t, e.cookie.gov = i, e.cookie.isgv = a
    }(_ate, _ate.api, _ate), function(e) {
        function t() {
            b = 0, m = {}, v = []
        }
        function a(e) {
            return e > h.high ? 3 : e > h.med ? 2 : 1
        }
        function i() {
            var e, t = [];
            r();
            for (e in m)
                t.push({
                    name: e,
                    score: a(m[e])
                });
            return t.sort(function(e, t) {
                return e.score > t.score ? 1 : - 1
            }), t
        }
        function n() {
            r();
            var e, t = {};
            for (e in m)
                t[e] = a(m[e]);
            return t
        }
        function r() {
            if (!b) {
                var t, a, i, n, r = (e.cookie.rck(g) || "").split(",");
                for (t = 0, ssc_len = r.length; ssc_len > t; t++)
                    a = r[t].split(";"), i = a.pop(), n = a.pop() || "", m[n] = i, v.push(n), i > y && (y = i, u = n);
                b = 1
            }
        }
        function s(e) {
            return m.hasOwnProperty(e)
        }
        function o() {
            for (var t, a=!1, i = (e.cookie.rck("sshs") || "").split(","); a===!1 && 0 != i.length;)
                t = i.pop(), m.hasOwnProperty(t) && m[t] == Math.min(m) && (a = t);
            a===!1 && (a = v.pop()), delete m[a]
        }
        function c() {
            var e, t = {}, a = [];
            for (e in m)
                m.hasOwnProperty(e) && m[e] / 2 >= 1 && (t[e] = parseInt(m[e] / 2), a.push(e));
            m = t, v = a
        }
        function d(t) {
            if (r(), "string" != typeof t)
                return !1;
            if (t = t.replace(/_[a-zA-Z0-9]*/i, ""), w===!1) {
                w=!0, v.length + 1 >= p&&!s(t) && o(), s(t) ? m[t]++ : m[t] = "1", m[t] >= _ && c();
                var a = l(m);
                e.cookie.sck(g, escape(a), !1, !f)
            }
        }
        function l(e) {
            var t, a, i = [];
            if ("object" != typeof e)
                return !1;
            for (a in e)
                a.length > 1 && i.push(a + ";" + e[a]);
            return t = i.join(",")
        }
        var u, h = {
            high: 4,
            med: 2
        }, f = document.location.href.indexOf("addthis.com")>-1, p = 10, _ = 20, g = (f ? "" : "__at") + "ssc", m = {}, w=!1, v = [], b = 0, y = 0;
        e.cookie || (e.cookie = {}), e.cookie.ssc = {
            reset: t,
            get: n,
            getServices: i,
            update: d
        }
    }(_ate, _ate.api, _ate), function(e) {
        function t(t, r) {
            var s = this, o = 0, c = 0, d=!!r, l = (d ? a : "") + t;
            keys = {}, this.toString = function() {
                var e = "";
                return _ate.util.each(keys, function(t, a) {
                    e += (e.length ? i : "") + _euc(t) + n + (a === undefined || null === a ? "" : _euc(a))
                }), e
            }, this.get = function() {
                return s.load(), keys
            }, this.load = function() {
                if (!o) {
                    var t = e.cookie.rck(l) || "", a = "";
                    if (t) {
                        var r = t.split(i);
                        _ate.util.each(r, function(e, t) {
                            a = t.split(n), 2 == a.length && (c++, keys[_duc(a[0])] = _duc(a[1]))
                        })
                    }
                    o = 1
                }
                return keys
            }, this.save = function() {
                this.load(), c ? e.cookie.sck(l, s.toString(), d, d) : e.cookie.kck(l)
            }, this.add = function(e, t) {
                s.load(), c++, keys[e] = t, s.save()
            }, this.remove = function(e) {
                s.load(), keys[e] && (delete keys[e], c--), s.save()
            }, this.reset = function() {
                keys = {}, c = 0, s.save()
            }
        }
        var a = (new Date, "__at"), i = "|", n = "/";
        e.cookie = e.cookie || {}, e.cookie.KV = t
    }(_ate, _ate.api, _ate), function(e) {
        function t() {
            return u.join(d)
        }
        function a() {
            if (!l) {
                var t = e.cookie.rck(c) || "";
                t && (u = _duc(t).split(d)), l = 1
            }
        }
        function i() {
            a(), u.length && e.cookie.sck(c, _euc(t()), 0, !0)
        }
        function n() {
            return a(), u
        }
        function r(e) {
            a(), "string" == typeof e && (e = [e]);
            for (var t = 0; t < u.length; t++)
                for (var n = 0; n < e.length; n++)
                    if (u[t] == e[n])
                        return;
            for (var n = 0; n < e.length; n++)
                u.push(e[n]);
            i()
        }
        function s(e) {
            for (var t = 0; t < u.length; t++)
                if (u[t] == e) {
                    u.splice(t, 1);
                    break
                }
            i()
        }
        function o() {
            u = []
        }
        var c = (new Date, "__attag"), d = ",", l = 0, u = [];
        e.cookie = e.cookie || {}, e.cookie.tag = {
            reset: o,
            add: r,
            remove: s,
            get: n,
            toKV: t
        }
    }(_ate, _ate.api, _ate), function(e) {
        function t() {
            return b.slice( - 5).join(g)
        }
        function a(t) {
            if (!m || t) {
                var a = e.cookie.rck(p) || "";
                a && (b = _duc(a).split(g)), m = 1
            }
        }
        function i(e) {
            var t, a, i, n = new Date(e.getFullYear(), 0, 1);
            return t = n.getDay(), t = t >= 0 ? t : t + 7, a = Math.floor((e.getTime() - n.getTime() - 6e4 * (e.getTimezoneOffset() - n.getTimezoneOffset())) / 864e5) + 1, 4 > t ? (i = Math.floor((a + t - 1) / 7) + 1, i > 52 && (nYear = new Date(e.getFullYear() + 1, 0, 1), nday = nYear.getDay(e), nday = nday >= 0 ? nday : nday + 7, i = 4 > nday ? 1 : 53)) : i = Math.floor((a + t - 1) / 7), i
        }
        function n(e, t, a) {
            for (var i = 0; t > i; i++) {
                var n = a + i;
                n >= 51 && (n = 1), e.push("0" + _ + n)
            }
        }
        function r() {
            if (!w) {
                var e = i(f);
                a(), s(e), w = 1
            }
        }
        function s(e) {
            var t, a;
            b.length ? (t = b[b.length - 1], a = parseInt(t.split(_).pop(), 10), a == e ? b[b.length - 1] = parseInt(t.split(_).shift(), 10) + 1 + _ + e : a + 1 == e || a >= 51 ? b.push("1" + _ + e) : e > a ? (n(b, e - a - 1, a + 1), b.push("1" + _ + e)) : a > e && (b = [], b.push("1" + _ + e)), b.length > 5 && b.slice( - 5)) : b.push("1" + _ + e)
        }
        function o(e) {
            f = e
        }
        function c(i) {
            a(), b.length && e.cookie.sck(p, _euc(t()), 0, i)
        }
        function d(e) {
            a(), r(), c(e)
        }
        function l() {
            var e = [];
            a();
            for (var t = 0; t < b.length; t++)
                e.push(b[t].split(_).shift());
            return e.slice( - 5)
        }
        function u() {
            for (var e = l(), t = 0, a = 0; a < e.length; a++)
                t += parseInt(e[a], 10) || 0;
            return t > v.high ? 3 : t > v.med ? 2 : t > w ? 1 : 0
        }
        function h() {
            m = 0, w = 0, b = []
        }
        var f = new Date, p = ( - 1 == document.location.href.indexOf(_atr) ? "__at" : "") + "uvc", _ = "|", g = ",", m = 0, w = 0, v = {
            high: 250,
            med: 75
        }, b = [];
        e.cookie = e.cookie || {}, e.cookie.view = {
            _sd: o,
            _inc: s,
            _name: p,
            reset: h,
            update: d,
            get: l,
            cla: u,
            toKV: t
        }
    }(_ate, _ate.api, _ate), function(e, t) {
        function a(t) {
            var a;
            return e.util.isNumber(t) && (a = t.toString(16)), (!a || a.indexOf("NaN")>-1 || a.length > 3 || a === t) && (a = ""), ("000" + a).slice( - 3)
        }
        function i(t) {
            var a;
            return e.util.isString(t) && (a = parseInt(t, 16)), (!a || a !== a || 0 > a) && (a = 0), a
        }
        function n() {
            return (new Date).getTime()
        }
        function r() {
            return e.util.cuid()
        }
        function s() {
            var e = new Date, t = new Date(n() + 18e5);
            return e.getHours() > 0 && 0 === t.getHours()
        }
        function o() {
            return new Date(new Date((new Date).setHours(24, 0, 0, 0)).setSeconds( - 1))
        }
        function c() {
            return s() ? o() : new Date(n() + 18e5)
        }
        function d(t) {
            if (!w || t) {
                var a = e.cookie.rck, i = a(y) || "";
                i ? (v = h(i), v.counter += 1) : v = {
                    id: r(),
                    counter: 0,
                    audienceRules: null
                }, w = 1
            }
        }
        function l() {
            d(), e.cookie.sck(y, f(), !1, !0, c())
        }
        function u() {
            l()
        }
        function h(t) {
            var a = t.substr(0, 16), n = t.substr(16, 19), r = t.substr(19);
            if (r)
                try {
                    b = JSON.parse(decodeURIComponent(r))
            } catch (s) {
                e.log.error(s), b = null
            } else 
                b = null;
            return {
                id: a,
                counter: i(n),
                audienceRules: b
            }
        }
        function f() {
            var e;
            return e = b ? encodeURIComponent(JSON.stringify(b)) : "", v.id + a(v.counter) + e
        }
        function p() {
            return d(), 0 === v.counter
        }
        function _() {
            return d(), v.id
        }
        function g(e, t) {
            b = b || {}, b[e] = t, l()
        }
        function m(e) {
            return d(), b ? b[e] : null
        }
        var w, v, b, y = ( - 1 === window.document.location.href.indexOf(t) ? "__at" : "") + "uvs";
        e.cookie = e.cookie || {}, e.cookie.visit = {
            _name: y,
            update: u,
            isNew: p,
            addAudienceRule: g,
            getAudienceRule: m,
            getID: _
        }
    }(window._ate, window._atr), function(e) {
        function t(e, t, a, i, n, r) {
            var s = _ate.util.scb("sc", e, i, n, r);
            _ate.ajs(e + "&callback=" + s, 1)
        }
        function a(e, t, a, i, s) {
            t = _euc(t).replace(/[0-3][A-Z]|[^a-zA-Z0-9]/g, "").toLowerCase(), n[t] = n[t] || 0;
            var o = n[t]++, c = e + "_" + t + (s ? "" : o);
            return _ate.cbs[c] || (_ate.cbs[c] = function() {
                r[c] && clearTimeout(r[c]), a.apply(this, arguments)
            }), _ate.cbs["time_" + c] = (new Date).getTime(), i && (clearTimeout(r[c]), r[c] = setTimeout(i, 1e4)), "_ate.cbs." + _euc(c)
        }
        var i = e.util, n = {}, r = {};
        e.cbs || (e.cbs = {}), i.scb = a, i.msc = t
    }(_ate, _ate.api, _ate), function(e) {
        function t(e, t) {
            var a = 291;
            if (e)
                for (var i = 0; i < e.length; i++)
                    a = a * (e.charCodeAt(i) + i) + 3 & 1048575;
            return (16777215 & a).toString(t || 32)
        }
        function a(e, t) {
            var a, r = (new Date).getTime();
            if (t = t || {}, t.cacheDuration = t.cacheDuration !== undefined ? t.cacheDuration : 3e3, !e)
                return !1;
            if (e.scrollCheckID) {
                if (a = e.scrollCheckID, !(r - i[a] > t.cacheDuration))
                    return n[a];
                i[a] = r
            } else 
                e.scrollCheckID = i.length, i[i.length] = r, a = e.scrollCheckID;
            var s = e.getBoundingClientRect(), o = {
                top: 0,
                left: 0,
                bottom: window.innerHeight || document.documentElement.clientHeight,
                right: window.innerWidth || document.documentElement.clientWidth
            }, c = 0, d = Math.max(s.top, o.top), l = Math.min(s.bottom, o.bottom), u = Math.max(s.left, o.left), h = Math.min(s.right, o.right), f = (s.right - s.left) * (s.bottom - s.top);
            return c = l > d && h > u ? (l - d) * (h - u) : 0, n[a] = c / f, n[a]
        }
        var i = [], n = {};
        e.mun = t, e.getVisibility = a
    }(_ate, _ate.api, _ate), function(e) {
        function t(e, t) {
            var a, i, n, r, s, o, c, d;
            for (a = 3 & e.length, i = e.length - a, n = t, s = 3432918353, o = 461845907, d = 0; i > d;)
                c = 255 & e.charCodeAt(d) | (255 & e.charCodeAt(++d))<<8 | (255 & e.charCodeAt(++d))<<16 | (255 & e.charCodeAt(++d))<<24, ++d, c = (65535 & c) * s + (((c>>>16) * s & 65535)<<16) & 4294967295, c = c<<15 | c>>>17, c = (65535 & c) * o + (((c>>>16) * o & 65535)<<16) & 4294967295, n^=c, n = n<<13 | n>>>19, r = 5 * (65535 & n) + ((5 * (n>>>16) & 65535)<<16) & 4294967295, n = (65535 & r) + 27492 + (((r>>>16) + 58964 & 65535)<<16);
            switch (c = 0, a) {
            case 3:
                c^=(255 & e.charCodeAt(d + 2))<<16;
            case 2:
                c^=(255 & e.charCodeAt(d + 1))<<8;
            case 1:
                c^=255 & e.charCodeAt(d), c = (65535 & c) * s + (((c>>>16) * s & 65535)<<16) & 4294967295, c = c<<15 | c>>>17, c = (65535 & c) * o + (((c>>>16) * o & 65535)<<16) & 4294967295, n^=c
            }
            return n^=e.length, n^=n>>>16, n = 2246822507 * (65535 & n) + ((2246822507 * (n>>>16) & 65535)<<16) & 4294967295, n^=n>>>13, n = 3266489909 * (65535 & n) + ((3266489909 * (n>>>16) & 65535)<<16) & 4294967295, n^=n>>>16, n>>>0
        }
        e.math || (e.math = {}), e.math.murmur32 = t
    }(_ate, _ate.api, _ate), function(e) {
        function t() {
            return (d / 1e3 & c).toString(16) + ("00000000" + Math.floor(Math.random() * (c + 1)).toString(16)).slice( - 8)
        }
        function a(e) {
            return r(e) ? new Date(1e3 * parseInt(e.substr(0, 8), 16)) : new Date
        }
        function i() {
            var e = a();
            return e.getTime() - 864e5 > (new Date).getTime()
        }
        function n(e, t) {
            var i = a(e);
            return (new Date).getTime() - i.getTime() > 1e3 * t
        }
        function r(e) {
            return e && e.match(/^[0-9a-f]{16}$/)&&!i(e)
        }
        function s(e) {
            return r(e) && e.match(/^0{16}$/)
        }
        var o = e.util, c = 4294967295, d = (new Date).getTime();
        o.cuid = t, o.ivc = r, o.iooc = s, o.ioc = n
    }(_ate, _ate.api, _ate), function(e) {
        function t(e) {
            return e ? (e.indexOf("%")>-1 && (e = _duc(e)), e.indexOf(",")>-1 && (e = e.split(",")[1]), e = _ate.util.atob ? _ate.util.atob(e) : "function" == typeof window.atob ? window.atob(e) : "") : ""
        }
        function a(e) {
            var t, a, i = {};
            return e = e.toUpperCase(), i.zip = e.substring(0, 5), i.continent = e.substring(5, 7), i.country = e.substring(7, 9), i.region = e.substring(9, 11), t = e.substring(11, 15), "0000" != t && (i.lat = (parseInt(t) / 10 - 180).toFixed(1)), a = e.substring(15, 19), "0000" != a && (i.lon = (parseInt(a) / 10 - 180).toFixed(1)), i.dma = e.substring(19, 22), i.msa = e.substring(22, 26), i.network_type = e.substring(26, 27), i.throughput = e.substring(27, 28), i
        }
        function i(e, t) {
            var a, i;
            for (e = e.toUpperCase().split(","), a = 0; a < e.length; a++)
                if (i = e[a].replace(/ /g, ""), t.zip == i || t.continent == i || t.country == i || t.region == i)
                    return 1;
            return 0
        }
        e.util = e.util || {}, e.util.geo = {
            dec: t,
            parse: a,
            isin: i
        }
    }(_ate, _ate.api, _ate), function(e) {
        function t(e) {
            return e.split("//").pop().split("/").shift().split("#").shift().split("?").shift().split(".").slice( - 2).join(".")
        }
        e.util = e.util || {}, e.util.host = t
    }(_ate, _ate.api, _ate), function(e) {
        function t(e, t) {
            0 == c.length && (c = d.gn("script"));
            for (var a = 0; a < c.length; a++) {
                var n = c[a].src || "";
                n && (n = _ate.mun(n)), (c[a].src || "").indexOf(t || "addthis_widget.js")>-1&&!l[n] && (l[n] = 1, e(i(c[a].src)))
            }
        }
        function a(e) {
            var t = _ate.mun((e.adurl || "") + (e.adev || ""));
            if (!l[t]) {
                if (l[t] = 1, e.adurl && "string" == typeof e.adurl && (_ate.pixu = e.adurl, u = 1), e.adev && "string" == typeof e.adev) {
                    var a = e.adev;
                    try {
                        a = _duc(a)
                    } catch (i) {}
                    a = a.split(";"), u = 1, _ate.ed.addEventListener("addthis-internal.data.uid", function() {
                        for (var e = 0; e < a.length; e++) {
                            for (var t = a[e].split(","), i = {}, n = 0; n < t.length; n++) {
                                var r = t[n].split("=");
                                i[r[0]] = r[1]
                            }
                            w.addthis && w.addthis.ad.event(i)
                        }
                    })
                }
                return u
            }
        }
        function i(t, a) {
            var i = t.indexOf("#")>-1&&!a ? t.replace(/^[^\#]+\#?|^\#?/, ""): t.replace(/^[^\?]+\??|^\??/, ""), n = e.util.fromKV(i);
            return n
        }
        function n() {
            var e = d.getElementsByTagName("script");
            return e[e.length - 1]
        }
        function r(e) {
            if (o[e])
                return o[e];
            for (var t = document.gn("script"), a = 0; a < t.length; a++)
                if (o[t[a].src.split(".").slice( - 2).shift()] = t[a], (t[a].src || "").indexOf(e)>-1)
                    return t[a];
            return null
        }
        function s(e) {
            var t = document.gn("script"), a = t.length, n = t[a - 1], r = i(n.src);
            if (e || n.src&&-1 == n.src.indexOf("addthis"))
                for (var s = 0; a > s; s++)
                    if ((t[s].src || "").indexOf(e || "addthis.com")>-1) {
                        o[t[s].src.split(".").slice( - 2).shift()] = t[s], r = i(t[s].src);
                        break
                    }
            return r
        }
        var o = {}, c = [], l = {}, u = 0;
        e.util || (e.util = {}), e.util.gsp = s, e.util.gst = r, e.util.gtt = n, e.util.ghp = i, e.util.pae = a, e.util.pas = t
    }(_ate, _ate.api, _ate), function(e, t) {
        function a(e) {
            var t, a, i, n, r, s = "", c = 0;
            if (/[0-9a-fA-F]+/.test(e))
                for (; c < e.length;)
                    t = parseInt(e.charAt(c++), 16), a = parseInt(e.charAt(c++), 16), i = parseInt(e.charAt(c++), 16), n = t<<2 | (isNaN(i) ? 3 & a : a>>2), r = (3 & a)<<4 | i, s += o.charAt(n) + (isNaN(i) ? "" : o.charAt(r));
            return s
        }
        function i(e) {
            for (var t, a, i, n, r, s = "", c = 0; c < e.length;)
                n = o.indexOf(e.charAt(c++)), r = c >= e.length ? 0 / 0 : o.indexOf(e.charAt(c++)), t = n>>2, a = isNaN(r) ? 3 & n : (3 & n)<<2 | r>>4, i = 15 & r, s += t.toString(16) + a.toString(16) + (isNaN(r) ? "" : i.toString(16));
            return s
        }
        function n(e, t) {
            for (var a = 0, i = 0; i < e.length; i++)
                a*=t, a += r(e.charAt(i));
            return a
        }
        function r(e) {
            return 1 !== e.length && t.error("cannot call charToDecimal on multiple characters"), c.indexOf(e)
        }
        var s = e.util, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
        s.hbtoa = a, s.atohb = i, s.baseToDecimal = n
    }(_ate, _ate.api, _ate), function(e) {
        function t(e) {
            return "function" == typeof document.querySelectorAll ? document.querySelectorAll(e) || [] : []
        }
        function a(e) {
            var t, a = (e || {}).childNodes, i = e.textContent || e.innerText || "", n = /^\s*$/;
            if (!i) {
                if (!a)
                    return "";
                for (t = 0; t < a.length; t++)
                    if (e = a[t], "#text" === e.nodeName&&!n.test(e.nodeValue)) {
                        i = e.nodeValue;
                        break
                    }
            }
            return i
        }
        function i(e) {
            if ("string" == typeof e) {
                var t = e.substr(0, 1);
                "#" == t ? e = document.getElementById(e.substr(1)) : "." == t && (e = d(body, "*", e.substr(1)))
            }
            return e ? e instanceof Array || (e = [e]) : e = [], e
        }
        function n(e, t) {
            if (e = (e || {}).parentNode, !t ||!e)
                return e;
            if (0 === t.indexOf("."))
                for (t = t.substr(1); e.parentNode && (e.className || "").indexOf(t) < 0;)
                    e = e.parentNode;
            else if (0 === t.indexOf("#"))
                for (t = t.substr(1); e.parentNode && (e.id || "").indexOf(t) < 0;)
                    e = e.parentNode;
            return e
        }
        function r(e, t, a, i, n) {
            t = t.toUpperCase();
            var r, s, o = document, d = e == body && c[t] ? c[t]: (e || body || o.body).getElementsByTagName(t), l = [];
            if (e == body && (c[t] = d), n)
                for (r = 0; r < d.length; r++)
                    s = d[r], (s.className || "").indexOf(a)>-1 && l.push(s);
            else {
                a = a.replace(/\-/g, "\\-");
                var u = new RegExp("\\b" + a + (i ? "\\w*" : "") + "\\b");
                for (r = 0; r < d.length; r++)
                    s = d[r], u.test(s.className) && l.push(s)
            }
            return l
        }
        function s(e, t, a) {
            e = e || document, "*" == t && (t = null);
            for (var i, n = document.getElementsByClassName ? function(e) {
                return e.getElementsByClassName(a)
            } : document.querySelectorAll ? function() {
                return document.querySelectorAll(a)
            } : function() {
                return []
            }, r = n(e, a), s = t ? new RegExp("\\b" + t + "\\b", "i") : null, o = [], c = 0, d = r.length; d > c; c += 1)
                i = r[c], (!s || s.test(i.nodeName)) && o.push(i);
            return o
        }
        var o = e.util, c = {}, d = document.getElementsByClassName && "function" == typeof document.getElementsByClassName && (!_ate.bro.msi || document.documentMode >= 9) || document.querySelectorAll && "function" == typeof document.querySelectorAll && (!_ate.bro.msi || document.documentMode >= 8) ? s: r;
        o.gebcn = r, o.select = i, o.parent = n, o.qsa = t, o.gettxt = a
    }(_ate, _ate.api, _ate);
    var csbw = _ate.bro.msi ? 20: undefined, makeParams = function(e) {
        e = e.slice(1).split("&");
        var t, a = {};
        return u.each(e, function(e, i) {
            t = i.split("="), t.length > 1 && (a[t[0]] = t[1])
        }), a
    }, params = A.params = makeParams(l.search);
    if (u.misc.makeParams = makeParams, "at_tags"in params && (params.at_tag = params.at_tags), "at_tag"in params && addthis.user.ready(function() {
        _ate.cookie.tag.add(addthis.params.at_tag)
    }), "at_welcome"in params)
        if (_duc(params.at_welcome).match(/\{/))
            try {
                addthis.bar.initialize(_duc(params.at_welcome))
    } catch (e) {} else 
        addthis.welcome_rule = _duc(params.at_welcome);
    addthis.tip = function(e) {
        if ("object" == typeof e && "target"in e && "text"in e) {
            var t = ".addthis.tip{position:absolute;z-index:20;} .addthis.tip .tip-body {position:relative;border:1px solid #FFADAD;width:240px;box-shadow: 0px 0px 3px 1px #999;top:20px;} .addthis.tip .tip-body p {margin:1.5em;font-size:13px;font-family:arial;z-index:10;} .addthis.tip .tip-point {position:absolute;width:38px;height:20px;top:1px;margin:auto;width:240px;background-image:url('point.png');background-repeat:no-repeat;background-position:center; z-index:11;}";
            if (t) {
                var a = {
                    style: {
                        type: "text/css"
                    }
                };
                _ate.bro.ie || (a.style.html = t);
                var i = _ate.util.json2html(a);
                document.getElementsByTagName("head")[0].appendChild(i), _ate.bro.ie && (i.styleSheet.cssText = t)
            }
            var n = _ate.util.json2html({
                "div.addthis.tip": [{
                    "div.tip-point": ""
                }, {
                    "div.tip-body": {
                        p: e.text
                    }
                }
                ]
            });
            return document.getElementsByTagName("body")[0].appendChild(n), target = e.target, n.style.left = target.offsetLeft + target.offsetWidth / 2 - n.offsetWidth / 2 + "px", n.style.top = target.offsetTop + target.offsetHeight + "px", n
        }
    }, function(e) {
        e.ad || (e.ad = {}), _ate.extend(e.ad, {
            type: {
                NOOP: - 1,
                CLICK: 50,
                VIEW: 100,
                POP: 200,
                COPY: 250,
                SHARE: 300,
                FOLLOW: 350,
                COMMENT: 375,
                UID: 1e3,
                CUSTOM: 2e3,
                ENGAGEMENT: 2100
            }
        })
    }(_ate, _ate.api, _ate), function(e) {
        function t() {
            if (!_ate.uls)
                return !1;
            var e = l + Math.floor(100 * Math.random());
            try {
                return localStorage.setItem(e, 1), localStorage.removeItem(e), _ate.uls=!0
            } catch (t) {
                return _ate.uls=!1
            }
        }
        function a(e) {
            return u ? window.localStorage.getItem(l + e) : void 0
        }
        function i(e, t) {
            if (u) {
                var a = l + e;
                try {
                    window.localStorage[a] = t
                } catch (i) {
                    if ("QUOTA_EXCEEDED_ERR" === i.name) {
                        o();
                        try {
                            window.localStorage[a] = t
                        } catch (i) {}
                    }
                }
            }
        }
        function n(e) {
            e && "function" == typeof e && _ate.util.each(window.localStorage, function(t) {
                var a = window.localStorage.key(t), i = window.localStorage.getItem(a);
                e(a, i)
            })
        }
        function r(e) {
            var t = {};
            if (u)
                return n(function(a, i) {
                    a && a.indexOf && 0 === a.indexOf(l + (e || "")) && (t[a] = i)
                }), t
        }
        function s(e) {
            var t = 0;
            return n(function(a) {
                a && a.indexOf && 0 === a.indexOf(l + (e || "")) && t++
            }), t > 0
        }
        function o() {
            n(function(e) {
                0 === e.indexOf(l) && window.localStorage.removeItem(e)
            })
        }
        function c(e) {
            var t = r();
            _ate.util.each(t, function(t) {
                0 === t.indexOf(l + e) && window.localStorage.removeItem(t)
            })
        }
        function d(e) {
            if (u) {
                window.localStorage.removeItem(e)
            }
        }
        var l = "_at.";
        e.data = e.data || {}, e.data.storage = {
            all: r,
            clear: o,
            add: i,
            get: a,
            remove: d,
            exists: s,
            preRemove: c
        };
        var u = t()
    }(_ate, _ate.api, _ate), function(e) {
        function t(e, t, s, o) {
            var c;
            "number" != typeof e && (c = e, e = 32 * c.length), this.m = e, this.k = t;
            var d = Math.ceil(e / 32), l =- 1;
            if (r) {
                var u = 1<<Math.ceil(Math.log(Math.ceil(Math.log(e) / Math.LN2 / 8)) / Math.LN2), h = 1 === u ? Uint8Array: 2 === u ? Uint16Array: Uint32Array, f = new ArrayBuffer(u * t), p = this.buckets = new Int32Array(d);
                if (c)
                    for (; ++l < d;)
                        p[l] = c[l];
                else if (o)
                    for (l =- 1; ++l < d;)
                        p[l] = o[l];
                if (this._locations = new h(f), s)
                    for (l = 0; l < s.length; l++)
                        this._locations[l] = s[l]
            } else {
                var p = this.buckets = o || [];
                if (c)
                    for (; ++l < d;)
                        p[l] = c[l];
                else 
                    for (; ++l < d;)
                        p[l] = 0;
                this._locations = s || []
            }
            this.locations = function(e) {
                for (var t = this.k, a = this.m, r = this._locations, s = i(e), o = n(s), c =- 1, d = s%a; ++c < t;)
                    r[c] = 0 > d ? d + a : d, d = (d + o)%a;
                return r
            }, this.add = function(e) {
                for (var t = this.locations(e + ""), a =- 1, i = this.k, n = this.buckets; ++a < i;)
                    n[Math.floor(t[a] / 32)]|=1<<t[a]%32
            }, this.test = function(e) {
                for (var t, a = this.locations(e + ""), i =- 1, n = this.k, r = this.buckets; ++i < n;)
                    if (t = a[i], 0 === (r[Math.floor(t / 32)] & 1<<t%32))
                        return !1;
                return !0
            }, this.size = function() {
                for (var e = this.buckets, t = 0, i = 0, n = e.length; n > i; ++i)
                    t += a(e[i]);
                return - this.m * Math.log(1 - t / this.m) / this.k
            }
        }
        function a(e) {
            return e -= e>>1 & 1431655765, e = (858993459 & e) + (e>>2 & 858993459), 16843009 * (e + (e>>4) & 252645135)>>24
        }
        function i(e) {
            for (var t, a, i = e.length, n = 2166136261, r =- 1; ++r < i;)
                t = e.charCodeAt(r), (a = 4278190080 & t) && (n^=a>>24, n += (n<<1) + (n<<4) + (n<<7) + (n<<8) + (n<<24)), (a = 16711680 & t) && (n^=a>>16, n += (n<<1) + (n<<4) + (n<<7) + (n<<8) + (n<<24)), (a = 65280 & t) && (n^=a>>8, n += (n<<1) + (n<<4) + (n<<7) + (n<<8) + (n<<24)), n^=255 & t, n += (n<<1) + (n<<4) + (n<<7) + (n<<8) + (n<<24);
            return n += n<<13, n^=n>>7, n += n<<3, n^=n>>17, n += n<<5, 4294967295 & n
        }
        function n(e) {
            return e += (e<<1) + (e<<4) + (e<<7) + (e<<8) + (e<<24), e += e<<13, e^=e>>7, e += e<<3, e^=e>>17, e += e<<5, 4294967295 & e
        }
        e.data = e.data || {}, e.data.bloom = {
            filter: t
        };
        var r = (e.data.storage, "undefined" != typeof ArrayBuffer)
    }(_ate, _ate.api, _ate), function(e) {
        function t(e, t, n) {
            function o(e) {
                return e = (e || "").split(".").pop(), 4 != e.length ? {} : {
                    m: parseInt(e.substr(0, 2)),
                    d: parseInt(e.substr(2, 4))
                }
            }
            var c, d = {};
            return e ? (this.name = e, this.get = function(e) {
                return _ate.ich ? null : d[e] = i(e)
            }, this.isEmpty = function() {
                return !r.exists(this.name)
            }, this.add = function(e) {
                return d[e] || (this.get(e), this.prune()), d[e]
            }, this.contains = function(e) {
                return !!r.get(this.name + "." + e)
            }, this.prune = function(e) {
                r.remove(this.name);
                var t = this.getCurrentBlooms(), e = Math.min(e || s, 31), a = [], i = o(this.generateName()), n = i.m, c = i.d;
                for (_ate.util.each(t, function(t) {
                    if (i = o(t), i.m) {
                        var s = i.m, d = i.d;
                        s > n || s == n && c - e > d || n - 1 > s || s == n - 1 && (c > e || 31 - e > d) ? r.remove(t) : a.push(t)
                    }
                }), a.sort(function(e, t) {
                    return parseInt(e) < parseInt(t) ? 1 : - 1
                }); a.length > 3;)
                    r.remove(a.pop())
            }, this.testAll = function(e) {
                var t=!1;
                if (!c) {
                    var a = this.getCurrentBlooms(), i = this;
                    _ate.util.each(a, function(e) {
                        d[e] || (d[e] = i.get(e))
                    }), c = 1
                }
                return _ate.util.each(d, function(a, i) {
                    return i && i.test(e) ? (t=!0, !1) : void 0
                }), t
            }, this.generateName = function() {
                return (n || a).call(this, this.name)
            }, void(this.getCurrentBlooms = function() {
                return _ate.ich ? [] : r.all(this.name)
            })) : null
        }
        function a(e) {
            var t = _atc._date || new Date, a = t.getDate(), i = t.getMonth() + 1;
            return 10 > i && (i = "0" + i), 10 > a && (a = "0" + a), e + "." + (i + "" + a)
        }
        function i(e, t, a, i, s) {
            function d(e) {
                if (_ate.uls) {
                    var t = JSON.parse(r.get(e) || "{}"), a = parseInt(t.m) || o, i = parseInt(t.k) || c, s = t.l, d = t.b;
                    return new n(a, i, s, d)
                }
                return null
            }
            var l;
            return e = e || "pbf", l = t && a && i && s ? new n(t, a, i, s) : t && a ? new n(t, a) : _ate.uls ? d(e) : new n(o, c), l.name = e, l.save = function() {
                if (_ate.uls) {
                    var e = {
                        m: l.m,
                        k: l.k,
                        l: l._locations,
                        b: l.buckets
                    };
                    r.add(l.name, JSON.stringify(e))
                }
            }, l.remove = function() {
                r.preRemove(l.name)
            }, l
        }
        var n = e.data.bloom.filter, r = e.data.storage, s = 3, o = 600, c = 2;
        e.data.bloom.pfilter = i, e.data.bloom.library = t
    }(_ate, _ate.api, _ate), function(e) {
        var t, a = e, i = (new Date).getTime(), n = function() {
            return Math.floor(4294967295 * Math.random()).toString(36)
        }, r = function() {
            return Math.floor(((new Date).getTime() - i) / 100).toString(16)
        }, s = 0, o = function(e) {
            return 0 === s && (a.sid = s = e || a.util.cuid()), s
        }, c = null, d = function(e, t, a) {
            null !== c && clearTimeout(c), e && (c = setTimeout(function() {
                t(!!a)
            }, _ate.wait))
        }, l = function(e, t) {
            return _euc(e) + "=" + _euc(t) + ";" + r()
        }, u = 1, h = function(e, t) {
            "object" == typeof e && (e = _ate.util.toKV(e));
            var a = (e || "").split("?"), i = a.shift(), n = (a.pop() || "").split("&");
            return t(i, n)
        }, f = function(e, t, a, i) {
            return t || (t = {}), t.remove || (t.remove = []), t.remove.push && (t.remove.push("sms_ss"), t.remove.push("at_xt"), t.remove.push("at_pco"), t.remove.push("fb_ref"), t.remove.push("fb_source")), t.remove && (e = g(e, t.remove)), t.clean && (e = v(e)), t.defrag && (e = w(e)), t.add && (e = p(e, t.add, a, i)), e
        }, p = function(e, t, a, i) {
            var n, r = {};
            if (t) {
                for (n in t)
                    e.indexOf(n + "=")>-1 || (r[n] = _(t[n], e, a, i));
                t = _ate.util.toKV(r)
            }
            return e + (t.length ? (e.indexOf("?")>-1 ? "&" : "?") + t : "")
        }, _ = function(e, t, a, i) {
            return e.replace(/\{\{service\}\}/g, _euc(i || "addthis-service-code")).replace(/\{\{code\}\}/g, _euc(i || "addthis-service-code")).replace(/\{\{title\}\}/g, _euc((a || addthis_share).title)).replace(/\{\{url\}\}/g, _euc(t))
        }, g = function(e, t) {
            var a, i = {}, n = t || [];
            for (a = 0; a < n.length; a++)
                i[n[a]] = 1;
            return h(e, function(e, t) {
                var a, n, r = [];
                if (t) {
                    for (a in t)
                        if ("string" == typeof t[a])
                            if (n = (t[a] || "").split("="), 2 != n.length && t[a])
                                r.push(t[a]);
                            else {
                                if (i[n[0]])
                                    continue;
                                    t[a] && r.push(t[a])
                            }
                    e += r.length ? "?" + r.join("&") : ""
                }
                return e
            })
        }, m = function(e) {
            if (e = e || "", _ate.bro.msi && e instanceof Object&&!e.length) {
                var t = "";
                _ate.util.each(e, function(e, a) {
                    t ? t += "&" + e + "=" + a : t = e + "=" + a
                }), e = t
            }
            e.length || (e = "");
            var a = e.split("#").pop().split(",").shift().split("=").pop();
            return _ate.util.ivc(a) ? e.split("#").pop().split(",") : [""]
        }, w = function(e) {
            e.length || (e = "");
            var t = m(e).shift().split("=").pop();
            return _ate.util.ivc(t) || e.indexOf("#at_pco=")>-1 ? e.split("#").shift() : (t = e.split("#").slice(1).join("#").split(";").shift(), 3 == t.split(".").length && (t = t.split(".").slice(0, - 1).join(".")), 12 == t.length && "." == t.substr(0, 1) && /[a-zA-Z0-9\-_]{11}/.test(t.substr(1)) ? e.split("#").shift() : e)
        }, v = function(e) {
            return e.length || (e = ""), h(e, function(e, t) {
                var a, i, n = e.indexOf(";jsessionid"), r = [];
                if (n>-1 && (e = e.substr(0, n)), t) {
                    for (a in t)
                        if ("string" == typeof t[a]) {
                            if (i = (t[a] || "").split("="), 2 == i.length && (0 === i[0].indexOf("utm_") || "gclid" == i[0] || "sms_ss" == i[0] || "at_xt" == i[0] || "fb_ref" == i[0] || "fb_source" == i[0]))
                                continue;
                                t[a] && r.push(t[a])
                        }
                    e += r.length ? "?" + r.join("&") : ""
                }
                return e
            })
        }, b = function() {
            var e = ("function" == typeof(a.pub || "") ? a.pub() : a.pub) || "unknown";
            return "AT-" + e + "/-/" + a.ab + "/" + o() + "/" + u++ + (null !== a.uid ? "/" + a.uid : "")
        }, y = function(e) {
            e = e.split("/");
            var t = (e.shift(), e.shift(), e.shift()), i = e.shift(), n = e.shift(), r = e.shift();
            t && (a.ab = a.ab), i && (a.sid = s = i), n && (u = n), r && (a.uid = r)
        }, k = function(e) {
            "string" == typeof e && (e = {
                url: e
            });
            var t = e.url, i = e.params, n = e.js, r = e.rand, s = e.close, o = t + (i ? "?" + (r ? _ate.track.ran() + (2 == r ? "&colc=" + (new Date).getTime() : "") : "") + "&" + i : "");
            if (n)
                _ate.ajs(o, 1);
            else if (s) {
                var c = document, d = c.createElement("iframe");
                d.id = "_atf", d.src = o, _ate.opp(d.style), c.body.appendChild(d), d = c.getElementById("_atf")
            } else {
                var l = new Image;
                _ate.imgz.push(l), l.src = o
            }
            a.log.debug("u=" + o)
        }, x = function(e) {
            return t ? t : t = _ate.ad.getPixelatorParameters(e, 1)
        }, N = function(e) {
            var t = a.ljep || "//m.addthis.com/live/red_lojson/", i = 2, n = "100eng", r = _ate.getPixelatorParameters(n, null, "ev=" + e), s = (x(a.ad.type.ENGAGEMENT) || {})._str || "";
            k({
                url: t + n + ".json",
                params: r + "&callback=_ate.track.her" + s,
                rand: i,
                js: 1
            })
        }, O = function() {};
        _ate.track || (_ate.track = {}), e.util.extend(_ate.track, {
            fcv: l,
            ran: n,
            her: O,
            rup: g,
            aup: p,
            cof: w,
            gof: m,
            clu: v,
            mgu: f,
            ssid: o,
            sta: b,
            uns: y,
            lpx: k,
            sxm: d,
            sendEngagement: N
        })
    }(_ate, _ate.api, _ate), function(e) {
        function t(t) {
            var a = t.params || {};
            return t.sendViewID && (a.uid = e.uid), t.sendVisitID && (a.uvs = e.uvs || e.cookie.visit.getID()), t.sendPubID && (a.pub = e.pub()), t.sendDomainPort && (a.dp = e.util.stripHypertextProtocol(e.du)), a
        }
        function a(a, i) {
            var n = document.createElement("script"), r = t(i), s = e.util.rtoKV(r);
            return n.src = a + "?" + s, document.body.appendChild(n), n
        }
        function i(a, i) {
            var n = t(i), r = e.util.rtoKV(n), s = new Image(1, 1);
            return s.src = a + "?" + r, e.imgz.push(s), s
        }
        e.track = e.track || {}, e.track.dropScript = a, e.track.dropPixel = i
    }(_ate), function() {
        function e(e) {
            if (!e)
                return 0;
            "#" == e.charAt(0) && (e = e.substr(1));
            var t = e.split(";").shift();
            return 3 == t.split(".").length && (t = t.split(".").slice(0, - 1).join(".")), 12 == t.length && "." == t.substr(0, 1) && /[a-zA-Z0-9\-_]{11}/.test(t.substr(1)) ? 1 : 0
        }
        function t(e) {
            return e.length == 11 + f && e.substr(0, f) == l && /[a-zA-Z0-9\-_]{11}/.test(e.substr(f))
        }
        function i(e, a) {
            e || (e = document.location), a || (a = d.referer || d.referrer || "");
            var i, n, r, s, o, c, l, p, _, g, m, w, v, b = 0, y = 0, k = e ? e.href: "", x = (k || "").split("#").shift(), N = e.hash.substr(1), O = _ate.util.ghp(e.search, 1), T = _ate.util.ghp(e.hash), S = T.at_st, A = T.at_pco, E = T.at_ab, C = T.at_pos, I = T.at_tot, j = T.at_si, z = O.sms_ss, M = O.fb_ref, L = O.at_xt, B = O.at_st;
            S || t(N) && (l = _ate.util.atohb(N.substr(f)), o = l.substr(8, 8), S = l.substr(0, 8) + "00000000,", S += parseInt(l.substr(16), 10)), M&&!S && (p = h, g = M.split(p), g.length < 2 && M.indexOf("_")>-1 && (p = "_", g = M.split(p)), m = g.length > 1 ? g.pop() : "", w = g.join(p), t(w) || (w = M, m = ""), t(w) ? (l = _ate.util.atohb(w.substr(f)), L = l.substr(0, 16) + "," + parseInt(l.substr(16), 10), z = "facebook_" + (m || "like")) : (c = M.split("=").pop().split(h), 2 == c.length && _ate.util.ivc(c[0]) && (L = c.join(","), z = "facebook_" + (m || "like")))), S = S && _ate.util.ivc(S.split(",").shift()) ? S : "", L || (p = N.indexOf(u)>-1 ? u : h, _ = N.substr(f).split(p), 2 == _.length && t(N.substr(0, 1) + _[0]) && (l = _ate.util.atohb(_[0]), L = l.substr(0, 16) + "," + parseInt(l.substr(16), 10), z = _[1], b = 1)), A && (r = A), S ? (y = parseInt(S.split(",").pop()) + 1, n = S.split(",").shift()) : - 1 == k.indexOf(_atd + "book") && x != a && (L ? (v = L.split(","), i = _duc(v.shift()), i.indexOf(",")>-1 && (v = i.split(","), i = v.shift())) : B && (v = B.split(","), s = _duc(v.shift()), s.indexOf(",")>-1 && (v = s.split(","), s = v.shift())), v && v.length && (y = Math.min(3, parseInt(v.pop()) + 1))), _ate.util.ivc(n) || (n = null), _ate.util.ivc(s) || (s = null), z = (z || "").split("#").shift().split("?").shift();
            var P = {
                ab: E || null,
                pos: C,
                tot: I,
                rsi: n,
                cfc: r,
                hash: b,
                rsiq: s,
                fuid: o,
                rxi: i,
                rsc: z,
                gen: y,
                csi: j
            };
            return P
        }
        function n(e) {
            return e = e || window.addthis_config, !e || e.data_track_clickback!==!1 && e.data_track_linkback!==!1
        }
        function r(e, t) {
            if (!t || t.data_track_clickback!==!1 && t.data_track_linkback!==!1) {
                if (p)
                    return !0;
                if (_ate.ver() >= 250)
                    return p=!0;
                e = (e || w.addthis_product || "").split(",");
                for (var a = 0; a < e.length; a++)
                    if (_[e[a].split("-").shift()])
                        return p=!0
            }
            return !1
        }
        function s(e, t) {
            return e = e || _ate.util.cuid(), l + _ate.util.hbtoa(e + Math.min(3, t || 0))
        }
        function o(e, t, i) {
            return i = i || _ate.util.cuid(), e.indexOf("#")>-1 ? e : e + "#" + s(t ? i : i.substr(0, 8) + _ate.ad.gub(), (a.smd || {}).gen) + (t ? h + t : "")
        }
        function c(t) {
            var a, i, n, r, s, o, c;
            return t.indexOf("#")>-1 && (s = t.split("#").slice(1).shift(), e(s) && (o = s.substr(1).split("."), c = o.length ? o.shift() : "", i = o.length ? o.pop() : "", c && (c = _ate.util.atohb(c), a = c.substr(0, 16), n = parseInt(c.substr(16), 10), isNaN(n) || (r = r || {}, r.gen = n)), _ate.util.ivc(a) && (r = r || {}, r.xid = a), - 1 != i.search(/^[a-zA-Z0-9_]+$/) && (r = r || {}, r.rsc = i))), r
        }
        var d = document, l = ".", u = ";", h = ".", f = l.length, p = 0, _ = {
            wpp: 1,
            blg: 1
        };
        _ate.extend(_ate.track, {
            cur: o,
            dcu: c,
            gcc: s,
            cpf: l,
            ctp: r,
            eop: i,
            ich: e,
            ict: n
        })
    }(_ate, _ate.api, _ate), function(e) {
        function t(e) {
            return e = (e || _ate.share.links.canonical || document.location.href).split("#").shift(), s.testAll(e)?!0 : s.testAll(e + "/")
        }
        function a(e) {
            if (!_ate.sub && window.JSON) {
                e = (e || _ate.share.links.canonical || document.location.href).split("#").shift();
                var t = s.generateName();
                s.contains(t) || s.add(t), i || (i = s.get(t)), !i || r || i.test(e) || (r = 1, setTimeout(function() {
                    i.add(e), i.save(t)
                }, 5e3))
            }
        }
        {
            var i, n = "hist", r = 0, s = new e.data.bloom.library(n, 3);
            e.data.storage
        }
        e.track || (e.track = {}), e.track.hist = {
            log: a,
            seenBefore: t
        }
    }(_ate, _ate.api, _ate), function(e) {
        function t(t) {
            if ("t.co" == t)
                return "twitter";
            var a, i;
            for (a in e.services.map)
                if (i = e.services.map[a], "" === i && (i = a + ".com"), - 1 != t.indexOf(i))
                    return a;
            return null
        }
        function a(e) {
            var t, a, i, n;
            for (e = _duc(e), e = e.toLowerCase(), e = e.replace(/[,;:\+\|]/g, " "), e = e.replace(/[^a-z0-9. '\-]/g, ""), e = e.replace(/\s+/g, " "), e = e.replace(/\s+$/g, ""), a = [], i = e.split(" "), n = 0; n < i.length; n++)
                t = i[n], "-" != t.charAt(0) && (/'s$/.test(t) ? a.push(t.substring(0, t.length - 2).replace(/[-']/g, "") + "'s") : a = a.concat(t.replace(/'/g, "").split("-")));
            return a
        }
        function i(e, t) {
            return n(e === undefined?!0 : e, t)
        }
        function n(i, n) {
            var s, o, c, d = r(i), l = i ? e.dr: d.dr || e.dr, h = ((document.location || {}).href || "", e.ad.clr(l)), p = {};
            return u && e.log.debug("op=", d, "ref=" + l, "cla=" + h, "cache=" + f), d.rsc ? (p.type = "social", p.service = d.rsc, p.click=!0, f = p, p) : f&&!n ? f : "undefined" == typeof l || "" === l ? (p.type = "direct", f = p, p) : (s = e.util.host(l), o = t(s), u && e.log.debug("ref=" + l, "iss=" + e.ad.iss(l)), "undefined" != typeof o && o ? (u && e.log.debug("serviceCode", o), p.type = "social", p.service = o) : e.ad.iss(l) ? (p.type = "search", p.domain = e.util.host(l), c = e.ad.fst(l), p.terms = a(c)) : h & e.ad.ref.r_ondomain ? (p.type = "internal", p.domain = document.location.hostname) : h & e.ad.ref.r_offdomain ? (p.type = "referred", p.domain = e.util.host(l)) : p.type = "direct", f = p, p)
        }
        function r(e) {
            return e ? d : l || d || {}
        }
        function s(t) {
            d = {}, _ate.util.each(t, function(e, t) {
                d[e] = t
            }), d.dr = e.dr
        }
        function o(t) {
            l = {}, (t.rsi || t.rsc || t.dr) && (_ate.util.each(t, function(e, t) {
                l[e] = t
            }), u && e.log.debug("setting", l), _ate.util.each(l, function(e, t) {
                h.add(e, t)
            }), h.save())
        }
        function c(t, a) {
            var i = a ? null: h.get();
            u && e.log.debug("reset called; pageState=", t, " stored state=", i), s(t), i ? t.rsc ? (t.dr = e.dr, o(t), u && e.log.debug("formal referral", l)) : document.referrer ? (o(i), u && e.log.debug("referral - use stored state", l)) : (u && e.log.debug("no referral - kill cookie, then start a new session"), h.reset(), t.dr = e.dr, o(t), d = l, u && e.log.debug("session state", l)) : (t.dr = e.dr, o(t), d = l, u && e.log.debug("session state", l))
        }
        var d = {}, l = {}, u = 0, h = new e.cookie.KV("rfs", 1), f = null;
        e.track || (e.track = {}), e.track.ts = {
            get: i,
            gst: a,
            set: o,
            reset: c
        }
    }(_ate, _ate.api, _ate), function() {
        function e(e) {
            Q || (b("plvp", "3", e, {}, 1), Q=!0)
        }
        function t(e) {
            e = e.split("-").shift();
            for (var t = 0; t < K.length; t++)
                if (K[t] == e)
                    return;
            r("cmd=ttv&pco=" + e), G = e, K.push(e)
        }
        function a(e) {
            e = e.split("-").shift();
            for (var t = 0; t < Y.length; t++)
                if (Y[t] == e)
                    return;
            Y.push(e)
        }
        function i(e, a, n) {
            var r;
            if ("string" == typeof e && e && "#" == e.charAt(0) && (r = e.substr(1)), r && (e = document.getElementById(r), !e))
                return void setTimeout(function() {
                i("#" + r, a, n)
            }, 1e3);
            if (_ate.getVisibility(e) > 0)
                n && J.push(n), t(a);
            else {
                var s, o = function() {
                    _ate.getVisibility(e) > 0 ? (n && J.push(n), t(a), _ate.util.unlisten(window, "scroll", o)) : (s && (clearTimeout(s), s = undefined), s = setTimeout(o, 3e3))
                };
                _ate.util.listen(window, "scroll", o)
            }
        }
        function n() {
            var e = C.getElementById("_atssh");
            return e || (e = C.ce("div"), e.style.visibility = "hidden", e.id = "_atssh", I.opp(e.style), C.body.insertBefore(e, C.body.firstChild)), e
        }
        function r(e) {
            !_ate.bro.ie6&&!_ate.bro.ie7 && W && W.contentWindow && W.contentWindow.postMessage(e, "*")
        }
        function s(e, t) {
            var a, i = Math.floor(1e3 * Math.random()), r = n();
            return t || W ||!_atc._atf || I.bro.ie6 || I.bro.ie7 ? (I.bro.msi ? (I.bro.ie6&&!e && 0 === C.location.protocol.indexOf("https") && (e = "javascript:''"), r.innerHTML = '<iframe id="_atssh' + i + '" width="1" height="1" title="AddThis utility frame" name="_atssh' + i + '" ' + (e ? 'src="' + e + '"' : "") + ">", a = C.getElementById("_atssh" + i)) : (a = C.ce("iframe"), a.id = "_atssh" + i, a.title = "AddThis utility frame"), I.opp(a.style), a.frameborder = a.style.border = 0, a.style.top = a.style.left = 0, a) : (W = _atc._atf, I.bro.msi && (W.url = e), W)
        }
        function o() {
            if (document.getElementById("product"))
                return !0;
            if ("function" == typeof document.getElementsByClassName && (document.getElementsByClassName("product") || []).length > 0)
                return !0;
            if (document.getElementById("productDescription"))
                return !0;
            if (document.getElementById("page-product"))
                return !0;
            if (document.getElementById("vm_cart_products"))
                return !0;
            if (window.Virtuemart)
                return !0;
            var e, t = I.ad.gog();
            return _ate.util.each(t, function(t, a) {
                "type=product" == a && (e = 1)
            }), e?!0 : void 0
        }
        function c() {
            var e = window;
            return (((e.jQuery || {}).fn || {}).jquery && 1) | ((e.Prototype || {}).Version && 2) | ((e.YUI || {}).version || (e.YAHOO || {}).VERSION && 4) | ((e.Ext || {}).version && 8) | ((e.dojo || {}).version && 16) | ((e._gaq || e._gat) && 32) | (e.google_ad_client && 64) | ((e.FB || e.fbAsyncInit) && 128) | (e.$BTB && 256) | (e.meebo && 512) | (e.gigya && 1024) | (e.SHARETHIS && 2048) | (e._qevents && 4096) | (e.twttr && 8192) | (e.postwidgetnamespace && 16384) | (e.a2a && 32768) | (e.SHRSB_Settings && 65536) | (e._sf_async_config && 131072) | (e.Shopify && 262144)
        }
        function d(e) {
            e && e.data && e.data.pco && e.data.url && (z.push(I.track.fcv("typ", "lnk")), z.push(I.track.fcv("pco", e.data.pco)), z.push(I.track.fcv("pur", I.track.mgu(e.data.url, {
                defrag: 1
            }))), x(!0))
        }
        function l() {}
        function u(e) {
            e && e.data && e.data.service && e.data.url && v({
                gen: I.ad.type.FOLLOW,
                pix: "dest=" + e.data.service,
                svc: e.data.service,
                url: e.data.url
            })
        }
        function h(e) {
            var t = I.uid;
            if (e && e.data && e.data.service) {
                if (!_ate.ssl && t && _ate.util.ivc(t)&&!_atc.xck&&!_ate.util.iooc(t) && (e.data.service.indexOf("facebook")>-1 || "more" == e.data.service || "settings" == e.data.service || "link" == e.data.service || _atc.ver >= 300 && "email" == e.data.service)) {
                    var a = new Image;
                    I.imgz.push(a), a.src = "//aidps.atdmt.com/AI/Api/v1/UserRest.svc/Provider/39CD8FF4-531A-4266-A340-45548C451F45/User/" + t + "/gif"
                }
                v({
                    gen: e.data.service.indexOf("facebook")>-1 || "more" == e.data.service || "settings" == e.data.service || "link" == e.data.service || _atc.ver >= 300 && "email" == e.data.service ? I.ad.type.NOOP: I.ad.type.SHARE,
                    pix: "dest=" + e.data.service,
                    svc: e.data.service,
                    url: e.data.url || null
                }), I.dcp = I.ad.type.SHARE
            }
        }
        function f(e) {
            Math.random() < .01 && (e.data.call && $.push(e.data.call), E || (E = setTimeout(function() {
                b("ap", "3", "calls=" + _euc($.join(",")), {})
            }, 1e4)))
        }
        function p() {
            if (K.length && K.length != Z) {
                Z = K.length;
                var e = {
                    vpc: G
                };
                "-" != I.ab && (e.ab = I.ab), b("plvp", "3", J.length ? J.join("&") : "", e)
            }
            setTimeout(p, 100)
        }
        function _() {
            Math.random() < _atc.plmp && p()
        }
        function g(e) {
            var t = {}, a = e.data || {}, i = a.svc, n = a.pco, r = a.cmo, s = a.crs, o = a.cso;
            i && (t.sh = i), r && (t.cm = r), o && (t.cs = 1), s && (t.cr = 1), n && (t.spc = n), b("sh", "3", null, t)
        }
        function m(e) {
            var t = {}, i = e.data || {}, n = i.svc, r = i.pco || "wmb-1.0";
            i.showCount > 1 || (t.sh = "wombat", r && (t.spc = r), n && (t.sc = n), b("sh", "3", null, t), a(i.pco))
        }
        function v(e, t) {
            var a = I.dr, i = I.rev || "";
            if (e)
                if (e.xck = _atc.xck ? 1 : 0, e.xxl = 1, e.sid = I.track.ssid(), e.pub = I.pub(), e.ssl = I.ssl || 0, e.du = I.truncateURL(e.url || I.du || I.dl.href), e.xtr = t !== undefined ? 0 : _atc.xtr, I.dt && (e.dt = I.dt), I.cb && (e.cb = I.cb), I.kw && (e.kw = I.kw), e.lng = I.lng(), e.ver = _ate.ver(), e.jsl = I.track.jsl(), e.prod = I.track.prod(), !I.upm && I.uid && (e.uid = I.uid), e.pc = e.spc || Y.join(","), G && (e.vpc = G), a && (e.dr = I.truncateURL(a)), I.dh && (e.dh = I.dh), i && (e.rev = i), I.xfr)
                    if (I.upm)
                        W && W.contentWindow && W.contentWindow.postMessage(toKV(e), "*");
                    else {
                        var r = n(), o = _atc.rsrcs.sh + "";
                        W && r.removeChild(r.firstChild), W = s(), W.src = o + "#" + toKV(e), r.appendChild(W)
                    } else 
                        F.push(e)
        }
        function b(e, t, a, i, n) {
            if (!window.at_sub&&!_atc.xtr) {
                var r = i || {};
                r.evt = e, a && (r.ext = a), M = r, 1 === n ? k(!0) : I.track.sxm(!0, k)
            }
        }
        function y(e, t) {
            z.push(I.track.fcv(e, t)), I.track.sxm(!0, k)
        }
        function k(e) {
            I.dl ? I.dl.hostname : "";
            if (z.length > 0 || M) {
                if (I.track.sxm(!1, k), _atc.xtr)
                    return;
                var t = M || {};
                if (t.ce = z.join(","), z = [], M = null, v(t), e) {
                    var a = C.ce("iframe");
                    a.id = "_atf", _ate.opp(a.style), C.body.appendChild(a), a = C.getElementById("_atf")
                }
            }
        }
        function x(e) {
            var t = _ate, a = t.lng().split("-").shift(), i = t.dl ? t.dl.hostname: "";
            if (z.length > 0) {
                if (_atc.xtr)
                    return;
                (i.indexOf(".gov")>-1 || i.indexOf(".mil")>-1) && (_atc.xck = 1), t.dt && z.push(t.track.fcv("pti", t.dt)), z.push(t.track.fcv("lng", a)), t.cb && z.push(t.track.fcv("cb", t.cb));
                var n = L + "-" + t.track.ran() + ".png?ev=" + t.track.sta() + "&ce=" + _euc(z.join(",")) + (_atc.xck ? "&xck=1" : "") + (t.dr ? "&dr=" + _euc(t.track.mgu(t.dr, {
                    defrag: 1
                })) : "") + (t.du ? "&PRE=" + _euc(t.track.mgu(t.du, {
                    defrag: 1
                })) : ""), r = B + n;
                z = [], t.track.lpx({
                    url: r,
                    close: e
                })
            }
        }
        function N(e) {
            _ate.log.debug(e), O(e)
        }
        function O(e) {
            return e ? e.pco ? (e.ruleId || _ate.log.warn("missing ruleId, only OK if no audiences are specified for the tool `" + e.pco + "`."), e.url || (e.url = _ate.du), z.push(I.track.fcv("typ", "lnk")), z.push(I.track.fcv("pco", e.pco)), z.push(I.track.fcv("pur", I.track.mgu(e.url, {
                defrag: !0
            }))), e.ruleId && z.push(I.track.fcv("cad", e.ruleId)), void x(!0)) : void _ate.log.error("missing pco") : void _ate.log.error("missing data")
        }
        function T(e, t) {
            var a = ((t || {}).id || _ate.uid, (t || {}).service || "unk");
            y("typ", e), y("pur", I.track.mgu(I.du, {
                defrag: 1
            })), y("sto", a)
        }
        function S(e) {
            T("soc", e)
        }
        function A() {
            var e = "", t = "";
            if (window.getSelection && (t = window.getSelection() || "", e = _ate.trim(t.toString()).replace(H, " ").replace(/[\b]+/g, " ").split(" "), e.length)) {
                if (R && 3 > j && y("cbc", e.length), j++, !V)
                    return;
                for (var a = [], i = 0; i < e.length; i++)
                    e[i] && e[i].length <= 50&&-1 == e[i].indexOf("@")&&-1 == e[i].indexOf("://")&&!U.test(e[i]) && a.push(e[i]);
                a.length && a.length <= 5 && (!I.dcp || I.dcp < I.ad.type.COPY) && setTimeout(function() {
                    v({
                        gen: I.ad.type.COPY,
                        pix: "tt=" + _euc(a.join(" "))
                    }), I.dcp = I.ad.type.COPY
                }, 1e4 * Math.random())
            }
        }
        var E, C = document, I = _ate, j = 0, z = [], M = null, L = "tev", B = "//o.addthis.com/at/", P = function(e) {
            var t = _ate.track.ts.get();
            "social" == t.type ? _ate.cookie.ssc.update(t.service) : e && _ate.cookie.ssc.update(e)
        }, D = {
            ftho: 1,
            aqe3: 1,
            d99r: 1,
            neud: 1,
            "8elu": 1,
            bqfn: 1
        }, R = Math.random() < _atc.csmp, V=!0, H = new RegExp(/\(?(\d{3})\)?[\- ]?(\d{3})[\- ]?(\d{4})/g), U = new RegExp(/^((([a-z]|[0-9]|\-)+)\.)+([a-z])+$/gi), F = [], q = function() {
            for (var e; e = F.pop();)
                v(e)
        }, W = null, K = [], G = null, J = [], Y = [], Z = 0, Q=!1, $ = [];
        _ate.ed.addEventListener("addthis-internal.params.loaded", function() {
            var e = (w.addthis_config || {}).data_track_textcopy;
            V = e!==!1 && (V ||!_ate.sub && ((dl || {}).href || "").indexOf(".addthis.com")>-1 || D[_ate.mun(_ate.pub())] || (w.addthis_config || {}).data_track_textcopy || (window.addthis_product || "").indexOf("wpp")>-1 || (window.addthis_product || "").indexOf("blg")>-1);
            try {
                (R || V) && (I.bro.msi ? document.body.attachEvent("oncopy", A, !0) : document.addEventListener("copy", A, !0))
            } catch (t) {}
        }), I.ed.addEventListener("addthis-internal.api", f), I.ed.addEventListener("addthis-internal.compact", g), I.ed.addEventListener("addthis-internal.bar.show", m), I.ed.addEventListener("addthis-internal.link.click", d), I.ed.addEventListener("addthis-internal.ready", _), I.ed.addEventListener("addthis-internal.conversion", N), I.ed.addEventListener("addthis.bar.show", m), I.ed.addEventListener("addthis.menu.share", h), I.ed.addEventListener("addthis.menu.follow", u), I.ed.addEventListener("addthis.menu.comment", l), I.track || (I.track = {}), I.util.extend(I.track, {
            pcs: Y,
            apc: a,
            sdt: e,
            avpc: t,
            avp: i,
            cev: y,
            ctf: s,
            jsl: c,
            prod: o,
            osc: S,
            gtf: n,
            qtp: function(e) {
                F.push(e)
            },
            ssc: P,
            stf: function(e) {
                W = e
            },
            trk: v,
            trl: d,
            xtp: q,
            msg: r,
            conversion: O
        })
    }(), function(e) {
        function t(e, a) {
            e === undefined || t.isWatching(e) || (a = a || {}, a.minPercentVisible = a.minPercentVisible !== undefined ? a.minPercentVisible : .5, a.minDurationVisible = a.minDurationVisible !== undefined ? a.minDurationVisible : 1e3, a.sampleRate = a.sampleRate !== undefined ? a.sampleRate : 1, a.onView = a.onView !== undefined ? a.onView : function() {}, this.element = e, this.sampleTimeout = 1e3 / a.sampleRate, this.minPercentVisible = a.minPercentVisible, this.minDurationVisible = a.minDurationVisible, this.onView = a.onView, this.interval = null, this.firstSeen = null, this.wasViewed=!1, t.watchList.push(e), t.watchers.push(this))
        }
        t.prototype.check = function() {
            var t = this, a = e.getVisibility(this.element, {
                cacheDuration: this.sampleTimeout
            });
            this.interval || this.wasViewed || a > this.minPercentVisible && (this.firstSeen = new Date, this.interval = setInterval(function() {
                var a = new Date, i = e.getVisibility(t.element, {
                    cacheDuration: this.sampleTimeout
                });
                i > t.minPercentVisible ? a.getTime() - t.firstSeen.getTime() > t.minDurationVisible && (clearInterval(t.interval), t.interval = null, t.wasViewed=!0, t.onView()) : (clearInterval(t.interval), t.interval = null, t.firstSeen = null)
            }, this.sampleTimeout))
        }, t.isWatching = function(e) {
            for (var a = t.watchList.length - 1; a >= 0; a--)
                if (t.watchList[a] === e)
                    return !0;
            return !1
        }, t.handler = function() {
            for (var e = t.watchers.length; e--;)
                t.watchers[e].check()
        }, t.resizeHandler = function() {
            clearTimeout(t.resizeHandlerTimeout), t.resizeHandlerTimeout = setTimeout(t.handler, 1e3)
        }, t.resizeHandlerTimeout = null, t.watchList = [], t.watchers = [], this.parent === window && _ate.util.listen(window, "message", function(e) {
            var a = e && e.data && e.data.indexOf instanceof Function && 0 === e.data.indexOf("_atafiv=");
            if (a)
                for (var i, n = e.data.substring("_atafiv=".length), r = n.split("#"), s = r[0], o = decodeURIComponent(r[1] || ""), c = 0; c < document.getElementsByTagName("iframe").length; c++)
                    if (i = document.getElementsByTagName("iframe")[c], i.src.replace(/^https?:/, "") === o.replace(/^https?:/, "")) {
                        new t(i, {
                            minPercentVisible: .5,
                            minDurationVisible: 1e3,
                            onView: function() {
                                var e = document.createElement("img");
                                e.src = "//cf.addthis.com/red/p.png?gen=2000&rb=0&pco=clk-100&ev=view_tracker&pxid=4031&dspid=6" + s, _ate.opp(e.style), document.body.appendChild(e)
                            }
                        }), t.handler();
                        break
                    }
        }), e.util.listen(window, "scroll", t.handler), e.util.listen(window, "resize", t.resizeHandler)
    }(_ate, _ate.api, _ate), extend(_ate, {
        _rec: [],
        xfr: !_ate.upm ||!_ate.bro.ffx,
        pmh: function(e) {
            var t, a = _ate._rec;
            if (".addthis.com" == e.origin.slice( - 12)) {
                if (!e.data)
                    return;
                if (e.data.length)
                    if (_ate.unj && e.data.indexOf && 0 === e.data.indexOf("{"))
                        try {
                            t = JSON.parse(e.data)
                } catch (e) {
                    t = _ate.util.rfromKV(e.data)
                } else 
                    t = _ate.util.rfromKV(e.data);
                    else 
                        t = e.data;
                for (var i = 0; i < a.length; i++)
                    a[i](t)
            }
        }
    }), extend(_ate, {
        _tc: function(e, t, a, i) {
            var n = window.addthis_translations;
            if (n)
                e(_ate._t(t, a, i));
            else if (_ate._t._q = _ate._t._q || [], _ate._t._q.push({
                eng: t,
                id: a,
                lng: i
            }), !_ate._t._qw) {
                var r = function() {
                    var t = _ate._t._q;
                    if (window.addthis_translations)
                        for (var a = 0; a < t.length; a++)
                            e(_ate._t(t[a].eng, t[a].id, t[a].lng));
                    else 
                        _ate._t._qw = setTimeout(r, 1e3)
                };
                _ate._t._qw = setTimeout(r, 1e3)
            }
        },
        _t: function(e, t, a) {
            var i = window.addthis_translations;
            if (a = a || _ate.jlng(), "en" == a ||!i)
                return e;
            for (var n in i)
                for (var r in i[n][0])
                    if (i[n][0][r] === a && i[n].length > t && i[n][t])
                        return i[n][t];
            return e
        },
        lng: function() {
            return window.addthis_language || (window.addthis_config || {}).ui_language || (_ate.bro.msi ? navigator.userLanguage : navigator.language) || "en"
        },
        jlng: function(e) {
            return (e || _ate.lng()).split("-").shift()
        },
        iwb: function(e) {
            var t = {
                th: 1,
                pl: 1,
                sl: 1,
                gl: 1,
                hu: 1,
                is: 1,
                nb: 1,
                se: 1,
                su: 1,
                sw: 1
            };
            return !!t[e]
        },
        gfl: function(e) {
            var t = {
                ca: "es",
                cs: "CZ",
                cy: "GB",
                da: "DK",
                de: "DE",
                eu: "ES",
                ck: "US",
                en: "US",
                es: "LA",
                fb: "FI",
                gl: "ES",
                ja: "JP",
                ko: "KR",
                nb: "NO",
                nn: "NO",
                sv: "SE",
                ku: "TR",
                zh: "CN",
                "zh-tr": "CN",
                "zh-hk": "HK",
                "zh-tw": "TW",
                fo: "FO",
                fb: "LT",
                af: "ZA",
                sq: "AL",
                hy: "AM",
                be: "BY",
                bn: "IN",
                bs: "BA",
                nl: "NL",
                et: "EE",
                fr: "FR",
                ka: "GE",
                el: "GR",
                gu: "IN",
                hi: "IN",
                ga: "IE",
                jv: "ID",
                kn: "IN",
                kk: "KZ",
                la: "VA",
                li: "NL",
                ms: "MY",
                mr: "IN",
                ne: "NP",
                pa: "IN",
                pt: "PT",
                rm: "CH",
                sa: "IN",
                sr: "RS",
                sw: "KE",
                tl: "PH",
                ta: "IN",
                pl: "PL",
                tt: "RU",
                te: "IN",
                ml: "IN",
                uk: "UA",
                vi: "VN",
                tr: "TR",
                xh: "ZA",
                zu: "ZA",
                km: "KH",
                tg: "TJ",
                he: "IL",
                ur: "PK",
                fa: "IR",
                yi: "DE",
                gn: "PY",
                qu: "PE",
                ay: "BO",
                se: "NO",
                ps: "AF",
                tl: "ST"
            }, a = t[e] || t[e.split("-").shift()];
            return a ? e.split("-").shift() + "_" + a : "en_US"
        },
        ivl: function(e) {
            var t = {
                af: 1,
                afr: "af",
                ar: 1,
                ara: "ar",
                az: 1,
                aze: "az",
                be: 1,
                bye: "be",
                bg: 1,
                bul: "bg",
                bn: 1,
                ben: "bn",
                bs: 1,
                bos: "bs",
                ca: 1,
                cat: "ca",
                cs: 1,
                ces: "cs",
                cze: "cs",
                cy: 1,
                cym: "cy",
                da: 1,
                dan: "da",
                de: 1,
                deu: "de",
                ger: "de",
                el: 1,
                gre: "el",
                ell: "ell",
                en: 1,
                eo: 1,
                es: 1,
                esl: "es",
                spa: "spa",
                et: 1,
                est: "et",
                eu: 1,
                fa: 1,
                fas: "fa",
                per: "fa",
                fi: 1,
                fin: "fi",
                fo: 1,
                fao: "fo",
                fr: 1,
                fra: "fr",
                fre: "fr",
                ga: 1,
                gae: "ga",
                gdh: "ga",
                gl: 1,
                glg: "gl",
                gu: 1,
                he: 1,
                heb: "he",
                hi: 1,
                hin: "hin",
                hr: 1,
                ht: 1,
                hy: 1,
                cro: "hr",
                hu: 1,
                hun: "hu",
                id: 1,
                ind: "id",
                is: 1,
                ice: "is",
                it: 1,
                ita: "it",
                iu: 1,
                ike: "iu",
                iku: "iu",
                ja: 1,
                jpn: "ja",
                km: 1,
                ko: 1,
                kor: "ko",
                ku: 1,
                lb: 1,
                ltz: "lb",
                lt: 1,
                lit: "lt",
                lv: 1,
                lav: "lv",
                mk: 1,
                mac: "mk",
                mak: "mk",
                ml: 1,
                mn: 1,
                ms: 1,
                msa: "ms",
                may: "ms",
                nb: 1,
                nl: 1,
                nla: "nl",
                dut: "nl",
                no: 1,
                nds: 1,
                nn: 1,
                nno: "no",
                oc: 1,
                oci: "oc",
                pl: 1,
                pol: "pl",
                ps: 1,
                pt: 1,
                por: "pt",
                ro: 1,
                ron: "ro",
                rum: "ro",
                ru: 1,
                rus: "ru",
                sk: 1,
                slk: "sk",
                slo: "sk",
                sl: 1,
                slv: "sl",
                sq: 1,
                alb: "sq",
                sr: 1,
                se: 1,
                si: 1,
                ser: "sr",
                su: 1,
                sv: 1,
                sve: "sv",
                sw: 1,
                swe: "sv",
                ta: 1,
                tam: "ta",
                te: 1,
                teg: "te",
                th: 1,
                tha: "th",
                tl: 1,
                tgl: "tl",
                tn: 1,
                tr: 1,
                tur: "tr",
                tpi: 1,
                tt: 1,
                uk: 1,
                ukr: "uk",
                ur: 1,
                urd: "ur",
                vi: 1,
                vec: 1,
                vie: "vi",
                "zh-cn": 1,
                "zh-hk": 1,
                "chi-hk": "zh-hk",
                "zho-hk": "zh-hk",
                "zh-tr": 1,
                "chi-tr": "zh-tr",
                "zho-tr": "zh-tr",
                "zh-tw": 1,
                "chi-tw": "zh-tw",
                "zho-tw": "zh-tw",
                zh: 1,
                chi: "zh",
                zho: "zh"
            };
            return t[e] ? t[e] : (e = e.split("-").shift(), t[e] ? 1 === t[e] ? e : t[e] : 0)
        },
        ggl: function(e) {
            var t = {
                en: "en-US",
                ar: "ar",
                ca: "ca",
                zh: "zh-CN",
                hr: "hr",
                cs: "cs",
                da: "da",
                nl: "nl",
                et: "et",
                fi: "fi",
                fr: "fr",
                de: "de",
                el: "el",
                he: "iw",
                hi: "hi",
                hu: "hu",
                id: "id",
                it: "it",
                ja: "ja",
                ko: "ko",
                lv: "lv",
                lt: "lt",
                ms: "ms",
                no: "no",
                fa: "fa",
                pl: "pl",
                pt: "pt-BR",
                ro: "ro",
                ru: "ru",
                sr: "sr",
                sk: "sk",
                sl: "sl",
                es: "es",
                sv: "sv",
                th: "th",
                tr: "tr",
                uk: "uk",
                vi: "vi"
            };
            return t[e] || null
        },
        gvl: function(e) {
            var t = _ate.ivl(e) || "en";
            return 1 === t && (t = e), t
        },
        ulg: function(e) {
            if (e && 0 !== _ate.lng().indexOf("en"))
                try {
                    var t = window.addthis_translations;
                    t ? e(t) : setTimeout(function() {
                        _ate.ulg(e)
                    }, 500)
            } catch (a) {}
        },
        alg: function(e, t) {
            var a = _ate.gvl((e || _ate.lng()).toLowerCase());
            0 === a.indexOf("en") || _ate.pll&&!t || (_ate.pll = _ate.ajs("static/r07/lang31/" + a + ".js"))
        }
    }), extend(_ate, {
        trim: function(e, t) {
            e && e.trim && "function" == typeof e.trim && (e = e.trim());
            try {
                e = e.replace(/^[\s\u3000]+/, "").replace(/[\s\u3000]+$/, "")
            } catch (a) {}
            return e && t && (e = _euc(e)), e || ""
        },
        trl: [],
        truncateURL: function(e, t, a) {
            var i = "", n = 0, r =- 1;
            if (a === undefined && (a = 300), e && (i = e.substr(0, a), i !== e && ((r = i.lastIndexOf("%")) >= i.length - 4 && (i = i.substr(0, r)), i != e))) {
                for (var s in _ate.trl)
                    _ate.trl[s] == t && (n = 1);
                n || _ate.trl.push(t)
            }
            return i
        },
        opp: function(e) {
            e.width = e.height = "1px", e.position = "absolute", e.top = "-9999px", e.zIndex = 1e5
        },
        jlr: {},
        ajs: function(e, t, a, i, n, r) {
            if (!_ate.jlr[e] || r) {
                var s = d.ce("script"), o = "https:" == window.location.protocol, c = "", l = n ? n: d.gn("head")[0] || d.documentElement;
                return s.setAttribute("type", "text/javascript"), a && s.setAttribute("async", "true"), i && s.setAttribute("id", i), (window.chrome && chrome.self || window.safari && safari.extension) && (c = o ? "https:" : "http:", 0 === e.indexOf("//") && (e = c + e)), s.src = (t || 0 === e.indexOf("//") ? "" : c + _atr) + e, l.insertBefore(s, l.firstChild), _ate.jlr[e] = 1, s
            }
            return 1
        },
        jlo: function() {
            try {
                var e = _ate, t = e.lng(), a = function(e) {
                    var t = new Image;
                    _ate.imgz.push(t), t.src = e
                };
                e.alg(t), e.pld || (e.bro.ie6 && (a(_atc.rsrcs.widgetpng), a(_atr + "static/t00/logo1414.gif"), a(_atr + "static/t00/logo88.gif"), window.addthis_feed && a("static/r05/feed00.gif", 1)), e.pll&&!window.addthis_translations ? setTimeout(function() {
                    e.pld = e.ajs(_atc.rsrcs.menujs)
                }, 10) : e.pld = e.ajs(_atc.rsrcs.menujs))
            } catch (i) {}
        },
        ao: function(e, t, a, i, n, r) {
            return _ate.lad(["open", e, t, a, i, n, r]), _ate.jlo(), !1
        },
        ac: function() {},
        as: function(e, t, a) {
            _ate.lad(["send", e, t, a]), _ate.jlo()
        }
    }), function(e) {
        function t() {
            var e, t = a(navigator.userAgent, 16), i = (new Date).getTimezoneOffset() + "" + navigator.javaEnabled() + (navigator.userLanguage || navigator.language), n = w.screen.colorDepth + "" + w.screen.width + w.screen.height + w.screen.availWidth + w.screen.availHeight, r = navigator.plugins;
            try {
                if (e = r.length, e > 0)
                    for (var s = 0; s < Math.min(10, e); s++)
                        5 > s ? i += r[s].name + r[s].description : n += r[s].name + r[s].description
            } catch (o) {}
            return t.substr(0, 2) + a(i, 16).substr(0, 3) + a(n, 16).substr(0, 3)
        }
        var a = e.mun;
        e.ad || (e.ad = {}), e.ad.gub = t
    }(_ate, _ate.api, _ate), function(e) {
        function t(e) {
            return e.replace(/[a-zA-Z]/g, function(e) {
                return String.fromCharCode(("Z" >= e ? 90 : 122) >= (e = e.charCodeAt(0) + 13) ? e : e - 26)
            })
        }
        function a(e) {
            var t = 0;
            return e && "string" == typeof e ? (e = ((e || "").toLowerCase() + "").replace(/ /g, ""), ("mature" == e || "adult" == e || "rta-5042-1996-1400-1577-rta" == e) && (t|=m), t) : t
        }
        function i(e, t) {
            var a, i, n = 0;
            if (!e || "string" != typeof e)
                return n;
            for (e = ((e || "").toLowerCase() + "").replace(/[^a-zA-Z]/g, " ").split(" "), a = 0, i = e.length; i > a; a++)
                if (C[e[a]] ||!t && E[e[a]])
                    return n|=m;
            return n
        }
        function n() {
            d();
            var e, t, n, c = g.addthis_title || _.title, l = i(c), u = (p || "").length;
            if (l|=i(_.location.hostname, !0), s(c, T, !1), r("h1", S), r("p", A, 150, 250), p && u)
                for (; u--;)
                    e = p[u] || {}, t = (e.name || (e.getAttribute ? e.getAttribute("property") : "") || "").toLowerCase(), n = e.content, ("description" == t || "keywords" == t) && (l|=i(n), "description" == t && s(n, O, !1)), "rating" == t && (l|=a(n)), "keywords" == t && n && n.length && (o(n), s(n, O, !0));
            return l
        }
        function r(t, a, i, n) {
            if (t) {
                var r, o = e.util.qsa(t);
                _ate.util.each(o, function(t, o) {
                    return n && t > n?!1 : (r = e.util.gettxt(o), void((!i || r.length > i) && s(r, a, !1)))
                })
            }
        }
        function s(e, t, a) {
            var i, n, r = e || "";
            if (r)
                for (r = r.split(a ? /[,\n\r]+/ : /[ ,\n\r]+/), n = 0; n < r.length; n++)
                    i = _ate.trim(r[n].toLowerCase()).replace(/['"]/, "").replace(/['",.?!]+$/, ""), i && (i.length < 3 || I[i] || (k[i] = (k[i] || 0) + (t || 1)))
        }
        function o(e) {
            var t, a, i = e.split(","), n = 200;
            for (a = 0; a < i.length && (t = _ate.trim(i[a]), (n -= t.length + 1) > 0); a++)
                x.push(t)
        }
        function c() {
            d();
            var e, t, a, i, n = [], r = (p || "").length;
            if (p && r)
                for (; r--;)
                    e = p[r] || {}, t = ((e.getAttribute ? e.getAttribute("property") : "") || e.name || "").toLowerCase(), a = e.content, 0 === t.indexOf("og:") && (i = t.split(":").pop(), (n.length < 7 || "type" == i) && n.push("type" == i ? i + "=" + a : i));
            return n
        }
        function d() {
            p || (p = _.all && "function" == typeof _.all.tags ? _.all.tags("META") : _.getElementsByTagName ? _.getElementsByTagName("META") : new Array, _ate.meta = p)
        }
        function l() {
            d();
            var e, t = {}, a = "";
            if (!p || 0 == p.length)
                return t;
            for (e = 0; e < p.length; e++)
                a = p[e].getAttribute("property") || "", - 1 != a.search(/^og:/i) && (t[a.replace("og:", "")] = p[e].content);
            return toKV(t)
        }
        function u() {
            return x.join(",")
        }
        function h() {
            var t, a = (new Date).getTime(), i = [];
            return _ate.util.each(k, function(e, t) {
                i.push({
                    name: "1|" + e,
                    weight: Math.round(100 * t) / 100
                })
            }), i.sort(function(e, t) {
                return e.weight > t.weight?-1 : 1
            }), i = i.slice(0, N), t = (new Date).getTime(), e.log.debug("gcv", i, "te=" + (t - a) + " ms"), i
        }
        function f() {
            var e = document.charset || document.characterSet || document.inputEncoding || document.defaultCharset;
            if (!e)
                for (d(), b = 0; b < p.length&&!(e = p[b].getAttribute("charset")
                    );
            b++);
            return !e || e.length > 14 ? "" : e
        }
        for (var p, _ = document, g = window, m = 1, w = ["cbea", "cbeab", "kkk", "zvys", "gvgf", "shpxf", "chfflyvcf", "pernzcvr", "svfgvat", "wvmm", "fcybbtr", "flovna"], v = ["phz"], b = w.length, y = v.length, k = {}, x = [], N = 25, O = 15, T = 10, S = 5, A = .333, E = {}, C = {}, I = {
            mr: 1,
            a: 1,
            able: 1,
            about: 1,
            above: 1,
            abst: 1,
            accordance: 1,
            according: 1,
            accordingly: 1,
            across: 1,
            act: 1,
            actually: 1,
            added: 1,
            adj: 1,
            adopted: 1,
            affected: 1,
            affecting: 1,
            affects: 1,
            after: 1,
            afterwards: 1,
            again: 1,
            against: 1,
            ah: 1,
            all: 1,
            almost: 1,
            alone: 1,
            along: 1,
            already: 1,
            also: 1,
            although: 1,
            always: 1,
            am: 1,
            among: 1,
            amongst: 1,
            an: 1,
            and: 1,
            announce: 1,
            another: 1,
            any: 1,
            anybody: 1,
            anyhow: 1,
            anymore: 1,
            anyone: 1,
            anything: 1,
            anyway: 1,
            anyways: 1,
            anywhere: 1,
            apparently: 1,
            approximately: 1,
            are: 1,
            aren: 1,
            arent: 1,
            arise: 1,
            around: 1,
            as: 1,
            aside: 1,
            ask: 1,
            asking: 1,
            at: 1,
            auth: 1,
            available: 1,
            away: 1,
            awfully: 1,
            b: 1,
            back: 1,
            be: 1,
            became: 1,
            because: 1,
            become: 1,
            becomes: 1,
            becoming: 1,
            been: 1,
            before: 1,
            beforehand: 1,
            begin: 1,
            beginning: 1,
            beginnings: 1,
            begins: 1,
            behind: 1,
            being: 1,
            believe: 1,
            below: 1,
            beside: 1,
            besides: 1,
            between: 1,
            beyond: 1,
            biol: 1,
            both: 1,
            brief: 1,
            briefly: 1,
            but: 1,
            by: 1,
            c: 1,
            ca: 1,
            came: 1,
            can: 1,
            cannot: 1,
            "can't": 1,
            cause: 1,
            causes: 1,
            certain: 1,
            certainly: 1,
            co: 1,
            com: 1,
            come: 1,
            comes: 1,
            contain: 1,
            containing: 1,
            contains: 1,
            could: 1,
            couldnt: 1,
            d: 1,
            date: 1,
            did: 1,
            "didn't": 1,
            different: 1,
            "do": 1,
            does: 1,
            "doesn't": 1,
            doing: 1,
            done: 1,
            "don't": 1,
            down: 1,
            downwards: 1,
            due: 1,
            during: 1,
            e: 1,
            each: 1,
            ed: 1,
            edu: 1,
            effect: 1,
            eg: 1,
            eight: 1,
            eighty: 1,
            either: 1,
            "else": 1,
            elsewhere: 1,
            end: 1,
            ending: 1,
            enough: 1,
            especially: 1,
            et: 1,
            "et-al": 1,
            etc: 1,
            even: 1,
            ever: 1,
            every: 1,
            everybody: 1,
            everyone: 1,
            everything: 1,
            everywhere: 1,
            ex: 1,
            except: 1,
            f: 1,
            far: 1,
            few: 1,
            ff: 1,
            fifth: 1,
            first: 1,
            five: 1,
            fix: 1,
            followed: 1,
            following: 1,
            follows: 1,
            "for": 1,
            former: 1,
            formerly: 1,
            forth: 1,
            found: 1,
            four: 1,
            from: 1,
            further: 1,
            furthermore: 1,
            g: 1,
            gave: 1,
            get: 1,
            gets: 1,
            getting: 1,
            give: 1,
            given: 1,
            gives: 1,
            giving: 1,
            go: 1,
            goes: 1,
            gone: 1,
            got: 1,
            gotten: 1,
            h: 1,
            had: 1,
            happens: 1,
            hardly: 1,
            has: 1,
            "hasn't": 1,
            have: 1,
            "haven't": 1,
            having: 1,
            he: 1,
            hed: 1,
            hence: 1,
            her: 1,
            here: 1,
            hereafter: 1,
            hereby: 1,
            herein: 1,
            heres: 1,
            hereupon: 1,
            hers: 1,
            herself: 1,
            hes: 1,
            hi: 1,
            hid: 1,
            him: 1,
            himself: 1,
            his: 1,
            hither: 1,
            home: 1,
            how: 1,
            howbeit: 1,
            however: 1,
            hundred: 1,
            i: 1,
            id: 1,
            ie: 1,
            "if": 1,
            "i'll": 1,
            im: 1,
            immediate: 1,
            immediately: 1,
            importance: 1,
            important: 1,
            "in": 1,
            inc: 1,
            indeed: 1,
            index: 1,
            information: 1,
            instead: 1,
            into: 1,
            invention: 1,
            inward: 1,
            is: 1,
            "isn't": 1,
            it: 1,
            itd: 1,
            "it'll": 1,
            its: 1,
            itself: 1,
            "i've": 1,
            j: 1,
            just: 1,
            k: 1,
            keep: 1,
            keeps: 1,
            kept: 1,
            keys: 1,
            kg: 1,
            km: 1,
            know: 1,
            known: 1,
            knows: 1,
            l: 1,
            largely: 1,
            last: 1,
            lately: 1,
            later: 1,
            latter: 1,
            latterly: 1,
            least: 1,
            less: 1,
            lest: 1,
            let: 1,
            lets: 1,
            like: 1,
            liked: 1,
            likely: 1,
            line: 1,
            little: 1,
            "'ll": 1,
            look: 1,
            looking: 1,
            looks: 1,
            ltd: 1,
            m: 1,
            made: 1,
            mainly: 1,
            make: 1,
            makes: 1,
            many: 1,
            may: 1,
            maybe: 1,
            me: 1,
            mean: 1,
            means: 1,
            meantime: 1,
            meanwhile: 1,
            merely: 1,
            mg: 1,
            might: 1,
            million: 1,
            miss: 1,
            ml: 1,
            more: 1,
            moreover: 1,
            most: 1,
            mostly: 1,
            mr: 1,
            mrs: 1,
            much: 1,
            mug: 1,
            must: 1,
            my: 1,
            myself: 1,
            n: 1,
            na: 1,
            name: 1,
            namely: 1,
            nay: 1,
            nd: 1,
            near: 1,
            nearly: 1,
            necessarily: 1,
            necessary: 1,
            need: 1,
            needs: 1,
            neither: 1,
            never: 1,
            nevertheless: 1,
            "new": 1,
            next: 1,
            nine: 1,
            ninety: 1,
            no: 1,
            nobody: 1,
            non: 1,
            none: 1,
            nonetheless: 1,
            noone: 1,
            nor: 1,
            normally: 1,
            nos: 1,
            not: 1,
            noted: 1,
            nothing: 1,
            now: 1,
            nowhere: 1,
            o: 1,
            obtain: 1,
            obtained: 1,
            obviously: 1,
            of: 1,
            off: 1,
            often: 1,
            oh: 1,
            ok: 1,
            okay: 1,
            old: 1,
            omitted: 1,
            on: 1,
            once: 1,
            one: 1,
            ones: 1,
            only: 1,
            onto: 1,
            or: 1,
            ord: 1,
            other: 1,
            others: 1,
            otherwise: 1,
            ought: 1,
            our: 1,
            ours: 1,
            ourselves: 1,
            out: 1,
            outside: 1,
            over: 1,
            overall: 1,
            owing: 1,
            own: 1,
            p: 1,
            page: 1,
            pages: 1,
            part: 1,
            particular: 1,
            particularly: 1,
            past: 1,
            per: 1,
            perhaps: 1,
            placed: 1,
            please: 1,
            plus: 1,
            poorly: 1,
            possible: 1,
            possibly: 1,
            potentially: 1,
            pp: 1,
            predominantly: 1,
            present: 1,
            previously: 1,
            primarily: 1,
            probably: 1,
            promptly: 1,
            proud: 1,
            provides: 1,
            put: 1,
            q: 1,
            que: 1,
            quickly: 1,
            quite: 1,
            qv: 1,
            r: 1,
            ran: 1,
            rather: 1,
            rd: 1,
            re: 1,
            readily: 1,
            really: 1,
            recent: 1,
            recently: 1,
            ref: 1,
            refs: 1,
            regarding: 1,
            regardless: 1,
            regards: 1,
            related: 1,
            relatively: 1,
            research: 1,
            respectively: 1,
            resulted: 1,
            resulting: 1,
            results: 1,
            right: 1,
            run: 1,
            s: 1,
            said: 1,
            same: 1,
            saw: 1,
            say: 1,
            saying: 1,
            says: 1,
            sec: 1,
            section: 1,
            see: 1,
            seeing: 1,
            seem: 1,
            seemed: 1,
            seeming: 1,
            seems: 1,
            seen: 1,
            self: 1,
            selves: 1,
            sent: 1,
            seven: 1,
            several: 1,
            shall: 1,
            she: 1,
            shed: 1,
            "she'll": 1,
            shes: 1,
            should: 1,
            "shouldn't": 1,
            show: 1,
            showed: 1,
            shown: 1,
            showns: 1,
            shows: 1,
            significant: 1,
            significantly: 1,
            similar: 1,
            similarly: 1,
            since: 1,
            six: 1,
            slightly: 1,
            so: 1,
            some: 1,
            somebody: 1,
            somehow: 1,
            someone: 1,
            somethan: 1,
            something: 1,
            sometime: 1,
            sometimes: 1,
            somewhat: 1,
            somewhere: 1,
            soon: 1,
            sorry: 1,
            specifically: 1,
            specified: 1,
            specify: 1,
            specifying: 1,
            state: 1,
            states: 1,
            still: 1,
            stop: 1,
            strongly: 1,
            sub: 1,
            substantially: 1,
            successfully: 1,
            such: 1,
            sufficiently: 1,
            suggest: 1,
            sup: 1,
            sure: 1,
            t: 1,
            take: 1,
            taken: 1,
            taking: 1,
            tell: 1,
            tends: 1,
            th: 1,
            than: 1,
            thank: 1,
            thanks: 1,
            thanx: 1,
            that: 1,
            "that'll": 1,
            thats: 1,
            "that've": 1,
            the: 1,
            their: 1,
            theirs: 1,
            them: 1,
            themselves: 1,
            then: 1,
            thence: 1,
            there: 1,
            thereafter: 1,
            thereby: 1,
            thered: 1,
            therefore: 1,
            therein: 1,
            "there'll": 1,
            thereof: 1,
            therere: 1,
            theres: 1,
            thereto: 1,
            thereupon: 1,
            "there've": 1,
            these: 1,
            they: 1,
            theyd: 1,
            "they'll": 1,
            theyre: 1,
            "they've": 1,
            think: 1,
            "this": 1,
            those: 1,
            thou: 1,
            though: 1,
            thoughh: 1,
            thousand: 1,
            throug: 1,
            through: 1,
            throughout: 1,
            thru: 1,
            thus: 1,
            til: 1,
            tip: 1,
            to: 1,
            together: 1,
            too: 1,
            took: 1,
            toward: 1,
            towards: 1,
            tried: 1,
            tries: 1,
            truly: 1,
            "try": 1,
            trying: 1,
            ts: 1,
            twice: 1,
            two: 1,
            u: 1,
            un: 1,
            under: 1,
            unfortunately: 1,
            unless: 1,
            unlike: 1,
            unlikely: 1,
            until: 1,
            unto: 1,
            up: 1,
            upon: 1,
            ups: 1,
            us: 1,
            use: 1,
            used: 1,
            useful: 1,
            usefully: 1,
            usefulness: 1,
            uses: 1,
            using: 1,
            usually: 1,
            v: 1,
            value: 1,
            various: 1,
            "'ve": 1,
            very: 1,
            via: 1,
            viz: 1,
            vol: 1,
            vols: 1,
            vs: 1,
            w: 1,
            want: 1,
            wants: 1,
            was: 1,
            "wasn't": 1,
            way: 1,
            we: 1,
            wed: 1,
            welcome: 1,
            "we'll": 1,
            went: 1,
            were: 1,
            "weren't": 1,
            "we've": 1,
            what: 1,
            whatever: 1,
            "what'll": 1,
            whats: 1,
            when: 1,
            whence: 1,
            whenever: 1,
            where: 1,
            whereafter: 1,
            whereas: 1,
            whereby: 1,
            wherein: 1,
            wheres: 1,
            whereupon: 1,
            wherever: 1,
            whether: 1,
            which: 1,
            "while": 1,
            whim: 1,
            whither: 1,
            who: 1,
            whod: 1,
            whoever: 1,
            whole: 1,
            "who'll": 1,
            whom: 1,
            whomever: 1,
            whos: 1,
            whose: 1,
            why: 1,
            widely: 1,
            willing: 1,
            wish: 1,
            "with": 1,
            within: 1,
            without: 1,
            "won't": 1,
            words: 1,
            world: 1,
            would: 1,
            "wouldn't": 1,
            www: 1,
            x: 1,
            y: 1,
            yes: 1,
            yet: 1,
            you: 1,
            youd: 1,
            "you'll": 1,
            your: 1,
            youre: 1,
            yours: 1,
            yourself: 1,
            yourselves: 1
        }; b--;)
            C[t(w[b])] = 1;
        for (; y--;)
            E[t(v[y])] = 1;
        e.ad || (e.ad = {}), _ate.extend(e.ad, {
            cla: n,
            gog: c,
            og: l,
            kw: u,
            gcv: h,
            gch: f
        })
    }(_ate, _ate.api, _ate), function(e) {
        function t(e, t, i) {
            i = i === undefined || i || "https:" == window.location.protocol, t = _ate.util.host(t === undefined ? window.location.href : t);
            var c = n;
            if (e) {
                var d = _ate.util.host(e);
                c|=t == d ? s : o
            }
            return !i && a(e) && (c|=r), c
        }
        function a(e) {
            var t = ".com/", a = ".org/", n = (e || "").toLowerCase(), r = 0;
            return n && n.match(/ws\/results\/(web|images|video|news)/) ? r = 1 : n && n.indexOf(!1) && (n.match(/google.*\/(search|url|aclk|m\?)/) || n.indexOf("/pagead/aclk?")>-1 || n.indexOf(t + "url")>-1 || n.indexOf(t + "l.php")>-1 || n.indexOf("/search?")>-1 || n.indexOf("/search/?")>-1 || n.indexOf("search?")>-1 || n.indexOf("yandex.ru/clck/jsredir?")>-1 || n.indexOf(t + "search")>-1 || n.indexOf(a + "search")>-1 || n.indexOf("/search.html?")>-1 || n.indexOf("search/results.")>-1 || n.indexOf(t + "s?bs")>-1 || n.indexOf(t + "s?wd")>-1 || n.indexOf(t + "mb?search")>-1 || n.indexOf(t + "mvc/search")>-1 || n.indexOf(t + "web")>-1 || n.match(/aol.*\/aol/) || n.indexOf("hotbot" + t)>-1) && 0 != i(e) && (r = 1), r?!0 : !1
        }
        function i(e) {
            var t, a = e.split("?").pop().toLowerCase().split("&"), i = /^(?:q|search|bs|wd|p|kw|keyword|query|qry|querytext|text|searchcriteria|searchstring|searchtext|sp_q)=(.*)/i;
            for (t = 0; t < a.length; t++)
                if (matches = i.exec(a[t]))
                    return matches[1];
            return !1
        }
        var n = 0, r = 1, s = 2, o = 4;
        e.ad || (e.ad = {}), e.ad.clr = t, e.ad.iss = a, e.ad.fst = i, e.ad.ref = {
            r_direct: n,
            r_search: r,
            r_ondomain: s,
            r_offdomain: o
        }
    }(_ate, _ate.api, _ate), function(e) {
        function t(e) {
            s ? setTimeout(function() {
                _ate.track.trk(e, !0)
            }, _ate.upm ? 0 : 2 * _ate.wait) : r.push(e)
        }
        function a(e) {
            var a = {
                pco: "cnv-100"
            }, i = {
                pxid: 1,
                ev: 1
            };
            if (e)
                for (var r in e)
                    i[r] && (a[r] = e[r]);
            t({
                gen: 2e3,
                fcp: 1,
                pix: n.util.toKV(a)
            })
        }
        function i(e) {
            t({
                pixu: e
            })
        }
        var n = e, r = [], s=!_ate.upm || (_ate.dat || {}).rdy;
        n.du || (n.du = document.location.href), n.dh || (n.dh = document.location.hostname), n.dr || (n.dr = document.referrer), e.ad || (e.ad = {}), _ate.extend(e.ad, {
            event: a,
            getPixels: i
        }), _ate.ed.addEventListener("addthis-internal.data.rdy", function() {
            s = 1;
            for (var e = 0; e < r.length; e++)
                t(r[e])
        })
    }(_ate, _ate.api, _ate), function(e) {
        function t(e) {
            var a, n;
            for (e && e instanceof i && l.push(e), a = 0; a < l.length;)
                n = l[a], n && n.test() ? (l.splice(a, 1), i.fire("load", n, {
                    resource: n
                })) : a++;
            l.length && setTimeout(t, d)
        }
        function a() {
            var e = this, t = new c(e);
            t.decorate(t).decorate(e), this.resources = arguments.length && arguments[0]instanceof Array ? arguments[0] : Array.prototype.slice.call(arguments) || [], this.waiting = this.resources.length, this.loading=!1, !this.resources || this.resources[0]instanceof i || (this.resources = n(this.resources)), this.checkload = function() {
                this.waiting--, 0 == this.waiting && t.fire("load", this.resources, {
                    resources: this.resources
                })
            }, this.add = function(e) {
                e && (this.waiting++, this.resources.push(e))
            }, this.load = function() {
                if (!this.loading) {
                    for (var t = 0; t < this.resources.length; t++)
                        this.resources[t].addEventListener("load", _ate.util.bind(this.checkload, e)), this.resources[t].load();
                    this.loading=!0
                }
            }
        }
        function i(e, t, a) {
            var n = this, r = new c(n);
            t = t || "", r.decorate(r).decorate(n), this.ready=!1, this.loading=!1, this.id = e, this.url = t, this.test = "function" == typeof a ? a : "undefined" == typeof a ? function() {
                return !0
            } : function() {
                return !!_window[a]
            }, i.addEventListener("load", function(e) {
                var t = e.data ? e.data.resource: null;
                t && t.id === n.id && n.loading && (n.loading=!1, n.ready=!0, r.fire(e.type, t, {
                    resource: t
                }))
            })
        }
        function n(e) {
            e instanceof Array || (e = [e]);
            for (var t = [], a = 0; a < e.length; a++) {
                var n = e[a];
                t.push(n instanceof i ? n : new _ate.resource.Resource(n.name, n.href || n.url || ((window._atc || {}).rsrcs || {})[n.name], n.test ? n.test : function() {
                    return !0
                }))
            }
            return t
        }
        var r = window, s = r.addthis_config || {}, o = document, c = (e.util, e.event.EventDispatcher), d = 25, l = [];
        i.prototype.load = function() {
            if (this.loading)
                return 1;
            var e, t, a, n, r, c = s.ui_use_css===!1?!1 : !0;
            if (e = function(e) {
                return 0 === e.indexOf("https:") ? e.substr("https:".length) : 0 === e.indexOf("http:") ? e.substr("http:".length) : e
            }, ".css" === this.url.substr(this.url.length - 4)) {
                if (c) {
                    for (a = o.gn("link"), r = a.length - 1; r >= 0; r--)
                        if ("stylesheet" === a[r].rel && e(a[r].href) === e(this.url)) {
                            n = a[r];
                            break
                        }
                    n || (t = o.gn("head")[0] || o.documentElement, n = o.ce("link"), n.rel = "stylesheet", n.type = "text/css", n.href = this.url, n.media = "non-existant-media", t.appendChild(n, t.firstChild), setTimeout(function() {
                        n.media = "all"
                    }))
                }
            } else 
                n = _ate.ajs(this.url, 1);
            return this.loading=!0, i.monitor(this), n
        }, i.known = {}, i.loading = l, i.monitor = t;
        var u = new c(i);
        u.decorate(u).decorate(i), e.resource = {
            Resource: i,
            convert: n,
            Bundle: a,
            useHighResIcons: !1
        }
    }(_ate, _ate.api, _ate), function(e) {
        function t(e, t, a, i, n, r, s) {
            return "function" != typeof s || s.ost || (s(), s.ost = 1), a || (a = window.addthis), "function" == typeof r ? function() {
                i && i.apply(a, arguments);
                var t = arguments;
                n ? _ate.ed.once(n, function() {
                    r.apply(a, t)
                }) : e.addEventListener("load", function() {
                    r.apply(a, t)
                }), e.load()
            } : function(r, s, o) {
                r && (r = _ate.util.select(r), r.length && (i && i(r), n ? _ate.ed.addEventListener(n, function() {
                    a[t](r, s, o)
                }) : e.addEventListener("load", function() {
                    a[t](r, s, o)
                }), e.load()))
            }
        }
        function a(e) {
            var a, i = function() {
                throw new Error("Invalid internal API request")
            }, n = e && e.context || window.addthis;
            e || i(), e.resources instanceof Array && (e.resources = new _ate.resource.Bundle(e.resources)), e.resources || i(), e.method || i(), a = t(e.resources, e.method, e.context, e.pre, e.event, e.callback, e.oncall), n[e.method] = function() {
                var e = arguments;
                _atc.xol&&!_adr.isReady ? _adr.append(function() {
                    a.apply(n, e)
                }) : a.apply(n, e)
            }
        }
        function i(e) {
            e.methods && _ate.util.each(e.methods, function(t, i) {
                i.method = t, e.context && (i.context = e.context), e.resources && (i.resources = e.resources), a(i)
            })
        }
        e.api = {
            ApiQueueFactory: t,
            addAsync: a,
            register: i
        }
    }(_ate, _ate.api, _ate), function(e) {
        function t() {
            for (var e; e = z.pop();)
                e && "function" == typeof e.close && e.close()
        }
        function a() {
            var e, t, a = d.gn("link"), i = {};
            for (e = 0; e < a.length; e++)
                t = a[e], t.href && t.rel && (i[t.rel] = t.href);
            return i
        }
        function i() {
            var e = d.location.protocol;
            return "file:" == e && (e = "http:"), e + "//" + _atd
        }
        function n(e, t, a, n) {
            if ("more" == e && _ate.ver() >= 300&&!_ate.bro.wph&&!_ate.bro.iph&&!_ate.bro.dro) {
                var r = _ate.util.clone(a || ("undefined" == typeof _atw ? addthis_share : _atw.share));
                r.url = _euc(r.url), r.title = _euc(r.title || (addthis_share || {}).title || "");
                var n = "undefined" == typeof _atw ? n: _atw.conf, o = _atc.rsrcs.bookmark + "#ats=" + _euc(_ate.util.rtoKV(r)) + "&atc=" + _euc(_ate.util.rtoKV(n));
                if (_ate.bro.msi && o.length > 2e3) {
                    o = o.split("&atc")[0];
                    var c = {
                        product: n.product,
                        data_track_clickback: n.data_track_clickback,
                        pubid: n.pubid,
                        username: n.username,
                        pub: n.pub,
                        ui_email_to: n.ui_email_to,
                        ui_email_from: n.ui_email_from,
                        ui_email_note: n.ui_email_note
                    };
                    _atw.ics(e) && (c.services_custom = _atw.ics(e)), o += "&atc=" + _euc(_ate.util.rtoKV(c))
                }
                return o
            }
            return i() + (t ? "feed.php" : "email" == e && _ate.ver() >= 300 ? "tellfriend.php" : "bookmark.php") + "?v=" + _ate.ver() + "&winname=addthis&" + s(e, t, a, n) + (((a || {}).smd || {}).dr || j.dr ? "&pre=" + _euc(j.track.cof(((a || {}).smd || {}).dr || j.dr)) : "") + "&tt=0" + ("more" === e && j.bro.ipa ? "&imore=1" : "") + "&captcha_provider=" + (j.bro.msi ? "recaptcha" : "nucaptcha") + (_ate.pro===!0 ? "&pro=1" : "")
        }
        function r(e, t) {
            var a = {
                pinterest_share: "pinterest",
                pinterest_pinit: "pinterest"
            }, i = null;
            return a[t] ? ((e || {}).passthrough || {})[t] ? i = e.passthrough[t] : ((e || {}).passthrough || {})[a[t]] && (i = e.passthrough[a[t]]) : i = ((e || {}).passthrough || {})[t], i ? "&passthrough=" + j.trim("object" == typeof i ? j.util.toKV(i) : i, 1) : ""
        }
        function s(e, t, a, i) {
            var n, s, o, c, d, l, u = j.trim, h = w, f = j.pub(), p = w._atw || {}, _ = a && a.url ? a.url: p.share && p.share.url ? p.share.url: h.addthis_url || h.location.href, g = function(e) {
                _ && "" != _ && (c = _.indexOf("#at" + e), c>-1 && (_ = _.substr(0, c)))
            };
            if (i)
                for (n in w.conf)
                    i[n] || (i[n] = w.conf[n]);
            else 
                i = w.conf || {};
            if (a)
                for (n in w.share)
                    a[n] || (a[n] = w.share[n]);
            else 
                a = w.share || {};
            if (j.rsu() && (a.dataUrl || (a.url = w.addthis_url), a.dataTitle || (a.title = w.addthis_title), _ = a.url), L.canonical&&!a.trackurl && a.imp_url&&!_ate.share.inBm() && (a.trackurl = L.canonical), f && "undefined" != f || (f = "unknown"), l = i.services_custom, g("pro"), g("opp"), g("cle"), g("clb"), g("abc"), g("_pco"), _.indexOf("addthis.com/static/r07/ab")>-1)
                for (_ = _.split("&"), c = 0; c < _.length; c++)
                    if (d = _[c].split("="), 2 == d.length && "url" == d[0]) {
                        _ = d[1];
                        break
                    }
            if (l instanceof Object && "0"in l)
                for (c in l)
                    if (l[c].code == e) {
                        l = l[c];
                        break
                    }
            var m = a.templates && a.templates[e] ? a.templates[e]: "", v = a.smd || j.smd, b = a.modules && a.modules[e] ? a.modules[e]: "", y = a.share_url_transforms || a.url_transforms || {}, k = a.track_url_transforms || a.url_transforms, x = y && y.shorten&&-1 === e.indexOf("pinterest") ? "string" == typeof y.shorten ? y.shorten: y.shorten[e] || y.shorten["default"] || "": "", N = "", O = i.product || h.addthis_product || "men-" + _ate.ver(), T = w.crs, S = "", A = j.track.gof(_), E = 2 == A.length ? A.shift().split("=").pop(): "", C = 2 == A.length ? A.pop(): "", I = i.data_track_clickback || i.data_track_linkback ||!f || "AddThis" == f || i.data_track_clickback!==!1 && _ate.ver() >= 250;
            if (_ate.ver() >= 300 && i.data_track_clickback===!1 && (I=!1), a.email_vars)
                for (n in a.email_vars)
                    S += ("" == S ? "" : "&") + _euc(n) + "=" + _euc(a.email_vars[n]);
            if (j.track.spc&&-1 == O.indexOf(j.track.spc) && (O += "," + j.track.spc), y && y.shorten && a.shorteners&&-1 == e.indexOf("pinterest"))
                for (n in a.shorteners)
                    for (s in a.shorteners[n])
                        N += (N.length ? "&" : "") + _euc(n + "." + s) + "=" + _euc(a.shorteners[n][s]);
            return _ = j.track.cof(_), _ = j.track.mgu(_, y, a, e), k && (a.trackurl = j.track.mgu(a.trackurl || _, k, a, e)), o = "pub=" + f + "&source=" + O + "&lng=" + (j.lng() || "xx") + "&s=" + e + (i.ui_508_compliant ? "&u508=1" : "") + (t ? "&h1=" + u((a.feed || a.url || "").replace("feed://", ""), 1) + "&t1=" : "&url=" + u(_, 1) + "&title=") + u(a.title || (h.addthis_title || "").replace(/AddThis\sSocial\sBookmarking\sSharing\sButton\sWidget/, ""), 1) + (t && a.userid ? "&fid=" + u(a.userid) : "") + (_ate.ver() < 200 ? "&logo=" + u(h.addthis_logo, 1) + "&logobg=" + u(h.addthis_logo_background, 1) + "&logocolor=" + u(h.addthis_logo_color, 1) : "") + "&ate=" + j.track.sta() + ("email" != e || _ate.ver() < 300 ? "&frommenu=1" : "") + (!w.addthis_ssh || T && addthis_ssh == T ||!(addthis_ssh == e || addthis_ssh.search(new RegExp("(?:^|,)(" + e + ")(?:$|,)"))>-1) ? "" : "&ips=1") + (T ? "&cr=" + (e == T ? 1 : 0) : "") + "&uid=" + _euc(j.uid && "x" != j.uid ? j.uid : j.util.cuid()) + (a.email_template ? "&email_template=" + _euc(a.email_template) : "") + (S ? "&email_vars=" + _euc(S) : "") + (x ? "&shortener=" + _euc("array" == typeof x ? x.join(",") : x) : "") + (x && N ? "&" + N : "") + r(a, e) + (a.description ? "&description=" + u(a.description, 1) : "") + (a.html ? "&html=" + u(a.html, 1) : a.content ? "&html=" + u(a.content, 1) : "") + (a.trackurl && a.trackurl != _ ? "&trackurl=" + u(a.trackurl, 1) : "") + (a.screenshot ? "&screenshot=" + u(a.screenshot, 1) : "") + (a.screenshot_secure ? "&screenshot_secure=" + u(a.screenshot_secure, 1) : "") + (a.swfurl ? "&swfurl=" + u(a.swfurl, 1) : "") + (a.swfurl_secure ? "&swfurl_secure=" + u(a.swfurl_secure, 1) : "") + (i.hdl ? "&hdl=1" : "") + (j.cb ? "&cb=" + j.cb : "") + (j.ufbl ? "&ufbl=1" : "") + (j.uud ? "&uud=1" : "") + (a.iframeurl ? "&iframeurl=" + u(a.iframeurl, 1) : "") + (a.width ? "&width=" + a.width : "") + (a.height ? "&height=" + a.height : "") + (i.data_track_p32 ? "&p32=" + i.data_track_p32 : "") + (I || _ate.track.ctp(i.product, i) ? "&ct=1" : "&ct=0") + ((I || _ate.track.ctp(i.product, i)) && _.indexOf("#")>-1 ? "&uct=1" : "") + (l && l.url ? "&acn=" + _euc(l.name) + "&acc=" + _euc(l.code) + "&acu=" + _euc(l.url) : "") + (v ? (v.rxi ? "&rxi=" + v.rxi : "") + (v.rsi ? "&rsi=" + v.rsi : "") + (v.gen ? "&gen=" + v.gen : "") : (E ? "&rsi=" + E : "") + (C ? "&gen=" + C : "")) + (a.xid ? "&xid=" + u(a.xid, 1) : "") + (m ? "&template=" + u(m, 1) : "") + (b ? "&module=" + u(b, 1) : "") + (i.ui_cobrand ? "&ui_cobrand=" + u(i.ui_cobrand, 1) : "") + ("email" == e && _ate.ver() >= 300 ? "&ui_email_to=" + u(i.ui_email_to, 1) + "&ui_email_from=" + u(i.ui_email_from, 1) + "&ui_email_note=" + u(i.ui_email_note, 1) : "") + (_ate.ver() < 300 ? (i.ui_header_color ? "&ui_header_color=" + u(i.ui_header_color, 1) : "") + (i.ui_header_background ? "&ui_header_background=" + u(i.ui_header_background, 1) : "") : "")
        }
        function o(e, t, a) {
            var i = e.xid;
            return t.data_track_clickback || t.data_track_linkback || _ate.track.ctp(t.product, t) ? j.track.gcc(i, (e.smd || j.smd || {}).gen || 0) + (a || "") : ""
        }
        function c(e, t, a, i, r, s) {
            var o, c, d = j.pub(), l = i || t.url || "", u = t.xid || j.util.cuid(), h = a.data_track_clickback || a.data_track_linkback ||!d || "AddThis" == d || a.data_track_clickback!==!1 && _ate.ver() >= 250;
            if (0 === l.toLowerCase().indexOf("http%3a%2f%2f") && (l = _duc(l)), r) {
                o = {};
                for (c in t)
                    o[c] = t[c];
                o.xid = u, setTimeout(function() {
                    (new Image).src = n("twitter" == e && s ? "tweet" : e, 0, o, a)
                }, 100)
            }
            return h ? j.track.cur(l, e, u) : l
        }
        function u(e, t, a) {
            var t = t || {}, i = e.share_url_transforms || e.url_transforms || {}, n = j.track.cof(j.track.mgu(e.url, i, e, "mailto")), r = e.title ? e.title: n;
            return "mailto:?body=" + _euc(c("mailto", e, t, n, a)) + "&subject=" + (_ate.bro.iph ? r : _euc(r))
        }
        function h(e) {
            return !(e.templates && e.templates.twitter || j.wlp && "http:" != j.wlp)
        }
        function f(e, t, a) {
            var i = w.open(e, t, a);
            return z.push(i), i
        }
        function p(e, t, a, i, n) {
            var r = t || 550, s = a || 450, o = screen.width, c = screen.height, d = Math.round(o / 2 - r / 2), l = 0;
            c > s && (l = Math.round(c / 2 - s / 2));
            var u = w.open(e, _ate.bro.msi ? "" : i || "addthis_share", "left=" + d + ",top=" + l + ",width=" + r + ",height=" + s + ",personalbar=no,toolbar=no,scrollbars=yes,location=yes,resizable=yes");
            return z.push(u), n ? u : !1
        }
        function _(e, t, a) {
            var i;
            return window.location.href.search(_atc.rsrcs.bookmark)>-1 ? window.location = n(e, 0, t, a) : "whatsapp" === e ? g(t, a) : (i = n(e, 0, t, a), z.push(w.open(i, "addthis_share"))), !1
        }
        function g(e, t) {
            if (_ate.bro.iph || _ate.bro.ipa) {
                var a = c("whatsapp", e, t, !1, !0);
                window.location = "whatsapp://send?text=" + (e.title ? encodeURIComponent(e.title) + "%20" : "") + encodeURIComponent(a)
            } else 
                t.ui_pane = "email", _ate.ao(d.body, "more", "", "", t, e)
        }
        function m(e) {
            var t = {
                twitter: 1,
                wordpress: 1,
                facebook: 1,
                hootsuite: 1,
                email: _ate.ver() >= 300,
                more: _ate.ver() >= 300,
                raiseyourvoice: 1,
                vk: 1,
                tumblr: 1
            };
            return t[e]
        }
        function v(e, t, a, i) {
            var n = {
                behance: "https://www.behance.net/%s",
                etsy: "https://www.etsy.com/shop/%s",
                disqus: "https://disqus.com/%s",
                googlebuzz: "http://www.google.com/profiles/%s",
                google_follow: "https://plus.google.com/%s",
                youtube: "http://www.youtube.com/" + (a && "channel" == a ? "channel/" : "user/") + "%s?sub_confirmation=1",
                facebook: "http://www.facebook.com/profile.php?id=%s",
                facebook_url: "http://www.facebook.com/%s",
                rss: "%s",
                flickr: "http://www.flickr.com/photos/%s",
                foursquare: "http://foursquare.com/%s",
                instagram: "http://instagram.com/%s",
                followgram: "http://followgram.me/%s",
                twitter: "http://twitter.com/intent/follow?source=followbutton&variant=1.0&screen_name=%s",
                linkedin: a ? "group" == a ? "http://www.linkedin.com/groups?gid=%s": "http://www.linkedin.com/company/%s": "http://www.linkedin.com/in/%s",
                pinterest: "http://www.pinterest.com/%s",
                tumblr: "http://%s.tumblr.com",
                vimeo: "http://www.vimeo.com/%s"
            };
            return "facebook" == e && isNaN(t) && (e = "facebook_url"), "twitter" == e && t == undefined && (t = (i || {})["tw:screen_name"]), t ? (n[e] || "").replace("%s", t) || null : null
        }
        function b(e, t, a, i, n, r, s, o) {
            var c = {
                wordpress: {
                    width: 720,
                    height: 570
                },
                linkedin: {
                    width: 600,
                    height: 400
                },
                twitter: {
                    width: 520,
                    height: 520
                },
                "default": {
                    width: 550,
                    height: 450
                }
            }, d = v(e, t, o);
            return N(e, 1, a, i), i.ui_use_same_window ? l.href = d : i.ui_use_different_full_window ? w.open(d, "_blank") : p(d, n || (c[e] || c["default"]).width, r || (c[e] || c["default"]).height, s), !1
        }
        function y(e, t, a, i, r, s) {
            var o = {
                wordpress: {
                    width: 720,
                    height: 570
                },
                linkedin: {
                    width: 600,
                    height: 475
                },
                facebook: {
                    width: 675,
                    height: 375
                },
                hootsuite: {
                    width: 800,
                    height: 500
                },
                email: _ate.ver() >= 300 ? {
                    width: 660,
                    height: 660
                }
                : {
                    width: 735,
                    height: 450
                },
                more: _ate.ver() >= 300 ? {
                    width: 660,
                    height: 716
                }
                : {
                    width: 735,
                    height: 450
                },
                vk: {
                    width: 720,
                    height: 290
                },
                raiseyourvoice: {
                    width: 480,
                    height: 635
                },
                "default": {
                    width: 550,
                    height: 450
                }
            }, c = n(e, 0, t, a);
            return a.ui_use_same_window ? l.href = c : "email" === e && _ate.bro.mob ? w.location.href = _ate.share.genieu(t, a, 1) : "more" !== e ? p(c, i || (o[e] || o["default"]).width, r || (o[e] || o["default"]).height, s) : _ate.share.imgOcw(p(c, i || (o[e] || o["default"]).width, r || (o[e] || o["default"]).height, s, !0)), !1
        }
        function k(e, t, a, i) {
            var r, s = e.share_url_transforms || e.url_transforms || {}, o = j.track.cof(j.track.mgu(e.url, s, e, "twitter"));
            return e.templates || (e.templates = {}), o = n("twitter", 0, e, t), r && (e.title = r), t.ui_use_same_window || i ? l.href = o : p(o, 550, 450, "twitter_tweet"), !1
        }
        function x(e, t, a, i, n) {
            var r = n ? "follow": e.indexOf("_comment")>-1 ? "comment": "share", s = {
                element: i || {},
                service: e || "unknown",
                url: n ? t.followUrl: t.trackurl || t.url
            };
            _ate.ed.fire("addthis.menu." + r, w.addthis || {}, s)
        }
        function N(e, t, a, i, r) {
            var s, o = {}, c = {};
            for (s in a)
                o[s] = a[s];
            for (s in i)
                c[s] = i[s];
            o.xid || (o.xid = j.util.cuid()), c.hdl = 1;
            var d = n(e, t, o, c);
            M.push(j.ajs(d, 1)), r || x(e, o, i, null, t)
        }
        function O(e) {
            _ate.util.each(e, function(e, t) {
                B[e] = t
            })
        }
        function T(e) {
            D.push(e)
        }
        function S() {
            _ate.util.each(D, function(e, t) {
                t()
            })
        }
        function A(e, t, a) {
            if (B[e])
                try {
                    return B[e](t, a, e), t && ((t.parentNode.className || "").indexOf("toolbox")>-1 && (t.parentNode.services = t.parentNode.services || {}, t.parentNode.services[e] = 1), - 1 == (t.className || "").indexOf("at300") && (t.className += " at300b")), !0
            } catch (i) {
                return !1
            }
            return !1
        }
        function E(e) {
            _ate.util.each(e, function(e, t) {
                P[e] = {}, _ate.util.each(t, function(t, a) {
                    P[e][t] = a
                })
            })
        }
        function C(e, t, a) {
            var i = function() {};
            return P[e] ? ((!P[e].require || P[e].require(e, t, a)) && _ate.util.each(P[e], function(a, n) {
                "_after" == a ? i = n : t[a] = function(a) {
                    return a = a || {}, a.el = t, a.service = e, n(a)
                }
            }), i(t), !0) : !1
        }
        function I(e, t, a) {
            return i() + "tellfriend.php?&fromname=aaa&fromemail=" + _euc(t.from) + "&frommenu=1&tofriend=" + _euc(t.to) + (e.email_template ? "&template=" + _euc(e.email_template) : "") + (t.vars ? "&vars=" + _euc(t.vars) : "") + "&lng=" + (j.lng() || "xx") + "&captcha_provider=nucaptcha&note=" + _euc(t.note) + "&" + s("email", null, null, a)
        }
        var j = e, z = [], M = [], L = a(), B = {}, P = {}, D = [];
        e.share = e.share || {}, e.util.extend(e.share, {
            auw: m,
            ocw: p,
            onw: f,
            caw: t,
            ftw: b,
            stw: y,
            siw: _,
            pts: k,
            pws: g,
            unt: h,
            uadd: s,
            genurl: n,
            geneurl: I,
            genieu: u,
            acb: c,
            gcp: o,
            gfu: v,
            svcurl: i,
            track: N,
            notify: x,
            links: L,
            register: O,
            registerListeners: E,
            sub: S,
            registerSubscriber: T,
            extern: A,
            externEvents: C
        })
    }(_ate, _ate.api, _ate), function(e) {
        function t() {
            return _atc.ltj && n() || i() && FB.XFBML && FB.XFBML.parse
        }
        function a() {
            if (_ === undefined)
                try {
                    var e = document.getElementsByTagName("html")[0];
                    if (e)
                        if (e.getAttribute && e.getAttribute("xmlns:fb"))
                            _=!0;
                        else if (_ate.bro.msi) {
                            var t = e.outerHTML.substr(0, e.outerHTML.indexOf(">"));
                            t.indexOf("xmlns:fb")>-1 && (_=!0)
                        }
            } catch (a) {
                _=!1
            }
            return _
        }
        function i() {
            return "object" == typeof w.FB && FB.Event && "function" == typeof FB.Event.subscribe
        }
        function n() {
            return !(w.FB_RequireFeatures || w.FB && (FB.Share || FB.Bootstrap))
        }
        function r(e, t) {
            var a = {}, i = v[t], n = addthis_config.data_ga_tracker || addthis_config.data_ga_property;
            for (k in addthis_share)
                a[k] = addthis_share[k];
            if (i)
                for (k in i)
                    a[k] = i[k];
            a.url = t, _ate.share.track(e, 0, a, addthis_config), n && _ate.gat(e, t, addthis_config, a)
        }
        function s() {
            - 1 != g.location.href.indexOf(_atr) || _ate.sub || y || (i() ? (y = 1, FB.Event.subscribe("message.send", function(e) {
                r("facebook_send", e)
            }), FB.Event.subscribe("edge.create", function(e) {
                m[e] || (r("facebook_like", e), m[e] = 1)
            }), FB.Event.subscribe("edge.remove", function(e) {
                m[e] && (r("facebook_unlike", e), m[e] = 0)
            }), FB.Event.subscribe("comment.create", function(e) {
                r("facebook_comment", e.href)
            }), FB.Event.subscribe("comment.remove", function(e) {
                r("facebook_uncomment", e.href)
            })) : w.fbAsyncInit&&!N && (3 > x && setTimeout(s, 3e3 + 2e3 * x++), N = 1))
        }
        function o(e, t) {
            var a = "fb-root", n = g.getElementById(a), r = w.fbAsyncInit, o=!1, c = function() {
                o=!0;
                for (var e = 0; e < b.length; e++)
                    FB.XFBML.parse(b[e])
            };
            if (b.push(e), i() && FB.XFBML && FB.XFBML.parse)
                s(), FB.XFBML.parse(e);
            else {
                if (!r && (n || (n = g.ce("div"), n.id = a, document.body.appendChild(n)), !r)) {
                    var d = g.createElement("script");
                    d.src = g.location.protocol + "//connect.facebook.net/" + (t || _ate.gfl(_ate.lng())) + "/all.js", d.async=!0, n.appendChild(d), r = function() {
                        for (var e = g.getElementsByTagName("meta"), t = null, a = 0; a < e.length; a++)
                            if ("fb:app_id" == e[a].property || "fb:app_id" == e[a].name) {
                                t = e[a].content;
                                break
                            }
                        FB.init({
                            appId: t ? t: A ? "140586622674265": "172525162793917",
                            status: !0,
                            cookie: !0
                        })
                    }
                }
                O && (O=!1, w.__orig__fbAsyncInit = r, w.fbAsyncInit = function() {
                    w.__orig__fbAsyncInit(), s(), document && "complete" === document.readyState ? c() : window.addEventListener ? (setTimeout(function() {
                        o || c()
                    }, 3e3), window.addEventListener("load", c, !1)) : c()
                })
            }
        }
        function c(e, t) {
            e.ost || _ate.bro.ie6 || (_ate.ufbl = 1, _ate.share.fb.ready() ? u("send", e, t) : (e.className = "", e.innerHTML = "<span></span>", e.style.width = e.style.height = "0px"), e.noh = e.ost = 1)
        }
        function d(e, t) {
            e.ost || _ate.bro.ie6 || (_ate.ufbl = 1, _ate.share.fb.ready() ? u("share", e, t) : (e.className = "", e.innerHTML = "<span></span>", e.style.width = e.style.height = "0px"), e.noh = e.ost = 1)
        }
        function u(e, t, a, i) {
            i || (i = _parseThirdPartyAttributes(t, "fb:" + e)), i.href = i.href || _ate.track.mgu(a.share.url, {
                defrag: 1
            }), e = "share" === e ? e + "-button" : e, t.innerHTML = '<div class="fb-' + e + '" data-ref="' + _ate.share.gcp(a.share, a.conf, "." + e).replace(",", "_") + '"></div>', _ate.util.each(i, function(a, i) {
                "share-button" === e && ("layout" === a && (a = "type"), "horizontal" === i ? i = "button_count" : "vertical" === i && (i = "box_count")), t.firstChild.setAttribute("data-" + a, i)
            }), !i || i.type || i.layout || t.firstChild.setAttribute("data-type", "box_count"), o(t)
        }
        function h(e, a) {
            if (!e.ost) {
                var i, n, r = _ate.api.ptpa(e, "fb:subscribe");
                _ate.util.isEmpty(r) && (r = _ate.api.ptpa(e, "fb:follow"));
                var s = r.layout || "button_count", o = {
                    standard: [450, r.show_faces ? 80: 35],
                    button_count: [90, 25],
                    box_count: [55, 65]
                }, c = r.width || (o[s] ? o[s][0] : 100), d = r.height || (o[s] ? o[s][1] : 25);
                if (passthrough = _ate.util.toKV(r), _ate.ufbl = 1, t()) {
                    r.layout === undefined && (r.layout = "button_count"), r.show_faces === undefined && (r.show_faces = "false"), r.action === undefined && (r.action = "subscribe"), r.width === undefined && (r.width = c), r.font === undefined && (r.font = "arial"), r.href === undefined && (r.href = _ate.track.mgu(a.share.url, {
                        defrag: 1
                    })), a.share.xid || (a.share.xid = _ate.util.cuid()), v[r.href] = {};
                    for (n in a.share)
                        v[r.href][n] = a.share[n];
                    u("follow", e, a, r)
                } else 
                    _ate.bro.msi ? (e.innerHTML = '<iframe frameborder="0" scrolling="no" allowTransparency="true" scrollbars="no"' + (_ate.bro.ie6 ? " src=\"javascript:''\"" : "") + "></iframe>", i = e.firstChild) : i = g.ce("iframe"), i.style.overflow = "hidden", i.style.scrolling = "no", i.style.scrollbars = "no", i.style.border = "none", i.style.borderWidth = "0px", i.style.width = c + "px", i.style.height = d + "px", i.src = "//www.facebook.com/plugins/subscribe.php?href=" + _euc(_ate.track.mgu(a.share.url, {
                        defrag: 1
                    })) + "&layout=button_count&show_faces=false&width=100&action=subscribe&font=arial&" + passthrough, _ate.bro.msi || e.appendChild(i);
                e.noh = e.ost = 1
            }
        }
        function f(e, a) {
            if (!e.ost) {
                var i, n, r, s = _ate.api.ptpa(e, "fb:like"), o = s.layout || "button_count", c = {
                    standard: [450, s.show_faces ? 80: 35],
                    button_count: [90, 25],
                    box_count: [55, 65]
                }, d = s.width || (c[o] ? c[o][0] : 100), l = s.height || (c[o] ? c[o][1] : 25);
                if (passthrough = _ate.util.toKV(s), _ate.ufbl = 1, t()) {
                    s.layout === undefined && (s.layout = "button_count"), s.show_faces === undefined && (s.show_faces = "false"), s.action === undefined && (s.action = "like"), s.width === undefined && (s.width = d), s.font === undefined && (s.font = "arial"), s.href === undefined && (r = _ate.util.clone(a.share.url_transforms || {}), r.defrag = 1, s.href = _ate.track.mgu(a.share.url, r)), s.send=!1, a.share.xid || (a.share.xid = _ate.util.cuid()), v[s.href] = {};
                    for (n in a.share)
                        v[s.href][n] = a.share[n];
                    u("like", e, a, s)
                } else 
                    _ate.bro.msi ? (e.innerHTML = '<iframe frameborder="0" scrolling="no" allowTransparency="true" scrollbars="no"' + (_ate.bro.ie6 ? " src=\"javascript:''\"" : "") + "></iframe>", i = e.firstChild) : i = g.ce("iframe"), i.style.overflow = "hidden", i.style.scrolling = "no", i.style.scrollbars = "no", i.style.border = "none", i.style.borderWidth = "0px", i.style.width = d + "px", i.style.height = l + "px", i.src = "//www.facebook.com/plugins/like.php?href=" + _euc(_ate.track.mgu(a.share.url, {
                        defrag: 1
                    })) + "&layout=button_count&show_faces=false&width=100&action=like&font=arial&" + passthrough, _ate.bro.msi || e.appendChild(i);
                e.noh = e.ost = 1
            }
        }
        function p(e, t, a, i) {
            var n, r = ((e.passthrough || {}).facebook || {}, {}), s = T ? E + "?u=" + _euc(_ate.share.acb("facebook", e, t)) + "&p[title]=" + _euc(e.title) + "&display=popup": S ? "http://www.facebook.com/connect/prompt_feed.php?message=" + _euc(e.title) + "%0A%0D" + _euc(_ate.share.acb("facebook", e, t)): A ? "http://www.facebook.com/dialog/feed?redirect_uri=" + _euc("http://s7.addthis.com/static/postshare/c00.html") + "&app_id=140586622674265&link=" + _euc(_ate.share.acb("facebook", e, t)) + "&name=" + _euc(e.title) + "&description=" + _euc(e.description || "") + "&display=popup": _ate.share.genurl("facebook", 0, e, t);
            if (T || S || A) {
                for (n in t)
                    r[n] = t[n];
                r.hdl = 1, _ate.share.track("facebook", 0, e, r, 1)
            }
            return t.ui_use_same_window || i ? l.href = s : _ate.share.ocw(s, 640, 375, "facebook"), !1
        }
        var _, g = document, m = {}, v = {}, b = [], y = 0, x = 0, N = 0, O=!0, T = 1, S = 0, A =- 1 != g.domain.search(/\.addthis\.com$/i) ? 1 : 0, E = _ate.bro.mob ? "http://m.facebook.com/sharer.php" : "http://www.facebook.com/sharer/sharer.php";
        e.share = e.share || {}, e.share.register({
            facebook_like: f,
            facebook_send: c,
            facebook_share: d,
            facebook_subscribe: h
        }), e.share.registerSubscriber(s), e.share.registerListeners({
            facebook: {
                _after: function(e) {
                    e.ins = 1, e.noh = 1
                },
                onclick: function(e) {
                    var t = e.el, a = e.service;
                    return 0 != t.ins && window.addthis.auth && window.addthis.auth.fbishare ? (window.addthis.auth.lockiframe[a]=!0, void window.addthis.auth.loadIframe(t, a, t.share, t.conf)) : _ate.share.fb.share(t.share, t.conf)
                },
                onmouseover: function(e) {
                    var t = e.el, a = e.service;
                    0 != t.ins && window.addthis.auth && window.addthis.auth.fbishare && (window.addthis.auth.keepiframe[a]++, window.addthis.auth.loadIframe(t, a, t.share, t.conf))
                },
                onmouseout: function(e) {
                    var t = e.el, a = e.service;
                    0 != t.ins && window.addthis.auth && window.addthis.auth.fbishare && (window.addthis.auth.keepiframe[a]--, setTimeout(function() {
                        window.addthis.auth.hideIframe(a)
                    }, 1e3))
                }
            }
        }), e.share.fb = {
            like: f,
            send: c,
            subs: h,
            has: i,
            ns: a,
            ready: t,
            compat: n,
            share: p,
            sub: s,
            load: o
        }
    }(_ate, _ate.api, _ate), function(e) {
        function t() {
            return window.getglue && window.getglue.on
        }
        function a(e, t) {
            var a = ((e || {}).passthrough || {}).objectId || "none";
            _ate.share.ocw("http://w.getglue.com/convo/checkins?type=conversation&objectId=" + _euc(a) + "&source=" + _euc(e.url)), setTimeout(function() {
                (new Image).src = genurl("getglue", 0, e, t)
            }, 100)
        }
        function i(e, a) {
            var i = ((s || {}).passthrough || {}).objectId;
            if (!i)
                return e.innerHTML = '<a class="glue-checkin-widget"></a>', void(window.console && console.log("Skipping Get Glue widget: no objectId defined"));
            if (!t()) {
                var n = document.createElement("script");
                n.src = "//widgets.getglue.com/checkin.js";
                var r = document.getElementsByTagName("script")[0]
            }
            var s = (_parseThirdPartyAttributes(e, "getglue"), a.share);
            r.parentNode.insertBefore(n, r), e.innerHTML = '<a class="glue-checkin-widget" href="http://getglue.com/' + i + '" data-type="horizontal">Checkin on Get Glue</a>'
        }
        function n(e) {
            if (!r) {
                var a = e ? e.share: addthis_share, i = e ? e.conf: addthis_config;
                t() ? (getglue.on("checkin", function() {
                    var e = {};
                    for (var t in a)
                        e[t] = a[t];
                    _ate.share.track("getglue", 0, e, i)
                }), r=!0) : 5 > s && setTimeout(function() {
                    n(e)
                }, 500 * s++)
            }
        }
        var r=!1, s = 0;
        e.share = e.share || {}, e.share.registerSubscriber(n), e.share.register({
            getglue_checkin: i
        }), e.share.getglue = {
            sub: n,
            ps: a,
            gg: i
        }
    }(_ate, _ate.api, _ate), function(e) {
        function t() {
            return window.gapi && window.gapi.plusone
        }
        function a() {
            if (t())
                return void(gapi && gapi.plusone && "[object Function]" === Object.prototype.toString.call(gapi.plusone.go) && gapi.plusone.go());
            if (!s) {
                s = 1;
                var e = new _ate.resource.Resource("plusoneapi", "//apis.google.com/js/plusone.js", t);
                e.addEventListener("load", function() {
                    a()
                }), e.load()
            }
        }
        function i(e) {
            var t = e ? e.share: addthis_share, a = e ? e.conf: addthis_config;
            window._at_plusonecallback = window._at_plusonecallback || function(e) {
                var i = {};
                for (var n in t)
                    i[n] = t[n];
                i.url = e.href, _ate.share.track("google_" + ("off" == e.state ? "un" : "") + "plusone", 0, i, a)
            }, window._at_pluscallback = window._at_pluscallback || function(e) {
                var i = {};
                for (var n in t)
                    i[n] = t[n];
                i.url = e.href, _ate.share.track("googleplus_counter", 0, i, a)
            }
        }
        function n(e, t, i) {
            if (!e.ost) {
                var n = "googleplus_counter" === i ? "plus": "plusone", r = _parseThirdPartyAttributes(e, "g:" + n), s = document.ce("g:" + n);
                _ate.gpl = _ate.gpl || {}, _ate.gpl.lang = _ate.gpl.lang || null, r.lang = _ate.gpl.lang = _ate.gpl.lang || ("undefined" == typeof r.lang ? null : r.lang), window.___gcfg = window.___gcfg || {}, window.___gcfg.lang = _ate.gpl.lang || r.lang || _ate.ggl((t.conf || {}).ui_language || window.addthis_language) || "en-US", r.href = t.share.url = r.href || _ate.track.mgu(t.share.url, {
                    defrag: 1
                }), "plusone" == n ? (r.size = r.size || (check32(e, !0) ? "standard" : "small"), r.callback = r.callback || "_at_" + n + "callback") : (r.href = _ate.share.acb("google_plusone_share", t.share, addthis_config), r.action = "share"), _ate.share.goog.sub(t), _ate.util.each(r, function(e, t) {
                    s.setAttribute(e, t)
                }), e.appendChild(s), e.noh = e.ost = 1, a()
            }
        }
        function r(e, t) {
            if (!e.ost) {
                e.title = "Follow on Google+";
                var i = _parseThirdPartyAttributes(e, "g:plusone");
                if (i.size = (i.size || "").toLowerCase(), document.head) {
                    var n = document.createElement("link");
                    n.setAttribute("href", i.href), n.setAttribute("rel", "publisher"), document.head.appendChild(n)
                }
                if (i.url = i.href = i.href || "", "badge" == i.size || "smallbadge" == i.size) {
                    var r = document.ce("g:plus");
                    _ate.gpl = _ate.gpl || {}, _ate.gpl.lang = _ate.gpl.lang || null, i.lang = _ate.gpl.lang = _ate.gpl.lang || ("undefined" == typeof i.lang ? null : i.lang), window.___gcfg = window.___gcfg || {}, window.___gcfg.lang = _ate.gpl.lang || i.lang || _ate.ggl((t.conf || {}).ui_language || window.addthis_language) || "en-US", _ate.util.each(i, function(e, t) {
                        r.setAttribute(e, t)
                    }), e.appendChild(r), e.noh = e.ost = 1, a()
                } else {
                    var s = "32";
                    "small" == i.size ? s = "16" : "large" == i.size && (s = "64");
                    var o = txt = txt2 = ieQ = "";
                    i.name && ("BackCompat" == document.compatMode && _ate.bro.msi && (ieQ = 'onclick="window.open(' + i.href + '?prsrc=3)"'), o = "cursor:default;display:inline-block;text-decoration:none;color:#333;font:13px/16px arial,sans-serif;" + ("large" == i.size ? "text-align:center;white-space:nowrap;" : ""), "large" == i.size ? txt2 = '<br/><span style="font-weight:bold;">' + i.name + "</span><br/><span> on Google+ </span>" : txt = '<span style="display:inline-block;font-weight:bold;vertical-align:top;margin-right:5px;' + ("medium" == i.size ? "margin-top:8px;" : "") + '">' + i.name + '</span><span style="display:inline-block;vertical-align:top; margin-right:' + ("medium" == i.size ? "15px;margin-top:8px;" : "13px;") + '">on</span>'), e.setAttribute("target", "_blank"), e.style.textDecoration = "none", e.style.cursor = "default", e.innerHTML = '<span style="' + o + '">' + txt + "<img " + ieQ + ' src="https://ssl.gstatic.com/images/icons/gplus-' + s + '.png" alt="' + e.title + '" style="border:0;width:' + s + "px;height:" + s + 'px;cursor:pointer;" onmouseover="this.style.opacity=0.8;this.style.filter=\'alpha(opacity=80)\';" onmouseout="this.style.opacity=1.0;this.style.filter=\'alpha(opacity=100)\';">' + txt2 + "</span>", e.noh = e.ost = 1, e.onclick = function(e) {
                        if (!e)
                            var e = window.event;
                        var t = e.originalTarget || e.relatedTarget || e.toElement || e.srcElement, a = "";
                        if (t) {
                            for (; "A" != t.nodeName;)
                                t = t.parentNode;
                            return a = ((t.attributes || {})["g:plusone:href"] || {}).value || window.location.href, w.open(a + "?prsrc=3"), _ate.share.track("google_plusone_badge", 1, i, config), !1
                        }
                    }
                }
                e.onmouseover = function() {
                    this.className = this.className.indexOf("at300bo")>-1 ? this.className : this.className.replace(/at300b/i, "at300bo")
                }, e.noh = e.ost = 1
            }
        }
        var s = 0;
        e.share = e.share || {}, e.share.register({
            google_plusone: n,
            googleplus_counter: n,
            google_plusone_badge: r
        }), e.share.registerSubscriber(i), e.share.registerListeners({
            google_plusone: {
                onclick: function() {
                    return !1
                }
            }
        }), e.share.goog = {
            plusone: n,
            badge: r,
            has: t,
            sub: i
        }
    }(_ate, _ate.api, _ate), function(e) {
        function t(e, t) {
            var a = function() {
                if ("undefined" == typeof window.Intent && "undefined" == typeof window.WebKitIntent ||!window.navigator || "undefined" == typeof window.navigator.startActivity && "undefined" == typeof window.navigator.webkitStartActivity)
                    return !1;
                if (!window.Intent || "undefined" != typeof window.Intent["native"]&&!window.Intent["native"])
                    return !0;
                if (_ate.bro.chr) {
                    var e = navigator.userAgent, t = /Chrome\/(.*)\./.exec(e);
                    if (t.length >= 1) {
                        var a = parseInt(t[1].substring(0, 2));
                        if (19 > a) {
                            var i = function() {
                                return "undefined" == typeof addthis_config?!1 : "undefined" == typeof addthis_config.webintents?!1 : addthis_config.webintents?!0 : !1
                            };
                            return i()
                        }
                    }
                }
                return !0
            };
            a() && (options.noevents=!0, e.onclick = function() {
                var e = window.Intent || window.WebKitIntent, a = new e("http://webintents.org/share", "text/uri-list", t.share.url);
                return "undefined" != typeof navigator.startActivity ? navigator.startActivity(a) : "undefined" != typeof navigator.webkitStartActivity && navigator.webkitStartActivity(a), _ate.share.track("intent_share_url", 0, t.share, t.conf), !1
            })
        }
        e.share = e.share || {}, e.share.register({
            intent_share_url: t
        }), e.share.registerListeners({
            intent_share_url: {}
        })
    }(_ate, _ate.api, _ate), function(e) {
        function t(e, t) {
            if (!e.ost) {
                var i, n = _parseThirdPartyAttributes(e, "pi:pinit"), r = _ate.util.clone(t.share);
                if (i = addthis_share && addthis_share.passthrough && addthis_share.passthrough.pinterest_share ? addthis_share.passthrough.pinterest_share : addthis_share && addthis_share.pinterest_share ? addthis_share.pinterest_share : addthis_share && addthis_share.passthrough ? addthis_share.passthrough : addthis_share ? addthis_share : {}, n.media || n.layout)
                    n.url = r.url = n.url || i.url || _ate.track.mgu(r.url, {
                        defrag: 1
                    }), n.url = _euc(_ate.track.mgu(r.url)), "horizontal" == n.layout ? (n.layout = "&layout=horizontal", n.width = "100px", n.height = "25px") : "vertical" == n.layout ? (n.layout = "&layout=vertical", n.width = "49px", n.height = "59px") : (n.layout = "", n.width = "40px", n.height = "25px"), e.innerHTML = '<iframe frameborder="0" role="presentation" scrolling="no" allowTransparency="true" scrollbars="no"' + (_ate.bro.ie6 ? " src=\"javascript:''\"" : "") + ' style="width:' + n.width + "; height:" + n.height + ';"></iframe>', pinitButton = e.firstChild, t.conf.pubid || (t.conf.pubid = addthis_config.pubid || _ate.pub()), n.description = r.description = n.description || i.description || i.title || (addthis_share || {}).title || "", pinitButton.src = _atc.rsrcs.pinit + (_ate.bro.ie6 || _ate.bro.ie7 ? "?" : "#") + "url=" + _euc(n.url) + "&media=" + _euc(n.media || i.media || "") + "&description=" + _euc(n.description) + n.layout + "&ats=" + _euc(_ate.util.rtoKV(r)) + "&atc=" + _euc(_ate.util.rtoKV(addthis_config)), _ate.ed.addEventListener("addthis.pinterest.image", function() {
                        w.addthis_share || (w.addthis_share = {}), w.addthis_share.passthrough || (w.addthis_share.passthrough = {}), w.addthis_share.passthrough.pinterest_share || (w.addthis_share.passthrough.pinterest_share = {});
                        var e = w.addthis_share.passthrough.pinterest_share;
                        e.pi_media = n.media, e.pi_media_desc = n.description, _ate.share.img()
                    });
                else {
                    {
                        a.createElement("img")
                    }
                    e.innerHTML = '<span class="at_PinItButton"></span>', e.onclick = function() {
                        w.addthis_share || (w.addthis_share = {}), w.addthis_share.passthrough || (w.addthis_share.passthrough = {}), w.addthis_share.passthrough.pinterest_share || (w.addthis_share.passthrough.pinterest_share = {});
                        var e = w.addthis_share.passthrough.pinterest_share;
                        return e.pi_media = n.media, e.pi_media_desc = n.description, _ate.share.img(), !1
                    }
                }
                e.noh = e.ost = 1
            }
        }
        var a = document;
        e.share = e.share || {}, e.share.register({
            pinterest: t,
            pinterest_count: t,
            pinterest_pinit: t
        }), e.share.registerListeners({
            pinterest_share: {
                onclick: function(e) {
                    var t = e.el;
                    if (_atc.ver >= 300) {
                        var a = _ate.util.clone(t.config || addthis_config);
                        a.ui_pane = "image", a.image_service = "pinterest_share", a.image_header = "Pin It on Pinterest", window.addthis.menu(t, a, t.share || addthis_share)
                    } else 
                        _ate.share.imgVer("pinterest_share");
                    return !1
                }
            }
        }), e.share.pinterest = {
            pinit: t
        }
    }(_ate, _ate.api, _ate), function(e, t, a, i) {
        function n(e, t) {
            if (!e.ost) {
                var a = (_ate.util.clone(t.share), {
                    type: "webpage",
                    url: t.share.url,
                    title: t.share.title,
                    style: "number"
                }), i = _parseThirdPartyAttributes(e, "wb:like"), n = r(), d = o(i, n), l = o(a, n);
                meta_tags = _ate.util.extend(l, d), wb_elem = c.createElement("wb:like"), _ate.bro.ie6 || _ate.bro.ie7 || _ate.bro.ie8 || _ate.bro.msi && "BackCompat" == document.compatMode ? e.parentNode.insertBefore(wb_elem, e.nextSibling) : e.appendChild(wb_elem), s(wb_elem, meta_tags), _ate.ajs("//tjs.sjs.sinajs.cn/open/api/js/wb.js", 1), t.conf.pubid || (t.conf.pubid = addthis_config.pubid || _ate.pub()), e.onclick = function() {
                    _ate.share.track("sinaweibo_like", 0, t.share, t.conf)
                }, e.noh = e.ost = 1
            }
        }
        function r() {
            for (var e, t, a, i, n = c.getElementsByTagName("meta"), r = {}, s = 0; s < n.length; s++)
                i = n[s], e = i.getAttribute("property"), t = i.getAttribute("name"), a = i.getAttribute("content"), e&&-1 !== e.indexOf("og:") && a ? r[e.replace("og:", "")] = a : e&&-1 !== e.indexOf("weibo:", "") && a ? r[e.replace("weibo:", "")] = a : t&&-1 !== t.indexOf("weibo:") && a && (r[t.replace("weibo:", "")] = a);
            return r
        }
        function s(e, t) {
            var a, i, n;
            for (var i in t)
                t.hasOwnProperty(i) && (a = t[i], a && ("style" === i && "full" !== a ? e.setAttribute("type", a) : "skin" === i || "language" === i ? e.setAttribute(i, a) : (n = document.createElement("meta"), n.setAttribute("name", "weibo:" + i), n.setAttribute("content", a), document.getElementsByTagName("head")[0].appendChild(n))))
        }
        function o(e, t) {
            var a, n = {};
            for (a in e)
                e.hasOwnProperty(a) && t[a] === i && (n[a] = e[a]);
            return n
        }
        var c = document;
        e.share = e.share || {}, e.share.register({
            sinaweibo_like: n
        }), e.share.sinaweibo = {
            like: n
        }
    }(_ate, _ate.api, _ate), function(e) {
        e.share = e.share || {}, e.share.registerListeners({
            thefancy: {
                onclick: function(e) {
                    var t = e.el;
                    if (_ate.ver() >= 300) {
                        var a = _ate.util.clone(t.config || addthis_config);
                        a.ui_pane = "image", a.image_service = "thefancy", a.image_header = "Fancy It", window.addthis.menu(t, a, t.share || addthis_share)
                    } else 
                        _ate.share.imgVer("thefancy");
                    return !1
                }
            }
        })
    }(_ate, _ate.api, _ate), function(e) {
        function t() {
            return window.twttr && window.twttr.events
        }
        function a() {
            return t() && 1 == o ? (i(), void(o = d = 0)) : (o || (_ate.ajs("//platform.twitter.com/widgets.js", 1, null, null, null, !0), o = 1), void(3 > d && setTimeout(a, 3e3 + 2e3 * d++)))
        }
        function i() {
            window.twttr&&!c && twttr.events && (c = 1, twttr.events.bind("click", function(e) {
                if ("tweetcount" != e.region) {
                    if (((e.target || {}).conf || {}).follow)
                        return !1;
                    var t = e.target.parentNode && e.target.parentNode.share ? e.target.parentNode.share: {}, a = t.url || e.target.baseURI, i = t.title || addthis_share.title, n = {};
                    for (var r in addthis_share)
                        n[r] = addthis_share[r];
                    for (var r in t)
                        n[r] = t[r];
                    n.url = a, i && (n.title = i);
                    var s = "follow" == e.region || "following" == e.region?!1 : !0;
                    _ate.share.track(s ? "tweet" : "twitter_follow_native", s ? 0 : 1, n, addthis_config)
                }
            }))
        }
        function n(e, t) {
            if (!e.ost) {
                var i, n, r = _parseThirdPartyAttributes(e, "tw"), o = t.share, c = r.width || 56, d = r.height || 20, l = "";
                t.share.url_transforms = t.share.url_transforms || {}, t.share.url_transforms.defrag = 1;
                var u = _ate.util.clone(t.share), h = _ate.bro.msi && "BackCompat" == s.compatMode || t.conf.ui_use_tweet_iframe || "bitly" == (t.share.url_transforms.shorten || {}).twitter?!0 : !1;
                u.url = "undefined" != typeof r.url ? r.url : r.url = _ate.track.mgu(u.url || (addthis_share || {}).url, u.url_transforms, u, "twitter"), r.counturl || (r.counturl = h ? r.url.replace(/=/g, "%253D") : r.url), - 1 == u.url.search(/\.+.*(\/|\?)/) && (u.url += "/"), r.url = _ate.share.acb("twitter", u, addthis_config), r.count = r.count || "horizontal", o.passthrough = o.passthrough || {};
                var f = o.passthrough.twitter || {};
                if (t.text = r.text = r.text || (t.share.title == s.title ? f.text : t.share.title) || "", t.related = r.related = r.related || f.related || "", t.hashtags = r.hashtags = r.hashtags || f.hashtags || "", (r.via || f.via || t.text.match(/via\s+@[a-zA-Z0-9_\.]+/i)) && (t.via = r.via = r.via || f.via || (t.text.match(/via\s+@[a-zA-Z0-9_\.]+/i) ? t.text.match(/via\s+@[a-zA-Z0-9_\.]+/i).split("@")[1] : "")), l = _ate.util.rtoKV(o, "#@!"), "vertical" === r.count ? (d = 62, r.height = r.height || d) : "horizontal" === r.count && (c = 110, r.width = r.width || c), r.width && (c = r.width), r.height && (d = r.height), i = _ate.util.toKV(r, "#@!"), h)
                    e.innerHTML = '<iframe frameborder="0" role="presentation" scrolling="no" allowTransparency="true" scrollbars="no"' + (_ate.bro.ie6 ? " src=\"javascript:''\"" : "") + ' style="width:' + c + "px; height:" + d + 'px;"></iframe>', n = e.firstChild, t.conf.pubid || (t.conf.pubid = addthis_config.pubid || _ate.pub()), n.src = _atc.rsrcs.tweet + (_ate.bro.ie6 || _ate.bro.ie7 ? "?" : "#") + "href=" + _euc(r.url) + "&dr=" + _euc(_ate.dr) + "&conf=" + _euc(_ate.util.toKV(t.conf)) + "&share=" + _euc(l) + "&tw=" + _euc(i);
                else {
                    {
                        (o.templates || {}).twitter || ""
                    }
                    r.text || (r.text = "" == o.title ? "" : o.title + ":");
                    var p = s.ce("a");
                    p.href = "http://twitter.com/share", p.className = "twitter-share-button", p.innerHTML = "Tweet";
                    for (var _ in r)
                        r.hasOwnProperty(_) && p.setAttribute("data-" + _, r[_]);
                    e.appendChild(p), t.conf.pubid || (t.conf.pubid = addthis_config.pubid || _ate.pub()), a(e)
                }
                e.noh = e.ost = 1
            }
        }
        function r(e, t) {
            var i = _parseThirdPartyAttributes(e, "tf"), n = _parseThirdPartyAttributes(e, "tw"), r = document.ce("a");
            i.screen_name = n.screen_name || i.screen_name || "addthis", r.href = "http://twitter.com/" + i.screen_name, r.className = "twitter-follow-button", r.innerHTML = "Follow @" + i.screen_name, _ate.util.each(i, function(e, t) {
                r.setAttribute("data-" + e, t)
            }), _ate.util.each(n, function(e, t) {
                r.setAttribute("data-" + e, t)
            }), e.ost = 1, e.appendChild(r), t.conf.pubid || (t.conf.pubid = addthis_config.pubid || _ate.pub()), a(e)
        }
        var s = document, o = 0, c = 0, d = 0;
        e.share = e.share || {}, e.share.register({
            tweet: n,
            twitter_follow_native: r
        }), e.share.registerSubscriber(i), e.share.registerListeners({
            twitter: {
                _after: function(e) {
                    e.ins = 1, e.noh = 1
                },
                onclick: function(e) {
                    var t = e.el, a = e.service;
                    return 0 != t.ins && window.addthis.auth && window.addthis.auth.twishare ? (window.addthis.auth.lockiframe[a]=!0, void window.addthis.auth.loadIframe(t, a, t.share, t.conf)) : _ate.share.pts(t.share, t.conf)
                },
                onmouseover: function(e) {
                    var t = e.el, a = e.service;
                    0 != t.ins && window.addthis.auth && window.addthis.auth.twishare && (window.addthis.auth.keepiframe[a]++, window.addthis.auth.loadIframe(t, a, t.share, t.conf))
                },
                onmouseout: function(e) {
                    var t = e.el, a = e.service;
                    0 != t.ins && window.addthis.auth && window.addthis.auth.twishare && (window.addthis.auth.keepiframe[a]--, setTimeout(function() {
                        window.addthis.auth.hideIframe(a)
                    }, 1e3))
                }
            }
        }), e.share.twitter = {
            tweet: n,
            follow: r,
            sub: i
        }
    }(_ate, _ate.api, _ate), function(e, t) {
        function a(e, t) {
            if (!e.ost&&!_ate.bro.ie6) {
                var a = _parseThirdPartyAttributes(e, "su:badge"), i = a.style || "1", n = t.share.url = a.href || _ate.track.mgu(t.share.url, {
                    defrag: 1
                }), r = a.height || "20px", s = a.width || "75px";
                "5" == i ? r = a.height || "60px" : "6" == i && (r = a.height || "31px"), e.innerHTML = '<iframe src="http' + (_ate.ssl ? "s" : "") + '://www.stumbleupon.com/badge/embed/{{STYLE}}/?url={{URL}}" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:{{WIDTH}}; height:{{HEIGHT}};" allowtransparency="true"></iframe>'.replace("{{STYLE}}", i).replace("{{URL}}", _euc(n)).replace("{{HEIGHT}}", r).replace("{{WIDTH}}", s), e.noh = e.ost = 1
            }
        }
        function i(e, a) {
            if (!e.ost) {
                var i = d.ce("div"), n = "http://userapi.com/js/api/openapi.js?52", r = a.share.url.replace(/#.*$/, ""), s = a.share.title, o = a.share.description, c = _parseThirdPartyAttributes(e, "vk"), l = c && (c.apiId || c.apiid), u = {
                    type: "full",
                    pageDescription: o,
                    pageTitle: s,
                    pageUrl: r
                }, h = function() {
                    return w.VK && w.VK.init && w.VK.Widgets && w.VK.Widgets.Like
                }, f = function(e) {
                    VK.init({
                        apiId: l,
                        onlyWidgets: !0
                    }), VK.Widgets.Like(e.id, e.configuration)
                }, p = _ate.util.bind(function() {
                    f(this)
                }, i);
                l && (i.id = "addthis_vk_like" + _ate.util.cuid(), i.configuration = u, e.appendChild(i), h() ? f(i, u) : (t._vkr || (t._vkr = new _ate.resource.Resource("vklike", n, h), t._vkr.load()), t._vkr.addEventListener("load", p)), e.noh = e.ost = 1)
            }
        }
        function n(e) {
            if (!e.ost) {
                var t = _parseThirdPartyAttributes(e, "4sq"), a = document.createElement("a");
                a.href = "https://foursquare.com/intent/venue.html", a.className = "fourSq-widget", t["data-variant"] && a.setAttribute("data-variant", t["data-variant"]), e.appendChild(a), _ate.ajs("//platform.foursquare.com/js/widgets.js", 1), e.noh = e.ost = 1
            }
        }
        function r(e, t) {
            if (!e.ost) {
                var a = _parseThirdPartyAttributes(e, "rk:healthy"), i = d.createElement("div"), n = new _ate.resource.Resource("runkeeperjs", "//runkeeper.com/static/js/healthy/rkHealthyButton.js");
                i.className = "rk-healthy", i.setAttribute("data-healthyUrl", a.url || t.share.url || window.location.href), i.setAttribute("data-buttonType", a.type || "normal"), e.appendChild(i), e.noh = e.ost = 1, n.load()
            }
        }
        function s(e, t) {
            if (!e.ost) {
                var a = _parseThirdPartyAttributes(e, "svejo:"), i = document.ce("div"), n = new _ate.resource.Resource("svejojs", "//svejo.net/button.js", function() {
                    return !!window.load_svejo_buttons
                });
                n.addEventListener("load", function() {
                    window.load_svejo_buttons()
                }), i.className = "svejo-button", a.href = t.share.url = a.href || _ate.track.mgu(t.share.url, {
                    defrag: 1
                }), a.size = a.size || (check32(e, !0) ? "standard" : "compact"), _ate.util.each(a, function(e, t) {
                    i.setAttribute("data-" + e, t)
                }), e.appendChild(i), e.noh = e.ost = 1, n.load()
            }
        }
        function o(e, t) {
            if (!e.ost) {
                var a, i, n = _parseThirdPartyAttributes(e, "li"), r = t.share, s = n.width || 100, o = n.height || 18, c = "";
                n.counter || (n.counter = "horizontal"), r.passthrough || (r.passthrough = {}), r.passthrough.linkedin = _ate.util.toKV(n), r.title && (r.title = _euc(r.title)), c = _ate.util.rtoKV(r), "top" === n.counter ? (o = 55, s = 57, n.height || (n.height = o), n.width || (n.width = s)) : "right" === n.counter ? (s = 100, n.width || (n.width = s)) : "none" === n.counter && (s = 57, n.width || (n.width = s)), n.width && (s = n.width), n.height && (o = n.height), a = _ate.util.toKV(n), e.innerHTML = '<iframe frameborder="0" role="presentation" scrolling="no" allowTransparency="true" scrollbars="no"' + (_ate.bro.ie6 ? " src=\"javascript:''\"" : "") + ' style="width:' + s + "px; height:" + o + 'px;"></iframe>', i = e.firstChild, t.conf.pubid || (t.conf.pubid = addthis_config.pubid || _ate.pub()), i.src = _atc.rsrcs.linkedin + (_ate.bro.ie6 || _ate.bro.ie7 ? "?" : "#") + "href=" + _euc(t.share.url) + "&dr=" + _euc(_ate.dr) + "&conf=" + _euc(_ate.util.toKV(t.conf)) + "&share=" + _euc(c) + "&li=" + _euc(a), e.noh = e.ost = 1
            }
        }
        function c(e, t) {
            if ( - 1 != e.className.indexOf("chiclet_style"))
                throw new Error("just do a chiclet");
            if (!e.ost) {
                var a = _parseThirdPartyAttributes(e, "tm"), i = 50, n = 61;
                passthrough = _ate.util.toKV(a), "compact" === a.style && (i = 95, n = 25), e.innerHTML = '<iframe frameborder="0" width="' + i + '" height="' + n + '" scrolling="no" allowTransparency="true" scrollbars="no"' + (_ate.bro.ie6 ? " src=\"javascript:''\"" : "") + "></iframe>";
                var r = e.firstChild;
                r.src = "//api.tweetmeme.com/button.js?url=" + _euc(t.share.url) + "&" + passthrough, e.noh = e.ost = 1
            }
        }
        var d = document;
        e.share = e.share || {}, e.share.register({
            foursquare: n,
            svejo_counter: s,
            linkedin_counter: o,
            runkeeper_healthy: r,
            stumbleupon_badge: a,
            tweetmeme: c,
            vk_like: i
        }), e.share.registerListeners({
            more: {
                require: function(e, t) {
                    return !t.noh && _ate.ver() >= 300&&!_ate.bro.iph&&!_ate.bro.wph&&!_ate.bro.dro
                },
                onclick: function(e) {
                    var t = e.el || {};
                    return window.addthis.menu(t, t.conf, t.share), !1
                }
            },
            email: {
                require: function(e, t) {
                    return !t.noh && _ate.ver() >= 300&&!_ate.bro.iph&&!_ate.bro.wph&&!_ate.bro.dro
                },
                onclick: function(e) {
                    var t = e.el || {}, a = e.service, i = _ate.util.clone(t.conf);
                    return i.ui_pane = a, _ate.bro.mob ? window.location.href = _ate.share.genieu(t.share, t.conf, 1) : - 1 === document.location.href.search(/bookmark\.php/) ? window.addthis.menu(t, i, t.share) : window.location = _ate.share.genurl(a, 0, t.share, t.conf), !1
                }
            },
            foursquare: {
                onclick: function(e) {
                    var t = e.el || {}, a = e.service;
                    return _ate.share.track(a, 1, t.share, t.conf), !1
                }
            },
            link: {
                onclick: function(e) {
                    var t = e.el || {}, a = (e.service, _euc((t.share || {}).url || addthis_share.url));
                    if (_ate.ver() >= 300) {
                        var i = _ate.util.clone(t.config || addthis_config);
                        i.ui_pane = "link", window.addthis.menu(t, i, t.share || addthis_share)
                    } else 
                        addthis_open(document.body, "link", a), document.getElementById("at16p") && (document.getElementById("at16p").style.display = "block"), document.getElementById("at15s") && (document.getElementById("at15s").style.display = "none");
                    return !1
                }
            }
        })
    }(_ate, _ate.api, _ate), function(e, t) {
        function a() {
            try {
                return _ate.ver() >= 300?-1 != l.href.search(/bookmark\d+\.html/i) : - 1 != l.href.search(/addthis\.com\/static\/r07\/bookmark\d+\.html/i)
            } catch (e) {
                return 0
            }
        }
        function i(i, s, o) {
            var i = "undefined" == typeof i ? "pinterest_share": i, l = d.getElementById("atImgBox_" + i), f = d.getElementById("at16pccImg"), p = u[i] || u.pinterest_share, _ =- 1 !== i.indexOf("pinterest")?!0 : !1;
            if (s = a() ? s || w.addthis_media_msg : s, l&&!s)
                a() ? (n("main"), n("filter"), n("details"), l.style.display = "block") : (l.style.display = "block", f && (f.style.height = "100%"));
            else {
                var g = _ate.util.gebcn(h, "DIV", "atPinWin", !0, !0);
                for (var m in g)
                    g[m].style && (g[m].style.display = "none");
                var v, b = d.getElementById("atImgBox_" + i) || d.createElement("div"), y = w.addthis_media_msg || null, k = y || s || (r() || "").split(";"), x = new Array, N = (new Array, d.createElement("div")), O = d.createElement("div"), T = d.createElement("span"), S = d.createElement("span"), A = ((((w.addthis_share_msg || w.addthis_share || {}).passthrough || {}).pinterest_share || {}).media, a() ? "3" : ""), E = a() ? "15": 0;
                - 1 != (b.innerHTML || "").search(/at3/) && (b.innerHTML = ""), _ate.ver() >= 300 && a() && y && (s = y), o && k.push(o);
                for (var C in k)
                    if ("function" == typeof k[C].split) {
                        var I = (k[C] || "").split("!|");
                        I[0] && "undefined" != typeof I[0] && (_ && I.length > 2 && "?" !== I[1] && "?" !== I[2] && parseInt(I[1], 10) * parseInt(I[2], 10) < 2e4 || x.push({
                            src: unescape(I[0]),
                            offsetHeight: I[1],
                            offsetWidth: I[2],
                            alt: I[3],
                            og: I[4]
                        }))
                    }
                !f&&!s && _ate.ver() < 300 ? (f = d.createElement("div"), f.id = "at16pccImg", d.body.appendChild(f), _ate.bro.msi && "backcompat" == d.compatMode.toLowerCase() && (f.style.position = "absolute")) : f && f.style && (f.style.height = "100%"), N.className = "atPinHdr", T.innerHTML = '<span style="cursor:default" class="atImgIco at300bs at15nc at15t_' + i + '"></span><span class="atImgMsg">' + p.img_header + "</span>", T.className = "atPinHdrMsg", N.appendChild(T), S.innerHTML = "X", S.className = "atPinClose", S.onclick = function() {
                    d.getElementById("atImgBox_" + i).style.display = "none", f.style.height = "0"
                }, N.appendChild(S), b.appendChild(N);
                var j = 0, z = {};
                for (var C in x)
                    if (v = x[C], v && "undefined" != typeof v.src) {
                        var M = d.createElement("img"), L = d.createElement("span"), B = d.createElement("span"), P = d.createElement("span"), D = d.createElement("div"), R = 4;
                        M.alt = M.title = v.alt, _ate.ver() >= 300 && (D.className = "atImgActBtn  at300bs at15nc at15t_" + i), D.style.display = "none", D.onmouseover = function() {
                            (this.style || {}).opacity = "1"
                        }, M.src = v.src, j++, z = v, isNaN(v.offsetHeight) || isNaN(v.offsetWidth) ? M.height = 200 - E : (R = Math.min(v.offsetHeight / (205 - E), v.offsetWidth / (205 - E)), M.height = v.offsetHeight / R, M.width = v.offsetWidth / R, M.style.marginTop = M.height > 202 - E?-(M.height - (200 - E)) / 2 + "px" : "0px", M.style.marginLeft = M.width > 202 - E?-(M.width - (200 - E)) / 2 + "px" : "0px"), P.innerHTML = v.og ? "Preferred Image" : v.offsetHeight + " x " + v.offsetWidth, B.className = "atImgSpanInner", L.className = "at" + A + "ImgSpanOuter addthis_32x32_style", P.className = "atImgSpanSize", B.appendChild(M), B.appendChild(D), L.appendChild(B), L.appendChild(P), L.onmouseover = function() {
                            this.getElementsByTagName("div")[0].style.display = "block", this.getElementsByTagName("img")[0].style.opacity = "0.4", this.getElementsByTagName("img")[0].style.filter = "alpha(opacity=40)"
                        }, L.onmouseout = function() {
                            this.getElementsByTagName("div")[0].style.display = "none", this.getElementsByTagName("img")[0].style.opacity = "1", this.getElementsByTagName("img")[0].style.filter = "alpha(opacity=100)"
                        }, M.onclick = D.onclick = function() {
                            var a = _ate.util.clone(s ? addthis_share_msg : t.share || w.addthis_share || {});
                            return t.config = t.config || w.addthis_config || {}, a.passthrough = a.passthrough || {}, a.passthrough.pinterest_share = {
                                media: this.parentNode.getElementsByTagName("img")[0].src,
                                description: this.title || this.alt || a.description || a.title || this.parentNode.getElementsByTagName("img")[0].src.split("/").pop() || ""
                            }, s ? (a.url = _euc(a.url), void(_ate.ver() >= 300 ? (_ate.share.track(_ ? "pinterest_share" : i, 0, a, addthis_config, this), c({
                                windowUrl: p.img_base_url + "?" + p.img_param + _euc(a.passthrough.pinterest_share.media) + "&url=" + a.url + "&description=" + _euc(a.passthrough.pinterest_share.description) + p.ctype,
                                width: p.windowProps.width,
                                height: p.windowProps.height
                            }, p.img_service)) : w.location = e.share.genurl(i, 0, a, t.config))) : (a.url = _euc(a.url), _ate.share.track(_ ? "pinterest_share" : i, 0, w.addthis_share, w.addthis_config, this), c({
                                windowUrl: p.img_base_url + "?" + p.img_param + _euc(a.passthrough.pinterest_share.media) + "&url=" + a.url + "&description=" + _euc(a.passthrough.pinterest_share.description) + p.ctype,
                                width: p.windowProps.width,
                                height: p.windowProps.height
                            }, p.img_service), d.getElementById("atImgBox_" + i).style.display = "none", f.style.height = "0", !1)
                        }, _ate.bro.msi && "backcompat" == document.compatMode.toLowerCase() && (L.style.margin = "5px"), O.appendChild(L)
                    }
                if (0 == j) {
                    var V = d.createElement("span");
                    V.className = "atNoImg", V.innerHTML = "There are no valid images to share.", O.appendChild(V)
                }
                if (1 == j&&!a()) {
                    var H = _ate.util.clone(a() ? addthis_share_msg : t.share || w.addthis_share || {});
                    return H.url = _euc(H.url), t.config = t.config || addthis_config || {}, H.passthrough = H.passthrough || {}, H.passthrough.pinterest_share = {
                        media: z.src,
                        description: H.title || z.src.split("/").pop() || ""
                    }, _ate.ver() >= 300 && _ate.share.inBm() ? (_ate.share.notify(_ ? "pinterest_share" : i, H, addthis_config_msg, this), c({
                        windowUrl: p.img_base_url + "?" + p.img_param + _euc(H.passthrough.pinterest_share.media) + "&url=" + H.url + "&description=" + _euc(H.passthrough.pinterest_share.description) + p.ctype,
                        width: p.windowProps.width,
                        height: p.windowProps.height
                    }, p.img_service), !1) : (c({
                        windowUrl: p.img_base_url + "?" + p.img_param + _euc(H.passthrough.pinterest_share.media) + "&url=" + H.url + "&description=" + _euc(H.passthrough.pinterest_share.description) + p.ctype,
                        width: p.windowProps.width,
                        height: p.windowProps.height
                    }, p.img_service), ((d.getElementById("atImgBox_" + i) || {}).style || {}).display = "none", _ate.ver() < 300 && (f.style.height = "0"), !1)
                }
                if (_ate.ver() >= 300&&!a()) {
                    var U = _ate.util.clone(w.addthis_config);
                    return U.ui_pane = "image", U.image_service = _ ? "pinterest" : i, U.image_header = p.img_header, void((e.menu || {}).open ? e.menu.open(_ate.maf && _ate.maf.sib, U, w.addthis_share) : w.addthis.menu(_ate.maf && _ate.maf.sib, U, w.addthis_share))
                }
                s && (O.lastChild.style.marginBottom = "40px"), b.appendChild(O), a() ? (b.className = b.id = "atPinWin", b.style.display = "block", O.className = "at" + A + "PinWinMn", N.style.display = "none", h.style.margin = "0px", S.style.display = "none", n("filter"), n("main"), n("details")) : ((_ate.bro.msi && "backcompat" == document.compatMode.toLowerCase() || _ate.bro.ie6) && (b.style.position = "absolute"), b.className = "atPinBox", O.className = "atPinMn", N.className = "atPinHdr"), b.id = "atImgBox_" + i, s ? "undefined" != typeof jQuery ? (b.style.display = "none", d.body.appendChild(b), $(b).fadeIn()) : d.body.appendChild(b) : a() || (f.appendChild(b), f.onclick = function(e) {
                    if (!e)
                        var e = w.event || {};
                    if ("at16pccImg" == (e.target || {}).id || "at16pccImg" == (e.srcElement || {}).id) {
                        var t = _ate.util.gebcn(h, "DIV", "atPinBox", !0, !0);
                        for (var a in t)
                            t[a].style && (t[a].style.display = "none");
                        f.style.height = "0"
                    }
                })
            }
        }
        function n(e) {
            "undefined" == typeof jQuery ? ((d.getElementById(e) || {}).style || {}).display = "none" : $("#" + e).fadeOut()
        }
        function r(e, t, a, i) {
            var n, r = "", s = new Array, o = new Array, c = (new Array, ((w.addthis_share_msg || w.addthis_share || {}).passthrough || {}).pinterest_share || {}), d = c.media, l = c.description, u = c.pi_media, h = c.pi_media_desc, f=!1, p = null, _ = "string" == typeof a ? a : "string" == typeof(w.addthis_config || {}).image_include ? addthis_config.image_include : null, g = "string" == typeof i ? i : "string" == typeof(w.addthis_config || {}).image_exclude ? addthis_config.image_exclude : null;
            if ("undefined" != typeof e && null != e)
                if (e.search(/^\#/)>-1)
                    p = (document.getElementById(e.replace(/\#/, "")) || document).getElementsByTagName("img");
                else if (e.search(/^\./)>-1 && "undefined" != typeof t) {
                    for (var m = t, v = (e || "").replace(".", ""); m.className != v && "body" != m.nodeName.toLowerCase() && m.parentNode;)
                        m = m.parentNode;
                        p = (m || document).getElementsByTagName("img")
                } else 
                    p = document.getElementsByTagName("img");
            else 
                p = document.getElementsByTagName("img");
            d && (s[d]=!0, o.push({
                url: d,
                title: l
            })), u && (s[u]=!0, o.push({
                url: u,
                title: h
            }));
            for (var b in p)
                if (p[b] && "undefined" != typeof p[b].src)
                    if (s[p[b].src]) {
                        if (p[b].src == d || p[b].src == u) {
                            if (f=!0, f && (p[b].src == d || p[b].src == u) && (g && (p[b].className || "").search(g)>-1 || _&&-1 == (p[b].className || "").search(_)))
                                continue;
                                o[0] = p[b]
                        }
                    } else 
                        "undefined" == typeof p[b].nodeName || _&&-1 == (p[b].className || "").search(_) || g && (p[b].className || "").search(g)>-1 || (o.push(p[b]), s[p[b].src]=!0);
            for (var b in o)("undefined" == typeof o.hasOwnProperty || o.hasOwnProperty(b)
                ) && (n = o[b], "object" == typeof n && n.url ? r += n.url + "!|undefined!|undefined!|" + n.title + "!|true;" : !n.src || "undefined" == n.src ||!n.offsetHeight || "undefined" == typeof n.offsetHeight || "undefined" == n.offsetHeight ||!n.offsetWidth || "undefined" == n.offsetWidth || 16 == parseInt(n.offsetWidth) && parseInt(16 == n.offsetWidth) || 32 == parseInt(n.offsetWidth) && parseInt(32 == n.offsetWidth) || n.src.search("btn/v2/lg-share-")>-1 || "?" != n.offsetWidth && "?" != n.offsetHeight && parseInt(n.offsetWidth) < 50 && parseInt(n.offsetWidth) < 50 || n.getAttribute("nopin") || (r += escape(_ate.util.rel2abs(n.src)) + "!|" + n.offsetHeight + "!|" + n.offsetWidth + "!|" + (n.alt || n.title) + "!|;"));
            return r.replace(/;$/, "")
        }
        function s(e) {
            if (_ate.ver() >= 300) {
                var a = _ate.util.clone(w.addthis_config);
                a.ui_pane = "image", a.image_service = e, t.menu(_ate.maf.pre, a, w.addthis_share)
            } else ((document.getElementById("at16p") || {}).style || {})
                .display = "none", _ate.share.img(e);
            return !1
        }
        function o(e) {
            var t = t || _ate.share.media();
            if (_ate.bro.msi)
                _ate.track.msg("atimg_ie" + t);
            else {
                var a = setInterval(function() {
                    e.postMessage("atimg_more" + t, "*")
                }, 500);
                setTimeout(function() {
                    clearInterval(a)
                }, 1e4)
            }
            return !1
        }
        function c(e, t) {
            var a = {
                height: 350,
                left: 0,
                location: 0,
                menubar: 0,
                resizable: 0,
                scrollbars: 0,
                status: 0,
                width: 700,
                windowName: null,
                windowURL: null,
                top: 0,
                toolbar: 0
            };
            _ate.util.mrg(e, a);
            var i = "height=" + e.height + ",width=" + e.width + ",toolbar=" + e.toolbar + ",scrollbars=" + e.scrollbars + ",status=" + e.status + ",resizable=" + e.resizable + ",location=" + e.location + ",menuBar=" + e.menubar, n = (screen.height - e.height) / 3, r = (screen.width - e.width) / 2, s = window.open(e.windowUrl, e.windowName, i + ",left=" + r + ",top=" + n);
            s && s.focus(), _ate.xf.send(window.parent, "addthis.menu.shareimg", {
                service: t,
                type: "share"
            })
        }
        var u = {
            pinterest_share: {
                img_service: "pinterest_share",
                img_header: "Pin It to Pinterest",
                img_base_url: "//pinterest.com/pin/create/button/",
                img_param: "media=",
                ctype: "",
                windowProps: {
                    height: "335",
                    width: "750"
                }
            },
            pinterest: {
                img_service: "pinterest",
                img_header: "Pin It to Pinterest",
                img_base_url: "//pinterest.com/pin/create/button/",
                img_param: "media=",
                ctype: "",
                windowProps: {
                    height: "335",
                    width: "750"
                }
            },
            thefancy: {
                img_service: "thefancy",
                img_header: "Add to Fancy",
                img_base_url: "//thefancy.com/offer.html",
                img_param: "imageurl=",
                ctype: "&ctype=image",
                windowProps: {
                    height: "500",
                    width: "700"
                }
            }
        }, h = document.body;
        e.share = e.share || {}, e.util.extend(e.share, {
            img: i,
            media: r,
            imgVer: s,
            imgOcw: o,
            inBm: a
        })
    }(_ate, _ate.api, _ate), function() {
        var e = function() {
            return "undefined" == typeof addthis_config?!1 : "undefined" == typeof addthis_config.webintents?!1 : addthis_config.webintents?!0 : !1
        };
        if (e()) {
            var t = function() {
                if ("undefined" != typeof w.WebKitIntent)
                    return !0;
                if ("undefined" == typeof w.Intent && "undefined" == typeof w.WebKitIntent || "undefined" == typeof w.navigator.startActivity && "undefined" == typeof w.navigator.webkitStartActivity)
                    return !1;
                var e = navigator.userAgent;
                if (/Chrome\/(.*)\./.test(e)) {
                    var t = /Chrome\/(.*)\./.exec(e);
                    if (t.length >= 1) {
                        var a = parseInt(t[1].substring(0, 2));
                        if (19 > a)
                            return !1
                    }
                }
                return !0
            };
            catchIntents = function() {
                t() || (w.Intent = function(e, t, a) {
                    this.verb = e, this.noun = t, this.data = a
                }, w.navigator.startActivity = function(e) {
                    if ("http://webintents.org/share" === e.verb && "text/uri-list" === e.noun) {
                        addthis.update("share", "url", e.data);
                        for (var t in e.extras)
                            addthis.update("share", t, e.extras);
                        var a = "http://addthis.com/bookmark.php";
                        a += "?v=300&url=" + encodeURIComponent(e.data), w.open(a, "", "width=700,height=500")
                    }
                })
            }, catchIntents()
        }
    }(), function(e) {
        e.services || (e.services = {}), e.services.refget = function(t) {
            t = t.split(".").slice( - 3).join(".");
            var a = {
                "mail.google.com": "gmail",
                "mail.yahoo.com": "yahoomail",
                "mail.aol.com": "aolmail",
                "mail.live.com": "hotmail"
            };
            return a[t] ? a[t] : (t = t.split(".").slice( - 2).shift(), e.services.map[t] ? t : "")
        }, e.services.map = {
            "100zakladok": "100zakladok.ru",
            "2tag": "2tag.nl",
            "2linkme": "",
            flipboard: "",
            tapiture: "",
            internetarchive: "",
            whatsapp: "whatsapp.com",
            facebook: "",
            twitter: "",
            reddit: "",
            stumbleupon: "",
            gmail: "mail.google.com",
            blogger: "",
            linkedin: "",
            tumblr: "",
            delicious: "",
            yahoomail: "compose.mail.yahoo.com",
            hotmail: "hotmail.msn.com",
            a97abi: "",
            addio: "add.io",
            menu: "api.addthis.com",
            adfty: "",
            adifni: "",
            aerosocial: "",
            allmyfaves: "",
            amazonwishlist: "amazon.com",
            amenme: "",
            aim: "lifestream.aol.com",
            aolmail: "webmail.aol.com",
            arto: "",
            baang: "baang.ir",
            baidu: "cang.baidu.com",
            biggerpockets: "",
            bitly: "bit.ly",
            bizsugar: "",
            bleetbox: "",
            blinklist: "",
            bloggy: "bloggy.se",
            blogmarks: "blogmarks.net",
            blurpalicious: "",
            bobrdobr: "bobrdobr.ru",
            bonzobox: "",
            socialbookmarkingnet: "social-bookmarking.net",
            bookmarkycz: "bookmarky.cz",
            bookmerkende: "bookmerken.de",
            bordom: "bordom.net",
            box: "box.net",
            brainify: "",
            bryderi: "bryderi.se",
            buddymarks: "",
            buzzzy: "",
            camyoo: "",
            care2: "",
            chiq: "",
            cirip: "cirip.ro",
            citeulike: "citeulike.org",
            classicalplace: "",
            cndig: "cndig.org",
            colivia: "colivia.de",
            technerd: "",
            cosmiq: "cosmiq.de",
            curateus: "curate.us",
            designmoo: "",
            digaculturanet: "digacultura.net",
            digg: "",
            diggita: "diggita.it",
            diglog: "",
            digo: "digo.it",
            diigo: "",
            domelhor: "domelhor.net",
            dotnetshoutout: "",
            woscc: "wos.cc",
            douban: "",
            draugiem: "draugiem.lv",
            dropjack: "",
            dwellicious: "",
            dzone: "",
            efactor: "",
            ekudos: "ekudos.nl",
            elefantapl: "elefanta.pl",
            embarkons: "",
            evernote: "",
            extraplay: "",
            ezyspot: "",
            stylishhome: "",
            fabulously40: "",
            informazione: "fai.informazione.it",
            fark: "",
            farkinda: "",
            fashiolista: "",
            fashionburner: "",
            favable: "",
            faves: "",
            favlogde: "favlog.de",
            favoritende: "favoriten.de",
            favoritus: "",
            financialjuice: "",
            flaker: "flaker.pl",
            folkd: "",
            formspring: "formspring.me",
            thefreedictionary: "",
            fresqui: "",
            friendfeed: "",
            friendster: "",
            funp: "",
            fwisp: "",
            gamekicker: "",
            givealink: "givealink.org",
            govn: "my.go.vn",
            goodnoows: "",
            googletranslate: "translate.google.com",
            gravee: "",
            greaterdebater: "",
            hackernews: "news.ycombinator.com",
            hatena: "b.hatena.ne.jp",
            gluvsnap: "healthimize.com",
            hedgehogs: "hedgehogs.net",
            historious: "historio.us",
            hitmarks: "",
            hotklix: "",
            hootsuite: "",
            w3validator: "validator.w3.org",
            idearef: "",
            identica: "identi.ca",
            ihavegot: "",
            indexor: "indexor.co.uk",
            instapaper: "",
            iorbix: "",
            isociety: "isociety.be",
            iwiw: "iwiw.hu",
            jamespot: "",
            jappy: "jappy.de",
            jumptags: "",
            zooloo: "kablog.com",
            kaboodle: "",
            kaevur: "",
            kaixin: "kaixin001.com",
            kindleit: "fivefilters.org",
            kirtsy: "",
            kledy: "kledy.de",
            kommenting: "",
            latafaneracat: "latafanera.cat",
            laaikit: "laaik.it",
            ladenzeile: "ladenzeile.de",
            librerio: "",
            linkagogo: "",
            linksgutter: "",
            linkshares: "linkshares.net",
            linkuj: "linkuj.cz",
            livejournal: "",
            lockerblogger: "",
            logger24: "",
            mymailru: "connect.mail.ru",
            markme: "markme.me",
            margarin: "mar.gar.in",
            mashbord: "",
            mawindo: "",
            meinvz: "meinvz.net",
            mekusharim: "mekusharim.walla.co.il",
            memonic: "",
            memori: "memori.ru",
            meneame: "meneame.net",
            myvidster: "",
            live: "profile.live.com",
            misterwong: "mister-wong.com",
            misterwong_de: "mister-wong.de",
            moemesto: "moemesto.ru",
            moikrug: "moikrug.ru",
            mrcnetworkit: "mrcnetwork.it",
            myspace: "",
            n4g: "",
            naszaklasa: "nk.pl",
            netlog: "",
            netvibes: "",
            netvouz: "",
            newsmeback: "",
            newstrust: "newstrust.net",
            newsvine: "",
            nujij: "nujij.nl",
            odnoklassniki_ru: "odnoklassniki.ru",
            oknotizie: "oknotizie.virgilio.it",
            ongobee: "",
            openthedoor: "otd.to",
            dashboard: "api.addthis.com",
            oyyla: "",
            packg: "",
            pafnetde: "pafnet.de",
            pdfonline: "savepageaspdf.pdfonline.com",
            pdfmyurl: "",
            phonefavs: "",
            planypus: "planyp.us",
            plaxo: "",
            plurk: "",
            popedition: "",
            posteezy: "",
            printfriendly: "",
            pusha: "pusha.se",
            qrfin: "qrf.in",
            quantcast: "",
            qzone: "sns.qzone.qq.com",
            pocket: "getpocket.com",
            rediff: "share.rediff.com",
            redkum: "",
            scoopat: "scoop.at",
            scoopit: "scoop.it",
            sekoman: "sekoman.lv",
            select2gether: "www2.select2gether.com",
            shaveh: "shaveh.co.il",
            shetoldme: "",
            shirintar: "shir.intar.in",
            simpy: "",
            sinaweibo: "v.t.sina.com.cn",
            slashdot: "slashdot.org",
            smiru: "smi2.ru",
            sodahead: "",
            sonico: "",
            sphinn: "",
            spinsnap: "",
            sportpost: "",
            sulia: "",
            yiid: "spread.ly",
            springpad: "springpadit.com",
            startaid: "",
            startlap: "startlap.hu",
            storyfollower: "",
            studivz: "studivz.net",
            stuffpit: "",
            stumpedia: "",
            sunlize: "",
            stylehive: "",
            svejo: "svejo.net",
            symbaloo: "",
            taaza: "",
            tagmarksde: "tagmarks.de",
            tagvn: "",
            tagza: "",
            tellmypolitician: "",
            thewebblend: "",
            thinkfinity: "community.thinkfinity.org",
            thisnext: "",
            thrillon: "",
            throwpile: "",
            tipd: "",
            topsitelernet: "ekle.topsiteler.net",
            transferr: "",
            tuenti: "",
            tulinq: "",
            tusul: "",
            tvinx: "",
            tweetmeme: "api.tweetmeme.com",
            twitthis: "",
            typepad: "",
            upnews: "upnews.it",
            urlaubswerkde: "urlaubswerk.de",
            viadeo: "",
            virb: "",
            visitezmonsite: "",
            vk: "vkontakte.ru",
            vkrugudruzei: "vkrugudruzei.ru",
            voxopolis: "",
            vybralisme: "vybrali.sme.sk",
            webnews: "webnews.de",
            domaintoolswhois: "domaintools.com",
            wanelo: "",
            windows: "api.addthis.com",
            wirefan: "",
            wishmindr: "",
            wordpress: "",
            wykop: "wykop.pl",
            xanga: "",
            xing: "",
            yahoobkm: "bookmarks.yahoo.com",
            yammer: "",
            yardbarker: "",
            yigg: "yigg.de",
            yoolink: "go.yoolink.to",
            yorumcuyum: "",
            youmob: "",
            yuuby: "",
            zakladoknet: "zakladok.net",
            ziczac: "ziczac.it",
            zingme: "link.apps.zing.vn",
            advqr: "",
            apsense: "",
            azadegi: "",
            balltribe: "",
            beat100: "",
            bland: "",
            blogkeen: "",
            buffer: "",
            cleanprint: "",
            cleansave: "",
            cssbased: "",
            dudu: "",
            email: "",
            favorites: "",
            foodlve: "",
            gg: "",
            giftery: "",
            gigbasket: "",
            google: "",
            google_plusone_share: "",
            irepeater: "",
            jolly: "",
            ketnooi: "",
            lidar: "",
            link: "",
            mailto: "",
            mashant: "",
            me2day: "",
            mendeley: "",
            mixi: "",
            pinterest_share: "",
            print: "",
            qrsrc: "",
            raiseyourvoice: "",
            researchgate: "",
            safelinking: "",
            sharer: "",
            skyrock: "",
            supbro: "",
            surfingbird: "",
            taringa: "",
            textme: "",
            thefancy: "",
            toly: "",
            webshare: "",
            werkenntwen: "",
            wowbored: "",
            yookos: ""
        };
        var t = {
            more: 1,
            compact: 1,
            expanded: 1,
            facebook: 1,
            email: 1,
            twitter: 1,
            print: 1,
            google: 1,
            google_plusone_share: 1,
            live: 1,
            stumbleupon: 1,
            vk: 1,
            pinterest_share: 1,
            myspace: 1,
            favorites: 1,
            digg: 1,
            delicious: 1,
            blogger: 1,
            mailto: 1,
            linkedin: 1,
            mymailru: 1,
            gmail: 1,
            yahoomail: 1,
            reddit: 1,
            tumblr: 1,
            live: 1
        }, a = {
            more: 1,
            compact: 1,
            expanded: 1,
            "100zakladok": 1,
            adifni: 1,
            aim: 1,
            amazonwishlist: 1,
            arto: 1,
            baidu: 1,
            bitly: 1,
            blogger: 1,
            bloggy: 1,
            bobrdobr: 1,
            delicious: 1,
            digg: 1,
            diggita: 1,
            draugiem: 1,
            ekudos: 1,
            email: 1,
            facebook: 1,
            favorites: 1,
            friendfeed: 1,
            gmail: 1,
            google: 1,
            google_plusone_share: 1,
            hatena: 1,
            hotmail: 1,
            jappy: 1,
            linkedin: 1,
            live: 1,
            livejournal: 1,
            mailto: 1,
            meinvz: 1,
            meneame: 1,
            misterwong: 1,
            mymailru: 1,
            myspace: 1,
            netlog: 1,
            nujij: 1,
            oknotizie: 1,
            oyyla: 1,
            pinterest_share: 1,
            plurk: 1,
            print: 1,
            pusha: 1,
            reddit: 1,
            settings: 1,
            sonico: 1,
            studivz: 1,
            stumbleupon: 1,
            tuenti: 1,
            tumblr: 1,
            twitter: 1,
            viadeo: 1,
            vk: 1,
            wordpress: 1,
            wykop: 1,
            xing: 1,
            yahoobkm: 1,
            yahoomail: 1,
            yorumcuyum: 1
        };
        _ate._top_services = t, _ate._top_services16 = a, e.services.isTop = function(e, i) {
            return 16 == i ? a[e] : t[e]
        }
    }(_ate, _ate.api, _ate), function(e) {
        function t(e, t) {
            var n;
            return n = i[e] ? i[e] : a[e] ? a[e] : t ? e : e.substr(0, 1).toUpperCase() + e.substr(1), (n || "").replace(/&nbsp;/g, " ")
        }
        var a = {
            googlebuzz: "Google Buzz",
            googlereader: "Google Reader",
            googletranslate: "Google Translate",
            google_follow: "Google",
            rss: "RSS"
        }, i = {
            "100zakladok": "100zakladok",
            "2linkme": "2linkme",
            "2tag": "2 Tag",
            a97abi: "A97abi",
            adfty: "Adfty",
            adifni: "Adifni",
            advqr: "ADV QR",
            aim: "Lifestream",
            amazonwishlist: "Amazon",
            amenme: "Amen Me!",
            aolmail: "AOL Mail",
            apsense: "APSense",
            arto: "Arto",
            azadegi: "Azadegi",
            baang: "Baang",
            baidu: "Baidu",
            balltribe: "BallTribe",
            beat100: "Beat100",
            biggerpockets: "BiggerPockets",
            bitly: "Bit.ly",
            bizsugar: "BizSugar",
            bland: "Bland takkinn",
            blinklist: "Blinklist",
            blogger: "Blogger",
            bloggy: "Bloggy",
            blogkeen: "Blogkeen",
            blogmarks: "Blogmarks",
            blurpalicious: "Blurpalicious",
            bobrdobr: "Bobrdobr",
            bonzobox: "BonzoBox",
            bookmarkycz: "Bookmarky.cz",
            bookmerkende: "Bookmerken",
            box: "Box",
            brainify: "Brainify",
            bryderi: "Bryderi.se",
            buddymarks: "BuddyMarks",
            buffer: "Buffer",
            buzzzy: "Buzzzy",
            camyoo: "Camyoo",
            care2: "Care2",
            chiq: "Chiq",
            cirip: "Cirip",
            citeulike: "CiteULike",
            classicalplace: "ClassicalPlace",
            cleanprint: "CleanPrint",
            cleansave: "CleanSave",
            cndig: "Cndig",
            colivia: "Colivia.de",
            cosmiq: "COSMiQ",
            cssbased: "CSS Based",
            curateus: "Curate.us",
            delicious: "Delicious",
            digaculturanet: "DigaCultura",
            digg: "Digg",
            diggita: "Diggita",
            digo: "Digo",
            diigo: "Diigo",
            domaintoolswhois: "Whois Lookup",
            domelhor: "DoMelhor",
            dotnetshoutout: ".netShoutout",
            douban: "Douban",
            draugiem: "Draugiem.lv",
            dropjack: "Dropjack",
            dudu: "Dudu",
            dzone: "Dzone",
            efactor: "EFactor",
            ekudos: "eKudos",
            elefantapl: "elefanta.pl",
            email: "Email",
            embarkons: "Embarkons",
            evernote: "Evernote",
            extraplay: "extraplay",
            ezyspot: "EzySpot",
            fabulously40: "Fabulously40",
            facebook: "Facebook",
            fark: "Fark",
            farkinda: "Farkinda",
            fashiolista: "Fashiolista",
            favable: "FAVable",
            faves: "Faves",
            favlogde: "favlog",
            favoritende: "Favoriten",
            favorites: "Favorites",
            favoritus: "Favoritus",
            financialjuice: "Financial Juice",
            flaker: "Flaker",
            flipboard: "Flipboard",
            folkd: "Folkd",
            foodlve: "Cherry Share",
            formspring: "Formspring",
            fresqui: "Fresqui",
            friendfeed: "FriendFeed",
            funp: "funP",
            fwisp: "fwisp",
            gamekicker: "Gamekicker",
            gg: "GG",
            giftery: "Giftery.me",
            gigbasket: "GigBasket",
            givealink: "GiveALink",
            gluvsnap: "Healthimize",
            gmail: "Gmail",
            goodnoows: "Good Noows",
            google: "Google",
            google_plusone_share: "Google+",
            googletranslate: "Translate",
            govn: "Go.vn",
            greaterdebater: "GreaterDebater",
            hackernews: "Hacker News",
            hatena: "Hatena",
            hedgehogs: "Hedgehogs",
            historious: "historious",
            hotklix: "Hotklix",
            hotmail: "Outlook",
            hootsuite: "Hootsuite",
            identica: "Identi.ca",
            ihavegot: "ihavegot",
            indexor: "Indexor",
            informazione: "Informazione",
            instapaper: "Instapaper",
            iorbix: "iOrbix",
            irepeater: "IRepeater",
            isociety: "iSociety",
            iwiw: "iWiW",
            jamespot: "Jamespot",
            jappy: "Jappy Ticker",
            jolly: "Jolly",
            jumptags: "Jumptags",
            kaboodle: "Kaboodle",
            kaevur: "Kaevur",
            kaixin: "Kaixin Repaste",
            ketnooi: "Ketnooi",
            kindleit: "Kindle It",
            kledy: "Kledy",
            kommenting: "Kommenting",
            latafaneracat: "La tafanera",
            librerio: "Librerio",
            lidar: "LiDAR Online",
            link: "Copy Link",
            linkedin: "LinkedIn",
            linksgutter: "Links Gutter",
            linkshares: "LinkShares",
            linkuj: "Linkuj.cz",
            live: "Messenger",
            livejournal: "LiveJournal",
            lockerblogger: "LockerBlogger",
            logger24: "Logger24",
            mailto: "Email App",
            margarin: "mar.gar.in",
            markme: "Markme",
            mashant: "Mashant",
            mashbord: "Mashbord",
            me2day: "me2day",
            meinvz: "meinVZ",
            mekusharim: "Mekusharim",
            memonic: "Memonic",
            memori: "Memori.ru",
            mendeley: "Mendeley",
            meneame: "Menéame",
            misterwong: "Mister Wong",
            mixi: "Mixi",
            myvidster: "myVidster",
            moemesto: "Moemesto.ru",
            moikrug: "Moikrug",
            mrcnetworkit: "mRcNEtwORK",
            mymailru: "Mail.ru",
            myspace: "Myspace",
            n4g: "N4G",
            naszaklasa: "Nasza-klasa",
            netlog: "NetLog",
            netvibes: "Netvibes",
            netvouz: "Netvouz",
            newsmeback: "NewsMeBack",
            newstrust: "NewsTrust",
            newsvine: "Newsvine",
            nujij: "Nujij",
            odnoklassniki_ru: "Odnoklassniki",
            oknotizie: "OKNOtizie",
            openthedoor: "OpenTheDoor",
            oyyla: "Oyyla",
            packg: "Packg",
            pafnetde: "Pafnet",
            pdfmyurl: "PDFmyURL",
            pdfonline: "PDF Online",
            phonefavs: "PhoneFavs",
            pinterest_share: "Pinterest",
            planypus: "Planypus",
            plaxo: "Plaxo",
            plurk: "Plurk",
            pocket: "Pocket",
            posteezy: "Posteezy",
            print: "Print",
            printfriendly: "PrintFriendly",
            pusha: "Pusha",
            qrfin: "QRF.in",
            qrsrc: "QRSrc.com",
            quantcast: "Quantcast",
            qzone: "Qzone",
            raiseyourvoice: "Write Your Rep",
            reddit: "Reddit",
            rediff: "Rediff MyPage",
            redkum: "RedKum",
            researchgate: "ResearchGate",
            safelinking: "Safelinking",
            scoopat: "Scoop.at",
            scoopit: "Scoop.it",
            sekoman: "Sekoman",
            select2gether: "Select2Gether",
            sharer: "WebMoney",
            shaveh: "Shaveh",
            shetoldme: "She Told Me",
            sinaweibo: "Sina Weibo",
            skyrock: "Skyrock Blog",
            smiru: "SMI",
            socialbookmarkingnet: "BookmarkingNet",
            sodahead: "SodaHead",
            sonico: "Sonico",
            spinsnap: "SpinSnap",
            springpad: "springpad",
            startaid: "Startaid",
            startlap: "Startlap",
            storyfollower: "StoryFollower",
            studivz: "studiVZ",
            stuffpit: "Stuffpit",
            stumbleupon: "StumbleUpon",
            stumpedia: "Stumpedia",
            stylishhome: "FabDesign",
            sulia: "Sulia",
            sunlize: "Sunlize",
            supbro: "SUP BRO",
            surfingbird: "Surfingbird",
            svejo: "Svejo",
            symbaloo: "Symbaloo",
            taaza: "TaazaShare",
            tagza: "Tagza",
            tapiture: "Tapiture",
            taringa: "Taringa!",
            technerd: "Communicate",
            textme: "Textme",
            thefancy: "The Fancy",
            thefreedictionary: "FreeDictionary",
            thewebblend: "The Web Blend",
            thinkfinity: "Thinkfinity",
            thisnext: "ThisNext",
            thrillon: "Thrill On",
            throwpile: "Throwpile",
            toly: "to.ly",
            topsitelernet: "TopSiteler",
            transferr: "Transferr",
            tuenti: "Tuenti",
            tulinq: "Tulinq",
            tumblr: "Tumblr",
            tvinx: "Tvinx",
            twitter: "Twitter",
            twitthis: "TwitThis",
            typepad: "Typepad",
            upnews: "Upnews.it",
            urlaubswerkde: "Urlaubswerk",
            wanelo: "Wanelo",
            wishmindr: "WishMindr",
            viadeo: "Viadeo",
            virb: "Virb",
            visitezmonsite: "VisitezMonSite",
            vk: "VKontakte",
            vkrugudruzei: "vKruguDruzei",
            voxopolis: "VOX Social",
            vybralisme: "VybraliSME",
            w3validator: "HTML Validator",
            internetarchive: "Wayback Machine",
            webnews: "Webnews",
            webshare: "WebShare",
            werkenntwen: "WerKenntWen",
            whatsapp: "WhatsApp",
            wirefan: "WireFan",
            windows: "Windows Gadget",
            wordpress: "WordPress",
            wowbored: "WowBored",
            wykop: "Wykop",
            xanga: "Xanga",
            xing: "XING",
            yahoobkm: "Y! Bookmarks",
            yahoomail: "Y! Mail",
            yammer: "Yammer",
            yardbarker: "Yardbarker",
            yigg: "Yigg",
            yiid: "Spreadly",
            yookos: "Yookos",
            yoolink: "Yoolink",
            yorumcuyum: "Yorumcuyum",
            youmob: "YouMob",
            yuuby: "Yuuby",
            zakladoknet: "Zakladok.net",
            ziczac: "ZicZac",
            zingme: "ZingMe"
        };
        e.services || (e.services = {}), e.services.list = i, e.services.getName = t, e.services.exists = function(e) {
            return !!i[e]
        }
    }(_ate, _ate.api, _ate), function(e) {
        function t(e) {
            var t = new Array;
            e: for (var a = 0; a < e.length; a++) {
                for (var i = 0; i < t.length; i++)
                    if (t[i] == e[a])
                        continue e;
                t[t.length] = e[a]
            }
            return t
        }
        function a() {
            l || (l = {}, _(e.services.map, function(t) {
                l[e.mun(t)] = t
            }))
        }
        function i() {
            return u ? u : u = e.services.refget((e.dr || "").split("://").pop().split("/").shift().split("?").shift()) || (e.smd || {}).rsc || ""
        }
        function n(e, t) {
            return e.timestamp > t.timestamp?-1 : 1
        }
        function r(e, t, a) {
            return a || (a = window), (a[e] === undefined || "" === a[e]) && (a[e] = t), a[e]
        }
        function s(t) {
            a();
            var r, s, o = i(), c = function() {
                for (var t, a = e.cookie.ssc.getServices(), i = e.ups || {}, n = 0; n < a.length; n++)
                    t = a[n].name, i[t] || (i[t] = t);
                return i
            }(), d = [], u = 0, p = 0;
            for (h = [], r = 0; r < t.length; r++)
                s = t[r], (e.services.map[s] !== undefined || s.indexOf("facebook_")>-1 && e.services.map.facebook !== undefined) && u++, o == s && (p = 1), c[s] && delete c[s];
            for (_(c, function(e, t) {
                d.push(t)
            })
                , d.sort(n), r = 0;
            r < d.length;
            r++)s = d[r].name, l[s] && (s = l[s], u++, h.push(s), t.push(s), window.addthis_ssh?-1 == addthis_ssh.indexOf(s) && (addthis_ssh += "," + s) : window.addthis_ssh = s, o == s && (p = 1));
            return h = h.join(","), p || e.services.map[o] === undefined || (u++, t.push(o), addthis_ssh = (window.addthis_ssh ? addthis_ssh + "," : "") + o, f = o), u
        }
        function o(e) {
            r("addthis_exclude", ""), r("addthis_use_personalization", !0), r("services_exclude", window.addthis_exclude, e)
        }
        function c(n, c) {
            if (n === d)
                return {
                    conf: n,
                    csl: h,
                    crs: f
                };
            d = n;
            {
                var l = window.addthis_ssh ? addthis_ssh.replace("misterwong_de", "misterwong").replace("misterwong_ru", "misterwong").replace(/(^more,)|(^more$)|(,more,)|(,more$)/, "").split(","): [], u = "facebook,twitter,email,print,gmail,stumbleupon,favorites,gmail,tumblr,pinterest_share,google,mailto,linkedin,blogger,delicious,yahoomail,hotmail,printfriendly,aolmail,livejournal,wordpress,friendfeed", _ = (window.addthis_services_loc || u).replace(_ate.bro.xp || _ate.bro.mob ? /,mailto,/ : /,,/, ","), g = 0, m = _;
                i()
            }
            if (o(n), _ate.bro.ipa && ( - 1 == addthis_exclude.indexOf("print") && (addthis_exclude += ","), addthis_exclude += "print"), n.services_exclude = n.services_exclude.replace(/\s/g, ""), n.services_exclude_natural || (n.services_exclude_natural = n.services_exclude), _ate.ver() >= 300 && (n || {}).parentServices && _ate.util.each(n.parentServices, function(e) {
                n.services_exclude += (n.services_exclude.length > 1 ? "," : "") + e
            }), c || (c = []), r("addthis_options_default", m.split(",").slice(0, 11).join(",") + ",more"), r("addthis_options_rank", m.split(",").join(",")), r("addthis_options", window.addthis_options_default), a(), g = s(l), addthis_options = ("" != l ? l + "," : "") + addthis_options, l && (addthis_options&&-1 == addthis_options.indexOf(l) || n.services_compact&&-1 == n.services_compact.indexOf(l)) && (n.services_compact = n.services_compact ? l + "," + n.services_compact : addthis_options), addthis_options = t(addthis_options.split(",")).join(","), n.services_compact && (n.services_compact = t(n.services_compact.split(",")).join(",")), window.addthis_ssh && window.addthis_use_personalization && g || c.length || n.services_exclude || addthis_exclude) {
                var w, v, b = addthis_options_rank.split(","), y = [], k = (n.services_exclude || addthis_exclude || "").split(","), x = {}, N = l.join(","), O = [], T = {}, S = 0, A = 11, E = 0, C = n.product || "", I = C.indexOf("ffext")>-1 || C.indexOf("fxe")>-1;
                for (c.length&&-1 == addthis_options.indexOf(c[0].code) && (addthis_options += "," + c[0].code), c.length && c[0] && y.push(c[0].code), M = 0; M < k.length; M++)
                    x[k[M]] = 1, v = p[k[M]] || new RegExp("(?:^|,)(" + k[M] + ")(?:$|,)"), p[k[M]] = v, addthis_options = addthis_options.replace(v, ",").replace(",,", ","), n.services_compact && (n.services_compact = n.services_compact.replace(v, ",").replace(",,", ","));
                for (M = 0; M < b.length; M++)
                    w = b[M], x[w] || (v = p[w] || new RegExp("(?:^|,)(" + w + ")(?:$|,)"), p[w] = v, - 1 == N.search(v) && y.unshift(w));
                for (M = 0; M < l.length && A > M; M++)
                    w = l[M], v = p[w] || new RegExp("(?:^|,)(" + w + ")(?:$|,)"), p[w] = v, addthis_options.search(v)>-1 && S++;
                for (M = 0; M < l.length&&!(O.length >= A); M++)
                    w = l[M], T[w] || x[w] ||!(e.services.map[w] !== undefined || w.indexOf("facebook_")>-1) || (T[w] = 1, v = p[w] || new RegExp("(?:^|,)(" + w + ")(?:$|,)"), p[w] = v, addthis_options.search(v)>-1 ? (O.push(w), addthis_options = addthis_options.replace(v, ",").replace(",,", ","), E++) : O.push(w));
                for (addthis_ssh = O.join(","), addthis_options = (window.addthis_ssh ? addthis_ssh + "," : "") + addthis_options.replace(/[,]+/g, ",").replace(/,$/, "").replace(/^,/, "").replace(/^more,|,more|^more$/, ""), addthis_options.indexOf("email")>-1 && "" === e.pub()&&!I && (addthis_options = addthis_options.replace(/^email,|,email|^email$/, "")); addthis_options.split(",").length > 11;)
                    addthis_options = addthis_options.split(",").slice(0, - 1).join(",");
                var j = e.util.fromKV(addthis_options.replace(/,|$/g, "=1&")), z = addthis_options.split(",").length;
                if (z%2 === 0 || 11 > z)
                    for (var M = Math.min(z, 11), L = m.split(","), B = z; (11 > B || B%2 === 0) && M < L.length;) {
                        var P = L[M++];
                        if (j[P]) {
                            if (M == L.length) {
                                z + (Math.min(z, 11) - B)%2 === 0 && (addthis_options = addthis_options.split(",").slice(0, - 1).join(","));
                                break
                            }
                        } else 
                            x[P] || (addthis_options += "," + P, j[P] = 1, B++)
                        }
                if (c.length && c[0]&&-1 == addthis_options.indexOf(c[0].code)) {
                    var D = addthis_options.replace(",more", "").split(",").pop();
                    addthis_options = addthis_options.replace(D, c[0].code)
                }
                - 1 == addthis_options.indexOf(",more") && (addthis_options += ",more")
            }
            return n.services_compact || (n.services_compact = addthis_options), e.share.services.loc = (window.addthis_services_loc || u).replace(_ate.bro.xp || _ate.bro.mob ? /,mailto,/ : /,,/, ","), {
                conf: n,
                csl: h,
                crs: f
            }
        }
        var d, l, u, h, f, p = {}, _ = _ate.util.each;
        e.share = e.share || {}, e.share.services = e.share.services || {}, e.share.services.init = c
    }(_ate, _ate.api, _ate), function(e, t) {
        function a(a, i) {
            var n = window.addthis_config ? e.util.clone(window.addthis_config): {}, r = window.addthis_share ? e.util.clone(window.addthis_share): {};
            switch (i = i || {}, n.product = i.product, n.pubid = e.pub(), r.service = a, r.url = i.url !== undefined ? i.url : window.addthis_share.url, r.title = i.title !== undefined ? i.title : window.addthis_share.title, r.description = i.description !== undefined ? i.description : window.addthis_share.description, a) {
            case"addthis":
            case"more":
            case"compact":
                n.ui_pane = "", e.ao(document.body, "more", "", "", n, r);
                break;
            case"mailto":
                window.location.href = e.share.genieu(r, n, 1);
                break;
            case"email":
                e.bro.mob ? window.location.href = e.share.genieu(r, n, 1) : ((new Image).src = e.share.genurl(a, 0, r, n), n.ui_pane = "email", e.ao(document.body, "more", "", "", n, r));
                break;
            case"pinterest":
            case"pinterest_share":
            case"thefancy":
                e.share.img(a), e.ed.fire("addthis.menu.share", t, r);
                break;
            case"favorites":
                var s = r.url, o = r.title, c = r.share_url_transforms || r.url_transforms, d = "Press <" + (e.bro.win ? "Control" : "Command") + ">+D to bookmark in ";
                o = e.trim(o), s = e.track.cof(s), s = e.track.mgu(s, c, r, a), s = e.share.acb(a, r, n, s, 1), e.bro.ipa ? alert("Tap the <plus> to bookmark in Safari") : e.bro.saf || e.bro.chr ? alert(d + (e.bro.chr ? "Chrome" : "Safari")) : e.bro.opr ? alert(d + "Opera") : e.bro.ffx&&!window.sidebar.addPanel ? alert(d + "Firefox") : document.all ? window.external.AddFavorite(s, o) : window.sidebar.addPanel(o, s, "");
                break;
            case"print":
                (new Image).src = e.share.genurl(a, 0, r, n), window.print();
                break;
            case"link":
                n.ui_pane = "link", _ate.ao(document.body, "link", "", "", n, r);
                break;
            default:
                _ate.share.auw(a) ? _ate.share.stw(a, r, n) : _ate.share.siw(a, r, n), e.ed.fire("addthis.menu.share", t, r)
            }
            _ate.gat(a, r.url, n, r)
        }
        e.share = e.share || {}, e.util.extend(e.share, {
            cleanly: a
        })
    }(_ate, _ate.api, _ate), function(e, t) {
        function a(e) {
            "authUpdated" === e.cmd ? (m.authchecked=!0, f(e.username)) : "userAuthed" === e.cmd && (m.authchecked=!0, m.user = (e.username || "").replace("+", " "))
        }
        function i() {
            _ate._rec.push(a), _ate.ed.addEventListener("addthis-internal.compact", function() {
                _ate.track.msg("cmd=auth")
            }), _ate.ed.addEventListener("addthis.menu.open", function() {
                show("atic_auth", !0)
            })
        }
        function n() {
            _ || (_ = w._atw ? _atw.lang((_atw.conf || {}).ui_language || _ate.lng(), 31) : "Sign in to customize"), p || (p = w._atw ? _atw.lang((_atw.conf || {}).ui_language || _ate.lng(), 47) : "Settings"), g || (g = w._atw ? _atw.lang((_atw.conf || {}).ui_language || _ate.lng(), 38) : "Sign out")
        }
        function r() {
            setTimeout(function() {
                ((w.addthis || {}).auth || {}).initPostMessage && m.initPostMessage()
            }, 500)
        }
        function s() {
            var e = d.ce("IFRAME");
            return e.src = "//" + _atd + "user/logout?hidden=1", e.style.display = "none", v.appendChild(e), l(), m.authupdated=!1, !1
        }
        function o() {
            return m.authupdated=!1, _ate.share.ocw("//" + _atd + "user/auth", 710, 620), setTimeout(function() {
                h()
            }, 1e3), !1
        }
        function c() {
            _ate.share.ocw("//" + _atd + "user/settings", 710, 620)
        }
        function l() {
            u("", "")
        }
        function u(e) {
            n(), m.user = e.replace("+", " ");
            var t = get("atic_auth");
            t || (t = d.ce("DIV"), t.id = "atic_auth", f = get("at15pf"), f && f.parentNode && f.parentNode.insertBefore(t, f)), t.innerHTML = "";
            var a;
            if (e) {
                a = d.ce("DIV"), a.id = "at_auth";
                var i = d.ce("A"), r = d.ce("IMG"), l = d.ce("A"), u = d.ce("SPAN"), h = d.ce("A");
                e = e.replace("+", " "), e.length > 15 && (e = e.substr(0, 15) + "..."), i.id = "atic_usersettings", i.onclick = function() {
                    return c()
                }, i.title = "Signed in as " + e, a.appendChild(i), r.src = b, i.appendChild(r), l.id = "atic_usersettings", l.onclick = function() {
                    return c()
                }, l.title = "AddThis " + p, a.appendChild(l), u.innerHTML = p, l.appendChild(u), h.id = "atic_usersignout", h.onclick = function() {
                    return s("menu")
                }, h.style.display = "none", h.innerHTML = g, a.appendChild(h), t.onmouseover = function() {
                    show("atic_usersignout")
                }, t.onmouseout = function() {
                    hide("atic_usersignout")
                }
            } else {
                var f = get("at15pf"), w = d.ce("DIV");
                f && (f.style.top = "0px"), a = d.ce("A"), a.id = "atic_signin", a.onclick = function() {
                    return o()
                }, a.onmouseover = function() {}, a.onmouseout = function() {}, w.id = "at_auth", w.innerHTML = _, a.appendChild(w)
            }
            t.appendChild(a), hide("atic_settings");
            var v = get("at3winssi");
            v && m.generateProfile(v, "at")
        }
        function h() {
            m.authupdated || _ate.track.msg("cmd=auth")
        }
        function f(e) {
            var t = get("atic_auth"), a = get("atic_signin"), i = get("at3winssi");
            !t || "" !== e && a || "" !== e && i ? (m.authupdated=!0, u(e)) : setTimeout(function() {
                h()
            }, 1e3)
        }
        t.auth = {
            user: "",
            authupdated: !1,
            authchecked: !1
        };
        var p, _, g, m = t.auth, v = document.body, b = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOEE2RERFNTE0RjJENkUxMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NjI1N0EwOEUwQ0QxMUUxQUQxNDlFODk3MEU5NzUyMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NjI1N0EwN0UwQ0QxMUUxQUQxNDlFODk3MEU5NzUyMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE4MDExNzQwNzIwNjgxMThBNkRERTUxNEYyRDZFMTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMThBNkRERTUxNEYyRDZFMTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6W1lD7AAAA/UlEQVR42uyWoRKDMAyGCwpZiUQikcjJyT3CHmuPsceorEQikZV1LNtlE9xu5O+lqyF3vyvJd+2fkGpdV1MyalM4igNUCd9YUs+yrJnlSDEXQEM6k4YfZxbShIAgAFdSJzzrSXdND3RAccPPY7QBDPhcRxuqAgQw76INEBNmRaMJ0CaYsC/tAVvyCcQ+kAJMYPHI/wbVLriBZ6O2BxZhOwakbVETShLPSEIUwAkAXU6ATtB6Yy6AVpj8hAyuSjhQei5uAa84bt+QCjCw0F3gmyk9axfActERWSqA4eQYJGwB3kVb85/43MoT4LKz6eYMXxcs/rr5Yyc8AB4CDABgrTJllG/dlQAAAABJRU5ErkJggg==";
        m.initPostMessage = function() {
            m.authchecked===!1 && (_ate.track.msg("cmd=isUserAuthed"), r())
        }, r(), m.toggleMenu = function(e) {
            var t = get("at-qs-menu-" + e);
            t && "none" === t.style.display ? (show(t), t.focus()) : t && hide(t)
        }, m.generateProfile = function(e, t) {
            if (n(), e.setAttribute("style", ""), e.innerHTML = "", e.onmouseover = function() {
                this.style.background = "#DEDEDE"
            }, e.onmouseout = function() {
                this.style.background = ""
            }, "" === m.user)
                e.className = "at-quickshare-header-peep", e.style.padding = "0px 15px", e.style.fontSize = "12px", e.style.lineHeight = "50px", e.innerHTML = _, e.onclick = function() {
                    o()
                };
            else {
                e.className = "at-quickshare-header-peep", e.onclick = function() {
                    m.toggleMenu(t)
                };
                var a = d.ce("SPAN"), i = d.ce("UL"), r = d.ce("IMG"), l = d.ce("LI"), u = m.user, h = d.ce("LI"), f = d.ce("A"), w = d.ce("LI"), v = d.ce("A");
                e.appendChild(a), i.className = "at-quickshare-menu", i.style.display = "none", i.id = "at-qs-menu-" + t, i.tabIndex = 0, i.onblur = function() {
                    setTimeout(function() {
                        hide("at-qs-menu-" + t)
                    }, 250)
                }, e.appendChild(i), r.className = "at-profile-img", r.id = "at-qs-pi-" + t, r.src = b, a.appendChild(r), a.style.margin = "2px 5px 0px 10px", r.style.height = "32px", r.style.width = "32px", _ate.bro.msi && "backcompat" === d.compatMode.toLowerCase() ? (i.style.top = "-45px", i.style.left = "-150px") : i.style.top = "55px", l.className = "at-quickshare-menu-sep", u.length > 15 && (u = u.substr(0, 15) + "..."), l.innerHTML = "Hi, " + u, l.style.padding = "5px 10px", l.style.color = "#87AC10", i.appendChild(l), f.href = "#", f.innerHTML = p, f.onclick = function() {
                    return c()
                }, h.appendChild(f), i.appendChild(h), v.href = "#", v.innerHTML = g, v.onclick = function() {
                    return s(t)
                }, w.appendChild(v), i.appendChild(w)
            }
        }, m.signinAuth = function() {
            o()
        }, e.util.extend(t.auth, {
            init: i
        })
    }(_ate, _ate.api, _ate), function(e) {
        function t(e) {
            var t = this, a = e || {};
            if (e instanceof Array) {
                a = {};
                for (var i = 0; i < e.length; i++)
                    a[e[i]] = e[i]
            }
            t.add = function(e, i) {
                if ("object" == typeof e)
                    for (var n in e)
                        e.hasOwnProperty(n) && t.add(n, e[n]);
                else 
                    a[e] = i
            }, t.get = function(e) {
                return a[e]
            }, t.has = function(e) {
                if ("string" == typeof e && (e = e.split(",")), 0 === e.length)
                    return !1;
                for (var t = 0; t < e.length; t++)
                    if (!iskey(e[t]))
                        return !1;
                return !0
            }, t.iskey = function(e) {
                if ("string" == typeof e && (e = e.split(",")), e instanceof Array)
                    for (var t = 0; t < e.length; t++) {
                        var i = e[t].replace(/ /g, "");
                        if (a[i])
                            return 1
                    }
                return 0
            }, t.remove = function(e) {
                for (var t, i = 0; i < arguments.length; i++)
                    if (t = arguments[i], "string" == typeof e)
                        delete a[t];
                    else if (t.length)
                        for (var n = 0; n < t.length; n++)
                            delete a[t[n]]
            }, t.has = function(e) {
                return a.hasOwnProperty(e)
            }, t.isEmpty = function() {
                var e = 0;
                return _ate.util.each(a, function(t) {
                    return this.data.hasOwnProperty(t) ? (e = 1, !1) : void 0
                }), !!e
            }, t.keys = function() {
                return Object.keys(a)
            }, t.clear = function() {
                a = {}
            }
        }
        e.data || (e.data = {}), e.data.Set = t
    }(_ate, _ate.api, _ate), function(e) {
        function t() {}
        function a() {}
        function i() {}
        function n() {
            return !0
        }
        function r(e) {
            try {
                return e && e.url ? 1 === e.promoted?!1 : N[e.url] !== w ? N[e.url] : (N[e.url] = _ate.track.hist.seenBefore(e.url), N[e.url]) : !1
            } catch (t) {}
            return !1
        }
        function s(t) {
            function a() {
                var e = 0, a = [];
                if (o--, 0 === o) {
                    for (; e < d.length;)
                        a = a.concat(d[e]), e++;
                    if (0 === a.length)
                        return m === O ? void 0 : (y=!1, h(O), void s(t));
                    for (a = x(a, function(e) {
                        return e.promoted ||!r(e)
                    }), u = x(u, function(e) {
                        return e.features.length
                    }), u.length || (u = [{
                        features: [],
                        name: "no-vector",
                        weight: 1
                    }
                    ]), e = 0; e < u.length; e++)
                        a = c(a, u[e]);
                    t.callback(l(i(a), t))
                }
            }
            function i(e) {
                if (e = e || [], e.length && _ate.uls && window.JSON) {
                    if (w = localStorage.getItem(n)) {
                        try {
                            w = JSON.parse(w)
                        } catch (t) {}
                        w.o ? (v = w.o%10, w.o = v + 2) : w = {
                            o: 2
                        }
                    } else 
                        w = {
                            o: 2
                        };
                    if (v > 0)
                        for (; v-->0;)
                            arguments[0].push(arguments[0].shift());
                    localStorage.setItem(n, JSON.stringify(w))
                }
                return e
            }
            var n, o = 0, d = [], u = [], f = _ate.util.gUD(window.addthis_domain || t.domain || window.location.host), g = t.pubid || e.pub(), w=!1, v = 0;
            g && (m || h(O), e.bt2 || (y=!1, h(O)), n = "__feed_" + g + "_" + m.name, k(m.feed, function(e, t) {
                o++, p(t, {
                    pubid: g,
                    domain: f
                }, function(e, t) {
                    return e ? a() : (d.push(t), void a())
                })
            }), k(m.vector, function(t, i) {
                "term_extract" === i ? u.push({
                    features: e.ad.gcv(),
                    name: "term_extract"
                }) : (o++, _(i, {
                    pubid: g,
                    domain: f
                }, function(e, t) {
                    return e ? a() : (u.push(t), void a())
                }))
            }))
        }
        function o(e) {
            return ((e || {}).pvector || {}).features || {}
        }
        function c(t, a, i) {
            var n, r, s, c, d = new g, l = 0, u = [];
            if (i) {
                if (!(i instanceof Function))
                    throw new Error("Matchrule should be a function, got " + i)
            } else 
                i = o;
            return k(a.features || [], function(e, t) {
                d.add(t.name, t.weight)
            }), k(t, function(a, o) {
                var h = e.share.links.canonical;
                l = 0, r = o.url || "", s = r.split("#").shift(), h && h.indexOf(s) + s.length === h.length || (c = i(o), k(c, function(e, t) {
                    n = d.get(t.name), n !== w && (l += n + t.weight)
                }), t[a].score = l, r.score = l, u.push(o))
            }), a.features.length > 0 && u.sort(function(e, t) {
                return t.score - e.score
            }), u
        }
        function d(t) {
            return t.ab = t.ab || e.ab, t.bt = t.bt || e.bt2, function(e) {
                return k(e, function(e, a) {
                    t[e] = a
                }), u(t)
            }
        }
        function l(e, t, a) {
            a && "function" == typeof a || (a = u), t.total || (t.total = e.length);
            var i = 0;
            return k(e, function(e, n) {
                t.pos = i++, t.url = n.url, n.url = a(t), n.title = n.title || ""
            }), e
        }
        function u(t) {
            var a = t.url, i = t.pco, n = t.total, r = t.pos, s = t.ab || "-";
            return a && a.indexOf("at_pco")>-1 && (a = i ? a.replace(/at_pco=(.*)&/, "at_pco=" + i + "&") : a, a.indexOf("at_ab")>-1 ? "-" !== s && (a = a.replace(/at_ab=(.*)&/, "at_ab=" + s + "&")) : a += "&at_ab=" + (t.ab || e.ab), a.indexOf("at_pos")>-1 ? r !== w && (a = a.replace(/at_pos=([0-9]+)/, "at_pos=" + r)) : a += "&at_pos=" + (r || 0), a.indexOf("at_tot")>-1 ? n !== w && (a = a.replace(/at_tot=([0-9]+)/, "at_tot=" + n)) : a += "&at_tot=" + (n || 0), - 1 === a.indexOf("si=") && (a += "&at_si=" + _ate.sid)), a
        }
        function h(t) {
            return !t ||!t instanceof Object?!1 : y?!1 : (y=!0, m = t, void(e.ab = m.name))
        }
        function f(t, a, i) {
            var n, r, s, o = e.pub(), c=!1, d=!0, l = "";
            if (a = a || {}, query = a.query || {}, timeout = parseInt(a.timeout, 10) || 4500, r = a.uid, !r)
                throw new Error("No uid provided");
            for (s in query)
                query.hasOwnProperty(s) && query[s] !== w && (d ? d=!1 : l += "&", l += encodeURIComponent(s) + "=" + encodeURIComponent(query[s]));
            d ? d=!1 : l += "&", l += "callback=" + e.util.scb("fds", o + r, function() {
                var e = Array.prototype.slice.call(arguments, 0);
                c || (e.unshift(null), i.apply(this, e), c=!0, clearTimeout(n))
            }), n = setTimeout(function() {
                i(new Error("Timed out"), null), c=!0
            }, 4500), _ate.ajs(t + "?" + l, 1, !0, !0, null, !0)
        }
        function p(t, a, i) {
            var n, r = {}, s = t.indexOf("view")>-1;
            if (a = a || {}, a.pubid = a.pubid || e.pub(), !t)
                throw new Error("No feed provided");
            t.indexOf(".json") < 0 && (t += ".json"), n = b + t, r.query = {
                pubid: a.pubid || w,
                domain: a.domain || w,
                limit: s ? "25": w
            }, r.uid = t, f(n, r, i)
        }
        function _(t, a, i) {
            var n, r = {};
            if (a = a || {}, a.pubid = a.pubid || e.pub(), !t)
                throw new Error("No vector provided");
            t.indexOf(".json") < 0 && (t += ".json"), n = b + t, r.query = {
                pubid: a.pubid || w
            }, r.uid = t, f(n, r, i)
        }
        var g, m, w, v = window, b = (_ate.abmp >= 0, v.addthis_feed_url || "//q.addthis.com/feeds/1.0/"), y=!1, k = e.util.each, x = (e.util.reduce, e.util.filter), N = {}, O = {
            name: "per-2",
            feed: ["views2"],
            vector: [],
            isProCell: !0
        };
        e = e || {}, e.data = e.data || {}, g = e.data.Set, e.feeds = {
            setTestCell: h,
            _ad: n,
            configure: t,
            get: a,
            recommend: s,
            trend: i,
            decorator: d
        }, e.dctu = u
    }(_ate, _ate.api, _ate), function(e, t) {
        function a(e, t, a) {
            var n = a || 0;
            i(e, t) && (r[e] = n ? {
                v: t,
                p: n
            } : t)
        }
        function i(e, a) {
            var i = {};
            return i[e] = a, s ? (t.error("The pub domain LoJson request has already been submitted."), !1) : undefined !== r[e] ? (t.error("This key: `" + e + "` already exists for LoJson transmission."), !1) : undefined === i[e] ? (t.error("LoJson values cannot be `undefined`."), !1) : !0
        }
        function n() {
            return e.util.rtoKV(r)
        }
        var r = {}, s=!1;
        t.addEventListener("addthis.lojson.complete", function() {
            s=!0
        }), e.lojson = {
            add: a,
            get: n
        }
    }(window._ate, window.addthis);
    var w = window, ac = w.addthis_config || {}, useHighResIcons = _ate.resource.useHighResIcons, css = useHighResIcons ? new _ate.resource.Resource("widgetModernCSS", _atc.rsrcs.widgetModernCSS): new _ate.resource.Resource("widgetOldCSS", _atc.rsrcs.widgetOldCSS), cssIE67 = new _ate.resource.Resource("widgetIE67css", _atc.rsrcs.widgetIE67css), css32 = new _ate.resource.Resource("widgetOld32CSS", _atc.rsrcs.widgetOld32CSS);
    css64 = new _ate.resource.Resource("widgetModernAllCSS", _atc.rsrcs.widgetModernAllCSS), w.addthis && w.addthis.timer && (w.addthis.timer.core = (new Date).getTime()), w._ate = a, w._adr = r, a._ssc = a._ssh = [], a.dat = {}, a._rec.push(function(e) {
        var t, i, n = a.dat.rdy;
        if (each(e, function(e, t) {
            a.dat[e] = t
        }), e.rdy&&!n && (a.xfr = 1, a.track.xtp()), e.ssc && (a._ssc = e.ssc), e.sshs && (e.sshs = e.sshs.replace(/\bpinterest\b/, "pinterest_share"), t = w.addthis_ssh = _duc(e.sshs), a.gssh = 1, a._ssh = t.split(","), _ate.ed.fire("addthis-internal.data.ssh", {}, {
            ssh: t
        })), e.uss) {
            e.uss = e.uss.replace(/\bpinterest\b/, "pinterest_share");
            var r = a._uss = _duc(e.uss).split(",");
            if (w.addthis_ssh) {
                var s = {}, o = [];
                for (r = r.concat(a._ssh), i = 0; i < r.length; i++)
                    t = r[i], s[t] || o.push(t), s[t] = 1;
                r = o
            }
            a._ssh = r, w.addthis_ssh = r.join(",")
        }
        if (e.ups) {
            for (t = e.ups.split(","), a.ups = {}, i = 0; i < t.length; i++)
                if (t[i]) {
                    var c = fromKV(_duc(t[i]));
                    a.ups[c.name] = c
                }
            a._ups = a.ups
        }
        if (e.uid && (a.uid = e.uid, _ate.ed.fire("addthis-internal.data.uid", {}, {
            uid: e.uid
        })), e.bti && (a.bti = e.bti, _ate.ed.fire("addthis-internal.data.bti", {}, {
            bti: e.bti
        })), w.addthis_bt2 && (a.bt2 = w.addthis_bt2), !a.bt2 && e.bt2 && (a.bt2 = e.bt2, _ate.ed.fire("addthis-internal.data.bt2", {}, {
            bt2: e.bt2
        })), e.bts && (a.bts = parseInt(e.bts, 10), _ate.ed.fire("addthis-internal.data.bts", {}, {
            bts: e.bts
        })), e.vts && (a.vts = parseInt(e.vts, 10), _ate.ed.fire("addthis-internal.data.vts", {}, {
            vts: e.vts
        })), e.geo) {
            try {
                a.geo = "string" == typeof e.geo ? _ate.util.geo.parse(e.geo) : e.geo
            } catch (d) {}
            _ate.ed.fire("addthis-internal.data.geo", {}, {
                geo: a.geo
            })
        }
        return e.dbm && (a.dbm = e.dbm), e.atgotcode && (a.sau = e.atgotcode), e.rdy&&!n ? void _ate.ed.fire("addthis-internal.data.rdy") : void 0
    }), a._rec.push(function(e) {
        var t = (e || {}).remoteEvent;
        t && t.type && t.data && _ate.ed.fire(t.type, {}, t.data)
    });
    try {
        if (dl.href.indexOf(_atr)>-1) {
            var ckv = fromKV(d.cookie, ";");
            a._rec[a._rec.length - 1](ckv)
        }
        var serviceConfiguration = {}, params = _ate.util.gsp("addthis_widget.js");
        if ("object" == typeof params) {
            if (params.provider && (serviceConfiguration = {
                provider: _ate.mun(params.provider_code || params.provider),
                auth: params.auth || params.provider_auth || ""
            }, (params.uid || params.provider_uid) && (serviceConfiguration.uid = _ate.mun(params.uid || params.provider_uid)), params.logout && (serviceConfiguration.logout = 1), _ate.prv = serviceConfiguration), params.headless && (_atc.xcs = 1), params.dnp && (_ate.dcp = Number.MAX_VALUE), params.dnt && (_atc.xtr = 1), _ate.util.pae(params), _ate.util.pas(_ate.util.pae), (params.pubid || params.pub || params.username) && (w.addthis_pub = _duc(params.pubid || params.pub || params.username)), w.addthis_pub && w.addthis_config && (w.addthis_config.username = w.addthis_pub), params.domready && (_atc.dr = 1), params.onready && params.onready.match(/[a-zA-Z0-9_\.\$]+/))
                try {
                    _ate.onr = _ate.evl(params.onready)
                } catch (e) {
                w.console && console.log("addthis: onready function (" + params.onready + ") not defined", e)
            }
            params.async && (_atc.xol = 1)
        }
        if (params.delayupgrade ? _atc.noup = 1 : (_atc.ver >= 152 || (w.addthis_conf || {}).ver >= 152) && (_atc.ver = 300), _ate.ed.fire("addthis-internal.params.loaded", {}, {
            geo: a.geo
        }), (w.addthis_conf || {}).xol && (_atc.xol = 1), 120 === _atc.ver) {
            var rc = "atb" + _ate.util.cuid(), entry = _ate.util.gst("addthis_widget"), span = d.ce("span");
            span.id = rc, entry.parentNode.appendChild(span), _ate.igv(), _ate.lad(["span", rc, addthis_share.url || "[url]", addthis_share.title || "[title]"])
        }
        w.addthis_clickout && _ate.lad(["cout"]), _atc.xol || _atc.xcs || ac.ui_use_css===!1 || (css.load(), _ate.bro.ipa && (useHighResIcons ? css64.load() : css32.load()), (_ate.bro.ie6 || _ate.bro.ie7) && cssIE67.load())
    } catch (e) {
        _ate.log.error("main", e)
    }
    if (_adr.bindReady(), _adr.append(main), function() {
        function e(e) {
            return _ate.unj&&!_ate.bro.msi ? JSON.stringify(e) : _ate.util.rtoKV(e, "&&", "==")
        }
        function t(e) {
            if (!e || "string" != typeof e)
                return e;
            if (!_ate.unj || 0 !== e.indexOf("{"))
                return _ate.util.rfromKV(e, "&&", "==");
            try {
                return JSON.parse(e)
            } catch (t) {
                return _ate.util.rfromKV(e)
            }
        }
        function a(e) {
            var a;
            if (!n || ".addthis.com" == e.origin.slice( - 12)) {
                if (!e.data)
                    return;
                a = t(e.data), a.origin = e.origin, i(a)
            }
        }
        function i(e) {
            e.addthisxf && _ate.ed.fire(e.addthisxf, e.target || e.payload, e.payload)
        }
        var n=!1, r = _ate.upm && w.postMessage && ("function" == typeof w.postMessage || "function" == typeof(w.postMessage || {}).call && "function" == typeof(w.postMessage || {}).apply)&&!_ate.bro.ie6&&!_ate.bro.ie7, s=!1;
        extend(_ate, {
            xf: {
                upm: r,
                listen: function() {
                    s || (r && ( - 1 == l.href.indexOf(".addthis.com") && (n=!0), w.attachEvent ? (w.attachEvent("onmessage", a, !1), d.attachEvent("onmessage", a, !1)) : w.addEventListener("message", a, !1), window.addthis._pml.push(a)), s=!0)
                },
                send: function(t, a, i) {
                    r && setTimeout(function() {
                        t.postMessage(e({
                            addthisxf: a,
                            payload: i
                        }), "*")
                    }, 0)
                }
            }
        })
    }(_ate, _ate.api, _ate), function(e, t) {
        function a(e) {
            function i(e) {
                o.sort(function(a, i) {
                    return r(a, i, t.ASC, e)
                })
            }
            function n(e) {
                o.sort(function(a, i) {
                    return r(a, i, t.DSC, e)
                })
            }
            function r(e, t, a, i) {
                var n = e[i], r = t[i];
                return "string" != typeof n || isNaN(parseInt(n, 10)) ? n > r ? a ? 1 : - 1 : n == r ? 0 : a?-1 : 1 : (n = parseInt(n, 10), r = parseInt(r, 10), a ? n - n : n - r)
            }
            function s() {
                for (var e = {}, t = 0; t < o.length; t++)
                    o[t].name ? e[o[t].name] = o[t] : e[o[t]] = o[t];
                return e
            }
            var o = e || [], c = 0 === o.length ? {}
            : s(o), d = o;
            return o._map = c, d.add = function(e) {
                e && (d.push(e), d._map[e.name || e] = e)
            }, d.addOne = function(e) {
                if (e) {
                    if (d._map[e.name || e])
                        return;
                    d.add(e)
                }
            }, d.toMap = function(e) {
                e || (e = "name");
                for (var t = {}, a = 0; a < o.length; a++)
                    t[o[a][e]] = o[a];
                return t
            }, d.map = d.toMap, d.has = function(e) {
                return d.iskey(e)
            }, d.hasKeys = function(e) {
                if ("string" == typeof e && (e = e.split(",")), 0 === e.length)
                    return !1;
                for (var t = 0; t < e.length; t++)
                    if (!d.iskey(e[t]))
                        return !1;
                return !0
            }, d.iskey = function(e) {
                if ("string" == typeof e && (e = e.split(",")), e instanceof Array)
                    for (var t = 0; t < e.length; t++) {
                        var a = e[t].replace(/ /g, "");
                        if (d._map[a])
                            return 1
                    }
                return 0
            }, d.keys = function(e, a, r) {
                a || (a = "name"), r || (r = "score");
                var s = [];
                e == t.ASC ? i(r) : n(r);
                for (var c = 0; c < o.length; c++)
                    s.push("object" == typeof o[c] ? o[c].name : o[c]);
                return s
            }, d.top = function(e, t) {
                t || (t = "score"), n(t);
                for (var a = [], i = 0; i < Math.min(e || 1, o.length); i++)
                    a.push(o[i].name);
                return a
            }, d.filter = function(e) {
                for (var t = [], i = 0; i < o.length; i++)
                    _ate.util.each(e, function(e, a) {
                        o[i][e] == a && t.push(o[i])
                    });
                return a(t)
            }, d
        }
        t.HIGH = 3, t.MED = 2, t.LOW = 1, t.ASC = 1, t.DSC = t.DESC = 0, e.data = e.data || {}, e.data.OrderedSet = a
    }(_ate, _ate.api, _ate), function() {
        var e = 0, t = [{
            name: "menujs",
            url: _atc.rsrcs.menujs,
            test: function() {
                return !!window._atw
            }
        }
        ], a = {
            ".addthis-recommendedbox": "recommendedbox"
        };
        if (!e) {
            window.addthis.auth = {}, window.addthis.bar = {}, window.addthis.login = {}, window.addthis.sharecounters = {}, _ate.api.register({
                context: window.addthis.login,
                methods: {
                    initialize: {
                        callback: function() {
                            addthis.login.initialize.apply(addthis.login, arguments)
                        }
                    },
                    connect: {
                        callback: function() {
                            addthis.login.connect.apply(addthis.login, arguments)
                        }
                    }
                },
                resources: [{
                    name: "sso",
                    url: _atc.rsrcs.ssojs,
                    test: function() {
                        return addthis.login.ost
                    }
                }, {
                    name: "ssocss",
                    url: _atc.rsrcs.ssocss
                }
                ]
            }), _ate.api.addAsync({
                resources: [{
                    name: "lightboxcss"
                }, {
                    name: "lightbox",
                    test: function() {
                        return addthis.lightbox.ost
                    }
                }
                ],
                method: "lightbox",
                context: window.addthis,
                callback: function(e) {
                    addthis.lightbox(e)
                }
            }), _ate.api.addAsync({
                resources: t,
                method: "menu",
                event: "addthis.menu.ready",
                callback: function() {
                    _ate.menu.open.apply(_ate.menu, arguments)
                }
            }), _ate.api.addAsync({
                context: window.addthis.menu,
                method: "close",
                resources: t,
                event: "addthis.menu.ready",
                callback: function() {
                    _ate.menu.close.apply(_ate.menu.close, arguments)
                }
            }), _ate.api.register({
                context: window.addthis.bar,
                methods: {
                    initialize: {
                        resources: [{
                            name: "layersjs",
                            url: _atc.rsrcs.layersjs
                        }
                        ],
                        oncall: function() {},
                        event: "addthis.bar.ready",
                        callback: function() {
                            _ate.track.apc("wmb-1.0"), addthis.bar.initialize.apply(addthis.bar, arguments)
                        }
                    }
                }
            }), window.addthis.bar.show = function() {
                var e = Array.prototype.slice.call(arguments);
                e.push("render"), addthis.bar.initialize.apply(addthis.bar, e)
            }, window.addthis.bar.render = function() {
                var e = Array.prototype.slice.call(arguments);
                e.push("render"), addthis.bar.initialize.apply(addthis.bar, e)
            }, window.addthis.bar.hide = function() {
                _ate.ed.fire("addthis.welcome.hide", {}, {})
            }, _ate.api.addAsync({
                resources: [{
                    name: "contentjs",
                    url: _atc.rsrcs.contentjs,
                    test: function() {
                        return addthis.box.ost
                    }
                }, {
                    name: "contentcss",
                    url: _atc.rsrcs.contentcss
                }
                ],
                method: "box",
                pre: function(e) {
                    for (var t = 0; t < e.length;)
                        e[t]._loading ? e.splice(t, 1) : (e[t]._loading = 1, t++)
                }
            }), _ate.api.addAsync({
                context: window.addthis.ad,
                callback: function() {
                    addthis.ad.menu.apply(addthis.ad, arguments)
                },
                method: "menu",
                resources: new _ate.resource.Bundle(new _ate.resource.Resource("embedcss", _atc.rsrcs.embedcss, function() {
                    return !0
                }), new _ate.resource.Resource("embedjs", _atc.rsrcs.embed, function() {
                    return w.addthis && ((w.addthis.ad || {}).embed || {}).ost
                }))
            }), _ate.api.addAsync({
                resources: [{
                    name: "overlayjs",
                    url: _atc.rsrcs.overlayjs,
                    test: function() {
                        return (addthis.overlay || {}).ost
                    }
                }
                ],
                method: "overlay",
                pre: function() {
                    _ate.track.apc("ovr-" + _ate.ver())
                }
            }), _ate.api.register({
                resources: [{
                    name: "layersjs",
                    url: _atc.rsrcs.layersjs
                }
                ],
                methods: {
                    layers: {
                        event: "addthis.layers.ready",
                        callback: function() {
                            addthis.layers.apply(addthis.layers, arguments)
                        },
                        oncall: function() {
                            for (var e, t, i, n =- 1, r = {
                                share: "smlsh-1.0",
                                follow: "smlfw-1.0",
                                recommended: "smlre-1.0",
                                whatsnext: "smlwn-1.0",
                                warning: "smlwrn-1.0",
                                recommendedbox: "smlreb-1.0"
                            }, s=!1; ++n < addthis.plo.length;)
                                if (t = addthis.plo[n], "layers" === t.call) {
                                    i = t.args[0];
                                    for (e in i)
                                        r[e] && (_ate.track.apc(r[e]), "warning" === e && (_ate.aa = 1));
                                        _ate.track.apc("sml-1.0")
                                }
                            _adr.append(function() {
                                for (var e in a)
                                    if (a.hasOwnProperty(e)) {
                                        var t = _ate.util.select(e), i = {};
                                        t.length && (i[a[e]]=!0, i.pi=!1, addthis.layers(i), s=!0)
                                    }
                                s && addthis.layers({
                                    pii: !0
                                })
                            })
                        }
                    }
                }
            }), _ate.api.register({
                context: addthis.sharecounters,
                methods: {
                    getShareCounts: {
                        resources: [{
                            name: "counter",
                            url: _atc.rsrcs.counter,
                            test: function() {
                                return 1 === addthis.sharecounters.ost
                            }
                        }
                        ],
                        callback: function() {
                            addthis.sharecounters.getShareCounts.apply(addthis.sharecounters, arguments)
                        }
                    }
                }
            });
            var i = [{
                name: "countercss",
                url: _atc.rsrcs.countercss
            }, {
                name: "counter",
                url: _atc.rsrcs.counter,
                test: function() {
                    return window.addthis.counter.ost
                }
            }
            ];
            (_ate.bro.ie6 || _ate.bro.ie7) && i.push({
                name: "counterIE67css",
                url: _atc.rsrcs.counterIE67css
            }), w.JSON && w.JSON.stringify || i.push({
                name: "json2",
                url: _atr + "static/r07/json2.js",
                test: function() {
                    return w.JSON && w.JSON.stringify
                }
            }), _ate.api.addAsync({
                method: "counter",
                resources: i
            }), _ate.api.addAsync({
                method: "count",
                resources: i
            }), addthis.data.getShareCount = function(e, t) {
                var a = new _ate.resource.ResourceBundle(i);
                a.addEventListener("load", function() {
                    addthis.data.getShareCount(e, t)
                }), a.load()
            }, e = 1
        }
    }(), function() {
        function e(e) {
            if (!e || e.length < 5 || e.length > 30)
                throw new Error("Service code must be between 5 and 30 characters.");
            if ( - 1 == e.search(/^[a-zA-Z0-9_]+$/))
                throw new Error("Service code must consist entirely of letters, numbers and underscores.");
            return !0
        }
        addthis.logShare = function(t, a, i, n) {
            var r = n || addthis_config, s = i || addthis_share;
            r.product = "hdl-" + _ate.ver(), s.imp_url = 0;
            var t = t || i && i.url || addthis_share.url, o = _ate.track.dcu(t);
            o.rsc&&!a && (a = o.rsc), e(a) && (s.url = t, _ate.share.track(a, 0, s, r))
        }, addthis.addClickTag = function(t, a, i) {
            var t = t || i && i.url || addthis_share.url;
            return e(a) && (t = _ate.track.cur(_ate.track.cof(t), a)), t
        }
    }(), window.addthis || (window.addthis = {}), addthis.user = function() {
        function e(e, t) {
            return N.reduce(["getID", "getGeolocation", "getServiceShareHistory"], e, t)
        }
        function t(e, t) {
            return function(a) {
                setTimeout(function() {
                    a(N[e] || t)
                }, 0)
            }
        }
        function a(a) {
            A || a && a.uid && (null !== x && clearTimeout(x), x = null, A = 1, e(function(e, a, i) {
                return S[a] = S[a].queuer.flush(t.apply(O, e[i]), O), e
            }, [["uid", ""], ["geo", ""], ["_ssh", []]]))
        }
        function i() {
            var e = {
                uid: "x",
                geo: {},
                ssh: "",
                ups: ""
            };
            E = 1, a(e)
        }
        function n(e) {
            return N.util.geo.isin(e, N.geo)
        }
        function r(e) {
            return C.interests.iskey(e)
        }
        function s(e) {
            return C.tags.iskey(e)
        }
        function o(e) {
            return C.tags.hasKeys(e)
        }
        function c(e) {
            if (_ate.uud || _ate.ed.fire("addthis-internal.api", window.addthis || {}, {
                call: "rdy"
            }), _ate.uud = 1, A && ("en" == _ate.jlng() || window.addthis_translations)) {
                {
                    _ate.share.services.init(window.addthis_config), (window.addthis_options || "").replace(",more", "").split(",")
                }
                if (v())
                    return void e(C);
                var t = [], a = N.cookie.tag.get();
                for (var i in _ate.bti)
                    t.push(_ate.bti[i]);
                C.interests = new I(t), C.tags = new I(a);
                var r = new I;
                _ate.util.each(N._uss, function(e, t) {
                    r.addOne({
                        name: t,
                        score: addthis.HIGH
                    })
                }), _ate.util.each(N._ssc, function(e, t) {
                    r.addOne({
                        name: e,
                        score: t
                    })
                }), C.services = r, C.activity = {}, C.activity.social = _ate.bts, C.activity.view = _ate.vts, C.source = g(), j.location = C.location = _ate.geo || {}, C.location.contains = n, e && e(C), _ate.ed.fire("addthis.user.data", window.addthis || {}, {})
            } else 
                "en" === _ate.jlng() || window.addthis_translations ? setTimeout(function() {
                    c(e)
                }, 250) : (_ate.ed.addEventListener("addthis.i18n.ready", function() {
                    c(e)
                }), _ate.alg())
        }
        function d(e) {
            c(e)
        }
        function l() {
            return _ate.cookie.view.cla() > 0
        }
        function u(e) {
            var t = e;
            "string" == typeof t && (t = t.split(",")), _ate.cookie.tag.add(t)
        }
        function h(e, t) {
            var a = function() {
                var a = Array.prototype.slice.call(arguments);
                return _ate.ed.fire("addthis-internal.api", window.addthis || {}, {
                    call: e
                }), t.apply(this, a)
            };
            return a
        }
        function f(e) {
            _ate.ed.fire("addthis-internal.api", window.addthis || {}, {
                call: e
            })
        }
        function p() {
            f("gti");
            var e = w(), t = [];
            return _ate.util.each(e.behaviors, function(e, a) {
                t.push(a.id)
            }), t
        }
        function _() {
            return f("gts"), C.services
        }
        function g() {
            return f("gtt"), N.track.ts.get()
        }
        function m() {
            return f("gtl"), C.location
        }
        function w() {
            var e = _ate.bt2, t = {};
            if (e) {
                t = {
                    timeStamp: new Date(1e3 * parseInt(e.substring(0, 8), 16)),
                    behaviors: []
                };
                for (var a, i = 8, n = _ate.util.baseToDecimal; i + 9 <= e.length;) {
                    var r = {};
                    a = e.substring(i, i + 9), r.id = n(a.substring(0, 4), 64), r.bucketWidth = n(a.substring(4, 5), 64), r.buckets = [n(a.charAt(5), 64), n(a.charAt(6), 64), n(a.charAt(7), 64), n(a.charAt(8), 64)], t.behaviors.push(r), i += 9
                }
            }
            return t
        }
        function v() {
            return "0000000000000000" == N.uid
        }
        function b(e) {
            return N._ssh && N._ssh.indexOf(e)>-1 || N._ssc && N._ssc[e]
        }
        function y(e) {
            var t = g();
            if ("social" == t.type) {
                if (!e)
                    return !1;
                if ("string" == typeof e && (e = e.split(",")), e instanceof Array) {
                    for (var a = {}, i = 0; i < e.length; i++) {
                        if ("all" === e[i] && t.service && N.services.list[t.service])
                            return !0;
                        a[e[i]] = 1
                    }
                    if (!a[t.service])
                        return !1
                }
                return !0
            }
            return !1
        }
        function k(e) {
            var t, a = g();
            if ("search" == a.type) {
                if ("string" == typeof e && (e = e.split(",")), e instanceof Array) {
                    var i = {};
                    for (t = 0; t < e.length; t++)
                        i[e[t]] = 1;
                    if (a.terms && a.terms.length)
                        for (t = 0; t < a.terms.length; t++)
                            if (!i[a.terms[t]])
                                return !1
                }
                return !0
            }
            return !1
        }
        {
            var x, N = _ate, O = addthis, T = 1e3, S = {}, A = 0, E = 0, C = {
                tags: N.cookie.tag.get()
            }, I = N.data.OrderedSet;
            _ate.data.Set
        }
        x = setTimeout(i, T), N._rec.push(a), S.getData = d, S.getPreferredServices = function(e) {
            if ("en" == _ate.jlng() || window.addthis_translations) {
                var t = (_ate.share.services.init(window.addthis_config), (window.addthis_options || "").replace(",more", "").split(","));
                e(t)
            } else 
                _ate.ed.addEventListener("addthis.i18n.ready", function() {
                    var t = (_ate.share.services.init(window.addthis_config), (window.addthis_options || "").replace(",more", "").split(","));
                    e(t)
                }), _ate.alg()
        };
        var j = {
            ready: c,
            isReturning: l,
            isOptedOut: h("ioo", v),
            isUserOf: h("iuf", b),
            hasInterest: r,
            hasTag: s,
            hasTags: o,
            isLocatedIn: n,
            tag: u,
            interests: p,
            services: _,
            location: m,
            parseBT2Cookie: w
        };
        return addthis.session = {
            source: g,
            isSocial: h("isl", y),
            isSearch: h("ish", k)
        }, _ate.extend(S, j), e(function(e, t) {
            return e[t] = new O._Queuer(t).call, e
        }, S)
    }(), !window.addthis.osta) {
        addthis.osta = 1, window.addthis.cache = {}, window.addthis.ed = _ate.ed, window.addthis.init = function() {
            _adr.onReady(), addthis.ready && addthis.ready()
        }, window.addthis.cleanup = function() {
            _ate.util.each((window.addthis || {})._pml || [], function(e, t) {
                _ate.util.unlisten(window, "message", t)
            })
        }, _ate.extend(window.addthis.util, {
            getServiceName: _ate.services.getName
        }), window.addthis.addEventListener = _ate.util.bind(_ate.ed.addEventListener, _ate.ed), window.addthis.removeEventListener = _ate.util.bind(_ate.ed.removeEventListener, _ate.ed), _ate.extend(addthis, _ate.api);
        var d = document, postloaded = 0, u = undefined, w = window, customServices = {}, css64 = new _ate.resource.Resource("widgetModernAllCSS", _atc.rsrcs.widgetModernAllCSS), css32 = new _ate.resource.Resource("widgetOld32CSS", _atc.rsrcs.widgetOld32CSS), css20 = new _ate.resource.Resource("widgetOld20CSS", _atc.rsrcs.widgetOld20CSS), need32=!1, need20=!1, globalConfig, globalShare, servicesInitted, dataLoaded, upConfig = {}, upShare = {}, body = null, _select = _ate.util.select, buttons = [], counters = [], retitle = [], v, f_title = {
            rss: "Subscribe"
        }, b_title = {
            tweet: "Tweet",
            pinterest_share: "Pinterest",
            email: "Email",
            mailto: "Email",
            print: "Print",
            favorites: "Favorites",
            twitter: "Tweet",
            digg: "Digg",
            more: "View more services"
        }, json = {
            email_vars: 1,
            passthrough: 1,
            modules: 1,
            templates: 1,
            services_custom: 1
        }, nosend = {
            feed: 1,
            more: _ate.ver() < 300,
            email: _ate.ver() < 300,
            mailto: 1
        }, nowindow = {
            feed: 1,
            email: _ate.ver() < 300,
            mailto: 1,
            print: 1,
            more: !_ate.bro.ipa && _ate.ver() < 300,
            favorites: 1
        }, trackable = {
            print: 1,
            favorites: 1,
            mailto: 1
        }, ignoreshare = {
            pinterest_pinit: _ate.ver() < 300,
            pinterest_share: _ate.ver() < 300
        }, sharetowindow = {
            email: _ate.ver() >= 300,
            more: _ate.ver() >= 300
        };
        _ate.ed.addEventListener("addthis-internal.data.ssh", function() {
            dataLoaded = 1
        }), _ate.ulg(function(e) {
            for (b_title.email = b_title.mailto = e[0][4], b_title.print = e[0][22], b_title.favorites = e[0][5], b_title.more = e[0][2]; retitle.length > 0;)
                v = retitle.pop(), v && v.link && v.title && (v.link.title = b_title[v.title] || v.link.title)
        }), addthis.addEvents = function(e, t, a) {
            if (e) {
                var i = e.onclick || function() {}, n = trackable[t] ? function() {
                    _ate.share.track(t, 0, e.share, e.conf)
                }
                : function() {
                    _ate.share.notify(t, e.share, e.conf, e)
                };
                e.onclick = e.conf.data_ga_tracker || addthis_config.data_ga_tracker || e.conf.data_ga_property || addthis_config.data_ga_property ? function() {
                    return _ate.gat(t, a, e.conf, e.share), n(), i()
                } : function(e) {
                    return ignoreshare[t] || n(), i(e)
                }
            }
        }, _ate.api.ptpa = _parseThirdPartyAttributes, _ate.gat = gat, addthis.update = function(e, t, a) {
            if ("share" == e) {
                "url" == t && _ate.usu(0, 1), window.addthis_share || (window.addthis_share = {}), window.addthis_share[t] = a, upShare[t] = a;
                for (var i in addthis.links) {
                    var n = addthis.links[i], r = new RegExp("&" + t + "=(.*)&"), s = "&" + t + "=" + _euc(a) + "&";
                    !(n.conf || {}).follow && n.nodeType && (n.share && (n.share[t] = a), n.noh || (n.href = n.href.replace(r, s), - 1 == n.href.indexOf(t) && (n.href += s)))
                }
                for (var i in addthis.ems) {
                    var n = addthis.ems[i];
                    n.href = _ate.share.genieu(addthis_share)
                }
            } else 
                "config" == e && (window.addthis_config || (window.addthis_config = {}), window.addthis_config[t] = a, upConfig[t] = a)
        }, addthis._render = _render, addthis.button = function(e, t, a) {
            t = t || {}, t.product || (t.product = "men-" + _ate.ver()), _render(e, {
                conf: t,
                share: a
            }, {
                internal: "img"
            })
        }, addthis.toolbox = function(e, t, a, i, n) {
            function r(e, t, a) {
                var i = d.ce(e);
                return i.className = t, a && (i.id = a), i
            }
            for (var s = _select(e), o = 0; o < s.length; o++) {
                var c, l = s[o], u = window.jQuery, h = _getATtributes(l, t, a, i), f = document.ce("div");
                if (l.services = {}, l && l.className && (h.conf.product || (h.conf.product = "tbx" + (l.className.indexOf("32x32")>-1 ? "32" : l.className.indexOf("20x20")>-1 ? "20" : "") + "-" + _ate.ver()), l.className.indexOf("peekaboo_style")>-1 && (_atc._ld_pkcss || (new _ate.resource.Resource("peekaboo", _atc.rsrcs.peekaboocss, function() {
                    return !0
                }).load(), _atc._ld_pkrcss = 1), l.peekaboo || (l.peekaboo=!0, l.onmouseover = function() {
                    l.is_hovered = 1, l.timeout = setTimeout(function() {
                        l.is_hovered && (u ? u(".addthis_peekaboo_style ul").slideDown("fast") : l.getElementsByTagName("ul")[0].style.display = "block")
                    }, 500)
                }, l.onmouseout = function() {
                    l.is_hovered = 0, l.timeout && clearTimeout(l.timeout), l.timeout = setTimeout(function() {
                        l.is_hovered || (u ? u(".addthis_peekaboo_style ul").slideUp("fast") : l.getElementsByTagName("ul")[0].style.display = "none")
                    }, 500)
                })), l.className.indexOf("floating_style")>-1 && (_atc._ld_barcss || (new _ate.resource.Resource("fixedcss", _atc.rsrcs.fltcss, function() {
                    return !0
                }).load(), _atc._ld_barcss = 1), !l.fixed))) {
                    l.fixed=!0;
                    for (var p = r("DIV", "at-floatingbar-inner"), a = r("DIV", "at-floatingbar-share"), _ = r("DIV", "addthis_internal_container"); l.childNodes.length > 0;)
                        _.appendChild(l.firstChild);
                    a.appendChild(_), p.appendChild(a), l.appendChild(p), "BackCompat" == document.compatMode && _ate.bro.msi&&!n && (l.setAttribute("className", l.className.replace("addthis_bar", "").replace("addthis_bar_vertical", "").replace("addthis_floating_style", "addthis_quirks_mode")), l.className.indexOf("addthis_32x32_style")>-1 ? l.setAttribute("className", l.className + " addthis_bar_vertical_medium") : l.className.indexOf("addthis_16x16_style")>-1 ? l.setAttribute("className", l.className + " addthis_bar_vertical_small") : l.className.indexOf("addthis_counter_style")>-1 && l.setAttribute("className", l.className + " addthis_bar_vertical_large"))
                }
                l && l.getElementsByTagName && (c = l.getElementsByTagName("a"), c && _renderToolbox(c, h.conf, h.share, !i, !i), l.appendChild(f)), f.className = "atclear"
            }
        }, addthis.ready = function(e) {
            addthis.ost || (addthis.ost = 1, doRenderPass(), _ate.ed.fire("addthis.ready", addthis), _ate.onr && _ate.onr(addthis), callPostLoads(), _ate.share.sub(), w.addthis_config.eua = w.addthis_config.eua ||!0, w.addthis_config.eua && _ate.ver() >= 300&&!_atc.xck&&!_ate.bro.ie6&&!_ate.bro.ie7 && addthis.auth.init(), e && "function" == typeof e && e())
        }, addthis.util.getAttributes = _getATtributes, addthis.ad = _ate.extend(addthis.ad, _ate.ad), addEventListeners(), _atc.xol ? (callPostLoads(), _adr.isReady && doRenderPass()) : _adr.append(function() {
            window.addthis.ready()
        }), _ate.ed.fire("addthis-internal.ready", addthis)
    }
}(), _atc.dr && _adr.onReady()), _ate.util.pae(_ate.util.gtt()), _atc.abf && addthis_open(document.getElementById("ab"), "emailab", window.addthis_url || "[URL]", window.addthis_title || "[TITLE]");
