"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Award } from "lucide-react";

export default function CertificationsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Add type annotation for the MouseEvent
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const certifications = [
    {
      title: "Introduction to Internet of Things",
      provider: "NPTEL",
      date: "October 2024",
      link: "https://drive.google.com/file/d/126msBg_2YJwXttvBwI2MqRQ9e07vESPb/view?usp=sharing",
    },
    {
      title: "Introduction to Machine Learning IITKGP",
      provider: "NPTEL",
      date: "September 2024",
      link: "https://drive.google.com/file/d/1_DxoKOoTBYlsWfFQf366-P-mwmME5lew/view?usp=sharing",
    },
    {
      title: "Data Structure and Algorithms",
      provider: "GeeksforGeeks",
      date: "July 2024",
      link: "https://drive.google.com/file/d/16qgfRI4KJMDag-q6q8xZ2rTJgkPKWNk4/view?usp=sharing",
    },
    {
      title: "Mastering Data Structure and Algorithms using C and C++",
      provider: "Udemy",
      date: "February 2024",
      link: "https://drive.google.com/file/d/1cxo_pBiMJrziSNuhlcakb4FxLK7diW7D/view?usp=sharing",
    },
  ];

  return (
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-6 overflow-hidden">
        <div
            className="absolute opacity-30 blur-3xl rounded-full bg-gradient-to-r from-purple-300 to-blue-300 w-64 h-64 transition-all duration-500 ease-out"
            style={{ left: `${mousePosition.x * 0.05}px`, top: `${mousePosition.y * 0.05}px` }}
        />
        <div
            className="absolute opacity-20 blur-3xl rounded-full bg-gradient-to-r from-green-300 to-emerald-400 w-72 h-72 transition-all duration-500 ease-out"
            style={{ right: `${mousePosition.x * 0.02}px`, bottom: `${mousePosition.y * 0.02}px` }}
        />

        <div className="max-w-5xl mx-auto">
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
              Certifications
            </span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of the certifications I’ve earned in tech, design, and development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-600 text-white rounded-full flex items-center justify-center mb-4">
                    <Award size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{cert.provider}</p>
                  <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                  <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-emerald-600 hover:underline"
                  >
                    View Certificate
                  </a>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}