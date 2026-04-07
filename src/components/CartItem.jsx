import { useDispatch } from "react-redux"
import { decreaseQuantity, increaseQuantity, removeItem } from "../redux/cartSlice"
import "./Cart.css"

function CartItem({item}) {
    
    const dispatch = useDispatch()
  return (
    <div className="cart-item">
        {/* Displaying each item in the cart with it's product details */}
        <h3>{item.title}</h3>
        
        {/* button to increase the quantity of the item added to cart*/}
        <button className="qty-btn" onClick={()=> dispatch(increaseQuantity(item.id))}>+</button>

        {/* to display quantity */}
        <span>{item.quantity} </span>

         {/* button to decrease the quantity of the item added to cart*/}
        <button className="qty-btn" onClick={()=> dispatch(decreaseQuantity(item.id))}>-</button>
        
         {/* button to remove item from the cart */}
        <button  onClick={()=> dispatch(removeItem(item.id))}>remove</button>
    </div>
  )
}

export default CartItem;