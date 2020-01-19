'use strict';

require("marko/node-require"); // Allow Node.js to require and load `.marko` files

const express = require("express");
const serveStatic = require('serve-static');
require("marko/express"); // Marko provides a submodule (marko/express) to add a res.marko method to the express response object.

const app = express();
const port = 3001;

app.use('/static', serveStatic(__dirname + '/dist'));
app.get('/', require('./src/pages/home'));

app.listen(port);