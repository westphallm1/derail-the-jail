import bgLarge from '../img/bg_large.jpg';
import bgLarge2 from '../img/bg_large2.jpg';
import yardSign from '../img/yardSign.jpg';
import jailDemographics from '../img/jail_demographics.png';
import { Link } from 'react-router-dom';
import HeroImage from '../components/HeroImage';
import { useEffect } from 'react';
import { setPageTitle } from '../app/utils';
import ResourceInfo from '../components/ResourceInfo';
import { FaChartLine, FaDollarSign, FaChartArea, FaChartBar, FaHospital, FaHospitalAlt, FaToolbox, FaCashRegister, FaBroadcastTower } from 'react-icons/fa';
import { GiHandcuffs, GiHeartBeats, GiInjustice } from 'react-icons/gi';

export default ({...props}) => {
  useEffect(()=>setPageTitle("Resources"),[]);

  return (
    <div className="Content Resources">
      <div className="summary">
        {/** Todo maybe generate this dynamically? No real reason to at the moment */}
        <h1 style={{textAlign:'center'}}>Articles and Resources</h1>
        <h2>The Cost of the Jail</h2>
        <div className="flex-row sm-col">
          <ResourceInfo
            title="Consultants warn Dane County Jail project cost could increase substantially"
            summary={
              <span>
                In light of Pandemic-related construction costs, Dane County Executive 
                Joe Parisi prepares to re-evaluate the project timeline and consider
                initiatives to reduce jail population.
              </span>
            }
            icon={<FaDollarSign/>}
            url="https://madison.com/ct/news/local/govt-and-politics/jail-consultants-warn-dane-county-148-million-project-cost-could-be-substantially-higher/article_81b1d90a-ce00-561f-9e36-a23f4ce592ab.html"
          />
          <ResourceInfo
            title="Study finds Black people incarcerated in Dane Co. at twice national rate"
            summary={
              <span>
                Though Dane County has a low jail incarceration rate when compared to the national rate, 
                the incarceration rate for Black residents is more than twice the national incarceration rate, 
                according to a JFA Institute report.
              </span>
            }
            icon={<GiHandcuffs/>}
            url="https://www.nbc15.com/2021/05/28/black-people-incarcerated-twice-as-much-in-dane-co-than-nationally-study-finds/"
          />
        </div>
        <div className="flex-row sm-col">
          <ResourceInfo
            title="Crime Wave Hysteria vs. Reality"
            summary={
              <span>
                Claims that Madison is currently suffering from a major crime surge are not supported by data.
                Meanwhile, the city police budget continues to surge unabated.
              </span>
            }
            icon={<FaChartLine/>}
            url="https://redmadison.com/2020/12/16/crime-wave-hysteria-vs-reality/"
          />
          <ResourceInfo
            title="Pandemic Proves Lower Jail Populations Possible"
            summary={
              <span>
                Reducing the Jail population is a priority, even for law enforcement officials.
                Amid limits on crowding imposed by the COVID-19 Pandemic, the county was able to reduce 
                the jail population by nearly 30%.
              </span>
            }
            icon={<FaChartBar/>}
            url="https://redmadison.com/2020/12/16/crime-wave-hysteria-vs-reality/"
          />
        </div>
      </div>
      <HeroImage bgImage={yardSign} />
      <div className="summary">
        <h2>Alternatives to Imprisonment</h2>
        <div className="flex-row sm-col">
          <ResourceInfo
            title="Community Alternative Response Emergency Services"
            summary={
              <span>
                CARES will serve as a city-funded mental health outreach team. Facilitated through the main 911 
                call center, CARES teams will be dispatched for nonviolent calls like wellness checks, mental 
                health crises or drug and alcohol-related issues. The future of the program will depend on
                community feedback, as well as available funding.
              </span>
            }
            icon={<GiHeartBeats/>}
            url="https://patch.com/wisconsin/madison-wi/cares-pilot-program-what-you-should-know"
          />
          <ResourceInfo
            title="Dane Co. Announces $300,000 for Mental Health Center"
            summary={
              <span>
                Dane County residents experiencing mental health crises could be taken to a stabilization
                center instead of the county jail if an initiative planned for 2021 is successful. Such
                centers have proven to be important alternatives to jail across the country.
              </span>
            }
            icon={<FaHospital/>}
            url="https://madison.com/wsj/news/local/govt-and-politics/dane-county-announces-300-000-for-mental-health-crisis-center-an-alternative-to-jail/article_c64f45da-b04d-53a2-b04f-2859245ac071.html"
          />
        </div>
        <div className="flex-row sm-col">
          <ResourceInfo
            title="Dane Co. Explores Community Justice Center"
            summary={
              <span>
                A community-driven court, trauma-informed counseling, a clinic for addiction treatment, job training, 
                a school, youth court, free legal representation — all these programs and more could be part of Dane 
                County’s Community Justice Center, which is just starting to take form.
              </span>
            }
            icon={<FaHospitalAlt/>}
            url="https://madison.com/wsj/news/local/govt-and-politics/creating-a-more-fair-and-just-system-dane-county-explores-community-justice-center/article_89d49d5f-94ac-5b1a-ba6d-a2fca6f62eae.html"
          />
          <ResourceInfo
            title="Restorative Justice: The Dane County Restorative Court"
            summary={
              <span>
                A respondent is offered the opportunity to participate in the CRC if eligible and referred by a criminal 
                justice partner.  The respondent has to accept responsibility for their actions and be willing to participate 
                in the restorative justice process. CRC staff are not officers of the law, but rather  facilitators of a 
                Restorative Justice process.
              </span>
            }
            icon={<GiInjustice/>}
            url="https://www.dcdhs.com/Children-Youth-and-Family/Community-Restorative-Court"
          />
        </div>
      </div>
      <HeroImage bgImage={bgLarge} />
      <div className="summary">
        <h2>Prison Abolition Resources</h2>
        <div className="flex-row sm-col">
          <ResourceInfo
            title="The Myths that Prop Up Mass Incarceration"
            summary={
              <span>
                One of the most widespread myths is that prisons are necessary to keep communities safe. If this were
                true, then the United States, which currently imprisons 25% of the world's prison population, should
                be the safest country in the world. Learn this claim and other myths about prisons are used to 
                prop up the system.
              </span>
            }
            icon={<FaBroadcastTower/>}
            url="https://truthout.org/articles/to-end-mass-incarceration-we-need-to-bust-the-myths-that-prop-it-up/"
          />
          <ResourceInfo
            title="The Critical Resistance Abolition Toolkit"
            summary={
              <span>
                This toolkit was developed by members of Critical Resistance to consolidate ideas and 
                resources for understanding the Prison Industrial complex, and taking concrete steps 
                towards its abolition. 
              </span>
            }
            icon={<FaToolbox/>}
            url="http://criticalresistance.org/wp-content/uploads/2012/06/CR-Abolitionist-Toolkit-online.pdf"
          />
        </div>
        <div className="flex-row sm-col">
          <ResourceInfo
            title="Abolishing Cash Bail"
            summary={
              <span>
                Reducing the impact of pretrial punishment systems such as cash bail is an important step towards 
                abolishing the Prison Industrial Complex. This toolkit from Critical Resistance contains resources
                for organizing to oppose punitive pretrial measures.
              </span>
            }
            icon={<FaCashRegister/>}
            url="http://criticalresistance.org/on-the-road-to-freedom-an-abolitionist-assessment-of-pretrial-and-bail-reforms/"
          />
          <ResourceInfo
            title="How to Stop a Jail in Your Town"
            summary={
              <span>
                <em>How to Stop a Jail in Your Town</em> is a compilation of general prison abolitionist resources. 
                It contains guides and fact sheets related to the impact of the prison industrial complex, as well
                as organizing instructions for opposing local prison expansions.
              </span>
            }
            icon={<GiInjustice/>}
            url="http://curbprisonspending.org/wp-content/uploads/2013/09/How-to-Stop-a-Jail-in-Your-Town-Final.pdf"
          />
        </div>
      </div>
      <HeroImage bgImage={bgLarge2} />
    </div>
  )
}