/* eslint-disable no-unused-vars */
import React from 'react';
import "./Header.css"
import {  NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <nav className='space-y-4 items-center text-center bg-sky-600 p-4'>
                <NavLink className=' p-3 bg-sky-800 text-white' to='/'>Home</NavLink>
                <NavLink className='p-3 bg-sky-800 text-white' to='/about'>About</NavLink>
                <NavLink className='p-3 bg-sky-800 text-white' to='/posts'>Posts</NavLink>
                <NavLink className='p-3 bg-sky-800 text-white' to='/contact'>Contact As</NavLink>
                <NavLink className='p-3 bg-sky-800 text-white' to='/service'>Service</NavLink>
                <NavLink className='p-3 bg-sky-800 text-white' to='/menu'>Menu</NavLink>
                <NavLink className='p-3 bg-sky-800 text-white' to='/user'>User</NavLink>
            </nav>
            <h2 className='text-2xl m-5'>This is a header section</h2>
        </div>
    );
};

export default Header;