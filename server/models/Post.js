const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postScheme = new mongoose.Schema({
    title : {
        type: String,
        require : true,
        trim: true,
        index : true,
    },
    body : {
        type: String,
        required : true,
        trim: true,
    },
    tags : {
        type: String,
        trim: true,
        lowercase: true,
        index : true,
    },
    author : {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date, 
        default: Date.now,
    },
    likes: {
        type: Number,
        default: 0,
    },
    dislikes: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model('Post', postScheme);