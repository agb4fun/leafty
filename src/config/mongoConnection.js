const mongoose = require('mongoose')
require('dotenv').config()

const connectMongo = () => {
    try {
        mongoose.connect(process.env.mongo_key, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Conexión a Mongo exitosa')
    } catch (error) {
    console.log(err)
    }
}

module.exports = connectMongo;