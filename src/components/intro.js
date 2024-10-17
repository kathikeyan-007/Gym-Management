import React, { useEffect, useRef } from 'react';
import img from '../assets/home.jpg';
import gsap from 'gsap';
import img1 from '../assets/hi1.png';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';

const Intro = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline();

    t1.fromTo(
      imgRef.current,
      { opacity: 0, x: 1000, ease: 'power1.in' },
      { opacity: 1, x: 0, duration: 1, ease: 'power1.inOut' }
    );
  }, []);
  

  return (
    <div className="relative w-screen h-screen overflow-hidden flex">
      <img
        ref={imgRef}
        src={img}
        alt="Description"
        className="object-cover w-full h-full"
      />
      <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="absolute right-10 bottom-24 transform -translate-y-1/2 p-8 text-center">
        <h1 className="poiret-one-regular font-bold text-6xl text-black mb-4 shadow-lg p-2 bg-opacity-50">
          Welcome to Our Gym!
        </h1>
        <p className="leading-6 pompiere-regular text-lg text-netflix mb-6 w-[100%] mx-auto">
          <span className="inline-block max-w-[70%]">Join us to achieve your fitness goals.</span>
          <span className="block mt-4">We offer a variety of workouts, personal training, and group classes.</span>
        </p>
        <Link to="home">
          <button className="bg-red-500 w-64 text-white font-bold py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-red-600 duration-300 text-lg text-center flex items-center justify-center mx-auto">
            <span className="mr-2 text-zinc-950">Get Started</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6l6 6-6 6" />
            </svg>
          </button>
        </Link>
      </div>
      <div className="absolute left-0 top-0">
        <img data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
          src={img1}
          alt="loading"
          className="wid"
        />
      </div>
    </div>
  );
};

export default Intro;
