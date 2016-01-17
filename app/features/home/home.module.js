/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './home.routes';
import HomeController from './home.controller';

export default angular.module('siteSnap.home', [])
	.config(routeConfig)
	.run(function ($log) {
		$log.debug('siteSnap.home - run');
	})
	.controller('HomeController', HomeController)