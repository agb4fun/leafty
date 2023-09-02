const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required:true
    },

    lastname: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true,
        unique:true
    },

    password: {
        type: String,
        required: true,
        unique: true
    },

    gender: {
        type: String,
    },
    
    country: {
        type: String
    }
})

//Exportar el modelo
module.exports = mongoose.model('User', userSchema)
