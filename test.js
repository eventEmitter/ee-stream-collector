



	var StreamCollector = require( "./" )
		, fs 			= require( "fs" )
		, path 			= require( "path" );




	var collector = new StreamCollector();

	collector.on( "end", function( data ){
		console.log( data.length, data ); // Buffer .....
	} );


	var stream = fs.createReadStream( path.join( __dirname, "test/data" ) );

	stream.pipe( collector );




