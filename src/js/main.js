var MAIN_APP = angular.module('mainApp', ['ngRoute']);

MAIN_APP.config(function($routeProvider) {
  $routeProvider
  .when('/',
    {
      controller: 'AllProductsController',
      templateUrl: 'src/templates/all-products.html'
    }
  )
  .when('/add-product',
    {
      controller: 'AddProductController',
      templateUrl: 'src/templates/add-product.html'
    }
  )
  .when('/my-orders',
    {
      controller: 'MyOrdersController',
      templateUrl: 'src/templates/my-orders.html'
    }
  )
  .when('/:productId',
    {
      controller: 'ProductInfoController',
      templateUrl: 'src/templates/product-info.html'
    }
  )
  .otherwise({redirectTo: '/'});
});