(function(){

	angular.module("app")
		.factory("user", userService);

	function userService() {

		var self = {
			data: {},
			set: set,	
			clear: clear
		};

		clear();

		return self;

		function set(data) {

			if(typeof data !== 'object') {
				console.warn('Unexpected object type arrived to skill setter service: ' + typeof list + '. Setted data to that anyway.');
			}

			self.data = data;
		}

		function clear() {
			self.data = {
				name: '',
				github: ''
			};
		}

	}
	
})();


