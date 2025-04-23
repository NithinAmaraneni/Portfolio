"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone,User, Linkedin, Github, Instagram} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    emailjs
      .send(
        "service_v6v30vq", // Your Service ID
        "template_eydumx9", // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "KjaVJBIpv7D3AX1hw" // Your Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-6 overflow-hidden flex items-center justify-center">
      {/* Floating Backgrounds */}
      <div
        className="absolute opacity-30 blur-3xl rounded-full bg-gradient-to-r from-purple-300 to-blue-300 w-64 h-64"
        style={{ top: "10%", left: "10%" }}
      />
      <div
        className="absolute opacity-20 blur-3xl rounded-full bg-gradient-to-r from-green-300 to-emerald-400 w-72 h-72"
        style={{ bottom: "10%", right: "10%" }}
      />

      <div className="max-w-4xl w-full z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            I’m open to opportunities, collaborations, and ideas. Let’s connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center md:text-left"
          > 
            <div className="text-gray-700 flex items-center justify-center md:justify-start">
              <User className="mr-3 text-emerald-500" />
              <span className="font-medium">Amaraneni Nithin</span>
            </div>
            
            <div className="text-gray-700 flex items-center justify-center md:justify-start">
              <Mail className="mr-3 text-emerald-500" />
              <span className="font-medium">anithin287@gmail.com</span>
            </div>
            <div className="text-gray-700 flex items-center justify-center md:justify-start">
              <Phone className="mr-3 text-emerald-500" />
              <span className="font-medium">+91 70934 74908</span>
            </div>

            <div className="space-x-6 mt-6 flex justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/nithinamaraneni200410"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-emerald-600"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="https://github.com/NithinAmaraneni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-emerald-600"
              >
                <Github size={32} />
              </a>
              <a
                href="https://www.instagram.com/_nithin.rao_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-emerald-600"
              >
                <Instagram size={32} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 space-y-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-400 focus:outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-emerald-400 to-teal-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
