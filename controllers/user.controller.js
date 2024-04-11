const UserModel = require('../models/user.model');

module.exports.getUsers = async (req,res) => {
  const users = await UserModel.find();
  res.status(200).json(users);
};

module.exports.postUsers = async (req, res) => {
    if (!req.body.name) {
        res.status(400).json({message: "Add a name for the user"});
    }
    const user = await UserModel.create({
        name: req.body.name,
        email: req.body.email,
        telephone: req.body.telephone,
        profilePicture: req.body.profilePicture,
        language: req.body.language,
        reservations: req.body.reservations,
        notifications: req.body.notifications,
    });
    res.status(201).json({user});
};

module.exports.updateUsers = async (req, res) => {
  if (!req.body.name || !req.params.id) {
      res.status(400).json({
          message:"your request is missing either a name or an id"
      });
  }
  const userId = req.params.id;
  const updatedUser = await UserModel.findByIdAndUpdate(userId, req.body, {
      new: true
  })
    res.status(201).json({updatedUser});
};

module.exports.deleteUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
        res.status(400).json({message: "User not found"});
    }
    await UserModel.findByIdAndDelete(user);
    res.status(200).json({message:"deleted"});
};

// watchers
(function () {
    UserModel.watch().on('change', data => console.log(data))
})();