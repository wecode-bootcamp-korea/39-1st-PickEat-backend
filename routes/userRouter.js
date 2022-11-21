const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', userController.signUp);
router.use("/signIn", userController.signIn);

module.exports = router;