import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import h1 from '../assets/h1.jpg'; // Ensure the path to the image is correct

const HomeFit = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    // Create a GSAP timeline
    const t1 = gsap.timeline();

    t1.fromTo(imgRef.current, 
      { opacity: 0, x: -1000, ease: 'power1.in' }, 
      { opacity: 1, x: 0, duration: 2, ease: 'power1.inOut' } 
    );

    // Optional cleanup
    return () => {
      t1.kill(); // Stop animations if the component unmounts
    };
  }, []); 

  return (
    <div>
      <div>
        <img 
          ref={imgRef} 
          src={h1} 
          alt='Promotional banner for our autumn sale' 
          className='h-full w-full' 
        />
      </div>
    </div>
  );
};

export default HomeFit;
