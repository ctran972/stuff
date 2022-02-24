// ==UserScript==
// @name	youtube padding
// @match 	*
// @grant	none
// ==/UserScript==

(function() {
	'use strict';
	var css = "#player-container-id { height:-webkit-fill-available; padding-top:10rem; }\n";
	   css += "#player { height:inherit; }\n";
	   css += "video { width:668px; height:376px; left:0px; }\n";
	var style = document.createElement("style");
	style.type = "text/css";
	style.appendChild(document.createTextNode(css));
	document.head.appendChild(style);
})();
