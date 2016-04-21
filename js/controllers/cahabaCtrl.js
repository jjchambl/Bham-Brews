angular.module("brewApp")

// creating the controller call name first, then controller functions name 
.controller("CahabaCtrl", CahabaController);

// Listing the dependencies
CahabaController.$inject = ["$scope"];

// implementing the dependencies
function CahabaController($scope) {
    $scope.message = "This is Cahaba.";
}