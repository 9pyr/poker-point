import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { disconnectSocket, joinSocket, selectRoom, sendValue } from 'actions/socketIO'

function VotePointPage() {
  const { room_id } = useParams()
  console.log('🔥 room_id', room_id)
  const [state, setState] = useState('')

  useEffect(() => {
    joinSocket('test')
    sendValue((err, data) => {
      console.log('data => ', data)

      if (!err) setState(data)
    })

    return () => {
      disconnectSocket()
    }
  }, [])

  return (
    <div>
      <div>VotePoint page</div>
      {state}
      {/* <div>
        <input
          value={state}
          onChange={(event) => {
            const { value } = event.target

            selectRoom('test', value)
          }}
        />
      </div> */}
    </div>
  )
}

export default VotePointPage
