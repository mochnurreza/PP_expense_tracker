const router = require("express").Router()
const UserController = require('../controllers/UserController')
const Controller = require('../controllers')
// auth
router.get('/register', UserController.registerForm)
router.post('/register', UserController.postRegister)
router.get('/login', UserController.loginForm)
router.post('/login', UserController.postLogin)
router.use(function(req, res, next){
    if(!req.session.userId){
        const error = 'You should login first'
        res.redirect(`/login?error=${error}`)
    } else {
        next()
    }
})
router.get('/', Controller.home)
router.get('/addForm', Controller.addForm)
router.get('/edit/:id', Controller.editForm)
router.get('/editProfile/:profile', Controller.editForm)
router.post('/editProfile/:profile', Controller.editProfile)




module.exports = router