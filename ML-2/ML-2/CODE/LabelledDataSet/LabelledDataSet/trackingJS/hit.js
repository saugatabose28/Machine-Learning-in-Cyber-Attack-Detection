
if (window.CVO) {
  CVO.log("<< H[999999999]");
}
else if (window.$CVO) {
  $CVO.INFO("<< H[999999999]");
}

if (window.$CVO.run) {
  $CVO.run( 'trackEventDone', "1" );
}
else if (window.$CVO['getVersion']) {
  $CVO.push([ 'trackEventDone', "1" ]);
}
if (window.$CVO.run) {
  $CVO.run( 'stampTids', 1417689282 );
}
else {
  $CVO.push([ 'stampTids', 1417689282 ]);
}
(function () {
	var lif = function(html) {
		var f;
		try{
			var el=document.createElement("iframe");
			el.src='javascript:""';
			el.id='__cvo_iframe';
			el.style.position='absolute';
			el.style.left='-2000px';
			document.body.insertBefore(el, document.body.firstChild);
			f=document.getElementById(el.id).contentWindow;
			if (f&&f.document&&f.document.write) {
				f.document.write(html);
				f.document.close();
			}
		} catch (e) {
			$CVO.error = e
		}
		return f;
	}

	var html = '<html><head></head><body><img width="1" height="1" src="//idsync.rlcdn.com/366738.gif?partner_uid=CYSZ4MM3QPB6"/></body></html>';
	return lif(html);
})();
