/**
 * Created by matheus on 29/03/17.
 */
(function () {
    angular.module('natureInvest').factory('tabsMenu', [ TabsFactory ]);

    function TabsFactory() {

        function show(owner, {
                          tabInvista = false,
                          tabcriarCampanha = false,
                          tabComoFunciona = false
                      }){
            owner.tabInvista = tabInvista;
            owner.tabcriarCampanha = tabcriarCampanha;
            owner.tabComoFunciona = tabComoFunciona;
        }

        return { show }
    }
})();