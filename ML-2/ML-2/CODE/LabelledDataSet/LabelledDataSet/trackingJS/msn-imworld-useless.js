
        require(["mediator", "c.deferred"], function (mediator)
        {
            var nielsenCid = "microsoft-au";
            require({ js: "//secure-au.imrworldwide.com/v60.js" }, ["window.nol_t"], function (nol_t)
            {
                var imageHashValue = window.location.hash ? window.location.hash.replace(/[#=]/g, '') : "image1";
                var previousUrl = escape("slide_MSN-" + imageHashValue + "-" + "" + "_" + window.location.href);;
                nielsenBeacon();
                if ("True" == "True")
                {
                    // The following will be generated by a slide or other non-page reload event.
                    mediator.sub("thirdPartyTrackingUpdate", nielsenSlideBeacon);
                }

                function nielsenBeacon()
                {
                    //START Nielsen Online SiteCensus V6.0
                    //COPYRIGHT 2012 Nielsen Online
                    var pvar = { cid: nielsenCid, content: "0", server: "secure-au" };
                    var feat = { check_cookie: 0 };
                    var trac = "secure-au" == "secure-it" ? nol_t(pvar, feat) : nol_t(pvar);
                    trac.record().post();
                };
                function nielsenSlideBeacon()
                {
                    // Only generate slide impressions for AU or NZ.
                    if ("secure-au" == "secure-au" || "secure-au" == "secure-nz") {
                        var referrerValue =previousUrl;
                        imageHashValue = window.location.hash.replace(/[#=]/g, '');
                        var currentUrl = window.location.href;
                        var slideDescription = escape("slide_MSN-" + imageHashValue + "-" + "" + "_" + currentUrl);
                        var beaconUrl = '//' + 'secure-au' + '.imrworldwide.com/cgi-bin/m?ci=' + nielsenCid + '&cg=' + '0' + '&si=' + slideDescription + '&rp=' + referrerValue + '&rnd=' + Math.ceil(Math.random() * 100000000);
                        new Image().src = beaconUrl;
                        previousUrl = slideDescription;
                    }
                };
            });
        });
    