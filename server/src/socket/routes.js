const controller = require('./controller')
const { constantsSocketIo } = require('../../helpers/constants')
const { event_emit } = constantsSocketIo

module.exports = (socket) => {
  socket.on('join', controller.joinRoom)
  socket.on('switch', controller.switchRoom)
  socket.on(event_emit, controller.eventRoom)
}
