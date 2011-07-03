var Mongodb = require('mongodb');
var DB = Mongodb.Db;
var Server = Mongodb.Server;
var BSON = Mongodb.BSONNative;

module.exports.connect = function (mongoConf) {
  var db = new DB(mongoConf.db, new Server(mongoConf.hostname, mongoConf.port, {auto_reconnect: true, native_parser: false}));

  db.open(function() {
    console.log('db opened');
  });
}

