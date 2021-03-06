angular
	.module('jwtPsApp').config(function($urlRouterProvider, $stateProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider.state('main', {
			url: '/',
			templateUrl: '/views/main.html'
		})

		$stateProvider.state('register', {
			url: '/register',
			templateUrl: '/views/register.html',
			controller: 'RegisterCtrl'
		})
	});