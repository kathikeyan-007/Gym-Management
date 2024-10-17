import React from 'react';
import g2 from '../assets/g2.jpg';
import gy1 from '../assets/gy1.jpg';
import gy2 from '../assets/gy2.jpg';
import gy3 from '../assets/gy3.jpg';
import gy4 from '../assets/gy4.jpg';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s4 from '../assets/s4.jpg';
import s5 from '../assets/s5.jpg';
import s6 from '../assets/s6.jpg';
import s7 from '../assets/s7.jpg';
import s8 from '../assets/s8.jpg';

const Gymfit = () => {
  return (
    <div className="bg-black text-white">
      {/* Cardio Section */}
      <div className="p-10">
        <h2 className='text-center font-serif text-4xl mb-10 text-red-600'>CARDIO</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {[
            { img: gy1, title: "TREADMILL", price: "₹64,000" },
            { img: gy2, title: "ELLIPTICAL TRAINER", price: "₹72,000" },
            { img: gy3, title: "BIKES", price: "₹48,000" },
            { img: gy4, title: "NON-MOTORIZED", price: "₹56,000" }
          ].map(({ img, title, price }, index) => (
            <div key={index} className='flex flex-col items-center bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 p-4'>
              <img data-aos='fade-right' src={img} alt={title} className='h-48 w-48 object-cover rounded-md mb-2' />
              <h3 className='text-lg font-semibold'>{title}</h3>
              <p className='text-lg font-bold text-yellow-300'>{price}</p>
              <button className='mt-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700'>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Strength Section */}
      <div className="p-10">
        <h2 className='text-center font-serif text-4xl mb-10 text-red-600'>STRENGTH</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {[
            { img: s1, title: "PINLOADED", price: "₹40,000" },
            { img: s2, title: "PLATELOADED", price: "₹48,000" },
            { img: s3, title: "CROSS-FIT", price: "₹56,000" },
            { img: s4, title: "NON-MOTORIZED", price: "₹32,000" },
            { img: s5, title: "PILATES", price: "₹28,000" },
            { img: s6, title: "BENCHES", price: "₹36,000" },
            { img: s7, title: "ISOKINETIC", price: "₹64,000" },
            { img: s8, title: "MAVERICK BENCHES", price: "₹60,000" }
          ].map(({ img, title, price }, index) => (
            <div key={index} className='flex flex-col items-center bg-gray-800 rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 p-4'>
              <img data-aos='fade-right' src={img} alt={title} className='h-48 w-48 object-cover rounded-md mb-2' />
              <h3 className='text-lg font-semibold'>{title}</h3>
              <p className='text-lg font-bold text-yellow-300'>{price}</p>
              <button className='mt-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700'>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Promotional Section */}
      <div className="relative w-screen h-screen overflow-hidden">
        <img src={g2} alt="loading" className="w-full h-full object-cover" />
        <div className="absolute left-5 top-96 transform -translate-y-1/2 p-8">
          <div data-aos="fade-right" className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg text-center">
            <h1 className="text-9xl poiret-one-regular2 font-bold text-red-600 mb-4 leading-tight">Free Gym</h1>
            <h2 className="text-8xl poiret-one-regular2 font-bold text-red-600 mb-6 leading-tight">Setup Consultation</h2>
            <p className="text-3xl font-semibold text-yellow-300 italic">"Expert Advice Delivered Within 24 Hours."</p>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-48">
          <div data-aos="fade-left" className="w-72 max-w-md p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Contact Us</h2>
            <form>
              {["name", "email", "phone"].map((field) => (
                <div className="mb-4" key={field}>
                  <label htmlFor={field} className="block text-lg font-medium text-gray-700 capitalize">{field}</label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 sm:text-sm"
                    placeholder={`Your ${field}`}
                  />
                </div>
              ))}
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gymfit;
