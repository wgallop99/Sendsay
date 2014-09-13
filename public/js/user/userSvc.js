angular.module("userModule")
    .factory("userSvc", function ( $rootScope, $log, $http) {

        var users = '/api/collections/demotiy';
        var chatroom1 = '/api/collections/Chatroom1';
        var chatroom2 = '/api/collections/Chatroom2';

        var getUsers = function(){
          return $http.get(users);
        };

        var singleUser = function(id) {
           return $http.get(user + "/" + id);
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

        return {
          getUsers: getUsers,
          singleUser: singleUser,
          addUser: createUser,
          deleteUser: deleteUser,
          editUser: editUser
        };
    });
