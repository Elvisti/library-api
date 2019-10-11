const express = require('express');

const bookController = require('./controllers/BookController');

const routes = express.Router();

// Rotas: GET/ POST/ PUT/ DELETE

routes.get('/books', bookController.index);
routes.get('/books/:id', bookController.show);
routes.post('/books', bookController.store);
routes.put('/books/:id', bookController.update);
routes.delete('/books/:id', bookController.destroy);


module.exports = routes;