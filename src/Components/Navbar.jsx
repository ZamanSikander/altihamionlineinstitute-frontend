import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import haris_logo from '../assets/haris_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  const courses = [
    { id: 1, name: 'Noorani Qaida With Tajweed' },
    { id: 2, name: 'Nazra Quran With Tajweed' },
    { id: 3, name: 'Hifz Quran With Tajweed' },
    { id: 4, name: 'Tajweed & Qirat Complete Course' },
    { id: 5, name: 'Basic Islamic information' },
    { id: 6, name: 'Ahadees Course'}
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={haris_logo} alt="Logo" className="h-38 w-auto" />
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-black hover:text-gray-600 transition">Home</Link>

            <div
              className="relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button className="text-black hover:text-gray-600 flex items-center transition">
                Courses
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.25 6.75L10 11.5l4.75-4.75" />
                </svg>
              </button>
              {isCoursesOpen && (
                <div className="absolute bg-white border border-gray-200 rounded shadow-md mt-0 py-2 w-48">
                  {courses.map(course => (
                    <Link
                      key={course.id}
                      to={`/courses/${course.id}`}
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/registration" className="text-black hover:text-gray-600 transition">Registration</Link>
            <Link to="/fee-charts" className="text-black hover:text-gray-600 transition">Fee Charts</Link>
            <Link to="/contact" className="text-black hover:text-gray-600 transition">Contact</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-black hover:bg-gray-100">Home</Link>

          <div className="border-t border-gray-200">
            <button
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              className="w-full text-left px-4 py-3 text-black hover:bg-gray-100 flex justify-between"
            >
              Courses
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.25 6.75L10 11.5l4.75-4.75" />
              </svg>
            </button>
            {isCoursesOpen && (
              <div className="pl-4">
                {courses.map(course => (
                  <Link
                    key={course.id}
                    to={`/courses/${course.id}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-black hover:bg-gray-100"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/registration" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-black hover:bg-gray-100">Registration</Link>
          <Link to="/fee-charts" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-black hover:bg-gray-100">Fee Charts</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-black hover:bg-gray-100">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
