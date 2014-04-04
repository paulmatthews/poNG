'use strict';


// Declare app level module which depends on filters, and services
angular.module('poNG', [
  'ngRoute',
  'poNG.filters',
  'poNG.services',
  'poNG.directives',
  'poNG.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'poNG'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
