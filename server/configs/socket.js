const socket_io = require('socket.io')
const configs = {
  cors: {
    origin: '*',
  },
}

const socketConfigs = (server) => {
  const io = socket_io(server, configs)
  io.on('connection', (initialSocket) => {
    console.log(`socket.io ------- 🤝 Connected: ${initialSocket.id}`)

    initialSocket.on('disconnect', () => {
      console.log(`socket.io ------- 🙋‍♀️ Disconnected: ${initialSocket.id}`)
    })

    const handler = (event, callback) => {
      const listener = (data, ...args) => typeof callback === 'function' && callback({ io, socket: initialSocket, event }, data, ...args)

      return initialSocket.on(event, listener)
    }
    const socket = { ...initialSocket, on: handler }

    require('../src/socket/routes')(socket, io)
  })
}

module.exports = socketConfigs
