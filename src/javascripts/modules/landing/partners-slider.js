import $ from 'jquery';

import createPlugin from 'jquery-plugin-generator';
import Slider from '../../components/slider';

class PartnersSlider extends Slider {

	static get Defaults () {
		return $.extend({}, Slider.Defaults, {
			arrows: true,
			dots: true,
			autoplay: true,
  		autoplaySpeed: 3000,
			slidesToShow: 4,
			infinite: true,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	}

	constructor ($container, opts) {

		const holder = $container.find('.slider__holder');
		const counter = $container.find('.slider__counter');

		holder.on('init', function(event, slick, _currentSlide) {
			const i = (_currentSlide ? _currentSlide : 0) + 1;
			const cur = i.toString().padStart(2, '0');
			const overal = slick.slideCount.toString().padStart(2, '0');

			counter.html(`<p><span class="cur">${cur}</span> / <span class="overal">${overal}</span></p>`);
		});

		super ($container, opts);

		holder.on('beforeChange', function(event, slick, _nextSlide) {
			const i = (_nextSlide ? _nextSlide : 0) + 1;
			const cur = i.toString().padStart(2, '0');
			const overal = slick.slideCount.toString().padStart(2, '0');

			counter.html(`<p><span class="cur">${cur}</span> / <span class="overal">${overal}</span></p>`);
		});
	}
}

$.fn.partnersSlider = createPlugin(PartnersSlider);