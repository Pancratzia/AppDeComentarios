const mongooose = require('mongoose');
const ComentarioSchema = new mongooose.Schema({
    nombre: {
        type: String,
        required: true
    },
    comentario: {
        type: String,
        required: true
    }
});

module.exports = mongooose.model('Comentario', ComentarioSchema);