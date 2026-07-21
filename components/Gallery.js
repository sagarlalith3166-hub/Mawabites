'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Gallery() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch products from API
    const mockProducts = [
      {
        id: 1,
        name: 'Minimalist Black',
        price: 299,
        image: 'https://via.placeholder.com/300x300?text=Black+Tshirt',
        description: 'Clean and simple design'
      },
      {
        id: 2,
        name: 'Vibrant Colors',
        price: 349,
        image: 'https://via.placeholder.com/300x300?text=Color+Tshirt',
        description: 'Colorful gradient design'
      },
      {
        id: 3,
        name: 'Classic White',
        price: 279,
        image: 'https://via.placeholder.com/300x300?text=White+Tshirt',
        description: 'Timeless white tee'
      },
      {
        id: 4,
        name: 'Premium Blue',
        price: 399,
        image: 'https://via.placeholder.com/300x300?text=Blue+Tshirt',
        description: 'Premium quality blue'
      },
    ]
    setProducts(mockProducts)
    setLoading(false)
  }, [])

  if (loading) return <p className="text-center py-20">Loading...</p>

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-12">Our T-shirt Collection</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">₹{product.price}</span>
                  <button className="btn-primary text-sm">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
