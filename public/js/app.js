'use strict';

angular.module('ngDay2App',
  [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    // 'userModule',
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'userCtrl'
      })
      .when('/chat1', {
        templateUrl: 'views/chat.html',
        controller: 'userCtrl'
      })
      .when('/chat2', {
        templateUrl: 'views/chat.html',
        controller: 'userCtrl'
      })
      .otherwise({
        redirectTo: '/'
    });
  });
