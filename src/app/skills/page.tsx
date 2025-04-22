"use client";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy,
  SiGit, SiGithub, SiTailwindcss
} from "react-icons/si";
import { VscFileCode } from "react-icons/vsc";
import { Tooltip } from "react-tooltip";

export default function SkillsPage() {
  const skills = {
    Frontend: [
      { name: "React", icon: <SiReact />, desc: "UI library for building interfaces" },
      { name: "Next.js", icon: <SiNextdotjs />, desc: "React framework for production" },
      { name: "HTML5", icon: <SiHtml5 />, desc: "Markup language for the web" },
      { name: "CSS3", icon: <SiCss3 />, desc: "Styling language for designing UI" },
      { name: "JavaScript", icon: <SiJavascript />, desc: "Dynamic scripting language" },
      { name: "TypeScript", icon: <SiTypescript />, desc: "Typed superset of JavaScript" },
    ],
    Backend: [
      { name: "Node.js", icon: <SiNodedotjs />, desc: "JavaScript runtime environment" },
      { name: "Express", icon: <SiExpress />, desc: "Web framework for Node.js" },
    ],
    Database: [
      { name: "MongoDB", icon: <SiMongodb />, desc: "NoSQL document database" },
      { name: "MySQL", icon: <SiMysql />, desc: "Relational SQL database" },
    ],
    "Machine Learning": [
      { name: "TensorFlow", icon: <SiTensorflow />, desc: "End-to-end ML platform" },
      { name: "PyTorch", icon: <SiPytorch />, desc: "Deep learning framework" },
      { name: "scikit-learn", icon: <SiScikitlearn />, desc: "ML in Python" },
      { name: "Pandas", icon: <SiPandas />, desc: "Data analysis & manipulation" },
      { name: "Numpy", icon: <SiNumpy />, desc: "Numerical computing library" },
    ],
    "Tools & Others": [
      { name: "Git", icon: <SiGit />, desc: "Version control system" },
      { name: "GitHub", icon: <SiGithub />, desc: "Code hosting platform" },
      { name: "VS Code", icon: <VscFileCode />, desc: "Code editor by Microsoft" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, desc: "Utility-first CSS framework" },
    ],
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12 px-6 overflow-hidden">
      <div className="absolute opacity-30 blur-3xl rounded-full bg-gradient-to-r from-pink-300 to-purple-300 w-64 h-64 left-10 top-10 animate-pulse" />
      <div className="absolute opacity-20 blur-3xl rounded-full bg-gradient-to-r from-indigo-300 to-sky-300 w-72 h-72 right-10 bottom-10 animate-pulse" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
              My Skills
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's a snapshot of the technologies and tools I work with across development and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-2xl p-6 border border-gray-200 backdrop-blur-sm bg-white/70 hover:shadow-purple-200 transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-emerald-600">{category}</h3>
              <ul className="space-y-3">
                {items.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700 group relative"
                  >
                    <div
                      className="text-3xl text-emerald-500 transition-transform group-hover:rotate-6 group-hover:scale-110"
                      data-tooltip-id={`${category}-${skill.name}`}
                      data-tooltip-content={skill.desc}
                    >
                      {skill.icon}
                    </div>
                    <span>{skill.name}</span>
                    <Tooltip id={`${category}-${skill.name}`} place="right" effect="solid" />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
