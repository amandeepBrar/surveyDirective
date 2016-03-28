'use strict';

describe('Directive: sample', function () {

  // load the directive's module
  beforeEach(module('ngDemoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sample></sample>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sample directive');
  }));
});
