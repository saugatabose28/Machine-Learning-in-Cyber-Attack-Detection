/*!CK:505182642!*/
/*1415600704,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["f3Gqc"]);
}

__d("BlackbirdUpsellConstants", [], function(a, b, c, d, e, f) {
    e.exports = {
        ACTION_EDUCATE: "educate",
        ACTION_UPSELL: "upsell",
        CLICK_TYPE_DISMISS_PROMO: "dismiss_promo",
        CLICK_TYPE_ENABLE_CHAT: "enable_chat",
        CLICK_TYPE_OPEN_SETTINGS: "open_settings"
    };
}, null);
__d("GenderConst", [], function(a, b, c, d, e, f) {
    e.exports = {
        NOT_A_PERSON: 0,
        FEMALE_SINGULAR: 1,
        MALE_SINGULAR: 2,
        FEMALE_SINGULAR_GUESS: 3,
        MALE_SINGULAR_GUESS: 4,
        MIXED_SINGULAR: 5,
        MIXED_PLURAL: 5,
        NEUTER_SINGULAR: 6,
        UNKNOWN_SINGULAR: 7,
        FEMALE_PLURAL: 8,
        MALE_PLURAL: 9,
        NEUTER_PLURAL: 10,
        UNKNOWN_PLURAL: 11,
        UNKNOWN: 0
    };
}, null);
__d("BlackbirdUpsell", ["Event", "Arbiter", "AsyncRequest", "LegacyContextualDialog", "DOM", "LayerDestroyOnHide", "LayerHideOnTransition", "PresencePrivacy", "copyProperties", "BlackbirdUpsellConfig", "BlackbirdUpsellConstants", "BlackbirdUpsellTemplates"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    var s = '/ajax/chat/blackbird/update_clicks.php', t = '/ajax/chat/blackbird/update_impressions.php', u = '/ajax/chat/blackbird/dismiss.php', v = 235, w = null, x = null, y = false, z = false;
    function aa() {}
    o(aa, {
        shouldShow: function() {
            if (this._dialogDismissed)
                return false;
            if (this.isEducation()) {
                return !p.EducationDismissed && p.EducationImpressions < p.EducationImpressionLimit;
            } else 
                return !!p.UpsellGK&&!p.UpsellDismissed && p.UpsellImpressions < p.UpsellImpressionLimit && p.FriendCount >= p.UpsellMinFriendCount;
        },
        isEducation: function() {
            return p.TimeOffline <= p.EducationTimeOfflineThresdhold;
        },
        getOfflineContent: function() {
            if (this.isEducation()) {
                return this._getEducationContent();
            } else 
                return this._getUpsellContent();
        },
        _getEducationContent: function() {
            ga();
            var ka = r[':fb:chat:blackbird:offline-educate'].build(), la = ka.getNode('chatSettingsButton');
            g.listen(la, 'click', function() {
                h.inform('chat/advanced-settings-dialog-opened');
                ja(q.CLICK_TYPE_OPEN_SETTINGS);
                da();
            });
            return ka.getRoot();
        },
        _getUpsellContent: function() {
            fa();
            var ka = r[':fb:chat:blackbird:upsell'].build(), la = ka.getNode('chatSettingsButton');
            g.listen(la, 'click', function() {
                h.inform('chat/advanced-settings-dialog-opened');
                ia(q.CLICK_TYPE_OPEN_SETTINGS);
                ca();
            });
            var ma = ka.getNode('enableChatButton');
            g.listen(ma, 'click', function() {
                ia(q.CLICK_TYPE_ENABLE_CHAT);
                ca();
            });
            return ka.getRoot();
        },
        getBlackbirdContent: function(ka) {
            ga();
            switch (ka) {
            case n.ONLINE:
                return r[':fb:chat:blackbird:most-friends-educate'].build().getRoot();
            case n.OFFLINE:
                return r[':fb:chat:blackbird:some-friends-educate'].build().getRoot();
            }
        },
        showOfflineDialog: function(ka) {
            this.showDialog(ka, this.getOfflineContent.bind(this));
        },
        showBlackbirdDialog: function(ka, la) {
            this.showDialog(ka, this.getBlackbirdContent.bind(null, la));
        },
        showDialog: function(ka, la) {
            !w && this._constructDialog();
            k.setContent(x, la());
            w.setContext(ka);
            w.show();
        },
        hide: function() {
            if (w && w.isShown())
                w.hide();
        },
        dismiss: function() {
            this.hide();
            if (this.isEducation()) {
                da();
            } else 
                ca();
        },
        registerDismissClick: function() {
            if (this.isEducation()) {
                ja(q.CLICK_TYPE_DISMISS_PROMO);
            } else 
                ia(q.CLICK_TYPE_DISMISS_PROMO);
        },
        isVisible: function() {
            return z&&!y;
        },
        _constructDialog: function() {
            var ka = r[':fb:chat:blackbird:dialog-frame'].build();
            x = ka.getNode('dialogContent');
            w = new j();
            w.init(ka.getRoot());
            w.setPosition('above').setWidth(v).setFixed(true).disableBehavior(l).disableBehavior(m);
            g.listen(ka.getNode('dialogCloseButton'), 'click', this.dismiss.bind(this));
            g.listen(ka.getNode('dialogCloseButton'), 'click', this.registerDismissClick.bind(this));
        }
    });
    function ba(ka, la) {
        if (!y && z) {
            y = true;
            n.inform('privacy-user-presence-changed');
            var ma = new i(u);
            ma.setData({
                source: ka,
                impressions: la,
                time_offline: p.TimeOffline
            });
            ma.setErrorHandler(function() {
                y = false;
            });
            ma.send();
        }
    }
    function ca() {
        ba(q.ACTION_UPSELL, p.UpsellImpressions);
    }
    function da() {
        ba(q.ACTION_EDUCATE, p.EducationImpressions);
    }
    function ea(ka, la) {
        if (!z) {
            z = true;
            var ma = new i(t);
            ma.setData({
                action: ka,
                impressions: la,
                time_offline: p.TimeOffline
            });
            ma.setErrorHandler(function() {
                z = false;
            });
            ma.send();
        }
    }
    function fa() {
        ea(q.ACTION_UPSELL, p.UpsellImpressions);
    }
    function ga() {
        ea(q.ACTION_EDUCATE, p.EducationImpressions);
    }
    function ha(ka, la, ma, na) {
        var oa = new i(s);
        oa.setData({
            action: ka,
            impressions: ma,
            source: la,
            time_offline: na
        });
        oa.send();
    }
    function ia(ka) {
        ha(ka, q.ACTION_UPSELL, p.UpsellImpressions, p.TimeOffline);
    }
    function ja(ka) {
        ha(ka, q.ACTION_EDUCATE, p.EducateImpressions, p.TimeOffline);
    }
    h.subscribe('chat/advanced-settings-dialog-opened', aa.dismiss.bind(aa));
    h.subscribe('chat-visibility/go-online', aa.dismiss.bind(aa));
    h.subscribe('chat-visibility/go-offline', aa.dismiss.bind(aa));
    e.exports = aa;
}, null);
__d("Chat", ["Arbiter"], function(a, b, c, d, e, f, g) {
    var h = {
        buddyListNub: 'buddylist-nub/initialized',
        sidebar: 'sidebar/initialized'
    };
    function i(k, l) {
        g.subscribe(h[k], function(event, m) {
            l(m);
        });
    }
    var j = {
        openBuddyList: function() {
            i('buddyListNub', function(k) {
                k.show();
                i('sidebar', function(l) {
                    l.enable();
                });
            });
        },
        closeBuddyList: function() {
            i('buddyListNub', function(k) {
                k.hide();
            });
        },
        toggleSidebar: function() {
            i('sidebar', function(k) {
                k.toggle();
            });
        }
    };
    a.Chat = e.exports = j;
}, 3);
__d("ChatOptions", ["Arbiter", "ChannelConstants", "JSLogger", "PresenceUtil", "copyProperties", "ChatOptionsInitialData"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = i.create('chat_options'), m = {};
    (function() {
        var o = b('ChatOptionsInitialData');
        for (var p in o) {
            var q = o[p];
            m[p]=!!q;
        }
    })();
    var n = k(new g(), {
        getSetting: function(o) {
            return m[o];
        },
        setSetting: function(o, p, q) {
            if (this.getSetting(o) == p)
                return;
            if (q) {
                q = 'from_' + q;
                l.log(q, {
                    name: o,
                    new_value: p,
                    old_value: this.getSetting(o)
                });
            }
            m[o]=!!p;
            g.inform('chat/option-changed', {
                name: o,
                value: p
            });
        }
    });
    g.subscribe(h.getArbiterType('setting'), function(o, p) {
        var q = p.obj;
        if (q.window_id === j.getSessionID())
            return;
        n.setSetting(q.setting, !!q.value, 'channel');
    });
    g.subscribe(i.DUMP_EVENT, function(o, p) {
        p.chat_options = m;
    });
    e.exports = n;
}, null);
__d("ChatQuietLinks", ["Event", "DOM", "UserAgent_DEPRECATED", "DataStore", "Parent"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = {}, m = {
        silenceLinks: function(q) {
            n(q, this.removeEmptyHrefs.bind(this));
        },
        nukeLinks: function(q) {
            n(q, this.removeAllHrefs.bind(this));
        },
        removeEmptyHrefs: function(q) {
            o(q, function(r) {
                return !r || r === '#';
            });
        },
        removeAllHrefs: function(q) {
            o(q);
        }
    };
    function n(q, r) {
        var s=!!i.chrome(), t=!!i.chrome() || i.ie() >= 9 || i.firefox() >= 4;
        if (l[h.getID(q)])
            return;
        l[h.getID(q)] = true;
        if (!t)
            return;
        if (!s) {
            r && r(q);
            return;
        }
        g.listen(q, 'mouseover', function u(v) {
            var w = k.byTag(v.getTarget(), 'a');
            if (w) {
                var x = w.getAttribute('href');
                if (p(x)) {
                    j.set(w, 'stashedHref', w.getAttribute('href'));
                    w.removeAttribute('href');
                }
            }
        });
        g.listen(q, 'mouseout', function u(v) {
            var w = k.byTag(v.getTarget(), 'a'), x = w && j.remove(w, 'stashedHref');
            if (p(x))
                w.setAttribute('href', x);
        });
        g.listen(q, 'mousedown', function(u) {
            if (!u.isDefaultRequested())
                return true;
            var v = k.byTag(u.getTarget(), 'a'), w = v && j.get(v, 'stashedHref');
            if (p(w))
                v.setAttribute('href', w);
        });
    }
    function o(q, r) {
        var s = h.scry(q, 'a');
        if (r)
            s = s.filter(function(t) {
                return r(t.getAttribute('href'));
            });
        s.forEach(function(t) {
            t.removeAttribute('href');
            t.setAttribute('tabindex', 0);
        });
    }
    function p(q) {
        return q && q !== '#';
    }
    e.exports = m;
}, null);
__d("OrderedFriendsList", ["AvailableListConstants", "PresenceStatus", "ShortProfiles", "WorkModeConfig", "createArrayFrom", "InitialChatFriendsList"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = [], m = [], n = {}, o = [], p = {}, q = [], r = {
        contains: function(s) {
            return s in n;
        },
        getList: function() {
            if (j.is_work_user)
                return k(l);
            r.reRank();
            var s = k(l);
            s = s.filter(function(t) {
                var u = i.getNowUnsafe(t);
                return !u || u.type == "friend";
            });
            return s;
        },
        getRank: function(s) {
            return s in n ? n[s] : l.length;
        },
        getActiveList: function() {
            if (o.length > 0)
                return o;
            return r.getList();
        },
        getActiveRank: function(s) {
            return s in p ? p[s] : r.getRank(s);
        },
        reRank: function() {
            l = [];
            var s = 0;
            q.forEach(function(t) {
                var u = t.slice(0, - 2), v = t.slice( - 1);
                if (h.get(u) == v) {
                    l[s] = u;
                    n[u] = s++;
                }
            });
        },
        rankActive: function() {
            var s = 0;
            q.forEach(function(t) {
                var u = t.slice(0, - 2), v = t.slice( - 1);
                if (v == g.ACTIVE) {
                    o[s] = u;
                    p[u] = s++;
                }
            });
        },
        getGroups: function() {
            return m;
        }
    };
    (function() {
        var s = b('InitialChatFriendsList');
        l = s.list.length ? s.list : [];
        m = s.groups;
        if (!j.is_work_user) {
            q = l.slice();
            r.rankActive();
            r.reRank();
        } else 
            l.forEach(function(t, u) {
                n[t] = u;
            });
    })();
    e.exports = a.OrderedFriendsList || r;
}, null);
__d("ChatMiniSidebarController", ["Bootloader", "React"], function(a, b, c, d, e, f, g, h) {
    'use strict';
    var i = null, j = 0, k = 0, l = null, m = null, n = null, o = null, p = {
        init: function(q, r, s) {
            if (o)
                return;
            o = q;
            m = r;
            n = s;
        },
        setHeight: function(q) {
            j = q;
        },
        setMaxItems: function(q) {
            k = q;
        },
        show: function() {
            g.loadModules(["ChatMiniSidebar.react", "ChatMiniSidebarSearchSource"], function(q, r) {
                if (!i)
                    i = new r({
                        queryRequests: [{
                            uri: '/ajax/mercury/composer_query.php'
                        }
                        ]
                    });
                l = h.render(h.createElement(q, {
                    dataSource: i,
                    height: j,
                    maxEntries: k,
                    onToggleSidebar: n,
                    onClickSearch: m,
                    shown: true
                }), o);
            });
        },
        hide: function() {
            l && l.setProps({
                dataSource: i,
                height: j,
                maxEntries: k,
                onToggleSidebar: n,
                onClickSearch: m,
                shown: false
            }, function() {
                return m && m(false);
            });
        }
    };
    e.exports = p;
}, null);
__d("ChatSidebarComposeLink.react", ["ChatOpenTab", "React", "TooltipLink.react", "URI", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = h.createClass({
        displayName: "ChatSidebarComposeLink",
        propTypes: {
            className: h.PropTypes.string.isRequired
        },
        componentDidMount: function() {
            g.listenOpenEmptyTab(this.getDOMNode(), 'sidebar');
        },
        render: function() {
            var m = "New Message";
            return (h.createElement(i, {
                ajaxify: new j('/ajax/messaging/composer.php'),
                className: this.props.className,
                tooltip: m,
                rel: "dialog"
            }));
        }
    });
    e.exports = l;
}, null);
__d("ChatSidebarConstants", ["mergeInto"], function(a, b, c, d, e, f, g) {
    var h = {
        LITESTAND_CLASSIC_SIZE: 32,
        IMAGE_SIZE: 28
    };
    g(h, {
        getImageSize: function(i) {
            if (i === false)
                return h.IMAGE_SIZE;
            return h.LITESTAND_CLASSIC_SIZE;
        },
        getItemHeight: function(i) {
            if (i === false)
                return h.IMAGE_SIZE + 4;
            return h.LITESTAND_CLASSIC_SIZE + 4;
        }
    });
    e.exports = h;
}, null);
__d("ChatBehavior", ["Arbiter", "AvailableList", "AvailableListConstants", "copyProperties", "MercuryConstants", "ChatSidebarCalloutData"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = b('MercuryConstants').ChatNotificationConstants, l = b('ChatSidebarCalloutData').isShown, m = h.getWebChatNotification(), n = l, o = true, p = j(new g(), {
        ON_CHANGED: 'changed',
        notifiesUserMessages: function() {
            return m !== k.NO_USER_MESSAGE_NOTIFICATION;
        },
        ignoresRemoteTabRaise: function() {
            return n;
        },
        showsTabUnreadUI: function() {
            return o;
        }
    });
    function q() {
        p.inform(p.ON_CHANGED);
    }
    h.subscribe(i.ON_CHAT_NOTIFICATION_CHANGED, function() {
        var r = m, s = h.getWebChatNotification();
        m = s;
        if (r != s)
            q();
    });
    g.subscribe('chat/set_does_page_occlude_tabs', function(r, s) {
        n=!!s;
        q();
    });
    g.subscribe('chat/set_show_tab_unread_ui', function(r, s) {
        o=!!s;
        q();
    });
    e.exports = p;
}, null);
__d("ChatSidebarSheet", ["ArbiterMixin", "BlackbirdUpsell", "ChannelConnection", "ChannelConstants", "ChatBehavior", "ChatConfig", "ChatVisibility", "CSS", "DOM", "Event", "JSLogger", "PresencePrivacy", "copyProperties", "mixin", "setTimeoutAcrossTransitions", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
    var w = q.create('sidebar_sheet');
    function x(da) {
        switch (da) {
        case j.HINT_AUTH:
            return "Your session has timed out. Please log in.";
        case j.HINT_CONN:
            return v._("Facebook {Chat} is currently unavailable.", {
                Chat: "Chat"
            });
        case j.HINT_MAINT:
            return v._("Facebook {Chat} is currently down for maintenance.", {
                Chat: "Chat"
            });
        default:
            return v._("Facebook {Chat} is currently unavailable.", {
                Chat: "Chat"
            });
        }
    }
    function y(da) {
        var ea;
        if (da === null || false === navigator.onLine) {
            ea = "Unable to connect to chat. Check your Internet connection.";
        } else if (da > l.get('warning_countdown_threshold_msec')) {
            var fa = o.create('a', {
                href: '#',
                className: 'fbChatReconnectLink'
            }, "Try again");
            ea = o.tx._("Unable to connect to chat. {try-again-link}", {
                'try-again-link': fa
            });
        } else if (da > 1000) {
            ea = v._("Unable to connect to chat. Reconnecting in {seconds}...", {
                seconds: Math.floor(da / 1000)
            });
        } else 
            ea = "Unable to connect to chat. Reconnecting...";
        return ea;
    }
    var z = t(g);
    for (var aa in z)
        if (z.hasOwnProperty(aa))
            ca[aa] = z[aa];
    var ba = z === null ? null: z.prototype;
    ca.prototype = Object.create(ba);
    ca.prototype.constructor = ca;
    ca.__superConstructor__ = z;
    function ca(da) {
        "use strict";
        this._root = da;
        this._message = o.find(da, 'div.fbChatSidebarMessage div.message');
        i.subscribe([i.CONNECTED, i.SHUTDOWN, i.RECONNECTING], this._handleConnectionChange.bind(this));
        i.subscribe([i.MUTE_WARNING, i.UNMUTE_WARNING], this._render.bind(this));
        r.subscribe('privacy-user-presence-changed', this._render.bind(this));
        k.subscribe(k.ON_CHANGED, this._render.bind(this));
        this._render();
    }
    ca.prototype._handleConnectionChange = function(da, ea) {
        "use strict";
        this._channelStatus = da;
        this._channelData = ea;
        this._render();
    };
    ca.prototype._renderChannelDisconnect = function() {
        "use strict";
        if (this._channelStatus === i.SHUTDOWN) {
            return o.setContent(this._message, x(this._channelData));
        } else if (this._channelStatus === i.RECONNECTING) {
            var da = this._channelData;
            o.setContent(this._message, y(da));
            if (da > 1000) {
                if (da > l.get('warning_countdown_threshold_msec'))
                    this._warningMsgEventListener = p.listen(this._message, 'click', function(event) {
                        if (n.hasClass(event.getTarget(), 'fbChatReconnectLink')) {
                            i.reconnect();
                            return false;
                        }
                    });
                this._showWarningTimeout = u(this._handleConnectionChange.bind(this, i.RECONNECTING, da - 1000), 1000);
            }
        }
    };
    ca.prototype._renderOffline = function() {
        "use strict";
        var da = 'fbChatGoOnlineLink', ea = "Turn on chat", fa = o.create('a', {
            href: '#',
            className: da
        }, ea), ga = o.tx._("{=Go online} to see who's available.", {
            '=Go online': fa
        });
        o.setContent(this._message, ga);
        this._goOnlineEventListener = p.listen(this._message, 'click', function(event) {
            if (n.hasClass(event.getTarget(), da)) {
                w.log('sidebar_go_online');
                m.goOnline();
                return false;
            }
        });
    };
    ca.prototype._renderBlackbirdUpsell = function() {
        "use strict";
        o.setContent(this._message, h.getOfflineContent());
    };
    ca.prototype._renderBlackbird = function(da) {
        "use strict";
        o.setContent(this._message, h.getBlackbirdContent(da));
    };
    ca.prototype._clear = function() {
        "use strict";
        if (this._showWarningTimeout) {
            clearTimeout(this._showWarningTimeout);
            this._showWarningTimeout = null;
        }
        if (this._warningMsgEventListener) {
            this._warningMsgEventListener.remove();
            this._warningMsgEventListener = null;
        }
        if (this._goOnlineEventListener) {
            this._goOnlineEventListener.remove();
            this._goOnlineEventListener = null;
        }
        n.removeClass(this._root, 'upsell');
        n.removeClass(this._root, 'offline');
        n.removeClass(this._root, 'blackbird');
        n.removeClass(this._root, 'error');
        n.removeClass(this._root, 'notice');
        o.empty(this._message);
    };
    ca.prototype._render = function() {
        "use strict";
        this._clear();
        if (h.shouldShow()) {
            if (m.hasBlackbirdEnabled()) {
                var da = m.isOnline() ? 'blackbird': 'upsell';
                n.addClass(this._root, da);
                this._renderBlackbird(r.getVisibility());
            } else if (!m.isOnline()) {
                n.addClass(this._root, 'upsell');
                this._renderBlackbirdUpsell();
            }
        } else if (!m.isOnline()) {
            n.addClass(this._root, 'offline');
            this._renderOffline();
        } else if (i.disconnected()) {
            n.addClass(this._root, 'error');
            this._renderChannelDisconnect();
        } else if (!k.notifiesUserMessages()) {
            n.addClass(this._root, 'notice');
            var ea = "Alerts are off while you use another client to chat.";
            o.setContent(this._message, ea);
        }
        this.inform('updated');
    };
    s(ca.prototype, {
        _channelStatus: null,
        _channelData: null,
        _showWarningTimeout: null,
        _warningMsgEventListener: null,
        _goOnlineEventListener: null
    });
    e.exports = ca;
}, null);
__d("SidebarFitWindowHeight", ["Arbiter", "ArbiterMixin", "Event", "Style", "SubscriptionsHandler", "TinyViewport", "Vector", "mixin", "queryThenMutateDOM"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = n(h);
    for (var q in p)
        if (p.hasOwnProperty(q))
            s[q] = p[q];
    var r = p === null ? null: p.prototype;
    s.prototype = Object.create(r);
    s.prototype.constructor = s;
    s.__superConstructor__ = p;
    function s(t) {
        "use strict";
        this.$SidebarFitWindowHeight0 = t;
        this.onViewportUpdate();
        l.subscribe('change', this.onViewportUpdate.bind(this));
    }
    s.prototype.onViewportUpdate = function() {
        "use strict";
        if (l.isTiny()) {
            this.onScroll();
            var t = this.onScroll.bind(this);
            this.$SidebarFitWindowHeight1 = new k();
            this.$SidebarFitWindowHeight1.addSubscriptions(i.listen(window, 'scroll', t), g.subscribe('dom-scroll', t));
        } else {
            if (this.$SidebarFitWindowHeight2 !== 0) {
                j.set(this.$SidebarFitWindowHeight0, 'margin-top', '0');
                this.$SidebarFitWindowHeight2 = 0;
            }
            this.$SidebarFitWindowHeight1 && this.$SidebarFitWindowHeight1.release();
        }
    };
    s.prototype.onScroll = function() {
        "use strict";
        o(this.updateScrollPosition.bind(this), this.resizeSidebar.bind(this), 'SidebarFitWindowHeight/scroll');
    };
    s.prototype.updateScrollPosition = function() {
        "use strict";
        this.$SidebarFitWindowHeight3 = m.getScrollPosition().y;
        this.$SidebarFitWindowHeight4 || (this.$SidebarFitWindowHeight4 = this.$SidebarFitWindowHeight0.offsetHeight);
    };
    s.prototype.resizeSidebar = function() {
        "use strict";
        var t =- Math.max(Math.min(this.$SidebarFitWindowHeight3, this.$SidebarFitWindowHeight4), 0);
        j.set(this.$SidebarFitWindowHeight0, 'margin-top', t + 'px');
        if (t != this.$SidebarFitWindowHeight2) {
            this.$SidebarFitWindowHeight2 = t;
            this.inform('resized', t);
        }
    };
    s.prototype.getOffset = function() {
        "use strict";
        return this.$SidebarFitWindowHeight2;
    };
    e.exports = s;
}, null);
__d("ChatSidebar", ["Arbiter", "ArbiterMixin", "AsyncRequest", "Banzai", "BanzaiLogger", "BootloaderConfig", "ChatConfig", "ChatImpressionLogger", "ChatOptions", "ChatMiniSidebarController", "ChatSidebarComposeLink.react", "ChatSidebarConstants", "ChatSidebarSheet", "CSS", "DOM", "DOMDimensions", "Event", "JSLogger", "KeyEventController", "LitestandClassicPlaceHolders", "ModalLayer", "OrderedFriendsList", "Parent", "PresencePrivacy", "React", "ScrollableArea", "SidebarFitWindowHeight", "Style", "ViewportBounds", "copyProperties", "createArrayFrom", "csx", "cx", "debounce", "emptyFunction", "ge"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa) {
    var qa, ra = null, sa = false, ta = false, ua = false, va = false, wa = false, xa = false, ya, za = false, ab, bb, cb, db, eb, fb, gb, hb = null, ib, jb = x.create('chat_sidebar'), kb = 'succeeded', lb = k.create(ja({
        retry: true
    }, j.VITAL));
    function mb() {
        t.removeClass(document.documentElement, 'sidebarMode');
        if (!wa ||!yb.isVisible()) {
            g.inform('reflow');
            return;
        }
        ua = false;
        va = false;
        hb = null;
        db.hide();
        fb.getCore().reset();
        t.hide(bb);
        if (za) {
            t.hide(ya);
            t.hide(ab);
            t.removeClass(document.documentElement, 'miniSidebar');
            t.removeClass(bb, "_51xq");
            p.hide();
            jb.log('minisidebar_hide');
        } else 
            jb.log('sidebar_hide');
        g.inform('sidebar/hide', yb);
        g.inform('reflow');
    }
    function nb() {
        var zb = yb.shouldShowSidebar(), ac = yb.shouldShowMiniSidebar();
        if (yb.isEnabled() && (zb || ac)) {
            if (zb) {
                qb();
                rb();
            } else 
                tb();
        } else 
            mb();
        if (!wa) {
            wb();
            wa = true;
        }
        hb = null;
    }
    function ob() {
        if (fb && yb.isVisible())
            fb.getCore().getElement().focus();
    }
    function pb(zb) {
        var ac = gb.height;
        zb.forEach(function(bc) {
            if (bc && bc !== qa)
                ac -= v.getElementDimensions(bc).height;
        });
        if (ib)
            ac -= ib.getOffset();
        if (eb)
            ac -= v.getElementDimensions(eb).height;
        return Math.max(0, ac);
    }
    function qb() {
        if (yb.isVisible())
            return;
        if (za) {
            t.hide(ya);
            t.show(ab);
            t.removeClass(document.documentElement, 'miniSidebar');
            t.removeClass(bb, "_51xq");
            p.hide();
        }
        ua = true;
        va = false;
        hb = null;
        t.show(bb);
        t.addClass(document.documentElement, 'sidebarMode');
        db.show();
        jb.log('sidebar_show');
        g.inform('sidebar/show', yb);
        z.destroy('sidebar');
    }
    function rb() {
        var zb = pb(ka(ab.childNodes)), ac = db.getItemHeight(), bc = 8, cc = Math.floor((zb - bc) / ac);
        ha.set(qa, 'height', zb + 'px');
        db.setNumTopFriends(cc);
        var dc = Math.floor((zb - bc) / ac);
        dc = (dc - 2) > 0 ? dc - 2 : 0;
        fb.getData().setMaxResults(dc);
        g.inform('sidebar/resized', yb);
        g.inform('reflow');
    }
    function sb(zb) {
        if (bb === null)
            return;
        t.conditionClass(bb, "_2e4g", zb);
    }
    function tb() {
        t.hide(ab);
        t.show(ya);
        t.show(bb);
        t.addClass(document.documentElement, 'sidebarMode');
        t.addClass(document.documentElement, 'miniSidebar');
        t.addClass(bb, "_51xq");
        var zb = pb([]), ac = r.getItemHeight(true);
        p.setHeight(zb);
        var bc = Math.floor(zb / ac) - 2;
        p.setMaxItems(bc > 0 ? bc : 0);
        p.show();
        ua = false;
        va = true;
        z.destroy('sidebar');
        jb.log('minisidebar_show');
        g.inform('minisidebar/show', yb);
        g.inform('reflow');
    }
    function ub() {
        o.setSetting('sidebar_mode', yb.isEnabled(), 'sidebar');
        new i('/ajax/chat/settings.php').setHandler(oa).setErrorHandler(oa).setData({
            sidebar_mode: yb.isEnabled()
        }).setAllowCrossPageTransition(true).send();
    }
    function vb() {
        return ba.getActiveList().length <= m.get('sidebar.min_friends');
    }
    function wb() {
        var zb = true;
        if (!yb.isEnabled()) {
            jb.log('state_not_enabled');
            zb = false;
        }
        if (!yb.isViewportCapable())
            if (!za) {
                jb.log('state_not_shown_viewport');
                zb = false;
            } else if (!yb.isViewportCapableForMiniSidebar()) {
                jb.log('state_not_shown_viewport_mini');
                zb = false;
            }
        if (ta) {
            jb.log('state_not_shown_hidden');
            zb = false;
        }
        if (vb()) {
            jb.log('state_not_shown_num_friends');
            zb = false;
        }
        jb.log(zb ? 'state_shown' : 'state_not_shown');
    }
    function xb(event, zb) {
        if (!yb.isVisible())
            return;
        if (zb) {
            ha.set(bb, 'right', zb + 'px');
        } else 
            ha.set(bb, 'right', '');
    }
    var yb = {
        init: function(zb, ac, bc, cc) {
            yb.init = oa;
            xa = true;
            bb = zb;
            db = ac;
            fb = bc;
            cb = cc;
            qa = u.find(zb, 'div.fbChatSidebarBody');
            ya = u.find(zb, "._51x-");
            ab = u.find(zb, "._51x_");
            eb = u.find(zb, "._5qqe");
            za = m.get('www_mini_sidebar', false);
            if (za)
                p.init(ya, sb, function() {
                    return yb.toggle();
                });
            if (cc && cc.react_compose_link) {
                var dc = u.find(zb, "._x1u");
                dc && ea.render(ea.createElement(q, {
                    className: "_3a-4 _5q85"
                }), dc);
            }
            w.listen(window, 'resize', nb);
            y.registerKey('q', function(event) {
                if (ua) {
                    if (!ra)
                        ra = u.scry(zb, '.inputsearch')[0];
                    if (ra) {
                        ra.focus();
                        event.prevent();
                    }
                }
            });
            var ec = new s(zb);
            ec.subscribe('updated', nb);
            db.setScrollContainer(ca.byClass(db.getRoot(), 'uiScrollableAreaWrap'));
            db.subscribe(['render', 'show', 'hide'], na(function(gc) {
                var hc = fa.getInstance(db.getRoot());
                hc && hc.adjustGripper();
            }));
            g.subscribe('chat/option-changed', function(gc, hc) {
                if (hc.name == "sidebar_mode") {
                    sa=!!o.getSetting('sidebar_mode');
                    nb();
                }
                if (hc.name === 'hide_groups')
                    nb();
            });
            bc.getCore().subscribe('sidebar/typeahead/active', yb.updateOnActiveTypeahead);
            bc.subscribe('reset', function() {
                if (!bc.getCore().getValue()&&!db.isVisible())
                    yb.updateOnActiveTypeahead(null, false);
            });
            g.subscribe('buddylist-nub/initialized', function(gc, hc) {
                w.listen(hc.getButton(), 'click', function(event) {
                    var ic = ta;
                    ta = false;
                    yb.enable();
                    var jc = yb.shouldShowSidebar() || yb.shouldShowMiniSidebar();
                    ta = ic&&!jc;
                    return !jc;
                });
            });
            sa=!!o.getSetting('sidebar_mode');
            da.subscribe('privacy-user-presence-changed', nb);
            nb();
            n.init(db);
            ia.addPersistentRight(yb.getVisibleWidth);
            yb.inform('sidebar/initialized', yb, g.BEHAVIOR_PERSISTENT);
            g.inform('sidebar/initialized', yb, g.BEHAVIOR_PERSISTENT);
            ib = new ga(eb);
            ib.subscribe('resized', nb);
            if (m.get('chat_sidebar_load_log')) {
                var fc = {
                    event: kb,
                    session_token: cc.session_token,
                    country_code: cc.viewer_country_code,
                    buddylist_short: m.get('buddylist_short_group'),
                    bootloader_retry: l.retry_on_timeout
                };
                lb.log('MessagesSidebarLoadLoggerConfig', fc);
            }
            aa.subscribe('CompensateForScrollbar', xb);
        },
        updateOnActiveTypeahead: function(zb, ac) {
            if (!ua)
                return;
            if (ac) {
                db.hide();
            } else {
                db.show();
                nb();
            }
        },
        isInitialized: function() {
            return wa;
        },
        disable: function() {
            if (!yb.isEnabled())
                return;
            sa = false;
            ub();
            mb();
        },
        enable: function() {
            if (yb.isEnabled())
                return;
            sa = true;
            ub();
            nb();
            setTimeout(ob, 0);
        },
        ensureLoaded: function() {
            if (!sa)
                return;
            if (xa)
                return;
            if (pa('pagelet_sidebar'))
                return;
            d(['UIPagelet'], function(zb) {
                var ac = u.create('div', {
                    id: 'pagelet_sidebar'
                });
                u.appendContent(document.body, ac);
                zb.loadFromEndpoint('SidebarPagelet', 'pagelet_sidebar');
            });
            xa = true;
        },
        hide: function() {
            if (ta)
                return;
            ta = true;
            mb();
        },
        unhide: function() {
            if (!ta)
                return;
            ta = false;
            nb();
        },
        getBody: function() {
            return qa;
        },
        getRoot: function() {
            return bb;
        },
        getVisibleWidth: function() {
            if ((!ua&&!va) ||!bb)
                return 0;
            if (hb === null) {
                hb = bb.offsetWidth;
                if (va)
                    hb = 206;
            }
            return hb;
        },
        isEnabled: function() {
            return sa;
        },
        isViewportCapable: function() {
            gb = v.getViewportWithoutScrollbarDimensions();
            var zb = m.get('sidebar.minimum_width');
            return gb.width > zb;
        },
        shouldShowSidebar: function() {
            var zb = yb.isViewportCapable();
            return zb&&!ta&&!vb();
        },
        isViewportCapableForMiniSidebar: function() {
            gb = v.getViewportWithoutScrollbarDimensions();
            var zb = m.get('sidebar.minimum_width'), ac = m.get('minisidebar.minimum_width');
            return gb.width > ac && gb.width <= zb;
        },
        shouldShowMiniSidebar: function() {
            if (!za)
                return false;
            var zb = yb.isViewportCapableForMiniSidebar();
            return zb&&!ta&&!vb();
        },
        isVisible: function() {
            return ua;
        },
        resize: nb,
        toggle: function() {
            yb.isEnabled() ? yb.disable() : yb.enable();
        }
    };
    ja(yb, h);
    e.exports = yb;
}, null);
__d("ChatTypeaheadBehavior", ["ChatOpenTab", "CSS", "Parent", "Rect", "copyProperties", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    function m(o, p) {
        var q = i.byClass(o, "_4oes");
        if (q)
            h.conditionClass(q, "_5q83", p);
    }
    function n(o) {
        "use strict";
        this._typeahead = o;
    }
    n.prototype.enable = function() {
        "use strict";
        var o = this._typeahead;
        this._subscriptions = [o.subscribe('focus', function() {
            o.getData().refreshData();
            m(o.getElement(), true);
        }), o.subscribe('blur', function(p) {
            o.getCore().reset();
            m(o.getElement(), false);
        }), o.subscribe('respond', function(p, q) {
            if (q.value && q.value === o.getCore().getValue()) {
                if (!q.results.length) {
                    var r = q.value.toLowerCase(), s = o.getData().getQueryCache();
                    if (!q.isAsync&&!s.hasOwnProperty(r))
                        return;
                    o.getView().showNoResults();
                }
                h.addClass(o.getElement(), 'hasValue');
            }
        }), o.subscribe('reset', function() {
            h.removeClass(o.getElement(), 'hasValue');
        }), o.subscribe('select', function(p, q) {
            var r = q.selected.uid;
            if (q.selected.mercury_thread&&!q.selected.mercury_thread.is_canonical)
                r = q.selected.mercury_thread.thread_fbid;
            o.getView().hide();
            g.openTabByType(r, q.selected.type, 'typeahead');
        }), o.subscribe('highlight', function(p, q) {
            if (q.index >= 0) {
                var r = o.getView().getItems()[q.index];
                if (r) {
                    var s = new j(r), t = r.offsetParent, u = s.boundWithin(new j(t)).getPositionVector();
                    s.getPositionVector().sub(u).scrollElementBy(t);
                }
            }
        })];
    };
    n.prototype.disable = function() {
        "use strict";
        this._subscriptions.forEach(function(o) {
            this._typeahead.unsubscribe(o);
        }, this);
        this._subscriptions = null;
    };
    k(n.prototype, {
        _subscriptions: null
    });
    e.exports = n;
}, null);
__d("getDOMImageSize", ["URI"], function(a, b, c, d, e, f, g) {
    function h(m) {
        m.onload = null;
        m.onerror = null;
        m.onreadystatechange = null;
        m._callback = null;
        m._thisObj = null;
        m._srcStr = null;
        m.parentNode && m.parentNode.removeChild(m);
    }
    function i() {
        var m = this;
        if (m._callback)
            m._callback.call(m._thisObj, m.naturalWidth || m.width, m.naturalHeight || m.height, m._srcStr);
        h(m);
    }
    function j() {
        var m = this;
        if (m.readyState === 'complete')
            i.call(m);
    }
    function k() {
        var m = this;
        if (m._callback)
            m._callback.call(m._thisObj, 0, 0, m._srcStr);
        h(m);
    }
    function l(m, n, o) {
        o = o || null;
        if (!m) {
            n.call(o, 0, 0, '');
            return;
        }
        var p = document.body;
        if (!p) {
            setTimeout(l.bind(this, m, n, o), 500);
            return;
        }
        var q;
        if (typeof m === 'string') {
            q = m;
        } else if (typeof m === 'object')
            if (typeof m.width === 'number' && typeof m.height === 'number') {
                if (typeof m.src === 'string') {
                    q = m.src;
                    if (m.naturalWidth && m.naturalHeight) {
                        n.call(o, m.naturalWidth, m.naturalHeight, q);
                        return;
                    }
                }
                if (typeof m.uri === 'string') {
                    q = m.uri;
                    if (m.width && m.height) {
                        n.call(o, m.width, m.height, q);
                        return;
                    }
                }
            } else if (m instanceof g)
                q = m.toString();
        if (!q) {
            n(0, 0, m);
            return;
        }
        var r = document.createElement('img');
        r.onreadystatechange = j;
        r.onload = i;
        r.onerror = k;
        r._callback = n;
        r._thisObj = o;
        r._srcStr = q;
        r.src = q;
        r.style.cssText = 'position:absolute;left:0;top:0;width:auto;height:auto;clip:rect(0 0 0 0);';
        p.insertBefore(r, p.firstChild);
    }
    e.exports = l;
}, null);
__d("CachedDOMImageSizePool", ["debounce", "getDOMImageSize"], function(a, b, c, d, e, f, g, h) {
    function i(j, k) {
        "use strict";
        this.$CachedDOMImageSizePool0 = {};
        this.$CachedDOMImageSizePool1 = k;
        this.$CachedDOMImageSizePool2 = 0;
        this.$CachedDOMImageSizePool3 = j;
        this.$CachedDOMImageSizePool4 = g(this.$CachedDOMImageSizePool5, 5000, this);
        this.$CachedDOMImageSizePool6 = {};
        this.$CachedDOMImageSizePool7 = {};
    }
    i.prototype.get = function(j, k, l) {
        "use strict";
        if (!j) {
            k.call(l, 0, 0, j);
            return;
        }
        var m = this.$CachedDOMImageSizePool0[j];
        if (m) {
            m.lastAccessTime = Date.now();
            k.call(l, m.width, m.height, m.src);
        } else if (this.$CachedDOMImageSizePool6[j]) {
            this.$CachedDOMImageSizePool6[j].push(k);
            this.$CachedDOMImageSizePool7[j].push(l);
        } else {
            this.$CachedDOMImageSizePool6[j] = [k];
            this.$CachedDOMImageSizePool7[j] = [l];
            h(j, this.$CachedDOMImageSizePool8, this);
        }
    };
    i.prototype.set = function(j, k, l) {
        "use strict";
        if (this.$CachedDOMImageSizePool2 > this.$CachedDOMImageSizePool3)
            this.$CachedDOMImageSizePool4();
        var m = this.$CachedDOMImageSizePool0;
        if (j&&!m[j]) {
            var n = {
                width: k,
                height: l,
                src: j,
                lastAccessTime: Date.now()
            };
            m[j] = n;
            this.$CachedDOMImageSizePool2++;
        }
    };
    i.prototype.$CachedDOMImageSizePool8 = function(j, k, l) {
        "use strict";
        this.set(l, j, k);
        var m = this.$CachedDOMImageSizePool6[l], n = this.$CachedDOMImageSizePool7[l];
        for (var o = 0, p = m.length; o < p; o++)
            m[o].call(n[o], j, k, l);
        delete this.$CachedDOMImageSizePool6[l];
        delete this.$CachedDOMImageSizePool7[l];
    };
    i.prototype.$CachedDOMImageSizePool5 = function() {
        "use strict";
        var j = Date.now(), k = this.$CachedDOMImageSizePool0, l = this.$CachedDOMImageSizePool2, m = this.$CachedDOMImageSizePool1;
        for (var n in k) {
            var o = k[n];
            if ((j - o.lastAccessTime) > m) {
                delete k[n];
                l--;
            }
        }
        this.$CachedDOMImageSizePool2 = l;
    };
    e.exports = i;
}, null);
__d("BackgroundImage.react", ["CachedDOMImageSizePool", "React", "ReactPropTypes", "XUISpinner.react", "cx", "invariant", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = '(-?(\\d+\\.)?\\d+(px|\\%))', o = new RegExp('^' + n + '?(\\s' + n + ')?$', 'g'), p = new g(50, 10 * 60 * 1000), q = h.createClass({
        displayName: "BackgroundImage",
        propTypes: {
            src: i.string,
            width: i.number.isRequired,
            height: i.number.isRequired,
            backgroundSize: i.oneOf(['contain', 'cover', 'containinside', 'coverinside']),
            loadingIndicatorStyle: i.oneOf(['none', 'large', 'small']),
            backgroundPosition: function(r, s, t) {
                var u = r[s];
                if (u) {
                    l(typeof u === 'string');
                    l(u.match(o));
                }
            },
            onImageLoad: i.func,
            optimizeResizeSpeed: i.bool,
            onContextMenu: i.func
        },
        getInitialState: function() {
            return {
                imageWidth: null,
                imageHeight: null,
                imageSrc: this.props.src,
                loading: true
            };
        },
        getDefaultProps: function() {
            return {
                optimizeResizeSpeed: false,
                loadingIndicatorStyle: 'none'
            };
        },
        componentDidMount: function() {
            this._resolveImageSize();
        },
        componentDidUpdate: function(r) {
            if (this.props.src !== this.state.imageSrc)
                this.setState({
                    imageWidth: 0,
                    imageHeight: 0,
                    imageSrc: this.props.src,
                    loading: true
                }, this._resolveImageSize);
        },
        _resolveImageSize: function() {
            var r = this.state.imageSrc;
            if (r)
                p.get(r, this._onImageSizeResolved, this);
        },
        render: function() {
            var r = {
                width: this.props.width + 'px',
                height: this.props.height + 'px'
            }, s = m(this.props.className, "_5f0d");
            return (h.createElement("div", h.__spread({}, this.props, {
                className: m(this.props.className, s),
                style: Object.assign({}, (this.props.style || {}), r),
                onContextMenu: this.props.onContextMenu
            }), this._renderImage(), this._renderContent(), this._renderLoadingIndicator()));
        },
        _renderLoadingIndicator: function() {
            if (!this.state.loading || this.props.loadingIndicatorStyle === 'none')
                return null;
            return (h.createElement("div", {
                className: "_1qe- _5lar"
            }, h.createElement("div", {
                className: "_1qe_"
            }, h.createElement("div", {
                className: "_1qf0"
            }, h.createElement(j, {
                size: this.props.loadingIndicatorStyle
            })))));
        },
        _renderContent: function() {
            if (this.props.children)
                return (h.createElement("div", {
                    className: "_1qe-"
                }, h.createElement("div", {
                    className: "_1qe_"
                }, h.createElement("div", {
                    className: "_1qf0"
                }, this.props.children))));
        },
        _renderImage: function() {
            if (!this.state.imageWidth ||!this.state.imageHeight)
                return;
            var r = this.props.width, s = this.props.height, t, u;
            switch (this.props.backgroundSize) {
            case 'cover':
                t = 'cover';
                u = false;
                break;
            case 'coverinside':
                t = 'cover';
                u = true;
                break;
            case 'contain':
                t = 'contain';
                u = false;
                break;
            case 'containinside':
                t = 'contain';
                u = true;
            }
            var v = this.state.imageWidth, w = this.state.imageHeight, x = r / s, y = v / w;
            if (t === 'contain')
                if ((v > r ||!u) && y >= x) {
                    v = r;
                    w = v / y;
                } else if (w > s ||!u) {
                    w = s;
                    v = w * y;
                }
            if (t === 'cover')
                if ((v > r ||!u) && y >= x) {
                    w = s;
                    v = w * y;
                } else if (w > s ||!u) {
                    v = r;
                    w = v / y;
                }
            var z = this._getImageStyle(v, w);
            return (h.createElement("img", {
                alt: "",
                className: (("_5i4g") + (this.props.optimizeResizeSpeed ? ' ' + "_5sjv" : '')),
                style: z,
                src: this.state.imageSrc
            }));
        },
        _getImageStyle: function(r, s) {
            var t;
            if (this.props.backgroundPosition) {
                t = this.props.backgroundPosition.split(' ');
            } else 
                t = ['50%', '50%'];
            return {
                width: Math.round(r) + 'px',
                height: Math.round(s) + 'px',
                left: this._getBackgroundPositionPxValue('left', t[0], r, s),
                top: this._getBackgroundPositionPxValue('top', t[1] || t[0], r, s)
            };
        },
        _getBackgroundPositionPxValue: function(r, s, t, u) {
            var v = parseFloat(s), w = s.substr(v.toString().length);
            if (w === 'px')
                return s;
            if (r === 'left') {
                return Math.round((this.props.width - t) * (v / 100)) + 'px';
            } else 
                return Math.round((this.props.height - u) * (v / 100)) + 'px';
        },
        _onImageSizeResolved: function(r, s, t) {
            if (!this.isMounted() || this.state.imageSrc !== t)
                return;
            var u = this.props.onImageLoad ? this.props.onImageLoad.bind(null, r, s): null;
            this.setState({
                imageWidth: r,
                imageHeight: s,
                loading: false
            }, u);
        }
    });
    e.exports = q;
}, null);
__d("SyncRequestTitle.react", ["React", "fbt", "cx"], function(a, b, c, d, e, f, g, h, i) {
    var j = g.createClass({
        displayName: "SyncRequestTitle",
        propTypes: {
            appName: g.PropTypes.string.isRequired,
            isSender: g.PropTypes.bool.isRequired,
            receiverName: g.PropTypes.string.isRequired,
            senderName: g.PropTypes.string.isRequired
        },
        render: function() {
            if (this.props.isSender) {
                return (g.createElement("div", null, h._("Waiting for {receiver} to accept your invite to play {app_name}.", [h.param("receiver", g.createElement("span", {
                    className: "_dg4"
                }, this.props.receiverName)), h.param("app_name", g.createElement("span", {
                    className: "_dg5"
                }, this.props.appName))])));
            } else 
                return (g.createElement("div", null, h._("{sender} wants to play {app_name} with you, right now.", [h.param("sender", g.createElement("span", {
                    className: "_dg4"
                }, this.props.senderName)), h.param("app_name", g.createElement("span", {
                    className: "_dg5"
                }, this.props.appName))])));
        }
    });
    e.exports = j;
}, null);
__d("SyncRequestAcceptedMessage.react", ["React", "fbt", "cx"], function(a, b, c, d, e, f, g, h, i) {
    var j = g.createClass({
        displayName: "SyncRequestAcceptedMessage",
        propTypes: {
            appName: g.PropTypes.string.isRequired,
            isSender: g.PropTypes.bool.isRequired,
            receiverName: g.PropTypes.string.isRequired,
            senderName: g.PropTypes.string.isRequired
        },
        render: function() {
            if (this.props.isSender) {
                return (g.createElement("div", null, h._("{receiver} accepted your invite to play {app_name}.", [h.param("receiver", g.createElement("span", {
                    className: "_dg4"
                }, this.props.receiverName)), h.param("app_name", g.createElement("span", {
                    className: "_dg5"
                }, this.props.appName))])));
            } else 
                return (g.createElement("div", null, h._("You accepted an invite from {sender} to play {app_name}.", [h.param("sender", g.createElement("span", {
                    className: "_dg4"
                }, this.props.senderName)), h.param("app_name", g.createElement("span", {
                    className: "_dg5"
                }, this.props.appName))])));
        }
    });
    e.exports = j;
}, null);
__d("SyncRequestRejectedMessage.react", ["React", "fbt", "Link.react", "cx", "URI", "AsyncRequest"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = g.createClass({
        displayName: "SyncRequestRejectedMessage",
        propTypes: {
            requestId: g.PropTypes.string.isRequired,
            app: g.PropTypes.object.isRequired,
            isSender: g.PropTypes.bool.isRequired,
            receiver: g.PropTypes.object.isRequired,
            sender: g.PropTypes.object.isRequired
        },
        render: function() {
            if (this.props.isSender) {
                return (g.createElement("div", null, h._("{receiver} declined your invite to play {app_name}.", [h.param("receiver", g.createElement("span", {
                    className: "_dg4"
                }, this.props.receiver.name)), h.param("app_name", g.createElement("span", {
                    className: "_dg5"
                }, this.props.app.name))])));
            } else 
                return (g.createElement("div", null, h._("You declined an invite from {sender} to play {app_name}.", [h.param("sender", g.createElement("span", {
                    className: "_dg4"
                }, this.props.sender.name)), h.param("app_name", g.createElement("span", {
                    className: "_dg5"
                }, this.props.app.name))]), g.createElement("div", {
                    className: "_13n7"
                }, g.createElement("div", null, g.createElement(i, {
                    onClick: this._submitBlockApp
                }, h._("Block {app}", [h.param("app", this.props.app.name)]))), g.createElement("div", null, g.createElement(i, {
                    onClick: this._submitBlockUser
                }, h._("Block requests from {sender}", [h.param("sender", this.props.sender.name)]))))));
        },
        _submitBlockApp: function() {
            var n = new k('/games/block_app/'), o = new l().setURI(n);
            o.setData({
                app_id: this.props.app.id,
                source: 'sync_request'
            });
            o.send();
        },
        _submitBlockUser: function() {
            var n = new k('/games/block_user/'), o = new l().setURI(n);
            o.setData({
                app_id: this.props.app.id,
                blockee_uid: this.props.sender.id
            });
            o.send();
        }
    });
    e.exports = m;
}, null);
__d("SyncRequestExpiredMessage.react", ["React", "fbt", "cx"], function(a, b, c, d, e, f, g, h, i) {
    var j = g.createClass({
        displayName: "SyncRequestExpiredMessage",
        propTypes: {
            appName: g.PropTypes.string.isRequired,
            isSender: g.PropTypes.bool.isRequired,
            receiverName: g.PropTypes.string.isRequired,
            senderName: g.PropTypes.string.isRequired
        },
        render: function() {
            if (this.props.isSender) {
                return (g.createElement("div", null, h._("{receiver} missed your invite to play {app_name}.", [h.param("receiver", g.createElement("span", {
                    className: "_dg4"
                }, this.props.receiverName)), h.param("app_name", g.createElement("span", {
                    className: "_dg5"
                }, this.props.appName))])));
            } else 
                return (g.createElement("div", null, h._("You missed an invite from {sender} to play {app_name}.", [h.param("sender", g.createElement("span", {
                    className: "_dg4"
                }, this.props.senderName)), h.param("app_name", g.createElement("span", {
                    className: "_dg5"
                }, this.props.appName))])));
        }
    });
    e.exports = j;
}, null);
__d("SyncRequestCanceledMessage.react", ["React", "fbt", "cx"], function(a, b, c, d, e, f, g, h, i) {
    var j = g.createClass({
        displayName: "SyncRequestCanceledMessage",
        propTypes: {
            appName: g.PropTypes.string.isRequired,
            isSender: g.PropTypes.bool.isRequired,
            receiverName: g.PropTypes.string.isRequired,
            senderName: g.PropTypes.string.isRequired
        },
        render: function() {
            if (this.props.isSender) {
                return (g.createElement("div", null, h._("You canceled an invite to {receiver} to play {app_name}.", [h.param("receiver", g.createElement("span", {
                    className: "_dg4"
                }, this.props.receiverName)), h.param("app_name", g.createElement("span", {
                    className: "_dg5"
                }, this.props.appName))])));
            } else 
                return (g.createElement("div", null, h._("{sender} canceled an invitation to play {app_name}.", [h.param("sender", g.createElement("span", {
                    className: "_dg4"
                }, this.props.senderName)), h.param("app_name", g.createElement("span", {
                    className: "_dg5"
                }, this.props.appName))])));
        }
    });
    e.exports = j;
}, null);
__d("SyncRequestTimer.react", ["React", "fbt"], function(a, b, c, d, e, f, g, h) {
    function i(k) {
        if (k) {
            k = Math.ceil(k);
            var l = k%60;
            if (l < 10)
                l = '0' + l;
            var m = Math.floor(k / 60);
            return m + ':' + l;
        } else 
            return "0:00";
    }
    var j = g.createClass({
        displayName: "SyncRequestTimer",
        propTypes: {
            timeRemaining: g.PropTypes.number.isRequired,
            isSender: g.PropTypes.bool.isRequired,
            receiverName: g.PropTypes.string.isRequired
        },
        render: function() {
            if (this.props.isSender) {
                return (g.createElement("div", null, h._("({time_remaining} remaining)", [h.param("time_remaining", i(this.props.timeRemaining))])));
            } else 
                return (g.createElement("div", null, h._("You have {time_remaining} to accept.", [h.param("time_remaining", i(this.props.timeRemaining))])));
        }
    });
    e.exports = j;
}, null);
__d("XSyncRequestSubmitControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/platform\/games\/sync_requests\/submit\/", {
        request_id: {
            type: "Int",
            required: true
        },
        sender: {
            type: "Int",
            required: true
        },
        action: {
            type: "Int",
            required: true
        }
    });
}, null);
__d("SyncRequest.react", ["Arbiter", "AsyncRequest", "ChannelConstants", "React", "SyncRequestStatusEnum", "SyncRequestTitle.react", "SyncRequestAcceptedMessage.react", "SyncRequestRejectedMessage.react", "SyncRequestExpiredMessage.react", "SyncRequestCanceledMessage.react", "SyncRequestTimer.react", "XUIButton.react", "XSyncRequestSubmitControllerURIBuilder", "cx", "fbt", "getObjectValues"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
    var w = j.createClass({
        displayName: "SyncRequest",
        propTypes: {
            app: j.PropTypes.object.isRequired,
            creationTime: j.PropTypes.number.isRequired,
            requestId: j.PropTypes.string.isRequired,
            receiver: j.PropTypes.object.isRequired,
            sender: j.PropTypes.object.isRequired,
            status: j.PropTypes.oneOf(v(k)).isRequired,
            timeout: j.PropTypes.number.isRequired,
            timeRemaining: j.PropTypes.number.isRequired,
            viewerId: j.PropTypes.number.isRequired,
            onStatusUpdate: j.PropTypes.func
        },
        componentWillMount: function() {
            if (this.props.status === k.PENDING) {
                var x = g.subscribe(i.getArbiterType('sync_request_updated'), function(aa, ba) {
                    ba = ba.obj;
                    if (ba.id.toString() !== this.props.requestId)
                        return;
                    this.setState({
                        status: ba.status
                    });
                }.bind(this));
                this.setState({
                    statusEvent: x
                });
            }
            var y = null;
            if (this.props.status === k.PENDING) {
                var z = function() {
                    this.setState({
                        time_remaining: (this.state.time_remaining - 1)
                    });
                    if (this.state.time_remaining <= 0) {
                        clearInterval(this.state.counter);
                        var aa = {
                            counter: null,
                            time_remaining: 0
                        };
                        if (this.state.status === k.PENDING)
                            aa.status = k.EXPIRED;
                        this.setState(aa);
                    }
                };
                y = setInterval(z.bind(this), 1000);
            }
            this.setState({
                time_remaining: this.props.timeRemaining,
                counter: y
            });
        },
        componentWillUnmount: function() {
            if (this.state.counter)
                clearInterval(this.state.counter);
            g.unsubscribe(this.state.statusEvent);
        },
        getInitialState: function() {
            return {
                buttonsDisabled: false,
                time: Date.now(),
                status: this.props.status,
                viewerIsSender: this.props.viewerId === this.props.sender.id
            };
        },
        componentDidUpdate: function(x, y) {
            if (this.props.status != k.PENDING)
                this.state.status = this.props.status;
            if (this.props.onStatusUpdate)
                this.props.onStatusUpdate(this.state.status, y.status);
        },
        render: function() {
            var x;
            switch (this.state.status) {
            case k.PENDING:
                var y;
                if (!this.state.viewerIsSender) {
                    y = [j.createElement(r, {
                        use: "confirm",
                        onClick: this._handleAccept,
                        disabled: this.state.buttonsDisabled,
                        label: "Accept"
                    }), j.createElement(r, {
                        use: "default",
                        onClick: this._handleReject,
                        disabled: this.state.buttonsDisabled,
                        label: "Decline"
                    })];
                } else 
                    y = j.createElement(r, {
                        use: "default",
                        onClick: this._handleCancel,
                        disabled: this.state.buttonsDisabled,
                        label: "Cancel"
                    });
                x = (j.createElement("div", null, j.createElement("div", {
                    className: "_372m"
                }, j.createElement(l, {
                    appName: this.props.app.name,
                    isSender: this.state.viewerIsSender,
                    receiverName: this.props.receiver.name,
                    senderName: this.props.sender.name
                })), j.createElement("div", {
                    className: "_372n"
                }, j.createElement(q, {
                    isSender: this.state.viewerIsSender,
                    timeRemaining: this.state.time_remaining,
                    receiverName: this.props.receiver.name
                })), j.createElement("div", {
                    className: "_372o"
                }, y)));
                break;
            case k.ACCEPTED:
                x = j.createElement("div", {
                    className: "_372p mvs"
                }, j.createElement(m, {
                    appName: this.props.app.name,
                    isSender: this.state.viewerIsSender,
                    receiverName: this.props.receiver.name,
                    senderName: this.props.sender.name
                }));
                break;
            case k.REJECTED:
                x = j.createElement("div", {
                    className: "_372p mvs"
                }, j.createElement(n, {
                    requestId: this.props.requestId,
                    app: this.props.app,
                    isSender: this.state.viewerIsSender,
                    receiver: this.props.receiver,
                    sender: this.props.sender
                }));
                break;
            case k.EXPIRED:
                x = j.createElement("div", {
                    className: "_372p mvs"
                }, j.createElement(o, {
                    appName: this.props.app.name,
                    isSender: this.state.viewerIsSender,
                    receiverName: this.props.receiver.name,
                    senderName: this.props.sender.name
                }));
                break;
            case k.CANCELED:
                x = j.createElement("div", {
                    className: "_372p mvs"
                }, j.createElement(p, {
                    appName: this.props.app.name,
                    isSender: this.state.viewerIsSender,
                    receiverName: this.props.receiver.name,
                    senderName: this.props.sender.name
                }));
                break;
            default:
                throw new Error('The request status `%s` is unknown.', this.state.status);
            }
            return (j.createElement("div", {
                className: "_372q"
            }, x));
        },
        _handleAccept: function() {
            this._handleStatusUpdate(k.ACCEPTED);
            var x = window.open(this.props.app.uri);
            if (x)
                x.focus();
        },
        _handleReject: function() {
            this._handleStatusUpdate(k.REJECTED);
        },
        _handleCancel: function() {
            this._handleStatusUpdate(k.CANCELED);
        },
        _handleStatusUpdate: function(x) {
            this.setState({
                status: x,
                buttonsDisabled: true
            });
            var y = new s().setInt('request_id', this.props.requestId).setInt('sender', this.props.sender.id).setInt('action', x).getURI();
            new h().setURI(y).setHandler(function(z) {
                this.setState({
                    status: x
                });
            }.bind(this)).setErrorHandler(function(z) {
                this.setState({
                    buttonsDisabled: false
                });
            }.bind(this)).send();
        }
    });
    e.exports = w;
}, null);
__d("AbstractDialog.react", ["DialogX", "LayerHideOnBlur", "ReactPropTypes", "copyProperties", "merge"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = {
        createSpec: function(m) {
            return {
                displayName: m.displayName,
                propTypes: {
                    behaviors: i.object,
                    className: i.string,
                    modal: i.bool,
                    autohide: i.number,
                    width: i.number,
                    titleID: i.string,
                    causalElement: i.object,
                    causalElementRef: i.string,
                    shown: i.bool,
                    layerHideOnBlur: i.bool,
                    fixedTopPosition: i.number
                },
                createLayer: function(n) {
                    var o = this.props.className, p = j({
                        width: this.props.width,
                        xui: true,
                        autohide: this.props.autohide,
                        classNames: o ? o.split(' '): null,
                        titleID: this.props.titleID,
                        causalElement: this._getCausalElement(),
                        fixedTopPosition: this.props.fixedTopPosition
                    }, m || {}), q = k(m.addedBehaviors, this.props.behaviors);
                    if (this.props.layerHideOnBlur !== false)
                        q.LayerHideOnBlur = h;
                    p.addedBehaviors = this.enumerateBehaviors(q);
                    var r = new g(p, n);
                    r.conditionShow(this.props.shown);
                    return r;
                },
                receiveProps: function(n) {
                    this.updateBehaviors(n.behaviors);
                    if (this.layer) {
                        this.layer.setCausalElement(this._getCausalElement());
                        this.layer.conditionShow(n.shown);
                        this.layer.setWidth(n.width);
                        n.shown && this.layer.updatePosition();
                    }
                },
                _getCausalElement: function() {
                    var n;
                    if (this.props.causalElementRef) {
                        n = this.getNodeForOwnerRef(this.props.causalElementRef);
                    } else 
                        n = this.props.causalElement;
                    return n;
                }
            };
        }
    };
    e.exports = l;
}, null);
__d("ContextualLayer.react", ["ContextualLayer", "React", "ReactLayer", "Style"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = h.PropTypes, l = i.createClass({
        propTypes: {
            contextRef: k.string,
            context: function(m, n, o) {
                if ((m.context == null) == (m.contextRef == null))
                    return new Error(("Exactly one of `context` or `contextRef` must be set on `") + (o + "`."));
                var p = m[n];
                if (p != null) {
                    if (typeof p !== 'object')
                        return new Error(("Invalid `" + n + "` supplied to `" + o + "`, ") + ("expected a React component."));
                    if (h.isValidElement(p))
                        return new Error(("Invalid `" + n + "` supplied to `" + o + "`, ") + ("expected a React component instance. You're passing a React ") + ("descriptor."));
                }
            }
        },
        immutableProps: {
            modal: null
        },
        createLayer: function(m) {
            var n = this._getContextNode(), o = {
                context: n,
                contextBounds: this.props.contextBounds,
                position: this.props.position,
                alignment: this.props.alignment,
                offsetX: this.props.offsetX,
                offsetY: this.props.offsetY,
                addedBehaviors: this.enumerateBehaviors(this.props.behaviors),
                shouldSetARIAProperties: this.props.shouldSetARIAProperties
            }, p = new g(o, m);
            this._node = m;
            this._matchContextSize(this.props);
            if (this.props.contextBounds)
                p.setContextWithBounds(n, this.props.contextBounds);
            p.conditionShow(this.props.shown);
            return p;
        },
        receiveProps: function(m) {
            this.updateBehaviors(m.behaviors);
            var n = this._getContextNode();
            if (m.contextBounds) {
                this.layer.setContextWithBounds(n, m.contextBounds);
            } else 
                this.layer.setContext(n);
            this._matchContextSize(m);
            this.layer.setPosition(m.position);
            this.layer.setAlignment(m.alignment);
            this.layer.setOffsetX(m.offsetX);
            this.layer.setOffsetY(m.offsetY);
            this.layer.conditionShow(m.shown);
        },
        _getContextNode: function() {
            var m;
            if (this.props.context) {
                m = this.props.context.getDOMNode();
            } else if (this.props.contextRef)
                m = this.getNodeForOwnerRef(this.props.contextRef);
            return m;
        },
        _matchContextSize: function(m) {
            var n = this._node, o = this._getContextNode();
            if (m.containerWidthMatchContext)
                j.set(n, 'width', o.offsetWidth + 'px');
            if (m.containerHeightMatchContext)
                j.set(n, 'height', o.offsetHeight + 'px');
        }
    });
    e.exports = l;
}, null);
__d("AbstractTextFieldMixin.react", ["React", "Keys", "cx", "invariant", "joinClasses", "cloneWithProps"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = {
        propTypes: {
            value: g.PropTypes.string,
            placeholder: g.PropTypes.string,
            tabIndex: g.PropTypes.string,
            maxLength: g.PropTypes.number,
            autoComplete: g.PropTypes.string,
            onBackspace: g.PropTypes.func,
            onBackTab: g.PropTypes.func,
            onBlur: g.PropTypes.func,
            onChange: g.PropTypes.func,
            onDownArrow: g.PropTypes.func,
            onEnter: g.PropTypes.func,
            onEscape: g.PropTypes.func,
            onFocus: g.PropTypes.func,
            onKeyDown: g.PropTypes.func,
            onLeftArrow: g.PropTypes.func,
            onNoShiftEnter: g.PropTypes.func,
            onRightArrow: g.PropTypes.func,
            onShiftEnter: g.PropTypes.func,
            onShiftDownArrow: g.PropTypes.func,
            onShiftUpArrow: g.PropTypes.func,
            onTab: g.PropTypes.func,
            onUpArrow: g.PropTypes.func,
            type: g.PropTypes.string,
            autoCapitalize: g.PropTypes.string,
            autoCorrect: g.PropTypes.string
        },
        getInitialState: function() {
            return {
                focused: false,
                value: this.props.defaultValue || ''
            };
        },
        getValue: function() {
            return this.props.value != null ? this.props.value : this.state.value;
        },
        onInputKeyDown: function(n) {
            var o = this.props, p = n.keyCode, q = n.shiftKey;
            if (p === h.BACKSPACE&&!q && o.onBackspace) {
                o.onBackspace(n);
            } else if (p === h.TAB&&!q && o.onTab) {
                o.onTab(n);
            } else if (p === h.TAB && q && o.onBackTab) {
                o.onBackTab(n);
            } else if (p === h.UP) {
                if (q) {
                    if (o.onShiftUpArrow)
                        o.onShiftUpArrowAttempt(n);
                } else if (o.onUpArrow)
                    o.onUpArrow(n);
            } else if (p === h.DOWN && o.onDownArrow) {
                if (q) {
                    if (o.onShiftDownArrow)
                        o.onShiftDownArrow(n);
                } else if (o.onDownArrow)
                    o.onDownArrow(n);
            } else if (p === h.LEFT && o.onLeftArrow) {
                o.onLeftArrow(n);
            } else if (p === h.RIGHT && o.onRightArrow) {
                o.onRightArrow(n);
            } else if (p === h.RETURN) {
                if (o.onEnter)
                    o.onEnter(n);
                if (q) {
                    if (o.onShiftEnter)
                        o.onShiftEnter(n);
                } else if (o.onNoShiftEnter)
                    o.onNoShiftEnter(n);
            } else if (p === h.ESC && o.onEscape)
                o.onEscape(n);
            if (o.onKeyDown)
                o.onKeyDown(n);
        },
        onInputChange: function(n) {
            if (this.props.onChange)
                this.props.onChange(n);
            if (this.props.value == null)
                this.setState({
                    value: n.target.value
                });
        },
        focusInput: function() {
            this.getTextFieldDOM().focus();
        },
        blurInput: function() {
            this.getTextFieldDOM().blur();
        },
        onInputBlur: function(event) {
            if (this.props.onBlur)
                this.props.onBlur(event);
            if (!event.isDefaultPrevented())
                this.setState({
                    focused: false
                });
        },
        onInputFocus: function(event) {
            if (this.props.onFocus)
                this.props.onFocus(event);
            if (!event.isDefaultPrevented())
                this.setState({
                    focused: true
                });
        },
        getTextFieldDOM: function() {
            return this.refs[this.getTextFieldRef()].getDOMNode();
        },
        getTextFieldRef: function() {
            return 'textField';
        },
        setTextFieldPropsOn: function(n) {
            return l(n, {
                'aria-activedescendant': this.props['aria-activedescendant'],
                'aria-autocomplete': this.props['aria-autocomplete'],
                'aria-owns': this.props['aria-owns'],
                'data-testid': this.props['data-testid'],
                ref: this.getTextFieldRef(),
                role: this.props.role,
                autoCapitalize: this.props.autoCapitalize,
                autoComplete: this.props.autoComplete,
                autoCorrect: this.props.autoCorrect,
                onKeyDown: this.onInputKeyDown,
                onBlur: this.onInputBlur,
                onFocus: this.onInputFocus,
                onChange: this.onInputChange,
                disabled: this.props.disabled,
                defaultValue: this.props.defaultValue,
                name: this.props.name,
                value: this.getValue(),
                id: this.props.id,
                maxLength: this.props.maxLength,
                min: this.props.min,
                max: this.props.max,
                title: this.props.title,
                type: this.props.type || n.props.type
            });
        },
        render: function() {
            var n = null;
            if (!this.getValue()) {
                var o = (("_58ai") + (this.state.focused ? ' ' + "_58aj" : ''));
                n = g.createElement("span", {
                    className: o
                }, this.props.placeholder);
            }
            var p = k(this.props.className, "_58ak");
            j(this.renderTextField);
            return (g.createElement("label", {
                className: p
            }, {
                placeholder: n,
                textField: this.renderTextField()
            }));
        }
    };
    e.exports = m;
}, null);
__d("AbstractTextInput.react", ["AbstractTextFieldMixin.react", "React", "cx"], function(a, b, c, d, e, f, g, h, i) {
    var j = h.createClass({
        displayName: "AbstractTextInput",
        mixins: [g],
        renderTextField: function() {
            return this.setTextFieldPropsOn(h.createElement("input", {
                type: "text",
                className: "_58al",
                size: this.props.size,
                tabIndex: this.props.tabIndex,
                onClick: this.props.onClick,
                onKeyUp: this.props.onKeyUp,
                onPaste: this.props.onPaste
            }));
        }
    });
    e.exports = j;
}, null);
__d("SearchableTextInput.react", ["EventListener", "React", "AbstractTextFieldMixin.react", "AbstractTextInput.react", "getActiveElement", "merge"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = h.createClass({
        displayName: "SearchableTextInput",
        propTypes: l(i.propTypes, {
            queryString: h.PropTypes.string,
            searchSource: h.PropTypes.object,
            searchSourceOptions: h.PropTypes.object,
            onEntriesFound: h.PropTypes.func.isRequired,
            searchOnFocus: h.PropTypes.bool,
            searchOnUpdate: h.PropTypes.bool,
            onPaste: h.PropTypes.func,
            onFocus: h.PropTypes.func,
            onChange: h.PropTypes.func
        }),
        componentDidMount: function() {
            if (this.props.onPaste)
                this._listener = g.listen(this.refs.input.getTextFieldDOM(), 'paste', this.props.onPaste);
        },
        componentWillReceiveProps: function(n) {},
        componentDidUpdate: function(n) {
            if (this.props.searchOnUpdate)
                if (n.queryString !== this.props.queryString)
                    this.search(this.props.queryString);
        },
        componentWillUnmount: function() {
            if (this._listener) {
                this._listener.remove();
                this._listener = null;
            }
        },
        _onInputFocus: function() {
            this.props.searchSource.bootstrap(function() {
                if (this.props.searchOnFocus)
                    this.search(this.props.queryString);
            }.bind(this));
            this.props.onFocus && this.props.onFocus();
        },
        _onSearchCallback: function(n, o) {
            if (this.props.queryString === o)
                this.props.onEntriesFound(n);
        },
        _onChange: function(event) {
            this.props.onChange && this.props.onChange(event);
            var n = event.target.value;
            setTimeout(function() {
                this.search(n);
            }.bind(this));
        },
        search: function(n) {
            this.props.searchSource.search(n, this._onSearchCallback, this.props.searchSourceOptions);
        },
        focusInput: function() {
            var n = this.getTextFieldDOM();
            if (k() === n) {
                this._onInputFocus();
            } else 
                n.offsetHeight && n.focus();
        },
        blurInput: function() {
            var n = this.getTextFieldDOM();
            n.offsetHeight && n.blur();
        },
        getTextFieldDOM: function() {
            return this.refs.input.getTextFieldDOM();
        },
        render: function() {
            var n = this.props.queryString || '';
            return (h.createElement(j, h.__spread({}, this.props, {
                "aria-label": n,
                onChange: this._onChange,
                onFocus: this._onInputFocus,
                ref: "input",
                role: "combobox",
                value: n
            })));
        }
    });
    e.exports = m;
}, null);
__d("TypeaheadView.react", ["React", "cx", "merge"], function(a, b, c, d, e, f, g, h, i) {
    var j = g.createClass({
        displayName: "TypeaheadView",
        propTypes: {
            entries: g.PropTypes.array.isRequired,
            extraRendererProps: g.PropTypes.object,
            highlightedEntry: g.PropTypes.object,
            isVisible: g.PropTypes.bool,
            queryString: g.PropTypes.string,
            Renderer: g.PropTypes.func.isRequired,
            selectedEntry: g.PropTypes.object
        },
        _onSelect: function(k, l) {
            if (this.props.onSelect)
                this.props.onSelect(k, l);
        },
        _onHighlight: function(k) {
            this.props.onHighlight(k);
        },
        render: function() {
            var k = ((!this.props.isVisible ? "hidden_elem" : '')), l = i({
                highlightedEntry: this.props.highlightedEntry,
                selectedEntry: this.props.selectedEntry,
                entries: this.props.entries,
                onSelect: this._onSelect,
                onHighlight: this._onHighlight,
                onRenderHighlight: this.props.onRenderHighlight,
                ariaOwneeID: this.props.ariaOwneeID,
                queryString: this.props.queryString
            }, this.props.extraRendererProps), m = this.props.Renderer;
            return (g.createElement("div", {
                className: k
            }, g.createElement(m, g.__spread({}, l))));
        }
    });
    e.exports = j;
}, null);
__d("AbstractTypeahead.react", ["AbstractTextFieldMixin.react", "ContextualLayer.react", "InputSelection", "React", "ReactLayeredComponentMixin", "SearchableTextInput.react", "TypeaheadNavigation", "TypeaheadView.react", "cx", "getOrCreateDOMID", "joinClasses", "merge", "uniqueID"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
    var t = [], u = 10, v = j.createClass({
        displayName: "AbstractTypeahead",
        mixins: [k],
        propTypes: r(g.propTypes, {
            inputClassName: j.PropTypes.string,
            inputID: j.PropTypes.string,
            autoCapitalize: j.PropTypes.string,
            autoComplete: j.PropTypes.string,
            autoCorrect: j.PropTypes.string,
            queryString: j.PropTypes.string,
            searchSource: j.PropTypes.object.isRequired,
            searchSourceOptions: j.PropTypes.object,
            excludedEntries: j.PropTypes.object,
            presenter: j.PropTypes.object.isRequired,
            onSelectAttempt: j.PropTypes.func,
            onEntriesFound: j.PropTypes.func,
            onEnterWithoutSelection: j.PropTypes.func,
            autoHighlight: j.PropTypes.bool,
            showEntriesOnFocus: j.PropTypes.bool,
            selectOnBlur: j.PropTypes.bool,
            selectOnTab: j.PropTypes.bool,
            focusedOnInit: j.PropTypes.bool,
            hideViewWithEntries: j.PropTypes.bool,
            disabled: j.PropTypes.bool,
            entriesWidthMatchContext: j.PropTypes.bool,
            selectedEntry: j.PropTypes.object,
            onTypeaheadVisibilityChanged: j.PropTypes.func,
            onPaste: j.PropTypes.func
        }),
        getDefaultProps: function() {
            return {
                autoComplete: 'off',
                autoCorrect: 'off',
                selectOnBlur: false,
                selectOnTab: true,
                hideViewWithEntries: true,
                entriesWidthMatchContext: true
            };
        },
        getInitialState: function() {
            return {
                highlightedEntry: null,
                isAutoHighlight: this.props.autoHighlight,
                activeDescendant: null,
                ariaOwneeID: s(),
                activeEntries: null,
                focused: !!this.props.focusedOnInit,
                viewIsVisible: !!this.props.focusedOnInit
            };
        },
        _onRenderHighlight: function(w) {
            var x = p(w);
            this.setState({
                activeDescendant: x
            });
        },
        _determineViewVisibility: function(w, x) {
            if (!w)
                return false;
            var y = w.length > 0 && (this.props.showEntriesOnFocus || this.props.queryString.length > 0);
            return !!(x && (this.props.presenter.alwaysVisibleOnFocus || y));
        },
        _onEntriesFound: function(w) {
            if (!this.isMounted())
                return;
            if (this.props.excludedEntries) {
                var x = this.props.excludedEntries;
                w = w.filter(function(fa) {
                    return !x.hasOwnProperty(fa.getUniqueID());
                });
            }
            var y = this.props.presenter, z = typeof y.sortEntries == 'function' ? y.sortEntries(w): w, aa = z.slice(0, y.maxEntries || u), ba = this._determineViewVisibility(aa, this.state.focused);
            if (!aa.length) {
                this.setState({
                    activeDescendant: null,
                    activeEntries: aa,
                    highlightedEntry: null,
                    isAutoHighlight: this.props.autoHighlight
                });
                this._setViewIsVisible(ba);
                return;
            }
            if (this.props.onEntriesFound)
                this.props.onEntriesFound(aa);
            var ca = this.state.highlightedEntry, da = ca && aa.indexOf(ca)!==-1;
            if (!this.props.autoHighlight) {
                this.setState({
                    activeEntries: aa,
                    highlightedEntry: da ? ca: null
                });
                if (ba)
                    this._setViewIsVisible(true);
                return;
            }
            var ea = this.state.isAutoHighlight;
            if (ea) {
                ca = aa[0];
            } else {
                ca = da ? ca : aa[0];
                ea=!da;
            }
            this.setState({
                activeEntries: aa,
                highlightedEntry: ca,
                isAutoHighlight: ea
            });
            if (ba)
                this._setViewIsVisible(true);
        },
        _onInputFocus: function() {
            var w = this._determineViewVisibility(this.state.activeEntries, true);
            if (w)
                this._setViewIsVisible(true);
            this.setState({
                focused: true
            });
            this.props.onFocus && this.props.onFocus();
        },
        _onInputBlur: function() {
            if (this.props.hideViewWithEntries)
                this._close();
            if (this.props.selectOnBlur && this.state.highlightedEntry)
                this.props.onSelectAttempt(this.state.highlightedEntry);
            this.setState({
                focused: false
            });
            this.props.onBlur && this.props.onBlur();
        },
        _onInputClick: function() {
            var w = this.getTextFieldDOM(), x = i.get(w);
            if (x && x.start == x.end)
                w.select();
            this.props.onClick && this.props.onClick();
        },
        _onEscape: function() {
            this._close();
            this.blurInput();
            this.setState({
                focused: false
            });
            this.props.onEscape && this.props.onEscape();
        },
        _onEnter: function(event) {
            if (this.props.onEnterWithoutSelection && (!this.state.viewIsVisible ||!this.state.highlightedEntry)) {
                this.props.onEnterWithoutSelection(event);
                return;
            }
            if (!this.state.viewIsVisible)
                return;
            if (!this.state.highlightedEntry) {
                event.preventDefault();
                return;
            }
            if (this.props.hideViewWithEntries)
                this._close();
            if (this.props.onSelectAttempt)
                this.props.onSelectAttempt(this.state.highlightedEntry);
            event.preventDefault();
        },
        _onTab: function(event) {
            if (this.props.selectOnTab && this.state.viewIsVisible && this.props.onSelectAttempt && this.state.highlightedEntry) {
                if (this.props.hideViewWithEntries) {
                    this._close();
                    event.preventDefault();
                }
                this.props.onSelectAttempt(this.state.highlightedEntry);
            }
        },
        _onDownArrow: function(event) {
            event.preventDefault();
            m.moveDown(this.state.activeEntries || t, this.state.highlightedEntry, this._setHighlight);
        },
        _onUpArrow: function(event) {
            event.preventDefault();
            m.moveUp(this.state.activeEntries || t, this.state.highlightedEntry, this._setHighlight);
        },
        _setHighlight: function(w) {
            this.setState({
                highlightedEntry: w,
                isAutoHighlight: !w
            });
        },
        _onInputChange: function(event) {
            if (this.props.onChange)
                this.props.onChange(event);
            this._setViewIsVisible(this.state.focused && (this.props.showEntriesOnFocus || event.target.value.length > 0) && (this.state.activeEntries != null && this.state.activeEntries.length > 0));
        },
        _onViewHighlight: function(w) {
            this.setState({
                highlightedEntry: w,
                isAutoHighlight: false
            });
        },
        _getView: function() {
            return (j.createElement(n, {
                Renderer: this.props.presenter.ViewRenderer,
                extraRendererProps: this.props.presenter.extraRendererProps,
                highlightedEntry: this.state.highlightedEntry,
                selectedEntry: this.props.selectedEntry,
                isVisible: this.state.viewIsVisible,
                ariaOwneeID: this.state.ariaOwneeID,
                onHighlight: this._onViewHighlight,
                onRenderHighlight: this._onRenderHighlight,
                onSelect: this.props.onSelectAttempt,
                entries: this.state.activeEntries || t,
                queryString: this.props.queryString
            }));
        },
        _setViewIsVisible: function(w) {
            if (w !== this.state.viewIsVisible) {
                if (this.props.onTypeaheadVisibilityChanged)
                    this.props.onTypeaheadVisibilityChanged(w, this.state.activeEntries || t);
                this.setState({
                    viewIsVisible: w
                });
            }
        },
        componentWillReceiveProps: function(w) {
            if (!w.queryString&&!this.props.showEntriesOnFocus)
                this.clearActiveEntries();
        },
        componentDidUpdate: function() {
            var w = this._determineViewVisibility(this.state.activeEntries, this.state.focused);
            if (w)
                this._setViewIsVisible(true);
        },
        renderLayers: function() {
            if (!this.props.presenter.useLayer)
                return {};
            var w = null, x = null;
            if (this.props.context) {
                w = this.props.context;
            } else 
                x = 'input';
            return {
                typeaheadView: j.createElement(h, {
                    behaviors: this.props.presenter.layerBehaviors,
                    containerWidthMatchContext: this.props.entriesWidthMatchContext,
                    contextRef: x,
                    context: w,
                    position: "below",
                    shown: this.state.viewIsVisible,
                    shouldSetARIAProperties: false
                }, this._getView())
            };
        },
        render: function() {
            var w = j.createElement(l, {
                "aria-activedescendant": this.state.activeDescendant,
                "aria-autocomplete": "list",
                "aria-owns": this.state.ariaOwneeID,
                ref: "input",
                autoCapitalize: this.props.autoCapitalize,
                autoComplete: this.props.autoComplete,
                autoCorrect: this.props.autoCorrect,
                className: this.props.inputClassName,
                id: this.props.inputID,
                queryString: this.props.queryString,
                placeholder: this.props.placeholder,
                searchSource: this.props.searchSource,
                searchSourceOptions: this.props.searchSourceOptions,
                searchOnFocus: !!this.props.showEntriesOnFocus,
                disabled: this.props.disabled,
                onEntriesFound: this._onEntriesFound,
                onEscape: this._onEscape,
                onBlur: this._onInputBlur,
                onFocus: this._onInputFocus,
                onChange: this._onInputChange,
                onDownArrow: this._onDownArrow,
                onUpArrow: this._onUpArrow,
                onTab: this._onTab,
                onEnter: this._onEnter,
                onBackspace: this.props.onBackspace,
                onPaste: this.props.onPaste,
                onClick: this._onInputClick
            }), x = null;
            if (!this.props.presenter.useLayer)
                x = this._getView();
            return (j.createElement("span", j.__spread({}, this.props, {
                className: q(this.props.className, "_58ah"),
                onBlur: null,
                onClick: null,
                onFocus: null
            }), {
                searchableInput: w,
                view: x
            }));
        },
        componentDidMount: function() {
            if (this.props.focusedOnInit)
                this.refs.input.focusInput();
        },
        clearActiveEntries: function() {
            this.setState({
                activeDescendant: null,
                activeEntries: null,
                highlightedEntry: null
            });
        },
        focusInput: function() {
            this.refs.input.focusInput();
        },
        blurInput: function() {
            if (this.refs.input.blur) {
                this.refs.input.blur();
            } else if (this.refs.input.blurInput)
                this.refs.input.blurInput();
        },
        hideView: function() {
            this._setViewIsVisible(false);
        },
        _close: function() {
            this._setViewIsVisible(false);
            this.clearActiveEntries();
        },
        getTextFieldDOM: function() {
            return this.refs.input.getTextFieldDOM();
        }
    });
    e.exports = v;
}, null);
__d("XUIBadge.react", ["React", "cx", "invariant", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j) {
    function k(m) {
        return parseInt(m, 10) === m;
    }
    var l = g.createClass({
        displayName: "XUIBadge",
        propTypes: {
            type: g.PropTypes.oneOf(['regular', 'special']),
            count: g.PropTypes.number.isRequired,
            maxcount: g.PropTypes.number
        },
        getDefaultProps: function() {
            return {
                type: 'regular',
                maxcount: 20
            };
        },
        render: function() {
            var m = this.props.type, n = this.props.count, o = this.props.maxcount;
            i(k(n));
            i(k(o));
            var p = (("_5ugh") + (n > o ? ' ' + "_5ugi" : '') + (m === 'regular' ? ' ' + "_5ugf" : '') + (m === 'special' ? ' ' + "_5ugg" : '') + (n === 0 ? ' ' + "hidden_elem" : ''));
            return (g.createElement("span", g.__spread({}, this.props, {
                className: j(this.props.className, p),
                type: null
            }), n > o ? o + '+' : n));
        }
    });
    e.exports = l;
}, null);
__d("XUIDialog.react", ["AbstractDialog.react", "LayerFadeOnShow", "ReactLayer"], function(a, b, c, d, e, f, g, h, i) {
    var j = i.createClass(g.createSpec({
        displayName: 'XUIDialog',
        addedBehaviors: {
            LayerFadeOnShow: h
        }
    }));
    e.exports = j;
}, null);
__d("filterObject", [], function(a, b, c, d, e, f) {
    'use strict';
    var g = Object.prototype.hasOwnProperty;
    function h(i, j, k) {
        if (!i)
            return null;
        var l = {};
        for (var m in i)
            if (g.call(i, m) && j.call(k, i[m], m, i))
                l[m] = i[m];
        return l;
    }
    e.exports = h;
}, null);
__d("XUIError", ["ARIA", "Bootloader", "CSS", "DataStore", "DOM", "Event", "JSXDOM", "Parent", "Promise", "cx", "filterObject", "getActiveElement", "getElementText", "invariant", "isNode", "memoize", "merge"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w) {
    'use strict';
    var x = 'data-xui-error-alignh', y = 'XUIError', z = 'data-xui-error', aa = "_1tp7", ba = 'data-xui-error-position';
    l.listen(document.documentElement, 'mouseover', function(event) {
        if (n.byClass(r(), aa))
            return;
        var pa = n.byClass(event.getTarget(), aa);
        if (pa) {
            la(pa);
        } else 
            ma();
    });
    l.listen(document.documentElement, 'focusin', function(event) {
        var pa = n.byClass(event.getTarget(), aa);
        if (pa) {
            la(pa);
        } else 
            ma();
    });
    l.listen(document.documentElement, 'focusout', function(event) {
        ma();
    });
    var ca = v(function() {
        return new o(function(pa, qa) {
            h.loadModules(["ContextualDialog", "ContextualLayerAutoFlip", "LayerRefocusOnHide", "React"], function(ra, sa, ta, ua) {
                var va = {
                    ContextualDialog: ra,
                    ContextualLayerAutoFlip: sa,
                    LayerRefocusOnHide: ta,
                    React: ua
                };
                pa(w(va, da(va)));
            });
        });
    });
    function da(pa) {
        var qa = pa.ContextualDialog, ra = pa.ContextualLayerAutoFlip, sa = pa.LayerRefocusOnHide, ta = m.div({
            className: "_1tp8"
        }), ua = (m.div({
            className: "_53ij _1tp9"
        }, m.div({
            className: "_1tpa"
        }), ta)), va = new qa({
            addedBehaviors: [ra],
            theme: {
                wrapperClassName: "_1tpb",
                arrowDimensions: {
                    offset: 12,
                    length: 16
                }
            }
        }, ua);
        va.disableBehavior(sa);
        va.shouldSetARIAProperties(false);
        return {
            dialog: va,
            dialogBodyNode: ua,
            dialogMessageNode: ta
        };
    }
    var ea = null;
    function fa(pa) {
        return w({
            message: pa.getAttribute(z),
            position: pa.getAttribute(ba),
            alignh: pa.getAttribute(x)
        }, j.get(pa, y));
    }
    function ga(pa, qa) {
        j.set(pa, y, qa);
    }
    function ha(pa, qa) {
        j.set(pa, y, w(j.get(pa, y), qa));
    }
    function ia(pa) {
        j.remove(pa, y);
    }
    var ja = false, ka = false;
    function la(pa) {
        ca().done(function(qa) {
            var ra = qa.React, sa = qa.dialog, ta = qa.dialogMessageNode, ua = fa(pa), va = ua.message, wa = ra.isValidElement(va);
            if (ja&&!wa)
                ra.unmountComponentAtNode(ta);
            if (wa) {
                ra.render(va, ta);
            } else {
                t(typeof va === 'string' || u(va));
                k.setContent(ta, va);
            }
            ja = wa;
            sa.setContext(pa).setPosition(ua.position || 'right').setAlignment(ua.alignh || (ua.position === 'above' || ua.position === 'below' ? 'right' : null)).show();
            g.notify(s(ta));
            ea = pa;
        });
        ka = true;
    }
    function ma() {
        if (!ka)
            return;
        ca().done(function(pa) {
            var qa = pa.React, ra = pa.dialog, sa = pa.dialogMessageNode;
            if (!ea)
                return;
            if (ja) {
                qa.unmountComponentAtNode(sa);
                ja = false;
            }
            ra.hide();
            ea = null;
        });
    }
    function na(pa) {
        if (k.contains(pa, r()))
            la(pa);
    }
    var oa = {
        set: function(pa) {
            var qa = pa.target, ra = pa.message, sa = pa.position, ta = pa.alignh;
            t(ra !== null);
            i.addClass(qa, aa);
            ha(qa, q({
                message: ra,
                position: sa,
                alignh: ta
            }, function(ua) {
                return ua !== undefined;
            }));
            na(qa);
        },
        clear: function(pa) {
            i.removeClass(pa, aa);
            pa.removeAttribute(z);
            ia(pa);
            if (pa === ea)
                ma();
        },
        updatePosition: function() {
            if (!ka)
                return;
            ca().done(function(pa) {
                var qa = pa.dialog;
                if (ea)
                    qa.updatePosition();
            });
        },
        __setReactError: function(pa, qa) {
            var ra = qa.message, sa = qa.position, ta = qa.alignh;
            t(ra !== null);
            ga(pa, {
                message: ra,
                position: sa,
                alignh: ta
            });
            na(pa);
        },
        __clearReactError: function(pa) {
            ia(pa);
            if (pa === ea)
                ma();
        }
    };
    e.exports = oa;
}, null);
__d("XUIError.react", ["React", "ReactElement", "XUIError", "cx", "joinClasses", "merge", "onlyChild"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    'use strict';
    var n = "_1tp7", o = g.createClass({
        displayName: "ReactXUIError",
        componentDidMount: function() {
            if (this.props.message != null)
                i.__setReactError(this.getDOMNode(), {
                    message: this.props.message,
                    position: this.props.position,
                    alignh: this.props.alignh
                });
        },
        componentDidUpdate: function() {
            if (this.props.message == null) {
                i.__clearReactError(this.getDOMNode());
            } else 
                i.__setReactError(this.getDOMNode(), {
                    message: this.props.message,
                    position: this.props.position,
                    alignh: this.props.alignh
                });
        },
        componentWillUnmount: function() {
            i.__clearReactError(this.getDOMNode());
        },
        render: function() {
            var p = m(this.props.children);
            if (this.props.message != null)
                p = h.cloneAndReplaceProps(p, l(p.props, {
                    className: k(p.props.className, n)
                }));
            return p;
        }
    });
    e.exports = o;
}, null);
__d("XUITextInput.react", ["AbstractTextInput.react", "React", "XUIError.react", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = h.createClass({
        displayName: "XUITextInput",
        render: function() {
            var m = (("_55r1") + (this.props.height == 'tall' ? ' ' + "_55r2" : '')), n = this.props, o = n.className, p = n.xuiError, q = n.xuiErrorPosition, r = n.xuiErrorAlignh, s = (function(u, v) {
                var w = {}, x = Object.prototype.hasOwnProperty;
                if (u == null)
                    throw new TypeError();
                for (var y in u)
                    if (x.call(u, y)&&!x.call(v, y))
                        w[y] = u[y];
                return w;
            })(n, {
                className: 1,
                xuiError: 1,
                xuiErrorPosition: 1,
                xuiErrorAlignh: 1
            }), t = (h.createElement(g, h.__spread({}, s, {
                ref: "textInput",
                className: k(o, m)
            })));
            return (h.createElement(i, {
                message: p,
                position: q,
                alignh: r
            }, t));
        },
        focusInput: function() {
            this.refs.textInput.focusInput();
        }
    });
    e.exports = l;
}, null);
__d("WebMessengerEvents", ["Arbiter", "copyProperties"], function(a, b, c, d, e, f, g, h) {
    var i = h(new g(), {
        MASTER_DOM_CHANGED: 'master-dom-changed',
        DETAIL_DOM_CHANGED: 'detail-dom-changed',
        FOCUS_COMPOSER: 'focus-composer',
        FOCUS_SEARCH: 'focus-search',
        FOCUS_AND_SELECT_SEARCH: 'focus-and-select-search',
        STICKER_CLICKED: 'sticker-clicked',
        SUBMIT_REPLY: 'submit-reply',
        UPDATE_SELECTION: 'update-selection',
        masterDOMChanged: function() {
            this.inform(i.MASTER_DOM_CHANGED);
        },
        detailDOMChanged: function() {
            this.inform(i.DETAIL_DOM_CHANGED);
        },
        focusComposer: function() {
            this.inform(i.FOCUS_COMPOSER);
        },
        focusSearch: function() {
            this.inform(i.FOCUS_SEARCH);
        },
        focusAndSelectSearch: function() {
            this.inform(i.FOCUS_AND_SELECT_SEARCH);
        },
        updateSelection: function(j) {
            this.inform(i.UPDATE_SELECTION, j);
        },
        stickerClicked: function(j, k) {
            this.inform(i.STICKER_CLICKED, {
                packID: j,
                stickerID: k
            });
        },
        submitReply: function() {
            this.inform(i.SUBMIT_REPLY);
        }
    });
    e.exports = i;
}, null);
__d("WebMessengerSubscriptionsHandler", ["SubscriptionsHandler"], function(a, b, c, d, e, f, g) {
    var h = new g('webmessenger');
    e.exports = h;
}, null);
__d("isWebMessengerURI", [], function(a, b, c, d, e, f) {
    function g(h) {
        return (/^(\/messages)/).test(h.getPath());
    }
    e.exports = g;
}, null);
__d("WebMessengerWidthControl", ["Arbiter", "CSS", "CSSClassTransition", "DOM", "DOMDimensions", "Event", "Style", "URI", "ViewportBounds", "WebMessengerEvents", "WebMessengerSubscriptionsHandler", "$", "cx", "csx", "isWebMessengerURI", "requestAnimationFrame", "setTimeoutAcrossTransitions", "shield", "throttle"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
    var z = 205, aa = 981, ba = 257, ca = 18, da = 848, ea = 724, fa = .57, ga = 56, ha, ia, ja;
    function ka(pa, qa, ra) {
        this.masterChanged = pa;
        this.detailChaned = qa;
        q.addSubscriptions(l.listen(window, 'resize', y(x(la, this, this), 100)), g.subscribe(['sidebar/initialized', 'sidebar/show', 'sidebar/hide', 'minisidebar/show'], x(la, this, this), g.SUBSCRIBE_NEW));
        var sa = oa() ? ga: 0;
        if (ra)
            sa = z;
        this._width = oa() ? 0 : da;
        ja = true;
        la(this, sa);
    }
    function la(pa, qa) {
        var ra = o.getRight() + o.getLeft();
        ra = ra || qa || 0;
        var sa = k.getViewportWithoutScrollbarDimensions().width - ra, ta = Math.round(Math.max(0, sa / 2 - aa / 2));
        sa = aa + ta - ba;
        sa -= ca;
        sa = Math.max(ea, Math.min(da, sa));
        if (!isNaN(sa) && pa._width !== sa) {
            pa._width = sa;
            var ua = Math.round(sa / (1 + fa)), va = sa - ua;
            pa.masterChanged(va);
            pa.detailChaned(ua);
            if (oa()) {
                var wa = sa + ba;
                ma(function() {
                    if (ia) {
                        document.body.className = ia;
                        ia = '';
                    }
                    na(wa + 'px');
                    h.removeClass(document.body, "_5uj5");
                    ja && p.detailDOMChanged();
                    ja = false;
                }, ia);
            }
        }
    }
    function ma(pa, qa) {
        qa && h.addClass(document.documentElement, "_5uj6");
        v(pa);
        qa && w(h.removeClass.bind(null, document.documentElement, "_5uj6"), 1000);
    }
    function na(pa) {
        m.set(j.find(document, "div._uaw"), 'width', pa);
        m.set(r('globalContainer'), 'width', pa);
    }
    function oa() {
        if (!ha)
            ha = h.hasClass(document.body, "_6nw");
        return ha;
    }
    i.registerHandler(function(pa, qa, ra, sa) {
        function ta(ua) {
            return oa() && u(n(ua));
        }
        if (ta(sa)) {
            ia = qa;
            return true;
        } else if (ta(ra)) {
            ma(function() {
                pa.className = qa;
                na('');
            }, true);
            return true;
        }
    });
    e.exports = ka;
}, null);
__d("Dock", ["Event", "shield", "Arbiter", "ArbiterMixin", "ChatQuietLinks", "CSS", "DataStore", "DOM", "Parent", "Style", "Toggler", "Vector", "copyProperties", "csx", "emptyFunction", "WebMessengerWidthControl"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
    b('WebMessengerWidthControl');
    function v() {}
    s(v, j, {
        MIN_HEIGHT: 140,
        INITIAL_FLYOUT_HEIGHT_OFFSET: 10,
        init: function(w) {
            this.init = u;
            this.rootEl = w;
            this.calculateViewportDimensions();
            this.calculateFlyoutHeightOffset();
            k.removeEmptyHrefs(this.rootEl);
            g.listen(w, 'click', this._onClick.bind(this));
            g.listen(window, 'resize', this._onWindowResize.bind(this));
            q.subscribe(['show', 'hide'], function(x, y) {
                var z = y.getActive();
                if (!n.contains(w, z))
                    return;
                if (l.hasClass(z, 'fbNub')) {
                    this.notifyNub(z, x);
                    if (x === 'show')
                        this._resizeNubFlyout(z);
                } else {
                    var aa = o.byClass(z, 'fbNubFlyout');
                    if (aa)
                        l.conditionClass(aa, 'menuOpened', x === 'show');
                }
            }.bind(this));
            this.inform('init', {}, i.BEHAVIOR_PERSISTENT);
        },
        calculateViewportDimensions: function() {
            return (this.viewportDimensions = r.getViewportDimensions());
        },
        calculateFlyoutHeightOffset: function() {
            this.flyoutHeightOffset = this.INITIAL_FLYOUT_HEIGHT_OFFSET + r.getElementDimensions(this.rootEl).y;
            var w = n.scry(document, "div._4f7n")[0];
            if (w) {
                var x = p.isFixed(w) ? 'viewport': 'document';
                this.flyoutHeightOffset += r.getElementPosition(w, x).y + r.getElementDimensions(w).y;
            }
        },
        toggle: function(w) {
            var x = this._findFlyout(w);
            if (!x)
                return;
            this.subscribe('init', function() {
                q.toggle(w);
            });
        },
        show: function(w) {
            this.subscribe('init', function() {
                q.show(w);
            });
        },
        showNub: function(w) {
            l.show(w);
        },
        hide: function(w) {
            this.subscribe('init', function() {
                var x = q.getInstance(w);
                n.contains(w, x.getActive()) && x.hide();
            });
        },
        hideNub: function(w) {
            l.hide(w);
            this.hide(w);
        },
        setUseMaxHeight: function(w, x) {
            l.conditionClass(w, 'maxHeight', x !== false);
            this._resizeNubFlyout(w);
        },
        _resizeNubFlyout: function(w) {
            var x = this._findFlyout(w);
            if (!x ||!(l.hasClass(w, 'openToggler') || l.hasClass(w, 'opened')))
                return;
            var y = n.find(x, 'div.fbNubFlyoutOuter'), z = n.find(y, 'div.fbNubFlyoutInner'), aa = n.find(z, 'div.fbNubFlyoutBody'), ba = aa.scrollTop, ca = aa.offsetHeight;
            p.set(aa, 'height', 'auto');
            var da = r.getElementDimensions(x), ea = r.getElementDimensions(aa), fa = this.getMaxFlyoutHeight(w);
            p.set(x, 'max-height', fa + 'px');
            p.set(y, 'max-height', fa + 'px');
            da = r.getElementDimensions(x);
            var ga = r.getElementDimensions(z), ha = ga.y - ea.y, ia = da.y - ha, ja = parseInt(aa.style.height || aa.clientHeight, 10), ka = ia !== ja;
            if (da.y > ha && ka)
                p.set(aa, 'height', ia + 'px');
            l.removeClass(x, 'swapDirection');
            var la = r.getElementPosition(x).x;
            l.conditionClass(x, 'swapDirection', function() {
                if (la < 0)
                    return true;
                return (la + da.x > this.viewportDimensions.x);
            }.bind(this)());
            if (ka && ba + ca >= ea.y) {
                aa.scrollTop = aa.scrollHeight;
            } else 
                aa.scrollTop = ba;
            this.notifyNub(w, 'resize');
        },
        getMaxFlyoutHeight: function(w) {
            var x = this._findFlyout(w), y = r.getElementPosition(x, 'viewport'), z = r.getElementDimensions(x), aa = Math.max(this.MIN_HEIGHT, this.viewportDimensions.y - this.flyoutHeightOffset) - (this.viewportDimensions.y - y.y - z.y);
            return Math.max(aa, 0);
        },
        resizeAllFlyouts: function() {
            var w = this._getAllNubs(), x = w.length;
            while (x--)
                this._resizeNubFlyout(w[x]);
        },
        hideAllFlyouts: function() {
            var w = this._getAllNubs(), x = w.length;
            while (x--)
                this.hide(w[x]);
        },
        _getAllNubs: function() {
            var w = n.scry(this.rootEl, "div._50-v.openToggler");
            return w.concat(n.scry(this.rootEl, "div._50-v.opened"));
        },
        _onClick: function(event) {
            var w = event.getTarget(), x = o.byClass(w, 'fbNub');
            if (x) {
                if (o.byClass(w, 'fbNubFlyoutTitlebar')) {
                    var y = o.byTag(w, 'a'), z = w.nodeName == 'INPUT' && w.getAttribute('type') == 'submit';
                    if (!y&&!z) {
                        this.hide(x);
                        return false;
                    }
                }
                this.notifyNub(x, 'click');
            }
        },
        _onWindowResize: function(event) {
            this.calculateViewportDimensions();
            this.resizeAllFlyouts();
        },
        _findFlyout: function(w) {
            return l.hasClass(w, 'fbNubFlyout') ? w : n.scry(w, 'div.fbNubFlyout')[0] || null;
        },
        registerNubController: function(w, x) {
            m.set(w, 'dock:nub:controller', x);
            x.subscribe('nub/button/content-changed', h(this.inform, this, 'resize', w));
            x.subscribe('nub/flyout/content-changed', h(this._resizeNubFlyout, this, w));
        },
        unregisterNubController: function(w) {
            m.remove(w, 'dock:nub:controller');
        },
        notifyNub: function(w, x, y) {
            var z = m.get(w, 'dock:nub:controller');
            z && z.inform(x, y);
        }
    });
    e.exports = a.Dock || v;
}, null);
__d("BlobFactory", ["emptyFunction"], function(a, b, c, d, e, f, g) {
    var h, i = a.BlobBuilder || a.WebKitBlobBuilder || a.MozBlobBuilder || a.MSBlobBuilder;
    if (a.Blob) {
        var j;
        try {
            new a.Blob();
            j = true;
        } catch (k) {
            j = false;
        }
        h = {
            getBlob: function(l, m) {
                l = l || [];
                m = m || {};
                if (j) {
                    return new a.Blob(l, m);
                } else {
                    var n = new i();
                    for (var o = 0; o < l.length; o++)
                        n.append(l[o]);
                    return n.getBlob(m.type);
                }
            },
            isSupported: g.thatReturnsTrue
        };
    } else 
        h = {
            getBlob: function() {},
            isSupported: g.thatReturnsFalse
        };
    e.exports = h;
}, null);
__d("arraySort", ["invariant"], function(a, b, c, d, e, f, g) {
    function h(i, j) {
        g(Array.isArray(i));
        var k = i.slice();
        if (j)
            return k.sort(j);
        return k.sort();
    }
    e.exports = h;
}, null);
__d("Grid.react", ["React", "cx", "flattenChildren", "getObjectValues", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = g.PropTypes, m = g.createClass({
        displayName: "Grid",
        propTypes: {
            cols: l.number.isRequired,
            fixed: l.bool,
            alignv: l.oneOf(['top', 'middle', 'bottom']),
            alignh: l.oneOf(['left', 'center', 'right']),
            spacing: l.string
        },
        render: function() {
            var p = j(i(this.props.children)), q = p.length, r = [], s = [], t = 0;
            p.forEach(function(u, v) {
                if (u.type !== n.type)
                    u = g.createElement(n, null, u);
                u.props.alignv = u.props.alignv || this.props.alignv;
                u.props.alignh = u.props.alignh || this.props.alignh;
                if (this.props.spacing)
                    o(u, this.props.spacing);
                s.push(u);
                t += Math.max(u.props.colSpan || 0, 1);
                if (t%this.props.cols === 0 || v + 1 === q) {
                    if (this.props.fixed && t < this.props.cols) {
                        for (var w = t; w < this.props.cols; w++)
                            s.push(g.createElement(n, null));
                        t = this.props.cols;
                    }
                    if (t === this.props.cols)
                        o(s[s.length - 1], "_51mw");
                    r.push(g.createElement("tr", {
                        className: "_51mx",
                        key: v
                    }, s));
                    s = [];
                    t = 0;
                }
            }, this);
            return (g.createElement("table", g.__spread({}, this.props, {
                className: k(this.props.className, (("uiGrid") + (' ' + "_51mz") + (this.props.fixed ? ' ' + "_5f0n" : ''))),
                cellSpacing: "0",
                cellPadding: "0"
            }), g.createElement("tbody", null, r)));
        }
    }), n = g.createClass({
        displayName: "GridItem",
        propTypes: {
            alignv: l.oneOf(['top', 'middle', 'bottom']),
            alignh: l.oneOf(['left', 'center', 'right'])
        },
        render: function() {
            var p = k(this.props.className, (("_51m-") + (this.props.alignv === 'top' ? ' ' + "vTop" : '') + (this.props.alignv === 'middle' ? ' ' + "vMid" : '') + (this.props.alignv === 'bottom' ? ' ' + "vBot" : '') + (this.props.alignh === 'left' ? ' ' + "hLeft" : '') + (this.props.alignh === 'center' ? ' ' + "hCent" : '') + (this.props.alignh === 'right' ? ' ' + "hRght" : '')));
            return (g.createElement("td", g.__spread({}, this.props, {
                className: p
            })));
        }
    }), o = function(p, q) {
        p.props.className = k(p.props.className, q);
    };
    m.GridItem = n;
    e.exports = m;
}, null);
__d("OrderedMap", ["Object.assign", "invariant"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = 'key:';
    function j(q, r) {
        var s = {};
        for (var t = 0; t < q.length; t++) {
            var u = q[t], v = r(u);
            l(v);
            var w = i + v;
            h(!(w in s));
            s[w] = u;
        }
        return s;
    }
    function k(q, r) {
        this._normalizedObj = q;
        this._computedPositions = null;
        this.length = r;
    }
    function l(q) {
        h(q !== '' && (typeof q === 'string' || typeof q === 'number'));
    }
    function m(q, r, s) {
        h(typeof q === 'number' && typeof r === 'number' && r >= 0 && q >= 0 && q + r <= s);
    }
    function n(q, r) {
        h(q && q.constructor === Object && (!r || r.constructor === Object));
        var s = {}, t = 0, u;
        for (u in q)
            if (q.hasOwnProperty(u)) {
                s[u] = q[u];
                t++;
            }
        for (u in r)
            if (r.hasOwnProperty(u)) {
                if (!(u in s))
                    t++;
                    s[u] = r[u];
            }
        return new k(s, t);
    }
    var o = {
        has: function(q) {
            l(q);
            var r = i + q;
            return r in this._normalizedObj;
        },
        get: function(q) {
            l(q);
            var r = i + q;
            return this.has(q) ? this._normalizedObj[r] : undefined;
        },
        merge: function(q) {
            h(q instanceof k);
            return n(this._normalizedObj, q._normalizedObj);
        },
        map: function(q, r) {
            return this.mapRange(q, 0, this.length, r);
        },
        mapRange: function(q, r, s, t) {
            var u = this._normalizedObj, v = {}, w = 0;
            m(r, s, this.length);
            var x = r + s - 1;
            for (var y in u)
                if (u.hasOwnProperty(y)) {
                    if (w >= r) {
                        if (w > x)
                            break;
                            var z = u[y];
                            v[y] = q.call(t, z, y.substr(i.length), w);
                    }
                    w++;
                }
            return new k(v, s);
        },
        filter: function(q, r) {
            return this.filterRange(q, 0, this.length, r);
        },
        filterRange: function(q, r, s, t) {
            var u = {}, v = 0;
            this.forEachRange(function(w, x, y) {
                if (q.call(t, w, x, y)) {
                    var z = i + x;
                    u[z] = w;
                    v++;
                }
            }, r, s);
            return new k(u, v);
        },
        forEach: function(q, r) {
            this.forEachRange(q, 0, this.length, r);
        },
        forEachRange: function(q, r, s, t) {
            m(r, s, this.length);
            var u = this._normalizedObj, v = 0, w = r + s - 1;
            for (var x in u)
                if (u.hasOwnProperty(x)) {
                    if (v >= r) {
                        if (v > w)
                            break;
                            var y = u[x];
                            q.call(t, y, x.substr(i.length), v);
                    }
                    v++;
                }
        },
        mapKeyRange: function(q, r, s, t) {
            var u = this.indexOfKey(r), v = this.indexOfKey(s);
            h(u !== undefined && v !== undefined);
            h(v >= u);
            return this.mapRange(q, u, (v - u) + 1, t);
        },
        forEachKeyRange: function(q, r, s, t) {
            var u = this.indexOfKey(r), v = this.indexOfKey(s);
            h(u !== undefined && v !== undefined);
            h(v >= u);
            this.forEachRange(q, u, (v - u) + 1, t);
        },
        keyAtIndex: function(q) {
            var r = this._getOrComputePositions(), s = r.keyByIndex[q];
            return s ? s.substr(i.length) : undefined;
        },
        keyAfter: function(q) {
            return this.nthKeyAfter(q, 1);
        },
        keyBefore: function(q) {
            return this.nthKeyBefore(q, 1);
        },
        nthKeyAfter: function(q, r) {
            var s = this.indexOfKey(q);
            h(s !== undefined);
            return this.keyAtIndex(s + r);
        },
        nthKeyBefore: function(q, r) {
            return this.nthKeyAfter(q, - r);
        },
        indexOfKey: function(q) {
            l(q);
            var r = i + q, s = this._getOrComputePositions(), t = s.indexByKey[r];
            return t === undefined ? undefined : t;
        },
        toArray: function() {
            var q = [], r = this._normalizedObj;
            for (var s in r)
                if (r.hasOwnProperty(s))
                    q.push(r[s]);
            return q;
        },
        _getOrComputePositions: function() {
            var q = this._computedPositions;
            if (!q)
                this._computePositions();
            return this._computedPositions;
        },
        _computePositions: function() {
            this._computedPositions = {
                keyByIndex: {},
                indexByKey: {}
            };
            var q = this._computedPositions.keyByIndex, r = this._computedPositions.indexByKey, s = 0, t = this._normalizedObj;
            for (var u in t)
                if (t.hasOwnProperty(u)) {
                    q[s] = u;
                    r[u] = s;
                    s++;
                }
        }
    };
    g(k.prototype, o);
    var p = {
        from: function(q) {
            h(q instanceof k);
            return n(q._normalizedObj, null);
        },
        fromArray: function(q, r) {
            h(Array.isArray(q));
            h(typeof r === 'function');
            return new k(j(q, r), q.length);
        }
    };
    e.exports = p;
}, null);
__d("xhrSimpleDataSerializer", [], function(a, b, c, d, e, f) {
    function g(h) {
        var i = [], j;
        for (j in h)
            i.push(encodeURIComponent(j) + '=' + encodeURIComponent(h[j]));
        return i.join('&');
    }
    e.exports = g;
}, null);
__d("AbstractSearchSource", ["Deferred", "emptyFunction"], function(a, b, c, d, e, f, g, h) {
    function i() {}
    var j = {
        bootstrap: function(k) {
            k = k || h;
            if (this._bootstrapped) {
                k();
                return;
            }
            if (this._bootstrapDeferred)
                return this._bootstrapDeferred.addCallback(k);
            this._bootstrapDeferred = new g();
            this._bootstrapDeferred.addCallback(k);
            this.bootstrapImpl(function() {
                this._bootstrapped = true;
                this._bootstrapDeferred.succeed();
                this._bootstrapDeferred = null;
            }.bind(this));
            return this._bootstrapDeferred;
        },
        search: function(k, l, m) {
            this.searchImpl(k, l, m);
        },
        bootstrapImpl: function(k) {
            k();
        },
        searchImpl: function(k, l, m) {
            throw new Error('Abstract method #searchImpl is not implemented.');
        }
    };
    Object.assign(i.prototype, j);
    i.Mixin = j;
    e.exports = i;
}, null);
__d("SearchSourceCallbackManager", ["createObjectFrom", "invariant"], function(a, b, c, d, e, f, g, h) {
    function i(k) {
        "use strict";
        this.$SearchSourceCallbackManager0 = k.parseFn;
        h(typeof this.$SearchSourceCallbackManager0 === 'function');
        this.$SearchSourceCallbackManager1 = k.matchFn;
        h(typeof this.$SearchSourceCallbackManager1 === 'function');
        this.$SearchSourceCallbackManager2 = k.alwaysPrefixMatch || false;
        this.$SearchSourceCallbackManager3 = k.indexFn || j;
        this.reset();
    }
    i.prototype.search = function(k, l, m) {
        "use strict";
        var n = this.$SearchSourceCallbackManager4(k, l, m);
        if (n)
            return 0;
        this.$SearchSourceCallbackManager5.push({
            queryString: k,
            callback: l,
            options: m
        });
        var o = this.$SearchSourceCallbackManager5.length - 1;
        this.$SearchSourceCallbackManager6.push(o);
        return o;
    };
    i.prototype.$SearchSourceCallbackManager4 = function(k, l, m) {
        "use strict";
        var n = this.$SearchSourceCallbackManager7(k), o=!!this.$SearchSourceCallbackManager8[k];
        if (!n.length) {
            l([], k);
            return o;
        }
        var p = n.map(function(q) {
            return this.$SearchSourceCallbackManager9[q];
        }, this);
        l(p, k);
        return o;
    };
    i.prototype.$SearchSourceCallbackManagera = function() {
        "use strict";
        var k = this.$SearchSourceCallbackManager6;
        this.$SearchSourceCallbackManager6 = [];
        k.forEach(this.$SearchSourceCallbackManagerb, this);
    };
    i.prototype.$SearchSourceCallbackManagerb = function(k) {
        "use strict";
        var l = this.$SearchSourceCallbackManager5[k];
        if (!l)
            return;
        var m = this.$SearchSourceCallbackManager4(l.queryString, l.callback, l.options);
        if (m) {
            delete this.$SearchSourceCallbackManager5[k];
            return;
        }
        this.$SearchSourceCallbackManager6.push(k);
    };
    i.prototype.reset = function() {
        "use strict";
        this.$SearchSourceCallbackManager9 = {};
        this.$SearchSourceCallbackManagerc = {};
        this.$SearchSourceCallbackManagerd = {};
        this.$SearchSourceCallbackManagere = {};
        this.$SearchSourceCallbackManager8 = {};
        this.$SearchSourceCallbackManager6 = [];
        this.$SearchSourceCallbackManager5 = [undefined];
    };
    i.prototype.addLocalEntries = function(k) {
        "use strict";
        k.forEach(function(l) {
            var m = l.getUniqueID(), n = this.$SearchSourceCallbackManager3(l);
            this.$SearchSourceCallbackManager9[m] = l;
            this.$SearchSourceCallbackManagerc[m] = n;
            var o = this.$SearchSourceCallbackManager0(n);
            o.tokens.forEach(function(p) {
                if (!this.$SearchSourceCallbackManagerd.hasOwnProperty(p))
                    this.$SearchSourceCallbackManagerd[p] = {};
                this.$SearchSourceCallbackManagerd[p][m] = true;
            }, this);
        }, this);
        this.$SearchSourceCallbackManagera();
    };
    i.prototype.addQueryEntries = function(k, l) {
        "use strict";
        var m = this.$SearchSourceCallbackManager7(l), n = this.$SearchSourceCallbackManager0(l).flatValue;
        this.$SearchSourceCallbackManagere[n] = g(m, true);
        k.forEach(function(o) {
            var p = o.getUniqueID();
            this.$SearchSourceCallbackManager9[p] = o;
            this.$SearchSourceCallbackManagerc[p] = this.$SearchSourceCallbackManager3(o);
            this.$SearchSourceCallbackManagere[n][p] = true;
        }, this);
        this.$SearchSourceCallbackManagera();
    };
    i.prototype.unsubscribe = function(k) {
        "use strict";
        delete this.$SearchSourceCallbackManager5[k];
    };
    i.prototype.removeEntry = function(k) {
        "use strict";
        delete this.$SearchSourceCallbackManager9[k];
    };
    i.prototype.getAllEntriesMap = function() {
        "use strict";
        return this.$SearchSourceCallbackManager9;
    };
    i.prototype.setQueryStringAsExhausted = function(k) {
        "use strict";
        this.$SearchSourceCallbackManager8[k] = true;
    };
    i.prototype.unsetQueryStringAsExhausted = function(k) {
        "use strict";
        delete this.$SearchSourceCallbackManager8[k];
    };
    i.prototype.$SearchSourceCallbackManager7 = function(k) {
        "use strict";
        var l = this.$SearchSourceCallbackManagerf(k, this.$SearchSourceCallbackManagerg(k)), m = this.$SearchSourceCallbackManagerf(k, this.$SearchSourceCallbackManagerh(k)), n = l.concat(m), o = {}, p = [];
        n.forEach(function(q) {
            if (!o[q] && this.$SearchSourceCallbackManager9[q] !== undefined) {
                p.push(q);
                o[q] = true;
            }
        }, this);
        return p;
    };
    i.prototype.$SearchSourceCallbackManagerf = function(k, l) {
        "use strict";
        var m = this.$SearchSourceCallbackManageri(k, l), n = this.$SearchSourceCallbackManager9;
        function o(p, q) {
            if (m[p] !== m[q])
                return m[p]?-1 : 1;
            var r = n[p], s = n[q];
            if (r.getOrder() !== s.getOrder())
                return r.getOrder() - s.getOrder();
            var t = r.getTitle().length, u = s.getTitle().length;
            if (t !== u)
                return t - u;
            return r.getUniqueID() - s.getUniqueID();
        }
        return l.sort(o).slice();
    };
    i.prototype.$SearchSourceCallbackManageri = function(k, l) {
        "use strict";
        var m = {};
        l.forEach(function(n) {
            m[n] = this.$SearchSourceCallbackManager1(k, this.$SearchSourceCallbackManagerc[n]);
        }, this);
        return m;
    };
    i.prototype.$SearchSourceCallbackManagerg = function(k) {
        "use strict";
        var l = this.$SearchSourceCallbackManager0(k, this.$SearchSourceCallbackManager2), m = this.$SearchSourceCallbackManager2 ? l.sortedTokens: l.tokens, n = m.length, o = l.isPrefixQuery ? n - 1: null, p = {}, q = {}, r = {}, s = false, t = {}, u = 0;
        m.forEach(function(w, x) {
            if (t.hasOwnProperty(w))
                return;
            u++;
            t[w] = true;
            for (var y in this.$SearchSourceCallbackManagerd) {
                var z = (y === w&&!p.hasOwnProperty(y)), aa = false;
                if (!z)
                    aa = ((this.$SearchSourceCallbackManager2 || o === x) && y.indexOf(w) === 0);
                if (!z&&!aa)
                    continue;
                if (y === w) {
                    if (q.hasOwnProperty(y))
                        s = true;
                    p[y] = true;
                } else {
                    if (p.hasOwnProperty(y) || q.hasOwnProperty(y))
                        s = true;
                    q[y] = true;
                }
                for (var ba in this.$SearchSourceCallbackManagerd[y])
                    if (x === 0 || (r.hasOwnProperty(ba) && r[ba] == u - 1))
                        r[ba] = u;
            }
        }, this);
        var v = Object.keys(r).filter(function(w) {
            return r[w] == u;
        });
        if (s || u < n)
            v = this.$SearchSourceCallbackManagerj(k, v);
        return v;
    };
    i.prototype.$SearchSourceCallbackManagerh = function(k) {
        "use strict";
        var l = this.$SearchSourceCallbackManager0(k).flatValue, m = this.$SearchSourceCallbackManagerk(l);
        if (this.$SearchSourceCallbackManagere.hasOwnProperty(l))
            return m;
        return this.$SearchSourceCallbackManagerj(k, m);
    };
    i.prototype.$SearchSourceCallbackManagerk = function(k) {
        "use strict";
        var l = 0, m = null, n = this.$SearchSourceCallbackManagere;
        Object.keys(n).forEach(function(o) {
            if (k.indexOf(o) === 0 && o.length > l) {
                l = o.length;
                m = o;
            }
        });
        return (n.hasOwnProperty(m) ? Object.keys(n[m]) : []);
    };
    i.prototype.$SearchSourceCallbackManagerj = function(k, l) {
        "use strict";
        return l.filter(function(m) {
            return this.$SearchSourceCallbackManager1(k, this.$SearchSourceCallbackManagerc[m]);
        }, this);
    };
    function j(k) {
        return [k.getTitle(), k.getKeywordString()].join(' ');
    }
    e.exports = i;
}, null);
__d("AbstractAsyncSearchSource", ["AbstractSearchSource", "SearchSourceCallbackManager", "SearchableEntry", "TokenizeUtil", "copyProperties", "emptyFunction", "isValidUniqueID"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    for (var n in g)
        if (g.hasOwnProperty(n))
            p[n] = g[n];
    var o = g === null ? null: g.prototype;
    p.prototype = Object.create(o);
    p.prototype.constructor = p;
    p.__superConstructor__ = g;
    function p(q, r, s) {
        "use strict";
        this.$AbstractAsyncSearchSource0 = q.bootstrapRequests;
        this.$AbstractAsyncSearchSource1 = q.queryRequests;
        this.$AbstractAsyncSearchSource2 = q.auxiliaryFields;
        this.$AbstractAsyncSearchSource3 = q.asyncErrorHandler || l;
        this.$AbstractAsyncSearchSource4 = q.packageFn || this.$AbstractAsyncSearchSource5;
        this.$AbstractAsyncSearchSource6 = q.getAllForEmptyQuery;
        this.$AbstractAsyncSearchSource7 = [];
        this.$AbstractAsyncSearchSource8 = new h({
            parseFn: j.parse,
            matchFn: j.isQueryMatch,
            indexFn: q.indexFn
        });
        this.$AbstractAsyncSearchSource9 = r;
        this.$AbstractAsyncSearchSourcea = s;
    }
    p.prototype.bootstrapImpl = function(q) {
        "use strict";
        if (!this.$AbstractAsyncSearchSource0 ||!this.$AbstractAsyncSearchSource0.length) {
            q();
            return;
        }
        var r = this.$AbstractAsyncSearchSource0.length, s = 0;
        this.$AbstractAsyncSearchSource0.forEach(function(t) {
            this.$AbstractAsyncSearchSourceb({}, t, function(u) {
                this.$AbstractAsyncSearchSource8.addLocalEntries(u);
                this.$AbstractAsyncSearchSource7 = this.$AbstractAsyncSearchSource7.concat(u);
                s++;
                if (s === r) {
                    q();
                    q = null;
                }
            }.bind(this));
        }.bind(this));
    };
    p.prototype.searchImpl = function(q, r, s) {
        "use strict";
        if (this.$AbstractAsyncSearchSource6 && q === '') {
            this.getBootstrappedEntries(function(y) {
                r(y, q);
            });
            return;
        }
        var t = null, u = {}, v = this.$AbstractAsyncSearchSource8.search(q, function(y) {
            if (!t) {
                t = y;
                t.forEach(function(z) {
                    u[z.getUniqueID()] = true;
                });
            } else 
                y.forEach(function(z) {
                    var aa = z.getUniqueID();
                    if (!u[aa]) {
                        t.push(z);
                        u[aa] = true;
                    }
                });
            r(t, q);
        }, s);
        if (!v ||!this.$AbstractAsyncSearchSource1 ||!this.$AbstractAsyncSearchSource1.length)
            return;
        var w = {
            value: q,
            existing_ids: t && t.map(function(y) {
                return y.getUniqueID();
            }).join(',')
        }, x = this.$AbstractAsyncSearchSource1.length;
        this.$AbstractAsyncSearchSource1.forEach(function(y) {
            this.$AbstractAsyncSearchSourceb(w, y, function(z) {
                this.$AbstractAsyncSearchSourcec(z, q);
                x--;
                if (!x)
                    this.$AbstractAsyncSearchSource8.setQueryStringAsExhausted(q);
            }.bind(this));
        }, this);
    };
    p.prototype.getBootstrappedEntries = function(q) {
        "use strict";
        return this.bootstrap(function() {
            return q(this.$AbstractAsyncSearchSource7 || []);
        }.bind(this));
    };
    p.prototype.getAllEntriesMap = function() {
        "use strict";
        return this.$AbstractAsyncSearchSource8.getAllEntriesMap();
    };
    p.prototype.$AbstractAsyncSearchSourceb = function(q, r, s) {
        "use strict";
        this.$AbstractAsyncSearchSource9(q, r, function(t) {
            return s(this.$AbstractAsyncSearchSourcea(t, this.$AbstractAsyncSearchSource4).filter(function(u) {
                return !!u;
            }));
        }.bind(this), this.$AbstractAsyncSearchSource3);
    };
    p.prototype.$AbstractAsyncSearchSourced = function(q) {
        "use strict";
        this.$AbstractAsyncSearchSource8.addLocalEntries(q);
    };
    p.prototype.$AbstractAsyncSearchSourcec = function(q, r) {
        "use strict";
        if (q.length)
            this.$AbstractAsyncSearchSource8.addQueryEntries(q, r);
    };
    p.prototype.$AbstractAsyncSearchSource5 = function(q, r) {
        "use strict";
        var s = q.title || q.text, t = q.uniqueID || q.uid;
        if (!s ||!m(t))
            return null;
        return new i({
            uniqueID: t,
            order: q.order || q.index || r,
            title: s,
            subtitle: q.subtitle || q.category || q.subtext,
            keywordString: q.keywordString || q.tokens,
            type: q.type,
            photo: q.photo,
            uri: q.uri || q.path,
            auxiliaryData: this.$AbstractAsyncSearchSourcee(q)
        });
    };
    p.prototype.$AbstractAsyncSearchSourcee = function(q) {
        "use strict";
        var r;
        if (this.$AbstractAsyncSearchSource2) {
            r = {};
            for (var s in this.$AbstractAsyncSearchSource2) {
                var t = this.$AbstractAsyncSearchSource2[s];
                r[s] = q[t];
            }
        }
        if (q.aux_data) {
            r = r || {};
            k(r, q.aux_data);
        }
        return r;
    };
    e.exports = p;
}, null);
__d("PooledWebWorker", ["WebWorker"], function(a, b, c, d, e, f, g) {
    for (var h in g)
        if (g.hasOwnProperty(h))
            j[h] = g[h];
    var i = g === null ? null: g.prototype;
    j.prototype = Object.create(i);
    j.prototype.constructor = j;
    j.__superConstructor__ = g;
    function j(k, l, m) {
        "use strict";
        i.constructor.call(this, m);
        this.$PooledWebWorker0 = l;
        this.$PooledWebWorker1 = k;
    }
    j.prototype.getIndex = function() {
        "use strict";
        return this.$PooledWebWorker0;
    };
    j.prototype.getPool = function() {
        "use strict";
        return this.$PooledWebWorker1;
    };
    e.exports = j;
}, null);
__d("DropdownContextualHelpLink", ["DOM", "ge"], function(a, b, c, d, e, f, g, h) {
    var i = {
        set: function(j) {
            var k = h('navHelpCenter');
            if (k !== null)
                g.replace(k, j);
        }
    };
    e.exports = i;
}, null);
__d("WaterfallIDGenerator", ["CurrentUser", "md5"], function(a, b, c, d, e, f, g, h) {
    function i() {
        var l = 2147483647;
        return Math.random() * l;
    }
    function j() {
        return Math.floor(Date.now() / 1000);
    }
    var k = {
        generate: function() {
            return h([g.getID(), j(), i()].join(':'));
        }
    };
    e.exports = k;
}, null);
__d("Sound", ["SoundInitialData", "SoundPlayer", "SoundRPC", "SoundSynchronizer", "URI", "UserAgent_DEPRECATED", "isFacebookURI"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = null, o = {
        init: function(s) {
            if (!n)
                h.init(s);
        },
        play: function(s, t, u) {
            if (n) {
                i.playRemote(n.contentWindow, s, t, false);
            } else 
                i.playLocal(s, t, u);
        },
        stop: function(s) {
            if (!n)
                h.stop(s);
        }
    }, p = new k(location.href);
    if (p.getSubdomain() && p.getSubdomain() !== 'www')
        p.setSubdomain('www');
    var q = p.getDomain();
    function r() {
        if (l.ie() < 9)
            return false;
        if (g.RPC_DISABLED)
            return false;
        return j.isSupported() && i.supportsRPC();
    }
    if (m(p) && location.host !== q && r()) {
        n = document.createElement('iframe');
        n.setAttribute('src', '//' + q + '/sound_iframe.php');
        n.style.display = 'none';
        document.body.appendChild(n);
    }
    e.exports = o;
}, null);
__d("MercuryBrowserAlerts", ["ArbiterMixin", "ChatActivity", "ChatConfig", "ChatOptions", "ChatTitleBarBlinker", "MercuryThreadMuter", "MercuryViewer", "MessagingTag", "Sound", "copyProperties", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = b('MercuryThreads').get();
    o.init(['audio/ogg', 'audio/mpeg']);
    function r(t) {
        if (j.getSetting('sound'))
            o.play([i.get('sound.notif_ogg_url'), i.get('sound.notif_mp3_url')], t, false);
    }
    var s = {
        messageReceived: function(t) {
            if (m.isViewer(t.author) ||!t.is_unread || (t.folder != n.INBOX && t.folder != n.ARCHIVED))
                return;
            var u = t.thread_id, v = h.isActive();
            if (v) {
                var w = false;
                s.inform('before-alert', {
                    threadID: u,
                    cancelAlert: function() {
                        w = true;
                    }
                });
            }
            q.getThreadMeta(u, function(x) {
                var y = l.isThreadMuted(x);
                if (y)
                    return;
                var z = t.timestamp;
                if (v) {
                    !w && r(z);
                } else {
                    k.blink(u, z);
                    r(z);
                }
                k.blinkingElsewhere();
            }.bind(this));
        }
    };
    e.exports = p(s, g);
}, null);
__d("FBRTCLogger", ["Log", "LogHistory", "MarauderLogger", "formatDate", "pageID"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = 'webrtc', m = 'sent_message', n = 'received_message', o = 'send_succeeded', p = 'send_failed', q = 'info', r = 'call_action', s = 'client_event', t = 'client_error', u = 'type', v = 'msg_id', w = 'ack_msg_id', x = 'call_id', y = 'from', z = 'to', aa = 'content', ba = 'tag', ca = 'peer_id', da = 'error_code', ea = 'trigger', fa = 'endcallstats', ga = null;
    ha.getInstance = function() {
        "use strict";
        if (!ga)
            ga = new ha();
        return ga;
    };
    function ha() {
        "use strict";
        this.$FBRTCLogger0 = h.getInstance(l);
    }
    ha.prototype.logToConsole = function(ia) {
        "use strict";
        var ja = 'Console';
        this.$FBRTCLogger1(null, null, ja, ia);
        this.$FBRTCLogger0.log(ja, ia);
    };
    ha.prototype.logReceivedMessage = function(ia, ja, ka) {
        "use strict";
        var la = {};
        la[y] = ia;
        la[x] = ja;
        la[u] = ka.type;
        la[v] = ka.msg_id;
        if (ka.sdp)
            la[aa] = ka.sdp;
        if (ka.ack_id)
            la[w] = ka.ack_id;
        this.$FBRTCLogger2(n, la);
        this.$FBRTCLogger1(ia, ja, 'Received', ka.type + ', ' + ka.msg_id);
    };
    ha.prototype.logSentMessage = function(ia, ja, ka) {
        "use strict";
        var la = {};
        la[z] = ia;
        la[x] = ja;
        la[u] = ka.type;
        la[v] = ka.msg_id;
        if (ka.sdp)
            la[aa] = ka.sdp;
        if (ka.ack_id)
            la[w] = ka.ack_id;
        this.$FBRTCLogger2(m, la);
        this.$FBRTCLogger1(ia, ja, 'Sent', ka.type + ', ' + ka.msg_id);
    };
    ha.prototype.logSentMessageSuccess = function(ia, ja, ka, la) {
        "use strict";
        var ma = {};
        ma[ca] = ia;
        ma[x] = ja;
        ma[u] = ka;
        ma[v] = la;
        this.$FBRTCLogger2(o, ma);
    };
    ha.prototype.logSentMessageFailure = function(ia, ja, ka, la, ma) {
        "use strict";
        var na = {};
        na[ca] = ia;
        na[x] = ja;
        na[u] = ka;
        na[v] = la;
        na[da] = ma;
        this.$FBRTCLogger2(p, na);
        this.$FBRTCLogger1(ia, ja, 'Send Failed', ka + ', ' + ma);
    };
    ha.prototype.logCallAction = function(ia, ja, ka, la, ma) {
        "use strict";
        var na = {};
        na[ca] = ia;
        na[x] = ja;
        na[r] = ka;
        na[aa] = la;
        if (ma)
            na[ea] = ma;
        this.$FBRTCLogger2(r, na);
        this.$FBRTCLogger1(ia, ja, 'CallAction', ka + ', ' + la);
    };
    ha.prototype.logEvent = function(ia, ja, event) {
        "use strict";
        var ka = {};
        ka[ca] = ia;
        ka[x] = ja;
        ka[aa] = event;
        this.$FBRTCLogger2(s, ka);
        this.$FBRTCLogger1(ia, ja, 'Event', event);
    };
    ha.prototype.logInfo = function(ia, ja, ka) {
        "use strict";
        var la = {};
        la[ca] = ia;
        la[x] = ja;
        la[aa] = ka;
        this.$FBRTCLogger2(q, la);
        this.$FBRTCLogger1(ia, ja, 'Info', ka);
    };
    ha.prototype.logError = function(ia, ja, ka) {
        "use strict";
        var la = {};
        la[ca] = ia;
        la[x] = ja;
        la[aa] = ka;
        this.$FBRTCLogger2(t, la);
        this.$FBRTCLogger1(ia, ja, 'Error', ka);
    };
    ha.prototype.logErrorWithoutID = function(ia) {
        "use strict";
        this.logError(null, null, ia);
    };
    ha.prototype.logEndCallSummary = function(ia) {
        "use strict";
        if (!ia)
            return;
        var ja = {};
        ja[ca] = ia.peerID;
        ja[x] = ia.callID;
        ja[ba] = fa;
        ja[aa] = ia.toString();
        var ka = ia.getExtraInfo();
        for (var la in ka)
            if (ka.hasOwnProperty(la))
                ja[la] = ka[la];
        this.$FBRTCLogger2(q, ja);
        this.$FBRTCLogger1(ia.peerID, ia.callID, 'Call Summary', ja);
    };
    ha.prototype.$FBRTCLogger2 = function(ia, ja) {
        "use strict";
        ja.page_id = k;
        this.$FBRTCLogger0.log(ia, ja);
        i.log(ia, l, ja);
    };
    ha.prototype.$FBRTCLogger1 = function(ia, ja, ka, la) {
        "use strict";
    };
    ha.CallAction = {
        START_CALL: 'start_call',
        RECEIVED_CALL: 'received_call',
        ANSWER_CALL: 'answer_call',
        END_CALL: 'end_call',
        DENIED_PERMISSION: 'denied_permission',
        SET_MUTE: 'set_mute',
        SET_VIDEO_ON: 'set_video_on',
        SET_SELF_VIEW_ON: 'set_self_view_on',
        SET_FULLSCREEN_ON: 'set_fullscreen_on',
        START_SKYPE: 'start_skype',
        TRY_NEW: 'try_new',
        OPEN_POPUP: 'open_popup',
        POPUP_OPENED: 'popup_opened',
        AUTO_DISABLE_VIDEO: 'auto_disable_video'
    };
    ha.Trigger = {
        ADMIN_MESSAGE: 'admin_message',
        CHAT_TAB_ICON: 'chat_tab_icon',
        CHAT_TAB_ICON_TOUR: 'chat_tab_icon_tour',
        SKYPE_DEPRECATION_DIALOG: 'skype_deprecation_dialog',
        REDIAL_BUTTON: 'redial_button',
        RETURN_CALL: 'return_call',
        UNKNOWN: 'unknown'
    };
    ha.Key = {
        DEVICE_INFO: 'device_info',
        RATING: 'rating5',
        RATING_SHOWN: 'rating_shown',
        SURVEY_CHOICE: 'survey_choice',
        SURVEY_DETAILS: 'survey_details',
        SURVEY_SHOWN: 'survey_shown'
    };
    e.exports = ha;
}, null);
__d("VideoCallCore", ["Event", "Arbiter", "AsyncRequest", "AvailableListConstants", "Bootloader", "ChannelConstants", "Cookie", "CSS", "Dialog", "UserAgent_DEPRECATED", "VideoCallSupport", "VideoCallSkypeDeprecationWarning", "emptyFunction", "ge", "PresenceStatus", "randomInt", "VideoCallUI", "VideoCallIncomingCallController", "VideoCallTemplates", "ShortProfiles", "VideoCallRecordMessageDialog"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v) {
    var w = b('VideoCallUI').module, x = b('VideoCallIncomingCallController').module;
    b('VideoCallTemplates');
    var y = [], z = [], aa = null, ba = {
        mightReloadPostInstall: function() {
            return p.windows();
        },
        onVideoMessage: function(ga) {
            y.push(ga);
            k.loadModules(["VideoCallController"], s);
        },
        onRTCMessage: function(ga) {
            if (q.isReceiveWebrtcSupported() && x) {
                z.push(ga);
                ca();
            }
        },
        setMessageHandler: function(ga) {
            this.onVideoMessage = ga;
            if (ga)
                while (y.length)
                    ga(y.shift());
        },
        setRTCMessageHandler: function(ga) {
            this.onRTCMessage = ga;
            if (ga)
                while (z.length)
                    ga(z.shift());
        },
        availableForCall: function(ga) {
            var ha = u.get(ga);
            if (ha === j.ACTIVE) {
                var ia = u.getDetailedActivePresence(ga);
                if (ia === j.ACTIVE_ON_WEB)
                    return true;
            }
            return ea(ga);
        },
        attachListenerToProfileButton: function(ga) {
            var ha = t('videoCallProfileButton');
            if (ha) {
                if (!q.isVideoCallSupported()) {
                    n.hide(ha);
                    return;
                }
                g.listen(ha, 'click', function(event) {
                    ba.startCallOrLeaveMessage(ga, 'profile_button_click_timeline');
                });
            }
        },
        startCallOrLeaveMessage: function(ga, ha) {
            if (this.availableForCall(ga)) {
                ba.showOutgoingCallDialog(ga, ha);
            } else 
                b('ShortProfiles').get(ga, function(ia) {
                    b('VideoCallRecordMessageDialog').get(ga, ia.firstName).show();
                });
        },
        showOutgoingCallDialog: function(ga, ha, ia) {
            ba.logClick(ga, (ha || 'unknown'));
            var ja = new r(ba);
            ja.showWarningOrStartCall(ga, ia);
        },
        canCallByWebrtc: function(ga) {
            if (q.isSendWebrtcSupported() && w)
                return ea(ga);
            return false;
        },
        makeWebRTCCall: function(ga, ha) {
            var ia = parseInt(ga, 10);
            ca();
            var ja = da();
            aa.startingCallTo(ia, ja);
            w.openAsCaller(ga, ja, ha);
        },
        makeSkypeCall: function(ga) {
            var ha = q.isPluginInstalled() ? 'outgoing_dialog.php': 'intro.php', ia = '/ajax/chat/video/' + ha + '?idTarget=' + ga;
            new o().setAllowCrossPageTransition(true).setAsync(new i(ia).setHandler(s).setServerDialogCancelHandler(s)).show();
        },
        logClick: function(ga, ha) {
            new i().setURI('/ajax/chat/video/log_click.php').setData({
                targetUserID: ga,
                clickSource: ha
            }).setAllowCrossPageTransition(true).setErrorHandler(s).send();
        }
    };
    function ca() {
        if (!aa)
            aa = new x(ba);
    }
    function da() {
        return v(0, 4294967295);
    }
    function ea(ga) {
        var ha = u.getCapabilities(ga), ia = l.CAPABILITY_VOIP_INTEROP | l.CAPABILITY_VIDEO, ja = ha & ia;
        return ja !== 0;
    }
    function fa() {
        if (!ba.mightReloadPostInstall())
            return;
        var ga = m.get('vcpwn');
        if (ga) {
            m.clear('vcpwn');
            var ha = m.get('vctid');
            if (ha) {
                m.clear('vctid');
                if (m.get('vctid'))
                    return;
                if (ha && ba.isInstalled()) {
                    var ia = '/ajax/chat/video/outgoing_dialog.php?idTarget=' + ha;
                    new o().setAllowCrossPageTransition(true).setAsync(new i(ia)).show();
                }
            }
        }
    }
    h.subscribe(l.getArbiterType('video'), function(ga, ha) {
        ba.onVideoMessage(ha.obj);
    });
    h.subscribe(l.getArbiterType('webrtc'), function(ga, ha) {
        ba.onRTCMessage(ha.obj);
    });
    h.subscribe(l.getArbiterType('chat_event'), function(ga, ha) {
        if (ha.obj.event_name == "missed-call")
            k.loadModules(["VideoCallController"], function(ia) {
                ia.onMissedCallEvent(ha.obj);
            });
    });
    fa();
    e.exports = ba;
}, null);
__d("FileFormResetOnSubmit", ["DOMQuery", "Event", "emptyFunction"], function(a, b, c, d, e, f, g, h, i) {
    function j(l, m) {
        var n = h.listen(l, 'change', i.thatReturnsFalse, h.Priority.URGENT);
        try {
            m();
        } catch (o) {
            throw o;
        } finally {
            n.remove();
        }
    }
    function k(l) {
        "use strict";
        this._form = l;
    }
    k.prototype.enable = function() {
        "use strict";
        var l = this._reset.bind(this);
        this._subscription = this._form.subscribe('submit', function() {
            setTimeout(l, 0);
        });
    };
    k.prototype.disable = function() {
        "use strict";
        this._subscription.unsubscribe();
        this._subscription = null;
    };
    k.prototype._reset = function() {
        "use strict";
        var l = this._form.getRoot();
        j(l, function() {
            var m = g.scry(l, 'input[type="file"]');
            m.forEach(function(n) {
                n.value = '';
            });
        });
    };
    e.exports = k;
}, null);
__d("DOMClone", [], function(a, b, c, d, e, f) {
    var g = {
        shallowClone: function(i) {
            return h(i, false);
        },
        deepClone: function(i) {
            return h(i, true);
        }
    };
    function h(i, j) {
        var k = i.cloneNode(j);
        if (typeof k.__FB_TOKEN !== 'undefined')
            delete k.__FB_TOKEN;
        return k;
    }
    e.exports = g;
}, null);
__d("FileInput", ["ArbiterMixin", "DOM", "DOMClone", "Event", "Focus", "Keys", "UserAgent_DEPRECATED", "cx", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = m.ie(), q = o(g);
    for (var r in q)
        if (q.hasOwnProperty(r))
            t[r] = q[r];
    var s = q === null ? null: q.prototype;
    t.prototype = Object.create(s);
    t.prototype.constructor = t;
    t.__superConstructor__ = q;
    function t(u, v, w) {
        "use strict";
        this.container = u;
        this.control = v;
        var x = h.scry(this.container, 'a')[0];
        x && x.removeAttribute('href');
        var y = h.create('div', {
            className: "_3jk"
        }, w);
        h.appendContent(this.control, y);
        this._boundHandleChange = this._handleChange.bind(this);
        if (p)
            this._boundHandleIEKeyDown = this._handleIEKeyDown.bind(this);
        this._setInputElement(w);
    }
    t.prototype.getValue = function() {
        "use strict";
        return this.input.value;
    };
    t.prototype.getInput = function() {
        "use strict";
        return this.input;
    };
    t.prototype.clear = function() {
        "use strict";
        if (p) {
            var u = i.deepClone(this.input);
            h.replace(this.input, u);
            this._setInputElement(u);
        } else 
            this.input.value = '';
    };
    t.prototype.destroy = function() {
        "use strict";
        this._listener.remove();
        this._listener = null;
        if (p) {
            this._IEKeyDownListener.remove();
            this._IEKeyDownListener = null;
        }
        this.container = null;
        this.control = null;
        this.input = null;
    };
    t.prototype._setInputElement = function(u) {
        "use strict";
        this.input = u;
        k.relocate(u, this.control);
        this._listener && this._listener.remove();
        this._listener = j.listen(u, 'change', this._boundHandleChange);
        if (p) {
            this._IEKeyDownListener && this._IEKeyDownListener.remove();
            this._IEKeyDownListener = j.listen(u, 'keydown', this._boundHandleIEKeyDown);
        }
    };
    t.prototype._handleChange = function(event) {
        "use strict";
        this.inform('change', event);
        var u = this.input.form;
        if (u && p < 9)
            j.fire(u, 'change', event);
    };
    t.prototype._handleIEKeyDown = function(event) {
        "use strict";
        if (event.keyCode === l.RETURN) {
            event.preventDefault();
            var u = document.createEvent('MouseEvents');
            u.initEvent('click', true, true);
            this.input.dispatchEvent(u);
        }
    };
    e.exports = t;
}, null);
__d("FormSubmitOnChange", ["Event", "copyProperties", "submitForm"], function(a, b, c, d, e, f, g, h, i) {
    function j(k) {
        "use strict";
        this._form = k;
    }
    j.prototype.enable = function() {
        "use strict";
        this._listener = g.listen(this._form.getRoot(), 'change', this._submit.bind(this));
    };
    j.prototype.disable = function() {
        "use strict";
        this._listener.remove();
        this._listener = null;
    };
    j.prototype._submit = function() {
        "use strict";
        i(this._form.getRoot());
    };
    h(j.prototype, {
        _listener: null
    });
    e.exports = j;
}, null);
__d("PhotosUploadID", [], function(a, b, c, d, e, f) {
    var g = 1024, h = {
        getNewID: function() {
            return (g++).toString();
        }
    };
    e.exports = h;
}, null);
__d("ChatAutoSendPhotoUploader", ["ArbiterMixin", "AsyncUploadRequest", "DOM", "Event", "FileForm", "FileFormResetOnSubmit", "FileInput", "FormSubmitOnChange", "JpegResizer", "MercuryAttachmentType", "PhotosMimeType", "PhotosUploadID", "SubscriptionsHandler", "arrayContains", "csx", "getImageSize", "getObjectValues", "invariant", "isEmpty", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
    "use strict";
    function aa() {
        return 'upload_' + r.getNewID();
    }
    var ba = z(g);
    for (var ca in ba)
        if (ba.hasOwnProperty(ca))
            ea[ca] = ba[ca];
    var da = ba === null ? null: ba.prototype;
    ea.prototype = Object.create(da);
    ea.prototype.constructor = ea;
    ea.__superConstructor__ = ba;
    function ea(fa, ga, ha) {
        this.$ChatAutoSendPhotoUploader0 = ha;
        this.$ChatAutoSendPhotoUploader1 = ga;
        this.$ChatAutoSendPhotoUploader2 = new s();
        this.$ChatAutoSendPhotoUploader3 = {};
        this.$ChatAutoSendPhotoUploader4 = {};
        this.$ChatAutoSendPhotoUploader5 = fa.getAttribute('action');
        this.$ChatAutoSendPhotoUploader6 = new k(fa, [n, l]);
        this.$ChatAutoSendPhotoUploader6.setAllowCrossOrigin(true);
        this.$ChatAutoSendPhotoUploader6.setUploadInParallel(true);
        var ia = i.find(fa, "._4q60"), ja = i.find(ia, "._4q61");
        new m(ia, ja, ga);
        this.$ChatAutoSendPhotoUploader2.addSubscriptions(this.$ChatAutoSendPhotoUploader6.subscribe('submit', this.$ChatAutoSendPhotoUploader7.bind(this)), this.$ChatAutoSendPhotoUploader6.subscribe('success', this.$ChatAutoSendPhotoUploader8.bind(this)), this.$ChatAutoSendPhotoUploader6.subscribe('failure', this.$ChatAutoSendPhotoUploader9.bind(this)), this.$ChatAutoSendPhotoUploader6.subscribe('progress', this.$ChatAutoSendPhotoUploadera.bind(this)), j.listen(ja, 'click', function() {
            if (this.$ChatAutoSendPhotoUploaderb)
                if (o.prepareResource)
                    o.prepareResource();
            this.inform('open');
        }.bind(this)));
        this.$ChatAutoSendPhotoUploaderb = o.isSupported();
        if (this.$ChatAutoSendPhotoUploaderb)
            this.$ChatAutoSendPhotoUploader6.setPreprocessHandler(this.$ChatAutoSendPhotoUploaderc.bind(this));
    }
    ea.prototype.isUploading = function() {
        return !y(this.$ChatAutoSendPhotoUploader3);
    };
    ea.prototype.destroy = function() {
        this.$ChatAutoSendPhotoUploader2.release();
        this.$ChatAutoSendPhotoUploader6.destroy();
        this.$ChatAutoSendPhotoUploader3 = {};
        this.$ChatAutoSendPhotoUploader4 = {};
    };
    ea.prototype.$ChatAutoSendPhotoUploaderd = function(fa, ga) {
        var ha = this.$ChatAutoSendPhotoUploadere(fa);
        if (ga) {
            ha.preview_width = ga.width;
            ha.preview_height = ga.height;
        }
        return ha;
    };
    ea.prototype.$ChatAutoSendPhotoUploadere = function(fa) {
        var ga = {
            upload_id: fa,
            on_progress: function(ha) {
                this.$ChatAutoSendPhotoUploader2.addSubscriptions(this.subscribe('progress', ha));
            }.bind(this),
            on_resizing_progress: function(ha) {
                this.$ChatAutoSendPhotoUploader2.addSubscriptions(this.subscribe('resize_progress', ha));
            }.bind(this),
            on_success: function(ha) {
                this.$ChatAutoSendPhotoUploader2.addSubscriptions(this.subscribe('success', ha));
            }.bind(this),
            upload_canceled: this.$ChatAutoSendPhotoUploaderf.bind(this),
            attach_type: p.PHOTO,
            preview_uploading: true
        };
        return ga;
    };
    ea.prototype.$ChatAutoSendPhotoUploaderc = function(fa, ga) {
        var ha = fa.getFile();
        if (!q(ha.type).isJpeg())
            return ga(fa);
        o.getSingleton().resizeBlob(ha, function(ia, ja, ka) {
            if (ja)
                fa.setFile(ja);
            ga(fa);
        }, this.$ChatAutoSendPhotoUploaderg.bind(this, fa));
    };
    ea.prototype.$ChatAutoSendPhotoUploader7 = function() {
        var fa = aa();
        this.$ChatAutoSendPhotoUploaderh(fa, this.$ChatAutoSendPhotoUploader1.files);
    };
    ea.prototype.$ChatAutoSendPhotoUploaderh = function(fa, ga) {
        var ha = {};
        if (typeof FileReader !== 'undefined' && FileReader.prototype.readAsArrayBuffer && ga && ga.length === 1) {
            this.$ChatAutoSendPhotoUploader3[fa] = fa;
            ha[fa] = ga[0];
            var ia = new FileReader();
            ia.onload = function() {
                this.inform('submit', {
                    upload_id: fa,
                    preview_attachments: [this.$ChatAutoSendPhotoUploaderd(fa, v(ia.result))]
                });
            }.bind(this);
            ia.onerror = function() {
                this.inform('submit', {
                    upload_id: fa,
                    preview_attachments: [this.$ChatAutoSendPhotoUploadere(fa)]
                });
            }.bind(this);
            ia.readAsArrayBuffer(ga[0]);
        } else {
            var ja = [];
            if (!ga) {
                this.$ChatAutoSendPhotoUploader3[fa] = fa;
                this.$ChatAutoSendPhotoUploader0.value = fa;
                ja.push(this.$ChatAutoSendPhotoUploadere(fa));
            } else 
                for (var ka = 0; ka < ga.length; ++ka) {
                    var la = aa();
                    ha[la] = ga[ka];
                    this.$ChatAutoSendPhotoUploader3[la] = fa;
                    ja.push(this.$ChatAutoSendPhotoUploadere(la));
                }
            this.inform('submit', {
                upload_id: fa,
                preview_attachments: ja
            });
        }
        if (Object.keys(ha).length > 0)
            this.$ChatAutoSendPhotoUploader6.setFiles(ha);
    };
    ea.prototype.$ChatAutoSendPhotoUploader8 = function(event, fa) {
        var ga = this.$ChatAutoSendPhotoUploaderi(fa);
        if (this.$ChatAutoSendPhotoUploader3[ga]) {
            var ha = this.$ChatAutoSendPhotoUploader3[ga];
            delete this.$ChatAutoSendPhotoUploader3[ga];
            var ia = fa.response.getPayload();
            if (!this.$ChatAutoSendPhotoUploader4[ha])
                this.$ChatAutoSendPhotoUploader4[ha] = [];
            this.$ChatAutoSendPhotoUploader4[ha].push({
                id: ga,
                fbid: ia.metadata[0].image_id
            });
            this.inform('success', {
                upload_id: ga
            });
            if (!this.$ChatAutoSendPhotoUploaderj(ha))
                this.$ChatAutoSendPhotoUploaderk(ha);
        }
    };
    ea.prototype.$ChatAutoSendPhotoUploaderk = function(fa) {
        x(!this.$ChatAutoSendPhotoUploaderj(fa));
        this.$ChatAutoSendPhotoUploader4[fa].sort(function(ha, ia) {
            return ha.id < ia.id?-1 : 1;
        });
        var ga = this.$ChatAutoSendPhotoUploader4[fa].map(function(ha) {
            return ha.fbid;
        });
        this.inform('all-uploads-completed', {
            upload_id: fa,
            image_ids: ga
        });
        delete this.$ChatAutoSendPhotoUploader4[fa];
    };
    ea.prototype.$ChatAutoSendPhotoUploadera = function(event, fa) {
        this.inform('progress', {
            upload_id: fa.upload.getName(),
            event: fa.event
        });
    };
    ea.prototype.$ChatAutoSendPhotoUploaderg = function(fa, event) {
        this.inform('resize_progress', {
            upload_id: fa.getName(),
            event: event
        });
    };
    ea.prototype.$ChatAutoSendPhotoUploaderj = function(fa) {
        return t(w(this.$ChatAutoSendPhotoUploader3), fa);
    };
    ea.prototype.$ChatAutoSendPhotoUploader9 = function(event, fa) {
        var ga = this.$ChatAutoSendPhotoUploaderi(fa);
        this.$ChatAutoSendPhotoUploaderl(ga, 'last-upload-failed');
        return false;
    };
    ea.prototype.$ChatAutoSendPhotoUploaderf = function(fa) {
        this.$ChatAutoSendPhotoUploaderl(fa, 'last-upload-canceled');
    };
    ea.prototype.$ChatAutoSendPhotoUploaderl = function(fa, ga) {
        if (!this.$ChatAutoSendPhotoUploader3[fa])
            return;
        var ha = this.$ChatAutoSendPhotoUploader3[fa];
        delete this.$ChatAutoSendPhotoUploader3[fa];
        if (!this.$ChatAutoSendPhotoUploaderj(ha))
            if (this.$ChatAutoSendPhotoUploader4[ha]) {
                this.$ChatAutoSendPhotoUploaderk(ha);
            } else 
                this.inform(ga, {
                    upload_id: ha
                });
    };
    ea.prototype.$ChatAutoSendPhotoUploaderi = function(fa) {
        if (fa.upload) {
            return fa.upload.getName();
        } else 
            return fa.response.getPayload().uploadID;
    };
    ea.prototype.uploadFile = function(fa) {
        var ga = aa(), ha = {};
        ha[ga] = fa;
        var ia = new h(this.$ChatAutoSendPhotoUploader5).setAllowCrossOrigin(true).setRelativeTo(this.$ChatAutoSendPhotoUploader6.getRoot()).setFiles(ha);
        this.$ChatAutoSendPhotoUploader2.addSubscriptions(ia.subscribe('success', function(event, ja) {
            this.$ChatAutoSendPhotoUploader8(event, {
                upload: ja,
                response: ja.getResponse()
            });
        }.bind(this)), ia.subscribe('failure', this.$ChatAutoSendPhotoUploader9.bind(this)));
        ia.send();
        this.$ChatAutoSendPhotoUploaderh(ga, [fa]);
    };
    e.exports = ea;
}, null);
__d("ChatPrivacyActionController", ["ChatVisibility", "JSLogger", "PresencePrivacy", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = function(l, m) {
        this._userID = l;
        this._logger = h.create('blackbird');
        this._getState = function() {
            if (g.isOnline())
                return i.allows(this._userID) ? k.NORMAL : k.BLOCKED;
            return k.OFFLINE;
        };
        this._togglePrivacy = function() {
            var n = this._getState();
            switch (this._getState()) {
            case k.OFFLINE:
                if (g.isOnline()) {
                    this._logger.error('tabs_already_online');
                    break;
                }
                this._logger.log('tabs_go_online', {
                    tab_id: this._userID
                });
                g.goOnline(function() {
                    if (!i.allows(this._userID)) {
                        if (this._getState() !== k.BLOCKED)
                            this._logger.error('privacy_action_controller_blocked_inconsistency');
                        this._togglePrivacy();
                    }
                }.bind(this));
                break;
            case k.BLOCKED:
                i.allow(this._userID);
                this._logger.log('tabs_unblock', {
                    tab_id: this._userID
                });
                break;
            case k.NORMAL:
                i.disallow(this._userID);
                this._logger.log('tabs_block', {
                    tab_id: this._userID
                });
                break;
            }
        };
        setTimeout(function() {
            var n = function() {
                m && m(this._getState());
            }.bind(this);
            n();
            this._subscribeToken = i.subscribe('privacy-changed', n);
        }.bind(this), 0);
    };
    k.OFFLINE = 'offline';
    k.BLOCKED = 'blocked';
    k.NORMAL = 'normal';
    j(k.prototype, {
        togglePrivacy: function() {
            this._logger.log('gear_menu_toggle_privacy', {
                tab_id: this._userID
            });
            this._togglePrivacy();
        },
        destroy: function() {
            this._subscribeToken && i.unsubscribe(this._subscribeToken);
        }
    });
    e.exports = k;
}, null);
__d("ChatTabPresence", ["AvailableList", "ChatTabModel", "MercuryIDs"], function(a, b, c, d, e, f, g, h, i) {
    var j = {};
    function k(l) {
        var m = i.getUserIDFromThreadID(l);
        if (m)
            g.updateForID(m);
    }
    h.subscribe('chat/tabs-changed', function(event, l) {
        l.tabs.forEach(function(m) {
            if (m.raised&&!j[m.id])
                k(m.id);
        });
        j = {};
        l.tabs.forEach(function(m) {
            if (m.raised)
                j[m.id] = true;
        });
    });
    e.exports = {};
}, null);
__d("ChatUploadWarningTabSheet", ["DOM", "ChatTabTemplates", "copyProperties"], function(a, b, c, d, e, f, g, h, i) {
    function j(k, l, m) {
        this._threadID = k;
        this._rootElement = l;
        this._sheetView = m;
    }
    i(j.prototype, {
        render: function() {
            var k = h[':fb:mercury:chat:tab-sheet:message-icon-sheet'].build();
            g.setContent(k.getNode('text'), g.tx._("Please wait until the upload is complete before you send your message."));
            g.setContent(this._rootElement, k.getRoot());
        },
        isPermanent: function() {
            return false;
        },
        getType: function() {
            return 'upload_warning_type';
        },
        open: function() {
            this._sheetView.open(this);
        },
        close: function() {
            this._sheetView.close(this);
        }
    });
    e.exports = j;
}, null);
__d("MercuryErrorInfo", ["MercuryActionStatus", "MercuryErrorType", "fbt"], function(a, b, c, d, e, f, g, h, i) {
    var j = {
        getMessage: function(k) {
            var l = '';
            if (j.isConnectionError(k)) {
                l = "This message didn't send.";
                if (j.isTransient(k))
                    l = i._("{message} Check your internet connection and click to try again.", [i.param("message", l)]);
            } else {
                if (k && k.description) {
                    l = k.description;
                } else 
                    l = "This message failed to send.";
                if (j.isTransient(k))
                    l = i._("{message} Click to send again.", [i.param("message", l)]);
            }
            return l;
        },
        isConnectionError: function(k) {
            if (k && k.type == h.TRANSPORT)
                return k.code === 1001 || k.code === 1004 || k.code === 1006;
            return false;
        },
        isTransient: function(k) {
            return k && k.is_transient;
        },
        isPermanent: function(k) {
            return k?!this.isTransient(k) : false;
        },
        hasErrorStatus: function(k) {
            return k.status === g.FAILED_UNKNOWN_REASON || k.status === g.UNABLE_TO_CONFIRM || k.status === g.ERROR;
        }
    };
    e.exports = j;
}, null);
__d("MercuryIndicatorController", ["ArbiterMixin", "DOM", "MercuryActionTypeConstants", "MercuryDelayedRoger", "MercuryIDs", "MercuryMessageSourceTags", "MercuryParticipants", "MercuryRoger", "MercuryTypingReceiver", "MercuryViewer", "arrayContains", "copyProperties", "formatDate", "removeFromArray", "tx", "MercuryThreads"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
    var v = b('MercuryThreads').get(), w = [];
    function x(y) {
        this._threadID = y;
        this._canonicalUser = k.getUserIDFromThreadID(y);
        w.push(this);
    }
    r(x.prototype, g, {
        destroy: function() {
            t(w, this);
        },
        setLastMessage: function(y) {
            this._lastMsg = y;
            this._handleStateChange();
        },
        _informStateChanged: function(y) {
            if (y.activity == 'none' && this._currentActivity == 'none')
                return;
            if (this._lastMsg && p.isViewer(this._lastMsg.author))
                y.self_authored = true;
            this._currentActivity = y.activity;
            this.inform('state-changed', y);
        },
        _notifySentFrom: function() {
            var y, z, aa = this._lastMsg.location_text, ba = this._lastMsg.source_tags || [];
            if (aa) {
                y = u._("Sent from {location}", {
                    location: aa
                });
                z = 'sentFromMobile';
            } else if (q(ba, l.MESSENGER)) {
                y = h.create('a', {
                    href: '/mobile/messenger',
                    'class': 'fcg',
                    target: '_blank'
                }, "Sent from Messenger");
                z = 'sentFromMobile';
            } else if (q(ba, l.MOBILE)) {
                y = h.create('a', {
                    href: '/mobile',
                    'class': 'fcg',
                    target: '_blank'
                }, "Sent from Mobile");
                z = 'sentFromMobile';
            } else if (q(ba, l.EMAIL)) {
                y = "Sent from email";
                z = 'sentFromEmail';
            } else {
                this._informStateChanged({
                    activity: 'none'
                });
                return;
            }
            this._informStateChanged({
                activity: z,
                text: y
            });
        },
        _notifySeenTimestamp: function(y) {
            var z = n.getSeenTimestamp(this._threadID, y[0]) * .001, aa = Date.now() * .001, ba;
            if (z < aa - 518400) {
                ba = 'M j';
            } else if (z < aa - 86400) {
                ba = 'D g:ia';
            } else 
                ba = 'g:ia';
            this._informStateChanged({
                activity: 'seen-timestamp',
                text: u._("Seen {timestamp}", {
                    timestamp: s(z, ba)
                })
            });
        },
        _nameNormalizer: function(y) {
            var z;
            m.getMulti(y, function(aa) {
                function ba(da) {
                    if (aa[da] !== undefined) {
                        return aa[da].short_name.toLowerCase();
                    } else 
                        return da;
                }
                var ca = y.map(ba);
                z = function(da) {
                    var ea = ba(da), fa = ca.indexOf(ea) !== ca.lastIndexOf(ea);
                    return fa ? aa[da].name : aa[da].short_name;
                };
            });
            return z;
        },
        _notifySeenBy: function(y) {
            var z = this._lastMsg, aa = true;
            m.getMulti(y, function(ba) {
                aa = false;
                if (this._lastMsg != z)
                    return;
                var ca = v.getThreadMetaNow(this._threadID), da = ca ? ca.participants.length: 0, ea = y.length + (z.author != p.getID()), fa, ga = false, ha = da > 2 && ea >= da - 1, ia;
                if (ca)
                    ia = this._nameNormalizer(ca.participants);
                if (!ia)
                    ia = function(ma) {
                        return ba[ma].short_name;
                    };
                if (ha) {
                    fa = "Seen by everyone";
                } else if (y.length == 1) {
                    fa = u._("Seen by {user}", {
                        user: ia(y[0])
                    });
                } else if (y.length == 2) {
                    fa = u._("Seen by {user1}, {user2}", {
                        user1: ia(y[0]),
                        user2: ia(y[1])
                    });
                } else if (y.length == 3) {
                    fa = u._("Seen by {user1}, {user2}, {user3}", {
                        user1: ia(y[0]),
                        user2: ia(y[1]),
                        user3: ia(y[2])
                    });
                } else if (y.length > 3) {
                    var ja = Object.keys(ba).length - 2, ka = u._("{num} more", {
                        num: ja
                    }), la = h.create('span', {
                        className: 'more'
                    }, ka);
                    fa = h.tx._("Seen by {user1}, {user2}, {=num more link}", {
                        user1: ia(y[0]),
                        user2: ia(y[1]),
                        '=num more link': la
                    });
                    ga = true;
                }
                this._informStateChanged({
                    activity: 'seen-by',
                    text: fa,
                    seenBy: y,
                    tooltip: ga
                });
            }.bind(this));
            aa && this._informStateChanged({
                activity: 'none'
            });
        },
        _notifyTyping: function(y) {
            var z = this._lastMsg, aa = true;
            m.getMulti(y, function(ba) {
                aa = false;
                if (this._lastMsg != z)
                    return;
                var ca = v.getThreadMetaNow(this._threadID), da = ca ? ca.participants.length: 0, ea;
                if (ca)
                    ea = this._nameNormalizer(ca.participants);
                if (!ea)
                    ea = function(ka) {
                        return ba[ka].short_name;
                    };
                var fa, ga = false;
                if (da > 2 && y.length >= da - 1) {
                    fa = "Everyone is typing...";
                } else if (y.length == 1) {
                    fa = u._("{name} is typing...", {
                        name: ea(y[0])
                    });
                } else if (y.length == 2) {
                    fa = u._("{user1} and {user2} are typing...", {
                        user1: ea(y[0]),
                        user2: ea(y[1])
                    });
                } else if (y.length == 3) {
                    fa = u._("{user1}, {user2}, and {user3} are typing...", {
                        user1: ea(y[0]),
                        user2: ea(y[1]),
                        user3: ea(y[2])
                    });
                } else if (y.length > 3) {
                    var ha = Object.keys(ba).length - 2, ia = u._("{num} more", {
                        num: ha
                    }), ja = h.create('a', {
                        href: '#'
                    }, ia);
                    fa = h.tx._("{user1}, {user2}, and {=num more link} are typing...", {
                        user1: ea(y[0]),
                        user2: ea(y[1]),
                        '=num more link': ja
                    });
                    ga = true;
                }
                this._informStateChanged({
                    activity: 'typing',
                    text: fa,
                    typing: y,
                    tooltip: ga
                });
            }.bind(this));
            aa && this._informStateChanged({
                activity: 'none'
            });
        },
        _handleStateChange: function() {
            var y = i.LOG_MESSAGE;
            if (!this._lastMsg || this._lastMsg.action_type == y) {
                this._informStateChanged({
                    activity: 'none'
                });
                return;
            }
            if (this._typing && this._typing.length) {
                this._notifyTyping(this._typing);
                return;
            }
            if (this._canonicalUser && this._lastMsg.author != p.getID()) {
                this._notifySentFrom();
                return;
            }
            var z = j.getSeenBy(this._threadID, true);
            if (z.length)
                if (this._canonicalUser) {
                    this._notifySeenTimestamp(z);
                    return;
                } else {
                    this._notifySeenBy(z);
                    return;
                }
            this._informStateChanged({
                activity: 'none'
            });
        }
    });
    o.addRetroactiveListener('state-changed', function(y) {
        w.forEach(function(z) {
            var aa = y[z._threadID];
            if (aa !== undefined) {
                z._typing = aa;
                z._handleStateChange();
            }
        });
    });
    j.subscribe('state-changed', function(y, z) {
        w.forEach(function(aa) {
            z[aa._threadID] && aa._handleStateChange();
        });
    });
    e.exports = x;
}, null);
__d("MercuryThreadMetadataRawRenderer", ["Event", "CSS", "DOM", "MercuryActionStatus", "MercuryErrorInfo", "MercuryStatusTemplates", "Tooltip", "cx", "tx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = {
        renderParticipantListWithNoThreadName: function(r, s, t, u, v, w) {
            var x = {
                callback: true,
                check_length: true,
                show_unread_count: true
            };
            w = w || {};
            var y = {};
            for (var z in w)
                if (x[z]) {
                    y[z] = w[z];
                    delete w[z];
                }
            var aa = t.map(function(fa) {
                return u[fa];
            }), ba = this.renderRawParticipantList(r, aa, t.length, w);
            ba = this.renderRawTitleWithUnreadCount(ba, y.show_unread_count ? s.unread_count : 0);
            var ca = w.abbr_mode, da = {};
            for (var ea in w)
                da[ea] = w[ea];
            da.abbr_mode = true;
            v.forEach(function(fa) {
                var ga = v.length > 1 ? this._cloneIfDOMElement(ba): ba;
                i.setContent(fa, ga);
                if (y.check_length&&!ca && fa.scrollWidth > fa.clientWidth) {
                    var ha = this.renderRawParticipantList(r, aa, t.length, da), ia = this.renderRawTitleWithUnreadCount(ha, y.show_unread_count ? s.unread_count : 0);
                    i.setContent(fa, ia);
                }
            }.bind(this));
            y.callback && y.callback(ba);
        },
        renderRawParticipantList: function(r, s, t, u) {
            var v = {
                abbr_mode: true,
                last_separator_uses_and: true,
                names_renderer: true
            };
            u = u || {};
            var w = null;
            if (u.names_renderer) {
                w = u.names_renderer(s);
            } else 
                w = s.map(function(z) {
                    return z.name;
                });
            var x = null;
            if (w.length === 0) {
                if (!r) {
                    x = "New Message";
                } else 
                    x = "No Participants";
            } else if (w.length == 1) {
                x = w[0];
            } else if (w.length == 2) {
                var y = {
                    participant1: w[0],
                    participant2: w[1]
                };
                if (u.last_separator_uses_and) {
                    x = o._("{participant1} and {participant2}", y);
                } else 
                    x = o._("{participant1}, {participant2}", y);
            } else if (u.last_separator_uses_and) {
                if (u.abbr_mode) {
                    x = o._("{participant1} and {others_link}", {
                        participant1: w[0],
                        others_link: this.renderRawParticipantCount({
                            render_subset: true,
                            count: t - 1
                        })
                    });
                } else if (w.length == 3) {
                    x = o._("{participant1}, {participant2} and {participant3}", {
                        participant1: w[0],
                        participant2: w[1],
                        participant3: w[2]
                    });
                } else 
                    x = o._("{participant1}, {participant2} and {others_link}", {
                        participant1: w[0],
                        participant2: w[1],
                        others_link: this.renderRawParticipantCount({
                            render_subset: true,
                            count: t - 2
                        })
                    });
            } else if (w.length == 3) {
                x = o._("{participant1}, {participant2}, {participant3}", {
                    participant1: w[0],
                    participant2: w[1],
                    participant3: w[2]
                });
            } else 
                x = o._("{participant1}, {participant2}, {participant3}, {others_link}", {
                    participant1: w[0],
                    participant2: w[1],
                    participant3: w[2],
                    others_link: this.renderRawParticipantCount({
                        render_subset: true,
                        count: t - 3
                    })
                });
            if (Array.isArray(x))
                x = i.create('span', {}, x);
            return x;
        },
        renderRawTitleWithUnreadCount: function(r, s) {
            var t = r;
            if (s && s > 1)
                t = i.create('span', {}, o._("{conversation_title} ({unread_count})", {
                    conversation_title: r,
                    unread_count: s
                }));
            return t;
        },
        renderRawParticipantCount: function(r) {
            var s = r.render_subset, t;
            if (!s) {
                t = r.count > 1 ? o._("{num} people", {
                    num: r.count
                }) : "1 person";
            } else 
                t = r.count > 1 ? o._("{others_count} others", {
                    others_count: r.count
                }) : "1 other";
            return t;
        },
        renderShortNames: function(r) {
            if (r.length == 1)
                return [r[0].name];
            return r.map(function(s) {
                return s.short_name;
            });
        },
        renderStatusIndicator: function(r, s, t) {
            var u;
            if (r == j.RESENDING) {
                u = this.renderResendIndicator();
            } else if (r !== undefined && r != j.UNSENT && r != j.UNCONFIRMED && r != j.SUCCESS)
                u = this.renderErrorIndicator(s, t);
            return u;
        },
        renderResendIndicator: function() {
            return l[':fb:mercury:resend-indicator'].render();
        },
        renderErrorIndicator: function(r, s) {
            if (!r)
                return null;
            var t = l[':fb:mercury:error-indicator'].render(), u = r.is_transient, v = k.getMessage(r);
            if (u)
                if (k.isConnectionError(r)) {
                    v = p._("{message} Check your internet connection and click to try again.", [p.param("message", v)]);
                } else 
                    v = p._("{message} Click to send again.", [p.param("message", v)]);
            m.set(t, v, 'above', 'center');
            if (s && u) {
                g.listen(t, 'click', s);
                t.setAttribute('tabindex', '0');
                h.addClass(t, "_55q-");
            }
            return t;
        },
        _cloneIfDOMElement: function(r) {
            if (r && r.cloneNode) {
                return r.cloneNode();
            } else 
                return r;
        }
    };
    e.exports = q;
}, null);
__d("MercuryThreadSearchUtils", ["escapeRegex", "TokenizeUtil"], function(a, b, c, d, e, f, g, h) {
    var i = {
        wordsInString: function(j) {
            return (j || '').split(/\s+/).filter(function(k) {
                return k.trim().length > 0;
            });
        },
        anyMatchPredicate: function(j, k) {
            for (var l = 0; l < j.length; l++)
                if (k(j[l]))
                    return true;
            return false;
        },
        allMatchPredicate: function(j, k) {
            for (var l = 0; l < j.length; l++)
                if (!k(j[l]))
                    return false;
            return true;
        },
        queryWordMatchesAnyNameWord: function(j, k) {
            var l = new RegExp('\\b' + g(j), 'i');
            return this.anyMatchPredicate(k, function(m) {
                var n = h.parse(m).flatValue;
                return l.test(n);
            });
        },
        queryMatchesName: function(j, k) {
            var l = this.wordsInString(j), m = this.wordsInString(k);
            return this.allMatchPredicate(l, function(n) {
                return this.queryWordMatchesAnyNameWord(n, m);
            }.bind(this));
        }
    };
    e.exports = i;
}, null);
__d("Token", ["CSS", "DataStore", "DOM", "Locale", "UnicodeBidi", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    function m(n, o) {
        "use strict";
        this.info = n;
        this.paramName = o;
    }
    m.prototype.getInfo = function() {
        "use strict";
        return this.info;
    };
    m.prototype.getText = function() {
        "use strict";
        return this.info.text;
    };
    m.prototype.getValue = function() {
        "use strict";
        return this.info.uid;
    };
    m.prototype.isFreeform = function() {
        "use strict";
        return !!this.info.freeform;
    };
    m.prototype.setSelected = function(n) {
        "use strict";
        g.conditionClass(this.getElement(), 'uiTokenSelected', n);
        return this;
    };
    m.prototype.getElement = function() {
        "use strict";
        if (!this.element)
            this.setElement(this.createElement());
        return this.element;
    };
    m.prototype.setElement = function(n) {
        "use strict";
        h.set(n, 'Token', this);
        this.element = n;
        return this;
    };
    m.prototype.isRemovable = function() {
        "use strict";
        return g.hasClass(this.element, 'removable');
    };
    m.prototype.getTextDirection = function() {
        "use strict";
        var n = k.isDirectionRTL(this.getText()), o = j.isRTL();
        if (n&&!o)
            return 'rtl';
        if (!n && o)
            return 'ltr';
        return null;
    };
    m.prototype.createElement = function(n, o) {
        "use strict";
        var p = this.paramName, q = this.getText(), r = this.getValue(), s = i.create('a', {
            href: '#',
            'aria-label': l._("Remove {item}", {
                item: q
            }),
            className: 'remove uiCloseButton uiCloseButtonSmall'
        });
        if (n)
            g.addClass(s, 'uiCloseButtonSmallGray');
        var t = i.create('input', {
            type: 'hidden',
            value: r,
            name: p + '[]',
            autocomplete: 'off'
        }), u = i.create('input', {
            type: 'hidden',
            value: q,
            name: 'text_' + p + '[]',
            autocomplete: 'off'
        }), v = {
            className: 'removable uiToken'
        }, w = this.getTextDirection();
        if (w !== null)
            v.dir = w;
        var x = i.create('span', v, [q, t, u, s]);
        if (n)
            g.addClass(x, 'uiTokenGray');
        if (o) {
            var y = i.create('i', {
                className: o
            });
            i.prependContent(x, y);
        }
        return x;
    };
    e.exports = m;
}, null);
__d("WeakToken", ["CSS", "Token"], function(a, b, c, d, e, f, g, h) {
    for (var i in h)
        if (h.hasOwnProperty(i))
            k[i] = h[i];
    var j = h === null ? null: h.prototype;
    k.prototype = Object.create(j);
    k.prototype.constructor = k;
    k.__superConstructor__ = h;
    function k() {
        "use strict";
        if (h !== null)
            h.apply(this, arguments);
    }
    k.prototype.createElement = function() {
        "use strict";
        var l = j.createElement.call(this, true, 'UFIWeakReferenceIcon');
        g.addClass(l, 'uiTokenWeakReference');
        return l;
    };
    e.exports = k;
}, null);
__d("Tokenizer", ["Arbiter", "ArbiterMixin", "CSS", "DataStore", "DOM", "DOMQuery", "Event", "Focus", "Input", "Keys", "Parent", "StickyPlaceholderInput", "Style", "TextMetrics", "Token", "UserAgent_DEPRECATED", "WeakToken", "copyProperties", "createObjectFrom", "emptyFunction", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa) {
    var ba = 20, ca = aa(h);
    for (var da in ca)
        if (ca.hasOwnProperty(da))
            fa[da] = ca[da];
    var ea = ca === null ? null: ca.prototype;
    fa.prototype = Object.create(ea);
    fa.prototype.constructor = fa;
    fa.__superConstructor__ = ca;
    function fa(ga, ha, ia) {
        "use strict";
        this.element = ga;
        this.typeahead = ha;
        this.input = ha.getCore().getElement();
        if (ia)
            this.init(ia.tokenarea, ia.param_name, ia.initial_info, ia.options);
        j.set(this.element, 'Tokenizer', this);
    }
    fa.prototype.init = function(ga, ha, ia, ja) {
        "use strict";
        this.init = z;
        this.tokenarea = ga;
        this.paramName = ha;
        if (!this.placeholder)
            this.placeholder = this.input.getAttribute('data-placeholder') || '';
        x(this, ja || {});
        this.initEvents();
        this.initTypeahead();
        this.reset(ia);
        this.initBehaviors();
        setTimeout(this.adjustWidth.bind(this), 0);
        g.inform('Tokenizer/init', this, g.BEHAVIOR_PERSISTENT);
        this.inform('init', {
            tokens: this.getTokens()
        });
    };
    fa.prototype.reset = function(ga) {
        "use strict";
        this.tokens = [];
        this.unique = {};
        if (ga) {
            this.populate(ga);
        } else 
            k.empty(this.tokenarea);
        this.updateTokenarea();
    };
    fa.prototype.populate = function(ga) {
        "use strict";
        var ha = [];
        this.tokens = this.getTokenElements().map(function(ia, ja) {
            var ka = ga[ja];
            ha.push(this._tokenKey(ka));
            return this.createToken(ka, ia);
        }, this);
        this.unique = y(ha, this.tokens);
    };
    fa.prototype.getElement = function() {
        "use strict";
        return this.element;
    };
    fa.prototype.getTypeahead = function() {
        "use strict";
        return this.typeahead;
    };
    fa.prototype.getInput = function() {
        "use strict";
        return this.input;
    };
    fa.prototype.initBehaviors = function() {
        "use strict";
        this.behaviors = this.behaviors || [];
        if (this.behaviors instanceof Array) {
            this.behaviors.forEach(function(ia) {
                ia.behavior(this, ia.config);
            }.bind(this));
        } else 
            for (var ga in (this.behaviors || {})) {
                var ha = window.TokenizerBehaviors && window.TokenizerBehaviors[ga];
                ha.call(null, this, this.behaviors[ga]);
            }
    };
    fa.prototype.initTypeahead = function() {
        "use strict";
        var ga = this.typeahead.getCore();
        ga.resetOnSelect = true;
        ga.setValueOnSelect = false;
        ga.preventFocusChangeOnTab = true;
        if (this.inline) {
            var ha = this.typeahead.getView();
            i.addClass(ha.getElement(), 'uiInlineTokenizerView');
        }
        this.typeahead.subscribe('select', function(ia, ja) {
            var ka = ja.selected;
            if ('uid' in ka) {
                this.updateInput();
                this.addToken(this.createToken(ka));
            }
        }.bind(this));
        this.typeahead.subscribe('blur', this.handleBlur.bind(this));
    };
    fa.prototype.handleBlur = function(event) {
        "use strict";
        this.inform('blur', {
            event: event
        });
        this.updatePlaceholder();
    };
    fa.prototype.initEvents = function() {
        "use strict";
        var ga = this.handleEvents.bind(this), ha = v.firefox() < 4 ? 'keypress': 'keydown';
        m.listen(this.tokenarea, {
            click: ga,
            keydown: ga
        });
        m.listen(this.input, 'paste', this.paste.bind(this));
        m.listen(this.input, ha, this.keydown.bind(this));
    };
    fa.prototype.handleEvents = function(event) {
        "use strict";
        var ga = event.getTarget(), ha = ga && this.getTokenElementFromTarget(ga);
        if (!ha)
            return;
        if (event.type != 'keydown' || m.getKeyCode(event) == p.RETURN)
            this.processEvents(event, ga, ha);
    };
    fa.prototype.processEvents = function(event, ga, ha) {
        "use strict";
        if (q.byClass(ga, 'remove')) {
            var ia = ha.nextSibling;
            ia = ia && l.scry(ha.nextSibling, '.remove')[0];
            var ja = this.getTokenFromElement(ha);
            ja = this.addTokenData(ja, ga);
            this.removeToken(ja);
            this.focusOnTokenRemoval(event, ia);
            event.kill();
        }
    };
    fa.prototype.focusOnTokenRemoval = function(event, ga) {
        "use strict";
        n.set(event.type == 'keydown' && ga || this.input);
    };
    fa.prototype.addTokenData = function(ga, ha) {
        "use strict";
        return ga;
    };
    fa.prototype.keydown = function(event) {
        "use strict";
        this.inform('keydown', {
            event: event
        });
        var ga = m.getKeyCode(event), ha = this.input;
        if (this.inline && ga == p.BACKSPACE && o.isEmpty(ha)) {
            var ia = this.getLastToken();
            if (ia && ia.isRemovable())
                this.removeToken(ia);
        }
        this.updateInput();
    };
    fa.prototype.paste = function(event) {
        "use strict";
        this.inform('paste', {
            event: event
        });
        this.updateInput(true);
    };
    fa.prototype.focusInput = function() {
        "use strict";
        n.set(this.input);
    };
    fa.prototype.updateInput = function(ga) {
        "use strict";
        if (!this.inline)
            return;
        setTimeout(function() {
            this.adjustWidth(this.input.value);
            if (ga)
                this.input.value = this.input.value;
        }.bind(this), 20);
        r.setPlaceholderText(this.input, '');
        this.inform('resize');
    };
    fa.prototype.setPlaceholder = function(ga) {
        "use strict";
        this.placeholder = ga;
        if (this.stickyPlaceholder)
            r.setPlaceholderText(this.input, ga);
        this.updatePlaceholder();
    };
    fa.prototype.updatePlaceholder = function() {
        "use strict";
        if (!this.inline || this.input.value)
            return;
        var ga=!this.tokens.length, ha = '';
        if (ga || this.stickyPlaceholder) {
            this.adjustWidth(this.placeholder);
            ha = this.placeholder;
        } else 
            this.adjustWidth(this.input.value);
        r.setPlaceholderText(this.input, ha);
    };
    fa.prototype.adjustWidth = function(ga) {
        "use strict";
        if (!this.inline ||!this._getIsInDOM())
            return;
        if (!ga && this.input.value === '')
            ga = this.placeholder;
        var ha = ba;
        if (ga !== this.placeholder ||!this.getTokens().length || this.stickyPlaceholder) {
            var ia = s.getFloat(this.getElement(), 'width'), ja = this._getMetrics().measure(ga);
            ha = ja.width + this._getWidthOffset() + 10;
            ha = (ha >= ia) ? ia : ha;
        }
        s.set(this.input, 'width', ha + 'px');
        this.inform('resize');
        g.inform('reflow');
    };
    fa.prototype.getToken = function(ga) {
        "use strict";
        return this.unique[ga] || null;
    };
    fa.prototype.getTokens = function() {
        "use strict";
        return this.tokens || [];
    };
    fa.prototype.getTokenElements = function() {
        "use strict";
        return l.scry(this.tokenarea, 'span.uiToken');
    };
    fa.prototype.getTokenElementFromTarget = function(ga) {
        "use strict";
        return q.byClass(ga, 'uiToken');
    };
    fa.prototype.getTokenFromElement = function(ga) {
        "use strict";
        return j.get(ga, 'Token');
    };
    fa.prototype.getTokenValues = function() {
        "use strict";
        if (!this.tokens)
            return [];
        return this.tokens.map(function(ga) {
            return ga.getValue();
        });
    };
    fa.prototype.getFirstToken = function() {
        "use strict";
        return this.tokens[0] || null;
    };
    fa.prototype.getLastToken = function() {
        "use strict";
        return this.tokens[this.tokens.length - 1] || null;
    };
    fa.prototype.hasMaxTokens = function() {
        "use strict";
        return this.maxTokens && this.maxTokens <= this.tokens.length;
    };
    fa.prototype.createToken = function(ga, ha) {
        "use strict";
        var ia = this.getToken(this._tokenKey(ga));
        if (!ia)
            ia = ga.weak_reference ? new w(ga, this.paramName) : new u(ga, this.paramName);
        ha && ia.setElement(ha);
        return ia;
    };
    fa.prototype.addToken = function(ga) {
        "use strict";
        if (this.hasMaxTokens())
            return;
        var ha = this._tokenKey(ga.getInfo());
        if (ha in this.unique)
            return;
        this.unique[ha] = ga;
        this.tokens.push(ga);
        this.insertToken(ga);
        this.updateTokenarea();
        this.inform('addToken', ga);
        this.inform('changeTokens');
        g.inform('Form/change', {
            node: this.element
        });
    };
    fa.prototype.insertToken = function(ga) {
        "use strict";
        k.appendContent(this.tokenarea, ga.getElement());
    };
    fa.prototype.removeToken = function(ga) {
        "use strict";
        if (!ga)
            return;
        var ha = this.tokens.indexOf(ga);
        if (ha < 0)
            return;
        this.tokens.splice(this.tokens.indexOf(ga), 1);
        delete this.unique[this._tokenKey(ga.getInfo())];
        k.remove(ga.getElement());
        this.updateTokenarea();
        this.inform('removeToken', ga);
        this.inform('changeTokens');
        g.inform('Form/change', {
            node: this.element
        });
    };
    fa.prototype.removeAllTokens = function() {
        "use strict";
        this.reset();
        this.inform('changeTokens');
        this.inform('removeAllTokens');
    };
    fa.prototype.updateTokenarea = function() {
        "use strict";
        var ga = this.typeahead.getCore(), ha = this.getTokenValues();
        if (this.excludeDuplicates) {
            this._exclusions || (this._exclusions = ga.getExclusions());
            ga.setExclusions(ha.concat(this._exclusions));
        }
        ga.setEnabled(!this.hasMaxTokens());
        this.updateTokenareaVisibility();
        this.updatePlaceholder();
        this.inform('resize');
        g.inform('reflow');
    };
    fa.prototype.updateTokenareaVisibility = function() {
        "use strict";
        i.conditionShow(this.tokenarea, this.tokens.length !== 0);
    };
    fa.prototype._tokenKey = function(ga) {
        "use strict";
        return ga.uid + (ga.freeform ? ':' : '');
    };
    fa.prototype._getWidthOffset = function() {
        "use strict";
        if (this._widthOffset === null) {
            var ga = this.input.clientWidth, ha = s.getFloat(this.input, 'width');
            if (ga == ha) {
                this._widthOffset = s.getFloat(this.input, 'paddingLeft') + s.getFloat(this.input, 'paddingRight');
            } else 
                this._widthOffset = 0;
        }
        return this._widthOffset;
    };
    fa.prototype._getMetrics = function() {
        "use strict";
        if (!this._metrics)
            this._metrics = new t(this.input, this.inline);
        return this._metrics;
    };
    fa.prototype._getIsInDOM = function() {
        "use strict";
        return this._isInDOM || (this._isInDOM = l.contains(document.body, this.input));
    };
    fa.getInstance = function(ga) {
        "use strict";
        var ha = q.byClass(ga, 'uiTokenizer');
        return ha ? j.get(ha, 'Tokenizer') : null;
    };
    fa.init = function(ga, ha) {
        "use strict";
        ga.init(ha.tokenarea, ha.param_name, ha.initial_info, ha.options);
    };
    x(fa.prototype, {
        inline: false,
        maxTokens: null,
        excludeDuplicates: true,
        placeholder: '',
        _widthOffset: null,
        _metrics: null
    });
    e.exports = fa;
}, null);
__d("LinkshimHandler", ["Event", "LinkshimAsyncLink", "LinkshimHandlerConfig", "URI", "XLinkshimLogControllerURIBuilder", "shield"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = {
        setUpLinkshimHandling: function(s) {
            try {
                var u = j(s.getAttribute('href')), v = n(u);
                if (v && o(u)) {
                    g.listen(s, 'mouseover', l(h.swap, null, s, v));
                    var w = q(u);
                    g.listen(s, 'click', function() {
                        if (i.supports_meta_referrer) {
                            h.referrer_log(s, w, p(u).toString());
                        } else 
                            h.swap(s, u);
                    });
                }
            } catch (t) {}
        }
    };
    function n(s) {
        return s.getQueryData().u ? new j(s.getQueryData().u) : null;
    }
    function o(s) {
        return s.getQueryData().hasOwnProperty('s');
    }
    function p(s) {
        var t = s.getQueryData().hasOwnProperty('enc') ? s.getQueryData().enc: '';
        return (new k()).setString('u', s.getQueryData().u).setString('h', s.getQueryData().h).setBool('render_verification', s.getQueryData().hasOwnProperty('render_verification')).setString('enc', t).getURI();
    }
    function q(s) {
        var t;
        if (r()) {
            t = j(s).addQueryData({
                render_verification: true
            });
        } else 
            t = n(s);
        return t;
    }
    function r() {
        var s = i.render_verification_rate || 0;
        return Math.floor(Math.random() * s + 1) === s;
    }
    e.exports = m;
}, null);
__d("XPhotosWaterfallBatchLoggingControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/photos\/logging\/waterfall\/batch\/", {});
}, null);
__d("PhotosUploadWaterfall", ["AsyncRequest", "AsyncSignal", "Banzai", "PhotosUploadWaterfallXConfig", "XPhotosWaterfallBatchLoggingControllerURIBuilder", "emptyFunction", "randomInt", "throttle"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = [], p = {
        APP_FLASH: 'flash_pro',
        APP_SIMPLE: 'simple',
        APP_ARCHIVE: 'archive',
        APP_COMPOSER: 'composer',
        APP_MESSENGER: 'messenger',
        APP_HTML5: 'html5',
        APP_CHAT: 'chat',
        INSTALL_CANCEL: 1,
        INSTALL_INSTALL: 2,
        INSTALL_UPDATE: 3,
        INSTALL_REINSTALL: 4,
        INSTALL_PERMA_CANCEL: 5,
        INSTALL_SILENT_SKIP: 6,
        INSTALL_DOWNLOAD: 7,
        CERROR_RESIZING_FAILED: 6,
        CERROR_MARKER_EXTRACTION_FAILED: 9,
        BEGIN: 1,
        UPLOAD_START: 4,
        ALL_UPLOADS_DONE: 6,
        CLIENT_ERROR: 7,
        RECOVERABLE_CLIENT_ERROR: 12,
        IMAGES_SELECTED: 9,
        UPGRADE_REQUIRED: 11,
        VERSION: 15,
        SELECT_START: 18,
        SELECT_CANCELED: 19,
        CANCEL: 22,
        CANCEL_DURING_UPLOAD: 83,
        ONE_RESIZING_START: 2,
        ONE_UPLOAD_START: 10,
        ONE_UPLOAD_DONE: 29,
        ONE_RESIZING_DONE: 34,
        PROGRESS_BAR_STOPPED: 44,
        MISSED_BEAT: 45,
        HEART_ATTACK: 46,
        PUBLISH_SENT: 99,
        PUBLISH_START: 100,
        PUBLISH_SUCCESS: 101,
        PUBLISH_FAILURE: 102,
        CLUSTERING_START: 103,
        CLUSTERING_SUCCESS: 104,
        CLUSTERING_FAILURE: 105,
        POST_BUTTON_CLICKED: 110,
        POST_BUTTON_ERROR: 111,
        PHOTO_DELETED: 114,
        PUBLISH_CLIENT_SUCCESS: 115,
        PHOTO_ROTATED: 117,
        SAVE_DRAFT_BUTTON_CLICKED: 123,
        RECOVERY_START_ON_CLIENT: 124,
        CHANGE_PHOTO_QUALITY_SETTING: 126,
        EDITABLE_PHOTO_FETCH_START: 106,
        EDITABLE_PHOTO_FETCH_SUCCESS: 107,
        EDITABLE_PHOTO_FETCH_FAILURE: 108,
        EDITABLE_PHOTO_FETCH_DELAY: 116,
        CANCEL_INDIVIDUAL_UPLOAD: 109,
        MISSING_OVERLAY_NODE: 118,
        PUBLISH_RETRY_FAILURE: 119,
        MISSING_UPLOAD_STATE: 120,
        SESSION_POSTED: 72,
        POST_PUBLISHED: 80,
        ONE_UPLOAD_CANCELED: 81,
        ONE_UPLOAD_CANCELED_DURING_UPLOAD: 82,
        RESIZER_AVAILABLE: 20,
        OVERLAY_FIRST: 61,
        ASYNC_AVAILABLE: 63,
        FALLBACK_TO_FLASH: 13,
        RETRY_UPLOAD: 17,
        TAGGED_ALL_FACES: 14,
        VAULT_IMAGES_SELECTED: 62,
        VAULT_CREATE_POST_CANCEL: 65,
        VAULT_SEND_IN_MESSAGE_CLICKED: 66,
        VAULT_DELETE_CANCEL: 68,
        VAULT_ADD_TO_ALBUM_CANCEL: 74,
        VAULT_SHARE_IN_AN_ALBUM_CLICKED: 76,
        VAULT_SHARE_OWN_TIMELINE_CLICKED: 77,
        VAULT_SHARE_FRIENDS_TIMELINE_CLICKED: 78,
        VAULT_SHARE_IN_A_GROUP_CLICKED: 79,
        VAULT_SYNCED_PAGED_LINK_CLICKED: 84,
        VAULTBOX: 'vaultbox',
        GRID: 'grid',
        SPOTLIGHT_VAULT_VIEWER: 'spotlight_vault_viewer',
        REF_VAULT_NOTIFICATION: 'vault_notification',
        _checkRequiredFields: function(r) {},
        sendBanzai: function(r, s) {
            this._checkRequiredFields(r);
            var t = {};
            r.scuba_ints = r.scuba_ints || {};
            r.scuba_ints.client_time = Math.round(Date.now() / 1000);
            if (j.retryBanzai) {
                t.retry = true;
                r.scuba_ints.nonce = m(4294967296);
            }
            i.post(j.deprecatedBanzaiRoute, r, t);
            if (s)
                setTimeout(s, 0);
        },
        sendSignal: function(r, s) {
            this._checkRequiredFields(r);
            if (j.useBanzai) {
                this.sendBanzai(r, s);
            } else if (j.reduceLoggingRequests) {
                this.queueLog(r, s);
            } else {
                var t = new h('/ajax/photos/waterfall.php', {
                    data: JSON.stringify(r)
                }).setHandler(s);
                if (j.timeout)
                    t.setTimeout(10 * 1000);
                t.send();
            }
        },
        queueLog: function(r, s) {
            o.push(r);
            if (!!s) {
                this.flushQueue(s);
            } else 
                q();
        },
        flushQueue: function(r) {
            var s = JSON.stringify(o);
            o = [];
            var t = new k().getURI();
            new g().setURI(t).setData({
                logs: s
            }).setFinallyHandler(r || l).setTimeoutHandler(10 * 1000, r || l).send();
        }
    }, q = n(p.flushQueue, j.batchInterval * 1000);
    e.exports = p;
}, null);
__d("WebAsyncSearchSource", ["AbstractAsyncSearchSource", "AbstractSearchSource", "AsyncRequest", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j) {
    for (var k in h)
        if (h.hasOwnProperty(k))
            m[k] = h[k];
    var l = h === null ? null: h.prototype;
    m.prototype = Object.create(l);
    m.prototype.constructor = m;
    m.__superConstructor__ = h;
    function m(n) {
        "use strict";
        this.$WebAsyncSearchSource0 = new g(n, this.$WebAsyncSearchSource1, this.$WebAsyncSearchSource2);
    }
    m.prototype.bootstrapImpl = function(n) {
        "use strict";
        this.$WebAsyncSearchSource0.bootstrap(n);
    };
    m.prototype.searchImpl = function(n, o, p) {
        "use strict";
        this.$WebAsyncSearchSource0.search(n, o, p);
    };
    m.prototype.getBootstrappedEntries = function(n) {
        "use strict";
        return this.$WebAsyncSearchSource0.getBootstrappedEntries(n);
    };
    m.prototype.getAllEntriesMap = function() {
        "use strict";
        return this.$WebAsyncSearchSource0.getAllEntriesMap();
    };
    m.prototype.$WebAsyncSearchSource1 = function(n, o, p, q) {
        "use strict";
        new i(o.uri).setData(j({}, n, o.data)).setMethod('GET').setReadOnly(true).setAllowCrossPageTransition(true).setHandler(p).setErrorHandler(q).send();
    };
    m.prototype.$WebAsyncSearchSource2 = function(n, o) {
        "use strict";
        var p = n.getPayload(), q;
        if (Array.isArray(p)) {
            q = p;
        } else if (p && p.entries) {
            q = p.entries;
        } else 
            q = [];
        return q.map(o, this);
    };
    e.exports = m;
}, null);
__d("StickersDispatcher", ["Dispatcher", "StickerConstants", "copyProperties", "merge"], function(a, b, c, d, e, f, g, h, i, j) {
    'use strict';
    var k = i(new g(), {
        _handleUpdate: function(l, m) {
            var n = j({
                payloadSource: l
            }, m);
            this.dispatch(n);
        },
        handleUpdateFromViewActions: function(l) {
            this._handleUpdate(h.PayloadSource.VIEW_ACTION, l);
        }
    });
    e.exports = k;
}, null);
__d("StickerState", ["ImmutableObject", "StickerConfig", "PresenceState", "StickerConstants", "StickerImages", "StickersDispatcher", "StickerServerRequests", "mixInEventEmitter"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    'use strict';
    var o = {}, p, q, r, s = null, t = 0, u = {}, v = [], w = [], x = [], y = null, z = i.get();
    if (z)
        y = z.tray_pack_id;
    var aa = h.ShowStickerReplyNUX, ba = h.ShowStickerSearchNUXIndicator, ca = h.ShowStickerSearchNUXTooltip, da = {
        onTrayDataReady: function(ga) {
            if (!q)
                q = m.fetchTrayData(function(ha) {
                    v = ha.packs.map(function(ia) {
                        return ea(ia);
                    });
                    r = ha.mru;
                    t = ha.num_new_packs;
                    x = ha.tags;
                });
            q.then(ga);
        },
        onStoreDataReady: function(ga) {
            if (!p)
                p = m.fetchStoreData(function(ha) {
                    w = ha.packs.map(function(ia) {
                        return ea(ia);
                    });
                });
            p.then(ga);
        },
        onPackDataReady: function(ga, ha) {
            if (!o[ga])
                o[ga] = m.fetchPackData(ga, function(ia) {
                    ea(ia);
                });
            o[ga].then(ha);
        },
        getPacksInTray: function() {
            return v;
        },
        getPacksInCommentsTray: function() {
            var ga = [], ha = [], ia;
            for (var ja = 0; ja < v.length; ja++)
                if (v[ja].isSearch) {
                    continue;
                } else if (v[ja].id == j.EMOTICON_PACK_ID) {
                    ia = v[ja];
                } else if (v[ja].isMessengerOnly) {
                    ha.push(v[ja]);
                } else 
                    ga.push(v[ja]);
            var ka = ga.concat(ha);
            if (ia)
                ka.push(ia);
            return ka;
        },
        getPackIDsInTray: function() {
            return v.map(function(ga) {
                return ga.id;
            });
        },
        getPacksInStore: function() {
            return w;
        },
        getPack: function(ga) {
            return u[ga];
        },
        getNumNewPacks: function() {
            return t;
        },
        getFeaturedTags: function() {
            return x;
        },
        resetNumNewPacks: function() {
            if (t) {
                t = 0;
                this.emit(this.NUM_NEW_PACKS_CHANGED, 0);
            }
        },
        addMRUPack: function() {
            if (r) {
                this._addPackToTray(r);
                r = null;
            }
        },
        addPack: function(ga) {
            var ha = false;
            if (u[ga])
                ha = u[ga].isPromoted;
            m.addPack(ga, ha, function(ia) {
                this._addPackToTray(ia);
            }.bind(this));
        },
        removePack: function(ga) {
            m.removePack(ga, function(ha) {
                v = v.filter(function(ia) {
                    return ia.id !== ha;
                });
                u[ha] = g.set(u[ha], {
                    isInTray: false
                });
                w = w.map(function(ia) {
                    return u[ia.id];
                });
                this.emit(this.PACKS_CHANGED, ha);
            }.bind(this));
        },
        setTrayPackID: function(ga) {
            y = ga;
            i.doSync();
            this.emit(da.PACK_SELECTED, ga);
        },
        getTrayPackID: function() {
            return y;
        },
        shouldShowStickerReplyNUX: function() {
            return aa;
        },
        clearShowStickerReplyNUX: function() {
            aa = false;
        },
        shouldShowStickerSearchNUXIndicator: function() {
            return ba;
        },
        shouldShowStickerSearchNUXTooltip: function() {
            return ca;
        },
        clearShowStickerSearchNUXIndicator: function() {
            m.markSeenSearchNUX();
            ba = false;
        },
        _addPackToTray: function(ga, ha) {
            ea(ga);
            u[ga.id] = g.set(u[ga.id], {
                isPurchased: !ha,
                isInTray: true
            });
            var ia = v.filter(function(ka) {
                return ka.id === ga.id;
            }).length > 0;
            if (!ia) {
                var ja;
                if (!ha) {
                    ja = v.filter(function(ka) {
                        return ka.isMRU || ka.isSearch;
                    }).length;
                } else 
                    ja = v.filter(function(ka) {
                        return ka.id !== j.EMOTICON_PACK_ID;
                    }).length;
                v.splice(ja, 0, u[ga.id]);
            }
            w = w.map(function(ka) {
                return u[ka.id];
            });
            this.emit(this.PACKS_CHANGED, ga.id);
        },
        _addRecentlyUsedSticker: function(ga) {
            for (var ha = 0; ha < s.length; ++ha)
                if (s[ha].id === ga.id) {
                    s.splice(ha, 1);
                    break;
                }
            s.unshift(ga);
        },
        getMRUStickerPack: function(ga) {
            if (!s)
                s = ga;
            return s;
        },
        updateRecentlyUsed: function(ga) {
            if (!s) {
                this.addMRUPack();
                return;
            }
            this._addRecentlyUsedSticker(k.getSticker(ga));
        },
        promotePackSentFromSearch: function(ga) {
            m.promotePackSentFromSearch(ga, function(ha) {
                return ha && this._addPackToTray(ha, true);
            }.bind(this));
        }
    };
    l.register(function(ga) {
        if (ga.actions && ga.actions.length) {
            var ha = j.ActionTypes;
            ga.actions.forEach(function(ia) {
                switch (ia.actionType) {
                case ha.ADD_PACK:
                    da.addPack(ia.packID);
                    break;
                case ha.REMOVE_PACK:
                    da.removePack(ia.packID);
                    break;
                case ha.SELECT_PACK:
                    da.setTrayPackID(ia.packID);
                    break;
                case ha.RESET_NUM_NEW_PACKS:
                    da.resetNumNewPacks();
                    break;
                }
            });
        }
    });
    da.PACKS_CHANGED = 'StickerState/packsChanged';
    da.PACK_SELECTED = 'StickerState/packSelected';
    da.NUM_NEW_PACKS_CHANGED = 'StickerState/numNewPacksChanged';
    i.registerStateStorer(function(ga) {
        ga.tray_pack_id = y;
    });
    function ea(ga) {
        var ha = ga.id;
        if (!u[ha]) {
            return (u[ha] = new g(ga));
        } else 
            return (u[ha] = g.set(u[ha], ga));
    }
    var fa = {};
    fa[da.PACK_SELECTED] = true;
    fa[da.PACKS_CHANGED] = true;
    fa[da.NUM_NEW_PACKS_CHANGED] = true;
    n(da, fa);
    e.exports = da;
}, null);
__d("StickersFlyoutTriggerSelector.react", ["React", "Sticker.react", "StickerUtils", "XUIContextualDialog.react", "XUICloseButton.react", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    'use strict';
    var m = 84, n = g.createClass({
        displayName: "StickersFlyoutTriggerSelector",
        getDefaultProps: function() {
            return {
                stickers: []
            };
        },
        propTypes: {
            context: g.PropTypes.object.isRequired,
            stickers: g.PropTypes.array,
            onStickerSelect: g.PropTypes.func.isRequired
        },
        shouldComponentUpdate: function(o) {
            if (this.props.stickers.length !== o.stickers.length)
                return true;
            for (var p = 0; p < Math.min(this.props.stickers.length, 5); p++)
                if (this.props.stickers[p].id !== o.stickers[p].id)
                    return true;
            return false;
        },
        _renderStickers: function() {
            if (!this.props.stickers || this.props.stickers.length === 0)
                return null;
            var o = Math.floor(Math.random() * Math.min(this.props.stickers.length, 5)), p = this.props.stickers[o], q = i.getScaledDimensions(p.height, p.width);
            return (g.createElement("div", null, g.createElement(k, {
                size: "small",
                className: "_2ohj",
                onClick: this.props.onDismissTrigger
            }), g.createElement("div", {
                className: "_5r8h _onc",
                "data-id": p.id,
                onClick: function() {
                    return this.props.onStickerSelect(p.id);
                }.bind(this)
            }, g.createElement(h, {
                animationTrigger: "hover",
                className: "_5r8i",
                frameCount: p.frameCount,
                frameRate: p.frameRate || 83,
                framesPerCol: p.framesPerCol,
                framesPerRow: p.framesPerRow,
                sourceHeight: q.height,
                sourceURI: p.sourceURI,
                sourceWidth: q.width,
                spriteURI: p.spriteURI,
                paddedSpriteURI: p.paddedSpriteURI,
                stickerID: p.id,
                style: {
                    cursor: 'pointer',
                    height: '64px'
                }
            }))));
        },
        render: function() {
            return (g.createElement(j, {
                alignment: "left",
                autoFocus: false,
                context: this.props.context,
                onBlur: this._resetFlyout,
                offsetY: 11,
                position: "above",
                shown: this.props.stickers && this.props.stickers.length > 0,
                width: m
            }, this._renderStickers()));
        }
    });
    e.exports = n;
}, null);
__d("ProgressBarBase", ["emptyFunction", "requestAnimationFrame", "removeFromArray", "arrayContains"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = [];
    function l(m, n) {
        "use strict";
        this._min = m || 0;
        this._max = n || 100;
        this._initialPosition = 0;
        this._position = 0;
        this._initialVelocity = 0;
        this._velocity = 0;
        this._acceleration = 0;
        this.useAcceleration = true;
        this._targetPosition = 0;
        this._targetTime = 0;
        this._startTime = null;
        this._onComplete = g;
    }
    l.prototype.setPosition = function(m) {
        "use strict";
        m = this._normalizePosition(m);
        this._initialPosition = m;
        this._position = m;
        this.updateMeter(this._position);
        this.stop();
        return this;
    };
    l.prototype.setCompleteHandler = function(m) {
        "use strict";
        this._onComplete = m || g;
        return this;
    };
    l.prototype.setTarget = function(m, n) {
        "use strict";
        this._stopAnimating();
        this._clearOnCompleteTimeout();
        this._targetPosition = m;
        var o = this._normalizePosition(m);
        this._targetTime = n;
        this._initialVelocity = this._velocity;
        this._initialPosition = this._position;
        if (this.useAcceleration) {
            this._acceleration = 2 * (o - this._initialPosition - this._initialVelocity * n) / (n * n);
        } else {
            this._acceleration = 0;
            this._velocity = this._initialVelocity = (o - this._initialPosition) / n;
        }
        if (this._position >= o) {
            this._onComplete();
        } else 
            this._start();
        return this;
    };
    l.prototype.setNoAcceleration = function(m) {
        "use strict";
        this.useAcceleration=!m;
        return this;
    };
    l.prototype._clearOnCompleteTimeout = function() {
        "use strict";
        a.clearTimeout(this._onCompleteTimeout);
    };
    l.prototype.stop = function() {
        "use strict";
        this._clearOnCompleteTimeout();
        this._velocity = 0;
        this._initialVelocity = 0;
        this._acceleration = 0;
        this._stopAnimating();
        return this;
    };
    l.prototype._start = function() {
        "use strict";
        this._startTime = Date.now();
        this._onCompleteTimeout = a.setTimeout(function() {
            this.setPosition(this._targetPosition);
            this._onComplete();
        }.bind(this), this._targetTime);
        this._startAnimating();
        return this;
    };
    l.prototype._loop = function() {
        "use strict";
        var m = Date.now() - this._startTime;
        this._position = (.5 * this._acceleration * m * m) + (this._initialVelocity * m) + this._initialPosition;
        var n = this._velocity;
        this._velocity = this._acceleration * m + this._initialVelocity;
        var o = n < 0 !== this._velocity < 0;
        if (this._position > this._normalizePosition(this._targetPosition) || o) {
            this.setPosition(this._targetPosition);
            this._onComplete();
        } else 
            this.updateMeter(this._position);
    };
    l.prototype.updateMeter = function(m) {
        "use strict";
        throw "Unimplemented function: updateMeter";
    };
    l.prototype._normalizePosition = function(m) {
        "use strict";
        return Math.min(Math.max((m - this._min) / (this._max - this._min), 0), 1);
    };
    l.prototype._startAnimating = function() {
        "use strict";
        if (!j(k, this)) {
            k.push(this);
            if (k.length === 1)
                h(l.prototype._requestAnimationFrameCallback);
        }
    };
    l.prototype._stopAnimating = function() {
        "use strict";
        i(k, this);
    };
    l.prototype._requestAnimationFrameCallback = function() {
        "use strict";
        k.forEach(function(m) {
            m._loop();
        });
        if (k.length)
            h(l.prototype._requestAnimationFrameCallback);
    };
    l.setPosition = function(m, n) {
        "use strict";
        m.setPosition(n);
    };
    l.setTarget = function(m, n, o) {
        "use strict";
        m.setTarget(n, o);
    };
    e.exports = l;
}, null);
__d("ProgressBar", ["ProgressBarBase", "CSS", "Style", "cx", "csx", "DOM"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    for (var m in g)
        if (g.hasOwnProperty(m))
            o[m] = g[m];
    var n = g === null ? null: g.prototype;
    o.prototype = Object.create(n);
    o.prototype.constructor = o;
    o.__superConstructor__ = g;
    function o(p, q, r) {
        "use strict";
        g.call(this, q, r);
        this._root = p;
        this._meter = l.find(p, "div._5e4k");
        this._meter2 = l.scry(p, "div._5e2g")[0];
    }
    o.prototype.getRoot = function() {
        "use strict";
        return this._root;
    };
    o.prototype.updateMeter = function(p) {
        "use strict";
        var q = Math.min(Math.max(p, 0), 1);
        h.conditionClass(this._meter, "_5e2d", q <= 0);
        h.conditionClass(this._meter, "_5e4j", q >= 1);
        q = q * 100 + '%';
        i.set(this._meter, 'width', q);
        if (this._meter2) {
            i.set(this._meter2, 'left', q);
            i.set(this._meter2, 'width', q);
        }
    };
    o.prototype.changeLabel = function(p) {
        "use strict";
        var q = l.scry(this._root, "span._5e2h");
        q.forEach(function(r) {
            l.setContent(r, p);
        });
        return this;
    };
    e.exports = o;
}, null);
__d("XUIAmbientNUXTheme", ["cx"], function(a, b, c, d, e, f, g) {
    var h = {
        wrapperClassName: "_2x6q",
        arrowDimensions: {
            offset: 14,
            length: 18
        }
    };
    e.exports = h;
}, null);
