'use strict';

/**
 * @ngdoc controller
 * @name dashboard.controller:ControllerName
 * @description
 * A description of the controller, service or filter
 */

import appModule from './app.module';
import '../public/scss/app.scss';

appModule.constant( 'version', require( '../package.json' ).version );
appModule.constant( 'config', require( './app.config' ) );

angular.element(document).ready(function() {
    angular.bootstrap(document, [appModule.name]);
});


