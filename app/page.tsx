"use client"
import { VelocityScroll } from '@/components/ui/scroll-based-velocity'
import React, { useState, useEffect } from 'react';
import "./globals.css";
import TextRevealByWord from '@/components/ui/text-reveal';
import { IBM_Plex_Mono } from "next/font/google";

const inter2 = IBM_Plex_Mono({ subsets: ['latin'], weight: "600" });
const inter3 = IBM_Plex_Mono({ subsets: ['latin'], weight: "500" });

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
     
      <div className="bg-gray-100 py-2 text-center text-neutral-400 text-md border-b border-neutral-200">
        <div className={inter2.className}>
          <VelocityScroll
          text="Join the SAINT VENETO™ community - We will notify you of upcoming releases."
          default_velocity={3}
          />
        </div>
      </div>

      <header className="text-gray-600 bg-white body-font sticky top-0 z-50">
        <div className="container mx-auto p-5">
          <a className="flex items-center justify-center object-center">
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

      {/* Banner */}
      <div className="relative w-full">
        {/* Versión Mobile */}
        <img 
          src='/bannermb.png' 
          className="w-full sm:hidden object-cover"
          alt="Mobile Banner"
          loading="eager"
        />
        
        {/* Versión Desktop */}
        <img 
          src='/banner2.png' 
          className="w-full hidden sm:block object-cover"
          alt="Desktop Banner"
          loading="eager"
        />
      </div>


      <section className="text-gray-600 body-font">
        <div className="container px-5 py-64 mx-auto">
          <div className="flex flex-wrap -m-4">
            <a href='/black-shared-magliette' className="border hover:border-neutral-300 text-black hover:bg-gray-100/10 lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <p className="block overflow-hidden cursor-pointer">
                <img alt="ecommerce" className="w-full h-full" src="/modelo1.webp"/>
              </p>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className=" text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className=" title-font text-lg font-bold">BLACK SHARED LOGO</h2>
                <div className={inter3.className}>
                  <p className="mt-1">695 €</p>
                </div>
              </div>
            </a>
            <div className="border hover:border-neutral-500 hover:bg-gray-100/10 border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full  transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/modelo2.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tee</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">WHITE COLLEGE SKATE</h2>
                <div className={inter3.className}>
                  <p className="mt-1">295 €</p>
                </div>
              </div>
            </div>
            <div className="border hover:border-neutral-500 hover:bg-gray-100/10 border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/modelo3.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">BLACK OUTLINE ARROW</h2>
                <div className={inter3.className}>
                  <p className="mt-1">650 €</p>
                </div>
              </div>
            </div>
            <div className="border hover:border-neutral-500 hover:bg-gray-100/10 border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/modelo4.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Knit crewneck</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">BLUE CAMO JACQUARD</h2>
                <div className={inter3.className}>
                  <p className="mt-1">895 €</p>
                </div>
              </div>
            </div>
            <div className="border hover:border-neutral-500 hover:bg-gray-100/10 border-t-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className="w-full h-full" src="/sudadera1.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">G4NG STAKE</h2>
                <div className={inter3.className}>
                  <p className="mt-1">340 €</p>
                </div>
              </div>
            </div>
            <div className="border hover:border-neutral-500 hover:bg-gray-100/10 border-t-transparent border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/sudadera2.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tee</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">BIG BOOKISH</h2>
                <div className={inter3.className}>
                  <p className="mt-1">220 €</p>
                </div>
              </div>
            </div>
            <div className="border hover:border-neutral-500 hover:bg-gray-100/10 border-t-transparent border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/sudadera3.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">OUT OF OFFICE</h2>
                <div className={inter3.className}>
                  <p className="mt-1">340 €</p>
                </div>
              </div>
            </div>
            <div className="border hover:border-neutral-500 hover:bg-gray-100/10 border-t-transparent border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/sudadera4.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">CAMO JACQUARD</h2>
                <div className={inter3.className}>
                  <p className="mt-1">340 €</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="z-10 flex min-h-64 items-center justify-center rounded-lg border bg-white dark:bg-black">
        <TextRevealByWord text="&#34;DRESS LIKE YOU'RE ALREADY FAMOUS&#34;" />
      </div>

      <section className="text-gray-600 my-64 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            
            <div className="border hover:border-neutral-500 hover:bg-gray-100/10 lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className="w-full h-full" src="/accesorio6.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Backpack</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">BOOKISH BIFOLD</h2>
                <div className={inter3.className}>
                  <p className="mt-1">275 €</p>
                </div>
              </div>
            </div>
            <div className="border hover:border-neutral-500 hover:bg-gray-100/10 border-l border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/accesorio3.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Handbag</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">LEATHER DAY OFF</h2>
                <div className={inter3.className}>
                  <p className="mt-1">950 €</p>
                </div>
              </div>
            </div>
            <div className="border hover:border-neutral-500 hover:bg-gray-100/10 border-l border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/accesorio4.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Handbag</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">TORPEDO MINI BAG</h2>
                <div className={inter3.className}>
                  <p className="mt-1">440 €</p>
                </div>
              </div>
            </div>
            <div className="border hover:border-neutral-500 hover:bg-gray-100/10 border-l border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/accesorio2.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Sneakers</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">3.0 OFF COURT</h2>
                <div className={inter3.className}>
                  <p className="mt-1">650 €</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className='bg-white'>
      <footer className="text-gray-600 py-24 body-font border-t border-neutral-200">
        <div className="container px-5 py-8 mx-auto  flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src='/logo.png' className=''/>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2025 SAINT VENETO —
            <a href="https://instagram.com/mauroserralvo" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">CREATIVE DIRECTOR @mauroserralvo</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg> 
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
           
          </span>
        </div>
      </footer>
      </div>
    </div>
    
  )
}