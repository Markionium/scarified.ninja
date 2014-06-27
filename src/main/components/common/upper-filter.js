"use strict";

angular.module('d2-starter').filter('upper', function() {
  return function( input, scope ) {
    return input ? input.toUpperCase() : input;
  }
});
