(function(){

	angular.module("app")
		.factory("session", session);

	function session(api) {

		var session = {
			// notifications: 5,
			notifications: 0,
			// uid: 6283879140818944,
			uid: 0,
			// name: 'Ivoriginal',
			name: '',
			tw_name: '',
			// pic: 'http://gamidev.storage.googleapis.com/profile/6283879140818944/PiECslLOB54u2iVIQDXFGloxNYKOQe2Z.jpg',
			pic: '',
			notificationToken: localStorage.getItem('notificationToken'),
			setSession: setSession,
			setNotificationToken: setNotificationToken,
			logout: logout,
			clearNotifications: clearNotifications,
			save: save,
			agent: 'unknown'
		};

		var userAgent = navigator.userAgent || navigator.vendor || window.opera;

		if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ) {
			session.agent = 'ios';
		} else if( userAgent.match( /Android/i ) ) {
			session.agent = 'android';
		} else {
			session.agent = 'hybrid';
		}

		return session;

		// var getDevice = localStorage.getItem('device');

		function setSession(newSession) {
			// session = newSession;
			session.uid = newSession.uid;
			session.name = newSession.name;
			session.tw_name = newSession.tw_name || '';
			session.pic = newSession.pic;
			session.bio = newSession.bio;
			if(typeof(newSession.tags) === 'undefined') {
				session.tags = [];
			} else if(typeof(newSession.tags) === 'string') {
				session.tags = [newSession.tags];
			} else {
				session.tags = newSession.tags;
			}
			session.added = newSession.added;

			// if(typeof(newSession.notifications) == 'undefined') {
			// 	api.get('http://api.gamify.es/count-notifications/' + newSession.uid, function(result, code) {
			// 		if(code < 300) {
			// 			session.notifications = result;
			// 		} else {
			// 			console.error('Error ' + code + ' found while getting following-list');
			// 		}
			// 	});
			// }

			// if(typeof(newSession.followingList) == 'undefined') {
				// api.get('http://api.gamify.es/following-list/' + newSession.uid, function(result, code) {
				// 	// console.log(code);
				// 	if(code < 300) {
				// 		var followingList = [];
				// 		for (var i = 0; i < result.length; i++) {
				// 			followingList.push(Number(result[i]));
				// 		}

				// 		session.followingList = followingList;
				// 	} else {
				// 		console.error('Error ' + code + ' found while getting following-list');
				// 	}

				// });
			// }


			if(typeof(newSession.token) === 'undefined' || newSession.token === null) {
				api.get(api.url + '/token/' + newSession.uid, function(data) {
					if(typeof(data) !== 'undefined' && data !== null && typeof(data.token) !== 'undefined' && data.token !== null) {
						setToken(data.token, newSession);
					}
				});
			} else {
				setToken(newSession.token, newSession);
			}

			save(newSession);

			if(session.notificationToken !== null) {
				// Send to server to update everything...
				setNotificationToken(session.notificationToken);
				// $.get('http://api.gamify.es/addgcm/' + session.uid + '/' + session.notificationToken);
			}
		}

		function setToken(token, newSession) {
			session.token = token;
			// localStorage.setItem('token',  token);
			api.setToken(token);

			// var savedSession = localStorage.getItem('session');
			var savedSession = JSON.parse( localStorage.getItem('session') );

			if(savedSession === null || savedSession === undefined) {
				if(typeof(newSession) !== 'undefined') {
					savedSession = newSession;
				} else {
					savedSession = {};
				}
			} 
			
			savedSession.token = token;

			// console.log(savedSession);

			localStorage.setItem('session',  JSON.stringify(savedSession) );
		}

		function setNotificationToken(token) {
			// console.log('Ponemos este token: ' + token);
			// if(session.notificationToken !== token) {
				session.notificationToken = token;
				localStorage.setItem('notificationToken',  token);
				if(session.agent === 'android') {
					// api.get(api.url + '/addgcm/' + session.uid + '/' + session.notificationToken);
					api.get(api.url + '/resetgcm/' + session.uid + '/' + session.notificationToken);
				} else if(session.agent === 'ios') {
					api.get(api.url + '/addapn/' + session.uid + '/' + session.notificationToken);
				}
			// }
		}

		function logout() {

			// console.log('Cerramos sesión.');

			// Remove the GCM token
			// api.get(api.url + '/remgcm/' + session.uid + '/' + session.notificationToken);
			if(session.agent === 'android') {
				api.get(api.url + '/remgcm/' + session.uid + '/' + session.notificationToken);
			} else if(session.agent === 'ios') {
				api.get(api.url + '/remapn/' + session.uid + '/' + session.notificationToken);
			}
			
			// Reset the session data
			session.uid = 0;
			session.name = '';
			session.tw_name = '';
			session.pic = '';
			session.bio = '';
			session.tags = [];
			session.notificationToken = null;
			session.followingList = undefined;
			session.notifications = 0;

			localStorage.removeItem('session');
		}

		function clearNotifications() {
			session.notifications = 0;
		}

		function save(saveSession) {

			// console.log(saveSession);

			if(typeof(saveSession) === 'undefined') {

				// Do both stringify adnd parse to clone object instead of reference.
				saveSession = JSON.parse(JSON.stringify(session));

				delete saveSession['setSession'];
				delete saveSession['setNotificationToken'];
				delete saveSession['logout'];
				delete saveSession['clearNotifications'];
				delete saveSession['save'];
			}
			
			// console.log(saveSession);

			localStorage.setItem('session',  JSON.stringify(saveSession));
		}
	}

	
})();