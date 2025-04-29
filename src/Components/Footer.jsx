import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import haris_logo from '../assets/haris_logo_1.png';

const Footer = () => {
    const courses = [
        { id: 1, name: 'Noorani Qaida With Tajweed' },
        { id: 2, name: 'Nazra Quran With Tajweed' },
        { id: 3, name: 'Hifz Quran With Tajweed' },
        { id: 4, name: 'Tajweed & Qirat Complete Course' },
        { id: 5, name: 'Basic Islamic information' },
        { id: 6, name: 'Ahadees Course' }
    ];

    const socialLinks = [
        { icon: <FaFacebook className="w-6 h-6" />, url: 'https://facebook.com' },  
        { icon: <FaInstagram className="w-6 h-6" />, url: 'https://instagram.com' },
        { icon: <FaYoutube className="w-6 h-6" />, url: 'https://youtube.com' }
    ];

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and About */}
                    <div className="flex flex-col items-start">
                        <Link to="/" className="mb-4">
                            <img src={haris_logo} alt="Logo" className="h-32 w-auto " />
                        </Link>
                        <p className="text-gray-400 text-sm">
                            Empowering students worldwide with quality Quranic education through online learning.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white text-sm transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/registration" className="text-gray-400 hover:text-white text-sm transition">
                                    Registration
                                </Link>
                            </li>
                            <li>
                                <Link to="/fee-charts" className="text-gray-400 hover:text-white text-sm transition">
                                    Fee Charts
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Courses</h3>
                        <ul className="space-y-2">
                            {courses.map(course => (
                                <li key={course.id}>
                                    <Link 
                                        key={course.id}
                                        to={`/courses/${course.id}`}
                                        className="text-gray-400 hover:text-white text-sm transition"
                                    >
                                        {course.name}
                                    </Link>
                                   
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4 mb-6">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <div className="text-sm text-gray-400">
                            <p className="mb-2">Email: qarimuhammadharis54@gmail.com</p>
                            <p>Phone: +92-310-6234055</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm text-gray-400 mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} Quran Academy. All rights reserved.
                        </div>
                        <div className="flex space-x-6">
                            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition">
                                Privacy Policy
                            </Link>
                            <Link to="/terms-services" className="text-gray-400 hover:text-white text-sm transition">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
  