const Annotations = require('../models/AnnotationData');

module.exports = {

    async read(request, response) {
        const cadastros = await Annotations.find();

        return response.json(cadastros);
    },

    async create(request, response){
        const { nomeDoLivro, autorDoLivro, dataPublicacao } = request.body;

        if(!nomeDoLivro || !autorDoLivro || !dataPublicacao){
            return response.status(400).json({error: "Preencha todos os campos!"});
        }
       
        const annotationCreated = await Annotations.create({
            nomeDoLivro,
            autorDoLivro,
            dataPublicacao,
        });

        return response.json(annotationCreated);
    },   

    async delete(request, response) {
        const { id } = request.params;

        const annotationDeleted = await Annotations.findOneAndDelete( { _id : id } );
        
        if (annotationDeleted) {
            return response.json(annotationDeleted);
        }

        return response.status(401).json({ error: 'Não foi encontrado o registro para deletar!'});
    }
}