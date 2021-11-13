const express = require('express')
const router = express.Router()
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, access_token')
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Expose-Headers', 'x-suggested-filename')
  next()
})

router.route('/hello').get((req, res) => {
  res.status(200).json({ massage: 'hello world' })
})

app.use(process.env.BASE_PREFIX, router)

app.listen(process.env.PORT, () => {
  console.log(`🚀 listening port: ${process.env.PORT}`)
})
