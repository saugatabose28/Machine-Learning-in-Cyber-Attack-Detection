
<!--//--><![CDATA[//><!--
document.domain="sina.com.cn";
var storage = (function(){
	var objDS ,	store, STORE_NAME;	
	function support_ls(){
		// return  !(window.attachEvent && !window.opera);
		return  !!(window.localStorage);
	}
	if (!!window.localStorage) {
		objDS = window.localStorage
		return {
			get: function(key){
				try{
					return unescape(objDS.getItem(key));
				}catch(e){	return	}
			},
			set: function(key, value){
				try{
					objDS.setItem(key, escape(value));
					return true;
				}catch(e){	return	false;}
			}
		};
	}else if(window.ActiveXObject) {
		store = document.documentElement;
		STORE_NAME = 'localstorage';
		try {
			store.addBehavior('#default#userdata');
			store.save('localstorage');
		} 
		catch (e) {
			//throw "don't support userData";
			return false;
		}
		return {
			get: function(key){
				try{
					store.load(STORE_NAME);
					return store.getAttribute(key);
				}catch(e){
					return
				}
			},
			set: function(key, value){
				try{
					store.setAttribute(key, value);
					store.save(STORE_NAME);
					return true;
				}catch(e){
					return false;
				}
			}
		};
	} else {
		return {
			get:function(key){return;},
			set:function(key,value){return false;}
		};
	}
})();
//-->
