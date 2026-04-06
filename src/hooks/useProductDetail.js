import { useEffect, useState } from "react";

function useProductDetail(id){
    const [product , setProduct] = useState(null)

    useEffect(()=>{
        // function to fetch data based on id
        async function fetchProduct() {
            const res = await fetch( `https://dummyjson.com/products/${id}`)

            const data = await res.json()
            //  setting up the product fetched to useState variable product 
            setProduct(data)
        }
        fetchProduct()

    },[id])

    return product
}

export default useProductDetail
