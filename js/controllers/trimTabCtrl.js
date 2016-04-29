angular.module("brewApp")

// creating the controller call name first, then controller functions name 
.controller("TrimTabCtrl", TrimTabController);

// Listing the dependencies
TrimTabController.$inject = ["$scope", "$http", "trimFactory"];

// implementing the dependencies
function TrimTabController($scope, $http, trimFactory) {
    
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
    // $scope.init = getBrews ();
}