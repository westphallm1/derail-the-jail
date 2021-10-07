import bgLarge from '../img/bg_large.jpg';
import bgLarge2 from '../img/bg_large2.jpg';
import yardSign from '../img/yardSign.jpg';
import jailDemographics from '../img/jail_demographics.png';
import { Link } from 'react-router-dom';
import HeroImage from '../components/HeroImage';
import { Button } from '@material-ui/core';

export default ({...props}) => {
  return (
    <div className="Content AboutUs">
      <div className="summary">
        {/** Todo maybe generate this dynamically? No real reason to at the moment */}
        <h1>About Us</h1>
        <p>
          <span className="bold">Derail the Dane County Jail</span> was founded in 2020 
          by members of the <a href="https://madison-dsa.org/">Democratic Socialists of America - Madison </a>
          to continue the work of countless community activists in opposing the construction of a new 
          $255 million jail project in 
          Dane County. Amid the deepening crises of houselessness, institutional racism, 
          addiction, and poverty, our county leaders have chosen to prioritize building a new,
          dehumanizing jail. We have come together as a community to demand the immediate 
          termination of the jail consolidation project, and the implementation of humane and 
          compassionate approaches to addressing harm, violence, and insecurity.
        </p>
        <p>
          In the place of a jail expansion, the community demands a new direction. We demand 
          humane and compassionate approaches to addressing harm, violence, and insecurity.
          Beyond the termination of the new jail project, we advocate for the following in order
          to ensure the health and safety of our community: 
          <ul>
            <li><span>The immediate closure of the city/county building jail block</span></li>
            <li><span>Abolition of cash bail</span></li>
            <li><span>Universal mental health care for Dane County residents</span></li>
            <li><span>The expansion of CARES (Community Alternative Response for Emergency Services)</span></li>
            <li><span>Ending drug-related convictions</span></li>
            <li><span>Housing as a human right for everyone in our community</span></li>
          </ul>
          To learn more about how these programs are possible, and how they'll help our community, check
          out these <Link to={"resources"}>articles and resources.</Link>
        </p>
      </div>
      <HeroImage bgImage={bgLarge}>
        <h1>Our Mission</h1>
        <p>
          We envision a Dane County where restorative justice and the health of the community 
          are prioritized over incarceration and punishment
        </p>
      </HeroImage>
      <div className="summary">
        <h1>Coalition Building</h1>
        <p>
          Derail the Dane County Jail is just getting started! If you're interested in joining the fight 
          for a Dane County where restorative justice and community health are prioritized over 
          incarceration and punishment, please consider <Link to="get_involved">joining the campagin!</Link>
        </p>
      </div>
      <HeroImage bgImage={yardSign} innerStyle={{justifyContent:'center'}}>
        <Button component={Link} to="/get_involved" variant="contained">Get Involved!</Button>
      </HeroImage>
    </div>
  )
}