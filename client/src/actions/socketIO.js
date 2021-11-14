import io from 'socket.io-client'
import { constantsSocketIo } from 'helpers/constants'

const { event_emit } = constantsSocketIo

const socket = io(process.env.REACT_APP_BASE_API)
export const joinSocket = (room) => {
  console.log('Join socket...')
  if (socket && room) {
    socket.emit('join', room)
  }
}
export const disconnectSocket = () => {
  console.log('Disconnect socket...')
  if (socket) socket.disconnect()
}

export const switchRooms = (prevRoom, nextRoom) => {
  if (socket) socket.emit('switch', { prevRoom, nextRoom })
}

export const selectRoom = (room, data) => {
  if (socket) socket.emit(event_emit, { room, data })
}

export const sendValue = async (callback) => {
  if (!socket) return true

  socket.on(event_emit, (data) => {
    return callback(null, data)
  })
}
