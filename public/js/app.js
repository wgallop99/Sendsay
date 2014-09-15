'use strict';

angular.module('userModule',
  [
    'ngCookies',
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
        templateUrl: 'views/chat1.html',
        controller: 'userCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'userCtrl'
      })
      .otherwise({
        redirectTo: '/'
    });
  });
