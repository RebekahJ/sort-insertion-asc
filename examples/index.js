'use strict';

var insert = require( './../lib' );

/*var data = new Array( 5 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random()*100 );
}*/
//var data = [ 5, 9, 7, 3, 10, 8, 4, 2, 1, 6 ];
var data = [3];

console.log("Pre-sort:");

for ( var i = 0; i < data.length; i++ ) {
	console.log( data[i] );
}

insert( data );

console.log("Post-sort:");

for ( var i = 0; i < data.length; i++ ) {
	console.log( data[i] );
}

