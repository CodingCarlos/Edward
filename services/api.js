(function(){

	angular.module("app")
		.factory("api", apiService);

	function apiService($http) {

		var api = {
			url: 'http://api.gamify.es',
			// url: 'http://localhost:3000',
			token: '',
			get: get,
			post: post,
			del: del,
			setToken: setToken
		};

		return api;

		function post(url, data, callback) {

			$http({
				method: 'POST',
				url: url,
				headers: {'Content-Type': 'application/x-www-form-urlencoded', "authorization": 'Bearer ' + api.token},
				transformRequest: function(obj) {
					var str = [];
					for(var p in obj)
					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
					return str.join("&");
				},
				// dataType: 'jsonp',
				data: data
			}).success(function(data, status, headers, config) {
				if(typeof(callback) != 'undefined') {
					callback(data, status, headers, config);
				}
			}).error(function(data, status, headers, config) {
				console.error('Error ' + status + ' in HTTP POST request');
				if(typeof(callback) != 'undefined') {
					callback(data, status, headers, config);
				}
			});
		}

		function get(url, callback) {
			$http({
				method: 'GET',
				url: url,
				headers: {"authorization": 'Bearer ' + api.token}
			}).success(function(data, status, headers, config) {
				if(typeof(callback) != 'undefined') {
					callback(data, status, headers, config);
				}
			}).error(function(data, status, headers, config) {
				console.error('Error ' + status + ' in HTTP GET request');
				if(typeof(callback) != 'undefined') {
					callback(data, status, headers, config);
				}
			});
		}

		function del(url, data, callback) {

			$http({
				method: 'DELETE',
				url: url,
				headers: {'Content-Type': 'application/x-www-form-urlencoded', "authorization": 'Bearer ' + api.token},
				transformRequest: function(obj) {
					var str = [];
					for(var p in obj)
					str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
					return str.join("&");
				},
				// dataType: 'jsonp',
				data: data
			}).success(function(data, status, headers, config) {
				if(typeof(callback) != 'undefined') {
					callback(data, status, headers, config);
				}
			}).error(function(data, status, headers, config) {
				console.error('Error ' + status + ' in HTTP DELETE request');
				if(typeof(callback) != 'undefined') {
					callback(data, status, headers, config);
				}
			});
		}

		function setToken (token) {
			if(typeof(token) !== 'undefined') {
				api.token = token;
			}
		}

	}

	
})();
