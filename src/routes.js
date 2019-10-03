const express = require('express');

const routes = express.Router()

// Rotas: GET/ POST/ PUT/ DELETE

routes.get('/', (req, res) =>{
    return res.json({idade: 25});
})


routes.post('/', (req, res) =>{
    return res.json(req.body);
})

module.exports = routes;