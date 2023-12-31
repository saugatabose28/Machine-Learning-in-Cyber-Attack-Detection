var CookieAds = {
    getNowTime: function() {
        var a = new Date, b = a.getFullYear(), c = a.getMonth() + 1, d = a.getDate(), e = a.getHours(), f = a.getMinutes(), g = a.getSeconds(), h = "";
        return h = b + "-" + c + "-" + d + " " + e + ":" + f + ":" + g
    },
    getSkuId: function() {
        var a = [];
        if ("undefined" != typeof dxSkuList)
            for (var b = 0, c = dxSkuList.length; c > b; b++)
                a.push(dxSkuList[b].SkuId);
        return a
    },
    getArrClick: function(a) {
        var b = this, c = "t=" + b.getNowTime() + "&p=" + _global_dsp_adid + "&s=" + a + "&y=1";
        return c
    },
    setClickCookie: function(a) {
        var b = this, c = b.getArrClick(a);
        b.init("ads_info", c)
    },
    getMatId: function() {
        {
            var a = this;
            "t=" + a.getNowTime() + "&p=" + _global_dsp_adid + "&m=" + dataid + "&y=1"
        }
    },
    enabled: function(a) {
        var b=!1, c = this;
        return "string" == typeof c.get(a) ? b=!0 : b
    },
    getAdsInfoLength: function(a) {
        var b = this, c = b.enabled(a) ? b.get(a).split("|").length: 0;
        return c
    },
    getArrAdsInfo: function(a) {
        var b = this, c = b.enabled(a) ? b.get(a).split("|"): [];
        return c
    },
    set: function(a, b, c) {
        var c = c || {};
        if (c.domain = c.domain || "", c.path = c.path || "/", c.expires = c.expires || 31536e6, "number" == typeof c.expires) {
            var d = new Date;
            d.setTime(d.getTime() + c.expires)
        }
        document.cookie = a + "=" + b + ";expires=" + d.toGMTString() + (c.domain ? ";domain=" + c.domain : "") + ";path=" + c.path
    },
    get: function(a) {
        var b, c = encodeURIComponent(a) + "=", d = document.cookie.indexOf(c), e = null;
        return d>-1 && (b = document.cookie.indexOf(";", d), - 1 == b && (b = document.cookie.length), e = decodeURIComponent(document.cookie.substring(d + c.length, b))), e
    },
    remove: function(a) {
        this.set(a, "", {
            expires: - 3600
        })
    },
    uuid: function() {
        function a() {
            var a = {}, b = window, c = b.navigator, d = "toLowerCase", e = b.screen, f = document;
            return a.D = e ? e.width + "x" + e.height : "-", a.C = e ? e.colorDepth + "-bit" : "-", a.language = (c && (c.language || c.browserLanguage) || "-")[d](), a.javaEnabled = c && c.javaEnabled() ? 1 : 0, a.characterSet = f.characterSet || f.charset || "-", a
        }
        function b() {
            return Math.round(2147483647 * Math.random())
        }
        function c() {
            for (var b = a(), c = window.navigator, b = c.appName + c.version + b.language + c.platform + c.userAgent + b.javaEnabled + b.D + b.C + (document.cookie ? document.cookie : "") + (document.referrer ? document.referrer : ""), c = b.length, d = window.history.length; d > 0;)
                b += d--^c++
        }
        return b()^2147483647 & c()
    },
    initjda: function() {
        var a = this;
        if (!a.enabled("__jda")) {
            var b, c;
            c = Date.parse(new Date).toString().substring(0, 10), b = "." + a.uuid() + "." + c + "." + c + "." + c + ".0", a.set("__jda", b, {
                expires: 15552e6,
                domain: ".jd.com"
            })
        }
    }
};
