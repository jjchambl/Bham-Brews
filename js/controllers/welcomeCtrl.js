angular.module("brewApp")

.controller("WelcomeCtrl", WelcomeController);

WelcomeController.$inject = ["$scope"];

function WelcomeController($scope) {
    $scope.sayHello = function() {
        console.log("hello!");
    }
    $scope.init = $scope.sayHello();
}