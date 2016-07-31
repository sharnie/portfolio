var newrelic = require( 'newrelic' );
var express  = require( 'express' );
var PORT     = 9000;
var app      = express();

app.use(express.static(__dirname));

app.listen(process.env.PORT || PORT, function() {
    console.log( "Listening on port: %s", PORT );
});