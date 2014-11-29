sort-insertion-asc
===============

[![Build Status][travis-image]][travis-url] [![Coverage Status](https://coveralls.io/repos/RebekahJ/sort-insertion-asc/badge.png)](https://coveralls.io/r/RebekahJ/sort-insertion-asc)


### insert( arr )

Sorts an unsorted numeric array into ascending order using an [insertion](http://en.wikipedia.org/wiki/Insertion_sort) sort. 

## Examples

``` javascript
var data = [ 4, 9, 2, 6, 3, 1, 7, 10, 5, 8 ] ;

insert( data ); 
// modifies data into ascending order
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

## Notes

### Performance

For an unsorted array of size n, the time to sort the array using insertion sort is:

| *n*	        | *Time (ms)*   |
| --------------| :------------:|
| 5             |               |
| 50            |               |
| 500           |               |
| 5000          |               |
| 50000         |               |

## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```

---
## Copyright

Copyright &copy; 2014. Rebekah Smith.


[travis-image]: http://img.shields.io/travis/RebekahJ/sort-insertion-asc/master.svg
[travis-url]: https://travis-ci.org/RebekahJ/sort-insertion-asc

[coveralls-image]: https://img.shields.io/coveralls/RebekahJ/sort-insertion-asc/master.svg
[coveralls-url]: https://coveralls.io/r/RebekahJ/sort-insertion-asc?branch=master
