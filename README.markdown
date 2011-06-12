Bouncer
=======
Bouncer is a jQuery plugin that acts as an enforcer on your text inputs. With bouncer you can control who gets in and who doesn't, as well as your max capacity.

Installation
------------
The only requirement for Bouncer is jQuery. Quickly tested to work against 1.3, 1.4, 1.5 and 1.6.

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js" type="text/javascript" charset="utf-8"></script>

Options
-------
`alpha` - Allows alphabetical characters.

`numeric` - Allows numeric characters.

`maxlength' - Max length of the input (useful for textareas).

`allow` - Characters to allow, if not using alpha / numeric options or adding in additional characters.

`disallow` - Characters to disallow.

`punctuation` - Enable default punctuation.

`uppercase` - Allow uppercase alphabetical characters.

`lowercase` - Allow lowercase alphabetical characters.

`space` - Allow for spaces.

Example
-------
	$('#inputField').bouncer({maxlength: 16, disallow: "asdf"});

Bouncer is also chainable.

	$('#inputField').bouncer({maxlength: 16, disallow: "asdf"}).css('color', 'red');

Future
------
Currently Bouncer only supports traditional English input by default. Would definitely need to support additional character sets before going mainstream. Bouncer was originally built for traditional English projects.

Bouncer doesn't check against input via copy and paste.

Bouncer is my first attempt at a jQuery plugin and GitHub.