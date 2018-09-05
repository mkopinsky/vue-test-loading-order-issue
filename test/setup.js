require('jsdom-global')()

// global.expect = require('chai').expect
global.$ = function() { return global.$; };
global.$.get = function() {};
global.$.chosen = function() { return global.$; };
global.$.change = function() { return global.$; };
global.$.emojipicker = function() { return global.$; };
global.$.trigger = function() { return global.$; };
global.$.has = function() { return global.$; };
global.$.tooltip = function() { return global.$; };

window.confirm = function() { return true; }