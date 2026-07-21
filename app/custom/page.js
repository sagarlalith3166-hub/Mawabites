'use client'

import { useState } from 'react'

export default function CustomOrder() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: 1,
    size: 'M',
    color: 'Black',
    description: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await fetch('/api/custom-order', {
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
          quantity: 1,
          size: 'M',
          color: 'Black',
          description: '',
        })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-20">
      <div className="container-custom max-w-2xl">
        <h1 className="text-4xl font-bold mb-12 text-center">Custom T-shirt Order</h1>

        {submitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            ✅ Your custom order has been submitted! We'll contact you within 24 hours.
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Full Name *</label>
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
            <label className="block text-gray-700 font-bold mb-2">Email *</label>
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
            <label className="block text-gray-700 font-bold mb-2">Phone Number *</label>
            <input 
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
              placeholder="9441783250"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Quantity *</label>
              <input 
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                max="100"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">Size *</label>
              <select 
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
              >
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">T-shirt Color *</label>
            <select 
              name="color"
              value={formData.color}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
            >
              <option>Black</option>
              <option>White</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Gray</option>
              <option>Navy</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Design Description *</label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
              placeholder="Describe your design idea... (Include colors, text, images, etc.)"
            ></textarea>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            💡 Tip: You can upload design files or images during checkout
          </p>

          <button 
            type="submit"
            disabled={loading}
            className="w-full btn-primary bg-blue-600 text-white text-lg py-3 hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'Submitting...' : 'Submit Custom Order'}
          </button>
        </form>
      </div>
    </div>
  )
}
