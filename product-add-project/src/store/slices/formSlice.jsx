import { createSlice } from "@reduxjs/toolkit";
import { addCourse } from "./courseSlice";

const formSlice = createSlice({
  name: "form",

  initialState: {
    name: "",
    discription: "",
    cost: 0,
    image:""
  },

  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeDiscription(state, action) {
      state.discription = action.payload;
    },
    changePrice(state, action) {
      state.cost = action.payload;
    },
    changeImage(state,action){
        state.image = action.payload;    
    }
  },
  extraReducers(builder){
    builder.addCase(addCourse,(state,action) =>{
        state.name= "",
        state.discription= "",
        state.cost = "",
        state.image = ""
    })
  }
});
export const { changeName, changeDiscription, changePrice, changeImage } =
  formSlice.actions;

export const formReducer = formSlice.reducer;
