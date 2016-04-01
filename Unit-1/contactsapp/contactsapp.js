var app = angular.module("app", []);
app.controller('contactsController', function($scope) {
  $scope.latestID = 10;
  $scope.contacts = [{ id: 9,
      name: 'Steve Rogers',
      email: 'capn@avengers.org',
      phone: '(111) 111-1111',
    },
    { id: 10,
      name: 'Bruce Banner',
      email: 'smash@avengers.org',
      phone: '(222) 222-2222',
    }];
  $scope.addContact = function () {
    $scope.contact.id = ++$scope.latestID;
    $scope.contacts.push($scope.contact);
    $scope.contact = {};
  };
}).controller('SearchController', function ($scope) {
  // $scope.search = function (keyword) {
  //
  // };
});
