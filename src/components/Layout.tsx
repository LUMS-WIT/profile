import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import PartnersFooter from './PartnersFooter'

export default function Layout() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <Outlet />
      <PartnersFooter />
    </div>
  )
}
