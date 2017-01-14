angular.module('InventoryApp.services',[])



.factory('User',function($resource){
    return $resource('http://localhost:18080/glovent-web/api/user/:dest/:id',{},
                     {  'get':    {method:'GET', params: { 69: '@id'}},
                        'save':   {method:'POST'},
                        'query':  {method:'GET', isArray:true},
                        'remove': {method:'DELETE', params: { id: '@id'}},
                        'delete': {method:'DELETE', params: { id: '@idUser'}},
                        'update': {method: 'PUT',params:{dest:"update"}},
                        'update2':{method:'PUT',params:{dest:"activateaccount"}},
                        'update3' :{method:'PUT',params:{dest:"disableaccount"}}
                      
                     },
                     {
    stripTrailingSlashes: false
    });
})
  