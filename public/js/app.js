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
        controller: 'userCtrl'
      })
      .when('/chat1', {
        templateUrl: 'views/blog-list.html',
        controller: 'userCtrl'
      })
      .when('/chat2')
        templateUrl: 'views/blog-list.html'
        controller: 'userCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
