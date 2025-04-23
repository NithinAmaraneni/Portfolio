"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Code, Server, Database, Brain, PenTool, Gamepad, Mountain, Music, BookOpen } from "lucide-react";

// Define a type for the possible values of activeSection
type Section = "profile" | null;

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState<Section>(null);

  useEffect(() => {
    // Add type annotation for the MouseEvent
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { name: "Frontend", icon: <Code size={20} /> },
    { name: "Backend", icon: <Server size={20} /> },
    { name: "Database", icon: <Database size={20} /> },
    { name: "Machine Learning", icon: <Brain size={20} /> },
  ];

  const interests = [
    { name: "Painting", icon: <PenTool size={18} /> },
    { name: "Gaming", icon: <Gamepad size={18} /> },
    { name: "Hiking", icon: <Mountain size={18} /> },
    { name: "Music", icon: <Music size={18} /> },
    { name: "Reading", icon: <BookOpen size={18} /> },
  ];

  const projects = [
    {
      name: "Startup Ecosystem Tracker",
      color: "border-blue-500",
      tech: "Python, Streamlit, XGBoost, Linear Regression",
    },
    {
      name: "Advanced Contextual Question Answering Chatbot",
      color: "border-purple-500",
      tech: "Python, Pandas, Fuzzy Logic",
    },
    {
      name: "Stock Market Prediction",
      color: "border-green-500",
      tech: "Python, Pandas, NumPy, Scikit-learn",
    },
  ];

  const certifications = [
    { name: "Introduction to Machine Learning IITKGP", organization: "NPTEL" },
    { name: "Introduction to Internet of Things", organization: "NPTEL" },
    { name: "Data Structure and Algorithms", organization: "GeekForGeeks" },
  ];

  return (
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-6 overflow-hidden">
        {/* Interactive Gradient Orbs that follow cursor */}
        <div
            className="absolute opacity-30 blur-3xl rounded-full bg-gradient-to-r from-purple-300 to-blue-300 w-64 h-64 transition-all duration-500 ease-out"
            style={{
              left: `${mousePosition.x * 0.05}px`,
              top: `${mousePosition.y * 0.05}px`,
            }}
        />
        <div
            className="absolute opacity-20 blur-3xl rounded-full bg-gradient-to-r from-green-300 to-emerald-400 w-72 h-72 transition-all duration-500 ease-out"
            style={{
              right: `${mousePosition.x * 0.02}px`,
              bottom: `${mousePosition.y * 0.02}px`,
            }}
        />

        <div className="max-w-6xl mx-auto">
          {/* Profile & Tech Stack Row */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Profile Card with image and glow effect */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                      "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
                }}
                className="bg-white rounded-xl shadow-xl p-8 flex-1 backdrop-blur-sm bg-white/70 transition-all duration-300"
                onMouseEnter={() => setActiveSection("profile")}
                onMouseLeave={() => setActiveSection(null)}
            >
              <h2 className="text-2xl font-bold mb-6 text-slate-800">Profile</h2>
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-emerald-400 shadow-lg group">
                  {/* Profile image with hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 opacity-10 group-hover:opacity-20 transition-all duration-300" />
                  <motion.div
                      className="absolute inset-0 bg-emerald-500 mix-blend-overlay opacity-0 group-hover:opacity-20 transition-all duration-300"
                      whileHover={{ opacity: 0.2 }}
                  />
                  <Image
                      src="/assets/profile.JPG"
                      alt="Nithin Amaraneni"
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <motion.h3
                    className="text-xl font-semibold mb-2 bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent"
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 15, repeat: Infinity }}
                >
                  ML Engineer & Full Stack Developer
                </motion.h3>

                {/* Show additional info on hover */}
                <motion.p
                    className="text-gray-600 text-center text-sm mt-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: activeSection === "profile" ? 1 : 0,
                      height: activeSection === "profile" ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                >
                  Skilled in creating full-stack applications and implementing ML solutions. Passionate about building innovative technology.
                </motion.p>
              </div>
            </motion.div>

            {/* Tech Stack Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                      "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
                }}
                className="bg-white rounded-xl shadow-xl p-8 flex-[2] backdrop-blur-sm bg-white/70 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-6 text-slate-800">Tech Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Frontend */}
                <motion.div
                    whileHover={{ y: -5, backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                    className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100 transition-all duration-300"
                >
                  <h3 className="font-medium text-emerald-600 mb-2">Frontend</h3>
                  <p className="text-gray-600 text-sm">React, Next.js, HTML5, CSS3, JavaScript, TypeScript</p>
                </motion.div>

                {/* Backend */}
                <motion.div
                    whileHover={{ y: -5, backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                    className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100 transition-all duration-300"
                >
                  <h3 className="font-medium text-emerald-600 mb-2">Backend</h3>
                  <p className="text-gray-600 text-sm">Node.js, Express</p>
                </motion.div>

                {/* Database */}
                <motion.div
                    whileHover={{ y: -5, backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                    className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100 transition-all duration-300"
                >
                  <h3 className="font-medium text-emerald-600 mb-2">Database</h3>
                  <p className="text-gray-600 text-sm">MongoDB, MySQL</p>
                </motion.div>

                {/* Machine Learning */}
                <motion.div
                    whileHover={{ y: -5, backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                    className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100 transition-all duration-300"
                >
                  <h3 className="font-medium text-emerald-600 mb-2">Machine Learning</h3>
                  <p className="text-gray-600 text-sm">TensorFlow, PyTorch, scikit-learn, Pandas, NumPy</p>
                </motion.div>

                {/* Tools & Others */}
                <motion.div
                    whileHover={{ y: -5, backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                    className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100 transition-all duration-300"
                >
                  <h3 className="font-medium text-emerald-600 mb-2">Tools & Others</h3>
                  <p className="text-gray-600 text-sm">Git, GitHub, VS Code, Tailwind CSS</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Projects & Full Stack & Certifications Row */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Projects List with interactive glow effects */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                      "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
                }}
                className="bg-white rounded-xl shadow-xl p-8 flex-1 backdrop-blur-sm bg-white/70 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-6 text-slate-800">Projects</h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{
                          x: 10,
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        }}
                        className={`pl-4 py-3 border-l-4 ${project.color} bg-gray-50 rounded-r-lg shadow-sm transition-all duration-300 cursor-pointer group`}
                    >
                      <p className="text-gray-700">{project.name}</p>
                      <p className="text-gray-500 text-sm">{project.tech}</p>
                      <div
                          className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300`}
                      />
                    </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Full Stack Developer Info with animated background */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                      "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
                }}
                className="bg-white rounded-xl shadow-xl p-8 flex-[2] backdrop-blur-sm bg-white/70 relative overflow-hidden transition-all duration-300"
            >
              {/* Subtle animated background patterns */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-50 to-teal-100 opacity-20 blur-2xl" />
              <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-50 to-teal-100 opacity-20 blur-2xl" />

              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Full Stack Developer & ML Engineer</h2>
                <p className="text-gray-700 text-lg leading-7 mb-6">
                  Creating end-to-end solutions with modern technologies for web applications and AI-powered systems.
                  I&apos;m passionate about building scalable and innovative software that solves real-world problems.
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                      <motion.div
                          key={index}
                          whileHover={{ y: -5, backgroundColor: "rgba(16, 185, 129, 0.2)" }}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-400/10 to-teal-500/10 rounded-full text-sm font-medium text-emerald-600 border border-emerald-200 transition-all duration-300"
                      >
                        {skill.icon}
                        <span>{skill.name}</span>
                      </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Certifications with hover effect zoom */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                      "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
                }}
                className="bg-white rounded-xl shadow-xl p-8 flex-1 backdrop-blur-sm bg-white/70 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-6 text-slate-800">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(16, 185, 129, 0.05)" }}
                        className="p-4 bg-gray-50 rounded-lg shadow-sm transition-all duration-300 group cursor-pointer"
                    >
                      <p className="text-gray-700 font-medium group-hover:text-emerald-600 transition-colors duration-300">
                        {cert.name}
                      </p>
                      <p className="text-gray-500 text-sm">{cert.organization}</p>
                      <motion.div
                          className="h-0.5 bg-gradient-to-r from-emerald-400 to-teal-500 mt-2 rounded-full"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Beyond Code Row */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Beyond Code with animated interests */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                      "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
                }}
                className="bg-white rounded-xl shadow-xl p-8 flex-[2] backdrop-blur-sm bg-white/70 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-6 text-slate-800">Beyond the Code</h2>
              <p className="text-gray-700 mb-6">Interests and hobbies beyond the digital realm.</p>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(16, 185, 129, 0.2)" }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.7 + index * 0.1,
                          scale: { type: "spring", stiffness: 300 },
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-sm font-medium text-emerald-600 transition-all duration-300 cursor-pointer hover:shadow-md"
                    >
                      {interest.icon}
                      <span>{interest.name}</span>
                    </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}