angular
	.module('jwtPsApp').config(function($stateProvider) {

		$stateProvider.state('register', {
			url: '/register',
			templateUrl: '/views/register.html'
		})
	});