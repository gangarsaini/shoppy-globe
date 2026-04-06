import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"
import searchReducer from "./searchSlice"
// centralized store for all components to access
const store= configureStore({
    reducer:{
        // from cart reducer
        cart:cartReducer,
        // from search reducer
        search: searchReducer
    }
})

export default store