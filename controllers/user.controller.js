const UserModel = require('../models/user.model');

module.exports.postUsers = async (req, res) => {
    if (!req.body.name) {
        res.status(400).json({message: "Il faut rentrer un user"});
    }

    const user = await UserModel.create({
        name: req.body.name,
        email: req.body.email
    });
    res.status(201).json({user});
};
