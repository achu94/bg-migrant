const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const {PORT} = require('./config/config');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded({
    extended: true
}));

require('./config/mongoose');

app.use(cors());
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
//TODO below..

// const errorHandler = require('./middleware/errorHandler');

// require('./config/mongoose');

// app.use(errorHandler);

