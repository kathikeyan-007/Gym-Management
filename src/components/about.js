import React, { useEffect } from 'react';
import g3 from '../assets/g3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTools, FaDumbbell, FaUsers, FaHeartbeat, FaRunning, FaWeightHanging, FaStar, FaUser, FaUniversity, FaGithub, FaBuilding } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-screen h-screen overflow-hidden">
        <img src={g3} alt="Fitness" className="w-full h-full object-cover" />
        
        <div className="absolute right-12 top-1/2 transform -translate-y-1/2 p-8 max-w-lg bg-black bg-opacity-80 rounded-2xl shadow-2xl border border-gray-700">
          <h2 data-aos="fade-left" className="text-4xl font-extrabold text-white mb-4 leading-tight">
            Transform Your Space Into a World-Class Fitness Zone
          </h2>
          <p data-aos="fade-right" className="text-xl text-gray-300 mb-4">
            It could be the start of a journey into the world of fitness or a layout plan for an in-house fitness studio that a corporate, apartment, or hotel requires. It could be that your space is too cramped for a gym or there’s a need for professional trainers at your gym.
          </p>
          <p data-aos="fade-left" className="text-xl text-gray-300">
            At Acme Fitness, we have the solutions that create a perfectly functional fitness center. We enable a 360° revamp of your space into a unique and fully operational fitness center equipped with best-in-class equipment and services.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 data-aos="zoom-in" className="text-3xl font-extrabold text-red-600 mb-6">Our Mission</h2>
          <div className="flex justify-center mb-6">
            <FaHeartbeat className="h-16 w-16 text-red-600" />
          </div>
          <p data-aos="fade-up" className="text-xl text-gray-300">
            Our mission is to empower individuals and organizations by providing them with the resources, expertise, and space to achieve their fitness goals. We believe that fitness should be accessible, functional, and tailored to each person’s unique needs. Whether you're starting a fitness journey or revamping your facility, we're here to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-red-600 text-center mb-10">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-aos="flip-left" className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition duration-300">
              <FaTools className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Expert Consultation</h3>
              <p className="text-xl text-gray-300">
                Our expert team offers personalized consultation to help you design and create the perfect fitness space based on your needs.
              </p>
            </div>
            <div data-aos="flip-left" className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition duration-300">
              <FaDumbbell className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Top-of-the-Line Equipment</h3>
              <p className="text-xl text-gray-300">
                We provide high-quality, durable, and cutting-edge fitness equipment that can cater to all types of fitness enthusiasts.
              </p>
            </div>
            <div data-aos="flip-left" className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition duration-300">
              <FaUsers className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Flexible Solutions</h3>
              <p className="text-xl text-gray-300">
                Whether you're a small gym or a large facility, our solutions are adaptable and scalable to suit your space and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-red-600 mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Testimonial 1 */}
            <div data-aos="zoom-in" className="bg-gray-800 p-8 rounded-xl shadow-lg relative">
              <FaStar className="absolute top-4 right-4 text-yellow-500 text-3xl" />
              <p className="text-xl text-gray-300 italic mb-4">"Acme Fitness transformed our gym into a modern, functional, and motivational space. Our clients love the new setup!"</p>
              <div className="flex items-center justify-center space-x-3">
                <FaUser className="text-white text-2xl" />
                <p className="text-lg font-semibold text-white">John Doe</p>
              </div>
              <p className="text-sm text-gray-400 mt-2">Gym Owner</p>
            </div>
            {/* Testimonial 2 */}
            <div data-aos="zoom-in" className="bg-gray-800 p-8 rounded-xl shadow-lg relative">
              <FaStar className="absolute top-4 right-4 text-yellow-500 text-3xl" />
              <p className="text-xl text-gray-300 italic mb-4">"Thanks to Acme Fitness, our corporate wellness program has never been more successful. The custom-built fitness area is a huge hit with our employees!"</p>
              <div className="flex items-center justify-center space-x-3">
                <FaBuilding className="text-white text-2xl" />
                <p className="text-lg font-semibold text-white">Jane Smith</p>
              </div>
              <p className="text-sm text-gray-400 mt-2">Corporate Wellness Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="bg-gray-900 text-white py-6 text-center">
        <div className="flex flex-col items-center">
          {/* Developer Name */}
          <div className="flex items-center space-x-3 mb-4">
            <FaUser className="text-3xl text-red-600" />
            <p className="text-lg font-bold text-white">
              Karthikeyan C
            </p>
          </div>
          
          {/* College Section */}
          <div className="flex items-center space-x-3 mb-4">
            <FaUniversity className="text-3xl text-red-600" />
            <p className="text-sm text-gray-400">
               22ITR042, Kongu Engineering College
            </p>
          </div>
          
          {/* GitHub Profile */}
          <div className="flex items-center space-x-3 mt-4">
            <FaGithub className="text-3xl text-gray-400 hover:text-red-600 transition-all duration-300" />
            <a href="https://github.com/kathikeyan-007" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-red-600 transition-all duration-300">
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
