import React from 'react'
import Layout from 'components/Layout'
import { Routes, Route } from 'react-router-dom'

const Home = React.lazy(() => import('pages/Home'))
const VotePoint = React.lazy(() => import('pages/VotePoint'))

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <Loading>
              <Home />
            </Loading>
          }
        />
        <Route
          path='vote/:room_id'
          element={
            <Loading>
              <VotePoint />
            </Loading>
          }
        />
      </Route>
    </Routes>
  )
}

export default App

const Loading = ({ children }) => {
  const loadStyledPage = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }
  return <React.Suspense fallback={<div style={loadStyledPage}>Loading...</div>}>{children}</React.Suspense>
}
