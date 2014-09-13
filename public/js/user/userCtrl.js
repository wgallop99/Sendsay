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

  });
