/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"de/arvato/TestApp_01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});