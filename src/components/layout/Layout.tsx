import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'

function Layout() {
  return (
    <>
      {/* A "layout route" is a good place to put markup you want to
        share across all the pages on your site, like navigation. */}
      <Nav />
      {/* An <Outlet> renders whatever child route is currently active, 
      so you can think about this <Outlet> as a placeholder for the child routes we defined above. */}
      <Outlet />
    </>
  )
}

export default Layout
