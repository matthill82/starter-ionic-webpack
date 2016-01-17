/**
 * Created by matthewhill on 12/01/2016.
 */

function PhotoController () {

	var vm = this;
	
	vm.submitPhoto = function (isvalid) {
		if(isvalid) {
			alert('our Photo is amazing');
		} else  {
			alert('our Photo is not amazing');
		}
	}
}

PhotoController.$inject = ['$scope'];

export default PhotoController
