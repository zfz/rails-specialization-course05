(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];
function LunchCheckerController($scope) {
  $scope.lunchMenu = "";
  $scope.lunchMenuMsg = "";

  $scope.checkLunch = function () {
    if ($scope.lunchMenu == "") {
      $scope.lunchMenuMsg = "Please enter data first";
    } else {
      var l = $scope.lunchMenu.split(',').length;
      if (l <= 3) {
        $scope.lunchMenuMsg = "Enjoy!";
      } else {
        $scope.lunchMenuMsg = "Too much!";
      }
    }
  };

}

})();
