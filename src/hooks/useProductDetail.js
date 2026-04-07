import { useEffect, useState } from "react";

function useProductDetail(id){
    const [product , setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        // function to fetch data based on id
        setLoading(true);
        setError(null);
        async function fetchProduct() {
            try{
            const res = await fetch( `https://dummyjson.com/products/${id}`)
            if(!res.ok){
                throw new Error("Failed to fetch product data");
            }
            const data = await res.json()
            //  setting up the product fetched to useState variable product 
            setProduct(data);
            
            }
            catch(err){
              setError(err.msg)
            }
            finally{
                setLoading(false)
            }
        }
        fetchProduct()

    },[id])

    return {product,loading,error}
}

export default useProductDetail;
