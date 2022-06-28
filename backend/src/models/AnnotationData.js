const mongoose = require('mongoose');

const AnnotationDataSchema = new mongoose.Schema({
    nomeDoLivro: String,
    autorDoLivro: String,
    dataPublicacao: Date,
});

module.exports = mongoose.model('Annotations', AnnotationDataSchema);