const mongoose = require('mongoose')
const app = require('./app.js');
const config = require('./config/main.js');

const PORT = config.port || 5555;

mongoose.connect(config.database);

app.listen(PORT, () => {
	console.log(`listening on localhost:${PORT}`);
});


