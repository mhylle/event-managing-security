'use strict';

var expect = require('chai').expect;
var securityService = require('../src/server/index');

describe('#securitySvc', function () {
    it('should fail if no username was specified', function () {
        var credentials = {password: 'MAH'};
        var result = securityService.login(credentials);
        expect(result).to.equal(false);
    });
    it('should fail if no password was specified', function () {
        var credentials = {userName: 'MAH'};
        var result = securityService.login(credentials);
        expect(result).to.equal(false);
    });
    it('should fail if no credentials was specified', function () {
        var result = securityService.login();
        expect(result).to.equal(false);
    });
    it('should login if username is MAH', function () {
        var credentials = {userName: 'MAH', password: 'MAH'};
        var result = securityService.login(credentials);
        expect(result).to.equal(true);
    });
    it('should fail login if username is not MAH', function () {
        var credentials = {userName: 'MHA', password: 'MHA'};
        var result = securityService.login(credentials);
        expect(result).to.equal(false);
    });
});
