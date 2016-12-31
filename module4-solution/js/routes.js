(function() {
"use strict";

angular.module("MenuApp").config(MenuRoutesConfig);

MenuRoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
function MenuRoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider

    .state("home", {
        url: "/",
        templateUrl: "templates/home.html"
    })

    .state("categories", {
        url: "/categories",
        templateUrl: "templates/categories.html",
        controller: "MenuAppCategoriesController as controller",
        resolve: {
            categories: ["MenuDataService", function(MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })

    .state("categories.items", {
        url: "/{categoryShortName}",
        templateUrl: "templates/categories.items.html",
        controller: "MenuAppCategoriesItemsController as controller",
        resolve: {
            items: ["$stateParams", "MenuDataService", function($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
        }
    });
}

})();
