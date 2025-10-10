'use client'

import Navbar from '../components/navbar'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Portfolio() {
  const [openItemId, setOpenItemId] = useState(null);
  
  // Define a fixed start date and initial downloads
  const START_DATE = new Date('2025-02-01').getTime();
  const INITIAL_DOWNLOADS = 1250000;
  const DOWNLOADS_PER_DAY = 2500;

  const [downloads, setDownloads] = useState(INITIAL_DOWNLOADS);

  useEffect(() => {
    const calculateCurrentDownloads = () => {
      const now = Date.now();
      const daysSinceStart = (now - START_DATE) / (1000 * 60 * 60 * 24);
      const additionalDownloads = Math.floor(daysSinceStart * DOWNLOADS_PER_DAY);
      return INITIAL_DOWNLOADS + additionalDownloads;
    };

    const updateCounter = () => {
      setDownloads(calculateCurrentDownloads());
    };

    // Update immediately and then every second
    updateCounter();
    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format number with apostrophes
  const formatNumber = (num) => {
    return Math.floor(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  };

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
              Turning unsexy problems into cash cows, at rocket speed.
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
                  <p className="mb-3">Answer a few lifestyle questions to discover your predicted / potential height and get a personalized routine to optimize your growth.</p>
                  <div className="inline-block px-3 py-1" style={{ borderRadius: '6px', border: '1px solid #E4E7EC' }}>
                    <span className="text-[14px] text-black">{formatNumber(downloads)} downloads</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Ritual Item */}
            <div className="border-b-[1.5px] border-dashed border-[#E5E5E5] first:border-t-[1.5px]">
              <div 
                className="flex items-center justify-between cursor-pointer h-[70px]"
                onClick={() => setOpenItemId(openItemId === "testo" ? null : "testo")}
              >
                <div className="flex items-center gap-4">
                  <Image 
                    src="/assets/images/testo.png"
                    alt="Ritual icon"
                    width={30}
                    height={30}
                    className="select-none"
                  />
                  <span className="text-[18px] font-['Rethink_Sans'] select-none">Ritual</span>
                  <a 
                    href="https://apps.apple.com/ch/app/testo-ai-boost-yourself/id6741483888?l=en-GB"
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
                  <p className="mb-3">Estimate and track your testosterone levels, libido, and energy in real-time & maximize it by following your personalized daily routine to optimize hormone balance.</p>
                  <div className="inline-block px-3 py-1" style={{ borderRadius: '6px', border: '1px solid #E4E7EC' }}>
                    <span className="text-[14px] text-black">No GTM</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Gloss Item */}
            <div className="border-b-[1.5px] border-dashed border-[#E5E5E5] first:border-t-[1.5px]">
              <div 
                className="flex items-center justify-between cursor-pointer h-[70px]"
                onClick={() => setOpenItemId(openItemId === "redacted" ? null : "redacted")}
              >
                <div className="flex items-center gap-4">
                  <Image 
                    src="/assets/images/gloss.png"
                    alt="Gloss icon"
                    width={30}
                    height={30}
                    className="select-none"
                  />
                  <span className="text-[18px] font-['Rethink_Sans'] select-none">Gloss</span>
                  <a 
                    href="https://apps.apple.com/us/app/gloss-ai-makeup-analysis/id6742034478"
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
                  className={`transition-transform duration-300 ${openItemId === "redacted" ? 'rotate-180' : ''}`}
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
                  height: openItemId === "redacted" ? "auto" : 0,
                  opacity: openItemId === "redacted" ? 1 : 0
                }}
                transition={{
                  height: { duration: 0.3, ease: "easeOut" },
                  opacity: { duration: 0.2, delay: openItemId === "redacted" ? 0.1 : 0 }
                }}
                className="overflow-hidden"
              >
                <div className="pb-6 text-[#B2B2B2] text-[14px] font-['Rethink_Sans'] font-medium select-none">
                  <p className="mb-3">Want to elevate your makeup game effortlessly? Gloss AI is your personal beauty coach, helping you analyze, improve, and master your look with the power of AI.</p>
                  <div className="inline-block px-3 py-1" style={{ borderRadius: '6px', border: '1px solid #E4E7EC' }}>
                    <span className="text-[14px] text-black">No PMF</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
