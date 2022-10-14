'use strict';
var videoExtensions = require('video-extensions');
var exts = Object.create(null);

videoExtensions.forEach(function (el) {
	exts[el] = true;
});

module.exports = function (filepath) {
	return filepath.split('.').slice(-1)[0].toLowerCase() in exts;
};
