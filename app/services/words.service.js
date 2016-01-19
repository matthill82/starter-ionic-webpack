"use strict";

class Words {
  constructor($http) {
    this.$http = $http;
  }

  getWords() {
    return this.$http.get("http://localhost:3001/api/random-word");
  }
}

let moduleName = "services.words";

angular.module(moduleName, [])
	.service("words", Words);

Words.$inject = ["$http"];
export default moduleName;