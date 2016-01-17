/**
 * Created by user2 on 11/01/16.
 */

'use strict';

function routeConfig($stateProvider, $urlRouterProvider) {

		$stateProvider

			.state('app', {
				url: '/app',
				abstract: true,
				template: require('./core/menu.html'),
				controller: AppController
			})

			.state('app.search', {
				url: '/search',
				views: {
					'menuContent': {
						template: require('./templates/search.html')
					}
				}
			})

			.state('app.browse', {
				url: '/browse',
				views: {
					'menuContent': {
						template: require('./templates/browse.html')
					}
				}
			})

			.state('app.single', {
				url: '/playlists/:playlistId',
				views: {
					'menuContent': {
						template: require('./templates/playlist.html')
					}
				}
			});
		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/app/sketches');
}

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];


export default routeConfig;