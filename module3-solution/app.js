(function() {
"use strict";

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", FoundItemsDirective)
.filter("highlight", HighlightFilterFactory)

.constant("URL", "https://davids-restaurant.herokuapp.com/menu_items.json");

NarrowItDownController.$inject = ["MenuSearchService"];
function NarrowItDownController(MenuSearchService) {
    var ctrl = this;

    ctrl.searchTerm = "";
    ctrl.found = null;          // We will use 'null' as an indicator of the fact
                                // that we haven't yet searched for anything.

    ctrl.getMatchedMenuItems = function() {
        if (ctrl.searchTerm.trim() === "") {
            ctrl.found = [];
        } else {
            ctrl.found = null;
            ctrl.searching = true;

            MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function(found) {
                ctrl.found = found;
                ctrl.searching = false;
            });
        }
    };

    ctrl.removeMatchedMenuItem = function(index) {
        this.found.splice(index, 1);
    };
}

MenuSearchService.$inject = ["$http", "URL"];
function MenuSearchService($http, URL) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
        return $http({
            method: "GET",
            url: URL
        }).then(function(response) {
            var allItems = response.data.menu_items, matchedItems = [];

            allItems.forEach(function(item) {
                if (item.description && (item.description.indexOf(searchTerm) !== -1)) {
                    matchedItems.push(item);
                }
            });

            return matchedItems;
        }).catch(function(response) {
            console.error(response);
        })
    };

    return service;
}

FoundItemsDirective.$inject = [];
function FoundItemsDirective() {
    var ddo = {
        restrict: "E",
        templateUrl: "foundItems.html",
        scope: {
            items: "<",
            highlight: "<",
            onRemove: "&"
        },
        controller: FoundItemsDirectiveController,
        controllerAs: "ctrl",
        bindToController: true
    };

    function FoundItemsDirectiveController() {
        // Nothing here, really... :-)
    };

    return ddo;
}

HighlightFilterFactory.$inject = ["$sce"];
function HighlightFilterFactory($sce) {
    return function(value, toHighlight) {
        return $sce.trustAsHtml(
                value.replace(toHighlight, "<span class=\"bg-info\">" + toHighlight + "</span>"));
    };
}

})();
