angular.module("brewApp")

// creating the controller call name first, then controller functions name 
.controller("TrimTabCtrl", TrimTabController);

// Listing the dependencies
TrimTabController.$inject = ["$scope"];

// implementing the dependencies
function TrimTabController($scope) {
    $scope.message = "This is TrimTab.";
}