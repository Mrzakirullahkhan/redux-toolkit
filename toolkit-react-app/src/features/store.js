import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movie/movieslice"
 const store = configureStore({
    reducer:{
        movies:movieReducer
    }
})


export default store