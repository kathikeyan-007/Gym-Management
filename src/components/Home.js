import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import img1 from '../assets/slide1.jpg';
import img2 from '../assets/slide2.jpg';
import img3 from '../assets/slide3.jpg';
import img4 from '../assets/a1.jpg';
import img5 from '../assets/m1.jpg';
import img6 from '../assets/tm1.jpg';
import img7 from '../assets/ep2.jpg';
import img8 from '../assets/gs.png';
import img9 from '../assets/sli1.jpg';
import img10 from '../assets/slide4.jpg';
import img11 from '../assets/slide5.jpg';

const images = [
  { url: img10 },
  { url: img2 },
  { url: img3 },
  { url: img9 },
  { url: img11 },
{ url: img1 }
];

const Home = () => {
  return (
    <div className='h-full w-full bg-black text-white'>
      <div className='mb-10'>
        <SimpleImageSlider
          width={1536}
          height={620}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={1}
        />
      </div>
      <div className='p-5 text-center font-serif font-semibold text-4xl mb-20'>
        <h1>Categories</h1>
      </div>
      <div className='flex justify-between items-center flex-wrap'>
        <div className='flex flex-col items-center h-80 w-80'>
          <img data-aos='fade-right' src={img4} alt="Accessories" className='h-60 w-60 object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 rounded-full' />
          <h3 className='mt-2 text-xl'>Accessories</h3>
        </div>
        <div className='flex flex-col items-center h-80 w-80'>
          <img data-aos='fade-right' src={img5} alt="Strength" className='h-60 w-60 object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 rounded-full' />
          <h3 className='mt-2 text-xl'>Strength</h3>
        </div>
        <div className='flex flex-col items-center h-80 w-80'>
          <img data-aos='fade-right' src={img6} alt="Tread Mill" className='h-60 w-60 object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 rounded-full' />
          <h3 className='mt-2 text-xl'>Tread Mill</h3>
        </div>
        <div className='flex flex-col items-center h-80 w-80'>
          <img data-aos='fade-right' src={img7} alt="Elliptical" className='h-60 w-60 object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110 rounded-full' />
          <h3 className='mt-2 text-xl'>Elliptical</h3>
        </div>
      </div>

      <h2 data-aos='fade-up' className='mt-32 mb-16 text-center font-serif font-semibold text-4xl text-netflix poiret-one-regular2'>Your Dream Gym Awaits:</h2>
      <div className='flex'>
        <img data-aos='fade-right' src={img8} alt="setup" className='ml-72 h-96 w-96 object-cover rounded-3xl' />
        <div className='flex-row m-15 mt-0 '>
          <div data-aos='fade-left' className="text-center py-10">
            <div className="flex flex-col items-center ">
              <h1 className="text-4xl md:text-5xl font-extrabold  ">
                Special Sale
              </h1>
              <h1 className="text-3xl  md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
                Up to 50% Off!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
