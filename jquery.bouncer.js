(function($) {
	$.fn.bouncer = function(options) {
		options = $.extend({
			alpha: true,
			numeric: true,
			maxlength: -1,
			allow: "",
			disallow: "",
			punctuation: true,
			uppercase: true,
			lowercase: true,
			space: true
		}, options);
		
		return this.each(function() {
			var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			var numbers = "0123456789";
			
			if (options.punctuation)
				options.allow += "!@#$%^&*()-_=+,.?;:'\"[]{}\\|/`~";
			
			if (options.space)
				options.allow += " ";
			
			if (options.alpha) {
				if (options.uppercase)
					options.allow += alphabet;
				else
					options.disallow += alphabet;
					
				if (options.lowercase)
					options.allow += alphabet.toLowerCase();
				else
					options.disallow += alphabet.toLowerCase();
			} else {
				options.disallow += alphabet + alphabet.toLowerCase();
			}
			
			if (options.numeric)
				options.allow += numbers;
			else
				options.disallow += numbers;
			
			$(this).keypress(function(e) {					
				if (!e.charCode)
					ch = String.fromCharCode(e.which);
				else
					ch = String.fromCharCode(e.charCode);
					
				if ((options.disallow.indexOf(ch) != -1 || options.allow.indexOf(ch) == -1) || (options.maxlength > -1 && ($(this).val() + ch).length > options.maxlength)) {
					if (e.keyCode != 8 && e.keyCode != 9 && e.keyCode != 37 && e.keyCode != 39)
						e.preventDefault();
				}
				
			});
		});
	};
})(jQuery);