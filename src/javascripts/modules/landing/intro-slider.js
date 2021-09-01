import $ from 'jquery';

import createPlugin from 'jquery-plugin-generator';
import Slider from '../../components/slider';

class IntroSlider extends Slider {

	static get Defaults () {
		return $.extend({}, Slider.Defaults, {
			arrows: true,
			dots: true,
			autoplay: true,
  		autoplaySpeed: 3000,
			slidesToShow: 1,
			infinite: true,
			fade: true,
			slidesToScroll: 1
		});
	}

	constructor ($container, opts) {

		const holder = $container.find('.slider__holder');

		holder.on('init', function(event, slick, _currentSlide){
			const currentSlide = holder.find('.slick-slide:not(.slick-cloned)').eq(_currentSlide || 0);
			const contentHeight = currentSlide.find('.intro__holder').height();
			const fakeContent = $container.find('.intro-slider__fake-content');
			const counter = $container.find('.intro-slider__counter');
			const btnUrl = currentSlide.find('.intro__fake-btn').attr('href');

			$container.find('.intro__btn').attr('href', btnUrl);

			fakeContent.height(contentHeight - 100);

			var i = (_currentSlide ? _currentSlide : 0) + 1;
			counter.find('.cur').text(i.toString().padStart(2, '0'));
			counter.find('.overal').text(slick.slideCount.toString().padStart(2, '0'));
		});

		super ($container, opts);

		function update(slick, _nextSlide) {
			const nextSlide = holder.find('.slick-slide:not(.slick-cloned)').eq(_nextSlide || 0);
			const contentHeight = nextSlide.find('.intro__holder').height();
			const fakeContent = $container.find('.intro-slider__fake-content');
			const counter = $container.find('.intro-slider__counter');
			const btnUrl = nextSlide.find('.intro__fake-btn').attr('href');

			$container.find('.intro__btn').attr('href', btnUrl);

			fakeContent.height(contentHeight - 100);

			var i = (_nextSlide ? _nextSlide : 0) + 1;
			counter.find('.cur').text(i.toString().padStart(2, '0'));
			counter.find('.overal').text(slick.slideCount.toString().padStart(2, '0'));
		}

		holder.on('beforeChange', function(event, slick, currentSlide, _nextSlide){
			update(slick, _nextSlide);
		});
	}
}

$.fn.introSlider = createPlugin(IntroSlider);