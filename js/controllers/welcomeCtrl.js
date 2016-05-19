angular.module("brewApp")

.controller("WelcomeCtrl", WelcomeController);

WelcomeController.$inject = ["$scope", "$http", "$timeout", "$anchorScroll", "$location", "welcomeFactory", "$routeParams"];

function WelcomeController($scope, $http, $timeout, $anchorScroll, $location, welcomeFactory, $routeParams) {
    
    var setActive = function() {
        if ($location.path() === '/') {
            $("#nav-link").css("color", "white");
            $("#nav-links").css("color", "");
        } else {
            $("#nav-link").css("color", "");
        }
    }
    
    
    $timeout(function () {twttr.widgets.load();}, 500);
    
    $scope.goToCalendar = function() {
        $location.hash('calendar');
        $anchorScroll();
    }

    
    $scope.beers = [];    
    $scope.goodEvents = [];
    $scope.avEvents = [];
    
    var getAvondaleCalendar = function() {
        welcomeFactory.getAvondaleCalendar()
        .success(function(data) {
            console.log(data);
            var avEvents = data.data;
            $scope.avEvents = avEvents;
        }, function (err) {
            console.log(err);
        });
    }
    
    var getGoodCalendar = function() {
        welcomeFactory.getGoodCalendar()
        .success(function(data) {
            console.log(data);
            var goodEvents = data.response.posts;
            $scope.goodEvents = goodEvents;
        });
    }
    
    $scope.init = setActive();
    $scope.init = getGoodCalendar();
    $scope.init = getAvondaleCalendar();
}