angular.module("brewApp")

// creating the controller call name first, then controller functions name 
.controller("GoodCtrl", GoodPeopleController);

// Listing the dependencies
GoodPeopleController.$inject = ["$scope", "$http", "goodFactory", "$location"];

// implementing the dependencies
function GoodPeopleController($scope, $http, goodFactory, $location) {
    // NgMap.getMap().then(function(map) {
    // console.log(map.getCenter());
    // console.log('markers', map.markers);
    // console.log('shapes', map.shapes);
    // });
    
    var setActive = function() {
        if ($location.path() === '/trimtab' || '/goodppl' || '/cahaba' || '/avondale') {
            $("#nav-links").css("color", "white");
            $("#nav-link").css("color", "");
        } else {
            $("#nav-link").css("color", "white");
        }
    }
    
    var getBrews = function() {
        goodFactory.getBrews()
        .success(function(data) {
            console.log(data.response.brewery.beer_list.items);
            var beerList = data.response.brewery.beer_list.items;
            $scope.beers = beerList;
        }, function(err) {
            console.log(err);
        });
    }
    $scope.init = setActive();
    $scope.init = getBrews ();    
}