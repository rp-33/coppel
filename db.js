global.config = require('./config');
let db = require('mongoose');

db.Promise = global.Promise;

db.connect(global.config.db.port,{useCreateIndex: true, useNewUrlParser: true})
.then(db => console.log('db is conected '+ global.config.db.port))
.catch(err => console.log(err));

module.exports = db;
