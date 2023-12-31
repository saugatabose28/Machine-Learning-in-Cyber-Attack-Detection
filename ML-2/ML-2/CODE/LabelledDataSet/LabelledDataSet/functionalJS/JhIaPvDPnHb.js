/*!CK:298402774!*/
/*1415599373,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["0wgqL"]);
}

__d("ComposerTargetType", [], function(a, b, c, d, e, f) {
    e.exports = {
        SELF_USER: "feed",
        OTHER_USER: "wall",
        GROUP: "group",
        PAGE: "page",
        EVENT: "event"
    };
}, null);
__d("ComposerXAjaxEndpoint", [], function(a, b, c, d, e, f) {
    e.exports = {
        ADS_MEDIA_UPLOAD: "\/ajax\/ads\/create\/composerx\/attachment\/media\/upload\/",
        ADS_ATTACHMENT_STATUS: "\/ajax\/ads\/create\/composerx\/attachment\/status\/",
        MEDIA_UPLOAD: "\/ajax\/composerx\/attachment\/media\/upload\/"
    };
}, null);
__d("ComposerXContextConfig", [], function(a, b, c, d, e, f) {
    e.exports = {
        propertyNames: {
            actorID: "ACTOR_ID",
            postID: "POST_ID"
        },
        propertyValues: {
            ACTOR_ID: "actorID",
            POST_ID: "postID"
        }
    };
}, null);
__d("PrivacyRemindersLoggingTypes", [], function(a, b, c, d, e, f) {
    e.exports = {
        ONLY_ME_IMPRESSION: "only_me_impression",
        ONLY_ME_CONVERSION: "only_me_conversion",
        EVERYONE_IMPRESSION: "everyone_impression",
        EVERYONE_CONVERSION: "everyone_conversion",
        EVERYONE_TESTS_IMPRESSION: "everyone_tests_impression",
        EVERYONE_TESTS_CONVERSION: "everyone_tests_conversion",
        PUBLIC_POSTING_FILTER_NUX_IMPRESSION: "public_posting_filter_nux_impression",
        PUBLIC_POSTING_FILTER_NUX_CONVERSION: "public_posting_filter_nux_conversion",
        DELTA_EVERYONE_IMPRESSION: "delta_everyone_impression",
        DELTA_EVERYONE_CONVERSION: "delta_everyone_conversion",
        DELTA_EVERYONE_OK_BUTTON_CLICKED: "delta_everyone_ok_button_clicked",
        DELTA_EVERYONE_CHANGE_BUTTON_CLICKED: "delta_everyone_change_button_clicked"
    };
}, null);
__d("SuggestionConfig", [], function(a, b, c, d, e, f) {
    e.exports = {
        OG_TAGGER_TYPEAHEAD_BOOTSTRAP: "ogtaggertypeaheadbootstrap",
        OG_TAGGER_TYPEAHEAD_BOOTSTRAP_NO_RECENT_ACTION: "ogtaggertypeaheadbootstrapnorecentaction",
        GROUP_POST_COMPOSER: "grouppostcomposer",
        OG_SUGGESTION_BY_INPUT: "ogsuggestionbyinput"
    };
}, null);
__d("SuggestionUIPresentation", [], function(a, b, c, d, e, f) {
    e.exports = {
        FLYOUT: 1,
        TAGGER_BADGE: 2,
        ADD_TAG: 3
    };
}, null);
__d("ComposerXAttachmentBootstrap", ["CSS", "Form", "Parent", "URI", "cx"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = [], m = {
        bootstrap: function(n) {
            m.load(i.byTag(n, 'form'), n.getAttribute('data-endpoint'));
        },
        load: function(n, o, p) {
            var q = j(o).addQueryData({
                composerurihash: m.getURIHash(o)
            });
            g.conditionClass(n, "_fu", p);
            var r = i.byClass(n, "_2_4");
            g.removeClass(r, 'async_saving');
            h.setDisabled(n, false);
            n.action = q.toString();
            h.bootstrap(n);
        },
        getURIHash: function(n) {
            if (n === 'initial')
                return 'initial';
            var o = l.indexOf(n);
            if (o!==-1) {
                return o + '';
            } else {
                o = l.length;
                l[o] = n;
                return o + '';
            }
        }
    };
    e.exports = m;
}, null);
__d("ComposerXContext", ["ComposerXContextConfig", "invariant"], function(a, b, c, d, e, f, g, h) {
    var i = function(k) {
        return g.propertyNames[k];
    };
    function j(k) {
        "use strict";
        this.$ComposerXContext0 = {};
        for (var l in k)
            this.setProperty(l, k[l]);
    }
    j.prototype.getProperty = function(k) {
        "use strict";
        h(i(k));
        return this.$ComposerXContext0[k];
    };
    j.prototype.setProperty = function(k, l) {
        "use strict";
        h(i(k));
        this.$ComposerXContext0[k] = l;
        return this;
    };
    j.PROPERTIES = g.propertyValues;
    e.exports = j;
}, null);
__d("ComposerXSessionIDs", ["DOM", "cx"], function(a, b, c, d, e, f, g, h) {
    function i() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(l) {
            var m = Math.random() * 16 | 0, n = l == 'x' ? m: (m & 3 | 8);
            return n.toString(16);
        });
    }
    var j = {}, k = {
        getSessionID: function(l) {
            return j[l];
        },
        resetSessionID: function(l) {
            j[l] = i();
        },
        createSessionIDInput: function(l) {
            return g.create('input', {
                type: 'hidden',
                name: 'composer_session_id',
                className: "_5r_b",
                value: l
            });
        }
    };
    e.exports = k;
}, null);
__d("ShareModeConst", [], function(a, b, c, d, e, f) {
    var g = {
        SELF_PAGE: 'selfpage',
        PAGE: 'page',
        SELF_POST: 'self',
        FRIEND: 'friend',
        GROUP: 'group',
        ALBUM: 'album',
        MESSAGE: 'message'
    };
    e.exports = g;
}, null);
__d("ComposerXMarauderLogger", ["Event", "ComposerTargetType", "ComposerXSessionIDs", "MarauderLogger", "ShareModeConst"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = {};
    function m(o, p, q) {
        return function(r, s, t) {
            var u = l[r], v = i.getSessionID(r);
            if (!u ||!v)
                return;
            if (p) {
                if (!u.loggedEventTypes[v])
                    u.loggedEventTypes[v] = {};
                if (u.loggedEventTypes[v][o])
                    return;
                u.loggedEventTypes[v][o] = true;
            }
            var w = {
                composer_type: s,
                target_type: u.targetType,
                ref: u.entryPointRef,
                error_info: t
            };
            if (q) {
                w.has_photo = u.hasPhoto;
                w.has_video = u.hasVideo;
                w.xy_tag_count = u.numXYTags;
                w.with_tag_count = u.numWithTags;
                w.tags_user = u.numUserTags;
            }
            j.log(o, 'composer', w, undefined, undefined, v);
        };
    }
    var n = {
        registerComposer: function(o, p, q) {
            l[o.id] = {
                targetType: p,
                entryPointRef: q,
                loggedEventTypes: {},
                hasPhoto: false,
                hasVideo: false,
                numWithTags: 0,
                numXYTags: 0,
                numUserTags: 0
            };
        },
        updateHasPhoto: function(o, p) {
            if (!l[o])
                return;
            l[o].hasPhoto = p;
        },
        updateHasVideo: function(o, p) {
            if (!l[o])
                return;
            l[o].hasVideo = p;
        },
        updateNumWithTags: function(o, p) {
            if (!l[o])
                return;
            l[o].numWithTags = p;
        },
        updateNumXYTags: function(o, p) {
            if (!l[o])
                return;
            l[o].numXYTags = p;
            l[o].numWithTags = l[o].numWithTags - p;
        },
        updateNumUserTags: function(o, p) {
            if (!l[o])
                return;
            l[o].numUserTags = p;
        },
        listenForPostEvents: function(o, p) {
            if (!p)
                return [];
            return [g.listen(p, 'submit', function() {
                n.logPost(o);
            }), g.listen(p, 'success', function() {
                n.logPostSuccess(o);
            }), g.listen(p, 'error', function(event) {
                n.logPostFailure(o, null, {
                    error_code: event.data.response.error,
                    error_description: event.data.response.errorDescription,
                    error_summary: event.data.response.errorSummary
                });
            })];
        },
        setShareMode: function(o, p) {
            var q = l[o];
            if (!q)
                return;
            switch (p) {
            case k.SELF_POST:
                q.targetType = h.SELF_USER;
                break;
            case k.FRIEND:
                q.targetType = h.OTHER_USER;
                break;
            case k.PAGE:
            case k.SELF_PAGE:
                q.targetType = h.PAGE;
                break;
            case k.GROUP:
                q.targetType = h.GROUP;
                break;
            default:
                q.targetType = h.OTHER;
            }
        },
        logEntry: m('composer_entry', true, false),
        logCompleted: m('composer_post_completed', false, false),
        logPost: m('composer_post', false, false),
        logPostSuccess: m('composer_post_success', false, false),
        logPostFailure: m('composer_post_failure', false, false)
    };
    e.exports = n;
}, null);
__d("ComposerXSessionIDInserter", ["ComposerXSessionIDs", "DOM", "DOMQuery", "Event", "Parent", "csx", "cx", "onEnclosingPageletDestroy"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = {
        init: function(p) {
            var q = j.listen(p, 'submit', o._onSubmit);
            n(p, function() {
                q.remove();
            });
        },
        _onSubmit: function(p) {
            o.insertSessionInput(p.getTarget());
        },
        insertSessionInput: function(p) {
            var q = k.byClass(p, "_119");
            if (!q)
                return;
            var r = g.getSessionID(q.id);
            if (!r)
                return;
            var s = i.scry(p, "._5r_b")[0];
            if (!s) {
                h.prependContent(p, g.createSessionIDInput(r));
            } else 
                s.value = r;
        }
    };
    e.exports = o;
}, null);
__d("ComposerXStore", ["Arbiter", "ge"], function(a, b, c, d, e, f, g, h) {
    var i = {};
    function j(l, m) {
        return 'ComposerX/' + l + '/' + m;
    }
    var k = {
        set: function(l, m, n) {
            if (!i[l])
                i[l] = {};
            i[l][m] = n;
            g.inform(j(l, m), {}, g.BEHAVIOR_STATE);
        },
        get: function(l, m) {
            if (i[l])
                return i[l][m];
            return null;
        },
        getAllForComposer: function(l) {
            return i[l] || {};
        },
        waitForComponents: function(l, m, n) {
            g.registerCallback(n, m.map(j.bind(null, l)));
        }
    };
    g.subscribe('page_transition', function() {
        for (var l in i)
            if (!h(l))
                delete i[l];
    });
    e.exports = k;
}, null);
__d("ComposerX", ["ActorURI", "Arbiter", "ComposerXAttachmentBootstrap", "ComposerXContext", "ComposerXMarauderLogger", "ComposerXSessionIDs", "ComposerXSessionIDInserter", "ComposerXStore", "CSS", "DOM", "DOMQuery", "URI", "SubscriptionsHandler", "arrayContains", "copyProperties", "csx", "cx", "getObjectValues", "removeFromArray"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
    var z = 'any';
    function aa(ba) {
        "use strict";
        this._root = ba;
        this._composerID = ba.id;
        this._attachments = {};
        this._context = new j({});
        l.resetSessionID(this._composerID);
        m.init(this._root);
        this._subscriptionsHandler = new s();
        this._subscriptionsHandler.addSubscriptions(h.subscribe(['composer/publish', 'composer/close'], function(ca, da) {
            if (da.composer_id === this._composerID)
                this.reset();
        }.bind(this)));
        this._subscriptionsHandler.addSubscriptions.apply(this._subscriptionsHandler, k.listenForPostEvents(this._composerID, this._getContent()));
        this._attachmentFetchForm = q.find(ba, "._2_4");
    }
    aa.prototype.getAttachment = function(ba, ca, da) {
        "use strict";
        ba = this._augmentURI(ba);
        var ea = i.getURIHash(ba);
        this._endpointHashToShow = ea;
        var fa = this._attachments[ea];
        if (fa) {
            this._showAttachmentAfterComponentsLoaded(ea, da);
        } else 
            this.fetchAttachmentData(ba, ca);
    };
    aa.prototype.fetchAttachmentData = function(ba, ca) {
        "use strict";
        ba = this._augmentURI(ba);
        var da = i.getURIHash(ba);
        if (this._attachments[da])
            return;
        if (!t(this._currentFetchEndpoints, da)) {
            i.load(this._attachmentFetchForm, ba, ca);
            this._currentFetchEndpoints.push(da);
        }
    };
    aa.prototype.setAttachment = function(ba, ca, da, ea) {
        "use strict";
        y(this._currentFetchEndpoints, ba);
        this._setupAttachment(ba, ca, da, ea);
        this._showAttachmentAfterComponentsLoaded(ba, false);
    };
    aa.prototype.setInitialAttachment = function(ba, ca, da, ea, fa) {
        "use strict";
        if (fa)
            this._context = fa;
        ba = this._augmentURI(ba);
        var ga = i.getURIHash(ba);
        this._setupAttachment(ga, ca, da, ea);
        this._initialAttachmentEndpoint = ba;
        if (!this._currentInstance)
            this._showAttachmentAfterComponentsLoaded(ga, true);
    };
    aa.prototype.setComponent = function(ba, ca) {
        "use strict";
        if (!n.get(this._composerID, ba)) {
            n.set(this._composerID, ba, ca);
            p.appendContent(this._attachmentFetchForm, p.create('input', {
                type: 'hidden',
                name: 'loaded_components[]',
                value: ba
            }));
        }
    };
    aa.prototype.reset = function() {
        "use strict";
        if (this._currentInstance) {
            this._currentInstance.cleanup();
            this._currentInstance = null;
        }
        l.resetSessionID(this._composerID);
        for (var ba in this._attachments)
            this._attachments[ba].instance.reset();
        var ca = n.getAllForComposer(this._composerID);
        x(ca).forEach(function(fa) {
            if (fa.reset)
                fa.reset(fa);
        });
        var da = n.get(this._composerID, 'mainprivacywidget'), ea = da && da.instance && da.instance.getInstance().getInstance();
        ea && ea.selectDefaultOption();
        this.getAttachment(this._initialAttachmentEndpoint, false, true);
        h.inform('composer/reset');
    };
    aa.prototype.destroy = function() {
        "use strict";
        this._subscriptionsHandler.release();
    };
    aa.prototype.addPlaceholders = function(ba, ca) {
        "use strict";
        var da;
        for (var ea in this._attachments) {
            da = this._attachments[ea];
            if (da.instance === ba) {
                ca.forEach(function(fa) {
                    da.placeholders.push(fa);
                    da.required_components.push(fa.component_name);
                });
                break;
            }
        }
        if (this._currentInstance === ba)
            this._fillPlaceholders(ca);
    };
    aa.prototype.hasAttachmentWithClassName = function(ba) {
        "use strict";
        return q.scry(this._root, '.' + ba).length > 0;
    };
    aa.prototype.showAttachmentThrobber = function() {
        "use strict";
        o.addClass(this._attachmentFetchForm, 'async_saving');
    };
    aa.prototype.hideAttachmentThrobber = function() {
        "use strict";
        o.removeClass(this._attachmentFetchForm, 'async_saving');
    };
    aa.prototype.getContext = function() {
        "use strict";
        return this._context;
    };
    aa.prototype.getID = function() {
        "use strict";
        return this._composerID;
    };
    aa.prototype._setupAttachment = function(ba, ca, da, ea) {
        "use strict";
        ca.setComposerID(this._composerID);
        this._attachments[ba] = {
            instance: ca,
            placeholders: da,
            required_components: ea
        };
        var fa = this._getContent(), ga = ca.getRoot();
        if (ga.parentNode !== fa) {
            o.hide(ga);
            p.appendContent(fa, ga);
        }
    };
    aa.prototype._getContent = function() {
        "use strict";
        return q.find(this._root, "div._55d0");
    };
    aa.prototype._showAttachment = function(ba, ca, da, ea) {
        "use strict";
        if (this._currentInstance === ba)
            return;
        if (this._endpointHashToShow === z) {
            this._endpointHashToShow = null;
        } else if (this._endpointHashToShow !== ca)
            return;
        if (this._currentInstance) {
            if (!this._currentInstance.canSwitchAway())
                return;
            this._currentInstance.cleanup();
        }
        this._currentInstance = ba;
        var fa = this._getContent().childNodes, ga = ba.getRoot();
        for (var ha = 0; ha < fa.length; ha++)
            if (fa[ha] !== ga)
                o.hide(fa[ha]);
        o.show(ga);
        this._fillPlaceholders(da);
        ba.initWithComponents(ea);
        this._setAttachmentSelectedClass(ba.attachmentClassName);
        h.inform('composer/initializedAttachment', {
            composerRoot: this._root,
            isInitial: ea
        });
    };
    aa.prototype._showAttachmentAfterComponentsLoaded = function(ba, ca) {
        "use strict";
        var da = this._attachments[ba];
        n.waitForComponents(this._composerID, da.required_components, this._showAttachment.bind(this, da.instance, ba, da.placeholders, ca));
    };
    aa.prototype._fillPlaceholders = function(ba) {
        "use strict";
        ba.forEach(function(ca) {
            var da = n.get(this._composerID, ca.component_name);
            if (da.element && ca.element !== da.element.parentNode)
                p.setContent(ca.element, da.element);
        }.bind(this));
    };
    aa.prototype._setAttachmentSelectedClass = function(ba) {
        "use strict";
        var ca = q.scry(this._root, "._519b")[0], da;
        if (ca) {
            o.removeClass(ca, "_519b");
            da = q.scry(ca, '*[aria-pressed="true"]')[0];
            if (da)
                da.setAttribute('aria-pressed', 'false');
        }
        if (ba) {
            var ea = q.scry(this._root, '.' + ba)[0];
            if (ea) {
                o.addClass(ea, "_519b");
                da = q.scry(ea, '*[aria-pressed="false"]')[0];
                if (da)
                    da.setAttribute('aria-pressed', 'true');
            }
        }
    };
    aa.prototype._augmentURI = function(ba) {
        "use strict";
        var ca = this._context.getProperty(j.PROPERTIES.ACTOR_ID), da = (ca) ? g.create(ba, ca): new r(ba), ea = this._context.getProperty(j.PROPERTIES.POST_ID);
        if (ea)
            da.addQueryData('post_id', ea);
        return da.toString();
    };
    u(aa.prototype, {
        _endpointHashToShow: z,
        _currentFetchEndpoints: [],
        _initialAttachmentEndpoint: ''
    });
    e.exports = aa;
}, null);
__d("ComposerXAttachment", ["ComposerXStore", "copyProperties"], function(a, b, c, d, e, f, g, h) {
    function i() {
        "use strict";
    }
    i.prototype.getRoot = function() {
        "use strict";
    };
    i.prototype.initWithComponents = function(j) {
        "use strict";
    };
    i.prototype.cleanup = function() {
        "use strict";
    };
    i.prototype.reset = function() {
        "use strict";
    };
    i.prototype.getComponent = function(j) {
        "use strict";
        return g.get(this._composerID, j);
    };
    i.prototype.getComponentInstance = function(j) {
        "use strict";
        var k = g.get(this._composerID, j);
        return k && k.instance;
    };
    i.prototype.canSwitchAway = function() {
        "use strict";
        return true;
    };
    i.prototype.setComposerID = function(j) {
        "use strict";
        this._composerID = j;
    };
    i.prototype.getComposerID = function() {
        "use strict";
        return this._composerID;
    };
    i.prototype.allowOGTagPreview = function() {
        "use strict";
        return false;
    };
    h(i.prototype, {
        attachmentClassName: ''
    });
    e.exports = i;
}, null);
__d("createCancelableFunction", ["emptyFunction"], function(a, b, c, d, e, f, g) {
    function h(i) {
        var j = function() {
            return i.apply(null, arguments);
        };
        j.cancel = function() {
            i = g;
        };
        return j;
    }
    e.exports = h;
}, null);
__d("registerForLeaveWarning", ["PageTransitions", "Run", "URI", "createCancelableFunction", "tx"], function(a, b, c, d, e, f, g, h, i, j, k) {
    function l(n) {
        var o = i.getNextURI(), p = j(n);
        h.onBeforeUnload(function() {
            return m(p, o);
        });
        return p;
    }
    function m(n, o) {
        var p = g.getMostRecentURI(), q = i.getNextURI(), r = p.getQueryData().hasOwnProperty('theater') && o.path === q.path, s = q.getQueryData().hasOwnProperty('theater'), t = a.DialogNavigationStack && a.DialogNavigationStack.isActiveURI(q);
        if (r || s || t) {
            h.onAfterLoad(function() {
                h.onBeforeUnload(function() {
                    return m(n, o);
                });
            });
            return;
        }
        if (a.Dialog && a.Dialog.getCurrent())
            return;
        if (n())
            return "You haven't finished your post yet. Do you want to leave without finishing?";
    }
    e.exports = l;
}, null);
__d("ComposerXController", ["ActorURI", "Arbiter", "ComposerX", "ComposerXAttachmentBootstrap", "ComposerXContext", "Parent", "$", "cx", "emptyFunction", "ge", "invariant", "registerForLeaveWarning"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    var s = {}, t = {}, u = {};
    function v(z) {
        var aa = p(z);
        if (!aa)
            return null;
        var ba = l.byClass(m(z), "_119"), ca = ba.id;
        if (!u[ca])
            u[ca] = new i(ba);
        return u[ca];
    }
    function w(z) {
        var aa = v(z);
        q(aa !== null);
        return aa;
    }
    function x(z) {
        if (!t[z])
            return;
        t[z].forEach(function(aa) {
            return aa.cancel();
        });
        delete t[z];
    }
    var y = {
        registerConditionForComposerCancel: function(z, aa) {
            var ba = w(z).getID();
            if (!(ba in s))
                s[ba] = [];
            s[ba].push(aa);
            if (!(ba in t))
                t[ba] = [];
            t[ba].push(r(aa));
        },
        hasChanges: function(z) {
            var aa = s[z];
            if (!aa)
                return false;
            return aa.some(function(ba) {
                return ba();
            });
        },
        getAttachment: function(z, aa, ba) {
            var ca = w(z);
            ca.getAttachment(aa, ba);
        },
        fetchAttachmentData: function(z, aa, ba) {
            w(z).fetchAttachmentData(aa, ba);
        },
        setAttachment: function(z, aa, ba, ca, da) {
            var ea = v(z);
            if (ea)
                ea.setAttachment(aa, ba, ca, da);
        },
        setInitialAttachment: function(z, aa, ba, ca, da, ea) {
            var fa = w(z);
            fa.setInitialAttachment(aa, ba, ca, da, ea);
        },
        setComponent: function(z, aa, ba) {
            var ca = v(z);
            if (ca)
                ca.setComponent(aa, ba);
        },
        reset: function(z) {
            var aa = w(z);
            aa.reset();
        },
        holdTheMarkup: o,
        getEndpoint: function(z, aa, ba) {
            var ca = w(z), da = ca.getContext();
            aa = g.create(aa, da.getProperty(k.PROPERTIES.ACTOR_ID)).toString();
            j.load(ca._attachmentFetchForm, aa, ba);
        },
        addPlaceholders: function(z, aa, ba) {
            var ca = w(z);
            ca.addPlaceholders(aa, ba);
        },
        hasAttachmentWithClassName: function(z, aa) {
            var ba = w(z);
            return ba.hasAttachmentWithClassName(aa);
        },
        showAttachmentThrobber: function(z) {
            var aa = w(z);
            aa.showAttachmentThrobber();
        },
        hideAttachmentThrobber: function(z) {
            var aa = w(z);
            aa.hideAttachmentThrobber();
        },
        getComposerID: function(z) {
            return w(z).getID();
        },
        destroyComposer: function(z) {
            if (!(z in u))
                return;
            u[z].destroy();
            delete u[z];
            delete s[z];
            x(z);
        }
    };
    j.bootstrap = function(z) {
        y.getAttachment(z, z.getAttribute('data-endpoint'));
    };
    h.subscribe('page_transition', function() {
        for (var z in u)
            if (!p(z))
                y.destroyComposer(z);
    });
    e.exports = y;
}, null);
__d("ComposerXAttachmentButtonBarState", ["CSS", "DOMQuery", "csx", "cx"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = {
        trackCityChanges: function(l) {
            var m = l.getComponent('citysharericon');
            if (m)
                return m.instance.subscribe('change', function() {
                    k.updateMessageBoxBarState(l);
                });
        },
        updateMessageBoxBarState: function(l) {
            var m = l.getComponent('citysharericon');
            if (m) {
                var n = h.find(l.getRoot(), "._1dsp");
                g.conditionClass(n, "_icv", !!m.instance.getValue());
            }
        }
    };
    e.exports = k;
}, null);
__d("ComposerXAttachmentUtils", ["BrowserSupport", "Button", "ComposerXController", "CSS", "DataStore", "DOMQuery", "Event", "Focus", "Keys", "Run", "StickyPlaceholderInput", "UserAgent_DEPRECATED", "csx", "debounce"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    var u = 'composer_fixed_placeholder';
    function v(x, y) {
        if (!k.get(x.element, u, false))
            x.instance.setPlaceholder(y);
    }
    var w = {
        initMentions: function(x, y, z, aa) {
            v(x, y);
            if (!aa ||!aa.dontFocusMentions)
                w.focusMentions(x);
            this.registerMentionsForComposerCancel(x, z);
        },
        focusMentions: function(x) {
            var y = l.find(x.element, 'textarea.input');
            n.set(y);
        },
        registerMentionsForComposerCancel: function(x, y) {
            i.registerConditionForComposerCancel && i.registerConditionForComposerCancel(y, x.instance.hasChanges.bind(x.instance));
        },
        setStickyPlaceholderForMentions: function(x, y) {
            if (l.contains(x.element, document.activeElement) && j.hasClass(document.activeElement, 'DOMControl_placeholder'))
                document.activeElement.blur();
            v(x, y);
        },
        setPlaceholderIsFixed: function(x, y) {
            k.set(x.element, u, !!y);
        },
        setStickyPlaceholderForTypeahead: function(x, y) {
            var z = l.find(x, '.textInput');
            q.setPlaceholderText(z, y);
        },
        listenForPostSubmission: function(x) {
            m.listen(x, 'keydown', function(event) {
                var y = event.getModifiers(), z = r.osx() ? y.meta: y.control, aa = l.find(x.form, "._11b" + '[type="submit"]');
                if ((event.keyCode === o.RETURN) && z && h.isEnabled(aa)) {
                    x.blur();
                    if (m.fire(aa, 'click'))
                        m.fire(x.form, 'submit');
                    event.preventDefault();
                }
            });
        },
        disableSaveOnEmpty: function(x, y) {
            var z = l.find(x, '.textInput'), aa = t(function(ca) {
                h.setEnabled(y, z.value.trim().length !== 0);
            }, 50), ba = [];
            ba.push(m.listen(z, 'keyup', aa));
            if (g.hasClipboardEvents()) {
                ba.push(m.listen(z, 'cut', aa));
                ba.push(m.listen(z, 'paste', aa));
            } else {
                ba.push(m.listen(z, 'mouseout', aa));
                ba.push(m.listen(z, 'mousemove', aa));
            }
            p.onUnload(function() {
                for (var ca = 0; ca < ba.length; ca++)
                    ba[ca].remove();
                ba = null;
            });
        }
    };
    e.exports = w;
}, null);
__d("DynamicIconSelector", ["Button", "CSS", "DOM", "SelectorDeprecated"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = {
        swapIcon: function(l) {
            var m = j.getSelectedOptions(l)[0], n = m && i.scry(m, '.itemIcon')[0], o = j.getSelectorButton(l);
            if (n) {
                g.setIcon(o, n.cloneNode(true));
            } else {
                var p = i.scry(o, '.img')[0];
                p && i.remove(p);
            }
            h.conditionClass(o, 'uiSelectorChevronOnly', !n);
        }
    };
    j.subscribe('change', function(l, m) {
        var n = m.selector;
        if (h.hasClass(n, 'dynamicIconSelector'))
            k.swapIcon(n);
    });
    e.exports = k;
}, null);
__d("PrivacySelectorOption", ["Arbiter", "AudienceSelectorTags", "CSS", "CurrentUser", "DOM", "DynamicIconSelector", "Parent", "PrivacyConst", "SelectorDeprecated", "copyProperties", "csx", "fbt", "intlList", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    function u(v, w) {
        if (!v)
            throw new Error("there's no DOM option. Config data: ", w);
        this._elem = v;
        this._selector = m.byClass(this._elem, 'audienceSelector');
        if (!this._selector)
            return;
        this._priv_base_val = w.priv_base_val;
        this._audienceCount = w.audience_count || "";
        this._hasRestricted = w.has_restricted || false;
        this._isCustom = w.is_custom || false;
        this._includedAudience = w.included || "";
        this._excludedAudience = w.excluded || {};
        this._excludedTaggees = {};
        this._tagExpansionBehavior = w.tag_expansion_behavior || n.TagExpansion.NONE;
        this._plusLabel = k.scry(v, '.plusLabel')[0];
        this._audienceCountLabel = k.scry(v, '.audienceCountLabel')[0];
        this._taggedIDs = [];
        this._tags = [];
        this._recalculateTooltipAndLabel();
        this._updateOptionCountLabel();
        this._updateSelector();
        g.subscribe('Composer/changedtags', function(x, y) {
            var z = i.hasClass(this._selector, 'composerAudienceSelector');
            if (!this._getChangedData() ||!z)
                return;
            this._tags = [];
            this._taggedIDs = [];
            for (var aa = 0; aa < y.withTags.length; aa++) {
                var ba = y.withTags[aa].info;
                if (ba.uid != j.getID()) {
                    this._tags.push(ba.text);
                    this._taggedIDs.push(ba.uid);
                }
            }
            for (aa in y.mention)
                if (y.mention[aa].type == 'user' && y.mention[aa].uid != j.getID()) {
                    this._tags.push(y.mention[aa].text);
                    this._taggedIDs.push(y.mention[aa].uid);
                }
            var ca = k.scry(document.body, "._5l7q")[0];
            ca&&!!this._taggedIDs.length && i.hide(ca);
            this._updateOptionCountLabel();
            var da = this._recalculateTooltipAndLabel();
            if (da && o.isOptionSelected(this._elem)) {
                this._updateSelector();
                g.inform('SelectedPrivacyOption/changed', this._getChangedData());
            }
        }.bind(this));
        o.listen(this._selector, 'change', this._updateSelector.bind(this));
    }
    p(u.prototype, {
        updateOption: function(v, w, x, y, z) {
            this._priv_base_val = v;
            this._includedAudience = w;
            this._excludedAudience = x;
            this._tagExpansionBehavior = y;
            this._audienceCount = z;
            this._recalculateTooltipAndLabel();
            this._updateOptionCountLabel();
            return {
                label: this._label,
                tooltip: this._tooltip
            };
        },
        _recalculateTooltipAndLabel: function() {
            var v = this._label;
            this._label = this._getNewSelectorLabel();
            var w = this._tooltip;
            this._tooltip = this._getNewTooltip();
            return (w != this._tooltip) || (v != this._label);
        },
        _getNewTooltip: function() {
            if (this._isCustom)
                return this._recalcCustomTooltip();
            switch (this._priv_base_val) {
            case n.FriendsValue.ALL_FRIENDS:
                return this._recalcFriendsTooltip();
            case n.FriendsValue.FRIENDS_MINUS_ACQUAINTANCES:
                return this._recalcFriendsMinusTooltip();
            case n.FriendsValue.SELF:
                var v = this._getTagExpansionText();
                return v ? v : this._getIncludedAudience();
            default:
                return this._recalcCustomTooltip();
            }
        },
        _getNewSelectorLabel: function() {
            var v = this._elem.getAttribute('data-label').replace(/\(.*\)/, "");
            if (this._showAudienceCount()) {
                var w = ' (' + this._audienceCount + ')';
                v += w;
            }
            if (this._isTagExpanded())
                v += ' (+)';
            return v;
        },
        _updateOptionCountLabel: function() {
            if (this._audienceCountLabel) {
                if (this._showAudienceCount()) {
                    var v = ' (' + this._audienceCount + ')';
                    k.setContent(this._audienceCountLabel, v);
                }
                i.conditionShow(this._audienceCountLabel, this._showAudienceCount());
            }
            this._plusLabel && i.conditionShow(this._plusLabel, this._isTagExpanded());
        },
        _getChangedData: function() {
            return {
                tags: this._taggedIDs,
                privacy: this._priv_base_val
            };
        },
        _showAudienceCount: function() {
            return (this._audienceCountLabel && this._audienceCount && this._audienceCount.length > 0);
        },
        _isTagExpanded: function() {
            var v = this._getTagExpansionBehavior(), w=!!this._taggedIDs.length || this._alreadyHasTags();
            return (w && v != n.TagExpansion.NONE);
        },
        _alreadyHasTags: function() {
            var v = k.scry(this._selector, '*[data-oid]')[0];
            v = v && v.getAttribute('data-oid');
            return v && h.hasTags(v);
        },
        _updateSelector: function() {
            if (o.isOptionSelected(this._elem)) {
                var v = i.hasClass(this._selector, 'composerAudienceSelector');
                v && o.setButtonLabel(this._selector, this._label);
                o.setButtonTooltip(this._selector, this._tooltip);
                l.swapIcon(this._selector);
                return false;
            }
            return true;
        },
        _isSharedAlbum: function() {
            var v = k.scry(this._selector, '*[data-shared-album]')[0];
            return v && v.getAttribute('data-shared-album');
        },
        _getTagExpansionBehavior: function() {
            if (this._tagExpansionBehavior)
                return this._tagExpansionBehavior;
            var v = this._priv_base_val === n.FriendsValue.SELF, w = this._priv_base_val === n.FriendsValue.EVERYONE;
            if ((v && this._isSharedAlbum()) || w) {
                return n.TagExpansion.NONE;
            } else if (this._priv_base_val < n.FriendsValue.ALL_FRIENDS)
                return n.TagExpansion.TAGGEES;
            return n.TagExpansion.FRIENDS_OF_TAGGEES;
        },
        _getTagExpansionText: function() {
            var v = this._getTagExpansionBehavior();
            if (!!this._taggedIDs.length || this._alreadyHasTags()) {
                if (v == n.TagExpansion.FRIENDS_OF_TAGGEES) {
                    return "friends of anyone tagged";
                } else if (v == n.TagExpansion.TAGGEES)
                    return "Anyone tagged";
                return '';
            }
            return '';
        },
        _getIncludedAudience: function() {
            if (this._includedAudience)
                return this._includedAudience;
            var v = this._priv_base_val === n.FriendsValue.SELF;
            if (v&&!this._isSharedAlbum())
                return "Only Me";
            return this._elem.getAttribute('data-label');
        },
        _getCombinedSentence: function(v, w) {
            if (!w)
                return v;
            return r._("{list of people who can see this}; Except: {list of people who cannot see this}", [r.param("list of people who can see this", v), r.param("list of people who cannot see this", w)]);
        },
        _recalcFriendsTooltip: function() {
            var v = this._tags.length;
            if (v > 2) {
                return this._hasRestricted ? "Your friends and friends of anyone tagged; Except: Restricted" : "Your friends and friends of anyone tagged";
            } else if (v == 2) {
                if (this._hasRestricted) {
                    return t._("Your friends, {user}'s friends and {user2}'s friends; Except: Restricted ", {
                        user: this._tags[0],
                        user2: this._tags[1]
                    });
                } else 
                    return t._("Your friends, {user}'s friends and {user2}'s friends", {
                        user: this._tags[0],
                        user2: this._tags[1]
                    });
            } else if (v == 1) {
                if (this._hasRestricted) {
                    return t._("Your friends and {user}'s friends; Except: Restricted", {
                        user: this._tags[0]
                    });
                } else 
                    return t._("Your friends and {user}'s friends", {
                        user: this._tags[0]
                    });
            } else 
                return this._hasRestricted ? "Your friends; Except: Restricted" : "Your friends";
        },
        _recalcFriendsMinusTooltip: function() {
            var v = this._tags.length;
            if (v > 0 || this._alreadyHasTags()) {
                var w = "friends of anyone tagged", x = r._("{people who can see this}, {list of more people who can see this}", [r.param("people who can see this", "Your friends"), r.param("list of more people who can see this", w)]), y = "Acquaintances";
                if (this._hasRestricted)
                    y = r._("{Name of Acquaintances friend list}, {restricted}", [r.param("Name of Acquaintances friend list", y), r.param("restricted", "Restricted")]);
                return this._getCombinedSentence(x, y);
            } else {
                if (this._hasRestricted)
                    return "Friends; Except: Acquaintances, Restricted";
                return "Friends except Acquaintances";
            }
        },
        _recalcCustomTooltip: function() {
            var v = this._getIncludedAudience(), w = this._getTagExpansionText();
            if (w)
                v = r._("{list of people who can see this}, {list of additional people who can see this}", [r.param("list of people who can see this", v), r.param("list of additional people who can see this", w)]);
            for (var x = 0; x < this._taggedIDs.length; x++) {
                y = this._taggedIDs[x];
                if (y in this._excludedAudience) {
                    delete this._excludedAudience[y];
                    this._excludedTaggees[y] = this._tags[x];
                    break;
                }
            }
            for (var y in this._excludedTaggees)
                if (this._excludedTaggees.hasOwnProperty(y))
                    if (this._taggedIDs.indexOf(y)===-1) {
                        this._excludedAudience[y] = this._excludedTaggees[y];
                        delete this._excludedTaggees[y];
                        break;
                    }
            var z = [];
            for (x in this._excludedAudience)
                if (this._excludedAudience.hasOwnProperty(x))
                    z.push(this._excludedAudience[x]);
            return this._getCombinedSentence(v, s(z));
        }
    });
    e.exports = u;
}, null);
__d("CustomPrivacyOptionController", ["Arbiter", "AsyncDialog", "AsyncRequest", "DOM", "Event", "Form", "Parent", "PrivacyConst", "PrivacySelectorOption", "SelectorDeprecated", "XPrivacyCustomDialogControllerURIBuilder", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    function s(t, u) {
        if (!t)
            return;
        setTimeout((function() {
            this._selector = m.byClass(t, 'audienceSelector');
            if (!this._selector)
                return;
            this.initCustomState(t, u.option_id, u.id);
            var v = {
                priv_base_val: u.base_audience_value,
                audience_count: u.audience_count,
                is_custom: true,
                included: u.included_audience,
                excluded: u.excluded_audience,
                tag_expansion_behavior: u.tag_expansion_behavior
            };
            this._optionJSInstance = new o(t, v);
            k.listen(t, 'click', function(event) {
                this.openCustomDialog(event, u.option_id, u.explain_tags, u.autosave, u.limit_community, u.limit_facebook, u.limit_fof, u.limit_tagexpand, u.source);
            }.bind(this));
            p.listen(this._selector, 'select', function(w) {
                if (w.option._id != this._id)
                    this.clearCustomState();
            }.bind(this));
        }).bind(this), 0);
    }
    r(s, {
        _instances: {},
        update: function(t, u, v, w, x, y, z, aa, ba) {
            var ca = s._instances[t];
            ca._update(u, v)._updateOption(v, x, y, z, aa, ba);
            g.inform('Form/change', {
                node: ca._container
            });
        },
        getData: function(t) {
            var u = s._instances[t];
            return u && u._privacyData;
        },
        setPrivacyData: function(t, u, v) {
            s._instances[t]._update(u, v);
        }
    });
    r(s.prototype, {
        _updateOption: function(t, u, v, w, x, y) {
            var z = p.getOption(this._selector, t) || p.getOption(this._selector, n.BaseValue.CUSTOM + ''), aa = this._optionJSInstance.updateOption(u, v, w, x, y);
            g.inform('CustomPrivacyOptionController/update', {
                selector: this._selector,
                option: z,
                tooltip: aa.tooltip,
                label: aa.label
            });
            return this;
        },
        _update: function(t, u) {
            var v = u == n.BaseValue.CUSTOM ||!p.getOption(this._selector, u), w = this._selector.getAttribute('data-name');
            this.updateCustomState(t, v, w);
            return this;
        },
        initCustomState: function(t, u, v) {
            s._instances[u] = this;
            this._container = j.find(t, '.customPrivacyInputs');
            this._id = v;
            this._privacyData = {};
            var w = l.serialize(this._container);
            if (w.audience)
                this._privacyData = w.audience[v];
            return t;
        },
        openCustomDialog: function(event, t, u, v, w, x, y, z, aa) {
            var ba = new q().setString('option_id', t).setString('id', this._id).setString('privacy_data', JSON.stringify(this._privacyData)).setBool('explain_tags', u).setBool('autosave', v).setBool('limit_community', w).setBool('limit_facebook', x).setBool('limit_fof', y).setBool('limit_tagexpand', z).setBool('is_new_privacy_selector', false).setString('source', aa).getURI(), ca = new i(ba);
            ca.setRelativeTo(event.getTarget());
            h.send(ca, function(da) {
                da.subscribe('cancel', function() {
                    g.inform('CustomPrivacyOptionController/cancel', {
                        selector: this._selector
                    });
                }.bind(this));
            }.bind(this));
        },
        updateCustomState: function(t, u, v) {
            this.clearCustomState();
            this._privacyData = r({}, t);
            if (u)
                if (v) {
                    v = v.slice(0, - '[value]'.length);
                    var w = {};
                    w[v] = t;
                    l.createHiddenInputs(w, this._container, null, true);
                }
        },
        clearCustomState: function() {
            this._privacyData = {};
            j.empty(this._container);
        }
    });
    e.exports = s;
}, null);
__d("AudienceSelector", ["Arbiter", "AsyncRequest", "AudienceSelectorTags", "CSS", "CustomPrivacyOptionController", "DOM", "DynamicIconSelector", "PrivacyConst", "SelectorDeprecated"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = {};
    o.subscribe('select', function(r, s) {
        if (!j.hasClass(s.selector, 'audienceSelector'))
            return;
        var t = o.getOptionValue(s.option);
        s.value = t;
        g.inform('AudienceSelector/changed', s);
        if (t == n.BaseValue.CUSTOM&&!j.hasClass(s.option, 'noDialog')) {
            o.toggle(s.selector);
            return false;
        }
        g.inform('AudienceSelector/changedNonCustomDialogButton', s);
        if (j.hasClass(s.selector, 'dataTooltip')) {
            var u = l.find(s.option, '.itemAnchor').getAttribute('data-tooltip');
            o.setButtonTooltip(s.selector, u || null);
        }
        if (!j.hasClass(s.option, 'specialOption'))
            return;
        var v = l.find(s.option, 'a').getAttribute('data-type');
        if (j.hasClass(s.option, 'moreOption')) {
            j.addClass(s.selector, v);
            j.addClass(s.selector, 'showSecondaryOptions');
            return false;
        } else if (j.hasClass(s.option, 'returnOption')) {
            j.removeClass(s.selector, 'showSecondaryOptions');
            j.removeClass(s.selector, 'friendList');
            return false;
        }
    });
    var q = {
        keepSynchronized: function(r, s) {
            p[r] || (p[r] = {});
            p[r][s.id] = s;
        },
        setHasTags: function(r) {
            i.setHasTags(r);
        },
        getComposerInstance: function() {
            var r = p['PrivacyLiteNav/audience'];
            if (r) {
                var s;
                for (var t in r) {
                    s = r[t];
                    return s;
                }
            }
            return null;
        },
        forceAndKeepSynchronized: function(r, s) {
            q.keepSynchronized(r, s);
            g.inform('AudienceSelector/update', {
                option: o.getSelectedOptions(s)[0],
                selector: s
            });
        },
        get: function(r) {
            if (j.hasClass(r, 'audienceSelector'))
                return r;
            var s = l.scry(r, 'div.audienceSelector');
            if (s.length != 1)
                return;
            return s[0];
        },
        setAudience: function(r, s) {
            var t = q.get(r);
            o.loadMenu(t, function(u) {
                o.setSelected(t, s.toString());
                m.swapIcon(t);
                var v = o.getSelectedOptions(t), w = v[0] && l.find(v[0], 'a');
                if (w && w.getAttribute('ajaxify'))
                    h.bootstrap(w.getAttribute('ajaxify'), w, true);
                g.inform('AudienceSelector/changed', {
                    option: v[0],
                    selector: t
                });
            });
        }
    };
    g.subscribe('CustomPrivacyOptionController/update', function(r, s) {
        if (!j.hasClass(s.selector, 'audienceSelector'))
            return;
        o.setSelected(s.selector, o.getOptionValue(s.option));
        m.swapIcon(s.selector);
        var t = j.hasClass(s.selector, 'composerAudienceSelector'), u = j.hasClass(s.selector, 'inlineAudienceWidget');
        if (t || u)
            o.setButtonLabel(s.selector, s.label);
        o.setButtonTooltip(s.selector, s.tooltip);
        g.inform('AudienceSelector/update', s);
    });
    g.subscribe(['AudienceSelector/changed', 'AudienceSelector/update'], function(event, r) {
        var s = o.getOptionValue(r.option), t = {};
        if (s == n.BaseValue.CUSTOM) {
            if (event == 'AudienceSelector/changed')
                return;
            t = k.getData(r.option.id);
            if (!t)
                return;
        } else if (j.hasClass(r.selector, 'inlineAudienceWidget'))
            o.setButtonLabel(r.selector, r.option.innerText);
        for (var u in p) {
            var v = p[u];
            if (v[r.selector.id]) {
                g.inform('AudienceSelector/syncNonSelectorIcon', {
                    category: u
                });
                for (var w in v) {
                    var x = v[w];
                    if (!x || r.selector === x)
                        continue;
                    if (o.getValue(x) !== s) {
                        o.setSelected(x, s);
                        m.swapIcon(x);
                    }
                    if (s == n.BaseValue.CUSTOM) {
                        var y = o.getOption(x, n.BaseValue.CUSTOM + '');
                        if (y) {
                            k.setPrivacyData(y.id, t, s);
                            o.setButtonTooltip(x, r.tooltip);
                        }
                    }
                }
            }
        }
    });
    e.exports = q;
}, null);
__d("XPrivacyAudienceAlignmentLoggingControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/privacy\/audience_alignment\/log\/", {
        client_time: {
            type: "Int"
        },
        event: {
            type: "Enum",
            required: true
        },
        product: {
            type: "Enum",
            required: true
        }
    });
}, null);
__d("AudienceAlignment", ["Arbiter", "AsyncRequest", "AudienceSelector", "ComposerXStore", "ContextualDialog", "CSS", "cx", "DialogExpansion", "DOM", "Event", "Focus", "Keys", "ModalMask", "PrivacyConst", "SelectorDeprecated", "Style", "XPrivacyAudienceAlignmentLoggingControllerURIBuilder"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w) {
    var x = false, y, z;
    function aa(wa, xa) {
        wa.setContext(xa);
        wa.show();
    }
    function ba(wa, xa) {
        var ya = v.get(xa.getContentRoot(), 'margin-top');
        wa.setWidth(this.aaa_dialog_width);
        wa.show();
        v.set(wa.getContentRoot(), 'margin-top', ya);
    }
    var ca = 'wwwtux', da = 'wwwroadblock', ea = 'exposed', fa = 'friends_sticky', ga = 'public_sticky', ha = 'selector', ia = 'holdout', ja = 'dismissal', ka = 'learn_more', la = 'blur';
    function ma(wa, event) {
        var xa = new w().setEnum('product', wa).setEnum('event', event).setInt('client_time', Date.now()).getURI(), ya = new h().setURI(xa);
        ya.send();
    }
    function na(wa, xa, ya, za) {
        if (x)
            return false;
        if (!o.contains(document.body, wa.getRoot()))
            return false;
        var ab = j.get(xa, 'maininput');
        if (ab && ab.instance.getValue())
            return false;
        if (!ya)
            return false;
        var bb = null;
        if (za) {
            bb = za.getSelectedBaseValue();
        } else 
            bb = parseInt(u.getValue(ya), 10);
        return (bb === t.BaseValue.EVERYONE);
    }
    function oa() {
        var wa = o.scry(document.body, '#pagelet_timeline_recent');
        if (wa.length >= 1) {
            var xa = o.scry(wa[0], 'li.fbTimelineComposerCapsule');
            if (xa.length >= 1)
                return xa[0];
        }
        return null;
    }
    function pa(wa, xa, ya, za) {
        var ab;
        if (za) {
            ab = za.getMenuElement();
        } else {
            var bb = o.find(ya, 'div.audienceSelector');
            ab = o.scry(bb, 'div.wrap');
        }
        if (ab.length < 1)
            return;
        var cb = oa(), db;
        if (za) {
            za.subscribeOnce('open', function() {
                if (cb)
                    l.addClass(cb, "_2wc-");
                k.setContext(xa, ab);
                xa.setOffsetY(30);
                xa.show();
            });
        } else 
            db = u.listen(bb, 'open', function() {
                var gb = o.scry(ab[0], 'div.uiSelectorMenuWrapper');
                if (gb.length > 0) {
                    if (cb)
                        l.addClass(cb, "_2wc-");
                        k.setContext(xa, gb[0]);
                        xa.setOffsetX(12);
                        xa.show();
                } else 
                    s.hide();
                    u.unsubscribe(db);
                });
        if (za) {
            za.getPopover().subscribeOnce('hide', function() {
                qa(xa, ab, cb, wa);
            });
        } else 
            var eb = u.listen(bb, 'close', function() {
                qa(xa, ab[0], cb, wa);
                u.unsubscribe(eb);
            });
        if (za) {
            l.addClass(ab, "_35mn");
            var fb = za.getTriggerButtonElement();
            l.addClass(fb, "_35mn");
        } else 
            l.addClass(ab[0], "_35mn");
        setTimeout(function() {
            s.show();
            v.set(s.getNode(), 'opacity', '0.3');
            v.set(s.getNode(), 'background-color', 'rgb(0,0,0)');
            if (za) {
                za.openSelectorExpanded();
            } else 
                u.toggle(bb);
        }, 20);
    }
    function qa(wa, xa, ya, za) {
        s.hide();
        wa.hide();
        l.removeClass(xa, "_35mn");
        if (ya)
            l.removeClass(ya, "_2wc-");
        q.set(o.find(za.getRoot(), 'textarea.input'));
    }
    function ra(wa, xa) {
        wa.unsubscribe(y);
        wa.hide();
        q.set(o.find(xa.getRoot(), 'textarea.input'));
    }
    function sa(wa) {
        var xa = ua(wa);
        return xa && xa.element;
    }
    function ta(wa) {
        var xa = ua(wa);
        return xa && xa.instance && xa.instance.getInstance().getInstance();
    }
    function ua(wa) {
        return j.get(wa, 'mainprivacywidget');
    }
    var va = {
        abort: function() {
            x = true;
        },
        startOnComposerFocus: function(wa, xa, ya, za, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb) {
            var mb = da;
            if (ib)
                mb = ca;
            g.subscribe('composer/focus', function() {
                var nb = sa(lb), ob = ta(lb);
                if (na(xa, lb, nb, ob))
                    if (wa) {
                        ma(mb, ia);
                    } else {
                        ma(mb, ea);
                        setTimeout(function() {
                            ya.show();
                            var pb = gb.parentElement;
                            this.aaa_dialog_width = ya.getWidth() + pb.offsetWidth - 490;
                            var qb = new n(ya);
                            qb.setTargetWidth(this.aaa_dialog_width);
                            qb._onAfterShow();
                            q.set(ya.getRoot());
                        }, 100);
                    }
            });
            p.listen(fb, 'click', function() {
                var nb = sa(lb), ob = ta(lb);
                ra(ya, xa);
                if (ob) {
                    ob.selectOption(t.PostParam.FRIENDS);
                } else 
                    i.setAudience(xa.getRoot(), t.BaseValue.ALL_FRIENDS);
                aa(za, nb);
                ma(mb, fa);
            });
            p.listen(gb, 'click', function() {
                var nb = sa(lb), ob = ta(lb);
                ra(ya, xa);
                if (ob) {
                    ob.selectOption(t.PostParam.EVERYONE);
                } else 
                    i.setAudience(xa.getRoot(), t.BaseValue.EVERYONE);
                aa(ab, nb);
                ma(mb, ga);
            });
            p.listen(hb, 'click', function() {
                ya.subscribe('hide', function() {
                    var nb = sa(lb), ob = ta(lb);
                    if (bb)
                        pa(xa, bb, nb, ob);
                });
                ra(ya, xa);
                ma(mb, ha);
            });
            if (ib)
                p.listen(ib, 'click', function() {
                    var nb = sa(lb);
                    ra(ya, xa);
                    ma(mb, ja);
                    if (cb)
                        aa(cb, nb);
                    });
            y = ya.subscribe('hide', function() {
                var nb = sa(lb);
                q.set(o.find(xa.getRoot(), 'textarea.input'));
                ma(mb, ja);
                if (db)
                    aa(db, nb);
            });
            z = ya.subscribe('blur', function() {
                ma(mb, la);
            });
            p.listen(jb, 'click', function(event) {
                ba(eb, ya);
                ma(mb, ka);
            });
            p.listen(kb, 'click', function(event) {
                eb.hide();
            });
            if (ib)
                p.listen(eb.getRoot(), 'keydown', function(event) {
                    if (p.getKeyCode(event) === r.ESC) {
                        eb.hide();
                        p.kill(event);
                    }
                });
        }
    };
    e.exports = va;
}, null);
__d("ComposerXDragDrop", ["Arbiter", "ComposerXAjaxEndpoint", "ComposerXController", "CSS", "DOMQuery", "DragDropTarget", "Parent", "URI", "csx", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = h.MEDIA_UPLOAD, r = '/ajax/composerx/attachment/link/scraper/', s = function(u) {
        u();
    };
    function t(u, v, w, x) {
        "use strict";
        this._root = u;
        this._composerID = v;
        this._targetID = w;
        x = x || s;
        this._dragdrop = new l(u).setOnFilesDropCallback(function(y) {
            x(this._uploadFiles.bind(this, y));
        }.bind(this)).setFileFilter(t.filterImages).enable();
        t.handleDragEnterAndLeave(u);
        g.subscribe('composer/deactivateDragdrop', function() {
            this.deactivate();
        }.bind(this));
        g.subscribe('composer/reactivateDragdrop', function() {
            this.reactivate();
        }.bind(this));
    }
    t.prototype.enableURLDropping = function() {
        "use strict";
        this._dragdrop.setOnURLDropCallback(this._onURLDrop.bind(this));
    };
    t.prototype.deactivate = function() {
        "use strict";
        this._dragdrop.disable();
    };
    t.prototype.reactivate = function() {
        "use strict";
        this._dragdrop.enable();
    };
    t.prototype._uploadFiles = function(u) {
        "use strict";
        i.getAttachment(this._root, q);
        g.inform('ComposerXFilesStore/filesDropped/' + this._composerID + '/mediaupload', {
            files: u
        }, g.BEHAVIOR_PERSISTENT);
    };
    t.prototype._onURLDrop = function(u) {
        "use strict";
        var v = new n(r);
        v.addQueryData({
            scrape_url: encodeURIComponent(u)
        });
        i.getAttachment(this._root, v.toString());
    };
    t.handleDragEnterAndLeave = function(u) {
        "use strict";
        var v = k.scry(m.byClass(u, "_119"), "._2wr");
        g.subscribe('dragenter', function(w, x) {
            if (u == x.element)
                v.forEach(j.hide);
        });
        g.subscribe('dragleave', function(w, x) {
            if (u == x.element)
                v.forEach(j.show);
        });
    };
    t.filterImages = function(u) {
        "use strict";
        var v = [];
        for (var w = 0; w < u.length; w++)
            if (u[w].type.match('image/*'))
                v.push(u[w]);
        return v;
    };
    e.exports = t;
}, null);
__d("ComposerXNUX", ["AsyncRequest", "ComposerXDragDrop", "CSS", "DOM", "Event", "SubscriptionsHandler", "csx", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = {}, p = {};
    function q(s, t, u) {
        var v = u.dataTransfer.items;
        if (v) {
            var w = h.filterImages(v);
            if (!w.length)
                return;
        }
        r.acknowledgeDialog(s, t);
    }
    var r = {
        CAMERA_NUX: 'camera_nux_seen',
        ADD_MORE_NUX: 'add_more_nux_seen',
        HMU_NUX: 'hmu_nux_seen',
        HMU_POST_NUX: 'hmu_post_nux_seen',
        FACEREC_SUGGESTIONS_NUX: 'facerec_suggestions_nux_seen',
        TAGGING_FLYOUT_NUX: 'tagging_flyout_nux_seen',
        OGCOMPOSER_NEWVERBS_NUX: 'ogcomposer_newverbs_nux_seen',
        OGCOMPOSER_NEW_ICON_PICKER_NUX: 'minutiae_icon_picker_nux_seen',
        SHARER_MINUTIAE_NUX: 'sharer_minutiae_nux_seen',
        onInit: function(s, t, u) {
            if (o[u])
                return;
            p[u] = p[u] || new l();
            var v = p[u];
            v.engage();
            var w = s.getRoot();
            i.addClass(w, "_4bka");
            var x = j.scry(w, "._3o-a");
            x.forEach(function(y) {
                v.addSubscriptions(k.listen(y, 'click', r.acknowledgeDialog.bind(null, u, s)));
            });
            if (u == r.CAMERA_NUX)
                v.addSubscriptions(k.listen(document, 'dragenter', q.bind(null, u, s)));
            v.addSubscriptions(s.subscribe('cancel', r.sendMarkSeenRequest.bind(null, u)), s.subscribe('hide', v.release.bind(v)));
            s.setContext(t).show();
        },
        acknowledgeDialog: function(s, t) {
            r.sendMarkSeenRequest(s);
            t.hide();
        },
        sendMarkSeenRequest: function(s) {
            if (!o[s]) {
                new g('/ajax/photos/composer/mark_nux_seen.php').setData({
                    type: s
                }).send();
                o[s] = true;
            }
        },
        onCleanup: function(s) {
            s.hide();
        }
    };
    e.exports = r;
}, null);
__d("PagesComposerEntryLogger", ["Event", "PagesBanzaiLogger"], function(a, b, c, d, e, f, g, h) {
    function i(j) {
        "use strict";
        this.$PagesComposerEntryLogger0 = j;
    }
    i.prototype.registerForContentEntryEvents = function(j) {
        "use strict";
        var k = function() {
            var l = {
                page_id: this.$PagesComposerEntryLogger0,
                event_name: 'composer_content_entry',
                pages_composer: 1,
                target_id: this.$PagesComposerEntryLogger0
            };
            h.logData(l, h.VITAL_WAIT);
            this.unregister();
        };
        this.$PagesComposerEntryLogger1 = g.listen(j, {
            paste: k.bind(this),
            keydown: k.bind(this)
        });
    };
    i.prototype.unregister = function() {
        "use strict";
        if (!this.$PagesComposerEntryLogger1)
            return;
        for (var event in this.$PagesComposerEntryLogger1)
            this.$PagesComposerEntryLogger1[event].remove();
        this.$PagesComposerEntryLogger1 = null;
    };
    e.exports = i;
}, null);
__d("XPrivacyRemindersImpressionLoggingControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/privacy\/reminders\/log_imp\/", {
        type: {
            type: "String",
            required: true
        }
    });
}, null);
__d("ComposerXBootloadStatusAttachment", ["Arbiter", "AsyncRequest", "AudienceAlignment", "Bootloader", "ComposerXAttachment", "ComposerXAttachmentButtonBarState", "ComposerXAttachmentUtils", "ComposerXController", "ComposerXDragDrop", "ComposerXMarauderLogger", "ComposerXNUX", "ComposerXStore", "CSS", "DOM", "DOMQuery", "Event", "Focus", "LitestandMessages", "PagesComposerEntryLogger", "Parent", "PlaceholderListener", "PrivacyConst", "PrivacyRemindersLoggingTypes", "SelectorDeprecated", "SuggestionConfig", "SuggestionUIPresentation", "URI", "copyProperties", "createCancelableFunction", "csx", "cx", "getActiveElement", "requestAnimationFrame", "XPrivacyRemindersDismissControllerURIBuilder", "XPrivacyRemindersImpressionLoggingControllerURIBuilder"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa) {
    var pa = {
        only_me: {
            PRIVACY_CONSTANT: [ba.BaseValue.SELF],
            LOG_IMPRESSION: ca.ONLY_ME_IMPRESSION,
            LOG_CONVERSION: ca.ONLY_ME_CONVERSION,
            LOG_IMPRESSION_TO_DISMISS_ENDPOINT: true
        },
        everyone: {
            PRIVACY_CONSTANT: [ba.BaseValue.EVERYONE],
            LOG_IMPRESSION: ca.EVERYONE_IMPRESSION,
            LOG_CONVERSION: ca.EVERYONE_CONVERSION,
            LOG_IMPRESSION_TO_DISMISS_ENDPOINT: true
        },
        delta_everyone: {
            PRIVACY_CONSTANT: [ba.BaseValue.EVERYONE],
            LOG_IMPRESSION: ca.DELTA_EVERYONE_IMPRESSION,
            LOG_CONVERSION: ca.DELTA_EVERYONE_CONVERSION,
            LOG_IMPRESSION_TO_DISMISS_ENDPOINT: true
        },
        everyone_tests: {
            PRIVACY_CONSTANT: [ba.BaseValue.EVERYONE],
            LOG_IMPRESSION: ca.EVERYONE_TESTS_IMPRESSION,
            LOG_CONVERSION: ca.EVERYONE_TESTS_CONVERSION,
            LOG_IMPRESSION_TO_DISMISS_ENDPOINT: true
        },
        public_posting_filter_nux: {
            PRIVACY_CONSTANT: [ba.BaseValue.EVERYONE],
            LOG_IMPRESSION: ca.PUBLIC_POSTING_FILTER_NUX_IMPRESSION,
            LOG_CONVERSION: ca.PUBLIC_POSTING_FILTER_NUX_CONVERSION,
            LOG_IMPRESSION_TO_DISMISS_ENDPOINT: true
        }
    }, qa = {};
    for (var ra in k)
        if (k.hasOwnProperty(ra))
            ta[ra] = k[ra];
    var sa = k === null ? null: k.prototype;
    ta.prototype = Object.create(sa);
    ta.prototype.constructor = ta;
    ta.__superConstructor__ = k;
    function ta(ua, va) {
        "use strict";
        k.call(this);
        this._root = ua;
        this._config = va;
        this._privacyReminders = {};
        this._onSelectorChange = this._onSelectorChange.bind(this);
        this._didInitialFocus = false;
    }
    ta.prototype.getRoot = function() {
        "use strict";
        return this._root;
    };
    ta.prototype._getTextArea = function() {
        "use strict";
        return u.find(this.getComponent('maininput').element, 'textarea.input');
    };
    ta.prototype.initWithComponents = function(ua) {
        "use strict";
        qa[this._composerID] = this;
        this._attachmentIsActive = true;
        var va = this._getTextArea(), wa = u.scry(z.byClass(this.getRoot(), "_119"), 'li.' + this.attachmentClassName)[0];
        this._focusListener = v.listen(va, 'focus', this._onFocus.bind(this));
        if (ua && this._config.targetIsPage) {
            this._pagesComposerEntryLogger = new y(this._config.targetID);
            this._pagesComposerEntryLogger.registerForContentEntryEvents(va);
        }
        if (this._fullVersion) {
            this._fullInitWithComponents();
        } else if (!this._bootloading)
            if (u.contains(this._root, la())) {
                this._onFocus();
            } else if (wa)
                this._clickListener = v.listen(wa, 'click', function() {
                    w.set(va);
                }.bind(this));
        this._dragEnterHandler = g.subscribe('dragenter', function(ab, bb) {
            if (bb.element == this._root) {
                i.abort();
                var cb = bb.event.dataTransfer.items, db;
                if (cb)
                    db = o.filterImages(cb);
                if (db && db.length > 0) {
                    w.set(va);
                } else {
                    var eb = z.byClass(this._root, 'focus_target');
                    aa.expandInput(eb);
                    this._onFocus();
                }
            }
        }.bind(this));
        this.getComponent('maininput').instance.setPlaceholder(this._config.mentionsPlaceholder);
        if (!ua)
            w.set(va);
        if (this._config.plus_version) {
            this._dragdrop = new o(this._root, this._composerID, this._config.targetID);
            this._dragdrop.enableURLDropping();
        }
        var xa = this.getComponent('mainprivacywidget');
        this._privacyWidgetElement = xa.element;
        this._newPrivacyWidgetInstance = xa.instance && xa.instance.getInstance().getInstance();
        if (this._newPrivacyWidgetInstance) {
            var ya = this.getComponent('maininput').instance && this.getComponent('maininput').instance.getMentions(), za = this.getComponent('tagExpansionButton');
            (za && za.instance) && za.instance.listenToPrivacy(this._newPrivacyWidgetInstance, ya);
        }
        if (this._config.postActionsButton != null)
            this._config.postActionsButton.initHiddenInputs(this.getComponent('pabhiddeninputs').instance);
    };
    ta.prototype._fullInitWithComponents = function(ua) {
        "use strict";
        this._bootloadCallback = ia(this._bootloadModules.bind(this));
        if (ua && ua.show_tag_expansion_reminder) {
            j.loadModules(["ComposerXPrivacyWidgetTags", "URLScraper", "SuggestionScraper", "URI", "ComposerTagReminder"], this._bootloadCallback);
        } else 
            j.loadModules(["ComposerXPrivacyWidgetTags", "URLScraper", "SuggestionScraper", "URI"], this._bootloadCallback);
        Object.keys(this._privacyReminders).forEach(this._showPrivacyReminder, this);
        if (this._setEveryonePrivacyImpression)
            this._showPrivacyReminder('everyone');
        if (this._privacyReminders.delta_everyone && this._privacyReminders.delta_everyone.dialog) {
            var va = this._privacyReminders.delta_everyone.dialog.getContent();
            if (va) {
                var wa = u.scry(va, '.photoText')[0], xa = u.scry(va, '.postText')[0];
                g.subscribe('multi-upload/images-added', function() {
                    wa && s.show(wa);
                    xa && s.hide(xa);
                }.bind(this));
                g.subscribe('multi-upload/all-images-removed', function() {
                    wa && s.hide(wa);
                    xa && s.show(xa);
                }.bind(this));
            }
        }
        if (this._newPrivacyWidgetInstance) {
            this._newPrivacyWidgetInstance.subscribe('changed', this._onSelectorChange);
        } else 
            da.subscribe('select', this._onSelectorChange);
    };
    ta.prototype._bootloadModules = function(ua, va, wa, xa, ya) {
        "use strict";
        this._modulesAreBootloaded = true;
        this._tagger.init(this);
        this._privacyWidgetTags = new ua(this);
        if (ya) {
            this._tagExpansionReminder = new ya(this._root);
            this._tagExpansionReminder.listen();
        }
        l.trackCityChanges(this);
        var za = u.find(this.getComponent('maininput').element, 'textarea.input');
        if (!this._scraper) {
            this._scraper = new va(za);
            this._scraper.subscribe('match', function(cb, db) {
                var eb = this._getScraperEndpoint();
                eb.addQueryData({
                    scrape_url: encodeURIComponent(db.url),
                    remove_url: this._config.remove_url,
                    attachment_class: this._config.classname
                });
                n.getAttachment(this._root, eb.toString());
            }.bind(this));
        }
        this._scraper.enable();
        this._scraper.check();
        if (this._config.useSuggestionFramework) {
            var ab = t.scry(this._root, "._4-jj"), bb = this.getComposerID();
            if (ab && ab.length && this._tagger && bb) {
                if (!this._inputSuggestionScraper&&!this._privacyReminderShown) {
                    this._inputSuggestionScraper = new wa(this._tagger, ab[0], [fa.ADD_TAG, fa.FLYOUT], bb);
                    this._inputSuggestionScraper.setInputTriggerConfig(ea.OG_SUGGESTION_BY_INPUT, za);
                }
                if (!this._bootloadSuggestionScraper && this._config.recentActionUseSuggestionFramework) {
                    this._bootloadSuggestionScraper = new wa(this._tagger, ab[0], [fa.TAGGER_BADGE], bb);
                    this._bootloadSuggestionScraper.setBootloadTriggerConfig(ea.OG_TAGGER_TYPEAHEAD_BOOTSTRAP);
                }
            }
        }
    };
    ta.prototype._showPrivacyReminder = function(ua) {
        "use strict";
        var va = this, wa = this._privacyReminders[ua], xa = pa[ua], ya = null;
        if (this._newPrivacyWidgetInstance) {
            ya = this._newPrivacyWidgetInstance.getSelectedBaseValue();
        } else 
            ya = parseInt(da.getValue(this._privacyWidgetElement), 10);
        if (!wa ||!wa.dialog || wa.shown) {
            if (ya === ba.BaseValue.EVERYONE && this._setEveryonePrivacyImpression) {
                this._sendSetEveryonePrivacyImpression();
                this._setEveryonePrivacyImpression = false;
            }
            return;
        }
        if (xa.PRIVACY_CONSTANT.indexOf(ya)===-1)
            return;
        wa.dialog.setContext(this._privacyWidgetElement).show();
        wa.shown = true;
        this._privacyReminderShown = true;
        if (xa.LOG_IMPRESSION) {
            var za = (new oa()).setString('type', xa.LOG_IMPRESSION).getURI();
            new h(za).send();
        }
        if (xa.LOG_IMPRESSION_TO_DISMISS_ENDPOINT)
            if (ua === 'delta_everyone' || ua === 'only_me') {
                var ab = (new na()).setString('type', ua).getURI();
                new h(ab).send();
            } else 
                new h('/ajax/privacy/reminders/dismiss').setData({
                    type: ua,
                    dismiss_type: 'impression'
                }).send();
        var bb = function(event) {
            var cb = s.hasClass(event.target, 'layerConfirm') || u.scry(event.target, '^.layerConfirm').length === 1, db = s.hasClass(event.target, 'layerButton') || u.scry(event.target, '^.layerButton').length === 1;
            if (cb && ua !== 'public_posting_filter_nux') {
                if (ua === 'delta_everyone' || ua === 'only_me') {
                    var eb = (new oa()).setString('type', ca.DELTA_EVERYONE_OK_BUTTON_CLICKED).getURI();
                    new h(eb).send();
                }
                return;
            }
            if (ua === 'delta_everyone' || ua === 'only_me') {
                var fb = (new na()).setString('type', ua).getURI();
                new h(fb).send();
            } else 
                new h('/ajax/privacy/reminders/dismiss').setData({
                    type: ua,
                    hide: db
                }).send();
            wa.events.forEach(function(hb) {
                hb.remove();
            });
            wa.events = [];
            wa.dialog.hide();
            this._privacyReminderShown = false;
            if (db) {
                ma(function() {
                    if (this._newPrivacyWidgetInstance) {
                        this._newPrivacyWidgetInstance.openSelector();
                    } else 
                        da.toggle(u.scry(va.getComponent('mainprivacywidget').element, '.uiSelector')[0]);
                }.bind(this));
                if (ua === 'delta_everyone') {
                    var gb = (new oa()).setString('type', ca.DELTA_EVERYONE_CHANGE_BUTTON_CLICKED).getURI();
                    new h(gb).send();
                }
            }
        }.bind(this);
        if (this._newPrivacyWidgetInstance) {
            wa.conversionListener = this._newPrivacyWidgetInstance.subscribe('changed', function(cb, db) {
                var eb = this._newPrivacyWidgetInstance.getSelectedBaseValue();
                this._logPrivacyReminderConversion(wa, xa, eb);
            }.bind(this));
        } else 
            wa.conversionListener = da.subscribe('select', function(cb, db) {
                if (db.selector == this._privacyWidgetElement.firstChild) {
                    var eb = parseInt(da.getValue(db.option), 10);
                    this._logPrivacyReminderConversion(wa, xa, eb);
                }
            }.bind(this));
        wa.events = [v.listen(wa.dialog.getContent(), 'click', bb), v.listen(wa.dialog.getContext(), 'click', bb)];
    };
    ta.prototype._logPrivacyReminderConversion = function(ua, va, wa) {
        "use strict";
        if (va.PRIVACY_CONSTANT.indexOf(wa)===-1) {
            if (va.LOG_CONVERSION) {
                var xa = (new oa()).setString('type', va.LOG_CONVERSION).getURI();
                new h(xa).send();
            }
            if (this._newPrivacyWidgetInstance) {
                this._newPrivacyWidgetInstance.unsubscribe(ua.conversionListener);
            } else 
                da.unsubscribe(ua.conversionListener);
            ua.conversionListener = null;
        }
    };
    ta.prototype._onSelectorChange = function(ua, va) {
        "use strict";
        if (!this.getComponent('mainprivacywidget'))
            return;
        if (this._newPrivacyWidgetInstance || (va.selector === this._privacyWidgetElement.firstChild))
            setTimeout(function() {
                Object.keys(this._privacyReminders).forEach(this._showPrivacyReminder, this);
            }.bind(this));
    };
    ta.prototype.cleanup = function() {
        "use strict";
        this._attachmentIsActive = false;
        if (this._focusListener) {
            this._focusListener.remove();
            this._focusListener = null;
        }
        if (this._clickListener) {
            this._clickListener.remove();
            this._clickListener = null;
        }
        Object.keys(pa).forEach(function(ua) {
            var va = this._privacyReminders[ua];
            if (va && va.dialog && va.shown) {
                va.dialog.hide();
                va.events.forEach(function(wa) {
                    wa.remove();
                });
                va.events = [];
                if (va.conversionListener)
                    if (this._newPrivacyWidgetInstance) {
                        this._newPrivacyWidgetInstance.unsubscribe(va.conversionListener);
                    } else 
                        da.unsubscribe(va.conversionListener);
                va.conversionListener = null;
            }
        }.bind(this));
        if (this._dragdrop) {
            this._dragdrop.deactivate();
            this._dragdrop = null;
        }
        if (this._modulesAreBootloaded) {
            this._tagger.cleanup();
            this._privacyWidgetTags.destroy();
            this._privacyWidgetTags = null;
            this._scraper.disable();
        }
        if (this._bootloadCallback) {
            this._bootloadCallback.cancel();
            this._bootloadCallback = null;
        }
        if (this._dragEnterHandler) {
            this._dragEnterHandler.unsubscribe();
            this._dragEnterHandler = null;
        }
        if (this._pagesComposerEntryLogger)
            this._pagesComposerEntryLogger.unregister();
    };
    ta.prototype.reset = function() {
        "use strict";
        var ua = z.byClass(this._root, "child_was_focused");
        if (ua)
            s.removeClass(ua, "child_was_focused");
        if (this._tagger)
            this._tagger.reset();
        if (this._scraper)
            this._scraper.reset();
        if (this._newPrivacyWidgetInstance)
            this._newPrivacyWidgetInstance.informTagsChanged([]);
        this.getComponent('maininput').instance.setPlaceholder(this._config.mentionsPlaceholder);
        this._didInitialFocus = false;
    };
    ta.prototype.canSwitchAway = function() {
        "use strict";
        return !z.byClass(this._root, 'async_saving');
    };
    ta.prototype.setBootloadedContent = function(ua) {
        "use strict";
        this._setEveryonePrivacyImpression=!!ua.set_everyone_privacy_impression;
        Object.keys(pa).forEach(function(wa) {
            var xa = ua[wa + '_privacy_reminder'];
            if (xa)
                this._privacyReminders[wa] = {
                    dialog: xa
                };
        }.bind(this));
        var va = ua.placeholders.map(function(wa) {
            return wa.component_name;
        });
        r.waitForComponents(this._composerID, va, function() {
            var wa = u.find(this._root, "._3-6"), xa = u.find(this._root, "._3-7");
            t.setContent(wa, ua.markup.tagger_content);
            t.setContent(xa, ua.markup.tagger_icons);
            n.addPlaceholders(this._root, this, ua.placeholders);
            this._tagger = ua.tagger;
            l.updateMessageBoxBarState(this);
            this._fullVersion = true;
            if (this._attachmentIsActive)
                this._fullInitWithComponents(ua);
            var ya = t.scry(this._root, "._4-jj");
            if (this._isEligibleForVerbsNUX(ua) && ya.length > 0) {
                q.onInit(this._config.newverbsNUXDialog, ya[0], q.OGCOMPOSER_NEWVERBS_NUX);
                this._newVerbsListener = v.listen(ya[0], 'click', function() {
                    q.acknowledgeDialog(q.OGCOMPOSER_NEWVERBS_NUX, this._config.newverbsNUXDialog);
                }.bind(this));
            }
            m.registerMentionsForComposerCancel(this.getComponent('maininput'), this.getComposerID());
        }.bind(this));
    };
    ta.prototype._isEligibleForVerbsNUX = function(ua) {
        "use strict";
        var va = this.getComponent('maininput');
        return this._config.newverbsNUXDialog&&!this._privacyReminderShown&&!ua.showed_previous_post_upsell&&!va.instance.hasAuxContent();
    };
    ta.prototype._getScraperEndpoint = function() {
        "use strict";
        return ga('/ajax/composerx/attachment/link/scraper/');
    };
    ta.prototype._onFocus = function() {
        "use strict";
        p.logEntry(this._composerID, 'status');
        if (!this._didInitialFocus && this._config.prefill_text)
            this._getTextArea().value = this._config.prefill_text;
        this._didInitialFocus = true;
        g.inform(x.COMPOSER_FOCUSED);
        if (this._fullVersion || this._bootloading)
            return;
        g.inform('composer/focus', this._composerID);
        g.inform('composer/render_pab_nux');
        n.getEndpoint(this._root, '/ajax/composerx/attachment/status/bootload/', true);
        this._bootloading = true;
    };
    ta.prototype.allowOGTagPreview = function() {
        "use strict";
        return true;
    };
    ta.prototype._sendSetEveryonePrivacyImpression = function() {
        "use strict";
        new h('/ajax/privacy/reminders/set_everyone_privacy_impression').send();
    };
    ta.setBootloadedContent = function(ua, va) {
        "use strict";
        var wa = qa[ua];
        if (wa)
            wa.setBootloadedContent.call(wa, va);
    };
    ha(ta.prototype, {
        _attachmentIsActive: false,
        _bootloading: false,
        _modulesAreBootloaded: false,
        _fullVersion: false,
        _focusListener: null,
        _privacyWidgetTags: null,
        _scraper: null,
        _dragdrop: null,
        _bootloadCallback: null,
        attachmentClassName: "_4j"
    });
    e.exports = ta;
}, null);
__d("ComposerXMentionsInputReset", ["DOMQuery", "Input"], function(a, b, c, d, e, f, g, h) {
    function i(j) {
        var k = g.scry(j.element, 'textarea.input')[0];
        j.instance.reset();
        h.reset(k);
    }
    e.exports = i;
}, null);
__d("ComposerXOGTaggerIconReset", ["CSS", "cx"], function(a, b, c, d, e, f, g, h) {
    function i(j) {
        g.removeClass(j.element, "_4-jh");
        g.removeClass(j.element, "_509o");
    }
    e.exports = i;
}, null);
__d("ComposerXPrivacyWidgetReset", ["Arbiter"], function(a, b, c, d, e, f, g) {
    function h(i) {
        g.inform('Composer/changedtags', {
            withTags: [],
            mention: {},
            eventTag: false
        });
    }
    e.exports = h;
}, null);
__d("ComposerXTaggerIconReset", ["CSS", "cx"], function(a, b, c, d, e, f, g, h) {
    function i(j) {
        g.removeClass(j.element, "_1dsa");
        g.removeClass(j.element, "_1dsb");
        g.removeClass(j.element, "_509o");
    }
    e.exports = i;
}, null);
__d("legacy:AudienceSelector", ["AudienceSelector"], function(a, b, c, d) {
    b('AudienceSelector');
}, 3);
__d("MentionsTypeaheadAreaView", ["ContextualTypeaheadView", "Parent"], function(a, b, c, d, e, f, g, h) {
    for (var i in g)
        if (g.hasOwnProperty(i))
            k[i] = g[i];
    var j = g === null ? null: g.prototype;
    k.prototype = Object.create(j);
    k.prototype.constructor = k;
    k.__superConstructor__ = g;
    function k() {
        "use strict";
        if (g !== null)
            g.apply(this, arguments);
    }
    k.prototype.getContext = function() {
        "use strict";
        return h.byClass(this.element, 'uiMentionsInput');
    };
    e.exports = k;
}, null);
