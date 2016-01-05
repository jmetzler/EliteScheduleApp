(function(){
    'use strict';
    
    angular.module('eliteApp').controller('StandingsController', ['eliteApi', StandingsController]);
    
    function StandingsController(eliteApi){
        var vm = this;
        
        var data = eliteApi.getLeagueData();
        vm.standings = data.standings;
        
    };
})();