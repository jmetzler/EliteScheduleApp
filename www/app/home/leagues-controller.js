(function(){
    'user strict';
    
    angular.module('eliteApp').factory('LeaguesController', ['$state','eliteApi', LeaguesController]);
    
    function LeaguesController($state, eliteApi){
        var vm = this;
        
        var leagues = eliteApi.getLeagues();
        vm.leagues = leagues;
        
        vm.selectLeague = function(leagueId){
            $state.go("app.teams");
        }
    }

})();