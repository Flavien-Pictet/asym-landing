'use client'

import Navbar from '../components/navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Publishing() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="relative">
        {/* Left pattern - hidden on mobile */}
        <div className="hidden lg:block fixed left-[70px] top-0 h-screen z-50">
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
        <div className="hidden lg:block fixed right-[70px] top-0 h-screen z-50">
          <Image 
            src="/assets/images/sidebar.png"
            alt="Right decorative pattern"
            width={70}
            height={1200}
            className="h-full w-auto"
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div className="flex-1 px-5 pt-[200px] max-w-[1200px] mx-auto">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[40px] lg:!text-[50px] font-normal mb-4 font-['Recoleta']"
            >
              Publishing
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#B2B2B2] text-[18px] mb-16 font-['Rethink_Sans']"
            >
              Coming soon...
            </motion.p>
          </div>
        </div>
      </div>
    </main>
  )
}
