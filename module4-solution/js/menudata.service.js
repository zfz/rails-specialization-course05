(function() {
"use strict";

angular.module("data")
.service("MenuDataService", MenuDataService);

MenuDataService.$inject = ["$http", "CATEGORIES_URL", "ITEMS_URL"];
function MenuDataService($http, CATEGORIES_URL, ITEMS_URL) {
    var service = this;

    service.getAllCategories = function() {
        return $http({
            method: "GET",
            url: CATEGORIES_URL
        }).then(function(response) {
            return response.data;
        }).catch(function(response) {
            console.error(response);
        });
    };

    service.getItemsForCategory = function(categoryShortName) {
        return $http({
            method: "GET",
            url: ITEMS_URL,
            params: {
                category: categoryShortName
            }
        }).then(function(response) {
            return response.data.menu_items;
        }).catch(function(response) {
            console.error(response);
        });
    };

    return service;
}

})();
