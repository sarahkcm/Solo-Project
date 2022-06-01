const User = require("../DB-mongodb/User.js");
const jwt = require("jsonwebtoken");

//// function signIn, creation account of the user

const signIn = async function (req,res){
    const {email, pseudo, password} = req.body
    
    try {
        let user = await User.create({email, pseudo, password});
        res.status(201).json({user: user._id});
    }
    catch(error){
        res.status(200).send({error})
    }
    
}

// const limitDate = 3 * 24 * 60 * 60 * 1000 
// const createToken = function(id){
//     return jwt.sign({id}, `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImExIn0
//     .eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTMxNzYyMDY1fQ
//     .z4qfO0leZK2mYp_w-jFNidTx-Ri0PRMHLsOAG1Den7ZR4QntIJhU17U0afgoe5VzISXS6jW61ga3XEk39ey1G7a_-ARIVZLYN11fHDhsPuzN7PPkbT
//     5uWpHEUhVWRR8dxHqXmNiDaWjNhTnzHCBpfrRHj5pR_dzubbuE_uPuvDk`,{
//         expiredIn: limitDate
//     })
// }

// const UserlogIn = async function (req,res){
//     const {email,password} = req.body
//     try {
//         let user = await User.login(email, password)
//         let token = createToken(user._id)
//         console.log(token);
//         res.cookie('jwt', token, {httpOnly: true, limitDate})
//         res.status(200).json({user: user._id})
//     }
//     catch(error){
//         res.status(200).json(error)
//     }

// }

// const logOut = async function(req,res){

// }


module.exports = {signIn}