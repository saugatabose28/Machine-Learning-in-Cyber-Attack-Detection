/*!CK:2614387234!*/
/*1413772829,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["Nm4nS"]);
}

__d("Base64", [], function(a, b, c, d, e, f) {
    var g = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    function h(l) {
        l = (l.charCodeAt(0)<<16) | (l.charCodeAt(1)<<8) | l.charCodeAt(2);
        return String.fromCharCode(g.charCodeAt(l>>>18), g.charCodeAt((l>>>12) & 63), g.charCodeAt((l>>>6) & 63), g.charCodeAt(l & 63));
    }
    var i = '>___?456789:;<=_______' + '\0\1\2\3\4\5\6\7\b\t\n\13\f\r\16\17\20\21\22\23\24\25\26\27\30\31' + '______\32\33\34\35\36\37 !"#$%&\'()*+,-./0123';
    function j(l) {
        l = (i.charCodeAt(l.charCodeAt(0) - 43)<<18) | (i.charCodeAt(l.charCodeAt(1) - 43)<<12) | (i.charCodeAt(l.charCodeAt(2) - 43)<<6) | i.charCodeAt(l.charCodeAt(3) - 43);
        return String.fromCharCode(l>>>16, (l>>>8) & 255, l & 255);
    }
    var k = {
        encode: function(l) {
            l = unescape(encodeURI(l));
            var m = (l.length + 2)%3;
            l = (l + '\0\0'.slice(m)).replace(/[\s\S]{3}/g, h);
            return l.slice(0, l.length + m - 2) + '=='.slice(m);
        },
        decode: function(l) {
            l = l.replace(/[^A-Za-z0-9+\/]/g, '');
            var m = (l.length + 3) & 3;
            l = (l + 'AAA'.slice(m)).replace(/..../g, j);
            l = l.slice(0, l.length + m - 3);
            try {
                return decodeURIComponent(escape(l));
            } catch (n) {
                throw new Error('Not valid UTF-8');
            }
        },
        encodeObject: function(l) {
            return k.encode(JSON.stringify(l));
        },
        decodeObject: function(l) {
            return JSON.parse(k.decode(l));
        },
        encodeNums: function(l) {
            return String.fromCharCode.apply(String, l.map(function(m) {
                return g.charCodeAt((m|-(m > 63))&-(m > 0) & 63);
            }));
        }
    };
    e.exports = k;
}, null);
__d("IntlUtils", ["AsyncRequest", "Cookie", "goURI"], function(a, b, c, d, e, f, g, h, i) {
    var j = {
        setXmode: function(k) {
            (new g()).setURI('/ajax/intl/save_xmode.php').setData({
                xmode: k
            }).setHandler(function() {
                document.location.reload();
            }).send();
        },
        setAmode: function(k) {
            new g().setURI('/ajax/intl/save_xmode.php').setData({
                amode: k,
                app: false
            }).setHandler(function() {
                document.location.reload();
            }).send();
        },
        setLocale: function(k, l, m, n) {
            if (!m)
                m = k.options[k.selectedIndex].value;
            j.saveLocale(m, true, null, l, n);
        },
        saveLocale: function(k, l, m, n, o) {
            new g().setURI('/ajax/intl/save_locale.php').setData({
                aloc: k,
                source: n,
                app_only: o
            }).setHandler(function(p) {
                if (l) {
                    document.location.reload();
                } else 
                    i(m);
            }).send();
        },
        setLocaleCookie: function(k, l) {
            h.set('locale', k, 7 * 24 * 3600000);
            i(l);
        }
    };
    e.exports = j;
}, null);
__d("legacy:intl-base", ["IntlUtils"], function(a, b, c, d, e, f, g) {
    a.intl_set_xmode = g.setXmode;
    a.intl_set_amode = g.setAmode;
    a.intl_set_locale = g.setLocale;
    a.intl_save_locale = g.saveLocale;
    a.intl_set_cookie_locale = g.setLocaleCookie;
}, 3);
__d("LoginFormController", ["Event", "ge", "Button", "Cookie"], function(a, b, c, d, e, f, g, h, i, j) {
    f.init = function(k, l, m) {
        g.listen(k, 'submit', function() {
            if (window.__cookieReload)
                window.clearInterval(window.__cookieReload);
            i.setEnabled(l, false);
            setTimeout(i.setEnabled.bind(null, l, true), 15000);
        });
        var n = h('lgnjs');
        if (n) {
            var o = Math.floor(Date.now() / 1000);
            n.value = o;
        }
        var p = parseInt(j.get('m_ts'), 10), q = m != null;
        if (p > o - 60)
            q = false;
        if (q) {
            var r, s = function() {
                if (j.get('c_user') != null) {
                    window.clearInterval(r);
                    j.set('m_ts', Math.floor(Date.now() / 1000), null, '/', false);
                    window.location.href = m;
                }
            };
            r = window.setInterval(s, 1000);
            s();
        }
    };
}, null);
__d("useragentcm", ["Bootloader", "UACMConfig", "ge"], function(a, b, c, d, e, f, g, h, i) {
    function j() {
        var k = false, l = {
            ffid: (typeof(h.ffid) == "undefined" ? 0 : h.ffid),
            ffid1: (typeof(h.ffid1) == "undefined" ? 0 : h.ffid1),
            ffid2: (typeof(h.ffid2) == "undefined" ? 0 : h.ffid2),
            ffid3: (typeof(h.ffid3) == "undefined" ? 0 : h.ffid3),
            ffid4: (typeof(h.ffid4) == "undefined" ? 0 : h.ffid4),
            ffver: (typeof(h.ffver) == "undefined" ? 0 : h.ffver)
        };
        l.qp = document.location;
        var m = i('login_form');
        if (m && m.action)
            l.qm = m.action;
        var n = '\146\141\143\145\142\157\157\153', o = new RegExp('(^|\\.)' + n + '\\.com$', 'i').test(document.location.hostname);
        if (!o) {
            k = true;
        } else if (l.qm) {
            var p = l.qm.split('?')[0].split('#')[0], q = 65535;
            for (var r = 0; r < p.length; r++) {
                var s = ((q>>8)^p.charCodeAt(r)) & 255;
                s^=s>>4;
                q = ((q<<8)^(s<<12)^(s<<5)^s) & 65535;
            }
            if (h.ffver && h.ffver != q)
                k = true;
        }
        if (k) {
            var t = document.location.protocol + '//www.' + n + '.com/ajax/ua_callback.php';
            if (document.referrer)
                l.qr1 = document.referrer;
            g.loadModules(["AsyncSignal"], function(v) {
                new v(t, l).send();
            });
        }
    }
    e.exports = j;
}, null);
__d("legacy:si-countermeasures", ["useragentcm"], function(a, b, c, d) {
    a.useragentcm = b('useragentcm');
}, 3);
__d("XRegistrationValidateControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/ajax\/registration\/validation\/{type}\/", {
        type: {
            type: "Enum",
            required: true
        },
        contactpoint: {
            type: "String"
        }
    });
}, null);
