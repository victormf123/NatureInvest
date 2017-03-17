/**
 * Created by matheus on 11/03/17.
 */
(function () {
   angular.module('natureInvest').factory('tabs', [ TabsFactory ])

   function TabsFactory() {

       function show(owner, {
           tabInfoBasic = false,
           tabHistory = false,
           tabRecompensa = false,
           tabEquipe = false
       }){
           owner.tabInfoBasic = tabInfoBasic;
           owner.tabHistory = tabHistory;
           owner.tabRecompensa = tabRecompensa;
           owner.tabEquipe = tabEquipe;
       }

        return { show }
   }
})();