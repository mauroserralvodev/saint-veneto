"use client"
import { VelocityScroll } from '@/components/ui/scroll-based-velocity'
import React from 'react'
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import TextRevealByWord from '@/components/ui/text-reveal';

const inter2 = IBM_Plex_Mono({ subsets: ['latin'], weight: "600" });
const inter3 = IBM_Plex_Mono({ subsets: ['latin'], weight: "500" });

export default function OffWhiteHomepage() {

  return (
    <div className="min-h-screen bg-white text-gray-900">
     
      <div className="bg-gray-100 py-2 font-bold text-center text-blue-700 text-md border-b border-neutral-800">
        <div className={inter2.className}>
          <VelocityScroll
          text="JOIN the SAINT VENETO™ community - We will notify you of upcoming releases."
          default_velocity={3}
          />
        </div>
      </div>

      <header className="text-gray-600 bg-white body-font sticky top-0 ">
        <div className="container mx-auto p-5 ">
          <a className="flex items-center justify-center object-center">
            <img src='/logo.png' className='w-56'/>
          </a>
        </div>
          <div className="bg-gray-100 py-2 text-center text-sm border-b border-neutral-800">
            <nav className="text-md">
                <a href='#' className="mr-5 hover:text-gray-900">Sudaderas</a>
                <a href='#'className="mr-5 hover:text-gray-900">Camisetas</a>
                <a href='#' className="mr-5 hover:text-gray-900">Pantalones</a>
                <a href='#' className="hover:text-gray-900">Acesorios</a>
            </nav>
          </div>
      </header>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="hover:border border-neutral-700 lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-gray-100 transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className="w-full h-full" src="/modelo1.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">Black shared logo</h2>
                <div className={inter3.className}>
                  <p className="mt-1">695 €</p>
                </div>
              </div>
            </div>
            <div className="hover:border border-neutral-700 lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-gray-100 transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/modelo2.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tee</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">White college skate</h2>
                <div className={inter3.className}>
                  <p className="mt-1">295 €</p>
                </div>
              </div>
            </div>
            <div className="hover:border border-neutral-700 lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-gray-100 transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/modelo3.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">Black outline arrow</h2>
                <div className={inter3.className}>
                  <p className="mt-1">650 €</p>
                </div>
              </div>
            </div>
            <div className="hover:border border-neutral-700 lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-gray-100 transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/modelo4.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Knit crewneck</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">Blue camo jacquard</h2>
                <div className={inter3.className}>
                  <p className="mt-1">895 €</p>
                </div>
              </div>
            </div>
            <div className="hover:border border-neutral-700 lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-gray-100 transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className="w-full h-full" src="/sudadera1.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">Gang skate</h2>
                <div className={inter3.className}>
                  <p className="mt-1">340 €</p>
                </div>
              </div>
            </div>
            <div className="hover:border border-neutral-700 lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-gray-100 transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/sudadera2.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tee</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">Big bookish</h2>
                <div className={inter3.className}>
                  <p className="mt-1">220 €</p>
                </div>
              </div>
            </div>
            <div className="hover:border border-neutral-700 lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-gray-100 transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/sudadera3.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">Out of office</h2>
                <div className={inter3.className}>
                  <p className="mt-1">340 €</p>
                </div>
              </div>
            </div>
            <div className="hover:border border-neutral-700 lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-gray-100 transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/sudadera4.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">Camo jacquard</h2>
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

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            
            <div className="hover:border border-neutral-700 lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-gray-100 transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className="w-full h-full" src="/sudadera1.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">Gang skate</h2>
                <div className={inter3.className}>
                  <p className="mt-1">340 €</p>
                </div>
              </div>
            </div>
            <div className="hover:border border-neutral-700 lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-gray-100 transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/sudadera2.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tee</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">Big bookish</h2>
                <div className={inter3.className}>
                  <p className="mt-1">220 €</p>
                </div>
              </div>
            </div>
            <div className="hover:border border-neutral-700 lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-gray-100 transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/sudadera3.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">Out of office</h2>
                <div className={inter3.className}>
                  <p className="mt-1">340 €</p>
                </div>
              </div>
            </div>
            <div className="hover:border border-neutral-700 lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-gray-100 transition">
              <a className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/sudadera4.webp"/>
              </a>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">Camo jacquard</h2>
                <div className={inter3.className}>
                  <p className="mt-1">340 €</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className='bg-white'>
      <footer className="text-gray-600 body-font border-t border-neutral-800">
        <div className="container px-5 py-8 mx-auto  flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src='/logo.png' className='w-56'/>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 SAINT VENETO —
            <a href="https://instagram.com/mauroserralvo" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@mauroserralvo</a>
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
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
      </div>
    </div>
  )
}