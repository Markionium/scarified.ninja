"use strict";

describe('upper-filter should uppercase input', function() {
  beforeEach(module('d2-starter'));

  it('should return undefined on undefined input', inject(function( upperFilter ) {
    expect(upperFilter(undefined)).toBe(undefined);
  }));

  it('should return input uppercased', inject(function( upperFilter ) {
    expect(upperFilter('hello')).toBe('HELLO');
  }));
});
