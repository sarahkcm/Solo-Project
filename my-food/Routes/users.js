// these are the user routes for sigin Up or logging in
const express = require("express");
const router = express.Router();
require('dotenv').config({path: './Config/.env'});



// getting users or one user

router.get('/', require('../Controller/User.js').getAllUsers)
router.get('/:id', require('../Controller/User.js').getOne)
router.put('/:id', require('../Controller/User.js').updateOne)
router.delete('/:id',require('../Controller/User.js').deleteOne)

// creating new user

router.post('/sign', require('../Controller/Auth.js').signIn)

// loggin and logout in as a user

// router.post('/login', require('../Controller/Auth.js').UserlogIn)
// router.get('/logout', require('../Controller/Auth.js').logOut)

module.exports = router;