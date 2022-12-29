const express = require('express');
const app = express();
const path = require('path');
const io = require('socket.io')(8000, {
    cors: {
        origin: ['http://localhost:3000']
    }
});
const PORT = 3000;

const users = {};

io.on('connection', (socket) => {
    socket.on('user-joined', (name) => {
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
        console.log("user joined", name);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected.');
    });

    socket.on('set-black-order', () => {
        socket.broadcast.emit('set-black');
    });

    socket.on('set-red-order', () => {
        socket.broadcast.emit('set-red');
    });

    socket.on('set-green-order', () => {
        socket.broadcast.emit('set-green');
    });

    socket.on('set-blue-order', () => {
        socket.broadcast.emit('set-blue');
    });

    socket.on('set-party-order', () => {
        socket.broadcast.emit('set-party');
    });

    socket.on('yt-open-order', () => {
        socket.broadcast.emit('open-yt');
    });

    socket.on('insta-open-order', () => {
        socket.broadcast.emit('open-insta');
    });
});

// Serving public page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views','/public.html'));
});

// Serving admin page
app.get('/admin/private', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '/private.html'));
});

// Serving public client browser js
app.get('/clientmain', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '/scripts/clientmain.js'));
});

// Serving private client browser js
app.get('/clientprivate', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '/scripts/clientprivate.js'));
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
});