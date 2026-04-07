import { useSelector } from "react-redux"
import CartItem from "./CartItem"
import { Link } from "react-router-dom"
import "./Cart.css"

function Cart() {
    // fetching items from store using useSelector hook
    const items= useSelector(store => store.cart.items)

    const totalPrice = items.reduce((total,item)=>{
        return total + item.quantity * item.price
    },0)

    //  returning empty cart message if the cart is empty
    if(items.length == 0) return <h2 className="cart-page">Cart is Empty</h2>    

  return (
    <div className="cart-container">
        {   
            // passing each item in the cart to cartItem component to display them in UI
            items.map(item =>(

               <CartItem key={item.id} item={item} />
            ))
        }
        <h2>Total: ₹ {totalPrice}</h2>
          {/* Link to go to the checkout component */}
        <Link to="/checkout">Go to Checkout</Link>
    </div>
  )
}

export default Cart