'use strict';
angular.module('ngDay2App')
  .factory('chatSvc', function($resource) {
    return $resource('api/collections/chatroom',
      {},
      {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST'},
      });
  })
  .factory('chatSvc', function($resource) {
    return $resource('api/collections/chatroom/:id',
      {
        id: '@_id'
      },
      {
        show: { method: 'GET'},
        edit: { method: 'PUT'},
        delete: { method: 'DELETE'}
      }
      )
});
