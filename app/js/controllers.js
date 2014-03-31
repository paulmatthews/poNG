'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('poNG', ['$scope', 'Players', function($scope, Players) {
    $scope.players = Players;

  }])
