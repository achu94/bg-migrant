const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config/config');

const login = async (username, password) => {
    let user = await User.findOne({username});
    if(!user) throw {message: 'Потребителското име не съществува.', status: 404, input : 'username'};
    
    let areEqual = await bcrypt.compare(password, user.password);

    if(!areEqual) throw {message: 'Невалидна парола.', status: 404, input : 'password'};

    let token = jwt.sign({_id: user.id, username: user.username}, SECRET);
    
    return token;
}

const register = async (username, password, eMail) => {
    
    let user = await User.findOne({username});
    if(user) throw {message: 'Потребителското име е заето', status: 404, input : 'username'};
    
    let email = await User.findOne({eMail});
    if(email) throw {message: 'Email адресът е зает', status: 404, input : 'eMail'};
    
    user = new User({username, password, eMail});
    return user.save();
}

module.exports = {
    register,
    login,
}