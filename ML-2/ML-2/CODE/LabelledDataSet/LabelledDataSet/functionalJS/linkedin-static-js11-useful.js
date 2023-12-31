/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 2.8.1
*/
(function() {
    var lang = YAHOO.lang, util = YAHOO.util, Ev = util.Event;
    util.DataSourceBase = function(oLiveData, oConfigs) {
        if (oLiveData === null || oLiveData === undefined) {
            return;
        }
        this.liveData = oLiveData;
        this._oQueue = {
            interval: null,
            conn: null,
            requests: []
        };
        this.responseSchema = {};
        if (oConfigs && (oConfigs.constructor == Object)) {
            for (var sConfig in oConfigs) {
                if (sConfig) {
                    this[sConfig] = oConfigs[sConfig];
                }
            }
        }
        var maxCacheEntries = this.maxCacheEntries;
        if (!lang.isNumber(maxCacheEntries) || (maxCacheEntries < 0)) {
            maxCacheEntries = 0;
        }
        this._aIntervals = [];
        this.createEvent("cacheRequestEvent");
        this.createEvent("cacheResponseEvent");
        this.createEvent("requestEvent");
        this.createEvent("responseEvent");
        this.createEvent("responseParseEvent");
        this.createEvent("responseCacheEvent");
        this.createEvent("dataErrorEvent");
        this.createEvent("cacheFlushEvent");
        var DS = util.DataSourceBase;
        this._sName = "DataSource instance" + DS._nIndex;
        DS._nIndex++;
    };
    var DS = util.DataSourceBase;
    lang.augmentObject(DS, {
        TYPE_UNKNOWN: - 1,
        TYPE_JSARRAY: 0,
        TYPE_JSFUNCTION: 1,
        TYPE_XHR: 2,
        TYPE_JSON: 3,
        TYPE_XML: 4,
        TYPE_TEXT: 5,
        TYPE_HTMLTABLE: 6,
        TYPE_SCRIPTNODE: 7,
        TYPE_LOCAL: 8,
        ERROR_DATAINVALID: "Invalid data",
        ERROR_DATANULL: "Null data",
        _nIndex: 0,
        _nTransactionId: 0,
        _getLocationValue: function(field, context) {
            var locator = field.locator || field.key || field, xmldoc = context.ownerDocument || context, result, res, value = null;
            try {
                if (!lang.isUndefined(xmldoc.evaluate)) {
                    result = xmldoc.evaluate(locator, context, xmldoc.createNSResolver(!context.ownerDocument ? context.documentElement : context.ownerDocument.documentElement), 0, null);
                    while (res = result.iterateNext()) {
                        value = res.textContent;
                    }
                } else {
                    xmldoc.setProperty("SelectionLanguage", "XPath");
                    result = context.selectNodes(locator)[0];
                    value = result.value || result.text || null;
                }
                return value;
            } catch (e) {}
        },
        issueCallback: function(callback, params, error, scope) {
            if (lang.isFunction(callback)) {
                callback.apply(scope, params);
            } else {
                if (lang.isObject(callback)) {
                    scope = callback.scope || scope || window;
                    var callbackFunc = callback.success;
                    if (error) {
                        callbackFunc = callback.failure;
                    }
                    if (callbackFunc) {
                        callbackFunc.apply(scope, params.concat([callback.argument]));
                    }
                }
            }
        },
        parseString: function(oData) {
            if (!lang.isValue(oData)) {
                return null;
            }
            var string = oData + "";
            if (lang.isString(string)) {
                return string;
            } else {
                return null;
            }
        },
        parseNumber: function(oData) {
            if (!lang.isValue(oData) || (oData === "")) {
                return null;
            }
            var number = oData * 1;
            if (lang.isNumber(number)) {
                return number;
            } else {
                return null;
            }
        },
        convertNumber: function(oData) {
            return DS.parseNumber(oData);
        },
        parseDate: function(oData) {
            var date = null;
            if (!(oData instanceof Date)) {
                date = new Date(oData);
            } else {
                return oData;
            }
            if (date instanceof Date) {
                return date;
            } else {
                return null;
            }
        },
        convertDate: function(oData) {
            return DS.parseDate(oData);
        }
    });
    DS.Parser = {
        string: DS.parseString,
        number: DS.parseNumber,
        date: DS.parseDate
    };
    DS.prototype = {
        _sName: null,
        _aCache: null,
        _oQueue: null,
        _aIntervals: null,
        maxCacheEntries: 0,
        liveData: null,
        dataType: DS.TYPE_UNKNOWN,
        responseType: DS.TYPE_UNKNOWN,
        responseSchema: null,
        useXPath: false,
        toString: function() {
            return this._sName;
        },
        getCachedResponse: function(oRequest, oCallback, oCaller) {
            var aCache = this._aCache;
            if (this.maxCacheEntries > 0) {
                if (!aCache) {
                    this._aCache = [];
                } else {
                    var nCacheLength = aCache.length;
                    if (nCacheLength > 0) {
                        var oResponse = null;
                        this.fireEvent("cacheRequestEvent", {
                            request: oRequest,
                            callback: oCallback,
                            caller: oCaller
                        });
                        for (var i = nCacheLength - 1; i >= 0; i--) {
                            var oCacheElem = aCache[i];
                            if (this.isCacheHit(oRequest, oCacheElem.request)) {
                                oResponse = oCacheElem.response;
                                this.fireEvent("cacheResponseEvent", {
                                    request: oRequest,
                                    response: oResponse,
                                    callback: oCallback,
                                    caller: oCaller
                                });
                                if (i < nCacheLength - 1) {
                                    aCache.splice(i, 1);
                                    this.addToCache(oRequest, oResponse);
                                }
                                oResponse.cached = true;
                                break;
                            }
                        }
                        return oResponse;
                    }
                }
            } else {
                if (aCache) {
                    this._aCache = null;
                }
            }
            return null;
        },
        isCacheHit: function(oRequest, oCachedRequest) {
            return (oRequest === oCachedRequest);
        },
        addToCache: function(oRequest, oResponse) {
            var aCache = this._aCache;
            if (!aCache) {
                return;
            }
            while (aCache.length >= this.maxCacheEntries) {
                aCache.shift();
            }
            var oCacheElem = {
                request: oRequest,
                response: oResponse
            };
            aCache[aCache.length] = oCacheElem;
            this.fireEvent("responseCacheEvent", {
                request: oRequest,
                response: oResponse
            });
        },
        flushCache: function() {
            if (this._aCache) {
                this._aCache = [];
                this.fireEvent("cacheFlushEvent");
            }
        },
        setInterval: function(nMsec, oRequest, oCallback, oCaller) {
            if (lang.isNumber(nMsec) && (nMsec >= 0)) {
                var oSelf = this;
                var nId = setInterval(function() {
                    oSelf.makeConnection(oRequest, oCallback, oCaller);
                }, nMsec);
                this._aIntervals.push(nId);
                return nId;
            } else {}
        },
        clearInterval: function(nId) {
            var tracker = this._aIntervals || [];
            for (var i = tracker.length - 1; i>-1; i--) {
                if (tracker[i] === nId) {
                    tracker.splice(i, 1);
                    clearInterval(nId);
                }
            }
        },
        clearAllIntervals: function() {
            var tracker = this._aIntervals || [];
            for (var i = tracker.length - 1; i>-1; i--) {
                clearInterval(tracker[i]);
            }
            tracker = [];
        },
        sendRequest: function(oRequest, oCallback, oCaller) {
            var oCachedResponse = this.getCachedResponse(oRequest, oCallback, oCaller);
            if (oCachedResponse) {
                DS.issueCallback(oCallback, [oRequest, oCachedResponse], false, oCaller);
                return null;
            }
            return this.makeConnection(oRequest, oCallback, oCaller);
        },
        makeConnection: function(oRequest, oCallback, oCaller) {
            var tId = DS._nTransactionId++;
            this.fireEvent("requestEvent", {
                tId: tId,
                request: oRequest,
                callback: oCallback,
                caller: oCaller
            });
            var oRawResponse = this.liveData;
            this.handleResponse(oRequest, oRawResponse, oCallback, oCaller, tId);
            return tId;
        },
        handleResponse: function(oRequest, oRawResponse, oCallback, oCaller, tId) {
            this.fireEvent("responseEvent", {
                tId: tId,
                request: oRequest,
                response: oRawResponse,
                callback: oCallback,
                caller: oCaller
            });
            var xhr = (this.dataType == DS.TYPE_XHR) ? true: false;
            var oParsedResponse = null;
            var oFullResponse = oRawResponse;
            if (this.responseType === DS.TYPE_UNKNOWN) {
                var ctype = (oRawResponse && oRawResponse.getResponseHeader) ? oRawResponse.getResponseHeader["Content-Type"]: null;
                if (ctype) {
                    if (ctype.indexOf("text/xml")>-1) {
                        this.responseType = DS.TYPE_XML;
                    } else {
                        if (ctype.indexOf("application/json")>-1) {
                            this.responseType = DS.TYPE_JSON;
                        } else {
                            if (ctype.indexOf("text/plain")>-1) {
                                this.responseType = DS.TYPE_TEXT;
                            }
                        }
                    }
                } else {
                    if (YAHOO.lang.isArray(oRawResponse)) {
                        this.responseType = DS.TYPE_JSARRAY;
                    } else {
                        if (oRawResponse && oRawResponse.nodeType && (oRawResponse.nodeType === 9 || oRawResponse.nodeType === 1 || oRawResponse.nodeType === 11)) {
                            this.responseType = DS.TYPE_XML;
                        } else {
                            if (oRawResponse && oRawResponse.nodeName && (oRawResponse.nodeName.toLowerCase() == "table")) {
                                this.responseType = DS.TYPE_HTMLTABLE;
                            } else {
                                if (YAHOO.lang.isObject(oRawResponse)) {
                                    this.responseType = DS.TYPE_JSON;
                                } else {
                                    if (YAHOO.lang.isString(oRawResponse)) {
                                        this.responseType = DS.TYPE_TEXT;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            switch (this.responseType) {
            case DS.TYPE_JSARRAY:
                if (xhr && oRawResponse && oRawResponse.responseText) {
                    oFullResponse = oRawResponse.responseText;
                }
                try {
                    if (lang.isString(oFullResponse)) {
                        var parseArgs = [oFullResponse].concat(this.parseJSONArgs);
                        if (lang.JSON) {
                            oFullResponse = lang.JSON.parse.apply(lang.JSON, parseArgs);
                        } else {
                            if (window.JSON && JSON.parse) {
                                oFullResponse = JSON.parse.apply(JSON, parseArgs);
                            } else {
                                if (oFullResponse.parseJSON) {
                                    oFullResponse = oFullResponse.parseJSON.apply(oFullResponse, parseArgs.slice(1));
                                } else {
                                    while (oFullResponse.length > 0 && (oFullResponse.charAt(0) != "{") && (oFullResponse.charAt(0) != "[")) {
                                        oFullResponse = oFullResponse.substring(1, oFullResponse.length);
                                    }
                                    if (oFullResponse.length > 0) {
                                        var arrayEnd = Math.max(oFullResponse.lastIndexOf("]"), oFullResponse.lastIndexOf("}"));
                                        oFullResponse = oFullResponse.substring(0, arrayEnd + 1);
                                        oFullResponse = eval("(" + oFullResponse + ")");
                                    }
                                }
                            }
                        }
                    }
                } catch (e1) {}
                oFullResponse = this.doBeforeParseData(oRequest, oFullResponse, oCallback);
                oParsedResponse = this.parseArrayData(oRequest, oFullResponse);
                break;
            case DS.TYPE_JSON:
                if (xhr && oRawResponse && oRawResponse.responseText) {
                    oFullResponse = oRawResponse.responseText;
                }
                try {
                    if (lang.isString(oFullResponse)) {
                        var parseArgs = [oFullResponse].concat(this.parseJSONArgs);
                        if (lang.JSON) {
                            oFullResponse = lang.JSON.parse.apply(lang.JSON, parseArgs);
                        } else {
                            if (window.JSON && JSON.parse) {
                                oFullResponse = JSON.parse.apply(JSON, parseArgs);
                            } else {
                                if (oFullResponse.parseJSON) {
                                    oFullResponse = oFullResponse.parseJSON.apply(oFullResponse, parseArgs.slice(1));
                                } else {
                                    while (oFullResponse.length > 0 && (oFullResponse.charAt(0) != "{") && (oFullResponse.charAt(0) != "[")) {
                                        oFullResponse = oFullResponse.substring(1, oFullResponse.length);
                                    }
                                    if (oFullResponse.length > 0) {
                                        var objEnd = Math.max(oFullResponse.lastIndexOf("]"), oFullResponse.lastIndexOf("}"));
                                        oFullResponse = oFullResponse.substring(0, objEnd + 1);
                                        oFullResponse = eval("(" + oFullResponse + ")");
                                    }
                                }
                            }
                        }
                    }
                } catch (e) {}
                oFullResponse = this.doBeforeParseData(oRequest, oFullResponse, oCallback);
                oParsedResponse = this.parseJSONData(oRequest, oFullResponse);
                break;
            case DS.TYPE_HTMLTABLE:
                if (xhr && oRawResponse.responseText) {
                    var el = document.createElement("div");
                    el.innerHTML = oRawResponse.responseText;
                    oFullResponse = el.getElementsByTagName("table")[0];
                }
                oFullResponse = this.doBeforeParseData(oRequest, oFullResponse, oCallback);
                oParsedResponse = this.parseHTMLTableData(oRequest, oFullResponse);
                break;
            case DS.TYPE_XML:
                if (xhr && oRawResponse.responseXML) {
                    oFullResponse = oRawResponse.responseXML;
                }
                oFullResponse = this.doBeforeParseData(oRequest, oFullResponse, oCallback);
                oParsedResponse = this.parseXMLData(oRequest, oFullResponse);
                break;
            case DS.TYPE_TEXT:
                if (xhr && lang.isString(oRawResponse.responseText)) {
                    oFullResponse = oRawResponse.responseText;
                }
                oFullResponse = this.doBeforeParseData(oRequest, oFullResponse, oCallback);
                oParsedResponse = this.parseTextData(oRequest, oFullResponse);
                break;
            default:
                oFullResponse = this.doBeforeParseData(oRequest, oFullResponse, oCallback);
                oParsedResponse = this.parseData(oRequest, oFullResponse);
                break;
            }
            oParsedResponse = oParsedResponse || {};
            if (!oParsedResponse.results) {
                oParsedResponse.results = [];
            }
            if (!oParsedResponse.meta) {
                oParsedResponse.meta = {};
            }
            if (!oParsedResponse.error) {
                oParsedResponse = this.doBeforeCallback(oRequest, oFullResponse, oParsedResponse, oCallback);
                this.fireEvent("responseParseEvent", {
                    request: oRequest,
                    response: oParsedResponse,
                    callback: oCallback,
                    caller: oCaller
                });
                this.addToCache(oRequest, oParsedResponse);
            } else {
                oParsedResponse.error = true;
                this.fireEvent("dataErrorEvent", {
                    request: oRequest,
                    response: oRawResponse,
                    callback: oCallback,
                    caller: oCaller,
                    message: DS.ERROR_DATANULL
                });
            }
            oParsedResponse.tId = tId;
            DS.issueCallback(oCallback, [oRequest, oParsedResponse], oParsedResponse.error, oCaller);
        },
        doBeforeParseData: function(oRequest, oFullResponse, oCallback) {
            return oFullResponse;
        },
        doBeforeCallback: function(oRequest, oFullResponse, oParsedResponse, oCallback) {
            return oParsedResponse;
        },
        parseData: function(oRequest, oFullResponse) {
            if (lang.isValue(oFullResponse)) {
                var oParsedResponse = {
                    results: oFullResponse,
                    meta: {}
                };
                return oParsedResponse;
            }
            return null;
        },
        parseArrayData: function(oRequest, oFullResponse) {
            if (lang.isArray(oFullResponse)) {
                var results = [], i, j, rec, field, data;
                if (lang.isArray(this.responseSchema.fields)) {
                    var fields = this.responseSchema.fields;
                    for (i = fields.length - 1; i >= 0; --i) {
                        if (typeof fields[i] !== "object") {
                            fields[i] = {
                                key: fields[i]
                            };
                        }
                    }
                    var parsers = {}, p;
                    for (i = fields.length - 1; i >= 0; --i) {
                        p = (typeof fields[i].parser === "function" ? fields[i].parser : DS.Parser[fields[i].parser + ""]) || fields[i].converter;
                        if (p) {
                            parsers[fields[i].key] = p;
                        }
                    }
                    var arrType = lang.isArray(oFullResponse[0]);
                    for (i = oFullResponse.length - 1; i>-1; i--) {
                        var oResult = {};
                        rec = oFullResponse[i];
                        if (typeof rec === "object") {
                            for (j = fields.length - 1; j>-1; j--) {
                                field = fields[j];
                                data = arrType ? rec[j] : rec[field.key];
                                if (parsers[field.key]) {
                                    data = parsers[field.key].call(this, data);
                                }
                                if (data === undefined) {
                                    data = null;
                                }
                                oResult[field.key] = data;
                            }
                        } else {
                            if (lang.isString(rec)) {
                                for (j = fields.length - 1; j>-1; j--) {
                                    field = fields[j];
                                    data = rec;
                                    if (parsers[field.key]) {
                                        data = parsers[field.key].call(this, data);
                                    }
                                    if (data === undefined) {
                                        data = null;
                                    }
                                    oResult[field.key] = data;
                                }
                            }
                        }
                        results[i] = oResult;
                    }
                } else {
                    results = oFullResponse;
                }
                var oParsedResponse = {
                    results: results
                };
                return oParsedResponse;
            }
            return null;
        },
        parseTextData: function(oRequest, oFullResponse) {
            if (lang.isString(oFullResponse)) {
                if (lang.isString(this.responseSchema.recordDelim) && lang.isString(this.responseSchema.fieldDelim)) {
                    var oParsedResponse = {
                        results: []
                    };
                    var recDelim = this.responseSchema.recordDelim;
                    var fieldDelim = this.responseSchema.fieldDelim;
                    if (oFullResponse.length > 0) {
                        var newLength = oFullResponse.length - recDelim.length;
                        if (oFullResponse.substr(newLength) == recDelim) {
                            oFullResponse = oFullResponse.substr(0, newLength);
                        }
                        if (oFullResponse.length > 0) {
                            var recordsarray = oFullResponse.split(recDelim);
                            for (var i = 0, len = recordsarray.length, recIdx = 0; i < len; ++i) {
                                var bError = false, sRecord = recordsarray[i];
                                if (lang.isString(sRecord) && (sRecord.length > 0)) {
                                    var fielddataarray = recordsarray[i].split(fieldDelim);
                                    var oResult = {};
                                    if (lang.isArray(this.responseSchema.fields)) {
                                        var fields = this.responseSchema.fields;
                                        for (var j = fields.length - 1; j>-1; j--) {
                                            try {
                                                var data = fielddataarray[j];
                                                if (lang.isString(data)) {
                                                    if (data.charAt(0) == '"') {
                                                        data = data.substr(1);
                                                    }
                                                    if (data.charAt(data.length - 1) == '"') {
                                                        data = data.substr(0, data.length - 1);
                                                    }
                                                    var field = fields[j];
                                                    var key = (lang.isValue(field.key)) ? field.key: field;
                                                    if (!field.parser && field.converter) {
                                                        field.parser = field.converter;
                                                    }
                                                    var parser = (typeof field.parser === "function") ? field.parser: DS.Parser[field.parser + ""];
                                                    if (parser) {
                                                        data = parser.call(this, data);
                                                    }
                                                    if (data === undefined) {
                                                        data = null;
                                                    }
                                                    oResult[key] = data;
                                                } else {
                                                    bError = true;
                                                }
                                            } catch (e) {
                                                bError = true;
                                            }
                                        }
                                    } else {
                                        oResult = fielddataarray;
                                    }
                                    if (!bError) {
                                        oParsedResponse.results[recIdx++] = oResult;
                                    }
                                }
                            }
                        }
                    }
                    return oParsedResponse;
                }
            }
            return null;
        },
        parseXMLResult: function(result) {
            var oResult = {}, schema = this.responseSchema;
            try {
                for (var m = schema.fields.length - 1; m >= 0; m--) {
                    var field = schema.fields[m];
                    var key = (lang.isValue(field.key)) ? field.key: field;
                    var data = null;
                    if (this.useXPath) {
                        data = YAHOO.util.DataSource._getLocationValue(field, result);
                    } else {
                        var xmlAttr = result.attributes.getNamedItem(key);
                        if (xmlAttr) {
                            data = xmlAttr.value;
                        } else {
                            var xmlNode = result.getElementsByTagName(key);
                            if (xmlNode && xmlNode.item(0)) {
                                var item = xmlNode.item(0);
                                data = (item) ? ((item.text) ? item.text : (item.textContent) ? item.textContent : null) : null;
                                if (!data) {
                                    var datapieces = [];
                                    for (var j = 0, len = item.childNodes.length; j < len; j++) {
                                        if (item.childNodes[j].nodeValue) {
                                            datapieces[datapieces.length] = item.childNodes[j].nodeValue;
                                        }
                                    }
                                    if (datapieces.length > 0) {
                                        data = datapieces.join("");
                                    }
                                }
                            }
                        }
                    }
                    if (data === null) {
                        data = "";
                    }
                    if (!field.parser && field.converter) {
                        field.parser = field.converter;
                    }
                    var parser = (typeof field.parser === "function") ? field.parser: DS.Parser[field.parser + ""];
                    if (parser) {
                        data = parser.call(this, data);
                    }
                    if (data === undefined) {
                        data = null;
                    }
                    oResult[key] = data;
                }
            } catch (e) {}
            return oResult;
        },
        parseXMLData: function(oRequest, oFullResponse) {
            var bError = false, schema = this.responseSchema, oParsedResponse = {
                meta: {}
            }, xmlList = null, metaNode = schema.metaNode, metaLocators = schema.metaFields || {}, i, k, loc, v;
            try {
                if (this.useXPath) {
                    for (k in metaLocators) {
                        oParsedResponse.meta[k] = YAHOO.util.DataSource._getLocationValue(metaLocators[k], oFullResponse);
                    }
                } else {
                    metaNode = metaNode ? oFullResponse.getElementsByTagName(metaNode)[0] : oFullResponse;
                    if (metaNode) {
                        for (k in metaLocators) {
                            if (lang.hasOwnProperty(metaLocators, k)) {
                                loc = metaLocators[k];
                                v = metaNode.getElementsByTagName(loc)[0];
                                if (v) {
                                    v = v.firstChild.nodeValue;
                                } else {
                                    v = metaNode.attributes.getNamedItem(loc);
                                    if (v) {
                                        v = v.value;
                                    }
                                }
                                if (lang.isValue(v)) {
                                    oParsedResponse.meta[k] = v;
                                }
                            }
                        }
                    }
                }
                xmlList = (schema.resultNode) ? oFullResponse.getElementsByTagName(schema.resultNode) : null;
            } catch (e) {}
            if (!xmlList ||!lang.isArray(schema.fields)) {
                bError = true;
            } else {
                oParsedResponse.results = [];
                for (i = xmlList.length - 1; i >= 0; --i) {
                    var oResult = this.parseXMLResult(xmlList.item(i));
                    oParsedResponse.results[i] = oResult;
                }
            }
            if (bError) {
                oParsedResponse.error = true;
            } else {}
            return oParsedResponse;
        },
        parseJSONData: function(oRequest, oFullResponse) {
            var oParsedResponse = {
                results: [],
                meta: {}
            };
            if (lang.isObject(oFullResponse) && this.responseSchema.resultsList) {
                var schema = this.responseSchema, fields = schema.fields, resultsList = oFullResponse, results = [], metaFields = schema.metaFields || {}, fieldParsers = [], fieldPaths = [], simpleFields = [], bError = false, i, len, j, v, key, parser, path;
                var buildPath = function(needle) {
                    var path = null, keys = [], i = 0;
                    if (needle) {
                        needle = needle.replace(/\[(['"])(.*?)\1\]/g, function(x, $1, $2) {
                            keys[i] = $2;
                            return ".@" + (i++);
                        }).replace(/\[(\d+)\]/g, function(x, $1) {
                            keys[i] = parseInt($1, 10) | 0;
                            return ".@" + (i++);
                        }).replace(/^\./, "");
                        if (!/[^\w\.\$@]/.test(needle)) {
                            path = needle.split(".");
                            for (i = path.length - 1; i >= 0; --i) {
                                if (path[i].charAt(0) === "@") {
                                    path[i] = keys[parseInt(path[i].substr(1), 10)];
                                }
                            }
                        } else {}
                    }
                    return path;
                };
                var walkPath = function(path, origin) {
                    var v = origin, i = 0, len = path.length;
                    for (; i < len && v; ++i) {
                        v = v[path[i]];
                    }
                    return v;
                };
                path = buildPath(schema.resultsList);
                if (path) {
                    resultsList = walkPath(path, oFullResponse);
                    if (resultsList === undefined) {
                        bError = true;
                    }
                } else {
                    bError = true;
                }
                if (!resultsList) {
                    resultsList = [];
                }
                if (!lang.isArray(resultsList)) {
                    resultsList = [resultsList];
                }
                if (!bError) {
                    if (schema.fields) {
                        var field;
                        for (i = 0, len = fields.length; i < len; i++) {
                            field = fields[i];
                            key = field.key || field;
                            parser = ((typeof field.parser === "function") ? field.parser : DS.Parser[field.parser + ""]) || field.converter;
                            path = buildPath(key);
                            if (parser) {
                                fieldParsers[fieldParsers.length] = {
                                    key: key,
                                    parser: parser
                                };
                            }
                            if (path) {
                                if (path.length > 1) {
                                    fieldPaths[fieldPaths.length] = {
                                        key: key,
                                        path: path
                                    };
                                } else {
                                    simpleFields[simpleFields.length] = {
                                        key: key,
                                        path: path[0]
                                    };
                                }
                            } else {}
                        }
                        for (i = resultsList.length - 1; i >= 0; --i) {
                            var r = resultsList[i], rec = {};
                            if (r) {
                                for (j = simpleFields.length - 1; j >= 0; --j) {
                                    rec[simpleFields[j].key] = (r[simpleFields[j].path] !== undefined) ? r[simpleFields[j].path] : r[j];
                                }
                                for (j = fieldPaths.length - 1; j >= 0; --j) {
                                    rec[fieldPaths[j].key] = walkPath(fieldPaths[j].path, r);
                                }
                                for (j = fieldParsers.length - 1; j >= 0; --j) {
                                    var p = fieldParsers[j].key;
                                    rec[p] = fieldParsers[j].parser(rec[p]);
                                    if (rec[p] === undefined) {
                                        rec[p] = null;
                                    }
                                }
                            }
                            results[i] = rec;
                        }
                    } else {
                        results = resultsList;
                    }
                    for (key in metaFields) {
                        if (lang.hasOwnProperty(metaFields, key)) {
                            path = buildPath(metaFields[key]);
                            if (path) {
                                v = walkPath(path, oFullResponse);
                                oParsedResponse.meta[key] = v;
                            }
                        }
                    }
                } else {
                    oParsedResponse.error = true;
                }
                oParsedResponse.results = results;
            } else {
                oParsedResponse.error = true;
            }
            return oParsedResponse;
        },
        parseHTMLTableData: function(oRequest, oFullResponse) {
            var bError = false;
            var elTable = oFullResponse;
            var fields = this.responseSchema.fields;
            var oParsedResponse = {
                results: []
            };
            if (lang.isArray(fields)) {
                for (var i = 0; i < elTable.tBodies.length; i++) {
                    var elTbody = elTable.tBodies[i];
                    for (var j = elTbody.rows.length - 1; j>-1; j--) {
                        var elRow = elTbody.rows[j];
                        var oResult = {};
                        for (var k = fields.length - 1; k>-1; k--) {
                            var field = fields[k];
                            var key = (lang.isValue(field.key)) ? field.key: field;
                            var data = elRow.cells[k].innerHTML;
                            if (!field.parser && field.converter) {
                                field.parser = field.converter;
                            }
                            var parser = (typeof field.parser === "function") ? field.parser: DS.Parser[field.parser + ""];
                            if (parser) {
                                data = parser.call(this, data);
                            }
                            if (data === undefined) {
                                data = null;
                            }
                            oResult[key] = data;
                        }
                        oParsedResponse.results[j] = oResult;
                    }
                }
            } else {
                bError = true;
            }
            if (bError) {
                oParsedResponse.error = true;
            } else {}
            return oParsedResponse;
        }
    };
    lang.augmentProto(DS, util.EventProvider);
    util.LocalDataSource = function(oLiveData, oConfigs) {
        this.dataType = DS.TYPE_LOCAL;
        if (oLiveData) {
            if (YAHOO.lang.isArray(oLiveData)) {
                this.responseType = DS.TYPE_JSARRAY;
            } else {
                if (oLiveData.nodeType && oLiveData.nodeType == 9) {
                    this.responseType = DS.TYPE_XML;
                } else {
                    if (oLiveData.nodeName && (oLiveData.nodeName.toLowerCase() == "table")) {
                        this.responseType = DS.TYPE_HTMLTABLE;
                        oLiveData = oLiveData.cloneNode(true);
                    } else {
                        if (YAHOO.lang.isString(oLiveData)) {
                            this.responseType = DS.TYPE_TEXT;
                        } else {
                            if (YAHOO.lang.isObject(oLiveData)) {
                                this.responseType = DS.TYPE_JSON;
                            }
                        }
                    }
                }
            }
        } else {
            oLiveData = [];
            this.responseType = DS.TYPE_JSARRAY;
        }
        util.LocalDataSource.superclass.constructor.call(this, oLiveData, oConfigs);
    };
    lang.extend(util.LocalDataSource, DS);
    lang.augmentObject(util.LocalDataSource, DS);
    util.FunctionDataSource = function(oLiveData, oConfigs) {
        this.dataType = DS.TYPE_JSFUNCTION;
        oLiveData = oLiveData || function() {};
        util.FunctionDataSource.superclass.constructor.call(this, oLiveData, oConfigs);
    };
    lang.extend(util.FunctionDataSource, DS, {
        scope: null,
        makeConnection: function(oRequest, oCallback, oCaller) {
            var tId = DS._nTransactionId++;
            this.fireEvent("requestEvent", {
                tId: tId,
                request: oRequest,
                callback: oCallback,
                caller: oCaller
            });
            var oRawResponse = (this.scope) ? this.liveData.call(this.scope, oRequest, this): this.liveData(oRequest);
            if (this.responseType === DS.TYPE_UNKNOWN) {
                if (YAHOO.lang.isArray(oRawResponse)) {
                    this.responseType = DS.TYPE_JSARRAY;
                } else {
                    if (oRawResponse && oRawResponse.nodeType && oRawResponse.nodeType == 9) {
                        this.responseType = DS.TYPE_XML;
                    } else {
                        if (oRawResponse && oRawResponse.nodeName && (oRawResponse.nodeName.toLowerCase() == "table")) {
                            this.responseType = DS.TYPE_HTMLTABLE;
                        } else {
                            if (YAHOO.lang.isObject(oRawResponse)) {
                                this.responseType = DS.TYPE_JSON;
                            } else {
                                if (YAHOO.lang.isString(oRawResponse)) {
                                    this.responseType = DS.TYPE_TEXT;
                                }
                            }
                        }
                    }
                }
            }
            this.handleResponse(oRequest, oRawResponse, oCallback, oCaller, tId);
            return tId;
        }
    });
    lang.augmentObject(util.FunctionDataSource, DS);
    util.ScriptNodeDataSource = function(oLiveData, oConfigs) {
        this.dataType = DS.TYPE_SCRIPTNODE;
        oLiveData = oLiveData || "";
        util.ScriptNodeDataSource.superclass.constructor.call(this, oLiveData, oConfigs);
    };
    lang.extend(util.ScriptNodeDataSource, DS, {
        getUtility: util.Get,
        asyncMode: "allowAll",
        scriptCallbackParam: "callback",
        generateRequestCallback: function(id) {
            return "&" + this.scriptCallbackParam + "=YAHOO.util.ScriptNodeDataSource.callbacks[" + id + "]";
        },
        doBeforeGetScriptNode: function(sUri) {
            return sUri;
        },
        makeConnection: function(oRequest, oCallback, oCaller) {
            var tId = DS._nTransactionId++;
            this.fireEvent("requestEvent", {
                tId: tId,
                request: oRequest,
                callback: oCallback,
                caller: oCaller
            });
            if (util.ScriptNodeDataSource._nPending === 0) {
                util.ScriptNodeDataSource.callbacks = [];
                util.ScriptNodeDataSource._nId = 0;
            }
            var id = util.ScriptNodeDataSource._nId;
            util.ScriptNodeDataSource._nId++;
            var oSelf = this;
            util.ScriptNodeDataSource.callbacks[id] = function(oRawResponse) {
                if ((oSelf.asyncMode !== "ignoreStaleResponses") || (id === util.ScriptNodeDataSource.callbacks.length - 1)) {
                    if (oSelf.responseType === DS.TYPE_UNKNOWN) {
                        if (YAHOO.lang.isArray(oRawResponse)) {
                            oSelf.responseType = DS.TYPE_JSARRAY;
                        } else {
                            if (oRawResponse.nodeType && oRawResponse.nodeType == 9) {
                                oSelf.responseType = DS.TYPE_XML;
                            } else {
                                if (oRawResponse.nodeName && (oRawResponse.nodeName.toLowerCase() == "table")) {
                                    oSelf.responseType = DS.TYPE_HTMLTABLE;
                                } else {
                                    if (YAHOO.lang.isObject(oRawResponse)) {
                                        oSelf.responseType = DS.TYPE_JSON;
                                    } else {
                                        if (YAHOO.lang.isString(oRawResponse)) {
                                            oSelf.responseType = DS.TYPE_TEXT;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    oSelf.handleResponse(oRequest, oRawResponse, oCallback, oCaller, tId);
                } else {}
                delete util.ScriptNodeDataSource.callbacks[id];
            };
            util.ScriptNodeDataSource._nPending++;
            var sUri = this.liveData + oRequest + this.generateRequestCallback(id);
            sUri = this.doBeforeGetScriptNode(sUri);
            this.getUtility.script(sUri, {
                autopurge: true,
                onsuccess: util.ScriptNodeDataSource._bumpPendingDown,
                onfail: util.ScriptNodeDataSource._bumpPendingDown
            });
            return tId;
        }
    });
    lang.augmentObject(util.ScriptNodeDataSource, DS);
    lang.augmentObject(util.ScriptNodeDataSource, {
        _nId: 0,
        _nPending: 0,
        callbacks: []
    });
    util.XHRDataSource = function(oLiveData, oConfigs) {
        this.dataType = DS.TYPE_XHR;
        this.connMgr = this.connMgr || util.Connect;
        oLiveData = oLiveData || "";
        util.XHRDataSource.superclass.constructor.call(this, oLiveData, oConfigs);
    };
    lang.extend(util.XHRDataSource, DS, {
        connMgr: null,
        connXhrMode: "allowAll",
        connMethodPost: false,
        connTimeout: 0,
        makeConnection: function(oRequest, oCallback, oCaller) {
            var oRawResponse = null;
            var tId = DS._nTransactionId++;
            this.fireEvent("requestEvent", {
                tId: tId,
                request: oRequest,
                callback: oCallback,
                caller: oCaller
            });
            var oSelf = this;
            var oConnMgr = this.connMgr;
            var oQueue = this._oQueue;
            var _xhrSuccess = function(oResponse) {
                if (oResponse && (this.connXhrMode == "ignoreStaleResponses") && (oResponse.tId != oQueue.conn.tId)) {
                    return null;
                } else {
                    if (!oResponse) {
                        this.fireEvent("dataErrorEvent", {
                            request: oRequest,
                            response: null,
                            callback: oCallback,
                            caller: oCaller,
                            message: DS.ERROR_DATANULL
                        });
                        DS.issueCallback(oCallback, [oRequest, {
                            error: true
                        }
                        ], true, oCaller);
                        return null;
                    } else {
                        if (this.responseType === DS.TYPE_UNKNOWN) {
                            var ctype = (oResponse.getResponseHeader) ? oResponse.getResponseHeader["Content-Type"]: null;
                            if (ctype) {
                                if (ctype.indexOf("text/xml")>-1) {
                                    this.responseType = DS.TYPE_XML;
                                } else {
                                    if (ctype.indexOf("application/json")>-1) {
                                        this.responseType = DS.TYPE_JSON;
                                    } else {
                                        if (ctype.indexOf("text/plain")>-1) {
                                            this.responseType = DS.TYPE_TEXT;
                                        }
                                    }
                                }
                            }
                        }
                        this.handleResponse(oRequest, oResponse, oCallback, oCaller, tId);
                    }
                }
            };
            var _xhrFailure = function(oResponse) {
                this.fireEvent("dataErrorEvent", {
                    request: oRequest,
                    response: oResponse,
                    callback: oCallback,
                    caller: oCaller,
                    message: DS.ERROR_DATAINVALID
                });
                if (lang.isString(this.liveData) && lang.isString(oRequest) && (this.liveData.lastIndexOf("?") !== this.liveData.length - 1) && (oRequest.indexOf("?") !== 0)) {}
                oResponse = oResponse || {};
                oResponse.error = true;
                DS.issueCallback(oCallback, [oRequest, oResponse], true, oCaller);
                return null;
            };
            var _xhrCallback = {
                success: _xhrSuccess,
                failure: _xhrFailure,
                scope: this
            };
            if (lang.isNumber(this.connTimeout)) {
                _xhrCallback.timeout = this.connTimeout;
            }
            if (this.connXhrMode == "cancelStaleRequests") {
                if (oQueue.conn) {
                    if (oConnMgr.abort) {
                        oConnMgr.abort(oQueue.conn);
                        oQueue.conn = null;
                    } else {}
                }
            }
            if (oConnMgr && oConnMgr.asyncRequest) {
                var sLiveData = this.liveData;
                var isPost = this.connMethodPost;
                var sMethod = (isPost) ? "POST": "GET";
                var sUri = (isPost ||!lang.isValue(oRequest)) ? sLiveData: sLiveData + oRequest;
                var sRequest = (isPost) ? oRequest: null;
                if (this.connXhrMode != "queueRequests") {
                    oQueue.conn = oConnMgr.asyncRequest(sMethod, sUri, _xhrCallback, sRequest);
                } else {
                    if (oQueue.conn) {
                        var allRequests = oQueue.requests;
                        allRequests.push({
                            request: oRequest,
                            callback: _xhrCallback
                        });
                        if (!oQueue.interval) {
                            oQueue.interval = setInterval(function() {
                                if (oConnMgr.isCallInProgress(oQueue.conn)) {
                                    return;
                                } else {
                                    if (allRequests.length > 0) {
                                        sUri = (isPost ||!lang.isValue(allRequests[0].request)) ? sLiveData : sLiveData + allRequests[0].request;
                                        sRequest = (isPost) ? allRequests[0].request : null;
                                        oQueue.conn = oConnMgr.asyncRequest(sMethod, sUri, allRequests[0].callback, sRequest);
                                        allRequests.shift();
                                    } else {
                                        clearInterval(oQueue.interval);
                                        oQueue.interval = null;
                                    }
                                }
                            }, 50);
                        }
                    } else {
                        oQueue.conn = oConnMgr.asyncRequest(sMethod, sUri, _xhrCallback, sRequest);
                    }
                }
            } else {
                DS.issueCallback(oCallback, [oRequest, {
                    error: true
                }
                ], true, oCaller);
            }
            return tId;
        }
    });
    lang.augmentObject(util.XHRDataSource, DS);
    util.DataSource = function(oLiveData, oConfigs) {
        oConfigs = oConfigs || {};
        var dataType = oConfigs.dataType;
        if (dataType) {
            if (dataType == DS.TYPE_LOCAL) {
                lang.augmentObject(util.DataSource, util.LocalDataSource);
                return new util.LocalDataSource(oLiveData, oConfigs);
            } else {
                if (dataType == DS.TYPE_XHR) {
                    lang.augmentObject(util.DataSource, util.XHRDataSource);
                    return new util.XHRDataSource(oLiveData, oConfigs);
                } else {
                    if (dataType == DS.TYPE_SCRIPTNODE) {
                        lang.augmentObject(util.DataSource, util.ScriptNodeDataSource);
                        return new util.ScriptNodeDataSource(oLiveData, oConfigs);
                    } else {
                        if (dataType == DS.TYPE_JSFUNCTION) {
                            lang.augmentObject(util.DataSource, util.FunctionDataSource);
                            return new util.FunctionDataSource(oLiveData, oConfigs);
                        }
                    }
                }
            }
        }
        if (YAHOO.lang.isString(oLiveData)) {
            lang.augmentObject(util.DataSource, util.XHRDataSource);
            return new util.XHRDataSource(oLiveData, oConfigs);
        } else {
            if (YAHOO.lang.isFunction(oLiveData)) {
                lang.augmentObject(util.DataSource, util.FunctionDataSource);
                return new util.FunctionDataSource(oLiveData, oConfigs);
            } else {
                lang.augmentObject(util.DataSource, util.LocalDataSource);
                return new util.LocalDataSource(oLiveData, oConfigs);
            }
        }
    };
    lang.augmentObject(util.DataSource, DS);
})();
YAHOO.util.Number = {
    format: function(B, E) {
        if (!isFinite( + B)) {
            return "";
        }
        B=!isFinite( + B) ? 0 : + B;
        E = YAHOO.lang.merge(YAHOO.util.Number.format.defaults, (E || {}));
        var C = B < 0, F = Math.abs(B), A = E.decimalPlaces, I = E.thousandsSeparator, H, G, D;
        if (A < 0) {
            H = F - (F%1) + "";
            D = H.length + A;
            if (D > 0) {
                H = Number("." + H).toFixed(D).slice(2) + new Array(H.length - D + 1).join("0");
            } else {
                H = "0";
            }
        } else {
            H = F < 1 && F >= 0.5&&!A ? "1" : F.toFixed(A);
        }
        if (F > 1000) {
            G = H.split(/\D/);
            D = G[0].length%3 || 3;
            G[0] = G[0].slice(0, D) + G[0].slice(D).replace(/(\d{3})/g, I + "$1");
            H = G.join(E.decimalSeparator);
        }
        H = E.prefix + H + E.suffix;
        return C ? E.negativeFormat.replace(/#/, H) : H;
    }
};
YAHOO.util.Number.format.defaults = {
    decimalSeparator: ".",
    decimalPlaces: null,
    thousandsSeparator: "",
    prefix: "",
    suffix: "",
    negativeFormat: "-#"
};
(function() {
    var A = function(C, E, D) {
        if (typeof D === "undefined") {
            D = 10;
        }
        for (; parseInt(C, 10) < D && D > 1; D/=10) {
            C = E.toString() + C;
        }
        return C.toString();
    };
    var B = {
        formats: {
            a: function(D, C) {
                return C.a[D.getDay()];
            },
            A: function(D, C) {
                return C.A[D.getDay()];
            },
            b: function(D, C) {
                return C.b[D.getMonth()];
            },
            B: function(D, C) {
                return C.B[D.getMonth()];
            },
            C: function(C) {
                return A(parseInt(C.getFullYear() / 100, 10), 0);
            },
            d: ["getDate", "0"],
            e: ["getDate", " "],
            g: function(C) {
                return A(parseInt(B.formats.G(C)%100, 10), 0);
            },
            G: function(E) {
                var F = E.getFullYear();
                var D = parseInt(B.formats.V(E), 10);
                var C = parseInt(B.formats.W(E), 10);
                if (C > D) {
                    F++;
                } else {
                    if (C === 0 && D >= 52) {
                        F--;
                    }
                }
                return F;
            },
            H: ["getHours", "0"],
            I: function(D) {
                var C = D.getHours()%12;
                return A(C === 0 ? 12 : C, 0);
            },
            j: function(G) {
                var F = new Date("" + G.getFullYear() + "/1/1 GMT");
                var D = new Date("" + G.getFullYear() + "/" + (G.getMonth() + 1) + "/" + G.getDate() + " GMT");
                var C = D - F;
                var E = parseInt(C / 60000 / 60 / 24, 10) + 1;
                return A(E, 0, 100);
            },
            k: ["getHours", " "],
            l: function(D) {
                var C = D.getHours()%12;
                return A(C === 0 ? 12 : C, " ");
            },
            m: function(C) {
                return A(C.getMonth() + 1, 0);
            },
            M: ["getMinutes", "0"],
            p: function(D, C) {
                return C.p[D.getHours() >= 12 ? 1: 0];
            },
            P: function(D, C) {
                return C.P[D.getHours() >= 12 ? 1: 0];
            },
            s: function(D, C) {
                return parseInt(D.getTime() / 1000, 10);
            },
            S: ["getSeconds", "0"],
            u: function(C) {
                var D = C.getDay();
                return D === 0 ? 7 : D;
            },
            U: function(F) {
                var C = parseInt(B.formats.j(F), 10);
                var E = 6 - F.getDay();
                var D = parseInt((C + E) / 7, 10);
                return A(D, 0);
            },
            V: function(F) {
                var E = parseInt(B.formats.W(F), 10);
                var C = (new Date("" + F.getFullYear() + "/1/1")).getDay();
                var D = E + (C > 4 || C <= 1 ? 0 : 1);
                if (D === 53 && (new Date("" + F.getFullYear() + "/12/31")).getDay() < 4) {
                    D = 1;
                } else {
                    if (D === 0) {
                        D = B.formats.V(new Date("" + (F.getFullYear() - 1) + "/12/31"));
                    }
                }
                return A(D, 0);
            },
            w: "getDay",
            W: function(F) {
                var C = parseInt(B.formats.j(F), 10);
                var E = 7 - B.formats.u(F);
                var D = parseInt((C + E) / 7, 10);
                return A(D, 0, 10);
            },
            y: function(C) {
                return A(C.getFullYear()%100, 0);
            },
            Y: "getFullYear",
            z: function(E) {
                var D = E.getTimezoneOffset();
                var C = A(parseInt(Math.abs(D / 60), 10), 0);
                var F = A(Math.abs(D%60), 0);
                return (D > 0 ? "-" : "+") + C + F;
            },
            Z: function(C) {
                var D = C.toString().replace(/^.*:\d\d( GMT[+-]\d+)? \(?([A-Za-z ]+)\)?\d*$/, "$2").replace(/[a-z ]/g, "");
                if (D.length > 4) {
                    D = B.formats.z(C);
                }
                return D;
            },
            "%": function(C) {
                return "%";
            }
        },
        aggregates: {
            c: "locale",
            D: "%m/%d/%y",
            F: "%Y-%m-%d",
            h: "%b",
            n: "\n",
            r: "locale",
            R: "%H:%M",
            t: "\t",
            T: "%H:%M:%S",
            x: "locale",
            X: "locale"
        },
        format: function(G, F, D) {
            F = F || {};
            if (!(G instanceof Date)) {
                return YAHOO.lang.isValue(G) ? G : "";
            }
            var H = F.format || "%m/%d/%Y";
            if (H === "YYYY/MM/DD") {
                H = "%Y/%m/%d";
            } else {
                if (H === "DD/MM/YYYY") {
                    H = "%d/%m/%Y";
                } else {
                    if (H === "MM/DD/YYYY") {
                        H = "%m/%d/%Y";
                    }
                }
            }
            D = D || "en";
            if (!(D in YAHOO.util.DateLocale)) {
                if (D.replace(/-[a-zA-Z]+$/, "") in YAHOO.util.DateLocale) {
                    D = D.replace(/-[a-zA-Z]+$/, "");
                } else {
                    D = "en";
                }
            }
            var J = YAHOO.util.DateLocale[D];
            var C = function(L, K) {
                var M = B.aggregates[K];
                return (M === "locale" ? J[K] : M);
            };
            var E = function(L, K) {
                var M = B.formats[K];
                if (typeof M === "string") {
                    return G[M]();
                } else {
                    if (typeof M === "function") {
                        return M.call(G, G, J);
                    } else {
                        if (typeof M === "object" && typeof M[0] === "string") {
                            return A(G[M[0]](), M[1]);
                        } else {
                            return K;
                        }
                    }
                }
            };
            while (H.match(/%[cDFhnrRtTxX]/)) {
                H = H.replace(/%([cDFhnrRtTxX])/g, C);
            }
            var I = H.replace(/%([aAbBCdegGHIjklmMpPsSuUVwWyYzZ%])/g, E);
            C = E = undefined;
            return I;
        }
    };
    YAHOO.namespace("YAHOO.util");
    YAHOO.util.Date = B;
    YAHOO.util.DateLocale = {
        a: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        A: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        b: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        B: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        c: "%a %d %b %Y %T %Z",
        p: ["AM", "PM"],
        P: ["am", "pm"],
        r: "%I:%M:%S %p",
        x: "%d/%m/%y",
        X: "%T"
    };
    YAHOO.util.DateLocale["en"] = YAHOO.lang.merge(YAHOO.util.DateLocale, {});
    YAHOO.util.DateLocale["en-US"] = YAHOO.lang.merge(YAHOO.util.DateLocale["en"], {
        c: "%a %d %b %Y %I:%M:%S %p %Z",
        x: "%m/%d/%Y",
        X: "%I:%M:%S %p"
    });
    YAHOO.util.DateLocale["en-GB"] = YAHOO.lang.merge(YAHOO.util.DateLocale["en"], {
        r: "%l:%M:%S %P %Z"
    });
    YAHOO.util.DateLocale["en-AU"] = YAHOO.lang.merge(YAHOO.util.DateLocale["en"]);
})();
YAHOO.register("datasource", YAHOO.util.DataSource, {
    version: "2.8.1",
    build: "19"
});
YAHOO.widget.DS_JSArray = YAHOO.util.LocalDataSource;
YAHOO.widget.DS_JSFunction = YAHOO.util.FunctionDataSource;
YAHOO.widget.DS_XHR = function(b, a, d) {
    var c = new YAHOO.util.XHRDataSource(b, d);
    c._aDeprecatedSchema = a;
    return c
};
YAHOO.widget.DS_ScriptNode = function(b, a, d) {
    var c = new YAHOO.util.ScriptNodeDataSource(b, d);
    c._aDeprecatedSchema = a;
    return c
};
YAHOO.widget.DS_XHR.TYPE_JSON = YAHOO.util.DataSourceBase.TYPE_JSON;
YAHOO.widget.DS_XHR.TYPE_XML = YAHOO.util.DataSourceBase.TYPE_XML;
YAHOO.widget.DS_XHR.TYPE_FLAT = YAHOO.util.DataSourceBase.TYPE_TEXT;
YAHOO.widget.AutoComplete = function(g, b, j, c) {
    if (g && b && j) {
        if (j && YAHOO.lang.isFunction(j.sendRequest)) {
            this.dataSource = j
        } else {
            return 
        }
        this.key = 0;
        var d = j.responseSchema;
        if (j._aDeprecatedSchema) {
            var k = j._aDeprecatedSchema;
            if (YAHOO.lang.isArray(k)) {
                if ((j.responseType === YAHOO.util.DataSourceBase.TYPE_JSON) || (j.responseType === YAHOO.util.DataSourceBase.TYPE_UNKNOWN)) {
                    d.resultsList = k[0];
                    this.key = k[1];
                    d.fields = (k.length < 3) ? null : k.slice(1)
                } else {
                    if (j.responseType === YAHOO.util.DataSourceBase.TYPE_XML) {
                        d.resultNode = k[0];
                        this.key = k[1];
                        d.fields = k.slice(1)
                    } else {
                        if (j.responseType === YAHOO.util.DataSourceBase.TYPE_TEXT) {
                            d.recordDelim = k[0];
                            d.fieldDelim = k[1]
                        }
                    }
                }
                j.responseSchema = d
            }
        }
        if (YAHOO.util.Dom.inDocument(g)) {
            if (YAHOO.lang.isString(g)) {
                this._sName = "instance" + YAHOO.widget.AutoComplete._nIndex + " " + g;
                this._elTextbox = document.getElementById(g)
            } else {
                this._sName = (g.id) ? "instance" + YAHOO.widget.AutoComplete._nIndex + " " + g.id : "instance" + YAHOO.widget.AutoComplete._nIndex;
                this._elTextbox = g
            }
            YAHOO.util.Dom.addClass(this._elTextbox, "yui-ac-input")
        } else {
            return 
        }
        if (YAHOO.util.Dom.inDocument(b)) {
            if (YAHOO.lang.isString(b)) {
                this._elContainer = document.getElementById(b)
            } else {
                this._elContainer = b
            }
            if (this._elContainer.style.display == "none") {}
            var e = this._elContainer.parentNode;
            var a = e.tagName.toLowerCase();
            if (a == "div") {
                YAHOO.util.Dom.addClass(e, "yui-ac")
            } else {}
        } else {
            return 
        }
        if (this.dataSource.dataType === YAHOO.util.DataSourceBase.TYPE_LOCAL) {
            this.applyLocalFilter = true
        }
        if (c && (c.constructor == Object)) {
            for (var i in c) {
                if (i) {
                    this[i] = c[i]
                }
            }
        }
        this._initContainerEl();
        this._initProps();
        this._initListEl();
        this._initContainerHelperEls();
        var h = this;
        var f = this._elTextbox;
        YAHOO.util.Event.addListener(f, "keyup", h._onTextboxKeyUp, h);
        YAHOO.util.Event.addListener(f, "keydown", h._onTextboxKeyDown, h);
        YAHOO.util.Event.addListener(f, "focus", h._onTextboxFocus, h);
        YAHOO.util.Event.addListener(f, "blur", h._onTextboxBlur, h);
        YAHOO.util.Event.addListener(b, "mouseover", h._onContainerMouseover, h);
        YAHOO.util.Event.addListener(b, "mouseout", h._onContainerMouseout, h);
        YAHOO.util.Event.addListener(b, "click", h._onContainerClick, h);
        YAHOO.util.Event.addListener(b, "scroll", h._onContainerScroll, h);
        YAHOO.util.Event.addListener(b, "resize", h._onContainerResize, h);
        YAHOO.util.Event.addListener(f, "keypress", h._onTextboxKeyPress, h);
        YAHOO.util.Event.addListener(window, "unload", h._onWindowUnload, h);
        this.textboxFocusEvent = new YAHOO.util.CustomEvent("textboxFocus", this);
        this.textboxKeyEvent = new YAHOO.util.CustomEvent("textboxKey", this);
        this.dataRequestEvent = new YAHOO.util.CustomEvent("dataRequest", this);
        this.dataReturnEvent = new YAHOO.util.CustomEvent("dataReturn", this);
        this.dataErrorEvent = new YAHOO.util.CustomEvent("dataError", this);
        this.containerPopulateEvent = new YAHOO.util.CustomEvent("containerPopulate", this);
        this.containerExpandEvent = new YAHOO.util.CustomEvent("containerExpand", this);
        this.typeAheadEvent = new YAHOO.util.CustomEvent("typeAhead", this);
        this.itemMouseOverEvent = new YAHOO.util.CustomEvent("itemMouseOver", this);
        this.itemMouseOutEvent = new YAHOO.util.CustomEvent("itemMouseOut", this);
        this.itemArrowToEvent = new YAHOO.util.CustomEvent("itemArrowTo", this);
        this.itemArrowFromEvent = new YAHOO.util.CustomEvent("itemArrowFrom", this);
        this.itemSelectEvent = new YAHOO.util.CustomEvent("itemSelect", this);
        this.unmatchedItemSelectEvent = new YAHOO.util.CustomEvent("unmatchedItemSelect", this);
        this.selectionEnforceEvent = new YAHOO.util.CustomEvent("selectionEnforce", this);
        this.containerCollapseEvent = new YAHOO.util.CustomEvent("containerCollapse", this);
        this.textboxBlurEvent = new YAHOO.util.CustomEvent("textboxBlur", this);
        this.textboxChangeEvent = new YAHOO.util.CustomEvent("textboxChange", this);
        f.setAttribute("autocomplete", "off");
        YAHOO.widget.AutoComplete._nIndex++
    } else {}
};
YAHOO.widget.AutoComplete.prototype.dataSource = null;
YAHOO.widget.AutoComplete.prototype.applyLocalFilter = null;
YAHOO.widget.AutoComplete.prototype.queryMatchCase = false;
YAHOO.widget.AutoComplete.prototype.queryMatchContains = false;
YAHOO.widget.AutoComplete.prototype.queryMatchSubset = false;
YAHOO.widget.AutoComplete.prototype.minQueryLength = 1;
YAHOO.widget.AutoComplete.prototype.maxResultsDisplayed = 10;
YAHOO.widget.AutoComplete.prototype.queryDelay = 0.2;
YAHOO.widget.AutoComplete.prototype.typeAheadDelay = 0.5;
YAHOO.widget.AutoComplete.prototype.queryInterval = 500;
YAHOO.widget.AutoComplete.prototype.highlightClassName = "yui-ac-highlight";
YAHOO.widget.AutoComplete.prototype.prehighlightClassName = null;
YAHOO.widget.AutoComplete.prototype.delimChar = null;
YAHOO.widget.AutoComplete.prototype.autoHighlight = true;
YAHOO.widget.AutoComplete.prototype.typeAhead = false;
YAHOO.widget.AutoComplete.prototype.animHoriz = false;
YAHOO.widget.AutoComplete.prototype.animVert = true;
YAHOO.widget.AutoComplete.prototype.animSpeed = 0.3;
YAHOO.widget.AutoComplete.prototype.forceSelection = false;
YAHOO.widget.AutoComplete.prototype.allowBrowserAutocomplete = true;
YAHOO.widget.AutoComplete.prototype.alwaysShowContainer = false;
YAHOO.widget.AutoComplete.prototype.useIFrame = false;
YAHOO.widget.AutoComplete.prototype.useShadow = false;
YAHOO.widget.AutoComplete.prototype.suppressInputUpdate = false;
YAHOO.widget.AutoComplete.prototype.resultTypeList = true;
YAHOO.widget.AutoComplete.prototype.queryQuestionMark = true;
YAHOO.widget.AutoComplete.prototype.autoSnapContainer = true;
YAHOO.widget.AutoComplete.prototype.toString = function() {
    return "AutoComplete " + this._sName
};
YAHOO.widget.AutoComplete.prototype.getInputEl = function() {
    return this._elTextbox
};
YAHOO.widget.AutoComplete.prototype.getContainerEl = function() {
    return this._elContainer
};
YAHOO.widget.AutoComplete.prototype.isFocused = function() {
    return this._bFocused
};
YAHOO.widget.AutoComplete.prototype.isContainerOpen = function() {
    return this._bContainerOpen
};
YAHOO.widget.AutoComplete.prototype.getListEl = function() {
    return this._elList
};
YAHOO.widget.AutoComplete.prototype.getListItemMatch = function(a) {
    if (a._sResultMatch) {
        return a._sResultMatch
    } else {
        return null
    }
};
YAHOO.widget.AutoComplete.prototype.getListItemData = function(a) {
    if (a._oResultData) {
        return a._oResultData
    } else {
        return null
    }
};
YAHOO.widget.AutoComplete.prototype.getListItemIndex = function(a) {
    if (YAHOO.lang.isNumber(a._nItemIndex)) {
        return a._nItemIndex
    } else {
        return null
    }
};
YAHOO.widget.AutoComplete.prototype.setHeader = function(b) {
    if (this._elHeader) {
        var a = this._elHeader;
        if (b) {
            a.innerHTML = b;
            a.style.display = ""
        } else {
            a.innerHTML = "";
            a.style.display = "none"
        }
    }
};
YAHOO.widget.AutoComplete.prototype.setFooter = function(b) {
    if (this._elFooter) {
        var a = this._elFooter;
        if (b) {
            a.innerHTML = b;
            a.style.display = ""
        } else {
            a.innerHTML = "";
            a.style.display = "none"
        }
    }
};
YAHOO.widget.AutoComplete.prototype.setBody = function(a) {
    if (this._elBody) {
        var b = this._elBody;
        YAHOO.util.Event.purgeElement(b, true);
        if (a) {
            b.innerHTML = a;
            b.style.display = ""
        } else {
            b.innerHTML = "";
            b.style.display = "none"
        }
        this._elList = null
    }
};
YAHOO.widget.AutoComplete.prototype.generateRequest = function(b) {
    var a = this.dataSource.dataType;
    if (a === YAHOO.util.DataSourceBase.TYPE_XHR) {
        if (!this.dataSource.connMethodPost) {
            b = (this.queryQuestionMark ? "?" : "") + (this.dataSource.scriptQueryParam || "query") + "=" + b + (this.dataSource.scriptQueryAppend ? ("&" + this.dataSource.scriptQueryAppend) : "")
        } else {
            b = (this.dataSource.scriptQueryParam || "query") + "=" + b + (this.dataSource.scriptQueryAppend ? ("&" + this.dataSource.scriptQueryAppend) : "")
        }
    } else {
        if (a === YAHOO.util.DataSourceBase.TYPE_SCRIPTNODE) {
            b = "&" + (this.dataSource.scriptQueryParam || "query") + "=" + b + (this.dataSource.scriptQueryAppend ? ("&" + this.dataSource.scriptQueryAppend) : "")
        }
    }
    return b
};
YAHOO.widget.AutoComplete.prototype.sendQuery = function(b) {
    this._bFocused = true;
    var a = (this.delimChar) ? this._elTextbox.value + b: b;
    this._sendQuery(a)
};
YAHOO.widget.AutoComplete.prototype.snapContainer = function() {
    var a = this._elTextbox, b = YAHOO.util.Dom.getXY(a);
    b[1] += YAHOO.util.Dom.get(a).offsetHeight + 2;
    YAHOO.util.Dom.setXY(this._elContainer, b)
};
YAHOO.widget.AutoComplete.prototype.expandContainer = function() {
    this._toggleContainer(true)
};
YAHOO.widget.AutoComplete.prototype.collapseContainer = function() {
    this._toggleContainer(false)
};
YAHOO.widget.AutoComplete.prototype.clearList = function() {
    var b = this._elList.childNodes, a = b.length - 1;
    for (; a>-1; a--) {
        b[a].style.display = "none"
    }
};
YAHOO.widget.AutoComplete.prototype.getSubsetMatches = function(e) {
    var d, c, a;
    for (var b = e.length; b >= this.minQueryLength; b--) {
        a = this.generateRequest(e.substr(0, b));
        this.dataRequestEvent.fire(this, d, a);
        c = this.dataSource.getCachedResponse(a);
        if (c) {
            return this.filterResults.apply(this.dataSource, [e, c, c, {
                scope: this
            }
            ])
        }
    }
    return null
};
YAHOO.widget.AutoComplete.prototype.preparseRawResponse = function(c, b, a) {
    var d = ((this.responseStripAfter !== "") && (b.indexOf)) ? b.indexOf(this.responseStripAfter): - 1;
    if (d!=-1) {
        b = b.substring(0, d)
    }
    return b
};
YAHOO.widget.AutoComplete.prototype.filterResults = function(l, n, r, m) {
    if (m && m.argument && m.argument.query) {
        l = m.argument.query
    }
    if (l && l !== "") {
        r = YAHOO.widget.AutoComplete._cloneObject(r);
        var j = m.scope, q = this, c = r.results, o = [], b = j.maxResultsDisplayed, k = (q.queryMatchCase || j.queryMatchCase), a = (q.queryMatchContains || j.queryMatchContains);
        for (var d = 0, h = c.length; d < h; d++) {
            var f = c[d];
            var e = null;
            if (YAHOO.lang.isString(f)) {
                e = f
            } else {
                if (YAHOO.lang.isArray(f)) {
                    e = f[0]
                } else {
                    if (this.responseSchema.fields) {
                        var p = this.responseSchema.fields[0].key || this.responseSchema.fields[0];
                        e = f[p]
                    } else {
                        if (this.key) {
                            e = f[this.key]
                        }
                    }
                }
            }
            if (YAHOO.lang.isString(e)) {
                var g = (k) ? e.indexOf(decodeURIComponent(l)): e.toLowerCase().indexOf(decodeURIComponent(l).toLowerCase());
                if ((!a && (g === 0)) || (a && (g>-1))) {
                    o.push(f)
                }
            }
            if (h > b && o.length === b) {
                break
            }
        }
        r.results = o
    } else {}
    return r
};
YAHOO.widget.AutoComplete.prototype.handleResponse = function(c, a, b) {
    if ((this instanceof YAHOO.widget.AutoComplete) && this._sName) {
        this._populateList(c, a, b)
    }
};
YAHOO.widget.AutoComplete.prototype.doBeforeLoadData = function(c, a, b) {
    return true
};
YAHOO.widget.AutoComplete.prototype.formatResult = function(b, d, a) {
    var c = (a) ? a: "";
    return c
};
YAHOO.widget.AutoComplete.prototype.doBeforeExpandContainer = function(d, a, c, b) {
    return true
};
YAHOO.widget.AutoComplete.prototype.destroy = function() {
    var b = this.toString();
    var a = this._elTextbox;
    var d = this._elContainer;
    this.textboxFocusEvent.unsubscribeAll();
    this.textboxKeyEvent.unsubscribeAll();
    this.dataRequestEvent.unsubscribeAll();
    this.dataReturnEvent.unsubscribeAll();
    this.dataErrorEvent.unsubscribeAll();
    this.containerPopulateEvent.unsubscribeAll();
    this.containerExpandEvent.unsubscribeAll();
    this.typeAheadEvent.unsubscribeAll();
    this.itemMouseOverEvent.unsubscribeAll();
    this.itemMouseOutEvent.unsubscribeAll();
    this.itemArrowToEvent.unsubscribeAll();
    this.itemArrowFromEvent.unsubscribeAll();
    this.itemSelectEvent.unsubscribeAll();
    this.unmatchedItemSelectEvent.unsubscribeAll();
    this.selectionEnforceEvent.unsubscribeAll();
    this.containerCollapseEvent.unsubscribeAll();
    this.textboxBlurEvent.unsubscribeAll();
    this.textboxChangeEvent.unsubscribeAll();
    YAHOO.util.Event.purgeElement(a, true);
    YAHOO.util.Event.purgeElement(d, true);
    d.innerHTML = "";
    for (var c in this) {
        if (YAHOO.lang.hasOwnProperty(this, c)) {
            this[c] = null
        }
    }
};
YAHOO.widget.AutoComplete.prototype.textboxFocusEvent = null;
YAHOO.widget.AutoComplete.prototype.textboxKeyEvent = null;
YAHOO.widget.AutoComplete.prototype.dataRequestEvent = null;
YAHOO.widget.AutoComplete.prototype.dataReturnEvent = null;
YAHOO.widget.AutoComplete.prototype.dataErrorEvent = null;
YAHOO.widget.AutoComplete.prototype.containerPopulateEvent = null;
YAHOO.widget.AutoComplete.prototype.containerExpandEvent = null;
YAHOO.widget.AutoComplete.prototype.typeAheadEvent = null;
YAHOO.widget.AutoComplete.prototype.itemMouseOverEvent = null;
YAHOO.widget.AutoComplete.prototype.itemMouseOutEvent = null;
YAHOO.widget.AutoComplete.prototype.itemArrowToEvent = null;
YAHOO.widget.AutoComplete.prototype.itemArrowFromEvent = null;
YAHOO.widget.AutoComplete.prototype.itemSelectEvent = null;
YAHOO.widget.AutoComplete.prototype.unmatchedItemSelectEvent = null;
YAHOO.widget.AutoComplete.prototype.selectionEnforceEvent = null;
YAHOO.widget.AutoComplete.prototype.containerCollapseEvent = null;
YAHOO.widget.AutoComplete.prototype.textboxBlurEvent = null;
YAHOO.widget.AutoComplete.prototype.textboxChangeEvent = null;
YAHOO.widget.AutoComplete._nIndex = 0;
YAHOO.widget.AutoComplete.prototype._sName = null;
YAHOO.widget.AutoComplete.prototype._elTextbox = null;
YAHOO.widget.AutoComplete.prototype._elContainer = null;
YAHOO.widget.AutoComplete.prototype._elContent = null;
YAHOO.widget.AutoComplete.prototype._elHeader = null;
YAHOO.widget.AutoComplete.prototype._elBody = null;
YAHOO.widget.AutoComplete.prototype._elFooter = null;
YAHOO.widget.AutoComplete.prototype._elShadow = null;
YAHOO.widget.AutoComplete.prototype._elIFrame = null;
YAHOO.widget.AutoComplete.prototype._bFocused = false;
YAHOO.widget.AutoComplete.prototype._oAnim = null;
YAHOO.widget.AutoComplete.prototype._bContainerOpen = false;
YAHOO.widget.AutoComplete.prototype._bOverContainer = false;
YAHOO.widget.AutoComplete.prototype._elList = null;
YAHOO.widget.AutoComplete.prototype._nDisplayedItems = 0;
YAHOO.widget.AutoComplete.prototype._sCurQuery = null;
YAHOO.widget.AutoComplete.prototype._sPastSelections = "";
YAHOO.widget.AutoComplete.prototype._sInitInputValue = null;
YAHOO.widget.AutoComplete.prototype._elCurListItem = null;
YAHOO.widget.AutoComplete.prototype._elCurPrehighlightItem = null;
YAHOO.widget.AutoComplete.prototype._bItemSelected = false;
YAHOO.widget.AutoComplete.prototype._nKeyCode = null;
YAHOO.widget.AutoComplete.prototype._nRealKeyCode = null;
YAHOO.widget.AutoComplete.prototype._nDelayID =- 1;
YAHOO.widget.AutoComplete.prototype._nTypeAheadDelayID =- 1;
YAHOO.widget.AutoComplete.prototype._iFrameSrc = "javascript:false;";
YAHOO.widget.AutoComplete.prototype._queryInterval = null;
YAHOO.widget.AutoComplete.prototype._sLastTextboxValue = null;
YAHOO.widget.AutoComplete.prototype._initProps = function() {
    var b = this.minQueryLength;
    if (!YAHOO.lang.isNumber(b)) {
        this.minQueryLength = 1
    }
    var e = this.maxResultsDisplayed;
    if (!YAHOO.lang.isNumber(e) || (e < 1)) {
        this.maxResultsDisplayed = 10
    }
    var f = this.queryDelay;
    if (!YAHOO.lang.isNumber(f) || (f < 0)) {
        this.queryDelay = 0.2
    }
    var c = this.typeAheadDelay;
    if (!YAHOO.lang.isNumber(c) || (c < 0)) {
        this.typeAheadDelay = 0.2
    }
    var a = this.delimChar;
    if (YAHOO.lang.isString(a) && (a.length > 0)) {
        this.delimChar = [a]
    } else {
        if (!YAHOO.lang.isArray(a)) {
            this.delimChar = null
        }
    }
    var d = this.animSpeed;
    if ((this.animHoriz || this.animVert) && YAHOO.util.Anim) {
        if (!YAHOO.lang.isNumber(d) || (d < 0)) {
            this.animSpeed = 0.3
        }
        if (!this._oAnim) {
            this._oAnim = new YAHOO.util.Anim(this._elContent, {}, this.animSpeed)
        } else {
            this._oAnim.duration = this.animSpeed
        }
    }
    if (this.forceSelection && a) {}
};
YAHOO.widget.AutoComplete.prototype._initContainerHelperEls = function() {
    if (this.useShadow&&!this._elShadow) {
        var a = document.createElement("div");
        a.className = "yui-ac-shadow";
        a.style.width = 0;
        a.style.height = 0;
        this._elShadow = this._elContainer.appendChild(a)
    }
    if (this.useIFrame&&!this._elIFrame) {
        var b = document.createElement("iframe");
        b.src = this._iFrameSrc;
        b.frameBorder = 0;
        b.scrolling = "no";
        b.style.position = "absolute";
        b.style.width = 0;
        b.style.height = 0;
        b.style.padding = 0;
        b.tabIndex =- 1;
        b.role = "presentation";
        b.title = "Presentational iframe shim";
        this._elIFrame = this._elContainer.appendChild(b)
    }
};
YAHOO.widget.AutoComplete.prototype._initContainerEl = function() {
    YAHOO.util.Dom.addClass(this._elContainer, "yui-ac-container");
    if (!this._elContent) {
        var c = document.createElement("div");
        c.className = "yui-ac-content";
        c.style.display = "none";
        this._elContent = this._elContainer.appendChild(c);
        var b = document.createElement("div");
        b.className = "yui-ac-hd";
        b.style.display = "none";
        this._elHeader = this._elContent.appendChild(b);
        var d = document.createElement("div");
        d.className = "yui-ac-bd";
        this._elBody = this._elContent.appendChild(d);
        var a = document.createElement("div");
        a.className = "yui-ac-ft";
        a.style.display = "none";
        this._elFooter = this._elContent.appendChild(a)
    } else {}
};
YAHOO.widget.AutoComplete.prototype._initListEl = function() {
    var c = this.maxResultsDisplayed, a = this._elList || document.createElement("ul"), b;
    while (a.childNodes.length < c) {
        b = document.createElement("li");
        b.style.display = "none";
        b._nItemIndex = a.childNodes.length;
        a.appendChild(b)
    }
    if (!this._elList) {
        var d = this._elBody;
        YAHOO.util.Event.purgeElement(d, true);
        d.innerHTML = "";
        this._elList = d.appendChild(a)
    }
    this._elBody.style.display = ""
};
YAHOO.widget.AutoComplete.prototype._focus = function() {
    var a = this;
    setTimeout(function() {
        try {
            a._elTextbox.focus()
        } catch (b) {}
    }, 0)
};
YAHOO.widget.AutoComplete.prototype._enableIntervalDetection = function() {
    var a = this;
    if (!a._queryInterval && a.queryInterval) {
        a._queryInterval = setInterval(function() {
            a._onInterval()
        }, a.queryInterval)
    }
};
YAHOO.widget.AutoComplete.prototype.enableIntervalDetection = YAHOO.widget.AutoComplete.prototype._enableIntervalDetection;
YAHOO.widget.AutoComplete.prototype._onInterval = function() {
    var a = this._elTextbox.value;
    var b = this._sLastTextboxValue;
    if (a != b) {
        this._sLastTextboxValue = a;
        this._sendQuery(a)
    }
};
YAHOO.widget.AutoComplete.prototype._clearInterval = function() {
    if (this._queryInterval) {
        clearInterval(this._queryInterval);
        this._queryInterval = null
    }
};
YAHOO.widget.AutoComplete.prototype._isIgnoreKey = function(a) {
    if ((a == 9) || (a == 13) || (a == 16) || (a == 17) || (a >= 18 && a <= 20) || (a == 27) || (a >= 33 && a <= 35) || (a >= 36 && a <= 40) || (a >= 44 && a <= 45) || (a == 229)) {
        return true
    }
    return false
};
YAHOO.widget.AutoComplete.prototype._sendQuery = function(d) {
    if (this.minQueryLength < 0) {
        this._toggleContainer(false);
        return 
    }
    if (this.delimChar) {
        var a = this._extractQuery(d);
        d = a.query;
        this._sPastSelections = a.previous
    }
    if ((d && (d.length < this.minQueryLength)) || (!d && this.minQueryLength > 0)) {
        if (this._nDelayID!=-1) {
            clearTimeout(this._nDelayID)
        }
        this._toggleContainer(false);
        return 
    }
    d = encodeURIComponent(d);
    this._nDelayID =- 1;
    if (this.dataSource.queryMatchSubset || this.queryMatchSubset) {
        var c = this.getSubsetMatches(d);
        if (c) {
            this.handleResponse(d, c, {
                query: d
            });
            return 
        }
    }
    if (this.dataSource.responseStripAfter) {
        this.dataSource.doBeforeParseData = this.preparseRawResponse
    }
    if (this.applyLocalFilter) {
        this.dataSource.doBeforeCallback = this.filterResults
    }
    var b = this.generateRequest(d);
    this.dataRequestEvent.fire(this, d, b);
    this.dataSource.sendRequest(b, {
        success: this.handleResponse,
        failure: this.handleResponse,
        scope: this,
        argument: {
            query: d
        }
    })
};
YAHOO.widget.AutoComplete.prototype._populateListItem = function(b, a, c) {
    b.innerHTML = this.formatResult(a, c, b._sResultMatch)
};
YAHOO.widget.AutoComplete.prototype._populateList = function(n, f, c) {
    if (this._nTypeAheadDelayID!=-1) {
        clearTimeout(this._nTypeAheadDelayID)
    }
    n = (c && c.query) ? c.query : n;
    var h = this.doBeforeLoadData(n, f, c);
    if (h&&!f.error) {
        this.dataReturnEvent.fire(this, n, f.results);
        if (this._bFocused) {
            var p = decodeURIComponent(n);
            this._sCurQuery = p;
            this._bItemSelected = false;
            var u = f.results, a = Math.min(u.length, this.maxResultsDisplayed), m = (this.dataSource.responseSchema.fields) ? (this.dataSource.responseSchema.fields[0].key || this.dataSource.responseSchema.fields[0]): 0;
            if (a > 0) {
                if (!this._elList || (this._elList.childNodes.length < a)) {
                    this._initListEl()
                }
                this._initContainerHelperEls();
                var l = this._elList.childNodes;
                for (var t = a - 1; t >= 0; t--) {
                    var s = l[t], e = u[t];
                    if (this.resultTypeList) {
                        var b = [];
                        b[0] = (YAHOO.lang.isString(e)) ? e : e[m] || e[this.key];
                        var o = this.dataSource.responseSchema.fields;
                        if (YAHOO.lang.isArray(o) && (o.length > 1)) {
                            for (var q = 1, v = o.length; q < v; q++) {
                                b[b.length] = e[o[q].key || o[q]]
                            }
                        } else {
                            if (YAHOO.lang.isArray(e)) {
                                b = e
                            } else {
                                if (YAHOO.lang.isString(e)) {
                                    b = [e]
                                } else {
                                    b[1] = e
                                }
                            }
                        }
                        e = b
                    }
                    s._sResultMatch = (YAHOO.lang.isString(e)) ? e : (YAHOO.lang.isArray(e)) ? e[0] : (e[m] || "");
                    s._oResultData = e;
                    this._populateListItem(s, e, p);
                    s.style.display = ""
                }
                if (a < l.length) {
                    var g;
                    for (var r = l.length - 1; r >= a; r--) {
                        g = l[r];
                        g.style.display = "none"
                    }
                }
                this._nDisplayedItems = a;
                this.containerPopulateEvent.fire(this, n, u);
                if (this.autoHighlight) {
                    var d = this._elList.firstChild;
                    this._toggleHighlight(d, "to");
                    this.itemArrowToEvent.fire(this, d);
                    this._typeAhead(d, n)
                } else {
                    this._toggleHighlight(this._elCurListItem, "from")
                }
                h = this._doBeforeExpandContainer(this._elTextbox, this._elContainer, n, u);
                this._toggleContainer(h)
            } else {
                this._toggleContainer(false)
            }
            return 
        }
    } else {
        this.dataErrorEvent.fire(this, n, f)
    }
};
YAHOO.widget.AutoComplete.prototype._doBeforeExpandContainer = function(d, a, c, b) {
    if (this.autoSnapContainer) {
        this.snapContainer()
    }
    return this.doBeforeExpandContainer(d, a, c, b)
};
YAHOO.widget.AutoComplete.prototype._clearSelection = function() {
    var a = (this.delimChar) ? this._extractQuery(this._elTextbox.value): {
        previous: "",
        query: this._elTextbox.value
    };
    this._elTextbox.value = a.previous;
    this.selectionEnforceEvent.fire(this, a.query)
};
YAHOO.widget.AutoComplete.prototype._textMatchesOption = function() {
    var a = null;
    for (var b = 0; b < this._nDisplayedItems; b++) {
        var c = this._elList.childNodes[b];
        var d = ("" + c._sResultMatch).toLowerCase();
        if (d == this._sCurQuery.toLowerCase()) {
            a = c;
            break
        }
    }
    return (a)
};
YAHOO.widget.AutoComplete.prototype._typeAhead = function(b, d) {
    if (!this.typeAhead || (this._nKeyCode == 8)) {
        return 
    }
    var a = this, c = this._elTextbox;
    if (c.setSelectionRange || c.createTextRange) {
        this._nTypeAheadDelayID = setTimeout(function() {
            var f = c.value.length;
            a._updateValue(b);
            var g = c.value.length;
            a._selectText(c, f, g);
            var e = c.value.substr(f, g);
            a.typeAheadEvent.fire(a, d, e)
        }, (this.typeAheadDelay * 1000))
    }
};
YAHOO.widget.AutoComplete.prototype._selectText = function(d, a, b) {
    if (d.setSelectionRange) {
        d.setSelectionRange(a, b)
    } else {
        if (d.createTextRange) {
            var c = d.createTextRange();
            c.moveStart("character", a);
            c.moveEnd("character", b - d.value.length);
            c.select()
        } else {
            d.select()
        }
    }
};
YAHOO.widget.AutoComplete.prototype._extractQuery = function(h) {
    var c = this.delimChar, f =- 1, g, e, b = c.length - 1, d;
    for (; b >= 0; b--) {
        g = h.lastIndexOf(c[b]);
        if (g > f) {
            f = g
        }
    }
    if (c[b] == " ") {
        for (var a = c.length - 1; a >= 0; a--) {
            if (h[f - 1] == c[a]) {
                f--;
                break
            }
        }
    }
    if (f>-1) {
        e = f + 1;
        while (h.charAt(e) == " ") {
            e += 1
        }
        d = h.substring(0, e);
        h = h.substr(e)
    } else {
        d = ""
    }
    return {
        previous: d,
        query: h
    }
};
YAHOO.widget.AutoComplete.prototype._toggleContainerHelpers = function(d) {
    var e = this._elContent.offsetWidth + "px";
    var b = this._elContent.offsetHeight + "px";
    if (this.useIFrame && this._elIFrame) {
        var c = this._elIFrame;
        if (d) {
            c.style.width = e;
            c.style.height = b;
            c.style.padding = ""
        } else {
            c.style.width = 0;
            c.style.height = 0;
            c.style.padding = 0
        }
    }
    if (this.useShadow && this._elShadow) {
        var a = this._elShadow;
        if (d) {
            a.style.width = e;
            a.style.height = b
        } else {
            a.style.width = 0;
            a.style.height = 0
        }
    }
};
YAHOO.widget.AutoComplete.prototype._toggleContainer = function(i) {
    var d = this._elContainer;
    if (this.alwaysShowContainer && this._bContainerOpen) {
        return 
    }
    if (!i) {
        this._toggleHighlight(this._elCurListItem, "from");
        this._nDisplayedItems = 0;
        this._sCurQuery = null;
        if (this._elContent.style.display == "none") {
            return 
        }
    }
    var a = this._oAnim;
    if (a && a.getEl() && (this.animHoriz || this.animVert)) {
        if (a.isAnimated()) {
            a.stop(true)
        }
        var g = this._elContent.cloneNode(true);
        d.appendChild(g);
        g.style.top = "-9000px";
        g.style.width = "";
        g.style.height = "";
        g.style.display = "";
        var f = g.offsetWidth;
        var c = g.offsetHeight;
        var b = (this.animHoriz) ? 0: f;
        var e = (this.animVert) ? 0: c;
        a.attributes = (i) ? {
            width: {
                to: f
            },
            height: {
                to: c
            }
        } : {
            width: {
                to: b
            },
            height: {
                to: e
            }
        };
        if (i&&!this._bContainerOpen) {
            this._elContent.style.width = b + "px";
            this._elContent.style.height = e + "px"
        } else {
            this._elContent.style.width = f + "px";
            this._elContent.style.height = c + "px"
        }
        d.removeChild(g);
        g = null;
        var h = this;
        var j = function() {
            a.onComplete.unsubscribeAll();
            if (i) {
                h._toggleContainerHelpers(true);
                h._bContainerOpen = i;
                h.containerExpandEvent.fire(h)
            } else {
                h._elContent.style.display = "none";
                h._bContainerOpen = i;
                h.containerCollapseEvent.fire(h)
            }
        };
        this._toggleContainerHelpers(false);
        this._elContent.style.display = "";
        a.onComplete.subscribe(j);
        a.animate()
    } else {
        if (i) {
            this._elContent.style.display = "";
            this._toggleContainerHelpers(true);
            this._bContainerOpen = i;
            this.containerExpandEvent.fire(this)
        } else {
            this._toggleContainerHelpers(false);
            this._elContent.style.display = "none";
            this._bContainerOpen = i;
            this.containerCollapseEvent.fire(this)
        }
    }
};
YAHOO.widget.AutoComplete.prototype._toggleHighlight = function(a, c) {
    if (a) {
        var b = this.highlightClassName;
        if (this._elCurListItem) {
            YAHOO.util.Dom.removeClass(this._elCurListItem, b);
            this._elCurListItem = null
        }
        if ((c == "to") && b) {
            YAHOO.util.Dom.addClass(a, b);
            this._elCurListItem = a
        }
    }
};
YAHOO.widget.AutoComplete.prototype._togglePrehighlight = function(b, c) {
    var a = this.prehighlightClassName;
    if (this._elCurPrehighlightItem) {
        YAHOO.util.Dom.removeClass(this._elCurPrehighlightItem, a)
    }
    if (b == this._elCurListItem) {
        return 
    }
    if ((c == "mouseover") && a) {
        YAHOO.util.Dom.addClass(b, a);
        this._elCurPrehighlightItem = b
    } else {
        YAHOO.util.Dom.removeClass(b, a)
    }
};
YAHOO.widget.AutoComplete.prototype._updateValue = function(c) {
    if (!this.suppressInputUpdate) {
        var f = this._elTextbox;
        var e = (this.delimChar) ? (this.delimChar[0] || this.delimChar): null;
        var b = c._sResultMatch;
        var d = "";
        if (e) {
            d = this._sPastSelections;
            d += b + e;
            if (e != " ") {
                d += " "
            }
        } else {
            d = b
        }
        f.value = d;
        if (f.type == "textarea") {
            f.scrollTop = f.scrollHeight
        }
        var a = f.value.length;
        this._selectText(f, a, a);
        this._elCurListItem = c
    }
};
YAHOO.widget.AutoComplete.prototype._selectItem = function(a) {
    this._bItemSelected = true;
    this._updateValue(a);
    this._sPastSelections = this._elTextbox.value;
    this._clearInterval();
    this.itemSelectEvent.fire(this, a, a._oResultData);
    this._toggleContainer(false)
};
YAHOO.widget.AutoComplete.prototype._jumpSelection = function() {
    if (this._elCurListItem) {
        this._selectItem(this._elCurListItem)
    } else {
        this._toggleContainer(false)
    }
};
YAHOO.widget.AutoComplete.prototype._moveSelection = function(g) {
    if (this._bContainerOpen) {
        var h = this._elCurListItem, d =- 1;
        if (h) {
            d = h._nItemIndex
        }
        var e = (g == 40) ? (d + 1): (d - 1);
        if (e<-2 || e >= this._nDisplayedItems) {
            return 
        }
        if (h) {
            this._toggleHighlight(h, "from");
            this.itemArrowFromEvent.fire(this, h)
        }
        if (e==-1) {
            if (this.delimChar) {
                this._elTextbox.value = this._sPastSelections + this._sCurQuery
            } else {
                this._elTextbox.value = this._sCurQuery
            }
            return 
        }
        if (e==-2) {
            this._toggleContainer(false);
            return 
        }
        var f = this._elList.childNodes[e], b = this._elContent, c = YAHOO.util.Dom.getStyle(b, "overflow"), i = YAHOO.util.Dom.getStyle(b, "overflowY"), a = ((c == "auto") || (c == "scroll") || (i == "auto") || (i == "scroll"));
        if (a && (e>-1) && (e < this._nDisplayedItems)) {
            if (g == 40) {
                if ((f.offsetTop + f.offsetHeight) > (b.scrollTop + b.offsetHeight)) {
                    b.scrollTop = (f.offsetTop + f.offsetHeight) - b.offsetHeight
                } else {
                    if ((f.offsetTop + f.offsetHeight) < b.scrollTop) {
                        b.scrollTop = f.offsetTop
                    }
                }
            } else {
                if (f.offsetTop < b.scrollTop) {
                    this._elContent.scrollTop = f.offsetTop
                } else {
                    if (f.offsetTop > (b.scrollTop + b.offsetHeight)) {
                        this._elContent.scrollTop = (f.offsetTop + f.offsetHeight) - b.offsetHeight
                    }
                }
            }
        }
        this._toggleHighlight(f, "to");
        this.itemArrowToEvent.fire(this, f);
        if (this.typeAhead) {
            this._updateValue(f)
        }
    }
};
YAHOO.widget.AutoComplete.prototype._onContainerMouseover = function(a, c) {
    var d = YAHOO.util.Event.getTarget(a);
    var b = d.nodeName.toLowerCase();
    while (d && (b != "table")) {
        switch (b) {
        case"body":
            return;
        case"li":
            if (c.prehighlightClassName) {
                c._togglePrehighlight(d, "mouseover")
            } else {
                c._toggleHighlight(d, "to")
            }
            c.itemMouseOverEvent.fire(c, d);
            break;
        case"div":
            if (YAHOO.util.Dom.hasClass(d, "yui-ac-container")) {
                c._bOverContainer = true;
                return 
            }
            break;
        default:
            break
        }
        d = d.parentNode;
        if (d) {
            b = d.nodeName.toLowerCase()
        }
    }
};
YAHOO.widget.AutoComplete.prototype._onContainerMouseout = function(a, c) {
    var d = YAHOO.util.Event.getTarget(a);
    var b = d.nodeName.toLowerCase();
    while (d && (b != "table")) {
        switch (b) {
        case"body":
            return;
        case"li":
            if (c.prehighlightClassName) {
                c._togglePrehighlight(d, "mouseout")
            } else {
                c._toggleHighlight(d, "from")
            }
            c.itemMouseOutEvent.fire(c, d);
            break;
        case"ul":
            c._toggleHighlight(c._elCurListItem, "to");
            break;
        case"div":
            if (YAHOO.util.Dom.hasClass(d, "yui-ac-container")) {
                c._bOverContainer = false;
                return 
            }
            break;
        default:
            break
        }
        d = d.parentNode;
        if (d) {
            b = d.nodeName.toLowerCase()
        }
    }
};
YAHOO.widget.AutoComplete.prototype._onContainerClick = function(a, c) {
    var d = YAHOO.util.Event.getTarget(a);
    var b = d.nodeName.toLowerCase();
    while (d && (b != "table")) {
        switch (b) {
        case"body":
            return;
        case"li":
            c._toggleHighlight(d, "to");
            c._selectItem(d);
            return;
        default:
            break
        }
        d = d.parentNode;
        if (d) {
            b = d.nodeName.toLowerCase()
        }
    }
};
YAHOO.widget.AutoComplete.prototype._onContainerScroll = function(a, b) {
    b._focus()
};
YAHOO.widget.AutoComplete.prototype._onContainerResize = function(a, b) {
    b._toggleContainerHelpers(b._bContainerOpen)
};
YAHOO.widget.AutoComplete.prototype._onTextboxKeyDown = function(a, b) {
    var c = a.keyCode;
    b._nRealKeyCode = c;
    if (b._nTypeAheadDelayID!=-1) {
        clearTimeout(b._nTypeAheadDelayID)
    }
    switch (c) {
    case 9:
        if (!YAHOO.env.ua.opera && (navigator.userAgent.toLowerCase().indexOf("mac")==-1) || (YAHOO.env.ua.webkit > 420)) {
            if (b._elCurListItem) {
                if (b.delimChar && (b._nKeyCode != c)) {
                    if (b._bContainerOpen) {
                        YAHOO.util.Event.stopEvent(a)
                    }
                }
                b._selectItem(b._elCurListItem)
            } else {
                b._toggleContainer(false)
            }
        }
        break;
    case 13:
        if (!YAHOO.env.ua.opera && (navigator.userAgent.toLowerCase().indexOf("mac")==-1) || (YAHOO.env.ua.webkit > 420)) {
            if (b._elCurListItem) {
                if (b._nKeyCode != c) {
                    if (b._bContainerOpen) {
                        YAHOO.util.Event.stopEvent(a)
                    }
                }
                b._selectItem(b._elCurListItem)
            } else {
                b._toggleContainer(false)
            }
        }
        break;
    case 27:
        b._toggleContainer(false);
        return;
    case 39:
        if (!b.actionsEnabled) {
            b._jumpSelection()
        }
        break;
    case 38:
        if (b._bContainerOpen) {
            YAHOO.util.Event.stopEvent(a);
            b._moveSelection(c)
        }
        break;
    case 40:
        if (b._bContainerOpen) {
            YAHOO.util.Event.stopEvent(a);
            b._moveSelection(c)
        }
        break;
    default:
        if (b.actionsEnabled && c === 37) {
            break
        }
        b._bItemSelected = false;
        b._toggleHighlight(b._elCurListItem, "from");
        b.textboxKeyEvent.fire(b, c);
        break
    }
    if (c === 18) {
        b._enableIntervalDetection()
    }
    b._nKeyCode = c
};
YAHOO.widget.AutoComplete.prototype._onTextboxKeyPress = function(a, b) {
    var c = a.keyCode;
    if (YAHOO.env.ua.opera || (navigator.userAgent.toLowerCase().indexOf("mac")!=-1) && (YAHOO.env.ua.webkit < 420)) {
        switch (c) {
        case 9:
            if (b._bContainerOpen) {
                if (b.delimChar) {
                    YAHOO.util.Event.stopEvent(a)
                }
                if (b._elCurListItem) {
                    b._selectItem(b._elCurListItem)
                } else {
                    b._toggleContainer(false)
                }
            }
            break;
        case 13:
            if (b._bContainerOpen) {
                YAHOO.util.Event.stopEvent(a);
                if (b._elCurListItem) {
                    b._selectItem(b._elCurListItem)
                } else {
                    b._toggleContainer(false)
                }
            }
            break;
        default:
            break
        }
    } else {
        if (c == 229) {
            b._enableIntervalDetection()
        }
    }
};
YAHOO.widget.AutoComplete.prototype._onTextboxKeyUp = function(a, c) {
    var b = this.value;
    c._initProps();
    var d = a.keyCode;
    if (c._isIgnoreKey(d)) {
        return 
    }
    if (c._nDelayID!=-1) {
        clearTimeout(c._nDelayID)
    }
    c._nDelayID = setTimeout(function() {
        c._sendQuery(b)
    }, (c.queryDelay * 1000))
};
YAHOO.widget.AutoComplete.prototype._onTextboxFocus = function(a, b) {
    if (!b._bFocused) {
        b._elTextbox.setAttribute("autocomplete", "off");
        b._bFocused = true;
        b._sInitInputValue = b._elTextbox.value;
        b.textboxFocusEvent.fire(b)
    }
};
YAHOO.widget.AutoComplete.prototype._onTextboxBlur = function(a, c) {
    if (!c._bOverContainer || (c._nKeyCode == 9)) {
        if (!c._bItemSelected) {
            var b = c._textMatchesOption();
            if (!c._bContainerOpen || (c._bContainerOpen && (b === null))) {
                if (c.forceSelection) {
                    c._clearSelection()
                } else {
                    c.unmatchedItemSelectEvent.fire(c, c._sCurQuery)
                }
            } else {
                if (c.forceSelection) {
                    c._selectItem(b)
                }
            }
        }
        c._clearInterval();
        c._bFocused = false;
        if (c._sInitInputValue !== c._elTextbox.value) {
            c.textboxChangeEvent.fire(c)
        }
        c.textboxBlurEvent.fire(c);
        c._toggleContainer(false)
    } else {
        c._focus()
    }
};
YAHOO.widget.AutoComplete.prototype._onWindowUnload = function(a, b) {
    if (b && b._elTextbox && b.allowBrowserAutocomplete) {
        b._elTextbox.setAttribute("autocomplete", "on")
    }
};
YAHOO.widget.AutoComplete.prototype.doBeforeSendQuery = function(a) {
    return this.generateRequest(a)
};
YAHOO.widget.AutoComplete.prototype.getListItems = function() {
    var c = [], b = this._elList.childNodes;
    for (var a = b.length - 1; a >= 0; a--) {
        c[a] = b[a]
    }
    return c
};
YAHOO.widget.AutoComplete._cloneObject = function(d) {
    if (!YAHOO.lang.isValue(d)) {
        return d
    }
    var f = {};
    if (YAHOO.lang.isFunction(d)) {
        f = d
    } else {
        if (YAHOO.lang.isArray(d)) {
            var e = [];
            for (var c = 0, b = d.length; c < b; c++) {
                e[c] = YAHOO.widget.AutoComplete._cloneObject(d[c])
            }
            f = e
        } else {
            if (YAHOO.lang.isObject(d)) {
                for (var a in d) {
                    if (YAHOO.lang.hasOwnProperty(d, a)) {
                        if (YAHOO.lang.isValue(d[a]) && YAHOO.lang.isObject(d[a]) || YAHOO.lang.isArray(d[a])) {
                            f[a] = YAHOO.widget.AutoComplete._cloneObject(d[a])
                        } else {
                            f[a] = d[a]
                        }
                    }
                }
            } else {
                f = d
            }
        }
    }
    return f
};
YAHOO.register("autocomplete", YAHOO.widget.AutoComplete, {
    version: "2.8.1",
    build: "19"
});
LI.define("DataSource");
LI.define("DataSource.Factory");
LI.DataSource.Factory = {
    createSource: function(a, c) {
        var d = null, b = "";
        if (typeof c === "string") {
            b = c;
            if (LI.DataSource.Sources.hasOwnProperty(b)) {
                d = LI.DataSource.Sources[b].create(a)
            }
        } else {
            if (c.hasOwnProperty("create") && typeof c.create === "function") {
                d = c.create(a)
            }
        }
        return d
    }
};
LI.define("DataSource.RegexHelper");
LI.DataSource.RegexHelper = {
    esc: function(a) {
        return (a + "").replace(/[\-#$\^*()+\[\]{}|\\,.?\s]/g, "\\$&")
    }
};
LI.define("DataSource.Filters");
LI.DataSource.Filters = {
    startsWithMatch: function(b, a) {
        if (!b) {
            return true
        }
        return a.toLowerCase().indexOf(b) === 0
    },
    subwordAnyMatch: function(h, d) {
        d = LI.htmlUnencode ? LI.htmlUnencode(d) : d;
        var f, e, k = /\s+/, b = h.toLowerCase().split(k), a = b.length, c = d.toLowerCase().split(k), g = c.length;
        for (f = 0;
        f < a;
        f++) {
            for (e = 0;
            e < g;
            e++) {
                if (c[e].indexOf(b[f]) === 0) {
                    return true
                }
            }
        }
        return false
    },
    subwordAllMatch: function(k, d) {
        d = LI.htmlUnencode ? LI.htmlUnencode(d) : d;
        var g, e, l = /\s+/, b = k.toLowerCase().split(l), a = b.length, c = d.toLowerCase().split(l), h = c.length, f = 0;
        for (g = 0;
        g < a;
        g++) {
            for (e = 0;
            e < h;
            e++) {
                if (c[e].indexOf(b[g]) === 0) {
                    f += 1;
                    break
                }
            }
        }
        if (f === a) {
            return true
        } else {
            return false
        }
    },
    phraseMatch: function(b, a) {
        return a.toLowerCase().indexOf(b)>-1
    }
};
LI.DataSource.clientSideFilterFactory = function(e, c, d) {
    var b = "subwordAllMatch", a = {
        filter: e || b,
        highlighting: (c === false) ? false: true,
        dedupe: d || false
    };
    return function(p, s, v, q) {
        var l = [];
        if (q && q.argument && q.argument.query) {
            p = q.argument.query
        }
        if (p && p !== "") {
            v = YAHOO.widget.AutoComplete._cloneObject(v);
            var k = q.scope, u = this, h = v.results, r = [], f = k.maxResultsDisplayed, n, m, t, j, o, g;
            for (j = 0, o = h.length;
            j < o;
            j++) {
                n = h[j];
                m = null;
                if (YAHOO.lang.isString(n)) {
                    m = n
                } else {
                    if (YAHOO.lang.isArray(n)) {
                        m = n[0]
                    } else {
                        if (this.responseSchema.fields) {
                            t = this.responseSchema.fields[0].key || this.responseSchema.fields[0];
                            m = n[t]
                        } else {
                            if (this.key) {
                                m = n[this.key]
                            }
                        }
                    }
                }
                if (YAHOO.lang.isString(m)) {
                    if (LI.DataSource.Filters.hasOwnProperty(a.filter)) {
                        g = LI.DataSource.Filters[a.filter]
                    } else {
                        g = LI.Datasource.Filters[b]
                    }
                    if (g(decodeURIComponent(p), m)) {
                        if (a.highlighting) {
                            m = LI.DataSource.Highlighter.highlight(m, decodeURIComponent(p).split(/\s+/));
                            if (YAHOO.lang.isString(n)) {
                                n = m
                            } else {
                                if (YAHOO.lang.isArray(n)) {
                                    n[0] = m
                                } else {
                                    if (this.responseSchema.fields) {
                                        t = this.responseSchema.fields[0].key || this.responseSchema.fields[0];
                                        n[t] = m
                                    } else {
                                        if (this.key) {
                                            n[this.key] = m
                                        }
                                    }
                                }
                            }
                        }
                        if (a.dedupe) {
                            if (l.indexOf(n.id)>-1) {
                                continue
                            } else {
                                l.push(n.id)
                            }
                        }
                        r.push(n)
                    }
                }
                if (o > f && r.length === f) {
                    break
                }
            }
            v.results = r
        }
        return v
    }
};
LI.define("DataSource.Highlighter");
LI.DataSource.Highlighter = {
    _REGEX: "(^|\\s)" + "(&[^;\\s]*)?" + "(%needles)",
    _TEMPLATE: '<strong class="ta-highlight">{s}</strong>',
    _REPLACER: function(a, d, c, b) {
        return c&&!(/\s/).test(b) ? a : LI.DataSource.Highlighter._TEMPLATE.replace(/\{s\}/g, d + b)
    },
    highlight: function(j, a, k) {
        var g = [], f, d, e, c, h, b;
        if (!k) {
            k = {}
        }
        h = LI.DataSource.Highlighter._REGEX;
        b = k.replacer || LI.DataSource.Highlighter._REPLACER;
        a = YAHOO.lang.isArray(a) ? a : [a];
        for (d = 0, e = a.length;
        d < e;
        ++d) {
            c = a[d];
            c = LI.htmlEncode ? LI.htmlEncode(c) : c;
            if (c) {
                g.push(LI.DataSource.RegexHelper.esc(c))
            }
        }
        if (!g.length) {
            return j
        }
        return j.replace(new RegExp(h.replace("%needles", g.join("|")), k.caseSensitive ? "g" : "gi"), b)
    }
};
LI.define("DataSource.MultiSourceHelper");
LI.DataSource.MultiSourceHelper = {
    filterAndSortBeforeCallback: function(n, w, u, m) {
        if (m && m.argument && m.argument.query) {
            n = m.argument.query
        }
        if (n && n !== "") {
            u = YAHOO.widget.AutoComplete._cloneObject(u);
            if (m && m.argument && m.argument.skipFilterAndSort) {
                return u
            }
            var g = m.scope, q = this, p = u.results, a = [], l = {}, h = g.maxResultsDisplayed || 30, b = g.maxResultsPerSource || 5, e = null, c = {}, v = [], r = 0, k = 0, s = 0, o, f, j, d, t;
            if (typeof b === "number") {
                e = b
            } else {
                for (o = 0, f = b.length;
                o < f;
                o++) {
                    c[b[o].sourceID] = b[o].max;
                    v.push(b[o].sourceID)
                }
            }
            for (o = 0, j = p.length;
            o < j;
            o++) {
                if (p[o].type === "category") {
                    continue
                }
                if (!("sourceID" in p[o])) {
                    a.push(p[o]);
                    continue
                }
                if (p[o].sourceID in l) {
                    l[p[o].sourceID] += 1
                } else {
                    l[p[o].sourceID] = 1;
                    a.push({
                        type: "category",
                        displayName: p[o].sourceID,
                        sourceID: p[o].sourceID,
                        rank: p[o].rank || "0"
                    })
                }
                if (l[p[o].sourceID] <= (e ? e : c[p[o].sourceID])) {
                    p[o].type = "item";
                    p[o]._index = o;
                    a.push(p[o])
                }
            }
            p = a;
            if (v && v.length > 0) {
                p.sort(function(x, i) {
                    d = v.indexOf(x.sourceID);
                    t = v.indexOf(i.sourceID);
                    if (d===-1 && t===-1) {
                        return 0
                    }
                    if (d===-1) {
                        return 1
                    }
                    if (d===-1) {
                        return - 1
                    }
                    if (d - t !== 0) {
                        return d - t
                    }
                    if (x.type !== "category" && i.type !== "category") {
                        return (typeof x._index === "number" && typeof i._index === "number") ? x._index - i._index : 0
                    }
                    if (x.type === "category") {
                        return - 1
                    }
                    if (i.type === "category") {
                        return 1
                    }
                    return 0
                })
            }
            for (o = 0, j = p.length;
            o < j;
            o++) {
                if (p[o].type === "category") {
                    r++;
                    k = 0
                } else {
                    if (p[o].type === "item") {
                        s++;
                        k++;
                        p[o].categoryIndex = r;
                        p[o].itemIndex = s;
                        p[o].itemInCategoryIndex = k
                    }
                }
            }
            g.maxResultsDisplayed = Math.max(g.maxResultsDisplayed, p.length);
            u.results = p
        }
        return u
    },
    addCategoriesBeforeCallback: function(f, h, k, g) {
        var j = 0, e = 0, a = 0, l = "", d, c, b;
        if (g && g.argument && g.argument.query) {
            f = g.argument.query
        }
        if (f && f !== "") {
            k = YAHOO.widget.AutoComplete._cloneObject(k);
            if (g && g.argument && g.argument.skipFilterAndSort) {
                return k
            }
            c = k.results;
            b = c.length;
            d = 0;
            while (b--) {
                if (c[d].type === "category") {
                    continue
                }
                if (c[d].sourceID === l) {
                    c[d].type = "item";
                    c[d]._index = d
                } else {
                    c.splice(d, 0, {
                        type: "category",
                        displayName: c[d].sourceID,
                        sourceID: c[d].sourceID,
                        rank: c[d].rank || "0"
                    });
                    b++
                }
                l = c[d].sourceID;
                d++
            }
            for (d = 0, b = c.length;
            d < b;
            d++) {
                if (c[d].type === "category") {
                    j++;
                    e = 0
                } else {
                    if (c[d].type === "item") {
                        a++;
                        e++;
                        c[d].categoryIndex = j;
                        c[d].itemIndex = a;
                        c[d].itemInCategoryIndex = e
                    }
                }
            }
            k.results = c
        }
        return k
    },
    flattenResponseBeforeParseData: function(k, n, l) {
        var a = {}, g = [], m = {}, d = "meta", e, c, h, b, f;
        for (e in n) {
            if (n.hasOwnProperty(e)) {
                if (e === d) {
                    m = n[e]
                } else {
                    b = n[e];
                    if (b.resultList) {
                        for (c = 0, h = b.resultList.length;
                        c < h;
                        c++) {
                            f = b.resultList[c];
                            if (f.hasOwnProperty("sourceID")) {} else {
                                f.sourceID = e
                            }
                            g.push(f)
                        }
                    }
                }
            }
        }
        a.resultList = g;
        a[d] = m;
        return a
    }
};
LI.define("DataSource.Helper");
LI.DataSource.Helper = {
    defaultXHRConfig: {
        responseType: YAHOO.util.DataSourceBase.TYPE_JSON,
        responseSchema: {
            resultsList: "resultList",
            fields: ["headLine", "displayName", "subLine", "imageUrl", "id", "url"],
            metaFields: {}
        },
        connXhrMode: "ignoreStaleResponses",
        maxCacheEntries: 100
    },
    defaultLocalConfig: {
        responseType: YAHOO.util.DataSourceBase.TYPE_JSON,
        responseSchema: {
            resultsList: "resultList",
            fields: ["headLine", "displayName", "subLine", "imageUrl", "id", "url"],
            metaFields: {}
        },
        maxCacheEntries: 100
    },
    createXHRDataSource: function(a, b) {
        return new YAHOO.util.XHRDataSource(a, b)
    },
    createLocalDataSource: function(a, b) {
        b.doBeforeCallback = b.doBeforeCallback || LI.DataSource.clientSideFilterFactory();
        return new YAHOO.util.LocalDataSource(a, b)
    },
    createLocalXHRDataSource: function(f, g, c, d) {
        c.doBeforeCallback = c.doBeforeCallback || LI.DataSource.clientSideFilterFactory();
        d = d || {
            "resultList": []
        };
        var a = g, b = new YAHOO.util.LocalDataSource(d, c), h = false, i;
        function e() {
            YEvent.removeListener(f, "focus", e);
            if (h === true) {
                return
            }
            h = true;
            YAHOO.util.Connect.asyncRequest("GET", a, {
                success: function(k) {
                    try {
                        i = YJson.parse(k.responseText);
                        b.liveData = i
                    } catch (j) {}
                }
            })
        }
        if (YEvent.DOMReady) {
            e()
        } else {
            YEvent.on(f, "focus", e, this, true)
        }
        return b
    },
    createFederatorXHRDataSource: function(a, b, c) {
        if (typeof b.scriptQueryAppend !== "string") {
            b.scriptQueryAppend = "types="
        }
        b.doBeforeParseData = b.doBeforeParseData || LI.DataSource.MultiSourceHelper.flattenResponseBeforeParseData;
        b.doBeforeCallback = b.doBeforeCallback || LI.DataSource.MultiSourceHelper.filterAndSortBeforeCallback;
        b.categoryI18nMap = c || null;
        return new YAHOO.util.XHRDataSource(a, b)
    },
    createAggregatedDataSource: function(b, a, c) {
        a.doBeforeParseData = a.doBeforeParseData || LI.DataSource.MultiSourceHelper.flattenResponseBeforeParseData;
        a.doBeforeCallback = a.doBeforeCallback || LI.DataSource.MultiSourceHelper.filterAndSortBeforeCallback;
        a.categoryI18nMap = c || null;
        return new LI.DataSourceAggregator2(b, a)
    }
};
LI.define("DataSource.Sources");
LI.DataSource.Sources = {
    TYPE_COMPANY: {
        liveData: "/ta/company",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {}),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls) || YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.COMPANY) ? this.liveData: LI.TypeaheadDataSourceUrls.COMPANY;
            return LI.DataSource.Helper.createXHRDataSource(b, this.config)
        }
    },
    TYPE_INDUSTRY: {
        liveData: "/ta/industry",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultLocalConfig, {}),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.INDUSTRY) ? this.liveData: LI.TypeaheadDataSourceUrls.INDUSTRY;
            return LI.DataSource.Helper.createLocalXHRDataSource(a, b, this.config)
        }
    },
    TYPE_REGION: {
        liveData: "/ta/region",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {}),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.REGION) ? this.liveData: LI.TypeaheadDataSourceUrls.REGION;
            return LI.DataSource.Helper.createXHRDataSource(b, this.config)
        }
    },
    TYPE_GROUP: {
        liveData: "/ta/group",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {}),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.GROUP) ? this.liveData: LI.TypeaheadDataSourceUrls.GROUP;
            return LI.DataSource.Helper.createXHRDataSource(b, this.config)
        }
    },
    TYPE_JOB_TITLE: {
        liveData: "/ta/titleV2",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {}),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.JOB_TITLE) ? this.liveData: LI.TypeaheadDataSourceUrls.JOB_TITLE;
            return LI.DataSource.Helper.createXHRDataSource(b, this.config)
        }
    },
    TYPE_JOB_FUNCTION: {
        liveData: "/ta/jobfunc",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultLocalConfig, {}),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.JOB_FUNCTION) ? this.liveData: LI.TypeaheadDataSourceUrls.JOB_FUNCTION;
            return LI.DataSource.Helper.createLocalXHRDataSource(a, b, this.config)
        }
    },
    TYPE_SKILL: {
        liveData: "/ta/skill",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {}),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.SKILL) ? this.liveData: LI.TypeaheadDataSourceUrls.SKILL;
            return LI.DataSource.Helper.createXHRDataSource(b, this.config)
        }
    },
    TYPE_LANGUAGE: {
        liveData: "/ta/language",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultLocalConfig, {}),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.LANGUAGE) ? this.liveData: LI.TypeaheadDataSourceUrls.LANGUAGE;
            return LI.DataSource.Helper.createLocalXHRDataSource(a, b, this.config)
        }
    },
    TYPE_SCHOOL: {
        liveData: "/ta/school",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {}),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls) || YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.SCHOOL) ? this.liveData: LI.TypeaheadDataSourceUrls.SCHOOL;
            return LI.DataSource.Helper.createXHRDataSource(b, this.config)
        }
    },
    TYPE_DEGREE: {
        liveData: "/ta/degree",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultLocalConfig, {
            doBeforeCallback: LI.DataSource.clientSideFilterFactory(null, null, true)
        }),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.DEGREE) ? this.liveData: LI.TypeaheadDataSourceUrls.DEGREE;
            return LI.DataSource.Helper.createLocalXHRDataSource(a, b, this.config)
        }
    },
    TYPE_FIELD_OF_STUDY: {
        liveData: "/ta/fieldofstudy",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {}),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.FIELD_OF_STUDY) ? this.liveData: LI.TypeaheadDataSourceUrls.FIELD_OF_STUDY;
            return LI.DataSource.Helper.createXHRDataSource(b, this.config)
        }
    },
    TYPE_SCHOOLS_AND_DEGREES_AND_FIELDS_OF_STUDY: {
        liveData: "/ta/federator",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {
            scriptQueryAppend: "types=fieldofstudy,school,degree",
            responseSchema: {
                resultsList: "resultList",
                fields: ["headLine", "displayName", "subLine", "url", "sourceID", "imageUrl", "id"]
            }
        }),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls) || YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.FEDERATOR) ? this.liveData: LI.TypeaheadDataSourceUrls.FEDERATOR;
            return LI.DataSource.Helper.createFederatorXHRDataSource(b, this.config, {
                fieldofstudy: LI.i18n.get("typeahead2-search-fields-of-study"),
                school: LI.i18n.get("typeahead2-search-schools"),
                degree: LI.i18n.get("typeahead2-search-degrees")
            })
        }
    },
    TYPE_MY_NETWORK: {
        liveData: "/ta/mynetwork",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {
            responseSchema: {
                resultsList: "resultList",
                fields: ["headLine", "displayName", "subLine", "url", "sourceID", "imageUrl", "id", "misc"]
            }
        }),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls) || YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.MY_NETWORK) ? this.liveData: LI.TypeaheadDataSourceUrls.MY_NETWORK;
            return LI.DataSource.Helper.createXHRDataSource(this.liveData, this.config)
        }
    },
    TYPE_ALL_FIRST_DEGREE_CONNECTIONS: {
        liveData: "/ta/my1stnetwork",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {}),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls) || YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.FIRST_DEGREE_MY_NETWORK) ? this.liveData: LI.TypeaheadDataSourceUrls.FIRST_DEGREE_MY_NETWORK;
            return LI.DataSource.Helper.createXHRDataSource(b, this.config)
        }
    },
    TYPE_COMPANIES_AND_FIRST_DEGREE_CONNECTIONS: {
        liveData: "/ta/federator",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {
            scriptQueryAppend: "types=my1stnetwork,company",
            responseSchema: {
                resultsList: "resultList",
                fields: ["headLine", "displayName", "subLine", "url", "sourceID", "imageUrl", "id", "misc"]
            }
        }),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls) || YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.FEDERATOR) ? this.liveData: LI.TypeaheadDataSourceUrls.FEDERATOR;
            return LI.DataSource.Helper.createFederatorXHRDataSource(this.liveData, this.config, {
                my1stnetwork: LI.i18n.get("typeahead2-search-connections"),
                company: LI.i18n.get("typeahead2-search-companies")
            })
        }
    },
    TYPE_COMPANIES_AND_NETWORK: {
        liveData: "/ta/federator",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {
            scriptQueryAppend: "types=mynetwork,company",
            responseSchema: {
                resultsList: "resultList",
                fields: ["headLine", "displayName", "subLine", "url", "sourceID", "imageUrl", "id", "misc"]
            }
        }),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls) || YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.FEDERATOR) ? this.liveData: LI.TypeaheadDataSourceUrls.FEDERATOR;
            return LI.DataSource.Helper.createFederatorXHRDataSource(this.liveData, this.config, {
                mynetwork: LI.i18n.get("typeahead2-search-connections"),
                company: LI.i18n.get("typeahead2-search-companies")
            })
        }
    },
    TYPE_GROUP_MEMBERS_AND_COMPANIES: {
        liveData: "/ta/federator",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {
            scriptQueryAppend: "types=groupmembers,company",
            responseSchema: {
                resultsList: "resultList",
                fields: ["headLine", "displayName", "subLine", "url", "sourceID", "imageUrl", "id", "misc"]
            }
        }),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls) || YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.FEDERATOR) ? this.liveData: LI.TypeaheadDataSourceUrls.FEDERATOR;
            return LI.DataSource.Helper.createFederatorXHRDataSource(this.liveData, this.config, {
                groupmembers: LI.i18n.get("typeahead2-search-group-members"),
                company: LI.i18n.get("typeahead2-search-companies")
            })
        }
    },
    TYPE_GROUP_MEMBERS: {
        liveData: "/ta/federator",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {
            scriptQueryAppend: "types=groupmembers",
            responseSchema: {
                resultsList: "resultList",
                fields: ["headLine", "displayName", "subLine", "url", "sourceID", "imageUrl", "id", "misc"]
            }
        }),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls) || YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.FEDERATOR) ? this.liveData: LI.TypeaheadDataSourceUrls.FEDERATOR;
            return LI.DataSource.Helper.createFederatorXHRDataSource(this.liveData, this.config, {
                groupmembers: LI.i18n.get("typeahead2-search-group-members")
            })
        }
    },
    TYPE_GROUP_MEMBERS_AND_NETWORK: {
        liveData: "/ta/federator",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {
            scriptQueryAppend: "types=groupmembers,my1stnetwork",
            responseSchema: {
                resultsList: "resultList",
                fields: ["headLine", "displayName", "subLine", "url", "sourceID", "imageUrl", "id", "misc"]
            }
        }),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls) || YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.FEDERATOR) ? this.liveData: LI.TypeaheadDataSourceUrls.FEDERATOR;
            return LI.DataSource.Helper.createFederatorXHRDataSource(this.liveData, this.config, {
                groupmembers: LI.i18n.get("typeahead2-search-group-members"),
                my1stnetwork: LI.i18n.get("typeahead2-search-connections")
            })
        }
    },
    TYPE_DISCUSSION_PARTICIPANTS: {
        liveData: "/ta/discussionparticipants",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultLocalConfig, {}),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.DISCUSSION_PARTICIPANTS) ? this.liveData: LI.TypeaheadDataSourceUrls.DISCUSSION_PARTICIPANTS;
            return LI.DataSource.Helper.createLocalXHRDataSource(a, b, this.config)
        }
    },
    TYPE_DISCUSSION_PARTICIPANTS_COMPANIES_FIRST_DEGREE_CONNECTIONS: {
        liveData: "/ta/federator",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {
            scriptQueryAppend: "types=discussionparticipants,my1stnetwork,company",
            responseSchema: {
                resultsList: "resultList",
                fields: ["headLine", "displayName", "subLine", "url", "sourceID", "imageUrl", "id", "misc"]
            }
        }),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls) || YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.FEDERATOR) ? this.liveData: LI.TypeaheadDataSourceUrls.FEDERATOR;
            return LI.DataSource.Helper.createFederatorXHRDataSource(this.liveData, this.config, {
                my1stnetwork: LI.i18n.get("typeahead2-search-connections"),
                company: LI.i18n.get("typeahead2-search-companies"),
                discussionparticipants: LI.i18n.get("typeahead2-search-discussion-participants")
            })
        }
    },
    TYPE_MY_GROUPS: {
        liveData: "/typeahead/mygroup",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {}),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls) || YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.MY_GROUPS) ? this.liveData: LI.TypeaheadDataSourceUrls.MY_GROUPS;
            return LI.DataSource.Helper.createXHRDataSource(this.liveData, this.config)
        }
    },
    TYPE_UNIVERSAL_SEARCH: {
        liveData: "/ta/federator",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {
            scriptQueryAppend: "types=mynetwork,company,group,sitefeature,skill",
            responseSchema: {
                resultsList: "resultList",
                metaFields: {
                    tarId: "meta.tarId"
                },
                fields: ["headLine", "displayName", "subLine", "url", "sourceID", "imageUrl", "id", "misc"]
            }
        }),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls) || YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.FEDERATOR) ? this.liveData: LI.TypeaheadDataSourceUrls.FEDERATOR;
            return LI.DataSource.Helper.createFederatorXHRDataSource(this.liveData, this.config, {
                mynetwork: LI.i18n.get("typeahead2-search-connections"),
                company: LI.i18n.get("typeahead2-search-companies"),
                group: LI.i18n.get("typeahead2-search-groups"),
                sitefeature: LI.i18n.get("typeahead2-search-features"),
                skill: LI.i18n.get("typeahead2-search-skills")
            })
        }
    },
    TYPE_CAP_PROSPECTS_PROJECTS_JOBS: {
        liveData: "/cap/lookup/capTaAjax",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {
            scriptQueryAppend: "types=Job,Project,Prospect",
            responseSchema: {
                resultsList: "resultList",
                fields: ["displayName", "id", "headLine", "subLine", "imageUrl", "sourceID"]
            },
            maxCacheEntries: 10
        }),
        create: function(a) {
            var b = YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls) || YAHOO.lang.isUndefined(LI.TypeaheadDataSourceUrls.CAP_PROSPECTS_PROJECTS_JOBS) ? this.liveData: LI.TypeaheadDataSourceUrls.CAP_PROSPECTS_PROJECTS_JOBS;
            return LI.DataSource.Helper.createFederatorXHRDataSource(this.liveData, this.config, {
                Prospect: LI.i18n.get("typeahead2-cap-prospects"),
                Job: LI.i18n.get("typeahead2-cap-jobs"),
                Project: LI.i18n.get("typeahead2-cap-projects")
            })
        }
    },
    TYPE_CAP_PROJECTS: {
        liveData: "/cap/lookup/capTaProjectsAjax",
        config: YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {
            scriptQueryAppend: "types=Project",
            responseSchema: {
                resultsList: "resultList",
                fields: ["displayName", "id", "headLine", "subLine", "imageUrl", "sourceID"]
            },
            maxCacheEntries: 10
        }),
        create: function(a) {
            return LI.DataSource.Helper.createFederatorXHRDataSource(this.liveData, this.config, {
                Project: LI.i18n.get("typeahead2-cap-projects")
            })
        }
    }
};
LI.define("DataSourceAggregator2");
LI.DataSourceAggregator2 = function(b, a) {
    this.config = a || {};
    this.sources = b || {};
    this.results = {};
    this.numSourcesLoading = 0;
    this.onAllDataRequest = new YAHOO.util.CustomEvent("allDataRequest", this);
    this.onAllDataResponse = new YAHOO.util.CustomEvent("allDataResponse", this);
    LI.DataSourceAggregator2.superclass.constructor.call(this, null, a)
};
YAHOO.lang.extend(LI.DataSourceAggregator2, YAHOO.util.LocalDataSource, {
    sources: {},
    results: {},
    numSourcesLoading: 0,
    formatQuery: function(b, c) {
        var a = b.dataType;
        if (a === YAHOO.util.DataSourceBase.TYPE_XHR) {
            if (!b.connMethodPost) {
                c = "?" + (b.scriptQueryParam || "query") + "=" + c + (b.scriptQueryAppend ? ("&" + b.scriptQueryAppend) : "")
            } else {
                c = (b.scriptQueryParam || "query") + "=" + c + (b.scriptQueryAppend ? ("&" + b.scriptQueryAppend) : "")
            }
        } else {
            if (a === YAHOO.util.DataSourceBase.TYPE_SCRIPTNODE) {
                c = "&" + (b.scriptQueryParam || "query") + "=" + c + (b.scriptQueryAppend ? ("&" + b.scriptQueryAppend) : "")
            }
        }
        return c
    },
    sendRequest: function(f, h, c) {
        var d = YAHOO.util.DataSourceBase._nTransactionId++, g, a, b, i, e = h.scope;
        this.results = {};
        this.numSourcesLoading = 0;
        for (g in this.sources) {
            if (this.sources.hasOwnProperty(g)) {
                this.numSourcesLoading += 1
            }
        }
        this.onAllDataRequest.fire();
        this.maxResultsDisplayed = e.maxResultsDisplayed;
        this.maxResultsPerSource =- 1;
        for (b in this.sources) {
            i = {
                success: this.sourceSuccessCallback,
                failure: this.sourceFailureCallback,
                scope: this,
                argument: {
                    sourceID: b,
                    query: f,
                    skipFilterAndSort: true
                }
            };
            a = this.sources[b];
            a.sendRequest(this.formatQuery(a, f), i, c)
        }
        if (!this.onAllDataResponse.subscribers.length) {
            this.onAllDataResponse.subscribe(function() {
                var j = {};
                this.results = this.doBeforeParseData(f, this.results, this);
                j.results = this.results.resultList;
                j.meta = {};
                j.error = false;
                if (!j.error) {
                    j = this.doBeforeCallback(f, j, j, h)
                } else {
                    j.error = true;
                    this.fireEvent("dataErrorEvent", {
                        request: f,
                        response: j,
                        callback: h,
                        caller: c,
                        message: YAHOO.util.DataSourceBase.ERROR_DATANULL
                    })
                }
                j.tId = d;
                YAHOO.util.DataSourceBase.issueCallback(h, [f, j], j.error, c)
            })
        }
        return d
    },
    sourceSuccessCallback: function(e, d, b) {
        var c = b.sourceID, a = this.config.doWithSourceSuccessCallback || null;
        if (a && typeof a === "function") {
            d = a(d, this.results)
        }
        if (this.results.hasOwnProperty(c) && this.results[c].hasOwnProperty("resultList")) {
            this.results[c].resultList = this.results[c].resultList.concat(d.results)
        } else {
            this.results[c] = {
                resultList: d.results
            }
        }
        this.numSourcesLoading--;
        if (this.numSourcesLoading === 0) {
            this.onAllDataResponse.fire()
        }
    },
    sourceFailureCallback: function() {
        this.numSourcesLoading--;
        if (this.numSourcesLoading === 0) {
            this.onAllDataResponse.fire()
        }
    },
    flushCache: function() {
        var a, b;
        for (b in this.sources) {
            a = this.sources[b];
            a.flushCache()
        }
    },
    destroy: function() {
        this.flushCache();
        this.source = {};
        this.results = [];
        this.numSourcesLoading = 0
    }
});
LI.define("Typeahead2.RenderHandlerHelpers");
LI.Typeahead2.RenderHandlerHelpers = {
    truncateStrToWidth: function(m, l, b) {
        var h = m, j, a, c, n, f, p, d, s, g = "", e =- 1, r = 0, k, q;
        b = b || {};
        j = {
            ellipEntity: b.ellipEntity || "&hellip;",
            textStyles: b.textStyles || {},
            keepStr: b.keepStr || "",
            keepStrCaseSensitive: b.keepStrCaseSensitive || false,
            keepStrEllipAfter: b.keepStrEllipAfter || false,
            tailStr: b.tailStr || "",
            thresholdLength: b.thresholdLength
        };
        j = YAHOO.lang.merge(j, b);
        if (j.keepStr) {
            j.keepStrRegExp = new RegExp(j.keepStr.replace(/[\-#$\^*()+\[\]{}|\\,.?\s]/g, "\\$&"), (j.keepStrCaseSensitive ? "" : "i"));
            j.keepStr = m.match(j.keepStrRegExp)
        }
        if (!h) {
            return h
        }
        if (j.thresholdLength && h.length < j.thresholdLength) {
            return h + j.tailStr
        }
        a = document.createElement("span");
        for (c in j.textStyles) {
            if (j.textStyles.hasOwnProperty(c)) {
                YDom.setStyle(a, c, j.textStyles[c])
            }
        }
        YDom.setStyle(a, "visibility", "hidden");
        YDom.setStyle(a, "display", "inline-block");
        YDom.setStyle(a, "padding", "0px");
        document.body.appendChild(a);
        a.innerHTML = h;
        n = /&#?\w*$/;
        f = /\\x[0-9a-fA-F]?$/;
        p = /\\u[0-9a-fA-F]{0,3}$/;
        d = [n];
        s = d.length;
        g = "";
        e =- 1;
        if (a.clientWidth > l) {
            r = 0;
            q = m.length;
            while (true) {
                k = r + Math.ceil((q - r) / 2);
                if (k === q || k === r) {
                    break
                }
                a.innerHTML = m.substring(0, k) + j.ellipEntity;
                if (j.keepStr) {
                    if (!j.keepStrRegExp.test(a.innerHTML)) {
                        a.innerHTML += j.keepStr + (j.keepStrEllipAfter ? j.ellipEntity : "")
                    }
                }
                if (j.tailStr) {
                    a.innerHTML += j.tailStr
                }
                if (a.clientWidth > l) {
                    q = k
                } else {
                    r = k
                }
            }
            h = m.substring(0, r).replace(/(\s.)?\s*$/, "");
            e =- 1;
            for (var o = 0;
            o < s;
            o++) {
                e = h.search(d[o]);
                if (e > 0) {
                    h = h.substring(0, e)
                }
            }
            h += j.ellipEntity;
            if (j.keepStr) {
                if (!j.keepStrRegExp.test(h)) {
                    h += j.keepStr + (j.keepStrEllipAfter ? j.ellipEntity : "")
                }
            }
        }
        if (j.tailStr) {
            h += j.tailStr
        }
        document.body.removeChild(a);
        return h
    },
    formatResultFunctionFactory: function(a) {
        a = {
            formatCategoryResult: a.formatCategoryResult || function(c, b, e, f, d) {
                c += "<h3><strong>" + b + "</strong></h3>";
                return c
            },
            formatItemResult: a.formatItemResult || function(b, d, f, c) {
                var e = d;
                if (e.imageUrl && e.imageUrl.length > 0) {
                    b += '<img src="' + e.imageUrl + '" />'
                } else {
                    if (e.misc && e.misc.verticalType) {
                        b += '<span class="ghost-image ' + e.misc.verticalType.toLowerCase() + '"></span>'
                    } else {
                        b += '<span class="ghost-image"></span>'
                    }
                }
                if (e.headLine && e.headLine.length > 0) {
                    if (!e.subLine) {
                        b += '<h4 class="item-headline">' + e.headLine + "</h4>"
                    } else {
                        b += '<h4 class="item-headline has-subline">' + e.headLine + "</h4>"
                    }
                }
                if (e.headLine !== null && e.subLine && e.subLine !== "") {
                    b += '<p class="item-subline">' + e.subLine + "</p>"
                }
                return b
            }
        };
        return function(e, g, d) {
            var c = "", f, b;
            if (e.sourceID && e.type === "category") {
                f = this.dataSource.categoryI18nMap || null;
                b = (f && f.hasOwnProperty(e.sourceID)) ? f[e.sourceID] : e.sourceID;
                return a.formatCategoryResult(c, b, e, g, d)
            } else {
                return a.formatItemResult(c, e, g, d)
            }
            return c
        }
    },
    doBeforeExpandContainerFunctionFactory: function(a) {
        a = {
            showCategory: (a.showCategory === false) ? false: true,
            includeRank: (a.includeRank === true),
            truncateConfigs: a.truncateConfigs || null
        };
        return function(e, v, r, q) {
            var f = this, z = [], k, s, l = this.getListEl(), m = l.childNodes, w, p, h = "", y = 0, o = a.showCategory, d = "item", t, u, g, c = "rank-", x, n, j, b;
            for (w = 0, p = Math.min(m.length, q.length);
            w < p;
            w++) {
                k = m[w];
                t = q[w];
                u = t.type;
                g = t.rank || "0";
                h = t.sourceID || "";
                if (YDom.hasClass(k, f.highlightClassName)) {
                    z.push(f.highlightClassName)
                }
                if (YDom.hasClass(k, f.preHighlightClassName)) {
                    z.push(f.preHighlightClassName)
                }
                if (a.includeRank) {
                    z.push(c + g)
                }
                if ((w === 0) || (o && u === d && w === 1)) {
                    z.push("top")
                }
                if (!u) {
                    if (!s) {
                        z.push("first")
                    }
                    s = k
                } else {
                    if (o && u === "category") {
                        z.push("category");
                        z.push(h);
                        YDom.addClass(l, "hasCategory");
                        y += 1
                    } else {
                        if (o && u === d) {
                            z.push(d);
                            z.push(h);
                            if (a.truncateConfigs) {
                                for (x in a.truncateConfigs) {
                                    if (a.truncateConfigs.hasOwnProperty(x)) {
                                        n = YAHOO.lang.merge({}, a.truncateConfigs[x]);
                                        b = Y$(n.selector, k, true);
                                        n.keepStr = "<strong>" + r + "</strong>";
                                        if (t.sourceID === "mynetwork" && x === "headLine" && t.misc && t.misc.degree) {
                                            n.tailStr = '<span class="separator">&middot;</span><span class="typeahead-degree">' + t.misc.degree + "</span>"
                                        }
                                        if (b) {
                                            j = b.innerHTML;
                                            b.innerHTML = LI.Typeahead2.RenderHandlerHelpers.truncateStrToWidth(j, n.width, n)
                                        }
                                    }
                                }
                            }
                            if (!s || (s&&!YDom.hasClass(s, h))) {
                                z.push("first");
                                YDom.addClass(s, "last")
                            }
                            if (y%2 === 0) {
                                z.push("secondary-ta")
                            } else {
                                z.push("primary-ta")
                            }
                            s = k
                        }
                    }
                }
                k.className = z.join(" ");
                z = []
            }
            if (s) {
                YDom.addClass(s, "last");
                YDom.addClass(s, "bottom");
                if (l.getElementsByTagName("img").length > 0) {
                    YDom.addClass(l, "hasImage")
                }
            }
            return true
        }
    }
};
LI.define("Typeahead2.RenderHandlers");
LI.Typeahead2.RenderHandlers = {
    DEFAULT: {
        resultTypeList: false,
        applyLocalFilter: false,
        animVert: false,
        useIFrame: true,
        allowBrowserAutocomplete: true,
        forceSelection: false,
        forceSelectionAndRevert: false,
        autoHighlight: false,
        typeahead: true,
        queryMatchContains: false,
        queryMatchSubset: false,
        suppressInputUpdate: true,
        formatResult: LI.Typeahead2.RenderHandlerHelpers.formatResultFunctionFactory({}),
        doBeforeExpandContainer: LI.Typeahead2.RenderHandlerHelpers.doBeforeExpandContainerFunctionFactory({})
    },
    AUTOCHOOSE: {
        forceSelection: false,
        forceSelectionAndRevert: false,
        autoHighlight: true
    },
    FORCE_SELECTION: {
        forceSelection: true,
        forceSelectionAndRevert: true,
        autoHighlight: true
    },
    HEADLINE_ONLY: {
        formatResult: LI.Typeahead2.RenderHandlerHelpers.formatResultFunctionFactory({
            formatItemResult: function(a, c, e, b) {
                var d = c;
                if (d.headLine && d.headLine.length > 0) {
                    a += '<h4 class="item-headline">' + d.headLine + "</h4>"
                }
                if (d.headLine !== null && d.subLine && d.subLine !== "") {
                    a += '<p class="item-subline">' + d.subLine + "</p>"
                }
                return a
            }
        })
    },
    HIDE_CATEGORIES: {
        formatResult: LI.Typeahead2.RenderHandlerHelpers.formatResultFunctionFactory({
            formatCategoryResult: function(b, a, d, e, c) {
                return ""
            }
        }),
        doBeforeExpandContainer: LI.Typeahead2.RenderHandlerHelpers.doBeforeExpandContainerFunctionFactory({
            showCategory: false
        })
    },
    UNIVERSAL_SEARCH: {
        doBeforeExpandContainer: LI.Typeahead2.RenderHandlerHelpers.doBeforeExpandContainerFunctionFactory({
            truncateConfigs: {
                headLine: {
                    selector: ".item-headline",
                    width: "218",
                    textStyles: {
                        "font-weight": "bold",
                        "font-size": "12px"
                    },
                    keepStrCaseSensitive: false,
                    keepStrEllipAfter: true
                },
                subLine: {
                    selector: ".item-subline",
                    textStyles: {
                        "font-weight": "normal",
                        "font-size": "11px"
                    },
                    width: "200"
                }
            }
        })
    },
    UNIVERSAL_SEARCH_VOLTRON: {
        doBeforeExpandContainer: LI.Typeahead2.RenderHandlerHelpers.doBeforeExpandContainerFunctionFactory({
            truncateConfigs: {
                headLine: {
                    selector: ".item-headline",
                    width: "368",
                    textStyles: {
                        "font-weight": "bold",
                        "font-size": "12px"
                    },
                    keepStrCaseSensitive: false,
                    keepStrEllipAfter: true,
                    thresholdLength: 45
                }
            },
            includeRank: true
        })
    },
    UNIVERSAL_SEARCH_VOLTRON_INSTANT: {
        doBeforeExpandContainer: LI.Typeahead2.RenderHandlerHelpers.doBeforeExpandContainerFunctionFactory({
            truncateConfigs: {
                headLine: {
                    selector: ".item-headline",
                    width: "368",
                    textStyles: {
                        "font-weight": "bold",
                        "font-size": "13px"
                    },
                    keepStrCaseSensitive: false,
                    keepStrEllipAfter: true,
                    thresholdLength: 45
                }
            },
            includeRank: true
        })
    }
};
LI.define("Typeahead2.EventHelper");
LI.Typeahead2.EventHelper = {
    constants: {
        NO_MATCH_ID_VALUE: ""
    },
    populateInputField: function(c, b, d) {
        var a;
        if (d) {
            a = d.rawText || d.displayName;
            if (a != null) {
                if (LI.htmlUnencode) {
                    a = LI.htmlUnencode(a)
                }
                c.value = a
            }
            if (b) {
                b.value = d.id || LI.Typeahead2.EventHelper.constants.NO_MATCH_ID_VALUE
            }
        }
    },
    handleUnmatchSelect: function(b, a, c) {
        if (a && (b.value !== b.defaultValue || a.value !== a.defaultValue)) {
            a.value = LI.Typeahead2.EventHelper.constants.NO_MATCH_ID_VALUE
        }
        if (c && YAHOO.lang.trim(b.value) !== "") {
            b.value = b.defaultValue;
            if (a) {
                a.value = a.defaultValue
            }
        }
    },
    clearInputField: function(b, a) {
        b.value = "";
        if (a) {
            a.value = LI.Typeahead2.EventHelper.constants.NO_MATCH_ID_VALUE
        }
    },
    goToUrl: function(i, g, e) {
        var a = "", h = false, f, b, d, c = [];
        if (i.url) {
            a = i.url;
            b = a.split("#");
            if (b[1]) {
                a = b[0];
                f = b[1]
            }
            b = a.split("?");
            d = b[1] ? a + "&" : a + "?";
            if (g) {
                c.push("trk=" + encodeURIComponent(g))
            }
            if (e) {
                c.push("trkInfo=" + encodeURIComponent(e))
            }
            d += c.join("&");
            if (f) {
                d += "#" + f
            }
            if (!h) {
                document.location.href = d
            }
        }
    },
    getNoResults: (function() {
        var a = null, b;
        return function() {
            if (a === null) {
                b = document.createElement("div");
                b.className = "typeahead-noresults";
                YEvent.onDOMReady(function() {
                    document.body.appendChild(b)
                });
                a = b
            }
            return a
        }
    }()),
    toggleNoResults: function(a, d, b, i, c) {
        if (YDom.get(i)) {
            var j = YDom.get(i);
            if (d) {
                YDom.addClass(j, "show");
                if (c) {
                    c.value = LI.Typeahead2.EventHelper.constants.NO_MATCH_ID_VALUE
                }
            } else {
                if (c.value !== LI.Typeahead2.EventHelper.constants.NO_MATCH_ID_VALUE) {
                    YDom.removeClass(j, "show")
                }
            }
        } else {
            var e = LI.Typeahead2.EventHelper.getNoResults(), h = b || LI.i18n.get("typeahead2-no-matching-results"), g = [], f = {};
            if (!h) {
                h = "No Results"
            }
            if (d) {
                e.innerHTML = h;
                f = YDom.getRegion(a);
                g[0] = f.left;
                g[1] = f.bottom;
                YDom.setStyle(e, "display", "block");
                YDom.setXY(e, g)
            } else {
                YDom.setStyle(e, "display", "none");
                if (c) {
                    c.value = LI.Typeahead2.EventHelper.constants.NO_MATCH_ID_VALUE
                }
            }
        }
    },
    getLoadingImg: (function(c) {
        var a = {}, b;
        return function(d) {
            if (!a.hasOwnProperty(d)) {
                b = new Image();
                b.src = d;
                YDom.addClass(b, "typeahead-loading-icon");
                a[d] = b
            }
            return a[d]
        }
    }()),
    toggleLoadingImg: function(a, c, g, e) {
        var f, d, b;
        if (e && e.loaderClass) {
            b = e.loaderClass;
            d = Y$("." + b, a.parentNode, true);
            if (!d) {
                f = document.createElement("span");
                YDom.addClass(f, b);
                if (e.loaderText) {
                    f.innerHTML = e.loaderText
                }
                d = a.parentNode.appendChild(f)
            }
        } else {
            if (g) {
                f = LI.Typeahead2.EventHelper.getLoadingImg(g);
                d = Y$(".typeahead-loading-icon", a.parentNode, true);
                if (!d) {
                    d = a.parentNode.appendChild(f)
                }
            }
        }
        if (c) {
            YDom.addClass(d, "loading")
        } else {
            YDom.removeClass(d, "loading")
        }
    }
};
LI.define("Typeahead2.EventHandlers");
LI.Typeahead2.EventHandlers = {
    DEFAULT: {
        itemSelectEvent: function(e, d) {
            var c = d[0], f = d[2], b = c.getInputEl(), a = c.hiddenField;
            if (f.type === "category") {
                return
            }
            LI.Typeahead2.EventHelper.populateInputField(b, a, f, c.forceSelectionAndRevert)
        },
        dataRequestEvent: function(c, b) {
            var a = b[0];
            LI.Typeahead2.EventHelper.toggleLoadingImg(a.getInputEl(), true, a.loadingImgSrc, a.loadingImgConfig)
        },
        dataReturnEvent: function(c, b) {
            var a = b[0], e = b[1], d = b[2];
            LI.Typeahead2.EventHelper.toggleLoadingImg(a.getInputEl(), false, a.loadingImgSrc, a.loadingImgConfig);
            if (a.hiddenField && (d.length === 0 && YAHOO.lang.trim(e) !== "")) {
                a.hiddenField.value = LI.Typeahead2.EventHelper.constants.NO_MATCH_ID_VALUE
            } else {
                YDom.removeClass(YDom.get(a.noResultsEl), "show")
            }
        },
        dataErrorEvent: function(c, b) {
            var a = b[0];
            LI.Typeahead2.EventHelper.toggleLoadingImg(a.getInputEl(), false, a.loadingImgSrc, a.loadingImgConfig);
            a.collapseContainer()
        },
        unmatchedItemSelectEvent: function(c, b) {
            var a = b[0];
            LI.Typeahead2.EventHelper.handleUnmatchSelect(this.getInputEl(), this.hiddenField, this.forceSelectionAndRevert)
        },
        textboxFocusEvent: function(c, b) {
            var a = b[0];
            if (YAHOO.env.ua.gecko && LI.i18n && LI.i18n.isCJK()) {
                a.enableIntervalDetection()
            }
        },
        itemArrowToEvent: function(h, g) {
            var b = g[0], a = g[1], c = b.getListItemData(a), i = (typeof b._nRealKeyCode !== "undefined") ? b._nRealKeyCode: b._nKeyCode, d, e, f;
            i = (i === 40 || i === 38) ? i : 40;
            if (c && c.type === "category") {
                if (b.isContainerOpen()) {
                    b._moveSelection(i)
                } else {
                    b._toggleHighlight(a, "from");
                    d = b.getListItemIndex(a);
                    e = (i === 40) ? (d + 1) : (d - 1);
                    f = b._elList.childNodes[e];
                    if (f) {
                        b._toggleHighlight(f, "to");
                        if (b.typeahead) {
                            b._updateValue(f);
                            b._sCurQuery = f._sResultMatch
                        }
                    }
                }
            }
        }
    },
    USE_NO_RESULTS: {
        containerExpandEvent: function(c, b) {
            var a = b[0];
            LI.Typeahead2.EventHelper.toggleNoResults(a.getInputEl(), false, a.noResultsText, a.noResultsEl, a.hiddenField)
        },
        dataReturnEvent: function(c, b) {
            var a = b[0], f = b[1], e = b[2], d = a.getInputEl();
            LI.Typeahead2.EventHandlers.DEFAULT.dataReturnEvent.apply(a, arguments);
            if (e.length === 0 && YAHOO.lang.trim(f) !== "") {
                LI.Typeahead2.EventHelper.toggleNoResults(d, true, a.noResultsText, a.noResultsEl, a.hiddenField)
            }
        },
        dataErrorEvent: function(c, b) {
            var a = b[0];
            LI.Typeahead2.EventHandlers.DEFAULT.dataErrorEvent.apply(a, arguments);
            LI.Typeahead2.EventHelper.toggleNoResults(a.getInputEl(), true, a.noResultsText, a.noResultsEl, a.hiddenField)
        },
        textboxBlurEvent: function(c, b) {
            var a = b[0];
            LI.Typeahead2.EventHelper.toggleNoResults(a.getInputEl(), false, a.noResultsText, a.noResultsEl, a.hiddenField)
        },
        textboxKeyEvent: function(c, b) {
            var a = b[0], d = this.getInputEl();
            if (d.value === "") {
                LI.Typeahead2.EventHelper.toggleNoResults(a.getInputEl(), false, a.noResultsText, a.noResultsEl, a.hiddenField)
            }
        }
    },
    GO_TO_URL_ON_SELECT: {
        itemSelectEvent: function(e, d) {
            var c = d[0], h = d[2], a = null, b = null, g = "string", f = "function";
            if (c.itemUrlTrackingKey) {
                if (typeof c.itemUrlTrackingKey === g) {
                    a = c.itemUrlTrackingKey
                } else {
                    if (typeof c.itemUrlTrackingKey === f) {
                        a = c.itemUrlTrackingKey(e, d)
                    }
                }
            }
            if (c.itemUrlTrackingInfo) {
                if (typeof c.itemUrlTrackingInfo === g) {
                    b = c.itemUrlTrackingInfo
                } else {
                    if (typeof c.itemUrlTrackingInfo === f) {
                        b = c.itemUrlTrackingInfo(e, d)
                    }
                }
            }
            if (h.type === "category") {
                return
            }
            LI.Typeahead2.EventHelper.goToUrl(h, a, b)
        }
    }
};
LI.define("Typeahead");
LI.Typeahead = function(d, z) {
    d = YDom.get(d);
    var s = this;
    var g = d;
    var k = 0, w = LI.Bidi, c = "left";
    if (w) {
        c = w.flip(c)
    }
    z = {
        hiddenField: z.hiddenField || null,
        maxResultsPerSource: z.maxResultsPerSource || 5,
        maxResultsDisplayed: z.maxResultsDisplayed || 10,
        sources: z.sources || [],
        resultsClass: z.resultsClass || "",
        resultsID: z.resultsID || null,
        noResults: (z.noResults === true) ? true: false,
        noResultsText: z.noResultsText || null,
        autofill: (z.autofill === false) ? false: true,
        autofillHiddenInput: (z.autofillHiddenInput === false) ? false: true,
        autocomplete: z.autocomplete || {},
        headlineOnly: (z.headlineOnly === true) ? true: false,
        resultsAlign: z.resultsAlign || c,
        showCategories: (z.showCategories === true) ? true: false,
        categoryI18nMap: z.categoryI18nMap || {},
        offsetAlignX: z.offsetAlignX || 0,
        offsetAlignY: z.offsetAlignY || 0,
        highlightType: z.highlightType || "SO_FAR",
        loadingImgSrc: z.loadingImgSrc || "",
        containerEl: YDom.get(z.containerEl) || document.body,
        forceSelectionAndRevert: (z.forceSelectionAndRevert === true),
        lazyInit: z.lazyInit || false
    };
    this.onResultsUpdated = new YAHOO.util.CustomEvent("resultsUpdated");
    if (!d) {
        throw "You did not pass a proper element to the Typeahead object."
    }
    if (z.sources.length === 0) {
        throw "You haven't defined any sources for Typeahead"
    }
    var h = null;
    if (z.hiddenField) {
        h = YDom.get(z.hiddenField)
    }
    var l = document.createElement("div");
    l.className = "typeahead-results-container";
    YDom.addClass(l, z.resultsClass);
    if (z.resultsID) {
        l.id = z.resultsID
    }
    var n = null;
    if (z.noResults) {
        var q = z.noResultsText || LI.i18n.get("typeahead-null-results");
        if (!q) {
            throw "No i18n text was defined for the 'No Results' message. Read the Typeaehad YUI docs for the noResults config property for more details."
        }
        n = document.createElement("div");
        n.className = "typeahead-noresults";
        n.innerHTML = q;
        YEvent.onDOMReady(function() {
            document.body.appendChild(n)
        })
    }
    if (YAHOO.env.ua.ie > 0) {
        z.containerEl.appendChild(l)
    } else {
        z.containerEl.insertBefore(l, z.containerEl.firstChild)
    }
    var b = new LI.DataSourceAggregator(z.maxResultsPerSource);
    b.setHighlightType(z.highlightType);
    var j, x = false;
    if (z.loadingImgSrc) {
        var f = function() {
            YEvent.removeListener(d, "focus", f);
            if (this.createLoadingImg&&!x) {
                this.createLoadingImg();
                x = true
            }
        };
        b.onAllDataRequest.subscribe(function() {
            if (x) {
                this.showLoading()
            }
        }, this, true);
        b.onAllDataResponse.subscribe(function() {
            if (x) {
                this.hideLoading()
            }
        }, this, true);
        YEvent.on(d, "focus", f, this, true)
    }
    function y(D, E) {
        var C = false;
        function i() {
            YEvent.removeListener(d, "focus", i);
            if (C === true) {
                return
            }
            C = true;
            YAHOO.util.Connect.asyncRequest("GET", D, {
                success: function(H) {
                    try {
                        var F = YJson.parse(H.responseText);
                        E.liveData = F
                    } catch (G) {}
                }
            })
        }
        if (YEvent.DOMReady) {
            i()
        } else {
            YEvent.on(d, "focus", i, this, true)
        }
    }
    var a = z.sources, p = true, u, r, t, m, o, v, e;
    for (t in a) {
        r = null;
        u = a[t];
        if (u.url && (/typeahead/.test(u.url) || /ta/.test(u.url))) {
            p = false
        }
        if (u.local === true && u.url) {
            r = new YAHOO.util.LocalDataSource({
                "resultList": []
            });
            y(u.url, r)
        } else {
            if (typeof u.data === "object") {
                r = new YAHOO.util.LocalDataSource(u.data)
            } else {
                if (typeof u.functionDataSource === "function") {
                    r = new YAHOO.util.FunctionDataSource(u.functionDataSource);
                    if (typeof u.context !== "undefined") {
                        r.scope = u.context
                    }
                } else {
                    if (u.url) {
                        r = new YAHOO.util.XHRDataSource(u.url);
                        r.connXhrMode = "ignoreStaleResponses";
                        r.responseType = YAHOO.widget.DS_XHR.TYPE_JSON;
                        r.maxCacheEntries = 100
                    }
                }
            }
        }
        if (u.dataSourceConfig && typeof u.dataSourceConfig === "object") {
            for (v in u.dataSourceConfig) {
                r[v] = u.dataSourceConfig[v]
            }
        }
        m = (u.filterResults !== false);
        o = (u.filterResultsBooleanAnd === true);
        e = (u.dedupe || null);
        if (r) {
            b.addSource(t, r, m, o, e)
        }
    }
    var A;
    if (z.lazyInit) {
        A = new LI.LazyInitAutocomplete(g, l, b)
    } else {
        A = new YAHOO.widget.AutoComplete(g, l, b)
    }
    A.minQueryLength = 1;
    A.animVert = false;
    A.useIFrame = true;
    A.forceSelection = false;
    A.autoHighlight = false;
    A.resultTypeList = false;
    A.queryMatchSubset = true;
    A.suppressInputUpdate = true;
    A.applyLocalFilter = false;
    A.maxResultsDisplayed = z.maxResultsDisplayed;
    var B;
    for (B in z.autocomplete) {
        A[B] = z.autocomplete[B]
    }
    A.formatResult = function(G, H, F) {
        var C = "", E = G.sourceID, i = p ? (LI.htmlEncode(G.headLine) || "").replace("&lt;strong&gt;", "<strong>").replace("&lt;/strong&gt;", "</strong>"): G.headLine, D = p ? (LI.htmlEncode(G.subLine) || "").replace("&lt;strong&gt;", "<strong>").replace("&lt;/strong&gt;", "</strong>"): G.subLine;
        if (G.type) {
            E = G.type + " " + E
        } else {
            E = "item " + E
        }
        if (G.imageUrl && G.imageUrl.length > 0 && z.headlineOnly === false) {
            C += '<img src="' + G.imageUrl + '" />'
        }
        if (G.sourceID === "poll") {
            C += "<h4><strong>" + i + "</strong></h4>"
        } else {
            C += "<h4>" + i + "</h4>"
        }
        if (i !== null && D && D !== "" && z.headlineOnly === false) {
            C += '<p class="item-subline">' + D + "</p>"
        }
        C = '<div class="' + E + '">' + C + "</div>";
        return C
    };
    A.doBeforeExpandContainer = function(E, C, O, N) {
        var G = YDom.getRegion(E);
        var I = [], J = false, S = false;
        if (z.resultsAlign === "right") {
            var F = YDom.getRegion(C);
            I[0] = G.right - F.width + z.offsetAlignX;
            I[1] = G.bottom + z.offsetAlignY
        } else {
            I[0] = G.left + z.offsetAlignX;
            I[1] = G.bottom + z.offsetAlignY
        }
        YDom.setXY(C, I);
        var L, K, P, D, U, M = Y$("li > div", C);
        if (z.showCategories) {
            var T = 0, H = null;
            S = 0
        }
        for (var Q = 0, R = M.length;
        Q < R;
        Q++) {
            L = M[Q];
            K = L.parentNode;
            K.className = (YDom.hasClass(K, "yui-ac-highlight")) ? "yui-ac-highlight" : "";
            U = L.className.split(" ").length > 1 ? L.className.split(" ")[0] : L.className;
            J = L.className.split(" ").length > 1 ? L.className.split(" ")[1] : L.className;
            if ((Q === 0) || (z.showCategories && U === "item" && Q === 1)) {
                YDom.addClass(K, "top")
            }
            if (z.showCategories && U === "category") {
                YDom.addClass(K, "category");
                YDom.addClass(K.parentNode, "hasCategory");
                if (z.categoryI18nMap[J]) {
                    J = z.categoryI18nMap[J]
                }
                K.innerHTML = "<h3><strong>" + J + "</strong></h3>";
                S++
            } else {
                if (U === "item") {
                    YDom.addClass(K, "item");
                    if (L.getElementsByTagName("img").length > 0) {
                        YDom.addClass(K.parentNode, "hasImage")
                    }
                    if (!D || (D&&!YDom.hasClass(D, J))) {
                        YDom.addClass(K, "first");
                        YDom.addClass(D, "last")
                    }
                    if (S%2 === 0) {
                        YDom.addClass(K, "secondary")
                    } else {
                        YDom.addClass(K, "primary")
                    }
                    YDom.addClass(K, J);
                    K.innerHTML = L.innerHTML;
                    D = K
                }
            }
        }
        YDom.addClass(D, "last");
        YDom.addClass(D, "bottom");
        if (n) {
            n.style.display = "none"
        }
        s.onResultsUpdated.fire(E, C, O, N);
        return true
    };
    A.itemSelectEvent.subscribe(function(C, i) {
        var D = i[2];
        if (h && z.autofillHiddenInput) {
            h.value = D.id || k
        }
        if (z.autofill && D && (D.displayName || D.headLine)) {
            if (LI.htmlUnencode) {
                g.value = LI.htmlUnencode(D.displayName) || LI.htmlUnencode(D.headLine)
            } else {
                g.value = D.displayName || D.headLine
            }
        }
    });
    A.unmatchedItemSelectEvent.subscribe(function(C, i) {
        if (h && (g.value !== g.defaultValue || h.value !== h.defaultValue)) {
            h.value = k
        }
        if (z.forceSelectionAndRevert && YAHOO.lang.trim(g.value) !== "") {
            g.value = g.defaultValue;
            if (h) {
                h.value = h.defaultValue
            }
        }
    });
    A.dataErrorEvent.subscribe(function(E, H, D) {
        if (A.dataSource && A.dataSource.results) {
            for (var C in A.dataSource.results) {
                if (A.dataSource.results[C] && A.dataSource.results[C].length > 0) {
                    return
                }
            }
        }
        A.collapseContainer();
        if (n) {
            n.style.display = "block";
            var G = [];
            var F = YDom.getRegion(g);
            G[0] = F.left;
            G[1] = F.bottom;
            YDom.setXY(n, G)
        }
    });
    A.textboxBlurEvent.subscribe(function() {
        if (n) {
            n.style.display = "none"
        }
    });
    A.textboxFocusEvent.subscribe(function() {
        if (YAHOO.env.ua.gecko && LI.i18n && LI.i18n.isCJK()) {
            A.enableIntervalDetection()
        }
    });
    if (n) {
        YEvent.on(g, "keyup", function() {
            var i = this;
            if (i.value === "") {
                n.style.display = "none"
            }
        })
    }
    this.autocomplete = A;
    this.destroy = function() {
        if (this.autocomplete) {
            this.autocomplete.destroy()
        }
        this.autocomplete = null;
        if (b) {
            b.destroy()
        }
        b = null;
        if (j) {
            d.parentNode.removeChild(j)
        }
        j = null;
        if (l && l.parentNode) {
            l.parentNode.removeChild(l)
        }
    };
    this.showLoading = function() {
        YDom.addClass(j, "loading")
    };
    this.hideLoading = function() {
        YDom.removeClass(j, "loading")
    };
    this.createLoadingImg = function() {
        if (j) {
            d.parentNode.removeChild(j)
        }
        j = new Image();
        j.src = z.loadingImgSrc;
        YDom.addClass(j, "typeahead-loading-icon");
        d.parentNode.appendChild(j)
    };
    this.resetLoadingImg = function() {
        if (j) {
            j.src = j.src
        }
    }
};
LI.define("DataSourceAggregator");
LI.DataSourceAggregator = function(a, b) {
    this.sources = {};
    this.numSources = 0;
    this.results = {};
    this.numResults = 0;
    this.numSourcesLoading = 0;
    if (a) {
        this.maxResultsPerSource = a
    }
    if (b) {
        this.setResponseSchema(b)
    }
    this.onAllDataRequest = new YAHOO.util.CustomEvent("allDataRequest");
    this.onAllDataResponse = new YAHOO.util.CustomEvent("allDataResponse");
    LI.DataSourceAggregator.superclass.constructor.call(this, null, null)
};
YAHOO.lang.extend(LI.DataSourceAggregator, YAHOO.util.DataSourceBase, {
    sources: {},
    numSources: 0,
    results: {},
    responseSchema: {
        resultsList: "resultList",
        fields: ["headLine", "displayName", "subLine", "imageUrl", "id", "url", "sourceID"]
    },
    numResults: 0,
    maxResultsPerSource: - 1,
    numSourcesLoading: 0,
    highlightType: "SO_FAR",
    setHighlightType: function(a) {
        this.highlightType = a
    },
    formatQuery: function(b, c) {
        var a = b.dataType;
        if (a === YAHOO.util.DataSourceBase.TYPE_XHR) {
            if (!b.connMethodPost) {
                c = "?" + (b.scriptQueryParam || "query") + "=" + c + (b.scriptQueryAppend ? ("&" + b.scriptQueryAppend) : "")
            } else {
                c = (b.scriptQueryParam || "query") + "=" + c + (b.scriptQueryAppend ? ("&" + b.scriptQueryAppend) : "")
            }
        } else {
            if (a === YAHOO.util.DataSourceBase.TYPE_SCRIPTNODE) {
                c = "&" + (b.scriptQueryParam || "query") + "=" + c + (b.scriptQueryAppend ? ("&" + b.scriptQueryAppend) : "")
            }
        }
        return c
    },
    setResponseSchema: function(a) {
        a.fields.push("sourceID");
        this.responseSchema = a
    },
    addSource: function(g, d, a, f, c) {
        var e = 0, b = d.liveData;
        if (d.dataType === YAHOO.util.DataSourceBase.TYPE_XHR && (e = b.indexOf("?")) >= 0) {
            d.scriptQueryAppend = b.substring(e + 1);
            d.liveData = b.substring(0, e)
        }
        d.LIFilterResults = (a !== false);
        d.LIFilterResultsBooleanAnd = (f === true);
        d.dedupe = (c || false);
        this.numSources++;
        this.sources[g] = d
    },
    sendRequest: function(d, g, a) {
        var f = YAHOO.util.DataSourceBase._nTransactionId++;
        this.results = {};
        this.numResults = 0;
        this.numSourcesLoading = this.numSources;
        this.onAllDataRequest.fire();
        var c, e, b;
        for (e in this.sources) {
            b = {
                success: this.successCallback,
                failure: this.failureCallback,
                scope: this,
                argument: {
                    id: e,
                    callback: g,
                    caller: a,
                    tid: f
                }
            };
            c = this.sources[e];
            if (!c.customResponseSchema&&!this.responseSchema) {
                throw "You must set a master responseSchema on the DataSourceAggregator."
            }
            c.responseSchema = c.customResponseSchema || this.responseSchema;
            c.sendRequest(this.formatQuery(c, d), b, a)
        }
        return f
    },
    getRows: function(d) {
        var e = [];
        this.numResults = 0;
        if (typeof d === "string") {
            e = this.results[d];
            if (!e) {
                return []
            } else {
                if (e.length > this.maxResultsPerSource) {
                    e = e.slice(0, this.maxResultsPerSource)
                }
            }
        } else {
            var g, f, c;
            for (g in this.sources) {
                c = this.results[g];
                if (c) {
                    for (var b = 0, a = c.length;
                    b < a;
                    b++) {
                        f = c[b];
                        if (!f.sourceID) {
                            f.sourceID = g
                        }
                        e[e.length] = f
                    }
                }
            }
        }
        this.numResults = e.length;
        return e
    },
    getSize: function(a) {
        if (typeof a === "string") {
            var b = this.results[a];
            if (!b) {
                return 0
            } else {
                return b.length
            }
        }
        return this.numResults
    },
    _cloneObject: function(d) {
        if (!YAHOO.lang.isValue(d)) {
            return d
        }
        var f = {};
        if (Object.prototype.toString.apply(d) === "[object RegExp]") {
            f = d
        } else {
            if (YAHOO.lang.isFunction(d)) {
                f = d
            } else {
                if (YAHOO.lang.isArray(d)) {
                    var e = [];
                    for (var c = 0, b = d.length;
                    c < b;
                    c++) {
                        e[c] = this._cloneObject(d[c])
                    }
                    f = e
                } else {
                    if (YAHOO.lang.isObject(d)) {
                        for (var a in d) {
                            if (YAHOO.lang.hasOwnProperty(d, a)) {
                                if (YAHOO.lang.isValue(d[a]) && YAHOO.lang.isObject(d[a]) || YAHOO.lang.isArray(d[a])) {
                                    f[a] = this._cloneObject(d[a])
                                } else {
                                    f[a] = d[a]
                                }
                            }
                        }
                    } else {
                        f = d
                    }
                }
            }
        }
        return f
    },
    successCallback: function(h, p, s) {
        var r = s.id;
        var t = this.sources[r];
        var g = s.callback;
        var m = [];
        var v = this._cloneObject(p);
        var b = null;
        var z = null;
        var d = null;
        var C = new RegExp("[.*+?|()\\[\\]{}\\\\]", "g");
        this.numSourcesLoading--;
        if (this.numSourcesLoading === 0) {
            this.onAllDataResponse.fire()
        }
        if (YAHOO.lang.trim(decodeURIComponent(h)) === "") {
            return
        }
        if (t.dataType === YAHOO.util.DataSourceBase.TYPE_LOCAL && t.LIFilterResults === true) {
            if (t.customFilterResults) {
                m = t.customFilterResults(h, v, s)
            } else {
                if (this.responseSchema.fields) {
                    var c, l, y, A, x, D, H = this.responseSchema.fields[0].key || this.responseSchema.fields[0], o = v.results, q = "<strong>", a = "</strong>", G = "___LiHiB___", n = "___LiHiE___", f = new RegExp("___LiHiB___", "g"), k = new RegExp("___LiHiE___", "g");
                    if (t.dedupe === true) {
                        b = [];
                        z = [];
                        d = o.length;
                        for (var y = 0;
                        y < d;
                        y++) {
                            if (b.indexOf(o[y].id) < 0) {
                                z.push(o[y]);
                                b.push(o[y].id)
                            }
                        }
                        o = z
                    }
                    h = YAHOO.lang.trim(decodeURIComponent(h));
                    h = h.replace(C, "\\$&");
                    if (h.length > 0) {
                        var E = h.split(/\s+/), u = E.length, e = new RegExp("(?:^|\\b)(" + E.reverse().join("|") + ")", "i"), B = new RegExp("(?:^|\\b)(" + E.reverse().join("|") + ")", "ig"), F = [];
                        if (t.LIFilterResultsBooleanAnd) {
                            for (x = 0;
                            x < u;
                            x++) {
                                F.push(new RegExp("(?:^|\\b)" + E[x], "i"))
                            }
                        }
                        for (y = 0, A = o.length;
                        y < A;
                        y++) {
                            l = o[y];
                            c = LI.htmlUnencode(l[H]);
                            if (e.test(c)) {
                                if (t.LIFilterResultsBooleanAnd && F.length > 1) {
                                    D = 0;
                                    for (x = 0;
                                    x < u;
                                    x++) {
                                        if (F[x].test(c)) {
                                            D += 1
                                        }
                                    }
                                    if (D < u) {
                                        continue
                                    }
                                }
                                switch (this.highlightType) {
                                case"SO_FAR":
                                    l[H] = c.replace(B, G + "$1" + n);
                                    break;
                                case"REST":
                                    l[H] = G + c.replace(B, n + "$1" + G) + n;
                                    break;
                                case"REMAINING":
                                    l[H] = c.replace(B, "$1" + G) + n;
                                    break;
                                default:
                                    l[H] = c.replace(B, G + "$1" + n)
                                }
                                l[H] = LI.htmlEncode(l[H]);
                                l[H] = l[H].replace(f, q).replace(k, a);
                                m[m.length] = l
                            }
                        }
                    }
                }
            }
            v.results = m
        }
        this.results[r] = v.results;
        if ((this.numSourcesLoading === 0) && g) {
            v.results = this.getRows();
            var w = (this.getSize() === 0);
            v.error = w;
            YAHOO.util.DataSourceBase.issueCallback(g, [h, v], w, s.caller)
        }
    },
    failureCallback: function(c, b, d) {
        var f = d.callback;
        var e = this._cloneObject(b);
        this.numSourcesLoading--;
        if (this.numSourcesLoading === 0 && f) {
            this.onAllDataResponse.fire();
            e.results = this.getRows();
            var a = (this.getSize() === 0);
            e.error = a;
            YAHOO.util.DataSourceBase.issueCallback(f, [c, e], a, d.caller)
        }
    },
    flushCache: function() {
        var a, b;
        for (b in this.sources) {
            a = this.sources[b];
            a.flushCache()
        }
    },
    destroy: function() {
        this.flushCache();
        this.source = {};
        this.numSources = 0;
        this.results = {};
        this.numResults = 0;
        this.numSourcesLoading = 0
    }
});
LI.define("Typeahead2");
LI.Typeahead2 = function(d, C) {
    var x = null, k, g, r, o = d, l = null, c = 10, n = 5, m = {
        TYPEAHEAD_RESULTS_CONTAINER: "typeahead-results-container"
    }, p = this, s, e, A, h, v, j = "function";
    C = {
        queryAppend: C.queryAppend || null,
        source: C.source || null,
        hiddenField: C.hiddenField || null,
        containerEl: YDom.get(C.containerEl) || document.body,
        maxResultsDisplayed: C.maxResultsDisplayed || c,
        maxResultsPerSource: C.maxResultsPerSource || n,
        actionsEnabled: C.actionsEnabled || false,
        resultsClass: C.resultsClass || "",
        resultsID: C.resultsID || null,
        renderAs: C.renderAs || ["DEFAULT"],
        handleEventAs: C.handleEventAs || ["DEFAULT"],
        itemUrlTrackingKey: C.itemUrlTrackingKey || null,
        itemUrlTrackingInfo: C.itemUrlTrackingInfo || null,
        itemSelectEventHandler: C.itemSelectEventHandler || null,
        unmatchedItemSelectEventHandler: C.unmatchedItemSelectEventHandler || null,
        loadingImgSrc: C.loadingImgSrc || null,
        loadingImgConfig: {
            loaderClass: (C.loadingImgConfig ? C.loadingImgConfig.loaderClass : null) || null,
            loaderText: (C.loadingImgConfig ? C.loadingImgConfig.loaderText : null) || null
        },
        noResultsText: C.noResultsText || null,
        noResultsEl: C.noResultsEl || null,
        onDataReturn: C.onDataReturn || null,
        onItemArrowTo: C.onItemArrowTo || null,
        onItemArrowFrom: C.onItemArrowFrom || null,
        trackTARequest: C.trackTARequest || null
    };
    function F(J) {
        var I = [{
            name: "hiddenField",
            value: C.hiddenField
        }, {
            name: "maxResultsPerSource",
            value: C.maxResultsPerSource
        }, {
            name: "loadingImgSrc",
            value: C.loadingImgSrc
        }, {
            name: "loadingImgConfig",
            value: C.loadingImgConfig
        }, {
            name: "noResultsText",
            value: C.noResultsText
        }, {
            name: "noResultsEl",
            value: C.noResultsEl
        }, {
            name: "itemUrlTrackingKey",
            value: C.itemUrlTrackingKey
        }, {
            name: "itemUrlTrackingInfo",
            value: C.itemUrlTrackingInfo
        }
        ];
        for (var H = 0, G = I.length;
        H < G;
        H++) {
            if (!J[I[H].name]) {
                J[I[H].name] = I[H].value
            }
        }
    }
    function b(I, M) {
        var H = {}, J, L, O, G = {}, K, N = LI.Typeahead2.RenderHandlers;
        if (YAHOO.util.Lang.isObject(N)) {
            for (J = 0, O = M.length;
            J < O;
            J++) {
                if (typeof M[J] === "string") {
                    K = M[J];
                    if (N.hasOwnProperty(K)) {
                        G = N[M[J]]
                    } else {}
                } else {
                    if (typeof M[J] === "object") {
                        G = M[J]
                    }
                }
                H = YAHOO.lang.merge(H, G)
            }
        } else {}
        for (L in H) {
            if (H.hasOwnProperty(L)) {
                I[L] = H[L]
            }
        }
    }
    function t(J, L) {
        var H = {}, K, N, I, G = {}, O, M = LI.Typeahead2.EventHandlers;
        if (YAHOO.util.Lang.isObject(M)) {
            for (K = 0, I = L.length;
            K < I;
            K++) {
                if (typeof L[K] === "string") {
                    O = L[K];
                    if (M.hasOwnProperty(O)) {
                        G = M[L[K]]
                    } else {}
                } else {
                    if (typeof L[K] === "object") {
                        G = L[K]
                    }
                }
                H = YAHOO.lang.merge(H, G)
            }
        } else {}
        if (p.onItemSelect) {
            J.itemSelectEvent.subscribe(p.onItemSelect, p, true)
        }
        if (p.onUnmatchedItemSelect) {
            J.unmatchedItemSelectEvent.subscribe(p.onUnmatchedItemSelect, p, true)
        }
        if (p.onDataReturn) {
            J.dataReturnEvent.subscribe(p.onDataReturn, p, true)
        }
        if (p.onItemArrowTo) {
            J.itemArrowToEvent.subscribe(p.onItemArrowTo, p, true)
        }
        if (p.onItemArrowFrom) {
            J.itemArrowFromEvent.subscribe(p.onItemArrowFrom, p, true)
        }
        for (N in H) {
            if (H.hasOwnProperty(N)) {
                J[N].subscribe(H[N])
            }
        }
    }
    function f() {
        k = new YAHOO.widget.AutoComplete(o, l, x, {
            maxResultsDisplayed: C.maxResultsDisplayed,
            actionsEnabled: C.actionsEnabled
        });
        k._onTextboxFocus(null, k);
        F(k);
        b(k, C.renderAs);
        t(k, C.handleEventAs)
    }
    function q() {
        LI.Typeahead2.RenderHandlers.UNIVERSAL_SEARCH_WITH_ACTIONS = {
            doBeforeExpandContainer: LI.Typeahead2.RenderHandlerHelpers.doBeforeExpandContainerFunctionFactory({
                truncateConfigs: {
                    headLine: {
                        selector: ".item-headline",
                        width: "368",
                        textStyles: {
                            "font-weight": "bold",
                            "font-size": "13px"
                        },
                        keepStrCaseSensitive: false,
                        keepStrEllipAfter: true,
                        thresholdLength: 45
                    }
                },
                includeRank: true
            }),
            formatResult: LI.Typeahead2.RenderHandlerHelpers.formatResultFunctionFactory({
                formatItemResult: function(G, J, M, I) {
                    var L = J, K = {
                        "message": "message",
                        "connect": "connect",
                        "inmail": "send-inmail",
                        "post": "follow",
                        "view": "view"
                    }, H;
                    if (L.misc && L.misc.actionUrl) {
                        G += '<a href="' + L.url + '" class="entity has-action"/>'
                    } else {
                        G += '<a href="' + L.url + '" class="entity"/>'
                    }
                    if (L.imageUrl && L.imageUrl.length > 0) {
                        G += '<img src="' + L.imageUrl + '" alt="">'
                    } else {
                        if (L.misc && L.misc.verticalType) {
                            G += '<span class="ghost-image ' + L.misc.verticalType.toLowerCase() + '"></span>'
                        } else {
                            G += '<span class="ghost-image"></span>'
                        }
                    }
                    if (L.headLine && L.headLine.length > 0) {
                        if (!L.subLine) {
                            G += '<span class="item-headline">' + L.headLine + "</span>"
                        } else {
                            G += '<span class="item-headline has-subline">' + L.headLine + "</span>"
                        }
                    }
                    if (L.headLine !== null && L.subLine && L.subLine !== "") {
                        G += '<span class="item-subline">' + L.subLine + "</span>"
                    }
                    G += "</a>";
                    if (L.misc && L.misc.actionUrl) {
                        G += '<a class="typeahead-action" href="' + L.misc.actionUrl + '">' + LI.i18n.get("typeahead2-" + K[L.misc.actionType]) + "</a>"
                    }
                    return G
                }
            })
        }
    }
    function D() {
        if (C.actionsEnabled && LI.Typeahead2Navigator) {
            g = new LI.Typeahead2Navigator("main-search-box", "universal-typeahead-results");
            g.bindEvents()
        }
    }
    function a() {
        l = document.createElement("div");
        l.className = m.TYPEAHEAD_RESULTS_CONTAINER;
        if (C.resultsClass) {
            YDom.addClass(l, C.resultsClass)
        }
        if (C.resultsID) {
            l.id = C.resultsID
        }
        if (YAHOO.env.ua.ie > 0) {
            C.containerEl.appendChild(l)
        } else {
            C.containerEl.insertBefore(l, C.containerEl.firstChild)
        }
    }
    function B(G) {
        if (WebTracking) {
            WebTracking.trackUserAction("tyahPerf", G)
        }
    }
    function z(H) {
        var P, K, O = {}, M = 0, L = 0, I = 0, P = 0, J, G, N = "";
        if (H) {
            if (k && k.containerExpandEvent) {
                k.containerExpandEvent.subscribe(function(Q, R) {
                    WebTracking.trackUserAction("tyahPerf-paint", {
                        responseToPaint: (( + new Date()) - P)
                    }, true);
                    P = 0
                })
            }
            H.subscribe("requestEvent", function(Q) {
                var R;
                J = Q.tId;
                G = "k" + J;
                M++;
                R = O[G] || {};
                R.timeStart = ( + new Date());
                O[G] = R
            });
            H.subscribe("responseEvent", function(Q) {
                var R;
                J = Q.tId;
                G = "k" + J;
                R = O[G];
                if (R) {
                    L++;
                    R.responseTime = ( + new Date()) - R.timeStart;
                    P = ( + new Date());
                    I += R.responseTime;
                    if (M >= 3) {
                        N = M + "," + L + ",";
                        N += Math.floor(1 * I / L).toString();
                        B(N);
                        O = {};
                        M = 0;
                        I = 0;
                        L = 0;
                        N = ""
                    }
                }
            });
            H.subscribe("cacheResponseEvent", function() {
                P = ( + new Date())
            })
        }
    }
    function y() {
        if (!YAHOO.lang.isUndefined(p.source) && C.source !== p.source) {
            C.source = p.source
        }
        if (C.source) {
            x = LI.DataSource.Factory.createSource(o, C.source)
        } else {
            throw "You haven't defined a source for Typeahead"
        }
        if (!x) {
            throw "The data source is invalid"
        }
    }
    function u() {
        if (!r) {
            if (C.hiddenField) {
                C.hiddenField = YDom.get(C.hiddenField)
            }
            y();
            a();
            if (C.actionsEnabled) {
                q()
            }
            f();
            D();
            if (C.trackTARequest) {
                z(x)
            }
        }
    }
    function i() {
        var H = LI.Typeahead2Dependencies.scripts, G = H.length, L = G, K, I, J;
        if (LI.Typeahead2.lazyLoad.fetchingDependencies) {
            return
        }
        I = function() {
            L--;
            if (L === 0) {
                LI.Typeahead2.lazyLoad.onDependenciesLoaded.fire()
            }
        };
        J = function() {
            LI.Typeahead2.lazyLoad.fetchingDependencies = false;
            throw "Failed fetching dependencies."
        };
        if (G) {
            LI.Typeahead2.lazyLoad.fetchingDependencies = true
        }
        for (K = 0;
        K < G;
        K++) {
            YAHOO.util.Get.script(H[K], {
                onSuccess: I,
                onFailure: J
            })
        }
    }
    function w() {
        YEvent.removeListener(d, "focus", w);
        if (YAHOO.util.Lang.isObject(LI.DataSource) && YAHOO.util.Lang.isObject(LI.Typeahead2.RenderHandlers)) {
            u()
        } else {
            i()
        }
        LI.Typeahead2.lazyLoad.onDependenciesLoaded.subscribe(u, p, true)
    }
    YEvent.on(d, "focus", w);
    s = C.itemSelectEventHandler;
    if (s && typeof s === j) {
        this.onItemSelect = s
    }
    e = C.unmatchedItemSelectEventHandler;
    if (e && typeof e === j) {
        this.onUnmatchedItemSelect = e
    }
    A = C.onDataReturn;
    if (A && typeof A === j) {
        this.onDataReturn = A
    }
    h = C.onItemArrowTo;
    if (h && typeof h === j) {
        this.onItemArrowTo = h
    }
    v = C.onItemArrowFrom;
    if (v && typeof v === j) {
        this.onItemArrowFrom = v
    }
    function E(G) {
        k._onTextboxKeyDown(G, k)
    }
    this.sendQuery = function(G) {
        k.sendQuery.call(k, G)
    };
    this.expandContainer = function() {
        k.expandContainer.call(k)
    };
    this.isContainerOpen = function() {
        return k.isContainerOpen.call(k)
    };
    this.isFocused = function() {
        return k.isFocused.call(k)
    };
    this.collapseContainer = function() {
        if (k && k.collapseContainer) {
            k.collapseContainer.call(k)
        }
    };
    this.flushCache = function() {
        if (x) {
            x.flushCache()
        }
    };
    this.setMaxResultsPerSource = function(G) {
        C.maxResultsPerSource = G;
        if (k) {
            k.maxResultsPerSource = C.maxResultsPerSource
        }
        this.flushCache()
    };
    this.setSource = function(G) {
        this.source = G;
        if (k) {
            y();
            k.destroy.call(k);
            k = null;
            if (g) {
                g.unbindEvents();
                g = null
            }
            f();
            D()
        }
    };
    this.destroy = function() {
        YEvent.removeListener(d, "focus", w);
        if (k) {
            k.destroy.call(k);
            C.containerEl.removeChild(l)
        }
        if (g) {
            g.unbindEvents()
        }
        r = true
    };
    this.init = w;
    this.proxyKeyDown = E
};
LI.Typeahead2.lazyLoad = {
    fetchingDependencies: false,
    onDependenciesLoaded: new YAHOO.util.CustomEvent("TA2DependenciesLoaded")
};
LI.Typeahead2.prototype = {
    onItemSelect: function() {},
    onUnmatchedItemSelect: function() {},
    onDataReturn: function() {},
    onItemArrowTo: function() {},
    onItemArrowFrom: function() {}
};
LI.define("UniversalSearch");
LI.UniversalSearch = function(al, R) {
    var M = al, d = null, Z = null, n, l, s = null, v = null, o = null, i = false, z = null, w = null, p = M.getAttribute("action"), x, ak, b, ai = null, P = "tarId", f = "", u = (new Date()).getTime(), V = YDom.hasClass(M, "voltron"), k, aa, J = YAHOO.lang, X = J.trim, ao, ap, h, I, ac, T = "", K = {}, am = "pc", e = "pivot", ah = "all", c = "people", ag = "jobs", F = "companies", ad = "groups", an = "edu", U = "content", O = "inbox", G = "mynetwork", ab = "company", B = "group", W = "sitefeature", a = "skill", r = "school", ae = "showcase", y = "suggestion", D = "refine", E = "autocomplete";
    this.keywordChangeEvent = k = new YAHOO.util.CustomEvent("universalSearchKeywordChange");
    ap = function(aq) {
        if (typeof aq === "string") {
            T = aq
        }
    };
    this.setPageContext = ap;
    h = function() {
        return T || ""
    };
    this.getPageContext = h;
    ao = function(ar, at) {
        var aq = Y$("input[name=" + ar + "]", M, true);
        if (aq) {
            aq.value = at
        }
    };
    this.setInput = ao;
    I = function() {
        n = Z.options[Z.selectedIndex].value;
        if ((V && n === ad) || n === ah || n === c || n === ag || n === F || n === an || n === U) {
            Z.form.method = "get"
        } else {
            Z.form.method = "post"
        }
    };
    ac = function() {
        setTimeout(function() {
            var aq = YDom.removeClass;
            if (!aa) {
                Q()
            }
            if (z.value&&!aa.isGhostLabelVisible()) {
                aq = YDom.addClass
            }
            aq(z, "clear-shown");
            aq(w, "show")
        }, 50)
    };
    if (/^\/vsearch/.test(location.pathname) && /pivotType=/.test(location.href)) {
        ap(e)
    }
    R = {
        field: R.field || null,
        fieldName: R.fieldName || null,
        clearSelector: R.clearSelector || null,
        searchTypeMenu: R.searchTypeMenu || null,
        searchLink: R.searchLink || null,
        loadingImgSrc: R.loadingImgSrc || "",
        userProfileImage: R.userProfileImage,
        includeTAInstantSurface: R.includeTAInstantSurface,
        includeTAInstantSurfaceClipped: R.includeTAInstantSurfaceClipped,
        includeTAInstantSurfaceTransparent: R.includeTAInstantSurfaceTransparent,
        includeActionsInTypeahead: R.includeActionsInTypeahead,
        taSuggestionRecolor: R.taSuggestionRecolor,
        taGlyphIcons: R.taGlyphIcons,
        includeSearchSuggestion: R.includeSearchSuggestion,
        includeSearchPlusAC: R.includeSearchPlusAC,
        includeSearchRefine: R.includeSearchRefine,
        includeSearchAutoComplete: R.includeSearchAutoComplete,
        includeTypeaheadTracking: R.includeTypeaheadTracking,
        includeTypeaheadRequestTracking: R.includeTypeaheadRequestTracking,
        includeTypeaheadInitTracking: R.includeTypeaheadInitTracking,
        includeRankHide: R.includeRankHide,
        includeTARefactorPhaseOne: R.includeTARefactorPhaseOne,
        removeTAClientSort: R.removeTAClientSort,
        removeSkillsTA: R.removeSkillsTA,
        removeGroupsTA: R.removeGroupsTA,
        trkInfoField: R.trkInfoField || null,
        enableEduSearch: R.enableEduSearch || false,
        enableShowcaseSearch: R.enableShowcaseSearch || false,
        showcasePrimaryCount: R.showcasePrimaryCount,
        showcaseSecondaryCount: R.showcaseSecondaryCount,
        networkHeadline: (typeof R.networkHeadline === "undefined" || R.networkHeadline === "control") ? "connections": R.networkHeadline
    };
    Z = YDom.get(R.searchTypeMenu);
    s = YDom.get(R.searchLink);
    z = YDom.get(R.field);
    w = YDom.get(R.clearSelector);
    ai = YDom.get(R.trkInfoField);
    function Q() {
        if (!Z) {
            return
        }
        var aq = Y$(".ghost", z.parentNode)[0];
        LI.GhostLabel.Manager.destroy(Z.form.id, z.id);
        aa = new LI.GhostLabel(aq, {})
    }
    function H(ar) {
        var au = {
            resultList: []
        }, at, aq;
        aq = LI.i18n.get("universal-search-search-current-for", ar);
        return {
            resultList: [{
                displayName: ar,
                headLine: aq,
                url: "",
                sourceID: D
            }
            ]
        }
    }
    function t(aw, ar, aq) {
        var av, at = "meta", au;
        if (aq && aq.argument && aq.argument.query) {
            aw = aq.argument.query
        }
        au = decodeURIComponent(aw);
        if (R.includeSearchRefine) {
            if (V && h() === e) {
                if (au && X(au) !== "") {
                    av = H(au)
                }
            }
        }
        if (R.removeTAClientSort) {
            if (av) {
                ar.resultList = av.resultList.concat(ar.resultList)
            }
        } else {
            if (av) {
                ar[D] = av
            }
            ar = LI.DataSource.MultiSourceHelper.flattenResponseBeforeParseData.apply(this, [aw, ar, aq])
        }
        return ar
    }
    function g() {
        var aq = LI.DataSource.Helper.defaultXHRConfig, at = {
            resultsList: "resultList",
            metaFields: {
                tarId: "meta.tarId"
            },
            fields: ["headLine", "displayName", "subLine", "url", "sourceID", "imageUrl", "id", "misc"]
        }, ar = "";
        if (R.includeTARefactorPhaseOne) {
            ar += "orig=GLHD";
            ar += "&verticalSelector=" + n
        } else {
            ar = "types=" + [G, ab, W].join(",");
            if (!R.removeGroupsTA) {
                ar += "," + B
            }
            if (R.includeSearchSuggestion) {
                ar += "," + y
            }
            if (R.enableEduSearch) {
                ar += "," + r
            }
            if (R.enableShowcaseSearch) {
                ar += "," + ae
            }
            if (R.includeSearchPlusAC) {
                ar += "," + E
            }
            if (!R.removeSkillsTA) {
                ar += "," + a
            }
        }
        if (R.includeRankHide) {
            at.fields.push("rank");
            ar += "&rank=true"
        }
        if (R.includeTypeaheadTracking) {
            ar += "&tracking=true"
        }
        ar += "&_l=" + LI.i18n.getLocale().value;
        if (R.removeTAClientSort) {
            aq.doBeforeCallback = LI.DataSource.MultiSourceHelper.addCategoriesBeforeCallback
        }
        aq = YAHOO.lang.merge(aq, {
            responseSchema: at,
            scriptQueryAppend: ar
        });
        if (R.includeSearchRefine || R.removeTAClientSort) {
            aq = YAHOO.lang.merge(aq, {
                doBeforeParseData: t
            })
        }
        return aq
    }
    function C() {
        K = {
            refine: LI.i18n.get("universal-search-refine"),
            autocomplete: LI.i18n.get("typeahead2-search-suggestions"),
            suggestion: LI.i18n.get("typeahead2-search-suggestions"),
            mynetwork: R.networkHeadline === "people" ? LI.i18n.get("typeahead2-search-people"): LI.i18n.get("typeahead2-search-connections"),
            company: LI.i18n.get("typeahead2-search-companies"),
            group: LI.i18n.get("typeahead2-search-groups"),
            sitefeature: LI.i18n.get("typeahead2-search-features"),
            school: LI.i18n.get("typeahead2-search-schools"),
            showcase: LI.i18n.get("typeahead2-search-showcases"),
            skill: LI.i18n.get("typeahead2-search-skills")
        }
    }
    function j(aB) {
        var aC = "TYPE_UNIVERSAL_SEARCH", ar, av = null, aq, ax, at, aD, az = "UNIVERSAL_SEARCH", au = {};
        if (d) {
            d.destroy();
            d = null;
            if (x) {
                x.destroy();
                x = null
            }
            Q()
        }
        if (R.includeSearchAutoComplete) {
            L()
        }
        if (Z) {
            n = Z.options[Z.selectedIndex].value;
            if ((n !== ah && n !== c && n !== F && n !== ad && n !== O && n !== ag && n !== an && n !== U)) {
                return
            }
        }
        function ay() {
            return !!Y$("#pivot-bar .super-pivot", null, true)
        }
        C();
        at = {
            create: function() {
                var aE, aF;
                aE = (LI.TypeaheadDataSourceUrls && LI.TypeaheadDataSourceUrls.FEDERATOR) ? LI.TypeaheadDataSourceUrls.FEDERATOR : "/ta/federator";
                aF = g();
                return LI.DataSource.Helper.createFederatorXHRDataSource(aE, aF, K)
            }
        };
        aD = aC;
        if (R.includeSearchSuggestion || R.includeSearchPlusAC || R.includeTypeaheadTracking || R.includeSearchAutoComplete || R.includeSearchRefine || R.includeRankHide || R.enableEduSearch || R.enableShowcaseSearch || R.removeSkillsTA || R.includeTARefactorPhaseOne || R.removeTAClientSort) {
            aD = at
        }
        av = m(n);
        aq = function(aF) {
            var aG = (typeof this._nRealKeyCode !== "undefined") ? this._nRealKeyCode: this._nKeyCode, aH = ak.value, aE = z.value;
            if (!aF&&!this._elCurListItem && (aG === 9 || this._bFocused)) {
                if (aE === "") {
                    b()
                } else {
                    if (aH && aH !== aE) {
                        switch (aG) {
                        case 27:
                        case 13:
                            b();
                            break;
                        case 9:
                            window.setTimeout(function() {
                                z.focus()
                            }, 200);
                        case 39:
                            z.value = aH;
                            d.sendQuery(aH);
                            WebTracking.trackUserAction("search-assist-accept", {
                                input: aE,
                                suggestion: aH,
                                guid: u,
                                ts: (new Date()).getTime(),
                                prefixLength: LI.getDataAttribute(ak, "prefix-length")
                            });
                            break
                        }
                    }
                }
            }
            YAHOO.widget.AutoComplete.prototype._toggleContainer.call(this, aF)
        };
        ar = function(aI, aF, aH) {
            var aG = aF.meta, aE;
            if (aG && aG[P] && ai) {
                aE = ai.value;
                if (aE.indexOf(P + ":") >= 0) {
                    ai.value = P + ":" + aG[P]
                } else {
                    ai.value += P + ":" + aG[P]
                }
            }
            return true
        };
        ax = function(aG) {
            var aE = "", aF = h();
            aE += (this.queryQuestionMark) ? "?" : "";
            aE += (this.dataSource.scriptQueryParam || "query") + "=" + aG;
            aE += (this.dataSource.scriptQueryAppend ? ("&" + this.dataSource.scriptQueryAppend) : "");
            if (aF) {
                aE += "&" + am + "=" + aF
            }
            return aE
        };
        constructResultClass = function() {
            var aE = ["using-typeahead2"];
            if (R.includeTAInstantSurface) {
                aE.push("typeahead-reskin2")
            }
            if (R.includeTAInstantSurfaceClipped) {
                aE.push("clipped")
            }
            if (R.includeTAInstantSurfaceTransparent&&!R.includeActionsInTypeahead) {
                aE.push("transparent")
            }
            if (R.taSuggestionRecolor !== "control") {
                aE.push("colorful-suggestions")
            }
            if (R.taSuggestionRecolor === "blue") {
                aE.push("blue-variant")
            }
            if (R.includeActionsInTypeahead) {
                aE.push("typeahead-actions")
            }
            if (R.taGlyphIcons) {
                aE.push("glyph-icons")
            }
            return aE.join(" ")
        };
        if (R.includeTypeaheadTracking) {
            au.doBeforeLoadData = ar
        }
        if (R.includeSearchAutoComplete) {
            au._toggleContainer = aq
        }
        if (R.includeSearchRefine) {
            au.generateRequest = ax
        }
        if (V) {
            if (R.includeActionsInTypeahead) {
                az = "UNIVERSAL_SEARCH_WITH_ACTIONS"
            } else {
                if (R.includeTAInstantSurface) {
                    az = "UNIVERSAL_SEARCH_VOLTRON_INSTANT"
                } else {
                    az = "UNIVERSAL_SEARCH_VOLTRON"
                }
            }
        }
        var aw = {
            itemSelectEvent: function(aL, aK) {
                var aF = aK[0], aN = aK[1], aO = aK[2], aH = aF.getInputEl(), aI = "tyah", aM = [], aE = aO.url, aG = false, aJ;
                if (R.includeActionsInTypeahead) {
                    aJ = Y$(".selected", aN, true);
                    if (aJ) {
                        aG = YDom.hasClass(aJ, "typeahead-action");
                        if (aO.sourceID !== E) {
                            aE = aJ.href
                        }
                        aJ.href = "javascript:void(0)"
                    }
                }
                if (aO.type === "category") {
                    return
                }
                if (aO.sourceID === G && aO.misc && aO.misc.degree) {
                    aI = "tyah2"
                }
                if (aO.sourceID === E && X(aE) === "") {
                    aE = M.action + ((M.action.indexOf("?")>-1) ? "&" : "?");
                    aE += encodeURIComponent(aH.name) + "=" + encodeURIComponent(LI.htmlUnencode(aO.displayName));
                    aI = "tyaha"
                }
                if (aG) {
                    aI += "_" + aO.sourceID + "_action"
                }
                if (V && aO.sourceID === D && X(aE) === "") {
                    k.fire({
                        keyword: aO.displayName
                    });
                    i = false;
                    return
                }
                if (ai) {
                    aM.push(ai.value || "")
                }
                if (f) {
                    aM.push("tas:" + f)
                }
                if (typeof aO.categoryIndex !== "undefined" && typeof aO.itemInCategoryIndex !== "undefined" && typeof aO.itemIndex !== "undefined") {
                    aM.push("idx:" + aO.categoryIndex + "-" + aO.itemInCategoryIndex + "-" + aO.itemIndex)
                }
                aO.url = aE;
                LI.Typeahead2.EventHelper.goToUrl(aO, aI, aM.join(","))
            },
            containerCollapseEvent: function(aF, aE) {
                v = null
            }
        }, aA=!R.includeTAInstantSurface ? {} : {
            containerExpandEvent: function(aH, aF) {
                var aE = aF[0], aG = aE.getContainerEl().firstChild;
                aG.scrollTop = 0
            }
        };
        d = new LI.Typeahead2(R.field, {
            source: aD,
            renderAs: ["DEFAULT", az, au],
            handleEventAs: ["DEFAULT", aw, aA],
            loadingImgSrc: R.loadingImgSrc,
            maxResultsDisplayed: R.includeTARefactorPhaseOne ? 100: 25,
            maxResultsPerSource: av,
            actionsEnabled: R.includeActionsInTypeahead,
            resultsID: "universal-typeahead-results",
            resultsClass: constructResultClass(),
            itemSelectEventHandler: function(aI, aH) {
                var aG = aH[0], aJ = aH[2], aF = aG.getInputEl(), aE = aG.hiddenField;
                if (aJ) {
                    if (aJ.type === "category") {
                        return
                    }
                    f = aF.value;
                    if (R.includeSearchAutoComplete) {
                        b()
                    }
                    LI.Typeahead2.EventHelper.populateInputField(aF, aE, aJ, aG.forceSelectionAndRevert);
                    i = true
                }
            },
            onItemArrowTo: function(aG, aF) {
                var aE = aF[1];
                v = aE
            },
            onItemArrowFrom: function(aF, aE) {
                v = null
            },
            trackTARequest: (R.includeTypeaheadRequestTracking) ? true: false
        });
        if (!aB) {
            z.blur();
            z.focus()
        }
    }
    function L() {
        var av = LI.TypeaheadDataSourceUrls.AUTOCOMPLETE || "/ta/autocomplete", au = {}, ar, aq, at = "width";
        if (typeof LI.Typeahead2 === "undefined") {
            return
        }
        if (x) {
            return
        }
        if (!ak) {
            ak = document.createElement("input");
            ak.id = "gray-text-field";
            ak.className = "search-autocomplete-gray-text";
            ak.disabled = true;
            YDom.setStyle(ak, at, YDom.getComputedStyle(z, at));
            z.parentNode.appendChild(ak);
            YDom.addClass(z, "gray-text-aware")
        } else {
            YDom.setStyle(ak, at, YDom.getComputedStyle(z, at))
        }
        au = {
            create: function() {
                return LI.DataSource.Helper.createXHRDataSource(av, YAHOO.lang.merge(LI.DataSource.Helper.defaultXHRConfig, {
                    responseSchema: {
                        resultsList: "resultList",
                        fields: ["headLine", "displayName", "misc"]
                    }
                }))
            }
        };
        ar = function(aB, ay) {
            var ax = ay.results, aA = "", aw = "", az = (typeof this._nRealKeyCode !== "undefined") ? this._nRealKeyCode: this._nKeyCode;
            if (!ay.error && ax && ax.length > 0 && az !== 46) {
                if (LI.htmlUnencode) {
                    aA = LI.htmlUnencode(ax[0].displayName) || ""
                } else {
                    aA = ax[0].displayName || ""
                }
                ak.value = aA;
                if (ax[0].misc) {
                    aw = ax[0].misc.prefixLength || ""
                }
                LI.setDataAttribute(ak, "prefix-length", aw)
            } else {
                b();
                return
            }
        };
        aq = function(ax, aw) {
            var ay = aw[1];
            if (ak.value.indexOf(ay) !== 0) {
                b()
            }
        };
        b = function() {
            ak.value = "";
            LI.setDataAttribute(ak, "prefix-length", "")
        };
        x = new LI.Typeahead2(z, {
            source: au,
            renderAs: ["DEFAULT", {
                handleResponse: ar
            }
            ],
            handleEventAs: [{
                dataErrorEvent: b,
                dataRequestEvent: aq
            }
            ],
            maxResultsDisplayed: 1
        })
    }
    j(true);
    new YAHOO.util.KeyListener(R.field, {
        keys: 13
    }, function() {
        if (v === null&&!i) {
            i = true;
            z.form.submit()
        }
    }, YAHOO.util.KeyListener.KEYDOWN).enable();
    YEvent.addListener(z.form, "submit", function(aq) {
        if (i) {
            YEvent.preventDefault(aq)
        }
        i = true;
        return
    });
    function m(ar) {
        var au = [{
            sourceID: G,
            max: 5
        }, {
            sourceID: ab,
            max: 3
        }, {
            sourceID: B,
            max: 2
        }, {
            sourceID: W,
            max: 2
        }, {
            sourceID: a,
            max: 2
        }
        ];
        if (ar === F) {
            au = [{
                sourceID: ab,
                max: 5
            }, {
                sourceID: G,
                max: 3
            }, {
                sourceID: B,
                max: 2
            }, {
                sourceID: W,
                max: 2
            }, {
                sourceID: a,
                max: 2
            }
            ]
        } else {
            if (ar === ad) {
                au = [{
                    sourceID: B,
                    max: 5
                }, {
                    sourceID: G,
                    max: 3
                }, {
                    sourceID: ab,
                    max: 2
                }, {
                    sourceID: W,
                    max: 2
                }, {
                    sourceID: a,
                    max: 2
                }
                ]
            } else {
                if (ar === an) {
                    au = [{
                        sourceID: r,
                        max: 5
                    }, {
                        sourceID: G,
                        max: 3
                    }, {
                        sourceID: B,
                        max: 2
                    }, {
                        sourceID: ab,
                        max: 2
                    }, {
                        sourceID: W,
                        max: 2
                    }, {
                        sourceID: a,
                        max: 2
                    }
                    ]
                }
            }
        }
        if (R.enableEduSearch && ar !== an) {
            au.splice(3, 0, {
                sourceID: r,
                max: 3
            })
        }
        if (R.enableShowcaseSearch) {
            for (var at = 0, av, aq = au.length;
            at < aq;
            at++) {
                av = au[at];
                if (av.sourceID === ab) {
                    if (ar === F) {
                        switch (R.showcasePrimaryCount) {
                        case"FiveTwo":
                            av.max = 5;
                            au.splice(at + 1, 0, {
                                sourceID: ae,
                                max: 2
                            });
                            break;
                        case"FiveOne":
                            av.max = 5;
                            au.splice(at + 1, 0, {
                                sourceID: ae,
                                max: 1
                            });
                            break;
                        case"FourOne":
                            av.max = 4;
                            au.splice(at + 1, 0, {
                                sourceID: ae,
                                max: 1
                            });
                            break;
                        case"ThreeTwo":
                            av.max = 3;
                            au.splice(at + 1, 0, {
                                sourceID: ae,
                                max: 2
                            });
                            break;
                        default:
                            av.max = 4;
                            au.splice(at + 1, 0, {
                                sourceID: ae,
                                max: 2
                            })
                        }
                    } else {
                        switch (R.showcaseSecondaryCount) {
                        case"ThreeOne":
                            av.max = 3;
                            au.splice(at + 1, 0, {
                                sourceID: ae,
                                max: 1
                            });
                            break;
                        case"TwoTwo":
                            av.max = 2;
                            au.splice(at + 1, 0, {
                                sourceID: ae,
                                max: 1
                            });
                            break;
                        case"TwoOne":
                            av.max = 2;
                            au.splice(at + 1, 0, {
                                sourceID: ae,
                                max: 1
                            });
                            break;
                        case"OneOne":
                            av.max = 1;
                            au.splice(at + 1, 0, {
                                sourceID: ae,
                                max: 1
                            });
                            break;
                        default:
                            av.max = 3;
                            au.splice(at + 1, 0, {
                                sourceID: ae,
                                max: 2
                            })
                        }
                    }
                    break
                }
            }
        }
        if (R.includeSearchSuggestion) {
            au.unshift({
                sourceID: y,
                max: 3
            })
        }
        if (R.includeTARefactorPhaseOne) {
            for (var at = 0, aq = au.length;
            at < aq;
            at++) {
                au[at].max = 99
            }
        }
        if (R.includeSearchRefine) {
            au.unshift({
                sourceID: D,
                max: 1
            })
        }
        if (R.includeSearchPlusAC) {
            au.unshift({
                sourceID: E,
                max: 1
            })
        }
        return au
    }
    function A(aq) {
        I();
        d.setMaxResultsPerSource(m(aq));
        d.setSource({
            create: function() {
                var ar, at;
                ar = (LI.TypeaheadDataSourceUrls && LI.TypeaheadDataSourceUrls.FEDERATOR) ? LI.TypeaheadDataSourceUrls.FEDERATOR : "/ta/federator";
                at = g();
                return LI.DataSource.Helper.createFederatorXHRDataSource(ar, at, K)
            }
        });
        Q()
    }
    function af(aq) {
        if (!aa) {
            Q()
        }
        if (aq) {
            aa.setLabel(aq);
            aa.updateLabel(true)
        }
    }
    function q(aq) {
        if (aq) {
            WebTracking.trackUserAction(aq)
        }
    }
    function Y(ar) {
        if (ar && ar.nodeName === "OPTION") {
            M.setAttribute("method", "form");
            if (ar && ar.value) {
                o = ar.value
            }
            var aq = LI.getDataAttribute(ar, "search-action");
            aq = aq || p;
            M.setAttribute("action", aq);
            switch (ar.value) {
            case"jobs":
                YDom.removeClass(M, "basic-search");
                if (!YAHOO.lang.isNull(s)) {
                    s.href = LI.getDataAttribute(ar, "advanced-link") || "#"
                }
                M.setAttribute("method", "get");
                break;
            case"inbox":
                YDom.addClass(M, "basic-search");
                break;
            case"groups":
                YDom.addClass(M, "basic-search");
                break;
            case"companies":
                YDom.addClass(M, "basic-search");
                M.setAttribute("method", "get");
                break;
            case"edu":
                YDom.addClass(M, "basic-search");
                M.setAttribute("method", "get");
                break;
            case"content":
                YDom.addClass(M, "basic-search");
                M.setAttribute("method", "get");
                break;
            default:
                YDom.removeClass(M, "basic-search");
                if (!YAHOO.lang.isNull(s)) {
                    s.href = LI.getDataAttribute(ar, "advanced-link") || "#"
                }
                M.setAttribute("method", "get");
                break
            }
            if (ak) {
                YDom.setStyle(ak, "width", YDom.getComputedStyle(z, "width"))
            }
        }
    }
    function S() {
        if (!YDom.get ||!M ||!Z) {
            return
        }
        if (YDom.get("MagicButtonControl")) {
            return
        }
        Y(Z.getElementsByTagName("option")[Z.selectedIndex])
    }
    S();
    LI.Events.bind("itemSelectEvent", function(ar) {
        var aq = ar.name, at = ar.option;
        if (aq === "universal-search-selector") {
            if (at !== l) {
                l = at;
                Y(at);
                A(at.value);
                if (V) {
                    q(LI.getDataAttribute(at, "trk-code"));
                    af(LI.getDataAttribute(at, "ghost-text"))
                }
                z.focus()
            }
        }
    });
    function N() {
        WebTracking.trackUserAction("glhd-srch-init")
    }
    function aj() {
        N();
        YEvent.removeListener(z, "focus", aj)
    }
    if (R.includeTypeaheadInitTracking) {
        YEvent.addListener(z, "focus", aj)
    }
    if (Z) {
        YEvent.on(Z, "change", function() {
            I();
            j(false)
        });
        I()
    }
    if (w) {
        _.each(["keydown", "paste,", "input"], function(aq) {
            YEvent.on(z, aq, ac)
        });
        ac();
        YEvent.on(w, "click", function(aq) {
            YEvent.preventDefault(aq);
            ao(R.fieldName, "");
            ac();
            z.focus()
        })
    }
}; /*
 *  THE "NAV START" | "non-js" file
 *  ----------------------------------------------------------------------------
 *  My purpose in life:
 *  -------------------
 *  I know what you're thinking, "What in the flying F#@! is this," - yeah. I'm
 *  a bit for an odd-ball; my entire purpose in life is to "open" an annonymous
 *  function for the global-nav sandbox.
 *
 *  While I am javascript, technically I'm *not* javascript - because I'm not
 *  a valid js file.  This is why I have the funky .nocheck.js extension.  There's
 *  no way I can EVER pass JSHint.  I also am equally destructive without my
 *  navend counter-part.
 *
 *  I'm included by:              - SCDS remote-nav concat group within remote-nav fizzy embed
 *
 *  File PRE-CONDITIONS:          - SCDS changes to allow .nocheck.js files must be in place.
 *                                - must be the VERY FIRST file called in the sandbox concat group
 *
 *  File POST-CONDITIONS:
 *
 *  CAVEATS/GOTCHAS:
 */
(function () {
    function remote_nav_eval(code) {
        eval.apply(window, [code])
    }
    var remote_nav = (function() {
        function a(c) {
            this.message = c;
            this.name = "SandboxException"
        }
        var b = this;
        b.CONFIGS = {
            "SBX_JSCONTROL_PATTERN": /\bli-control\b/g,
            "SBX_JSCONTROL_TYPE": "linkedin/control",
            "SBX_INITIALIZED_CONTROL_TYPE": "text/javascript+initialized",
            "SBX_ENV_LABEL": "SANDBOX"
        };
        b.data = {
            "control_registry": [],
            "rawControlCode": [],
            "codeAlreadyEvaled": false,
            "EXCLUDED_CONTROLS": {
                "UniversalSearch": true,
                "Typeahead2": true,
                "StyledDropdown": true,
                "A11yMenu": true,
                "QuickHelp2": true,
                "kb.shortcuts": true
            }
        };
        b.debug = {
            "enabled": false,
            "setMode": function(c) {
                var d = new RegExp("debug_mode=enabled");
                if (!c) {
                    c = d.test(window.location.search)
                }
                b.debug.enabled = c
            },
            "sbx_log": function() {
                var c = b.debug;
                if (c.enabled && window.console) {
                    console.log(arguments)
                }
            }
        };
        b.events = {};
        b.helpers = {
            "_addSandboxControl": function(i, h, g) {
                b.debug.sbx_log("SANDBOX | _addSandboxControl() | started ");
                var e = document.getElementById(i), d = b.helpers, f = d._getJSControlSibling(e), c = d._checkSBXRegistry(i);
                b.debug.sbx_log("SANDBOX | _addSandboxControl | is Controls present in the registry? | ", c);
                if ((e.type !== b.CONFIGS.SBX_INITIALIZED_CONTROL_TYPE) && (!(c)) && (!b.data.EXCLUDED_CONTROLS[h])) {
                    d._addToSBXRegistry(i, h, f, g);
                    d._addCodeToEvalString(e);
                    d._changeJSControlType(e)
                } else {
                    if (b.data.EXCLUDED_CONTROLS[h]) {
                        b.debug.sbx_log("SANDBOX | _addSandboxControl  | EXCLUDED CONTROL - using LI.Controls.addControl() instead");
                        window.LI.Controls.addControl(i, h, g)
                    } else {
                        b.debug.sbx_log("SANDBOX | _addSandboxControl | CONTROL ALREADY DEFINED... IGNORING")
                    }
                }
            },
            "_addToSBXRegistry": function(g, f, d, e) {
                var c;
                b.data.control_registry.push({
                    "id": g,
                    "name": f,
                    "el": d,
                    "config": e
                });
                c = b.helpers._checkSBXRegistry(g);
                if (!c) {
                    throw new a("the control for some reason was NOT added to the registry")
                }
                return c
            },
            "_cleanSandbox": function() {
                b.data.control_registry = []
            },
            "_addCodeToEvalString": function(c) {
                if (c.nodeName.toLowerCase() !== "script") {
                    throw new a("attempting to add non-script innerHTML to the eval string")
                } else {
                    b.debug.sbx_log("SANDBOX | _addCodeToEvalString | about to push code to array");
                    b.data.rawControlCode.push(c.innerHTML.replace(/LI\.Controls\.addControl/, "window.sandboxControlInit"))
                }
            },
            "_checkSBXRegistry": function(f) {
                var d, c = b.data.control_registry, e = c.length;
                for (d = 0;
                d < e;
                d++) {
                    if (c[d].id === f) {
                        return true
                    }
                }
                return false
            },
            "_getJSControlScripts": function(h) {
                var c = h.getElementsByTagName("script"), d = c.length, f = b.helpers._addCodeToEvalString, g = b.CONFIGS.SBX_JSCONTROL_TYPE, e;
                for (e = 0;
                e < d;
                e++) {
                    if (c[e].getAttribute("type") === g) {
                        f(c[e])
                    }
                }
            },
            "_getJSControlSibling": function(d) {
                b.debug.sbx_log(d);
                var c = (d.previousElementSibling) ? d.previousElementSibling: d.previousSibling;
                if (c.nodeName.toLowerCase() !== "script"&&!(c.className.match(b.CONFIGS.SBX_JSCONTROL_PATTERN))) {
                    return c
                } else {
                    return false
                }
            },
            "_changeJSControlType": function(c) {
                c.setAttribute("type", b.CONFIGS.SBX_INITIALIZED_CONTROL_TYPE);
                c.className = "sbx-li-control"
            }
        };
        b.sandbox = {
            "initControl": function() {
                b.debug.sbx_log("SANDBOX | window.sandboxControlInit() called for the following Control script: ", arguments);
                b.helpers._addSandboxControl.apply(this, arguments)
            },
            "oldLI": window.LI,
            "LI": {
                "isSandboxed": true,
                "assign": function(f, h) {
                    var e = b.sandbox.LI;
                    for (var d = 0, g = f.split("."), c = g.length;
                    d < c;
                    d++) {
                        if (!e[g[d]]) {
                            e[g[d]] = (d + 1 === c && h) ? h : {};
                            e = e[g[d]]
                        }
                    }
                    return e
                },
                "define": function(c) {
                    b.sandbox.LI.assign(c, {})
                },
                "sandboxFromWindow": function(d, c) {
                    b.sandbox.LI.assign(c, d)
                }
            }
        };
        b.deploy = {
            "executeSandbox": function(h) {
                var e = h, d = (typeof e).toLowerCase(), g = null;
                b.debug.setMode();
                if (d === "object") {
                    if (e.containerIDs) {
                        for (var f = 0, c = e.containerIDs.length;
                        f < c;
                        f++) {
                            g = document.getElementById(e.containerIDs[f]);
                            if (g) {
                                b.helpers._getJSControlScripts(g)
                            } else {
                                b.debug.sbx_log("SANDBOX | WARNING: The DOM element or ID", e, " was not found - ignoring")
                            }
                        }
                    }
                } else {
                    if (d === "string") {
                        g = document.getElementById(e);
                        if (g) {
                            b.helpers._getJSControlScripts(g)
                        } else {
                            b.debug.sbx_log("SANDBOX | WARNING: The DOM element or ID", e, " was not found - ignoring")
                        }
                    }
                }
                b.debug.sbx_log("SANDBOX | evaling code in executeSandbox()");
                b.data.rawControlCode.push("remote_nav.debug.sbx_log('SANDBOX | LI OBJECT IN EVAL IS: ', LI )");
                if (!b.data.codeAlreadyEvaled) {
                    var j = b.data.rawControlCode.join(";");
                    b.debug.sbx_log(j);
                    b.deploy.injectOrEval(j)
                }
            },
            "injectOrEval": function(d) {
                var c = document.getElementsByTagName("head")[0], f = document.createElement("script"), e = false;
                try {
                    f.text = d
                } catch (h) {
                    b.debug.sbx_log("SANDBOX | injectOrEval() | .text not supported,... trying .innerHTML");
                    try {
                        f.innerHTML = d
                    } catch (i) {
                        b.debug.sbx_log("SANDBOX | injectOrEval() | cannot use .innerHTML on the script Element, and now the script tag is EMPTY");
                        e = true
                    }
                }
                if (!e) {
                    try {
                        c.appendChild(f);
                        b.debug.sbx_log("SANDBOX | injectOrEval() | SCRIPT TAG INJECTION FINISHED.")
                    } catch (g) {
                        b.debug.sbx_log("SANDBOX | injectOrEval() | unable to append script tag to head - falling back on eval()");
                        e = true
                    }
                }
                if (e) {
                    b.debug.sbx_log("SANDBOX | unjectOrEval() | unable to either append the tag or it's empty, using eval()");
                    remote_nav_eval(d);
                    b.debug.sbx_log("SANDBOX | injectOrEval() | CODE EVAL() [FALLBACK]  FINISHED.")
                }
                b.data.codeAlreadyEvaled = true
            },
            "initSandboxControls": function() {
                b.debug.sbx_log("SANDBOX | initSandboxControls() | function called.");
                var f = b.data.control_registry.length, e = 0, d = null;
                while (f--) {
                    var g = b.data.control_registry[e++];
                    if (g&&!g.sbx_isInitialized) {
                        b.debug.sbx_log("SANDBOX | initSandBoxControls :" + g.name);
                        if (!(b.sandbox.LI[g.name])) {
                            b.debug.sbx_log("SANDBOX | JSControl not in sandbox -> punching out to GLOBAL JSControl.");
                            d = window.LI
                        } else {
                            b.debug.sbx_log("SANDBOX | Presence of faceded JSControl: " + typeof LI[g.name]);
                            d = b.sandbox.LI
                        }
                        if (d[g.name]) {
                            try {
                                new d[g.name](g.el, g.config);
                                g.sbx_isInitialized = true
                            } catch (c) {
                                b.debug.sbx_log("SANDBOX | We gots problems - ", c)
                            }
                        } else {
                            b.debug.sbx_log("SANDBOX | WARNING | This Control", g, " did not initialize.")
                        }
                    }
                }
            }
        };
        b.public_API = {
            "initializeControls": b.deploy.initSandboxControls,
            "setUp": b.deploy.executeSandbox,
            "sandbox": b.sandbox,
            "debug": b.debug
        };
        if (window.LI_JS_TEST) {
            b.public_API._test = {
                "config": b.config,
                "data": b.data,
                "helpers": b.helpers,
                "deploy": b.deploy
            }
        }
        return b.public_API
    }()), LI = remote_nav.sandbox.LI;
    window.sandboxControlInit = remote_nav.sandbox.initControl;
    window.remote_nav = remote_nav;
    window.sandboxedLI = LI;
    LI.sandboxFromWindow(window.LI.Events, "Events");
    LI.sandboxFromWindow(window.LI.i18n, "i18n");
    LI.sandboxFromWindow(window.LI.show, "show");
    LI.sandboxFromWindow(window.LI.hide, "hide");
    LI.sandboxFromWindow(window.LI.Controls, "Controls");
    LI.sandboxFromWindow(window.LI.htmlEncode, "htmlEncode");
    LI.sandboxFromWindow(window.LI.domify, "domify");
    LI.sandboxFromWindow(window.LI.getDataAttribute, "getDataAttribute");
    LI.sandboxFromWindow(window.LI.asyncRequest, "asyncRequest");
    LI.sandboxFromWindow(window.LI.isFullPage, "isFullPage");
    LI.sandboxFromWindow(window.LI.htmlUnencode, "htmlUnencode");
    LI.sandboxFromWindow(window.LI.log, "log");
    LI.sandboxFromWindow(window.LI.BaseControl, "BaseControl");
    LI.sandboxFromWindow(window.LI.Lego, "Lego");
    (function() {
        remote_nav.setUp({
            "containerIDs": ["a11y-menu", "header"]
        });
        remote_nav.initializeControls();
        remote_nav.debug.sbx_log("REMOTE NAV SANBOX DONE")
    }());
    /*  THE "NAV END" | "no js" file
     *  ----------------------------------------------------------------------------
     *  My purpose in life:
     *  --------------------------
     *  I finish the job of navstart.nocheck.js - closing the anonymous function
     *  scope for the sandbox.  Like navstart.nocheck.js, I'm also not technically
     *  valid javascript, and therefore won't pass JSHint.  We both exist, however,
     *  so that logic modifications to SCDS do not have to be made.
     *
     *  I'm included by:                - remote_nav SCDS concat group
     *
     *  I'm styled by:                  - N/A; JS plumbing/infrastructure
     *
     *  File PRE-CONDITIONS:
     *  File POST-CONDITIONS:
     *  CAVEATS/GOTCHAS:
     */
}());
