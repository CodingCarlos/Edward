(function(){

	angular.module("app")
		.controller("userController", userController);


	function userController($scope, user, skill, $ionicPopup) {

		var self = this;

		self.skill = skill;
		self.user = user;

		self.addSkill = function() {
			$ionicPopup.show({
				scope: $scope,
				template: '<div id="add-skill"><input type="text" placeholder="node, python, MySql..." ng-model="data.skill"> <br> <input type="text" ng-model="data.prove" placeholder="Prove: A project, repository, or URL"></div>',
				title: 'Add skill',
				// subTitle: 'Select a new skill and some resurce that can prove it.',
				buttons: [
					{
						text: 'Add skill',
						type: 'button-positive',
						onTap: function(e) {
							console.log($scope.data);
							// $state.go('register');
						}
					}
				]
			});
		};

		// This shall be done via a github login and so on but... you know ^^
		self.user.set({
			name: 'Carlos Hernandez',
			pic: 'https://avatars3.githubusercontent.com/u/7394623?v=3&s=200',
			github: 'CodingCarlos'
		});

		self.skill.list = [
			{
				name: 'PHP', 
				badge: 'PHP',
				reason: 'PHP-Mailing-List',
				enabled: true
			}, 
			{
				name: 'HTML', 
				badge: 'HTML',
				reason: 'landing-profile',
				enabled: true
			}, 
			{
				name: 'JS', 
				badge: 'js',
				reason: 'jquery-test-repo',
				enabled: true
			}
		];
	}
	
})();