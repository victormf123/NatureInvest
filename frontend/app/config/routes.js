/**
 * Created by matheus on 03/03/17.
 */
angular.module('natureInvest').config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        $stateProvider.state('home',{
            url: "/home",
            templateUrl: "home/home.html"
        }).state('tabs', {
            url: "/criarCampanha",
            templateUrl:"campanha/tabs.html",
        }).state('historiaProjeto',{
            url: "/historiaProjeto",
            templateUrl:"campanha/criarHistoriaProjeto.html",
        });

        $urlRouterProvider.otherwise('/home');
    }
]);