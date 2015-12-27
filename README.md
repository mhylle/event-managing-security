event-managing security
=========

Security module for event-managing.com

## Installation

  `npm install @mhylle/event-managing-security`

## Usage

    var event-managing-security = require('@mhylle/event-managing-security');
    var credentials = {userName: 'aaa', password: 'aaa'};

    var formattedNum = event-managing-security.login(credentials);
  
  
  Output should be true if login was successful, false if not.


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.



[![Build Status](https://travis-ci.org/mhylle/schema2-security.svg)](https://travis-ci.org/mhylle/schema2-security)

[![Coverage Status](https://coveralls.io/repos/mhylle/schema2-security/badge.svg?branch=master&service=github)](https://coveralls.io/github/mhylle/schema2-security?branch=master)
