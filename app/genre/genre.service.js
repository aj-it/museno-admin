(function() {
  'use strict';

  angular
    .module('app.genre')
    .factory('GenreService', GenreService);

  GenreService.$inject = ['$resource'];

  function GenreService($resource) {
    var service = $resource('http://museno.local/admin/genre/list', {}, {
      query: query,
      save: {
        url: 'http://museno.local/admin/genre/add',
        method: 'POST',
      }
    });

    return service;

    function query() {
      var config = {
        method: 'GET',
        params: {
          id: 'genre'
        }
      };
      return config;
    }
  }

  function save(genre) {
    var config = {
      url: 'http://museno.local/admin/genre/add',
      method: 'POST',
      params: {
        name: genre.name
      }
    };
    return config;
  }

})();
