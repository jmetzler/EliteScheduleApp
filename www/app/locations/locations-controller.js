(function(){
    'user strict';
    
    angular.module('eliteApp').factory('LocationsController', ['eliteApi', LocationsController]);
    
    function LocationsController($state, eliteApi){
        var vm = this;
        
        var data = eliteApi.getLeagueData();
        vm.locations = data.locations;
        
    }

})();