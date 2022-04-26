const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;


const fs = require("fs");





app.set('view engine', 'pug');
app.use('/static', express.static('static'))
app.use(express.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, "views"))
app.get("/", (req, res) => {
    res.status(200).render('index.pug')
})
app.get("/contact", (req, res) => {
    res.status(200).render('contact.pug')
})
app.get("/skills", (req, res) => {
    res.status(200).render('skills.pug')
})
app.get("/thankyou", (req, res) => {
    res.status(200).render('thankyou.pug')
})
const bodyparser = require("body-parser")
app.post("/contact", (req,res)=>{
    var myData = new ContactForm(req.body)
    myData.save().then(()=>{
        res.status(200).render('thankyou.pug')
    }).catch(()=>{
        res.status(400).send("Kuch to gadbad hai")
    })
    
})


app.listen(port, () => {
    console.log("successful")
})