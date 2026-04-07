import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearCart } from "../redux/cartSlice"
import "./Checkout.css"
import { useState } from "react"

function Checkout() {
   const [name,setName] = useState('');
   const[address,setAddress] = useState('');
   const [error,setError]  = useState('');
   const[placed,setPlaced] = useState('')
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
         
        if(!name.trim()  || !address.trim()){
          setError("Please Enter Name and Address First");
          return;
        }

        if(items.length === 0){
          setError('Cart is empty');
          return
        }

        setPlaced("Your Order placed successfully")

        dispatch(clearCart())

        navigate("/")
    }


  return (
    <div className="checkout">
        <h2>Checkout</h2>
         {/* input to colect name and address of the user */}
        <input type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" placeholder="Address" required value={address} onChange={(e)=>setAddress(e.target.value)}/>
        <p className="err">{error}</p>
        <p className="place">{placed}</p>
         {/* Order summary */}
         <h3>Order Summary</h3>
         {
            items.map(item=>(
                <h4 key={item.id}>
                    <p>{item.title} x {item.quantity}</p>
                </h4>
            ))
          
         }
           <h3>Total: ₹ {totalPrice} </h3>
        

        
        <button onClick={placeOrder}>Place Order</button>
    </div>
  )
}

export default Checkout