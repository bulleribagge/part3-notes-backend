require('dotenv').config();

let PORT = 3001;
let MONGODB_URI = 'mongodb://localhost:27017/notes';

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI;
}

module.exports = {
  MONGODB_URI,
  PORT
};