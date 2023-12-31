/*!CK:1117850940!*/
/*1415599373,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["LguNw"]);
}

__d("BookmarkPopoverMenu.react", ["React", "PopoverMenu.react", "ReactXUIMenu", "MenuSeparator.react", "Link.react", "cx", "Arbiter"], function(a, b, c, d, e, f, g, h, i, j, k, l, m) {
    "use strict";
    var n = i.Item, o = g.createClass({
        displayName: "BookmarkPopoverMenu",
        render: function() {
            var p = this._renderMenuContent();
            if (p.length === 0)
                return null;
            var q = g.createElement(i, null, p), r = g.createElement(k, {
                href: "#",
                title: "Edit",
                "aria-label": "Edit",
                className: "_1wc5 _26tg accessible_elem"
            });
            return (g.createElement("div", {
                className: "buttonWrap"
            }, g.createElement(h, {
                className: "uiSideNavEditButton",
                menu: q
            }, r)));
        },
        _renderMenuContent: function() {
            var p = this.props.navItem, q = this.props.navSection, r = this.props.editmenu, s = p.props.model.pinned, t = q.props.id === 'pinnedNav', u = [];
            if (r.favoriteOption) {
                var v = s ? r.favoriteOption.title.unfavorite: r.favoriteOption.title.favorite;
                u.push(g.createElement(n, {
                    onclick: this._toggleFavorite,
                    key: "menu_favorite"
                }, v));
            }
            if (t && r.rearrangeOption)
                u.push(g.createElement(n, {
                    onclick: this._toggleEditMode,
                    key: "menu_edit"
                }, r.rearrangeOption.title));
            if (r.hideOption)
                u.push(this._renderAjaxMenuItem(r.hideOption, 'menu_hide_option'));
            if (r.editOption)
                u.push(this._renderAjaxMenuItem(r.editOption, 'menu_edit_option'));
            if (r.deleteOption) {
                if (u.length !== 0)
                    u.push(g.createElement(j, {
                        key: "menu_sep"
                    }));
                u.push(this._renderAjaxMenuItem(r.deleteOption, 'menu_delete_option'));
            }
            return u;
        },
        _renderAjaxMenuItem: function(p, q) {
            return (g.createElement(n, {
                href: p.href,
                ajaxify: p.ajaxify,
                rel: p.rel,
                key: q
            }, p.title));
        },
        _toggleFavorite: function() {
            var p = this.props.navItem;
            m.inform('LeftNavController/toggleFavorite', p.props.model.id);
        },
        _toggleEditMode: function() {
            m.inform('LeftNavDragController/toggleEditMode', {
                section: this.props.navSection
            });
        }
    });
    e.exports = o;
}, null);
