(function () {
  'use strict';

  angular
    .module('app.genre')
    .controller('GenreModalController', GenreModalController);

  GenreModalController.$inject = ['GenreService', '$uibModalInstance'];

  function GenreModalController (GenreService, $uibModalInstance) {
    var vm = this;

    vm.save = save;

    activate();

    function activate () {

    }
    /**
     * Enregistre le genre
     * @return {[type]} [description]
     */
    function save(data)
    {
      var genre = new GenreService();
      console.log('save', genre);
      genre.name = data.name;

      genre.$save().then(function() {
        $uibModalInstance.close();
      });
      //$uibModalInstance.close();
    }
  }

})();
