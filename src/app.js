const path = require('path');
const express = require('express');
const pokeneaRoutes = require('./routes/pokenea.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(pokeneaRoutes);

module.exports = app;
