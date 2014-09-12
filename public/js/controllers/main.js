angular.module('ngDay2App')

  .controller('usersCtrl', function ($scope, $location, usersSvc) {

    $scope.createUser = function() {
    	$location.path('/new');
    };

    $scope.newUser = function(user) {
    	usersSvc.create({
        title: user.title,
        image: user.image,
        chat: []
      })
    	$location.path('/chat');
    };
    $scope.users = usersSvc.query();
  })

  ///single user
  .controller('userCtrl', function($scope, $location, $routeParams, userSvc) {

  	$scope.user = userSvc.show({ id: $routeParams.id });
  	$scope.delete = function() {
  		userSvc.delete({ id: $routeParams.id });
  		$location.path('/chat');
  	};
  	$scope.edit = function() {
  		userSvc.edit($scope.user);
  		$location.path('/chat');
  	};

  });
