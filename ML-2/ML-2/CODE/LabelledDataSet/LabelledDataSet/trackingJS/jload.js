var __IntegralASDiagnosticCall = function() {};

try {
    var __IntegralASConfig = {
        jsDoSplit : "false",
        cocaPuffsPath : "",
        debug : "false",
        killPhrases : "",
        useAdTalk : "true",
        jsDiag: 'false',
        version: '0',
        mtCell: 10,
        mtSample: 5,
        cookieDomain: 'sc.iasds01.com/dtc',
        trackMouse : "true",
        exchList: {
            'e1': 'nqzryq',
            'e2': 'tbbtyrnqf.t.qbhoyrpyvpx',
            'e3': 'ehovpbacebwrpg',
            'e4': 'chozngvp',
            'e5': 'bcrak',
            'e6': 'nqoevgr.pbz',
            'e7': 'tynz.pbz',
            'e8': 'lvryqznantre.pbz',
            'e9': 'yvwvg',
            'e10': 'nqakf',
            'p11': 'ghea.pbz',
            'p12': 'zngugnt',
            'p13': 'vaivgrzrqvn',
            'p14': 'qngnkh',
            'n15': 'zrqvn6qrterrf',
            'n16': 'dhnagfreir',
            'n17': 'esvuho.arg',
            'a18': 'napubeserr',
            'a19': 'eff2frnepu',
            'a20': 'mgfgngvp.pbz',
            'n21': 'ovq.npr.nqiregvfvat',
            'e22': 'wnfba',
            'v23': 'fcbgkpqa',
            'v24': 'ogeyy',
            'v25': 'yvirenvy',
            'v26': 'nqncgi',
            'v27': 'nqnc.gi',
            'n29': 'qbzqrk.pbz',
            'n30': 'ernyih.arg',
            'd31': 'cvengronl',
            'd32': 'cebklonl',
            'd33': 'onlcebkl',
            'd34': 'cvengrcebkl',
            'd35': 'cebklcvengr',
            'd36': 'onlcvengr'
        },
        protocol: 'http',
        jsref : "http://www.toksnn.com/ads/ybr_ent1?ref=&pub=ybr_181_17909",
        asid : "5703fe16-7a96-11e4-aa9d-02e76a2f4ed5",
        allowViewability : "true",
        jsFeatures : "mousetrack:0,cocoapuffs,viewabilityready,consecutive,cachebust:0,forcecocoa:0,rattie:0,exch,recordalternate:100,usedtdomain,nextcocoa,bapiDiag,cookie,postDts:0,videotwoseconds,getPl,decodePl,resolution,usetpl,usesca:1,tpiLookupURL,hundredpct:0,jloadDiag:0",
        adTalkDtCall : "true",
        adsafeDomain : "adsafeprotected.com:80",
        minimizeCalls : "false",
        adWidth : "",
        adHeight : "",
        forceAppend : "true",
        requrl : "http://pixel.adsafeprotected.com/",
        reqquery : "anId=6889&advId=756141&campId=ToKm&pubId=ybr_181_17909&chanId=1&placementId=unknown",
        mode : "jload",
        adsafeSrc : "",
        adsafeSep : "",
        _onAPIResult : __IntegralASConfig && __IntegralASConfig.onAPIResult,
        _onInViewMRC15 : __IntegralASConfig && __IntegralASConfig.onInViewMRC15,
        _onMeasurable : __IntegralASConfig && __IntegralASConfig.onMeasurable,
        _onInViewMRC : __IntegralASConfig && __IntegralASConfig.onInViewMRC,
        _onInViewMRC5 : __IntegralASConfig && __IntegralASConfig.onInViewMRC5,
        getTpl: "false",
        use100v: false,
        useBapiCallback: "",
        useViewabilityNotification: "",
        scriptUrl : "http://pixel.adsafeprotected.com/jload?anId=6889&advId=756141&campId=ToKm&pubId=ybr_181_17909&chanId=1&placementId=unknown",
        accountForSadImps: '',
        sendCookie: 'false',
        tpiLookupURL: "",
        fwMonitoring: '',
        mn: "app02aza2",
        videoId : ''
    };

    if (__IntegralASConfig.jsFeatures.indexOf('asidJsDiagnostic') !== - 1) {
        var fakeErr = {
            message: __IntegralASConfig.asid 
        };
        __IntegralASDiagnosticCall('asid', fakeErr);
    }

    __IntegralASConfig.birthdate = new Date().getTime();
    __IntegralASConfig.thisScriptNode = (function() {
        var tempScript,
        embedded = window != top,
        scripts = document.getElementsByTagName('script'),
        result = scripts[scripts.length - 1],
        scriptIndex = scripts.length,
        useDocWrite = 'jss,jsi,jspix'.indexOf(__IntegralASConfig.mode) !== - 1,
        scriptUrl = __IntegralASConfig.scriptUrl;

        try {
            while (--scriptIndex >= 0) {
                tempScript = scripts[scriptIndex];
                if (tempScript.src && tempScript.src.indexOf(scriptUrl) === 0 && tempScript.getAttribute('data-ias-script-tag') === null) {
                    result = tempScript;
                    tempScript.setAttribute('data-ias-script-tag', 'found');
                    break;
                }
            }
            if (scriptIndex === 0 && useDocWrite && !embedded) {
                document.write('<span id="s' + __IntegralASConfig.asid + '"/>');
                result = document.getElementById('s' + __IntegralASConfig.asid).parentNode;
            }
        } catch (e) {}

        return result;
    }());

} catch (err) {
    __IntegralASConfig = {};
    __IntegralASDiagnosticCall('bootstrapper', err);
}

__IntegralASConfig.initialize = function(l) {
    var Ia = function() {
        var a =- 1 !== l.mode.indexOf("jsvid"), c = g.isDef(window.JSON) && g.isDef(window.postMessage), c = "true" === l.useAdTalk && c, b, d, e, f, h = T(), k = U(), p = new ca, n = da(p), q = new ea(p), t = fa(), x = ga(), s = ha(), B = ia(), y = ja(), y = ka(n, h, y, p), D = la(n), w = ma(n), A = na(n), C = oa(), aa = pa(A, n), L = qa(A), G = a ? ra(s) : {}, u = a ? sa(l.videoId, h, p, s, G) : {}, a = ta(C, aa, B, u), C = ua(a, n, L, t), v = va(a, y, n, h, p, w, q, A, s, u, G), z = wa(y, v, k), H = xa(n, h, p, k), k = ya(y, v, n, w, q), G = za(y, v), H = Aa(H, y, p), F = Ba(A, v, n, h, L, p,
        w, aa, q, z, B, t, C, s, u), t = Ca(y, n, h, w, H, q, A, F), p = Da(p);
        v.setViewabilityMod(F);
        c && (b = Ea(n));
        var A = "0" !== A.getFlashVersion(), J, s=!F.useFlash();
        if (!function() {
            var a=!1;
            try {
                if (g.isDef(l) && g.isDef(l.killPhrases) && "" !== l.killPhrases) {
                    var b = l.adsafeSrc ? l.adsafeSrc: l.requrl + l.reqquery, d = l.killPhrases.split(",");
                    g(d).each(function(c, p) {
                        p = decodeURIComponent(d[c]).replace(/^\s+|\s+$/g, "");
                        - 1 !== b.search(p) && (a=!0)
                    })
                }
            } catch (c) {
                n.add(n.ERROR_KILL_IT)
            }
            return a
        }()) {
            if (c)
                try {
                    b.createAdProxy(l), b.findFrames(), b.listen(),
                    b.sendMessages(), q.addItem(b.getFrameStore(), "fm")
                } catch (E) {
                n.add(n.ERROR_ADTALK_GENERAL)
            }
            var I;
            try {
                "true" !== l.minimizeCalls && F.init();
                h.on("mousetrack") && (f = Fa(a, q), f.init());
                I = x.detectTopURL();
                h.on("exch") && (d = Ga(n, q), d.parse(I));
                if (h.on("getPl") && navigator && navigator.plugins) {
                    e = Ha(navigator.plugins);
                    var O = e.hash();
                    q.addItem({
                        output: O.join(".")
                    }, "pl", {
                        type: m.DT_CODES.ADTALK
                    });
                    if (h.on("decodePl") && O.length) {
                        var P = e.decode(O);
                        q.addItem({
                            output: P.join(".")
                        }, "pd", {
                            type: m.DT_CODES.ADTALK
                        })
                    }
                }
                var M = D.getProps();
                g(M).each(function(a, b) {
                    q.addItem({
                        output: b
                    }, a, {
                        type: "UFO"
                    })
                })
            } catch (K) {
                n.add(n.ERROR_IMPRESSION_LEADUP)
            }
            v.sendCookie();
            t.send(I);
            "true" === l.useViewabilityNotification && l._onMeasurable && (s || A) && y.notify(l._onMeasurable);
            "http" === l.protocol && "true" === l.getTpl && h.on("usetpl") && k.init();
            l.tpiLookupURL && G.init(l.tpiLookupURL);
            "true" === l.adTalkDtCall && "true" !== l.minimizeCalls && (J = (new Date).getTime(), r.execAtEndOfThread(function() {
                r.execAtEndOfThread(function() {
                    var a = {
                        output: (new Date).getTime() - J
                    };
                    q.addItem(a,
                    "sinceFw", {
                        type: m.DT_CODES.ADTALK
                    });
                    g.isDef(F.readyFired()) && q.addItem({
                        output: F.readyFired()
                    }, "readyFired", {
                        type: m.DT_CODES.ADTALK
                    });
                    v.send(m.DT_CODES.ADTALK)
                })
            }));
            h.on("usesca") && p.load()
        }
    }, g = function(a) {
        var c = function(b) {
            return a instanceof Object && (b ||!(a instanceof Array))
        }, b = function(b, d) {
            if (a.length ===+ a.length)
                for (var c = 0, e = a.length; c < e; ++c)
                    b(c, a[c]);
            else 
                for (c in a)(a.hasOwnProperty(c) || d) 
                    && b(c, a[c])
        }, d = function(a, d) {
            var c = [];
            b(function(b, e) {
                var h = a(b, e);
                if (void 0 !== h || d)
                    c[c.length] = h
            });
            return c
        }, e = function(a, d) {
            d = d || ",";
            var c = [];
            b(function(b, d) {
                var p = a(b, d);
                g.isDef(p) && c.push(p)
            });
            return c.join(d)
        }, f = function(a, b, d) {
            for (var c in b)
                if (d || b.hasOwnProperty(c))
                    a[c] = b[c];
            return a
        }, h = function(a) {
            var d = {};
            b(function(b, e) {
                var h = a(b, e);
                c(h) && f(d, h)
            });
            return d
        };
        return {
            each: b,
            isObj: c,
            invert: function() {
                return h(function(a, b) {
                    var d = {};
                    d[b] = a;
                    return d
                })
            },
            mapToObj: h,
            map: d,
            toParams: function(a) {
                return e(function(a, b) {
                    return "string" === typeof a&&-1 !== a.indexOf("NULL") ? b : a + ":" + b
                }, a)
            },
            stringify: e,
            mixin: function(b,
            d, c) {
                !0 !== b ? (c = d, d = f(a, b, c)) : (b = f({}, a, c), d = f(b, d, c));
                return d
            },
            find: function(a) {
                var d;
                b(function(b, c) {
                    a(b, c) && (d = c)
                });
                return d
            },
            toArray: function() {
                return d(function(a, b) {
                    return b
                })
            }
        }
    };
    g.toBase = function(a, c) {
        var b, d = 0 > a, e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), f = [];
        a = d?-a : a;
        do 
            b = a%c, f.push(e[b]), a = (a - b) / c;
        while (0 < a);
        f = f.reverse().join("");
        return d ? "-" + f : f
    };
    g.isDef = function(a) {
        return "undefined" !== typeof a
    };
    g.isUndef = function(a) {
        return !g.isDef(a)
    };
    g.noop = function() {};
    g.identity = function(a) {
        return a
    };
    g.isFunction = function(a) {
        return "function" === typeof a
    };
    g.useIfDef = function(a) {
        return g.isDef(a) ? a : !1
    };
    g.stringifyTriState = function(a) {
        return !0 === a ? 1 : !1 === a ? 0 : "na"
    };
    var Ja = function(a, c, b, d, e, f, h) {
        var k;
        (function() {
            var p = b.width - 5, f = b.height - 5, q = 0.5 * b.width + 1, g = 0.5 * b.height + 1;
            k = [new a(c, p, f, e, h, d), new a(c, p, 5, e, h, d), new a(c, 5, f, e, h, d), new a(c, 5, 5, e, h, d), new a(c, q, g, e, h, d)]
        })();
        return {
            getNumInView: function() {
                var a = [], b = 0;
                g(k).each(function(b, d) {
                    var c = d.isInView() ? 1: 0;
                    a.push(c)
                });
                f.addItem({
                    output: a.join(".")
                }, "pvs");
                g(a).each(function(a, d) {
                    b += d
                });
                return b
            },
            getPctInView: function(a) {
                return 5 === a ? 100 : 3 <= a ? 51 : 0
            },
            isReady: function() {
                var a=!0;
                g(k).each(function(b, d) {
                    d.isNotReadyToReport() && (a=!1)
                });
                return a
            }
        }
    }, Ka = function(a, c, b, d, e, f, h, k) {
        var p = new a(M, document.body, c, d, e, h, k), n, q, t = 0;
        b = b || g.noop;
        n = setInterval(function() {
            p.isReady()&&!q ? (q=!0, b(), clearInterval(n)) : (5===++t || q) && clearInterval(n)
        }, 50);
        return {
            checkViewable: function() {
                var a = p.isReady(), d = p.getNumInView(),
                d = p.getPctInView(d), c = f.calcInitialViewState(d, !0);
                a&&!q && (q=!0, b());
                return {
                    str: a ? c: m.NA,
                    pct: a ? d: - 1
                }
            }
        }
    }, Y = function(a, c, b, d, e, f) {
        var h = new a(document.body, c.width / 2, c.height / 2, d, e, f), k, p, n = 0;
        b = b || g.noop;
        k = setInterval(function() {
            h.isNotReadyToReport() || p ? (5===++n || p) && clearInterval(k) : (p=!0, b(h.createdFlash), clearInterval(k))
        }, 50);
        return {
            checkViewable: function() {
                var a=!h.isNotReadyToReport(), d = h.isInView(), c = d ? m.IN_VIEW : m.OUT_OF_VIEW, d = d ? 100 : 0;
                a&&!p && (p=!0, b(h.createdFlash));
                return {
                    str: a ? c: m.NA,
                    pct: a ?
                    d: - 1
                }
            }
        }
    }, ca = function() {
        var a = {}, c = function(b, d) {
            a[b] = a[b] || new Q;
            a[b].push(d)
        };
        return {
            on: function(a, d) {
                d ? c(a, d) : g(a).each(c)
            },
            trigger: function() {
                var b = g(arguments).toArray(), d = a[b.shift()];
                d && d.run.apply({}, b)
            }
        }
    }, M = function(a, c, b, d, e, f) {
        var h, k, p, n = function(a, b) {
            return '<param name="' + a + '" value="' + b + '"/>'
        }, q = function() {
            var a;
            a = new K;
            var b = l.cocaPuffsPath;
            a.sub("static");
            a.master(a.master().split(":")[0]);
            b && (a.master(b), a.sub(""));
            var b = a + (d.on("nextcocoa") ? "/detector3.pix" : "/detector2.pix"), c = n("allowscriptaccess",
            "always"), e = n("movie", b) + n("play", "true") + n("loop", "true");
            f.browserIs("i") ? (a = document.createElement("div"), a.innerHTML = "<object " + ('id="blag' + l.birthdate + '" ') + 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ' + ('type="' + m.FLASH_MIME + '" ') + ('data="' + b + '" ') + ">" + e + c + "</object>", h = a.firstChild) : (h = document.createElement("object"), h.data = b, h.type = m.FLASH_MIME, h.innerHTML = c);
            h.style.position = "absolute";
            h.style.width = "1px";
            h.style.opacity = "0";
            h.style.height = "0px";
            return h
        }, t = function(a) {
            a.style.height =
            p ? "1px" : "2px";
            p=!p;
            r.execAtEndOfThread(function() {
                x() && (k = a.isInView())
            })
        }, x = function() {
            return h && g.isFunction(h.isInView)
        };
        (function(a, b, d) {
            var c = q(), h = c.style;
            h.left = b + "px";
            h.top = d + "px";
            a.appendChild(c);
            h.height = "1px";
            e.onHiddenChange(function(a) {
                a ? h.height = "0px" : t(c)
            })
        })(a, c, b);
        return {
            isInView: function() {
                var a;
                x() && (a = h.isInView(), f.browserIs("w") && a !== k && t(h));
                return x() && a
            },
            isNotReadyToReport: function() {
                return !x()
            },
            createdFlash: h
        }
    }, Z = function(a) {
        return {
            doEligibleJobs: function(c) {
                var b = a[0], d =
                b && b.time;
                d && c >= d && (b.task(), a.shift())
            },
            getNextJob: function() {
                return a[0]
            }
        }
    }, ea = function(a) {
        var c = 0, b = {}, d = function(a, b, d) {
            if (g.isUndef(a.output))
                throw Error("item with id " + b + ' must have "output" method');
            this.item = a;
            this.id = b||++c;
            this.props = d || {};
            this.output = function() {
                return g.isFunction(a.output) ? a.output() : a.output
            }
        }, e = function(a, c, e) {
            a = new d(a, c, e || {});
            b[a.id] = a
        };
        a.on("addOutputItem", function(a, b, d) {
            e(a, b, d)
        });
        return {
            addItem: e,
            iterate: function(a) {
                var d, c, e = [];
                for (d in b)
                    b.hasOwnProperty(d) &&
                    (c = a(d, b[d])) && e.push(c);
                return e
            },
            getItem: function(a) {
                return b[a]
            }
        }
    }, Q = function() {
        var a = [];
        return {
            push: function(c) {
                a[a.length] = c
            },
            run: function() {
                var c = arguments;
                g(a).each(function(a, d) {
                    d.apply({}, c)
                })
            }
        }
    }, ua = function(a, c, b, d) {
        return {
            collect: function() {
                var e, f, h, k, p, n, q;
                f = a.find();
                e = a.getParent();
                n = a.getDetectionMethod();
                var t, x, s = [];
                try {
                    try {
                        h = v.calcWinDims()
                    } catch (B) {
                        c.add(c.ERROR_GET_WIN_DIMENSIONS), h =- 1
                    }
                    k = a.calcDims();
                    k.method = n;
                    k.container = E.round(E.calcNodeDims(e));
                    if (E.isInvalidDims(h, k))
                        return {
                            viewState: m.NA,
                            posViewState: m.NA,
                            embedded: u.embedded,
                            winDimensions: h,
                            adDimensions: k
                        };
                    p = b.calcPercentInView(h, k)
                } catch (l) {
                    c.add(c.ERROR_GET_SCREEN_LOC_GET_DIMENSIONS)
                }
                e = b.calcInitialViewState(p);
                e === m.OUT_OF_VIEW && s.push("l");
                a.isDetected() && (q = a.isObstructed(k), t = a.isCollapsed(k), x = a.isHidden(f));
                q && (e = m.OUT_OF_VIEW, s.push("o"));
                t && (e = m.OUT_OF_VIEW, s.push("c"));
                x && (e = m.OUT_OF_VIEW, s.push("h"));
                f = e;
                n = d.isHidden();
                !0 === n && (e = m.OUT_OF_VIEW, s.push("f"));
                return {
                    winDimensions: h,
                    adDimensions: k,
                    viewState: e,
                    percentInView: p,
                    reason: s.join("."),
                    obstructed: g.stringifyTriState(q),
                    isCollapsed: g.stringifyTriState(t),
                    isHidden: g.stringifyTriState(x),
                    tabHidden: g.stringifyTriState(n),
                    posViewState: f
                }
            }
        }
    }, La = function(a) {
        a = a || g.identity;
        var c = [], b = r.now(), d = function() {
            var a = r.now();
            c.length && (c[c.length - 1].duration += a - b, b = a)
        };
        return {
            clear: function() {
                d();
                c = []
            },
            fastForward: d,
            get: function() {
                return c
            },
            hasAlwaysBeen: function(a) {
                return 1 === c.length && c[0].state === a
            },
            addState: function(b) {
                var f = c[c.length - 1];
                b = a(b);
                d();
                0 !== c.length && b === f.state ||
                c.push({
                    state: b,
                    duration: 0
                })
            }
        }
    }, Ma = function(a) {
        var c = a || 1, b = 0, d = 0, e = 0, f = 0;
        return {
            start: function() {
                0 === b%c && (e = r.now())
            },
            stop: function() {
                0 === b%c && (f += r.now() - e, d++);
                b++
            },
            getTime: function() {
                return f
            },
            getCount: function() {
                return d
            }
        }
    }, $ = function(a) {
        var c = 0, b = u.getTagTime(), d = 0, e, f;
        return {
            getTotalTime: function() {
                return d
            },
            stop: function() {
                c = 0;
                b = u.getTagTime()
            },
            mark: function() {
                e = u.getTagTime() - b;
                c += e;
                c > a && (f = c - e < a, d += f ? c : e);
                b = u.getTagTime()
            }
        }
    }, K = function(a) {
        a = a || l.adsafeSrc || l.requrl;
        a = /^(http|https):\/\/(([^\/\.]*)\.([^\/]*))/.exec(a);
        var c = a[1], b = a[3], d = a[4], e, f, h = function(a) {
            g.isDef(a) && (b = a);
            return b
        }, k = function(a) {
            g.isDef(a) && (d = a);
            return d
        }, p = function() {
            var a = "";
            g(f).each(function(b, d) {
                a += "&" + b + "=";
                a = g(d).isObj() ? a + ("{" + g(d).toParams() + "}") : a + d
            });
            return "?" + a.substr(1)
        };
        return {
            fullDom: a[0],
            sub: h,
            master: k,
            setField: function(a, b) {
                f = f || {};
                g(b).isObj() && g.isDef(f[a]) && (b = g(f[a]).mixin(!0, b));
                f[a] = b
            },
            path: function(a) {
                e = a
            },
            toString: function() {
                var a = h() ? h() + ".": "", b = e ? "/" + e: "", d = f ? p(): "";
                return c + "://" + a + k() + b + d
            }
        }
    }, Na = function(a, c) {
        var b =
        !1, d=!1, e, f = function() {
            b || (b=!0, e = c.createViewabilityTracker("mpt", function(a) {
                return a.isFullyInView()
            }))
        }, h = function(a) {
            if (!g.isUndef(a.eventData)) {
                var b =- 1;
                g.isDef(a.eventData.volume) ? b = a.eventData.volume : g.isDef(a.eventData.adVolume) && (b = a.eventData.adVolume);
                return b
            }
        }, k = function(a) {
            a = h(a);
            b || 0 !== a ? b && (d || 0 === a) && (a = {
                isFullyInView: function() {
                    return !1
                }
            }, e.addState(a)) : d=!0
        };
        return {
            init: function() {
                var b = function(a) {
                    k(a)
                };
                a.on({
                    adStarted: f,
                    adVideoStart: f,
                    adVideoStarted: f,
                    volumeChanged: b,
                    adVolumeChange: b,
                    adVideoMidpoint: function() {
                        e && e.hasAlwaysBeen(!0) && a.trigger("sendDt", m.DT_CODES.QUARTILE_FULLY_INVIEW)
                    }
                })
            }
        }
    }, ta = function(a, c, b, d) {
        var e =- 1 !== l.mode.indexOf("jsvid"), f = b.isMobileApp(), h = null, k = l.thisScriptNode.parentNode, p=!1, n=!1, q, t = function() {
            var a, b;
            if (h && h.parentNode) {
                for (b = h.parentNode; h && h !== window && b !== document&&!a;)
                    a = b === k, b = b.parentNode;
                a || (k = h.parentNode, p=!0)
            }
        };
        return {
            calcDims: function() {
                var b, d =- 1;
                b = u.embedded ? c.calcDims() : a.calcDims(h, k);
                E.isValidDims(b) && (d = E.round(b));
                return d
            },
            find: function() {
                var a,
                c = function() {
                    var b = v.findLargestChildNode(k);
                    1 < v.getNodeArea(b) ? (q = "a", a = b, n=!0) : (q = "s", h || (a = v.getPlaceholderSpan(), k.insertBefore(a, l.thisScriptNode.nextSibling)))
                };
                n || (f ? (c(), q = b.getDetectionMethod()) : e ? (q = "v", a = d.findVideo(), n=!0) : u.embedded ? (q = "i", a = window, n=!0) : c());
                h = a || h;
                t();
                return h
            },
            isObstructed: function(a) {
                var b = null;
                if (h&&!u.embedded && a && g.isDef(document.elementFromPoint)) {
                    var d = r.floor(a.x + a.width / 2);
                    a = r.floor(a.y + a.height / 2);
                    d = document.elementFromPoint(d - 1, a - 1);
                    null !== d && (b = d !== h)
                }
                return b
            },
            isCollapsed: function(a) {
                var b=!1;
                "s" !== q && (b = 1 >= a.height || 1 >= a.width);
                return b
            },
            isHidden: function(a) {
                var b=!1;
                "i" !== q && (b = "none" === z.getStyle(a, "display"));
                return b
            },
            getDetectionMethod: function() {
                return q
            },
            isDetected: function() {
                return n
            },
            getParent: function() {
                return k
            },
            hasParentChanged: function() {
                return p
            }
        }
    }, Ea = function(a) {
        var c = [], b = function(a) {
            var b;
            a = a || l;
            a.reqquery ? b = a.reqquery.split(/(?:anId=|anid=|ANID=)([^&]*)/)[1] : (b = a.adsafeSrc.split("/"), b = b[5] + "-" + b[6]);
            a = {
                adId: b,
                adSafeId: a.asid
            };
            c.push(a);
            return a
        }, d = function() {
            var a = [], b = {}, d = {
                noMe: !0
            };
            return {
                addFrame: function(c) {
                    a.push(c);
                    b[c.pageId] = c;
                    c.isMe && (d = c)
                },
                list: a,
                lookup: b,
                me: function() {
                    return d
                },
                output: function() {
                    var b, c, e, h, f = [];
                    for (b = 0; b < a.length; b++)
                        if (e = a[b], e.isLeaf || e.isMe || g.isDef(e.selfDescription)) {
                            h = "";
                            for (c = 0; c < e.position.length; c++)
                                h += (Number(e.position[c]) + 1).toString(36);
                                h += e.isMe ? "*" : "";
                                h += 0 !== e.adProxies.length ? "." + e.adProxies[0].adId : "";
                                f.push(h)
                        }
                    return g.toBase(d.unifiedId, 62) + "+" + f.join("|")
                }
            }
        }, d = new d, e = function(a,
        b) {
            var e = a === window, h = {
                position: b.slice(0),
                pageId: b.join("-"),
                domObj: function() {
                    return a
                },
                isMe: e,
                isLeaf: !a.frames.length,
                adProxies: e ? c: [],
                selfDescription: void 0,
                unifiedId: l.birthdate,
                toString: function() {
                    return JSON.stringify(h)
                }, addDescription : function(a) {
                    h.selfDescription = a;
                    h.adProxies = a.adProxies
                }
            };
            d.addFrame(h);
            return h
        }, f;
        f = new function() {
            var a = function(b, d) {
                var c = d.length, h = b.frames;
                if (!(new e(b, d)).isLeaf) {
                    for (var f = 0; f < h.length; f++)
                        d[c] = f, a(h[f], d);
                    d.pop()
                }
            };
            return {
                start: function() {
                    a(top, [0])
                }
            }
        };
        var h = function(a) {
            var b = {
                srcId: l.asid,
                srcKey: l.asid.split("-")[2],
                srcStart: l.birthdate,
                getMessageTime: void 0,
                replyTo: document.location,
                sendMessage: function(d,
                c) {
                    c = c || "*";
                    a.getMessageTime = r.now();
                    delete b.updateMessage;
                    delete b.sendMessage;
                    d.postMessage(JSON.stringify(b),
                    c)
                }, updateMessage : function(b) {
                    a = b(a)
                }, messageContent: a || {}
            };
            return b
        }, k;
        k = new function() {
            var b = [], c = function(a) {
                var b = d.me();
                (new h({
                    self: b,
                    expectedPageId: a.pageId,
                    unifiedId: b.unifiedId
                })).sendMessage(a.domObj())
            };
            return {
                sendMessages: function() {
                    var a,
                    b;
                    for (a = 0; a < d.list.length; a++)
                        b = d.list[a], b.isMe || c(b)
                },
                listen: function() {
                    z.addEvent(window, "message", function(h) {
                        var f, k, s, B = d.me();
                        try {
                            f = JSON.parse(h.data);
                            k = f.messageContent;
                            if (l.asid.split("-")[2] !== f.srcKey ||!f.hasOwnProperty("messageContent"))
                                return;
                            k.unifiedId < B.unifiedId && (B.unifiedId = k.unifiedId)
                        } catch (m) {
                            return 
                        }
                        b.push(f);
                        try {
                            if (k.expectedPageId !== d.me().pageId)
                                a.add(a.ERROR_ADTALK_DUBIOUS);
                            else {
                                s = d.lookup[k.self.pageId];
                                if (g.isUndef(s) || g.isUndef(s.selfDescription))
                                    s = s || new e(h.source, k.self.pageId.split("-")),
                                    c(s);
                                s.addDescription(k.self)
                            }
                        } catch (D) {
                            a.add(a.ERROR_ADTALK_DUBIOUS)
                        }
                    })
                }
            }
        };
        return {
            sendMessages: k.sendMessages,
            listen: k.listen,
            findFrames: f.start,
            createAdProxy: function(a) {
                return new b(a)
            },
            getFrameStore: function() {
                return d || ""
            }
        }
    }, ya = function(a, c, b, d, e) {
        var f = function(a, b, d) {
            e.addItem({
                output: a + "." + b + "." + d
            }, "ctpl")
        }, h = function(e) {
            try {
                c.diagnostic("c");
                var h = e.length, n = 0, q = 0;
                f(h, 0, 0);
                g(e).each(function(b, c) {
                    a.send(c.replace("%%CBS%%", d.getCacheBustId()), function() {
                        f(h, n, ++q)
                    }, !0);
                    f(h, ++n, q)
                })
            } catch (t) {
                b.add(b.ERROR_AT_SEND)
            }
        };
        return {
            init: function() {
                try {
                    var d = (new K).fullDom;
                    "/" !== d.slice( - 1) && (d += "/");
                    d += "tpl?asId=" + l.asid;
                    a.jsonp(d, h)
                } catch (c) {
                    b.add(b.ERROR_AT_INIT)
                }
            }
        }
    }, xa = function(a, c, b, d) {
        return {
            enabled: "true" === l.useBapiCallback,
            callback: function(c) {
                b.trigger("sendDiag");
                try {
                    "true" === l.accountForSadImps && d.measure(c), l._onAPIResult && l._onAPIResult(c)
                } catch (f) {
                    a.add(a.ERROR_BAPI_CALLBACK), b.trigger("sendDiag", "bapiClient")
                }
            }
        }
    }, na = function(a) {
        var c = function() {
            var a = function(a) {
                return a.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1].split(",").join(".")
            };
            try {
                try {
                    var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                    try {
                        b.AllowScriptAccess = "always"
                    } catch (d) {
                        return "6"
                    }
                } catch (c) {}
                return a((new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version"))
            } catch (e) {
                try {
                    if (navigator.mimeTypes[m.FLASH_MIME].enabledPlugin)
                        return a((navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description)
                    } catch (g) {}
            }
            return "0"
        }, b = function(a) {
            return e() === a
        }, d = function() {
            return document && document.documentMode ? document.documentMode :
            m.NA
        }, e = function() {
            var a = "u";
            try {
                if (g.isDef(window.opera) && g.isDef(window.opera.buildNumber))
                    a = "o";
                else if (g.isDef(window.mozInnerScreenY))
                    a = "g";
                else if (g.isDef(window.chrome) && g.isDef(window.chrome.csi))
                    a = "c";
                else if (g.isDef(window.WebKitPoint))
                    a = "w";
                else if (g.isDef(window.attachEvent) || g.isDef(window.msCrypto))
                    a = "i"
            } catch (b) {}
            return a
        };
        return {
            browserIs: b,
            getFlashVersion: c,
            getDocumentMode: d,
            getBrowserVendor: e,
            params: function() {
                var a = e(), h = c(), k = 5;
                b("i") ? window.msCrypto ? k = 11 : window.atob ? k = 10 : document.addEventListener ?
                k = 9 : window.JSON && document.querySelector ? k = 8 : window.XMLHttpRequest ? k = 7 : document.compatMode && (k = 6) : k = m.NA;
                var p = d(), n;
                n = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}", "{89820200-ECBD-11CF-8B85-00AA005B4383}"];
                var q = m.NA, t = document.createElement("div");
                try {
                    if ("-ms-ime-align"in document.documentElement.style)
                        q = "11";
                    else {
                        t.style.behavior = "url(#default#clientcaps)";
                        for (var l = 0; l < n.length&&!(q = t.getComponentVersion(n[l], "componentid").replace(/,/g, ".")); l++);
                    }
                } catch (s) {}
                n =
                q;
                q = m.NA;
                g.isDef(window.navigator) && g.isDef(window.navigator.appName) && (q = window.navigator.appName.toLowerCase()[0]);
                return {
                    br: a,
                    fv: h,
                    bv: k,
                    dm: p,
                    abv: n,
                    an: q
                }
            }
        }
    }, ka = function(a, c, b, d) {
        var e = function(a, b) {
            var d, c, e = l.thisScriptNode.parentNode;
            b = b || a;
            a = 1 < arguments.length ? a : "script";
            d = {
                script: ['<script type="text/javascript" src="', '">\x3c/script>'],
                iframe: ['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="', '"></iframe>'],
                img: ['<img src="',
                '"/>']
            }
            [a];
            c = d[0] + b + d[1];
            "true" === l.forceAppend ? "script" !== a ? (d = document.createElement("DIV"), d.innerHTML = c, e.appendChild(d.childNodes[0])) : (d = document.createElement("SCRIPT"), d.src = b, e.appendChild(d)) : document.write(c)
        }, f = function(a, b, d) {
            var e=!d && c.on("postDts") && z.getXHR2();
            e ? (e.open("POST", a), e.onreadystatechange = function() {
                4 === e.readyState && 200 === e.status && b && b()
            }, e.send()) : (d = new Image, b && (d.onload = b), d.src = a)
        }, h = function(a) {
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.src =
            a;
            l.thisScriptNode.parentNode.appendChild(b)
        }, k = function(b) {
            g.isFunction(b) ? b() : "string" === typeof b ? f(b) : a.add(a.ERROR_NOTIFY_CLIENT)
        };
        d.on({
            addNode: e,
            send: f,
            exec: h,
            notify: k
        });
        return {
            addNode: e,
            send: f,
            exec: h,
            notify: k,
            jsonp: function(a, d, c, e) {
                h(b.wrap(a, d, c, e))
            }
        }
    }, m = {
        MAX_URL_LENGTH: 2E3,
        FLASH_MIME: "application/x-shockwave-flash",
        IN_VIEW: "inView",
        OUT_OF_VIEW: "outOfView",
        PARTIAL_VIEW_PLUS: "partialViewPlus",
        PARTIAL_VIEW_MINUS: "partialViewMinus",
        NA: "na",
        DT_CODES: {
            UNLOAD: "u",
            PING: "p",
            FULLY_INVIEW: "pf",
            QUARTILE_FULLY_INVIEW: "qf",
            ADTALK: "a",
            VIEWABILITY_READY: "v",
            VIDEO_EVENTS: "m",
            DIAGNOSTIC: "b",
            POS_INVIEW: "t",
            THIRD_PARTY: "i",
            SCA: "s"
        }
    }, u = function() {
        var a = window != top, c = function() {
            var a;
            try {
                a=!!top.document
            } catch (d) {
                a=!1
            }
            return a
        }();
        return {
            embedded: a,
            friendly: c,
            getTagTime: function() {
                return r.now() - l.birthdate
            },
            getPageTime: function() {
                return g.isDef(window.chrome) && g.isDef(window.chrome.csi) && g.isFunction(window.chrome.csi) ? r.round(chrome.csi().pageT) : m.NA
            },
            friendlyIframe: a && c,
            xDomainIframe: a&!c
        }
    }(), z = {
        addEvent: function(a, c, b, d) {
            g.isDef(a.addEventListener) ?
            "mouseenter" === c ? a.addEventListener("mouseover", z.mouseEnter(b), d) : "mouseleave" === c ? a.addEventListener("mouseout", z.mouseEnter(b), d) : a.addEventListener(c, b, d) : g.isDef(a.attachEvent) && a.attachEvent("on" + c, b)
        },
        removeEvent: function(a, c, b) {
            g.isDef(a.removeEventListener) ? ("mouseenter" === c ? (c = "mouseover", b = z.mouseEnter) : "mouseleave" === c && (c = "mouseout", b = z.mouseEnter), a.removeEventListener(c, b)) : g.isDef(a.detachEvent) && a.detachEvent("on" + c, b)
        },
        mouseEnter: function(a) {
            var c = this;
            return function(b) {
                var d = b.relatedTarget;
                this === d || c.isAChildOf(this, d) || a.call(this, b)
            }
        },
        isAChildOf: function(a, c) {
            if (a === c)
                return !1;
            for (; c && c !== a;)
                c = c.parentNode;
            return c === a
        },
        getStyle: function(a, c) {
            var b = "";
            document.defaultView && document.defaultView.getComputedStyle ? b = document.defaultView.getComputedStyle(a, "").getPropertyValue(c) : a.currentStyle && (c = c.replace(/\-(\w)/g, function(a, b) {
                return b.toUpperCase()
            }), b = a.currentStyle[c]);
            return b
        },
        getXHR2: function(a, c) {
            var b, d;
            g.isDef(window.XMLHttpRequest) ? (d = new XMLHttpRequest, "withCredentials"in
            d && (b = d)) : g.isDef(XDomainRequest) && (b = new XDomainRequest);
            return b
        }
    }, va = function(a, c, b, d, e, f, h, k, p, n, q) {
        var t = 0, x = 0, s=!1, B, y = function(a, d, e, h, g) {
            if (f.impressionIsIdentifiable() && (a === m.DT_CODES.DIAGNOSTIC || a === m.DT_CODES.ADTALK || "n" !== p.getCurrentLoc()))
                try {
                    var k = new K, q = r.now();
                    k.path("dt");
                    k = A(k, a, d, g);
                    h || (k = w(k, a, d));
                    c.send(k.toString(), function() {
                        x += 1;
                        t = r.now() - q
                    }, e);
                    a === m.DT_CODES.UNLOAD && (s=!0)
            } catch (n) {
                __IntegralASDiagnosticCall("dt-" + a, n), b.add(b.ERROR_PHONE_HOME)
            }
        }, D = function(a, b) {
            var c =
            {
                bapi: "a",
                bapiClient: "b",
                jload: "c",
                jss: "d",
                jsi: "e"
            }, e = l.mode, c = c[a] || c[e];
            d.on(b || e + "Diag") && c && y(m.DT_CODES.DIAGNOSTIC, - 5, !0, !0, {
                field: "bkp",
                value: c
            })
        }, w = function(c, e) {
            p.fastForward();
            var f = {};
            e === m.DT_CODES.VIDEO_EVENTS && q && n && (f.ve = q.stringify());
            e === m.DT_CODES.UNLOAD && (f.ndt = x);
            - 1 !== l.mode.indexOf("jsvid") && n && (f.vv = n.version);
            f.NULL1 = d.output();
            f.NULL2 = p.stringify(10);
            f.em = u.embedded;
            f.fr = u.friendly;
            f.uf = B.useFlash() ? 1 : 0;
            f.e = b.toString();
            f.tt = l.mode;
            f.dtt = t;
            f.pc = g.stringifyTriState(a.hasParentChanged());
            h.iterate(function(a, b) {
                b.props.type && b.props.type !== e || (f[a] = b.output())
            });
            c.setField("tv", f);
            c.setField("br", k.getBrowserVendor());
            c.setField("adsafePrivacyPolicy", "http://integr.al/privacy-policy");
            return c
        }, A = function(a, b, c, e) {
            d.on("usedtdomain") && a.sub("dt");
            a.setField("asId", l.asid);
            a.setField("tv", {
                c: f.getCacheBustId(),
                pingTime: c || C(b),
                time: u.getTagTime(),
                type: b
            });
            e && a.setField(e.field, e.value);
            return a
        }, C = function(a) {
            var b;
            a === m.DT_CODES.UNLOAD ? b =- 1 : a === m.DT_CODES.ADTALK ? b =- 2 : a === m.DT_CODES.VIEWABILITY_READY ?
            b =- 3 : a === m.DT_CODES.VIDEO_EVENTS && q && n ? b =- 4 : a === m.DT_CODES.DIAGNOSTIC ? b =- 5 : a === m.DT_CODES.THIRD_PARTY ? b =- 6 : a === m.DT_CODES.QUARTILE_FULLY_INVIEW && (b =- 7);
            return b
        };
        e.on({
            sendDt: function(a, b) {
                y(a, b)
            },
            sendDiag: function(a, b) {
                D(a, b)
            }
        });
        return {
            send: y,
            sendCookie: function() {
                var a;
                d.on("cookie") && "true" === l.sendCookie && l.protocol && l.cookieDomain && l.asid && (a = l.protocol + "://" + l.cookieDomain + "?asid=" + l.asid, c.send(a, void 0, !0), x++)
            },
            unload: function() {
                s || y(m.DT_CODES.UNLOAD, - 1, !0)
            },
            diagnostic: D,
            setViewabilityMod: function(a) {
                B =
                a
            }
        }
    }, E = {
        calcNodeDims: function(a) {
            if (g.isDef(a.getBoundingClientRect))
                return a = v.getRect(a), {
                    x: a.left,
                    y: a.top,
                    width: a.width,
                    height: a.height
                }
        },
        round: function(a) {
            return {
                x: r.round(a.x),
                y: r.round(a.y),
                width: r.round(a.width),
                height: r.round(a.height)
            }
        },
        isValidDims: function(a) {
            return !(isNaN(a.x) || isNaN(a.y) || isNaN(a.height) || isNaN(a.width))
        },
        isInvalidDims: function(a, c) {
            return - 1 === a||-1 === c
        }
    }, oa = function() {
        return {
            calcDims: function(a, c) {
                var b = E.calcNodeDims(a), d = v.getClippedDimensions(a, c);
                b.height = d.height <
                b.height ? d.height : b.height || 1;
                b.width = d.width < b.width ? d.width : b.width || 1;
                return b
            }
        }
    }, v = {
        calcWinDims: function() {
            var a, c, b, d;
            d = v.windowSize();
            b = d.width;
            d = d.height;
            u.friendly ? a = c = 0 : (g.isDef(window.screenX) && (a = window.screenX), g.isDef(window.screenY) && (c = window.screenY));
            return isNaN(a) || isNaN(c) || isNaN(b) || isNaN(d)?-1 : {
                x: r.round(a), y : r.round(c), width : r.round(b), height : r.round(d)
            }
        },
        windowSize: function() {
            var a = {}, c, b;
            if (u.friendly)
                if (c = top.document, b = c.documentElement, c = c.getElementsByTagName("body")[0],
                g.isDef(top.innerWidth))
                    a.width = top.innerWidth, a.height = top.innerHeight;
                else if (g.isDef(b.clientWidth))
                    a.width = b.clientWidth, a.height = b.clientHeight;
                else if (g.isDef(c.clientWidth))
                    a.width = c.clientWidth, a.height = c.clientHeight;
                else 
                    throw a.width = a.height = 0, "";
            else 
                g.isDef(window.outerWidth) && (a.width = window.outerWidth, a.height = window.outerHeight);
            return a
        },
        screenSize: function() {
            try {
                var a =- 1, c =- 1;
                g.isDef(window.screen) && (a = window.screen.width, c = window.screen.height);
                return {
                    width: a,
                    height: c
                }
            } catch (b) {}
        },
        getNodeArea: function(a) {
            var c =- 1;
            a && (a = v.getRect(a), c = a.width * a.height);
            return c
        },
        getRect: function(a) {
            var c = {};
            a = a.getBoundingClientRect();
            g.isUndef(a.width) && (c = {
                width: a.right - a.left,
                height: a.bottom - a.top
            });
            g(c).mixin(a, !0);
            return c
        },
        getIeDimObj: function() {
            return document.documentElement && g.isDef(document.documentElement.clientWidth) && document.documentElement || document.body
        },
        getPlaceholderSpan: function() {
            var a = document.createElement("span");
            g(a.style).mixin({
                width: "0px",
                height: "0px",
                display: "block",
                overflow: "hidden",
                visibiility: "hidden"
            });
            a.innerHTML = ".";
            return a
        },
        getClippedDimensions: function(a, c) {
            var b = 1E4, d = 1E4, e, f;
            do 
                a = a.parentNode, e = "OBJECT" !== a.tagName.toUpperCase(), f = "inline" !== z.getStyle(a, "display"), e && f && (e = v.getRect(a), b = e.width < b ? e.width : b, d = e.height < d ? e.height : d);
            while (a.parentNode !== document && a !== c);
            return {
                width: r.round(b),
                height: r.round(d)
            }
        },
        findLargestChildNode: function(a) {
            var c, b = "iframe img a object embed div".split(" "), d, e, f, h, k = [], p =- 1;
            d = 0;
            for (e = b.length; d < e; d++) {
                var n =
                a.getElementsByTagName(b[d]);
                if (n.length)
                    for (f = 0, h = n.length; f < h; f++)
                        k.push(n[f])
            }
            if (k.length)
                for (d = 0, e = k.length; d < e; d++)
                    a = k[d], b = v.getNodeArea(a), b > p && (c = a, p = b);
            return g.isUndef(c) ? null : g.isDef(c.nodeName) && "DIV" == c.nodeName ? v.findLargestChildNode(c) : c
        }
    }, la = function(a) {
        return {
            getProps: function() {
                var c = {};
                try {
                    var b = document.createElement("span");
                    g(b.style).mixin({
                        position: "absolute",
                        top: "150"
                    });
                    c = {
                        rpx: "" === b.style.top ? 1: 0
                    }
                } catch (d) {
                    a.add(a.ERROR_ENVIRONMENT)
                }
                return c
            }
        }
    }, da = function(a) {
        var c = {}, b = function(a) {
            g.isDef(c[a]) ?
            c[a]++ : c[a] = 1
        };
        a.on("error", function(a) {
            b(a)
        });
        return {
            list: c,
            add: b,
            toString: function() {
                var a = "", b;
                for (b in c)
                    c.hasOwnProperty(b) && (a += b);
                return a
            },
            hasErrors: function() {
                for (var a in c)
                    return !0;
                return !1
            },
            ERROR_GET_AD_DIMENSIONS: "a",
            ERROR_ADTALK_GENERAL: "c",
            ERROR_GET_SCREEN_LOC_GET_DIMENSIONS: "d",
            ERROR_EXCHANGE_PARSING: "x",
            ERROR_PHONE_HOME: "h",
            ERROR_KILL_IT: "k",
            ERROR_LOCATION_DETAILS: "l",
            ERROR_GET_SCREEN_LOC_PIV_CALC: "p",
            ERROR_GET_WIN_DIMENSIONS: "w",
            ERROR_ADTALK_DUBIOUS: "D",
            ERROR_ENVIRONMENT: "v",
            ERROR_UID_GENERATION: "i",
            ERROR_NOTIFY_CLIENT: "n",
            ERROR_IMPRESSION_URLS: "I",
            ERROR_JSINFO: "J",
            ERROR_IMPRESSION_LEADUP: "L",
            ERROR_GET_ELEM_STYLE: "s",
            ERROR_PLUGIN_PARSING: "P",
            ERROR_AT_SEND: "S",
            ERROR_AT_INIT: "N",
            ERROR_BAPI_CALLBACK: "b"
        }
    }, Ga = function(a, c) {
        var b = function(a) {
            var b = [];
            if (a && a instanceof Array)
                b = g(a).map(function(a, b) {
                    return b.val
                }), b.push(l.adsafeSrc, l.requrl, l.reqquery);
            else 
                throw Error("Unexpected data type in ExchangeParser.getUrlList");
            return b
        };
        return {
            parse: function(d) {
                try {
                    var e, f = b(d), h = f && f.length && f.join("|"),
                    k = l.exchList;
                    h && (e = g(k).map(function(a, b) {
                        return 0 <= h.indexOf(N.rot(b)) ? a : void 0
                    }), e.length && c.addItem({
                        output: e.join(".")
                    }, "ex", {
                        type: "UFO"
                    }))
                } catch (p) {
                    a.add(a.ERROR_EXCHANGE_PARSING)
                }
            }
        }
    }, T = function() {
        var a = {}, c = function(b, d) {
            var c = RegExp(b + "(?=$|,)|" + b + ":(?!,|$)(.?\\d*(?=,|$))").exec(l.jsFeatures);
            if (g.isUndef(a[b]) || d)
                a[b]=!!(c&&!c[1] || c && c[1] > 100 * r.random());
            return a[b]
        }, b = {
            fc: "forcecocoa",
            rt: "rattie",
            cb: "cachebust",
            np: "nextcocoa",
            th: "tabHiddenDtCall"
        }, d = function() {
            return g(b).mapToObj(function(b,
            d) {
                var c = {};
                c[b] = a[d] ? 1 : 0;
                return c
            })
        };
        g(b).each(function(a, b) {
            c(b)
        });
        return {
            on: c,
            output: function() {
                return g(d()).toParams()
            }
        }
    }, qa = function(a) {
        var c = a.browserIs("g") || a.browserIs("i") || u.friendlyIframe ||!u.embedded;
        return {
            calcPercentInView: function(a, d) {
                var c;
                c = a.x;
                var f = d.x;
                c = Math.min(a.x + a.width, d.x + d.width) - Math.max(f, c);
                var f = a.y, h = d.y, f = Math.min(a.y + a.height, d.y + d.height) - Math.max(h, f), h = 0 >= d.width;
                c = 0 >= c || h ? 0 : r.round(c / d.width * 100);
                f = 0 >= f || h ? 0 : r.round(f / d.height * 100);
                return r.round(c * f / 100)
            },
            calcInitialViewState: function(a, d) {
                var e = m.NA;
                if (c || d)
                    e = 75 <= a ? m.IN_VIEW : 25 >= a ? m.OUT_OF_VIEW : 50 <= a ? m.PARTIAL_VIEW_PLUS : m.PARTIAL_VIEW_MINUS;
                return e
            }
        }
    }, ma = function(a) {
        var c=!1;
        return {
            getCacheBustId: function() {
                var a = new Date, d = Date.parse("Jan 1 " + a.getFullYear()), a = a.getTime() - d;
                return g.toBase(a, 62)
            },
            impressionIsIdentifiable: function(a) {
                a && (c=!0);
                return c
            },
            unq: function() {
                var b = "";
                try {
                    for (var d, c = window.Uint32Array && window.crypto && window.crypto.getRandomValues; 30 > b.length;)
                        c ? (d = new Uint32Array(1), window.crypto.getRandomValues(d),
                        b += d[0].toString(16)) : b += (16 * r.random() | 0).toString(16);
                    b = b.slice(0, 30)
                } catch (f) {
                    a.add(a.ERROR_UID_GENERATION)
                }
                return b
            }()
        }
    }, pa = function(a, c) {
        var b, d = function() {
            try {
                var b, d;
                if (u.friendly) {
                    var c = f(window);
                    b = c.left;
                    d = c.top
                } else 
                    a.browserIs("i") && 11 !== a.getDocumentMode() ? (c = function(a) {
                        b = a.screenX - a.clientX;
                        d = a.screenY - a.clientY
                    }, document.documentElement.attachEvent("onmousemove", c), document.documentElement.fireEvent("onmousemove"), document.documentElement.detachEvent("onmousemove", c)) : g.isUndef(window.mozInnerScreenX) ?
                    (b = window.screenLeft, d = window.screenTop) : (b = r.round(window.mozInnerScreenX), d = r.round(window.mozInnerScreenY));
                return {
                    x: b,
                    y: d
                }
            } catch (e) {}
        }, e = function() {
            var a, d, c = b || v.getIeDimObj();
            g.isDef(window.innerWidth) ? (a = window.innerWidth, d = window.innerHeight) : c && g.isDef(c.clientWidth) ? (a = c.clientWidth, d = c.clientHeight, 0 === a && 0 < c.offsetWidth && (a = c.offsetWidth), 0 === d && 0 < c.offsetHeight && (d = c.offsetHeight)) : window.frameElement && g.isDef(window.frameElement.clientWidth) && (a = window.frameElement.clientWidth, d = window.frameElement.clientHeight);
            return {
                width: a,
                height: d
            }
        }, f = function(a, b) {
            g.isUndef(b) && (b = {
                top: 0,
                left: 0
            });
            for (var c = a.parent.document.getElementsByTagName("iframe"), d, e=!1, l = 0, m = c.length; l < m; l++)
                if (d = c[l], d.contentWindow == a) {
                    e=!0;
                    break
                }
            e && (c = v.getRect(d), b.left += c.left, b.top += c.top, a !== top && f(a.parent, b));
            return b
        };
        return {
            calcDims: function() {
                var a = {};
                try {
                    a = g(d()).mixin(e())
                } catch (b) {
                    c.add(c.ERROR_GET_AD_DIMENSIONS)
                }
                return a
            },
            waitForBody: function(a) {
                var c = setInterval(function() {
                    document.body && (b = v.getIeDimObj(), clearInterval(c),
                    a())
                }, 50)
            }
        }
    }, Ca = function(a, c, b, d, e, f, h, k) {
        var p = function(a, b) {
            if (b >= m.MAX_URL_LENGTH)
                return "";
            var c, d, e = [], f = function(a) {
                return - 1 !== a.key.indexOf("q")||-1 !== a.key.indexOf("g")
            };
            c = g(a).map(function(a, b) {
                if (f(b))
                    return b
            });
            d = g(a).map(function(a, b) {
                if (!f(b))
                    return b
            });
            g(c.concat(d)).each(function(a, c) {
                var d = "adsafe_url=" + c.val + "&adsafe_type=" + c.key, f = e.join("&").length;
                d.length + f + b <= m.MAX_URL_LENGTH && e.push(d)
            });
            return e.join("&")
        }, n = function(a) {
            var e = 0, n = N.hashCode(l.asid), p = "adsafe_jsinfo=", B = k.needsFlash() ?
            {
                viewState: m.NA
            }
            : k.checkScreenLoc(!0), y = "c:" + d.getCacheBustId() + ",sl:" + B.viewState + ",em:" + u.embedded + ",fr:" + u.friendly, D = b.on("postDts") && z.getXHR2() ? "p": "i", w = ["pt:" + k.stringifyPingTimes() + (B.viewState != m.NA ? B.details : ""), g(h.params()).toParams(), "id:" + l.asid];
            f.iterate(function(a, b) {
                w.push(a + ":" + b.output())
            });
            c.toString() && w.push("e:" + c.toString());
            w.push(b.output());
            w.push("uf:" + (k.useFlash() ? 1 : 0));
            w.push("tt:" + l.mode);
            w.push("et:" + (r.now() - l.birthdate));
            w.push("uid:" + d.unq);
            w.push("v:8.2");
            w.push("sp:" +
            ("true" === l.jsDoSplit ? 1 : 0));
            w.push("ct:" + u.getPageTime());
            w.push("dtm:" + D);
            w.push("mn:" + l.mn);
            w.push("gtpl:" + ("true" === l.getTpl ? 1 : 0));
            b.on("resolution") && (w.push("wr:" + g(v.windowSize()).toArray().join(".")), w.push("sr:" + g(v.screenSize()).toArray().join(".")));
            - 1 === ("" + n).indexOf(h.params().br.toUpperCase().charCodeAt(0)) && w.push("mf:" + n);
            var A = function(b) {
                return p.length + a + b.length + 5 <= m.MAX_URL_LENGTH
            }, C = function(a) {
                if (a)
                    return "," + a
            };
            A(y) && (p += C(y), g(w).each(function(a, b) {
                - 1 !== b.indexOf("id:") && A(b) ?
                (p += C(b), d.impressionIsIdentifiable(!0)) : A(b) ? p += C(b) : e += 1
            }), C("sp:" + ("true" === l.jsDoSplit ? 1 : 0)));
            return p += ",ov:" + e
        };
        return {
            send: function(a) {
                var b = e.baseUrl;
                try {
                    b += p(a, b.length)
                } catch (d) {
                    c.add(c.ERROR_IMPRESSION_URLS)
                }
                b += "&" === b.slice( - 1) ? "" : "&";
                try {
                    b += n(b.length)
                } catch (f) {
                    c.add(c.ERROR_JSINFO), b += "adsafe_jsinfo=e:" + c.toString()
                }
                e.macroUrl && (b += "&" === b.slice( - 1) ? "" : "&", b += e.macroUrl);
                try {
                    e.sendImpression(b)
                } catch (h) {
                    __IntegralASDiagnosticCall("impsend", h, l)
                }
            }
        }
    }, za = function(a, c) {
        return {
            init: function(b) {
                a.jsonp(b,
                function(a) {
                    c.send(m.DT_CODES.THIRD_PARTY, void 0, !1, !0, {
                        field : "tpiLookup", value : a
                    })
                }, !1, "callback")
            }
        }
    }, wa = function(a, c, b) {
        var d = function(a, b) {
            return {
                time: a,
                task: b
            }
        }, e = function(a, b) {
            b = b || g.noop;
            return function(e) {
                return g(e).map(function(e, g) {
                    var k = g / 1E3;
                    return new d(g, function() {
                        var d;
                        d = "";
                        1 !== k && (d += k);
                        d = l["_onInViewMRC" + d];
                        c.send(a, k);
                        b(d)
                    })
                })
            }
        };
        return {
            getJob: function(a, b) {
                return new d(a, b)
            },
            getPingJobs: e(m.DT_CODES.PING, function(d) {
                "true" === l.useViewabilityNotification&&!b.skipAsFraudulent() &&
                d && a.notify(d)
            }),
            getFullyInViewPingJobs: e(m.DT_CODES.FULLY_INVIEW),
            getPosInViewPingJobs: e(m.DT_CODES.POS_INVIEW)
        }
    }, ja = function() {
        var a = function(a, d) {
            - 1 !== a.indexOf(d + "&") && (d += "&");
            return a.replace(d, "")
        }, c = function(a, d, c) {
            var f = a.indexOf("?");
            d = d + "=" + c;
            if ( - 1 === f)
                return a + "?" + d;
            f++;
            return a.slice(0, f) + d + "&" + a.slice(f)
        };
        return {
            wrap: function(b, d, e, f) {
                var h = "__IntegralAS_" + l.asid.replace(/\-/g, "") + "_" + r.round(1E4 * Math.random()), g, p, n;
                f = f || "ias_callback";
                RegExp(f).test(b) && (g = RegExp("(" + f + "=)(.[^&]*)").exec(b)[0],
                p = g.split("=")[1], n = N.stringToFn(p), b = a(b, g));
                window[h] = function(a) {
                    d(a);
                    e && n && n(a);
                    window[h] = void 0
                };
                return b = c(b, f, h)
            }
        }
    }, ia = function() {
        var a = function() {
            return void 0 !== window.mraid
        };
        return {
            isInView: function() {
                var c = m.NA;
                a() && void 0 !== window.mraid.isViewable && (c = window.mraid.isViewable() ? m.IN_VIEW : m.OUT_OF_VIEW);
                return c
            },
            getDetectionMethod: function() {
                return a() ? "m" : m.NA
            },
            isMobileApp: function() {
                return a()
            }
        }
    }, Aa = function(a, c, b) {
        var d = {
            jss: {
                isFW: !0,
                nodeType: "script"
            },
            jsi: {
                isFW: !0,
                nodeType: "iframe"
            },
            jload: {
                impressionMethod: function(a) {
                    c.send(a, function() {
                        b.trigger("sendDiag")
                    }, !0)
                }
            },
            bapi: {
                impressionMethod: function(b) {
                    c.jsonp(b, a.enabled ? a.callback : g.noop, a.enabled?!0 : !1)
                }
            },
            jsapi: {
                isFW: !0,
                impressionMethod: function(b) {
                    c.jsonp(b, a.enabled ? a.callback : g.noop, a.enabled?!0 : !1)
                }
            },
            jsvid: {
                impressionMethod: function(a) {
                    b.on("adImpression", function() {
                        c.send(a)
                    })
                }
            },
            fwjsvid: {
                isFW: !0,
                processUrl: function(a) {
                    "false" === l.fwMonitoring && (a = a.split("/"), a[3] = "db2", a[4] = "video", a = a.join("/"));
                    return a
                },
                impressionMethod: function(a) {
                    "false" ===
                    l.fwMonitoring && c.jsonp(a, function(a) {
                        b.trigger("videoBlockResult", a)
                    });
                    b.on("adImpression", function() {
                        c.send(a)
                    })
                }
            },
            jspix: {
                nodeType: "img"
            }
        };
        return new function() {
            var a = d[l.mode], b=!!a.isFW, g = b ? l.adsafeSrc : l.requrl + "?" + l.reqquery, k = g.indexOf("BEGIN__ADSAFE"), p =- 1 !== k, n = p ? g.slice(k) : "", g = p ? g.slice(0, k) : g + (b ? l.adsafeSep : "&");
            return {
                isFW: b,
                baseUrl: g,
                macroUrl: n,
                sendImpression: function(b) {
                    b = a.processUrl ? a.processUrl(b) : b;
                    a.nodeType ? c.addNode(a.nodeType, b) : a.impressionMethod(b)
                }
            }
        }
    }, Fa = function(a, c) {
        var b,
        d = l.mtCell, e = l.mtSample, f = 0, h = 0, k = [], p = null, n = null, q, t = function(a) {
            try {
                var b = r.now() - p;
                f += b;
                z.removeEvent("mousemove", s);
                k.push("{ht:" + f + ",mm:{" + g(q).toParams() + "}}");
                c.addItem({
                    output: "{cs:" + d + ",sr:" + e + ",ec:" + k.length + ",me:[" + k.slice( - 10).join(",") + "]}"
                }, "mt", {
                    type: m.DT_CODES.UNLOAD
                })
            } catch (h) {}
        }, x = function(a) {
            try {
                f = 0, q = {}, p = r.now(), z.addEvent(b, "mousemove", s)
            } catch (d) {}
        }, s = function(c) {
            var f, k, p, l, m, s, t;
            try {
                null === n && (n = b && g.isDef(c.clientX) && g.isDef(c.clientY));
                if (n && 0 === h%e && (m = a.calcDims(), - 1 !==
                m)) {
                    t = r.ceil(m.width / d);
                    var x = c.clientX, v = c.clientY;
                    p = u.embedded ? x : x - m.x;
                    l = u.embedded ? v : v - m.y;
                    f = r.floor(p / d);
                    k = r.floor(l / d);
                    s = f + k * t;
                    q[s] ? q[s]++ : q[s] = 1
                }
                h++
            } catch (z) {}
        };
        return {
            init: function() {
                try {
                    var c = setInterval(function() {
                        a.isDetected() && (b = a.find(), z.addEvent(b, "mouseenter", x), z.addEvent(b, "mouseleave", t), clearInterval(c))
                    }, 250)
                } catch (d) {}
            }
        }
    }, r = {
        execAtEndOfThread: function(a) {
            setTimeout(a, 0)
        },
        now: function() {
            return (new Date).getTime()
        },
        random: function() {
            return Math.random()
        },
        round: function(a) {
            return Math.round(a)
        },
        ceil: function(a) {
            return Math.ceil(a)
        },
        floor: function(a) {
            return Math.floor(a)
        }
    }, fa = function() {
        var a = {}, c = r.now(), b=!0, d = new Q, e = function() {
            var a = function() {
                c = r.now();
                window.webkitRequestAnimationFrame(a)
            };
            window.webkitRequestAnimationFrame(a);
            setInterval(function() {
                var a = 100 < r.now() - c;
                b !== a && (b = a, d.run(a))
            }, 100)
        }, f = function() {
            var a = null;
            g.isDef(document.hidden) ? a = document.hidden : g.isDef(document.mozHidden) ? a = document.mozHidden : g.isDef(document.msHidden) ? a = document.msHidden : g.isDef(document.webkitHidden) &&
            (a = document.webkitHidden);
            if (null !== a) {
                var c = a;
                b !== c && (b = c, d.run(c))
            }
            return a
        };
        a.onHiddenChange = function(a) {
            d.push(a)
        };
        a.isHidden = f;
        null === f() && g.isDef(window.webkitRequestAnimationFrame) && (e(), a.isHidden = function() {
            return b
        });
        return a
    }, ga = function() {
        var a = function(a) {
            for (var c in a)
                if (a.hasOwnProperty(c)) {
                    var e = a[c];
                    ("" === e || "null" === e || "undefined" === e || null === e || g.isUndef(e)) && delete a[c]
                }
            return a
        }, c = function(a) {
            var c = {}, e, f;
            for (f in a)
                a.hasOwnProperty(f) && (e = a[f], g.isUndef(c[e]) ? c[e] = f : c[e] += f);
            a = {};
            for (f in c)
                c.hasOwnProperty(f) && (e = c[f], a[e] = f);
            return a
        };
        return {
            detectTopURL: function() {
                var b = function() {
                    var a = {
                        g: "",
                        q: ""
                    };
                    try {
                        a.q = window.parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href
                    } catch (b) {
                        var c = b.message, c = c.substring(c.lastIndexOf("<") + 1, c.lastIndexOf(">")), d;
                        if (d = g.isDef(c))
                            if (d=!1, g.isDef(window.navigator) && g.isDef(window.navigator.userAgent)) {
                                var e = window.navigator.userAgent.match(/Firefox\/([\.0-9]+)/);
                                null !== e && 2 == e.length && (e = e[1].split("."),
                                3 == parseInt(e[0], 10) && 6 >= parseInt(e[1], 10) && (3 == e.length ? 13 >= parseInt(e[2], 10) && (d=!0) : d=!0))
                            }
                        d && (a.g = c)
                    }
                    return a
                }, d = {};
                try {
                    d.a = encodeURIComponent(top.location.href)
                } catch (e) {}
                try {
                    d.b = encodeURIComponent(parent.location.href)
                } catch (f) {}
                if (u.embedded) {
                    try {
                        d.c = encodeURIComponent(parent.document.referrer)
                    } catch (h) {}
                    try {
                        d.e = encodeURIComponent(window.document.referrer)
                    } catch (k) {}
                }
                try {
                    "jsi" !== l.mode && (d.d = encodeURIComponent(window.location.href))
                } catch (p) {}
                try {
                    d.f = encodeURIComponent(l.jsref)
                } catch (n) {}
                try {
                    var q =
                    b();
                    d.g = encodeURIComponent(q.g);
                    d.q = encodeURIComponent(q.q)
                } catch (m) {}
                var d = a(d), d = c(d), b = [], r;
                for (r in d)
                    d.hasOwnProperty(r) && b.push({
                        key: r,
                        val: d[r]
                    });
                b.sort(function(a, b) {
                    return a.val.length > b.val.length ? 1 : a.val.length < b.val.length?-1 : 0
                });
                return b
            }
        }
    }, Ha = function(a) {
        return {
            hash: function() {
                for (var c = 0, b = a.length, d = [], e; c < b; c++)
                    e = a[c].filename.replace(/\.plugin$/, ""), e = N.hashCode(e), e = g.toBase(e, 62).slice( - 4), d.push(e);
                return d
            },
            decode: function(c) {
                var b, d;
                b = r.floor(r.random() * c.length);
                d = encodeURIComponent(a[b].filename.replace(/\.plugin$/,
                ""));
                return [c[b], d]
            }
        }
    }, U = function() {
        var a=!1;
        return {
            measure: function(c) {
                a = 0 === c.rsa
            },
            skipAsFraudulent: function() {
                return a
            }
        }
    }, ha = function() {
        var a = [], c = {}, b = {
            sl: "n",
            gsl: "gn",
            fsl: "fn"
        }, d = 0, e, f, h = {
            i: 0,
            o: 0,
            n: 0,
            pp: 0,
            pm: 0,
            gpp: 0,
            gpm: 0,
            gi: 0,
            go: 0,
            gn: 0,
            fi: 0,
            fo: 0,
            fn: 0
        }, k = function(a) {
            var b = {}, c = a.winDimensions, d = a.adDimensions, e = function(a) {
                var b = "";
                g.isDef(a) && g.isDef(a.x) && g.isDef(a.y) && g.isDef(a.width) && g.isDef(a.height) && (b = [a.x, a.y, a.width, a.height].join("."));
                return b
            };
            g.isDef(c)&&-1 !== c && (b.wc = e(c));
            g.isDef(d) &&
            - 1 !== d && (b.ac = e(d), b.am = d.method, b.cc = e(d.container));
            g({
                piv: "percentInView",
                obst: "obstructed",
                th: "tabHidden",
                reas: "reason"
            }).each(function(c, d) {
                var e = a[d];
                g.isDef(e) && (b[c] = e)
            });
            c = g(b).toParams();
            return "" === c ? "" : "," + c
        }, p = function(a, b) {
            var d = new La(b);
            return c[a] = d
        }, n = function(a, b) {
            return (b || "") + {
                inView: "i",
                outOfView: "o",
                na: "n",
                partialViewMinus: "pm",
                partialViewPlus: "pp"
            }
            [a]
        }, l = function() {
            g(b).each(function(b, c) {
                h[c] += a.length ? f - d : f
            });
            d = f
        }, r = function(c) {
            a.length && l();
            g(c).each(function(a, c) {
                var d =
                b[a];
                d !== c && "n" === d && (h[c] += h.n);
                b[a] = c
            });
            a.length || l()
        }, x = function(a) {
            var b;
            b = k(a);
            var d = {
                sl: n(a.viewState),
                fsl: n(a.fState || m.NA, "f"),
                gsl: n(a.gState || m.NA, "g")
            };
            f = u.getTagTime();
            r(d);
            d.t = f;
            b = g({
                toString: function() {
                    g(c).each(function(a, b) {
                        b.fastForward()
                    });
                    return "{" + g(d).toParams() + this.details + this.breakdowns + "}"
                },
                details: b,
                breakdowns: {
                    piv: [],
                    as: [],
                    toString: function() {
                        var a, b = function(a, b) {
                            return b.duration + ":" + b.state
                        };
                        a = "" + ("piv:[" + g(this.piv).stringify(b) + "]");
                        a += ",as:[" + g(this.as).stringify(b) +
                        "]";
                        return ",bkn:{" + a + "}"
                    }
                },
                isInView: function() {
                    return - 1 !== (m.IN_VIEW + "|" + m.PARTIAL_VIEW_PLUS).indexOf(a.viewState)
                },
                isFullyInView: function() {
                    var b = a.useCocoa ? a.fullPercentInView: a.percentInView;
                    return this.isInView() && 100 === b
                }
            }).mixin(d);
            g(b).mixin(a);
            return b
        };
        (function() {
            p("piv", function(a) {
                var b, c = a.percentInView, d = [1, 30, 50];
                100 === c || 0 === c ? b = c : (g(d).each(function(a, e) {
                    g.isUndef(b) && c < e && (b = d[a - 1])
                }), g.isUndef(b) && (b = d[d.length - 1]));
                return b
            });
            p("as", function(a) {
                return a.adDimensions.height + "." +
                a.adDimensions.width
            })
        })();
        return {
            fastForward: function() {
                f = u.getTagTime();
                l()
            },
            registerLocation: function(d) {
                var f, h=!1;
                b.sl == n(d.viewState) && a.length ? (f = new x(d), a[a.length - 1].details = f.details) : (f = new x(d), a.push(f), e = d.viewState, h=!0);
                g(c).each(function(b, c) {
                    - 1 !== "piv|as".indexOf(b) ? (h && c.clear(), c.addState(f), a[a.length - 1].breakdowns[b] = c.get()) : c.addState(f)
                });
                return f
            },
            stringify: function(b) {
                var c = "";
                a.length && (c = g({
                    slTimes: "{" + g(h).toParams() + "}",
                    slEvents: "[" + a.slice( - b).join(",") + "]",
                    slEventCount: a.length
                }).toParams());
                return c
            },
            createViewabilityTracker: p,
            getCurrentLoc: function() {
                return n(e)
            }
        }
    }, Da = function(a) {
        var c = l.asid, b = [0, 1, 4], d, e = function() {
            var a = setInterval(function() {
                window.postMessage({
                    asid: c,
                    ksca: "acsk",
                    sender: "main"
                }, "*")
            }, 50);
            window.addEventListener("message", function(d) {
                d = d.data;
                "acsk" === d.ksca && d.asid === c && "main" !== d.sender && ("ack" === d.type && clearInterval(a), "complete" === d.type && (d.timeReturned = r.now(), f(d)), b.length && (d = b.shift(), window.postMessage(h(d), "*")))
            })
        }, f = function(b) {
            var c =- 5 - 0.1 * b.targets,
            d = m.DT_CODES.SCA;
            b = "{" + g(b).stringify(function(a, b) {
                var c;
                0 === a.indexOf("time") ? c = a + ":" + b : "resultList" === a && (c = "rl:" + g(b).map(function(a, b) {
                    return "{" + g(b).toParams() + "}"
                }).join("."));
                return c
            }) + "}";
            a.trigger("addOutputItem", {
                output: b
            }, "sc", {
                type: d
            });
            a.trigger("sendDt", d, c)
        }, h = function() {
            var a = 0, b = c.replace("-", ""), e = b.substr( - 6);
            return function(g) {
                for (var f = d, h = r.now(), l = g, m = []; l--;)
                    m.push(b.substr(++a, 3));
                return {
                    scaUrl: f,
                    targets: g,
                    timeBegun: h,
                    src: e,
                    targetList: m,
                    asid: c,
                    ksca: "acsk",
                    sender: "main",
                    cap: 1E6
                }
            }
        }();
        return {
            load: function() {
                if (!g.isUndef(window.Worker)&&!g.isUndef(window.Blob)) {
                    var b = new K;
                    b.sub("static");
                    b.master(b.master().split(":")[0]);
                    b.path("/sca.js");
                    d = b.toString();
                    a.trigger("exec", d);
                    e()
                }
            }
        }
    }, N = {
        rot: function(a) {
            return a.replace(/[a-zA-Z]/g, function(a) {
                return String.fromCharCode(("Z" >= a ? 90 : 122) >= (a = a.charCodeAt(0) + 13) ? a : a - 26)
            })
        },
        hashCode: function(a) {
            var c = 0, b, d, e;
            if (0 === a.length)
                return c;
            b = 0;
            for (e = a.length; b < e; b++)
                d = a.charCodeAt(b), c = (c<<5) - c + d, c|=0;
            return c
        },
        stringToFn: function(a) {
            var c,
            b = window, d = a.split(".");
            for (a = 0; a < d.length; a++)
                if (c = b, b = b[d[a]], g.isUndef(b) || a === d.length - 1&&!g.isFunction(b))
                    return !1;
            return function() {
                b.apply(c, arguments)
            }
        }
    }, sa = function(a, c, b, d, e) {
        var f = m.OUT_OF_VIEW, h, k = function() {
            if (h)
                return h;
            var b = g(document.getElementsByTagName("object")).toArray(), c = g(document.getElementsByTagName("embed")).toArray(), d = "IASid" + a;
            return h = g(b.concat(c)).find(function(b, c) {
                var e = g.isFunction(c[d]);
                if (e)
                    c[d](a);
                return e
            })
        };
        b.on("videoBlockResult", function(b) {
            var c = k(), d=!1,
            e = "blockAd" + a;
            "failed" === b.action && (d=!0);
            if (c && g.isDef(c.blockAd))
                c.blockAd(d);
            else if (c && g.isDef(c[e]))
                c[e](d)
        });
        (function() {
            var g=!1, h=!1;
            c.on("hundredpct") && l.use100v && (new Na(b, d)).init();
            z.addEvent(window, "message", function(c) {
                var d = {};
                try {
                    d = JSON.parse(unescape(c.data))
                } catch (l) {
                    d = {}
                }
                d.recordType = "video";
                d.id === a && (c = d.messageType, - 1 !== "showAd|adStarted|adVideoStart|adVideoStarted|resumeAd".indexOf(c) ? (g=!0, f = h ? m.IN_VIEW : !1) : - 1 !== "adVideoComplete|adStopped|stopAd|pauseAd".indexOf(c) ? (g=!1, f =
                m.OUT_OF_VIEW) : "resizeAd" === c && ("fullscreen" === d.viewMode ? (h=!0, f = g ? m.IN_VIEW : m.OUT_OF_VIEW) : (h=!1, f = g?!1 : m.OUT_OF_VIEW)), e.addRecord(d), b.trigger(c, d))
            })
        })();
        return {
            findVideo: k,
            version: k().getVersion(),
            forceViewState: function() {
                return f
            }
        }
    }, ra = function(a) {
        var c = [], b = function(b) {
            var c = g({
                t: b.time - l.birthdate,
                tp: b.messageType,
                vid: b.id,
                sl: a.getCurrentLoc()
            }).mixin(b.eventData);
            return g({
                toString: function() {
                    return "{" + g(c).toParams() + "}"
                }
            }).mixin(c)
        };
        return {
            getEvents: function() {
                return c
            },
            addRecord: function(a) {
                a =
                new b(a);
                c.push(a)
            },
            stringify: function() {
                return "{" + g({
                    vEventCount: c.length,
                    vEvents: "[" + c.join(",") + "]"
                }).toParams() + "}"
            }
        }
    }, Ba = function(a, c, b, d, e, f, h, k, p, n, q, t, v, s, B) {
        var y, D, w, A, C = 0, E = 0, L, G =- 1 !== l.mode.indexOf("jsvid"), K = q.isMobileApp(), N = G ? 200 : 100, Q = d.on("recordalternate");
        b = d.on("forcecocoa");
        var H = a.getDocumentMode(), H = a.browserIs("g") || a.browserIs("i") && (9 === H || 10 === H) && d.on("rattie"), F = u.friendlyIframe && b || u.xDomainIframe && H && b || u.xDomainIframe&&!H, J = F && d.on("cocoapuffs"), S = new Ma(10), I = [G &&
        d.on("videotwoseconds") ? 2E3: 1E3, 5E3, 15E3], O = g(I).map(function(a, b) {
            return b / 1E3
        }).join("-"), P = new $(1E3), ba = new Z(n.getPingJobs(I));
        if (d.on("hundredpct") && l.use100v)
            var X = new $(1E3), T = new Z(n.getFullyInViewPingJobs(I));
        if (d.on("tabHiddenDtCall"))
            var V = new $(1E3), U = new Z(n.getPosInViewPingJobs([I[0]]));
        var R = function(b) {
            S.start();
            var f, h, k;
            f = v.collect();
            k = function() {
                R();
                d.on("viewabilityready") && c.send(m.DT_CODES.VIEWABILITY_READY)
            };
            Q && (f.gState = f.viewState);
            if (J) {
                y = y || new Y(M, f.adDimensions, k, d, t,
                a) || {};
                h = y.checkViewable();
                d.on("hundredpct") && l.use100v && (A = A || new Ka(Ja, f.adDimensions, k, a, d, e, p, t) || {}, k = A.checkViewable(), f.fullPercentInView = k.pct, f.useCocoa = J);
                if (1 !== f.tabHidden || h.str === m.NA)
                    f.viewState = h.str;
                f.percentInView = h.pct;
                d.on("unreliabilityDetection") && (w = w || new Y(M, {
                    height: 0,
                    width: - 2E4
                }, g.noop, d, t, a) || {}, h = w.checkViewable(), h.str !== m.OUT_OF_VIEW && (E += 1), C += 1, p.addItem({
                    output: E + "/" + C
                }, "fu"))
            } else 
                F && (f.viewState = m.NA, f.percentInView =- 1);
            Q && (D || b || (D = J ? y : new Y(M, f.adDimensions, g.noop,
            d, t, a, e)), f.fState = b ? m.NA : D.checkViewable().str);
            if (G) {
                if (b = B.forceViewState())
                    f.viewState = b
            } else 
                K && (f.viewState = q.isInView());
            b = s.registerLocation(f);
            d.on("hundredpct") && l.use100v && (b.isFullyInView() ? (X.mark(), T.doEligibleJobs(X.getTotalTime())) : X.stop());
            b.isInView() ? (P.mark(), ba.doEligibleJobs(P.getTotalTime())) : P.stop();
            (h = ba.getNextJob()) && h.time === I[0] && d.on("tabHiddenDtCall") && (f.posViewState === m.IN_VIEW || f.posViewState === m.PARTIAL_VIEW_PLUS ? (V.mark(), U.doEligibleJobs(V.getTotalTime())) : V.stop());
            S.stop();
            f = r.round(S.getTime() / S.getCount());
            p.addItem({
                output: f
            }, "lt", {
                type: m.DT_CODES.UNLOAD
            });
            return b
        }, W = function(a) {
            L=!0;
            var b=!1;
            a = function() {
                b || (b=!0, c.send(m.DT_CODES.VIDEO_EVENTS))
            };
            h.impressionIsIdentifiable() && (R(), setInterval(R, N), f.on("adStopped", a), f.on("adVideoComplete", a), z.addEvent(window, "beforeunload", c.unload, !1), G && z.addEvent(window, "beforeunload", a, !1))
        };
        return {
            checkScreenLoc: R,
            init: function() {
                "true" === l.allowViewability && g.isFunction(document.addEventListener) ? (L=!1, "complete" ==
                document.readyState || "loaded" == document.readyState || "interactive" == document.readyState ? r.execAtEndOfThread(W) : document.addEventListener("DOMContentLoaded", W, !1)) : k.waitForBody(W)
            },
            needsFlash: function() {
                return F
            },
            readyFired: function() {
                return L
            },
            useFlash: function() {
                return J
            },
            stringifyPingTimes: function() {
                return O
            }
        }
    };
    try {
        Ia()
    } catch (Oa) {
        __IntegralASDiagnosticCall("main", Oa, l)
    }
};
try {
    __IntegralASConfig.initialize(__IntegralASConfig)
} catch (err$$13) {
    __IntegralASDiagnosticCall("initialize", err$$13, __IntegralASConfig)
};

