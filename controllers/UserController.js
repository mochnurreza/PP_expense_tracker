const{User, Profile} = require('../models')
const bycript = require('bcryptjs')
const { use } = require('../router')


class UserController {
    static registerForm(req, res){
        let err = req.query.Error
        res.render('auth/register', {err})
    }

    static loginForm(req, res){
        let err = req.query.err
        res.render('auth/login', {err})
    }

    static postRegister(req, res){
        const {username, password, email, age, name, phone} = req.body
        User.create({username, password, email})
        .then(result => {
            console.log(result)
            let options = {
                name : name,
                phone : phone,
                age : age,
                UserId : result.id
            }
            Profile.create(options)
                .then(()=> {
                    res.redirect('/login')
                })
                .catch(() => {
                    const error = `Please insert the require form for registration`
                    res.redirect(`/register?Error=${error}`)
                })
        })
        .catch(() => {
            const error = `Please insert the require form for registration`
            res.redirect(`/register?Error=${error}`)
        })
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
                    req.session.userId = user.id
                    res.redirect(`/${user.id}`)
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