import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMoviesList: null,
    popularMovieList: null,
    topRatedMovieList: null,
    upComingMovieList: null,
    trailerVideoId: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMoviesList = action.payload;
    },
    addTrailerVideoId: (state, action) => {
      state.trailerVideoId = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovieList = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovieList = action.payload;
    },
    addUpComingMovie: (state, action) => {
      state.upComingMovieList = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addTrailerVideoId,
  addPopularMovie,
  addUpComingMovie,
  addTopRatedMovie,
} = movieSlice.actions;
export default movieSlice;
