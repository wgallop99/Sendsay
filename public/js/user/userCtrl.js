angular.module("userModule")
  .controller("userCtrl", function ($rootScope, $route, $scope, $timeout, $location, $cookies, $routeParams, $interval, userSvc) {

// main CRUD functions
$scope.getMsgs = $interval(function()
     {
           userSvc.getMsgs().success(function(msgs){
           $scope.msgs = msgs.reverse();

     });

           userSvc.getUsers().then(function (users) {
           $scope.users = users.data;

        });

     }, 500);


    $scope.addUser = function (user) {
       userSvc.addUser({
       username: user,
     }).then(function () {
         console.log("please be created.");
     })
    };


    $scope.deleteUser = function (user) {
      userSvc.deleteUser(user);
    };

    $scope.addUsername = function(name) {
    userSvc.addUsername(name);
    if (name === undefined) {
        console.log("Please enter a name");
    } else {
        $location.path("/chat1");
    }

  };

  $scope.username = $cookies.username;

    ///////////////Messages
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

    $rootScope.$on("user:added", function () {
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
