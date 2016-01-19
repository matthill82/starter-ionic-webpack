/**
 * recommended
 * Using function declarations
 * and accessible members up top.
 */

    function DataService ($http, $q, $timeout) {

	let service = {
		getFeedData: getFeedData
	};

	return service;

	////////////

	function getFeedData() {

		let appHeaders = {
			headers: {
				'Content-Type': 'application/json; charset=UTF-8'
			}
		};

		var vm = this;
		var deferred = $q.defer();

		vm.data = {
			isLoading: false
		};

		$http.get( "main/services/data/uk.json", appHeaders, {cache: true} )
			.success( function (data) {
				$timeout( function () {
					console.log( "HTTP call went as planned" );
					deferred.resolve( data );
				}, 1000 );
			} )
			.error( function (status, error) {
				console.log( "Error while making HTTP call" + "Status is: " + status + "The error was: " + error );
				//vm.loadingIndicator.hide();
				deferred.reject();
			} );

		return deferred.promise;
	}

}

DataService.$inject = ["$http", "$q", "$timeout"];
export default DataService;


