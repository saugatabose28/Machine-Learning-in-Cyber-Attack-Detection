/*!CK:96496570!*/
/*1415600704,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["Bexhi"]);
}

__d("MercuryActionStatus", [], function(a, b, c, d, e, f) {
    e.exports = {
        UNSENT: 0,
        SUCCESS: 1,
        UNCONFIRMED: 3,
        FAILED_UNKNOWN_REASON: 4,
        UNABLE_TO_CONFIRM: 5,
        RESENT: 6,
        RESENDING: 7,
        ERROR: 10
    };
}, null);
__d("MercuryActionTypeConstants", [], function(a, b, c, d, e, f) {
    e.exports = {
        LOG_MESSAGE: "ma-type:log-message",
        USER_GENERATED_MESSAGE: "ma-type:user-generated-message",
        CHANGE_READ_STATUS: "ma-type:change_read_status",
        CHANGE_MUTE_SETTINGS: "ma-type:change-mute-settings",
        CLEAR_CHAT: "ma-type:clear_chat",
        SEND_MESSAGE: "ma-type:send-message",
        UPDATE_ACTION_ID: "ma-type:update-action-id",
        DELETE_MESSAGES: "ma-type:delete-messages",
        MARK_MESSAGES_SPAM: "ma-type:mark-messages-spam",
        DELETE_THREAD: "ma-type:delete-thread",
        CHANGE_ARCHIVED_STATUS: "ma-type:change-archived-status",
        CHANGE_FOLDER: "ma-type:change-folder",
        ADD_PARTICIPANTS: "ma-type:add-participants"
    };
}, null);
__d("MercuryAPIArgsSource", [], function(a, b, c, d, e, f) {
    e.exports = {
        CHAT: "chat",
        JEWEL: "jewel",
        MERCURY: "mercury",
        WEBMESSENGER: "web_messenger"
    };
}, null);
__d("MercuryAttachmentContentType", [], function(a, b, c, d, e, f) {
    e.exports = {
        PHOTO: "attach:image",
        VIDEO: "attach:video",
        MUSIC: "attach:music",
        VOICE: "attach:voice",
        TEXT: "attach:text",
        MSWORD: "attach:ms:word",
        MSXLS: "attach:ms:xls",
        MSPPT: "attach:ms:ppt",
        ORION: "attach:orion",
        SHOERACK_INVITATION: "attach:shoerackinvite",
        UNKNOWN: "attach:unknown"
    };
}, null);
__d("MercuryAttachmentType", [], function(a, b, c, d, e, f) {
    e.exports = {
        ERROR: "error",
        FILE: "file",
        PHOTO: "photo",
        STICKER: "sticker",
        SHARE: "share",
        UNKNOWN: "unknown",
        VIDEO: "video"
    };
}, null);
__d("MercuryErrorType", [], function(a, b, c, d, e, f) {
    e.exports = {
        SERVER: 1,
        TRANSPORT: 2,
        TIMEOUT: 3
    };
}, null);
__d("MercuryGlobalActionType", [], function(a, b, c, d, e, f) {
    e.exports = {
        MARK_ALL_READ: "mga-type:mark-all-read"
    };
}, null);
__d("MercuryLogMessageType", [], function(a, b, c, d, e, f) {
    e.exports = {
        SUBSCRIBE: "log:subscribe",
        UNSUBSCRIBE: "log:unsubscribe",
        VIDEO_CALL: "log:video-call",
        PHONE_CALL: "log:phone-call",
        THREAD_NAME: "log:thread-name",
        THREAD_IMAGE: "log:thread-image",
        SERVER_ERROR: "log:error-msg",
        LIVE_LISTEN: "log:live-listen",
        WALLPAPER: "log:wallpaper",
        ORION: "log:orion",
        SWITCH_TO_WORK: "log:switch"
    };
}, null);
__d("MercuryPayloadSource", [], function(a, b, c, d, e, f) {
    e.exports = {
        UNKNOWN: "unknown",
        CLIENT_CHANNEL_MESSAGE: "client_channel_message",
        CLIENT_SEND_MESSAGE: "client_send_message",
        CLIENT_CHANGE_ARCHIVED_STATUS: "client_change-archived_status",
        CLIENT_CHANGE_FOLDER: "client_change_folder",
        CLIENT_CHANGE_MUTE_SETTINGS: "client_change_mute_settings",
        CLIENT_CHANGE_READ_STATUS: "client_change_read_status",
        CLIENT_ADD_PARTICIPANTS: "client_add_participants",
        CLIENT_CLEAR_CHAT: "client_clear_chat",
        CLIENT_DELETE_MESSAGES: "client_delete_messages",
        CLIENT_MARK_MESSAGES_SPAM: "client_mark_messages_spam",
        CLIENT_DELETE_THREAD: "client_delete_thread",
        CLIENT_HANDLE_ERROR: "client_handle_error",
        SERVER_INITIAL_DATA: "server_initial_data",
        SERVER_SEND_MESSAGE: "server_send_message",
        SERVER_CONFIRM_MESSAGES: "server_confirm_messages",
        SERVER_CHANGE_ARCHIVED_STATUS: "server_change_archived_status",
        SERVER_CHANGE_READ_STATUS: "server_change_read_status",
        SERVER_MARK_FOLDER_READ: "server_mark_folder_read",
        SERVER_MARK_SEEN: "server_mark_seen",
        SERVER_FETCH_THREAD_INFO: "server_fetch_thread_info",
        SERVER_FETCH_THREADLIST_INFO: "server_fetch_threadlist_info",
        SERVER_STANDALONE_NOTIFICATIONS: "server_standalone_notifications",
        SERVER_THREAD_SYNC: "server_thread_sync",
        SERVER_TAB_PRESENCE: "server_tab_presence",
        SERVER_UNREAD_THREADS: "server_unread_threads",
        SERVER_SEARCH: "server_search"
    };
}, null);
__d("MercurySendMessageFields", [], function(a, b, c, d, e, f) {
    e.exports = {
        AUTO_RETRY_CNT: "auto_retry_cnt",
        MANUAL_RETRY_CNT: "manual_retry_cnt"
    };
}, null);
__d("MercurySourceType", [], function(a, b, c, d, e, f) {
    e.exports = {
        CHAT_ORCA: "source:chat:orca",
        CHAT_IPHONE: "source:chat:iphone",
        CHAT_JABBER: "source:chat:jabber",
        CHAT_MEEBO: "source:chat:meebo",
        CHAT_WEB: "source:chat:web",
        CHAT_TEST: "source:chat:test",
        CHAT: "source:chat",
        EMAIL: "source:email",
        GIGABOXX_API: "source:gigaboxx:api",
        GIGABOXX_BLAST: "source:gigaboxx:blast",
        GIGABOXX_EMAIL_REPLY: "source:gigaboxx:emailreply",
        GIGABOXX_MOBILE: "source:gigaboxx:mobile",
        GIGABOXX_WAP: "source:gigaboxx:wap",
        GIGABOXX_WEB: "source:gigaboxx:web",
        LEIA: "source:leia",
        SHARE_DIALOG: "source:share:dialog",
        SEND_PLUGIN: "source:sendplugin",
        SMS: "source:sms",
        TEST: "source:test",
        TITAN_WAP: "source:titan:wap",
        TITAN_M_BASIC: "source:titan:m_basic",
        TITAN_M_JAPAN: "source:titan:m_japan",
        TITAN_M_MINI: "source:titan:m_mini",
        TITAN_M_TOUCH: "source:titan:m_touch",
        TITAN_M_APP: "source:titan:m_app",
        TITAN_M_TABLET: "source:titan:m_tablet",
        TITAN_M_ZERO: "source:titan:m_zero",
        TITAN_M_TALK: "source:titan:m_talk",
        TITAN_WEB: "source:titan:web",
        TITAN_FACEWEB_ANDROID: "source:titan:faceweb_android",
        TITAN_FACEWEB_BUFFY: "source:titan:faceweb_buffy",
        TITAN_FACEWEB_IPAD: "source:titan:faceweb_ipad",
        TITAN_FACEWEB_IPHONE: "source:titan:faceweb_iphone",
        TITAN_FACEWEB_UNKNOWN: "source:titan:faceweb_unknown",
        TITAN_API: "source:titan:api",
        TITAN_API_MOBILE: "source:titan:api_mobile",
        TITAN_ORCA: "source:titan:orca",
        TITAN_EMAIL_REPLY: "source:titan:emailreply",
        MOBILE: "source:mobile",
        UNKNOWN: "source:unknown",
        WEB: "source:web",
        HELPCENTER: "source:helpcenter",
        NEW_SHARE_DIALOG: "source:share:dialog:new",
        PAID_PROMOTION: "source:paid_promotion",
        BUFFY_SMS: "source:buffy:sms",
        WEBRTC_MOBILE: "source:webrtc:mobile"
    };
}, null);
__d("MercuryThreadMode", [], function(a, b, c, d, e, f) {
    e.exports = {
        EMAIL_ORIGINATED: 1,
        TITAN_ORIGINATED: 2,
        OBJECT_ORIGINATED: 3
    };
}, null);
__d("MessagingTag", [], function(a, b, c, d, e, f) {
    e.exports = {
        GROUPS: "groups",
        UNREAD: "unread",
        ACTION_ARCHIVED: "action:archived",
        INBOX: "inbox",
        OTHER: "other",
        EVENT: "event",
        SENT: "sent",
        SMS_MUTE: "sms_mute",
        SPAM: "spam",
        UPDATES: "broadcasts_inbox",
        BCC: "header:bcc",
        FILTERED_CONTENT: "filtered_content",
        UNAVAILABLE_ATTACHMENT: "unavailable_attachment",
        ARCHIVED: "archived",
        EMAIL: "email",
        VOICEMAIL: "voicemail",
        SPAM_SPOOFING: "spam:spoofing",
        SPOOF_WARNING: "MTA:spoof_warning",
        SMS_TAG_ROOT: "SMSShortcode:",
        APP_ID_ROOT: "app_id:",
        DOMAIN_AUTH_PASS: "MTA:dmarc:pass",
        DOMAIN_AUTH_FAIL: "MTA:dmarc:fail",
        MTA_SYSTEM_MESSAGE: "MTA:system_message",
        EMAIL_MESSAGE: "source:email"
    };
}, null);
__d("PagesMessagingConst", [], function(a, b, c, d, e, f) {
    e.exports = {
        LOAD_MESSAGE_THREAD_URI: "\/ajax\/pages\/messages\/load_message_thread.php",
        ASYNC_ENDPOINT: "\/ajax\/messaging\/async.php"
    };
}, null);
__d("toIterator", [], function(a, b, c, d, e, f) {
    var g = 'key', h = 'value', i = 'key+value', j = (typeof Symbol === 'function') ? Symbol.iterator: '@@iterator', k = (function() {
        if (!(Array.prototype[j] && String.prototype[j])) {
            return (function() {
                function l(o, p) {
                    "use strict";
                    if (!Array.isArray(o))
                        throw new TypeError('Object is not an Array');
                    this.$ArrayIterator0 = o;
                    this.$ArrayIterator1 = p;
                    this.$ArrayIterator2 = 0;
                }
                l.prototype.next = function() {
                    "use strict";
                    if (!this instanceof l)
                        throw new TypeError('Object is not an ArrayIterator');
                    if (this.$ArrayIterator0 == null)
                        return n(undefined, true);
                    var o = this.$ArrayIterator0, p = this.$ArrayIterator0.length, q = this.$ArrayIterator2, r = this.$ArrayIterator1;
                    if (q >= p) {
                        this.$ArrayIterator0 = undefined;
                        return n(undefined, true);
                    }
                    this.$ArrayIterator2 = q + 1;
                    if (r === g) {
                        return n(q, false);
                    } else if (r === h) {
                        return n(o[q], false);
                    } else if (r === i)
                        return n([q, o[q]], false);
                };
                l.prototype["@@iterator"] = function() {
                    "use strict";
                    return this;
                };
                function m(o) {
                    "use strict";
                    if (typeof o !== 'string')
                        throw new TypeError('Object is not a string');
                    this.$StringIterator0 = o;
                    this.$StringIterator1 = 0;
                }
                m.prototype.next = function() {
                    "use strict";
                    if (!this instanceof m)
                        throw new TypeError('Object is not a StringIterator');
                    if (this.$StringIterator0 == null)
                        return n(undefined, true);
                    var o = this.$StringIterator1, p = this.$StringIterator0, q = p.length;
                    if (o >= q) {
                        this.$StringIterator0 = undefined;
                        return n(undefined, true);
                    }
                    var r, s = p.charCodeAt(o);
                    if (s < 55296 || s > 56319 || o + 1 === q) {
                        r = p[o];
                    } else {
                        var t = p.charCodeAt(o + 1);
                        if (t < 56320 || t > 57343) {
                            r = p[o];
                        } else 
                            r = p[o] + p[o + 1];
                    }
                    this.$StringIterator1 = o + r.length;
                    return n(r, false);
                };
                m.prototype["@@iterator"] = function() {
                    "use strict";
                    return this;
                };
                function n(o, p) {
                    return {
                        value: o,
                        done: p
                    };
                }
                return function(o, p) {
                    if (typeof o === 'string') {
                        return new m(o);
                    } else if (Array.isArray(o)) {
                        return new l(o, p || h);
                    } else 
                        return o[j]();
                };
            })();
        } else 
            return function(l) {
                return l[j]();
            };
    })();
    Object.assign(k, {
        KIND_KEY: g,
        KIND_VALUE: h,
        KIND_KEY_VAL: i,
        ITERATOR_SYMBOL: j
    });
    e.exports = k;
}, null);
__d("_shouldPolyfillES6Collection", [], function(a, b, c, d, e, f) {
    function g(j) {
        var k = a[j];
        if (k == null)
            return true;
        var l = k.prototype;
        return k == null || typeof k !== 'function' || typeof l.clear !== 'function' || new k().size !== 0 || typeof l.keys !== 'function' || typeof l.forEach !== 'function' || i(k) ||!h(k);
    }
    function h(j) {
        for (var k in j)
            if (j.hasOwnProperty(k))
                m[k] = j[k];
        var l = j === null ? null: j.prototype;
        m.prototype = Object.create(l);
        m.prototype.constructor = m;
        m.__superConstructor__ = j;
        function m() {
            "use strict";
            if (j !== null)
                j.apply(this, arguments);
        }
        try {
            var o = (new m([]));
            o.size;
            return o instanceof j;
        } catch (n) {
            return false;
        }
    }
    function i(j) {
        try {
            j();
        } catch (k) {
            return false;
        }
        return true;
    }
    e.exports = g;
}, null);
__d("Map", ["guid", "isNode", "toIterator", "_shouldPolyfillES6Collection"], function(a, b, c, d, e, f, g, h, i, j) {
    e.exports = (function(k, l) {
        if (!j('Map'))
            return k.Map;
        var m = 'key', n = 'value', o = 'key+value', p = '$map_', q, r = 'IE_HASH_';
        function s(da) {
            "use strict";
            if (!x(this))
                throw new TypeError('Wrong map object type.');
            w(this);
            if (da != null) {
                var ea = i(da), fa;
                while (!(fa = ea.next()).done) {
                    if (!x(fa.value))
                        throw new TypeError('Expected iterable items to be pair objects.');
                    this.set(fa.value[0], fa.value[1]);
                }
            }
        }
        s.prototype.clear = function() {
            "use strict";
            w(this);
        };
        s.prototype.has = function(da) {
            "use strict";
            var ea = u(this, da);
            return !!(ea != null && this._mapData[ea]);
        };
        s.prototype.set = function(da, ea) {
            "use strict";
            var fa = u(this, da);
            if (fa != null && this._mapData[fa]) {
                this._mapData[fa][1] = ea;
            } else {
                fa = this._mapData.push([da, ea]) - 1;
                v(this, da, fa);
                this.size += 1;
            }
            return this;
        };
        s.prototype.get = function(da) {
            "use strict";
            var ea = u(this, da);
            if (ea == null) {
                return l;
            } else 
                return this._mapData[ea][1];
        };
        s.prototype["delete"] = function(da) {
            "use strict";
            var ea = u(this, da);
            if (ea != null && this._mapData[ea]) {
                v(this, da, l);
                this._mapData[ea] = l;
                this.size -= 1;
                return true;
            } else 
                return false;
        };
        s.prototype.entries = function() {
            "use strict";
            return new t(this, o);
        };
        s.prototype.keys = function() {
            "use strict";
            return new t(this, m);
        };
        s.prototype.values = function() {
            "use strict";
            return new t(this, n);
        };
        s.prototype.forEach = function(da, ea) {
            "use strict";
            if (typeof da !== 'function')
                throw new TypeError('Callback must be callable.');
            var fa = da.bind(ea || l), ga = this._mapData;
            for (var ha = 0; ha < ga.length; ha++) {
                var ia = ga[ha];
                if (ia != null)
                    fa(ia[1], ia[0], this);
            }
        };
        s.prototype[i.ITERATOR_SYMBOL] = s.prototype.entries;
        function t(da, ea) {
            "use strict";
            if (!(x(da) && da._mapData))
                throw new TypeError('Object is not a map.');
            if ([m, o, n].indexOf(ea)===-1)
                throw new Error('Invalid iteration kind.');
            this._map = da;
            this._nextIndex = 0;
            this._kind = ea;
        }
        t.prototype.next = function() {
            "use strict";
            if (!this instanceof s)
                throw new TypeError('Expected to be called on a MapIterator.');
            var da = this._map, ea = this._nextIndex, fa = this._kind;
            if (da == null)
                return y(l, true);
            var ga = da._mapData;
            while (ea < ga.length) {
                var ha = ga[ea];
                ea += 1;
                this._nextIndex = ea;
                if (ha)
                    if (fa === m) {
                        return y(ha[0], false);
                    } else if (fa === n) {
                        return y(ha[1], false);
                    } else if (fa)
                        return y(ha, false);
            }
            this._map = l;
            return y(l, true);
        };
        t.prototype[i.ITERATOR_SYMBOL] = function() {
            return this;
        };
        function u(da, ea) {
            if (x(ea)) {
                var fa = ca(ea);
                return da._objectIndex[fa];
            } else {
                var ga = p + ea;
                if (typeof ea === 'string') {
                    return da._stringIndex[ga];
                } else 
                    return da._otherIndex[ga];
            }
        }
        function v(da, ea, fa) {
            var ga = fa == null;
            if (x(ea)) {
                var ha = ca(ea);
                if (ga) {
                    delete da._objectIndex[ha];
                } else 
                    da._objectIndex[ha] = fa;
            } else {
                var ia = p + ea;
                if (typeof ea === 'string') {
                    if (ga) {
                        delete da._stringIndex[ia];
                    } else 
                        da._stringIndex[ia] = fa;
                } else if (ga) {
                    delete da._otherIndex[ia];
                } else 
                    da._otherIndex[ia] = fa;
            }
        }
        function w(da) {
            da._mapData = [];
            da._objectIndex = {};
            da._stringIndex = {};
            da._otherIndex = {};
            da.size = 0;
        }
        function x(da) {
            return da != null && (typeof da === 'object' || typeof da === 'function');
        }
        function y(da, ea) {
            return {
                value: da,
                done: ea
            };
        }
        var z = (function() {
            try {
                Object.defineProperty({}, 'x', {});
                return true;
            } catch (da) {
                return false;
            }
        })();
        function aa(da) {
            if (!z) {
                return true;
            } else 
                return Object.isExtensible(da);
        }
        function ba(da) {
            var ea;
            switch (da.nodeType) {
            case 1:
                ea = da.uniqueID;
                break;
            case 9:
                ea = da.documentElement.uniqueID;
                break;
            default:
                return null;
            }
            if (ea) {
                return r + ea;
            } else 
                return null;
        }
        var ca = (function() {
            var da = Object.prototype.propertyIsEnumerable, ea = g(), fa = 0;
            return function ga(ha) {
                if (ha[ea]) {
                    return ha[ea];
                } else if (!z && ha.propertyIsEnumerable && ha.propertyIsEnumerable[ea]) {
                    return ha.propertyIsEnumerable[ea];
                } else if (!z && h(ha) && ba(ha)) {
                    return ba(ha);
                } else if (!z && ha[ea])
                    return ha[ea];
                if (aa(ha)) {
                    fa += 1;
                    if (z) {
                        Object.defineProperty(ha, ea, {
                            enumerable: false,
                            writable: false,
                            configurable: false,
                            value: fa
                        });
                    } else if (ha.propertyIsEnumerable) {
                        ha.propertyIsEnumerable = function() {
                            return da.apply(this, arguments);
                        };
                        ha.propertyIsEnumerable[ea] = fa;
                    } else if (h(ha)) {
                        ha[ea] = fa;
                    } else 
                        throw new Error('Unable to set a non-enumerable property on object.');
                    return fa;
                } else 
                    throw new Error('Non-extensible objects are not allowed as keys.');
            };
        })();
        return s;
    })(Function('return this')());
}, null);
__d("Set", ["Map", "toIterator", "_shouldPolyfillES6Collection"], function(a, b, c, d, e, f, g, h, i) {
    e.exports = (function(j, k) {
        if (!i('Set'))
            return j.Set;
        function l(n) {
            "use strict";
            if (this == null || (typeof this !== 'object' && typeof this !== 'function'))
                throw new TypeError('Wrong set object type.');
            m(this);
            if (n != null) {
                var o = h(n), p;
                while (!(p = o.next()).done)
                    this.add(p.value);
            }
        }
        l.prototype.add = function(n) {
            "use strict";
            this._map.set(n, n);
            this.size = this._map.size;
            return this;
        };
        l.prototype.clear = function() {
            "use strict";
            m(this);
        };
        l.prototype["delete"] = function(n) {
            "use strict";
            var o = this._map["delete"](n);
            this.size = this._map.size;
            return o;
        };
        l.prototype.entries = function() {
            "use strict";
            return this._map.entries();
        };
        l.prototype.forEach = function(n) {
            "use strict";
            var o = arguments[1], p = this._map.keys(), q;
            while (!(q = p.next()).done)
                n.call(o, q.value, q.value, this);
        };
        l.prototype.has = function(n) {
            "use strict";
            return this._map.has(n);
        };
        l.prototype.values = function() {
            "use strict";
            return this._map.values();
        };
        l.prototype[h.ITERATOR_SYMBOL] = l.prototype.values;
        l.prototype.keys = l.prototype.values;
        function m(n) {
            n._map = new g();
            n.size = n._map.size;
        }
        return l;
    })(Function('return this')());
}, null);
__d("ReportState", ["ErrorUtils", "invariant"], function(a, b, c, d, e, f, g, h) {
    var i = {};
    function j(l, m) {
        h(!i[l]);
        i[l] = m;
    }
    function k() {
        var l = {};
        Object.keys(i).forEach(function(m) {
            try {
                l[m] = i[m]();
            } catch (n) {
                g.reportError('ReportState: callback threw an error.');
            }
        });
        return l;
    }
    e.exports = {
        registerCallback: j,
        getState: k
    };
}, null);
__d("MercurySingletonMixin", ["CurrentUser"], function(a, b, c, d, e, f, g) {
    var h = {
        _getInstances: function() {
            if (!this._instances)
                this._instances = {};
            return this._instances;
        },
        get: function() {
            return this.getForFBID(g.getID());
        },
        getForFBID: function(i) {
            var j = this._getInstances();
            if (!j[i])
                j[i] = new this (i);
            return j[i];
        }
    };
    e.exports = h;
}, null);
__d("MercuryMessageClientState", [], function(a, b, c, d, e, f) {
    var g = {
        DO_NOT_SEND_TO_SERVER: 'do_not_send_to_server',
        SEND_TO_SERVER: 'send_to_server'
    };
    e.exports = g;
}, null);
__d("MercuryMessageIDs", ["KeyedCallbackManager"], function(a, b, c, d, e, f, g) {
    var h = new g(), i = {
        getServerIDs: function(j, k) {
            var l = j.filter(function(n) {
                return n.indexOf('mail.projektitan.com')!==-1;
            }), m = function(n) {
                var o = j.map(function(p) {
                    return n[p] ? n[p] : p;
                });
                k(o);
            };
            return h.executeOrEnqueue(l, m);
        },
        addServerID: function(j, k) {
            h.setResource(j, k);
        }
    };
    e.exports = i;
}, null);
__d("MercuryIDs", [], function(a, b, c, d, e, f) {
    var g = {
        isValid: function(h) {
            if (!h || typeof h !== 'string')
                return false;
            return (/^\w{3,12}:/.test(h));
        },
        isValidThreadID: function(h) {
            if (!g.isValid(h))
                return false;
            var i = g.tokenize(h);
            switch (i.type) {
            case 'user':
            case 'group':
            case 'thread':
            case 'root':
            case 'pending':
                return true;
            default:
                return false;
            }
        },
        tokenize: function(h) {
            if (!this.isValid(h))
                throw ("bad_id_format " + h);
            var i = h.indexOf(':');
            return {
                type: h.substr(0, i),
                value: h.substr(i + 1)
            };
        },
        getUserIDFromParticipantID: function(h) {
            if (!this.isValid(h))
                throw ("bad_id_format " + h);
            var i = g.tokenize(h), j = i.type, k = i.value;
            if (j != 'fbid')
                return null;
            return k;
        },
        getParticipantIDFromUserID: function(h) {
            if (isNaN(h))
                throw ("Not a user ID: " + h);
            return 'fbid:' + h;
        },
        getUserIDFromThreadID: function(h) {
            if (!this.isCanonical(h))
                return null;
            return this.tokenize(h).value;
        },
        getThreadIDFromUserID: function(h) {
            return 'user:' + h;
        },
        getThreadIDFromParticipantID: function(h) {
            var i = this.getUserIDFromParticipantID(h);
            return i ? this.getThreadIDFromUserID(i) : null;
        },
        isCanonical: function(h) {
            return this.isValid(h) && this.tokenize(h).type === 'user';
        },
        isMultichat: function(h) {
            return this.isValid(h) && this.tokenize(h).type !== 'user';
        }
    };
    e.exports = g;
}, null);
__d("MercuryAssert", ["MercuryIDs"], function(a, b, c, d, e, f, g) {
    e.exports = {
        isParticipantID: function(h) {
            if (!g.isValid(h))
                throw ("bad_participant_id " + h);
        },
        allParticipantIDs: function(h) {
            h.forEach(this.isParticipantID);
        },
        isUserParticipantID: function(h) {
            var i = g.tokenize(h);
            if (i.type != 'fbid')
                throw ("bad_user_id " + h);
        },
        isEmailParticipantID: function(h) {
            var i = g.tokenize(h);
            if (i.type != 'email')
                throw ("bad_email_id " + h);
        },
        allThreadID: function(h) {
            h.forEach(this.isThreadID);
        },
        isThreadID: function(h) {
            if (!g.isValid(h))
                throw ("bad_thread_id " + h);
        }
    };
}, null);
__d("MercurySendAttemptLogger", ["Banzai", "BanzaiLogger", "MercuryAttachmentType", "MercurySendMessageFields"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = h.create({
        retry: true
    }), l = g.isEnabled('mercury_send_attempt_logging'), m = function(o) {
        if (!o.has_attachment)
            return null;
        if (o.sticker_id)
            return i.STICKER;
        if ((o.image_ids && o.image_ids.length) || (o.photo_fbids && o.photo_fbids.length))
            return i.PHOTO;
        if (o.raw_attachments && o.raw_attachments.length)
            return i.FILE;
        if (o.content_attachment)
            return i.SHARE;
        return i.UNKNOWN;
    }, n = {
        log: function(o) {
            if (!l)
                return;
            var p = {
                message_id: o.message_id,
                timestamp_client: Date.now(),
                attempt_num: o[j.MANUAL_RETRY_CNT],
                first_attachment_type: m(o),
                source: o.source,
                auto_retry_cnt: o[j.AUTO_RETRY_CNT]
            };
            k.log('MercurySendAttemptLoggerConfig', p);
        }
    };
    e.exports = n;
}, null);
__d("MercurySendErrorLogger", ["Banzai", "BanzaiLogger"], function(a, b, c, d, e, f, g, h) {
    var i = h.create({
        retry: true
    }), j = g.isEnabled('mercury_send_error_logging'), k = {
        log: function(l) {
            if (!j)
                return;
            var m = {
                message_id: l.message_id,
                timestamp_client: Date.now(),
                error_type: l.error_data.type,
                error_code: l.error_data.code,
                error_description: l.error_data.description,
                is_transient: l.error_data.is_transient
            };
            i.log('MercurySendErrorLoggerConfig', m);
        }
    };
    e.exports = k;
}, null);
__d("MercuryServerSendMessageQueueSimulatedError", ["AsyncRequest", "AsyncResponse", "copyProperties"], function(a, b, c, d, e, f, g, h, i) {
    var j = 9999, k = {
        create: function(l) {
            var m = new g(this.endpoint_uri).setData({
                message_batch: [l],
                client: this.client
            }), n = new h(m, {});
            i(n, {
                error: j,
                silentError: false,
                transientError: true,
                request: m
            });
            return n;
        }
    };
    e.exports = k;
}, null);
__d("MercuryServerSendMessageQueue", ["BanzaiODS", "LogHistory", "MercuryLoggingHelper", "MercuryServerDispatcher", "MercuryServerSendMessageQueueSimulatedError"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = '/ajax/mercury/send_messages.php', m = h.getInstance('mercury_server_send_message_queue');
    function n(o, p, q, r) {
        "use strict";
        this.sender_id = o;
        this.queue_id = p;
        this.$MercuryServerSendMessageQueue0 = q.success_handler;
        this.$MercuryServerSendMessageQueue1 = q.error_handler;
        this.$MercuryServerSendMessageQueue2 = q.transport_error_handler;
        this.$MercuryServerSendMessageQueue3 = q.timeout_handler;
        this.client = r;
        var s = {};
        s[l] = {
            request_user_id: this.sender_id,
            endpoint_id: this.queue_id,
            mode: j.IMMEDIATE,
            handler: this.handleSuccess.bind(this),
            error_handler: this.handleError.bind(this),
            transport_error_handler: this.handleTransportError.bind(this),
            timeout: q.timeout,
            timeout_handler: this.handleTimeout.bind(this),
            connection_retries: q.connection_retries,
            send_attempt_logging_handler: q.send_attempt_logging_handler
        };
        j.registerEndpoints(s);
        this.pending_message = null;
        this.queue = [];
    }
    n.prototype.enqueue = function(o) {
        "use strict";
        this.queue.push(o);
        this.$MercuryServerSendMessageQueue4();
    };
    n.prototype.$MercuryServerSendMessageQueue4 = function() {
        "use strict";
        if (this.pending_message ||!this.queue.length) {
            if (this.pending_message)
                this.$MercuryServerSendMessageQueue5();
            return;
        }
        this.pending_message = this.queue.shift();
        j.trySend(l, {
            message_batch: [this.pending_message],
            client: this.client
        }, null, this.sender_id, this.queue_id);
    };
    n.prototype.$MercuryServerSendMessageQueue6 = function() {
        "use strict";
        while (this.queue.length)
            this.$MercuryServerSendMessageQueue7(this.queue.shift());
    };
    n.prototype.$MercuryServerSendMessageQueue7 = function(o) {
        "use strict";
        this.$MercuryServerSendMessageQueue1(k.create(o));
        m.error('mark_as_failed', {
            fbid: this.sender_id,
            queue_id: this.queue_id,
            message: i.obfuscateMessage(o)
        });
    };
    n.prototype.handleSuccess = function(o, p) {
        "use strict";
        this.$MercuryServerSendMessageQueue0(o, p);
        this.pending_message = null;
        this.$MercuryServerSendMessageQueue4();
    };
    n.prototype.handleError = function(o) {
        "use strict";
        this.$MercuryServerSendMessageQueue1(o);
        this.$MercuryServerSendMessageQueue6();
        this.pending_message = null;
    };
    n.prototype.handleTransportError = function(o) {
        "use strict";
        this.$MercuryServerSendMessageQueue2(o);
        this.$MercuryServerSendMessageQueue6();
        this.pending_message = null;
    };
    n.prototype.handleTimeout = function(o) {
        "use strict";
        this.$MercuryServerSendMessageQueue3(o);
        this.$MercuryServerSendMessageQueue6();
        this.pending_message = null;
    };
    n.prototype.$MercuryServerSendMessageQueue5 = function() {
        "use strict";
        m.debug('maybe_send_next_pending_message', {
            fbid: this.sender_id,
            queue_id: this.queue_id,
            pending_message: i.obfuscateMessage(this.pending_message),
            queue: this.queue.map(function(p) {
                return i.obfuscateMessage(p);
            })
        });
        var o = 'send_queue.delayed.queue_length.' + this.queue.length.toString();
        g.bumpEntityKey('chat.web', o);
    };
    e.exports = n;
}, null);
__d("MercuryServerSendMessageQueueRouter", ["BanzaiODS", "LogHistory", "Map", "MercuryServerSendMessageQueue", "MercurySingletonMixin"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = h.getInstance('mercury_server_send_message_queue_router'), m = 'chat.web.send_queue_router';
    g.setEntitySample(m, .1);
    function n(o) {
        "use strict";
        this.fbid = o;
        this.queues = new i();
    }
    n.prototype.enqueue = function(o, p, q, r) {
        "use strict";
        if (!this.queues.has(o)) {
            this.queues.set(o, new j(this.fbid, o, p, q));
            l.debug('added queue', {
                fbid: this.fbid,
                queue_id: o
            });
            g.bumpEntityKey(m, 'new_queue');
        }
        this.queues.get(o).enqueue(r);
    };
    Object.assign(n, k);
    e.exports = n;
}, null);
__d("MessagingReliabilityLogger", ["PresenceUtil", "MercuryServerDispatcher", "MessagingReliabilityLoggerInitialData", "isEmpty", "setTimeoutAcrossTransitions"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = '/ajax/mercury/client_reliability.php', m = 60000;
    function n(t, u) {
        var v = {
            app: i.app,
            categories: JSON.stringify(t)
        };
        if (!j(u))
            v.extra = JSON.stringify(u);
        return v;
    }
    function o(t, u, v, w) {
        if (t[u] === undefined)
            t[u] = {};
        if (t[u][v] === undefined)
            t[u][v] = 0;
        t[u][v] += w;
    }
    function p(t, u, v, w) {
        if (t[u] === undefined)
            t[u] = {};
        if (t[u][v] === undefined)
            t[u][v] = [];
        for (var x = 0; x < w.length; ++x)
            t[u][v].push(w[x]);
    }
    function q(t, u) {
        if ((t&&!t.categories) || (u&&!u.categories))
            return;
        var v = t ? JSON.parse(t.categories): {}, w = t && t.extra ? JSON.parse(t.extra): {}, x = JSON.parse(u.categories), y = u.extra ? JSON.parse(u.extra): {};
        for (var z in x) {
            var aa = x[z], ba = y[z];
            for (var ca in aa) {
                o(v, z, ca, aa[ca]);
                if (ba !== undefined) {
                    var da = ba[ca];
                    if (da !== undefined)
                        p(w, z, ca, da);
                }
            }
        }
        return n(v, w);
    }
    var r = {};
    r[l] = {
        mode: h.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR,
        batch_function: q
    };
    h.registerEndpoints(r);
    var s = {
        addEntry: function(t, u, v) {
            if (!i.enabled)
                return;
            var w = {};
            o(w, t, u, 1);
            var x = {};
            if (v !== undefined)
                p(x, t, u, [v]);
            h.trySend(l, n(w, x));
        }
    };
    (function t() {
        s.addEntry('page_event', 'active', g.getSessionID());
        k(t, m);
    })();
    e.exports = s;
}, null);
__d("MercuryServerSendMessageQueueOptions", [], function(a, b, c, d, e, f) {
    function g(h, i, j, k, l, m, n) {
        "use strict";
        this.success_handler = h;
        this.error_handler = i;
        this.transport_error_handler = j;
        this.timeout_handler = k;
        this.send_attempt_logging_handler = l;
        this.timeout = m;
        this.connection_retries = n;
    }
    e.exports = g;
}, null);
__d("MercuryThreadInformer", ["ArbiterMixin", "LogHistory", "MercuryAssert", "MercuryLoggingHelper", "MercurySingletonMixin", "copyProperties", "mapObject", "mixin"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    'use strict';
    var o = h.getInstance('mercury_informer'), p = n(g);
    for (var q in p)
        if (p.hasOwnProperty(q))
            s[q] = p[q];
    var r = p === null ? null: p.prototype;
    s.prototype = Object.create(r);
    s.prototype.constructor = s;
    s.__superConstructor__ = p;
    function s(u) {
        this.$MercuryThreadInformer0 = u;
        this.$MercuryThreadInformer1 = {};
        this.$MercuryThreadInformer2 = {};
        this.$MercuryThreadInformer3 = {};
        this.$MercuryThreadInformer4 = false;
        this.$MercuryThreadInformer5 = false;
        this.$MercuryThreadInformer6 = false;
        this.$MercuryThreadInformer7 = {};
        this.$MercuryThreadInformer8 = {};
        this.$MercuryThreadInformer9 = {};
        this.$MercuryThreadInformera = 0;
    }
    s.prototype.updatedThread = function(u) {
        this.$MercuryThreadInformer2[u] = true;
        this.$MercuryThreadInformerb();
    };
    s.prototype.deletedThread = function(u) {
        this.$MercuryThreadInformer1[u] = true;
        this.$MercuryThreadInformerb();
    };
    s.prototype.updatedThreadlist = function() {
        this.$MercuryThreadInformer4 = true;
        this.$MercuryThreadInformerb();
    };
    s.prototype.updatedUnseenState = function() {
        this.$MercuryThreadInformer5 = true;
        this.$MercuryThreadInformerb();
    };
    s.prototype.updatedUnreadState = function() {
        this.$MercuryThreadInformer6 = true;
        this.$MercuryThreadInformerb();
    };
    s.prototype.changedThreadReadState = function(u, v, w) {
        if (!this.$MercuryThreadInformer3[u] || this.$MercuryThreadInformer3[u].timestamp < w)
            this.$MercuryThreadInformer3[u] = {
                mark_as_read: v,
                timestamp: w
            };
        this.$MercuryThreadInformerb();
    };
    s.prototype.receivedMessage = function(u) {
        i.isThreadID(u.thread_id);
        var v = u.thread_id;
        if (!this.$MercuryThreadInformer7[v])
            this.$MercuryThreadInformer7[v] = [];
        this.$MercuryThreadInformer7[v].push(u);
        this.updatedThread(v);
    };
    s.prototype.reorderedMessages = function(u, v) {
        this.$MercuryThreadInformer8[u] = {
            source: v
        };
        this.$MercuryThreadInformerb();
    };
    s.prototype.updatedMessage = function(u, v, w) {
        if (!this.$MercuryThreadInformer9[u])
            this.$MercuryThreadInformer9[u] = {};
        this.$MercuryThreadInformer9[u][v] = {
            source: w
        };
        this.updatedThread(u);
    };
    s.prototype.synchronizeInforms = function(u) {
        this.$MercuryThreadInformera++;
        try {
            u();
        } catch (v) {
            throw v;
        } finally {
            this.$MercuryThreadInformera--;
            this.$MercuryThreadInformerb();
        }
    };
    s.prototype.listen = function(u, v) {
        return this.subscribe('threads-updated', function(w, x) {
            if (x[u])
                v(u);
        });
    };
    s.prototype.$MercuryThreadInformerb = function() {
        if (!this.$MercuryThreadInformera) {
            var u = this.$MercuryThreadInformer1, v = this.$MercuryThreadInformer2, w = this.$MercuryThreadInformer3, x = this.$MercuryThreadInformer4, y = this.$MercuryThreadInformer5, z = this.$MercuryThreadInformer6, aa = this.$MercuryThreadInformer7, ba = this.$MercuryThreadInformer8, ca = this.$MercuryThreadInformer9;
            this.$MercuryThreadInformer1 = {};
            this.$MercuryThreadInformer2 = {};
            this.$MercuryThreadInformer3 = {};
            this.$MercuryThreadInformer4 = false;
            this.$MercuryThreadInformer5 = false;
            this.$MercuryThreadInformer6 = false;
            this.$MercuryThreadInformer7 = {};
            this.$MercuryThreadInformer8 = {};
            this.$MercuryThreadInformer9 = {};
            var da = Object.keys(v);
            if (da.length || x)
                this.$MercuryThreadInformerc('threadlist-updated', da);
            if (da.length)
                this.$MercuryThreadInformerc('threads-updated', v);
            for (var ea in w) {
                this.$MercuryThreadInformerc('thread-read-changed', w);
                break;
            }
            for (ea in u) {
                this.$MercuryThreadInformerc('threads-deleted', u);
                break;
            }
            if (y)
                this.$MercuryThreadInformerc('unseen-updated', null);
            if (z)
                this.$MercuryThreadInformerc('unread-updated', null);
            for (ea in aa) {
                this.$MercuryThreadInformerc('messages-received', aa);
                break;
            }
            for (ea in ba) {
                this.$MercuryThreadInformerc('messages-reordered', ba);
                break;
            }
            for (ea in ca) {
                this.$MercuryThreadInformerc('messages-updated', ca);
                break;
            }
        }
    };
    s.prototype.$MercuryThreadInformerc = function(u, v) {
        t(u, v);
        this.inform(u, v);
    };
    function t(u, v) {
        var w = v;
        if (u == 'messages-received')
            w = m(w, function(x) {
                return x.map(function(y) {
                    return j.obfuscateMessage(y);
                });
            });
        o.debug(u, w);
    }
    l(s, k);
    e.exports = s;
}, null);
__d("MercuryServerRequests", ["Arbiter", "ArbiterMixin", "AsyncResponse", "BanzaiLogger", "BanzaiODS", "ChannelConstants", "CurrentUser", "KeyedCallbackManager", "LogHistory", "MercuryActionStatus", "MercuryActionTypeConstants", "MercuryAPIArgsSource", "MercuryAssert", "MercuryErrorType", "MercuryGlobalActionType", "MercuryIDs", "MercuryLoggingHelper", "MercuryLogMessageType", "MercuryMessageClientState", "MercuryPayloadSource", "MercurySendAttemptLogger", "MercurySendErrorLogger", "MercuryServerRequestsConfig", "MercuryServerSendMessageQueueRouter", "MercurySingletonMixin", "MercurySourceType", "MercuryThreadlistConstants", "MercuryMessageIDs", "MessagingConfig", "MessagingReliabilityLogger", "MessagingTag", "MercuryServerDispatcher", "MercurySendMessageFields", "MercuryServerSendMessageQueueOptions", "MercuryThreadInformer", "copyProperties", "createObjectFrom", "setTimeoutAcrossTransitions"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra) {
    "use strict";
    var sa = o.getInstance('mercury_server'), ta = r.MERCURY;
    function ua(gc, hc) {
        if (hc)
            gc._lastActionTimestamp = Math.max(gc._lastActionTimestamp, hc);
    }
    function va(gc, hc) {
        var ic = hc.thread_fbid;
        if (hc.canonical_fbid)
            ic = hc.canonical_fbid;
        var jc = gc._FBIDToClientIDs.getResource(ic);
        if (!jc) {
            if (hc.canonical_fbid) {
                jc = 'user:' + hc.canonical_fbid;
            } else if (hc.root_message_threading_id)
                jc = 'root:' + hc.root_message_threading_id;
            jc = jc || 'thread:' + ic;
            if (ic)
                ic = ic.toString();
            xa(gc, ic, jc);
            if (hc.thread_id)
                wa(gc, hc.thread_id, jc);
        }
        hc.thread_id = jc;
    }
    function wa(gc, hc, ic) {
        gc._serverToClientIDs.setResource(hc, ic);
        gc._clientToServerIDs.setResource(ic, hc);
        gc._newlyAddedClientIDs[hc] = ic;
    }
    function xa(gc, hc, ic) {
        gc._clientIDToFBIDs.setResource(ic, hc);
        gc._FBIDToClientIDs.setResource(hc, ic);
        gc._newlyAddedClientIDs[hc] = ic;
    }
    function ya(gc, hc, ic) {
        var jc = gc._clientIDToFBIDs.executeOrEnqueue(hc, ic), kc = gc._clientIDToFBIDs.getUnavailableResources(jc), lc = v.tokenize(hc);
        if (kc.length && lc.type != 'root')
            gc.fetchThreadData(kc);
    }
    function za(gc, hc) {
        return gc._clientIDToFBIDs.getResource(hc);
    }
    function ab(gc, hc) {
        return !!gc._FBIDToClientIDs.getResource(hc);
    }
    function bb(gc, hc) {
        var ic = gc._serverToClientIDs.getResource(hc);
        if (typeof ic == 'undefined')
            sa.warn('no_client_thread_id', {
                server_id: hc
            });
        return ic;
    }
    function cb(gc, hc) {
        var ic = gc._FBIDToClientIDs.getResource(hc);
        if (typeof ic == 'undefined')
            sa.warn('no_client_thread_id', {
                thread_fbid: hc
            });
        return ic;
    }
    function db(gc, hc, ic) {
        gc._FBIDToClientIDs.executeOrEnqueue(hc, ic);
        gc.ensureThreadIsFetched(hc);
    }
    function eb(gc) {
        return gc.thread_fbid || gc.thread_id || gc.client_thread_id;
    }
    function fb(gc, hc, ic) {
        if (hc.action_type != q.SEND_MESSAGE)
            return;
        var jc = hc.thread_fbid;
        if (hc.other_user_fbid)
            jc = hc.other_user_fbid;
        var kc = hc.client_thread_id;
        if (!kc)
            kc = cb(gc, jc);
        var lc = null;
        if (kc)
            lc = v.tokenize(kc).type;
        hb(gc, hc, ic === 'success');
        if (hc.status === p.ERROR) {
            ba.log(hc);
        } else 
            ja.addEntry('send_' + lc, ic, jc + ',' + hc.message_id);
    }
    function gb(gc) {
        return gc.getError() ? '_' + gc.getError() : '';
    }
    function hb(gc, hc, ic) {
        if (Math.floor(Math.random() * 20) === 0)
            if (hc.client_message_id in gc._sentMessagesTimestamp) {
                var jc = gc._sentMessagesTimestamp[hc.client_message_id], kc = Date.now() - jc, lc = hc.client_thread_id;
                if (!lc)
                    lc = cb(gc, hc.thread_fbid);
                    j.log('WebMessagingLatencyLoggerConfig', {
                        has_attachment: hc.attachments && hc.attachments.length > 0,
                        latency: kc,
                        is_canonical: !v.isMultichat(lc),
                        send_successful: ic,
                        source: 'client'
                    });
            }
    }
    function ib(gc, hc) {
        var ic = null;
        switch (hc.status) {
        case p.SUCCESS:
            ic = 'success';
            break;
        case p.FAILED_UNKNOWN_REASON:
            ic = 'confirmed_error';
            break;
        case p.UNABLE_TO_CONFIRM:
            ic = 'confirm_error';
            break;
        default:
            return;
        }
        fb(gc, hc, ic);
    }
    function jb(gc, hc) {
        (hc.threads || []).forEach(function(qc) {
            va(gc, qc);
            delete gc._fetchingThreads[qc.thread_id];
            var rc = za(gc, qc.thread_id);
            delete gc._fetchingThreads[rc];
            ua(gc, qc.timestamp);
        });
        (hc.ordered_threadlists || []).forEach(function(qc) {
            var rc = qc.thread_fbids || [];
            rc = rc.concat(qc.other_user_fbids || []);
            qc.thread_ids = rc.map(cb.bind(null, gc));
        });
        hc.actions = hc.actions || [];
        hc.actions.forEach(function(qc) {
            ib(gc, qc);
            var rc = qc.thread_fbid;
            if (qc.other_user_fbid)
                rc = qc.other_user_fbid;
            if (qc.status && qc.status != p.SUCCESS&&!rc) {
                qc.thread_id = qc.client_thread_id;
                return;
            }
            if (qc.action_type == q.SEND_MESSAGE && qc.client_thread_id && rc)
                xa(gc, rc.toString(), qc.client_thread_id);
            var sc = qc.thread_id;
            if (rc) {
                qc.thread_id = ab(gc, rc) ? cb(gc, rc) : null;
            } else if (qc.client_thread_id)
                qc.thread_id = qc.client_thread_id;
            if (!qc.thread_id)
                qc.server_thread_id = sc;
            ua(gc, qc.timestamp);
        });
        if (hc.end_of_history) {
            var ic = [];
            for (var jc = 0; jc < hc.end_of_history.length; jc++) {
                var kc = hc.end_of_history[jc];
                if (kc.type == 'user') {
                    ic.push('user:' + kc.fbid);
                } else if (kc.type == 'thread' && ab(gc, kc.fbid))
                    ic.push(cb(gc, kc.fbid));
            }
            hc.end_of_history = ic;
        }
        if (hc.roger) {
            var lc = {};
            for (var mc in hc.roger) {
                var nc = gc._serverToClientIDs.getResource(mc);
                if (nc) {
                    var oc = hc.roger[mc];
                    lc[nc] = {};
                    for (var pc in oc)
                        if (oc.hasOwnProperty(pc))
                            lc[nc]['fbid:' + pc] = oc[pc];
                }
            }
            hc.roger = lc;
        }
    }
    function kb(gc) {
        if (gc._pendingUpdates && gc._pendingUpdates.length) {
            var hc = gc._pendingUpdates[0];
            gc._pendingUpdates = gc._pendingUpdates.slice(1);
            gc.handleUpdate(hc);
        }
    }
    function lb(gc, hc) {
        var ic = pa({}, gc), jc;
        if (hc.threads) {
            if (!ic.threads)
                ic.threads = {};
            for (jc in hc.threads)
                ic.threads[jc] = Object.keys(qa((ic.threads[jc] || []).concat(hc.threads[jc])));
        }
        if (hc.messages) {
            if (!ic.messages)
                ic.messages = {};
            for (jc in hc.messages) {
                if (!ic.messages[jc])
                    ic.messages[jc] = {};
                for (var kc in hc.messages[jc])
                    if (ic.messages[jc][kc]) {
                        ic.messages[jc][kc] = ob(ic.messages[jc][kc], hc.messages[jc][kc]);
                    } else 
                        ic.messages[jc][kc] = hc.messages[jc][kc];
            }
        }
        ic.client = gc.client || hc.client;
        return ic;
    }
    function mb(gc, hc) {
        var ic = pa(qa(gc.folders, true), qa(hc.folders, true)), jc = gc.client || hc.client;
        return {
            folders: Object.keys(ic),
            client: jc
        };
    }
    function nb(gc, hc) {
        for (var ic in hc)
            if (gc[ic] && typeof gc[ic] === 'object') {
                gc[ic] = ob(gc[ic], hc[ic]);
            } else if (hc[ic] && typeof hc[ic] === 'object') {
                var jc = {};
                pa(jc, hc[ic]);
                gc[ic] = jc;
            }
        return gc;
    }
    function ob(gc, hc) {
        var ic = gc.offset < hc.offset ? gc.offset: hc.offset, jc = gc.offset + gc.limit, kc = hc.offset + hc.limit, lc = (jc > kc) ? jc: kc, mc = lc - ic;
        return {
            offset: ic,
            limit: mc
        };
    }
    function pb(gc, hc) {
        var ic = gc.client || hc.client, jc = {
            ids: {},
            client: ic
        };
        pa(jc.ids, gc.ids);
        pa(jc.ids, hc.ids);
        return jc;
    }
    function qb(gc, hc) {
        var ic = {}, jc, kc = gc.client || hc.client;
        delete gc.client;
        delete hc.client;
        for (jc in gc)
            pa(ic, qa(gc[jc], jc));
        for (jc in hc)
            pa(ic, qa(hc[jc], jc));
        var lc = {
            client: kc
        };
        for (var mc in ic) {
            jc = ic[mc];
            if (!lc[jc])
                lc[jc] = [];
            lc[jc].push(mc);
        }
        return lc;
    }
    function rb(gc, hc) {
        var ic = gc.client || hc.client, jc = qa(gc.ids, true), kc = qa(hc.ids, true), lc = pa(jc, kc);
        return {
            ids: Object.keys(lc),
            client: ic
        };
    }
    function sb(gc) {
        this._fbid = gc;
        this._lastActionTimestamp = 0;
        this._serverToClientIDs = new n();
        this._clientToServerIDs = new n();
        this._FBIDToClientIDs = new n();
        this._clientIDToFBIDs = new n();
        this._pendingUpdates = [];
        this._fetchingThreads = {};
        this._newlyAddedClientIDs = {};
        this._sentMessagesTimestamp = {};
        this._sendMessageQueueOptions = (ca.useSendMessageQueue ? new na(vb, ac, bc, cc, aa.log, ca.sendMessageTimeout, ia.SEND_CONNECTION_RETRIES) : null);
        ec(this);
    }
    pa(sb.prototype, h, {
        getServerThreadID: function(gc, hc) {
            s.isThreadID(gc);
            ya(this, gc, hc);
        },
        getThreadFBID: function(gc, hc) {
            s.isThreadID(gc);
            ya(this, gc, hc);
        },
        getClientThreadID: function(gc, hc) {
            db(this, gc, hc);
        },
        getClientThreadIDNow: function(gc) {
            return cb(this, gc);
        },
        getServerThreadIDNow: function(gc) {
            return za(this, gc);
        },
        getClientThreadIDForPermalinks: function(gc) {
            return bb(this, gc);
        },
        convertThreadIDIfAvailable: function(gc) {
            var hc = this._FBIDToClientIDs.getResource(gc);
            if (hc === undefined) {
                return gc;
            } else 
                return hc;
        },
        isUser: function(gc) {
            return gc < 2.2e+09 || (gc >= 1e+14 && gc <= 100099999989999) || (gc >= 8.9e+13 && gc <= 89999999999999);
        },
        canLinkExternally: function(gc) {
            s.isThreadID(gc);
            var hc = v.tokenize(gc);
            return (hc.type == 'user')||!!za(this, gc);
        },
        fetchThreadlistInfo: function(gc, hc, ic, jc, kc) {
            ic = ic || ka.INBOX;
            kc = kc || ta;
            var lc = jc ? la.IMMEDIATE: null, mc = {
                client: kc
            };
            mc[ic] = {
                offset: gc,
                limit: hc,
                filter: jc
            };
            fc(this, '/ajax/mercury/threadlist_info.php', mc, lc);
        },
        fetchUnseenThreadIDs: function(gc, hc) {
            hc = hc || ta;
            this.fetchThreadlistInfo(ga.RECENT_THREAD_OFFSET, ga.JEWEL_THREAD_COUNT, gc, null, hc);
        },
        fetchUnreadThreadIDs: function(gc, hc) {
            hc = hc || ta;
            fc(this, '/ajax/mercury/unread_threads.php', {
                folders: [gc],
                client: hc
            });
        },
        fetchMissedMessages: function(gc, hc) {
            hc = hc || ta;
            var ic = {
                last_action_timestamp: this._lastActionTimestamp,
                folders: gc,
                client: hc
            };
            ic.last_action_timestamp = this._lastActionTimestamp;
            fc(this, '/ajax/mercury/thread_sync.php', ic);
        },
        fetchThreadData: function(gc, hc) {
            hc = hc || ta;
            s.allThreadID(gc);
            var ic = {
                threads: {},
                client: hc
            }, jc = [], kc = [];
            gc.forEach(function(mc) {
                if (this._fetchingThreads[mc])
                    return;
                this._fetchingThreads[mc] = true;
                var nc = za(this, mc), oc = v.tokenize(mc);
                if (oc.type == 'user') {
                    jc.push(oc.value);
                    ic.threads.user_ids = jc;
                } else if (oc.type == 'thread') {
                    if (nc) {
                        kc.push(nc);
                    } else 
                        kc.push(oc.value);
                    ic.threads.thread_fbids = kc;
                } else if (oc.type != 'root' && oc.type != 'pending')
                    throw new Error('Unknown thread type', oc);
            }.bind(this));
            this.inform("fetch-thread-data", ic);
            for (var lc in ic.threads) {
                fc(this, '/ajax/mercury/thread_info.php', ic);
                break;
            }
        },
        ensureThreadIsFetched: function(gc, hc) {
            hc = hc || ta;
            if (!this._FBIDToClientIDs.getResource(gc)&&!this._fetchingThreads[gc]) {
                this._fetchingThreads[gc] = true;
                fc(this, '/ajax/mercury/thread_info.php', {
                    threads: {
                        thread_fbids: [gc]
                    },
                    client: hc
                });
            }
        },
        fetchThreadMessages: function(gc, hc, ic, jc, kc) {
            s.isThreadID(gc);
            kc = kc || ta;
            var lc, mc, nc = v.tokenize(gc), oc = za(this, gc), pc = false;
            if (oc) {
                lc = oc;
                mc = (nc.type == 'user') ? 'user_ids' : 'thread_fbids';
            } else {
                lc = nc.value;
                switch (nc.type) {
                case 'user':
                    mc = 'user_ids';
                    pc = true;
                    break;
                case 'thread':
                    mc = 'thread_fbids';
                    break;
                }
            }
            var qc = {
                messages: {},
                threads: {},
                client: kc
            };
            if (mc) {
                qc.messages[mc] = {};
                qc.messages[mc][lc] = {
                    offset: hc,
                    limit: ic
                };
                if (pc)
                    qc.threads[mc] = [lc];
                fc(this, '/ajax/mercury/thread_info.php', qc, jc);
            } else 
                ya(this, gc, function(rc) {
                    qc.messages.thread_fbids = {};
                    qc.messages.thread_fbids[rc] = {
                        offset: hc,
                        limit: ic
                    };
                    fc(this, '/ajax/mercury/thread_info.php', qc, jc);
                }.bind(this));
        },
        handleThreadInfoError: function(gc) {
            var hc = gc.getRequest().getData(), ic = [];
            if (hc.messages) {
                for (var jc in hc.messages.thread_fbids)
                    ic.push(tb(cb(this, jc)));
                for (var kc in hc.messages.user_ids)
                    ic.push(tb('user:' + kc));
                for (var lc in hc.messages.group_ids)
                    ic.push(tb('group:' + lc));
            }
            if (ic.length)
                this.handleUpdate({
                    actions: ic,
                    from_client: true,
                    payload_source: z.CLIENT_CHANNEL_MESSAGE
                });
            if (hc.threads && (hc.threads.user_ids || hc.threads.group_ids || hc.threads.thread_ids)) {
                var mc = 5, nc = true;
                if (!hc.retry_count) {
                    hc.retry_count = 0;
                    if (hc.messages)
                        delete hc.messages;
                } else if (hc.retry_count >= mc) {
                    nc = false;
                    (hc.threads.thread_ids || []).forEach(function(pc) {
                        if (pc in this._fetchingThreads)
                            delete this._fetchingThreads[pc];
                    }.bind(this));
                }
                if (nc) {
                    var oc = hc.retry_count * 1000;
                    ra(function() {
                        sa.log('retry_thread', hc);
                        fc(this, '/ajax/mercury/thread_info.php', hc);
                    }.bind(this), oc);
                    hc.retry_count++;
                }
            }
        },
        markFolderAsRead: function(gc) {
            fc(this, '/ajax/mercury/mark_folder_as_read.php', {
                folder: gc
            });
            var hc = [{
                action_type: u.MARK_ALL_READ,
                action_id: null,
                folder: gc
            }
            ];
            this.handleUpdate({
                global_actions: hc,
                from_client: true,
                payload_source: z.CLIENT_CHANGE_READ_STATUS
            });
        },
        changeThreadReadStatus: function(gc, hc) {
            s.isThreadID(gc);
            ya(this, gc, function(ic) {
                var jc = {
                    ids: {}
                };
                jc.ids[ic] = hc;
                fc(this, '/ajax/mercury/change_read_status.php', jc);
            }.bind(this));
        },
        changeThreadArchivedStatus: function(gc, hc) {
            s.isThreadID(gc);
            ya(this, gc, function(ic) {
                var jc = {
                    ids: {}
                };
                jc.ids[ic] = hc;
                fc(this, '/ajax/mercury/change_archived_status.php', jc);
            }.bind(this));
        },
        changeThreadFolder: function(gc, hc) {
            s.isThreadID(gc);
            ya(this, gc, function(ic) {
                var jc = {};
                jc[hc] = [ic];
                fc(this, '/ajax/mercury/move_thread.php', jc);
            }.bind(this));
        },
        changeMutingOnThread: function(gc, hc) {
            s.isThreadID(gc);
            ya(this, gc, function(ic) {
                fc(this, '/ajax/mercury/change_mute_thread.php', {
                    thread_fbid: ic,
                    mute_settings: hc,
                    payload_source: ta
                });
            }.bind(this));
        },
        markThreadSpam: function(gc) {
            s.isThreadID(gc);
            ya(this, gc, function(hc) {
                fc(this, '/ajax/mercury/mark_spam.php', {
                    id: hc
                });
            }.bind(this));
        },
        markMessagesSpam: function(gc, hc) {
            ha.getServerIDs(hc || [], function(ic) {
                fc(this, '/ajax/mercury/mark_spam_messages.php', {
                    message_ids: ic
                });
            }.bind(this));
        },
        unmarkThreadSpam: function(gc) {
            s.isThreadID(gc);
            ya(this, gc, function(hc) {
                fc(this, '/ajax/mercury/unmark_spam.php', {
                    id: hc
                });
            }.bind(this));
        },
        deleteThread: function(gc) {
            s.isThreadID(gc);
            ya(this, gc, function(hc) {
                var ic = {
                    ids: [hc]
                };
                fc(this, '/ajax/mercury/delete_thread.php', ic);
            }.bind(this));
        },
        deleteMessages: function(gc, hc) {
            ha.getServerIDs(hc || [], function(ic) {
                fc(this, '/ajax/mercury/delete_messages.php', {
                    message_ids: ic
                });
            }.bind(this));
        },
        clearChat: function(gc, hc, ic) {
            s.isThreadID(gc);
            fc(this, '/ajax/chat/settings.php', {
                clear_history_id: hc
            });
            var jc = [{
                action_type: q.CLEAR_CHAT,
                action_id: null,
                thread_id: gc,
                clear_time: ic
            }
            ];
            this.handleUpdate({
                actions: jc,
                from_client: true,
                payload_source: z.CLIENT_CLEAR_CHAT
            });
            k.bumpEntityKey('chat.web', 'chat.clear_window');
        },
        sendNewMessage: function(gc, hc) {
            hc = hc || ta;
            if (!gc.client_state || gc.client_state == y.SEND_TO_SERVER)
                ha.getServerIDs(gc.forward_message_ids || [], function(jc) {
                    var kc = v.tokenize(gc.thread_id), lc = kc.type, mc = pa({}, gc);
                    mc.forward_message_ids = jc;
                    if ((lc == 'root' && kc.value == mc.message_id) || (lc == 'user')) {
                        mc.client_thread_id = mc.thread_id;
                        mc.thread_id = null;
                        this._sendNewMessageToServer(mc, hc);
                    } else 
                        ya(this, mc.thread_id, function(nc) {
                            kc = v.tokenize(mc.thread_id);
                            if (kc.type == 'user') {
                                mc.other_user_fbid = kc.values;
                            } else 
                                mc.thread_fbid = nc;
                                mc.thread_id = null;
                                this._sendNewMessageToServer(mc);
                            }.bind(this));
                        }.bind(this));
            var ic = {
                actions: [pa({}, gc)],
                from_client: true,
                payload_source: z.CLIENT_SEND_MESSAGE
            };
            this.handleUpdate(ic);
        },
        _sendNewMessageToServer: function(gc, hc) {
            g.inform(l.ATTEMPT_RECONNECT);
            hc = hc || ta;
            this._sentMessagesTimestamp[gc.message_id] = Date.now();
            if (ca.useSendMessageQueue) {
                da.getForFBID(this._fbid).enqueue(eb(gc), this._sendMessageQueueOptions, hc, gc);
            } else 
                fc(this, '/ajax/mercury/send_messages.php', {
                    message_batch: [gc],
                    client: hc
                });
        },
        requestMessageConfirmation: function(gc, hc) {
            hc = hc || ta;
            var ic = {}, jc = {};
            for (var kc in gc) {
                var lc = za(this, kc);
                if (lc) {
                    ic[lc] = gc[kc];
                } else {
                    var mc = gc[kc];
                    for (var nc = 0; nc < mc.length; nc++)
                        jc[mc[nc]] = kc;
                }
            }
            var oc = Object.keys(ic), pc = Object.keys(jc);
            if (oc.length || pc.length)
                fc(this, '/ajax/mercury/confirm_messages.php', {
                    thread_message_map: ic,
                    local_messages: jc,
                    client: hc
                });
        },
        handleMessageConfirmError: function(gc) {
            var hc = gc.getRequest().getData().thread_message_map, ic = gc.getRequest().getData().local_messages;
            if (!hc&&!ic)
                return;
            var jc = [];
            for (var kc in hc) {
                var lc = hc[kc];
                lc.forEach(function(oc) {
                    jc.push({
                        action_type: q.SEND_MESSAGE,
                        client_message_id: oc,
                        message_id: oc,
                        client_thread_id: null,
                        thread_fbid: kc,
                        status: p.UNABLE_TO_CONFIRM
                    });
                });
            }
            for (var mc in ic) {
                var nc = ic[mc];
                jc.push({
                    action_type: q.SEND_MESSAGE,
                    client_message_id: mc,
                    message_id: mc,
                    client_thread_id: nc,
                    thread_fbid: null,
                    status: p.UNABLE_TO_CONFIRM
                });
            }
            if (jc.length)
                this.handleUpdate({
                    actions: jc,
                    payload_source: z.CLIENT_HANDLE_ERROR
                });
        },
        markSeen: function() {
            var gc = this._lastActionTimestamp;
            fc(this, '/ajax/mercury/mark_seen.php', {
                seen_timestamp: gc
            });
        },
        handleRoger: function(gc) {
            var hc = gc.tid ? this._serverToClientIDs.getResource(gc.tid): ('user:' + gc.reader);
            if (hc) {
                var ic = {};
                ic[hc] = {};
                ic[hc]['fbid:' + gc.reader] = gc.time;
                this.inform('update-roger', ic);
            }
        },
        handleUpdateWaitForThread: function(gc, hc, ic) {
            ic = ic || ta;
            var jc = this._FBIDToClientIDs.getResource(hc);
            if (jc) {
                this.handleUpdate(gc);
                return;
            }
            this._FBIDToClientIDs.executeOrEnqueue(hc, function() {
                this._pendingUpdates.push(gc);
            }.bind(this));
            if (!this._fetchingThreads[hc]) {
                this._fetchingThreads[hc] = true;
                var kc = {
                    threads: {
                        thread_fbids: [hc]
                    },
                    client: ic
                };
                if (this.isUser(hc))
                    kc = {
                        threads: {
                            user_ids: [hc]
                        },
                        client: ic
                    };
                fc(this, '/ajax/mercury/thread_info.php', kc);
            }
        },
        handleUpdate: function(gc) {
            var hc = [];
            if (gc && gc.threads)
                for (var ic = 0; ic < gc.threads.length; ic++) {
                    if (!gc.threads[ic].snippet_attachments)
                        continue;
                        for (var jc = 0; jc < gc.threads[ic].snippet_attachments.length; jc++)
                            if (gc.threads[ic].snippet_attachments[jc].share_xhp) {
                                hc.push({
                                    i: ic,
                                    j: jc,
                                    xhp: gc.threads[ic].snippet_attachments[jc].share_xhp
                                });
                                gc.threads[ic].snippet_attachments[jc].share_xhp = "HTMLDivElement not shown: object contains circular " + "reference, which was breaking JSON.stringify. " + "Look at MercuryServerRequests.handleUpdate";
                            }
                }
            var kc = {
                actions: [],
                threads: []
            };
            if (gc) {
                if (gc.actions)
                    kc.actions = gc.actions.map(function(nc) {
                        return w.obfuscateMessage(nc);
                    });
                if (gc.threads)
                    kc.threads = gc.threads.map(function(nc) {
                        return w.obfuscateThread(nc);
                    });
            }
            var lc = pa({}, gc, kc);
            sa.debug('update:' + gc.payload_source, {
                payload: lc,
                from_client: gc.from_client
            });
            for (var mc = 0; mc < hc.length; mc++)
                gc.threads[hc[mc].i].snippet_attachments[hc[mc].j].share_xhp = hc[mc].xhp;
            for (mc in gc) {
                oa.getForFBID(this._fbid).synchronizeInforms(function() {
                    if (!gc.from_client) {
                        jb(this, gc);
                        this.inform('payload-preprocessed', gc);
                    }
                    this.inform('update-thread-ids', this._newlyAddedClientIDs);
                    this._newlyAddedClientIDs = {};
                    this.inform('update-participants', gc);
                    this.inform('update-threads', gc);
                    this.inform('update-unread', gc);
                    this.inform('update-threadlist', gc);
                    this.inform('update-messages', gc);
                    this.inform('update-unseen', gc);
                    this.inform('update-typing-state', gc);
                    this.inform('update-roger', gc.roger);
                    this.inform('model-update-completed', null);
                    kb(this);
                }.bind(this));
                break;
            }
        },
        _handleSendMessageErrorCommon: function(gc, hc, ic, jc) {
            sa.debug('handle_send_message_error_common', {
                reliability_error_status: ic,
                request_error_status: hc
            });
            var kc = gc.getData(), lc = kc.message_batch, mc = lc.map(function(oc) {
                var pc = {
                    action_type: q.SEND_MESSAGE,
                    thread_fbid: oc.thread_fbid,
                    client_message_id: oc.message_id,
                    message_id: oc.message_id,
                    client_thread_id: oc.client_thread_id,
                    status: hc,
                    error_data: jc
                };
                return pc;
            });
            mc.forEach(function(oc) {
                fb(this, oc, ic);
            }, this);
            var nc = {
                actions: mc,
                payload_source: z.CLIENT_HANDLE_ERROR
            };
            this.handleUpdate(nc);
        },
        handleSendMessageError: function(gc) {
            var hc = gc.getPayload(), ic = null, jc = null;
            if (hc && hc.error_payload) {
                ic = p.UNCONFIRMED;
                jc = 'send_error';
            } else {
                ic = p.ERROR;
                jc = 'request_error' + gb(gc);
            }
            var kc = gc.error;
            if (kc === 1404102)
                i.verboseErrorHandler(gc);
            var lc = /<.*>/.test(gc.getErrorDescription()) ? gc.getErrorSummary(): gc.getErrorDescription();
            this._handleSendMessageErrorCommon(gc.getRequest(), ic, jc, {
                type: t.SERVER,
                code: gc.getError(),
                description: lc,
                is_transient: gc.isTransient()
            });
        },
        handleSendMessageTransportError: function(gc) {
            var hc = gc.getRequest();
            if (this._shouldAutoRetrySend(hc)) {
                this._autoRetrySend(hc);
            } else 
                this._handleSendMessageErrorCommon(gc.getRequest(), p.ERROR, 'transport_error' + gb(gc), {
                    type: t.TRANSPORT,
                    code: gc.getError(),
                    is_transient: true
                });
        },
        _shouldAutoRetrySend: function(gc) {
            var hc = gc.getData().message_batch;
            for (var ic = 0; ic < hc.length; ic++) {
                var jc = hc[ic], kc = jc[ma.AUTO_RETRY_CNT];
                if (kc < ca.maxAutoRetries)
                    return true;
            }
            return false;
        },
        _autoRetrySend: function(gc) {
            var hc = gc.getData();
            for (var ic = 0; ic < hc.message_batch.length; ic++) {
                var jc = hc.message_batch[ic], kc = pa({}, jc);
                kc[ma.AUTO_RETRY_CNT] += 1;
                this._sendNewMessageToServer(kc);
            }
        },
        handleSendMessageTimeout: function(gc) {
            if (this._shouldAutoRetrySend(gc)) {
                this._autoRetrySend(gc);
            } else 
                this._handleSendMessageErrorCommon(gc, p.ERROR, 'transport_timeout', {
                    type: t.TIMEOUT,
                    is_transient: true
                });
        },
        getLastActionTimestamp: function() {
            return this._lastActionTimestamp;
        }
    });
    pa(sb, ea);
    function tb(gc) {
        return {
            action_type: q.LOG_MESSAGE,
            thread_id: gc,
            message_id: gc,
            timestamp: Date.now(),
            timestamp_absolute: '',
            timestamp_relative: '',
            is_unread: false,
            source: fa.UNKNOWN,
            log_message_type: x.SERVER_ERROR,
            log_message_data: {}
        };
    }
    function ub(gc) {
        var hc = gc.getData(), ic = hc.request_user_id ? hc.request_user_id: m.getID();
        return sb.getForFBID(ic);
    }
    function vb(gc, hc) {
        ub(hc).handleUpdate(gc);
    }
    function wb(gc, hc) {
        var ic = gc.client || hc.client;
        return {
            client: ic,
            message_batch: gc.message_batch.concat(hc.message_batch)
        };
    }
    function xb(gc, hc) {
        var ic = {};
        pa(ic, gc.ids);
        pa(ic, hc.ids);
        var jc = gc.client || hc.client;
        return {
            ids: ic,
            client: jc
        };
    }
    function yb(gc, hc) {
        return hc;
    }
    function zb(gc) {
        var hc = ub(gc.getRequest());
        hc.handleThreadInfoError(gc);
    }
    function ac(gc) {
        var hc = ub(gc.getRequest());
        hc.handleSendMessageError(gc);
    }
    function bc(gc) {
        var hc = ub(gc.getRequest());
        hc.handleSendMessageTransportError(gc);
    }
    function cc(gc) {
        var hc = ub(gc);
        hc.handleSendMessageTimeout(gc);
    }
    function dc(gc) {
        var hc = ub(gc.getRequest());
        hc.handleMessageConfirmError(gc);
    }
    function ec(gc) {
        var hc = {
            '/ajax/mercury/thread_sync.php': {
                request_user_id: gc._fbid,
                mode: la.IDEMPOTENT,
                handler: vb
            },
            '/ajax/mercury/thread_info.php': {
                request_user_id: gc._fbid,
                mode: la.BATCH_DEFERRED_MULTI,
                batch_function: lb,
                handler: vb,
                error_handler: zb
            },
            '/ajax/mercury/mark_folder_as_read.php': {
                request_user_id: gc._fbid,
                mode: la.IMMEDIATE,
                handler: vb
            },
            '/ajax/mercury/change_read_status.php': {
                request_user_id: gc._fbid,
                mode: la.BATCH_SUCCESSIVE,
                batch_function: xb,
                handler: vb
            },
            '/ajax/mercury/mark_seen.php': {
                request_user_id: gc._fbid,
                mode: la.BATCH_SUCCESSIVE,
                batch_function: yb,
                handler: vb
            },
            '/ajax/mercury/confirm_messages.php': {
                request_user_id: gc._fbid,
                mode: la.IMMEDIATE,
                handler: vb,
                error_handler: dc
            },
            '/ajax/mercury/threadlist_info.php': {
                request_user_id: gc._fbid,
                mode: la.BATCH_SUCCESSIVE_UNIQUE,
                batch_function: nb,
                handler: vb
            },
            '/ajax/mercury/mark_spam.php': {
                request_user_id: gc._fbid,
                mode: la.IMMEDIATE,
                handler: vb
            },
            '/ajax/mercury/mark_spam_messages.php': {
                request_user_id: gc._fbid,
                mode: la.IMMEDIATE,
                handler: vb
            },
            '/ajax/mercury/unmark_spam.php': {
                request_user_id: gc._fbid,
                mode: la.IMMEDIATE,
                handler: vb
            },
            '/ajax/mercury/unread_threads.php': {
                request_user_id: gc._fbid,
                mode: la.BATCH_SUCCESSIVE_UNIQUE,
                batch_function: mb,
                handler: vb
            },
            '/ajax/chat/settings.php': {
                request_user_id: gc._fbid,
                mode: la.IMMEDIATE
            },
            '/ajax/mercury/change_archived_status.php': {
                request_user_id: gc._fbid,
                mode: la.BATCH_SUCCESSIVE,
                batch_function: pb,
                handler: vb
            },
            '/ajax/mercury/delete_thread.php': {
                request_user_id: gc._fbid,
                mode: la.BATCH_SUCCESSIVE,
                batch_function: rb,
                handler: vb
            },
            '/ajax/mercury/delete_messages.php': {
                request_user_id: gc._fbid,
                mode: la.IMMEDIATE,
                handler: vb
            },
            '/ajax/mercury/move_thread.php': {
                request_user_id: gc._fbid,
                mode: la.BATCH_SUCCESSIVE,
                batch_function: qb,
                handler: vb
            },
            '/ajax/mercury/change_mute_thread.php': {
                request_user_id: gc._fbid,
                mode: la.IMMEDIATE,
                handler: vb
            }
        };
        if (!ca.useSendMessageQueue)
            hc['/ajax/mercury/send_messages.php'] = {
                request_user_id: gc._fbid,
                mode: la.BATCH_SUCCESSIVE,
                batch_function: wb,
                batch_size_limit: ia.SEND_BATCH_LIMIT,
                handler: vb,
                error_handler: ac,
                transport_error_handler: bc,
                timeout: ca.sendMessageTimeout,
                timeout_handler: cc,
                connection_retries: ia.SEND_CONNECTION_RETRIES,
                send_attempt_logging_handler: aa.log
            };
        la.registerEndpoints(hc);
    }
    function fc(gc, hc, ic, jc) {
        la.trySend(hc, ic, jc, gc._fbid);
    }
    e.exports = sb;
}, null);
__d("MercuryAttachment", ["MercuryAttachmentContentType", "MercuryAttachmentType", "MercuryConfig", "startsWith"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = {
        getAttachIconClass: function(l) {
            switch (l) {
            case g.PHOTO:
                return 'MercuryPhotoIcon';
            case g.VIDEO:
                return 'MercuryVideoIcon';
            case g.MUSIC:
                return 'MercuryMusicIcon';
            case g.VOICE:
                return 'MercuryVoiceIcon';
            case g.TEXT:
                return 'MercuryTextIcon';
            case g.MSWORD:
                return 'MercuryMSWordIcon';
            case g.MSXLS:
                return 'MercuryMSXLSIcon';
            case g.MSPPT:
                return 'MercuryMSPPTIcon';
            }
            return 'MercuryDefaultIcon';
        },
        getAttachIconClassByMime: function(l) {
            if (j(l, 'image')) {
                return 'MercuryPhotoIcon';
            } else if (j(l, 'video')) {
                return 'MercuryVideoIcon';
            } else if (j(l, 'audio')) {
                return 'MercuryMusicIcon';
            } else if (j(l, 'text/plain')) {
                return 'MercuryTextIcon';
            } else 
                return 'MercuryDefaultIcon';
        },
        getAttachTypeByMime: function(l) {
            if (j(l, 'image')) {
                return g.PHOTO;
            } else if (j(l, 'video')) {
                return g.VIDEO;
            } else if (j(l, 'audio')) {
                return g.MUSIC;
            } else if (j(l, 'text/plain')) {
                return g.TEXT;
            } else 
                return g.UNKNOWN;
        },
        convertRaw: function(l) {
            var m = [];
            for (var n = 0; n < l.length; n++) {
                var o = l[n];
                if (o.attach_type === h.PHOTO) {
                    m.push(o);
                } else if (o.filename) {
                    var p = k.getAttachTypeByMime(o.filetype), q = {};
                    q.attach_type = h.FILE;
                    q.name = o.filename;
                    q.icon_type = p;
                    q.url = '';
                    m.push(q);
                }
            }
            return m;
        },
        get: function(l) {
            var m = [];
            if (l.attachments) {
                m = l.attachments;
            } else if (l.raw_attachments)
                m = this.convertRaw(l.raw_attachments);
            if (!(l.attachments && l.attachments.length > 0)) {
                if (i.WebStickerOptimisticRender && l.sticker_id)
                    return m.concat([{
                        attach_type: h.STICKER
                    }
                    ]);
                if (l.preview_attachments && l.preview_attachments.length > 0)
                    return m.concat(l.preview_attachments);
            }
            return m;
        }
    };
    e.exports = k;
}, null);
__d("MercuryThreads", ["ImmutableObject", "KeyedCallbackManager", "LogHistory", "Map", "MercuryActionTypeConstants", "MercuryAssert", "MercuryAttachment", "MercuryGlobalActionType", "MercuryIDs", "MercuryLogMessageType", "MercuryLoggingHelper", "MercuryPayloadSource", "MercurySingletonMixin", "MercuryThreadMode", "MessagingTag", "ReportState", "MercuryServerRequests", "Set", "MercuryThreadInformer"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
    'use strict';
    var z = i.getInstance('mercury_threads');
    function aa(ba) {
        this.$MercuryThreads0 = ba;
        this.$MercuryThreads1 = w.getForFBID(this.$MercuryThreads0);
        this.$MercuryThreads2 = y.getForFBID(this.$MercuryThreads0);
        this.$MercuryThreads3 = o.getParticipantIDFromUserID(this.$MercuryThreads0);
        this.$MercuryThreads4 = new h();
        this.$MercuryThreads5 = new x();
        this.$MercuryThreads6();
    }
    aa.prototype.getThreadMetaNow = function(ba) {
        l.isThreadID(ba);
        return this.$MercuryThreads4.getResource(ba);
    };
    aa.prototype.getThreadMeta = function(ba, ca, da) {
        return this.getMultiThreadMeta([ba], function(ea) {
            return ca(ea[ba]);
        }, da);
    };
    aa.prototype.getMultiThreadMeta = function(ba, ca, da) {
        l.allThreadID(ba);
        var ea = this.$MercuryThreads4.executeOrEnqueue(ba, ca), fa = this.$MercuryThreads4.getUnavailableResources(ea);
        if (fa.length) {
            var ga = [];
            for (var ha = 0; ha < fa.length; ha++) {
                var ia = fa[ha], ja = o.tokenize(ia), ka = ja.type, la = ja.value;
                if (ka == 'user') {
                    this.createNewLocalThread(ia, [this.$MercuryThreads3, o.getParticipantIDFromUserID(la)]);
                } else 
                    ga.push(ia);
            }
            if (ga.length)
                this.$MercuryThreads1.fetchThreadData(ga, da);
        }
        return ea;
    };
    aa.prototype.unsubscribe = function(ba) {
        this.$MercuryThreads4.unsubscribe(ba);
    };
    aa.prototype.getCanonicalThreadToParticipant = function(ba, ca, da, ea) {
        var fa = o.getThreadIDFromParticipantID(ba), ga = this.$MercuryThreads4.getResource(fa);
        if (typeof ga == 'undefined') {
            ga = this.createNewLocalThread(fa, [this.$MercuryThreads3, ba], ca);
            !ea && this.$MercuryThreads1.fetchThreadData([fa], da);
        }
        return ga;
    };
    aa.prototype.createNewLocalThread = function(ba, ca, da) {
        var ea = this.$MercuryThreads4.getResource(ba);
        if (!ea) {
            var fa = o.tokenize(ba), ga = fa.type, ha = fa.value;
            ea = new g({
                thread_id: ba,
                last_action_id: null,
                participants: ca,
                name: null,
                snippet: '',
                snippet_has_attachment: false,
                snippet_sender: null,
                unread_count: da ? da: 0,
                message_count: 0,
                image_src: null,
                timestamp_absolute: null,
                timestamp_relative: null,
                timestamp: null,
                canonical_fbid: ga === 'user' ? ha: null,
                is_canonical_user: ga == 'user',
                is_canonical: this.$MercuryThreads7(ca),
                is_subscribed: true,
                root_message_threading_id: null,
                folder: u.INBOX,
                is_archived: false,
                mode: t.TITAN_ORIGINATED
            });
            this.$MercuryThreads4.setResource(ba, ea);
        }
        return ea;
    };
    aa.prototype.isEmptyLocalThread = function(ba) {
        var ca = this.$MercuryThreads4.getResource(ba);
        if (!ca)
            return false;
        var da = o.tokenize(ba), ea = da.type;
        return ea == 'root'&&!ca.timestamp;
    };
    aa.prototype.isNewEmptyLocalThread = function(ba) {
        if (!this.isEmptyLocalThread(ba))
            return false;
        var ca = this.$MercuryThreads4.getResource(ba);
        return !!ca.participants && ca.participants.length === 0;
    };
    aa.prototype.canReply = function(ba) {
        var ca = this.$MercuryThreads4.getResource(ba);
        return !!(ca && ca.is_subscribed && ca.mode != t.OBJECT_ORIGINATED&&!ca.has_email_participant&&!ca.read_only && (ca.recipients_loadable || ca.recipients_loadable === undefined));
    };
    aa.prototype.$MercuryThreads8 = function(ba, ca) {
        if (!ba ||!ba.length)
            return;
        var da = new j(), ea = new j(), fa = new j(), ga = [];
        for (var ha = 0; ha < ba.length; ha++) {
            var ia = ba[ha];
            if (ia.is_forward)
                continue;
            var ja = ia.action_type;
            if (ja == k.LOG_MESSAGE && ia.log_message_type == p.SERVER_ERROR)
                continue;
            var ka=!!(ia.sync_id || ia.action_id), la = ia.thread_id;
            l.isThreadID(la);
            var ma = this.$MercuryThreads4.getResource(la);
            if (!ma&&!ka && ja == k.USER_GENERATED_MESSAGE) {
                ma = this.$MercuryThreads9(ia);
                this.$MercuryThreads4.setResource(la, ma);
            }
            if (!ma)
                continue;
            if (ja == k.LOG_MESSAGE || ja == k.USER_GENERATED_MESSAGE)
                ka=!ca;
            if (ma.server_timestamp && ia.timestamp <= ma.server_timestamp && ka)
                continue;
            if (!fa.has(la))
                fa.set(la, Object.assign({}, ma));
            this.$MercuryThreadsa(fa.get(la), ia, ca);
            if (ja == k.USER_GENERATED_MESSAGE)
                da.set(la, ia);
            if (ja == k.USER_GENERATED_MESSAGE || ja == k.LOG_MESSAGE || ja == k.SEND_MESSAGE)
                if (ia && ia.timestamp && (!ea.has(la) || ia.timestamp > ea.get(la).timestamp))
                    ea.set(la, ia);
        }
        fa.forEach(function(na, oa) {
            var pa = da.get(oa);
            if (pa)
                this.$MercuryThreadsb(na, pa);
            var qa = ea.get(oa), ra = na.timestamp;
            if (qa) {
                if (qa.timestamp > ra)
                    Object.assign(na, {
                        timestamp_absolute: qa.timestamp_absolute,
                        timestamp_relative: qa.timestamp_relative,
                        timestamp: qa.timestamp
                    });
                var sa = na.server_timestamp;
                if (!ca && qa.timestamp > sa)
                    na.server_timestamp = qa.timestamp;
            }
            var ta = new g(na);
            this.$MercuryThreads4.setResource(oa, ta);
            ga.push(q.obfuscateThread(ta));
        }.bind(this), this);
        ga.length && z.debug('threads_updated', {
            threads: ga
        });
    };
    aa.prototype.$MercuryThreadsa = function(ba, ca, da) {
        var ea = ca.action_type;
        if (ea == k.USER_GENERATED_MESSAGE || ea == k.LOG_MESSAGE) {
            ca.is_unread && ba.unread_count++;
            ba.message_count++;
            ba.is_archived = false;
        }
        switch (ea) {
        case k.DELETE_THREAD:
            ba.message_count = 0;
            this.$MercuryThreads2.deletedThread(ca.thread_id);
            break;
        case k.USER_GENERATED_MESSAGE:
            if (ba.last_read_timestamp >= ca.timestamp)
                this.$MercuryThreadsc(ba, ca, true);
            this.$MercuryThreadsd(ba, ca.author);
            break;
        case k.SEND_MESSAGE:
            var fa = ca.log_message_type;
            if (fa == p.THREAD_IMAGE)
                ba.image_src = ca.log_message_data.image ? ca.log_message_data.image.preview_url : null;
            ba.snippet_attachments = ca.attachments;
            break;
        case k.LOG_MESSAGE:
            var fa = ca.log_message_type;
            if (fa == p.SUBSCRIBE) {
                this.$MercuryThreadse(ba, ca.log_message_data.added_participants);
            } else if (fa == p.UNSUBSCRIBE) {
                this.$MercuryThreadsf(ba, ca.log_message_data.removed_participants);
            } else if (fa == p.THREAD_IMAGE) {
                if (!da)
                    ba.image_src = ca.log_message_data.image ? ca.log_message_data.image.preview_url : null;
            } else if (fa == p.THREAD_NAME)
                ba.name = ca.log_message_data.name;
            break;
        case k.CHANGE_READ_STATUS:
            var ga = this.$MercuryThreadsc(ba, ca, ca.mark_as_read);
            if (ga && ca.timestamp)
                ba.last_read_timestamp = ca.timestamp;
            if (ga && da)
                this.$MercuryThreads1.changeThreadReadStatus(ba.thread_id, ca.mark_as_read);
            break;
        case k.CLEAR_CHAT:
            this.$MercuryThreadsg(ba, ca.clear_time);
            break;
        case k.CHANGE_ARCHIVED_STATUS:
            if (ba.is_archived != ca.archived) {
                ba.is_archived = ca.archived;
                this.$MercuryThreads2.updatedThread(ca.thread_id);
            }
            break;
        case k.CHANGE_FOLDER:
            if (ba.folder != ca.new_folder) {
                ba.folder = ca.new_folder;
                this.$MercuryThreads2.updatedThread(ca.thread_id);
            }
            break;
        case k.DELETE_MESSAGES:
            if (da) {
                ba.snippet = '...';
                ba.snippet_has_attachment = false;
                ba.snippet_attachments = null;
                ba.snippet_sender = null;
                ba.is_forwarded_snippet = false;
                this.$MercuryThreads2.updatedThread(ca.thread_id);
            } else if (ca.message_ids)
                ba.message_count = ba.message_count - ca.message_ids.length;
            break;
        case k.CHANGE_MUTE_SETTINGS:
            if (ca.mute_settings !== undefined) {
                var ha = this.$MercuryThreads0 + '@facebook.com';
                if (ba.mute_settings) {
                    if (ca.mute_settings) {
                        var ia = {};
                        ia[ha] = ca.mute_settings;
                        ba.mute_settings = Object.assign({}, ba.mute_settings, ia);
                    } else {
                        ba.mute_settings = Object.assign({}, ba.mute_settings);
                        delete ba.mute_settings[ha];
                    }
                    this.$MercuryThreads2.updatedThread(ba.thread_id);
                }
            }
            break;
        case k.ADD_PARTICIPANTS:
            this.$MercuryThreadse(ba, ca.participants);
            this.$MercuryThreads2.updatedThread(ba.thread_id);
            break;
        }
    };
    aa.prototype.$MercuryThreads9 = function(ba) {
        var ca = o.tokenize(ba.thread_id), da = ca.type, ea = ca.value, fa = this.$MercuryThreads7(ba.specific_to_list);
        return new g({
            thread_id: ba.thread_id,
            last_action_id: null,
            participants: ba.specific_to_list,
            name: null,
            snippet: ba.body,
            snippet_has_attachment: false,
            snippet_attachments: [],
            snippet_sender: ba.author,
            unread_count: 0,
            message_count: 0,
            image_src: null,
            timestamp_absolute: ba.timestamp_absolute,
            timestamp_relative: ba.timestamp_relative,
            timestamp: ba.timestamp,
            canonical_fbid: da === 'user' ? ea: null,
            is_canonical_user: da === 'user',
            is_canonical: fa,
            is_subscribed: true,
            root_message_threading_id: ba.message_id,
            folder: u.INBOX,
            is_archived: false,
            mode: t.TITAN_ORIGINATED
        });
    };
    aa.prototype.$MercuryThreadsc = function(ba, ca, da) {
        if (ca.timestamp)
            this.$MercuryThreads2.changedThreadReadState(ba.thread_id, da, ca.timestamp);
        if (!ba ||!ba.thread_id)
            return false;
        if (!ba.timestamp) {
            this.$MercuryThreads5.add(ba.thread_id);
            return false;
        }
        var ea=!ba.unread_count;
        if (da == ea)
            return false;
        ba.unread_count = da ? 0 : 1;
        this.$MercuryThreads2.updatedThread(ba.thread_id);
        return true;
    };
    aa.prototype.$MercuryThreadsh = function(ba) {
        var ca = this.$MercuryThreads4.getAllResources();
        for (var da in ca)
            if (ca.hasOwnProperty(da)) {
                var ea = ca[da];
                if (ea.folder == ba) {
                    this.$MercuryThreads4.setResource(da, g.setProperty(ea, 'unread_count', 0));
                    this.$MercuryThreads2.updatedThread(da);
                }
            }
    };
    aa.prototype.$MercuryThreadsg = function(ba, ca) {
        if (!ba || ba.chat_clear_time === ca)
            return;
        ba.chat_clear_time = ca;
        this.$MercuryThreads2.reorderedMessages(ba.thread_id);
    };
    aa.prototype.$MercuryThreadse = function(ba, ca) {
        var da = new x(ba.participants);
        ba.participants = Array.from(ba.participants);
        ca.forEach(function(ea) {
            if (!da.has(ea)) {
                ba.participants.push(ea);
                if (ea === this.$MercuryThreads3)
                    ba.is_subscribed = true;
            }
        }.bind(this));
    };
    aa.prototype.$MercuryThreadsf = function(ba, ca) {
        var da = new x(ca);
        ba.participants = ba.participants.filter(function(ea) {
            return !da.has(ea);
        });
        if (da.has(this.$MercuryThreads3))
            ba.is_subscribed = false;
    };
    aa.prototype.$MercuryThreadsd = function(ba, ca) {
        if (ba.participants[0] != ca) {
            ba.participants = ba.participants.filter(function(da) {
                return da != ca;
            });
            ba.participants.unshift(ca);
        }
    };
    aa.prototype.$MercuryThreadsb = function(ba, ca) {
        var da = ca.body, ea = ca.subject, fa = '';
        if (ea) {
            ea = ea.toLowerCase();
            if (da.slice(0, ea.length).toLowerCase() == ea) {
                fa = da;
            } else if (da) {
                fa = ea + ' \u00B7 ' + da;
            } else 
                fa = ea;
        } else 
            fa = da;
        ba.snippet = fa;
        ba.snippet_has_attachment = ca.has_attachment;
        if (ca.raw_attachments && ca.raw_attachments.length > 0) {
            var ga = m.convertRaw(ca.raw_attachments);
            ba.snippet_attachments = ga;
        } else 
            ba.snippet_attachments = ca.attachments;
        ba.is_forwarded_snippet=!!ca.forward_count;
        ba.snippet_sender = ca.author;
    };
    aa.prototype.$MercuryThreads7 = function(ba) {
        return ba.filter(function(ca) {
            return ca != this.$MercuryThreads3;
        }.bind(this)).length <= 1;
    };
    aa.prototype.$MercuryThreads6 = function() {
        this.$MercuryThreads1.subscribe('update-threads', function(ba, ca) {
            var da = (ca.actions || []).filter(function(ea) {
                return ea.thread_id;
            });
            if (ca.threads && ca.payload_source == r.SERVER_FETCH_THREAD_INFO)
                ca.threads.forEach(function(ea) {
                    var fa = ea.thread_id;
                    if (this.$MercuryThreads5.has(fa)) {
                        this.$MercuryThreads5["delete"](fa);
                        if (ea.unread_count)
                            this.$MercuryThreads1.changeThreadReadStatus(ea.thread_id, true);
                    }
                }.bind(this));
            this.$MercuryThreadsi(ca.threads);
            this.$MercuryThreads8(da, ca.from_client);
            ca.threads && ca.threads.forEach(function(ea) {
                this.$MercuryThreads2.updatedThread(ea.thread_id);
            }.bind(this));
            if (ca.global_actions)
                ca.global_actions.forEach(function(ea) {
                    if (ea.action_type == n.MARK_ALL_READ)
                        this.$MercuryThreadsh(ea.folder);
                    }.bind(this));
        }.bind(this));
    };
    aa.prototype.$MercuryThreadsi = function(ba) {
        if (!ba ||!ba.length)
            return;
        var ca = {}, da = [];
        ba.forEach(function(ea) {
            var fa = new g(ea);
            ca[ea.thread_id] = fa;
            da.push(q.obfuscateThread(fa));
        });
        da.length && z.debug('threads_added', {
            threads: da
        });
        this.$MercuryThreads4.addResourcesAndExecute(ca);
    };
    aa.prototype.dumpResourcesDO_NOT_USE = function() {
        return this.$MercuryThreads4.dumpResources();
    };
    Object.assign(aa, s);
    v.registerCallback('mercury-threads', function() {
        var ba = {};
        ba.threads = {};
        var ca = aa._getInstances();
        for (var da in ca)
            ba.threads[da] = ca[da].dumpResourcesDO_NOT_USE();
        return ba;
    });
    e.exports = aa;
}, null);
__d("MercuryFolders", ["MessagingTag", "arrayContains"], function(a, b, c, d, e, f, g, h) {
    var i = [g.INBOX, g.OTHER, g.ACTION_ARCHIVED, g.SPAM], j = {
        getSupportedFolders: function() {
            return i.concat();
        },
        isSupportedFolder: function(k) {
            return h(i, k);
        },
        getFromMeta: function(k) {
            var l = k.folder;
            if (k.is_archived)
                l = g.ACTION_ARCHIVED;
            return l;
        }
    };
    e.exports = j;
}, null);
__d("MercuryUnreadState", ["MercuryFolders", "LogHistory", "KeyedCallbackManager", "MercuryActionTypeConstants", "MercuryGlobalActionType", "MercurySingletonMixin", "MercuryThreadlistConstants", "MessagingTag", "ReportState", "MercuryServerRequests", "MercuryThreadInformer", "MercuryThreads", "arrayContains", "copyProperties", "createObjectFrom"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
    var v = (g.getSupportedFolders() || []).filter(function(na) {
        return na != n.ACTION_ARCHIVED;
    }), w = 'unread_thread_hash', x = 'unseen_thread_list', y = m.MAX_UNREAD_COUNT, z = h.getInstance('mercury_unread_state');
    function aa(na) {
        this._fbid = na;
        this._serverRequests = p.getForFBID(this._fbid);
        this._threadInformer = q.getForFBID(this._fbid);
        this._threads = r.getForFBID(this._fbid);
        this._allReadTimestamp = {};
        this._threadReadTimestamp = {};
        this._initialUnreadCount = {};
        this._maxCount = {};
        this._unreadResources = {};
        v.forEach(function(oa) {
            this._initialUnreadCount[oa] = 0;
            this._maxCount[oa] = false;
            this._unreadResources[oa] = new i();
        }.bind(this));
        this._serverRequests.subscribe('update-unread', function(oa, pa) {
            fa(this, pa);
            var qa = pa.global_actions || [];
            for (var ra = 0; ra < qa.length; ra++) {
                var sa = qa[ra];
                if (sa.action_type == k.MARK_ALL_READ)
                    ia(this, sa.folder, sa.timestamp);
            }
        }.bind(this));
        this._serverRequests.subscribe('update-thread-ids', function(oa, pa) {
            ka(this, pa);
        }.bind(this));
    }
    t(aa.prototype, {
        getUnreadCount: function(na) {
            if (this.exceedsMaxCount(na)) {
                z.error('unguarded_unread_count_fetch', {});
                return 0;
            }
            return ea(this, na);
        },
        exceedsMaxCount: function(na) {
            return this._maxCount[na] || (ea(this, na) > y);
        },
        markFolderAsRead: function(na) {
            if (this._maxCount[na] || ea(this, na) > 0)
                this._serverRequests.markFolderAsRead(na);
        }
    });
    t(aa, l);
    function ba(na, oa, pa) {
        na._unreadResources[oa].setResource(w, pa);
        na._unreadResources[oa].setResource(x, Object.keys(pa));
    }
    function ca(na, oa, pa) {
        var qa = na._unreadResources[oa].executeOrEnqueue(w, pa), ra = na._unreadResources[oa].getUnavailableResources(qa);
        if (ra.length)
            na._serverRequests.fetchUnreadThreadIDs(oa);
    }
    function da(na, oa) {
        return na._unreadResources[oa].getResource(w);
    }
    function ea(na, oa) {
        var pa = na._unreadResources[oa].getResource(x);
        if (pa) {
            return pa.length;
        } else 
            return na._initialUnreadCount[oa];
    }
    function fa(na, oa) {
        var pa;
        (oa.unread_thread_fbids || []).forEach(function(qa) {
            pa = qa.folder;
            if (!ma(pa))
                return;
            var ra = qa.thread_fbids || [];
            ra = ra.concat(qa.other_user_fbids || []);
            var sa = ja(na, ra);
            ba(na, pa, u(sa, true));
            if (sa.length > y)
                na._maxCount[pa] = true;
            na._threadInformer.updatedUnreadState();
        });
        (oa.message_counts || []).forEach(function(qa) {
            if (qa.unread_count === undefined)
                return;
            pa = qa.folder;
            if (qa.unread_count > y) {
                na._maxCount[pa] = true;
                ba(na, pa, {});
                na._threadInformer.updatedUnreadState();
            } else {
                na._initialUnreadCount[pa] = qa.unread_count;
                if (na._initialUnreadCount[pa] === 0)
                    ba(na, pa, {});
                na._threadInformer.updatedUnreadState();
            }
        });
        (oa.actions || []).forEach(function(qa) {
            if (qa.is_forward)
                return;
            var ra = j, sa = qa.other_user_fbid ? qa.other_user_fbid: qa.thread_fbid, ta = qa.thread_id ? qa.thread_id: sa;
            if (qa.action_type == ra.DELETE_THREAD) {
                v.forEach(function(va) {
                    ha(na, va, ta);
                });
            } else if (qa.action_type == ra.CHANGE_ARCHIVED_STATUS || qa.action_type == ra.CHANGE_FOLDER) {
                var ua = na._threads.getThreadMetaNow(qa.thread_id);
                pa = g.getFromMeta(ua);
                if (ma(pa) && ua.unread_count > 0)
                    ga(na, pa, ta);
                v.forEach(function(va) {
                    if (va != pa)
                        ha(na, va, ta);
                });
            } else {
                pa = la(na, qa);
                if (!ma(pa))
                    return;
                if (qa.action_type == ra.CHANGE_READ_STATUS) {
                    if (qa.mark_as_read) {
                        ha(na, pa, ta, qa.timestamp);
                    } else 
                        ga(na, pa, ta, qa.timestamp);
                } else if (qa.action_type == ra.USER_GENERATED_MESSAGE || qa.action_type == ra.LOG_MESSAGE)
                    if (qa.is_unread)
                        ga(na, pa, ta, qa.timestamp);
            }
        });
    }
    function ga(na, oa, pa, qa) {
        if (na._maxCount[oa])
            return;
        ca(na, oa, function(ra) {
            var sa = na._allReadTimestamp[oa] || 0, ta = na._threadReadTimestamp[pa] || 0, ua = qa || Number.POSITIVE_INFINITY;
            if (ua >= sa && ua >= ta&&!ra[pa]) {
                ra[pa] = qa || 0;
                ba(na, oa, ra);
                na._threadInformer.updatedUnreadState();
            }
        });
    }
    function ha(na, oa, pa, qa) {
        if (na._maxCount[oa])
            return;
        ca(na, oa, function(ra) {
            if (qa) {
                var sa = na._threadReadTimestamp[pa];
                if (!sa || sa < qa)
                    na._threadReadTimestamp[pa] = qa;
            }
            var ta = ra[pa];
            if (qa && typeof ta == 'number' && qa < ta)
                return;
            if (pa in ra) {
                delete ra[pa];
                ba(na, oa, ra);
                na._threadInformer.updatedUnreadState();
            }
        });
    }
    function ia(na, oa, pa) {
        na._maxCount[oa] = false;
        ba(na, oa, {});
        na._allReadTimestamp[oa] = Math.max(na._allReadTimestamp[oa] || 0, pa || 0);
        na._threadInformer.updatedUnreadState();
    }
    function ja(na, oa) {
        return oa.map(na._serverRequests.convertThreadIDIfAvailable, na._serverRequests);
    }
    function ka(na, oa) {
        v.forEach(function(pa) {
            var qa = da(na, pa);
            if (!qa)
                return;
            for (var ra in oa) {
                var sa = oa[ra];
                if (qa[ra]) {
                    qa[sa] = qa[ra];
                    delete qa[ra];
                }
            }
            ba(na, pa, qa);
        });
    }
    function la(na, oa) {
        var pa = oa.thread_id ? na._threads.getThreadMetaNow(oa.thread_id): null;
        return pa ? g.getFromMeta(pa) : oa.folder;
    }
    function ma(na) {
        return s(v, na);
    }
    o.registerCallback('mercury-unread-state', function() {
        var na = {};
        na.unread = {};
        na.unread_max_count = {};
        var oa = aa._getInstances();
        for (var pa in oa) {
            na.unread[pa] = {};
            na.unread_max_count[pa] = {};
            v.forEach(function(qa) {
                na.unread[pa][qa] = t({}, da(oa[pa], qa));
                na.unread_max_count[pa][qa] = oa[pa]._maxCount[qa];
            });
        }
        return na;
    });
    e.exports = aa;
}, null);
__d("requireWeak", [], function(a, b, c, d, e, f) {
    function g(h, i) {
        d.call(null, h, i);
    }
    e.exports = g;
}, null);
