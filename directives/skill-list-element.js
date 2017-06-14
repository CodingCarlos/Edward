(function () {

	angular
		.module('app')
		.directive('skillListElement', skillListElementDirective);


	function skillListElementDirective(skill) {

		return {

			restrict: 'E',
			// scope: false,
			scope: {
				skill: '='
			},
			templateUrl: 'views/directives/skill-list-element.html',
			// replace: true,

			link: function(scope, element, attrs) {

				scope.skills = skill;

				// if(ionic.Platform.isAndroid()) {
				// 	scope.text = '';
				// } else {
				// 	scope.text = attrs.text;
				// }

				// scope.back = function(){
				// 	app.back();
				// };
			}
		};

	}

})();