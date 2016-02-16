(function() {
  'use strict';

  angular
    .module('app.genre')
    .factory('GenreService', GenreService);

  GenreService.$inject = ['$resource'];

  function GenreService($resource) {
    var service = $resource('http://museno.local/admin/genre/list', {}, {
      query: {
        method: 'GET'
      },
      save: {
        url: 'http://museno.local/admin/genre/add',
        method: 'POST',
      }
    });

    return service;
  }

})();
