const {Profile, Category, Recap, User} = require("../models")
class Controller {
    static home(req, res) {
        let options = {
            include : User,
            where : {
                UserId : +req.params.id
            }
        }
        let id = +req.params.id
        Recap.findAll(options)
            .then(result => {
                res.render('home', {result, id})
            })
            .catch(err => {
                res.send(err)
            })
    }
    static profileHome(req, res){
        let options = {
            include : User
        }
        Profile.findByPk(+req.params.id, options)
            .then(result => {
                res.render('profile', {result})
            })
            .catch(err => {
                console.log(+req.query.login)
                res.send(err)
            })
    }
    static addForm(req,res){
        const id = +req.params.id
        console.log(id)
        res.render('addForm', {id})
    }
    static addUpdate(req, res) {
        const {status, money, type, description} = req.body
        let options = {
            status : status,
            money : money,
            type : type,
            Description : description,
            UserId : +req.params.id
        }
        Recap.create(options)
            .then(()=> {
                res.redirect(`/${+req.params.id}`)
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }
    static editForm(req, res){
        const id = +req.params.profile
        Profile.findByPk(id)
            .then(result => {
                console.log(result)
                res.render('editForm', {result})
            })
            .catch(err => res.send(err))
    }
    static editUpdate(req, res){
        const {name, age, money, phone, UserId} = req.body
        const id = +req.params.profile
        let update = {
            where : {
                id : id
            }
        }
        console.log(req.session)
        Profile.update({name, age, money, phone, UserId}, update)
            .then(() => {
                res.redirect(`/profile/${id}`)
            })
            .catch(err => {
                res.send(err)
            
            })
    }
    static destroy(req, res) {
        let options = {
            where :{
               id : +req.params.id
            } 
        }
        Recap.destroy(options)
            .then(()=> {
                res.redirect(`/${req.params.id}`)
            })
            .catch(err => res.send(err))
    }
}

module.exports = Controller