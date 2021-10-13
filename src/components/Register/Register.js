import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='login-form'>
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input className='login-input' type="text" placeholder='User name' />
                    <br />
                    <input className='login-input' type="email" placeholder='email' />
                    <br />
                    <input className='login-input' type="password" name="" id="" placeholder='password' />
                    <br />
                    <input className='login-input' type="password" name="" id="" placeholder='resubmit-password' />
                    <br />
                    <input className='login-input' type="submit" value="submit" />
                </form>
                <p>Already have an account? <Link to='/login'>Log in</Link></p>
            </div>
        </div>
    );
};

export default Register;