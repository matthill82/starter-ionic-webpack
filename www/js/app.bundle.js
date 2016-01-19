/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * @ngdoc controller
	 * @name dashboard.controller:ControllerName
	 * @description
	 * A description of the controller, service or filter
	 */

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	__webpack_require__(20);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_app2.default.constant('version', __webpack_require__(27).version);
	_app2.default.constant('config', __webpack_require__(28));

	angular.element(document).ready(function () {
	  angular.bootstrap(document, [_app2.default.name]);
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Load import Modules.
	 * @constructor
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _home = __webpack_require__(3);

	var _home2 = _interopRequireDefault(_home);

	var _form = __webpack_require__(7);

	var _form2 = _interopRequireDefault(_form);

	var _photo = __webpack_require__(11);

	var _photo2 = _interopRequireDefault(_photo);

	var _app = __webpack_require__(15);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(17);

	var _app4 = __webpack_require__(18);

	var _app5 = _interopRequireDefault(_app4);

	var _app6 = __webpack_require__(19);

	var _app7 = _interopRequireDefault(_app6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Main App module constructor
	 * @constructor
	 * @param {array} - The main dependencies of the app.
	 */

	/**
	 * Load Configs
	 * @constructor
	 */
	exports.default = angular.module('siteSnap', ['ionic', _home2.default.name, _form2.default.name, _photo2.default.name]).config(_app2.default)

	// Add State Management
	.run(_app3.StateChangeStart).run(_app3.StateChangeSuccess).run(_app3.StateNotFound).run(_app3.StateChangeError).run(_app5.default)

	// Add the default app controller
	.controller('AppController', _app7.default);

	/**
	 * Load Route Controller module
	 * @constructor
	 */

	/**
	 * Load route states, and main config function
	 * @object
	 */

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _home = __webpack_require__(4);

	var _home2 = _interopRequireDefault(_home);

	var _home3 = __webpack_require__(6);

	var _home4 = _interopRequireDefault(_home3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by matthewhill on 12/01/2016.
	 */

	exports.default = angular.module('siteSnap.home', []).config(_home2.default).run(function ($log) {
		$log.debug('siteSnap.home - run');
	}).controller('HomeController', _home4.default);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by matthewhill on 12/01/2016.
	 */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	routeConfig.$inject = ['$stateProvider'];

	function routeConfig($stateProvider) {
		$stateProvider.state('app.sketches', {
			url: '/sketches',
			views: {
				'menuContent': {
					template: __webpack_require__(5)
				}
			}
		});
	}

	exports.default = routeConfig;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<ion-view title=\"{{vm.navTitle}}\"\n          right-buttons=\"vm.rightButtons\"\n\t\tng-controller=\"HomeController as vm\">\n\t<div class=\"bar bar-subheader row\">\n\t\t<div class=\"col-20 text-center\">SAP No:</div>\n\t\t<div class=\"col-20 text-center\"><i class=\"icon text-center ion-edit\"></i></div>\n\t\t<div class=\"col-20 text-center\"><i class=\"icon text-center ion-earth\"></i></div>\n\t\t<div class=\"col-20 text-center\"><i class=\"icon text-center ion-camera\"></i></div>\n\t\t<div class=\"col-20 text-center\"><i class=\"icon text-center ion-heart\"></i></div>\n\t</div>\n\t<ion-content class=\"has-header has-subheader\">\n\t\t<ion-list can-swipe=\"listCanSwipe\" class=\"table-bordered table-striped\">\n\t\t\t<ion-item>\n\t\t\t\t<p class=\"col-20\">1</p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<p class=\"col-20\">2</p>\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<p class=\"col-20\">3</p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<p class=\"col-20\">4</p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<p class=\"col-20\">5</p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<p class=\"col-20\">6</p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<p class=\"col-20\">7</p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<p class=\"col-20\">8</p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<p class=\"col-20\">9</p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<p class=\"col-20\">10</p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<p class=\"col-20\">11</p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<p class=\"col-20\">12</p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<p class=\"col-20\">13</p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<p class=\"col-20\">14</p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-close-round red\"></i></p>\n\t\t\t\t<p class=\"col-20\"><i class=\"icon ion-checkmark-round green\"></i></p>\n\n\t\t\t</ion-item>\n\t\t</ion-list>\n\t</ion-content>\n</ion-view>\n";

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Created by matthewhill on 12/01/2016.
	 */

	function HomeController() {

		var vm = this;

		vm.shouldShowDelete = false;
		vm.shouldShowReorder = false;
		vm.listCanSwipe = true;

		vm.navTitle = 'Saved Sketches';

		vm.rightButtons = [{
			type: 'button button-icon icon ion-ios-minus-outline',
			content: 'Delete',
			tap: function tap() {
				vm.shouldShowDelete = !vm.shouldShowDelete;
			}
		}];
	}

	HomeController.$inject = ['$scope'];

	exports.default = HomeController;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _form = __webpack_require__(8);

	var _form2 = _interopRequireDefault(_form);

	var _form3 = __webpack_require__(10);

	var _form4 = _interopRequireDefault(_form3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by matthewhill on 12/01/2016.
	 */

	exports.default = angular.module('siteSnap.form', []).config(_form2.default).run(function ($log) {
		$log.debug('siteSnap.forms module - run');
	}).controller('FormController', _form4.default);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by matthewhill on 12/01/2016.
	 */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	routeConfig.$inject = ['$stateProvider'];

	function routeConfig($stateProvider) {
		$stateProvider.state('app.form', {
			url: '/form',
			views: {
				'menuContent': {
					template: __webpack_require__(9)
				}
			}
		});
	}

	exports.default = routeConfig;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"Form\"\n          ng-controller=\"FormController as vm\">\n\t<ion-content class=\"overflow-scroll has-header\">\n\t\t<form name=\"userForm\"\n\t\t      ng-submit=\"vm.submitForm(userForm.$valid)\"\n\t\t      id=\"jobDetailsForm\"\n\t\t      novalidate>\n\t\t\t<div class=\"item item-divider\">\n\t\t\t\tCustomer Information\n\t\t\t</div>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"sapNumberId\">\n\t\t\t\t<span class=\"input-label\">Sap Number:</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"sapNumber\"\n\t\t\t\t       id=\"sapNumberId\"\n\t\t\t\t       pattern=\"\\d{8}\"\n\t\t\t\t       placeholder=\"SAP Number should be 8 digits\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"nameId\">\n\t\t\t\t<span class=\"input-label\">Name</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"name\"\n\t\t\t\t       id=\"nameId\"\n\t\t\t\t       placeholder=\"Name\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"telNumberId\">\n\t\t\t\t<span class=\"input-label\">Tel Number:</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"telNumber\"\n\t\t\t\t       id=\"telNumberId\"\n\t\t\t\t       placeholder=\"Telephone Number\"\n\t\t\t\t       pattern=\"\\d{11}\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"addressId\">\n\t\t\t\t<span class=\"input-label\">Address:</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"address\"\n\t\t\t\t       id=\"addressId\"\n\t\t\t\t       placeholder=\"Address\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"postcodeId\">\n\t\t\t\t<span class=\"input-label\">Postcode:</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"postcode\"\n\t\t\t\t       id=\"postcodeId\"\n\t\t\t\t       placeholder=\"Postcode\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"custDetailsId\">\n\t\t\t\t<span class=\"input-label\">Customer Details:</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"custDetails\"\n\t\t\t\t       id=\"custDetailsId\"\n\t\t\t\t       placeholder=\"Customer Details\"\n\t\t\t\t       required>\n\t\t\t</label>\n\n\t\t\t<div class=\"item item-divider\">\n\t\t\t\tGrid Reference\n\t\t\t</div>\n\t\t\t<div class=\"item item-button-right\"\n\t\t\t     id=\"locateMe\">\n\t\t\t\tLocate Me\n\t\t\t\t<button class=\"button button-positive\">\n\t\t\t\t\t<i class=\"icon ion-ios-location\"></i>\n\t\t\t\t</button>\n\t\t\t\t<span id=\"geoStatus\"\n\t\t\t\t      hidden><span class=\"largeIcon\"><i class=\"fa fa-spinner fa-spin orange\"></i></span><span class=\"info\">&nbsp;Searching...</span></span>\n\t\t\t\t<span id=\"geoError\"\n\t\t\t\t      hidden><span class=\"error largeIcon\"><i class=\"fa fa-exclamation-triangle\"></i></span><span class=\"info\">&nbsp;Ensure 'Location' is enabled</span></span>\n\t\t\t</div>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"gridXId\">\n\t\t\t\t<span class=\"input-label\">X Coords</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"gridX\"\n\t\t\t\t       id=\"gridXId\"\n\t\t\t\t       placeholder=\"X axis coordinate\"\n\t\t\t\t       pattern=\"\\d{6}\"\n\t\t\t\t       title=\"Coordinates should be 6 digits\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"gridYId\">\n\t\t\t\t<span class=\"input-label\">Y Coords</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"gridY\"\n\t\t\t\t       id=\"gridYId\"\n\t\t\t\t       placeholder=\"Y axis coordinate\"\n\t\t\t\t       pattern=\"\\d{6}\"\n\t\t\t\t       title=\"Coordinates should be 6 digits\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label index=\"-1\"\n\t\t\t       class=\"input-group-addon\"\n\t\t\t       data-toggle=\"popover\"\n\t\t\t       data-content=\"The x,y coordinates using the format 'nnnnnn'\">\n\t\t\t\t<span class=\"fa fa-info\"></span>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"workReqId\">\n\t\t\t\t<span class=\"input-label\">Work Required</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"workReq\"\n\t\t\t\t       id=\"workReqId\"\n\t\t\t\t       placeholder=\"Begin typing to find Work Required By Gang options\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-select\"\n\t\t\t       for=\"materialId\">\n\t\t\t\t<div class=\"input-label\">\n\t\t\t\t\tPipe Material\n\t\t\t\t</div>\n\t\t\t\t<select name=\"material\"\n\t\t\t\t        id=\"materialId\">\n\t\t\t\t\t<option value=\"\">Please select material</option>\n\t\t\t\t\t<option value=\"ductile\">Ductile</option>\n\t\t\t\t\t<option value=\"pvc\">PVC</option>\n\t\t\t\t\t<option value=\"ac\">AC</option>\n\t\t\t\t\t<option value=\"steel\">Steel</option>\n\t\t\t\t\t<option value=\"castIron\">Cast Iron</option>\n\t\t\t\t\t<option value=\"mdpe\">MDPE</option>\n\t\t\t\t\t<option value=\"hppe\">HPPE</option>\n\t\t\t\t\t<option value=\"blackPoly\">Black Poly</option>\n\t\t\t\t\t<option value=\"copper\">Copper</option>\n\t\t\t\t\t<option value=\"lead\">Lead</option>\n\t\t\t\t\t<option value=\"galv\">Galv</option>\n\t\t\t\t</select>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"sizeId\">\n\t\t\t\t<span class=\"input-label\">Pipe Size</span>\n\t\t\t\t<input type=\"number\"\n\t\t\t\t       name=\"size\"\n\t\t\t\t       id=\"sizeId\"\n\t\t\t\t       min=\"0\"\n\t\t\t\t       placeholder=\"Size of pipe\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-select\"\n\t\t\t       for=\"materialId\">\n\t\t\t\t<span class=\"input-label\">Pipe Unit</span>\n\t\t\t\t<select name=\"sizeUOM\"\n\t\t\t\t        id=\"sizeUOMId\">\n\t\t\t\t\t<option value=\"\">Please select unit</option>\n\t\t\t\t\t<option value=\"inches\">Inches</option>\n\t\t\t\t\t<option value=\"millimetres\">Millimetres</option>\n\t\t\t\t</select>\n\t\t\t</label>\n\n\t\t\t<div class=\"item item-divider\">\n\t\t\t\tMethod of Work\n\t\t\t</div>\n\t\t\t<div class=\"validationError hidden\"\n\t\t\t     id=\"methodOfWorkError\"\n\t\t\t     hidden>Please select at least one method of work\n\t\t\t</div>\n\t\t\t<div id=\"methodOfWorkId\">\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"openCutId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events checkbox-circle\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       checked=\"\"\n\t\t\t\t\t\t       id=\"openCutId\"\n\t\t\t\t\t\t       name=\"opencut\"\n\t\t\t\t\t\t       value=\"opencut\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Open Cut</span></div>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"moleingId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       name=\"moleing\"\n\t\t\t\t\t\t       id=\"moleingId\"\n\t\t\t\t\t\t       value=\"moleing\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Moleing</span></div>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"kobusId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       name=\"kobus\"\n\t\t\t\t\t\t       id=\"kobusId\"\n\t\t\t\t\t\t       value=\"kobus\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Kobus</span></div>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"noExcavationId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       name=\"noExcavation\"\n\t\t\t\t\t\t       id=\"noExcavationId\"\n\t\t\t\t\t\t       value=\"noExcavation\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">No Excavation</span></div>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"item item-divider\">\n\t\t\t\tPosition\n\t\t\t</div>\n\t\t\t<div class=\"validationError hidden\"\n\t\t\t     id=\"positionError\"\n\t\t\t     hidden>Please select at least one position\n\t\t\t</div>\n\t\t\t<div id=\"positionId\">\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"carriagewayId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events checkbox-circle\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       checked=\"\"\n\t\t\t\t\t\t       name=\"carriageway\"\n\t\t\t\t\t\t       id=\"carriagewayId\"\n\t\t\t\t\t\t       value=\"carriageway\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Carriageway</span></div>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"footwayId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       name=\"footway\"\n\t\t\t\t\t\t       id=\"footwayId\"\n\t\t\t\t\t\t       value=\"carriageway\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Footway</span></div>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"cycleLaneId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       name=\"cycleLane\"\n\t\t\t\t\t\t       id=\"cycleLaneId\"\n\t\t\t\t\t\t       value=\"cycleLane\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Cycle Lane</span></div>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"bridlewayfootpathId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       name=\"bridlewayfootpath\"\n\t\t\t\t\t\t       id=\"bridlewayfootpathId\"\n\t\t\t\t\t\t       value=\"bridlewayfootpath\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Bridleway/Footpath</span>\n\t\t\t\t\t</div>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"pedestrianizedzoneId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       name=\"pedestrianizedzone\"\n\t\t\t\t\t\t       id=\"pedestrianizedzoneId\"\n\t\t\t\t\t\t       value=\"pedestrianizedzone\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Pedestrianized Zone</span>\n\t\t\t\t\t</div>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"privatelandId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       name=\"privateland\"\n\t\t\t\t\t\t       id=\"privatelandId\"\n\t\t\t\t\t\t       value=\"privateland\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Private Land</span></div>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"cwayId\">\n\t\t\t\t<span class=\"input-label\">C/Way width (m):</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"cway\"\n\t\t\t\t       id=\"cwayId\"\n\t\t\t\t       pattern=\"[0-2]?\\d(\\.\\d)?\"\n\t\t\t\t       title=\"Enter a number less than 30, to 1 decimal place\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"fwayId\">\n\t\t\t\t<span class=\"input-label\">F/Way width (m):</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"fway\"\n\t\t\t\t       id=\"fwayId\"\n\t\t\t\t       pattern=\"[0-2]?\\d(\\.\\d)?\"\n\t\t\t\t       title=\"Enter a number less than 30, to 1 decimal place.\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"mphId\">\n\t\t\t\t<span class=\"input-label\">MPH:</span>\n\t\t\t\t<input type=\"number\"\n\t\t\t\t       name=\"mph\"\n\t\t\t\t       id=\"mphId\"\n\t\t\t\t       min=\"20\"\n\t\t\t\t       max=\"70\"\n\t\t\t\t       step=\"10\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<button type=\"submit\"\n\t\t\t        class=\"button button-full button-primary\"\n\t\t\t        id=\"saveButtonTop\"\n\t\t\t        value=\"Save\"\n\t\t\t        ng-disabled=\"userForm.$invalid\">\n\t\t\t\tSave\n\t\t\t</button>\n\t\t</form>\n\t</ion-content>\n</ion-view>\n";

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Created by matthewhill on 12/01/2016.
	 */

	function FormController() {

		var vm = this;

		vm.submitForm = function (isvalid) {
			if (isvalid) {
				alert('our form is amazing');
			} else {
				alert('our form is not amazing');
			}
		};
	}

	FormController.$inject = ['$scope'];

	exports.default = FormController;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _photo = __webpack_require__(12);

	var _photo2 = _interopRequireDefault(_photo);

	var _photo3 = __webpack_require__(14);

	var _photo4 = _interopRequireDefault(_photo3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by matthewhill on 12/01/2016.
	 */

	exports.default = angular.module('siteSnap.photo', []).config(_photo2.default).run(function ($log) {
		$log.debug('siteSnap.photo - run');
	}).controller('FormController', _photo4.default);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by matthewhill on 12/01/2016.
	 */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	routeConfig.$inject = ['$stateProvider'];

	function routeConfig($stateProvider) {
		$stateProvider.state('app.photo', {
			url: '/photo',
			views: {
				'menuContent': {
					template: __webpack_require__(13)
				}
			}
		});
	}

	exports.default = routeConfig;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<ion-view view-title=\"Form\"\n          ng-controller=\"FormController as vm\">\n\t<ion-content class=\"overflow-scroll has-header\">\n\t\t<form name=\"userForm\"\n\t\t      ng-submit=\"vm.submitForm(userForm.$valid)\"\n\t\t      id=\"jobDetailsForm\"\n\t\t      novalidate>\n\t\t\t<div class=\"item item-divider\">\n\t\t\t\tCustomer Information\n\t\t\t</div>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"sapNumberId\">\n\t\t\t\t<span class=\"input-label\">Sap Number:</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"sapNumber\"\n\t\t\t\t       id=\"sapNumberId\"\n\t\t\t\t       pattern=\"\\d{8}\"\n\t\t\t\t       placeholder=\"SAP Number should be 8 digits\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"nameId\">\n\t\t\t\t<span class=\"input-label\">Name</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"name\"\n\t\t\t\t       id=\"nameId\"\n\t\t\t\t       placeholder=\"Name\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"telNumberId\">\n\t\t\t\t<span class=\"input-label\">Tel Number:</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"telNumber\"\n\t\t\t\t       id=\"telNumberId\"\n\t\t\t\t       placeholder=\"Telephone Number\"\n\t\t\t\t       pattern=\"\\d{11}\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"addressId\">\n\t\t\t\t<span class=\"input-label\">Address:</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"address\"\n\t\t\t\t       id=\"addressId\"\n\t\t\t\t       placeholder=\"Address\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"postcodeId\">\n\t\t\t\t<span class=\"input-label\">Postcode:</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"postcode\"\n\t\t\t\t       id=\"postcodeId\"\n\t\t\t\t       placeholder=\"Postcode\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"custDetailsId\">\n\t\t\t\t<span class=\"input-label\">Customer Details:</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"custDetails\"\n\t\t\t\t       id=\"custDetailsId\"\n\t\t\t\t       placeholder=\"Customer Details\"\n\t\t\t\t       required>\n\t\t\t</label>\n\n\t\t\t<div class=\"item item-divider\">\n\t\t\t\tGrid Reference\n\t\t\t</div>\n\t\t\t<div class=\"item item-button-right\"\n\t\t\t     id=\"locateMe\">\n\t\t\t\tLocate Me\n\t\t\t\t<button class=\"button button-positive\">\n\t\t\t\t\t<i class=\"icon ion-ios-location\"></i>\n\t\t\t\t</button>\n\t\t\t\t<span id=\"geoStatus\"\n\t\t\t\t      hidden><span class=\"largeIcon\"><i class=\"fa fa-spinner fa-spin orange\"></i></span><span class=\"info\">&nbsp;Searching...</span></span>\n\t\t\t\t<span id=\"geoError\"\n\t\t\t\t      hidden><span class=\"error largeIcon\"><i class=\"fa fa-exclamation-triangle\"></i></span><span class=\"info\">&nbsp;Ensure 'Location' is enabled</span></span>\n\t\t\t</div>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"gridXId\">\n\t\t\t\t<span class=\"input-label\">X Coords</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"gridX\"\n\t\t\t\t       id=\"gridXId\"\n\t\t\t\t       placeholder=\"X axis coordinate\"\n\t\t\t\t       pattern=\"\\d{6}\"\n\t\t\t\t       title=\"Coordinates should be 6 digits\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"gridYId\">\n\t\t\t\t<span class=\"input-label\">Y Coords</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"gridY\"\n\t\t\t\t       id=\"gridYId\"\n\t\t\t\t       placeholder=\"Y axis coordinate\"\n\t\t\t\t       pattern=\"\\d{6}\"\n\t\t\t\t       title=\"Coordinates should be 6 digits\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label index=\"-1\"\n\t\t\t       class=\"input-group-addon\"\n\t\t\t       data-toggle=\"popover\"\n\t\t\t       data-content=\"The x,y coordinates using the format 'nnnnnn'\">\n\t\t\t\t<span class=\"fa fa-info\"></span>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"workReqId\">\n\t\t\t\t<span class=\"input-label\">Work Required</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"workReq\"\n\t\t\t\t       id=\"workReqId\"\n\t\t\t\t       placeholder=\"Begin typing to find Work Required By Gang options\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-select\"\n\t\t\t       for=\"materialId\">\n\t\t\t\t<div class=\"input-label\">\n\t\t\t\t\tPipe Material\n\t\t\t\t</div>\n\t\t\t\t<select name=\"material\"\n\t\t\t\t        id=\"materialId\">\n\t\t\t\t\t<option value=\"\">Please select material</option>\n\t\t\t\t\t<option value=\"ductile\">Ductile</option>\n\t\t\t\t\t<option value=\"pvc\">PVC</option>\n\t\t\t\t\t<option value=\"ac\">AC</option>\n\t\t\t\t\t<option value=\"steel\">Steel</option>\n\t\t\t\t\t<option value=\"castIron\">Cast Iron</option>\n\t\t\t\t\t<option value=\"mdpe\">MDPE</option>\n\t\t\t\t\t<option value=\"hppe\">HPPE</option>\n\t\t\t\t\t<option value=\"blackPoly\">Black Poly</option>\n\t\t\t\t\t<option value=\"copper\">Copper</option>\n\t\t\t\t\t<option value=\"lead\">Lead</option>\n\t\t\t\t\t<option value=\"galv\">Galv</option>\n\t\t\t\t</select>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"sizeId\">\n\t\t\t\t<span class=\"input-label\">Pipe Size</span>\n\t\t\t\t<input type=\"number\"\n\t\t\t\t       name=\"size\"\n\t\t\t\t       id=\"sizeId\"\n\t\t\t\t       min=\"0\"\n\t\t\t\t       placeholder=\"Size of pipe\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-select\"\n\t\t\t       for=\"materialId\">\n\t\t\t\t<span class=\"input-label\">Pipe Unit</span>\n\t\t\t\t<select name=\"sizeUOM\"\n\t\t\t\t        id=\"sizeUOMId\">\n\t\t\t\t\t<option value=\"\">Please select unit</option>\n\t\t\t\t\t<option value=\"inches\">Inches</option>\n\t\t\t\t\t<option value=\"millimetres\">Millimetres</option>\n\t\t\t\t</select>\n\t\t\t</label>\n\n\t\t\t<div class=\"item item-divider\">\n\t\t\t\tMethod of Work\n\t\t\t</div>\n\t\t\t<div class=\"validationError hidden\"\n\t\t\t     id=\"methodOfWorkError\"\n\t\t\t     hidden>Please select at least one method of work\n\t\t\t</div>\n\t\t\t<div id=\"methodOfWorkId\">\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"openCutId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events checkbox-circle\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       checked=\"\"\n\t\t\t\t\t\t       id=\"openCutId\"\n\t\t\t\t\t\t       name=\"opencut\"\n\t\t\t\t\t\t       value=\"opencut\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Open Cut</span></div>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"moleingId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       name=\"moleing\"\n\t\t\t\t\t\t       id=\"moleingId\"\n\t\t\t\t\t\t       value=\"moleing\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Moleing</span></div>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"kobusId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       name=\"kobus\"\n\t\t\t\t\t\t       id=\"kobusId\"\n\t\t\t\t\t\t       value=\"kobus\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Kobus</span></div>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"noExcavationId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       name=\"noExcavation\"\n\t\t\t\t\t\t       id=\"noExcavationId\"\n\t\t\t\t\t\t       value=\"noExcavation\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">No Excavation</span></div>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class=\"item item-divider\">\n\t\t\t\tPosition\n\t\t\t</div>\n\t\t\t<div class=\"validationError hidden\"\n\t\t\t     id=\"positionError\"\n\t\t\t     hidden>Please select at least one position\n\t\t\t</div>\n\t\t\t<div id=\"positionId\">\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"carriagewayId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events checkbox-circle\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       checked=\"\"\n\t\t\t\t\t\t       name=\"carriageway\"\n\t\t\t\t\t\t       id=\"carriagewayId\"\n\t\t\t\t\t\t       value=\"carriageway\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Carriageway</span></div>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"footwayId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       name=\"footway\"\n\t\t\t\t\t\t       id=\"footwayId\"\n\t\t\t\t\t\t       value=\"carriageway\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Footway</span></div>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"cycleLaneId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       name=\"cycleLane\"\n\t\t\t\t\t\t       id=\"cycleLaneId\"\n\t\t\t\t\t\t       value=\"cycleLane\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Cycle Lane</span></div>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"bridlewayfootpathId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       name=\"bridlewayfootpath\"\n\t\t\t\t\t\t       id=\"bridlewayfootpathId\"\n\t\t\t\t\t\t       value=\"bridlewayfootpath\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Bridleway/Footpath</span>\n\t\t\t\t\t</div>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"pedestrianizedzoneId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       name=\"pedestrianizedzone\"\n\t\t\t\t\t\t       id=\"pedestrianizedzoneId\"\n\t\t\t\t\t\t       value=\"pedestrianizedzone\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Pedestrianized Zone</span>\n\t\t\t\t\t</div>\n\t\t\t\t</label>\n\t\t\t\t<label class=\"item item-checkbox ng-valid\"\n\t\t\t\t       for=\"privatelandId\">\n\t\t\t\t\t<div class=\"checkbox checkbox-input-hidden disable-pointer-events\">\n\t\t\t\t\t\t<input type=\"checkbox\"\n\t\t\t\t\t\t       name=\"privateland\"\n\t\t\t\t\t\t       id=\"privatelandId\"\n\t\t\t\t\t\t       value=\"privateland\"\n\t\t\t\t\t\t       class=\"ng-pristine ng-untouched ng-valid\"><i class=\"checkbox-icon\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"item-content disable-pointer-events\"><span class=\"ng-binding\">Private Land</span></div>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"cwayId\">\n\t\t\t\t<span class=\"input-label\">C/Way width (m):</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"cway\"\n\t\t\t\t       id=\"cwayId\"\n\t\t\t\t       pattern=\"[0-2]?\\d(\\.\\d)?\"\n\t\t\t\t       title=\"Enter a number less than 30, to 1 decimal place\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"fwayId\">\n\t\t\t\t<span class=\"input-label\">F/Way width (m):</span>\n\t\t\t\t<input type=\"text\"\n\t\t\t\t       name=\"fway\"\n\t\t\t\t       id=\"fwayId\"\n\t\t\t\t       pattern=\"[0-2]?\\d(\\.\\d)?\"\n\t\t\t\t       title=\"Enter a number less than 30, to 1 decimal place.\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<label class=\"item item-input item-stacked-label\"\n\t\t\t       for=\"mphId\">\n\t\t\t\t<span class=\"input-label\">MPH:</span>\n\t\t\t\t<input type=\"number\"\n\t\t\t\t       name=\"mph\"\n\t\t\t\t       id=\"mphId\"\n\t\t\t\t       min=\"20\"\n\t\t\t\t       max=\"70\"\n\t\t\t\t       step=\"10\"\n\t\t\t\t       required>\n\t\t\t</label>\n\t\t\t<button type=\"submit\"\n\t\t\t        class=\"button button-full button-primary\"\n\t\t\t        id=\"saveButtonTop\"\n\t\t\t        value=\"Save\"\n\t\t\t        ng-disabled=\"userForm.$invalid\">\n\t\t\t\tSave\n\t\t\t</button>\n\t\t</form>\n\t</ion-content>\n</ion-view>\n";

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Created by matthewhill on 12/01/2016.
	 */

	function PhotoController() {

		var vm = this;

		vm.submitPhoto = function (isvalid) {
			if (isvalid) {
				alert('our Photo is amazing');
			} else {
				alert('our Photo is not amazing');
			}
		};
	}

	PhotoController.$inject = ['$scope'];

	exports.default = PhotoController;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function routeConfig($stateProvider, $urlRouterProvider) {
		$stateProvider.state('app', {
			url: '/app',
			abstract: true,
			template: __webpack_require__(16)
		});

		$urlRouterProvider.otherwise('/app/sketches');
	}

	routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	exports.default = routeConfig;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<ion-side-menus enable-menu-with-back-views=\"false\">\n  <ion-side-menu-content>\n    <ion-nav-bar class=\"bar-stable new-bar nav-title-slide-ios7\" align-title=\"center\">\n      <ion-nav-back-button>\n      </ion-nav-back-button>\n\n\t    <ion-nav-buttons side=\"left\">\n\t\t    <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\">\n\t\t    </button>\n\t    </ion-nav-buttons>\n    </ion-nav-bar>\n    <ion-nav-view name=\"menuContent\"></ion-nav-view>\n  </ion-side-menu-content>\n\n  <ion-side-menu side=\"left\">\n    <ion-header-bar class=\"bar-stable new-bar\">\n      <h1 class=\"title\">SiteSnap</h1>\n    </ion-header-bar>\n    <ion-content>\n      <ion-list>\n\t      <ion-item menu-close href=\"#/app/sketches\">\n\t\t      Saved Sketches\n\t      </ion-item>\n\t      <ion-item menu-close href=\"#/app/form\">\n\t\t      Form Data\n\t      </ion-item>\n        <ion-item menu-close href=\"#/app/annotate\">\n\t        Annotate Map\n        </ion-item>\n\t      <ion-item menu-close href=\"#/app/photo\">\n\t\t      Photos\n\t      </ion-item>\n\t      <ion-item menu-close href=\"#/app/sketch\">\n\t\t      Road Sketch\n\t      </ion-item>\n\t      <ion-item menu-close href=\"#/app/generate\">\n\t\t      Generate Image\n\t      </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-side-menu>\n</ion-side-menus>\n";

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	StateChangeStart.$inject = ['$log', '$rootScope', '$ionicBackdrop', '$timeout'];

	function StateChangeStart($log, $rootScope, $ionicBackdrop, $timeout) {

		$log.debug('app module - run');

		$rootScope.$on('$stateChangeStart', function (event, toState) {
			$log.debug('$stateChangeStart - name:', toState.name);
		});

		$ionicBackdrop.retain();

		$timeout(function () {
			$ionicBackdrop.release();
		}, 600);
	}

	StateChangeSuccess.$inject = ['$log', '$rootScope', '$ionicBackdrop', '$timeout'];

	function StateChangeSuccess($log, $rootScope, $ionicBackdrop, $timeout) {
		$rootScope.$on('$stateChangeSuccess', function (event, toState) {
			$log.debug('$stateChangeSuccess - name:', toState.name);
		});

		$ionicBackdrop.retain();

		$timeout(function () {
			$ionicBackdrop.release();
		}, 600);
	}

	StateNotFound.$inject = ['$log', '$rootScope', '$ionicBackdrop', '$timeout'];

	function StateNotFound($log, $rootScope, $ionicBackdrop, $timeout) {

		$rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
			$log.warn('$stateNotFound', {
				event: event,
				unfoundState: unfoundState,
				fromState: fromState,
				fromParams: fromParams
			});
		});

		$ionicBackdrop.retain();

		$timeout(function () {
			$ionicBackdrop.release();
		}, 600);
	}

	StateChangeError.$inject = ['$log', '$rootScope', '$ionicBackdrop', '$timeout'];

	function StateChangeError($log, $rootScope, $ionicBackdrop, $timeout) {

		$rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
			$log.error('$stateChangeError', {
				event: event,
				toState: toState,
				toParams: toParams,
				fromState: fromState,
				fromParams: fromParams,
				error: error
			});
			if (error) {
				throw error;
			}
		});

		$ionicBackdrop.retain();

		$timeout(function () {
			$ionicBackdrop.release();
		}, 600);
	}

	exports.StateChangeStart = StateChangeStart;
	exports.StateNotFound = StateNotFound;
	exports.StateChangeSuccess = StateChangeSuccess;
	exports.StateChangeError = StateChangeError;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function AppController($rootScope, $ionicPlatform) {

		$rootScope.csModelOptions = { debounce: { 'default': 150, 'blur': 0 } };

		$ionicPlatform.ready(function () {

			if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}
			if (window.StatusBar) {
				StatusBar.styleDefault();
			}
		});
	}

	exports.default = AppController;

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * @ngdoc function
	 * @name siteSnap.controller:AppController
	 * @description
	 * # AppController
	 * App controller of the siteSnap for overall control on initial load
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function AppController($rootScope) {
	  $rootScope.RELEASE = {};
	  $rootScope.pulled = false;
	  console.log('app controller booting up.....');
	}

	exports.default = AppController;

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports) {

	module.exports = {
		"name": "WebPackSideMenu",
		"version": "0.0.1",
		"description": "starter webpack sidemenu app",
		"main": "app.module.js",
		"scripts": {
			"install": "./node_modules/.bin/bower install && ./node_modules/.bin/gulp",
			"start": "env UV_THREADPOOL_SIZE=100 webpack --progress --colors --watch",
			"analyse": "env webpack-dev-server --progress --colors --watch --display-modules --display-chunks --display-reasons --release=dev",
			"dev": "NODE_ENV=dev webpack-dev-server --content-base www/ --inline --release=dev",
			"stage": "NODE_ENV=stage webpack-dev-server --progress --colors --release=stage",
			"prod": "NODE_ENV=production webpack-dev-server --progress --colors --release=production",
			"es6-test": "node node_modules/eslint/bin/eslint.js -c .eslintrc ./app",
			"js-test": "node node_modules/jshint/dist/jshint.js --verbose ./app",
			"style-docs": "rm -rf ./docs && cp ./app/STYLE.md ./www/index.md && hologram",
			"js-docs": "rm -rf ./docs && node_modules/.bin/jsdoc --configure .jsdoc.json --verbose"
		},
		"devDependencies": {
			"angular": "~1.4.3",
			"angular-animate": "~1.4.3",
			"angular-cookies": "~1.4.3",
			"angular-messages": "~1.3.15",
			"angular-sanitize": "^1.3.16",
			"angular-touch": "~1.4.3",
			"angular-ui-router": "~0.2.15",
			"bower": "^1.7.0",
			"babel-core": "^6.2.1",
			"babel-eslint": "^5.0.0-beta6",
			"babel-loader": "^6.2.0",
			"babel-preset-es2015": "^6.1.18",
			"clean-webpack-plugin": "^0.1.3",
			"colors": "^1.1.2",
			"css-loader": "^0.23.0",
			"del": "^2.2.0",
			"exports-loader": "^0.6.2",
			"extract-text-webpack-plugin": "^1.0.1",
			"eslint": "^1.6.0",
			"eslint-loader": "^1.1.0",
			"file-loader": "^0.8.5",
			"gulp": "^3.9.0",
			"gulp-util": "^3.0.7",
			"gulp-hologram": "^1.0.1",
			"gulp-ngdocs": "0.2.13",
			"html-loader": "^0.4.0",
			"html-webpack-plugin": "^1.7.0",
			"jsdoc": "^3.4.0",
			"jshint": "^2.8.0",
			"jshint-loader": "~0.8.3",
			"json-loader": "^0.5.4",
			"jasmine-core": "^2.3.4",
			"karma": "^0.13.14",
			"karma-coverage": "^0.5.3",
			"karma-jasmine": "^0.3.6",
			"karma-phantomjs-launcher": "^0.2.1",
			"karma-sourcemap-loader": "^0.3.6",
			"karma-spec-reporter": "0.0.23",
			"karma-webpack": "^1.7.0",
			"lodash": "^3.10.1",
			"minami": "^1.1.0",
			"node-bourbon": "~4.2.2",
			"node-sass": "^3.4.2",
			"open": "0.0.5",
			"sass-loader": "^3.1.2",
			"style-loader": "^0.13.0",
			"url-loader": "^0.5.7",
			"webpack": "^1.12.9",
			"webpack-dev-server": "^1.14.0"
		}
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	
	"use strict";

	module.exports = {
	  log: {
	    debug: true
	  }
	};

/***/ }
/******/ ]);