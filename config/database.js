const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL

mongoose.connect(MONGO_URL)
.then(() => console.log('Database connection succesful')).catch((err) => console.log(err))