const Topic = require('../models/Topic');

const create = async (body, postId, author) => {
    
    if(!body, !postId, !author) throw {message: 'Something gone wrong.', status: 404};

    let topic = new Topic({body, post:postId, author});

    return topic.save();
}

module.exports = {
    create,
}