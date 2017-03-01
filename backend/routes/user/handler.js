/**
 * Created by bruno on 06/18/16.
 */



exports.registerAdmin = function (request, response){
};

exports.createNewUser = createNewUser;

function createNewUser(request, response, role){
   /* var data =  request.payload;

    data.role = role;
    data.pass = Crypt.createHash(data.pass);

    var responseData = {error: false, data: {} };

    var user = UserDB.getModel();

    user.create(data).then(function (){
        response(responseData);

    }).catch(function (err){
        console.log(err);
        responseData.error = true;

        if(err.errors[0].type === 'unique violation'){
            responseData.data.type = 'unique';
            responseData.data.value = err.errors[0].value;
        }

        response(responseData);
    });*/
};

exports.updateUser = function (request, response){/*
    var data =  request.payload;
    var id = request.params.id;

    var user = UserDB.getModel();

    var responseData = {error: false, data: {} };

    if (data.pass == undefined){
        delete data.pass;
    }else{
        data.pass = Crypt.createHash(data.pass);
    }

    var promise = user.update(data, {where: {id: id}});

    promise.then(function (){
        response(responseData);
    });

    promise.catch(function () {
        responseData.error = true;
        responseData.data.type = 'query';

        response(responseData);
    });
*/
};

exports.loginUser = function (request, response) {/*
    var user = UserDB.getModel();
    var payload = request.payload;

    var responseData = {error: false, data: {} };

    //Doing the query
    user.findOne({
        where       : {
            mail    : payload.mail
        }
    }).then(function (data) {
        var user = data.dataValues;
        
        var pass = Crypt.createHash(payload.pass);

        if(pass === user.pass){
            delete user.pass;

            var promise = authUser(request, user);

            promise.then(function(){
                response(responseData);
            });

            promise.catch(function (){
                rresponseData.error = true;
                responseData.data.type = 'password';
                responseData.data.value = 'auth error';

                response(responseData);
            });
        }else{
            responseData.error = true;
            responseData.data.type = 'password';
            responseData.data.value = 'login error';

            response(responseData);
        }
    }).catch(function (){
        responseData.error = true;
        responseData.data.type = 'password';
        responseData.data.value = 'db error';

        response(responseData);
    });*/
};

exports.logout = function (request, response) {
    console.log('#TODO LOGOUT');
    response('#TODO LOGOUT');
};


function authUser(request, user){/*
    return new Promise(function (fulfill, reject) {
        request.server.app.cache.set(String(user.id), {account: user}, 0, (err) => {

            if (err) {
                reject(err);
            }

            request.cookieAuth.set({sid: String(user.id)});

            fulfill();
        });
    });*/
}
