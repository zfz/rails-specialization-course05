(function(){
  "use strict";

  angular.module('public')
    .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['info', 'ApiBasePath'];
  function MyInfoController(info, ApiBasePath) {
    var ctrl = this;

    if(!info) {
      ctrl.errorMessage = "You have not signed up yet!";
    } else {
      ctrl.info = info;
      ctrl.basePath = ApiBasePath;
    }
  };

})();
