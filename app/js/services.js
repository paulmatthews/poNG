'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('poNG.services', []).
  value('version', '0.1')
  .factory('Players', function() {
    var Players = {};
    Players.list = [
      {
        name: 'Player1',
        score: '0',
        rank: '1'
      },
      {
        name: 'Player2',
        score: '0',
        rank: '2'
      },
      {
        name: 'Player3',
        score: '0',
        rank: '3'
      },
      {
        name: 'Player4',
        score: '0',
        rank: '4'
      }];
    return Players;
  });
