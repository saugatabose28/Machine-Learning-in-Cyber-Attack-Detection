var DYO = DYO || {}, DY = DY || {};
DYO = function() {
    function escapeContServerVariationSet(a) {
        var b = experiments[a].variations.slice(0);
        for (var c = 0; c < b.length; c++) {
            b[c].id = b[c].id, typeof b[c].name != "undefined" && b[c].name != null && typeof b[c].__name_escaped_flag == "undefined" && (b[c].name = escape(b[c].name), b[c].__name_escaped_flag=!0);
            if (typeof b[c].weight == "undefined" ||!DYO.StringUtils.isN(b[c].weight))
                b[c].weight = null
        }
        return b
    }
    function escapeClientVariationSet(a) {
        var b = [];
        for (var c in a)
            if (a.hasOwnProperty(c)) {
                var d = new Object;
                d.id = escape(DYJSON.stringify(a[c].id)), typeof a[c].name != "undefined" && a[c].name != null && (d.name = escape(a[c].name)), typeof a[c].weight != "undefined" && DYO.StringUtils.isN(a[c].weight) && (d.weight = a[c].weight), b.push(d)
            }
        return b
    }
    function generateHash(a) {
        var b = a.slice(0);
        b.sort(function(a, b) {
            return a.id < b.id?-1 : a.id > b.id ? 1 : 0
        });
        var c = "";
        for (var d in b)
            b.hasOwnProperty(d) && (c += b[d].id, c += DYO.ExpUtils.verSep);
        var e = hashCode(c), f = "" + e;
        return f
    }
    function checkArrMatch(a, b) {
        for (var c in a)
            if (a.hasOwnProperty(c))
                for (var d in b)
                    if (b.hasOwnProperty(d) && a[c] == b[d])
                        return !0;
        return !1
    }
    function expNameToId(a) {
        for (var b in experiments)
            if (experiments.hasOwnProperty(b) && experiments[b].name.toLowerCase() == a.toLowerCase())
                return b;
        return null
    }
    function varNameToId(a, b) {
        if (experimentExists(a))
            for (var c = 0; c < experiments[a].variations.length; c++)
                if (experiments[a].variations[c].name.toLowerCase() == b.toLowerCase())
                    return experiments[a].variations[c].id;
        return null
    }
    function setForceCalculationOption(a) {
        if (typeof a == "undefined" || a == null)
            a = [];
        return a != null && (a[OPTION_FORCE_CALCULATION]=!0), a
    }
    function getForceCalculationOption(a) {
        var b=!1;
        return a != null && typeof a[OPTION_FORCE_CALCULATION] != "undefined" && a[OPTION_FORCE_CALCULATION] != null && (b = a[OPTION_FORCE_CALCULATION]), b
    }
    function setDebug(a) {
        debug = a, DYO.d = debug
    }
    function experimentExists(a) {
        return typeof experiments[a] != "undefined" && experiments[a] != null
    }
    function checkAudience(a) {
        if (experiments[a].audiences.length > 0) {
            var b = [];
            if (typeof DY == "undefined" || typeof DY.aud == "undefined")
                return !0;
            b = DY.aud.split(".");
            if (!(b.length > 0))
                return !1;
            checkArrMatch(experiments[a].audiences, b)
        }
        return !0
    }
    function calculateDist(a) {
        var b=!1;
        if (!checkAudience(a))
            b=!1;
        else {
            var c = Math.floor(Math.random() * 1001);
            c < experiments[a].traffic * 10 ? b=!0 : b=!1
        }
        return b
    }
    function setMultipleVariations(a, b, c, d, e) {
        var f = [], g = getCurrentVersionDataStr(a), h = experiments[a], i = DYO.Props.isControlGroupChoose(h, g, b), j = DYO.Props.MANUAL_MECHANISM, k = [DYO.ExpUtils.SUB_MECHANISM_NA], l = typeof e != "undefined" && e != null && typeof e.varArr != "undefined" && e.varArr != null && e.varArr.length >= d;
        if (!(d > c.length || d <= 0))
            if (i) {
                var m=!0;
                if (h.controlGroup.method == DYO.Props.CGM_RANDOM && c != null && c.length > 0)
                    f = DYO.Chooser.equalDecisions(c, d);
                else if (h.controlGroup.method == DYO.Props.CGM_PRESET_VARS && typeof h.controlGroup.varIds != "undefined") {
                    var n = "" + h.controlGroup.varIds, o = n.split(DYO.ExpUtils.variSep);
                    for (var p = 0; p < o.length && p < d; p++)
                        f.push({
                            id: o[p]
                        })
                    } else 
                        m=!1;
                        m && (j = DYO.Props.CONTROL_GROUP_MECHANISM, k = [l ? DYO.ExpUtils.SUB_MECHANISM_CG_WITH_PREDICT: DYO.ExpUtils.SUB_MECHANISM_CG_WITHOUT_PREDICT])
            } else if (l)
                f = e.varArr, j = DYO.Props.PREDICT_MECHANISM, typeof e.smechArr != "undefined" && e.smechArr != null && e.smechArr.length > 0 && (k = e.smechArr);
            else if (c != null && c.length > 0 && c[0].weight == null)
                f = DYO.Chooser.equalDecisions(c, d), j = DYO.Props.MANUAL_MECHANISM;
            else {
                if (d <= 1) {
                    var q = DYO.Chooser.weightedDecision(c);
                    q != null && q.loc != null && f.push(c[q.loc])
                } else 
                    c != null && c.length > 0 && (f = DYO.Chooser.wRandomChoose(c, d));
                    j = DYO.Props.getMechanismRepresentingWeights(h);
                    var r = DYO.Props.getSubMechanismRepresentingWeights(h);
                    r != null && (k = [r])
            }
        b = DYO.Props.resetVersionDataMechanism(b, j, k);
        var s = new Array, t = new Array;
        for (var p = 0; p < d && p < f.length; p++) {
            var u = typeof f[p].name != "undefined" && f[p].name != null;
            s[p] = {
                id: DYJSON.parse(unescape(f[p].id)),
                name: u ? unescape(f[p].name): ""
            }, t[p] = f[p].id + (u ? DYO.ExpUtils.verSep + f[p].name : "")
        }
        return setVariations(a, b, t), s
    }
    function calculateMultipleProgVariation(a, b) {
        var c = DYO.Props.expProgVersionData(experiments[a]), d = experiments[a].variations.slice(0), e = [];
        if (calculateDist(a)) {
            var f = getProgPredictionDecisions(a, c, d, b);
            e = setMultipleVariations(a, c, d, b, f)
        } else 
            setVariation(a, c, DYO.ExpUtils.notInExp), log("out of experiment");
        return e
    }
    function calculateMultipleContVariation(a, b, c, d) {
        var e = DYO.Props.expContVersionData(experiments[a], c), f = b.slice(0), g = [];
        if (calculateDist(a)) {
            experiments[a].variations.length > 0 && DYO.Props.verifyClientIdsOfServerAndClientSynced(experiments[a], c) && b.length == experiments[a].variations.length && (f = escapeContServerVariationSet(a));
            var h = getContPredictionDecisions(a, e, f, c, d);
            g = setMultipleVariations(a, e, f, d, h)
        } else 
            setVariation(a, e, DYO.ExpUtils.notInExp), log("out of experiment");
        return g
    }
    function getProgPredictionDecisions(a, b, c, d) {
        return getPredictionDecisions(a, b, c, d)
    }
    function getContPredictionDecisions(a, b, c, d, e) {
        if (DYO.Props.verifyClientIdsOfServerAndClientSynced(experiments[a], d))
            return getPredictionDecisions(a, b, c, e)
    }
    function getPredictionDecisions(a, b, c, d) {
        var e = DYO.Predict.getPrediction(a, DYO.Props.getVersionId(b));
        return typeof e != "undefined" && e != null && typeof e.varIdArr != "undefined" && e.varIdArr != null && e.varIdArr.length >= d ? (e.varArr = orderVariationsByPrediction(e.varIdArr, c, d), e) : null
    }
    function orderVariationsByPrediction(a, b, c) {
        var d = [], e = 0;
        for (var f = 0; f < a.length; f++)
            for (var g = 0; g < b.length; g++) {
                var h = b[g];
                if (a[f] == h.id) {
                    d.push(h), e++;
                    if (e == c)
                        return d;
                        break
                }
            }
        return d
    }
    function cleanupExperiments() {
        experimentTree = {}, cleanupTreeAndStore(DYO.ExpUtils.storageKey, experimentTree);
        var a = {};
        cleanupTreeAndStore(DYO.ExpUtils.storageAttKey, a), DYO.ExpStorageUtils.removeLocal("_dye_vil"), resetVariationsIgnoreList()
    }
    function cleanupTreeAndStore(a, b) {
        try {
            var c = getStoredExperiments(a);
            if (typeof c != "undefined" && c != "" && c != null) {
                var d = c.split(DYO.ExpUtils.expSep);
                for (var e = 0; e < d.length; e++)
                    try {
                        var f = d[e].split(DYO.ExpUtils.dataSep);
                        if (typeof experiments[f[0]] != "undefined") {
                            var g = f[1].split(DYO.ExpUtils.verSep);
                            if (DYO.Props.isStoredVersionValidDuringCleanup(experiments[f[0]], g)) {
                                if (f.length < 4) {
                                    var h = DYO.Props.getAttributionMethodForGet(experiments[expId]);
                                    d[e] = d[e] + DYO.ExpUtils.dataSep + h
                                }
                                b[f[0]] = d[e]
                            }
                        }
                } catch (i) {
                    log("error cleaning experiment " + d[e])
                }
                storeExperiments(a, b)
            }
        } catch (i) {
            log("error cleaning experiments")
        }
    }
    function storeExperiments(a, b) {
        var c = [];
        for (var d in b)
            b.hasOwnProperty(d) && c.push(b[d]);
        DYO.ExpStorageUtils.setLocal(a, c.join(DYO.ExpUtils.expSep))
    }
    function getStoredExperiments(a) {
        var b = DYO.ExpStorageUtils.getLocal(a);
        return b
    }
    function resetVariationsIgnoreList() {
        try {
            var a = getStoredExperiments(DYO.ExpUtils.storageKey), b = getStoredExperiments(DYO.ExpUtils.storageAttKey), c = a == null ? []: a.split(DYO.ExpUtils.expSep), d = [];
            for (var e = 0; e < c.length; ++e) {
                var f = c[e].split(DYO.ExpUtils.dataSep);
                if (f.length >= 4 && f[3] == DYO.ExpUtils.SELECTION) {
                    var g = f[2].split(DYO.ExpUtils.variSep);
                    for (var h = 0; h < g.length; h++) {
                        var i = g[h].split(DYO.ExpUtils.verSep)[0];
                        i != null && d.push(i)
                    }
                }
            }
            var j = b == null ? []: b.split(DYO.ExpUtils.expSep), k = {};
            for (var e = 0; e < j.length; ++e) {
                var f = j[e].split(DYO.ExpUtils.dataSep);
                if (f.length >= 4 && f[3] == DYO.ExpUtils.ATTRIBUTION) {
                    var g = f[2].split(DYO.ExpUtils.variSep);
                    for (var h = 0; h < g.length; h++) {
                        var i = g[h].split(DYO.ExpUtils.verSep)[0];
                        i != null && (k[i + ""] = 1)
                    }
                }
            }
            var l = {}, m = [];
            for (var h = 0; h < d.length; h++) {
                if (d[h] == "" || l.hasOwnProperty(d[h]) || k.hasOwnProperty(d[h]))
                    continue;
                m.push(d[h]), l[d[h]] = 1
            }
            DYO.ExpStorageUtils.setLocal("_dye_vil", m.join(DYO.ExpUtils.variSep))
        } catch (n) {
            log("error while resetVariationsIgnoreList")
        }
    }
    function removeFromVariationsIgnoreList(a) {
        try {
            if (typeof a == "undefined" || a == null || a.length <= 0)
                return;
            var b = getStoredExperiments(DYO.ExpUtils.storageKey), c = b == null ? []: b.split(DYO.ExpUtils.expSep);
            for (var d = 0; d < c.length; d++) {
                var e = c[d].split(DYO.ExpUtils.dataSep);
                if (e.length >= 4 && e[3] == DYO.ExpUtils.SELECTION) {
                    var f = e[2].split(DYO.ExpUtils.variSep);
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g].split(DYO.ExpUtils.verSep)[0];
                        for (var i = 0; i < a.length; ++i)
                            if (h == a[i]) {
                                storeAttributeVariations(e[0], e[1], a.join(DYO.ExpUtils.variSep));
                                return 
                            }
                    }
                }
            }
        } catch (j) {
            log("error while removeFromVariationsIgnoreList")
        }
    }
    function forceChooseVariation(a, b) {
        return b = setForceCalculationOption(b), chooseVariation(a, b)
    }
    function chooseVariation(a, b) {
        var c = chooseMultipleVariations(a, 1, b);
        if (c != null && c.length > 0 && c[0].id != null) {
            typeof a != "number" && (a = expNameToId(a));
            for (var d = 0; d < experiments[a].variations.length; d++)
                if (experiments[a].variations[d].id == c[0].id)
                    return d
        }
        return 0
    }
    function forceChooseMultipleVariations(a, b, c) {
        return c = setForceCalculationOption(c), chooseMultipleVariations(a, b, c)
    }
    function chooseMultipleVariations(a, b, c) {
        var d = [], e = getForceCalculationOption(c);
        typeof a != "number" && (a = expNameToId(a));
        if (experimentExists(a)) {
            d = e ? null : getDynamicVariations(a, DYO.Props.expProgVersionData(experiments[a]));
            if (d == null || d.length != b)
                d = calculateMultipleProgVariation(a, b);
            varRimpSelectedVariations(a, d)
        } else 
            log("non existing experiment");
        if (d != null && experiments[a] != null && experiments[a].autoExecuteAction)
            for (var f = 0; f < d.length; ++f)
                if (d[f] != null && d[f].id != null) {
                    var g = d[f].id;
                    executeVariation(parseInt(a), g)
                }
        return d
    }
    function forceChooseMultipleDynamicVariations(a, b, c, d) {
        return d = setForceCalculationOption(d), chooseMultipleDynamicVariations(a, b, c, d)
    }
    function chooseMultipleDynamicVariations(a, b, c, d) {
        var e = getForceCalculationOption(d);
        d == null || typeof d[OPTION_EXP_DEFAULT] == "undefined" || d[OPTION_EXP_DEFAULT] == null;
        var f = [];
        typeof a != "number" && (a = expNameToId(a));
        if (experimentExists(a)) {
            b = escapeClientVariationSet(b);
            var g;
            if (d != null && typeof d[OPTION_VARIATION_SET_ID] != "undefined" && d[OPTION_VARIATION_SET_ID] != null && d[OPTION_VARIATION_SET_ID].length != 0) {
                var h = "" + d[OPTION_VARIATION_SET_ID];
                g = h
            } else 
                g = generateHash(b);
            var i = DYO.Props.expContVersionData(experiments[a], g);
            f = e ? null : getDynamicVariations(a, i);
            if (f == null || f.length != c)
                f = calculateMultipleContVariation(a, b, g, c);
            varRimpSelectedVariations(a, f)
        } else 
            log("non existing experiment");
        return f
    }
    function forceChooseDynamicVariation(a, b, c) {
        return c = setForceCalculationOption(c), chooseDynamicVariation(a, b, c)
    }
    function chooseDynamicVariation(a, b, c) {
        var d = chooseMultipleDynamicVariations(a, b, 1, c);
        return d != null && d.length > 0 ? d[0] : null
    }
    function reportExperimentEvent(a) {
        try {
            typeof a != "number" && (a = expNameToId(a)), experimentExists(a) && DY.API("experiment", {
                name: experiments[a].name
            })
        } catch (b) {}
    }
    function getServerVariations(a) {
        return typeof a != "number" && (a = expNameToId(a)), experiments[a].variations
    }
    function getDynamicVariations(a, b) {
        var c = null, d = null, e = experimentTree[a];
        if (e != null) {
            var f = e.split(DYO.ExpUtils.dataSep), g = f[1].split(DYO.ExpUtils.verSep), h = b.split(DYO.ExpUtils.verSep);
            if (DYO.Props.isStoredVersionValidForChoose(experiments[a], g, h)) {
                d = f[2], c = new Array;
                if (d.length > 0) {
                    d = d.split(DYO.ExpUtils.variSep);
                    for (var i = 0; i < d.length; i++) {
                        var j = d[i].split(DYO.ExpUtils.verSep);
                        j.length > 0 && j[0].length > 0 && (c[i] = {
                            id: DYJSON.parse(unescape(j[0])),
                            name: typeof j[1] != "undefined" ? unescape(j[1]): ""
                        })
                    }
                }
            }
        }
        return c
    }
    function getVariationData(a) {
        var b = a, c = null;
        typeof a != "number" && (a = expNameToId(a));
        var d = experimentTree[a];
        if (d == null)
            return {
                code: 0,
                exp: b,
                msg: "experiment " + a + " is not defined"
            };
        var e = d.split(DYO.ExpUtils.dataSep), f = e[2].split(DYO.ExpUtils.verSep);
        c = f[0];
        var g = f[1];
        if (c == DYO.ExpUtils.notInExp)
            return {
                code: 0,
                exp: b,
                msg: "user not in experiment"
            };
        for (var h = 0; h < experiments[a].variations.length; h++)
            if (experiments[a].variations[h].id == c)
                return experiments[a].type == 0 && (g = experiments[a].variations[h].name), {
                    code: 1,
                    exp: b,
                    value: experiments[a].variations[h]
                };
        return {
            code: 0,
            exp: b,
            msg: "error getting variation data, check the experiment settings"
        }
    }
    function getVariationProperties(a) {
        var b = a, c = null;
        typeof a != "number" && (a = expNameToId(a));
        var d = experimentTree[a];
        if (d == null)
            return {
                code: 0,
                exp: b,
                msg: "experiment " + a + " is not defined"
            };
        var e = d.split(DYO.ExpUtils.dataSep), f = e[2].split(DYO.ExpUtils.verSep);
        c = f[0];
        var g = f[1];
        if (c == DYO.ExpUtils.notInExp)
            return {
                code: 0,
                exp: b,
                msg: "user not in experiment"
            };
        for (var h = 0; h < experiments[a].variations.length; h++)
            if (experiments[a].variations[h].id == c)
                return experiments[a].type == 0 && (g = experiments[a].variations[h].name), experiments[a].variations[h].props;
        return {
            code: 0,
            exp: b,
            msg: "error getting variation data, check the experiment settings"
        }
    }
    function getCurrentVersionDataStr(a) {
        try {
            typeof a != "number" && (a = expNameToId(a));
            if (experimentExists(a) && experimentTree[a] != null) {
                var b = experimentTree[a], c = b.split(DYO.ExpUtils.dataSep);
                if (c != null && c.length > 1) {
                    var d = c[1];
                    return d
                }
            }
        } catch (e) {
            log("error in getCurrentVersionDataStr")
        }
        return null
    }
    function externalSetVariation(a, b) {
        var c = a, d = b;
        typeof a != "number" && (a = expNameToId(a));
        if (experimentExists(a)) {
            typeof b != "number" && (b = varNameToId(a, b));
            if (b == null)
                return {
                    code: 0,
                    exp: c,
                    variation: d,
                    msg: "Variation is not defined"
                };
            var e = DYO.Props.expManualSetVersionData(experiments[a]);
            return setVariation(a, e, b), {
                code: 1,
                exp: c,
                variation: d,
                msg: "variation " + b + " is set for experiment " + a
            }
        }
        return {
            code: 0,
            exp: c,
            variation: d,
            msg: "experiment " + a + " is not defined"
        }
    }
    function externalSetVariationByPosition(a, b) {
        var c = a;
        typeof a != "number" && (a = expNameToId(a));
        if (experimentExists(a)) {
            var d = new Array;
            if (typeof experiments[a].variations[b] == "undefined")
                return {
                    code: 0,
                    exp: c,
                    pos: b,
                    msg: "no variation in position " + b
                };
            d[0] = experiments[a].variations[b].id;
            var e = DYO.Props.expManualSetVersionData(experiments[a]);
            return setVariations(a, e, d), {
                code: 1,
                exp: c,
                pos: b,
                msg: "variation at position " + b + "is set for experiment " + a
            }
        }
        return {
            code: 0,
            exp: c,
            pos: b,
            msg: "experiment " + a + " is not defined"
        }
    }
    function setVariation(a, b, c) {
        var d = new Array;
        d[0] = c, setVariations(a, b, d)
    }
    function setVariations(a, b, c) {
        if (!experimentExists(a)) {
            log("ignoring non-existent experiment");
            return 
        }
        var d = DYO.Props.expCompleteVersionData(experiments[a], b), e = DYO.Props.getAttributionMethodForGet(experiments[a]);
        experimentTree[a] = a + DYO.ExpUtils.dataSep + d + DYO.ExpUtils.dataSep + c.toString() + DYO.ExpUtils.dataSep + e, storeExperiments(DYO.ExpUtils.storageKey, experimentTree), resetVariationsIgnoreList()
    }
    function storeAttributeVariations(a, b, c) {
        try {
            if (experimentExists(a) && DYO.Props.isExplicitlyAttributed(experiments[a])) {
                var d = DYO.Props.expCompleteVersionData(experiments[a], b), e = getStoredExperiments(DYO.ExpUtils.storageAttKey), f = DYO.ExpUtils.attributeVariations(e, a, d, c);
                DYO.ExpStorageUtils.setLocal(DYO.ExpUtils.storageAttKey, f), resetVariationsIgnoreList()
            } else 
                experimentExists(a) && setVariations(a, b, c)
        } catch (g) {
            log("error in storeAttributeVariations")
        }
    }
    function attributeCurrentVariations(a) {
        if (experimentExists(a) && DYO.Props.isExplicitlyAttributed(experiments[a]) && experimentTree[a] != null) {
            var b = experimentTree[a], c = b.split(DYO.ExpUtils.dataSep);
            if (c.length >= 3) {
                var d = c[2], e = [], f = c[2].split(DYO.ExpUtils.variSep);
                for (var g = 0; g < f.length; ++g)
                    varsIdsToAttribute.push(f[g].split(DYO.ExpUtils.variSep)[0]);
                var h = c[1];
                storeAttributeVariations(a, h, d);
                if (DYO.Props.isVarCOnAttribution(experiments[a])) {
                    var i = function() {
                        window.DY.ServerUtil.logVariation("c", a, e, !1, !1, h)
                    };
                    window.DY.API("callback", i)
                }
            }
        }
    }
    function varRimpSelectedVariations(a, b) {
        if (experimentExists(a) && b != null && DYO.Props.isVarRimpOnGet(experiments[a]) && b.length > 0) {
            var c = [];
            for (var d = 0; d < b.length; ++d)
                b[d] != null && b[d].id != null && c.push(b[d].id);
            var e = getCurrentVersionDataStr(a), f = function() {
                window.DY.ServerUtil.logVariation("ri", a, c, !1, !1, e)
            };
            window.DY.API("callback", f)
        }
    }
    function executeVariation(expId, variationId) {
        var e = expId, v = variationId, jsExec=!1, htmlExec=!1;
        typeof expId != "number" && (expId = expNameToId(expId));
        if (experimentExists(expId)) {
            typeof variationId != "number" && (variationId = varNameToId(expId, variationId));
            if (variationId == null)
                return {
                    code: 0,
                    exp: e,
                    variation: v,
                    msg: "Variation is not defined"
                };
            for (var i = 0; i < experiments[expId].variations.length; i++)
                if (experiments[expId].variations[i].id == variationId) {
                    var execScript = experiments[expId].variations[i].script, htmlInsert = experiments[expId].variations[i].html, htmlInsertPos = experiments[expId].variations[i].htmlPos;
                    if (typeof execScript != "undefined" && execScript != "") {
                        try {
                            eval("(function(){" + execScript + "})();")
                        } catch (e) {}
                        jsExec=!0
                    }
                    if (typeof htmlInsert != "undefined" && htmlInsert != "" && htmlInsertPos != "") {
                        var div = document.createElement("div");
                        div.innerHTML = htmlInsert;
                        var contDiv = document.getElementById(htmlInsertPos);
                        contDiv && (contDiv.insertBefore(div, contDiv.firstChild), htmlExec=!0)
                    }
                }
            return {
                code: 1,
                exp: e,
                variation: v,
                msg: "executed " + (jsExec && htmlExec ? "javascript and html insertion" : jsExec ? "javascript" : htmlExec ? "html insertion" : "nothing") + " for variation " + variationId + " in experiment " + expId
            }
        }
        return {
            code: 0,
            exp: e,
            variation: v,
            msg: "experiment " + expId + " is not defined"
        }
    }
    function makeSmartImage(a, b) {
        try {
            var c = a;
            typeof c != "number" && (c = parseInt(expNameToId(c)));
            var d = chooseVariation(c, null);
            if (!experimentExists(c))
                return {
                    code: 0,
                    exp: c,
                    msg: "experiment " + c + " is not defined"
                };
            var e = experiments[c].elementWidth;
            if (typeof e == "undefined" || e == null)
                e = 0;
            var f = experiments[c].elementHeight;
            if (typeof f == "undefined" || f == null)
                f = 0;
            var g = experiments[c].variations[d];
            if (typeof g == "undefined" || typeof g.props == "undefined" || typeof g.props.image_url == "undefined")
                return {
                    code: 0,
                    exp: c,
                    v: g.id,
                    msg: "experiment " + c + " has no image variation " + g.id
                };
            var h = document.createElement("div");
            h.className = "dy_unit dy_image_" + c;
            var i = '<img src="' + g.props.image_url + '" width="' + e + '" height="' + f + '" style="border:none;" />';
            typeof g.props.image_click_url != "undefined" && g.props.image_click_url != null && g.props.image_click_url != "" && (i = '<a href="' + g.props.image_click_url + '" target="' + (g.props.image_click_url_target || "_top") + '">' + i + "</a>"), h.innerHTML = i;
            var j=!0;
            if (typeof b != "undefined" && b != "") {
                var k = document.getElementById(b);
                typeof k != "undefined" && k != null && (k.appendChild(h), j=!1)
            }
            if (j) {
                var l = document.getElementsByTagName("script"), m = l[l.length - 1];
                m.parentElement.appendChild(h)
            }
            var n = getCurrentVersionDataStr(c);
            function o() {
                typeof $dy != "undefined" && typeof $dy(window) != "undefined" && typeof DY != "undefined" && typeof DY.AdDetection != "undefined" ? DY.AdDetection.markExpUnit(h, c, g.id, !1, !1, n) : setTimeout(o, 100)
            }
            return o(), {
                code: 1,
                exp: c,
                msg: "executing make smart image on experiment " + c
            }
        } catch (p) {
            return {
                code: 0,
                exp: a,
                msg: "error while executing make smart image on experiment " + a
            }
        }
    }
    function makeSmartSlider(a, b) {
        try {
            var c = a;
            typeof c != "number" && (c = parseInt(expNameToId(c)));
            if (!experimentExists(c))
                return {
                    code: 0,
                    exp: c,
                    msg: "experiment " + c + "is not defined"
                };
            var d = experiments[c].elementWidth;
            if (typeof d == "undefined" || d == null)
                d = 0;
            var e = experiments[c].elementHeight;
            if (typeof e == "undefined" || e == null)
                e = 0;
            var f = experiments[c].autoScrollSpeed;
            if (typeof f == "undefined" || f == null)
                f = 0;
            var g = experiments[c].slideCount;
            if (typeof g == "undefined" || g == null || g == 0)
                g = experiments[c].variations.length;
            var h = chooseMultipleVariations(c, g, null), i = getCurrentVersionDataStr(c), j = document.createElement("div");
            j.setAttribute("style", "position:relative;max-width:" + d + "px;max-height:" + e + "px;"), j.className = "dy_unit dy_slider_" + c;
            var k=!0;
            if (typeof b != "undefined" && b != "") {
                var l = document.getElementById(b);
                typeof l != "undefined" && l != null && (l.appendChild(j), k=!1)
            }
            if (k) {
                var m = document.getElementsByTagName("script"), n = m[m.length - 1];
                n.parentElement.appendChild(j)
            }
            for (var o = 0; o < h.length; o++) {
                var p = null;
                for (var q = 0; q < experiments[c].variations.length; q++)
                    if (h[o].id == experiments[c].variations[q].id) {
                        p = experiments[c].variations[q].props;
                        break
                    }
                if (typeof p == "undefined" || p == null || typeof p.image_url == "undefined")
                    continue;
                if (typeof p.image_click_url == "undefined" || p.image_click_url == null || p.image_click_url == "")
                    p.image_click_url = "#";
                var r = h[o].id;
                h[o] = p, h[o].id = r
            }
            function s() {
                typeof DY != "undefined" && typeof DY.AdDetection != "undefined" && typeof $dy != "undefined" && typeof $dy(window) != "undefined" && typeof $dy.renderSmartCarousel != "undefined" ? $dy.renderSmartCarousel(j, {
                    expId: c,
                    width: d,
                    height: e,
                    scrollSpeed: f,
                    versionDataStr: i
                }, h) : setTimeout(s, 100)
            }
            return s(), {
                code: 1,
                exp: c,
                msg: "executing make smart slider on experiment " + c
            }
        } catch (t) {
            return {
                code: 0,
                exp: a,
                msg: "error while executing make smart slider on experiment " + a
            }
        }
    }
    function makeSmartContainer(expName, insertionId, asPureHTML) {
        try {
            var expId = expName;
            typeof expId != "number" && (expId = parseInt(expNameToId(expId))), asPureHTML!==!0 && (asPureHTML=!1);
            var varPos = chooseVariation(expId, null);
            if (!experimentExists(expId))
                return {
                    code: 0,
                    exp: expId,
                    msg: "experiment " + expId + " is not defined"
                };
            var width = experiments[expId].elementWidth;
            if (typeof width == "undefined" || width == null)
                width = 0;
            var height = experiments[expId].elementHeight;
            if (typeof height == "undefined" || height == null)
                height = 0;
            var varElem = experiments[expId].variations[varPos];
            if (typeof varElem == "undefined" || typeof varElem.props == "undefined" || typeof varElem.props.html_code == "undefined")
                return {
                    code: 0,
                    exp: expId,
                    v: varElem.id,
                    msg: "experiment " + expId + " has no container variation " + varElem.id
                };
            var cont, source = null;
            if (asPureHTML)
                cont = document.createElement("div"), cont.className = "dy_unit dy_container_" + expId, cont.innerHTML = "<style type='text/css'>" + decodeURIComponent(varElem.props.css_code) + "</style>" + decodeURIComponent(varElem.props.html_code);
            else {
                cont = document.createElement("iframe"), cont.className = "dy_unit dy_container_" + expId, cont.setAttribute("scrolling", "no"), cont.setAttribute("style", "overflow:hidden;background-color:#ffffff;border:0;width:" + width + "px;height:" + height + "px;"), cont.setAttribute("width", width), cont.setAttribute("height", height);
                var bodyStyle = "margin:0;position: absolute;";
                bodyStyle += "width:" + width + "px;", bodyStyle += "height:" + height + "px;", source = '<!DOCTYPE html><html><head><style type="text/css">', source += decodeURIComponent(varElem.props.css_code), source += '</style></head><body style="' + bodyStyle + '">', source += decodeURIComponent(varElem.props.html_code), source += '<script type="text/javascript">', source += decodeURIComponent(varElem.props.js_code), source += "</script></body></html>"
            }
            var notAdded=!0;
            if (typeof insertionId != "undefined" && insertionId != "") {
                var insertionPoint = document.getElementById(insertionId);
                typeof insertionPoint != "undefined" && insertionPoint != null && (insertionPoint.appendChild(cont), notAdded=!1)
            }
            if (notAdded) {
                var arrScripts = document.getElementsByTagName("script"), currScript = arrScripts[arrScripts.length - 1];
                currScript.parentElement.appendChild(cont)
            }
            asPureHTML ? eval("try{(function(){" + decodeURIComponent(varElem.props.js_code) + "})();}catch(e){}") : source != null && (cont.contentWindow.document.open(), cont.contentWindow.document.write(source), cont.contentWindow.document.close());
            var versionDataStr = getCurrentVersionDataStr(expId);
            function waitForDy() {
                typeof $dy != "undefined" && typeof $dy(window) != "undefined" && typeof DY != "undefined" && typeof DY.AdDetection != "undefined" ? DY.AdDetection.markExpUnit(cont, expId, varElem.id, !1, !1, versionDataStr) : setTimeout(waitForDy, 100)
            }
            return waitForDy(), {
                code: 1,
                exp: expId,
                msg: "executing make smart image on experiment " + expId
            }
        } catch (exception) {
            return {
                code: 0,
                exp: expName,
                msg: "error while executing make smart image on experiment " + expName
            }
        }
    }
    function setupServerExperiments() {
        debug && log("DYO setupServerExperiments");
        if (typeof DYExps != "undefined" && typeof DYExps.oexps != "undefined") {
            debug && log("actually using DYExps in DYO"), DYO.oexps = experiments = DYExps.oexps, DYO.otags = smartTags = DYExps.otags, DYO.ready=!0;
            var a = 18e5;
            typeof DYExps.expSesMs != "undefined" && DYO.StringUtils.isN(DYExps.expSesMs) && (a = DYExps.expSesMs), DYO.Seqs.loadSequences(a), cleanupExperiments(), DYO.exps = experimentTree, (typeof window.DY.ssae == "undefined" ||!window.DY.ssae) && setTimeout(function() {
                DYO.executeSmartActions()
            }, 0)
        }
    }
    function enableCookies() {
        DYO.ExpStorageUtils.enableCookies();
        var a = function() {
            typeof window.DY != "undefined" && typeof window.DY.ExpStorageUtils != "undefined" && window.DY.ExpStorageUtils.enableCookies !== "undefined" && window.DY.ExpStorageUtils.enableCookies()
        };
        window.DY.API("callback", a)
    }
    var experimentTree = {}, debug=!1, OPTION_VARIATION_SET_ID = "variationSetId", OPTION_EXP_DEFAULT = "expDefault", OPTION_FORCE_CALCULATION = "isForceCalculation", experiments = {}, smartTags = {}, hashCode = function(a) {
        var b = 0;
        if (a.length == 0)
            return b;
        for (var c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c), b = (b<<5) - b + d;
            b&=b
        }
        return b
    }, log = function(a) {
        debug && console.log(a)
    };
    return {
        chooseVariation: chooseVariation,
        forceChooseVariation: forceChooseVariation,
        chooseMultipleVariations: chooseMultipleVariations,
        forceChooseMultipleVariations: forceChooseMultipleVariations,
        OPTION_EXP_DEFAULT: OPTION_EXP_DEFAULT,
        OPTION_VARIATION_SET_ID: OPTION_VARIATION_SET_ID,
        OPTION_FORCE_CALCULATION: OPTION_FORCE_CALCULATION,
        chooseDynamicVariation: chooseDynamicVariation,
        forceChooseDynamicVariation: forceChooseDynamicVariation,
        chooseMultipleDynamicVariation: chooseMultipleDynamicVariations,
        chooseMultipleDynamicVariations: chooseMultipleDynamicVariations,
        forceChooseMultipleDynamicVariations: forceChooseMultipleDynamicVariations,
        getDynamicVariations: getDynamicVariations,
        getServerVariations: getServerVariations,
        setVariation: externalSetVariation,
        setVariationByPosition: externalSetVariationByPosition,
        setVariations: setVariations,
        getVariationData: getVariationData,
        getVariationProperties: getVariationProperties,
        getCurrentVersionDataStr: getCurrentVersionDataStr,
        reportExperimentEvent: reportExperimentEvent,
        storeAttributeVariations: storeAttributeVariations,
        attributeCurrentVariations: attributeCurrentVariations,
        exps: experimentTree,
        execute: executeVariation,
        oexps: experiments,
        otags: smartTags,
        varNameToId: varNameToId,
        expNameToId: expNameToId,
        sd: setDebug,
        d: debug,
        log: log,
        smartImage: makeSmartImage,
        smartSlider: makeSmartSlider,
        smartContainer: makeSmartContainer,
        setupServerExperiments: setupServerExperiments,
        enableCookies: enableCookies,
        ready: !1,
        removeFromVariationsIgnoreList: removeFromVariationsIgnoreList,
        cleanupExperiments: cleanupExperiments,
        generateHash: generateHash
    }
}(), typeof Object.keys == "undefined" && (Object.keys = function(a) {
    var b = [];
    for (var c in a)
        a.hasOwnProperty(c) && b.push(c);
    return b
}), DYO.ExpStorageUtils = function() {
    function f() {
        var a = document.domain.split(".");
        return a.length < 2 || /^([0-9]+\.){3}[0-9]+$/.test(document.domain) ? document.domain : /[-\w]+\.(?:[-\w]+\.xn--[-\w]+|[-\w]{3,}|[-\w]+\.[-\w]{2})$/i.exec(document.domain)[0]
    }
    function g(a) {
        var b = document.cookie.match(d(a));
        return b ? unescape(b[1]) : null
    }
    function h(a, b, c, d, f) {
        var g = new Date;
        g.setDate(g.getDate() + c), document.cookie = e(a, b, c == null ? null : g.toGMTString(), d, f)
    }
    function i(a, b, c) {
        this.getCookie(a) && (document.cookie = e(a, "", "Thu, 01-Jan-1970 00:00:01 GMT", b, c))
    }
    function j(c, d) {
        try {
            window.localStorage ? (window.localStorage.setItem(c, d), a && h(c, d, b, "/", f())) : h(c, d, b, "/", f())
        } catch (e) {}
    }
    function k(b, d) {
        if (!a&&!c) {
            try {
                var e = g(DYO.ExpUtils.storageKey);
                e != null && e.length > 0 && (a=!0)
            } catch (f) {}
            c=!0
        }
        j(b, d)
    }
    function l(b) {
        var c = null;
        try {
            if (window.localStorage) {
                a && (c = g(b));
                if (typeof c == "undefined" || c == null)
                    c = window.localStorage.getItem(b)
                } else 
                    c = g(b)
        } catch (d) {}
        return c
    }
    function m(b) {
        try {
            window.localStorage ? (window.localStorage.removeItem(b), a && i(b, "/", f())) : i(b, "/", f())
        } catch (c) {}
    }
    function n(b, c) {
        try {
            window.sessionStorage ? (window.sessionStorage.setItem(b, c), a && h(b, c, 0, "/", f())) : j(b, c)
        } catch (d) {}
    }
    function o(b) {
        var c = null;
        try {
            if (window.sessionStorage) {
                a && (c = g(b));
                if (typeof c == "undefined" || c == null)
                    c = window.sessionStorage.getItem(b)
                } else 
                    c = l(b)
        } catch (d) {}
        return c
    }
    function p() {
        a=!0
    }
    function q() {
        try {
            return window.localStorage ? a : !0
        } catch (b) {
            return !1
        }
    }
    var a=!1, b = 10368e3, c=!1, d = function(a) {
        return new RegExp("(?:^|;)\\s?" + a + "=(.*?)(?:;|$)", "i")
    }, e = function(a, b, c, d, e) {
        return a + "=" + escape(b) + (c ? ";expires=" + c : "") + (d ? ";path=" + d : "") + (e ? ";domain=" + e : ";domain=" + document.domain)
    };
    return {
        getLocal: l,
        setLocal: j,
        setDetected: k,
        isC: q,
        removeLocal: m,
        getSLD: f,
        enableCookies: p
    }
}(), DYO.ExpUtils = function() {
    function p(a, b, d, e) {
        if (typeof d == "undefined" || d == null || d.length <= 0)
            return a;
        var f = new Array;
        typeof a != "undefined" && a != "" && a != null && (f = a.split(k));
        var g=!1, h = b + l + d + l + e + l + c;
        for (var i = 0; i < f.length; i++) {
            var j = f[i].split(l);
            if (b == j[0]) {
                f[i] = h, g=!0;
                break
            }
        }
        return g || (f.push(h), g=!0), g ? f.join(k) : a
    }
    var a = "0", b = "1", c = "2", d = "0", e = "1", f = "2", g = "3", h = "4", i = "_dyexps", j = "_dy_att_exps", k = "##", l = "|", m = ":", n = ",", o = "-1";
    return {
        expSep: k,
        dataSep: l,
        verSep: m,
        variSep: n,
        notInExp: o,
        storageKey: i,
        storageAttKey: j,
        attributeVariations: p,
        SELECTION_AND_ATTRIBUTION: a,
        SELECTION: b,
        ATTRIBUTION: c,
        SUB_MECHANISM_NA: d,
        SUB_MECHANISM_CG_WITH_PREDICT: e,
        SUB_MECHANISM_CG_WITHOUT_PREDICT: f,
        SUB_MECHANISM_REWEIGHT_EXPLORE: g,
        SUB_MECHANISM_REWEIGHT_KICK_IN: h
    }
}(), DYO.Predict = function() {
    function g(a, b) {
        return a + c + b
    }
    function h(a, b, c) {
        var d = g(b, c);
        if (typeof a != "undefined" && a != null) {
            if (a.hasOwnProperty(d)) {
                var h = a[d];
                return h
            }
            return f
        }
        return e
    }
    function j() {
        var a = {};
        if (typeof DY.prd != "undefined" && DY.prd != null) {
            for (var b = 0; b < DY.prd.length; b++) {
                var c = DY.prd[b], d = g(c.expId, c.verId);
                a[d] = c.vars
            }
            return a
        }
    }
    function k() {
        var a = {};
        if (typeof DY.prd != "undefined" && DY.prd != null) {
            for (var b = 0; b < DY.prd.length; b++) {
                var c = DY.prd[b], d = g(c.expId, c.verId), e = i(c.vars, c.smech);
                a[d] = e
            }
            return a
        }
    }
    function l(a, b) {
        var c = k(), d = h(c, a, b);
        return d == e ? undefined : d == f ? [] : d
    }
    function m(a, c) {
        var g = window.DYO.ResourceUtils.getLocalStorage(b);
        if (typeof g != "undefined" && g != null && g != "") {
            var j = window.DYO.StringUtils.pkv(g), k = h(j, a, c);
            if (k == e)
                return null;
            if (k == f) {
                var l = i([], null);
                return l
            }
            var m = window.DYO.StringUtils.pkv(k), l = i(null, null);
            return typeof m.varIdArr != "undefined" && m.varIdArr != null && m.varIdArr.length > 0 && (l.varIdArr = m.varIdArr.split(d)), typeof m.smechArr != "undefined" && m.smechArr != null && m.smechArr.length > 0 && (l.smechArr = m.smechArr.split(d)), l
        }
        return null
    }
    function n() {
        try {
            var c = k();
            if (typeof c != "undefined" && c != null) {
                var d = window.DYO.StringUtils.skv(c);
                window.DYO.ResourceUtils.setLocalStorage(b, d)
            } else 
                window.DYO.ResourceUtils.removeLocalStorage(b);
            var e = j();
            if (typeof e != "undefined" && e != null) {
                var f = window.DYO.StringUtils.skv(e);
                window.DYO.ResourceUtils.setLocalStorage(a, f)
            } else 
                window.DYO.ResourceUtils.removeLocalStorage(a)
        } catch (g) {}
    }
    function o(a, b) {
        try {
            var c = l(a, b);
            return c == null ? m(a, b) : c
        } catch (d) {}
    }
    var a = "_dyprd", b = "_dyprdobj", c = "|", d = ",", e = "NP", f = "NE", i = function(a, b) {
        var c = new Object;
        return c.varIdArr = typeof a != "undefined" ? a : null, c.smechArr = typeof b != "undefined" ? b : null, c.toString = function() {
            return DYO.StringUtils.skv({
                varIdArr: this.varIdArr,
                smechArr: this.smechArr
            })
        }, c
    };
    return {
        updatePredictStorage: n,
        getPrediction: o
    }
}(), DYO.ResourceUtils = function() {
    function a(a, b) {
        try {
            window.localStorage && window.localStorage.setItem(a, b)
        } catch (c) {}
    }
    function b(a) {
        try {
            if (window.localStorage)
                return window.localStorage.getItem(a)
        } catch (b) {}
    }
    function c(a) {
        try {
            window.localStorage && window.localStorage.removeItem(a)
        } catch (b) {}
    }
    return {
        setLocalStorage: a,
        getLocalStorage: b,
        removeLocalStorage: c
    }
}(), DYO.StringUtils = function() {
    function a(a) {
        var b = a.split("."), c = {};
        for (var d = 0; d < b.length; d++) {
            var e = b[d].split("@");
            c[e[0]] = e[1] == "nu" ? null : e[1].replace(/\%1\%/g, "@").replace(/\%0\%/g, ".")
        }
        return c
    }
    function b(a) {
        var b = [];
        for (var c in a)
            b.push(c + "@" + (a[c] == null ? "nu" : a[c].toString().replace(/\./g, "%0%").replace(/\@/g, "%1%")));
        return b.join(".")
    }
    function c(a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    }
    return {
        pkv: a,
        skv: b,
        isN: c
    }
}();
var DYO = DYO || {};
DYO.Chooser = function() {
    function d(a, d) {
        var e = b(a), f = [], g = Object.keys(a).length;
        for (var h = 0; h < d && h < g; h++)
            f.push(c(e));
        return f
    }
    function e(a, b, c) {
        this.value = a.slice(0), this.weight = b, this.id = c
    }
    function f(a, b, c, d, g, h) {
        if (b.length - c < d)
            return;
        if (d > 0) {
            for (var i = c; i < b.length + 1 - d; ++i)
                g.push(b[i]), f(a, b, i + 1, d - 1, g, h * b[i].weight), g.pop(b[i]);
            return 
        }
        var j = new e(g, h, a.length);
        a.push(j);
        return 
    }
    function i(a) {
        var b = Math.floor(Math.random() * a.length), c = {
            opt: a[b].id,
            loc: b
        };
        return c
    }
    function j(a, b) {
        var c = [];
        for (var d = 0; d < b && a.length > 0; d++) {
            var e = i(a);
            e != null && e.loc != null && (c.push(a[e.loc]), a.splice(e.loc, 1))
        }
        return c
    }
    function k(a) {
        var b = 0, c = a[b].id, d = 0, e = [];
        for (var f = 0; f < a.length; f++)
            e.push(a[f].weight + d), d += a[f].weight;
        if (d <= 0)
            return i(a);
        var g = Math.floor(Math.random() * d + 1);
        for (var f = 0; f < e.length; f++)
            if (g < e[f]) {
                c = a[f].id, b = f;
                break
            }
        return {
            opt: c,
            loc: b
        }
    }
    var a = function(a, b, c) {
        var d = new Object;
        return d.value = a, d.weight = b, d.totalWeight = c, d
    }, b = function(b) {
        var c = [undefined], d;
        for (var e in b)
            if (b.hasOwnProperty(e)) {
                var f = b[e], d = f.weight == null ? 0: f.weight;
                c.push(a(f, d, d))
            }
        for (var g = c.length - 1; g > 1; g--)
            c[g>>1].totalWeight += c[g].totalWeight;
        return c
    }, c = function(a) {
        var b = a[1].totalWeight * Math.random(), c = 1;
        while (b > a[c].weight)
            b -= a[c].weight, c<<=1, b > a[c].totalWeight && (b -= a[c].totalWeight, c += 1);
        var d = a[c].weight, e = a[c].value;
        a[c].weight = 0;
        while (c !== 0)
            a[c].totalWeight -= d, c>>=1;
        return e
    }, g = function(a, b) {
        var c = [4e4, 4e4, 256, 64, 32, 24, 20, 18, 18], e = b < a.length - b ? b: a.length - b;
        if (e >= c.length || a.length > c[e])
            return d(a, b);
        var g = [], h = [];
        f(g, a, 0, b, h, 1);
        if (g.length > 0) {
            var i = k(g);
            if (i.loc >= 0 && i.loc < g.length)
                return g[i.loc].value
        }
        return []
    }, h = function(a, b) {
        var c = [], e = [];
        for (var f = 0; f < a.length; f++)
            a[f].weight == null || a[f].weight <= 0 ? c.push(a[f]) : e.push(a[f]);
        var h = [];
        if (c.length > 0 && e.length < b) {
            var i = b - e.length;
            h = j(c, i)
        }
        var k = b - h.length, l = g(e, k);
        return l == null ? [] : (l = d(l, l.length), l.length < b && h.length > 0 && (l = l.concat(h)), l)
    };
    return {
        wRandomChoose: h,
        equalDecisions: j,
        weightedDecision: k,
        wRandomOrderedNoReplacement: d,
        wRandomOrderlessNoReplacement: g
    }
}();
var DYO = DYO ||
{};
DYO.Props = function() {
    function n(a, b) {
        return a.length >= 3 && b.length >= 3 && a[2] == b[2] || a.length >= 3 && a[2] == l || b.length >= 3 && b[2] == l
    }
    function o(a, b) {
        return a.length >= 5 && b.length >= 5 && a[4] == b[4]
    }
    function p(a, b) {
        return a.length >= 6 && b.length >= 6 && a[5] == b[5]
    }
    function q(a, b) {
        var c = typeof a.calcExpirationPeriodMs != "undefined" && DYO.StringUtils.isN(a.calcExpirationPeriodMs) && a.calcExpirationPeriodMs >= 0;
        !c && DYO.ExpStorageUtils.isC() && (c=!0, a.calcExpirationPeriodMs = m);
        if (c) {
            var d = (new Date).getTime();
            if (b.length < 4 ||!DYO.StringUtils.isN(b[3]) || parseFloat(b[3]) + a.calcExpirationPeriodMs < d)
                return !1
        }
        return !0
    }
    function r(a, b) {
        return a.version == b[0]
    }
    function s(a, b) {
        return a.length > 1 && b.length > 1 && a[1] == b[1]
    }
    function t(a) {
        var b = typeof a.isIgnoreReweightInc != "undefined" && a.isIgnoreReweightInc;
        return b
    }
    function u(a) {
        var b = typeof a != "undefined" && a != null && typeof a.stickiness != "undefined" && a.stickiness == d;
        return b
    }
    function v(a, b, c, d) {
        var e = a.version, f = (new Date).getTime(), g = e + DYO.ExpUtils.verSep + b + DYO.ExpUtils.verSep + c + DYO.ExpUtils.verSep + f + DYO.ExpUtils.verSep + DYO.Seqs.loadSeq + DYO.ExpUtils.verSep + DYO.Seqs.sesLoadSeq + DYO.ExpUtils.verSep + d + DYO.ExpUtils.verSep + x([DYO.ExpUtils.SUB_MECHANISM_NA]);
        return g
    }
    function w(a) {
        var b = a == null ? []: a.split(DYO.ExpUtils.verSep);
        return b.length < 7 ? null : b[6]
    }
    function x(a) {
        var b = a === "undefined" || a == null ? []: a;
        return b.join(k)
    }
    function y(a, b) {
        try {
            return r(a, b) && q(a, b)
        } catch (c) {
            return !1
        }
    }
    function z(a, b, c) {
        try {
            return r(a, b) && q(a, b) && s(b, c) && (!u(a)&&!D(a) || p(b, c))
        } catch (d) {
            return !0
        }
    }
    function A(a, b, c) {
        try {
            return z(a, b, c) && (!u(a) || o(b, c)) && (t(a) || n(b, c))
        } catch (d) {
            return !1
        }
    }
    function B(a, b, c) {
        if (typeof a.controlGroup == "undefined" || a.controlGroup == null || typeof a.controlGroup.share == "undefined" || typeof a.controlGroup.method == "undefined" ||!DYO.StringUtils.isN(a.controlGroup.share))
            return !1;
        var d = b == null ||!z(a, b.split(DYO.ExpUtils.verSep), c.split(DYO.ExpUtils.verSep)), e=!1;
        if (d) {
            var f = parseFloat(a.controlGroup.share);
            Math.floor(Math.random() * 100) < f && (e=!0)
        } else 
            e = C(b);
        return e
    }
    function C(a) {
        return w(a) == e
    }
    function D(a) {
        var b = typeof a != "undefined" && a != null && typeof a.stickiness != "undefined" && a.stickiness == c;
        return b
    }
    function E(a) {
        var b = typeof a != "undefined" && a != null && typeof a.isExplicitlyAttributed != "undefined" && a.isExplicitlyAttributed;
        return b
    }
    function F(a) {
        var b = typeof a != "undefined" && a != null && typeof a.isVarRimpOnGet != "undefined" && a.isVarRimpOnGet;
        return b
    }
    function G(a) {
        var b = typeof a != "undefined" && a != null && typeof a.isVarCOnAttribution != "undefined" && a.isVarCOnAttribution;
        return b
    }
    function H(a) {
        return E(a) ? DYO.ExpUtils.SELECTION : DYO.ExpUtils.SELECTION_AND_ATTRIBUTION
    }
    function I(a, b) {
        return a.versionHash == b
    }
    function J(a) {
        return a != null && typeof a.weightMechanism != "undefined" ? a.weightMechanism : DYO.Props.REWEIGHT_MECHANISM
    }
    function K(a) {
        return a != null && typeof a.weightSubMechanism != "undefined" ? a.weightSubMechanism : null
    }
    function L(a, b, c) {
        var d = a.split(DYO.ExpUtils.verSep);
        return d[6] = b, d[7] = x(c), d.join(DYO.ExpUtils.verSep)
    }
    function M(b) {
        return v(b, a, b.reweightId == null ? 0 : b.reweightId, f)
    }
    function N(a, b, c) {
        return v(a, b, a.reweightId == null ? 0 : a.reweightId, f)
    }
    function O(b) {
        return v(b, a, l, f)
    }
    function P(a) {
        return a.split(DYO.ExpUtils.verSep)[0]
    }
    function Q(a, b) {
        var c = null;
        if (b == null)
            c = O(a);
        else {
            typeof b == "number" && (b = "" + b);
            var d = b.split(DYO.ExpUtils.verSep);
            d.length <= 1 ? (c = O(a), DYO.log("setting dont-care-weight due to version-data being without reweight-id data")) : d.length == 2 ? (c = N(a, d[1]), DYO.log("setting dont-care-weight due to version-data being without reweight-id data")) : d.length == 3 ? c = v(a, d[1], d[2], f) : d.length <= 7 ? (c = b, d.length == 4 && (c = c + DYO.ExpUtils.verSep + DYO.Seqs.loadSeq), d.length <= 5 && (c = c + DYO.ExpUtils.verSep + DYO.Seqs.sesLoadSeq), d.length <= 6 && (c = c + DYO.ExpUtils.verSep + f), d.length <= 7 && (c = c + DYO.ExpUtils.verSep + x([DYO.ExpUtils.SUB_MECHANISM_NA]))) : c = b
        }
        return c
    }
    var a = "", b = "0", c = "1", d = "2", e = "0", f = "1", g = "2", h = "3", i = "0", j = "1", k = ".", l = "__dontcareweight", m = 864e5;
    return {
        DONT_CARE_WEIGHT: l,
        CONTROL_GROUP_MECHANISM: e,
        MANUAL_MECHANISM: f,
        REWEIGHT_MECHANISM: g,
        PREDICT_MECHANISM: h,
        isStoredVersionValidDuringCleanup: y,
        isStoredVersionValidForChoose: A,
        isExplicitlyAttributed: E,
        isVarRimpOnGet: F,
        isVarCOnAttribution: G,
        getAttributionMethodForGet: H,
        verifyClientIdsOfServerAndClientSynced: I,
        expProgVersionData: M,
        expContVersionData: N,
        expManualSetVersionData: O,
        getVersionId: P,
        expCompleteVersionData: Q,
        resetVersionDataMechanism: L,
        getMechanismRepresentingWeights: J,
        getSubMechanismRepresentingWeights: K,
        isControlGroupChoose: B,
        isCurrentlyInControlGroup: C,
        CGM_PRESET_VARS: i,
        CGM_RANDOM: j,
        subMechanismsArrToStr: x,
        getVersionDataMechanism: w,
        isSameReweight: n
    }
}();
var DYO = DYO || {};
DYO.Seqs = function() {
    function d(d) {
        try {
            b = 1 + Math.floor(Math.random() * 9999), c = b;
            var e = DYO.ExpStorageUtils.getLocal(a), f = (new Date).getTime();
            if (e != null) {
                var g = e.split(DYO.ExpUtils.verSep);
                g.length >= 2 && DYO.StringUtils.isN(g[1]) && parseFloat(g[1]) + d >= f && (c = g[0])
            }
            DYO.ExpStorageUtils.setLocal(a, "" + c + DYO.ExpUtils.verSep + f)
        } catch (h) {
            DYO.log("error setting up load sequences")
        } finally {
            try {
                DYO.Seqs.loadSeq = b, DYO.Seqs.sesLoadSeq = c
            } catch (i) {}
        }
    }
    var a = "_dy_ses_load_seq", b = 0, c = 0;
    return {
        loadSequences: d,
        loadSeq: b,
        sesLoadSeq: c
    }
}(), DYO.setupServerExperiments(), DYO.ServeTagUtils = function() {
    function a(a) {
        for (var a in DYO.otags) {
            var b = DYO.otags[a];
            for (var c = 0; c < b.rules.length; c++) {
                if (b.rules[c].smartObject.objectType == 1)
                    continue;
                var d = b.rules[c].smartObject.variations;
                for (var e in d)
                    if ((d[e].renderType == "image" || d[e].renderType == "flash") && typeof d[e].imageLink != "undefined" && d[e].imageLink != null && d[e].imageLink != "") {
                        var f = b.rules[c].smartObject.experiment, g;
                        for (var h = 0; h < DYO.oexps[experiment].variations.length; h++)
                            if (DYO.oexps[experiment].variations[h].name == e) {
                                g = DYO.oexps[experiment].variations[h].id;
                                break
                            }
                            d[e].doNotMarkUnit=!0, d[e].imageLink = "http://px.dynamicyield.com/var?t=c&e=" + f + "&va=%5B" + g + "%5D" + "&_=" + Math.random() + "&red=" + encodeURIComponent(d[e].imageLink)
                    }
            }
        }
    }
    return {
        updateImageVariations: a
    }
}(), DYO.PageEvents = function() {
    function a(a, c) {
        function g() {
            if (!e) {
                for (var a = 0; a < f.length; a++)
                    if (typeof f[a] != "undefined")
                        return;
                c(d.cleanAudRules), e=!0
            }
        }
        var d = b(a), e=!1, f = d.pageEventAudRules;
        for (var h = 0; h < f.length; h++)
            for (var i = 0; i < f[h].conds.length; i++)(function() {
                function c() {
                    delete f[a], g()
                }
                function d() {
                    var b = f[a];
                    c(), f[a] = b
                }
                var a = h, b = f[h].conds[i];
                switch (b.selectMethod) {
                case"LeavePage":
                    DY.API("sub", {
                        on: "dy-mouse-leave-doc",
                        callback: d
                    });
                    break;
                case"SiteEvent":
                    DY.API("sub", {
                        on: "dy-event-" + b.selectParameter,
                        callback: c
                    });
                    break;
                case"TimeOnPage":
                    setTimeout(c, parseInt(b.selectParameter) * 1e3);
                    break;
                default:
                }
            })();
        g();
        return 
    }
    function b(a) {
        var b = [], c = [];
        for (var d = 0; d < a.length; d++)
            a[d].condType === "_PageEvent" ? b.push(a[d]) : c.push(a[d]);
        return {
            pageEventAudRules: b,
            cleanAudRules: c
        }
    }
    return {
        executeWithPageEvents: a
    }
}(), DYO.waitForElement = function(a, b, c, d, e) {
    function f() {
        var g = document.querySelectorAll(a);
        g.length >= c ? b(g) : e--!=0 && setTimeout(f, d)
    }
    typeof c == "undefined" && (c = 1), typeof d == "undefined" && (d = 100), typeof e == "undefined" && (e =- 1), f()
}, DYO.safeEval = function(code) {
    try {
        return eval(code)
    } catch (e) {
        return null
    }
}, function() {
    function getSession(a) {
        try {
            if (window.sessionStorage)
                return window.sessionStorage.getItem(a)
        } catch (b) {}
    }
    function removeHttp(a) {
        return a.substr(a.indexOf("://") + 3)
    }
    function matchNow(a, b, c) {
        try {
            switch (a) {
            case"_Referrer":
                var d = removeHttp(document.referrer.toLowerCase()), e = b.selectParameter.toLowerCase();
                switch (b.selectMethod) {
                case"equals":
                    return d == e;
                case"not_equals":
                    return d != e;
                case"contains":
                    return d.indexOf(e)!=-1;
                case"regexp":
                    var f = new RegExp(e);
                    return f.test(d);
                default:
                    return !1
                };
            case"_CurrentPage":
                var g = removeHttp(location.href.toLowerCase()), e = b.selectParameter.toLowerCase();
                switch (b.selectMethod) {
                case"equals":
                    return g == e;
                case"not_equals":
                    return g != e;
                case"contains":
                    return g.indexOf(e)!=-1;
                case"regexp":
                    var h = new RegExp(e);
                    return h.test(g);
                default:
                    return !1
                };
            case"Audience":
            case"_Audience":
                var i = ("." + (window.DY && window.DY.aud || "") + "." + Cookies.loadCHCCookies().auds.join(".") + "." + Cookies.loadSessionCookies().sauds.join(".") + ".").indexOf("." + b.parameter + ".")!=-1;
                switch (b.hitCountMethod) {
                case">=":
                    return i;
                case"<":
                    return !i;
                default:
                    return !1
                };
            case"_Country":
                return typeof window.DY.geoCode != "undefined" && window.DY.geoCode === b.selectParameter;
            case"_Continent":
                return typeof window.DY.geoCont != "undefined" && window.DY.geoCont === b.selectParameter;
            case"_Browser":
                var j = navigator.userAgent.toLowerCase(), k = function(a) {
                    return /msie ([0-9]{1,}[\.0-9]{0,})/.exec(j) != null ? parseInt(RegExp.$1) == a : /trident/.test(j) && /rv\:([0-9]{1,}[\.0-9]{0,})/.exec(j) != null ? parseInt(RegExp.$1) == a : !1
                };
                switch (b.parameter) {
                case 12:
                    return /chrome/.test(j);
                case 13:
                    return k(6);
                case 14:
                    return k(7);
                case 15:
                    return k(8);
                case 16:
                    return k(9);
                case 17:
                    return k(10);
                case 18:
                    return /firefox/.test(j);
                case 33:
                    return window.opera?!0 : !1;
                case 34:
                    return /safari/.test(j)&&!/chrome/.test(j);
                case 36:
                    return !/chrome|firefox|safari|msie|trident/.test(j)&&!window.opera;
                case 39:
                    return k(11);
                default:
                    return !1
                };
            case"_ScreenSize":
                var l = window.innerWidth;
                switch (b.parameter) {
                case 26:
                    return l > 1366;
                case 27:
                    return l <= 1366 && l > 1024;
                case 28:
                    return l <= 1024;
                default:
                    return !1
                };
            case"_OSDeviceName":
                var j = navigator.userAgent.toLowerCase(), m = navigator.platform.toLowerCase();
                switch (b.parameter) {
                case 0:
                    return /iphone|ipod|blackberry|android|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|sonyericsson|symbian|treo mini/.test(j) || /silk|ipad|android|kindle/.test(j);
                case 1:
                    return /iphone|ipod/.test(j);
                case 2:
                    return /silk|ipad|android|kindle/.test(j) && (!/android/.test(j) || screen.width > 1024);
                case 3:
                    return /android/.test(j) && screen.width <= 1024;
                case 4:
                    return /win/.test(m) || /win/.test(j);
                case 5:
                    return /mac/.test(m) || /mac/.test(j);
                case 35:
                    return /linux/.test(m) || /linux/.test(j);
                default:
                    return !1
                };
            case"_Date":
                var n = new Date;
                switch (b.selectMethod) {
                case"after":
                    return n >= new Date(parseInt(b.selectParameter) * 1e3);
                case"before":
                    return n <= new Date(parseInt(b.selectParameter2) * 1e3);
                case"between":
                    return n >= new Date(parseInt(b.selectParameter) * 1e3) && n <= new Date(parseInt(b.selectParameter2) * 1e3);
                default:
                    return !1
                };
            case"_WeekDay":
                var n = new Date;
                return n.setTime(n.getTime() + n.getTimezoneOffset() * 60 * 1e3 + b.timeZoneOffset * 60 * 60 * 1e3), b.parameter == n.getDay();
            case"_TimeOfDay":
                var n = new Date;
                function o(a) {
                    a.setFullYear(n.getFullYear()), a.setMonth(n.getMonth()), a.setDate(n.getDate())
                }
                var p = new Date(parseInt(b.selectParameter) * 1e3), q = new Date(parseInt(b.selectParameter2) * 1e3);
                return o(p), o(q), n <= q && n >= p;
            case"_Evaluator":
                var e = b.selectParameter, r;
                r = DYO.safeEval(b.jsCode);
                switch (b.selectMethod) {
                case"equals":
                    return r == e;
                case"not_equals":
                    return r != e;
                case"contains":
                    return typeof r == "string" && r.indexOf(e)!=-1;
                default:
                    return !1
                };
            case"_HasCustomUserData":
                return typeof window.DY.cud != "undefined" && typeof window.DY.cud[b.parameter] != "undefined" && (c.cud = window.DY.cud[b.parameter] ||!0);
            case"_Random":
                return Math.random() * 100 < parseFloat(b.selectParameter);
            default:
                return !1
            }
        } catch (s) {
            return !1
        }
    }
    function referrerMatching(a) {
        var b = document.referrer;
        b != null && typeof b != "undefined" && b != "" ? b = b.split("/")[2] : b = "", b = b.toLowerCase();
        switch (a.selectMethod) {
        case"equals":
        case"not_equals":
            b == a.selectParameter.toLowerCase() && chcValue++;
            break;
        case"contains":
            b.indexOf(a.selectParameter.toLowerCase())!=-1 && chcValue++;
            break;
        default:
        }
    }
    function isInAudience(a, b, c, d) {
        var e = {};
        if (typeof b == "undefined" || typeof c == "undefined") {
            var f = Cookies.loadCHCCookies();
            b = f.tchc, c = f.chc
        }
        typeof d == "undefined" && (d = Cookies.loadSessionCookies().schc);
        if (typeof a == "number") {
            for (var g in DY.audienceRules) {
                if (typeof DY.audienceRules[g] == "undefined" || typeof DY.audienceRules[g].audience == "undefined")
                    continue;
                if (DY.audienceRules[g].audience == a) {
                    a = DY.audienceRules[g];
                    break
                }
            }
            if (typeof a == "number")
                return !1
        }
        var h=!0;
        for (var i = 0; i < a.rule.length; i++) {
            if (typeof a.rule[i] == "undefined" || typeof a.rule[i].condType == "undefined" || typeof a.rule[i].conds == "undefined")
                continue;
            var j=!1;
            for (var l = 0; l < a.rule[i].conds.length; l++) {
                var m = a.rule[i].conds[l];
                if (a.rule[i].condType[0] === "_" || a.rule[i].condType === "Audience")
                    j = matchNow(a.rule[i].condType, m, e);
                else {
                    if (typeof m == "undefined" || typeof m.id == "undefined" || typeof m.hitCountMethod == "undefined" || typeof m.hitCount == "undefined")
                        continue;
                    var n = a.session ? d[m.id] || 0: (parseInt(c[m.id]) || 0) + parseInt(b[m.id] || 0);
                    a.rule[i].condType == "Referrer" && referrerMatching(m) && n++;
                    switch (m.hitCountMethod) {
                    case"=":
                        j = n == m.hitCount;
                        break;
                    case">=":
                        j = n >= m.hitCount;
                        break;
                    case"<=":
                        j = n <= m.hitCount;
                        break;
                    case">":
                        j = n > m.hitCount;
                        break;
                    case"<":
                        j = n < m.hitCount;
                        break;
                    default:
                        j=!1
                    }
                }
                if (j)
                    break
            }
            if (!j) {
                h=!1;
                break
            }
        }
        if (h && typeof e.cud != "undefined") {
            var o = new Array;
            for (k in e.cud)
                o.push({
                    paramName: k,
                    paramValue: e.cud[k]
                });
            DYO.setRemoteParameters(o)
        }
        return h
    }
    function renderVariation(tagId, object, unitClass, varName, asPureHTML) {
        if (typeof object.variations[varName] == "undefined")
            throw {
                type: "invalid position",
                vari: varName
            };
        var variation = object.variations[varName], element, callback;
        Params.initParams(variation.params);
        var htmlCode = Params.searchAndReplace("html", variation.htmlCode), cssCode = Params.searchAndReplace("css", variation.cssCode), jsCode = Params.searchAndReplace("js", variation.jsCode), userAgent = navigator.userAgent.toLowerCase(), oldBrowser=!1;
        parseFloat((userAgent.match(/msie ([0-9]{1,}[\.0-9]{0,})/) || [])[1]) < 9 && (oldBrowser=!0), styleCode = '<style type="text/css">', styleCode += cssCode, styleCode += "</style>";
        switch (variation.renderType) {
        case"html":
            if (asPureHTML)
                element = document.createElement("div"), element.className = unitClass, oldBrowser ? element.innerHTML = htmlCode + styleCode : element.innerHTML = styleCode + htmlCode, callback = function() {
                    eval("try{(function(){" + jsCode + "})();}catch(e){}")
                };
            else {
                element = document.createElement("iframe"), element.className = unitClass, element.setAttribute("scrolling", "no"), element.setAttribute("marginwidth", "0"), element.setAttribute("marginheight", "0"), element.setAttribute("vspace", "0"), element.setAttribute("hspace", "0"), element.setAttribute("frameborder", "0"), element.setAttribute("frameBorder", "0"), element.setAttribute("style", "overflow:hidden;background-color:#ffffff;border:0;width:" + object.width + "px;height:" + object.height + "px;"), element.setAttribute("width", object.width), element.setAttribute("height", object.height);
                var bodyStyle = "margin:0;position: absolute;";
                bodyStyle += "width:" + object.width + "px;", bodyStyle += "height:" + object.height + "px;";
                var source = "<!DOCTYPE html><html><head>";
                oldBrowser || (source += styleCode), source += '</head><body style="' + bodyStyle + '">', source += htmlCode, source += '<script type="text/javascript">', source += jsCode, source += "</script>", oldBrowser && (source += styleCode), source += "</body></html>", callback = function() {
                    element.contentWindow.document.open(), element.contentWindow.document.write(source), element.contentWindow.document.close()
                }
            }
            break;
        case"image":
            element = document.createElement("div"), element.className = unitClass;
            var imgHtml = '<img src="' + variation.imageUrl + '" width="' + object.width + '" height="' + object.height + '" style="border:none;z-index:10000;" />', imgLink = variation.imageLink;
            typeof variation.imageLink != "undefined" && variation.imageLink != null && variation.imageLink != "" && (typeof DYO.redirects[tagId] != "undefined" && DYO.redirects[tagId] != "" && (imgLink = DYO.redirects[tagId] + imgLink), imgHtml = '<a href="' + imgLink + '" target="' + variation.imageLinkTarget + '">' + imgHtml + "</a>"), element.innerHTML = imgHtml, callback = function() {};
            break;
        case"flash":
            var hasLinkThrough=!1, clickTAG = "";
            element = document.createElement("div"), element.className = unitClass;
            var flashLink = variation.imageLink;
            typeof variation.imageLink != "undefined" && variation.imageLink != null && variation.imageLink != "" && (hasLinkThrough=!0), hasLinkThrough && (typeof DYO.redirects[tagId] != "undefined" && DYO.redirects[tagId] != "" && (flashLink = DYO.redirects[tagId] + flashLink), clickTAG = "clickTAG=" + escape(flashLink));
            var flashHtml = '  <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + object.width + '" height="' + object.height + '" id="dyFlashContent">' + '    <param name="movie" value="' + variation.imageUrl + "?" + clickTAG + '">' + '    <param name="wmode" value="transparent">' + '    <param name="quality" value="autohigh">' + "    <!--[if !IE]>-->" + '    <object type="application/x-shockwave-flash" data="' + variation.imageUrl + "?" + clickTAG + '" width="' + object.width + '" height="' + object.height + '">' + "      <!--<![endif]-->" + '      <a href="http://www.adobe.com/go/getflashplayer">' + '        <img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player" />' + "      </a>" + "      <!--[if !IE]>-->" + "    </object>" + "    <!--<![endif]-->" + "  </object>";
            hasLinkThrough && (flashHtml = '<a href="' + flashLink + '" target="' + variation.imageLinkTarget + '">' + flashHtml + "</a>"), element.innerHTML = flashHtml, callback = function() {};
            break;
        default:
            throw {
                code: 0,
                tag: tagId,
                msg: 'unsupported render type "' + variation.renderType + '" for Smart Tag ' + tagId + " in Smart Object " + object.id + ' in variation "' + varName + '"'
            }
        }
        return {
            element: element,
            callback: callback
        }
    }
    function waitForGeoCode(a) {
        function f() {
            typeof window.DY.geoCode == "undefined" ? setTimeout(f, 100) : a()
        }
        window.DY = window.DY || {};
        if (typeof window.DY.geoCode != "undefined")
            return a();
        if (DY.CookieFunctions.getCookieVal("_dy_geo", !0, !0) !== null) {
            var b = DY.CookieFunctions.getCookieVal("_dy_geo", !0, !0).split(".");
            return window.DY.geoCode = b[0], b.length > 1 && (window.DY.geoCont = b[1]), a()
        }
        if (DY.CookieFunctions.getCookieVal("DYGEO", !0, !0) !== null) {
            var b = DY.CookieFunctions.getCookieVal("DYGEO", !0, !0).split(".");
            return window.DY.geoCode = b[0], b.length > 1 && (window.DY.geoCont = b[1]), a()
        }
        if (!geoCodeRequestPending) {
            geoCodeRequestPending=!0;
            var c = document.createElement("script");
            c.type = "text/javascript", c.src = "//px.dynamicyield.com/geo?jsonp";
            var d = document.getElementsByTagName("script"), e = d[d.length - 1];
            e.parentElement.appendChild(c)
        }
        f()
    }
    function isDyReady() {
        return window.DY && window.DY.Audiences && window.DY.Audiences.getUserAudiences()&&!0
    }
    function waitOnceForDyReady(a, b) {
        typeof b == "undefined" && (b = 20), isDyReady() ? a() : b == 0 ? setTimeout(a, 100) : setTimeout(function() {
            waitOnceForDyReady(a, b - 1)
        }, 100)
    }
    function executeSmartAction(id, rule, firstOverlay) {
        var rawExecutedActions = (DY.CookieFunctions.getCookieVal("_dy_sact", !0, !0) || "").split("*"), executedActions = {};
        (function() {
            for (var a = 0; a < rawExecutedActions.length; a++) {
                var b = rawExecutedActions[a].split(".");
                if (b.length !== 2)
                    continue;
                var c = parseInt(b[0]);
                if (isNaN(c))
                    continue;
                var d = parseInt(b[1]);
                if (isNaN(d))
                    continue;
                var e;
                try {
                    e = DYO.otags[c].rules[0].smartObject.frequency
                } catch (f) {
                    e = NaN
                }
                if (!(d + e > (new Date).getTime() / 1e3))
                    continue;
                executedActions[c] = d
            }
        })();
        if (typeof executedActions[id] == "undefined" && isInAudience({
            rule: rule.ruleDisjs,
            session: !0
        })) {
            var unitClass = "dy_unit dy_smart_object_" + rule.smartObject.id;
            if (rule.smartObject.objectType == DYO.ACTION_TYPES.OVERLAY&&!firstOverlay.value)
                return;
            var variationIdx = DYO.chooseVariation(rule.smartObject.experiment), versionDataStr = DYO.getCurrentVersionDataStr(rule.smartObject.experiment), expVariation = DYO.oexps[rule.smartObject.experiment].variations[variationIdx], currentVariation = rule.smartObject.variations[expVariation.name], actionCallback = null;
            try {
                var isInControlGroup = DYO.Props.isCurrentlyInControlGroup(versionDataStr), expId = rule.smartObject.experiment;
                if (isInControlGroup) {
                    executedActions[id] = parseInt((new Date).getTime() / 1e3);
                    var varId = expVariation.id, logVarCallback = function() {
                        window.DY.ServerUtil.logVariation("ri", expId, [varId], !1, !1, versionDataStr)
                    };
                    window.DY.API("callback", logVarCallback);
                    return 
                }
            } catch (e) {
                DYO.d && console.log({
                    code: 0,
                    actionId: id,
                    msg: "error while considering control-group" + id,
                    ex: e
                })
            }
            Params.initParams(currentVariation.params);
            switch (rule.smartObject.objectType) {
            case DYO.ACTION_TYPES.OVERLAY:
                (function() {
                    try {
                        if (firstOverlay.value) {
                            firstOverlay.value=!1;
                            var a = renderVariation(id, rule.smartObject, unitClass, expVariation.name, !0, !0), b = {
                                position: rule.smartObject.position,
                                background: rule.smartObject.background,
                                opacity: rule.smartObject.opacity,
                                delay: rule.smartObject.delay,
                                duration: rule.smartObject.duration,
                                closing: rule.smartObject.closing
                            }, c = rule.smartObject.experiment, d = expVariation.id, e = versionDataStr;
                            actionCallback = function() {
                                window.DY.AdDetection.markExpUnit(a.element, c, d, !1, !1, e), window.DY.WindowActions.overlay(a, b), function() {
                                    try {
                                        $dy(a.element).click(function() {
                                            try {
                                                DYO.Props.isExplicitlyAttributed(c) && DYO.storeAttributeVariations(c, e, [d])
                                            } catch (a) {}
                                        })
                                    } catch (b) {}
                                }()
                            }, executedActions[id] = parseInt((new Date).getTime() / 1e3)
                        }
                    } catch (f) {
                        firstOverlay.value || (firstOverlay.value=!0)
                    }
                })();
                break;
            case DYO.ACTION_TYPES.NOTIFICATION:
                (function() {
                    try {
                        var a = renderVariation(id, rule.smartObject, unitClass, expVariation.name, !0, !0), b = {
                            position: rule.smartObject.position,
                            delay: rule.smartObject.delay,
                            duration: rule.smartObject.duration
                        }, c = rule.smartObject.experiment, d = expVariation.id, e = versionDataStr;
                        actionCallback = function() {
                            window.DY.AdDetection.markExpUnit(a.element, c, d, !1, !1, e), window.DY.WindowActions.notify(a, b), function() {
                                try {
                                    $dy(a.element).click(function() {
                                        try {
                                            DYO.Props.isExplicitlyAttributed(c) && DYO.storeAttributeVariations(c, e, [d])
                                        } catch (a) {}
                                    })
                                } catch (b) {}
                            }()
                        }, executedActions[id] = parseInt((new Date).getTime() / 1e3)
                    } catch (f) {}
                })();
                break;
            case DYO.ACTION_TYPES.JAVASCRIPT:
                (function() {
                    try {
                        var experimentId = rule.smartObject.experiment, variationId = expVariation.id, verDataStr = versionDataStr;
                        eval("(function(){" + Params.searchAndReplace("js", currentVariation.jsCode) + "})();"), executedActions[id] = parseInt((new Date).getTime() / 1e3), actionCallback = function() {
                            window.DY.ServerUtil.logVariation("ri", experimentId, [variationId], !1, !1, verDataStr)
                        }
                    } catch (ignore) {}
                })()
            }
            actionCallback != null && window.DY.API("callback", actionCallback)
        }
        rawExecutedActions = [];
        for (var id in executedActions)
            rawExecutedActions.push(id + "." + executedActions[id]);
        window.localStorage && (rawExecutedActions.length > 0 ? DY.CookieFunctions.setCookie("_dy_sact", rawExecutedActions.join("*"), 365, "/", DYO.ExpStorageUtils.getSLD()) : DY.CookieFunctions.deleteCookie("_dy_sact", "/", DYO.ExpStorageUtils.getSLD()))
    }
    var geoCodeRequestPending=!1, getContent = function(a, b, c, d, e) {
        return a + "=" + escape(b) + (c ? ";expires=" + c : "") + (d ? ";path=" + d : "") + (e ? ";domain=" + e : ";domain=" + document.domain)
    }, DY = {
        CookieFunctions: function() {
            function b(a) {
                return c(a, !1, !0)
            }
            function c(b, c, d) {
                typeof d == "undefined" && (d=!0);
                var e = null, h = document.cookie.match(a(b));
                return h && (e = unescape(h[1]), d=!1), e == null && (c ? e = f(b) : e = g(b)), e != null && d && (e = unescape(e)), e == "null" || e == "NaN" ? null : e
            }
            function d(a, b, c, d, e) {
                var f = new Date;
                f.setDate(f.getDate() + c), document.cookie = getContent(a, b, c == null ? null : f.toGMTString(), d, e)
            }
            function e(a, b, c) {
                document.cookie = getContent(a, "", "Thu, 01-Jan-1970 00:00:01 GMT", b, c)
            }
            function f(a) {
                try {
                    if (window.sessionStorage)
                        return window.sessionStorage.getItem(a)
                } catch (b) {}
            }
            function g(a) {
                try {
                    if (window.localStorage)
                        return window.localStorage.getItem(a)
                } catch (b) {}
            }
            var a = function(a) {
                return new RegExp("(?:^|;)\\s?" + a + "=(.*?)(?:;|$)", "i")
            };
            return {
                getCookie: b,
                getCookieVal: c,
                setCookie: d,
                deleteCookie: e
            }
        }()
    }, Cookies = function() {
        function c(a) {
            var b = [];
            for (var c = 0; c < a.length; c++)
                a[c] && b.push(a[c]);
            return b
        }
        function d(a) {
            var b = c(a.split(".")), d = {};
            for (var e = 0; e < b.length; e++) {
                var f = b[e].split("@");
                d[f[0]] = f[1] == "nu" ? null : f[1]
            }
            return d
        }
        function e() {
            var b = DY.CookieFunctions.getCookie(a);
            return b == null ? {
                sauds: [],
                schc: {},
                saudCache: {}
            } : (b = b.split("*"), {
                auds: c(b[0].split(".")),
                tchc: d(b[1]),
                chc: d(b[2]),
                audCache: d(b[3])
            })
        }
        function f() {
            var a = DY.CookieFunctions.getCookieVal(b, !0, !0);
            return a == null ? {
                sauds: [],
                schc: {},
                saudCache: {}
            } : (a = a.split("*"), {
                sauds: c(a[0].split(".")),
                schc: d(a[1]),
                saudCache: d(a[2])
            })
        }
        var a = "_dyaud_nchc", b = "_dyaud_sess";
        return {
            loadCHCCookies: e,
            loadSessionCookies: f
        }
    }(), Params = function() {
        function c(b, c, d) {
            a[b][c] = d
        }
        function d(a) {
            b = {
                html: {},
                css: {},
                js: {}
            }, typeof a != "undefined" && a != null && a != "" && (b = DYJSON.parse(decodeURIComponent(a)))
        }
        function e(c, d) {
            d = decodeURIComponent(d);
            for (var e in b[c])
                if (b[c].hasOwnProperty(e)) {
                    var g = a[c][e], h = "";
                    g != null && typeof g != "undefined" && g != "" ? h = g : h = unescape(b[c][e].value);
                    var i = new RegExp(f(e), "gm");
                    d = d.replace(i, h.replace("$", "$$$$"))
                }
            return d
        }
        function f(a) {
            return "\\$(ext|img|image|select|unique|)\\{\\s*" + a.replace(/\ /g, "\\ ") + "(?:\\s*,\\s*(?:\\d+|{[^}]+})\\s*)?\\s*\\}"
        }
        var a = {
            html: {},
            css: {},
            js: {}
        }, b = {
            html: {},
            css: {},
            js: {}
        };
        return {
            initParams: d,
            searchAndReplace: e,
            setParam: c
        }
    }();
    DYO.setRemoteParameters = function(a) {
        try {
            for (var b = 0; b < a.length; b++)
                typeof a[b] != "undefined" && typeof a[b].paramName != "undefined" && (typeof a[b].paramType == "undefined" ? (DYO.setRemoteParameter("html", a[b].paramName, a[b].paramValue), DYO.setRemoteParameter("css", a[b].paramName, a[b].paramValue), DYO.setRemoteParameter("js", a[b].paramName, a[b].paramValue)) : DYO.setRemoteParameter(a[b].paramType, a[b].paramName, a[b].paramValue))
        } catch (c) {}
    }, DYO.setRemoteParameter = Params.setParam, DYO.getTagVariationProperties = function(a) {
        var b = a;
        if (typeof b != "number") {
            for (var c in DYO.otags)
                if (DYO.otags[c].name == b) {
                    b = parseInt(c);
                    break
                }
            typeof b != "number" && (b = parseInt(b))
        }
        var d = DYO.otags[b];
        if (typeof d == "undefined" || d == null)
            return {
                code: 0,
                tag: a,
                msg: "Smart Tag " + a + " not found"
            };
        var e = null;
        for (var f in d.rules)
            if (d.rules[f].ruleDisjs == null || isInAudience({
                rule: d.rules[f].ruleDisjs,
                session: !0
            })) {
                e = d.rules[f].smartObject;
                break
            }
        if (e == null)
            throw {
                code: 0,
                tag: a,
                msg: "no rule matched for Smart Tag " + a
            };
        var g = DYO.getVariationData(e.experiment);
        if (typeof g.value != "undefined" && g.value != null) {
            var h = g.value.name, i = g.value.name, j = d.rules[f].smartObject.variations[g.value.name];
            return {
                code: 1,
                tag: a,
                variation: {
                    id: h,
                    name: i,
                    display: j
                }
            }
        }
        return {
            code: 0,
            tag: a,
            msg: "no variation found for tag"
        }
    }, DYO.redirects = {}, DYO.addRedirect = function(a, b) {
        try {
            if (typeof a != "number") {
                for (var c in DYO.otags)
                    if (DYO.otags[c].name == a) {
                        a = parseInt(c);
                        break
                    }
                typeof a != "number" && (a = parseInt(a))
            }
            DYO.redirects[a] = b
        } catch (d) {
            return {
                code: 0,
                tag: a,
                msg: "error while executing add redirect on tag " + a,
                ex: d
            }
        }
    }, DYO.smartTag = function(a, b, c, d) {
        DYO.smartObject(a, {
            target: b,
            inline: c,
            afterRenderCallback: d
        })
    }, DYO.smartObject = function(a, b) {
        try {
            typeof b != "object" && (b = {}), b.inline!==!0 && (b.inline=!1);
            if (typeof a != "number") {
                for (var c in DYO.otags)
                    if (DYO.otags[c].name == a) {
                        a = parseInt(c);
                        break
                    }
                typeof a != "number" && (a = parseInt(a))
            }
            var d = DYO.otags[a];
            if (typeof d == "undefined" || d == null || d.subType !== "tag")
                return {
                    code: 0,
                    tag: a,
                    msg: "Smart Tag " + a + " not found"
                };
            var e=!0, f;
            typeof b.target != "undefined" && b.target != "" && (f = document.getElementById(b.target), typeof f != "undefined" && f != null && (e=!1));
            if (e) {
                var g = document.getElementsByTagName("script"), h = g[g.length - 1];
                f = h.parentElement
            }
            var i = function(a) {
                return a()
            };
            return typeof d.hasAudRule != "undefined" && d.hasAudRule && (i = waitOnceForDyReady), i(function() {
                waitForGeoCode(function() {
                    function B() {
                        typeof window.DY == "undefined" || typeof window.DY.AdDetection == "undefined" || typeof $dy == "undefined" || typeof $dy(window) == "undefined" || c.objectType === 1 && typeof $dy.renderSmartTagSlider == "undefined" ? setTimeout(B, 100) : j()
                    }
                    var c = null;
                    for (var g = 0; g < d.rules.length; g++)
                        if (d.rules[g].ruleDisjs == null || isInAudience({
                            rule: d.rules[g].ruleDisjs,
                            session: !0
                        })) {
                            c = d.rules[g].smartObject;
                            break
                        }
                    if (c == null)
                        throw {
                            code: 0,
                            tag: a,
                            msg: "no rule matched for Smart Tag " + a
                        };
                    var h, i, j, k = c.slideCount;
                    if (typeof k == "undefined" || k == null || k == 0)
                        k = Object.keys(c.variations).length;
                    var l = c.autoScrollSpeed;
                    if (typeof l == "undefined" || l == null || l == 0)
                        l = 0;
                    var m = "dy_unit dy_smart_object_" + c.id, n = new Array;
                    if (c.objectType)
                        if (typeof c.pinnedVariation == "undefined")
                            n = DYO.chooseMultipleVariations(c.experiment, k);
                        else if (k > 1) {
                            n = DYO.getDynamicVariations(c.experiment, DYO.Props.expProgVersionData(DYO.oexps[c.experiment]));
                            if (n == null || n.length != k || n[0].id != c.pinnedVariation.id) {
                                n = DYO.chooseMultipleVariations(c.experiment, k - 1), n.unshift(c.pinnedVariation);
                                var o = new Array;
                                for (var p = 0; p < n.length; p++)
                                    o.push(n[p].id + ":" + n[p].name);
                                    DYO.setVariations(c.experiment, DYO.Props.expProgVersionData(DYO.oexps[c.experiment]), o)
                                }
                        } else {
                            n = DYO.getDynamicVariations(c.experiment, DYO.Props.expProgVersionData(DYO.oexps[c.experiment]));
                            if (n == null || n.length != 1 || n[0].id != c.pinnedVariation.id) {
                                var o = new Array;
                                o.push(c.pinnedVariation.id + ":" + c.pinnedVariation.name), DYO.setVariations(c.experiment, DYO.Props.expProgVersionData(DYO.oexps[c.experiment]), o)
                            }
                            n = new Array, n.push(c.pinnedVariation)
                        }
                    try {
                        switch (c.objectType) {
                        case 0:
                            var q = DYO.chooseVariation(c.experiment);
                            if (typeof DYO.oexps[c.experiment] == "undefined" || typeof DYO.oexps[c.experiment].variations[q] == "undefined")
                                throw {
                                    type: "invalid position",
                                    vari: q
                                };
                            var r = DYO.oexps[c.experiment].variations[q].name, s = renderVariation(a, c, m, r, b.inline);
                            h = s.element, i = s.callback;
                            var t = DYO.getCurrentVersionDataStr(c.experiment);
                            j = function() {
                                var a = c.experiment, d = DYO.oexps[c.experiment].variations[q].id;
                                c.variations[r].doNotMarkUnit!==!0 ? window.DY.AdDetection.markExpUnit(h, a, d, !1, b.saveExp, t) : window.DY.ServerUtil.logVariation("ri", a, [d], !1, !1, t), function() {
                                    try {
                                        $dy(h).click(function() {
                                            try {
                                                DYO.Props.isExplicitlyAttributed(a) && DYO.storeAttributeVariations(a, t, [d])
                                            } catch (b) {}
                                        })
                                    } catch (b) {}
                                }()
                            };
                            break;
                        case 1:
                            h = document.createElement("div"), h.className = m, i = function() {};
                            var u = function() {}, v = [];
                            for (var w = 0; w < n.length; w++) {
                                var s = renderVariation(a, c, "", n[w].name, b.inline);
                                (function() {
                                    var a = u, b = s.callback;
                                    u = function() {
                                        a(), b()
                                    }
                                })(), v.push({
                                    element: s.element,
                                    variation: n[w].id
                                })
                            }
                            var t = DYO.getCurrentVersionDataStr(c.experiment);
                            j = function() {
                                $dy.renderSmartTagSlider(h, {
                                    expId: c.experiment,
                                    width: c.width,
                                    height: c.height,
                                    scrollSpeed: l,
                                    saveExp: b.saveExp,
                                    versionDataStr: t
                                }, v), u()
                            };
                            break;
                        case 2:
                            h = document.createElement("div"), i = function() {};
                            var x = [];
                            for (var w = 0; w < n.length; w++) {
                                var s = renderVariation(a, c, m + "_" + n[w].id, n[w].name, b.inline);
                                h.appendChild(s.element), function() {
                                    var a = i, b = s.callback;
                                    i = function() {
                                        a(), b()
                                    }
                                }(), x.push({
                                    element: s.element,
                                    variation: n[w]
                                });
                                if (w + 1 < n.length) {
                                    var y = document.createElement("div");
                                    y.innerHTML = decodeURIComponent(c.htmlSeparator);
                                    for (var z = 0; z < y.childNodes.length; z++)
                                        h.appendChild(y.childNodes[z])
                                    }
                            }
                            var t = DYO.getCurrentVersionDataStr(c.experiment);
                            j = function() {
                                for (var a = 0; a < x.length; a++) {
                                    var d = c.experiment;
                                    c.variations[x[a].variation.name].doNotMarkUnit!==!0 ? window.DY.AdDetection.markExpUnit(x[a].element, d, x[a].variation.id, !0, b.saveExp, t, a) : window.DY.ServerUtil.logVariation("ri", d, [x[a].variation.id], !1, !1, t), function() {
                                        try {
                                            var b = a;
                                            $dy(x[b].element).click(function() {
                                                try {
                                                    DYO.Props.isExplicitlyAttributed(d) && DYO.storeAttributeVariations(d, t, [x[b].variation.id])
                                                } catch (a) {}
                                            })
                                        } catch (c) {}
                                    }()
                                }
                                window.DY.AdDetection.ne()
                            };
                            break;
                        default:
                            throw {
                                code: 0,
                                tag: a,
                                msg: 'unsupported object type "' + c.objectType + '" for Smart Tag ' + a + " in Smart Object " + c.id
                            }
                        }
                    } catch (A) {
                        throw A.type == "invalid position" ? {
                            code: 0,
                            tag: a,
                            msg: 'invalid variation position "' + A.vari + '" for Smart Tag ' + a + " in Smart Object " + c.id
                        } : A
                    }
                    e || (f.innerHTML = ""), f.appendChild(h), i(), typeof b.afterRenderCallback == "function" && b.afterRenderCallback(), B()
                })
            }), {
                code: 1,
                tag: a,
                msg: "executing make Smart Tag on tag " + a
            }
        } catch (j) {
            return {
                code: 0,
                tag: a,
                msg: "error while executing make Smart Tag on tag " + a,
                ex: j
            }
        }
    }, DYO.ACTION_TYPES = {
        OVERLAY: 3,
        NOTIFICATION: 4,
        JAVASCRIPT: 5
    }, DYO.executeSmartActions = function() {
        try {
            var a = {
                value: !0
            };
            for (var b in DYO.otags)
                try {
                    if (DYO.otags[b].subType !== "action")
                        continue;
                        (function() {
                            var c = b, d = DYO.otags[b].rules[0];
                            DYO.PageEvents.executeWithPageEvents(d.ruleDisjs, function(b) {
                                d.ruleDisjs = b;
                                var e = function(a) {
                                    return a()
                                };
                                for (var f = 0; f < b.length; f++)
                                    if (b[f].condType === "_Country" || b[f].condType === "_Continent") {
                                        e = waitForGeoCode;
                                        break
                                    }
                                    e(function() {
                                        executeSmartAction(c, d, a)
                                    })
                                })
                            })()
                        } catch (c) {
                DYO.d && console.log({
                    code: 0,
                    actionId: b,
                    msg: "error while executing Smart Action " + b,
                    ex: c
                })
            }
            return {
                code: 1,
                msg: "executed Smart Actions"
            }
        } catch (c) {
            return {
                code: 0,
                msg: "error while executing Smart Actions",
                ex: c
            }
        }
        return {
            code: 1,
            msg: "executed Smart Actions"
        }
    }
}(), typeof DYJSON != "object" && (DYJSON = {}), function() {
    function f(a) {
        return a < 10 ? "0" + a : a
    }
    function quote(a) {
        return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
            var b = meta[a];
            return typeof b == "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"' : '"' + a + '"'
    }
    function str(a, b) {
        var c, d, e, f, g = gap, h, i = b[a];
        i && typeof i == "object" && typeof i.toDYJSON == "function" && (i = i.toDYJSON(a)), typeof rep == "function" && (i = rep.call(b, a, i));
        switch (typeof i) {
        case"string":
            return quote(i);
        case"number":
            return isFinite(i) ? String(i) : "null";
        case"boolean":
        case"null":
            return String(i);
        case"object":
            if (!i)
                return "null";
            gap += indent, h = [];
            if (Object.prototype.toString.apply(i) === "[object Array]") {
                f = i.length;
                for (c = 0; c < f; c += 1)
                    h[c] = str(c, i) || "null";
                return e = h.length === 0 ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e
            }
            if (rep && typeof rep == "object") {
                f = rep.length;
                for (c = 0; c < f; c += 1)
                    typeof rep[c] == "string" && (d = rep[c], e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e))
                } else 
                    for (d in i)
                        Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
            return e = h.length === 0 ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e
        }
    }
    "use strict", typeof Date.prototype.toDYJSON != "function" && (Date.prototype.toDYJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this
        .getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toDYJSON = Number.prototype.toDYJSON = Boolean.prototype.toDYJSON = function() {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, rep;
    typeof JSON != "undefined" && typeof JSON.stringify == "function" && JSON.stringify([1]) === "[1]" && (DYJSON.stringify = JSON.stringify), typeof DYJSON.stringify != "function" && (DYJSON.stringify = function(a, b, c) {
        var d;
        gap = "", indent = "";
        if (typeof c == "number")
            for (d = 0; d < c; d += 1)
                indent += " ";
        else 
            typeof c == "string" && (indent = c);
        rep = b;
        if (!b || typeof b == "function" || typeof b == "object" && typeof b.length == "number")
            return str("", {
                "": a
            });
        throw new Error("JSON.stringify")
    }), typeof JSON != "undefined" && typeof JSON.parse == "function" && (DYJSON.parse = JSON.parse), typeof DYJSON.parse != "function" && (DYJSON.parse = function(text, reviver) {
        function walk(a, b) {
            var c, d, e = a[b];
            if (e && typeof e == "object")
                for (c in e)
                    Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), d !== undefined ? e[c] = d : delete e[c]);
            return reviver.call(a, b, e)
        }
        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
            return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
                "": j
            }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}();
