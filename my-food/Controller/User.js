const User = require("../DB-mongodb/User.js");
const IdObj = require ("mongoose").Types.ObjectId

/// function get Data of all the users
const getAllUsers = async function (req,res) {
    let users = await User.find().select('-password');
    res.status(200).json(users)
}

//// function get Data one user by id

const getOne = async function(req,res){
    console.log(req.params);
    let id = req.params.id
    if(!IdObj.isValid(id)) {
    res.status(400).send(id,' :ID Not found')
    }
    User.findById(id,(err,result)=>{
        err ? console.log(id," :ID Not found'") : res.send(result)
    }).select('-password')
}

///// update data one user only bio

const updateOne = async function(req,res){
    let id = req.params.id
    if(!IdObj.isValid(id)) {
    res.status(400).send(id,' :ID Not found')
    }
    try{
   let upOne = await User.findByIdAndUpdate(id,
        {$set:{bio: req.body.bio}},
        {new: true, upsert: true, setDefaultsOnInsert: true}
        ).exec((err,result)=>{
            err ? res.status(500).send(err) : res.send(result)
        })
    } catch(error){
        return res.status(500).json(error)
    }
}

//////function delete Data one user by id

const deleteOne = async function(req,res){
    let id = req.params.id
    if(!IdObj.isValid(id)) {
    res.status(400).send(id,' :ID Not found')
    }
    try{
        let delOne = await User.deleteOne(id).exec()
        res.status(200).json("Successfully delete.")
    }
    catch(error){
        return res.status(500).json(error)
    }
}




module.exports = {
    getAllUsers,
    getOne,
    updateOne,
    deleteOne}