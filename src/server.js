const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');


//Iniciando o express em uma constante.
const app = express();


mongoose.connect('mongodb+srv://library:library@library-fijoa.mongodb.net/library?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar o corpo da requisição (para criação, edição)


// Informando para o express que irá trabalhar com formato json.
app.use(express.json());

// Chamando as requisições do routes que possui as rotas.
app.use(routes)


// Iniciando o servidor na porta 3333
app.listen(3333);
    
    

