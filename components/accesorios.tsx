import React from 'react'
import { IBM_Plex_Mono } from "next/font/google";

const inter2 = IBM_Plex_Mono({ subsets: ['latin'], weight: "600" });
const inter3 = IBM_Plex_Mono({ subsets: ['latin'], weight: "500" });

const Accesorios = () => {
  return (
    <section className="text-gray-600 my-64 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            
            <a href='/black-shared-magliette' className="border hover:border-neutral-500 hover:bg-gray-100/10 lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <p className="block rounded overflow-hidden">
                <img alt="ecommerce" className="w-full h-full" src="/accesorio6.webp"/>
              </p>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Backpack</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">BOOKISH BIFOLD</h2>
                <div className={inter3.className}>
                  <p className="mt-1">275 €</p>
                </div>
              </div>
            </a>
            <a href='/black-shared-magliette' className="border hover:border-neutral-500 hover:bg-gray-100/10 border-l border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <p className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/accesorio3.webp"/>
              </p>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Handbag</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">LEATHER DAY OFF</h2>
                <div className={inter3.className}>
                  <p className="mt-1">950 €</p>
                </div>
              </div>
            </a>
            <a href='/black-shared-magliette' className="border hover:border-neutral-500 hover:bg-gray-100/10 border-l border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <p className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/accesorio4.webp"/>
              </p>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Handbag</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">TORPEDO MINI BAG</h2>
                <div className={inter3.className}>
                  <p className="mt-1">440 €</p>
                </div>
              </div>
            </a>
            <a href='/black-shared-magliette' className="border hover:border-neutral-500 hover:bg-gray-100/10 border-l border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <p className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/accesorio2.webp"/>
              </p>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Sneakers</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">3.0 OFF COURT</h2>
                <div className={inter3.className}>
                  <p className="mt-1">650 €</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
  )
}

export default Accesorios