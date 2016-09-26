MAIN_APP.controller('MyOrdersController', function($scope, productsFactory){
  $scope.orderedProducts = [];

  productsFactory.getProducts().forEach(function (product) {
    if (product.isBooked) {
      $scope.orderedProducts.push(product);
    }
  });

  $scope.removeFromMyOrders = function (product) {
    product.isBooked = false;
    var index = $scope.orderedProducts.indexOf(product);
    $scope.orderedProducts.splice(index, 1);
  }
});