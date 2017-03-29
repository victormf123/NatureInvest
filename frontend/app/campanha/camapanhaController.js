/**
 * Created by matheus on 04/03/17.
 */
(function () {
        angular.module('natureInvest').controller('CampanhaCrtl', [
        '$scope',
        '$http',
        'tabs',
        campanhaController,

    ]);

    function campanhaController($scope, $http, tabs) {
        const vm = this;


        vm.add = function () {
          vm.users.push({name: 'Bruno'});
        };

        vm.refresh = function () {
            vm.listas = { equipe: [{}], recompensa: [{}], impactos: [{}]};
            tabs.show(vm, {tabInfoBasic:true});

        };

        vm.createCampanha = function () {

            const url = 'http://localhost:8001/campanha/';

            let campanha = {
                'titulo' : vm.campanha.titulo,
                'orcamento': vm.campanha.orcamento,
                'moeda': vm.campanha.moeda,
                'status': 'Em Analise',
                'localidade': vm.campanha.localidade,
                'dataInicial':new Date(vm.campanha.dataInicial),
                'dataFinal': new Date(vm.campanha.dataFinal),
            };



            $http.post(url, campanha).then(function (response) {
                vm.campanha = response.data;
                vm.listas = { equipe: [{}], recompensa: [{}], impactos: [{}]};
                console.log(response.data);
            }).catch(function (response) {
                console.log(response.data);
            });

        };

        vm.createHistoriaProjeto = function (campanha) {
            const url = 'http://localhost:8001/biografiacampanha/';
            let biografiacampanha = {
                'descricao_projeto' : vm.biografiacampanha.descricao_projeto,
                'pessoas_envolvida': vm.biografiacampanha.pessoas_envolvida,
                'campanhaId': campanha.id
            };



            $http.post(url, biografiacampanha).then(function (response) {
                vm.biografiacampanha = response.data;
                console.log(vm.biografiacampanha);
            }).catch(function (response) {
                console.log(response.data);
            });

            vm.listas.impactos.forEach(function (resultado) {
                let urlImpacto = 'http://localhost:8001/impactoQuantitativo/'
                let impacto = {
                    'descricao' : resultado.descricao,
                    'quantidade': resultado.quantidade,
                    'campanhaId': campanha.id
                };

                $http.post(urlImpacto, impacto).then(function (response) {
                    console.log(response.data);
                }).catch(function (response) {
                    console.log(response.data);
                });

            });
        };

        vm.createRecompensa = function (campanha) {
            const url = 'http://localhost:8001/recompensa/';
            vm.listas.recompensa.forEach(function (resultado) {
                let recompensa = {
                    'recompensa' : vm.temRecompensa,
                    'valor': resultado.valor,
                    'descricao': resultado.descricao,
                    'entrega': resultado.entrega,
                    'detalhes': resultado.detalhes,
                    'limitado': resultado.limitado,
                    'limite': resultado.limite,
                    'campanhaId': campanha.id
                };
                console.log(recompensa);

                $http.post(url, recompensa).then(function (response) {
                    console.log(response.data);
                }).catch(function (response) {
                    console.log(response.data);
                });
            });


        };

        vm.createEquipe = function(campanha){
            const url = 'http://localhost:8001/equipe/';
            vm.listas.equipe.forEach(function (resultado) {
                let equipe = {
                    'nome' : resultado.nome,
                    'mail': resultado.email,
                    'telefone': resultado.telefone,
                    'funcao': resultado.funcao,
                    'campanhaId': campanha.id
                };

                $http.post(url, equipe).then(function (response) {
                    vm.equipe = {};
                    console.log(response.data);
                }).catch(function (response) {
                    console.log(response.data);
                });

            });

        };

        vm.addRecompensa = function (index) {
            vm.listas.recompensa.splice(index + 1, 0, {});
        };
        vm.addEquipe = function (index) {
            vm.listas.equipe.splice(index + 1, 0, {});
        };
        vm.addImpacto = function (index) {
            vm.listas.impactos.splice(index + 1, 0, {});
        };

        vm.refresh();

    }
})();