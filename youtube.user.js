// ==UserScript==
// @name	youtube padding
// @match 	*
// @grant	none
// ==/UserScript==

(function() {
	'use strict';
	var css = "#player-container-id { padding-top: 5rem !important; }";
	var style = document.createElement("style");
	style.type = "text/css";
	style.appendChild(document.createTextNode(css));
	document.head.appendChild(style);
})();
