import $ from 'jquery';

import createPlugin from 'jquery-plugin-generator';
import Slider from '../../components/slider';

class TestSlider extends Slider {

	static get Defaults () {
		return $.extend({}, Slider.Defaults, {
			'arrows': true,
			'dots': true
		});
	}

	constructor ($container, opts) {
		super ($container, opts);
	}
}

$.fn.testSlider = createPlugin(TestSlider);