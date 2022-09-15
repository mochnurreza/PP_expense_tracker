const express = require("express")
const router = require("./router")
const app = express()
const session = require('express-session')
const port =process.env.PORT||3000

app.set("view engine", "ejs")
app.use(express.urlencoded({extended : false}))

app.use(session({
    secret: 'rahasia',
    resave: false,
    saveUninitialized:false,
    cookie: {
        secure: false,
        sameSite: true
    }
}))
app.use(router)

app.listen(port, ()=> {
    console.log(`PP_expense_tracker on port ${port}`)
})