/**
 * Created by matthewhill on 12/01/2016.
 */
'use strict';

routeConfig.$inject = ['$stateProvider'];

function routeConfig($stateProvider) {
	$stateProvider
		.state('app.form', {
			url: '/form',
			views: {
				'menuContent': {
					template: require('./form.html')
				}
			}
		});
}

export default routeConfig;
