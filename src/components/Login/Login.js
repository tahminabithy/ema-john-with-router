import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'
const Login = () => {
    const { user, googleSignin } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/shop'
    const handleGoogleLogin = () => {
        googleSignin()
            .then((result) => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Log in</h2>
                <form onSubmit="">
                    <input className='login-input' type="text" placeholder='email' />
                    <br />
                    <input className='login-input' type="password" name="" id="" placeholder='password' />
                    <br />
                    <input className='login-input' type="submit" value="submit" />
                </form>
                <p>New in ema-john? <Link to='/register'>Register</Link></p>
                <p>Or</p>
                <button onClick={handleGoogleLogin} className='btn-regular'>Sign in with Google</button>
            </div>
        </div>
    );
};

export default Login;