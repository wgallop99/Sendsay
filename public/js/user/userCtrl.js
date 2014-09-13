angular.module("userModule")
  .controller("userCtrl", function ($rootScope, $scope, $location, $routeParams, userSvc) {

// main CRUD functions
    userSvc.getUsers().then(function (users) {
      console.log(users)
      $scope.users = users.data;
    });

    userSvc.singleUser($routeParams.id).then(function (response) {
      $scope.singleUser = response.data;
    });

    $scope.addUser = function (user) {
      var kill = false;
      for (var i = 0; i< $scope.users.length; i++) {
        if($scope.users[i].title === user.title) {
          console.log("match")
          console.log("you're already in our system");
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

    $scope.deleteUser = function (user) {
      userSvc.deleteUser(user);
    };

    $scope.editUser = function (user) {
      userSvc.editUser(user).then(function () {
        $location.path("/");
      });
    };

    ///////////////

    userSvc.getMsgs().then(function (msgs) {
      console.log(msgs)
      $scope.msgs = msgs.data;
    });

    userSvc.singleMsg($routeParams.id).then(function (response) {
      $scope.singleMsg = response.data;
    });


    $scope.addMsg = function (msg) {
      userSvc.addMsg({
      author: msg.author,
      content: msg.content,
      }).then(function () {
        $location.path("/chat1");
      });

    };


    //////////listeners

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
      $scope.msgs = msgs.data;
        setTimeout(function () {
            $scope.$apply(function () {
                $scope.msgs = msgs.data;
            })
        }, 1000);
    });
  });
});
