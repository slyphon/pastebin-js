require("coffee-script");
require.paths.unshift('./node_modules');

/**
 * dependencies
*/

var express = require('express');

var app = module.exports = express.createServer();
var _ = require('underscore');

/**
 * configuration
*/

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
  app.set('port', 3001);
  app.set("mongodb", {
      hosname: 'localhost',
      port: 27017,
      db: "pastebin_development"
  })
});


var db = require('./lib/mongodb').connect(app.set('mongodb'));

app.listen(app.set('port'));
console.log("Express server listening on port %d", app.address().port);

