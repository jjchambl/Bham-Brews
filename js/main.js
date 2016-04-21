angular.module('brewApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
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