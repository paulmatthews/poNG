'use strict';

/* Controllers */

angular.module('poNG.controllers', [])
  .controller('poNG', ['$scope', 'Players', function($scope, Players) {
    $scope.players = Players;
    $scope.dropped = function(dragEl, dropEl) {
      var drop = angular.element(dropEl),
          drag = angular.element(dragEl);
      var name = drag.attr('data-name'),
          rank = drag.attr('data-rank'),
          newLi = document.createElement("li"),
          nameDiv = document.createElement("div"),
          rankDiv = document.createElement("div");
      nameDiv.innerHTML = name;
      rankDiv.innerHTML = rank;
      newLi.appendChild(nameDiv);
      newLi.appendChild(rankDiv);
      
      document.getElementsByTagName("ul")[1].appendChild(newLi);
        
    };

  }]);