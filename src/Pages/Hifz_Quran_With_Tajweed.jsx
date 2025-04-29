import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Hifz_Quran_With_Tajweed = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Memorize the Holy Quran with Expert Guidance</h1>
            <p className="text-xl mb-8">A structured Hifz program with Tajweed & review sessions.</p>
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300" onClick={handleClick}>
              Start Your Hifz Journey
            </button>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Course Overview</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            This course is designed for students who want to memorize the entire Quran or selected Surahs. 
            We provide a structured memorization plan along with regular revision and Tajweed application.
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
                Memorization of Juz or full Quran
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Accurate Tajweed application
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Daily new lesson (Sabaq), review (Muraja'a), and revision (Manzil)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Time management and memorization techniques
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
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Personalized memorization plans</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Daily 1-on-1 sessions</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Dedicated Hifz teacher</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Regular testing and assessments</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Completion certificate</h4>
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
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Students with prior Tajweed knowledge</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Kids & adults with strong commitment to Hifz</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Those aiming to become Hafiz/Hafiza</h4>
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
              <p className="text-gray-600">Varies (1–3 years)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Classes</h4>
              <p className="text-gray-600">5–6 sessions per week</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Timing</h4>
              <p className="text-gray-600">Flexible scheduling with parental involvement (for kids)</p>
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
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Proven track record of Huffaz</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Regular evaluations and support</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Focused Tajweed correction during Hifz</h4>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Hifz_Quran_With_Tajweed