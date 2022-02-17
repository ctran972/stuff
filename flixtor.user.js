// ==UserScript==
// @name	Flixtor resize
// @match 	https://flixtor.to/*
// @grant	none
// ==/UserScript==

(function() {
	'use strict';
	var css = "#playerwrapper { margin: 1.60rem -2.5rem 0rem -2.5rem !important; }";
	var style = document.createElement("style");
	style.type = "text/css";
	style.appendChild(document.createTextNode(css));
	document.head.appendChild(style);
})();
