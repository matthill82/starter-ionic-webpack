/**
 * Created by user2 on 11/01/16.
 */

'use strict';

/**
 * Load Modules
 */
import home from './features/home/home.module'
import form from './features/forms/form.module'
import photo from './features/photos/photo.module'


/**
 * Load Configs
 */
import appRoutes from './core/app.routes';

/**
 * Load Runs
 */
import { StateChangeStart, StateChangeSuccess, StateNotFound, StateChangeError } from './core/app.states';
import appRoot from './core/app.root';


/**
 * Load Route Controller
 */
import appController from './core/app.controller';

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
