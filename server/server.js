const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

// let {authenticate} = require('./middleware/authenticate');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("new user connected");

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app!'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'A new user has joined!'));

    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server');
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude)); //sends to all
    });

    socket.on('disconnect', () => {
        console.log("user disconnected");
    });
});


server.listen(port, () => {
    console.log(`app started on port ${port}`);
});

module.exports = {app};

// console.log(__dirname + '/../public'); //old way
// console.log(publicPath); //new way