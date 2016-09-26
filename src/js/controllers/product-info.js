MAIN_APP.controller('ProductInfoController', function ($scope, productsFactory, $routeParams) {
  $scope.chosenProduct = productsFactory.getProductById($routeParams.productId);
  $scope.addToMyOrders = function () {
    if (!$scope.chosenProduct.isBooked) {
      $scope.chosenProduct.isBooked = true;
    }
  }
});