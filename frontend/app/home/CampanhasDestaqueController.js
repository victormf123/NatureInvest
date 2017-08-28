/**
 * Created by matheus on 26/07/17.
 */
(function () {
    angular.module('natureInvest').controller('campanhaDestaqueCrtl', [
        '$scope',
        '$http',
        campanhaDestaque,

    ]);

    function campanhaDestaque($scope, $http) {
        const vm = this;
        vm.campanhas = {}
        vm.categoriasCampanha = {}
        vm.campanhasOutrosDestaques = {}

        function ListarCategoriaCampanhas() {
            const url = 'http://localhost:8001/campanhaCategoria/';

            $http.get(url).then(function (response) {
                console.log(response.data);
                vm.categoriasCampanha = response.data;
            }).catch(function (err) {
                console.log(err);
            });
        }
        function ListaCampanhas() {
            const url = 'http://localhost:8001/campanha/1';

            $http.get(url).then(function (response) {
                console.log(response.data);
                vm.campanhas = response.data;
                calculaDias(vm.campanhas.dataInicial, vm.campanhas.dataFinal)
            }).catch(function (err) {
                console.log(err);
            });
        }
        function ListarOutrasCampanhas() {
            const url = 'http://localhost:8001/campanha/';

            $http.get(url).then(function (response) {
                console.log(response.data);
                vm.campanhasOutrosDestaques = response.data;
            }).catch(function (err) {
                console.log(err);
            });
        }
        function calculaDias(date1, date2){
            //formato do brasil 'pt-br'
            moment.locale('pt-br');
            //setando data1
            var data1 = moment(date1,'DD/MM/YYYY');
            //setando data2
            var data2 = moment(date2,'DD/MM/YYYY');
            //tirando a diferenca da data2 - data1 em dias
            var diff  = data2.diff(data1, 'days');

            console.log(diff)
        }


        vm.refresh = function () {
            ListaCampanhas()
            ListarOutrasCampanhas()
            ListarCategoriaCampanhas()
        }

        vm.refresh()

    }
})();