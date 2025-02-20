import React from 'react'

const BannerHero = () => {
  return (
    <div className="relative w-full">
        {/* Mobil */}
        <img 
          src='/bannermb.png' 
          className="w-full sm:hidden object-cover"
          alt="Mobile Banner"
          loading="eager"
        />
        {/* Ordenador */}
        <img 
          src='/banner2.png' 
          className="w-full hidden sm:block object-cover"
          alt="Desktop Banner"
          loading="eager"
        />
    </div>
  )
}

export default BannerHero