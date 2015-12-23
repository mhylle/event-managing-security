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
