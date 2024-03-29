const Post = require('../models/Post');

const getById = async (postId) => {
    if(!postId) throw {message: 'No Post ID.', status: 404};

    return Post
        .findOne({_id: postId})
        .populate({ 
            path: 'author',
            select: 'username' 
        })
        .populate({
            path:'post_topics',
            select: ['body', 'created_at'],
            populate : {
                path: 'author',
                select: 'username',
            },
            options: {
                sort: 
                    { created_at: 'desc' }
            },
        })
        .then(post => {
            return post;
        });
}

const getAll = async () => {
    return Post
            .find({}).sort({created_at: 'desc'}).populate({ path: 'author', select: 'username'}).populate( {path:'post_topics'})
                .then(posts => {
                    return posts;
                });
}

const create = async (title, body, tags, author) => {
    
    if(!title, !body, !tags, !author) throw {message: 'Something gone wrong.', status: 404};

    let post = new Post({title, body, tags, author});

    return post.save();
}

module.exports = {
    create,
    getAll,
    getById,
}