"use strict";

describe('bar-controller should control the scope of bar', function() {
  beforeEach(module('d2-starter'));

  var scope, controller;

  beforeEach(inject(function( $controller, $rootScope ) {
    scope = $rootScope.$new();
    controller = $controller;
  }));

  it('should set $scope.bar with data from foobar-service', inject(function( foobar ) {
    controller('BarCtrl', {
      $scope: scope,
      foobar: foobar
    });

    expect(scope.bar).toBe(foobar.bar);
  }));
});
