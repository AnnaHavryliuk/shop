MAIN_APP.controller('AddProductController', function($scope, $location, productsFactory) {
  $scope.product = {
    isBooked: false
  };
  $scope.addNewProduct = function (valid) {
    if (valid) {
      $scope.product.id = Date.now();
      console.log($scope.product.id);
      productsFactory.addProduct($scope.product);
    }
    $location.path('/');
  }
});