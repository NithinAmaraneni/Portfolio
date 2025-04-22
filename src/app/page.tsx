"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import devAnimation from "@/assets/HomeAnimation.json";
import bgAnimation from "@/assets/BGAnimation.json";
import { useEffect, useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-6 overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100 text-white">
      
      {/* Interactive Gradient Orbs */}
      <div 
        className="absolute opacity-40 blur-3xl rounded-full bg-gradient-to-r from-purple-300 to-blue-300 w-64 h-64 transition-all duration-500 ease-out"
        style={{
          left: `${mousePosition.x * 0.05}px`,
          top: `${mousePosition.y * 0.05}px`,
        }}
      />
      <div 
        className="absolute opacity-30 blur-3xl rounded-full bg-gradient-to-r from-green-300 to-emerald-400 w-72 h-72 transition-all duration-500 ease-out"
        style={{
          right: `${mousePosition.x * 0.02}px`,
          bottom: `${mousePosition.y * 0.02}px`,
        }}
      />
      
      {/* Background Animation with reduced opacity */}
      <Lottie 
        animationData={bgAnimation} 
        loop={true} 
        className="absolute top-0 left-0 w-full h-full z-0 object-cover opacity-20" 
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full">
        
        {/* Left Animation with hover effect */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <Lottie 
            animationData={devAnimation} 
            loop={true} 
            className="w-[300px] md:w-[400px]" 
          />
        </motion.div>

        {/* Right Text with enhanced typography */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-1/2 md:pl-20 text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold font-['Poppins'] mb-4 leading-tight">
            <span className="text-slate-800">Hi, I'm</span>
            <br />
            <motion.span 
              className="inline-block bg-gradient-to-r from-emerald-400 via-green-500 to-teal-600 bg-clip-text text-transparent font-black font-serif"
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 15, repeat: Infinity }}
            >
              Nithin Amaraneni
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-md md:text-lg text-gray-600 max-w-xl backdrop-blur-sm p-4 rounded-lg bg-white/30"
          >
            Passionate about building scalable web applications and intelligent systems. I strive to merge the world of software engineering with machine learning to solve real-world problems efficiently and innovatively.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link href="/about">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium shadow-lg shadow-emerald-200 hover:shadow-xl transition-all duration-300"
              >
                Know More
              </motion.button>
            </Link>
            {/* <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-white text-emerald-600 font-medium border-2 border-emerald-500 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Contact Me
            </motion.button> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}