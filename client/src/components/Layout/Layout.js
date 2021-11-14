import React from 'react'
import LayoutStyled, { SiteName } from './style'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <LayoutStyled>
      <nav>
        <SiteName>Vote Point</SiteName>
        {/* <Link to='/'>Home</Link> */}
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </LayoutStyled>
  )
}

export default Layout
