var InventoryApp = angular.module('InventoryApp',['ui.router','ngResource','InventoryApp.controllers','InventoryApp.services']);

InventoryApp.config(function($stateProvider,$httpProvider){
    $stateProvider.state('Users',{
        url:'/Users',
        templateUrl:'partials/Users.html',
        controller:'UserListController'
        
        
    }).state('viewUser',{
       url:'/Users/:id/view',
       templateUrl:'partials/User-view.html',
       controller:'UserViewController'
        

        
/*    }).state('newUser',{
        url:'/Users/new',
        templateUrl:'partials/User-add.html',
        controller:'UserCreateController'*/
        
    }).state('editState',{
       url:'/Users:id/edit-en',
       templateUrl:'partials/User-enable.html',
       controller:'UserEditStateController'
        
          
    }).state('editS',{
       url:'/Users:id/edit-dis',
       templateUrl:'partials/User-disable.html',
       controller:'UserDisableController'
    
        
        
    }).state('editUser',{
        url:'/Users/:id/edit',
        templateUrl:'partials/User-edit.html',
        controller:'UserEditController'
    });
    
}).run(function($state){
   $state.go('Users');
});

