import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  query: "",
  year: "",
  genre: "",
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});
export const { setGenre, setQuery, setYear } = searchSlice.actions;
export default searchSlice.reducer;
