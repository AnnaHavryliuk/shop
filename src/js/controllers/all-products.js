MAIN_APP.controller('AllProductsController', function ($scope, productsFactory) {
  $scope.products = productsFactory.getProducts();
  $scope.truncText = function(text, length) {
    var result = text;
    if (typeof text === 'string' && length > 0) {
      result = text.slice(0, length);
    }
    return result;
  }
});