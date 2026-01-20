'use client';

import Link from 'next/link';
import Image from 'next/image'; // 1. Import Image
import { motion } from 'framer-motion'; // 2. Import motion

const Topnavbar = () => {

  const isMobile = false; 

  return (
    <nav className="fixed top-0 w-full z-50 bg-xenbird-primary/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0">
            {/* 4. Removed the outer <span> as it's invalid to nest a div inside a span */}
            <Link href="/" className="block"> {/* Wrapped in Link for better UX */}
                <motion.div
                  whileHover={!isMobile ? { scale: 1.05, x: 5 } : {}}
                  transition={{ duration: 0.3 }}
                  className="opacity-90 hover:opacity-100 transition-opacity duration-300"
                >
                  <Image
                    src="/text-logo.png"
                    alt="Xenbird Logo" // More descriptive alt text
                    width={120}
                    height={120}
                    className="h-12 w-32 xl:h-16 xl:w-fit object-contain" // Added object-contain to prevent distortion
                    priority // Loads the logo faster since it's above the fold
                  />
                </motion.div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#demos" className="text-gray-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium">
                Demos
              </Link>
              <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium">
                How it Works
              </Link>
              <Link href="#why-xenbird" className="text-gray-300 hover:text-white transition-colors px-3 py-2 text-sm font-medium">
                Why Xenbird
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="#Contact Sales">
              <button className="bg-xenbird-secondary hover:bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-lg">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topnavbar;