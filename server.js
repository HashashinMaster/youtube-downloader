const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
server.listen(3000,() => console.log('server is listening at port 3000'))
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use('/', require('./routes/router'));
require('./socket/download')(io)