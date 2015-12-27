'use strict';

var expect = require('chai').expect;
var securityService = require('../src/index');

describe('#numFormatter', function () {
    it('should convert single digits', function () {
        var result = securityService(1);
        expect(result).to.equal('1');
    });

    it('should convert double digits', function () {
        var result = securityService(12);
        expect(result).to.equal('12');
    });

    it('should convert triple digits', function () {
        var result = securityService(123);
        expect(result).to.equal('123');
    });

    it('should convert 4 digits', function () {
        var result = securityService(1234);
        expect(result).to.equal('1,234');
    });

    it('should convert 5 digits', function () {
        var result = securityService(12345);
        expect(result).to.equal('12,345');
    });

    it('should convert 6 digits', function () {
        var result = securityService(123456);
        expect(result).to.equal('123,456');
    });

    it('should convert 7 digits', function () {
        var result = securityService(1234567);
        expect(result).to.equal('1,234,567');
    });

    it('should convert 8 digits', function () {
        var result = securityService(12345678);
        expect(result).to.equal('12,345,678');
    });
});

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
