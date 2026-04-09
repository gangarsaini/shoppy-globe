import { useEffect, useState } from "react";

function useProductDetail(id){
    const [product , setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
        setError(null);

        async function fetchProduct() {
            try{
                 const res = await fetch(`https://dummyjson.com/products/${id}`);
                //const res = await fetch(`http://localhost:5000/api/products/${id}`);
                 const data = await res.json();
                setProduct(data);
            }
            catch(err){
                setError("There is some issue in this id");
            }
            finally {
                setLoading(false); // best practice
            }
        }

        fetchProduct();

    },[id]);

    return {product, loading, error};
}

export default useProductDetail;