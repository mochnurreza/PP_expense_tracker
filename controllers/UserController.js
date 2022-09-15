const{User} = require('../models')
const bycript = require('bcryptjs')

class UserController {
    static registerForm(req, res){
        res.render('auth/register')
    }

    static loginForm(req, res){
        res.render('auth/login')
    }

    static postRegister(req, res){
        const {username, password, email} = req.body
        User.create({username, password, email})
        .then(newUser => {
            res.redirect('/login')
        }).catch(err => res.send(err))
    }

    static postLogin(req, res){
        const {username, password} = req.body
        User.findOne({where: {username}})
        .then(user => {
            console.log(user, 'userrrrr')
            if(user){
                const isValid = bycript.compareSync(password, user.password)
                if(isValid){
                    res.redirect('/')
                } else {
                    const error = 'invalid username/password'
                    res.redirect(`/login?err=${error}`)
                }
            } else {
                const error = 'invalid username/password'
                res.redirect(`/login?err=${error}`)
            }
        }).catch(err => res.send(err))
    }
}

module.exports = UserController