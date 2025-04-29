import React from 'react'
import hero_img from '../assets/hero_img.webp';
const Course1Hero = () => {
  return (
    <div
    className="relative h-dvh flex items-center justify-center text-center"
    style={{
      backgroundImage: `url(${hero_img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/80"></div>

    {/* Golden overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-yellow-500/10 to-yellow-600/20"></div>

    {/* Content */}
    <div className="relative z-10 max-w-2xl px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 drop-shadow-lg mb-4">
      Master Quranic Reading with Noorani Qaida and Tajweed
      </h1>
      <p className="text-lg text-gray-300 mb-6">
      Start your Quran journey with our structured Noorani Qaida course—designed to teach correct pronunciation and Tajweed from the very beginning.
      </p>
      <a
        href="/contact"
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-full transition duration-300 shadow-lg hover:shadow-yellow-500/20"
      >
        👉 Start Learning Today
      </a>
    </div>
  </div>
  )
}

export default Course1Hero