angular.module("userModule")
    .factory("userSvc", function ( $rootScope, $log, $http) {

        var users = '/api/collections/demotiy';
        var chatroom1 = '/api/collections/chatroom1';
        var chatroom2 = '/api/collections/chatroom2';

        var getUsers = function(){
          return $http.get(users);
        };

        var singleUser = function(id) {
           return $http.get(users + "/" + id);
        };


        var createUser = function(user) {
          return $http.post(users, user).then(function (response) {
                $rootScope.$broadcast("user:added");
                $log.info("user:added");
            })
        };


        var deleteUser = function(user) {
          return $http.delete(users + "/" + user._id, user).then(function (response) {
                console.log(response);
                $rootScope.$broadcast("user:deleted");
                $log.info("user:deleted");
            })
        };

        var editUser = function(user) {
          return $http.put(users + "/" + user._id, user).then(function (response) {
                $rootScope.$broadcast("user:updated");
                $log.info("user:updated");
            })
        };

        ///////////////chatroom1

        var getMsgs = function(){
          return $http.get(chatroom1);
        };

        var singleMsg = function(id) {
           return $http.get(chatroom1 + "/" + id);
        };

        var createMsg = function(msg) {
          return $http.post(chatroom1, msg).then(function (response) {
                $rootScope.$broadcast("message:added");
                $log.info("message:added");
            })
        };

        return {
          getUsers: getUsers,
          singleUser: singleUser,
          addUser: createUser,
          deleteUser: deleteUser,
          editUser: editUser,
          ////
          getMsgs: getMsgs,
          singleMsg: singleMsg,
          addMsg: createMsg,
        };
    });
