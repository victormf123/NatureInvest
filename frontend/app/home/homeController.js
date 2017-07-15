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

        $scope.myInterval = 3000;
        $scope.slides = [
            {
                image: 'http://lorempixel.com/400/200/'
            },
            {
                image: 'http://lorempixel.com/400/200/food'
            },
            {
                image: 'http://lorempixel.com/400/200/sports'
            },
            {
                image: 'http://lorempixel.com/400/200/people'
            }
        ]

        vm.refresh = function () {
        }

        vm.refresh()

    }
})();