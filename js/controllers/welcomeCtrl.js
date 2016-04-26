angular.module("brewApp")

.controller("WelcomeCtrl", WelcomeController);

WelcomeController.$inject = ["$scope", "$http", 'goodFactory'];

function WelcomeController($scope, $http, goodFactory) {
    
    $scope.beers = [];
    
    var getBrews = function() {
        $http.get('https://api.untappd.com/v4/brewery/info/2811/GET?client_id=DBC75E152A90C85FFFDD9562522B89649EAF6252&client_secret=778095373400201EB85CE2084B4829C6C454A7DB').success(function(data) {
            console.log(data.response.brewery.beer_list.items);
            var beerList = data.response.brewery.beer_list.items;
            $scope.beers = beerList;
        });
        // This does not work on load, as it requires a promise that needs to resolve.
        // goodFactory.getBrews();
        // console.log(goodFactory.brews[0]);
        // $scope.beers = goodFactory.brews[0];
    }
    
    // $scope.init = getBrews();
}