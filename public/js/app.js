'use strict';

angular
  .module('ngDay2App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'usersCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog-list.html',
        controller: 'usersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
