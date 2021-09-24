import { Button } from '@material-ui/core';
import React from 'react';
import bgLarge from '../img/bg_large.jpg';

export default ({...props}) => {
  return (
    <div className="Home">
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
      <div className="hero-image" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bgLarge})`}}>
        <h1>Get Involved Today!</h1>
        <Button variant="contained">Take Action</Button>
      </div>
      <div className="summary">
        <h1>Facts about the Jail</h1>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  )
}