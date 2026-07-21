'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting contact form:', error)
    }
  }

  return (
    <div className="py-20">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">📞 Phone</h3>
              <p className="text-gray-600">
                <a href="tel:9441783250" className="text-blue-600 hover:underline">
                  9441783250
                </a>
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">📧 Email</h3>
              <p className="text-gray-600">
                <a href="mailto:contact@mawabites.com" className="text-blue-600 hover:underline">
                  contact@mawabites.com
                </a>
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">📍 Address</h3>
              <p className="text-gray-600">
                Hyderabad, Telangana<br />
                India
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">🕐 Working Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9 AM - 6 PM<br />
                Saturday: 10 AM - 4 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                ✅ Thank you! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              
              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Phone</label>
                <input 
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="9441783250"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Subject</label>
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full btn-primary bg-blue-600 text-white text-lg py-3"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
