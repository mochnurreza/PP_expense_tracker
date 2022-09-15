const{User, Profile} = require('../models')
const bycript = require('bcryptjs')
const { use } = require('../router')


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
        let options = {
            include : Profile,
            where : {
                username : username
            }
        }
        User.findOne(options)
        .then(user => {
            // console.log(user, 'userrrrr')
            if(user){
                const isValid = bycript.compareSync(password, user.password)
                if(isValid){
                    // console.log(user)
                    res.redirect(`/profileHome/${userId}`)
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