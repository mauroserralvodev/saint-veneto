import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="text-gray-600 bg-white body-font sticky top-0 z-50">
        <div className="container mx-auto p-5">
          <Link href='/' className="flex items-center justify-center object-center">
            <img src='/logo.png' className='w-48' />
          </Link>
        </div>
        <div className="bg-gray-100 py-2 text-center text-sm border-b border-neutral-200">
          <nav className="text-md">
            <a href='/magliette' className="mr-10 hover:text-gray-900 hover:underline">Magliette</a>
            <a href='/felpe-e-maglioni' className=" hover:text-gray-900 hover:underline">Felpe e Maglioni</a>
            <a href='/accessori' className="ml-10 hover:text-gray-900 hover:underline">Accessori</a>
          </nav>
        </div>
    </header>
  )
}

export default Header