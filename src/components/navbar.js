import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/icon3.png';
import Footer from './footer';

const Nav = () => {
  return (
    <>
      <div className='flex sticky justify-between items-center px-10 py-5 bg-black navbar-fixed-top'>
        <div className='flex gap-5 items-center'>
          <Link to="/"> 
            <img src={logo} alt='loading' className='h-10 w-50 ml-5' />
          </Link>
        </div>
        <div className="flex justify-end">
          <ul className="flex space-x-10">
            <li className="navitem text-netflix poiret-one-regular1">
              <Link to="home">Home</Link>
            </li>
            <li className="navitem text-netflix poiret-one-regular1">
              <Link to="gymfit">Gym Fit</Link>
            </li>
            <li className="navitem text-netflix poiret-one-regular1">
              <Link to="homefit">Home Fit</Link>
            </li>
            <li className="navitem text-netflix poiret-one-regular1">
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='content-wrapper'>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Nav;
