
angular.module("userModule")
    .factory("userSvc", function ($rootScope, $log, $http, $cookies) {

        var users = '/api/collections/demotiy';
        var chatroom1 = '/api/collections/chatroom';

        var getUsers = function(){
          return $http.get(users);
        };

        var createUser = function(user) {
          return $http.post(users, user).then(function (response) {
                $rootScope.$broadcast("user:added");
                $log.info("user:added");
            })
        };

        ///////cookie username
        var addUsername = function(name) {
            $cookies.username = name;
        };

        var deleteUser = function(user) {
          return $http.delete(users + "/" + user._id, user).then(function (response) {
                console.log(response);
                $rootScope.$broadcast("user:deleted");
                $log.info("user:deleted");
            })
        };


        ///////////////chatroom1

        var getMsgs = function(){
          return $http.get(chatroom1);
        };

        var createMsg = function(msg) {
          return $http.post(chatroom1, msg).then(function (response) {
                $rootScope.$broadcast("message:added");
                $log.info("message:added");
            })
        };


        return {
          addUsername:addUsername,
          getUsers: getUsers,
          addUser: createUser,
          deleteUser: deleteUser,
          ////
          getMsgs: getMsgs,
          addMsg: createMsg,
        };
    });
