const router = require("express").Router()
const UserController = require('../controllers/UserController')
const Controller = require('../controllers')
router.get('/', Controller.home)
// auth
router.get('/home')
router.get('/register', UserController.registerForm)
router.post('/register', UserController.postRegister)
router.get('/login', UserController.loginForm)
router.post('/login', UserController.postLogin)
router.get('/login/:id', UserController.postLogin)
router.get('/editProfile/:profile', Controller.editForm)
router.post('/editProfile/:profile', Controller.editProfile)




module.exports = router