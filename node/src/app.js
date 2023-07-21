const express = require('express');
const app = express();

// Rotas
const nameRoute = require('./routes/nameRoute');
app.use('/nomes', nameRoute);

module.exports = app;