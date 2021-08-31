import $ from 'jquery';

import 'jquery.appear';
import 'jquery.transit';
import getAttributeValue from '../util/getAttributeValue'
import createPlugin from 'jquery-plugin-generator';

class Reveal {

	static get Defaults () {
		return $.extend({}, this.constructor.Defaults, {
			'offset': $(window).height() / 6,
			'groupDelay': 100,
			'delay': 0,
			'fadeIn': true,
			'slide': true,
			'duration': 900,
			'transform': {x: 0, y: -100, rotate: 0}
		});
	}

	constructor ($container, opts) {
		this.options = $.extend({}, this.constructor.Defaults, opts);
		this.$container = $container;
    this.update();
	}

	update () {
		const $container = this.$container;

		$container
			.find(`[${ 'data-reveal-group' }]`)
			// .addBack(`[${ 'data-reveal-group' }]`)
			.each((_index, element) => {
				this.attachGroup($(element));
			});

		$container
			.find(`[${ 'data-reveal' }]`)
			// .addBack(`[${ 'data-reveal' }]`)
			.not(`[${ 'data-reveal-group' }] [${ 'data-reveal' }]`)
			.each((_index, element) => {
				this.attachElement($(element));
			});
	}

	

	attachGroup ($group) {
		const $elements = $group.find(`[${ 'data-reveal' }]`);			
		$elements.each((_index, element) => {			
			const fadeIn = getAttributeValue($(element), 'data-reveal-fade-in', this.options.fadeIn);
			const slide = getAttributeValue($(element), 'data-reveal-slide', this.options.slide);
			const transform = $.extend({}, this.options.transform, $(element).data("reveal-transform"));

			if(fadeIn) {
				$(element).css({opacity: 0});
			}
			if(slide) {												
				$(element).css({translate: [-transform.x, -transform.y], rotate: -transform.rotate + 'deg'});
			}
		});
		$group.appear(() => {
			this.animateGroup($group);
		},{accY: -this.options.offset});
	}

	attachElement ($element) {
		const fadeIn = getAttributeValue($element, 'data-reveal-fade-in', this.options.fadeIn);
		const slide = getAttributeValue($element, 'data-reveal-slide', this.options.slide);
		const transform = $.extend({}, this.options.transform, $element.data("reveal-transform"));

		if(fadeIn) {
			$element.css({opacity: 0});
		}
		if(slide) {												
			$element.css({translate: [-transform.x, -transform.y], rotate: -transform.rotate + 'deg'});
		}
		$element.appear(() => {
			this.animateElement($element);
		},{accY: -this.options.offset});
	}

	animateGroup ($group) {
		const $elements = $group.find(`[${ 'data-reveal' }]`);
		const delay = this.options.delay;
		const offset = this.options.offset;
		const groupOptions = { delay, offset};

		$elements.each((_index, element) => {
			this.animateElement($(element), groupOptions);
		});
	}

	animateElement ($element, groupOptions = {}) {
		const duration = getAttributeValue($element, 'data-reveal-duration', this.options.duration);
		const itemDelay = getAttributeValue($element, 'data-reveal-delay', groupOptions);
		const delay = (groupOptions.delay || 0) + itemDelay;

		let interval = setTimeout(() => {
			$element.transition({opacity: '', translate: '0, 0', rotate: 0}, duration, 'ease');				
		}, delay);
		
	}
}

$.fn.reveal = createPlugin(Reveal, {
	'api': ['instance', 'update']
});