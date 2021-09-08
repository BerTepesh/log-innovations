import $ from 'jquery';

import createPlugin from 'jquery-plugin-generator';
import Slider from '../components/slider';

class Preview extends Slider {

	static get Defaults () {
		return $.extend({}, Slider.Defaults, {
			arrows: false,
			dots: false,
			fade: true,
			autoplay: false,
  		autoplaySpeed: 3000,
			slidesToShow: 1,
			infinite: false,
			slidesToScroll: 1,
			asNavFor: '.preview .slider-nav'
		});
	}

	constructor ($container, opts) {
		super ($container, opts);

		$container.find('.slider-nav').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			asNavFor: $container.find('.slider__holder'),
			dots: false,
			arrows: true,
			infinite: false,
			centerMode: false,
			focusOnSelect: true
		});

	}
}

$.fn.preview = createPlugin(Preview);