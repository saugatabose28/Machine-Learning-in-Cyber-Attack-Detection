gloader.load(["glow", "1", "glow.dom", "glow.anim", "glow.events", "glow.embed"], {
    onLoad: function(a) {
        window.googletag = window.googletag || {};
        googletag.cmd = googletag.cmd || [];
        BBC.adverts = (function() {
            var i = "undefined", bw = "keyValues", g = "labels", bA = "slots", bb = 0, aB = "", p = "/", ax = ";", bO = "=", ba = "bbccom_display_none", aR = '<script type="text/javascript" src="', c = '"><\/script>', bq = "/", a3 = "/", az = "location", bs = "domain", bC = false, aV = "zoneVersion", bH = "zoneReferrer", bG = "yes", aD = "no", br = "bbccom_", I = (window.location.search.indexOf("ad-server=new")===-1) ? "http://ad.doubleclick.net/N4817/adj/": "http://ad.doubleclick.net/N318610/adj/", Y = "http://ad.doubleclick.net/N4817/ad/", ak = "http://ad.doubleclick.net/jump/", bK = "http://ad.doubleclick.net/N4817/adi/", bt = "http://ad.doubleclick.net/adx/", au = "http://ad.doubleclick.net/pfadx/", aX = "817-grey.gif", aU = ";slot=", d = ";sz=", aZ = ";tile=", bE = ";dcopt=ist", K = ";ord=", aO = ";iframe=yes", ay = ";iframe_refresh=yes", a4 = "?", bB = "http://pubads.g.doubleclick.net/gampad/ads?", bv = "4817", bM = "sz=", bn = "&iu=", al = "&url=", ag = "&scor=", v = "&cust_params=", a8 = "&correlator=", bk = "&ciu_szs=", aq = 7, z = 1000, af, a0 = "bbccom_slot_", bz = "disable-wide-advert", aK = {
                newsonline: "/2/hi",
                bbc_news: "/2/hi",
                refresh: "/news"
            }, aP = {
                news: {
                    old: "/2/hi",
                    refresh: "/news"
                },
                sport: {
                    old: "/sport2/hi",
                    refresh: "/sport"
                }
            }, a9 = "http://www.bbc.co.uk/faqs/online/adverts_general", a2 = "Advertisement", aL = {
                leaderboard: {
                    size: "728x90,970x66,970x90,970x250,940x230,930x180,844x179",
                    oid: "ldb"
                },
                skyscraper: {
                    size: "120x600,160x600",
                    oid: "sky"
                },
                bottom: {
                    size: "468x60",
                    oid: "bot"
                },
                mpu: {
                    photo_gallery: "300x250",
                    media_asset: "300x250,336x280",
                    live_event: "300x250,300x600,336x280,336x700",
                    full_width_page: "300x250,336x280",
                    size: "300x250,300x600,300x1050",
                    medium_size: "160x600,300x250,300x600,300x1050,336x700,336x850,336x280",
                    wide_size: "160x600,300x250,300x600,300x1050,336x700,336x850,336x280,468x648",
                    oid: "mpu"
                },
                mpu_middle: {
                    size: "336x100,336x126",
                    oid: "mpm"
                },
                mpu_bottom: {
                    size: "300x251",
                    oid: "mpb"
                },
                native_side: {
                    size: "336x208",
                    oid: "nsi"
                },
                native_side_2: {
                    size: "336x209",
                    oid: "ns2"
                },
                native_main_small: {
                    size: "384x258",
                    oid: "nms"
                },
                native_main_medium: {
                    size: "464x258",
                    oid: "nmm"
                },
                native_main_large: {
                    size: "624x258",
                    oid: "nml"
                },
                native_promo_top: {
                    size: "336x208",
                    oid: "npt"
                },
                native_promo_bottom: {
                    size: "336x208",
                    oid: "npb"
                },
                button: {
                    size: "120x240",
                    oid: "but"
                },
                wallpaper: {
                    size: "1x1",
                    oid: "wpp",
                    serve_max: 1,
                    served: 0
                },
                video: {
                    size: "1x1",
                    oid: "vid"
                },
                preroll: {
                    size: "512x288",
                    oid: "pre"
                },
                companion: {
                    size: "300x60",
                    oid: "cpn"
                },
                storyprintsponsorship: {
                    size: "88x31",
                    oid: "sps"
                },
                halfbanner: {
                    size: "234x60",
                    oid: "hbn"
                },
                printableversionsponsorship: {
                    size: "120x60,215x60",
                    oid: "pvs"
                },
                sponsor_1: {
                    size: "88x31",
                    oid: "sp1"
                },
                sponsor_2: {
                    size: "88x31",
                    oid: "sp2"
                },
                sponsor_3: {
                    size: "88x31",
                    oid: "sp3"
                },
                sponsor_4: {
                    size: "88x31",
                    oid: "sp4"
                },
                sponsor_section: {
                    size: "88x31",
                    oid: "sct"
                },
                sponsor_section_news: {
                    size: "88x31",
                    oid: "ssn"
                },
                partner_button1: {
                    size: "120x30",
                    oid: "pb1"
                },
                partner_button2: {
                    size: "120x30",
                    oid: "pb2"
                },
                partner_button3: {
                    size: "120x30",
                    oid: "pb3"
                },
                partner_button4: {
                    size: "120x30",
                    oid: "pb4"
                },
                partner_button5: {
                    size: "120x30",
                    oid: "pb5"
                },
                partner_button6: {
                    size: "120x30",
                    oid: "pb6"
                },
                partner_button7: {
                    size: "120x30",
                    oid: "pb7"
                },
                partner_button8: {
                    size: "120x30",
                    oid: "pb8"
                },
                adsense_middle: {
                    size: "",
                    oid: "amd"
                },
                adsense_mpu: {
                    size: "amp"
                },
                promo_feature: {
                    size: "336x224",
                    oid: "pf{1}"
                },
                tv_promo: {
                    size: "336x350",
                    oid: "tvp"
                },
                ad_feature_rc: {
                    size: "336x136",
                    oid: "afr"
                },
                ad_feature_index: {
                    size: "624x176",
                    oid: "afi"
                },
                sponsor: {
                    size: "88x31",
                    oid: "sp{1}"
                },
                module: {
                    size: "88x31",
                    oid: "m{2}"
                }, "module_page-bookmark-links-top" : {
                    size: "205x31", oid : "pbl"
                }, rectangle300x100: {
                    size: "300x100", oid : "rct"
                }, not_found: {
                    size: ""
                }
            }; var bx = "", T = [], X = {}, P, av = "", bT = aB, ad = {}, bm = {}, j = 14, an = false, m = false, ai = 0, aE = false, V = false, bl = "4", bJ = ["_v4", "_v3_5", "_v3"], s = false, W = "", O = "", bg = "", A = "", B = "", k = "", r = [], b = {
                airline : {
                    rules : {
                        1 : {
                            match : {
                                1 : ["air", "plane", "flight", "jet", "aviation"], 2 : ["ash", "bomb", "crash", "dead", "detonat", "disaster", "disrupt", "emergenc", "fire", "incident", "injur", "kill", "missing", "package", "passenger", "crew", "search", "score", "strand", "strike", "volcan", "wreck"]
                            }, value : "!c"
                        }, 2 : {
                            match : {
                                1 : ["osama", "bin laden", "twin towers", "9/11,september 11", "11 september", "al-qaeda", "al qaeda"]
                            }, value : "!c"
                        }
                    }
                }, violence : {
                    rules : {
                        1 : {
                            match : {
                                1 : ["riot", "violen", "loot", "unrest", "unruly", "attack", "disturbance", "shot", "disorder", "anarch", "chaotic", "chaos", "unruliness", "mindless", "stealing", "stolen", "thiev", "theft", "arson", "crisis", "disarray", "discord", "lawlessness", "criminal", "vandal", "thug", "engulf", "flame", "burn"]
                            }, value : "!c"
                        }
                    }
                }, sensitive : {
                    rules : {
                        1 : {
                            match : {
                                1 : ["violence", "firearms", "arms", "tobacco", "hygiene", "religio", "crim", "illegal", "politic", "porno", "paedophile", "google", "internet"]
                            }, value : "!c"
                        }
                    }
                }
            }, aa = {
                royalwedding : "news_royalwedding_content", trending : "news_trending_content"
            }, bU = [], ac = 0, bi = 3, Q = false, D = null, aY = {
                ads : false, analytics : false, "nielsen-au" : false, "nielsen-nz" : false, "nielsen-us" : false, sitestat : false, agof : false
            }; while (j--) {
                bT += (Math.floor(Math.random() * 10))
            }
            var bS = function(bW) {
                var bX = [];
                var bV = 0;
                if (bm.keyValues) {
                    var bY;
                    for (bY in bm.keyValues) {
                        bX[bV] = ax;
                        bX[bV + 1] = bY;
                        bX[bV + 2] = bO;
                        bX[bV + 3] = bm.keyValues[bY];
                        bV += 4
                    }
                }
                if (bm.domValues) {
                    var b2;
                    for (b2 in bm.domValues) {
                        var b0 = a.dom.get(bm.domValues[b2]);
                        if ("undefined" !== typeof(b0[0])) {
                            bX[bV] = ax;
                            bX[bV + 1] = b2;
                            bX[bV + 2] = bO;
                            bX[bV + 3] = encodeURIComponent(b0[0].innerHTML.split(" ").join("_"));
                            bV += 4
                        }
                    }
                }
                if (bW) {
                    var b1;
                    for (b1 in bW) {
                        bX[bV] = ax;
                        bX[bV + 1] = b1;
                        bX[bV + 2] = bO;
                        bX[bV + 3] = bW[b1];
                        bV += 4
                    }
                }
                if (aI() && D !== null) {
                    bX[bV] = ax;
                    bX[bV + 1] = "asset_type";
                    bX[bV + 2] = bO;
                    var bZ = ap().match(/\/$|\/default.stm$/);
                    if (bZ) {
                        bX[bV + 3] = "index"
                    } else {
                        bX[bV + 3] = D
                    }
                    bV += 4
                }
                if (aI() && "undefined" !== typeof bbc.fmtj.page.storyId) {
                    bX[bV] = ax;
                    bX[bV + 1] = "story_id";
                    bX[bV + 2] = bO;
                    bX[bV + 3] = bbc.fmtj.page.storyId;
                    bV += 4
                }
                return bX.join(aB)
            };
            var aj = function() {
                bb++;
                return bb
            };
            var R = function(bW) {
                var bV = a.dom.get("#" + br + bW);
                if (bV.length === 1) {
                    return bV[0]
                }
            };
            var L = function(bV) {
                if (typeof bV === "string" && bV !== "") {
                    a2 = bV
                }
            };
            var l = function() {
                return a2
            };
            var Z = function(bV) {
                if (typeof bV === "string") {
                    a9 = bV
                }
            };
            var u = function() {
                return a9
            };
            var aW = function() {
                var bY, bV, bX, bW;
                bX = l();
                bW = u();
                if (bX !== undefined && bX !== "") {
                    bY = document.createElement("div");
                    bY.className = "bbccom_text";
                    if (bW !== undefined && bW !== "") {
                        bV = document.createElement("a");
                        bV.setAttribute("href", bW);
                        bV.innerHTML = bX;
                        bY.appendChild(bV)
                    } else {
                        bY.innerHTML = bX
                    }
                    return bY
                }
            };
            var n = function(bV) {
                if (bV === undefined) {
                    return 
                }
                return bV.outerHTML || (function(bY) {
                    var bX = document.createElement("div"), bW;
                    bX.appendChild(bY.cloneNode(true));
                    bW = bX.innerHTML;
                    bX = null;
                    return bW
                }(bV))
            };
            var bu = function() {
                var bV = aW();
                return n(bV)
            };
            var aw = function(bY) {
                var bW, bV, bX;
                if (typeof(bm.labels) !== "undefined") {
                    if (typeof(bm.labels[bY]) !== "undefined") {
                        bW = bm.labels[bY]
                    } else {
                        for (bX in bm.labels) {
                            if (bX.indexOf("*")!==-1) {
                                bV = bX.substring(0, (bX.length - 1));
                                if (bY.indexOf(bV)!==-1) {
                                    bW = bm.labels[bX]
                                }
                            }
                        }
                    }
                }
                if (bW === undefined) {
                    bW = l()
                }
                return bW
            };
            var aT = function(bW) {
                var bV = aw(bW);
                if (bV !== a2) {
                    a.dom.get("#" + br + bW + " .bbccom_text").html(bV)
                }
            };
            var bj = function() {
                var bV = false;
                if (bbcdotcom.objects("bbc.fmtj.page.assetType")) {
                    bV = (bbc.fmtj.page.assetType === "media_asset")
                }
                return bV
            };
            function G(bV, bW) {
                if (typeof bV !== "undefined" && bV !== "" && bV !== null) {
                    var bX = new RegExp("(\\s|^)" + bW + "(\\s|$)");
                    return bV.className.match(bX)
                }
            }
            function F(bV, bW) {
                if (typeof bV !== "undefined" && bV !== "" && bV !== null && typeof bW === "string" && bW !== "") {
                    if (!G(bV, bW)) {
                        bV.className = bV.className + " " + bW
                    }
                }
            }
            function a5(bV, bW) {
                if (typeof bV !== "undefined" && bV !== "" && bV !== null && typeof bW === "string" && bW !== "") {
                    var bX = new RegExp("(\\s|^)" + bW + "(\\s|$)");
                    if (G(bV, bW)) {
                        bV.className = bV.className.replace(bX, " ")
                    }
                }
            }
            var aF = function(bW) {
                var bV = document.getElementsByTagName("body")[0];
                if (bW.indexOf(br) === 0) {
                    F(bV, bW)
                } else {
                    F(bV, br + bW)
                }
            };
            var aH = function(bW) {
                var bV = document.getElementsByTagName("body")[0];
                a5(bV, bW)
            };
            var at = function(bW) {
                var bV = document.getElementsByTagName("body")[0];
                return G(bV, bW)
            };
            var h = function(b0, bW, bV, bY) {
                var bZ = w(b0);
                if ("undefined" !== typeof bZ && "undefined" !== typeof bZ.serve_max) {
                    if (bZ.served < bZ.serve_max) {
                        aL[b0].served += 1
                    } else {
                        return false
                    }
                }
                if (bj() && b0 === "mpu") {
                    bf(b0);
                    return false
                }
                a6();
                if (bC === false && bm.ads) {
                    if ((!bm.slots || (bm.slots[b0] !== false)) && ad[b0] !== aD) {
                        T.push(b0);
                        ad[b0] = bG;
                        if (typeof(bV) === "object") {
                            bV.is_module = "true"
                        } else {
                            bV = {}
                        }
                        if (b0.indexOf("_")!==-1) {
                            bV["is_" + b0.slice(0, b0.lastIndexOf("_"))] = "true"
                        }
                        aF("slot_" + b0);
                        var bX = document.getElementsByTagName("html");
                        if ("undefined" !== typeof bX[0]) {
                            if (bbcdotcom.objects("htmlClass", "valid", bm)&&!bbcdotcom.objects(bm.htmlClass, "valid", X)) {
                                bX[0].className += " " + br + bm.htmlClass;
                                X[bm.htmlClass] = 1
                            }
                        }
                        if (bW || typeof(bW) === "undefined") {
                            document.write(bu() + bP(b0, bV, bY))
                        } else {
                            document.write(bP(b0, bV, bY))
                        }
                        aT(b0);
                        bbcdotcom.advert.adFactory.createAd(b0)
                    } else {
                        bf(b0)
                    }
                } else {
                    bf(b0)
                }
            };
            var am = function() {
                return (bbcdotcom.objects("bbcdotcom.metadata")) ? bbcdotcom.metadata : ""
            };
            var bP = function(b5, b0, b4, bZ, bV) {
                if (bC === false && bm.ads) {
                    if (typeof(bZ) === "undefined" || ad[bZ] !== aD) {
                        if (typeof(bm) !== "undefined" && typeof(bm.site) !== "undefined" && typeof(bm.zone) !== "undefined") {
                            var b2 = aj();
                            var b8 = bh(b5);
                            var b3 = bm.zone.replace(/[^\w\-]/gi, "");
                            var b1 = (window.Krux && Krux.dfppKeyValues) ? ";" + Krux.dfppKeyValues.slice(0, - 1): "";
                            if (b8 === "") {
                                return ""
                            }
                            if (b4 === "standardUri") {
                                return [Y, bx, p, b3, aU, b5, d, b8, b1, bS(b0), am(), H(), aQ(), B, aZ, b2, K, bT, a4].join(aB)
                            } else {
                                if (b4 === "iframeRefresh") {
                                    return [bK, bx, p, b3, aU, b5, d, b8, b1, bS(b0), am(), H(), aQ(), B, K, bT, aO, ay, a4].join(aB)
                                } else {
                                    if (b5 === "preroll") {
                                        var bX = (bV !== "" && typeof bV !== "undefined") ? bk + bV: "";
                                        var bW = [bB, bM, b8, bn, p, bv, p, bx, p, b3, bX, "&env=vp&gdfp_req=1&impl=s&output=xml_vast2&unviewed_position_start=1", al, encodeURIComponent(encodeURIComponent(window.location.href)), a8, bT, ag, b2, v, encodeURIComponent([bS(b0), am(), H(), aQ(), b1, B, ";iframe=yes"].join(aB).substring(1).replace(/;/g, "&"))].join(aB);
                                        return bW
                                    } else {
                                        if (b4 === "iframe" || J(b5)) {
                                            if (b8.indexOf(",")!==-1) {
                                                b8 = b8.slice(0, b8.indexOf(","))
                                            }
                                            var bY = b8.slice(0, b8.indexOf("x"));
                                            var b7 = b8.slice(b8.indexOf("x") + 1);
                                            var b6 = J(b5) ? "bbccom_refresh": "";
                                            return ['<iframe id="' + br + b5 + '_iframe" width="', bY, '" height="', b7, '" class="', b6, '" frameborder="0" scrolling="no" src="', bK, bm.site, p, b3, aU, b5, d, b8, b1, bS(b0), am(), H(), aQ(), B, aZ, b2, K, bT, aO, a4, '"></iframe>'].join(aB)
                                        }
                                    }
                                }
                            }
                            return [aR, I, bx, p, b3, aU, b5, d, b8, b1, bS(b0), am(), H(), aQ(), B, aZ, b2, bo(b5), K, bT, a4, c].join(aB)
                        } else {
                            return "<!-- bbccom: no zone file -->"
                        }
                    } else {
                        return "<!-- bbccom: dependent slot closed -->"
                    }
                } else {
                    return false
                }
            };
            var bo = function(bV) {
                return bV === "leaderboard" ? bE : ""
            };
            var bf = function(bW, bV) {
                ad[bW] = aD;
                a.dom.get("#" + br + bW).addClass(ba);
                if (bV && bW === "mpu") {
                    bW = "mpu_high";
                    bf(bW)
                }
            };
            var S = function() {
                return at(bz)
            };
            var bh = function(bX) {
                var bV = w(bX), bW;
                if ((!bm.slotSize || typeof(bm.slotSize[bX]) === "undefined" || D === "media_asset") && typeof(bV) !== "undefined" && typeof(bV.size) !== "undefined") {
                    bW = a.dom.get("#bbccom_mpu").parent();
                    if (an && typeof(bV[D]) !== "undefined") {
                        return bV[D]
                    } else {
                        if (typeof(bV.full_width_page) !== "undefined" && bW.length > 0 && 336 < bW.width()) {
                            return bV.full_width_page
                        } else {
                            if ((m || an || bR()) && S() && typeof(bV.medium_size) !== "undefined") {
                                return bV.medium_size
                            } else {
                                if ((m || an || bR()) && typeof(bV.wide_size) !== "undefined") {
                                    return bV.wide_size
                                }
                            }
                        }
                    }
                    return bV.size
                } else {
                    return bm.slotSize[bX]
                }
            };
            var aS = function() {
                if (aI() && null !== bbc.fmtj.page.siteVersion && "undefined" !== typeof(bbc.fmtj.page.siteVersion) && ("cream" === bbc.fmtj.page.siteVersion || "sport" === bbc.fmtj.page.siteVersion.toLowerCase())) {
                    an = true
                }
            };
            var a1 = function() {
                aS();
                return an
            };
            var bR = function() {
                return at("sos2012")
            };
            var bN = function() {
                if (document.getElementsByName("CPS_ASSET_TYPE").length !== 0) {
                    return true
                }
                return false
            };
            var x = function() {
                if ("undefined" !== typeof(bbc) && "undefined" !== typeof(bbc.fmtj) && "undefined" !== typeof(bbc.fmtj.page) && "(none)" !== bbc.fmtj.page.sectionPath && null !== bbc.fmtj.page.sectionPath) {
                    return true
                }
                return false
            };
            var aI = x;
            var aG = function() {
                var bV = ao(["CPS_ASSET_TYPE"]);
                return bV.CPS_ASSET_TYPE === "fix" ? true : false
            };
            var a7 = function() {
                if (typeof wsads !== "undefined") {
                    return true
                } else {
                    return false
                }
            };
            var bQ = function() {
                return wsads
            };
            var bF = function() {
                var bX = [], bW = window.location.pathname.replace(/^\/*/, "").replace(/\/*$/, "").split("/"), bV;
                for (bV in bW) {
                    if (bW[bV].search(".stm")===-1) {
                        bX.push(bW[bV])
                    }
                }
                return bX
            };
            var ab = function() {
                var bV = ao(["CPS_SECTION_PATH"]);
                return bV.CPS_SECTION_PATH.replace(/^\/*/, "").replace(/\/*$/, "").split("/")
            };
            var ap = function() {
                if (W.length === 0) {
                    var bY, bW, bX, bZ;
                    if (aI()&&!aG()) {
                        bW = (D !== "index" && "-" !== bbc.fmtj.page.storyId && null !== bbc.fmtj.page.storyId) ? bbc.fmtj.page.storyId : "default.stm";
                        bX = ("/" !== bbc.fmtj.page.sectionPath) ? bbc.fmtj.page.sectionPath.toLowerCase().replace(/ /g, "_") : "";
                        bY = "/" + bbc.fmtj.page.siteToServe;
                        for (bZ in aP) {
                            if (bZ === bbc.fmtj.page.siteToServe) {
                                bY = aP[bZ].old;
                                continue
                            }
                        }
                        W = bY + bX + "/" + bW
                    } else {
                        if (bN()) {
                            var bV = ao(["CPS_ID", "CPS_SITE_NAME", "CPS_SECTION_PATH", "CPS_ASSET_TYPE"]);
                            bY = ("undefined" !== typeof(aK[bV.CPS_SITE_NAME])) ? aK[bV.CPS_SITE_NAME] : "";
                            bW = ("IDX" !== bV.CPS_ASSET_TYPE) ? bV.CPS_ID : "default.stm";
                            bX = bV.CPS_SECTION_PATH.replace("frontpage", "");
                            W = ("" !== bX && "/" !== bX) ? bY + "/" + bX + "/" + bW : bY
                        } else {
                            if (a7()) {
                                var b1 = bQ();
                                if (b1.uri.indexOf("brasil_2014_copa")!==-1) {
                                    W = "/mundo/world-cup"
                                } else {
                                    W = (b1.section === "homepage" ? "/" + b1.service + "/homepage/" : (b1.service === "mundo" && b1.uri.indexOf("/noticias/")!==-1 ? "/" + b1.service + "/" + b1.section + "/" : b1.uri.replace(/\/temas\//g, "/")));
                                    var b0 = ["index", "topic", "cluster", "topic_cluster"];
                                    var b3 = "", b2;
                                    for (b2 in b0) {
                                        if (b1.documentType === b0[b2]) {
                                            b3 = "default.stm"
                                        }
                                    }
                                    W += (b3 === "" ? b1.storyId : b3)
                                }
                            } else {
                                W = ad[az];
                                for (bZ in aP) {
                                    W = W.replace(aP[bZ].refresh, aP[bZ].old)
                                }
                            }
                        }
                    }
                }
                return W
            };
            var ao = function(bV) {
                var bX = {}, bW;
                for (bW in bV) {
                    if (document.getElementsByName(bV[bW]).length !== 0 && document.getElementsByName(bV[bW])[0].getAttribute("content") !== null) {
                        bX[bV[bW]] = document.getElementsByName(bV[bW])[0].getAttribute("content").toLowerCase().replace(/ /g, "_")
                    }
                }
                return bX
            };
            var y = function() {
                if (document.getElementsByTagName("title").length !== 0) {
                    return document.getElementsByTagName("title")[0].innerHTML.toLowerCase() + " "
                }
                return ""
            };
            var N = function() {
                var bV = ao(["ad_keyword", "Slug"]);
                if (bV.ad_keyword) {
                    bg = bV.ad_keyword
                } else {
                    if (bV.Slug) {
                        bg = bV.Slug
                    }
                }
                A = ax + "keyword=" + bg
            };
            var aJ = function() {
                return bg
            };
            var aQ = function() {
                return A
            };
            var bI = function() {
                var bW, bV, b0;
                for (bW in b) {
                    for (bV in b[bW].rules) {
                        var bX = 0;
                        var bZ = 0;
                        for (b0 in b[bW].rules[bV].match) {
                            bX++;
                            var bY = new RegExp(b[bW].rules[bV].match[b0].join("|"));
                            if (bY.test(O)) {
                                bZ++
                            } else {
                                continue
                            }
                        }
                        if (0 !== bZ && bX === bZ) {
                            if ("!c" === b[bW].rules[bV].value) {
                                r[bW] = "!c=" + bW
                            } else {
                                r[bW] = bW + "=yes"
                            }
                        }
                    }
                }
                for (bW in r) {
                    k += ";" + r[bW]
                }
            };
            var be = function() {
                if (typeof bbc !== "undefined" && typeof bbc.fmtj !== "undefined" && typeof bbc.fmtj.page !== "undefined" && typeof bbc.fmtj.page.assetType !== "undefined") {
                    D = bbc.fmtj.page.assetType
                }
            };
            var U = function() {
                var bV = /[?|&]site=(preview|3pt_zone_file)&uid=([0-9a-fxA-FX]{26})/.test(window.location.search);
                if (bV) {
                    B = ";uid=" + RegExp.$2;
                    if ("3pt_zone_file" === ad[aV] || "test_zone" === ad[aV]) {
                        ad[aV] = RegExp.$1
                    } else {
                        ad[aV] += "_preview"
                    }
                    a.ready(function() {
                        var bW = a.dom.get("a").filter(function(bX) {
                            return (this.href && this.href.indexOf("#") !== 1 && this.href.indexOf("bbc.co")!==-1)
                        });
                        a.events.addListener(bW, "click", aM)
                    })
                }
            };
            var e = function() {
                var bV;
                for (bV in aa) {
                    if (bV === aJ()) {
                        bm.zone = aa[bV].replace(/[^\w\-]/gi, "")
                    }
                }
            };
            var aM = function(bX) {
                var bV = bX.attachedTo.href;
                if (bV.indexOf("site=preview")===-1) {
                    var bW = "site=preview&" + B.split(";")[1];
                    if (bV.indexOf("?")===-1) {
                        bV += "?" + bW
                    } else {
                        if (bV.indexOf("#")!==-1) {
                            bV = bV.substring(0, bV.indexOf("#")) + "&" + bW + bV.substring(bV.indexOf("#"))
                        } else {
                            bV += "&" + bW
                        }
                    }
                    bX.attachedTo.href = bV
                }
            };
            var C = function(bX) {
                var bV = document.createElement("script");
                bV.async = true;
                bV.type = "text/javascript";
                bV.src = bX;
                var bW = document.getElementsByTagName("script")[0];
                bW.parentNode.insertBefore(bV, bW)
            };
            var aA = function() {
                C("http://s0.2mdn.net/instream/html5/gpt_proxy.js")
            };
            var by = function() {
                C("http://www.googletagservices.com/tag/js/gpt.js");
                Q = true
            };
            var H = function() {
                return k
            };
            var t = function(bV) {
                var bW;
                for (bW in bV) {
                    ad[bW] = bV[bW]
                }
            };
            var ar = function() {
                if (typeof af === "undefined") {
                    af = a.dom.get("body")
                }
                return af
            };
            var w = function(bW) {
                var bV;
                if (typeof(bW) !== "undefined" && typeof(aL[bW]) !== "undefined") {
                    return aL[bW]
                } else {
                    if (typeof(bW) !== "undefined" && bW.indexOf("_")!==-1) {
                        if (typeof aL[bW.slice(0, bW.lastIndexOf("_"))] !== "undfined") {
                            bV = aL[bW.slice(0, bW.lastIndexOf("_"))];
                            return bV
                        } else {
                            if (typeof aL[bW.slice(0, bW.indexOf("_"))] !== "undfined") {
                                bV = aL[bW.slice(0, bW.indexOf("_"))];
                                return bV
                            }
                        }
                    }
                }
                ad[bW] = aD;
                return aL.not_found
            };
            var q = function(bV, bW) {
                bW = bW || aq;
                if (typeof bW !== "undefined" && typeof bW === "number") {
                    bW = (bW * z) + z
                }
                ad.interstitial = bG;
                aF("slot_interstitial");
                aF("slot_interstitial_" + bV);
                a.dom.get("#" + br + "int_container").removeClass(ba);
                a.events.addListener("#" + br + "int_link", "click", BBC.adverts.closeInterstitial);
                setTimeout(f, bW)
            };
            var f = function() {
                if (o("leaderboard")) {
                    BBC.adverts.close("leaderboard")
                } else {
                    a.dom.get("#" + br + "int_container").addClass(ba)
                }
                BBC.adverts.close("interstitial")
            };
            var aC = function(bX) {
                if (typeof bX !== "undefined" && typeof bX.a !== "undefined" && typeof bX.b !== "undefined" && typeof bX.c !== "undefined") {
                    var bV = 5;
                    var bW = parseInt(bX.c, 10).toString(2);
                    if (bW.length !== bV) {
                        while (bW.length < bV) {
                            bW = "0" + bW
                        }
                    }
                    aY = {
                        ads: (bX.a === 1 ? true : false),
                        analytics: (bX.b === 1 ? true : false),
                        "nielsen-au": (bX.b === 1 && parseInt(bW.substr(0, 1), 10) === 1 ? true : false),
                        "nielsen-nz": (bX.b === 1 && parseInt(bW.substr(1, 1), 10) === 1 ? true : false),
                        "nielsen-us": (bX.b === 1 && parseInt(bW.substr(2, 1), 10) === 1 ? true : false),
                        sitestat: (bX.b === 1 && parseInt(bW.substr(3, 1), 10) === 1 ? true : false),
                        agof: (bX.b === 1 && parseInt(bW.substr(4, 1), 10) === 1 ? true : false)
                    };
                    if (bX.a !== 1) {
                        bC = true
                    }
                    return true
                }
                return false
            };
            var bd = function(bV) {
                return (typeof aY[bV] !== "undefined" ? aY[bV] : false)
            };
            var J = function(bV) {
                return (typeof(bm.refresh) !== "undefined" && typeof(bm.refresh[bV]) !== "undefined" && bm.refresh[bV]) ? true : false
            };
            var o = function(bX) {
                var bV = a.dom.get("#" + br + bX + " img");
                if (typeof(bV) === "undefined" || bV === null) {
                    return false
                }
                if (typeof bbcdotcom.advert.adRegister[bX] !== "undefined" && bbcdotcom.advert.adRegister[bX].isCloseAd()) {
                    return true
                }
                var bW = bV.attr("src");
                if (typeof(bW) !== "undefined" && bW !== null && bW.match(aX)) {
                    return true
                }
                return false
            };
            var M = function(bV, bX) {
                var bW = bV.length;
                while (bW--) {
                    if (bV[bW] === bX) {
                        return true
                    }
                }
                return false
            };
            var bD = function(bV, bX) {
                aF(a0 + bX);
                var bW = a.dom.get(bV);
                bW.removeClass(ba);
                bW.addClass("bbccom_visibility_show");
                a.anim.slideDown(bW, 0.5, {
                    tween: a.tweens.easeOut()
                })
            };
            var bc = function(bZ, bW, bY) {
                var bX = bW.slotDomId;
                var bV = a.dom.get("#" + bX);
                a.anim.slideUp(bV, 0.5, {
                    tween: a.tweens.easeOut(),
                    onComplete: bY
                })
            };
            var bL = function(bW, bV) {
                ae(bW, bV);
                E(bW, bV);
                ah(bW, bV)
            };
            var aN = function(bY, b0, bW) {
                var bZ, bX, bV;
                bV = {
                    cur: 0,
                    max: 5000
                };
                if (bW === undefined) {
                    bW = 100
                }
                bZ = bY.innerHTML;
                bX = setInterval(function() {
                    var b1;
                    b1 = (bZ !== bY.innerHTML);
                    if (b1) {
                        b0();
                        clearInterval(bX)
                    } else {
                        if (bV.cur < bV.max) {
                            bV.cur++
                        } else {
                            clearInterval(bX)
                        }
                    }
                }, bW)
            };
            var ah = function(b2, bV) {
                var bY, bW, b3;
                bY = bV.slotDomId;
                if (typeof window.googletag !== "undefined") {
                    var b5 = bh(b2);
                    var bX = parseFloat(b5.slice(0, b5.indexOf("x")));
                    var b4 = parseFloat(b5.slice(b5.indexOf("x") + 1));
                    var bZ = document.getElementById(bY);
                    if (bZ) {
                        var b0 = bY + "_inner";
                        var b1 = document.createElement("div");
                        b1.id = b0;
                        b1.className = "bbccom_advert_inner";
                        bZ.appendChild(b1);
                        googletag.cmd.push(function() {
                            bW = bbcdotcom.advert.network.getNetwork();
                            b3 = bbcdotcom.advert.site.getSite();
                            googletag.defineSlot("/" + bW + "/" + b3, [bX, b4], b0).addService(googletag.companionAds()).addService(googletag.pubads());
                            googletag.companionAds().setRefreshUnfilledSlots(false);
                            googletag.pubads().disableInitialLoad();
                            googletag.enableServices();
                            googletag.display(b0)
                        });
                        aN(bZ, function() {
                            bD(bZ, b2)
                        })
                    }
                }
            };
            var ae = function(bZ, bX) {
                var bY = bX.slotDomId;
                var bW = a.dom.get("#" + bY);
                var bV = bW.children();
                if (0 < bV.length) {
                    bV.destroy()
                }
                bW.removeAttr("class");
                bW.addClass(br + bZ);
                bW.addClass("bbccom-advert");
                bW.addClass(ba);
                if (bZ === "mpu") {
                    aH("bbcdotcomAdvertsResetMpu")
                }
            };
            var E = function(bZ, bW) {
                var bX = bW.slotDomId;
                var bV = a.dom.get("#" + bX);
                var bY = aW();
                bV.append(bY)
            };
            var bp = function() {
                if (typeof(window.external) === "undefined") {
                    return 
                }
                if (typeof(window.external.msIsSiteMode) === "undefined") {
                    return 
                }
                a.ready(function() {
                    if (typeof window.external.msIsSiteMode !== "undefined"&&!window.external.msIsSiteMode() && BBC.adverts.readCookie("hideIePinnedSite") !== "1") {
                        var bW = document.createElement("div");
                        bW.id = "iePinnedSiteBar";
                        var bV = '<div id="iePinWrap"><p>Pin BBC to your taskbar by dragging this icon <img class="msPinSite" width="64" height="64" src="' + BBC.adverts.getImgRoot() + 'bbc_icon_64px.gif" alt="BBC logo" /> to the bottom of the screen</p><a id="iePinClose">Close<span></span></a></div>';
                        bW.innerHTML = bV;
                        document.body.insertBefore(bW, document.body.firstChild);
                        aF("bbccom_iePin");
                        var bX = document.getElementById("iePinClose");
                        a.events.addListener(bX, "click", function() {
                            document.getElementById("iePinnedSiteBar").parentNode.removeChild(document.getElementById("iePinnedSiteBar"));
                            aH("bbccom_iePin");
                            BBC.adverts.createCookie("hideIePinnedSite", "1", 365)
                        })
                    }
                })
            };
            var a6 = function() {
                var bV, bW = "ads_embedded";
                if (!V && bC === false && bm.ads) {
                    try {
                        aF(bW);
                        V = true
                    } catch (bX) {}
                }
            };
            return {
                init: function(bW) {
                    t(bW);
                    var bV = ao(["Headline", "Description"]);
                    O = y() + bV.Headline + " " + bV.Description;
                    U();
                    bbcdotcom.advert.zone.init(bq, ad[aV]);
                    be();
                    bI();
                    N();
                    aS();
                    by();
                    bp();
                    a.ready(function() {
                        aF("bbccom_desktop")
                    })
                },
                setGvl3: function(bV) {
                    m = bV
                },
                setAdsBlocked: function(bV) {
                    bC = bV
                },
                getZoneData: function() {
                    return bm
                },
                getAdvertTag: function(bY, bV, bX, bW) {
                    return bP(bY, bV, bX, bW)
                },
                getAdvertLabel: function(bV) {
                    return aw(bV)
                },
                getAdKeyword: function() {
                    return aJ()
                },
                getMetaData: function(bV) {
                    var bZ, b0, bY = {}, bX, bW;
                    for (bX = 0; bX < bV.length; bX++) {
                        bZ = window[br + bV[bX]];
                        if (bZ) {
                            for (bW in bZ) {
                                b0 = encodeURIComponent(bZ[bW].replace(/\s+/g, ""));
                                if (b0.length > 0 && b0.length <= 64) {
                                    bY[bV[bX] + "_" + bW] = b0
                                }
                            }
                        }
                    }
                    return bY
                },
                getSectionPath: function() {
                    var bV = W.replace(aP.news.old, aP.news.refresh);
                    bV = bV.replace(aP.sport.old, aP.sport.refresh);
                    return bV.substring(1).replace(/\/[0-9]*$/, "")
                },
                setZone: function(bV) {
                    var bW = ap();
                    var bZ = ad[bs];
                    var bX = ad[bH];
                    var bY = {
                        keyValues: {},
                        labels: {},
                        slots: {}
                    };
                    var b0 = function(b6, b8) {
                        var b3, b4, b1, b7;
                        for (b3 in b8.data) {
                            if (b3 === bw) {
                                for (b4 in b8.data.keyValues) {
                                    bY.keyValues[b4] = b8.data.keyValues[b4]
                                }
                            } else {
                                if (b3 === g) {
                                    for (b1 in b8.data.labels) {
                                        bY.labels[b1] = b8.data.labels[b1]
                                    }
                                } else {
                                    if (b3 === bA) {
                                        for (b7 in b8.data.slots) {
                                            bY.slots[b7] = b8.data.slots[b7]
                                        }
                                    } else {
                                        bY[b3] = b8.data[b3]
                                    }
                                }
                            }
                        }
                        if (b8.zones) {
                            var b2 = b8.zones.length;
                            var b5;
                            while (b2--) {
                                b5 = new RegExp(b6 + b8.zones[b2].uri, "g");
                                if (b5.test(bW)) {
                                    return b0(b6 + b8.zones[b2].uri, b8.zones[b2])
                                }
                            }
                        }
                        return bY
                    };
                    if (bZ.indexOf(".external.")!==-1) {
                        bW = "/" + bZ + bW
                    } else {
                        if (document.location.host.indexOf("london2012.bbc.")!==-1) {
                            bW = "/sport2/hi/olympics/2012" + bW
                        } else {
                            if (bZ.indexOf("bbcearth.com")!==-1) {
                                bW = "/" + bZ + bW
                            } else {
                                if ((bW === "/") || bW.indexOf("/wwhp")!==-1 || bW.indexOf("/wwhomepage")!==-1 || bW.indexOf("/wwhomepage-us")!==-1 || bW.indexOf("/wwhomepage-asia")!==-1 || bW.indexOf("/wwhomepage-international")!==-1) {
                                    bW = "/home/"
                                }
                            }
                        }
                    }
                    bm = bV.process(b0(aB, bV.zones), bZ, bW, bX);
                    e();
                    bx = bbcdotcom.advert.site.setSite(bm.site, location)
                },
                addKeyValue: function(bV, bW) {
                    bm.keyValues[bV] = bW
                },
                setSlotSize: function(bW, bV) {
                    if (typeof bm.slotSize === "undefined") {
                        bm.slotSize = {}
                    }
                    bm.slotSize[bW] = bV
                },
                enableSlot: function(bV) {
                    if (typeof bm.slots === "undefined") {
                        bm.slots = {}
                    }
                    bm.slots[bV] = true
                },
                disableSlot: function(bV) {
                    if (typeof bm.slots === "undefined") {
                        bm.slots = {}
                    }
                    bm.slots[bV] = false
                },
                getSlotSize: function(bV) {
                    if (typeof bm.slotSize !== "undefined") {
                        return bm.slotSize[bV]
                    } else {
                        return false
                    }
                },
                setRefresh: function(bV) {
                    if (typeof bm.refresh === "undefined") {
                        bm.refresh = {}
                    }
                    bm.refresh[bV] = true
                },
                getRefresh: function(bV) {
                    if (typeof bm.refresh !== "undefined") {
                        return bm.refresh[bV]
                    } else {
                        return false
                    }
                },
                getZoneName: function() {
                    return ad[aV]
                },
                checkWrite: function(bV) {
                    if (bC === false && bm.ads) {
                        if ((!bm.slots || (bm.slots[bV] !== false)) && ad[bV] !== aD) {
                            ad[bV] = bG;
                            return true
                        } else {
                            bf(bV)
                        }
                        return false
                    } else {
                        bf(bV)
                    }
                    return false
                },
                writeAttr: function(bW, bV) {
                    if (bC === false && bm.ads) {
                        if (!bm.styles || (typeof(bm.styles[bV]) === "undefined")) {
                            return false
                        }
                        return bm.styles[bV][bW]
                    }
                    return false
                },
                hasStyles: function() {
                    if (!bm.styles || (typeof(bm.styles) === "undefined")) {
                        return false
                    }
                    return true
                },
                getNewsTimestamp: function() {
                    var bV = document.getElementsByName("OriginalPublicationDate");
                    if (0 === bV.length) {
                        bV = document.getElementsByName("DCTERMS.created")
                    }
                    if (1 <= bV.length) {
                        if (typeof bV.content !== "undefined" && bV.content !== "") {
                            var bW = bV[0].content.match(/\d+/g);
                            return + new Date(bW[0], bW[1] - 1, bW[2], bW[3], bW[4], bW[5])
                        }
                    }
                    return false
                },
                show: function(bW, bV) {
                    if (P !== undefined) {
                        P();
                        P = undefined
                    }
                    if (bbcdotcom.objects("moveAds." + bW, "valid", bm)) {
                        BBC.adverts.moveAd(bW, bm.moveAds[bW])
                    }
                    if (parseInt(BBC.adverts.getNewsTimestamp(), 10) < parseInt(1360195208000, 10)) {
                        bbcdotcom.branding.init(BBC.adverts.getZoneData().zone.replace(/[^\w\-]/gi, ""), BBC.adverts.getAdKeyword());
                        bbcdotcom.branding.write()
                    }
                    if (ad[bW] === bG) {
                        if (o(bW)) {
                            if (bW !== "leaderboard" || bW === aD || (bW === "leaderboard" && (typeof ad.interstitial === "undefined" || ad.interstitial === aD))) {
                                BBC.adverts.close(bW);
                                return false
                            }
                        }
                        BBC.adverts.removeDisplayNone(bW, bV);
                        return true
                    }
                    return false
                },
                showPartnerButtons: function() {
                    var b0, bY = true;
                    for (b0 = 1; b0 <= 8; b0++) {
                        var bZ = "partner_button" + b0;
                        var bW = a.dom.get("#" + br + bZ + " img");
                        var bX = bW.attr("src");
                        var bV = bbcdotcom.advert.adRegister["partner_button" + b0];
                        if (typeof(bX) !== "undefined" && bX !== null && bX.match(aX)) {
                            continue
                        } else {
                            if (typeof bV !== "undefined"&&!bV.isCloseAd()) {
                                bY = false
                            }
                        }
                    }
                    if (!bY) {
                        BBC.adverts.removeDisplayNone("partner_buttons")
                    }
                },
                removeDisplayNone: function(b0, bY) {
                    var bX = "", bZ = (bY === undefined) ? br + b0: bY, bV = document.getElementById(bZ).className;
                    if ( - 1 === bV.indexOf(b0 + "_v")) {
                        if (s && ai === bl) {
                            bX = b0 + bJ[0]
                        } else {
                            if (s && ai !== bl) {
                                bX = b0 + bJ[1]
                            } else {
                                bX = b0 + bJ[2]
                            }
                        }
                    }
                    if (document.getElementById(bZ) !== null && "undefined" !== typeof document.getElementById(bZ)) {
                        if ("bbccom_visibility_show" !== bV) {
                            document.getElementById(bZ).className = document.getElementById(bZ).className.replace(ba, "") + " " + bX
                        } else {
                            document.getElementById(bZ).className = document.getElementById(bZ).className + " " + bX
                        }
                    }
                    var bW = b0.match(/^module_([a-z]+)$/);
                    if (bW && document.getElementById(br + bZ) !== null) {
                        document.getElementById(br + bZ).className = "bbccom_module"
                    }
                },
                close: function(bV) {
                    ad[bV] = aD;
                    bf(bV);
                    aH(a0 + bV)
                },
                moveAd: function(bY, bV) {
                    var bW = br + bY;
                    var bX = br + bV;
                    P = function() {
                        if (av.indexOf(bY)===-1 && a.dom.get("#" + bX).length > 0) {
                            var b2 = a.dom.get("#" + bW);
                            var b0 = a.dom.get("#" + bX);
                            var bZ = a.dom.get("#" + bW + " script");
                            var b1;
                            b2.get("script").remove();
                            if (typeof(bZ) !== "undefined" && typeof(bZ[1]) !== "undefined") {
                                b1 = b2.html() + '<span class="bbccom_display_none bbccom_script_url">' + bZ[1].getAttribute("src") + "</span>";
                                b0.html(b1)
                            } else {
                                b1 = b2.html();
                                b0.html(b1)
                            }
                            if (ad[bV] === "yes") {
                                b0.removeClass(ba)
                            }
                            av += bY + ",";
                            a.dom.get("#" + bW).remove()
                        }
                    };
                    if (document.getElementById(bW) !== null && document.getElementById(bX) !== null) {
                        if (this.adIsMovable(bY)) {
                            P()
                        }
                    } else {
                        if (this.adIsMovable(bY)) {
                            bf(bY);
                            bU.push({
                                source: bY,
                                destination: bV
                            })
                        }
                    }
                },
                moveCallback: function(bX) {
                    var bV = bU.length, bW = 0;
                    for (bW; bW < bV; bW++) {
                        if (bU[bW].destination === bX) {
                            this.moveAd(bU[bW].source, bU[bW].destination);
                            bU.splice(bW, 1)
                        }
                    }
                },
                adIsMovable: function(bW) {
                    var bV = false;
                    if (typeof bm.movable !== "undefined" && typeof bm.movable[bW] !== "undefined") {
                        if (bm.movable[bW] === true) {
                            bV = true
                        }
                    }
                    return bV
                },
                refreshAds: function(bZ) {
                    var b0 = Math.round(new Date().getTime() / 1000), bY, bX;
                    if (b0 < (ac + bi)) {
                        return false
                    }
                    if (typeof(bZ) === "undefined" && typeof(bm.refresh) !== "undefined") {
                        bZ = [];
                        for (bX in bm.refresh) {
                            bZ.push(bX)
                        }
                    }
                    if (typeof(bZ) === "undefined" || bZ.length === 0) {
                        return false
                    }
                    bT = "";
                    j = 14;
                    while (j--) {
                        bT += (Math.floor(Math.random() * 10))
                    }
                    for (bX in bZ) {
                        if (J([bZ[bX]])) {
                            ad[bZ[bX]] = bG;
                            BBC.adverts.show(bZ[bX]);
                            var bV = document.getElementById(br + bZ[bX] + "_iframe");
                            var b1 = a.dom.create(bP(bZ[bX], {}, "iframe"));
                            var bW = bV.parentNode;
                            bW.replaceChild(b1[0], bV)
                        }
                    }
                    ac = b0;
                    return true
                },
                sponsorSharetools: function(bW, bV) {
                    if (!(typeof bW === "object" && bW.hasOwnProperty("VERSION") && parseFloat(bW.VERSION) >= 1) || typeof bV === "undefined" || bV.length === 0) {
                        return 
                    }
                    bW.onReady = function() {
                        if (!(bW.hasOwnProperty("sharePanel") && bW.hasOwnProperty("toolbars"))) {
                            return 
                        }
                        var bX = a.dom.get(bW.sharePanel.getFooter());
                        if (!bX) {
                            return 
                        }
                        bW.sharePanel.onShow = function() {
                            var b1 = bW.toolbars, b0, bZ, bY, b2;
                            for (b2 in b1) {
                                if (M(bV, b2) && b1[b2].isPanelShowing) {
                                    b0 = b1[b2].id;
                                    break
                                }
                            }
                            if (!b0) {
                                return 
                            }
                            bY = a.dom.get("#" + b0);
                            bZ = bY.data("sponsor");
                            if (!bZ) {
                                switch (b0) {
                                case bV[0]:
                                    bZ = bP("module_page-bookmark-links-top", {
                                        is_module: "true",
                                        module: "page-bookmark-links-top"
                                    }, "iframe", "module_page-bookmark-links-top");
                                    break;
                                case bV[1]:
                                    bZ = bP("module_page-bookmark-links", {
                                        is_module: "true",
                                        module: "module_page-bookmark-links"
                                    }, "iframe", "module_page-bookmark-links-footer");
                                    break
                                }
                                bY.data("sponsor", bZ)
                            }
                            bX.html(bZ)
                        };
                        bW.sharePanel.onAfterHide = function() {
                            bX.empty()
                        }
                    }
                },
                setPageVersion: function(bV) {
                    s = true;
                    if (bV === "4") {
                        ai = bV
                    }
                },
                getPageVersion: function() {
                    return ai
                },
                empCompanion: function(bW) {
                    var bV = bP("preroll", undefined, undefined, undefined, bW);
                    return bV
                },
                createElement: function(bX, bW) {
                    bX = document.createElement(bX);
                    var bV;
                    for (bV in bW) {
                        bX.setAttribute(bV, bW[bV])
                    }
                    return bX
                },
                setScriptRoot: function(bV) {
                    bq = bV
                },
                setImgRoot: function(bV) {
                    a3 = bV
                },
                setVideoAds: function(bV) {
                    var bW = this.createElement("video", {
                        controls: "controls",
                        src: bV
                    });
                    var bX = document.getElementById("bbccom_video");
                    bX.appendChild(bW)
                },
                getV6Gvl3: function() {
                    return an
                },
                getNewsGvl3: function() {
                    return (an && "undefined" !== typeof(bbc) && "undefined" !== typeof(bbc.fmtj) && "undefined" !== typeof(bbc.fmtj.page) && "undefined" !== typeof(bbc.fmtj.page.siteToServe) && "news" === bbc.fmtj.page.siteToServe)
                },
                getScriptRoot: function() {
                    return bq
                },
                getImgRoot: function() {
                    return a3
                },
                getPredicates: function() {
                    return H()
                },
                getSectionUrl: function() {
                    return W
                },
                getConfig: function() {
                    return ad
                },
                getAdSlotsRegistered: function() {
                    return T
                },
                getAdOids: function() {
                    var bZ = [], bX, b2, b1, bW, bY, b0, bV;
                    for (bX = 0, b2 = T.length; bX < b2; bX++) {
                        b1 = T[bX];
                        bW = w(b1);
                        if (typeof(bW) !== "undefined" && typeof(bW.oid) !== "undefined") {
                            bY = bW.oid;
                            b0 = new RegExp(/.*\{([0-9])\}.*/);
                            bV = b0.exec(bY);
                            if (null !== bV) {
                                bY = bY.replace(/\{[0-9]+\}/, b1.substring(b1.length - bV[1]))
                            }
                            bZ.push(bY)
                        }
                    }
                    return bZ.join("|")
                },
                createCookie: function(bX, bY, bZ) {
                    var bV;
                    if (bZ) {
                        var bW = new Date();
                        bW.setTime(bW.getTime() + (bZ * 24 * 60 * 60 * 1000));
                        bV = "; expires=" + bW.toGMTString()
                    } else {
                        bV = ""
                    }
                    document.cookie = bX + "=" + bY + bV + "; path=/"
                },
                readCookie: function(bW) {
                    var bY = bW + "=";
                    var bV = document.cookie.split(";");
                    var bX;
                    for (bX = 0; bX < bV.length; bX++) {
                        var bZ = bV[bX];
                        while (bZ.charAt(0) === " ") {
                            bZ = bZ.substring(1, bZ.length)
                        }
                        if (bZ.indexOf(bY) === 0) {
                            return bZ.substring(bY.length, bZ.length)
                        }
                    }
                    return null
                },
                eraseCookie: function(bV) {
                    BBC.adverts.createCookie(bV, "", - 1)
                },
                write: h,
                loadGPTProxy: aA,
                loadGPTSDK: by,
                resetSlotForGpt: bL,
                resetAdSlot: ae,
                slideSlotOpen: bD,
                slideSlotClosed: bc,
                addDomChangeListener: aN,
                adTextWrapper: aW,
                setAdvertLabelLink: Z,
                setAdvertLabelText: L,
                loadInterstitial: q,
                closeInterstitial: f,
                setData: aC,
                getMetaTags: ao,
                isActive: bd,
                isNewsPage: a1,
                addBodyClass: aF,
                removeBodyClass: aH,
                isCreamDataPresent: x
            }
        }())
    }
});
bbcdotcom.isDefined = function(b, d) {
    var a, c;
    a = b.split(".");
    if (d === undefined) {
        d = window
    }
    for (c = 0; c < a.length; c++) {
        if (d[a[c]] === undefined) {
            return false
        }
        d = d[a[c]]
    }
    return true
};
bbcdotcom.av = {};
bbcdotcom.av.emp = {};
bbcdotcom.av.emp.endSlate = (function() {
    function a(g, f, d) {
        var c = d || {}, b = {}, e = bbcdotcom.config.getSwfPrefix() + "/bbcdotcom/SmpEndSlate.swf";
        if (f.loadPlugin !== undefined && typeof f.loadPlugin === "function") {
            b = {
                name: "EndSlatePluginParameters",
                data: {}
            };
            f.loadPlugin({
                swf: e
            }, b)
        }
    }
    return {
        addSmpPlugin: a
    }
}());
bbcdotcom.av.emp.adverts = (function() {
    var p, o;
    p = {
        companion: {
            slot: "companion",
            size: "300x60",
            type: "adi",
            domId: "bbccom_companion"
        },
        mpu: {
            slot: "mpu",
            size: "300x250",
            type: "adi",
            domId: "bbccom_mpu"
        }
    };
    o = {
        media_asset: [p.companion, p.mpu],
        "default": [p.companion],
        video: [p.mpu],
        blog: [p.mpu],
        homepage: []
    };
    var q = [];
    function r(x) {
        var u = new RegExp(x + "=(.*?)(?:;|$)");
        var w = u.exec(document.cookie);
        var v = (w && w.length ? w[1] : false);
        return v
    }
    function n() {
        BBC.adverts.loadGPTProxy()
    }
    function l() {
        var u, w, y = "", x, v = bbcdotcom.av.emp.adverts.getCompanionSlots(w);
        if (typeof v !== "undefined") {
            for (x in v) {
                if (v.hasOwnProperty(x)) {
                    y += v[x].size + ","
                }
            }
            y = y.slice(0, - 1)
        }
        if (BBC !== undefined && BBC.adverts !== undefined) {
            u = BBC.adverts.empCompanion(y);
            if (typeof u === "string") {
                u = u.replace(/cust_params=([^&]*)/, function(A, z) {
                    return "cust_params=" + encodeURIComponent(z)
                })
            }
        } else {
            if (bbcdotcom !== undefined && bbcdotcom.advert !== undefined && bbcdotcom.advert.getPrerollAdTag) {
                u = bbcdotcom.advert.getPrerollAdTag(bbcdotcom.adUnit)
            }
        }
        return u
    }
    function f(w) {
        var v = bbcdotcom.av.emp.adverts.getCompanionSlotId(w);
        var u = bbcdotcom.av.emp.adverts.getCompanionSlots(v);
        bbcdotcom.av.emp.adverts.defineCompanionSlots(u)
    }
    function d(w) {
        var v, u;
        v = w.split("-");
        if (v.length === 1) {
            v = w.split("_")
        }
        if (v.length >= 2) {
            u = v[1]
        } else {
            u = false
        }
        return u
    }
    function t(w) {
        var u = [], v;
        for (v = 0; v < w.length; v++) {
            u[v] = {};
            u[v].slot = w[v].slot;
            u[v].size = w[v].size;
            u[v].type = w[v].type;
            u[v].domId = w[v].domId
        }
        return u
    }
    function g(z) {
        var y, x, w, v;
        var u = BBC.adverts.getZoneData();
        if (window.wwhomepage) {
            y = t(o.homepage)
        } else {
            if (BBC.adverts.isCreamDataPresent() && bbcdotcom.objects("bbc.fmtj.page.assetType")) {
                if (o[bbc.fmtj.page.assetType] !== undefined) {
                    y = t(o[bbc.fmtj.page.assetType])
                } else {
                    y = t(o["default"])
                }
            } else {
                if (bbcdotcom.objects("keyValues.asset_type", "valid", u) && u.keyValues.asset_type === "video") {
                    y = t(o[u.keyValues.asset_type])
                } else {
                    if (bbcdotcom.objects("keyValues.companion_slots", "valid", u)) {
                        w = u.keyValues.companion_slots.split(",");
                        v = [];
                        for (x = 0; x < w.length; x++) {
                            v.push(p[w[x]])
                        }
                        y = t(v)
                    } else {
                        y = t(o["default"])
                    }
                }
            }
        }
        if (z) {
            for (x = 0; x < y.length; x++) {
                if (y[x].slot === "companion") {
                    y[x].domId = y[x].domId + "_" + z
                }
            }
        }
        return y
    }
    function i(x) {
        var u = "", v, w;
        for (v = 0; v < x.length; v++) {
            w = "";
            w += "slot:" + x[v].slot + "|";
            w += "size:" + x[v].size + "|";
            w += "type:" + x[v].type + "|";
            w += "domId:" + x[v].domId + ";";
            u += w
        }
        return u
    }
    function s(v) {
        var u = [], z, y, w, A, x;
        z = v.split(";");
        for (y = 0; y < z.length; y++) {
            if ("" !== z[y]) {
                u[y] = {};
                A = z[y].split("|");
                for (w = 0; w < A.length; w++) {
                    x = A[w].split(":");
                    u[y][x[0]] = x[1]
                }
            }
        }
        return u
    }
    function m(v, u) {
        return function() {
            BBC.adverts.resetSlotForGpt(v, u)
        }
    }
    function c(v, u) {
        return (" " + v.className + " ").indexOf(" " + u + " ")>-1
    }
    function j(w) {
        var v, z, y, x, u;
        for (v = 0; v < w.length; v++) {
            z = w[v].slot;
            y = w[v].domId;
            x = {
                slotDomId: y
            };
            u = document.getElementById(y);
            if (u && q.join(",").indexOf(z)===-1) {
                q.push(z);
                if (!c(u, "bbccom_display_none")&&!c(u, "bbccom_visibility_hidden")) {
                    BBC.adverts.slideSlotClosed(z, x, m(z, x))
                } else {
                    BBC.adverts.resetSlotForGpt(z, x)
                }
            }
        }
    }
    function h(v, x) {
        var w, u;
        if (x !== undefined && x.length > 0) {
            w = i(x);
            v.set("companions", w);
            for (u = 0; u < x.length; u++) {
                v.set("companion" + (u + 1) + "Size", x[u].size);
                v.set("companion" + (u + 1) + "Type", x[u].type);
                v.set("companion" + (u + 1) + "Id", x[u].domId)
            }
        }
    }
    function e(w) {
        var x, v, u;
        u = l();
        if (u) {
            w.set("preroll", u);
            x = d(w.getDomId());
            v = g(x);
            h(w, v);
            if (BBC.adverts.isNewsPage()) {
                j(v)
            }
        }
    }
    function a(A, x) {
        var z;
        var w = l() + "&ad_rule=1";
        var y = bbcdotcom.config.getCssPrefix() + "/SmpAds.css";
        var v = r("bbcdotcomHtml5AdsDebug");
        var u = {
            name: "AdsPluginParameters",
            data: {
                playerDomId: A,
                adTag: w,
                bbcdotcom: bbcdotcom,
                debug: v,
                cssPath: y
            }
        };
        for (z in x) {
            u.data[z] = x[z]
        }
        return u
    }
    function b(v, u) {
        var w = u.settings();
        w.suppressItemKind = v;
        u.settings(w);
        return u
    }
    function k(v, w, u) {
        var B = w.bumpVersion.split("."), C = B[0], A = B[1], y = B[2], D, E = u || {}, x = bbcdotcom.config.getJsPrefix() + "/bbcdotcom/SmpAds.js", z;
        if (u && u.html5PluginPath) {
            x = bbcdotcom.config.getJsPrefix() + u.html5PluginPath
        }
        if (C >= 3 && ((A >= 1 && y >= 10) || (A >= 2))) {
            z = bbcdotcom.config.getSwfPrefix() + "/bbcdotcom/SmpAds.swf"
        } else {
            z = bbcdotcom.config.getSwfPrefix() + "/bbcdotcom/SmpAds-1.7.swf"
        }
        if (w.loadPlugin !== undefined && typeof w.loadPlugin === "function") {
            D = a(v, E);
            w.loadPlugin({
                html: x,
                swf: z
            }, D)
        }
        b(["ident"], w)
    }
    return {
        getPrerollAdTag: l,
        setupCompanionSlots: f,
        enableCompanions: n,
        getCompanionSlotId: d,
        getCompanionSlots: g,
        encodeCompanionSlots: i,
        decodeCompanionSlots: s,
        defineCompanionSlots: j,
        setCompanionFlashVars: h,
        playerBeforeEachWrite: e,
        addSmpPlugin: k
    }
}());
if ("undefined" !== typeof embeddedMedia && "undefined" !== typeof embeddedMedia.eachWrite) {
    embeddedMedia.eachWrite(function() {
        bbcdotcom.av.emp.adverts.playerBeforeEachWrite.apply(bbcdotcom.av.emp.adverts, arguments)
    })
}
bbcdotcom.av.emp.events = {
    register: {
        onPlaybackProgress: function(a) {
            if (this.evLock) {
                this.evLock = false;
                this.call("getItem", [this.domId], "getItemKind");
                this.metadata.mediaLength = a.duration;
                this.metadata.mediaId = this.attrs.id;
                this.metadata.adId = null;
                bbcdotcom.av.emp.analytics.callback("mediaStarted", this.metadata);
                this.metadata.mediaOffset = 0;
                bbcdotcom.av.emp.analytics.callback("mediaPlaying", this.metadata)
            } else {
                this.metadata.mediaOffset = a.progress
            }
        },
        onPlaylistStarted: function(a) {
            this.metadata.mediaName = a.title;
            this.metadata.mediaPlayerName = a.version;
            if (!BBC.adverts.isNewsPage()) {
                var b = bbcdotcom.av.emp.adverts.getCompanionSlotId(this.getDomId());
                var c = bbcdotcom.av.emp.adverts.getCompanionSlots(b);
                bbcdotcom.av.emp.adverts.defineCompanionSlots(c)
            }
        },
        onPlaylistCompleted: function(a) {
            bbcdotcom.av.emp.analytics.callback("playlistCompleted", this.metadata)
        },
        onMediaCompleted: function(a) {
            this.evLock = true;
            bbcdotcom.av.emp.analytics.callback("mediaCompleted", this.metadata)
        },
        cueItem: function(a) {
            this.call("getItem", [this.domId], "getItemKind")
        }
    },
    playerBeforeEachWrite: function(a) {
        a.onMediaPlayerInitialised = function() {
            var b;
            for (b in bbcdotcom.av.emp.events.register) {
                a.evLock = true;
                a.register(b);
                a[b] = bbcdotcom.av.emp.events.register[b];
                a.getItemKind = bbcdotcom.av.emp.events.setMediaType;
                a.metadata = {}
            }
        }
    },
    setMediaType: function(a) {
        this.metadata.mediaType = a.item.kind
    }
};
if ("undefined" !== typeof embeddedMedia && "undefined" !== typeof embeddedMedia.eachWrite) {
    embeddedMedia.eachWrite(bbcdotcom.av.emp.events.playerBeforeEachWrite)
}
bbcdotcom.av.emp.analytics = {
    playlistStarted: false,
    seeking: false,
    callback: function(a, b) {
        switch (a) {
        case"mediaStarted":
            scw.startMovie(b);
            break;
        case"mediaPlaying":
            bbcdotcom.av.emp.analytics.trackComscore(b);
            scw.playMovie(b);
            break;
        case"mediaCompleted":
            scw.stopMovie(b);
            break;
        case"playlistCompleted":
            scw.endMovie(b);
            break
        }
    },
    trackComscore: function(b) {
        var a = (bbcdotcom.objects("scw.prop6")) ? scw.prop6: "other";
        if ("advert" === b.mediaType) {
            COMSCORE.beacon({
                c1: 1,
                c2: "6035051",
                c3: a,
                c4: "",
                c5: "09",
                c6: "",
                c15: ""
            })
        } else {
            if ("programme" === b.mediaType) {
                COMSCORE.beacon({
                    c1: 1,
                    c2: "6035051",
                    c3: a,
                    c4: "",
                    c5: "02",
                    c6: "",
                    c15: ""
                })
            }
        }
    },
    addEventListeners: function(c) {
        var j = this, i = {};
        var d = false;
        var e = false;
        var k = false;
        var b = false;
        var h = false;
        var g = [10, 50];
        function a(m) {
            var l = m.settings();
            i.mediaType = m.kind();
            i.mediaOffset = m.currentTime();
            i.mediaLength = m.duration();
            i.mediaPlayerName = m.name();
            i.adId = null;
            i.mediaId = bbcdotcom.objects("settings.container.0.id");
            return i
        }
        function f() {
            var l = Math.round((i.mediaOffset / i.mediaLength) * 100);
            if (g.indexOf(l)!==-1 && i.milestones.indexOf(l)===-1) {
                i.milestones.push(l);
                return false
            } else {
                return true
            }
        }
        c.bind("playlistLoaded", function(l) {
            if (l.playlist !== undefined) {
                i.mediaName = l.playlist.title;
                i.milestones = [];
                e = true
            }
        });
        c.bind("userPlay", function(l) {
            k = true
        });
        c.bind("adStarted", function(l) {});
        c.bind("adEnded", function(l) {});
        c.bind("timeupdate", function(l) {
            a(c);
            if (!d && e && (c.decide() === "smp-flash" || k || b)) {
                j.callback("mediaStarted", i);
                d = true
            } else {
                if (e && (c.decide() === "smp-flash" || k || b)) {
                    if (!h) {
                        j.callback("mediaPlaying", i);
                        h = true
                    }
                    h = f(i)
                }
            }
        });
        c.bind("ended", function(l) {
            a(c);
            j.callback("mediaCompleted", i);
            i.milestones = [];
            h = false
        });
        c.bind("playlistEnded", function(l) {
            a(c);
            j.callback("playlistCompleted", i)
        })
    }
};
bbcdotcom.advert = {};
bbcdotcom.advert.adFactory = (function() {
    return {
        createAd: function(a) {
            bbcdotcom.advert.adRegister[a] = new bbcdotcom.advert.ad(a);
            return bbcdotcom.advert.adRegister[a]
        }
    }
}());
bbcdotcom.advert.ad = function(d) {
    var e = "bbccom_";
    var i, h, f, b = {
        original: false
    };
    h = d;
    var g = function() {
        var j = document.getElementById(e + h);
        if (typeof j !== "undefined" && j !== null) {
            return j.innerHTML.replace(/\s+/g, "")
        }
        return false
    };
    var c = function(j) {
        f = j
    };
    var a = function() {
        return f
    };
    b.original = g();
    return {
        isCloseAd: function() {
            var j = b.original;
            var k = g();
            c(j === k&&-1 === k.indexOf("iframe"));
            f = a();
            return f
        }
    }
};
bbcdotcom.advert.adRegister = {};
bbcdotcom.page = {
    getAdsenseChannel: function() {
        var a = bbcdotcom.advert.site.getSite();
        if (a.indexOf("bbcworldservice") === 0) {
            return "worldservice"
        } else {
            if (/.site.(flash|test|news|www)$/.test(a)) {
                return "globalnews"
            } else {
                return "worldwide"
            }
        }
    }
};
bbcdotcom.advert.network = (function() {
    var a = "4817";
    return {
        getNetwork: function() {
            return a
        }
    }
}());
bbcdotcom.advert.site = (function() {
    var b = {
        test: "bbccom.test.site.flash",
        live: "bbccom.live.site.news"
    }, a = b.live;
    return {
        setSite: function(c, d) {
            if (/[?|&]site=(\w+)(&|$)/.test(d)) {
                if (typeof b[RegExp.$1] !== "undefined") {
                    a = b[RegExp.$1];
                    return a
                }
            }
            a = c;
            return a
        },
        getSite: function() {
            return a
        }
    }
}());
bbcdotcom.advert.zone = {
    file: "3pt_zone_file",
    scriptRoot: "/",
    allowDomainOverride: false,
    init: function(a, b) {
        this.scriptRoot = a + "zones/";
        this.file = b;
        this.overrideRelativePath(window.location.search);
        this.overrideDomainPath(window.location.search);
        this.loadZoneFile()
    },
    overrideRelativePath: function(a) {
        if (/[?|&]zone=((?!preview)\w*\/*\w+)(&|$)/.test(a)) {
            this.file = RegExp.$1;
            return RegExp.$1
        }
        return false
    },
    overrideDomainPath: function(a) {
        if (/[?|&]zone=(http:\/\/.+(\.bbc\.co\.uk){1}.*(bbccom){1}.*\.js)(&|$)/.test(a)) {
            if (RegExp.$1.indexOf("/../")===-1) {
                this.allowDomainOverride = true;
                this.file = RegExp.$1;
                return RegExp.$1
            }
        }
        return false
    },
    getFile: function(a) {
        if (/[?|&]bbccom=test(&|$)/.test(a)) {
            return "zone.js.inc?zone=" + this.file
        }
        return this.file + ".js"
    },
    loadZoneFile: function() {
        var b = this.allowDomainOverride === true ? "": this.scriptRoot;
        var a = b + this.file + ".js";
        document.write('<script type="text/javascript" src="' + a + '"><\/script>')
    }
};
bbcdotcom.branding = (function() {
    var c = false, d = false, f = false, b = false, e = {
        firstperson: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_first_person.jpg",
            url: "/news/magazine-14633099"
        },
        firstpersonbigdreams: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_first_person_big_dreams.jpg",
            url: "/news/magazine-14633099"
        },
        click: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_click.jpg",
            url: "/programmes/n13xtmd5"
        },
        clickshorts: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_click.jpg"
        },
        picturethis: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_picture_this.jpg",
            url: "/news/magazine-14760628"
        },
        livingonline: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_living_online.jpg",
            url: "/news/magazine-14760626"
        },
        livethestory: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_live_the_story.jpg",
            url: "/news/world-radio-and-tv-21600986"
        },
        worldsnewsroom: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_world_news_room.jpg",
            url: "/news/world-radio-and-tv-20935361"
        },
        rab: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_running_a_business.jpg",
            url: "/news/business-16611973"
        },
        powerofart: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_power_of_art.jpg",
            url: "/news/magazine-21459225"
        },
        alteredstates: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_altered_states.jpg",
            url: "/news/magazine-14760627"
        },
        uselection: {
            imgUri: "http://" + document.domain + "/news/special/world/us_and_canada/11/us_election_banner/img/letterbox_976x80.jpg",
            url: "/news/world-us-canada-15949569"
        },
        jubilee: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_jubilee.jpg",
            url: "/news/uk-17500000",
            altTitle: "Back to Queen's Diamond Jubilee"
        },
        entrepreneurship: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_entrepreneurship_v2.jpg",
            url: "/news/business-22434141"
        },
        theboss: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_theboss_v2.jpg",
            url: "/news/business-22449886"
        },
        makingtime: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_escape_the_boardroom.jpg",
            url: "/news/magazine-24117219"
        },
        thinkingbusiness: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_thinkingbusiness_v2.jpg",
            url: "/news/business-22449887"
        },
        techbiz: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_technology_of_business.jpg",
            url: "/news/business-11428889"
        },
        ceoguru: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_ceo_guru_v2.jpg",
            url: "/news/business-20071226"
        },
        meettheteam: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_meet_the_team.jpg",
            url: "/news/world-radio-and-tv-23426239"
        },
        "100women": {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_100_women_2014.jpg",
            url: "/news/world-24371433"
        },
        businessoftennis: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_business_of_tennis.jpg",
            url: "/news/business-25319175"
        },
        nextsiliconvalleys: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_next_silicon_valley.jpg",
            url: "/news/technology-25852150"
        },
        businessofgiving: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_business_of_giving.jpg",
            url: "/news/business-19182463"
        },
        howtosucceedin: {
            imgUri: "http://" + document.domain + "/shared/img/bbccom/creative_how_to_suceed.jpg",
            url: "/news/business-29617902"
        }
    };
    var a = function(g) {
        switch (g) {
        case"news_rab_index":
            return "rab";
        case"news_powerofart_index":
            return "powerofart";
        case"news_alteredstates_index":
            return "alteredstates";
        case"news_firstperson_index":
            return "firstperson";
        case"news_livingonline_index":
            return "livingonline";
        case"news_worldradioandtv_index":
        case"news_livethestory_index":
            return "livethestory";
        case"news_picturethis_index":
            return "picturethis";
        case"news_clickonline_index":
            return "click";
        case"news_entrepreneurship_index":
            return "entrepreneurship";
        case"news_theboss_index":
            return "theboss";
        case"news_makingtime_index":
            return "makingtime";
        case"news_thinkingbusiness_index":
            return "thinkingbusiness";
        case"news_techofbusiness_content":
            return "techbiz";
        case"news_ceoguru_index":
            return "ceoguru";
        case"news_meettheteam_index":
            return "meettheteam";
        case"news_businessoftennis_index":
            return "businessoftennis";
        case"news_nextsiliconvalleys_index":
            return "nextsiliconvalleys";
        case"news_businessofgiving_index":
            return "businessofgiving";
        case"news_howtosucceedin_index":
            return "howtosucceedin"
        }
        return false
    };
    return {
        init: function(g, h) {
            if (h === "") {
                h = a(g)
            }
            if (h !== "") {
                this.brand = this.get(h)
            }
        },
        get: function(g) {
            if (typeof e[g] !== "undefined") {
                return e[g]
            }
            return false
        },
        write: function() {
            if (this.brand&&!b) {
                var i = document.createElement("div");
                i.className = "bbccom_custom_branding";
                var j = document.createElement("img");
                j.src = this.brand.imgUri;
                if ("undefined" !== typeof this.brand.altTitle) {
                    j.setAttribute("alt", this.brand.altTitle)
                }
                if ("undefined" !== typeof this.brand.url && window.location.pathname !== this.brand.url) {
                    var h = document.createElement("a");
                    h.href = this.brand.url;
                    if ("undefined" !== typeof this.brand.altTitle) {
                        h.setAttribute("title", this.brand.altTitle)
                    }
                    h.appendChild(j);
                    i.appendChild(h)
                } else {
                    i.appendChild(j)
                }
                var g = document.getElementById("bbccom_custom_branding");
                if (typeof g !== "undefined" && g !== null) {
                    g.appendChild(i);
                    b = true
                }
            }
        }
    }
}());
bbcdotcom.nativeStory = (function() {
    var e = false, a, c;
    function b() {
        if (BBC.adverts.getAdKeyword().indexOf("native-")!==-1) {
            e = true
        }
        return e
    }
    function d() {
        a = document.getElementById("storypage-container");
        c = document.createElement("div");
        c.id = "native-title-branding";
        c.innerHTML = 'Presented by <img src="http://wwwpreview.test.newsonline.tc.nca.bbc.co.uk/shared/img/bbccom/native-sap-small.jpg"/>';
        a.insertBefore(c, a.firstChild)
    }
    function f() {
        require(["jquery-1"], function(g) {
            g(function() {
                g("#article-sidebar").append('<div id="native-sidebar-branding"><img src="http://wwwpreview.test.newsonline.tc.nca.bbc.co.uk/shared/img/bbccom/native-sap-large.jpg" />SAP is the world\'s leading provider of business software. SAP is the world\'s leading provider of business software.</div>');
                g(".article .share-tools-footer").after("<div id=\"native-disclaimer\">SAP is the world's leading provider of business software. SAP is the world's leading provider of business software.</div>")
            })
        })
    }
    return {
        parentHasClass: function(g, j, h) {
            if (typeof j.parentNode !== "undefined" && j.parentNode.className.indexOf(h)!==-1) {
                return j.parentNode
            } else {
                if (10 > g) {
                    g++;
                    return this.parentHasClass(g, j.parentNode, h)
                }
            }
            return false
        },
        write: function(g) {
            var h;
            if (b()) {
                h = this.parentHasClass(0, g, "story-body");
                if (h) {
                    h.id = "native-story-body"
                }
                d();
                f()
            }
        }
    }
}());
bbcdotcom.survey = {
    adsEnabled: function() {
        return (bbcdotcom.data !== undefined) && ((bbcdotcom.data.a !== undefined && bbcdotcom.data.a === 1) || (bbcdotcom.data.ads !== undefined && bbcdotcom.data.ads === 1))
    },
    surveyEnabled: function() {
        return bbcdotcom.flag !== undefined && bbcdotcom.flag.s === 1
    },
    force: false,
    invite: function(j, i) {
        if (bbcdotcom.survey.adsEnabled() && bbcdotcom.survey.surveyEnabled()) {
            var k = j.cookie, e = window.location.href.toLowerCase(), h = 0, b = "IPE_BLOCK", a = function() {
                document.cookie = b + "=1"
            }, g = function(n, m) {
                var l = n.createElement("script"), f = "async", c = "defer";
                l.setAttribute(f, f);
                l.setAttribute(c, c);
                l.type = "text/javascript";
                l.src = m;
                n.getElementsByTagName("head")[0].appendChild(l)
            };
            if (e.search("bbc.co.uk/news")!==-1 || e.search("bbc.com/news")!==-1) {
                h = 15
            } else {
                if (e.search("bbc.co.uk/sport")!==-1 || e.search("bbc.com/sport")!==-1) {
                    h = 35
                } else {
                    if (e.search("bbc.co.uk/travel")!==-1 || e.search("bbc.com/travel")!==-1 || e.search("bbc.co.uk/travelnews")!==-1 || e.search("bbc.com/travelnews")!==-1 || e.search("bbc.com/future")!==-1 || e.search("bbc.com/autos")!==-1 || e.search("bbc.com/culture")!==-1 || e.search("bbc.com/capital")!==-1) {
                        h = 250
                    } else {
                        if (e.search(/bbc\.com\/?($|\?)/i)!==-1) {
                            h = 80
                        }
                    }
                }
            }
            if ((!bbcdotcom.survey.force) && (/(^|;)\s*IPE_BLOCK\s*=1/.test(k))) {
                return 
            }
            if (bbcdotcom.survey.force || (/(^|;)\s*IPE_FORCE\s*=1/.test(k))) {
                g(j, i);
                return 
            }
            if (Math.floor((Math.random() * 1000)) < h) {
                g(j, i)
            } else {
                a()
            }
        }
    },
    init: function() {
        this.invite(document, document.location.protocol + "//ips-invite.iperceptions.com/invitations/invitationsJS/115/s115604/gateway2.js")
    }
};
if ("undefined" !== typeof document && "undefined" !== typeof document.cookie && "undefined" !== typeof document.write) {
    (function() {
        var a = new Date();
        a.setDate(a.getDate() + 365);
        document.cookie = "ckpf_ww_mobile_js=on; path=/; domain=.bbc.co.uk; expires=" + a.toUTCString()
    }())
}
if ( - 1 !== window.location.hostname.indexOf("www.bbc.co")) {
    window.alert = function() {}
};
