import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Ahadees = () => {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate("/registration")
    }
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn the Wisdom of Prophet Muhammad (PBUH) Through Authentic Hadiths</h1>
            <p className="text-xl mb-8">Explore core Hadiths with deep understanding and practical lessons.</p>
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300" onClick={handleClick}>
              Start Learning Now
            </button>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Course Overview</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            This course introduces learners to authentic Ahadees from books like Bukhari, Muslim, Tirmidhi, and more. 
            Students will understand the context, translation, and implementation of each Hadith.
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-500 mb-8">What You'll Learn</h2>
          <div className="max-w-2xl">
            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Introduction to Hadith sciences
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Selected Hadiths with explanation
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Moral and ethical lessons
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Application in daily life
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-500 mb-12 text-center">Course Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Daily/weekly Hadith lessons</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Discussion and Q&A sessions</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Notes and references provided</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Certificate of Participation</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Course Is For */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-500 mb-12 text-center">Who This Course Is For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Youth and adults interested in Hadith study</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Islamic students and teachers</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Anyone wanting to enrich their faith</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Course Duration & Schedule */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-500 mb-12 text-center">Course Duration & Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Duration</h4>
              <p className="text-gray-600">3 to 6 months</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Classes</h4>
              <p className="text-gray-600">2–3 sessions/week</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Timing</h4>
              <p className="text-gray-600">Flexible timings available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-500 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Authentic references from Hadith collections</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Engaging and practical teaching methods</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Focus on real-life application</h4>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Ahadees