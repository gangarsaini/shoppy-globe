const express = require("express");
const router = express.Router();
const {register,login} = require('../controller/auth.controller')



//CREATE
router.post('/register', register);

//Read
router.get('/login', login);


module.exports = router;