var bds={se:{},su:{urdata:[],urSendClick:function(){}},util:{},use:{},comm : {domain:"http://www.baidu.com",ubsurl : "http://sclick.baidu.com/w.gif",tn:"baidu",queryEnc:"",queryId:"",inter:"",templateName:"baidu",sugHost : "http://suggestion.baidu.com/su",query : "",qid : "e411307c000335c8",cid : "0",sid : "1467_9993_7802_10194_9476_10032_10120_10016_9499_10066_9770_9994_9758_10007_9979_9024",indexSid : "1467_9993_7802_10194_9476_10032_10120_10016_9499_10066_9770_9994_9758_10007_9979_9024",stoken : "",serverTime : "1416904975",user : "",username : "",userid : "0",isBaixiaoduOn : "",loginAction : [],useFavo : "",pinyin : "",favoOn : "",curResultNum:"0",rightResultExist:false,protectNum:0,zxlNum:0,pageNum:1,pageSize:10,newindex:0,async:2,maxPreloadThread:5,maxPreloadTimes:10,preloadMouseMoveDistance:5,switchAddMask:false,isDebug:false,ishome : 1,encTn:'c7b3buHDzCNIXEOilug5g/wXbqlgQ00UosQRPxfmKnAdycUVXu/tL55dKHM'}};var name,navigate,al_arr=[];var selfOpen = window.open;eval("var open = selfOpen;");var isIE=navigator.userAgent.indexOf("MSIE")!=-1&&!window.opera;var E = bds.ecom= {};bds.se.mon = {'loadedItems':[],'load':function(){},'srvt':-1};try {bds.se.mon.srvt = parseInt(document.cookie.match(new RegExp("(^| )BDSVRTM=([^;]*)(;|$)"))[2]);document.cookie="BDSVRTM=;expires=Sat, 01 Jan 2000 00:00:00 GMT"; }catch(e){}var bdUser = bds.comm.user?bds.comm.user:null,bdQuery = bds.comm.query,bdUseFavo = bds.comm.useFavo,bdFavoOn = bds.comm.favoOn,bdCid = bds.comm.cid,bdSid = bds.comm.sid,bdServerTime = bds.comm.serverTime,bdQid = bds.comm.queryId,bdstoken = bds.comm.stoken,login_success = [];bds.util.domain = (function(){var list = {"kankan.baidu.com":"http://kankan.baidu.com","xapp.baidu.com":"http://xapp.baidu.com","dr.dh.baidu.com":"http://dr.dh.baidu.com","xiaodu.baidu.com":"http://xiaodu.baidu.com","s1.bdstatic.com":"http://s1.bdstatic.com","olime.baidu.com":"http://olime.baidu.com","app.baidu.com":"http://app.baidu.com","i.baidu.com":"http://i.baidu.com","c.baidu.com":"http://c.baidu.com","sclick.baidu.com":"http://sclick.baidu.com","nsclick.baidu.com":"http://nsclick.baidu.com","eclick.baidu.com":"http://eclick.baidu.com","api.map.baidu.com":"http://api.map.baidu.com","ecma.bdimg.com":"http://ecma.bdimg.com","t10.baidu.com":"http://t10.baidu.com","t11.baidu.com":"http://t11.baidu.com","t12.baidu.com":"http://t12.baidu.com","i7.baidu.com":"http://i7.baidu.com","i8.baidu.com":"http://i8.baidu.com","i9.baidu.com":"http://i9.baidu.com","b1.bdstatic.com":"http://b1.bdstatic.com","su.bdimg.com":"http://su.bdimg.com","opendata.baidu.com":"http://opendata.baidu.com","api.open.baidu.com":"http://api.open.baidu.com","tag.baidu.com":"http://tag.baidu.com","f3.baidu.com":"http://f3.baidu.com","s.share.baidu.com":"http://s.share.baidu.com","bdimg.share.baidu.com":"http://bdimg.share.baidu.com"};var get = function(url) {if(location.protocol === "http") {return url;}var reg = /^(http[s]?:\/\/)?([^\/]+)(.*)/,matches = url.match(reg);url = list.hasOwnProperty(matches[2])&&(list[matches[2]] + matches[3]) || url;return url;},set = function(kdomain,vdomain) {list[kdomain] = vdomain;}; return {get : get,set : set}})();