import { useParams } from "react-router-dom"
import useProductDetail from "../hooks/useProductDetail"
import { useDispatch } from "react-redux"
import { addItem } from "../redux/cartSlice"
import "./ProductDetail.css"

function ProductDetail() {
    // fetching id from the url using useparams hook
    const { id } = useParams()
    // fetching product based on the id using useProductDetail hook
    const {product, loading, error} = useProductDetail(id)
   
   
    const dispatch = useDispatch()
   
    if (loading) return <h2 className="place-center">Loading...</h2>;
    if (error) return <h2 className="place-center">{error}</h2>;
    return (
        //  description about the product with it's image and details 
        <div className="detail-container">
            <img src={product?.thumbnail} width="200" alt={product?.title} loading="lazy" />
            <div className="detail-info">
                <h2>{product?.title}</h2>

                <p>{product?.description}</p>

                <h3>₹ {product?.price}</h3>
                {/* dispatching an action on button click to add component to the cart */}
                <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
            </div>

        </div>
    )
}

export default ProductDetail