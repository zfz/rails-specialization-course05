(function () {
  "use strict";

  angular.module('public')
    .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService'];
  function SignUpController(MenuService) {
    var signUpCtrl = this;

    signUpCtrl.user = {};
    signUpCtrl.menuCheckFlag = false;

    signUpCtrl.submit = function () {
      MenuService.saveData(signUpCtrl.user);
      window.scrollTo(0, 0);
      signUpCtrl.resultMessage = "Your information is getting saved successfully. Go to Information section please.";
      $('#myModal').modal();
    };

    signUpCtrl.checkMenuNumber = function () {
      var favoriteDish = signUpCtrl.user.favoriteDish;

      if(favoriteDish) {
        MenuService.getFavoriteDish(favoriteDish)
          .then(function(response){
            if(response){
              signUpCtrl.user.menu_item = response;
              signUpCtrl.menuCheckFlag = true;
            } else {
              signUpCtrl.menuCheckFlag = false;
              signUpCtrl.resultMessage = "No such Menu number exists. Please enter again";
              $("#myModal").modal();
            }
          });
      }
    }
  }

})();
