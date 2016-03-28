'use strict';

/**
 * @ngdoc function
 * @name ngDemoApp.controller:SurveyCtrl
 * @description
 * # SurveyCtrl
 * Controller of the ngDemoApp
 */
angular.module('ngDemoApp')
  .controller('SurveyCtrl', function (reviewApi) {
    var self = this;
    self.reviewQs = [];

    reviewApi.getReviews().success(function(resp){
    	self.reviewQs = resp;
    });

    
  });
