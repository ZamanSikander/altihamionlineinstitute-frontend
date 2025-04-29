import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Privacy_Policy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
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
                We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Information</h3>
                  <p className="text-gray-600">Name, email address, phone number, location, etc.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Payment Information</h3>
                  <p className="text-gray-600">Billing address and payment details (processed securely via third-party providers).</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Usage Data</h3>
                  <p className="text-gray-600">IP address, browser type, access times, and pages viewed.</p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Provide and manage your account</li>
                <li>Communicate with you (updates, offers, newsletters)</li>
                <li>Improve our website and services</li>
                <li>Process transactions securely</li>
              </ul>
            </div>

            {/* Sharing Your Information */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Sharing Your Information</h2>
              <p className="text-gray-600 mb-4">We do NOT sell, trade, or rent your personal information.</p>
              <p className="text-gray-600 mb-2">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Trusted service providers (for payment processing, email services)</li>
                <li>Legal authorities if required by law</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Data Security</h2>
              <p className="text-gray-600">
                We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure.
              </p>
            </div>

            {/* Your Rights */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Access the personal information we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt-out of marketing communications at any time</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Cookies</h2>
              <p className="text-gray-600">
                We use cookies to enhance your browsing experience. You can control cookies through your browser settings.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Third-Party Links</h2>
              <p className="text-gray-600">
                Our website may contain links to other websites. We are not responsible for the content or privacy practices of these external sites.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy periodically. Any changes will be posted on this page with a new "Last Updated" date.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-yellow-500 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-600 mt-2">qarimuhammadharis54@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Privacy_Policy