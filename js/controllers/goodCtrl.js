angular.module("brewApp")

// creating the controller call name first, then controller functions name 
.controller("GoodCtrl", GoodPeopleController);

// Listing the dependencies
GoodPeopleController.$inject = ["$scope"];

// implementing the dependencies
function GoodPeopleController($scope) {
    $scope.message = "For the Good ones.";
}