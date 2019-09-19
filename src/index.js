// SASS
import './asset/style/index.sass';
// Script
import './asset/script/index';

// Setting Isotope - Gallary Fillter
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
jQueryBridget( 'isotope', Isotope, $ );

// Seting Fancybox
var $ = require("jquery");
window.jQuery = $;
