'use strict';

var _urls = require('./urls');

describe('getNextUrl', function () {
  it('gets the next url', function () {
    var linkHeader = '<https://next-courses.instructure.com/api/v1/courses.json?opaqueA>; rel="current",<https://next-courses.instructure.com/api/v1/courses.json?opaqueB>; rel="next",<https://next-courses.instructure.com/api/v1/courses.json?opaqueC>; rel=first",<https://next-courses.instructure.com/api/v1/courses.json?opaqueD>; rel="last"';
    var nextUrl = (0, _urls.getNextUrl)(linkHeader);
    expect(nextUrl).toContain('next-courses.instructure.com/api/v1/courses.json?opaqueB');
  });
});

describe('parseParams', function () {
  it('parses params from the given url into an object', function () {
    var nextUrl = 'https://atomicjolt.instructure.com/api/v1/courses/244/assignments?page=2&per_page=10';
    var params = (0, _urls.parseParams)(nextUrl);
    expect(params).toEqual({ page: '2', per_page: '10' });
  });
  it('has not params to parse', function () {
    var nextUrl = 'https://atomicjolt.instructure.com/api/v1/courses/244/assignments';
    var params = (0, _urls.parseParams)(nextUrl);
    expect(params).toEqual(undefined);
  });
});