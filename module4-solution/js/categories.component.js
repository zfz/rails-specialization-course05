(function() {
"use strict";

angular.module("MenuApp")
.component("categoriesList", {
    templateUrl: "templates/categories.component.html",
    bindings: {
        categories: "<",
        onClick: "&"
    }
});

})();
