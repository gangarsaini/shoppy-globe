import { useDispatch } from "react-redux"

import {Link} from "react-router-dom"
import { addItem } from "../redux/cartSlice"
import "./ProductItem.css"

function ProductItem({product}) {
  
    const dispatch = useDispatch()
  return (
    <Link to={"/product/"+product.id}>
    <div className="product-card">
        {/* dispalying product image */}
        <img src={product.thumbnail}  width ="150" alt={product.title} loading="lazy" />

        {/* dispalying product title*/}
        <h3>{product.title}</h3>

        {/* dispalying product price*/}
         <p>₹ {product.price}</p>

         {/* Link to view Details about the product */}
         View Details

         {/* button to add items to the cart */}
         <button onClick={()=>dispatch(addItem(product))}> Add to Cart</button>
        </div>
        </Link>
  )
}

export default ProductItem