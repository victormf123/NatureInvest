/**
 * Created by matheus on 08/05/17.
 */
(function () {
    angular.module('natureInvest').factory('tabsLog', [ TabsLoginFactory ]);

    function TabsLoginFactory() {

        function show(owner, {
            tabLogado = false,
            tabLogin = true
        }){
            owner.tabLogado = tabLogado;
            owner.tabLogin = tabLogin;
        }

        return { show }
    }
})();