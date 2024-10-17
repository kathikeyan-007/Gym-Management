import React from 'react';
import icon from '../assets/icon2.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import 'aos/dist/aos.css'
const Footer = () => {
  return (
    <div className='bg-black text-white py-8 '  >
      <div className='container mx-auto px-6'>
        <div className='flex items-center mb-8 ' >
          <img src={icon} alt='Company Icon' className='h-10 w-auto ml-10' />
        </div>
        <div className='flex flex-wrap gap-8 space-x-36 p-10 ' data-aos="zoom-in-up">
          {/* Our Product */}
          <div className='flex flex-col space-y-4'>
            <h2 className='text-netflix text-lg font-semibold border-b border-gray-700 pb-2'>OUR PRODUCT</h2>
            <ul className='space-y-2'>
              {['HOME FITNESS', 'TREADMILLS', 'EXERCISE BIKES', 'FUNCTIONAL TRAINER', 'STRENGTH', 'AQUA', 'ROWER', 'ACCESSORIES'].map((item) => (
                <li key={item}>
                  <a href='#' className='block text-gray-300 no-underline hover:text-netflix hover:font-bold transition-all duration-300'>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands We Handle */}
          <div className='flex flex-col space-y-4'>
            <h2 className='text-netflix text-lg font-semibold border-b border-gray-700 pb-2'>BRANDS WE HANDLE</h2>
            <ul className='space-y-2'>
              {['REEBOK', 'KAESUN', 'PROIRON', 'ACCUNIQ', 'FIRM', 'SNAILCLE'].map((item) => (
                <li key={item}>
                  <a href='#' className='block text-gray-300 no-underline hover:text-netflix hover:font-bold transition-all duration-300'>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className='flex flex-col space-y-4'>
            <h2 className='text-netflix text-lg font-semibold border-b border-gray-700 pb-2'>USEFUL LINKS</h2>
            <ul className='space-y-2'>
              {['About Us', 'Blogs', 'FAQ\'s', 'Shipping & Return & Cancellation', 'Terms and Conditions', 'Contact Us', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href='#' className='block text-gray-300 no-underline hover:text-netflix hover:font-bold transition-all duration-300'>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className='flex flex-col space-y-4'>
            <h2 className='text-netflix text-lg font-semibold border-b border-gray-700 pb-2'>GET IN TOUCH</h2>
            <ul className='space-y-2'>
              <li><span>Telephone: +91 92443 36666</span></li>
              <li><span>Email: <a href='mailto:info@welcarefitness.com' className='text-gray-300 no-underline hover:text-netflix hover:font-bold transition-all duration-300'>info@welcarefitness.com</a></span></li>
            </ul>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className='mt-8 flex justify-center gap-6' >
          <a href='#' className='text-gray-300 no-underline hover:text-blue-500 transform hover:scale-150 transition-transform duration-300'><FaFacebook size={24} /></a>
          <a href='#' className='text-gray-300 no-underline hover:text-blue-400 transform hover:scale-150 transition-transform duration-300'><FaTwitter size={24} /></a>
          <a href='#' className='text-gray-300 no-underline hover:text-pink-500 transform hover:scale-150 transition-transform duration-300'><FaInstagram size={24} /></a>
          <a href='#' className='text-gray-300 no-underline hover:text-blue-700 transform hover:scale-150 transition-transform duration-300'><FaLinkedin size={24} /></a>
        </div>
        
        {/* Copyright Notice */}
        <div  className='mt-8 text-center text-gray-400'>
          <p className='text-lg text-netflix'>© 2024 WELCARE. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
