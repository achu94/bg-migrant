require('dotenv').config();

const config = {
    PORT: process.env.PORT,
    DB_URI : process.env.MONGODB_URI,
    SALT_ROUNT : 10,
    SECRET : process.env.SECRET,
    COOKIE_NAME : 'TOKEN'
};

module.exports = config;
