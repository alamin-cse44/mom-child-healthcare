import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import './ShowServices.css';

const ShowServices = (props) => {
    console.log(props.service);
    const {code,name,img,description} = props.service;
    const element = <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
    return (
        <div className="col mt-5">
            <div className="card h-100 text-center shadow rounded">
            <img src={img}  className="card-img-top w-75 p-2 m-auto rounded-circle" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            
                <NavLink to={`/details/${code}, ${name}, ${description}`} className="btn btn-primary px-2 fs-5">Enter {element}</NavLink>
            </div>
            </div>
        </div>
    );
};

export default ShowServices;