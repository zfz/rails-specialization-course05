(function() {
  'use strict';

  angular.module('public')
    .config(routeConfig);

  /**
   * Configures the routes and views
   */
  routeConfig.$inject = ['$stateProvider'];
  function routeConfig ($stateProvider) {
    // Routes
    $stateProvider

      .state('public', {
        absract: true,
        templateUrl: 'src/public/public.html'
      })

      // Home
      .state('public.home', {
        url: '/',
        templateUrl: 'src/public/home/home.html'
      })

      // Menu
      .state('public.menu', {
        url: '/menu',
        templateUrl: 'src/public/menu/menu.html',
        controller: 'MenuController',
        controllerAs: 'menuCtrl',
        resolve: {
          menuCategories: ['MenuService', function (MenuService) {
            return MenuService.getCategories();
          }]
        }
      })

      // menu/Category
      .state('public.menuitems', {
        url: '/menu/{category}',
        templateUrl: 'src/public/menu-items/menu-items.html',
        controller: 'MenuItemsController',
        controllerAs: 'menuItemsCtrl',
        resolve: {
          menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
            return MenuService.getMenuItems($stateParams.category);
          }]
        }
      })

    // Sign up
      .state('public.sign-up', {
        url: '/sign-up',
        templateUrl: 'src/public/sign-up/sign-up.html',
        controller: 'SignUpController',
        controllerAs: 'signUpCtrl'
      })

    // My Info
      .state('public.info', {
        url: '/info',
        templateUrl: 'src/public/info/info.html',
        controller: 'MyInfoController',
        controllerAs: 'myInfoCtrl',
        resolve: {
          info : ['MenuService', function(MenuService) {
            return MenuService.getData();
          }]
        }
      });
  }
})();
