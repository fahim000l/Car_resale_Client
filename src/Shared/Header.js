import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    const navItems = <>
        <li><NavLink className={'font-bold text-black text-xl rounded-lg'} to={'/'}>Home</NavLink></li>
        <li><NavLink className={'font-bold text-black text-xl rounded-lg'} to={'/blog'}>Blog</NavLink></li>
        <li><NavLink className={'font-bold text-black text-xl rounded-lg'} to={'/products'}>Products</NavLink></li>
        <li><NavLink className={'font-bold text-black text-xl rounded-lg'} to={'/signin'}>Sign In</NavLink></li>
    </>


    return (
        <div className="navbar bg-violet-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <NavLink to={'/'} className="btn btn-ghost normal-case text-xl font-bold"><span className='bg-black px-5 py-2 rounded-lg text-white font-bold'>Car Resale</span> <span className='text-black text-3xl'>.com</span></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        navItems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink className="btn btn-outline text-black font-bold">Get started</NavLink>
            </div>
        </div>
    );
};

export default Header;