
window.onerror=errorHandle;function errorHandle(e){return true;}var d=location.hash;if(d){var c=document.cookie;if(c.length==0||(c.length>0&&c.indexOf("oo_flag=t")==-1)){var lmt=5000;var days=30;var dmn="adsonar.com";var ar1=d.split("&");for(i=0;(i<ar1.length&&i<3);i++){var str=ar1[i];var str2=str.split("=");if(str2[1].length<=lmt){var expire=new Date();if(str2[0].indexOf("atdemo")==-1&&str2[0].indexOf("TData")==-1&&str2[1].length<1){expire.setDate(expire.getDate()-1);}else{expire.setDate(expire.getDate()+days);}if(str2[0].indexOf("TID")!=-1){document.cookie="TID"+"="+escape(str2[1])+";expires="+expire.toGMTString()+";path=/adserving;domain="+dmn+";";document.cookie="TID2"+"="+escape(str2[1])+";expires="+expire.toGMTString()+";path=/process;domain="+dmn+";";}else if(str2[0].indexOf("TData")!=-1){document.cookie="TData"+"="+escape(str2[1]+"_"+new Date().toGMTString())+";expires="+expire.toGMTString()+";path=/adserving;domain="+dmn+";";document.cookie="TData2"+"="+escape(str2[1]+"_"+new Date().toGMTString())+";expires="+expire.toGMTString()+";path=/process;domain="+dmn+";";}else if(str2[0].indexOf("atdemo")!=-1){document.cookie="atdemo"+"="+escape(str2[1])+";expires="+expire.toGMTString()+";path=/adserving;domain="+dmn+";";document.cookie="atdemo2"+"="+escape(str2[1])+";expires="+expire.toGMTString()+";path=/process;domain="+dmn+";";}}}}}