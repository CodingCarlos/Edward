(function(){

	angular.module("app")
		.factory("app", appService);

	function appService() {
	// function appService($cordovaSocialSharing, $state, android, ios, session, snackbar, track, feedService, getNotifications, getUser, live, $translate) {

		var self = {};

		// self.back = function() {
		// 	window.history.back();
		// };

		// self.handledBack = false;
		// self.handledBackCount = 0;
		// self.handleBack = function() {

		// 	if(!self.handledBack) {
		// 		self.handledBack = true;

		// 		document.addEventListener("backbutton", function(event) {
		// 			// Try to disable back on feed
		// 			if($state.current.name == 'feed' && window.location.hash.indexOf('?img') == -1) {
		// 				if(self.handledBackCount < 2) {
		// 					if(self.handledBackCount == 1) {
		// 						snackbar.show($translate.instant("PRESS_AGAIN_TO_QUIT"));
		// 					}
		// 					self.handledBackCount++;
		// 					event.preventDefault();
		// 				} else {
		// 					navigator.app.exitApp();
		// 				}
		// 			} else {
		// 				self.handledBackCount = 0;
		// 				self.back();
		// 			}
		// 		}, true);
		// 	}
		// };

		// var userAgent = navigator.userAgent || navigator.vendor || window.opera;
		// var device = 'unknown';

		// if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ) {
		// 	device = 'iOS';
		// } else if( userAgent.match( /Android/i ) ) {
		// 	device = 'Android';
		// } else {
		// 	device = 'unknown';
		// }

		// self.device = device;

		// /** 
		//  *	INJECT BOTH ANDROID AND IOS SPECIFIC MODULES 
		//  *
		//  *	Then, here do a single device check, and fire the appropiate 
		//  *	service function. So, this would be a wrapper for both android and
		//  *	ios services.
		//  *
		//  *	Try to find a way to improve this solution, becouse is a little bit
		//  *	overload as achitecture.
		//  *
		//  */

		// if(device === 'iOS') {
		// 	self.switchTab = ios.switchTab;
		// 	self.initNav = ios.initNav;
		// 	// self.switchTab = android.switchTab;
		// 	// self.initNav = android.initNav;
		// } else {
		// 	self.switchTab = android.switchTab;
		// 	self.initNav = android.initNav;
		// }



		// // UNLOCKED MODAL

		// self.modal = {
		// 	aid: -1,
		// 	uid: -1,
		// 	title: '',
		// 	description: '',
		// 	img: '',
		// 	icon: ''
		// };

		// self.showUnlock = function(publication) {
		// 	self.modal = publication;
		// 	$('#unlocked-modal').show();	
		// };

		// self.hideUnlock = function() {
		// 	self.modal = {
		// 		aid: -1,
		// 		uid: -1,
		// 		title: '',
		// 		description: '',
		// 		img: '',
		// 		icon: ''
		// 	};
		// 	$('#unlocked-modal').hide();	
		// };

		// self.shareUnlock = function() {
		// 	// Track
		// 	track.track('event', 'shareUnlock', {
		// 		category: track.screen('event'), 
		// 		label: self.modal.achievement,
		// 		achievement: self.modal.title,
		// 		aid: self.modal.achievement,
		// 		user: session.name,
		// 		uid: session.uid
		// 	});

		// 	var message = session.name + $translate.instant("HAS_UNLOCKED_ACHIEVEMENT") + self.modal.title + $translate.instant("IN_GAMIFY"); 
		// 	var subject = $translate.instant("HASH_ACHIEVEMENT_UNLOCK");
		// 	var file = self.modal.img;
		// 	var link = 'https://goo.gl/aZR57f';

		// 	$cordovaSocialSharing.share(message, subject, file, link) // Share via native share sheet
		// 		.then(function(result) {
		// 			// Success!
		// 			console.log("shared!!");
		// 			console.log(result);

		// 			self.hideUnlock();
		// 		}, function(err) {
		// 			// An error occured. Show a message to the user
		// 			alert($translate.instant("FAILED_TO_SHARE"));
		// 		});
		// };

		// self.challenge = function() {
		// 	$state.go('challenge', {aid: self.modal.aid});
		// 	self.hideUnlock();
		// };


		// self.refresh = function(page) {
		// 	switch(page) {
		// 		case 'feed':
		// 			feedService.getNews(function() {
		// 				console.log('News Feed reloaded'); 
		// 				mRefresh.resolve();
		// 			});
		// 			break;

		// 		case 'live': 
		// 			live.getNews(function() {
		// 				console.log('News Live reloaded'); 
		// 				mRefresh.resolve();
		// 			});
		// 			break;

		// 		case 'notifications':
		// 			getNotifications.getNotifications(function() {
		// 				console.log('Notifications reloaded!!');
		// 				mRefresh.resolve();
		// 			});
		// 			break;

		// 		case 'me':
		// 			getUser.get(session.uid, function() {
		// 				console.log('Profile reloaded!!');
		// 				mRefresh.resolve();
		// 			});
		// 			break;
		// 	}
		// };

		return self;

	}
	
})();


