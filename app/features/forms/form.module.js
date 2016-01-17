/**
 * Created by matthewhill on 12/01/2016.
 */

import routeConfig from './form.routes';
import FormController from './form.controller';

export default angular.module('siteSnap.form', [])
	.config(routeConfig)
	.run(function ($log) {
		$log.debug('siteSnap.forms module - run');
	})
	.controller('FormController', FormController)