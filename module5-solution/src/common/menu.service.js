(function () {
  "use strict";

  angular.module('common')
    .constant('ApiBasePath', 'https://hidden-everglades-50939.herokuapp.com')
    .service('MenuService', MenuService);

  MenuService.$inject = ['$http', 'ApiBasePath'];
  function MenuService($http, ApiBasePath) {
    var service = this;

    service.getCategories = function () {
      return $http.get(ApiBasePath + '/categories.json')
        .then(function (response) {
          return response.data;
      });
    };

    service.getMenuItems = function (category) {
      var config = {};
      if (category) {
        config.params = {'category': category};
      }

      return $http.get(ApiBasePath + '/menu_items.json', config)
        .then(function (response) {
          return response.data;
      });
    };

    service.getFavoriteDish = function(favoriteDish) {
      return $http.get(ApiBasePath + '/menu_items/' + favoriteDish + '.json')
        .then(function(response){
        return response.data;
      }).catch(function(error) {
        console.error(error);
      });
    }

    service.saveData = function(userData) {
      service.data = userData;
    };

    service.getData = function() {
      return service.data;
    };

  }

})();
