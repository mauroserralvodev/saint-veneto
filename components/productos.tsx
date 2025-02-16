import React from 'react'
import { IBM_Plex_Mono } from "next/font/google";

const inter2 = IBM_Plex_Mono({ subsets: ['latin'], weight: "600" });
const inter3 = IBM_Plex_Mono({ subsets: ['latin'], weight: "500" });

const Productos = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-64 mx-auto">
          <div className="flex flex-wrap -m-4">
            <a href='/black-shared-magliette' className="border hover:border-neutral-500 text-black hover:bg-gray-100/10 lg:w-1/4 md:w-1/2 p-4 w-full transition">
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
            <a href='/black-shared-magliette'className="border hover:border-neutral-500 hover:bg-gray-100/10 border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full  transition">
              <p className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/modelo2.webp"/>
              </p>
              <div className="mt-4">
                <div className={inter2.className}>
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tee</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">WHITE COLLEGE SKATE</h2>
                <div className={inter3.className}>
                  <p className="mt-1">295 €</p>
                </div>
              </div>
            </a>
            <a href='/black-shared-magliette' className="border hover:border-neutral-500 hover:bg-gray-100/10 border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <p className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/modelo3.webp"/>
              </p>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">BLACK OUTLINE ARROW</h2>
                <div className={inter3.className}>
                  <p className="mt-1">650 €</p>
                </div>
              </div>
            </a>
            <div className="border hover:border-neutral-500 hover:bg-gray-100/10 border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <p className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/modelo4.webp"/>
              </p>
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
            <a href='/black-shared-magliette' className="border hover:border-neutral-500 hover:bg-gray-100/10 border-t-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <p className="block rounded overflow-hidden">
                <img alt="ecommerce" className="w-full h-full" src="/sudadera1.webp"/>
              </p>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">G4NG STAKE</h2>
                <div className={inter3.className}>
                  <p className="mt-1">340 €</p>
                </div>
              </div>
            </a>
            <a href='/black-shared-magliette' className="border hover:border-neutral-500 hover:bg-gray-100/10 border-t-transparent border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <p className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/sudadera2.webp"/>
              </p>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Tee</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">BIG BOOKISH</h2>
                <div className={inter3.className}>
                  <p className="mt-1">220 €</p>
                </div>
              </div>
            </a>
            <a href='/black-shared-magliette' className="border hover:border-neutral-500 hover:bg-gray-100/10 border-t-transparent border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <p className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/sudadera3.webp"/>
              </p>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">OUT OF OFFICE</h2>
                <div className={inter3.className}>
                  <p className="mt-1">340 €</p>
                </div>
              </div>
            </a>
            <a href='/black-shared-magliette'className="border hover:border-neutral-500 hover:bg-gray-100/10 border-t-transparent border-l-transparent lg:w-1/4 md:w-1/2 p-4 w-full transition">
              <p className="block rounded overflow-hidden">
                <img alt="ecommerce" className=" w-full h-full" src="/sudadera4.webp"/>
              </p>
              <div className="mt-4">
                <div className={inter2.className}>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodie</h3>
                </div>
                <h2 className="text-gray-900 title-font text-lg font-bold">CAMO JACQUARD</h2>
                <div className={inter3.className}>
                  <p className="mt-1">340 €</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

  )
}

export default Productos