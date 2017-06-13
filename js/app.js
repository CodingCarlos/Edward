
var userAgent = navigator.userAgent || navigator.vendor || window.opera;
var device = 'unknown';

if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ) {
	device = 'ios';
} else if( userAgent.match( /Android/i ) ) {
	device = 'android';
} else {
	device = 'hybrid';
}

if(device == 'ios') {
	// $('<link rel="stylesheet" type="text/css" href="css/ios.css" />').appendTo("head");
	console.log('ios device');
}


angular.module('app', ['ionic','debounce', 'pascalprecht.translate'])
								// 'ionic-native-transitions',
	.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider, $translateProvider) {

		$ionicConfigProvider.scrolling.jsScrolling(false);

		var lang = 'es_es';

		var shortLang = navigator.language.split('-')[0];

		switch(shortLang){
			case 'es':
			lang = 'es_es';
			break;

			case 'en':
			lang = 'en_us';
			break;
		}

		$translateProvider.preferredLanguage(lang);

		/* STATES */

		$stateProvider
			// .state('splashscreen', {
			// 	url: "/splashscreen",
			// 	templateUrl: "views/splashscreen.html",
			// 	controller: "splashscreenCtrl"
			// })
			.state('home', {
				url: "/home",
				templateUrl: "views/home.html"
			})
			.state('profile', {
				url: "/profile/:uid",
				templateUrl: "views/profile.html"
			})
			.state('register', {
				url: "/register",
				templateUrl: "views/register.html"
			});
			// .state('tabs', {
			// 	url: "",
			// 	abstract: true,
			// 	// templateUrl: "views/tabs.html"
			// 	templateUrl: "views/layout-" + device + ".html"
			// })
			// 	.state('feed', {
			// 		parent: 'tabs',
			// 		url: "/feed",
			// 		views: {
			// 			'home-tab': {
			// 				templateUrl: "views/feed.html"
			// 				// templateUrl: "templates/home.html",
			// 				// controller: 'HomeTabCtrl'
			// 			}
			// 		}
			// 	})

		$urlRouterProvider.otherwise("/home");

	});
