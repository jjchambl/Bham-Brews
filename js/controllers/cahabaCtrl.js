angular.module("brewApp")

// creating the controller call name first, then controller functions name 
.controller("CahabaCtrl", CahabaController);

// Listing the dependencies
CahabaController.$inject = ["$scope", "$http", "cahabaFactory"];

// implementing the dependencies
function CahabaController($scope, $http, cahabaFactory) {
    // $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyDm0HxIqsKb8xK49IOV8uGIUWcTbCeSs2E";
    
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