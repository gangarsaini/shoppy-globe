import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "./Header.css"

function Header() {

    const cartItems = useSelector(store => store.cart.items)
  return (
    <div className="header">
       <h2><Link to="/">ShoppyGlobe</Link></h2>
        <div className="nav-links">
           <Link to="/">Home</Link>

           <Link to="/cart">Cart ({cartItems.length})</Link>
        </div>
        
    </div>
  )
}

export default Header