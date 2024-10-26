"use client"
import React, { useState } from 'react';

import Head from 'next/head';

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState<string>('M');

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToBag = () => {
    alert(`Producto añadido a la bolsa. Talla: ${selectedSize}`);
  };

  const handleAddToWishlist = () => {
    alert('Producto añadido a la lista de deseos');
  };

  return (
    <>
      <Head>
        <title>Blue Camo Jacquard Denim Bowling Shirt</title>
        <meta name="description" content="Blue Camo Jacquard Denim Bowling Shirt - Product Page" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <main className="container mx-auto px-4 py-8 font-['Inter',sans-serif]">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202024-10-17%20165602-Wd8eKiHW9Lgo9ScUlHGCVJfCVbgXQ2.png"
              alt="Vista frontal de la camisa"
              width={600}
              height={800}
              className="w-full object-cover"
            />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202024-10-17%20165602-Wd8eKiHW9Lgo9ScUlHGCVJfCVbgXQ2.png"
              alt="Vista lateral de la camisa"
              width={600}
              height={800}
              className="w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Blue Camo Jacquard Denim Bowling Shirt</h1>
            <p className="text-2xl font-semibold">788 €</p>
            <p className="text-gray-600">
              This boxy fit bowling shirt is crafted from 100% cotton and features an all-over jacquard camo print. Made in Italy.
            </p>
            <p className="text-sm text-gray-500">Product ID: OMY0084F24DE0029412</p>
            <div>
              <h2 className="font-semibold mb-2">COLORS:</h2>
              <div className="w-8 h-8 bg-[#000080] rounded-full border-2 border-gray-300"></div>
            </div>
            <div>
              <h2 className="font-semibold mb-2">SIZES:</h2>
              <div className="flex gap-4">
                {['M', 'L'].map((size) => (
                  <label key={size} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      checked={selectedSize === size}
                      onChange={() => handleSizeChange(size)}
                      className="sr-only"
                    />
                    <span className={`size-option border border-gray-300 px-4 py-2 rounded ${selectedSize === size ? 'bg-black text-white' : ''}`}>
                      {size}
                    </span>
                  </label>
                ))}
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline mt-2 inline-block">Size Help</a>
            </div>
            <button
              onClick={handleAddToBag}
              className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
            >
              ADD TO BAG
            </button>
            <button
              onClick={handleAddToWishlist}
              className="w-full border border-black py-2 px-4 rounded hover:bg-gray-100 transition duration-300 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Add to Wishlist
            </button>
            <div className="space-y-2 text-sm">
              <p className="font-semibold">SHIPPING & RETURNS</p>
              <p className="font-semibold">PAYMENT METHODS</p>
              <p className="font-semibold">HELP AND CONTACT</p>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">+ VIEW THE LOOK</a>
          </div>
        </div>
      </main>
    </>
  );
}