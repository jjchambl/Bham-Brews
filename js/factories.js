var factories = angular.module('brewApp.factories', []);

factories.factory('welcomeFactory', ['$http', function ($http) {
    var f = {};
    
    f.getGoodCalendar = function () {
        return $http.jsonp('http://api.tumblr.com/v2/blog/goodpeopleevents.tumblr.com/posts?callback=JSON_CALLBACK&api_key=I8vzOElWPL30QJgSCWH8aFTAySclmj4DRGu5JzavJOzWJm8FqM&tag=events&limit=10&_=1461703849658');
    }
    
    var config = {headers: {Filter: 9993770}};
    f.getAvondaleCalendar = function() {
        return $http.get('https://services.platypi.io/api/v1/events/', config);
    }
    
    return f;
}])

factories.factory('goodFactory', ['$http', function($http) {
    var f = {};
    
    f.getBrews = function() {
         return $http.get('https://api.untappd.com/v4/brewery/info/2811/GET?client_id=DBC75E152A90C85FFFDD9562522B89649EAF6252&client_secret=778095373400201EB85CE2084B4829C6C454A7DB');
    }
    
    return f;
}]);

factories.factory('cahabaFactory', ['$http', function($http) {
    var f = {};
    
    f.getBrews = function() {
        return $http.get('https://api.untappd.com/v4/brewery/info/30313/GET?client_id=DBC75E152A90C85FFFDD9562522B89649EAF6252&client_secret=778095373400201EB85CE2084B4829C6C454A7DB');
    }
    return f;
}]);

factories.factory('trimFactory', ['$http', function($http) {
    var f = {};
    
    f.getBrews = function() {
        return $http.get('https://api.untappd.com/v4/brewery/info/66716/GET?client_id=DBC75E152A90C85FFFDD9562522B89649EAF6252&client_secret=778095373400201EB85CE2084B4829C6C454A7DB');
    }
    return f;
}]);

factories.factory('avondaleFactory', ['$http', function($http) {
    var f = {};
    
    f.getBrews = function() {
        return $http.get('https://api.untappd.com/v4/brewery/info/12339/GET?client_id=DBC75E152A90C85FFFDD9562522B89649EAF6252&client_secret=778095373400201EB85CE2084B4829C6C454A7DB');
    }
    return f;
}]);