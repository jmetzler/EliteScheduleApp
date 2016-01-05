(function(){
    'user strict';
    
    angular.module('eliteApp').factory('eliteApi', [eliteApi]);
    
    function eliteApi(){
        var leagues = JSON.parse();
        var leagueData = JSON.parse();
        
        function getLeagues(){
            return leagues;
        }
        
        function getLeagueData(){
            return leagueDate;
        }
        
        return {
            getLeagues: getLeagues,
            getLeagueData: getLeagueData
        }
}
})();