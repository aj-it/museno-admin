(function() {
  'use strict';

  angular
    .module('app.genre')
    .controller('GenreController', GenreController);

  GenreController.$inject = ['GenreService', '$uibModal'];

  function GenreController(GenreService, $uibModal) {
    var vm = this;

    vm.title = 'Liste des Genres';
    vm.genres = [];

    vm.addGenre = addGenre;

    activate();

    function activate() {
      GenreService.query(function(response) {
        vm.genres = response.data;
      });
    }

    function addGenre()
    {
      console.log('add genre');
      $uibModal.open({
        templateUrl: 'genre/genre-modal.html',
        bindToController: true,
        controller: 'GenreModalController',
        controllerAs: 'vm'
      });
    }
  }
})();
