
const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.getevent = async (req,res)=>{
    try {
        const data = await User.find()
        return res.json({errors:false,data:data})
    } catch (error) {
       return res.status(400).json({errors:true,message:error.message}) 
    }
}

exports.postevent = async (req,res)=>{
    try {
        const userExit = await User.findOne({email:req.params.email})
        if(userExit) return res.status(400).json({errors:true,message:"user already exist"})

        // encryption password
        const salt = await bcrypt.genSalt()
        req.body.password = await bcrypt.hash(req.body.password,salt)

        const data = await User.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message}) 
    }
}

exports.login = async (req,res)=>{
    try {
        const userExit = await User.findOne({email:req.body.email})
        if(!userExit) return res.status(400).json({errors:true,message:"email or password is inavalid"})

        const validpassword = await bcrypt.compare(req.body.password,userExit.password)
        if(!validpassword) return res. status(400).json({errors:true,message:"email or password is invalid"})

        const token = await jwt.sign({id:userExit._id},process.env.SEC)
        return res.json({errors:false,data:{token:token,user:userExit}})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message}) 
    }
}