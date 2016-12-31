(function() {
"use strict";

angular.module("MenuApp")
.component("itemsList", {
    templateUrl: "templates/items.component.html",
    bindings: {
        items: "<"
    }
});

})();
