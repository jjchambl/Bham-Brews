angular.module("brewApp")

.controller("WelcomeCtrl", WelcomeController);

WelcomeController.$inject = ["$scope", "$http", "$timeout", "$anchorScroll", "$location"];

function WelcomeController($scope, $http, $timeout, $anchorScroll, $location) {
    
    $timeout(function () {twttr.widgets.load();}, 500);
    
    $scope.goToCalendar = function() {
        $location.hash('calendar');
        $anchorScroll();
    }
    
    $scope.beers = [];
    
    var config = {headers: {Filter: 9993770}};
    
    $scope.goodEvents = [];
    $scope.avEvents = [];
    
    var getAvondaleCalendar = function() {
        $http.get('https://services.platypi.io/api/v1/events/', config).success(function(data) {
            var avEvents = data.data;
            $scope.avEvents = avEvents;
        }, function (err) {
            console.log(err);
        });
    }
    
    var getGoodCalendar = function() {
        $http.jsonp('http://api.tumblr.com/v2/blog/goodpeopleevents.tumblr.com/posts?callback=JSON_CALLBACK&api_key=I8vzOElWPL30QJgSCWH8aFTAySclmj4DRGu5JzavJOzWJm8FqM&tag=events&limit=10&_=1461703849658').success(function(data) {
            var goodEvents = data.response.posts;
            $scope.goodEvents = goodEvents;
        });
    }
    $scope.init = getGoodCalendar();
    $scope.init = getAvondaleCalendar();
}