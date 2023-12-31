/*!CK:4136863800!*/
/*1415591712,*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["F0cgP"]);
}

__d("LeftNavDragNUX.react", ["ContextualDialog", "ContextualDialogArrow", "LayerAutoFocus", "LayerRefocusOnHide", "ReactLayer", "React", "cx", "fbt"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    "use strict";
    var o = l.PropTypes, p = k.createClass({
        displayName: 'LeftNavDragNUX',
        createLayer: function(r) {
            var s = this.props.nuxType !== 'remove' ? "_53lz": "_53l-", t = this.getContextNode(), u = {
                wrapperClassName: s,
                arrowDimensions: {
                    offset: 14,
                    length: 18
                }
            }, v = {
                alignment: this.props.alignment,
                arrowBehavior: h,
                context: t,
                offsetX: this.props.offsetX,
                offsetY: this.props.offsetY,
                position: this.props.position,
                theme: u
            }, w = new g(v, r);
            w.disableBehavior(i);
            w.disableBehavior(j);
            w.conditionShow(this.props.shown);
            return w;
        },
        receiveProps: function(r) {
            var s = this.getContextNode();
            this.layer.setContext(s);
            this.layer.setPosition(r.position).setAlignment(r.alignment).setOffsetX(r.offsetX).setOffsetY(r.offsetY).conditionShow(r.shown);
        },
        getContextNode: function() {
            var r = this.props.owner.getSiblingByRef(this.props.contextRef);
            return r && r.getDOMNode();
        }
    }), q = l.createClass({
        displayName: "LeftNavDragNUX",
        propTypes: {
            contextRef: o.string,
            nuxType: o.oneOf(['add', 'sort', 'remove', null, undefined]),
            alignment: o.oneOf(['left', 'center', 'right']),
            offsetX: o.number,
            offsetY: o.number
        },
        render: function() {
            var r = this.props, s = r.nuxType, t = (function(v, w) {
                var x = {}, y = Object.prototype.hasOwnProperty;
                if (v == null)
                    throw new TypeError();
                for (var z in v)
                    if (y.call(v, z)&&!y.call(w, z))
                        x[z] = v[z];
                return x;
            })(r, {
                nuxType: 1
            }), u = null;
            switch (s) {
            case 'add':
                u = "Add to Favorites";
                break;
            case 'sort':
                u = "Rearrange";
                break;
            case 'remove':
                u = "Remove from Favorites";
                break;
            case null:
                return null;
            case undefined:
                return null;
            }
            return (l.createElement(p, l.__spread({}, t, {
                className: "dragTooltip",
                shown: s !== null,
                owner: this,
                nuxType: s
            }), u));
        }
    });
    e.exports = q;
}, null);
