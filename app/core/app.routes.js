
'use strict';

function routeConfig($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('app', {
			url: '/app',
			abstract: true,
			template: require('./menu.html')
		});

	$urlRouterProvider.otherwise('/app/sketches');
}

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default routeConfig;
