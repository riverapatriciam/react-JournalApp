import React from 'react';
import { NavLink } from 'react-router-dom';

export const RegisterScreen = () => {
  
    return (
        <div>
            <h3 className='auth__title'>Sign In</h3>
            <form>
                <input
                    type="text"
                    placeholder='Name'
                    name='name'
                    className='auth__input'
                    autoComplete='off'
                />
                <input
                    type="text"
                    placeholder='Email'
                    name='email'
                    className='auth__input'
                    autoComplete='off'
                />
                <input
                    type="password"
                    placeholder='Password'
                    name='password'
                    className='auth__input'
                />
                <input
                    type="password"
                    placeholder='Confirm password'
                    name='password2'
                    className='auth__input'
                />
                <button type='submit' className='btn btn-primary btn-block mb-5'>
                    Login
                </button>

                     
                <NavLink to="/auth/login" className='link'>Alredy registered?</NavLink>

            </form>
        </div>
    )
}