"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, Eye, FileText, File } from "lucide-react";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function ResumePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("view");
  const [selectedResume, setSelectedResume] = useState("General");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {

      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const resumes = {
    General: {
      name: "General Resume",
      pdf: "/resume/General-cv.pdf",
      docx: "/resume/General-cv.docx",
    },
    Specialized: {
      name: "Specialized Resume",
      pdf: "/resume/Specialized-cv.pdf",
      docx: "/resume/Specialized-cv.docx",
    },
    Specialized2: {
      name: "Specialized Resume 2",
      pdf: "/resume/Specialized-2-cv.pdf",
      docx: "/resume/Specialized-2-cv.docx",
    },
  };

  const currentResume = resumes[selectedResume];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-6 overflow-hidden">
      <div className="absolute opacity-30 blur-3xl rounded-full bg-gradient-to-r from-purple-300 to-blue-300 w-64 h-64 transition-all duration-500 ease-out" style={{ left: `${mousePosition.x * 0.05}px`, top: `${mousePosition.y * 0.05}px` }} />
      <div className="absolute opacity-20 blur-3xl rounded-full bg-gradient-to-r from-green-300 to-emerald-400 w-72 h-72 transition-all duration-500 ease-out" style={{ right: `${mousePosition.x * 0.02}px`, bottom: `${mousePosition.y * 0.02}px` }} />

      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">My Resume</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Here&apos;s my professional experience, education, and skills. You can view online or download in your preferred format.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white rounded-xl shadow-xl p-4 mb-8 flex justify-center space-x-4 backdrop-blur-sm bg-white/70">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveTab("view")} className={`px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-all duration-300 ${activeTab === "view" ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-200" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
            <Eye size={18} />
            View Resume
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveTab("download")} className={`px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-all duration-300 ${activeTab === "download" ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-200" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
            <Download size={18} />
            Download Resume
          </motion.button>
        </motion.div>

        {activeTab === "view" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white rounded-xl shadow-xl p-8 mb-8 backdrop-blur-sm bg-white/70">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Choose a Resume to Preview</h2>
              <div className="flex gap-4 flex-wrap">
                {Object.keys(resumes).map((key) => (
                  <button key={key} onClick={() => setSelectedResume(key)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedResume === key ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                    {resumes[key].name}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-slate-800">{currentResume.name} Preview</h3>
              <a href={currentResume.pdf} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 flex items-center gap-1 text-sm">
                <Eye size={16} />
                Open Full Screen
              </a>
            </div>
            <div className="aspect-[8.5/11] w-full bg-gray-50 rounded-lg border border-gray-200 shadow-inner flex items-center justify-center overflow-hidden">
              <object data={currentResume.pdf} type="application/pdf" className="w-full h-full">
                <p className="text-center p-6 text-gray-500">Your browser does not support PDFs. <a href={currentResume.pdf} className="text-emerald-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">Download the PDF</a></p>
              </object>
            </div>
          </motion.div>
        )}

        {activeTab === "download" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white rounded-xl shadow-xl p-8 backdrop-blur-sm bg-white/70">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Download Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(resumes).map((resume, index) => (
                <motion.div key={index} whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl shadow-md p-6 border border-gray-200">
                  <div className="mb-4 w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                    <File size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{resume.name} (PDF)</h3>
                  <p className="text-gray-600 text-sm mb-6">Perfect for printing or sharing digitally. Most widely accepted format.</p>
                  <a href={resume.pdf} download className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <Download size={16} />
                    Download PDF
                  </a>
                  <div className="mt-4 w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <FileText size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{resume.name} (DOCX)</h3>
                  <p className="text-gray-600 text-sm mb-6">Editable format. Use this if you need to make adjustments.</p>
                  <a href={resume.docx} download className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <Download size={16} />
                    Download DOCX
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="bg-white rounded-xl shadow-xl p-8 backdrop-blur-sm bg-white/70">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Need a Custom Version?</h2>
          <p className="text-gray-600 mb-6">If you need a tailored version of my resume or have any questions about my experience, feel free to contact me.</p>
          <Link href="/contact">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2">
              <Mail size={18} />
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
