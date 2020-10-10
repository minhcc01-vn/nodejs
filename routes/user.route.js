const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth.middleware')

const userController = require('../controllers/UserController')
const validate = require('../validate/user.validate')

// search user
router.get('/search', userController.search)
// New user
router.get('/create',userController.create)
router.post('/create', validate.postCreate ,userController.postCreate)
// view user
router.get('/:id', userController.show)

// show user
router.get('/', authMiddleware.requireAuth, userController.index)

module.exports = router