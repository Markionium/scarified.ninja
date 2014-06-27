"use strict";

!function() {
  var app = angular.module("d2-starter", ['ngRoute']);

  app.config(function( $routeProvider ) {
    $routeProvider.when('/bar', {
      templateUrl: 'components/bar/bar.html',
      controller: 'BarCtrl'
    }).when('/foo', {
      templateUrl: 'components/foo/foo.html',
      controller: 'FooCtrl'
    }).otherwise({
      redirectTo: '/bar'
    });
  });

  app.run(function() {
  });
}();
