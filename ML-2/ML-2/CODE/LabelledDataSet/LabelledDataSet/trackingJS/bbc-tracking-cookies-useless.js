/*<![CDATA[*/ window.istats = (window.istats || {}); (istats.head = function(w,d) { w.istats._linkTracked = w.istats._trackingCookie = decodeURIComponent( (d.cookie.match(/\bsa_labels=([^;]+)/)||[]).pop() || '' ); var host = w.location.host, m = host.match(/(bbc(?:\.co\.uk|\.com))$/i); d.cookie = 'sa_labels=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=' + (m? m[1] : host) + '; path=/'; })(window,document); /*]]>*/