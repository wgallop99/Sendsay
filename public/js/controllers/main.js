angular.module('ngDay2App')

  .controller('usersCtrl', function ($scope, $location, usersSvc) {

    $scope.createUser = function() {
    	$location.path('/new');
    };

    $scope.newUser = function(user) {
    	PostsSvc.create({
        title: user.title,
        image: user.image,
        chat: []
      })
    	$location.path('/blog');
    };
    $scope.users = usersSvc.query();
  })

  ///single user
  .controller('usersCtrl', function($scope, $location, $routeParams, userSvc) {

  	$scope.user = userSvc.show({ id: $routeParams.id });
  	$scope.delete = function() {
  		userSvc.delete({ id: $routeParams.id });
  		$location.path('/blog');
  	};
  	$scope.edit = function() {
  		userSvc.edit($scope.user);
  		$location.path('/blog');
  	};

  });
