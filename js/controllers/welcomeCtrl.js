angular.module("brewApp")

.controller("WelcomeCtrl", WelcomeController);

WelcomeController.$inject = ["$scope", 'brewFactory'];

function WelcomeController($scope, brewFactory) {
    var sayHello = function() {
        console.log("hello!");
    }
    
    var getBrews = function() {
        brewFactory.getBrews();
        console.log(brewFactory.goodppl);
        
        // if (brewFactory.getBrews() == undefined) {
        //     console.log('loading...');
        // } else {            
        //     console.log(brewFactory.getBrews());
        // }
    }
    
    $scope.init = getBrews();
}