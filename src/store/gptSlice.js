import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSerachView: false,
    recommendedMovies: [],
  },
  reducers: {
    toggleGptSerachView: (state) => {
      state.showGptSerachView = !state.showGptSerachView;
    },
    addRecommendedMovies: (state, action) => {
      state.recommendedMovies = action.payload;
    },
  },
});

export const { toggleGptSerachView, addRecommendedMovies } = gptSlice.actions;
export default gptSlice;
