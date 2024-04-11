const express = require('express');
const {postUsers} = require("../controllers/user.controller");
const router = express.Router();

// post
router.get("", (req, res) => {
    res.json({message:"Voici les utilisateurs!"});
});

router.post('/', postUsers);

router.put('/:id', (req, res) => {
    res.json({ messageId: req.params.id});
})

router.delete('/:id', (req, res) => {
    res.json({message: `User deleted : ${req.params.id}`});
})

router.patch('/:id', (req, res) => {
    res.json({message: `User updated : ${req.params.id}`});
});

module.exports = router;