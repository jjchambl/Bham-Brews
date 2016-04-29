angular.module("brewApp")

// creating the controller call name first, then controller functions name 
.controller("AvondaleCtrl", AvondaleController);

// Listing the dependencies
AvondaleController.$inject = ["$scope", "$http", "avondaleFactory"];

// implementing the dependencies
function AvondaleController($scope, $http, avondaleFactory) {
    
    var getBrews = function() {
        avondaleFactory.getBrews()
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
