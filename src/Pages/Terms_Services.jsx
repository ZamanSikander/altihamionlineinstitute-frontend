import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Terms_Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl mb-8">Last Updated: 04-04-2025</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Welcome Section */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Welcome to Al-Tihami Online Institute!</h2>
              <p className="text-gray-600">
                Please read these Terms of Service carefully before using our website and services. By accessing or using our services, you agree to these terms.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600">
                By using our website or enrolling in our courses, you accept and agree to be bound by these Terms of Service.
              </p>
            </div>

            {/* Services Provided */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Services Provided</h2>
              <p className="text-gray-600 mb-4">We provide online Quran education services, including but not limited to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Quran reading</li>
                <li>Quran memorization</li>
                <li>Tajweed courses</li>
                <li>Islamic knowledge classes</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">User Responsibilities</h2>
              <p className="text-gray-600 mb-4">When using our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Provide accurate information during registration</li>
                <li>Keep your login credentials confidential</li>
                <li>Respect instructors and other students</li>
                <li>Abide by Islamic manners and ethics during sessions</li>
              </ul>
            </div>

            {/* Payment and Refunds */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Payment and Refunds</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Course fees must be paid according to the selected plan.</li>
                <li>Refunds are subject to our Refund Policy (available upon request or on a specific policy page).</li>
                <li>Late or missed payments may result in suspension of access.</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Intellectual Property</h2>
              <p className="text-gray-600">
                All content provided on this site, including lessons, videos, PDFs, and resources, is the intellectual property of Al-Tihami Online Institute.
                You may not reproduce, distribute, or use our content without explicit written permission.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600">
                We are not liable for any indirect, incidental, or consequential damages resulting from your use of our services.
              </p>
            </div>

            {/* Termination */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Termination</h2>
              <p className="text-gray-600">
                We reserve the right to terminate or suspend your account if you violate these Terms of Service or engage in any unlawful or unethical conduct.
              </p>
            </div>

            {/* Changes to the Terms */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Changes to the Terms</h2>
              <p className="text-gray-600">
                We may revise these Terms from time to time. Changes will be effective immediately upon posting. Continued use of the service after changes constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Governing Law</h2>
              <p className="text-gray-600">
                These Terms are governed by the laws of Pakistan, without regard to conflict of law principles.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions or concerns about these Terms, please contact us at:
              </p>
              <p className="text-gray-600 mt-2">📧 qarimuhammadharis54@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Terms_Services