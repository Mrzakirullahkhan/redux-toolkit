import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import profileImg from "../../images/profile.png"
// import  { useState } from 'react';
function Header() {
  // const [inputValue, setInputValue] = useState('');
  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };
  return (
    <div className='header'>
      <Link to="/">
      <div className='logo'>Movie logo</div>
      </Link>
      {/* <div className="movie-search">
      <input type="search" value={inputValue} onChange={handleInputChange} />
      </div> */}
      <div className="user-image">
        <img src={profileImg} alt="user" />
      </div>
      
    </div>
  )
}

export default Header
