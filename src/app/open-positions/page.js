'use client'

import Navbar from '../components/navbar'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function OpenPositions() {
  const [openJobId, setOpenJobId] = useState(null);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="relative">
        {/* Left pattern - hidden on mobile */}
        <div className="hidden lg:block fixed left-[70px] top-0 h-screen z-50 animate-fade-in">
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
              Open positions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#B2B2B2] text-[18px] mb-16 font-['Rethink_Sans']"
            >
              Join our (small) team
            </motion.p>
          </div>
          
          {/* Position listings */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-[700px] mx-auto font-['Rethink_Sans']"
          >
            <JobPosition 
              id="operations-lead"
              title="Operations Lead"
              category="management"
              description="We're seeking an Operations Lead to manage our contractors, ensure deadlines are met, and maintain communication with partners and clients to ensure smooth project execution on our apps."
              isOpen={openJobId === "operations-lead"}
              onToggle={() => setOpenJobId(openJobId === "operations-lead" ? null : "operations-lead")}
              salary="$30k - $40k"
            />
            <JobPosition 
              id="video-editor"
              title="Trend Analyst"
              category="marketing"
              description="We're looking for a highly curious and motivated individual (preferably under 25) to help us stay ahead of the curve in the fast-moving world of social media. This is a perfect role for someone who spends their day scrolling through TikTok & Insta, with a deep understanding of gen-z psycology, keeping a sharp eye on emerging trends, viral formats and hot new apps."
              isOpen={openJobId === "video-editor"}
              onToggle={() => setOpenJobId(openJobId === "video-editor" ? null : "video-editor")}
              salary="$12k - $18k"
            />
          </motion.div>
        </div>
      </div>
    </main>
  )
}

function JobPosition({ id, title, category, description, isOpen, onToggle, salary }) {
  return (
    <div className="border-b border-dashed border-[#E5E5E5] first:border-t select-none">
      <div 
        className="flex items-center justify-between cursor-pointer h-[70px] select-none"
        onClick={onToggle}
      >
        <div className="flex items-center gap-4 select-none">
          <h2 className="text-[18px] font-['Rethink_Sans'] select-none">{title}</h2>
          <span className="bg-[#0088FF] text-white px-4 py-1 rounded-[6px] text-[12px] h-[22px] flex items-center select-none">
            {category}
          </span>
        </div>
        <svg 
          width="12" 
          height="7" 
          viewBox="0 0 12 7" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} select-none`}
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
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{
          height: { duration: 0.3, ease: "easeOut" },
          opacity: { duration: 0.2, delay: isOpen ? 0.1 : 0 }
        }}
        className="overflow-hidden"
      >
        <div className="pb-6 text-[#B2B2B2] text-[14px] font-['Rethink_Sans'] font-medium select-none">
          <p className="select-none">{description}</p>
          <div className="flex items-center gap-[10px] mt-6">
            <span className="inline-flex px-4 h-[30px] items-center text-black rounded-[6px] border border-[#E4E7EC] text-[14px] font-['Rethink_Sans'] font-medium select-none">
              {salary}
            </span>
            <a 
              href="https://form.typeform.com/to/dLsnV4lB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-4 h-[30px] items-center text-[#0088FF] rounded-[6px] border border-[rgba(0,136,255,0.15)] bg-[rgba(0,136,255,0.10)] text-[14px] gap-2 transition-transform duration-200 hover:scale-[1.02] font-['Rethink_Sans'] font-medium select-none"
            >
              Apply today
              <Image 
                src="/assets/images/right-arrow.svg"
                alt="Right arrow"
                width={16}
                height={16}
                className="select-none"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
