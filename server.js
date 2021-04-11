const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

const errorHandler = require('./middleware/errorHandler');
const {PORT} = require('./config/config') || 5000;
const routes = require('./routes');

const app = express();
app.use(cors({credentials: true, origin: 'https://bg-migrant-server.herokuapp.com/'}));

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.urlencoded({
    extended: true
}));

require('./config/mongoose');

app.use(routes);
app.use(errorHandler);

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'));
}

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
