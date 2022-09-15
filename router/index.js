const router = require("express").Router()
const UserController = require('../controllers/UserController')
const Controller = require('../controllers')
// auth
router.get('/register', UserController.registerForm)
router.post('/register', UserController.postRegister)
router.get('/login', UserController.loginForm)
router.post('/login', UserController.postLogin)

router.get('/', Controller.home)



module.exports = router