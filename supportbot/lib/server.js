const express = require('./lib/express-4.18.2/package/lib/express');
const path = require('path');
const axios = require('./lib/axios-1.4.0/package/dist/node/axios.cjs');
require('./lib/dotenv-16.3.1/package/lib/main').config();

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
