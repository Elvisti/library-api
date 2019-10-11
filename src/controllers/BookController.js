const Book = require('../models/Book');

// index, show, store, update, delete. Métodos usados no controller.

module.exports = {

    async index(req, res){
        const bookFind = await Book.find(req.body);

        return res.json(bookFind);
    },

    async store(req, res){
        const {titulo, autor, genero} = req.body;

        const  bookList = await Book.create({titulo, autor, genero});

        return res.json(bookList);
    },

    async show(req, res){
        const book = await Book.findById(req.params.id);

        return res.json(book);
    },

    async update(req, res){
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true}); // Precisa de um objeto com valor true para atualizar o corpo da requisição req.body

        return res.json(book);
    },

    async destroy(req, res){
         await Book.findByIdAndRemove(req.params.id);

        return res.send('Excluido com sucesso!');
    }

}