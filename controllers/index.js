const {Profile, Category, Recap, User} = require("../models")
class Controller {
    static home(req, res) {
        res.render('home')
    }
    static profileHome(req, res){
        res.render('profile')
    }

    static addForm(req,res){
        res.render('addForm')
    }

    static editForm(req, res){
        res.render('editForm')
    }
    static editForm(req, res) {
        let options = {
            include : User
        }
        Category.findAll(options)
            .then(result => {
                res.render("ProfileHome", {result})
            })
            .catch(err => res.send(err))
    }
    static editProfile(req, res) {
        const {name, phone, money, age} = req.body
        let options = {
            name : name,
            phone : phone,
            money : money,
            age : age
        }
        Profile.create(options)
            .then(() => {
                res.redirect()
            })
    }
}

module.exports = Controller