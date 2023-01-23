const path = require('path');
const express = require('express');
const app = express();

app.listen(3000,() => console.log('server is listening at port 3000'))
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded());
app.use(express.json());
app.use('/', require('./routes/router'));
