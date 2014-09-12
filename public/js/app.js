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
      .when('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'usersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
