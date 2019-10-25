const express = require('express');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/* routes.post('/users',(req,res) => {
    return res.json(req.body);
}); */
routes.post('/users',SessionController.store);

module.exports = routes;