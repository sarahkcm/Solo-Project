const express = require("express");
const router = express.Router();

/// get one pot
router.get('/', require('../Controller/Post.js').getPost);

/// add one post
router.post('/', require('../Controller/Post.js').addOnePost);

/// update one post
router.put('/:id', require('../Controller/Post.js').updateOnePost);

/// delete one post
router.delete('/:id', require('../Controller/Post.js').deleteOnePost);

/// like one post
router.patch('/postlike/:id', require('../Controller/Post.js').postLike);

/// unlike one post
router.patch('/postunlike/:id', require('../Controller/Post.js').postUnlike);


module.exports = router;
