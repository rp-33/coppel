'use strict';

let mongoose = require('mongoose'),
      bcrypt = require('bcrypt-nodejs'),
      Schema = mongoose.Schema;


const userSchema = new Schema({
    email : {type : String, unique : true},
    name : {type : String},
    password : {type : String},
    avatar : {type : String,default : 'svg/avatar.svg'}
});

userSchema.pre('save',function (next){ 

    if (!this.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt) => {

       if (err) return next(err); 

       bcrypt.hash(this.password,salt,null,(hashError,hash)=>{

        if (hashError) return next(hashError);
        
        this.password = hash;

        next();
        
       });

    });
});

module.exports = mongoose.model('User',userSchema);
