import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApis from "../../common/Api/MovieApi.js"
import {ApiKey} from "../../common/Api/MovieApiKey"
import Header from "../../components/Header/Header.jsx"
export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies",async ()=>{
    const search = "Harry"
    const responce = await MovieApis.get(`?apikey=${ApiKey}&s=${search}&type=movie`)

    return (responce.data);
})
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows",async ()=>{
    const seriesText = "Friends"
    const responce = await MovieApis.get(`?apikey=${ApiKey}&s=${seriesText}&type=series`)

    return (responce.data);
})
export const fetchAsyncMovieOrShowDetail = createAsyncThunk("movies/fetchAsyncMovieOrShowDetail",async (id)=>{
    const responce = await MovieApis.get(`?apikey=${ApiKey}&i=${id}&Plot=full`)

    return (responce.data);
})
const initialState = {
    movies:{},
    shows:{},
    selectNovieOrShow:{},
};
const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
      
        removeSelectMovieOrShow :(state)=>{
            state.selectNovieOrShow={};
        },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]: ()=>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload})=>{
            console.log("fetch successfuly");
            return {...state,movies:payload};
        },
        [fetchAsyncMovies.rejected]: ()=>{
            console.log("Rejected");
            
        },
        [fetchAsyncShows.fulfilled]: (state, {payload})=>{
            console.log("fetch successfuly");
            return {...state,shows:payload};
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload})=>{
            console.log("fetch successfuly");
            return {...state,selectNovieOrShow:payload};
        },
    }
})

export const {removeSelectMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectMovieOrShow = (state) => state.movies.selectNovieOrShow
export default movieSlice.reducer;