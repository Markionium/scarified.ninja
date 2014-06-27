"use strict";

angular.module('d2-starter').controller('HeaderCtrl', function( $scope, $location ) {
  $scope.isActive = function( path ) {
    return path == $location.path();
  };
});
