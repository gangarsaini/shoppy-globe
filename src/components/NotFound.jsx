import { Link } from "react-router-dom"

function NotFound() {
  return (
      <div style={{padding :"40px", textAlign : "center"}}>
        <h1>404</h1>
        <h3>Page not found</h3>
        <Link style={{textDecoration: "none"}}  to="/">Go To Homepage</Link>
      </div>
      
  )
}

export default NotFound