"use client"
import "./globals.css";
import React, { useState, useEffect } from 'react';
import TextRevealByWord from '@/components/ui/text-reveal';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity'
import { IBM_Plex_Mono } from "next/font/google";

import Header from '@/components/header';
import Footer from '@/components/footer';
import BannerHero from '@/components/banner-hero';
import Productos from '@/components/productos';
import Accesorios from '@/components/accesorios';

const inter2 = IBM_Plex_Mono({ subsets: ['latin'], weight: "600" });

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

      <Header/>
      <BannerHero/>
      <Productos/>

      {/* Eslogan */}
      <div className="z-10 flex min-h-64 items-center justify-center rounded-lg border bg-white dark:bg-black">
        <TextRevealByWord text="&#34;DRESS LIKE YOU'RE ALREADY FAMOUS&#34;" />
      </div>

      <Accesorios/>
      <Footer/>
    </div>
    
  )
}