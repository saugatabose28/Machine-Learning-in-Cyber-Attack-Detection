try{var debug_error=null;var queryString=new Querystring;var uid=queryString.get("uid","-1");var fpid=queryString.get("fpid","-1");var token=queryString.get("t","-1");var newUser=queryString.get("nu","n");var skipPixel=queryString.get("sp","n");var continentId=queryString.get("ctid","1");var countryId=queryString.get("cyid","2");var mktid=queryString.get("mktid","-1");var mpid=queryString.get("mpid","-1");if(uid!="-1"){var DAYS_COOKIE_NAME="rds";var RTBS_COOKIE_NAME="rrs";var VERSION_COOKIE_NAME=
"rv";var currentVersion=GetCookie(VERSION_COOKIE_NAME);var rtbsCookieValue=GetCookie(RTBS_COOKIE_NAME);var daysCookieValue=GetCookie(DAYS_COOKIE_NAME);var SEPARATOR="|";var now=Math.round((new Date).getTime()/1E3/86400);var EX_OPENX_CCI_ID=4001;var MP_INVITE_MEDIA_ID=2E3;var MP_APP_NEXUS_ID=2001;var MP_MEDIA_MATH_ID=2002;var MP_AOL_ID=2003;var MP_TUBE_MOGUL_ID=2005;var MP_TAP_AD_ID=2007;var MP_TWITTER_ID=2008;var MP_AIQ_ID=2009;var MP_P_TD_MM_ID=2010;var MP_ADAP_TV_ID=2011;var MP_P_TD_DBLCLK_ID=2012;
var MP_P_TD_AOL_ID=2013;var MP_P_TD_ID=2014;var MP_DRAWBRIDGE_ID=2015;var MP_CROSSWISE_ID=2016;var DP_DLX_ID=3001;var DP_P_TD_LIVERAMP_ID=3002;var DP_TARGUS_ID=3003;var DP_DEMDEX_ID=3004;var DP_P_TD_DLX_ID=3005;var DP_TURN_DEMDEX_ID=3006;var DP_OMGNL_MARKMINI_ID=3007;var DP_REAL_MEDIA_ID=3008;var DP_TURN_AGKN_ID=3009;var DP_TURN_IBEHAVIOR_ID=3010;var DP_TURN_BLUEKAI_ID=3011;var P_TD_MKT_ID=4;var P_TD_MKT_ID2=1;var AIQ_MKT_ID=44;var AIQ_MKT_ID2=73;var OMGNL_MKT_ID=31;var AMNET_EMEA_MKT_ID=97;var MEDIACOM_MANAGED_MKT_ID=
149;var CADREON_UK_MKT_ID=146;var MINDSHARE_UNILEVER_MKT_ID=167;var MINDSHARE_UK_KC_MKT_ID=352;var MINDSHARE_WW_UNILEVER_MKT_ID=455;var TURN_CORPORATE_ADVERTISING_MKT_ID=223;var syncState={};var rtbsCalled=new Array;if(rtbsCookieValue!=null)rtbsCalled=rtbsCookieValue.split(SEPARATOR);var daysCalled=new Array;if(daysCookieValue!=null)daysCalled=daysCookieValue.split(SEPARATOR);var allRtbs=new Array;allRtbs[0]=1;allRtbs[1]=2;allRtbs[2]=3;allRtbs[3]=5;allRtbs[4]=6;allRtbs[5]=9;allRtbs[6]=10;allRtbs[7]=
12;allRtbs[8]=13;allRtbs[9]=15;allRtbs[10]=17;allRtbs[11]=16;allRtbs[12]=18;allRtbs[13]=21;allRtbs[14]=23;allRtbs[15]=26;allRtbs[16]=27;allRtbs[17]=33;allRtbs[18]=34;allRtbs[19]=36;allRtbs[20]=28;allRtbs[21]=37;allRtbs[22]=38;allRtbs[23]=EX_OPENX_CCI_ID;allRtbs[24]=DP_DLX_ID;allRtbs[25]=DP_REAL_MEDIA_ID;allRtbs[26]=DP_TURN_AGKN_ID;allRtbs[27]=DP_P_TD_LIVERAMP_ID;allRtbs[28]=DP_TARGUS_ID;allRtbs[29]=DP_DEMDEX_ID;allRtbs[30]=DP_P_TD_DLX_ID;allRtbs[31]=DP_TURN_DEMDEX_ID;allRtbs[32]=DP_OMGNL_MARKMINI_ID;
allRtbs[33]=MP_P_TD_ID;allRtbs[34]=MP_AIQ_ID;allRtbs[35]=MP_P_TD_MM_ID;allRtbs[36]=MP_APP_NEXUS_ID;allRtbs[37]=MP_TUBE_MOGUL_ID;allRtbs[38]=MP_INVITE_MEDIA_ID;allRtbs[39]=MP_MEDIA_MATH_ID;allRtbs[40]=MP_AOL_ID;allRtbs[41]=MP_ADAP_TV_ID;allRtbs[42]=MP_P_TD_DBLCLK_ID;allRtbs[43]=MP_P_TD_AOL_ID;allRtbs[44]=MP_TAP_AD_ID;allRtbs[45]=MP_DRAWBRIDGE_ID;allRtbs[46]=39;allRtbs[47]=41;allRtbs[48]=DP_TURN_BLUEKAI_ID;allRtbs[49]=MP_TWITTER_ID;allRtbs[50]=DP_TURN_IBEHAVIOR_ID;allRtbs[51]=MP_CROSSWISE_ID;for(var i=
0;i<rtbsCalled.length;i++)syncState[rtbsCalled[i]]=daysCalled[i];for(var rtbIndex=0;rtbIndex<allRtbs.length;rtbIndex++){var daysNotCalled=now-(syncState[allRtbs[rtbIndex]]||0);if(allRtbs[rtbIndex]==1&&(daysNotCalled>=7&&skipPixel=="n"||fpid=="1"||fpid=="allrtb")){var pmCookie="pcv:1|uid:"+uid;if(countryId=="65")(new Image).src="http://image2.pubmatic.com/AdServer/Pug?vcode=bz0yJnR5cGU9MSZjb2RlPTMxMDEmdGw9MTI5NjAw&piggybackCookie="+pmCookie;else(new Image).src="http://image2.pubmatic.com/AdServer/Pug?vcode=bz0yJnR5cGU9MSZqcz0xJmNvZGU9ODImdGw9MTU3NjgwMCZkcF9pZD0yMg==&piggybackCookie="+
pmCookie;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==2&&(daysNotCalled>=7&&skipPixel=="n"||fpid=="2"||fpid=="allrtb")){(new Image).src="http://ib.adnxs.com/getuid?http://r.turn.com/r/bd?ddc=1&pid=54&cver=1&uid=$UID";(new Image).src="http://ib.adnxs.com/setuid?entity=43&code="+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==3&&(daysNotCalled>=7&&skipPixel=="n"||fpid=="3"||fpid=="allrtb")){(new Image).src="http://cm.g.doubleclick.net/pixel?google_nid=turn1&google_cm&google_sc&google_hm="+
encodeBase64(uid);syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==6&&(daysNotCalled>=7&&skipPixel=="n"||fpid=="6"||fpid=="allrtb")){(new Image).src="http://pixel.rubiconproject.com/tap.php?v=4212&nid=1185&put="+uid+"&expires=60";syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==9&&(daysNotCalled>=7&&skipPixel=="n"||fpid=="9"||fpid=="allrtb")){(new Image).src="http://us-u.openx.net/w/1.0/sd?id=537073061&val="+uid;if(continentId=="4")(new Image).src="http://jp-u.openx.net/w/1.0/sd?id=537073082&val="+
uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==10&&(daysNotCalled>=7&&skipPixel=="n"||fpid=="10"||fpid=="allrtb")){var pixelUrl=queryString.get("purl","http://ad.afy11.net/ad?mode=7");if(pixelUrl=="")pixelUrl="http://ad.afy11.net/ad?mode=7";(new Image).src=pixelUrl+"&publisher_dsp_id=2&external_user_id="+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==5&&(daysNotCalled>=7&&skipPixel=="n"||fpid=="5"||fpid=="allrtb")){(new Image).src="http://ads.yahoo.com/pixel?id=2155814&t=2&piggyback=http%3A%2F%2Fads.yahoo.com%2Fcms%2Fv1%3Fesig%3D1~862d802dd86fb59368388ad078a7f298ddbbd0b7%26nwid%3D10000424978%26sigv%3D1";
syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==12&&(daysNotCalled>=7&&skipPixel=="n"||fpid=="12"||fpid=="allrtb")){(new Image).src="http://bh.contextweb.com/bh/rtset?do=add&pid=535461&ev="+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==13&&(daysNotCalled>=7&&skipPixel=="n"||fpid=="13"||fpid=="allrtb")){(new Image).src="http://ce.lijit.com/merge?pid=1&3pid="+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==15&&(daysNotCalled>=7&&skipPixel=="n"&&(continentId=="3"||continentId==
"2")||fpid=="15")){(new Image).src="http://ad.360yield.com/match?publisher_dsp_id=4&external_user_id="+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==17&&fpid=="17"){(new Image).src="http://atemda.com/UserMatch.ashx?bidderid=12&bidderuid="+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==16&&(daysNotCalled>=7&&skipPixel=="n"||fpid=="16"||fpid=="allrtb")){(new Image).src="http://sync.search.spotxchange.com/partner?adv_id=6481&img=1&uid="+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==
18&&(daysNotCalled>=7&&skipPixel=="n"||fpid=="18"||fpid=="allrtb")){(new Image).src="http://sync.adap.tv/sync?type=gif&key=turn&uid="+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==21&&(daysNotCalled>=7&&skipPixel=="n"||fpid=="21"||fpid=="allrtb")){(new Image).src="http://dsum.casalemedia.com/rum?cm_dsp_id=4&external_user_id="+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==23&&(daysNotCalled>=7&&skipPixel=="n"&&countryId=="7"||fpid=="23")){(new Image).src="http://ad.yieldlab.net/m?dt_id=3623&ext_id="+
uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==26&&(daysNotCalled>=7&&skipPixel=="n"&&continentId=="3"||fpid=="26")){(new Image).src="http://ih.adscale.de/adscale-ih/tpui?tpid=30&tpuid="+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==27&&(daysNotCalled>=1&&skipPixel=="n"||fpid=="27"||fpid=="allrtb")){(new Image).src="http://www.facebook.com/fr/u.php?p=328546547221502&m="+uid+"&t=2592000";syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==33&&(daysNotCalled>=7&&skipPixel==
"n"&&(continentId=="3"||continentId=="1"||continentId=="2")||fpid=="33"||fpid=="allrtb")){(new Image).src="http://rtb-csync.smartadserver.com/redir/?partnerid=32&partneruserid="+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==34&&(daysNotCalled>=7&&skipPixel=="n"&&continentId=="3"||fpid=="34"||fpid=="allrtb")){(new Image).src="http://ads.stickyadstv.com/user-registering?dataProviderId=147&userId="+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==36&&(daysNotCalled>=7&&skipPixel==
"n"&&continentId=="4"||fpid=="36"||fpid=="allrtb")){(new Image).src="http://cs.adingo.jp/sync/?from=turn&id="+uid+"&expire=7";syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==28&&(daysNotCalled>=7&&skipPixel=="n"&&(continentId=="3"||continentId=="1"||continentId=="4")||fpid=="28"||fpid=="allrtb")){if(continentId=="1")(new Image).src="http://ums.adtechus.com/mapuser?providerid=1006;userid="+uid;else if(continentId=="3")(new Image).src="http://ums.adtech.de/mapuser?providerid=1006;userid="+uid;
else if(continentId=="4")(new Image).src="http://ums.adtechjp.com/mapuser?providerid=1006;userid="+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==37&&(daysNotCalled>=7&&skipPixel=="n"&&continentId=="3"||fpid=="37"||fpid=="allrtb")){(new Image).src="http://ad.sxp.smartclip.net/sync?type=red&dsp=28";syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==38&&(daysNotCalled>=7&&skipPixel=="n"&&continentId=="4"||fpid=="38"||fpid=="allrtb")){(new Image).src="http://cs.gssprt.jp/yie/ld/cs?dspid=turn&uid="+
uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==39&&(daysNotCalled>=30&&skipPixel=="n"&&continentId=="4"||fpid=="RTB.AdFunnelSharedSeatId"||fpid=="allrtb")){(new Image).src="http://s-cm.send.microad.jp/cm?pid=722083e0f59c3e02e197ef9d35671a30";syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==41&&(daysNotCalled>=30&&skipPixel=="n"&&continentId=="3"||fpid=="RTB.TeadsTvSharedSeatId"||fpid=="allrtb"))syncState[allRtbs[rtbIndex]]=now;if(allRtbs[rtbIndex]==DP_DLX_ID&&(daysNotCalled>=7&&
skipPixel=="n"||fpid==DP_DLX_ID)){(new Image).src="http://e.nexac.com/e/turn_sync.xgi?na_exid="+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==DP_P_TD_LIVERAMP_ID&&(mktid==P_TD_MKT_ID&&newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==DP_P_TD_LIVERAMP_ID)){(new Image).src="http://d.p-td.com/r/dd/id/L21rdC80L2NpZC8yNjE5Njc4OS90LzI/url/http%3A%2F%2Fidsync.rlcdn.com%2F366668.gif%3Fpartner_uid%3D%24!%7BTURN_UUID%7D";syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==DP_TARGUS_ID&&
(newUser=="n"&&daysNotCalled>=14&&skipPixel=="n"||fpid==DP_TARGUS_ID)){document.write("<scr"+"ipt type='text/javascript' src='http://adadvisor.net/adscores/g.js?sid=9201023828'></scr"+"ipt>");syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==DP_DEMDEX_ID&&(newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==DP_DEMDEX_ID)){(new Image).src="http://r.turn.com/r/du/id/L2NzaWQvMS9zcGlkLzU/url/http%3A%2F%2Fdpm.demdex.net%2Fibs%3Adpid%3D375%26dpuuid%3DPARTNER_UUID";syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==
DP_P_TD_DLX_ID&&(mktid==P_TD_MKT_ID&&newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==DP_P_TD_DLX_ID)){(new Image).src="http://r.nexac.com/e/getdata.xgi?na_id=&dt=br&pkey=ufqe61pzmlk52&ru=http://d.p-td.com/r/dd/id/L21rdC80L2NpZC8yMzE1MTc3MS90LzI/dpuid/<na_id>";syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==DP_TURN_AGKN_ID&&(newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==DP_TURN_AGKN_ID)){(new Image).src="http://d.turn.com/r/dd/id/L2NzaWQvMS9jaWQvMjY0OTcyNDEvdC8w/url/http%3A%2F%2Fd.agkn.com%2Fpixel%2F2189%2F%3Fsync%3D103%26che%3D%5Bcachebuster%5D%26uuid%3D%24!%7BTURN_UUID%7D";
syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==DP_TURN_DEMDEX_ID&&(newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==DP_TURN_DEMDEX_ID)){(new Image).src="http://d.turn.com/r/dd/id/L2NzaWQvMS9jaWQvMjM2NTYzMjkvdC8y/url/http%3A%2F%2Fdpm.demdex.net%2Fibs%3Adpid%3D470%26dpuuid%3D%24!%7BTURN_UUID%7D";syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==DP_OMGNL_MARKMINI_ID&&(mktid==OMGNL_MKT_ID&&newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"&&continentId=="3"||fpid==DP_OMGNL_MARKMINI_ID)){document.write("<scr"+
"ipt type='text/javascript'>MMTrackerData = { Provider: 'TURN', Duplication: true};</scr"+"ipt>");document.write("<scr"+"ipt type='text/javascript' src='http://mm.markandmini.com/Capture/Capture.js'></scr"+"ipt>");syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==DP_REAL_MEDIA_ID&&(mktid==MINDSHARE_UNILEVER_MKT_ID&&newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==DP_REAL_MEDIA_ID)){document.write("<iframe src='http://network.realmedia.com/2/track_targeting/matcher/@x87?pid=TN&XE&oas_ntclientCode="+
uid+"&XE' style='display:none;'></iframe> ");syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==DP_TURN_IBEHAVIOR_ID&&((mktid==AMNET_EMEA_MKT_ID||mktid==MEDIACOM_MANAGED_MKT_ID||mktid==CADREON_UK_MKT_ID||mktid==MINDSHARE_UK_KC_MKT_ID||mktid==MINDSHARE_WW_UNILEVER_MKT_ID||continentId=="2")&&newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==DP_TURN_IBEHAVIOR_ID)){(new Image).src="http://global.ib-ibi.com/image.sbxx?go=245254&pid=300&xid="+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==
DP_TURN_BLUEKAI_ID&&(newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==DP_TURN_BLUEKAI_ID)){(new Image).src="http://tags.bluekai.com/site/4499?id="+uid+"&BK_SWAP_DEST=4499";syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==MP_ADAP_TV_ID&&(daysNotCalled>=7&&skipPixel=="n"||fpid==MP_ADAP_TV_ID||fpid=="allrtb")){(new Image).src="http://sync.adap.tv/turn_user_sync";syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==MP_P_TD_ID&&(newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==MP_P_TD_ID)){if(mktid==
P_TD_MKT_ID)(new Image).src="http://d.p-td.com/r/dm/mkt/"+P_TD_MKT_ID+"/mpid/"+mpid+"/mpuid/"+uid;else(new Image).src="http://d.p-td.com/r/dm/mkt/"+P_TD_MKT_ID+"/mpid//mpuid/"+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==MP_AIQ_ID&&(newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==MP_AIQ_ID)){if(mktid==AIQ_MKT_ID)(new Image).src="http://d.audienceiq.com/r/dm/mkt/"+AIQ_MKT_ID+"/mpid/"+mpid+"/mpuid/"+uid;else if(mktid==AIQ_MKT_ID2)(new Image).src="http://d.audienceiq.com/r/dm/mkt/"+
AIQ_MKT_ID2+"/mpid/"+mpid+"/mpuid/"+uid;else{(new Image).src="http://d.audienceiq.com/r/dm/mkt/"+AIQ_MKT_ID+"/mpid//mpuid/"+uid;(new Image).src="http://d.audienceiq.com/r/dm/mkt/"+AIQ_MKT_ID2+"/mpid//mpuid/"+uid}syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==MP_P_TD_MM_ID&&(mktid==P_TD_MKT_ID&&newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==MP_P_TD_MM_ID)){(new Image).src="http://sync.mathtag.com/sync/img?redir=http%3A%2F%2Fd.p-td.com%2Fr%2Fdt%2Fid%2FL21rdC80L21waWQvMTgwNDg2NA%2Fmpuid%2F[MM_UUID]";
syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==MP_APP_NEXUS_ID&&(mktid==P_TD_MKT_ID&&newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==MP_APP_NEXUS_ID)){(new Image).src="http://ib.adnxs.com/getuid?http://d.p-td.com/r/dt/id/L21rdC80L21waWQvMjMwNjY2NTM/mpuid/$UID";syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==MP_P_TD_DBLCLK_ID&&(mktid==P_TD_MKT_ID&&newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==MP_P_TD_DBLCLK_ID)){(new Image).src="http://cm.g.doubleclick.net/pixel?google_nid=xbid_turn&google_cm&google_sc";
syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==MP_P_TD_AOL_ID&&(mktid==P_TD_MKT_ID&&newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==MP_P_TD_AOL_ID)){(new Image).src="http://tacoda.at.atwola.com/atx/sync/turn/tnid/default";syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==MP_TUBE_MOGUL_ID&&(newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==MP_TUBE_MOGUL_ID)){(new Image).src="http://rtd.tubemogul.com/upi/pid/0Xf30sUm?redir=http%3A%2F%2Fd.turn.com%2Fr%2Fdu%2Fid%2FL2NzaWQvMS9tcGlkLzI2NDIyMjM5%2Fmpuid%2F%24%7BTM_USER_ID%7D";
syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==MP_INVITE_MEDIA_ID&&(newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==MP_INVITE_MEDIA_ID)){(new Image).src="http://cm.g.doubleclick.net/pixel?google_nid=turn_dmp&google_cm";syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==MP_MEDIA_MATH_ID&&(newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==MP_MEDIA_MATH_ID)){(new Image).src="http://sync.mathtag.com/sync/img?mt_exid=10027&redir=http%3A%2F%2Fd.turn.com%2Fr%2Fdu%2Fid%2FL2NzaWQvMS9tcGlkLzE4MDM3MTM5%2Fmpuid%2F%5BMM_UUID%5D";
syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==MP_AOL_ID&&(newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==MP_AOL_ID)){(new Image).src="http://tacoda.at.atwola.com/atx/sync/turn2/turn2/"+uid;syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==MP_TAP_AD_ID&&(newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==MP_TAP_AD_ID)){(new Image).src="http://pixel.tapad.com/idsync/ex/receive?partner_id=684&partner_device_id="+uid+"&partner_url=http%3A%2F%2Fd.turn.com%2Fr%2Fdu%2Fid%2FL2NzaWQvMS9tcGlkLzI3MDg5NDgx%2Fmpuid%2F%24%7BTA_DEVICE_ID%7D";
syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==MP_DRAWBRIDGE_ID&&(newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==MP_DRAWBRIDGE_ID)){(new Image).src="http://p.adsymptotic.com/d/px?_pid=10290&_psign=f641a14c27a01dccc63a9253bc8250b1&_puuid="+uid+"&_redirect=http%3A%2F%2Fd.turn.com%2Fr%2Fdu%2Fid%2FL2NzaWQvMS9tcGlkLzM4NzU2Nzk4%2Fmpuid%2F%24%7BUUID%7D%0A";syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==MP_TWITTER_ID&&(newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==MP_TWITTER_ID)){(new Image).src=
"http://d.turn.com/r/du/id/L2NzaWQvMS9tcGlkLzM3NDkzMTAz/mpuid/OtherStore/url/https%3A%2F%2Fanalytics.twitter.com%2Fi%2Fadsct%3Fp_user_id%3D%24!%7BTURN_UUID%7D%26p_id%3D38520";syncState[allRtbs[rtbIndex]]=now}if(allRtbs[rtbIndex]==MP_CROSSWISE_ID&&(mktid=TURN_CORPORATE_ADVERTISING_MKT_ID&&newUser=="n"&&daysNotCalled>=7&&skipPixel=="n"||fpid==MP_CROSSWISE_ID)){(new Image).src="http://p.univide.com/t.gif?pid=26&pidt=0&pdid="+uid;syncState[allRtbs[rtbIndex]]=now}}rtbsCalled=[];daysCalled=[];for(var partner in syncState)if(syncState.hasOwnProperty(partner)){rtbsCalled.push(partner);
daysCalled.push(syncState[partner])}setTurnCookie(RTBS_COOKIE_NAME,rtbsCalled.join(SEPARATOR));setTurnCookie(DAYS_COOKIE_NAME,daysCalled.join(SEPARATOR));var VERSION_VALUE="1";setTurnCookie(VERSION_COOKIE_NAME,VERSION_VALUE)}}catch(ex){debug_error=ex};