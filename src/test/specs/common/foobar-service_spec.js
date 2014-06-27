"use strict";

describe('foobar-service should get correct data', function() {
  beforeEach(module('d2-starter'));

  it('bar and foo should be set correctly', inject(function( foobar ) {
    expect(foobar.bar).toBe('This is bar');
    expect(foobar.foo).toBe('This is foo');
  }));
});
