angular.module("brewApp")

// creating the controller call name first, then controller functions name 
.controller("AvondaleCtrl", AvondaleController);

// Listing the dependencies
AvondaleController.$inject = ["$scope"];

// implementing the dependencies
function AvondaleController($scope) {
    $scope.message = "This is Avondale.";
}