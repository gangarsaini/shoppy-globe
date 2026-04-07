import { useEffect, useState } from "react";
//  customized hook to fetch data using url
function useProducts(){
    const [products , setProducts] = useState([])

    const [error, setError] = useState(null)

    useEffect(()=>{
        async function fetchProducts(){
            // set products array if fetching sucessful
            try{
                const response= await fetch("https://dummyjson.com/products")

                const data = await response.json()
            
                setProducts(data.products)

            }
            //  setting error if exists
            catch(err){
                setError("Failed, Product are not available")
            }
            
        }

        fetchProducts()
    },[])

    return {products,error}
}

export default useProducts;