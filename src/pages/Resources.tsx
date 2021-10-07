import bgLarge from '../img/bg_large.jpg';
import bgLarge2 from '../img/bg_large2.jpg';
import yardSign from '../img/yardSign.jpg';
import jailDemographics from '../img/jail_demographics.png';
import { Link } from 'react-router-dom';
import HeroImage from '../components/HeroImage';

export default ({...props}) => {
  return (
    <div className="Content Resources">
      <div className="summary">
        <h1>Resources</h1>
      </div>
      <HeroImage bgImage={yardSign} style={{ minHeight:'240px' }} />
      <div className="summary">
        {/** Todo maybe generate this dynamically? No real reason to at the moment */}
        <h2>Articles and Resources</h2>
        <div className="flex-row sm-col">

        </div>
      </div>
      <HeroImage bgImage={bgLarge} />

    </div>
  )
}