/**
 * Created by matheus on 29/03/17.
 */
(function () {
    angular.module('natureInvest').controller('headerCrtl', [
        'tabsMenu',
        headerController,

    ]);

    function headerController(tabsMenu) {
        const vm = this;

        vm.clickInvista = function () {
            console.log('Invista');
            tabsMenu.show(vm, {tabInvista : true, tabcriarCampanha : false, tabComoFunciona : false})
        }
        vm.clickCriarCamapanha = function () {
            console.log('Criar Campanha');
            tabsMenu.show(vm, {tabInvista : false, tabcriarCampanha : true, tabComoFunciona : false})
        }
        vm.clickComoFunciona = function () {
            console.log('como funciona');
            tabsMenu.show(vm, {tabInvista : false, tabcriarCampanha : false, tabComoFunciona : true})
        }
        vm.clickInicio = function () {
            console.log('Inicio');
            tabsMenu.show(vm, {tabInvista : false, tabcriarCampanha : false, tabComoFunciona : false})
        }

    }
})();