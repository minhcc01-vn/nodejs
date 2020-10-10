const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const autherController = require('../controllers/AutherController')
const authValidate = require('../validate/auth.validate')
 
router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

router.get('/login', autherController.login)
router.post('/login', authValidate.loginValidate, autherController.postLogin)

module.exports = router