const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentarioController');

router.post('/', comentarioController.crear);
router.get('/', comentarioController.obtenerComentarios);
router.delete('/:id', comentarioController.eliminar);

module.exports = router;