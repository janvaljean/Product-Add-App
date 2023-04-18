import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",

  initialState: {
    searchTerm: "",
    data: [],
  },

  reducers: {


  }
});
export const courseReducer = courseSlice.reducer