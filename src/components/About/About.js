import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import about1 from '../../assets/about/successful-medical-team.jpg';
import about2 from '../../assets/about/5569409.jpg';
import about3 from '../../assets/about/newborn.jpg';
import './About.css';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const About = () => {
    const element = <FontAwesomeIcon icon={faArrowAltCircleRight} />
    return (
        <div className='mt-5 container'>
            <div className='row text-align'>
                <div className='col-lg-6 mb-3'>
                  <h2><span className='text-warning'>Health Care</span> <br /> For Mom and Child</h2>
                  <ul>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem ipsum dolor sit amet.</li>
                  </ul>
                  <Link className='link1 fs-5' to='/services'>Checkout Our Service {element}</Link>
                </div>
                <img className='img-fluid col-lg-6' src={about1} alt="" />
            </div>

            <h2 className='text-warning text-center mt-5'>What Doctor Says</h2>
            <div className="row mt-3 text-align">  
                <img src={about2} className='img-fluid col-lg-6 mb-2' alt="" />
                <div className='col-lg-6 bg-success p-5 text-light'>
                <h2><span className='text-warning'>Health Care</span> <br /> For Pragnet Women</h2>
                <ul>
                    <li>Although the overall risk of severe illness is low, pregnant people and recently pregnant people are at an increased risk for severe illness from COVID-19 when compared to non-pregnant people.</li>
                    <li>Having certain underlying medical conditions, and other factors, including age, can further increase a pregnant or recently pregnant (for at least 42 days following end of pregnancy) person’s risk for developing severe COVID-19 illness.</li>
                    <li>Pregnant people with COVID-19 are also at increased risk for preterm birth (delivering the baby earlier than 37 weeks) and might be at increased risk for other poor pregnancy outcomes.</li>
                </ul>
                <Link className='link1 fs-5 text-light' to='/services'>Checkout Our Service {element}</Link>
                </div>
            </div>

            <div className='mg'>
            <div className='row text-align'>
                <div className='col-lg-6 mb-3'>
                  <h2><span className='text-warning'>Health Care</span> <br /> For New Born Child</h2>
                  <ul>
                      <li>You take the ill newborn to the pediatrician immediately, or to the nearest hospital if the pediatrician’s office is closed.</li>
                      <li>Newborns dehydrate very quickly, so if the infant is running a fever, not feeding, vomiting or having diarrhea, the infant must be examined by a physician as soon as possible. Once the newborn is home again, all care instructions from the physician must be followed. Any changes/worsening of symptoms must be reported to the physician immediately.</li>
                      <li>Follow-up care is also very important. Keep follow-up appointments with the pediatrician.</li>
                  </ul>
                  <Link className='link1 fs-5' to='/services'>Checkout Our Service {element}</Link>
                </div>
                <img className='img-fluid col-lg-6 rounded' src={about3} alt="" />
            </div>
            </div>
            
        </div>
    );
};

export default About;