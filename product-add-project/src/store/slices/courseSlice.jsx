import { createSlice, nanoid } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",

  initialState: {
    searchTerm: "",
    data: [],
  },

  reducers: {
    addCourse(state, action){
      debugger
      state.data.push({
        name: action.payload.name,
        discription: action.payload.discription,
        cost: action.payload.cost,
        image: action.payload.image,
        id: nanoid()
      })
    },
    removeCourse


  }
});
export const {addCourse} = courseSlice.actions;
export const courseReducer = courseSlice.reducer