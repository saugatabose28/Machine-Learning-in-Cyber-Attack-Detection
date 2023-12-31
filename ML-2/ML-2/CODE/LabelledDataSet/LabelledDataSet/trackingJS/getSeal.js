<!--

	seal_installSeal();
	
	function seal_getFlashVersion() {
		var version = 0;
		if (navigator.plugins && navigator.mimeTypes.length) {
			var plugin = navigator.plugins["Shockwave Flash"];
			if (plugin && plugin.description) {
				version = parseInt(plugin.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split(".")[0]);
			}
		}
		else {
			try {
				var flashObj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
			}
			catch (e) {
				try {
					var flashObj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
					version = 6;
					flashObj.AllowScriptAccess = "always";
				}
				catch (e) {
					if (version == 6) {
						return version;
					}
				}
				try {
					flashObj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
				}
				catch (e) {}
			}
			if (flashObj != null) {
				version = parseInt(flashObj.GetVariable("$version").split(" ")[1].split(",")[0]);
			}
		}
		return version;
	}
	
	function seal_useFlash() {
		var minVersion = 8;
		var resellerId = "1";
		var sealVersion = "3";
		var useFlashPref = "false";
		
		return useFlashPref == "true" && (resellerId == "1" || sealVersion == "0") && self == top && minVersion <= seal_getFlashVersion();
	}
	
	function seal_installSeal() {
		var commonName = "petmountain.com";
		var org = "null";
		var resellerId = "1";
		var sealVersion = "3";
		var isEV = "false";
		var requiresFilter = "false";
		var sealName = "siteseal_gd_3_h_l_m";
		var flashUrl = "https:\/\/seal.godaddy.com\/flash\/3\/en\/siteseal_gd_3_h_l_m.swf";
		var imageUrl = "https:\/\/seal.godaddy.com\/images\/3\/en\/siteseal_gd_3_h_l_m.gif";
		var sealType = "dv";
		
		if (seal_useFlash()) {
	        var sealWidth = "null";
	        var sealHeight = "null";
	        
			document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,0,0" width="' + sealWidth + '" height="' + sealHeight + '" id="' + sealName + '" align="middle">');
			document.write('<param name="movie" value="' + flashUrl);
			
			if (sealVersion == "0" && sealType == "dv")
				document.write('?domainName=' + commonName + '&color=000000');
			else if (sealVersion == "0" && (sealType == "iv" || sealType == "ev"))
				document.write('?companyName=' + commonName + ' - ' + org);
				
			document.write('" />');
			document.write('<param name="quality" value="high" />');
			document.write('<param name="AllowScriptAccess" value="always" />');
			
			if (sealVersion == "0" && (sealType == "iv" || sealType == "ev"))
				document.write('<param name="bgcolor" value="#333333" />');
			else
				document.write('<param name="wmode" value="transparent" />');
				
			document.write('<embed src="' + flashUrl);
			
			if (sealVersion == "0" && (sealType == "iv" || sealType == "ev"))
				document.write('?companyName=' + commonName + ' - ' + org + '" bgcolor="#333333"');
			else {
				if (sealVersion == "0" && sealType == "dv")
					document.write('?domainName=' + commonName + '&color=000000');
				document.write('" wmode="transparent"');
			}
			
			document.write(' quality="high" width="' + sealWidth + '" height="' + sealHeight + '" name="' + sealName + '" align="middle" type="application/x-shockwave-flash" pluginspage="https://www.macromedia.com/go/getflashplayer" AllowScriptAccess="always" />');
			document.write('</object>');
		}
		else if (requiresFilter == "true" && document.body && document.body.filters)
			document.write('<span style="display:inline-block;cursor:pointer;cursor:hand;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + imageUrl + '\', sizingMethod=\'crop\');" onclick="verifySeal();"></span>');
		else
			document.write('<img style="cursor:pointer;cursor:hand" src="' + imageUrl + '" onclick="verifySeal();"/>');
	
		if (isEV == "true") {
			document.write('<img src="https://evbeacon.godaddy.com/images/spacer.gif"/>');
		}
	}
	
	function verifySeal() {
		var bgHeight = "460";
		var bgWidth = "593";
		var url = "https:\/\/seal.godaddy.com\/verifySeal?sealID=TXVvR3MyENGOhMx6peSOA293UNxCcRxktCagWh1IPNFlJyGjgJe";
		window.open(url,'SealVerfication','menubar=no,toolbar=no,personalbar=no,location=yes,status=no,resizable=yes,fullscreen=no,scrollbars=no,width=' + bgWidth + ',height=' + bgHeight);
	}
	
	function seal_locateLink(sealId) {
		try {
			var sealSpan = document.getElementById("siteseal");
			if (sealSpan) {
				var found = false;
				var anchors = sealSpan.getElementsByTagName("a");
				if (anchors) {
					var p = /godaddy.com/i;
					for (var i = 0; i < anchors.length; i++) {
						if (p.test(anchors[i].href)) {
							found = true;
							break;
						}
					}
				}
				seal_callbackUsesLink(found);
			}
			
		} catch (err) {
			// eat
		}
	}
	
	function seal_callbackUsesLink(usesLink) {
		try {
			if (window.XMLHttpRequest && !(/WebKit/.test(navigator.userAgent))) {
				var xmlhttp=new XMLHttpRequest();
				xmlhttp.open("GET", "https:\/\/seal.godaddy.com\/setSealAttr?sealID=TXVvR3MyENGOhMx6peSOA293UNxCcRxktCagWh1IPNFlJyGjgJe\x26usesLink=" + usesLink + "&t=" + Math.random(), true);
				xmlhttp.send();
			}
		} catch (err) {
			// eat
		}
	}
	

var ready = (function(){    

    var readyList,
        DOMContentLoaded,
        class2type = {};
        class2type["[object Boolean]"] = "boolean";
        class2type["[object Number]"] = "number";
        class2type["[object String]"] = "string";
        class2type["[object Function]"] = "function";
        class2type["[object Array]"] = "array";
        class2type["[object Date]"] = "date";
        class2type["[object RegExp]"] = "regexp";
        class2type["[object Object]"] = "object";

    var ReadyObj = {
        isReady: false,
        readyWait: 1,
        holdReady: function( hold ) {
            if ( hold ) {
                ReadyObj.readyWait++;
            } else {
                ReadyObj.ready( true );
            }
        },
        ready: function( wait ) {
            if ( (wait === true && !--ReadyObj.readyWait) || (wait !== true && !ReadyObj.isReady) ) {
                if ( !document.body ) {
                    return setTimeout( ReadyObj.ready, 1 );
                }

                ReadyObj.isReady = true;
                if ( wait !== true && --ReadyObj.readyWait > 0 ) {
                    return;
                }
                readyList.resolveWith( document, [ ReadyObj ] );
            }
        },
        bindReady: function() {
            if ( readyList ) {
                return;
            }
            readyList = ReadyObj._Deferred();

            if ( document.readyState === "complete" ) {
                return setTimeout( ReadyObj.ready, 1 );
            }

            if ( document.addEventListener ) {
                document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );
                window.addEventListener( "load", ReadyObj.ready, false );
            } else if ( document.attachEvent ) {
                document.attachEvent( "onreadystatechange", DOMContentLoaded );
                window.attachEvent( "onload", ReadyObj.ready );

                var toplevel = false;
                try {
                    toplevel = window.frameElement == null;
                } catch(e) {}

                if ( document.documentElement.doScroll && toplevel ) {
                    doScrollCheck();
                }
            }
        },
        _Deferred: function() {
            var callbacks = [],
                fired,
                firing,
                cancelled,
                deferred  = {

                    done: function() {
                        if ( !cancelled ) {
                            var args = arguments,
                                i,
                                length,
                                elem,
                                type,
                                _fired;
                            if ( fired ) {
                                _fired = fired;
                                fired = 0;
                            }
                            for ( i = 0, length = args.length; i < length; i++ ) {
                                elem = args[ i ];
                                type = ReadyObj.type( elem );
                                if ( type === "array" ) {
                                    deferred.done.apply( deferred, elem );
                                } else if ( type === "function" ) {
                                    callbacks.push( elem );
                                }
                            }
                            if ( _fired ) {
                                deferred.resolveWith( _fired[ 0 ], _fired[ 1 ] );
                            }
                        }
                        return this;
                    },

                    resolveWith: function( context, args ) {
                        if ( !cancelled && !fired && !firing ) {
                            args = args || [];
                            firing = 1;
                            try {
                                while( callbacks[ 0 ] ) {
                                    callbacks.shift().apply( context, args );
                                }
                            }
                            finally {
                                fired = [ context, args ];
                                firing = 0;
                            }
                        }
                        return this;
                    },

                    resolve: function() {
                        deferred.resolveWith( this, arguments );
                        return this;
                    },

                    isResolved: function() {
                        return !!( firing || fired );
                    },

                    cancel: function() {
                        cancelled = 1;
                        callbacks = [];
                        return this;
                    }
                };

            return deferred;
        },
        type: function( obj ) {
            return obj == null ?
                String( obj ) :
                class2type[ Object.prototype.toString.call(obj) ] || "object";
        }
    }
    function doScrollCheck() {
        if ( ReadyObj.isReady ) {
            return;
        }

        try {
            document.documentElement.doScroll("left");
        } catch(e) {
            setTimeout( doScrollCheck, 1 );
            return;
        }

        ReadyObj.ready();
    }
    if ( document.addEventListener ) {
        DOMContentLoaded = function() {
            document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
            ReadyObj.ready();
        };

    } else if ( document.attachEvent ) {
        DOMContentLoaded = function() {
            if ( document.readyState === "complete" ) {
                document.detachEvent( "onreadystatechange", DOMContentLoaded );
                ReadyObj.ready();
            }
        };
    }
    function ready( fn ) {
        ReadyObj.bindReady();

        var type = ReadyObj.type( fn );

        readyList.done( fn );//readyList is result of _Deferred()
    }
    return ready;
})();

	ready(seal_locateLink);
// -->