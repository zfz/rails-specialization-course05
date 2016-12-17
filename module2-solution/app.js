(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.removeToBuyItem = function (item) {
    ShoppingListCheckOffService.addBoughtItem(item);
    ShoppingListCheckOffService.removeToBuyItem(item);
    if(toBuyList.items.length === 0) {
      //console.log("toBuyList is empty");
      toBuyList.errorMessage = "Everything is bought!";
    }
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;

  alreadyBoughtList.items = ShoppingListCheckOffService.getBoughtItems();

  alreadyBoughtList.checkBoughtList = function () {
    if(alreadyBoughtList.items.length === 0) {
      alreadyBoughtList.errorMessage = "Nothing bought yet.";
      return true;
    } else {
      return false;
    }
  };
}


function ShoppingListCheckOffService() {
  var service = this;

  var to_buy_items = [
    {name: "cookies", quantity: 1},
    {name: "coke", quantity: 2},
    {name: "apples", quantity: 3},
    {name: "eggs", quantity: 4},
    {name: "pies", quantity: 5}
  ];
  //console.log('to_buy_items', to_buy_items);
  var bought_items = [];
  //console.log('bought_items', bought_items);

  service.addBoughtItem = function (item) {
    //console.log('add bought items: ', item);
    bought_items.push(item);
  };

  service.removeToBuyItem = function (item) {
    var index = to_buy_items.indexOf(item);
    to_buy_items.splice(index, 1);
    //console.log('remove bought items: ', item);
  };

  service.getToBuyItems = function () {
    return to_buy_items;
  };

  service.getBoughtItems = function () {
    return bought_items;
  };
}

})();
