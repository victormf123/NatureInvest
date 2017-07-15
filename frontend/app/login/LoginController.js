/**
 * Created by matheus on 23/04/17.
 */
(function () {
    angular.module('natureInvest').controller('LoginCrtl', [
        '$cookies',
        '$http',
        '$location',
        'tabsLog',
        '$window',
        LoginController

    ]);

    function LoginController($cookies, $http, $location, tabsLog, $window) {
        const vm = this;

        vm.usuario = {};

        vm.login = {
            email: '',
            password: '',
        };
        vm.Logout = function () {
            $window.location.reload();
            $cookies.remove('userId');
        };

        vm.refresh = function () {
            let id = $cookies.get('userId');
            if(id === undefined){
                tabsLog.show(vm, {tabLogin:true});
            }else if (id != undefined){
                tabsLog.show(vm, {tabLogin:false, tabLogado: true});

                const url = 'http://localhost:8001/usuarios/'+id;
                console.log(url);
                $http.get(url).then(function (response) {
                    console.log(response);
                    vm.usuario = response.data;
                }).catch(function (err) {
                    console.log(err);
                })
            }
        };

        vm.refresh();

        vm.gmail = {
          username: "",
          email: "",
          g_image: ""
        };

        vm.Login = function () {

            const url = 'http://localhost:8001/usuarios/login';

            $http.post(url, vm.login).then(function (response) {
                $window.location.reload();
                $cookies.put('userId', response.data.userId);
                console.log('entrou');
                $location.path('/home');
                console.log(response);
            }).catch(function (err) {
                console.log('entrou aqui');
                console.log(err);
            })
        };


        vm.onGoogleLogin = function () {
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


        vm.facebook = {
            username: "",
            email: ""
        };


        vm.onFBLogin = function () {
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