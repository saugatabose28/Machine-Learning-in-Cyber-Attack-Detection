// Weebly storage module
// Simplifies storage abstraction among multiple modules 
// Copyright 2009 Weebly, Inc

Weebly = window.Weebly || {};

Weebly.Storage = {
	Version: '0.7',
	Author: 'David Rusenko',
	Company: 'Weebly, Inc.',
	modules: [ 'flash', 'localStorage', 'cookie' ],
	onReady: function() {},
	onReadyCalled: false,
	

	init: function() {
		var $ = jQuery;
		$.each(this.modules, function(index, data) {
			Weebly.Storage[data].init();
		});
		
		setTimeout("if (!Weebly.Storage.onReadyCalled) { Weebly.Storage.onReadyCalled = true; Weebly.Storage.onReady() }", 2000);
	},
	
	get: function(key) {
		
		for ( var m = 0; m < this.modules.length; m++) {
			r = Weebly.Storage[this.modules[m]].get(key);
			if (typeof (r) != 'undefined' && r !== false) {
				return r;
			}
			else if (r === false) {
				this.modules.splice(m, 1);
				m--;
			}
		}
		
	},
	
	set: function(key, value) {
		
		var $ = jQuery;
		$.each(this.modules, function(index, data) {
			Weebly.Storage[data].set(key, value);
		});
		
	}

};

Weebly.Storage.cookie = {
	init: function() {},
	
	get: function(key) {
		
		var matches = document.cookie.match(key + "\s?=\s?([^;]+);");
		matches = matches ? matches : document.cookie.match(key + "\s?=\s?([^;]+)$");
		if (matches && matches[1]) {
			return matches[1];
		}
		
	},
	
	set: function(key, value) {
		
		document.cookie = key + "=" + value + "; expires=Fri, 2 Oct 2020 23:59:59 UTC; path=/";
		
	}
};

Weebly.Storage.localStorage = {
	init: function() {},
	
	get: function(key) {
		
		try {
			var ret = localStorage[key];
			if (ret && typeof (ret.value) != 'undefined') {
				ret = ret.value;
			}
		}
		catch (e) {
			return false;
		}
		
		return ret;
		
	},
	
	set: function(key, value) {
		
		try {
			localStorage[key] = value;
		}
		catch (e) {}
		
	}
};

/*
-----------------------------------------------
Daniel Bulli
http://www.nuff-respec.com/technology/cross-browser-cookies-with-flash

With modifications by
David Rusenko
Weebly, Inc
----------------------------------------------- */

Weebly.Storage.flash = {
	init: function() {},
	
	onready: function() {
		this.cookie_id = "flashconnector";
		this.flash_cookie_ready = false;
		this.flash_cookie_able = false;
		this.flash_cookie = null;
		this.flash_alert = false;
		
		if (!document.getElementById || !document.getElementById(this.cookie_id))
			return;
		if (!this.get_movie(this.cookie_id))
			return;
		
		this.flash_cookie_ready = true;
		this.flash_cookie_able = this.flash_cookie.f_cookie_able();
		
		if (!Weebly.Storage.onReadyCalled) {
			Weebly.Storage.onReadyCalled = true;
			Weebly.Storage.onReady();
		}
	},
	

	is_able: function() {
		if (!this.flash_alert && !(this.flash_cookie_ready && this.flash_cookie_able)) {
			this.flash_alert = true;
		}
		return (this.flash_cookie_ready && this.flash_cookie_able);
	},
	
	del: function(key) {
		if (!this.is_able())
			return;
		this.flash_cookie.f_delete_cookie(key);
	},
	
	get: function(key) {
		if (!this.is_able())
			return false;
		try {
			var ret = this.flash_cookie.f_get_cookie(key);
			ret = ret == 'null' ? '' : ret;
			ret = typeof (ret) == 'undefined' ? false : ret;
		}
		catch (e) {
			return false;
		}
		
		return ret;
	},
	
	set: function(key, val) {
		if (!this.is_able())
			return;
		this.flash_cookie.f_set_cookie(key, val);
	},
	
	get_movie: function() {
		if (navigator.appName.indexOf("Microsoft") != -1) {
			this.flash_cookie = window[this.cookie_id];
		}
		else {
			this.flash_cookie = document[this.cookie_id];
		}
		
		return ((this.flash_cookie) ? true : false);
	}

};

function flash_ready() {
	Weebly.Storage.flash.onready();
}

// Initialize all modules
Weebly.Storage.init();
