angular.module("brewApp")

// creating the controller call name first, then controller functions name 
.controller("GoodCtrl", GoodPeopleController);

// Listing the dependencies
GoodPeopleController.$inject = ["$scope", "NgMap"];

// implementing the dependencies
function GoodPeopleController($scope, NgMap) {
    $scope.message = "For the Good ones.";
    NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
        
}