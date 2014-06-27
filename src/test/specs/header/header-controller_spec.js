"use strict";

describe("header-controller", function() {
  beforeEach(module("d2-starter"));

  var scope, location, controller;

  beforeEach(inject(function( $location, $controller, $rootScope ) {
    scope = $rootScope.$new();
    location = $location;
    controller = $controller;
  }));

  it('$scope.isActive(path) should tell you if a path is active or not', function() {
    controller('HeaderCtrl', {
      $scope: scope,
      $location: location
    });

    location.path('/');
    expect(scope.isActive('/')).toBeTruthy();
    expect(scope.isActive('/form')).toBeFalsy();

    location.path('/form');
    expect(scope.isActive('/')).toBeFalsy();
    expect(scope.isActive('/form')).toBeTruthy();
  });
});
