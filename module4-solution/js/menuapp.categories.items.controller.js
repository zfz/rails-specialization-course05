(function() {
"use strict";

angular.module("MenuApp")
.controller("MenuAppCategoriesItemsController", MenuAppCategoriesItemsController);

MenuAppCategoriesItemsController.$inject = ["$stateParams", "items"];
function MenuAppCategoriesItemsController($stateParams, items) {
    var controller = this;

    controller.categoryShortName = $stateParams.categoryShortName;
    controller.items = items;
}

})();
