/**
 * Created by matthewhill on 12/01/2016.
 */

function FormController () {

	var vm = this;
	
	vm.submitForm = function (isvalid) {
		if(isvalid) {
			alert('our form is amazing');
		} else  {
			alert('our form is not amazing');
		}
	}
}

FormController.$inject = ['$scope'];

export default FormController