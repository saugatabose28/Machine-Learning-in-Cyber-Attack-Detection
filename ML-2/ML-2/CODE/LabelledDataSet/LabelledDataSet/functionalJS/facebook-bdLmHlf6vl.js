/*!CK:4166113942!*/
/*1415600700,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["BEm1+"]);
}

__d("ContextualBlind", ["Event", "Animation", "Arbiter", "DOM", "Rect", "Vector", "$", "shield"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = null, p = [], q = null, r = null, s = false, t = .8, u = 500;
    function v(y, z) {
        z.getPositionVector().setElementPosition(y);
        z.getDimensionVector().setElementDimensions(y);
    }
    function w() {
        o && i.unsubscribe(o);
        o = null;
        p = [];
        q && q.remove();
        q = null;
        r && j.remove(r);
        s = false;
    }
    var x = {
        STYLE_LIGHT: 0,
        STYLE_DARK: 1,
        show: function(y, z, aa, ba, ca) {
            x.hide();
            ba = ba || t;
            ca = ca || x.STYLE_LIGHT;
            var da = (ca == x.STYLE_LIGHT) ? 'contextualBlind': 'contextualBlind contextualBlindDark';
            for (var ea = 0; ea < 4; ea++)
                p.push(j.create('div', {
                    className: da,
                    style: 'opacity:' + ba
                }));
            j.appendContent(document.body, p);
            if (aa !== false) {
                da = (ca == x.STYLE_LIGHT) ? 'contextualBlindContext' : 'contextualBlindContext contextualBlindContextDark';
                r = j.create('div', {
                    className: da
                });
                j.appendContent(document.body, r);
            }
            var fa = n(x.updatePosition, x, y, z);
            fa();
            o = i.subscribe('reflow', fa);
            q = g.listen(window, 'resize', fa);
            s = true;
        },
        fadeIn: function(y, z, aa, ba, ca) {
            var da = s;
            x.show(y, z, aa);
            if (da)
                return;
            t = ba !== undefined ? ba : t;
            u = ca !== undefined ? ca : u;
            for (var ea = 0; ea < p.length; ea++) {
                var fa = p[ea];
                new h(fa).duration(u).from('opacity', 0).to('opacity', t).go();
            }
        },
        hide: function() {
            p.forEach(j.remove);
            w();
        },
        fadeOut: function() {
            for (var y = 0; y < p.length; y++) {
                var z = p[y];
                new h(z).duration(u).from('opacity', t).to('opacity', 0).ondone(j.remove.bind(null, z)).go();
            }
            w();
        },
        updatePosition: function(y, z) {
            var aa = l.getDocumentDimensions().y, ba = k.getElementBounds(m(y));
            if (z)
                ba = new k(ba.t - z, ba.r + z, ba.b + z, ba.l - z, ba.domain);
            var ca = document, da = (ca && ca.documentElement && ca.documentElement.scrollWidth) || (ca && ca.body && ca.body.scrollWidth) || 0;
            v(p[0], new k(0, da, ba.t, 0, 'document'));
            v(p[1], new k(ba.t, da, ba.b, ba.r, 'document'));
            v(p[2], new k(ba.b, da, aa, 0, 'document'));
            v(p[3], new k(ba.t, ba.l, ba.b, 0, 'document'));
            if (r)
                v(r, ba);
        }
    };
    e.exports = a.ContextualBlind || x;
}, null);
__d("ContextualLayerBlind", ["ContextualBlind", "cx", "CSS"], function(a, b, c, d, e, f, g, h, i) {
    var j = 8, k = .3, l = false, m = g.STYLE_DARK;
    function n(o) {
        "use strict";
        this._layer = o;
    }
    n.prototype.enable = function() {
        "use strict";
        this._subscriptions = [this._layer.subscribe(['show', 'reposition'], this._onShow.bind(this)), this._layer.subscribe('hide', this._onHide.bind(this))];
        i.addClass(this._layer.getRoot(), "_4746");
    };
    n.prototype.disable = function() {
        "use strict";
        this._onHide();
        i.removeClass(this._layer.getRoot(), "_4746");
        while (this._subscriptions.length)
            this._subscriptions.pop().unsubscribe();
        this._subscriptions = null;
    };
    n.prototype._onShow = function() {
        "use strict";
        if (this._layer.isShown()) {
            var o = this._layer.getContext();
            g.show(o, j, l, k, m);
        }
    };
    n.prototype._onHide = function() {
        "use strict";
        g.hide();
    };
    e.exports = n;
}, null);
__d("XUIDialogFooter.react", ["LeftRight.react", "React", "XUIOverlayFooter.react", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = h.PropTypes, m = h.createClass({
        displayName: "XUIDialogFooter",
        propTypes: {
            leftContent: l.object
        },
        render: function() {
            return (h.createElement(i, h.__spread({}, this.props, {
                className: k(this.props.className, "_5a8u")
            }), h.createElement("div", {
                className: "_50f4"
            }, h.createElement(g, null, h.createElement("div", null, this.props.leftContent), h.createElement("div", null, this.props.children)))));
        }
    });
    e.exports = m;
}, null);
__d("XUIDialogButton.react", ["ReactPropTypes", "React", "XUIButton.react", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = h.createClass({
        displayName: "XUIDialogButton",
        propTypes: {
            action: g.oneOf(['cancel', 'confirm', 'button'])
        },
        render: function() {
            var m = this.props.action, n = ((m == 'confirm' ? "layerConfirm" : '') + (m == 'cancel' ? ' ' + "layerCancel" : '') + (m == 'button' ? ' ' + "layerButton" : '')), o = this.props.href;
            if (m == 'cancel') {
                o = '#';
            } else if (m == 'button')
                o = o || '#';
            return (h.createElement(i, h.__spread({}, this.props, {
                className: k(this.props.className, n),
                href: o
            })));
        }
    });
    e.exports = l;
}, null);
__d("XUIDialogOkayButton.react", ["ReactPropTypes", "React", "XUIDialogButton.react", "cx", "tx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    var m = h.createClass({
        displayName: "XUIDialogOkayButton",
        propTypes: {
            action: g.oneOf(['confirm', 'cancel', 'button']).isRequired
        },
        render: function() {
            return (h.createElement(i, h.__spread({}, this.props, {
                className: l(this.props.className, "_2z1w"),
                action: this.props.action,
                label: "OK"
            })));
        }
    });
    e.exports = m;
}, null);
__d("ReactSelectorUtils", ["ReactChildren"], function(a, b, c, d, e, f, g) {
    var h = {
        processAndMutateMenuItems: function(i, j) {
            var k;
            g.forEach(i, function(l) {
                if (l) {
                    var m = l.props.value === j;
                    l.props.selected = m;
                    if (m)
                        k = l;
                }
            });
            return k;
        },
        processAndMutateMultiMenuItems: function(i, j) {
            var k = [];
            if (j)
                g.forEach(i, function(l) {
                    if (l) {
                        var m = j.some(function(n) {
                            return n === l.props.value;
                        });
                        l.props.selected = m;
                        if (m)
                            k.push(l);
                    }
                });
            return k;
        }
    };
    e.exports = h;
}, null);
__d("PopoverMenuContextMinWidth", ["CSS", "Style", "copyProperties", "cx", "shield"], function(a, b, c, d, e, f, g, h, i, j, k) {
    function l(m) {
        "use strict";
        this._popoverMenu = m;
        this._popover = m.getPopover();
    }
    l.prototype.enable = function() {
        "use strict";
        this._setMenuSubscription = this._popoverMenu.subscribe('setMenu', k(this._onSetMenu, this));
    };
    l.prototype.disable = function() {
        "use strict";
        this._setMenuSubscription.unsubscribe();
        this._setMenuSubscription = null;
        if (this._showSubscription) {
            this._showSubscription.unsubscribe();
            this._showSubscription = null;
        }
        if (this._menuSubscription) {
            this._menuSubscription.unsubscribe();
            this._menuSubscription = null;
        }
    };
    l.prototype._onSetMenu = function() {
        "use strict";
        this._menu = this._popoverMenu.getMenu();
        this._showSubscription = this._popover.subscribe('show', k(this._updateWidth, this));
        var m = this._updateWidth.bind(this);
        this._menuSubscription = this._menu.subscribe(['change', 'resize'], function() {
            setTimeout(m, 0);
        });
        this._updateWidth();
    };
    l.prototype._updateWidth = function() {
        "use strict";
        var m = this._menu.getRoot(), n = this._popoverMenu.getTriggerElem(), o = n.offsetWidth;
        h.set(m, 'min-width', o + 'px');
        g.conditionClass(m, "_575s", o >= m.offsetWidth);
    };
    i(l.prototype, {
        _setMenuSubscription: null,
        _showSubscription: null,
        _menuSubscription: null
    });
    e.exports = l;
}, null);
__d("PopoverMenuOverlappingBorder", ["CSS", "DOM", "Style", "copyProperties", "cx", "shield"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    function m(n) {
        "use strict";
        this._popoverMenu = n;
        this._popover = n.getPopover();
        this._triggerElem = n.getTriggerElem();
    }
    m.prototype.enable = function() {
        "use strict";
        this._setMenuSubscription = this._popoverMenu.subscribe('setMenu', l(this._onSetMenu, this));
    };
    m.prototype.disable = function() {
        "use strict";
        this._popoverMenu.unsubscribe(this._setMenuSubscription);
        this._setMenuSubscription = null;
        this._removeBorderSubscriptions();
        this._removeShortBorder();
    };
    m.prototype._onSetMenu = function() {
        "use strict";
        this._removeBorderSubscriptions();
        this._menu = this._popoverMenu.getMenu();
        this._renderShortBorder(this._menu.getRoot());
        this._showSubscription = this._popover.subscribe('show', l(this._updateBorder, this));
        var n = this._updateBorder.bind(this);
        this._menuSubscription = this._menu.subscribe(['change', 'resize'], function() {
            setTimeout(n, 0);
        });
        this._updateBorder();
    };
    m.prototype._updateBorder = function() {
        "use strict";
        var n = this._menu.getRoot(), o = this._triggerElem.offsetWidth, p = Math.max(n.offsetWidth - o, 0);
        i.set(this._shortBorder, 'width', p + 'px');
    };
    m.prototype._renderShortBorder = function(n) {
        "use strict";
        this._shortBorder = h.create('div', {
            className: "_54hx"
        });
        h.appendContent(n, this._shortBorder);
        g.addClass(n, "_54hy");
    };
    m.prototype._removeShortBorder = function() {
        "use strict";
        if (this._shortBorder) {
            h.remove(this._shortBorder);
            this._shortBorder = null;
            g.removeClass(this._popoverMenu.getMenu().getRoot(), "_54hy");
        }
    };
    m.prototype._removeBorderSubscriptions = function() {
        "use strict";
        if (this._showSubscription) {
            this._popover.unsubscribe(this._showSubscription);
            this._showSubscription = null;
        }
        if (this._menuSubscription) {
            this._menu.unsubscribe(this._menuSubscription);
            this._menuSubscription = null;
        }
    };
    j(m.prototype, {
        _shortBorder: null,
        _setMenuSubscription: null,
        _showSubscription: null,
        _menuSubscription: null
    });
    e.exports = m;
}, null);
__d("AbstractSelector.react", ["InlineBlock.react", "React", "PopoverMenu.react", "ReactPropTypes", "ReactSelectorUtils", "ContextualLayerAutoFlip", "PopoverMenuContextMinWidth", "PopoverMenuOverlappingBorder", "cloneWithProps", "cx", "invariant", "joinClasses", "intlList"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
    var t = h.createClass({
        displayName: "AbstractSelector",
        propTypes: {
            config: j.object.isRequired,
            alignh: j.oneOf(['left', 'center', 'right']),
            name: j.string,
            overlappingborder: j.bool,
            onChange: j.func,
            disabled: j.bool,
            maxheight: j.number,
            multiple: j.bool,
            defaultLabel: j.string
        },
        getInitialState: function() {
            return {
                value: (this.props.value != null ? this.props.value : this.props.defaultValue != null ? this.props.defaultValue : this.props.initialValue)
            };
        },
        setMenuValue: function(u) {
            q(this.refs && this.refs.popover);
            this._internalChange = true;
            this.refs.popover.getMenu().setValue(u);
            this._internalChange = false;
        },
        onChange: function(u, v) {
            if (this._internalChange)
                return;
            if (this.props.value == null) {
                var w = null;
                if (this.props.multiple) {
                    w = v.map(function(x) {
                        return x.value;
                    });
                } else 
                    w = v.value;
                this.setState({
                    value: w
                });
            } else 
                this.setMenuValue(this.props.value);
            if (this.props.onChange)
                this.props.onChange(v);
        },
        componentWillReceiveProps: function(u) {
            if (u.value != null)
                this.setState({
                    value: u.value
                });
        },
        render: function() {
            var u = this.props.config, v = o(u.menu, {
                children: this.props.children,
                className: r("_575t", u.menu.props.className),
                maxheight: this.props.maxheight,
                onChange: this.onChange
            }), w=!this.props.multiple ? k.processAndMutateMenuItems(this.props.children, this.state.value) : k.processAndMutateMultiMenuItems(this.props.children, this.state.value), x = '', y = null;
            if (!this.props.multiple) {
                x = w.props.label || w.props.children;
                if (w.props.icon)
                    y = o(w.props.icon, {});
            } else if (!w.length) {
                x = this.props.defaultLabel;
            } else 
                x = s(w.map(function(ga) {
                    return ga.props.children;
                }), s.CONJUNCTIONS.NONE);
            var z = {
                label: x,
                disabled: this.props.disabled
            };
            if (y)
                z.image = y;
            var aa = o(u.button, z), ba = [l];
            if (u.layerBehaviors)
                ba = ba.concat(u.layerBehaviors);
            var ca = [m];
            if (this.props.overlappingborder)
                ca.push(n);
            var da = null;
            if (this.props.multiple) {
                var ea = this.props.name + '[]';
                if (this.state.value)
                    var fa = this.state.value.map(function(ga) {
                        return h.createElement("input", {
                            type: "hidden",
                            name: ea,
                            value: ga
                        });
                    });
                da = h.createElement("div", null, fa);
            } else 
                da = h.createElement("input", {
                    type: "hidden",
                    name: this.props.name,
                    value: this.state.value
                });
            return (h.createElement(g, h.__spread({}, this.props, {
                alignv: "middle",
                name: null
            }), h.createElement(i, {
                ref: "popover",
                menu: v,
                alignh: this.props.alignh,
                layerBehaviors: ba,
                behaviors: ca,
                disabled: this.props.disabled
            }, aa), da));
        },
        showMenu: function() {
            q(this.isMounted());
            this.refs.popover.showPopover();
        },
        hideMenu: function() {
            q(this.isMounted());
            this.refs.popover.hidePopover();
        },
        warnIfDefaultValueIsNotArray: function() {
            this.props.multiple && this.props.defaultValue&&!Array.isArray(this.props.defaultValue);
        }
    });
    e.exports = t;
}, null);
__d("ContextualLayerPositionClassOnContext", ["CSS", "copyProperties", "cx"], function(a, b, c, d, e, f, g, h, i) {
    function j(l) {
        "use strict";
        this._layer = l;
    }
    j.prototype.enable = function() {
        "use strict";
        this._subscription = this._layer.subscribe('reposition', this._updateClassName.bind(this));
        if (this._layer.isShown())
            this._updateClassName();
    };
    j.prototype.disable = function() {
        "use strict";
        this._subscription.unsubscribe();
        this._subscription = null;
        if (this._prevClassName) {
            g.removeClass(this._layer.getContext(), this._prevClassName);
            this._prevClassName = null;
        }
    };
    j.prototype._updateClassName = function(l, m) {
        "use strict";
        var n = this._layer.getContext(), o = k(m);
        if (this._prevClassName) {
            if (this._prevClassName === o)
                return;
            g.removeClass(n, this._prevClassName);
        }
        g.addClass(n, o);
        this._prevClassName = o;
    };
    function k(l) {
        var m = l.getAlignment(), n = l.getPosition();
        if (n === 'below') {
            if (m === 'left') {
                return "_nk";
            } else if (m === 'right') {
                return "_nl";
            } else 
                return "_nm";
        } else if (n === 'above') {
            if (m === 'left') {
                return "_nn";
            } else if (m === 'right') {
                return "_no";
            } else 
                return "_np";
        } else if (n === 'left') {
            return "_nq";
        } else 
            return "_nr";
    }
    h(j.prototype, {
        _subscription: null,
        _prevClassName: null
    });
    e.exports = j;
}, null);
__d("AbstractPopoverButton.react", ["ReactPropTypes", "React", "URI", "cloneWithProps", "cx", "joinClasses", "merge"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = h.createClass({
        displayName: "AbstractPopoverButton",
        propTypes: {
            config: g.object.isRequired,
            haschevron: g.bool,
            maxwidth: g.number
        },
        getDefaultProps: function() {
            return {
                haschevron: true
            };
        },
        render: function() {
            var o = this.props.config, p = {}, q = o.defaultMaxWidth;
            if (typeof this.props.maxwidth !== 'undefined')
                q = this.props.maxwidth;
            var r = null;
            if (q) {
                var s = this.props.haschevron ? q - o.chevronWidth: q;
                if (this.props.label)
                    r = {
                        maxWidth: s + 'px'
                    };
                p.style = m(p.style, {
                    maxWidth: q + 'px'
                });
            }
            p.image = null;
            var t = null;
            if (this.props.image)
                t = j(this.props.image, {
                    className: 'mrs'
                });
            if (t || this.props.label)
                p.label = h.createElement("span", {
                    className: "_55pe",
                    style: r
                }, t, this.props.label);
            if (this.props.haschevron)
                p.imageRight = o.chevron;
            p.className = l(o.button.props.className, "_2agf");
            p.href = i('#');
            return j(o.button, p);
        }
    });
    e.exports = n;
}, null);
__d("XUIPopoverButton.react", ["AbstractPopoverButton.react", "Image.react", "React", "XUIButton.react", "cx", "ix", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = i.PropTypes, o = i.createClass({
        displayName: "ReactXUIPopoverButton",
        propTypes: {
            haschevron: n.bool,
            maxwidth: n.number
        },
        statics: {
            getButtonSize: function(p) {
                return p.size || 'medium';
            }
        },
        render: function() {
            var p = o.getButtonSize(this.props), q = "_55pi";
            if (this.props.theme === 'dark')
                q = m(q, (("_5vto") + (p === 'small' ? ' ' + "_55_o" : '') + (p === 'medium' ? ' ' + "_55_p" : '') + (p === 'large' ? ' ' + "_55_q" : '') + (p === 'xlarge' ? ' ' + "_55_r" : '') + (p === 'xxlarge' ? ' ' + "_55_s" : '')));
            var r = this.props.chevron;
            if (!r) {
                var s = this.props.theme === 'dark' ? l('/images/ui/x/button/dark/chevron.png'): l('/images/ui/x/button/normal/chevron.png');
                r = i.createElement(h, {
                    src: s
                });
            }
            var t = {
                button: i.createElement(j, i.__spread({}, this.props, {
                    className: m(this.props.className, q),
                    size: p
                })),
                chevron: r,
                chevronWidth: 14,
                defaultMaxWidth: this.props.maxwidth || 200
            };
            return (i.createElement(g, {
                config: t,
                haschevron: this.props.haschevron,
                image: this.props.image,
                label: this.props.label,
                maxwidth: this.props.maxwidth
            }));
        }
    });
    e.exports = o;
}, null);
__d("XUISelectorButton.react", ["React", "XUIPopoverButton.react", "invariant"], function(a, b, c, d, e, f, g, h, i) {
    var j = g.createClass({
        displayName: "XUISelectorButton",
        render: function() {
            i(!this.props.theme);
            return (g.createElement(h, g.__spread({}, this.props, {
                theme: "dark"
            })));
        }
    });
    e.exports = j;
}, null);
__d("XUISelector.react", ["AbstractSelector.react", "ContextualLayerPositionClassOnContext", "React", "ReactChildren", "ReactXUIMenu", "XUISelectorButton.react", "invariant"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    var n = k.SelectableMenu, o = k.SelectableItem, p = i.createClass({
        displayName: "ReactXUISelector",
        statics: {
            getButtonSize: function(q) {
                return q.size || 'medium';
            }
        },
        getDefaultProps: function() {
            return {
                haschevron: true,
                multiple: false
            };
        },
        render: function() {
            var q, r = [];
            j.forEach(this.props.children, function(t) {
                if (t)
                    r.push(t);
            });
            if (r[0] && r[0].type === l.type) {
                q = r[0];
                r = r.slice(1);
            } else 
                q = i.createElement(l, {
                    haschevron: this.props.haschevron,
                    disabled: this.props.disabled,
                    use: this.props.use,
                    size: this.props.size,
                    suppressed: this.props.suppressed,
                    maxwidth: this.props.maxwidth
                });
            var s = {
                button: q,
                menu: i.createElement(n, {
                    maxheight: this.props.maxheight,
                    multiple: this.props.multiple
                }),
                layerBehaviors: [h]
            };
            return (i.createElement(g, i.__spread({}, this.props, {
                ref: "abstractSelector",
                config: s
            }), r));
        },
        showMenu: function() {
            m(this.isMounted());
            this.refs.abstractSelector.showMenu();
        },
        hideMenu: function() {
            m(this.isMounted());
            this.refs.abstractSelector.hideMenu();
        }
    });
    p.Option = o;
    e.exports = p;
}, null);
__d("ActorSelector.react", ["ContextualLayerBlind", "CurrentUser", "DOMScroll", "Event", "Image.react", "LayerFadeOnHide", "LayerFadeOnShow", "PageTransitions", "React", "ReactLayeredComponentMixin", "ShortProfiles", "Tooltip", "XUIContextualDialog.react", "XUIDialogBody.react", "XUIDialogFooter.react", "XUIDialogOkayButton.react", "XUISelector.react", "XUISpinner.react", "cx", "ix", "fbt", "tidyEvent"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ba) {
    var ca = w.Option, da = 32, ea = 195, fa = 500, ga = 175, ha = 16, ia = o.createClass({
        displayName: "ActorSelector",
        mixins: [p],
        propTypes: {
            actorIDs: o.PropTypes.array.isRequired,
            covered: o.PropTypes.bool,
            loading: o.PropTypes.bool,
            nuxBody: o.PropTypes.node,
            nuxEnabledCovered: o.PropTypes.bool,
            nuxEnabledUncovered: o.PropTypes.bool,
            nuxHoverContext: o.PropTypes.object,
            onChange: o.PropTypes.func.isRequired,
            onCompleteNux: o.PropTypes.func,
            selectedActorID: o.PropTypes.string,
            settingsURI: o.PropTypes.string,
            showName: o.PropTypes.bool,
            showNameMaxWidth: o.PropTypes.number,
            suppressed: o.PropTypes.bool,
            tooltipConstructor: o.PropTypes.func,
            tooltipConstructorCovered: o.PropTypes.func
        },
        getDefaultProps: function() {
            return {
                suppressed: true
            };
        },
        getInitialState: function() {
            return {
                actorData: {},
                clicked: false,
                nuxShown: false
            };
        },
        componentWillMount: function() {
            this._fetchActorData();
        },
        render: function() {
            if (!this.props.selectedActorID ||!this.state.actorData[this.props.selectedActorID])
                return o.createElement("div", null);
            var ja = this._isCovered(), ka = this.props.actorIDs.map(function(la) {
                var ma = this.state.actorData[la];
                if (!ma)
                    return;
                var na = o.createElement(k, {
                    className: "_6vg",
                    height: ha,
                    src: ja && h.getID() === la ? z('images/pages/voice/flag.png'): ma.thumbSrc,
                    width: ha
                });
                return (o.createElement(ca, {
                    icon: na,
                    value: la
                }, ma.name));
            }.bind(this));
            if (ka.length < 1)
                return o.createElement("div", null);
            return (o.createElement("span", {
                className: "_6vh"
            }, o.createElement(x, {
                className: ((!this.props.loading ? "hidden_elem" : '') + (!this.props.suppressed ? ' ' + "_3-8_" : ''))
            }), o.createElement(w, {
                haschevron: !ja,
                className: "_6vi",
                disabled: this.props.loading,
                maxheight: ea,
                maxwidth: ja ? ha: this.props.showName ? this.props.showNameMaxWidth: da,
                onChange: this.props.onChange,
                onClick: this._onClickSelector,
                ref: "selector",
                suppressed: this.props.suppressed,
                value: this.props.selectedActorID
            }, ka)));
        },
        renderLayers: function() {
            if (!this.refs.selector)
                return null;
            var ja = null;
            if (this.props.settingsURI)
                ja = o.createElement("a", {
                    onClick: this._onClickSettings,
                    style: {
                        verticalAlign: 'middle'
                    }
                }, "Post Attribution Settings");
            if (this.state.nuxShown)
                i.ensureVisible(this.refs.selector.getDOMNode(), null, ga);
            return {
                nux: o.createElement(s, {
                    alignment: "right",
                    behaviors: {
                        ContextualLayerBlind: g,
                        LayerFadeOnHide: l,
                        LayerFadeOnShow: m
                    },
                    hasActionableContext: true,
                    contextRef: "selector",
                    position: "below",
                    shown: this.state.nuxShown,
                    width: s.WIDTH.NORMAL
                }, o.createElement(t, null, this.props.nuxBody), o.createElement(u, {
                    leftContent: ja
                }, o.createElement(v, {
                    action: "button",
                    use: "confirm",
                    onClick: this._onCompleteNux
                })))
            };
        },
        componentDidMount: function() {
            this._setTooltip();
            if (this._canShowNux())
                if (this.props.nuxHoverContext) {
                    var ja = ba(j.listen(this.props.nuxHoverContext, 'mouseenter', function() {
                        var ka = setTimeout(function() {
                            ja.remove();
                            if (this._canShowNux())
                                this.setState({
                                    nuxShown: true
                                });
                            }.bind(this), fa), la = ba(j.listen(this.props.nuxHoverContext, 'mouseleave', function() {
                                clearTimeout(ka);
                                la.remove();
                            }));
                        }.bind(this)));
                } else 
                    this.setState({
                        nuxShown: true
                    });
        },
        componentDidUpdate: function(ja) {
            if (this.props.actorIDs.toString() !== ja.actorIDs.toString())
                this._fetchActorData();
            this._setTooltip();
        },
        _canShowNux: function() {
            return (this.props.nuxEnabledCovered && this._isCovered()) || (this.props.nuxEnabledUncovered&&!this._isCovered());
        },
        _fetchActorData: function() {
            q.getMulti(this.props.actorIDs, function(ja) {
                this.setState({
                    actorData: ja
                });
            }.bind(this));
        },
        _isCovered: function() {
            return (this.props.coverEnabled&&!this.state.clicked && h.getID() === this.props.selectedActorID);
        },
        _onClickSelector: function() {
            this.setState({
                clicked: true
            });
            if (this.state.nuxShown)
                this._onCompleteNux();
        },
        _onClickSettings: function() {
            this._onCompleteNux();
            n.go(this.props.settingsURI);
        },
        _onCompleteNux: function() {
            this.setState({
                nuxShown: false
            });
            if (this.props.onCompleteNux)
                this.props.onCompleteNux({
                    isCovered: this._isCovered()
                });
        },
        _setTooltip: function() {
            if (!this.refs.selector)
                return;
            var ja = this.state.actorData[this.props.selectedActorID];
            if (!ja)
                return;
            var ka = this._isCovered() && this.props.tooltipConstructorCovered ? this.props.tooltipConstructorCovered: this.props.tooltipConstructor;
            if (!ka)
                return;
            r.set(this.refs.selector.getDOMNode(), ka(ja.name), 'above', 'right');
        }
    });
    e.exports = ia;
}, null);
__d("GroupMentionsTypeaheadView.react", ["Image.react", "MentionsTypeaheadViewItem.react", "React", "cx", "extendArray", "fbt", "ix", "uniqueID"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = i.PropTypes, p = "No Results", q = i.createClass({
        displayName: "GroupMentionsTypeaheadView",
        propTypes: {
            id: o.string,
            viewProps: o.object,
            highlightedEntry: o.object,
            entries: o.array.isRequired,
            onSelect: o.func.isRequired,
            onHighlight: o.func,
            onRenderHighlight: o.func
        },
        getInitialState: function() {
            return {
                membersHeaderID: n(),
                nonMembersHeaderID: n()
            };
        },
        _renderItem: function(r, s) {
            var t = r === this.props.highlightedEntry;
            return (i.createElement(h, {
                key: r.getUniqueID(),
                ariaDescribedBy: s,
                entry: r,
                highlighted: t,
                onSelect: this.props.onSelect,
                onHighlight: this.props.onHighlight,
                onRenderHighlight: this._onRenderHighlight
            }));
        },
        _renderMembers: function(r) {
            var s = null;
            if (r.length) {
                s = r.map(function(v, w) {
                    var x = w === 0 ? this.state.membersHeaderID: null;
                    return this._renderItem(v, x);
                }.bind(this));
            } else 
                s = [i.createElement("li", {
                    className: "_2ph-",
                    role: "option",
                    "aria-describedby": this.state.membersHeaderID,
                    "aria-label": p
                }, p)];
            var t = null;
            if (this.props.viewProps.member.aux)
                t = i.createElement("span", {
                    className: "_1knr"
                }, ' \u00b7 ', this.props.viewProps.member.aux);
            var u = [i.createElement("li", {
                id: this.state.membersHeaderID,
                className: "_1kns"
            }, this.props.viewProps.member.title, t)];
            return k(u, s);
        },
        _renderNonMembers: function(r) {
            if (!r.length)
                return null;
            var s = null;
            if (this.props.viewProps.nonMember.aux)
                s = i.createElement("span", {
                    className: "_1knr"
                }, ' \u00b7 ', this.props.viewProps.nonMember.aux);
            var t = [i.createElement("li", {
                id: this.state.nonMembersHeaderID,
                className: "_1kns"
            }, i.createElement(g, {
                src: m('/images/groups/secret-tag.png'),
                className: "_1knt"
            }), this.props.viewProps.nonMember.title, s)];
            return k(t, r.map(function(u, v) {
                var w = v === 0 ? this.state.nonMembersHeaderID: null;
                return this._renderItem(u, w);
            }.bind(this)));
        },
        render: function() {
            var r = [], s = [];
            this.props.entries.forEach(function(u) {
                var v = u.getAuxiliaryData();
                if (v.renderType === 'member') {
                    r.push(u);
                } else 
                    s.push(u);
            });
            var t = (("_5u8_") + (!r.length&&!s.length ? ' ' + "_5u90" : ''));
            return (i.createElement("ul", {
                className: t,
                role: "listbox",
                id: this.props.id
            }, this._renderMembers(r), this._renderNonMembers(s)));
        }
    });
    e.exports = q;
}, null);
__d("Collection", [], function(a, b, c, d, e, f) {
    function g(h, i) {
        if (!h.__collection__) {
            var j = new Function();
            for (var k in h.prototype)
                j.prototype[k] = g._call.bind(null, k);
            h.__collection__ = j;
        }
        var l = new h.__collection__();
        l._elements = i;
        return l;
    }
    g._call = function(h) {
        var i = Array.prototype.slice.call(arguments, 1);
        this._elements.forEach(function(j) {
            j[h].apply(j, i);
        });
        return this;
    };
    e.exports = g;
}, null);
__d("Drag", ["Event", "Arbiter", "DOM", "Style", "Vector"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = {};
    l.currentDraggable = null;
    l.grab = function(m) {
        if (l.currentDraggable)
            l._onmouseup();
        m.lastDragOver = null;
        l.attachDragEvents();
        l.currentDraggable = m;
    };
    l.attachDragEvents = function() {
        document.onselectstart = function() {
            document.onselectstart = null;
            return false;
        };
        if (l.dragEventsAttached)
            return;
        l.dragEventsAttached = true;
        h.subscribe('scroller/scroll', l._onmousemove);
        g.listen(document, {
            mousemove: l._onmousemove,
            mouseup: l._onmouseup
        });
    };
    l.droppables = {};
    l.addDroppable = function(m, n) {
        (l.droppables[m] = l.droppables[m] || []).push(n);
    };
    l.removeDroppable = function(m, n) {
        l.droppables[m] = l.droppables[m].filter(function(o) {
            return o != n;
        });
    };
    l.getOffsetParent = function(m) {
        if (i.isNodeOfType(m, ['body', 'html']))
            return document.body;
        while ((m = m.parentNode) && m !== document.body)
            if (j.get(m, 'position') !== 'static')
                return m;
        return document.body;
    };
    l._onmousemove = function(event, m) {
        if (!l.currentDraggable)
            return;
        var n = m || k.getEventPosition(event), o = l.currentDraggable, p = l.droppables[o.namespace];
        if (o.namespace && o.active && p) {
            var q = {};
            p.forEach(function(w) {
                q[w.zIndex] = w.zIndex;
            });
            var r = [];
            for (var s in q)
                r.push(q[s]);
            r.sort();
            var t = o.lastDragOver, u = null;
            for (var v = r.length - 1; v >= 0; v--)
                if (t && t.dom != null && t.zIndex == r[v] && t.isDraggedOver(n)) {
                    u = t;
                    break;
                } else 
                    for (s = 0; s < p.length; s++) {
                        if (r[v] != p[s].zIndex)
                            continue;
                            if (t != p[s] && o.dom != p[s].dom && p[s].isDraggedOver(n)) {
                                u = p[s];
                                v =- 1;
                                break;
                            }
                    }
            if (u && u != t) {
                u.ondragover(o);
                l.currentDraggable.adjustCursorPosition();
            }
            if (u)
                u.ondragmove(o, n.sub(k.getElementPosition(u.dom)));
            o.lastDragOver = u;
        }
        l.currentDraggable._onmousemove(n);
    };
    l._onmouseup = function(m) {
        document.onselectstart = null;
        if (l.currentDraggable) {
            l.currentDraggable._ondrop();
            l.currentDraggable = null;
        }
    };
    e.exports = l;
}, null);
__d("Draggable", ["Event", "Arbiter", "Collection", "DOM", "Drag", "Rect", "Style", "Vector", "emptyFunction"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    function p(r) {
        "use strict";
        this.canvas = r;
        this.scrollZone = 50;
        this.velocity = 100;
        this.coefficient = 1;
    }
    p.prototype.activate = function() {
        "use strict";
        this.activate = o;
        this.event = g.listen(document, 'mousemove', this._onmousemove.bind(this));
        this.interval = setInterval(this._intervalHandler.bind(this), 50);
        this.cursor = null;
    };
    p.prototype.deactivate = function() {
        "use strict";
        delete this.activate;
        this.event && this.event.remove();
        this.event = null;
        clearInterval(this.interval);
    };
    p.prototype._onmousemove = function(event) {
        "use strict";
        this.cursor = n.getEventPosition(event);
    };
    p.prototype._intervalHandler = function() {
        "use strict";
        if (!this.cursor)
            return;
        var r = this.canvas == document.body ? l.getViewportBounds(): new l(this.canvas), s = new l(this.cursor.y - r.t, r.r - this.cursor.x, r.b - this.cursor.y, this.cursor.x - r.l), t = new n(0, 0);
        if (s.t < s.b && s.t < this.scrollZone) {
            t.y =- this.scrollZone + s.t;
        } else if (s.b < this.scrollZone)
            t.y = this.scrollZone - s.b;
        t.y = this._doMath(t.y);
        if (s.l < s.r && s.l < this.scrollZone) {
            t.x =- this.scrollZone + s.l;
        } else if (s.r < this.scrollZone)
            t.x = this.scrollZone - s.r;
        t.x = this._doMath(t.x);
        if (t.x || t.y) {
            t.scrollElementBy(this.canvas);
            if (document.body == this.canvas) {
                var u = n.getScrollPosition();
                t.scrollElementBy(this.canvas);
                var v = n.getScrollPosition();
                this.cursor = this.cursor.add(v.sub(u));
            } else 
                t.scrollElementBy(this.canvas);
            h.inform('scroller/scroll', this.cursor);
        }
    };
    p.prototype._doMath = function(r) {
        "use strict";
        r = (r >= 0 ? Math.min(r, this.scrollZone) : Math.max(r, - this.scrollZone));
        return Math.floor(Math.pow(r / this.scrollZone * this.velocity, this.coefficient));
    };
    p.findScrollParent = function(r) {
        "use strict";
        var s;
        r = r.parentNode;
        while (r) {
            if (r.scrollHeight != r.offsetTop) {
                s = m.get(r, 'overflowY');
                if (s == 'scroll' || s == 'auto')
                    return r;
            }
            r = r.parentNode;
        }
        return document.body;
    };
    function q(r) {
        "use strict";
        if (!r)
            throw new Error('Element should be a DOM node');
        if (!(this instanceof q)) {
            if (r instanceof Array) {
                var s = [];
                r.forEach(function(t) {
                    s.push(new q(t));
                });
                return new i(q, s);
            } else 
                return new q(r);
        } else {
            this.data = {};
            this.handles = [];
            this.dom = r;
            this.boundingBox = null;
            this.useScroller = true;
            this.grabPctX = this.grabPctY = 0;
            this._shouldKillEvents = true;
            this.addHandle(this.dom);
        }
    }
    q.prototype.destroy = function() {
        "use strict";
        this.handles.forEach(function(r) {
            this.removeHandle(r.obj);
        }.bind(this));
        this.data = this.dom = null;
    };
    q.prototype.adjustCursorPosition = function() {
        "use strict";
        var r = n.getElementDimensions(this.dom);
        this.cursorPositionVector = new n(parseInt(this.grabPctX * r.x, 10), parseInt(this.grabPctY * r.y, 10));
    };
    q.prototype._onclick = function(event) {
        "use strict";
        if (!this._shouldKillEvents)
            return true;
        if (this.active)
            return g.kill(event);
    };
    q.prototype._ongrab = function(r) {
        "use strict";
        this.ongrab();
        if (this.useScroller) {
            if (!this.scroller)
                this.scroller = new p(p.findScrollParent(this.dom));
            this.scroller.activate();
        }
        if (this.active) {
            if (!this.oldPosition)
                this.oldPosition = this.dom.style.position;
            var s = k.getOffsetParent(this.dom);
            if (s !== document.body)
                r = r.sub(n.getElementPosition(s));
            this.dom.style.position = this.absolute ? 'absolute' : 'relative';
            r.sub(this.cursorPositionVector).setElementPosition(this.dom);
        }
    };
    q.prototype._onmousedown = function(event) {
        "use strict";
        if (!((event.which && event.which === 1) || (event.button && event.button === 1)))
            return;
        var r = event.getTarget();
        if (j.isNodeOfType(r, ['input', 'select', 'textarea', 'object', 'embed']))
            return true;
        var s = n.getEventPosition(event), t = n.getElementDimensions(this.dom);
        this.draggableInitialVector = n.getElementPosition(this.dom);
        this.cursorPositionVector = s.sub(this.draggableInitialVector);
        this.grabPctX = t.x === 0 ? 0 : this.cursorPositionVector.x / t.x;
        this.grabPctY = t.y === 0 ? 0 : this.cursorPositionVector.y / t.y;
        k.grab(this, event);
        if (this.gutter) {
            this.cursorInitialVector = s;
        } else {
            this._setActive(true);
            this._ongrab(s);
        }
        if (!this._shouldKillEvents)
            return true;
        return g.kill(event);
    };
    q.prototype._onmousemove = function(r) {
        "use strict";
        if (!this.active)
            if (r.distanceTo(this.cursorInitialVector) >= this.gutter) {
                this._setActive(true);
                this._ongrab(r);
            }
        if (this.active) {
            var s = r.sub(this.cursorPositionVector), t;
            if (this.boundingBox) {
                var u = l.newFromVectors(s, n.getElementDimensions(this.dom));
                u = u.boundWithin(this.boundingBox);
                s = u.getPositionVector();
                if (this.boundingBox.w() === 0) {
                    t = new n(this.draggableInitialVector.x, s.y, 'document');
                } else if (this.boundingBox.h() === 0) {
                    t = new n(s.x, this.draggableInitialVector.y, 'document');
                } else 
                    t = s;
            } else 
                t = s;
            var v = k.getOffsetParent(this.dom);
            if (v !== document.body)
                t = t.sub(n.getElementPosition(v));
            t.setElementPosition(this.dom);
            this.ondrag(r);
        }
    };
    q.prototype._ondrop = function() {
        "use strict";
        this.scroller && this.scroller.deactivate();
        if (this.active) {
            setTimeout((function() {
                this._setActive(false);
            }).bind(this), 0);
            this.ondrop(this.scroller && this.scroller.cursor);
            if (this.lastDragOver)
                this.lastDragOver.ondrop(this);
        }
    };
    q.prototype.killDrag = function() {
        "use strict";
        this._setActive(false);
        k._onmouseup();
    };
    q.prototype.forceDrop = function() {
        "use strict";
        k._onmouseup();
    };
    q.prototype.setBoundingBox = function(r) {
        "use strict";
        this.boundingBox = r;
        return this;
    };
    q.prototype.resetPosition = function() {
        "use strict";
        this.dom.style.position = this.oldPosition;
        this.oldPosition = null;
        this.dom.style.left = '';
        this.dom.style.top = '';
        return this;
    };
    q.prototype.setUseAbsolute = function(r) {
        "use strict";
        this.absolute = r;
        return this;
    };
    q.prototype.setDragHandler = function(r) {
        "use strict";
        this.ondrag = r;
        return this;
    };
    q.prototype.setGrabHandler = function(r) {
        "use strict";
        this.ongrab = r;
        return this;
    };
    q.prototype.setDropHandler = function(r) {
        "use strict";
        this.ondrop = r;
        return this;
    };
    q.prototype.setGutter = function(r) {
        "use strict";
        this.gutter = r;
        return this;
    };
    q.prototype.setNamespace = function(r) {
        "use strict";
        this.namespace = r;
        return this;
    };
    q.prototype.setUseScroller = function(r) {
        "use strict";
        this.useScroller = r;
        return this;
    };
    q.prototype.setAvoidKillingEvents = function(r) {
        "use strict";
        this._shouldKillEvents=!r;
        return this;
    };
    q.prototype.addHandle = function(r) {
        "use strict";
        if (this.handles.length == 1 && this.handles[0].obj == this.dom)
            this.removeHandle(this.dom);
        this.handles.push({
            obj: r,
            evt: [g.listen(r, 'mousedown', this._onmousedown.bind(this)), g.listen(r, 'click', this._onclick.bind(this)), g.listen(r, 'drag', this._killUnlessActive.bind(this)), g.listen(r, 'selectstart', this._killUnlessActive.bind(this))]
        });
        return this;
    };
    q.prototype.removeHandle = function(r) {
        "use strict";
        this.handles = this.handles.filter(function(s) {
            if (s.obj != r) {
                return true;
            } else {
                s.evt.forEach(function(t) {
                    t.remove();
                });
                return false;
            }
        });
    };
    q.prototype.getDOM = function() {
        "use strict";
        return this.dom;
    };
    q.prototype.setKey = function(r, s) {
        "use strict";
        this.data[r] = s;
        return this;
    };
    q.prototype.getKey = function(r) {
        "use strict";
        return this.data[r];
    };
    q.prototype._setActive = function(r) {
        "use strict";
        if (!this.dom)
            return;
        this.dom.activeDrag = this.active = r;
        for (var s = 0; s < this.handles.length; s++)
            this.handles[s].obj.activeDrag = r;
    };
    q.prototype._killUnlessActive = function(r) {
        "use strict";
        if (!this._shouldKillEvents)
            return;
        if (r.getTarget() !== document.activeElement)
            return r.kill();
    };
    q.prototype.ondrag = o;
    q.prototype.ongrab = o;
    q.prototype.ondrop = o;
    q.prototype.gutter = 0;
    q.prototype.handles = null;
    e.exports = q;
}, null);
__d("Droppable", ["Collection", "Drag", "Draggable", "Vector", "emptyFunction"], function(a, b, c, d, e, f, g, h, i, j, k) {
    function l(m) {
        "use strict";
        if (!m)
            throw new Error('Element should be a DOM node');
        if (!(this instanceof l)) {
            if (m instanceof Array) {
                var n = [];
                m.forEach(function(o) {
                    n.push(new l(o));
                });
                return new g(l, n);
            } else 
                return new l(m);
        } else {
            this.data = {};
            this.dom = m;
            this.namespace = null;
        }
    }
    l.prototype.destroy = function() {
        "use strict";
        if (this.namespace)
            h.removeDroppable(this.namespace, this);
        this.data = this.dom = null;
    };
    l.prototype.setNamespace = function(m) {
        "use strict";
        if (this.namespace)
            h.removeDroppable(this.namespace, this);
        this.namespace = m;
        h.addDroppable(m, this);
        return this;
    };
    l.prototype.setZIndex = function(m) {
        "use strict";
        this.zIndex = m;
        return this;
    };
    l.prototype.hasPointMovedHorizontally = function(m) {
        "use strict";
        var n = j.getElementPosition(this.dom);
        return n.x <= m.x && this.dom.offsetWidth + n.x > m.x;
    };
    l.prototype.hasPointMovedVertically = function(m) {
        "use strict";
        var n = j.getElementPosition(this.dom);
        return n.y <= m.y && this.dom.offsetHeight + n.y > m.y;
    };
    l.prototype.hasPointMovedInside = function(m) {
        "use strict";
        return this.hasPointMovedHorizontally(m) && this.hasPointMovedVertically(m);
    };
    l.prototype.setDragOverHandler = function(m) {
        "use strict";
        this.ondragover = m;
        return this;
    };
    l.prototype.setDragOverVectically = function() {
        "use strict";
        this.isDraggedOver = l.prototype.hasPointMovedVertically;
        return this;
    };
    l.prototype.setDragOverHorizontally = function() {
        "use strict";
        this.isDraggedOver = l.prototype.hasPointMovedHorizontally;
        return this;
    };
    l.prototype.setDragMoveHandler = function(m) {
        "use strict";
        this.ondragmove = m;
        return this;
    };
    l.prototype.setDropHandler = function(m) {
        "use strict";
        this.ondrop = m;
        return this;
    };
    l.prototype.zIndex = 0;
    l.prototype.isDraggedOver = l.prototype.hasPointMovedInside;
    l.prototype.ondragover = k;
    l.prototype.ondragmove = k;
    l.prototype.ondrop = k;
    l.prototype.getDOM = i.prototype.getDOM;
    l.prototype.setKey = i.prototype.setKey;
    l.prototype.getKey = i.prototype.getKey;
    e.exports = l;
}, null);
__d("LeftNavItemClassicDraggableContainer.react", ["React", "DOMDimensions", "Style", "Draggable", "Droppable", "Arbiter"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    "use strict";
    var m = g.createClass({
        displayName: "LeftNavItemClassicDraggableContainer",
        propTypes: {
            itemID: g.PropTypes.oneOfType([g.PropTypes.string, g.PropTypes.number]).isRequired,
            section: g.PropTypes.object.isRequired,
            sortable: g.PropTypes.bool.isRequired
        },
        render: function() {
            return (g.createElement("div", {
                "data-itemid": this.props.itemID
            }, this.props.children));
        },
        componentWillReceiveProps: function(n) {
            if (!this.props.sortable && n.sortable)
                this._mountDraggable(n.draggableBound);
            if (this.props.sortable&&!n.sortable)
                this._unmountDraggable();
        },
        _mountDraggable: function(n) {
            var o = 'bookmarkItem', p = this.props.section, q = this.props.itemID, r = this.getDOMNode();
            this._draggable = (new j(r)).setNamespace(o).setUseAbsolute(true).setGutter(15).setBoundingBox(n).setGrabHandler(function() {
                var s = h.getElementDimensions(this.dom);
                i.set(this.dom, 'width', s.width + 'px');
                l.inform('LeftNavDragController/onItemEditDraggableGrab', {
                    section: p,
                    draggable: this
                });
            }).setDropHandler(function() {
                i.set(this.dom, 'width', '');
                this.resetPosition();
                l.inform('LeftNavDragController/onItemEditDraggableDrop', {
                    section: p,
                    draggable: this
                });
            });
            this._droppable = (new k(r)).setNamespace(o).setDragOverHandler(function(s) {
                l.inform('LeftNavDragController/onItemEditDroppableDragOver', {
                    section: p,
                    draggable: s,
                    targetItemID: q
                });
            });
        },
        _unmountDraggable: function() {
            if (this._draggable)
                this._draggable.destroy();
            if (this._droppable)
                this._droppable.destroy();
        }
    });
    e.exports = m;
}, null);
__d("LeftNavItem.react", ["Arbiter", "Bootloader", "DOMContainer.react", "Image.react", "LeftNavItemClassicDraggableContainer.react", "React", "Run", "XUISpinner.react", "cx", "joinClasses"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    "use strict";
    var q = '\u00A0', r = '\u00B7', s = l.createClass({
        displayName: "LeftNavItem",
        render: function() {
            var t = this.props, u = t.model, v = t.section, w = u.keys.some(function(aa) {
                return aa === t.selectedKey;
            }), x = u.keys.some(function(aa) {
                return aa === t.loadingKey;
            }), y = v.props.id === 'pinnedNav', z = (("sideNavItem") + (' ' + "stat_elem") + (w ? ' ' + "selectedItem" : '') + (x ? ' ' + "_5afd" : ''));
            return (l.createElement("li", {
                key: u.id,
                className: z,
                "data-sortable": u.sortable
            }, l.createElement(k, {
                itemID: u.id,
                section: v,
                sortable: y && t.inEditMode && u.sortable,
                draggableBound: this.props.draggableBound
            }, this._renderBookmarkContent())));
        },
        _renderBookmarkContent: function() {
            var t = this.props.model, u = this.props.section, v = u.props.id === 'pinnedNav', w = u.props.id === 'bookmarksSeeAllEntSection', x = t.count > 0, y = t.auxcontent ? l.createElement(i, {
                key: "auxpopover"
            }, t.auxcontent): null, z = this._renderCounter(t.count, w), aa = p('linkWrap', x ? 'hasCount' : 'noCount'), ba = (("_5afe") + (v && t.sortable ? ' ' + "sortableItem" : ''));
            if (!this.BookmarkPopoverMenu)
                m.onLoad(function() {
                    h.loadModules(["BookmarkPopoverMenu.react"], function(ga) {
                        this.BookmarkPopoverMenu = ga;
                        setTimeout(this.forceUpdate.bind(this), 0);
                    }.bind(this));
                }.bind(this));
            var ca = null, da = this.BookmarkPopoverMenu;
            if (da)
                ca = l.createElement(da, {
                    key: "popover",
                    navSection: this.props.section,
                    navItem: this,
                    editmenu: t.editmenu
                });
            var ea = null;
            if (w && t.subtitle)
                ea = l.createElement("div", {
                    className: "_1xmt"
                }, q + q + r + q + q, l.createElement(i, null, t.subtitle));
            var fa = [y, ca, l.createElement("div", {
                className: "clearfix"
            }, l.createElement("a", {
                key: "link",
                "data-testid": 'left_nav_item_' + t.link.title,
                className: ba,
                "data-gt": t.datagt,
                title: t.link.title,
                rel: t.link.rel,
                href: t.link.href,
                ajaxify: t.link.ajaxify,
                draggable: "false",
                onClick: function() {
                    return g.inform('LeftNavController/setItemCount', {
                        item: t,
                        count: 0
                    });
                }
            }, l.createElement("div", {
                className: "rfloat"
            }, l.createElement(n, {
                className: "uiSideNavSpinner",
                showOnAsync: true
            }), w ? null : z, v && t.sortable ? l.createElement("span", {
                className: "_upa"
            }) : null), l.createElement("span", {
                className: "imgWrap"
            }, l.createElement(j, {
                src: t.image,
                height: "16",
                width: "16",
                draggable: "false"
            })), l.createElement("div", {
                className: aa
            }, t.name, w ? z : null)), ea)];
            return fa;
        },
        _renderCounter: function(t, u) {
            var v = t > 0, w = (("count") + (' ' + "_5aff") + (!v ? ' ' + "hidden_elem" : '') + (u ? ' ' + "mlm" : ''));
            return (l.createElement("span", {
                className: w
            }, l.createElement("span", {
                className: "countValue fss"
            }, t <= 20 ? t : '20+')));
        }
    });
    e.exports = s;
}, null);
__d("LeftNavItemPlaceholder.react", ["React", "cx"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = g.createClass({
        displayName: "LeftNavItemPlaceholder",
        render: function() {
            return (g.createElement("li", {
                className: "sideNavItem stat_elem"
            }, g.createElement("a", {
                className: "_5afe clearfix sortableItem"
            })));
        }
    });
    e.exports = i;
}, null);
__d("LeftNavSection.react", ["Arbiter", "Bootloader", "React", "Link.react", "LeftRight.react", "InlineBlock.react", "LeftNavItem.react", "LeftNavItemPlaceholder.react", "ReactLayeredComponentMixin", "cx", "fbt", "Run"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r) {
    "use strict";
    var s = null, t = i.createClass({
        displayName: "LeftNavSection",
        mixins: [o],
        getInitialState: function() {
            return {
                dragged: false,
                inEditMode: false,
                glowingType: null,
                draggableBound: null,
                placeholderIdx: - 1
            };
        },
        renderLayers: function() {
            var u = this.props.id === 'bookmarksSeeAllEntSection';
            if (u)
                return {
                    dragNUX: null
                };
            if (!s)
                r.onLoad(function() {
                    h.loadModules(["LeftNavDragNUX.react"], function(x) {
                        if (!s)
                            s = x;
                            setTimeout(this.forceUpdate.bind(this), 0);
                        }.bind(this));
                    }.bind(this));
            var v = this.state.glowingType, w = null;
            if (v === 'add' || v === 'sort')
                if (s)
                    w = i.createElement(s, {
                        contextRef: "sectionBody",
                        nuxType: v,
                        position: "above",
                        alignment: "center"
                    });
            return {
                dragNUX: w
            };
        },
        render: function() {
            var u = this, v = this.props.model, w = v.items, x = this.props.selectedKey, y = this.props.loadingKey, z = this.state.inEditMode, aa = this.state.draggableBound;
            if (w.length === 0)
                return null;
            var ba = 1, ca = w.map(function(ia) {
                return (i.createElement(m, {
                    key: ia.id,
                    model: ia,
                    section: u,
                    selectedKey: x,
                    loadingKey: y,
                    inEditMode: z,
                    draggableBound: aa,
                    rank: ba++
                }));
            });
            if (this.state.placeholderIdx >= 0)
                ca.splice(this.state.placeholderIdx, 0, i.createElement(n, {
                    key: "itemplaceholder",
                    ref: "placeholder"
                }));
            var da = this.state.glowingType, ea = (("homeSideNav") + (da === 'add' ? ' ' + "_1492" : '') + (da === 'sort' ? ' ' + "_1493" : '') + (da === 'remove' ? ' ' + "_1494" : '')), fa = (("_bui") + (this._isPinnedSection() ? ' ' + "droppableNav" : '') + (!this._isPinnedSection() ? ' ' + "nonDroppableNav" : '') + (' ' + "_3-8w") + (!z ? ' ' + "_3-96" : '')), ga = this._isPinnedSection() ? i.createElement("div", {
                className: "_3hge stat_elem"
            }, i.createElement(j, {
                className: "navEditDone",
                onClick: function() {
                    g.inform('LeftNavDragController/toggleEditMode', {
                        section: u
                    });
                }
            }, i.createElement("span", {
                className: "_3hgf"
            }, "Done"))): null, ha = {
                nav_items_count: w.length.toString(),
                nav_section: this.props.id.toString(),
                bm_sec: this.props.id.toString()
            };
            return (i.createElement("div", {
                id: this.props.id,
                className: ea,
                "data-ft": v.dataft,
                ref: "sectionBody"
            }, this._renderHeader(), i.createElement("ul", {
                className: fa,
                "data-gt": JSON.stringify(ha),
                "data-ft": v.dataft
            }, ca), ga));
        },
        _renderHeader: function() {
            var u = this.props.model, v;
            if (u.title) {
                var w = u.seeallhref ? i.createElement(j, {
                    href: u.seeallhref
                }, i.createElement(k, null, i.createElement("span", {
                    className: "sectionDragHandle"
                }, u.title), u.remainingcount&&!this.state.dragged ? i.createElement(l, {
                    className: "_3-91"
                }, i.createElement("div", {
                    className: "_1cwg _5ol3"
                }, u.seealltext)) : null)): i.createElement("span", {
                    className: "sectionDragHandle"
                }, u.title);
                v = i.createElement("h4", {
                    className: "navHeader"
                }, w);
            } else 
                v = null;
            return v;
        },
        componentDidUpdate: function() {
            this._updatePinnedSectionBound();
        },
        _updatePinnedSectionBound: function() {
            if (this._isPinnedSection())
                g.inform('LeftNavDragController/updatePinnedSectionBound');
        },
        _isPinnedSection: function() {
            return this.props.id === 'pinnedNav';
        }
    });
    e.exports = t;
}, null);
__d("LeftNavSectionPlaceholder.react", ["React", "cx"], function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = g.createClass({
        displayName: "LeftNavSectionPlaceholder",
        render: function() {
            var j = {
                height: this.props.height + 'px',
                width: this.props.width + 'px'
            };
            return (g.createElement("div", {
                className: "homeSideNav",
                style: j
            }, g.createElement("ul", {
                className: "_bui"
            })));
        }
    });
    e.exports = i;
}, null);
__d("LeftNavContainer.react", ["invariant", "LeftNavSection.react", "LeftNavSectionPlaceholder.react", "React"], function(a, b, c, d, e, f, g, h, i, j) {
    "use strict";
    var k = j.createClass({
        displayName: "LeftNavContainer",
        getInitialState: function() {
            return {
                placeholderIdx: - 1,
                placeholderWidth: 0,
                placeholderHeight: 0
            };
        },
        render: function() {
            var l = this.props.model, m = j.createElement(h, {
                selectedKey: l.selectedKey,
                loadingKey: l.loadingKey,
                model: l.pinnedSection,
                key: "pinnedNav",
                id: "pinnedNav",
                ref: "pinnedNav"
            }), n = l.sections, o = n.map(function(p) {
                return j.createElement(h, {
                    selectedKey: l.selectedKey,
                    loadingKey: l.loadingKey,
                    model: p,
                    key: p.id,
                    id: p.id
                });
            });
            if (this.state.placeholderIdx>-1)
                o.splice(this.state.placeholderIdx, 0, j.createElement(i, {
                    key: "placeholder",
                    width: this.state.placeholderWidth,
                    height: this.state.placeholderHeight
                }));
            return (j.createElement("div", null, m, o));
        },
        getPinnedSection: function() {
            var l = this.refs.pinnedNav;
            g(l);
            return l;
        }
    });
    e.exports = k;
}, null);
__d("LeftNavDragController", ["Arbiter", "CSS", "cx", "DOMDimensions", "DOMQuery", "invariant", "Rect", "Style", "SubscriptionsHandler", "Vector"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    "use strict";
    var q;
    function r(s, t) {
        l(!q);
        q = this;
        this.$LeftNavDragController0 = s;
        this.$LeftNavDragController1 = t;
        this.$LeftNavDragController2();
        this.$LeftNavDragController3 = null;
        this.$LeftNavDragController4 = false;
        this.$LeftNavDragController5 = new o();
        this.$LeftNavDragController5.addSubscriptions(g.subscribe('LeftNavDragController/updatePinnedSectionBound', this.$LeftNavDragController2.bind(this)), g.subscribe('LeftNavDragController/toggleEditMode', this.$LeftNavDragController6.bind(this)), g.subscribe('LeftNavDragController/onItemEditDraggableGrab', this.$LeftNavDragController7.bind(this)), g.subscribe('LeftNavDragController/onItemEditDraggableDrop', this.$LeftNavDragController8.bind(this)), g.subscribe('LeftNavDragController/onItemEditDroppableDragOver', this.$LeftNavDragController9.bind(this)), g.subscribe('LeftNavDragController/onItemDraggableGrab', this.$LeftNavDragControllera.bind(this)), g.subscribe('LeftNavDragController/onItemDraggableDrag', this.$LeftNavDragControllerb.bind(this)), g.subscribe('LeftNavDragController/onItemDraggableDrop', this.$LeftNavDragControllerc.bind(this)), g.subscribe('LeftNavDragController/onItemDroppableDragOver', this.$LeftNavDragControllerd.bind(this)));
    }
    r.prototype.destroy = function() {
        this.$LeftNavDragController5.release();
        q = null;
    };
    r.prototype.$LeftNavDragController2 = function() {
        this.$LeftNavDragControllere = this.$LeftNavDragControllerf(false);
    };
    r.prototype.$LeftNavDragControllera = function(s, t) {
        var u = t, v = u.section, w = u.draggable, x = u.dragContainer, y = u.isDraggedItemPinned;
        if (!this.$LeftNavDragControllere) {
            w.killDrag();
            n.set(w.dom, 'width', '');
            w.resetPosition();
            return;
        }
        var z = this.$LeftNavDragController1.getPinnedSection();
        this.$LeftNavDragController3 = x;
        h.addClass(this.$LeftNavDragController0, 'draggingMode');
        if (y) {
            var aa = this.$LeftNavDragControllerg(v, w);
            z.setState({
                placeholderIdx: aa,
                glowingType: 'sort'
            });
        } else 
            z.setState({
                glowingType: 'add'
            });
    };
    r.prototype.$LeftNavDragControllerb = function(s, t) {
        var u = t.vector, v = t.dragContainer, w = t.isDraggedItemPinned, x = this.$LeftNavDragController1.getPinnedSection();
        if (this.$LeftNavDragControllerh(u)) {
            var y = x.state.placeholderIdx>-1;
            if (!y) {
                var z = x.props.model.items.findIndex(function(aa) {
                    return !aa.sortable;
                });
                x.setState({
                    placeholderIdx: z + 1,
                    glowingType: w ? 'sort': 'add'
                });
                this.$LeftNavDragController3.setTooltip(null);
            }
        } else {
            x.setState({
                placeholderIdx: - 1,
                glowingType: w ? 'remove': 'add'
            });
            if (w)
                v.setTooltip('remove');
        }
    };
    r.prototype.$LeftNavDragControllerc = function(s, t) {
        var u = t.draggable, v = t.isDraggedItemPinned, w = this.$LeftNavDragController1.getPinnedSection(), x = u.dom.getAttribute('data-itemid');
        if (this.$LeftNavDragControllerh()) {
            var y = this.$LeftNavDragControlleri(w, x);
            if (y)
                g.inform('LeftNavController/updatePinnedSection', {
                    idOrder: y
                });
        } else if (v)
            g.inform('LeftNavController/toggleFavorite', x);
        this.$LeftNavDragController3 = null;
        h.removeClass(this.$LeftNavDragController0, 'draggingMode');
        w.setState({
            placeholderIdx: - 1,
            glowingType: null
        });
    };
    r.prototype.$LeftNavDragControllerd = function(s, t) {
        var u = t.section, v = t.draggable, w = t.targetItemID, x = h.hasClass(v.dom, 'pinnedItem'), y = u.state.placeholderIdx >= 0, z = u.props.model.items, aa = z.findIndex(function(ca) {
            return ca.id === w;
        }), ba;
        if (y) {
            ba = u.state.placeholderIdx <= aa ? aa + 1 : aa;
        } else 
            ba = aa;
        u.setState({
            placeholderIdx: ba,
            glowingType: x ? 'sort': 'add'
        });
        if (x)
            this.$LeftNavDragController3.setTooltip(null);
    };
    r.prototype.$LeftNavDragController6 = function(s, t) {
        var u = t.section;
        if (!u.state.inEditMode) {
            var v = this.$LeftNavDragControllerf(true);
            if (v) {
                v.l = v.r = 0;
                u.setState({
                    draggableBound: v
                });
            }
        }
        h.toggleClass(this.$LeftNavDragController0, "_2ryg");
        u.setState({
            inEditMode: !u.state.inEditMode
        });
    };
    r.prototype.$LeftNavDragController7 = function(s, t) {
        var u = t.section, v = t.draggable, w = this.$LeftNavDragControllerg(u, v);
        u.setState({
            placeholderIdx: w
        });
    };
    r.prototype.$LeftNavDragController8 = function(s, t) {
        var u = t.section, v = t.draggable, w = this.$LeftNavDragControllerg(u, v), x = u.state.placeholderIdx;
        if (x !== w && x !== w + 1) {
            var y = u.props.model, z = y.items[w];
            g.inform('LeftNavController/updatePinnedSection', {
                idOrder: this.$LeftNavDragControlleri(u, z.id)
            });
        }
        u.setState({
            placeholderIdx: - 1
        });
    };
    r.prototype.$LeftNavDragController9 = function(s, t) {
        var u = t.section, v = t.draggable, w = t.targetItemID, x = u.props.model, y = this.$LeftNavDragControllerg(u, v);
        if (y >= 0) {
            var z = x.items.findIndex(function(ba) {
                return ba.id === w;
            }), aa = u.state.placeholderIdx <= z ? z + 1: z;
            u.setState({
                placeholderIdx: aa
            });
        }
    };
    r.prototype.$LeftNavDragControllerh = function(s) {
        if (s) {
            var t = this.$LeftNavDragControllere;
            this.$LeftNavDragController4 = t && s.x >= t.l && s.x <= t.r && s.y >= t.t && s.y <= t.b;
        }
        return this.$LeftNavDragController4;
    };
    r.prototype.$LeftNavDragControlleri = function(s, t) {
        if (!s)
            return undefined;
        var u = s.props.model.items, v = s.state.placeholderIdx, w = [];
        u.forEach(function(x, y) {
            if (y === v)
                w.push(t);
            if (x.sortable && x.id !== t)
                w.push(x.id);
        });
        if (v === u.length)
            w.push(t);
        return w;
    };
    r.prototype.$LeftNavDragControllerg = function(s, t) {
        var u = s.props.model, v = t.dom.getAttribute('data-itemid');
        return (u.items.findIndex(function(w) {
            return w.id.toString() === v;
        }));
    };
    r.prototype.$LeftNavDragControllerf = function(s) {
        var t = this.$LeftNavDragController1.getPinnedSection(), u = t.getDOMNode(), v = k.scry(u, 'li.sideNavItem');
        if (s)
            v = v.filter(function(fa) {
                return fa.getAttribute('data-sortable') === 'true';
            });
        if (v.length > 0) {
            var w = v[0], x = j.getElementDimensions(w).width, y = v[v.length - 1], z = j.getElementDimensions(y).height, aa = p.getElementPosition(w).y, ba = p.getElementPosition(y).y + z;
            if (t.state.placeholderIdx >= 0) {
                var ca = t.refs.placeholder.getDOMNode(), da = p.getElementPosition(ca), ea = j.getElementDimensions(ca);
                aa = Math.min(aa, da.y);
                ba = Math.max(ba, da.y + ea.height);
            }
            return new m(aa, p.getElementPosition(w).x + x, ba, p.getElementPosition(w).x);
        } else 
            return null;
    };
    e.exports = r;
}, null);
__d("LeftNavController", ["React", "LeftNavContainer.react", "LeftNavDragController", "AsyncRequest", "Arbiter", "Event", "SubscriptionsHandler", "Run", "$", "copyProperties", "CSS", "cx", "debounce", "DOMDimensions", "Locale", "URI", "Vector", "NavigationMessage", "ChannelConstants"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
    "use strict";
    var z, aa, ba, ca, da, ea = null, fa, ga = {
        init: function(kb, lb) {
            z = kb;
            aa = lb;
            fa = false;
            da = new m();
            da.addSubscriptions(l.listen(window, 'resize', s(ia, 200)), k.subscribe('LeftNavController/toggleFavorite', wa), k.subscribe('LeftNavController/updatePinnedSection', xa), k.subscribe('LeftNavController/setItemCount', function(nb, ob) {
                var pb = ob.item, qb = ob.count;
                return la(pb, qb);
            }), k.subscribe(y.getArbiterType('nav_update_counts'), ma), k.subscribeOnce('AsyncLayout/initialized', function() {
                return fa = true;
            }), k.subscribe(x.NAVIGATION_ITEM_REMOVED, na), k.subscribe(x.NAVIGATION_COMPLETED, ta), k.subscribe(x.NAVIGATION_FAILED, ua), k.subscribe(x.NAVIGATION_COUNT_UPDATE, va), k.subscribe(x.NAVIGATION_SELECT, sa), k.subscribe('LeftNavController/updateSectionOrder', ya));
            var mb = fb(aa.selectedKey);
            if (mb)
                mb.count = 0;
            ba = g.render(g.createElement(h, {
                model: aa
            }), z);
            ia();
            ca = new i(z, ba);
            n.onLeave(this.uninstall.bind(this));
        },
        uninstall: function() {
            fa = false;
            da.release();
            ca.destroy();
        },
        initPageTransitions: function(kb) {
            kb.registerHandler(function(lb) {
                return fa && oa(lb);
            }, 6);
        },
        mountSeeAllPayload: function(kb) {
            ea = kb;
        }
    };
    function ha() {
        ba.forceUpdate();
    }
    function ia() {
        if (!z)
            return;
        var kb = w.getElementPosition(z).x;
        q.conditionClass(z, "_3evf", kb < 20 || (u.isRTL() && kb + t.getElementDimensions(z).width < t.getElementDimensions(o('globalContainer')).width));
    }
    function ja(kb) {
        aa.loadingKey = null;
        aa.selectedKey = kb || aa.defaultKey;
        ha();
    }
    function ka(kb) {
        aa.loadingKey = kb;
        ha();
    }
    function la(kb, lb) {
        kb.count = lb;
        ha();
    }
    function ma(kb, lb) {
        var mb = lb.obj, nb = mb.items;
        nb.forEach(function(ob) {
            var pb = fb(ob.key);
            if (pb)
                pb.count = pb.count + ob.count;
        });
        ha();
    }
    function na(kb, lb) {
        var mb;
        function nb(pb, qb) {
            return pb.keys.some(function(rb) {
                return rb === qb;
            });
        }
        for (var ob = 0; ob < aa.sections.length; ob++) {
            mb = ib(aa.sections[ob].items, function(pb) {
                return nb(pb, lb);
            });
            if (mb)
                break;
        }
        ib(aa.pinnedSection.items, function(pb) {
            return nb(pb, lb);
        });
        ha();
    }
    function oa(kb) {
        var lb = gb(kb);
        return lb && lb.endpoint && pa(lb, kb);
    }
    function pa(kb, lb) {
        ka(kb.keys[0]);
        la(kb, 0);
        ra(kb.endpoint, p(qa(kb, lb), lb.getQueryData()));
        return true;
    }
    function qa(kb, lb) {
        var mb = {};
        mb.sidecol = true;
        mb.path = lb.getPath();
        var nb = hb(kb.keys);
        nb = nb.text ? nb.text : nb.numeric;
        mb.sk = nb;
        mb.key = nb;
        return mb;
    }
    function ra(kb, lb) {
        lb.endpoint = kb;
        k.inform(x.NAVIGATION_BEGIN, {
            useAjaxPipe: true,
            params: lb
        });
    }
    function sa(kb, lb) {
        var mb = lb.sk;
        if (lb.asLoading) {
            ka(mb);
        } else 
            ja(mb);
    }
    function ta(kb, lb) {
        var mb = aa.loadingKey;
        ja(mb);
    }
    function ua(kb, lb) {
        ka(null);
    }
    function va(kb, lb) {
        var mb = fb(lb && lb.key);
        if (mb)
            la(mb, lb.hide ? 0 : mb.count + lb.count);
    }
    function wa(kb, lb) {
        var mb = cb(lb), nb = aa.pinnedSection;
        if (!mb) {
            if (!ea)
                return;
            mb = ea.find(function(rb) {
                return rb.id === lb;
            });
            if (!mb)
                return;
            mb = p({}, mb);
            mb.pinned = true;
            nb.items.push(mb);
            new j().setURI('/ajax/bookmark/add/').setData({
                id: mb.keys[0]
            }).send();
        } else {
            var ob = bb(mb);
            if (db(lb)) {
                mb.pinned = false;
                var pb = nb.items.findIndex(function(rb) {
                    return rb.id === mb.id;
                });
                if (pb >= 0) {
                    nb.items.splice(pb, 1);
                    if (ob)
                        ob.items.unshift(mb);
                    new j().setURI('/ajax/bookmark/delete/').setData({
                        id: mb.keys[0]
                    }).send();
                }
            } else {
                mb.pinned = true;
                var qb = ob.items.findIndex(function(rb) {
                    return rb.id === mb.id;
                });
                if (ob && qb >= 0) {
                    ob.items.splice(qb, 1);
                    nb.items.push(mb);
                    new j().setURI('/ajax/bookmark/add/').setData({
                        id: mb.keys[0]
                    }).send();
                }
            }
        }
        ha();
    }
    function xa(kb, lb) {
        var mb = lb.idOrder, nb = aa.pinnedSection, ob = nb.items.filter(function(qb) {
            return !qb.sortable;
        });
        mb.forEach(function(qb) {
            var rb = nb.items.find(function(tb) {
                return tb.id === qb;
            });
            if (rb) {
                ob.push(rb);
            } else if (rb = cb(qb)) {
                var sb = bb(rb);
                ib(sb.items, function(tb) {
                    return tb.id === rb.id;
                });
                ob.push(rb);
                rb.pinned = true;
            }
        });
        nb.items = ob;
        var pb = ob.map(function(qb) {
            return qb.keys[0];
        });
        new j().setURI('/ajax/bookmark/edit/').setData({
            ids: pb
        }).send();
        ha();
    }
    function ya(kb, lb) {
        var mb = lb.idOrder, nb = aa.sections;
        aa.sections = mb.reduce(function(ob, pb) {
            var qb = nb.find(function(rb) {
                return rb.id === pb;
            });
            if (qb)
                ob.push(qb);
            return ob;
        }, []);
        new j().setURI('/bookmark/section/edit/').setData({
            nav_section_names: mb
        }).send();
        ha();
    }
    function za(kb) {
        var lb = v.getRequestURI();
        return ((kb.getDomain() === lb.getDomain()) && (kb.getPath() === '/' || kb.getPath() === '/home.php'));
    }
    function ab(kb) {
        if (kb === 'pinnedNav') {
            return aa.pinnedSection;
        } else 
            return (aa.sections.filter(function(lb) {
                return lb.id === kb;
            })[0]);
    }
    function bb(kb) {
        return ab(jb[kb.type]);
    }
    function cb(kb) {
        kb = kb.toString();
        return eb(function(lb) {
            return lb.id.toString() === kb;
        });
    }
    function db(kb) {
        kb = kb.toString();
        var lb = ab('pinnedNav');
        return lb.items.some(function(mb) {
            return mb.id.toString() === kb;
        });
    }
    function eb(kb) {
        for (var lb = 0; lb < aa.sections.length; lb++) {
            var mb = aa.sections[lb].items.find(kb);
            if (mb)
                return mb;
        }
        return aa.pinnedSection.items.find(kb);
    }
    function fb(kb) {
        return eb(function(lb) {
            return lb.keys.some(function(mb) {
                return mb === kb;
            });
        });
    }
    function gb(kb) {
        var lb = kb.getQueryData().sk;
        if (lb) {
            return fb(lb);
        } else if (za(kb)) {
            return fb(aa.defaultKey);
        } else 
            return eb(function(mb) {
                return mb.path && mb.path.some(function(nb) {
                    return nb === kb.getPath();
                });
            });
    }
    function hb(kb) {
        var lb = /^(app|group|fl)_/, mb = {};
        for (var nb = 0; nb < kb.length; nb++) {
            var ob = lb.test(kb[nb]);
            if (ob&&!mb.numeric) {
                mb.numeric = kb[nb];
            } else if (!ob&&!mb.text)
                mb.text = kb[nb];
            if (mb.numeric && mb.text)
                break;
        }
        return mb;
    }
    function ib(kb, lb) {
        for (var mb = 0; mb < kb.length; mb++)
            if (lb(kb[mb])) {
                var nb = kb[mb];
                kb.splice(mb, 1);
                return nb;
            }
        return undefined;
    }
    var jb = {
        favorites: 'pinnedNav',
        profiles: 'pinnedNav',
        company: 'companyNav',
        apps: 'appsNav',
        groups: 'groupsNav',
        pages: 'pagesNav',
        lists: 'listsNav',
        interests: 'interestsNav',
        connect_apps: 'connectNav',
        type_user: 'pinnedNav',
        type_group: 'groupsNav',
        type_company: 'companyNav',
        type_page: 'pagesNav',
        type_friend_list: 'listsNav',
        type_interest_list: 'interestsNav',
        type_non_canvas_app: 'appsNav',
        type_facebook_app: 'appsNav',
        type_canvas_app_game: 'appsNav',
        type_canvas_app_non_game: 'appsNav',
        type_curated_feed: 'interestsNav',
        type_game_tool: 'appsNav',
        type_page_tool: 'pagesNav',
        type_pinnable_page_tool: 'pagesNav',
        type_developer: 'developerNav',
        type_developer_tool: 'developerNav'
    };
    e.exports = ga;
}, null);
__d("XUFIActorSelectorNuxSeenControllerURIBuilder", ["XControllerURIBuilder"], function(a, b, c, d, e, f) {
    e.exports = b("XControllerURIBuilder").create("\/ufi\/actor_selector\/nux\/seen\/", {
        is_covered: {
            type: "Bool"
        },
        is_timeline: {
            type: "Bool"
        }
    });
}, null);
__d("UFIActorSelector.react", ["ActorSelector.react", "Arbiter", "AsyncRequest", "Parent", "React", "SubscriptionsHandler", "UFICentralUpdates", "UFIFeedbackTargets", "UFIUserActions", "XUFIActorSelectorNuxSeenControllerURIBuilder", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
    var r = 'ufi_actor_selector_nux_disabled_event', s = k.createClass({
        displayName: "UFIActorSelector",
        propTypes: {
            actorIDs: k.PropTypes.array.isRequired,
            ftEntIdentifier: k.PropTypes.string.isRequired,
            isTimeline: k.PropTypes.bool,
            nuxEnabledCovered: k.PropTypes.bool,
            nuxEnabledUncovered: k.PropTypes.bool,
            nuxHoverContext: k.PropTypes.object,
            settingsURI: k.PropTypes.string
        },
        getInitialState: function() {
            var t = j.byClass(this.props.nuxHoverContext, 'timelineUnitContainer');
            return {
                loading: false,
                nuxEnabledCovered: this.props.nuxEnabledCovered,
                nuxEnabledUncovered: this.props.nuxEnabledUncovered,
                nuxHoverContext: t ? t: this.props.nuxHoverContext,
                selectedActorID: null
            };
        },
        render: function() {
            return (k.createElement(g, {
                actorIDs: this.props.actorIDs,
                coverEnabled: true,
                loading: this.state.loading,
                nuxBody: this._getNUXBody(),
                nuxEnabledCovered: this.state.nuxEnabledCovered,
                nuxEnabledUncovered: this.state.nuxEnabledUncovered,
                nuxHoverContext: this.state.nuxHoverContext,
                onChange: this._onChange,
                onCompleteNux: this._onCompleteNux,
                selectedActorID: this.state.selectedActorID,
                settingsURI: this.props.settingsURI,
                tooltipConstructor: this._getTooltipForActorName,
                tooltipConstructorCovered: this._getCoveredTooltip
            }));
        },
        componentDidMount: function() {
            this._updateSelectedActorIDFromFeedbackTarget();
            this._subscriptions = new l();
            this._subscriptions.addSubscriptions(m.subscribe('feedback-updated', function(t, u) {
                if (this.props.ftEntIdentifier in u.updates)
                    this._updateSelectedActorIDFromFeedbackTarget();
            }.bind(this)), h.subscribe(r, function() {
                this.setState({
                    nuxEnabledCovered: false,
                    nuxEnabledUncovered: false
                });
            }.bind(this)));
        },
        componentWillUnmount: function() {
            this._subscriptions.release();
        },
        _updateSelectedActorIDFromFeedbackTarget: function() {
            n.getFeedbackTarget(this.props.ftEntIdentifier, function(t) {
                this.setState({
                    loading: false,
                    selectedActorID: t.actorforpost
                });
            }.bind(this));
        },
        _getNUXBody: function() {
            return ("Choose whether to like and comment as yourself or as one of the Pages you manage.");
        },
        _getTooltipForActorName: function(t) {
            return (q._("Liking and commenting as {actorName}", [q.param("actorName", t)]));
        },
        _getCoveredTooltip: function() {
            return ("Like or comment as one of the Pages you manage.");
        },
        _onChange: function(t) {
            this.setState({
                loading: true
            });
            o.changeActor(this.props.ftEntIdentifier, t.value);
        },
        _onCompleteNux: function(t) {
            var u = t.isCovered, v = new p().setBool('is_covered', u).setBool('is_timeline', this.props.isTimeline).getURI();
            new i().setURI(v).send();
            h.inform(r);
        }
    });
    e.exports = s;
}, null);
__d("ReactRenderer", ["React", "Run", "$"], function(a, b, c, d, e, f, g, h, i) {
    'use strict';
    function j(n, o, p) {
        var q = g.constructAndRenderComponent(n, o, p);
        h.onLeave(function() {
            g.unmountComponentAtNode(p);
        });
        return q;
    }
    function k(n, o, p) {
        return g.constructAndRenderComponent(n, o, p);
    }
    function l(n, o, p) {
        return j(n, o, i(p));
    }
    function m(n, o, p) {
        return k(n, o, i(p));
    }
    e.exports = {
        constructAndRenderComponent: j,
        constructAndRenderComponentByID: l,
        constructAndRenderComponentAcrossTransitions: k,
        constructAndRenderComponentByIDAcrossTransitions: m
    };
}, null);
__d("HoverButton", ["AsyncRequest", "CSS", "DOM", "URI", "copyProperties", "cx"], function(a, b, c, d, e, f, g, h, i, j, k, l) {
    function m(n, o, p, q) {
        "use strict";
        this._button = n;
        this._flyout = o;
        this._flyoutAjaxify = q;
        this._flyoutContent = p;
        o.subscribe('show', this._onShow.bind(this));
        o.subscribe('hide', this._onHide.bind(this));
    }
    m.prototype.showFlyoutBriefly = function() {
        "use strict";
        this.showFlyout();
        this._flyout.hideFlyoutDelayed(5000);
    };
    m.prototype.showFlyout = function() {
        "use strict";
        this._flyout.showFlyout(this._button, true);
        this._flyout.inform('show', this._button);
    };
    m.prototype.hideFlyout = function() {
        "use strict";
        this._flyout.hideFlyout(true);
        this._flyout.inform('hide', this._button);
    };
    m.prototype.enableButton = function() {
        "use strict";
        this._flyout.initNode(this._button);
    };
    m.prototype.disableButton = function() {
        "use strict";
        this.hideFlyout();
        this._flyout.deactivateNode(this._button);
    };
    m.prototype._onShow = function(n, o) {
        "use strict";
        h.addClass(o, "_52nd");
        if (h.hasClass(o, 'uiButton') || h.hasClass(o, "_42fu"))
            h.addClass(o, 'selected');
        if (this._flyoutAjaxify) {
            h.addClass(this._flyoutContent, 'async_saving');
            new g().setURI(new j(this._flyoutAjaxify)).setHandler(function(p) {
                h.removeClass(this._flyoutContent, 'async_saving');
                i.setContent(this._flyoutContent, p.payload);
            }.bind(this)).send();
            this._flyoutAjaxify = null;
        }
    };
    m.prototype._onHide = function(n, o) {
        "use strict";
        h.removeClass(o, "_52nd");
        if (h.hasClass(o, 'uiButton') || h.hasClass(o, "_42fu"))
            h.removeClass(o, 'selected');
    };
    m.prototype.destroy = function() {
        "use strict";
        this.hideFlyout();
        this._flyout.destroy();
    };
    m.prototype.suppressNextMouseEnter = function() {
        "use strict";
        this._flyout.setActiveNode(this._button);
    };
    k(m.prototype, {
        _button: null,
        _flyout: null,
        _flyoutAjaxify: null,
        _flyoutContent: null
    });
    e.exports = m;
}, null);
__d("HoverFlyout", ["Arbiter", "ArbiterMixin", "DataStore", "Event", "Keys", "arrayContains", "mixin", "removeFromArray", "shield"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = m(h);
    for (var q in p)
        if (p.hasOwnProperty(q))
            s[q] = p[q];
    var r = p === null ? null: p.prototype;
    s.prototype = Object.create(r);
    s.prototype.constructor = s;
    s.__superConstructor__ = p;
    function s(t, u, v, w) {
        "use strict";
        if (t) {
            this._showDelay = v;
            this._hideDelay = w;
            this.init(t);
            if (u)
                this.initNode(u);
        }
        g.subscribe('SwapButtonDEPRECATED/focusOnJoinButton', o(this.hideFlyout, this), g.SUBSCRIBE_ALL);
    }
    s.prototype.init = function(t) {
        "use strict";
        this._flyout = t;
        this._showDelay = this._showDelay || 0;
        this._hideDelay = this._hideDelay || 100;
        this._showTimeout = null;
        this._hideTimeout = null;
        this._flyoutSubscriptions = [this._flyout.subscribe('mouseenter', this._onFlyoutMouseEnter.bind(this)), this._flyout.subscribe('mouseleave', o(this.hideFlyout, this))];
        this._nodes = [];
        this._dataStoreUnique = 'HoverFlyout_' + Date.now() + '_listeners';
        return this;
    };
    s.prototype.initNode = function(t) {
        "use strict";
        if (l(this._nodes, t))
            return this;
        this._nodes.push(t);
        i.set(t, this._dataStoreUnique, [j.listen(t, 'mouseenter', this._onNodeMouseEnter.bind(this, t)), j.listen(t, 'mouseleave', o(this.hideFlyout, this)), j.listen(t, 'click', this._onNodeMouseEnter.bind(this, t)), j.listen(t, 'keydown', this._onNodeKeyEscape.bind(this))]);
        return this;
    };
    s.prototype.deactivateNode = function(t) {
        "use strict";
        var u = i.get(t, this._dataStoreUnique);
        if (u)
            while (u.length)
                u.pop().remove();
        n(this._nodes, t);
    };
    s.prototype.setShowDelay = function(t) {
        "use strict";
        this._showDelay = t;
        return this;
    };
    s.prototype.setHideDelay = function(t) {
        "use strict";
        this._hideDelay = t;
        return this;
    };
    s.prototype.showFlyout = function(t, u) {
        "use strict";
        this.setActiveNode(t);
        if (u) {
            this._flyout.setContext(t).show();
            this.inform('show', t);
        } else 
            this._showTimeout = setTimeout(this.showFlyout.bind(this, t, true), this._showDelay);
        return this;
    };
    s.prototype.hideFlyout = function(t) {
        "use strict";
        clearTimeout(this._showTimeout);
        if (t) {
            this._flyout.hide();
            this._activeNode && this.inform('hide', this._activeNode);
            this._activeNode = null;
        } else 
            this._hideTimeout = setTimeout(this.hideFlyout.bind(this, true), this._hideDelay);
    };
    s.prototype.hideFlyoutDelayed = function(t) {
        "use strict";
        clearTimeout(this._showTimeout);
        clearTimeout(this._hideTimeout);
        this._hideTimeout = setTimeout(this.hideFlyout.bind(this, true), t);
    };
    s.prototype.getActiveNode = function() {
        "use strict";
        return this._activeNode;
    };
    s.prototype.setActiveNode = function(t) {
        "use strict";
        clearTimeout(this._hideTimeout);
        if (this._activeNode && this._activeNode !== t)
            this.hideFlyout(true);
        this._activeNode = t;
        return this;
    };
    s.prototype.clearNodes = function() {
        "use strict";
        for (var t = this._nodes.length; t > 0; t--)
            this.deactivateNode(this._nodes[t - 1]);
    };
    s.prototype.destroy = function() {
        "use strict";
        while (this._flyoutSubscriptions.length)
            this._flyout.unsubscribe(this._flyoutSubscriptions.pop());
        this.clearNodes();
    };
    s.prototype._onNodeMouseEnter = function(t) {
        "use strict";
        if (this._activeNode === t) {
            clearTimeout(this._hideTimeout);
        } else 
            this.showFlyout(t);
    };
    s.prototype._onFlyoutMouseEnter = function() {
        "use strict";
        clearTimeout(this._hideTimeout);
    };
    s.prototype._onNodeKeyEscape = function(event) {
        "use strict";
        if (j.getKeyCode(event) === k.ESC) {
            this._activeNode && this.inform('hide', this._activeNode);
            this._activeNode = null;
        }
    };
    e.exports = a.HoverFlyout || s;
}, null);
__d("VideoAutoplayPlayButton", ["CSS", "Event", "cx"], function(a, b, c, d, e, f, g, h, i) {
    var j = {}, k = {
        getClicked: function(l) {
            if (j.hasOwnProperty(l))
                return j[l].clicked;
            return false;
        },
        register: function(l, m, n) {
            j[l] = h.listen(m, 'click', function() {
                g.removeClass(m, "_5vos");
                g.show(n);
                j[l].clicked = true;
            });
        },
        unregister: function(l) {
            if (j.hasOwnProperty(l))
                j[l].remove();
        }
    };
    e.exports = k;
}, null);
