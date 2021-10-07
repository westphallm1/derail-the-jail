import { Button } from '@material-ui/core';
import React from 'react';
import bgLarge from '../img/bg_large.jpg';
import bgLarge2 from '../img/bg_large2.jpg';
import yardSign from '../img/yardSign.jpg';
import jailDemographics from '../img/jail_demographics.png';
import { Link } from 'react-router-dom';
import HeroImage from '../components/HeroImage';

export default ({...props}) => {
  return (
    <div className="Content GetInvolved">
      <div className="summary">
        <h1>Get Involved to stop the Dane County Jail Expansion!</h1>
      </div>
      <HeroImage bgImage={yardSign} style={{ minHeight:'240px' }} />
      <div className="summary">
        <h1>Join The Campaign</h1>
        <p>
          Sign up to receive updates about the campaign, request a yard sign, and learn about upcoming volunteer opportunities.
        </p>
      </div>
      <HeroImage bgImage={bgLarge}>
        <a href="https://airtable.com/shrNfYx0wVicaKaOH">
          <Button variant="contained">Sign Up</Button>
        </a>
      </HeroImage>
      <div className="summary">
        <h1>Contact Your Representitive</h1>
        <p>
          Contact your County Board supervisor and tell them that we want no new jail, and that the millions 
          of dollars alloted for the jail would be better spent on programs that focus on rehabilitation and 
          restorative justice. 
        </p>
      </div>
      <HeroImage bgImage={bgLarge2}>
        <a href="https://board.countyofdane.com/supervisors">
          <Button variant="contained">Find Your Representative</Button>
        </a>
      </HeroImage>
      <div className="summary">
        <h1>Share Your Story</h1>
        <p>
          Do you have firsthand experience with the Dane County carceral system? We want to know your story!
        </p>
      </div>
      <HeroImage bgImage={yardSign}>
        <a href="mailto:jailabolitioncoalition@gmail.com">
          <Button variant="contained">Contact Us</Button>
        </a>
      </HeroImage>
    </div>
  )
}