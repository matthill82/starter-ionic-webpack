'use strict';

function AppController($rootScope, $ionicPlatform) {

    $rootScope.csModelOptions = {debounce: {'default': 150, 'blur': 0}};

	$ionicPlatform.ready( function () {

		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar( true );
			cordova.plugins.Keyboard.disableScroll( true );

		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
}

export default AppController;
