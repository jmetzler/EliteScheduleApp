(function(){
    'use strict';
    
    angular.module('eliteApp').controller('TeamsController', ['eliteApi', TeamsController]);
    
    function TeamsController(eliteApi){
        var vm = this;
        
        eliteApi.getLeagueData(function(data){
            vm.teams = data.teams;
        });      
        
    };
})();