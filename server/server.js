const express = require('express');

const {PORT} = require('./config/config');
const routes = require('./routes');

const app = express();

// require('./config/express');

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
//TODO below..

// const errorHandler = require('./middleware/errorHandler');

// require('./config/mongoose');

// app.use(errorHandler);

