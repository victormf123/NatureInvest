/**
 * Created by matheus on 29/03/17.
 */
(function () {
    angular.module('natureInvest').controller('homeCrtl', [
        '$scope',
        homeController,

    ]);

    function homeController($scope) {
        const vm = this;

        $scope.slides = [
            {
                class: 'active',
                text: 'Você pode fazer parte da mudança!',
                image: './assets/img/1195d27_slider-man_1.jpg'
            },
            {
                class: '',
                text: 'Nature Invest transforma pequenas iniciativas ambientais em grandes resultados',
                image: './assets/img/c6d8cc1_foto-slider_1.jpg'
            },
            {
                class: '',
                text: 'Nature Invest transforma pequenas iniciativas ambientais em grandes resultados',
                image: './assets/img/41a5964_foto-slider-2_1.jpg'
            }]

        vm.refresh = function () {
        }

        vm.refresh()

    }
})();