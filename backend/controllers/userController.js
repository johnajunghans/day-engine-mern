const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// create json web token function
const createToken = (_id) => {
   return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login user
const loginUser = async (req, res) => {
    // destructure request body
    const { email, password } = req.body;

    // try to log user in
    try {
        // create user document
        const user = await User.login(email, password);

        // create jwt
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// signup user
const signupUser = async (req, res) => {
    // destructure request body
    const { email, password } = req.body;
    // try to sign user up 
    try {
        // create user document
        const user = await User.signup(email, password);

        // create jwt
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// exports
module.exports = {
    loginUser,
    signupUser
}