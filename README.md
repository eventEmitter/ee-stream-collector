# ee-stream-collector

[![Greenkeeper badge](https://badges.greenkeeper.io/eventEmitter/ee-stream-collector.svg)](https://greenkeeper.io/)

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