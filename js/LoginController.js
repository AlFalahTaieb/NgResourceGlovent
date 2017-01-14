

var controllers = angular.module('LoginControllers', []);

controllers.controller('LoginController', function ($scope, authenticationFactory, $location, $cookies){

    $scope.authentication = function (username, password){

        authenticationFactory.login(username, password).success(function (data){

            if(data != ""){
                $location.path('/users/user');
                $scope.d = data;
                /*  $cookies.put('id', data.id_Person);
                 $cookies.put('mail', data.email_Person);
                 $cookies.put('nom', data.nom_Person);
                 $cookies.put('prenom', data.prenom_Person);
                 console.log($cookies.get('mail')+" / "+$cookies.get('id'));*/

            }


        });
    }
});