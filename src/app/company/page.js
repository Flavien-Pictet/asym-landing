'use client'

import Navbar from '../components/navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import localFont from 'next/font/local'

const glancyr = localFont({
  src: '../../../public/fonts/Glancyr-Medium.ttf',
  variable: '--font-glancyr'
})

export default function Company() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Fixed container with absolute positioning */}
      <div className="w-full absolute top-[100px] lg:top-[150px] left-0 right-0">
        <div className="relative">
          {/* Left pattern - hidden on mobile */}
          <div className="hidden lg:block fixed left-0 top-0 h-screen z-50 pl-[70px]">
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
          <div className="hidden lg:block fixed right-0 top-0 h-screen z-50 pr-[70px]">
            <Image 
              src="/assets/images/sidebar.png"
              alt="Right decorative pattern"
              width={70}
              height={1200}
              className="h-full w-auto"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="px-5 min-h-screen" style={{ paddingBottom: '100px' }}>
            <div className="max-w-[800px] mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[30px] lg:text-[50px] leading-[1.1] mb-8 font-['Recoleta']"
              >
                What if Voodoo &
                <br />
                Rocket Internet had sex?
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full max-w-[800px] mx-auto rounded-[24px] overflow-hidden"
              >
                <Image
                  src="/assets/images/flowers.png"
                  alt="Sunflowers under blue sky"
                  width={800}
                  height={300}
                  className="w-full h-auto"
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-[12px] right-[12px] sm:bottom-[21px] sm:right-[21px] bg-[rgba(0,25,47,0.60)] backdrop-blur-[10px] rounded-[200px] px-[21px] py-[8px] flex items-center justify-center">
                  <span className={`${glancyr.className} text-white text-sm lg:text-base translate-y-[-1px] block`}>
                    asymmetric labs
                  </span>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-[30px] text-[14px] font-['Rethink_Sans'] text-black/30 font-medium max-w-[800px] mx-auto"
              >
                Imagine being a SaaS founder in 2020, thinking you had time. Then LLMs showed up and laughed. The entry barrier to build a SaaS is trending towards 0 and very few software companies will manage to keep a real moat on a tech that's evolving this fast. It's all gonna polarize & only low IQ software and super techy labs will survive. The middle ground will likely die (aka 98% of current B2B SaaS).
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-[30px] inline-flex h-[34px] px-[25px] justify-center items-center rounded-[300px] border border-[rgba(58,113,255,0.15)] bg-[rgba(0,136,255,0.10)]"
              >
                <p className="text-[#0088FF] text-[12px] font-['Rethink_Sans'] flex items-center">
                  DON'T PLAY A LONG-TERM GAME YOU CAN'T WIN
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-[30px] text-[14px] font-['Rethink_Sans'] text-black/30 font-medium max-w-[800px] mx-auto"
              >
                <p className="mb-8">
                  Unless you are an absolute DL wizz (trust us, we&apos;re not), we think it&apos;s too risky to play on the right side of the curve. We believe there&apos;s a multi billion-dollar opportunity by building a cash-machine system exactly like Rocket Internet, Voodoo &amp; Bending Spoons have done for the past 20 years, mixing the best of those 3 models. If you build something today AI will likely commoditize it or make it irrelevant within a few years. For example &gt; why would a company pay for a specific productivity tool when in a few years AI could generate an equivalent app or feature on-demand? (Aside friction from data transitioning).
                </p>
                
                <div className="mb-8">
                  <span className="lg:inline">
                    Yes, products like Notion / Figma / Slack have built defensibility through brand affinity & network effects but they're the exceptions, not the rule. Very few companies can scale fast enough to reach this kind of moat before AI makes them obsolete.
                  </span>
                  <span className="lg:inline">
                    We believe it's important to have the humility to accept that everything's moving too fast to predict the next narrative & <span className="text-black/40 font-bold">back to the fundamentals of human psychology</span>, which hasn't changed much over the last 50 years and probably won't anytime soon.
                  </span>
                </div>
                
                <p>
                  Sure there&apos;ll be a bit of lag before we hit the &quot;prompt2saas&quot; inflexion point… but it will happen anyway. The beauty of low tech B2C products is in its irrationality and its ability to better withstand the paradigm shift we&apos;re entering. It&apos;s way simpler to sell an emotion than a technical solution where the best engineers on the planet are all competing. <span className="text-black/40 font-bold">Emotions don&apos;t get disrupted</span>. B2C products are emotion-driven, irrational and resilient in a way.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-[30px] mb-[30px] inline-flex h-[34px] px-[25px] justify-center items-center rounded-[300px] border border-[rgba(58,113,255,0.15)] bg-[rgba(0,136,255,0.10)]"
                >
                  <p className="text-[#0088FF] text-[12px] font-['Rethink_Sans'] flex items-center">
                    THE HOLLYWOOD OF B2C SOFTWARE
                  </p>
                </motion.div>

                <p className="mb-8">
                  Universal Pictures didn't make every blockbuster in-house &gt; they created a system, recruited top directors, writers and actors &amp; ensured that once a movie hit the box office everything downstream was optimized: marketing / distribution / merchandising... Studios had one job: turn creative potential into predictable profit.
                </p>

                <p className="mb-8">
                  The genius of Voodoo &amp; Rocket Internet wasn't in making original products &gt; it was in <span className="text-black/40 font-bold">industrializing the creative process</span>. They didn't guess what would work, they built feedback loops to systematically test and double down. What we're building here is an industrial cashflow factory where software products are assembly-line tested. We iterate like mad, and when something clicks we scale. Don't be afraid to rip off existing models and straight-up clone them with better execution.
                </p>

                <p>
                  Once we crash-test and validate the framework on 3-4 successful ideas, the real fun begins. Our goal is to onboard the scrappiest independent teams into our GTM machine, take a cut while retaining operational roles to maintain quality & scale execution.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

