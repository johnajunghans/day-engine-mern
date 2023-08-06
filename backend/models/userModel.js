const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},

})

// static methods
userSchema.statics.signup = async function(email, password) {
    // check that both email and password were inputted
    if (!email || !password) {
        throw Error('All fields must be filled');
    }

    // check if email is valid
    if (!validator.isEmail(email)) {
        throw Error('Not a valid email')
    }

    // check if password is strong enough 
    if (!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough')
    }

    // check if email already exists
    const emailExists = await this.findOne({ email })
    if (emailExists) {
        throw Error('Email already in use')
    }

    // generate salt for password encryption
    const salt = await bcrypt.genSalt(10)
    // create hashed password with salt
    const hash = await bcrypt.hash(password, salt)
    // create user document
    const user = await this.create({ email, password: hash })
    
    return user;
}

userSchema.statics.login = async function(email, password) {
    // check that both email and password were inputted
    if (!email || !password) {
        throw Error('All fields must be filled');
    }

    // try and find user
    const user = await this.findOne({ email })
    if (!userSchema) {
        throw Error('No account with that email');
    }

    // check for correct password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error('Incorrect password');
    }

    return user;
}

// exports
module.exports = mongoose.model('User', userSchema);