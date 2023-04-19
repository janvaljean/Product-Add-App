import { createSlice, nanoid } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",

  initialState: {
    searchTerm: "",
    data: [],
  },

  reducers: {
    addCourse(state, action) {
      state.data.push({
        name: action.payload.name,
        discription: action.payload.discription,
        cost: action.payload.cost,
        image: action.payload.image,
        id: nanoid(),
      });
    },
    removeCourse(state, action) {
      const filteredData = state.data.filter(
        (item) => item.id !== action.payload
      );

      state.data = filteredData;
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});
export const { addCourse, removeCourse, changeSearchTerm } =
  courseSlice.actions;
export const courseReducer = courseSlice.reducer;
