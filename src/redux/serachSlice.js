import { createSlice } from "@reduxjs/toolkit";
//  to implement searchtext available to all components
const searchSlice = createSlice({
    name : "search",
    initialState : {
        text : ""
    },
    reducers : {
        // to set the text with input searched
        setSearch :(state, action)=>{
            state.text = action.payload
        }
    }
})

export const {setSearch} = searchSlice.actions

export default searchSlice.reducer