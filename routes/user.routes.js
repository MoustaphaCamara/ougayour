const express = require('express');
const {postUsers, updateUsers, deleteUser} = require("../controllers/user.controller");
const router = express.Router();

router.post('/', postUsers);

router.patch('/:id', updateUsers);

router.delete('/:id', deleteUser);

module.exports = router;