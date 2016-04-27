angular.module("brewApp")

// creating the controller call name first, then controller functions name 
.controller("GoodCtrl", GoodPeopleController);

// Listing the dependencies
GoodPeopleController.$inject = ["$scope", "NgMap", "$http"];

// implementing the dependencies
function GoodPeopleController($scope, NgMap, $http) {
    $scope.message = "For the Good ones.";
    NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
    });
    
    // var getBrews = function() {
    //     $http.get('https://api.untappd.com/v4/brewery/info/2811/GET?client_id=DBC75E152A90C85FFFDD9562522B89649EAF6252&client_secret=778095373400201EB85CE2084B4829C6C454A7DB').success(function(data) {
    //         console.log(data.response.brewery.beer_list.items);
    //         var beerList = data.response.brewery.beer_list.items;
    //         $scope.beers = beerList;
    //     })
    // }
    // $scope.init = getBrews ();    
}