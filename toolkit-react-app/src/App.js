import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"

import Footer from "./components/footer/Footer"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import MovieDetail from "./components/MovieDetail/MovieDetail"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route  element={<PageNotFound/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
