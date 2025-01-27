'use client'

import Navbar from '../components/navbar'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Portfolio() {
  const [openItemId, setOpenItemId] = useState(null);

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
            <style jsx>{`
              .responsive-title {
                font-size: 40px !important;
              }
              @media (min-width: 1024px) {
                .responsive-title {
                  font-size: 50px !important;
                }
              }
            `}</style>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[40px] lg:!text-[50px] font-normal mb-4 font-['Recoleta']"
            >
              Portfolio
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#B2B2B2] text-[18px] mb-16 font-['Rethink_Sans']"
            >
              Turning unsexy problems into cash cows, one app at a time.
            </motion.p>
          </div>
          
          {/* Portfolio items */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-[700px] mx-auto font-['Rethink_Sans']"
          >
            {/* Taller Item */}
            <div className="border-b-[1.5px] border-dashed border-[#E5E5E5] first:border-t-[1.5px]">
              <div 
                className="flex items-center justify-between cursor-pointer h-[70px]"
                onClick={() => setOpenItemId(openItemId === "taller" ? null : "taller")}
              >
                <div className="flex items-center gap-4">
                  <Image 
                    src="/assets/images/taller.png"
                    alt="Taller icon"
                    width={30}
                    height={30}
                    className="select-none"
                  />
                  <span className="text-[18px] font-['Rethink_Sans'] select-none">Taller</span>
                  <a 
                    href="https://apps.apple.com/us/app/taller-maximize-your-height/id6695758303"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform select-none"
                  >
                    <Image 
                      src="/assets/images/link.svg"
                      alt="Link icon"
                      width={14}
                      height={14}
                      className="select-none"
                    />
                  </a>
                </div>
                <svg 
                  width="12" 
                  height="7" 
                  viewBox="0 0 12 7" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-300 ${openItemId === "taller" ? 'rotate-180' : ''}`}
                >
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M6.60609 6.60613C6.27136 6.94086 5.72864 6.94086 5.39391 6.60613L0.251051 1.46327C-0.0836842 1.12853 -0.0836842 0.585821 0.251051 0.251086C0.585786 -0.0836489 1.1285 -0.0836489 1.46323 0.251086L6 4.78785L10.5368 0.251086C10.8715 -0.0836489 11.4142 -0.0836489 11.7489 0.251086C12.0837 0.585821 12.0837 1.12853 11.7489 1.46327L6.60609 6.60613Z" 
                    fill="black"
                  />
                </svg>
              </div>
              
              <motion.div 
                initial={false}
                animate={{
                  height: openItemId === "taller" ? "auto" : 0,
                  opacity: openItemId === "taller" ? 1 : 0
                }}
                transition={{
                  height: { duration: 0.3, ease: "easeOut" },
                  opacity: { duration: 0.2, delay: openItemId === "taller" ? 0.1 : 0 }
                }}
                className="overflow-hidden"
              >
                <div className="pb-6 text-[#B2B2B2] text-[14px] font-['Rethink_Sans'] font-medium select-none">
                  <p className="mb-3">Taller is a height prediction app designed for teens under 21 who want to know their futur height & make sure they reach their true height potential. Answer a few lifestyle questions to see your future height and get a personalized plan to optimize your growth.</p>
                  <div className="inline-block px-3 py-1" style={{ borderRadius: '6px', border: '1px solid #E4E7EC' }}>
                    <span className="text-[12px] text-black">500k downloads</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Testo AI Item */}
            <div className="border-b-[1.5px] border-dashed border-[#E5E5E5] first:border-t-[1.5px]">
              <div 
                className="flex items-center justify-between cursor-pointer h-[70px]"
                onClick={() => setOpenItemId(openItemId === "testo" ? null : "testo")}
              >
                <div className="flex items-center gap-4">
                  <Image 
                    src="/assets/images/testo.png"
                    alt="Testo AI icon"
                    width={30}
                    height={30}
                    className="select-none"
                  />
                  <span className="text-[18px] font-['Rethink_Sans'] select-none">Testo AI</span>
                  <Image 
                    src="/assets/images/link.svg"
                    alt="Link icon"
                    width={14}
                    height={14}
                    className="select-none"
                  />
                </div>
                <svg 
                  width="12" 
                  height="7" 
                  viewBox="0 0 12 7" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-300 ${openItemId === "testo" ? 'rotate-180' : ''}`}
                >
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M6.60609 6.60613C6.27136 6.94086 5.72864 6.94086 5.39391 6.60613L0.251051 1.46327C-0.0836842 1.12853 -0.0836842 0.585821 0.251051 0.251086C0.585786 -0.0836489 1.1285 -0.0836489 1.46323 0.251086L6 4.78785L10.5368 0.251086C10.8715 -0.0836489 11.4142 -0.0836489 11.7489 0.251086C12.0837 0.585821 12.0837 1.12853 11.7489 1.46327L6.60609 6.60613Z" 
                    fill="black"
                  />
                </svg>
              </div>
              
              <motion.div 
                initial={false}
                animate={{
                  height: openItemId === "testo" ? "auto" : 0,
                  opacity: openItemId === "testo" ? 1 : 0
                }}
                transition={{
                  height: { duration: 0.3, ease: "easeOut" },
                  opacity: { duration: 0.2, delay: openItemId === "testo" ? 0.1 : 0 }
                }}
                className="overflow-hidden"
              >
                <div className="pb-6 text-[#B2B2B2] text-[14px] font-['Rethink_Sans'] font-medium select-none">
                  <p>Description for Testo AI project goes here...</p>
                </div>
              </motion.div>
            </div>

            {/* Glutes Item */}
            <div className="border-b-[1.5px] border-dashed border-[#E5E5E5] first:border-t-[1.5px]">
              <div 
                className="flex items-center justify-between cursor-pointer h-[70px]"
                onClick={() => setOpenItemId(openItemId === "glutes" ? null : "glutes")}
              >
                <div className="flex items-center gap-4">
                  <div className="w-[30px] h-[30px] bg-black rounded-lg flex items-center justify-center select-none">
                    <span className="text-white">?</span>
                  </div>
                  <span className="text-[18px] font-['Rethink_Sans'] select-none">Glutes</span>
                  <Image 
                    src="/assets/images/link.svg"
                    alt="Link icon"
                    width={14}
                    height={14}
                    className="select-none"
                  />
                </div>
                <svg 
                  width="12" 
                  height="7" 
                  viewBox="0 0 12 7" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-transform duration-300 ${openItemId === "glutes" ? 'rotate-180' : ''}`}
                >
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M6.60609 6.60613C6.27136 6.94086 5.72864 6.94086 5.39391 6.60613L0.251051 1.46327C-0.0836842 1.12853 -0.0836842 0.585821 0.251051 0.251086C0.585786 -0.0836489 1.1285 -0.0836489 1.46323 0.251086L6 4.78785L10.5368 0.251086C10.8715 -0.0836489 11.4142 -0.0836489 11.7489 0.251086C12.0837 0.585821 12.0837 1.12853 11.7489 1.46327L6.60609 6.60613Z" 
                    fill="black"
                  />
                </svg>
              </div>
              
              <motion.div 
                initial={false}
                animate={{
                  height: openItemId === "glutes" ? "auto" : 0,
                  opacity: openItemId === "glutes" ? 1 : 0
                }}
                transition={{
                  height: { duration: 0.3, ease: "easeOut" },
                  opacity: { duration: 0.2, delay: openItemId === "glutes" ? 0.1 : 0 }
                }}
                className="overflow-hidden"
              >
                <div className="pb-6 text-[#B2B2B2] text-[14px] font-['Rethink_Sans'] font-medium select-none">
                  <p>Description for Glutes project goes here...</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
