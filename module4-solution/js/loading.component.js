(function() {
"use strict";

angular.module("MenuApp")
.component("loading", {
    templateUrl: "templates/loading.component.html",
    controller: LoadingController,
    bindings: {
    }
});

LoadingController.$inject = ["$rootScope"];
function LoadingController($rootScope) {
    var $ctrl = this;

    $ctrl.show = false;

    var cancelListeners = [];
    cancelListeners.push($rootScope.$on("$stateChangeStart", function() {
        $ctrl.show = true;
    }));
    cancelListeners.push($rootScope.$on("$stateChangeSuccess", function() {
        $ctrl.show = false;
    }));
    cancelListeners.push($rootScope.$on("$stateChangeError", function() {
        $ctrl.show = false;
    }));

    $ctrl.onDestroy = function() {
        cancelListeners.forEach(function(cancelListener) {
            cancelListener();
        });
    }
}

})();
