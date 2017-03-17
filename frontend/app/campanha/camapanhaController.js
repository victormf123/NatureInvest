/**
 * Created by matheus on 04/03/17.
 */
(function () {
    angular.module('natureInvest').controller('CampanhaCrtl', [
        '$http',
        'tabs',
        campanhaController,

    ]);

    function campanhaController($http, tabs) {
        const vm = this;


        vm.refresh = function () {
            vm.campanha = { equipe: [{}] };
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
                'dataFinal': new Date(vm.campanha.dataFinal)
            };



            $http.post(url, campanha).then(function (response) {
                vm.campanha = response.data;
                console.log(response.data);
            }).catch(function (response) {
                console.log(response.data);
            });

        };

        vm.createHistoriaProjeto = function (idCampanha) {

            const url = 'http://localhost:8001/biografiacampanha/';

            vm.idCampanha = idCampanha;
            let biografiacampanha = {
                'descricao_projeto' : vm.biografiacampanha.descricao_projeto,
                'pessoas_envolvida': vm.biografiacampanha.pessoas_envolvida,
                'impacto_quantitativo': vm.biografiacampanha.impacto_quantitativo,
                'quantificador': vm.biografiacampanha.quantificador,
                'campanhaId': idCampanha
            };

            $http.post(url, biografiacampanha).then(function (response) {
                vm.biografiacampanha = response.data;
                vm.idCampanha = response.data.campanhaId;
                console.log(response.data);
            }).catch(function (response) {
                console.log(response.data);
            });
        };

        vm.createRecompensa = function (idCampanha) {
            vm.campanha = { equipe: [{}] };
            const url = 'http://localhost:8001/recompensa/';


            let recompensa = {
                'recompensa' : vm.recompensa.recompensa,
                'valor': vm.recompensa.valor,
                'descricao': vm.recompensa.descricao,
                'entrega': vm.recompensa.entrega,
                'detalhes': vm.recompensa.detalhes,
                'limitado': vm.recompensa.limitado,
                'limite': vm.recompensa.limite,
                'campanhaId': idCampanha
            };

            $http.post(url, recompensa).then(function (response) {
                vm.recompensa = response.data;
                vm.idCampanha = response.data.campanhaId;
                console.log(response.data);
            }).catch(function (response) {
                console.log(response.data);
            });
        };

        vm.createEquipe = function(idCampanha){
            const url = 'http://localhost:8001/equipe/';


            console.log(idCampanha);
            vm.campanha.equipe.forEach(function (resultado) {
                let equipe = {
                    'nome' : resultado.nome,
                    'mail': resultado.email,
                    'telefone': resultado.telefone,
                    'funcao': resultado.funcao,
                    'campanhaId': idCampanha
                };

                $http.post(url, equipe).then(function (response) {
                    vm.recompensa = {};
                    console.log(response.data);
                }).catch(function (response) {
                    console.log(response.data);
                });

            });

        };

        vm.addEquipe = function (index) {
            vm.campanha.equipe.splice(index + 1, 0, {});
        };

        vm.refresh();

    }
})();