'use strict';

/**
 * @ngdoc function
 * @name ngDemoApp.controller:BioCtrl
 * @description
 * # BioCtrl
 * Controller of the ngDemoApp
 */
angular.module('ngDemoApp')
  .controller('BioCtrl', function ($stateParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.color = $stateParams.color;
  });
