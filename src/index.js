/**
 * Created by mhylle on 22-12-2015.
 */
'use strict';

/**
 * Logs the user in.
 * @param {credentials} expected to contain a userName and a password
 * @return {boolean}
 */
module.exports.login = function (credentials) {
    if (credentials) {
        if (!credentials.userName) {
            return false;
        }

        if (!credentials.password) {
            return false;
        }

        if (credentials.userName === 'MAH' && credentials.password === 'MAH') {
            return true;
        }
    }
    return false;
};
