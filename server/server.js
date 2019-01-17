const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

// let {authenticate} = require('./middleware/authenticate');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("new user connected");

    socket.on('disconnect', () => {
        console.log("user disconnected");
    })
});


server.listen(port, () => {
    console.log(`app started on port ${port}`);
});

module.exports = {app};

// console.log(__dirname + '/../public'); //old way
// console.log(publicPath); //new way