angular.module('InventoryApp.controllers',['ui.bootstrap'])
.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])
.controller('UserListController',function($scope,$state,$window,User){
    ///////////////////////////////////////
    console.log("BEGIN");
    $scope.page=1;
   
    //var allUserTmp=[];
    /*allUserTmp=getUsers();
    allUserTmp.then(function(result){
         $scope.totalItems = result.length;
        $scope.itemToShow = result.slice(0, 2);
    })*/
    
    ////////////////////////
    function getUsers() {
    $scope.allUserTmp = User.query();
    return  $scope.allUserTmp.$promise.then(function (response) {
         $scope.totalItems = response.length;
        $scope.itemToShow = response.slice(0, 3);
    })};
    /////////////////////
     getUsers();
 /*   
    $scope.check = function () {
        $scope.totalItems = $scope.allUserTmp.length;
        $scope.itemToShow = $scope.allUserTmp.slice(0, 2);
    }*/
    $scope.go=function(){
        var begin = (($scope.page - 1) *3)
        var end = begin + 3;
        $scope.itemToShow=$scope.allUserTmp.slice(begin,end);
    }
    
    ///////////////////////////////////////
    //$scope.itemToShow=User.query();

    $scope.deleteUser=function(User){
            User.$delete(function(){
                $window.location.href='';
            });
    }

})
.controller('UserViewController',function($scope,$stateParams,User){

    $scope.user=User.get({id:$stateParams.id});

})
.controller('UserCreateController',function($scope,$state,$stateParams,User){

    $scope.user=new User();

    $scope.addUser=function(){
        $scope.user.$save(function(){
            $state.go('Users');
        });
    }

})
.controller('UserEditStateController',function($scope,$state,$stateParams,User){
$scope.editState=function(){
        $scope.user.$update2(function(){
            $state.go('Users');
        });
    };

       $scope.loadUser=function(){
        $scope.user=User.get({id:$stateParams.id});
    };

    $scope.loadUser();
})

.controller('UserDisableController',function($scope,$state,$stateParams,User){
$scope.editS=function(){
        $scope.user.$update3(function(){
            $state.go('Users');
        });
    };

       $scope.loadUser=function(){
        $scope.user=User.get({id:$stateParams.id});
    };

    $scope.loadUser();
})

.controller('UserEditController',function($scope,$state,$stateParams,User){

    $scope.updateUser=function(){
        $scope.user.$update(function(){
            $state.go('Users');
        });
    };

    $scope.loadUser=function(){
        $scope.user=User.get({id:$stateParams.id});
    };

    $scope.loadUser();
});