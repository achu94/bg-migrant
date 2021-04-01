const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const errorHandler = require('./middleware/errorHandler');
const {PORT} = require('./config/config');
const routes = require('./routes');

const app = express();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(bodyParser.json());

app.use(express.urlencoded({
    extended: true
}));

require('./config/mongoose');

app.use(routes);
app.use(errorHandler);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
