app.directive('dice', function ($timeout) {
  return {
    restrict: 'E',
    template: "<div ng-click='clickey()' class='square'>{{ number }}</div>",
    link: function (scope, element, attrs) {
      scope.number = 3;
      scope.clickey = function () {
        console.log(scope.number);
        scope.number = Math.floor(Math.random() * 6) + 1;
      };
    },
  };
});

// $watch - if that item is outside of $scope 
