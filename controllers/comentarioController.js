const Comentario = require('../models/Comentario');
exports.crear = async (req, res) => {
    try{
        let comentario;
        comentario = new Comentario(req.body);

        await comentario.save();
        res.send(comentario);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Error al crear el comentario');
    }
}

exports.obtenerComentarios = async (req, res) => {
    try{
        const comentarios = await Comentario.find();
        res.json(comentarios);
    }
    catch(error){
        console.log(error);
        res.status(500).send('Error al obtener los comentarios');
    }
}

exports.eliminar = async (req, res) => {
    try{
        await Comentario.findById(req.params.id);
        if(!Comentario){
            res.status(404).json({mensaje: 'Comentario no encontrado'});
        }
        else{
            await Comentario.findOneAndRemove({_id: req.params.id});
            res.json({mensaje: 'Comentario eliminado'});
        }
    }
    catch(error){
        console.log(error);
        res.status(500).send('Error al eliminar el comentario');
    }
}