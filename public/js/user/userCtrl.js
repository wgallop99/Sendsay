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
      userSvc.addUser({
      title: user.title,
      image: user.image,
      }).then(function () {
        $location.path("/chat1");
      });

    };

    $scope.deleteUser = function (user) {
      userSvc.deleteUser(user).then(function () {
        $location.path("/");
      });
    };

    $scope.editUser = function (user) {
      userSvc.editUser(user).then(function () {
        $location.path("/");
      });
    };

    ///////////////

    userSvc.getMsgs().then(function (msgs) {
      console.log(msgs)
      $scope.msgs = msgs.data.reverse();
    });

    userSvc.singleMsg($routeParams.id).then(function (response) {
      $scope.singleMsg = response.data;
    });


    $scope.addMsg = function (msg) {
      userSvc.addMsg({
      posteddate: Date.now(),
      author: msg.author,
      content: msg.content,

      }).then(function () {
        $location.path("/chat1");
        document.getElementById("chatInput").value = "";
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
      $scope.msgs = msgs.data.reverse();

    });
  });




}); ///end
