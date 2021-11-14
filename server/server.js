const app = require('./configs/express')
const socketConfig = require('./configs/socket')

socketConfig(
  app.listen(process.env.PORT, () => {
    console.log(`🚀 listening port: ${process.env.PORT}`)
  })
)
