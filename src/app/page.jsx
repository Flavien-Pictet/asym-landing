'use client'

import Navbar from './components/navbar'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Calculate downloads increment per second (6500 per day converted to per second)
  const incrementPerSecond = 6500 / (24 * 60 * 60); // ~0.075 downloads per second

  const [count, setCount] = useState(0); // Start from 0
  const [targetCount, setTargetCount] = useState(() => {
    // Initialize from localStorage or default value
    const stored = localStorage.getItem('lastDownloads');
    const lastTimestamp = localStorage.getItem('lastTimestamp');
    
    if (stored && lastTimestamp) {
      const timeDiff = (Date.now() - parseInt(lastTimestamp)) / 1000;
      const newDownloads = parseInt(stored) + (incrementPerSecond * timeDiff);
      return newDownloads;
    }
    return 534000;
  });

  useEffect(() => {
    // Initial animation from 0 to target
    const animationDuration = 1000; // 1 second animation
    const startTime = Date.now();
    
    const animateCount = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / animationDuration, 1);
      
      setCount(Math.floor(progress * targetCount));
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    
    requestAnimationFrame(animateCount);

    // Regular update interval
    const interval = setInterval(() => {
      setTargetCount(prev => {
        const newValue = prev + (incrementPerSecond * 10);
        localStorage.setItem('lastDownloads', newValue.toString());
        localStorage.setItem('lastTimestamp', Date.now().toString());
        setCount(newValue); // Update count to match target
        return newValue;
      });
    }, 10000);
    
    // Store initial values
    localStorage.setItem('lastDownloads', targetCount.toString());
    localStorage.setItem('lastTimestamp', Date.now().toString());
    
    return () => clearInterval(interval);
  }, [targetCount]);

  return (
    <main className="min-h-screen bg-white lg:overflow-auto overflow-hidden">
      <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      
      <div className="relative h-[100dvh] lg:h-auto">
        {/* Left pattern - hidden on mobile */}
        <div className="hidden lg:block fixed left-[70px] top-0 h-screen z-[40]">
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
        <div className="hidden lg:block fixed right-[70px] top-0 h-screen z-[40]">
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
        
        <div className="flex-1 h-[calc(100dvh-80px)] lg:min-h-[calc(100vh-80px)] flex flex-col justify-center px-5 pt-0 max-w-[1200px] mx-auto overflow-hidden">
          <div className="flex flex-col items-center justify-center text-center -mt-[0vh]">
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
              className="font-['Rethink_Sans'] text-[18px] text-[#B2B2B2] leading-[1.4] lg:leading-[22.4px] tracking-[0.32px] mb-8"
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
              className="inline-flex items-center px-[24px] h-[42px] rounded-[200px] bg-[rgba(0,0,0,0.91)] shadow-[inset_0px_0px_4px_1px_#FFF] backdrop-blur-[7px] text-white relative z-50"
            >
              <span className="text-[16px] select-none">{Math.floor(count).toLocaleString()} downloads 🌎</span>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
} 