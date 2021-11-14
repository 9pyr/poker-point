exports.joinRoom = ({ socket }, room) => {
  console.log(`joining ${room}`)
  socket.join(room)
}
exports.switchRoom = ({ socket }, data) => {
  const { prevRoom, nextRoom } = data
  if (prevRoom) socket.leave(prevRoom)
  if (nextRoom) this.joinRoom(nextRoom)
}
exports.eventRoom = ({ io, event }, props) => {
  const { room, data } = props

  io.to(room).emit(event, data)
}
