var app = angular.module('brewApp', ['brewApp.factories', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeCtrl'
    })
    .when('/goodppl', {
        templateUrl: 'views/goodppl.html',
        controller: 'GoodCtrl'
    })
    .when('/cahaba', {
        templateUrl: 'views/cahaba.html',
        controller: 'CahabaCtrl'
    })
    .when('/trimtab', {
        templateUrl: 'views/trimtab.html',
        controller: 'TrimTabCtrl'
    })
    .when('/avondale', {
        templateUrl: 'views/avondale.html',
        controller: 'AvondaleCtrl'
    });
}]);

$(window).on('scroll', function(){
        var ypos = window.scrollY;
        var trigger = 10;
        
        if (ypos > trigger) {
            $('#filter').css('-webkit-filter', 'blur(3px) brightness(0.75)');
            console.log('TRIGGERED!')
        } else {
            $('#filter').css('-webkit-filter', 'initial');
        }
    })