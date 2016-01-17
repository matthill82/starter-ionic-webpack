/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './photo.routes';
import PhotoController from './photo.controller';

export default angular.module('siteSnap.photo', [])
	.config(routeConfig)
	.run(function ($log) {
		$log.debug('siteSnap.photo - run');
	})
	.controller('FormController', PhotoController)