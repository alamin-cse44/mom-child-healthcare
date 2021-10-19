import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import login from '../../assets/icons/login.jpg';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    console.log('came from ', location.state?.from);
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
           history.push(redirect_uri);
        })
    }

    // email and password login
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const auth = getAuth();

    const handleSignIn = e =>{
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
          signInWithEmailAndPassword(auth,email,password)
          .then(result =>{
              const user = result.user;
              console.log(user);
              history.push(redirect_uri);
              setError('');
          })
          .catch(error =>{
              setError(error.message);
          })
    }

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
    
    const handleResetPassword = () =>{
        sendPasswordResetEmail(auth,email)
        .then(result => {

        }).catch(error =>{
            setError(error.message);
        })
    }

    return (
        <div className="container">
            <h2 className="text-center mt-2">Please Login</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            <div className="col m-auto">
                <div className="card h-100 card-bg text-center shadow">
                <img src={login} className="card-img-top w-25 rounded-circle m-auto p-1" alt="..."/>
                <div className="card-body p-5">

                <form onSubmit={handleSignIn}>
                    <input onBlur={handleEmailChange} className="w-100 rounded-pill" type="email" name="email" id="" placeholder="Your Email" required/>
                    <br /> <br />
                    <input onBlur={handlePasswordChange} className="w-100 rounded-pill" type="password" name="password" id="" placeholder="Your Password" required/>
                    <br /><br />
                    <div className='text-danger'>{error}</div>
                    <input className="rounded p-1 w-75 bg-success text-light fw-5 mb-2" type="submit" value="Login" />
                      {/* <button className="rounded p-1 w-75 bg-success text-light fw-5">Register</button> */}
                    </form>
                    <button 
                    onClick={handleResetPassword}
                    className="rounded p-1 w-75 bg-primary text-light fw-5 mb-2">Reset Password</button> <br />
                    <button 
                    onClick={handleGoogleLogin}
                    className="rounded p-1 w-75 bg-success text-light fw-5">Sign in with Google</button>
                </div>
                <div className="">
                    <p className="text-center">Are you new on this? <Link to="/register">Create an Account?</Link> </p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;