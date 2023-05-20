
const jwt = require('jsonwebtoken')

exports.auth = async (req,res,next)=>{
    try {
        const token = req.header('auth_token')
        if(!token) return res.status(400).json({errors:true,message:"token must be required"})

        const validtoken = await jwt.verify(token,process.env.SEC)
        if(!validtoken) return res.status(400).json({errors:true,message:"token is invalid"})

        next()
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}