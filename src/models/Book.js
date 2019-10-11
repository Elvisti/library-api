const mongoose = require('mongoose');

const BookSchema =  mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    autor:{
        type: String,
        required: true
    },
    genero:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Book', BookSchema);