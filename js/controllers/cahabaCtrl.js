angular.module("brewApp")

// creating the controller call name first, then controller functions name 
.controller("CahabaCtrl", CahabaController);

// Listing the dependencies
CahabaController.$inject = ["$scope", "$http", "cahabaFactory"];

// implementing the dependencies
function CahabaController($scope, $http, cahabaFactory) {
    var getBrews = function() {
        cahabaFactory.getBrews()
        .success(function(data) {
            console.log(data.response.brewery.beer_list.items);
            var beerList = data.response.brewery.beer_list.items;
            $scope.beers = beerList;
        }, function(err) {
            console.log(err);
        });
    }
    $scope.init = getBrews (); 
}