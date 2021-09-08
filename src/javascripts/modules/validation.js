import $ from 'jquery';
import 'jquery-validation';
import 'jquery-validation/dist/localization/messages_ru';


$.validator.addMethod("phonenu", function (value, element) {
	if ( /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/g.test(value)) {
			return true;
	} else {
			return false;
	};
}, "Пожалуйста, введите корректный номер");

$(function(){
  $('form').each(function() {
		$(this).validate({
			lang: 'rus', 
			rules: {
				Name: {
					required: true,
					minlength: 3,
					normalizer: function(value) {
						return $.trim(value);
					}
				},
				Phone: {
					required: true,
					phonenu: true
				},
				Email: {
					email: true,
					required: true
				}
			}
		});
	});
});