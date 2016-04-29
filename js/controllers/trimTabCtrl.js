angular.module("brewApp")

// creating the controller call name first, then controller functions name 
.controller("TrimTabCtrl", TrimTabController);

// Listing the dependencies
TrimTabController.$inject = ["$scope", "$http", "trimFactory", "$location"];

// implementing the dependencies
function TrimTabController($scope, $http, trimFactory, $location) {
    
    var setActive = function() {
        if ($location.path() === '/trimtab' || '/goodppl' || '/cahaba' || '/avondale') {
            $("#nav-links").css("color", "white");
            $("#nav-link").css("color", "");
        } else {
            $("#nav-link").css("color", "white");
        }
    }
    
    var getBrews = function() {
        trimFactory.getBrews()
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