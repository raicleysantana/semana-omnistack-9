const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-ktght.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
});
//GET, POST, PUT, DELETE
// req.query = acessar query params(para filtro)
//req.params = Acessar route params (para edição,delete)
//req.body = Acessar o corpo da requisição (para criação, edição  )
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);



