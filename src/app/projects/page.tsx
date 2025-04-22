"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Startup Ecosystem Tracker",
      description:<p>"Developed a dynamic web app to monitor and benchmark startups with insights on funding trends, growth, and market position<br/><br></br>Implemented ML models to forecast startup funding potential and success likelihood using historical and marker data<br/><br></br>Created an interactive dashboard for seamless exploration, comparison, and data-driven decisions for entrepreneurs and investors"</p>,
      stack: "Python, Streamlit, XGBoost, Linear Regression",
      images: ["/projects/startup1.jpg", "/projects/startup2.jpg"]
    },
    {
      title: "Advanced Contextual Question Answering Chatbot",
      description: <p>"Developed an advanced contextual question-answering chatbot leveraging the T5 transformer model. <br/><br></br>Fine-tuned the model on SQuAD dataset to deliver precise and context-aware responses.<br/><br></br>Designed and implemented model architecture to enhance NLP capabilities.<br/><br></br>Achieved high accuracy in real-time question answering tasks through optimization."</p>,
      stack: "Python, Pandas, Fuzzy Logic",
      images: ["/projects/chatbot1.png", "/projects/chatbot2.png"]
    },
    // {
    //   title: "Stock Market Predication",
    //   description: "",
    //   stack: "Python, Pandas, NumPy, Scikit learn",
    //   images: ["/projects/stock1.png", "/projects/stock2.png"]
    // }
  ];

  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-6 overflow-hidden">
      {/* Floating Backgrounds */}
      <div
        className="absolute opacity-30 blur-3xl rounded-full bg-gradient-to-r from-purple-300 to-blue-300 w-64 h-64"
        style={{ left: "10%", top: "10%" }}
      />
      <div
        className="absolute opacity-20 blur-3xl rounded-full bg-gradient-to-r from-green-300 to-emerald-400 w-72 h-72"
        style={{ bottom: "10%", right: "10%" }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I have worked on. Feel free to explore!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={project.images[0]}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.stack}</p>
                <button
                  onClick={() => setSelected(index)}
                  className="inline-block text-sm text-emerald-600 hover:underline"
                >
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {selected !== null && (
          <div className="mt-12 bg-white rounded-xl shadow-xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">{projects[selected].title}</h2>
            <p className="text-gray-700 mb-6">{projects[selected].description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects[selected].images.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`${projects[selected].title} Screenshot ${idx + 1}`}
                  width={600}
                  height={300}
                  className="rounded-xl w-full h-auto object-cover"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
