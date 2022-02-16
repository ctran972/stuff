// ==UserScript==
// @name	New Add-on
// @match 	*
// @run-at	document-end
// @grant	none
// ==/UserScript==

(function() {
	'use strict';
	var css = "#playerwrapper { margin: 1rem -2rem 0rem -2rem !important; }";
	var style = document.createElement("style");
	style.type = "text/css";
	style.appendChild(document.createTextNode(css));
	document.head.appendChild(style);
})();
