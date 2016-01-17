/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

routeConfig.$inject = ['$stateProvider'];

function routeConfig($stateProvider) {
	$stateProvider
		.state('app.sketches', {
			url: '/sketches',
			views: {
				'menuContent': {
					template: require('./home.html')
				}
			}
		});
}

export default routeConfig;
