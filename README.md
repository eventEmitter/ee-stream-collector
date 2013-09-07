# ee-stream-collector

collects all data from a readable stream

## installation

	npm install ee-stream-collector

## usage

	var StreamCollector = require( "ee-stream-collector" );


	var collector = new StreamCollector();

	collector.on( "end", function( data ){
		console.log( data ); // Buffer .....
	} );

	stream.pipe( collector );