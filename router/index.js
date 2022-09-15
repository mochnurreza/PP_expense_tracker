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
router.get('/:id', Controller.home)
router.get('/:id/addForm',Controller.addForm)
router.post('/:id/addForm', Controller.addUpdate)
router.get('/:id/delete',Controller.destroy)
router.get('/profile/:id', Controller.profileHome)
router.get('/editProfile/:profile', Controller.editForm)
router.post('/editProfile/:profile', Controller.editUpdate)




module.exports = router