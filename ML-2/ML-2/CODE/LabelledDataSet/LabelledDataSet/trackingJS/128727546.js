






(function() {
    geolocation = {};
    geolocation.requestGeo = function(b, a, e) {
        if (e) {
            var d = {};
            document.cookie.replace(/([^\s;]*)=([^;]*)/ig, function(a, b, c) {
                100 >= c.length && 0 !== b.indexOf("optimizely") && (d["c_" + b] = unescape(c))
            });
            d.project = a;
            var a = [], c;
            for (c in d)
                d.hasOwnProperty(c) && a.push(encodeURIComponent(c) + "=" + encodeURIComponent(d[c]));
            b += "?" + a.join("&")
        }
        c = b;
        b = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
        a = document.createElement("script");
        a.type = "text/javascript";
        a.async=!0;
        a.src = c;
        b.insertBefore(a,
        b.firstChild)
    };

    geolocation.requestGeo("//cdn3.optimizely.com/js/geo2.js", 128727546, false);
})();
optimizelyCode = function() {
    var DATA = {
        "installation_verified": true,
        "log_host": "log.optimizely.com",
        "goal_expressions": {
            "128765185": ["^engagement$"],
            "146927093": ["^editor's\\_choice\\_bar\\_clicks$"],
            "178248101": ["^t2\\_clicks$"]
        },
        "experiments": {
            "147145603": {
                "conditions": [{
                    "type": "url",
                    "values": [{
                        "value": "http://edition.cnn.com",
                        "match": "simple"
                    }
                    ]
                }, {
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "all"
                }
                ],
                "name": "29Nov12 International Performance Test for AMPT - Nav Bar Travel Tab",
                "variation_ids": ["147126746", "147184731", "147342517", "147304463"],
                "enabled_variation_ids": ["147126746", "147184731", "147342517", "147304463"]
            },
            "1495281064": {
                "conditions": [{
                    "type": "url",
                    "values": [{
                        "value": "http://edition.cnn.com",
                        "match": "simple"
                    }
                    ]
                }, {
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "all"
                }
                ],
                "name": "World Cup geo",
                "variation_ids": ["1497320731", "1477861413"],
                "enabled_variation_ids": ["1497320731", "1477861413"]
            },
            "1515820142": {
                "conditions": [{
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "all"
                }
                ]
            },
            "1381235131": {
                "conditions": [{
                    "type": "url",
                    "values": [{
                        "value": "http://www.cnn.com/2014/06/12/football/gallery/world-cup-goals/index.html?hpt=hp_t1",
                        "match": "simple"
                    }
                    ]
                }, {
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "all"
                }
                ],
                "name": "gallery ad",
                "variation_ids": ["1379323026", "1380273335"],
                "enabled_variation_ids": ["1379323026", "1380273335"]
            },
            "212782270": {
                "conditions": [{
                    "type": "url",
                    "values": [{
                        "value": "http://www.cnn.com",
                        "match": "simple"
                    }
                    ]
                }, {
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "all"
                }
                ],
                "name": "bin moving",
                "variation_ids": ["212570845", "212998051"],
                "enabled_variation_ids": ["212570845", "212998051"]
            },
            "1477301823": {
                "conditions": [{
                    "type": "url",
                    "values": [{
                        "value": "http://edition.cnn.com",
                        "match": "simple"
                    }
                    ]
                }, {
                    "only_first_time": true,
                    "type": "visitor",
                    "value": "all"
                }
                ],
                "name": "x",
                "variation_ids": ["1471641745", "1474441805"],
                "enabled_variation_ids": ["1471641745", "1474441805"]
            }
        },
        "audiences": {
            "1600970202": {
                "conditions": ["and", {
                    "dimension_id": 1604560165,
                    "value": "GB"
                }
                ],
                "name": "UK Visitors",
                "segment_id": 179562258
            },
            "1603590164": {
                "conditions": ["and", ["not", ["or", {
                    "dimension_id": 1604560165,
                    "value": "|||EU"
                }, {
                    "dimension_id": 1604560165,
                    "value": "US"
                }
                ]]],
                "name": "Rest of the World",
                "segment_id": 179619049
            },
            "1601010214": {
                "conditions": ["and", {
                    "dimension_id": 1604560165,
                    "value": "|||EU"
                }
                ],
                "name": "European Visitors",
                "segment_id": 179260998
            },
            "1601010215": {
                "conditions": ["and", {
                    "dimension_id": 1604560165,
                    "value": "US"
                }
                ],
                "name": "US Visitors",
                "segment_id": 179261000
            }
        },
        "www_host": "www.optimizely.com",
        "token_hash": "94bd383eb1129366e3f5e69905cff4b3d07312265fbc687eff81b64c63fdf037",
        "dimensions": {
            "1604560165": {
                "condition_type": "location"
            }
        },
        "summary_revenue_goal_id": 128751304,
        "public_suffixes": {
            "cnn.com": ["edition.cnn.com", "www.cnn.com"]
        },
        "api_host": "api.optimizely.com",
        "variations": {
            "212998051": {
                "name": "Variation #1"
            },
            "1477861413": {
                "name": "Variation #1"
            },
            "1474441805": {
                "name": "Variation #1"
            },
            "147304463": {
                "code": "$(\".cnn_hpinthenews\").css({\"background-image\":\"none\", \"background-color\":\"#f1ee3b\"});",
                "name": "Variation #3"
            },
            "1471641745": {
                "name": "Original"
            },
            "1379323026": {
                "name": "Original"
            },
            "147342517": {
                "code": "$(\"#intl-menu > li:eq(13)\").css({\"position\":\"relative\", \"left\":1, \"top\":-13, \"width\":57, \"height\":45});\n$(\"#nav-travel\").css({\"position\":\"relative\", \"left\":0, \"top\":0, \"width\":52, \"height\":48});\n$(\"#nav-travel\").css({\"width\":66, \"height\":47});\n$(\"#intl-menu > li:eq(14)\").css({\"position\":\"relative\", \"left\":929, \"top\":-48});\n$(\"#hdr-search > form\").css({\"position\":\"relative\", \"left\":0, \"top\":-6});\n$(\"#nav-travel\").css({\"background-image\":\"none\"});\n$(\"#nav-travel\").css({\"background-color\":\"#910305\"});\n$(\"#intl-menu > li:eq(13)\").css({\"top\":-13});",
                "name": "Tall Tab Dark"
            },
            "1380273335": {
                "name": "Variation #1"
            },
            "1497320731": {
                "name": "Original"
            },
            "147126746": {
                "name": "Original"
            },
            "147184731": {
                "code": "$(\"#intl-menu > li:eq(13)\").css({\"position\":\"relative\", \"left\":1, \"top\":-13, \"width\":57, \"height\":45});\n$(\"#nav-travel\").css({\"position\":\"relative\", \"left\":0, \"top\":0, \"width\":52, \"height\":48});\n$(\"#nav-travel\").css({\"width\":66, \"height\":47});\n$(\"#intl-menu > li:eq(14)\").css({\"position\":\"relative\", \"left\":929, \"top\":-48});\n$(\"#hdr-search > form\").css({\"position\":\"relative\", \"left\":0, \"top\":-6});",
                "name": "Tall Travel Tab"
            },
            "212570845": {
                "name": "Original"
            }
        },
        "version": "master-1657.379613251991408306",
        "admin_account_id": 125375509,
        "blacklisted_experiments": [1260859392, 312116737, 202947074, 1760630275, 314764804, 567610373, 289427457, 566893064, 1607894537, 657420804, 632611757, 1355864592, 1411340974, 287882260, 1889830574, 2088083478, 2119610903, 2066450457, 1865580570, 140365743, 1894171679, 1524130006, 1304170018, 2013901349, 1901140159, 1999730732, 582570029, 575262813, 1359120434, 1617490611, 1737790005, 159155465, 1763220025, 1619971646, 273229237, 1418982465, 1602084418, 1301800004, 264187973, 625260102, 312236104, 2004160152, 598070860, 581192270, 1712730191, 2130591313, 576391779, 1417400404, 128791125, 579411197, 1351268783, 1263599193, 183102404, 1765130845, 1803310174, 221872223, 1420471362, 298562657, 1484260962, 1441123427, 789410916, 185174118, 266940520, 1119920191, 1263459434, 153059947, 582810732, 652482157, 570451568, 1262850162, 2035220596, 575821942, 325370999, 1304790020, 178208959, 1792230013, 320153726, 352900225, 579862146, 230112388, 1989370501, 182412934, 183176371, 2100440201, 2016160908, 248179011, 1857681038, 571310223, 1260011646, 152265703, 583990446, 1258066584, 1765481924, 187053210, 287956847, 170972828, 177857562, 481610910, 288968351, 1266542245, 182505126, 227478185, 170934954, 1023403379, 260309738, 1262326959, 147794256, 1266660019, 147567284, 182469301, 1573672820, 180502910, 2120371387, 1039746735, 181572287, 281245378, 583320011, 1575922461, 1574804342, 323866311, 324240585, 667651787, 1914950349, 228669134, 1340090575, 1767590319, 1892100310, 264181878, 204998873, 805969731, 221764317, 1424450270, 641241637, 1806500065, 2057210082, 569350371, 1773020388, 2094990053, 581321197, 581210855, 178074856, 1349283562, 285315979, 653250285, 1743300334, 545860335, 1057950449, 2030580978, 1414750451, 1783230334, 585750775, 1983100664, 191466745, 574210943, 580110588, 667651325, 146812670, 582450863, 1765151493, 177492569, 1788761865, 183205762, 159568649, 583320338, 568921881, 147750682, 251008283, 169780698, 2034790686, 596252960, 1444010288, 1265387298, 664740898, 288040228, 1385994534, 129534759, 146841386, 314575922, 1412724113, 167178544, 1455367988, 129005877, 569600310, 658531687, 1300660028, 1925770045, 1768271166, 1398510399, 340089152, 251806529, 1264401730, 1588466059, 1829300038, 2040270988, 128878410, 1366270007, 577340236, 1839670093, 1516296350, 264599376, 583130451, 1573863765, 933620906, 2105090393, 300137871, 1424660316, 288118110, 573771104, 349850977, 1263461685, 1263476582, 1765070695, 177687401, 190884203, 656672108, 2016550063, 1997441390, 1430173551, 1388231536, 1578530162, 1622090643, 1400801228, 575300469, 611221878, 301441513, 1413602168, 1362950009, 2063890298, 177431359, 146526589, 1833020286, 278813055, 321572753, 669723522, 566291815, 2017380228, 565490053, 1296381833, 2122362251, 178233229, 1842990479, 1264070296, 1647731091, 177704340, 1577110012, 176997783, 286837657, 712921370, 603300335, 1422432669, 272671386, 580850592, 280600481, 177410978, 1408852891, 288723878, 1475411367, 1294701480, 569450411, 128845740, 303949554, 566211515, 178245039, 172100016, 317264968, 581360053, 171988284, 199762420, 1376702394, 249252283, 1617253962, 287984062, 177343936, 1469380033, 169189314, 286932931, 2119000004, 159676406, 570030911, 577502796, 573320439, 147763148, 199789517, 226944248, 567972259, 2121593302, 576411641, 183052762, 655330383, 574362588, 199691229, 579921573, 180458320, 177806819, 1423761892, 1260489638, 1854210022, 1325970407, 1576081916, 214724519, 1289111532, 319401965, 1587150319, 1852380144, 177298344, 1999911924, 275513334, 159498921, 339836408, 570640889, 192552442, 1771610620, 1303610026, 1765130837],
        "project_id": 128727546,
        "segments": {
            "172468417": {
                "segment_value_type": "mobile",
                "api_name": "optimizely_mobile",
                "id": 172468417,
                "name": "Mobile Visitors"
            },
            "179260998": {
                "audience_id": 1601010214,
                "api_name": "european_visitors",
                "id": 179260998,
                "uses_geotargeting": true,
                "name": "European Visitors"
            },
            "179261000": {
                "audience_id": 1601010215,
                "api_name": "us_visitors",
                "id": 179261000,
                "uses_geotargeting": true,
                "name": "US Visitors"
            },
            "179619049": {
                "audience_id": 1603590164,
                "api_name": "rest_of_the_world",
                "id": 179619049,
                "uses_geotargeting": true,
                "name": "Rest of the World"
            },
            "179562258": {
                "audience_id": 1600970202,
                "api_name": "uk_visitors",
                "id": 179562258,
                "uses_geotargeting": true,
                "name": "UK Visitors"
            },
            "172244722": {
                "segment_value_type": "browser",
                "api_name": "optimizely_browser",
                "id": 172244722,
                "name": "Browser"
            },
            "171825878": {
                "segment_value_type": "source_type",
                "api_name": "optimizely_source_type",
                "id": 171825878,
                "name": "Source Type"
            },
            "172343962": {
                "segment_value_type": "campaign",
                "api_name": "optimizely_campaign",
                "id": 172343962,
                "name": "Campaign"
            }
        },
        "click_goals": [{
            "event_name": "editor's_choice_bar_clicks",
            "experiments": {
                "146812670": true
            },
            "selector": ".cnn_hpinthenews"
        }, {
            "event_name": "t2_clicks",
            "experiments": {
                "178233229": true
            },
            "selector": "#cnn_maintt2bul"
        }
        ],
        "revision": 60
    };

    var optly = {
        nativity: {}
    };
    optly.nativity.getNativeGetElementsByClassName = function() {
        var a = document.getElementsByClassName;
        if (!optly.nativity.isNativeFunction(a))
            var a = (window.optimizely || {}).getElementsByClassName, b = (window.optly || {}).getElementsByClassName, a = optly.nativity.isNativeFunction(a) ? a: optly.nativity.isNativeFunction(b) ? b: null;
        return a
    };
    optly.nativity.isNativeFunction = function(a) {
        return a&&-1 !== String(a).indexOf("[native code]")
    };
    optly.Cleanse = {};
    optly.Cleanse.each = function(a, b, d) {
        var h=!!Object.prototype.__lookupGetter__, e=!!Object.prototype.__lookupSetter__, c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var f = h ? a.__lookupGetter__(c): null, g = e ? a.__lookupSetter__(c): null;
                try {
                    b.call(d, c, !f ? a[c] : null, f, g)
                } catch (i) {}
        }
    };
    optly.Cleanse.finish = function() {
        if (optly.Cleanse.running) {
            optly.Cleanse.running=!1;
            optly.Cleanse.each(optly.Cleanse.types, function(a, d) {
                Object.prototype.__defineGetter__ && optly.Cleanse.each(optly.Cleanse.getters[a], function(c, b) {
                    d.prototype.__defineGetter__(c, b);
                    optly.Cleanse.log("restored getter", a, c)
                });
                Object.prototype.__defineSetter__ && optly.Cleanse.each(optly.Cleanse.setters[a], function(c, b) {
                    d.prototype.__defineSetter__(c, b);
                    optly.Cleanse.log("restored setter", a, c)
                });
                optly.Cleanse.each(optly.Cleanse.properties[a],
                function(b, f) {
                    d.prototype[b] = f;
                    optly.Cleanse.log("restored property", a, b)
                })
            });
            optly.Cleanse.unfixGetElementsByClassName();
            optly.Cleanse.log("finish");
            var a = window.console;
            if (( - 1 !== window.location.hash.indexOf("optimizely_log=true")||-1 !== window.location.search.indexOf("optimizely_log=true")) && a && a.log)
                for (var b = optly.Cleanse.logs, d = 0; d < b.length; d++)
                    a.log(b[d])
        }
    };
    optly.Cleanse.log = function(a, b, d) {
        b ? (b = b.replace(/_/g, ""), optly.Cleanse.logs.push("Optimizely / Info / Cleanse / " + a + ": " + b + "." + d)) : optly.Cleanse.logs.push("Optimizely / Info / Cleanse / " + a)
    };
    optly.Cleanse.start = function() {
        var a = window.location.hostname;
        if (!( - 1 !== a.indexOf("optimizely")&&-1 === a.indexOf("edit")&&-1 === a.indexOf("preview")&&-1 === a.indexOf("test")))
            if (optly.Cleanse.running)
                optly.Cleanse.log("already running so didn't start");
            else {
                optly.Cleanse.log("start");
                optly.Cleanse.running=!0;
                for (var b in optly.Cleanse.types)
                    optly.Cleanse.types[b] || delete optly.Cleanse.types[b];
                    optly.Cleanse.each(optly.Cleanse.types, function(a, b) {
                        optly.Cleanse.getters[a] = {};
                        optly.Cleanse.properties[a] =
                        {};
                        optly.Cleanse.setters[a] = {};
                        optly.Cleanse.each(b.prototype, function(e, c, f, g) {
                            optly.nativity.isNativeFunction(c) || optly.nativity.isNativeFunction(f) || optly.nativity.isNativeFunction(g) ? optly.Cleanse.log("ignore native code", a, e) : (f ? (optly.Cleanse.getters[a][e] = f, optly.Cleanse.log("cleansed getter", a, e)) : (optly.Cleanse.properties[a][e] = c, optly.Cleanse.log("cleansed property", a, e)), g && (optly.Cleanse.setters[a][e] = g, optly.Cleanse.log("cleansed setter", a, e)), delete b.prototype[e])
                        })
                    });
                    optly.Cleanse.fixGetElementsByClassName();
                    optly.Cleanse.hasRunStart=!0
            }
        };
    optly.Cleanse.fixGetElementsByClassName = function() {
        if (!optly.nativity.isNativeFunction(document.getElementsByClassName)) {
            var a = optly.nativity.getNativeGetElementsByClassName();
            a ? (optly.Cleanse.getElementsByClassName = document.getElementsByClassName, document.getElementsByClassName = a) : optly.Cleanse.log("Error: native HTMLElement.prototype.getElementsByClassName missing")
        }
    };
    optly.Cleanse.unfixGetElementsByClassName = function() {
        optly.Cleanse.getElementsByClassName && (document.getElementsByClassName = optly.Cleanse.getElementsByClassName, optly.Cleanse.getElementsByClassName = null)
    };
    optly.Cleanse.getElementsByClassName = null;
    optly.Cleanse.getters = {};
    optly.Cleanse.logs = [];
    optly.Cleanse.properties = {};
    optly.Cleanse.setters = {};
    optly.Cleanse.types = {
        HTMLElement_: window.HTMLElement,
        Object_: Object
    };
    window.optly = window.optly || {};
    window.optly.Cleanse = {
        finish: optly.Cleanse.finish,
        logs: optly.Cleanse.logs,
        start: optly.Cleanse.start
    };
    optly.Cleanse.start();
    var $ = jQuery;
    function h(a) {
        throw a;
    }
    var i = void 0, k=!0, l = null, n=!1;
    function aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function ba(a, b, c) {
        a || h(Error());
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function p(a, b, c) {
        p = Function.prototype.bind&&-1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return p.apply(l, arguments)
    }
    function q(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = Array.prototype.slice.call(arguments);
            b.unshift.apply(b, c);
            return a.apply(this, b)
        }
    };
    function da(a, b) {
        var c = {}, c = i, d = r("custom_revenue_goals");
        d && (a in d && ea(d[a])) && (c = d[a]);
        var c = b && ea(b) ? {
            a: Number(b)
        }
        : b && b.revenue ? {
            a: b.revenue
        }
        : c ? {
            a: c
        }
        : b, d = fa(), e = {};
        t(d, function(a) {
            e[a] = k
        });
        $.extend(c, {
            h: e
        });
        ha(a, "custom", c)
    }
    function ha(a, b, c) {
        c = c || {};
        u && (ia.push({
            name: a,
            type: b,
            options: c
        }), ja ? (ka(), x("Tracker", "Tracking event '" + a + "'")) : x("Tracker", "Queued tracking event '" + a + "'"))
    }
    function la() {
        ma();
        $("html").bind("mousedown", na);
        $("html").bind("touchstart", oa)
    }
    function ma() {
        $("html").unbind("touchstart", oa);
        $("html").unbind("mousedown touchend", na);
        $("html").unbind("touchmove", la)
    }
    function oa() {
        $("html").bind("touchend", na);
        $("html").bind("touchmove", la)
    }
    function pa() {
        var a = document.location.href, b = r("pageview_revenue_goals");
        b && 0 < y(b) ? t(y(b), function(c) {
            ha(a, "pageview", {
                a: c,
                h: b[c]
            })
        }) : ha(a, "pageview")
    }
    function qa(a) {
        var b = r("goal_expressions"), c = [], d;
        for (d in b)
            b.hasOwnProperty(d) && $.each(b[d], function(b, f) {
                try {
                    if (a.match(RegExp(f, "i")))
                        return c.push(d), n
                    } catch (g) {}
                    return k
                });
        return c
    }
    function ra() {
        var a = z("optimizelyPendingLogEvents") || "[]", b = [];
        try {
            b = A(a)
        } catch (c) {}
        if (B(b))
            for (var a = 0, d = b.length; a < d; a++) {
                var e = b[a];
                if ("string" !== typeof e) {
                    b = [];
                    break
                } else 
                    try {
                        A(e);
                        b = [];
                        break
                    } catch (f) {}
            } else 
                b = [];
        return b
    }
    function ta(a, b) {
        if (ua&&-1 !== a.indexOf(va))
            try {
                var c = new XMLHttpRequest;
                if ("withCredentials"in c) {
                    c.onload = b;
                    c.open("GET", a, k);
                    c.withCredentials = k;
                    c.send();
                    return 
                }
                ua = n;
                x("Tracker", "Found that XHR with credentials is not supported in this browser.")
        } catch (d) {
            x("Tracker", "XHR not supported"), ua = n
        }
        var c = a, e = new Image;
        e.onload = b;
        c = c.replace("&" + va, "");
        e.src = c;
        wa.push(e)
    }
    function xa(a) {
        var b = (a = a === k || "true" === a) ? "true": "false";
        a ? (C("optimizelyOptOut", b, ya), C("optimizelyBuckets", b, ya), alert("You have successfully opted out of Optimizely for this domain.")) : (C("optimizelyOptOut", b, ya), alert("You are NOT opted out of Optimizely for this domain."))
    }
    function na() {
        ma();
        ha("engagement")
    }
    var ia = [], ja = n;
    function ka() {
        var a = ["a=" + za(), "d=" + Ba(), "y="+!!r("ip_anonymization"), "src=js"];
        Ca && a.push("override=true");
        t(Da(), function(b) {
            var c = D(b);
            a.push("x" + c + "=" + b)
        });
        t(Ea(), function(b, c) {
            a.push("s" + b + "=" + c)
        });
        var b = [];
        t(ia, function(a) {
            var c = [], d = [];
            a.name && (c.push("n=" + encodeURIComponent(a.name)), d = d.concat(qa(a.name)));
            if (a.type && "pageview" === a.type) {
                var d = d.concat(G.concat(H)), e = Fa;
                e && (e = D(e), d.push(e))
            }
            a.options.anonymous !== k && c.push("u=" + Ga());
            ua && c.push(va);
            c.push("t=" + + new Date);
            Ha && c.push("dtpc=" +
            Ha);
            var f=!!a.options&&!!a.options.a && a.options.h || {}, e = y(f), j = Ia(fa(), function(a) {
                return !f[a]
            }), d = [{
                u: e,
                P: d.concat([r("summary_revenue_goal_id") || l]),
                F: ["v=" + encodeURIComponent(a.options.a)]
            }, {
                u: j,
                P: d,
                F: []
            }
            ];
            t(d, function(a) {
                (a.u.length || Ja) && b.push(c.concat(a.F).concat(["f=" + a.u.join(","), "g=" + a.P.join(",")]).join("&"))
            });
            if ("custom" === a.type)
                try {
                    var g = a.name, m = Ga(), o = z("optimizelyCustomEvents") || "{}";
                    try {
                        o = A(o)
                    } catch (hf) {
                        o = {}
                    }
                    var J = o[m] || (o[m] = []), J = B(J) ? J: [];
                    - 1 !== $.inArray(g, J) && J.splice($.inArray(g,
                    J), 1);
                    J.push(g);
                    10 < J.length && J.shift();
                    o[m] = J;
                    var a = 0, g = l, J = 0, sa;
                    for (sa in o)
                        o.hasOwnProperty(sa) && (a++, o[sa].length > J && sa !== m && (g = sa, J = o[sa].length));
                        10 < a && g !== l && delete o[g];
                        C("optimizelyCustomEvents", Ka(o), ya)
            } catch (Pc) {}
        });
        var c = b.concat(ra());
        La(c);
        var d = a.join("&"), c = Ma ? b: c;
        Ma = k;
        for (var e = 0, f = c.length; e < f; e++) {
            var g = c[e], j = d + "&" + g;
            x("Tracker", "Making a log request.");
            var m = za(), o = r("log_host");
            m && (o = m.toString() + "." + o);
            m = document.location.protocol;
            "chrome-extension:" === m && (m = "http:");
            ta(m + "//" +
            o + "/event?" + j, function() {
                for (var a = g, b = ra(), c = 0, d = b.length; c < d; c++)
                    if (b[c] === a) {
                        b.splice(c, 1);
                        break
                    }
                La(b);
                x("Tracker", "Removed a pending log event from the pending events cookie.")
            })
        }
        ia = [];
        ja = k
    }
    function La(a) {
        for (var b = Ka(a); 1536 < b.length;)
            a = a.slice(0, - 1), b = Ka(a);
        C("optimizelyPendingLogEvents", b, 15)
    }
    var wa = [], Ma = n, va = "wxhr=true", ua = k;
    function Na(a, b) {
        var c = a.indexOf(b), d = l;
        - 1 !== c && (c += b.length + 1, d = parseFloat(a.substring(c)));
        return d
    }
    function Oa(a, b) {
        return t(a, function(a) {
            var d = a.qa || b;
            if (d&&-1 !== d.indexOf(a.substring) || a.prop)
                return a
        }) || {}
    };
    function Ba() {
        return r("admin_account_id")
    }
    function Pa(a) {
        return r("audiences", a)
    }
    function Qa(a) {
        a = r("audiences", a, "segment_id");
        return !a ? l : a
    }
    function Ra() {
        if (!Sa) {
            var a = r("click_goals") || [];
            Sa = [];
            for (var b = 0, c = a.length; b < c; b++)
                for (var d = a[b], e = d.selector.split(","), f = 0, g = e.length; f < g; f++) {
                    var j = e[f];
                    j && (j = {
                        event_name: d.event_name,
                        selector: j
                    }, "experiments"in d ? j.experiments = d.experiments : "url_conditions"in d && (j.url_conditions = d.url_conditions), "revenue"in d && (j.revenue = d.revenue), Sa.push(j))
                }
            }
        return Sa
    }
    function Ta(a, b) {
        return r("dimensions", a.toString(), b)
    }
    function Ua(a) {
        a = Ta(a, "condition_type");
        return !a ? l : a
    }
    function Va(a) {
        a = Ta(a, "name");
        return !a ? l : a
    }
    function fa() {
        var a = Ia(Wa(), Xa);
        fa = function() {
            return a
        };
        return a
    }
    function Ya(a) {
        var b = I(), c;
        for (c in b)
            if (Object.prototype.hasOwnProperty.call(b, c)) {
                var d = b[c];
                if (d && d.api_name === a)
                    return String(c)
            }
        return l
    }
    function Za() {
        return r("experiments") || {}
    }
    function Wa() {
        return y(r("experiments") || {})
    }
    function $a(a) {
        return "manual" === K(a, "activation_mode")
    }
    function ab(a) {
        return "conditional" === K(a, "activation_mode")
    }
    function bb(a) {
        return K(a, "name") || "Exp " + a
    }
    function L(a) {
        return 'experiment "' + bb(a) + '" (' + a + ")"
    }
    function cb(a) {
        return K(a, "section_ids") || []
    }
    function db(a) {
        return K(a, "variation_ids") || []
    }
    function za() {
        return r("project_id")
    }
    function I() {
        return r("segments") || {}
    }
    function eb(a, b) {
        for (var c = cb(a), d = 0; d < c.length; d++) {
            var e = fb(c[d]);
            if (gb(e, b))
                return c[d]
        }
        return ""
    }
    function hb(a) {
        var b = {}, c = r("public_suffixes") || {};
        t(c, function(a, c) {
            t(c, function(c) {
                b[c] = a
            })
        });
        hb = function(a) {
            return b[a] || ""
        };
        return hb.call(l, a)
    }
    function fb(a) {
        return r("sections", a, "variation_ids") || []
    }
    function ib(a) {
        var b = [];
        t(a.split("_"), function(a) {
            (a = r("variations", a, "code")) && b.push(a)
        });
        return b.join("\n")
    }
    function D(a) {
        var b = {};
        t(Wa(), function(a) {
            t(cb(a), function(d) {
                t(fb(d), function(d) {
                    b[d] = a
                })
            });
            t(db(a), function(d) {
                b[d] = a
            })
        });
        D = function(a) {
            return b[a.split("_")[0]] || ""
        };
        return D.call(l, a)
    }
    function jb(a) {
        var b = D(a), c = cb(b);
        if (0 === c.length) {
            c = db(b);
            for (b = 0; b < c.length; b++)
                if (c[b] === a)
                    return b
        } else {
            for (var a = a.split("_"), b = [], d = 0; d < c.length; d++)
                for (var e = fb(c[d]), f = 0; f < e.length; f++)
                    e[f] === a[d] && b.push(f);
            if (b !== [])
                return b
        }
        return - 1
    }
    function kb(a) {
        var b;
        return lb(a).join(b || ", ")
    }
    function lb(a) {
        var b = [];
        t(a.split("_"), function(a) {
            b.push(r("variations", a, "name") || "Var " + a)
        });
        return b
    }
    function Xa(a) {
        return !!K(a, "enabled")
    }
    function K(a, b) {
        return r("experiments", a, b)
    }
    function mb(a) {
        return K(a, "google_analytics")
    }
    function nb(a, b) {
        var c = K(a, "universal_analytics");
        return M(c) ? c[b] : l
    }
    function ob(a, b) {
        var c = K(a, "at_internet");
        return M(c) ? c[b] : l
    }
    function r(a) {
        var b = DATA;
        if (t(arguments, function(a) {
            a = b[a];
            if (M(a))
                b = a;
            else 
                return l
        }) !== l)
            return b
    }
    function N(a, b) {
        return r("segments", a, b)
    }
    function pb() {
        var a = r("rum_sampling_rate");
        return M(a) ? a : 0.001
    }
    var Sa = l;
    function qb(a) {
        this.D = a
    }
    qb.prototype.get = function(a) {
        try {
            return A(this.D.getItem(rb))[a]
        } catch (b) {}
    };
    qb.prototype.set = function(a, b) {
        try {
            var c = A(this.D.getItem(rb)) || {};
            c[a] = b;
            this.D.setItem(rb, Ka(c))
        } catch (d) {}
    };
    var rb = "optimizely_data", sb = new qb(window.localStorage), tb = new qb(window.sessionStorage);
    var ub = window.OPTIMIZELY_TEST_MODULE, vb = "com local net org xxx edu es gov biz info fr nl ca de kr it me ly tv mx cn jp il in iq test".split(" "), wb = /\/\*\s*_optimizely_variation_url( +include="([^"]*)")?( +exclude="([^"]*)")?( +match_type="([^"]*)")?( +include_match_types="([^"]*)")?( +exclude_match_types="([^"]*)")?( +id="([^"]*)")?\s*\*\//;
    var xb, yb = 0, Ja = n, O = k, zb = n, Ha = n, Ab = "", Bb = n, Cb = n, P = n, Db = n, Ca = n, Eb = n, u = k, ya = 31536E4;
    function Fb() {
        var a;
        if (!(a = Gb)) {
            a = window.navigator;
            var b = a.userAgent, c = Oa([{
                id: "opera",
                substring: "OPR",
                c: "OPR"
            }, {
                id: "gc",
                substring: "Chrome",
                c: "Chrome"
            }, {
                id: "safari",
                qa: a.vendor,
                substring: "Apple",
                c: "Version"
            }, {
                id: "ff",
                substring: "Firefox",
                c: "Firefox"
            }, {
                id: "opera",
                substring: "Opera",
                c: "Version"
            }, {
                id: "opera",
                prop: window.opera,
                c: "Opera"
            }, {
                id: "ie",
                substring: "MSIE",
                c: "MSIE"
            }, {
                id: "ie",
                substring: "Trident",
                c: "rv"
            }
            ], b), d = Oa([{
                id: "android",
                substring: "Android"
            }, {
                id: "blackberry",
                substring: "BlackBerry"
            }, {
                id: "ipad",
                substring: "iPad"
            }, {
                id: "iphone",
                substring: "iPhone"
            }, {
                id: "ipod",
                substring: "iPod"
            }, {
                id: "windows phone",
                substring: "Windows Phone"
            }
            ], b), e = l, f = c.c;
            f && (e = Na(b, f) || Na(a.appVersion, f));
            a = {
                U: c.id || "unknown",
                V: e || "unknown",
                oa: d.id || "unknown"
            }
        }
        return Gb = a
    }
    function Hb() {
        return Fb().U
    }
    function Ib() {
        return Fb().V
    }
    function Jb(a) {
        if (!a)
            return "";
        try {
            return a.match(/:\/\/(?:www[0-9]?\.)?(.[^/:]+)/)[1]
        } catch (b) {
            return ""
        }
    }
    function Ga() {
        var a = z("optimizelyEndUserId");
        a || (a = "oeu" + + new Date + "r" + Math.random(), C("optimizelyEndUserId", a, ya));
        return a
    }
    function Kb() {
        var a = "";
        try {
            a = (Lb || l).ip
        } catch (b) {}
        return Q(a)
    }
    function Mb() {
        var a = Lb || l, a = a && a.location || {};
        return {
            city: Q(a.city),
            continent: Q(a.continent),
            country: Q(a.country),
            region: Q(a.region)
        }
    }
    function Q(a) {
        if (!a)
            return "";
        a = a.toUpperCase();
        return "N/A" == a ? "" : a
    }
    function Nb() {
        return Fb().oa
    }
    function Ob() {
        return Pb ? "returning" : "new"
    }
    function Qb() {
        var a = navigator.appVersion || "", b = "";
        - 1 !== a.indexOf("Win") && (b = "Windows");
        - 1 !== a.indexOf("Mac") && (b = "Mac");
        - 1 !== a.indexOf("Linux") && (b = "Linux");
        return b
    }
    function Rb(a) {
        R("User", "Setting current URL to %s", a);
        Sb = a
    }
    var Sb = i, Gb = i, Pb = i;
    function Tb() {
        try {
            return window.performance.now() - (Ub || 0)
        } catch (a) {
            return (new Date).getTime() - (Ub || 0)
        }
    }
    var Ub = Tb();
    function Vb(a) {
        var b = Wb;
        b.t[a] || (b.t[a] = Tb())
    }
    var Xb;
    try {
        Xb=!document.getElementsByTagName("body")[0]
    } catch (Yb) {
        Xb = l
    }
    var Zb = l;
    try {
        window.requestAnimationFrame(function() {
            Zb = Tb()
        })
    } catch ($b) {}
    var ac = /\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;
    function bc() {
        try {
            var a = Ia(window.performance.getEntries(), function(a) {
                return !!ac.test(a.name)
            })[0];
            if (!a)
                return l;
            var a = cc({}, a), b;
            for (b in a) {
                var c = a[b];
                (0 === c || "string" === typeof c) && delete a[b]
            }
            return a
        } catch (d) {
            return l
        }
    }
    var Wb = new function() {
        this.t = {};
        this.ka = Math.random() < pb()
    };
    function dc(a) {
        0 === $("body").length ? setTimeout(function() {
            dc(a)
        }, 20) : $("body").append('<div id="optimizely-loading" style="position:absolute;top:0;right:0;left:0;bottom:0;background-color:white;opacity:0.9;z-index: 3271000;"><h2 style="color:#9a9a9a;top:40%;position:absolute;font-size:2.25em;text-align:center;width:100%;font-family:\'Lucida Grande\',sans-serif;">' + a + "</h2></div>")
    };
    function ec(a) {
        a = a || {};
        if (u) {
            a && a.sVariable && (fc = a.sVariable);
            var b = fc || ("undefined" !== typeof window.s ? window.s : l);
            if (b)
                if (gc) {
                    if ((a = hc) && b)
                        try {
                            R("Integrator", "Fixing SiteCatalyst referrer to %s", a), b.referrer = String(a)
                        } catch (c) {
                            R("Integrator", "Error setting SiteCatalyst referrer: %s", c)
                        }
                        R("Integrator", "Tracking with SiteCatalyst");
                        t(ic(), function(a) {
                            var c = D(a), a = T(c, a, 100, 100, 25, k), f = a.key + ": " + a.value, a = [], g = K(c, "site_catalyst_evar") || l, c = K(c, "site_catalyst_prop") || l;
                            g !== l && a.push("eVar" + g);
                            c !==
                            l && a.push("prop" + c);
                            t(a, function(a) {
                                R("Integrator", "Setting SiteCatalyst %s='%s'", a, f);
                                b[a] = f
                            })
                        })
                    } else 
                        jc = k;
                else 
                    x("Integrator", "Error with SiteCatalyst integration: 's' variable not defined")
        }
    }
    function kc(a) {
        a = ea(a) ? Number(a) : - 1;
        if ( - 1 !== [1, 2, 3].indexOf(a))
            lc = a;
        else 
            return lc
        }
    function mc() {
        if (u) {
            var a = hc;
            if (a)
                try {
                    R("Integrator", "Fixing _gaq._setReferrerOverride with %s", a), _gaq.push(["_setReferrerOverride", a])
                } catch (b) {
                R("Integrator", "Error setting Google Analytics referrer: %s", b)
            }
            t(ic(), function(a) {
                var b = D(a);
                if (K(b, "chartbeat")) {
                    var c = nc;
                    nc = "";
                    var g = T(b, a, 10, 10, 5, n);
                    nc = c;
                    c = jb(a);
                    oc = g.key + ": " + String(c);
                    try {
                        R("Integrator", "Calling _cbq.push"), _cbq.push(["_optlyx", oc])
                    } catch (j) {
                        x("Integrator", "Error sending Chartbeat data for " + L(b))
                    }
                }
                if (K(b, "crazyegg")) {
                    g = T(b, a, 100,
                    100, 15, n);
                    try {
                        R("Integrator", "Defining CE_SNAPSHOT_NAME"), window.CE_SNAPSHOT_NAME = g.key + ": " + g.value
                    } catch (m) {
                        x("Integrator", "Error sending CrazyEgg data for " + L(b))
                    }
                }
                if (mb(b)) {
                    g = mb(b);
                    c = 0;
                    M(g) && (c = g.slot || c);
                    var g = c, c = mb(b), o = "";
                    M(c) && (o = c.tracker || o);
                    c = o;
                    o = T(b, a, 28, 24, 5, k);
                    try {
                        var v = "";
                        "" !== c && (v = c + ".");
                        R("Integrator", "Calling _gaq._setCustomVar for slot %d and scope %d", g, lc);
                        _gaq.push([v + "_setCustomVar", g, o.key, o.value, lc])
                    } catch (w) {
                        x("Integrator", "Error sending Google Analytics data for " + L(b))
                    }
                }
                if (r("kissmetrics")) {
                    g =
                    T(b, a, 100, 100, 15, k);
                    c = {};
                    c[g.key] = g.value;
                    try {
                        R("Integrator", "Calling _kmq.set"), _kmq.push(["set", c])
                    } catch (E) {
                        x("Integrator", "Error sending KISSmetrics data for " + L(b))
                    }
                }
                if (K(b, "mixpanel")) {
                    g = T(b, a, 100, 100, 15, n);
                    c = {};
                    c[g.key] = g.value;
                    try {
                        R("Integrator", "Calling mixpanel.push"), mixpanel.push(["register", c])
                    } catch (ca) {
                        x("Integrator", "Error sending Mixpanel data for " + L(b))
                    }
                }
                if (ob(b, "acct_no")) {
                    g = ob(b, "acct_no");
                    c = ob(b, "url");
                    o = T(b, a, 28, 24, 5, k);
                    a = c + "/hit.xiti?s=" + g + "&abmvc=" + (b + "[" + encodeURIComponent(o.key) +
                    "]-0-" + a + "[" + encodeURIComponent(o.value) + "]") + "&type=mvt";
                    try {
                        R("Integrator", "Sending AT Internet log call for account %s", g), ta(a, l)
                    } catch (Aa) {
                        x("Integrator", "Error sending AT Internet data for " + L(b))
                    }
                }
            });
            a = z("optimizelyChartbeat") || "";
            try {
                if (a && oc != a && (R("Integrator", "Calling _cbq.push for referral"), _cbq.push(["_optlyr", a])), oc != a)
                    R("Integrator", "Set new Chartbeat referral cookie."), C("optimizelyChartbeat", oc)
                } catch (c) {
                x("Integrator", "Error sending Chartbeat referral for " + a)
            }
            gc = k;
            pc && (qc(), pc =
            n);
            jc && (ec(), jc = n)
        }
    }
    function rc() {
        if (window.ClickTaleContext) {
            try {
                window.ClickTaleContext.getAggregationContextAsync("1", function(a) {
                    a.Location && window.optimizely.push(["overrideUrl", a.Location]);
                    for (var b in a.PageEvents) {
                        var e = a.PageEvents[b][2].match(/x[0-9]+=[0-9_]+/g);
                        R("Integrator", "Playback ClickTale Integration - %s", e);
                        for (b = 0; b < e.length; b++) {
                            R("Integrator", "Playback ClickTale Integration - %s", e[b]);
                            for (var f = e[b].split("=")[0].substr(1), g = e[b].split("=")[1].split("_"), j = 0; j < g.length; j++)
                                sc(g[j]) ? R("Integrator",
                                "Skip activation for redirect.") : window.optimizely.push(["activate", f, g[j], {
                                    force: k
                                }
                                ])
                            }
                    }
                })
            } catch (a) {
                R("Integrator", "Playback ClickTale Aggregation Integration failed.")
            }
            try {
                window.ClickTaleContext.getRecordingContextAsync("1.1", function(a) {
                    if (a.inSingleRecordingScope) {
                        a.location && window.optimizely.push(["overrideUrl", a.location]);
                        R("Integrator", "Playback ClickTale getRecordingContextAsync callback");
                        for (var b in a.fields)
                            R("Integrator", "Playback ClickTale Integration - %s=%s", b, a.fields[b]), sc(a.fields[b]) ?
                            R("Integrator", "Skip activation for redirect.") : window.optimizely.push(["activate", b, a.fields[b], {
                                force: k
                            }
                            ])
                    }
                })
            } catch (b) {
                R("Integrator", "Playback ClickTale Recording Integration failed.")
            }
        } else 
            R("Integrator", "ClickTaleContext not defined.")
    }
    function tc() {
        R("Integrator", "Tracking with ClickTale.");
        "function" == typeof window.ClickTaleField ? t(ic(), function(a) {
            var b = D(a), c = T(b, a, 100, 100, 15, n), c = c.key + ": " + c.value + " (x" + b + "=" + a + ")";
            R("Integrator", "Setting ClickTale - %s", c);
            window.ClickTaleField(b, a);
            window.ClickTaleEvent(c)
        }) : R("Integrator", "ClickTaleField() not defined.")
    }
    function uc(a) {
        nc = a
    }
    function vc(a) {
        fc = a
    }
    function wc(a, b) {
        return a.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g, "_").substring(0, b)
    }
    function ic() {
        var a = G.concat(H), b = [];
        t(Da(), function(c) {
            var e = D(c), f = n;
            if (Xa(e)) {
                var g = kb(c);
                gb(a, e) && (R("Integrator", '"%s" relevant because experiment active', g), f = k);
                f && b.push(c)
            }
        });
        var c = Fa;
        c && b.push(c);
        return b
    }
    function sc(a) {
        return (a = xc(ib(a))) ? a[1] : l
    }
    function qc() {
        if (u)
            if (gc) {
                var a = window[window.GoogleAnalyticsObject || "ga"];
                if (a) {
                    var b = hc;
                    if (b)
                        try {
                            R("Integrator", "Fixing Universal Analytics set referrer with %s", b), (0, window[window.GoogleAnalyticsObject || "ga"])("set", "referrer", b)
                        } catch (c) {
                            R("Integrator", "Error setting Universal Analytics referrer: %s", c)
                        }
                        R("Integrator", "Tracking with Universal Analytics");
                        t(ic(), function(b) {
                            var c = D(b);
                            if (nb(c, "slot")) {
                                var f = nb(c, "slot"), g = nb(c, "tracker"), j = T(c, b, 100, 100, 25, k), b = j.key + " (" + c + "): " + j.value;
                                150 <
                                b.length && (b = j.key.substring(0, 80) + " (" + c + "): " + j.value, b = b.substring(0, 149));
                                c = g ? g + "." : "";
                                R("Integrator", "Calling ua set dimension - ga(%sset, dimension%d, %s)", c, f, b);
                                a(c + "set", "dimension" + f, b)
                            }
                        })
                    } else 
                        x("Integrator", "Error with Universal Analytics integration: 'GoogleAnalyticsObject' not defined")
                } else 
                    pc = k
    }
    function T(a, b, c, d, e, f) {
        a = nc + bb(a);
        b = lb(b);
        1 < b.length ? (b = $.map(b, function(a) {
            return a.substr(0, e - 1)
        }), b = b.join("~")) : b = b[0];
        f ? (a = wc(a, c), b = wc(b.replace("#", ""), d)) : (a = a.substring(0, c), b = b.substring(0, d));
        return {
            key: a,
            value: b
        }
    }
    var pc = n, jc = n, oc = "", lc = 2, gc = n, nc = "Optimizely ", fc = l;
    var yc, zc;
    function Ac(a, b, c) {
        if (!O)
            return n;
        var d = "number" === typeof b || "string" === typeof b ? String(b): l, e = b === k || b && b.force === k || c && c.force === k, c = ("object" === typeof b ? b : c) || {}, f = c.skip === k, b = c.skipPageview === k, g = c.enabledStatus;
        if (d)
            try {
                Bc(a, d, k)
        } catch (j) {
            x("API", "Error while activating experiment " + a + " for variation " + d + " -- proceeding without bucketing user.")
        }
        var m = l, o = [], v = [];
        ea(a) ? o.push(a) : t(Wa(), function(a) {
            $a(a) && o.push(a)
        });
        x("API", "Testing experiments to activate");
        t(o, function(a) {
            if (!e&&!Cc(a))
                Dc.push(a);
            else if (e || Ec(a, {
                manualMode: k,
                objectType: "experiment",
                enabledStatus: g,
                visitor: U
            }))(m = Fc(a, f)) && v.push(a)
            });
        Gc(v, o);
        Hc();
        mc();
        O&&!b && ha(document.location.href, "pageview")
    }
    function Ic(a) {
        if (!O)
            return n;
        var b = p(sb.set, sb, "asyncInfo"), c=!!a;
        c && (Vb("geoArrive"), b(a));
        if (!Jc)
            if (Jc = k, Lb = a || Lb) {
                x("API", "Testing geodelayed segments");
                t(Kc, function(a) {
                    Lc(a)
                });
                var d = [];
                x("API", "Testing geodelayed experiments");
                t(Dc, function(a) {
                    Ec(a, {
                        manualMode: k,
                        objectType: "experiment",
                        visitor: U
                    }) && Fc(a) && d.push(a)
                });
                Gc(d, Dc);
                Hc();
                mc();
                Eb || ha(document.location.href, "pageview");
                Mc();
                Vb(c ? "geoSuccess" : "geoCache")
            } else 
                Vb("geoFailed");
        return k
    }
    function Nc(a, b) {
        var c = Ya(a) || a, d = I()[c];
        d ? d.audience_id ? U.l(d.audience_id) : d.dimension_id ? U.q(d.dimension_id, b || k, n) : Oc(c, b) : x("API", "Unable to find segment: " + c)
    }
    function Bc(a, b, c) {
        Ca = k;
        O && c !== k && ha(document.location.href);
        var a = String(a), b = String(b), d = l, e = b.split("_"), f = cb(a), b = f && 0 !== f.length;
        if ("-1" === e[0]) {
            c = a;
            Qc[c] && delete Qc[c];
            Rc[c] && delete Rc[c];
            for (e = 0; e < V.length; e++)
                V[e].m === c && V.splice(e, 1);
            Sc()
        } else if (b && e.length == f.length)
            d = [], t(e, function(a, b) {
                256 >= Number(a) ? d.push(fb(f[b])[a]) : d.push(a)
            }), d = d.join("_");
        else if (!b && 1 == e.length && 256 >= Number(e[0])) {
            var c = String, e = e[0], g = db(a), j = l;
            try {
                j = g[e]
            } catch (m) {}
            d = c(j)
        } else 
            1 == e.length ? d = e[0] : x("API", "Error: could not bucket user. Unknown arguments.");
        d && (b && eb(a, d) ? (b = d, c = eb(a, b), Tc[a] = Tc[a] || {}, Tc[a][c] = b, x("Distributor", "Preferring variation partial " + b + " of section " + c + " of experiment " + a), a = Uc(a), 1 === a.length && Vc(a[0], "api.bucketUser", k)) : Vc(d, "api.bucketUser", k));
        Hc()
    }
    function Wc(a) {
        a && "tracking" === a || (x("API", "Optimizely disabled"), O = n);
        u = n
    }
    function Xc() {
        x("API", "Finalizing API.");
        Mc();
        yc = k
    }
    function Yc(a, b) {
        var c = [], d = b;
        B(b) && (d = b[0], c = Zc(b, 1));
        var e = a[d];
        e ? (x("API", 'Called function "' + d + '"'), e.apply(l, c)) : x("API", 'Error for unknown function "' + d + '"');
        $c()
    }
    function ad(a, b) {
        yc ? x("API", "Error: can't add custom tags after Optimizely loads") : (zc = zc || {}, 2 == arguments.length ? zc[a] = b : 1 == arguments.length && $.extend(k, zc, a))
    }
    function bd(a, b) {
        var c = Ya(a) || a, b = M(b) ? b: k, d = I()[c];
        d ? d.audience_id ? U.C(d.audience_id) : d.dimension_id ? U.q(d.dimension_id, l) : cd(c, b) : x("API", "Unable find segment for: " + c)
    }
    function dd() {
        var a = y(I());
        t(a, function(a) {
            bd(a, n)
        });
        ed()
    }
    function Mc() {
        fd = {};
        gd = {};
        hd = {};
        t(Da(), function(a) {
            var b = D(a);
            fd[b] = a.split("_");
            gd[b] = jb(a);
            hd[b] = kb(a)
        });
        W = {};
        var a = r("audiences");
        a && (W.audiences = a);
        W.experiments = {};
        W.sections = {};
        W.segments = {};
        W.state = {};
        W.variations = {};
        W.visitor = {};
        W.customTags = zc;
        for (var b = Wa(), a = 0; a < b.length; a++) {
            var c = b[a], d = {};
            d.code = K(c, "code") || "";
            d.name = bb(c);
            d.conditional = ab(c);
            d.manual = $a(c);
            d.section_ids = cb(c);
            d.variation_ids = db(c);
            W.experiments[c] = d
        }
        b = y(I());
        for (a = 0; a < b.length; a++)
            c = b[a], W.segments[c] = {
                name: N(c, "name") ||
                "Seg " + c
            };
        b = y(r("sections") || {});
        for (a = 0; a < b.length; a++)
            c = b[a], d = {}, d.name = r("sections", c, "name") || "Sec " + c, d.variation_ids = fb(c), W.sections[c] = d;
        b = y(r("variations") || {});
        for (a = 0; a < b.length; a++)
            c = b[a], d = {}, d.name = kb(c), d.code = ib(c), W.variations[c] = d;
        b = {};
        a = Hb();
        b.browser = {
            ff: "Firefox",
            ie: "Internet Explorer",
            safari: "Safari",
            gc: "Google Chrome",
            opera: "Opera"
        }
        [a] || "";
        b.browserVersion = Ib();
        b.location = Mb();
        b.ip = Kb();
        b.params = {};
        c = id();
        c.reverse();
        a = 0;
        for (d = c.length; a < d; a++)
            try {
                b.params[jd(c[a][0])] = jd(c[a][1])
        } catch (e) {
            x("API",
            "Failed to decode parameter " + c[a][0] + "=" + c[a][1])
        }
        b.referrer = String(document.referrer);
        b.segments = Ea();
        b.mobile = "unknown" !== Nb();
        b.os = Qb();
        b.dimensions = U.e;
        b.audiences = U.d;
        W.visitor = b;
        a = {};
        a.activeExperiments = G || [];
        a.variationIdsMap = fd;
        a.variationMap = gd;
        a.variationNamesMap = hd;
        a.enabled = O;
        W.state = a;
        cc(window.optimizely, {
            activeExperiments: G,
            allExperiments: Za(),
            all_experiments: Za(),
            data: W,
            variationIdsMap: fd,
            variationMap: gd,
            variationNamesMap: hd,
            variation_map: gd
        })
    }
    function kd(a) {
        if (!ea(a))
            return n;
        yb = Number(a)
    }
    function ld() {
        Ha = k
    }
    function md(a) {
        var b = "";
        "number" !== typeof a ? (b = "must be a number.", a = 31536E4) : a = Math.floor(86400 * a);
        7776E3 > a && (b = "less then minimum.", a = 7776E3);
        x("API", (b && "Days argument " + b) + " Cookie expiration set to " + a + " seconds.");
        ya = a;
        nd()
    }
    function od() {
        Eb = k
    }
    function pd() {
        z("optimizelyReportableFix") ? x("API", "skipping because cookie is set") : (t(r("audiences"), function(a) {
            Qa(a) && (x("API", "Removing from reportable audience: " + a), U.C(a))
        }), C("optimizelyReportableFix", "1", 7776E3))
    }
    var W = {}, qd = {}, Lb = l, Jc = n, Dc = [], Kc = [], fd = {}, gd = {}, hd = {}, U = l;
    var rd = Math.pow(2, 32);
    function Fc(a, b) {
        var b = b === k, c, d = l;
        t(V, function(b) {
            a == b.m && (d = b.id)
        });
        if ((c = d) && 0 < c.length)
            return x("Distributor", "Not distributing experiment " + a + " (already in plan)"), k;
        if (b || a in Qc)
            return x("Distributor", "Not distributing experiment " + a + " (is ignored)"), n;
        c = K(a, "enabled_variation_ids") || [];
        if (0 === c.length)
            return x("Distributor", "Permanently ignoring experiment " + a + " (no enabled variations)"), sd(a), n;
        var e = K(a, "ignore") || 0;
        if (e > Math.floor(1E4 * td(a, 0)))
            return x("Distributor", "Permanently ignoring experiment " +
            a + "(" + e / 100 + "% likelihood)"), sd(a), n;
        e = c;
        Tc[a] !== i && (x("Distributor", "Taking into account bucketUser variations for experiment " + a), e = Uc(a));
        var f;
        f = e;
        var g = [], j = K(a, "variation_weights") || {};
        t(f, function(a) {
            g.push(j[a])
        });
        f = ud(a, g);
        e = e[f];
        x("Distributor", "Picked variation " + e + " [index " + f + " of " + c.length + "]");
        Vc(e, "distributor");
        return k
    }
    function vd(a, b) {
        b = b || {};
        x("Distributor", "Testing conditionally activated experiment for conditions: " + a);
        qd[a] || (wd(a, b), yc && Mc())
    }
    function wd(a, b) {
        function c() {
            Ac(a, b);
            m.isActive = gb(G.concat(H), a);
            x("Distributor", "Activating conditionally activated experiment " + a)
        }
        var d = K(a, "conditional_code"), e = k, f;
        try {
            var g = eval("(function() {return " + ("(" + d + ")") + ";})()");
            "function" === typeof g && (e = n, f = g)
        } catch (j) {}
        var m = {
            isActive: n,
            experimentId: a
        };
        if (e) {
            if (e = {
                objectType: "experiment",
                enabledStatus: b.enabledStatus
            }, b.force ||!Cc(a) || Ec(a, e)) {
                var o = function() {
                    Cc(a) && (xd(0, {
                        value: d
                    }) || g) ? c() : setTimeout(o, 50)
                };
                o();
                x("Distributor", "Set up conditional polling for " +
                a);
                qd[a] = k
            }
        } else 
            try {
                f(c, m), x("Distributor", "Set up conditional callback for " + a), qd[a] = k
        } catch (v) {
            x("Distributor", "Error running conditional callback function for " + a)
        }
    }
    function td(a, b) {
        function c(a, b) {
            var c = b & 65535;
            return ((b - c) * a | 0) + (c * a | 0) | 0
        }
        for (var d = Ga() + a, e = d.length, f = b || 0, g = e&-4, j, m = 0; m < g; m += 4)
            j = d.charCodeAt(m) & 255 | (d.charCodeAt(m + 1) & 255)<<8 | (d.charCodeAt(m + 2) & 255)<<16 | (d.charCodeAt(m + 3) & 255)<<24, j = c(j, 3432918353), j = (j & 131071)<<15 | j>>>17, j = c(j, 461845907), f^=j, f = (f & 524287)<<13 | f>>>19, f = 5 * f + 3864292196 | 0;
        j = 0;
        switch (e%4) {
        case 3:
            j = (d.charCodeAt(g + 2) & 255)<<16;
        case 2:
            j|=(d.charCodeAt(g + 1) & 255)<<8;
        case 1:
            j|=d.charCodeAt(g) & 255, j = c(j, 3432918353), f^=c((j & 131071)<<15 |
            j>>>17, 461845907)
        }
        f^=e;
        f = c(f^f>>>16, 2246822507);
        f = c(f^f>>>13, 3266489909);
        return ((f^f>>>16)>>>0) / rd
    }
    function ud(a, b) {
        var c = b.length;
        if (0 === c)
            return l;
        if (1 === c)
            return 0;
        for (var d = 0, e = 0; e < c; e++)
            d += b[e];
        d*=td(a, 1);
        for (e = 0; e < c; e++) {
            if (d < b[e])
                return e;
            d -= b[e]
        }
        return Math.floor(td(a, 2) * c)
    }
    function Uc(a) {
        var b = [];
        t(K(a, "enabled_variation_ids") || [], function(c) {
            var d = k, e;
            for (e in Tc[a]) 
                - 1 === c.indexOf(Tc[a][e]) && (d = n);
            d && b.push(c)
        });
        return b
    }
    var Tc = {};
    function id() {
        var a = window.location.search || "";
        0 === a.indexOf("?") && (a = a.substring(1));
        for (var a = a.split("&"), b = [], c = 0; c < a.length; c++) {
            var d = "", e = "", f = a[c].split("=");
            0 < f.length && (d = f[0]);
            1 < f.length && (e = f[1]);
            b.push([d, e])
        }
        return b
    }
    function yd() {
        for (var a = window.location.search, b, c = /optimizely_([^=]+)=([^&]*)/g, d = {}; b = c.exec(a);)
            d[b[1]] = b[2];
        return d
    }
    var zd = /x(\d+)/;
    function Ad(a) {
        return a&&-1 !== String(a).indexOf("[native code]")
    };
    function xc(a) {
        return a.match(/_optimizely_redirect(?:_no_cookie)?=(\S+)/)
    }
    function Bd(a) {
        return - 1 !== a.indexOf("_optimizely_redirect_no_cookie")
    }
    function Cd(a) {
        var a = a || "", b = z("optimizelyRedirect");
        return Bd(a) ||!b || b && "true" === b.split("|")[1] ? k : n
    }
    var hc = l, Fa = "";
    var A, Ka;
    (function() {
        function a(a) {
            d.lastIndex = 0;
            return d.test(a) ? '"' + a.replace(d, function(a) {
                var b = g[a];
                return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
            }) + '"' : '"' + a + '"'
        }
        function b(c, d) {
            var g, w, E, ca, Aa = e, S, F = d[c];
            "function" === typeof j && (F = j.call(d, c, F));
            switch (typeof F) {
            case "string":
                return a(F);
            case "number":
                return isFinite(F) ? String(F) : "null";
            case "boolean":
            case "null":
                return String(F);
            case "object":
                if (!F)
                    return "null";
                e += f;
                S = [];
                if ("[object Array]" === Object.prototype.toString.apply(F)) {
                    ca = F.length;
                    for (g = 0; g < ca; g += 1)
                        S[g] = b(g, F) || "null";
                    E = 0 === S.length ? "[]" : e ? "[\n" + e + S.join(",\n" + e) + "\n" + Aa + "]" : "[" + S.join(",") + "]";
                    e = Aa;
                    return E
                }
                if (j && "object" === typeof j) {
                    ca = j.length;
                    for (g = 0; g < ca; g += 1)
                        "string" === typeof j[g] && (w = j[g], (E = b(w, F)) && S.push(a(w) + (e ? ": " : ":") + E))
                    } else 
                        for (w in F)
                            Object.prototype.hasOwnProperty.call(F, w) && (E = b(w, F)) && S.push(a(w) + (e ? ": " : ":") + E);
                E = 0 === S.length ? "{}" : e ? "{\n" + e + S.join(",\n" + e) + "\n" + Aa + "}" : "{" + S.join(",") + "}";
                e = Aa;
                return E
            }
        }
        var c = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        d = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, e, f, g = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, j;
        Ka = function(a, c, d) {
            var g;
            f = e = "";
            if ("number" === typeof d)
                for (g = 0; g < d; g += 1)
                    f += " ";
            else 
                "string" === typeof d && (f = d);
            (j = c) && ("function" !== typeof c && ("object" !== typeof c || "number" !== typeof c.length)) && h(Error("JSON.stringify"));
            return b("", {
                "": a
            })
        };
        A = function(a, b) {
            function d(a, c) {
                var e, f, g = a[c];
                if (g &&
                "object" === typeof g)
                    for (e in g)
                        Object.prototype.hasOwnProperty.call(g, e) && (f = d(g, e), f !== i ? g[e] = f : delete g[e]);
                return b.call(a, c, g)
            }
            var e, a = String(a);
            c.lastIndex = 0;
            c.test(a) && (a = a.replace(c, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
            }));
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                return e = eval("(" + a + ")"), "function" === typeof b ?
                d({
                    "": e
                }, "") : e;
            h(new SyntaxError("JSON.parse"))
        }
    })();
    function Dd(a, b) {
        var c;
        c = $.trim(b);
        var d = "";
        if (window.optimizely && window.optimizely.data)
            if (d = c.match(Ed))
                d = window.optimizely.data.visitor.params[d[1]], d === i && (d = "");
            else {
                for (var d = c.split("."), e = window.optimizely, f = 0, g = d.length; f < g; f++)
                    if (e = e[d[f]], e === i || e === l) {
                        e = "";
                        break
                    }
                    d = "" + e
            }
        x("Template", c + " evaluated to: '" + d + "'");
        return d
    }
    var Fd = /\{\{ *optimizely\.([^\n\r{}<>]*)\}\}/g, Ed = /^data\.visitor\.params\.(.*)$/;
    function Gd(a) {
        var b = a || Hd;
        x("Segmenter", "Loading segments cookie.");
        if (a = z("optimizelySegments")) {
            try {
                a = A(a)
            } catch (c) {
                a = {}
            }
            t(a, function(a, c) {
                var d = I()[a];
                x("Segmenter", "Segments cookie contains segment id: " + a);
                d && d.audience_id ? b.l(d.audience_id) : d && d.dimension_id ? b.q(d.dimension_id, c, n) : X[a] = c
            })
        }
        x("Segmenter", "Evaluating all segments.");
        for (var a = y(I()), d = 0; d < a.length; d++) {
            var e = a[d];
            N(e, "is_api_only") ? x("Segmenter", "Not doing anything since segment " + e + " is api only.") : (x("Segmenter", "Testing whether to add to segment " +
            e), Cc(e) ? Lc(e) : Kc.push(e))
        }
        Id.push(nd);
        ed();
        x("Integrator", "Loading third-party segments.");
        if (window.bk_results) {
            a = window.bk_results;
            x("Integrator", "Loading BlueKai segments.");
            try {
                t(a.campaigns, function(a) {
                    a = a.seg_id;
                    I()[a] ? Oc(a, k) : Pa(a) && b.l(a)
                })
            } catch (f) {
                x("Integrator", "Error loading BlueKai segments.")
            }
        }
    }
    function nd() {
        var a = {};
        t(X, function(b, c) {
            c && (a[b] = c)
        });
        C("optimizelySegments", Ka(a), ya)
    }
    function Oc(a, b) {
        a&&!isNaN(parseInt(a, 10)) ? (!b && "" !== b && (b = k), X[a] = b, ed()) : x("Segmenter", "Unable to find segment for ID: " + a)
    }
    function ed() {
        t(Id, function(a) {
            a()
        })
    }
    function Lc(a) {
        x("Segmenter", "Evaluating Segment " + a);
        if (Ec(a, {
            objectType: "segment"
        })) {
            var b;
            a:
            {
                var c = b = l;
                switch (N(a, "segment_value_type") || "") {
                case "browser":
                    b = Y.H();
                    c = "unknown";
                    break;
                case "campaign":
                    b = Y.ba();
                    c = "none";
                    break;
                case "country":
                    b = Y.o().country;
                    c = "unknown";
                    break;
                case "language":
                    b = Y.v();
                    c = "none";
                    break;
                case "mobile":
                    b = "unknown" !== Y.M();
                    break;
                case "os":
                    b = Y.fa();
                    c = "unknown";
                    break;
                case "referrer":
                    b = Y.ga();
                    c = "none";
                    break;
                case "source_type":
                    b = Y.ha();
                    c = "direct";
                    break;
                default:
                    b = "true";
                    break a
                }
                if (b ===
                l) {
                    if (X.hasOwnProperty(a)) {
                        b = l;
                        break a
                    }
                    b = c
                }
                b = Jd(b)
            }
            b !== l && Oc(a, b)
        }
    }
    function Kd() {
        var a = Y.z();
        if (Y.g("utm_source") || Y.g("gclid") || Y.g("otm_source"))
            return "campaign";
        for (var b = ["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "https://(www)?\\.google\\..*?/$", "bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)", "yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search", "baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"], c = 0; c < b.length; c++)
            if (a.match(b[c]))
                return "search";
        return a && Jb(a) !== Jb(Y.n()) ? "referral" : l
    }
    function Ld() {
        var a = [];
        t(X, function(b, c) {
            c && a.push(b)
        });
        return a
    }
    function Ea() {
        var a = {};
        t(X, function(b, c) {
            c && (a[String(b)] = c)
        });
        return a
    }
    function Md(a) {
        return t(X, function(b, c) {
            if ((N(b, "segment_value_type") || "") == a)
                return c
        })
    }
    function cd(a, b) {
        var c = Ya(a) || a;
        X[c] ? (X[c] = n, ("undefined" === typeof b || b) && ed()) : x("Segmenter", "Not removing " + a + ", not found")
    }
    function Jd(a, b) {
        var c, b = M(b) ? b: k;
        c = c || Nd;
        a = jd(a);
        a = String(a);
        b && (a = a.toLowerCase());
        a = a.substring(0, c);
        return encodeURIComponent(a)
    }
    var Id = [], X = {}, Nd = 20;
    function Od(a, b) {
        var c = k;
        t(a, function(a) {
            if (!b(a))
                return c = n
        });
        return c
    }
    function Z(a, b) {
        var c = n;
        t(a, function(a) {
            if (b(a))
                return c = k
        });
        return c
    }
    function gb(a, b) {
        for (var c = 0; c < a.length; c++)
            if (b == a[c])
                return k;
        return n
    }
    function Pd(a, b) {
        var c = Zc(arguments, 1);
        return function() {
            var b = Zc(arguments);
            b.unshift.apply(b, c);
            return a.apply(this, b)
        }
    }
    function t(a, b) {
        var c = l;
        if (B(a))
            for (var d = a.length, e = 0; e < d&&!(c = b.call(i, a[e], e), M(c)); ++e);
        else 
            for (d in a)
                if (Object.prototype.hasOwnProperty.call(a, d) && (c = b.call(i, d, a[d]), M(c)))
                    break;
        return c
    }
    function cc(a, b) {
        t(b, function(b, d) {
            a[b] = d
        });
        return a
    }
    function Ia(a, b) {
        for (var c = [], d = 0, e = a.length; d < e; d++) {
            var f = a[d];
            b(f) && c.push(f)
        }
        return c
    }
    function Qd(a, b) {
        return t(b, function(b) {
            if (b === a)
                return k
        }) || n
    }
    function B(a) {
        return a && "object" === typeof a && a.length && "number" === typeof a.length
    }
    function M(a) {
        return "undefined" !== typeof a
    }
    function ea(a) {
        return ("number" === typeof a || "string" === typeof a) && Number(a) == a
    }
    function y(a) {
        y = Object.ta || function(a) {
            var c = [];
            t(a, function(a) {
                c.push(a)
            });
            return c
        };
        return y.call(l, a)
    }
    function Rd(a, b) {
        function c() {
            var b = document.head || document.getElementsByTagName("head")[0] || document.documentElement, c = document.createElement("script");
            c.src = a;
            c.type = "text/javascript";
            b.appendChild(c)
        }
        if (b)
            try {
                if ("loading" === document.readyState) {
                    var d = "optimizely_synchronous_script_" + Math.floor(1E5 * Math.random());
                    - 1 !== a.indexOf('"') ? x("loadScript", "Blocked attempt to load unsafe script: " + a) : (document.write('<script id="' + d + '" src="' + a + '"><\/script>'), 1 !== $("#" + d).length && h(Error("Document.write failed to append script")))
                } else 
                    h(Error("Not safe to attempt document.write"))
            } catch (e) {
            try {
                var f =
                new XMLHttpRequest;
                f.open("GET", a, n);
                f.onload = function() {
                    eval(f.responseText)
                };
                f.onerror = function() {
                    h(Error())
                };
                f.send()
            } catch (g) {
                R("Common", "Failed to load %s synchronously", a), c()
            }
        } else 
            c()
    }
    function R(a, b, c) {
        var d = window.console;
        if (P && d && d.log) {
            var e = Zc(arguments, 1);
            e[0] = "Optimizely / " + a + " / " + b;
            Function.prototype.apply.call(d.log, d, e)
        }
    }
    function jd(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
            return a
        }
    }
    function Zc(a, b) {
        return Array.prototype.slice.call(a, b || 0, a.length)
    };
    function x(a, b, c) {
        Sd.push({
            Y: new Date,
            W: a,
            message: b,
            Q: c || n
        });
        Td && $c()
    }
    function Ud() {
        P = k
    }
    function Vd() {
        Db = P = k
    }
    function $c() {
        P && (t(Sd, function(a) {
            if (!a.na && (!a.Q || a.Q === Db)) {
                var b =+ a.Y;
                R(a.W, a.message + (" [time " + (Wd ? b - Wd : 0) + " +" + (Xd ? b - Xd : 0) + "]"));
                Xd = b;
                Wd || (Wd = b);
                a.na = k
            }
        }), Td = k)
    }
    var Xd = l, Wd = l, Sd = [], Td = n;
    function z(a) {
        var b = /^([^=]+)=?(.*)$/, c = [], d;
        t((document.cookie || "").split(/\s*;\s*/), function(e) {
            (d = e.match(b)) && a === d[1] && c.push(jd(d[2]))
        });
        if (0 === c.length)
            return l;
        1 < c.length && R("Cookie", "Values found for %s: %s", a, c.length);
        return c.pop()
    }
    function C(a, b, c) {
        var d = Yd || Zd || $d, e = document.location.hostname, b = b || "";
        !Zd && r("remote_public_suffix") && ae.push({
            sa: c,
            name: a,
            value: b
        });
        d && (d === Zd && d !== $d) && (be(a, e), be(a, $d));
        ce(a, b, d, c);
        var f = z(a);
        f === b ? R("Cookie", "Successful set %s=%s on %s", a, b, d) : (R("Cookie", "Setting %s on %s apparently failed (%s != %s)", a, d, f, b), R("Cookie", "Setting %s on %s", a, e), ce(a, b, e, c), f = z(a), f === b ? (R("Cookie", "Setting %s on %s worked; saving as new public suffix", a, e), $d = e) : (R("Cookie", "Could not set cookie %s, disabling event tracking.",
        a), u = n))
    }
    function be(a, b) {
        R("Cookie", "Deleting %s on %s", a, b);
        document.cookie = [a, "=; domain=.", b, "; path=/; expires=", (new Date(0)).toUTCString()].join("")
    }
    function ce(a, b, c, d) {
        a = [a, "=", encodeURIComponent(b), "; domain=.", c, "; path=/"];
        d && a.push("; expires=", (new Date( + new Date + 1E3 * d)).toUTCString());
        document.cookie = a.join("")
    }
    function de(a) {
        var b = Yd || Zd || $d;
        b !== a && (Yd = String(a) || "", R("Cookie", "Api public suffix set to: %s", Yd), nd(), be("optimizelySegments", b))
    }
    var $d = "", Yd = "", Zd = "", ae = [];
    function ee() {}
    cc(ee.prototype, {
        H: Hb,
        aa: Ib,
        M: Nb,
        G: function() {
            return {
                id: this.H(),
                version: this.aa(),
                mobileId: this.M()
            }
        },
        ba: function() {
            return this.g("utm_campaign")
        },
        I: z,
        w: Kb,
        v: function() {
            var a = "";
            try {
                a = navigator.userLanguage || window.navigator.language, a = a.toLowerCase()
            } catch (b) {
                a = ""
            }
            return a
        },
        o: Mb,
        n: function() {
            return Sb || window.location.href
        },
        N: Ob,
        ea: function() {
            return !Pb ? k : !!tb.get("first_session")
        },
        Z: id,
        fa: Qb,
        z: function() {
            return z("optimizelyReferrer") || document.referrer || ""
        },
        ga: function() {
            return Jb(this.z())
        },
        O: Ld,
        ha: Kd,
        da: function() {
            return document.referrer
        },
        g: function(a) {
            a: {
                for (var b = this.Z(), b = b || id(), c = 0; c < b.length; c++) {
                    var d = b[c];
                    if (d[0] === a) {
                        a = d[1];
                        a = a.replace(/\+/g, " ");
                        a = jd(a);
                        break a
                    }
                }
                a = l
            }
            return a
        },
        ca: function() {
            return zc
        },
        J: function(a) {
            return (this.ca() || {})[a]
        },
        ia: function() {
            var a = z("optimizelyCustomEvents") || "{}";
            try {
                a = A(a)
            } catch (b) {
                a = {}
            }
            a = a[Ga()] || [];
            return B(a) ? a : []
        },
        ja: function(a) {
            var b = this.O();
            return gb(b, a)
        },
        T: function(a) {
            return gb(this.ia(), a)
        },
        getDate: function() {
            return new Date
        },
        L: function() {
            return (Lb ||
            l) && (Lb || l).lists || l
        },
        K: function(a) {
            a = this.L() && this.L()[a];
            M(a) || (a = l);
            return a
        }
    });
    var Y = new ee;
    function fe() {
        this.d = {};
        this.e = {};
        this.i = {};
        this.S = {}
    }
    fe.prototype.ma = function(a) {
        var b = this.i.hasOwnProperty(a) || this.S.hasOwnProperty(a);
        if (!this.d.hasOwnProperty(a) ||!b)
            try {
                var c = this.d, d = Pa(a);
                d || h(Error("Unable to find audience for id: " + a));
                var e = ge(this, d.conditions);
                x("Visitor", "Checking if in audience " + a + ": " + e);
                c[a] = e
        } catch (f) {
            x("Visitor", "Error: " + f.message)
        }
        return this.d[a]
    };
    function he(a, b, c, d) {
        d = cc({
            p: k,
            R: k,
            j: k
        }, d);
        if (Pa(b)) {
            a.d[b] = c;
            var e = Qa(b);
            e ? a.S[b] = c : d.p ? a.i[b] = c : delete a.i[b];
            e && d.j && a.j(e, c);
            if (!e && d.p && d.R) {
                var f = [];
                t(a.i, p(function(a) {
                    this.d[a] && f.push(a)
                }, a));
                f.sort();
                C("optimizelyAudiences", f.join(","), 31536E4)
            }
        } else 
            x("Visitor", "Unable to find audience " + b)
    }
    fe.prototype.l = function(a) {
        he(this, a, k)
    };
    fe.prototype.C = function(a) {
        he(this, a, n)
    };
    fe.prototype.pa = function() {
        t(this.d, p(function(a) {
            he(this, a, n, {
                p: !!this.i.hasOwnProperty(a)
            })
        }, this))
    };
    function ie(a, b, c, d) {
        d=!M(d) || d;
        M(c) && c !== l && String(c) ? (d && (c = Jd(String(c), n)), a.e[b] = c) : delete a.e[b];
        return a.e[b]
    }
    fe.prototype.q = function(a, b, c) {
        var d;
        a: {
            for (d in r("dimensions") || {}) {
                var e = a, f = Ta(d, "api_name");
                if (e === (!f ? l : f))
                    break a
            }
            d = l
        }
        d = d || a;
        r("dimensions", d) ? "custom_dimension" === Ua(d) ? (b = ie(this, d, b, c), a = Ta(d, "segment_id"), (a=!a ? l : a) && this.j(a, b), x("Visitor", 'Set dimension "' + d + '" to "' + b + '"')) : x("Visitor", 'Unknown dimension "' + d + '"') : x("Visitor", "Unable to find dimension " + a)
    };
    fe.prototype.j = function(a, b) {
        b ? Oc(a, b) : cd(a)
    };
    var Hd = new fe;
    function je(a) {
        X = {};
        Gd(a)
    };
    function ke(a, b) {
        if (a && b)
            if (le)
                x("Evaluator", "Bound event " + b + " to selector " + a), me(a, b);
            else {
                var c = {
                    f: b,
                    b: a,
                    type: "event '" + b + "' (click goal)",
                    k: k
                };
                x("Evaluator", "Add step to bind event " + c.f + " to selector " + c.b);
                ne.push(c)
            }
    }
    function Gc(a, b) {
        if (O) {
            B(a) ? oe(a) : (a = [], oe(b));
            a = a.concat(H);
            H = [];
            for (var c = 0; c < a.length; c++)
                gb(G, a[c]) || G.push(a[c]);
            c = a;
            c === i ? c = [] : ea(c) && (c = [c]);
            for (var d = Da(c), e = [], f = [], g = [], j = [], m = Ia(Ra(), function(a) {
                return a.experiments ? n : pe(a.url_conditions || [])
            }), o = 0, v = m.length; o < v; o++) {
                var w = {
                    f: m[o].event_name,
                    b: m[o].selector,
                    type: "event '" + m[o].event_name + "' (click goal)",
                    k: k
                };
                "revenue"in m[o] && (w.revenue = m[o].revenue);
                e.push(w)
            }
            t(c, function(a) {
                var b = {}, c = K(a, "events") || {};
                t(c, function(a, c) {
                    b[a] = [c]
                });
                var c = Ia(Ra(), function(b) {
                    return "experiments"in b ? a in b.experiments : n
                }), d = 0;
                for (; d < c.length; d++) {
                    var m = c[d];
                    b[m.selector] || (b[m.selector] = []);
                    b[m.selector].push({
                        eventName: m.event_name,
                        revenue: m.revenue,
                        experimentIds: m.experiments
                    })
                }
                t(b, function(b, c) {
                    t(c, function(c) {
                        e.push({
                            f: c.eventName,
                            h: c.experimentIds,
                            a: c.revenue,
                            b: b,
                            type: "event '" + c.eventName + "' (experiment " + a + ")",
                            k: k
                        })
                    })
                });
                c = K(a, "css") || "";
                d = K(a, "code") || "";
                c && g.push({
                    code: '$("body").append("<style>' + c.replace(/([\f\n\r\t\\'"])/g, "\\$1") +
                    '</style>");',
                    b: "body",
                    type: "global css (experiment " + a + ")",
                    k: k
                });
                d && qe(d, f, j)
            });
            t(d, function(a) {
                for (var b = ib(a), b = b.split("\n"), c = [], d = k, e = 0, g = b.length; e < g; e++) {
                    var m = $.trim(b[e]);
                    if (m === "/* _optimizely_variation_url_end */")
                        d = k;
                    else if (m !== "") {
                        var o = wb.exec(m);
                        if (o && o.length === 13) {
                            var v = o[2] ? o[2].split(" "): [], m = o[4] ? o[4].split(" "): [], w = o[6] ? o[6]: "substring", Pc = o[8] ? o[8].split(" "): [], o = o[10] ? o[10].split(" "): [];
                            if (v.length > 0) {
                                d = re(v, Pc, w);
                                d = pe(d)
                            }
                            if (d && m.length > 0) {
                                d = re(m, o, w);
                                d=!pe(d)
                            }
                        } else 
                            d &&
                            c.push(m)
                        }
                }
                b = c.join("\n");
                qe(b, f, j, a)
            });
            c = [];
            c.push.apply(c, f);
            c.push.apply(c, g);
            c.push.apply(c, j);
            c.push.apply(c, e);
            ne.push.apply(ne, c);
            se()
        }
    }
    function se() {
        var a = n;
        te = l;
        for (x("Evaluator", ue + " times waited");
        !a && 0 < ne.length;
        ) {
            x("Evaluator", ne.length + " steps remaining");
            var b = ne.shift(), c = b, a = n;
            if (c.ra&&!le)
                x("Evaluator", "Document not ready yet"), a = k;
            else if (c.k&&!le && (c = c.b))
                for (var c = B(c) ? c : [c], d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (!(e === l || e === i ||!e.length))
                        if (0 === ("document" == e ? $(document) : $(e)).length)
                            x("Evaluator", "'" + e + "' not found"), a = k
                }
            a ? ne.unshift(b) : b.f ? (ve(), x("Evaluator", "Bound event " + b.f + " to selector " + b.b), c = {}, b.a && (c = {
                a: b.a,
                h: b.h
            }), me(b.b, b.f, c)) : b.code && (x("Evaluator", "Run code: " + b.code), we(b.code, b.r))
        }
        a ? (te = setTimeout(se, 0 === ue ? 10 : 50), ue++) : (x("Evaluator", ue + " total times waited"), ve())
    }
    function ve() {
        Vb("flash");
        0 === Dc.length && Vb("flashGeo")
    }
    function we(a, b) {
        a = a.replace(Fd, Dd);
        if (xc(a))
            if (x("Evaluator", "Redirect detected"), Cd(a)) {
                x("Evaluator", "OK to redirect");
                var c = Bd(a);
                x("Evaluator", "setting a redirect cookie" + (b ? " for variation: " + b : ""));
                C("optimizelyRedirect", (b || "unknown variation") + "|" + (c ? "true" : "false"), 5);
                C("optimizelyReferrer", document.referrer, 5)
            } else {
                x("Evaluator", "NOT OK to redirect");
                return 
            }
        eval("var $j = $;");
        try {
            xc(a) && ($("head").append("<style type='text/css'>body{display:none;visibility:hidden;}</style>"), x("Evaluator",
            "Hiding body before redirect"), setTimeout(function() {
                document.body && (document.body.style.visibility = "visible", document.body.style.display = "block", x("Evaluator", "Unhiding body -- did not redirect"))
            }, 1700)), eval(a)
        } catch (d) {
            c = P, P = k, x("Evaluator", "Error: " + d.message), x("Evaluator", "Code: " + a), P = c, x("Evaluator", "Failed to run code: " + d.message)
        }
    }
    function me(a, b, c) {
        c = c || {};
        if (!xe[a] ||!xe[a][b]) {
            var d = function() {
                ha(b, "custom", c)
            }, e = $(a);
            if (0 < e.length) {
                var f = function() {
                    e.unbind("touchend", d);
                    e.unbind("touchmove", f);
                    e.unbind("mousedown", d)
                }, g = function() {
                    f();
                    e.bind("touchmove", f);
                    e.bind("touchend", d)
                };
                e.bind("mousedown", d);
                e.bind("touchstart", g)
            } else 
                e = $("html"), f = function() {
                    e.undelegate(a, "touchend", d);
                    e.undelegate(a, "touchmove", f);
                    e.undelegate(a, "mousedown", d)
                }, e.delegate(a, "touchstart", function() {
                    f();
                    e.delegate(a, "touchend", d);
                    e.delegate(a,
                    "touchmove", f)
                }), e.delegate(a, "mousedown", d);
            xe[a] || (xe[a] = {});
            xe[a][b] = "mousedown touchstart"
        }
    }
    function ye(a) {
        ze = a
    }
    function oe(a) {
        a || (a = Wa());
        for (var b = 0; b < a.length; b++)
            L(a[b])
    }
    var xe = {}, G = [], H = H || [], ze = 0, le = n, ne = [], te = l, ue = 0;
    $(function() {
        setTimeout(function() {
            Vb("docReady");
            le = k;
            te !== l && (x("Evaluator", "Document is ready"), clearTimeout(te), 0 < ze ? setTimeout(se, ze) : se())
        }, 50)
    });
    function Ae(a) {
        var b = a.split(":");
        2 !== b.length && h(Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string " + a));
        return 60 * parseInt(b[0], 10) + parseInt(b[1], 10)
    };
    function Ec(a, b) {
        var c = b.manualMode === k, d = b.objectType ? b.objectType: "experiment", e = "experiment" === d, f = b.enabledStatus, g = b.visitor || Hd;
        x("Condition", "Testing " + d + " " + a);
        var f = e && (M(f)?!!f : Xa(a)), j = e && $a(a), m;
        a: switch (d) {
        case "experiment":
            m = K(a, "conditions");
            break a;
        case "segment":
            m = N(a, "add_condition");
            break a;
        default:
            m = []
        }
        if (e&&!f)
            return x("Condition", "Failed for " + d + " " + a + " (paused)"), n;
        if (e&&!c && j)
            return x("Condition", " Failed for " + d + " " + a + " (manual activation mode)"), n;
        if (m) {
            var o = "experiment" ===
            (d || "experiment"), v = k;
            t(m, function(b) {
                var c = b.type;
                if (o && b.only_first_time && Be(a))
                    x("Condition", c + " condition passed because it only gets checked when bucketing", k);
                else {
                    var d=!b.not, b = (0, Ce[c])(b), e = b !== d;
                    x("Condition", "Found that " + ("the visitor " + (b ? "passed" : "failed") + " a " + c + " targeting condition  when it needed to " + (d ? "pass" : "fail")), !e);
                    if (e)
                        return v = n
                }
            });
            if (!v)
                return x("Condition", "Failed for " + d + " " + a + " (condition failed)"), n
        } else {
            a:
            {
                c = [];
                e = [];
                if ("experiment" === d)
                    c = K(a, "audiences") || [], e =
                    K(a, "urls") || [];
                else if ("segment" === d)(f = N(a, "audience_id")) && (c = [f]);
                else {
                    x("Condition", "Not a valid objectType: " + d);
                    d = n;
                    break a
                }
                if (0 < c.length && (x("Condition", "Testing audiences for " + d + " " + a + ": " + c), !Z(c, p(g.ma, g)))) {
                    x("Condition", "Failed to match any audiences for " + d + " " + a);
                    d = n;
                    break a
                }
                if (0 < e.length) {
                    x("Condition", "Testing URLs for " + d + " " + a);
                    var g = e, w = Y.n(), E = [], ca = [];
                    t(g, function(a) {
                        a.negate ? ca.push(a) : E.push(a)
                    });
                    g = function(a) {
                        return Z(a, function(a) {
                            return De(w, a)
                        })
                    };
                    if (g(ca) ||!(0 === E.length ||
                    g(E))) {
                        x("Condition", "Failed to match any URL for " + d + " " + a);
                        d = n;
                        break a
                    }
                }
                d = k
            }
            if (!d)
                return n
        }
        return k
    }
    function Ee(a, b) {
        var c = b.value, d = a.id, e = a.version, f = a.mobileId;
        return f && "unknown" !== f ? (x("Condition", f, k), "mobile" === c || c === f) : 0 === c.indexOf(d) ? (c = c.substr(d.length), "" === c || c <= e && e < Number(c) + 1) : n
    }
    function xd(a, b) {
        var c = b.value;
        if (c === i)
            return k;
        try {
            return Boolean(eval(c))
        } catch (d) {
            return n
        }
    }
    function Fe(a, b) {
        return Ge(b.value, b.match, a)
    }
    function He(a, b) {
        return Ge(b.value, b.match, a)
    }
    function Ie(a, b) {
        var c = b.value;
        switch (b.match) {
        case "exact":
            if (a == c && "" != a)
                return k;
            break;
        case "prefix":
            if (0 == a.indexOf(c))
                return k;
            break;
        case "regex":
            try {
                var d = RegExp(c)
            } catch (e) {
                break
            }
            if (d.test(a))
                return k;
            break;
        case "cidr":
            try {
                var f;
                a:
                {
                    var g = new Je(c), j = Ke(a);
                    j === l && h(Error("Invalid ip: " + a));
                    for (c = 0; 4 > c; c++)
                        if ((j[c] & g.A[c]) !== g.B[c]) {
                            f = n;
                            break a
                        }
                    f = k
                }
                return f
            } catch (m) {}
        }
        return n
    }
    function Le(a, b) {
        var c = b.value;
        return "any" === c || 0 === a.indexOf(c)
    }
    function Me(a, b) {
        var c = b.value.split("|"), d = $.trim(c[0]), e = $.trim(c[1]), f = $.trim(c[2]), g = $.trim(c[3]);
        switch (c.length) {
        case 1:
            if (Q(a.country) === d)
                return k;
            break;
        case 2:
            if (Q(a.region) === e && Q(a.country) === d)
                return k;
            break;
        case 3:
            if (Q(a.city) === f && (Q(a.region) === e || "" === e) && Q(a.country) === d)
                return k;
            break;
        case 4:
            if (Q(a.continent) === g)
                return k
        }
        return n
    }
    function Ne(a, b) {
        return Ge(b.value, b.match, a)
    }
    function Oe(a, b) {
        var c = b.value, d = b.match;
        x("Condition", "Testing referrer " + a + " against  " + c + " (" + d + ")", k);
        return Pe(a, c, d)
    }
    function Qe(a) {
        return !!a
    }
    function pe(a) {
        var b = Y.n();
        return Z(a.values, q(De, b))
    }
    function De(a, b) {
        var c = b.value, d = b.match;
        x("Condition", "Testing URL " + a + " against  " + c + " (" + d + ")", k);
        return Pe(a, c, d)
    }
    function Re(a, b) {
        switch (b.value) {
        case "new":
            if ("returning" === a)
                return n;
            break;
        case "returning":
            return "returning" === a
        }
        return k
    }
    function ge(a, b) {
        var c = {
            and: function(b) {
                return Od(b, q(ge, a))
            },
            or: function(b) {
                return Z(b, q(ge, a))
            },
            not: function(b) {
                1 !== b.length && h(Error('"not" argument too long: ' + Ka(b)));
                return !ge(a, b[0])
            }
        };
        if (B(b)) {
            if (b[0]in c)
                return c[b[0]](b.slice(1));
            h(Error("Not an operator"))
        }
        var c = b.dimension_id, d = Ua(c), e = b.value;
        d || h(Error("No dimension type for dimension: " + c));
        var f = Se[d];
        f || h(Error("Unknown dimension type: " + d));
        d = i;
        if (a.e.hasOwnProperty(c))
            d = a.e[c];
        else 
            try {
                var g = Ua(c) || "", j, m;
                r("dimensions", c) || h(Error("Unable to find dimension for id: " +
                c));
                "custom_dimension" === g && h(Error("calculateDimensionValue called on custom dimension " + c));
                (j = {
                    browser: p(Y.G, Y),
                    campaign: q(Md, "campaign"),
                    cookies: p(Y.I, Y),
                    custom_tag: p(Y.J, Y),
                    event: p(Y.T, Y),
                    first_session: p(Y.ea, Y),
                    ip: p(Y.w, Y),
                    language: p(Y.v, Y),
                    list: p(Y.K, Y),
                    location: p(Y.o, Y),
                    query: p(Y.g, Y),
                    referrer: p(Y.z, Y),
                    segment: p(Y.ja, Y),
                    source_type: q(Md, "source_type"),
                    time_and_day: p(Y.getDate, Y),
                    url: p(Y.n, Y),
                    visitor: p(Y.N, Y)
                }
                [g]) && (m = j(Va(c)));
                x("Visitor", "Got dimension value " + c + ": " + m);
                d = m
        } catch (o) {
            x("Visitor",
            "Error: " + o.message)
        }
        return f(d, {
            value: e,
            match: b.match || "exact"
        })
    }
    function Cc(a) {
        var b = k;
        !K(a, "conditions")&&!N(a, "add_condition") ? (b = [N(a, "audience_id")], b[0] || (b = K(a, "audiences") || []), b = Od(b, function(a) {
            a = Pa(a);
            return !a.conditions ? k : Te(a.conditions)
        })) : (K(a, "uses_geotargeting") || N(a, "uses_geotargeting")) && (b = Ue.ip(l) || Ue.location(l));
        b || x("Condition", "Not ready to test (geotargeting): " + a);
        return b
    }
    function Te(a) {
        if (B(a))
            return Od(a.slice(1), Te);
        var b = Ua(a.dimension_id) || "";
        return (b = Ue[b]) ? b(a) : k
    }
    var Ce = {
        browser: function(a) {
            var b = Y.G();
            return Z(a.values, function(a) {
                return Ee(b, {
                    value: a
                })
            })
        },
        code: function(a) {
            return xd(0, a)
        },
        cookies: function(a) {
            for (var b = a.names || [], a = a.values || [], c, d = 0; d < b.length; d++)
                if (c = b[d], Fe(Y.I(c), {
                    value: a[d] || i
                }))
                    return k;
            return n
        },
        custom_tag: function(a) {
            return Z(a.values, function(a) {
                return He(Y.J(a.key), {
                    value: a.value
                })
            })
        },
        event: function(a) {
            return Z(a.values, function(a) {
                return Y.T(a)
            })
        },
        ip: function(a) {
            var b = Y.w();
            return Z(a.values, q(Ie, b))
        },
        language: function(a) {
            var b =
            Y.v();
            return Z(a.values, function(a) {
                return Le(b, {
                    value: a
                })
            })
        },
        location: function(a) {
            var b = Y.o();
            return Z(a.values, function(a) {
                return Me(b, {
                    value: a
                })
            })
        },
        query: function(a) {
            return 0 === a.values.length ? k : Z(a.values, function(a) {
                return Ne(Y.g(a.key), {
                    value: a.value
                })
            })
        },
        referrer: function(a) {
            return Z(a.values, q(Oe, Y.da()))
        },
        segment: function(a) {
            var b = Y.O();
            return Z(a.values, function(a) {
                return Qe(Qd(a, b))
            })
        },
        url: pe,
        visitor: function(a) {
            var b = Y.N();
            return Re(b, a)
        }
    }, Se = {
        browser: Ee,
        campaign: function(a, b) {
            "none" ===
            a && (a = l);
            return Ge(b.value, b.match, a)
        },
        code: xd,
        cookies: Fe,
        custom_dimension: function(a, b) {
            var c = b.value;
            return !M(c) ? M(a) : c == a
        },
        custom_tag: He,
        event: function(a) {
            return a
        },
        first_session: function(a) {
            return a
        },
        ip: Ie,
        language: Le,
        list: function(a, b) {
            if (a === l ||!M(a))
                return n;
            var c = b.value;
            return !M(c) ? "" === a || a !== n : a.toString() === c
        },
        location: Me,
        query: Ne,
        referrer: Oe,
        segment: Qe,
        source_type: function(a, b) {
            return b.value === a
        },
        time_and_day: function(a, b) {
            var c, d, e;
            c = b.value;
            e = c.split("_");
            3 !== e.length && h(Error("Invalid time and day string " +
            c));
            c = e[0];
            d = e[1];
            e = e[2].split(",");
            c = Ae(c);
            d = Ae(d);
            var f = 60 * a.getHours() + a.getMinutes(), g = "sunday monday tuesday wednesday thursday friday saturday".split(" ")[a.getDay()];
            return f >= c && f <= d&&-1 !== $.inArray(g, e)
        },
        url: De,
        visitor: Re
    }, Ue = {
        ip: function() {
            return !!Y.w()
        },
        location: function() {
            var a = Y.o();
            return !!(a && a.continent || a.country || a.region || a.city)
        },
        list: function(a) {
            return Y.K(Va(a.dimension_id) || "") !== l
        }
    };
    function Ge(a, b, c) {
        var d = M(c) && c !== l, e = M(a) && a !== l;
        switch (b || (e ? "exact" : "exists")) {
        case "exists":
            return d;
        case "exact":
            return d && String(c) === a;
        case "substring":
            return d&&-1 !== String(c).indexOf(a);
        case "regex":
            try {
                return e && d ? Boolean(String(c).match(RegExp(a))) : n
            } catch (f) {
                return n
            }
        default:
            return n
        }
    };
    function Je(a) {
        this.X = $.trim(a);
        a = Ve(this.X);
        a === l && h(Error("Invalid CIDR specification"));
        this.B = a.B;
        this.A = a.A
    }
    function Ve(a) {
        a = a.split("/");
        if (2 != a.length)
            return l;
        var b = parseInt(a[1], 10);
        if (isNaN(b) || 0 > b || 32 < b)
            return l;
        a = Ke(a[0]);
        if (a === l)
            return l;
        if (0 > b || 32 < b)
            b = l;
        else {
            for (var c = [], d = 0; 4 > d; d++)
                c[d] = 0;
            for (var e = Math.floor(b / 8), d = 0; d < e; d++)
                c[d] = 255;
            4 > e && (c[e] = We[b%8]);
            b = c
        }
        for (c = 0; 4 > c; c++)
            a[c]&=b[c];
        return {
            B: a,
            A: b
        }
    }
    function Ke(a) {
        a = a.split(".");
        if (4 != a.length)
            return l;
        for (var b = [], c = 0; 4 > c; c++) {
            var d;
            d = a[c];
            if (3 < d.length)
                d = l;
            else {
                var e = parseInt(d, 10);
                d = isNaN(e) || d !== e.toString() || 0 > e || 255 < e ? l : e
            }
            if (d === l)
                return l;
            b[c] = d
        }
        return b
    }
    var We = [0, 128, 192, 224, 240, 248, 252, 254, 255];
    function Pe(a, b, c) {
        var d = a.split("?");
        if (d[1]) {
            var e = [];
            $.each(d[1].split("&"), function() {
                0 !== this.indexOf(Xe) && e.push(this)
            });
            d[1] = e.join("&");
            a = d.join("?")
        }
        switch (c) {
        case "exact":
            return a = Ye(a), a === Ye(b);
        case "regex":
            try {
                return Boolean(a.match(b))
            } catch (f) {
                return n
            }
        case "simple":
            return a = Ye(Ze(a)), b = Ye(Ze(b)), a === b;
        case "substring":
            return a = Ye(a, k), b = Ye(b, k), - 1 !== a.indexOf(b);
        default:
            return n
        }
    }
    function Ze(a) {
        var b = a.indexOf("?");
        - 1 !== b && (a = a.substring(0, b));
        b = a.indexOf("#");
        - 1 !== b && (a = a.substring(0, b));
        return a
    }
    function Ye(a, b) {
        var a = a.replace("/?", "?"), a = a.toLowerCase().replace(/[/&?]+$/, ""), c = $e.slice(0);
        b || (c = c.concat(af));
        for (var d = c.length, e = 0; e < d; e++)
            a = a.replace(RegExp("^" + c[e]), "");
        return a
    }
    var $e = ["https?://.*?.?optimizelyedit.(com|test)/", "https?://.*.?optimizelypreview.(com|test)/", "https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/", "https?://.*?.?optimizelyedit(-hrd)?.appspot.com/", "https?://"], af = ["www."], Xe = "optimizely_";
    function bf(a) {
        return function(b) {
            if ("object" === typeof b && cf()) {
                var c = l, d;
                for (d in b)
                    b.hasOwnProperty(d) && (c = a.call(this, d, b[d]));
                return c
            }
            return a.apply(this, arguments)
        }
    }
    function cf() {
        for (var a in{})
            return k;
        return n
    };
    function Vc(a, b, c) {
        var d;
        d = n === k;
        var c = c === k, e = n, f = D(a);
        if (f && (c ||!Be(f))) {
            e = k;
            if (c && Be(f))
                for (c = 0; c < V.length; c++)
                    V[c].m === f && V.splice(c, 1);
            V.push({
                m: f,
                id: a,
                source: b
            });
            d && (H = H || [], H.push(f));
            Rc[f] = k;
            Sc();
            x("Plan", "Added experiment " + f + " and variation id " + a + " to the plan, source is " + b, k)
        }
        return e
    }
    function Be(a) {
        return a in Qc || a in Rc
    }
    function Da(a) {
        var b = [], c=!M(a), a = a || [];
        t(V, function(d) {
            (c || gb(a, d.m)) && b.push(d.id)
        });
        return b
    }
    function sd(a) {
        var b;
        if (b === k ||!Be(a))
            Qc[a] = k, Sc()
    }
    function Hc() {
        var a = {};
        t(df, function(b, c) {
            a[b] = c
        });
        t(V, function(b) {
            var c = D(b.id);
            a[c] = b.id
        });
        t(Qc, function(b) {
            a[b] = "0"
        });
        t(r("blacklisted_experiments") || {}, function(b) {
            b in a && delete a[b]
        });
        C("optimizelyBuckets", Ka(a), ya)
    }
    function Sc() {
        t(ef, function(a) {
            a()
        })
    }
    function qe(a, b, c, d) {
        if ( - 1 !== a.indexOf("_optimizely_redirect"))
            b.push({
                code: a,
                type: "code forced (redirect)",
                r: d
            });
        else {
            for (var a = a.split("\n"), e = n, f = n, g = [], j = []; 0 < a.length;) {
                var m;
                m = a.shift().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
                var o = 0 < j.length;
                if (m)
                    if (Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}force/i)))
                        f = k;
                    else if (Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}safe/i)) || Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}end_force/i)))
                        f = n;
                    else if (Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}editor_only/i)))
                        e =
                        k;
                    else if (Boolean(m.match(/_optimizely_evaluate\s{0,9}=\s{0,9}end_editor_only/i)))
                        e = n;
                    else if (!ff.exec(m)&&!e)
                        if (f)
                            g.push(m);
                        else {
                            if (!o) {
                                var v = gf.exec(m), w = [];
                                v ? (w.push(v[1].replace(/^['"]|['"]$/g, "")), (v = jf.exec(m)) && 4 < v.length && w.push(v[4]), c.push({
                                    code: m,
                                    b: w,
                                    type: "safe jquery",
                                    k: k,
                                    r: d
                                })) : o = k
                            }
                            o && j.push(m)
                        }
            }
            0 < g.length && b.push({
                code: g.join("\n"),
                type: "forced evaluation",
                r: d
            });
            0 < j.length && c.push({
                code: j.join("\n"),
                type: "safe non-jquery",
                ra: k,
                r: d
            })
        }
    }
    function re(a, b, c) {
        for (var d = {
            values: []
        }, e = 0, f = a.length; e < f; e++)
            d.values.push({
                value: a[e],
                match: b[e] || c
            });
        return d
    }
    var ef = [], df = {}, Qc = {}, jf = /^\$j?\(['"](.+?)['"]\)\.detach\(\)\.(appendTo|insertAfter|insertBefore|prependTo)\(['"](.+?)['"]\);(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/, ff = /^(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/, gf = /^\$j?\((['"].+?['"]|document)\)\..+;(?:\s|(?:\/\/.*|\/\*(?:[^*]|\*(?!\/))*\*\/))*$/, Rc = {}, V = [];
    function kf() {
        if (!ub) {
            var a = $;
            a.fn.attr = bf(a.fn.attr);
            a.fn.css = bf(a.fn.css);
            a.fn.extend = bf(a.fn.extend);
            var b = a.each;
            a.each = function(c, d, e) {
                if (!(c.length === i || a.isFunction(c)) ||!cf())
                    b.apply(this, arguments);
                else if (e)
                    for (var f in c) {
                        if (c.hasOwnProperty(f) && d.apply(c[f], e) === n)
                            break
                    } else 
                        for (f in c)
                            if (c.hasOwnProperty(f)&&!d.call(c[f], f, c[f]) === n)
                                break;
                return c
            };
            var c = a.fn.la, d = function(a, b, d) {
                return new c(a, b, d)
            }, e, f = document.getElementsByClassName;
            if (!Ad(f))
                var f = (window.optimizely || {}).getElementsByClassName,
                g = (window.optly || {}).getElementsByClassName, f = Ad(f) ? f: Ad(g) ? g: l;
            e = f;
            a.fn.la = function(b, c, f) {
                var g = d, j = document.getElementsByClassName;
                !Ad(j) && e && (g = function(a, b, c) {
                    document.getElementsByClassName = e;
                    a = d(a, b, c);
                    document.getElementsByClassName = j;
                    return a
                });
                if (!("string" === typeof b && c && "object" === a.type(c) && cf()))
                    return g(b, c, f);
                b = g(b, i, f);
                b.attr(c);
                return b
            }
        }
        x("Main", "Started, revision " + r("revision"));
        var f = yd(), g = n, j;
        for (j in f)
            if (zd.exec(j)) {
                g = k;
                break
            }("true" === f.opt_out || "false" === f.opt_out) && xa("true" ===
        f.opt_out);
        Ja = "true" === f.force_tracking;
        if ("true" === f.disable || "true" === f.opt_out || "true" === z("optimizelyOptOut"))
            O = n;
        zb = "true" === f.editor;
        Cb = "true" === f.show_preview;
        j = f.token;
        /^[0-9a-f]{32}$/.test(j) ? Ab = j : x("Query", "Blocked request to load unsafe script: " + j);
        P = "true" === f.log;
        Db = "true" === f.verbose;
        u=!(Cb || g) || Ja;
        "false" === f.client && (O = n, xb = "js/" + za() + ".js");
        if (Ab) {
            if (!window.optimizely ||!window.optimizely.unshift)
                window.optimizely = [];
            window.optimizely.unshift(["verifyPreviewProject", za()]);
            Rd(["//optimizely.s3.amazonaws.com/js/preview/",
            Ab, ".js"].join(""), k);
            Cb && dc('Loading Preview<br /><img alt="loading" src="//www.optimizely.com/static/img/loading-32.gif" style="padding-top:20px" />')
        } else if (Cb&&!Ab)
            dc("This preview link has expired. Please return to Optimizely and preview again to get a new link.");
        else {
            Lb = sb.get("asyncInfo") || l;
            j = document.location.hostname;
            var f = j.split("."), g = j, m = f[f.length - 1];
            2 < f.length && "appspot" === f[f.length - 2] && "com" === m ? g = f[f.length - 3] + ".appspot.com" : 1 < f.length && Qd(m, vb) && (g = f[f.length - 2] + "." + m);
            $d = g;
            R("Cookie", "Guessed public suffix: %s", $d);
            Zd = hb(j);
            R("Cookie", "Public suffix (from data): %s", Zd);
            Yd && R("Cookie", "Api public suffix (from api): %s", Yd);
            j = Hb();
            f = Ib();
            "ie" === j && ("unknown" !== f && 8 > Number(f)) && (O = n);
            if (O) {
                j = z("optimizelyBuckets");
                Pb = j !== i && j !== l;
                a:
                {
                    j = "googlebot;yahoo! slurp;bingbot;bingpreview;msnbot;keynote;ktxn;khte;gomezagent;alertsite;yottaamonitor;pingdom.com_bot;aihitbot;baiduspider".split(";");
                    f = navigator.userAgent;
                    f = f.toLowerCase();
                    for (g = 0; g < j.length; g++)
                        if ( - 1 !== f.indexOf(j[g])) {
                            j =
                            k;
                            break a
                        }
                    j = n
                }
                j ? u = n : Pb || tb.set("first_session", k)
            }
            if (j = z("optimizelyBuckets")) {
                try {
                    j = A(j)
                } catch (o) {
                    j = {}
                }
                var v = {};
                t(j, function(a, b) {
                    var b = String(b), c = D(b);
                    if (cb(c).length > 1 && b.indexOf("_")===-1) {
                        v[c] = v[c] || {};
                        v[c][a] = b
                    } else 
                        b !== "0" ? Vc(b, "cookie") || (df[a] = b) : sd(a)
                });
                t(v, function(a, b) {
                    var c;
                    a: {
                        c = [];
                        for (var d = cb(a), e = 0; e < d.length; e++) {
                            var f = b[d[e]];
                            if (f === "0") {
                                c = "";
                                break a
                            }
                            c.push(f)
                        }
                        c = c.join("_")
                    }
                    c.length > 0 ? Vc(c, "cookie") : sd(a)
                })
            }
            Gd();
            Fa = (z("optimizelyRedirect") || "|").split("|")[0];
            if ((j = z("optimizelyReferrer")) &&
            0 < j.length)
                hc = j, C("optimizelyReferrer", "");
            j = Hd;
            x("Visitor", "Initializing");
            (f = z("optimizelyAudiences")) && 0 < f.length && t(f.split(","), p(function(a) {
                he(this, a, k, {
                    p: k,
                    R: n
                })
            }, j));
            t(Ld(), p(function(a) {
                x("Visitor", "Found segment " + a);
                var b = I()[a];
                if (b && b.audience_id) {
                    x("Visitor", "Adding to audience " + b.audience_id);
                    he(this, b.audience_id, k, {
                        j: n
                    })
                } else if (b && b.dimension_id) {
                    x("Visitor", "Setting dimension value " + b.dimension_id);
                    ie(this, b.dimension_id, X[a], n)
                }
            }, j));
            U = Hd;
            yc = n;
            Id.push(Mc);
            ef.push(Mc);
            j = {
                $: $,
                activeExperiments: G || [],
                allExperiments: Za(),
                all_experiments: Za(),
                allVariations: r("variations") || {},
                data: W,
                getElementsByClassName: document.getElementsByClassName,
                revision: r("revision"),
                variationIdsMap: fd,
                variation_map: gd,
                variationMap: gd,
                variationNamesMap: hd
            };
            var f = {}, w = Pd(Yc, f);
            cc(f, {
                activate: Ac,
                activateGeoDelayedExperiments: Ic,
                activateSiteCatalyst: ec,
                activateUniversalAnalytics: qc,
                addToAudience: p(U.l, U),
                addToSegment: Nc,
                bindTrackElement: ke,
                bucketUser: Bc,
                bucketVisitor: Bc,
                clickTaleRecord: tc,
                clickTalePlayback: rc,
                customTag: ad,
                delayDomReadyEval: ye,
                delayPageviewTracking: kd,
                disable: Wc,
                log: Ud,
                getAccountId: Ba,
                getProjectId: za,
                googleAnalyticsCustomVariableScope: kc,
                integrationPrefix: uc,
                optOut: xa,
                overrideUrl: Rb,
                push: w,
                removeFromAllAudiences: p(U.pa, U),
                removeFromAllSegments: dd,
                removeFromAudience: p(U.C, U),
                removeFromSegment: bd,
                sc_activate: ec,
                sc_svar: vc,
                setCookieDomain: de,
                skipPageTracking: od,
                optOutThirdPartyCookies: ld,
                setCookieExpiration: md,
                setDimensionValue: p(U.q, U),
                timeout: Wc,
                trackEvent: da,
                verbose: Vd
            });
            f.removeFromReportableAudiences =
            pd;
            cc(j, f);
            f = window.optimizely;
            B(f) && t(f, function(a) {
                w(a)
            });
            window.optimizely = j;
            window.optimizely.iapi = {
                evaluateSegments: q(je, i)
            };
            var E=!r("force_variation");
            j = yd();
            t(j, function(a, b) {
                var c = zd.exec(a);
                if (c)
                    if (E) {
                        Bb = k;
                        R("Query", "Ignored parameter %s", a)
                    } else {
                        c = c[1];
                        Bc(c, b, k);
                        ab(c) ? vd(c, {
                            force: k,
                            skipPageviewTracking: k
                        }) : Ec(c, {}) || Ac(c, {
                            force: k,
                            skipPageviewTracking: k
                        })
                    }
            });
            Bb ? dc("Force parameters are disabled for this project. See Project Code Settings.") : (kf.log(), zb && Rd("https://" + r("www_host") + "/js/innie.js"),
            O && (t(Wa(), function(a) {
                if (!Qd(a, H))
                    if (ab(a) && Xa(a))
                        vd(a);
                    else if (Cc(a)) {
                        if (Ec(a, {
                            objectType: "experiment"
                        })) {
                            x("Distributor", "Going to distribute " + L(a));
                            if (Fc(a)) {
                                H = H || [];
                                H.push(a)
                            }
                        }
                    } else 
                        !$a(a)&&!gb(G, a) && Dc.push(a)
                }), Hc(), la(), Eb || (0 < yb ? setTimeout(function() {
                pa()
            }, yb) : pa()), ka(), mc()), P && (t(Qc, function(a) {
                var b = bb(a);
                x("Plan", "Ignore experiment '" + b + "' (" + a + ")")
            }), t(V, function(a) {
                var b = D(a.id), c = kb(a.id);
                x("Plan", L(b) + ' in variation "' + c + '" (' + a.id + ")")
            })), zb ? Xc() : O && (Gc(), Xc(), $c(), !r("installation_verified") &&
            u && (j = "//" + r("www_host") + "/account/snippet_installed?project_id=" + za() + "&wxhr=true", x("Tracker", "Making snippet verification request."), ta(j, l))), setTimeout(function() {
                window.optimizelyCode = {}
            }, 0), setTimeout(function() {
                Ic()
            }, 2E3), setTimeout(function() {
                if (u) {
                    var a = Wb;
                    if (a.ka) {
                        var b = {
                            user: Ga(),
                            project: za(),
                            sync: Xb,
                            timebase: Ub,
                            render: Zb,
                            sampleRate: pb(),
                            numExps: G.concat(H).length,
                            codeVersion: r("version"),
                            wxhr: k
                        };
                        cc(b, bc() || {});
                        cc(b, a.t);
                        var a = [], c;
                        for (c in b)
                            Object.prototype.hasOwnProperty.call(b, c) &&
                            a.push(window.encodeURIComponent(c) + "=" + window.encodeURIComponent(b[c]));
                        ta("https://rum.optimizely.com/rum?" + a.join("&"), l)
                    }
                }
            }, 3E3), $(function() {
                r("badge_html") && $("body").append(r("badge_html"))
            }), x("Main", "End of main"), Vb("mainEnd"))
        }
    }
    kf.log = function() {
        x("Info", "Is enabled: " + O);
        x("Info", "Diagnostic enabled: false");
        x("Info", "Force variation enabled: "+!!r("force_variation"));
        x("Info", "Script to load: " + (xb || "none"));
        x("Info", "Browser type: " + Hb());
        x("Info", "Browser version: " + Ib());
        var a = Nb();
        "unknown" !== a && x("Info", "Mobile browser type: " + a);
        x("Info", "New vs returning: " + Ob());
        x("Info", "Source type: " + Kd());
        x("Info", "User ID: " + Ga())
    };
    kf();
    optly.Cleanse.finish();
};
optimizelyCode();

