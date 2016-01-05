(function(){
    'use strict';
    
    angular.module('eliteApp').controller('TeamsController', ['eliteApi', TeamsController]);
    
    function TeamsController(eliteApi){
        var vm = this;
        
        var data = eliteApi.getLeagueData();
        vm.teams = data.teams;
        
    };
})();