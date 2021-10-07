import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setPageTitle } from '../app/utils';
import HeroImage from '../components/HeroImage';
import bgLarge from '../img/bg_large.jpg';
import bgLarge2 from '../img/bg_large2.jpg';
import jailDemographics from '../img/jail_demographics.png';

export default ({...props}) => {
  useEffect(()=>setPageTitle("Home"),[]);

  return (
    <div className="Content">
      <div className="summary">
        <h1>Build the People, not the Jail!</h1>
        <p>
          <span className="bold">Derail the Dane County Jail</span> was founded in 2020 
          to oppose the construction of a new $255 million jail project in 
          Dane County. Amid the deepening crises of houselessness, institutional racism, 
          addiction, and poverty, our county leaders have chosen to prioritize building a new,
          dehumanizing jail. We have come together as a community to demand the immediate 
          termination of the jail consolidation project, and the implementation of humane and 
          compassionate approaches to addressing harm, violence, and insecurity.</p>
      </div>
      <HeroImage bgImage={bgLarge}>
        <h1>Get Involved Today!</h1>
        <Button component={Link} to="/get_involved" variant="contained">Take Action</Button>
      </HeroImage>
      <div className="summary">
        <h1>Facts about the Jail</h1>
        <div className="flex-row sm-col">
          <ul>
            <li>
              <span>
                The jail disporportionately targets people of color. Over half of the people incarcerated in the dane county jail are black,
                compared to just 6% of the dane county population.
              </span>
            </li>
            <li>
              <span>
                Proponents of the new jail say the current jail is unsafe - but any jail is unsafe. In December, jail guards broke
                an incarcerted man's hip in an altercation, then waited over 15 hours to provide him with any medical attention.
                New facilities can't fix a system this deeply broken.
              </span>
            </li>
            <li>
              <span>
                More humane alternatives <span className="bold">are</span> possible. In August of 2021, Madison launched the 
                Community Alternative Response for Emergency Services (CARES). This pilot program creates two teams of 
                trained mental professionals to address mental health crises without the involvement of law enforcement.
              </span>
            </li>
          </ul>
          <div className="flex-column">
            <img src={jailDemographics} />
          </div>
        </div>
      </div>
      <HeroImage bgImage={bgLarge2}>
        <h1>Find out More!</h1>
        <Button variant="contained">Resources</Button>
      </HeroImage>
    </div>
  )
}