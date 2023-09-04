const express = require('express')
const createUser = require('../controllers/usersControllers')
const router = express.Router()

//ruta para registrar usuario
router.post('/register', createUser)

//ruta para obtener todos los usuarios
router.get('/users')

//actualizar usuario

//obtener usuario por id


//eliminar un usuario



module.exports = router
