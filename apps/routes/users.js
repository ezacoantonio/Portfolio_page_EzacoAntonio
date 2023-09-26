// This file defines routes related to user operations.
// It could include user authentication, profile view, etc.


var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');

/* GET users listing. */
router.get('/', usersController.users);

router.get('/profile', usersController.profile);

module.exports = router;
