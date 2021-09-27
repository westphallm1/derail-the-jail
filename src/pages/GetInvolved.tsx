import { Button } from '@material-ui/core';
import React from 'react';
import bgLarge from '../img/bg_large.jpg';
import bgLarge2 from '../img/bg_large2.jpg';
import yardSign from '../img/yardSign.jpg';
import jailDemographics from '../img/jail_demographics.png';
import { Link } from 'react-router-dom';

export default ({...props}) => {
  return (
    <div className="Content GetInvolved">
      <div className="summary">
        <h1>Three ways you can get involved to stop the Dane County jail expansion!</h1>
      </div>
      <div className="hero-image" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bgLarge})`}}>
      </div>
      <div className="summary">
        <h1>Join The Campaign</h1>
        <p>
          Sign up to receive updates about the campaign, request a yard sign, and learn about upcoming volunteer opportunities.
        </p>
        <a href="https://airtable.com/shrNfYx0wVicaKaOH">
          <Button variant="contained">Sign Up</Button>
        </a>
      </div>
      <div className="hero-image" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${yardSign})`}} />
      <div className="summary">
        <h1>Contact Your Representitive</h1>
        <p>
          The County board has yet to approve any specific plan for the new jail. Contact your County Board supervisor and tell them that
          we want no new jail, and that the $225 million alloted for the jail would be better spent on programs that focus on
          rehabilitation and restorative justice. 
        </p>
        <a href="https://board.countyofdane.com/supervisors">
          <Button variant="contained">Find Your Representative</Button>
        </a>
      </div>
      <div className="hero-image" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bgLarge2})`}} />
      <div className="summary">
        <h1>Share Your Story</h1>
        <p>
          Do you have firsthand experience with the Dane County carceral system? We want to know your story!
        </p>
        <a href="mailto:jailabolitioncoalition@gmail.com">
          <Button variant="contained">Contact Us</Button>
        </a>
      </div>
    </div>
  )
}