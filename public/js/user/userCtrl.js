angular.module("userModule")
  .controller("userCtrl", function ($rootScope, $route, $scope, $timeout, $location, $cookies, $routeParams, userSvc) {

// main CRUD functions
    userSvc.getUsers().then(function (users) {
      $scope.users = users.data;
    });

    $scope.addUser = function (user) {
      var kill = false;
      for (var i = 0; i< $scope.users.length; i++) {
        if($scope.users[i].title === user.title) {
          $rootScope.$broadcast("user:match");
          console.log("There is already a user with that name.");
          return kill = true;
        }
      } if (kill === false) {
        userSvc.addUser({
        title: user.title,
        image: user.image,
      }).then(function () {
          $location.path("/chat1");
      })
    }
    };

    //////adds cookie username
    $scope.addUsername = function(name) {
      userSvc.addUsername(name);

    };

    $scope.username = $cookies.username;
    userSvc.getMsgs().success(function(msgs) {

    $scope.msgs = msgs;

    });

    $scope.deleteUser = function (user) {
      userSvc.deleteUser(user);
    };

    ///////////////

    userSvc.getMsgs().then(function (msgs) {
      console.log(msgs)
      $scope.msgs = msgs.data.reverse();
    });

    $scope.addMsg = function (msg) {
      userSvc.addMsg({
      posteddate: Date.now(),
      username: $scope.username,
      content: msg.content,

      }).then(function () {
        $location.path("/chat1");
        document.getElementById("chatInput").value = "";
      });

    };


    /////////////////////////////////////listeners


    $rootScope.$on("user:deleted", function () {
      userSvc.getUsers().then(function (users) {
        $scope.users = users.data;
      });
  });

    $rootScope.$on("user:updated", function () {
      userSvc.getUsers().then(function (users) {
        $scope.users = users.data;
      });
  });

      $rootScope.$on("message:added", function () {
        userSvc.getMsgs().then(function (msgs) {
          $scope.msgs = msgs.data.reverse();

    });
  });
});
