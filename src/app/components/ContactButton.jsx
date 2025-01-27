'use client'

import Image from 'next/image';
import CopyIcon from '../assets/icons/copy.svg';
import { useState } from 'react';

const ContactButton = ({ email = 'contact@asymmetriclabs.xyz' }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof window !== 'undefined' && window.navigator?.clipboard) {
        await window.navigator.clipboard.writeText(email);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } else {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="inline-block p-[6px] rounded-[14px] border border-[#E4E7EC]">
      <button 
        className="
          flex justify-center items-center gap-[6px]
          min-w-[120px] h-[30px] px-[18px] py-[2px]
          whitespace-nowrap
          rounded-[8px]
          border border-[rgba(0,0,0,0.05)]
          bg-[rgba(0,136,255,0.91)]
          shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.60)]
          backdrop-blur-[7px]
          text-white
          hover:bg-[rgba(0,136,255,1)]
          transition-colors
        "
        onClick={handleCopy}
      >
        {!isCopied && (
          <Image
            src={CopyIcon}
            alt="Copy"
            width={14}
            height={14}
            className="text-white shrink-0"
          />
        )}
        <span className="whitespace-nowrap transition-opacity duration-200">
          {isCopied ? (
            <span className="px-[27px]">Copied</span>
          ) : (
            'Copy E-mail'
          )}
        </span>
      </button>
    </div>
  );
};

export default ContactButton; 