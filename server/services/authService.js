const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

const login = async (username, password) => {
    let user = await User.findOne({username});
    if(!user) throw {message: 'No such user', status: 404};
    
    let areEqual = await bcrypt.compare(password, user.password);

    if(!areEqual) throw {message: 'Invalid Password', status: 404};

    let token = jwt.sign({_id: user.id, username: user.username}, SECRET);
    
    return token;
}

const register = (username, password, eMail) => {
    let user = new User({username, password, eMail});
    
    let user = await User.findOne({username});
    if(user) throw {message: 'username wird benutzt', status: 404};

    let email = await User.findOne({eMail});
    if(email) throw {message: 'email wird benutzt', status: 404};

    return user.save();
}

module.exports = {
    register,
    login,
}