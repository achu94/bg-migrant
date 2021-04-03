const Post = require('../models/Post');

const getById = async (postId) => {
    if(!postId) throw {message: 'No Post ID.', status: 404};

    return Post
        .findOne({_id: postId})
            .then(post => {
                return post;
            });
}

const getAll = async () => {
    return Post
            .find({})
                .then(posts => {
                    console.log(posts);
                    return posts;
                });


        // .findOne({ title: 'test3' })
        //     .populate('User')
        //     .then((data) => {
        //         return data;
        //     })

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