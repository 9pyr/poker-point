const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Expose-Headers', 'x-suggested-filename')
  next()
})

require('../src/express/routes')(app)

module.exports = app
