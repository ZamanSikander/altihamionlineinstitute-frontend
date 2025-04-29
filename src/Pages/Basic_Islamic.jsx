import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Basic_Islamic = () => {
    const navigate = useNavigate();
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Build a Strong Foundation in Islamic Knowledge</h1>
            <p className="text-xl mb-8">Perfect for beginners seeking core Islamic education.</p>
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300" onClick={handleClick}>
              Enroll Today
            </button>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Course Overview</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            This course covers essential Islamic knowledge every Muslim should know. 
            It includes the Five Pillars, belief (Aqeedah), life of Prophet Muhammad (PBUH), daily duas, and basic Fiqh.
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
                Five Pillars of Islam
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Belief in Allah, Prophets, Angels, etc.
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Life of the Prophet Muhammad (Seerah)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Daily duas & etiquette (Adab)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Basic Fiqh of Salah, Zakat, fasting
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
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Age-appropriate curriculum for kids and adults</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Illustrated stories and interactive lessons</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Assessments and revision quizzes</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Printable Islamic worksheets (optional)</h4>
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
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Kids aged 6+</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Reverts and new Muslims</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Muslims wanting to refresh core knowledge</h4>
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
              <p className="text-gray-600">2 to 4 months</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Classes</h4>
              <p className="text-gray-600">2–3 sessions per week</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Timing</h4>
              <p className="text-gray-600">Flexible class timings</p>
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
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Friendly and experienced instructors</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Clear and simple teaching methods</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Values-based Islamic learning</h4>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Basic_Islamic