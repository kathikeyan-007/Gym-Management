import React from 'react'
import g3 from '../assets/g3.jpg'
const about = () => {
  return (
    <div>
      <div class="relative w-screen h-screen overflow-hidden">
  <img src={g3} alt="loading" class="w-full h-full object-cover" />
  
  <div   class="absolute right-12 top-1/2 transform -translate-y-1/2 p-8 max-w-lg bg-white bg-opacity-90 rounded-2xl shadow-2xl border border-gray-200">
    <h2  data-aos='fade-left' class="text-4xl font-extrabold text-gray-800 mb-4 leading-tight">Transform Your Space Into a World-Class Fitness Zone</h2>
    <p  data-aos='fade-right'class="text-xl text-gray-700 mb-4">
      It could be the start of a journey into the world of fitness or a layout plan for an in-house fitness studio that a corporate, apartment, or hotel requires. It could be that your space is too cramped for a gym or there’s a need for professional trainers at your gym.
    </p>
    <p  data-aos='fade-left' class="text-xl text-gray-700">
      At Acme Fitness, we have the solutions that create a perfectly functional fitness center. We enable a 360° revamp of your space into a unique and fully operational fitness center equipped with best-in-class equipment and services.
    </p>
  </div>
</div>
    </div>
  )
}

export default about