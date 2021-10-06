import React from 'react';
import logo from '../img/jac_logo.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter} from 'react-icons/fa';

export default ({...props}) => {
  return (
    <div className="Footer">
      <div className="img-holder">
        <img src={logo}/>
      </div>
      <div className="hashtags">
        <span>#DerailTheJail</span>
        <span>#CareNotCages</span>
      </div>
      <div className="link-holder">
        <a href="https://www.facebook.com/JailAbolitionCoalition">
          <FaFacebook/>
        </a>
        <a href="https://twitter.com/jailabolition/">
          <FaTwitter/>
        </a>
      </div>

      <div className="acknowledgements">
        <span>"Downtown Madison, Wisconsin, the Capitol, &amp; Lake Monona from Olin Park" by jimflix! is licensed under CC BY-NC-ND 2.0</span>
        <span>"Bascom Hall, Madison, Wisconsin 05-19-2012 365" by Richard Hurd is licensed under CC BY 2.0</span>
    
      </div>
    </div>
  )
}