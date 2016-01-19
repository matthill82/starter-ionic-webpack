'use strict';

/**
 * Load import Modules.
 * @constructor
 */
import home from './features/home/home.module'
import form from './features/forms/form.module'
import photo from './features/photos/photo.module'


/**
 * Load Configs
 * @constructor
 */
import appRoutes from './core/app.routes';

/**
 * Load route states, and main config function
 * @object
 */
import { StateChangeStart, StateChangeSuccess, StateNotFound, StateChangeError } from './core/app.states';
import appRoot from './core/app.root';


/**
 * Load Route Controller module
 * @constructor
 */
import appController from './core/app.controller';

/**
 * Main App module constructor
 * @constructor
 * @param {array} - The main dependencies of the app.
 */
export default angular.module( 'siteSnap', [
	'ionic',
	home.name,
	form.name,
	photo.name
])
	.config( appRoutes )

	// Add State Management
	.run( StateChangeStart )
	.run( StateChangeSuccess )
	.run( StateNotFound )
	.run( StateChangeError )
	.run( appRoot )

	// Add the default app controller
	.controller( 'AppController', appController );
