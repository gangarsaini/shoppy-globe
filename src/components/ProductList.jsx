import { useDispatch, useSelector } from "react-redux"
import useProducts from "../hooks/useProducts"
import { setSearch } from "../redux/searchSlice"
import ProductItem from "./ProductItem"
import "./ProductList.css"
import { IoIosSearch } from "react-icons/io";

function ProductList() {
    // to obtain products Array and error if exists
    const {products, error} = useProducts()
    //  to obtain the text we searched
    const searchText = useSelector(store => store.search.text)  
    //  filtering products based on the text searched
    const filteredProducts = products.filter( product => product.title.toLowerCase()
    .includes(searchText.toLowerCase()))
    // to dispatch an action in redux store
     const dispatch = useDispatch()

    //returning the error if fetching fails
    if(error) return <h2 className="place-center">Error Loading products</h2>

  return (
    <div>
        {/* setting input value for text in searchSlice on change in input */}
           <div className="Search-bar"><span><IoIosSearch /></span>
            <input 
              className="search-box" 
              type="text" 
              placeholder="Search product by name" 
              onChange={(e)=>dispatch(setSearch(e.target.value)
              )}
            />
            </div>
            <div className="product-container">
              {    
              // passing the products from fileteredProducts to productList component
              filteredProducts.map(product =>{
                  return(
                      <ProductItem key={product.id} product={product}/>
                  )
                })
               }
            </div>
        </div>
  )
}

export default ProductList