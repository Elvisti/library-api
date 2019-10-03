const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    autor:{
        type: String,
        required: true
    },
    descricao:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('book', bookSchema)