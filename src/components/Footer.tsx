import React from 'react';
import logo from '../img/jac_logo.png';
import { Link } from 'react-router-dom';

export default ({...props}) => {
  return (
    <div className="Footer">
      <div className="img-holder">
        <img src={logo}/>
      </div>
      <div className="hashtags">
        <span>#DerailTheJail</span>
        <span>#CareOverCages</span>
      </div>
      <div className="link-holder">
        {/** TODO twitter/FB/email links */}
      </div>

      <div className="acknowledgements">
        {/** TODO twitter/FB/email links */}
        <span>"Downtown Madison, Wisconsin, the Capitol, &amp; Lake Monona from Olin Park" by jimflix! is licensed under CC BY-NC-ND 2.0</span>
        <span>"Bascom Hall, Madison, Wisconsin 05-19-2012 365" by Richard Hurd is licensed under CC BY 2.0</span>
    
      </div>
    </div>
  )
}