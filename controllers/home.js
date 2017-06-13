(function(){

	angular.module("app")
		.controller("homeController", homeController);


	function homeController($state, $ionicPopup) {

		var self = this;

		self.login = function() {
			$ionicPopup.show({
				// template: '<input type="password" ng-model="data.wifi">',
				title: 'Login',
				subTitle: 'Login with twitter to have your skills',
				buttons: [
					{
						text: '<b>Login with github</b>',
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
