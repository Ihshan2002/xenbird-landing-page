"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const isMobile = false; 

  return (
    // 1. Reduced pt-32 to pt-24 (less space at the very top)
    <section className="relative bg-xenbird-primary pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-xenbird-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center"> 
        
             <motion.div
              animate={!isMobile ? { rotate: [0, 5, -5, 0] } : {}}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              // 2. Reduced mb-8 to mb-4 (brings the headline closer to the logo)
              className="mb-4" 
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center">
                <Image
                  src="/vector-logo.png"
                  alt="Logo"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
            </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
          Launch your custom-coded <br className="hidden md:block" />
          eCommerce site in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">days</span>.
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          Experience ready-to-use demos first. We customize the code. 
          You launch with confidence—no templates, no complexity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#demos" className="w-full sm:w-auto px-8 py-4 bg-xenbird-secondary hover:bg-blue-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-900/20">
            Explore Demo Sites
          </a>
          <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-all">
            How it Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;