import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Noorani_Qaida_with_Tajweed = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn the Foundation of Quranic Reading with Proper Tajweed.</h1>
            <p className="text-xl mb-8">Start your Quran journey with our expertly designed Noorani Qaida course..</p>
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300" onClick={handleClick}>
              Enroll Now
            </button>
          </div>
        </div>
      </section>
      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Course Overview</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Noorani Qaida is the first step in learning to read the Holy Quran. This course is designed for beginners—children and adults—who wish to start from the basics. It covers Arabic alphabets, pronunciation, and basic Tajweed rules, ensuring a solid foundation.
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
                Arabic alphabets and pronunciation
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Letter joining and Makharij (articulation points)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Harakat (vowels), Sukoon, Tanween
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Basic Tajweed rules for fluency
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Reading short verses with confidence
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
              <h4 className="text-xl font-semibold text-gray-800 mb-2">One-on-one live sessions</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Experienced male and female teachers</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Interactive exercises and assessments</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Weekly progress reports</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Certificate of Completion</h4>
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
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Absolute beginners</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Children ages 4+</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Adults with no prior experience in Arabic</h4>
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
              <p className="text-gray-600">2 to 4 months (depends on pace)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Classes</h4>
              <p className="text-gray-600">3 to 5 sessions per week</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Timing</h4>
              <p className="text-gray-600">Flexible class timings (based on your time zone)</p>
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
              <h4 className="text-xl font-semibold text-gray-800 mb-2">100% online, learn from home</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Native Arabic & certified Quran tutors</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Personalized attention & learning plans</h4>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Noorani_Qaida_with_Tajweed