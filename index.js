const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./server/config/main');
const apiRoutes = require('./server/api/routes/index');

const PORT = config.PORT || 8888;
mongoose.connect(config.DATABASE);

const app = express();

app.use(logger('dev'));

// Handling POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRoutes);

app.use(cors());

if (process.env.NODE_ENV !== 'dev') {
    // Set static path to Angular app in dist
    app.use('/', express.static(path.join(__dirname, './dist')));

    // Let Angular handle routing
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/dist/index.html'));
    });
}

app.listen(PORT, () => {
	console.log(`listening on localhost:${PORT}`);
});