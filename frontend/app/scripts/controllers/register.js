'use strict';

/**
 * @ngdoc function
 * @name jwtPsApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the jwtPsApp
 */
angular.module('jwtPsApp')
	.controller('RegisterCtrl', function($scope, $rootScope, $http, alert) {
		$scope.submit = function() {
			var url = '/';
			var user = {};
			console.log("submitted");
			$http.post(url, user)
				.success(function(res) {
					alert('success', 'OK!', 'You are now registered');
				})
				.error(function(err) {
					alert('warning', 'Oops!', 'Could not register');
				});
		}
	});