
		angular.module("userModule")
  .controller("userCtrl", function ($rootScope, $route, $scope, $timeout, $location, $cookies, $routeParams, $interval, userSvc) {

		// main CRUD functions
    userSvc.getUsers().then(function (users) {
      $scope.users = users.data;
    });

    // userSvc.singleUser($routeParams.id).then(function (response) {
    //  $scope.singleUser = response.data;
    // });

      $scope.addUsername = function(name) {
      userSvc.addUsername(name);
      $location.path("/chat1")
    };

    $scope.username = $cookies.username;
    userSvc.getMsgs().success(function(msgs) {
        $scope.msgs = msgs;

    });
    // $scope.createUser = function (user) {
    //  var kill = false;
    //  for (var i = 0; i< $scope.users.length; i++) {
    //    if($scope.users[i].title === user.title) {
    //      $rootScope.$broadcast("user:match");
    //      console.log("you're already in our system");
    //      return kill = true;
    //    }
    //  } if (kill === false) {
    //    userSvc.createUser({
    //    user: $scope.user,
    //    image: user.image,
    //  }).then(function () {
    //      $location.path("/chat1");
    //  })
    // }
    // };

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
      content: msg.content,
      username:$scope.username,

      }).then(function () {
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



 $scope.getMsgs = $interval(function()
    {
      userSvc.getMsgs().success(function(msgs){
      $scope.msgs = msgs.reverse();
      });
    }, 500);

		});
