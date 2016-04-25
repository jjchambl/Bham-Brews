angular.module("brewApp")

.controller("WelcomeCtrl", WelcomeController);

WelcomeController.$inject = ["$scope", 'brewFactory'];

function WelcomeController($scope, brewFactory) {
    var sayHello = function() {
        console.log("hello!");
    }
    
    // $scope.beers = brewFactory.goodppl;
    
    var getBrews = function() {
        brewFactory.getBrews();
        console.log(brewFactory.goodppl);
        // $scope.beers = brewFactory.goodppl;
    }
    // $scope.init = brewFactory.goodppl = [];
    $scope.init = getBrews();
}