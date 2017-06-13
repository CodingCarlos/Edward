(function(){

	angular.module("app")
		.controller("appCtrl", appController);


	function appController(api, $state, session) {
	// function appController(api, app, $state, session) {
	// function appController(api, app, camera, $cordovaStatusbar, $cordovaPushV5, fullView, $ionicViewSwitcher, $rootScope, $scope, $state, session, track, version) {
							// $cordovaStatusbar, $state, $rootScope, $timeout, app, api, $cordovaPushV5, session, track, fullView, camera, version
		var self = this;

		self.session = session;
		self.logout = logout;

		// version.compare();

		var localSession = JSON.parse( localStorage.getItem('session') );

		if(localSession !== null) {
			self.session.setSession(localSession);
			// console.log(localSession);
		} else {
			console.error('THERE IS NO SESSION');
			alert(123);
		}

		function logout() {
			session.logout();
			$state.go('landing');
		}

		// function statusbar() {			

		// 	var userAgent = navigator.userAgent || navigator.vendor || window.opera;
		// 	var device = 'unknown';

		// 	if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ) {
		// 		device = 'ios';
		// 	} else if( userAgent.match( /Android/i ) ) {
		// 		device = 'android';
		// 	} else {
		// 		device = 'hybrid';
		// 	}

		// 	if(device == 'ios') {
		// 		$cordovaStatusbar.styleHex('#ff9800');
		// 	} else {
		// 		$cordovaStatusbar.styleHex('#f57c00');
		// 	}

		// 	$cordovaStatusbar.overlaysWebView(false);
		// }

	}

	function updateDom() {
		setTimeout(function() {
			// Update all the component handler to fix the js created elements
			window.componentHandler.upgradeAllRegistered();
		}, 500); 
	}

	
})();