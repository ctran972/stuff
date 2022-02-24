// ==UserScript==
// @name	youtube padding
// @match 	*
// @grant	none
// ==/UserScript==

(function() {
	'use strict';
	var css = "#player-container-id { height:-webkit-fill-available!important; padding-top:10rem!important; }\n";
	   css += "#player { height:inherit!important; }\n";
	   css += "video { width:668px!important; height:376px!important; left:0px!important; }\n";
           css += ".player-size { padding-bottom:56.25%!important }";
	var style = document.createElement("style");
	style.type = "text/css";
	style.appendChild(document.createTextNode(css));
	document.head.appendChild(style);
})();
