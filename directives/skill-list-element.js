(function () {

	angular
		.module('app')
		.directive('skillListElement', skillListElementDirective);


	function skillListElementDirective() {

		return {

			restrict: 'E',
			// scope: false,
			scope: {
				skill: '='
			},
			templateUrl: 'views/directives/skill-list-element.html',
			// replace: true,

			link: function(scope, element, attrs) {

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