const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const {SECRET, SALT_ROUNDS} = require('../config/config');

const userScheme = new mongoose.Schema({
    username : {
        type: String,
        require : true,
        unique: true,
        trim: true,
        lowercase: true,
        index : true,
    },
    password : {
        type: String,
        required : true,
        trim: true
    },
    eMail : {
        type: String,
        trim: true,
        lowercase: true,
        index : true,
        unique : true,
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post' 
    }]
});

userScheme.pre('save', function (next) {
    bcrypt.genSalt(SALT_ROUNDS)
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hash => {
            this.password = hash;
            next();
        })
});

module.exports = mongoose.model('User', userScheme);