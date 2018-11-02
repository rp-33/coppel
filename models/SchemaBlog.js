'use strict';

let mongoose = require('mongoose'),
      Schema = mongoose.Schema,
        User = mongoose.model('User'),
      moment = require('moment');


const blogSchema = new Schema({
    user : { type: Schema.ObjectId, ref: "User" },
    title : {type : String},
    article : {type : String},
    tag : {type:Array},
    create_at : {type :Number,default : moment().unix()},
    comments : {
      type : Array,
      name : String,
      avatar : String,
      text : String,
      date : {type :Number,default : moment().unix()},

    }

});


module.exports = mongoose.model('Blog',blogSchema);
