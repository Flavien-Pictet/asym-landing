'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ContactButton from './ContactButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const desktopMenuItems = [
    { label: 'Open positions', href: '/open-positions' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Publishing', href: '/publishing' },
    { label: 'Company', href: '/company' },
  ];

  const mobileMenuItems = [
    { label: 'Home', href: '/' },
    ...desktopMenuItems
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[1] bg-white border-b border-[#E4E7EC]">
        <div className="max-w-[1200px] mx-auto md:px-5">
          <div className="flex items-center justify-center py-3.5">
            <div className="flex items-center gap-[74px] w-full justify-center">
              {/* Mobile Layout */}
              <div className="flex md:hidden items-center justify-between w-full mx-[18px]">
                <Link href="/" className="shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={42}
                    height={42}
                    className="rounded-xl"
                  />
                </Link>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-center gap-[74px]">
                <Link href="/" className="shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={42}
                    height={42}
                    className="rounded-xl"
                  />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center">
                  <div className="border border-[#E4E7EC] rounded-[60px] px-8 py-3">
                    <div className="flex items-center gap-8">
                      {desktopMenuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`${
                            pathname === item.href ? 'text-black' : 'text-[#B2B2B2]'
                          } hover:text-black text-[14px] whitespace-nowrap font-['Rethink_Sans']`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Contact Button */}
                <div className="hidden md:block text-[14px]">
                  <ContactButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-white lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-full pointer-events-none'
        }`}
        style={{ zIndex: 999 }}
      >
        <div className="container mx-auto">
          {/* Close button container */}
          <div className="flex justify-end p-4 gap-2">
            <button 
              onClick={() => window.location.href = 'mailto:contact@asymmetriclabs.xyz'}
              className="p-2 w-[42px] h-[42px] rounded-[8px] border border-[rgba(0,0,0,0.15)] bg-[rgba(0,136,255,0.91)] flex items-center justify-center shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.60)] backdrop-blur-[7px]"
            >
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.88889 2.66672L7.3179 6.76651L7.31971 6.76801C7.92253 7.21008 8.22412 7.43125 8.55445 7.51669C8.84643 7.59221 9.15334 7.59221 9.44531 7.51669C9.77593 7.43118 10.0784 7.20936 10.6823 6.76651C10.6823 6.76651 14.1645 4.09422 16.1111 2.66672M1 11.378V4.62245C1 3.6268 1 3.12861 1.19377 2.74832C1.36421 2.41381 1.63598 2.14204 1.97049 1.9716C2.35077 1.77783 2.84897 1.77783 3.84462 1.77783H14.1557C15.1514 1.77783 15.6485 1.77783 16.0288 1.9716C16.3633 2.14204 16.636 2.41381 16.8064 2.74832C17 3.12823 17 3.62583 17 4.61953V11.381C17 12.3747 17 12.8716 16.8064 13.2515C16.636 13.586 16.3633 13.8583 16.0288 14.0287C15.6489 14.2223 15.152 14.2223 14.1583 14.2223H3.8417C2.84799 14.2223 2.3504 14.2223 1.97049 14.0287C1.63598 13.8583 1.36421 13.586 1.19377 13.2515C1 12.8712 1 12.3737 1 11.378Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-black p-2 bg-[#FAFAFA] w-[42px] h-[42px] rounded-[6px] border border-[#E4E7EC] flex items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
              </svg>
            </button>
          </div>

          {/* Menu items */}
          <div className="flex flex-col">
            {mobileMenuItems.map((item, index) => (
              <div 
                key={item.href}
                className={`transition-all duration-300 ease-in-out delay-[${index * 100}ms] ${
                  isMenuOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <a 
                  href={item.href} 
                  className={`h-[80px] flex items-center text-[18px] pl-[18px] ${
                    index === 0 ? 'border-t border-[#E4E7EC] border-t-[1px]' : ''
                  } ${pathname === item.href ? 'text-black font-medium' : 'text-[#B2B2B2]'}`}
                >
                  {item.label}
                </a>
                <div className="border-t border-dashed border-[#E4E7EC] border-t-[1.5px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
