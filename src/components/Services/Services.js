import React, { useEffect, useState } from 'react';
import ShowServices from '../ShowServices/ShowServices';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setServices(data));
    } ,[])

    return (
        <div className='container mt-5'>
            <h2 className="text-center">Our Services</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
               {
                 services.map(service => <ShowServices 
                 key={service.code}
                 service={service}
                 ></ShowServices>)
               }
            </div>
        </div>
    );
};

export default Services;