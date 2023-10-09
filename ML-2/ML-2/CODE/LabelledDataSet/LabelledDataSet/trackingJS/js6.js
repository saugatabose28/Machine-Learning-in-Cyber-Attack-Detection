/* From: production-mt-wfe-49-81-use1 : 15870 */
huff.unit("br_fp", function(a) {
    huff.use("jquery", "cookies", function(c, b) {
        huff.js("sha1.js", c.browser.msie ? "PluginDetect.js" : "", function() {
            var k = new Date();
            var q = k.getTimezoneOffset() + ";" + screen.width + "x" + screen.height + "x" + screen.colorDepth;
            q += "|sessionStorage=" + (window.sessionStorage ? "Yes" : "No");
            q += "|localStorage=" + (window.localStorage || window.globalStorage ? "Yes" : "No");
            var l = document.createElement("DIV");
            q += "|userData=" + (l.addBehavior ? "Yes" : "No");
            var m = [];
            if (c.browser.msie) {
                var n = ["QuickTime", "DevalVR", "Shockwave", "Flash", "Windows Media Player", "Silverlight", "VLC Player", "Adobe PDF Reader", "RealPlayer"];
                for (var g = 0; g < n.length; g++) {
                    var h = PluginDetect.getVersion(n[g]);
                    h && m.push(n[g] + ";" + h)
                }
            } else {
                for (var g = 0; g < navigator.plugins.length; g++) {
                    var p = navigator.plugins[g];
                    var e = p.name + ";" + p.filename + ";" + p.description;
                    for (var f = 0; f < p.length; f++) {
                        var o = p[f];
                        e += ";" + o.type + ";" + o.description + ";" + o.suffixes;
                        e += ";" + ((o.enabledPlugin && (o.enabledPlugin.name == p.name)) ? "Enabled" : "Disabled")
                    }
                    m.push(e)
                }
            }
            m.sort();
            for (g = 0; g < m.length; g++) {
                q += "|" + m[g]
            }
            b.set("br_fp", hex_sha1(q), {
                path: "/",
                domain: window.location.hostname.replace(/www\./, "")
            })
        })
    })
});

/* From: production-mt-wfe-49-81-use1 : 15870 */
/* a67cccb80cc3039a0690e1b0fd4d00024bd9b3fa */
