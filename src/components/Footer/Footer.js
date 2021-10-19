import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { faAmbulance, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const element = <FontAwesomeIcon icon={faAmbulance} />
    const element2 = <FontAwesomeIcon icon={faPhone} />
    return (
        <div className='bg-primary mt-5'>
            
            <div className='container p-5'>
            <div className='row text-light'>
               <div className ='col-lg-4 col-md-4 col-xs-6'>
                   
                   <div>
                       <h5 className='text-dark'>{element2}  Emergency Call</h5>
                       <p>+18201063-63</p>
                       <p>+17201035-35</p>
                   </div>
               </div>

               <div className ='col-lg-4 col-md-4 col-xs-6'>
                   
                   <div>
                       <h4 className='text-dark'>{element} Ambulance</h4>
                       <p>+7652245-052</p>
                       <p>+9685258-892</p>
                   </div>
               </div>

               <div className ='col-lg-4 col-md-4 col-xs-6'>
                   
                   <div className='link'>
                       <h4 className='text-dark'>Layouts</h4>
                       <Link className='layout' to='/home'><span>Home</span></Link>
                       <Link className='layout' to='/services'><span>Services</span></Link>
                       <Link className='layout' to='/about'><span>About us</span></Link>
                   </div>
               </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;