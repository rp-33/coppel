'use strict';

const router = require('express-promise-router')();
    const {
       login,
       signup
    } = require('../controllers/CtrlUser.js');
    const {
        savePost,
        allBlog,
        findBlog,
        comment
     } = require('../controllers/CtrlBlog.js');

/* GET users listing. */

router.get('/allBlog',allBlog);

router.get('/findBlog/:id',findBlog);

/* POST users listing. */

router.post('/login',login);

router.post('/signup',signup);

router.post('/savePost',savePost)

/* PUT users listing. */

router.put('/comment/:id',comment)

/* DELETE users listing. */


module.exports = router;
