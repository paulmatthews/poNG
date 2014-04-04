'use strict';

/* Controllers */

angular.module('poNG.controllers', [])
  .controller('poNG', ['$scope', 'Players', function($scope, Players) {
    $scope.players = Players;

  }])
