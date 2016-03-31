var app = angular.module("firstApp", []);
app.controller("MyFirstController", function ($scope) {
  $scope.name = "Severus Snape";
});
// Controllers manage the view
app.controller("ExercisesController", function ($scope) {
  $scope.FavColor = 'favoritecolor';
  $scope.secondsInACentury = 60*60*24*365*100;
  $scope.rightNow = new Date();
});

app.controller('MadLibs', function ($scope) {
  $scope.boyName = "";
  $scope.adjective = "";
  $scope.pluralNoun = "";
  $scope.pluralNoun2 = "";
  $scope.insect = "";
  $scope.pluralNoun3 = "";
  $scope.verb = "";
});
