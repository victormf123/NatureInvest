/**
 * Created by matheus on 10/05/17.
 */
/**
 * Created by matheus on 04/03/17.
 */
(function () {
    angular.module('natureInvest').controller('ListaAvalicacoesCrtl', [
        '$scope',
        '$http',
        '$window',
        avaliacaoController,

    ]);

    function avaliacaoController($scope, $http, $window) {
        const vm = this;

        vm.campanhas = {};

        vm.campanha = {};
        vm.historia = {};
        vm.impacto_quantitativo = {};
        vm.recompensa = {};
        vm.equipe= {};


        vm.open = function (id) {
            vm.getCampanha(id);
            vm.getHistoria(id);
            vm.getImpacto(id);
            vm.getRecompensa(id);
            vm.getEquipe(id);

        };
        vm.getCampanha = function (id) {
            vm.campanha = {};
            const url = 'http://localhost:8001/campanha/' + id;

            $http.get(url).then(function (response) {
                console.log(response.data);
                vm.campanha = response.data;
            }).catch(function (err) {
                console.log(err);
            });
        };

        vm.getHistoria = function (id) {
            vm.historia = {};
            const url = 'http://localhost:8001/biografiacampanha/' + id;

            $http.get(url).then(function (response) {
                console.log(response.data);
                vm.historia = response.data;
            }).catch(function (err) {
                console.log(err);
            });
        };

        vm.getImpacto = function (id) {
            vm.impacto_quantitativo = {};
            const url = 'http://localhost:8001/impactoQuantitativo/' + id;

            $http.get(url).then(function (response) {
                console.log(response.data);
                vm.impacto_quantitativo = response.data;
            }).catch(function (err) {
                console.log(err);
            });
        };

        vm.getRecompensa = function (id) {
            vm.recompensa = {};
            const url = 'http://localhost:8001/recompensa/' + id;

            $http.get(url).then(function (response) {
                console.log(response.data);
                vm.recompensa = response.data;
            }).catch(function (err) {
                console.log(err);
            });
        };
        vm.getEquipe = function (id) {
            vm.equipe = {};
            const url = 'http://localhost:8001/equipe/' + id;

            $http.get(url).then(function (response) {
                console.log(response.data);
                vm.equipe = response.data;
            }).catch(function (err) {
                console.log(err);
            });
        };

        vm.Aproved = function (id) {
            $window.location.reload();
            const url = 'http://localhost:8001/campanha/' + id;
            let putCampanha = {
                titulo: vm.campanha.titulo,
                orcamento: vm.campanha.orcamento,
                moeda: vm.campanha.moeda,
                status: 'Aprovado',
                localidade: vm.campanha.localidade,
                dataInicial: vm.campanha.dataInicial,
                dataFinal: vm.campanha.dataFinal,
            };

            $http.put(url, putCampanha).then(function (response) {
                console.log(response);
            }).catch(function (err) {
                console.log(err);
            });
        };


        vm.listarCampanhasAvaliacao = function () {
            const url = 'http://localhost:8001/campanhaEmAnalise/';

            $http.get(url).then(function (response) {
                console.log(response);
                vm.campanhas = response.data;
            }).catch(function (err) {
                console.log('entrou aqui');
                console.log(err);
            })
        };

        vm.refresh = function () {
            vm.listarCampanhasAvaliacao();
        };

        vm.refresh();

    }
})();