import SiteHeader from '../../components/SiteHeader'
import SiteFooter from '../../components/SiteFooter'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    //  <!-- Page wrapper -->
    <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
      {/* <!-- Site header --> */}
      <SiteHeader />
      {/* // <!-- Page content --> */}
      <main className="grow">
        <Outlet />
      </main>
      {/* <!-- Site footer --> */}
      <SiteFooter />
    </div>
  )
}

export default Layout;