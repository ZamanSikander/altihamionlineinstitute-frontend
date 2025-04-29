import React from 'react';
import { Link } from 'react-router-dom';
import hero_img from '../assets/hero_img.webp';

const Hero = () => {
  return (
    <div className="relative h-[600px] w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={hero_img}
          alt="Quran Learning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-yellow-500/20" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="max-w-3xl text-white text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold my-8 text-yellow-400">
            Al-Tihami Institute - Learn Quran Online 
          </h2>
         <div>
            <p className='md:text-5xl text-2xl my-2'>خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ</p>
         </div>
          <p className="text-lg md:text-xl mb-4 text-gray-200 leading-relaxed italic">
            "The best among you (Muslims) are those who learn the Qur'an and teach it."
            <span className="block text-sm mt-2">Sahih al-Bukhari</span>
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
            Join our online Quran academy and embark on a journey of spiritual growth with certified teachers, interactive lessons, and flexible schedules—anytime, anywhere.
          </p>
          <Link
            to="/registration"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            📌 Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;