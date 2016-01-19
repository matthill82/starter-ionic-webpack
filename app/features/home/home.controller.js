/**
 * Created by matthewhill on 12/01/2016.
 */

function HomeController () {

	var vm = this;

	vm.navTitle = "Saved Sketches";

	vm.shouldShowDelete = false;
	vm.shouldShowReorder = false;
	vm.listCanSwipe = true;

	vm.rightButtons = [{
		type: "button button-icon icon ion-ios-minus-outline",
		content: "Delete",
		tap: function () {
			vm.shouldShowDelete = !vm.shouldShowDelete;
		}
	}];
}

export default HomeController;