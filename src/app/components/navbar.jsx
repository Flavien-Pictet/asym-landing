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
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-white lg:hidden" 
          style={{ zIndex: 999 }}
        >
          <div className="container mx-auto">
            {/* Close button container */}
            <div className="flex justify-end p-4">
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
              <div>
                <a href="/" className={`h-[80px] flex items-center text-[18px] pl-[18px] border-t border-[#E4E7EC] border-t-[1px] ${pathname === '/' ? 'text-black font-medium' : 'text-[#B2B2B2]'}`}>
                  Home
                </a>
                <div className="border-t border-dashed border-[#E4E7EC] border-t-[1.5px]" />
              </div>
              
              <div>
                <a href="/open-positions" className={`h-[80px] flex items-center text-[18px] pl-[18px] ${pathname === '/open-positions' ? 'text-black font-medium' : 'text-[#B2B2B2]'}`}>
                  Open positions
                </a>
                <div className="border-t border-dashed border-[#E4E7EC] border-t-[1.5px]" />
              </div>
              
              <div>
                <a href="/portfolio" className={`h-[80px] flex items-center text-[18px] pl-[18px] ${pathname === '/portfolio' ? 'text-black font-medium' : 'text-[#B2B2B2]'}`}>
                  Portfolio
                </a>
                <div className="border-t border-dashed border-[#E4E7EC] border-t-[1.5px]" />
              </div>
              
              <div>
                <a href="/publishing" className={`h-[80px] flex items-center text-[18px] pl-[18px] ${pathname === '/publishing' ? 'text-black font-medium' : 'text-[#B2B2B2]'}`}>
                  Publishing
                </a>
                <div className="border-t border-dashed border-[#E4E7EC] border-t-[1.5px]" />
              </div>
              
              <div>
                <a href="/company" className={`h-[80px] flex items-center text-[18px] pl-[18px] ${pathname === '/company' ? 'text-black font-medium' : 'text-[#B2B2B2]'}`}>
                  Company
                </a>
                <div className="border-t border-dashed border-[#E4E7EC] border-t-[1.5px]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
