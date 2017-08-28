/**
 * Created by matheus on 25/08/17.
 */
(function () {
    angular.module('natureInvest').controller('singlePageCrtl', [
        '$scope',
        '$http',
        singlePage,

    ]);

    function singlePage($scope, $http) {
        const vm = this;
        vm.campanha = {}

        vm.loadCampanha = function (item) {
            vm.campanha = item

            console.log(vm.campanha);
        }

    }
})();