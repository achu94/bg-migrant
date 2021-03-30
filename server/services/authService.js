const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

const register = (username, password, eMail) => {
    let user = new User({username, password, eMail});
    
    return user.save();
}

module.exports = {
    register,
}