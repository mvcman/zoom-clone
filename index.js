const express = require('express');

const app = express();

const { v4: uuidv4 } = require('uuid');

const server = require('http').Server(app);

const io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.status(200).send('Hello world!');
    res.redirect(`/${uuidv4()}`);
})

app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room });
})

io.on('connection', socket => {
    socket.on('join-room', () => {
        console.log('We have joined the room!');
    })
})

server.listen(3030);