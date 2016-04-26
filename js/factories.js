var factories = angular.module('brewApp.factories', []);

factories.factory('brewFactory', ['$http', function($http) {
    var f = {};
    
    // f.goodppl = [];
    
    f.getBrews = function() {
        $http.get('https://api.untappd.com/v4/brewery/info/2811/GET?client_id=DBC75E152A90C85FFFDD9562522B89649EAF6252&client_secret=778095373400201EB85CE2084B4829C6C454A7DB');
    }
    return f;
}])