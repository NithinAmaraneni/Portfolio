"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  FileText,
  FolderKanban,
  BadgeCheck,
  Mail,
  Sparkles,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActiveLink(window.location.pathname);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={16} /> },
    { name: "About Me", href: "/about", icon: <User size={16} /> },
    { name: "Skills", href: "/skills", icon: <Sparkles size={16} /> },
    { name: "Projects", href: "/projects", icon: <FolderKanban size={16} /> },
    { name: "Certifications", href: "/certifications", icon: <BadgeCheck size={16} /> },
    { name: "Resume", href: "/resume", icon: <FileText size={16} /> },
    { name: "Contact", href: "/contact", icon: <Mail size={16} /> },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`px-6 py-4 flex items-center justify-center sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      {/* Logo (optional) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute left-6 font-bold text-lg"
      >
        {/* <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
          N.A
        </span> */}
      </motion.div>
      
      {/* Desktop Navigation Centered */}
      <ul className="hidden md:flex gap-2 lg:gap-6 p-2 rounded-full bg-white/20 backdrop-blur-md shadow-lg">
        {navLinks.map((link) => (
          <motion.li 
            key={link.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeLink === link.href
                  ? "bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-md"
                  : "text-gray-500 hover:text-emerald-500 hover:bg-white/50"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden absolute right-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-md"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.ul 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full bg-white/90 backdrop-blur-md flex flex-col items-center gap-3 px-6 py-6 md:hidden z-50 shadow-lg rounded-b-2xl border-t border-emerald-100"
        >
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="w-full"
            >
              <Link
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 w-full ${
                  activeLink === link.href
                    ? "bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-md"
                    : "text-gray-600 hover:text-emerald-500 hover:bg-emerald-50"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;