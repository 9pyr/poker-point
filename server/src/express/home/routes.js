const express = require('express')
const router = express.Router()
const controller = require('./controller')
const BASE_PREFIX = process.env.BASE_PREFIX + '/home'

module.exports = (app) => {
  router.route('/hello').get(controller.getHelloWorld)

  app.use(BASE_PREFIX, router)
}
