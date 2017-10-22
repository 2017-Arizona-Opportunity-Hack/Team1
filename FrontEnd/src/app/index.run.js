(function() {
  'use strict';

  angular
    .module('ohax')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
