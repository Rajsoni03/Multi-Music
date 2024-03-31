const express = require('express');
const router = express.Router();
const {
    addUser,
    getUsers
} = require("../controllers/user.controller");

router.route('/').get(getUsers).post(addUser);

module.exports = router;