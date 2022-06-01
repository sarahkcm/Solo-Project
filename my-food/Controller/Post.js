const User = require("../DB-mongodb/User.js");
const Post = require("../DB-mongodb/Post.js");
const IdObj = require ("mongoose").Types.ObjectId



//// function get Data only one post

const getPost = function (req,res) {
    let post = Post.find((err,result)=>
    err ? console.log('Error while getting data: ',err) : res.send(result)
    )
}

//// function add to Data one post

const addOnePost = async function (req,res) {
    let newAdd = new Post({
        ID_post: req.body.ID_post,
        Title: req.body.Title,
        description: req.body.description,
        likes: []

    })
    try{
        const post = await newAdd.save()
        return res.status(201).send(newAdd)
    }
    catch(err){
        return res.status(400).send(err)
    }
}

//// function update Data only one post description and title

const updateOnePost = function (req,res) {
    let id = req.params.id
    if(!IdObj.isValid(id)) {
    res.status(400).send(id,' :ID Not found')
    }
    try{
   let upOneP = Post.findByIdAndUpdate(id,
        {$set:{description: req.body.description},$set:{Title: req.body.Title}},
        {new: true, upsert: true}
        ).exec((err,result)=>{
            err ? res.status(500).send(err) : res.send(result)
        })
    } catch(error){
        return res.status(500).json(error)
    }
}


///// function delete Data only one by id

const deleteOnePost = function (req,res) {
    let id = req.params.id
    if(!IdObj.isValid(id)) {
    res.status(400).send(id,' :ID Post Not found')
    }
        let delOneP = Post.findByIdAndRemove(id,(err,result)=>{
            err ? console.log("Error : ", err) : res.send(result)
        })
    
}

////function incriment post likes and user likes {work on it}

const postLike = async function (req,res) {
    let id = req.params.id
    if(!IdObj.isValid(id)) {
    res.status(400).send(id,' :ID Post Not found')
    }
    try{
        let uLike = await Post.findByIdAndUpdate({id},
            {$addToSet:{likes: req.body.id}},
            {new: true}
            ).exec((err,result)=>{
                err ? res.status(400).send(err) : res.send(result)
            })
        let pLike = await Post.findByIdAndUpdate(req.body.id,
            {$pull:{likes: id}},
            {new: true}
            )

    } catch(err){
        return res.status(400).send(err)
    }
}

///// function decriment post likes and user likes {work on it}

const postUnlike = async function (req,res) {
    let id = req.params.id
    if(!IdObj.isValid(id)) {
    res.status(400).send(id,' :ID Post Not found')
    }
    try{
        let uLike = await Post.findByIdAndUpdate({id},
            {$pull:{likes: req.body.id}},
            {new: true}
            ).exec((err,result)=>{
                err ? res.status(400).send(err) : res.send(result)
            })
        let pLike = await Post.findByIdAndUpdate(req.body.id,
            {$pull:{likes: id}},
            {new: true}
            )

    } catch(err){
        return res.status(400).send(err)
    }
}


module.exports = {
    getPost,
    addOnePost,
    updateOnePost,
    deleteOnePost,
    postLike,
    postUnlike}
