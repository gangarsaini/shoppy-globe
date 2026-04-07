import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearCart } from "../redux/cartSlice"
import "./Checkout.css"

function Checkout() {
  
    //  fetching items from the store using useSelector hook
    const items = useSelector(store => store.cart.items)
    //  useDispatch to dispatch any action
    const dispatch = useDispatch()
    //  useNavigate to navigate to the page required
    const navigate = useNavigate()
    //Calculate the total price 
    const totalPrice = items.reduce((total,item)=>total+item.price*item.quantity,0)
    //  Demo function for placing the order after button click
    function placeOrder(){
         


        alert("Order placed successfully")

        dispatch(clearCart())

        navigate("/")
    }


  return (
    <div className="checkout">
        <h2>Checkout</h2>
         {/* input to colect name and address of the user */}
        <input type="text" placeholder="Name" required value=""/>
        <input type="text" placeholder="Address" required value=""/>
         {/* Order summary */}
         <h3>Order summary</h3>
         {
            items.length === 0 ?
            <p>No Items in Cart</p>
            :
            items.map(item=>(
                <div key={item.id}>
                    <p>{item.title} x {item.quantity}</p>
                </div>
            ))
         }
           <h3>Total: ₹ {totalPrice} </h3>
         {/* Button to place order */}

        
        <button onClick={placeOrder}>Place Order</button>
    </div>
  )
}

export default Checkout