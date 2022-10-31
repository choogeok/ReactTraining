import React from 'react';
// import home1 from "../Images/home1.jpg"
import hometop from "../Images/hometop.png";
import homelogo from "../Images/homelogo.png";
import "../Css/Header.css"

function Header() {
  return (
    <div className='head'>
        <div className='container'>
        <img src={homelogo} alt="logo" className='homelogo'/>
        <div className='menu'>
        <span> <h4> Home </h4></span>
        <span><h4> About </h4></span>
        <span><h4> Contact </h4></span>
        </div>
        <img className="hometop" src={hometop} alt="one Child" />
       <div className='hometext'> 
       <h3> Give a child the</h3>
        <h3> gift of Education</h3><br/>
        <h5> Each donation is an essential help for everyone's life</h5><br/>
        <button> DONATION NOW </button>
       </div>
       </div>
    </div>
  )
};

export default Header;