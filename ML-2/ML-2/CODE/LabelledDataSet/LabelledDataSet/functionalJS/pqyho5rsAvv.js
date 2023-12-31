/*!CK:1897513488!*/
/*1415784552,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["a+xQS"]);
}

__d("BrowseFacebarHighlighter", ["copyProperties", "CSS", "csx", "NodeHighlighter"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = {};
    g(k, j, {
        getHighlightCandidates: function() {
            return ["._53ad"];
        },
        isDiscardNode: function(l) {
            return h.hasClass(l, 'DefaultText');
        },
        createSegmentedRegex: function(l) {
            l = this.escapeAndAddBidirectionalCharsToTokens(l);
            return '(^|\\s|\\b)(' + l.join('|') + ')';
        }
    });
    e.exports = k;
}, null);
__d("getElementChildren", ["toArray", "isElementNode"], function(a, b, c, d, e, f, g, h) {
    function i(j) {
        return g(j.children || j.childNodes).filter(h);
    }
    e.exports = i;
}, null);
__d("TypeaheadFacepileX.react", ["React", "joinClasses"], function(a, b, c, d, e, f, g, h) {
    var i = g.createClass({
        displayName: "TypeaheadFacepile",
        renderPic: function(j, k) {
            var l = ("url(" + this.props.photos[j] + ")");
            return (g.createElement("span", {
                className: h('splitpic', k),
                key: j,
                style: {
                    backgroundImage: l
                }
            }));
        },
        renderPics: function() {
            var j = this.props.size;
            if (j >= 3) {
                return [this.renderPic(0, 'leftpic'), this.renderPic(1, 'toppic'), this.renderPic(2, 'bottompic')];
            } else 
                return [this.renderPic(0, 'leftpic'), this.renderPic(1)];
        },
        render: function() {
            return (g.createElement("span", g.__spread({}, this.props, {
                className: h(this.props.className, "splitpics clearfix")
            }), this.renderPics()));
        }
    });
    e.exports = i;
}, null);
__d("FacebarSemanticQuery", ["CurrentUser", "URI", "copyProperties"], function(a, b, c, d, e, f, g, h, i) {
    var j = 'str', k = /\*[\w\-]+\(/g;
    function l(v) {
        var w = {
            me: g.getID()
        };
        return i(w, Array.isArray(v.semantic_map) ? {} : v.semantic_map);
    }
    function m(v, w) {
        var x = l(v);
        if (typeof x[w] !== 'undefined')
            return String(x[w]);
        return w;
    }
    function n(v) {
        return new h("/profile.php").addQueryData({
            id: v
        });
    }
    function o(v, w) {
        var x = [w], y = [], z = v.browse_functions, aa = v.search_path;
        while (x.length > 0) {
            var ba = x.pop();
            if (!r(ba)) {
                y.push(ba);
                continue;
            }
            var ca = ba.substring(0, ba.indexOf('(')), da = ca, ea = s(ba);
            if (!z[ca]) {
                y = [];
                break;
            }
            var fa = z[ca].minNumParams, ga = z[ca].maxNumParams;
            if (x.length > 0)
                if (z[ca].numParamsUnbounded) {
                    if (y.length > 0)
                        ca += '-' + ea.length;
                } else if ((ea.length != 1 && ea.length > fa) || (ea.length === 0 && fa != ga))
                    ca += '-' + ea.length;
            x.push(ca);
            for (var ha = 0; ha < ea.length; ha++) {
                if (ea[ha].length === 0)
                    continue;
                if (z[da].allowsFreeText) {
                    x.push(j + '/' + encodeURIComponent(encodeURIComponent(ea[ha])));
                } else 
                    x.push(ea[ha]);
            }
        }
        return h(aa + y.join('/'));
    }
    function p(v) {
        return v.replace(/['"\[\]]/g, '');
    }
    function q(v, w) {
        var x = JSON.parse(w), y = [];
        if (x.length > 0)
            y = [x[0]];
        var z = [], aa = v.browse_functions, ba = v.search_path;
        while (y.length > 0) {
            var ca = y.pop();
            if (typeof(ca) !== 'object') {
                z.push(p(ca));
                continue;
            }
            var da = Object.keys(ca)[0], ea = da, fa = ca[da];
            if (!aa[da]) {
                z = [];
                break;
            }
            var ga = aa[da].minNumParams, ha = aa[da].maxNumParams;
            if (y.length > 0)
                if (aa[da].numParamsUnbounded) {
                    if (z.length > 0)
                        da += '-' + fa.length;
                } else if ((fa.length != 1 && fa.length > ga) || (fa.length === 0 && ga != ha))
                    da += '-' + fa.length;
            y.push(da);
            for (var ia = 0; ia < fa.length; ia++) {
                if (fa[ia].length === 0)
                    continue;
                if (aa[ea].allowsFreeText) {
                    y.push(j + '/' + encodeURIComponent(fa[ia]));
                } else 
                    y.push(fa[ia]);
            }
        }
        return h(ba + z.join('/'));
    }
    function r(v) {
        return (/^[a-z\-]+\(.*\)$/).test(v);
    }
    function s(v) {
        if (!r(v) && v.indexOf('param_') !== 0)
            return [v];
        var w = v.substring(v.indexOf('(') + 1, v.length - 1);
        if (w.length === 0)
            return [];
        return t(w);
    }
    function t(v) {
        var w = [], x = 0, y = 0;
        for (var z = 0; z < v.length; ++z)
            if (v[z] == ',' && y === 0) {
                w.push(v.substring(x, z));
                x = z + 1;
            } else if (v[z] == '(') {
                y++;
            } else if (v[z] == ')')
                y--;
        w.push(v.substring(x, v.length));
        return w;
    }
    function u(v, w, x) {
        "use strict";
        this.facebarConfig = v;
        this.unmapped = (w || "").trim();
        this.mapped = m(v, this.unmapped);
        this.position = null;
        this.$FacebarSemanticQuery0 = typeof x !== 'undefined' ? x : false;
    }
    u.prototype.isEntity = function() {
        "use strict";
        return (/^\d+$/).test(this.mapped);
    };
    u.prototype.isShortcut = function() {
        "use strict";
        return this.mapped.indexOf('shortcut(') === 0;
    };
    u.prototype.isImplemented = function() {
        "use strict";
        return this.mapped&&!this.mapped.match(k);
    };
    u.prototype.isSemanticForest = function() {
        "use strict";
        return this.$FacebarSemanticQuery0;
    };
    u.prototype.getUnimplemented = function() {
        "use strict";
        return (this.mapped.match(k) || []).map(function(v) {
            return v.substr(1, v.length - 2);
        });
    };
    u.prototype.getURI = function() {
        "use strict";
        if (this.isEntity()) {
            return n(this.mapped);
        } else if (this.isShortcut()) {
            return new h(this.mapped.substr(9, this.mapped.length - 10));
        } else if (this.isSemanticForest()) {
            return q(this.facebarConfig, this.unmapped);
        } else 
            return o(this.facebarConfig, this.unmapped);
    };
    e.exports = u;
}, null);
__d("FacebarURI", ["FacebarJSConstants", "FacebarSemanticQuery", "URI", "WWWBase"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = {
        event: {
            ref: g.eventLinkRef
        },
        user: {
            fref: 'ts'
        }
    }, l = {
        getSearchRawPrefix: function() {
            return 'search';
        },
        getSearchPath: function() {
            return '/' + this.getSearchRawPrefix() + '/';
        },
        getURI: function(m, n) {
            var o = null, p=!n.song&&!n.isExtendedResult && n.path;
            if (p) {
                o = new i(p);
                if (n.type in k)
                    o.addQueryData(k[n.type]);
            } else {
                var q = new h(m, n.semantic);
                if (q && q.isImplemented())
                    o = q.getURI();
            }
            return o && l.getQualifiedURI(o);
        },
        getQualifiedURI: function(m) {
            var n = new i(m);
            if (!n.getDomain()) {
                var o = i(j.uri);
                n.setProtocol(o.getProtocol()).setDomain(o.getDomain()).setPort(o.getPort());
            }
            return n;
        }
    };
    e.exports = l;
}, null);
__d("FacebarKeywordSearchUtils", ["FacebarURI", "FacebarStructuredText", "KeywordsSearchResultConfig", "URI", "startsWith"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = function(n) {
        var o = 0;
        while (o < n.length)
            if (n[o].exactMatchKeyword) {
                n.splice(o, 1);
            } else 
                ++o;
    }, m = {
        addExactMatch: function(n, o, p) {
            if (!o.length)
                return;
            var q, r;
            for (var s = 0, t = o.length; s < t; s++) {
                r = o[s];
                if (r.type === 'grammar')
                    continue;
                q = true;
                break;
            }
            if (!q)
                return;
            var u = this.getExactMatchKeywordResult(n);
            if (!u)
                return;
            var v = Math.min(o.length, p), w = v;
            for (s = 0; s < v; s++) {
                r = o[s];
                if (r.exactMatchKeyword)
                    return;
                if (r.cost > i.default_cost)--w;
                if (r.type !== i.result_type)
                    continue;
                u.backendCost = r.cost + i.exact_match_cost_delta_from_best;
                u.cost = r.backendCost;
                l(o);
                o.splice(s, 0, u);
                return;
            }
            l(o);
            o.splice(Math.min(Math.min(v, p - 1), w), 0, u);
        },
        getExactMatchKeywordResult: function(n) {
            if (!n || n.is_empty ||!n.raw_text)
                return;
            var o = n.raw_text.toLowerCase().replace(/\s{2,}/g, ' ').trim(), p = i.query_prefix_blacklist;
            for (var q = 0; q < p.length; q++)
                if (k(o, p[q]))
                    return;
            var r = this.makeFacebarEntry(o);
            return this._makeFacebarResult(r, n.cache_id.length);
        },
        makeFacebarEntry: function(n) {
            var o = null, p = null;
            if (i.gsv2_results_page) {
                var q = encodeURIComponent(encodeURIComponent(n));
                p = 'str/' + q + '/' + i.gsv2_browse_edge;
                o = g.getQualifiedURI(j('/search/' + p));
            } else {
                o = g.getQualifiedURI(j(i.results_page_url).addQueryData('q', n));
                p = i.shortcut + '(' + o.toString() + ')';
            }
            return {
                semantic: p,
                text: n,
                type: i.result_type,
                resultsSetType: i.result_set_type,
                uid: i.uid_prefix + n,
                iconClass: i.icon_class,
                uri: o,
                structure: new h()
            };
        },
        _makeFacebarResult: function(n, o) {
            var p = {
                semantic: n.semantic,
                structure: [{
                    type: 'grammar',
                    text: n.text,
                    uid: n.semantic
                }
                ],
                type: n.type,
                resultsSetType: n.resultsSetType,
                cost: i.default_cost,
                cache_id_length: o,
                parse: {
                    display: [{
                        type: 'grammar',
                        uid: i.uid_prefix + n.text
                    }
                    ],
                    remTokens: [],
                    suffix: ''
                },
                iconClass: n.iconClass,
                exactMatchKeyword: true
            };
            p.tuid = JSON.stringify({
                semantic: p.semantic,
                structure: p.structure
            });
            return p;
        }
    };
    e.exports = m;
}, null);
__d("FacebarResultStore", ["copyProperties", "concatMap", "FacebarGlobalOptions", "FacebarJSConstants", "FacebarKeywordSearchUtils", "FacebarResultStoreUtils", "FacebarSemanticUtils", "FacebarStructuredText", "KeywordsSearchResultConfig", "TokenizeUtil", "UnicodeMatch"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    function r(s, t, u, v) {
        "use strict";
        this.facebarConfig = s;
        this.facebarConfig.grammar_stop_words_penalty = this.facebarConfig.grammar_stop_words_penalty || 2;
        this.facebarConfig.grammar_stop_words = this.facebarConfig.grammar_stop_words || {};
        this.facebarConfig.options = v;
        this.tokenize = t;
        this.getEntry = u;
        this.typeaheadTypeMap = this.facebarConfig.mapped_types;
        this.facebarConfig.typeahead_types.forEach(function(w) {
            this.typeaheadTypeMap[w] = w;
        }, this);
        this.unicodeMatch = new q({
            prefix_hangul_conjoining_jamo: true
        });
        this.resetCaches();
    }
    r.prototype.transformStructured = function(s) {
        "use strict";
        var t = [], u = [], v = '', w = '';
        s.forEach(function(z, aa) {
            if (z.isType('text')) {
                v += z.getText();
                w = (w == null) ? null : w + z.getText();
            } else {
                var ba = v.match(/\"/g);
                if (ba && ba.length%2)
                    v = v.replace(/\s+$/, '') + '"';
                if (v.length) {
                    Array.prototype.push.apply(t, this.tokenize(v));
                    u.push(v);
                    v = '';
                }
                t.push(z.toStruct());
                u.push({
                    uid: String(z.getUID()),
                    type: this._getFBObjectType(z.getTypePart(1)),
                    text: z.getText()
                });
                w = null;
            }
        }, this);
        if (v.length) {
            if (v[v.length - 1] == '\'')
                v = v.substr(0, v.length - 1);
            Array.prototype.push.apply(t, this.tokenize(v));
            u.push(v);
            if (v[v.length - 1] == ' ')
                t.push('');
        }
        var x = JSON.stringify(u), y = x.replace(/\]$/, '').replace(/\"$/, '');
        y = y.replace(/\s{2,}/g, ' ');
        return {
            tokens: t,
            text_form: x,
            is_empty: !!x.match(/^\[(\"\s*\")?\]$/),
            raw_text: w,
            cache_id: y
        };
    };
    r.prototype.resetCaches = function() {
        "use strict";
        this.bootstrapCache = {};
        this.queryCache = {
            '': {
                tokens: [],
                results: []
            }
        };
    };
    r.prototype.setNullState = function(s) {
        "use strict";
        this.facebarConfig.null_state = s.map(this._extractStructure, this);
    };
    r.prototype.addEntryToNullState = function(s) {
        "use strict";
        if (this.facebarConfig.null_state) {
            var t = this.facebarConfig.entity_cost + s.grammar_costs['{' + s.type + '}'], u = l.processEntityResult(s.type, s.uid, s.text, t);
            this.facebarConfig.null_state.unshift(u);
        }
    };
    r.prototype.setSortFunction = function(s) {
        "use strict";
        this._sortFunction = s;
    };
    r.prototype.addBootstrap = function(s) {
        "use strict";
        var t = this.bootstrapCache;
        s.forEach(function(u) {
            var v = this.getEntry(u);
            v.bootstrapped = true;
            var w = this.tokenize(v.textToIndex, true);
            if (v.tokens)
                Array.prototype.push.apply(w, v.tokens.split(' '));
            Array.prototype.push.apply(w, this.getExtraTokensToIndex(v));
            w.forEach(function(x) {
                if (!t.hasOwnProperty(x))
                    t[x] = {};
                t[x][u] = true;
            });
        }, this);
    };
    r.prototype.getExtraTokensToIndex = function(s) {
        "use strict";
        var t = [];
        if (s.alias != null)
            t.push(s.alias.toLowerCase());
        return t;
    };
    r.prototype.addNullStateToQueryCache = function(s, t) {
        "use strict";
        this.saveResults(this.facebarConfig.null_state, s, true);
        if (i.includeInitialTypeNamedX)
            this.saveResults(t, s, true);
    };
    r.prototype.extendResult = function(s, t) {
        "use strict";
        var u = s.cache_id.substr(t.cache_id_length);
        if ((u.indexOf("\"") >= 0 || t.tokens.length === 0)&&!t.isTypeNamedXBootstrap)
            return null;
        var v;
        if (!!t.isTypeNamedXBootstrap) {
            if (s.raw_text !== null) {
                v = t.ext_text + u;
            } else if (s.tokens.length !== 0 && s.tokens[0].text) {
                v = s.tokens[0].text;
            } else 
                return null;
        } else if (t.tokens[t.tokens.length - 1].length !== 0) {
            v = t.ext_text + u;
        } else 
            v = t.ext_text + " " + u;
        if (v.length === 0)
            return null;
        t.ext_node.text = v;
        t.parse.entTokens = [v];
        t.parse.suffix = "";
        this._extractStructure(t);
        if (!this._punctRegexp)
            this._punctRegexp = new RegExp(p.getPunctuation(), 'g');
        t.semantic = t.ext_semantic.replace('(ext_string)', '(' + v.replace(this._punctRegexp, "") + ')');
        t.isExtendedResult = true;
        return t;
    };
    r.prototype.getResults = function(s, t) {
        "use strict";
        if (s.tokens.length === 0 || (s.tokens.length == 1 && s.tokens[0] === ''))
            return {
                results: this.facebarConfig.null_state || [],
                null_state: true
            };
        var u = this._getBestQueryCache(s.cache_id), v = u.results, w = {}, x = this._getBootstrapMatchByType(s.tokens, w), y = this._addMatchingBootstrapResults(s, x[0] || {});
        if (i.limitBootstrapResult)
            y = y.slice(0, i.limitBootstrapResultNum);
        Array.prototype.push.apply(y, h(this._getResultsFromCache.bind(this, x, s), v));
        var z = {}, aa = [], ba = false, ca = 0;
        y.sort(this._sortFunction);
        if (!i.graphSearchV2 && i.keywordSearchEnabled)
            k.addExactMatch(s, y, t);
        y.forEach(function(da) {
            var ea = n.fromStruct(da.structure);
            if (ea.hasType('blank')) {
                aa.push(da);
                return;
            }
            da.semantic = da.semantic.toLowerCase();
            if (!da.termMatches)
                da.termMatches = w[da.semantic];
            var fa = r.getUniqueSemantic(da.semantic), ga = r.getUniqueSemantic(da.alternateSemantic);
            if (!fa)
                return;
            var ha = z[fa] || (ga && z[ga]);
            if (ha) {
                if (da.isJSBootstrapMatch) {
                    ha.isJSBootstrapMatch = true;
                    ha.bootstrapCost = da.bootstrapCost;
                } else if (ha.isJSBootstrapMatch && da.backendCost !== undefined && ha.backendCost === undefined)
                    ha.backendCost = da.backendCost;
                if (!!da.tags)
                    g(ha.tags, da.tags);
                return;
            }
            if (ba && da.blankFilled)
                return;
            if (da.type.indexOf('browse_type') >= 0) {
                ca += 1;
                if (this.facebarConfig.maxGrammarResults !== undefined && ca > this.facebarConfig.maxGrammarResults)
                    return;
            }
            ba = ba||!!da.blankFilled;
            z[fa] = da;
            if (ga)
                z[ga] = da;
            aa.push(da);
        }, this);
        return {
            results: aa,
            webSuggOnTop: u.webSuggOnTop,
            webSuggLimit: u.webSuggLimit,
            webSuggLimitSeeMore: u.webSuggLimitSeeMore
        };
    };
    r.prototype.saveResults = function(s, t, u, v, w) {
        "use strict";
        s = s.map(this._processBackendResult, this);
        var x = [], y = {}, z = {};
        s.forEach(function(ba) {
            z[ba.semantic] = true;
            ba.parse && ba.parse.disambiguation && ba.parse.disambiguation.forEach(function(ca) {
                var da = m.semanticForestConversion(ca);
                y[da] = true;
            });
        });
        var aa = this._getBestQueryCache(t.cache_id);
        aa.results.forEach(function(ba) {
            if (ba.type === 'websuggestion')
                return;
            if (ba.exactMatchKeyword)
                return;
            if (ba.isExtendedResult)
                return;
            if (ba.semantic in y)
                return;
            var ca = this._getDifferenceArrayTokens(ba.tokens, t.tokens), da = this._getNumTokensMatching(ca, ba);
            da = this._tryMatchingFinalInsertedEntity(ca, da, ba);
            if (da > 0 && da == ca.length) {
                ba.cacheOnlyResult=!z[ba.semantic];
                x.push(ba);
            }
        }, this);
        s.forEach(function(ba) {
            ba.tokens = t.tokens;
            ba.cache_id_length = t.cache_id.length;
            if (!!ba.isTypeNamedXBootstrap)++ba.cache_id_length;
            x.push(ba);
        }, this);
        if (w)
            Array.prototype.push.apply(x, w);
        if (this.queryCache[t.cache_id] === undefined)
            this.queryCache[t.cache_id] = {};
        g(this.queryCache[t.cache_id], {
            tokens: t.tokens,
            results: x,
            incomplete: u
        });
        g(this.queryCache[t.cache_id], v);
    };
    r.prototype.alreadyKnown = function(s) {
        "use strict";
        return !!this.queryCache[s]&&!this.queryCache[s].incomplete;
    };
    r.prototype.stripBrackets = function(s) {
        "use strict";
        return s.replace(/^[\[\{]/, '').replace(/[\]\}]$/, '');
    };
    r.prototype._extractStructure = function(s) {
        "use strict";
        function t(w, x, y) {
            return {
                type: w === 'ent:extend_string' ? 'text': w,
                text: x,
                uid: y || null
            };
        }
        function u(w, x) {
            w.split(' ').forEach(function(y) {
                if (y !== '') {
                    if (x)
                        s.chunks.push(s.structure.length);
                    s.structure.push(t('text', y));
                }
                s.structure.push(t('text', ' '));
            });
            s.structure.pop();
        }
        function v(w) {
            if (s.structure.length !== 0 || j.nonGrammarTypes[s.type])
                return w;
            return w.charAt(0).toUpperCase() + w.substr(1);
        }
        s.structure = [];
        s.chunks = [];
        s.parse.display.forEach(function(w) {
            if (typeof w === 'string') {
                u(v(w), true);
            } else if (w.type === 'ent:extend_string') {
                u(w.text, true);
            } else if (w.uid) {
                var x = this.getEntry(w.uid, w.fetchType);
                s.chunks.push(s.structure.length);
                if (x == null)
                    throw new Error('No entry found for uid \"' + w.uid + '\", type \"' + w.fetchType + '\" and piece text \"' + w.text + '\"');
                if (x.grammar_like) {
                    u(v(x.text), false);
                } else {
                    var y = w.type;
                    if (w.fetchType)
                        y += ':' + w.fetchType;
                    s.structure.push(t(y, x.text, w.uid));
                }
            } else if (w.type == 'blank') {
                s.chunks.push(s.structure.length);
                s.structure.push(t(w.type, '...'));
            }
        }, this);
        return s;
    };
    r.prototype._getDifferenceArrayTokens = function(s, t) {
        "use strict";
        if (!s.length)
            return [''].concat(t);
        var u = s.length - 1, v = s[u];
        if (v === '')
            v = s[--u];
        var w = '';
        if (typeof(v) == 'string' && u < t.length)
            w = t[u].substr(v.length);
        if (w === '' && u + 1 < t.length && t[u + 1] === '')
            return [''];
        return [w].concat(t.slice(u + 1));
    };
    r.prototype._processBackendResult = function(s) {
        "use strict";
        if (s.isTypeNamedXBootstrap && s.cache_id_length)
            return s;
        s.semantic = s.semantic.toString();
        s.backendCost = s.cost;
        this._extractStructure(s);
        if (s.type.match(/^\{.*\}$/))
            s.useExtendedIndex = true;
        if (s.alternateSemantic)
            s.alternateSemantic = s.alternateSemantic.toLowerCase().replace(/\[(\d*)\]/g, '$1');
        if (s.parse.extendable) {
            var t = null;
            s.parse.display.forEach(function(z) {
                if (z.type !== "ent:extend_string")
                    return;
                t = z;
            }, this);
            if (!t || s.semantic.match(/\[.*\]/).length !== 1) {
                s.parse.extendable = false;
            } else {
                s.ext_node = t;
                s.ext_semantic = s.semantic.replace(/\[(.*)\]/g, 'ext_string');
                s.ext_text = t.text;
            }
        }
        if (s.semantic.match(/\[\d*\]/)) {
            var u = s.parse, v = u.pos;
            if (v === undefined) {
                s.semantic = s.semantic.replace(/\[(\d*)\]/g, '$1');
            } else {
                var w = u.remTokens[u.remTokens.length - 1];
                if (u.remTokens.length && s.structure[s.chunks[w]] && s.structure[s.chunks[w]].uid) {
                    v = u.remTokens[u.remTokens.length - 1];
                    s.completed = true;
                }
                var x = s.structure[s.chunks[v]].uid;
                if (x === null) {
                    s.semantic = s.semantic.replace(/\[(\d*)\]/g, '$1');
                } else {
                    var y = new RegExp('\\[' + x + '\\]', 'g');
                    s.unsubstituted_semantic = s.semantic;
                    s.semantic = s.semantic.replace(y, x);
                    if (u && u.disambiguation && u.disambiguation.length > 0) {
                        u.disambiguation = u.disambiguation.filter(function(z) {
                            return z.indexOf('[' + x + ']')!==-1;
                        });
                        u.unsubstituted_disambiguation = u.disambiguation.splice(0);
                        u.disambiguation = u.disambiguation.map(function(z) {
                            return z.replace(y, x);
                        });
                    }
                }
            }
        }
        s.semantic = s.semantic.replace(/\[(.*)\]/g, '$1');
        s.tuid = JSON.stringify({
            semantic: s.semantic,
            structure: s.structure
        });
        return s;
    };
    r.prototype._sortFunction = function(s, t) {
        "use strict";
        return (s.cost || 0) - (t.cost || 0);
    };
    r.prototype._getResultsFromCache = function(s, t, u) {
        "use strict";
        var v = t.tokens, w = this._getDifferenceArrayTokens(u.tokens, v), x = [], y = this._getNumTokensMatching(w, u), z = this._tryMatchingFinalInsertedEntity(w, y, u);
        if (u.parse.extendable || u.isExtendedResult) {
            var aa = this.extendResult(t, u);
            if (aa)
                x.push(aa);
            if (u.isExtendedResult)
                return x;
        }
        if (z > 0 && z == w.length&&!(u.type === o.result_type && w.length === 1 && w[0] === '"'))
            x.push(u);
        return x;
    };
    r.prototype._addMatchingBootstrapResults = function(s, t) {
        "use strict";
        var u = s.tokens;
        return h(function(v) {
            var w = t[v];
            if (w === undefined)
                return [];
            var x = [];
            w.forEach(function(y) {
                var z = this.getEntry(y, v);
                if (!this._isTitleTermMatch(u, z)&&!this._isAliasMatch(s.raw_text, z))
                    return;
                var aa = (this._isExactNameMatch(u, z) || this._isAliasMatch(s.raw_text, z)) ? 0: this.facebarConfig.non_title_term_match_penalty, ba = this._isNonGrammarTermMatch(u, z), ca = z.grammar_costs['{' + v + '}'] + aa + this.facebarConfig.entity_cost + this.facebarConfig.grammar_stop_words_penalty*!ba, da = l.processEntityResult(v, y, z.text, ca);
                da.bootstrapCost = ca;
                da.isJSBootstrapMatch = true;
                x.push(da);
            }, this);
            return x;
        }.bind(this), this.facebarConfig.bootstrap_types);
    };
    r.prototype._isTitleTermMatch = function(s, t) {
        "use strict";
        var u = s[0] || {};
        if (typeof(u) == 'object')
            return false;
        var v = t.titleToIndex;
        return s.length === 1 ? this._isTokenizePrefixMatch(u, v) : p.isExactMatch(u, v);
    };
    r.prototype._isExactNameMatch = function(s, t) {
        "use strict";
        var u = s[0] || {};
        if (typeof(u) == 'object')
            return false;
        var v = t.text;
        for (var w = 0; w < s.length - 1; ++w)
            if (s[w] !== ''&&!p.isExactMatch(s[w], v))
                return false;
        return s.length > 0 && this._isTokenizePrefixMatch(s[s.length - 1], v);
    };
    r.prototype._isAliasMatch = function(s, t) {
        "use strict";
        return (t.alias != null && s != null && p.isExactMatch(t.alias, s));
    };
    r.prototype._isNonGrammarTermMatch = function(s, t) {
        "use strict";
        var u = p.parse(t.titleToIndex.toLowerCase()), v = u.tokens.filter(function(y) {
            return y !== ''&&!this.facebarConfig.grammar_stop_words[y];
        }, this);
        v = v.join(' ');
        for (var w = 0; w < s.length; ++w) {
            if (typeof(s[w]) == 'object')
                return true;
            var x = w === s.length - 1 ? this._isTokenizePrefixMatch(s[w], v): p.isQueryMatch(s[w], v);
            if (x)
                return true;
        }
        return false;
    };
    r.prototype._getBootstrapMatchByType = function(s, t) {
        "use strict";
        if (s.length === 0)
            return [];
        var u = s.map(function() {
            return {};
        }), v = (s[s.length - 1] === ''), w = {}, x, y = (v ? s.length - 1 : s.length), z = s[y - 1];
        if (y && z.uid) {
            this._pushBootstrapEntryAtPosition(u, y - 1, z.uid);
            return u;
        }
        for (var aa in this.bootstrapCache)
            if (y && this.unicodeMatch.prefixMatch(aa, z) && (!v || aa === z))
                for (x in this.bootstrapCache[aa])
                    if (!w[x]) {
                        w[x] = 1;
                        this._addMatchedTerm(x, aa, t);
                        this._pushBootstrapEntryAtPosition(u, y - 1, x);
                    }
        for (var ba = y - 2; ba >= 0; ba--) {
            if (typeof(s[ba]) == 'object')
                break;
            if (s[ba].length && s[ba][0] == '"')
                break;
            for (x in this.bootstrapCache[s[ba]]) {
                if (!w[x])
                    w[x] = 0;
                if (w[x] + ba == y - 1) {
                    ++w[x];
                    this._addMatchedTerm(x, s[ba], t);
                    this._pushBootstrapEntryAtPosition(u, ba, x);
                }
            }
        }
        return u;
    };
    r.prototype._addMatchedTerm = function(s, t, u) {
        "use strict";
        (u[s] = u[s] || []).push(t);
        return u;
    };
    r.prototype._pushBootstrapEntryAtPosition = function(s, t, u) {
        "use strict";
        var v = this.getEntry(u);
        if (!v)
            return;
        for (var w in v.grammar_costs) {
            var x = this.stripBrackets(w);
            if (s[t][x] === undefined)
                s[t][x] = [];
            s[t][x].push(u);
        }
    };
    r.prototype._getNumTokensMatching = function(s, t) {
        "use strict";
        var u = 0, v = t.parse, w = s.length, x = null, y = null;
        if (v.pos !== undefined) {
            var z = t.structure[t.chunks[v.pos]];
            if (z) {
                x = z.uid;
                y = z.type.split(':')[2];
            }
        }
        t.outputTokensUsed = [];
        t.termMatches = [];
        if (x) {
            u = this._prefixMatchEntity(s, v, x, t.outputTokensUsed, y, !!t.useExtendedIndex, t.termMatches);
            if (u === 0 || u === w)
                return u;
        } else if (v.suffix && w == 1 && v.suffix.indexOf(s[0]) === 0) {
            return w;
        } else if (v.suffix == s[0]) {
            ++u;
        } else 
            return 0;
        var aa = [];
        v.remTokens = v.remTokens || [];
        for (var ba = 0; ba < v.remTokens.length; ba++) {
            if (typeof(s[u]) != 'string' || t.chunks.length <= v.remTokens[ba] || t.structure.length <= t.chunks[v.remTokens[ba]] || t.structure[t.chunks[v.remTokens[ba]]].uid)
                break;
            var ca = t.structure[t.chunks[v.remTokens[ba]]].text;
            aa.push(ca.toLowerCase());
        }
        u = this._greedyMatchText(aa, s, u, v.remTokens, t.outputTokensUsed, t.isNullState);
        if (u == w - 1 && s[u] === '')
            return w;
        return u;
    };
    r.prototype._prefixMatchEntity = function(s, t, u, v, w, x, y) {
        "use strict";
        t.entTokens = t.entTokens || [];
        if (t.entTokens.length === 0) {
            if (s[0] !== '')
                return 0;
            if (t.possessive && s.length > 1 && s[1] == '\'s') {
                v.push([t.pos + 1]);
                return 2;
            } else 
                return 1;
        }
        var z = false, aa = this.getEntry(u, w);
        if (typeof(w) !== 'undefined' && w !== aa.fetchType)
            return 0;
        var ba = this.tokenize(x ? aa.textToIndex : aa.text, true), ca = [];
        for (var da = 0; da < s.length + t.entTokens.length - 1; da++)
            if (da < t.entTokens.length - 1) {
                ca.push(t.entTokens[da]);
            } else if (da == t.entTokens.length - 1) {
                ca.push(t.entTokens[da] + s[0]);
            } else 
                ca.push(s[da - t.entTokens.length + 1]);
        var ea =- t.entTokens.length + 1;
        for (var fa = 0; fa < ca.length; ++fa) {
            var ga = ca[fa];
            if (typeof(ga) != 'string')
                break;
            if (ga === '') {
                ea++;
                continue;
            }
            var ha = false;
            for (var ia = 0; ia < ba.length; ia++)
                if (ba[ia] == ga || (fa === ca.length - 1 && ba[ia].indexOf(ga) === 0)) {
                    if (y)
                        y.push(ba[ia]);
                        ba[ia] = '';
                        ha = true;
                        ++ea;
                        break;
                }
            if (ha)
                continue;
            if (!t.possessive || ga.length <= 2 || ga.substr(ga.length - 2) != '\'s')
                break;
            var ja = ga.substr(0, ga.length - 2);
            for (ia = 0; ia < ba.length; ia++)
                if (ba[ia] == ja) {
                    ++ea;
                    if (v)
                        z = true;
                        break;
                }
            break;
        }
        if (ea > 0) {
            if (z)
                v.push([t.pos + 1]);
            return ea;
        }
        if (v === undefined)
            return 0;
        var ka = s[0], la = ka;
        if (t.possessive && ka.length >= 2 && ka.substr(ka.length - 2) == '\'s')
            la = ka.substr(0, ka.length - 2);
        t.suffix = t.suffix || '';
        if ((s.length == 1 && t.suffix.indexOf(ka) === 0) || t.suffix == la || t.suffix == ka) {
            if (la != ka && t.suffix == la)
                v.push([t.pos + 1]);
            return 1;
        }
        return 0;
    };
    r.prototype._tryMatchingFinalInsertedEntity = function(s, t, u) {
        "use strict";
        if (!u.completed || t < 0)
            return t;
        var v = u.parse, w = v.remTokens[v.remTokens.length - 1], x = u.structure[u.chunks[w]], y = this.getEntry(x.uid, x.type), z = this.tokenize(y.text, true);
        t = this._greedyMatchText(z, s, t);
        if (t == s.length - 1 && s[t] === '')
            return s.length;
        return t;
    };
    r.prototype._greedyMatchText = function(s, t, u, v, w, x) {
        "use strict";
        for (var y = 0; y < s.length; y++) {
            var z = s[y];
            if (z == t[u]) {
                if (w !== undefined)
                    w.push(v[y]);
                ++u;
                continue;
            }
            if (u === t.length - 1 && z.indexOf(t[u]) === 0) {
                if (w !== undefined)
                    if (z == t[u]) {
                        w.push([v[y]]);
                    } else 
                        w.push([v[y], t[u].length]);
                return t.length;
            }
            if (x)
                break;
        }
        return u;
    };
    r.prototype._getBestQueryCache = function(s) {
        "use strict";
        for (var t = s.length; t >= 0; t--) {
            var u = this.queryCache[s.slice(0, t)];
            if (u)
                return u;
        }
    };
    r.prototype._getFBObjectType = function(s) {
        "use strict";
        if (this.typeaheadTypeMap[s]) {
            return this.typeaheadTypeMap[s];
        } else 
            return 'page';
    };
    r.prototype._isTokenizePrefixMatch = function(s, t) {
        "use strict";
        return p.isPrefixMatch(this.unicodeMatch.prefixMatchPrepare(s), this.unicodeMatch.prefixMatchPrepare(t));
    };
    r.EPSILON = 1e-05;
    r.getUniqueSemantic = function(s) {
        if (!s)
            return;
        var t = [], u = [], v = [];
        s = '(' + s + ')';
        var w = s, x = false;
        s.replace(/[\(\),]/g, function(y, z) {
            var aa;
            switch (y) {
            case ',':
                var ba = v.length - 1;
                aa = w.substr(v[ba], z - v[ba]);
                t[ba].push(aa);
                v[ba] = z + 1;
                break;
            case '(':
                v.push(z + 1);
                t.push([]);
                u.push(z + 1);
                break;
            case ')':
                if (v.length === 0)
                    throw s + ' is not a valid semantic string';
                var ca = v.pop();
                aa = w.substr(ca, z - ca);
                aa = decodeURI(aa.replace(/%/g, '%25').replace(/\s/g, '+').trim());
                var da = t.pop();
                da.push(aa);
                var ea = da.sort();
                for (var fa = 1; fa < ea.length; fa++)
                    if (ea[fa] == ea[fa - 1])
                        x = true;
                var ga = ea.join(',');
                w = w.substr(0, u.pop()) + ga + w.substr(z);
                break;
            }
            return y;
        });
        if (x)
            return '';
        return w.replace(/\((.*)\)/, '$1');
    };
    e.exports = r;
}, null);
__d("FacebarTimerUtils", [], function(a, b, c, d, e, f) {
    var g = {
        getTimestamp: function() {
            return Date.now();
        }
    };
    e.exports = g;
}, null);
__d("FacebarTokenizer", ["TokenizeUtil"], function(a, b, c, d, e, f, g) {
    var h = "[^\"]", i = ["\\s's", "'s", "\"" + h + "*\"?"], j = [[/\s+$/, ''], [/\"\s+/, '"'], [/\s+\"/, '"'], [/\"\"/, ''], [/^\"$/, ''], [/\s+/, ' ']], k = {
        tokenize: function(l, m) {
            var n = [], o = 0;
            l = l.replace(/\s/g, ' ').toLowerCase();
            l.replace(new RegExp(i.join('|'), 'g'), function(q, r) {
                if (r > o) {
                    var s = l.substr(o, r - o);
                    Array.prototype.push.apply(n, g.parse(s).tokens.slice(0));
                }
                var t = q;
                for (var u = 0; u < j.length; u++) {
                    var v = j[u];
                    t = t.replace(v[0], v[1]);
                }
                if (n.length && t == '\'s') {
                    n[n.length - 1] += t;
                } else if (t !== '')
                    n.push(t);
                if (m)
                    Array.prototype.push.apply(n, g.parse(q).tokens);
                o = r + q.length;
            });
            if (o < l.length) {
                var p = l.substr(o, l.length - o);
                Array.prototype.push.apply(n, g.parse(p).tokens.slice(0));
            }
            return n;
        }
    };
    e.exports = k;
}, null);
__d("FacebarTypeaheadTypeNamedX", [], function(a, b, c, d, e, f) {
    var g = {
        browse_type_user: 'user',
        browse_type_page: 'page',
        browse_type_place: 'place',
        browse_type_group: 'group',
        browse_type_application: 'app'
    }, h = 1, i = 2;
    function j() {
        "use strict";
    }
    j.addTypeNamedX = function(k, l, m, n) {
        "use strict";
        var o = new j(), p = [], q = [];
        k.forEach(function(v) {
            delete v.tags.hiddenSeeMore;
            if (v.isSeeMore) {
                p.push(v);
            } else 
                q.push(v);
        });
        if (!n.showTypeNamedX) {
            p.forEach(function(v) {
                v.tags.hiddenSeeMore = true;
            });
            return q;
        }
        var r = o.buildTypeNamedXBuckets(q, p, m, n), s = r[0], t = r[1];
        s.forEach(function(v) {
            v.tags.displayedSeeMore = true;
        });
        var u = o.replaceResults(q, l, s);
        Array.prototype.push.apply(u, t);
        u.forEach(function(v) {
            v.tags.hiddenSeeMore = true;
        });
        return q;
    };
    j.prototype.buildTypeNamedXBuckets = function(k, l, m, n) {
        "use strict";
        var o = {};
        n = n || {};
        k.forEach(function(s, t) {
            var u = s.render_type || s.type;
            if (o[u] === undefined)
                o[u] = {
                    index: t,
                    matchCount: 0
                };
            if (!n.alwaysDisplayTypeNamedX && s.text.toLowerCase().indexOf(m.toLowerCase()) < 0)
                return;
            o[u].matchCount++;
        });
        var p = [], q = [];
        l.forEach(function(s) {
            var t = g[s.results_set_type];
            if (o[t] !== undefined && o[t].matchCount >= h) {
                p.push([s, o[t].index]);
            } else 
                q.push(s);
        });
        p.sort(function(s, t) {
            return s[1] - t[1];
        });
        var r = p.map(function(s) {
            return s[0];
        });
        Array.prototype.push.apply(q, r.slice(i));
        r.length = Math.min(r.length, i);
        return [r, q];
    };
    j.prototype.replaceResults = function(k, l, m) {
        "use strict";
        var n = [], o = Math.min(0, k.length - l) + m.length;
        for (var p = 0; p < o; ++p) {
            var q =- 1;
            for (var r = 0; r < Math.min(l - p, k.length); ++r) {
                var s = k[r];
                if (!s.exactMatchKeyword && s.type !== 'websuggestion')
                    q = r;
            }
            if (q >= 0) {
                n.push(k[q]);
                k.splice(q, 1);
            }
        }
        Array.prototype.unshift.apply(k, m);
        return n;
    };
    e.exports = j;
}, null);
__d("FacebarTypeaheadL2Terms", ["FacebarJSConstants"], function(a, b, c, d, e, f, g) {
    var h = 3, i = {
        addL2Terms: function(j, k, l, m) {
            if (!m.suggestBackendL2Terms)
                return j;
            var n = [], o = [];
            j.forEach(function(q) {
                if (q.exactMatchKeyword) {
                    q.tags.l2_suggestion = true;
                    n.push(q);
                } else if (q.isKeywordL2) {
                    q.tags.l2_suggestion = true;
                    q.type = 'l2suggestion';
                    n.push(q);
                } else if (q.type !== 'keywords')
                    o.push(q);
            });
            var p = 0;
            return o.map(function(q) {
                if (g.entityTypes[q.type])
                    if (p < h) {
                        p++;
                    } else if (n.length)
                        return n.pop();
                return q;
            });
        }
    };
    e.exports = i;
}, null);
__d("XFeedSearchUpdateReadStateControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/search\/feed_search_read_state\/update\/", {});
}, null);
__d("FacebarDataSource", ["Arbiter", "AsyncRequest", "BingScalingCommon", "FacebarGlobalOptions", "FacebarJSConstants", "FacebarResultStore", "FacebarResultStoreUtils", "FacebarStructuredText", "FacebarTimerUtils", "FacebarSemanticUtils", "FacebarTokenizer", "FacebarTypeaheadTypeNamedX", "FacebarTypeNamedXBootstrap", "FacebarTypeaheadL2Terms", "FacebarTypeNamedXTokenOptions", "FacebarURI", "ResultsBucketizer", "ResultsBucketizerConfig", "SearchDataSource", "Vector", "ViewportBounds", "copyProperties", "throttle", "invariant", "setTimeoutAcrossTransitions", "XFeedSearchUpdateReadStateControllerURIBuilder"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa) {
    for (var ga in y)
        if (y.hasOwnProperty(ga))
            ia[ga] = y[ga];
    var ha = y === null ? null: y.prototype;
    ia.prototype = Object.create(ha);
    ia.prototype.constructor = ia;
    ia.__superConstructor__ = y;
    function ia(ja) {
        "use strict";
        y.call(this, ja);
        this.filterOutWebSuggestion = true;
        this._fetched_null_state = null;
        this._initialQueryData = null;
        this._curQueryId =- 1;
        this._maxRemoteQueryId =- 1;
        this._single_state = true;
        this._waitingQueries = 0;
        this.mixGrammarAndEntity = ja.mixGrammarAndEntity !== undefined ? ja.mixGrammarAndEntity : true;
        this.grammarVersion = ja.grammarVersion || '';
        if (!ja.grammarOptions)
            ja.grammarOptions = {};
        this.recordingRoute = ja.grammarOptions.recordingRoute || 'banzai_vital';
        this._maxGrammarResults = ja.grammarOptions.maxGrammarResults;
        this.nullStateEndpoint = ja.nullStateEndpoint || '/ajax/browse/null_state.php';
        this.setNullStateData(ja.nullStateData || {}, true);
        this._minWebSugg = ja.minWebSugg || 1;
        this._minQueryLength = ja.minQueryLength||-1;
        this.allowWebSuggOnTop = ja.allowWebSuggOnTop || false;
        this._maxWebSuggToCountFetchMore = ja.maxWebSuggToCountFetchMore || 0;
        this._fixProcessLean = ja.grammarOptions.fixProcessLean || false;
        this.throttleExecuteQuery();
        this.throttleSendRemoteQuery();
        this.throttleRenderResults();
        this.resultStoreOptions = ja.grammarOptions || {};
        this.resultStoreOptions.useNewExactNameMatch = (ja.grammarOptions.useNewExactNameMatch === "true");
        this.defaultQuery = null;
        this._bypassBucketizer = false;
        this._resultsBucketizer = new w(x.rules, function(ka, la) {
            switch (la) {
            case 'isSeeMore':
                return ka.isSeeMore;
            case 'objectType':
                return ka.type;
            case 'resultSetType':
                return ka.results_set_type;
            case 'renderType':
                return ka.render_type || ka.type;
            case 'cacheOnlyResult':
                return ka.cacheOnlyResult;
            case 'closeEntity':
                return ka.bootstrapped || (!!ka.tags ? ka.tags[la] : undefined);
            default:
                return !!ka.tags ? ka.tags[la] : undefined;
            }
        });
        this.fetchNullState();
        this.updateReadState();
        this.initWithConfig(j.grammarConfig);
    }
    ia.prototype.initWithConfig = function(ja) {
        "use strict";
        this.facebarConfig = ja;
        this.createResultStore();
        this.blockees = {};
        if (this._fetched_null_state) {
            this.setNullState(this._fetched_null_state);
            this._fetched_null_state = null;
        }
    };
    ia.prototype.throttleExecuteQuery = function() {
        "use strict";
        var ja = j.executeQueryThrottleTime;
        this.executeQueryThrottled = ca.withBlocking(this.executeQuery, ja, this);
    };
    ia.prototype.throttleSendRemoteQuery = function() {
        "use strict";
        var ja = j.sendRemoteQueryThrottleTime;
        if (ja === 0) {
            this.sendRemoteQueryThrottled = this.sendRemoteQuery;
        } else if (j.lazyThrottleRemoteQuery) {
            var ka = Date.now(), la = j.enableSendRemoteQueryDelay, ma = j.sendRemoteQueryDelayTime;
            this.sendRemoteQueryThrottled = function() {
                for (var na = [], oa = 0, pa = arguments.length; oa < pa; oa++)
                    na.push(arguments[oa]);
                var qa = Date.now();
                if (ka + ja < qa) {
                    ka = qa;
                    if (la) {
                        ea(function() {
                            this.sendRemoteQuery.apply(this, na);
                        }.bind(this), ma);
                    } else 
                        this.sendRemoteQuery.apply(this, na);
                }
            }.bind(this);
        } else 
            this.sendRemoteQueryThrottled = ca.withBlocking(this.sendRemoteQuery, ja, this);
    };
    ia.prototype.throttleRenderResults = function() {
        "use strict";
        var ja = j.renderThrottleTime;
        if (ja === 0) {
            this.renderResultsThrottled = this.renderResults;
            return;
        }
        var ka = Date.now();
        this.renderResultsThrottled = function(la, ma, na, oa) {
            var pa = Date.now();
            if (na || ka + ja < pa) {
                ka = pa;
                this.renderResults(la, ma, na, oa);
            }
        }.bind(this);
    };
    ia.prototype.createResultStore = function() {
        "use strict";
        this.facebarConfig.maxGrammarResults = this._maxGrammarResults;
        this.resultStore = new l(this.facebarConfig, q.tokenize, this.getEntry.bind(this), this.resultStoreOptions);
        if (this._fixProcessLean)
            this._processLean();
        this.subscribe('setSortFunction', function(ja, ka) {
            this.resultStore.setSortFunction(ka);
        }.bind(this));
    };
    ia.prototype.dirty = function() {
        "use strict";
        this._nullStateFetched = false;
        this.resultStore.resetCaches();
        ha.dirty.call(this);
    };
    ia.prototype.addEntries = function(ja) {
        "use strict";
        this.resultStore.addBootstrap(this.processEntries(ja));
    };
    ia.prototype._processLean = function() {
        "use strict";
        if (this._fixProcessLean) {
            if (this._leanPayload && this.resultStore) {
                var ja, ka = this._leanPayload.entries;
                for (var la in ka) {
                    ja = this.getEntry(la);
                    if (!ja)
                        continue;
                    for (var ma in ka[la]) {
                        if (!ja.grammar_costs)
                            ja.grammar_costs = {};
                        ja.grammar_costs['{' + ma + '}'] = ka[la][ma];
                    }
                }
                this.setExclusions(this._leanPayload.blocked);
                this._leanPayload = null;
            }
        } else 
            ha._processLean.call(this);
    };
    ia.prototype.setNullStateData = function(ja, ka) {
        "use strict";
        if (ka)
            this.nullStateData = {
                grammar_version: this.grammarVersion
            };
        ba(this.nullStateData, ja);
        return this;
    };
    ia.prototype.setNullState = function(ja) {
        "use strict";
        this._null_state = ja;
        this.processEntries(this._null_state.entities);
        this.resultStore.setNullState(this._null_state.queries);
        var ka = s.typeNamedX;
        ka.forEach(function(la) {
            la.parse.extendable = true;
            la.qid = this._curQueryId;
            la.isTypeNamedXBootstrap = true;
        }, this);
        this.resultStore.addNullStateToQueryCache(this.getRawStructure(n.fromString('')), ka);
        this._typeNamedXResults = {};
        ka.forEach(function(la) {
            this._typeNamedXResults[k.grammarToEntityTypes[la.resultsSetType]] = la;
        }, this);
    };
    ia.prototype.getNullStateTrending = function() {
        "use strict";
        return this._null_state.trending;
    };
    ia.prototype.setSingleState = function(ja) {
        "use strict";
        this._single_state = ja;
    };
    ia.prototype.overrideNullState = function(ja) {
        "use strict";
        da(this._null_state != null);
        this._original_null_state = this._original_null_state || this._null_state;
        this.setNullState(ja);
    };
    ia.prototype.restoreNullState = function() {
        "use strict";
        if (this._original_null_state)
            this.setNullState(this._original_null_state);
    };
    ia.prototype.fetchNullState = function() {
        "use strict";
        if (this._nullStateFetched ||!j.allowGrammar) {
            this.activityStart();
            setTimeout(this.activityEnd.bind(this), 0);
            return;
        }
        var ja = new h().setURI(this.nullStateEndpoint).setData(this.nullStateData).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(function(ka) {
            if (this.resultStore) {
                this.setNullState(ka.payload);
                this.inform('nullstateReady', true);
            } else 
                this._fetched_null_state = ka.payload;
            this._nullStateFetched = true;
        }.bind(this)).setFinallyHandler(this.activityEnd.bind(this));
        this.activityStart();
        ja.send();
    };
    ia.prototype.updateReadState = function() {
        "use strict";
        if (this._readStateUpdated ||!j.enableReadStateUpdate) {
            this.activityStart();
            setTimeout(this.activityEnd.bind(this), 0);
            return;
        }
        var ja = new fa().getURI(), ka = new h().setURI(ja).setMethod('POST').setAllowCrossPageTransition(true).setHandler(function(la) {
            this._readStateUpdated = true;
        }.bind(this)).setFinallyHandler(this.activityEnd.bind(this));
        this.activityStart();
        ka.send();
    };
    ia.prototype.fetchNUXResults = function(ja) {
        "use strict";
        if (!j.allowGrammar)
            return;
        ja = ja || {};
        var ka = new h().setURI(ja.URI).setData(this.nullStateData).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(function(la) {
            if (this.resultStore) {
                this.overrideNullState(la.payload);
                ja.success && ja.success();
            }
        }.bind(this)).setFinallyHandler(this.activityEnd.bind(this));
        this.activityStart();
        ka.send();
    };
    ia.prototype.toTypeaheadEntryUid = function(ja) {
        "use strict";
        var ka, la = n.fromStruct(ja.structure), ma = la.getFragment(0);
        if (la.getCount() == 1 && ma.isType('ent')) {
            var na = ma.getType().split(':')[2];
            ka = this.getEntry(ma.getUID(), na);
            ka.type = this.resultStore.stripBrackets(ja.type);
        } else {
            ka = this.getEntry(ja.tuid);
            if (!ka) {
                ka = {
                    dynamic_cost: ja.dynamic_cost,
                    extra_uri_params: ja.extra_uri_params,
                    icon_class: ja.iconClass,
                    memcache: ja.fromMemcache,
                    photo: ja.photo,
                    results_set_type: ja.resultsSetType,
                    tuid: ja.tuid,
                    type: ja.type,
                    uid: ja.tuid,
                    tags: ja.tags,
                    websuggestion_source: ja.websuggestion_source,
                    is_redirect: ja.isRedirect
                };
                this.processEntries([ka]);
                ka = this.getEntry(ja.tuid);
            }
        }
        if (ka.type === 'websuggestion' || ka.is_redirect)
            ka.path = ja.path;
        ka.error_info = ja.errorInfo;
        ka.logInfo = ja.logInfo;
        ka.structure = la;
        ka.text = ka.structure.toString();
        ka.queryTypeText = ja.queryTypeText;
        ka.semantic = ja.semantic;
        ka.alternateSemantic = ja.alternateSemantic;
        ka.tree = ja.tree;
        ka.cost = ja.cost;
        ka.isSeeMore=!!ja.isSeeMore;
        ka.isNullState=!!ja.isNullState;
        ka.isSingleState=!!ja.isSingleState;
        ka.isTrending=!!ja.isTrending;
        ka.isRecent=!!ja.isRecent;
        ka.entityInfo = ja.entityInfo;
        ka.cacheOnlyResult = ja.cacheOnlyResult || false;
        ka.isExtendedResult = ja.isExtendedResult || false;
        if (ja.isExtendedResult) {
            ka.uri = v.getURI(this.facebarConfig, ka);
        } else 
            ka.uri = ka.uri || v.getURI(this.facebarConfig, ka);
        ka.semanticForest = ja.semanticForest;
        ka.parse = ja.parse;
        ka.tags = ja.tags || {};
        ka.isKeywordL2 = ja.isKeywordL2 || false;
        ka.exactMatchKeyword = ja.exactMatchKeyword || false;
        ka.qid = ja.qid;
        ka.templateID = ja.templateID;
        if (ja.isJSBootstrapMatch) {
            ka.isJSBootstrapMatch = ja.isJSBootstrapMatch;
            ka.backendCost = ja.backendCost;
            ka.bootstrapCost = ja.bootstrapCost;
        }
        this._replaceCategoryWithTermMatches(ka, ja);
        return ka.tuid;
    };
    ia.prototype._replaceCategoryWithTermMatches = function(ja, ka) {
        "use strict";
        if (ja.type !== "user" ||!ja.term_to_subtitle ||!ka.termMatches)
            return;
        var la = [];
        ka.termMatches.forEach(function(na) {
            if (ja.term_to_subtitle[na])
                la.push(ja.term_to_subtitle[na]);
        }, this);
        if (ja.category === undefined)
            ja.category = "";
        var ma = ja.category.split(" \xB7 ");
        ma.unshift.apply(ma, la);
        ma = ma.filter(function(na, oa, pa) {
            return oa == pa.indexOf(na);
        });
        ja.category = ma.splice(0, 2).join(" \xB7 ");
    };
    ia.prototype.getRawStructure = function(ja) {
        "use strict";
        if (typeof ja == 'string')
            ja = n.fromString(ja);
        if (this.resultStore)
            return this.resultStore.transformStructured(ja.toArray());
    };
    ia.prototype.saveResult = function(ja) {
        "use strict";
        this._initialQueryData = this.getUID(ja.uid, ja.fetchType);
    };
    ia.prototype.isDefaultKeywordQuery = function(ja) {
        "use strict";
        return (ja.type === 'keyword') && (m.getTextFromResult(ja).toLowerCase() === this.value.getHash().trim().toLowerCase());
    };
    ia.prototype.buildUids = function(ja) {
        "use strict";
        if (!ja ||!this.resultStore)
            return [];
        if (typeof ja === 'string')
            ja = n.fromString(ja);
        var ka = this.getRawStructure(ja), la = this.resultStore.getResults(ka, this.getMaxResults()), ma = la.results;
        if (typeof ma === 'undefined')
            return [];
        var na = la.webSuggOnTop;
        if (typeof na === 'undefined')
            na = false;
        var oa = la.webSuggLimit || 0, pa = la.null_state === true, qa = this.filterOutWebSuggestion&&!pa, ra = 0;
        ma = ma.filter(function(wa, xa) {
            if (!j.allowGrammar && wa.type == 'grammar')
                return false;
            if (wa.type != 'websuggestion') {
                return wa.semantic != '<blank>' && (wa.type != 'unimplemented' || ra++===0);
            } else 
                return !qa;
        }, this);
        var sa = ma.slice(), ta = [], ua = [], va = [];
        ma.forEach(function(wa) {
            if (wa.forcedPosition > 0) {
                va.push(wa);
            } else if (wa.isSeeMore) {
                ta.push(wa);
            } else 
                ua.push(wa);
        });
        if (pa) {
            ma = this.orderNullState(ma, this.getMaxResults());
        } else if (j.webSuggestionsEnabled) {
            ma = i.integrateWebsuggestions(ua, Boolean(na), this.getMaxResults(), oa, this._minWebSugg);
        } else 
            ma = ua;
        this.inform('decorateSeeMoreSuggestions', {
            structured: ja,
            allResults: sa,
            selectedResults: ma,
            seeMoreResults: ta
        });
        if (va.length > 0) {
            va.sort(function(wa, xa) {
                return wa.forcedPosition - xa.forcedPosition;
            });
            va.forEach(function(wa) {
                ma.splice(wa.forcedPosition, 0, wa);
            });
        }
        if (ta.length > 0)
            ma.push.apply(ma, ta);
        return ma.map(this.toTypeaheadEntryUid, this);
    };
    ia.prototype.orderNullState = function(ja, ka) {
        "use strict";
        var la = {
            top: [],
            bottom: [],
            middle: []
        }, ma = function(pa) {
            var qa = pa.null_state_position;
            return la.hasOwnProperty(qa) ? qa : 'middle';
        }, na = function(pa, qa) {
            return pa.original_cost - qa.original_cost;
        };
        ja && ja.forEach(function(pa) {
            la[ma(pa)].push(pa);
        }, this);
        for (var oa in la) {
            la[oa] = la[oa].sort(na).slice(0, ka);
            ka -= la[oa].length;
        }
        return [].concat(la.top, la.middle, la.bottom);
    };
    ia.prototype.handleResponse = function(ja, ka) {
        "use strict";
        if (!(ja.payload.errors)) {
            this.processEntries(ja.payload.entities);
            this.filterOutWebSuggestion = true;
            for (var la = 0; la < ja.payload.results.length; la++)
                if (ja.payload.results[la].type == 'websuggestion') {
                    this.filterOutWebSuggestion = false;
                    break;
                }
            if (ja.payload.blockees)
                ja.payload.blockees.forEach(function(oa) {
                    if (!(this.blockees.hasOwnProperty(oa)))
                        this.blockees[oa.toLocaleLowerCase()] = oa;
                    }.bind(this));
            ja.payload.results.forEach(function(oa) {
                oa.qid = ja.queryId;
                if (!oa.parse)
                    oa.parse = {};
                oa.parse.entTokens = oa.parse.entTokens || [];
                oa.parse.remTokens = oa.parse.remTokens || [];
                oa.parse.suffix = oa.parse.suffix || '';
                if (p.isEntity(oa.semantic))
                    oa = this._buildCommonEntityFields(oa, ka.tokens);
            }.bind(this));
            var ma = {};
            ['webSuggOnTop', 'webSuggLimit', 'webSuggLimitSeeMore'].forEach(function(oa) {
                if (ja.payload.hasOwnProperty(oa))
                    ma[oa] = ja.payload[oa];
            });
            var na = [];
            if (ja.payload.seemore && this._typeNamedXResults)
                ja.payload.seemore.forEach(function(oa) {
                    na.push(this._typeNamedXResults[oa]);
                }, this);
            this.resultStore.saveResults(ja.payload.results, ka, ja.payload.incomplete, ma, na);
        }
    };
    ia.prototype.processEntries = function(ja) {
        "use strict";
        return ja.map(function(ka, la) {
            var ma = (ka.uid = ka.uid + '');
            ka.textToIndex = this.getTitleTerms(ka);
            ka.titleToIndex = this.getTitleTerms(ka);
            ma = this.getUID(ma, ka.fetchType);
            var na = this.getEntry(ma);
            if (!na) {
                this.setEntry(ma, {});
                na = this.getEntry(ma);
            } else {
                delete ka.photo;
                delete ka.category;
                delete ka.subtext;
            }
            ba(na, ka);
            na.tuid = ma;
            na.index === undefined && (na.index = la);
            return ma;
        }, this);
    };
    ia.prototype.getUID = function(ja, ka) {
        "use strict";
        ja = ja + '';
        if (ka !== undefined) {
            ka = /([^:]+:)?([^:]+)(:.*)?/.exec(ka)[2];
            return JSON.stringify([ja, ka]);
        }
        return ja;
    };
    ia.prototype.getEntry = function(ja, ka) {
        "use strict";
        var la;
        ja = '' + ja;
        la = ka != null ? ha.getEntry.call(this, this.getUID(ja, ka)) || ha.getEntry.call(this, ja) : ha.getEntry.call(this, ja);
        return la;
    };
    ia.prototype.getEntryForFragment = function(ja) {
        "use strict";
        return this.getEntry(ja.getUID(), ja.getTypePart(2));
    };
    ia.prototype.getMaxResults = function() {
        "use strict";
        return this._numResults.max;
    };
    ia.prototype.query = function(ja, ka, la) {
        "use strict";
        this.executeQueryThrottled(ja, this._initialQueryData, {
            keyPress: o.getTimestamp()
        });
        this._initialQueryData = null;
    };
    ia.prototype.executeQuery = function(ja, ka, la) {
        "use strict";
        this._curQueryId++;
        la.queryId = this._curQueryId;
        la.startCacheQuery = o.getTimestamp();
        var ma = (this.getMaxResults() + u.additionalResultsToFetch);
        this.setQueryData({
            qid: this._curQueryId,
            max_results: ma
        });
        this.inform('beforeQuery', {
            value: ja,
            queryId: this._curQueryId
        });
        this.value = ja;
        var na = this.buildUids(ja, []);
        la.endCacheQuery = o.getTimestamp();
        if (ka && na.length === 0)
            na.push(ka);
        if (j.sendExistingIDs) {
            var oa = [];
            na.forEach(function(pa) {
                var qa = this.getEntry(pa);
                if (qa && qa.type in k.entityTypes)
                    oa.push(qa.uid);
            }, this);
            if (oa.length > 0)
                this.setQueryData({
                    qid: this._curQueryID,
                    existing_ids: JSON.stringify(oa),
                    max_results: ma
                });
        }
        this.inform('query', {
            value: ja,
            results: na,
            queryId: this._curQueryId
        });
        if (this.resultStore)
            this.respond(ja, na, false, false, la);
    };
    ia.prototype.shouldFetchMore = function(ja, ka) {
        "use strict";
        if (ja.is_empty)
            return false;
        if (this.resultStore.alreadyKnown(ja.cache_id))
            return false;
        if (ja.raw_text && this._isQueryTooShort(ja.raw_text))
            return false;
        if (j.alwaysFetchMore)
            return true;
        if (ka.length < this.getMaxResults())
            return true;
        return this.countValidResults(ka) < this.getMaxResults();
    };
    ia.prototype.countValidResults = function(ja) {
        "use strict";
        var ka = 0, la = 0;
        ja.forEach(function(ma) {
            if (ma&&!ma.isNullState&&!ma.isSeeMore)
                if (ma.type === 'websuggestion') {
                    ka++;
                } else 
                    la++;
        }, this);
        return la + Math.min(this._maxWebSuggToCountFetchMore, ka);
    };
    ia.prototype.sendRemoteQuery = function(ja, ka, la) {
        "use strict";
        var ma = this._single_state, na = new h().setURI(this.queryEndpoint).setData(this.getQueryData(ja.text_form)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(function(oa, pa) {
            pa.queryId = oa;
            pa.inputQuery = ja.text_form;
            pa.payload.results.forEach(function(qa) {
                qa.isSingleState = ma;
            });
            la.endRemoteQuery = o.getTimestamp();
            this.inform('response_received', pa);
            this.handleResponse(pa, ja);
            this.respond(ka, [], true, pa.payload && (!pa.payload.results || pa.payload.results.length === 0), la);
            this.inform('backend_response', pa);
        }.bind(this, la.queryId)).setFinallyHandler(this.activityEnd.bind(this));
        this.inform('sending_request', na);
        this._maxRemoteQueryId = la.queryId;
        la.waitingQueries = this._waitingQueries;
        la.inflightRequests = h.getInflightCount();
        la.startRemoteQuery = o.getTimestamp();
        na.send();
        this.activityStart();
    };
    ia.prototype.activityStart = function() {
        "use strict";
        if (!this._waitingQueries)
            this.inform('activity', {
                activity: true
            }, g.BEHAVIOR_STATE);
        this._waitingQueries++;
    };
    ia.prototype.activityEnd = function() {
        "use strict";
        this._waitingQueries--;
        if (!this._waitingQueries)
            this.inform('activity', {
                activity: false
            }, g.BEHAVIOR_STATE);
    };
    ia.prototype._bucketizeResults = function(ja, ka) {
        "use strict";
        ka = this._tagKeywordsSuggestions(ka);
        ka = t.addL2Terms(ka, this.getMaxResults(), ja.toString(), j);
        ka = r.addTypeNamedX(ka, this.getMaxResults(), ja.toString(), j);
        var la = Math.min(ka.length, this.getMaxResults());
        return this._resultsBucketizer.bucketize(ka, la);
    };
    ia.prototype._tagKeywordsSuggestions = function(ja) {
        "use strict";
        if (!ja || ja.length === 0)
            return ja;
        var ka = ja[0];
        if (ka.bootstrapped)
            return ja;
        if (ka.type === 'grammar' || (ka.cost < j.closeEntityThreshold && ka.type === 'user'))
            return ja;
        return ja.map(function(la) {
            if (la.type !== k.keywordType)
                return la;
            la = ba(null, la);
            la.tags.topBucket = true;
            return la;
        });
    };
    ia.prototype._buildCommonEntityFields = function(ja, ka) {
        "use strict";
        if (ja.queryTypeText)
            return ja;
        if (j.unbreakParseDisplay) {
            ja.parse.display = [{
                type: 'ent:' + ja.type,
                uid: ja.semantic
            }
            ];
        } else 
            ja.parse.display = [{
                type: 'ent:' + ja.type,
                uid: parseInt(ja.semantic, 10)
            }
            ];
        if (ja.parse.fetchType)
            ja.parse.display[0].fetchType = ja.parse.fetchType;
        ja.parse.entTokens = ka;
        ja.parse.pos = 0;
        ja.resultsSetType = '{' + ja.type + '}';
        ja.queryTypeText = k.defaultQueryTypeText;
        return ja;
    };
    ia.prototype.setBypassBucketizer = function(ja) {
        "use strict";
        this._bypassBucketizer = ja;
    };
    ia.prototype.respond = function(ja, ka, la, ma, na) {
        "use strict";
        if (la && this.value) {
            if (typeof this.value === 'string')
                this.value = n.fromString(this.value);
            this.inform('remote_query_match', {
                isMatch: this.value.matches(ja),
                queryId: na ? na.queryId: 0
            });
            ja = this.value;
            ka = this.buildUids(ja);
        }
        this.inform('reorderResults', ka);
        this.inform('respondValidUids', ka);
        var oa = ka.map(this.getEntry, this);
        if (!la) {
            var pa = this.getRawStructure(ja);
            if (this.shouldFetchMore(pa, oa)) {
                if (na != null)
                    na.dispatchRemoteQuery = o.getTimestamp();
                this.sendRemoteQueryThrottled(pa, ja, na);
            }
        }
        if (!la ||!na || na.queryId === this._maxRemoteQueryId)
            this.renderResultsThrottled(ja, oa, la, ma);
        if (na != null)
            this.logLatencies(la, na);
    };
    ia.prototype.renderResults = function(ja, ka, la, ma) {
        "use strict";
        if (!!ja && (ja instanceof n&&!ja.isEmptyOrWhitespace())&&!this._bypassBucketizer)
            ka = this._bucketizeResults(ja, ka);
        ka.length = Math.min(ka.length, this.getMaxResults());
        ma = la && ka.length === 0;
        this.inform('respond', {
            value: ja,
            results: ka,
            isAsync: !!la,
            isEmptyResults: ma
        });
    };
    ia.prototype.logLatencies = function(ja, ka) {
        "use strict";
        var la = o.getTimestamp();
        if (ja) {
            this.inform('remote_query_latency', {
                queryId: ka.queryId,
                latencies: {
                    queryStart: Math.max(ka.startRemoteQuery - ka.dispatchRemoteQuery, 0),
                    queryEnd: Math.max(ka.endRemoteQuery - ka.startRemoteQuery, 0),
                    keyPressToQueryDispatch: Math.max(ka.dispatchRemoteQuery - ka.keyPress, 0),
                    keyPressToQueryStart: Math.max(ka.startRemoteQuery - ka.keyPress, 0),
                    keyPressToQueryEnd: Math.max(ka.endRemoteQuery - ka.keyPress, 0),
                    render: Math.max(la - ka.endRemoteQuery, 0),
                    inflightRequests: ka.inflightRequests,
                    waitingQueries: ka.waitingQueries,
                    keyPressToRender: Math.max(la - ka.keyPress, 0)
                }
            });
        } else 
            this.inform('cache_query_latency', {
                queryId: ka.queryId,
                latencies: {
                    queryStart: Math.max(ka.startCacheQuery - ka.keyPress, 0),
                    queryEnd: Math.max(ka.endCacheQuery - ka.startCacheQuery, 0),
                    keyPressToQueryEnd: Math.max(ka.endCacheQuery - ka.keyPress, 0),
                    render: Math.max(la - ka.endCacheQuery, 0),
                    keyPressToRender: Math.max(la - ka.keyPress, 0)
                }
            });
    };
    ia.prototype._updateMaxResults = function() {
        "use strict";
        var ja = z.getViewportDimensions().y, ka = aa.getTop() || 42, la = 56, ma = 48;
        this._maxResults = Math.max(this._numResults.min, Math.min(this._numResults.max, Math.floor((ja - ka - ma - 25) / la) - 1));
        this.value && this.query(this.value);
    };
    ia.prototype.getCurQueryId = function() {
        "use strict";
        return this._curQueryId;
    };
    ia.prototype.setTypenamedXOption = function(ja) {
        "use strict";
        j.showTypeNamedX = ja;
    };
    ia.prototype.setMinQueryLength = function(ja) {
        "use strict";
        this._minQueryLength = ja;
    };
    ia.prototype.setGrammarOption = function(ja) {
        "use strict";
        j.allowGrammar = ja;
    };
    ba(ia.prototype, {
        events: ['query', 'respond', 'bootstrapped', 'activity', 'ready']
    });
    e.exports = ia;
}, null);
__d("FacebarTypeaheadDebugPane.react", ["Banzai", "LeftRight.react", "ReactPropTypes", "React", "Image.react"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = j.createClass({
        displayName: "FacebarTypeaheadDebugPane",
        propTypes: {
            result: i.object.isRequired
        },
        getInitialState: function() {
            return {
                feedbackSent: false
            };
        },
        componentWillReceiveProps: function(m) {
            if (m.result !== this.props.result)
                this.setState({
                    feedbackSent: false
                });
        },
        sendFeedback: function(m) {
            var n = this.props.result;
            if (n.decoration.entity === n)
                n.decoration.entity = '';
            var o = JSON.stringify(n), p = JSON.stringify(n.debug.allResults), q = {
                result: o,
                query: n.debug.query,
                position: n.debug.position,
                sid: n.debug.sid,
                allResults: p,
                isOK: m
            };
            g.post('facebar_feedback', q, {
                delay: 0
            });
            this.setState({
                feedbackSent: true
            });
            this.setState({
                feedbackOK: m
            });
            return false;
        },
        renderDebugText: function(m) {
            return j.createElement("div", null, m);
        },
        render: function() {
            var m = this.sendFeedback.bind(this, true), n = this.sendFeedback.bind(this, false), o = this.state.feedbackSent, p = o && this.state.feedbackOK, q = o&&!this.state.feedbackOK;
            return (j.createElement("div", {
                className: "fsm pam"
            }, j.createElement(h, null, j.createElement("div", null, this.props.result.debug.map(this.renderDebugText)), j.createElement("div", null, j.createElement("div", {
                className: p ? '': 'hidden_elem'
            }, j.createElement("strong", null, "Feedback sent"), j.createElement(k, {
                className: "mls",
                src: '/images/green_up.gif'
            })), j.createElement("div", {
                className: q ? '': 'hidden_elem'
            }, j.createElement("strong", null, "Feedback sent"), j.createElement(k, {
                className: "mls",
                src: '/images/red_down.gif'
            })), j.createElement("div", {
                className: o ? 'hidden_elem': ''
            }, j.createElement("a", {
                href: "#",
                onClick: m
            }, j.createElement(k, {
                src: '/images/green_up.gif'
            })), j.createElement("a", {
                href: "#",
                onClick: n
            }, j.createElement(k, {
                className: "mls",
                src: '/images/red_down.gif'
            })))))));
        }
    });
    e.exports = l;
}, null);
__d("FacebarTypeaheadDiffText.react", ["React", "ReactPropTypes", "cx"], function(a, b, c, d, e, f, g, h, i) {
    var j = g.createClass({
        displayName: "FacebarTypeaheadDiffText",
        propTypes: {
            prefix: h.string,
            text: h.string
        },
        renderDiff: function(k, l) {
            return (g.createElement("span", {
                className: "diffNode _5td3",
                key: l
            }, k));
        },
        renderParts: function() {
            var k = this.props.prefix, l = this.props.text;
            if (k == null)
                return this.renderDiff(l, 0);
            var m = l.toLowerCase().indexOf((k.toLowerCase()));
            k = k.trim();
            if (m === 0)
                l = l.slice(k.length);
            var n = l.split(/\b/).map(this.renderDiff);
            if (m === 0)
                n.unshift(k);
            return n;
        },
        render: function() {
            return (g.createElement("span", g.__spread({}, this.props), this.renderParts()));
        }
    });
    j.generatePrefixes = function(k, l) {
        var m = [], n, o;
        for (var p = 0, q = l.length; p < q; p++) {
            o = l[p].getText();
            n = k.slice(0, Math.min(k.length, o.length));
            if (n === '')
                return m;
            if (o.toLowerCase().indexOf(n.toLowerCase()) === 0) {
                m.push(n);
                k = k.slice(n.length);
            } else 
                return m;
        }
        return m;
    };
    e.exports = j;
}, null);
__d("FacebarTypeaheadHighlightedText.react", ["BrowseFacebarHighlighter", "React", "ReactPropTypes"], function(a, b, c, d, e, f, g, h, i) {
    var j = h.createClass({
        displayName: "FacebarTypeaheadHighlightedText",
        propTypes: {
            text: i.string,
            tokens: i.array
        },
        renderHighlight: function(k, l) {
            if ((l + 1)%3 === 0) {
                return h.createElement("span", {
                    className: "highlightNode",
                    key: l
                }, k);
            } else if (k)
                return k;
        },
        renderParts: function() {
            var k = this.props.text, l = this.props.tokens;
            if (l && k) {
                var m = g.createRegex(l), n = k.split(m);
                return n.map(this.renderHighlight);
            } else 
                return k;
        },
        render: function() {
            return (h.createElement("span", h.__spread({}, this.props), this.renderParts()));
        }
    });
    e.exports = j;
}, null);
__d("FacebarTypeaheadItem.react", ["Badge.react", "ReactPropTypes", "React", "FacebarGlobalOptions", "FacebarTypeaheadDebugPane.react", "FacebarTypeaheadDiffText.react", "FacebarTypeaheadHighlightedText.react", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    function p(r) {
        var s = r.getTypePart(0);
        return s ? "fragment" + s.charAt(0).toUpperCase() + s.substr(1) : "fragment";
    }
    var q = i.createClass({
        displayName: "FacebarTypeaheadItem",
        propTypes: {
            result: h.object.isRequired,
            className: h.string,
            icon: h.object,
            token: h.object,
            highlight: h.array,
            prefix: h.string,
            message: h.object,
            valign: h.bool
        },
        getDefaultProps: function() {
            return {
                valign: true
            };
        },
        renderHighlightedFragment: function(r, s) {
            return (i.createElement(m, {
                className: p(r),
                key: s,
                text: r.getText(),
                tokens: this.props.highlight
            }));
        },
        renderDiffedFragment: function(r, s, t) {
            return (i.createElement(l, {
                className: p(r),
                key: t,
                prefix: s,
                text: r.getText()
            }));
        },
        renderText: function() {
            var r = this.props.result.structure.toArray(), s = this.props.prefix;
            if (j.graphSearchV2 && s != null && s.trim() !== '') {
                var t = l.generatePrefixes(s, r);
                return r.map(function(u, v) {
                    if (!t[v])
                        t[v] = '';
                    return this.renderDiffedFragment(u, t[v], v);
                }.bind(this));
            } else 
                return r.map(this.renderHighlightedFragment);
        },
        renderBadge: function() {
            if (this.props.result.is_verified) {
                return (i.createElement(g, {
                    type: "verified",
                    size: "medium"
                }));
            } else if (this.props.result.is_work_user)
                return (i.createElement(g, {
                    type: "work",
                    size: "medium"
                }));
        },
        renderIcon: function() {
            var r = this.props.result.icon_class;
            if (r) {
                return (i.createElement("span", {
                    className: "_k83"
                }, i.createElement("span", {
                    className: r
                })));
            } else if (this.props.result.photo)
                return (i.createElement("img", {
                    className: "_20h",
                    alt: "",
                    src: this.props.result.photo
                }));
        },
        renderLabel: function() {
            var r = ' \u00B7 ', s = this.props.result, t = (("_53ad") + (this.props.valign && this.props.token && this.props.token.props && this.props.token.props.text.length > 0 ? ' ' + "_55y-" : '') + (!s.category&&!s.subtext ? ' ' + "_2vzo" : '') + ((!s.category&&!!s.subtext) || (s.category && s.category.indexOf(r) < 0&&!s.subtext) ? ' ' + "_2vzp" : '') + ((s.category&&!!s.subtext) || (s.category && s.category.indexOf(r) > 0) ? ' ' + "_2vzq" : '')), u = i.createElement("span", {
                className: t
            }, this.renderText(), this.renderBadge(), this.props.token), v = (("_7gk") + (this.props.message ? ' ' + "_5byz" : ''));
            return (i.createElement("span", {
                className: v
            }, u, this.props.message));
        },
        renderMain: function() {
            return (i.createElement("a", {
                className: "_205",
                href: this.props.result.uri,
                rel: "ignore"
            }, i.createElement("span", {
                className: "_6i1"
            }, this.props.icon || this.renderIcon(), this.renderLabel())));
        },
        renderDebug: function() {
            return this.props.result.debug ? i.createElement(k, {
                result: this.props.result
            }) : null;
        },
        render: function() {
            var r = "_202 _5bl2 _6_k";
            return (i.createElement("li", {
                className: o(r, this.props.className),
                onClick: this.props.onClick,
                onMouseEnter: this.props.onMouseEnter,
                "aria-label": this.props.result.structure.toString(),
                role: "option"
            }, this.renderMain(), this.renderDebug()));
        }
    });
    e.exports = q;
}, null);
__d("FacebarTypeaheadToken.react", ["FacebarTypeaheadHighlightedText.react", "ReactPropTypes", "React", "cx"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = ' \u00B7 ', l = i.createClass({
        displayName: "FacebarTypeaheadToken",
        propTypes: {
            text: h.array.isRequired,
            highlight: h.array,
            limit: h.number,
            innerClass: h.string,
            leadingMiddot: h.bool,
            savedContext: h.string
        },
        render: function() {
            var m = null;
            if (this.props.savedContext)
                m = i.createElement("span", {
                    className: "_10j2"
                }, this.props.savedContext);
            var n = this.props.text;
            if (this.props.limit)
                n.splice(this.props.limit);
            n.forEach(function(r, s) {
                if (s !== 0 || this.props.leadingMiddot || m)
                    n[s] = k + r;
            }.bind(this));
            var o = i.createElement(g, {
                tokens: this.props.highlight,
                text: n.shift()
            }), p = n.length ? i.createElement(g, {
                tokens: this.props.highlight,
                className: "_53ab",
                text: n.join('')
            }): null, q = this.props.innerClass || "_53aa";
            return (i.createElement("span", {
                className: "_53a9"
            }, i.createElement("span", {
                className: q
            }, m, o, p)));
        }
    });
    e.exports = l;
}, null);
__d("FacebarTypeaheadTokenText", ["HTML", "getElementText"], function(a, b, c, d, e, f, g, h) {
    var i = '\u00B7';
    function j(n) {
        if (typeof n === 'object') {
            return h(g(n).getRootNode());
        } else 
            return n || '';
    }
    function k(n) {
        return j(n).split(i).map(function(o) {
            return o.trim();
        });
    }
    function l(n) {
        var o = {};
        return n.filter(function(p) {
            var q=!o[p];
            o[p] = true;
            return q && p;
        });
    }
    var m = {
        textForEntity: function(n, o) {
            var p = n.category || o[n.type] || '', q = n.subtext || '', r = k(p).concat(k(q));
            return l(r);
        },
        text: function(n) {
            return l(k(n));
        }
    };
    e.exports = m;
}, null);
__d("FacebarTypeaheadEntityItem.react", ["React", "FacebarTypeaheadItem.react", "FacebarTypeaheadToken.react", "FacebarTypeaheadTokenText", "TypeaheadFacepileX.react", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = g.createClass({
        displayName: "FacebarTypeaheadEntityItem",
        renderToken: function() {
            return (g.createElement(i, {
                highlight: this.getHighlightTokens(),
                text: j.textForEntity(this.props.result, {}),
                savedContext: this.props.result.saved_context
            }));
        },
        renderIcon: function() {
            if (this.props.result.size > 1 && this.props.result.photos) {
                return (g.createElement(k, {
                    className: "_51l_",
                    photos: this.props.result.photos,
                    size: this.props.result.size
                }));
            } else if (this.props.result.photo)
                return (g.createElement("img", {
                    className: "_20h",
                    alt: "",
                    src: this.props.result.photo
                }));
        },
        getHighlightTokens: function() {
            if (this.props.result.original_query) {
                var n = this.props.result.original_query.toString().trim(), o = n.split(' '), p = o.length > 1 ? [n].concat(o): [n];
                return p.filter(function(q) {
                    return (q !== '');
                });
            }
        },
        render: function() {
            return (g.createElement(h, g.__spread({}, this.props, {
                icon: this.renderIcon(),
                token: this.renderToken(),
                highlight: this.getHighlightTokens(),
                valign: true
            })));
        }
    });
    e.exports = m;
}, null);
__d("FacebarDisambiguationDialog", ["Event", "BrowseLogger", "CSS", "cx", "Dialog", "DOM", "FacebarStructuredText", "FacebarTypeaheadEntityItem.react", "React", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = 650;
    function r(s, t, u, v, w) {
        "use strict";
        this._sets = s;
        this._path = t;
        this._ondone = u;
        this._oncancel = v;
        this._selection = [];
        this._typeaheadSID = w;
    }
    r.prototype.show = function() {
        "use strict";
        new k().setTitle("Which of these did you mean?").setBody(this._createBody()).setContentWidth(q).setModal(true).setButtons([k.CONFIRM, k.CANCEL]).setHandler(this._handleDone.bind(this)).setCancelHandler(this._handleCancel.bind(this)).show();
        this._sets.forEach(function(s) {
            var t = [];
            s.forEach(function(v) {
                t.push(v.uid);
            });
            var u = s[0];
            h.logDisambiguationImpression(u.text, u.type, this._path, t.join(','), this._typeaheadSID);
        }.bind(this));
    };
    r.prototype._createBody = function() {
        "use strict";
        var s = [];
        this._sets.forEach(function(t, u) {
            s.length && s.push(l.create('li', {
                className: "_200"
            }));
            t.forEach(function(v) {
                var w = this._createItem(v, u);
                this._selection[u] || this._selectItem(w);
                s.push(w.root);
            }.bind(this));
        }.bind(this));
        return l.create('ul', {
            className: 'viewList disambiguationList'
        }, s);
    };
    r.prototype._createItem = function(s, t) {
        "use strict";
        var u = {
            uri: null,
            subtext: s.subtext,
            category: s.category,
            photo: s.photo,
            type: s.type,
            structure: m.fromStruct([{
                text: s.text,
                type: 'ent:' + s.type,
                uid: s.uid
            }
            ])
        }, v = l.create('div', {
            className: "_201"
        }), w = o.createElement(n, {
            result: u
        }), x = l.create('div');
        o.render(w, x);
        var y = x.firstChild;
        i.addClass(y, "_6i3");
        l.appendContent(y, i.hide(v));
        var z = {
            setId: t,
            result: s,
            root: y,
            check: v
        };
        g.listen(y, 'mouseover', this._toggleHover.bind(this, z, true));
        g.listen(y, 'mouseout', this._toggleHover.bind(this, z, false));
        g.listen(y, 'click', function(event) {
            this._selectItem(z);
            return event.kill();
        }.bind(this));
        return z;
    };
    r.prototype._toggleHover = function(s, t) {
        "use strict";
        i.conditionClass(s.root, 'selected', t);
    };
    r.prototype._toggleCheck = function(s, t) {
        "use strict";
        i.conditionShow(s.check, t);
    };
    r.prototype._selectItem = function(s) {
        "use strict";
        var t = this._selection[s.setId];
        this._selection[s.setId] = s;
        t && this._toggleCheck(t, false);
        this._toggleCheck(s, true);
    };
    r.prototype._handleDone = function(s) {
        "use strict";
        this._ondone(s == k.CONFIRM ? this._selection.map(function(t) {
            var u = t.result;
            h.logDisambiguationClick(u.text, u.type, this._path, u.index, u.uid, this._typeaheadSID);
            return u;
        }.bind(this)) : null);
    };
    r.prototype._handleCancel = function() {
        "use strict";
        this._oncancel();
    };
    e.exports = r;
}, null);
__d("FacebarTypeahead", ["Arbiter", "Typeahead", "copyProperties", "emptyFunction", "FacebarGlobalOptions", "throttle"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    for (var m in h)
        if (h.hasOwnProperty(m))
            o[m] = h[m];
    var n = h === null ? null: h.prototype;
    o.prototype = Object.create(n);
    o.prototype.constructor = o;
    o.__superConstructor__ = h;
    function o(p, q, r, s, t, u) {
        "use strict";
        h.call(this, p, q, r, s);
        this.getCore();
        this.proxyEvents();
        this.initBehaviors(t || []);
        var v = this.core.subscribe('focus', function() {
            if (u)
                u.init(this);
            this.core.unsubscribe(v);
            this.data.bootstrap(false);
            this.core.input.focus();
            if (k.fetchLeanOnFocus) {
                var w = k.fetchLeanOnFocusThrottleTime;
                this.core.subscribe('focus', l(this.data.fetchLean, w, this.data));
            }
        }.bind(this));
        this.data.bootstrap(true);
        this.inform('init', this, g.BEHAVIOR_PERSISTENT);
        g.inform('Facebar/init', this, g.BEHAVIOR_PERSISTENT);
    }
    o.prototype.proxyEvents = function() {
        "use strict";
        var p, q = [], r = null, s = (function() {
            while (p = q.shift())
                this.inform(p[0], p[1]);
            r = null;
        }).bind(this);
        [this.data, this.view, this.core].forEach(function(t) {
            t.subscribe(t.events, function(u, v) {
                q.push([u, v]);
                r = r || setTimeout(s, 0);
            }.bind(this));
        }, this);
    };
    i(o.prototype, {
        init: j
    });
    e.exports = o;
}, null);
__d("StructuredInputUtil", ["StructuredInputDOM"], function(a, b, c, d, e, f, g) {
    function h(n, o, p) {
        var q = n.substr(0, o).lastIndexOf(p);
        return q!==-1 ? q + 1 : 0;
    }
    function i(n, o, p) {
        var q = n.indexOf(p, o);
        return q!==-1 ? q : n.length;
    }
    function j(n, o, p) {
        return (o === 0 || o === n.length || n.substr(o, p.length) == p);
    }
    function k(n, o, p, q) {
        switch (o) {
        case 'none':
            return p;
        case 'all':
            return q ? n.length : 0;
        case 'word':
            if (j(n, p, '\u00a0')) {
                return p;
            } else if (q) {
                return i(n, p, '\u00a0');
            } else 
                return h(n, p, '\u00a0');
        }
    }
    function l(n, o) {
        return o && g.isEntityNode(n)&&!g.isEntityNode(o);
    }
    var m = {
        getMarkerAtOffset: function(n, o) {
            var p = n.firstChild, q = 0, r = 0;
            while (p) {
                q += r;
                r = g.getLength(p);
                if (q + r > o) {
                    break;
                } else 
                    p = p.nextSibling;
            }
            return {
                node: p || n.lastChild,
                offset: o - q
            };
        },
        validateEntityText: function(n) {
            var o = g.getText(n), p = n.getAttribute('data-fulltext'), q = n.getAttribute('data-group');
            if (q == 'hashtag') {
                var r = o.match(/#[^\s]+/);
                p = r && r[0];
            }
            var s = o.indexOf(p), t = {
                prefix: null,
                entity: null,
                suffix: null
            };
            switch (q) {
            case 'none':
                t.entity = o;
                break;
            case 'hashtag':
            case 'all':
                if (s!=-1) {
                    t.prefix = o.substr(0, s);
                    t.entity = o.substr(s, p.length);
                    t.suffix = o.substr(s + p.length);
                } else 
                    t.suffix = o;
                break;
            case 'word':
                if (s!=-1) {
                    t.prefix = o.substr(0, s);
                    o = o.substr(s);
                }
                var u = 0, v = 0;
                while (u < p.length) {
                    v = i(p, u + 1, '\u00a0');
                    if (o.substr(0, v) != p.substr(0, v)) {
                        break;
                    } else 
                        u = v;
                }
                t.entity = o.substr(0, u) || null;
                t.suffix = o.substr(u) || null;
            }
            return t;
        },
        getGrouping: function(n, o) {
            var p = n.getAttribute('data-group'), q = n.getAttribute('data-select');
            if (o == 'select') {
                return q == 'group' ? p : 'none';
            } else 
                return p;
        },
        snapMarkerToText: function(n, o) {
            var p = n.node;
            if (g.isEntityNode(p)) {
                var q = n.offset, r = m.getGrouping(p, o);
                if (r != 'none')
                    if (q === 0) {
                        var s = p.previousSibling;
                        if (l(p, s))
                            return {
                                node: s,
                                offset: g.getLength(s)
                            };
                    } else if (q == g.getLength(p)) {
                        var t = p.nextSibling;
                        if (l(p, t))
                            return {
                                node: t,
                                offset: 0
                            };
                    }
            }
            return n;
        },
        nextMarkerBoundary: function(n, o, p) {
            var q = n.node;
            if (g.isEntityNode(q) && (!o || n.offset !== 0)) {
                var r = m.getGrouping(q, p);
                if (r != 'none')
                    return {
                        node: n.node,
                        offset: k(g.getText(q), r, n.offset, o)
                    };
            }
            return n;
        }
    };
    e.exports = m;
}, null);
__d("StructuredInputCleaner", ["DOM", "createArrayFrom", "copyProperties", "StructuredInputUtil", "StructuredInputDOM", "UserAgent_DEPRECATED", "getElementText"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    function n(o, p, q) {
        "use strict";
        this._node = o;
        this._selection = p;
        this._wrapText = q;
    }
    n.prototype._cleanEntityNode = function(o) {
        "use strict";
        var p = o.getAttribute('data-text'), q = k.getText(o);
        o.style.cssText = '';
        if (p == q && k.containsOnlyText(o, {
            I: true
        }))
            return null;
        var r = [], s = j.validateEntityText(o), t = k.createIconNode(JSON.parse(o.getAttribute('data-icon')));
        if (!s.entity && ((s.suffix&&!s.prefix) || (s.prefix&&!s.suffix))) {
            k.convertToTextNode(o);
            o.setAttribute('data-text', q);
            return null;
        }
        if (s.prefix)
            r.push(this._createTextNode(s.prefix));
        if (s.entity) {
            if (this._selection && m(o) !== s.entity)
                this._selection.markDirty(o);
            g.setContent(o, t ? [t, s.entity] : s.entity);
            o.setAttribute('data-text', s.entity);
            r.push(o);
        }
        if (s.suffix)
            r.push(this._createTextNode(s.suffix));
        return r;
    };
    n.prototype._removeSpecialNodes = function() {
        "use strict";
        var o = h(this._node.getElementsByTagName('script')), p = h(this._node.getElementsByTagName('style'));
        o.forEach(g.remove);
        p.forEach(g.remove);
    };
    n.prototype._collapseNodes = function() {
        "use strict";
        for (var o, p = this._node.firstChild; p; p = o) {
            o = p.nextSibling;
            if (!g.isTextNode(p)&&!k.isEntityNode(p)&&!k.containsOnlyText(p))
                for (var q = p.lastChild; q; q = p.lastChild) {
                    this._node.insertBefore(q, o);
                    o = q;
                }
        }
    };
    n.prototype._createTextNode = function(o) {
        "use strict";
        if (this._wrapText) {
            return k.createTextNode(o);
        } else 
            return document.createTextNode(o);
    };
    n.prototype.replaceNodes = function(o, p) {
        "use strict";
        if (p == null)
            return;
        var q = o.length ? o[o.length - 1].nextSibling: null;
        o.forEach(function(r) {
            if (p.indexOf(r)===-1)
                g.remove(r);
        }, this);
        p.reverse().forEach(function(r) {
            if (o.indexOf(r)===-1)
                this._node.insertBefore(r, q);
            q = r;
        }, this);
    };
    n.prototype.clean = function() {
        "use strict";
        this._removeSpecialNodes();
        this._collapseNodes();
        var o = [], p = function() {
            if (o.length) {
                this.replaceNodes(o, this._cleanTextNodes(o));
                o.length = 0;
            }
        }.bind(this);
        h(this._node.childNodes).forEach(function(q) {
            if (k.isEntityNode(q)) {
                this.replaceNodes([q], this._cleanEntityNode(q));
                p(o);
            } else 
                o.push(q);
        }.bind(this));
        p();
        if (!this._node.firstChild && l.firefox())
            this._node.appendChild(this._createTextNode());
    };
    n.prototype.endOnText = function() {
        "use strict";
        var o = function(p, q) {
            if (k.isEntityNode(p))
                this._node.insertBefore(this._createTextNode(), q ? p : null);
        }.bind(this);
        o(this._node.firstChild, true);
        o(this._node.lastChild, false);
    };
    i(n.prototype, {
        _cleanTextNodes: (function() {
            var o = function(q) {
                return (q.nodeName === 'BR' || q.nodeName === 'SPAN' && p(q));
            }, p = function(q) {
                return q.getAttribute('data-si') && k.containsOnlyText(q) && k.getLength(q) > 0;
            };
            return function(q) {
                if (q.length != 1 ||!o(q[0])) {
                    var r = q.map(k.getText).join('').replace(/\s+/g, ' ');
                    return r ? [this._createTextNode(r)] : [];
                } else {
                    q[0].style.cssText = '';
                    return;
                }
            };
        })()
    });
    e.exports = n;
}, null);
__d("DOMSelection", [], function(a, b, c, d, e, f) {
    (function() {
        var g = this, h = {
            isPreceding: function(n, o) {
                return o.compareDocumentPosition(n) & 2;
            },
            contains: function(n, o) {
                if (n.compareDocumentPosition != null) {
                    return n.compareDocumentPosition(o) & 16;
                } else 
                    return n.contains(o);
            },
            isCursorPreceding: function(n, o, p, q) {
                if (n === p)
                    return o <= q;
                if (h.isText(n) && h.isText(p))
                    return h.isPreceding(n, p);
                if (h.isText(n)&&!h.isText(p))
                    return !h.isCursorPreceding(p, q, n, o);
                if (!h.contains(n, p))
                    return h.isPreceding(n, p);
                if (n.childNodes.length <= o)
                    return false;
                if (n.childNodes[o] === p)
                    return 0 <= q;
                return h.isPreceding(n.childNodes[o], p);
            },
            isText: function(n) {
                return (n != null ? n.nodeType == 3 : false);
            },
            getChildIndex: function(n) {
                var o = 0;
                while (n = n.previousSibling)
                    o++;
                return o;
            }
        }, i = g.Selection = (function() {
            function n(o) {
                this.win = o;
            }
            n.prototype.hasSelection = function() {
                return n.hasSelection(this.win);
            };
            n.prototype.isBidirectional = function() {
                return n.isBidirectional(this.win);
            };
            n.prototype.getOrigin = function() {
                return n.getOrigin(this.win);
            };
            n.prototype.getFocus = function() {
                return n.getFocus(this.win);
            };
            n.prototype.getStart = function() {
                return n.getStart(this.win);
            };
            n.prototype.getEnd = function() {
                return n.getEnd(this.win);
            };
            n.prototype.trySelection = function(o, p, q, r) {
                return n.trySelection(this.win, o, p, q, r);
            };
            n.prototype.setSelection = function(o, p, q, r) {
                return n.setSelection(this.win, o, p, q, r);
            };
            n.prototype.clearSelection = function() {
                return n.clearSelection(this.win);
            };
            return n;
        })();
        function j() {
            if (g.document.selection && /MSIE 9\./.test(navigator.userAgent)) {
                return false;
            } else 
                return !!g.getSelection;
        }
        if (j()) {
            i.supported = true;
            i.hasSelection = function(n) {
                var o;
                return (o = n.getSelection()) && (o.focusNode != null) && (o.anchorNode != null);
            };
            i.isBidirectional = function(n) {
                return true;
            };
            i.getOrigin = function(n) {
                var o;
                if (!((o = n.getSelection()) && (o.anchorNode != null)))
                    return null;
                return [o.anchorNode, o.anchorOffset];
            };
            i.getFocus = function(n) {
                var o;
                if (!((o = n.getSelection()) && (o.focusNode != null)))
                    return null;
                return [o.focusNode, o.focusOffset];
            };
            i.getStart = function(n) {
                var o, p, q, r, s, t;
                if (!i.hasSelection(n))
                    return null;
                s = i.getOrigin(n), o = s[0], q = s[1];
                t = i.getFocus(n), p = t[0], r = t[1];
                if (h.isCursorPreceding(o, q, p, r))
                    return [o, q];
                return [p, r];
            };
            i.getEnd = function(n) {
                var o, p, q, r, s, t;
                if (!i.hasSelection(n))
                    return null;
                s = i.getOrigin(n), o = s[0], q = s[1];
                t = i.getFocus(n), p = t[0], r = t[1];
                if (h.isCursorPreceding(o, q, p, r))
                    return [p, r];
                return [o, q];
            };
            var k = function(n, o, p, q, s, t) {
                var u = o.getSelection();
                if (!u)
                    return;
                if (s == null)
                    s = p;
                if (t == null)
                    t = q;
                if (u.collapse && u.extend) {
                    u.collapse(p, q);
                    u.extend(s, t);
                } else {
                    r = o.document.createRange();
                    r.setStart(p, q);
                    r.setEnd(s, t);
                    if (n ||!i.hasSelection(o) || (r.endContainer === s && r.endOffset === t && r.startContainer === p && r.startOffset === q)) {
                        try {
                            u.removeAllRanges();
                        } catch (v) {}
                        u.addRange(r);
                    }
                }
            };
            i.setSelection = k.bind(i, true);
            i.trySelection = k.bind(i, false);
            i.clearSelection = function(n) {
                try {
                    var p = n.getSelection();
                    if (!p)
                        return;
                    p.removeAllRanges();
                } catch (o) {}
            };
            i.getText = function(n) {
                var o = n.getSelection();
                if (!o)
                    return;
                return o.toString();
            };
        } else if (g.document.selection) {
            var l = function(n, o, p) {
                var q, r, s, t, u;
                r = n.createElement('a');
                q = o.duplicate();
                q.collapse(p);
                u = q.parentElement();
                while (true) {
                    u.insertBefore(r, r.previousSibling);
                    q.moveToElementText(r);
                    if (!(q.compareEndPoints((p ? 'StartToStart' : 'StartToEnd'), o) > 0 && (r.previousSibling != null)))
                        break;
                }
                if (q.compareEndPoints((p ? 'StartToStart' : 'StartToEnd'), o)===-1 && r.nextSibling) {
                    q.setEndPoint((p ? 'EndToStart' : 'EndToEnd'), o);
                    s = r.nextSibling;
                    t = q.text.length;
                } else {
                    s = r.parentNode;
                    t = h.getChildIndex(r);
                }
                r.parentNode.removeChild(r);
                return [s, t];
            }, m = function(n, o, p, q, r) {
                var s, t, u, v, w;
                w = 0;
                s = h.isText(q) ? q : q.childNodes[r];
                t = h.isText(q) ? q.parentNode : q;
                if (h.isText(q))
                    w = r;
                v = n.createElement('a');
                t.insertBefore(v, s || null);
                u = n.body.createTextRange();
                u.moveToElementText(v);
                v.parentNode.removeChild(v);
                o.setEndPoint((p ? 'StartToStart' : 'EndToEnd'), u);
                return o[p ? 'moveStart': 'moveEnd']('character', w);
            };
            i.supported = true;
            i.hasSelection = function(n) {
                var o;
                if (!n.document.selection)
                    return false;
                o = n.document.selection.createRange();
                return o && o.parentElement().document === n.document;
            };
            i.getStart = function(n) {
                var o;
                if (!i.hasSelection(n))
                    return null;
                o = n.document.selection.createRange();
                return l(n.document, o, true);
            };
            i.getEnd = function(n) {
                var o;
                if (!i.hasSelection(n))
                    return null;
                o = n.document.selection.createRange();
                return l(n.document, o, false);
            };
            i.isBidirectional = function(n) {
                return false;
            };
            i.getOrigin = function(n) {
                return i.getStart(n);
            };
            i.getFocus = function(n) {
                return i.getEnd(n);
            };
            var k = function(n, o, p, q, r, s) {
                if (r == null)
                    r = p;
                if (s == null)
                    s = q;
                var t = o.document.body.createTextRange();
                m(o.document, t, false, r, s);
                m(o.document, t, true, p, q);
                return t.select();
            };
            i.setSelection = k.bind(i, true);
            i.trySelection = k.bind(i, false);
            i.clearSelection = function(n) {
                return n.document.selection.empty();
            };
            i.getText = function(n) {
                if (!i.hasSelection(n))
                    return null;
                var o = n.document.selection.createRange();
                return o && o.text;
            };
        } else 
            i.supported = false;
    }).call(this);
    e.exports = Selection;
}, null);
__d("StructuredInputSelection", ["DOM", "DOMSelection", "Vector", "StructuredInputUtil", "StructuredInputDOM"], function(a, b, c, d, e, f, g, h, i, j, k) {
    function l(n) {
        "use strict";
        var o = n.ownerDocument;
        this.window = o.defaultView || o.parentWindow;
        this.root = n;
        this.selection = false;
        this.start = new m(this, []);
        this.end = new m(this, []);
        this.update();
    }
    l.prototype.isSupported = function() {
        "use strict";
        return !!(h && h.hasSelection);
    };
    l.prototype.update = function() {
        "use strict";
        this.selection = false;
        if (this.isSupported() && this.root == document.activeElement)
            if (h.hasSelection(this.window)) {
                var n = h.getStart(this.window), o = h.getEnd(this.window), p = h.getFocus(this.window);
                this.start = this.makeMarker(n);
                this.end = this.makeMarker(o);
                this.backward = n[0] == p[0] && n[1] == p[1];
                this.selection = this.start.node && this.end.node;
            }
    };
    l.prototype.makeMarker = function(n) {
        "use strict";
        if (n[0] === this.root) {
            return new m(this, [this.root.childNodes[n[1]], 0]);
        } else 
            return new m(this, n);
    };
    l.prototype.getFocus = function() {
        "use strict";
        return this.backward ? this.start : this.end;
    };
    l.prototype.getOrigin = function() {
        "use strict";
        return this.backward ? this.end : this.start;
    };
    l.prototype.move = function(n) {
        "use strict";
        if (this.selection) {
            this.start.move(n);
            this.start.snap();
            this.end.setPosition(this.start);
            return this.apply();
        }
    };
    l.prototype.expand = function(n) {
        "use strict";
        if (this.selection) {
            if (h.isBidirectional()) {
                this.start.move(!n);
                this.start.snap();
                this.end.move(n);
                this.end.snap();
            }
            return this.apply();
        }
    };
    l.prototype.getText = function() {
        "use strict";
        if (this.selection && this.isSupported()) {
            var n = h.getText(this.window);
            return n;
        }
    };
    l.prototype.getOffset = function() {
        "use strict";
        if (this.selection)
            return this.start.rootOffset;
    };
    l.prototype.getLength = function() {
        "use strict";
        return (this.getText() || "").length;
    };
    l.prototype.setPosition = function(n, o) {
        "use strict";
        this.backward = false;
        this.selection = true;
        this.start.setPosition(j.getMarkerAtOffset(this.root, n));
        this.start.snap();
        if (o > 0) {
            this.end.setPosition(j.getMarkerAtOffset(this.root, n + o));
            this.end.snap();
        } else 
            this.end.setPosition(this.start);
        return this.apply();
    };
    l.prototype.hasRange = function() {
        "use strict";
        return this.selection && (this.start.node != this.end.node || this.start.offset != this.end.offset);
    };
    l.prototype.scrollToFocus = function() {
        "use strict";
        var n = 5, o = this.getFocus();
        if (o.node) {
            var p = i.getElementDimensions(this.root).x, q = this.root.scrollLeft, r = o.node.offsetLeft + o.node.offsetWidth;
            if (r - q < n) {
                this.root.scrollLeft = r - n;
            } else if (r - q > p - n)
                this.root.scrollLeft = r - p + n;
        }
    };
    l.prototype.apply = function() {
        "use strict";
        if (this.start.hasChanged() || this.end.hasChanged()) {
            var n = this.getOrigin().getMarker(true), o = this.getFocus().getMarker(true);
            this.selection = this.selection && n && n.node && o && o.node;
            if (this.selection && this.isSupported()) {
                this.start.changed = false;
                this.end.changed = false;
                h.trySelection(this.window, n.node, n.offset, o.node, o.offset);
                return true;
            }
        }
    };
    l.prototype.markDirty = function(n) {
        "use strict";
        if (g.contains(n, this.start.node, n))
            this.start.changed = true;
        if (g.contains(n, this.end.node, n))
            this.end.changed = true;
    };
    function m(n, o) {
        "use strict";
        this.selection = n;
        this.node = o[0];
        this.offset = o[1];
        this.rootOffset = this.getRootOffset(o[0], o[1]);
        this.sibling = this.node && this.node.previousSibling;
        this.changed = false;
    }
    m.prototype.hasChanged = function() {
        "use strict";
        return this.changed ||!this.isNodeValid();
    };
    m.prototype.isNodeValid = function() {
        "use strict";
        if (k.getLength(this.node) > this.offset) {
            var n = this.node;
            while (n = n.parentNode)
                if (n == this.selection.root)
                    return true;
        }
    };
    m.prototype.getMarker = function(n) {
        "use strict";
        if (this.isNodeValid() && ((n&&!this.node.firstChild) || (!n && this.node.parentNode == this.selection.root))) {
            return this;
        } else 
            return k.getMarker(this.selection.root, this.rootOffset, n);
    };
    m.prototype.move = function(n) {
        "use strict";
        this.node && this.setPosition(j.nextMarkerBoundary(this.getMarker(false), n, 'select'));
    };
    m.prototype.snap = function() {
        "use strict";
        this.node && this.setPosition(j.snapMarkerToText(this.getMarker(false), 'select'));
    };
    m.prototype.setPosition = function(n) {
        "use strict";
        if (n.offset != this.offset || n.node != this.node) {
            this.changed = true;
            this.node = n.node;
            this.offset = n.offset;
            this.rootOffset = this.getRootOffset(this.node, this.offset);
        }
    };
    m.prototype.getRootOffset = function(n, o) {
        "use strict";
        var p = 0, q = 5;
        while (n && p++<q)
            if (n === this.selection.root) {
                return o;
            } else {
                var r = n;
                while (r = r.previousSibling)
                    o += k.getLength(r);
                    n = n.parentNode;
            }
    };
    e.exports = l;
}, null);
__d("StructuredInput", ["Arbiter", "ArbiterMixin", "CSS", "DOM", "DataStore", "Event", "Input", "InputSelection", "JSLogger", "Keys", "Locale", "Parent", "StructuredInputCleaner", "StructuredInputDOM", "StructuredInputSelection", "StructuredInputUtil", "Style", "UserAgent_DEPRECATED", "createArrayFrom", "createObjectFrom", "cx", "csx", "emptyFunction", "getActiveElement", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea) {
    var fa = 229, ga = z([p.UP, p.DOWN, p.LEFT, p.RIGHT, p.HOME, p.END]), ha = z([p.BACKSPACE, p.DELETE]), ia = z([p.SPACE, p.RETURN]), ja = z('IUB'.split('').map(function(ra) {
        return ra.charCodeAt(0);
    })), ka = x.firefox(), la = x.ie(), ma = x.webkit(), na = ea(h);
    for (var oa in na)
        if (na.hasOwnProperty(oa))
            qa[oa] = na[oa];
    var pa = na === null ? null: na.prototype;
    qa.prototype = Object.create(pa);
    qa.prototype.constructor = qa;
    qa.__superConstructor__ = na;
    function qa(ra) {
        "use strict";
        k.set(ra, 'StructuredInput', this);
        this._root = ra;
        this._richInput = j.find(ra, "._586i");
        this._textInput = j.find(ra, "._586f");
        this._placeholderText = j.scry(ra, "._586j")[0];
        this._hintText = j.find(ra, "._586k");
        this._contentWidth = null;
        this._richWidth = null;
        this._hintNodes = [];
        g.subscribe(o.DUMP_EVENT, function(sa, ta) {
            ta.structuredInputState = {
                initInputsFinished: !!this._initInputsFinished,
                initEventsFinished: !!this._initEventsFinished,
                cleanInputPreTogglesFinished: !!this._cleanInputPreTogglesFinished,
                cleanInputFinished: !!this._cleanInputFinished,
                elements: {
                    richInput: !!this._richInput,
                    textInput: !!this._textInput,
                    placeholderText: !!this._placeholderText,
                    hintText: !!this._hintText
                }
            };
        }.bind(this));
        this.init();
    }
    qa.prototype.init = function() {
        "use strict";
        this.init = ca;
        this._initSelection();
        this._initCleaner();
        this._initInputs();
        this._initInputsFinished = true;
        this._initEvents();
        this._initEventsFinished = true;
        this._scheduledCleanInput = false;
        this._richChanged = false;
        this._textChanged = false;
        this._selectionChanged = false;
        this._selectionIgnore = false;
        this._imeMode = false;
        this.cleanInput();
        this.inform('init', null, g.BEHAVIOR_PERSISTENT);
    };
    qa.prototype._initInputs = function() {
        "use strict";
        this._richInput.contentEditable = true;
        this._richInput.spellcheck = false;
        this._richInput.tabIndex = 1;
        this._textInput.tabIndex =- 1;
        this._multiline = this._textInput.nodeName == 'TEXTAREA';
        if (!i.shown(this._richInput)) {
            var ra = n.get(this._textInput), sa = da() === this._textInput;
            j.setContent(this._richInput, t.encodeText(m.getValue(this._textInput)));
            i.hide(this._textInput);
            i.show(this._richInput);
            this.cleanInput();
            if (sa) {
                this._richInput.focus();
                this.setSelection({
                    offset: ra.start,
                    length: ra.end - ra.start
                });
            }
        }
        this.togglePlaceholder();
        this._toggleHint();
    };
    qa.prototype._initEvents = function() {
        "use strict";
        var ra = null, sa = false, ta = function() {
            this._richChanged = true;
            sa || this.scheduleCleanInput(true);
        }.bind(this), ua = function() {
            this._textChanged = true;
            sa || this.scheduleCleanInput(false);
        }.bind(this), va = function() {
            this._selectionChanged = true;
            this.scheduleCleanInput(false);
        }.bind(this), wa = function() {
            this._imeMode = true;
            this._placeholderText && i.hide(this._placeholderText);
            i.hide(this._hintText);
        }.bind(this), xa = function() {
            this._imeMode = false;
            this._richChanged = true;
            this.cleanInput();
        }.bind(this);
        l.listen(this._richInput, 'keydown', function(ya) {
            ra = ya.keyCode;
            if (ya.ctrlKey && ya.keyCode in ja) {
                return ya.kill();
            } else if (ya.keyCode in ga) {
                va();
            } else if (ya.keyCode === p.BACKSPACE && this._deleteTrailingChunk()) {
                this._richChanged = true;
                this.cleanInput();
                return ya.kill();
            } else if (ya.keyCode in ha) {
                ta();
            } else if (ya.keyCode == fa)
                wa();
        }.bind(this));
        l.listen(this._richInput, 'keypress', function(ya) {
            if (ya.keyCode == p.RETURN) {
                this._multiline && this._insertText("\n");
                return ya.kill();
            } else if (!this._selectionChanged && this._selectionIsText()) {
                ua();
            } else 
                ta();
        }.bind(this));
        if (!sa) {
            l.listen(this._richInput, 'keyup', function(ya) {
                if ((this._imeMode || ya.keyCode != ra) && ya.keyCode in ia) {
                    xa();
                    return ya.kill();
                } else if (this._imeMode) {
                    this._textChanged = true;
                    this.cleanInput();
                }
            }.bind(this));
            if (ka)
                l.listen(this._richInput, 'input', function() {
                    this._textChanged = true;
                    this.cleanInput();
                }.bind(this));
        } else {
            l.listen(this._richInput, 'compositionstart', wa);
            l.listen(this._richInput, 'compositionend', function() {
                setTimeout(xa, 0);
            });
            l.listen(this._richInput, 'input', function() {
                this._textChanged = true;
                if (!this._imeMode)
                    if (!this._richChanged) {
                        this.cleanInput();
                    } else 
                        this.scheduleCleanInput();
            }.bind(this));
        }
        l.listen(document, 'selectionchange', function() {
            if (this._selectionIgnore) {
                this._selectionIgnore = false;
            } else 
                this._selectionChanged = true;
        }.bind(this));
        l.listen(this._richInput, 'mousedown', function() {
            this._selectionChanged = true;
            this._selectionLength = 0;
            this._selectionOffset = 0;
        }.bind(this));
        l.listen(this._richInput, 'mouseup', function() {
            this._selectionChanged = true;
            this.scheduleCleanInput();
        }.bind(this));
        l.listen(this._richInput, 'cut', function() {
            this._richChanged = true;
            this.scheduleCleanInput(false);
        }.bind(this));
        l.listen(this._richInput, 'paste', function(ya) {
            this._richChanged = true;
            this.scheduleCleanInput(true);
        }.bind(this));
        l.listen(this._richInput, 'drop', function(ya) {
            this.focus();
            this.selectAll();
            this._insertClipboard(ya && ya.dataTransfer);
            return ya.kill();
        }.bind(this));
        l.listen(this._richInput, 'dragover', function(ya) {
            ya.dataTransfer.dropEffect = 'move';
            ya.dataTransfer.effectAllowed = 'move';
            return ya.kill();
        });
        l.listen(this._richInput, 'focus', function(ya) {
            this._toggleHint();
            this.inform('focus');
        }.bind(this));
        l.listen(this._richInput, 'blur', function(ya) {
            i.hide(this._hintText);
            this._imeMode = false;
            this._richChanged = true;
            this.scheduleCleanInput(false);
            this.inform('blur');
        }.bind(this));
    };
    qa.prototype._initCleaner = function() {
        "use strict";
        this._cleaner = new s(this._richInput, this._selection, true);
    };
    qa.prototype._initSelection = function() {
        "use strict";
        this._selection = new u(this._richInput);
        this._selectionLength = 0;
        this._selectionOffset = 0;
    };
    qa.prototype._insertClipboard = function(ra) {
        "use strict";
        if (ra && typeof ra.getData === 'function') {
            var sa = ra.getData('Text');
            this._insertText(sa);
        }
    };
    qa.prototype._deleteTrailingChunk = function(ra) {
        "use strict";
        var sa = this.getSelection();
        if (sa.length > 0 || sa.offset === 0)
            return false;
        var ta = this.getSelection().offset - 1, ua = v.getMarkerAtOffset(this._richInput, ta);
        if (ua && t.isEntityNode(ua.node) && v.getGrouping(ua.node, 'select') !== 'none') {
            j.remove(ua.node);
            return true;
        }
        return false;
    };
    qa.prototype._selectionIsText = function() {
        "use strict";
        var ra = this._selection.start.node, sa = this._selection.end.node;
        return ra && ra === sa&&!t.isEntityNode(ra)&&!t.isEntityNode(ra.parentNode);
    };
    qa.prototype._insertText = function(ra) {
        "use strict";
        if (ra) {
            var sa = j.create('div', {}, ra);
            return this._insertNodes(sa);
        }
    };
    qa.prototype._insertHTML = function(ra) {
        "use strict";
        if (ra) {
            var sa = j.create('div'), ta = new s(sa, null, false);
            sa.innerHTML = ra;
            ta.clean();
            return this._insertNodes(sa);
        }
    };
    qa.prototype._insertNodes = function(ra) {
        "use strict";
        if (document.selection) {
            document.selection.createRange().pasteHTML(ra.innerHTML);
        } else 
            document.execCommand('insertHTML', false, ra.innerHTML);
        this._richChanged = true;
        this.cleanInput();
    };
    qa.prototype.togglePlaceholder = function(ra) {
        "use strict";
        if (!this._placeholderText)
            return;
        var sa = t.getLength(this._richInput) === 0;
        if (ra && sa) {
            i.show(this._placeholderText);
        } else 
            i.conditionShow(this._placeholderText, sa&&!this._imeMode);
    };
    qa.prototype._toggleHint = function() {
        "use strict";
        var ra = y(this._hintNodes), sa = null, ta = '', ua = t.getText(this._richInput).toLowerCase();
        if (!this.hasFocus())
            return;
        if (this._contentOverflows()) {
            i.hide(this._hintText);
            return;
        }
        while (ra.length && ta.length < ua.length) {
            sa = ra.shift();
            ta += t.getText(sa);
        }
        if (ua.length && ta.substr(0, ua.length).toLowerCase() == ua.toLowerCase()) {
            j.setContent(this._hintText, y(this._richInput.cloneNode(true).childNodes).filter(function(wa) {
                return wa.tagName !== 'BR';
            }));
            var va = t.createTextNode(ta.substr(ua.length));
            ra.unshift(va);
            j.appendContent(this._hintText, j.create('span', {
                className: "_586h"
            }, ra));
            i.show(this._hintText);
            i.hide(this._placeholderText);
        } else 
            i.hide(this._hintText);
    };
    qa.prototype._contentOverflows = function() {
        "use strict";
        if (this._richWidth === null)
            this._richWidth = this._richInput.clientWidth;
        if (this._contentWidth === null) {
            var ra = this._richInput.lastChild;
            this._contentWidth = j.isElementNode(ra) ? ra.offsetLeft + ra.offsetWidth : 0;
        }
        return this._contentWidth > this._richWidth;
    };
    qa.prototype._forceTop = function() {
        "use strict";
        if (!this._multiline)
            this._richInput.scrollTop = 0;
        this._root.scrollTop = 0;
    };
    qa.prototype._createStructureNodes = function(ra) {
        "use strict";
        return ra.map(function(sa) {
            return sa.uid || (sa.type && sa.type != 'text') ? t.createEntityNode(sa, sa.display || {}) : t.createTextNode(sa.text);
        }.bind(this));
    };
    qa.prototype._suppressInput = function() {
        "use strict";
        if (ka || la) {
            if (this._richClean)
                return;
            this._richClean = this._richInput.cloneNode(true);
            this._richClean.contentEditable = false;
            this._root.insertBefore(this._richClean, this._richInput.nextSibling);
            this._richClean.scrollLeft = this._richInput.scrollLeft;
            w.set(this._richInput, 'padding', 0);
            w.set(this._richInput, 'height', 0);
        }
    };
    qa.prototype._revealInput = function() {
        "use strict";
        if (!this._richClean)
            return;
        w.set(this._richInput, 'height', '');
        w.set(this._richInput, 'padding', '');
        this._root.removeChild(this._richClean);
        this.focus();
        this._richClean = null;
    };
    qa.prototype._cleanInput = function() {
        "use strict";
        var ra;
        if (this._textChanged&&!this._richChanged) {
            this._selection.update();
            ra = 'change';
        } else if (this._richChanged || this._selectionChanged) {
            this._selection.update();
            if (this._richChanged) {
                this._contentWidth = null;
                this._cleaner.clean();
                this._cleaner.endOnText();
                this._selection.apply();
                ra = 'change';
            }
            if (this._selectionChanged) {
                this._cleanSelection();
                if (this._selectionLength ||!this._richChanged)
                    ra = 'select';
            }
        }
        this._revealInput();
        this._forceTop();
        this._cleanInputPreTogglesFinished = true;
        if (this._richChanged || this._textChanged) {
            this.togglePlaceholder();
            this._toggleHint();
        }
        this._selectionIgnore = true;
        this._selectionChanged = false;
        this._richChanged = false;
        this._textChanged = false;
        this._cleanInputFinished = true;
        ra && this.inform(ra);
    };
    qa.prototype._cleanSelection = function() {
        "use strict";
        var ra = this._selection.getLength(), sa = this._selection.getOffset();
        if (ra) {
            this._selection.expand(ra >= this._selectionLength);
            ra = this._selection.getLength();
            sa = this._selection.getOffset();
        }
        this._selectionLength = ra;
        this._selectionOffset = sa;
    };
    qa.prototype.cleanInput = function() {
        "use strict";
        this._scheduledCleanInput || this._cleanInput();
    };
    qa.prototype.scheduleCleanInput = function(ra) {
        "use strict";
        ra && this._suppressInput();
        if (!this._scheduledCleanInput) {
            this._scheduledCleanInput = true;
            setTimeout(function() {
                this._cleanInput();
                this._scheduledCleanInput = false;
            }.bind(this), 0);
        }
    };
    qa.prototype.setEnabled = function(ra) {
        "use strict";
        this._textInput.disabled=!ra;
        this._richInput.contentEditable = ra;
    };
    qa.prototype.getRoot = function() {
        "use strict";
        return this._root;
    };
    qa.prototype.getRichInput = function() {
        "use strict";
        return this._richInput;
    };
    qa.prototype.getEnabled = function() {
        "use strict";
        return !this._textInput.disabled;
    };
    qa.prototype.getText = function() {
        "use strict";
        return t.getDecodedText(this._richInput);
    };
    qa.prototype.setText = function(ra) {
        "use strict";
        j.setContent(this._richInput, t.createTextNode(ra));
        this._richChanged = false;
        this._selectionChanged = false;
        this.inform('change');
    };
    qa.prototype.setHint = function(ra) {
        "use strict";
        this._hintNodes = this._createStructureNodes(ra);
        this._toggleHint();
    };
    qa.prototype.getStructure = function() {
        "use strict";
        var ra = [];
        y(this._richInput.childNodes).forEach(function(sa) {
            var ta=!j.isTextNode(sa), ua = t.getDecodedText(sa);
            ua.length && ra.push({
                text: ua,
                uid: ta ? sa.getAttribute('data-uid'): null,
                type: (ta && sa.getAttribute('data-type')) || 'text'
            });
        }.bind(this));
        return ra;
    };
    qa.prototype.setStructure = function(ra) {
        "use strict";
        j.setContent(this._richInput, this._createStructureNodes(ra));
        this._cleaner.clean();
        this._cleaner.endOnText();
        this.togglePlaceholder();
        this._toggleHint();
        this._richChanged = false;
        this._selectionChanged = false;
        this.inform('change');
    };
    qa.prototype.getContentDimensions = function() {
        "use strict";
        var ra = this._richInput.lastChild;
        return {
            width: ra ? ra.offsetLeft + ra.offsetWidth: 0,
            height: ra ? ra.offsetTop + ra.offsetHeight: 0
        };
    };
    qa.prototype.getSelection = function() {
        "use strict";
        if (this._selection)
            return {
                offset: this._selection.getOffset(),
                length: this._selection.getLength()
            };
    };
    qa.prototype.setSelection = function(ra) {
        "use strict";
        if (this.hasFocus() && this._selection) {
            this._selection.update();
            this._selection.setPosition(ra.offset, ra.length);
            this._selection.scrollToFocus();
            this._selectionChanged = false;
            this.inform('select');
        }
    };
    qa.prototype.moveSelectionToEnd = function() {
        "use strict";
        this.setSelection({
            length: 0,
            offset: t.getLength(this._richInput)
        });
    };
    qa.prototype.isSelectionAtEnd = function() {
        "use strict";
        var ra = this.getSelection().offset, sa = t.getLength(this._richInput);
        return ra >= sa;
    };
    qa.prototype.selectAll = function() {
        "use strict";
        this.setSelection({
            offset: 0,
            length: t.getLength(this._richInput)
        });
    };
    qa.prototype.hasFocus = function() {
        "use strict";
        return j.contains(this._root, document.activeElement);
    };
    qa.prototype.focus = function() {
        "use strict";
        this._richInput.focus();
    };
    qa.prototype.blur = function() {
        "use strict";
        var ra = {
            position: 'absolute',
            top: 0,
            width: '1px',
            height: '1px'
        };
        if (q.isRTL()) {
            ra.right = '-100px';
        } else 
            ra.left = '-100px';
        var sa = j.create('input', {
            type: 'text',
            tabIndex: - 1,
            style: ra
        });
        j.appendContent(this._root, sa);
        var ta = function() {
            if (this.hasFocus() || (ma && document.activeElement === document.body)) {
                sa.focus();
                sa.blur();
            }
        };
        this.blur = ta;
        this.blur();
    };
    qa.getInstance = function(ra) {
        var sa = r.byClass(ra, "_586g");
        if (!sa)
            throw new Error('No DOMElement structured input found using ' + ra);
        return k.get(sa, 'StructuredInput') || new qa(sa);
    };
    e.exports = qa;
}, null);
__d("FacebarTypeaheadInput", ["ArbiterMixin", "csx", "DOM", "FacebarStructuredText", "StructuredInput", "Vector", "copyProperties", "Locale", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = {
        text: {
            className: "text",
            group: "all",
            select: "none"
        },
        ent: {
            className: "entity",
            group: "all",
            select: "group"
        },
        'ent:hashtag_exact': {
            className: "entity",
            group: "hashtag",
            select: "none"
        }
    };
    function q(v) {
        return m(v.toStruct(), {
            display: p[v.getType()] || p[v.getTypePart(0)]
        });
    }
    var r = o(g);
    for (var s in r)
        if (r.hasOwnProperty(s))
            u[s] = r[s];
    var t = r === null ? null: r.prototype;
    u.prototype = Object.create(t);
    u.prototype.constructor = u;
    u.__superConstructor__ = r;
    function u(v) {
        "use strict";
        this.root = v;
        this.input = k.getInstance(v);
        this.value = null;
        this.selection = {
            offset: 0,
            length: 0
        };
        this.resetOnChange = true;
        this.initEvents();
    }
    u.prototype.initEvents = function() {
        "use strict";
        var v = function(w, x) {
            this.inform(w, x);
        }.bind(this);
        this.input.subscribe('blur', v);
        this.input.subscribe('focus', v);
        this.input.subscribe('change', function(w, x) {
            if (this.resetOnChange)
                this.value = null;
            this.inform('change', x);
        }.bind(this));
    };
    u.prototype.togglePlaceholder = function(v) {
        "use strict";
        return this.input.togglePlaceholder(v);
    };
    u.prototype.focus = function() {
        "use strict";
        this.input.focus();
    };
    u.prototype.blur = function() {
        "use strict";
        this.input.blur();
    };
    u.prototype.getElement = function() {
        "use strict";
        return this.root;
    };
    u.prototype.getRawPlaceholderElement = function() {
        "use strict";
        return i.find(this.root, "._586j");
    };
    u.prototype.getRawInputElement = function() {
        "use strict";
        return i.scry(this.root, "._586i")[0];
    };
    u.prototype.getValue = function() {
        "use strict";
        if (this.value === null)
            this.value = j.fromStruct(this.input.getStructure());
        return this.value;
    };
    u.prototype.getLength = function() {
        "use strict";
        return this.getValue().getLength();
    };
    u.prototype.resetPlaceholder = function() {
        "use strict";
        this.input.resetPlaceholder();
    };
    u.prototype.setValue = function(v) {
        "use strict";
        this.value = v;
        this.resetOnChange = false;
        var w = v.toArray().map(q);
        this.input.setStructure(w);
        this.input.setSelection({
            offset: v.getLength(),
            length: 0
        });
        this.resetOnChange = true;
    };
    u.prototype.storeSelection = function() {
        "use strict";
        this.selection = this.input.getSelection();
    };
    u.prototype.restoreSelection = function() {
        "use strict";
        if (this.selection)
            this.input.setSelection(this.selection);
    };
    u.prototype.setHint = function(v) {
        "use strict";
        var w = v&&!v.hasRTL()&&!n.isRTL() ? v.toArray().map(q): [];
        this.input.setHint(w);
    };
    u.prototype.isSelectionAtEnd = function() {
        "use strict";
        return this.input.isSelectionAtEnd();
    };
    u.prototype.selectInput = function(v) {
        "use strict";
        this.input.setSelection({
            offset: v || 0,
            length: this.getLength()
        });
    };
    u.prototype.getEndOffset = function() {
        "use strict";
        var v = l.getElementDimensions(this.root), w = this.input.getContentDimensions();
        return Math.min(v.x, w.width);
    };
    m(u.prototype, {
        events: ['change', 'focus', 'blur']
    });
    e.exports = u;
}, null);
__d("FacebarTypeaheadWebSearch", ["startsWith", "FacebarStructuredFragment", "FacebarStructuredText"], function(a, b, c, d, e, f, g, h, i) {
    var j = new h({
        type: 'ent:websuggestion',
        text: 'Web Search: ',
        uid: null
    }), k = j.getText().toLowerCase().trim();
    function l(o, p) {
        if (!o || o.type !== 'websuggestion')
            return;
        var q = p.getValue().toArray();
        q.forEach(function(r) {
            if (r.isType('ent')&&!r.isType('ent', 'user') && r.getUID())
                if (o.extra_uri_params) {
                    o.extra_uri_params.qh = r.getUID();
                    return;
                }
        });
    }
    function m(o) {
        return o.getType() === j.getType();
    }
    function n(o) {
        "use strict";
        this._core = o.getCore();
        this._view = o.getView();
        this._input = this._core.input;
        this._isEnabled = false;
    }
    n.prototype.enable = function() {
        "use strict";
        this._isEnabled = true;
        this.changeListener = this._input.subscribe('change', this._changeWebSearch.bind(this));
        this.lockListener = this._input.subscribe('shortcut', this._lockWebSearch.bind(this));
        this.beforeSelectListener = this._view.subscribe('beforeSelect', this._beforeSelect.bind(this));
        this.beforeRenderListener = this._view.subscribe('beforeRender', this._beforeRender.bind(this));
    };
    n.prototype._changeWebSearch = function() {
        "use strict";
        var o = this._input.getValue(), p = o.toArray(), q = p[0];
        if (q && q.getType() === 'text')
            if (g(q.getText().toLowerCase(), k)) {
                p.splice(0, 1, j, new h({
                    text: q.getText().substr(k.length).replace(/^ /, '')
                }));
                this._replaceFragments(p);
            } else if (p.length > 1 && p.some(m)) {
                var r = '';
                p.forEach(function(s) {
                    if (m(s))
                        return;
                        r += s.getText();
                    });
                    this._input.storeSelection();
                    this._input.setValue(i.fromString(r));
                    this._input.restoreSelection();
            }
    };
    n.prototype._replaceFragments = function(o) {
        "use strict";
        this._input.storeSelection();
        this._input.setValue(new i(o));
        this._input.restoreSelection();
    };
    n.prototype._beforeSelect = function(o, p) {
        "use strict";
        l(p.selected, this._input);
        return true;
    };
    n.prototype._beforeRender = function(o, p) {
        "use strict";
        var q = this._input.getValue().toArray()[0], r = q && m(q);
        p.results.forEach(function(s) {
            if (s.type === 'websuggestion')
                s.isLockedWebSearchMode = r;
        });
        return true;
    };
    n.prototype._lockWebSearch = function(o, p) {
        "use strict";
        if (p.shift) {
            var q = this._input.getValue().toArray()[0];
            if (!q ||!m(q))
                this._input.setValue(new i([j]));
        }
    };
    n.prototype.disable = function() {
        "use strict";
        this.beforeSelectListener.unsubscribe();
        this.changeListener.unsubscribe();
        this.lockListener.unsubscribe();
        this.beforeRenderListener.unsubscribe();
        this._isEnabled = false;
    };
    n.addPrefix = function(o) {
        "use strict";
        var p = m(o.getFragment(0)) || g(o.getFragment(0).getText().toLowerCase(), k);
        if (!p) {
            var q = [j].concat(o.toArray());
            return new i(q);
        } else 
            return o;
    };
    e.exports = n;
}, null);
__d("FacebarTypeaheadCore", ["Animation", "Arbiter", "ArbiterMixin", "Base64", "DOM", "Event", "FacebarGlobalOptions", "FacebarJSConstants", "FacebarKeywordSearchUtils", "FacebarResultStoreUtils", "FacebarStructuredText", "FacebarTypeaheadInput", "FacebarTypeaheadWebSearch", "Keys", "KeywordsSearchResultConfig", "Parent", "Style", "URI", "arrayContains", "copyProperties", "cx", "csx", "getActiveElement", "invariant", "mixin", "startsWith"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa) {
    var ga = ea(i);
    for (var ha in ga)
        if (ga.hasOwnProperty(ha))
            ja[ha] = ga[ha];
    var ia = ga === null ? null: ga.prototype;
    ja.prototype = Object.create(ia);
    ja.prototype.constructor = ja;
    ja.__superConstructor__ = ga;
    function ja(ka) {
        "use strict";
        z(this, ka);
    }
    ja.prototype.init = function(ka, la, ma) {
        "use strict";
        if (window.getSelection === null)
            throw new Error('Facebar: window.getSelection is null!');
        this.init = function() {};
        this.data = ka;
        this.view = la;
        this.root = ma;
        this.windowFocused = true;
        this.isFocused = false;
        this.hoverAnimation = null;
        this.stickyQuery = null;
        this.settedQuery = null;
        this.selectedQuery = null;
        this.currentQuery = null;
        this.initSubcomponents();
        this.initEvents();
        this.checkValue();
    };
    ja.prototype.initSubcomponents = function() {
        "use strict";
        var ka = k.find(this.root, "._5861");
        this.input = new r(ka);
        this.view.setInputElement(this.input.getRawInputElement());
    };
    ja.prototype.initEvents = function() {
        "use strict";
        l.listen(this.root, 'keydown', this.keydown.bind(this));
        l.listen(this.root.parentNode, 'mousedown', this.mousedown.bind(this));
        l.listen(this.view.getElement(), 'mousedown', this.mousedown.bind(this));
        l.listen(window, 'focus', this.focusWindow.bind(this));
        l.listen(window, 'blur', this.blurWindow.bind(this));
        this.view.subscribe('select', this.selectView.bind(this));
        this.view.subscribe('highlight', this.highlightView.bind(this));
        this.view.subscribe('render', this.highlightView.bind(this));
        this.view.subscribe('hideHelp', this.performQuery.bind(this));
        this.input.subscribe('focus', this.focusInput.bind(this));
        this.input.subscribe('blur', this.blurInput.bind(this));
        this.input.subscribe('change', this.changeInput.bind(this));
        this.data.subscribe('activity', this.typeaheadActivity.bind(this));
        this.data.subscribe('respond', this.completeData.bind(this));
        this.data.subscribe('nullstateReady', this.performQueryIfVisible.bind(this));
        setTimeout(this.initFocus.bind(this), 0);
    };
    ja.prototype.initFocus = function() {
        "use strict";
        if (!this.lazyFocused && k.contains(this.input.root, ca())) {
            this.lazyFocused = true;
            this.isFocused = true;
            this._newSession();
            this.inform('focus', {
                catchup: true
            });
            this.open();
        }
    };
    ja.prototype.cleanQuery = function(ka) {
        "use strict";
        ka = z({}, ka) || {};
        if (!ka.structure)
            ka.structure = new q();
        if (!m.allowGrammar || n.nonGrammarTypes[ka.type])
            ka.structure = q.fromString(ka.structure.toString());
        da(ka.structure instanceof q);
        if (ka.type == 'websuggestion' && m.allowGrammar && m.webSearchLockedInMode)
            ka.structure = s.addPrefix(ka.structure);
        return ka;
    };
    ja.prototype._unlockQuery = function() {
        "use strict";
        var ka = this.input.getValue();
        if (ka.hasType('ent') && ka.trim().getCount() === 1) {
            this.input.storeSelection();
            this.input.setValue(q.fromString(ka.toString()));
            this.input.restoreSelection();
        }
    };
    ja.prototype.setPageQuery = function(ka) {
        "use strict";
        ka = this.cleanQuery(ka);
        var la = this.input.getValue(), ma = ka.structure, na=!ma.isEmptyOrWhitespace() && (la.isEmptyOrWhitespace() || la.toString().trim() == ma.toString().trim());
        return this.selectQuery(ka, na);
    };
    ja.prototype.selectQuery = function(ka, la) {
        "use strict";
        la = la !== false;
        ka = this.cleanQuery(ka);
        if (la ||!this.selectedQuery) {
            if (la || this.getValue().isEmptyOrWhitespace())
                this.setQuery(ka);
            this.selectedQuery = ka;
        }
        return ka;
    };
    ja.prototype.completeSelection = function() {
        "use strict";
        var ka = this.view.getSelection();
        if (ka&&!ka.search) {
            this.data.saveResult(ka);
            ka.structure = ka.structure.pad();
            this.setQuery(ka);
            return true;
        }
    };
    ja.prototype.setQuery = function(ka, la) {
        "use strict";
        ka = this.cleanQuery(ka);
        if (ka.structure.hasType('blank'))
            ka.structure = new q(ka.structure.toArray().filter(function(ma) {
                return ma.getType() != 'blank';
            }));
        if (m.graphSearchV2) {
            this.input.setValue(q.fromString(ka.structure.toString()));
        } else 
            this.input.setValue(ka.structure);
        this.settedQuery = ka;
        this.stickyQuery = la === false ? this.stickyQuery : ka;
        this.checkValue();
    };
    ja.prototype.checkValue = function() {
        "use strict";
        if (this.value && this.value.getHash() == this.input.getValue().getHash())
            return;
        this.checkBlockedSearch();
        this.performQueryIfVisible();
    };
    ja.prototype.checkBlockedSearch = function() {
        "use strict";
        var ka = this.input.getValue().toString().toLocaleLowerCase();
        if (!this.data.blockees ||!(this.data.blockees.hasOwnProperty(ka))) {
            this.view.hideBlockNotification();
        } else 
            this.view.showBlockNotification(this.data.blockees[ka]);
    };
    ja.prototype.isNullState = function() {
        "use strict";
        return (this.input.getValue().getHash() === '');
    };
    ja.prototype.performQueryIfVisible = function() {
        "use strict";
        if (!this.view.visible)
            return;
        this.value = this.nextQuery = this.getValue();
        this.performQuery();
    };
    ja.prototype.performQuery = function() {
        "use strict";
        if (m.graphSearchV2)
            this.view.resetIndex();
        this.data.query(this.nextQuery);
        this.currentQuery = this.nextQuery;
    };
    ja.prototype.requery = function() {
        "use strict";
        if (this.currentQuery)
            this.data.query(this.currentQuery);
    };
    ja.prototype.executeQuery = function(ka) {
        "use strict";
        ka = this.cleanQuery(ka);
        var la = this.inform('execute', ka), ma = this.getSessionID();
        this.close();
        if (m.allowGrammar) {
            this.selectQuery(ka);
        } else 
            this.selectQuery();
        if (!la)
            this._navigateToQuery(ka, ma);
    };
    ja.prototype.getSearchType = function() {
        "use strict";
        return 'facebar';
    };
    ja.prototype._newSession = function() {
        "use strict";
        if (this._sessionID != null)
            return;
        this._sessionID = Math.random().toString();
        this.inform('session', this._sessionID, h.BEHAVIOR_STATE);
    };
    ja.prototype._closeSession = function() {
        "use strict";
        this._sessionID = null;
        this.inform('session', null, h.BEHAVIOR_STATE);
    };
    ja.prototype.getSessionID = function() {
        "use strict";
        return this._sessionID;
    };
    ja.prototype._navigateToQuery = function(ka, la) {
        "use strict";
        var ma = this.data.facebarConfig;
        if (ka.uri) {
            ka.uri.addQueryData(ka.extra_uri_params);
            ka.uri.addQueryData({
                ref: 'br_tf'
            });
            if (ka.structure && (ka.type == 'websuggestion' || ka.type == u.result_type || (ka.type == 'grammar' && (!ma || fa(ka.uri.getPath(), ma.search_path))))) {
                var na = this.data.getRawStructure(ka.structure).text_form, oa = j.encode(encodeURIComponent(na)).replace(/\=+$/, ''), pa = {
                    sid: la,
                    qs: oa,
                    gv: this.data.getQueryData().grammar_version
                }, qa = j.encode(JSON.stringify(pa)).replace(/\=+$/, '');
                ka.uri.addQueryData({
                    ref: qa
                });
            }
            ka.uri.go();
            return;
        }
    };
    ja.prototype.reset = function() {
        "use strict";
        this.selectQuery();
        this.inform('reset');
    };
    ja.prototype.animateInputValue = function(ka, la, ma) {
        "use strict";
        this.hoverAnimation && this.hoverAnimation.stop();
        var na = new g(la).from('opacity', 1).to('opacity', 0).duration(150).ondone(function() {
            this.input.setValue(ma);
            this.hoverAnimation = oa.go();
        }.bind(this)), oa = new g(ka).from('opacity', 0).to('opacity', 1).duration(150).ondone(function() {
            this.hoverAnimation = null;
            w.set(la, 'opacity', '');
            w.set(ka, 'opacity', '');
        }.bind(this));
        w.set(ka, 'opacity', 0);
        this.hoverAnimation = na.go();
    };
    ja.prototype.open = function() {
        "use strict";
        this.inform('open');
        this.view.show();
        this.input.focus();
        this.checkValue();
        if (!this.isFocused) {
            this.isFocused = true;
            this._newSession();
            this.inform('focus');
        }
    };
    ja.prototype.close = function() {
        "use strict";
        this._closeSession();
        if (this.inform('close') === false)
            return;
        if ((!this.value || this.value.isEmptyOrWhitespace()) && this.selectedQuery) {
            this.input.setValue(this.selectedQuery.structure);
        } else if (this.stickyQuery)
            this.input.setValue(this.stickyQuery.structure);
        this.input.blur();
        this.view.hide();
        this.view.setAutoSelect(false);
        this.inform('session', null, h.BEHAVIOR_STATE);
        if (this.isFocused) {
            this.isFocused = false;
            setTimeout(this.inform.bind(this, 'blur'), 0);
        }
    };
    ja.prototype.getElement = function() {
        "use strict";
        return this.root;
    };
    ja.prototype.getValue = function() {
        "use strict";
        return this.input.getValue();
    };
    ja.prototype.getText = function() {
        "use strict";
        return this.getValue().toString();
    };
    ja.prototype.submitQuery = function() {
        "use strict";
        if (m.graphSearchV2 && this.view.index < 0) {
            var ka = this.input.getValue(), la = this.data.getRawStructure(ka);
            if (la&&!la.is_empty) {
                var ma=!la.raw_text ? p.getRawTextFromStructured(ka.toArray()) : la.raw_text, na = o.makeFacebarEntry(ma);
                this.inform('magSearch', na);
                this.executeQuery(na);
            }
        } else 
            this.view.select();
    };
    ja.prototype.keydown = function(event) {
        "use strict";
        var ka = true, la = l.getKeyCode(event);
        switch (la) {
        case t.ESC:
            this.close();
            break;
        case t.RIGHT:
            if (!m.disableLockingEntitiesOnRightArrow) {
                ka = this.input.isSelectionAtEnd() && this.completeSelection();
            } else 
                ka = false;
            break;
        case t.TAB:
            var ma = this.cleanQuery(this.view.getSelection()), na = ma.structure.hasType('blank');
            if (event.getModifiers().shift || (!this.completeSelection()&&!this.loading)) {
                this.view.setAutoSelect(false);
                this.view.hide();
                ka = false;
            } else if (!na&&!m.graphSearchV2)
                this.tabQueued = true;
            break;
        case t.UP:
            this.view.prev();
            break;
        case t.DOWN:
            this.view.next();
            break;
        case t.RETURN:
            this.submitQuery();
            break;
        case t.PAGE_UP:
            this.view.first();
            break;
        case 222:
            var oa = this.input.value.trim();
            if (!event.getModifiers().shift && oa.endsOnType('ent'))
                this.input.setValue(oa);
            ka = false;
            break;
        default:
            var pa = (la <= 46 && la !== 8), qa = (la >= 112 && la <= 126), ra = (la === 144 || la === 145);
            if (!pa&&!qa&&!ra) {
                if (m.unlockTextOnKeypress)
                    this._unlockQuery();
                this.data.setSingleState(false);
                this.view.setAutoSelect(true);
            }
            this.stickyQuery = null;
            ka = false;
            break;
        }
        this.view.setPrevKey(la);
        this.input.storeSelection();
        if (ka)
            return event.kill();
    };
    ja.prototype.mousedown = function(event) {
        "use strict";
        this.view.setAutoSelect(true);
        this.input.storeSelection();
        if (v.byClass(event.target, "_50c9"))
            event.preventDefault();
    };
    ja.prototype.focusWindow = function() {
        "use strict";
        this.windowFocused = true;
    };
    ja.prototype.blurWindow = function() {
        "use strict";
        this.windowFocused = false;
    };
    ja.prototype.selectView = function(ka, la) {
        "use strict";
        if (!la ||!la.selected)
            return;
        this.data.setSingleState(true);
        this.inform('select', la);
        var ma = this.cleanQuery(la.selected);
        this.executeQuery(ma);
    };
    ja.prototype.highlightView = function() {
        "use strict";
        var ka = this.view.getSelection();
        if (m.graphSearchV2) {
            this.input.setHint(ka ? ka.structure : null);
        } else 
            ka && this.input.setHint(ka.structure);
    };
    ja.prototype.blurInput = function() {
        "use strict";
        setTimeout((function() {
            if (this.windowFocused || x.getRequestURI().getSubdomain() === 'apps') {
                this.input.togglePlaceholder();
                this.close();
            }
        }).bind(this), 0);
    };
    ja.prototype.changeInput = function() {
        "use strict";
        this.inform('change');
        this.checkValue();
        this.inform('change_end');
    };
    ja.prototype.focusInput = function() {
        "use strict";
        this.open();
        this.input.togglePlaceholder(false);
    };
    ja.prototype.updateData = function() {
        "use strict";
        this.view.setLoading(this.loading);
    };
    ja.prototype.completeData = function(ka, la) {
        "use strict";
        this.checkBlockedSearch();
        if (la.forceDisplay || (this.value && this.value.matches(la.value))) {
            var ma = m.graphSearchV2?!la.results.length : (!la.results.length&&!this.loading && la.isEmptyResults);
            this.view.render(la.value, la.results, la.isAsync, ma);
            if (this.tabQueued && this.completeSelection())
                delete this.tabQueued;
        }
    };
    ja.prototype.typeaheadActivity = function(ka, la) {
        "use strict";
        this.fetching = la.activity;
        if (this.loading !== this.fetching) {
            this.loading = this.fetching;
            this.updateData();
        }
    };
    ja.prototype.getNameTextFromSelected = function() {
        "use strict";
        var ka = this.settedQuery && this.settedQuery.semantic, la = this.data.facebarConfig && this.data.facebarConfig.name_functions, ma = ka && la && ka.match(/[a-z-]+\([^()]+\)/g);
        if (ma)
            for (var na = 0; na < ma.length; na++) {
                var oa = ma[na].match(/([a-z-]+)\(([^()]+)\)/);
                if (oa && y(la, oa[1]))
                    return oa[2];
            }
        return this.value.toString();
    };
    z(ja.prototype, {
        events: ['session', 'focus', 'select', 'change', 'execute', 'blur']
    });
    e.exports = ja;
}, null);
__d("FacebarTypeaheadRecorder", ["clickRefAction", "copyProperties", "Event", "Keys", "SearchTypeaheadRecorder", "URI", "userAction", "Arbiter", "FacebarTimerUtils", "FacebarGlobalOptions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    for (var q in k)
        if (k.hasOwnProperty(q))
            s[q] = k[q];
    var r = k === null ? null: k.prototype;
    s.prototype = Object.create(r);
    s.prototype.constructor = s;
    s.__superConstructor__ = k;
    function s(t) {
        "use strict";
        this.typeahead = t;
        k.call(this, t);
        this.userText = "";
        this.queryTimes = {};
        this._sessionDisabled = false;
        this.type = "facebar";
        this._maxQueryID = 0;
        this._isQueryMatch = true;
    }
    s.prototype.initEvents = function() {
        "use strict";
        this.typeahead.getCore().subscribe('session', function(t, u) {
            if (u === null) {
                this.sessionEnd();
            } else 
                this.sessionStart(u);
        }.bind(this));
        this.typeahead.getCore().subscribe('select', function(t, u) {
            this.recordSelectInfo(u);
        }.bind(this));
        this.typeahead.getCore().subscribe('magSearch', function(t, u) {
            this.recordMagSearch(u);
        }.bind(this));
        this.typeahead.getCore().input.subscribe('shortcut', function(t, u) {
            this.recordShortcut(u);
        }.bind(this));
        this.typeahead.getCore().subscribe('quickSelectRedirect', function(t, u) {
            this.recordQuickSelectInfo(u);
        }.bind(this));
        this.typeahead.getView().subscribe('render', function(t, u) {
            this.recordRender(u);
        }.bind(this));
        this.typeahead.getView().subscribe('logPerformanceTiming', function(t, u) {
            this.performanceTimings[u.field] = u.value;
        }.bind(this));
        this.typeahead.data.subscribe('query', function(t, u) {
            if (!u.value.isEmpty())
                this.recordCountStat('num_queries');
            this.recordAvgStat('num_results_from_cache', u.results.length);
            this.queryTimes[u.queryId] = {
                send: o.getTimestamp()
            };
        }.bind(this));
        this.typeahead.data.subscribe('sending_request', function(t, u) {
            var v = u.data.value;
            if (!v)
                return;
            this.backendQueries.push(v);
        }.bind(this));
        this.typeahead.subscribe('navigation', function(t, u) {
            if (u && u.structure) {
                this.recordStat('navigation_input', JSON.stringify(u.structure.toStruct()));
                this.recordStat('navigation_text', u.structure.toString());
            }
        }.bind(this));
        this.typeahead.data.subscribe('response_received', function(t, u, v) {
            if (this.queryTimes[u.queryId]) {
                var w = this.queryTimes[u.queryId];
                w.recv = o.getTimestamp() - w.send;
                if (u && u.payload)
                    w.payload_size = JSON.stringify(u.payload).length;
            }
        }.bind(this));
        this.typeahead.data.subscribe('remote_query_latency', function(t, u) {
            if (this.queryTimes[u.queryId]) {
                var v = this.queryTimes[u.queryId];
                v.remoteQueryLatencies = u.latencies;
            }
        }.bind(this));
        this.typeahead.data.subscribe('cache_query_latency', function(t, u) {
            if (this.queryTimes[u.queryId]) {
                var v = this.queryTimes[u.queryId];
                v.cacheQueryLatencies = u.latencies;
            }
        }.bind(this));
        this.typeahead.data.subscribe('backend_response', function(t, u) {
            if (this.queryTimes[u.queryId]) {
                var v = this.queryTimes[u.queryId];
                v.render = o.getTimestamp() - v.send;
                if (u.payload.incomplete)
                    v.incomplete = true;
                v.backendInfo = u.payload.info;
                if (this.core.scubaInfo)
                    this.logToScuba(u, v, this.core.scubaInfo, u.inputQuery, this.type);
            }
        }.bind(this));
        this.typeahead.data.subscribe('remote_query_match', function(t, u) {
            if (this._maxQueryID < u.queryId) {
                this._maxQueryID = u.queryId;
                this._isQueryMatch = u.isMatch;
            }
        }.bind(this));
        n.subscribe('BrowseNUX/typing', this.disableThisSession.bind(this));
        n.subscribe('TestConsole/typing', this.disableThisSession.bind(this));
        this.typeahead.getCore().subscribe('change', function(t, u) {
            this.userInput(this.core.getText());
        }.bind(this));
        this.typeahead.subscribe('clear', function() {
            this.recordAppendStat('before_clear_queries', this.userText);
        }.bind(this));
        i.listen(this.element, 'keydown', function(event) {
            this.recordStat('keypressed', 1);
            this.recordCountStat('count_keys_pressed');
            if (i.getKeyCode(event) == j.BACKSPACE) {
                if (!this._backspacing) {
                    this._backspacing = true;
                    this.recordAppendStat('before_backspace_queries', this.core.getText());
                }
            } else 
                this._backspacing = false;
        }.bind(this));
        this.typeahead.subscribe('filter', function(t, u) {
            this._unsupportedGrammarInfo = this.buildUnsupportedGrammarInfo(u);
        }.bind(this));
        this.typeahead.getCore().subscribe('recordFunction', function(t, u) {
            this._extraRecorder.push(u);
        }.bind(this));
    };
    s.prototype._reset = function(t) {
        "use strict";
        this.stats = {};
        this.avgStats = {};
        this.appendStats = {};
        this._backspacing = false;
        this.backendQueries = [];
        this._topreplace = false;
        this._inflightRequests = {};
    };
    s.prototype.sessionStart = function(t) {
        "use strict";
        this._sessionEnded = false;
        this.data.setQueryData({
            sid: t
        });
        this.recordStat('sid', t);
        if (!this.stats.session_start_time) {
            this.recordStat('session_start_time', o.getTimestamp());
            var u = new Date(), v = u.getTimezoneOffset(), w = Date.now() - v * 60 * 1000;
            this.recordStat('session_start_time_user_timezone', w);
        }
        this.recordStat('keypressed', 0);
        this.queryTimes = {};
    };
    s.prototype.sessionEnd = function() {
        "use strict";
        if (this._sessionEnded || this._sessionDisabled) {
            if (this._sessionDisabled) {
                this.reset();
                this._sessionDisabled = false;
                this._sessionEnded = true;
            }
            return;
        }
        this._sessionEnded = true;
        this.recordStat('session_end_time', o.getTimestamp());
        this.recordStat('grammar_version', this.data.getQueryData().grammar_version);
        this.submit();
    };
    s.prototype.disableThisSession = function() {
        "use strict";
        this._sessionDisabled = true;
    };
    s.prototype.userInput = function(t) {
        "use strict";
        this.userText = t;
    };
    s.prototype.buildUnsupportedGrammarInfo = function(t) {
        "use strict";
        var u = t.results ? t.results[0]: null;
        if (!u || u.results_set_type !== 'unimplemented')
            return null;
        return {
            unsupported_grammar: {
                category: u.error_info.category || 'unknown',
                edge: u.error_info.blamed_edge
            }
        };
    };
    s.prototype.buildTypeaheadRecord = function(t, u) {
        "use strict";
        var v = t.rankType || t.render_type || t.type, w = 0, x = u;
        if (typeof t.groupIndex == 'number') {
            w = t.groupIndex;
            x = t.indexInGroup;
        }
        var y = {
            group_index: w,
            index_in_group: x,
            cost: t.cost,
            s_value: t.s_value || 0,
            semantic: t.semantic,
            text: t.structure.toString(),
            cache_only: (t.cacheOnlyResult ? 1 : 0),
            parse: t.parse,
            semantic_forest: t.semanticForest,
            category: t.category,
            type: v,
            source: t.bootstrapped,
            grammar_results_type: (t.results_set_type || '').replace(/[\[\{](.*)[\]\}]/, '$1'),
            result_from_memcache: t.memcache,
            websuggestion_source: t.websuggestion_source,
            dynamic_cost: t.dynamic_cost,
            is_js_bootstrap_match: t.isJSBootstrapMatch,
            backend_cost: t.backendCost,
            bootstrap_cost: t.bootstrapCost,
            match_type: t.match_type,
            l_type: t.l_type,
            vertical_type: t.vertical_type,
            prefix_match: t.prefix_match,
            prefix_length: t.prefix_length,
            index_before_buckets: t.indexBeforeBuckets,
            bucket_lineage: t.bucketLineage,
            nullstate: t.isNullState,
            singlestate: t.isSingleState,
            query_id: t.qid,
            template_id: t.templateID,
            coeff_cost: (typeof t.grammar_costs == 'undefined')?-1: t.grammar_costs["{" + t.type + "}"]
        };
        if (t.logInfo)
            y.backend_log_info = t.logInfo;
        if (t.s_token)
            y.s_token = t.s_token;
        if (t.s_categories)
            y.s_categories = t.s_categories;
        return y;
    };
    s.prototype.buildListTypeaheadRecords = function() {
        "use strict";
        var t = [];
        this.results && this.results.forEach(function(u, v) {
            if (u.uid !== 'search')
                t.push(this.buildTypeaheadRecord(u, v));
        }.bind(this));
        return t;
    };
    s.prototype.recordShortcut = function(t) {
        "use strict";
        this.recordStat('shortcut', 1);
        this.recordStat('shortcut_with_shift', t.shift);
    };
    s.prototype.recordStats = function(t, u) {
        "use strict";
        for (var v in u)
            this.recordStat(t + '_' + v, u[v]);
    };
    s.prototype.getTypeaheadIndex = function(t, u) {
        "use strict";
        var v = typeof t.groupIndex == 'number' ? t.groupIndex + 1: 0;
        return u - v;
    };
    s.prototype.recordQuickSelectInfo = function(t) {
        "use strict";
        var u = {
            input_query: t.input_query,
            semantic: t.semantic,
            type: t.type,
            position: t.position,
            with_mouse: t.with_mouse,
            text: t.text,
            quick_select: 1
        };
        this.recordStats('selected', u);
        this.recordStat('quick_select', 1);
    };
    s.prototype.recordMagSearch = function(t) {
        "use strict";
        var u = {};
        u.text = t.text;
        u.semantic = t.semantic;
        u.type = t.type;
        u.input_query = t.text;
        this.recordStats('selected', u);
    };
    s.prototype.recordSelectInfo = function(t) {
        "use strict";
        var u = t.selected, v = this.getTypeaheadIndex(u, t.index), w = {};
        if (u.uid == 'search') {
            w.selected_search = 1;
        } else {
            w = this.buildTypeaheadRecord(u);
            var x = (w.type == 'friend' ? 'user' : w.type);
            w.position = v;
            w[x] = 1;
        }
        w.with_mouse = t.clicked ? 1 : 0;
        w.quick_select = 0;
        w.input_query = this.userText;
        w.input_fragments = JSON.stringify(this.core.currentQuery.toStruct());
        var y = u.dataGT ? {
            gt: JSON.parse(u.dataGT)
        }
        : {}, z = {
            href: u.path
        };
        g('click', z, null, null, y);
        m('search').uai('click');
        this.recordStats('selected', w);
        this.recordAppendStat('selection_history', {
            selected: w,
            candidate_results: this.buildListTypeaheadRecords(),
            timestamp: o.getTimestamp()
        });
        var aa = {};
        this._extraRecorder.forEach(function(ba) {
            ba(t, this.results, aa);
        }.bind(this));
        this.recordStat('extra_select_info', JSON.stringify(aa));
        this.recordStat('selected_with_mouse', t.clicked ? 1 : 0);
    };
    s.prototype._dataToSubmit = function() {
        "use strict";
        this.recordStat('max_results', this.data._maxResults);
        if (this.stats && this.stats.selected_input_query) {
            this.recordStat('input_query', this.stats.selected_input_query);
        } else 
            this.recordStat('input_query', this.userText);
        this.recordStat('uri', l().toString());
        if (!this.stats.shortcut) {
            this.recordStat('shortcut', 0);
            this.recordStat('shortcut_with_shift', false);
        }
        var t = this.stats;
        for (var u in this.avgStats) {
            var v = this.avgStats[u];
            t[u] = v[0] / v[1];
        }
        var w = {
            candidate_results: this.buildListTypeaheadRecords(),
            timestamp: o.getTimestamp(),
            input_query: this.userText,
            remote_query_match: this._isQueryMatch
        };
        if (this._unsupportedGrammarInfo)
            h(w, this._unsupportedGrammarInfo);
        this.recordAppendStat('suggestions_at_end_of_session', w);
        this.recordAppendStat('query_times', this.queryTimes);
        if (this.backendQueries.length > 0) {
            if (this.backendQueries.length > this.data.logBackendQueriesWindow)
                this.backendQueries = this.backendQueries.slice(this.backendQueries.length - this.data.logBackendQueriesWindow);
            this.recordStat('backend_queries', this.backendQueries);
        }
        if (p.taSessionLoggingSample) {
            var x = [];
            this.results.forEach(function(z) {
                x.push([z.text || '', z.category || '', z.subtext || '']);
            });
            this.recordStat('raw_suggestions_text', x);
        }
        if (p.graphSearchV2) {
            this.recordStat('experience_type', 'gsv2');
        } else 
            this.recordStat('experience_type', 'facebar');
        for (var y in this.appendStats)
            t[y] = JSON.stringify(this.appendStats[y]);
        return t;
    };
    s.prototype.getDataToSubmit = function() {
        "use strict";
        return this._dataToSubmit();
    };
    s.prototype.reset = function() {
        "use strict";
        return this._reset();
    };
    s.prototype.submit = function() {
        "use strict";
        if (!this._sessionDisabled)
            r.submit.call(this);
        this.view.inform('feedback');
        this._reset();
    };
    h(s.prototype, {
        _endPoint: '/ajax/typeahead/search/record_metrics.php',
        _sessionEnded: true,
        _extraRecorder: [],
        _banzaiRoute: 'facebar'
    });
    e.exports = s;
}, null);
__d("FacebarTypeaheadGrammarItem.react", ["React", "FacebarTypeaheadItem.react", "FacebarTypeaheadToken.react", "FacebarTypeaheadTokenText", "cx", "fbt", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = {
        user: "Person"
    }, o = g.createClass({
        displayName: "FacebarTypeaheadGrammarItem",
        renderToken: function() {
            var p = this.props.result.decoration, q = this.props.result.ambiguity, r = q && q.text, s = (p && p.entity) || (q && q.entity);
            if (this.props.result.isRecent) {
                var t = "Recent search";
                return (g.createElement(i, {
                    text: [t],
                    innerClass: "_53ab"
                }));
            } else if (r) {
                return (g.createElement(i, {
                    text: j.text(r)
                }));
            } else if (s)
                return (g.createElement(i, {
                    text: j.textForEntity(s, n),
                    limit: 2,
                    leadingMiddot: true
                }));
        },
        render: function() {
            var p = this.renderToken(), q = p&&!p.props.leadingMiddot;
            return (g.createElement(h, g.__spread({}, this.props, {
                className: m(this.props.className, "_207"),
                valign: q,
                token: p
            })));
        }
    });
    e.exports = o;
}, null);
__d("FacebarTypeaheadKeywordItem.react", ["FacebarTypeaheadItem.react", "FacebarTypeaheadToken.react", "React", "cx", "fbt", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = i.createClass({
        displayName: "FacebarTypeaheadKeywordItem",
        render: function() {
            var n = ["Search"];
            if (this.props.result.isTrending) {
                n.push("Trending");
            } else if (this.props.result.type == 'related')
                n = ["Related search"];
            var o = i.createElement(h, {
                text: n,
                innerClass: "_53ab"
            });
            return (i.createElement(g, i.__spread({}, this.props, {
                className: l(this.props.className, "_207"),
                token: o,
                prefix: this.props.result.query_string.toLowerCase()
            })));
        }
    });
    e.exports = m;
}, null);
__d("FacebarTypeaheadTrendingItem.react", ["FacebarTypeaheadItem.react", "FacebarTypeaheadToken.react", "React", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = i.createClass({
        displayName: "FacebarTypeaheadTrendingItem",
        render: function() {
            var m = this.props.result.articleTitle || '', n = i.createElement(h, {
                text: [m],
                innerClass: "_53ab",
                leadingMiddot: true
            });
            return (i.createElement(g, i.__spread({}, this.props, {
                className: k(this.props.className, "_207"),
                token: n,
                valign: false
            })));
        }
    });
    e.exports = l;
}, null);
__d("FacebarTypeaheadNodeItem.react", ["React", "DOM"], function(a, b, c, d, e, f, g, h) {
    var i = g.createClass({
        displayName: "FacebarTypeaheadNodeItem",
        render: function() {
            var j = this.props.result.node;
            return (g.createElement("li", g.__spread({}, this.props), !h.isElementNode(j) ? j : null));
        },
        attachNode: function(j) {
            var k = this.props.result.node;
            if (h.isElementNode(k))
                h.setContent(j, k);
        },
        componentDidMount: function() {
            this.attachNode(this.getDOMNode());
        },
        componentDidUpdate: function(j, k, l) {
            this.attachNode(this.getDOMNode());
        },
        shouldComponentUpdate: function(j) {
            return this.props.result.node !== j.result.node;
        }
    });
    e.exports = i;
}, null);
__d("FacebarTypeaheadWebSuggestionItem.react", ["FacebarTypeaheadItem.react", "FacebarTypeaheadToken.react", "React", "cx", "fbt", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = {
        EXACT_MATCH: 1,
        BING: 2,
        BING_POPULAR: 3,
        WEBSUGGESTIONS_AS_KEYWORDS: 4
    }, n = i.createClass({
        displayName: "FacebarTypeaheadWebSuggestionItem",
        renderToken: function() {
            if (this.props.result.isLockedWebSearchMode)
                return;
            var o = this.props.result.websuggestion_source, p;
            if (o === m.WEBSUGGESTIONS_AS_KEYWORDS) {
                p = "Search";
            } else if (o === m.BING_POPULAR) {
                p = "Popular Web Search";
            } else 
                p = "Web Search";
            return (i.createElement(h, {
                innerClass: "_57q5",
                text: [p]
            }));
        },
        render: function() {
            this.props.result.icon_class = "_6-a";
            return (i.createElement(g, i.__spread({}, this.props, {
                className: l(this.props.className, "_207"),
                token: this.renderToken()
            })));
        }
    });
    e.exports = n;
}, null);
__d("FacebarTypeaheadList.react", ["ARIA", "React", "ReactPropTypes", "StaticContainer.react", "FacebarTypeaheadEntityItem.react", "FacebarTypeaheadGrammarItem.react", "FacebarTypeaheadKeywordItem.react", "FacebarTypeaheadTrendingItem.react", "FacebarTypeaheadNodeItem.react", "FacebarTypeaheadWebSuggestionItem.react", "LoadingIndicator.react", "FacebarJSConstants", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    var u = {
        grammar: l,
        node: o,
        trending: n,
        related: m,
        websuggestion: p
    };
    u[r.browseTypes.keyword] = m;
    var v = h.createClass({
        displayName: "FacebarTypeaheadList",
        propTypes: {
            results: i.array,
            onRender: i.func,
            onSelect: i.func.isRequired,
            onHighlight: i.func.isRequired
        },
        getItemComponent: function(w, x) {
            var y = w.type, z;
            if (w.results_set_type === r.browseTypes.keyword)
                y = r.browseTypes.keyword;
            if (w.node)
                y = 'node';
            if (y == null)
                y = 'entity';
            z = u[y];
            if (z == null) {
                z = k;
                y = 'entity';
            }
            return {
                type: y,
                constructor: z
            };
        },
        renderItem: function(w, x) {
            var y = this.getItemComponent(w), z = y.constructor;
            y = h.createElement(z, {
                result: w,
                onClick: this.handleClick.bind(null, w),
                onMouseEnter: this.handleMouseEnter.bind(null, w)
            });
            var aa;
            if (w.type === r.keywordType) {
                aa = h.createElement(j, {
                    key: w.query_string + w.semantic
                }, y);
            } else 
                aa = h.createElement(j, {
                    key: w.semantic || w.uid || w.tuid
                }, y);
            return aa;
        },
        renderFooter: function() {
            var w = (("_3su") + (!this.props.loading ? ' ' + "hidden_elem" : ''));
            return (h.createElement("li", {
                className: w
            }, this.props.loading, h.createElement("div", {
                className: "_21f"
            }, "Retrieving suggestions", h.createElement(q, {
                size: "medium",
                color: "white"
            }))));
        },
        componentDidMount: function() {
            var w = this.getDOMNode();
            g.owns(this.props.accessibilityElement, w);
        },
        render: function() {
            var w = this.props.results;
            return (h.createElement("ul", {
                id: "facebar_typeahead_view_list",
                className: "_21c",
                role: "listbox"
            }, w && w.map(this.renderItem), this.renderFooter()));
        },
        handleClick: function(w, x) {
            if (!x.nativeEvent.isMiddleClick()&&!x.nativeEvent.getModifiers().any) {
                this.props.onSelect(w);
                x.preventDefault();
            }
        },
        handleMouseEnter: function(w) {
            this.props.onHighlight(w);
        },
        componentDidUpdate: function(w, x, y) {
            this.props.onRender();
        },
        shouldComponentUpdate: function(w) {
            return this.props.loading !== w.loading || this.props.results !== w.results;
        }
    });
    e.exports = v;
}, null);
__d("FacebarTypeaheadView", ["Arbiter", "CSS", "ContextualLayer", "DOM", "Event", "FacebarGlobalOptions", "FacebarJSConstants", "FacebarStructuredText", "FacebarTypeaheadList.react", "FacebarKeywordSearchUtils", "Keys", "Parent", "React", "TypeaheadView", "copyProperties", "performanceNow", "csx", "cx", "fbt", "URI", "Link.react"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa) {
    var ba = 'unimplemented';
    function ca(ga) {
        var ha = p.makeFacebarEntry(ga);
        return {
            type: 'keyword',
            results_set_type: 'browse_type_keyword',
            text: ga,
            id: ga,
            uid: ga,
            query_string: ga,
            icon_class: "_5b1w",
            exactMatchKeyword: true,
            structure: n.fromString(ga),
            semantic: ha.semantic,
            uri: ha.uri
        };
    }
    for (var da in t)
        if (t.hasOwnProperty(da))
            fa[da] = t[da];
    var ea = t === null ? null: t.prototype;
    fa.prototype = Object.create(ea);
    fa.prototype.constructor = fa;
    fa.__superConstructor__ = t;
    function fa(ga, ha) {
        "use strict";
        t.call(this, ga, ha);
        this.element = ga;
        this.sid = '';
        this.index =- 1;
        this.prevKey =- 1;
        this.warningShown = false;
        this.autoSelect = false;
        this.loading = false;
        this.handleRender = this.handleRender.bind(this);
        this.handleHighlight = this.handleHighlight.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.events = ['highlight', 'render', 'filter'];
    }
    fa.prototype.init = function() {
        "use strict";
        this.initializeElements();
    };
    fa.prototype.initializeGSV2Events = function() {
        "use strict";
        k.listen(this.keywordResultsContainer, {
            mouseleave: this.mouseLeave.bind(this)
        });
        k.listen(this.entityResultsContainer, {
            mouseleave: this.mouseLeave.bind(this)
        });
    };
    fa.prototype.initGSV2Elements = function() {
        "use strict";
        var ga = this.element;
        this.contentKeyword = j.find(ga, "._f7s");
        this.contentEntity = j.find(ga, "._f7t");
        this.keywordResultsContainer = j.create('div');
        this.entityResultsContainer = j.create('div');
        this.keywordResults = [];
        this.entityResults = [];
        this.infoNode = j.create('div');
        h.addClass(this.infoNode, "_5dwc");
    };
    fa.prototype.initGSV2Construct = function() {
        "use strict";
        this.contentKeyword.appendChild(this.keywordResultsContainer);
        this.contentEntity.appendChild(this.entityResultsContainer);
        this.root.appendChild(this.infoNode);
        if (this.entityTop) {
            this.resultsContainer.appendChild(this.contentEntity);
            this.resultsContainer.appendChild(this.contentKeyword);
        } else {
            this.resultsContainer.appendChild(this.contentKeyword);
            this.resultsContainer.appendChild(this.contentEntity);
        }
    };
    fa.prototype.initializeElements = function() {
        "use strict";
        var ga = this.element;
        this.isGSV2 = l.graphSearchV2;
        this.dynamicRank = this.isGSV2 && l.gsv2EntityAboveKeyword;
        this.entityTop = false;
        this.content = j.find(ga, "._21r");
        this.warningNode = j.find(ga, "._553e");
        this.blockNotificationNode = j.find(ga, "._2hh");
        this.resultsContainer = j.create('div');
        if (this.isGSV2) {
            this.initGSV2Elements();
            this.initializeGSV2Events();
        }
    };
    fa.prototype.initializeList = function() {
        "use strict";
        this.renderTypeaheadList();
        this.content.appendChild(this.resultsContainer);
        if (this.isGSV2)
            this.initGSV2Construct();
    };
    fa.prototype.initializeLayer = function() {
        "use strict";
        this.layer = new i({
            context: r.byClass(this.causalElement, "_585-"),
            position: 'below',
            causalElement: this.causalElement
        }, this.element);
        var ga = this.layer.getContentRoot();
        this.root = j.find(ga, "._50c9");
        h.addClass(ga, "_5tlx");
        if (this.isGSV2)
            h.addClass(ga, "_5xzd");
        if (l.jewelsOnLeft)
            h.addClass(ga, "_2dzl");
        this.wrapper = ga;
    };
    fa.prototype.setInputElement = function(ga) {
        "use strict";
        this.setAccessibilityControlElement(ga);
        this.causalElement = ga;
        this.initializeLayer();
        this.initializeList();
    };
    fa.prototype.setAutoSelect = function(ga) {
        "use strict";
        this.autoSelect = ga;
        if (this.index===-1 && ga)
            this.first();
    };
    fa.prototype.getIndexOf = function(ga, ha) {
        "use strict";
        for (var ia = 0; ia < ha.length; ia++)
            if (ga.semantic === ha[ia].semantic)
                return ia;
        return - 1;
    };
    fa.prototype.handleHighlight = function(ga) {
        "use strict";
        this.highlight(this.getIndexOf(ga, this.results), false);
    };
    fa.prototype.handleSelect = function(ga) {
        "use strict";
        this.handleHighlight(ga);
        this.select(true);
    };
    fa.prototype.show = function() {
        "use strict";
        if (!this.visible) {
            this.inform('beforeShow', this.layer);
            var ga = ea.show.call(this);
            this.first();
            this.layer.show();
            this.layer.updatePosition();
            this.inform('show');
            g.inform('layer_shown', {
                type: 'FacebarTypeahead'
            });
            return ga;
        }
    };
    fa.prototype.hide = function() {
        "use strict";
        if (this.visible) {
            this.layer.hide();
            ea.hide.call(this);
            this.inform('hide');
            g.inform('layer_hidden', {
                type: 'FacebarTypeahead'
            });
        }
        return this;
    };
    fa.prototype.select = function(ga) {
        "use strict";
        var ha = this.results && this.results[this.index];
        if (!ha) {
            this.inform('quickSelect');
            return;
        }
        var ia = this.inform('beforeSelect', {
            index: this.index,
            selected: ha
        });
        if (ia !== false)
            ea.select.call(this, ga);
    };
    fa.prototype.mouseLeave = function() {
        "use strict";
        this.index =- 1;
        this.highlight(this.index, false);
    };
    fa.prototype.processGSV2Results = function(ga) {
        "use strict";
        this.keywordResults = [];
        this.entityResults = [];
        ga.forEach(function(ia) {
            if (ia.type === m.keywordType || ia.type === m.grammarType) {
                this.keywordResults.push(ia);
            } else 
                this.entityResults.push(ia);
        }.bind(this));
        var ha = this.normalizeValue(this.value);
        if (ha)
            if (!this.keywordResults.some(function(ia) {
                return this.normalizeValue(ia.text) === ha;
            }.bind(this)))
                this.keywordResults.push(ca(ha));
        if (this.entityTop)
            return this.entityResults.concat(this.keywordResults);
        return this.keywordResults.concat(this.entityResults);
    };
    fa.prototype.normalizeValue = function(ga) {
        "use strict";
        if (!ga)
            return ga;
        return String(ga).trim().replace(/\s+/g, ' ').toLowerCase();
    };
    fa.prototype.reGenerateContainer = function() {
        "use strict";
        var ga = j.create('div');
        if (this.entityTop) {
            ga.appendChild(this.contentEntity);
            ga.appendChild(this.contentKeyword);
        } else {
            ga.appendChild(this.contentKeyword);
            ga.appendChild(this.contentEntity);
        }
        return ga;
    };
    fa.prototype.buildResults = function(ga) {
        "use strict";
        if (this.dynamicRank)
            if (ga.length > 0)
                this.entityTop = ga[0].type !== m.keywordType;
        var ha = String(this.value);
        ga.forEach(function(ja) {
            ja.query_string = ha;
        });
        this.results = ga;
        if (this.isGSV2)
            this.results = this.processGSV2Results(ga);
        var ia = v();
        this.renderTypeaheadList({
            results: this.results,
            loading: this.loading
        });
        this.inform('logPerformanceTiming', {
            field: 'build_results_set_props_duration',
            value: v() - ia
        });
        if (this.dynamicRank)
            this.resultsContainer = this.reGenerateContainer();
        return this.resultsContainer;
    };
    fa.prototype.getGSV2Items = function() {
        "use strict";
        var ga = ea.getItems.call(this), ha, ia;
        if (this.entityTop) {
            ia = ga.slice(0, this.entityResults.length);
            ha = ga.slice(this.entityResults.length + 1, - 1);
            ga = ia.concat(ha);
        } else {
            ha = ga.slice(0, this.keywordResults.length);
            ia = ga.slice(this.keywordResults.length + 1, - 1);
            ga = ha.concat(ia);
        }
        return ga;
    };
    fa.prototype.getItems = function() {
        "use strict";
        if (this.isGSV2)
            return this.getGSV2Items();
        return ea.getItems.call(this).slice(0, - 1);
    };
    fa.prototype.handleRender = function() {
        "use strict";
        this.items = this.getItems();
    };
    fa.prototype.render = function(ga, ha, ia, ja) {
        "use strict";
        this.inform('filter', {
            results: ha,
            value: ga
        });
        this.seeMoreResult = null;
        if (ha.length && ga.getLength()) {
            this.seeMoreResult = this.inform('seeMore', {
                value: ga,
                results: ha
            });
            if (!this.loading && this.seeMoreResult)
                ha.push(this.seeMoreResult);
        }
        var ka=!ga || (ga instanceof n && ga.isEmptyOrWhitespace());
        h.conditionClass(this.wrapper, "_5qz2", !ha.length && ka);
        var la = ha[0];
        if (ja&&!ka) {
            if (!this.isGSV2) {
                this.showWarning(y._("There are no results for '{query}'", [y.param("query", ga.toString())]));
            } else {
                var ma = j.create('i', {
                    className: "_4s_2"
                }), na = [ma, y._("Search for '{query}'", [y.param("query", ga.toString())])];
                j.setContent(this.infoNode, na);
                h.show(this.infoNode);
            }
        } else if (la && la.results_set_type === ba) {
            if (!la.error_info.suppress)
                this.showWarning(la.error_info.errorMessage || "This search isn't currently supported.");
        } else {
            this.hideWarning();
            if (this.isGSV2)
                h.hide(this.infoNode);
        }
        if (this.inform('removeUnimplementedGrammar') !== false)
            ha = ha.filter(function(oa) {
                return oa.results_set_type !== ba;
            }.bind(this));
        ea.render.call(this, ga, ha, ia);
    };
    fa.prototype.reset = function() {
        "use strict";
        this.index =- 1;
        this.items = [];
        this.results = [];
        this.value = '';
        this.buildResults([]);
        this.inform('reset');
        return this;
    };
    fa.prototype.resetIndex = function() {
        "use strict";
        this.index =- 1;
    };
    fa.prototype.showBlockNotification = function(ga) {
        "use strict";
        var ha = z('https://www.facebook.com').setPath('/settings').addQueryData('tab', 'blocking'), ia = s.createElement("div", null, y._("You've blocked {fullName}. For more info on privacy and blocking, go to your {settings}.", [y.param("fullName", ga), y.param("settings", s.createElement(aa, {
            href: {
                url: ha
            }
        }, "settings"))]));
        h.show(this.blockNotificationNode);
        s.render(ia, this.blockNotificationNode);
    };
    fa.prototype.hideBlockNotification = function() {
        "use strict";
        h.hide(this.blockNotificationNode);
        j.setContent(this.blockNotificationNode, '');
    };
    fa.prototype.showWarning = function(ga) {
        "use strict";
        h.show(this.warningNode);
        j.setContent(this.warningNode, ga);
        this.warningShown = true;
        this.highlight( - 1, false);
    };
    fa.prototype.hideWarning = function() {
        "use strict";
        h.hide(this.warningNode);
        this.warningShown = false;
        this.highlight(this.index, false);
    };
    fa.prototype.setLoading = function(ga) {
        "use strict";
        if (this.loading != ga) {
            this.loading = ga;
            if (this.seeMoreResult) {
                if (this.loading) {
                    this.results.splice(this.results.indexOf(this.seeMoreResult), 1);
                } else 
                    this.results.push(this.seeMoreResult);
                this.buildResults(this.results);
            } else 
                this.renderTypeaheadList({
                    results: this.results,
                    loading: ga
                });
        }
    };
    fa.prototype.first = function() {
        "use strict";
        this.index = this.autoSelect ? 0 : - 1;
        this.highlight(this.index);
    };
    fa.prototype.prev = function() {
        "use strict";
        var ga = this.getPrevKey();
        if (this.isGSV2 && this.index<=-1)
            if (!this.isCursorKey(ga)) {
                this.index = this.items.length;
            } else 
                return;
        if (!this.isGSV2 && this.index <= 0)
            this.index = this.items.length;
        this.ignoreMouseover = true;
        ea.prev.call(this);
    };
    fa.prototype.next = function() {
        "use strict";
        if (this.isGSV2 && this.index >= this.items.length - 1)
            return;
        if (!this.isGSV2 && this.index + 1 >= this.items.length)
            this.index =- 1;
        this.ignoreMouseover = true;
        ea.next.call(this);
    };
    fa.prototype.isCursorKey = function(ga) {
        "use strict";
        return (ga === q.UP || ga === q.DOWN);
    };
    fa.prototype.setPrevKey = function(ga) {
        "use strict";
        this.prevKey = ga;
    };
    fa.prototype.getPrevKey = function() {
        "use strict";
        return this.prevKey;
    };
    fa.prototype.highlight = function(ga, ha) {
        "use strict";
        ha = ha !== false && (this.index != ga);
        if (ga===-1)
            return;
        if (!ha || this.inform('beforeHighlight') !== false) {
            var ia = this.warningShown ||!this.autoSelect?-1 : 0;
            ea.highlight.call(this, Math.max(ia, ga), ha);
        }
    };
    fa.prototype.copyProps = function(ga) {
        "use strict";
        return u({
            accessibilityElement: this.accessibilityElement,
            onRender: this.handleRender,
            onHighlight: this.handleHighlight,
            onSelect: this.handleSelect
        }, ga);
    };
    fa.prototype.renderList = function(ga, ha) {
        "use strict";
        s.render(s.createElement(o, s.__spread({}, this.copyProps(ga))), ha);
    };
    fa.prototype.renderGSV2TypeaheadList = function(ga) {
        "use strict";
        var ha = this.copyProps(ga), ia = this.copyProps(ga);
        ha.results = this.keywordResults;
        ia.results = this.entityResults;
        if (this.entityTop) {
            ia.loading = false;
        } else 
            ha.loading = false;
        this.renderList(ha, this.keywordResultsContainer);
        this.renderList(ia, this.entityResultsContainer);
        h.conditionShow(this.contentKeyword, !!this.keywordResults.length);
        h.conditionShow(this.contentEntity, !!this.entityResults.length);
    };
    fa.prototype.renderTypeaheadList = function(ga) {
        "use strict";
        ga = ga || {};
        if (this.isGSV2) {
            this.renderGSV2TypeaheadList(ga);
        } else 
            this.renderList(ga, this.resultsContainer);
    };
    e.exports = fa;
}, null);
__d("FacebarTypeaheadDecorateEntities", ["arrayContains", "copyProperties", "emptyFunction"], function(a, b, c, d, e, f, g, h, i) {
    function j(n) {
        var o = [];
        n.forEach(function(p) {
            if (p.isType('ent'))
                o.push(p.getUID());
        });
        return o;
    }
    function k(n, o) {
        var p = null;
        n.structure.forEach(function(q) {
            if (q.isType('ent')&&!g(o, q.getUID()))
                p = q;
        });
        return p;
    }
    function l(n, o, p) {
        n.forEach(function(q) {
            var r = k(q, o);
            q.decoration = {
                entity: r && p.getEntryForFragment(r)
            };
        });
    }
    function m(n) {
        "use strict";
        this._typeahead = n;
    }
    m.prototype.enable = function() {
        "use strict";
        this._typeahead.view.subscribe('filter', function(n, o) {
            l(o.results, j(this._typeahead.core.getValue()), this._typeahead.data);
        }.bind(this));
    };
    h(m.prototype, {
        disable: i
    });
    e.exports = m;
}, null);
__d("FacebarTypeaheadDisambiguateResults", ["FacebarDisambiguationDialog", "FacebarStructuredFragment", "FacebarStructuredText", "URI", "copyProperties", "emptyFunction", "getObjectValues"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    function n(w, x) {
        var y = {};
        w.forEach(function(ba) {
            if (ba.type == 'grammar') {
                var ca = x(ba.structure).toLowerCase();
                y[ca] = y[ca] || [];
                y[ca].push(ba);
            }
        });
        var z = [];
        for (var aa in y)
            if (y[aa].length > 1)
                z.push(y[aa]);
        return z;
    }
    function o(w) {
        var x = [];
        w.toArray().forEach(function(y, z) {
            if (y.isType('ent'))
                x.push(z);
        });
        return x;
    }
    function p(w, x, y) {
        var z = {}, aa = {}, ba = {};
        x.forEach(function(da) {
            var ea = w[0].structure.getFragment(da), fa = ea.getHash();
            aa[fa] = aa[fa] || [];
            ba[da] = aa[fa];
            w.forEach(function(ga) {
                var ha = ga.structure.getFragment(da), ia = ha && ha.getUID();
                if (ia&&!z.hasOwnProperty(ia)) {
                    aa[fa].push(y.getEntryForFragment(ha));
                    z[ia] = true;
                }
            });
        });
        for (var ca in ba)
            if (ba[ca].length <= 1)
                delete ba[ca];
        return ba;
    }
    function q(w, x) {
        var y = {}, z = [];
        w.forEach(function(aa) {
            var ba = aa.structure.getFragment(x).getUID();
            if (!y.hasOwnProperty(ba)) {
                y[ba] = z.length;
                z.push([]);
            }
            z[y[ba]].push(aa);
        });
        return z;
    }
    function r(w, x, y) {
        var z = w.shift();
        z.ambiguity.entities = x;
        y.push.apply(y, w);
        return z;
    }
    function s(w, x) {
        var y = [], z = [], aa = false;
        w.forEach(function(ca) {
            ca.ambiguity = {
                fragment: null,
                entities: null,
                text: null
            };
        });
        n(w, function(ca) {
            return ca.getHash();
        }).forEach(function(ca) {
            var da = ca[0].structure, ea = o(da), fa = p(ca, ea, x);
            if (aa) {
                r(ca, fa, y);
                return;
            }
            var ga = ea.pop();
            if (typeof ga == 'number') {
                var ha = q(ca, ga);
                aa = ha.length > 1;
                if (aa)
                    delete fa[ga];
                ha.forEach(function(ia) {
                    var ja = r(ia, fa, y);
                    if (aa) {
                        var ka = ja.structure.getFragment(ga).getUID();
                        ja.ambiguity.entity = x.getEntry(ka);
                        z.push(ja);
                    }
                });
            }
        });
        y.forEach(function(ca) {
            var da = w.indexOf(ca);
            da!=-1 && w.splice(da, 1);
        });
        n(w, function(ca) {
            return ca.toString();
        }).forEach(function(ca) {
            ca.forEach(function(da) {
                if (!da.ambiguity.entities)
                    da.ambiguity.text = da.queryTypeText;
            });
        });
        var ba = w.indexOf(z[0]);
        z.slice(1).forEach(function(ca) {
            var da = w.indexOf(ca);
            if (da!=-1 && da!=++ba) {
                w.splice(da, 1);
                w.splice(ba, 0, ca);
            }
        });
    }
    function t(w, x) {
        var y = w && w.ambiguity && w.ambiguity.entities, z = y && Object.keys(y).map(Number), aa = x.core.input;
        if (!z || z.length === 0)
            return false;
        var ba = function(ea) {
            x.core.executeQuery(u(w, z, ea));
        }, ca = function() {
            aa.focus();
            aa.input.moveSelectionToEnd();
        };
        y = y ? m(y) : [];
        var da = new g(y, w.uri.getPath(), ba, ca, x.getCore().getSessionID());
        aa.blur();
        da.show();
        return true;
    }
    function u(w, x, y) {
        var z = w.structure.toArray(), aa = j(w.uri), ba = aa.getPath().split('/');
        x.forEach(function(ca) {
            var da = z[ca], ea = y.shift(), fa = ba.indexOf(String(da.getUID()));
            if (fa!=-1)
                ba[fa] = ea.uid;
            z[ca] = new h({
                uid: ea.uid,
                text: ea.text,
                type: 'ent:' + ea.type
            });
        });
        return {
            uri: aa.setPath(ba.join('/')),
            structure: new i(z)
        };
    }
    function v(w) {
        "use strict";
        this._typeahead = w;
    }
    v.prototype.enable = function() {
        "use strict";
        this._typeahead.view.subscribe('filter', function(w, x) {
            s(x.results, this._typeahead.data);
        }.bind(this));
        this._typeahead.view.subscribe('beforeSelect', function(w, x) {
            return !t(x.selected, this._typeahead);
        }.bind(this));
    };
    k(v.prototype, {
        disable: l
    });
    e.exports = v;
}, null);
__d("FacebarTypeaheadHashtagResult", ["HashtagSearchResultUtils"], function(a, b, c, d, e, f, g) {
    function h(i) {
        "use strict";
        this.$FacebarTypeaheadHashtagResult0 = i.getData();
    }
    h.prototype.enable = function() {
        "use strict";
        this.$FacebarTypeaheadHashtagResult1 = this.$FacebarTypeaheadHashtagResult0.subscribe('beforeQuery', this.$FacebarTypeaheadHashtagResult2.bind(this));
    };
    h.prototype.$FacebarTypeaheadHashtagResult2 = function(i, j) {
        "use strict";
        if (!j ||!j.value)
            return;
        var k = this.$FacebarTypeaheadHashtagResult0.getRawStructure(j.value);
        if (!k || k.is_empty ||!k.raw_text)
            return;
        var l = g.getHashtagFromQuery(k.raw_text);
        if (!l)
            return;
        var m = 'hashtag:' + l, n = this.$FacebarTypeaheadHashtagResult0.getEntry(m);
        if (!n) {
            this.$FacebarTypeaheadHashtagResult0.processEntries([g.makeFacebarEntry(l)]);
            this.$FacebarTypeaheadHashtagResult0.resultStore.saveResults([g.makeFacebarResult(l)], k, true);
        }
        return;
    };
    h.prototype.disable = function() {
        "use strict";
        this.$FacebarTypeaheadHashtagResult1 && this.$FacebarTypeaheadHashtagResult0.unsubscribe(this.$FacebarTypeaheadHashtagResult1);
    };
    e.exports = h;
}, null);
__d("FacebarTypeaheadMagGo", ["csx", "DOM", "Event", "SubscriptionsHandler"], function(a, b, c, d, e, f, g, h, i, j) {
    function k(l) {
        "use strict";
        this._core = l.getCore();
        this._view = this._core.view;
        this._handler = new j();
        this._selected = null;
    }
    k.prototype.enable = function() {
        "use strict";
        var l = h.find(document, "div._4f7n ._585_");
        this._handler.addSubscriptions(i.listen(l, 'click', this._runQuery.bind(this)), this._view.subscribe('highlight', this._highlight.bind(this)), this._view.subscribe('render', this._render.bind(this)), this._core.subscribe('close', this._close.bind(this)));
    };
    k.prototype.disable = function() {
        "use strict";
        this._handler.release();
    };
    k.prototype._highlight = function(l, m) {
        "use strict";
        this._selected = m.selected;
    };
    k.prototype._render = function(l, m) {
        "use strict";
        this._selected = this._view.results[this._view.index];
    };
    k.prototype._runQuery = function() {
        "use strict";
        if (this._selected)
            return this._core.selectView(null, {
                selected: this._selected
            });
    };
    k.prototype._close = function() {
        "use strict";
        this._selected = null;
    };
    e.exports = k;
}, null);
__d("FacebarTypeaheadNavigation", ["Arbiter", "FacebarNavigation", "copyProperties", "emptyFunction"], function(a, b, c, d, e, f, g, h, i, j) {
    function k(l) {
        "use strict";
        this._core = l.core;
        this._preserveQuery = false;
        this._typeahead = l;
    }
    k.prototype.enable = function() {
        "use strict";
        h.registerBehavior(this);
        this._core.subscribe('execute', this.executedUserQuery.bind(this));
    };
    k.prototype.executedUserQuery = function(l, m) {
        "use strict";
        this._preserveQuery = true;
    };
    k.prototype.pageTransition = function() {
        "use strict";
        if (!this._preserveQuery) {
            this._core.close();
            this._core.reset();
        } else 
            this._preserveQuery = false;
    };
    k.prototype.setPageQuery = function(l) {
        "use strict";
        l = this._core.setPageQuery(l);
        this._typeahead.inform('navigation', l, g.BEHAVIOR_PERSISTENT);
    };
    i(k.prototype, {
        disable: j
    });
    e.exports = k;
}, null);
__d("FacebarTypeaheadPrefixLengthOrderedCache", ["copyProperties", "emptyFunction", "Arbiter"], function(a, b, c, d, e, f, g, h, i) {
    function j(k) {
        "use strict";
        this._typeahead = k;
    }
    j.prototype.enable = function() {
        "use strict";
        this._typeahead.data.inform('setSortFunction', function(k, l) {
            if (k.cache_id_length != l.cache_id_length)
                return k.cache_id_length - l.cache_id_length;
            var m = (k.cost || 0) - (l.cost || 0);
            if (m !== 0)
                return m;
            return (k.semantic || '').localeCompare(l.semantic || '');
        }, i.BEHAVIOR_STATE);
    };
    g(j.prototype, {
        disable: h
    });
    e.exports = j;
}, null);
__d("FacebarTypeaheadQuickSelect", ["FacebarStructuredText", "URI"], function(a, b, c, d, e, f, g, h) {
    var i = '/search/web/direct_search.php';
    function j(k) {
        "use strict";
        this._core = k.getCore();
        this._view = k.getView();
        this._input = this._core.input;
        this._beforeSelectListener = null;
        this._quickSelectListener = null;
    }
    j.prototype.enable = function() {
        "use strict";
        this._beforeSelectListener = this._view.subscribe('beforeSelect', this._quickSelect.bind(this));
        this._quickSelectListener = this._view.subscribe('quickSelect', this._quickSelect.bind(this));
    };
    j.prototype._quickSelect = function(k, l) {
        "use strict";
        if (l && l.selected && l.selected.uid !== 'search')
            return true;
        var m = this._input.getValue().toArray(), n = new g(m), o = n.toString();
        if (!o)
            return true;
        var p = h(i).addQueryData('q', o), q = {
            input_query: o,
            type: 'quickselect',
            text: o,
            position: 0,
            with_mouse: 0,
            semantic: 'quickselect(' + p.toString() + ')',
            extra_uri_params: {
                source: 'quickselect',
                sid: this._core.getSessionID()
            },
            uri: p
        };
        this._core.inform('quickSelectRedirect', q);
        this._core.executeQuery(q);
        return false;
    };
    j.prototype.disable = function() {
        "use strict";
        this._beforeSelectListener && this._view.unsubscribe(this._beforeSelectListener);
        this._quickSelectListener && this._view.unsubscribe(this._quickSelectListener);
    };
    e.exports = j;
}, null);
__d("FacebarTypeaheadRecorderBasic", ["FacebarTypeaheadRecorder", "copyProperties"], function(a, b, c, d, e, f, g, h) {
    function i(j) {
        "use strict";
        this._typeahead = j;
    }
    i.prototype.enable = function() {
        "use strict";
        var j = this._typeahead;
        this._recorder = new g(j);
    };
    i.prototype.disable = function() {
        "use strict";
        this._typeahead.unsubscribe(this._subscription);
        this._recorder = null;
        this._subscription = null;
    };
    h(i.prototype, {
        _subscription: null
    });
    e.exports = i;
}, null);
__d("FacebarTypeaheadSeeMoreSerp", ["cx", "FacebarStructuredText", "FacebarURI", "fbt", "URI", "React"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    function m(n) {
        "use strict";
        this.$FacebarTypeaheadSeeMoreSerp0 = n.getCore();
        this.$FacebarTypeaheadSeeMoreSerp1 = this.$FacebarTypeaheadSeeMoreSerp0.view;
    }
    m.prototype.enable = function() {
        "use strict";
        this.$FacebarTypeaheadSeeMoreSerp2 = this.$FacebarTypeaheadSeeMoreSerp1.subscribe('seeMore', this.$FacebarTypeaheadSeeMoreSerp3.bind(this));
    };
    m.prototype.disable = function() {
        "use strict";
        this.$FacebarTypeaheadSeeMoreSerp2.unsubscribe();
    };
    m.prototype.$FacebarTypeaheadSeeMoreSerp3 = function(n, o) {
        "use strict";
        var p = o.value.toString().trim();
        p = p.replace(/web\ssearch[\:]*\s*/i, '');
        var q = j._("See more results for \"{query}\"", [j.param("query", p)]), r = l.createElement("div", {
            className: "_57zy calltoaction",
            "aria-label": q
        }, l.createElement("span", {
            className: "text"
        }, l.createElement("span", {
            className: "seeMore"
        }, q))), s = k(this.$FacebarTypeaheadSeeMoreSerp1.seeMoreSerpEndpoint).addQueryData('q', p).addQueryData('sid', this.$FacebarTypeaheadSeeMoreSerp0.getSessionID());
        s = i.getQualifiedURI(s);
        return {
            uid: 'see_more_serp',
            node: r,
            structure: new h(),
            search: true,
            uri: s,
            semantic: 'seemore(' + p + ')',
            type: 'see_more_serp',
            text: p
        };
    };
    e.exports = m;
}, null);
__d("FacebarTypeaheadSelectAll", ["requestAnimationFrame"], function(a, b, c, d, e, f, g) {
    function h(i) {
        "use strict";
        this._core = i.getCore();
        this._listener = null;
    }
    h.prototype.enable = function() {
        "use strict";
        var i = this._core.input;
        this._listener = this._core.subscribe('focus', function(j, k) {
            var l = k && k.catchup;
            l || g(function() {
                i.selectInput();
            });
        });
    };
    h.prototype.disable = function() {
        "use strict";
        this._listener && this._core.unsubscribe(this._listener);
    };
    e.exports = h;
}, null);
__d("FacebarTypeaheadShortcut", ["FacebarTypeaheadShortcutConfig", "KeyEventController", "Run", "copyProperties", "emptyFunction"], function(a, b, c, d, e, f, g, h, i, j, k) {
    function l(m) {
        "use strict";
        this._input = m.core.input;
        this._view = m.view;
        this._listener = null;
    }
    l.prototype.enable = function() {
        "use strict";
        this._registerListener();
    };
    l.prototype._registerListener = function() {
        "use strict";
        h.registerKey('SLASH', this._handleKeydown.bind(this));
        i.onLeave(function() {
            setTimeout(this._registerListener.bind(this), 0);
        }.bind(this));
    };
    l.prototype._handleKeydown = function(m) {
        "use strict";
        var n = m.getModifiers().shift;
        if (n&&!g.gkWebShortcut)
            return;
        this._view.setAutoSelect(true);
        this._input.focus();
        this._input.selectInput();
        this._input.inform('shortcut', {
            shift: n
        });
        return false;
    };
    j(l.prototype, {
        disable: k
    });
    e.exports = l;
}, null);
__d("FacebarTypeaheadSizeAdjuster", ["copyProperties", "getElementChildren", "confine", "emptyFunction", "isTextNode", "Style", "Vector"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = 12, o = 20, p = 50, q = 200, r = 5;
    function s(u) {
        if (k(u))
            return 0;
        return m.getElementDimensions(u).x;
    }
    function t(u) {
        "use strict";
        this._core = u.getCore();
        this._view = this._core.view;
        this._input = this._core.input;
        this._cachedSizes = {};
        this._appliedSize = null;
        this._defaultSize = this.getDefaultFontSize();
        this._calculatedSize = this._defaultSize;
        this._containerWidth = this.getContainerWidth();
    }
    t.prototype.enable = function() {
        "use strict";
        this._input.subscribe('change', this.adjustFontSize.bind(this));
        this.adjustFontSize();
    };
    t.prototype.getContainerWidth = function() {
        "use strict";
        return m.getElementDimensions(this._input.getElement()).x;
    };
    t.prototype.getDefaultFontSize = function() {
        "use strict";
        var u = l.get(this._input.getElement(), 'font-size'), v = /^([\d\.]+)px$/.exec(u), w = v && Number(v[1]);
        return Math.max(n, Math.min(o, w));
    };
    t.prototype.calculateFontSize = function() {
        "use strict";
        var u = this.getTextWidth(), v = this._calculatedSize;
        if (u > this._containerWidth - p) {
            v--;
        } else if (u < this._containerWidth - q)
            v++;
        this._calculatedSize = i(v, n, this._defaultSize);
        return this._calculatedSize;
    };
    t.prototype.getTextWidth = function() {
        "use strict";
        var u = this._calculatedSize + this.getValueKey();
        if (!this._cachedSizes.hasOwnProperty(u))
            this._cachedSizes[u] = this.measureTextWidth();
        return this._cachedSizes[u];
    };
    t.prototype.getValueKey = function() {
        "use strict";
        var u = this._core.getValue().getHash(), v = r * Math.floor(u.length / r);
        return u.substr(0, v);
    };
    t.prototype.measureTextWidth = function() {
        "use strict";
        var u = h(this._input.getRawInputElement());
        return u.reduce(function(v, w) {
            return v + s(w);
        }, 0);
    };
    t.prototype.adjustFontSize = function() {
        "use strict";
        for (var u = 0; u < 10; u++) {
            var v = this.calculateFontSize();
            if (v != this._appliedSize) {
                this._appliedSize = v;
                l.set(this._input.getElement(), 'font-size', v + 'px');
                l.set(this._view.content, 'font-size', v + 'px');
            } else 
                break;
        }
    };
    g(t.prototype, {
        disable: j
    });
    e.exports = t;
}, null);
