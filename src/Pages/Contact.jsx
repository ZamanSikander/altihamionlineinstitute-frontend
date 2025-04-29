import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ContactHero from '../Components/ContactHero';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const API_KEY = import.meta.env.WEB3_FORM_API_KEY
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const form = e.target;
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We will get back to you soon.'
        });
        form.reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Something went wrong. Please try again later.'
        });
      }
    } catch (err) {
      setSubmitStatus({
        type: 'error',
        message: `An error occurred: ${err.message || 'Please try again later.'}`
      });
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      <Navbar />
      <ContactHero />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-800">We'd love to hear from you. Send us a message below.</p>
        </div>
        <div className="rounded-xl shadow-lg p-6 sm:p-8">
          {submitStatus.message && (
            <div className={`mb-6 p-4 rounded-md ${submitStatus.type === 'success'
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
              }`}>
              {submitStatus.message}
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            action="https://api.web3forms.com/submit"
          >
            <input
              type="hidden"
              name="access_key"
              value={API_KEY}
            />
            <input
              type="text"
              name="botcheck"
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md text-gray-900 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition outline-0"
                  placeholder="Your full name"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md text-gray-900 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition outline-0"
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md text-gray-900 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition outline-0"
                placeholder="Subject of your message"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-700 rounded-md text-gray-900 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition outline-0"
                placeholder="Write your message here..."
                disabled={isSubmitting}
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-block w-full md:w-auto px-8 py-3 bg-yellow-500 text-black font-semibold rounded-md shadow-lg hover:bg-yellow-600 hover:shadow-yellow-500/20 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
