import $ from 'jquery';

import 'jquery-app';
import svg4everybody from 'svg4everybody';
import 'lazysizes';

import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import "lazysizes/plugins/unveilhooks/ls.unveilhooks"

import '../modules/preloader';
import '../modules/sticky-header';
import '../modules/ham-panel';
import '../modules/smooth-scroll';
import '../modules/modal';
import '../modules/reveal';
import '../components/dropdown';
import '../modules/validation';

import '../modules/landing/intro-slider';
import '../modules/landing/partners-slider';

import '../modules/preview';


$(function() {
	$('body').app();
	svg4everybody();
});


