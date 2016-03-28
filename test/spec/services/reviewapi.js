'use strict';

describe('Service: reviewApi', function () {

  // load the service's module
  beforeEach(module('ngDemoApp'));

  // instantiate service
  var reviewApi;
  beforeEach(inject(function (_reviewApi_) {
    reviewApi = _reviewApi_;
  }));

  it('should do something', function () {
    expect(!!reviewApi).toBe(true);
  });

});
