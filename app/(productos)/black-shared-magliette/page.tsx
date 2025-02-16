"use client"
import Accesorios from '@/components/accesorios'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import { useState } from 'react'

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [showStockAlert, setShowStockAlert] = useState(false)

  const product = {
    title: "BLACK SHARED MAGLIETTE",
    price: "295 €",
    description: "Crafted from premium heavyweight cotton, this hoodie features our signature diagonal stripe detailing and embossed metal hardware. Minimalist design with hidden branding elements.",
    sizes: ['S', 'M', 'L'],
    image: '/producto3.webp'
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Imagen del producto */}
          <div className="lg:w-1/2 w-full lg:sticky lg:top-24 self-start">
            <div className="aspect-square relative border border-neutral-200">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
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
              onClick={() => setShowStockAlert(true)}
            >
              Añadir a la cesta — {product.price}
            </button>
          </div>
        </div>
      </main>

      <section className="container mx-auto px-4 py-36">
        <h2 className="text-2xl font-bold -mb-40 border-b border-neutral-200 pb-4 uppercase">Related Products</h2>
        <div className="-mb-40">
          <Accesorios />
        </div>
      </section>

      {/* Modal de error centrado */}
      {showStockAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-12 shadow-lg max-w-md text-center animate-fade-in">
            <h2 className="text-xl text-gray-900 uppercase">This product is sold out</h2>
            <p className="text-gray-600 my-5">We are sorry, but there is currently no stock available.</p>
            <button 
              onClick={() => setShowStockAlert(false)}
              className="mt-4 px-12 py-2 bg-black text-white hover:bg-gray-800 transition"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
