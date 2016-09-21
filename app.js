(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  //$scope.menuItem = "";
  $scope.sayMessage = "";

  $scope.checkIfTooMuch = function () {
    if(! $scope.menuItem) {
      $scope.sayMessage = "Please enter data first!";
    } else  {
      var re = /\s*,\s*/;
      var items = $scope.menuItem.split(re);

      if(items.length > 3) {
        $scope.sayMessage = "Too much!";
      } else
      if(items.length > 0 && items.length <= 3) {
        $scope.sayMessage = "Enjoy!";
      }
    }
  };

}

})();
