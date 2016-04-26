angular.module("brewApp")

// creating the controller call name first, then controller functions name 
.controller("TrimTabCtrl", TrimTabController);

// Listing the dependencies
TrimTabController.$inject = ["$scope", "$http"];

// implementing the dependencies
function TrimTabController($scope, $http) {
    $scope.message = "This is TrimTab.";
    
    var getBrews = function() {
        $http.get('https://api.untappd.com/v4/brewery/info/66716/GET?client_id=DBC75E152A90C85FFFDD9562522B89649EAF6252&client_secret=778095373400201EB85CE2084B4829C6C454A7DB').success(function(data) {
            console.log(data.response.brewery.beer_list.items);
            var beerList = data.response.brewery.beer_list.items;
            $scope.beers = beerList;
        })
    }
    $scope.init = getBrews ();
}