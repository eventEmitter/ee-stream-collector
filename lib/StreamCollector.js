


    var   Class         = require( "ee-class" )
        , stream        = require( "stream" )
        , type          = require( "ee-types" )
        , log           = require( "ee-log" );



    var StreamCollector = new Class( {
        inherits: stream.Writable

        , chunks: []


        , init: function(){
            this.on( "finish", this.handleEnd.bind( this ) );
            stream.Writable.call( this );
        }


        , handleEnd: function(){
            if ( this.chunks.length > 0 ){
                if ( type.buffer( this.chunks[ 0 ] ) ){
                    this.data = Buffer.concat( this.chunks );
                }
                else {
                    this.data = this.chunks.join( "" );
                }
            }
            else {
                this.data = null;
            }

            this.emit( "end", this.data );
        }


        , _write: function( chunk, encoding, callback ){
            this.chunks.push( chunk );
            if ( callback ) callback();
            return true;
        }
    } );

    module.exports = StreamCollector;