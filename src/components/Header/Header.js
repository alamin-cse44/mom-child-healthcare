import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/slider/preview.jpg';
// import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid container">
                <Link to='/'   className="navbar-brand">
                <img src={logo} alt="" width="120" height="80"/>
                  </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page"><NavLink className="a" to="/">Home</NavLink> </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" ><NavLink className="a" to="/services">Services</NavLink> </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" ><NavLink className="a" to="/about">About us</NavLink> </a>
                        </li>

                        <li className="nav-item">
                        {user.email && <span>Hi, {user.displayName}</span>}    
                        {
                            user.email ? 
                            <button className="mt-2" onClick={logOut}>logout</button>
                            :<a className="nav-link active" aria-current="page" ><NavLink className="a" to="/login">Login</NavLink> </a>
                        }
                        </li>
                        
                    </ul>
                    </div>
                </div>
                </nav>
        </div>
    );
};

export default Header;