(function(){

	angular.module("app")
		.controller("homeController", homeController);


	function homeController($scope, $state, $ionicPopup, $firebaseAuth, user) {

		var self = this;


		var auth = $firebaseAuth();

		$scope.signIn = function() {
			$scope.firebaseUser = null;
			$scope.error = null;

			auth.$signInWithPopup('github').then(function(firebaseUser) {
				$scope.firebaseUser = firebaseUser;

				console.log(firebaseUser.user.displayName);
				console.log(firebaseUser.user.photoURL);

				user.set({
					name: firebaseUser.user.displayName || 'developer',
					pic: firebaseUser.user.photoURL || 'http://gamidev.storage.googleapis.com/profile/4897391555641344/glSNWSko4O9DtnJ9iNGGj8KlAAQ1h5JL.png'
				});
                
                console.log(firebaseUser);

				$state.go('register');

				
			}).catch(function(error) {
				$scope.error = error;
			});
		};

		self.login = function() {
			$ionicPopup.show({
				// template: '<input type="password" ng-model="data.wifi">',
				title: 'Login',
				subTitle: 'Login with GitHub to have your skills',
				buttons: [
					{
						text: '<b>Login with GitHub</b>',
						type: 'button-positive',
						onTap: function(e) {
							$state.go('register');
						}
					}
				]
			});
		};

	}
	
})();
