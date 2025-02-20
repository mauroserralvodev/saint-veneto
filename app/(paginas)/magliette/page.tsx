"use client"
import React, { useState, useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Productos from '@/components/productos';

export default function OffWhiteHomepage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
        <Header/>
        <div className='max-w-[94rem] mx-auto my-12 -mb-24'>
            <div className="relative w-full">
                {/* Mobil */}
                <img 
                src='/banner2.jpg' 
                className="w-full sm:hidden object-cover"
                alt="Mobile Banner"
                loading="eager"
                />
                {/* Ordenador */}
                <img 
                src='/banner3.jpg' 
                className="w-full hidden sm:block object-cover"
                alt="Desktop Banner"
                loading="eager"
                />
            </div>
        </div>
        <section className="container mx-auto px-4 pt-44">
            <h2 className="text-2xl font-bold -mb-40 border-b border-neutral-200 pb-4 uppercase">Magliette</h2>
            <Productos/>
        </section>
        <Footer/>
    </div>
    
  )
}