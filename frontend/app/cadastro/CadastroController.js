/**
 * Created by matheus on 08/05/17.
 */
(function () {
    angular.module('natureInvest').controller('CadastroCrtl', [
        '$scope',
        '$http',
        CadastroController

    ]);

    function CadastroController($scope, $http, $cookies) {
        const vm = this;

        vm.login = {
            email: '',
            password: '',
        };


        $scope.cirarConta = function () {

            vm.createLog('', vm.login.email, vm.login.password, '', '', '');
            vm.login = {};
        };

        vm.refresh = function () {
        };

        vm.refresh();

        vm.verificationEmail = function (email) {

        };

        vm.createLog = function (nome, email, password, idfacebook, idgoogle, image) {

            const url = 'http://localhost:8001/usuarios/';

            let novoNsuario = {
                nome: nome,
                email: email,
                password: password,
                localidade: '',
                funcao: '',
                biografia: '',
                website: '',
                idfacebook: idfacebook,
                idgoogle: idgoogle,
                urlimage: image
            };

            console.log(novoNsuario);
            $http.post(url, novoNsuario).then(function (response) {
                novoNsuario = {};
                if(response.data.existe == true){
                    alert('O email '+ response.data.email + ' Já existe');
                }
                console.log(response);
            }).catch(function (response) {
                console.log(response.data);
            });
        };

        $scope.gmail = {
            username: "",
            email: "",
            g_image: ""
        };

        $scope.onGoogleLogin = function () {
            var params = {
                'clientid': '691321919599-eu1ql7m18t239v8tepmvg7tuund5rt1i.apps.googleusercontent.com',
                'cookiepolicy': 'single_host_origin',
                'callback': function (result) {
                    if(result['status']['signed_in']){
                        var request = gapi.client.plus.people.get({
                            'userId': 'me'
                        });
                        request.execute(function(resp){
                            $scope.$apply(function () {
                                let username = resp.displayName;
                                let email = resp.emails[0].value;
                                let id = resp.id;
                                let g_image = resp.image.url;
                                vm.createLog(username, email, '123456', '', id, g_image);
                                console.log(resp);
                            });
                        });
                    }
                },
                'approvalprompt': 'force',
                'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
            };
            gapi.auth.signIn(params);
        };


        $scope.facebook = {
            username: "",
            email: ""
        };


        $scope.onFBLogin = function () {
            FB.login(function (response) {
                if(response.authResponse){
                    FB.api('/me', 'GET', {fields:'email, first_name, name, id, picture'}, function (response) {
                        $scope.$apply(function () {
                            let username = response.name;
                            let email = response.email;
                            let id = response.id;
                            let fb_image = response.picture.data.url;


                            vm.createLog(username, email, '123456', id, '', fb_image);
                        });
                        //console.log(response)
                    });
                }else {
                    //error
                }
            },{
                scope: 'email, user_likes',
                return_scopes:true
            });
        };
    }
})();