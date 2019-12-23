const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path');
const socketio = require('socket.io');
const http = require('http');


const server = http.Server(app);

const io = socketio(server);
const connectedUsers = {};

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-ktght.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//GET, POST, PUT, DELETE
// req.query = acessar query params(para filtro)
//req.params = Acessar route params (para edição,delete)
//req.body = Acessar o corpo da requisição (para criação, edição  )


io.on('connection', socket => {
    const { user_id } = socket.handshake.query;
    connectedUsers[user_id] = socket.id;
});

app.use((req,res,next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
    return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..', 'upload')));
server.listen(3333);



