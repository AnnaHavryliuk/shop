MAIN_APP.directive('fallbackSrc', function () {
  var fallbackSrc = {
    restrict: 'A',
    link: function ($scope, elem, attr) {
      elem.bind('error', function() {
        angular.element(this).attr("src", attr.fallbackSrc);
      });
    }
  }
  return fallbackSrc;
});