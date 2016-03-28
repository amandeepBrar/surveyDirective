'use strict';

/**
 * @ngdoc overview
 * @name ngDemoApp
 * @description
 * # ngDemoApp
 *
 * Main module of the application.
 */
angular
  .module('ngDemoApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('main');
  //
  // Now set up the states
  $stateProvider
    	.state('main', {
    	  url: '/main',
    	  templateUrl: 'views/main.html',
    	  controller:'MainCtrl',
    	  controllerAs:'main'
    	})
    	.state('bio', {
    	  url: '/bio/:color',
    	  templateUrl: 'views/bio.html',
    	  controller:'BioCtrl',
    	  controllerAs:'bio'
    	})
      .state('survey', {
        url: '/survey',
        templateUrl: 'views/survey.html',
        controller:'SurveyCtrl',
        controllerAs:'survey'
      });
	});
