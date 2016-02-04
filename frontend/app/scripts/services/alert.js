'use strict';

/**
 * @ngdoc service
 * @name jwtPsApp.alert
 * @description
 * # alert
 * Service in the jwtPsApp.
 */
angular.module('jwtPsApp')
  .service('alert', function ($rootScope, $timeout) { //injecting $rootScope is not
  	var alertTimeout;
  	return function(type, title, message, timeout) {
  		$rootScope.alert = {
  			hasBeenShown: true,
  			show: true,
  			type: type,
  			message: message,
  			title: title
  		};
  		$timeout.cancel(alertTimeout);
  		alertTimeout = $timeout(function() {
  			$rootScope.alert.show = false;
  		}, timeout || 2000);
  	}
  });
