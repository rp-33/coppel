'use strict';

let Blog = require('../models/SchemaBlog.js'),
    User = require('../models/SchemaUser.js');


module.exports = {

 

    savePost : async (req,res) =>{

        const newBlog =  new Blog({
          user : req.body.user,
          tag: req.body.tag,
          title : req.body.title,
          article : req.body.post
        }); 

        const blog = await newBlog.save();

        res.status(201).send({message : 'guardado con exito'})

    },
    allBlog: async (req,res) =>{

      const blog = await Blog.find({},{title:true,tag:true});

      res.status(200).send({blog});

    },
    findBlog : async (req,res) =>{
      const blog = await Blog.findOne({"_id": req.params.id})
      
      const userBlog = await User.populate([blog],{path:'user',select:["name","email"]});

      res.status(200).send({blog})
    },
    comment : async (req,res) =>{

      const blog = await Blog.updateOne({_id : req.params.id},{$push : { "comments" : {
                                                                    "name" : req.body.user.name,
                                                                    "avatar" : req.body.user.image,
                                                                    "text" : req.body.comment
                                                                }}
      })


      res.status(201).send({blog});

    }

}
