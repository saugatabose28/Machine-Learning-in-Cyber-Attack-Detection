

	// http://tap.rubiconproject.com/partner/agent/rubicon/channels.js?cb=oz_onPixelsLoaded
	function oz_onPixelsLoaded(profile) {
		if (profile && profile.pixels) {
			var uri;
			for (var i=0; i < profile.pixels.length; i++) {
				uri = profile.pixels[i].url;
				if (uri && (uri.indexOf("http") == 0)) {
					new Image().src = uri;
				}
			}
		}
	}
	
	function getReferrer() {
		var ref;
		
		var href = document.referrer;
        try {
            if (typeof window.parent.location.href == "string" && window.parent.location.href.substr(0, 4) == "http") {
            	href = top.location.href || href;
            } 
         } catch (ignore) { }            		
    	
    	if (href && href.length > 0) {
        	 ref = escape(href);
    	}

    	return ref;
	}
	
	function setCookie(name,value,days) {
		var expires ;
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			expires = "; expires="+date.toGMTString();
		}
		else expires = "";
		document.cookie = name+"="+escape(value)+expires+"; path=/";
	}
	
	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') 
				c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) 
				return unescape(c.substring(nameEQ.length,c.length));
		}
		return null;
	}
	
	function addScriptAsync(url,id)
	{
		var script;
		script = document.createElement("script");
		if (id)
			script.setAttribute("id",id);
		script.setAttribute("type","text/javascript");
		url = url.replace(/\s/g,'+');
		script.setAttribute("src",url);

		document.getElementsByTagName("head").item(0).appendChild(script);
	}

	function addScript(url,id)
	{
		var html = '<scr'+'ipt type="text/javascript" SRC="'+url+'"></scr'+'ipt>';
		document.write(html);
	}
	
	function mergeProperties(dest,defaults)
	{
		if (typeof(dest) == "undefined" || !dest)
			return defaults;

		if (typeof(defaults) == "undefined" || !defaults)
			return dest;

		for (var name in defaults)
		{
			if (!defaults.hasOwnProperty(name))
				continue;
			if (typeof dest[name] == "undefined")
				dest[name] = defaults[name];
		}
		return dest;
	}

	var rtb_sync = {};
	var rtb_site_sync = {};
	var rtb_pixel_set = ["rtb","aud","nets","pubs"];
	var request_region = "as";
	var request_country = "au";
	

	rtb_pixel_set = ["rtb","rtb_ext","aud","nets","pubs"];



	rtb_sync = {"ttl":14,"resync":1,"sample":100,"max_pixels":8,"pixel_sets":{"rtb":{"sample":100,"pixels":{"1185":{"pingdom_id":"399235","ttl":7,"resync":1,"iframe":"http://ad.turn.com/server/pixel.htm?fpid=6&sp=y","priority":10,"partner":"turn"},"2100":{"pingdom_id":"399228","img":"http://cm.netseer.com/redirect?ex=11","secure":{"img":"https://cm.netseer.com/redirect?ex=11"},"partner":"netseer"},"1512":{"pingdom_id":"399231","ttl":7,"resync":1,"img":"http://sync.mathtag.com/sync/img?mt_exid=9","priority":10,"secure":{"img":"https://sync.mathtag.com/sync/img?mt_exid=9&redir=https%3A%2F%2Fpixel.rubiconproject.com%2Ftap.php%3Fv%3D4222%26nid%3D1512%26put%3D%5BMM_UUID%5D"},"partner":"mediamath"},"1902":{"pingdom_id":"399224","ttl":2,"img":"http://pixel.quantserve.com/pixel/p-e4m3Yko6bFYVc.gif?idmatch=0","secure":{"img":"https://pixel.quantserve.com/pixel/p-e4m3Yko6bFYVc.gif?idmatch=0"},"partner":"quantcast"},"1430":{"pingdom_id":"399236","img":"http://a.triggit.com/pxrucm","secure":{"img":"https://a.triggit.com/pxrucm"},"partner":"triggit"},"1994":{"pingdom_id":"399239","img":"http://map.media6degrees.com/orbserv/hbpix?pixId=4857","partner":"dstillery"},"1197":{"pingdom_id":"399234","img":"http://sync.tidaltv.com/GenericUserSync.ashx?dpid=695","secure":{"img":"https://sync.tidaltv.com/GenericUserSync.ashx?dpid=695"},"partner":"lucidmedia"},"1986":{"pingdom_id":"399240","ttl":7,"resync":1,"img":"http://ib.adnxs.com/getuidnb?http%3A%2F%2Fpixel.rubiconproject.com%2Ftap.php%3Fv%3D4894%26nid%3D1986%26put%3D$UID%26expires%3D30","priority":10,"secure":{"img":"https://secure.adnxs.com/getuidnb?https%3A%2F%2Fpixel.rubiconproject.com%2Ftap.php%3Fv%3D4894%26nid%3D1986%26put%3D$UID%26expires%3D30"},"partner":"appnexus"},"w55c":{"pingdom_id":"399222","ttl":7,"sample":100,"img":"http://i.w55c.net/ping_match.gif?ei=RUBICON&rurl=http%3A%2F%2Fpixel.rubiconproject.com%2Ftap.php%3Fv%3D4210%26nid%3D1523%26put%3D_wfivefivec_%26expires%3D30","secure":{"img":"https://i.w55c.net/ping_match.gif?ei=RUBICON&rurl=https%3A%2F%2Fpixel.rubiconproject.com%2Ftap.php%3Fv%3D4210%26nid%3D1523%26put%3D_wfivefivec_%26expires%3D30"},"partner":"dataxu"},"2084":{"pingdom_id":"399223","img":"http://pcm3.map.pulsemgr.com/uds/pc?ptnr=21280&sig=6f737abf3f6bb5f84a1ad1dc0be05ab8","region":["na"],"partner":"ad-com-dynamic-retargeter"},"2132":{"pingdom_id":"399225","img":"http://um.simpli.fi/rb_match","partner":"simpli.fi"},"2081":{"pingdom_id":"399219","img":"http://m.xp1.ru4.com/activity?_o=62795&_t=cm_rub_pre","partner":"xplusone"},"2025":{"pingdom_id":"399233","img":"http://www.wtp101.com/pull_sync?pid=rubicon","secure":{"img":"https://www.wtp101.com/pull_sync?pid=rubicon"},"partner":"digilant"},"2249":{"pingdom_id":"399227","ttl":7,"resync":1,"img":"http://cm.g.doubleclick.net/pixel?google_nid=rubicon&google_cm&google_sc","priority":10,"secure":{"img":"https://cm.g.doubleclick.net/pixel?google_nid=rubicon&google_cm&google_sc"},"partner":"dbm"},"2046":{"pingdom_id":"399237","ttl":7,"img":"http://tap.rubiconproject.com/oz/feeds/dotomi-rtb/tokens/?rt=pixel","partner":"conversant"},"2245":{"pingdom_id":"399220","img":"http://rc.d.chango.com/m/rc","secure":{"img":"https://cc.chango.com/m/rc"},"partner":"chango"},"2271":{"pingdom_id":"399241","img":"http://rp.gwallet.com/r1/ruum","partner":"radiumone"},"2135":{"pingdom_id":"405200","img":"http://d5p.de17a.com/cookies/rubicon","partner":"delta-rtb","country":["se","dk","nl","de","fi","no"]},"2307":{"pingdom_id":"426695","img":"http://match.adsrvr.org/track/cmf/rubicon","secure":{"img":"https://match.adsrvr.org/track/cmf/rubicon"},"partner":"thetradedesk"},"2323":{"pingdom_id":"437827","img":"http://relestar.com/cs?p=ri","partner":"relevad"},"2395":{"pingdom_id":"514755","img":"http://px.owneriq.net/erb","secure":{"img":"https://px.owneriq.net/erb"},"partner":"owner-iq"},"2181":{"pingdom_id":"527817","img":"http://pixel.everesttech.net/1/gr?url=http%3a//pixel.rubiconproject.com/tap.php%3fv%3d11782%7c1%7c14%26nid%3d2181%26put%3d__EFGCK__%26expires%3d14","secure":{"img":"https://pixel.everesttech.net/1/gr?url=https%3a//pixel.rubiconproject.com/tap.php%3fv%3d11782%7c1%7c14%26nid%3d2181%26put%3d__EFGCK__%26expires%3d14"},"partner":"adobe"},"2054":{"pingdom_id":"528872","resync":1,"img":"http://dis.criteo.com/dis/usersync.aspx?r=6&p=2&cp=rubiconus&url=http%3A%2F%2Fpixel.rubiconproject.com%2Ftap.php%3Fv%3D5421%26nid%3D2054%26put%3D%40%40CRITEO_USERID%40%40%26expires%3D30","region":["na"],"secure":{"img":"https://dis.criteo.com/dis/usersync.aspx?r=6&p=2&cp=rubiconus&url=https%3A%2F%2Fpixel.rubiconproject.com%2Ftap.php%3Fv%3D5421%26nid%3D2054%26put%3D%40%40CRITEO_USERID%40%40%26expires%3D30"},"partner":"criteo-americas","country":["ar","mx","cl","co","pe"]},"2494":{"pingdom_id":"532344","img":"http://um.eqads.com/rc.aspx","secure":{"img":"https://um.eqads.com/rc.aspx"},"region":["na"],"partner":"eq-ads"},"2146":{"pingdom_id":"548548","img":"http://extmap.rub.ace.advertising.com/cfcm.ashx?providerId=1007&extMatch=1","partner":"ad.com US, ad.com UK"},"2596":{"pingdom_id":"566988","ttl":7,"img":"http://p.rfihub.com/cm?in=1&pub=64","partner":"rocketfuel"},"2260":{"pingdom_id":"587961","img":"http://rubicon-cm.p.veruta.com/adserver/cookiematch?pnid=3000007","partner":"mybuys"},"2021":{"pingdom_id":"592793","img":"http://match.rtbidder.net/match?p=2","secure":{"img":"https://match.rtbidder.net/match?p=2"},"partner":"brandscreen"},"2528":{"pingdom_id":"624718","img":"http://sync.intentiq.com/profiles_engine/ProfilesEngineServlet?at=20&mi=10&dpi=54","secure":{"img":"https://sync.intentiq.com/profiles_engine/ProfilesEngineServlet?at=20&mi=10&dpi=54"},"partner":"intent-iq","country":["us","ca"]},"2687":{"pingdom_id":"624719","img":"http://connexity.net/c/cse?a=Q&B=17","secure":{"img":"https://connexity.net/c/cse?a=Q&B=17"},"partner":"connexity"},"2313":{"pingdom_id":"627391","img":"http://rbp.mxptint.net/rubicon.ashx?ver=1","priority":10,"partner":"max-point-us-sync","country":["us","ca"]},"2313-uk":{"pingdom_id":"1303769","img":"http://rbp.emea.mxptint.net/rubicon.ashx?ver=1","priority":10,"partner":"max-point-uk-sync","country":["uk"]},"2365":{"pingdom_id":"636551","ttl":7,"img":"http://rc2waycm-atl.netmng.com/cm/","partner":"netmining","country":["us","ca","jp"]},"2238":{"pingdom_id":"643673","img":"http://pixel.sitescout.com/dmp/pixelSync?network=Rubicon","secure":{"img":"https://pixel.sitescout.com/dmp/pixelSync?network=Rubicon"},"partner":"sitescout"},"2721":{"pingdom_id":"644605","img":"http://pixel.ad.mlnadvertising.com/rbu.ashx?p=1&redirect=http://pixel.rubiconproject.com/tap.php?v=14813&nid=2721&put={user_token}&expires=30","partner":"mln-advertising","country":["us"]},"2760":{"pingdom_id":"659405","img":"http://x.bidswitch.net/sync?ssp=rubicon","secure":{"img":"https://x.bidswitch.net/sync?ssp=rubicon"},"partner":"iponweb-bidswitch"},"2731":{"pingdom_id":"662617","img":"http://i.ctnsnet.com/int/integration?pixel=303852&nid=302660","region":["eu","au"],"partner":"crimson-tangerine"},"2751":{"pingdom_id":"687813","img":"http://ads.p161.net/cmr","partner":"tmg"},"2676":{"pingdom_id":"714458","img":"http://c1.adform.net/serving/cookie/match/?party=8","secure":{"img":"https://c1.adform.net/serving/cookie/match/?party=8"},"partner":"adform"},"2837":{"pingdom_id":"733980","img":"http://ads.heias.com/x/heias.match/?dpid=152&uid=RUBICON_USER_ID","partner":"adnologies"},"2867":{"pingdom_id":"772658","img":"http://r.254a.com/r_match","region":["eu"],"partner":"yd-display"},"2911":{"pingdom_id":"775380","img":"http://dmp.adblade.com/srv/sync/gateway/?cId=rubicon","partner":"adblade","country":["us"]},"2950":{"pingdom_id":"779802","img":"http://pixel.tapad.com/idsync/ex/push?partner_url=http%3A%2F%2Fpixel.rubiconproject.com%2Ftap.php%3Fv%3D18014%26nid%3D2950%26put%3D%24%7BTA_DEVICE_ID%7D","partner":"tapad"},"2909":{"pingdom_id":"837444","img":"http://rt.legolas-media.com/lgrt?ci=12&ti=64524&pbi=11056","region":["na","eu"],"country":["au","nz"],"partner":"upfront"},"3032":{"pingdom_id":"870805","img":"http://uip.semasio.net/rubicon/1/rtb/match?v=33242&nid=3032&cburl=http://pixel.rubiconproject.com/tap.php?expires=30","partner":"semasio","country":["dk","de","fi"]},"2682":{"pingdom_id":"884964","img":"http://magnetic.t.domdex.com/sync/rubicon","partner":"magnetic","country":["us","ca","de","uk","ie"]},"2534":{"pingdom_id":"885171","img":"http://rtb.metrigo.com/delivery/sync/rubicon/pixel_match","secure":{"img":"https://rtb.metrigo.com/delivery/sync/rubicon/pixel_match"},"partner":"metrigo","country":["de","fr","it","nl","ch","at","dk","be"]},"2974":{"pingdom_id":"1005886","ttl":7,"img":"http://tap.rubiconproject.com/oz/feeds/admovate-rtb/tokens/?rt=pixel","secure":{"img":"https://tap.rubiconproject.com/oz/feeds/admovate-rtb/tokens/?rt=pixel"},"partner":"yahoo-openrtb"},"2678":{"pingdom_id":"1084604","img":"http://tracking.m6r.eu/sync/rubiconRedirect","secure":{"img":"https://tracking.m6r.eu/sync/rubiconRedirect"},"partner":"mbr-targeting","country":["at","de","nl","no","ch"]},"2978":{"pingdom_id":"1113677","img":"http://match.rundsp.com/redirect?run_index=1","secure":{"img":"https://match.rundsp.com/redirect?ex=rubicon"},"partner":"runDSP"},"2082":{"pingdom_id":"1133981","img":"http://acuityplatform.com/Adserver/rds","partner":"acuity"},"2243":{"pingdom_id":"1140193","img":"http://rtd.tubemogul.com/upi/pid/btu4jd3a?redir=http%3A%2F%2Fpixel.rubiconproject.com%2Ftap.php%3Fv%3D7941%26nid%3D2243%26put%3D%24%7BUSER_ID%7D%26expires%3D90","partner":"tube-mogul"},"3320":{"pingdom_id":"1303768","img":"http://p.adsymptotic.com/d/px?_pid=11273&_psign=b76e81fd0d47a6c36e19a250c3eb4b55&_redirect=http%3A%2F%2Fpixel.rubiconproject.com%2Ftap.php%3Fv%3D45562%26nid%3D3320%26put%3D%24%7BUUID%7D%26expires%3D30","secure":{"img":"https://p.adsymptotic.com/d/px?_pid=11273&_psign=b76e81fd0d47a6c36e19a250c3eb4b55&_redirect=https%3A%2F%2Fpixel.rubiconproject.com%2Ftap.php%3Fv%3D45562%26nid%3D3320%26put%3D%24%7BUUID%7D%26expires%3D30"},"partner":"drawbrid.ge"},"2810":{"pingdom_id":"1303767","ttl":3,"resync":1,"img":"http://pix04.revsci.net/D08734/a3/0/3/0.302?matchId=102","secure":{"img":"https://pix04.revsci.net/D08734/a3/0/3/0.302?matchId=102"},"partner":"audience-science"},"2762":{"pingdom_id":"1303773","img":"http://ads.mediade.sk/matching/rubicon","secure":{"img":"https://ads.mediade.sk/matching/rubicon"},"partner":"us-media-consulting"},"3416":{"pingdom_id":"1303770","img":"http://cm.eyereturn.com/rubicon","partner":"eyereturn","country":["us","ca"]},"2931":{"pingdom_id":"1303772","img":"http://pix.impdesk.com/csync/rubicon","secure":{"img":"https://pix.impdesk.com/csync/rubicon"},"region":["eu"],"partner":"infectious"},"2542":{"pingdom_id":"1303771","img":"http://rtb.revenuemantra.com/rtb/rubicon/match","partner":"revenuemantra"},"2590":{"pingdom_id":"1308402","img":"http://green.erne.co/rp/cm","partner":"adpilot"},"3640":{"pingdom_id":"1367413","img":"http://rpush.cogocast.net/","partner":"cogolabs"},"3468":{"pingdom_id":"1335319","img":"http://cts.servesharp.net/getuid?url=http://pixel.rubiconproject.com/tap.php?v=71604&nid=3468&put={user_token}&expires={days}","partner":"servesharp"},"3632":{"pingdom_id":"1335344","img":"http://s.c.appier.net/rbcm","secure":{"img":"https://s.c.appier.net/rbcm"},"partner":"appier"},"2972":{"pingdom_id":"1358462","img":"http://idsync.fetchback.com/idsyncservice/idsync?p=4","secure":{"img":"https://idsync.fetchback.com/idsyncservice/idsync?p=4"},"partner":"ebay"},"2530":{"sample":0,"pingdom_id":"1369429","img":"http://match.basebanner.com/match?mrbyus=true&excid=17&cijs=0","partner":"convert-media"},"3105":{"pingdom_id":"1411156","img":"http://cm.dpclk.com/cm?network_id=rubicon","secure":{"img":"https://cm.dpclk.com/cm?network_id=rubicon"},"partner":"deep-forest-media"},"2650":{"pingdom_id":"1411155","img":"http://adsby.bidtheatre.com/rubiconmatch","secure":{"img":"https://adsby.bidtheatre.com/rubiconmatch"},"partner":"bid-theatre"}}},"rtb_ext":{"sample":100,"pixels":{"1523ext":{"pingdom_id":"399221","sample":100,"iframe":"http://cti.w55c.net/ct/cms-2c-rubicon.html","partner":"dataxu"},"2081ext":{"pingdom_id":"439290","sample":0,"iframe":"http://d.xp1.ru4.com/activity?_o=62795&_t=cm_rub_ex","partner":"xplusone"}}},"aud":{"sample":100,"pixels":{"liveramp":{"pingdom_id":"803045","sample":0,"img":"http://tap.rubiconproject.com/oz/feeds/rubicon-test/tokens/?rt=pixel","region":"na","partner":"liveramp"},"tgi":{"pingdom_id":"399232","sample":0,"img":"http://adadvisor.net/adscores/g.pixel?sid=9278242667","partner":"targus"},"exl":{"pingdom_id":"418697","sample":0,"img":"http://loadm.exelator.com/load/?p=204&g=141&j=0","partner":"exelate"},"bk":{"pingdom_id":"605728","ttl":4,"sample":100,"img":"http://tags.bluekai.com/site/6123?redir=http://tap.rubiconproject.com/oz/feeds/bluekai/tokens?afu=$_BK_UUID","region":"na","partner":"bluekai"},"aam":{"pingdom_id":"661320","ttl":14,"sample":25,"img":"http://dpm.demdex.net/ibs:dpid=481&dpuuid=&redir=http%3A%2F%2Ftap.rubiconproject.com%2Foz%2Ffeeds%2Fadobe%2Ftokens%3Fafu%3D%24%7BDD_UUID%7D","region":["na"],"partner":"adobe"},"rp":{"pingdom_id":"633079","ttl":1,"sample":100,"script":"http://tap.rubiconproject.com/partner/agent/rubicon/channels.js?cb=oz_onPixelsLoaded","secure":{"script":"https://tap.rubiconproject.com/partner/agent/rubicon/channels.js?cb=oz_onPixelsLoaded"},"partner":"rubicon"},"neu":{"pingdom_id":"1411157","ttl":7,"sample":25,"img":"http://adadvisor.net/adscores/g.pixel?sid=9212270498","secure":{"img":"https://adadvisor.net/adscores/g.pixel?sid=9212270498"},"partner":"neustar","country":["us"]}}},"nets":{"sample":100,"pixels":{"1022":{"pingdom_id":"399862","ttl":2,"sample":0,"script":"http://ad.yieldmanager.com/imp?Z=1x1&B=10&u=&r=1&s=3519046","partner":"yahoo"},"1806":{"pingdom_id":"424014","ttl":7,"sample":0,"iframe":"http://c7.zedo.com/utils/rbC.html","partner":"zedo"},"2341":{"pingdom_id":"429656","ttl":1,"sample":0,"iframe":"http://rt.legolas-media.com/lgrt?ci=12&ti=7158&pbi=10875","region":["na"],"partner":"legolas"},"2317":{"pingdom_id":"434020","ttl":7,"sample":0,"iframe":"http://fei.pro-market.net/engine?site=129946;size=1x1;mimetype=img","region":["na"],"partner":"datonics"},"1217":{"pingdom_id":"558267","ttl":30,"sample":10,"img":"http://api.bizographics.com/v2/profile.redirect?api_key=d8635cdd75eb4f83917f2c953bc214f0&callback_url=http%3A%2F%2Ftap.rubiconproject.com/oz/feeds/bizo/profile%3F","region":["na"],"partner":"bizo"}}},"pubs":{"sample":0,"pixels":{}}},"notify":{"rubicon":{"sample":1,"img":"http://tap.rubiconproject.com/stats/rtbsync"}},"priority":20} ;



	function loadExpiration()
	{
		var map = {};
		var c = readCookie("pux");
		if (!c)
			return map;
		
		var list = c.split("&");
		var name;
		var value;
		for (var i in list)
		{
			var parts = list[i].split("=");
			if (parts.length < 2)
				continue;
			name = parts[0];
			value = parts[1];
			var fields = value.split(",");
			if (fields.length > 0)
			{
				map[name] = { created : fields[0] };
			}
		}
		return map;
	}
	function saveExpiration(map)
	{
		var c="";
		for (name in map)
		{
			var info = map[name];
			
			c += name + "=";
			c += info.created;
			c += "&";
		}
		setCookie("pux",c,90);
	}

	function is_expired(ttl,info)
	{
		if (!info)
			return true;
		ttl = Number(ttl);
		
		var now = new Date().getTime() / (3600*1000);
		var then = new Date(2010,0,1,0,0,0,0).getTime() / (3600*1000);
		var expires = (new Number(info.created) + (ttl * 24));
		
		if ((now - then) < expires)
		{
			return false;
		}
		return true;		
	}
	
	function shouldFirePixel(pixel)
	{
		var info = expiration_info[pixel.nid];
		if (info && !is_expired(pixel.info.ttl || pixel.context.ttl || rtb_sync.ttl,info))
			return false;
		
		var sample = (pixel.info.sample == 0) ? pixel.info.sample : (pixel.info.sample || pixel.context.sample || rtb_sync.pixel_sample || 0) ;
		sample = Number(sample);	// do simple parsing
		
		if (!(Math.floor(Math.random()*100) < sample))
			return false;
		
		return true;
	}
	
	function fireComscorePixel(pixel,page_is_secure) {
		var _comscore = _comscore || [];
		//var rp_cats = "##RUBICON_IAB_CATEGORIES##";
		var rp_cats = null;
		var rp_cat = 24*1000;
		if (rp_cats) {
			rp_cats = rp_cats.replace(/IAB/g,"").split(",");
			if (rp_cats.length > 0 && rp_cats[0] && rp_cats[0].length > 0) {
				rp_cat = rp_cats[0].split("-")[0];
				rp_cat = rp_cat * 1000;
			}
		}
		
		// todo : rp_cat, site_id, creative_id
		var site_id = "12135";
		var creative_id = 0;
		_comscore.push({ c1: "8", c2: "6135404", c3: rp_cat, c4: site_id, c10: creative_id });
		(function() { 
			var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; 
			s.async = true; 
			s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js"; 
			el.parentNode.insertBefore(s, el); 
		})(); 
	}
	
	function firePixel(pixel,page_is_secure)
	{
		var days = (pixel.info.ttl || pixel.context.ttl || rtb_sync.ttl || 14);
		var now_hours = Math.floor(new Date().getTime()/(3600*1000));
		var then = new Date(2010,0,1,0,0,0,0).getTime() / (3600*1000);

		expiration_info[pixel.nid] = { created : now_hours-then };

		var info = pixel.info;
		if (page_is_secure)
			info = pixel.info.secure;
		if (info) {
			var ref = getReferrer();
			if (pixel.nid == "rp" && info.script && ref) {
				info.script += ("&rf=" + ref);
			}
			if (info.img)
				setTimeout(function() {new Image().src = info.img},100);
			if (info.iframe)
				document.write("<iframe src='"+info.iframe+"' width='1' height='1' frameborder='0'></iframe>");
			if (info.script)
				addScript(info.script);
			if (info.comscore)
				fireComscorePixel(pixel,page_is_secure);
		}
	}

	// Fisher Yates
	function shuffle ( myArray ) 
	{
		var i = myArray.length;
		if ( i == 0 ) return false;
		while ( --i ) 
		{
			var j = Math.floor( Math.random() * ( i + 1 ) );
			var tempi = myArray[i];
			var tempj = myArray[j];
			myArray[i] = tempj;
			myArray[j] = tempi;
		}
	}
	function prioritize(list) {
		list.sort(function(a,b){ return a.info.priority - b.info.priority; })
	}	
	
	var expiration_info;
	function array_contains(list,item)
	{
		for (e in list)
		{
			if (item == list[e])
				return true;
			
		}
		return false;
	}
	function doPixels()
	{
		var allFired=true;
		var pixels=new Array();
	
		expiration_info = loadExpiration();
		
		// check for 'cookies enabled'
		if (!document.cookie || (document.cookie.length < 1)) 
		{
			setCookie("cd","false",365);
			return;
		} 
		
		// global throttle
		if (!(Math.floor(Math.random()*100) < Number(rtb_sync.sample)))
			return false;

    	var loc = location.href.split(':');
    	var page_is_secure = (loc[0] == 'https');
		
		for (var i in rtb_pixel_set)
		{
			var name = rtb_pixel_set[i];
			var context = rtb_sync.pixel_sets[name];
			if (!context)
				continue;
			for ( nid in context.pixels )
			{
				var info = context.pixels[nid];
				info.priority = info.priority || context.priority || rtb_sync.priority;

				// check for geo region limited scope
				if (request_region && info.region && (info.region != request_region && !array_contains(info.region,request_region)))
					continue;
				if (request_country && info.country && (info.country != request_country && !array_contains(info.country,request_country)))
					continue;

				// if there is no stored partner-user-token, then trigger after 1d
				if ((name == "rtb" || name =="rtb_ext") && (info.resync || context.resync) && !readCookie("put_"+ (info.nid || nid)) ) {
					info.ttl = (info.resync || context.resync);
				}

				// check to see if pixel is expired
				if (is_expired(info.ttl || context.ttl || rtb_sync.ttl,expiration_info[nid]) && (info.sample != 0))
				{
					pixels[pixels.length] = {pixel_set: name, nid: nid, info : info, context: context}; 
				}   
			}
		}
		allFired = (pixels.length == 0);

		shuffle(pixels);
		prioritize(pixels);
		var max = rtb_sync.max_pixels || 1;
		for (var i in pixels)
		{
			var pixel = pixels[i];
			
			if (shouldFirePixel(pixel))
			{
				firePixel(pixel,page_is_secure);
				max--;
				if (max <= 0)
					break;
			}
		}
		
		if (allFired)
		{
			var nid = "rubicon";
			var info = rtb_sync.notify[nid];
			var pixel = {nid : nid, info : info, context : rtb_sync};
			if (shouldFirePixel(pixel))
			{
				firePixel(pixel,page_is_secure);
			}
		}
		saveExpiration(expiration_info);
	}

	doPixels();
			
