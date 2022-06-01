require("./DB-mongodb/index.js");
const userRoute = require("./Routes/users.js")
const postRoute = require("./Routes/post.js")
const PORT = 3000;

const express = require('express');
const app = express();

const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));


/// path user
app.use('/api/user', userRoute);

/// path post
app.use('/api/post', postRoute);
















app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });