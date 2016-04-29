angular.module("brewApp")

// creating the controller call name first, then controller functions name 
.controller("CahabaCtrl", CahabaController);

// Listing the dependencies
CahabaController.$inject = ["$scope", "$http", "cahabaFactory", "$location"];

// implementing the dependencies
function CahabaController($scope, $http, cahabaFactory, $location) {
    // $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyDm0HxIqsKb8xK49IOV8uGIUWcTbCeSs2E";
    
    var setActive = function() {
        if ($location.path() === '/trimtab' || '/goodppl' || '/cahaba' || '/avondale') {
            $("#nav-links").css("color", "white");
            $("#nav-link").css("color", "");
        } else {
            $("#nav-link").css("color", "white");
        }
    }
    
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
    $scope.init = setActive();
    $scope.init = getBrews (); 
}