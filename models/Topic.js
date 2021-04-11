const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');
const Post = require('./Post');

const topicScheme = new mongoose.Schema({
    body : {
        type: String,
        required : true,
        trim: true,
    },
    post : {
        type: Schema.Types.ObjectId,
        ref: 'Post',
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

topicScheme.post('save', function (topic, next) {
    User.update(
        { "_id" : this.author},
        {$push: {
            "topics" : topic._id
        }}
    ).then( () => {
        Post.update(
            { "_id" : this.post},
            {$push: {
                "post_topics" : topic._id
            }}
        ).then( () => next());    
    })

    next();    
});

module.exports = mongoose.model('Topic', topicScheme);