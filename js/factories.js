var factories = angular.module('brewApp.factories', []);

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