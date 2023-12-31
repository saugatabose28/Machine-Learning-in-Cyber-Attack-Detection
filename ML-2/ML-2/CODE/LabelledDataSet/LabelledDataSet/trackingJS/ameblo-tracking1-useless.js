document.open();
document.writeln('<sc' + 'ript type="text/javasc' + 'ript">');
document.writeln('<!--');
document.writeln('var blade_co_account_id=\'1909\';');
document.writeln('var blade_group_id=\'\';');
document.writeln('-->');
document.writeln('</sc' + 'ript>');
document.writeln('<sc' + 'ript type="text/javasc' + 'ript">');
document.writeln('(function(){');
document.writeln('');
document.writeln('	function track_host() {');
document.writeln('		var track_host="http://d-track.send.microad.jp";');
document.writeln('		if(document.location.protocol=="https:"){');
document.writeln('			track_host="https://d-track.send.microad.jp";');
document.writeln('		}');
document.writeln('		return track_host;');
document.writeln('	}');
document.writeln('');
document.writeln('	function pc_track(co_account_id, group_id, country_id, version) {');
document.writeln('		var encode_url=escape(document.referrer);');
document.writeln('		var blade_query="co_account_id="+co_account_id+"&group="+group_id+"&country_id="+country_id+"&ver="+version+"&referrer="+encode_url;');
document.writeln('		var blade_url=track_host()+"/bl_track.cgi?"+blade_query;');
document.writeln('		var blade_target=new Image();');
document.writeln('		blade_target.src=blade_url;');
document.writeln('	}');
document.writeln('');
document.writeln('	function sp_track(co_account_id, group_id) {');
document.writeln('');
document.writeln('		var init = function () {');
document.writeln('			var microadDevice = new MicroadBladeDevice(navigator.userAgent);');
document.writeln('			if (microadDevice) {');
document.writeln('				new BladeSponsorAccess(co_account_id, group_id, microadDevice, track_host());');
document.writeln('			}');
document.writeln('		};');
document.writeln('');
document.writeln('		var jsList=[];');
document.writeln('		var loader = function () {');
document.writeln('			var o = jsList.length;');
document.writeln('			for (var i = 0; i < jsList.length; i++) {');
document.writeln('				var s = document.createElement(\'sc' + 'ript\');');
document.writeln('				s.type = \'text/javasc' + 'ript\';');
document.writeln('				s.charset = \'utf-8\';');
document.writeln('				s.src = jsList[i];');
document.writeln('				s.onload = function () {');
document.writeln('					o--;');
document.writeln('					if(o == 0) init();');
document.writeln('				};');
document.writeln('				document.body.appendChild(s);');
document.writeln('			}');
document.writeln('		};');
document.writeln('		var jsURI="http://d-cache.microad.jp";');
document.writeln('		if(document.location.protocol=="https:"){');
document.writeln('			jsURI="https://d-track.send.microad.jp";');
document.writeln('		}');
document.writeln('		jsList.push(jsURI+"/js/device.js");');
document.writeln('		jsList.push(jsURI+"/js/sponsor.js");');
document.writeln('		jsList.push(jsURI+"/js/prefs.js");');
document.writeln('		if (document.readyState === \'loading\') {');
document.writeln('			document.addEventListener(\'DOMContentLoaded\', loader, true);');
document.writeln('		} else {');
document.writeln('			loader();');
document.writeln('		}');
document.writeln('	}');
document.writeln('	');
document.writeln('	function bl_track(co_account_id, group_id, country_id, version) {');
document.writeln('		if(/(iPhone|iPod|iPad|Android)/.test(navigator.userAgent)){');
document.writeln('			sp_track(co_account_id, group_id);');
document.writeln('		} else {');
document.writeln('			pc_track(co_account_id, group_id, country_id, version);');
document.writeln('		}');
document.writeln('	}	');
document.writeln('');
document.writeln('	function parse_blade_sc' + 'ript() {');
document.writeln('		var sc' + 'ripts = document.getElementsByTagName(\'sc' + 'ript\');');
document.writeln('		');
document.writeln('		var target_params = new Array();');
document.writeln('		');
document.writeln('		for (var i = 0; i < sc' + 'ripts.length; i++) {');
document.writeln('			if (document.getElementsByTagName(\'sc' + 'ript\')[i].innerHTML.indexOf(\'blade_\',0)>-1 && document.getElementsByTagName(\'sc' + 'ript\')[i].innerHTML.match(/.*blade_co_account_id[ |\\t]*=[ |\\t]*[\\\'|\\"](\\d+)[\\\'|\\"].*[\\s|.]*.*blade_group_id[ |\\t]*=[ |\\t]*[\\\'|\\"](\\w*)[\\\'|\\"].*/)) {');
document.writeln('				var target_param = new Object();');
document.writeln('				target_param[\'blade_co_account_id\'] = RegExp.$1;');
document.writeln('				target_param[\'blade_group_id\'] = RegExp.$2;');
document.writeln('				target_params.push(target_param);');
document.writeln('			}');
document.writeln('		}');
document.writeln('');
document.writeln('		if (typeof blade_complete_params == \'undefined\') {');
document.writeln('			blade_complete_params = new Object();');
document.writeln('		}');
document.writeln('		');
document.writeln('		for (var i = 0; i < target_params.length; i++) {');
document.writeln('			var target_blade_co_account_id = target_params[i].blade_co_account_id;');
document.writeln('			var target_blade_group_id = target_params[i].blade_group_id;');
document.writeln('			var country_id = \'1\';');
document.writeln('			var version = \'\';');
document.writeln('			');
document.writeln('			var key = target_blade_co_account_id + \'_\' + target_blade_group_id;');
document.writeln('			if (key in blade_complete_params) {');
document.writeln('				continue;');
document.writeln('			}');
document.writeln('			');
document.writeln('			bl_track(target_blade_co_account_id, target_blade_group_id, country_id, version);');
document.writeln('			');
document.writeln('			blade_complete_params[key] = target_params[i];');
document.writeln('			break;');
document.writeln('		}');
document.writeln('	}');
document.writeln('');
document.writeln('	parse_blade_sc' + 'ript();');
document.writeln('');
document.writeln('})();');
document.writeln('</sc' + 'ript>');
document.writeln('<!-- Advertiser \'GMO AD Partners, Inc.\',  Include user in segment \'CyberAgent(Amebapigg)_RT_TOP\' - DO NOT MODIFY THIS PIXEL IN ANY WAY -->');
document.writeln('<img src="http://ad.adresult.jp/pixel?id=1968650&t=2" width="1" height="1" />');
document.writeln('<!-- End of segment tag -->');
document.close();