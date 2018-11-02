'use strict';

let User = require('../models/SchemaUser.js'),
  bcrypt = require('bcrypt-nodejs');


module.exports = {

    login : async (req,res) =>{

        const person = await User.findOne({email : req.body.email});

        if(!person) return res.status(401).send({message : 'Correo invalido'});
       
        if(!bcrypt.compareSync(req.body.password,person.password)) return res.status(401).send({message : 'Clave invalida'});
        
        res.status(200).send({
            id : person._id,
            name : person.name,
            email : person.email,
            avatar : person.avatar,
        });

    },
    signup : async (req,res) =>{

        const newUser =  new User(req.body); 
        const person = await newUser.save();

        res.status(201).send({
            id : person._id,
            name : person.name,
            email : person.email,
            avatar : person.avatar,
        })

    }


}
