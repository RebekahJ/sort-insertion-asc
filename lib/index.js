/**
*
*	SORT: insert
*
*
*	DESCRIPTION:
*		- Performs a insertion sort on an unsorted array of numeric values.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Rebekah Smith.
*
*
*	AUTHOR:
*		Rebekah Smith. rebekahjs17@gmail.com. 2014.
*
*/

'use strict';

// FUNCTIONS //

/**
* FUNCTION: insert( arr )
*	Sorts array elements into ascending order.
*
* @param {Array} arr - numeric array
*
* Modifies input array arr
*/
function insert( arr ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'insert()::invalid input argument. Must provide an array.' );
	}
	if ( arr.length < 2 ) {
		throw new Error( 'insert()::invalid input argument. Array must contain at least 2 elements.' );
	}

	var len = arr.length,

	return;

} // end FUNCTION insert()

// EXPORTS //

module.exports = insert;

