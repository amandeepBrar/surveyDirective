'use strict';

/**
 * @ngdoc service
 * @name ngDemoApp.reviewApi
 * @description
 * # reviewApi
 * Factory in the ngDemoApp.
 */
angular.module('ngDemoApp')
  .factory('reviewApi', function ($http) {
    return {
      getReviews: function() {
        return $http.get('scripts/services/data.json');
      }
    };
  });
