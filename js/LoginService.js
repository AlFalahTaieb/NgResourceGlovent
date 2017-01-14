var services = angular.module('LoginServices', []);



services.factory('authenticationFactory', ['$http', function ($http){
    var dataFactory = {};
    dataFactory.login = function (username, password){
        return $http.get('http://localhost:18080/glovent-web/api/user/authentif?login='+username+'&pwd='+password);
    };
    
    return dataFactory;
    
}]);