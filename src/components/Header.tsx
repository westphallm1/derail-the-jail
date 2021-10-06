import React from 'react';
import logo from '../img/jac_logo.png';
import { Link } from 'react-router-dom';

export default ({...props}) => {
  return (
    <div className="Header sm-col">
      <div className="img-holder">
        <img src={logo}/>
        <span>Derail the Dane County Jail</span>
      </div>
      <div className="link-holder">
        <Link to="/">Home</Link>
        <Link to="/about_us">About Us</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/get_involved">Get Involved</Link>
      </div>
    </div>
  )
}