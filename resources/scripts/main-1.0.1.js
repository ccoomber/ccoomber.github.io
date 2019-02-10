window.addEventListener("load", function(){
	window.cookieconsent.initialise({
		"palette": {
			"popup": {
				"background": "#ffffff"
			},
			"button": {
				"background": "#455a64"
			}
		},
		"content": {
			"message": "This website uses cookies to ensure you get the best experience.",
			"dismiss": "Dismiss"
		},
		"theme": "block",
		"position": "top",
		"domain": "https://ccoomber.com",
		elements: {
			header: '<span class="cc-header z-depth-5">{{header}}</span>&nbsp;',
			message: '<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',
			messagelink: '<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{href}}" target="_blank" rel="noreferrer">Learn more</a></span>',
			dismiss: '<a aria-label="dismiss cookie message" tabindex="0" class="cc-btn cc-dismiss waves-effect waves-light btn blue-grey darken-2 cookie-dismiss-override">{{dismiss}}</a>',
			link: '<a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{href}}" target="_blank" rel="noreferrer">Learn more</a>',
		},
		window: '<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window z-depth-5 {{classes}}"><!--googleoff: all-->{{children}}<!--googleon: all--></div>'
	})});