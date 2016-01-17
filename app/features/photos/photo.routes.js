/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

routeConfig.$inject = ['$stateProvider'];

function routeConfig($stateProvider) {
	$stateProvider
		.state('app.photo', {
			url: '/photo',
			views: {
				'menuContent': {
					template: require('./photo.html')
				}
			}
		});
}

export default routeConfig;
