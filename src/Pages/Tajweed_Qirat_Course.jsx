import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Tajweed_Qirat_Course = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Master the Art of Quran Recitation with Tajweed & Qirat</h1>
            <p className="text-xl mb-8">Take your recitation to a professional level.</p>
            <button className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300" onClick={handleClick}>
              Join the Course
            </button>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6">Course Overview</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            This course is crafted for advanced learners who want to master Tajweed and different Qira'at styles. 
            It includes deep study of Tajweed rules and multiple recitation methods (like Warsh, Qalun, Hafs, etc.).
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
                Advanced Tajweed rules (Makharij, Sifaat, etc.)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Application in Quran recitation
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Study of different Qira'at
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                Oral and practical assessments
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
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Taught by Qaris with Ijazah</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Intensive one-on-one sessions</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Tajweed theory + practical Qira'at</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition duration-300 border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Certification upon passing exams</h4>
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
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Advanced Quran students</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Those aiming to become certified Qaris</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Adults with strong fluency in Quran reading</h4>
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
              <p className="text-gray-600">6 months to 1 year</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Classes</h4>
              <p className="text-gray-600">3–5 per week</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-yellow-500/20">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Timing</h4>
              <p className="text-gray-600">Timing customized to student's preference</p>
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
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Ijazah-certified instructors</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Recognized certification</h4>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Individual focus and mentorship</h4>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Tajweed_Qirat_Course