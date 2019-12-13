const express = require('express')
const port = process.env.PORT || 3000
const app = express()
var mongoose = require('mongoose');

app.use(express.static('public'))
app.set('view engine','pug')

app.get('',(req,res)=>{
res.render('home',{})
})
app.get('',(req,res)=>{
  res.render('about',{})
  })
  app.get('',(req,res)=>{
    res.render('product',{})
    })
    app.get('',(req,res)=>{
      res.render('contact',{})
      })
      app.get('',(req,res)=>{
        res.render('login',{})
        })
        app.get('',(req,res)=>{
          res.render('signup',{})
          })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})