import $ from 'jquery';
import slider from 'slick-carousel';

export default class Slider {

	static get Defaults () {
			return {
				'arrows': false,
				'dots': false,
				'autoplay': false,
				'autoplaySpeed': 2000,
				'slidesToShow': 1,
				'slidesToScroll': 1,
				'infinite': false,
				'fade': false,
				'asNavFor': '',
				'responsive': []
			};
	}

	constructor ($container, opts) {

		const options = this.options = $.extend({}, this.constructor.Defaults, opts);

		$container.find('.slider__holder').slick({
			arrows: options.arrows,
			fade: options.fade,
			dots: options.dots,
			appendDots: $container.find('.slider__dots'),
			slidesToShow: options.slidesToShow,
			slidesToScroll: options.slidesToScroll,
			swipeToSlide: true,
			infinite: options.infinite,
			accessibility: false,
			autoplay: options.autoplay,
			autoplaySpeed: options.autoplaySpeed,
			speed: 900,
			asNavFor: options.asNavFor,
			prevArrow: '<button type="button" class="prev"></button>',
			nextArrow: '<button type="button" class="next"></button>',
			appendArrows: $container.find('.slider__nav'),
			responsive: options.responsive
		});

	}

	init () {
	}

	destroy () {
			this.disable();

			each(this.mediaListeners, (fn) => fn());
			this.mediaListeners = this.options = this.$container = null;
	}

	enable () {
			if (this.enabled) return;
			this.enabled = true;
			return true;
	}

	disable () {
			if (!this.enabled) return;
			this.enabled = false;
			return true;
	}
}
