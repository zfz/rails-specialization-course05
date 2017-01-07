(function () {
  "use strict";

  angular.module('public')
    .component('menuItem', {
      templateUrl: 'src/public/menu-item/menu-item.html',
      bindings: {
        menuItem: '<'
      },
      controller: MenuItemController
    });

  MenuItemController.$inject = ['ApiBasePath'];
  function MenuItemController(ApiBasePath) {
    var $ctrl = this;

    $ctrl.basePath = ApiBasePath;
  }

})();
