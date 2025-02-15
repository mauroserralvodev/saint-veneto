"use client"
// app/product/[id]/page.tsx
import Image from 'next/image'
import { useState } from 'react'

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)

  const product = {
    title: "BLACK SHARED MAGLIETTE",
    price: "695 €",
    description: "Crafted from premium heavyweight cotton, this hoodie features our signature diagonal stripe detailing and embossed metal hardware. Minimalist design with hidden branding elements.",
    sizes: ['S', 'M', 'L'],
    image: '/producto2.avif'
  }
  
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="text-gray-600 bg-white body-font sticky top-0 z-50">
        <div className="container mx-auto p-5">
          <a href="/" className="flex items-center justify-center object-center">
            <img src='/logo.png' className='w-48' />
          </a>
        </div>
        <div className="bg-gray-100 py-2 text-center text-sm border-b border-neutral-200">
          <nav className="text-md">
            <a href='/magliette' className="mr-10 hover:text-gray-900 hover:underline">Magliette</a>
            <a href='/felpe-e-maglioni' className=" hover:text-gray-900 hover:underline">Felpe e Maglioni</a>
            <a href='/accessori' className="ml-10 hover:text-gray-900 hover:underline">Accessori</a>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Imagen del producto */}
          <div className="lg:w-1/2 lg:sticky lg:top-24 self-start">
            <div className="aspect-square relative border border-neutral-200">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover "
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Detalles del producto */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">{product.title}</h1>
            <p className="text-2xl mb-8">{product.price}</p>

            <div className="mb-8">
              <h3 className="text-sm uppercase mb-4 border-b border-neutral-200 pb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-sm uppercase mb-4 border-b border-neutral-200 pb-2">Sizes</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border py-3 text-center transition-all ${
                      selectedSize === size 
                        ? 'bg-black text-white border-black' 
                        : 'border-neutral-200 hover:border-neutral-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm uppercase mb-4 border-b border-neutral-200 pb-2">Quantity</h3>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-neutral-200 w-20 px-4 py-2 text-center"
                />
              </div>
            </div>

            <button 
              className="w-full py-4 bg-black text-white uppercase tracking-widest text-sm hover:underline transition-all duration-300 cursor-pointer"
              disabled={!selectedSize}
            >
              Añadir a la cesta — {product.price}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}