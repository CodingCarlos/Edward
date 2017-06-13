(function(){

	angular.module("app")
		.controller("userController", userController);


	function userController(user, skill) {

		var self = this;

		self.skill = skill;
		self.user = user;

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
				enabled: true
			}, 
			{
				name: 'HTML', 
				badge: 'HTML',
				enabled: true
			}, 
			{
				name: 'JS', 
				badge: 'js',
				enabled: true
			}
		];
	}
	
})();