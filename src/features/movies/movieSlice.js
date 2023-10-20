import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../comman/apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
  const res = await movieApi.get(`movie?api_key=${process.env.API_KEY}`);
  return res.data.results;
});

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async () => {
  const res = await movieApi.get(`tv?api_key=${process.env.API_KEY}`);
  return res.data.results;
});

const initialState = {
  movies: [],
  shows: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending..");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return { ...state, movies: payload };
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log(" shows fulfilled");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
