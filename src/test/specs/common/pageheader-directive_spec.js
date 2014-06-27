"use strict";

describe('pageheader-directive should add page-header', function() {
  beforeEach(module('d2-starter'));
  beforeEach(module('components/common/pageheader.html'));

  var element, scope;

  beforeEach(inject(function( $compile, $rootScope ) {
    scope = $rootScope.$new();

    element = angular.element('<page-header text="text" subtext="subtext" />');

    $compile(element)(scope);
    scope.$digest();
  }));

  it('div with page-header class should be added to DOM', function() {
    expect(element.hasClass('page-header')).toBe(true);
  });
});
