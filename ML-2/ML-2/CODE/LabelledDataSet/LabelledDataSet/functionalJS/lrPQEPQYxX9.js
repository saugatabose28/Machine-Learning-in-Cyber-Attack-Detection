/*!CK:2952453398!*/
/*1415997112,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["YMIFc"]);
}

__d("EntstreamStoryDeduper", ["AsyncRequest", "Arbiter", "DOM", "csx", "CSS", "CacheStorage"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    function m(p, q) {
        var r = {};
        for (var s = 0; s < p.length; s++) {
            var t = p[s], u = t.getAttribute('data-dedupekey');
            if (r[u]) {
                if (q) {
                    k.hide(t);
                    h.inform('FbFeedUnreadPillNavigation/logDedupe', {
                        story: t,
                        action: 'dedupe_story_hide'
                    });
                } else {
                    i.remove(t);
                    h.inform('FbFeedUnreadPillNavigation/logDedupe', {
                        story: t,
                        action: 'dedupe_story_remove'
                    });
                }
            } else 
                r[u] = 1;
        }
    }
    function n(p, q) {
        var r = {}, s = 0, t = Date.now() / 1000 / 3600, u = 30;
        for (var v = 0; v < u; ++v) {
            var w = new l('localstorage', 'vpv_local_log.' + parseInt(t - v, 10) + 'h'), x = w.keys();
            s += x.length > 0;
            for (var y = 0; y < x.length; y++)
                r[x[y]] = 1;
        }
        var z = 0, aa = 0, ba;
        for (var ca = 0; ca < p.length; ca++) {
            var da = p[ca], ea = da.getAttribute('data-dedupekey'), fa = 'checkedVPVLocalCache';
            if (k.hasClass(da, fa)) {
                continue;
            } else 
                k.addClass(da, fa);
            ++z;
            if (r[ea] && k.shown(da)) {
                ba = ea;
                ++aa;
                if (q) {
                    k.hide(da);
                } else 
                    i.remove(da);
            }
        }
        if (z > 0)
            new g('/ajax/feed/feed_tracking/vpv_local_storage_log').setData({
                num_vpvs: Object.keys(r).length,
                num_hours: s,
                num_seen_stories: aa,
                num_unseen_stories: z,
                seen_story_key: ba
            }).send();
    }
    var o = {
        dedupe: function(p, q) {
            q = q || "._5jmm";
            var r = i.scry(p, q);
            r = r.filter(function(s) {
                return s.getAttribute('data-dedupekey');
            });
            m(r, false);
        },
        dedupeHide: function(p, q, r) {
            q = q || "._5jmm";
            var s = i.scry(p, q), t = s.filter(function(x) {
                return x.getAttribute('data-dedupekey') && k.shown(x);
            });
            m(t, true);
            if (r) {
                var u = i.scry(p, ".unread_session");
                for (var v = 0; v < u.length; ++v) {
                    var w = i.scry(u[v], q);
                    w.length && n(w, true);
                }
            }
        }
    };
    e.exports = o;
}, null);
__d("PageAdsAttachmentLinkShareConstants", [], function(a, b, c, d, e, f) {
    var g = {
        LINK_ATTACHMENT_CLICK: 'link_attachment_click'
    };
    e.exports = g;
}, null);
__d("runAfterScrollingStops", ["Arbiter", "Event", "Run", "debounceAcrossTransitions", "emptyFunction"], function(a, b, c, d, e, f, g, h, i, j, k) {
    function l(w, x, y) {
        if (x && o[x])
            return;
        if (!n) {
            g.subscribe('page_transition', v);
            n = true;
        }
        if (!m) {
            w();
            return;
        }
        x && (o[x] = 1);
        p.push(w);
        if (!y) {
            if (r) {
                i.onLeave(v);
                r = false;
            }
            q.push(p.length - 1);
        }
    }
    var m, n, o = {}, p = [], q = [], r = true, s = 500, t = j(function() {
        m = false;
        var w = p;
        p = [];
        q = [];
        o = {};
        for (var x = 0, y = w.length; x < y; ++x)
            w[x]();
    }, s);
    function u() {
        m = true;
        t();
    }
    function v() {
        var w = q;
        q = [];
        r = true;
        for (var x = 0, y = w.length; x < y; ++x)
            p[w[x]] = k;
    }
    h.listen(window, 'scroll', u);
    e.exports = l;
}, null);
__d("LitestandOffscreenController", ["Arbiter", "CSS", "DOM", "Event", "NavigationMessage", "Parent", "Run", "Style", "SubscriptionsHandler", "Vector", "cx", "csx", "queryThenMutateDOM", "runAfterScrollingStops", "throttle"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
    var v = 1, w = 9, x = 10, y = {}, z = false, aa, ba, ca, da, ea = [];
    function fa() {
        aa && aa.release();
        aa = null;
        z = false;
    }
    function ga() {
        y = {};
        ea = [];
    }
    function ha() {
        for (var ta in y) {
            var ua = y[ta];
            if (ua.hidden)
                ua.dirty = true;
        }
    }
    function ia() {
        if (h.hasClass(document.body, "_5vb_"))
            return x;
        return w;
    }
    function ja() {
        da = da || p.getViewportDimensions().y;
        ba = p.getScrollPosition().y;
        ca = ba + da;
        if (v) {
            ba -= da * v;
            ca += da * v;
        }
        for (var ta in y) {
            var ua = y[ta];
            ua.position = p.getElementPosition(ua.element).y;
            if (!ua.hidden)
                ua.height = ua.element.offsetHeight;
        }
    }
    function ka() {
        var ta = [];
        for (var ua in y) {
            var va = y[ua], wa = va.position, xa = wa + va.height < ba, ya = wa > ca;
            if (!va.hidden && (xa || ya)) {
                la(va);
            } else if (!xa&&!ya) {
                va.pendingHide = false;
                if (va.hidden) {
                    if (va.dirty && wa < ba) {
                        ta.push(ua);
                        h.addClass(ma(va), "_49nu");
                    } else 
                        n.apply(va.element, {
                            height: '',
                            marginBottom: ''
                        });
                    h.show(ma(va));
                    va.dirty = false;
                    va.hidden = false;
                }
            }
        }
        if (!ta.length)
            return;
        var za = 0;
        s(function() {
            for (var ab = 0, bb = ta.length; ab < bb; ab++) {
                var cb = y[ta[ab]];
                za += cb.height - ma(cb).offsetHeight + n.getFloat(cb.element, 'marginBottom');
            }
        }, function() {
            for (var ab = 0, bb = ta.length; ab < bb; ab++) {
                var cb = y[ta[ab]];
                h.removeClass(ma(cb), "_49nu");
                n.apply(cb.element, {
                    height: '',
                    marginBottom: ''
                });
            }
            za && (document.body.scrollTop -= za);
        });
    }
    function la(ta) {
        if (!ta.pendingHide) {
            ea.push(ta);
            ta.pendingHide = true;
        }
    }
    function ma(ta) {
        if (ta.wrapperElement)
            return ta.wrapperElement;
        var ua = ta.element;
        if (ua.firstElementChild)
            return (ta.wrapperElement = ua.firstElementChild);
        for (var va = 0; va < ua.childNodes.length; va++)
            if (ua.childNodes[va].tagName)
                return (ta.wrapperElement = ua.childNodes[va]);
    }
    function na() {
        var ta = ia() + 'px';
        for (var ua = 0; ua < ea.length; ua++) {
            var va = ea[ua];
            if (i.scry(va.element, "._52fb").length)
                va.pendingHide = false;
            if (va && va.element && va.pendingHide&&!va.hidden) {
                n.apply(va.element, {
                    height: va.height + 'px',
                    marginBottom: ta
                });
                h.hide(ma(va));
                va.hidden = true;
                va.pendingHide = false;
            }
        }
        ea = [];
    }
    function oa() {
        t(na, 'LitestandOffscreenController/hide');
        s(ja, ka, 'LitestandOffscreenController');
    }
    function pa(ta, ua) {
        var va = l.byClass(ua.story, "_4ikz");
        if (!va)
            return;
        va = y[i.getID(va)];
        if (va && va.hidden)
            va.dirty = true;
    }
    function qa(ta, ua) {
        var va = false;
        ua.forEach(function(wa) {
            var xa = y[wa];
            if (xa && xa.hidden) {
                xa.dirty = true;
                va = true;
                if (xa.position >= ba) {
                    xa.hidden = false;
                    xa.pendingHide = false;
                    n.apply(xa.element, {
                        height: '',
                        marginBottom: ''
                    });
                    h.show(ma(xa));
                }
            }
        });
        va && ka();
    }
    function ra() {
        m.onLeave(fa);
        aa = new o();
        aa.addSubscriptions(g.subscribe(k.NAVIGATION_BEGIN, ga), g.subscribe('Entstream/StoryUpdated', pa), g.subscribe('ViewportSizeChange', ha), g.subscribe('LitestandStream/SubstreamsUpdated', qa), j.listen(window, 'scroll', u(oa)), j.listen(window, 'resize', u(function() {
            da = null;
            oa();
        })));
        z = true;
    }
    var sa = {
        attachSubstream: function(ta) {
            z || ra();
            y[i.getID(ta)] = {
                element: ta
            };
        }
    };
    e.exports = sa;
}, null);
__d("LitestandNewStoryController", ["Animation", "Arbiter", "AsyncRequest", "EntstreamStoryDeduper", "LitestandMessages", "LitestandStream", "Style", "$", "queryThenMutateDOM"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = 500, q = 600, r, s;
    function t() {
        s && clearTimeout(s);
        s = null;
    }
    function u() {
        s = setTimeout(function() {
            s = null;
            v();
        }, p);
    }
    function v() {
        var y;
        o(function() {
            y = l.canInsertNewerStories();
        }, function() {
            if (y) {
                w();
            } else 
                u();
        }, 'LitestandNewStoryController/tryShowingStories');
    }
    function w() {
        t();
        if (!r)
            return;
        j.dedupe(l.getStreamRoot(), l.getStoriesSelector());
        m.apply(r, {
            height: '',
            left: '',
            overflow: '',
            position: '',
            width: ''
        });
        new g(r).from('opacity', 0).to('opacity', 1).duration(q).go();
        h.inform(k.STORIES_INSERTED);
        h.inform(k.NEWER_STORIES_INSERTED);
        setTimeout(function() {
            h.inform('reflow');
        }, 0);
        new i().setURI('/ajax/litestand/update_filter_viewtime').setData({
            section_id: l.getSectionID()
        }).send();
        r = null;
    }
    var x = {
        waitForDisplay: function(y) {
            if (!r)
                r = n(y);
            if (l.canInsertNewerStories()) {
                w();
            } else 
                u();
        },
        showStoriesFromPill: function(y) {
            r = y;
            w();
        }
    };
    e.exports = x;
}, null);
__d("TrackingData", [], function(a, b, c, d, e, f) {
    var g = 'mei', h = 'ei', i = 'cmf', j = {
        hasAdToken: function(k) {
            var l = k.getAttribute('data-ft') ? JSON.parse(k.getAttribute('data-ft')): null;
            return l && (l[g] || l[h]);
        },
        setContinueMainFeed: function(k) {
            var l = k.getAttribute('data-ft') ? JSON.parse(k.getAttribute('data-ft')): null;
            if (l) {
                l[i] = 1;
                k.setAttribute('data-ft', JSON.stringify(l));
            }
        }
    };
    e.exports = j;
}, null);
__d("LitestandStreamLoader", ["Arbiter", "AsyncRequest", "CSS", "csx", "cx", "DOM", "DOMScroll", "Event", "FbFeedHighlight", "JSXDOM", "LitestandMessages", "LitestandNewStoryController", "LitestandOffscreenController", "LitestandStream", "NavigationMessage", "OnVisible", "Run", "throttle", "UIPagelet", "UserActivity", "EntstreamStoryDeduper", "$", "copyProperties", "ge", "getUnboundedScrollPosition", "Vector", "Parent", "TrackingData"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa, ga, ha) {
    var ia = false, ja = false, ka = {}, la, ma, na, oa, pa, qa, ra = 0, sa = false, ta, ua = null, va, wa = [], xa = false, ya = false, za, ab, bb = false, cb = true, db, eb = false, fb = false, gb = 1000, hb = null, ib = false, jb = 50, kb = 0, lb, mb;
    function nb() {
        w.onLeave(pb);
        wa = [g.subscribe(q.PILL_VISIBILITY_UPDATED, function(ic, jc) {
            sa = jc.pill_visibility;
        }), g.subscribe(q.NEW_STORIES_PILL_CLICKED, function() {
            r.showStoriesFromPill(mb);
        }), g.subscribe(u.NAVIGATION_BEGIN, pb), g.subscribe(q.NEWER_STORIES_INSERTED, function() {
            mb = null;
        }), g.subscribe(q.TOUR_BEGIN, function() {
            ia = true;
        }), g.subscribe(q.TOUR_END, function() {
            ia = false;
            tb();
        }), g.subscribe(q.UPDATE_STREAM, zb), g.subscribe(q.REFRESH_STREAM, zb), g.subscribe(q.UNREAD_ONLY_BEGIN, function(ic, jc) {
            ib = true;
            var kc = ob(), lc = l.scry(za, ".unseenStoriesHeader")[0], mc = [];
            if (lc && kc) {
                xa = true;
                var nc = l.scry(qa, t.getStoriesSelector()).slice(jc + 1), oc = nc.length, pc = nc.filter(function(zc) {
                    return i.hasClass(zc, "_50mx")&&!i.hasClass(zc, "_x72")&&!ha.hasAdToken(zc);
                }), qc = pc.length, rc = db.min_stories_to_skip;
                if (nc.length - pc.length < rc)
                    pc = pc.slice(0, nc.length - pc.length - rc);
                var sc = pc.length, tc =- 1, uc = {};
                if (db.move_skipped_unseen) {
                    var vc = p.div({
                        className: "moved_stories"
                    });
                    pc.forEach(function(zc) {
                        var ad = ga.byClass(zc, "_4ikz");
                        uc[l.getID(ad)] = 1;
                        l.appendContent(vc, zc);
                    });
                    g.inform('LitestandStream/SubstreamsUpdated', Object.keys(uc));
                    l.insertAfter(lc, vc);
                    tc = l.scry(za, ".moved_stories ._5jmm").length;
                }
                mc = l.scry(za, t.getStoriesSelector());
                l.insertBefore(kc, za);
                i.show(za);
                mc.forEach(function(zc) {
                    i.show(zc);
                    o.highlight(zc);
                });
                aa.dedupeHide(t.getStreamRoot(), t.getStoriesSelector(), bb);
                g.inform(q.STORIES_INSERTED);
                setTimeout(function() {
                    m.scrollTo(lc, 800, false, false, 10);
                }, 0);
                qb();
                var wc = mc[0], xc = JSON.parse(wc.getAttribute('data-ft')), yc = xc.qid;
                rb('load', {
                    all_unseen_stories: mc.length,
                    qid: yc,
                    main_feed_stories_skip: oc,
                    unseen_stories_skipped: qc,
                    unseen_stories_eligible_to_move: sc,
                    unseen_stories_moved: tc
                });
            } else {
                if (!lc)
                    rb('missed_stories_header_unavailable');
                if (!mc[0])
                    rb('missed_stories_unseen_stories_unavailable');
                if (!kc)
                    rb('missed_stories_more_pager_unavailable');
            }
        })];
        ja = true;
    }
    function ob() {
        if (ma.parentNode)
            return ma.parentNode;
        if (!qa)
            return;
        var ic = qa.children.length - 1;
        while (ic >= 0) {
            if (qa.children[ic].id.lastIndexOf('more_pager', 0) === 0)
                return qa.children[ic];
            ic--;
        }
        return;
    }
    function pb() {
        g.inform(q.LEAVE_HOME);
        ka = {};
        va = null;
        ra = 0;
        wa.forEach(g.unsubscribe);
        wa = [];
        la && la.remove();
        pa && clearTimeout(pa);
        pa = null;
        oa = null;
        mb = null;
        ta && ta.remove();
        ta = null;
        ja = false;
        kb = 0;
        ua && ua.remove();
        ua = null;
        xa = false;
        ya = false;
        fb = false;
        za = null;
        ab = null;
        bb = false;
        cb = true;
        db = null;
        eb = false;
        ib = false;
        hb = null;
    }
    function qb() {
        ka = {};
    }
    function rb(ic, jc) {
        var kc =- 1, lc =- 1, mc =- 1, nc = l.scry(qa, ".unread_session"), oc = 0, pc = 0, qc = null;
        for (var rc = 0; rc < nc.length; ++rc) {
            var sc = l.scry(nc[rc], t.getStoriesSelector());
            for (var tc = 0; tc < sc.length; ++tc) {
                var uc = sc[tc];
                if (!uc.getAttribute('data-dedupekey'))
                    continue;
                ++pc;
                if (i.shown(uc)) {
                    ++oc;
                    qc = uc;
                }
            }
        }
        lc = oc - 1;
        if (qc) {
            var vc = JSON.parse(qc.getAttribute('data-ft'));
            kc = vc.qid;
            mc = vc.mf_story_key;
        }
        var wc = {
            qid: kc,
            finish_pos: lc,
            storyid: mc,
            feed_stream_id: t.getFeedStreamID(),
            all_unseen_stories: pc,
            num_unseen_sessions: nc.length
        };
        jc = typeof jc !== 'undefined' ? jc : {};
        for (var xc in wc)
            if (typeof jc[xc] === 'undefined')
                jc[xc] = wc[xc];
        jc.action = ic;
        new h('/ajax/feed/pill/').setData(jc).send();
    }
    function sb() {
        if (pa)
            return;
        pa = setTimeout(function() {
            pa = null;
            ac();
        }, va.pollIntervalMS);
    }
    function tb() {
        if (va && oa && va.pollIntervalMS && va.pollIntervalMS > 1000)
            sb();
    }
    function ub() {
        la = new v(l.find(ma, 'a'), fc.bind(null), false, va.bufferPixels);
    }
    function vb() {
        var ic = ea(window).y;
        return ic > va.firstPagerScrollBuffer;
    }
    function wb() {
        if (vb()) {
            ub();
            ta && ta.remove();
            ta = null;
        }
    }
    function xb() {
        if (ib ||!hb)
            return;
        var ic = l.scry(qa, t.getStoriesSelector()), jc = ba('leftCol'), kc = fa.getElementPosition(jc).y + fa.getElementDimensions(jc).y, lc = 0;
        for (; lc < ic.length; lc++)
            if (!i.hasClass(ic[lc], "_2l4l") && ic[lc].getAttribute('data-ft'))
                break;
        while (lc < ic.length && fa.getElementPosition(ic[lc]).y < kc + jb)
            lc++;
        if (ic.length === lc)
            return;
        var mc = ic[lc], nc = hb.getElement();
        l.insertBefore(mc, nc);
        i.show(nc);
        hb.reflow();
        ib = true;
    }
    function yb(ic) {
        xb();
        var jc = l.find(ma, 'a');
        n.listen(jc, 'click', function(event) {
            fc();
            ta && ta.remove();
            ta = null;
            event.preventDefault();
        });
        var kc = t.getVisibleStoryCount(qa), lc = va.maxStories;
        if (lc && kc >= lc)
            return;
        if (ic&&!vb()) {
            ta = n.listen(window, 'scroll', x(wb));
        } else 
            ub();
    }
    function zb() {
        ac();
        g.inform(q.UPDATE_LAST_REFRESH_TIME);
    }
    function ac() {
        if (ia ||!oa)
            return;
        if (!z.isActive(va.newStoryIdleTime)) {
            z.subscribeOnce(ac);
            return;
        }
        if (!t.canInsertNewerStories()) {
            sb();
            return;
        }
        if (!mb) {
            var ic = t.getStreamRoot();
            mb = p.div({
                style: {
                    height: 0,
                    width: ic.offsetWidth + 'px',
                    left: '-10000px',
                    opacity: 0,
                    overflow: 'hidden',
                    position: 'absolute'
                }
            });
            l.prependContent(ic, mb);
        }
        if (!ua)
            ua = n.listen(window, 'scroll', function() {
                if (t.canInsertNewerStories() != sa)
                    g.inform(q.TOGGLE_PILL_VISIBILITY);
                });
        var jc = p.div(null);
        l.prependContent(mb, jc);
        var kc = va.crossPage ? {
            crossPage: true
        }
        : null;
        y.loadFromEndpoint('LitestandNewerStoriesPagelet', jc, ca(oa, {
            cursor: lb,
            containerID: l.getID(mb)
        }), kc);
        g.inform(q.PILL_CLEAR_COUNTER);
    }
    function bc() {
        var ic = l.getID(ma);
        i.addClass(ma, 'async_saving');
        var jc = dc();
        if (ka[jc])
            throw new Error('This cursor has been used before, stories will be ' + 'repeated. Cursor: ' + jc);
        ka[jc] = jc;
        var kc = {
            cursor: jc,
            preload_next_cursor: ab,
            pager_config: na,
            pager_id: ic,
            scroll_count: ++ra,
            start_unread_session: xa,
            start_continue_top_news_feed: ya,
            feed_stream_id: t.getFeedStreamID(),
            snapshot_time: db ? db.snapshot_time: null
        };
        xa = false;
        ya = false;
        y.loadFromEndpoint(va.pagerController, l.getID(qa), kc, {
            append: true,
            automatic: true,
            usePipe: true,
            crossPage: va.crossPage
        });
    }
    function cc() {
        return ec()[0].getAttribute('data-cursor');
    }
    function dc() {
        var ic = ec();
        ic = ic.filter(function(jc) {
            return !jc.getAttribute('data-preload_unseen_story');
        });
        return ic[ic.length - 1].getAttribute('data-cursor');
    }
    function ec() {
        var ic = l.scry(qa, t.getStoriesSelector());
        return ic.filter(function(jc) {
            return jc.getAttribute('data-cursor');
        });
    }
    function fc() {
        g.inform('FbFeedUnreadPillNavigation/startLoading');
        bc();
        la && la.remove();
        la = null;
    }
    function gc() {
        if (!za ||!ja)
            return [];
        var ic = l.scry(qa, t.getStoriesSelector()), jc = ic.filter(function(mc) {
            return mc.getAttribute('data-dedupekey')&&!i.hasClass(mc, "preloadUnseenStory");
        }), kc = {};
        for (var lc = 0; lc < jc.length; lc++)
            kc[jc[lc].getAttribute('data-dedupekey')] = 1;
        return l.scry(za, t.getStoriesSelector()).filter(function(mc) {
            var nc = mc.getAttribute('data-dedupekey'), oc = nc&&!kc[nc];
            kc[nc] = 1;
            return oc;
        });
    }
    var hc = {
        register: function(ic, jc, kc, lc, mc) {
            ja || nb();
            va = t.getStreamConfig(jc);
            xa = false;
            ya = false;
            fb = false;
            za = null;
            ab = null;
            bb = false;
            cb = true;
            db = null;
            eb = false;
            na = kc;
            qa = ba(ic);
            lb = cc();
            hb = mc;
            ib = false;
            ma = lc;
            yb(true);
            tb();
        },
        replacePagerConfig: function(ic) {
            na = ic;
        },
        continueTopNewsFeed: function() {
            ya = true;
            fb = true;
            qb();
            rb('finish');
        },
        removeOldPager: function(ic, jc) {
            if (ic)
                l.remove(ba(ic));
            i.show(ba(jc));
        },
        removeLoadingIndicator: function(ic, jc) {
            var kc = da(ic);
            if (kc)
                l.remove(kc);
            i.show(jc);
        },
        moreStoriesInserted: function(ic) {
            g.inform(q.STORIES_INSERTED, {
                substream_id: ic
            });
            var jc = ba(ic);
            if (fb)
                l.scry(jc, t.getStoriesSelector()).forEach(ha.setContinueMainFeed);
            if (t.hideOffscreenSubstreams())
                s.attachSubstream(jc);
        },
        attachNewPager: function(ic) {
            !eb && aa.dedupeHide(t.getStreamRoot(), t.getStoriesSelector(), bb);
            this.loadMoreUnseenStoriesIfNeeded();
            ma = ic;
            ma && yb(false);
        },
        setPollerData: function(ic) {
            if (ic) {
                oa = ic;
                tb();
            }
        },
        updatePollerCursor: function(ic) {
            lb = ic;
            tb();
        },
        headLoadCompleted: function(ic) {
            lb = ic.newCursor;
            tb();
            var jc = ic.stories;
            if (jc && jc.length > 0) {
                for (var kc = jc.length - 1; kc >= 0; kc--)
                    jc[kc].setAttribute('data-insertion-position', --kb);
                g.inform('Stream/totalHeadLoadedStories', - kb);
            }
        },
        registerPreloadUnseenStories: function(ic, jc, kc, lc) {
            za = ic;
            ab = jc;
            bb = kc;
            db = lc;
            if (lc)
                eb = lc.disable_deduper;
            hc.loadMoreUnseenStoriesIfNeeded();
        },
        morePreloadUnseenStories: function(ic, jc, kc) {
            ab = kc;
            if (ic > 0) {
                l.appendContent(za, jc);
                this.loadMoreUnseenStoriesIfNeeded();
            } else {
                g.inform('FbFeedUnreadPillLoader/removeLoadingPill');
                g.inform('FbFeedUnreadPillNavigation/removePill');
                cb = true;
                rb('not_enough_remove', {
                    all_unseen_stories: ic
                });
            }
        },
        setStopRecursiveUnseenLoad: function(ic) {
            cb = ic;
        },
        loadMoreUnseenStoriesIfNeeded: function() {
            if (!db || cb)
                return;
            var ic = gc();
            if (ic.length < db.min_num) {
                if (!za || db.disable_recursive) {
                    g.inform('FbFeedUnreadPillNavigation/removePill');
                    cb = true;
                    return;
                }
                y.loadFromEndpoint('LitestandUnseenStreamPagelet', za, {
                    unread_pill_config: db,
                    next_cursor: ab,
                    mode: 1
                }, {
                    append: true,
                    automatic: true,
                    usePipe: true,
                    crossPage: va.crossPage
                });
            } else {
                g.inform('FbFeedUnreadPillNavigation/enoughLoaded');
                if (db.disable_recursive)
                    cb = true;
            }
        },
        forceNewFetch: ac
    };
    e.exports = hc;
}, null);
__d("collectSubtreeData", [], function(a, b, c, d, e, f) {
    function g(i, j, k, l, m) {
        if (i.offsetWidth === 0 && i.offsetHeight === 0)
            return m;
        var n = {};
        if (i.getAttribute)
            for (r = 0; r < j.length; r++) {
                t = j[r];
                var o = i.getAttribute(k[t]);
                if (o) {
                    n[t] = {};
                    var p = JSON.parse(o);
                    for (var q in l)
                        if (p[q] !== undefined) {
                            n[t][q] = true;
                            if (m[t] === undefined)
                                m[t] = {};
                                if (m[t][q] === undefined)
                                    m[t][q] = [];
                                    if (l[q].length > 0)
                                        m[t][q].push(l[q]);
                                        m[t][q].push('(' + p[q]);
                        }
                }
            }
        for (var r = 0; r < i.childNodes.length; r++) {
            var s = i.childNodes[r];
            g(s, j, k, l, m);
        }
        for (var t in n)
            for (var u in n[t]) {
                var v = m[t][u][m[t][u].length - 1];
                if (v.length > 0 && v.charAt(0) == '(') {
                    m[t][u][m[t][u].length - 1] = v.substr(1);
                } else 
                    m[t][u].push(')');
            }
        return m;
    }
    function h(i, j) {
        var k = {};
        for (var l = 0; l < j.length; ++l)
            k[j[l]] = 'data-' + j[l];
        var m = {
            tn: "",
            "tn-debug": ","
        }, n = {};
        g(i, j, k, m, n);
        for (var o in n)
            for (var p in n[o])
                n[o][p] = n[o][p].join('');
        return n;
    }
    e.exports = h;
}, null);
__d("recordTNTreeData", ["collectSubtreeData"], function(a, b, c, d, e, f, g) {
    function h(i, j) {
        var k = {}, l = g(i, ['ft']);
        for (var m in l.ft) {
            k[m + '_tree'] = l.ft[m];
            if (m === 'tn-debug')
                i.setAttribute('tn-debug_subtree', l.ft[m]);
        }
        k.evt_value = i.offsetHeight;
        if (j)
            k.offset = Math.max(0, i.offsetTop - j.offsetTop);
        return k;
    }
    e.exports = h;
}, null);
__d("StoryTopicMap", [], function(a, b, c, d, e, f) {
    var g = {}, h = {
        registerTopics: function(i, j) {
            g[i] = j;
        },
        getTopicsForFTID: function(i) {
            return g[i] || [];
        }
    };
    e.exports = h;
}, null);
__d("XFeedAdsChainingControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/feed\/ads_chaining\/", {
        actor_id: {
            type: "String",
            required: true
        },
        ft_id: {
            type: "String"
        },
        origin: {
            type: "String",
            required: true
        },
        ei: {
            type: "String",
            required: true
        },
        data_ownerid: {
            type: "String",
            required: true
        }
    });
}, null);
__d("XPubcontentFeedChainingControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/pubcontent\/feed_chaining\/", {
        actor_id: {
            type: "String",
            required: true
        },
        content_id: {
            type: "String"
        },
        ft_id: {
            type: "String"
        },
        origin: {
            type: "String",
            required: true
        }
    });
}, null);
__d("XPubcontentRelatedShareChainingControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/pubcontent\/related_share\/", {
        attachment_div_id: {
            type: "String",
            required: true
        },
        global_share_id: {
            type: "Int",
            required: true
        },
        video_div_id: {
            type: "String"
        },
        link_url: {
            type: "String"
        },
        qid: {
            type: "String"
        },
        mf_story_key: {
            type: "String"
        },
        share_id: {
            type: "String"
        },
        is_auto_expand: {
            type: "Bool"
        }
    });
}, null);
__d("XPubcontentRelatedVideoChainingControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/pubcontent\/related_video\/", {
        attachment_div_id: {
            type: "String",
            required: true
        },
        fbvideo_id: {
            type: "Int"
        },
        qid: {
            type: "String"
        },
        mf_story_key: {
            type: "String"
        }
    });
}, null);
__d("XPubcontentTopicChainingControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/pubcontent\/topic_chaining\/", {
        pivotal_topic_ids: {
            type: "IntVector"
        }
    });
}, null);
__d("XPubcontentInlineStoryPivotChainingControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/pubcontent\/inline_story_pivot_chaining\/", {
        origin: {
            type: "String",
            required: true
        },
        storyid: {
            type: "String"
        },
        ftid: {
            type: "String"
        }
    });
}, null);
__d("XRelatedGamesChainingControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/games\/async\/related_games\/", {
        attachment_div_id: {
            type: "String",
            required: true
        },
        app_id: {
            type: "Int",
            required: true
        }
    });
}, null);
__d("PubcontentFeedChainingController", ["AggregatedLinkComposerConfig", "Arbiter", "AsyncRequest", "AttachmentRelatedShareConstants", "CSS", "csx", "cx", "DOM", "DOMQuery", "FeedAdsChainingConfig", "PageAdsAttachmentLinkShareConstants", "PageLikeButton", "PubcontentFeedChainingConfig", "PubcontentRelatedShareChainingConfig", "PubcontentTopicChainingConfig", "StoryInlinePivotChainingConfig", "StoryTopicMap", "UFIFeedbackTargets", "UFIUIEvents", "XFeedAdsChainingControllerURIBuilder", "XPubcontentFeedChainingControllerURIBuilder", "XPubcontentRelatedShareChainingControllerURIBuilder", "XPubcontentRelatedVideoChainingControllerURIBuilder", "XPubcontentTopicChainingControllerURIBuilder", "XPubcontentInlineStoryPivotChainingControllerURIBuilder", "XRelatedGamesChainingControllerURIBuilder"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba, ca, da, ea, fa) {
    var ga = 'ei', ha = 'ad_fan_page_action', ia = 'ad_like_page_post_action', ja = 'ad_share_attachment_click_action', ka = 'page_story_like_action', la = 'related_share_article_click', ma = 'related_share_video_click', na = 'page_share_like_action', oa = 'topic_story_like_action', pa = 'story_click_for_pivot_action', qa = 'story_like_pivot_action';
    function ra() {
        "use strict";
        this.$PubcontentFeedChainingController0 = s;
        this.$PubcontentFeedChainingController1 = p;
        this.$PubcontentFeedChainingController2 = t;
        this.$PubcontentFeedChainingController3 = u;
        this.$PubcontentFeedChainingController4 = v;
        this.$PubcontentFeedChainingController5 = {};
        h.subscribe(r.LIKED, this.$PubcontentFeedChainingController6.bind(this));
        h.subscribe(y.UFIActionLinkLike, this.$PubcontentFeedChainingController7.bind(this));
        h.subscribe(j.ARTICLE_CLICK, this.$PubcontentFeedChainingController8.bind(this));
        h.subscribe(j.VIDEO_CLICK, this.$PubcontentFeedChainingController9.bind(this));
        h.subscribe(j.FBVIDEO_CLICK, this.$PubcontentFeedChainingControllera.bind(this));
        h.subscribe(j.GAME_CLICK, this.$PubcontentFeedChainingControllerb.bind(this));
        h.subscribe(q.LINK_ATTACHMENT_CLICK, this.$PubcontentFeedChainingControllerc.bind(this));
        h.subscribe(j.PHOTO_CLICK, this.$PubcontentFeedChainingControllerd.bind(this));
        ra.instance = this;
    }
    ra.getAdClientTokenIndex = function() {
        "use strict";
        return ga;
    };
    ra.prototype.$PubcontentFeedChainingController6 = function(sa, ta) {
        "use strict";
        var ua = this.findAdClientToken(ta.target);
        if (ua) {
            this.$PubcontentFeedChainingControllere(ta.target, {
                origin: ha,
                actor_id: ta.profile_id,
                client_token: ua
            });
        } else 
            this.$PubcontentFeedChainingControllerf(ta.target, {
                origin: ta.origin,
                actor_id: ta.profile_id
            });
    };
    ra.prototype.$PubcontentFeedChainingController7 = function(sa, ta) {
        "use strict";
        if (!ta.ft_id)
            return;
        if (!this.$PubcontentFeedChainingControllerg(this.findStory(ta.target)))
            return;
        x.getFeedbackTarget(ta.ft_id, function(ua, va) {
            var wa = this.findAdClientToken(ua);
            if (wa && va.isshare) {
                this.$PubcontentFeedChainingControllere(ua, {
                    actor_id: va.actorid,
                    origin: ia,
                    ft_id: va.entidentifier,
                    client_token: wa
                });
            } else if (va.isownerpage) {
                this.$PubcontentFeedChainingControllerf(ua, {
                    actor_id: va.actorid,
                    content_id: va.entidentifier,
                    origin: ka
                });
            } else if (va.isshare) {
                this.$PubcontentFeedChainingControllerf(ua, {
                    actor_id: va.actorid,
                    ft_id: va.entidentifier,
                    origin: na
                });
            } else {
                var xa = w.getTopicsForFTID(va.entidentifier);
                if (xa && xa.length > 0) {
                    this.$PubcontentFeedChainingControllerh(ua, {
                        ft_id: va.entidentifier,
                        origin: oa,
                        pivotal_topic_ids: xa
                    });
                } else 
                    this.$PubcontentFeedChainingControlleri(ua, {
                        origin: qa,
                        ft_id: va.entidentifier
                    });
            }
        }.bind(this, ta.target));
    };
    ra.prototype.$PubcontentFeedChainingControlleri = function(sa, ta) {
        "use strict";
        var ua = this.$PubcontentFeedChainingControllerj(sa, ta);
        if (!ua)
            return false;
        var va = (new ea()).setString('origin', ta.origin);
        if (ta.story_id)
            va.setString('storyid', String(ta.story_id));
        if (ta.ft_id)
            va.setString('ftid', String(ta.ft_id));
        new i().setErrorHandler(this.$PubcontentFeedChainingControllerk.bind(this, ua.story.id)).setRelativeTo(ua.chainingWrapper).setURI(va.getURI()).setAllowCrossPageTransition(true).send();
        return true;
    };
    ra.prototype.$PubcontentFeedChainingControllerd = function(sa, ta) {
        "use strict";
        var ua = this;
        ua.$PubcontentFeedChainingControlleri(ta.attachment, {
            origin: pa,
            story_id: ta.storyid
        });
    };
    ra.prototype.$PubcontentFeedChainingController8 = function(sa, ta) {
        "use strict";
        if (g.no_chained_related_stories === 'true')
            return;
        ta.origin = la;
        var ua = this, va = this.findStory(ta.attachment), wa = o.scry(o.getRootElement(), '#initial_browse_result').length > 0;
        if (wa)
            return;
        var xa;
        if (ta.is_right_click) {
            xa = 0;
        } else 
            xa = j.EVENT_DELAY;
        setTimeout(function() {
            if (va) {
                var ya = ua.findAttachment(va);
                if (ya)
                    ta.attachment = ya;
            }
            ua.$PubcontentFeedChainingControllerl(ta.attachment, ta);
        }, xa);
    };
    ra.prototype.$PubcontentFeedChainingController9 = function(sa, ta) {
        "use strict";
        ta.origin = ma;
        var ua = this, va = this.findStory(ta.attachment);
        setTimeout(function() {
            if (va) {
                var wa = ua.findAttachment(va);
                if (wa)
                    ta.attachment = wa;
            }
            ua.$PubcontentFeedChainingControllerl(ta.attachment, ta);
        }, j.EVENT_DELAY);
    };
    ra.prototype.$PubcontentFeedChainingControllera = function(sa, ta) {
        "use strict";
        ta.origin = ma;
        var ua = this, va = this.findStory(ta.attachment);
        setTimeout(function() {
            if (va) {
                var wa = ua.findAttachment(va);
                if (wa)
                    ta.attachment = wa;
            }
            ua.$PubcontentFeedChainingControllerl(ta.attachment, ta);
        }, j.EVENT_DELAY);
    };
    ra.prototype.$PubcontentFeedChainingControllerb = function(sa, ta) {
        "use strict";
        var ua = this, va = this.findStory(ta.attachment);
        setTimeout(function() {
            if (va)
                var wa = ua.findContainer(va);
            ua.$PubcontentFeedChainingControllerm(va, ta.global_share_id, n.getID(wa));
        }, j.EVENT_DELAY);
    };
    ra.prototype.$PubcontentFeedChainingControllerc = function(sa, ta) {
        "use strict";
        var ua = this.findAdClientToken(ta.attachment);
        if (ua) {
            ta.origin = ja;
            ta.client_token = ua;
            this.$PubcontentFeedChainingControllere(ta.attachment, ta);
        }
    };
    ra.prototype.$PubcontentFeedChainingControllern = function(sa) {
        "use strict";
        return !!(sa && sa.id&&!k.hasClass(sa, "_sf6")&&!(sa.id in this.$PubcontentFeedChainingController5));
    };
    ra.prototype.$PubcontentFeedChainingControllero = function(sa) {
        "use strict";
        if (!sa)
            return false;
        if (sa.origin in this.$PubcontentFeedChainingController0 || sa.origin in this.$PubcontentFeedChainingController2 || sa.origin in this.$PubcontentFeedChainingController1 || sa.origin in this.$PubcontentFeedChainingController4) {
            return true;
        } else {
            var ta = this.$PubcontentFeedChainingController3[sa.origin];
            if (!ta ||!ta.rate)
                return false;
            var ua = Math.random();
            if (ua > ta.rate)
                return false;
            return true;
        }
    };
    ra.prototype.$PubcontentFeedChainingControllerp = function(sa) {
        "use strict";
        this.$PubcontentFeedChainingController5[sa] = true;
    };
    ra.prototype.$PubcontentFeedChainingControllerk = function(sa) {
        "use strict";
        delete this.$PubcontentFeedChainingController5[sa];
    };
    ra.prototype.$PubcontentFeedChainingControllerg = function(sa) {
        "use strict";
        if (!sa)
            return false;
        var ta = "_2bex", ua = sa.nextSibling, va = true;
        if (ua && ua.firstChild) {
            var wa = ua.firstChild;
            va=!(wa.hasChildNodes() && k.hasClass(wa, ta));
        }
        if (!va)
            return false;
        var xa = sa.children[0], ya = "_4_ck";
        if (k.hasClass(xa, ya))
            return false;
        return true;
    };
    ra.prototype.$PubcontentFeedChainingControllerj = function(sa, ta) {
        "use strict";
        var ua = this.findStory(sa);
        if (!this.$PubcontentFeedChainingControllern(ua))
            return null;
        if (!this.$PubcontentFeedChainingControllero(ta))
            return null;
        this.$PubcontentFeedChainingControllerp(ua.id);
        if (this.isSponsoredStory(ua))
            return null;
        var va;
        if (!ta.continued_chaining) {
            va = this.findContainer(ua);
            if (!va)
                return null;
            var wa = n.create('div'), xa = n.appendContent(va, wa);
            if (xa.length !== 1)
                return null;
        } else {
            va = ua;
            wa = n.create('div');
            xa = n.insertAfter(va, wa);
            n.remove(va);
            if (xa.length !== 1)
                return null;
        }
        if (ta.is_auto_expand) {
            return {
                chainingWrapper: xa[0],
                story: ua,
                is_auto_expand: ta.is_auto_expand
            };
        } else 
            return {
                chainingWrapper: xa[0],
                story: ua
            };
    };
    ra.prototype.$PubcontentFeedChainingControllere = function(sa, ta) {
        "use strict";
        var ua = this.$PubcontentFeedChainingControllerj(sa, ta);
        if (!ua)
            return false;
        var va = this.findStreamRoot(ua.story);
        if (!va)
            return false;
        var wa = va.getAttribute('id'), xa = (new z()).setString('actor_id', ta.actor_id).setString('origin', ta.origin).setString('ei', ta.client_token).setString('data_ownerid', wa);
        if (ta.ft_id)
            xa.setString('ft_id', ta.ft_id);
        new i().setErrorHandler(this.$PubcontentFeedChainingControllerk.bind(this, ua.story.id)).setRelativeTo(ua.chainingWrapper).setURI(xa.getURI()).send();
        return true;
    };
    ra.prototype.$PubcontentFeedChainingControllerl = function(sa, ta) {
        "use strict";
        if (!this.$PubcontentFeedChainingControllerg(this.findStory(sa)))
            return false;
        var ua = this.$PubcontentFeedChainingControllerj(sa, ta);
        if (!ua)
            return false;
        k.addClass(ua.chainingWrapper, "_2bex");
        var va = o.scry(sa, "^._5ss6");
        if (va.length > 0)
            k.addClass(ua.chainingWrapper, "_33mi");
        var wa = null;
        if (ta.fbvideo_id) {
            wa = new ca();
            wa.setInt('fbvideo_id', ta.fbvideo_id);
        } else {
            wa = new ba();
            wa.setInt('global_share_id', ta.global_share_id);
        }
        wa.setString('attachment_div_id', n.getID(ta.attachment));
        if (ta.link_url)
            wa.setString('link_url', ta.link_url);
        if (ta.video_div_id)
            wa.setString('video_div_id', ta.video_div_id);
        if (ta.share_id)
            wa.setString('share_id', ta.share_id);
        var xa = JSON.parse(ua.story.getAttribute('data-ft')) || {};
        if ('qid' in xa && 'mf_story_key' in xa) {
            wa.setString('qid', xa.qid);
            wa.setString('mf_story_key', xa.mf_story_key);
        }
        if (ta.is_auto_expand) {
            this.$PubcontentFeedChainingControllerk(ua.story.id);
            wa.setBool('is_auto_expand', ta.is_auto_expand);
        }
        var ya = new i().setErrorHandler(this.$PubcontentFeedChainingControllerk.bind(this, ua.story.id)).setRelativeTo(ua.chainingWrapper).setURI(wa.getURI());
        xa && ya.setData(xa);
        ya.send();
        return true;
    };
    ra.prototype.$PubcontentFeedChainingControllerm = function(sa, ta, ua) {
        "use strict";
        if (!this.$PubcontentFeedChainingControllern(sa))
            return;
        this.$PubcontentFeedChainingControllerp(sa.id);
        var va = (new fa()).setInt('app_id', ta).setString('attachment_div_id', ua);
        new i().setErrorHandler(this.$PubcontentFeedChainingControllerk.bind(this, sa.id)).setURI(va.getURI()).send();
        return true;
    };
    ra.prototype.$PubcontentFeedChainingControllerf = function(sa, ta) {
        "use strict";
        var ua = this.$PubcontentFeedChainingControllerj(sa, ta);
        if (!ua)
            return false;
        var va = (new aa()).setString('actor_id', ta.actor_id).setString('origin', ta.origin);
        if (ta.ft_id)
            va.setString('ft_id', ta.ft_id);
        if (ta.content_id)
            va.setString('content_id', ta.content_id);
        new i().setErrorHandler(this.$PubcontentFeedChainingControllerk.bind(this, ua.story.id)).setRelativeTo(ua.chainingWrapper).setURI(va.getURI()).send();
        return true;
    };
    ra.prototype.$PubcontentFeedChainingControllerh = function(sa, ta) {
        "use strict";
        var ua = this.$PubcontentFeedChainingControllerj(sa, ta);
        if (!ua)
            return false;
        var va = (new da()).setIntVector('pivotal_topic_ids', ta.pivotal_topic_ids).getURI();
        new i().setErrorHandler(this.$PubcontentFeedChainingControllerk.bind(this, ua.story.id)).setRelativeTo(ua.chainingWrapper).setURI(va).send();
        return true;
    };
    e.exports = ra;
}, null);
__d("PubcontentLitestandClassicChainingController", ["ContextualThing", "DOM", "PubcontentFeedChainingController", "csx"], function(a, b, c, d, e, f, g, h, i, j) {
    for (var k in i)
        if (i.hasOwnProperty(k))
            m[k] = i[k];
    var l = i === null ? null: i.prototype;
    m.prototype = Object.create(l);
    m.prototype.constructor = m;
    m.__superConstructor__ = i;
    function m() {
        "use strict";
        if (i !== null)
            i.apply(this, arguments);
    }
    m.prototype.findStory = function(n) {
        "use strict";
        var o = "^div._4-u2", p = h.scry(n, o);
        return p.length === 1 ? p[0] : null;
    };
    m.prototype.isSponsoredStory = function(n) {
        "use strict";
        var o = "._5paw";
        return h.scry(n, o).length > 0;
    };
    m.prototype.findAttachment = function(n) {
        "use strict";
        var o = "div._6m2", p = "div.iframeEmbed", q = h.scry(n, o)[0] || h.scry(n, p)[0];
        return q;
    };
    m.prototype.findContainer = function(n) {
        "use strict";
        var o = h.create('div'), p = h.insertAfter(n, o);
        g.register(o, n);
        return p.length >= 1 ? p[0] : null;
    };
    m.prototype.findStreamRoot = function(n) {
        "use strict";
        var o = "^div._4ikz";
        return h.scry(n, o)[0];
    };
    m.prototype.findAdClientToken = function(n) {
        "use strict";
        var o = this.findStory(n);
        if (!o)
            return null;
        var p = o.getAttribute('data-ft');
        if (!p)
            return null;
        var q = JSON.parse(p);
        return q[i.getAdClientTokenIndex()];
    };
    e.exports = m;
    new m();
}, null);
__d("FeedErrorDetection", ["Banzai", "DOM", "csx", "ge"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = 0, l = {}, m = false, n = false;
    function o(event, q, r, s) {
        var t = {
            event: event,
            shouldLogDetail: q,
            site: 'www'
        };
        if (q) {
            t.intValues = r;
            t.normalValues = s;
        }
        g.post('feed_error_detection', t, {
            delay: 0
        });
    }
    var p = {
        registerFeedStories: function(q, r) {
            if (q == 'substream_0') {
                k = 0;
                l = {};
                m = false;
                n = false;
            }
            var s = h.scry(j(q), "._5jmm"), t = s.length;
            if (!t&&!m) {
                if (!n) {
                    n = true;
                    return;
                }
                if (!k) {
                    o('empty_feed_js', r, {}, {});
                } else 
                    o('end_of_feed_js', r, r ? {
                        stories_count: k
                    } : {}, {});
                m = true;
                return;
            }
            n = false;
            for (var u = 0; u < t; u++) {
                var v = s[u], w = v.getAttribute('data-dedupekey'), x = v.getAttribute('data-ft');
                if (!w ||!x)
                    continue;
                if (w in l) {
                    var y = {};
                    if (r)
                        y = {
                            dedupKey: w,
                            ft_A: x,
                            ft_B: l[w]
                        };
                    o('duplicate_stories', r, {}, {
                        dup_field: y
                    });
                } else {
                    l[w] = x;
                    k++;
                }
            }
        }
    };
    e.exports = p;
}, null);
__d("StoryPositionTracking", ["DOM", "LitestandStream", "csx", "ge"], function(a, b, c, d, e, f, g, h, i, j) {
    var k = 0;
    function l(o, p) {
        var q = JSON.parse(o.getAttribute('data-ft'));
        q.insertion_position = p;
        o.setAttribute('data-ft', JSON.stringify(q));
    }
    function m(o) {
        return g.scry(o, "._5jmm");
    }
    var n = {
        registerNewStories: function(o) {
            if (o == 'substream_0')
                k = 0;
            var p = m(j(o)), q = p.length;
            for (var r = 0; r < q; r++)
                l(p[r], k++);
        },
        updateAllStories: function() {
            var o = m(h.getStreamRoot()), p = o.length;
            k = 0;
            for (var q = 0; q < p; q++)
                l(o[q], k++);
        }
    };
    e.exports = n;
}, null);
__d("StreamViewportTracking", ["DOM", "DOMDimensions", "ViewportTracking", "ge", "recordTNTreeData"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = 51;
    for (var m in i)
        if (i.hasOwnProperty(m))
            o[m] = i[m];
    var n = i === null ? null: i.prototype;
    o.prototype = Object.create(n);
    o.prototype.constructor = o;
    o.__superConstructor__ = i;
    function o() {
        "use strict";
        if (i !== null)
            i.apply(this, arguments);
    }
    o.prototype.init = function(p, q) {
        "use strict";
        if (q)
            this.$StreamViewportTracking0 = q;
        n.init.call(this, p);
        this.initSubscriptions();
    };
    o.prototype.initSubscriptions = function() {
        "use strict";
    };
    o.prototype.getDataFromConfig = function(p) {
        "use strict";
        this.isTimetrackingEnabled = 1;
        this.timeout = p.record_delay;
    };
    o.prototype.getTimeout = function() {
        "use strict";
        return this.timeout;
    };
    o.prototype.getStorySelector = function() {
        "use strict";
        return '.uiStreamStory';
    };
    o.prototype.getAllStories = function() {
        "use strict";
        var p = g.scry(this.getStream(), this.getStorySelector());
        return p.filter(function(q) {
            return q.getAttribute('data-ft');
        });
    };
    o.prototype.getStoryID = function(p) {
        "use strict";
        var q = JSON.parse(p.getAttribute('data-ft'));
        return q.mf_story_key;
    };
    o.prototype.getQueryID = function(p) {
        "use strict";
        var q = JSON.parse(p.getAttribute('data-ft'));
        return q.qid;
    };
    o.prototype.getFBFeedLocations = function(p) {
        "use strict";
        var q = JSON.parse(p.getAttribute('data-ft'));
        return q.fbfeed_location;
    };
    o.prototype.getFBFeedInsertionPosition = function(p) {
        "use strict";
        var q = JSON.parse(p.getAttribute('data-ft'));
        return q.insertion_position;
    };
    o.prototype.getDataToLog = function(p) {
        "use strict";
        var q = {}, r = this.getStream();
        q = k(p, r);
        var s = p.getAttribute('data-insertion-position');
        if (s !== null)
            q.inspos = s;
        q.evt = l;
        q.vpv_time = Math.round(Date.now() / 1000);
        var t = g.scry(p, ".fbStoryAttachmentImage")[0];
        if (t) {
            var u = h.getElementDimensions(t);
            q.story_image_height = u.height;
            q.story_image_width = u.width;
        }
        return {
            ft: q
        };
    };
    o.prototype.getStream = function() {
        "use strict";
        if (this.$StreamViewportTracking0)
            return this.$StreamViewportTracking0;
        return j('home_stream');
    };
    o.prototype.heartBeatIsEnabled = function() {
        "use strict";
        return true;
    };
    o.init = function(p, q) {
        "use strict";
        o.instance = new o();
        o.instance.init(p, q);
    };
    o.getInstance = function() {
        "use strict";
        return o.instance;
    };
    e.exports = o;
}, null);
__d("FbFeedAttachmentRelatedShare", ["Arbiter", "AttachmentRelatedShareConstants", "DOM", "Event", "tidyEvent", "csx"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = {
        loadRelatedAttachment: function(n, o) {
            k(j.listen(n, 'click', function() {
                g.inform(h.ARTICLE_CLICK, {
                    attachment: n,
                    global_share_id: o
                });
            }));
        },
        loadRelatedVideoAttachment: function(n, o) {
            k(j.listen(n, 'click', function() {
                g.inform(h.VIDEO_CLICK, {
                    attachment: n,
                    global_share_id: o
                });
            }));
        },
        loadRelatedGameAttachment: function(n, o) {
            k(j.listen(n, 'click', function() {
                g.inform(h.GAME_CLICK, {
                    attachment: n,
                    global_share_id: o
                });
            }));
        },
        loadRelatedAttachmentForStream: function(n) {
            var o = function(event, p) {
                var q = event.getTarget();
                if (q.getAttribute('target') !== '_blank')
                    return;
                var r = "^div._5pbx", s = "^div._5pc9", t = i.scry(q, r)[0] || i.scry(q, s)[0];
                if (!t)
                    return;
                g.inform(h.ARTICLE_CLICK, {
                    attachment: t,
                    global_share_id: 0,
                    link_url: q.getAttribute('href'),
                    is_right_click: p
                });
            };
            k(j.listen(n, 'click', function(event) {
                o(event, false);
            }));
            k(j.listen(n, 'mousedown', function(event) {
                if (event.which == 3 || event.button == 2)
                    o(event, true);
            }));
        },
        closeButton: function(n, o) {
            k(j.listen(n, 'click', function() {
                i.remove(o);
            }));
        }
    };
    e.exports = m;
}, null);
__d("FbFeedViewportTracking", ["Arbiter", "LitestandMessages", "LitestandStream", "StreamViewportTracking", "csx"], function(a, b, c, d, e, f, g, h, i, j, k) {
    for (var l in j)
        if (j.hasOwnProperty(l))
            n[l] = j[l];
    var m = j === null ? null: j.prototype;
    n.prototype = Object.create(m);
    n.prototype.constructor = n;
    n.__superConstructor__ = j;
    function n() {
        "use strict";
        if (j !== null)
            j.apply(this, arguments);
    }
    n.prototype.initSubscriptions = function() {
        "use strict";
        this.subscriptions.addSubscriptions(g.subscribe([h.STORIES_INSERTED], this.invalidateAllStoriesCache.bind(this)), g.subscribe(h.LEAVE_HOME, this.updateTimeTrackingData.bind(this, true)));
    };
    n.prototype.getStorySelector = function() {
        "use strict";
        return "._5jmm";
    };
    n.prototype.getStream = function() {
        "use strict";
        return i.getStreamRoot();
    };
    n.prototype.getSessionID = function() {
        "use strict";
        return i.getFeedStreamID();
    };
    n.init = function(o) {
        "use strict";
        new n().init(o);
    };
    e.exports = n;
}, null);
