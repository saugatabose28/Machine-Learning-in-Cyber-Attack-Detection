/*!CK:512221971!*/
/*1415599373,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["HZ2A6"]);
}

__d("BusinessConf", [], function(a, b, c, d, e, f) {
    e.exports = {
        DOMAIN: "business",
        BIZ_ID_PARAM_NAME: "business_id",
        LABEL_ID_PARAM_NAME: "label_id",
        ACCOUNT_ID_PARAM_NAME: "act",
        ACCOUNT_ID_PARAM_NAME_LONG: "account_id",
        ACCOUNT_IDS_PARAM_NAME_LONG: "account_ids",
        PAGE_ID_PARAM_NAME: "id",
        PAGE_ADMIN_SELECTED_KEY: "sk",
        PRODUCT_CATALOG_ID_PARAM_NAME: "catalog_id",
        PRODUCT_FEED_ID_PARAM_NAME: "feed_id",
        LEGACY_ADS_MANAGER_PREFIX: "\/ads\/manage\/",
        CAMPAIGN_MANAGER_PREFIX: "\/ads\/manager\/",
        SHOW_SPLASH_PARAM_NAME: "splash",
        WHITELISTED_URI_CLASS: "bizOK",
        OPT_OUT_KEY: "do_not_redirect_to_biz_site",
        OPT_OUT_EXPIRE: 86400,
        HIGHLANDER_OPT_OUT_KEY: "use_biz_page_in_highlander"
    };
}, null);
__d("BusinessAssetGrouping.brands", ["emptyFunction", "getObjectValues"], function(a, b, c, d, e, f, g, h) {
    'use strict';
    var i = "personal-business", j = {
        NULL_BIZ_ID: i,
        groupAssets: function(r, s, t, u, v, w, x, y) {
            v = v || o;
            w = w || g.thatReturnsTrue;
            var z = k(r, s, t), aa = z.businessesByID;
            aa[i] = {
                id: i,
                name: x || "You"
            };
            var ba = l(z.assetsByBizID, aa, u), ca = p(h(ba), n);
            if (y && ca[0].bizID === i)
                ca.shift();
            var da = [];
            for (var ea = 0; ea < ca.length; ea++) {
                var fa = ca[ea], ga = false;
                fa.assets = p(fa.assets, v);
                fa.assets = q(fa.assets, w, fa.bizID);
                if (fa.assets.length !== 0) {
                    da = da.concat(fa.assets);
                    ga = true;
                }
                fa.projects = p(h(fa.projectsByID), m);
                delete fa.projectsByID;
                for (var ha = 0; ha < fa.projects.length; ha++) {
                    fa.projects[ha].assets = p(fa.projects[ha].assets, v);
                    fa.projects[ha].assets = q(fa.projects[ha].assets, w, fa.bizID);
                    if (fa.projects[ha].assets.length !== 0) {
                        da = da.concat(fa.projects[ha].assets);
                        ga = true;
                    }
                }
                if (!ga)
                    ca[ea] = null;
            }
            ca = ca.filter(function(ia) {
                return ia;
            });
            return {
                businessesByID: aa,
                groupedAssets: ca,
                assets: da
            };
        }
    };
    function k(r, s, t) {
        var u = {}, v = {};
        for (var w = 0; w < r.length; w++) {
            var x = r[w], y = t(x);
            if (!y || y.length === 0) {
                u[i] ? u[i].push(x) : u[i] = [x];
                continue;
            }
            for (var z = 0; z < y.length; z++) {
                var aa = y[z], ba;
                if (aa.business) {
                    ba = aa.business.id;
                    v[ba] = aa.business;
                } else 
                    ba = i;
                if (u[ba]) {
                    u[ba].push(x);
                } else 
                    u[ba] = [x];
            }
        }
        return {
            assetsByBizID: u,
            businessesByID: v
        };
    }
    function l(r, s, t) {
        var u = {}, v;
        for (var w in r) {
            v = r[w];
            u[w] = u[w] || {
                bizID: w,
                name: s[w].name,
                projectsByID: {},
                assets: []
            };
            for (var x = 0; x < v.length; x++) {
                var y = v[x], z = t(y), aa = false;
                if (w !== i && z && z.length > 0)
                    for (var ba = 0; ba < z.length; ba++) {
                        var ca = z[ba];
                        if (ca.business && ca.business.id !== w)
                            continue;
                            var da = u[w].projectsByID;
                            da[ca.id] = da[ca.id] || {
                                projectID: ca.id,
                                name: s[w].name + " - " + ca.name,
                                assets: []
                            };
                            da[ca.id].assets.push(y);
                            aa = true;
                    }
                if (!aa)
                    u[w].assets.push(y);
            }
        }
        return u;
    }
    function m(r) {
        return (r.name || "").toUpperCase();
    }
    function n(r) {
        if (r.bizID === i)
            return String.fromCharCode(0);
        return r.name;
    }
    function o(r) {
        return r.name ? r.name : r.id;
    }
    function p(r, s) {
        return r.sort(function(t, u) {
            var v = s(t), w = s(u);
            if (v > w) {
                return 1;
            } else if (v < w) {
                return - 1;
            } else 
                return 0;
        });
    }
    function q(r, s, t) {
        return r.filter(function(u) {
            return s(u, t);
        });
    }
    e.exports = j;
}, null);
__d("BizSiteIdentifier.brands", ["BusinessConf", "BusinessAssetGrouping.brands", "URI"], function(a, b, c, d, e, f, g, h, i) {
    var j = h.NULL_BIZ_ID, k = {
        isBizSite: function() {
            return i.getRequestURI(false).getSubdomain() === g.DOMAIN;
        },
        getBusinessID: function() {
            return i.getRequestURI(false).getQueryData()[g.BIZ_ID_PARAM_NAME];
        },
        createBusinessURL: function(l, m) {
            if (m === j)
                return i(l).setSubdomain('www');
            var n = i(l).setSubdomain(g.DOMAIN);
            if (k.isBizSite())
                n.setDomain(i.getRequestURI().getDomain());
            var o = m || k.getBusinessID();
            n.addQueryData(g.BIZ_ID_PARAM_NAME, o);
            return n;
        }
    };
    e.exports = k;
}, null);
__d("HashtagParser", ["URLMatcher", "getHashtagRegex"], function(a, b, c, d, e, f, g, h) {
    var i = 100, j = 30, k = /@\[([0-9]+):([0-9]+):((?:[^\\\]]*(?:\\.)*)*)\]/g;
    function l(da) {
        var ea = y(da), fa = 0, ga = 0;
        return n(da).map(function(ha) {
            while (fa < ea.length) {
                var ia = ea[fa], ja = ia.offset - ga;
                if (ja < ha.offset) {
                    ga += ia.token.length - ia.name.length;
                    fa++;
                } else 
                    break;
            }
            return {
                marker: ha.marker,
                tag: ha.hashtag,
                rawOffset: ha.offset + ga,
                offset: ha.offset
            };
        });
    }
    function m(da) {
        return o(da, t(da));
    }
    function n(da) {
        var ea = aa(da);
        return o(ea, p(da, ea));
    }
    function o(da, ea) {
        return r(da).slice(0, j).filter(function(fa) {
            var ga = v(fa.offset, fa.hashtag.length, ea);
            return !ga && fa.hashtag.length <= i;
        });
    }
    function p(da, ea) {
        return u(s(da), t(ea));
    }
    var q = h();
    function r(da) {
        var ea = [];
        da.replace(q, function(fa, ga, ha, ia, ja) {
            ea.push({
                marker: ha,
                hashtag: ia,
                offset: ja + ga.length
            });
        });
        return ea;
    }
    function s(da) {
        return ba(da).map(function(ea) {
            return [ea.offset, ea.name.length];
        });
    }
    function t(da) {
        var ea = [], fa, ga = 0;
        while ((fa = g.permissiveMatch(da))) {
            var ha = da.indexOf(fa);
            ea.push([ga + ha, fa.length]);
            da = da.substring(ha + fa.length);
            ga += ha + fa.length;
        }
        return ea;
    }
    function u(da, ea) {
        var fa = [], ga = 0, ha = 0, ia = 0;
        while (ga < da.length && ha < ea.length)
            if (da[ga][0] > ea[ha][0]) {
                fa[ia++] = ea[ha++];
            } else 
                fa[ia++] = da[ga++];
        return fa.concat(da.slice(ga), ea.slice(ha));
    }
    function v(da, ea, fa) {
        if (!fa)
            return false;
        var ga = x(fa, da);
        return w(da, ea, fa, ga) || w(da, ea, fa, ga + 1);
    }
    function w(da, ea, fa, ga) {
        if (!fa[ga])
            return false;
        var ha = fa[ga][0], ia = fa[ga][1];
        return !((da + ea - 1 < ha) || (da > ha + ia - 1));
    }
    function x(da, ea) {
        var fa = 0, ga = da.length - 1;
        while (fa <= ga) {
            var ha = Math.floor((fa + ga) / 2), ia = da[ha][0];
            if (ia == ea) {
                return ha;
            } else if (ia < ea) {
                fa = ha + 1;
            } else 
                ga = ha - 1;
        }
        return ga;
    }
    function y(da) {
        var ea = [];
        da.replace(k, function(fa, ga, ha, ia, ja) {
            ea.push({
                token: fa,
                id: ga,
                type: ha,
                name: ia,
                offset: ja
            });
        });
        return ea;
    }
    function z(da) {
        return da ? da.replace(/\\([^\\])/g, '$1').replace(/\\\\/g, '\\') : null;
    }
    function aa(da) {
        return da.replace(k, function(ea, fa, ga, ha, ia) {
            return z(ha);
        });
    }
    function ba(da) {
        var ea = 0, fa = 0;
        return y(da).map(function(ga) {
            var ha = da.indexOf(ga.token, fa);
            fa = ha + 1;
            ha -= ea;
            var ia = z(ga.name);
            ea += ga.token.length - ia.length;
            if (ha >= 0)
                return {
                    id: ga.id,
                    name: ia,
                    type: ga.type,
                    offset: ha
                };
        });
    }
    var ca = {};
    ca.parse = l;
    ca.parseWithoutMentions = m;
    e.exports = ca;
}, null);
__d("FriendsCenterStickyController", ["StickyController"], function(a, b, c, d, e, f, g) {
    for (var h in g)
        if (g.hasOwnProperty(h))
            j[h] = g[h];
    var i = g === null ? null: g.prototype;
    j.prototype = Object.create(i);
    j.prototype.constructor = j;
    j.__superConstructor__ = g;
    function j(k, l, m, n) {
        "use strict";
        g.call(this, k, l, m, n);
        this.$FriendsCenterStickyController0 = l;
        this.$FriendsCenterStickyController1 = n || k.parentNode;
        var o = k.getBoundingClientRect();
        this.$FriendsCenterStickyController2 = o.bottom - o.top;
        this.$FriendsCenterStickyController3 = true;
    }
    j.prototype.unstick = function() {
        "use strict";
        this.$FriendsCenterStickyController3 = false;
        this.handleScroll();
    };
    j.prototype.restick = function() {
        "use strict";
        this.$FriendsCenterStickyController3 = true;
        this.handleScroll();
    };
    j.prototype.shouldFix = function() {
        "use strict";
        if (!this.$FriendsCenterStickyController3)
            return false;
        var k = this.$FriendsCenterStickyController1.getBoundingClientRect();
        return this.$FriendsCenterStickyController0 >= k.top && this.$FriendsCenterStickyController0 + this.$FriendsCenterStickyController2 < k.bottom;
    };
    e.exports = j;
}, null);
__d("FriendsCenterStickyHeader", ["CSS", "DOM", "FriendsCenterStickyController", "Style", "Vector", "csx", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = [];
    function o(p) {
        "use strict";
        var q = h.scry(document, "div._4f7n")[0];
        if (!q)
            return;
        var r = j.isFixed(q) ? k.getElementDimensions(q).y: 0, s = this.getPlaceholder(p.getBoundingClientRect());
        h.insertAfter(p, s);
        g.addClass(p, "_5m65");
        var t = new i(p, r, function(u) {
            g.conditionShow(s, u);
            g.conditionClass(p, 'stuck', u);
        }.bind(this));
        t.start();
        n[p.id] = t;
    }
    o.prototype.getPlaceholder = function(p) {
        "use strict";
        var q = h.create('div');
        g.hide(q);
        j.set(q, 'height', (p.bottom - p.top) + 'px');
        j.set(q, 'width', (p.right - p.left) + 'px');
        return q;
    };
    o.stopSticky = function(p) {
        "use strict";
        p && (p.id in n) && n[p.id].unstick();
    };
    o.startSticky = function(p) {
        "use strict";
        p && (p.id in n) && n[p.id].restick();
    };
    e.exports = o;
}, null);
__d("FriendBrowserCheckboxController", ["Arbiter", "AsyncRequest", "CSS", "DOM", "Event", "Form", "FriendsCenterStickyHeader", "OnVisible", "$", "bind", "copyProperties", "csx", "ge"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
    var t = 'friend_browser_list';
    function u() {}
    q(u, {
        instances: {},
        getInstance: function(v) {
            return this.instances[v];
        }
    });
    q(u.prototype, {
        init: function(v, w, x, y) {
            u.instances[v] = this;
            this._id = v;
            this._simplified = x;
            this._infiniteScroll = y;
            this._form = w;
            this._contentGrid = j.find(w, '.friendBrowserCheckboxContentGrid');
            this._loadingIndicator = j.find(w, '.friendBrowsingCheckboxContentLoadingIndicator');
            this._checkboxResults = j.find(w, '.friendBrowserCheckboxResults');
            this._contentPager = j.find(w, '.friendBrowserCheckboxContentPager');
            this._standaloneFilters = null;
            this._searchStarted = false;
            this._stickyHeader = null;
            g.subscribe('friend-browser/name-change', this.getNew.bind(this, false));
            this.numGetNewRequests = 0;
            this.queuedRequests = {};
            k.listen(this._form, 'submit', this.onFormSubmit.bind(this));
        },
        addTypeahead: function(v, w) {
            v.subscribe('select', this.onHubSelect.bind(this, v, w));
            if (this._simplified)
                v.subscribe('unselect', this.onHubSelect.bind(this, v, w));
        },
        setStandaloneFilters: function(v) {
            if (v) {
                this._standaloneFilters = j.scry(document.body, '.friendBrowserCheckboxFilters')[0];
                this._stickyHeader = j.scry(o('fbSearchResultsBox'), "._5m65")[0];
                var w = o('doneSearchButton');
                w.onclick = function() {
                    this._searchStarted = false;
                    j.scry(document.body, "._5n-u").forEach(function(x) {
                        i.show(x);
                    });
                    i.hide(w);
                    window.scrollTo(0, 0);
                    m.startSticky(this._stickyHeader);
                }.bind(this);
            }
            return this;
        },
        onFormSubmit: function() {
            this.getNew(true);
            return false;
        },
        addSelector: function(v) {
            v.subscribe('change', this.getNew.bind(this, false));
        },
        onHubSelect: function(v, w, event, x) {
            if (this._simplified) {
                this.getNew(true);
                return;
            }
            if (!((event == 'select') && x.selected))
                return;
            var y = this.buildNewCheckbox(w, x.selected.text, x.selected.uid), z = j.find(this._standaloneFilters || this._form, '.checkboxes_' + w);
            j.appendContent(z.firstChild, y);
            var aa = j.scry(v.getElement(), 'input[type="button"]');
            if (aa && aa[0])
                aa[0].click();
            this.getNew(true);
        },
        buildNewCheckbox: function(v, w, x) {
            var y = v + '_ids_' + x, z = v + '_ids[]', aa = j.create('input', {
                id: y,
                type: 'checkbox',
                value: x,
                name: z,
                checked: true
            });
            k.listen(aa, 'click', p(this, 'getNew', false));
            var ba = j.create('td', null, aa);
            i.addClass(ba, 'vTop');
            i.addClass(ba, 'hLeft');
            var ca = j.create('label', null, w), da = j.create('td', null, ca);
            i.addClass(da, 'vMid');
            i.addClass(da, 'hLeft');
            var ea = j.create('tr');
            ea.appendChild(ba);
            ea.appendChild(da);
            return ea;
        },
        showMore: function() {
            var v = j.scry(this._contentPager, '.friendBrowserMorePager')[0];
            if (!v)
                return false;
            if (i.hasClass(v, 'async_saving'))
                return false;
            var w = this.numGetNewRequests, x = this.getFormData();
            x.show_more = true;
            if (this._searchStarted)
                x.page = t;
            new h().setURI('/ajax/growth/friend_browser/checkbox.php').setData(x).setHandler(p(this, function(y) {
                this.showMoreHandler(y, w);
            })).setStatusElement(v).send();
        },
        showMoreHandler: function(v, w) {
            if (w == this.numGetNewRequests) {
                var x = v.payload;
                j.appendContent(this._contentGrid, x.results);
                this.updatePagerAndExtraData(x.pager, x.extra_data);
            }
        },
        getFormData: function() {
            var v = l.serialize(this._form);
            if (this._standaloneFilters) {
                var w = l.serialize(this._standaloneFilters);
                for (var x in w)
                    v[x] = w[x];
            }
            return v;
        },
        getNew: function(v) {
            this.numGetNewRequests++;
            var w = this.numGetNewRequests;
            i.addClass(this._checkboxResults, 'friendBrowserCheckboxContentOnload');
            if (s('friendBrowserCI'))
                i.addClass(o('friendBrowserCI'), 'friendBrowserCheckboxContentOnload');
            this.startStandaloneSearch();
            i.show(this._loadingIndicator);
            var x = this.getFormData();
            x.used_typeahead = v;
            if (this._searchStarted)
                x.page = t;
            new h().setURI('/ajax/growth/friend_browser/checkbox.php').setData(x).setHandler(p(this, function(y) {
                this.getNewHandler(y, w);
            })).send();
        },
        getNewHandler: function(v, w) {
            if (w == this.numGetNewRequests) {
                var x = v.payload;
                j.setContent(this._contentGrid, x.results);
                i.removeClass(this._checkboxResults, 'friendBrowserCheckboxContentOnload');
                if (s('friendBrowserCI'))
                    i.hide(o('friendBrowserCI'));
                i.hide(this._loadingIndicator);
                this.updatePagerAndExtraData(x.pager, x.extra_data);
            }
        },
        startStandaloneSearch: function() {
            if (!this._standaloneFilters)
                return;
            window.scrollTo(0, 0);
            if (this._searchStarted)
                return;
            this._searchStarted = true;
            i.show(o('fbSearchResultsBox'));
            j.scry(document.body, "._5n-u").forEach(function(v) {
                i.hide(v);
            });
            i.show(o('doneSearchButton'));
            m.stopSticky(this._stickyHeader);
        },
        updatePagerAndExtraData: function(v, w) {
            j.setContent(this._contentPager, v);
            if (this._infiniteScroll)
                this.setupOnVisible();
            j.replace(this._form.elements.extra_data, w);
        },
        setupOnVisible: function() {
            var v = j.scry(this._contentPager, '.friendBrowserMorePager')[0];
            if (v && this._id != 'jewel') {
                this._onVisible && this._onVisible.remove();
                this._onVisible = new n(v, p(this, 'showMore'), false, 1000);
            }
        }
    });
    e.exports = u;
}, null);
__d("QuicklingAugmenter", ["URI"], function(a, b, c, d, e, f, g) {
    var h = [], i = {
        addHandler: function(j) {
            h.push(j);
        },
        augmentURI: function(j) {
            var k = [], l = g(j);
            h.forEach(function(m) {
                var n = m(l);
                if (!n)
                    return l;
                k.push(m);
                l = l.addQueryData(n);
            });
            h = k;
            return l;
        }
    };
    e.exports = i;
}, null);
__d("Quickling", ["AjaxPipeRequest", "Arbiter", "CSSClassTransition", "DocumentTitle", "DOM", "ErrorUtils", "HTML", "OnloadHooks", "PageTransitions", "QuicklingAugmenter", "QuicklingConfig", "Run", "URI", "UserAgent_DEPRECATED", "PHPQuerySerializer", "goOrReplace", "isEmpty"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w) {
    var x = q.version, y = q.sessionLength, z = new RegExp(q.inactivePageRegex), aa = 0, ba, ca = '', da = [];
    function ea() {
        da.forEach(clearTimeout);
        da.length = 0;
    }
    function fa() {
        if (da.length === 0)
            r.onLeave(ea);
    }
    var ga = {
        isActive: function() {
            return true;
        },
        isPageActive: function(pa) {
            if (pa == '#')
                return false;
            pa = new s(pa);
            if (pa.getDomain() && pa.getDomain() != s().getDomain())
                return false;
            if (pa.getPath() == '/l.php') {
                var qa = pa.getQueryData().u;
                if (qa) {
                    qa = s(unescape(qa)).getDomain();
                    if (qa && qa != s().getDomain())
                        return false;
                }
            }
            var ra = pa.getPath(), sa = pa.getQueryData();
            if (!w(sa))
                ra += '?' + u.serialize(sa);
            return !z.test(ra);
        },
        getLoadCount: function() {
            return aa;
        }
    };
    function ha(pa) {
        pa = pa || 'Facebook';
        j.set(pa);
        if (t.ie()) {
            ca = pa;
            if (!ba)
                ba = window.setInterval(function() {
                    var qa = ca, ra = j.get();
                    if (qa != ra)
                        j.set(qa);
                    }, 5000, false);
        }
    }
    function ia(pa) {
        var qa = document.getElementsByTagName('link');
        for (var ra = 0; ra < qa.length; ++ra) {
            if (qa[ra].rel != 'alternate')
                continue;
            k.remove(qa[ra]);
        }
        if (pa.length) {
            var sa = k.find(document, 'head');
            sa && k.appendContent(sa, m(pa[0]));
        }
    }
    for (var ja in g)
        if (g.hasOwnProperty(ja))
            la[ja] = g[ja];
    var ka = g === null ? null: g.prototype;
    la.prototype = Object.create(ka);
    la.prototype.constructor = la;
    la.__superConstructor__ = g;
    function la(pa) {
        "use strict";
        var qa = {
            version: x
        };
        g.call(this, pa, {
            quickling: qa
        });
    }
    la.prototype._preBootloadFirstResponse = function(pa) {
        "use strict";
        return true;
    };
    la.prototype._fireDomContentCallback = function() {
        "use strict";
        this._request.cavalry && this._request.cavalry.setTimeStamp('t_domcontent');
        o.transitionComplete();
        this._onPageDisplayed && this._onPageDisplayed(this.pipe);
        ka._fireDomContentCallback.call(this);
    };
    la.prototype._fireOnloadCallback = function() {
        "use strict";
        if (this._request.cavalry) {
            this._request.cavalry.setTimeStamp('t_hooks');
            this._request.cavalry.setTimeStamp('t_layout');
            this._request.cavalry.setTimeStamp('t_onload');
        }
        ka._fireOnloadCallback.call(this);
    };
    la.prototype.isPageActive = function(pa) {
        "use strict";
        return ga.isPageActive(pa);
    };
    la.prototype._versionCheck = function(pa) {
        "use strict";
        if (pa.version == x)
            return true;
        var qa = ['quickling', 'ajaxpipe', 'ajaxpipe_token'];
        v(window.location, s(pa.uri).removeQueryData(qa), true);
        return false;
    };
    la.prototype._processFirstResponse = function(pa) {
        "use strict";
        var qa = pa.getPayload();
        ha(qa.title);
        ia(qa.syndication || []);
        window.scrollTo(0, 0);
        i.go(document.body, qa.body_class || '', o.getMostRecentURI(), pa.getRequest().getURI());
        h.inform('quickling/response');
    };
    la.prototype.getSanitizedParameters = function() {
        "use strict";
        return ['quickling'];
    };
    function ma() {
        aa++;
        return aa >= y;
    }
    function na(pa) {
        g.setCurrentRequest(null);
        if (ma())
            return false;
        pa = p.augmentURI(pa);
        if (!ga.isPageActive(pa))
            return false;
        window.ExitTime = Date.now();
        r.__removeHook('onafterloadhooks');
        r.__removeHook('onloadhooks');
        n.runHooks('onleavehooks');
        h.inform('onload/exit', true);
        new la(pa).setCanvasId('content').send();
        return true;
    }
    function oa(pa) {
        var qa = window[pa];
        function ra(sa, ta, ua) {
            if (typeof sa !== 'function')
                sa = eval.bind(null, sa);
            var va = qa(l.guard(sa, pa + ' (with Quickling)'), ta);
            if (ta > 0 && ua !== false) {
                fa();
                da.push(va);
            }
            return va;
        }
        window[pa] = ra;
    }
    r.onAfterLoad(function pa() {
        oa('setInterval');
        oa('setTimeout');
        o.registerHandler(na, 1);
    });
    e.exports = a.Quickling = ga;
}, null);
__d("TypeaheadRegulateMemorializedUsers", ["TokenizeUtil", "copyProperties"], function(a, b, c, d, e, f, g, h) {
    function i(j) {
        "use strict";
        this._typeahead = j;
    }
    i.prototype._filter = function(j, k) {
        "use strict";
        if (j.type !== 'user' ||!j.memorialized)
            return true;
        var l = g.parse(j.text).tokens;
        if (l.length === 1 && g.isExactMatch(k, j.text))
            return true;
        var m = this._typeahead.getData().getTextToIndex(j), n = g.parse(k).tokens;
        return (n.length > 1 && g.isQueryMatch(k, m));
    };
    i.prototype.enable = function() {
        "use strict";
        this._filterRegistry = this._typeahead.getData().addFilter(this._filter.bind(this));
    };
    i.prototype.disable = function() {
        "use strict";
        this._filterRegistry.remove();
        this._filterRegistry = null;
    };
    h(i.prototype, {
        _filterRegistry: null
    });
    e.exports = i;
}, null);
__d("legacy:RegulateMemorializedUsersTypeaheadBehavior", ["TypeaheadRegulateMemorializedUsers"], function(a, b, c, d, e, f, g) {
    if (!a.TypeaheadBehaviors)
        a.TypeaheadBehaviors = {};
    a.TypeaheadBehaviors.regulateMemorializedUsers = function(h) {
        h.enableBehavior(g);
    };
}, 3);
