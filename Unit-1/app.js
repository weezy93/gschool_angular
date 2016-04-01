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


app.controller('randomNumber', function ($scope) {
  $scope.number = 5;
  $scope.pickRandomNumber = function () {
    $scope.number = Math.floor(Math.random() * 10) + 1;
  };
});

app.controller('reverseWord', function ($scope) {
  $scope.word = '';
  $scope.reverseWord = function (word) {
    var splitArray = word.split('').reverse().join('');
    $scope.word = splitArray;
    return $scope.word;
    // OR
    // var reverseArray = [];
    // for (var i = 0; i < splitArray.length; i++) {
    //   reverseArray[splitArray.length-i] = (splitArray[i]);
    // }
    // $scope.word = reverseArray.join('');
    // return $scope.word;
  };
});


app.controller('pingPong', function ($scope) {
  $scope.player1 = {score: 0, win: false};
  $scope.player2 = {score: 0, win: false};
  $scope.reset = function () {
    $scope.player1 = {score: 0, win: false};
    $scope.player2 = {score: 0, win: false};
  };
  $scope.addPoint = function (player, reset) {
    player.score ++;
    if (player.score === 11) {
      player.win = true;
    }
    if (player.score > 11) {
      reset();
    }
  };
});
