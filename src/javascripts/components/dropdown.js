import $ from 'jquery';

import createPlugin from 'jquery-plugin-generator';

class Dropdown {

	constructor ($container) {
		this.$container = $container;
    this.update();
	}

	update () {
		const $container = this.$container;
		const $btn = $container.find(`[${ 'data-dropdown-btn' }]`);
		$btn.on('click', function(event){	
			let href = $(this).attr('href');
			let hash = href.substring(1);
			if (hash !== '') {
				event.preventDefault();
				const target = $('[data-dropdown-content="'+hash+'"]');
				if(target.length > 0)  {
					if ( target.is(':hidden') ) {
						target.slideDown(300);	
						$(this).addClass('droped');
					} else {
						target.slideUp(300);
						$(this).removeClass('droped');
					}
				}
			}
		});
	}

	init () {
	}
}

$.fn.dropdown = createPlugin(Dropdown, {
	'api': ['instance', 'update']
});

