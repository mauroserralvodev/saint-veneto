import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white'>
      <footer className="text-gray-600 py-14 body-font border-t border-neutral-200">
        <div className="container px-5 py-8 mx-auto  flex items-center sm:flex-row flex-col">
          <a className="flex min-w-max title-font items-center md:justify-start justify-center text-gray-900">
            <img src='/logo.png' className='w-96 px-5'/>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-10 px-3">©2025 SAINT VENETO —
            <a href="https://instagram.com/mauroserralvo" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">CREATIVE DIRECTOR @mauroserralvo </a>
            — All rights on the content are reserved, saintveneto is a registered trademark. Website created by Brinpage Software all rights and functionalities of the software are property of<a href="https://brinpage.com/" className="text-gray-600 ml-1 hover:underline" rel="noopener noreferrer" target="_blank">Brinpage Software</a>.
          </p>
          
        </div>
      </footer>
      </div>
  )
}

export default Footer