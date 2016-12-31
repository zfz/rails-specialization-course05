(function() {
"use strict";

angular.module("MenuApp")
.controller("MenuAppCategoriesController", MenuAppCategoriesController);

MenuAppCategoriesController.$inject = ["categories"];
function MenuAppCategoriesController(categories) {
    var controller = this;

    controller.categories = categories;
}

})();
