import { Outlet } from "react-router-dom"
import Header from "./Header"

// Layout to display UI based on the path provided
function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Layout