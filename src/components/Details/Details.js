import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const {serviceID,name,description} = useParams()
    return (
        <div className='text-center mt-5'>
            <h2 className='text-center text-success mb-5'>The Service Details</h2>
            <div className="row row-cols-1 row-cols-md-2 row-col-lg-2 g-4 mt-3">
            <div className="col m-auto">
                <div className="card h-100 card-bg text-center shadow">
                
                <div className="card-body p-5">
                   <h2>id:{serviceID}</h2><br />
                    <h2 className='text-warning'>{name}</h2>
                    <p>{description}</p>
                </div>
                <div className="">
                    <p className="text-center"><Link to="/">Go Back</Link> </p>
                </div>
                </div>
            </div>
            </div>      
        </div>
    );
};

export default Details;