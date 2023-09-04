const User = require('../models/userModel')


const createUser = async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email })
    if (!findUser) {
        //crear usuario
        const newUser = User.create(req.body)
        res.status(201).json(newUser)
    } else {
        //lanzar error
        res.status(409).json('User already exists')
    }
}

module.exports = createUser;