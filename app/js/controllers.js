'use strict';

/* Controllers */

angular.module('poNG.controllers', [])
  .controller('poNG', ['$scope', 'Players', function($scope, Players) {
    $scope.players = Players;
    $scope.dropped = function(dragEl, dropEl) {
      var drop = angular.element(dropEl),
          drag = angular.element(dragEl).clone();

      drop.append(drag);
      dragEl.remove();
    };

  }]);
