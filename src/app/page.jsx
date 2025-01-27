'use client'

import Navbar from './components/navbar'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      
      <div className="relative">
        {/* Left pattern - hidden on mobile */}
        <div className="hidden lg:block fixed left-[70px] top-0 h-screen z-[50]">
          <Image 
            src="/assets/images/sidebar.png"
            alt="Left decorative pattern"
            width={70}
            height={1200}
            className="h-full w-auto"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Right pattern - hidden on mobile */}
        <div className="hidden lg:block fixed right-[70px] top-0 h-screen z-[50]">
          <Image 
            src="/assets/images/sidebar.png"
            alt="Right decorative pattern"
            width={70}
            height={1200}
            className="h-full w-auto"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Gradient div with visibility condition */}
        <div 
          className={`fixed bottom-0 left-0 w-full h-[40vh] ${isMenuOpen ? 'hidden lg:block' : 'block'}`}
          style={{ 
            background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgb(237, 245, 255) 40%, rgb(173, 208, 255, 0.7) 75%, rgba(78, 173, 255, 0.7) 100%)',
            zIndex: isMenuOpen ? -1 : 60
          }}
        />
        
        <div className="flex-1 min-h-[calc(100vh-80px)] flex flex-col justify-center px-5 pt-0 max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center justify-center text-center -mt-[10vh]">
            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[50px] lg:!text-[80px] leading-[1] mb-6 font-[500] home-hero-title"
            >
              Asymmetric
              <br />
              <span className="text-[#0088FF]">Labs</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-['Rethink_Sans'] text-[16px] lg:text-[18px] text-[#B2B2B2] leading-[1.4] lg:leading-[22.4px] tracking-[0.32px] mb-8"
            >
              <span className="lg:hidden">
                We're a small, bootstrapped
                <br />
                team of scrapy kids building
                <br />
                viral consumer ventures
              </span>
              <span className="hidden lg:inline">
                We're a small, bootstrapped team of scrapy kids
                <br />
                building viral consumer ventures
              </span>
            </motion.div>

            {/* Metrics Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center px-[24px] h-[42px] rounded-[200px] bg-[rgba(0,0,0,0.91)] shadow-[inset_0px_0px_4px_1px_#FFF] backdrop-blur-[7px] text-white"
            >
              <span className="text-sm select-none">+500k downloads 🌎</span>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
} 