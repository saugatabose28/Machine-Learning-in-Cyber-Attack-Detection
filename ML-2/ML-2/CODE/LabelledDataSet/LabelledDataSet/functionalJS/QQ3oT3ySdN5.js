/*!CK:861917230!*/
/*1415591706,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["XsP7t"]);
}

__d("MessageThreadViewSource", [], function(a, b, c, d, e, f) {
    e.exports = {
        UNSPECIFIED: "unspecified",
        LEGACY: "legacy",
        LEGACY_MESSAGES_PREVIEW: "legacy_messages_preview",
        REFRESH_SPRINGBOARD: "springboard",
        REFRESH_MESSAGETAB: "message_tab",
        REFRESH_PERMALINK: "permalink",
        REFRESH_HIGHLANDER_JEWEL: "highlander_jewel",
        REFRESH_SEARCH_TYPEAHEAD: "search_typeahead",
        MTOUCH_MESSAGE_TAB: "mtouch_message_tab",
        MBASIC_MESSAGE_TAB: "mbasic_message_tab"
    };
}, null);
__d("BlueBar", ["Arbiter", "Event", "Run", "SubscriptionsHandler"], function(a, b, c, d, e, f, g, h, i, j) {
    var k;
    function l(event) {
        if (g.inform('BlueBar/homeClick') === false)
            event.preventDefault();
    }
    function m() {
        if (k) {
            k.release();
            k = null;
        }
    }
    var n = {
        listen: function(o) {
            if (!k) {
                k = new j();
                i.onUnload(m);
            }
            k.addSubscriptions(h.listen(o, 'click', l));
        }
    };
    e.exports = n;
}, null);
__d("BlueBarMinWidth", ["DOM", "DOMDimensions", "Event", "Locale", "Style", "Vector", "csx", "queryThenMutateDOM"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    f.init = function() {
        var o = g.find(document, "div._uaw"), p = g.find(o, "._59g8"), q, r = n.bind(null, function() {
            var s = h.getElementDimensions(o).width, t;
            if (j.isRTL()) {
                t =- l.getElementPosition(o).x;
            } else 
                t = l.getElementPosition(o).x + s - h.getViewportDimensions().width;
            var u = s - t - v;
            if (t > 0 && u > 0) {
                var v = h.measureElementBox(o, 'width', true);
                q = u + 'px';
            } else 
                q = '';
        }, function() {
            k.set(p, 'width', q);
        }, 'BlueBarMinWidth');
        i.listen(window, 'resize', r);
        r();
    };
}, null);
__d("NotificationCounter", ["Arbiter", "DocumentTitle", "JSLogger"], function(a, b, c, d, e, f, g, h, i) {
    var j = {
        messages: 0,
        notifications: 0,
        requests: 0
    }, k = {
        init: function(l) {
            g.subscribe('update_title', this._handleUpdate.bind(this));
            g.subscribe('jewel/count-updated', this._handleCountUpdate.bind(this));
        },
        getCount: function() {
            var l = 0;
            for (var m in j) {
                var n = Number(j[m]);
                if (typeof j[m] == 'string' && isNaN(n))
                    return j[m];
                if (isNaN(n) || n < 0) {
                    i.create('jewels').error('bad_count', {
                        jewel: m,
                        count: j[m]
                    });
                    continue;
                }
                l += n;
            }
            return l;
        },
        updateTitle: function() {
            var l = this.getCount(), m = h.get();
            m = l ? '(' + l + ') ' + m : m;
            h.set(m, true);
        },
        _handleCountUpdate: function(l, m) {
            j[m.jewel] = m.count;
            this.updateTitle();
        },
        _handleUpdate: function(l, m) {
            this.updateTitle();
        }
    };
    e.exports = k;
}, null);
__d("XNotificationsSyncControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/notifications\/sync\/", {
        lastSync: {
            type: "Int"
        },
        cursor: {
            type: "String"
        },
        lastReceived: {
            type: "Int"
        },
        lastSeen: {
            type: "Int"
        }
    });
}, null);
__d("NotificationSync", ["AsyncRequest", "JSLogger", "NotificationConstants", "NotificationUpdates", "Poller", "SystemEvents", "UserActivity", "XNotificationsSyncControllerURIBuilder", "setTimeoutAcrossTransitions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = 1000 * 60 * 60, q = 'channel_reload', r = 'time_travel', s = 'online', t = 'inactive_refresh', u = h.create('notifications'), v, w = 0;
    function x(ba) {
        var ca = new n().setInt('lastSync', w).getURI();
        ba.setHandler(y).setOption('suppressErrorAlerts', true).setErrorHandler(z).setMethod('GET').setReadOnly(true).setURI(ca).setAllowCrossPageTransition(true);
    }
    function y(ba) {
        var ca = ba.getPayload();
        w = ca.lastSync;
        if (ca.syncPayload)
            j.handleUpdate(i.PayloadSourceType.SYNC, ca.syncPayload);
    }
    function z(ba) {}
    var aa = {
        start: function(ba, ca) {
            if (v)
                return;
            w = ca;
            v = new k({
                interval: ba,
                setupRequest: x,
                clearOnQuicklingEvents: false,
                dontStart: true
            });
            o(v.start.bind(v), ba);
            function da(ea) {
                v.request();
                u.bump(ea);
            }
            l.subscribe(l.TIME_TRAVEL, da.bind(null, r));
            l.subscribe(l.ONLINE, function(ea, fa) {
                fa && da(s);
            });
            m.subscribe(function(ea, fa) {
                if (fa.idleness > p)
                    da(t);
            });
        },
        sendRequest: function() {
            v.request();
        },
        setuplastSync: function(ba) {
            w = ba;
        },
        sendReloadRequest: function() {
            var ba = new g();
            ba.setIsBackgroundRequest(true);
            x(ba);
            ba.send();
            u.bump(q);
        }
    };
    e.exports = aa;
}, null);
__d("NotificationJewelController", ["Arbiter", "ChannelConstants", "Event", "NotificationConstants", "NotificationCounter", "NotificationSeenState", "NotificationSync", "NotificationUpdates", "NotificationUserActions", "createObjectFrom", "curry"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    var r = 0;
    function s(u) {
        g.inform('jewel/count-updated', {
            jewel: u,
            count: l.getUnseenIDs().length
        }, g.BEHAVIOR_STATE);
    }
    function t(u, v, w, x, y, z) {
        "use strict";
        k.init();
        var aa = i.listen(u.getRoot(), 'mouseover', function() {
            aa.remove();
            aa = null;
            v.open();
        });
        if (u.isOpen()) {
            v.open();
        } else 
            var ba = u.subscribe('opened', function() {
                ba.unsubscribe();
                ba = null;
                v.open();
            });
        var ca = v.pause.bind(v);
        u.subscribe('opened', function() {
            setTimeout(ca, 0);
            var fa = l.getUnseenIDs();
            if (fa.length)
                o.markNotificationsAsSeen(fa);
        });
        u.subscribe('closed', function() {
            v.unpause();
            s(u.name);
        });
        n.subscribe('seen-state-updated', q(s, u.name));
        n.handleUpdate(j.PayloadSourceType.INITIAL_LOAD, {
            seenState: p(w, r)
        });
        if (typeof x === 'number'&&!z)
            m.start(x, y);
        if (z) {
            m.setuplastSync(y);
            var da = m.sendReloadRequest, ea = h.ON_INVALID_HISTORY;
            g.subscribe(ea, da);
        }
        s(u.name);
    }
    e.exports = t;
}, null);
__d("NotificationJewelHeaderController", ["DOM", "Event", "NotificationSeenState", "NotificationUserActions", "NotificationUpdates"], function(a, b, c, d, e, f, g, h, i, j, k) {
    function l(m, n) {
        "use strict";
        h.listen(m, 'click', function() {
            var o = i.getUnreadIDs();
            if (o.length)
                j.markNotificationsAsRead(o);
        });
        k.subscribe('read-state-updated', function() {
            if (n)
                g.setContent(n, i.getUnreadCount());
        });
    }
    e.exports = l;
}, null);
__d("NotificationHiddenState", ["NotificationUpdates", "copyProperties"], function(a, b, c, d, e, f, g, h) {
    var i = {};
    g.subscribe('update-hidden', function(k, l) {
        if (l.hiddenState) {
            i = h(i, l.hiddenState);
            g.didUpdateHiddenState(Object.keys(l.hiddenState));
        }
    });
    var j = {
        isHidden: function(k) {
            if (i[k])
                return i[k];
            return false;
        }
    };
    e.exports = j;
}, null);
__d("XNotificationInlineStoryControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/desktop_notifications\/inline_story\/", {
        notif_id: {
            type: "String",
            required: true
        },
        flyout_id: {
            type: "String",
            required: true
        }
    });
}, null);
__d("XNotificationInlineStoryDialogControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/desktop_notifications\/inline_story_dialog\/", {
        flyout_id: {
            type: "String",
            required: true
        }
    });
}, null);
__d("InlineStoryFlyout", ["Arbiter", "AsyncRequest", "csx", "DOM", "ScrollableArea", "Style", "Vector", "XNotificationInlineStoryControllerURIBuilder", "XNotificationInlineStoryDialogControllerURIBuilder"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = 450, q = 25, r = 160, s = 120, t = [], u = null, v = {}, w = {
        init: function(x) {
            t.push(x);
        },
        setDialog: function(x) {
            if (!u) {
                u = x;
                u.subscribe('hide', w._onDialogHide);
                t.forEach(function(y) {
                    y.subscribe('closed', function() {
                        u.hide();
                    });
                });
            }
            g.inform('inlineStory/dialogLoaded');
        },
        reuseDialog: function(x, y) {
            if (!u) {
                var z = g.subscribe('inlineStory/dialogLoaded', function() {
                    u.setInnerContent(x);
                    w.showDialog(y);
                    w.setupCommentArbiter(x);
                    w.updatePosition();
                    g.inform('inlineStory/flyoutLoaded');
                    g.subscribe('inlineStory/ufiLoaded', w.updatePosition);
                    z.unsubscribe();
                }.bind(this)), aa = new o().setString('flyout_id', y).getURI();
                new h().setURI(aa).send();
                g.inform('inlineStory/flyoutLoaded');
            } else {
                if (u.getContent() != x)
                    u.setInnerContent(x);
                w.showDialog(y);
                w.setupCommentArbiter(x);
                g.inform('inlineStory/flyoutLoaded');
            }
        },
        _onDialogHide: function() {
            var x = u.getContext().id, y = u.getContent();
            v[x] = y;
        },
        requestStory: function(x, y) {
            if (y in v) {
                w.reuseDialog(v[y], y);
            } else {
                var z = new n().setString('notif_id', x).setString('flyout_id', y).getURI();
                new h().setURI(z).send();
            }
        },
        setCommentFocus: function() {
            var x = j.scry(u.getContentRoot(), "._5vpa textarea");
            if (x.length > 0)
                x[0].focus();
        },
        setupCommentArbiter: function(x) {
            g.subscribe('ufi/comment', function(y, z) {
                var aa = j.scry(x, "._5vp9");
                if (!aa)
                    return;
                var ba = j.scry(aa[0], '.uiScrollableAreaWrap')[0];
                ba = ba && k.getInstance(ba);
                ba && ba.scrollToBottom();
            });
        },
        showDialog: function(x) {
            var y = false;
            for (var z = 0; z < t.length; z++)
                if (t[z] && t[z].isOpen()) {
                    y = true;
                    break;
                }
            if (!y ||!u) {
                if (u)
                    u.hide();
                return;
            }
            u.setContext(j.find(document, '#' + x));
            u.show();
        },
        updatePosition: function() {
            if (!u)
                return;
            var x = u.getContentRoot(), y = j.scry(x, "._5vp9")[0], z = j.scry(x, "._53ij")[0];
            if (!y ||!z)
                return;
            var aa = m.getViewportDimensions().y, ba = aa - r, ca = Math.min(p, ba), da = ca - q, ea = j.scry(y, '.uiScrollableAreaContent')[0];
            if (!ea)
                return;
            var fa = m.getElementDimensions(ea), ga = Math.min(da, fa.y);
            l.set(y, 'height', ga + 'px');
            var ha = m.getElementPosition(y).y, ia = m.getScrollPosition('document').y, ja = ga + ha - aa - ia + s;
            if (ja > 0)
                l.set(z, 'margin-top', - ja + 'px');
            ja = ia - ha + q;
            if (ja > 0)
                l.set(z, 'margin-top', ja + 'px');
            w.setCommentFocus();
        }
    };
    e.exports = w;
}, null);
__d("ReadToggle.react", ["React", "cx", "emptyFunction", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j) {
    'use strict';
    var k = g.createClass({
        displayName: "ReadToggle",
        propTypes: {
            isRead: g.PropTypes.bool.isRequired,
            onClick: g.PropTypes.func,
            readLabel: g.PropTypes.node,
            unreadLabel: g.PropTypes.node
        },
        getDefaultProps: function() {
            return {
                onClick: i
            };
        },
        render: function() {
            return (g.createElement("div", {
                "aria-label": this.props.isRead ? this.props.readLabel: this.props.unreadLabel,
                className: this._getClasses(),
                "data-hover": "tooltip",
                "data-tooltip-alignh": "center",
                onClick: this.props.onClick,
                role: "button"
            }));
        },
        _getClasses: function() {
            return j(this.props.className, ((!this.props.isRead ? "_5c9q" : '') + (this.props.isRead ? ' ' + "_5c9_" : '')));
        }
    });
    e.exports = k;
}, null);
__d("XNotificationInlineStoryLoggingControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/desktop_notifications\/inline_story_logging\/", {
        screen_wide_enough: {
            type: "Bool"
        },
        is_snowlift: {
            type: "Bool"
        },
        is_vault_set: {
            type: "Bool"
        },
        is_aggregated_story: {
            type: "Bool"
        },
        should_fallback: {
            type: "Bool"
        }
    });
}, null);
__d("XNotificationsGenericNegativeFeedbackControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/notifications\/feedback\/generic\/negative\/", {
        notif_id: {
            type: "Int",
            required: true
        }
    });
}, null);
__d("NotificationJewelItem.react", ["Arbiter", "AsyncRequest", "AsyncResponse", "BizSiteIdentifier.brands", "CloseButton.react", "DOM", "Event", "FlexibleBlock.react", "ImageBlock.react", "InlineStoryFlyout", "InlineStoryInsert", "Keys", "NotificationPhotoThumbnail", "NotificationURI", "NotificationUserActions", "React", "TextWithEntities.react", "ReadToggle.react", "Timestamp.react", "URI", "VaultBoxURI", "Vector", "XNotificationInlineStoryLoggingControllerURIBuilder", "XPermalinkDialogControllerURIBuilder", "XUIButton.react", "XUISpinner.react", "PopoverMenu.react", "ReactXUIMenu", "MenuSeparator.react", "XNotificationsGenericNegativeFeedbackControllerURIBuilder", "cx", "invariant", "mergeObjects", "tx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa) {
    var pa = ha.Item, qa = 950, ra = {
        group_activity: true
    };
    function sa(va, wa) {
        return v.createElement("span", {
            className: "fwb"
        }, va);
    }
    function ta(va) {
        return !!(va && va.id&&!va.is_facebook_app);
    }
    var ua = v.createClass({
        displayName: "NotificationJewelItem",
        getInitialState: function() {
            return {
                showingOptions: false,
                negativeFeedbackConfirmation: null,
                canReportAsSpam: false,
                spamReportConfirmation: null,
                sendingFeedback: false,
                mayUndoHide: false,
                genericNegativeFeedbackConfirmation: null,
                gaveGNF: this.props.gaveGNF,
                showLoadingIndicator: false,
                isBizSite: j.isBizSite()
            };
        },
        _onKeyDownItem: function(va) {
            if (m.getKeyCode(va.nativeEvent) == r.RETURN)
                this._markItemRead();
        },
        _markItemReadIfUnreadFromReadButton: function() {
            if (!this.props.isRead)
                u.setNextIsFromReadButton(true);
            this._markItemReadIfUnread();
        },
        _markItemReadIfUnread: function() {
            !this.props.isRead && this._markItemRead();
        },
        _markItemRead: function() {
            u.markNotificationsAsRead([this.props.alert_id]);
        },
        _onFeedbackError: function(va) {
            i.defaultErrorHandler(va);
            this.setState({
                sendingFeedback: false
            });
        },
        _onHideSuccess: function(va) {
            var wa = va.getPayload();
            la(wa.confirmation);
            this.setState({
                negativeFeedbackConfirmation: wa.confirmation,
                canReportAsSpam: wa.canReportAsSpam,
                sendingFeedback: false
            });
        },
        _onHideAppSuccess: function(va) {
            var wa = va.getPayload(), xa = wa.confirmation, ya = wa.canReportAsSpam;
            la(xa);
            this.setState({
                negativeFeedbackConfirmation: xa,
                canReportAsSpam: ya,
                mayUndoHide: true,
                sendingFeedback: false,
                showingOptions: true
            });
        },
        _onSpamReportSuccess: function(va) {
            var wa = va.getPayload().spamReportConfirmation;
            this.setState({
                negativeFeedbackConfirmation: null,
                spamReportConfirmation: wa,
                sendingFeedback: false
            });
        },
        _onHide: function() {
            u.markNotificationAsHidden(this.props.alert_id, this._onHideSuccess, this._onFeedbackError);
            this.setState({
                sendingFeedback: true,
                mayUndoHide: true
            });
        },
        _onShow: function() {
            var va = this.props.negative ? this.props.negative.subscription_level: null;
            u.markNotificationAsVisible(this.props.alert_id, va, function() {
                this.setState({
                    negativeFeedbackConfirmation: null,
                    sendingFeedback: false,
                    showingOptions: false
                });
            }.bind(this), this._onFeedbackError);
            this.setState({
                sendingFeedback: true
            });
        },
        _onReportSpam: function() {
            u.markNotificationAsSpam(this.props.alert_id, this._onSpamReportSuccess, this._onFeedbackError);
            this.setState({
                sendingFeedback: true
            });
        },
        _markAppAsHidden: function() {
            u.markAppAsHidden(this.props.alert_id, this.props.application.id, this._onHideAppSuccess, this._onFeedbackError);
            this.setState({
                sendingFeedback: true
            });
        },
        _markAppAsVisible: function() {
            u.markAppAsVisible(this.props.alert_id, this.props.application.id, function() {
                this.setState({
                    negativeFeedbackConfirmation: null,
                    sendingFeedback: false,
                    showingOptions: false,
                    mayUndoHide: false
                });
            }.bind(this), this._onFeedbackError);
            this.setState({
                sendingFeedback: true
            });
        },
        _renderAttachedImage: function(va) {
            if (va)
                return (v.createElement("img", {
                    src: va.uri,
                    className: "_42td",
                    "aria-hidden": true
                }));
            return v.createElement("span", null);
        },
        _getModifiedTrackingString: function(va) {
            return JSON.stringify(ma(JSON.parse(this.props.tracking), va));
        },
        _onClickCloseButton: function() {
            if (this.props.useChevron) {
                this.showCloseOptionOnMenuClose = true;
            } else 
                this.setState({
                    showingOptions: true
                });
        },
        _onCancelNegativeFeedback: function() {
            this.setState({
                showingOptions: false
            });
        },
        shouldComponentUpdate: function(va, wa) {
            return (this.props.visible !== va.visible || this.props.isRead !== va.isRead || this.props.timestamp !== va.timestamp || this.state.showingOptions !== wa.showingOptions || this.state.sendingFeedback !== wa.sendingFeedback || this.state.canReportAsSpam !== wa.canReportAsSpam || this.state.spamReportConfirmation !== wa.spamReportConfirmation || this.state.showLoadingIndicator !== wa.showLoadingIndicator || this.state.gaveGNF !== wa.gaveGNF);
        },
        _onChevronHide: function() {
            this.props.onChevronHide();
            if (this.showCloseOptionOnMenuClose) {
                this.showCloseOptionOnMenuClose = false;
                this.setState({
                    showingOptions: true
                });
            }
        },
        _onClickGenericNegative: function() {
            var va = new ja().setInt('notif_id', this.props.alert_id.split(':')[1]).getURI();
            new h(va).setHandler(function(wa) {
                this.setState({
                    showingOptions: true,
                    genericNegativeFeedbackConfirmation: wa.payload.confirmation
                });
            }.bind(this)).send();
        },
        _onOkayGenericNegativeFeedback: function() {
            this.setState({
                showingOptions: false,
                genericNegativeFeedbackConfirmation: null,
                gaveGNF: true
            });
        },
        render: function() {
            if (!this.props.visible&&!this.state.mayUndoHide)
                return v.createElement("li", {
                    className: "_4_62"
                });
            var va = this.props.negative, wa = this.props.negativeTracking, xa = (("_33c") + (!this.props.isRead ? ' ' + "_4af" : '') + (this.state.showingOptions ? ' ' + "_4ag" : '') + (this.state.sendingFeedback ? ' ' + "_4m8s" : ''));
            if (this.state.negativeFeedbackConfirmation) {
                var ya = this.state.negativeFeedbackConfirmation, za;
                if (this.state.canReportAsSpam)
                    za = v.createElement("span", null, v.createElement("span", {
                        className: "mhs"
                    }, "·"), v.createElement("a", {
                        href: "#",
                        onClick: this._onReportSpam
                    }, "Report app for spam"));
                var ab = ta(this.props.application) ? this._markAppAsVisible: this._onShow;
                return (v.createElement("li", {
                    className: xa,
                    "data-gt": this.props.tracking
                }, v.createElement("div", {
                    className: "_4ai"
                }, v.createElement(w, {
                    interpolator: sa,
                    ranges: ya.ranges,
                    aggregatedranges: ya.aggregated_ranges,
                    text: ya.text
                }), v.createElement("a", {
                    href: "#",
                    onClick: ab,
                    className: "mls"
                }, "Undo"), za)));
            }
            if (this.state.genericNegativeFeedbackConfirmation) {
                ya = this.state.genericNegativeFeedbackConfirmation;
                return (v.createElement("li", {
                    className: xa,
                    "data-gt": this.props.tracking
                }, v.createElement("div", {
                    className: "_4ai"
                }, v.createElement(w, {
                    interpolator: sa,
                    ranges: ya.ranges,
                    aggregatedranges: ya.aggregated_ranges,
                    text: ya.text
                })), v.createElement(ea, {
                    className: "_1_0b",
                    href: {
                        url: '#'
                    },
                    label: "OK",
                    use: "confirm",
                    onClick: this._onOkayGenericNegativeFeedback
                })));
            }
            var bb = this.state.spamReportConfirmation;
            if (bb)
                return (v.createElement("li", {
                    className: xa,
                    "data-gt": this.props.tracking
                }, v.createElement("div", {
                    className: "_4ai"
                }, v.createElement(w, {
                    interpolator: sa,
                    ranges: bb.ranges,
                    aggregatedranges: bb.aggregated_ranges,
                    text: bb.text
                }))));
            if (this.state.showingOptions) {
                var cb = ta(this.props.application) ? this._markAppAsHidden: this._onHide;
                return (v.createElement("li", {
                    className: xa,
                    "data-gt": this.props.tracking
                }, v.createElement("div", {
                    className: "_4ai"
                }, v.createElement("div", null, v.createElement(w, {
                    interpolator: sa,
                    ranges: va.confirm_question.ranges,
                    aggregatedranges: va.confirm_question.aggregated_ranges,
                    text: va.confirm_question.text
                })), v.createElement("div", {
                    className: "mts"
                }, v.createElement(ea, {
                    "data-gt": this._getModifiedTrackingString(wa.confirm),
                    href: {
                        url: '#'
                    },
                    label: va.turn_off,
                    use: "confirm",
                    onClick: cb,
                    disabled: this.state.sendingFeedback
                }), v.createElement(ea, {
                    "data-gt": this._getModifiedTrackingString(wa.cancel),
                    href: {
                        url: '#'
                    },
                    label: "Keep On",
                    onClick: this._onCancelNegativeFeedback,
                    disabled: this.state.sendingFeedback
                })))));
            }
            var db = null;
            if (this.props.title)
                db = v.createElement(w, {
                    interpolator: sa,
                    ranges: this.props.title.ranges,
                    aggregatedranges: this.props.title.aggregated_ranges,
                    text: this.props.title.text,
                    renderEmoji: true,
                    renderEmoticons: true
                });
            var eb = null, fb = null;
            if (va) {
                var gb = this._onClickCloseButton, hb;
                hb = this._getModifiedTrackingString(wa.click);
                var ib = (("_4ah") + (' ' + "_55m9"));
                eb = v.createElement(k, {
                    className: ib,
                    "data-gt": hb,
                    size: "medium",
                    tooltip: va.button_tooltip,
                    onClick: gb,
                    ref: "closeButton"
                });
            }
            var jb = t.localize(this.props.url), kb = s.getThumbnail(this.props.attachments, this.props.attached_story, this.props.feedback_context), lb = kb && t.snowliftable(jb), mb = t.isVaultSetURI(jb), nb = t.isAlbumDraftRecoveryDialogURI(jb), ob = v.createElement(x, {
                className: "_55m9",
                isRead: !!this.props.isRead,
                onClick: this._markItemReadIfUnreadFromReadButton,
                readLabel: "Read",
                unreadLabel: "Mark as Read"
            }), pb = null;
            if (this.props.useChevron) {
                ob = null;
                eb = null;
                var qb = (("_1_0c") + (' ' + "_55m9")), rb = this.props.isRead ? null: v.createElement(pa, {
                    onclick: this._markItemReadIfUnread
                }, "Mark as read"), sb = null;
                if (va)
                    sb = v.createElement(pa, {
                        onclick: this._onClickCloseButton,
                        "data-gt": hb,
                        ref: "closeButton"
                    }, va.button_tooltip);
                var tb = this.state.gaveGNF ? v.createElement(pa, {
                    disabled: true
                }, "Thanks for telling us that you don't like this notification"): v.createElement(pa, {
                    onclick: this._onClickGenericNegative
                }, "I don't like this notification"), ub = v.createElement(ha, null, rb, tb, sb, v.createElement(ia, null), v.createElement(pa, {
                    href: "/settings?tab=notifications"
                }, "Notifications Settings"));
                pb = v.createElement(ga, {
                    alignh: "right",
                    menu: ub,
                    className: qb,
                    onShow: this.props.onChevronShow,
                    onHide: this._onChevronHide
                }, v.createElement("div", {
                    className: "_1_0d"
                }));
            }
            var vb = (lb || mb || nb) ? jb: this.props.ajaxify_url, wb = null, xb = null, yb = mb ? aa.getSyncedTabURI().toString(): jb;
            if (lb) {
                wb = 'theater';
            } else if (nb) {
                wb = 'async-post';
            } else if (mb || vb)
                wb = 'dialog';
            var zb = null, ac = this.props.actors[0];
            if (ac)
                zb = {
                    backgroundImage: 'url(' + ac.profile_picture.uri + ')'
                };
            var bc = 'notif_flyout_' + this.props.alert_id, cc = null, dc = this.props.substory_count > 0, ec = false;
            this.props.attachments.forEach(function(kc) {
                if (ec)
                    return;
                ec = kc.style_list.indexOf("notification_target") >= 0 || kc.style_list.indexOf("question") >= 0;
                if (ec)
                    return;
            });
            var fc = false, gc = ra[this.props.notif_type] && this.props.excludeGroup, hc = this.props.hasEntStory, ic=!mb&&!dc&&!ec;
            if (this.props.storyInline) {
                var jc = ba.getViewportDimensions().x > qa;
                fc = jc && ic&&!gc;
                xb = this._openItemFlyout(jb, bc, jc, lb, mb, dc, ec);
                if (jc && ic) {
                    wb = null;
                    if (this.state.showLoadingIndicator)
                        cc = v.createElement(fa, {
                            color: "white",
                            background: "light",
                            className: "_5vp8",
                            size: "large"
                        });
                }
            } else if (this.props.storyInsert) {
                fc = hc && ic;
                if (fc) {
                    wb = null;
                    xb = this._insertIntoFeed(jb);
                    if (this.state.showLoadingIndicator)
                        cc = v.createElement(fa, {
                            color: "white",
                            background: "light",
                            className: "_5vp8",
                            size: "large"
                        });
                }
            } else if (this.props.hasPermalinkDialog&&!wb&&!dc) {
                vb = new da().setString('uri', yb).getURI().toString();
                wb = 'dialog';
            }
            return (v.createElement("li", {
                className: xa,
                "data-gt": this.props.tracking,
                onMouseLeave: fb
            }, v.createElement("div", {
                className: "anchorContainer"
            }, v.createElement("a", {
                id: bc,
                href: yb,
                ajaxify: vb,
                className: (("_33e") + (this.props.useChevron ? ' ' + "_1_0e" : '')),
                rel: wb,
                onClick: xb,
                onMouseDown: this._markItemRead,
                onKeyDown: this._onKeyDownItem
            }, v.createElement(o, null, v.createElement("span", {
                style: zb,
                className: "_33h"
            }, v.createElement("img", {
                src: "/images/notif_flyout_indicator.png",
                className: (("flyoutNoIndicator") + (fc ? ' ' + "flyoutShowIndicator" : ''))
            })), v.createElement(n, {
                flex: n.FLEX.left
            }, v.createElement("div", {
                className: "_4l_v"
            }, db, v.createElement(o, {
                className: (("_33f") + (this.state.isBizSite ? ' ' + "_2g48" : ''))
            }, v.createElement("img", {
                className: "_10cu",
                src: this.props.icon.uri
            }), v.createElement("span", null, v.createElement(y, {
                shorten: this.props.shortenTimestamp,
                time: this.props.timestamp.time,
                text: this.props.timestamp.text,
                verbose: this.props.timestamp.verbose,
                className: "_33g"
            })))), this._renderAttachedImage(kb))), cc), ob, eb, pb)));
        },
        _openItemFlyout: function(va, wa, xa, ya, za, ab, bb) {
            return function(event) {
                if (event.type === 'click' && (event.button !== 0 || event.altKey || event.ctrlKey || event.shiftKey || event.metaKey))
                    return true;
                if (this.state.showLoadingIndicator)
                    return false;
                var cb = ra[this.props.notif_type] && this.props.excludeGroup, db = new ca().setBool('screen_wide_enough', xa).setBool('is_snowlift', ya).setBool('is_vault_set', za).setBool('is_aggregated_story', ab).setBool('should_fallback', bb).getURI();
                new h().setURI(db).send();
                if (!xa || ya || za || ab || cb || bb)
                    return;
                event.preventDefault();
                g.subscribeOnce('inlineStory/flyoutLoaded', function() {
                    this.setState({
                        showLoadingIndicator: false
                    });
                }.bind(this));
                setTimeout(function() {
                    this.state.showLoadingIndicator && window.open(l.find(document, '#' + wa).href, '_self');
                }.bind(this), 3000);
                this.setState({
                    showLoadingIndicator: true
                });
                p.requestStory(this.props.id, wa);
            }.bind(this);
        },
        _insertIntoFeed: function(va) {
            return function(event) {
                if (event.type === 'click' && (event.button !== 0 || event.altKey || event.ctrlKey || event.shiftKey || event.metaKey))
                    return true;
                if (this.state.showLoadingIndicator)
                    return false;
                if (!q._isInFeed()) {
                    q.gotoPermalink(va);
                    return;
                }
                var wa = z(this.props.url).getPath();
                q._insert(va, wa, this.props.id);
                this.setState({
                    showLoadingIndicator: true
                });
                event.preventDefault();
                g.subscribeOnce('inlineStory/insertLoaded', function() {
                    this.setState({
                        showLoadingIndicator: false
                    });
                }.bind(this));
            }.bind(this);
        }
    });
    e.exports = ua;
}, null);
__d("NotificationJewelList.react", ["Animation", "Event", "NotificationConstants", "NotificationHiddenState", "NotificationJewelItem.react", "NotificationSeenState", "NotificationStore", "NotificationUpdates", "React", "LegacyScrollableArea.react", "Vector", "cx", "debounce", "getObjectValues", "isEmpty", "mapObject", "merge", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) {
    var y = o.PropTypes, z = 5, aa = 160, ba = 530, ca = 40, da = 332, ea = 430, fa = i.PayloadSourceType.LIVE_SEND, ga = o.createClass({
        displayName: "NotificationJewelList",
        propTypes: {
            businessID: y.string,
            excludeGroup: y.bool,
            hasEverBeenOpened: y.bool,
            maxHeight: y.number,
            negativeTracking: y.object,
            paused: y.bool,
            staticNotifs: y.object,
            storyInline: y.bool,
            storyInsert: y.bool,
            tracking: y.string,
            useWideList: y.bool,
            useChevron: y.bool
        },
        getInitialState: function() {
            this._currentlyFetching = false;
            this._pendingNotifs = {};
            this._shouldScroll = false;
            var ha = v(this.props.staticNotifs, function(ia) {
                return ia.seen_state === 'SEEN_AND_READ';
            });
            return {
                canFetchMore: !this.props.staticNotifs,
                notifs: this.props.staticNotifs || {},
                hiddenState: {},
                readState: ha || {},
                showingChevron: false
            };
        },
        componentWillMount: function() {
            if (this.props.staticNotifs)
                return;
            m.setBusinessID(this.props.businessID);
            this._subscriptions = [n.subscribe('notifications-updated', function(ha, ia) {
                if (ia.source == fa&&!u(ia.updates)) {
                    this._shouldScroll = true;
                    if (this.props.paused)
                        this._pendingNotifs = w(this._pendingNotifs, ia.updates);
                    return;
                }
                this._fetchAndUpdate(m.getCount());
            }.bind(this)), n.subscribe(['hidden-state-updated', 'read-state-updated'], function(ha, ia) {
                if (ha == 'hidden-state-updated') {
                    var ja = {};
                    Object.keys(ia.updates).forEach(function(la) {
                        ja[la] = j.isHidden(la);
                    });
                    this.setState({
                        hiddenState: w(this.state.hiddenState, ja)
                    });
                } else {
                    var ka = {};
                    Object.keys(ia.updates).forEach(function(la) {
                        ka[la] = l.isRead(la);
                    });
                    this.setState({
                        readState: w(this.state.readState, ka)
                    });
                }
            }.bind(this))];
        },
        componentWillUnmount: function() {
            if (this._subscriptions) {
                while (this._subscriptions.length)
                    this._subscriptions.pop().unsubscribe();
                this._subscriptions = null;
            }
        },
        _fetchAndUpdate: function(ha) {
            if (this.props.staticNotifs)
                return;
            this._currentlyFetching = true;
            m.getNotifications(ha, function(ia) {
                var ja = u(this._pendingNotifs) ? ia: this._getNotifsWithCurrentOrder(ia);
                this._currentlyFetching = false;
                this.setState({
                    notifs: ja,
                    canFetchMore: m.canFetchMore()
                });
            }.bind(this));
        },
        _getNotifsWithCurrentOrder: function(ha) {
            var ia = Object.keys(this.state.notifs), ja = Object.keys(ha).filter(function(la) {
                return !this.state.notifs[la];
            }.bind(this));
            ia = ia.concat(ja);
            var ka = {};
            ia.forEach(function(la) {
                if (this._pendingNotifs[la]) {
                    var ma = this.state.notifs[la];
                    if (ma)
                        ka[la] = ma;
                } else 
                    ka[la] = ha[la];
            }.bind(this));
            return ka;
        },
        _fetchAndUpdateAll: function() {
            this._pendingNotifs = {};
            this._fetchAndUpdate(m.getCount());
        },
        _fetchNextSet: function() {
            if (!this._currentlyFetching) {
                var ha = Object.keys(this.state.notifs).length;
                this._fetchAndUpdate(ha + z);
            }
        },
        _onScroll: function() {
            if (this._currentlyFetching ||!this.state.canFetchMore)
                return;
            if (this._isLoadingIndicatorVisible())
                this._fetchNextSet();
        },
        _isLoadingIndicatorVisible: function() {
            var ha = this.refs.loading;
            if (!ha)
                return false;
            var ia = this.refs.scrollable.getDOMNode(), ja = q.getElementDimensions(ia).y;
            if (ja === 0)
                return false;
            var ka = q.getElementPosition(ia).y + ja, la = q.getElementPosition(ha.getDOMNode()).y;
            la -= ca;
            return la < ka;
        },
        _calculateHeight: function() {
            var ha = q.getViewportDimensions().y;
            return Math.min(this.props.maxHeight || ba, ha - aa);
        },
        _onChevronShow: function() {
            this.setState({
                showingChevron: true
            });
        },
        _onChevronHide: function() {
            this.setState({
                showingChevron: false
            });
        },
        _renderItems: function() {
            var ha = {};
            t(this.state.notifs).forEach(function(ia) {
                var ja = ia.alert_id;
                ia.hasPermalinkDialog = ia.hasPermalinkDialog && this.props.shouldShowPermalinkDialog;
                ha[ja] = o.createElement(k, o.__spread({
                    visible: !this.state.hiddenState[ja],
                    isRead: this.state.readState[ja],
                    negativeTracking: this.props.negativeTracking,
                    shortenTimestamp: this.props.shortenTimestamp,
                    storyInline: this.props.storyInline,
                    storyInsert: this.props.storyInsert,
                    excludeGroup: this.props.excludeGroup,
                    useChevron: this.props.useChevron,
                    onChevronShow: this._onChevronShow,
                    onChevronHide: this._onChevronHide,
                    parent: this
                }, ia));
            }.bind(this));
            return ha;
        },
        componentDidMount: function() {
            var ha = this.refs.scrollable.getDOMNode();
            h.listen(window, 'resize', s(function() {
                if (!u(this.state.notifs))
                    new g(ha).to('height', this._calculateHeight() + 'px').duration(100).go();
            }.bind(this)));
        },
        componentDidUpdate: function(ha) {
            if (!ha.hasEverBeenOpened && this.props.hasEverBeenOpened) {
                var ia = l.getUnseenIDs().length;
                if (ia > z) {
                    this._fetchAndUpdate(ia);
                } else 
                    this._fetchNextSet();
                return;
            }
            if (ha.paused&&!this.props.paused) {
                setTimeout(this._fetchAndUpdateAll, 0);
                return;
            }
            if (this.props.paused&&!ha.paused) {
                if (this._shouldScroll && this.refs.scrollable)
                    this.refs.scrollable.getArea().scrollToTop(false);
                this._shouldScroll = false;
            }
            if (!this._currentlyFetching && this._isLoadingIndicatorVisible())
                setTimeout(this._fetchNextSet, 0);
        },
        render: function() {
            var ha = this.state.notifs, ia = null, ja = null, ka = this.props.useWideList ? ea: da, la = null;
            if (!u(ha)) {
                ia = o.createElement("ul", {
                    "data-gt": this.props.tracking
                }, this._renderItems());
                ja = this._calculateHeight();
            } else if (!this.state.canFetchMore)
                ia = o.createElement("div", {
                    className: "_572e"
                }, "No new notifications");
            if (this.state.canFetchMore)
                la = o.createElement("img", {
                    ref: "loading",
                    src: "/images/loaders/indicator_blue_small.gif",
                    className: "_33i"
                });
            var ma = (("_50-t") + (this.state.showingChevron ? ' ' + "_2iy1" : ''));
            return (o.createElement("div", {
                className: ma
            }, o.createElement(p, {
                ref: "scrollable",
                width: ka,
                height: ja,
                fade: true,
                persistent: true,
                onScroll: s(this._onScroll)
            }, ia, la)));
        }
    });
    e.exports = ga;
}, null);
__d("NotificationJewelListController", ["NotificationJewelList.react", "React"], function(a, b, c, d, e, f, g, h) {
    function i(j, k) {
        "use strict";
        this.$NotificationJewelListController0 = j;
        this.$NotificationJewelListController1 = k;
        this.$NotificationJewelListController2 = false;
        this.$NotificationJewelListController3 = false;
        this.$NotificationJewelListController4();
    }
    i.prototype.open = function() {
        "use strict";
        this.$NotificationJewelListController2 = true;
        this.$NotificationJewelListController4();
    };
    i.prototype.pause = function() {
        "use strict";
        this.$NotificationJewelListController3 = true;
        this.$NotificationJewelListController4();
    };
    i.prototype.unpause = function() {
        "use strict";
        this.$NotificationJewelListController3 = false;
        this.$NotificationJewelListController4();
    };
    i.prototype.$NotificationJewelListController4 = function() {
        "use strict";
        h.render(h.createElement(g, {
            hasEverBeenOpened: this.$NotificationJewelListController2,
            paused: this.$NotificationJewelListController3,
            initialNotifs: this.$NotificationJewelListController1.initialNotifs || {},
            useWideList: this.$NotificationJewelListController1.useWideList,
            tracking: this.$NotificationJewelListController1.tracking,
            negativeTracking: this.$NotificationJewelListController1.negativeTracking,
            shortenTimestamp: this.$NotificationJewelListController1.shortenTimestamp,
            storyInline: this.$NotificationJewelListController1.storyInline,
            storyInsert: this.$NotificationJewelListController1.storyInsert,
            excludeGroup: this.$NotificationJewelListController1.excludeGroup,
            shouldShowPermalinkDialog: this.$NotificationJewelListController1.shouldShowPermalinkDialog,
            businessID: this.$NotificationJewelListController1.businessID,
            maxHeight: this.$NotificationJewelListController1.maxHeight,
            useChevron: this.$NotificationJewelListController1.useChevron
        }), this.$NotificationJewelListController0);
    };
    e.exports = i;
}, null);
__d("PagesMessengerThreadDialogLink.react", ["AsyncDialog", "AsyncRequest", "Link.react", "MessageThreadViewSource", "PagesMessagingConst", "ReactComponentWithPureRenderMixin", "React", "URI"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    'use strict';
    var o = m.createClass({
        displayName: "PagesMessengerThreadDialogLink",
        mixins: [l],
        propTypes: {
            threadID: m.PropTypes.string.isRequired,
            viewer: m.PropTypes.string.isRequired,
            folder: m.PropTypes.string
        },
        getInitialState: function() {
            return {
                permalinkURI: '#'
            };
        },
        componentDidMount: function() {
            this._getPermalinkURI(this.props);
        },
        componentWillReceiveProps: function(p) {
            if (p.threadID !== this.props.threadID || p.folder !== this.props.folder)
                this._getPermalinkURI(p);
        },
        render: function() {
            return (m.createElement(i, {
                className: this.props.className,
                href: "#",
                onClick: this._handleClick,
                role: "button"
            }, this.props.children));
        },
        _handleClick: function(p) {
            p.preventDefault();
            g.send(new h(this.state.permalinkURI).setRelativeTo(p.target));
        },
        _getPermalinkURI: function(p) {
            this.setState(this.getInitialState());
            var q = p.threadID, r = p.viewer, s = p.folder;
            d(['MercuryServerRequests'], function(t) {
                var u = t.getForFBID(r);
                u.getServerThreadID(q, function(v) {
                    this.isMounted() && this.setState({
                        permalinkURI: n(k.LOAD_MESSAGE_THREAD_URI).setQueryData({
                            pageid: r,
                            threadid: q,
                            threadElementID: v,
                            folder: s,
                            source: j.REFRESH_HIGHLANDER_JEWEL
                        }).toString()
                    });
                }.bind(this));
            }.bind(this));
        }
    });
    e.exports = o;
}, null);
__d("FacebarResultStoreUtils", [], function(a, b, c, d, e, f) {
    var g = {
        processEntityResult: function(h, i, j, k) {
            var l = {
                semantic: i.toString(),
                structure: [{
                    type: 'ent:' + h,
                    text: j,
                    uid: i
                }
                ],
                type: h,
                cost: k,
                cache_id_length: 0
            };
            l.tuid = JSON.stringify({
                semantic: l.semantic,
                structure: l.structure
            });
            return l;
        },
        getRawTextFromStructured: function(h) {
            var i = h.map(function(j) {
                return j.getText();
            });
            return i.join('');
        },
        getTextFromResult: function(h) {
            var i = h.structure, j = '';
            i.forEach(function(k) {
                j += k.text;
            });
            return j;
        }
    };
    e.exports = g;
}, null);
__d("HashtagSearchResultUtils", ["FacebarResultStoreUtils", "HashtagParser", "HashtagSearchResultConfig", "URI", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = {
        getHashtagFromQuery: function(m) {
            var n = h.parse(m);
            if (n && n.length === 1 && n[0].offset === 0)
                return n[0].tag;
            return false;
        },
        makeTypeaheadResult: function(m) {
            var n = "Hashtag";
            return {
                category: n,
                path: j('/hashtag/' + m).toString(),
                photo: i.image_url,
                rankType: null,
                replace_results: i.boost_result ? true: false,
                scaled_score: 1,
                score: 0,
                text: '#' + m,
                type: 'hashtag_exact',
                uid: 'hashtag:' + m
            };
        },
        makeFacebarEntry: function(m) {
            var n = "Hashtag";
            return {
                category: n,
                path: j('/hashtag/' + m).toString(),
                photo: i.image_url,
                replace_results: i.boost_result ? true: false,
                text: '#' + m,
                type: 'hashtag_exact',
                uid: 'hashtag:' + m
            };
        },
        makeFacebarResult: function(m) {
            var n = g.processEntityResult('hashtag_exact', 'hashtag:' + m, '#' + m, i.hashtag_cost);
            n.parse = {
                display: [{
                    type: 'ent:hashtag_exact',
                    uid: 'hashtag:' + m
                }
                ],
                remTokens: [],
                suffix: ''
            };
            n.tags = {
                hashtag: 'hashtag'
            };
            return n;
        }
    };
    e.exports = l;
}, null);
__d("ContextualHelpSearchController", ["Event", "AsyncRequest", "DOM", "CSS", "Focus", "Input", "copyProperties"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = 400;
    function o() {
        this._token = null;
        this._timerID = 0;
        this._lastQuery = null;
        this.typing_listener = null;
        this.clear_listener = null;
        this.async_request = null;
    }
    m(o.prototype, {
        init: function(p, q, r, s, t, u) {
            this.loader = p;
            this.search_box = q;
            this.topics_area = r;
            this.results_area = s;
            this.clear_button = t;
            this.typing_listener = g.listen(this.search_box, 'keyup', this.setTimer.bind(this));
            this.clear_listener = g.listen(this.clear_button, 'click', this.clearResults.bind(this));
            if (u == null || u.focusSearchBox == null || u.focusSearchBox)
                k.set(this.search_box);
        },
        source: 'contextual_help',
        clearResults: function() {
            this.show(this.topics_area);
            this._lastQuery = '';
            l.reset(this.search_box);
            k.set(this.search_box);
            if (this.async_request !== null) {
                this.async_request.abort();
                this.async_request = null;
            }
            j.addClass(this.clear_button, 'hidden_elem');
        },
        update: function() {
            var p = l.getValue(this.search_box);
            if (p === this._lastQuery)
                return;
            this._lastQuery = p;
            if (p === '') {
                this.clearResults();
                return;
            }
            this.show(this.loader);
            var q = {
                query: p,
                width: this._width || n,
                source: this.source
            };
            this.async_request = new h('/help/ajax/search/').setData(q).setHandler(function(r) {
                this._update(r);
            }.bind(this));
            this.async_request.send();
        },
        _update: function(p) {
            this.async_request = null;
            var q = p.getPayload().results;
            i.setContent(this.results_area, q);
            this.show(this.results_area);
            if (l.getValue(this.search_box) === '') {
                this.clearResults();
            } else 
                j.removeClass(this.clear_button, 'hidden_elem');
        },
        setTimer: function() {
            if (this._timerID !== 0)
                clearTimeout(this._timerID);
            this._timerID = setTimeout(this.update.bind(this), 300);
            if (this.async_request != null) {
                this.async_request.abort();
                this.async_request = null;
            }
        },
        show: function(p) {
            var q = [this.loader, this.topics_area, this.results_area];
            for (var r = 0; r < q.length; r++)
                j.addClass(q[r], 'hidden_elem');
            j.removeClass(p, 'hidden_elem');
        }
    });
    e.exports = o;
}, null);
__d("RequestsJewel", ["AccessibilityLogger", "Arbiter", "AsyncRequest", "AsyncSignal", "ChannelConstants", "CSS", "DOM", "Event", "FriendBrowserCheckboxController", "LinkController", "Parent", "ScrollableArea", "Vector", "$", "copyProperties", "ge", "shield", "tx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) {
    function y(z, aa, ba) {
        if (z)
            this.init(z, aa, ba);
    }
    u(y, {
        instance: null,
        getInstance: function() {
            return this.instance;
        },
        replaceJewelTitle: function(z, aa) {
            m.setContent(t(z), aa);
        }
    });
    u(y.prototype, {
        init: function(z, aa, ba) {
            y.instance = this;
            this.countNew = 0;
            this.jewel = z;
            this.jewelFlyoutCase = z.getRoot();
            this.jewelFlyout = v('fbRequestsFlyout');
            this.newCountSpan = v('newRequestCount');
            this.folder = aa;
            this.doNewMarkRead = ba;
            this.openTimestamp = 0;
            this._requestList = {};
            this._egoData = {};
            this._requestCount = 0;
            this.egoPredictedCount = 0;
            this.pendingCount = 0;
            this.shouldLogEgoClick = false;
            this.shouldClearPredictionAssocOnClick = false;
            var ca = v('requestsMarkReadButton');
            if (ca)
                n.listen(ca, 'click', w(this._markRead, this));
            this.jewel.subscribe('marked-seen', w(this._markSeenCallback, this));
            this.jewel.subscribe('closed', w(this._closeHandler, this));
            this.jewel.subscribe('updated', this._updateCount.bind(this));
            this.jewel.subscribe('opened', this._openHandler.bind(this));
            p.registerHandler(this._handleLink.bind(this));
            h.subscribe(k.getArbiterType('jewel_requests_add'), this._addRequest.bind(this));
            h.subscribe(k.getArbiterType('jewel_friending_notifs'), this._addNotif.bind(this));
            h.subscribe(k.getArbiterType('jewel_requests_remove_old'), this._removeOldRequest.bind(this));
            h.subscribe(k.getArbiterType('friend_requests_seen'), this._markSeenFromMessage.bind(this));
            h.subscribe('jewel/ego_predicted_count', function(ea, fa) {
                this.egoPredictedCount = fa.ego_predicted_count;
                this.pendingCount = fa.pending_count;
                this.egoUnseenTimestamp = fa.unseen_timestamp;
                this.shouldLogEgoClick = fa.should_log_ego_click;
                this.actionContext = fa.action_context;
            }.bind(this));
            n.listen(this.jewelFlyout, 'submit', function(ea) {
                var fa = q.byClass(ea.getTarget(), 'objectListItem');
                if (fa) {
                    l.removeClass(fa, 'jewelItemNew');
                    l.addClass(fa, 'jewelItemResponded');
                }
            }.bind(this));
            var da = m.find(v('fbRequestsJewel'), 'a[rel="toggle"]');
            n.listen(da, 'focus', function(ea) {
                g.logFocusIn();
            }.bind(this));
            this.setupScroll();
            return this;
        },
        setupScroll: function() {
            var z = m.scry(this.jewelFlyout, '.uiScrollableAreaWrap')[0];
            if (z) {
                this._scrollableWrap = z;
                this._lastLinkPosition = 0;
                this._scrollListener = n.listen(z, 'scroll', this._handleScroll.bind(this), n.Priority._BUBBLE);
            }
        },
        fromDom: function() {
            m.scry(this.jewelFlyout, '.jewelItemList li.objectListItem').forEach(function(z) {
                var aa = z.getAttribute('id');
                if (aa) {
                    var ba = v(aa + '_status'), ca = this._parseIDToInts(aa), da = ba.getAttribute('data-ego');
                    if (ca.requester) {
                        this._requestList[ca.requester] = aa;
                        if (da)
                            this._egoData[da] = da;
                    }
                    ++this._requestCount;
                }
            }.bind(this));
            this._conditionShowEmptyMessage();
        },
        _parseID: function(z) {
            var aa = z.match(/^(\d+)_(\d+)/);
            return (aa) ? {
                requester: aa[1],
                type: aa[2]
            } : undefined;
        },
        _parseIDToInts: function(z) {
            var aa = z ? this._parseID(z): undefined, ba;
            if (aa && aa.requester) {
                ba = parseInt(aa.requester, 10);
                if (isNaN(ba))
                    ba = undefined;
            }
            var ca;
            if (aa && aa.type) {
                ca = parseInt(aa.type, 10);
                if (isNaN(ca))
                    ca = undefined;
            }
            return {
                requester: ba,
                type: ca
            };
        },
        _decrementCountNewIfPositive: function() {
            if (this.countNew > 0)
                this.countNew -= 1;
        },
        _handleLink: function(z, event) {
            var aa = q.byClass(z, 'jewelItemNew');
            if (aa && q.byClass(aa, 'fbRequestList') && q.byClass(aa, 'beeperEnabled')) {
                var ba = this._parseID(aa.id);
                ba && this._markSeenCallback(ba.requester, ba.type);
                this._decrementCountNewIfPositive();
                h.inform('jewel/count-updated', {
                    jewel: 'requests',
                    count: this.countNew
                });
                l.removeClass(aa, 'jewelItemNew');
            }
            return true;
        },
        _handleScroll: function() {
            var z = m.scry(this._scrollableWrap, '.uiMorePager');
            if (!z)
                return;
            var aa = z.pop();
            if (aa) {
                var ba = s.getElementPosition(aa, 'viewport').y;
                if (ba > 0)
                    l.addClass(q.byClass(this._scrollableWrap, 'uiScrollableArea'), 'contentAfter');
                var ca = m.find(aa, 'a');
                if (!ca)
                    return;
                var da = s.getElementPosition(ca, 'viewport').y;
                if (da == this._lastLinkPosition)
                    return;
                var ea = s.getElementPosition(this._scrollableWrap, 'viewport').y + s.getElementDimensions(this._scrollableWrap).y;
                if (da - 300 < ea && da > 0) {
                    this._lastLinkPosition = da;
                    var fa = ca.getAttribute('ajaxify');
                    if (fa) {
                        new i(fa).setRelativeTo(ca).setStatusElement(q.byClass(ca, 'stat_elem')).send();
                    } else 
                        o.getInstance('jewel').showMore();
                }
            }
        },
        _addNotif: function(z, aa) {
            if (!aa || this.jewel.isOpen())
                return;
            if (aa.obj.notif_type !== 'friend_confirmed')
                return;
            if (v('fbRequestsJewelLoading')) {
                new i().setURI('/ajax/requests/loader/').send();
                return;
            }
            var ba = {};
            ba.reloadcontent = true;
            new i().setURI('/ajax/requests/loader/').setData(ba).send();
        },
        _addRequest: function(z, aa) {
            if (!aa)
                return;
            var ba = aa.obj.from, ca = aa.obj.suggester, da = this._parseIDToInts(this._requestList[ba]).type, ea = da === 19&&!ca;
            if (!ea && (da || this.jewel.isOpen()))
                return;
            if (v('fbRequestsJewelLoading')) {
                new i().setURI('/ajax/requests/loader/').send();
            } else {
                var fa = {};
                fa.reloadcontent = true;
                new i().setURI('/ajax/requests/loader/').setData(fa).send();
            }
        },
        _removeOldRequest: function(z, aa) {
            if (!aa || this.jewel.isOpen() || v('fbRequestsJewelLoading') !== null)
                return;
            var ba = this._requestList[aa.obj.from], ca = ba && v(ba);
            if (ca) {
                if (l.hasClass(ca, 'jewelItemNew')) {
                    this._decrementCountNewIfPositive();
                    h.inform('jewel/count-updated', {
                        jewel: 'requests',
                        count: this.countNew
                    });
                }
                if (!l.hasClass(ca, 'jewelItemResponded')) {
                    m.remove(ca);
                    delete this._requestList[aa.obj.from];
                    --this._requestCount;
                    this._conditionShowEmptyMessage();
                }
            }
        },
        _markRead: function() {
            this.jewel.markSeen();
            this._clearNewItems();
        },
        _markSeenCallback: function(z, aa) {
            h.inform('friend-confirmed-notifs-seen');
            var ba = m.scry(this.jewelFlyout, 'li');
            new j('/ajax/gigaboxx/endpoint/UpdateLastSeenTime.php', {
                folder: this.folder,
                first_item: ba[0].id
            }).send();
            new i().setURI('/ajax/friends/jewel/predicted_count_logging').setData({
                ego_predicted_count: this.egoPredictedCount,
                pending_count: this.pendingCount,
                unseen_timestamp: this.egoUnseenTimestamp,
                action_context: this.actionContext,
                should_log_ego_click: this.shouldLogEgoClick
            }).send();
            var ca = typeof z != 'undefined' && typeof aa != 'undefined' ? {
                requester: z,
                type: aa
            }
            : {};
            this.doNewMarkRead && new j('/ajax/requests/mark_read/', ca).send();
        },
        _markSeenFromMessage: function(z, aa) {
            h.inform('jewel/count-updated', {
                jewel: 'requests',
                count: 0
            });
        },
        _clearNewItems: function(z, aa) {
            m.scry(this.jewel.root, 'li.jewelItemNew').forEach(function(ba) {
                l.removeClass(ba, 'jewelItemNew');
            });
        },
        _updateCount: function(z, aa) {
            this.countNew = aa.count;
            l.conditionClass(this.jewelFlyout, 'beeperUnread', this.countNew > 0);
            l.conditionClass(this.jewelFlyoutCase, 'showRequests', this.countNew > 0);
            if (this.newCountSpan) {
                var ba = this.countNew == 1 ? x._("{num} NEW REQUEST", {
                    num: this.countNew
                }): x._("{num} NEW REQUESTS", {
                    num: this.countNew
                });
                m.setContent(this.newCountSpan, ba);
            }
        },
        _conditionShowEmptyMessage: function() {
            m.scry(this.jewelFlyout, 'li.empty').forEach(function(z) {
                l.conditionShow(z, this._requestCount <= 0);
            }.bind(this));
        },
        _openHandler: function() {
            h.inform('requestsJewel/opened');
            var z = m.scry(this.jewelFlyout, '.uiScrollableArea')[0];
            if (v('fbRequestsJewelLoading')) {
                var aa = Date.now();
                if (this.openTimestamp + 5000 < aa) {
                    this.openTimestamp = aa;
                    new i().setURI('/ajax/requests/loader/').setData({
                        log_impressions: true
                    }).send();
                }
            } else {
                var ba = Object.keys(this._requestList);
                if (ba.length > 0) {
                    new i().setURI('/friends/requests/log_impressions').setData({
                        ids: ba.join(','),
                        ref: 'jewel'
                    }).send();
                    var ca = Object.keys(this._egoData);
                    if (ca.length > 0)
                        new i().setURI('/growth/jewel/impression_logging.php').setData({
                            egodata: ca
                        }).send();
                }
            }
            z && r.poke(z);
        },
        _closeHandler: function() {
            h.inform('requestsJewel/closed');
            this._clearNewItems();
        }
    });
    e.exports = y;
}, null);
__d("JewelX", ["Event", "Arbiter", "ArbiterMixin", "CSS", "DOM", "HTML", "Keys", "TabIsolation", "Toggler", "csx", "copyProperties", "emptyFunction", "reportData", "setTimeoutAcrossTransitions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t) {
    var u = function(v, w) {
        v && w && this.init(v, w);
    };
    q(u, {
        _instancesByName: {},
        _resizeListener: null
    });
    q(u.prototype, i, {
        init: function(v, w) {
            this.name = w.name;
            this.root = v;
            this.badge = w.badge;
            this.countNew = 0;
            this.initialCount = 0;
            this.escHandler = null;
            this.togglerInstance = o.createInstance(v).setSticky(false);
            if (w.keepOpenForSnowlift)
                this.togglerInstance.setPrePageTransitionCallback(this._onPrePageTransition.bind(this));
            u._instancesByName[this.name] = this;
            var x = this.getFlyout(), y = new n(x);
            o.createInstance(x).setSticky(false);
            o.listen('show', this.root, function(z) {
                this._logFirstClick();
                this.hasNew() && this.markSeen();
                this.reset();
                this.inform('opened');
                h.inform('layer_shown', {
                    type: 'Jewel'
                });
                y.enable();
                this.setupEvents();
            }.bind(this));
            o.listen('hide', this.root, function(z, aa) {
                this.hasNew() && this.markSeen();
                this.reset();
                this.inform('closed');
                h.inform('layer_hidden', {
                    type: 'Jewel'
                });
                y.disable();
                this.removeEvents();
            }.bind(this));
            h.subscribe('jewel/count-updated', function(z, aa) {
                aa.jewel == this.name && this.update(aa);
            }.bind(this));
            h.subscribe('jewel/count-initial', function(z, aa) {
                aa.jewel == this.name && this.setInitial(aa);
            }.bind(this));
            h.subscribe('jewel/reset', function(z, aa) {
                aa.jewel == this.name && this.reset();
            }.bind(this));
            u._resizeListener = u._resizeListener || (function() {
                var z = null;
                return g.listen(window, 'resize', function() {
                    clearTimeout(z);
                    z = t(h.inform.bind(h, 'jewel/resize'), 100);
                });
            })();
        },
        getRoot: function() {
            return this.root;
        },
        getFlyout: function() {
            if (typeof this._flyout === 'undefined')
                this._flyout = k.find(this.root, ".__tw");
            return this._flyout;
        },
        hasNew: function() {
            return j.hasClass(this.root, 'hasNew');
        },
        isOpen: function() {
            return j.hasClass(this.root, 'openToggler');
        },
        reset: function() {
            j.removeClass(this.root, 'hasNew');
        },
        setContent: function(v) {
            var w = k.find(this.root, 'ul.jewelItemList');
            k.setContent(w, l(v));
        },
        update: function(v) {
            this.countNew = v.count;
            if (typeof this.countNew === 'number' && this.countNew < 0)
                this.countNew = 0;
            this.badge.setLegacyContent(this.countNew);
            var w = isNaN(this.countNew) || this.countNew > 0;
            j.conditionClass(this.root, 'hasNew', w);
            this.inform('updated', v);
        },
        setInitial: function(v) {
            this.initialCount = v;
        },
        setupEvents: function() {
            this.escHandler = g.listen(document.documentElement, 'keydown', function(v) {
                if (v.keyCode === m.ESC && this.isOpen())
                    o.hide(this.root);
            }.bind(this));
        },
        removeEvents: function() {
            if (this.escHandler) {
                this.escHandler.remove();
                this.escHandler = null;
            }
        },
        markSeen: function() {
            h.inform('jewel/count-updated', {
                jewel: this.name,
                count: 0
            }, h.BEHAVIOR_STATE);
            this.inform('marked-seen');
        },
        _onPrePageTransition: function(v, w) {
            if (!this._isSnowliftURI(w.from)&&!this._isSnowliftURI(w.to))
                this.togglerInstance && this.togglerInstance.hide();
        },
        _isSnowliftURI: function(v) {
            return v && v.getQueryData().hasOwnProperty('theater');
        },
        _logFirstClick: function() {
            this._logFirstClick = r;
            s('jewel_click', {
                gt: {
                    count: this.countNew,
                    initial: this.initialCount,
                    jewel: this.name
                }
            });
        }
    });
    e.exports = u;
}, null);
__d("LitestandNewsfeedCountUpdater", ["Arbiter", "AsyncRequest", "LitestandMessages", "LitestandSidebarBookmarkConfig", "emptyFunction"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l, m;
    function n() {
        m && clearTimeout(m);
        if (l)
            return;
        m = setTimeout(o, j.nf_count_query_interval_ms);
    }
    function o() {
        if (l)
            return;
        new h().setURI('/ajax/litestand/newsfeed_count').setHandler(function(r) {
            if (l)
                return;
            p(r.getPayload());
            n();
        }).setAllowCrossPageTransition(true).send();
    }
    function p(r) {
        g.inform(i.UPDATE_HOME_COUNT, {
            count: r,
            onHome: l
        }, g.BEHAVIOR_STATE);
    }
    var q = {
        init: function() {
            q.init = k;
            g.subscribe(i.NEWSFEED_LOAD, function() {
                l = true;
                p(0);
            });
            g.subscribe(i.LEAVE_HOME, function() {
                l = false;
                n();
            });
            n();
        }
    };
    e.exports = q;
}, null);
__d("LitestandChromeHomeCount", ["Arbiter", "CSS", "DOM", "Event", "LitestandMessages", "LitestandNewsfeedCountUpdater", "Parent", "UserAgent_DEPRECATED", "csx", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    var q = 20, r, s, t, u, v, w = {
        init: function(x) {
            v = x;
            s = i.find(document, "div._uaw ._5ahz");
            r = s.parentNode;
            t = m.byClass(r, "_1ayn");
            u = false;
            g.subscribe(k.UPDATE_HOME_COUNT, function(y, z) {
                w.updateBadge(z.onHome ? 0 : z.count);
            });
            j.listen(t, 'click', function(event) {
                var y = event.getModifiers();
                if (y.shift || (n.osx() && y.meta) || (n.windows() && y.control))
                    w.updateBadge(0);
            });
            l.init();
            w.updateBadge(v);
        },
        updateBadge: function(x) {
            v = x;
            var y = x > 0;
            w.toggleBadge(y);
            if (y) {
                var z = x > q ? q + '+': x;
                i.setContent(s, z);
            }
        },
        toggleBadge: function(x) {
            if (u === x)
                return;
            u = x;
            h.conditionClass(r, "_5ahy", !x);
        }
    };
    e.exports = w;
}, null);
__d("MercuryJewelCountControl", ["Arbiter", "DOM", "copyProperties", "shield", "MercuryServerRequests", "MercuryThreadInformer", "MercuryUnseenState"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = b('MercuryServerRequests').get(), l = b('MercuryThreadInformer').get(), m = b('MercuryUnseenState').get(), n, o, p, q = function(s) {
        if (s || p.isOpen())
            m.markAsSeen();
    }, r = function(s, t) {
        n = s;
        o = h.find(n, '#mercurymessagesCountValue');
        p = t;
        this.render();
        k.subscribe('model-update-completed', function(u, v) {
            q(false);
        });
        l.subscribe('unseen-updated', this.render.bind(this));
        p.subscribe('marked-seen', j(q, this, true));
    };
    i(r.prototype, {
        render: function() {
            g.inform('jewel/count-updated', {
                jewel: 'mercurymessages',
                count: m.getUnseenCount()
            }, g.BEHAVIOR_STATE);
        }
    });
    e.exports = r;
}, null);
__d("MercuryThreadlistContainer.react", ["Bootloader", "immutable", "MercuryAPIArgsSource", "MercuryThreadlistConstants", "React", "SubscriptionsHandler", "OrionNUXRenderer"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    'use strict';
    var m = b('OrionNUXRenderer').module, n = k.createClass({
        displayName: "MercuryThreadlistContainer",
        propTypes: {
            ChildClass: k.PropTypes.func.isRequired,
            viewer: k.PropTypes.string.isRequired,
            folder: k.PropTypes.string.isRequired
        },
        getInitialState: function() {
            return {
                isLoading: true,
                threads: h.Map(),
                orionNUXAccepted: false
            };
        },
        componentDidMount: function() {
            g.loadModules(["MercuryOrderedThreadlist", "MercuryThreadInformer", "MercuryThreads"], function(o, p, q) {
                this._threadlist = o.getForFBID(this.props.viewer);
                this._threads = q.getForFBID(this.props.viewer);
                this._informer = p.getForFBID(this.props.viewer);
                this._subscriptions = new l();
                this._subscriptions.addSubscriptions(this._informer.subscribe('threadlist-updated', function(r, s) {
                    s && s.length && this._updateThreads(this.props.folder);
                }.bind(this)));
                this._handleFolderChange(this.props.folder);
            }.bind(this));
        },
        componentWillReceiveProps: function(o) {
            if (o.folder !== this.props.folder)
                this._handleFolderChange(o.folder);
        },
        componentWillUnmount: function() {
            this._cancelThreadsCallback();
            this._cancelThreadlistCallback();
            this._subscriptions && this._subscriptions.release();
        },
        render: function() {
            var o = this.props, p = o.ChildClass, q = o.folder, r = (function(s, t) {
                var u = {}, v = Object.prototype.hasOwnProperty;
                if (s == null)
                    throw new TypeError();
                for (var w in s)
                    if (v.call(s, w)&&!v.call(t, w))
                        u[w] = s[w];
                return u;
            })(o, {
                ChildClass: 1,
                folder: 1
            });
            return (k.createElement(p, k.__spread({}, r, {
                threads: this.state.threads.get(q) || [],
                isLoaded: !!this._threadlist && this._threadlist.hasLoadedThreadlist(q),
                isLoading: this.state.isLoading,
                onLoadMoreRequest: this._loadMoreThreads,
                orionNUX: this._renderOrionNUX()
            })));
        },
        _renderOrionNUX: function() {
            if (!m || this.state.orionNUXAccepted)
                return null;
            return (k.createElement(m, {
                type: "jewel",
                onAccepted: function() {
                    return this.setState({
                        orionNUXAccepted: true
                    });
                }.bind(this)
            }));
        },
        _handleFolderChange: function(o) {
            if (!this._hasInitialThreads(o)) {
                this._loadThreads(o, j.JEWEL_THREAD_COUNT + 1);
            } else if (this.state.isLoading) {
                this.setState({
                    isLoading: false
                }, function() {
                    this._updateThreads(o);
                }.bind(this));
            } else 
                this._updateThreads(o);
        },
        _loadMoreThreads: function() {
            if (!this.state.isLoading&&!this._threadlist.hasLoadedThreadlist(this.props.folder))
                this._loadThreads(this.props.folder, this._getThreadCount(this.props.folder) + j.JEWEL_MORE_COUNT + 1);
        },
        _loadThreads: function(o, p) {
            if (!this._threadlist)
                return;
            this._cancelThreadlistCallback();
            this.setState({
                isLoading: true
            }, function() {
                var q = this._threadlist.getThreadlist(j.RECENT_THREAD_OFFSET, p, o, function(r) {
                    return this.setState({
                        isLoading: false
                    });
                }.bind(this), true, i.JEWEL);
                this._threadlistSub = {
                    subscriberID: q,
                    folder: o
                };
            }.bind(this));
        },
        _updateThreads: function(o) {
            if (!this._threadlist ||!this._threads)
                return;
            this._cancelThreadsCallback();
            var p = this._threadlist.getAvailableThreadlistNow(o);
            this._threadsSub = this._threads.getMultiThreadMeta(p, function(q) {
                this.setState({
                    threads: this.state.threads.set(o, p.map(function(r) {
                        return q[r];
                    }))
                });
            }.bind(this));
        },
        _hasInitialThreads: function(o) {
            return !!(this._threadlist && (this._threadlist.getThreadCount(o) >= j.JEWEL_THREAD_COUNT + 1 || this._threadlist.hasLoadedThreadlist(o)));
        },
        _getThreadCount: function(o) {
            var p = this.state.threads.get(o);
            return p ? p.length : 0;
        },
        _cancelThreadsCallback: function() {
            this._threads && this._threadsSub && this._threads.unsubscribe(this._threadsSub);
        },
        _cancelThreadlistCallback: function() {
            this._threadlist && this._threadlistSub && this._threadlist.unsubscribe(this._threadlistSub.subscriberID, this._threadlistSub.folder);
        }
    });
    e.exports = n;
}, null);
__d("MercuryPresenceIndicator.react", ["Arbiter", "AvailableListConstants", "MercuryIDs", "PresenceStatus", "ReactComponentWithPureRenderMixin", "React", "SubscriptionsHandler", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    'use strict';
    var p = l.createClass({
        displayName: "MercuryPresenceIndicator",
        mixins: [k],
        propTypes: {
            threadID: l.PropTypes.string.isRequired
        },
        componentDidMount: function() {
            this._subscriptions = new m();
            this._subscriptions.addSubscriptions(g.subscribe(h.ON_AVAILABILITY_CHANGED, function() {
                return this.forceUpdate();
            }.bind(this)));
        },
        componentWillUnmount: function() {
            this._subscriptions && this._subscriptions.release();
        },
        render: function() {
            var q = this._getPresence();
            return (l.createElement("span", {
                className: this._getClasses(q)
            }, l.createElement("span", {
                className: "accessible_elem"
            }, this._getLabel(q))));
        },
        _getPresence: function() {
            if (!i.isCanonical(this.props.threadID)) {
                return null;
            } else {
                var q = i.getUserIDFromThreadID(this.props.threadID);
                return j.get(q);
            }
        },
        _getClasses: function(q) {
            return (("presenceIndicator") + (i.isMultichat(this.props.threadID) ? ' ' + "groupThread" : '') + (q == h.ACTIVE ? ' ' + "presenceActive" : '') + (q == h.MOBILE ? ' ' + "presenceMobile" : ''));
        },
        _getLabel: function(q) {
            switch (q) {
            case h.ACTIVE:
                return ("Active");
            case h.MOBILE:
                return ("Mobile");
            default:
                return null;
            }
        }
    });
    e.exports = p;
}, null);
__d("MercurySeenIndicator.react", ["MercuryDelayedRoger", "MercuryIDs", "React", "SubscriptionsHandler", "cx"], function(a, b, c, d, e, f, g, h, i, j, k) {
    'use strict';
    var l = i.createClass({
        displayName: "MercurySeenIndicator",
        propTypes: {
            thread: i.PropTypes.object.isRequired,
            viewer: i.PropTypes.string.isRequired
        },
        componentDidMount: function() {
            this._subscriptions = new j();
            this._subscriptions.addSubscriptions(g.subscribe('state-changed', function(m, n) {
                n[this.props.thread.thread_id] && this.forceUpdate();
            }.bind(this)));
        },
        componentWillUnmount: function() {
            this._subscriptions && this._subscriptions.release();
        },
        render: function() {
            var m = this._separateParticipants(), n = m.viewer, o = m.others, p = this._viewerLastToReply(n), q = this._seenByAll(o);
            return (i.createElement("span", {
                className: (("MercuryRepliedIndicator") + (p ? ' ' + "repliedLast" : '') + (p && q ? ' ' + "seenByAll" : ''))
            }));
        },
        _separateParticipants: function() {
            var m = h.getParticipantIDFromUserID(this.props.viewer), n = this.props.thread.participants.filter(function(o) {
                return o !== m;
            });
            return {
                viewer: m,
                others: n
            };
        },
        _viewerLastToReply: function(m) {
            var n = this.props.thread.participants;
            return n.length > 0 && n[0] === m;
        },
        _seenByAll: function(m) {
            var n = this.props.thread.thread_id;
            return g.getSeenBy(n).length === m.length;
        }
    });
    e.exports = l;
}, null);
__d("MercuryThreadPermalink.react", ["HighlanderFinchGating", "Link.react", "PagesMessengerThreadDialogLink.react", "ReactComponentWithPureRenderMixin", "React", "WebMessengerThreadPermalinks"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    'use strict';
    var m = k.createClass({
        displayName: "MercuryThreadPermalink",
        mixins: [j],
        propTypes: {
            threadID: k.PropTypes.string.isRequired,
            viewer: k.PropTypes.string.isRequired,
            folder: k.PropTypes.string,
            onClick: k.PropTypes.func
        },
        getInitialState: function() {
            return {
                permalinkURI: '#'
            };
        },
        componentDidMount: function() {
            this._getPermalinkURI(this.props);
        },
        componentWillReceiveProps: function(n) {
            if (n.threadID !== this.props.threadID || n.folder !== this.props.folder)
                this._getPermalinkURI(n);
        },
        render: function() {
            if (g.HIGHLANDER_FINCH_GATING)
                return (k.createElement(i, {
                    className: this.props.className,
                    threadID: this.props.threadID,
                    viewer: this.props.viewer,
                    folder: this.props.folder
                }, this.props.children));
            return (k.createElement(h, {
                className: this.props.className,
                href: this.state.permalinkURI,
                onClick: this.props.onClick,
                role: "button"
            }, this.props.children));
        },
        _getPermalinkURI: function(n) {
            if (g.HIGHLANDER_FINCH_GATING)
                return;
            this.setState(this.getInitialState());
            l.getThreadURI(n.threadID, function(o) {
                return this.isMounted() && this.setState({
                    permalinkURI: o
                });
            }.bind(this), n.folder);
        }
    });
    e.exports = m;
}, null);
__d("MercuryThreadReadToggle.react", ["MercuryThreadActions", "ReactComponentWithPureRenderMixin", "React", "ReadToggle.react", "fbt", "invariant"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    'use strict';
    var m = i.createClass({
        displayName: "MercuryThreadReadToggle",
        mixins: [h],
        propTypes: {
            threadID: i.PropTypes.string.isRequired,
            viewer: i.PropTypes.string.isRequired,
            unreadCount: i.PropTypes.number.isRequired
        },
        render: function() {
            l(this.props.unreadCount >= 0);
            return (i.createElement(j, {
                isRead: this.props.unreadCount === 0,
                onClick: this._handleClick,
                readLabel: "Mark as Unread",
                unreadLabel: "Mark as Read"
            }));
        },
        _handleClick: function(n) {
            n.preventDefault();
            n.stopPropagation();
            var o = g.getForFBID(this.props.viewer);
            this.props.unreadCount > 0 ? o.markRead(this.props.threadID) : o.markUnread(this.props.threadID);
        }
    });
    e.exports = m;
}, null);
__d("MercuryThreadSnippet.react", ["MercuryAttachmentSnippet.react", "MercuryIDs", "MercuryParticipants", "React", "TextWithEmoticons.react", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    'use strict';
    var m = j.createClass({
        displayName: "MercuryThreadSnippet",
        propTypes: {
            thread: j.PropTypes.object.isRequired,
            viewer: j.PropTypes.string.isRequired
        },
        getInitialState: function() {
            return {
                snippet: null
            };
        },
        componentDidMount: function() {
            this._ensureParticipants(this.props);
        },
        componentWillReceiveProps: function(n) {
            this._ensureParticipants(n);
        },
        componentWillUnmount: function() {
            this._cancelParticipantFetch();
        },
        render: function() {
            return (j.createElement("span", {
                className: this.props.className
            }, this._renderAttachmentIndicator(), this._renderSnippet()));
        },
        _renderAttachmentIndicator: function() {
            if (!this.props.thread.snippet ||!this._hasAttachments())
                return null;
            return j.createElement("span", {
                className: "MercuryAttachmentIndicator"
            });
        },
        _renderSnippet: function() {
            var n = this.props.thread, o = h.getParticipantIDFromUserID(this.props.viewer), p = this._renderInnerSnippet(), q = n.participants.length;
            if (n.is_subscribed)
                q--;
            if (this._hasAttachments() ||!n.snippet_sender || o == n.snippet_sender || q <= 1)
                return p;
            var r = i.getNow(n.snippet_sender);
            if (!r ||!r.short_name)
                return p;
            return (l._("{name}: {conversation_snippet}", [l.param("name", r.short_name), l.param("conversation_snippet", p)]));
        },
        _renderInnerSnippet: function() {
            var n = this.props.thread, o = n.snippet;
            if (o && o.startsWith('?OTR'))
                return ("[encrypted message]");
            if (o)
                return (j.createElement(k, {
                    renderEmoticons: true,
                    renderEmoji: true,
                    text: o.replace(/\r\n|[\r\n]/g, ' ')
                }));
            if (this._hasAttachments())
                return (j.createElement(g, {
                    thread: n,
                    viewer: this.props.viewer
                }));
            return null;
        },
        _hasAttachments: function() {
            var n = this.props.thread;
            return (n.snippet_has_attachment && n.snippet_attachments && n.snippet_attachments.length > 0);
        },
        _ensureParticipants: function(n) {
            var o = h.getParticipantIDFromUserID(n.viewer), p = n.thread.snippet_sender;
            this._cancelParticipantFetch();
            if (!i.getNow(o) ||!i.getNow(p))
                i.getMulti([o, p], function(q) {
                    return this.forceUpdate();
                }.bind(this));
        },
        _cancelParticipantFetch: function() {
            this._participantSub && this._participantSub.remove();
        }
    });
    e.exports = m;
}, null);
__d("MercuryThreadTimestamp.react", ["ReactComponentWithPureRenderMixin", "React", "formatDate", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j) {
    'use strict';
    var k = h.createClass({
        displayName: "MercuryThreadTimestamp",
        mixins: [g],
        propTypes: {
            time: h.PropTypes.number,
            title: h.PropTypes.string,
            text: h.PropTypes.string
        },
        render: function() {
            var l = this.props.time;
            if (!l)
                return h.createElement("abbr", null);
            return (h.createElement("abbr", {
                className: j(this.props.className, 'timestamp'),
                title: this.props.title || (new Date(l)).toLocaleDateString(),
                "data-utime": l / 1000
            }, this.props.text || i(new Date(l), 'g:ia')));
        }
    });
    e.exports = k;
}, null);
__d("MessagesJewelInlineThumbnail.react", ["MercuryAttachmentType", "React", "cx"], function(a, b, c, d, e, f, g, h, i) {
    'use strict';
    var j = h.createClass({
        displayName: "MessagesJewelInlineThumbnail",
        propTypes: {
            thread: h.PropTypes.object.isRequired
        },
        render: function() {
            var k = this._getPhotoAttachments();
            if (k.length === 0)
                return h.createElement("span", null);
            var l = k[0].thumbnail_url;
            if (!l)
                return h.createElement("span", null);
            var m = h.createElement("span", {
                className: "_56hv"
            }, h.createElement("i", {
                style: {
                    backgroundImage: ("url(" + l + ")")
                }
            }));
            if (k.length > 1)
                m = h.createElement("span", null, h.createElement("span", {
                    className: "_56hy"
                }), m);
            return m;
        },
        _getPhotoAttachments: function() {
            var k = this.props.thread;
            if (!k.snippet_attachments)
                return [];
            return k.snippet_attachments.filter(function(l) {
                return l.attach_type === g.PHOTO;
            });
        }
    });
    e.exports = j;
}, null);
__d("MessagesJewelThreadListRow.react", ["ImageBlock.react", "ImmutableObject", "MercuryPresenceIndicator.react", "MercurySeenIndicator.react", "MercuryThreadImage.react", "MercuryThreadPermalink.react", "MercuryThreadReadToggle.react", "MercuryThreadSnippet.react", "MercuryThreadTimestamp.react", "MercuryThreadTitle.react", "MessagesJewelInlineThumbnail.react", "ReactComponentWithPureRenderMixin", "React", "cx", "requireWeak"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
    'use strict';
    var v;
    u(['ChatOpenTab'], function(x) {
        v = x;
    });
    var w = s.createClass({
        displayName: "MessagesJewelThreadListRow",
        mixins: [r],
        propTypes: {
            thread: s.PropTypes.instanceOf(h).isRequired,
            viewer: s.PropTypes.string.isRequired
        },
        componentDidMount: function() {
            if (!v)
                u(['ChatOpenTab'], function(x) {
                    this.forceUpdate();
                }.bind(this));
        },
        render: function() {
            return (s.createElement("li", {
                className: ((this.props.thread.unread_count > 0 ? "jewelItemNew" : ''))
            }, s.createElement(l, {
                className: "messagesContent",
                threadID: this.props.thread.thread_id,
                viewer: this.props.viewer,
                folder: this.props.thread.folder,
                onClick: this._handleClick
            }, s.createElement(g, {
                spacing: "medium"
            }, s.createElement("div", {
                className: "MercuryThreadImage"
            }, s.createElement(k, {
                thread: this.props.thread,
                viewer: this.props.viewer
            })), s.createElement("div", {
                className: "content"
            }, s.createElement("div", {
                className: "author"
            }, s.createElement("strong", null, s.createElement(p, {
                thread: this.props.thread,
                viewer: this.props.viewer,
                showUnreadCount: true
            })), this._renderPresenceIndicator()), s.createElement("div", {
                className: "snippet preview"
            }, s.createElement(j, {
                thread: this.props.thread,
                viewer: this.props.viewer
            }), s.createElement(n, {
                thread: this.props.thread,
                viewer: this.props.viewer
            })), s.createElement("div", {
                className: "time"
            }, s.createElement(o, {
                time: this.props.thread.timestamp,
                title: this.props.thread.timestamp_absolute,
                text: this.props.thread.timestamp_relative
            }))), s.createElement("div", null, s.createElement(q, {
                thread: this.props.thread
            }), s.createElement("div", {
                className: "x_div"
            }, s.createElement(m, {
                threadID: this.props.thread.thread_id,
                viewer: this.props.viewer,
                unreadCount: this.props.thread.unread_count
            })))))));
        },
        _renderPresenceIndicator: function() {
            if (!v ||!v.canOpenTab())
                return null;
            return (s.createElement(i, {
                threadID: this.props.thread.thread_id
            }));
        },
        _handleClick: function(x) {
            if (x.button === 1 || x.altKey || x.ctrlKey || x.metaKey || x.shiftKey)
                return;
            if (v && v.canOpenTab()) {
                x.preventDefault();
                v.openThread(this.props.thread.thread_id, 'jewel');
            }
        }
    });
    e.exports = w;
}, null);
__d("MessagesJewelThreadList.react", ["ImmutableObject", "LegacyScrollableArea.react", "Link.react", "MessagesJewelThreadListRow.react", "React", "XUISpinner.react", "cx", "fbt", "throttle"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    'use strict';
    var p = k.createClass({
        displayName: "MessagesJewelThreadList",
        propTypes: {
            isLoaded: k.PropTypes.bool,
            isLoading: k.PropTypes.bool,
            onLoadMoreRequest: k.PropTypes.func,
            orionNUX: k.PropTypes.element,
            threads: k.PropTypes.arrayOf(k.PropTypes.instanceOf(g)).isRequired,
            viewer: k.PropTypes.string.isRequired
        },
        render: function() {
            return (k.createElement(h, {
                className: "jewelHighlight",
                height: 325,
                onScroll: o(this._handleScroll, 50),
                ref: "scrollable"
            }, k.createElement("ul", {
                className: "jewelContent"
            }, this.props.orionNUX ? k.createElement("li", null, this.props.orionNUX) : null, this.props.threads.map(function(q) {
                return k.createElement(j, {
                    key: q.thread_id,
                    thread: q,
                    viewer: this.props.viewer
                });
            }.bind(this))), this._renderLoadMoreLink()));
        },
        _renderLoadMoreLink: function() {
            if (this.props.isLoaded)
                return null;
            if (this.props.isLoading)
                return (k.createElement("div", {
                    className: "_v8y"
                }, k.createElement(l, null)));
            return (k.createElement("div", {
                className: "_v8y"
            }, k.createElement(i, {
                href: "#",
                onClick: this._handleLoadMoreClick
            }, "Show Older")));
        },
        _handleScroll: function() {
            if (this.props.isLoaded)
                return;
            var q = this.refs.scrollable.getArea();
            if (q.getScrollTop() + q.getClientHeight() >= q.getScrollHeight() - 1)
                this.props.onLoadMoreRequest && this.props.onLoadMoreRequest();
        },
        _handleLoadMoreClick: function(q) {
            q.preventDefault();
            this.props.onLoadMoreRequest && this.props.onLoadMoreRequest();
        }
    });
    e.exports = p;
}, null);
__d("MercuryJewelThreadlistControl", ["ArbiterMixin", "CurrentUser", "CSS", "DOM", "Event", "JSLogger", "MercuryThreadlistConstants", "MercuryThreadlistContainer.react", "MessagesJewelThreadList.react", "MessagingTag", "React", "copyProperties", "csx", "cx", "tx", "MercuryThreadInformer", "MercuryUnreadState"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
    var v = b('MercuryThreadInformer').get(), w = b('MercuryUnreadState').get(), x = l.create('mercury_jewel');
    function y(ca) {
        this._threadlistContainer = j.find(ca, "._3v_l");
        this._currentFolder = p.INBOX;
        this._jewelFolderLinks = {};
        this._jewelFolderLinks[p.INBOX] = j.find(ca, "._1sde");
        this._jewelFolderLinks[p.OTHER] = j.find(ca, "._1sdf");
        this._jewelFolderCounts = {};
        this._jewelFolderCounts[p.INBOX] = j.find(ca, "._1sdg");
        this._jewelFolderCounts[p.OTHER] = j.find(ca, "._1sdh");
        aa.bind(this)();
        k.listen(this._jewelFolderLinks[p.INBOX], 'click', z.bind(this, p.INBOX));
        k.listen(this._jewelFolderLinks[p.OTHER], 'click', z.bind(this, p.OTHER));
        v.subscribe('unread-updated', aa.bind(this));
        this.render();
        x.bump('opened_threadlist_' + this._currentFolder);
    }
    r(y, {
        EVENT_THREADS_LOADED: 'threads-loaded',
        EVENT_THREADS_RENDERED: 'threads-rendered'
    });
    r(y.prototype, g);
    r(y.prototype, {
        render: function() {
            q.render(q.createElement(n, {
                ChildClass: o,
                viewer: h.getID(),
                folder: this._currentFolder
            }), this._threadlistContainer, function() {
                return this.inform(y.EVENT_THREADS_RENDERED);
            }.bind(this));
        }
    });
    function z(ca) {
        if (this._currentFolder != ca) {
            x.bump('opened_threadlist_' + ca);
            i.addClass(this._jewelFolderLinks[ca], "_1sdd");
            i.removeClass(this._jewelFolderLinks[this._currentFolder], "_1sdd");
            this._currentFolder = ca;
            this.render();
        }
    }
    function aa() {
        ba.bind(this)(p.INBOX);
        ba.bind(this)(p.OTHER);
    }
    function ba(ca) {
        var da;
        if (w.exceedsMaxCount(ca)) {
            da = m.MAX_UNREAD_COUNT;
        } else 
            da = w.getUnreadCount(ca);
        var ea = this._jewelFolderCounts[ca];
        if (da > 0) {
            if (da == m.MAX_UNREAD_COUNT)
                da += '+';
            j.setContent(ea, u._("({unread_count})", {
                unread_count: da
            }));
        } else 
            j.setContent(ea, '');
    }
    e.exports = y;
}, null);
__d("MercuryJewel", ["MercuryJewelCountControl", "MercuryServerRequests", "userAction", "MercuryChannelHandler"], function(a, b, c, d, e, f, g, h, i) {
    b('MercuryChannelHandler').get().turnOn();
    var j = false;
    function k(l, m) {
        "use strict";
        h.get().handleUpdate(m);
        var n = l.getRoot(), o = l.getFlyout();
        this.$MercuryJewel0 = new g(n, l);
        if (l.getRoot() && l.isOpen()) {
            this.$MercuryJewel1(o);
        } else 
            l.subscribe('opened', this.$MercuryJewel1.bind(this, o));
    }
    k.prototype.$MercuryJewel1 = function(l) {
        "use strict";
        this.$MercuryJewel2 = i('messages').uai('click', 'jewel');
        this.$MercuryJewel3 = this.$MercuryJewel4 = true;
        if (!j) {
            d(['MercuryJewelThreadlistControl'], function(m) {
                this.$MercuryJewel5 = new m(l);
                this.$MercuryJewel5.subscribe(m.EVENT_THREADS_LOADED, this.$MercuryJewel6.bind(this));
                this.$MercuryJewel5.subscribe(m.EVENT_THREADS_RENDERED, this.$MercuryJewel7.bind(this));
            }.bind(this));
            j = true;
        }
    };
    k.prototype.$MercuryJewel6 = function() {
        "use strict";
        if (this.$MercuryJewel3) {
            this.$MercuryJewel2.add_event('loaded');
            this.$MercuryJewel3 = false;
        }
    };
    k.prototype.$MercuryJewel7 = function() {
        "use strict";
        if (this.$MercuryJewel4) {
            this.$MercuryJewel2.add_event('rendered');
            this.$MercuryJewel4 = false;
        }
    };
    e.exports = k;
}, null);
__d("RenderManager", ["copyProperties"], function(a, b, c, d, e, f, g) {
    function h(i) {
        "use strict";
        this._isDirty = false;
        this._obj = i;
    }
    h.prototype.dirty = function() {
        "use strict";
        if (!this._isDirty) {
            this._isDirty = true;
            setTimeout(this._doPaint.bind(this), 0);
        }
    };
    h.prototype._doPaint = function() {
        "use strict";
        this._isDirty = false;
        this._obj.paint();
    };
    e.exports = h;
}, null);
__d("CounterDisplay", ["Arbiter", "CSS", "DOM", "RenderManager", "Run", "$", "copyProperties", "removeFromArray"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    function o(p, q, r, s, t, u) {
        m(this, {
            _name: p,
            _valueNode: l(q),
            _wrapperNode: l(r) || null,
            _statusClass: t,
            _rm: new j(this),
            _arbiterSubscription: null,
            _count: 0
        });
        var v = this._valueNode.firstChild;
        if (v) {
            var w = parseInt(v.nodeValue, 10);
            if (!isNaN(w))
                this._count = w;
        }
        this._statusNode = s ? l(s) : null;
        this._subscribeAll();
        o.instances.push(this);
        if (!u)
            k.onLeave(this._destroy.bind(this), true);
    }
    m(o, {
        EVENT_TYPE_ADJUST: 'CounterDisplay/adjust',
        EVENT_TYPE_UPDATE: 'CounterDisplay/update',
        instances: [],
        adjustCount: function(p, q) {
            g.inform(o.EVENT_TYPE_ADJUST + '/' + p, q);
        },
        setCount: function(p, q) {
            g.inform(o.EVENT_TYPE_UPDATE + '/' + p, q);
        }
    });
    m(o.prototype, {
        _destroy: function() {
            delete this._valueNode;
            delete this._wrapperNode;
            if (this._arbiterSubscription) {
                this._arbiterSubscription.unsubscribe();
                delete this._arbiterSubscription;
            }
            n(o.instances, this);
        },
        adjustCount: function(p) {
            this._count = Math.max(0, this._count + p);
            this._rm.dirty();
            return this;
        },
        setCount: function(p) {
            this._count = Math.max(0, p);
            this._rm.dirty();
            return this;
        },
        paint: function() {
            i.setContent(this._valueNode, this._count);
            this._toggleNodes();
        },
        _toggleNodes: function() {
            if (this._wrapperNode)
                h.conditionClass(this._wrapperNode, 'hidden_elem', this._count <= 0);
            if (this._statusClass && this._statusNode)
                h.conditionClass(this._statusNode, this._statusClass, this._count > 0);
        },
        _subscribeAll: function() {
            var p = [o.EVENT_TYPE_ADJUST + '/' + this._name, o.EVENT_TYPE_UPDATE + '/' + this._name];
            this._arbiterSubscription = g.subscribe(p, this._onInform.bind(this), g.SUBSCRIBE_NEW);
        },
        _onInform: function(p, q) {
            q = parseInt(q);
            if (isNaN(q))
                return;
            if (p.indexOf(o.EVENT_TYPE_ADJUST)!=-1) {
                this.adjustCount(q);
            } else if (p.indexOf(o.EVENT_TYPE_UPDATE)!=-1) {
                this.setCount(q);
            } else 
                return;
            return;
        }
    });
    e.exports = o;
}, null);
__d("MessagingEvents", ["Arbiter", "ChannelConstants", "arrayContains", "copyProperties", "isEmpty"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = {}, m = new g();
    function n(o) {
        if (!k(l))
            return;
        for (var p in o)
            m.inform('count/' + p, o[p]);
    }
    m.subscribe('mark-as-read', function(o, p) {
        (p.tids || p.chat_ids || []).forEach(function(q) {
            q = '' + q;
            if (!(q in l)) {
                l[q] = true;
                var r = function() {
                    m.unsubscribe(s);
                    clearTimeout(t);
                    delete l[q];
                }, s = m.subscribe('read', function(u, v) {
                    if (i((v.tids || []), q) || i((v.chat_ids || []), q))
                        r();
                }), t = setTimeout(r, 60000);
            }
        });
    });
    g.subscribe(h.getArbiterType('messaging'), function(o, p) {
        var q = j({}, p.obj), event = q.event || '';
        delete q.type;
        delete q.event;
        m.inform(event, q);
        if ('unread_counts' in q) {
            var r = q.unread_counts;
            n({
                unread: r.inbox,
                other_unseen: r.other
            });
        }
    });
    g.subscribe(h.getArbiterType('inbox'), function(o, p) {
        var q = j(p.obj);
        delete q.type;
        n(q);
    });
    a.MessagingEvents = e.exports = m;
}, 3);
__d("TitanLeftNav", ["CounterDisplay", "MessagingEvents"], function(a, b, c, d, e, f, g, h) {
    var i = {
        initialize: function() {
            h.subscribe('count/other_unseen', function(j, k) {
                g.setCount('other_unseen', k);
            });
        }
    };
    e.exports = i;
}, null);
__d("AccessibilityShortcut", ["AccessibilityLogger", "Event", "Focus", "ge", "onEnclosingPageletDestroy", "warning"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = {
        init: function(n, o) {
            var p = h.listen(n, 'click', function(q) {
                q.preventDefault();
                var r = j(o);
                if (r) {
                    i.set(r);
                    g.logSRKey();
                } else 
                    l(r, 'Failed to set focus on element with ID: %s', o);
            });
            k(n, function() {
                return p.remove();
            });
        }
    };
    e.exports = m;
}, null);
__d("AccessibleMenu", ["Event", "CSS", "DOM", "Keys", "TabbableElements", "Toggler"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m, n, o;
    function p() {
        var x = i.scry(m, 'a[rel="toggle"]')[0];
        x && x.focus();
        l.getInstance(m).hide();
    }
    function q(x) {
        if (!x)
            return false;
        h.removeClass(x, 'selected');
        x.setAttribute('aria-selected', 'false');
    }
    function r(x) {
        if (!x)
            return false;
        h.addClass(x, 'selected');
        x.setAttribute('aria-selected', 'true');
        var y = k.find(x);
        if (y[0])
            y[0].focus();
    }
    function s(x) {
        var y = i.scry(m, '.selected')[0], z = n.indexOf(y) + x, aa = n[z];
        if (!aa)
            return false;
        q(y);
        r(aa);
    }
    function t(x) {
        if (!l.isShown() || l.getActive() !== m || h.hasClass(m, w.MENU_HIDDEN))
            return true;
        var y = g.getKeyCode(x);
        switch (y) {
        case j.TAB:
            s(x.shiftKey?-1 : 1);
            g.prevent(x);
            break;
        case j.ESC:
            p();
            g.prevent(x);
            break;
        case j.UP:
        case j.DOWN:
            s(y === j.UP?-1 : 1);
            g.prevent(x);
            break;
        }
    }
    function u(x, y) {
        m = y.getActive();
        n = i.scry(m, '[role="menuitem"]');
        if (!o)
            o = g.listen(document.documentElement, 'keydown', t);
    }
    function v() {
        if (l.getActive() == m)
            q(i.scry(m, '.selected')[0]);
    }
    var w = {
        init: function(x) {
            l.listen('show', x, u);
            l.listen('hide', x, v);
        },
        MENU_HIDDEN: 'menu_hidden'
    };
    e.exports = w;
}, null);
__d("isEmail", [], function(a, b, c, d, e, f) {
    var g = /^[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;
    function h(i) {
        return g.test(i);
    }
    e.exports = h;
}, null);
__d("NotificationJewelReminder", ["Arbiter", "ContextualDialog", "ContextualDialogXUITheme", "DOM", "Event", "ImageBlock.react", "LayerFadeOnHide", "LayerFadeOnShow", "NotificationConstants", "NotificationStore", "NotificationUpdates", "React", "SubscriptionsHandler", "Toggler", "$", "cx", "fbt", "intlList"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) {
    var y = 2;
    z.init = function(aa) {
        "use strict";
        new z(aa);
    };
    function z(aa) {
        "use strict";
        this.$NotificationJewelReminder0 = aa;
        if (p.getCount()) {
            this.$NotificationJewelReminder1();
            return;
        }
        q.subscribeOnce('update-notifications', function(ba, ca) {
            if (ca.payloadsource === o.PayloadSourceType.INITIAL_LOAD)
                this.$NotificationJewelReminder1();
        }.bind(this));
    }
    z.prototype.$NotificationJewelReminder1 = function() {
        "use strict";
        p.getNotifications(p.getCount(), this.$NotificationJewelReminder3.bind(this));
    };
    z.prototype.$NotificationJewelReminder3 = function(aa) {
        "use strict";
        var ba = t.getInstance(u('fbNotificationsJewel'));
        if (ba && ba.isShown())
            return;
        var ca = [], da, ea = Object.keys(aa);
        for (var fa = 0; fa < ea.length; fa++) {
            var ga = aa[ea[fa]].actors;
            if (ga.length === 0)
                continue;
            for (var ha = 0; ha < ga.length; ha++) {
                da = da || ga[ha].profile_picture.uri;
                if (ca.length < y && ga[ha].name && ca.indexOf(ga[ha].name)===-1)
                    ca.push(ga[ha].name);
            }
            if (ca.length === y)
                break;
        }
        if (ca.length === 0 ||!da)
            return;
        var ia = r.createElement("div", {
            className: "_5bov"
        }, r.createElement(l, null, r.createElement("img", {
            className: "_5bow",
            src: da
        }), r.createElement("div", null, this.$NotificationJewelReminder4(ea.length, ca)))), ja = j.create('div');
        r.render(ia, ja);
        var ka = new h({
            alignment: 'right',
            contextSelector: '#fbNotificationsJewel',
            offsetY: - 10,
            position: 'below',
            theme: i,
            width: 210
        }, ja);
        ka.enableBehaviors([n, m]);
        this.$NotificationJewelReminder5(ka);
    };
    z.prototype.$NotificationJewelReminder4 = function(aa, ba) {
        "use strict";
        ba = ba.map(function(ca) {
            return r.createElement("b", null, ca);
        });
        return (w._({
            "notifications": "{number} notifications from {notification senders}",
            "notification": "{number} notification from {notification senders}"
        }, [w.param("number", aa), w['enum'](aa > 1 ? 'notifications' : 'notification', {
            notifications: "notifications",
            notification: "notification"
        }), w.param("notification senders", x(ba))]));
    };
    z.prototype.$NotificationJewelReminder5 = function(aa) {
        "use strict";
        aa.show();
        this.$NotificationJewelReminder6 = aa;
        var ba = aa.getRoot();
        this.$NotificationJewelReminder7 = setTimeout(this.$NotificationJewelReminder8.bind(this), this.$NotificationJewelReminder0.show_time);
        this.$NotificationJewelReminder9 = new s();
        this.$NotificationJewelReminder9.addSubscriptions(g.subscribe('layer_shown', function(ca, da) {
            if (da && da.type === 'Jewel')
                this.$NotificationJewelReminder8();
        }.bind(this)), k.listen(ba, 'mouseenter', function() {
            clearTimeout(this.$NotificationJewelReminder7);
        }.bind(this)), k.listen(ba, 'mouseleave', this.$NotificationJewelReminder8.bind(this)), k.listen(ba, 'click', function() {
            this.$NotificationJewelReminder8();
            t.show(u('fbNotificationsJewel'));
        }.bind(this)));
    };
    z.prototype.$NotificationJewelReminder8 = function() {
        "use strict";
        clearTimeout(this.$NotificationJewelReminder7);
        this.$NotificationJewelReminder6.hide();
        this.$NotificationJewelReminder9.release();
    };
    e.exports = z;
}, null);
__d("PagesVoiceBar", ["$", "Arbiter", "AsyncRequest", "ChannelConstants", "DOM", "URI"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = 'PagesVoiceBar/initialized', n = 'PagesVoiceBar/switchVoice', o = 'page_transition', p = 'pages_voice_bar_sync', q = null, r = null, s = false;
    function t(z, aa) {
        new i('/ajax/pages/switch_voice.php').setData(aa).setHandler(function(ba) {
            x();
        }).send();
    }
    function u() {
        q = null;
    }
    function v(z, aa) {
        if (aa.obj.profile_id && aa.obj.profile_id === q)
            x();
    }
    function w(z) {
        h.subscribe(m, z);
    }
    function x() {
        l.getNextURI().go();
    }
    var y = {
        initVoiceBar: function() {
            if (s)
                return;
            r = g('pagesVoiceBarContent');
            h.subscribe(n, t);
            h.subscribe(o, u);
            h.subscribe(j.getArbiterType(p), v);
            s = true;
            h.inform(m, null, h.BEHAVIOR_STATE);
        },
        update: function(z, aa) {
            w(function() {
                q = aa;
                k.setContent(r, z);
            });
        }
    };
    e.exports = y;
}, null);
__d("XPrivacyCheckupSpawnDialogControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/privacy\/checkup\/dialog\/show\/", {
        source: {
            type: "Enum"
        }
    });
}, null);
__d("PrivacyLiteFlyout", ["Animation", "Arbiter", "ArbiterMixin", "AsyncDialog", "AsyncRequest", "Banzai", "CSS", "DOM", "Ease", "Event", "Parent", "PrivacyConst", "SelectorDeprecated", "Style", "SubscriptionsHandler", "Toggler", "XPrivacyCheckupSpawnDialogControllerURIBuilder", "XPrivacyRemindersDismissControllerURIBuilder", "copyProperties", "csx", "cx", "ge"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba) {
    var ca = 'PrivacyLiteFlyout/expandingSection', da = {}, ea = {};
    function fa(oa, pa, qa) {
        var ra = pa ? 0: oa.offsetHeight;
        t.set(oa, 'height', ra + 'px');
        t.set(oa, 'overflow', 'hidden');
        m.show(oa);
        var sa = pa ? oa.scrollHeight: 0, ta = n.getID(oa);
        da[ta] && da[ta].stop();
        da[ta] = new g(oa).to('height', sa).ondone(function() {
            da[ta] = null;
            t.set(oa, 'height', '');
            t.set(oa, 'overflow', '');
            sa || m.hide(oa);
            qa();
        }).duration(Math.abs(sa - ra) * 1.5).ease(o.sineOut).go();
    }
    function ga(oa) {
        return new k().setURI(oa).send();
    }
    function ha() {
        return ga('/ajax/privacy/privacy_lite/increment_masher_tip_count');
    }
    function ia() {
        return ga('/ajax/privacy/privacy_lite/dismiss_masher_tip');
    }
    function ja(oa) {
        var event = 'other_section';
        switch (oa) {
        case 'who_can_see':
        case 'who_can_contact':
        case 'how_to_stop':
            event = oa;
            break;
        }
        return event;
    }
    var ka = null, la = false, ma = false, na = y({
        loadBody: function() {
            this._loadBody(false);
        },
        loadBodyFromMegaphone: function() {
            this._loadBody(true);
        },
        _loadBody: function(oa) {
            if (!la && ba('fbPrivacyLiteFlyoutLoading')) {
                la = true;
                new k('/ajax/privacy/privacy_lite/loader').setData({
                    from_megaphone: oa
                }).send();
            }
        },
        _addListener: function(oa, event, pa) {
            return p.listen(oa, 'click', function() {
                l.post('privacy_lite', {
                    event: event,
                    exit_point: pa
                });
            });
        },
        addLoggingElem: function(oa, event, pa) {
            var qa = this._loggingElements.length, ra = {
                elem: oa,
                event: event,
                exit: pa
            };
            this._loggingElements[qa] = ra;
        },
        registerSettingsLinkLogging: function(oa, event, pa) {
            this._settingsLinkListener && this._settingsLinkListener.release();
            this._settingsLinkListener = this._addListener(oa, event, pa);
        },
        _subscribeListeners: function() {
            this._loggingElements && this._loggingElements.forEach(function(oa) {
                this._subscriptions && this._subscriptions.addSubscriptions(this._addListener(oa.elem, oa.event, oa.exit));
            }, this);
        },
        renderBody: function(oa, pa) {
            var qa = ba('fbPrivacyLiteFlyoutLoading');
            if (qa) {
                n.replace(qa, oa);
                na.registerCallback(function() {
                    na.inform('load', null, h.BEHAVIOR_STATE);
                }, pa);
            }
        },
        hideCleanup: function(oa) {
            h.inform(ca);
            var pa = n.scry(oa, "._2va0").forEach(function(qa) {
                m.removeClass(qa, "_2va0");
            });
        },
        registerFlyoutToggler: function(oa, pa, qa) {
            this._loggingElements = [];
            ka = pa;
            var ra = v.createInstance(oa);
            ra.setSticky(false);
            v.listen(['show', 'hide'], pa, function(sa) {
                na.inform(sa);
                ma = sa === 'show';
                if (!ma) {
                    na.hideCleanup(oa);
                    ra.hide();
                    this._subscriptions && this._subscriptions.release();
                    this._subscriptions = null;
                    h.inform('layer_hidden', {
                        type: 'PrivacyShortcutsFlyout'
                    });
                } else {
                    h.inform('layer_shown', {
                        type: 'PrivacyShortcutsFlyout'
                    });
                    if (qa) {
                        qa.start(this);
                        qa = null;
                    }
                    h.subscribeOnce(ca, function() {
                        this._subscriptions && this._subscriptions.release();
                        this._subscriptions = new u();
                        this._subscribeListeners();
                    }.bind(this));
                    l.post('privacy_lite', {
                        event: 'show_flyout',
                        exit_point: null
                    });
                }
            }.bind(this));
        },
        isFlyoutVisible: function() {
            return ka && v.getActive() === ka;
        },
        exists: function() {
            return !!n.scry(document.body, "._59fc")[0];
        },
        setFlyoutVisible: function(oa) {
            oa ? v.show(ka) : v.hide(ka);
        },
        showSection: function(oa) {
            var pa = ea[oa];
            if (!pa)
                return;
            if (!pa.sublist_container) {
                na.inform('expanded', oa, h.BEHAVIOR_STATE);
                return;
            }
            var qa = pa.chevron, ra = pa.sublist_container;
            h.inform(ca, qa);
            if (na.inform('expand', oa) !== false) {
                m.removeClass(qa, "_9or");
                m.addClass(qa, "_9os");
                fa(ra, true, function() {
                    na.inform('expanded', oa);
                });
            }
        },
        hideSection: function(oa, pa, qa) {
            var ra = ea[oa], sa = ra.chevron, ta = ra.sublist_container;
            if (qa === sa)
                return;
            if (na.inform('collapse', oa) !== false) {
                m.addClass(sa, "_9or");
                m.removeClass(sa, "_9os");
                fa(ta, false, function() {
                    na.inform('collapsed', oa);
                });
            }
        },
        toggleSection: function(oa) {
            var pa = ea[oa].chevron;
            v.getInstance(pa).hide();
            if (m.hasClass(pa, "_9or")) {
                na.showSection(oa);
                l.post('privacy_lite', {
                    event: ja(oa) + '_expand',
                    exit_point: null
                });
                new k('/ajax/privacy/privacy_lite/log_section_expand').setData({
                    section: oa
                }).send();
            } else {
                na.hideSection(oa);
                l.post('privacy_lite', {
                    event: ja(oa) + '_collapse',
                    exit_point: null
                });
            }
        },
        registerSection: function(oa, pa) {
            ea[oa] = pa;
            if (pa.sublist_container) {
                h.subscribe(ca, na.hideSection.bind(null, oa));
                p.listen(pa.section_block, 'click', na.toggleSection.bind(null, oa));
            }
            na.inform(oa);
        },
        registerInlineHelpOnAudienceChangeOldSelector: function(oa, pa, qa, ra) {
            s.subscribe('select', function(sa, ta) {
                if (ta.selector != oa)
                    return;
                this._registerInlineHelpOnAudienceChange(pa, qa, ra, ta.value);
            }.bind(this));
        },
        registerInlineHelpOnAudienceChangeNewSelector: function(oa, pa, qa, ra) {
            oa = oa.getInstance();
            oa.subscribe('changed', function(sa) {
                this._registerInlineHelpOnAudienceChange(pa, qa, ra, oa.getSelectedBaseValue());
            }.bind(this));
        },
        registerSelectorLogging: function(oa, pa, qa, ra) {
            oa = oa.getInstance();
            oa.subscribe('open', function() {
                l.post('privacy_lite', {
                    event: pa,
                    exit_point: null
                });
            });
            oa.subscribe('close', function() {
                l.post('privacy_lite', {
                    event: qa,
                    exit_point: null
                });
            });
            oa.subscribe('changed', function() {
                l.post('privacy_lite', {
                    event: ra,
                    exit_point: null
                });
            });
        },
        _registerInlineHelpOnAudienceChange: function(oa, pa, qa, ra) {
            var sa = n.find(oa, "._9o_"), ta = n.find(oa, "._2v9_");
            if (qa) {
                var ua = n.find(oa, "._5n9w"), va = (ra == r.BaseValue.EVERYONE);
                m.conditionShow(ua, va);
                m.conditionShow(sa, !va);
                if (ua && va) {
                    var wa = (new x()).setString('type', 'delta_everyone').setBool('log_plite', true).getURI();
                    new k(wa).send();
                }
            } else 
                m.show(sa);
            m.hide(ta);
            if (pa)
                new k('/ajax/privacy/privacy_lite/kill_intro').send();
        },
        registerInlineHelpXOutOnClick: function(oa, pa, qa) {
            p.listen(oa, 'click', function() {
                m.addClass(pa, "_9p0");
            });
        },
        registerBlockUnhideOnFocus: function(oa, pa) {
            p.listen(oa, 'focus', function(qa) {
                m.show(qa);
                l.post('privacy_lite', {
                    event: 'block_user_input_click',
                    exit_point: null
                });
            }.bind(this, pa));
        },
        registerMessageFilterSettingOnClick: function(oa, pa) {
            var qa = n.find(oa, "._fv0");
            p.listen(oa, 'click', function() {
                if (qa.checked) {
                    new k('/ajax/mercury/change_filtering_type.php').setData({
                        filtering_type: pa,
                        source: 'privacy_lite'
                    }).send();
                } else {
                    var event = 'basic_filtering';
                    if (pa === 'strict')
                        event = 'strict_filtering';
                    l.post('privacy_lite', {
                        event: event,
                        exit_point: null
                    });
                }
            });
        },
        registerMasher: function(oa, pa) {
            var qa = false;
            h.subscribe(ca, function(ra, sa) {
                var ta = true;
                if (sa)
                    ta=!!n.scry(q.byTag(sa, 'li'), "._571t").length;
                if (qa ||!ta)
                    return;
                qa=!!(ha());
            });
            p.listen(pa, 'click', function() {
                n.remove(oa);
                ia();
            });
        },
        registerPrivacyCheckupListener: function(oa) {
            p.listen(oa, 'click', function() {
                this.setFlyoutVisible(false);
                j.send(new k((new w()).setEnum('source', 'plite').getURI()));
                l.post('privacy_lite', {
                    event: 'exit_flyout',
                    exit_point: 'privacy_checkup'
                });
            }.bind(this));
        },
        displayPrivacyCheckup: function(oa) {
            oa.show();
        }
    }, i);
    e.exports = na;
}, null);
__d("PrivacyLiteFlyoutHelp", ["Event", "Arbiter", "AsyncRequest", "Banzai", "ContextualHelpSearchController", "CSS", "DOM", "Parent", "copyProperties", "csx", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    var r, s;
    function t(u, v, w, x, y) {
        this._width = 315;
        s = m.find(v, 'input');
        var z = m.create('div');
        this.init(u, s, z, w, x, {
            focusSearchBox: false
        });
        r = n.byClass(v, "_8-a");
        g.listen(y, 'click', function() {
            this._hideSearch(this);
            j.post('privacy_lite', {
                event: 'plite_search_collapse',
                exit_point: null
            });
        }.bind(this));
        h.subscribe('PrivacyLiteFlyout/expandingSection', this._hideSearch.bind(this));
        var aa = m.scry(r, "._d1r")[0];
        aa && g.listen(aa, 'click', function() {
            l.addClass(r, "_aw6");
            s.focus();
            j.post('privacy_lite', {
                event: 'plite_search_expand',
                exit_point: null
            });
            if (!this.suggestedResults)
                new i('/ajax/privacy/privacy_lite/help_suggestions').setHandler(function(ba) {
                    var ca = ba.getPayload().searchSuggestions, da = m.find(r, "._4_8m");
                    m.setContent(da, ca);
                    l.addClass(r, "_4_8l");
                }.bind(this)).send();
        }.bind(this));
    }
    o(t.prototype, new k(), {
        source: 'privacy_shortcuts',
        _hideSearch: function() {
            this.clearResults();
            l.removeClass(r, "_aw6");
        },
        show: function(u) {
            if (u === this.topics_area) {
                l.removeClass(r, "_aw7");
                return;
            } else if (u === this.loader) {
                l.addClass(r, "_aw7");
                l.hide(this.results_area);
            } else 
                l.hide(this.loader);
            l.show(u);
        }
    });
    e.exports = t;
}, null);
__d("ViewasChromeBar", ["Event", "Arbiter", "AsyncRequest", "CSS", "DOM", "Focus", "ModalMask", "PageTransitions", "Parent", "cx", "csx"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    var r = 'ViewasChromeBar/initialized', s = null, t = false;
    function u(x) {
        h.subscribe(r, x);
    }
    function v(x) {
        j.addClass(x, "_7g7");
        var y = k.find(x, "._7g0");
        l.set(k.find(y, '.textInput'));
    }
    var w = {
        initChromeBar: function(x) {
            if (t)
                return;
            s = x;
            t = true;
            h.inform(r, null, h.BEHAVIOR_STATE);
        },
        update: function(x, y) {
            u(function() {
                k.setContent(s, x);
                if (y)
                    new i('/ajax/privacy/glasgow/viewas_bar_flyout_open').send();
            });
        },
        registerSpecificModeOnClick: function(x) {
            g.listen(x, 'click', v.bind(null, o.byClass(x, "_7f-")));
        },
        registerFlyoutModalMask: function() {
            m.show();
            n.registerHandler(m.hide, 10);
        }
    };
    e.exports = w;
}, null);
__d("BingScalingCommon", [], function(a, b, c, d, e, f) {
    var g = {
        integrateWebsuggestions: function(h, i, j, k, l) {
            var m = [], n = i ? m: [], o = [], p = 0, q = 0, r = j;
            k = Math.floor(j * k);
            for (var s = 0; s < h.length; s++) {
                var t = h[s];
                if (t.type === 'websuggestion'&&!t.isSeeMore) {
                    if ((r > 0 && p < k) || (p > 0 && p < l)) {
                        n.push(t);
                        p++;
                        r--;
                    } else if (r > 0)
                        o.push(t);
                } else {
                    if (r <= 0&&!i)
                        continue;
                    m.push(t);
                    q++;
                    r--;
                }
            }
            if (r > 0 && o.length > 0)
                n = n.concat(o.slice(0, r));
            if (!i)
                return m.concat(n);
            return n;
        }
    };
    e.exports = g;
}, null);
__d("SearchSingleState", ["fbt"], function(a, b, c, d, e, f, g) {
    function h(j, k, l, m) {
        return {
            classNames: 'grammar',
            groupIndex: 0,
            indexInGroup: j,
            path: k,
            text: l,
            type: 'grammar',
            uid: m
        };
    }
    var i = {
        getSuggestions: function(j, k, l) {
            if (l === 'ent:user') {
                return this.getSuggestionsForUser(j, k);
            } else if (l === 'ent:page') {
                return this.getSuggestionsForPage(j, k);
            } else if (l === 'ent:app') {
                return this.getSuggestionsForApp(j, k);
            } else if (l === 'ent:group')
                return this.getSuggestionsForGroup(j, k);
        },
        getSuggestionsForUser: function(j, k) {
            return [h(0, '/search/' + j + '/photos-of', g._("photos of {full name}", [g.param("full name", k)]), 'photos_of_user'), h(1, '/search/' + j + '/friends', g._("friends of {full name}", [g.param("full name", k)]), 'friends_of_user'), h(2, '/search/' + j + '/pages-liked', g._("favorite pages of {full name}", [g.param("full name", k)]), 'pages_liked_user'), h(3, '/search/str/' + k + '/users-named', g._("find all people named \"{full name}\"", [g.param("full name", k)]), 'people_named_text')];
        },
        getSuggestionsForPage: function(j, k) {
            return [h(0, '/search/' + j + '/photos-of', g._("photos of {name of page}", [g.param("name of page", k)]), 'photos_of_page'), h(1, '/search/' + j + '/likers', g._("people who like {name of page}", [g.param("name of page", k)]), 'page_likers'), h(2, '/search/str/' + k + '/pages-named', g._("find all pages named \"{name of page}\"", [g.param("name of page", k)]), 'pages_named_text')];
        },
        getSuggestionsForGroup: function(j, k) {
            return [h(0, '/search/' + j + '/members', g._("{name of group} members", [g.param("name of group", k)]), 'members_of_group'), h(1, '/search/' + j + '/photos-in', g._("photos in {name of groups}", [g.param("name of groups", k)]), 'photos_in_group'), h(2, '/search/' + j + '/creators', g._("{name of group} creators", [g.param("name of group", k)]), 'creators_of_group'), h(3, '/search/' + j + '/admins', g._("{name of group} administrators", [g.param("name of group", k)]), 'admins_of_group')];
        },
        getSuggestionsForApp: function(j, k) {
            return [h(0, '/search/' + j + '/apps-similar-to', g._("apps similar to {name of app}", [g.param("name of app", k)]), 'similar_apps'), h(1, '/search/' + j + '/app-users', g._("people who use {name of app}", [g.param("name of app", k)]), 'app_users'), h(2, '/search/str/' + k + '/pages-named', g._("find all apps named \"{name of page}\"", [g.param("name of page", k)]), 'apps_named_text')];
        }
    };
    e.exports = i;
}, null);
__d("SearchDataSource", ["Event", "Arbiter", "AsyncResponse", "DataSource", "HashtagSearchResultUtils", "copyProperties", "createArrayFrom", "BingScalingCommon", "PageTransitions", "SearchSingleState", "UnicodeCJK", "TokenizeUtil"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    var s = '/typeahead/search/facebar/nullstate/';
    for (var t in j)
        if (j.hasOwnProperty(t))
            v[t] = j[t];
    var u = j === null ? null: j.prototype;
    v.prototype = Object.create(u);
    v.prototype.constructor = v;
    v.__superConstructor__ = j;
    function v(w) {
        "use strict";
        this._token = w.token || '';
        this._lazyonload = w.lazyonload === false ? false : true;
        this._extraTypes = w.extraTypes;
        this._buckets = w.buckets;
        this._noMultiFetch = w.noMultiFetch || false;
        this._maxWebSuggToCountFetchMore = w.maxWebSuggToCountFetchMore || 0;
        this._nullStateConfig = w.nullStateConfig || {};
        var x = w.maxResults || 8;
        j.call(this, w);
        this._numResults = {
            min: 3,
            max: x
        };
        this.recordingRoute = w.recordingRoute || 'non_banzai';
        this._enabledHashtag = w.enabledHashtag || false;
        this.logBackendQueriesWindow = w.logBackendQueriesWindow || 25;
        this._minWebSugg = w.minWebSugg || 2;
        this._queryToWebSuggState = {};
        this._genTime = w.genTime;
        this.cacheUnicodeMatch.setConfigs({
            prefix_hangul_conjoining_jamo: true,
            prefix_kana_drop_trailing_latin: w.cjkDropLatinInCjTokens,
            prefix_kana_hiragana_to_katakana: w.cjkUiCacheHiraganaToKatakana
        });
        this.backendUnicodeMatch.setConfigs({
            prefix_kana_drop_trailing_latin: w.cjkDropLatinInCjTokens
        });
    }
    v.prototype.init = function() {
        "use strict";
        u.init.call(this);
        this._leanPayload = null;
        this._bootstrapRequestsPending = 0;
        this._criticalOnly = true;
        this._updateMaxResults();
        g.listen(window, 'resize', this._updateMaxResults.bind(this));
        if (this._nullStateConfig.singleState) {
            h.subscribe('page_transition', this.handlePageTransition.bind(this));
            h.subscribe('search/updateNullState', this.updateNullState.bind(this));
        }
        if (this._nullStateConfig.recent)
            h.subscribe('search/refreshRecentSearchesNullstate', this.refreshRecentSearches.bind(this));
    };
    v.prototype.refreshRecentSearches = function() {
        "use strict";
        this.nullStateData = null;
    };
    v.prototype.handlePageTransition = function() {
        "use strict";
        this.nullStateParams = {};
    };
    v.prototype.updateNullState = function(event, w) {
        "use strict";
        this.nullStateParams = w;
        this.fetchNullState();
    };
    v.prototype.fetchNullState = function(w) {
        "use strict";
        if (!this._nullStateConfig.hasNullState)
            return;
        var x = null;
        if (this.nullStateParams && this.nullStateParams.uid) {
            this.nullStateParams.query = w || '';
            x = this._fetchDataForSingleState();
        } else 
            x = this._fetchDataForNullState();
        if (x)
            this.inform('respond', {
                value: this.nullStateParams ? this.nullStateParams.query: '',
                results: x,
                isAsync: false,
                nullState: true
            });
    };
    v.prototype._fetchDataForSingleState = function() {
        "use strict";
        if (this.nullStateDataWithProfile && this.nullStateParams.uid === this.nullStateDataWithProfile.profileID)
            return this.nullStateDataWithProfile.data;
        if (this.nullStateParams.type === 'ent:app' || this.nullStateParams.type === 'ent:group' || this.nullStateParams.type === 'ent:page') {
            this.fetch(s, {
                profile_id: this.nullStateParams.uid,
                ent_type: this.nullStateParams.type
            }, {
                singleState: true
            });
            this.nullStateDataWithProfile = {
                profileID: this.nullStateParams.uid
            };
            return;
        }
        var w = p.getSuggestions(this.nullStateParams.uid, this.nullStateParams.text, this.nullStateParams.type);
        if (!w)
            return this._fetchDataForNullState();
        this.nullStateDataWithProfile = {
            data: w,
            profileID: this.nullStateParams.uid
        };
        return w;
    };
    v.prototype._shouldRefreshNullState = function() {
        "use strict";
        if (!this._nullStateConfig.recent)
            return false;
        var w = window.location.href;
        if (!w)
            return false;
        if (w.indexOf('allactivity') && w.indexOf('log_filter=search'))
            return true;
        return false;
    };
    v.prototype._fetchDataForNullState = function() {
        "use strict";
        if (this.nullStateData&&!this._shouldRefreshNullState())
            return this.nullStateData;
        this.fetch(s, {
            value: ""
        }, {
            nullState: true,
            value: ''
        });
        return null;
    };
    v.prototype.dirty = function() {
        "use strict";
        u.dirty.call(this);
        this._fetchOnUseRequests = [];
    };
    v.prototype.asyncErrorHandler = function(w) {
        "use strict";
        if (window.Dialog && window.Dialog.getCurrent() == null && w.getError() == 1400003)
            i.verboseErrorHandler(w);
    };
    v.prototype.fetch = function(w, x, y) {
        "use strict";
        y = y || {};
        y.fetch_start = Date.now();
        var z = o.getMostRecentURI().path;
        x = l(x, {
            path: z
        });
        u.fetch.call(this, w, x, y);
    };
    v.prototype.fetchHandler = function(w, x) {
        "use strict";
        if (x.nullState) {
            this.nullStateData = w.getPayload().entries;
            this.inform('respond', {
                value: '',
                results: w.getPayload().entries,
                isAsync: true,
                nullState: true
            });
            return;
        }
        if (x.singleState) {
            this.nullStateDataWithProfile.data = w.getPayload().entries;
            this.inform('respond', {
                results: w.getPayload().entries,
                isAsync: true,
                value: this.nullStateParams ? this.nullStateParams.query: '',
                nullState: true
            });
            return;
        }
        var y = w.getPayload(), z = l({
            fetch_end: Date.now()
        }, x), aa = z.value ? h.BEHAVIOR_EVENT: h.BEHAVIOR_PERSISTENT;
        this.inform('beginFetchHandler', {
            response: w
        });
        if (x.type == 'lean') {
            this._leanPayload = y;
            this._processLean();
        } else {
            if (y.coeff2_ts)
                z.coeff2_ts = y.coeff2_ts;
            var ba = {
                limit: typeof y.webSuggLimit !== 'undefined' ? y.webSuggLimit: 6,
                showOnTop: typeof y.webSuggOnTop !== 'undefined' ? y.webSuggOnTop: false
            };
            this._queryToWebSuggState[x.value] = ba;
            u.fetchHandler.call(this, w, x);
            if (x.bootstrap&&!w.getRequest().getData().no_cache)
                z.browserCacheHit = (y.timestamp < this._genTime);
            if (x.bootstrap&&!y.no_data && this._bootstrapRequestsPending > 0) {
                x.bootstrap = false;
                --this._bootstrapRequestsPending;
                !this._bootstrapRequestsPending && this._bootstrapPostProcess();
            }
            if (y.no_data || y.stale || y.token !== this._token) {
                var ca = l({}, w.getRequest().getData());
                if (ca.lazy) {
                    delete ca.lazy;
                    ca.token = this._token;
                    this._fetchOnUse(ca, x);
                }
            }
        }
        this.inform('endpointStats', z, aa);
        if (x&&!!x.value)
            this.inform('completeFetch', {
                response: w,
                stats: z
            });
    };
    v.prototype.respond = function(w, x, y) {
        "use strict";
        this.inform('respondValidUids', x);
        this.inform('reorderResults', x);
        var z = this.buildData(x, w);
        z.forEach(function(aa, ba) {
            aa.origIndex = ba;
        });
        this.inform('respond', {
            value: w,
            results: z,
            isAsync: !!y
        });
        return z;
    };
    v.prototype.buildData = function(w, x) {
        "use strict";
        if (!w || w.length === 0)
            return [];
        var y = this.getWebSuggState(x), z = y.showOnTop, aa = n.integrateWebsuggestions(w.map(this.getEntry.bind(this)), Boolean(z), this._maxResults, y.limit);
        aa.length = Math.min(aa.length, this._maxResults);
        return aa;
    };
    v.prototype.getWebSuggState = function(w) {
        "use strict";
        while (w) {
            var x = this._queryToWebSuggState[w];
            if (typeof x !== 'undefined')
                return x;
            w = w.slice(0, w.length - 1);
        }
        return {
            limit: 0,
            showOnTop: false
        };
    };
    v.prototype.fetchLean = function() {
        "use strict";
        this._fetchLean();
    };
    v.prototype._isQueryTooShort = function(w) {
        "use strict";
        return w.length < this._minQueryLength&&!q.hasIdeoOrSyll(w);
    };
    v.prototype.shouldFetchMoreResults = function(w) {
        "use strict";
        var x = 0, y = 0;
        w.forEach(function(z) {
            if (z.type !== 'websuggestion' || y++<this._maxWebSuggToCountFetchMore)
                x++;
        }.bind(this));
        return x < this._maxResults;
    };
    v.prototype._bootstrapPostProcess = function() {
        "use strict";
        var w = {
            time: Date.now()
        };
        this.inform('bootstrapped', w, h.BEHAVIOR_PERSISTENT);
        this._processLean();
    };
    v.prototype._processLean = function() {
        "use strict";
        if (this._leanPayload) {
            var w, x = this._leanPayload.entries;
            for (var y in x) {
                w = this.getEntry(y);
                w && (w.index = x[y]);
            }
            this.setExclusions(this._leanPayload.blocked);
            this._leanPayload = null;
        }
    };
    v.prototype._updateMaxResults = function() {
        "use strict";
        var w = window.innerHeight || document.documentElement.clientHeight;
        this.setMaxResults(Math.max(this._numResults.min, Math.min(this._numResults.max, Math.ceil(2 + ((w - 370) / 56)))));
    };
    v.prototype._bootstrapFetch = function(w, x) {
        "use strict";
        var y = l(x, this.bootstrapData);
        if (this._criticalOnly && this._lazyonload)
            y.lazy = 1;
        this.fetch(this.bootstrapEndpoint, y, {
            bootstrap: true,
            type: w
        });
        ++this._bootstrapRequestsPending;
    };
    v.prototype._fetchOnUse = function(w, x) {
        "use strict";
        for (var y in this.bootstrapData)
            !w.hasOwnProperty(y) && (w[y] = this.bootstrapData[y]);
        if (this._criticalOnly) {
            this._fetchOnUseRequests.push({
                args: w,
                ctx: x
            });
        } else 
            this.fetch(this.bootstrapEndpoint, w, x);
    };
    v.prototype._fetchLean = function() {
        "use strict";
        var w = {
            no_cache: 1
        };
        w.options = m(w.options);
        w.options.push('lean');
        this._fetchOnUse(w, {
            type: 'lean'
        });
    };
    v.prototype.bootstrap = function(w) {
        "use strict";
        if (!w) {
            this._criticalOnly = false;
            this._flushFetchOnUseRequests();
        }
        if (this._bootstrapped)
            return;
        var x = {
            filter: ['event'],
            no_cache: 1
        };
        this._fetchOnUse(x, {
            type: 'event'
        });
        var y = ['app', 'page', 'group', 'friendlist'];
        y = y.concat(this._extraTypes || []);
        if (this._noMultiFetch) {
            y.push('user');
            this._bootstrapFetch('user', {
                filter: y
            });
        } else {
            this._bootstrapFetch('other', {
                filter: y
            });
            if (this._buckets) {
                for (var z = 0; z < this._buckets.length; ++z) {
                    var aa = {
                        filter: ['user'],
                        buckets: this._buckets[z]
                    };
                    this._bootstrapFetch('user', aa);
                }
            } else 
                this._bootstrapFetch('user', {
                    filter: ['user']
                });
        }
        this._fetchLean();
        this._bootstrapped = true;
    };
    v.prototype._flushFetchOnUseRequests = function() {
        "use strict";
        var w = this._fetchOnUseRequests.length;
        for (var x = 0; x < w; ++x) {
            var y = this._fetchOnUseRequests[x];
            this.fetch(this.bootstrapEndpoint, y.args, y.ctx);
        }
        if (w > 0)
            this.inform('extra_bootstrap', {
                time: Date.now()
            }, h.BEHAVIOR_PERSISTENT);
        this._fetchOnUseRequests = [];
    };
    v.prototype.onLoad = function(w, x) {
        "use strict";
        this.inform('onload', {
            time: Date.now()
        }, h.BEHAVIOR_PERSISTENT);
        if (w)
            setTimeout(this.bootstrap.bind(this, x), 0);
    };
    v.prototype.mergeUids = function(w, x, y, z) {
        "use strict";
        var aa = this.getDynamicHashtagResult(z);
        if (z && aa && x.indexOf(aa) <= 0)
            x.unshift(aa);
        var ba = y[0] ? this.getEntry(y[0]): null, ca = x[0] ? this.getEntry(x[0]): null, da = (ba && ba.replace_results) ? ba: null;
        da = (!da && ca && ca.replace_results) ? ca : da;
        var ea = u.mergeUids.call(this, w, x, y, z);
        if (da) {
            this.inform('backend_topreplace', {});
            return this.deduplicateByKey([da.uid].concat(ea));
        }
        return ea;
    };
    v.prototype.getTextToIndexFromFields = function(w, x) {
        "use strict";
        var y = [], z = w.tokenVersion === "v2";
        for (var aa = 0; aa < x.length; ++aa) {
            if (z && (x[aa] === "text" || x[aa] === "alias"))
                continue;
            var ba = w[x[aa]];
            if (ba)
                y.push(ba.join ? ba.join(' ') : ba);
        }
        return y.join(' ');
    };
    v.prototype.getDynamicHashtagResult = function(w) {
        "use strict";
        if (!w ||!this._enabledHashtag)
            return;
        var x = k.getHashtagFromQuery(w);
        if (!x)
            return;
        var y = 'hashtag:' + x, z = this.getEntry(y);
        if (!z)
            this.processEntries([k.makeTypeaheadResult(x)], w);
        return y;
    };
    e.exports = v;
}, null);
__d("legacy:SearchDataSource", ["SearchDataSource"], function(a, b, c, d) {
    a.SearchDataSource = b('SearchDataSource');
}, 3);
__d("SearchTypeaheadCore", ["Arbiter", "DOM", "Event", "Input", "Parent", "TypeaheadCore"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    for (var m in l)
        if (l.hasOwnProperty(m))
            o[m] = l[m];
    var n = l === null ? null: l.prototype;
    o.prototype = Object.create(n);
    o.prototype.constructor = o;
    o.__superConstructor__ = l;
    function o(p) {
        "use strict";
        l.call(this, p);
    }
    o.prototype.init = function(p, q, r) {
        "use strict";
        n.init.call(this, p, q, r);
        var s = k.byTag(r, 'form'), t = this.reset.bind(this);
        g.subscribe('pre_page_transition', function(event, v) {
            var w = /^\/search/, x = w.test(v.from.path), y = w.test(v.to.path);
            if (x&&!y)
                setTimeout(t, 0);
        });
        if (s) {
            var u = h.find(s, 'input.search_sid_input');
            i.listen(s, 'submit', function() {
                if (this.data && this.data.queryData)
                    u.value = this.data.queryData.sid;
                setTimeout(t, 0);
            }.bind(this), i.Priority.URGENT);
        }
    };
    o.prototype.select = function() {
        "use strict";
        this.reset();
        this.element.focus();
        setTimeout((function() {
            this.element.blur();
        }).bind(this), 0);
    };
    o.prototype.handleTab = function(event) {
        "use strict";
        var p = this.view.getQuerySuggestion(this.value);
        if (p) {
            j.setValue(this.element, p);
            this.checkValue();
            event.kill();
        } else 
            n.handleTab.call(this, event);
    };
    o.prototype.getSearchType = function() {
        "use strict";
        return 'regular';
    };
    o.prototype.focus = function() {
        "use strict";
        n.focus.call(this);
        if (this.getValue().length === 0 || this.element.getAttribute('singlestate') === 'true')
            this.data.fetchNullState(this.getValue());
    };
    o.prototype.keyup = function() {
        "use strict";
        n.keyup.call(this);
        if (this.getValue().length === 0)
            this.data.fetchNullState(this.getValue());
        this.element.setAttribute('singlestate', false);
    };
    e.exports = o;
}, null);
__d("legacy:SearchTypeaheadCore", ["SearchTypeaheadCore"], function(a, b, c, d) {
    a.SearchTypeaheadCore = b('SearchTypeaheadCore');
}, 3);
__d("SearchPeopleSeeMore", ["fbt", "TokenizeUtil", "URI"], function(a, b, c, d, e, f, g, h, i) {
    var j = 3;
    function k(l, m) {
        "use strict";
        this.results = l;
        this.seeMoreUri = m;
    }
    k.prototype.addResult = function() {
        "use strict";
        var l = null, m = 0, n = [];
        for (var o = 0; o < this.results.length; o++) {
            var p = this.results[o];
            if (p.type != 'user')
                break;
            m++;
            if (!l) {
                l = p.text;
            } else 
                l = this.findCommonTokens(l, p.text);
            if (!l)
                break;
            n.push(p);
        }
        if (l && m >= j)
            n.push(this.createFindAllPeopleResult(l));
        for (; o < this.results.length; o++)
            n.push(this.results[o]);
        return n;
    };
    k.prototype.createFindAllPeopleResult = function(l) {
        "use strict";
        var m = g._("Find all people named \"{query}\"", [g.param("query", l.toLowerCase())]), n = i(this.seeMoreUri).addQueryData({
            q: l,
            init: 'psm'
        }).toString();
        return {
            type: 'user',
            text: m,
            classNames: 'seeAllUser',
            photo: '/images/search_typeahead/people_see_more.png',
            logType: 'grammar',
            path: n
        };
    };
    k.prototype.findCommonTokens = function(l, m) {
        "use strict";
        if (!l ||!m)
            return;
        var n = h.tokenize(l), o = h.tokenize(m), p = 0;
        for (var q = 0; q < n.length && q < o.length; q++)
            if (n[q] === o[q]) {
                p++;
            } else 
                break;
        if (!p)
            return null;
        if (p === n.length)
            return l;
        if (p === o.length)
            return m;
        var r = '';
        for (var s = 0; s < p; s++)
            r = n[s] + '';
        return r.trim();
    };
    e.exports = k;
}, null);
__d("SearchTypeaheadView", ["Arbiter", "ContextualTypeaheadView", "ContextualLayerUpdateOnScroll", "copyProperties", "DOM", "goURI", "MusicConstants", "MusicEvents", "tx", "URI", "isEmail", "fbt", "SearchPeopleSeeMore"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
    for (var t in h)
        if (h.hasOwnProperty(t))
            v[t] = h[t];
    var u = h === null ? null: h.prototype;
    v.prototype = Object.create(u);
    v.prototype.constructor = v;
    v.__superConstructor__ = h;
    function v(x, y) {
        "use strict";
        h.call(this, x, y);
    }
    v.prototype.initializeLayer = function() {
        "use strict";
        u.initializeLayer.call(this);
        this.layer.setOffsetY( - 1);
        this.layer.enableBehavior(i);
    };
    v.prototype.ignoreClick = function(event) {
        "use strict";
        event.prevent();
    };
    v.prototype.render = function(x, y, z) {
        "use strict";
        if (!y ||!y.length)
            return;
        if (this._bucketize)
            y = w(y);
        if (this.showPeopleSeeMore && x) {
            var aa = new s(y, this.getSeeMoreEndpoint('', true));
            y = aa.addResult();
        }
        var ba = {
            results: y,
            value: x
        };
        this.inform('finalResultsReordering', ba);
        return u.render.call(this, x, ba.results, z);
    };
    v.prototype.disableBucketization = function() {
        "use strict";
        this._bucketize = false;
    };
    v.prototype.buildBuckets = function(x, y) {
        "use strict";
        var z = y.length, aa = 0, ba;
        for (ba = 0; ba < z; ++ba)
            if (y[ba].type == 'user')
                aa++;
        this._redirectToUsersResultsPage = this.showFilterResults && aa === z;
        this.setWebSuggLoggingParams(x, y);
        if (!x && this.showFindPeople)
            y.unshift(this.buildFindPeople());
        if (this._bucketize)
            y = u.buildBuckets.call(this, x, y);
        if (x && this._shouldShowSeeMore) {
            y.push(this.buildSeeMore(x, z));
            if (q(x) && (aa < 1))
                y.push(this.buildInvite(x));
        }
        return y;
    };
    v.prototype.buildFindPeople = function() {
        "use strict";
        var x = "Find people";
        return {
            classNames: 'seeAllUser seeAllUserNullState',
            logType: 'grammar',
            path: this.getSeeMoreEndpoint(null, true),
            photo: '/images/search_typeahead/people_see_more.png',
            text: x,
            type: 'no_header'
        };
    };
    v.prototype.buildSeeMore = function(x, y) {
        "use strict";
        var z = this.getSeeMoreText(x, y), aa = y == 1 ? "Displaying top result": o._("Displaying top {number} results", {
            number: y
        }), ba = k.create('li', {
            className: 'calltoaction'
        }, [k.create('a', {
            href: this.getSeeMoreEndpoint(x),
            rel: 'ignore'
        }, [k.create('span', {
            className: 'text'
        }, [k.create('span', {
            className: 'seeMore'
        }, [z, k.create('span', {
            className: 'arrow'
        })]), k.create('span', {
            className: 'subtext'
        }, [aa])])])]);
        ba.setAttribute('aria-label', z);
        return {
            uid: 'search',
            node: ba,
            search: true
        };
    };
    v.prototype.getSeeMoreText = function(x, y) {
        "use strict";
        if (this.showKeywordResultsPage)
            return r._("Search for {query}", [r.param("query", x)]);
        if (y <= 0)
            return o._("See results for {query}", {
                query: x
            });
        if (this._redirectToUsersResultsPage)
            return r._("Filter results for {query}", [r.param("query", x)]);
        return o._("See more results for {query}", {
            query: x
        });
    };
    v.prototype.buildInvite = function(x) {
        "use strict";
        var y = o._("Invite {query} to Facebook", {
            query: x
        }), z = k.create('li', {
            className: 'calltoaction'
        }, [k.create('a', {
            href: this.getInviteEndpoint(x),
            rel: 'ignore'
        }, [k.create('span', {
            className: 'text'
        }, [k.create('span', {
            className: 'invite'
        }, [y])])])]);
        z.setAttribute('aria-label', y);
        return {
            uid: 'invite',
            node: z,
            search: true
        };
    };
    v.prototype.searchPageQueryData = function(x) {
        "use strict";
        return j({
            q: x
        }, this.queryData || {});
    };
    v.prototype.searchPageTypeData = function(x) {
        "use strict";
        return this._redirectToUsersResultsPage || x ? {
            type: "users"
        } : {};
    };
    v.prototype.select = function(x) {
        "use strict";
        var y = this.index, z = this.results[y];
        if (!z || z.type == 'header')
            return;
        var aa = this.items[y], ba = k.scry(aa, 'a')[0];
        if (z.song) {
            if (ba)
                n.inform(m.MUSIC_BUTTON.ACTIVATE, ba);
            x && this.inform('highlight', {
                index: y,
                selected: z
            });
        } else {
            u.select.call(this, x);
            if (ba && ba.href)
                if (ba.target == '_blank') {
                    window.open(ba.href);
                } else 
                    l(ba.href);
        }
    };
    v.prototype.setSid = function(x) {
        "use strict";
        this.queryData.tas = x;
    };
    v.prototype.getSeeMoreEndpoint = function(x, y) {
        "use strict";
        return p(this.seeMoreEndpoint).addQueryData(this.searchPageQueryData(x)).addQueryData(this.searchPageTypeData(y)).toString();
    };
    v.prototype.getInviteEndpoint = function(x) {
        "use strict";
        return p('/invite.php').addQueryData({
            email_list: x
        });
    };
    v.prototype.show = function() {
        "use strict";
        if (!this.isVisible()) {
            g.inform('layer_shown', {
                type: 'SearchTypeahead'
            });
            u.show.call(this);
        }
    };
    v.prototype.hide = function() {
        "use strict";
        if (this.isVisible()) {
            g.inform('layer_hidden', {
                type: 'SearchTypeahead'
            });
            u.hide.call(this);
        }
    };
    v.prototype.getQuerySuggestion = function(x) {
        "use strict";
        var y = this.results[this.index], z = y && y.type != 'header' ? y.text.toLowerCase(): '';
        return z == x.toLowerCase() ? '' : z;
    };
    v.prototype.setWebSuggLoggingParams = function(x, y) {
        "use strict";
        var z = 0, aa = 0;
        for (var ba = 0; ba < y.length; ba++)
            if (y[ba].type === 'websuggestion') {
                if (aa === 0)
                    aa = ba + 1;
                    var ca = 'FR' + (ba - z) + 'AS' + z, da = ba + 1;
                    y[ba].path += '&wssk=' + ca + '&wssp=' + da + '&wspq=' + encodeURIComponent(x);
                    y[ba].path += '&wssrc=' + y[ba].websuggestion_source;
                    z++;
            }
        var ea = '&wssc=' + y.length + '-' + x.length + '&wsbp=' + z + '-' + aa;
        for (ba = 0; ba < y.length; ba++)
            if (y[ba].type === 'websuggestion')
                y[ba].path += ea;
    };
    function w(x) {
        var y, z, aa, ba, ca = [], da = {};
        z = x.length;
        for (y = 0; y < z; y++) {
            aa = x[y];
            ba = aa.render_type || aa.type;
            if (!da.hasOwnProperty(ba)) {
                da[ba] = ca.length;
                ca.push([]);
            }
            ca[da[ba]].push(aa);
        }
        var ea = [];
        z = ca.length;
        for (y = 0; y < z; ++y) {
            aa = ca[y][0];
            ba = aa.render_type || aa.type;
            ea = ea.concat(ca[y]);
        }
        return ea;
    }
    j(v.prototype, {
        _shouldShowSeeMore: true,
        _bucketize: true,
        queryData: {
            init: 'quick'
        }
    });
    e.exports = v;
}, null);
__d("legacy:SearchTypeaheadView", ["SearchTypeaheadView"], function(a, b, c, d) {
    a.SearchTypeaheadView = b('SearchTypeaheadView');
}, 3);
__d("legacy:Typeahead", ["Typeahead"], function(a, b, c, d) {
    a.Typeahead = b('Typeahead');
}, 3);
__d("SearchTypeaheadRecorder", ["AsyncRequest", "Banzai", "CurrentUser", "Event", "Keys", "BanzaiScuba", "TokenizeUtil", "Vector", "clickRefAction", "copyProperties", "ge", "userAction", "FacebarGlobalOptions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
    function t(v) {
        "use strict";
        this.init(v);
        this.initEvents();
    }
    t.prototype.init = function(v) {
        "use strict";
        this.core = v.getCore();
        this.data = v.getData();
        this.view = v.getView();
        this.element = this.core.getElement();
        this.initTime = Date.now();
        this._onloadTime = 0;
        this._extraRecorder = [];
        this.performanceTimings = {};
        var w = q('search_first_focus');
        this.initStartTime = w && w.value;
        this.bootstrapStats = {
            bootstrapped: 0
        };
        this.type = "legacy_search";
        this._reset();
    };
    t.prototype._reset = function() {
        "use strict";
        this.stats = {};
        this.avgStats = {};
        this.appendStats = {};
        this._backspacing = false;
        this.backendQueries = [];
        this._topreplace = false;
        this._inflightRequests = {};
        var v = Math.random().toString();
        this.data.setQueryData({
            sid: v
        });
        this.view.setSid(v);
        this.recordStat('sid', v);
        this.recordStat('keypressed', 0);
    };
    t.prototype.initEvents = function() {
        "use strict";
        this.core.subscribe('focus', function(event) {
            if (!this.stats.session_start_time) {
                this.recordStat('session_start_time', Date.now());
                var v = new Date(), w = v.getTimezoneOffset(), x = Date.now() - w * 60 * 1000;
                this.recordStat('session_start_time_user_timezone', x);
            }
        }.bind(this));
        this.core.subscribe('blur', function(event) {
            var v = Date.now();
            for (var w in this._inflightRequests) {
                var x = this._inflightRequests[w], y = v - x;
                this.recordAvgStat('search_endpoint_ms_from_js', y);
            }
            this.recordStat('session_end_time', v);
            this.submit();
        }.bind(this));
        this.view.subscribe('select', function(v, w) {
            this.recordSelectInfo(w);
        }.bind(this));
        this.view.subscribe('render', function(v, w) {
            this.recordRender(w);
        }.bind(this));
        this.data.subscribe('activity', function(v, w) {
            this.recordStat('pending_request', w.activity);
        }.bind(this));
        this.data.subscribe('respondValidUids', function(v, w) {
            this.validUids = w.slice(0);
        }.bind(this));
        this.data.subscribe('beforeQuery', function(v, w) {
            if (!w.value) {
                this.query = '';
                this.results = [];
                return;
            }
            if (!this.stats.first_query_time)
                this.recordStat('first_query_time', Date.now());
            this.query = w.value;
            this.recordCountStat('num_queries');
        }.bind(this));
        this.data.subscribe('queryEndpoint', function(v, w) {
            this.recordCountStat('num_search_ajax_requests');
            this.recordAvgStat('endpoint_query_length', w.value.length);
            this._inflightRequests[w.value] = Date.now();
        }.bind(this));
        this.data.subscribe('onload', function(v, w) {
            this._onloadTime = w.time;
        }.bind(this));
        this.data.subscribe('bootstrapped', function(v, w) {
            this.bootstrapStats.endTime = w.time;
            this.bootstrapStats.bootstrapped = 1;
        }.bind(this));
        this.core.subscribe('recordFunction', function(v, w) {
            this._extraRecorder.push(w);
        }.bind(this));
        this.data.subscribe('endpointStats', function(v, w) {
            var x = w.fetch_end - w.fetch_start;
            if (w.value) {
                this.recordAvgStat('search_endpoint_ms_from_js', x);
            } else 
                this.bootstrapStats[w.type] = x;
            if (w.coeff2_ts)
                this.bootstrapStats.coeff2_ts = w.coeff2_ts;
            if (typeof w.browserCacheHit != 'undefined')
                this.recordCountStat(w.browserCacheHit ? 'bootstrap_cachehits' : 'bootstrap_cachemisses');
            if (this._inflightRequests[w.value])
                delete this._inflightRequests[w.value];
        }.bind(this));
        this.data.subscribe('query', function(v, w) {
            this.recordAvgStat('num_results_from_cache', w.results.length);
        }.bind(this));
        this.data.subscribe('backend_topreplace', function(v, w) {
            if (false === this._topreplace) {
                this.recordStat("backend_topreplace", 1);
                this._topreplace = true;
            }
        }.bind(this));
        this.data.subscribe('completeFetch', function(v, w) {
            if (this.core.scubaInfo) {
                var x = w.response, y = {
                    recv: w.stats.fetch_end - w.stats.fetch_start,
                    render: Date.now() - w.stats.fetch_start,
                    payload_size: JSON.stringify(x).length
                };
                if (!x.payload.entities)
                    x.payload.entities = this.buildResults();
                this.logToScuba(x, y, this.core.scubaInfo, this.query, this.type);
            }
        }.bind(this));
        j.listen(this.element, 'keydown', function(event) {
            this.recordStat('keypressed', 1);
            this.recordCountStat('count_keys_pressed');
            if (j.getKeyCode(event) == k.BACKSPACE) {
                if (!this._backspacing && this.query) {
                    this._backspacing = true;
                    this.recordAppendStat('before_backspace_queries', this.query);
                }
            } else 
                this._backspacing = false;
        }.bind(this));
        this.data.subscribe('beforeFetch', function(v, w) {
            var x = w.request.data.value;
            if (!x)
                return;
            this.backendQueries.push(x);
        }.bind(this));
    };
    t.prototype.recordStat = function(v, w) {
        "use strict";
        this.stats[v] = w;
    };
    t.prototype.recordCountStat = function(v) {
        "use strict";
        var w = this.stats[v];
        this.stats[v] = w ? w + 1 : 1;
    };
    t.prototype.recordAvgStat = function(v, w) {
        "use strict";
        if (this.avgStats[v]) {
            this.avgStats[v][0] += w;
            ++this.avgStats[v][1];
        } else 
            this.avgStats[v] = [w, 1];
    };
    t.prototype.recordAppendStat = function(v, w) {
        "use strict";
        if (!this.appendStats.hasOwnProperty(v))
            this.appendStats[v] = [];
        this.appendStats[v].push(w);
    };
    t.prototype.recordRender = function(v) {
        "use strict";
        this.results = v.filter(function(x) {
            return (x.uid != 'search' && x.type != 'disabled_result' && x.type != 'header');
        }).map(function(x) {
            return p(null, x);
        });
        var w = n.getViewportDimensions();
        this.recordStat('window_size_width', w.x);
        this.recordStat('window_size_height', w.y);
        if (this.results.length > 0&&!this.stats.first_result_time)
            this.recordStat('first_result_time', Date.now());
    };
    t.prototype.recordSelectInfo = function(v) {
        "use strict";
        var w = v.selected, x = v.index;
        if (w.groupIndex !== undefined)
            x = v.index - w.groupIndex - 1;
        var y = {
            href: w.path
        }, z = w.dataGT ? {
            gt: JSON.parse(w.dataGT)
        }
        : {};
        o('click', y, null, null, z);
        r('search').uai('click');
        if (w.uid == 'search') {
            this.recordStat('selected_search', 1);
        } else if (w.uid == 'invite') {
            this.recordStat('selected_invite', 1);
        } else {
            var aa = w.log_type || w.rankType || w.render_type || w.type, ba = (aa == 'friend' ? 'user' : aa);
            this.recordStat('selected_' + ba, 1);
            this.recordStat('selected_position', x);
            this.recordStat('selected_type', aa);
            this.recordStat('selected_name_length', w.text.length);
            this.recordStat('selected_id', w.uid);
            this.recordStat('selected_degree', w.bootstrapped ? 1 : 2);
            this.recordStat('selected_recent_search', w.recent_search);
            var ca = m.parse(this.data.getTextToIndex(w)).tokens, da = u(ca, this.query);
            if (da)
                this.recordStat('matched_terms', da);
        }
        var ea = {};
        this._extraRecorder.forEach(function(fa) {
            fa(v, this.results, ea);
        }.bind(this));
        this.recordStat('extra_select_info', JSON.stringify(ea));
        if (w.type === 'websuggestion') {
            this.recordStat('selected_memcached_websuggestion', w.fromMemcache);
            this.recordStat('selected_websuggestion_source', w.websuggestion_source);
        }
        this.recordStat('selected_with_mouse', v.clicked ? 1 : 0);
    };
    t.prototype._dataToSubmit = function() {
        "use strict";
        this.recordStat('candidate_results', this.buildResults());
        this.recordStat('query', this.query);
        this.recordStat('init_time', this.initTime);
        if (this.initStartTime) {
            this.recordStat('init_start_time', this.initStartTime);
            this.recordStat('onload_time', this._onloadTime);
            this.initStartTime = 0;
        }
        this.recordStat('bootstrapped', this.bootstrapStats.bootstrapped);
        if (this.bootstrapStats.endTime) {
            this.recordStat('bootstrapped_time', this.bootstrapStats.endTime);
            this.recordStat('user_bootstrap_ms', this.bootstrapStats.user);
            this.recordStat('other_bootstrap_ms', this.bootstrapStats.other);
            this.bootstrapStats.endTime = 0;
        }
        this.recordStat('coeff2_ts', this.bootstrapStats.coeff2_ts);
        this.recordStat('max_results', this.data._maxResults);
        if (this.backendQueries.length > 0) {
            if (this.backendQueries.length > this.data.logBackendQueriesWindow)
                this.backendQueries = this.backendQueries.slice(this.backendQueries.length - this.data.logBackendQueriesWindow);
            this.recordStat('backend_queries', this.backendQueries);
        }
        if (s.taSessionLoggingSample) {
            var v = [];
            this.results.forEach(function(aa) {
                v.push([aa.text || '', aa.category || '', aa.subtext || '']);
            });
            this.recordStat('raw_suggestions_text', v);
        }
        var w = this.stats;
        for (var x in this.avgStats) {
            var y = this.avgStats[x];
            w[x] = y[0] / y[1];
        }
        for (var z in this.appendStats)
            w[z] = JSON.stringify(this.appendStats[z]);
        return w;
    };
    t.prototype.buildResults = function() {
        "use strict";
        var v = (this.results || []).map(function(w, x) {
            var y = m.parse(this.data.getTextToIndex(w)).tokens, z = w.rankType || w.render_type || w.type, aa = w.bootstrapped ? 1: 0, ba = w.s_token || '', ca = (typeof w.index == 'undefined') ? 100: w.index, da = u(y, this.query) || this.query, ea = w.index_rank, fa = w.match_type, ga = w.l_type, ha = w.vertical_type, ia = w.prefix_match, ja = w.prefix_length, ka = w.text, la = w.category, ma = w.subtext;
            if (typeof w.groupIndex == 'number')
                return [w.groupIndex, w.indexInGroup, w.uid, z, aa, ba, da, ea, fa, ia, ja, w.origIndex, ga, ha, ka, la, ma, ca];
            return [0, x, w.uid, z, aa, ba, da, ea, fa, ia, ja, w.origIndex, ga, ha, ka, la, ma, ca];
        }.bind(this));
        return JSON.stringify(v);
    };
    t.prototype.submit = function() {
        "use strict";
        var v = this._dataToSubmit();
        switch (this.data.recordingRoute) {
        case 'double_recording':
            if (Math.random() > .5) {
                v.recorded_first = 'legacy';
                setTimeout(this.submitThroughAsyncRequest.bind(this, v), 0);
                h.post(this._banzaiRoute, v, {
                    delay: 0,
                    retry: true
                });
            } else {
                v.recorded_first = 'banzai';
                h.post(this._banzaiRoute, v, {
                    delay: 0,
                    retry: true
                });
                setTimeout(this.submitThroughAsyncRequest.bind(this, v), 0);
            }
            break;
        case 'random_recording':
            if (Math.random() > .5) {
                this.submitThroughAsyncRequest(v);
            } else 
                h.post(this._banzaiRoute, v, {
                    delay: 0,
                    retry: true
                });
            break;
        case 'banzai_basic':
            h.post(this._banzaiRoute, v);
            break;
        case 'banzai_vital':
            h.post(this._banzaiRoute, v, {
                delay: 0,
                retry: true
            });
            break;
        default:
            this.submitThroughAsyncRequest(v);
        }
        this._reset();
    };
    t.prototype.addLatencyToSample = function(v, w, x) {
        "use strict";
        v.addInteger(x + 'query_start', w.queryStart);
        v.addInteger(x + 'query_end', w.queryEnd);
        v.addInteger(x + 'keypress_query_end', w.keyPressToQueryEnd);
        v.addInteger(x + 'render', w.render);
        v.addInteger(x + 'keypress_render', w.keyPressToRender);
    };
    t.prototype.logToScuba = function(v, w, x, y, z) {
        "use strict";
        var aa = new l('search_facebar_js', null, {
            addBrowserFields: true,
            addPredictedGeographyFields: true,
            addUser: true,
            addSearchVersion: true,
            addGatekeepers: {
                facebarGKs: true
            }
        });
        aa.addInteger('sample_rate', x.sample_rate);
        aa.addNormal('site', x.site);
        aa.addDenorm('query', y);
        var ba = v.payload;
        ba.entities && aa.addInteger('num_entities', ba.entities.length);
        Object.keys(this.performanceTimings).forEach(function(ca) {
            aa.addInteger(ca, this.performanceTimings[ca]);
        }.bind(this), this);
        if (ba.results || ba.entries)
            aa.addInteger('num_results', (ba.results || ba.entries).length);
        if (ba.gzipped_payload_size !== undefined)
            aa.addInteger('gzipped_payload_size', ba.gzipped_payload_size);
        if (w.recv && w.render > w.recv) {
            aa.addInteger('time_render', w.render - w.recv);
            aa.addInteger('time_js_async', w.recv);
        }
        if (w.payload_size)
            aa.addInteger('payload_size', w.payload_size);
        aa.addInteger('query_id', v.queryId);
        aa.addDenorm('user_id', i.getID());
        aa.addDenorm('session_id', this.stats.sid);
        aa.addNormal('typeahead_type', z);
        if (w.remoteQueryLatencies) {
            this.addLatencyToSample(aa, w.remoteQueryLatencies, 'remote_');
            aa.addInteger('remote_keypress_query_dispatch', w.remoteQueryLatencies.keyPressToQueryDispatch);
            aa.addInteger('remote_keypress_query_start', w.remoteQueryLatencies.keyPressToQueryStart);
            aa.addNormal('inflight_requests', w.remoteQueryLatencies.inflightRequests);
            aa.addInteger('inflight_requests', w.remoteQueryLatencies.inflightRequests);
            aa.addNormal('waiting_queries', w.remoteQueryLatencies.waitingQueries);
            aa.addInteger('waiting_queries', w.remoteQueryLatencies.waitingQueries);
        }
        if (w.cacheQueryLatencies)
            this.addLatencyToSample(aa, w.cacheQueryLatencies, 'cache_');
        aa.post();
    };
    t.prototype.submitThroughAsyncRequest = function(v) {
        "use strict";
        if (Object.keys(v).length > 0)
            new g().setURI(this._endPoint).setMethod('POST').setData({
                stats: v
            }).setOption('handleErrorAfterUnload', true).setErrorHandler(function(w) {
                v.retry = true;
                new g().setURI(this._endPoint).setMethod('POST').setData({
                    stats: v
                }).setOption('asynchronous', false).send();
            }.bind(this)).send();
    };
    var u = function(v, w) {
        if (!v ||!w)
            return;
        var x = m.parse(w);
        if (x.flatValue[x.flatValue.length - 1] === ' ')
            return x.flatValue;
        var y = x.tokens[x.tokens.length - 1], z = {};
        v.forEach(function(ea) {
            z[ea] = (z[ea] || 0) + 1;
        });
        var aa = {}, ba = x.tokens.slice(0, x.tokens.length - 1);
        ba.forEach(function(ea) {
            aa[ea] = (aa[ea] || 0) + 1;
        });
        for (var ca = 0; ca < v.length; ++ca) {
            var da = v[ca];
            if (da.indexOf(y) === 0 && (z[da] - (aa[da] || 0) > 0)) {
                ba.push(da);
                return ba.join(' ');
            }
        }
        return undefined;
    };
    p(t.prototype, {
        _endPoint: '/ajax/typeahead/record_metrics.php',
        _banzaiRoute: 'search'
    });
    e.exports = t;
}, null);
__d("TypeaheadSearchRecorderBasic", ["SearchTypeaheadRecorder", "copyProperties", "emptyFunction"], function(a, b, c, d, e, f, g, h, i) {
    function j(k) {
        "use strict";
        this._typeahead = k;
    }
    j.prototype.enable = function() {
        "use strict";
        new g(this._typeahead);
    };
    h(j.prototype, {
        disable: i
    });
    e.exports = j;
}, null);
__d("legacy:SearchRecorderBasicTypeaheadBehavior", ["TypeaheadSearchRecorderBasic"], function(a, b, c, d, e, f, g) {
    if (!a.TypeaheadBehaviors)
        a.TypeaheadBehaviors = {};
    a.TypeaheadBehaviors.searchRecorderBasic = function(h) {
        h.enableBehavior(g);
    };
}, 3);
__d("legacy:SearchTypeaheadRenderer", ["SearchTypeaheadRenderer"], function(a, b, c, d) {
    if (!a.TypeaheadRenderers)
        a.TypeaheadRenderers = {};
    a.TypeaheadRenderers.search = b('SearchTypeaheadRenderer');
}, 3);
void(0);
__d("TypeaheadSearchFilter", ["Arbiter", "copyProperties"], function(a, b, c, d, e, f, g, h) {
    function i(j) {
        "use strict";
        this._typeahead = j;
    }
    i.prototype.enable = function() {
        "use strict";
        var j = this._typeahead, k = j.getView().seeMoreEndpoint;
        this._subscriptions = [g.subscribe('search/typeahead/updateFilter', function(l, m) {
            if (m.filter_type == 'web')
                j.getView().queryData.form = 'FBKBFR';
            j.getView().queryData.type = m.filter_type;
        }), g.subscribe('search/typeahead/updateSeeMoreEndpoint', function(l, m) {
            j.getView().seeMoreEndpoint = m;
        }), g.subscribe('page_transition', function(l, m) {
            if (j.getView().queryData.form)
                delete j.getView().queryData.form;
            delete j.getView().queryData.type;
            j.getView().seeMoreEndpoint = k;
        }, g.SUBSCRIBE_NEW)];
    };
    i.prototype.disable = function() {
        "use strict";
        this._subscriptions.forEach(function(j) {
            j.unsubscribe();
        });
        this._subscriptions = null;
    };
    h(i.prototype, {
        _subscription: null
    });
    e.exports = i;
}, null);
__d("legacy:SearchFilterTypeaheadBehavior", ["TypeaheadSearchFilter"], function(a, b, c, d, e, f, g) {
    if (!a.TypeaheadBehaviors)
        a.TypeaheadBehaviors = {};
    a.TypeaheadBehaviors.initFilters = function(h) {
        h.enableBehavior(g);
    };
}, 3);
__d("TypeaheadDetectQueryLocale", [], function(a, b, c, d, e, f) {
    function g(h) {
        "use strict";
        this._typeahead = h;
        this._data = h.getData();
        this._queryCache = {
            '': this._data.queryCache,
            ja_JP: {},
            zh_TW: {}
        };
    }
    g.prototype.enable = function() {
        "use strict";
        this._previousLocale = '';
        this._reset = this._typeahead.subscribe('reset', this._swapQueryCache.bind(this, ''));
        this._beforeQuery = this._data.subscribe('beforeQuery', function(h, i) {
            var j = i.value;
            if (j === '') {
                this._swapQueryCache('');
                return;
            }
            var k = null, l = j.charCodeAt(j.length - 1);
            if (12352 <= l && l <= 12543) {
                k = 'ja_JP';
            } else if (12544 <= l && l <= 12735)
                k = 'zh_TW';
            this._swapQueryCache(k);
        }.bind(this));
    };
    g.prototype.disable = function() {
        "use strict";
        this._swapQueryCache('');
        this._data.unsubscribe(this._beforeQuery);
        this._typeahead.ubsubscribe(this._reset);
    };
    g.prototype._swapQueryCache = function(h) {
        "use strict";
        if (h === null || h === this._previousLocale)
            return;
        this._data.queryCache = this._queryCache[h];
        this._data.setQueryData({
            query_locale: h
        });
        this._previousLocale = h;
    };
    e.exports = g;
}, null);
__d("TypeaheadExcludeBootstrapFromQueryCache", [], function(a, b, c, d, e, f) {
    function g(h) {
        "use strict";
        this._data = h.getData();
    }
    g.prototype.enable = function() {
        "use strict";
        this._buildingQueryCache = false;
        this._buildQueryCache = this._data.subscribe('buildQueryCache', function() {
            this._buildingQueryCache = true;
        }.bind(this));
        this._mergeUids = this._data.subscribe('mergeUids', function(h, i) {
            if (this._buildingQueryCache)
                i.local_uids.splice(0, i.local_uids.length);
        }.bind(this));
        this._fetchComplete = this._data.subscribe('fetchComplete', function() {
            this._buildingQueryCache = false;
        }.bind(this));
    };
    g.prototype.disable = function() {
        "use strict";
        this._data.unsubscribe(this._buildQueryCache);
        this._data.unsubscribe(this._mergeUids);
        this._data.unsubscribe(this._fetchComplete);
    };
    e.exports = g;
}, null);
