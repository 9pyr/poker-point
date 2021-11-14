import React, { useEffect, useState } from 'react'
import { Link } from 'styles'
// import { getHelloWorld } from 'actions/apis'

function Home() {
  const [state, setState] = useState('')
  // const fetch = async () => {
  //   const { data } = await getHelloWorld()
  //   console.log('🔥 data', data)
  //   setState(data.message)
  // }
  // useEffect(() => {
  //   fetch()
  // }, [])

  return (
    <div>
      <div>Home page: {state}</div>
      <div>
        <input
          value={state}
          onChange={(event) => {
            const { value } = event.target

            setState(value)
          }}
        />
      </div>
      <Link to={`vote/${state}`}>create room</Link>
    </div>
  )
}

export default Home
