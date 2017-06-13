(function(){

	angular.module("app")
		.factory("skill", skillService);

	function skillService() {

		var self = {
			list: [],
			set: set,	
			add: add,
			rem: rem,
			enable: enable,
			disable: disable
		};

		return self;

		function set(list) {

			if(typeof list !== 'object') {
				console.warn('Unexpected object type arrived to skill setter service: ' + typeof list + '. Setted an array of that object type.');
				list = [list];
			}

			self.list = list;
		}

		function add(elem) {
			self.list.push(elem);
		}

		function rem(elem) {

			var index = -1;

			if(typeof elem == 'number') {
				index = elem;
			} else {
				index = search(elem, 'index');
			}

			self.list.splice(index, 1);
		}

		function enable(elem) {

			var index = -1;

			if(typeof elem == 'number') {
				index = elem;
			} else {
				index = search(elem, 'index');
			}

			self.list[index].enabled = true;

		}

		function disable(elem) {

			var index = -1;

			if(typeof elem == 'number') {
				index = elem;
			} else {
				index = search(elem, 'index');
			}

			self.list[index].enabled = false;

		}


		/* UTIL FUNCTIONS */

		function search(name, type) {

			var ret = null;

			if(typeof type !== 'undefined' && type == 'index') {
				ret = -1;
			}

			for (var i = 0; i < self.list.length; i++) {
				if(self.list[i].name == name) {
					if(typeof type !== 'undefined' && type == 'index') {
						ret = i;
					} else {
						ret = self.list[i];
					}

					break;
				}
			}
			
			return ret;
		}

	}
	
})();


