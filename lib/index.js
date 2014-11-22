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

	var len = arr.length,
		curr = 0;

	for ( var i = 1; i < len; i++ ) {
		curr = arr[ i ];
		for ( var j = i - 1; j >= 0 && arr[ j ] > curr; j-- ) {
			arr[ j+1 ] = arr[ j ];
		}
		arr[ j+1 ] = curr;
	}

	return;

} // end FUNCTION insert()

// EXPORTS //

module.exports = insert;
