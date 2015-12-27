/**
 * Created by mhylle on 22-12-2015.
 */
'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = function (number, locale) {
    return number.toLocaleString(locale);
};

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
