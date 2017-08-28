/**
 * Created by matheus on 04/03/17.
 */
(function () {
        angular.module('natureInvest').controller('CampanhaCrtl', [
        '$cookies',
        '$scope',
        '$http',
        'tabs',
        campanhaController,

    ]);

    function campanhaController($cookies, $scope, $http, tabs) {
        const vm = this;



        vm.refresh = function () {
            instanciarCategorias()
            vm.categoria = ''
            vm.listas = { equipe: [{}], recompensa: [{}], impactos: [{}]};
            tabs.show(vm, {tabInfoBasic:true});

        };

        function instanciarCategorias() {
            const url = 'http://localhost:8001/campanhaCategoria/';

            $http.get(url).then(function (response) {
                $scope.categorias = response.data
            }).catch(function (response) {
                console.log(response.data)
            })
        }

        vm.createCampanha = function () {
            let id = $cookies.get('userId');
            if(id != undefined){
                let formData = new FormData();
                let arquivo = document.getElementById("arquivoInput").files[0];
                formData.append("file", arquivo);
                let xhr = new XMLHttpRequest();
                xhr.onload = function(e) {
                    //console.log('/NIexpress'+ xhr.response.slice(1))
                    let campanha = {
                        'titulo' : vm.campanha.titulo,
                        'orcamento': vm.campanha.orcamento,
                        'moeda': vm.campanha.moeda,
                        'status': 'Em Analise',
                        'imagem': 'http://localhost:8003/'+ xhr.response,
                        'campanhaCategoriumId': vm.categoria.id,
                        'usuarioId': id,
                        'localidade': vm.campanha.localidade,
                        'dataInicial':new Date(vm.campanha.dataInicial),
                        'dataFinal': new Date(vm.campanha.dataFinal),
                    };
                    console.log(campanha)
                    const url = 'http://localhost:8001/campanha/';

                    $http.post(url, campanha).then(function (response) {
                        vm.campanha = response.data;
                        vm.listas = { equipe: [{}], recompensa: [{}], impactos: [{}]};
                        console.log('entrou aqui')
                        console.log(response.data);
                    }).catch(function (response) {
                        console.log(response.data);
                        console.log('entou catch')
                    });

                };

                xhr.open("POST", "http://localhost:8003/api/upload");
                xhr.send(formData);


            }

        };

        vm.createHistoriaProjeto = function (campanha) {
            const url = 'http://localhost:8001/biografiacampanha/';
            let biografiacampanha = {
                'link_youtube': vm.biografiacampanha.link_youtube,
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
            console.log(campanha)
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