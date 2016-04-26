angular.module("brewApp")

.controller("WelcomeCtrl", WelcomeController);

WelcomeController.$inject = ["$scope", "$http", 'brewFactory'];

function WelcomeController($scope, $http, brewFactory) {
    var sayHello = function() {
        console.log("hello!");
    }
    
    // $scope.beers = brewFactory.goodppl;
    
    var getBrews = function() {
        $http.get('https://api.untappd.com/v4/brewery/info/2811/GET?client_id=DBC75E152A90C85FFFDD9562522B89649EAF6252&client_secret=778095373400201EB85CE2084B4829C6C454A7DB').success(function(data) {
            console.log(data.response.brewery.beer_list.items);
            var beerList = data.response.brewery.beer_list.items;
        });
        
        // brewFactory.getBrews().success(function(data) {
        //     console.log(data);
        // });
        // console.log(brewFactory.getBrews());
        // for (var i = 0; i < brewFactory.length; i++) {
            
        // }
        // $scope.beers = brewFactory;        
        // console.log(brewFactory.getBrews().data.response.brewery.beer_list.items);
        // $scope.beers = brewFactory;
    }
    
    // $scope.init = brewFactory.goodppl = [];
    $scope.init = getBrews();
}