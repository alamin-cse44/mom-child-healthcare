import { setPersistence } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import login from '../../assets/icons/login.jpg';
import './Register.css';
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";

const Register = () => {
    
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const location = useLocation();
    const history = useHistory();
    console.log('came from ', location.state?.from);
    const redirect_uri = location.state?.from || '/home';

    const auth = getAuth();

    const handleRegistration = e =>{
        e.preventDefault();
          console.log(email, password);
          if(password.length < 6){
              setError('Password should be at least 6 Character');
              return;
          }
          if(!/(?=.*?[A-Z])/.test(password)){
              setError('Password must contain one upper case')
              return;
          }
          createUserWithEmailAndPassword(auth,email,password)
          .then(result =>{
              const user = result.user;
              console.log(user);
              history.push(redirect_uri);
              setError('');
              setUserName();
          })
          .catch(error =>{
              setError(error.message);
          })
    }

    const setUserName = () =>{
        updateProfile(auth.currentUser, {displayName:name})
        .then(result =>{})
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    return (
        <div className="container">
            <h2 className="text-center mt-2">Please Register</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            <div className="col m-auto">
                <div className="card h-100 card-bg text-center shadow">
                <img src={login} className="card-img-top w-25 rounded-circle m-auto p-1" alt="..."/>
                <div className="card-body p-5">

                    <form onSubmit={handleRegistration}>
                    <input onBlur={handleNameChange} className="w-100 rounded-pill mb-2" type="text" name="name" id="" placeholder="Enter Your Name" required/>

                    <input onBlur={handleEmailChange} className="w-100 rounded-pill mb-2" type="email" name="email" id="" placeholder="Your Email" required/>
                    <input onBlur={handlePasswordChange} className="w-100 rounded-pill" type="password" name="password" id="" placeholder="Your Password" required/>
                    <br /><br />
                    <div className='text-danger'>{error}</div>
                    <input className="rounded p-1 w-75 bg-success text-light fw-5" type="submit" value="Register" />
                      {/* <button className="rounded p-1 w-75 bg-success text-light fw-5">Register</button> */}
                    </form>
                    <br />
                    <button className="rounded p-1 w-75 bg-success text-light fw-5">Sign in with Google</button>
                </div>
                <div className="">
                    <p className="text-center">Already have an account? <Link className='decoration' to="/login"> Login</Link> </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Register;