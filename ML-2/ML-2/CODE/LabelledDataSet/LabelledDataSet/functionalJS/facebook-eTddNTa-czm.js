/*!CK:1417989067!*/
/*1401158028,178146385*/

if (self.CavalryLogger) {
    CavalryLogger.start_js(["oGZW7"]);
}

__d("AdwareScaner", ["AsyncSignal", "URI", "createArrayFrom", "ge", "isEmpty"], function(a, b, c, d, e, f, g, h, i, j, k) {
    var l = {
        max_scan_count: 2,
        scan_count: 0,
        scan_timeout: 10000,
        scan_depth: 2,
        fb_domains: null,
        extern_src_res: [],
        adware_elements: [],
        malware_functions: [],
        selective_scan_elements: [],
        adwares_found: [],
        malwares_found: [],
        selective_scan_results: [],
        browser_extensions: [],
        extensions_found: {},
        init: function(m, n, o, p, q, r) {
            setTimeout(l.runScan.bind(l), 1000);
            this.fb_domains = i(m);
            this.adware_elements = n;
            this.malware_functions = o;
            this.selective_scan_elements = p;
            this.max_scan_count = q.max_scan_count || this.max_scan_count;
            this.scan_timeout = q.scan_timeout || this.scan_timeout;
            this.scan_depth = q.scan_depth || this.scan_depth;
            this.browser_extensions = r;
        },
        runScan: function() {
            this.scan_count++;
            this.checkAdwareElements(this.adware_elements);
            this.checkMalwareFunctions(this.malware_functions);
            if (this.fb_domains.length > 0)
                if (!k(this.selective_scan_elements)) {
                    this.selectiveDOMScan(this.selective_scan_elements, this.scan_depth);
                } else 
                    this.scanDOM();
            if (!k(this.browser_extensions))
                this.lookup_extensions(this.browser_extensions);
            this.pingBack(this.extern_src_res, this.adwares_found, this.malwares_found, this.selective_scan_results, this.extensions_found);
            if (this.scan_count < this.max_scan_count)
                setTimeout(l.runScan.bind(l), this.scan_timeout * this.scan_count);
            this.extern_src_res = [];
            this.adwares_found = [];
            this.malwares_found = [];
        },
        lookup_extensions: function(m) {
            for (var n in m) {
                var o = m[n];
                for (var p = 0; p < o.length; p++)
                    this.check_resource(n, o[p], function(q) {
                        l.extensions_found[q] = 1;
                    }, function(q) {});
            }
        },
        check_resource: function(m, n, o, p) {
            var q = document.createElement('script');
            q.onload = function() {
                o(m);
            };
            q.onerror = function() {
                p(m);
            };
            document.body.appendChild(q);
            q.src = n;
        },
        selectiveDOMScan: function(m, n) {
            for (var o in m) {
                var p = m[o];
                for (var q = 0; q < p.length; q++) {
                    var r = {}, s = j(p[q]), t = this.recursiveSelectiveDOMScan(s, 0);
                    if (t) {
                        r.adware_id = o;
                        r.node_id = p[q];
                        r.extern_src = t.src;
                        r.tag_name = t.tag_name;
                        l.selective_scan_results.push(r);
                        break;
                    }
                }
            }
        },
        recursiveSelectiveDOMScan: function(m, n) {
            if (n == this.scan_depth || m == null)
                return null;
            if (m.src && this.checkSource(m.src)) {
                return {
                    tag_name: m.tagName,
                    src: m.src
                };
            } else 
                for (var o = 0; o < m.childNodes.length; o++) {
                    var p = m.childNodes[o], q = this.recursiveSelectiveDOMScan(p, n + 1);
                    if (q)
                        return q;
                }
            return null;
        },
        scanDOM: function() {
            var m = document.documentElement.getElementsByTagName('*');
            for (var n = 0; n < m.length; n++) {
                var o = m[n];
                if (o.src && this.checkSource(o.src))
                    this.extern_src_res.push(o.src);
            }
        },
        checkSource: function(m) {
            var n = new h(m);
            for (var o = 0; o < this.fb_domains.length; o++) {
                var p = new RegExp(this.fb_domains[o], 'i');
                if (p.test(n.getDomain()))
                    return false;
            }
            return true;
        },
        checkAdwareElements: function(m) {
            for (var n in m) {
                var o = m[n];
                for (var p = 0; p < o.length; p++)
                    if (j(o[p])) {
                        l.adwares_found.push(n);
                        break;
                    }
            }
        },
        checkMalwareFunctions: function(m) {
            for (var n in m) {
                var o = m[n];
                for (var p = 0; p < o.length; p++)
                    if (o[p] in window) {
                        l.malwares_found.push(n);
                        break;
                    }
            }
        },
        pingBack: function(m, n, o, p, q) {
            var r = {};
            if (m.length)
                r.external_src = m;
            if (n.length)
                r.adwares_found = n;
            if (o.length)
                r.malwares_found = o;
            if (p.length)
                r.selective_scan_results = p;
            if (!k(q)) {
                var s = [];
                for (var t in q)
                    s.push(t);
                r.browser_extensions = s;
            }
            if (!k(r)) {
                var u = JSON.stringify(r), v = new h('/si/ajax/a_crane_wanders').getQualifiedURI().toString();
                new g(v, {
                    p: u
                }).send();
            }
        }
    };
    e.exports = l;
}, null);
