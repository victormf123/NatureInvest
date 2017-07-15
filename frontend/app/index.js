/**
 * Created by matheus on 02/03/17.
 */
angular.module('natureInvest', [
    'ui.bootstrap.datetimepicker',
    'ui.router',
    'angular-momentjs',
    'ngAnimate',
    'toastr',
    'ngCookies',
    'ui.bootstrap'
]);

/*
 //////////////////
 //// Login G+ ///
 ////////////////
 */

function onLoadFunction() {
    gapi.client.setApiKey('AIzaSyAHw3T2NzdY7sLTlV77hIx8PyApe5rB8So');
    gapi.client.load('plus', 'v1', function (){

    });
}


/*
  //////////////////////
 /// Login Facebook ///
//////////////////////
 */

window.fbAsyncInit = function() {
    FB.init({
        appId      : '1322266057856775',
        xfbml      : true,
        version    : 'v2.9',
        status     : true
    });
    FB.getLoginStatus(function (response) {
        if(response.status === 'connected'){
            //we are connected
        }else if(response.status === 'not_authorized'){
            // not auth
        }else{
            // we are not logged in to facebook
        }
    })
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

