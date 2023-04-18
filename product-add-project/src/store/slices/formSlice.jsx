import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({

    name:"form",

    initialState:{
        name:"",
        description:"",
        cost:0
        // image:""
    },

    reducers:{

    
    }
})
export const formReducer = formSlice.reducer