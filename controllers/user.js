(function(){

	angular.module("app")
		.controller("userController", userController);


	function userController($scope, user, skill, $ionicPopup) {

		var self = this;

		self.skill = skill;
		self.user = user;

		self.adding = false;
		self.newSkill = {};

		self.addSkill = function() {
			console.log(self.newSkill);

			self.newSkill.badge = self.newSkill.name.substr(0,4);
			self.newSkill.enabled = true;

			skill.add(self.newSkill);

			self.newSkill = {};
			self.adding = false;
		};

		// This shall be done via a github login and so on but... you know ^^
		if(self.skill.list.length === 0) {

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
	}
	
})();